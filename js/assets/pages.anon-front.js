webpackJsonp([47], {
    "+GT7": function(e, t, n) {
        "use strict";
        var a = n("TToO"),
            i = n("U7vG"),
            r = n("F8kA"),
            o = n("6sO2"),
            l = n("IOwa"),
            s = n("Odds"),
            c = (n("LEV+"), function(e) {
                function t() {
                    var t = e.call(this) || this;
                    return t.state = {
                        isPremiereExperimentActive: !1
                    }, t
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    return a.__awaiter(this, void 0, void 0, function() {
                        return a.__generator(this, function(e) {
                            switch (e.label) {
                                case 0:
                                    return [4, o.n.experiments.getAssignment("TWILIGHT_PREMIERE_UPLOAD_FLOW")];
                                case 1:
                                    return "yes" === e.sent() && o.b.get("premiere_video_manager_staff", !1) && this.setState({
                                        isPremiereExperimentActive: !0
                                    }), [2]
                            }
                        })
                    })
                }, t.prototype.render = function() {
                    var e = null;
                    !0 !== this.state.isPremiereExperimentActive && this.props.vodcast && (e = i.createElement(s.V, {
                        display: s.H.InlineBlock,
                        padding: {
                            right: .5
                        }
                    }, i.createElement(s._1, {
                        label: Object(o.d)("Vodcast", "LiveChannelCard")
                    })));
                    var t = Object(o.d)("{viewerCount, plural, one {# viewer on {channel}} other {# viewers on {channel}}}", {
                        viewerCount: this.props.viewerCount,
                        channel: i.createElement(r.a, {
                            to: this.props.channelNameLinkTo,
                            className: "live-channel-card__videos",
                            "data-a-target": "live-channel-card-channel-name-link"
                        }, this.props.channelName)
                    }, "Live Channel Card");
                    return i.createElement("div", a.__assign({
                        className: "live-channel-card"
                    }, Object(s._40)(this.props)), i.createElement(s.A, {
                        key: this.props.title
                    }, i.createElement(s.V, {
                        fullWidth: !0
                    }, i.createElement(s.j, {
                        overflow: !0
                    }, i.createElement("div", null, i.createElement(r.a, {
                        to: this.props.linkTo,
                        title: this.props.title,
                        "data-a-target": "live-channel-card-thumbnail-link"
                    }, i.createElement(s.C, {
                        imageAlt: this.props.imageAlt,
                        imageSrc: this.props.imageSrc,
                        aspect: s.k.Aspect16x9
                    }), this.renderContentType()), this.renderGameBoxArt()))), i.createElement(s.B, null, i.createElement(r.a, {
                        to: this.props.linkTo,
                        className: "live-channel-card__channel",
                        "data-a-target": "live-channel-card-title-link"
                    }, i.createElement(s.Q, {
                        margin: {
                            top: .5
                        }
                    }, i.createElement(s._23, {
                        type: s._28.H3,
                        fontSize: s.L.Size5,
                        lineHeight: s.W.Body,
                        ellipsis: !0,
                        className: "live-channel-card__title"
                    }, this.props.title))), i.createElement(s.V, {
                        className: "live-channel-card__meta",
                        display: s.H.Flex,
                        flexWrap: s.K.NoWrap
                    }, e, i.createElement(s._23, {
                        type: s._28.Span,
                        ellipsis: !0
                    }, t)))))
                }, t.prototype.renderGameBoxArt = function() {
                    var e = this.props.gameLinkTo,
                        t = this.props.gameTitle,
                        n = this.props.gameImageSrc;
                    return t && e ? i.createElement(r.a, {
                        to: e,
                        title: t,
                        "data-a-target": "live-channel-card-game-link"
                    }, i.createElement(s._19, {
                        className: "live-channel-card__boxart",
                        position: s._4.Absolute,
                        attachRight: !0,
                        attachBottom: !0
                    }, i.createElement(s._31, {
                        display: s.H.Block,
                        direction: s._33.Bottom,
                        label: t
                    }, i.createElement(s.C, {
                        imageSrc: n,
                        imageAlt: t,
                        aspect: s.k.BoxArt
                    })))) : null
                }, t.prototype.renderContentType = function() {
                    return !0 !== this.state.isPremiereExperimentActive ? null : "string" == typeof this.props.streamType && this.props.streamType ? i.createElement(s.V, {
                        position: s._4.Absolute,
                        attachLeft: !0,
                        attachTop: !0,
                        padding: .5
                    }, i.createElement(l.a, {
                        type: this.props.streamType,
                        hosting: this.props.hosting
                    })) : null
                }, t
            }(i.Component)),
            d = c;
        n.d(t, !1, function() {
            return c
        }), n.d(t, "a", function() {
            return d
        })
    },
    "/+to": function(e, t, n) {
        "use strict";
        var a = n("RH2O"),
            i = n("TToO"),
            r = n("U7vG"),
            o = n("6sO2"),
            l = n("Us7i"),
            s = n("QG7y"),
            c = "#google_ads_iframe_\\/3576121\\/twitch\\/directory_0",
            d = "#google_ads_iframe_\\/3576121\\/twitch\\/directory_1",
            u = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.logger = o.i.withCategory("ad-slot"), n.createSlot = function(e) {
                        return i.__awaiter(n, void 0, void 0, function() {
                            var t;
                            return i.__generator(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        if (this.state.slotCreated) return [2];
                                        this.setState({
                                            slotCreated: !0
                                        }), n.label = 1;
                                    case 1:
                                        return n.trys.push([1, 3, , 4]), [4, l.a.createSlot(e.slotID, e.adUnit, e.adSize, e.targeting, e.autoEnable)];
                                    case 2:
                                        return t = n.sent(), Object(s.h)(t.getSlotElementId()), this.setState({
                                            slot: t
                                        }), [3, 4];
                                    case 3:
                                        return n.sent(), this.logger.warn("Unable to create ad slot", {
                                            slotID: e.slotID,
                                            adUnit: e.adUnit,
                                            adSize: e.adSize,
                                            targeting: e.targeting,
                                            autoEnable: e.autoEnable
                                        }), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, n.setRef = function(e) {
                        return n.slotRef = e
                    }, n.onSlotRenderEnd = function(e) {
                        var t = e.slot.getSlotElementId();
                        if (n.state.slot && t === n.props.slotID) {
                            if (n.logger.debug("Ad slot render ended", {
                                    elementID: t,
                                    lineItemID: e.lineItemId,
                                    createdID: e.creativeId,
                                    isEmpty: e.isEmpty,
                                    serviceName: e.serviceName,
                                    size: e.size
                                }), e.isEmpty) return;
                            if (!n.slotRef) return;
                            if (n.props.slotID === s.b.anonFront.takeover) return void(document.body.classList.contains("takeover") && n.setState({
                                shouldDisplay: !0
                            }, function() {
                                return n.slotRendered(e.slot)
                            }));
                            if (n.props.slotID === s.b.directory.banner) {
                                return void((a = n.slotRef.querySelector(c)) && 1 !== a.clientWidth && n.setState({
                                    shouldDisplay: !0
                                }, function() {
                                    return n.slotRendered(e.slot)
                                }))
                            }
                            if (n.props.slotID === s.b.directory.rectangle) {
                                var a;
                                return void((a = n.slotRef.querySelector(d)) && 1 !== a.clientWidth && n.setState({
                                    shouldDisplay: !0
                                }, function() {
                                    return n.slotRendered(e.slot)
                                }))
                            }
                            n.setState({
                                shouldDisplay: !0
                            }, function() {
                                return n.slotRendered(e.slot)
                            })
                        }
                    }, n.slotRendered = function(e) {
                        n.props.slotRendered && n.props.slotRendered(e)
                    }, n.state = {
                        shouldDisplay: !1
                    }, n
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    s.g.addListener(s.f, this.onSlotRenderEnd), this.props.trackingSet ? (this.logger.debug("Tracking is set. Creating slot (componentDidMount)", this.props.slotID), this.createSlot(this.props)) : this.logger.debug("Tracking is not set. Skipping slot creation (componentDidMount)", this.props.slotID)
                }, t.prototype.componentWillReceiveProps = function(e) {
                    this.state.slotCreated || (e.trackingSet ? (this.logger.debug("Tracking is set. Creating slot (componentWillReceiveProps)", this.props.slotID), this.createSlot(e)) : this.logger.debug("Tracking is not set. Skipping slot creation (componentWillReceiveProps)", this.props.slotID))
                }, t.prototype.componentWillUnmount = function() {
                    this.logger.debug("Destroying Slot (componentWillUnmount)", this.props.slotID), s.g.removeListener(s.f, this.onSlotRenderEnd), this.state.slot && l.a.destroySlot(this.state.slot)
                }, t.prototype.shouldComponentUpdate = function(e, t) {
                    return t.shouldDisplay !== this.state.shouldDisplay
                }, t.prototype.render = function() {
                    var e = i.__assign({}, this.props.injectStyles);
                    return this.state.shouldDisplay || (e.display = "none"), r.createElement("div", {
                        style: e,
                        id: this.props.slotID,
                        ref: this.setRef
                    })
                }, t
            }(r.Component),
            m = Object(a.a)(function(e) {
                return {
                    trackingSet: e.ads.trackingSet
                }
            })(u);
        n.d(t, "a", function() {
            return m
        })
    },
    "//Ty": function(e, t) {},
    "/7C1": function(e, t, n) {
        "use strict";
        n.d(t, "b", function() {
            return a
        }), n.d(t, "c", function() {
            return i
        }), n.d(t, "a", function() {
            return r
        }), t.e = function(e) {
            return {
                type: a,
                player: e
            }
        }, t.f = function() {
            return {
                type: i
            }
        }, t.d = function() {
            return {
                type: r
            }
        };
        var a = "carouselPlayer.CAROUSEL_REGISTERED",
            i = "carouselPlayer.CAROUSEL_UNREGISTERED",
            r = "carouselPlayer.CAROUSEL_PAUSED"
    },
    "0OPT": function(e, t) {},
    "0v28": function(e, t) {},
    "262o": function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "AnonFrontPage_TopChannels"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "platformType"
                        }
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "PlatformType"
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
                            value: "streams"
                        },
                        arguments: [{
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "first"
                            },
                            value: {
                                kind: "IntValue",
                                value: "6"
                            }
                        }, {
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "platformType"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "platformType"
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
                                                                value: "285"
                                                            }
                                                        }, {
                                                            kind: "Argument",
                                                            name: {
                                                                kind: "Name",
                                                                value: "height"
                                                            },
                                                            value: {
                                                                kind: "IntValue",
                                                                value: "380"
                                                            }
                                                        }],
                                                        directives: [],
                                                        selectionSet: null
                                                    }]
                                                }
                                            }, {
                                                kind: "Field",
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "viewersCount"
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
                                            }, {
                                                kind: "Field",
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "broadcaster"
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
                end: 283
            }
        };
        n.loc.source = {
            body: "query AnonFrontPage_TopChannels($platformType: PlatformType) {\nstreams(first: 6 platformType: $platformType) {\nedges {\nnode {\nid\ngame {\nid\nname\nboxArtURL(width: 285 height: 380)\n}\nviewersCount\ntitle\npreviewImageURL(width: 320 height: 180)\nbroadcaster {\nid\nlogin\ndisplayName\n}\n}\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    "2Nqs": function(e, t) {},
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
    "7L7x": function(e, t) {},
    "86JD": function(e, t, n) {
        "use strict";
        var a = n("TToO"),
            i = n("U7vG"),
            r = n("6sO2"),
            o = n("iOr9"),
            l = n("bZTi"),
            s = n("o8Pq"),
            c = n("bNhH"),
            d = n("Wjt1"),
            u = function(e) {
                var t = {
                    name: "TWILIGHT_VIDEO_FEATURO_EN",
                    assignments: {
                        fallback: function() {
                            return l.a.wrap(function() {
                                return new Promise(function(e) {
                                    e()
                                }).then(n.bind(null, "o8Pq"))
                            }, "FeaturedBroadcasters")(a.__assign({}, e))
                        },
                        mixed: function() {
                            return l.a.wrap(function() {
                                return new Promise(function(e) {
                                    e()
                                }).then(n.bind(null, "Wjt1"))
                            }, "FeaturedContent")(a.__assign({}, e, {
                                shouldMixContent: !0
                            }))
                        },
                        last: function() {
                            return l.a.wrap(function() {
                                return new Promise(function(e) {
                                    e()
                                }).then(n.bind(null, "Wjt1"))
                            }, "FeaturedContent")(a.__assign({}, e, {
                                shouldMixContent: !1
                            }))
                        }
                    },
                    loader: function() {
                        return Object(c.c)(e.renderContext)
                    }
                };
                return "en" === r.n.intl.getLanguageCode() ? i.createElement(o.a, a.__assign({}, t)) : i.createElement(s.FeaturedBroadcasters, {
                    renderContext: e.renderContext
                })
            };
        n.d(t, "a", function() {
            return d.FeaturedBroadcastersRenderContext
        }), n.d(t, "b", function() {
            return u
        })
    },
    "8PKe": function(e, t, n) {
        "use strict";
        var a = n("RH2O"),
            i = n("TToO"),
            r = n("OAwv"),
            o = n("U7vG"),
            l = n("6sO2"),
            s = n("+Znq"),
            c = n("7vx8"),
            d = n("S1vB"),
            u = n("ZVME"),
            m = n("CSlQ"),
            p = n("Odds"),
            f = (n("f8UT"), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return o.createElement(p.V, null, o.createElement(p._19, {
                        className: "prime-offer-header",
                        borderBottom: !0,
                        background: p.m.Alt2,
                        padding: {
                            x: 1,
                            y: .5
                        }
                    }, o.createElement(p._23, {
                        bold: !0,
                        type: p._28.H6
                    }, Object(l.d)("Free with Prime", "PrimeOfferHeader"))), this.getNumOfUnseenOffersDisplay())
                }, t.prototype.getNumOfUnseenOffersDisplay = function() {
                    var e = this.props.numOfUnseenOffers;
                    if (e) return o.createElement(p._19, {
                        className: "prime-offer__new-offer-header",
                        borderBottom: !0,
                        background: p.m.Alt2,
                        padding: {
                            x: 1,
                            y: .5
                        }
                    }, o.createElement(p.V, {
                        fullWidth: !0,
                        display: p.H.Flex,
                        alignItems: p.c.Center
                    }, o.createElement(p.V, {
                        flexGrow: 1
                    }, o.createElement(p._23, {
                        bold: !0,
                        type: p._28.H6
                    }, Object(l.d)("New Prime Loot", "PrimeOfferHeader"))), o.createElement(p.V, {
                        className: "prime-offer__new-offer-header-count",
                        textAlign: p._24.Center
                    }, o.createElement(p._19, {
                        className: "prime-offer__new-offer-header-count__text",
                        background: p.m.Base,
                        color: p.F.Base,
                        display: p.H.Flex,
                        alignItems: p.c.Center,
                        justifyContent: p.U.Center
                    }, o.createElement(p._23, null, e.toString())))))
                }, t = i.__decorate([Object(m.c)("PrimeOfferHeader")], t)
            }(o.Component)),
            g = n("zCIC"),
            h = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = Object(l.d)("You'll get characters, vehicles, skins, and boosts for games like {hearthstone} and {smite}, plus surprises like a rotating selection of indie games.", {
                        hearthstone: o.createElement(p._23, {
                            italic: !0,
                            type: p._28.Span
                        }, Object(l.d)("Hearthstone", "PrimeEmpty")),
                        smite: o.createElement(p._23, {
                            italic: !0,
                            type: p._28.Span
                        }, Object(l.d)("Smite", "PrimeEmpty"))
                    }, "PrimeEmpty");
                    return o.createElement(p.V, {
                        className: "prime-empty",
                        margin: 2
                    }, o.createElement(p.V, {
                        textAlign: p._24.Center,
                        margin: 2
                    }, o.createElement("img", {
                        className: "prime-empty__image",
                        src: "https://m.media-amazon.com/images/G/01/sm/landing/Trunk_w_Star_transparent._V530838660_.png",
                        alt: Object(l.d)("Prime Treasure Chest", "PrimeEmpty")
                    })), o.createElement(p._23, {
                        type: p._28.P,
                        bold: !0
                    }, Object(l.d)("Free in-game loot every month, plus surprises", "PrimeEmpty")), o.createElement("div", null, e))
                }, t = i.__decorate([Object(m.c)("PrimeEmpty")], t)
            }(o.Component),
            v = n("lfvs"),
            k = n("oIkB"),
            y = n("R0Kh"),
            _ = (n("w/8h"), n("sq7i")),
            b = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return o.createElement(p.V, {
                        className: "prime-claim-button"
                    }, this.getClaimButton())
                }, t.prototype.getClaimButton = function() {
                    var e = this.props,
                        t = this.getButtonText(),
                        n = o.createElement(p.u, {
                            fullWidth: !0,
                            state: this.props.claiming ? p.y.Loading : p.y.Default,
                            disabled: this.props.claiming,
                            onClick: this.props.claimCallback,
                            "data-a-target": "prime-claim-button"
                        }, t);
                    return e.offerType === y.a.EXTERNAL_OFFER ? o.createElement(p.u, {
                        fullWidth: !0,
                        linkTo: e.offerLinkUri,
                        targetBlank: !0
                    }, t) : o.createElement(p.V, {
                        position: p._4.Relative
                    }, n)
                }, t.prototype.getButtonText = function() {
                    return this.props.offerType === y.a.CLAIM_CODE ? Object(l.d)("Get Code", "PrimeClaimButton") : this.props.offerType === y.a.EXTERNAL_OFFER ? Object(l.d)("Learn More", "PrimeClaimButton") : Object(l.d)("Claim Offer", "PrimeClaimButton")
                }, t = i.__decorate([Object(c.a)(_), Object(m.c)("PrimeClaimButton")], t)
            }(o.Component),
            S = function(e) {
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
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return o.createElement(p.V, {
                        className: "prime-claim-description",
                        margin: {
                            top: 1
                        }
                    }, o.createElement(p.u, {
                        fullWidth: !0,
                        type: p.z.Hollow,
                        onClick: this.toggleShowDescription
                    }, this.getDescriptionButtonText()), this.getDescriptionBlock())
                }, t.prototype.getDescriptionButtonText = function() {
                    return this.state.showDescription ? Object(l.d)("Close Info", "PrimeClaimDescription") : Object(l.d)("More Info", "PrimeClaimDescription")
                }, t.prototype.getDescriptionBlock = function() {
                    var e = null;
                    return this.state.showDescription && (e = o.createElement(p._19, {
                        className: "prime-claim-description__body",
                        background: p.m.Alt2,
                        border: !0
                    }, o.createElement(p.V, {
                        margin: {
                            bottom: 2
                        },
                        padding: 1
                    }, o.createElement(v, {
                        source: this.props.description || ""
                    })))), e
                }, t = i.__decorate([Object(m.c)("PrimeClaimDescription")], t)
            }(o.Component),
            E = n("Hs3O"),
            C = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.getLink = function() {
                    return this.props.externalUri ? this.props.externalUri : Object(E.d)(E.c, window.location.pathname.substring(1))
                }, t.prototype.render = function() {
                    return o.createElement(p.V, {
                        className: "prime-upsell-button",
                        margin: {
                            top: 2,
                            bottom: 1
                        }
                    }, o.createElement(p.u, {
                        fullWidth: !0,
                        linkTo: this.getLink(),
                        targetBlank: !0
                    }, Object(l.d)("Start Your Free Trial", "PrimeUpsellButton")))
                }, t = i.__decorate([Object(m.c)("PrimeUpsellButton")], t)
            }(o.Component),
            N = n("e2wA"),
            O = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return o.createElement(p.V, {
                        className: "prime-claim",
                        margin: {
                            top: 2,
                            bottom: 1
                        }
                    }, this.getCallToAction(), this.getClaimDescriptionSection())
                }, t.prototype.getCallToAction = function() {
                    var e = this.props.data;
                    return !e.loading && !e.error && e.currentUser && e.currentUser.hasPrime ? o.createElement(b, {
                        offerType: this.props.offerType,
                        offerId: this.props.offerId,
                        claimCallback: this.props.claimCallback,
                        claiming: this.props.claiming,
                        offerLinkUri: this.props.externalUri
                    }) : o.createElement(C, {
                        externalUri: this.props.externalUri
                    })
                }, t.prototype.getClaimDescriptionSection = function() {
                    return this.props.offerType === y.a.EXTERNAL_OFFER ? null : o.createElement(S, {
                        description: this.props.offerDescription
                    })
                }, t = i.__decorate([Object(c.a)(N), Object(m.c)("PrimeInstructions")], t)
            }(o.Component),
            F = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return o.createElement(p._19, {
                        background: p.m.Alt2,
                        display: p.H.Flex,
                        justifyContent: p.U.Center,
                        padding: {
                            y: 1
                        },
                        margin: {
                            bottom: 1
                        },
                        textAlign: p._24.Center
                    }, o.createElement(p._23, {
                        type: p._28.H4,
                        align: p._38.Middle
                    }, o.createElement(p._19, {
                        padding: 1,
                        display: p.H.InlineFlex,
                        flexGrow: 1,
                        flexWrap: p.K.NoWrap,
                        alignItems: p.c.Center,
                        fontSize: this.props.fontSize ? this.props.fontSize : p.L.Size5,
                        "data-a-target": "prime-error-glitch"
                    }, o.createElement(p.V, {
                        margin: {
                            right: 1
                        },
                        display: p.H.InlineFlex,
                        flexGrow: 1,
                        flexWrap: p.K.NoWrap,
                        alignItems: p.c.Center
                    }, o.createElement(p._10, {
                        asset: p._11.DeadGlitch,
                        type: p._12.Alert,
                        width: 20,
                        height: 20
                    })), Object(l.d)("Something has gone wrong. Please try again later.", "PrimeError"))))
                }, t = i.__decorate([Object(m.c)("PrimeError")], t)
            }(o.Component),
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
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = this.state.copied ? Object(l.d)("copied", "CopyButton") : Object(l.d)("copy", "CopyButton");
                    return o.createElement(p.V, {
                        className: "copy-button copy-btn",
                        display: p.H.Flex
                    }, o.createElement(p.Q, {
                        className: "copy-button__btn"
                    }, o.createElement(p.u, {
                        onClick: this.copy,
                        type: this.state.copied ? p.z.Success : p.z.Default
                    }, e)), o.createElement("input", {
                        className: "copy-button__copy-input",
                        ref: this.setRef,
                        value: this.props.clipboardText,
                        readOnly: !0
                    }))
                }, t = i.__decorate([Object(m.c)("CopyButton")], t)
            }(o.Component)),
            x = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onChange = function(e) {
                        t.setState({
                            value: e.currentTarget.value,
                            copied: !1
                        })
                    }, t
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.componentWillMount = function() {
                    this.props.initialText && this.setState({
                        value: this.props.initialText,
                        copied: !1
                    })
                }, t.prototype.render = function() {
                    return this.state && this.state.value ? o.createElement(p.V, {
                        className: "copyable-item",
                        display: p.H.Flex,
                        flexGrow: 1
                    }, o.createElement(p.V, {
                        flexGrow: 1
                    }, o.createElement(p.R, {
                        type: p.S.Text,
                        onChange: this.onChange,
                        value: this.state.value,
                        disabled: this.props.disabled,
                        readOnly: this.props.readOnly
                    })), o.createElement(p.V, null, o.createElement(w, {
                        clipboardText: this.state.value
                    }))) : null
                }, t = i.__decorate([Object(m.c)("CopyableItem")], t)
            }(o.Component),
            P = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return o.createElement(p._19, {
                        className: "prime-claim-instructions",
                        background: p.m.Alt2,
                        border: !0,
                        padding: 1,
                        fontSize: p.L.Size6
                    }, o.createElement(p._37, null, o.createElement(v, {
                        source: this.props.claimInstructions || "",
                        escapeHtml: !0,
                        renderers: {
                            Link: function(e) {
                                return o.createElement("a", {
                                    href: e.href,
                                    target: "_blank",
                                    rel: "nofollow noopener noreferrer"
                                }, e.children)
                            }
                        }
                    })))
                }, t = i.__decorate([Object(m.c)("PrimeClaimInstructions")], t)
            }(o.Component),
            T = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return o.createElement(p.V, {
                        className: "prime-redeem",
                        margin: {
                            top: 1
                        }
                    }, this.getCodeOrConfirmation(), this.getPrimeClaimInstructions())
                }, t.prototype.getCodeOrConfirmation = function() {
                    return this.props.code && this.props.deliveryMethod === y.a.CLAIM_CODE ? o.createElement(p.V, null, o.createElement(x, {
                        initialText: this.props.code,
                        readOnly: !0,
                        textCenter: !0
                    })) : o.createElement(p._19, {
                        background: p.m.Alt2,
                        display: p.H.Flex,
                        justifyContent: p.U.Center,
                        padding: {
                            y: 1
                        },
                        margin: {
                            bottom: 1
                        }
                    }, o.createElement(p._23, {
                        type: p._28.H4,
                        align: p._38.Middle
                    }, o.createElement(p.V, {
                        padding: 1,
                        display: p.H.InlineFlex,
                        flexGrow: 1,
                        flexWrap: p.K.NoWrap,
                        alignItems: p.c.Center,
                        "data-a-target": "prime-redeem-check"
                    }, o.createElement(p.V, {
                        margin: {
                            right: 1
                        },
                        display: p.H.InlineFlex,
                        flexGrow: 1,
                        flexWrap: p.K.NoWrap,
                        alignItems: p.c.Center
                    }, o.createElement(p._10, {
                        asset: p._11.Check,
                        type: p._12.Success,
                        width: 20,
                        height: 20
                    })), Object(l.d)("Added To Your Twitch Account", "PrimeRedeem"))))
                }, t.prototype.getPrimeClaimInstructions = function() {
                    if (this.props.claimInstructions) return o.createElement(P, {
                        claimInstructions: this.props.claimInstructions || ""
                    })
                }, t = i.__decorate([Object(m.c)("PrimeRedeem")], t)
            }(o.Component),
            D = n("el3o"),
            I = (n("v+rJ"), n("rM0q")),
            L = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        claimed: !1,
                        claiming: !1,
                        error: !1,
                        claimData: ""
                    }, t.renderRedeemUpsellOrClaimSection = function(e) {
                        var n = e.content || {},
                            a = e.self || {
                                claimData: ""
                            },
                            i = (t.props.data || {}).currentUser || {};
                        if (t.state.error) return o.createElement(F, {
                            fontSize: p.L.Size6
                        });
                        if ((t.isCurrentOfferClaimed(e) || t.state.claimed) && i && i.hasPrime) {
                            var r = t.state.claimData || a.claimData;
                            return o.createElement(T, {
                                claimInstructions: e.claimInstructions,
                                code: r,
                                deliveryMethod: e.deliveryMethod
                            })
                        }
                        return o.createElement(O, {
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
                            var a = n.currentUser.id,
                                i = t.props.offer,
                                r = Object(k.a)({
                                    offerID: i.id
                                });
                            t.props.claimPrimeOffer(r).then(function(e) {
                                var n = ((e.data || {}).claimPrimeOffer || {}).self || {};
                                n && i && t.setState({
                                    claimData: n.claimData
                                }), t.markAsClaimedInLocalStorage(a)
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
                            a = y.b(n.id, e),
                            i = y.c();
                        i.push(a), y.f(i), t.setState({
                            claiming: !1,
                            claimed: !0,
                            error: !1
                        })
                    }, t
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = this.props.offer,
                        t = this.props.isLast || !1;
                    if (e) {
                        var n = e.content || {},
                            a = n.game || {},
                            i = n.categories || [];
                        return o.createElement(p._19, {
                            className: "prime-offer",
                            alignItems: p.c.Center,
                            borderBottom: !t,
                            padding: {
                                x: 2,
                                y: 1
                            }
                        }, o.createElement(p.V, {
                            className: "prime-offer__title",
                            padding: {
                                y: .5
                            }
                        }, o.createElement(v, {
                            className: "prime-offer__title__markdown",
                            containerTagName: "h4",
                            source: e.title || ""
                        })), o.createElement("img", {
                            src: e.imageURL
                        }), o.createElement(p.V, {
                            className: "prime-offer__description",
                            padding: {
                                top: .5
                            }
                        }, o.createElement(p._23, {
                            type: p._28.P
                        }, a.name, " ", i[0])), o.createElement(p.V, {
                            className: "prime-offer__publisher"
                        }, o.createElement(p._23, {
                            type: p._28.P,
                            color: p.F.Alt2,
                            fontSize: p.L.Size7
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
                            a = y.b(t.id, n);
                        return y.c().includes(a)
                    }
                }, t = i.__decorate([Object(c.a)(I, {
                    name: "data"
                }), Object(c.a)(D, {
                    name: "claimPrimeOffer"
                }), Object(m.c)("PrimeOffer")], t)
            }(o.Component),
            V = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return o.createElement(p._19, {
                        className: "prime-offer-placeholder",
                        alignItems: p.c.Center,
                        borderBottom: !0,
                        padding: {
                            x: 2,
                            y: 1
                        }
                    }, o.createElement(p.V, {
                        className: "prime-offer-placeholder__title",
                        padding: {
                            y: .5
                        }
                    }, o.createElement(p._3, {
                        height: 20
                    })), o.createElement(p._3, {
                        height: 160
                    }), o.createElement(p.V, {
                        className: "prime-offer-placeholder__description",
                        padding: {
                            y: .5
                        }
                    }, o.createElement(p._3, {
                        height: 20,
                        width: 160
                    })), o.createElement(p.V, {
                        className: "prime-offer-placeholder__publisher"
                    }, o.createElement(p._3, {
                        height: 20,
                        width: 80
                    })), o.createElement(p.V, {
                        className: "prime-offer-placeholder__claim",
                        margin: {
                            top: 2,
                            bottom: 1
                        }
                    }, o.createElement(p._3, {
                        height: 40
                    })))
                }, t = i.__decorate([Object(m.c)("PrimeOfferPlaceholder")], t)
            }(o.Component),
            U = (n("7L7x"), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return o.createElement(p._19, {
                        "data-a-target": "prime-offers-upsell",
                        className: "prime-offers-upsell",
                        alignItems: p.c.Center,
                        padding: {
                            x: 2,
                            y: 1
                        },
                        borderBottom: !0
                    }, o.createElement(p._23, {
                        type: p._28.H4
                    }, Object(l.d)("Claim With Twitch Prime", "PrimeUpsell")), o.createElement(p.V, {
                        className: "prime-upsell__logo-container",
                        fullWidth: !0,
                        margin: {
                            y: 2
                        },
                        textAlign: p._24.Center
                    }, o.createElement(p._10, {
                        asset: p._11.LogoTwitchPrime,
                        width: 330,
                        height: 150,
                        type: p._12.Brand
                    })), o.createElement(p._23, {
                        type: p._28.P
                    }, Object(l.d)("Get free game loot like this every month plus surprises, ad-free viewing, and loads more with Twitch Prime.", "PrimeUpsell")), o.createElement(C, null))
                }, t = i.__decorate([Object(m.c)("PrimeUpsell")], t)
            }(o.Component)),
            j = n("eY4D"),
            R = (n("DgR+"), n("65au")),
            A = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.shouldShowPlaceholders = function() {
                        var e = t.props.offersData,
                            n = e.primeOffers,
                            a = void 0 === n || null === n;
                        return e.loading || !e.error && a && t.props.showByDefault
                    }, t.renderOfferPlaceholders = function() {
                        for (var e = [], t = 0; t < 3; ++t) e.push(o.createElement(V, {
                            key: t
                        }));
                        return e
                    }, t
                }
                return i.__extends(t, e), t.prototype.componentDidUpdate = function() {
                    var e = this.props.offersData;
                    e && e.primeOffers && this.props.latencyTracking.reportInteractive(e.primeOffers.length)
                }, t.prototype.render = function() {
                    return o.createElement(g.b, {
                        className: "prime-offer-listing"
                    }, o.createElement(p.V, {
                        className: "prime-offer-listing__content",
                        alignItems: p.c.Center,
                        padding: {
                            top: 1,
                            bottom: 2,
                            left: 1,
                            right: 1
                        }
                    }, this.renderUpsell(), this.renderOfferExperience()))
                }, t.prototype.renderUpsell = function() {
                    var e = this.props.userData;
                    if (!e.loading && !e.error && !this.currentUserHasPrime(e)) return o.createElement(U, null)
                }, t.prototype.renderOfferExperience = function() {
                    var e = this.props.offersData;
                    if (this.shouldShowPlaceholders()) return this.renderOfferPlaceholders();
                    if (!e.error && e.primeOffers && e.primeOffers.length) {
                        var t = this.getSortedOffers(),
                            n = t[t.length - 1];
                        return t.map(function(e) {
                            return o.createElement(L, {
                                key: e.id,
                                offer: e,
                                isLast: n.id === e.id
                            })
                        })
                    }
                    return o.createElement(h, null)
                }, t.prototype.getSortedOffers = function() {
                    var e = this.props.offersData.primeOffers,
                        t = this.getUserId();
                    if (t) {
                        var n = Object(y.c)(),
                            a = e.filter(function(e) {
                                return !n.includes(Object(y.b)(e.id, t))
                            }).sort(y.i),
                            i = e.filter(function(e) {
                                return !a.includes(e)
                            }).sort(y.i);
                        return a.concat(i)
                    }
                    return e.slice().sort(y.i)
                }, t.prototype.getUserId = function() {
                    var e = this.props.userData;
                    return !e.loading && !e.error && e.currentUser && e.currentUser.id ? e.currentUser.id : ""
                }, t.prototype.currentUserHasPrime = function(e) {
                    var t = e.currentUser;
                    return t && t.hasPrime
                }, t = i.__decorate([Object(c.a)(j, {
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
                }), Object(m.c)("PrimeOfferList")], t)
            }(o.Component),
            B = n("tTbW"),
            z = (n("9856"), n("wjhu")),
            H = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        numOfUnseenOffers: 0
                    }, t.showOffersByDefault = function() {
                        var e = location.search,
                            n = r.parse(e);
                        return n && !!n.expandoffers || t.props.openByDefault
                    }, t.onToggleMenu = function(e) {
                        t.offersLoadedEvent = t.registerOffersLoadedEvent();
                        var n = t.props.offersData;
                        !n || n.loading || n.error || t.props.latencyTracking.reportCustomEvent(t.offersLoadedEvent), t.seeOffers(), e && t.setState({
                            numOfUnseenOffers: 0
                        })
                    }, t.registerOffersLoadedEvent = function() {
                        return t.props.latencyTracking.registerCustomEvent({
                            benchmark: 1e3,
                            group: u.a.TwitchPrime,
                            key: u.b.OfferLoaded,
                            label: u.c.OfferLoaded,
                            start: u.d.Registration
                        })
                    }, t.getUnseenOffers = function(e) {
                        var n = e.offersData;
                        if (n && !n.loading && !n.error) {
                            var a = n.primeOffers || [],
                                i = y.e();
                            t.setState({
                                numOfUnseenOffers: a.filter(function(e) {
                                    return !(i.includes(e.id) || t.offerIsClaimed(e))
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
                            n = t.showOffersByDefault() || !1,
                            a = e && !e.loading && !e.error;
                        return t.offersLoadedEvent && a && t.props.latencyTracking.reportCustomEvent(t.offersLoadedEvent), a || n ? o.createElement(p.V, {
                            "data-a-target": "offers-list",
                            className: "prime-offers__list"
                        }, o.createElement(f, {
                            numOfUnseenOffers: t.state.numOfUnseenOffers
                        }), o.createElement(A, {
                            showByDefault: n
                        })) : null
                    }, t
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.getUnseenOffers(this.props)
                }, t.prototype.componentWillReceiveProps = function(e) {
                    this.getUnseenOffers(e)
                }, t.prototype.render = function() {
                    var e = this.props.userData && this.props.userData.requestInfo && Object(d.a)(this.props.userData.requestInfo.countryCode),
                        t = this.props.userData && this.props.userData.currentUser && this.props.userData.currentUser.hasPrime;
                    if (!e && !t) return null;
                    var n = {
                        align: p._32.Center,
                        direction: p._33.Bottom,
                        label: ""
                    };
                    return this.state.numOfUnseenOffers > 0 ? n.label = Object(l.d)("New Prime Loot", "PrimeOffers") : n.label = Object(l.d)("Prime Loot", "PrimeOffers"), o.createElement(p.V, {
                        className: "prime-offers",
                        position: p._4.Relative
                    }, o.createElement(s.a, {
                        onToggle: this.onToggleMenu,
                        openByDefault: this.showOffersByDefault(),
                        tooltipProps: n
                    }, o.createElement(p.v, {
                        ariaLabel: Object(l.d)("Prime offers", "PrimeOffers"),
                        overlay: !0,
                        size: p.x.Large,
                        icon: p._11.Crown,
                        "data-a-target": "prime-offers-icon",
                        "data-target": "prime-offers-icon"
                    }), o.createElement(p.p, {
                        direction: p.q.BottomRight,
                        size: p.r.Large,
                        offsetX: "9px"
                    }, this.renderOfferList())), this.renderUnseenOffersDisplay())
                }, t.prototype.renderUnseenOffersDisplay = function() {
                    var e = this.state.numOfUnseenOffers;
                    if (e) return o.createElement(p.V, {
                        className: "prime-offers__pill",
                        position: p._4.Absolute
                    }, o.createElement(p.e, {
                        type: p.i.BounceIn,
                        duration: p.g.Medium,
                        timing: p.h.EaseIn,
                        enabled: e > 0
                    }, o.createElement(p._1, {
                        label: e.toString(),
                        type: p._2.Notification
                    })))
                }, t = i.__decorate([Object(c.a)(B, {
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
                }), Object(c.a)(z, {
                    name: "userData"
                }), Object(m.c)("PrimeOffers", {
                    autoReportInteractive: !0
                })], t)
            }(o.Component),
            G = Object(a.a)(function(e) {
                return {
                    firstPageLoaded: !!e.session.firstPageLoaded
                }
            })(H),
            M = (n("ukY1"), n("F1v6")),
            W = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = this.props.data.currentUser && this.props.data.currentUser.hasPrime,
                        t = this.props.data.requestInfo && this.props.data.requestInfo.countryCode;
                    if (!Object(y.h)(e, t)) return null;
                    if (this.props.data.loading) return null;
                    var n = Object(E.d)(E.a, ""),
                        a = Object(l.d)("Twitch Prime", "BlueBar"),
                        i = o.createElement("span", null, Object(l.d)("Free loot every month, plus exclusives and surprises, ad-free viewing, and loads more.", "BlueBar")),
                        r = Object(E.d)(E.a, ""),
                        s = Object(l.d)("Start Your Free Trial", "BlueBar");
                    if (!this.props.data.loading && !this.props.data.error) {
                        var c = this.props.data;
                        c && c.primePromotions && c.primePromotions.forEach(function(e) {
                            switch (e.id) {
                                case "twitch.prime.bluebar.left1":
                                    n = e.externalURL, a = e.text;
                                    break;
                                case "twitch.prime.bluebar.center1":
                                    i = o.createElement(v, {
                                        source: e.text,
                                        renderers: {
                                            Link: function(e) {
                                                return o.createElement("a", {
                                                    href: e.href,
                                                    target: "_blank",
                                                    rel: "noopener noreferrer"
                                                }, e.children)
                                            }
                                        }
                                    });
                                    break;
                                case "twitch.prime.bluebar.right1":
                                    r = e.externalURL, s = e.text
                            }
                        })
                    }
                    return o.createElement(p._19, {
                        color: p.F.Base,
                        className: "blue-bar",
                        position: p._4.Relative,
                        fullWidth: !0
                    }, o.createElement(p.V, {
                        className: "blue-bar__bar",
                        display: p.H.Flex,
                        alignItems: p.c.Center,
                        justifyContent: p.U.Between,
                        flexWrap: p.K.NoWrap,
                        margin: "auto",
                        padding: {
                            x: 2,
                            y: .5
                        }
                    }, o.createElement(p.V, {
                        display: p.H.InlineFlex,
                        alignItems: p.c.Center,
                        padding: {
                            right: .5
                        }
                    }, o.createElement(p.V, {
                        className: "blue-bar__logo",
                        display: p.H.InlineFlex,
                        margin: {
                            right: .5
                        },
                        flexShrink: 0
                    }, o.createElement(p._10, {
                        asset: p._11.Crown,
                        width: 20,
                        height: 13
                    })), o.createElement(p._23, {
                        bold: !0,
                        type: p._28.Span,
                        noWrap: !0,
                        fontSize: p.L.Size6
                    }, o.createElement(p.Q, {
                        padding: {
                            x: 1
                        }
                    }, o.createElement("a", {
                        className: "blue-bar__link",
                        href: n,
                        target: "_blank",
                        rel: "noopener noreferrer"
                    }, a))), o.createElement(p._23, {
                        className: "blue-bar__headline",
                        type: p._28.Span,
                        fontSize: p.L.Size6
                    }, i)), o.createElement(p.V, {
                        display: p.H.InlineFlex,
                        flexShrink: 0
                    }, o.createElement(p._23, {
                        bold: !0,
                        type: p._28.Span,
                        noWrap: !0,
                        fontSize: p.L.Size6,
                        color: p.F.Base
                    }, o.createElement("a", {
                        className: "blue-bar__link",
                        href: r,
                        target: "_blank",
                        rel: "noopener noreferrer"
                    }, s)))))
                }, t = i.__decorate([Object(c.a)(M, {
                    options: function() {
                        return {
                            variables: {
                                stringIds: ["twitch.prime.bluebar.left1", "twitch.prime.bluebar.center1", "twitch.prime.bluebar.right1"],
                                dateOverride: Object(y.d)()
                            }
                        }
                    }
                }), Object(m.c)("BlueBarComponent")], t)
            }(o.Component);
        n.d(t, "b", function() {
            return G
        }), n.d(t, "a", function() {
            return W
        }), n.d(t, "c", function() {
            return y.d
        })
    },
    "8U1+": function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a, i = n("TToO"),
            r = n("U7vG"),
            o = n("6sO2"),
            l = n("Qk3C"),
            s = n("+Znq"),
            c = n("CSlQ"),
            d = n("Odds"),
            u = (n("//Ty"), Object(c.c)("Footer", {
                autoReportInteractive: !0
            })(function() {
                return r.createElement(d.V, {
                    className: "footer",
                    padding: {
                        y: 3
                    }
                }, r.createElement(d.V, {
                    className: "footer__link-container",
                    display: d.H.Flex,
                    alignItems: d.c.Center,
                    justifyContent: d.U.Center,
                    margin: "auto",
                    padding: {
                        y: 3
                    }
                }, r.createElement(d.V, {
                    className: "footer__glitch",
                    display: d.H.Flex,
                    alignItems: d.c.Center,
                    margin: {
                        right: 2
                    }
                }, r.createElement(d._10, {
                    asset: d._11.LogoGlitch,
                    width: 30,
                    height: 30
                })), r.createElement(d.V, {
                    margin: {
                        right: 1
                    }
                }, r.createElement("a", {
                    target: "_blank",
                    className: "footer__link",
                    href: "https://www.twitch.tv/p/about/",
                    "data-a-target": "frontpage-footer-about-link"
                }, Object(o.d)("About", "Footer"))), r.createElement(d.V, {
                    margin: {
                        right: 1
                    }
                }, r.createElement("a", {
                    target: "_blank",
                    className: "footer__link",
                    href: "https://blog.twitch.tv/",
                    "data-a-target": "frontpage-footer-blog-link"
                }, Object(o.d)("Blog", "Footer"))), r.createElement(d.V, {
                    margin: {
                        right: 1
                    }
                }, r.createElement("a", {
                    target: "_blank",
                    className: "footer__link",
                    href: "https://www.twitch.tv/products/turbo/ticket?ref=footer",
                    "data-a-target": "frontpage-footer-turbo-link"
                }, Object(o.d)("Turbo", "Footer"))), r.createElement(d.V, {
                    margin: {
                        right: 1
                    }
                }, r.createElement("a", {
                    target: "_blank",
                    className: "footer__link",
                    href: "https://music.twitch.tv/",
                    "data-a-target": "frontpage-footer-music-link"
                }, Object(o.d)("Music", "Footer"))), r.createElement(d.V, {
                    margin: {
                        right: 1
                    }
                }, r.createElement("a", {
                    target: "_blank",
                    className: "footer__link",
                    href: "http://twitchadvertising.tv/",
                    "data-a-target": "frontpage-footer-advertising-link"
                }, Object(o.d)("Advertise", "Footer"))), r.createElement(d.V, {
                    margin: {
                        right: 1
                    }
                }, r.createElement("a", {
                    target: "_blank",
                    className: "footer__link",
                    href: "https://dev.twitch.tv/",
                    "data-a-target": "frontpage-footer-developers-link"
                }, Object(o.d)("Developers", "Footer"))), r.createElement(d.V, {
                    margin: {
                        right: 1
                    }
                }, r.createElement("a", {
                    target: "_blank",
                    className: "footer__link",
                    href: "https://www.twitch.tv/p/partners/",
                    "data-a-target": "frontpage-footer-partners-link"
                }, Object(o.d)("Partners", "Footer"))), r.createElement(d.V, {
                    margin: {
                        right: 1
                    }
                }, r.createElement("a", {
                    target: "_blank",
                    className: "footer__link",
                    href: "https://www.twitch.tv/p/platforms/",
                    "data-a-target": "frontpage-footer-mobile-link"
                }, Object(o.d)("Mobile", "Footer"))), r.createElement(d.V, {
                    margin: {
                        right: 1
                    }
                }, r.createElement("a", {
                    target: "_blank",
                    className: "footer__link",
                    href: "https://www.twitch.tv/p/jobs/",
                    "data-a-target": "frontpage-footer-jobs-link"
                }, Object(o.d)("Jobs", "Footer"))), r.createElement(d.V, {
                    margin: {
                        right: 1
                    }
                }, r.createElement("a", {
                    target: "_blank",
                    className: "footer__link",
                    href: "https://help.twitch.tv/",
                    "data-a-target": "frontpage-footer-help-link"
                }, Object(o.d)("Help", "Footer"))), r.createElement(d.V, {
                    margin: {
                        right: 1
                    }
                }, r.createElement("a", {
                    target: "_blank",
                    className: "footer__link",
                    href: "https://www.twitch.tv/p/legal/terms-of-service/",
                    "data-a-target": "frontpage-footer-terms-link"
                }, Object(o.d)("Terms", "Footer"))), r.createElement(d.V, {
                    margin: {
                        right: 1
                    }
                }, r.createElement("a", {
                    target: "_blank",
                    className: "footer__link",
                    href: "https://www.twitch.tv/p/legal/privacy-policy/",
                    "data-a-target": "frontpage-footer-privacy-link"
                }, Object(o.d)("Privacy Policy", "Footer"))), r.createElement(d.V, {
                    margin: {
                        right: 1
                    }
                }, r.createElement("a", {
                    target: "_blank",
                    className: "footer__link",
                    href: "https://www.twitch.tv/p/legal/ad-choices/",
                    "data-a-target": "frontpage-footer-choices-link"
                }, Object(o.d)("Ad Choices", "Footer"))), r.createElement(d.V, {
                    margin: {
                        right: 1
                    }
                }, r.createElement("a", {
                    target: "_blank",
                    className: "footer__link",
                    href: "https://www.twitch.tv/p/legal/cookie-policy/",
                    "data-a-target": "frontpage-footer-cookie-link"
                }, Object(o.d)("Cookie Policy", "Footer"))), r.createElement(d.V, {
                    margin: {
                        left: 5
                    }
                }, r.createElement(s.a, null, r.createElement("span", {
                    className: "footer__link",
                    "data-a-target": "frontpage-footer-language-link"
                }, Object(o.d)("Language", "Footer")), r.createElement(d.p, {
                    "data-a-target": "frontpage-footer-language-options",
                    size: d.r.Medium,
                    direction: d.q.TopRight
                }, r.createElement(l.a, null))))))
            })),
            m = n("j7/Y"),
            p = n("w9tK"),
            f = n("Us7i"),
            g = n("vH/s"),
            h = n("/+to"),
            v = n("QG7y"),
            k = n("86JD"),
            y = n("2aoH"),
            _ = n("8PKe"),
            b = n("F8kA"),
            S = n("7vx8"),
            E = n("NY9D"),
            C = n("dXGo"),
            N = (n("APTF"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        adDisplayed: !1
                    }, t.getItems = function() {
                        if (t.props.data.loading || t.props.data.error) {
                            for (var e = [], n = 0; n < 12; n++) e.push(r.createElement(d.G, {
                                cols: 2,
                                key: "placeholder-" + n
                            }, r.createElement(d.V, {
                                key: n,
                                margin: {
                                    bottom: n < 6 ? 4 : 0
                                }
                            }, r.createElement(d.V, {
                                margin: {
                                    bottom: .5
                                }
                            }, r.createElement(d.j, {
                                ratio: d.k.Aspect3x4
                            }, r.createElement(d._3, null))), r.createElement(d._23, null, r.createElement(d._3, {
                                width: 120
                            })), r.createElement(d._23, {
                                fontSize: d.L.Size7
                            }, r.createElement(d._3, {
                                width: 80
                            })))));
                            return e
                        }
                        var a = t.props.data.games.edges.slice(0, t.state.adDisplayed ? 10 : 12).map(function(e, t) {
                                var n = e.node;
                                return r.createElement(d.G, {
                                    cols: 2,
                                    key: "game-" + n.id
                                }, r.createElement(d.V, {
                                    margin: {
                                        bottom: t < 6 ? 4 : 0
                                    }
                                }, r.createElement(d.t, {
                                    linkTo: Object(E.c)(n.name),
                                    title: n.name,
                                    imageAlt: n.name + " cover image",
                                    imageSrc: n.boxArtURL,
                                    info: Object(o.d)("{viewerCount,number} viewers", {
                                        viewerCount: n.viewersCount
                                    }, "FeaturedGames"),
                                    "data-a-target": "card-" + t,
                                    "data-a-id": "card-" + n.name.replace(/ /g, "")
                                })))
                            }),
                            i = r.createElement(d.V, {
                                display: d.H.Flex,
                                flexGrow: 1,
                                justifyContent: d.U.Center,
                                key: "ad"
                            }, r.createElement(h.a, {
                                adSize: v.c.anonFront.rect,
                                adUnit: v.d.frontpage,
                                slotID: v.b.anonFront.rect,
                                targeting: {
                                    pagetype: v.a.frontpage
                                },
                                slotRendered: t.onSlotRendered,
                                autoEnable: !1
                            }));
                        return a.splice(4, 0, i), a
                    }, t.onSlotRendered = function() {
                        t.state.adDisplayed || t.setState({
                            adDisplayed: !0
                        })
                    }, t
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.postRender()
                }, t.prototype.componentDidUpdate = function() {
                    this.postRender()
                }, t.prototype.render = function() {
                    var e = r.createElement(d.V, {
                            display: d.H.Flex,
                            flexDirection: d.J.Row,
                            alignItems: d.c.Baseline,
                            margin: {
                                bottom: 1
                            }
                        }, r.createElement(d._23, {
                            fontSize: d.L.Size2,
                            color: d.F.Base
                        }, Object(o.d)("Featured Games", "FeaturedGames")), r.createElement(d.V, {
                            className: "anon-featured-games__subheader",
                            margin: {
                                left: 2
                            }
                        }, r.createElement(d._23, {
                            fontSize: d.L.Size3,
                            color: d.F.Alt2
                        }, Object(o.d)("Games people are watching now", "FeaturedGames")))),
                        t = r.createElement(d.V, {
                            display: d.H.Flex,
                            justifyContent: d.U.End
                        }, r.createElement(d.Q, {
                            display: d.H.Flex,
                            alignItems: d.c.Center
                        }, r.createElement(b.a, {
                            to: "/directory",
                            "data-a-target": "see-all-live-games-link"
                        }, r.createElement(d._23, {
                            fontSize: d.L.Size4
                        }, Object(o.d)("See all live games", "FeaturedGames")), r.createElement(d._19, {
                            color: d.F.Link,
                            margin: {
                                left: .5
                            },
                            display: d.H.InlineFlex,
                            alignItems: d.c.Center
                        }, r.createElement(d._10, {
                            asset: d._11.AngleRight,
                            width: 14,
                            height: 14
                        })))));
                    return r.createElement(d._19, {
                        className: "anon-featured-games",
                        background: d.m.Base
                    }, e, r.createElement(d.O, null, this.getItems()), t)
                }, t.prototype.postRender = function() {
                    this.props.data.loading || this.props.latencyTracking.reportInteractive()
                }, t = i.__decorate([Object(S.a)(C), Object(c.c)("FeaturedGames")], t)
            }(r.Component)),
            O = n("+GT7"),
            F = n("SZoP");
        ! function(e) {
            e[e.All = 1] = "All", e[e.Xbox = 2] = "Xbox", e[e.PS4 = 3] = "PS4"
        }(a || (a = {}));
        var w = n("262o"),
            x = (n("GrwT"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.getItems = function() {
                        if (t.props.data.loading || t.props.data.error) {
                            for (var e = [], n = 0; n < 6; n++) e.push(r.createElement(d.V, {
                                key: n,
                                margin: {
                                    bottom: 2
                                }
                            }, r.createElement(d.V, {
                                margin: {
                                    bottom: .5
                                }
                            }, r.createElement(d.j, {
                                ratio: d.k.Aspect16x9
                            }, r.createElement(d._3, null))), r.createElement(d._23, null, r.createElement(d._3, {
                                width: 150
                            })), r.createElement(d._23, {
                                fontSize: d.L.Size7
                            }, r.createElement(d._3, {
                                width: 100
                            }))));
                            return e
                        }
                        return t.props.data.streams.edges.map(function(e, n) {
                            if (!e.node.broadcaster.id) return null;
                            var a = e.node,
                                i = Object(F.a)(a.broadcaster.login, a.broadcaster.displayName),
                                l = {
                                    medium: g.PageviewMedium.Following,
                                    content: g.PageviewContent.Live,
                                    content_index: n
                                },
                                s = a && a.game ? Object(E.c)(a.game.name) : "";
                            return r.createElement(d.V, {
                                className: "anon-top-channels",
                                key: a.broadcaster.id,
                                margin: {
                                    bottom: 2
                                }
                            }, r.createElement(O.a, {
                                imageSrc: a && a.previewImageURL || o.a.defaultStreamPreviewURL,
                                imageAlt: a && a.title || "",
                                viewerCount: a && a.viewersCount || 0,
                                title: a && a.title || "",
                                channelName: i,
                                gameImageSrc: a && a.game && a.game.boxArtURL || o.a.defaultBoxArtURL,
                                gameTitle: a && a.game ? a.game.name : "",
                                gameLinkTo: {
                                    pathname: s,
                                    state: l
                                },
                                linkTo: {
                                    pathname: "/" + a.broadcaster.login,
                                    state: l
                                },
                                channelNameLinkTo: {
                                    pathname: "/" + a.broadcaster.login + "/videos",
                                    state: l
                                },
                                "data-a-target": "top-" + t.getDataProp() + "-channel-" + n
                            }))
                        })
                    }, t
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.postRender()
                }, t.prototype.componentDidUpdate = function() {
                    this.postRender()
                }, t.prototype.render = function() {
                    var e = r.createElement(d.V, {
                            display: d.H.Flex,
                            flexDirection: d.J.Row,
                            alignItems: d.c.Baseline,
                            margin: {
                                bottom: 1
                            }
                        }, r.createElement(d._23, {
                            fontSize: d.L.Size2,
                            color: d.F.Base
                        }, this.getTitle()), r.createElement(d.V, {
                            className: "anon-top-channels__subheader",
                            margin: {
                                left: 2
                            }
                        }, r.createElement(d._23, {
                            fontSize: d.L.Size3,
                            color: d.F.Alt2
                        }, this.getSubtitle()))),
                        t = r.createElement(d.V, {
                            className: "anon-top-channels__footer",
                            display: d.H.Flex,
                            justifyContent: d.U.End
                        }, r.createElement(d.Q, {
                            display: d.H.Flex,
                            alignItems: d.c.Center
                        }, r.createElement(b.a, {
                            to: this.getLink(),
                            "data-a-target": "see-all-" + this.getDataProp() + "-channels-link"
                        }, r.createElement(d._23, {
                            fontSize: d.L.Size4
                        }, this.getFooter()), r.createElement(d._19, {
                            color: d.F.Link,
                            margin: {
                                left: .5
                            },
                            display: d.H.InlineFlex,
                            alignItems: d.c.Center
                        }, r.createElement(d._10, {
                            asset: d._11.AngleRight,
                            width: 14,
                            height: 14
                        })))));
                    return r.createElement("div", null, e, r.createElement(d._34, {
                        gutterSize: d._36.Small,
                        childWidth: d._35.Large,
                        placeholderItems: 6
                    }, this.getItems()), t)
                }, t.prototype.postRender = function() {
                    this.props.data.loading || this.props.latencyTracking.reportInteractive()
                }, t.prototype.getFooter = function() {
                    switch (this.props.type) {
                        case a.All:
                            return Object(o.d)("See all live Channels", "TopChannels");
                        case a.PS4:
                            return Object(o.d)("See all PS4 Channels", "TopChannels");
                        case a.Xbox:
                            return Object(o.d)("See all Xbox One Channels", "TopChannels");
                        default:
                            return ""
                    }
                }, t.prototype.getSubtitle = function() {
                    switch (this.props.type) {
                        case a.All:
                            return Object(o.d)("Broadcasters people are watching now", "TopChannels");
                        case a.PS4:
                            return Object(o.d)("Channels broadcasted from Playstation 4", "TopChannels");
                        case a.Xbox:
                            return Object(o.d)("Channels broadcasted from Xbox one", "TopChannels");
                        default:
                            return ""
                    }
                }, t.prototype.getTitle = function() {
                    switch (this.props.type) {
                        case a.All:
                            return Object(o.d)("Top Live Channels", "TopChannels");
                        case a.PS4:
                            return Object(o.d)("Top PS4 Channels", "TopChannels");
                        case a.Xbox:
                            return Object(o.d)("Top Xbox One Channels", "TopChannels");
                        default:
                            return ""
                    }
                }, t.prototype.getDataProp = function() {
                    switch (this.props.type) {
                        case a.All:
                            return "live";
                        case a.PS4:
                            return "ps4";
                        case a.Xbox:
                            return "xbox";
                        default:
                            return ""
                    }
                }, t.prototype.getLink = function() {
                    switch (this.props.type) {
                        case a.All:
                            return "/directory/all";
                        case a.PS4:
                            return "/directory/all/ps4";
                        case a.Xbox:
                            return "/directory/all/xbox";
                        default:
                            return ""
                    }
                }, t = i.__decorate([Object(S.a)(w, {
                    options: function(e) {
                        var t = "";
                        switch (e.type) {
                            case a.PS4:
                                t = "ps4";
                                break;
                            case a.Xbox:
                                t = "xbox";
                                break;
                            default:
                                t = "all"
                        }
                        return {
                            variables: {
                                platformType: t
                            }
                        }
                    }
                }), Object(c.c)("TopChannels")], t)
            }(r.Component)),
            P = (n("9zTP"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        takeoverRendered: !1,
                        numSlotsAdded: 0
                    }, t.onTakeoverRendered = function() {
                        t.setState({
                            takeoverRendered: !0
                        })
                    }, t.onSlotAdded = function() {
                        t.setState(function(e) {
                            var t = e.numSlotsAdded + 1;
                            return t === Object.keys(v.b.anonFront).length && f.a.display(v.b.anonFront.takeover), {
                                numSlotsAdded: t
                            }
                        })
                    }, t
                }
                return i.__extends(t, e), t.prototype.componentWillMount = function() {
                    v.g.addListener(v.e, this.onSlotAdded)
                }, t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive(), o.n.setPageTitle()
                }, t.prototype.render = function() {
                    return r.createElement(d.V, {
                        fullHeight: !0
                    }, r.createElement(y.a, null, r.createElement(_.a, null)), r.createElement(d._19, {
                        className: "anon-front",
                        background: d.m.Base,
                        position: d._4.Relative,
                        fullHeight: !0
                    }, r.createElement("div", {
                        id: "mantle_skin",
                        className: this.state.takeoverRendered ? "anon-front__takeover" : ""
                    }, r.createElement(h.a, {
                        adSize: v.c.anonFront.takeover,
                        adUnit: v.d.frontpage,
                        slotID: v.b.anonFront.takeover,
                        targeting: {
                            pagetype: v.a.frontpage
                        },
                        slotRendered: this.onTakeoverRendered,
                        autoEnable: !1
                    }), r.createElement(d.V, {
                        className: "anon-front__featured-section",
                        display: d.H.Flex,
                        justifyContent: d.U.Center
                    }, r.createElement(d.V, {
                        className: "anon-front__banner"
                    }, r.createElement(h.a, {
                        adSize: v.c.anonFront.banner,
                        adUnit: v.d.frontpage,
                        slotID: v.b.anonFront.banner,
                        targeting: {
                            pagetype: v.a.frontpage
                        },
                        injectStyles: {
                            display: "flex"
                        },
                        autoEnable: !1
                    })), r.createElement(d.V, {
                        className: "anon-front__content-section",
                        padding: this.state.takeoverRendered ? 2 : 0
                    }, r.createElement(k.b, {
                        renderContext: k.a.AnonFront
                    })), r.createElement(d.V, {
                        className: "anon-front__sizzle-strip",
                        display: d.H.Flex,
                        justifyContent: d.U.Center
                    }, r.createElement(h.a, {
                        adSize: v.c.anonFront.sizzle,
                        adUnit: v.d.sizzle,
                        slotID: v.b.anonFront.sizzle,
                        targeting: {
                            pagetype: v.a.frontpage
                        },
                        autoEnable: !1
                    }))), r.createElement(d._19, {
                        background: d.m.Base,
                        margin: {
                            x: "auto"
                        },
                        padding: {
                            x: 1,
                            top: 5,
                            bottom: 3
                        },
                        className: "anon-front__content-section"
                    }, r.createElement(N, null)), r.createElement(d._19, {
                        className: "anon-front__social-container",
                        display: d.H.Flex,
                        flexDirection: d.J.Column,
                        alignItems: d.c.Center,
                        justifyContent: d.U.Center,
                        borderTop: !0,
                        borderBottom: !0,
                        padding: {
                            y: 3,
                            x: 2
                        }
                    }, r.createElement(d._23, {
                        fontSize: d.L.Size3
                    }, Object(o.d)("Follow the latest Twitch news", "AnonFrontPage")), r.createElement(d.V, {
                        margin: {
                            top: 1
                        },
                        display: d.H.Flex,
                        flexDirection: d.J.Row
                    }, r.createElement(d.u, {
                        linkTo: "https://www.facebook.com/twitch",
                        targetBlank: !0,
                        size: d.x.Large,
                        "data-a-target": "frontpage-facebook-link"
                    }, Object(o.d)("Facebook", "AnonFrontPage")), r.createElement(d.V, {
                        margin: {
                            x: .5
                        }
                    }, r.createElement(d.u, {
                        linkTo: "https://www.twitter.com/twitch",
                        targetBlank: !0,
                        size: d.x.Large,
                        "data-a-target": "frontpage-twitter-link"
                    }, Object(o.d)("Twitter", "AnonFrontPage"))), r.createElement(d.u, {
                        linkTo: "https://blog.twitch.tv/",
                        targetBlank: !0,
                        size: d.x.Large,
                        "data-a-target": "frontpage-blog-link"
                    }, Object(o.d)("Official Blog", "AnonFrontPage")))), r.createElement(d._19, {
                        background: d.m.Base,
                        padding: {
                            x: 1,
                            top: 3,
                            bottom: 3
                        },
                        margin: {
                            x: "auto"
                        },
                        className: "anon-front__content-section"
                    }, r.createElement(x, {
                        type: a.All,
                        key: "channels.all"
                    })), r.createElement(d._19, {
                        background: d.m.Base,
                        padding: {
                            x: 1,
                            y: 3
                        },
                        margin: {
                            x: "auto"
                        },
                        className: "anon-front__content-section"
                    }, r.createElement(x, {
                        type: a.PS4,
                        key: "channels.ps4"
                    })), r.createElement(d._19, {
                        background: d.m.Base,
                        padding: {
                            x: 1,
                            y: 3
                        },
                        margin: {
                            x: "auto"
                        },
                        className: "anon-front__content-section"
                    }, r.createElement(x, {
                        type: a.Xbox,
                        key: "channels.xbox"
                    })), r.createElement(d.V, {
                        className: "anon-front__bottom",
                        display: d.H.Flex,
                        justifyContent: d.U.Center
                    }, r.createElement(h.a, {
                        adSize: v.c.anonFront.bottom,
                        adUnit: v.d.frontpage,
                        slotID: v.b.anonFront.bottom,
                        targeting: {
                            pagetype: v.a.frontpage
                        },
                        injectStyles: {
                            display: "flex"
                        },
                        autoEnable: !1
                    })), r.createElement(u, null))))
                }, t.prototype.componentWillUnmount = function() {
                    v.g.removeListener(v.e, this.onSlotAdded)
                }, t = i.__decorate([Object(c.c)("AnonFrontPage", {
                    destination: p.a.Index
                }), Object(m.a)({
                    location: g.PageviewLocation.FrontPage
                })], t)
            }(r.Component));
        n.d(t, "AnonFrontPage", function() {
            return P
        })
    },
    "8atL": function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "FeaturedContent"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "language"
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
                            value: "featuredStreams"
                        },
                        arguments: [{
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
                        }, {
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "first"
                            },
                            value: {
                                kind: "IntValue",
                                value: "8"
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
                                    value: "isScheduled"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "isSponsored"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "priorityLevel"
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
                                            value: "broadcaster"
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
                                            }]
                                        }
                                    }, {
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
                                            value: "viewersCount"
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
                                    value: "title"
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
                            value: "featuredVideos"
                        },
                        arguments: [{
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
                        }, {
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "first"
                            },
                            value: {
                                kind: "IntValue",
                                value: "2"
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
                                    value: "isScheduled"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "isSponsored"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "priorityLevel"
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
                                    value: "video"
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
                                            value: "owner"
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
                                    }]
                                }
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 797
            }
        };
        n.loc.source = {
            body: "# Documentation about how to use GraphQL is located in the Data Access Guide:\n# https://git-aws.internal.justin.tv/pages/twilight/twilight-docs/docs/guides/data-access.html\n# Additionally use the GraphQL explorer (https://api.twitch.tv/gql/explore) to browse\n# available GraphQL data and construct your query.\nquery FeaturedContent($language: String!) {\nfeaturedStreams(language: $language first: 8) {\ndescription\nimageURL\nisScheduled\nisSponsored\npriorityLevel\nstream {\nbroadcaster {\ndisplayName\nid\nprofileImageURL(width: 150)\nlogin\n}\ngame {\nid\nname\n}\nid\ntype\nviewersCount\n}\ntitle\n}\nfeaturedVideos(language: $language first: 2) {\ndescription\nimageURL\nisScheduled\nisSponsored\npriorityLevel\ntitle\nvideo {\ngame {\nid\nname\n}\nid\nowner {\ndisplayName\nid\nprofileImageURL(width: 150)\nlogin\n}\nviewCount\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    9856: function(e, t) {},
    "9zTP": function(e, t) {},
    APTF: function(e, t) {},
    CybZ: function(e, t) {},
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
    GrwT: function(e, t) {},
    Hs3O: function(e, t, n) {
        "use strict";
        n.d(t, "b", function() {
            return i
        }), n.d(t, "a", function() {
            return r
        }), n.d(t, "c", function() {
            return o
        }), t.d = function(e, t) {
            var n = a.b.get(l, "https://twitch.amazon.com/prime"),
                i = "";
            try {
                i = btoa(t)
            } catch (e) {
                s.error(e, "Could not decode location pathname substring for redirect")
            }
            return i ? n + "?ref_=" + e + "&redirectRoute=" + i : n + "?ref_=" + e
        };
        var a = n("6sO2"),
            i = "sm_tw_tup_ntp_t_all",
            r = "sm_tw_thp_blue_t_all",
            o = "sm_w_tup_ntp_t_c",
            l = "prime_landing_page_base_url",
            s = a.i.withCategory("PrimeUtilsLogger")
    },
    IOwa: function(e, t, n) {
        "use strict";
        var a, i, r, o = n("TToO"),
            l = n("HW6M"),
            s = n("U7vG"),
            c = n("6sO2"),
            d = n("2o2f"),
            u = n("Odds"),
            m = (n("CybZ"), a = {}, a[d.a.Live] = "stream-type-indicator--live", a[d.a.Premiere] = "stream-type-indicator--premiere", a[d.a.Rerun] = "stream-type-indicator--rerun", a[d.a.WatchParty] = "stream-type-indicator--rerun", a),
            p = (i = {}, i[d.a.Premiere] = u._11.VideoPremiere, i[d.a.Rerun] = u._11.VideoRerun, i[d.a.WatchParty] = u._11.VideoRerun, i),
            f = (r = {}, r[d.a.Premiere] = u._12.Live, r[d.a.Rerun] = u._12.Inherit, r[d.a.WatchParty] = u._12.Inherit, r),
            g = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return o.__extends(t, e), t.prototype.render = function() {
                    return s.createElement(u._19, {
                        className: this.getClassNames(),
                        color: u.F.Overlay,
                        background: u.m.Overlay,
                        padding: {
                            x: .5
                        },
                        borderRadius: u.s.Small,
                        display: u.H.Flex
                    }, s.createElement(u.V, {
                        display: u.H.Flex,
                        alignItems: u.c.Center,
                        margin: {
                            right: .5
                        }
                    }, this.getIcon()), s.createElement(u._23, {
                        type: u._28.Span
                    }, this.getLabel()))
                }, t.prototype.getClassNames = function() {
                    var e = {
                        "stream-type-indicator": !0
                    };
                    return e[m[this.props.type]] = !0, l(e)
                }, t.prototype.getIcon = function() {
                    return this.props.hosting ? s.createElement(u._19, {
                        borderRadius: u.s.Rounded,
                        className: "stream-type-indicator__hosting-dot"
                    }) : this.props.type === d.a.Live ? s.createElement(u.V, {
                        className: "stream-type-indicator__live-wrapper",
                        display: u.H.Flex,
                        alignItems: u.c.Center
                    }, s.createElement(u.X, {
                        size: u.Y.Small
                    })) : s.createElement(u._10, {
                        asset: p[this.props.type],
                        type: f[this.props.type],
                        width: 14,
                        height: 14
                    })
                }, t.prototype.getLabel = function() {
                    if (this.props.hosting) return Object(c.d)("Hosting", "StreamTypeIndicator");
                    switch (this.props.type) {
                        case d.a.Live:
                            return Object(c.d)("Live", "StreamTypeIndicator");
                        case d.a.Premiere:
                            return Object(c.d)("Premiere", "StreamTypeIndicator");
                        case d.a.Rerun:
                        case d.a.WatchParty:
                            return Object(c.d)("Rerun", "StreamTypeIndicator");
                        default:
                            return ""
                    }
                }, t
            }(s.Component);
        n.d(t, "a", function() {
            return g
        })
    },
    "LEV+": function(e, t) {},
    QG7y: function(e, t, n) {
        "use strict";
        n.d(t, "b", function() {
            return r
        }), n.d(t, "c", function() {
            return o
        }), n.d(t, "d", function() {
            return l
        }), n.d(t, "a", function() {
            return s
        }), n.d(t, "f", function() {
            return c
        }), n.d(t, "e", function() {
            return d
        }), n.d(t, "g", function() {
            return u
        }), t.i = function(e) {
            u.emit(c, e)
        }, t.h = function(e) {
            u.emit(d, e)
        };
        var a = n("BzvE"),
            i = (n.n(a), n("6sO2")),
            r = {
                directory: {
                    banner: "dfp-directory-banner",
                    rectangle: "dfp-directory-rectangle"
                },
                channel250: "google_companion_300x250",
                anonFront: {
                    rect: "Twitch_FPMedRect_holder",
                    banner: "Twitch_FPopaBanner_holder",
                    takeover: "Twitch_FPTakeoverSkinv2_holder",
                    bottom: "Twitch_FP970Bottom_holder",
                    sizzle: "sizzle_strip"
                },
                front: {
                    leaderboard: "hpto_logged_in_leaderboard",
                    rightTop: "hpto_logged_in_rcol_top",
                    rightBottom: "hpto_logged_in_rcol_bottom"
                }
            },
            o = {
                directory: {
                    banner: [
                        [970, 66],
                        [970, 250],
                        [728, 90]
                    ],
                    rectangle: [
                        [300, 250]
                    ]
                },
                channel250: [300, 250],
                anonFront: {
                    rect: [
                        [300, 250]
                    ],
                    banner: [
                        [970, 418],
                        [970, 67],
                        [970, 250],
                        [970, 150],
                        [980, 250]
                    ],
                    takeover: [
                        [1, 1]
                    ],
                    bottom: [
                        [970, 66],
                        [728, 90]
                    ],
                    sizzle: [
                        [980, 250]
                    ]
                },
                front: {
                    leaderboard: [
                        [970, 66],
                        [728, 90]
                    ],
                    rightTop: [
                        [300, 250]
                    ],
                    rightBottom: [
                        [300, 600]
                    ]
                }
            },
            l = {
                directory: "/" + i.a.dfpNetworkCode + "/twitch/directory",
                channel: "/" + i.a.dfpNetworkCode + "/twitch/channels",
                frontpage: "/" + i.a.dfpNetworkCode + "/twitch/homepage",
                sizzle: "/" + i.a.dfpNetworkCode + "/twitch/sizzle_strip"
            },
            s = {
                games: "games",
                channel: "channel",
                frontpage: "homepage"
            },
            c = "ads.slot-render-end",
            d = "ads.slot-ready",
            u = new a.EventEmitter
    },
    Qk3C: function(e, t, n) {
        "use strict";

        function a(e) {
            return function() {
                Object(o.c)(e), window.location.reload(!0)
            }
        }
        var i = n("RH2O"),
            r = n("2KeS"),
            o = n("FuaS"),
            l = n("TToO"),
            s = n("U7vG"),
            c = n("6sO2"),
            d = n("Odds"),
            u = (n("2Nqs"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.renderLink = function(e) {
                        return s.createElement(d.T, {
                            key: e.languageCode,
                            onClick: function() {
                                return t.props.changeLanguage(e.languageCode)
                            },
                            "data-target": "language-selector-link"
                        }, s.createElement(d.V, {
                            padding: {
                                y: .5,
                                x: 1
                            }
                        }, e.name))
                    }, t
                }
                return l.__extends(t, e), t.prototype.render = function() {
                    var e = Math.floor(c.a.locales.length / 2);
                    return s.createElement(d.V, {
                        className: "language-selector",
                        display: d.H.Flex,
                        padding: {
                            y: 1
                        }
                    }, s.createElement("div", {
                        className: "language-selector__list language-selector__list--border-right"
                    }, c.a.locales.slice(0, e).map(this.renderLink)), s.createElement("div", {
                        className: "language-selector__list"
                    }, c.a.locales.slice(e).map(this.renderLink)))
                }, t
            }(s.Component)),
            m = Object(i.a)(function() {
                return {}
            }, function(e) {
                return Object(r.bindActionCreators)({
                    changeLanguage: a
                }, e)
            })(u);
        n.d(t, "a", function() {
            return m
        })
    },
    R0Kh: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return o
        }), n.d(t, "b", function() {
            return l
        }), n.d(t, "c", function() {
            return s
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
            return g
        });
        var a = n("OAwv"),
            i = (n.n(a), n("6sO2")),
            r = n("S1vB"),
            o = {
                DIRECT_ENTITLEMENT: "DIRECT_ENTITLEMENT",
                CLAIM_CODE: "CLAIM_CODE",
                EXTERNAL_OFFER: "EXTERNAL_OFFER"
            },
            l = function(e, t) {
                return e + "-" + t
            },
            s = function() {
                return p("claimedOffers")
            },
            c = function(e) {
                i.k.set("claimedOffers", e)
            },
            d = function() {
                return p("seenOffers")
            },
            u = function(e) {
                i.k.set("seenOffers", e)
            },
            m = function(e, t) {
                return (e && (e.priority || 0 === e.priority) ? e.priority : 99999) - (t && (t.priority || 0 === t.priority) ? t.priority : 99999)
            },
            p = function(e) {
                return i.k.get(e, [])
            },
            f = function(e, t) {
                return void 0 !== e && void 0 !== t && (!e && Object(r.a)(t))
            },
            g = function() {
                var e = location.search,
                    t = a.parse(e);
                return t && t.dateOverride || void 0
            }
    },
    TUg1: function(e, t) {},
    WKwZ: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return i
        }), n.d(t, "d", function() {
            return r
        }), n.d(t, "e", function() {
            return o
        }), n.d(t, "c", function() {
            return a
        }), n.d(t, "b", function() {
            return l
        });
        var a, i = "carousel-player__main-description",
            r = "carousel-player-left-button",
            o = "carousel-player-right-button";
        ! function(e) {
            e[e.Horizontal = 1] = "Horizontal", e[e.Vertical = 2] = "Vertical"
        }(a || (a = {}));
        var l;
        ! function(e) {
            e[e.Stream = 1] = "Stream", e[e.Vod = 2] = "Vod"
        }(l || (l = {}))
    },
    Wjt1: function(e, t, n) {
        "use strict";

        function a(e, t, n) {
            switch (t) {
                case d.FeaturedBroadcastersRenderContext.AnonFront:
                    return r.createElement(s.a, {
                        items: e,
                        isLoading: n,
                        layout: c.c.Horizontal,
                        darkTheme: !0
                    });
                default:
                    return r.createElement(f._19, {
                        className: "featured-content",
                        background: f.m.Base,
                        elevation: 1
                    }, r.createElement(f.V, {
                        padding: 1
                    }, function(e) {
                        return e ? r.createElement(f._23, {
                            fontSize: f.L.Size5,
                            color: f.F.Alt2
                        }, r.createElement(f._3, {
                            width: 100
                        })) : r.createElement(f._23, {
                            fontSize: f.L.Size5,
                            color: f.F.Alt2
                        }, Object(o.d)("Featured", "FeaturedContentComponent"))
                    }(n)), r.createElement(s.a, {
                        items: e,
                        isLoading: n,
                        layout: c.c.Vertical
                    }))
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.placeholderFeaturedBroadcasters = function(e) {
            return a([], e, !0)
        }, n.d(t, "FeaturedContent", function() {
            return g
        });
        var i = n("TToO"),
            r = n("U7vG"),
            o = (n.n(r), n("6sO2")),
            l = n("7vx8"),
            s = n("g91j"),
            c = n("WKwZ"),
            d = n("o8Pq"),
            u = n("8atL"),
            m = (n.n(u), n("Xg86")),
            p = n("CSlQ"),
            f = n("Odds");
        n.d(t, "FeaturedBroadcastersRenderContext", function() {
            return d.FeaturedBroadcastersRenderContext
        });
        var g = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return i.__extends(t, e), t.prototype.componentDidMount = function() {
                this.postRender()
            }, t.prototype.componentDidUpdate = function() {
                this.postRender()
            }, t.prototype.render = function() {
                var e = this.props.data.featuredStreams || [],
                    t = Object(m.a)(e),
                    n = this.props.data.featuredVideos || [],
                    i = Object(m.b)(n);
                if (t.length > 0 && t.splice(t.length - i.length), this.props.shouldMixContent && i.length > 0) {
                    var r = 6 - i.length,
                        o = t.splice(r);
                    t = t.concat(i).concat(o)
                } else t = t.concat(i);
                var l = !(!this.props.data.loading && !this.props.data.error);
                return a(t, this.props.renderContext, l)
            }, t.prototype.postRender = function() {
                this.props.data && !this.props.data.loading && this.props.latencyTracking.reportInteractive()
            }, t = i.__decorate([Object(l.a)(u, {
                options: function() {
                    return {
                        variables: {
                            language: o.n.intl.getLanguageCode()
                        }
                    }
                }
            }), Object(p.c)("FeaturedContent")], t)
        }(r.Component)
    },
    Xg86: function(e, t, n) {
        "use strict";

        function a(e) {
            return e.replace(/\[\]\(.+\)/, "")
        }
        t.a = function(e) {
            return e.map(function(e) {
                var t = "",
                    n = null;
                return e.stream && e.stream.game && null !== e.stream.game.name && (t = e.stream.game.name), e.stream && e.stream.broadcaster && (n = e.stream.broadcaster), {
                    broadcaster: {
                        displayName: n ? n.displayName : "",
                        id: n ? n.id : "",
                        login: n ? n.login : "",
                        profileImageURL: n ? n.profileImageURL : ""
                    },
                    content: {
                        id: n ? n.login : "",
                        gameName: t,
                        type: i.b.Stream,
                        subType: e.stream ? e.stream.type : "",
                        viewersCount: e.stream ? e.stream.viewersCount : 0
                    },
                    description: a(e.description || ""),
                    imageURL: e.imageURL || "",
                    isScheduled: e.isScheduled || !1,
                    isSponsored: e.isSponsored || !1,
                    priorityLevel: e.priorityLevel,
                    title: e.title || ""
                }
            })
        }, t.b = function(e) {
            return e.map(function(e) {
                var t = "",
                    n = null;
                return e.video && e.video.game && null !== e.video.game.name && (t = e.video.game.name), e.video && e.video.owner && (n = e.video.owner), {
                    broadcaster: {
                        displayName: n ? n.displayName : "",
                        id: n ? n.id : "",
                        login: n ? n.login : "",
                        profileImageURL: n ? n.profileImageURL : ""
                    },
                    content: {
                        id: e.video ? e.video.id : "",
                        gameName: t,
                        type: i.b.Vod,
                        subType: "video",
                        viewersCount: e.video ? e.video.viewCount : 0
                    },
                    description: a(e.description || ""),
                    imageURL: e.imageURL || "",
                    isScheduled: e.isScheduled || !1,
                    isSponsored: e.isSponsored || !1,
                    priorityLevel: e.priorityLevel,
                    title: e.title || ""
                }
            })
        };
        var i = n("WKwZ")
    },
    bNhH: function(e, t, n) {
        "use strict";

        function a(e, t, n) {
            switch (t) {
                case i.AnonFront:
                    return o.createElement(c.a, {
                        items: e,
                        isLoading: n,
                        layout: d.c.Horizontal,
                        darkTheme: !0
                    });
                default:
                    return o.createElement(p._19, {
                        className: "featured-broadcasters",
                        background: p.m.Base,
                        elevation: 1
                    }, o.createElement(p.V, {
                        padding: 1
                    }, o.createElement(p._23, {
                        fontSize: p.L.Size5,
                        color: p.F.Alt2
                    }, Object(l.d)("Featured Broadcasters", "FeaturedBroadcastersComponent"))), o.createElement(c.a, {
                        items: e,
                        isLoading: n,
                        layout: d.c.Vertical
                    }))
            }
        }
        n.d(t, "b", function() {
            return i
        }), t.c = function(e) {
            return a([], e, !0)
        }, n.d(t, "a", function() {
            return g
        });
        var i, r = n("TToO"),
            o = n("U7vG"),
            l = (n.n(o), n("6sO2")),
            s = n("7vx8"),
            c = n("g91j"),
            d = n("WKwZ"),
            u = n("Xg86"),
            m = n("CSlQ"),
            p = n("Odds"),
            f = n("uckt");
        n.n(f);
        ! function(e) {
            e[e.AnonFront = 1] = "AnonFront", e[e.Front = 2] = "Front"
        }(i || (i = {}));
        var g = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.getRender = function(e) {
                    var n = !(!t.props.data.loading && !t.props.data.error);
                    return a(e, t.props.renderContext, n)
                }, t
            }
            return r.__extends(t, e), t.prototype.componentDidMount = function() {
                this.postRender()
            }, t.prototype.componentDidUpdate = function() {
                this.postRender()
            }, t.prototype.render = function() {
                var e = this.props.data.featuredStreams || [],
                    t = Object(u.a)(e);
                return this.getRender(t)
            }, t.prototype.postRender = function() {
                this.props.data && !this.props.data.loading && this.props.latencyTracking.reportInteractive()
            }, t = r.__decorate([Object(s.a)(f, {
                options: function(e) {
                    return {
                        variables: {
                            language: l.n.intl.getLanguageCode(),
                            first: e.streamCount || 8
                        }
                    }
                }
            }), Object(m.c)("FeaturedBroadcasters")], t)
        }(o.Component)
    },
    dXGo: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "AnonFront_FeaturedGames"
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
                            value: "games"
                        },
                        arguments: [{
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "first"
                            },
                            value: {
                                kind: "IntValue",
                                value: "11"
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
                                                    value: "name"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: null
                                            }, {
                                                kind: "Field",
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "viewersCount"
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
                                                        value: "285"
                                                    }
                                                }, {
                                                    kind: "Argument",
                                                    name: {
                                                        kind: "Name",
                                                        value: "height"
                                                    },
                                                    value: {
                                                        kind: "IntValue",
                                                        value: "380"
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
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 128
            }
        };
        n.loc.source = {
            body: "query AnonFront_FeaturedGames {\ngames(first: 11) {\nedges {\nnode {\nid\nname\nviewersCount\nboxArtURL(width: 285 height: 380)\n}\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
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
    g91j: function(e, t, n) {
        "use strict";

        function a(e) {
            switch (e.type) {
                case g.b.Stream:
                    return m.createElement(C.c, {
                        channelLogin: e.id,
                        vodID: "",
                        disableTheatreButton: !0,
                        playerTypeOverride: C.b.Frontpage,
                        onInit: e.onPlayerInit,
                        onDestroy: e.onPlayerDestroy
                    });
                case g.b.Vod:
                    return m.createElement(C.c, {
                        channelLogin: "",
                        vodID: e.id,
                        disableTheatreButton: !0,
                        playerTypeOverride: C.b.Frontpage,
                        onInit: e.onPlayerInit,
                        onDestroy: e.onPlayerDestroy,
                        onVideoTimeChange: e.onVideoTimeChange
                    });
                default:
                    return null
            }
        }

        function i(e) {
            l.m.track(P.SpadeEventType.FrontPageCarouselNavButtonClick, {
                direction: e
            })
        }
        var r, o = n("TToO"),
            l = n("6sO2"),
            s = n("/7C1");
        l.n.store.registerReducer("carouselPlayer", function(e, t) {
            switch (void 0 === e && (e = {
                isPlayerInitialized: !1
            }), t.type) {
                case s.b:
                    return r = t.player, o.__assign({}, e, {
                        isPlayerInitialized: !0
                    });
                case s.c:
                    return r = null, o.__assign({}, e, {
                        isPlayerInitialized: !1
                    });
                case s.a:
                    return e.isPlayerInitialized && r && r.pause(), e;
                default:
                    return e
            }
        });
        var c = n("RH2O"),
            d = n("2KeS"),
            u = n("HW6M"),
            m = n("U7vG"),
            p = n("NXs7"),
            f = n("VAT8"),
            g = n("WKwZ"),
            h = n("CSlQ"),
            v = n("Odds"),
            k = (n("TUg1"), "carousel-card-live"),
            y = "carousel-card-vod",
            _ = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.renderIndicator = function() {
                        return t.props.item.content.type === g.b.Stream ? m.createElement(v.X, {
                            size: v.Y.Small,
                            "data-test-selector": k
                        }) : m.createElement(v._10, {
                            asset: v._11.GlyphViews,
                            "data-test-selector": y
                        })
                    }, t.itemClick = function() {
                        t.props.itemClick(t.props.item)
                    }, t
                }
                return o.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = u({
                        "carousel-nav__item": !0,
                        "carousel-nav__item--active": this.props.itemActive
                    });
                    return m.createElement(v.V, {
                        className: e,
                        margin: {
                            x: .5
                        },
                        padding: {
                            bottom: .5
                        },
                        flexGrow: 1,
                        position: v._4.Relative
                    }, m.createElement(v._31, {
                        label: (this.props.item.isSponsored ? Object(l.d)("Sponsored", "CarouselCardComponent") : "") + " " + this.props.item.broadcaster.displayName,
                        direction: v._33.Top,
                        display: v.H.Block
                    }, m.createElement(v.T, o.__assign({
                        onClick: this.itemClick
                    }, Object(v._40)(this.props)), m.createElement(v.j, {
                        ratio: v.k.Aspect16x9
                    }, m.createElement(v.V, {
                        className: "carousel-nav__meta",
                        alignItems: v.c.Center,
                        attachBottom: !0,
                        margin: {
                            left: .5
                        },
                        zIndex: v._39.Above
                    }, this.renderIndicator(), m.createElement(v.V, {
                        display: v.H.InlineFlex,
                        margin: {
                            left: .5
                        }
                    }, m.createElement(v._23, {
                        color: v.F.Overlay,
                        type: v._28.Span
                    }, Object(l.e)(this.props.item.content.viewersCount)))), m.createElement(v.V, {
                        className: "carousel-nav__img-container"
                    }, m.createElement("img", {
                        className: "carousel-nav__img",
                        "data-content-id": this.props.item.content.id,
                        src: this.props.item.imageURL,
                        alt: this.props.item.broadcaster.displayName,
                        "data-a-target": "carousel-image"
                    }), this.props.item.isSponsored ? m.createElement(v.V, {
                        position: v._4.Absolute,
                        attachRight: !0,
                        attachTop: !0
                    }, m.createElement(v._10, {
                        asset: v._11.Featured,
                        type: v._12.Brand,
                        width: 20,
                        height: 20
                    })) : "")))))
                }, t = o.__decorate([Object(h.c)("CarouselCard")], t)
            }(m.Component),
            b = n("lfvs"),
            S = n("F8kA"),
            E = n("SZoP"),
            C = n("fc0G"),
            N = (n("i6UE"), {
                content: "carousel",
                medium: "twitch_home"
            }),
            O = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.getContentRender = function() {
                        var e = u("horizontal-carousel-player__details", {
                                "horizontal-carousel-player__details--overlay": t.props.darkTheme
                            }),
                            n = Object(l.d)("playing {game}", {
                                game: m.createElement(S.a, {
                                    to: {
                                        pathname: "/directory/game/" + t.props.item.content.gameName,
                                        state: N
                                    }
                                }, t.props.item.content.gameName)
                            }, "HorizontalCarouselPlayer"),
                            i = {
                                type: t.props.item.content.type,
                                id: t.props.item.content.id,
                                onPlayerInit: t.props.onPlayerInit,
                                onPlayerDestroy: t.props.onPlayerDestroy,
                                onVideoTimeChange: t.onVideoTimeChange
                            };
                        return m.createElement(v._19, {
                            className: "horizontal-carousel-player",
                            margin: {
                                bottom: 2
                            },
                            display: v.H.Flex,
                            flexDirection: v.J.Row,
                            color: v.F.Alt
                        }, m.createElement(v.V, {
                            flexGrow: 1,
                            flexShrink: 0
                        }, m.createElement(v.V, {
                            className: "horizontal-carousel-player__video",
                            position: v._4.Relative,
                            overflow: v._0.Hidden
                        }, a(i))), m.createElement(v.V, {
                            className: e,
                            flexGrow: 0,
                            padding: 2
                        }, m.createElement(v.V, {
                            display: v.H.Flex,
                            flexWrap: v.K.NoWrap,
                            textAlign: v._24.Left,
                            alignItems: v.c.Center,
                            padding: {
                                bottom: .5
                            }
                        }, m.createElement(v.V, {
                            margin: {
                                right: 1
                            },
                            flexShrink: 0
                        }, m.createElement("span", {
                            onClick: t.promotionCardClick.bind(t, "thumbnail")
                        }, m.createElement(S.a, {
                            to: {
                                pathname: "/" + t.props.item.broadcaster.login,
                                state: N
                            },
                            "data-a-target": "carousel-profile-image"
                        }, m.createElement(v.l, {
                            imageSrc: t.props.item.broadcaster.profileImageURL,
                            imageAlt: Object(l.d)("Profile Picture for {login}", {
                                login: t.props.item.broadcaster.login
                            }, "HorizontalCarouselPlayer"),
                            size: 40
                        })))), m.createElement(v.V, {
                            margin: {
                                right: 1
                            },
                            flexGrow: 1
                        }, m.createElement(v._23, {
                            fontSize: v.L.Size4,
                            color: v.F.Base,
                            lineHeight: v.W.Heading,
                            "data-a-target": "carousel-broadcaster-displayname"
                        }, Object(E.a)(t.props.item.broadcaster.login, t.props.item.broadcaster.displayName)), m.createElement(v._23, {
                            fontSize: v.L.Size6,
                            color: v.F.Base,
                            "data-a-target": "carousel-user-playing-message"
                        }, m.createElement("span", {
                            onClick: t.promotionCardClick.bind(t, "game_name")
                        }, n)))), m.createElement(v.V, {
                            margin: {
                                y: 1
                            }
                        }, m.createElement("span", {
                            onClick: t.promotionCardClick.bind(t, "stream_title")
                        }, m.createElement(S.a, {
                            to: t.getLinkForTitle()
                        }, m.createElement(v._23, {
                            type: v._28.Span,
                            "data-a-target": g.a,
                            fontSize: v.L.Size3,
                            lineHeight: v.W.Heading
                        }, t.props.item.title)))), m.createElement(b, {
                            source: t.props.item.description || ""
                        })))
                    }, t.getLinkForTitle = function() {
                        if (t.props.item.content.type === g.b.Stream) return {
                            pathname: "/" + t.props.item.broadcaster.login,
                            state: N
                        };
                        var e = t.state ? t.state.videoOffset || 0 : 0;
                        return {
                            pathname: "/videos/" + t.props.item.content.id + "?t=" + e,
                            state: N
                        }
                    }, t.getPlaceholderRender = function() {
                        var e = u("horizontal-carousel-player__details", {
                            "horizontal-carousel-player__details--overlay": t.props.darkTheme
                        });
                        return m.createElement(v.V, {
                            display: v.H.Flex,
                            flexWrap: v.K.NoWrap,
                            flexShrink: 0,
                            margin: {
                                bottom: 2
                            }
                        }, m.createElement(v.V, {
                            flexGrow: 1,
                            flexShrink: 1,
                            fullWidth: !0
                        }, m.createElement(v.j, {
                            ratio: v.k.Aspect16x9
                        }, m.createElement(v._3, {
                            "data-test-selector": "carousel-player-placeholder"
                        }))), m.createElement(v.V, {
                            className: u(e),
                            flexGrow: 0,
                            flexShrink: 0,
                            padding: 2
                        }, m.createElement(v.V, {
                            display: v.H.Flex,
                            flexWrap: v.K.NoWrap,
                            textAlign: v._24.Left,
                            alignItems: v.c.Start
                        }, m.createElement(v.V, {
                            margin: {
                                right: 1
                            },
                            flexShrink: 0
                        }, m.createElement(v._3, {
                            width: 40,
                            height: 40
                        })), m.createElement(v.V, {
                            margin: {
                                right: 1
                            },
                            flexGrow: 1
                        }, m.createElement(v._23, null, m.createElement(v._3, {
                            width: 70
                        })), m.createElement(v._23, null, m.createElement(v._3, {
                            width: 70
                        })))), m.createElement(v.V, {
                            margin: {
                                y: 1
                            }
                        }, m.createElement(v._23, null, m.createElement(v._3, {
                            lineCount: 1
                        })), m.createElement(v._23, null, m.createElement(v._3, {
                            lineCount: 4
                        })))))
                    }, t.onVideoTimeChange = function(e) {
                        t.setState({
                            videoOffset: e
                        })
                    }, t.promotionCardClick = function(e) {
                        t.props.onPromotionCardClick(t.props.item, e)
                    }, t
                }
                return o.__extends(t, e), t.prototype.componentWillUpdate = function(e) {
                    e.item !== this.props.item && this.props.onPromotionCardView(e.item)
                }, t.prototype.render = function() {
                    return this.props.item ? this.getContentRender() : this.getPlaceholderRender()
                }, t
            }(m.Component),
            F = n("hdYS"),
            w = (n("0v28"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.getContentRender = function() {
                        var e = u("vertical-carousel-player__details", {
                                "vertical-carousel-player__details--overlay": t.props.darkTheme
                            }),
                            n = Object(l.d)("{login} playing {game}", {
                                login: m.createElement("span", {
                                    onClick: t.promotionCardClick.bind(t, "display_name")
                                }, m.createElement(S.a, {
                                    to: "/" + t.props.item.broadcaster.login,
                                    "data-a-target": "carousel-broadcaster-displayname"
                                }, Object(E.a)(t.props.item.broadcaster.login, t.props.item.broadcaster.displayName))),
                                game: m.createElement("span", {
                                    onClick: t.promotionCardClick.bind(t, "game_name")
                                }, m.createElement(S.a, {
                                    to: "/directory/game/" + t.props.item.content.gameName,
                                    "data-a-target": "carousel-broadcaster-game-name"
                                }, t.props.item.content.gameName))
                            }, "VerticalCarouselPlayer"),
                            i = {
                                type: t.props.item.content.type,
                                id: t.props.item.content.id,
                                onPlayerInit: t.props.onPlayerInit,
                                onPlayerDestroy: t.props.onPlayerDestroy
                            };
                        return m.createElement(v._19, {
                            className: "vertical-carousel-player",
                            padding: {
                                bottom: 1,
                                x: 1
                            },
                            color: v.F.Alt
                        }, m.createElement(v.V, {
                            className: "vertical-carousel-player__video",
                            position: v._4.Relative,
                            overflow: v._0.Hidden
                        }, a(i)), m.createElement(v.V, {
                            className: u(e),
                            display: v.H.Flex,
                            flexWrap: v.K.NoWrap,
                            textAlign: v._24.Left,
                            alignItems: v.c.Center,
                            padding: {
                                y: 1
                            }
                        }, m.createElement(v.V, {
                            margin: {
                                right: 1
                            },
                            flexShrink: 0
                        }, m.createElement("span", {
                            onClick: t.promotionCardClick.bind(t, "thumbnail")
                        }, m.createElement(S.a, {
                            to: "/" + t.props.item.broadcaster.login,
                            "data-a-target": "carousel-avatar-link"
                        }, m.createElement(v.l, {
                            imageSrc: t.props.item.broadcaster.profileImageURL,
                            imageAlt: Object(l.d)("Profile Picture for {login}", {
                                login: t.props.item.broadcaster.login
                            }, "VerticalCarouselPlayer"),
                            size: 40
                        })))), m.createElement(v.V, {
                            margin: {
                                right: 1
                            },
                            flexGrow: 1
                        }, m.createElement(v._23, {
                            "data-a-target": g.a,
                            fontSize: v.L.Size5,
                            color: v.F.Base,
                            bold: !0
                        }, t.props.item.title), m.createElement(v._23, {
                            fontSize: v.L.Size6,
                            color: v.F.Base
                        }, n)), m.createElement(v.V, {
                            flexShrink: 0
                        }, t.props.firstPageLoaded ? m.createElement(F.a, {
                            showLoadingPlaceholder: !0,
                            channelLogin: t.props.item.broadcaster.login,
                            "data-a-target": "carousel-follow-button"
                        }) : m.createElement(v._3, {
                            width: 70,
                            height: 30
                        }))), m.createElement(b, {
                            source: t.props.item.description || ""
                        }))
                    }, t.getPlaceholderRender = function() {
                        return m.createElement(v.V, {
                            padding: {
                                bottom: 1,
                                x: 1
                            }
                        }, m.createElement(v.j, {
                            ratio: v.k.Aspect16x9
                        }, m.createElement(v._3, {
                            "data-test-selector": "carousel-player-placeholder"
                        })), m.createElement(v.V, {
                            display: v.H.Flex,
                            flexWrap: v.K.NoWrap,
                            textAlign: v._24.Left,
                            alignItems: v.c.Center,
                            padding: {
                                y: 1
                            }
                        }, m.createElement(v.V, {
                            margin: {
                                right: 1
                            },
                            flexShrink: 0
                        }, m.createElement(v._3, {
                            width: 40,
                            height: 40
                        })), m.createElement(v.V, {
                            margin: {
                                right: 1
                            },
                            flexGrow: 1
                        }, m.createElement(v._23, null, m.createElement(v._3, {
                            width: 150
                        })), m.createElement(v._23, null, m.createElement(v._3, {
                            width: 100
                        }))), m.createElement(v.V, {
                            flexShrink: 0
                        }, m.createElement(v._3, {
                            width: 70,
                            height: 30
                        }))), m.createElement(v._23, null, m.createElement(v._3, {
                            lineCount: 3
                        })))
                    }, t.promotionCardClick = function(e) {
                        t.props.onPromotionCardClick(t.props.item, e)
                    }, t
                }
                return o.__extends(t, e), t.prototype.render = function() {
                    return this.props.item ? this.getContentRender() : this.getPlaceholderRender()
                }, t
            }(m.Component)),
            x = Object(c.a)(function(e) {
                return {
                    firstPageLoaded: e.session.firstPageLoaded
                }
            })(w),
            P = n("vH/s"),
            T = (n("0OPT"), 6),
            D = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        activeItem: t.props.items[0],
                        startingIndex: 0
                    }, t.displayEventFired = !1, t.renderLeftButton = function() {
                        if (t.props.items.length > T) {
                            var e = t.state.startingIndex > 0;
                            return m.createElement(v.V, {
                                display: v.H.Flex,
                                alignItems: v.c.Stretch
                            }, m.createElement(v.v, {
                                ariaLabel: Object(l.d)("Page Left", "CarouselPlayerComponent"),
                                icon: v._11.AngleLeft,
                                onClick: t.handlePageLeft,
                                "data-test-selector": g.d,
                                disabled: !e
                            }))
                        }
                        return null
                    }, t.renderRightButton = function() {
                        if (t.props.items.length > T) {
                            var e = t.props.items.length > t.state.startingIndex + T;
                            return m.createElement(v.V, {
                                display: v.H.Flex,
                                alignItems: v.c.Stretch
                            }, m.createElement(v.v, {
                                ariaLabel: Object(l.d)("Page Right", "CarouselPlayerComponent"),
                                icon: v._11.AngleRight,
                                onClick: t.handlePageRight,
                                "data-test-selector": g.e,
                                disabled: !e
                            }))
                        }
                        return null
                    }, t.getCardsRender = function() {
                        if (t.state.activeItem) {
                            t.displayEventFired || (! function(e) {
                                var t = {};
                                e.forEach(function(e, n) {
                                    t["carousel_slot_" + n + "_channel"] = e.broadcaster.login, t["carousel_slot_" + n + "_priority"] = e.priorityLevel, t["carousel_slot_" + n + "_game"] = e.content.gameName, t["carousel_slot_" + n + "_ccu"] = e.content.viewersCount, t["carousel_slot_" + n + "_type"] = e.content.subType
                                }), l.m.track(P.SpadeEventType.FrontPageCarouselDisplay, t)
                            }(t.props.items), t.displayEventFired = !0);
                            return t.props.items.slice(t.state.startingIndex, t.state.startingIndex + T).map(function(e, n) {
                                return m.createElement(_, {
                                    key: e.content.id,
                                    item: e,
                                    itemClick: t.selectContent,
                                    itemActive: e.content.id === t.state.activeItem.content.id,
                                    "data-a-target": "carousel-card-" + n
                                })
                            })
                        }
                        for (var e = [], n = 0; n < T; n++) e.push(m.createElement(v.V, {
                            key: n,
                            margin: {
                                x: .5
                            },
                            flexGrow: 1
                        }, m.createElement(v.j, {
                            ratio: v.k.Aspect16x9
                        }, m.createElement(v._3, null)), m.createElement(v.V, {
                            margin: {
                                top: .5
                            }
                        }, m.createElement(v._3, {
                            height: 4
                        }))));
                        return e
                    }, t.getLayoutRender = function() {
                        var e = {
                            darkTheme: t.props.darkTheme || !1,
                            item: t.state.activeItem,
                            onPromotionCardClick: t.trackPromotionClick,
                            onPromotionCardView: t.trackPromotionView,
                            onPlayerInit: t.registerCarousel,
                            onPlayerDestroy: t.unregisterCarousel
                        };
                        switch (t.props.layout) {
                            case g.c.Vertical:
                                return m.createElement(x, o.__assign({}, e));
                            default:
                                return m.createElement(O, o.__assign({}, e))
                        }
                    }, t.registerCarousel = function(e) {
                        t.props.registerCarousel && t.props.registerCarousel(e)
                    }, t.unregisterCarousel = function() {
                        t.props.unregisterCarousel && t.props.unregisterCarousel()
                    }, t.selectContent = function(e) {
                        t.setState({
                            activeItem: e
                        });
                        ! function(e) {
                            l.m.track(P.SpadeEventType.FrontPageCarouselClick, e)
                        }({
                            broadcast_type: e.content.subType,
                            carousel_index: t.props.items.indexOf(e),
                            channel: e.broadcaster.login,
                            game: e.content.gameName,
                            promotion_was_scheduled: e.isScheduled,
                            views: e.content.viewersCount
                        })
                    }, t.trackPromotionClick = function(e, n) {
                        var a = e.broadcaster,
                            i = e.content,
                            r = e.isScheduled;
                        ! function(e, t) {
                            var n = o.__assign({
                                clicked_element: t
                            }, e);
                            l.m.track(P.SpadeEventType.FrontPageCarouselPromotionCardClick, n)
                        }({
                            broadcast_type: i.subType,
                            carousel_index: t.props.items.indexOf(t.state.activeItem),
                            channel: a.displayName,
                            game: i.gameName,
                            promotion_was_scheduled: r,
                            views: i.viewersCount
                        }, n)
                    }, t.trackPromotionView = function(e) {
                        ! function(e) {
                            l.m.track(P.SpadeEventType.FrontPageCarouselPromotionCardView, e)
                        }({
                            broadcast_type: e.content.subType,
                            carousel_index: t.props.items.indexOf(e),
                            channel: e.broadcaster.login,
                            game: e.content.gameName,
                            promotion_was_scheduled: e.isScheduled,
                            views: e.content.viewersCount
                        })
                    }, t.handlePageRight = function() {
                        var e = t.props.items.length - T;
                        e !== t.state.startingIndex && (i("next"), t.setState({
                            startingIndex: e
                        }))
                    }, t.handlePageLeft = function() {
                        t.state.startingIndex > 0 && (i("prev"), t.setState({
                            startingIndex: 0
                        }))
                    }, t
                }
                return o.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.componentWillUpdate = function(e) {
                    !this.state.activeItem && e.items.length > 0 && this.setState({
                        activeItem: e.items[0]
                    })
                }, t.prototype.render = function() {
                    var e;
                    return this.props.darkTheme && (e = Object(f.c)(p.a.Dark)), m.createElement(v.V, {
                        className: u("carousel-player", e)
                    }, this.getLayoutRender(), m.createElement(v._19, {
                        background: v.m.Alt
                    }, m.createElement(v.V, {
                        display: v.H.Flex,
                        flexWrap: v.K.NoWrap,
                        padding: {
                            x: .5,
                            y: 1
                        }
                    }, this.renderLeftButton(), this.getCardsRender(), this.renderRightButton())))
                }, t = o.__decorate([Object(h.c)("CarouselPlayer")], t)
            }(m.Component),
            I = Object(c.a)(null, function(e) {
                return Object(d.bindActionCreators)({
                    registerCarousel: s.e,
                    unregisterCarousel: s.f
                }, e)
            })(D);
        n.d(t, "a", function() {
            return I
        })
    },
    i6UE: function(e, t) {},
    iOr9: function(e, t, n) {
        "use strict";
        var a = n("TToO"),
            i = n("U7vG"),
            r = n("6sO2"),
            o = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        assignmentDetermined: !1,
                        assignment: ""
                    }, t.logger = r.n.logger.withCategory("component-experiment"), t.didUnmount = !1, t
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    return a.__awaiter(this, void 0, void 0, function() {
                        var e;
                        return a.__generator(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return [4, r.n.experiments.getAssignment(this.props.name, this.props.channel ? {
                                        channel: this.props.channel
                                    } : {})];
                                case 1:
                                    return e = t.sent(), this.didUnmount ? [2] : (e && this.props.assignments[e] ? this.logger.debug("Displaying component for experiment", {
                                        name: this.props.name,
                                        assignment: e
                                    }) : this.logger.debug("Displaying fallback component for experiment", {
                                        name: this.props.name,
                                        assignment: e
                                    }), this.setState({
                                        assignment: e,
                                        assignmentDetermined: !0
                                    }), [2])
                            }
                        })
                    })
                }, t.prototype.componentWillUnmount = function() {
                    this.didUnmount = !0
                }, t.prototype.render = function() {
                    if (!this.state.assignmentDetermined) return this.props.loader();
                    if (this.props.assignments[this.state.assignment]) {
                        var e = this.props.assignments[this.state.assignment]();
                        return "string" == typeof e ? (window.location.replace(e), null) : e
                    }
                    return this.props.assignments.fallback()
                }, t
            }(i.Component);
        n.d(t, "a", function() {
            return o
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
                                a.tracked = !0;
                                var t = {};
                                "function" == typeof e.properties ? t = e.properties(a.props) : e.properties && (t = i.__assign({}, e.properties));
                                var n = i.__assign({}, a.props);
                                n.location && n.location.state && (t.medium = n.location.state.medium, t.content = n.location.state.content, t.content_index = n.location.state.content_index);
                                var r = a.referenceTracking,
                                    o = r.content,
                                    l = r.medium,
                                    c = r.content_index;
                                s.n.tracking.trackPageview(i.__assign({
                                    content: o,
                                    medium: l,
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
                        return o.createElement(t, i.__assign({}, this.props))
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
                }(o.Component);
                return Object(l.f)(n)
            }
        }
        var i = n("TToO"),
            r = n("OAwv"),
            o = n("U7vG"),
            l = n("F8kA"),
            s = n("6sO2");
        n.d(t, "a", function() {
            return a
        })
    },
    nFc2: function(e, t) {},
    o8Pq: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = n("bNhH");
        n.d(t, "FeaturedBroadcastersRenderContext", function() {
            return a.b
        }), n.d(t, "placeholderFeaturedBroadcasters", function() {
            return a.c
        }), n.d(t, "FeaturedBroadcasters", function() {
            return a.a
        })
    },
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
    uckt: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "FeaturedStreams"
                },
                variableDefinitions: [{
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
                }, {
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "first"
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
                }],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "featuredStreams"
                        },
                        arguments: [{
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
                        }, {
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "first"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "first"
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
                                    value: "isScheduled"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "isSponsored"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "priorityLevel"
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
                                            value: "broadcaster"
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
                                            }]
                                        }
                                    }, {
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
                                            value: "viewersCount"
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
                                    value: "title"
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
                end: 290
            }
        };
        n.loc.source = {
            body: "query FeaturedStreams($language: String $first: Int) {\nfeaturedStreams(language: $language first: $first) {\ndescription\nimageURL\nisScheduled\nisSponsored\npriorityLevel\nstream {\nbroadcaster {\ndisplayName\nid\nprofileImageURL(width: 150)\nlogin\n}\ngame {\nid\nname\n}\nid\ntype\nviewersCount\n}\ntitle\n}\n}",
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
            return a
        });
        var a;
        ! function(e) {
            e.BitsBuyCard = "bits-buy-card", e.BrowseCommunities = "browse.communities", e.BrowseCreative = "browse.creative", e.BrowseGamesAndCommunities = "browse.games-and-communities", e.ChannelClips = "channel.clips", e.ChannelCollections = "channel.collections", e.ChannelClipsManager = "videoManager.clips.channel", e.ChannelDashboardAchievements = "channel.dashboard.achievements", e.ChannelDashboardChannelAnalytics = "channel.dashboard.channel-analytics", e.ChannelDashboardExtensions = "channel.dashboard.extensions", e.ChannelDashboardModeration = "channel.dashboard.moderation", e.ChannelDashboardStreamSummary = "channel.dashboard.stream-summary", e.ChannelEvents = "channel.events", e.ChannelIndex = "channel.index.index", e.ChatPopout = "chat", e.CheermoteCarousel = "cheermote-carousel", e.DevOnly = "dev", e.DirectoryCommunityByLanguage = "directory.community.language", e.DirectoryCommunityIndex = "directory.community.index", e.DirectoryCommunityDetails = "directory.community.details", e.DirectoryFollowingCommunities = "directory.following.communities", e.DirectoryFollowingGames = "directory.following.games", e.DirectoryFollowingHosts = "directory.following.hosts", e.DirectoryFollowingIndex = "directory.following.index", e.DirectoryFollowingLiveChannels = "directory.following.channels", e.DirectoryFollowingVideos = "directory.following.videos.video-type", e.DirectoryGameClips = "directory.game.clips", e.DirectoryGameDetails = "directory.game.details", e.DirectoryGameIndex = "directory.game.index", e.DirectoryGames = "directory.games", e.DirectoryPopular = "directory.popular", e.DirectoryPopularByLanguage = "directory.popular.language", e.DirectoryGameVideos = "directory.game.videos", e.EmailVerification = "emailVerification", e.EventDetails = "event.details", e.ForYou = "for-you", e.Index = "index", e.MyClipsManager = "videoManager.clips", e.NotificationSettingsPage = "settings.notificationSettings", e.OnboardingIndex = "onboarding.index", e.ReportUserPage = "reportUser.page", e.SettingsConnections = "private/embed-components", e.SettingsChannel = "private/embed-components", e.SettingsNotifications = "settings.notifications", e.SettingsPrime = "settings.prime", e.SettingsProfile = "settings.profile", e.SettingsSecurity = "private/embed-components", e.StoreMerchPage = "store.merch", e.SubsLandingPage = "subs.landing", e.TeamsDashboardRevenue = "teams.dashboard.revenue", e.TeamsDashboardStats = "teams.dashboard.stats", e.TeamsDashboardMembers = "teams.dashboard.members", e.TeamsDashboardFeaturedChannels = "teams.dashboard.featured-channels", e.TeamsDashboardSettings = "teams.dashboard.settings", e.SubsBroadcasterPage = "subs.broadcaster", e.VideoManagerEditPropertiesPage = "videoManager.edit", e.VideoManagerPage = "videoManager.page", e.VideoManagerUploadListPage = "videoManager.upload-list", e.VideoManagerUploadPage = "videoManager.upload", e.VideosPage = "videos", e.VideoWatchPage = "video"
        }(a || (a = {}))
    },
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
    }
});
//# sourceMappingURL=pages.anon-front-a81a8f6ec5543b947b3169cdcd17c0c9.js.map