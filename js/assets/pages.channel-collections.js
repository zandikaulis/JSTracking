webpackJsonp([45], {
    "+e5i": function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "FriendRequestsNotification_Clear"
                },
                variableDefinitions: [],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "clearUnreadFriendRequests"
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
                                    value: "user"
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
                                    }]
                                }
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 87
            }
        };
        n.loc.source = {
            body: "mutation FriendRequestsNotification_Clear {\nclearUnreadFriendRequests {\nuser {\nid\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    "/LBW": function(e, t, n) {
        "use strict";
        t.h = function(e) {
            var t = {
                action_name: e.actionName,
                action_type: "click",
                client_time: (new Date).getTime(),
                displayed_balance: e.displayedBalance,
                emote_level: e.emoteLevel,
                emote_type: e.emoteType,
                bits_location: e.location || s.ChatTooltip
            };
            a.m.track(r.SpadeEventType.BitsCardInteraction, t)
        }, n.d(t, "b", function() {
            return s
        }), n.d(t, "a", function() {
            return o
        }), t.d = function(e) {
            return e && l[e] ? l[e] : (a.i.error(new Error('Buy Bits card contains improperly rendered offers, or offers unknown to Science. Tracking as "buy_100"'), 'Buy Bits card contains improperly rendered offers, or offers unknown to Science. Tracking as "buy_100"'), o.Buy100)
        }, t.e = function(e) {
            var t = {
                channel: e.channel,
                channel_id: e.channelID,
                available: e.available,
                host: "twitch.tv"
            };
            a.m.track(r.SpadeEventType.BitsAdsAvailability, t)
        }, t.f = function(e) {
            var t = {
                distinct_id: a.n.session.deviceID,
                host: "twitch.tv",
                request_id: e.requestID,
                campaign_id: e.campaignID,
                adblock: e.adblock
            };
            a.m.track(r.SpadeEventType.BitsAdsImpression, t)
        }, n.d(t, "c", function() {
            return i
        }), t.g = function(e) {
            var t = a.m.getLastPageview(),
                n = {
                    location: t ? t.location || "" : "",
                    ad_returned: null,
                    campaign_id: e.campaignID,
                    distinct_id: a.n.session.deviceID,
                    host: "twitch.tv",
                    request_id: e.requestID,
                    request_method: e.requestMethod
                };
            a.m.track(r.SpadeEventType.BitsAdsRequest, n)
        };
        var i, a = n("6sO2"),
            r = n("vH/s"),
            s = {
                ChatTooltip: "card",
                GetBitsButton: "get_bits_button",
                BitsLandingPage: "bits_landing_page"
            },
            o = {
                BuyMain: "buy_main",
                Buy100: "buy_100",
                Buy500: "buy_500",
                Buy1000: "buy_1000",
                Buy1500: "buy_1500",
                Buy5000: "buy_5000",
                Buy10000: "buy_10000",
                Buy25000: "buy_25000",
                CloseCard: "menu_close",
                OpenCard: "menu_open",
                PreviewEmote: "emote_preview",
                WatchAd: "watch_ad",
                WatchAnotherAd: "watch_another_ad"
            },
            l = {
                100: o.Buy100,
                500: o.Buy500,
                1e3: o.Buy1000,
                1500: o.Buy1500,
                5e3: o.Buy5000,
                1e4: o.Buy10000,
                25e3: o.Buy25000
            };
        (i || (i = {})).ShowAdButton = "show_ad_button"
    },
    "1E7T": function(e, t) {},
    "1XdE": function(e, t) {},
    "1pvm": function(e, t) {},
    "2Nqs": function(e, t) {},
    "4JjK": function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return i
        });
        var i;
        ! function(e) {
            e[e.Ready = 0] = "Ready", e[e.Dimensions = 1] = "Dimensions", e[e.RequestAd = 2] = "RequestAd", e[e.OnStart = 3] = "OnStart", e[e.OnCredit = 4] = "OnCredit", e[e.OnFinish = 5] = "OnFinish", e[e.OnClose = 6] = "OnClose", e[e.OnError = 7] = "OnError", e[e.Adblock = 8] = "Adblock", e[e.LimitReached = 9] = "LimitReached"
        }(i || (i = {}))
    },
    "576g": function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "FragmentDefinition",
                name: {
                    kind: "Name",
                    value: "cheer"
                },
                typeCondition: {
                    kind: "NamedType",
                    name: {
                        kind: "Name",
                        value: "User"
                    }
                },
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "cheer"
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
                                            value: "prefix"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
                                    }, {
                                        kind: "Field",
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "type"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
                                    }, {
                                        kind: "Field",
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "tiers"
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
                                                    value: "bits"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: null
                                            }, {
                                                kind: "Field",
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "color"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: null
                                            }, {
                                                kind: "Field",
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "images"
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
                                                            value: "theme"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: null
                                                    }, {
                                                        kind: "Field",
                                                        alias: null,
                                                        name: {
                                                            kind: "Name",
                                                            value: "isAnimated"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: null
                                                    }, {
                                                        kind: "Field",
                                                        alias: null,
                                                        name: {
                                                            kind: "Name",
                                                            value: "dpiScale"
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
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 133
            }
        };
        n.loc.source = {
            body: "fragment cheer on User {\ncheer {\nid\nemotes {\nid\nprefix\ntype\ntiers {\nid\nbits\ncolor\nimages {\nid\nurl\ntheme\nisAnimated\ndpiScale\n}\n}\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    "65au": function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "Current_User"
                },
                variableDefinitions: [],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        alias: null,
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
                                    value: "hasPrime"
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
                end: 50
            }
        };
        n.loc.source = {
            body: "query Current_User {\ncurrentUser {\nid\nhasPrime\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    "6Rwu": function(e, t) {},
    "6lb1": function(e, t) {},
    "6yAw": function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "TopNav_CurrentUser"
                },
                variableDefinitions: [],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        alias: null,
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
                                    value: "hasPrime"
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
                end: 56
            }
        };
        n.loc.source = {
            body: "query TopNav_CurrentUser {\ncurrentUser {\nid\nhasPrime\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    "73jS": function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "ChannelPage_SetSessionStatus"
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
                                value: "SetSessionStatusInput"
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
                            value: "setSessionStatus"
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
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "setAgainInSeconds"
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
                end: 127
            }
        };
        n.loc.source = {
            body: "mutation ChannelPage_SetSessionStatus($input: SetSessionStatusInput!) {\nsetSessionStatus(input: $input) {\nsetAgainInSeconds\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    "7L7x": function(e, t) {},
    "7LBo": function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "TopNav_User_UpdateVisibility"
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
                                value: "UpdateVisibilityInput"
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
                            value: "updateVisibility"
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
                                alias: null,
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
                                            value: "availability"
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
            }],
            loc: {
                start: 0,
                end: 134
            }
        };
        n.loc.source = {
            body: "mutation TopNav_User_UpdateVisibility($input: UpdateVisibilityInput!) {\nupdateVisibility(input: $input) {\nuser {\nid\navailability\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    "7Nlu": function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            a = n("U7vG"),
            r = n("6sO2"),
            s = n("7vx8"),
            o = n("5kgt"),
            l = n("Odds"),
            c = n("rZAm"),
            d = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    return a.createElement(l.S, i.__assign({
                        onClick: this.props.onClick,
                        linkTo: this.props.linkTo,
                        hover: this.props.hover,
                        tabIndex: -1,
                        key: this.props.id
                    }, Object(o.a)(this.props)), a.createElement(l.U, {
                        className: "search-game-result-card",
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, a.createElement(l.A, {
                        row: !0
                    }, a.createElement(l.C, {
                        imageAlt: this.props.imageAlt,
                        imageSrc: this.props.data && !this.props.data.loading && this.props.data.game ? this.props.data.game.boxArtURL : r.a.defaultBoxArtURL,
                        size: l.D.Size4,
                        aspect: l.k.BoxArt
                    }), a.createElement(l.B, null, a.createElement(l.P, {
                        padding: {
                            x: 1
                        }
                    }, a.createElement(l._22, {
                        type: l._27.H5,
                        ellipsis: !0
                    }, this.props.title))))))
                }, t = i.__decorate([Object(s.a)(c, {
                    options: function(e) {
                        return {
                            variables: {
                                name: e.title
                            }
                        }
                    }
                })], t)
            }(a.Component);
        n.d(t, "a", function() {
            return d
        })
    },
    "8PKe": function(e, t, n) {
        "use strict";
        var i = n("RH2O"),
            a = n("TToO"),
            r = n("OAwv"),
            s = n("U7vG"),
            o = n("6sO2"),
            l = n("+Znq"),
            c = n("7vx8"),
            d = n("S1vB"),
            u = n("CSlQ"),
            m = n("Odds"),
            p = (n("f8UT"), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return s.createElement(m.U, null, s.createElement(m._18, {
                        className: "prime-offer-header",
                        borderBottom: !0,
                        background: m.m.Alt2,
                        padding: {
                            x: 1,
                            y: .5
                        }
                    }, s.createElement(m._22, {
                        bold: !0,
                        type: m._27.H6
                    }, Object(o.d)("Free with Prime", "PrimeOfferHeader"))), this.getNumOfUnseenOffersDisplay())
                }, t.prototype.getNumOfUnseenOffersDisplay = function() {
                    var e = this.props.numOfUnseenOffers;
                    if (e) return s.createElement(m._18, {
                        className: "prime-offer__new-offer-header",
                        borderBottom: !0,
                        background: m.m.Alt2,
                        padding: {
                            x: 1,
                            y: .5
                        }
                    }, s.createElement(m.U, {
                        fullWidth: !0,
                        display: m.H.Flex,
                        alignItems: m.c.Center
                    }, s.createElement(m.U, {
                        flexGrow: 1
                    }, s.createElement(m._22, {
                        bold: !0,
                        type: m._27.H6
                    }, Object(o.d)("New Prime Loot", "PrimeOfferHeader"))), s.createElement(m.U, {
                        className: "prime-offer__new-offer-header-count",
                        textAlign: m._23.Center
                    }, s.createElement(m._18, {
                        className: "prime-offer__new-offer-header-count__text",
                        background: m.m.Base,
                        color: m.F.Base,
                        display: m.H.Flex,
                        alignItems: m.c.Center,
                        justifyContent: m.T.Center
                    }, s.createElement(m._22, null, e.toString())))))
                }, t = a.__decorate([Object(u.c)("PrimeOfferHeader")], t)
            }(s.Component)),
            f = n("zCIC"),
            h = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = Object(o.d)("You'll get characters, vehicles, skins, and boosts for games like {hearthstone} and {smite}, plus surprises like a rotating selection of indie games.", {
                        hearthstone: s.createElement(m._22, {
                            italic: !0,
                            type: m._27.Span
                        }, Object(o.d)("Hearthstone", "PrimeEmpty")),
                        smite: s.createElement(m._22, {
                            italic: !0,
                            type: m._27.Span
                        }, Object(o.d)("Smite", "PrimeEmpty"))
                    }, "PrimeEmpty");
                    return s.createElement(m.U, {
                        className: "prime-empty",
                        margin: 2
                    }, s.createElement(m.U, {
                        textAlign: m._23.Center,
                        margin: 2
                    }, s.createElement("img", {
                        className: "prime-empty__image",
                        src: "https://m.media-amazon.com/images/G/01/sm/landing/Trunk_w_Star_transparent._V530838660_.png",
                        alt: Object(o.d)("Prime Treasure Chest", "PrimeEmpty")
                    })), s.createElement(m._22, {
                        type: m._27.P,
                        bold: !0
                    }, Object(o.d)("Free in-game loot every month, plus surprises", "PrimeEmpty")), s.createElement("div", null, e))
                }, t = a.__decorate([Object(u.c)("PrimeEmpty")], t)
            }(s.Component),
            g = n("lfvs"),
            v = n("oIkB"),
            y = n("R0Kh"),
            k = (n("w/8h"), n("sq7i")),
            b = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return s.createElement(m.U, {
                        className: "prime-claim-button"
                    }, this.getClaimButton())
                }, t.prototype.getClaimButton = function() {
                    var e = this.props,
                        t = this.getButtonText(),
                        n = s.createElement(m.u, {
                            fullWidth: !0,
                            state: this.props.claiming ? m.y.Loading : m.y.Default,
                            disabled: this.props.claiming,
                            onClick: this.props.claimCallback,
                            "data-a-target": "prime-claim-button"
                        }, t);
                    return e.offerType === y.a.EXTERNAL_OFFER ? s.createElement(m.u, {
                        fullWidth: !0,
                        linkTo: e.offerLinkUri,
                        targetBlank: !0
                    }, t) : s.createElement(m.U, {
                        position: m._3.Relative
                    }, n)
                }, t.prototype.getButtonText = function() {
                    return this.props.offerType === y.a.CLAIM_CODE ? Object(o.d)("Get Code", "PrimeClaimButton") : this.props.offerType === y.a.EXTERNAL_OFFER ? Object(o.d)("Learn More", "PrimeClaimButton") : Object(o.d)("Claim Offer", "PrimeClaimButton")
                }, t = a.__decorate([Object(c.a)(k), Object(u.c)("PrimeClaimButton")], t)
            }(s.Component),
            _ = function(e) {
                function t() {
                    var t = e.call(this) || this;
                    return t.toggleShowDescription = function() {
                        t.setState({
                            showDescription: !t.state.showDescription
                        })
                    }, t.state = {
                        showDescription: !1
                    }, t
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return s.createElement(m.U, {
                        className: "prime-claim-description",
                        margin: {
                            top: 1
                        }
                    }, s.createElement(m.u, {
                        fullWidth: !0,
                        type: m.z.Hollow,
                        onClick: this.toggleShowDescription
                    }, this.getDescriptionButtonText()), this.getDescriptionBlock())
                }, t.prototype.getDescriptionButtonText = function() {
                    return this.state.showDescription ? Object(o.d)("Close Info", "PrimeClaimDescription") : Object(o.d)("More Info", "PrimeClaimDescription")
                }, t.prototype.getDescriptionBlock = function() {
                    var e = null;
                    return this.state.showDescription && (e = s.createElement(m._18, {
                        className: "prime-claim-description__body",
                        background: m.m.Alt2,
                        border: !0
                    }, s.createElement(m.U, {
                        margin: {
                            bottom: 2
                        },
                        padding: 1
                    }, s.createElement(g, {
                        source: this.props.description || ""
                    })))), e
                }, t = a.__decorate([Object(u.c)("PrimeClaimDescription")], t)
            }(s.Component),
            S = n("Hs3O"),
            N = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.getLink = function() {
                    return this.props.externalUri ? this.props.externalUri : Object(S.d)(S.c, window.location.pathname.substring(1))
                }, t.prototype.render = function() {
                    return s.createElement(m.U, {
                        className: "prime-upsell-button",
                        margin: {
                            top: 2,
                            bottom: 1
                        }
                    }, s.createElement(m.u, {
                        fullWidth: !0,
                        linkTo: this.getLink(),
                        targetBlank: !0
                    }, Object(o.d)("Start Your Free Trial", "PrimeUpsellButton")))
                }, t = a.__decorate([Object(u.c)("PrimeUpsellButton")], t)
            }(s.Component),
            C = n("e2wA"),
            E = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return s.createElement(m.U, {
                        className: "prime-claim",
                        margin: {
                            top: 2,
                            bottom: 1
                        }
                    }, this.getCallToAction(), this.getClaimDescriptionSection())
                }, t.prototype.getCallToAction = function() {
                    var e = this.props.data;
                    return !e.loading && !e.error && e.currentUser && e.currentUser.hasPrime ? s.createElement(b, {
                        offerType: this.props.offerType,
                        offerId: this.props.offerId,
                        claimCallback: this.props.claimCallback,
                        claiming: this.props.claiming,
                        offerLinkUri: this.props.externalUri
                    }) : s.createElement(N, {
                        externalUri: this.props.externalUri
                    })
                }, t.prototype.getClaimDescriptionSection = function() {
                    return this.props.offerType === y.a.EXTERNAL_OFFER ? null : s.createElement(_, {
                        description: this.props.offerDescription
                    })
                }, t = a.__decorate([Object(c.a)(C), Object(u.c)("PrimeInstructions")], t)
            }(s.Component),
            O = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return s.createElement(m._18, {
                        background: m.m.Alt2,
                        display: m.H.Flex,
                        justifyContent: m.T.Center,
                        padding: {
                            y: 1
                        },
                        margin: {
                            bottom: 1
                        },
                        textAlign: m._23.Center
                    }, s.createElement(m._22, {
                        type: m._27.H4,
                        align: m._37.Middle
                    }, s.createElement(m._18, {
                        padding: 1,
                        display: m.H.InlineFlex,
                        flexGrow: 1,
                        flexWrap: m.K.NoWrap,
                        alignItems: m.c.Center,
                        fontSize: this.props.fontSize ? this.props.fontSize : m.L.Size5,
                        "data-a-target": "prime-error-glitch"
                    }, s.createElement(m.U, {
                        margin: {
                            right: 1
                        },
                        display: m.H.InlineFlex,
                        flexGrow: 1,
                        flexWrap: m.K.NoWrap,
                        alignItems: m.c.Center
                    }, s.createElement(m._9, {
                        asset: m._10.DeadGlitch,
                        type: m._11.Alert,
                        width: 20,
                        height: 20
                    })), Object(o.d)("Something has gone wrong. Please try again later.", "PrimeError"))))
                }, t = a.__decorate([Object(u.c)("PrimeError")], t)
            }(s.Component),
            w = (n("nFc2"), function(e) {
                function t() {
                    var t = e.call(this) || this;
                    return t.setRef = function(e) {
                        t.setState({
                            clipboardInput: e
                        })
                    }, t.copy = function() {
                        var e;
                        try {
                            t.state.clipboardInput && t.state.clipboardInput.select(), e = document.execCommand("copy")
                        } catch (t) {
                            e = !1
                        }
                        return t.setState({
                            copied: e
                        }), e
                    }, t.state = {
                        copied: !1,
                        clipboardInput: void 0
                    }, t
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = this.state.copied ? Object(o.d)("copied", "CopyButton") : Object(o.d)("copy", "CopyButton");
                    return s.createElement(m.U, {
                        className: "copy-button copy-btn",
                        display: m.H.Flex
                    }, s.createElement(m.P, {
                        className: "copy-button__btn"
                    }, s.createElement(m.u, {
                        onClick: this.copy,
                        type: this.state.copied ? m.z.Success : m.z.Default
                    }, e)), s.createElement("input", {
                        className: "copy-button__copy-input",
                        ref: this.setRef,
                        value: this.props.clipboardText,
                        readOnly: !0
                    }))
                }, t = a.__decorate([Object(u.c)("CopyButton")], t)
            }(s.Component)),
            U = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onChange = function(e) {
                        t.setState({
                            value: e.currentTarget.value,
                            copied: !1
                        })
                    }, t
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.componentWillMount = function() {
                    this.props.initialText && this.setState({
                        value: this.props.initialText,
                        copied: !1
                    })
                }, t.prototype.render = function() {
                    return this.state && this.state.value ? s.createElement(m.U, {
                        className: "copyable-item",
                        display: m.H.Flex,
                        flexGrow: 1
                    }, s.createElement(m.U, {
                        flexGrow: 1
                    }, s.createElement(m.Q, {
                        type: m.R.Text,
                        onChange: this.onChange,
                        value: this.state.value,
                        disabled: this.props.disabled,
                        readOnly: this.props.readOnly
                    })), s.createElement(m.U, null, s.createElement(w, {
                        clipboardText: this.state.value
                    }))) : null
                }, t = a.__decorate([Object(u.c)("CopyableItem")], t)
            }(s.Component),
            x = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return s.createElement(m._18, {
                        className: "prime-claim-instructions",
                        background: m.m.Alt2,
                        border: !0,
                        padding: 1,
                        fontSize: m.L.Size6
                    }, s.createElement(m._36, null, s.createElement(g, {
                        source: this.props.claimInstructions || "",
                        escapeHtml: !0
                    })))
                }, t = a.__decorate([Object(u.c)("PrimeClaimInstructions")], t)
            }(s.Component),
            F = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return s.createElement(m.U, {
                        className: "prime-redeem",
                        margin: {
                            top: 1
                        }
                    }, this.getCodeOrConfirmation(), this.getPrimeClaimInstructions())
                }, t.prototype.getCodeOrConfirmation = function() {
                    return this.props.code && this.props.deliveryMethod === y.a.CLAIM_CODE ? s.createElement(m.U, null, s.createElement(U, {
                        initialText: this.props.code,
                        readOnly: !0,
                        textCenter: !0
                    })) : s.createElement(m._18, {
                        background: m.m.Alt2,
                        display: m.H.Flex,
                        justifyContent: m.T.Center,
                        padding: {
                            y: 1
                        },
                        margin: {
                            bottom: 1
                        }
                    }, s.createElement(m._22, {
                        type: m._27.H4,
                        align: m._37.Middle
                    }, s.createElement(m.U, {
                        padding: 1,
                        display: m.H.InlineFlex,
                        flexGrow: 1,
                        flexWrap: m.K.NoWrap,
                        alignItems: m.c.Center,
                        "data-a-target": "prime-redeem-check"
                    }, s.createElement(m.U, {
                        margin: {
                            right: 1
                        },
                        display: m.H.InlineFlex,
                        flexGrow: 1,
                        flexWrap: m.K.NoWrap,
                        alignItems: m.c.Center
                    }, s.createElement(m._9, {
                        asset: m._10.Check,
                        type: m._11.Success,
                        width: 20,
                        height: 20
                    })), Object(o.d)("Added To Your Twitch Account", "PrimeRedeem"))))
                }, t.prototype.getPrimeClaimInstructions = function() {
                    if (this.props.claimInstructions) return s.createElement(x, {
                        claimInstructions: this.props.claimInstructions || ""
                    })
                }, t = a.__decorate([Object(u.c)("PrimeRedeem")], t)
            }(s.Component),
            T = n("el3o"),
            I = (n("v+rJ"), n("rM0q")),
            D = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        claimed: !1,
                        claiming: !1,
                        error: !1,
                        claimData: ""
                    }, t.renderRedeemUpsellOrClaimSection = function(e) {
                        var n = e.content || {},
                            i = e.self || {
                                claimData: ""
                            },
                            a = (t.props.data || {}).currentUser || {};
                        if (t.state.error) return s.createElement(O, {
                            fontSize: m.L.Size6
                        });
                        if ((t.isCurrentOfferClaimed(e) || t.state.claimed) && a && a.hasPrime) {
                            var r = t.state.claimData || i.claimData;
                            return s.createElement(F, {
                                claimInstructions: e.claimInstructions,
                                code: r,
                                deliveryMethod: e.deliveryMethod
                            })
                        }
                        return s.createElement(E, {
                            offerId: e.id,
                            offerDescription: e.description || "",
                            offerType: e.deliveryMethod || "",
                            externalUri: n.externalURL || "",
                            claimCallback: t.claimOffer,
                            claiming: t.state.claiming
                        })
                    }, t.claimOffer = function(e) {
                        e.nativeEvent.stopImmediatePropagation(), t.setState({
                            claiming: !0
                        });
                        var n = t.props.data;
                        if (!n.loading && !n.error && n.currentUser.id) {
                            var i = n.currentUser.id,
                                a = t.props.offer,
                                r = Object(v.a)({
                                    offerID: a.id
                                });
                            t.props.claimPrimeOffer(r).then(function(e) {
                                var n = ((e.data || {}).claimPrimeOffer || {}).self || {};
                                n && a && t.setState({
                                    claimData: n.claimData
                                }), t.markAsClaimedInLocalStorage(i)
                            }).catch(function() {
                                t.setState({
                                    claiming: !1,
                                    claimed: !1,
                                    error: !0
                                })
                            })
                        }
                    }, t.markAsClaimedInLocalStorage = function(e) {
                        var n = t.props.offer,
                            i = y.b(n.id, e),
                            a = y.c();
                        a.push(i), y.f(a), t.setState({
                            claiming: !1,
                            claimed: !0,
                            error: !1
                        })
                    }, t
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = this.props.offer,
                        t = this.props.isLast || !1;
                    if (e) {
                        var n = e.content || {},
                            i = n.game || {},
                            a = n.categories || [];
                        return s.createElement(m._18, {
                            className: "prime-offer",
                            alignItems: m.c.Center,
                            borderBottom: !t,
                            padding: {
                                x: 2,
                                y: 1
                            }
                        }, s.createElement(m.U, {
                            className: "prime-offer__title",
                            padding: {
                                y: .5
                            }
                        }, s.createElement(g, {
                            className: "prime-offer__title__markdown",
                            containerTagName: "h4",
                            source: e.title || ""
                        })), s.createElement("img", {
                            src: e.imageURL
                        }), s.createElement(m.U, {
                            className: "prime-offer__description",
                            padding: {
                                top: .5
                            }
                        }, s.createElement(m._22, {
                            type: m._27.P
                        }, i.name, " ", a[0])), s.createElement(m.U, {
                            className: "prime-offer__publisher"
                        }, s.createElement(m._22, {
                            type: m._27.P,
                            color: m.F.Alt2,
                            fontSize: m.L.Size7
                        }, n.publisher)), this.renderRedeemUpsellOrClaimSection(e))
                    }
                    return null
                }, t.prototype.isCurrentOfferClaimed = function(e) {
                    return (e.self || {
                        hasEntitlement: !1
                    }).hasEntitlement || this.isCurrentOfferClaimedInLocalStorage()
                }, t.prototype.isCurrentOfferClaimedInLocalStorage = function() {
                    var e = this.props.data,
                        t = this.props.offer;
                    if (!e.loading && !e.error && e.currentUser) {
                        var n = e.currentUser.id,
                            i = y.b(t.id, n);
                        return y.c().includes(i)
                    }
                }, t = a.__decorate([Object(c.a)(I, {
                    name: "data"
                }), Object(c.a)(T, {
                    name: "claimPrimeOffer"
                }), Object(u.c)("PrimeOffer")], t)
            }(s.Component),
            A = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return s.createElement(m._18, {
                        className: "prime-offer-placeholder",
                        alignItems: m.c.Center,
                        borderBottom: !0,
                        padding: {
                            x: 2,
                            y: 1
                        }
                    }, s.createElement(m.U, {
                        className: "prime-offer-placeholder__title",
                        padding: {
                            y: .5
                        }
                    }, s.createElement(m._2, {
                        height: 20
                    })), s.createElement(m._2, {
                        height: 160
                    }), s.createElement(m.U, {
                        className: "prime-offer-placeholder__description",
                        padding: {
                            y: .5
                        }
                    }, s.createElement(m._2, {
                        height: 20,
                        width: 160
                    })), s.createElement(m.U, {
                        className: "prime-offer-placeholder__publisher"
                    }, s.createElement(m._2, {
                        height: 20,
                        width: 80
                    })), s.createElement(m.U, {
                        className: "prime-offer-placeholder__claim",
                        margin: {
                            top: 2,
                            bottom: 1
                        }
                    }, s.createElement(m._2, {
                        height: 40
                    })))
                }, t = a.__decorate([Object(u.c)("PrimeOfferPlaceholder")], t)
            }(s.Component),
            B = (n("7L7x"), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return s.createElement(m._18, {
                        "data-a-target": "prime-offers-upsell",
                        className: "prime-offers-upsell",
                        alignItems: m.c.Center,
                        padding: {
                            x: 2,
                            y: 1
                        },
                        borderBottom: !0
                    }, s.createElement(m._22, {
                        type: m._27.H4
                    }, Object(o.d)("Claim With Twitch Prime", "PrimeUpsell")), s.createElement(m.U, {
                        className: "prime-upsell__logo-container",
                        fullWidth: !0,
                        margin: {
                            y: 2
                        },
                        textAlign: m._23.Center
                    }, s.createElement(m._9, {
                        asset: m._10.LogoTwitchPrime,
                        width: 330,
                        height: 150,
                        type: m._11.Brand
                    })), s.createElement(m._22, {
                        type: m._27.P
                    }, Object(o.d)("Get free game loot like this every month plus surprises, ad-free viewing, and loads more with Twitch Prime.", "PrimeUpsell")), s.createElement(N, null))
                }, t = a.__decorate([Object(u.c)("PrimeUpsell")], t)
            }(s.Component)),
            L = n("eY4D"),
            R = (n("DgR+"), n("65au")),
            j = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.shouldShowPlaceholders = function() {
                        var e = t.props.offersData,
                            n = e.primeOffers,
                            i = void 0 === n || null === n;
                        return e.loading || !e.error && i && t.props.showByDefault
                    }, t.renderOfferPlaceholders = function() {
                        for (var e = [], t = 0; t < 3; ++t) e.push(s.createElement(A, {
                            key: t
                        }));
                        return e
                    }, t
                }
                return a.__extends(t, e), t.prototype.componentDidUpdate = function() {
                    var e = this.props.offersData;
                    e && e.primeOffers && this.props.latencyTracking.reportInteractive(e.primeOffers.length)
                }, t.prototype.render = function() {
                    return s.createElement(f.b, {
                        className: "prime-offer-listing"
                    }, s.createElement(m.U, {
                        className: "prime-offer-listing__content",
                        alignItems: m.c.Center,
                        padding: {
                            top: 1,
                            bottom: 2,
                            left: 1,
                            right: 1
                        }
                    }, this.renderUpsell(), this.renderOfferExperience()))
                }, t.prototype.renderUpsell = function() {
                    var e = this.props.userData;
                    if (!e.loading && !e.error && !this.currentUserHasPrime(e)) return s.createElement(B, null)
                }, t.prototype.renderOfferExperience = function() {
                    var e = this.props.offersData;
                    if (this.shouldShowPlaceholders()) return this.renderOfferPlaceholders();
                    if (!e.error && e.primeOffers && e.primeOffers.length) {
                        var t = this.getSortedOffers(),
                            n = t[t.length - 1];
                        return t.map(function(e) {
                            return s.createElement(D, {
                                key: e.id,
                                offer: e,
                                isLast: n.id === e.id
                            })
                        })
                    }
                    return s.createElement(h, null)
                }, t.prototype.getSortedOffers = function() {
                    var e = this.props.offersData.primeOffers,
                        t = this.getUserId();
                    if (t) {
                        var n = Object(y.c)(),
                            i = e.filter(function(e) {
                                return !n.includes(Object(y.b)(e.id, t))
                            }).sort(y.i),
                            a = e.filter(function(e) {
                                return !i.includes(e)
                            }).sort(y.i);
                        return i.concat(a)
                    }
                    return e.slice().sort(y.i)
                }, t.prototype.getUserId = function() {
                    var e = this.props.userData;
                    return !e.loading && !e.error && e.currentUser && e.currentUser.id ? e.currentUser.id : ""
                }, t.prototype.currentUserHasPrime = function(e) {
                    var t = e.currentUser;
                    return t && t.hasPrime
                }, t = a.__decorate([Object(c.a)(L, {
                    name: "offersData",
                    options: function() {
                        return {
                            variables: {
                                dateOverride: Object(y.d)()
                            }
                        }
                    }
                }), Object(c.a)(R, {
                    name: "userData"
                }), Object(u.c)("PrimeOfferList")], t)
            }(s.Component),
            P = n("tTbW"),
            H = (n("9856"), n("wjhu")),
            M = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        numOfUnseenOffers: 0
                    }, t.showOffersByDefault = function() {
                        var e = location.search,
                            n = r.parse(e);
                        return n && !!n.expandoffers || t.props.openByDefault
                    }, t.onToggleMenu = function(e) {
                        t.seeOffers(), e && t.setState({
                            numOfUnseenOffers: 0
                        })
                    }, t.getUnseenOffers = function(e) {
                        var n = e.offersData;
                        if (n && !n.loading && !n.error) {
                            var i = n.primeOffers || [],
                                a = y.e();
                            t.setState({
                                numOfUnseenOffers: i.filter(function(e) {
                                    return !(a.includes(e.id) || t.offerIsClaimed(e))
                                }).length
                            })
                        }
                    }, t.offerIsClaimed = function(e) {
                        return e.self && e.self.hasEntitlement
                    }, t.seeOffers = function() {
                        var e = t.props.offersData;
                        if (e && !e.loading && !e.error) {
                            var n = (e.primeOffers || []).map(function(e) {
                                return "" + e.id
                            });
                            y.g(n)
                        }
                    }, t.renderOfferList = function() {
                        var e = t.props.offersData,
                            n = t.showOffersByDefault() || !1;
                        return e && !e.loading && !e.error || n ? s.createElement(m.U, {
                            "data-a-target": "offers-list",
                            className: "prime-offers__list"
                        }, s.createElement(p, {
                            numOfUnseenOffers: t.state.numOfUnseenOffers
                        }), s.createElement(j, {
                            showByDefault: n
                        })) : null
                    }, t
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.getUnseenOffers(this.props)
                }, t.prototype.componentWillReceiveProps = function(e) {
                    this.getUnseenOffers(e)
                }, t.prototype.render = function() {
                    var e = this.props.userData && this.props.userData.requestInfo && Object(d.a)(this.props.userData.requestInfo.countryCode),
                        t = this.props.userData && this.props.userData.currentUser && this.props.userData.currentUser.hasPrime;
                    if (!e && !t) return null;
                    var n = {
                        align: m._31.Center,
                        direction: m._32.Bottom,
                        label: ""
                    };
                    return this.state.numOfUnseenOffers > 0 ? n.label = Object(o.d)("New Prime Loot", "PrimeOffers") : n.label = Object(o.d)("Prime Loot", "PrimeOffers"), s.createElement(m.U, {
                        className: "prime-offers",
                        position: m._3.Relative
                    }, s.createElement(l.a, {
                        onToggle: this.onToggleMenu,
                        openByDefault: this.showOffersByDefault(),
                        tooltipProps: n
                    }, s.createElement(m.v, {
                        ariaLabel: Object(o.d)("Prime offers", "PrimeOffers"),
                        overlay: !0,
                        size: m.x.Large,
                        icon: m._10.Crown,
                        "data-a-target": "prime-offers-icon",
                        "data-target": "prime-offers-icon"
                    }), s.createElement(m.p, {
                        direction: m.q.BottomRight,
                        size: m.r.Large,
                        offsetX: "9px"
                    }, this.renderOfferList())), this.renderUnseenOffersDisplay())
                }, t.prototype.renderUnseenOffersDisplay = function() {
                    var e = this.state.numOfUnseenOffers;
                    if (e) return s.createElement(m.U, {
                        className: "prime-offers__pill",
                        position: m._3.Absolute
                    }, s.createElement(m.e, {
                        type: m.i.BounceIn,
                        duration: m.g.Medium,
                        timing: m.h.EaseIn,
                        enabled: e > 0
                    }, s.createElement(m._0, {
                        label: e.toString(),
                        type: m._1.Notification
                    })))
                }, t = a.__decorate([Object(c.a)(P, {
                    name: "offersData",
                    skip: function(e) {
                        return !e.firstPageLoaded
                    },
                    options: function() {
                        return {
                            variables: {
                                dateOverride: Object(y.d)()
                            }
                        }
                    }
                }), Object(c.a)(H, {
                    name: "userData"
                }), Object(u.c)("PrimeOffers", {
                    autoReportInteractive: !0
                })], t)
            }(s.Component),
            W = Object(i.a)(function(e) {
                return {
                    firstPageLoaded: !!e.session.firstPageLoaded
                }
            })(M),
            V = (n("1XdE"), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    return s.createElement(m._18, {
                        className: "net-neutrality-bar",
                        position: m._3.Relative,
                        fullWidth: !0
                    }, s.createElement(m.U, {
                        className: "net-neutrality-bar__bar",
                        display: m.H.Flex,
                        alignItems: m.c.Center,
                        justifyContent: m.T.Between,
                        flexWrap: m.K.NoWrap,
                        margin: "auto",
                        padding: {
                            x: 2,
                            y: .5
                        }
                    }, s.createElement(m.U, {
                        display: m.H.InlineFlex,
                        alignItems: m.c.Center,
                        padding: {
                            right: .5
                        }
                    }, s.createElement(m.P, {
                        display: m.H.InlineFlex,
                        alignItems: m.c.Center,
                        margin: {
                            right: .5
                        },
                        flexShrink: 0
                    }, s.createElement("figure", null, s.createElement("svg", {
                        width: 20,
                        height: 20,
                        fill: "currentColor",
                        viewBox: "0 0 20 20",
                        x: "0px",
                        y: "0px"
                    }, s.createElement("path", {
                        "fill-rule": "nonzero",
                        d: "M12,17 L12,18 L10,20 L8,18 L8,17 L3,17 L1,15 L1,4 L3,2 L17,2 L19,4 L19,15 L17,17 L12,17 Z M9,13 L9,15 L11,15 L11,13 L9,13 Z M9,11 L11,11 L12,4 L8,4 L9,11 Z"
                    })))), s.createElement(m._22, {
                        type: m._27.Span,
                        fontSize: m.L.Size6
                    }, Object(o.d)("<x:bold>Help us save the Internet!</x:bold> If Net Neutrality rules are repealed, it could mean a lot more loading spinners.", {
                        "x:bold": function(e) {
                            return s.createElement("strong", null, e)
                        }
                    }, "NetNeutralityBar"))), s.createElement(m.U, {
                        display: m.H.InlineFlex,
                        flexShrink: 0
                    }, s.createElement(m.u, {
                        type: m.z.Hollow,
                        overlay: !0,
                        linkTo: "http://link.twitch.tv/netneutrality",
                        targetBlank: !0
                    }, Object(o.d)("Take Action!", "NetNeutralityBar")))))
                }, t
            }(s.Component)),
            q = (n("ukY1"), n("F1v6")),
            G = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = this.props.data.currentUser && this.props.data.currentUser.hasPrime,
                        t = this.props.data.requestInfo && this.props.data.requestInfo.countryCode,
                        n = Object(y.h)(e, t);
                    if (o.b.get("net_neutrality_visible", !1) && this.props.data.currentUser && this.props.data.requestInfo && "US" === this.props.data.requestInfo.countryCode) return s.createElement(V, null);
                    if (!n) return null;
                    if (this.props.data.loading) return null;
                    var i = Object(S.d)(S.a, ""),
                        a = Object(o.d)("Twitch Prime", "BlueBar"),
                        r = s.createElement("span", null, Object(o.d)("Free loot every month, plus exclusives and surprises, ad-free viewing, and loads more.", "BlueBar")),
                        l = Object(S.d)(S.a, ""),
                        c = Object(o.d)("Start Your Free Trial", "BlueBar");
                    if (!this.props.data.loading && !this.props.data.error) {
                        var d = this.props.data;
                        d && d.primePromotions && d.primePromotions.forEach(function(e) {
                            switch (e.id) {
                                case "twitch.prime.bluebar.left1":
                                    i = e.externalURL, a = e.text;
                                    break;
                                case "twitch.prime.bluebar.center1":
                                    r = s.createElement(g, {
                                        source: e.text,
                                        renderers: {
                                            Link: function(e) {
                                                return s.createElement("a", {
                                                    href: e.href,
                                                    target: "_blank",
                                                    rel: "noopener noreferrer"
                                                }, e.children)
                                            }
                                        }
                                    });
                                    break;
                                case "twitch.prime.bluebar.right1":
                                    l = e.externalURL, c = e.text
                            }
                        })
                    }
                    return s.createElement(m._18, {
                        color: m.F.Base,
                        className: "blue-bar",
                        position: m._3.Relative,
                        fullWidth: !0
                    }, s.createElement(m.U, {
                        className: "blue-bar__bar",
                        display: m.H.Flex,
                        alignItems: m.c.Center,
                        justifyContent: m.T.Between,
                        flexWrap: m.K.NoWrap,
                        margin: "auto",
                        padding: {
                            x: 2,
                            y: .5
                        }
                    }, s.createElement(m.U, {
                        display: m.H.InlineFlex,
                        alignItems: m.c.Center,
                        padding: {
                            right: .5
                        }
                    }, s.createElement(m.U, {
                        className: "blue-bar__logo",
                        display: m.H.InlineFlex,
                        margin: {
                            right: .5
                        },
                        flexShrink: 0
                    }, s.createElement(m._9, {
                        asset: m._10.Crown,
                        width: 20,
                        height: 13
                    })), s.createElement(m._22, {
                        bold: !0,
                        type: m._27.Span,
                        noWrap: !0,
                        fontSize: m.L.Size6
                    }, s.createElement(m.P, {
                        padding: {
                            x: 1
                        }
                    }, s.createElement("a", {
                        className: "blue-bar__link",
                        href: i,
                        target: "_blank",
                        rel: "noopener noreferrer"
                    }, a))), s.createElement(m._22, {
                        className: "blue-bar__headline",
                        type: m._27.Span,
                        fontSize: m.L.Size6
                    }, r)), s.createElement(m.U, {
                        display: m.H.InlineFlex,
                        flexShrink: 0
                    }, s.createElement(m._22, {
                        bold: !0,
                        type: m._27.Span,
                        noWrap: !0,
                        fontSize: m.L.Size6,
                        color: m.F.Base
                    }, s.createElement("a", {
                        className: "blue-bar__link",
                        href: l,
                        target: "_blank",
                        rel: "noopener noreferrer"
                    }, c)))))
                }, t = a.__decorate([Object(c.a)(q, {
                    options: function() {
                        return {
                            variables: {
                                stringIds: ["twitch.prime.bluebar.left1", "twitch.prime.bluebar.center1", "twitch.prime.bluebar.right1"],
                                dateOverride: Object(y.d)()
                            }
                        }
                    }
                }), Object(u.c)("BlueBarComponent")], t)
            }(s.Component);
        n.d(t, "b", function() {
            return W
        }), n.d(t, "a", function() {
            return G
        }), n.d(t, "c", function() {
            return y.d
        })
    },
    9856: function(e, t) {},
    A0YJ: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "TopNav_User_User"
                },
                variableDefinitions: [],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        alias: null,
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
                                    value: "availability"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "settings"
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
                                            value: "isSharingActivity"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
                                    }, {
                                        kind: "Field",
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "visibility"
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
                                    value: "activity"
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
                                            value: "type"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
                                    }, {
                                        kind: "InlineFragment",
                                        typeCondition: {
                                            kind: "NamedType",
                                            name: {
                                                kind: "Name",
                                                value: "Watching"
                                            }
                                        },
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
                                                arguments: [],
                                                directives: [],
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{
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
                                                            value: "stream"
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
                                                                    value: "game"
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
                                                                            value: "name"
                                                                        },
                                                                        arguments: [],
                                                                        directives: [],
                                                                        selectionSet: null
                                                                    }]
                                                                }
                                                            }]
                                                        }
                                                    }, {
                                                        kind: "Field",
                                                        alias: null,
                                                        name: {
                                                            kind: "Name",
                                                            value: "hosting"
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
                                                                    value: "stream"
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
                                                                            value: "game"
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
                                                                                    value: "name"
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
                                            }]
                                        }
                                    }, {
                                        kind: "InlineFragment",
                                        typeCondition: {
                                            kind: "NamedType",
                                            name: {
                                                kind: "Name",
                                                value: "Streaming"
                                            }
                                        },
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                alias: null,
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
                                                        alias: null,
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
                                                                alias: null,
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "name"
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
                                        kind: "InlineFragment",
                                        typeCondition: {
                                            kind: "NamedType",
                                            name: {
                                                kind: "Name",
                                                value: "Playing"
                                            }
                                        },
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                alias: null,
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
                                                        alias: null,
                                                        name: {
                                                            kind: "Name",
                                                            value: "name"
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
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 357
            }
        };
        n.loc.source = {
            body: "query TopNav_User_User {\ncurrentUser {\nid\ndisplayName\nprofileImageURL(width: 70)\nlogin\navailability\nsettings {\nisSharingActivity\nvisibility\n}\nactivity {\ntype\n... on Watching {\nuser {\ndisplayName\nstream {\ngame {\nname\n}\n}\nhosting {\ndisplayName\nstream {\ngame {\nname\n}\n}\n}\n}\n}\n... on Streaming {\nstream {\ngame {\nname\n}\n}\n}\n... on Playing {\ngame {\nname\n}\n}\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    AL3x: function(e, t) {},
    DBTH: function(e, t, n) {
        "use strict";
        n.d(t, "d", function() {
            return a
        }), n.d(t, "f", function() {
            return r
        }), n.d(t, "e", function() {
            return s
        }), n.d(t, "g", function() {
            return o
        }), n.d(t, "a", function() {
            return l
        }), n.d(t, "b", function() {
            return c
        }), n.d(t, "c", function() {
            return p
        }), n.d(t, "i", function() {
            return f
        }), n.d(t, "j", function() {
            return h
        }), n.d(t, "h", function() {
            return g
        }), n.d(t, "k", function() {
            return v
        });
        var i, a = "TWILIGHT_WEB_ONBOARDING_CHANNEL_RANKING",
            r = "TWILIGHT_WEB_ONBOARDING_FOLLOWING_FOR_YOU",
            s = "TWILIGHT_WEB_ONBOARDING",
            o = "TWILIGHT_WEB_ONBOARDING_RANDOMIZED_GAMES",
            l = "control";
        ! function(e) {
            e.Skip = "skip", e.NoSkip = "no_skip"
        }(i || (i = {}));
        var c, d = new Set([i.Skip.toString(), i.NoSkip.toString()]);
        ! function(e) {
            e.First = "first", e.Last = "last"
        }(c || (c = {}));
        var u, m = new Set([c.First.toString(), c.Last.toString()]);
        (u || (u = {})).Yes = "yes";
        var p;
        (p || (p = {})).ENABLED = "enabled";
        var f = function(e) {
                return !!e && m.has(e)
            },
            h = function(e, t) {
                return !!e && d.has(e) && f(t)
            },
            g = function(e, t, n) {
                return !!e && d.has(e) && f(t) && n === u.Yes
            },
            v = function(e) {
                return e.getTime() >= y().getTime()
            },
            y = function() {
                return new Date((new Date).getTime() - 12096e5)
            }
    },
    DEPb: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "TopNav_Store_CurrentUser"
                },
                variableDefinitions: [],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        alias: null,
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
                                    value: "hasPrime"
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
                end: 62
            }
        };
        n.loc.source = {
            body: "query TopNav_Store_CurrentUser {\ncurrentUser {\nid\nhasPrime\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    "DgR+": function(e, t) {},
    F1v6: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "Prime_BlueBar_CurrentUser"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "stringIds"
                        }
                    },
                    type: {
                        kind: "ListType",
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
                    },
                    defaultValue: null
                }, {
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "dateOverride"
                        }
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "Time"
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
                            value: "currentUser"
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
                                    value: "hasPrime"
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
                            value: "primePromotions"
                        },
                        arguments: [{
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "ids"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "stringIds"
                                }
                            }
                        }, {
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "dateOverride"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "dateOverride"
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
                                    value: "text"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "externalURL"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "isExternalLink"
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
                            value: "requestInfo"
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
                                    value: "countryCode"
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
                end: 231
            }
        };
        n.loc.source = {
            body: "query Prime_BlueBar_CurrentUser($stringIds: [ID!] $dateOverride: Time) {\ncurrentUser {\nid\nhasPrime\n}\nprimePromotions (ids: $stringIds dateOverride: $dateOverride) {\nid\ntext\nexternalURL\nisExternalLink\n}\nrequestInfo {\ncountryCode\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    FLwB: function(e, t, n) {
        "use strict";

        function i(e) {
            p.debug("Saving current availability", e), h = r.__assign({}, h, {
                availability: e
            })
        }

        function a() {
            return r.__awaiter(this, void 0, void 0, function() {
                return r.__generator(this, function(e) {
                    return Object(l.d)(s.n.store.getState()) ? (p.debug("Setting status on server", {
                        state: h
                    }), m && clearTimeout(m), [2, s.n.apollo.client.mutate({
                        mutation: c,
                        variables: {
                            input: h
                        }
                    }).then(function(e) {
                        p.debug("Status scheduled to be set again", {
                            seconds: e.data.setSessionStatus.setAgainInSeconds
                        }), m = setTimeout(a, 1e3 * e.data.setSessionStatus.setAgainInSeconds)
                    }, function(e) {
                        p.warn("Failed to update status. Trying again in 60 seconds.", e), m = setTimeout(a, 6e4)
                    })]) : [2]
                })
            })
        }
        t.f = function(e) {
            return p.debug("Updating activity", e), h = r.__assign({}, h, {
                activity: e
            }), a()
        }, t.e = function(e) {
            p.debug("Updating visibility", e),
                function(e) {
                    Object(l.d)(s.n.store.getState()) && (p.debug("Setting visibility on server", {
                        visibility: e
                    }), s.n.apollo.client.mutate({
                        mutation: d,
                        variables: {
                            input: {
                                visibility: e
                            }
                        }
                    }).then(function(e) {
                        p.debug("Visibility set", {
                            visibility: e.data.updateVisibility.user.availability
                        })
                    }, function(e) {
                        p.warn("Failed to update visibility.", e)
                    }))
                }(e)
        }, t.c = i, t.b = function() {
            i(o.a.Online)
        }, t.d = function() {
            i(o.a.Idle)
        }, t.a = function() {
            p.debug("Clearing activity"), h = r.__assign({}, h, {
                activity: null
            }), a()
        }, t.g = function() {
            return r.__awaiter(this, void 0, void 0, function() {
                var e;
                return r.__generator(this, function(t) {
                    switch (t.label) {
                        case 0:
                            p.debug("Clearing previous session"), h = {
                                sessionID: s.k.get(u, ""),
                                availability: o.a.Online,
                                activity: null
                            }, t.label = 1;
                        case 1:
                            return t.trys.push([1, 4, , 5]), [4, a()];
                        case 2:
                            return t.sent(), p.debug("Setting new session"), h = r.__assign({}, h, {
                                    sessionID: s.n.session.tabID
                                }),
                                function(e) {
                                    s.k.set(u, e)
                                }(s.n.session.tabID), [4, a()];
                        case 3:
                            return [2, t.sent()];
                        case 4:
                            return e = t.sent(), [2, e];
                        case 5:
                            return [2]
                    }
                })
            })
        };
        var r = n("TToO"),
            s = n("6sO2"),
            o = n("l4QG"),
            l = n("Aj/L"),
            c = n("73jS"),
            d = (n.n(c), n("7LBo")),
            u = (n.n(d), "twilight.sessionID"),
            m = 0,
            p = s.i.withCategory("Session Status"),
            f = {
                sessionID: s.n.session.tabID,
                availability: "",
                activity: null
            },
            h = f
    },
    FroJ: function(e, t) {},
    GtMZ: function(e, t) {},
    H9qc: function(e, t) {},
    "HTB+": function(e, t) {},
    Hs3O: function(e, t, n) {
        "use strict";
        n.d(t, "b", function() {
            return a
        }), n.d(t, "a", function() {
            return r
        }), n.d(t, "c", function() {
            return s
        }), t.d = function(e, t) {
            var n = i.b.get(o, "https://twitch.amazon.com/prime"),
                a = "";
            try {
                a = btoa(t)
            } catch (e) {
                l.error(e, "Could not decode location pathname substring for redirect")
            }
            return a ? n + "?ref_=" + e + "&redirectRoute=" + a : n + "?ref_=" + e
        };
        var i = n("6sO2"),
            a = "sm_tw_tup_ntp_t_all",
            r = "sm_tw_thp_blue_t_all",
            s = "sm_w_tup_ntp_t_c",
            o = "prime_landing_page_base_url",
            l = i.i.withCategory("PrimeUtilsLogger")
    },
    Ic9h: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return h
        });
        var i = n("TToO"),
            a = n("HW6M"),
            r = (n.n(a), n("KSGD")),
            s = (n.n(r), n("U7vG")),
            o = (n.n(s), n("F8kA")),
            l = n("kVlN"),
            c = n("5kgt"),
            d = n("SI0h"),
            u = n("eXld"),
            m = n("Odds"),
            p = n("1E7T"),
            f = (n.n(p), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.currentPath = t.props.location.pathname, t.onHistoryChange = function(e) {
                        e.pathname !== t.currentPath && t.context.scrollToTop(), t.currentPath = e.pathname
                    }, t
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    var e = a((t = {}, t["channel-page-layout__scroll-area--theatre-mode"] = !!this.props.theatreMode, t));
                    return s.createElement(m.U, i.__assign({
                        display: m.H.Flex,
                        flexDirection: m.J.Column,
                        flexWrap: m.K.NoWrap,
                        fullHeight: !0
                    }, Object(c.a)(this.props)), s.createElement(u.b, {
                        className: e,
                        addPaddingWhenPlayerIsPersisting: !0
                    }), s.createElement(l.a, null, s.createElement(d.a, {
                        currentPage: this.props.currentPage,
                        channelLogin: this.props.ownerLogin || ""
                    })), s.createElement(m.U, {
                        padding: {
                            top: 2,
                            x: 3
                        }
                    }, this.props.children));
                    var t
                }, t.prototype.componentDidMount = function() {
                    this.unsubscribeFromHistory = this.props.history.listen(this.onHistoryChange)
                }, t.prototype.componentWillUnmount = function() {
                    this.unsubscribeFromHistory()
                }, t.contextTypes = {
                    scrollToTop: r.func
                }, t
            }(s.Component)),
            h = Object(o.f)(f)
    },
    J8WN: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return s
        });
        var i = n("TToO"),
            a = n("U7vG"),
            r = (n.n(a), n("Odds")),
            s = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        isDraggingOver: !1
                    }, t.refHandler = function(e) {
                        t.fileInputRef = e
                    }, t.onFilePickerClick = function() {
                        t.fileInputRef.click()
                    }, t.onDragOver = function(e) {
                        e.preventDefault(), t.setState({
                            isDraggingOver: !0
                        })
                    }, t.onDragLeave = function(e) {
                        e.preventDefault(), t.setState({
                            isDraggingOver: !1
                        })
                    }, t.onFileInputChange = function(e) {
                        e.preventDefault(), t.finalizeSelections(e.target.files)
                    }, t.onFileDrop = function(e) {
                        e.preventDefault(), t.setState({
                            isDraggingOver: !1
                        }), t.finalizeSelections(e.dataTransfer.files)
                    }, t
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    return a.createElement("div", {
                        "data-test-selector": "file-picker-root",
                        onClick: this.onFilePickerClick,
                        onDragLeave: this.onDragLeave,
                        onDragOver: this.onDragOver,
                        onDrop: this.onFileDrop
                    }, a.createElement(r.I, {
                        dragOver: this.state.isDraggingOver
                    }, a.createElement(r.P, {
                        display: r.H.Hide
                    }, a.createElement("input", {
                        accept: this.props.allowedFileTypes.join(","),
                        multiple: this.props.multiFile || !1,
                        onChange: this.onFileInputChange,
                        ref: this.refHandler,
                        type: "file"
                    })), this.props.children))
                }, t.prototype.finalizeSelections = function(e) {
                    e && this.props.onFilesSubmitted(Array.from(e))
                }, t
            }(a.Component)
    },
    L6HU: function(e, t) {},
    MSvX: function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            a = n("OAwv"),
            r = n("U7vG"),
            s = n("6sO2"),
            o = n("Ejve"),
            l = "legacy_routes_enabled",
            c = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.isEnabled = !1, n.onHistoryChange = function(e, t) {
                        n.isEnabled ? "REPLACE" !== t ? e && e.pathname ? (n.logger.debug("Location changed", {
                            path: e.pathname
                        }), n.legacyRoutes.forEach(function(t) {
                            try {
                                if (e.pathname.match(t)) {
                                    n.logger.debug("Found legacy route. Reloading...");
                                    var i = "" !== e.search ? a.parse(e.search) : {};
                                    i["from-redirect"] = "true";
                                    var r = a.stringify(i),
                                        l = s.a.buildType === o.a.Dev ? window.location.host : window.location.hostname,
                                        c = window.location.protocol + "//" + l + e.pathname + "?" + r;
                                    return n.logger.debug("Redirecting to legacy route", {
                                        newUrl: c
                                    }), void window.location.replace(c)
                                }
                            } catch (e) {
                                s.i.withCategory("legacy").error(e, "Unable to determine legacy reload match", {
                                    regex: t
                                })
                            }
                        })) : n.logger.debug("Unable to process history change. Path is null or empty.") : n.logger.debug("Skipping legacy route processing, due to history replace.") : n.logger.debug("Legacy routing not enabled.")
                    }, n.processRedirectParam = function(e) {
                        if (e && e.pathname && e.search) {
                            var t = "" !== e.search ? a.parse(e.search) : {};
                            if (t["from-redirect"]) {
                                delete t["from-redirect"];
                                var i = a.stringify(t),
                                    r = "";
                                i.length > 0 && (r = "?" + i), n.props.history.replace({
                                    pathname: e.pathname,
                                    hash: e.hash,
                                    search: r
                                })
                            }
                        }
                    }, n.isEnabled = s.b.get(l, !1), n.logger = s.i.withCategory("legacy-routes"), n.legacyRoutes = n.buildRoutes(), n.props.history.listen(n.onHistoryChange), n
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    return null
                }, t.prototype.componentDidMount = function() {
                    this.processRedirectParam(this.props.history.location)
                }, t.prototype.buildRoutes = function() {
                    if (!this.isEnabled) return [];
                    this.logger.debug("Building legacy routes...");
                    var e = s.b.get("legacy_routes", []),
                        t = [];
                    if (!e || 0 === e.length) return this.logger.debug("No legacy routes found in settings."), t;
                    for (var n = 0, i = e; n < i.length; n++) {
                        var a = i[n];
                        try {
                            var r = new RegExp(a, "i");
                            t.push(r)
                        } catch (e) {
                            this.logger.debug("Failed to parse route!", {
                                val: a,
                                err: e
                            })
                        }
                    }
                    return this.logger.debug("Done building legacy routes!", {
                        count: t.length
                    }), t
                }, t
            }(r.Component);
        n.d(t, "a", function() {
            return l
        }), n.d(t, !1, function() {
            return "legacy_routes"
        }), n.d(t, "b", function() {
            return c
        })
    },
    MnLQ: function(e, t) {},
    NhfZ: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "TopNav_PrimeUpsell_CurrentUser"
                },
                variableDefinitions: [],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        alias: null,
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
                                    value: "hasPrime"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "hasTurbo"
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
                            value: "requestInfo"
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
                                    value: "countryCode"
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
                end: 105
            }
        };
        n.loc.source = {
            body: "query TopNav_PrimeUpsell_CurrentUser {\ncurrentUser {\nid\nhasPrime\nhasTurbo\n}\nrequestInfo {\ncountryCode\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    OLKT: function(e, t) {},
    OcEY: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "FragmentDefinition",
                name: {
                    kind: "Name",
                    value: "bitsOffersFragment"
                },
                typeCondition: {
                    kind: "NamedType",
                    name: {
                        kind: "Name",
                        value: "BitsOffer"
                    }
                },
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
                            value: "type"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: null
                    }, {
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "bits"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: null
                    }, {
                        kind: "InlineFragment",
                        typeCondition: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "BitsBundleOffer"
                            }
                        },
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
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
                                    value: "discount"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "isPromo"
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
                                    value: "includesVAT"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
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
                                            value: "type"
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
            }],
            loc: {
                start: 0,
                end: 145
            }
        };
        n.loc.source = {
            body: "fragment bitsOffersFragment on BitsOffer {\nid\ntype\nbits\n... on BitsBundleOffer {\nprice\ndiscount\nisPromo\nurl\nincludesVAT\npromotion {\nid\ntype\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    Ouuk: function(e, t, n) {
        "use strict";
        t.a = function(e) {
            return e || (e = navigator.userAgent), !!i.exec(e)
        };
        var i = /\scurse\/\d/
    },
    PPK2: function(e, t) {},
    Qk3C: function(e, t, n) {
        "use strict";

        function i(e) {
            return function() {
                Object(s.c)(e), window.location.reload(!0)
            }
        }
        var a = n("RH2O"),
            r = n("2KeS"),
            s = n("FuaS"),
            o = n("TToO"),
            l = n("U7vG"),
            c = n("6sO2"),
            d = n("Odds"),
            u = (n("2Nqs"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.renderLink = function(e) {
                        return l.createElement(d.S, {
                            key: e.languageCode,
                            onClick: function() {
                                return t.props.changeLanguage(e.languageCode)
                            },
                            "data-target": "language-selector-link"
                        }, l.createElement(d.U, {
                            padding: {
                                y: .5,
                                x: 1
                            }
                        }, e.name))
                    }, t
                }
                return o.__extends(t, e), t.prototype.render = function() {
                    var e = Math.floor(c.a.locales.length / 2);
                    return l.createElement(d.U, {
                        className: "language-selector",
                        display: d.H.Flex,
                        padding: {
                            y: 1
                        }
                    }, l.createElement("div", {
                        className: "language-selector__list language-selector__list--border-right"
                    }, c.a.locales.slice(0, e).map(this.renderLink)), l.createElement("div", {
                        className: "language-selector__list"
                    }, c.a.locales.slice(e).map(this.renderLink)))
                }, t
            }(l.Component)),
            m = Object(a.a)(function() {
                return {}
            }, function(e) {
                return Object(r.bindActionCreators)({
                    changeLanguage: i
                }, e)
            })(u);
        n.d(t, "a", function() {
            return m
        })
    },
    R0Kh: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return s
        }), n.d(t, "b", function() {
            return o
        }), n.d(t, "c", function() {
            return l
        }), n.d(t, "f", function() {
            return c
        }), n.d(t, "e", function() {
            return d
        }), n.d(t, "g", function() {
            return u
        }), n.d(t, "i", function() {
            return m
        }), n.d(t, "h", function() {
            return f
        }), n.d(t, "d", function() {
            return h
        });
        var i = n("OAwv"),
            a = (n.n(i), n("6sO2")),
            r = n("S1vB"),
            s = {
                DIRECT_ENTITLEMENT: "DIRECT_ENTITLEMENT",
                CLAIM_CODE: "CLAIM_CODE",
                EXTERNAL_OFFER: "EXTERNAL_OFFER"
            },
            o = function(e, t) {
                return e + "-" + t
            },
            l = function() {
                return p("claimedOffers")
            },
            c = function(e) {
                a.k.set("claimedOffers", e)
            },
            d = function() {
                return p("seenOffers")
            },
            u = function(e) {
                a.k.set("seenOffers", e)
            },
            m = function(e, t) {
                return (e && (e.priority || 0 === e.priority) ? e.priority : 99999) - (t && (t.priority || 0 === t.priority) ? t.priority : 99999)
            },
            p = function(e) {
                return a.k.get(e, [])
            },
            f = function(e, t) {
                return void 0 !== e && void 0 !== t && (!e && Object(r.a)(t))
            },
            h = function() {
                var e = location.search,
                    t = i.parse(e);
                return t && t.dateOverride || void 0
            }
    },
    SI0h: function(e, t, n) {
        "use strict";
        var i = n("TPVZ");
        n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, "b", function() {
            return i.b
        }), n.d(t, "a", function() {
            return i.a
        })
    },
    TP6L: function(e, t, n) {
        "use strict";
        var i, a = n("RH2O"),
            r = n("F8kA"),
            s = n("2KeS"),
            o = n("+xm8"),
            l = n("f2i/"),
            c = n("Aj/L"),
            d = n("TToO"),
            u = n("U7vG"),
            m = n("6sO2"),
            p = n("Qk3C"),
            f = n("+Znq"),
            h = n("7vx8"),
            g = n("vH/s"),
            v = n("0Mfl"),
            y = n("CSlQ"),
            k = n("DBTH"),
            b = n("U3i2"),
            _ = Object(a.a)(function(e) {
                return {
                    firstPageLoaded: e.session.firstPageLoaded,
                    languageCode: e.session.languageCode,
                    currentUser: Object(c.c)(e)
                }
            })(b.b),
            S = n("CIox"),
            N = n("6BvN"),
            C = n("HM6l"),
            E = n("MAZT"),
            O = n("uTyw"),
            w = n("rCmJ"),
            U = n("HW6M"),
            x = n("zCIC"),
            F = n("czpb"),
            T = n("SZoP"),
            I = n("mi6k"),
            D = n("7Nlu"),
            A = n("5kgt"),
            B = n("Odds"),
            L = (n("afun"), n("y+bN")),
            R = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return d.__extends(t, e), t.prototype.render = function() {
                    var e, t = {
                        "search-live-result-card": !0,
                        "search-live-result-card--hover": this.props.borderHover
                    };
                    return this.props.data && !this.props.data.loading && this.props.data.user && this.props.data.user.stream && (e = this.props.data.user.stream.previewImageURL), u.createElement(B.U, {
                        className: U(t),
                        key: this.props.id,
                        fullWidth: !0
                    }, u.createElement(B.S, d.__assign({
                        linkTo: this.props.linkTo,
                        hover: this.props.borderHover,
                        tabIndex: -1,
                        "data-a-target": "search-live-result-card-link"
                    }, Object(A.a)(this.props)), u.createElement(B.A, null, u.createElement(B.U, {
                        className: "search-live-result-card__wrapper",
                        position: B._3.Relative,
                        overflow: B.Z.Hidden,
                        fullWidth: !0
                    }, u.createElement(B.C, {
                        imageSrc: e || m.a.defaultStreamPreviewURL,
                        imageAlt: this.props.imageAlt,
                        aspect: B.k.Aspect16x9
                    }), u.createElement(B._18, {
                        className: "search-live-result-card__overlay",
                        position: B._3.Absolute,
                        attachLeft: !0,
                        attachTop: !0,
                        attachRight: !0,
                        attachBottom: !0,
                        display: B.H.Flex,
                        flexDirection: B.J.Column,
                        justifyContent: B.T.End,
                        overflow: B.Z.Hidden,
                        color: B.F.Overlay
                    }, u.createElement(B.B, null, u.createElement(B.U, {
                        className: "search-live-result-card__body",
                        padding: .5
                    }, u.createElement(B._22, {
                        type: B._27.H5,
                        ellipsis: !0,
                        className: "search-live-result-card__title"
                    }, this.props.channelName), u.createElement(B.U, {
                        className: "search-live-result-card__viewer-count-container",
                        display: B.H.Flex,
                        alignItems: B.c.Center
                    }, u.createElement(B.U, {
                        margin: {
                            right: .5
                        },
                        display: B.H.Flex,
                        alignItems: B.c.Center,
                        flexShrink: 0
                    }, u.createElement(B._9, {
                        asset: B._10.GlyphLive,
                        type: B._11.Live,
                        width: 14,
                        height: 14
                    })), u.createElement(B._22, {
                        className: "search-live-result-card__viewer-count",
                        ellipsis: !0
                    }, Object(m.e)(this.props.viewerCount))), u.createElement(B._22, {
                        className: "search-live-result-card__info",
                        ellipsis: !0
                    }, this.props.title))))))))
                }, t = d.__decorate([Object(h.a)(L, {
                    options: function(e) {
                        return {
                            variables: {
                                login: e.login
                            }
                        }
                    }
                })], t)
            }(u.Component),
            j = (n("H9qc"), function(e) {
                var t, n, i;
                e.title && (e.hitsCount && e.hitsCount > 0 ? t = Object(m.d)("more", "SearchResultSection") : e.totalHitsCount && e.totalHitsCount > 0 && (t = Object(m.d)("Show", "SearchResultSection")), void 0 !== e.totalHitsCount && (i = u.createElement(B._0, {
                    type: B._1.Brand,
                    label: e.totalHitsCount < 100 ? Object(m.e)(e.totalHitsCount) : "99+"
                })), n = u.createElement(B.S, d.__assign({
                    onClick: e.onHeaderClick,
                    tabIndex: -1
                }, Object(B._39)(e), {
                    "data-ts_selectable": !0
                }), u.createElement(B.U, {
                    className: "search-result-view__titlesep search-result-view--no-hover",
                    display: B.H.Flex,
                    justifyContent: B.T.Between
                }, u.createElement("div", null, u.createElement(B.U, {
                    display: B.H.Inline,
                    margin: {
                        right: 1
                    }
                }, u.createElement(B._22, {
                    type: B._27.Span,
                    color: B.F.Link,
                    fontSize: B.L.Size7,
                    transform: B._26.Uppercase
                }, e.title)), i), u.createElement(B._22, {
                    fontSize: B.L.Size7,
                    transform: B._26.Uppercase
                }, t))));
                var a;
                return (Array.isArray(e.children) && e.children.length > 0 || e.children && !Array.isArray(e.children)) && (a = u.createElement(B.U, {
                    className: "search-result-view__listing-wrapper",
                    margin: {
                        top: .5,
                        bottom: .5
                    }
                }, e.children)), u.createElement("div", {
                    className: "search-result-view__block"
                }, n, a)
            }),
            P = (n("oI0V"), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return d.__extends(t, e), t.prototype.render = function() {
                    return u.createElement(B.U, {
                        className: "search-title-bar " + (this.props.showBack ? "search-title-bar--show" : ""),
                        display: B.H.Flex,
                        alignItems: B.c.Center,
                        "data-a-target": "nav-search-title-bar"
                    }, u.createElement(B._18, {
                        className: "search-title-bar__back-container",
                        display: B.H.Flex,
                        alignItems: B.c.Stretch,
                        borderRight: !0
                    }, u.createElement(B.v, {
                        icon: B._10.AngleLeft,
                        type: B.w.Secondary,
                        size: B.x.Large,
                        onClick: this.props.onBackClick,
                        ariaLabel: Object(m.d)("Back button", "SearchTitleBar"),
                        "data-ts_selectable": this.props.showBack,
                        "data-a-target": "nav-search-back"
                    })), u.createElement(B.U, {
                        className: "search-title-bar__title"
                    }, u.createElement(B._22, {
                        fontSize: B.L.Size5
                    }, this.props.title)))
                }, t
            }(u.Component)),
            H = n("PHcJ"),
            M = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.handleOptionChange = function(e) {
                        var n = e.currentTarget.elements;
                        t.props.onOptionsChange({
                            type: +n.type.value,
                            length: +n.video_length.value,
                            sort: +n.sort.value
                        })
                    }, t
                }
                return d.__extends(t, e), t.prototype.render = function() {
                    return u.createElement(B._18, {
                        className: "search__video-filters",
                        background: B.m.Alt,
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, u.createElement(B.P, {
                        display: B.H.Flex,
                        justifyContent: B.T.Between
                    }, u.createElement("form", {
                        onInput: this.handleOptionChange
                    }, u.createElement(B.U, {
                        flexShrink: 0
                    }, u.createElement(B.U, {
                        display: B.H.InlineFlex,
                        margin: {
                            right: 1
                        }
                    }, u.createElement(B._15, {
                        name: "type"
                    }, u.createElement("option", {
                        value: H.c.AllVideos
                    }, Object(m.d)("All Videos", "search__video-filters")), u.createElement("option", {
                        value: H.c.PastBroadcasts
                    }, Object(m.d)("Past Broadcasts", "search__video-filters")), u.createElement("option", {
                        value: H.c.Uploads
                    }, Object(m.d)("Uploads", "search__video-filters")), u.createElement("option", {
                        value: H.c.Highlights
                    }, Object(m.d)("Highlights", "search__video-filters")))), u.createElement(B.U, {
                        display: B.H.InlineFlex
                    }, u.createElement(B._15, {
                        name: "video_length"
                    }, u.createElement("option", {
                        value: H.a.AnyLength
                    }, Object(m.d)("Any Length", "search__video-filters")), u.createElement("option", {
                        value: H.a.Short
                    }, Object(m.d)("Short", "search__video-filters")), u.createElement("option", {
                        value: H.a.Long
                    }, Object(m.d)("Long", "search__video-filters"))))), u.createElement(B.U, {
                        display: B.H.InlineFlex,
                        flexShrink: 0
                    }, u.createElement(B._15, {
                        name: "sort"
                    }, u.createElement("option", {
                        value: H.b.Popular
                    }, Object(m.d)("Popular", "search__video-filters")), u.createElement("option", {
                        value: H.b.Newest
                    }, Object(m.d)("Newest", "search__video-filters")))))))
                }, t
            }(u.Component),
            W = n("5LoI"),
            V = (n("FroJ"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onBackClick = function() {
                        return t.headerSelect(null)
                    }, t.gameHeaderSelect = function() {
                        return t.headerSelect(W.a.Games)
                    }, t.liveHeaderSelect = function() {
                        return t.headerSelect(W.a.Channels)
                    }, t.userHeaderSelect = function() {
                        return t.headerSelect(W.a.Users)
                    }, t.videoHeaderSelect = function() {
                        return t.headerSelect(W.a.Videos)
                    }, t.communityHeaderSelect = function() {
                        return t.headerSelect(W.a.Communities)
                    }, t.headerSelect = function(e) {
                        t.props.onCategorySelected(e)
                    }, t.onClick = function(e) {
                        if (e.nativeEvent.stopImmediatePropagation(), e.target !== e.currentTarget) {
                            var n = e.target,
                                i = n.querySelector("a"),
                                a = i ? i.querySelector("[data-tt_content]") : null;
                            a || (i = n.closest("a")), (a = i && i.dataset.tt_content ? i : null) && t.props.onResultSelected()
                        }
                    }, t.setScrollRef = function(e) {
                        return t.scroll = e
                    }, t
                }
                return d.__extends(t, e), t.prototype.componentDidUpdate = function() {
                    this.previousCategory !== this.props.currentCategory && (this.previousCategory = this.props.currentCategory, this.scroll.scrollToTop())
                }, t.prototype.render = function() {
                    var e, t = {
                        "search-result-view": !0,
                        "search-result-view--active": !0,
                        "search-result-view--filtered": this.props.currentCategory === W.a.Videos
                    };
                    e = this.props.currentCategory && null !== this.props.currentCategory ? u.createElement(P, {
                        title: this.getCategoryTitle(this.props.currentCategory),
                        showBack: !0,
                        onBackClick: this.onBackClick
                    }) : u.createElement(P, {
                        title: Object(m.d)("Top Results", "SearchResultPanel__titlebar"),
                        showBack: !1
                    });
                    var n;
                    n = this.props.isWaiting ? u.createElement(B.Y, {
                        fillContent: !0
                    }) : this.props.isErrored ? this.getErrorMessage() : this.props.currentCategory && null !== this.props.currentCategory ? this.getCategoryDrillDown(this.props.currentCategory) : this.props.gameResults && this.props.gameResults.totalHits > 0 || this.props.userResults && this.props.userResults.totalHits > 0 || this.props.communityResults && this.props.communityResults.totalHits > 0 || this.props.videoResults && this.props.videoResults.totalHits > 0 || this.props.liveResults && this.props.liveResults.totalHits > 0 ? this.getResultSections() : this.getNoResultsMessage();
                    var i;
                    return this.props.currentCategory === W.a.Videos && (i = u.createElement(M, {
                        key: "video-filters",
                        onOptionsChange: this.props.onVideoOptionsChange
                    })), u.createElement("div", {
                        className: "search-panel " + (this.props.isOpen ? "" : "search-panel--closed"),
                        tabIndex: 0,
                        onKeyDown: this.props.onKeyDown
                    }, e, i, u.createElement(B._18, {
                        className: U(t),
                        background: B.m.Base,
                        position: B._3.Absolute,
                        overflow: B.Z.Hidden,
                        display: B.H.Block
                    }, u.createElement(x.b, {
                        className: "search-result-view__wrapper",
                        contentClassName: "search-result-view__scroll-container",
                        onClick: this.onClick,
                        scrollRef: this.setScrollRef,
                        suppressScrollX: !0,
                        "data-a-target": "search-scroller"
                    }, u.createElement(B.U, {
                        fullWidth: !0
                    }, n, u.createElement(x.a, {
                        key: this.props.currentCategory || "none",
                        enabled: !this.props.isWaiting && this.props.isOpen,
                        loadMore: this.props.loadMore
                    })))))
                }, t.prototype.getResultSections = function() {
                    var e, t = [],
                        n = [],
                        i = this.getGameCards(),
                        a = this.getUserCards(),
                        r = this.getCommunityCards(),
                        s = this.getVideoCards(),
                        o = this.getLiveCards();
                    return o.length > 0 && (e = u.createElement(B.U, {
                        className: "search-result-view__live",
                        margin: {
                            y: 1,
                            x: 1
                        }
                    }, u.createElement(B.N, null, o))), this.getResultSection("games-section", W.a.Games, this.gameHeaderSelect, this.props.gameResults, i.length, i, n, t), this.getResultSection("live-section", W.a.Channels, this.liveHeaderSelect, this.props.liveResults, o.length, e, n, t), this.getResultSection("channels-section", W.a.Users, this.userHeaderSelect, this.props.userResults, a.length, a, n, t), this.getResultSection("videos-section", W.a.Videos, this.videoHeaderSelect, this.props.videoResults, s.length, s, n, t), this.getResultSection("communities-section", W.a.Communities, this.communityHeaderSelect, this.props.communityResults, r.length, r, n, t), t.concat(n)
                }, t.prototype.getResultSection = function(e, t, n, i, a, r, s, o) {
                    var l = u.createElement(j, {
                        key: e,
                        totalHitsCount: i ? i.totalHits : 0,
                        hitsCount: a,
                        title: this.getCategoryTitle(t),
                        onHeaderClick: n,
                        "data-a-target": e
                    }, r);
                    0 === a ? s.push(l) : o.push(l)
                }, t.prototype.getGameCards = function() {
                    return this.props.gameResults ? this.props.gameResults.results.map(function(e) {
                        return u.createElement(D.a, {
                            id: "game_" + e.id,
                            key: "game_" + e.id,
                            imageAlt: e.thumbnailAltText,
                            linkTo: e.linkTo,
                            title: e.title,
                            "data-ts_selectable": !0,
                            "data-tt_content": !0
                        })
                    }) : []
                }, t.prototype.getLiveCards = function() {
                    return this.props.liveResults ? this.props.liveResults.results.map(function(e) {
                        var t = Object(T.a)(e.login || "", e.name || "");
                        return u.createElement(B.G, {
                            key: "live_" + e.id,
                            cols: 6
                        }, u.createElement(B.U, {
                            margin: {
                                bottom: 1
                            }
                        }, u.createElement(R, {
                            id: "live_" + e.id,
                            imageAlt: e.thumbnailAltText,
                            linkTo: e.linkTo,
                            title: e.status || "",
                            login: e.login ? e.login : "",
                            channelName: t,
                            viewerCount: e.viewerCount || 0,
                            "data-ts_selectable": !0,
                            "data-tt_content": !0
                        })))
                    }) : []
                }, t.prototype.getUserCards = function() {
                    return this.props.userResults ? this.props.userResults.results.map(function(e) {
                        var t = Object(T.a)(e.login || "", e.name || "");
                        return u.createElement(B.S, {
                            linkTo: e.linkTo,
                            tabIndex: -1,
                            "data-ts_selectable": !0,
                            "data-tt_content": !0,
                            key: e.id
                        }, u.createElement(B.U, {
                            padding: {
                                y: .5,
                                x: 1
                            }
                        }, u.createElement(B.A, {
                            row: !0
                        }, u.createElement(B.C, {
                            imageAlt: e.thumbnailAltText,
                            imageSrc: e.thumbnail ? e.thumbnail : "",
                            size: B.D.Size4,
                            aspect: B.k.Aspect1x1
                        }), u.createElement(B.B, null, u.createElement(B.P, {
                            padding: {
                                x: 1
                            }
                        }, u.createElement(B._22, {
                            type: B._27.H5,
                            ellipsis: !0
                        }, t))))))
                    }) : []
                }, t.prototype.getVideoCards = function() {
                    return this.props.videoResults ? this.props.videoResults.results.map(function(e) {
                        var t = Object(T.a)(e.login || "", e.name || ""),
                            n = Object(I.a)(e.length || 0);
                        return u.createElement(B.S, {
                            key: "video_" + e.id,
                            linkTo: e.linkTo,
                            tabIndex: -1,
                            "data-ts_selectable": !0,
                            "data-tt_content": !0
                        }, u.createElement(B.U, {
                            className: "search-panel__card",
                            fullWidth: !0,
                            padding: {
                                y: .5,
                                x: 1
                            }
                        }, u.createElement(B.A, {
                            row: !0
                        }, u.createElement(B.C, {
                            imageSrc: e.thumbnail ? e.thumbnail : "",
                            imageAlt: e.thumbnailAltText,
                            size: B.D.Size8,
                            aspect: B.k.Aspect16x9
                        }), u.createElement(B.B, null, u.createElement(B.P, {
                            margin: {
                                left: 1
                            }
                        }, u.createElement(B._22, {
                            type: B._27.H5,
                            ellipsis: !0
                        }, e.title)), u.createElement(B.P, {
                            margin: {
                                left: 1
                            }
                        }, u.createElement(B._22, {
                            className: "search-panel__link",
                            ellipsis: !0
                        }, e.createdAt ? Object(m.c)(new Date(1e3 * e.createdAt), "medium") : "", " · ", n || "", " · ", u.createElement(B._22, {
                            className: "search-pannel__highlight-link",
                            type: B._27.Span
                        }, t)))))))
                    }) : []
                }, t.prototype.getCommunityCards = function() {
                    return this.props.communityResults ? this.props.communityResults.results.map(function(e) {
                        return u.createElement(B.S, {
                            key: "community_" + e.id,
                            targetBlank: Object(F.b)(),
                            linkTo: Object(F.a)(e.linkTo),
                            tabIndex: -1,
                            "data-ts_selectable": !0,
                            "data-tt_content": !0
                        }, u.createElement(B.U, {
                            className: "search-panel__card",
                            fullWidth: !0,
                            padding: {
                                y: .5,
                                x: 1
                            }
                        }, u.createElement(B.A, {
                            row: !0
                        }, u.createElement(B.C, {
                            imageSrc: e.thumbnail ? e.thumbnail : "",
                            imageAlt: e.thumbnailAltText,
                            size: B.D.Size4,
                            aspect: B.k.BoxArt
                        }), u.createElement(B.B, null, u.createElement(B.P, {
                            margin: {
                                left: 1
                            }
                        }, u.createElement(B._22, {
                            type: B._27.H5,
                            ellipsis: !0
                        }, e.name)), u.createElement(B.P, {
                            margin: {
                                left: 1
                            }
                        }, u.createElement(B._22, {
                            className: "search-panel__link",
                            ellipsis: !0
                        }, Object(m.d)("{viewerCount,number} Viewers", {
                            viewerCount: e.viewerCount || 0
                        }, "SearchResultPanel")))))))
                    }) : []
                }, t.prototype.getCategoryDrillDown = function(e) {
                    var t;
                    switch (e) {
                        case W.a.Games:
                            if (!this.props.gameResults || 0 === this.props.gameResults.totalHits) return this.getNoResultsMessage();
                            t = this.getGameCards();
                            break;
                        case W.a.Users:
                            if (!this.props.userResults || 0 === this.props.userResults.totalHits) return this.getNoResultsMessage();
                            t = this.getUserCards();
                            break;
                        case W.a.Communities:
                            if (!this.props.communityResults || 0 === this.props.communityResults.totalHits) return this.getNoResultsMessage();
                            t = this.getCommunityCards();
                            break;
                        case W.a.Videos:
                            if (!this.props.videoResults || 0 === this.props.videoResults.totalHits) return this.getNoResultsMessage();
                            t = this.getVideoCards();
                            break;
                        case W.a.Channels:
                            if (!this.props.liveResults || 0 === this.props.liveResults.totalHits) return this.getNoResultsMessage();
                            t = [u.createElement(B.U, {
                                className: "search-result-view__live",
                                margin: {
                                    x: 1
                                },
                                key: "live_drill-down-container"
                            }, u.createElement(B.N, null, this.getLiveCards()))];
                            break;
                        default:
                            return this.getNoResultsMessage()
                    }
                    return u.createElement(j, null, t)
                }, t.prototype.getCategoryTitle = function(e) {
                    switch (e) {
                        case W.a.Games:
                            return Object(m.d)("Games", "SearchResultPanel");
                        case W.a.Users:
                            return Object(m.d)("Channels", "SearchResultPanel");
                        case W.a.Communities:
                            return Object(m.d)("Communities", "SearchResultPanel");
                        case W.a.Videos:
                            return Object(m.d)("Videos", "SearchResultPanel");
                        case W.a.Channels:
                            return Object(m.d)("Live", "SearchResultPanel");
                        default:
                            return Object(m.d)("Top Results", "SearchResultPanel")
                    }
                }, t.prototype.getNoResultsMessage = function() {
                    return u.createElement(B.U, {
                        display: B.H.Flex,
                        flexDirection: B.J.Column,
                        justifyContent: B.T.Center,
                        alignItems: B.c.Center,
                        fullHeight: !0,
                        className: "notice-wrap"
                    }, u.createElement(B.U, {
                        className: "notice-wrap__visual",
                        textAlign: B._23.Center,
                        flexShrink: 1
                    }, u.createElement(B._9, {
                        asset: B._10.SearchNoResults,
                        width: 46,
                        height: 48
                    })), u.createElement("h4", {
                        className: "notice-wrap__title flex__item",
                        "data-test-selector": "panel-body-no-results"
                    }, Object(m.d)("No results found", "SearchResultPanel")), u.createElement("p", {
                        className: "notice-wrap__text flex__item"
                    }, Object(m.d)("They're probably in another castle", "SearchResultPanel")))
                }, t.prototype.getErrorMessage = function() {
                    return u.createElement(B.U, {
                        display: B.H.Flex,
                        flexDirection: B.J.Column,
                        justifyContent: B.T.Center,
                        alignItems: B.c.Center,
                        fullHeight: !0,
                        className: "notice-wrap"
                    }, u.createElement(B.U, {
                        className: "notice-wrap__visual",
                        textAlign: B._23.Center,
                        flexShrink: 1
                    }, u.createElement(B._9, {
                        asset: B._10.DeadGlitch,
                        width: 46,
                        height: 48
                    })), u.createElement("h4", {
                        "data-test-selector": "search-error-message",
                        className: "notice-wrap__title flex__item"
                    }, Object(m.d)("Search is not available at this time", "SearchResultPanel")), u.createElement("p", {
                        className: "notice-wrap__text flex__item"
                    }, Object(m.d)("Please try again later", "SearchResultPanel")))
                }, t
            }(u.Component)),
            q = (n("GtMZ"), function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.state = {
                        isAnimating: !1,
                        currentCategory: t.currentCategory
                    }, n
                }
                return d.__extends(t, e), t.prototype.componentWillReceiveProps = function(e) {
                    var t = this;
                    e.currentCategory && e.currentCategory !== this.props.currentCategory && this.setState({
                        currentCategory: e.currentCategory
                    }), this.props.isVisible !== e.isVisible && (this.animationTimeout && window.clearTimeout(this.animationTimeout), this.setState({
                        isAnimating: !0
                    }), this.animationTimeout = window.setTimeout(function() {
                        t.setState({
                            isAnimating: !1
                        })
                    }, 300))
                }, t.prototype.componentWillUnmount = function() {
                    this.animationTimeout && window.clearTimeout(this.animationTimeout)
                }, t.prototype.render = function() {
                    if (!this.state.currentCategory) return null;
                    var e = this.getAssetName(this.state.currentCategory);
                    return this.props.isVisible || this.state.isAnimating ? u.createElement(B.U, {
                        className: "search-tag"
                    }, u.createElement(B.e, {
                        enabled: !0,
                        type: this.props.isVisible ? B.i.BounceIn : B.i.BounceOut
                    }, u.createElement(B._21, {
                        label: this.state.currentCategory,
                        icon: e,
                        onClose: this.props.onClick,
                        "data-test-selector": "filter-icon",
                        "data-a-target": "nav-search-clear"
                    }))) : null
                }, t.prototype.getAssetName = function(e) {
                    switch (e) {
                        case W.a.Games:
                            return B._10.NavGames;
                        case W.a.Users:
                            return B._10.NavProfile;
                        case W.a.Communities:
                            return B._10.Communities;
                        case W.a.Videos:
                            return B._10.NavVideos;
                        case W.a.Channels:
                        default:
                            return B._10.NavChannels
                    }
                }, t
            }(u.Component)),
            G = (n("p6Rc"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.handleChange = function(e) {
                        t.props.onChange(e.target.value)
                    }, t.categoryTagClicked = function(e) {
                        e.nativeEvent.stopImmediatePropagation(), t.props.onCategorySelected(null)
                    }, t
                }
                return d.__extends(t, e), t.prototype.render = function() {
                    return u.createElement("div", null, u.createElement("div", {
                        className: "top-nav__search-container",
                        "data-click-out-id": "nav-search-balloon"
                    }, u.createElement(w.a, {
                        onClickOut: this.props.onClickOut
                    }, u.createElement(B._12, {
                        onChange: this.handleChange,
                        onFocus: this.props.onFocus,
                        onKeyDown: this.props.onKeyDown,
                        placeholder: Object(m.d)("Search", "NavSearch"),
                        id: "nav-search-input",
                        "data-a-target": "nav-search-input",
                        spellCheck: !1
                    }), u.createElement(B.p, {
                        direction: B.q.Bottom,
                        noTail: !0,
                        size: B.r.Large,
                        show: this.props.isOpen,
                        offsetY: "5px",
                        "data-a-target": "nav-search-balloon"
                    }, u.createElement(V, {
                        isOpen: this.props.isOpen,
                        gameResults: this.props.gameResults,
                        userResults: this.props.userResults,
                        communityResults: this.props.communityResults,
                        videoResults: this.props.videoResults,
                        liveResults: this.props.liveResults,
                        isErrored: this.props.isErrored,
                        isWaiting: this.props.isWaiting,
                        onResultSelected: this.props.onResultSelected,
                        onCategorySelected: this.props.onCategorySelected,
                        currentCategory: this.props.currentCategory,
                        onVideoOptionsChange: this.props.onVideoOptionsChange,
                        loadMore: this.props.loadMore,
                        onKeyDown: this.props.onKeyDown
                    })), u.createElement(q, {
                        isVisible: this.props.isOpen && !!this.props.currentCategory,
                        currentCategory: this.props.currentCategory,
                        onClick: this.categoryTagClicked
                    }))))
                }, t
            }(u.Component)),
            z = 50,
            K = function(e) {
                function t() {
                    var t = e.call(this) || this;
                    return t.onCategorySelected = function(e) {
                        t.setState(function(n) {
                            return d.__assign({}, t.getEmptyState(), {
                                term: n.term,
                                currentCategory: e,
                                isOpen: !0,
                                isWaiting: !0
                            })
                        }, function() {
                            t.doSearch(t.state.term)
                        })
                    }, t.onChange = function(e) {
                        t.inputTimer && (clearTimeout(t.inputTimer), t.inputTimer = 0), e ? t.inputTimer = setTimeout(function() {
                            t.setState({
                                topGameResults: null,
                                topUserResults: null,
                                topLiveResults: null,
                                topVideoResults: null,
                                topCommunityResults: null,
                                isWaiting: !0,
                                term: e
                            }, function() {
                                t.state.videoOptions ? t.doVideosSearch(e, t.state.videoOptions) : t.doSearch(e)
                            })
                        }, z) : t.setState(t.getEmptyState())
                    }, t.onHistoryChange = function() {
                        t.state.isOpen && t.setState({
                            isOpen: !1
                        })
                    }, t.onClickOut = function() {
                        t.state.isOpen && t.setState({
                            isOpen: !1
                        })
                    }, t.onFocus = function() {
                        t.state.term && !t.state.isOpen && t.setState({
                            isOpen: !0
                        })
                    }, t.onKeyDown = function(e) {
                        t.state.term && (e.keyCode === N.a.Esc ? t.setState({
                            isOpen: !1
                        }) : e.keyCode === N.a.Up ? t.focusNext(-1) : e.keyCode === N.a.Down && t.focusNext(1))
                    }, t.onResultSelected = function() {
                        t.setState({
                            isOpen: !1
                        })
                    }, t.loadMore = function() {
                        return d.__awaiter(t, void 0, void 0, function() {
                            var e, t, n, i;
                            return d.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        if (this.state.queryID || null === this.state.currentCategory || !0 === this.state.exhaustedHits || this.state.videoOptions) return [2];
                                        e = this.state.currentPage + 1, a.label = 1;
                                    case 1:
                                        return a.trys.push([1, 3, , 4]), [4, this.searchClient.queryForType(this.state.currentCategory, this.state.term, "", {
                                            page: e
                                        })];
                                    case 2:
                                        return t = a.sent(), [3, 4];
                                    case 3:
                                        return n = a.sent(), m.i.error(n, "Algolia page search failed"), this.setState(d.__assign({}, this.getEmptyState(), {
                                            isErrored: !0,
                                            isOpen: !0
                                        })), [2];
                                    case 4:
                                        return t ? (i = Object(O.b)({
                                            searchResults: t,
                                            append: e > 0,
                                            currentGameResults: this.state.currentGameResults,
                                            currentUserResults: this.state.currentUserResults,
                                            currentCommunityResults: this.state.currentCommunityResults,
                                            currentVideoResults: this.state.currentVideoResults,
                                            currentLiveResults: this.state.currentLiveResults
                                        }), this.setState(d.__assign({}, i, {
                                            isOpen: !0,
                                            isWaiting: !1,
                                            currentPage: e,
                                            exhaustedHits: i.exhaustedHits
                                        })), [2]) : (this.setState(d.__assign({}, this.getEmptyState(), {
                                            isErrored: !0,
                                            isOpen: !0
                                        })), [2])
                                }
                            })
                        })
                    }, t.doVideosSearch = function(e, n) {
                        return d.__awaiter(t, void 0, void 0, function() {
                            var t, i, a;
                            return d.__generator(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        t = C.a(), r.label = 1;
                                    case 1:
                                        return r.trys.push([1, 3, , 4]), [4, this.searchClient.queryVideos(e, t, n)];
                                    case 2:
                                        return (i = r.sent()).hits && this.setState({
                                            topGameResults: null,
                                            topUserResults: null,
                                            topLiveResults: null,
                                            topVideoResults: null,
                                            topCommunityResults: null,
                                            currentVideoResults: {
                                                totalHits: i.totalHits,
                                                results: i.hits.map(O.a)
                                            },
                                            queryID: "",
                                            isWaiting: !1
                                        }), [3, 4];
                                    case 3:
                                        return a = r.sent(), m.i.error(a, "Algolia video search failed"), this.setState({
                                            isErrored: !0,
                                            isWaiting: !1
                                        }), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, t.changeVideoOptions = function(e) {
                        t.setState({
                            videoOptions: e
                        }, function() {
                            t.doVideosSearch(t.state.term, e)
                        })
                    }, t.searchClient = new E.a(m.a.algoliaApplicationID, m.a.algoliaAPIKey), t.state = t.getEmptyState(), t
                }
                return d.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive(), this.props.history.listen(this.onHistoryChange)
                }, t.prototype.componentDidUpdate = function() {
                    !this.state.focusSelectable || this.state.queryID || this.inputTimer || (this.focusNext(1), this.setState({
                        focusSelectable: !1
                    }))
                }, t.prototype.render = function() {
                    return u.createElement(G, {
                        onChange: this.onChange,
                        onClickOut: this.onClickOut,
                        onFocus: this.onFocus,
                        onKeyDown: this.onKeyDown,
                        onResultSelected: this.onResultSelected,
                        gameResults: this.state.currentGameResults,
                        userResults: this.state.currentUserResults,
                        communityResults: this.state.currentCommunityResults,
                        videoResults: this.state.currentVideoResults,
                        liveResults: this.state.currentLiveResults,
                        isOpen: this.state.isOpen,
                        isErrored: this.state.isErrored,
                        isWaiting: this.state.isWaiting,
                        onCategorySelected: this.onCategorySelected,
                        currentCategory: this.state.currentCategory,
                        onVideoOptionsChange: this.changeVideoOptions,
                        loadMore: this.loadMore
                    })
                }, t.prototype.focusNext = function(e) {
                    var t, n = document.querySelectorAll("[data-ts_selectable=true]"),
                        i = document.activeElement,
                        a = Array.prototype.indexOf.call(n, i);
                    if ((t = a < 0 ? e > 0 ? 0 : n.length - 1 : a + e) < 0 && (t = 0), !(t >= n.length)) {
                        var r = n.item(t);
                        r.focus(), r.tabIndex = 0, this.state.currentFocus && (this.state.currentFocus.tabIndex = -1), this.setState({
                            currentFocus: r
                        })
                    }
                }, t.prototype.doSearch = function(e) {
                    return d.__awaiter(this, void 0, void 0, function() {
                        var t, n, i, a, r, s;
                        return d.__generator(this, function(o) {
                            switch (o.label) {
                                case 0:
                                    this.inputTimer = 0, t = -1, n = C.a(), i = "INPUT" === document.activeElement.tagName, this.setState({
                                        queryID: n,
                                        focusSelectable: !i && !!this.state.currentFocus
                                    }), o.label = 1;
                                case 1:
                                    return o.trys.push([1, 6, , 7]), this.state.currentCategory && null !== this.state.currentCategory ? (t = 0, [4, this.searchClient.queryForType(this.state.currentCategory, e, n)]) : [3, 3];
                                case 2:
                                    return a = o.sent(), [3, 5];
                                case 3:
                                    return this.state.topGameResults && this.state.topUserResults && this.state.topLiveResults && this.state.topVideoResults && this.state.topCommunityResults ? (this.setState({
                                        currentGameResults: this.state.topGameResults,
                                        currentUserResults: this.state.topUserResults,
                                        currentLiveResults: this.state.topLiveResults,
                                        currentVideoResults: this.state.topVideoResults,
                                        currentCommunityResults: this.state.topCommunityResults,
                                        queryID: "",
                                        term: e,
                                        isOpen: !0,
                                        isWaiting: !1,
                                        currentPage: t
                                    }), [2]) : [4, this.searchClient.queryTopResults(e, n)];
                                case 4:
                                    a = o.sent(), o.label = 5;
                                case 5:
                                    return [3, 7];
                                case 6:
                                    return r = o.sent(), m.i.error(r, "Algolia top results search failed"), this.setState(d.__assign({}, this.getEmptyState(), {
                                        isErrored: !0,
                                        isOpen: !0,
                                        term: e
                                    })), [2];
                                case 7:
                                    return a ? this.state.queryID !== a.id ? [2] : (s = Object(O.b)({
                                        searchResults: a,
                                        append: !1,
                                        currentGameResults: this.state.currentGameResults,
                                        currentUserResults: this.state.currentUserResults,
                                        currentCommunityResults: this.state.currentCommunityResults,
                                        currentVideoResults: this.state.currentVideoResults,
                                        currentLiveResults: this.state.currentLiveResults
                                    }), this.setState(d.__assign({}, s, {
                                        queryID: "",
                                        term: e,
                                        isOpen: !0,
                                        isWaiting: !1,
                                        currentPage: t
                                    })), this.state.currentCategory && null === this.state.currentCategory && this.setState({
                                        topGameResults: s.currentGameResults,
                                        topUserResults: s.currentUserResults,
                                        topLiveResults: s.currentLiveResults,
                                        topVideoResults: s.currentVideoResults,
                                        topCommunityResults: s.currentCommunityResults,
                                        exhaustedHits: s.exhaustedHits
                                    }), [2]) : (this.setState(d.__assign({}, this.getEmptyState(), {
                                        isErrored: !0,
                                        isOpen: !0,
                                        term: e
                                    })), [2])
                            }
                        })
                    })
                }, t.prototype.getEmptyState = function() {
                    return {
                        term: "",
                        currentGameResults: {
                            totalHits: 0,
                            results: []
                        },
                        currentUserResults: {
                            totalHits: 0,
                            results: []
                        },
                        currentLiveResults: {
                            totalHits: 0,
                            results: []
                        },
                        currentCommunityResults: {
                            totalHits: 0,
                            results: []
                        },
                        currentVideoResults: {
                            totalHits: 0,
                            results: []
                        },
                        isOpen: !1,
                        isErrored: !1,
                        queryID: "",
                        isWaiting: !1,
                        currentCategory: null,
                        currentPage: -1,
                        focusSelectable: !1,
                        exhaustedHits: !1,
                        videoOptions: void 0
                    }
                }, t = d.__decorate([Object(y.c)("NavSearch")], t)
            }(u.Component),
            Q = Object(S.e)(K),
            $ = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onLoginClick = function(e) {
                        e.preventDefault(), t.props.login()
                    }, t.onSignUpClick = function(e) {
                        e.preventDefault(), t.props.signup()
                    }, t
                }
                return d.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return u.createElement(B.U, {
                        className: "anon-user",
                        flexWrap: B.K.NoWrap,
                        display: B.H.Flex,
                        margin: {
                            left: 1
                        },
                        "data-a-target": "user-card"
                    }, u.createElement(B.U, {
                        margin: {
                            right: 1
                        }
                    }, u.createElement(B.u, {
                        onClick: this.onLoginClick,
                        "data-a-target": "login-button"
                    }, Object(m.d)("Log in", "top-nav"))), u.createElement(B.U, {
                        margin: {
                            right: 1
                        }
                    }, u.createElement(B.u, {
                        onClick: this.onSignUpClick,
                        "data-a-target": "signup-button"
                    }, Object(m.d)("Sign up", "top-nav"))))
                }, t = d.__decorate([Object(y.c)("AnonUser")], t)
            }(u.Component),
            J = n("DEPb"),
            Y = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return d.__extends(t, e), t.prototype.render = function() {
                    var e = !1;
                    if (this.props.data) {
                        if (this.props.data.loading || this.props.data.error) return null;
                        e = !!this.props.data.currentUser && this.props.data.currentUser.hasPrime
                    }
                    return !this.props.isLoggedIn || e ? u.createElement("a", {
                        href: v.a,
                        target: "_blank",
                        className: "top-nav__nav-link",
                        "data-a-target": "store-link"
                    }, Object(m.d)("Store", "TopNavStore")) : null
                }, t = d.__decorate([Object(h.a)(J, {
                    skip: function(e) {
                        return !e.isLoggedIn
                    }
                }), Object(y.c)("TopNavStoreComponent", {
                    autoReportInteractive: !0
                })], t)
            }(u.Component),
            Z = Object(a.a)(function(e) {
                return {
                    isLoggedIn: Object(c.d)(e)
                }
            })(Y),
            X = n("S1vB"),
            ee = n("Hs3O"),
            te = n("NhfZ"),
            ne = Object(F.a)("/products/turbo?ref=top_nav"),
            ie = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return d.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    if (this.props.data.loading || this.props.data.error) return null;
                    var e = this.props.data.requestInfo && !Object(X.a)(this.props.data.requestInfo.countryCode),
                        t = !this.props.data.currentUser || !this.props.data.currentUser.hasTurbo;
                    if (e && t) return u.createElement("a", {
                        href: ne,
                        target: "_blank",
                        className: "top-nav__nav-link",
                        "data-a-target": "try-prime-link"
                    }, Object(m.d)("Go Turbo", "TopNavUpsell"));
                    if (!this.props.data.currentUser || !this.props.data.currentUser.hasPrime) {
                        var n = Object(ee.d)(ee.b, window.location.pathname.substring(1));
                        return u.createElement("a", {
                            href: n,
                            target: "_blank",
                            className: "top-nav__nav-link",
                            "data-a-target": "try-prime-link"
                        }, Object(m.d)("Try Prime", "TopNavUpsell"))
                    }
                    return null
                }, t = d.__decorate([Object(h.a)(te), Object(y.c)("TopNavUpsellComponent")], t)
            }(u.Component),
            ae = n("RweG"),
            re = n("WIs4"),
            se = n("l4QG"),
            oe = n("C8Io"),
            le = n("oIkB"),
            ce = n("HZww"),
            de = n("FLwB"),
            ue = n("ZaD5"),
            me = n("NikC"),
            pe = n("0nzt"),
            fe = function() {
                return u.createElement(B.U, {
                    display: B.H.Flex,
                    flexGrow: 1,
                    alignItems: B.c.Center,
                    fullHeight: !0,
                    className: "top-nav__user-card",
                    "data-a-target": "user-card"
                }, u.createElement(B.U, {
                    display: B.H.Flex,
                    flexWrap: B.K.NoWrap,
                    alignItems: B.c.Center,
                    flexGrow: 1,
                    padding: {
                        right: 1
                    },
                    fullHeight: !0,
                    className: "top-nav__user-card-wrapper"
                }, u.createElement(B.U, {
                    margin: {
                        x: 1
                    }
                }, u.createElement(y.a, {
                    size: 30,
                    imageSrc: m.a.defaultAvatarURL,
                    imageAlt: Object(m.d)("User Avatar", "UserError"),
                    "data-a-target": "top-nav-avatar"
                })), u.createElement(B.U, {
                    flexGrow: 1
                }, u.createElement(B._18, {
                    color: B.F.Base,
                    className: "top-nav__username"
                }, ""))))
            },
            he = function() {
                return u.createElement(B.U, {
                    display: B.H.Flex,
                    flexGrow: 1,
                    alignItems: B.c.Center,
                    fullHeight: !0,
                    className: "top-nav__user-card top-nav__user-card--placeholder",
                    "data-a-target": "user-card"
                }, u.createElement(B.U, {
                    display: B.H.Flex,
                    flexWrap: B.K.NoWrap,
                    alignItems: B.c.Center,
                    flexGrow: 1,
                    padding: {
                        right: 1
                    },
                    fullHeight: !0,
                    className: "top-nav__user-card-wrapper"
                }, u.createElement(B.U, {
                    margin: {
                        x: 1
                    }
                }, u.createElement("div", {
                    className: "top-nav__user-card-placeholder-avatar"
                })), u.createElement(B.U, {
                    flexGrow: 1,
                    display: B.H.Flex,
                    flexDirection: B.J.Column,
                    justifyContent: B.T.Center
                }, u.createElement(B._18, {
                    color: B.F.Base,
                    className: "top-nav__username"
                }, u.createElement("div", {
                    className: "top-nav__user-card-placeholder-name"
                })), u.createElement(B.U, {
                    className: "top-nav__user-status"
                }, u.createElement(B.U, {
                    ellipsis: !0,
                    display: B.H.Flex,
                    alignItems: B.c.Center
                }, u.createElement(B.U, {
                    display: B.H.InlineFlex,
                    margin: {
                        right: .5
                    }
                }, u.createElement("div", {
                    className: "top-nav__user-card-placeholder-presence"
                })), u.createElement(B._18, {
                    display: B.H.InlineFlex,
                    color: B.F.Alt
                }, u.createElement("div", {
                    className: "top-nav__user-card-placeholder-status"
                }))))), u.createElement(B.U, {
                    display: B.H.Flex,
                    flexShrink: 0,
                    className: "top-nav__user-card-dropdown-arrow top-nav__user-card-dropdown-arrow--presence",
                    "data-a-target": "top-nav-dropdown-arrow"
                }, u.createElement(B._9, {
                    asset: B._10.GlyphArrDown
                }))))
            },
            ge = n("NXs7"),
            ve = n("VAT8"),
            ye = n("2Hj/"),
            ke = (n("YSdr"), function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.onCardClick = function() {
                        n.setState({
                            dropdownOpen: !n.state.dropdownOpen
                        })
                    }, n.onClickOut = function() {
                        n.setState({
                            dropdownOpen: !1
                        })
                    }, n.onLogoutClick = function(e) {
                        e.preventDefault(), n.props.logout()
                    }, n.onShareCheckboxClick = function() {
                        n.props.toggleShareActivity()
                    }, n.onDarkModeCheckboxClick = function() {
                        var e = n.props.theme === ge.a.Dark ? ge.a.Light : ge.a.Dark;
                        n.props.changeTheme(e, me.a.UserMenu)
                    }, n.onOnlineClick = function(e) {
                        e && e.stopPropagation(), n.props.toggleVisibility(se.a.Online)
                    }, n.onInvisibleClick = function(e) {
                        e && e.stopPropagation(), n.props.toggleVisibility(se.a.Offline)
                    }, n.unsubscribeFromHistory = n.props.history.listen(function() {
                        n.setState({
                            dropdownOpen: !1
                        })
                    }), n.state = {
                        dropdownOpen: !1
                    }, n
                }
                return d.__extends(t, e), t.prototype.componentWillUnmount = function() {
                    this.unsubscribeFromHistory()
                }, t.prototype.render = function() {
                    var e = this.props.gqlData.currentUser.profileImageURL || m.a.defaultAvatarURL,
                        t = U("top-nav__dropdown-wrapper", {
                            toggled: this.state.dropdownOpen
                        }),
                        n = U("top-nav__user-card", Object(ve.c)(ge.a.Dark), {
                            "top-nav__dropdown-open": this.state.dropdownOpen
                        }),
                        i = this.state.dropdownOpen ? "dropdown-down" : "dropdown-up",
                        a = this.state.dropdownOpen ? "dropdown-down" : "dropdown-up",
                        r = this.props.gqlData.currentUser.availability === se.a.Offline ? B.F.Base : B.F.Alt2,
                        s = this.props.gqlData.currentUser.availability === se.a.Online ? B.F.Base : B.F.Alt2,
                        o = this.props.gqlData.currentUser.settings.isSharingActivity,
                        l = this.props.gqlData.currentUser.availability || this.props.gqlData.currentUser.settings.visibility,
                        c = u.createElement(B.U, {
                            margin: {
                                x: 2,
                                bottom: 1
                            }
                        }, u.createElement(B.E, {
                            id: "dark-mode-toggle",
                            label: Object(m.d)("Dark Mode", "TopNavUser"),
                            "data-a-target": "dark-mode-toggle",
                            "data-test-selector": "dark-mode-toggle",
                            "data-a-value": this.props.theme,
                            checked: this.props.theme === ge.a.Dark,
                            onChange: this.onDarkModeCheckboxClick
                        }));
                    return u.createElement(B.U, {
                        position: B._3.Relative,
                        display: B.H.Flex,
                        flexGrow: 1,
                        alignItems: B.c.Stretch,
                        fullHeight: !0
                    }, u.createElement(w.a, {
                        onClickOut: this.onClickOut,
                        className: n
                    }, u.createElement(B.U, {
                        display: B.H.Flex,
                        flexGrow: 1,
                        alignItems: B.c.Stretch,
                        fullHeight: !0
                    }, u.createElement(B.S, {
                        onClick: this.onCardClick,
                        "data-a-target": "user-menu-toggle",
                        "data-test-selector": "user-menu-toggle"
                    }, u.createElement(B.U, {
                        display: B.H.Flex,
                        flexWrap: B.K.NoWrap,
                        alignItems: B.c.Center,
                        flexGrow: 1,
                        padding: {
                            right: 1
                        },
                        fullHeight: !0,
                        className: "top-nav__user-card-wrapper"
                    }, u.createElement(B.U, {
                        margin: {
                            x: 1
                        },
                        flexShrink: 0
                    }, u.createElement(B.U, {
                        className: "top-nav__user-card-avatar-container"
                    }, u.createElement(y.a, {
                        size: 30,
                        imageSrc: e,
                        imageAlt: "User avatar",
                        "data-a-target": "top-nav-avatar"
                    }))), u.createElement(B.U, {
                        flexGrow: 1,
                        flexShrink: 1,
                        flexDirection: B.J.Column
                    }, u.createElement(B._18, {
                        color: B.F.Base,
                        className: "top-nav__username",
                        "data-a-target": "user-display-name"
                    }, this.props.gqlData.currentUser.displayName), u.createElement(B.U, {
                        className: "top-nav__user-status",
                        ellipsis: !0,
                        fullWidth: !0,
                        alignItems: B.c.Center,
                        display: B.H.Flex,
                        flexWrap: B.K.NoWrap
                    }, u.createElement(B.U, {
                        display: B.H.Flex,
                        flexShrink: 0,
                        margin: {
                            right: .5
                        }
                    }, u.createElement(ye.a, {
                        availability: l
                    })), u.createElement(B._18, {
                        ellipsis: !0,
                        color: B.F.Alt
                    }, u.createElement(B._22, {
                        type: B._27.Span,
                        noWrap: !0,
                        "data-a-target": "online-status"
                    }, this.props.gqlData.currentUser && u.createElement(ye.b, {
                        activity: this.props.gqlData.currentUser.activity,
                        availability: l === se.a.Offline ? se.a.Invisible : l
                    }))))), u.createElement(B._18, {
                        display: B.H.Flex,
                        flexShrink: 0,
                        color: B.F.Base,
                        className: "user-card-wrapper__dropdown-arrow",
                        "data-a-target": "top-nav-dropdown-arrow"
                    }, u.createElement(B._9, {
                        asset: B._10.GlyphArrDown
                    }))))), u.createElement(B._18, {
                        fullWidth: !0,
                        overflow: B.Z.Hidden,
                        position: B._3.Absolute,
                        className: t,
                        background: B.m.Base,
                        color: B.F.Base,
                        "data-a-target": i,
                        "data-test-selector": a
                    }, u.createElement(x.b, {
                        className: "top-nav__user-scroll",
                        suppressScrollX: !0
                    }, u.createElement(B.U, null, u.createElement(B._18, {
                        padding: {
                            y: 1
                        },
                        background: B.m.Alt
                    }, u.createElement(B.S, {
                        onClick: this.onOnlineClick,
                        "data-a-target": "online-dropdown-button",
                        "data-test-selector": "online-dropdown-button"
                    }, u.createElement(B._18, {
                        color: B.F.Alt2,
                        display: B.H.Flex,
                        padding: {
                            x: 2,
                            y: .5
                        }
                    }, u.createElement(B.U, {
                        alignItems: B.c.Center,
                        display: B.H.InlineFlex,
                        margin: {
                            right: 1
                        }
                    }, u.createElement(B._4, {
                        status: B._5.Online
                    })), u.createElement(B._22, {
                        bold: this.props.gqlData.currentUser.availability === se.a.Online,
                        color: s
                    }, Object(m.d)("Online", "TopNavUser")))), u.createElement(B.S, {
                        onClick: this.onInvisibleClick,
                        "data-a-target": "invisible-dropdown-button",
                        "data-test-selector": "invisible-dropdown-button"
                    }, u.createElement(B._18, {
                        color: B.F.Base,
                        display: B.H.Flex,
                        padding: {
                            x: 2,
                            y: .5
                        }
                    }, u.createElement(B.U, {
                        alignItems: B.c.Center,
                        display: B.H.InlineFlex,
                        margin: {
                            right: 1
                        }
                    }, u.createElement(B._4, {
                        status: B._5.Invisible
                    })), u.createElement(B._22, {
                        bold: this.props.gqlData.currentUser.availability === se.a.Offline,
                        color: r
                    }, Object(m.d)("Invisible", "TopNavUser")))), u.createElement(B.U, {
                        margin: {
                            x: 2,
                            bottom: 1,
                            top: .5
                        }
                    }, u.createElement(B.E, {
                        id: "share-activity-toggle",
                        label: Object(m.d)("Share my activity", "TopNavUser"),
                        "data-a-target": "share-activity-toggle",
                        "data-test-selector": "share-activity-toggle",
                        "data-a-value": o,
                        checked: o,
                        onChange: this.onShareCheckboxClick,
                        disabled: this.props.gqlData.currentUser.availability === se.a.Offline
                    }), u.createElement(B._22, {
                        type: B._27.Span,
                        color: B.F.Alt
                    }, Object(m.d)("Share what you're watching, playing, or streaming with your friends.", "TopNavUser"))), u.createElement(B._18, {
                        borderBottom: !0,
                        margin: {
                            x: 2,
                            y: 1
                        }
                    }), c), u.createElement(B.U, {
                        margin: {
                            y: 1
                        }
                    }, u.createElement(B.S, {
                        linkTo: {
                            pathname: "/" + this.props.gqlData.currentUser.login,
                            state: {
                                content: "self-channel",
                                medium: "twitch-topnav"
                            }
                        },
                        "data-a-target": "channel-dropdown-link"
                    }, u.createElement(B._18, {
                        color: B.F.Alt,
                        display: B.H.Flex,
                        alignItems: B.c.Center,
                        padding: {
                            x: 2,
                            y: .5
                        }
                    }, u.createElement(B.U, {
                        display: B.H.Flex,
                        alignItems: B.c.Center,
                        margin: {
                            right: 1
                        }
                    }, u.createElement(B._9, {
                        asset: B._10.NavMyChannel,
                        height: 18,
                        width: 18
                    })), u.createElement(B._22, null, Object(m.d)("Channel", "TopNavUser")))), u.createElement(B.S, {
                        linkTo: Object(F.a)("/" + this.props.gqlData.currentUser.login + "/manager/past_broadcasts"),
                        "data-a-target": "video-manager-dropdown-link"
                    }, u.createElement(B._18, {
                        color: B.F.Alt,
                        display: B.H.Flex,
                        alignItems: B.c.Center,
                        padding: {
                            x: 2,
                            y: .5
                        }
                    }, u.createElement(B.U, {
                        display: B.H.Flex,
                        alignItems: B.c.Center,
                        margin: {
                            right: 1
                        }
                    }, u.createElement(B._9, {
                        asset: B._10.NavManager,
                        height: 18,
                        width: 18
                    })), u.createElement(B._22, null, Object(m.d)("Video Manager", "TopNavUser")))), u.createElement(B.S, {
                        linkTo: Object(F.a)("/" + this.props.gqlData.currentUser.login + "/dashboard"),
                        "data-a-target": "dashboard-dropdown-link"
                    }, u.createElement(B._18, {
                        color: B.F.Alt,
                        display: B.H.Flex,
                        alignItems: B.c.Center,
                        padding: {
                            x: 2,
                            y: .5
                        }
                    }, u.createElement(B.U, {
                        display: B.H.Flex,
                        alignItems: B.c.Center,
                        margin: {
                            right: 1
                        }
                    }, u.createElement(B._9, {
                        asset: B._10.NavDashboard,
                        height: 18,
                        width: 18
                    })), u.createElement(B._22, null, Object(m.d)("Dashboard", "TopNavUser")))), u.createElement(B._18, {
                        borderBottom: !0,
                        margin: {
                            x: 2,
                            y: 1
                        }
                    }), u.createElement(B.S, {
                        targetBlank: Object(F.b)(),
                        linkTo: Object(F.a)("/friends"),
                        "data-a-target": "friends-dropdown-link"
                    }, u.createElement(B._18, {
                        color: B.F.Alt,
                        display: B.H.Flex,
                        alignItems: B.c.Center,
                        padding: {
                            x: 2,
                            y: .5
                        }
                    }, u.createElement(B.U, {
                        display: B.H.Flex,
                        alignItems: B.c.Center,
                        margin: {
                            right: 1
                        }
                    }, u.createElement(B._9, {
                        asset: B._10.Friends,
                        height: 18,
                        width: 18
                    })), u.createElement(B._22, null, Object(m.d)("Friends", "TopNavUser")))), u.createElement(B.S, {
                        targetBlank: Object(F.b)(),
                        linkTo: Object(F.a)("/messages/inbox"),
                        "data-a-target": "inbox-dropdown-link"
                    }, u.createElement(B._18, {
                        color: B.F.Alt,
                        display: B.H.Flex,
                        alignItems: B.c.Center,
                        padding: {
                            x: 2,
                            y: .5
                        }
                    }, u.createElement(B.U, {
                        display: B.H.Flex,
                        alignItems: B.c.Center,
                        margin: {
                            right: 1
                        }
                    }, u.createElement(B._9, {
                        asset: B._10.NavMessages,
                        height: 18,
                        width: 18
                    })), u.createElement(B._22, null, Object(m.d)("Messages", "TopNavUser")))), u.createElement(B.S, {
                        targetBlank: Object(F.b)(),
                        linkTo: Object(F.a)("/subscriptions"),
                        "data-a-target": "subscriptions-dropdown-link"
                    }, u.createElement(B._18, {
                        color: B.F.Alt,
                        display: B.H.Flex,
                        alignItems: B.c.Center,
                        padding: {
                            x: 2,
                            y: .5
                        }
                    }, u.createElement(B.U, {
                        display: B.H.Flex,
                        alignItems: B.c.Center,
                        margin: {
                            right: 1
                        }
                    }, u.createElement(B._9, {
                        asset: B._10.NavBackpack,
                        height: 18,
                        width: 18
                    })), u.createElement(B._22, null, Object(m.d)("Subscriptions", "TopNavUser")))), u.createElement(B.S, {
                        targetBlank: Object(F.b)(),
                        linkTo: Object(F.a)("/inventory"),
                        "data-a-target": "inventory-dropdown-link"
                    }, u.createElement(B._18, {
                        color: B.F.Alt,
                        display: B.H.Flex,
                        alignItems: B.c.Center,
                        padding: {
                            x: 2,
                            y: .5
                        }
                    }, u.createElement(B.U, {
                        display: B.H.Flex,
                        alignItems: B.c.Center,
                        margin: {
                            right: 1
                        }
                    }, u.createElement(B._9, {
                        asset: B._10.Crate,
                        height: 18,
                        width: 18
                    })), u.createElement(B._22, null, Object(m.d)("Inventory", "TopNavUser")))), u.createElement(B._18, {
                        borderBottom: !0,
                        margin: {
                            x: 2,
                            y: 1
                        }
                    }), u.createElement(B.S, {
                        targetBlank: Object(F.b)(),
                        linkTo: Object(F.a)("/settings/profile"),
                        "data-a-target": "settings-dropdown-link"
                    }, u.createElement(B._18, {
                        color: B.F.Alt,
                        display: B.H.Flex,
                        alignItems: B.c.Center,
                        padding: {
                            x: 2,
                            y: .5
                        }
                    }, u.createElement(B.U, {
                        display: B.H.Flex,
                        alignItems: B.c.Center,
                        margin: {
                            right: 1
                        }
                    }, u.createElement(B._9, {
                        asset: B._10.NavSettings,
                        height: 18,
                        width: 18
                    })), u.createElement(B._22, null, Object(m.d)("Settings", "TopNavUser")))), u.createElement(B.S, {
                        "data-a-target": "dropdown-logout",
                        onClick: this.onLogoutClick
                    }, u.createElement(B._18, {
                        color: B.F.Alt,
                        display: B.H.Flex,
                        alignItems: B.c.Center,
                        padding: {
                            x: 2,
                            y: .5
                        }
                    }, u.createElement(B.U, {
                        display: B.H.Flex,
                        alignItems: B.c.Center,
                        margin: {
                            right: 1
                        }
                    }, u.createElement(B._9, {
                        asset: B._10.NavLogout,
                        height: 18,
                        width: 18
                    })), u.createElement(B._22, null, Object(m.d)("Log Out", "TopNavUser"))))))))))
                }, t
            }(u.Component)),
            be = Object(S.e)(ke),
            _e = n("A0YJ"),
            Se = n("ilq7"),
            Ne = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.isSettingNewSession = !1, t.dataIsReady = function(e) {
                        return e.data && !e.data.loading && !e.data.error
                    }, t.setUserToOffline = function() {
                        Object(de.c)(se.a.Offline), Object(de.a)()
                    }, t.toggleShareActivity = function() {
                        var e = !t.props.data.currentUser.settings.isSharingActivity,
                            n = d.__assign({}, Object(le.a)({
                                isSharingActivity: e
                            }), {
                                optimisticResponse: {
                                    updateIsSharingActivity: {
                                        __typename: "UpdateIsSharingActivityPayload",
                                        user: {
                                            __typename: "User",
                                            id: t.props.data.currentUser.id,
                                            settings: {
                                                isSharingActivity: e,
                                                __typename: "UserSettings"
                                            }
                                        }
                                    }
                                }
                            });
                        t.props.updateIsSharingActivity(n)
                    }, t.toggleVisibility = function(e) {
                        t.dataIsReady(t.props) && Object(de.e)(e)
                    }, t.setNewSession = function() {
                        return d.__awaiter(t, void 0, void 0, function() {
                            var e;
                            return d.__generator(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        if (this.isSettingNewSession) return [2];
                                        this.isSettingNewSession = !0, t.label = 1;
                                    case 1:
                                        return t.trys.push([1, 3, 4, 5]), [4, Object(de.g)()];
                                    case 2:
                                        return t.sent(), this.props.initialUserAvailabilitySet(), [3, 5];
                                    case 3:
                                        return e = t.sent(), m.i.warn("Failed to set new user availability session.", e), [3, 5];
                                    case 4:
                                        return this.isSettingNewSession = !1, [7];
                                    case 5:
                                        return [2]
                                }
                            })
                        })
                    }, t.maybeRefetchData = function(e) {
                        var n = e.pubsub.messages.presence;
                        n && e.data.currentUser.id && n.data.user_id === +e.data.currentUser.id && t.props.pubsub.messages.presence !== n && e.data.refetch()
                    }, t
                }
                return d.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.maybeRefetchData(this.props), this.props.firstPageLoaded && this.dataIsReady(this.props) && !this.props.initialUserAvailabilityIsSet && this.setNewSession(), this.reportInteractive()
                }, t.prototype.componentWillReceiveProps = function(e) {
                    this.maybeRefetchData(e), e.firstPageLoaded && this.dataIsReady(e) && !e.initialUserAvailabilityIsSet && this.setNewSession()
                }, t.prototype.componentDidUpdate = function() {
                    this.reportInteractive()
                }, t.prototype.componentWillUnmount = function() {
                    this.setUserToOffline()
                }, t.prototype.render = function() {
                    return this.props.data && !this.props.data.loading && this.props.data.currentUser ? this.props.data.error ? u.createElement(fe, null) : u.createElement(be, {
                        gqlData: this.props.data,
                        toggleShareActivity: this.toggleShareActivity,
                        toggleVisibility: this.toggleVisibility,
                        changeTheme: this.props.changeTheme,
                        firstPageLoaded: this.props.firstPageLoaded,
                        logout: this.props.logout,
                        theme: this.props.theme
                    }) : u.createElement(he, null)
                }, t.prototype.reportInteractive = function() {
                    !this.props.data || this.props.data.loading && !this.props.data.error || this.props.latencyTracking.reportInteractive()
                }, t = d.__decorate([Object(h.a)(_e), Object(h.a)(Se, {
                    name: "updateIsSharingActivity"
                }), Object(re.a)(function(e) {
                    return {
                        query: _e,
                        topic: e.data.currentUser ? Object(ce.f)(e.data.currentUser.id) : "",
                        skip: !(e.data && !e.data.loading && !e.data.error && e.data.currentUser),
                        type: oe.c.PresenceSettings,
                        mutator: function(e, t) {
                            return t.currentUser.settings.visibility = e.data.availability_override.toUpperCase(), t.currentUser.settings.isSharingActivity = e.data.share_activity, t
                        }
                    }
                }), Object(ae.a)([{
                    topic: function(e) {
                        return Object(ce.f)(e.data.currentUser.id)
                    },
                    mapMessageTypesToProps: (i = {}, i[oe.c.Presence] = "presence", i),
                    skip: function(e) {
                        return !(e.data && !e.data.loading && !e.data.error && e.data.currentUser)
                    }
                }]), Object(y.c)("User")], t)
            }(u.Component),
            Ce = Object(a.a)(function(e) {
                return {
                    theme: Object(pe.a)(e),
                    firstPageLoaded: e.session.firstPageLoaded,
                    initialUserAvailabilityIsSet: e.session.initialUserAvailabilityIsSet
                }
            }, function(e) {
                return Object(s.bindActionCreators)({
                    changeTheme: me.b,
                    initialUserAvailabilitySet: ue.g
                }, e)
            })(Object(r.f)(Ne)),
            Ee = n("8PKe"),
            Oe = n("6yAw"),
            we = (n("HTB+"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {}, t.renderOnsiteNotifications = function() {
                        return t.props.isLoggedIn ? u.createElement(B.U, {
                            flexGrow: 0,
                            alignSelf: B.d.Center,
                            flexWrap: B.K.NoWrap,
                            padding: {
                                left: .5,
                                right: 1
                            },
                            flexShrink: 0
                        }, u.createElement(_, null)) : null
                    }, t.renderTwitchPrimeCrown = function(e) {
                        return u.createElement(B.U, {
                            className: "top-nav__prime",
                            flexGrow: 0,
                            flexShrink: 0,
                            padding: {
                                x: .5
                            },
                            alignSelf: B.d.Center,
                            flexWrap: B.K.NoWrap
                        }, !e && u.createElement(Ee.b, null))
                    }, t.renderStoreLink = function() {
                        var e = !1;
                        if (t.props.data) {
                            if (t.props.data.loading || t.props.data.error) return null;
                            e = !!t.props.data.currentUser && t.props.data.currentUser.hasPrime
                        }
                        return !t.props.isLoggedIn || e ? null : u.createElement(B.S, {
                            targetBlank: !0,
                            linkTo: v.a,
                            "data-a-target": "store-link-dropdown",
                            "data-test-selector": "store-link-dropdown"
                        }, u.createElement(B.U, {
                            padding: {
                                y: .5,
                                x: 1
                            }
                        }, Object(m.d)("Store", "TopNav")))
                    }, t.saveEllipsisRef = function(e) {
                        return t.ellipsisMenu = e
                    }, t.onNavigationClicked = function() {
                        t.ellipsisMenu.toggleBalloon(!1)
                    }, t.renderBrowseLink = function(e) {
                        var t = e.match,
                            n = t && "following" !== t.params.subpage,
                            i = Object(m.d)("Browse", "TopNav");
                        return u.createElement(r.a, {
                            className: "top-nav__nav-link" + (n ? " active" : ""),
                            "data-a-target": "browse-link",
                            title: i,
                            to: {
                                pathname: "/directory",
                                state: {
                                    medium: g.PageviewMedium.TopNav,
                                    content: g.PageviewContent.Games
                                }
                            }
                        }, i)
                    }, t
                }
                return d.__extends(t, e), t.prototype.componentDidMount = function() {
                    return d.__awaiter(this, void 0, void 0, function() {
                        var e, t;
                        return d.__generator(this, function(n) {
                            switch (n.label) {
                                case 0:
                                    return this.props.latencyTracking.reportInteractive(), [4, m.n.experiments.getAssignment(k.e)];
                                case 1:
                                    return e = n.sent(), [4, m.n.experiments.getAssignment(k.f)];
                                case 2:
                                    return t = n.sent(), Object(k.j)(e, t) && this.setState({
                                        forYouAssignment: t
                                    }), [2]
                            }
                        })
                    })
                }, t.prototype.render = function() {
                    var e = null;
                    if (this.props.isLoggedIn) {
                        var t = Object(m.d)("Following", "TopNav"),
                            n = this.state.forYouAssignment === k.b.First ? "/directory/following/foryou" : "/directory/following";
                        e = u.createElement(r.b, {
                            activeClassName: "active",
                            to: {
                                pathname: n,
                                state: {
                                    medium: g.PageviewMedium.TopNav,
                                    content: g.PageviewContent.Following
                                }
                            },
                            className: "top-nav__nav-link",
                            "data-a-target": "following-link",
                            title: t
                        }, t)
                    }
                    return u.createElement(B.P, {
                        position: B._3.Fixed,
                        attachTop: !0,
                        fullWidth: !0
                    }, u.createElement("nav", {
                        className: "top-nav",
                        "data-a-target": "top-nav-container",
                        style: {
                            height: "5rem"
                        }
                    }, u.createElement(B.U, {
                        className: "top-nav__menu",
                        display: B.H.Flex,
                        alignItems: B.c.Stretch,
                        flexWrap: B.K.NoWrap,
                        fullHeight: !0
                    }, u.createElement(B.P, {
                        display: B.H.InlineFlex,
                        alignItems: B.c.Center,
                        flexShrink: 0
                    }, u.createElement(r.a, {
                        to: {
                            pathname: "/",
                            state: {
                                medium: g.PageviewMedium.TopNav,
                                content: g.PageviewContent.Logo
                            }
                        },
                        className: "top-nav__home-link",
                        "data-a-target": "home-link"
                    }, u.createElement(B._9, {
                        asset: B._10.LogoTwitch,
                        width: 94,
                        height: 32
                    }))), u.createElement(B.U, {
                        className: "top-nav__nav-items-container",
                        display: B.H.Flex,
                        alignItems: B.c.Stretch,
                        flexGrow: 1,
                        flexWrap: B.K.NoWrap,
                        flexShrink: 0
                    }, e, u.createElement(r.d, {
                        path: "/directory/:subpage?",
                        children: this.renderBrowseLink
                    }), u.createElement("a", {
                        href: "https://app.twitch.tv/download",
                        "data-a-target": "get-desktop-link",
                        className: "top-nav__nav-link"
                    }, Object(m.d)("Get Desktop", "TopNav")), u.createElement(ie, null), u.createElement(Z, null), u.createElement(B.U, {
                        className: "top-nav__ellipsis-button",
                        display: B.H.Flex,
                        alignItems: B.c.Center
                    }, u.createElement(f.a, {
                        ref: this.saveEllipsisRef
                    }, u.createElement(B.v, {
                        icon: B._10.NavMore,
                        overlay: !0,
                        ariaLabel: Object(m.d)("More nav items", "TopNav"),
                        "data-a-target": "ellipsis-button"
                    }), u.createElement(B.p, {
                        direction: B.q.Bottom,
                        tailOffset: 7,
                        size: B.r.Small,
                        "data-a-target": "overflow-menu"
                    }, u.createElement(B.U, {
                        padding: 1
                    }, u.createElement(B.S, {
                        targetBlank: !0,
                        linkTo: "https://www.twitch.tv/p/about",
                        "data-a-target": "about-link"
                    }, u.createElement(B.U, {
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, Object(m.d)("About", "TopNav"))), u.createElement(B.S, {
                        targetBlank: !0,
                        linkTo: "http://twitchadvertising.tv/",
                        "data-a-target": "advertisers-link"
                    }, u.createElement(B.U, {
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, Object(m.d)("Advertisers", "TopNav"))), u.createElement(B.S, {
                        targetBlank: !0,
                        linkTo: "https://blog.twitch.tv/",
                        "data-a-target": "blog-link"
                    }, u.createElement(B.U, {
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, Object(m.d)("Blog", "TopNav"))), u.createElement(B.S, {
                        targetBlank: !0,
                        linkTo: "https://www.twitch.tv/p/legal/community-guidelines",
                        "data-a-target": "community-guidelines-link"
                    }, u.createElement(B.U, {
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, Object(m.d)("Community Guidelines", "TopNav"))), u.createElement(B.S, {
                        targetBlank: !0,
                        linkTo: "https://www.twitch.tv/p/cookie-policy",
                        "data-a-target": "cookie-policy-link"
                    }, u.createElement(B.U, {
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, Object(m.d)("Cookie Policy", "TopNav"))), u.createElement(B.S, {
                        onClick: this.onNavigationClicked,
                        linkTo: "/directory/game/Creative",
                        "data-a-target": "creative-link"
                    }, u.createElement(B.U, {
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, Object(m.d)("Creative", "TopNav"))), u.createElement(B.S, {
                        targetBlank: !0,
                        linkTo: "https://dev.twitch.tv/",
                        "data-a-target": "developers-link"
                    }, u.createElement(B.U, {
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, Object(m.d)("Developers", "TopNav"))), u.createElement(B.S, {
                        targetBlank: !0,
                        linkTo: "https://help.twitch.tv/",
                        "data-a-target": "help-link"
                    }, u.createElement(B.U, {
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, Object(m.d)("Help", "TopNav"))), u.createElement(B.S, {
                        targetBlank: !0,
                        linkTo: "https://www.twitch.tv/jobs",
                        "data-a-target": "jobs-link"
                    }, u.createElement(B.U, {
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, Object(m.d)("Jobs", "TopNav"))), u.createElement(f.a, {
                        display: B.H.Block
                    }, u.createElement(B.S, {
                        "data-target": "language-selector-click",
                        "data-a-target": "language-selector"
                    }, u.createElement(B.U, {
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, Object(m.d)("Language", "TopNav"))), u.createElement(B.p, {
                        size: B.r.Small,
                        direction: B.q.Right,
                        offsetY: "4px",
                        offsetX: "20px",
                        "data-target": "language-selector",
                        "data-a-target": "language-selector-menu"
                    }, u.createElement(p.a, null))), u.createElement(B.S, {
                        targetBlank: !0,
                        linkTo: "https://music.twitch.tv/",
                        "data-a-target": "music-link"
                    }, u.createElement(B.U, {
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, Object(m.d)("Music", "TopNav"))), this.renderStoreLink(), u.createElement(B.S, {
                        targetBlank: !0,
                        linkTo: "https://www.twitch.tv/p/partners",
                        "data-a-target": "partners-link"
                    }, u.createElement(B.U, {
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, Object(m.d)("Partners", "TopNav"))), u.createElement(B.S, {
                        targetBlank: !0,
                        linkTo: "https://www.twitch.tv/p/press",
                        "data-a-target": "press-link"
                    }, u.createElement(B.U, {
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, Object(m.d)("Press", "TopNav"))), u.createElement(B.S, {
                        targetBlank: !0,
                        linkTo: "https://twitch.tv/p/security",
                        "data-a-target": "security-link"
                    }, u.createElement(B.U, {
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, Object(m.d)("Security", "TopNav"))), u.createElement(B.S, {
                        targetBlank: !0,
                        linkTo: "https://www.twitch.tv/p/terms-of-service",
                        "data-a-target": "terms-link"
                    }, u.createElement(B.U, {
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, Object(m.d)("Terms", "TopNav"))))))), u.createElement(B.U, {
                        className: "top-nav__search",
                        flexGrow: 1,
                        alignSelf: B.d.Center
                    }, u.createElement(Q, null))), this.renderTwitchPrimeCrown(), this.renderOnsiteNotifications(), u.createElement(B.U, {
                        className: "top-nav__nav-items-container",
                        display: B.H.Flex,
                        alignItems: B.c.Center,
                        flexWrap: B.K.NoWrap,
                        flexGrow: 0,
                        flexShrink: 0
                    }, this.props.isLoggedIn ? u.createElement(Ce, {
                        logout: this.props.logout
                    }) : u.createElement($, {
                        login: this.props.login,
                        signup: this.props.signup
                    })))))
                }, t = d.__decorate([Object(h.a)(Oe, {
                    skip: function(e) {
                        return !e.isLoggedIn
                    }
                }), Object(y.c)("TopNav")], t)
            }(u.Component)),
            Ue = Object(r.f)(Object(a.a)(function(e) {
                return {
                    isLoggedIn: Object(c.d)(e)
                }
            }, function(e) {
                return Object(s.bindActionCreators)({
                    login: function() {
                        return Object(l.f)(o.a.TopNavSignupButton)
                    },
                    logout: l.g,
                    signup: function() {
                        return Object(l.h)(o.a.TopNavSignupButton)
                    }
                }, e)
            })(we));
        n.d(t, "a", function() {
            return "5rem"
        }), n.d(t, "b", function() {
            return "9.5rem"
        }), n.d(t, "c", function() {
            return Ue
        })
    },
    TPVZ: function(e, t, n) {
        "use strict";
        var i, a = n("TToO"),
            r = n("HW6M"),
            s = n("U7vG"),
            o = n("F8kA"),
            l = n("6sO2"),
            c = n("hdYS"),
            d = n("DtWM"),
            u = n("+Znq"),
            m = n("7vx8"),
            p = n("czpb"),
            f = n("RH2O"),
            h = n("Aj/L"),
            g = n("N221"),
            v = n("jF7o"),
            y = n("iMOk"),
            k = n("WVx7"),
            b = n("ySfT"),
            _ = n("ZJYd"),
            S = n("/LBW"),
            N = n("Odds"),
            C = (n("fHoP"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.handlePromoBuy = function(e) {
                        var n = Object(_.b)({
                            trackBitsCardInteraction: t.props.trackBitsCardInteraction,
                            channelID: t.props.channelID,
                            purchaseUrl: e.currentTarget.dataset.purchaseUrl,
                            bitsAmount: e.currentTarget.dataset.bitsAmount,
                            location: S.b.GetBitsButton
                        });
                        n && t.props.onPromoBuyClose(n)
                    }, t
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    var e = s.createElement(N.U, null, s.createElement(N.U, {
                        padding: {
                            x: 5,
                            y: 2
                        },
                        textAlign: N._23.Center
                    }, s.createElement(N._22, {
                        type: N._27.H4,
                        bold: !0
                    }, Object(l.d)("Cheer Bits for your Favorite Streamer!", "Bits--FirstTimeUserPrompt"))), s.createElement(N.U, {
                        padding: {
                            x: 2,
                            bottom: 1
                        }
                    }, s.createElement(N._22, {
                        type: N._27.Span,
                        color: N.F.Alt
                    }, Object(l.d)("Bits are fun, animated emotes. Cheering Bits celebrates moments you love with the community right in chat and similar to subscribing, helps support Partners and Affiliates.", "Bits--FirstTimeUserPrompt"), s.createElement(N.P, {
                        margin: {
                            left: .5
                        }
                    }, s.createElement("a", {
                        onClick: this.props.toggleShowTutorial
                    }, Object(l.d)("How do I cheer?", "Bits--FirstTimeUserPrompt"))))), s.createElement(N.U, {
                        padding: {
                            bottom: 2
                        },
                        textAlign: N._23.Center
                    }, s.createElement(N.P, {
                        margin: {
                            bottom: 1
                        }
                    }, s.createElement(N._22, {
                        type: N._27.H6,
                        bold: !0,
                        className: "bits-first-time-user-prompt__promo-header"
                    }, Object(l.d)("First Time Purchaser Discount Pack!", "Bits--FirstTimeUserPrompt"))), s.createElement(N.u, {
                        onClick: this.handlePromoBuy,
                        "data-purchase-url": this.props.promo.url,
                        "data-bits-amount": this.props.promo.bits,
                        "data-a-target": "bits-purchase-button-" + this.props.promo.bits
                    }, Object(l.d)("{price} For {amount} Bits", {
                        price: this.props.promo.price,
                        amount: this.props.promo.bits
                    }, "Bits--FirstTimeUserPrompt"))));
                    return this.props.isShowingTutorial ? s.createElement(N.U, {
                        className: "bits-first-time-user-prompt",
                        fullWidth: !0
                    }, s.createElement(N.U, {
                        className: "bits-first-time-user-prompt__tutorial-back-button"
                    }, s.createElement(N.u, {
                        onClick: this.props.toggleShowTutorial,
                        type: N.z.Text
                    }, s.createElement(N._9, {
                        asset: N._10.Play,
                        height: 8
                    }), " ", Object(l.d)("Back", "Bits--FirstTimeUserPrompt"))), s.createElement(N.U, {
                        textAlign: N._23.Center,
                        padding: {
                            x: 2,
                            bottom: 2,
                            top: 5
                        },
                        fullHeight: !0
                    }, s.createElement(N.e, {
                        type: N.i.SlideInLeft,
                        duration: N.g.Long,
                        enabled: !0
                    }, s.createElement(b.a, null)))) : this.props.animateFirstTimeUserIntro ? s.createElement(N.P, {
                        className: "bits-first-time-user-prompt"
                    }, s.createElement(N.e, {
                        type: N.i.SlideInRight,
                        duration: N.g.Long,
                        enabled: this.props.animateFirstTimeUserIntro
                    }, e)) : s.createElement(N.U, {
                        className: "bits-first-time-user-prompt"
                    }, e)
                }, t
            }(s.Component)),
            E = n("jxGs"),
            O = n("bkpq"),
            w = n("CSlQ"),
            U = n("annQ"),
            x = (n("lGVF"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        hideFirstTimeUserIntro: !1
                    }, t.trackBitsCardInteraction = function(e, n) {
                        var i = {
                            actionName: e,
                            emoteType: n && n.emoteType,
                            emoteLevel: n && n.emoteLevel,
                            location: S.b.GetBitsButton,
                            displayedBalance: t.props.bitsBalance || 0
                        };
                        Object(S.h)(i)
                    }, t.onClose = function() {}, t.onPromoBuyClose = function(e) {
                        Object(v.a)(e, function() {
                            t.props.data && t.props.data.refetch()
                        })
                    }, t
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    if (this.props.loading) return s.createElement(N._18, {
                        "data-a-target": "get-bits-button-content-loading",
                        display: N.H.Flex,
                        flexDirection: N.J.Column,
                        alignItems: N.c.Center,
                        justifyContent: N.T.Center,
                        textAlign: N._23.Center,
                        padding: {
                            y: 5
                        }
                    }, s.createElement(N.Y, {
                        delay: 0
                    }), s.createElement(N.U, {
                        padding: {
                            top: 2
                        }
                    }, s.createElement(N._22, {
                        italic: !0
                    }, Object(l.d)("Fetching bits", "Bits--GetBitsButtonContent"))));
                    var e = null;
                    if (this.props.bitsOffers) {
                        var t = this.props.bitsOffers.find(function(e) {
                            return Object(_.c)(e)
                        });
                        t && t.type === E.b && this.props.channelID && !this.state.hideFirstTimeUserIntro && (e = s.createElement(C, {
                            promo: t,
                            animateFirstTimeUserIntro: this.props.animateFirstTimeUserIntro,
                            isShowingTutorial: this.props.isShowingTutorial,
                            toggleShowTutorial: this.props.toggleShowTutorial,
                            trackBitsCardInteraction: this.trackBitsCardInteraction,
                            channelID: this.props.channelID,
                            onPromoBuyClose: this.onPromoBuyClose
                        }))
                    }
                    var n = null;
                    void 0 !== this.props.bitsBalance && this.props.bitsConfig ? n = s.createElement(N._18, {
                        borderBottom: !0,
                        textAlign: N._23.Center,
                        fullWidth: !0,
                        padding: {
                            y: .5
                        }
                    }, s.createElement(N._22, {
                        type: N._27.Span
                    }, Object(l.d)("You have {bitsBalance}", {
                        bitsBalance: s.createElement(y.a, {
                            withImage: !0,
                            withText: !0,
                            count: this.props.bitsBalance,
                            bitsConfig: this.props.bitsConfig
                        })
                    }, "Bits--GetBitsButton"))) : void 0 === this.props.bitsBalance && this.props.bitsConfig && (n = s.createElement(N._18, {
                        borderBottom: !0,
                        textAlign: N._23.Center,
                        fullWidth: !0,
                        padding: {
                            y: .5
                        }
                    }, s.createElement(N._22, {
                        type: N._27.Span
                    }, Object(l.d)("{bitsGem} Log in to see your Bits balance", {
                        bitsGem: s.createElement(y.a, {
                            count: 100,
                            withImage: !0,
                            bitsConfig: this.props.bitsConfig
                        })
                    }, "Bits--GetBitsButton"))));
                    var i = null;
                    return this.props.bitsConfig && this.props.channelLogin && (i = s.createElement(k.a, {
                        bitsConfig: this.props.bitsConfig,
                        channelLogin: this.props.channelLogin,
                        closeAllBits: this.onClose,
                        onClose: this.onClose,
                        trackBitsCardInteraction: this.trackBitsCardInteraction,
                        location: S.b.GetBitsButton,
                        hidePromos: !0,
                        hideWateb: !0,
                        fullsize: !0
                    })), s.createElement(g.b, {
                        className: "get-bits-button-content"
                    }, s.createElement(N.U, null, n, e, i))
                }, t = a.__decorate([Object(w.c)("GetBitsButtonContent"), Object(m.a)(U, {
                    name: "data",
                    props: function(e) {
                        var t, n;
                        e.data && e.data.user && e.data.user.cheer && (t = Object(O.a)(e.data.user.cheer.emotes), n = e.data.user.id);
                        var i, a;
                        return e.data && e.data.currentUser ? (a = e.data.currentUser.bitsBalance, i = e.data.currentUser.bitsOffers) : e.data && e.data.bitsOffers && (i = e.data.bitsOffers), {
                            loading: e.data && e.data.loading,
                            bitsOffers: i,
                            bitsBalance: a,
                            bitsConfig: t,
                            channelID: n
                        }
                    },
                    skip: function(e) {
                        return !e.channelLogin
                    },
                    options: function(e) {
                        return {
                            variables: {
                                login: e.channelLogin,
                                withChannel: !!e.channelLogin,
                                isLoggedIn: e.isLoggedIn
                            }
                        }
                    }
                })], t)
            }(s.Component)),
            F = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        isShowingTutorial: !1,
                        animateFirstTimeUserIntro: !1
                    }, t.toggleBalloon = function(e) {
                        t.setState({
                            animateFirstTimeUserIntro: !1
                        }), e || Object(S.h)({
                            actionName: S.a.BuyMain,
                            location: S.b.GetBitsButton,
                            displayedBalance: 0
                        })
                    }, t.toggleShowTutorial = function() {
                        t.setState({
                            isShowingTutorial: !t.state.isShowingTutorial,
                            animateFirstTimeUserIntro: !0
                        })
                    }, t
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = null;
                    return this.props.channelLogin && (e = s.createElement(x, {
                        isLoggedIn: this.props.isLoggedIn,
                        channelLogin: this.props.channelLogin,
                        toggleShowTutorial: this.toggleShowTutorial,
                        isShowingTutorial: this.state.isShowingTutorial,
                        animateFirstTimeUserIntro: this.state.animateFirstTimeUserIntro
                    })), s.createElement(u.a, {
                        onToggle: this.toggleBalloon
                    }, s.createElement(N.u, {
                        dropdown: !0
                    }, Object(l.d)("Get Bits", "Bits--GetBitsButton")), s.createElement(N.p, {
                        direction: N.q.BottomRight,
                        size: N.r.Large
                    }, e))
                }, t = a.__decorate([Object(w.c)("GetBitsButton")], t)
            }(s.Component),
            T = Object(f.a)(function(e) {
                return {
                    isLoggedIn: Object(h.d)(e)
                }
            })(F),
            I = n("2KeS"),
            D = n("V5M+"),
            A = n("J8WN"),
            B = n("+8VM"),
            L = n("HZww"),
            R = (n("weaG"), function(e) {
                var t = {
                    "default-avatar__selected": e.selected,
                    "default-avatar": !0
                };
                return s.createElement(N.U, {
                    padding: {
                        bottom: 1
                    }
                }, s.createElement("div", {
                    onClick: function() {
                        e.onSelect(e.index)
                    },
                    "aria-label": Object(l.d)("Click to select Default Avatar Number {index, number}", {
                        index: e.index
                    }, "Default Avatar")
                }, s.createElement(N._18, {
                    border: !0,
                    fullHeight: !0,
                    fullWidth: !0,
                    position: N._3.Relative,
                    className: r(t)
                }, s.createElement("img", {
                    alt: Object(l.d)("Default Avatar Number {index, number}", {
                        index: e.index
                    }, "Default Avatar"),
                    src: e.imageSrc
                }))))
            });
        ! function(e) {
            e.ProfileImage = "profile_image", e.ProfileBanner = "profile_banner", e.ChannelOfflineImage = "channel_offline_image"
        }(i || (i = {}));
        var j;
        ! function(e) {
            e.Success = "SUCCESS", e.NonImage = "IS_IMAGE_VALIDATION_FAILED", e.WrongFormat = "IMAGE_FORMAT_VALIDATION_FAILED", e.BadSize = "FILE_SIZE_VALIDATION_FAILED"
        }(j || (j = {}));
        var P;
        ! function(e) {
            e[e.Success = 0] = "Success", e[e.UnexpectedError = 1] = "UnexpectedError", e[e.BadSizeError = 2] = "BadSizeError", e[e.NonImageError = 3] = "NonImageError", e[e.WrongFormatError = 4] = "WrongFormatError", e[e.TimeoutError = 5] = "TimeoutError", e[e.Uploading = 6] = "Uploading", e[e.ImageNotSelected = 7] = "ImageNotSelected"
        }(P || (P = {}));
        n("AL3x");
        var H = n("nmDn"),
            M = [{
                id: "profile_image_001",
                uri: "https://static-cdn.jtvnw.net/user-default-pictures/bb97f7e6-f11a-4194-9708-52bf5a5125e8-profile_image-300x300.jpg"
            }, {
                id: "profile_image_002",
                uri: "https://static-cdn.jtvnw.net/user-default-pictures/27103734-3cda-44d6-a384-f2ab71e4bb85-profile_image-300x300.jpg"
            }, {
                id: "profile_image_003",
                uri: "https://static-cdn.jtvnw.net/user-default-pictures/49988c7b-57bc-4dee-bd4f-6df4ad215d3a-profile_image-300x300.jpg"
            }, {
                id: "profile_image_004",
                uri: "https://static-cdn.jtvnw.net/user-default-pictures/0ecbb6c3-fecb-4016-8115-aa467b7c36ed-profile_image-300x300.jpg"
            }, {
                id: "profile_image_005",
                uri: "https://static-cdn.jtvnw.net/user-default-pictures/cd618d3e-f14d-4960-b7cf-094231b04735-profile_image-300x300.jpg"
            }, {
                id: "profile_image_006",
                uri: "https://static-cdn.jtvnw.net/user-default-pictures/4cbf10f1-bb9f-4f57-90e1-15bf06cfe6f5-profile_image-300x300.jpg"
            }, {
                id: "profile_image_007",
                uri: "https://static-cdn.jtvnw.net/user-default-pictures/b83b1794-7df9-4878-916c-88c2ad2e4f9f-profile_image-300x300.jpg"
            }],
            W = ["image/*"],
            V = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        statusMessage: null,
                        imagePreviewURL: "",
                        profileUpdated: !1,
                        currentImageHasTallAspectRatio: !1,
                        imageFormat: ""
                    }, t.currentImage = null, t.logger = l.i.withCategory("ProfileImagePicker"), t.onImageInputChange = function(e) {
                        var n;
                        if (null !== e) {
                            var i = function(e) {
                                    var t = "";
                                    if (e && e.name) {
                                        var n = e.name;
                                        t = n.slice((Math.max(0, n.lastIndexOf(".")) || 1 / 0) + 1)
                                    }
                                    return "" === t && (t = "png"), t
                                }(n = e[0]),
                                a = (n.size / 1024 / 1024).toFixed(4);
                            parseInt(a, 10) > 10 ? t.setState({
                                statusMessage: P.BadSizeError
                            }) : (t.setState({
                                selectedImageIndex: void 0,
                                imagePreviewURL: "",
                                imageFormat: "",
                                currentImageHasTallAspectRatio: !1
                            }), function(e, t, n) {
                                var i = new FileReader;
                                i.onloadend = function() {
                                    n && n(i.result)
                                }, i.readAsDataURL(e);
                                var a = new FileReader;
                                a.onloadend = function() {
                                    t(a.result)
                                }, a.readAsArrayBuffer(e)
                            }(n, function(e) {
                                t.currentImage = e, t.setState({
                                    statusMessage: null
                                })
                            }, function(e) {
                                var n = new Image,
                                    a = !1;
                                n.onload = function() {
                                    n.width < n.height && (a = !0), t.setState({
                                        currentImageHasTallAspectRatio: a
                                    })
                                }, n.src = e, t.setState({
                                    imagePreviewURL: e,
                                    imageFormat: i
                                })
                            }))
                        } else t.setState({
                            statusMessage: P.ImageNotSelected
                        })
                    }, t.onUpdateButtonClick = function(e) {
                        return a.__awaiter(t, void 0, void 0, function() {
                            var t, n, r, s, o = this;
                            return a.__generator(this, function(c) {
                                switch (c.label) {
                                    case 0:
                                        if (e.preventDefault(), void 0 !== this.state.selectedImageIndex) return this.setDefaultAvatar(), [2];
                                        if (!this.currentImage) return this.setState({
                                            statusMessage: P.ImageNotSelected
                                        }), [2];
                                        this.setState({
                                            statusMessage: P.Uploading
                                        }), c.label = 1;
                                    case 1:
                                        return c.trys.push([1, 3, , 4]), [4, function(e, t, n, i) {
                                            return a.__awaiter(this, void 0, void 0, function() {
                                                var r;
                                                return a.__generator(this, function(a) {
                                                    switch (a.label) {
                                                        case 0:
                                                            return [4, fetch(l.a.krakenEndpoint + "/users/" + e + "/upload_image?client_id=" + l.a.authClientID + "&api_version=" + l.a.defaultAPIVersion + "&image_type=" + n + "&format=" + i, {
                                                                method: "POST",
                                                                headers: {
                                                                    Authorization: "OAuth " + t
                                                                }
                                                            })];
                                                        case 1:
                                                            return r = a.sent(), [2, r.json()]
                                                    }
                                                })
                                            })
                                        }(this.props.userID, this.props.authToken, i.ProfileImage, this.state.imageFormat)];
                                    case 2:
                                        return t = c.sent(), n = t.upload_url, r = t.upload_id, [3, 4];
                                    case 3:
                                        return s = c.sent(), this.logger.error(s, "Request for upload ID failed to get expected response from server."), this.setState({
                                            statusMessage: P.UnexpectedError
                                        }), [2];
                                    case 4:
                                        return this.unsubscribe = l.j.subscribe({
                                            topic: Object(L.c)(this.props.userID),
                                            success: function() {
                                                try {
                                                    ! function(e, t) {
                                                        if (!t) throw new Error("Attempted to upload an empty file object.");
                                                        var n = decodeURI(e);
                                                        fetch(n, {
                                                            method: "PUT",
                                                            body: new Blob([t])
                                                        })
                                                    }(n, o.currentImage)
                                                } catch (e) {
                                                    o.logger.error(e, "Profile Image upload failed."), o.unsubscribe(), o.setState({
                                                        statusMessage: P.UnexpectedError,
                                                        selectedImageIndex: void 0,
                                                        imagePreviewURL: "",
                                                        imageFormat: "",
                                                        currentImageHasTallAspectRatio: !1
                                                    })
                                                }
                                                o.timeoutHandle = setTimeout(function() {
                                                    return o.handlePubSubTimeout()
                                                }, 1e4)
                                            },
                                            failure: function() {
                                                o.setState({
                                                    statusMessage: P.UnexpectedError,
                                                    selectedImageIndex: void 0,
                                                    imagePreviewURL: "",
                                                    currentImageHasTallAspectRatio: !1
                                                })
                                            },
                                            onMessage: function(e) {
                                                if (e.upload_id === r) {
                                                    clearTimeout(o.timeoutHandle);
                                                    var t = null;
                                                    t = e.status === j.Success ? P.Success : e.status === j.BadSize ? P.BadSizeError : e.status === j.NonImage ? P.NonImageError : e.status === j.WrongFormat ? P.WrongFormatError : P.UnexpectedError, o.unsubscribe && o.unsubscribe(), o.setState({
                                                        statusMessage: t
                                                    }), o.state.statusMessage === P.Success ? o.setState({
                                                        profileUpdated: !0
                                                    }) : (o.setState({
                                                        profileUpdated: !1,
                                                        imagePreviewURL: "",
                                                        imageFormat: ""
                                                    }), o.currentImage = null)
                                                }
                                            }
                                        }), [2]
                                }
                            })
                        })
                    }, t.onDefaultImageSelected = function(e) {
                        t.setState({
                            selectedImageIndex: e,
                            imagePreviewURL: M[e].uri
                        })
                    }, t.handlePubSubTimeout = function() {
                        t.unsubscribe(), t.setState({
                            statusMessage: P.TimeoutError
                        })
                    }, t
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.componentWillUnmount = function() {
                    void 0 !== this.unsubscribe && this.unsubscribe(), this.timeoutHandle && clearTimeout(this.timeoutHandle)
                }, t.prototype.componentDidUpdate = function() {
                    var e = this;
                    this.state.profileUpdated && setTimeout(function() {
                        e.props.data && e.props.data.refetch(), e.props.closeModal()
                    }, 1e3)
                }, t.prototype.render = function() {
                    var e = this,
                        t = M.map(function(t, n) {
                            return s.createElement(R, {
                                key: t.id,
                                imageSrc: t.uri,
                                index: n,
                                onSelect: e.onDefaultImageSelected,
                                selected: e.state.selectedImageIndex === n
                            })
                        }),
                        n = null;
                    if ("" !== this.state.imagePreviewURL) {
                        var i = {
                            "profile-edit__image-preview": !0,
                            "profile-edit__image-preview-tall": this.state.currentImageHasTallAspectRatio
                        };
                        n = s.createElement(N.U, {
                            className: r(i),
                            "data-test-selector": "preview-image",
                            position: N._3.Relative
                        }, s.createElement("img", {
                            src: "" + this.state.imagePreviewURL
                        }))
                    }
                    var a = null;
                    "" === this.state.imagePreviewURL && (a = s.createElement(N.U, {
                        className: "profile-edit__upload-info"
                    }, s.createElement(N.U, null, s.createElement(N._9, {
                        asset: N._10.Plus,
                        type: N._11.Alt2,
                        height: 20,
                        width: 20
                    })), s.createElement(N._22, {
                        type: N._27.H3,
                        color: N.F.Alt2,
                        fontSize: N.L.Size4
                    }, Object(l.d)("Upload a Photo", "Profile Edit"))));
                    var o = null;
                    this.props.showCloser && (o = s.createElement(B.a, null));
                    var c = null;
                    if (null !== this.state.statusMessage) {
                        var d = function(e) {
                                switch (e) {
                                    case P.Success:
                                        return {
                                            message: Object(l.d)("Success!", "Profile Edit"),
                                            type: N._1.Success
                                        };
                                    case P.UnexpectedError:
                                        return {
                                            message: Object(l.d)("Unexpected error, please try again.", "Profile Edit"),
                                            type: N._1.Alert
                                        };
                                    case P.BadSizeError:
                                        return {
                                            message: Object(l.d)("Image might exceed 10MB.", "Profile Edit"),
                                            type: N._1.Alert
                                        };
                                    case P.NonImageError:
                                        return {
                                            message: Object(l.d)("You must upload an image.", "Profile Edit"),
                                            type: N._1.Alert
                                        };
                                    case P.WrongFormatError:
                                        return {
                                            message: Object(l.d)("You must select a valid image type.", "Profile Edit"),
                                            type: N._1.Alert
                                        };
                                    case P.TimeoutError:
                                        return {
                                            message: Object(l.d)("Upload timed-out. Please try again.", "Profile Edit"),
                                            type: N._1.Alert
                                        };
                                    case P.Uploading:
                                        return {
                                            message: Object(l.d)("Uploading....", "Profile Edit"),
                                            type: N._1.Brand
                                        };
                                    case P.ImageNotSelected:
                                        return {
                                            message: Object(l.d)("Select a image first.", "Profile Edit"),
                                            type: N._1.Alert
                                        };
                                    default:
                                        return {
                                            message: Object(l.d)("Please try again.", "Profile Edit"),
                                            type: N._1.Alert
                                        }
                                }
                            }(this.state.statusMessage),
                            u = d.message,
                            m = d.type;
                        c = s.createElement(N._0, {
                            label: u,
                            type: m
                        })
                    }
                    var p = this.props.login;
                    return this.props.displayName && (p = this.props.displayName), s.createElement(N.U, {
                        className: "profile-edit",
                        position: N._3.Relative,
                        fullHeight: !0
                    }, s.createElement(N._18, {
                        className: "profile-edit__background-container",
                        background: N.m.Base,
                        fullWidth: !0
                    }, s.createElement(N.U, {
                        padding: 2,
                        display: N.H.InlineBlock,
                        position: N._3.Relative,
                        textAlign: N._23.Center,
                        fullWidth: !0
                    }, s.createElement(N._18, {
                        borderBottom: !0,
                        padding: {
                            bottom: 2
                        },
                        margin: {
                            bottom: 2
                        }
                    }, s.createElement(N._22, {
                        type: N._27.H3,
                        fontSize: N.L.Size4
                    }, Object(l.d)("Editing profile picture for {userName}", {
                        userName: p
                    }, "Profile Edit"), " ")), s.createElement(N.U, {
                        className: "profile-edit__upload-container",
                        display: N.H.InlineBlock,
                        position: N._3.Relative,
                        textAlign: N._23.Center,
                        margin: {
                            bottom: 1
                        }
                    }, s.createElement(N.U, {
                        className: "profile-edit__upload",
                        display: N.H.InlineBlock,
                        position: N._3.Relative,
                        textAlign: N._23.Center
                    }, s.createElement(A.a, {
                        allowedFileTypes: W,
                        onFilesSubmitted: this.onImageInputChange
                    }, a), n)), s.createElement(N._18, {
                        "data-test-selector": "status-message",
                        fontSize: N.L.Size4,
                        position: N._3.Relative,
                        textAlign: N._23.Center,
                        className: "profile-edit__status-message"
                    }, c), s.createElement(N._18, {
                        borderBottom: !0,
                        padding: {
                            bottom: .5
                        },
                        margin: {
                            bottom: 2
                        }
                    }, s.createElement(N.U, {
                        margin: {
                            bottom: 1
                        }
                    }, s.createElement(N._22, {
                        type: N._27.H3,
                        fontSize: N.L.Size5
                    }, Object(l.d)("Or select one of these", "Profile Edit"))), s.createElement(N._33, {
                        childWidth: N._34.ExtraSmall,
                        gutterSize: N._35.ExtraSmall,
                        placeholderItems: 3
                    }, t)), s.createElement(N.U, {
                        display: N.H.Flex,
                        justifyContent: N.T.Center
                    }, s.createElement(N.u, {
                        "data-test-selector": "update-button",
                        onClick: this.onUpdateButtonClick
                    }, Object(l.d)("Update", "Profile Edit"))))), o)
                }, t.prototype.setDefaultAvatar = function() {
                    return a.__awaiter(this, void 0, void 0, function() {
                        var e, t, n;
                        return a.__generator(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    this.setState({
                                        statusMessage: P.Uploading
                                    }), e = P.UnexpectedError, i.label = 1;
                                case 1:
                                    return i.trys.push([1, 3, , 4]), [4, function(e, t, n) {
                                        if (void 0 === n) throw new Error("No default avatar selected.");
                                        return fetch(l.a.krakenEndpoint + "/users/" + e + "/default_images?client_id=" + l.a.authClientID + "&api_version=" + l.a.defaultAPIVersion, {
                                            method: "PUT",
                                            headers: {
                                                Authorization: "OAuth " + t,
                                                "Content-Type": "application/json",
                                                Accept: "application/json"
                                            },
                                            body: JSON.stringify({
                                                default_profile_image: M[n].id
                                            })
                                        })
                                    }(this.props.userID, this.props.authToken, this.state.selectedImageIndex)];
                                case 2:
                                    return 204 === (t = i.sent()).status || 200 === t.status ? e = P.Success : this.logger.error(new Error("Default Avatar PUT failed. Fetch returned non-200 status: " + t.status), "Default Avatar PUT failed. Fetch returned non-200 status: " + t.status), [3, 4];
                                case 3:
                                    return n = i.sent(), this.logger.error(n, "Default Avatar PUT failed."), [3, 4];
                                case 4:
                                    return this.setState({
                                        statusMessage: e,
                                        profileUpdated: e === P.Success
                                    }), [2]
                            }
                        })
                    })
                }, t = a.__decorate([Object(m.a)(H, {
                    options: function(e) {
                        return {
                            variables: {
                                login: e.login
                            }
                        }
                    }
                })], t)
            }(s.Component),
            q = Object(w.c)("Profile Edit")(V),
            G = Object(f.a)(function(e) {
                return {
                    authToken: Object(h.a)(e)
                }
            }, function(e, t) {
                return Object(I.bindActionCreators)({
                    closeModal: function() {
                        return t.successCallback && t.successCallback(), Object(D.c)()
                    }
                }, e)
            })(q),
            z = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.openModal = function() {
                        t.props.showModal(G, {
                            userID: t.props.userID,
                            login: t.props.login,
                            displayName: t.props.displayName,
                            showCloser: !0
                        })
                    }, t
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return s.createElement(N.v, {
                        overlay: !0,
                        size: N.x.Large,
                        ariaLabel: Object(l.d)("Edit Profile", "ChannelHeader"),
                        icon: N._10.Edit,
                        onClick: this.openModal
                    })
                }, t = a.__decorate([Object(w.c)("EditProfileOverlay")], t)
            }(s.Component),
            K = Object(f.a)(null, function(e) {
                return Object(I.bindActionCreators)({
                    showModal: D.d
                }, e)
            })(z),
            Q = n("70dR"),
            $ = (n("z4Db"), n("kOMe"));
        n.d(t, "b", function() {
            return J
        }), n.d(t, "a", function() {
            return X
        });
        var J, Y = "channel-header__verified-badge",
            Z = "channel-header__live-indicator";
        ! function(e) {
            e[e.Channel = 1] = "Channel", e[e.Clips = 2] = "Clips", e[e.Collections = 3] = "Collections", e[e.Events = 4] = "Events", e[e.Success = 5] = "Success", e[e.Followers = 6] = "Followers", e[e.Following = 7] = "Following", e[e.Videos = 8] = "Videos"
        }(J || (J = {}));
        var X = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.state = {
                    live: !1
                }, t.verifiedBadgeElement = s.createElement(N._30, {
                    label: Object(l.d)("Verified", "ChannelHeader"),
                    direction: N._32.Right
                }, s.createElement(N.U, {
                    className: "channel-header__verified",
                    "data-target": Y,
                    display: N.H.Flex,
                    alignItems: N.c.Center,
                    margin: {
                        left: 1
                    }
                }, s.createElement(N._9, {
                    asset: N._10.Verified
                }))), t.liveIndicatorElement = s.createElement(N.U, {
                    margin: {
                        left: 1
                    },
                    "data-target": Z
                }, s.createElement(N._30, {
                    label: Object(l.d)("Live Now", "ChannelHeader"),
                    direction: N._32.Right
                }, s.createElement(N.W, {
                    pulse: !0
                }))), t.renderAvatarEditButton = function() {
                    if (!t.props.data) return null;
                    return t.props.data && t.props.data.currentUser && t.props.data.user && t.props.data.currentUser.roles && (t.props.data.currentUser.id === t.props.data.user.id || t.props.data.currentUser.roles.isStaff || t.props.data.currentUser.roles.isSiteAdmin) ? s.createElement(N._18, {
                        className: "channel-header__edit-profile-overlay",
                        background: N.m.Overlay,
                        position: N._3.Absolute,
                        attachTop: !0,
                        attachLeft: !0,
                        fullHeight: !0,
                        fullWidth: !0,
                        display: N.H.InlineFlex,
                        alignItems: N.c.Center,
                        justifyContent: N.T.Center
                    }, s.createElement(K, {
                        userID: t.props.data.user.id,
                        login: t.props.data.user.login,
                        displayName: t.props.data.user.displayName
                    })) : null
                }, t.onUpdateDebounce = function() {
                    if (!t.resizeAnimationFrame && t.channelHeader) {
                        var e = t.channelHeader.querySelector('[data-target="channel-header-left"]');
                        t.updateWidth(t.getWidth(e).width), t.resizeAnimationFrame = requestAnimationFrame(t.handleWindowResize)
                    }
                }, t.handleWindowResize = function() {
                    t.resizeAnimationFrame = null, t.getChannelHeaderSize()
                }, t.saveChannelHeaderRef = function(e) {
                    return t.channelHeader = e
                }, t
            }
            return a.__extends(t, e), t.prototype.componentWillMount = function() {
                this.updateLiveState(this.props)
            }, t.prototype.componentDidMount = function() {
                window.addEventListener("resize", this.onUpdateDebounce), !this.props.data || this.props.data.loading || this.props.data.error || this.getChannelHeaderSize(), this.reportInteractive()
            }, t.prototype.componentWillReceiveProps = function(e) {
                this.updateLiveState(e)
            }, t.prototype.componentDidUpdate = function() {
                this.channelHeader && this.updateWidth(this.getWidth(this.channelHeader.querySelector('[data-target="channel-header-left"]')).width), this.onUpdateDebounce(), this.reportInteractive()
            }, t.prototype.componentWillUnmount = function() {
                this.resizeAnimationFrame && cancelAnimationFrame(this.resizeAnimationFrame), window.removeEventListener("resize", this.onUpdateDebounce), this.props.latencyTracking.reportInteractive()
            }, t.prototype.updateWidth = function(e) {
                var t = e !== this.width || this.width !== this.prevWidth;
                void 0 !== this.width && (this.prevWidth = this.width), this.width !== e && (this.width = e), t && (this.resizeAnimationFrame && (cancelAnimationFrame(this.resizeAnimationFrame), this.resizeAnimationFrame = null), this.onUpdateDebounce())
            }, t.prototype.render = function() {
                var e, t, n = 0,
                    i = 0,
                    a = 0,
                    m = l.a.defaultAvatarURL;
                this.props.data && this.props.data.user && !this.props.data.loading && !this.props.data.error && (n = this.props.data.user.videos.totalCount, i = this.props.data.user.followers.totalCount, a = this.props.data.user.follows.totalCount, m = this.props.data.user.profileImageURL, e = this.props.data.user.displayName, t = this.props.data.user.roles.isPartner);
                var p = this.state.live && J[this.props.currentPage] !== J[J.Channel],
                    f = this.createChannelLinks(n, i, a),
                    h = {
                        "channel-header__user": !0,
                        "channel-header__user--selected": J[this.props.currentPage] === J[J.Channel]
                    },
                    g = null;
                this.canRenderBitsButton() && (g = s.createElement(N.U, {
                    margin: {
                        left: 1
                    }
                }, s.createElement(T, {
                    channelLogin: this.props.channelLogin
                })));
                var v, y = s.createElement(N.U, {
                    display: N.H.Flex,
                    flexWrap: N.K.NoWrap,
                    alignItems: N.c.Center,
                    flexShrink: 0
                }, s.createElement(N.U, {
                    className: "channel-header__user-avatar channel-header__user-avatar--active",
                    margin: {
                        right: 1
                    },
                    display: N.H.Flex,
                    flexShrink: 0,
                    alignItems: N.c.Stretch
                }, s.createElement(N.U, {
                    position: N._3.Relative
                }, s.createElement(N.l, {
                    size: 36,
                    imageSrc: m,
                    imageAlt: e || ""
                }), this.renderAvatarEditButton())), e ? s.createElement(N._22, {
                    type: N._27.H5
                }, e) : s.createElement(N.U, {
                    alignItems: N.c.Center
                }, s.createElement(N._2, {
                    lineCount: 1,
                    width: 120
                })), p && this.liveIndicatorElement, t && this.verifiedBadgeElement);
                return v = this.props.data && this.props.data.user && this.props.data.user.login ? s.createElement(o.a, {
                    to: "/" + this.props.data.user.login,
                    "data-target": "channel-header__channel-link",
                    "data-a-target": "user-channel-header-item"
                }, y) : y, s.createElement(N.U, {
                    className: "channel-header",
                    flexShrink: 0,
                    padding: {
                        x: 3
                    }
                }, s.createElement(N.U, {
                    display: N.H.Flex,
                    justifyContent: N.T.Between,
                    flexWrap: N.K.NoWrap,
                    fullHeight: !0,
                    refDelegate: this.saveChannelHeaderRef
                }, s.createElement(N.U, {
                    display: N.H.Flex,
                    alignItems: N.c.Stretch,
                    flexShrink: 0,
                    flexWrap: N.K.NoWrap,
                    "data-target": "channel-header-left"
                }, s.createElement(N.P, {
                    className: r(h),
                    padding: {
                        y: .5,
                        right: 2
                    },
                    display: N.H.Flex,
                    flexWrap: N.K.NoWrap,
                    alignItems: N.c.Center,
                    flexShrink: 0
                }, v), this.renderTabs(f), s.createElement(N.U, {
                    className: "channel-header__item channel-header__item--no-underline",
                    padding: {
                        x: 1
                    },
                    flexShrink: 0,
                    alignSelf: N.d.Center,
                    "data-target": "channel-header-button"
                }, s.createElement(u.a, {
                    alwaysMountBalloonContent: !0
                }, s.createElement(N.v, {
                    icon: N._10.NavMore,
                    ariaLabel: Object(l.d)("More", "ChannelHeader")
                }), s.createElement(N.p, {
                    direction: N.q.Bottom,
                    noTail: !0
                }, s.createElement(N.U, {
                    padding: {
                        y: 1
                    }
                }, this.renderDropdown(f)))))), s.createElement(N.U, {
                    display: N.H.Flex,
                    flexWrap: N.K.NoWrap,
                    flexShrink: 0,
                    alignItems: N.c.Center,
                    className: "channel-header__right",
                    "data-target": "channel-header-right"
                }, s.createElement(N.U, {
                    className: "channel-header__follow-button",
                    display: N.H.Flex,
                    alignItems: N.c.Stretch,
                    margin: {
                        left: 1
                    }
                }, s.createElement(c.a, {
                    updateContainerWidth: this.onUpdateDebounce,
                    isHostedFollow: !1,
                    channelLogin: this.props.channelLogin
                })), s.createElement(N.U, {
                    margin: {
                        left: 1
                    }
                }, s.createElement(Q.b, {
                    updateContainerWidth: this.onUpdateDebounce,
                    channelLogin: this.props.channelLogin
                })), g)), s.createElement(d.a, {
                    onResize: this.onUpdateDebounce
                }))
            }, t.prototype.updateLiveState = function(e) {
                !e.data || e.data.loading || e.data.error || this.setState({
                    live: !!e.data.user.stream && "" !== e.data.user.stream.id
                })
            }, t.prototype.generateUserLink = function(e, t) {
                void 0 === e && (e = ""), void 0 === t && (t = !1);
                var n = this.props.data && this.props.data.user && this.props.data.user.login;
                if (!n) return "#";
                var i = "/" + n + "/" + e;
                return t ? Object(p.a)(i) : i
            }, t.prototype.renderTabs = function(e) {
                var t = this;
                return e.map(function(e) {
                    var n = e.count ? s.createElement(N.U, {
                            className: "channel-header__item-count",
                            display: N.H.Flex,
                            margin: {
                                left: .5
                            }
                        }, s.createElement(N._22, {
                            type: N._27.Span,
                            fontSize: N.L.Size5
                        }, e.count)) : null,
                        i = t.generateUserLink(e.pathSuffix, e.isExternal),
                        r = {};
                    return e.isExternal && (r.target = Object(p.b)() ? "_blank" : ""), s.createElement(N.P, {
                        key: "channel-header__item--" + e.label,
                        alignItems: N.c.Center,
                        flexShrink: 0
                    }, s.createElement(o.a, a.__assign({
                        className: "channel-header__item channel-header__item--hide " + (e.isSelected ? "channel-header__item--selected" : "")
                    }, r, {
                        to: i,
                        disabled: "#" === i,
                        "data-target": "channel-header-item",
                        "data-a-target": e.label.toLowerCase() + "-channel-header-item"
                    }), s.createElement(N.U, {
                        padding: {
                            x: 2,
                            y: .5
                        },
                        display: N.H.Flex
                    }, s.createElement(N._22, {
                        type: N._27.Span,
                        fontSize: N.L.Size5
                    }, e.label), n)))
                })
            }, t.prototype.renderDropdown = function(e) {
                var t = this;
                return e.map(function(e) {
                    var n = e.count ? s.createElement(N.U, {
                            className: "channel-header__item-count",
                            display: N.H.Flex,
                            margin: {
                                left: .5
                            }
                        }, s.createElement(N._22, {
                            type: N._27.Span
                        }, e.count)) : null,
                        i = t.generateUserLink(e.pathSuffix, e.isExternal),
                        r = {};
                    return e.isExternal && (r.targetBlank = !0), s.createElement(N.U, {
                        key: "channel-header__dropdown-item--" + e.label,
                        "data-target": "channel-header-dropdown-item"
                    }, s.createElement(N.S, a.__assign({
                        linkTo: i,
                        disabled: "#" === i
                    }, r), s.createElement(N.U, {
                        className: "channel-header__dropdown-hover-target",
                        padding: {
                            y: .5,
                            x: 1
                        },
                        display: N.H.Flex
                    }, s.createElement(N._22, {
                        type: N._27.Span
                    }, e.label), n)))
                })
            }, t.prototype.createChannelLinks = function(e, t, n) {
                return [{
                    label: Object(l.d)("Videos", "ChannelHeader"),
                    count: Object(l.e)(e),
                    pathSuffix: "videos/all",
                    isExternal: !1,
                    isSelected: J[this.props.currentPage] === J[J.Videos]
                }, {
                    label: Object(l.d)("Clips", "ChannelHeader"),
                    pathSuffix: "clips",
                    isExternal: !1,
                    isSelected: J[this.props.currentPage] === J[J.Clips]
                }, {
                    label: Object(l.d)("Collections", "ChannelHeader"),
                    pathSuffix: "collections",
                    isExternal: !1,
                    isSelected: J[this.props.currentPage] === J[J.Collections]
                }, {
                    label: Object(l.d)("Events", "ChannelHeader"),
                    pathSuffix: "events",
                    isExternal: !1,
                    isSelected: J[this.props.currentPage] === J[J.Events]
                }, {
                    label: Object(l.d)("Followers", "ChannelHeader"),
                    count: Object(l.e)(t),
                    pathSuffix: "followers",
                    isExternal: !0,
                    isSelected: J[this.props.currentPage] === J[J.Followers]
                }, {
                    label: Object(l.d)("Following", "ChannelHeader"),
                    count: Object(l.e)(n),
                    pathSuffix: "following",
                    isExternal: !0,
                    isSelected: J[this.props.currentPage] === J[J.Following]
                }]
            }, t.prototype.getChannelHeaderSize = function() {
                if (this.channelHeader) {
                    var e = this.channelHeader.querySelector('[data-target="channel-header-left"]'),
                        t = this.channelHeader.querySelector('[data-target="channel-header-right"]'),
                        n = this.channelHeader.querySelectorAll('[data-target="channel-header-item"]'),
                        i = this.channelHeader.querySelectorAll('[data-target="channel-header-dropdown-item"]');
                    if (n.length) {
                        var a = this.getWidth(this.channelHeader).width,
                            r = this.getWidth(e).width + this.getWidth(t).width + 20 - a;
                        if (r > 0)
                            for (var s = n.length - 1; s >= 0; s--) {
                                if (!(l = n[s]).classList.contains("channel-header__item--hide")) {
                                    var o = this.getWidth(l);
                                    if (l.classList.add("channel-header__item--hide"), i[s].classList.remove("channel-header__item--hide"), (r -= o.width) <= 0) break
                                }
                            } else
                                for (s = 0; s < n.length; s++) {
                                    var l;
                                    if ((l = n[s]).classList.contains("channel-header__item--hide")) {
                                        l.classList.remove("channel-header__item--hide");
                                        if ((o = this.getWidth(l)).width >= Math.abs(r)) {
                                            l.classList.add("channel-header__item--hide");
                                            break
                                        }
                                        l.classList.remove("channel-header__item--hide"), i[s].classList.add("channel-header__item--hide"), r += o.width
                                    }
                                }
                        var c = this.channelHeader.querySelector('[data-target="channel-header-button"]');
                        if (c) {
                            var d = !this.channelHeader.querySelectorAll('[data-target="channel-header-item"].channel-header__item--hide').length;
                            c.classList.toggle("channel-header__item--hide", d)
                        }
                    }
                }
            }, t.prototype.canRenderBitsButton = function() {
                return this.props.data && !this.props.data.loading && this.props.currentPage !== J.Clips && this.props.data.currentUser && this.props.data.user && this.props.data.user.cheer
            }, t.prototype.getWidth = function(e) {
                return e ? {
                    width: e.clientWidth
                } : {
                    width: 0
                }
            }, t.prototype.reportInteractive = function() {
                !this.props.data || this.props.data.loading || this.props.data.error || this.props.latencyTracking.reportInteractive()
            }, t = a.__decorate([Object(m.a)($, {
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
            }), Object(w.c)("ChannelHeader")], t)
        }(s.Component)
    },
    U3i2: function(e, t, n) {
        "use strict";

        function i(e, t) {
            var n = {},
                i = function(e) {
                    var t = e.actions.filter(function(e) {
                        return "click" === e.type
                    });
                    return t.length > 0 ? t[0].url : ""
                }(e);
            if (!i) return n;
            var a;
            try {
                a = new URL(i)
            } catch (t) {
                return m.i.error(t.toString(), i + " was malformed from notification id:[" + e.id + "]"), n
            }
            return ! function(e, t) {
                if (U.has(e)) return !1;
                return "https://www.twitch.tv" === t.origin
            }(e.type, a) ? (n.linkTo = function(e, t, n) {
                var i = e.split("?");
                if (1 === i.length) return e + "?tt_content=" + t + "&tt_medium=" + n;
                var a = d.parse(i[1]);
                return a.tt_content = a.tt_content ? a.tt_content : t, a.tt_medium = a.tt_medium ? a.tt_medium : n, [i[0], d.stringify(a, {
                    encode: !1
                })].join("?")
            }(a.toString(), e.type, t), n.targetBlank = !0) : n.linkTo = {
                pathname: a.pathname,
                search: a.search,
                state: {
                    content: e.type,
                    medium: t
                }
            }, n
        }

        function a(e, t) {
            return {
                id: e.id,
                body: e.body_md,
                type: e.type,
                thumbnailURL: e.thumbnail_url,
                createdAt: e.created_at,
                updatedAt: e.updated_at,
                isRead: e.read,
                actions: e.actions.map(function(e) {
                    return {
                        body: e.body,
                        type: e.type,
                        url: e.url,
                        __typename: "OnsiteNotificationAction"
                    }
                }),
                isTransient: !t,
                __typename: "OnsiteNotification"
            }
        }

        function r(e, t) {
            return ne.debug("Received pubsub summary update", e), t && t.currentUser && t.currentUser.notifications && t.currentUser.notifications.summary && e.data.summary ? (t.currentUser.notifications.summary.lastSeenAt = e.data.summary.last_seen_at, t.currentUser.notifications.summary.unseenCount = e.data.summary.unseen_view_count, t) : t
        }

        function s(e, t) {
            if (ne.debug("Received pubsub notification update", e), !(t && t.currentUser && t.currentUser.notifications && t.currentUser.notifications.edges && t.currentUser.notifications.edges)) return t;
            if (function(e) {
                    return e.type === v.c.OnsiteNotificationsRead
                }(e)) {
                var n = new Set(e.data.notification_ids),
                    i = t.currentUser.notifications.edges.map(function(e) {
                        return n.has(e.node.id) ? c.__assign({}, e, {
                            node: c.__assign({}, e.node, {
                                isRead: !0
                            })
                        }) : e
                    });
                t.currentUser.notifications.edges = i
            } else if (function(e) {
                    return e.type === v.c.OnsiteNotificationCreate || e.type === v.c.OnsiteNotificationUpdate
                }(e)) {
                if (e.data.persistent) {
                    var r = a(e.data.notification, !0);
                    (i = o(t.currentUser.notifications.edges, r.id)).unshift({
                        cursor: null,
                        node: r,
                        __typename: "OnsiteNotificationEdge"
                    }), t.currentUser.notifications.edges = i
                }
            } else(function(e) {
                return e.type === v.c.OnsiteNotificationDelete
            })(e) && (t.currentUser.notifications.edges = o(t.currentUser.notifications.edges, e.data.notification_id));
            return t
        }

        function o(e, t) {
            return e.filter(function(e) {
                return e.node.id !== t
            })
        }
        var l, c = n("TToO"),
            d = n("OAwv"),
            u = n("U7vG"),
            m = n("6sO2"),
            p = n("+Znq"),
            f = n("7vx8"),
            h = n("WIs4"),
            g = n("Ejve"),
            v = n("C8Io"),
            y = n("oIkB"),
            k = n("HZww"),
            b = n("CSlQ"),
            _ = n("zCIC"),
            S = n("BhyV"),
            N = n("gIPD"),
            C = n.n(N),
            E = n("KSGD"),
            O = n("lfvs"),
            w = n("vH/s"),
            U = new Set(["affiliateinvite", "feedcomment", "friendrequests", "partneragreementupdate", "partnerinvite"]),
            x = {
                Center: "center",
                Toast: "toast",
                Browser: "browser"
            },
            F = {
                Open: "open",
                Close: "close",
                MarkAllRead: "mark_all_read"
            },
            T = {
                PrimaryCta: "primary_cta",
                Dismiss: "dismiss"
            },
            I = function(e) {
                var t = {
                    notification_id: e.notification.id,
                    notification_type: e.notification.type,
                    ui_context: e.uiContext
                };
                m.m.track(w.SpadeEventType.NotificationImpression, t)
            },
            D = function(e) {
                var t = {
                    unseen_view_count: e.unseenCount,
                    action: e.action
                };
                m.m.track(w.SpadeEventType.NotificationCenterInteraction, t)
            },
            A = function(e) {
                var t = {
                    notification_id: e.notification.id,
                    notification_type: e.notification.type,
                    ui_context: e.uiContext,
                    action: e.action
                };
                m.m.track(w.SpadeEventType.NotificationInteraction, t)
            },
            B = n("Odds"),
            L = (n("UW/+"), "persistent-notification__delete"),
            R = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.impressionEventFired = !1, t.isVisible = function(e) {
                        if (null !== t.element) {
                            var n = t.element.getBoundingClientRect();
                            return n.top < e.bottom && n.bottom > e.top
                        }
                        return !1
                    }, t.setRef = function(e) {
                        return t.element = e
                    }, t.deleteNotification = function() {
                        A({
                            uiContext: x.Center,
                            notification: t.props.data,
                            action: T.Dismiss
                        }), t.props.onDeleteNotification(t.props.data.id)
                    }, t.clickNotification = function() {
                        A({
                            uiContext: x.Center,
                            notification: t.props.data,
                            action: T.PrimaryCta
                        }), t.props.onViewNotification(t.props.data.id)
                    }, t.renderDeleteNotification = function() {
                        return u.createElement(B.U, {
                            className: "persistent-notification__delete",
                            padding: {
                                top: 1,
                                left: 1,
                                right: .5
                            },
                            position: B._3.Absolute
                        }, u.createElement(B.U, {
                            display: B.H.Flex,
                            flexWrap: B.K.NoWrap,
                            alignItems: B.c.Start
                        }, u.createElement(B.v, {
                            ariaLabel: "delete-notification",
                            "data-test-selector": L,
                            icon: B._10.Close,
                            size: B.x.Small,
                            onClick: t.deleteNotification
                        })))
                    }, t
                }
                return c.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive();
                    var e = this.context.registerReceiver;
                    e ? this.unregister = e(this) : m.i.warn("<PersistentNotification /> initialized missing a <ScrollableArea /> provider")
                }, t.prototype.componentWillUnmount = function() {
                    this.unregister && this.unregister()
                }, t.prototype.render = function() {
                    return u.createElement(B.U, {
                        className: "persistent-notification",
                        position: B._3.Relative,
                        refDelegate: this.setRef,
                        "data-test-selector": "persistent-notification"
                    }, u.createElement(B._18, {
                        display: B.H.Flex,
                        className: this.props.data.isRead ? "persistent-notification__read" : "persistent-notification__unread",
                        borderBottom: !0,
                        flexWrap: B.K.NoWrap
                    }, u.createElement(B.S, c.__assign({
                        "data-test-selector": "persistent-notification__click",
                        onClick: this.clickNotification
                    }, i(this.props.data, w.PageviewMedium.NotificationCenter), {
                        alpha: !0
                    }), u.createElement(B.U, {
                        className: "persistent-notification__area",
                        display: B.H.Flex,
                        flexWrap: B.K.NoWrap,
                        padding: {
                            top: 1,
                            bottom: 1,
                            left: 1,
                            right: 3
                        }
                    }, u.createElement(B.C, {
                        aspect: B.k.Aspect1x1,
                        imageSrc: this.props.data.thumbnailURL,
                        imageAlt: Object(m.d)("Notification center item thumbnail", "OnsiteNotifications"),
                        size: B.D.Size4
                    }), u.createElement(B.U, {
                        display: B.H.Flex,
                        flexDirection: B.J.Column,
                        flexWrap: B.K.NoWrap,
                        margin: {
                            x: 1
                        }
                    }, u.createElement(B.U, {
                        className: "persistent-notification__body",
                        overflow: B.Z.Hidden,
                        "data-test-selector": "persistent-notification__body"
                    }, u.createElement(B._22, {
                        type: B._27.Span,
                        color: B.F.Alt
                    }, u.createElement(O, {
                        source: this.props.data.body || ""
                    }))), u.createElement(B.U, {
                        display: B.H.Flex,
                        alignItems: B.c.Center,
                        flexShrink: 0,
                        margin: {
                            top: .5
                        }
                    }, u.createElement(B._9, {
                        asset: B._10.MessagesSC,
                        height: 12,
                        width: 12,
                        type: B._11.Alt2
                    }), u.createElement(B.U, {
                        margin: {
                            left: .5
                        }
                    }, u.createElement(B._22, {
                        type: B._27.Span,
                        color: B.F.Alt2
                    }, Object(m.g)(new Date(this.props.data.updatedAt)))))))), this.renderDeleteNotification()))
                }, t.prototype.checkVisible = function(e) {
                    return c.__awaiter(this, void 0, void 0, function() {
                        return c.__generator(this, function(t) {
                            return !this.impressionEventFired && this.isVisible(e) && (I({
                                uiContext: x.Center,
                                notification: this.props.data
                            }), this.impressionEventFired = !0), [2]
                        })
                    })
                }, t.contextTypes = {
                    registerReceiver: E.func
                }, t = c.__decorate([Object(b.c)("PersistentNotification")], t)
            }(u.Component),
            j = n("+e5i"),
            P = n("UUPo"),
            H = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        isRead: !1
                    }, t.createNotificationData = function() {
                        return {
                            id: "friendrequests",
                            type: "friendrequests",
                            body: Object(m.d)("{count, plural, one {You have # new friend request} other {You have # new friend requests}}", {
                                count: t.props.count
                            }, "FriendRequestsNotification"),
                            createdAt: t.props.date,
                            updatedAt: t.props.date,
                            isRead: t.props.isOldNotification || t.state.isRead,
                            thumbnailURL: C.a,
                            actions: [{
                                body: "View",
                                type: "click",
                                url: "https://www.twitch.tv/friends/requests"
                            }]
                        }
                    }, t.clearUnseenCount = function() {
                        Object(y.d)(P, {}, function(e) {
                            return e.currentUser.incomingFriendRequests.totalUnreadCount = 0, e
                        }), t.props.clearUnreadFriendRequests().then(function() {}).catch(function(e) {
                            return m.i.error(e, "[FriendRequestsNotification] Failed to clear unread requests.")
                        })
                    }, t.viewFriendRequests = function() {
                        t.setState({
                            isRead: !0
                        })
                    }, t
                }
                return c.__extends(t, e), t.prototype.render = function() {
                    return u.createElement(R, {
                        key: "friendRequestsNotification",
                        data: this.createNotificationData(),
                        onDeleteNotification: this.clearUnseenCount,
                        onViewNotification: this.viewFriendRequests
                    })
                }, t
            }(u.Component),
            M = Object(S.compose)(Object(f.a)(j, {
                name: "clearUnreadFriendRequests"
            }))(H),
            W = (n("cLQP"), "center-window__empty"),
            V = "center-window__content-footer",
            q = "center-window__footer__text",
            G = "center-window__read-all",
            z = m.i.withCategory("onsite-notifications-center-window"),
            K = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        isLoadingMore: !1
                    }, t.renderContent = function() {
                        if (!t.props.hasInitiallyLoaded || t.props.data.length || t.props.friendRequestsData) {
                            return [t.mapPersistentNotificationElements(), t.renderContentFooter()]
                        }
                        return t.renderEmptyCenterWindowElement()
                    }, t.renderContentFooter = function() {
                        var e = !t.props.hasInitiallyLoaded || t.state.isLoadingMore ? u.createElement(B.Y, {
                            delay: 0,
                            fillContent: !0
                        }) : u.createElement(B._9, {
                            asset: B._10.LogoGlitch,
                            width: 24,
                            height: 24,
                            type: B._11.Alt2
                        });
                        return u.createElement(B.U, {
                            className: "center-window__content-footer",
                            key: "center-window__content-footer",
                            "data-test-selector": V,
                            display: B.H.Flex,
                            flexDirection: B.J.Column,
                            justifyContent: B.T.Center,
                            alignItems: B.c.Center,
                            textAlign: B._23.Center,
                            padding: 1,
                            flexGrow: 1
                        }, e)
                    }, t.mapPersistentNotificationElements = function() {
                        var e = t.props.data.map(function(e) {
                            return u.createElement(R, {
                                key: "onsite-notification-" + e.node.id,
                                data: e.node,
                                onDeleteNotification: t.props.onDeleteNotification,
                                onViewNotification: t.props.onViewNotification
                            })
                        });
                        return t.props.friendRequestsData && e.unshift(u.createElement(M, c.__assign({}, t.props.friendRequestsData))), e
                    }, t.renderEmptyCenterWindowElement = function() {
                        return u.createElement(B._18, {
                            "data-test-selector": W,
                            className: "center-window__empty-state",
                            background: B.m.Alt,
                            display: B.H.Flex,
                            justifyContent: B.T.Center,
                            alignItems: B.c.Center,
                            textAlign: B._23.Center,
                            flexDirection: B.J.Column,
                            padding: 2,
                            fullWidth: !0
                        }, u.createElement(B._9, {
                            asset: B._10.LogoGlitch,
                            width: 100,
                            height: 100,
                            type: B._11.Placeholder
                        }), u.createElement(B.U, {
                            margin: {
                                top: 1
                            }
                        }, u.createElement(B._22, {
                            type: B._27.H5,
                            color: B.F.Alt2
                        }, Object(m.d)("Hooray! You're in the clear!", "OnsiteNotifications"))))
                    }, t.renderMarkAsRead = function() {
                        return 0 !== t.props.data.length || t.props.friendRequestsData ? u.createElement(B.u, {
                            "data-test-selector": G,
                            type: B.z.Text,
                            size: B.x.Small,
                            disabled: 0 === t.props.data.length && !t.props.friendRequestsData,
                            onClick: t.props.onReadAllNotifications
                        }, Object(m.d)("Mark All as Read", "OnsiteNotifications")) : null
                    }, t.renderNotificationsHeaderElement = function() {
                        return u.createElement(B._18, {
                            className: "center-window__header",
                            background: B.m.Alt,
                            padding: {
                                x: 1,
                                y: .5
                            },
                            display: B.H.Flex,
                            alignItems: B.c.Center,
                            justifyContent: B.T.Between,
                            borderBottom: !0
                        }, u.createElement(B._22, {
                            type: B._27.H6,
                            color: B.F.Alt2,
                            bold: !0
                        }, Object(m.d)("Notifications", "OnsiteNotifications")), t.renderMarkAsRead())
                    }, t.renderUnreadNotificationsFooterElement = function() {
                        var e = 0 === t.props.newNotificationsCount ? null : u.createElement(B._22, {
                            "data-test-selector": q,
                            type: B._27.H6,
                            color: B.F.Alt2
                        }, Object(m.d)("{num, plural, one {1 New Notification} other {{num, number} New Notifications} }", {
                            num: t.props.newNotificationsCount
                        }, "OnsiteNotifications"));
                        return u.createElement(B._18, {
                            className: "center-window__footer",
                            background: B.m.Alt,
                            padding: .5,
                            alignItems: B.c.Center,
                            textAlign: B._23.Center,
                            borderTop: !0
                        }, e)
                    }, t.loadMore = function() {
                        return c.__awaiter(t, void 0, void 0, function() {
                            var e;
                            return c.__generator(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        if (this.state.isLoadingMore) return [3, 5];
                                        this.setState({
                                            isLoadingMore: !0
                                        }), t.label = 1;
                                    case 1:
                                        return t.trys.push([1, 3, , 4]), [4, this.props.onLoadMore()];
                                    case 2:
                                        return t.sent(), [3, 4];
                                    case 3:
                                        return e = t.sent(), z.error(e, "unexpected loadMore failure"), [3, 4];
                                    case 4:
                                        this.setState({
                                            isLoadingMore: !1
                                        }), t.label = 5;
                                    case 5:
                                        return [2]
                                }
                            })
                        })
                    }, t
                }
                return c.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return u.createElement(B._18, {
                        className: "center-window",
                        "data-test-selector": "center-window",
                        background: B.m.Alt
                    }, this.renderNotificationsHeaderElement(), u.createElement(_.b, {
                        className: "center-window__scroll",
                        contentClassName: "center-window__scroll-container",
                        suppressScrollX: !0
                    }, u.createElement(B.U, {
                        display: B.H.Flex,
                        alignItems: B.c.Center,
                        flexDirection: B.J.Column,
                        flexGrow: 1,
                        flexWrap: B.K.NoWrap
                    }, this.renderContent(), u.createElement(_.a, {
                        enabled: this.props.data.length > 0 && !!this.props.data[this.props.data.length - 1].cursor,
                        contentLength: this.props.data.length,
                        loadMore: this.loadMore,
                        pixelThreshold: 200
                    }))), this.renderUnreadNotificationsFooterElement())
                }, t = c.__decorate([Object(b.c)("OnsiteNotificationsCenterWindow")], t)
            }(u.Component),
            Q = n("RH2O"),
            $ = n("Aj/L"),
            J = n("RweG"),
            Y = (n("MnLQ"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.closeTimeout = 0, t.close = function() {
                        A({
                            uiContext: x.Toast,
                            notification: t.props.item,
                            action: T.Dismiss
                        }), t.props.close(t.props.index)
                    }, t.onMouseEnter = function() {
                        t.cancelCloseTimer()
                    }, t.onMouseLeave = function() {
                        t.scheduleCloseTimer()
                    }, t.view = function() {
                        A({
                            uiContext: x.Toast,
                            notification: t.props.item,
                            action: T.PrimaryCta
                        }), t.props.view(t.props.index)
                    }, t
                }
                return c.__extends(t, e), t.prototype.componentWillMount = function() {
                    this.scheduleCloseTimer()
                }, t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive(), I({
                        uiContext: x.Toast,
                        notification: this.props.item
                    })
                }, t.prototype.componentWillUnmount = function() {
                    this.cancelCloseTimer()
                }, t.prototype.render = function() {
                    return u.createElement(B.e, {
                        type: B.i.BounceIn,
                        duration: B.g.Medium,
                        enabled: !0
                    }, u.createElement("div", {
                        onMouseEnter: this.onMouseEnter,
                        onMouseLeave: this.onMouseLeave,
                        "data-test-selector": "onsite-notification-toast__mouse-enter-detector"
                    }, u.createElement(B._18, {
                        className: "onsite-notification-toast",
                        background: B.m.Base,
                        display: B.H.Flex,
                        flexWrap: B.K.NoWrap,
                        margin: {
                            bottom: 1
                        },
                        border: !0
                    }, u.createElement(B.S, c.__assign({
                        onClick: this.view,
                        alpha: !0
                    }, i(this.props.item, w.PageviewMedium.NotificationToast)), u.createElement(B.U, {
                        className: "onsite-notification-toast__container",
                        display: B.H.Flex,
                        flexWrap: B.K.NoWrap
                    }, u.createElement(B.U, {
                        padding: {
                            y: 1,
                            left: 1
                        },
                        display: B.H.Flex,
                        flexShrink: 0
                    }, u.createElement(B.C, {
                        aspect: B.k.Aspect1x1,
                        imageSrc: this.props.item.thumbnailURL,
                        imageAlt: Object(m.d)("Notification toast thumbnail", "OnsiteNotifications"),
                        size: B.D.Size4
                    })), u.createElement(B.U, {
                        display: B.H.Flex,
                        flexDirection: B.J.Column,
                        flexWrap: B.K.NoWrap,
                        flexGrow: 1,
                        padding: 1
                    }, u.createElement(B.U, {
                        className: "onsite-notification-toast__body",
                        overflow: B.Z.Hidden
                    }, u.createElement(B._18, {
                        color: B.F.Alt
                    }, u.createElement(O, {
                        source: this.props.item.body
                    }))), u.createElement(B.U, {
                        margin: {
                            top: .5
                        },
                        flexShrink: 0
                    }, u.createElement(B._18, {
                        color: B.F.Alt2
                    }, Object(m.g)(new Date(this.props.item.updatedAt))))))), this.renderActions())))
                }, t.prototype.renderActions = function() {
                    return u.createElement(B._18, {
                        className: "onsite-notification-toast__action-wrapper",
                        display: B.H.Flex,
                        alignContent: B.b.Stretch,
                        flexGrow: 0,
                        flexShrink: 0,
                        flexDirection: B.J.Column,
                        borderLeft: !0
                    }, u.createElement(B._18, {
                        className: "onsite-notification-toast__action",
                        display: B.H.Flex,
                        alignContent: B.b.Stretch,
                        flexGrow: 1,
                        borderBottom: !0
                    }, u.createElement(B.S, c.__assign({
                        onClick: this.view,
                        "data-test-selector": "onsite-notification-toast__view",
                        alpha: !0
                    }, i(this.props.item, w.PageviewMedium.NotificationToast)), u.createElement(B._18, {
                        display: B.H.Flex,
                        alignItems: B.c.Center,
                        justifyContent: B.T.Center,
                        fullHeight: !0,
                        flexGrow: 1,
                        padding: .5
                    }, u.createElement(B._22, {
                        color: B.F.Link
                    }, this.primaryCTAText())))), u.createElement(B._18, {
                        className: "onsite-notification-toast__action",
                        display: B.H.Flex,
                        alignContent: B.b.Stretch,
                        flexGrow: 1
                    }, u.createElement(B.S, {
                        onClick: this.close,
                        "data-test-selector": "onsite-notification-toast__close",
                        alpha: !0
                    }, u.createElement(B._18, {
                        display: B.H.Flex,
                        alignItems: B.c.Center,
                        justifyContent: B.T.Center,
                        fullHeight: !0,
                        flexGrow: 1,
                        padding: .5
                    }, u.createElement(B._22, {
                        color: B.F.Alt2
                    }, Object(m.d)("Close", "OnsiteNotifications"))))))
                }, t.prototype.primaryCTAText = function() {
                    var e = this.props.item.actions.find(function(e) {
                        return "click" === e.type
                    });
                    return e ? e.body : Object(m.d)("View", "OnsiteNotifications")
                }, t.prototype.scheduleCloseTimer = function() {
                    var e = this;
                    this.cancelCloseTimer(), this.closeTimeout = setTimeout(function() {
                        e.props.close(e.props.index), e.closeTimeout = 0
                    }, 1e4)
                }, t.prototype.cancelCloseTimer = function() {
                    this.closeTimeout && (clearTimeout(this.closeTimeout), this.closeTimeout = 0)
                }, t
            }(u.Component)),
            Z = Object(b.c)("OnsiteNotificationToast")(Y),
            X = (n("L6HU"), m.i.withCategory("toast-manager")),
            ee = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        notifications: []
                    }, t.view = function(e) {
                        var n = t.state.notifications[e];
                        t.props.onViewNotification(n.id, !n.isTransient), t.close(e)
                    }, t.close = function(e) {
                        var n = t.state.notifications.slice();
                        n.splice(e, 1), t.setState({
                            notifications: n
                        })
                    }, t
                }
                return c.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive(), this.conditionallyInsertTestData()
                }, t.prototype.componentWillReceiveProps = function(e) {
                    var t = this.props.pubsub.messages.info,
                        n = e.pubsub.messages.info;
                    if (n && n.data.toast && (!t || n.data.notification.id !== t.data.notification.id || n.data.notification.updated_at !== t.data.notification.updated_at)) {
                        X.debug("Received pubsub update", e.pubsub.messages.info);
                        var i = a(n.data.notification, n.data.persistent);
                        this.onNewNotification(i)
                    }
                }, t.prototype.render = function() {
                    return u.createElement(B.U, {
                        className: "onsite-notifications-toast-manager",
                        position: B._3.Absolute,
                        margin: {
                            top: 5
                        },
                        "data-test-selector": "onsite-notifications-toast-manager"
                    }, this.renderToasts())
                }, t.prototype.conditionallyInsertTestData = function() {
                    return c.__awaiter(this, void 0, void 0, function() {
                        var e, t;
                        return c.__generator(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    return m.a.buildType !== g.a.Production && d.parse(window.location.search).onsite_test_data ? [4, n.e(31).then(n.bind(null, "SFZn"))] : [3, 2];
                                case 1:
                                    e = i.sent().MockOnsiteNotifications, t = e.getMockOnsiteNotificationModels(3), this.setState({
                                        notifications: t
                                    }), i.label = 2;
                                case 2:
                                    return [2]
                            }
                        })
                    })
                }, t.prototype.renderToasts = function() {
                    var e = this,
                        t = this.state.notifications.map(function(t, n) {
                            return u.createElement(Z, {
                                key: t.id,
                                item: t,
                                index: n,
                                view: e.view,
                                close: e.close
                            })
                        });
                    return 0 === t.length ? null : t
                }, t.prototype.onNewNotification = function(e) {
                    var t = this.state.notifications.slice(),
                        n = t.findIndex(function(t) {
                            return t.id === e.id
                        });
                    n > -1 && t.splice(n, 1), t.unshift(e), t.length > 3 && t.pop(), this.setState({
                        notifications: t
                    })
                }, t = c.__decorate([Object(b.c)("OnsiteNotificationToastManager"), Object(J.a)([{
                    topic: function(e) {
                        return Object(k.e)("" + (e.currentUser && e.currentUser.id))
                    },
                    mapMessageTypesToProps: (l = {}, l[v.c.OnsiteNotificationCreate] = "info", l[v.c.OnsiteNotificationUpdate] = "info", l),
                    skip: function(e) {
                        return !e.currentUser
                    }
                }])], t)
            }(u.Component),
            te = Object(Q.a)(function(e) {
                return {
                    currentUser: Object($.c)(e)
                }
            })(ee),
            ne = m.i.withCategory("onsite-pubsub-mutators"),
            ie = n("XF1M"),
            ae = n("UhWx"),
            re = n("WfBs"),
            se = n("c8sn"),
            oe = n("wHbv");
        n("adox");
        n.d(t, "a", function() {
            return me
        }), n.d(t, "b", function() {
            return ge
        });
        var le = m.i.withCategory("onsite-notifications"),
            ce = "onsite-notifications__badge",
            de = "99+",
            ue = 5e3,
            me = 10,
            pe = 100,
            fe = {
                align: B._31.Center,
                direction: B._32.Bottom,
                label: ""
            },
            he = {
                limit: me,
                cursor: ""
            },
            ge = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        newNotificationsCount: 0,
                        newFriendRequestsBadgeCount: 0,
                        isFriendRequestsNotificationUnread: !1
                    }, t.newNotificationsCountTimer = 0, t.hasInsertedSummaryData = !1, t.hasInsertedListNotificationsData = !1, t.viewNotification = function(e, n) {
                        void 0 === n && (n = !0), t.centerWindowToggleBalloon.toggleBalloon(!1), n && t.readNotification(e)
                    }, t.conditionallyInsertSummaryTestData = function() {
                        t.summaryDataLoaded(t.props) && !t.hasInsertedSummaryData && m.a.buildType !== g.a.Production && d.parse(window.location.search).onsite_test_data && (t.hasInsertedSummaryData = !0, Object(y.d)(se, c.__assign({}, t.props.summaryData.variables), function(e) {
                            return e.currentUser.notifications.summary.unseenCount = d.parse(window.location.search).onsite_test_data, e
                        }))
                    }, t.conditionallyInsertListNotificationsTestData = function() {
                        return c.__awaiter(t, void 0, void 0, function() {
                            var e;
                            return c.__generator(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        return this.listDataLoaded() && !this.hasInsertedListNotificationsData && m.a.buildType !== g.a.Production && d.parse(window.location.search).onsite_test_data ? (this.hasInsertedListNotificationsData = !0, [4, n.e(31).then(n.bind(null, "SFZn"))]) : [3, 2];
                                    case 1:
                                        e = t.sent().MockOnsiteNotifications, Object(y.d)(ae, c.__assign({}, this.props.listData.variables), function(t) {
                                            return t.currentUser.notifications.edges = e.getMockOnsiteNotificationEdges(d.parse(window.location.search).onsite_test_data), t
                                        }), t.label = 2;
                                    case 2:
                                        return [2]
                                }
                            })
                        })
                    }, t.summaryDataLoaded = function(e) {
                        return e.summaryData && !e.summaryData.loading && !e.summaryData.error && e.summaryData.currentUser && e.summaryData.currentUser.notifications && e.summaryData.currentUser.notifications.summary && e.summaryData.currentUser.incomingFriendRequests
                    }, t.listDataLoaded = function() {
                        return t.props.listData && t.props.listData.currentUser && t.props.listData.currentUser.notifications && void 0 !== t.props.listData.currentUser.notifications.edges
                    }, t.hasNewFriendRequests = function(e) {
                        var t = e.summaryData.currentUser;
                        if (t.incomingFriendRequests && t.incomingFriendRequests.newestEdge && t.incomingFriendRequests.newestEdge.createdAt) {
                            var n = new Date(t.incomingFriendRequests.newestEdge.createdAt),
                                i = new Date(t.notifications.summary.lastSeenAt);
                            return t.incomingFriendRequests.totalUnreadCount > 0 && n > i
                        }
                        return !1
                    }, t.getFriendRequestsData = function() {
                        if (t.summaryDataLoaded(t.props)) {
                            var e = t.props.summaryData.currentUser;
                            if (e.incomingFriendRequests && e.incomingFriendRequests.newestEdge) {
                                var n = e.incomingFriendRequests.totalUnreadCount,
                                    i = e.incomingFriendRequests.newestEdge.createdAt;
                                return n && i ? {
                                    count: n,
                                    date: i,
                                    isOldNotification: !t.state.isFriendRequestsNotificationUnread
                                } : void 0
                            }
                        }
                    }, t.toggleCenter = function(e) {
                        e || (t.props.stopDeferring(), t.getUnseenNotificationsAndApplyTimer(), t.viewNotifications()), D({
                            unseenCount: t.getUnseenNotificationsCount(t.props),
                            action: e ? F.Close : F.Open
                        })
                    }, t.getUnseenNotificationsAndApplyTimer = function() {
                        var e = t.state.newNotificationsCount;
                        t.summaryDataLoaded(t.props) && (e = t.getUnseenNotificationsCount(t.props), t.setState({
                            newNotificationsCount: e
                        })), t.clearTimeout(), e > 0 && (t.newNotificationsCountTimer = setTimeout(function() {
                            t.setState({
                                newNotificationsCount: 0
                            }), t.clearTimeout()
                        }, ue))
                    }, t.viewNotifications = function() {
                        return c.__awaiter(t, void 0, void 0, function() {
                            var e, t;
                            return c.__generator(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        if (!this.summaryDataLoaded(this.props)) return [2];
                                        this.setState({
                                            newFriendRequestsBadgeCount: 0
                                        }), e = c.__assign({}, Object(y.a)({}), {
                                            optimisticResponse: {
                                                viewedNotifications: {
                                                    user: {
                                                        notifications: {
                                                            summary: {
                                                                unseenCount: 0,
                                                                lastSeenAt: new Date,
                                                                __typename: "OnsiteNotificationsSummary"
                                                            },
                                                            __typename: "OnsiteNotificationConnection"
                                                        },
                                                        __typename: "User"
                                                    },
                                                    __typename: "ViewedNotificationsPayload"
                                                }
                                            }
                                        }), Object(y.d)(se, c.__assign({}, this.props.summaryData.variables), function(e) {
                                            return e.currentUser.notifications.summary.unseenCount = 0, e
                                        }), n.label = 1;
                                    case 1:
                                        return n.trys.push([1, 3, , 4]), [4, this.props.viewNotifications(e)];
                                    case 2:
                                        return n.sent(), [3, 4];
                                    case 3:
                                        return t = n.sent(), le.error(t, "failure to read message..."), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, t.getUnseenNotificationsCount = function(e) {
                        return t.summaryDataLoaded(e) ? e.summaryData.currentUser.notifications.summary.unseenCount + t.state.newFriendRequestsBadgeCount : 0
                    }, t.renderUnseenNotificationsBadge = function() {
                        var e = t.getUnseenNotificationsCount(t.props);
                        if (e > 0) {
                            var n = e >= 100 ? de : e.toString();
                            return u.createElement(B.U, {
                                className: "onsite-notifications__badge",
                                "data-test-selector": ce,
                                position: B._3.Absolute
                            }, u.createElement(B._0, {
                                label: n,
                                type: B._1.Notification
                            }))
                        }
                    }, t.deleteNotification = function(e) {
                        return c.__awaiter(t, void 0, void 0, function() {
                            var t, n;
                            return c.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        t = c.__assign({}, Object(y.a)({
                                            id: e
                                        }), {
                                            optimisticResponse: {
                                                deleteNotification: {
                                                    __typename: "DeleteNotificationPayload",
                                                    notification: {
                                                        __typename: "OnsiteNotification",
                                                        id: e
                                                    }
                                                }
                                            }
                                        }), this.listDataLoaded() && Object(y.d)(ae, c.__assign({}, this.props.listData.variables), function(t) {
                                            return t.currentUser.notifications.edges = t.currentUser.notifications.edges.filter(function(t) {
                                                return t.node.id !== e
                                            }), t
                                        }), i.label = 1;
                                    case 1:
                                        return i.trys.push([1, 3, , 4]), [4, this.props.deleteOnsiteNotification(t)];
                                    case 2:
                                        return i.sent(), [3, 4];
                                    case 3:
                                        return n = i.sent(), le.error(n, "Unable to delete notification " + e), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, t.readAllNotifications = function() {
                        if (t.setState({
                                isFriendRequestsNotificationUnread: !1
                            }), t.listDataLoaded()) {
                            D({
                                unseenCount: t.getUnseenNotificationsCount(t.props),
                                action: F.MarkAllRead
                            });
                            var e = t.props.listData.currentUser.notifications.edges.filter(function(e) {
                                return !e.node.isRead
                            }).map(function(e) {
                                return e.node.id
                            });
                            if (0 !== e.length) {
                                var n = function(e, t) {
                                    for (var n = [], i = 0; i < e.length; i += t) {
                                        var a = e.slice(i, i + t);
                                        n.push(a)
                                    }
                                    return n
                                }(e, pe);
                                Object(y.d)(ae, c.__assign({}, t.props.listData.variables), function(e) {
                                    return e.currentUser.notifications.edges = e.currentUser.notifications.edges.map(function(e) {
                                        return c.__assign({}, e, {
                                            node: c.__assign({}, e.node, {
                                                isRead: !0
                                            })
                                        })
                                    }), e
                                });
                                for (var i = 0, a = n; i < a.length; i++) {
                                    var r = a[i];
                                    t.markIDsAsRead(r)
                                }
                            }
                        }
                    }, t.markIDsAsRead = function(e) {
                        return c.__awaiter(t, void 0, void 0, function() {
                            var t, n, i;
                            return c.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        t = e.map(function(e) {
                                            return {
                                                id: e,
                                                isRead: !0,
                                                __typename: "OnsiteNotification"
                                            }
                                        }), n = c.__assign({}, Object(y.a)({
                                            ids: e
                                        }), {
                                            optimisticResponse: {
                                                readNotifications: {
                                                    __typename: "ReadNotificationsPayload",
                                                    notifications: t,
                                                    count: e.length
                                                }
                                            }
                                        }), a.label = 1;
                                    case 1:
                                        return a.trys.push([1, 3, , 4]), [4, this.props.readOnsiteNotification(n)];
                                    case 2:
                                        return a.sent(), [3, 4];
                                    case 3:
                                        return i = a.sent(), le.error(i, "Unable to read notifications", {
                                            ids: e
                                        }), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, t.readNotification = function(e) {
                        return c.__awaiter(t, void 0, void 0, function() {
                            var t, n;
                            return c.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        t = c.__assign({}, Object(y.a)({
                                            ids: [e]
                                        }), {
                                            optimisticResponse: {
                                                readNotifications: {
                                                    __typename: "ReadNotificationsPayload",
                                                    notifications: [{
                                                        id: e,
                                                        isRead: !0,
                                                        __typename: "OnsiteNotification"
                                                    }],
                                                    count: 1
                                                }
                                            }
                                        }), this.listDataLoaded() && Object(y.d)(ae, c.__assign({}, this.props.listData.variables), function(t) {
                                            return t.currentUser.notifications.edges = t.currentUser.notifications.edges.map(function(t) {
                                                return t.node.id === e ? c.__assign({}, t, {
                                                    node: c.__assign({}, t.node, {
                                                        isRead: !0
                                                    })
                                                }) : t
                                            }), t
                                        }), i.label = 1;
                                    case 1:
                                        return i.trys.push([1, 3, , 4]), [4, this.props.readOnsiteNotification(t)];
                                    case 2:
                                        return i.sent(), [3, 4];
                                    case 3:
                                        return n = i.sent(), le.error(n, "Unable to read notification", {
                                            id: e
                                        }), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, t.loadMore = function() {
                        return c.__awaiter(t, void 0, void 0, function() {
                            return c.__generator(this, function(e) {
                                return this.props.listData.loading ? [2] : [2, this.props.loadMore()]
                            })
                        })
                    }, t.clearTimeout = function() {
                        t.newNotificationsCountTimer && (clearTimeout(t.newNotificationsCountTimer), t.newNotificationsCountTimer = 0)
                    }, t.saveCenterWindowToggleBalloonRef = function(e) {
                        return t.centerWindowToggleBalloon = e
                    }, t
                }
                return c.__extends(t, e), t.prototype.componentDidUpdate = function() {
                    this.conditionallyInsertSummaryTestData(), this.conditionallyInsertListNotificationsTestData()
                }, t.prototype.componentWillUnmount = function() {
                    this.clearTimeout()
                }, t.prototype.componentWillReceiveProps = function(e) {
                    if (this.summaryDataLoaded(e)) {
                        var t = this.hasNewFriendRequests(e);
                        this.setState({
                            newFriendRequestsBadgeCount: t ? 1 : 0
                        }), this.summaryDataLoaded(this.props) || this.setState({
                            isFriendRequestsNotificationUnread: t
                        }), m.n.setBadgeCount(this.getUnseenNotificationsCount(e))
                    }
                }, t.prototype.render = function() {
                    var e = this.props.shouldDefer || !this.listDataLoaded() ? [] : this.props.listData.currentUser.notifications.edges;
                    return fe.label = Object(m.d)("Notifications", "OnsiteNotificationsToolTip"), u.createElement(B.U, {
                        className: "onsite-notifications"
                    }, u.createElement(te, {
                        onViewNotification: this.viewNotification
                    }), u.createElement(B.U, {
                        position: B._3.Relative
                    }, u.createElement(p.a, {
                        onToggle: this.toggleCenter,
                        ref: this.saveCenterWindowToggleBalloonRef,
                        tooltipProps: fe
                    }, u.createElement(B.v, {
                        ariaLabel: Object(m.d)("Open Notifications", "OnsiteNotifications"),
                        size: B.x.Large,
                        icon: B._10.NotificationBell,
                        overlay: !0
                    }), u.createElement(B.p, {
                        "data-test-selector": "center-window__balloon",
                        direction: B.q.BottomRight,
                        size: B.r.Large,
                        offsetX: "10px"
                    }, u.createElement(K, {
                        newNotificationsCount: this.state.newNotificationsCount,
                        hasInitiallyLoaded: this.listDataLoaded(),
                        data: e,
                        friendRequestsData: this.getFriendRequestsData(),
                        onLoadMore: this.loadMore,
                        onViewNotification: this.viewNotification,
                        onReadAllNotifications: this.readAllNotifications,
                        onDeleteNotification: this.deleteNotification
                    }))), this.renderUnseenNotificationsBadge()))
                }, t = c.__decorate([function(e) {
                    return function(t) {
                        function n() {
                            var e = null !== t && t.apply(this, arguments) || this;
                            return e.state = {
                                shouldDefer: !0
                            }, e.stopDeferring = function() {
                                e.state.shouldDefer && e.setState({
                                    shouldDefer: !1
                                })
                            }, e
                        }
                        return c.__extends(n, t), n.prototype.render = function() {
                            var t = {
                                shouldDefer: this.state.shouldDefer,
                                stopDeferring: this.stopDeferring
                            };
                            return u.createElement(e, c.__assign({}, this.props, t))
                        }, n
                    }(u.Component)
                }, Object(f.a)(se, {
                    name: "summaryData",
                    skip: function(e) {
                        return !e.firstPageLoaded
                    }
                }), Object(f.a)(oe, {
                    name: "viewNotifications"
                }), Object(f.a)(ae, {
                    name: "listData",
                    options: function(e) {
                        return {
                            variables: c.__assign({}, he, {
                                language: e.languageCode
                            })
                        }
                    },
                    skip: function(e) {
                        return e.shouldDefer
                    },
                    props: function(e) {
                        return c.__assign({}, e, {
                            loadMore: function() {
                                return e.listData.fetchMore({
                                    query: ae,
                                    variables: c.__assign({}, e.listData.variables, {
                                        cursor: e.listData.currentUser ? e.listData.currentUser.notifications.edges[e.listData.currentUser.notifications.edges.length - 1].cursor : ""
                                    }),
                                    updateQuery: function(e, t) {
                                        var n = t.fetchMoreResult;
                                        return {
                                            currentUser: c.__assign({}, n.currentUser, {
                                                notifications: c.__assign({}, n.currentUser.notifications, {
                                                    edges: e.currentUser.notifications.edges.concat(n.currentUser.notifications.edges)
                                                })
                                            })
                                        }
                                    }
                                })
                            }
                        })
                    }
                }), Object(f.a)(ie, {
                    name: "deleteOnsiteNotification"
                }), Object(f.a)(re, {
                    name: "readOnsiteNotification"
                }), Object(h.a)(function(e) {
                    return {
                        query: se,
                        skip: !e.currentUser,
                        topic: Object(k.e)("" + (e.currentUser && e.currentUser.id)),
                        types: [v.c.OnsiteNotificationSummaryUpdate, v.c.OnsiteNotificationUpdate, v.c.OnsiteNotificationCreate, v.c.OnsiteNotificationDelete],
                        mutator: r
                    }
                }), Object(h.a)(function(e) {
                    return {
                        query: ae,
                        variables: c.__assign({}, he, {
                            language: e.languageCode
                        }),
                        skip: !e.currentUser,
                        topic: Object(k.e)("" + (e.currentUser && e.currentUser.id)),
                        types: [v.c.OnsiteNotificationsRead, v.c.OnsiteNotificationUpdate, v.c.OnsiteNotificationCreate, v.c.OnsiteNotificationDelete],
                        mutator: s
                    }
                }), Object(b.c)("OnsiteNotifications", {
                    autoReportInteractive: !0
                })], t)
            }(u.Component)
    },
    UUPo: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "FriendRequestsNotification_Query"
                },
                variableDefinitions: [],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        alias: null,
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
                                    value: "incomingFriendRequests"
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
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "totalUnreadCount"
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
            }],
            loc: {
                start: 0,
                end: 115
            }
        };
        n.loc.source = {
            body: "query FriendRequestsNotification_Query {\ncurrentUser {\nid\nincomingFriendRequests(first: 1) {\ntotalUnreadCount\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    "UW/+": function(e, t) {},
    UhWx: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "OnsiteNotifications_ListNotifications"
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
                    },
                    defaultValue: null
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
                    },
                    defaultValue: null
                }, {
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "language"
                        }
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String"
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
                            value: "currentUser"
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
                                    value: "notifications"
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
                                        value: "language"
                                    },
                                    value: {
                                        kind: "Variable",
                                        name: {
                                            kind: "Name",
                                            value: "language"
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
                                            value: "pageInfo"
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
                                                    value: "hasNextPage"
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
                                            value: "edges"
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
                                                    value: "cursor"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: null
                                            }, {
                                                kind: "Field",
                                                alias: null,
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
                                                            value: "type"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: null
                                                    }, {
                                                        kind: "Field",
                                                        alias: null,
                                                        name: {
                                                            kind: "Name",
                                                            value: "body"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: null
                                                    }, {
                                                        kind: "Field",
                                                        alias: null,
                                                        name: {
                                                            kind: "Name",
                                                            value: "createdAt"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: null
                                                    }, {
                                                        kind: "Field",
                                                        alias: null,
                                                        name: {
                                                            kind: "Name",
                                                            value: "updatedAt"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: null
                                                    }, {
                                                        kind: "Field",
                                                        alias: null,
                                                        name: {
                                                            kind: "Name",
                                                            value: "isRead"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: null
                                                    }, {
                                                        kind: "Field",
                                                        alias: null,
                                                        name: {
                                                            kind: "Name",
                                                            value: "thumbnailURL"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: null
                                                    }, {
                                                        kind: "Field",
                                                        alias: null,
                                                        name: {
                                                            kind: "Name",
                                                            value: "actions"
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
                                                                    value: "body"
                                                                },
                                                                arguments: [],
                                                                directives: [],
                                                                selectionSet: null
                                                            }, {
                                                                kind: "Field",
                                                                alias: null,
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "type"
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
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 311
            }
        };
        n.loc.source = {
            body: "query OnsiteNotifications_ListNotifications($limit: Int $cursor: Cursor $language: String) {\ncurrentUser {\nid\nnotifications(first: $limit after: $cursor language: $language) {\npageInfo {\nhasNextPage\n}\nedges {\ncursor\nnode {\nid\ntype\nbody\ncreatedAt\nupdatedAt\nisRead\nthumbnailURL\nactions {\nbody\ntype\nurl\n}\n}\n}\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    WVx7: function(e, t, n) {
        "use strict";

        function i(e) {
            return u.__awaiter(this, void 0, void 0, function() {
                var t, n, i, a, r;
                return u.__generator(this, function(s) {
                    switch (s.label) {
                        case 0:
                            if (t = f.b.get("bits_truex_partner_hash", ""), !(n = f.b.get("bits_truex_api_url", "")) || !t) return f.i.warn("Truex API info missing from dynamic settings"), [2, y.Error];
                            s.label = 1;
                        case 1:
                            return s.trys.push([1, 5, , 6]), [4, fetch(n + "?placement.key=" + t + "&user.uid=" + e + "&max_activities=1")];
                        case 2:
                            return (i = s.sent()).ok ? [4, i.json()] : [3, 4];
                        case 3:
                            if ((a = s.sent()) && Array.isArray(a) && a.length) return [2, y.Available];
                            s.label = 4;
                        case 4:
                            return [2, y.Unavailable];
                        case 5:
                            return r = s.sent(), f.i.warn("Failed checking ad availability from TrueX, probably due to AdBlock", r), [2, y.AdBlocked];
                        case 6:
                            return [2]
                    }
                })
            })
        }

        function a(e) {
            return {
                adModalOpen: Object(c.b)(e, C),
                isLoggedIn: Object(d.d)(e)
            }
        }

        function r(e) {
            return {
                showWatchAdModal: function(t) {
                    return e(Object(l.d)(C, t))
                }
            }
        }
        var s, o = n("RH2O"),
            l = n("V5M+"),
            c = n("Iw4B"),
            d = n("Aj/L"),
            u = n("TToO"),
            m = n("U7vG"),
            p = n("2KeS"),
            f = n("6sO2"),
            h = n("+8VM"),
            g = n("7vx8"),
            v = n("oIkB");
        ! function(e) {
            e[e.ExitEarly = 0] = "ExitEarly", e[e.Unknown = 1] = "Unknown", e[e.Adblock = 2] = "Adblock", e[e.LimitReached = 3] = "LimitReached"
        }(s || (s = {}));
        var y, k = n("4JjK"),
            b = n("/LBW"),
            _ = n("Odds"),
            S = n("zzpv"),
            N = (n("x583"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {}, t.hasAwarded = !1, t.messageHandler = function(e) {
                        return u.__awaiter(t, void 0, void 0, function() {
                            var t, n, i, a, r;
                            return u.__generator(this, function(o) {
                                switch (o.label) {
                                    case 0:
                                        if (e.origin !== window.location.origin) return [2];
                                        if (!(t = e.data) || "trueXAd" !== t.msgSrc) return [2];
                                        switch (t.type) {
                                            case k.a.Ready:
                                                return [3, 1];
                                            case k.a.RequestAd:
                                                return [3, 2];
                                            case k.a.Dimensions:
                                                return [3, 3];
                                            case k.a.OnStart:
                                                return [3, 4];
                                            case k.a.OnCredit:
                                                return [3, 5];
                                            case k.a.OnClose:
                                            case k.a.OnFinish:
                                            case k.a.LimitReached:
                                            case k.a.Adblock:
                                            case k.a.OnError:
                                                return [3, 9]
                                        }
                                        return [3, 10];
                                    case 1:
                                        return n = {
                                            msgSrc: "wateb-ad-modal",
                                            tuid: this.props.tuid
                                        }, e.source.postMessage(n, "*"), [2];
                                    case 2:
                                        try {
                                            if (!(i = JSON.parse(t.activityJSON))) return [2];
                                            Object(b.g)({
                                                campaignID: i.campaign_id.toString(),
                                                requestID: t.requestID,
                                                requestMethod: this.props.requestRef
                                            })
                                        } catch (e) {}
                                        return [2];
                                    case 3:
                                        return t.height && t.width && this.setState({
                                            customDimensions: {
                                                height: t.height,
                                                width: t.width
                                            }
                                        }), [3, 10];
                                    case 4:
                                        try {
                                            if (!(i = JSON.parse(t.activityJSON))) return [2];
                                            Object(b.f)({
                                                requestID: t.requestID,
                                                adblock: !1,
                                                campaignID: i.campaign_id.toString()
                                            })
                                        } catch (e) {}
                                        return [2];
                                    case 5:
                                        return o.trys.push([5, 7, , 8]), [4, this.props.redeemTrueXAd(Object(v.a)({
                                            args: t.engagement.signature_argument_string,
                                            signature: t.engagement.signature,
                                            trueXAd: {
                                                creativeID: t.engagement.ad.creative_id,
                                                campaignID: t.engagement.ad.campaign_id,
                                                name: t.engagement.ad.name,
                                                currencyAmount: t.engagement.ad.currency_amount
                                            },
                                            targetID: this.props.channelID
                                        }))];
                                    case 6:
                                        return a = o.sent(), this.hasAwarded = !0, this.props.onBitsAwarded && this.props.onBitsAwarded(a.data.redeemTrueXAd.grantedBits), [3, 8];
                                    case 7:
                                        return r = o.sent(), f.i.warn("Error while redeeming bits for truex ad", r), this.props.onError && this.props.onError(s.Unknown), [3, 8];
                                    case 8:
                                        return [3, 10];
                                    case 9:
                                        return this.props.onError && (t.type === k.a.LimitReached ? this.props.onError(s.LimitReached) : t.type === k.a.Adblock ? this.props.onError(s.Adblock) : t.type === k.a.OnError ? this.props.onError(s.Unknown) : this.hasAwarded || this.props.onError(s.ExitEarly)), this.props.closeModal(), [3, 10];
                                    case 10:
                                        return [2]
                                }
                            })
                        })
                    }, t
                }
                return u.__extends(t, e), t.prototype.componentWillMount = function() {
                    window.addEventListener("message", this.messageHandler)
                }, t.prototype.componentWillUnmount = function() {
                    window.removeEventListener("message", this.messageHandler)
                }, t.prototype.render = function() {
                    return m.createElement(_._18, {
                        background: _.m.Base
                    }, m.createElement("div", {
                        className: "t-watch-ads-modal",
                        style: this.state.customDimensions
                    }, m.createElement(h.a, null), m.createElement("iframe", {
                        src: "/products/bits/ad"
                    })))
                }, t = u.__decorate([Object(g.a)(S, {
                    name: "redeemTrueXAd"
                })], t)
            }(m.Component)),
            C = Object(o.a)(null, function(e) {
                return Object(p.bindActionCreators)({
                    closeModal: l.c
                }, e)
            })(N),
            E = n("HW6M"),
            O = n("jF7o"),
            w = n("zCIC");
        ! function(e) {
            e[e.Error = 0] = "Error", e[e.AdBlocked = 1] = "AdBlocked", e[e.Unavailable = 2] = "Unavailable", e[e.Available = 3] = "Available"
        }(y || (y = {}));
        var U, x = function(e) {
                var t = null;
                return e.disableWatchAd && (t = Object(f.d)("Try again later", "Bits--WatchAdOffer")), m.createElement(_._18, {
                    className: "bits-buy-card__offer-row",
                    display: _.H.Flex,
                    flexShrink: 0,
                    borderBottom: !0,
                    justifyContent: _.T.Between,
                    flexWrap: _.K.NoWrap,
                    padding: {
                        x: 2,
                        y: 1
                    }
                }, m.createElement(_.U, {
                    padding: {
                        right: 4
                    }
                }, m.createElement("strong", null, Object(f.d)("Get {minBitsCount} or more Bits by watching short ads", {
                    minBitsCount: e.minPayout
                }, "Bits--WatchAdOffer"))), m.createElement(_.U, {
                    flexShrink: 0,
                    display: _.H.Flex,
                    flexDirection: _.J.Column,
                    alignItems: _.c.End
                }, m.createElement(_.u, {
                    type: _.z.Hollow,
                    "data-a-target": "bits-watch-ad",
                    onClick: e.onWatchAdClick,
                    disabled: e.disableWatchAd
                }, Object(f.d)("Watch Ad", "Bits--WatchAdOffer")), t && m.createElement(_.U, {
                    className: "bits-buy-card__sub-text",
                    alignSelf: _.d.Stretch,
                    textAlign: _._23.Center,
                    margin: {
                        top: .5
                    }
                }, t)))
            },
            F = /version\/([\w\.]+).+?(mobile\s?safari|safari)/i,
            T = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        enableWatchAd: !0
                    }, t
                }
                return u.__extends(t, e), t.prototype.componentWillMount = function() {
                    return u.__awaiter(this, void 0, void 0, function() {
                        var e;
                        return u.__generator(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return [4, i(this.props.truexUserID)];
                                case 1:
                                    return e = t.sent(), Object(b.e)({
                                        channel: this.props.channelLogin,
                                        channelID: this.props.channelID,
                                        available: e === y.Available
                                    }), e !== y.Available && e !== y.AdBlocked && this.setState({
                                        enableWatchAd: !1
                                    }), [2]
                            }
                        })
                    })
                }, t.prototype.render = function() {
                    return F.test(navigator.userAgent) ? null : m.createElement(x, u.__assign({}, this.props, {
                        disableWatchAd: !this.state.enableWatchAd
                    }))
                }, t
            }(m.Component),
            I = n("jxGs"),
            D = n("3iBR"),
            A = n("iydZ"),
            B = n("ZJYd"),
            L = n("CFVp"),
            R = n("qe65"),
            j = (n("OLKT"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.handleBuyClick = function(e) {
                        var n = t.props.channelID || "",
                            i = Object(B.b)({
                                trackBitsCardInteraction: t.props.trackBitsCardInteraction,
                                channelID: n,
                                purchaseUrl: e.currentTarget.dataset.purchaseUrl,
                                bitsAmount: e.currentTarget.dataset.bitsAmount,
                                closeAllBits: t.props.closeAllBits,
                                location: t.props.location
                            });
                        i && (t.props.onBuyPopupClose(i), t.props.onClose())
                    }, t
                }
                return u.__extends(t, e), t.prototype.render = function() {
                    if (this.props.offer.type === I.a) {
                        if (!this.props.channelLogin) return null;
                        var e = this.props.currentUserSHA || "";
                        return m.createElement(T, {
                            key: "wateb",
                            minPayout: this.props.offer.bits,
                            onWatchAdClick: this.props.handleWatchAdClick,
                            truexUserID: e,
                            channelID: this.props.channelID || "",
                            channelLogin: this.props.channelLogin
                        })
                    }
                    var t = null;
                    Object(B.c)(this.props.offer) ? t = m.createElement(_.U, {
                        className: "bits-buy-card-offer-row__bonus-text bits-buy-card-offer-row__bonus-text-headline"
                    }, m.createElement(_._22, {
                        type: _._27.Strong,
                        fontSize: _.L.Size6
                    }, Object(f.d)("Special Offer: 1st Time Buyers", "Bits--BuyCard"))) : Object(B.d)(this.props.offer) && null !== this.props.offer.promotion && this.props.offer.promotion.id === I.c && (t = m.createElement(_.U, {
                        className: "bits-buy-card-offer-row__bonus-text bits-buy-card-offer-row__bonus-text-headline"
                    }, m.createElement(_._22, {
                        type: _._27.Strong,
                        fontSize: _.L.Size6
                    }, Object(f.d)("Flash Sale: Now thru Nov. 27!", "Bits--BuyCard"))));
                    var n = null;
                    this.props.offer.discount && (n = m.createElement("div", {
                        className: "bits-buy-card-offer-row__sub-text"
                    }, Object(f.d)("{percentOff,number,percent} discount", {
                        percentOff: this.props.offer.discount
                    }, "Bits--BuyCard")));
                    var i = null;
                    (Object(B.c)(this.props.offer) || Object(B.e)(this.props.offer)) && (i = m.createElement("div", {
                        className: "bits-buy-card-offer-row__sub-text"
                    }, Object(f.d)("one per account", "Bits--BuyCard")));
                    var a = this.props.isLastRow ? _._18 : _.U;
                    return m.createElement(a, {
                        className: "bits-buy-card-offer-row",
                        flexShrink: 0,
                        display: _.H.Flex,
                        justifyContent: _.T.Center,
                        borderBottom: this.props.isLastRow,
                        flexDirection: _.J.Column,
                        padding: {
                            x: 2,
                            y: 1
                        }
                    }, t, m.createElement(_.U, {
                        display: _.H.Flex,
                        justifyContent: _.T.Between,
                        alignItems: _.c.Center
                    }, m.createElement(_.U, {
                        flexGrow: 1
                    }, m.createElement(_._22, {
                        type: _._27.H5,
                        color: _.F.Base,
                        bold: !0
                    }, this.props.offer.bits, " Bits"), this.getAvailableTiers(this.props.offer.bits)), m.createElement(_.U, {
                        flexShrink: 0,
                        display: _.H.Flex,
                        flexDirection: _.J.Column,
                        alignItems: _.c.End
                    }, m.createElement(_.u, {
                        onClick: this.handleBuyClick,
                        "data-purchase-url": this.props.offer.url,
                        "data-bits-amount": this.props.offer.bits,
                        "data-a-target": "bits-purchase-button-" + this.props.offer.bits
                    }, this.props.offer.price), (n || i) && m.createElement(_.U, {
                        alignSelf: _.d.Stretch,
                        textAlign: _._23.Right,
                        margin: {
                            top: .5
                        }
                    }, n, i))))
                }, t.prototype.getAvailableTiers = function(e) {
                    var t = this.props.bitsConfig.indexedActions[D.f];
                    t || (t = Object(L.b)());
                    var n = t.orderedTiers.filter(function(t) {
                        return t.bits <= e
                    }).reverse();
                    return m.createElement(_.U, {
                        padding: {
                            top: .5
                        },
                        className: "bits-buy-card-offer-row__tier-bits-images"
                    }, n.map(function(e) {
                        return m.createElement(R.a, {
                            key: e.bits,
                            sources: Object(A.b)(e, 2, !1)
                        })
                    }))
                }, t
            }(m.Component)),
            P = (n("sgUC"), function(e) {
                var t = [],
                    n = [],
                    i = null;
                return e.offers.forEach(function(a, r) {
                    var s = m.createElement(j, {
                            key: a.id,
                            offer: a,
                            isLastRow: r + 1 < e.offers.length,
                            bitsConfig: e.bitsConfig,
                            channelID: e.channelID,
                            channelLogin: e.channelLogin,
                            currentUserSHA: e.currentUserSHA,
                            location: e.location,
                            onClose: e.onClose,
                            onBuyPopupClose: e.onBuyPopupClose,
                            handleWatchAdClick: e.handleWatchAdClick,
                            closeAllBits: e.closeAllBits,
                            trackBitsCardInteraction: e.trackBitsCardInteraction
                        }),
                        o = Object(B.d)(a),
                        l = Object(B.c)(a),
                        c = a.type === I.a;
                    l && !e.hidePromos ? t.push(s) : o && !l ? t.push(s) : c && !e.hideWateb ? i = s : c || o || n.push(s)
                }), e.fullsize ? m.createElement(_.U, {
                    className: "bits-buy-card-offers__full-size",
                    flexGrow: 1,
                    flexWrap: _.K.NoWrap,
                    display: _.H.Flex,
                    flexDirection: _.J.Column
                }, i, t, n) : m.createElement(w.b, {
                    className: "bits-buy-card-offers__scroll-view"
                }, m.createElement(_.U, {
                    flexGrow: 1,
                    flexWrap: _.K.NoWrap,
                    display: _.H.Flex,
                    flexDirection: _.J.Column
                }, i, t, n))
            }),
            H = function(e) {
                var t = null;
                e.pricesIncludeVAT && (t = m.createElement(_._22, {
                    italic: !0,
                    type: _._27.P,
                    color: _.F.Alt
                }, Object(f.d)("Prices include VAT", "Bits--BuyCard")));
                var n = null;
                e.minBitsToCheer && e.minBitsToCheer > 1 && (n = m.createElement(_._22, {
                    color: _.F.Alt
                }, Object(f.d)("{displayName} requires {minBits} Bits to Cheer in this channel.", {
                    displayName: e.displayName,
                    minBits: e.minBitsToCheer
                }, "Bits--BuyCard")));
                var i = null;
                return void 0 !== e.bitsBalance && null !== e.bitsBalance && (i = m.createElement(_._22, {
                    color: _.F.Alt
                }, Object(f.d)("You have {totalBits} Bits", {
                    totalBits: m.createElement("strong", {
                        "data-a-target": "buy-card-bits-count"
                    }, e.bitsBalance)
                }, "Bits--BuyCard"))), m.createElement(_._18, {
                    className: "bits-buy-card-header",
                    padding: {
                        x: 1,
                        bottom: 1
                    },
                    borderBottom: !0,
                    flexShrink: 0
                }, m.createElement(_.U, {
                    margin: {
                        bottom: 1
                    }
                }, m.createElement(_._22, {
                    type: _._27.H4,
                    color: _.F.Alt
                }, Object(f.d)("Purchase Bits", "Bits--BuyCard")), t), i, n)
            },
            M = n("nrdj"),
            W = function(e) {
                return m.createElement(_.U, {
                    display: _.H.Flex,
                    flexGrow: 1,
                    flexDirection: _.J.Column,
                    alignItems: _.c.Center,
                    fullWidth: !0,
                    flexWrap: _.K.NoWrap,
                    padding: {
                        y: 1
                    }
                }, m.createElement(M.a, {
                    prefix: "cheer",
                    amount: e.amount,
                    bitsConfig: e.bitsConfig
                }), m.createElement(_.U, {
                    display: _.H.Flex,
                    padding: {
                        top: 1
                    },
                    flexGrow: 1,
                    flexDirection: _.J.Column,
                    alignItems: _.c.Center,
                    flexWrap: _.K.NoWrap
                }, m.createElement(_._22, {
                    type: _._27.H4,
                    bold: !0
                }, Object(f.d)("You got {bitsAmount,number} Bits!", {
                    bitsAmount: e.amount
                }, "Bits--WatchAdAward")), m.createElement(_.P, {
                    padding: {
                        top: 1
                    }
                }, m.createElement(_._22, {
                    color: _.F.Alt2
                }, Object(f.d)("{bitsAmount,number} Bits were added to your Bit inventory.", {
                    bitsAmount: e.amount
                }, "Bits--WatchAdAward"), m.createElement("br", null), Object(f.d)("You can use these Bits to Cheer!", "Bits--WatchAdAward")))), m.createElement(_.U, {
                    display: _.H.Flex,
                    padding: {
                        x: 1,
                        top: 3
                    },
                    alignSelf: _.d.Stretch,
                    justifyContent: _.T.Between
                }, m.createElement(_.u, {
                    onClick: e.onStartCheering
                }, Object(f.d)("Start Cheering", "Bits--WatchAdAward")), m.createElement(_.u, {
                    type: _.z.Hollow,
                    onClick: e.onWatchAnother,
                    disabled: !e.hasAdAvailable
                }, Object(f.d)("Watch Another", "Bits--WatchAdAward"))))
            },
            V = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        hasAdAvailable: !0
                    }, t
                }
                return u.__extends(t, e), t.prototype.componentWillMount = function() {
                    return u.__awaiter(this, void 0, void 0, function() {
                        return u.__generator(this, function(e) {
                            switch (e.label) {
                                case 0:
                                    return [4, i(this.props.truexUserID)];
                                case 1:
                                    return e.sent() !== y.Available && this.setState({
                                        hasAdAvailable: !1
                                    }), [2]
                            }
                        })
                    })
                }, t.prototype.render = function() {
                    return m.createElement(W, u.__assign({}, this.props, {
                        hasAdAvailable: this.state.hasAdAvailable
                    }))
                }, t
            }(m.Component),
            q = (n("q8Cw"), function(e) {
                var t = Object(f.d)("Something's wrong!", "Bits--WatchAdError"),
                    n = Object(f.d)("Something went wrong. Wait a while and try again.", "Bits--WatchAdError"),
                    i = "adserrorgeneric";
                switch (e.type) {
                    case s.Adblock:
                        i = "adserroradblock", n = Object(f.d)("We can't load this Ad, probably because Ad Blocking software is running. To watch an ad and get Bits, please disable all Ad Blocking software.", "Bits--WatchAdError");
                        break;
                    case s.LimitReached:
                        i = "adserrorlimit", t = Object(f.d)("Ad Limit Reached", "Bits--WatchAdError"), n = Object(f.d)("That's all the Ads we have for now. Try again tomorrow!", "Bits--WatchAdError");
                        break;
                    case s.ExitEarly:
                        n = Object(f.d)("To get Bits, you must view and interact with the Ad for the minimum amount of time.", "Bits--WatchAdError")
                }
                var a = m.createElement(_.U, {
                    className: "watch-ad-error__footer",
                    display: _.H.Flex,
                    padding: {
                        top: 2
                    },
                    alignSelf: _.d.Stretch,
                    justifyContent: _.T.Center
                }, m.createElement(_.u, {
                    onClick: e.onTryAgain
                }, Object(f.d)("Try Again", "Bits--WatchAdError")));
                return e.type === s.LimitReached && (a = m.createElement(_.U, {
                    className: "watch-ad-error__footer",
                    display: _.H.Flex,
                    padding: {
                        top: 2
                    },
                    alignSelf: _.d.Stretch,
                    justifyContent: _.T.Between
                }, m.createElement(_.u, {
                    onClick: e.onClose
                }, Object(f.d)("Got It", "Bits--WatchAdError")), m.createElement(_.u, {
                    onClick: e.onTryAgain,
                    type: _.z.Hollow
                }, Object(f.d)("Buy Bits", "Bits--WatchAdError")))), m.createElement(_.U, {
                    padding: {
                        x: 1
                    },
                    display: _.H.Flex,
                    flexGrow: 1,
                    flexDirection: _.J.Column,
                    alignItems: _.c.Center,
                    fullWidth: !0,
                    flexWrap: _.K.NoWrap
                }, m.createElement(_.U, {
                    padding: {
                        y: 2
                    }
                }, m.createElement("img", {
                    className: "watch-ad-error__error-image",
                    src: D.b + "/light/static/1/" + i + ".png"
                })), m.createElement(_.U, {
                    padding: {
                        bottom: 1
                    }
                }, m.createElement(_._22, {
                    type: _._27.H4,
                    bold: !0
                }, t)), m.createElement(_._22, {
                    color: _.F.Alt2
                }, n), a)
            }),
            G = n("aqNN");
        n("6Rwu");
        ! function(e) {
            e[e.Inactive = 0] = "Inactive", e[e.Error = 1] = "Error", e[e.Awarded = 2] = "Awarded"
        }(U || (U = {}));
        var z = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        wateb: U.Inactive,
                        watebError: null,
                        bitsAwarded: 0
                    }, t.onBuyPopupClose = function(e) {
                        Object(O.a)(e, function() {
                            t.props.data && t.props.data.refetch()
                        })
                    }, t.onAdBitsAwarded = function(e) {
                        t.props.data && !t.props.data.loading && t.props.data.refetch(), t.setState({
                            wateb: U.Awarded,
                            bitsAwarded: e
                        })
                    }, t.handleWatchAdClick = function() {
                        return u.__awaiter(t, void 0, void 0, function() {
                            return u.__generator(this, function(e) {
                                return this.props.data && this.props.data.currentUser && this.props.data.user ? (this.props.showWatchAdModal({
                                    tuid: this.props.data.currentUser.idSHA1,
                                    onBitsAwarded: this.onAdBitsAwarded,
                                    onError: this.receiveAdErrorState,
                                    requestRef: b.c.ShowAdButton,
                                    channelID: this.props.data.user.id
                                }), [2]) : [2]
                            })
                        })
                    }, t.receiveAdErrorState = function(e) {
                        t.setState({
                            wateb: U.Error,
                            watebError: e
                        })
                    }, t.resetAdErrorState = function() {
                        t.state.wateb === U.Error && (t.setState({
                            wateb: U.Inactive
                        }), t.props.data && t.props.data.refetch())
                    }, t
                }
                return u.__extends(t, e), t.prototype.shouldComponentUpdate = function(e) {
                    return !e.adModalOpen
                }, t.prototype.render = function() {
                    var e = {
                            border: !0,
                            background: _.m.Base,
                            fullWidth: !0,
                            elevation: 3
                        },
                        t = E({
                            "bits-buy-card": !0,
                            "bits-buy-card__chat-tooltip": this.props.location === b.b.ChatTooltip
                        }),
                        n = null;
                    if (this.props.location === b.b.ChatTooltip && (n = m.createElement("button", {
                            className: "bits-buy-card__close",
                            onClick: this.props.onClose,
                            "data-a-target": "bits-buy-card-close-button"
                        }, m.createElement(_._9, {
                            asset: _._10.Close,
                            height: 11,
                            width: 11
                        }))), !this.props.data || this.props.data.loading) return m.createElement(_._18, u.__assign({
                        className: t,
                        "data-a-target": "bits-buy-card-loading",
                        display: _.H.Flex,
                        flexDirection: _.J.Column,
                        alignItems: _.c.Center,
                        justifyContent: _.T.Center,
                        textAlign: _._23.Center
                    }, e), m.createElement(_.Y, {
                        delay: 0
                    }), m.createElement(_.U, {
                        padding: {
                            top: 2
                        }
                    }, m.createElement(_._22, {
                        italic: !0
                    }, Object(f.d)("Fetching bits", "Bits--BuyCard"))));
                    if (this.props.data.error) return m.createElement(_.U, u.__assign({
                        className: E(t, "bits-buy-card--shorter"),
                        display: _.H.Flex,
                        flexDirection: _.J.Column,
                        alignItems: _.c.Center,
                        justifyContent: _.T.Center,
                        padding: 2,
                        textAlign: _._23.Center,
                        "data-a-target": "bits-buy-card-error"
                    }, e), n, m.createElement(_._22, {
                        italic: !0
                    }, Object(f.d)("Bits prices are unavailable right now. Check back again later.", "Bits--BuyCard")));
                    var i = this.renderWatebCard();
                    if (i) return m.createElement(_._18, u.__assign({
                        className: E(t, "bits-buy-card--shorter"),
                        display: _.H.Flex,
                        flexDirection: _.J.Column,
                        alignItems: _.c.Center,
                        justifyContent: _.T.Center,
                        textAlign: _._23.Center,
                        padding: 1
                    }, e), n, i);
                    var a = [];
                    this.props.data.currentUser ? a = this.props.data.currentUser.bitsOffers : this.props.data.bitsOffers && (a = this.props.data.bitsOffers);
                    var r = a.filter(function(e) {
                            return e.type === I.b
                        }).some(function(e) {
                            return e.includesVAT
                        }),
                        s = this.props.data.user ? this.props.data.user.id : "",
                        o = m.createElement(P, {
                            offers: a,
                            fullsize: this.props.fullsize,
                            hidePromos: this.props.hidePromos,
                            hideWateb: this.props.hideWateb,
                            bitsConfig: this.props.bitsConfig,
                            channelID: s,
                            channelLogin: this.props.channelLogin,
                            closeAllBits: this.props.closeAllBits,
                            currentUserSHA: this.props.data && this.props.data.currentUser && this.props.data.currentUser.idSHA1,
                            handleWatchAdClick: this.handleWatchAdClick,
                            location: this.props.location,
                            onBuyPopupClose: this.onBuyPopupClose,
                            onClose: this.props.onClose,
                            trackBitsCardInteraction: this.props.trackBitsCardInteraction
                        }),
                        l = null;
                    return this.props.location === b.b.ChatTooltip && (l = m.createElement(H, {
                        bitsBalance: this.props.data && this.props.data.currentUser && this.props.data.currentUser.bitsBalance,
                        displayName: this.props.data && this.props.data.user && this.props.data.user.displayName || this.props.channelLogin || "",
                        minBitsToCheer: this.props.data && this.props.data.user && this.props.data.user.cheer && this.props.data.user.cheer.settings.cheerMinimumBits,
                        pricesIncludeVAT: r
                    })), m.createElement(_._18, u.__assign({
                        className: t,
                        padding: {
                            top: 1
                        },
                        display: _.H.Flex,
                        flexDirection: _.J.Column,
                        "data-a-target": "bits-buy-card"
                    }, e), n, l, o)
                }, t.prototype.renderWatebCard = function() {
                    if (this.props.data && this.props.data.currentUser) switch (this.state.wateb) {
                        case U.Awarded:
                            return m.createElement(V, {
                                bitsConfig: this.props.bitsConfig,
                                amount: this.state.bitsAwarded,
                                onStartCheering: this.props.onClose,
                                onWatchAnother: this.handleWatchAdClick,
                                truexUserID: this.props.data.currentUser.idSHA1
                            });
                        case U.Error:
                            return m.createElement(q, {
                                type: this.state.watebError || s.Unknown,
                                onClose: this.props.onClose,
                                onTryAgain: this.resetAdErrorState
                            });
                        default:
                            return !1
                    }
                }, t = u.__decorate([Object(g.a)(G, {
                    name: "data",
                    options: function(e) {
                        return {
                            variables: {
                                channelLogin: e.channelLogin,
                                withChannel: !!e.channelLogin,
                                isLoggedIn: e.isLoggedIn
                            }
                        }
                    }
                })], t)
            }(m.Component),
            K = Object(o.a)(a, r)(z);
        n.d(t, !1, function() {
            return a
        }), n.d(t, !1, function() {
            return r
        }), n.d(t, "a", function() {
            return K
        })
    },
    WfBs: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "OnsiteNotifications_ReadNotifications"
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
                                value: "ReadNotificationsInput"
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
                            value: "readNotifications"
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
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "notifications"
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
                                            value: "isRead"
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
            }],
            loc: {
                start: 0,
                end: 148
            }
        };
        n.loc.source = {
            body: "mutation OnsiteNotifications_ReadNotifications($input: ReadNotificationsInput!) {\nreadNotifications(input: $input) {\nnotifications {\nid\nisRead\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    XF1M: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "OnsiteNotifications_DeleteNotification"
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
                                value: "DeleteNotificationInput"
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
                            value: "deleteNotification"
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
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "notification"
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
                                    }]
                                }
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 143
            }
        };
        n.loc.source = {
            body: "mutation OnsiteNotifications_DeleteNotification($input: DeleteNotificationInput!) {\ndeleteNotification(input: $input) {\nnotification {\nid\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    YSdr: function(e, t) {},
    ZJYd: function(e, t, n) {
        "use strict";

        function i(e) {
            return e.type === s.b && null !== e.promotion && !!e.promotion
        }
        t.c = function(e) {
            return e.type !== s.a && i(e) && null !== e.promotion && e.promotion.type === s.d
        }, t.e = function(e) {
            return e.type !== s.a && i(e) && null !== e.promotion && e.promotion.type === s.e
        }, t.d = i, t.a = function(e) {
            var t = 0,
                n = 0,
                i = 0;
            return e.forEach(function(e) {
                e.cheerAmount && (t = Math.max(t, e.cheerAmount), n = n ? Math.min(n, e.cheerAmount) : e.cheerAmount, i += e.cheerAmount)
            }), {
                total: i,
                smallestCheermote: n,
                largestCheermote: t
            }
        }, t.f = function(e) {
            var t = e.messageBits,
                n = t.total,
                i = t.largestCheermote,
                r = t.smallestCheermote;
            if (n) {
                var s = {
                    cheerAboveMaxBitsPerEmote: i > o.l,
                    totalAboveBalance: n > e.balance,
                    totalBelowCheerMinimum: n < e.cheerMinimumBits,
                    totalBelowEmoteMinimum: r < e.emoteMinimumBits,
                    inputLongerThanMaxBitsMessage: e.inputValue.length > o.k,
                    inputStartsWithCommand: e.inputValue.startsWith("/")
                };
                if (Object.keys(s).some(function(e) {
                        return s[e]
                    })) return a.__assign({
                    canSpend: !1
                }, s)
            }
            return {
                canSpend: !0
            }
        }, t.b = function(e) {
            var t = e.purchaseUrl;
            if (t) {
                e.trackBitsCardInteraction(Object(l.d)(e.bitsAmount), {
                    location: e.location
                });
                var n = t.replace("{channelID}", e.channelID),
                    i = window.open(n, "Twitch", "width=1024,height=600,scrollbars=yes");
                return !i || Object(r.a)() ? (e.closeAllBits && e.closeAllBits(), void e.trackBitsCardInteraction(l.a.CloseCard, {
                    location: e.location
                })) : (i.focus(), i)
            }
        };
        var a = n("TToO"),
            r = n("Ouuk"),
            s = n("jxGs"),
            o = n("3iBR"),
            l = n("/LBW")
    },
    adox: function(e, t) {},
    afun: function(e, t) {},
    annQ: function(e, t, n) {
        function i(e) {
            return e.filter(function(e) {
                if ("FragmentDefinition" !== e.kind) return !0;
                var t = e.name.value;
                return !r[t] && (r[t] = !0, !0)
            })
        }
        var a = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "GetBitsButton_Bits"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "isLoggedIn"
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
                            value: "withChannel"
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
                            value: "bitsOffers"
                        },
                        arguments: [],
                        directives: [{
                            kind: "Directive",
                            name: {
                                kind: "Name",
                                value: "skip"
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
                                        value: "isLoggedIn"
                                    }
                                }
                            }]
                        }],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "FragmentSpread",
                                name: {
                                    kind: "Name",
                                    value: "bitsOffersFragment"
                                },
                                directives: []
                            }]
                        }
                    }, {
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "currentUser"
                        },
                        arguments: [],
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
                                        value: "isLoggedIn"
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
                                    value: "idSHA1"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "bitsBalance"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "bitsOffers"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "FragmentSpread",
                                        name: {
                                            kind: "Name",
                                            value: "bitsOffersFragment"
                                        },
                                        directives: []
                                    }]
                                }
                            }]
                        }
                    }, {
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
                                    value: "login"
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
                                        value: "withChannel"
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
                                kind: "FragmentSpread",
                                name: {
                                    kind: "Name",
                                    value: "cheer"
                                },
                                directives: []
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 748
            }
        };
        a.loc.source = {
            body: '# Documentation about how to use GraphQL is located in the Data Access Guide:\n# https://git-aws.internal.justin.tv/pages/twilight/twilight-docs/docs/guides/data-access.html\n# Additionally use the GraphQL explorer (https://api.twitch.tv/gql/explore) to browse\n# available GraphQL data and construct your query.\n#import "twilight/features/bits/models/bits-offers-fragment.gql"\n#import "twilight/features/chat/models/cheer-fragment.gql"\nquery GetBitsButton_Bits($isLoggedIn: Boolean! $withChannel: Boolean! $login: String!) {\nbitsOffers @skip(if: $isLoggedIn) {\n...bitsOffersFragment\n}\ncurrentUser @include(if: $isLoggedIn) {\nid\nidSHA1\nbitsBalance\nbitsOffers {\n...bitsOffersFragment\n}\n}\nuser(login: $login) @include(if: $withChannel) {\nid\n...cheer\n}\n}',
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        var r = {};
        a.definitions = a.definitions.concat(i(n("OcEY").definitions)), a.definitions = a.definitions.concat(i(n("576g").definitions)), e.exports = a
    },
    aqNN: function(e, t, n) {
        var i = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "Bits_BuyCard_Offers"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "withChannel"
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
                            value: "isLoggedIn"
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
                            value: "channelLogin"
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
                            value: "bitsOffers"
                        },
                        arguments: [],
                        directives: [{
                            kind: "Directive",
                            name: {
                                kind: "Name",
                                value: "skip"
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
                                        value: "isLoggedIn"
                                    }
                                }
                            }]
                        }],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "FragmentSpread",
                                name: {
                                    kind: "Name",
                                    value: "bitsOffersFragment"
                                },
                                directives: []
                            }]
                        }
                    }, {
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "currentUser"
                        },
                        arguments: [],
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
                                        value: "isLoggedIn"
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
                                    value: "idSHA1"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "bitsBalance"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "bitsOffers"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "FragmentSpread",
                                        name: {
                                            kind: "Name",
                                            value: "bitsOffersFragment"
                                        },
                                        directives: []
                                    }]
                                }
                            }]
                        }
                    }, {
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
                                    value: "channelLogin"
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
                                        value: "withChannel"
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
                                    value: "cheer"
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
                                            value: "settings"
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
                                                    value: "cheerMinimumBits"
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
                end: 440
            }
        };
        i.loc.source = {
            body: '#import "twilight/features/bits/models/bits-offers-fragment.gql"\nquery Bits_BuyCard_Offers($withChannel: Boolean! $isLoggedIn: Boolean! $channelLogin: String!) {\nbitsOffers @skip(if: $isLoggedIn) {\n...bitsOffersFragment\n}\ncurrentUser @include(if: $isLoggedIn) {\nid\nidSHA1\nbitsBalance\nbitsOffers {\n...bitsOffersFragment\n}\n}\nuser(login: $channelLogin) @include(if: $withChannel) {\nid\ndisplayName\ncheer {\nid\nsettings {\ncheerMinimumBits\n}\n}\n}\n}',
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        var a = {};
        i.definitions = i.definitions.concat(function(e) {
            return e.filter(function(e) {
                if ("FragmentDefinition" !== e.kind) return !0;
                var t = e.name.value;
                return !a[t] && (a[t] = !0, !0)
            })
        }(n("OcEY").definitions)), e.exports = i
    },
    bkpq: function(e, t, n) {
        "use strict";

        function i(e) {
            var t = new Map,
                n = new Map,
                i = new Map,
                r = new Map;
            return e.images.forEach(function(e) {
                "LIGHT" === e.theme ? e.isAnimated ? n.set(e.dpiScale, e.url) : t.set(e.dpiScale, e.url) : e.isAnimated ? r.set(e.dpiScale, e.url) : i.set(e.dpiScale, e.url)
            }), a.__assign({
                indexedImages: {
                    LIGHT: {
                        static: t,
                        animated: n
                    },
                    DARK: {
                        static: i,
                        animated: r
                    }
                }
            }, e)
        }
        t.a = function(e) {
            var t = [],
                n = {};
            return e.forEach(function(e) {
                var o = e.tiers.map(function(e) {
                    return i(e)
                });
                "Cheer" === e.prefix && o.push(function() {
                    var e = ["DARK", "LIGHT"],
                        t = ["static", "animated"],
                        n = [];
                    return [1, 1.5, 2, 3, 4].forEach(function(i) {
                        e.forEach(function(e) {
                            t.forEach(function(t) {
                                n.push({
                                    url: s.a + "/cheer/" + e.toLowerCase() + "/" + t + "/100000/" + i + "." + ("static" === t ? "png" : "gif"),
                                    isAnimated: "animated" === t,
                                    theme: e,
                                    dpiScale: i
                                })
                            })
                        })
                    }), i({
                        id: "Cheer:100000",
                        bits: 1e5,
                        color: s.e[r.a.Yellow],
                        images: n
                    })
                }()), o.sort(function(e, t) {
                    return t.bits - e.bits
                });
                var l = a.__assign({}, e, {
                    indexedTiers: new Map(o.map(function(e) {
                        return [e.bits, e]
                    })),
                    orderedTiers: o
                });
                t.push(l), n[l.prefix.toLowerCase()] = l
            }), {
                indexedActions: n,
                orderedActions: t
            }
        };
        var a = n("TToO"),
            r = n("I89S"),
            s = n("3iBR")
    },
    c8sn: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "OnsiteNotifications_Summary"
                },
                variableDefinitions: [],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        alias: null,
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
                                    value: "notifications"
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
                                            value: "summary"
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
                                                    value: "unseenCount"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: null
                                            }, {
                                                kind: "Field",
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "lastSeenAt"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: null
                                            }]
                                        }
                                    }]
                                }
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "incomingFriendRequests"
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
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "totalUnreadCount"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
                                    }, {
                                        kind: "Field",
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "newestEdge"
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
                                                    value: "createdAt"
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
                end: 188
            }
        };
        n.loc.source = {
            body: "query OnsiteNotifications_Summary {\ncurrentUser {\nid\nnotifications {\nsummary {\nunseenCount\nlastSeenAt\n}\n}\nincomingFriendRequests(first: 1) {\ntotalUnreadCount\nnewestEdge {\ncreatedAt\n}\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    cLQP: function(e, t) {},
    czpb: function(e, t, n) {
        "use strict";
        var i = n("6sO2"),
            a = n("Ejve"),
            r = n("MSvX");
        t.a = function(e) {
            return i.b.get(r.a, !1) || i.a.buildType !== a.a.Production ? "string" == typeof e ? e : e.pathname || "" : "string" == typeof e ? s + e : s + e.pathname
        }, t.b = function() {
            return !i.b.get(r.a, !1) && i.a.buildType === a.a.Production
        };
        var s = "https://www.twitch.tv"
    },
    e2wA: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "Current_User"
                },
                variableDefinitions: [],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        alias: null,
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
                                    value: "hasPrime"
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
                end: 50
            }
        };
        n.loc.source = {
            body: "query Current_User {\ncurrentUser {\nid\nhasPrime\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    eY4D: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "Prime_PrimeOfferList_PrimeOffers"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "dateOverride"
                        }
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "Time"
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
                            value: "primeOffers"
                        },
                        arguments: [{
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "dateOverride"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "dateOverride"
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
                                    value: "title"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "imageURL"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "claimInstructions"
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
                                    value: "deliveryMethod"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "priority"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "content"
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
                                            value: "game"
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
                                                    value: "name"
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
                                            value: "externalURL"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
                                    }, {
                                        kind: "Field",
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "publisher"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
                                    }, {
                                        kind: "Field",
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "categories"
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
                                            value: "hasEntitlement"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
                                    }, {
                                        kind: "Field",
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "claimData"
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
            }],
            loc: {
                start: 0,
                end: 276
            }
        };
        n.loc.source = {
            body: "query Prime_PrimeOfferList_PrimeOffers($dateOverride: Time) {\nprimeOffers(dateOverride: $dateOverride) {\nid\ntitle\nimageURL\nclaimInstructions\ndescription\ndeliveryMethod\npriority\ncontent {\ngame {\nid\nname\n}\nexternalURL\npublisher\ncategories\n}\nself {\nhasEntitlement\nclaimData\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    el3o: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "claimPrimeOffer"
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
                                value: "ClaimPrimeOfferInput"
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
                            value: "claimPrimeOffer"
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
                                            value: "claimData"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
                                    }, {
                                        kind: "Field",
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "hasEntitlement"
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
            }],
            loc: {
                start: 0,
                end: 128
            }
        };
        n.loc.source = {
            body: "mutation claimPrimeOffer($input: ClaimPrimeOfferInput!) {\nclaimPrimeOffer(input: $input) {\nself {\nclaimData\nhasEntitlement\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    f8UT: function(e, t) {},
    fHoP: function(e, t) {},
    gIPD: function(e, t, n) {
        e.exports = n.p + "assets/friend_requests-aec9595d7e19764bc23d982c8c0f43d9.png"
    },
    iMOk: function(e, t, n) {
        "use strict";

        function i(e) {
            var t, n = Object(r.d)("{bitsAmount} Bits", {
                bitsAmount: e.count.toString()
            }, "Bits--BitsCount");
            if (e.withImage) {
                var i = e.bitsConfig.indexedActions[o.f];
                i || (i = Object(c.b)());
                var u = i.orderedTiers.find(function(t) {
                    return t.bits <= e.count
                });
                if (u) {
                    var m = Object(l.b)(u);
                    return void 0 !== e.themeOverride && (e.themeOverride === s.a.Light ? m.dark = m.light : m.light = m.dark), t = a.createElement(d.a, {
                        className: "bits-count--img",
                        sources: m
                    }), a.createElement("strong", {
                        className: "bits-count",
                        "data-a-target": "bits-count"
                    }, a.createElement("span", null, t, " ", e.withText ? n : ""))
                }
            }
            return a.createElement("strong", {
                className: "bits-count",
                "data-a-target": "bits-count"
            }, a.createElement("span", null, n))
        }
        var a = n("U7vG"),
            r = n("6sO2"),
            s = n("NXs7"),
            o = n("3iBR"),
            l = n("iydZ"),
            c = n("CFVp"),
            d = n("qe65");
        n("1pvm");
        n.d(t, "a", function() {
            return i
        })
    },
    ilq7: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "TopNav_User_UpdateIsSharingActivity"
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
                                value: "UpdateIsSharingActivityInput"
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
                            value: "updateIsSharingActivity"
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
                                alias: null,
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
                                            value: "settings"
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
                                                    value: "isSharingActivity"
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
                end: 173
            }
        };
        n.loc.source = {
            body: "mutation TopNav_User_UpdateIsSharingActivity($input: UpdateIsSharingActivityInput!) {\nupdateIsSharingActivity(input: $input) {\nuser {\nid\nsettings {\nisSharingActivity\n}\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    "j7/Y": function(e, t, n) {
        "use strict";

        function i(e) {
            return function(t) {
                var n = function(n) {
                    function i(t) {
                        var i = n.call(this, t) || this;
                        return i.tracked = !1, i.referenceTracking = {}, i.trackPageview = function() {
                            if (!(i.tracked || e.skip && e.skip(i.props))) {
                                i.tracked = !0, l.n.adBlockSentinel.pageTransition();
                                var t = {};
                                "function" == typeof e.properties ? t = e.properties(i.props) : e.properties && (t = a.__assign({}, e.properties));
                                var n = a.__assign({}, i.props);
                                n.location && n.location.state && (t.medium = n.location.state.medium, t.content = n.location.state.content, t.content_index = n.location.state.content_index);
                                var r = i.referenceTracking,
                                    s = r.content,
                                    o = r.medium,
                                    c = r.content_index;
                                l.n.tracking.trackPageview(a.__assign({
                                    content: s,
                                    medium: o,
                                    content_index: c,
                                    location: e.location
                                }, t))
                            }
                        }, l.i.debug("pageViewTracking", e), t.rootLatencyTracker ? t.rootLatencyTracker.setLocation(e.location) : l.i.warn("No latency tracker exists! This means no data will be sent to Spade.", e), i
                    }
                    return a.__extends(i, n), i.prototype.componentDidMount = function() {
                        var e = this;
                        this.referenceTracking = this.stripTTParams(this.props.history.location), this.trackPageview(), this.props.history.listen(function(t, n) {
                            "REPLACE" !== n && (e.tracked = !1, e.referenceTracking = {})
                        })
                    }, i.prototype.componentDidUpdate = function() {
                        this.trackPageview()
                    }, i.prototype.render = function() {
                        return s.createElement(t, a.__assign({}, this.props))
                    }, i.prototype.stripTTParams = function(e) {
                        var t = "" !== e.search ? r.parse(e.search) : {},
                            n = {
                                content: t.tt_content,
                                content_index: t.tt_content_index,
                                medium: t.tt_medium
                            };
                        if (delete t.tt_content, delete t.tt_content_index, delete t.tt_medium, n.medium || n.content) {
                            var i = "",
                                a = r.stringify(t);
                            a.length > 0 && (i = "?" + a), this.props.history.replace({
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
        var a = n("TToO"),
            r = n("OAwv"),
            s = n("U7vG"),
            o = n("F8kA"),
            l = n("6sO2");
        n.d(t, "a", function() {
            return i
        })
    },
    jF7o: function(e, t, n) {
        "use strict";
        t.a = function(e, t) {
            if (e) var n = setInterval(function() {
                var i = !1,
                    a = !1;
                try {
                    i = e.closed, a = !!e.success
                } catch (e) {}
                if (i || a) {
                    t(a);
                    try {
                        e.close()
                    } catch (e) {}
                    clearInterval(n)
                }
            }, 500);
            else i.i.warn("[onPopupClose] Attempted to observe a window that failed to open.")
        };
        var i = n("6sO2")
    },
    jxGs: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return i
        }), n.d(t, "b", function() {
            return a
        }), n.d(t, "d", function() {
            return r
        }), n.d(t, "e", function() {
            return s
        }), n.d(t, "c", function() {
            return o
        });
        var i = "AD",
            a = "BUNDLE",
            r = "first_time_purchase",
            s = "single_purchase",
            o = "black_friday_2017"
    },
    kOMe: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "ChannelPage_ChannelHeader"
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
                                    value: "login"
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
                                    value: "stream"
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
                                    }]
                                }
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "videos"
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
                                            value: "totalCount"
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
                                    value: "followers"
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
                                            value: "totalCount"
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
                                    value: "follows"
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
                                            value: "totalCount"
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
                                    value: "cheer"
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
                                    }]
                                }
                            }]
                        }
                    }, {
                        kind: "Field",
                        alias: null,
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
                                            value: "isStaff"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
                                    }, {
                                        kind: "Field",
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "isSiteAdmin"
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
            }],
            loc: {
                start: 0,
                end: 290
            }
        };
        n.loc.source = {
            body: "query ChannelPage_ChannelHeader($login: String!) {\nuser(login: $login) {\nid\nlogin\ndisplayName\nprofileImageURL(width: 70)\nroles {\nisPartner\n}\nstream {\nid\n}\nvideos {\ntotalCount\n}\nfollowers {\ntotalCount\n}\nfollows {\ntotalCount\n}\ncheer {\nid\n}\n}\ncurrentUser {\nid\nroles {\nisStaff\nisSiteAdmin\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    kVlN: function(e, t, n) {
        "use strict";
        var i = n("RH2O"),
            a = n("TToO"),
            r = n("KSGD"),
            s = n("U7vG"),
            o = n("DtWM"),
            l = n("cuT/"),
            c = n("LiYP"),
            d = n("TP6L"),
            u = n("hfrE"),
            m = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {}, t.resizeAnimationFrame = 0, t.collapseOnBreakpoint = function() {
                        var e = window.innerWidth,
                            n = {
                                sideNavCollapsedFromCSS: e < c.d,
                                rightColumnCollapsedFromCSS: e < l.b
                            };
                        t.state.sideNavCollapsedFromCSS === n.sideNavCollapsedFromCSS && t.state.rightColumnCollapsedFromCSS === n.rightColumnCollapsedFromCSS || t.setState(n), t.resizeAnimationFrame = 0
                    }, t.handleWindowResize = function() {
                        t.resizeAnimationFrame || (t.resizeAnimationFrame = requestAnimationFrame(t.collapseOnBreakpoint))
                    }, t.onInnerChildrenResize = function(e, n) {
                        t.context.setRootScrollableOffsetHeight(n / 10 + "rem")
                    }, t
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    window.addEventListener("resize", this.handleWindowResize)
                }, t.prototype.componentWillUnmount = function() {
                    window.removeEventListener("resize", this.handleWindowResize), this.context.resetRootScrollableOffsetHeight(), this.resizeAnimationFrame && cancelAnimationFrame(this.resizeAnimationFrame)
                }, t.prototype.render = function() {
                    var e = document.querySelector("." + u.b),
                        t = 0,
                        n = 0;
                    e ? (t = e.getBoundingClientRect().left, n = window.innerWidth - e.getBoundingClientRect().right) : n = window.innerWidth;
                    var i = {
                        position: "fixed",
                        top: this.props.topNavNotificationBarEnabled ? d.b : d.a,
                        left: t,
                        right: n,
                        zIndex: 500
                    };
                    return s.createElement("div", {
                        style: i
                    }, s.createElement(o.a, {
                        onResize: this.onInnerChildrenResize
                    }), this.props.children)
                }, t.contextTypes = {
                    setRootScrollableOffsetHeight: r.func,
                    resetRootScrollableOffsetHeight: r.func
                }, t
            }(s.Component),
            p = Object(i.a)(function(e) {
                return {
                    sideNavCollapsed: !e.ui.sideNavExpanded,
                    rightColumnCollapsed: !e.ui.rightColumnExpanded,
                    topNavNotificationBarEnabled: e.ui.topNavNotificationBarEnabled
                }
            })(m);
        n.d(t, "a", function() {
            return p
        })
    },
    lGVF: function(e, t) {},
    mi6k: function(e, t, n) {
        "use strict";

        function i(e, t) {
            return (t -= e.toString().length) > 0 ? new Array(t + (/\./.test(e.toString()) ? 2 : 1)).join("0") + e : e.toString()
        }
        t.a = function(e, t) {
            var n = Math.floor(e % 60),
                a = Math.floor(e % 3600 / 60),
                r = Math.floor(e / 3600);
            return t && t.zeroPadAll ? i(r, 2) + ":" + i(a, 2) + ":" + i(n, 2) : r ? r + ":" + i(a, 2) + ":" + i(n, 2) : a + ":" + i(n, 2)
        }
    },
    mlL3: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "CollectionsPage_UserAndCurrentUser"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "ownerLogin"
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
                }, {
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
                    },
                    defaultValue: null
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
                                    value: "ownerLogin"
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
                                    value: "collections"
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
                                }],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        alias: null,
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
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "cursor"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: null
                                            }, {
                                                kind: "Field",
                                                alias: null,
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
                                                            value: "title"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: null
                                                    }, {
                                                        kind: "Field",
                                                        alias: null,
                                                        name: {
                                                            kind: "Name",
                                                            value: "items"
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
                                                                alias: null,
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "totalCount"
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
                                                            value: "viewCount"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: null
                                                    }, {
                                                        kind: "Field",
                                                        alias: null,
                                                        name: {
                                                            kind: "Name",
                                                            value: "thumbnailURL"
                                                        },
                                                        arguments: [{
                                                            kind: "Argument",
                                                            name: {
                                                                kind: "Name",
                                                                value: "width"
                                                            },
                                                            value: {
                                                                kind: "IntValue",
                                                                value: "320"
                                                            }
                                                        }, {
                                                            kind: "Argument",
                                                            name: {
                                                                kind: "Name",
                                                                value: "height"
                                                            },
                                                            value: {
                                                                kind: "IntValue",
                                                                value: "180"
                                                            }
                                                        }],
                                                        directives: [],
                                                        selectionSet: null
                                                    }]
                                                }
                                            }]
                                        }
                                    }, {
                                        kind: "Field",
                                        alias: null,
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
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "hasNextPage"
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
                            value: "currentUser"
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
                                            value: "isStaff"
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
            }],
            loc: {
                start: 0,
                end: 365
            }
        };
        n.loc.source = {
            body: "query CollectionsPage_UserAndCurrentUser($ownerLogin: String! $limit: Int $cursor: Cursor) {\nuser(login: $ownerLogin) {\nid\nlogin\ndisplayName\ncollections(first: $limit after: $cursor) {\nedges {\ncursor\nnode {\nid\ntitle\nitems(first: 1) {\ntotalCount\n}\nviewCount\nthumbnailURL(width: 320 height: 180)\n}\n}\npageInfo {\nhasNextPage\n}\n}\n}\ncurrentUser {\nid\nroles {\nisStaff\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    nFc2: function(e, t) {},
    nmDn: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "UserProfileEditor"
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
                                    value: "login"
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
                                directives: [],
                                selectionSet: null
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 104
            }
        };
        n.loc.source = {
            body: "query UserProfileEditor($login: String!) {\nuser(login: $login) {\nid\nlogin\nprofileImageURL(width: 70)\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    nrdj: function(e, t, n) {
        "use strict";
        var i, a = n("HW6M"),
            r = n("U7vG"),
            s = n("iydZ"),
            o = n("CFVp"),
            l = n("qe65"),
            c = n("Odds");
        n("PPK2");
        ! function(e) {
            e[e.Normal = 0] = "Normal", e[e.Small = 1] = "Small", e[e.Medium = 2] = "Medium", e[e.ExtraSmall = 3] = "ExtraSmall"
        }(i || (i = {}));
        var d;
        ! function(e) {
            e[e.ImageAndText = 0] = "ImageAndText", e[e.ImageOnly = 1] = "ImageOnly", e[e.TextOnly = 2] = "TextOnly", e[e.InlineTextOnly = 3] = "InlineTextOnly", e[e.Inline = 4] = "Inline"
        }(d || (d = {}));
        var u = function(e) {
            var t = e.bitsConfig.indexedActions[e.prefix.toLowerCase()];
            t || (t = Object(o.b)());
            var n = t.orderedTiers.find(function(t) {
                return t.bits <= (e.amount || 100)
            });
            n || (n = t.orderedTiers[0]);
            var u = null,
                m = a("cheermote-for-amount__cheer-amount", {
                    "cheermote-for-amount__cheer-amount--small": e.size === i.Small || e.size === i.ExtraSmall
                }, {
                    "cheermote-for-amount__cheer-amount--medium": e.size === i.Medium
                }, {
                    "cheermote-for-amount__display--table-cell": e.display !== d.InlineTextOnly && e.display !== d.Inline
                });
            e.amount && e.display !== d.ImageOnly && (u = r.createElement(c.P, {
                padding: e.size === i.Small ? 0 : void 0,
                textAlign: e.size === i.Small ? c._23.Center : void 0
            }, r.createElement("strong", {
                className: m,
                style: {
                    color: n.color
                }
            }, e.amount)));
            var p = a("cheermote-for-amount__cheer-image", {
                    "cheermote-for-amount__cheer-image--inline": e.display === d.Inline
                }, {
                    "cheermote-for-amount__cheer-image--small": e.size === i.Small
                }, {
                    "cheermote-for-amount__cheer-image--extra-small": e.size === i.ExtraSmall
                }, {
                    "cheermote-for-amount__display--table-cell": e.display !== d.InlineTextOnly && e.display !== d.Inline && e.size !== i.Small
                }),
                f = r.createElement(l.a, {
                    className: p,
                    sources: Object(s.b)(n, 4, e.animated)
                });
            return e.display !== d.TextOnly && e.display !== d.InlineTextOnly || (f = null), e.display === d.InlineTextOnly || e.display === d.Inline ? r.createElement(c.U, {
                className: "cheermote-for-amount",
                display: c.H.Inline
            }, f, u) : r.createElement(c.U, {
                className: "cheermote-for-amount"
            }, f, u)
        };
        n.d(t, "a", function() {
            return u
        }), n.d(t, "b", function() {
            return i
        }), n.d(t, "c", function() {
            return d
        })
    },
    oI0V: function(e, t) {},
    p6Rc: function(e, t) {},
    q8Cw: function(e, t) {},
    rM0q: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "Current_User"
                },
                variableDefinitions: [],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        alias: null,
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
                                    value: "hasPrime"
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
                end: 50
            }
        };
        n.loc.source = {
            body: "query Current_User {\ncurrentUser {\nid\nhasPrime\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    rZAm: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "Search_SearchGameResultCard_Game"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "name"
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
                            value: "game"
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
                                    value: "name"
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
                                directives: [],
                                selectionSet: null
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 115
            }
        };
        n.loc.source = {
            body: "query Search_SearchGameResultCard_Game($name: String!) {\ngame(name: $name) {\nid\nboxArtURL(width: 40 height: 55)\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    sgUC: function(e, t) {},
    sq7i: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "Current_User"
                },
                variableDefinitions: [],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        alias: null,
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
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "id"
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
                end: 41
            }
        };
        n.loc.source = {
            body: "query Current_User {\ncurrentUser {\nid\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    tTbW: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "Prime_PrimeOffers_PrimeOfferIds"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "dateOverride"
                        }
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "Time"
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
                            value: "primeOffers"
                        },
                        arguments: [{
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "dateOverride"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "dateOverride"
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
                                            value: "hasEntitlement"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
                                    }, {
                                        kind: "Field",
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "claimData"
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
            }],
            loc: {
                start: 0,
                end: 144
            }
        };
        n.loc.source = {
            body: "query Prime_PrimeOffers_PrimeOfferIds($dateOverride: Time) {\nprimeOffers(dateOverride: $dateOverride) {\nid\nself {\nhasEntitlement\nclaimData\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    ukY1: function(e, t) {},
    "v+rJ": function(e, t) {},
    "w/8h": function(e, t) {},
    w9tK: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return i
        });
        var i = {
            BrowseCommunities: "browse.communities",
            BrowseCreative: "browse.creative",
            BrowseGamesAndCommunities: "browse.games-and-communities",
            ChannelIndex: "channel.index.index",
            ChannelDashboardAchievements: "channel.dashboard.achievements",
            ChannelDashboardExtensions: "channel.dashboard.extensions",
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
            ForYou: "for-you",
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
    wHbv: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "OnsiteNotifications_View"
                },
                variableDefinitions: [],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "viewedNotifications"
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
                                    value: "user"
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
                                            value: "notifications"
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
                                                    value: "summary"
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
                                                            value: "unseenCount"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: null
                                                    }, {
                                                        kind: "Field",
                                                        alias: null,
                                                        name: {
                                                            kind: "Name",
                                                            value: "lastSeenAt"
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
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 123
            }
        };
        n.loc.source = {
            body: "mutation OnsiteNotifications_View {\nviewedNotifications {\nuser {\nnotifications {\nsummary {\nunseenCount\nlastSeenAt\n}\n}\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    weaG: function(e, t) {},
    wjhu: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "Prime_PrimeOffers_CurrentUser"
                },
                variableDefinitions: [],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        alias: null,
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
                                    value: "hasPrime"
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
                            value: "requestInfo"
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
                                    value: "countryCode"
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
                end: 95
            }
        };
        n.loc.source = {
            body: "query Prime_PrimeOffers_CurrentUser {\ncurrentUser {\nid\nhasPrime\n}\nrequestInfo {\ncountryCode\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    x583: function(e, t) {},
    "y+bN": function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "Search_SearchLiveResultCard_UserStream"
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
                                    value: "login"
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
                                    value: "stream"
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
                                            value: "previewImageURL"
                                        },
                                        arguments: [{
                                            kind: "Argument",
                                            name: {
                                                kind: "Name",
                                                value: "width"
                                            },
                                            value: {
                                                kind: "IntValue",
                                                value: "156"
                                            }
                                        }, {
                                            kind: "Argument",
                                            name: {
                                                kind: "Name",
                                                value: "height"
                                            },
                                            value: {
                                                kind: "IntValue",
                                                value: "88"
                                            }
                                        }],
                                        directives: [],
                                        selectionSet: null
                                    }]
                                }
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 145
            }
        };
        n.loc.source = {
            body: "query Search_SearchLiveResultCard_UserStream($login: String!) {\nuser(login: $login) {\nid\nstream {\nid\npreviewImageURL(width: 156 height: 88)\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    ySfT: function(e, t, n) {
        "use strict";
        var i = n("U7vG"),
            a = n("6sO2"),
            r = n("3iBR"),
            s = n("qe65"),
            o = n("Odds"),
            l = (n("6lb1"), {
                themed: !0,
                dark: {
                    "1x": r.b + "/dark/animated/1/cheertutorial.gif"
                },
                light: {
                    "1x": r.b + "/light/animated/1/cheertutorial.gif"
                }
            }),
            c = function() {
                return i.createElement(o.U, {
                    display: o.H.Flex,
                    padding: {
                        top: 5
                    },
                    flexGrow: 1,
                    flexDirection: o.J.Column,
                    justifyContent: o.T.Center,
                    alignItems: o.c.Center
                }, i.createElement(o._22, {
                    type: o._27.H4,
                    bold: !0
                }, i.createElement(s.a, {
                    className: "cheermote-help__tutorial-image",
                    sources: l
                }), Object(a.d)("How to Cheer", "Bits--CheermoteHelp")), i.createElement("p", {
                    className: "t-bits-card__contents-body t-bits-card__contents-body--narrow"
                }, Object(a.d)('Type "cheer" + the number of Bits you want to Cheer.', "Bits--CheermoteHelp")))
            };
        n.d(t, "a", function() {
            return c
        })
    },
    ymbN: function(e, t) {},
    z4Db: function(e, t) {},
    zfLI: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = n("TToO"),
            a = n("U7vG"),
            r = n("BhyV"),
            s = n("6sO2"),
            o = n("yWCw"),
            l = n("zCIC"),
            c = n("j7/Y"),
            d = n("SZoP"),
            u = n("w9tK"),
            m = n("vH/s"),
            p = n("SI0h"),
            f = n("CSlQ"),
            h = n("F8kA"),
            g = n("Odds"),
            v = (n("ymbN"), 0),
            y = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onPrimaryImageLoad = function() {
                        t.props.latencyTracking.reportInteractive()
                    }, t.computeViewsMessage = function() {
                        var e = t.props.totalViews || v;
                        return 0 === e || 1 === e ? Object(s.d)("{viewCount, plural, one {# view}  other {# views}}", {
                            viewCount: e
                        }, "CollectionCard") : Object(s.d)("{viewCount} views", {
                            viewCount: Object(s.f)(e)
                        }, "CollectionCard")
                    }, t
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    var e = Object(s.d)("By {channelName}", {
                        channelName: a.createElement(h.a, {
                            to: this.props.channelLinkTo,
                            className: "collection-card__link",
                            "data-test-selector": "collection-card-channel-link"
                        }, this.props.channelDisplayName)
                    }, "ChannelCollections");
                    return a.createElement(g.A, i.__assign({
                        key: this.props.title
                    }, Object(g._39)(this.props)), a.createElement(g.P, {
                        className: "collection-card",
                        position: g._3.Relative
                    }, a.createElement(h.a, {
                        to: {
                            pathname: this.props.linkTo,
                            state: {
                                content: "collection_card",
                                medium: "channel_collections"
                            }
                        },
                        title: this.props.title,
                        "data-test-selector": 'collection-card-overlay-link"'
                    }, a.createElement(g.C, {
                        imageAlt: this.props.imageAlt,
                        imageSrc: this.props.imageSrc || s.a.defaultCollectionPreviewURL,
                        aspect: g.k.Aspect16x9,
                        onImageLoad: this.onPrimaryImageLoad,
                        "data-test-selector": "collection-image-body"
                    }, a.createElement(g.U, {
                        position: g._3.Absolute,
                        attachTop: !0,
                        attachLeft: !0,
                        attachRight: !0,
                        attachBottom: !0
                    }, a.createElement(g._18, {
                        alignItems: g.c.Center,
                        display: g.H.InlineFlex,
                        flexDirection: g.J.Column,
                        position: g._3.Absolute,
                        attachRight: !0,
                        color: g.F.Overlay,
                        fontSize: g.L.Size5,
                        className: "collection-card__wrapper",
                        fullHeight: !0,
                        textAlign: g._23.Center,
                        justifyContent: g.T.Center,
                        "data-test-selector": "collection-card-overlay"
                    }, a.createElement("figure", null, a.createElement("svg", {
                        className: "collection-card__svg",
                        width: "19",
                        height: "19",
                        viewBox: "0 0 19 19"
                    }, a.createElement("path", {
                        fillRule: "evenodd",
                        d: "M0,6 L19,6 L19,19 L0,19 L0,6 Z M12.25,12.5 L7,9 L7,16 L12.25,12.5 Z M2,3 L17,3 L17,5 L2,5 L2,3 Z M4,0 L15,0 L15,2 L4,2 L4,0 Z"
                    }))), a.createElement(g._22, null, Object(s.d)("{videoCount, plural, one {# video} other {# videos}}", {
                        videoCount: this.props.videoCount
                    }, "CollectionCard"))))))), a.createElement(g.B, {
                        "data-test-selector": "collection-card-body"
                    }, a.createElement(g.U, {
                        display: g.H.Flex,
                        flexDirection: g.J.Column,
                        flexWrap: g.K.NoWrap,
                        padding: {
                            top: .5
                        }
                    }, a.createElement(g._22, {
                        fontSize: g.L.Size5,
                        ellipsis: !0
                    }, a.createElement(h.a, {
                        to: {
                            pathname: this.props.linkTo,
                            state: {
                                content: "collection_card",
                                medium: "channel_collections"
                            }
                        },
                        className: "collection-card__link",
                        "data-test-selector": "collection-card-title-link"
                    }, this.props.title)), a.createElement(g._22, {
                        color: g.F.Alt2,
                        ellipsis: !0
                    }, a.createElement(g._22, {
                        type: g._27.Span
                    }, e), a.createElement(g._22, {
                        type: g._27.Span
                    }, " · " + this.computeViewsMessage())))))
                }, t
            }(a.Component),
            k = Object(f.c)("CollectionCard")(y),
            b = function(e) {
                var t;
                return t = e.showCollectionsManagerButton ? a.createElement("div", null, a.createElement(g._22, {
                    type: g._27.H4,
                    "data-test-selector": "no-collections"
                }, Object(s.d)("Create a collection of your videos from Video Manager.", "collection-page")), a.createElement(g.U, {
                    padding: {
                        top: 2
                    }
                }, a.createElement(g.u, {
                    type: g.z.Hollow,
                    linkTo: "/" + e.channelLogin + "/manager/collections",
                    "data-test-selector": "no-collections-button"
                }, Object(s.d)("Go to Video Manager", "collection-page")))) : a.createElement(g._22, {
                    type: g._27.H4,
                    italic: !0,
                    "data-test-selector": "no-collections"
                }, Object(s.d)("No collections found.", "collection-page")), a.createElement(g._18, {
                    color: g.F.Alt2,
                    textAlign: g._23.Center,
                    padding: {
                        top: 5
                    }
                }, t)
            },
            _ = n("Ic9h"),
            S = n("mlL3"),
            N = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.componentDidUpdate = function() {
                    if (!this.props.data.loading && this.props.data.user) return s.n.setPageTitle(this.props.data.user.displayName), void this.props.latencyTracking.reportInteractive(this.props.data.user.collections.edges.length + 1);
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e;
                    if (!this.props.data.error && this.props.data.user) {
                        var t = this.props.data.user,
                            n = t.collections.edges.map(function(e) {
                                return e.node
                            }),
                            i = !this.props.data.loading && !this.props.data.error && !!t.collections.pageInfo.hasNextPage,
                            r = null;
                        0 === n.length && (r = a.createElement(b, {
                            showCollectionsManagerButton: this.showCollectionManagerButton(),
                            channelLogin: this.props.match.params.channelLogin
                        }));
                        var c = null;
                        0 !== n.length && this.showCollectionManagerButton() && (c = a.createElement(g.U, {
                            display: g.H.Flex,
                            justifyContent: g.T.End,
                            padding: {
                                bottom: 2
                            }
                        }, a.createElement(g.u, {
                            type: g.z.Hollow,
                            linkTo: "/" + this.props.match.params.channelLogin + "/manager/collections",
                            "data-test-selector": "collections-manage-button"
                        }, Object(s.d)("Manage your collections", "collection-page"))));
                        var u = n.map(function(e, n) {
                            return a.createElement(g.U, {
                                key: e.id,
                                margin: {
                                    bottom: 2
                                }
                            }, a.createElement(k, {
                                channelLinkTo: "/" + t.login,
                                channelDisplayName: Object(d.a)(t.login, t.displayName),
                                imageAlt: e.title,
                                imageSrc: e.thumbnailURL,
                                linkTo: "/collections/" + e.id,
                                title: e.title,
                                totalViews: e.viewCount,
                                videoCount: e.items.totalCount,
                                "data-a-target": "collection-card-" + n
                            }))
                        });
                        e = a.createElement("div", null, c, r, a.createElement(g._33, {
                            gutterSize: g._35.Small,
                            childWidth: g._34.Medium,
                            placeholderItems: 20
                        }, u), a.createElement(l.a, {
                            enabled: i,
                            loadMore: this.props.loadMore
                        }))
                    } else if (this.props.data.loading && !this.props.data.user) {
                        for (var m = [], f = 0; f < 12; f++) m.push(a.createElement(g.U, {
                            key: "collection-placeholder-" + f,
                            padding: {
                                bottom: 2
                            },
                            "data-test-selector": "collections-placeholder"
                        }, a.createElement(g.U, {
                            margin: {
                                bottom: .5
                            }
                        }, a.createElement(g.j, {
                            ratio: g.k.Aspect16x9
                        }, a.createElement(g._2, null))), a.createElement(g._22, null, a.createElement(g._2, {
                            width: 150
                        })), a.createElement(g._22, {
                            fontSize: g.L.Size7
                        }, a.createElement(g._2, {
                            width: 100
                        }))));
                        e = a.createElement(g._33, {
                            gutterSize: g._35.Small,
                            childWidth: g._34.Medium,
                            placeholderItems: 20
                        }, m)
                    } else e = a.createElement(g.U, {
                        margin: {
                            top: 5
                        }
                    }, a.createElement(o.a, {
                        message: Object(s.d)("These collections are temporarily unavailable.", "channel-collections")
                    }));
                    return a.createElement(g.U, {
                        fullHeight: !0,
                        "data-test-selector": "channel-collections-page"
                    }, a.createElement(_.a, {
                        currentPage: p.b.Collections,
                        ownerLogin: this.props.match.params.channelLogin
                    }, e))
                }, t.prototype.showCollectionManagerButton = function() {
                    return !(!this.props.data.currentUser || !this.props.data.user) && (this.props.data.currentUser.id === this.props.data.user.id || this.props.data.currentUser.roles.isStaff)
                }, t
            }(a.Component),
            C = {
                options: function(e) {
                    return {
                        variables: {
                            ownerLogin: e.match.params.channelLogin,
                            limit: 30
                        }
                    }
                },
                props: function(e) {
                    return i.__assign({}, e, {
                        loadMore: function() {
                            return e.data.fetchMore({
                                query: S,
                                variables: i.__assign({}, e.data.variables, {
                                    cursor: e.data.user.collections.edges[Math.max(e.data.user.collections.edges.length - 1, 0)].cursor
                                }),
                                updateQuery: function(e, t) {
                                    var n = t.fetchMoreResult;
                                    return {
                                        user: i.__assign({}, n.user, {
                                            collections: i.__assign({}, n.user.collections, {
                                                edges: e.user.collections.edges.concat(n.user.collections.edges)
                                            })
                                        })
                                    }
                                }
                            })
                        }
                    })
                }
            },
            E = Object(r.compose)(Object(r.graphql)(S, C), Object(f.c)("ChannelCollectionsPage", {
                destination: u.a.ChannelCollections
            }), Object(c.a)({
                location: m.PageviewLocation.ChannelCollections,
                properties: function(e) {
                    return {
                        channel: e.match.params.channelLogin,
                        channel_id: e.data.user && e.data.user.id ? Number(e.data.user.id) : null
                    }
                },
                skip: function(e) {
                    return e.data.loading
                }
            }))(N);
        n.d(t, "ChannelCollectionsPage", function() {
            return E
        })
    },
    zzpv: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "WatchAdModal_Redeeem"
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
                                value: "RedeemTrueXAdInput"
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
                            value: "redeemTrueXAd"
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
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "grantedBits"
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
                end: 105
            }
        };
        n.loc.source = {
            body: "mutation WatchAdModal_Redeeem($input:RedeemTrueXAdInput!) {\nredeemTrueXAd(input:$input) {\ngrantedBits\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    }
});
//# sourceMappingURL=pages.channel-collections-4aae36725a235b77b513feb43fda809e.js.map