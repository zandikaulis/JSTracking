webpackJsonp([60], {
    "/3Cb": function(e, t) {
        var r = {
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
                    }
                }],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
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
                                            value: "claimData"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "hasEntitlement"
                                        },
                                        arguments: [],
                                        directives: []
                                    }]
                                }
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "error"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "code"
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
                end: 143
            }
        };
        r.loc.source = {
            body: "mutation claimPrimeOffer($input: ClaimPrimeOfferInput!) {\nclaimPrimeOffer(input: $input) {\nself {\nclaimData\nhasEntitlement\n}\nerror {\ncode\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = r
    },
    "4VmI": function(e, t) {
        var r = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "Prime_Current_User"
                },
                variableDefinitions: [],
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
        r.loc.source = {
            body: "query Prime_Current_User {\ncurrentUser {\nid\nhasPrime\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = r
    },
    "7L7x": function(e, t) {},
    "8OKC": function(e, t) {
        var r = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "updatePrimeOfferStatus"
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
                                value: "UpdatePrimeOfferStatusInput"
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
                            value: "updatePrimeOfferStatus"
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
                                            value: "hasEntitlement"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "claimData"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "status"
                                        },
                                        arguments: [],
                                        directives: []
                                    }]
                                }
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "error"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "code"
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
                end: 171
            }
        };
        r.loc.source = {
            body: "mutation updatePrimeOfferStatus($input: UpdatePrimeOfferStatusInput!) {\nupdatePrimeOfferStatus(input: $input) {\nself {\nhasEntitlement\nclaimData\nstatus\n}\nerror {\ncode\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = r
    },
    "8PKe": function(e, t, r) {
        "use strict";
        var n, i = r("RH2O"),
            a = r("TToO"),
            o = r("OAwv"),
            s = r("GiK3"),
            c = r("6sO2"),
            l = r("+Znq"),
            u = r("7vx8"),
            d = r("S1vB"),
            p = r("oIkB"),
            m = r("ZVME"),
            f = r("CSlQ"),
            h = r("AGQo"),
            v = r("Odds"),
            g = (r("f8UT"), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return s.createElement(v._8, null, s.createElement(v._32, {
                        className: "prime-offer-header",
                        borderBottom: !0,
                        background: v.n.Alt2,
                        padding: {
                            x: 1,
                            y: .5
                        }
                    }, s.createElement(v.Q, {
                        bold: !0,
                        type: v._46.H6
                    }, Object(c.d)("Free with Prime", "PrimeOfferHeader"))), this.getNumOfUnseenOffersDisplay())
                }, t.prototype.getNumOfUnseenOffersDisplay = function() {
                    var e = this.props.numOfUnseenOffers;
                    if (e) return s.createElement(v._32, {
                        className: "prime-offer__new-offer-header",
                        borderBottom: !0,
                        background: v.n.Alt2,
                        padding: {
                            x: 1,
                            y: .5
                        }
                    }, s.createElement(v._8, {
                        fullWidth: !0,
                        display: v.R.Flex,
                        alignItems: v.c.Center
                    }, s.createElement(v._8, {
                        flexGrow: 1
                    }, s.createElement(v.Q, {
                        bold: !0,
                        type: v._46.H6
                    }, Object(c.d)("New Prime Loot", "PrimeOfferHeader"))), s.createElement(v._8, {
                        className: "prime-offer__new-offer-header-count",
                        textAlign: v._42.Center
                    }, s.createElement(v._32, {
                        className: "prime-offer__new-offer-header-count__text",
                        background: v.n.Base,
                        color: v.K.Base,
                        display: v.R.Flex,
                        alignItems: v.c.Center,
                        justifyContent: v._7.Center
                    }, s.createElement(v.Q, null, e.toString())))))
                }, t = a.__decorate([Object(f.d)("PrimeOfferHeader")], t)
            }(s.Component)),
            _ = r("Lpko"),
            b = r("Tr7p"),
            k = r("R0Kh");
        ! function(e) {
            e.OFFERS_FAILED_TO_UPDATE = "OFFERS_FAILED_TO_UPDATE", e.UNKNOWN = "UNKNOWN"
        }(n || (n = {}));
        var O = r("8OKC"),
            y = r("tTbW"),
            E = (r("9856"), r("wjhu")),
            S = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        numOfUnseenOffers: 0,
                        updated: !1,
                        status: void 0,
                        error: void 0
                    }, t.showOffersByDefault = function() {
                        var e = location.search,
                            r = o.parse(e);
                        return r && !!r.expandoffers || t.props.openByDefault
                    }, t.onToggleMenu = function(e) {
                        t.offersLoadedEvent = t.registerOffersLoadedEvent();
                        var r = t.props.offersData;
                        !r || r.loading || r.error || t.props.latencyTracking.reportCustomEvent(t.offersLoadedEvent), t.seeOffers(), e && t.setState({
                            numOfUnseenOffers: 0
                        }), Object(b.c)(!e, {
                            hasPrime: t.hasPrime()
                        })
                    }, t.onHover = function() {
                        Object(b.b)({
                            hasPrime: t.hasPrime()
                        })
                    }, t.hasPrime = function() {
                        return !(!t.props.userData.currentUser || !t.props.userData.currentUser.hasPrime)
                    }, t.registerOffersLoadedEvent = function() {
                        return t.props.latencyTracking.registerCustomEvent({
                            benchmark: 1e3,
                            group: m.a.TwitchPrime,
                            key: m.b.PrimeOfferLoaded,
                            label: m.c.Loaded,
                            start: m.d.Registration
                        })
                    }, t.getUnseenOffers = function(e) {
                        var r = e.offersData;
                        if (r && !r.loading && !r.error) {
                            var n = r.primeOffers || [],
                                i = Object(k.g)();
                            t.setState({
                                numOfUnseenOffers: n.filter(function(e) {
                                    return !(i.includes(e.id) || t.offerIsSeen(e))
                                }).length
                            })
                        }
                    }, t.seeOffers = function() {
                        var e = t.props.offersData;
                        if (e && !e.loading && !e.error) {
                            var r = (e.primeOffers || []).map(function(e) {
                                return "" + e.id
                            });
                            t.updateOfferStatus(), Object(k.k)(r)
                        }
                    }, t.updateOfferStatus = function() {
                        return a.__awaiter(t, void 0, void 0, function() {
                            var e, t, r, i, o, s, c, l;
                            return a.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        if (e = this.props.userData, !(t = e.currentUser && e.currentUser.id)) return [2];
                                        r = this.props.offersData.primeOffers || [], i = r.map(function(e) {
                                            return {
                                                offerID: e.id,
                                                status: k.a.Seen
                                            }
                                        }), o = Object(p.a)({
                                            userID: t,
                                            statusChanges: i
                                        }), a.label = 1;
                                    case 1:
                                        return a.trys.push([1, 3, , 4]), [4, this.props.updatePrimeOfferStatus(o)];
                                    case 2:
                                        return s = a.sent(), (c = s.updatePrimeOfferStatus && s.updatePrimeOfferStatus.error) && c.code ? (l = n[c.code], this.setState({
                                            updated: !1,
                                            error: l || n.UNKNOWN
                                        }), [2]) : s.updatePrimeOfferStatus && s.updatePrimeOfferStatus.self ? (this.setState({
                                            updated: !0,
                                            error: void 0
                                        }), [3, 4]) : (this.setState({
                                            updated: !1,
                                            error: n.UNKNOWN
                                        }), [2]);
                                    case 3:
                                        return a.sent(), this.setState({
                                            updated: !1,
                                            error: n.UNKNOWN
                                        }), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, t.renderOfferList = function() {
                        var e = t.props.offersData,
                            r = t.showOffersByDefault() || !1,
                            n = e && !e.loading && !e.error;
                        return t.offersLoadedEvent && n && t.props.latencyTracking.reportCustomEvent(t.offersLoadedEvent), n || r ? s.createElement(v._8, {
                            "data-a-target": "offers-list",
                            className: "prime-offers__list"
                        }, s.createElement(g, {
                            numOfUnseenOffers: t.state.numOfUnseenOffers
                        }), s.createElement(_.a, null)) : null
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
                    var r = {
                        align: v._50.Center,
                        direction: v._51.Bottom,
                        label: ""
                    };
                    return this.state.numOfUnseenOffers > 0 ? r.label = Object(c.d)("New Prime Loot", "PrimeOffers") : r.label = Object(c.d)("Prime Loot", "PrimeOffers"), s.createElement(v._8, {
                        className: "prime-offers",
                        position: v._15.Relative
                    }, s.createElement(l.a, {
                        onToggle: this.onToggleMenu,
                        openByDefault: this.showOffersByDefault(),
                        tooltipProps: r
                    }, s.createElement(h.a, {
                        onHover: this.onHover
                    }, s.createElement(v.w, {
                        ariaLabel: Object(c.d)("Prime offers", "PrimeOffers"),
                        overlay: !0,
                        size: v.x.Large,
                        icon: v._23.Crown,
                        "data-a-target": "prime-offers-icon",
                        "data-target": "prime-offers-icon"
                    })), s.createElement(v.q, {
                        direction: v.r.BottomRight,
                        size: v.s.Large,
                        offsetX: "9px"
                    }, this.renderOfferList())), this.renderUnseenOffersDisplay())
                }, t.prototype.offerIsSeen = function(e) {
                    return e.self && e.self.status === k.a.Seen
                }, t.prototype.renderUnseenOffersDisplay = function() {
                    var e = this.state.numOfUnseenOffers;
                    if (e && !this.state.error) return s.createElement(v._8, {
                        className: "prime-offers__pill",
                        position: v._15.Absolute
                    }, s.createElement(v.e, {
                        type: v.j.BounceIn,
                        duration: v.g.Medium,
                        timing: v.i.EaseIn,
                        enabled: e > 0
                    }, s.createElement(v._12, {
                        label: e.toString(),
                        type: v._13.Notification
                    })))
                }, t = a.__decorate([Object(u.a)(y, {
                    name: "offersData",
                    skip: function(e) {
                        return !e.firstPageLoaded
                    },
                    options: function() {
                        return {
                            variables: {
                                dateOverride: Object(k.e)()
                            }
                        }
                    }
                }), Object(u.a)(E, {
                    name: "userData"
                }), Object(u.a)(O, {
                    name: "updatePrimeOfferStatus"
                }), Object(f.d)("PrimeOffers", {
                    autoReportInteractive: !0
                })], t)
            }(s.Component);
        var N = Object(i.b)(function(e) {
                return {
                    firstPageLoaded: !!e.session.firstPageLoaded
                }
            })(S),
            C = r("lfvs"),
            D = r("Hs3O"),
            P = (r("ukY1"), r("F1v6")),
            x = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = this.props.data.currentUser && this.props.data.currentUser.hasPrime,
                        t = this.props.data.requestInfo && this.props.data.requestInfo.countryCode;
                    if (!Object(k.l)(e, t)) return null;
                    if (this.props.data.loading) return null;
                    var r = Object(D.d)(D.a, ""),
                        n = Object(c.d)("Twitch Prime", "BlueBar"),
                        i = s.createElement("span", null, Object(c.d)("Free loot every month, plus exclusives and surprises, ad-free viewing, and loads more.", "BlueBar")),
                        a = Object(D.d)(D.a, ""),
                        o = Object(c.d)("Start Your Free Trial", "BlueBar");
                    if (!this.props.data.loading && !this.props.data.error) {
                        var l = this.props.data;
                        l && l.primePromotions && l.primePromotions.forEach(function(e) {
                            switch (e.id) {
                                case "twitch.prime.bluebar.left1":
                                    r = e.externalURL, n = e.text;
                                    break;
                                case "twitch.prime.bluebar.center1":
                                    i = s.createElement(C, {
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
                                    a = e.externalURL, o = e.text
                            }
                        })
                    }
                    return s.createElement(v._32, {
                        color: v.K.Base,
                        className: "blue-bar",
                        position: v._15.Relative,
                        fullWidth: !0,
                        zIndex: v._59.Above
                    }, s.createElement(v._8, {
                        className: "blue-bar__bar",
                        display: v.R.Flex,
                        alignItems: v.c.Center,
                        justifyContent: v._7.Between,
                        flexWrap: v.U.NoWrap,
                        margin: "auto",
                        padding: {
                            x: 2,
                            y: .5
                        }
                    }, s.createElement(v._8, {
                        display: v.R.InlineFlex,
                        alignItems: v.c.Center,
                        padding: {
                            right: .5
                        }
                    }, s.createElement(v._8, {
                        className: "blue-bar__logo",
                        display: v.R.InlineFlex,
                        margin: {
                            right: .5
                        },
                        flexShrink: 0
                    }, s.createElement(v._22, {
                        asset: v._23.Crown,
                        width: 20,
                        height: 13
                    })), s.createElement(v.Q, {
                        bold: !0,
                        type: v._46.Span,
                        noWrap: !0,
                        fontSize: v.V.Size6
                    }, s.createElement(v._2, {
                        padding: {
                            x: 1
                        }
                    }, s.createElement("a", {
                        className: "blue-bar__link",
                        href: r,
                        target: "_blank",
                        rel: "noopener noreferrer"
                    }, n))), s.createElement(v.Q, {
                        className: "blue-bar__headline",
                        type: v._46.Span,
                        fontSize: v.V.Size6
                    }, i)), s.createElement(v._8, {
                        display: v.R.InlineFlex,
                        flexShrink: 0
                    }, s.createElement(v.Q, {
                        bold: !0,
                        type: v._46.Span,
                        noWrap: !0,
                        fontSize: v.V.Size6,
                        color: v.K.Base
                    }, s.createElement("a", {
                        className: "blue-bar__link",
                        href: a,
                        target: "_blank",
                        rel: "noopener noreferrer"
                    }, o)))))
                }, t = a.__decorate([Object(u.a)(P, {
                    options: function() {
                        return {
                            variables: {
                                stringIds: ["twitch.prime.bluebar.left1", "twitch.prime.bluebar.center1", "twitch.prime.bluebar.right1"],
                                dateOverride: Object(k.e)()
                            }
                        }
                    }
                }), Object(f.d)("BlueBarComponent")], t)
            }(s.Component),
            T = r("dnng");
        r.d(t, "c", function() {
            return N
        }), r.d(t, "a", function() {
            return x
        }), r.d(t, "b", function() {
            return T.a
        }), r.d(t, "d", function() {
            return k.e
        }), r.d(t, !1, function() {
            return k.c
        })
    },
    9856: function(e, t) {},
    "9Fb+": function(e, t, r) {
        "use strict";
        var n = r("TToO"),
            i = r("KSGD"),
            a = r("GiK3"),
            o = r("6sO2");

        function s(e, t) {
            return function(r) {
                return function(s) {
                    function c() {
                        var e = null !== s && s.apply(this, arguments) || this;
                        return e.state = {
                            hadImpression: !1,
                            didScroll: !1
                        }, e.logger = o.j.withCategory("with-impression-listener"), e.setRef = function(t) {
                            return e.element = t
                        }, e.registerImpressionCallback = function(t) {
                            e.reportImpression = t
                        }, e
                    }
                    return n.__extends(c, s), c.prototype.componentDidMount = function() {
                        this.scrollContext = this.context;
                        var r = this.scrollContext.registerReceiver;
                        r ? t && void 0 !== t.percentage && void 0 !== t.pixels ? this.logger.warn("<" + e + " /> should only be initialized with percentage or pixel thresholds, not both") : this.unregister = r(this) : this.logger.warn("<" + e + " /> initialized missing a <ScrollableArea /> provider")
                    }, c.prototype.componentWillUnmount = function() {
                        this.unregister && this.unregister()
                    }, c.prototype.render = function() {
                        var e = {
                            impressionListener: {
                                hadImpression: this.state.hadImpression,
                                didScroll: this.state.didScroll,
                                registerImpressionCallback: this.registerImpressionCallback
                            }
                        };
                        return a.createElement("div", {
                            ref: this.setRef
                        }, a.createElement(r, n.__assign({}, this.props, e)))
                    }, c.prototype.checkVisible = function(e) {
                        return n.__awaiter(this, void 0, void 0, function() {
                            var t, r;
                            return n.__generator(this, function(n) {
                                return this.state.hadImpression || (t = this.isVisible(e)) && (r = this.isScrolled(), this.setState({
                                    hadImpression: t,
                                    didScroll: r
                                }), this.reportImpression && this.reportImpression(r)), [2]
                            })
                        })
                    }, c.prototype.isVisible = function(e) {
                        if (!this.element) return !1;
                        var r = this.element.getBoundingClientRect();
                        if (r.left < e.right && r.right > e.left && r.top < e.bottom && r.bottom > e.top) {
                            if (!t || 0 === t.percentage || 0 === t.pixels) return !0;
                            var n = t.percentage,
                                i = t.pixels,
                                a = r.bottom - r.top,
                                o = e.bottom - e.top,
                                s = Math.min(e.bottom - r.top, a, o);
                            if (i) {
                                if (a >= i) return s >= i;
                                n = 100
                            }
                            return !n || 100 * (s / a) >= n
                        }
                        return !1
                    }, c.prototype.isScrolled = function() {
                        if (!this.scrollContext) return !1;
                        var e = this.scrollContext.getScrollContent();
                        return !(!e || 0 === e.scrollTop)
                    }, c.contextTypes = {
                        registerReceiver: i.func,
                        getScrollContent: i.func
                    }, c
                }(a.Component)
            }
        }
        r.d(t, "a", function() {
            return s
        })
    },
    AGQo: function(e, t, r) {
        "use strict";
        var n, i = r("TToO"),
            a = r("GiK3");
        ! function(e) {
            e.PrimeTrackingButtonWrapper = "test_selector_prime_tracking_button_wrapper"
        }(n || (n = {}));
        var o = 200,
            s = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.hoverTimer = 0, t.onMouseEnter = function(e) {
                        t.clearTimeout(), t.hoverTimer = setTimeout(function() {
                            t.props.onHover && t.props.onHover(e)
                        }, o)
                    }, t.onMouseLeave = function() {
                        t.clearTimeout()
                    }, t.onClick = function(e) {
                        t.props.onClick && t.props.onClick(e), t.clearTimeout()
                    }, t.clearTimeout = function() {
                        t.hoverTimer && (clearTimeout(t.hoverTimer), t.hoverTimer = 0)
                    }, t
                }
                return i.__extends(t, e), t.prototype.componentWillUnmount = function() {
                    this.clearTimeout()
                }, t.prototype.render = function() {
                    return a.createElement("div", {
                        "data-test-selector": n.PrimeTrackingButtonWrapper,
                        onMouseEnter: this.onMouseEnter,
                        onMouseLeave: this.onMouseLeave,
                        onClick: this.onClick
                    }, this.props.children)
                }, t
            }(a.Component);
        r.d(t, !1, function() {
            return n
        }), r.d(t, "a", function() {
            return s
        })
    },
    "DgR+": function(e, t) {},
    F1v6: function(e, t) {
        var r = {
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
                    }
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
                            }]
                        }
                    }, {
                        kind: "Field",
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
                                    value: "text"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "externalURL"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "isExternalLink"
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
                end: 231
            }
        };
        r.loc.source = {
            body: "query Prime_BlueBar_CurrentUser($stringIds: [ID!] $dateOverride: Time) {\ncurrentUser {\nid\nhasPrime\n}\nprimePromotions (ids: $stringIds dateOverride: $dateOverride) {\nid\ntext\nexternalURL\nisExternalLink\n}\nrequestInfo {\ncountryCode\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = r
    },
    Hs3O: function(e, t, r) {
        "use strict";
        r.d(t, "b", function() {
            return i
        }), r.d(t, "a", function() {
            return a
        }), r.d(t, "c", function() {
            return o
        }), t.d = function(e, t) {
            var r = n.b.get(s, "https://twitch.amazon.com/prime"),
                i = "";
            try {
                i = btoa(t)
            } catch (e) {
                c.error(e, "Could not decode location pathname substring for redirect")
            }
            return i ? r + "?ref_=" + e + "&redirectRoute=" + i : r + "?ref_=" + e
        };
        var n = r("6sO2"),
            i = "sm_tw_tup_ntp_t_all",
            a = "sm_tw_thp_blue_t_all",
            o = "sm_w_tup_ntp_t_c",
            s = "prime_landing_page_base_url",
            c = n.j.withCategory("PrimeUtilsLogger")
    },
    LXDe: function(e, t, r) {
        "use strict";
        var n;
        r.d(t, "a", function() {
                return n
            }),
            function(e) {
                e.Game = "Game", e.InGameLoot = "InGameLoot", e.All = "All"
            }(n || (n = {}))
    },
    Lpko: function(e, t, r) {
        "use strict";
        var n = r("RH2O"),
            i = r("TToO"),
            a = r("GiK3"),
            o = r("6sO2"),
            s = r("zCIC"),
            c = r("7vx8"),
            l = r("CSlQ"),
            u = r("Odds"),
            d = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = Object(o.d)("You'll get characters, vehicles, skins, and boosts for games like {hearthstone} and {smite}, plus surprises like a rotating selection of indie games.", {
                        hearthstone: a.createElement(u.Q, {
                            italic: !0,
                            type: u._46.Span
                        }, Object(o.d)("Hearthstone", "PrimeEmpty")),
                        smite: a.createElement(u.Q, {
                            italic: !0,
                            type: u._46.Span
                        }, Object(o.d)("Smite", "PrimeEmpty"))
                    }, "PrimeEmpty");
                    return a.createElement(u._8, {
                        className: "prime-empty",
                        margin: 2
                    }, a.createElement(u._8, {
                        textAlign: u._42.Center,
                        margin: 2
                    }, a.createElement("img", {
                        className: "prime-empty__image",
                        src: "https://m.media-amazon.com/images/G/01/sm/landing/Trunk_w_Star_transparent._V530838660_.png",
                        alt: Object(o.d)("Prime Treasure Chest", "PrimeEmpty")
                    })), a.createElement(u.Q, {
                        type: u._46.P,
                        bold: !0
                    }, Object(o.d)("Free in-game loot every month, plus surprises", "PrimeEmpty")), a.createElement("div", null, e))
                }, t = i.__decorate([Object(l.d)("PrimeEmpty")], t)
            }(a.Component),
            p = r("lfvs"),
            m = r("oIkB"),
            f = r("9Fb+"),
            h = r("AGQo"),
            v = r("Tr7p"),
            g = r("R0Kh"),
            _ = (r("w/8h"), r("sq7i")),
            b = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onClick = function(e) {
                        Object(v.d)({
                            offerID: t.props.offerID,
                            externalURL: t.props.externalURL,
                            hasPrime: !0,
                            index: t.props.index
                        }, t.props.offerType), t.props.claimCallback && t.props.offerType !== g.d.EXTERNAL_OFFER && t.props.claimCallback(e)
                    }, t.onHover = function() {
                        Object(v.e)({
                            offerID: t.props.offerID,
                            externalURL: t.props.externalURL,
                            hasPrime: !0,
                            index: t.props.index
                        }, t.props.offerType)
                    }, t
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = this.props.orientation || g.c.Default,
                        t = g.h(e),
                        r = g.f("prime-claim-button", e);
                    return a.createElement(u._8, {
                        fullWidth: !0,
                        className: r,
                        display: t ? u.R.Block : u.R.InlineBlock
                    }, this.getClaimButton())
                }, t.prototype.getClaimButton = function() {
                    var e = this.props,
                        t = this.getButtonText(),
                        r = a.createElement(h.a, {
                            onHover: this.onHover
                        }, a.createElement(u.v, {
                            fullWidth: !0,
                            state: this.props.claiming ? u.A.Loading : u.A.Default,
                            disabled: this.props.claiming,
                            onClick: this.onClick,
                            "data-a-target": "prime-claim-button"
                        }, t));
                    return e.offerType === g.d.EXTERNAL_OFFER ? a.createElement(h.a, {
                        onHover: this.onHover
                    }, a.createElement(u.v, {
                        fullWidth: !0,
                        linkTo: e.externalURL,
                        targetBlank: !0,
                        onClick: this.onClick
                    }, t)) : a.createElement(u._8, {
                        position: u._15.Relative
                    }, r)
                }, t.prototype.getButtonText = function() {
                    var e = Object(o.d)("Learn More", "PrimeClaimButton");
                    if (this.props.externalURL) return e;
                    switch (this.props.offerType) {
                        case g.d.CLAIM_CODE:
                            return Object(o.d)("Get Code", "PrimeClaimButton");
                        case g.d.EXTERNAL_OFFER:
                            return e;
                        case g.d.DIRECT_ENTITLEMENT:
                        default:
                            return Object(o.d)("Claim Offer", "PrimeClaimButton")
                    }
                }, t = i.__decorate([Object(c.a)(_), Object(l.d)("PrimeClaimButton")], t)
            }(a.Component),
            k = (r("zAvr"), function(e) {
                function t(t) {
                    var r = e.call(this, t) || this;
                    return r.toggleShowDescription = function() {
                        var e = !r.state.showDescription;
                        Object(v.g)(e, {
                            offerID: r.props.offerID,
                            externalURL: r.props.externalURL,
                            hasPrime: r.props.hasPrime,
                            index: r.props.index
                        }), r.setState({
                            showDescription: e
                        })
                    }, r.onHover = function() {
                        r.state.showDescription ? Object(v.f)({
                            offerID: r.props.offerID,
                            externalURL: r.props.externalURL,
                            hasPrime: r.props.hasPrime,
                            index: r.props.index
                        }) : Object(v.h)({
                            offerID: r.props.offerID,
                            externalURL: r.props.externalURL,
                            hasPrime: r.props.hasPrime,
                            index: r.props.index
                        })
                    }, r.state = {
                        showDescription: !1
                    }, r
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = this.props.orientation || g.c.Default,
                        t = Object(g.f)("prime-claim-description", e);
                    return a.createElement(u._8, {
                        fullWidth: !0,
                        className: t,
                        margin: {
                            top: 1
                        }
                    }, a.createElement(h.a, {
                        onHover: this.onHover
                    }, a.createElement(u.v, {
                        "data-a-target": "prime-claim-description-button",
                        fullWidth: !0,
                        type: u.B.Hollow,
                        onClick: this.toggleShowDescription
                    }, this.getDescriptionButtonText())), this.getDescriptionBlock(e))
                }, t.prototype.getDescriptionButtonText = function() {
                    return this.state.showDescription ? Object(o.d)("Close Info", "PrimeClaimDescription") : Object(o.d)("More Info", "PrimeClaimDescription")
                }, t.prototype.getDescriptionBlock = function(e) {
                    var t = null,
                        r = Object(g.h)(e);
                    return this.state.showDescription && (t = a.createElement(u._32, {
                        className: "prime-claim-description__body",
                        background: r ? u.n.Alt2 : u.n.Base,
                        border: !0,
                        position: r ? u._15.Relative : u._15.Absolute
                    }, a.createElement(u._8, {
                        "data-a-target": "prime-claim-description-body",
                        margin: {
                            bottom: 2
                        },
                        padding: 1
                    }, a.createElement(p, {
                        source: this.props.description || ""
                    })))), t
                }, t = i.__decorate([Object(l.d)("PrimeClaimDescription")], t)
            }(a.Component)),
            O = r("Hs3O"),
            y = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onClick = function() {
                        Object(v.l)({
                            offerID: t.props.offerID,
                            externalURL: t.getLink(),
                            hasPrime: !1,
                            index: t.props.index
                        })
                    }, t.onHover = function() {
                        Object(v.m)({
                            offerID: t.props.offerID,
                            externalURL: t.getLink(),
                            hasPrime: !1,
                            index: t.props.index
                        })
                    }, t
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return a.createElement(u._8, {
                        className: "prime-upsell-button",
                        margin: {
                            top: 2,
                            bottom: 1
                        }
                    }, a.createElement(h.a, {
                        onHover: this.onHover
                    }, a.createElement(u.v, {
                        fullWidth: !0,
                        linkTo: this.getLink(),
                        targetBlank: !0,
                        onClick: this.onClick
                    }, Object(o.d)("Start Your Free Trial", "PrimeUpsellButton"))))
                }, t.prototype.getLink = function() {
                    if (this.props.externalURL) return this.props.externalURL;
                    var e = this.props.externalReftag || O.c;
                    return Object(O.d)(e, window.location.pathname.substring(1))
                }, t = i.__decorate([Object(l.d)("PrimeUpsellButton")], t)
            }(a.Component),
            E = r("4VmI"),
            S = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = this.props.orientation || g.c.Default,
                        t = Object(g.f)("prime-claim", e);
                    return a.createElement(u._8, {
                        className: t,
                        margin: {
                            bottom: 1
                        }
                    }, this.getCallToAction(), this.getClaimDescriptionSection())
                }, t.prototype.getCallToAction = function() {
                    var e = this.props.data;
                    return Object(g.j)(e) ? a.createElement(b, {
                        offerType: this.props.offerType,
                        offerID: this.props.offerID,
                        claimCallback: this.props.claimCallback,
                        claiming: this.props.claiming,
                        orientation: this.props.orientation,
                        externalURL: this.props.externalURL,
                        index: this.props.index
                    }) : a.createElement(y, {
                        externalReftag: this.props.externalReftag,
                        externalURL: this.props.externalURL,
                        offerID: this.props.offerID,
                        index: this.props.index
                    })
                }, t.prototype.getClaimDescriptionSection = function() {
                    if (this.props.offerType === g.d.EXTERNAL_OFFER) return null;
                    var e = this.props.data;
                    return a.createElement(k, {
                        description: this.props.offerDescription,
                        offerID: this.props.offerID,
                        externalURL: this.props.externalURL,
                        index: this.props.index,
                        orientation: this.props.orientation,
                        hasPrime: Object(g.j)(e)
                    })
                }, t = i.__decorate([Object(c.a)(E), Object(l.d)("PrimeInstructions")], t)
            }(a.Component),
            N = r("dnng"),
            C = (r("nFc2"), function(e) {
                function t(t) {
                    var r = e.call(this, t) || this;
                    return r.setRef = function(e) {
                        r.setState({
                            clipboardInput: e
                        })
                    }, r.copy = function() {
                        var e;
                        try {
                            r.state.clipboardInput && r.state.clipboardInput.select(), e = document.execCommand("copy")
                        } catch (t) {
                            e = !1
                        }
                        return r.setState({
                            copied: e
                        }), e
                    }, r.state = {
                        copied: !1,
                        clipboardInput: null
                    }, r
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = this.state.copied ? Object(o.d)("copied", "CopyButton") : Object(o.d)("copy", "CopyButton");
                    return a.createElement(u._8, {
                        className: "copy-button copy-btn",
                        display: u.R.Flex,
                        "data-test-target": "copy-button"
                    }, a.createElement(u._2, {
                        className: "copy-button__btn"
                    }, a.createElement(u.v, {
                        onClick: this.copy,
                        type: this.state.copied ? u.B.Success : u.B.Default
                    }, e)), a.createElement("input", {
                        className: "copy-button__copy-input",
                        ref: this.setRef,
                        value: this.props.clipboardText,
                        readOnly: !0
                    }))
                }, t = i.__decorate([Object(l.d)("CopyButton")], t)
            }(a.Component)),
            D = function(e) {
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
                    return this.state && this.state.value ? a.createElement(u._8, {
                        className: "copyable-item",
                        display: u.R.Flex,
                        flexGrow: 1
                    }, a.createElement(u._8, {
                        flexGrow: 1
                    }, a.createElement(u._4, {
                        type: u._5.Text,
                        onChange: this.onChange,
                        value: this.state.value,
                        disabled: this.props.disabled,
                        readOnly: this.props.readOnly
                    })), a.createElement(u._8, null, a.createElement(C, {
                        clipboardText: this.state.value
                    }))) : null
                }, t = i.__decorate([Object(l.d)("CopyableItem")], t)
            }(a.Component),
            P = (r("yqdF"), function(e) {
                function t(t) {
                    var r = e.call(this, t) || this;
                    return r.getClaimInstructions = function() {
                        return a.createElement(u._55, null, a.createElement(p, {
                            source: r.props.claimInstructions || "",
                            escapeHtml: !0,
                            renderers: {
                                Link: function(e) {
                                    return a.createElement("a", {
                                        href: e.href,
                                        target: "_blank",
                                        rel: "nofollow noopener noreferrer"
                                    }, e.children)
                                }
                            }
                        }))
                    }, r.renderVerticalLayout = function() {
                        return a.createElement(u._32, {
                            className: "prime-claim-instructions prime-claim-instructions--vertical",
                            background: u.n.Alt2,
                            border: !0,
                            padding: 1,
                            fontSize: u.V.Size6
                        }, r.getClaimInstructions())
                    }, r.renderHorizontalLayout = function() {
                        return a.createElement(u._32, {
                            fullWidth: !0,
                            className: "prime-claim-instructions prime-claim-instructions--horizontal",
                            margin: {
                                top: 1
                            }
                        }, a.createElement(u.v, {
                            fullWidth: !0,
                            type: u.B.Text,
                            onClick: r.toggleShowDescription
                        }, r.getDescriptionButtonText()), r.state.showDescription && a.createElement(u._32, {
                            className: "prime-claim-instructions__body",
                            border: !0,
                            position: u._15.Absolute,
                            padding: 1,
                            background: u.n.Alt,
                            overflow: u._11.Scroll
                        }, r.getClaimInstructions()))
                    }, r.toggleShowDescription = function() {
                        r.setState({
                            showDescription: !r.state.showDescription
                        })
                    }, r.getDescriptionButtonText = function() {
                        return r.state.showDescription ? Object(o.d)("Close Info", "PrimeClaimInstruction") : Object(o.d)("Click here for Claim Instructions", "PrimeClaimInsctuction")
                    }, r.state = {
                        showDescription: !1
                    }, r
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = this.props.orientation || g.c.Default;
                    return Object(g.h)(e) ? this.renderVerticalLayout() : this.renderHorizontalLayout()
                }, t = i.__decorate([Object(l.d)("PrimeClaimInstructions", {
                    autoReportInteractive: !0
                })], t)
            }(a.Component)),
            x = (r("S5wX"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.getPrimeClaimInstructions = function() {
                        if (t.props.claimInstructions) return a.createElement(P, {
                            claimInstructions: t.props.claimInstructions || "",
                            orientation: t.props.orientation
                        })
                    }, t
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = this.props.orientation || g.c.Default,
                        t = Object(g.f)("prime-redeem", e);
                    return a.createElement(u._8, {
                        className: t
                    }, this.getCodeOrConfirmation(e), this.getPrimeClaimInstructions())
                }, t.prototype.getCodeOrConfirmation = function(e) {
                    var t = Object(g.h)(e);
                    if (this.props.code && this.props.deliveryMethod === g.d.CLAIM_CODE) return a.createElement(u._8, null, a.createElement(D, {
                        initialText: this.props.code,
                        readOnly: !0,
                        textCenter: !0
                    }));
                    var r = t ? 1 : 0;
                    return a.createElement(u._32, {
                        border: !t,
                        display: u.R.Flex,
                        justifyContent: u._7.Center,
                        margin: {
                            bottom: r
                        },
                        padding: {
                            y: r
                        },
                        className: "prime-redeem__confirmation"
                    }, a.createElement(u.Q, {
                        type: t ? u._46.H4 : u._46.H6,
                        align: u._56.Middle,
                        color: u.K.Overlay
                    }, a.createElement(u._8, {
                        display: u.R.InlineFlex,
                        flexGrow: 1,
                        flexWrap: u.U.NoWrap,
                        alignItems: u.c.Center,
                        "data-test-target": "prime-redeem-check",
                        "data-a-target": "prime-redeem-check",
                        padding: {
                            left: r
                        }
                    }, a.createElement(u._8, {
                        margin: {
                            right: 1
                        },
                        display: u.R.InlineFlex,
                        flexGrow: 1,
                        flexWrap: u.U.NoWrap,
                        padding: {
                            y: .5
                        },
                        alignItems: u.c.Center
                    }, a.createElement(u._22, {
                        asset: u._23.Check,
                        width: 20,
                        height: 20
                    })), Object(o.d)("Added To Your Twitch Account", "PrimeRedeem"))))
                }, t = i.__decorate([Object(l.d)("PrimeRedeem")], t)
            }(a.Component)),
            T = r("/3Cb"),
            I = (r("v+rJ"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        claimed: !1,
                        claiming: !1,
                        error: void 0,
                        claimData: void 0,
                        status: void 0
                    }, t.renderVerticalLayout = function(e) {
                        var r = t.props.isLast || !1,
                            n = e.content || {},
                            i = n.game || {},
                            o = n.categories || [];
                        return a.createElement(u._32, {
                            "data-a-target": "prime-offer",
                            className: "prime-offer prime-offer--vertical",
                            alignItems: u.c.Center,
                            display: u.R.Block,
                            borderBottom: !r,
                            textAlign: u._42.Left,
                            position: u._15.Relative,
                            padding: {
                                x: 2,
                                y: 1
                            }
                        }, a.createElement(u._8, {
                            "data-a-target": e.id,
                            className: "prime-offer__title",
                            padding: {
                                y: .5
                            },
                            alignItems: u.c.Start
                        }, a.createElement(p, {
                            className: "prime-offer__title__markdown",
                            containerTagName: "h4",
                            source: e.title || ""
                        })), a.createElement("img", {
                            src: e.imageURL
                        }), a.createElement(u._32, {
                            margin: {
                                bottom: 2
                            }
                        }, a.createElement(u._8, {
                            className: "prime-offer__description",
                            padding: {
                                top: .5
                            }
                        }, a.createElement(u.Q, {
                            type: u._46.P
                        }, i.name, " ", o[0])), a.createElement(u._8, {
                            className: "prime-offer__publisher"
                        }, a.createElement(u.Q, {
                            type: u._46.P,
                            color: u.K.Alt2,
                            fontSize: u.V.Size7
                        }, n.publisher))), t.renderRedeemUpsellOrClaimSection(e))
                    }, t.renderHorizontalLayout = function(e) {
                        var r = e.content || {},
                            n = r.game || {},
                            i = r.categories || [];
                        return a.createElement(u._32, {
                            "data-a-target": "prime-offer",
                            className: "prime-offer prime-offer--horizontal",
                            alignItems: u.c.Center,
                            display: u.R.InlineBlock,
                            textAlign: u._42.Left,
                            position: u._15.Relative,
                            padding: {
                                right: 1,
                                y: .5
                            }
                        }, a.createElement(u._32, {
                            className: "prime-offer__content"
                        }, a.createElement(u._32, {
                            className: "prime-offer__content__text",
                            background: u.n.Base
                        }, a.createElement(u._8, {
                            className: "prime-offer__publisher"
                        }, a.createElement(u.Q, {
                            type: u._46.P,
                            color: u.K.Alt2,
                            fontSize: u.V.Size7
                        }, r.publisher)), a.createElement(u._8, {
                            className: "prime-offer__title",
                            alignItems: u.c.Start
                        }, a.createElement(p, {
                            className: "prime-offer__title__markdown",
                            containerTagName: "h4",
                            source: e.title || ""
                        })), a.createElement(u._8, {
                            className: "prime-offer__description"
                        }, a.createElement(u.Q, {
                            type: u._46.P,
                            color: u.K.Alt2
                        }, n.name, " ", i[0]))), a.createElement("img", {
                            src: e.imageURL
                        })), t.renderRedeemUpsellOrClaimSection(e))
                    }, t.renderRedeemUpsellOrClaimSection = function(e) {
                        var r = e.content || {},
                            n = e.self || {
                                claimData: ""
                            },
                            i = t.props.data || {};
                        if (t.state.error) {
                            var o = t.getErrorType();
                            return a.createElement(N.a, {
                                fontSize: u.V.Size6,
                                testTarget: "prime-offer-error",
                                errorType: o
                            })
                        }
                        if ((t.isCurrentOfferClaimed(e) || t.state.claimed) && Object(g.j)(i)) {
                            var s = t.state.claimData || n.claimData;
                            return a.createElement(x, {
                                claimInstructions: e.claimInstructions,
                                code: s,
                                deliveryMethod: e.deliveryMethod,
                                orientation: t.props.orientation
                            })
                        }
                        return a.createElement(S, {
                            offerID: e.id,
                            offerDescription: e.description,
                            offerType: e.deliveryMethod,
                            externalReftag: t.props.externalReftag,
                            externalURL: r.externalURL,
                            claimCallback: t.claimOffer,
                            claiming: t.state.claiming,
                            index: t.props.index,
                            orientation: t.props.orientation
                        })
                    }, t.getErrorType = function() {
                        return t.state.error || g.b.UNKNOWN_ERROR
                    }, t.claimOffer = function(e) {
                        e.nativeEvent.stopImmediatePropagation(), t.setState({
                            claiming: !0
                        });
                        var r = t.props.data;
                        if (!r.loading && !r.error && r.currentUser && r.currentUser.id) {
                            var n = t.props.offer,
                                i = Object(m.a)({
                                    offerID: n.id
                                });
                            t.props.claimPrimeOffer(i).then(function(e) {
                                var r = (e.data || {}).claimPrimeOffer || {},
                                    i = r.self || {},
                                    a = r.error || {};
                                if (i && i.hasEntitlement && n && t.setState({
                                        claimData: i.claimData,
                                        claiming: !1,
                                        claimed: !0,
                                        error: void 0
                                    }), a && a.code) {
                                    var o = g.b[a.code];
                                    t.setState({
                                        claiming: !1,
                                        claimed: !1,
                                        error: o || g.b.UNKNOWN_ERROR
                                    })
                                }
                            }).catch(function() {
                                t.setState({
                                    claiming: !1,
                                    claimed: !1,
                                    error: g.b.UNKNOWN_ERROR
                                })
                            })
                        }
                    }, t.trackImpression = function() {
                        var e = t.props.offer.content && t.props.offer.content.externalURL,
                            r = t.props.data.currentUser && t.props.data.currentUser.hasPrime || !1;
                        Object(v.k)({
                            offerID: t.props.offer.id,
                            externalURL: e || "",
                            index: t.props.index,
                            hasPrime: r
                        })
                    }, t
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive(), this.props.impressionListener.registerImpressionCallback(this.trackImpression)
                }, t.prototype.render = function() {
                    var e = this.props.offer;
                    if (e) {
                        var t = this.props.orientation || g.c.Default;
                        return g.h(t) ? this.renderVerticalLayout(e) : this.renderHorizontalLayout(e)
                    }
                    return null
                }, t.prototype.isCurrentOfferClaimed = function(e) {
                    return (e.self || {
                        hasEntitlement: !1
                    }).hasEntitlement
                }, t = i.__decorate([Object(c.a)(E, {
                    name: "data"
                }), Object(c.a)(T, {
                    name: "claimPrimeOffer"
                }), Object(l.d)("PrimeOffer")], t)
            }(a.Component)),
            L = Object(f.a)("PrimeOffer", {
                pixels: 100
            })(I),
            R = (r("WC9X"), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = this.props.orientation || g.c.Default,
                        t = Object(g.h)(e);
                    return a.createElement(u._32, {
                        className: "prime-offer-placeholder",
                        alignItems: u.c.Center,
                        borderBottom: t,
                        padding: {
                            x: 2,
                            y: 1
                        },
                        display: t ? u.R.Block : u.R.InlineBlock,
                        fullWidth: !0
                    }, a.createElement(u._8, {
                        className: "prime-offer-placeholder__title",
                        padding: {
                            y: .5
                        }
                    }, a.createElement(u._14, {
                        height: 20
                    })), a.createElement(u._14, {
                        height: 160
                    }), a.createElement(u._8, {
                        className: "prime-offer-placeholder__description",
                        padding: {
                            y: .5
                        }
                    }, a.createElement(u._14, {
                        height: 20,
                        width: 160
                    })), a.createElement(u._8, {
                        className: "prime-offer-placeholder__publisher"
                    }, a.createElement(u._14, {
                        height: 20,
                        width: 80
                    })), a.createElement(u._8, {
                        className: "prime-offer-placeholder__claim",
                        margin: {
                            top: 2,
                            bottom: 1
                        }
                    }, a.createElement(u._14, {
                        height: 40
                    })))
                }, t = i.__decorate([Object(l.d)("PrimeOfferPlaceholder")], t)
            }(a.Component)),
            U = (r("7L7x"), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return a.createElement(u._32, {
                        "data-test-target": "prime-offers-upsell",
                        "data-a-target": "prime-offers-upsell",
                        className: "prime-offers-upsell",
                        alignItems: u.c.Center,
                        padding: {
                            x: 2,
                            y: 1
                        },
                        borderBottom: !0
                    }, a.createElement(u.Q, {
                        type: u._46.H4
                    }, Object(o.d)("Claim With Twitch Prime", "PrimeUpsell")), a.createElement(u._8, {
                        className: "prime-upsell__logo-container",
                        fullWidth: !0,
                        margin: {
                            y: 2
                        },
                        textAlign: u._42.Center
                    }, a.createElement(u._22, {
                        asset: u._23.LogoTwitchPrime,
                        width: 330,
                        height: 150,
                        type: u._24.Brand
                    })), a.createElement(u.Q, {
                        type: u._46.P
                    }, Object(o.d)("Get free game loot like this every month plus surprises, ad-free viewing, and loads more with Twitch Prime.", "PrimeUpsell")), a.createElement(y, null))
                }, t = i.__decorate([Object(l.d)("PrimeUpsell")], t)
            }(a.Component)),
            F = r("LXDe"),
            j = r("eY4D"),
            w = (r("DgR+"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.getOfferListOrientation = function() {
                        return t.props.listDirection || g.c.Default
                    }, t.shouldShowPlaceholders = function() {
                        if (!t.props.offersData) return !0;
                        var e = t.props.offersData,
                            r = e.primeOffers,
                            n = void 0 === r || null === r;
                        return e.loading || !e.error && n
                    }, t.renderOfferPlaceholders = function() {
                        for (var e = [], r = 0; r < 3; ++r) {
                            var n = a.createElement(R, {
                                key: r,
                                orientation: t.getOfferListOrientation()
                            });
                            e.push(n)
                        }
                        return e
                    }, t
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    var e = this.getOfferListOrientation(),
                        t = e.toLowerCase(),
                        r = Object(g.f)("prime-offer-list", e),
                        n = "prime-offer-list__content prime-offer-list__content--" + t,
                        i = this.props.listDirection === g.c.Horizontal,
                        o = this.props.listDirection === g.c.Vertical;
                    return a.createElement(s.b, {
                        className: r,
                        suppressScrollX: o,
                        suppressScrollY: i
                    }, a.createElement(u._8, {
                        className: n,
                        alignItems: u.c.Center,
                        padding: {
                            top: 1,
                            bottom: 2,
                            x: 1
                        }
                    }, this.renderUpsell(), this.renderOfferExperience()))
                }, t.prototype.renderUpsell = function() {
                    var e = this.props.userData;
                    if (!Object(g.i)(e) && !Object(g.j)(e) && !this.props.hideUpsell) return a.createElement(U, null)
                }, t.prototype.renderOfferExperience = function() {
                    var e = this,
                        t = this.props.offersData;
                    if (this.shouldShowPlaceholders()) return this.renderOfferPlaceholders();
                    if (!t.error && t.primeOffers && t.primeOffers.length) {
                        var r = this.getSortedOffers(),
                            n = r[r.length - 1];
                        return r.map(function(t, r) {
                            return a.createElement(L, {
                                externalReftag: e.props.externalReftag,
                                key: t.id,
                                offer: t,
                                isLast: n.id === t.id,
                                index: r,
                                orientation: e.getOfferListOrientation()
                            })
                        })
                    }
                    return a.createElement(d, null)
                }, t.prototype.getFreeGamesWithPrimeOfferIds = function() {
                    return o.b.get("prime_free_game_offerids", [])
                }, t.prototype.getSortedOffers = function() {
                    var e = this.getUserId();
                    if (!this.props.offersData || !this.props.offersData.primeOffers) return [];
                    var t = this.props.offersData.primeOffers;
                    if (e) {
                        var r = t.filter(function(e) {
                                return e.self && e.self.hasEntitlement
                            }).sort(g.m),
                            n = this.filterOffersByOfferType(r),
                            i = t.filter(function(e) {
                                return !e.self || !e.self.hasEntitlement
                            }).sort(g.m);
                        return this.filterOffersByOfferType(i).concat(n)
                    }
                    return this.filterOffersByOfferType(t).slice().sort(g.m)
                }, t.prototype.filterOffersByOfferType = function(e) {
                    var t = this.getFreeGamesWithPrimeOfferIds();
                    return this.props.offerFilterType === F.a.Game ? e.filter(function(e) {
                        return t.includes(e.id)
                    }).sort(g.m) : this.props.offerFilterType === F.a.InGameLoot ? e.filter(function(e) {
                        return !t.includes(e.id)
                    }).sort(g.m) : e
                }, t.prototype.getUserId = function() {
                    var e = this.props.userData;
                    return e && !e.loading && !e.error && e.currentUser && e.currentUser.id ? e.currentUser.id : ""
                }, t = i.__decorate([Object(c.a)(j, {
                    name: "offersData",
                    options: function() {
                        return {
                            variables: {
                                dateOverride: Object(g.e)()
                            }
                        }
                    },
                    skip: function(e) {
                        return !e.firstPageLoaded && !e.ignoreFirstPageLoad
                    }
                }), Object(c.a)(E, {
                    name: "userData",
                    skip: function(e) {
                        return !e.firstPageLoaded && !e.ignoreFirstPageLoad
                    }
                }), Object(l.d)("PrimeOfferList", {
                    autoReportInteractive: !0
                })], t)
            }(a.Component));
        var A = Object(n.b)(function(e) {
            return {
                firstPageLoaded: e.session.firstPageLoaded
            }
        })(w);
        r.d(t, "a", function() {
            return A
        })
    },
    R0Kh: function(e, t, r) {
        "use strict";
        r.d(t, "d", function() {
            return c
        }), r.d(t, "c", function() {
            return n
        }), r.d(t, "b", function() {
            return u
        }), r.d(t, "a", function() {
            return l
        }), r.d(t, "h", function() {
            return d
        }), r.d(t, "f", function() {
            return p
        }), r.d(t, "g", function() {
            return m
        }), r.d(t, "k", function() {
            return f
        }), r.d(t, "m", function() {
            return h
        }), r.d(t, "l", function() {
            return g
        }), r.d(t, "e", function() {
            return _
        }), r.d(t, "j", function() {
            return b
        }), r.d(t, "i", function() {
            return k
        });
        var n, i = r("HW6M"),
            a = (r.n(i), r("OAwv")),
            o = (r.n(a), r("6sO2")),
            s = r("S1vB"),
            c = {
                DIRECT_ENTITLEMENT: "DIRECT_ENTITLEMENT",
                CLAIM_CODE: "CLAIM_CODE",
                EXTERNAL_OFFER: "EXTERNAL_OFFER"
            };
        ! function(e) {
            e.Vertical = "Vertical", e.Horizontal = "Horizontal", e.Default = "Vertical"
        }(n || (n = {}));
        var l, u = {
            UNKNOWN_ERROR: "UNKNOWN_ERROR",
            OFFER_ALREADY_CLAIMED: "OFFER_ALREADY_CLAIMED",
            UNABLE_TO_SPEND: "UNABLE_TO_SPEND",
            TOO_MANY_RECENT_SPENDS: "TOO_MANY_RECENT_SPENDS"
        };
        ! function(e) {
            e.Seen = "SEEN", e.Unseen = "UNSEEN", e.Claimed = "CLAIMED"
        }(l || (l = {}));
        var d = function(e) {
                return e === n.Vertical
            },
            p = function(e, t) {
                var r = t === n.Horizontal ? "horizontal" : "vertical";
                return i(e, e + "--" + r)
            },
            m = function() {
                return v("seenOffers")
            },
            f = function(e) {
                o.l.set("seenOffers", e)
            },
            h = function(e, t) {
                return (e && (e.priority || 0 === e.priority) ? e.priority : 99999) - (t && (t.priority || 0 === t.priority) ? t.priority : 99999)
            },
            v = function(e) {
                return o.l.get(e, [])
            },
            g = function(e, t) {
                return void 0 !== e && void 0 !== t && (!e && Object(s.a)(t))
            },
            _ = function() {
                var e = location.search,
                    t = a.parse(e);
                return t && t.dateOverride || void 0
            },
            b = function(e) {
                return e && !e.loading && !e.error && null !== e.currentUser && e.currentUser.hasPrime
            },
            k = function(e) {
                return e && e.loading
            }
    },
    S1vB: function(e, t, r) {
        "use strict";
        t.a = function(e) {
            var t = n.b.get("prime_blocked_regions", []);
            if (!e) return !1;
            return !t.includes(e.toUpperCase())
        };
        var n = r("6sO2")
    },
    S5wX: function(e, t) {},
    Tr7p: function(e, t, r) {
        "use strict";
        r.d(t, "a", function() {
            return o
        }), t.b = function(e) {
            s.n.track(c.SpadeEventType.CrownInteraction, {
                has_prime: e.hasPrime,
                client_time: Date.now(),
                action: n.Hover,
                user_agent: navigator.userAgent
            })
        }, t.c = function(e, t) {
            s.n.track(c.SpadeEventType.CrownInteraction, {
                has_prime: t.hasPrime,
                client_time: Date.now(),
                action: e ? n.Open : n.Close,
                user_agent: navigator.userAgent
            })
        }, t.l = function(e) {
            d(e, i.Click, a.StartYourFreeTrial)
        }, t.m = function(e) {
            d(e, i.Hover, a.StartYourFreeTrial)
        }, t.k = function(e) {
            d(e, i.Impression, a.Offer)
        }, t.g = function(e, t) {
            d(t, i.Click, e ? a.MoreInfo : a.CloseInfo)
        }, t.d = function(e, t) {
            u(e, i.Click, t)
        }, t.h = function(e) {
            d(e, i.Hover, a.MoreInfo)
        }, t.f = function(e) {
            d(e, i.Hover, a.CloseInfo)
        }, t.e = function(e, t) {
            u(e, i.Hover, t)
        }, t.i = function(e) {
            s.n.track(c.SpadeEventType.PrimeLootPagePageview, {
                client_time: Date.now(),
                reftag: e.reftag,
                user_agent: navigator.userAgent
            })
        }, t.j = function(e) {
            s.n.track(c.SpadeEventType.PrimeLootPageTryPrimeClick, {
                client_time: Date.now(),
                button_position: e.buttonPosition,
                user_agent: navigator.userAgent
            })
        };
        var n, i, a, o, s = r("6sO2"),
            c = r("vH/s"),
            l = r("R0Kh");

        function u(e, t, r) {
            var n;
            switch (r) {
                case l.d.CLAIM_CODE:
                    n = a.GetCode;
                    break;
                case l.d.EXTERNAL_OFFER:
                    n = a.LearnMore;
                    break;
                case l.d.DIRECT_ENTITLEMENT:
                    n = a.ClaimOffer
            }
            n && d(e, t, n)
        }

        function d(e, t, r) {
            s.n.track(c.SpadeEventType.PrimeOfferInteraction, {
                client_time: Date.now(),
                offer_id: e.offerID,
                external_url: e.externalURL,
                index: e.index,
                element: r,
                action: t,
                user_agent: navigator.userAgent,
                has_prime: e.hasPrime
            })
        }! function(e) {
            e.Open = "click_open", e.Close = "click_close", e.Hover = "hover"
        }(n || (n = {})),
        function(e) {
            e.Hover = "hover", e.Click = "click", e.Impression = "impression"
        }(i || (i = {})),
        function(e) {
            e.StartYourFreeTrial = "start_your_free_trial", e.MoreInfo = "more_info", e.CloseInfo = "close_info", e.ClaimOffer = "claim_offer", e.LearnMore = "learn_more", e.GetCode = "get_code", e.Offer = "offer"
        }(a || (a = {})),
        function(e) {
            e.TopNav = "top-nav", e.CenterBanner = "center-banner", e.CenterFooter = "center-footer"
        }(o || (o = {}))
    },
    WC9X: function(e, t) {},
    dnng: function(e, t, r) {
        "use strict";
        var n = r("TToO"),
            i = r("GiK3"),
            a = r("F8kA"),
            o = r("6sO2"),
            s = r("CSlQ"),
            c = r("R0Kh"),
            l = r("Odds"),
            u = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.getErrorMessage = function() {
                        switch (t.props.errorType || c.b.UNKNOWN_ERROR) {
                            case c.b.OFFER_ALREADY_CLAIMED:
                                return Object(o.d)("Oh no! Unable to claim. Another linked Twitch account may have already claimed this content. Click here to {learnMoreLink}.", {
                                    learnMoreLink: i.createElement(a.a, {
                                        to: "https://help.twitch.tv/customer/portal/articles/2572060-twitch-prime-guide#MultipleAccounts",
                                        target: "_blank",
                                        className: "prime-error__link",
                                        "data-a-target": "prime-error_link"
                                    }, "learn more")
                                }, "PrimeError");
                            case c.b.UNABLE_TO_SPEND:
                            case c.b.TOO_MANY_RECENT_SPENDS:
                            default:
                                return Object(o.d)("Something has gone wrong. Please try again later.", "PrimeError")
                        }
                    }, t
                }
                return n.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = this.getErrorMessage();
                    return i.createElement(l._32, {
                        background: l.n.Alt2,
                        display: l.R.Flex,
                        justifyContent: l._7.Center,
                        padding: {
                            y: 1
                        },
                        margin: {
                            bottom: 1
                        },
                        textAlign: l._42.Center,
                        "data-test-selector": this.props.testTarget,
                        "data-a-target": this.props.testTarget
                    }, i.createElement(l.Q, {
                        type: l._46.H4,
                        align: l._56.Middle
                    }, i.createElement(l._32, {
                        padding: 1,
                        display: l.R.InlineFlex,
                        flexGrow: 1,
                        flexWrap: l.U.NoWrap,
                        alignItems: l.c.Center,
                        textAlign: l._42.Left,
                        fontSize: this.props.fontSize ? this.props.fontSize : l.V.Size5,
                        "data-a-target": "prime-error-glitch"
                    }, i.createElement(l._8, {
                        margin: {
                            right: 1
                        },
                        display: l.R.InlineFlex,
                        flexGrow: 1,
                        flexWrap: l.U.NoWrap,
                        alignItems: l.c.Center
                    }, i.createElement(l._22, {
                        asset: l._23.DeadGlitch,
                        type: l._24.Alert,
                        width: 20,
                        height: 20
                    })), i.createElement(l.Q, {
                        type: l._46.P
                    }, e))))
                }, t = n.__decorate([Object(s.d)("PrimeError")], t)
            }(i.Component);
        r.d(t, "a", function() {
            return u
        })
    },
    eY4D: function(e, t) {
        var r = {
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
                    }
                }],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
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
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "imageURL"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "claimInstructions"
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
                                    value: "deliveryMethod"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "priority"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
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
                                            }]
                                        }
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "externalURL"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "publisher"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "categories"
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
                                            value: "hasEntitlement"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "claimData"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "status"
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
                end: 283
            }
        };
        r.loc.source = {
            body: "query Prime_PrimeOfferList_PrimeOffers($dateOverride: Time) {\nprimeOffers(dateOverride: $dateOverride) {\nid\ntitle\nimageURL\nclaimInstructions\ndescription\ndeliveryMethod\npriority\ncontent {\ngame {\nid\nname\n}\nexternalURL\npublisher\ncategories\n}\nself {\nhasEntitlement\nclaimData\nstatus\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = r
    },
    f8UT: function(e, t) {},
    nFc2: function(e, t) {},
    sq7i: function(e, t) {
        var r = {
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
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 41
            }
        };
        r.loc.source = {
            body: "query Current_User {\ncurrentUser {\nid\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = r
    },
    tTbW: function(e, t) {
        var r = {
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
                    }
                }],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
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
                                            value: "status"
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
                end: 126
            }
        };
        r.loc.source = {
            body: "query Prime_PrimeOffers_PrimeOfferIds($dateOverride: Time) {\nprimeOffers(dateOverride: $dateOverride) {\nid\nself {\nstatus\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = r
    },
    tkxl: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = r("TToO"),
            i = r("GiK3"),
            a = r("6sO2"),
            o = 3;
        var s = r("CwIZ"),
            c = r("8PKe"),
            l = r("Odds");
        r.d(t, "BUTTON_SELECTOR", function() {
            return u
        }), r.d(t, "SubscribeWithPrimeButton", function() {
            return d
        });
        var u = "subscribe-button__subscribe-with-prime",
            d = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        isSubscribing: !1,
                        primeSubFailure: !1
                    }, t.handleStartPrimeTrialClick = function() {
                        t.props.reportSubMenuAction({
                            action: s.a.ClickSignupForPrime
                        })
                    }, t.handleSubWithPrimeClick = function() {
                        t.setState({
                            isSubscribing: !0
                        }, function() {
                            return n.__awaiter(t, void 0, void 0, function() {
                                var e, t;
                                return n.__generator(this, function(r) {
                                    switch (r.label) {
                                        case 0:
                                            return r.trys.push([0, 3, 4, 5]), this.props.authToken && this.props.userHasPrime && this.props.subLogin ? [4, function(e, t) {
                                                return n.__awaiter(this, void 0, void 0, function() {
                                                    var r, i, s, c, l, u;
                                                    return n.__generator(this, function(n) {
                                                        switch (n.label) {
                                                            case 0:
                                                                r = "https://api.twitch.tv/api/premium/credit/spend_token?channel_id=" + e, i = 1, n.label = 1;
                                                            case 1:
                                                                if (!(i <= o)) return [3, 8];
                                                                n.label = 2;
                                                            case 2:
                                                                return n.trys.push([2, 6, , 7]), [4, fetch(r, {
                                                                    method: "POST",
                                                                    headers: {
                                                                        "Client-ID": a.o.config.legacyClientID,
                                                                        Accept: "application/json; charset=UTF-8",
                                                                        "content-type": "application/json; charset=UTF-8",
                                                                        Authorization: "OAuth " + t
                                                                    }
                                                                })];
                                                            case 3:
                                                                return [4, (s = n.sent()).body];
                                                            case 4:
                                                                return c = n.sent(), [4, s.status];
                                                            case 5:
                                                                return l = n.sent(), [2, {
                                                                    body: {
                                                                        body: c
                                                                    },
                                                                    code: l
                                                                }];
                                                            case 6:
                                                                if (u = n.sent(), i === o) throw u;
                                                                return [3, 7];
                                                            case 7:
                                                                return ++i, [3, 1];
                                                            case 8:
                                                                return [2]
                                                        }
                                                    })
                                                })
                                            }(this.props.subLogin, this.props.authToken)] : [3, 2];
                                        case 1:
                                            (e = r.sent()) && 200 === e.code ? this.props.onSubscribedWithPrime() : this.setState({
                                                isSubscribing: !1,
                                                primeSubFailure: !0
                                            }), r.label = 2;
                                        case 2:
                                            return [3, 5];
                                        case 3:
                                            return t = r.sent(), a.j.error(t, "Failed to subscribe with Prime", {
                                                subLogin: this.props.subLogin
                                            }), this.setState({
                                                isSubscribing: !1,
                                                primeSubFailure: !0
                                            }), [3, 5];
                                        case 4:
                                            return this.setState({
                                                isSubscribing: !1
                                            }), [7];
                                        case 5:
                                            return [2]
                                    }
                                })
                            })
                        })
                    }, t
                }
                return n.__extends(t, e), t.prototype.render = function() {
                    var e = this.props.isSubscribedWithPrime && this.props.canPrimeSubscribe;
                    if (!this.props.userHasPrime) {
                        var t = Object(a.d)("Start Your Free Trial", "SubscribeWithPrime");
                        return i.createElement(l.v, n.__assign({
                            ariaLabel: t,
                            "data-test-selector": u,
                            icon: l._23.Crown,
                            linkTo: a.a.tryPrimeURI,
                            onClick: this.handleStartPrimeTrialClick
                        }, Object(l._60)(this.props), {
                            targetBlank: !0
                        }), t)
                    }
                    if (this.props.isSubscribed && !e) {
                        var r = Object(a.d)("Subscribed", "SubscribeWithPrime");
                        return i.createElement(l.v, n.__assign({
                            ariaLabel: r,
                            "data-test-selector": u,
                            disabled: !0,
                            icon: l._23.Crown
                        }, Object(l._60)(this.props)), r)
                    }
                    if (!this.props.canPrimeSubscribe) {
                        var o = Object(a.d)("Not yet!", "SubscribeWithPrime");
                        return i.createElement(l.v, n.__assign({
                            ariaLabel: o,
                            "data-test-selector": u,
                            disabled: !0,
                            icon: l._23.Crown
                        }, Object(l._60)(this.props)), o)
                    }
                    if (this.state.primeSubFailure) return i.createElement(c.b, {
                        fontSize: l.V.Size6,
                        testTarget: "prime-sub-error"
                    });
                    var s = e ? Object(a.d)("Resubscribe Free", "SubscribeWithPrime") : Object(a.d)("Subscribe Free", "SubscribeWithPrime");
                    return i.createElement(l.v, n.__assign({
                        ariaLabel: s,
                        "data-test-selector": u,
                        disabled: this.state.isSubscribing,
                        icon: l._23.Crown,
                        state: this.state.isSubscribing ? l.A.Loading : l.A.Default,
                        onClick: this.handleSubWithPrimeClick
                    }, Object(l._60)(this.props)), s)
                }, t
            }(i.Component)
    },
    ukY1: function(e, t) {},
    "v+rJ": function(e, t) {},
    "w/8h": function(e, t) {},
    wjhu: function(e, t) {
        var r = {
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
                end: 95
            }
        };
        r.loc.source = {
            body: "query Prime_PrimeOffers_CurrentUser {\ncurrentUser {\nid\nhasPrime\n}\nrequestInfo {\ncountryCode\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = r
    },
    yqdF: function(e, t) {},
    zAvr: function(e, t) {}
});
//# sourceMappingURL=features.subscribe-button.components.subscribe-with-prime.component-be8fa85e509563274b765a8028c63b61.js.map