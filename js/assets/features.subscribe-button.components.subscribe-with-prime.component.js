webpackJsonp([61], {
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
            c = r("3zLD"),
            l = r("6sO2"),
            u = r("+Znq"),
            d = r("7vx8"),
            p = r("S1vB"),
            m = r("oIkB"),
            f = r("ZVME"),
            h = r("CSlQ"),
            v = r("AGQo"),
            g = r("Odds"),
            _ = (r("f8UT"), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    return s.createElement(g._8, null, s.createElement(g._35, {
                        className: "prime-offer-header",
                        borderBottom: !0,
                        background: g.n.Alt2,
                        padding: {
                            x: 1,
                            y: .5
                        }
                    }, s.createElement(g.Q, {
                        bold: !0,
                        type: g._49.H6
                    }, Object(l.d)("Free with Prime", "PrimeOfferHeader"))), this.getNumOfUnseenOffersDisplay())
                }, t.prototype.getNumOfUnseenOffersDisplay = function() {
                    var e = this.props.numOfUnseenOffers;
                    if (e) return s.createElement(g._35, {
                        className: "prime-offer__new-offer-header",
                        borderBottom: !0,
                        background: g.n.Alt2,
                        padding: {
                            x: 1,
                            y: .5
                        }
                    }, s.createElement(g._8, {
                        fullWidth: !0,
                        display: g.R.Flex,
                        alignItems: g.c.Center
                    }, s.createElement(g._8, {
                        flexGrow: 1
                    }, s.createElement(g.Q, {
                        bold: !0,
                        type: g._49.H6
                    }, Object(l.d)("New Prime Loot", "PrimeOfferHeader"))), s.createElement(g._8, {
                        className: "prime-offer__new-offer-header-count",
                        textAlign: g._45.Center
                    }, s.createElement(g._35, {
                        className: "prime-offer__new-offer-header-count__text",
                        background: g.n.Base,
                        color: g.K.Base,
                        display: g.R.Flex,
                        alignItems: g.c.Center,
                        justifyContent: g._7.Center
                    }, s.createElement(g.Q, null, e.toString())))))
                }, t
            }(s.Component)),
            b = Object(h.d)("PrimeOfferHeader", {
                autoReportInteractive: !0
            })(_),
            O = r("Lpko"),
            k = r("Tr7p"),
            y = r("Kckk");
        ! function(e) {
            e.OFFERS_FAILED_TO_UPDATE = "OFFERS_FAILED_TO_UPDATE", e.UNKNOWN = "UNKNOWN"
        }(n || (n = {}));
        var E = r("8OKC"),
            S = r("tTbW"),
            N = (r("9856"), r("wjhu")),
            D = function(e) {
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
                        t.seeOffers(), e && t.setState({
                            numOfUnseenOffers: 0
                        }), Object(k.c)(!e, {
                            hasPrime: t.hasPrime(),
                            numberOfOffers: t.getNumberOfOffers()
                        })
                    }, t.getHiddenCrownOfferIds = function() {
                        return l.b.get("prime-crown-hidden-ids", [])
                    }, t.getNumberOfOffers = function() {
                        var e = t.props.offersData,
                            r = e && e.primeOffers;
                        return r && r.length || 0
                    }, t.onHover = function() {
                        Object(k.b)({
                            hasPrime: t.hasPrime()
                        })
                    }, t.hasPrime = function() {
                        return !(!t.props.userData.currentUser || !t.props.userData.currentUser.hasPrime)
                    }, t.registerOffersLoadedEvent = function() {
                        return t.props.latencyTracking.registerCustomEvent({
                            benchmark: 1e3,
                            group: f.a.TwitchPrime,
                            key: f.b.PrimeOfferLoaded,
                            label: f.c.Loaded,
                            start: f.d.Registration
                        })
                    }, t.getUnseenOffers = function(e) {
                        var r = e.offersData;
                        if (r && !r.loading && !r.error) {
                            var n = r.primeOffers || [];
                            t.setState({
                                numOfUnseenOffers: n.filter(t.offerIsUnseen).length
                            })
                        }
                    }, t.offerIsUnseen = function(e) {
                        var r = Object(y.i)();
                        return !(t.getHiddenCrownOfferIds().includes(e.id) || r.includes(e.id) || t.offerIsSeen(e))
                    }, t.seeOffers = function() {
                        var e = t.props.offersData;
                        if (e && !e.loading && !e.error) {
                            var r = (e.primeOffers || []).map(function(e) {
                                return "" + e.id
                            });
                            t.updateOfferStatus(), Object(y.m)(r)
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
                                                status: y.a.Seen
                                            }
                                        }), o = Object(m.a)({
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
                        return s.createElement(g._8, {
                            "data-a-target": "offers-list",
                            className: "prime-offers__list"
                        }, s.createElement(b, {
                            numOfUnseenOffers: t.state.numOfUnseenOffers
                        }), s.createElement(O.a, {
                            placement: y.d.Crown
                        }))
                    }, t.shouldReportInteractive = function() {
                        return (!t.isUserDataLoading || t.isUserDataError) && (!t.isOffersDataLoading || t.isOffersDataError)
                    }, t
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.shouldReportInteractive() && this.props.latencyTracking.reportInteractive(), this.offersLoadedEvent = this.registerOffersLoadedEvent(), this.getUnseenOffers(this.props)
                }, t.prototype.componentDidUpdate = function() {
                    this.shouldReportInteractive() && this.props.latencyTracking.reportInteractive()
                }, t.prototype.componentWillReceiveProps = function(e) {
                    this.getUnseenOffers(e);
                    var t = this.props.offersData,
                        r = e.offersData;
                    if (t && t.loading && r && !r.loading && r.primeOffers) {
                        this.props.latencyTracking.reportCustomEvent(this.offersLoadedEvent);
                        var n = r.primeOffers,
                            i = n && n.length;
                        Object(k.d)({
                            hasPrime: this.hasPrime(),
                            numberOfOffers: i || 0
                        })
                    }
                }, t.prototype.render = function() {
                    var e = this.props.userData && this.props.userData.requestInfo && Object(p.a)(this.props.userData.requestInfo.countryCode),
                        t = this.props.userData && this.props.userData.currentUser && this.props.userData.currentUser.hasPrime;
                    if (!e && !t) return null;
                    var r = {
                        align: g._53.Center,
                        direction: g._54.Bottom,
                        label: ""
                    };
                    return this.state.numOfUnseenOffers > 0 ? r.label = Object(l.d)("New Prime Loot", "PrimeOffers") : r.label = Object(l.d)("Prime Loot", "PrimeOffers"), s.createElement(g._8, {
                        className: "prime-offers",
                        position: g._15.Relative
                    }, s.createElement(u.a, {
                        onToggle: this.onToggleMenu,
                        openByDefault: this.showOffersByDefault(),
                        tooltipProps: r
                    }, s.createElement(v.a, {
                        onHover: this.onHover
                    }, s.createElement(g.w, {
                        ariaLabel: Object(l.d)("Prime offers", "PrimeOffers"),
                        overlay: !0,
                        size: g.x.Large,
                        icon: g._25.Crown,
                        "data-a-target": "prime-offers-icon",
                        "data-target": "prime-offers-icon"
                    })), s.createElement(g.q, {
                        direction: g.r.BottomRight,
                        size: g.s.Large,
                        offsetX: "9px"
                    }, this.renderOfferList())), this.renderUnseenOffersDisplay())
                }, t.prototype.offerIsSeen = function(e) {
                    return e.self && e.self.status === y.a.Seen
                }, t.prototype.renderUnseenOffersDisplay = function() {
                    var e = this.state.numOfUnseenOffers;
                    if (e && !this.state.error) return s.createElement(g._8, {
                        className: "prime-offers__pill",
                        position: g._15.Absolute
                    }, s.createElement(g.e, {
                        type: g.j.BounceIn,
                        duration: g.g.Medium,
                        timing: g.i.EaseIn,
                        enabled: e > 0
                    }, s.createElement(g._12, {
                        label: e.toString(),
                        type: g._13.Notification
                    })))
                }, Object.defineProperty(t.prototype, "isUserDataLoading", {
                    get: function() {
                        var e = this.props.userData;
                        return e && e.loading
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "isUserDataError", {
                    get: function() {
                        var e = this.props.userData;
                        return e && e.error
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "isOffersDataLoading", {
                    get: function() {
                        var e = this.props.offersData;
                        return e && e.loading
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "isOffersDataError", {
                    get: function() {
                        var e = this.props.offersData;
                        return e && e.error
                    },
                    enumerable: !0,
                    configurable: !0
                }), t
            }(s.Component),
            C = Object(c.compose)(Object(d.a)(S, {
                name: "offersData",
                skip: function(e) {
                    return !e.firstPageLoaded && !e.openByDefault
                },
                options: function() {
                    return {
                        variables: {
                            dateOverride: Object(y.f)()
                        }
                    }
                }
            }), Object(d.a)(N, {
                name: "userData"
            }), Object(d.a)(E, {
                name: "updatePrimeOfferStatus"
            }), Object(h.d)("PrimeOffers"))(D);
        var P = Object(i.b)(function(e) {
                return {
                    firstPageLoaded: !!e.session.firstPageLoaded
                }
            })(C),
            I = r("lfvs"),
            T = r("Hs3O"),
            L = (r("ukY1"), r("F1v6")),
            x = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.data.loading && !this.props.data.error || this.props.latencyTracking.reportInteractive()
                }, t.prototype.componentDidUpdate = function() {
                    this.props.data.loading && !this.props.data.error || this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = this.props.data.currentUser && this.props.data.currentUser.hasPrime,
                        t = this.props.data.requestInfo && this.props.data.requestInfo.countryCode;
                    if (!Object(y.n)(e, t)) return null;
                    if (this.props.data.loading) return null;
                    var r = Object(T.d)(T.a, ""),
                        n = Object(l.d)("Twitch Prime", "BlueBar"),
                        i = s.createElement("span", null, Object(l.d)("Free loot every month, plus exclusives and surprises, ad-free viewing, and loads more.", "BlueBar")),
                        a = Object(T.d)(T.a, ""),
                        o = Object(l.d)("Start Your Free Trial", "BlueBar");
                    if (!this.props.data.loading && !this.props.data.error) {
                        var c = this.props.data;
                        c && c.primePromotions && c.primePromotions.forEach(function(e) {
                            switch (e.id) {
                                case "twitch.prime.bluebar.left1":
                                    r = e.externalURL, n = e.text;
                                    break;
                                case "twitch.prime.bluebar.center1":
                                    i = s.createElement(I, {
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
                    return s.createElement(g._35, {
                        color: g.K.Base,
                        className: "blue-bar",
                        "data-a-target": "blue-bar",
                        position: g._15.Relative,
                        fullWidth: !0,
                        zIndex: g._62.Above
                    }, s.createElement(g._8, {
                        className: "blue-bar__bar",
                        display: g.R.Flex,
                        alignItems: g.c.Center,
                        justifyContent: g._7.Between,
                        flexWrap: g.U.NoWrap,
                        margin: "auto",
                        padding: {
                            x: 2,
                            y: .5
                        }
                    }, s.createElement(g._8, {
                        display: g.R.InlineFlex,
                        alignItems: g.c.Center,
                        padding: {
                            right: .5
                        }
                    }, s.createElement(g._8, {
                        className: "blue-bar__logo",
                        display: g.R.InlineFlex,
                        margin: {
                            right: .5
                        },
                        flexShrink: 0
                    }, s.createElement(g._24, {
                        asset: g._25.Crown,
                        width: 20,
                        height: 13
                    })), s.createElement(g.Q, {
                        bold: !0,
                        type: g._49.Span,
                        noWrap: !0,
                        fontSize: g.V.Size6
                    }, s.createElement(g._2, {
                        padding: {
                            x: 1
                        }
                    }, s.createElement("a", {
                        className: "blue-bar__link",
                        "data-a-target": "blue-bar__link",
                        href: r,
                        target: "_blank",
                        rel: "noopener noreferrer"
                    }, n))), s.createElement(g.Q, {
                        className: "blue-bar__headline",
                        type: g._49.Span,
                        fontSize: g.V.Size6
                    }, i)), s.createElement(g._8, {
                        display: g.R.InlineFlex,
                        flexShrink: 0
                    }, s.createElement(g.Q, {
                        bold: !0,
                        type: g._49.Span,
                        noWrap: !0,
                        fontSize: g.V.Size6,
                        color: g.K.Base
                    }, s.createElement("a", {
                        className: "blue-bar__link",
                        href: a,
                        target: "_blank",
                        rel: "noopener noreferrer"
                    }, o)))))
                }, t
            }(s.Component),
            R = Object(c.compose)(Object(d.a)(L, {
                options: function() {
                    return {
                        variables: {
                            stringIds: ["twitch.prime.bluebar.left1", "twitch.prime.bluebar.center1", "twitch.prime.bluebar.right1"],
                            dateOverride: Object(y.f)()
                        }
                    }
                }
            }), Object(h.d)("BlueBarComponent"))(x),
            U = r("dnng");
        r.d(t, "c", function() {
            return P
        }), r.d(t, "a", function() {
            return R
        }), r.d(t, "b", function() {
            return U.a
        }), r.d(t, "d", function() {
            return y.f
        }), r.d(t, !1, function() {
            return y.c
        })
    },
    9856: function(e, t) {},
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
    Kckk: function(e, t, r) {
        "use strict";
        r.d(t, "e", function() {
            return d
        }), r.d(t, "c", function() {
            return n
        }), r.d(t, "d", function() {
            return i
        }), r.d(t, "b", function() {
            return m
        }), r.d(t, "g", function() {
            return f
        }), r.d(t, "a", function() {
            return p
        }), r.d(t, "j", function() {
            return h
        }), r.d(t, "h", function() {
            return v
        }), r.d(t, "i", function() {
            return g
        }), r.d(t, "m", function() {
            return _
        }), r.d(t, "o", function() {
            return b
        }), r.d(t, "n", function() {
            return k
        }), r.d(t, "f", function() {
            return y
        }), r.d(t, "l", function() {
            return E
        }), r.d(t, "k", function() {
            return S
        });
        var n, i, a = r("HW6M"),
            o = (r.n(a), r("OAwv")),
            s = (r.n(o), r("GiK3")),
            c = (r.n(s), r("F8kA")),
            l = r("6sO2"),
            u = r("S1vB"),
            d = {
                DIRECT_ENTITLEMENT: "DIRECT_ENTITLEMENT",
                CLAIM_CODE: "CLAIM_CODE",
                EXTERNAL_OFFER: "EXTERNAL_OFFER"
            };
        ! function(e) {
            e.Vertical = "Vertical", e.Horizontal = "Horizontal", e.Default = "Vertical"
        }(n || (n = {})),
        function(e) {
            e.Crown = "Crown", e.LootPage = "LootPage"
        }(i || (i = {}));
        var p, m = {
                UNKNOWN_ERROR: "UNKNOWN_ERROR",
                OFFER_ALREADY_CLAIMED: "OFFER_ALREADY_CLAIMED",
                UNABLE_TO_SPEND: "UNABLE_TO_SPEND",
                TOO_MANY_RECENT_SPENDS: "TOO_MANY_RECENT_SPENDS"
            },
            f = function(e) {
                switch (e || m.UNKNOWN_ERROR) {
                    case m.OFFER_ALREADY_CLAIMED:
                        return Object(l.d)("Oh no! Unable to claim. Another linked Twitch account may have already claimed this content. Click {learnMoreLink}.", {
                            learnMoreLink: s.createElement(c.a, {
                                to: "https://help.twitch.tv/customer/portal/articles/2572060-twitch-prime-guide#MultipleAccounts",
                                target: "_blank",
                                className: "prime-error__link",
                                "data-a-target": "prime-error_link"
                            }, "here to learn more")
                        }, "PrimeError");
                    case m.UNABLE_TO_SPEND:
                    case m.TOO_MANY_RECENT_SPENDS:
                    default:
                        return Object(l.d)("Something has gone wrong. Please try again later.", "PrimeError")
                }
            };
        ! function(e) {
            e.Seen = "SEEN", e.Unseen = "UNSEEN", e.Claimed = "CLAIMED"
        }(p || (p = {}));
        var h = function(e) {
                return e === n.Vertical
            },
            v = function(e, t) {
                var r = t === n.Horizontal ? "horizontal" : "vertical";
                return a(e, e + "--" + r)
            },
            g = function() {
                return O("seenOffers")
            },
            _ = function(e) {
                l.l.set("seenOffers", e)
            },
            b = function(e, t) {
                return (e && (e.priority || 0 === e.priority) ? e.priority : 99999) - (t && (t.priority || 0 === t.priority) ? t.priority : 99999)
            },
            O = function(e) {
                return l.l.get(e, [])
            },
            k = function(e, t) {
                return void 0 !== e && void 0 !== t && (!e && Object(u.a)(t))
            },
            y = function() {
                var e = location.search,
                    t = o.parse(e);
                return t && t.dateOverride || void 0
            },
            E = function(e) {
                return e && !e.loading && !e.error && null !== e.currentUser && e.currentUser.hasPrime
            },
            S = function(e) {
                return e && e.loading
            }
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
            o = r("3zLD"),
            s = r("6sO2"),
            c = r("zCIC"),
            l = r("7vx8"),
            u = r("CSlQ"),
            d = r("Odds"),
            p = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    var e = Object(s.d)("You'll get characters, vehicles, skins, and boosts for games like {hearthstone} and {smite}, plus surprises like a rotating selection of indie games.", {
                        hearthstone: a.createElement(d.Q, {
                            italic: !0,
                            type: d._49.Span
                        }, Object(s.d)("Hearthstone", "PrimeEmpty")),
                        smite: a.createElement(d.Q, {
                            italic: !0,
                            type: d._49.Span
                        }, Object(s.d)("Smite", "PrimeEmpty"))
                    }, "PrimeEmpty");
                    return a.createElement(d._8, {
                        className: "prime-empty",
                        margin: 2
                    }, a.createElement(d._8, {
                        textAlign: d._45.Center,
                        margin: 2
                    }, a.createElement("img", {
                        className: "prime-empty__image",
                        src: "https://m.media-amazon.com/images/G/01/sm/landing/Trunk_w_Star_transparent._V530838660_.png",
                        alt: Object(s.d)("Prime Treasure Chest", "PrimeEmpty")
                    })), a.createElement(d.Q, {
                        type: d._49.P,
                        bold: !0
                    }, Object(s.d)("Free in-game loot every month, plus surprises", "PrimeEmpty")), a.createElement("div", null, e))
                }, t
            }(a.Component),
            m = Object(u.d)("PrimeEmpty", {
                autoReportInteractive: !0
            })(p),
            f = r("lfvs"),
            h = r("oIkB"),
            v = r("AGQo"),
            g = r("Tr7p"),
            _ = r("Kckk"),
            b = (r("w/8h"), r("sq7i")),
            O = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onClick = function(e) {
                        Object(g.e)({
                            offerID: t.props.offerID,
                            externalURL: t.props.externalURL,
                            hasPrime: !0,
                            index: t.props.index
                        }, t.props.offerType), t.props.claimCallback && t.props.offerType !== _.e.EXTERNAL_OFFER && !t.props.externalURL && t.props.claimCallback(e)
                    }, t.onHover = function() {
                        Object(g.f)({
                            offerID: t.props.offerID,
                            externalURL: t.props.externalURL,
                            hasPrime: !0,
                            index: t.props.index
                        }, t.props.offerType)
                    }, t
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.data.loading && !this.props.data.error || this.props.latencyTracking.reportInteractive()
                }, t.prototype.componentDidUpdate = function() {
                    this.props.data.loading && !this.props.data.error || this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = this.props.orientation || _.c.Default,
                        t = _.j(e),
                        r = _.h("prime-claim-button", e);
                    return a.createElement(d._8, {
                        fullWidth: !0,
                        className: r,
                        display: t ? d.R.Block : d.R.InlineBlock
                    }, this.getClaimButton())
                }, t.prototype.getClaimButton = function() {
                    var e = this.props,
                        t = e.externalURL,
                        r = e.claiming,
                        n = e.offerType,
                        i = this.getButtonText();
                    if (t || n === _.e.EXTERNAL_OFFER) return a.createElement(v.a, {
                        onHover: this.onHover
                    }, a.createElement(d.v, {
                        fullWidth: !0,
                        linkTo: t,
                        targetBlank: !0,
                        onClick: this.onClick
                    }, i));
                    var o = a.createElement(v.a, {
                        onHover: this.onHover
                    }, a.createElement(d.v, {
                        fullWidth: !0,
                        state: r ? d.A.Loading : d.A.Default,
                        disabled: r,
                        linkTo: t,
                        onClick: this.onClick,
                        "data-a-target": "prime-claim-button"
                    }, i));
                    return a.createElement(d._8, {
                        position: d._15.Relative
                    }, o)
                }, t.prototype.getButtonText = function() {
                    var e = Object(s.d)("Learn More", "PrimeClaimButton");
                    if (this.props.externalURL) return e;
                    switch (this.props.offerType) {
                        case _.e.CLAIM_CODE:
                            return Object(s.d)("Get Code", "PrimeClaimButton");
                        case _.e.EXTERNAL_OFFER:
                            return e;
                        case _.e.DIRECT_ENTITLEMENT:
                        default:
                            return Object(s.d)("Claim Offer", "PrimeClaimButton")
                    }
                }, t
            }(a.Component),
            k = Object(o.compose)(Object(l.a)(b), Object(u.d)("PrimeClaimButton"))(O),
            y = (r("zAvr"), function(e) {
                function t(t) {
                    var r = e.call(this, t) || this;
                    return r.toggleShowDescription = function() {
                        var e = !r.state.showDescription;
                        Object(g.h)(e, {
                            offerID: r.props.offerID,
                            externalURL: r.props.externalURL,
                            hasPrime: r.props.hasPrime,
                            index: r.props.index
                        }), r.setState({
                            showDescription: e
                        })
                    }, r.onHover = function() {
                        r.state.showDescription ? Object(g.g)({
                            offerID: r.props.offerID,
                            externalURL: r.props.externalURL,
                            hasPrime: r.props.hasPrime,
                            index: r.props.index
                        }) : Object(g.i)({
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
                    var e = this.props.orientation || _.c.Default,
                        t = Object(_.h)("prime-claim-description", e);
                    return a.createElement(d._8, {
                        fullWidth: !0,
                        className: t,
                        margin: {
                            top: 1
                        }
                    }, a.createElement(v.a, {
                        onHover: this.onHover
                    }, a.createElement(d.v, {
                        "data-a-target": "prime-claim-description-button",
                        fullWidth: !0,
                        type: d.B.Hollow,
                        onClick: this.toggleShowDescription
                    }, this.getDescriptionButtonText())), this.getDescriptionBlock(e))
                }, t.prototype.getDescriptionButtonText = function() {
                    return this.state.showDescription ? Object(s.d)("Close Info", "PrimeClaimDescription") : Object(s.d)("More Info", "PrimeClaimDescription")
                }, t.prototype.getDescriptionBlock = function(e) {
                    var t = null,
                        r = Object(_.j)(e);
                    return this.state.showDescription && (t = a.createElement(d._35, {
                        className: "prime-claim-description__body",
                        background: r ? d.n.Alt2 : d.n.Base,
                        border: !0,
                        position: r ? d._15.Relative : d._15.Absolute
                    }, a.createElement(d._8, {
                        "data-a-target": "prime-claim-description-body",
                        margin: {
                            bottom: 2
                        },
                        padding: 1
                    }, a.createElement(f, {
                        source: this.props.description || ""
                    })))), t
                }, t
            }(a.Component)),
            E = Object(u.d)("PrimeClaimDescription", {
                autoReportInteractive: !0
            })(y),
            S = r("Hs3O"),
            N = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onClick = function() {
                        Object(g.l)({
                            offerID: t.props.offerID,
                            externalURL: t.getLink(),
                            hasPrime: !1,
                            index: t.props.index
                        })
                    }, t.onHover = function() {
                        Object(g.m)({
                            offerID: t.props.offerID,
                            externalURL: t.getLink(),
                            hasPrime: !1,
                            index: t.props.index
                        })
                    }, t
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    return a.createElement(d._8, {
                        className: "prime-upsell-button",
                        margin: {
                            top: 2,
                            bottom: 1
                        }
                    }, a.createElement(v.a, {
                        onHover: this.onHover
                    }, a.createElement(d.v, {
                        fullWidth: !0,
                        linkTo: this.getLink(),
                        targetBlank: !0,
                        onClick: this.onClick
                    }, Object(s.d)("Start Your Free Trial", "PrimeUpsellButton"))))
                }, t.prototype.getLink = function() {
                    if (this.props.externalURL) return this.props.externalURL;
                    var e = this.props.externalReftag || S.c;
                    return Object(S.d)(e, window.location.pathname.substring(1))
                }, t
            }(a.Component),
            D = Object(u.d)("PrimeUpsellButton", {
                autoReportInteractive: !0
            })(N),
            C = r("4VmI"),
            P = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.data.loading && !this.props.data.error || this.props.latencyTracking.reportInteractive()
                }, t.prototype.componentDidUpdate = function() {
                    this.props.data.loading && !this.props.data.error || this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = this.props.orientation || _.c.Default,
                        t = Object(_.h)("prime-claim", e);
                    return a.createElement(d._8, {
                        className: t,
                        margin: {
                            bottom: 1
                        }
                    }, this.getCallToAction(), this.getClaimDescriptionSection())
                }, t.prototype.getCallToAction = function() {
                    var e = this.props.data;
                    return Object(_.l)(e) ? a.createElement(k, {
                        offerType: this.props.offerType,
                        offerID: this.props.offerID,
                        claimCallback: this.props.claimCallback,
                        claiming: this.props.claiming,
                        orientation: this.props.orientation,
                        externalURL: this.props.externalURL,
                        index: this.props.index
                    }) : a.createElement(D, {
                        externalReftag: this.props.externalReftag,
                        externalURL: this.props.externalURL,
                        offerID: this.props.offerID,
                        index: this.props.index
                    })
                }, t.prototype.getClaimDescriptionSection = function() {
                    if (this.props.offerType === _.e.EXTERNAL_OFFER || this.props.externalURL) return null;
                    var e = this.props.data;
                    return a.createElement(E, {
                        description: this.props.offerDescription,
                        offerID: this.props.offerID,
                        externalURL: this.props.externalURL,
                        index: this.props.index,
                        orientation: this.props.orientation,
                        hasPrime: Object(_.l)(e)
                    })
                }, t
            }(a.Component),
            I = Object(o.compose)(Object(l.a)(C), Object(u.d)("PrimeInstructions"))(P),
            T = r("dnng"),
            L = r("2KeS"),
            x = (r("nFc2"), function(e) {
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
                    var e = this.state.copied ? Object(s.d)("copied", "CopyButton") : Object(s.d)("copy", "CopyButton");
                    return a.createElement(d._8, {
                        className: "copy-button copy-btn",
                        display: d.R.Flex,
                        "data-test-target": "copy-button"
                    }, a.createElement(d._2, {
                        className: "copy-button__btn"
                    }, a.createElement(d.v, {
                        onClick: this.copy,
                        type: this.state.copied ? d.B.Success : d.B.Default
                    }, e)), a.createElement("input", {
                        className: "copy-button__copy-input",
                        ref: this.setRef,
                        value: this.props.clipboardText,
                        readOnly: !0
                    }))
                }, t
            }(a.Component)),
            R = Object(L.d)(Object(u.d)("CopyButton"))(x),
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
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.componentWillMount = function() {
                    this.props.initialText && this.setState({
                        value: this.props.initialText,
                        copied: !1
                    })
                }, t.prototype.render = function() {
                    return this.state && this.state.value ? a.createElement(d._8, {
                        className: "copyable-item",
                        display: d.R.Flex,
                        flexGrow: 1
                    }, a.createElement(d._8, {
                        flexGrow: 1
                    }, a.createElement(d._4, {
                        type: d._5.Text,
                        onChange: this.onChange,
                        value: this.state.value,
                        disabled: this.props.disabled,
                        readOnly: this.props.readOnly
                    })), a.createElement(d._8, null, a.createElement(R, {
                        clipboardText: this.state.value
                    }))) : null
                }, t
            }(a.Component),
            j = Object(L.d)(Object(u.d)("CopyableItem"))(U),
            F = (r("yqdF"), function(e) {
                function t(t) {
                    var r = e.call(this, t) || this;
                    return r.getClaimInstructions = function() {
                        return a.createElement(d._58, null, a.createElement(f, {
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
                        return a.createElement(d._35, {
                            className: "prime-claim-instructions prime-claim-instructions--vertical",
                            background: d.n.Alt2,
                            border: !0,
                            padding: 1,
                            fontSize: d.V.Size6
                        }, r.getClaimInstructions())
                    }, r.renderHorizontalLayout = function() {
                        return a.createElement(d._35, {
                            fullWidth: !0,
                            className: "prime-claim-instructions prime-claim-instructions--horizontal",
                            margin: {
                                top: 1
                            }
                        }, a.createElement(d.v, {
                            fullWidth: !0,
                            type: d.B.Text,
                            onClick: r.toggleShowDescription
                        }, r.getDescriptionButtonText()), r.state.showDescription && a.createElement(d._35, {
                            className: "prime-claim-instructions__body",
                            border: !0,
                            position: d._15.Absolute,
                            padding: 1,
                            background: d.n.Alt,
                            overflow: d._11.Scroll
                        }, r.getClaimInstructions()))
                    }, r.toggleShowDescription = function() {
                        r.setState({
                            showDescription: !r.state.showDescription
                        })
                    }, r.getDescriptionButtonText = function() {
                        return r.state.showDescription ? Object(s.d)("Close Info", "PrimeClaimInstruction") : Object(s.d)("Click here for Claim Instructions", "PrimeClaimInsctuction")
                    }, r.state = {
                        showDescription: !1
                    }, r
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    var e = this.props.orientation || _.c.Default;
                    return Object(_.j)(e) ? this.renderVerticalLayout() : this.renderHorizontalLayout()
                }, t
            }(a.Component)),
            w = Object(u.d)("PrimeClaimInstructions", {
                autoReportInteractive: !0
            })(F),
            A = (r("S5wX"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.getPrimeClaimInstructions = function() {
                        if (t.props.claimInstructions) return a.createElement(w, {
                            claimInstructions: t.props.claimInstructions || "",
                            orientation: t.props.orientation
                        })
                    }, t
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    var e = this.props.orientation || _.c.Default,
                        t = Object(_.h)("prime-redeem", e);
                    return a.createElement(d._8, {
                        className: t
                    }, this.getCodeOrConfirmation(e), this.getPrimeClaimInstructions())
                }, t.prototype.getCodeOrConfirmation = function(e) {
                    var t = Object(_.j)(e);
                    if (this.props.code && this.props.deliveryMethod === _.e.CLAIM_CODE) return a.createElement(d._8, null, a.createElement(j, {
                        initialText: this.props.code,
                        readOnly: !0,
                        textCenter: !0
                    }));
                    var r = t ? 1 : 0;
                    return a.createElement(d._35, {
                        display: d.R.Flex,
                        justifyContent: d._7.Center,
                        margin: {
                            bottom: r
                        },
                        padding: {
                            y: r
                        },
                        className: "prime-redeem__confirmation"
                    }, a.createElement(d.Q, {
                        type: t ? d._49.H4 : d._49.H6,
                        align: d._59.Middle,
                        color: d.K.Overlay
                    }, a.createElement(d._8, {
                        display: d.R.InlineFlex,
                        flexGrow: 1,
                        flexWrap: d.U.NoWrap,
                        alignItems: d.c.Center,
                        "data-test-target": "prime-redeem-check",
                        "data-a-target": "prime-redeem-check",
                        padding: {
                            left: r
                        }
                    }, a.createElement(d._8, {
                        margin: {
                            right: 1
                        },
                        display: d.R.InlineFlex,
                        flexGrow: 1,
                        flexWrap: d.U.NoWrap,
                        padding: {
                            y: .5
                        },
                        alignItems: d.c.Center
                    }, a.createElement(d._24, {
                        asset: d._25.Check,
                        width: 20,
                        height: 20
                    })), Object(s.d)("Added To Your Twitch Account", "PrimeRedeem"))))
                }, t
            }(a.Component)),
            B = Object(u.d)("PrimeRedeem", {
                autoReportInteractive: !0
            })(A),
            H = r("/3Cb"),
            M = (r("v+rJ"), "prime-offer__video"),
            W = function(e) {
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
                        return a.createElement(d._35, {
                            "data-a-target": "prime-offer",
                            className: "prime-offer prime-offer--vertical",
                            alignItems: d.c.Center,
                            display: d.R.Block,
                            borderBottom: !r,
                            textAlign: d._45.Left,
                            position: d._15.Relative,
                            padding: {
                                x: 2,
                                y: 1
                            }
                        }, a.createElement(d._8, {
                            "data-a-target": e.id,
                            className: "prime-offer__title",
                            padding: {
                                y: .5
                            },
                            alignItems: d.c.Start
                        }, a.createElement(f, {
                            className: "prime-offer__title__markdown",
                            containerTagName: "h4",
                            source: e.title || ""
                        })), t.renderOfferImageOrVideo(e.imageURL), a.createElement(d._35, {
                            margin: {
                                bottom: 2
                            }
                        }, a.createElement(d._8, {
                            className: "prime-offer__description",
                            padding: {
                                top: .5
                            }
                        }, a.createElement(d.Q, {
                            type: d._49.P
                        }, i.name, " ", o[0])), a.createElement(d._8, {
                            className: "prime-offer__publisher"
                        }, a.createElement(d.Q, {
                            type: d._49.P,
                            color: d.K.Alt2,
                            fontSize: d.V.Size7
                        }, n.publisher))), t.renderRedeemUpsellOrClaimSection(e))
                    }, t.renderHorizontalLayout = function(e) {
                        var r = e.content || {},
                            n = r.game || {},
                            i = r.categories || [];
                        return a.createElement(d._35, {
                            "data-a-target": "prime-offer",
                            className: "prime-offer prime-offer--horizontal",
                            alignItems: d.c.Center,
                            display: d.R.InlineBlock,
                            textAlign: d._45.Left,
                            position: d._15.Relative,
                            padding: {
                                right: 1,
                                y: .5
                            }
                        }, a.createElement(d._35, {
                            className: "prime-offer__content",
                            margin: {
                                bottom: 2
                            }
                        }, a.createElement(d._35, {
                            className: "prime-offer__content__text",
                            background: d.n.Base
                        }, a.createElement(d._8, {
                            className: "prime-offer__publisher"
                        }, a.createElement(d.Q, {
                            type: d._49.P,
                            color: d.K.OverlayAlt,
                            fontSize: d.V.Size7,
                            transform: d._48.Uppercase
                        }, r.publisher)), a.createElement(d._8, {
                            className: "prime-offer__title",
                            alignItems: d.c.Start
                        }, a.createElement(f, {
                            className: "prime-offer__title__markdown",
                            containerTagName: "h4",
                            source: e.title || ""
                        })), a.createElement(d._8, {
                            className: "prime-offer__description"
                        }, a.createElement(d.Q, {
                            type: d._49.P,
                            color: d.K.Alt2
                        }, n.name, " ", i[0]))), t.renderOfferImageOrVideo(e.imageURL)), t.renderRedeemUpsellOrClaimSection(e))
                    }, t.renderOfferImageOrVideo = function(e) {
                        var r = t.getExtensionFromURL(e),
                            n = /iPhone.*Mobile|iPod|iPad/.test(navigator.userAgent);
                        return "mp4" === r ? a.createElement("video", {
                            ref: function(e) {
                                t.offerVideo = e || void 0
                            },
                            preload: "auto",
                            loop: !0,
                            autoPlay: !0,
                            playsInline: !0,
                            muted: !0,
                            controls: n,
                            "data-test-selector": M
                        }, a.createElement("source", {
                            src: e,
                            type: "video/mp4"
                        })) : a.createElement("img", {
                            src: e
                        })
                    }, t.getExtensionFromURL = function(e) {
                        if (!e) return e;
                        var t = e.split(".");
                        return t[t.length - 1]
                    }, t.renderRedeemUpsellOrClaimSection = function(e) {
                        var r = e.content || {},
                            n = e.self || {
                                claimData: ""
                            },
                            i = t.props.data || {};
                        if (t.state.error) {
                            var o = t.getErrorType();
                            return a.createElement(T.a, {
                                fontSize: d.V.Size6,
                                testTarget: "prime-offer-error",
                                errorType: o
                            })
                        }
                        if (!r.externalURL && (t.isCurrentOfferClaimed(e) || t.state.claimed) && Object(_.l)(i)) {
                            var s = t.state.claimData || n.claimData;
                            return a.createElement(B, {
                                claimInstructions: e.claimInstructions,
                                code: s,
                                deliveryMethod: e.deliveryMethod,
                                orientation: t.props.orientation
                            })
                        }
                        return a.createElement(I, {
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
                        return t.state.error || _.b.UNKNOWN_ERROR
                    }, t.claimOffer = function(e) {
                        e.nativeEvent.stopImmediatePropagation(), t.setState({
                            claiming: !0
                        });
                        var r = t.props.data;
                        if (!r.loading && !r.error && r.currentUser && r.currentUser.id) {
                            var n = t.props.offer,
                                i = Object(h.a)({
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
                                    var o = _.b[a.code];
                                    t.setState({
                                        claiming: !1,
                                        claimed: !1,
                                        error: o || _.b.UNKNOWN_ERROR
                                    })
                                }
                            }).catch(function() {
                                t.setState({
                                    claiming: !1,
                                    claimed: !1,
                                    error: _.b.UNKNOWN_ERROR
                                })
                            })
                        }
                    }, t
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.data.loading && !this.props.data.error || this.props.latencyTracking.reportInteractive()
                }, t.prototype.componentDidUpdate = function() {
                    this.props.data.loading && !this.props.data.error || this.props.latencyTracking.reportInteractive(), this.offerVideo && this.offerVideo.play()
                }, t.prototype.render = function() {
                    var e = this.props.offer;
                    if (e) {
                        var t = this.props.orientation || _.c.Default;
                        return _.j(t) ? this.renderVerticalLayout(e) : this.renderHorizontalLayout(e)
                    }
                    return null
                }, t.prototype.isCurrentOfferClaimed = function(e) {
                    return (e.self || {
                        hasEntitlement: !1
                    }).hasEntitlement
                }, t
            }(a.Component),
            V = Object(o.compose)(Object(l.a)(C, {
                name: "data"
            }), Object(l.a)(H, {
                name: "claimPrimeOffer"
            }), Object(u.d)("PrimeOffer"))(W),
            z = (r("WC9X"), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = this.props.orientation || _.c.Default,
                        t = Object(_.j)(e);
                    return a.createElement(d._35, {
                        className: "prime-offer-placeholder",
                        alignItems: d.c.Center,
                        borderBottom: t,
                        padding: {
                            x: 2,
                            y: 1
                        },
                        display: t ? d.R.Block : d.R.InlineBlock,
                        fullWidth: !0
                    }, a.createElement(d._8, {
                        className: "prime-offer-placeholder__title",
                        padding: {
                            y: .5
                        }
                    }, a.createElement(d._14, {
                        height: 20
                    })), a.createElement(d._14, {
                        height: 160
                    }), a.createElement(d._8, {
                        className: "prime-offer-placeholder__description",
                        padding: {
                            y: .5
                        }
                    }, a.createElement(d._14, {
                        height: 20,
                        width: 160
                    })), a.createElement(d._8, {
                        className: "prime-offer-placeholder__publisher"
                    }, a.createElement(d._14, {
                        height: 20,
                        width: 80
                    })), a.createElement(d._8, {
                        className: "prime-offer-placeholder__claim",
                        margin: {
                            top: 2,
                            bottom: 1
                        }
                    }, a.createElement(d._14, {
                        height: 40
                    })))
                }, t
            }(a.Component)),
            G = Object(u.d)("PrimeOfferPlaceholder", {
                autoReportInteractive: !0
            })(z),
            K = (r("7L7x"), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    return a.createElement(d._35, {
                        "data-test-target": "prime-offers-upsell",
                        "data-a-target": "prime-offers-upsell",
                        className: "prime-offers-upsell",
                        alignItems: d.c.Center,
                        padding: {
                            x: 2,
                            y: 1
                        },
                        borderBottom: !0
                    }, a.createElement(d.Q, {
                        type: d._49.H4
                    }, Object(s.d)("Claim With Twitch Prime", "PrimeUpsell")), a.createElement(d._8, {
                        className: "prime-upsell__logo-container",
                        fullWidth: !0,
                        margin: {
                            y: 2
                        },
                        textAlign: d._45.Center
                    }, a.createElement(d._24, {
                        asset: d._25.LogoTwitchPrime,
                        width: 330,
                        height: 150,
                        type: d._26.Brand
                    })), a.createElement(d.Q, {
                        type: d._49.P
                    }, Object(s.d)("Get free game loot like this every month plus surprises, ad-free viewing, and loads more with Twitch Prime.", "PrimeUpsell")), a.createElement(D, null))
                }, t
            }(a.Component)),
            q = Object(u.d)("PrimeUpsell", {
                autoReportInteractive: !0
            })(K),
            Q = r("LXDe"),
            Y = r("eY4D"),
            X = (r("DgR+"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.renderDesktopOffers = function(e) {
                        return a.createElement(d._8, {
                            className: "prime-offer-list__content--desktop"
                        }, t.renderSectionTitle(), a.createElement(d._55, {
                            childWidth: d._56.Large,
                            gutterSize: d._57.Small,
                            center: !0,
                            placeholderItems: 20
                        }, e))
                    }, t.renderSectionTitle = function() {
                        return t.props.sectionTitle && a.createElement(d._8, {
                            padding: {
                                top: 1
                            },
                            className: "prime-offers__title"
                        }, a.createElement(d.Q, {
                            type: d._49.H3,
                            color: d.K.Base,
                            bold: !0
                        }, t.props.sectionTitle))
                    }, t.renderMobileOffers = function(e) {
                        return a.createElement(d._8, {
                            className: "prime-offer-list__content--mobile"
                        }, t.renderSectionTitle(), e)
                    }, t.getOfferListOrientation = function() {
                        return t.props.listDirection || _.c.Default
                    }, t.getHiddenOfferIdsByPlacement = function(e) {
                        switch (e) {
                            case _.d.Crown:
                                return s.b.get("prime-crown-hidden-ids", []);
                            case _.d.LootPage:
                                return s.b.get("prime-loot-page-hidden-ids", []);
                            default:
                                return []
                        }
                    }, t.shouldShowPlaceholders = function() {
                        var e = t.props.offersData;
                        return !e || e.loading
                    }, t.renderOfferPlaceholders = function() {
                        for (var e = [], r = 0; r < 3; ++r) {
                            var n = a.createElement(G, {
                                key: r,
                                orientation: t.getOfferListOrientation()
                            });
                            e.push(n)
                        }
                        return e
                    }, t.shouldReportInteractive = function() {
                        return (!t.isUserDataLoading || t.isUserDataError) && (!t.isOffersDataLoading || t.isOffersDataError)
                    }, t
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.shouldReportInteractive() && this.props.latencyTracking.reportInteractive()
                }, t.prototype.componentDidUpdate = function() {
                    this.shouldReportInteractive() && this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = this.getOfferListOrientation(),
                        t = e.toLowerCase(),
                        r = Object(_.h)("prime-offer-list", e),
                        n = "prime-offer-list__content prime-offer-list__content--" + t,
                        i = this.props.listDirection === _.c.Horizontal,
                        o = this.props.listDirection === _.c.Vertical,
                        s = this.renderOfferExperience();
                    return a.createElement(c.b, {
                        className: r,
                        suppressScrollX: o,
                        suppressScrollY: i
                    }, a.createElement(d._8, {
                        className: n,
                        alignItems: d.c.Center,
                        padding: {
                            top: 1,
                            bottom: 2,
                            x: 1
                        }
                    }, this.renderUpsell(), this.props.listDirection === _.c.Horizontal && this.renderDesktopOffers(s), this.renderMobileOffers(s)))
                }, t.prototype.renderUpsell = function() {
                    var e = this.props.userData;
                    if (!Object(_.k)(e) && !Object(_.l)(e) && !this.props.hideUpsell) return a.createElement(q, null)
                }, t.prototype.renderOfferExperience = function() {
                    var e = this,
                        t = this.props.offersData;
                    if (this.shouldShowPlaceholders()) return this.renderOfferPlaceholders();
                    if (t.primeOffers && t.primeOffers.length) {
                        var r = this.getSortedOffers(),
                            n = r[r.length - 1];
                        return r.map(function(t, r) {
                            return a.createElement(V, {
                                externalReftag: e.props.externalReftag,
                                key: t.id,
                                offer: t,
                                isLast: n.id === t.id,
                                index: r,
                                orientation: e.getOfferListOrientation()
                            })
                        })
                    }
                    return a.createElement(m, null)
                }, t.prototype.getFreeGamesWithPrimeOfferIds = function() {
                    return s.b.get("prime_free_game_offerids", [])
                }, t.prototype.getSortedOffers = function() {
                    var e = this,
                        t = this.getUserId();
                    if (!this.props.offersData || !this.props.offersData.primeOffers) return [];
                    var r = this.props.offersData.primeOffers,
                        n = this.getHiddenOfferIdsByPlacement(this.props.placement),
                        i = r.filter(function(e) {
                            return !n.includes(e.id)
                        });
                    if (t) {
                        var a = i.filter(function(t) {
                                return !e.offerHasExternalURL(t) && t.self && t.self.hasEntitlement
                            }).sort(_.o),
                            o = this.filterOffersByOfferType(a),
                            s = i.filter(function(t) {
                                return e.offerHasExternalURL(t) || !t.self || !t.self.hasEntitlement
                            }).sort(_.o);
                        return this.filterOffersByOfferType(s).concat(o)
                    }
                    return this.filterOffersByOfferType(i).slice().sort(_.o)
                }, t.prototype.offerHasExternalURL = function(e) {
                    var t = e && e.content;
                    return t && t.externalURL
                }, t.prototype.filterOffersByOfferType = function(e) {
                    var t = this.getFreeGamesWithPrimeOfferIds();
                    return this.props.offerFilterType === Q.a.Game ? e.filter(function(e) {
                        return t.includes(e.id)
                    }).sort(_.o) : this.props.offerFilterType === Q.a.InGameLoot ? e.filter(function(e) {
                        return !t.includes(e.id)
                    }).sort(_.o) : e
                }, t.prototype.getUserId = function() {
                    var e = this.props.userData;
                    return e && !e.loading && !e.error && e.currentUser && e.currentUser.id ? e.currentUser.id : ""
                }, Object.defineProperty(t.prototype, "isUserDataLoading", {
                    get: function() {
                        var e = this.props.userData;
                        return e && e.loading
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "isUserDataError", {
                    get: function() {
                        var e = this.props.userData;
                        return e && e.error
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "isOffersDataLoading", {
                    get: function() {
                        var e = this.props.offersData;
                        return e && e.loading
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "isOffersDataError", {
                    get: function() {
                        var e = this.props.offersData;
                        return e && e.error
                    },
                    enumerable: !0,
                    configurable: !0
                }), t
            }(a.Component)),
            $ = Object(o.compose)(Object(l.a)(Y, {
                name: "offersData",
                options: function() {
                    return {
                        variables: {
                            dateOverride: Object(_.f)()
                        }
                    }
                },
                skip: function(e) {
                    return !e.firstPageLoaded && !e.ignoreFirstPageLoad
                }
            }), Object(l.a)(C, {
                name: "userData",
                skip: function(e) {
                    return !e.firstPageLoaded && !e.ignoreFirstPageLoad
                }
            }), Object(u.d)("PrimeOfferList"))(X);
        var J = Object(n.b)(function(e) {
            return {
                firstPageLoaded: e.session.firstPageLoaded
            }
        })($);
        r.d(t, "a", function() {
            return J
        })
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
                number_of_offers: t.numberOfOffers,
                action: e ? n.Open : n.Close,
                user_agent: navigator.userAgent
            })
        }, t.d = function(e) {
            s.n.track(c.SpadeEventType.CrownInteraction, {
                has_prime: e.hasPrime,
                client_time: Date.now(),
                number_of_offers: e.numberOfOffers,
                action: n.OffersLoaded,
                user_agent: navigator.userAgent
            })
        }, t.l = function(e) {
            d(e, i.Click, a.StartYourFreeTrial)
        }, t.m = function(e) {
            d(e, i.Hover, a.StartYourFreeTrial)
        }, t.h = function(e, t) {
            d(t, i.Click, e ? a.MoreInfo : a.CloseInfo)
        }, t.e = function(e, t) {
            u(e, i.Click, t)
        }, t.i = function(e) {
            d(e, i.Hover, a.MoreInfo)
        }, t.g = function(e) {
            d(e, i.Hover, a.CloseInfo)
        }, t.f = function(e, t) {
            u(e, i.Hover, t)
        }, t.j = function(e) {
            s.n.track(c.SpadeEventType.PrimeLootPagePageview, {
                client_time: Date.now(),
                reftag: e.reftag,
                user_agent: navigator.userAgent
            })
        }, t.k = function(e) {
            s.n.track(c.SpadeEventType.PrimeLootPageTryPrimeClick, {
                client_time: Date.now(),
                button_position: e.buttonPosition,
                user_agent: navigator.userAgent
            })
        };
        var n, i, a, o, s = r("6sO2"),
            c = r("vH/s"),
            l = r("Kckk");

        function u(e, t, r) {
            var n;
            switch (r) {
                case l.e.CLAIM_CODE:
                    n = a.GetCode;
                    break;
                case l.e.EXTERNAL_OFFER:
                    n = a.LearnMore;
                    break;
                case l.e.DIRECT_ENTITLEMENT:
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
            e.Open = "click_open", e.Close = "click_close", e.Hover = "hover", e.OffersLoaded = "offers_loaded"
        }(n || (n = {})),
        function(e) {
            e.Hover = "hover", e.Click = "click"
        }(i || (i = {})),
        function(e) {
            e.StartYourFreeTrial = "start_your_free_trial", e.MoreInfo = "more_info", e.CloseInfo = "close_info", e.ClaimOffer = "claim_offer", e.LearnMore = "learn_more", e.GetCode = "get_code"
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
            a = r("CSlQ"),
            o = r("Kckk"),
            s = r("Odds"),
            c = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return n.__extends(t, e), t.prototype.render = function() {
                    var e = Object(o.g)(this.props.errorType);
                    return i.createElement(s._35, {
                        background: s.n.Alt2,
                        display: s.R.Flex,
                        justifyContent: s._7.Center,
                        padding: {
                            y: 1
                        },
                        margin: {
                            bottom: 1
                        },
                        textAlign: s._45.Center,
                        "data-test-selector": this.props.testTarget,
                        "data-a-target": this.props.testTarget
                    }, i.createElement(s.Q, {
                        type: s._49.H4,
                        align: s._59.Middle
                    }, i.createElement(s._35, {
                        padding: 1,
                        display: s.R.InlineFlex,
                        flexGrow: 1,
                        flexWrap: s.U.NoWrap,
                        alignItems: s.c.Center,
                        textAlign: s._45.Left,
                        fontSize: this.props.fontSize ? this.props.fontSize : s.V.Size5,
                        "data-a-target": "prime-error-glitch"
                    }, i.createElement(s._8, {
                        margin: {
                            right: 1
                        },
                        display: s.R.InlineFlex,
                        flexGrow: 1,
                        flexWrap: s.U.NoWrap,
                        alignItems: s.c.Center
                    }, i.createElement(s._24, {
                        asset: s._25.DeadGlitch,
                        type: s._26.Alert,
                        width: 20,
                        height: 20
                    })), i.createElement(s.Q, {
                        type: s._49.P
                    }, e))))
                }, t
            }(i.Component),
            l = Object(a.d)("PrimeError", {
                autoReportInteractive: !0
            })(c);
        r.d(t, "a", function() {
            return l
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
        r.loc.source = {
            body: "query Prime_PrimeOfferList_PrimeOffers($dateOverride: Time) {\nprimeOffers(dateOverride: $dateOverride) {\nid\ntitle\nimageURL\nclaimInstructions\ndescription\ndeliveryMethod\npriority\ncontent {\ngame {\nid\nname\n}\nexternalURL\npublisher\ncategories\n}\nself {\nhasEntitlement\nclaimData\n}\n}\n}",
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
                            icon: l._25.Crown,
                            linkTo: a.a.tryPrimeURI,
                            onClick: this.handleStartPrimeTrialClick
                        }, Object(l._63)(this.props), {
                            targetBlank: !0
                        }), t)
                    }
                    if (this.props.isSubscribed && !e) {
                        var r = Object(a.d)("Subscribed", "SubscribeWithPrime");
                        return i.createElement(l.v, n.__assign({
                            ariaLabel: r,
                            "data-test-selector": u,
                            disabled: !0,
                            icon: l._25.Crown
                        }, Object(l._63)(this.props)), r)
                    }
                    if (!this.props.canPrimeSubscribe) {
                        var o = Object(a.d)("Not yet!", "SubscribeWithPrime");
                        return i.createElement(l.v, n.__assign({
                            ariaLabel: o,
                            "data-test-selector": u,
                            disabled: !0,
                            icon: l._25.Crown
                        }, Object(l._63)(this.props)), o)
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
                        icon: l._25.Crown,
                        state: this.state.isSubscribing ? l.A.Loading : l.A.Default,
                        onClick: this.handleSubWithPrimeClick
                    }, Object(l._63)(this.props)), s)
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
//# sourceMappingURL=features.subscribe-button.components.subscribe-with-prime.component-f878296ffad8005994f4703fd705726e.js.map