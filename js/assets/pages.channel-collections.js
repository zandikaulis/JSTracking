webpackJsonp([48], {
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
                bits_location: e.location || l.ChatTooltip
            };
            i.m.track(r.SpadeEventType.BitsCardInteraction, t)
        }, n.d(t, "b", function() {
            return l
        }), n.d(t, "a", function() {
            return o
        }), t.d = function(e) {
            return e && s[e] ? s[e] : (i.i.error(new Error('Buy Bits card contains improperly rendered offers, or offers unknown to Science. Tracking as "buy_100"'), 'Buy Bits card contains improperly rendered offers, or offers unknown to Science. Tracking as "buy_100"'), o.Buy100)
        }, t.e = function(e) {
            var t = {
                channel: e.channel,
                channel_id: e.channelID,
                available: e.available,
                host: "twitch.tv"
            };
            i.m.track(r.SpadeEventType.BitsAdsAvailability, t)
        }, t.f = function(e) {
            var t = {
                distinct_id: i.n.session.deviceID,
                host: "twitch.tv",
                request_id: e.requestID,
                campaign_id: e.campaignID,
                adblock: e.adblock
            };
            i.m.track(r.SpadeEventType.BitsAdsImpression, t)
        }, n.d(t, "c", function() {
            return a
        }), t.g = function(e) {
            var t = i.m.getLastPageview(),
                n = {
                    location: t ? t.location || "" : "",
                    ad_returned: null,
                    campaign_id: e.campaignID,
                    distinct_id: i.n.session.deviceID,
                    host: "twitch.tv",
                    request_id: e.requestID,
                    request_method: e.requestMethod
                };
            i.m.track(r.SpadeEventType.BitsAdsRequest, n)
        };
        var a, i = n("6sO2"),
            r = n("vH/s"),
            l = {
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
            s = {
                100: o.Buy100,
                500: o.Buy500,
                1e3: o.Buy1000,
                1500: o.Buy1500,
                5e3: o.Buy5000,
                1e4: o.Buy10000,
                25e3: o.Buy25000
            };
        (a || (a = {})).ShowAdButton = "show_ad_button"
    },
    "1E7T": function(e, t) {},
    "1pvm": function(e, t) {},
    "4Jix": function(e, t) {},
    "4JjK": function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return a
        });
        var a;
        ! function(e) {
            e[e.Ready = 0] = "Ready", e[e.Dimensions = 1] = "Dimensions", e[e.RequestAd = 2] = "RequestAd", e[e.OnStart = 3] = "OnStart", e[e.OnCredit = 4] = "OnCredit", e[e.OnFinish = 5] = "OnFinish", e[e.OnClose = 6] = "OnClose", e[e.OnError = 7] = "OnError", e[e.Adblock = 8] = "Adblock", e[e.LimitReached = 9] = "LimitReached"
        }(a || (a = {}))
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
    "6Rwu": function(e, t) {},
    "6lb1": function(e, t) {},
    AL3x: function(e, t) {},
    Ic9h: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return g
        });
        var a = n("TToO"),
            i = n("HW6M"),
            r = (n.n(i), n("KSGD")),
            l = (n.n(r), n("U7vG")),
            o = (n.n(l), n("F8kA")),
            s = n("5kgt"),
            c = n("SI0h"),
            d = n("eXld"),
            u = n("2aoH"),
            m = n("Odds"),
            p = n("1E7T"),
            h = (n.n(p), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.currentPath = t.props.location.pathname, t.onHistoryChange = function(e) {
                        e.pathname !== t.currentPath && t.context.scrollToTop(), t.currentPath = e.pathname
                    }, t
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    var e = i((t = {}, t["channel-page-layout__scroll-area--theatre-mode"] = !!this.props.theatreMode, t));
                    return l.createElement(m.V, a.__assign({
                        display: m.H.Flex,
                        flexDirection: m.J.Column,
                        flexWrap: m.K.NoWrap,
                        fullHeight: !0
                    }, Object(s.a)(this.props)), l.createElement(d.b, {
                        className: e,
                        addPaddingWhenPlayerIsPersisting: !0
                    }), l.createElement(u.a, null, l.createElement(c.a, {
                        currentPage: this.props.currentPage,
                        channelLogin: this.props.ownerLogin || ""
                    })), l.createElement(m.V, {
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
            }(l.Component)),
            g = Object(o.f)(h)
    },
    J8WN: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return o
        });
        var a = n("TToO"),
            i = n("U7vG"),
            r = (n.n(i), n("Odds")),
            l = n("yU6t"),
            o = (n.n(l), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        isDraggingOver: !1
                    }, t.onDragEnter = function(e) {
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
                return a.__extends(t, e), t.prototype.render = function() {
                    return i.createElement(r.I, {
                        dragOver: this.state.isDraggingOver,
                        error: this.props.error
                    }, i.createElement(r.Q, {
                        position: r._4.Absolute,
                        attachTop: !0,
                        attachLeft: !0,
                        fullWidth: !0,
                        fullHeight: !0,
                        zIndex: r._39.Above
                    }, i.createElement("input", {
                        "data-test-selector": "file-picker-input",
                        className: "drag-and-drop-file-picker__input",
                        accept: this.props.allowedFileTypes.join(","),
                        multiple: this.props.multiFile || !1,
                        onChange: this.onFileInputChange,
                        type: "file",
                        onDragLeave: this.onDragLeave,
                        onDragEnter: this.onDragEnter,
                        onDrop: this.onFileDrop
                    })), this.props.children)
                }, t.prototype.finalizeSelections = function(e) {
                    e && this.props.onFilesSubmitted(Array.from(e))
                }, t
            }(i.Component))
    },
    MSvX: function(e, t, n) {
        "use strict";
        var a = n("TToO"),
            i = n("OAwv"),
            r = n("U7vG"),
            l = n("6sO2"),
            o = n("Ejve"),
            s = "legacy_routes_enabled",
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
                                    var a = "" !== e.search ? i.parse(e.search) : {};
                                    a["from-redirect"] = "true";
                                    var r = i.stringify(a),
                                        s = l.a.buildType === o.a.Dev ? window.location.host : window.location.hostname,
                                        c = window.location.protocol + "//" + s + e.pathname + "?" + r;
                                    return n.logger.debug("Redirecting to legacy route", {
                                        newUrl: c
                                    }), void window.location.replace(c)
                                }
                            } catch (e) {
                                l.i.withCategory("legacy").error(e, "Unable to determine legacy reload match", {
                                    regex: t
                                })
                            }
                        })) : n.logger.debug("Unable to process history change. Path is null or empty.") : n.logger.debug("Skipping legacy route processing, due to history replace.") : n.logger.debug("Legacy routing not enabled.")
                    }, n.processRedirectParam = function(e) {
                        if (e && e.pathname && e.search) {
                            var t = "" !== e.search ? i.parse(e.search) : {};
                            if (t["from-redirect"]) {
                                delete t["from-redirect"];
                                var a = i.stringify(t),
                                    r = "";
                                a.length > 0 && (r = "?" + a), n.props.history.replace({
                                    pathname: e.pathname,
                                    hash: e.hash,
                                    search: r
                                })
                            }
                        }
                    }, n.isEnabled = l.b.get(s, !1), n.logger = l.i.withCategory("legacy-routes"), n.legacyRoutes = n.buildRoutes(), n.props.history.listen(n.onHistoryChange), n
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    return null
                }, t.prototype.componentDidMount = function() {
                    this.processRedirectParam(this.props.history.location)
                }, t.prototype.buildRoutes = function() {
                    if (!this.isEnabled) return [];
                    this.logger.debug("Building legacy routes...");
                    var e = l.b.get("legacy_routes", []),
                        t = [];
                    if (!e || 0 === e.length) return this.logger.debug("No legacy routes found in settings."), t;
                    for (var n = 0, a = e; n < a.length; n++) {
                        var i = a[n];
                        try {
                            var r = new RegExp(i, "i");
                            t.push(r)
                        } catch (e) {
                            this.logger.debug("Failed to parse route!", {
                                val: i,
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
            return s
        }), n.d(t, !1, function() {
            return "legacy_routes"
        }), n.d(t, "b", function() {
            return c
        })
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
    Ojfd: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "ChannelBanner"
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
                                    value: "bannerImageURL"
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
                end: 82
            }
        };
        n.loc.source = {
            body: "query ChannelBanner($login: String!) {\nuser(login: $login) {\nid\nbannerImageURL\n}\n}",
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
            return e || (e = navigator.userAgent), !!a.exec(e)
        };
        var a = /\scurse\/\d/
    },
    PPK2: function(e, t) {},
    SI0h: function(e, t, n) {
        "use strict";
        var a = n("TPVZ");
        n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, "b", function() {
            return a.b
        }), n.d(t, "a", function() {
            return a.a
        })
    },
    TPVZ: function(e, t, n) {
        "use strict";
        var a, i = n("TToO"),
            r = n("HW6M"),
            l = n("U7vG"),
            o = n("F8kA"),
            s = n("6sO2"),
            c = n("hdYS"),
            d = n("DtWM"),
            u = n("+Znq"),
            m = n("7vx8"),
            p = n("czpb"),
            h = n("RH2O"),
            g = n("Aj/L"),
            f = n("N221"),
            v = n("jF7o"),
            b = n("iMOk"),
            k = n("WVx7"),
            y = n("ySfT"),
            _ = n("ZJYd"),
            S = n("/LBW"),
            E = n("Odds"),
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
                return i.__extends(t, e), t.prototype.render = function() {
                    var e = l.createElement(E.V, null, l.createElement(E.V, {
                        padding: {
                            x: 5,
                            y: 2
                        },
                        textAlign: E._24.Center
                    }, l.createElement(E._23, {
                        type: E._28.H4,
                        bold: !0
                    }, Object(s.d)("Cheer Bits for your Favorite Streamer!", "Bits--FirstTimeUserPrompt"))), l.createElement(E.V, {
                        padding: {
                            x: 2,
                            bottom: 1
                        }
                    }, l.createElement(E._23, {
                        type: E._28.Span,
                        color: E.F.Alt
                    }, Object(s.d)("Bits are fun, animated emotes. Cheering Bits celebrates moments you love with the community right in chat and similar to subscribing, helps support Partners and Affiliates.", "Bits--FirstTimeUserPrompt"), l.createElement(E.Q, {
                        margin: {
                            left: .5
                        }
                    }, l.createElement("a", {
                        onClick: this.props.toggleShowTutorial
                    }, Object(s.d)("How do I cheer?", "Bits--FirstTimeUserPrompt"))))), l.createElement(E.V, {
                        padding: {
                            bottom: 2
                        },
                        textAlign: E._24.Center
                    }, l.createElement(E.Q, {
                        margin: {
                            bottom: 1
                        }
                    }, l.createElement(E._23, {
                        type: E._28.H6,
                        bold: !0,
                        className: "bits-first-time-user-prompt__promo-header"
                    }, Object(s.d)("First Time Purchaser Discount Pack!", "Bits--FirstTimeUserPrompt"))), l.createElement(E.u, {
                        onClick: this.handlePromoBuy,
                        "data-purchase-url": this.props.promo.url,
                        "data-bits-amount": this.props.promo.bits,
                        "data-a-target": "bits-purchase-button-" + this.props.promo.bits
                    }, Object(s.d)("{price} For {amount} Bits", {
                        price: this.props.promo.price,
                        amount: this.props.promo.bits
                    }, "Bits--FirstTimeUserPrompt"))));
                    return this.props.isShowingTutorial ? l.createElement(E.V, {
                        className: "bits-first-time-user-prompt",
                        fullWidth: !0
                    }, l.createElement(E.V, {
                        className: "bits-first-time-user-prompt__tutorial-back-button"
                    }, l.createElement(E.u, {
                        onClick: this.props.toggleShowTutorial,
                        type: E.z.Text
                    }, l.createElement(E._10, {
                        asset: E._11.Play,
                        height: 8
                    }), " ", Object(s.d)("Back", "Bits--FirstTimeUserPrompt"))), l.createElement(E.V, {
                        textAlign: E._24.Center,
                        padding: {
                            x: 2,
                            bottom: 2,
                            top: 5
                        },
                        fullHeight: !0
                    }, l.createElement(E.e, {
                        type: E.i.SlideInLeft,
                        duration: E.g.Long,
                        enabled: !0
                    }, l.createElement(y.a, null)))) : this.props.animateFirstTimeUserIntro ? l.createElement(E.Q, {
                        className: "bits-first-time-user-prompt"
                    }, l.createElement(E.e, {
                        type: E.i.SlideInRight,
                        duration: E.g.Long,
                        enabled: this.props.animateFirstTimeUserIntro
                    }, e)) : l.createElement(E.V, {
                        className: "bits-first-time-user-prompt"
                    }, e)
                }, t
            }(l.Component)),
            w = n("jxGs"),
            N = n("bkpq"),
            A = n("CSlQ"),
            B = n("annQ"),
            x = (n("lGVF"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        hideFirstTimeUserIntro: !1
                    }, t.trackBitsCardInteraction = function(e, n) {
                        var a = {
                            actionName: e,
                            emoteType: n && n.emoteType,
                            emoteLevel: n && n.emoteLevel,
                            location: S.b.GetBitsButton,
                            displayedBalance: t.props.bitsBalance || 0
                        };
                        Object(S.h)(a)
                    }, t.onClose = function() {}, t.onPromoBuyClose = function(e) {
                        Object(v.a)(e, function() {
                            t.props.data && t.props.data.refetch()
                        })
                    }, t
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    if (this.props.loading) return l.createElement(E._19, {
                        "data-a-target": "get-bits-button-content-loading",
                        display: E.H.Flex,
                        flexDirection: E.J.Column,
                        alignItems: E.c.Center,
                        justifyContent: E.U.Center,
                        textAlign: E._24.Center,
                        padding: {
                            y: 5
                        }
                    }, l.createElement(E.Z, {
                        delay: 0
                    }), l.createElement(E.V, {
                        padding: {
                            top: 2
                        }
                    }, l.createElement(E._23, {
                        italic: !0
                    }, Object(s.d)("Fetching bits", "Bits--GetBitsButtonContent"))));
                    var e = null;
                    if (this.props.bitsOffers) {
                        var t = this.props.bitsOffers.find(function(e) {
                            return Object(_.c)(e)
                        });
                        t && t.type === w.b && this.props.channelID && !this.state.hideFirstTimeUserIntro && (e = l.createElement(C, {
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
                    void 0 !== this.props.bitsBalance && this.props.bitsConfig ? n = l.createElement(E._19, {
                        borderBottom: !0,
                        textAlign: E._24.Center,
                        fullWidth: !0,
                        padding: {
                            y: .5
                        }
                    }, l.createElement(E._23, {
                        type: E._28.Span
                    }, Object(s.d)("You have {bitsBalance}", {
                        bitsBalance: l.createElement(b.a, {
                            withImage: !0,
                            withText: !0,
                            count: this.props.bitsBalance,
                            bitsConfig: this.props.bitsConfig
                        })
                    }, "Bits--GetBitsButton"))) : void 0 === this.props.bitsBalance && this.props.bitsConfig && (n = l.createElement(E._19, {
                        borderBottom: !0,
                        textAlign: E._24.Center,
                        fullWidth: !0,
                        padding: {
                            y: .5
                        }
                    }, l.createElement(E._23, {
                        type: E._28.Span
                    }, Object(s.d)("{bitsGem} Log in to see your Bits balance", {
                        bitsGem: l.createElement(b.a, {
                            count: 100,
                            withImage: !0,
                            bitsConfig: this.props.bitsConfig
                        })
                    }, "Bits--GetBitsButton"))));
                    var a = null;
                    return this.props.bitsConfig && this.props.channelLogin && (a = l.createElement(k.a, {
                        bitsConfig: this.props.bitsConfig,
                        channelLogin: this.props.channelLogin,
                        closeAllBits: this.onClose,
                        onClose: this.onClose,
                        trackBitsCardInteraction: this.trackBitsCardInteraction,
                        location: S.b.GetBitsButton,
                        hidePromos: !0,
                        hideWateb: !0,
                        fullsize: !0
                    })), l.createElement(f.b, {
                        className: "get-bits-button-content"
                    }, l.createElement(E.V, null, n, e, a))
                }, t = i.__decorate([Object(A.c)("GetBitsButtonContent"), Object(m.a)(B, {
                    name: "data",
                    props: function(e) {
                        var t, n;
                        e.data && e.data.user && e.data.user.cheer && (t = Object(N.a)(e.data.user.cheer.emotes), n = e.data.user.id);
                        var a, i;
                        return e.data && e.data.currentUser ? (i = e.data.currentUser.bitsBalance, a = e.data.currentUser.bitsOffers) : e.data && e.data.bitsOffers && (a = e.data.bitsOffers), {
                            loading: e.data && e.data.loading,
                            bitsOffers: a,
                            bitsBalance: i,
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
            }(l.Component)),
            O = function(e) {
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
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = null;
                    return this.props.channelLogin && (e = l.createElement(x, {
                        isLoggedIn: this.props.isLoggedIn,
                        channelLogin: this.props.channelLogin,
                        toggleShowTutorial: this.toggleShowTutorial,
                        isShowingTutorial: this.state.isShowingTutorial,
                        animateFirstTimeUserIntro: this.state.animateFirstTimeUserIntro
                    })), l.createElement(u.a, {
                        onToggle: this.toggleBalloon
                    }, l.createElement(E.u, {
                        dropdown: !0
                    }, Object(s.d)("Get Bits", "Bits--GetBitsButton")), l.createElement(E.p, {
                        direction: E.q.BottomRight,
                        size: E.r.Large
                    }, e))
                }, t = i.__decorate([Object(A.c)("GetBitsButton")], t)
            }(l.Component),
            I = Object(h.a)(function(e) {
                return {
                    isLoggedIn: Object(g.d)(e)
                }
            })(O),
            F = n("E9Qg"),
            T = (n("4Jix"), n("Ojfd")),
            L = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    var e, t, n = {
                            "channel-banner--open": !this.props.collapsed
                        },
                        a = this.props.data;
                    return a && a.loading || !this.props.firstPageLoaded ? e = l.createElement(E._3, {
                        height: 380,
                        "data-test-selector": "channel-banner__placeholder"
                    }) : (a && a.user && a.user.bannerImageURL ? t = {
                        backgroundImage: "url(" + a.user.bannerImageURL + ")"
                    } : (n["channel-banner--default"] = !0, t = {
                        backgroundImage: "url(" + F + ")"
                    }), e = l.createElement("div", {
                        className: "channel-banner__image",
                        style: t
                    })), l.createElement("div", {
                        className: r("channel-banner", n),
                        "data-test-selector": "channel-banner",
                        onTransitionEnd: this.props.onTransitionEnd
                    }, l.createElement(E.Q, {
                        fullWidth: !0
                    }, e))
                }, t
            }(l.Component),
            D = Object(m.a)(T, {
                options: function(e) {
                    return {
                        variables: {
                            login: e.channelLogin
                        }
                    }
                },
                skip: function(e) {
                    return !e.channelLogin || !e.firstPageLoaded
                }
            })(L),
            j = Object(h.a)(function(e) {
                return {
                    firstPageLoaded: e.session.firstPageLoaded
                }
            })(D),
            U = n("2KeS"),
            V = n("V5M+"),
            P = n("J8WN"),
            H = n("+8VM"),
            W = n("HZww"),
            M = (n("weaG"), function(e) {
                var t = {
                    "default-avatar__selected": e.selected,
                    "default-avatar": !0
                };
                return l.createElement(E.V, {
                    padding: {
                        bottom: 1
                    }
                }, l.createElement("div", {
                    onClick: function() {
                        e.onSelect(e.index)
                    },
                    "aria-label": Object(s.d)("Click to select Default Avatar Number {index, number}", {
                        index: e.index
                    }, "Default Avatar")
                }, l.createElement(E._19, {
                    fullHeight: !0,
                    fullWidth: !0,
                    position: E._4.Relative,
                    className: r(t)
                }, l.createElement("img", {
                    alt: Object(s.d)("Default Avatar Number {index, number}", {
                        index: e.index
                    }, "Default Avatar"),
                    src: e.imageSrc
                }))))
            });
        ! function(e) {
            e.ProfileImage = "profile_image", e.ProfileBanner = "profile_banner", e.ChannelOfflineImage = "channel_offline_image"
        }(a || (a = {}));
        var R;
        ! function(e) {
            e.Success = "SUCCESS", e.NonImage = "IS_IMAGE_VALIDATION_FAILED", e.WrongFormat = "IMAGE_FORMAT_VALIDATION_FAILED", e.BadSize = "FILE_SIZE_VALIDATION_FAILED"
        }(R || (R = {}));
        var z;
        ! function(e) {
            e[e.Success = 0] = "Success", e[e.UnexpectedError = 1] = "UnexpectedError", e[e.BadSizeError = 2] = "BadSizeError", e[e.NonImageError = 3] = "NonImageError", e[e.WrongFormatError = 4] = "WrongFormatError", e[e.TimeoutError = 5] = "TimeoutError", e[e.Uploading = 6] = "Uploading", e[e.ImageNotSelected = 7] = "ImageNotSelected"
        }(z || (z = {}));
        n("AL3x");
        var G = n("nmDn"),
            q = [{
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
            J = ["image/*"],
            Q = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        statusMessage: null,
                        imagePreviewURL: "",
                        profileUpdated: !1,
                        currentImageHasTallAspectRatio: !1,
                        imageFormat: ""
                    }, t.currentImage = null, t.logger = s.i.withCategory("ProfileImagePicker"), t.onImageInputChange = function(e) {
                        var n;
                        if (null !== e) {
                            var a = function(e) {
                                    var t = "";
                                    if (e && e.name) {
                                        var n = e.name;
                                        t = n.slice((Math.max(0, n.lastIndexOf(".")) || 1 / 0) + 1)
                                    }
                                    return "" === t && (t = "png"), t
                                }(n = e[0]),
                                i = (n.size / 1024 / 1024).toFixed(4);
                            parseInt(i, 10) > 10 ? t.setState({
                                statusMessage: z.BadSizeError
                            }) : (t.setState({
                                selectedImageIndex: void 0,
                                imagePreviewURL: "",
                                imageFormat: "",
                                currentImageHasTallAspectRatio: !1
                            }), function(e, t, n) {
                                var a = new FileReader;
                                a.onloadend = function() {
                                    n && n(a.result)
                                }, a.readAsDataURL(e);
                                var i = new FileReader;
                                i.onloadend = function() {
                                    t(i.result)
                                }, i.readAsArrayBuffer(e)
                            }(n, function(e) {
                                t.currentImage = e, t.setState({
                                    statusMessage: null
                                })
                            }, function(e) {
                                var n = new Image,
                                    i = !1;
                                n.onload = function() {
                                    n.width < n.height && (i = !0), t.setState({
                                        currentImageHasTallAspectRatio: i
                                    })
                                }, n.src = e, t.setState({
                                    imagePreviewURL: e,
                                    imageFormat: a
                                })
                            }))
                        } else t.setState({
                            statusMessage: z.ImageNotSelected
                        })
                    }, t.onUpdateButtonClick = function(e) {
                        return i.__awaiter(t, void 0, void 0, function() {
                            var t, n, r, l, o = this;
                            return i.__generator(this, function(c) {
                                switch (c.label) {
                                    case 0:
                                        if (e.preventDefault(), void 0 !== this.state.selectedImageIndex) return this.setDefaultAvatar(), [2];
                                        if (!this.currentImage) return this.setState({
                                            statusMessage: z.ImageNotSelected
                                        }), [2];
                                        this.setState({
                                            statusMessage: z.Uploading
                                        }), c.label = 1;
                                    case 1:
                                        return c.trys.push([1, 3, , 4]), [4, function(e, t, n, a) {
                                            return i.__awaiter(this, void 0, void 0, function() {
                                                var r;
                                                return i.__generator(this, function(i) {
                                                    switch (i.label) {
                                                        case 0:
                                                            return [4, fetch(s.a.krakenEndpoint + "/users/" + e + "/upload_image?client_id=" + s.a.authClientID + "&api_version=" + s.a.defaultAPIVersion + "&image_type=" + n + "&format=" + a, {
                                                                method: "POST",
                                                                headers: {
                                                                    Authorization: "OAuth " + t
                                                                }
                                                            })];
                                                        case 1:
                                                            return r = i.sent(), [2, r.json()]
                                                    }
                                                })
                                            })
                                        }(this.props.userID, this.props.authToken, a.ProfileImage, this.state.imageFormat)];
                                    case 2:
                                        return t = c.sent(), n = t.upload_url, r = t.upload_id, [3, 4];
                                    case 3:
                                        return l = c.sent(), this.logger.error(l, "Request for upload ID failed to get expected response from server."), this.setState({
                                            statusMessage: z.UnexpectedError
                                        }), [2];
                                    case 4:
                                        return this.unsubscribe = s.j.subscribe({
                                            topic: Object(W.c)(this.props.userID),
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
                                                        statusMessage: z.UnexpectedError,
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
                                                    statusMessage: z.UnexpectedError,
                                                    selectedImageIndex: void 0,
                                                    imagePreviewURL: "",
                                                    currentImageHasTallAspectRatio: !1
                                                })
                                            },
                                            onMessage: function(e) {
                                                if (e.upload_id === r) {
                                                    clearTimeout(o.timeoutHandle);
                                                    var t = null;
                                                    t = e.status === R.Success ? z.Success : e.status === R.BadSize ? z.BadSizeError : e.status === R.NonImage ? z.NonImageError : e.status === R.WrongFormat ? z.WrongFormatError : z.UnexpectedError, o.unsubscribe && o.unsubscribe(), o.setState({
                                                        statusMessage: t
                                                    }), o.state.statusMessage === z.Success ? o.setState({
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
                            imagePreviewURL: q[e].uri
                        })
                    }, t.handlePubSubTimeout = function() {
                        t.unsubscribe(), t.setState({
                            statusMessage: z.TimeoutError
                        })
                    }, t
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
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
                        t = q.map(function(t, n) {
                            return l.createElement(M, {
                                key: t.id,
                                imageSrc: t.uri,
                                index: n,
                                onSelect: e.onDefaultImageSelected,
                                selected: e.state.selectedImageIndex === n
                            })
                        }),
                        n = null;
                    if ("" !== this.state.imagePreviewURL) {
                        var a = {
                            "profile-edit__image-preview": !0,
                            "profile-edit__image-preview-tall": this.state.currentImageHasTallAspectRatio
                        };
                        n = l.createElement(E.V, {
                            className: r(a),
                            "data-test-selector": "preview-image",
                            position: E._4.Relative
                        }, l.createElement("img", {
                            src: "" + this.state.imagePreviewURL
                        }))
                    }
                    var i = null;
                    "" === this.state.imagePreviewURL && (i = l.createElement(E.V, {
                        className: "profile-edit__upload-info"
                    }, l.createElement(E.V, null, l.createElement(E._10, {
                        asset: E._11.Plus,
                        type: E._12.Alt2,
                        height: 20,
                        width: 20
                    })), l.createElement(E._23, {
                        type: E._28.H3,
                        color: E.F.Alt2,
                        fontSize: E.L.Size4
                    }, Object(s.d)("Upload a Photo", "Profile Edit"))));
                    var o = null;
                    this.props.showCloser && (o = l.createElement(H.a, null));
                    var c = null;
                    if (null !== this.state.statusMessage) {
                        var d = function(e) {
                                switch (e) {
                                    case z.Success:
                                        return {
                                            message: Object(s.d)("Success!", "Profile Edit"),
                                            type: E._2.Success
                                        };
                                    case z.UnexpectedError:
                                        return {
                                            message: Object(s.d)("Unexpected error, please try again.", "Profile Edit"),
                                            type: E._2.Alert
                                        };
                                    case z.BadSizeError:
                                        return {
                                            message: Object(s.d)("Image might exceed 10MB.", "Profile Edit"),
                                            type: E._2.Alert
                                        };
                                    case z.NonImageError:
                                        return {
                                            message: Object(s.d)("You must upload an image.", "Profile Edit"),
                                            type: E._2.Alert
                                        };
                                    case z.WrongFormatError:
                                        return {
                                            message: Object(s.d)("You must select a valid image type.", "Profile Edit"),
                                            type: E._2.Alert
                                        };
                                    case z.TimeoutError:
                                        return {
                                            message: Object(s.d)("Upload timed-out. Please try again.", "Profile Edit"),
                                            type: E._2.Alert
                                        };
                                    case z.Uploading:
                                        return {
                                            message: Object(s.d)("Uploading....", "Profile Edit"),
                                            type: E._2.Brand
                                        };
                                    case z.ImageNotSelected:
                                        return {
                                            message: Object(s.d)("Select a image first.", "Profile Edit"),
                                            type: E._2.Alert
                                        };
                                    default:
                                        return {
                                            message: Object(s.d)("Please try again.", "Profile Edit"),
                                            type: E._2.Alert
                                        }
                                }
                            }(this.state.statusMessage),
                            u = d.message,
                            m = d.type;
                        c = l.createElement(E._1, {
                            label: u,
                            type: m
                        })
                    }
                    var p = this.props.login;
                    return this.props.displayName && (p = this.props.displayName), l.createElement(E.V, {
                        className: "profile-edit",
                        position: E._4.Relative,
                        fullHeight: !0
                    }, l.createElement(E._19, {
                        className: "profile-edit__background-container",
                        background: E.m.Base,
                        fullWidth: !0
                    }, l.createElement(E.V, {
                        padding: 2,
                        display: E.H.InlineBlock,
                        position: E._4.Relative,
                        textAlign: E._24.Center,
                        fullWidth: !0
                    }, l.createElement(E._19, {
                        textAlign: E._24.Left,
                        borderBottom: !0,
                        padding: {
                            bottom: 1
                        },
                        margin: {
                            bottom: 2
                        }
                    }, l.createElement(E._23, {
                        type: E._28.H3,
                        color: E.F.Alt2,
                        fontSize: E.L.Size4
                    }, Object(s.d)("Edit Profile Picture for {userName}", {
                        userName: p
                    }, "Profile Edit"), " ")), l.createElement(E.V, {
                        className: "profile-edit__upload-container",
                        display: E.H.InlineBlock,
                        position: E._4.Relative,
                        textAlign: E._24.Center,
                        margin: {
                            bottom: 1
                        }
                    }, l.createElement(E.V, {
                        className: "profile-edit__upload",
                        display: E.H.InlineBlock,
                        position: E._4.Relative,
                        textAlign: E._24.Center
                    }, l.createElement(P.a, {
                        allowedFileTypes: J,
                        onFilesSubmitted: this.onImageInputChange
                    }, i), n)), l.createElement(E._19, {
                        "data-test-selector": "status-message",
                        fontSize: E.L.Size4,
                        position: E._4.Relative,
                        textAlign: E._24.Center,
                        className: "profile-edit__status-message"
                    }, c), l.createElement(E._19, {
                        borderBottom: !0,
                        padding: {
                            bottom: .5
                        },
                        margin: {
                            bottom: 2
                        }
                    }, l.createElement(E.V, {
                        textAlign: E._24.Left,
                        margin: {
                            bottom: 1
                        }
                    }, l.createElement(E._23, {
                        type: E._28.H3,
                        color: E.F.Alt2,
                        fontSize: E.L.Size5
                    }, Object(s.d)("Or select one of these", "Profile Edit"))), l.createElement(E._34, {
                        childWidth: E._35.ExtraSmall,
                        gutterSize: E._36.ExtraSmall,
                        placeholderItems: 3
                    }, t)), l.createElement(E.V, {
                        display: E.H.Flex,
                        justifyContent: E.U.Center
                    }, l.createElement(E.u, {
                        "data-test-selector": "update-button",
                        onClick: this.onUpdateButtonClick,
                        size: E.x.Large
                    }, Object(s.d)("Update", "Profile Edit"))))), o)
                }, t.prototype.setDefaultAvatar = function() {
                    return i.__awaiter(this, void 0, void 0, function() {
                        var e, t, n;
                        return i.__generator(this, function(a) {
                            switch (a.label) {
                                case 0:
                                    this.setState({
                                        statusMessage: z.Uploading
                                    }), e = z.UnexpectedError, a.label = 1;
                                case 1:
                                    return a.trys.push([1, 3, , 4]), [4, function(e, t, n) {
                                        if (void 0 === n) throw new Error("No default avatar selected.");
                                        return fetch(s.a.krakenEndpoint + "/users/" + e + "/default_images?client_id=" + s.a.authClientID + "&api_version=" + s.a.defaultAPIVersion, {
                                            method: "PUT",
                                            headers: {
                                                Authorization: "OAuth " + t,
                                                "Content-Type": "application/json",
                                                Accept: "application/json"
                                            },
                                            body: JSON.stringify({
                                                default_profile_image: q[n].id
                                            })
                                        })
                                    }(this.props.userID, this.props.authToken, this.state.selectedImageIndex)];
                                case 2:
                                    return 204 === (t = a.sent()).status || 200 === t.status ? e = z.Success : this.logger.error(new Error("Default Avatar PUT failed. Fetch returned non-200 status: " + t.status), "Default Avatar PUT failed. Fetch returned non-200 status: " + t.status), [3, 4];
                                case 3:
                                    return n = a.sent(), this.logger.error(n, "Default Avatar PUT failed."), [3, 4];
                                case 4:
                                    return this.setState({
                                        statusMessage: e,
                                        profileUpdated: e === z.Success
                                    }), [2]
                            }
                        })
                    })
                }, t = i.__decorate([Object(m.a)(G, {
                    options: function(e) {
                        return {
                            variables: {
                                login: e.login
                            }
                        }
                    }
                })], t)
            }(l.Component),
            $ = Object(A.c)("Profile Edit")(Q),
            K = Object(h.a)(function(e) {
                return {
                    authToken: Object(g.a)(e)
                }
            }, function(e, t) {
                return Object(U.bindActionCreators)({
                    closeModal: function() {
                        return t.successCallback && t.successCallback(), Object(V.c)()
                    }
                }, e)
            })($),
            Z = (n("WClm"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.openModal = function(e) {
                        e.stopPropagation(), t.props.showModal(K, {
                            userID: t.props.userID,
                            login: t.props.login,
                            displayName: t.props.displayName,
                            showCloser: !0
                        })
                    }, t
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return l.createElement(E.V, {
                        className: "edit-profile-overlay",
                        display: E.H.Flex,
                        justifyContent: E.U.Center,
                        alignContent: E.b.Center,
                        fullHeight: !0,
                        fullWidth: !0
                    }, l.createElement(E.v, {
                        overlay: !0,
                        ariaLabel: Object(s.d)("Edit Profile", "ChannelHeader"),
                        icon: E._11.Edit,
                        onClick: this.openModal
                    }))
                }, t = i.__decorate([Object(A.c)("EditProfileOverlay")], t)
            }(l.Component)),
            Y = Object(h.a)(null, function(e) {
                return Object(U.bindActionCreators)({
                    showModal: V.d
                }, e)
            })(Z),
            X = n("70dR"),
            ee = (n("z4Db"), n("kOMe"));
        n.d(t, "b", function() {
            return te
        }), n.d(t, "a", function() {
            return oe
        });
        var te, ne = "channel-header__edit-profile-overlay",
            ae = "user-channel-header-item",
            ie = "channel-header__verified-badge",
            re = "channel-header__live-indicator",
            le = "channel-header__channel-link";
        ! function(e) {
            e[e.Channel = 1] = "Channel", e[e.Clips = 2] = "Clips", e[e.Collections = 3] = "Collections", e[e.Events = 4] = "Events", e[e.Success = 5] = "Success", e[e.Followers = 6] = "Followers", e[e.Following = 7] = "Following", e[e.Videos = 8] = "Videos"
        }(te || (te = {}));
        var oe = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.state = {
                    live: !1,
                    bannerHidden: !0,
                    bannerSlideIn: !1
                }, t.verifiedBadgeElement = l.createElement(E._31, {
                    label: Object(s.d)("Verified", "ChannelHeader"),
                    direction: E._33.Right
                }, l.createElement(E.V, {
                    className: "channel-header__verified",
                    "data-target": ie,
                    display: E.H.Flex,
                    alignItems: E.c.Center,
                    margin: {
                        left: 1
                    }
                }, l.createElement(E._10, {
                    asset: E._11.Verified
                }))), t.liveIndicatorElement = l.createElement(E.V, {
                    margin: {
                        left: 1
                    },
                    "data-target": re
                }, l.createElement(E._31, {
                    label: Object(s.d)("Live Now", "ChannelHeader"),
                    direction: E._33.Right
                }, l.createElement(E.X, {
                    pulse: !0
                }))), t.renderAvatarEditButton = function() {
                    if (!t.props.data) return null;
                    return t.props.data && t.props.data.currentUser && t.props.data.user && t.props.data.currentUser.roles && (t.props.data.currentUser.id === t.props.data.user.id || t.props.data.currentUser.roles.isStaff || t.props.data.currentUser.roles.isSiteAdmin) ? l.createElement(E._19, {
                        className: ne,
                        background: E.m.Overlay,
                        position: E._4.Absolute,
                        attachTop: !0,
                        attachLeft: !0,
                        fullHeight: !0,
                        fullWidth: !0,
                        display: E.H.InlineFlex,
                        alignItems: E.c.Center,
                        justifyContent: E.U.Center
                    }, l.createElement(Y, {
                        userID: t.props.data.user.id,
                        login: t.props.data.user.login,
                        displayName: t.props.data.user.displayName
                    })) : null
                }, t.toggleChannelBanner = function() {
                    t.setState(function(e) {
                        var t = !e.bannerSlideIn;
                        return t ? {
                            bannerHidden: !e.bannerHidden,
                            bannerSlideIn: t
                        } : {
                            bannerSlideIn: t
                        }
                    })
                }, t.completedBannerAnimation = function() {
                    t.setState(function(e) {
                        if (!e.bannerSlideIn) return {
                            bannerHidden: !0
                        }
                    })
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
            return i.__extends(t, e), t.prototype.componentWillMount = function() {
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
                    a = 0,
                    i = 0,
                    m = s.a.defaultAvatarURL;
                this.props.data && this.props.data.user && !this.props.data.loading && !this.props.data.error && (n = this.props.data.user.videos.totalCount, a = this.props.data.user.followers.totalCount, i = this.props.data.user.follows.totalCount, m = this.props.data.user.profileImageURL, e = this.props.data.user.displayName, t = this.props.data.user.roles.isPartner);
                var p = this.state.live && !this.isActiveTab(te.Channel),
                    h = this.createChannelLinks(n, a, i),
                    g = {
                        "channel-header__user": !0,
                        "channel-header__user--selected": this.isActiveTab(te.Channel)
                    },
                    f = null;
                this.canRenderBitsButton() && (f = l.createElement(E.V, {
                    margin: {
                        left: 1
                    }
                }, l.createElement(I, {
                    channelLogin: this.props.channelLogin
                })));
                var v, b = l.createElement(E.V, {
                    display: E.H.Flex,
                    flexWrap: E.K.NoWrap,
                    alignItems: E.c.Center,
                    flexShrink: 0
                }, l.createElement(E.V, {
                    className: "channel-header__user-avatar channel-header__user-avatar--active",
                    margin: {
                        right: 1
                    },
                    display: E.H.Flex,
                    flexShrink: 0,
                    alignItems: E.c.Stretch
                }, l.createElement(E.V, {
                    position: E._4.Relative
                }, l.createElement(E.l, {
                    size: 36,
                    imageSrc: m,
                    imageAlt: e || ""
                }), this.renderAvatarEditButton())), e ? l.createElement(E._23, {
                    type: E._28.H5
                }, e) : l.createElement(E.V, {
                    alignItems: E.c.Center
                }, l.createElement(E._3, {
                    lineCount: 1,
                    width: 120
                })), p && this.liveIndicatorElement, t && this.verifiedBadgeElement);
                v = this.isActiveTab(te.Channel) ? l.createElement("div", {
                    className: "channel-header__banner-toggle",
                    onClick: this.toggleChannelBanner,
                    "data-target": le,
                    "data-a-target": ae
                }, b) : this.props.data && this.props.data.user && this.props.data.user.login ? l.createElement(o.a, {
                    to: "/" + this.props.data.user.login,
                    "data-target": le,
                    "data-a-target": ae
                }, b) : b;
                var k = this.state.bannerHidden ? E.H.HideAccessible : E.H.Block,
                    y = null;
                return this.isActiveTab(te.Channel) && (y = l.createElement(E.V, {
                    display: k
                }, l.createElement(j, {
                    channelLogin: this.props.channelLogin,
                    collapsed: !this.state.bannerSlideIn,
                    onTransitionEnd: this.completedBannerAnimation
                }))), l.createElement(E.V, {
                    className: "channel-header",
                    flexShrink: 0
                }, y, l.createElement(E.V, {
                    display: E.H.Flex,
                    justifyContent: E.U.Between,
                    flexWrap: E.K.NoWrap,
                    fullHeight: !0,
                    refDelegate: this.saveChannelHeaderRef,
                    margin: {
                        x: 3
                    }
                }, l.createElement(E.V, {
                    display: E.H.Flex,
                    alignItems: E.c.Stretch,
                    flexShrink: 0,
                    flexWrap: E.K.NoWrap,
                    "data-target": "channel-header-left"
                }, l.createElement(E.Q, {
                    className: r(g),
                    padding: {
                        y: .5,
                        right: 2
                    },
                    display: E.H.Flex,
                    flexWrap: E.K.NoWrap,
                    alignItems: E.c.Center,
                    flexShrink: 0
                }, v), this.renderTabs(h), l.createElement(E.V, {
                    className: "channel-header__item channel-header__item--no-underline",
                    padding: {
                        x: 1
                    },
                    flexShrink: 0,
                    alignSelf: E.d.Center,
                    "data-target": "channel-header-button"
                }, l.createElement(u.a, {
                    alwaysMountBalloonContent: !0
                }, l.createElement(E.v, {
                    icon: E._11.NavMore,
                    ariaLabel: Object(s.d)("More", "ChannelHeader")
                }), l.createElement(E.p, {
                    direction: E.q.Bottom,
                    noTail: !0
                }, l.createElement(E.V, {
                    padding: {
                        y: 1
                    }
                }, this.renderDropdown(h)))))), l.createElement(E.V, {
                    display: E.H.Flex,
                    flexWrap: E.K.NoWrap,
                    flexShrink: 0,
                    alignItems: E.c.Center,
                    className: "channel-header__right",
                    "data-target": "channel-header-right"
                }, l.createElement(E.V, {
                    className: "channel-header__follow-button",
                    display: E.H.Flex,
                    alignItems: E.c.Stretch,
                    margin: {
                        left: 1
                    }
                }, l.createElement(c.a, {
                    updateContainerWidth: this.onUpdateDebounce,
                    isHostedFollow: !1,
                    channelLogin: this.props.channelLogin
                })), l.createElement(E.V, {
                    margin: {
                        left: 1
                    }
                }, l.createElement(X.a, {
                    updateContainerWidth: this.onUpdateDebounce,
                    channelLogin: this.props.channelLogin
                })), f)), l.createElement(d.a, {
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
                var a = "/" + n + "/" + e;
                return t ? Object(p.a)(a) : a
            }, t.prototype.renderTabs = function(e) {
                var t = this;
                return e.map(function(e) {
                    var n = e.count ? l.createElement(E.V, {
                            className: "channel-header__item-count",
                            display: E.H.Flex,
                            margin: {
                                left: .5
                            }
                        }, l.createElement(E._23, {
                            type: E._28.Span,
                            fontSize: E.L.Size5
                        }, e.count)) : null,
                        a = t.generateUserLink(e.pathSuffix, e.isExternal),
                        r = {};
                    return e.isExternal && (r.target = Object(p.b)() ? "_blank" : ""), l.createElement(E.Q, {
                        key: "channel-header__item--" + e.label,
                        alignItems: E.c.Center,
                        flexShrink: 0
                    }, l.createElement(o.a, i.__assign({
                        className: "channel-header__item channel-header__item--hide " + (e.isSelected ? "channel-header__item--selected" : "")
                    }, r, {
                        to: a,
                        disabled: "#" === a,
                        "data-target": "channel-header-item",
                        "data-a-target": e.label.toLowerCase() + "-channel-header-item"
                    }), l.createElement(E.V, {
                        padding: {
                            x: 2,
                            y: .5
                        },
                        display: E.H.Flex
                    }, l.createElement(E._23, {
                        type: E._28.Span,
                        fontSize: E.L.Size5
                    }, e.label), n)))
                })
            }, t.prototype.renderDropdown = function(e) {
                var t = this;
                return e.map(function(e) {
                    var n = e.count ? l.createElement(E.V, {
                            className: "channel-header__item-count",
                            display: E.H.Flex,
                            margin: {
                                left: .5
                            }
                        }, l.createElement(E._23, {
                            type: E._28.Span
                        }, e.count)) : null,
                        a = t.generateUserLink(e.pathSuffix, e.isExternal),
                        r = {};
                    return e.isExternal && (r.targetBlank = !0), l.createElement(E.V, {
                        key: "channel-header__dropdown-item--" + e.label,
                        "data-target": "channel-header-dropdown-item"
                    }, l.createElement(E.T, i.__assign({
                        linkTo: a,
                        disabled: "#" === a
                    }, r), l.createElement(E.V, {
                        className: "channel-header__dropdown-hover-target",
                        padding: {
                            y: .5,
                            x: 1
                        },
                        display: E.H.Flex
                    }, l.createElement(E._23, {
                        type: E._28.Span
                    }, e.label), n)))
                })
            }, t.prototype.createChannelLinks = function(e, t, n) {
                return [{
                    label: Object(s.d)("Videos", "ChannelHeader"),
                    count: Object(s.e)(e),
                    pathSuffix: "videos/all",
                    isExternal: !1,
                    isSelected: this.isActiveTab(te.Videos)
                }, {
                    label: Object(s.d)("Clips", "ChannelHeader"),
                    pathSuffix: "clips",
                    isExternal: !1,
                    isSelected: this.isActiveTab(te.Clips)
                }, {
                    label: Object(s.d)("Collections", "ChannelHeader"),
                    pathSuffix: "collections",
                    isExternal: !1,
                    isSelected: this.isActiveTab(te.Collections)
                }, {
                    label: Object(s.d)("Events", "ChannelHeader"),
                    pathSuffix: "events",
                    isExternal: !1,
                    isSelected: this.isActiveTab(te.Events)
                }, {
                    label: Object(s.d)("Followers", "ChannelHeader"),
                    count: Object(s.e)(t),
                    pathSuffix: "followers",
                    isExternal: !0,
                    isSelected: this.isActiveTab(te.Followers)
                }, {
                    label: Object(s.d)("Following", "ChannelHeader"),
                    count: Object(s.e)(n),
                    pathSuffix: "following",
                    isExternal: !0,
                    isSelected: this.isActiveTab(te.Following)
                }]
            }, t.prototype.isActiveTab = function(e) {
                return te[this.props.currentPage] === te[e]
            }, t.prototype.getChannelHeaderSize = function() {
                if (this.channelHeader) {
                    var e = this.channelHeader.querySelector('[data-target="channel-header-left"]'),
                        t = this.channelHeader.querySelector('[data-target="channel-header-right"]'),
                        n = this.channelHeader.querySelectorAll('[data-target="channel-header-item"]'),
                        a = this.channelHeader.querySelectorAll('[data-target="channel-header-dropdown-item"]');
                    if (n.length) {
                        var i = this.getWidth(this.channelHeader).width,
                            r = this.getWidth(e).width + this.getWidth(t).width + 20 - i;
                        if (r > 0)
                            for (var l = n.length - 1; l >= 0; l--) {
                                if (!(s = n[l]).classList.contains("channel-header__item--hide")) {
                                    var o = this.getWidth(s);
                                    if (s.classList.add("channel-header__item--hide"), a[l].classList.remove("channel-header__item--hide"), (r -= o.width) <= 0) break
                                }
                            } else
                                for (l = 0; l < n.length; l++) {
                                    var s;
                                    if ((s = n[l]).classList.contains("channel-header__item--hide")) {
                                        s.classList.remove("channel-header__item--hide");
                                        if ((o = this.getWidth(s)).width >= Math.abs(r)) {
                                            s.classList.add("channel-header__item--hide");
                                            break
                                        }
                                        s.classList.remove("channel-header__item--hide"), a[l].classList.add("channel-header__item--hide"), r += o.width
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
                return this.props.data && !this.props.data.loading && this.props.currentPage !== te.Clips && this.props.data.currentUser && this.props.data.user && this.props.data.user.cheer
            }, t.prototype.getWidth = function(e) {
                return e ? {
                    width: e.clientWidth
                } : {
                    width: 0
                }
            }, t.prototype.reportInteractive = function() {
                !this.props.data || this.props.data.loading || this.props.data.error || this.props.latencyTracking.reportInteractive()
            }, t = i.__decorate([Object(m.a)(ee, {
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
            }), Object(A.c)("ChannelHeader")], t)
        }(l.Component)
    },
    WClm: function(e, t) {},
    WVx7: function(e, t, n) {
        "use strict";

        function a(e) {
            return u.__awaiter(this, void 0, void 0, function() {
                var t, n, a, i, r;
                return u.__generator(this, function(l) {
                    switch (l.label) {
                        case 0:
                            if (t = h.b.get("bits_truex_partner_hash", ""), !(n = h.b.get("bits_truex_api_url", "")) || !t) return h.i.warn("Truex API info missing from dynamic settings"), [2, b.Error];
                            l.label = 1;
                        case 1:
                            return l.trys.push([1, 5, , 6]), [4, fetch(n + "?placement.key=" + t + "&user.uid=" + e + "&max_activities=1")];
                        case 2:
                            return (a = l.sent()).ok ? [4, a.json()] : [3, 4];
                        case 3:
                            if ((i = l.sent()) && Array.isArray(i) && i.length) return [2, b.Available];
                            l.label = 4;
                        case 4:
                            return [2, b.Unavailable];
                        case 5:
                            return r = l.sent(), h.i.warn("Failed checking ad availability from TrueX, probably due to AdBlock", r), [2, b.AdBlocked];
                        case 6:
                            return [2]
                    }
                })
            })
        }

        function i(e) {
            return {
                adModalOpen: Object(c.b)(e, C),
                isLoggedIn: Object(d.d)(e)
            }
        }

        function r(e) {
            return {
                showWatchAdModal: function(t) {
                    return e(Object(s.d)(C, t))
                }
            }
        }
        var l, o = n("RH2O"),
            s = n("V5M+"),
            c = n("Iw4B"),
            d = n("Aj/L"),
            u = n("TToO"),
            m = n("U7vG"),
            p = n("2KeS"),
            h = n("6sO2"),
            g = n("+8VM"),
            f = n("7vx8"),
            v = n("oIkB");
        ! function(e) {
            e[e.ExitEarly = 0] = "ExitEarly", e[e.Unknown = 1] = "Unknown", e[e.Adblock = 2] = "Adblock", e[e.LimitReached = 3] = "LimitReached"
        }(l || (l = {}));
        var b, k = n("4JjK"),
            y = n("/LBW"),
            _ = n("Odds"),
            S = n("zzpv"),
            E = (n("x583"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {}, t.hasAwarded = !1, t.messageHandler = function(e) {
                        return u.__awaiter(t, void 0, void 0, function() {
                            var t, n, a, i, r;
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
                                            if (!(a = JSON.parse(t.activityJSON))) return [2];
                                            Object(y.g)({
                                                campaignID: a.campaign_id.toString(),
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
                                            if (!(a = JSON.parse(t.activityJSON))) return [2];
                                            Object(y.f)({
                                                requestID: t.requestID,
                                                adblock: !1,
                                                campaignID: a.campaign_id.toString()
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
                                        return i = o.sent(), this.hasAwarded = !0, this.props.onBitsAwarded && this.props.onBitsAwarded(i.data.redeemTrueXAd.grantedBits), [3, 8];
                                    case 7:
                                        return r = o.sent(), h.i.warn("Error while redeeming bits for truex ad", r), this.props.onError && this.props.onError(l.Unknown), [3, 8];
                                    case 8:
                                        return [3, 10];
                                    case 9:
                                        return this.props.onError && (t.type === k.a.LimitReached ? this.props.onError(l.LimitReached) : t.type === k.a.Adblock ? this.props.onError(l.Adblock) : t.type === k.a.OnError ? this.props.onError(l.Unknown) : this.hasAwarded || this.props.onError(l.ExitEarly)), this.props.closeModal(), [3, 10];
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
                    return m.createElement(_._19, {
                        background: _.m.Base
                    }, m.createElement("div", {
                        className: "t-watch-ads-modal",
                        style: this.state.customDimensions
                    }, m.createElement(g.a, null), m.createElement("iframe", {
                        src: "/products/bits/ad"
                    })))
                }, t = u.__decorate([Object(f.a)(S, {
                    name: "redeemTrueXAd"
                })], t)
            }(m.Component)),
            C = Object(o.a)(null, function(e) {
                return Object(p.bindActionCreators)({
                    closeModal: s.c
                }, e)
            })(E),
            w = n("HW6M"),
            N = n("jF7o"),
            A = n("zCIC");
        ! function(e) {
            e[e.Error = 0] = "Error", e[e.AdBlocked = 1] = "AdBlocked", e[e.Unavailable = 2] = "Unavailable", e[e.Available = 3] = "Available"
        }(b || (b = {}));
        var B, x = function(e) {
                var t = null;
                return e.disableWatchAd && (t = Object(h.d)("Try again later", "Bits--WatchAdOffer")), m.createElement(_._19, {
                    className: "bits-buy-card__offer-row",
                    display: _.H.Flex,
                    flexShrink: 0,
                    borderBottom: !0,
                    justifyContent: _.U.Between,
                    flexWrap: _.K.NoWrap,
                    padding: {
                        x: 2,
                        y: 1
                    }
                }, m.createElement(_.V, {
                    padding: {
                        right: 4
                    }
                }, m.createElement("strong", null, Object(h.d)("Get {minBitsCount} or more Bits by watching short ads", {
                    minBitsCount: e.minPayout
                }, "Bits--WatchAdOffer"))), m.createElement(_.V, {
                    flexShrink: 0,
                    display: _.H.Flex,
                    flexDirection: _.J.Column,
                    alignItems: _.c.End
                }, m.createElement(_.u, {
                    type: _.z.Hollow,
                    "data-a-target": "bits-watch-ad",
                    onClick: e.onWatchAdClick,
                    disabled: e.disableWatchAd
                }, Object(h.d)("Watch Ad", "Bits--WatchAdOffer")), t && m.createElement(_.V, {
                    className: "bits-buy-card__sub-text",
                    alignSelf: _.d.Stretch,
                    textAlign: _._24.Center,
                    margin: {
                        top: .5
                    }
                }, t)))
            },
            O = /version\/([\w\.]+).+?(mobile\s?safari|safari)/i,
            I = function(e) {
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
                                    return [4, a(this.props.truexUserID)];
                                case 1:
                                    return e = t.sent(), Object(y.e)({
                                        channel: this.props.channelLogin,
                                        channelID: this.props.channelID,
                                        available: e === b.Available
                                    }), e !== b.Available && e !== b.AdBlocked && this.setState({
                                        enableWatchAd: !1
                                    }), [2]
                            }
                        })
                    })
                }, t.prototype.render = function() {
                    return O.test(navigator.userAgent) ? null : m.createElement(x, u.__assign({}, this.props, {
                        disableWatchAd: !this.state.enableWatchAd
                    }))
                }, t
            }(m.Component),
            F = n("jxGs"),
            T = n("3iBR"),
            L = n("iydZ"),
            D = n("ZJYd"),
            j = n("CFVp"),
            U = n("qe65"),
            V = (n("OLKT"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.handleBuyClick = function(e) {
                        var n = t.props.channelID || "",
                            a = Object(D.b)({
                                trackBitsCardInteraction: t.props.trackBitsCardInteraction,
                                channelID: n,
                                purchaseUrl: e.currentTarget.dataset.purchaseUrl,
                                bitsAmount: e.currentTarget.dataset.bitsAmount,
                                closeAllBits: t.props.closeAllBits,
                                location: t.props.location
                            });
                        a && (t.props.onBuyPopupClose(a), t.props.onClose())
                    }, t
                }
                return u.__extends(t, e), t.prototype.render = function() {
                    if (this.props.offer.type === F.a) {
                        if (!this.props.channelLogin) return null;
                        var e = this.props.currentUserSHA || "";
                        return m.createElement(I, {
                            key: "wateb",
                            minPayout: this.props.offer.bits,
                            onWatchAdClick: this.props.handleWatchAdClick,
                            truexUserID: e,
                            channelID: this.props.channelID || "",
                            channelLogin: this.props.channelLogin
                        })
                    }
                    var t = null;
                    Object(D.c)(this.props.offer) ? t = m.createElement(_.V, {
                        className: "bits-buy-card-offer-row__bonus-text bits-buy-card-offer-row__bonus-text-headline"
                    }, m.createElement(_._23, {
                        type: _._28.Strong,
                        fontSize: _.L.Size6
                    }, Object(h.d)("Special Offer: 1st Time Buyers", "Bits--BuyCard"))) : Object(D.d)(this.props.offer) && null !== this.props.offer.promotion && this.props.offer.promotion.id === F.c && (t = m.createElement(_.V, {
                        className: "bits-buy-card-offer-row__bonus-text bits-buy-card-offer-row__bonus-text-headline"
                    }, m.createElement(_._23, {
                        type: _._28.Strong,
                        fontSize: _.L.Size6
                    }, Object(h.d)("Flash Sale: Now thru Nov. 27!", "Bits--BuyCard"))));
                    var n = null;
                    this.props.offer.discount && (n = m.createElement("div", {
                        className: "bits-buy-card-offer-row__sub-text"
                    }, Object(h.d)("{percentOff,number,percent} discount", {
                        percentOff: this.props.offer.discount
                    }, "Bits--BuyCard")));
                    var a = null;
                    (Object(D.c)(this.props.offer) || Object(D.e)(this.props.offer)) && (a = m.createElement("div", {
                        className: "bits-buy-card-offer-row__sub-text"
                    }, Object(h.d)("one per account", "Bits--BuyCard")));
                    var i = this.props.isLastRow ? _._19 : _.V;
                    return m.createElement(i, {
                        className: "bits-buy-card-offer-row",
                        flexShrink: 0,
                        display: _.H.Flex,
                        justifyContent: _.U.Center,
                        borderBottom: this.props.isLastRow,
                        flexDirection: _.J.Column,
                        padding: {
                            x: 2,
                            y: 1
                        }
                    }, t, m.createElement(_.V, {
                        display: _.H.Flex,
                        justifyContent: _.U.Between,
                        alignItems: _.c.Center
                    }, m.createElement(_.V, {
                        flexGrow: 1
                    }, m.createElement(_._23, {
                        type: _._28.H5,
                        color: _.F.Base,
                        bold: !0
                    }, this.props.offer.bits, " Bits"), this.getAvailableTiers(this.props.offer.bits)), m.createElement(_.V, {
                        flexShrink: 0,
                        display: _.H.Flex,
                        flexDirection: _.J.Column,
                        alignItems: _.c.End
                    }, m.createElement(_.u, {
                        onClick: this.handleBuyClick,
                        "data-purchase-url": this.props.offer.url,
                        "data-bits-amount": this.props.offer.bits,
                        "data-a-target": "bits-purchase-button-" + this.props.offer.bits
                    }, this.props.offer.price), (n || a) && m.createElement(_.V, {
                        alignSelf: _.d.Stretch,
                        textAlign: _._24.Right,
                        margin: {
                            top: .5
                        }
                    }, n, a))))
                }, t.prototype.getAvailableTiers = function(e) {
                    var t = this.props.bitsConfig.indexedActions[T.f];
                    t || (t = Object(j.b)());
                    var n = t.orderedTiers.filter(function(t) {
                        return t.bits <= e
                    }).reverse();
                    return m.createElement(_.V, {
                        padding: {
                            top: .5
                        },
                        className: "bits-buy-card-offer-row__tier-bits-images"
                    }, n.map(function(e) {
                        return m.createElement(U.a, {
                            key: e.bits,
                            sources: Object(L.b)(e, 2, !1)
                        })
                    }))
                }, t
            }(m.Component)),
            P = (n("sgUC"), function(e) {
                var t = [],
                    n = [],
                    a = null;
                return e.offers.forEach(function(i, r) {
                    var l = m.createElement(V, {
                            key: i.id,
                            offer: i,
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
                        o = Object(D.d)(i),
                        s = Object(D.c)(i),
                        c = i.type === F.a;
                    s && !e.hidePromos ? t.push(l) : o && !s ? t.push(l) : c && !e.hideWateb ? a = l : c || o || n.push(l)
                }), e.fullsize ? m.createElement(_.V, {
                    className: "bits-buy-card-offers__full-size",
                    flexGrow: 1,
                    flexWrap: _.K.NoWrap,
                    display: _.H.Flex,
                    flexDirection: _.J.Column
                }, a, t, n) : m.createElement(A.b, {
                    className: "bits-buy-card-offers__scroll-view"
                }, m.createElement(_.V, {
                    flexGrow: 1,
                    flexWrap: _.K.NoWrap,
                    display: _.H.Flex,
                    flexDirection: _.J.Column
                }, a, t, n))
            }),
            H = function(e) {
                var t = null;
                e.pricesIncludeVAT && (t = m.createElement(_._23, {
                    italic: !0,
                    type: _._28.P,
                    color: _.F.Alt
                }, Object(h.d)("Prices include VAT", "Bits--BuyCard")));
                var n = null;
                e.minBitsToCheer && e.minBitsToCheer > 1 && (n = m.createElement(_._23, {
                    color: _.F.Alt
                }, Object(h.d)("{displayName} requires {minBits} Bits to Cheer in this channel.", {
                    displayName: e.displayName,
                    minBits: e.minBitsToCheer
                }, "Bits--BuyCard")));
                var a = null;
                return void 0 !== e.bitsBalance && null !== e.bitsBalance && (a = m.createElement(_._23, {
                    color: _.F.Alt
                }, Object(h.d)("You have {totalBits} Bits", {
                    totalBits: m.createElement("strong", {
                        "data-a-target": "buy-card-bits-count"
                    }, e.bitsBalance)
                }, "Bits--BuyCard"))), m.createElement(_._19, {
                    className: "bits-buy-card-header",
                    padding: {
                        x: 1,
                        bottom: 1
                    },
                    borderBottom: !0,
                    flexShrink: 0
                }, m.createElement(_.V, {
                    margin: {
                        bottom: 1
                    }
                }, m.createElement(_._23, {
                    type: _._28.H4,
                    color: _.F.Alt
                }, Object(h.d)("Purchase Bits", "Bits--BuyCard")), t), a, n)
            },
            W = n("nrdj"),
            M = function(e) {
                return m.createElement(_.V, {
                    display: _.H.Flex,
                    flexGrow: 1,
                    flexDirection: _.J.Column,
                    alignItems: _.c.Center,
                    fullWidth: !0,
                    flexWrap: _.K.NoWrap,
                    padding: {
                        y: 1
                    }
                }, m.createElement(W.a, {
                    prefix: "cheer",
                    amount: e.amount,
                    bitsConfig: e.bitsConfig,
                    showAmount: !0,
                    showImage: !0
                }), m.createElement(_.V, {
                    display: _.H.Flex,
                    padding: {
                        top: 1
                    },
                    flexGrow: 1,
                    flexDirection: _.J.Column,
                    alignItems: _.c.Center,
                    flexWrap: _.K.NoWrap
                }, m.createElement(_._23, {
                    type: _._28.H4,
                    bold: !0
                }, Object(h.d)("You got {bitsAmount,number} Bits!", {
                    bitsAmount: e.amount
                }, "Bits--WatchAdAward")), m.createElement(_.Q, {
                    padding: {
                        top: 1
                    }
                }, m.createElement(_._23, {
                    color: _.F.Alt2
                }, Object(h.d)("{bitsAmount,number} Bits were added to your Bit inventory.", {
                    bitsAmount: e.amount
                }, "Bits--WatchAdAward"), m.createElement("br", null), Object(h.d)("You can use these Bits to Cheer!", "Bits--WatchAdAward")))), m.createElement(_.V, {
                    display: _.H.Flex,
                    padding: {
                        x: 1,
                        top: 3
                    },
                    alignSelf: _.d.Stretch,
                    justifyContent: _.U.Between
                }, m.createElement(_.u, {
                    onClick: e.onStartCheering
                }, Object(h.d)("Start Cheering", "Bits--WatchAdAward")), m.createElement(_.u, {
                    type: _.z.Hollow,
                    onClick: e.onWatchAnother,
                    disabled: !e.hasAdAvailable
                }, Object(h.d)("Watch Another", "Bits--WatchAdAward"))))
            },
            R = function(e) {
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
                                    return [4, a(this.props.truexUserID)];
                                case 1:
                                    return e.sent() !== b.Available && this.setState({
                                        hasAdAvailable: !1
                                    }), [2]
                            }
                        })
                    })
                }, t.prototype.render = function() {
                    return m.createElement(M, u.__assign({}, this.props, {
                        hasAdAvailable: this.state.hasAdAvailable
                    }))
                }, t
            }(m.Component),
            z = (n("q8Cw"), function(e) {
                var t = Object(h.d)("Something's wrong!", "Bits--WatchAdError"),
                    n = Object(h.d)("Something went wrong. Wait a while and try again.", "Bits--WatchAdError"),
                    a = "adserrorgeneric";
                switch (e.type) {
                    case l.Adblock:
                        a = "adserroradblock", n = Object(h.d)("We can't load this Ad, probably because Ad Blocking software is running. To watch an ad and get Bits, please disable all Ad Blocking software.", "Bits--WatchAdError");
                        break;
                    case l.LimitReached:
                        a = "adserrorlimit", t = Object(h.d)("Ad Limit Reached", "Bits--WatchAdError"), n = Object(h.d)("That's all the Ads we have for now. Try again tomorrow!", "Bits--WatchAdError");
                        break;
                    case l.ExitEarly:
                        n = Object(h.d)("To get Bits, you must view and interact with the Ad for the minimum amount of time.", "Bits--WatchAdError")
                }
                var i = m.createElement(_.V, {
                    className: "watch-ad-error__footer",
                    display: _.H.Flex,
                    padding: {
                        top: 2
                    },
                    alignSelf: _.d.Stretch,
                    justifyContent: _.U.Center
                }, m.createElement(_.u, {
                    onClick: e.onTryAgain
                }, Object(h.d)("Try Again", "Bits--WatchAdError")));
                return e.type === l.LimitReached && (i = m.createElement(_.V, {
                    className: "watch-ad-error__footer",
                    display: _.H.Flex,
                    padding: {
                        top: 2
                    },
                    alignSelf: _.d.Stretch,
                    justifyContent: _.U.Between
                }, m.createElement(_.u, {
                    onClick: e.onClose
                }, Object(h.d)("Got It", "Bits--WatchAdError")), m.createElement(_.u, {
                    onClick: e.onTryAgain,
                    type: _.z.Hollow
                }, Object(h.d)("Buy Bits", "Bits--WatchAdError")))), m.createElement(_.V, {
                    padding: {
                        x: 1
                    },
                    display: _.H.Flex,
                    flexGrow: 1,
                    flexDirection: _.J.Column,
                    alignItems: _.c.Center,
                    fullWidth: !0,
                    flexWrap: _.K.NoWrap
                }, m.createElement(_.V, {
                    padding: {
                        y: 2
                    }
                }, m.createElement("img", {
                    className: "watch-ad-error__error-image",
                    src: T.b + "/light/static/1/" + a + ".png"
                })), m.createElement(_.V, {
                    padding: {
                        bottom: 1
                    }
                }, m.createElement(_._23, {
                    type: _._28.H4,
                    bold: !0
                }, t)), m.createElement(_._23, {
                    color: _.F.Alt2
                }, n), i)
            }),
            G = n("aqNN");
        n("6Rwu");
        ! function(e) {
            e[e.Inactive = 0] = "Inactive", e[e.Error = 1] = "Error", e[e.Awarded = 2] = "Awarded"
        }(B || (B = {}));
        var q = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        wateb: B.Inactive,
                        watebError: null,
                        bitsAwarded: 0
                    }, t.onBuyPopupClose = function(e) {
                        Object(N.a)(e, function() {
                            t.props.data && t.props.data.refetch()
                        })
                    }, t.onAdBitsAwarded = function(e) {
                        t.props.data && !t.props.data.loading && t.props.data.refetch(), t.setState({
                            wateb: B.Awarded,
                            bitsAwarded: e
                        })
                    }, t.handleWatchAdClick = function() {
                        return u.__awaiter(t, void 0, void 0, function() {
                            return u.__generator(this, function(e) {
                                return this.props.data && this.props.data.currentUser && this.props.data.user ? (this.props.showWatchAdModal({
                                    tuid: this.props.data.currentUser.idSHA1,
                                    onBitsAwarded: this.onAdBitsAwarded,
                                    onError: this.receiveAdErrorState,
                                    requestRef: y.c.ShowAdButton,
                                    channelID: this.props.data.user.id
                                }), [2]) : [2]
                            })
                        })
                    }, t.receiveAdErrorState = function(e) {
                        t.setState({
                            wateb: B.Error,
                            watebError: e
                        })
                    }, t.resetAdErrorState = function() {
                        t.state.wateb === B.Error && (t.setState({
                            wateb: B.Inactive
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
                        t = w({
                            "bits-buy-card": !0,
                            "bits-buy-card__chat-tooltip": this.props.location === y.b.ChatTooltip
                        }),
                        n = null;
                    if (this.props.location === y.b.ChatTooltip && (n = m.createElement("button", {
                            className: "bits-buy-card__close",
                            onClick: this.props.onClose,
                            "data-a-target": "bits-buy-card-close-button"
                        }, m.createElement(_._10, {
                            asset: _._11.Close,
                            height: 11,
                            width: 11
                        }))), !this.props.data || this.props.data.loading) return m.createElement(_._19, u.__assign({
                        className: t,
                        "data-a-target": "bits-buy-card-loading",
                        display: _.H.Flex,
                        flexDirection: _.J.Column,
                        alignItems: _.c.Center,
                        justifyContent: _.U.Center,
                        textAlign: _._24.Center
                    }, e), m.createElement(_.Z, {
                        delay: 0
                    }), m.createElement(_.V, {
                        padding: {
                            top: 2
                        }
                    }, m.createElement(_._23, {
                        italic: !0
                    }, Object(h.d)("Fetching bits", "Bits--BuyCard"))));
                    if (this.props.data.error) return m.createElement(_.V, u.__assign({
                        className: w(t, "bits-buy-card--shorter"),
                        display: _.H.Flex,
                        flexDirection: _.J.Column,
                        alignItems: _.c.Center,
                        justifyContent: _.U.Center,
                        padding: 2,
                        textAlign: _._24.Center,
                        "data-a-target": "bits-buy-card-error"
                    }, e), n, m.createElement(_._23, {
                        italic: !0
                    }, Object(h.d)("Bits prices are unavailable right now. Check back again later.", "Bits--BuyCard")));
                    var a = this.renderWatebCard();
                    if (a) return m.createElement(_._19, u.__assign({
                        className: w(t, "bits-buy-card--shorter"),
                        display: _.H.Flex,
                        flexDirection: _.J.Column,
                        alignItems: _.c.Center,
                        justifyContent: _.U.Center,
                        textAlign: _._24.Center,
                        padding: 1
                    }, e), n, a);
                    var i = [];
                    this.props.data.currentUser ? i = this.props.data.currentUser.bitsOffers : this.props.data.bitsOffers && (i = this.props.data.bitsOffers);
                    var r = i.filter(function(e) {
                            return e.type === F.b
                        }).some(function(e) {
                            return e.includesVAT
                        }),
                        l = this.props.data.user ? this.props.data.user.id : "",
                        o = m.createElement(P, {
                            offers: i,
                            fullsize: this.props.fullsize,
                            hidePromos: this.props.hidePromos,
                            hideWateb: this.props.hideWateb,
                            bitsConfig: this.props.bitsConfig,
                            channelID: l,
                            channelLogin: this.props.channelLogin,
                            closeAllBits: this.props.closeAllBits,
                            currentUserSHA: this.props.data && this.props.data.currentUser && this.props.data.currentUser.idSHA1,
                            handleWatchAdClick: this.handleWatchAdClick,
                            location: this.props.location,
                            onBuyPopupClose: this.onBuyPopupClose,
                            onClose: this.props.onClose,
                            trackBitsCardInteraction: this.props.trackBitsCardInteraction
                        }),
                        s = null;
                    return this.props.location === y.b.ChatTooltip && (s = m.createElement(H, {
                        bitsBalance: this.props.data && this.props.data.currentUser && this.props.data.currentUser.bitsBalance,
                        displayName: this.props.data && this.props.data.user && this.props.data.user.displayName || this.props.channelLogin || "",
                        minBitsToCheer: this.props.data && this.props.data.user && this.props.data.user.cheer && this.props.data.user.cheer.settings.cheerMinimumBits,
                        pricesIncludeVAT: r
                    })), m.createElement(_._19, u.__assign({
                        className: t,
                        padding: {
                            top: 1
                        },
                        display: _.H.Flex,
                        flexDirection: _.J.Column,
                        "data-a-target": "bits-buy-card"
                    }, e), n, s, o)
                }, t.prototype.renderWatebCard = function() {
                    if (this.props.data && this.props.data.currentUser) switch (this.state.wateb) {
                        case B.Awarded:
                            return m.createElement(R, {
                                bitsConfig: this.props.bitsConfig,
                                amount: this.state.bitsAwarded,
                                onStartCheering: this.props.onClose,
                                onWatchAnother: this.handleWatchAdClick,
                                truexUserID: this.props.data.currentUser.idSHA1
                            });
                        case B.Error:
                            return m.createElement(z, {
                                type: this.state.watebError || l.Unknown,
                                onClose: this.props.onClose,
                                onTryAgain: this.resetAdErrorState
                            });
                        default:
                            return !1
                    }
                }, t = u.__decorate([Object(f.a)(G, {
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
            J = Object(o.a)(i, r)(q);
        n.d(t, !1, function() {
            return i
        }), n.d(t, !1, function() {
            return r
        }), n.d(t, "a", function() {
            return J
        })
    },
    ZJYd: function(e, t, n) {
        "use strict";

        function a(e) {
            return e.type === l.b && null !== e.promotion && !!e.promotion
        }
        t.c = function(e) {
            return e.type !== l.a && a(e) && null !== e.promotion && e.promotion.type === l.d
        }, t.e = function(e) {
            return e.type !== l.a && a(e) && null !== e.promotion && e.promotion.type === l.e
        }, t.d = a, t.a = function(e) {
            var t = 0,
                n = 0,
                a = 0;
            return e.forEach(function(e) {
                e.cheerAmount && (t = Math.max(t, e.cheerAmount), n = n ? Math.min(n, e.cheerAmount) : e.cheerAmount, a += e.cheerAmount)
            }), {
                total: a,
                smallestCheermote: n,
                largestCheermote: t
            }
        }, t.f = function(e) {
            var t = e.messageBits,
                n = t.total,
                a = t.largestCheermote,
                r = t.smallestCheermote;
            if (n) {
                var l = {
                    cheerAboveMaxBitsPerEmote: a > o.j,
                    totalAboveBalance: n > e.balance,
                    totalBelowCheerMinimum: n < e.cheerMinimumBits,
                    totalBelowEmoteMinimum: r < e.emoteMinimumBits,
                    inputLongerThanMaxBitsMessage: e.inputValue.length > o.i,
                    inputStartsWithCommand: e.inputValue.startsWith("/")
                };
                if (Object.keys(l).some(function(e) {
                        return l[e]
                    })) return i.__assign({
                    canSpend: !1
                }, l)
            }
            return {
                canSpend: !0
            }
        }, t.b = function(e) {
            var t = e.purchaseUrl;
            if (t) {
                e.trackBitsCardInteraction(Object(s.d)(e.bitsAmount), {
                    location: e.location
                });
                var n = t.replace("{channelID}", e.channelID),
                    a = window.open(n, "Twitch", "width=1024,height=600,scrollbars=yes");
                return !a || Object(r.a)() ? (e.closeAllBits && e.closeAllBits(), void e.trackBitsCardInteraction(s.a.CloseCard, {
                    location: e.location
                })) : (a.focus(), a)
            }
        };
        var i = n("TToO"),
            r = n("Ouuk"),
            l = n("jxGs"),
            o = n("3iBR"),
            s = n("/LBW")
    },
    annQ: function(e, t, n) {
        function a(e) {
            return e.filter(function(e) {
                if ("FragmentDefinition" !== e.kind) return !0;
                var t = e.name.value;
                return !r[t] && (r[t] = !0, !0)
            })
        }
        var i = {
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
        i.loc.source = {
            body: '# Documentation about how to use GraphQL is located in the Data Access Guide:\n# https://git-aws.internal.justin.tv/pages/twilight/twilight-docs/docs/guides/data-access.html\n# Additionally use the GraphQL explorer (https://api.twitch.tv/gql/explore) to browse\n# available GraphQL data and construct your query.\n#import "twilight/features/bits/models/bits-offers-fragment.gql"\n#import "twilight/features/chat/models/cheer-fragment.gql"\nquery GetBitsButton_Bits($isLoggedIn: Boolean! $withChannel: Boolean! $login: String!) {\nbitsOffers @skip(if: $isLoggedIn) {\n...bitsOffersFragment\n}\ncurrentUser @include(if: $isLoggedIn) {\nid\nidSHA1\nbitsBalance\nbitsOffers {\n...bitsOffersFragment\n}\n}\nuser(login: $login) @include(if: $withChannel) {\nid\n...cheer\n}\n}',
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        var r = {};
        i.definitions = i.definitions.concat(a(n("OcEY").definitions)), i.definitions = i.definitions.concat(a(n("576g").definitions)), e.exports = i
    },
    aqNN: function(e, t, n) {
        var a = {
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
        a.loc.source = {
            body: '#import "twilight/features/bits/models/bits-offers-fragment.gql"\nquery Bits_BuyCard_Offers($withChannel: Boolean! $isLoggedIn: Boolean! $channelLogin: String!) {\nbitsOffers @skip(if: $isLoggedIn) {\n...bitsOffersFragment\n}\ncurrentUser @include(if: $isLoggedIn) {\nid\nidSHA1\nbitsBalance\nbitsOffers {\n...bitsOffersFragment\n}\n}\nuser(login: $channelLogin) @include(if: $withChannel) {\nid\ndisplayName\ncheer {\nid\nsettings {\ncheerMinimumBits\n}\n}\n}\n}',
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        var i = {};
        a.definitions = a.definitions.concat(function(e) {
            return e.filter(function(e) {
                if ("FragmentDefinition" !== e.kind) return !0;
                var t = e.name.value;
                return !i[t] && (i[t] = !0, !0)
            })
        }(n("OcEY").definitions)), e.exports = a
    },
    bkpq: function(e, t, n) {
        "use strict";

        function a(e) {
            var t = new Map,
                n = new Map,
                a = new Map,
                r = new Map;
            return e.images.forEach(function(e) {
                "LIGHT" === e.theme ? e.isAnimated ? n.set(e.dpiScale, e.url) : t.set(e.dpiScale, e.url) : e.isAnimated ? r.set(e.dpiScale, e.url) : a.set(e.dpiScale, e.url)
            }), i.__assign({
                indexedImages: {
                    LIGHT: {
                        static: t,
                        animated: n
                    },
                    DARK: {
                        static: a,
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
                    return a(e)
                });
                "Cheer" === e.prefix && o.push(function() {
                    var e = ["DARK", "LIGHT"],
                        t = ["static", "animated"],
                        n = [];
                    return [1, 1.5, 2, 3, 4].forEach(function(a) {
                        e.forEach(function(e) {
                            t.forEach(function(t) {
                                n.push({
                                    url: l.a + "/cheer/" + e.toLowerCase() + "/" + t + "/100000/" + a + "." + ("static" === t ? "png" : "gif"),
                                    isAnimated: "animated" === t,
                                    theme: e,
                                    dpiScale: a
                                })
                            })
                        })
                    }), a({
                        id: "Cheer:100000",
                        bits: 1e5,
                        color: l.e[r.a.Yellow],
                        images: n
                    })
                }()), o.sort(function(e, t) {
                    return t.bits - e.bits
                });
                var s = i.__assign({}, e, {
                    indexedTiers: new Map(o.map(function(e) {
                        return [e.bits, e]
                    })),
                    orderedTiers: o
                });
                t.push(s), n[s.prefix.toLowerCase()] = s
            }), {
                indexedActions: n,
                orderedActions: t
            }
        };
        var i = n("TToO"),
            r = n("I89S"),
            l = n("3iBR")
    },
    czpb: function(e, t, n) {
        "use strict";
        var a = n("6sO2"),
            i = n("Ejve"),
            r = n("MSvX");
        t.a = function(e) {
            return a.b.get(r.a, !1) || a.a.buildType !== i.a.Production ? "string" == typeof e ? e : e.pathname || "" : "string" == typeof e ? l + e : l + e.pathname
        }, t.b = function() {
            return !a.b.get(r.a, !1) && a.a.buildType === i.a.Production
        };
        var l = "https://www.twitch.tv"
    },
    fHoP: function(e, t) {},
    iMOk: function(e, t, n) {
        "use strict";

        function a(e) {
            var t, n = Object(r.d)("{bitsAmount} Bits", {
                bitsAmount: e.count.toString()
            }, "Bits--BitsCount");
            if (e.withImage) {
                var a = e.bitsConfig.indexedActions[o.f];
                a || (a = Object(c.b)());
                var u = a.orderedTiers.find(function(t) {
                    return t.bits <= e.count
                });
                if (u) {
                    var m = Object(s.b)(u);
                    return void 0 !== e.themeOverride && (e.themeOverride === l.a.Light ? m.dark = m.light : m.light = m.dark), t = i.createElement(d.a, {
                        className: "bits-count--img",
                        sources: m
                    }), i.createElement("strong", {
                        className: "bits-count",
                        "data-a-target": "bits-count"
                    }, i.createElement("span", null, t, " ", e.withText ? n : ""))
                }
            }
            return i.createElement("strong", {
                className: "bits-count",
                "data-a-target": "bits-count"
            }, i.createElement("span", null, n))
        }
        var i = n("U7vG"),
            r = n("6sO2"),
            l = n("NXs7"),
            o = n("3iBR"),
            s = n("iydZ"),
            c = n("CFVp"),
            d = n("qe65");
        n("1pvm");
        n.d(t, "a", function() {
            return a
        })
    },
    "j7/Y": function(e, t, n) {
        "use strict";

        function a(e) {
            return function(t) {
                var n = function(n) {
                    function a(t) {
                        var a = n.call(this, t) || this;
                        return a.tracked = !1, a.referenceTracking = {}, a.trackPageview = function() {
                            if (!(a.tracked || e.skip && e.skip(a.props))) {
                                a.tracked = !0, s.n.adBlockSentinel.pageTransition();
                                var t = {};
                                "function" == typeof e.properties ? t = e.properties(a.props) : e.properties && (t = i.__assign({}, e.properties));
                                var n = i.__assign({}, a.props);
                                n.location && n.location.state && (t.medium = n.location.state.medium, t.content = n.location.state.content, t.content_index = n.location.state.content_index);
                                var r = a.referenceTracking,
                                    l = r.content,
                                    o = r.medium,
                                    c = r.content_index;
                                s.n.tracking.trackPageview(i.__assign({
                                    content: l,
                                    medium: o,
                                    content_index: c,
                                    location: e.location
                                }, t))
                            }
                        }, s.i.debug("pageViewTracking", e), t.rootLatencyTracker ? t.rootLatencyTracker.setLocation(e.location) : s.i.warn("No latency tracker exists! This means no data will be sent to Spade.", e), a
                    }
                    return i.__extends(a, n), a.prototype.componentDidMount = function() {
                        var e = this;
                        this.referenceTracking = this.stripTTParams(this.props.history.location), this.trackPageview(), this.props.history.listen(function(t, n) {
                            "REPLACE" !== n && (e.tracked = !1, e.referenceTracking = {})
                        })
                    }, a.prototype.componentDidUpdate = function() {
                        this.trackPageview()
                    }, a.prototype.render = function() {
                        return l.createElement(t, i.__assign({}, this.props))
                    }, a.prototype.stripTTParams = function(e) {
                        var t = "" !== e.search ? r.parse(e.search) : {},
                            n = {
                                content: t.tt_content,
                                content_index: t.tt_content_index,
                                medium: t.tt_medium
                            };
                        if (delete t.tt_content, delete t.tt_content_index, delete t.tt_medium, n.medium || n.content) {
                            var a = "",
                                i = r.stringify(t);
                            i.length > 0 && (a = "?" + i), this.props.history.replace({
                                pathname: e.pathname,
                                hash: e.hash,
                                search: a
                            })
                        }
                        return n
                    }, a
                }(l.Component);
                return Object(o.f)(n)
            }
        }
        var i = n("TToO"),
            r = n("OAwv"),
            l = n("U7vG"),
            o = n("F8kA"),
            s = n("6sO2");
        n.d(t, "a", function() {
            return a
        })
    },
    jF7o: function(e, t, n) {
        "use strict";
        t.a = function(e, t) {
            if (e) var n = setInterval(function() {
                var a = !1,
                    i = !1;
                try {
                    a = e.closed, i = !!e.success
                } catch (e) {}
                if (a || i) {
                    t(i);
                    try {
                        e.close()
                    } catch (e) {}
                    clearInterval(n)
                }
            }, 500);
            else a.i.warn("[onPopupClose] Attempted to observe a window that failed to open.")
        };
        var a = n("6sO2")
    },
    jxGs: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return a
        }), n.d(t, "b", function() {
            return i
        }), n.d(t, "d", function() {
            return r
        }), n.d(t, "e", function() {
            return l
        }), n.d(t, "c", function() {
            return o
        });
        var a = "AD",
            i = "BUNDLE",
            r = "first_time_purchase",
            l = "single_purchase",
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
    lGVF: function(e, t) {},
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
        var a, i = n("HW6M"),
            r = n("U7vG"),
            l = n("6sO2"),
            o = n("iydZ"),
            s = n("CFVp"),
            c = n("qe65"),
            d = n("Odds");
        n("PPK2");
        ! function(e) {
            e[e.Large = 4] = "Large", e[e.Medium = 3] = "Medium", e[e.Small = 2] = "Small", e[e.ExtraSmall = 1.5] = "ExtraSmall", e[e.ExtremelySmall = 1] = "ExtremelySmall"
        }(a || (a = {}));
        var u = function(e) {
            var t = e.bitsConfig.indexedActions[e.prefix.toLowerCase()];
            t || (t = Object(s.b)());
            var n = t.orderedTiers.find(function(t) {
                return t.bits <= (e.amount || 100)
            });
            n || (n = t.orderedTiers[0]);
            var u = e.display === d.H.Inline || e.display === d.H.InlineFlex || e.display === d.H.InlineBlock,
                m = null,
                p = i("cheermote-for-amount__cheer-amount", {
                    "cheermote-for-amount__display--table-cell": !u
                }, {
                    "cheermote-for-amount__cheer-amount--medium": e.size === a.Medium
                }, {
                    "cheermote-for-amount__cheer-amount--small": e.size === a.Small || e.size === a.ExtraSmall
                }, {
                    "cheermote-for-amount__cheer-amount--extremely-small": e.size === a.ExtremelySmall
                });
            if (e.amount && e.showAmount) {
                var h = e.formattedNumber ? Object(l.e)(e.amount) : e.amount;
                m = r.createElement(d.Q, {
                    padding: e.size === a.Small ? 0 : void 0,
                    textAlign: e.size === a.Small ? d._24.Center : void 0
                }, r.createElement("strong", {
                    className: p,
                    style: {
                        color: n.color
                    }
                }, h))
            }
            var g = i("cheermote-for-amount__cheer-image", {
                    "cheermote-for-amount__display--table-cell": !u
                }, {
                    "cheermote-for-amount__cheer--inline": u
                }, {
                    "cheermote-for-amount__cheer-image--small": e.size === a.Small
                }, {
                    "cheermote-for-amount__cheer-image--extra-small": e.size === a.ExtraSmall
                }, {
                    "cheermote-for-amount__cheer-image--extremely-small": e.size === a.ExtremelySmall
                }),
                f = r.createElement(c.a, {
                    className: g,
                    sources: Object(o.b)(n, e.size || a.Large, e.animated)
                });
            return e.showImage || (f = null), r.createElement(d.V, {
                className: "cheermote-for-amount",
                display: e.display
            }, f, m)
        };
        n.d(t, "a", function() {
            return u
        }), n.d(t, "b", function() {
            return a
        })
    },
    q8Cw: function(e, t) {},
    sgUC: function(e, t) {},
    w9tK: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return a
        });
        var a = {
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
            SettingsChannel: "private/embed-components",
            SettingsConnections: "private/embed-components",
            SettingsNotifications: "settings.notifications",
            SettingsPrime: "settings.prime",
            SettingsProfile: "settings.profile",
            SettingsSecurity: "private/embed-components",
            StoreMerchPage: "store.merch",
            SubsLandingPage: "subs.landing",
            SubsBroadcasterPage: "subs.broadcaster",
            TeamsDashboardRevenue: "teams.dashboard.revenue",
            TeamsDashboardStats: "teams.dashboard.stats",
            TeamsDashboardMembers: "teams.dashboard.members",
            TeamsDashboardFeaturedChannels: "teams.dashboard.featured-channels",
            TeamsDashboardSettings: "teams.dashboard.settings",
            VideosPage: "videos",
            VideoWatchPage: "video",
            VideoManagerPage: "videoManager.page",
            VideoManagerEditPropertiesPage: "videoManager.edit",
            VideoManagerUploadPage: "videoManager.upload",
            VideoManagerUploadListPage: "videoManager.upload-list"
        }
    },
    weaG: function(e, t) {},
    x583: function(e, t) {},
    ySfT: function(e, t, n) {
        "use strict";
        var a = n("U7vG"),
            i = n("6sO2"),
            r = n("3iBR"),
            l = n("qe65"),
            o = n("Odds"),
            s = (n("6lb1"), {
                themed: !0,
                dark: {
                    "1x": r.b + "/dark/animated/1/cheertutorial.gif"
                },
                light: {
                    "1x": r.b + "/light/animated/1/cheertutorial.gif"
                }
            }),
            c = function() {
                return a.createElement(o.V, {
                    display: o.H.Flex,
                    padding: {
                        top: 5
                    },
                    flexGrow: 1,
                    flexDirection: o.J.Column,
                    justifyContent: o.U.Center,
                    alignItems: o.c.Center
                }, a.createElement(o._23, {
                    type: o._28.H4,
                    bold: !0
                }, a.createElement(l.a, {
                    className: "cheermote-help__tutorial-image",
                    sources: s
                }), Object(i.d)("How to Cheer", "Bits--CheermoteHelp")), a.createElement("p", {
                    className: "t-bits-card__contents-body t-bits-card__contents-body--narrow"
                }, Object(i.d)('Type "cheer" + the number of Bits you want to Cheer.', "Bits--CheermoteHelp")))
            };
        n.d(t, "a", function() {
            return c
        })
    },
    yU6t: function(e, t) {},
    ymbN: function(e, t) {},
    z4Db: function(e, t) {},
    zfLI: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = n("TToO"),
            i = n("U7vG"),
            r = n("BhyV"),
            l = n("6sO2"),
            o = n("yWCw"),
            s = n("zCIC"),
            c = n("j7/Y"),
            d = n("SZoP"),
            u = n("w9tK"),
            m = n("vH/s"),
            p = n("SI0h"),
            h = n("CSlQ"),
            g = n("F8kA"),
            f = n("Odds"),
            v = (n("ymbN"), 0),
            b = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onPrimaryImageLoad = function() {
                        t.props.latencyTracking.reportInteractive()
                    }, t.computeViewsMessage = function() {
                        var e = t.props.totalViews || v;
                        return 0 === e || 1 === e ? Object(l.d)("{viewCount, plural, one {# view}  other {# views}}", {
                            viewCount: e
                        }, "CollectionCard") : Object(l.d)("{viewCount} views", {
                            viewCount: Object(l.f)(e)
                        }, "CollectionCard")
                    }, t
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    var e = Object(l.d)("By {channelName}", {
                        channelName: i.createElement(g.a, {
                            to: this.props.channelLinkTo,
                            className: "collection-card__link",
                            "data-test-selector": "collection-card-channel-link"
                        }, this.props.channelDisplayName)
                    }, "ChannelCollections");
                    return i.createElement(f.A, a.__assign({
                        key: this.props.title
                    }, Object(f._40)(this.props)), i.createElement(f.Q, {
                        className: "collection-card",
                        position: f._4.Relative
                    }, i.createElement(g.a, {
                        to: {
                            pathname: this.props.linkTo,
                            state: {
                                content: "collection_card",
                                medium: "channel_collections"
                            }
                        },
                        title: this.props.title,
                        "data-test-selector": 'collection-card-overlay-link"'
                    }, i.createElement(f.C, {
                        imageAlt: this.props.imageAlt,
                        imageSrc: this.props.imageSrc || l.a.defaultCollectionPreviewURL,
                        aspect: f.k.Aspect16x9,
                        onImageLoad: this.onPrimaryImageLoad,
                        "data-test-selector": "collection-image-body"
                    }, i.createElement(f.V, {
                        position: f._4.Absolute,
                        attachTop: !0,
                        attachLeft: !0,
                        attachRight: !0,
                        attachBottom: !0
                    }, i.createElement(f._19, {
                        alignItems: f.c.Center,
                        display: f.H.InlineFlex,
                        flexDirection: f.J.Column,
                        position: f._4.Absolute,
                        attachRight: !0,
                        color: f.F.Overlay,
                        fontSize: f.L.Size5,
                        className: "collection-card__wrapper",
                        fullHeight: !0,
                        textAlign: f._24.Center,
                        justifyContent: f.U.Center,
                        "data-test-selector": "collection-card-overlay"
                    }, i.createElement("figure", null, i.createElement("svg", {
                        className: "collection-card__svg",
                        width: "19",
                        height: "19",
                        viewBox: "0 0 19 19"
                    }, i.createElement("path", {
                        fillRule: "evenodd",
                        d: "M0,6 L19,6 L19,19 L0,19 L0,6 Z M12.25,12.5 L7,9 L7,16 L12.25,12.5 Z M2,3 L17,3 L17,5 L2,5 L2,3 Z M4,0 L15,0 L15,2 L4,2 L4,0 Z"
                    }))), i.createElement(f._23, null, Object(l.d)("{videoCount, plural, one {# video} other {# videos}}", {
                        videoCount: this.props.videoCount
                    }, "CollectionCard"))))))), i.createElement(f.B, {
                        "data-test-selector": "collection-card-body"
                    }, i.createElement(f.V, {
                        display: f.H.Flex,
                        flexDirection: f.J.Column,
                        flexWrap: f.K.NoWrap,
                        padding: {
                            top: .5
                        }
                    }, i.createElement(f._23, {
                        fontSize: f.L.Size5,
                        ellipsis: !0
                    }, i.createElement(g.a, {
                        to: {
                            pathname: this.props.linkTo,
                            state: {
                                content: "collection_card",
                                medium: "channel_collections"
                            }
                        },
                        className: "collection-card__link",
                        "data-test-selector": "collection-card-title-link"
                    }, this.props.title)), i.createElement(f._23, {
                        color: f.F.Alt2,
                        ellipsis: !0
                    }, i.createElement(f._23, {
                        type: f._28.Span
                    }, e), i.createElement(f._23, {
                        type: f._28.Span
                    }, " · " + this.computeViewsMessage())))))
                }, t
            }(i.Component),
            k = Object(h.c)("CollectionCard")(b),
            y = function(e) {
                var t;
                return t = e.showCollectionsManagerButton ? i.createElement("div", null, i.createElement(f._23, {
                    type: f._28.H4,
                    "data-test-selector": "no-collections"
                }, Object(l.d)("Create a collection of your videos from Video Manager.", "collection-page")), i.createElement(f.V, {
                    padding: {
                        top: 2
                    }
                }, i.createElement(f.u, {
                    type: f.z.Hollow,
                    linkTo: "/" + e.channelLogin + "/manager/collections",
                    "data-test-selector": "no-collections-button"
                }, Object(l.d)("Go to Video Manager", "collection-page")))) : i.createElement(f._23, {
                    type: f._28.H4,
                    italic: !0,
                    "data-test-selector": "no-collections"
                }, Object(l.d)("No collections found.", "collection-page")), i.createElement(f._19, {
                    color: f.F.Alt2,
                    textAlign: f._24.Center,
                    padding: {
                        top: 5
                    }
                }, t)
            },
            _ = n("Ic9h"),
            S = n("mlL3"),
            E = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.componentDidUpdate = function() {
                    if (!this.props.data.loading && this.props.data.user) return l.n.setPageTitle(this.props.data.user.displayName), void this.props.latencyTracking.reportInteractive(this.props.data.user.collections.edges.length + 1);
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e;
                    if (!this.props.data.error && this.props.data.user) {
                        var t = this.props.data.user,
                            n = t.collections.edges.map(function(e) {
                                return e.node
                            }),
                            a = !this.props.data.loading && !this.props.data.error && !!t.collections.pageInfo.hasNextPage,
                            r = null;
                        0 === n.length && (r = i.createElement(y, {
                            showCollectionsManagerButton: this.showCollectionManagerButton(),
                            channelLogin: this.props.match.params.channelLogin
                        }));
                        var c = null;
                        0 !== n.length && this.showCollectionManagerButton() && (c = i.createElement(f.V, {
                            display: f.H.Flex,
                            justifyContent: f.U.End,
                            padding: {
                                bottom: 2
                            }
                        }, i.createElement(f.u, {
                            type: f.z.Hollow,
                            linkTo: "/" + this.props.match.params.channelLogin + "/manager/collections",
                            "data-test-selector": "collections-manage-button"
                        }, Object(l.d)("Manage your collections", "collection-page"))));
                        var u = n.map(function(e, n) {
                            return i.createElement(f.V, {
                                key: e.id,
                                margin: {
                                    bottom: 2
                                }
                            }, i.createElement(k, {
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
                        e = i.createElement("div", null, c, r, i.createElement(f._34, {
                            gutterSize: f._36.Small,
                            childWidth: f._35.Medium,
                            placeholderItems: 20
                        }, u), i.createElement(s.a, {
                            enabled: a,
                            loadMore: this.props.loadMore
                        }))
                    } else if (this.props.data.loading && !this.props.data.user) {
                        for (var m = [], h = 0; h < 12; h++) m.push(i.createElement(f.V, {
                            key: "collection-placeholder-" + h,
                            padding: {
                                bottom: 2
                            },
                            "data-test-selector": "collections-placeholder"
                        }, i.createElement(f.V, {
                            margin: {
                                bottom: .5
                            }
                        }, i.createElement(f.j, {
                            ratio: f.k.Aspect16x9
                        }, i.createElement(f._3, null))), i.createElement(f._23, null, i.createElement(f._3, {
                            width: 150
                        })), i.createElement(f._23, {
                            fontSize: f.L.Size7
                        }, i.createElement(f._3, {
                            width: 100
                        }))));
                        e = i.createElement(f._34, {
                            gutterSize: f._36.Small,
                            childWidth: f._35.Medium,
                            placeholderItems: 20
                        }, m)
                    } else e = i.createElement(f.V, {
                        margin: {
                            top: 5
                        }
                    }, i.createElement(o.a, {
                        message: Object(l.d)("These collections are temporarily unavailable.", "channel-collections")
                    }));
                    return i.createElement(f.V, {
                        fullHeight: !0,
                        "data-test-selector": "channel-collections-page"
                    }, i.createElement(_.a, {
                        currentPage: p.b.Collections,
                        ownerLogin: this.props.match.params.channelLogin
                    }, e))
                }, t.prototype.showCollectionManagerButton = function() {
                    return !(!this.props.data.currentUser || !this.props.data.user) && (this.props.data.currentUser.id === this.props.data.user.id || this.props.data.currentUser.roles.isStaff)
                }, t
            }(i.Component),
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
                    return a.__assign({}, e, {
                        loadMore: function() {
                            return e.data.fetchMore({
                                query: S,
                                variables: a.__assign({}, e.data.variables, {
                                    cursor: e.data.user.collections.edges[Math.max(e.data.user.collections.edges.length - 1, 0)].cursor
                                }),
                                updateQuery: function(e, t) {
                                    var n = t.fetchMoreResult;
                                    return {
                                        user: a.__assign({}, n.user, {
                                            collections: a.__assign({}, n.user.collections, {
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
            w = Object(r.compose)(Object(r.graphql)(S, C), Object(h.c)("ChannelCollectionsPage", {
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
            }))(E);
        n.d(t, "ChannelCollectionsPage", function() {
            return w
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
//# sourceMappingURL=pages.channel-collections-b24ffbf7502731c3b922d9f29dc8334f.js.map