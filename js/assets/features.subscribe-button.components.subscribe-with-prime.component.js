webpackJsonp([59], {
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
            _ = (r("f8UT"), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return s.createElement(v._8, null, s.createElement(v._35, {
                        className: "prime-offer-header",
                        borderBottom: !0,
                        background: v.n.Alt2,
                        padding: {
                            x: 1,
                            y: .5
                        }
                    }, s.createElement(v.Q, {
                        bold: !0,
                        type: v._49.H6
                    }, Object(c.d)("Free with Prime", "PrimeOfferHeader"))), this.getNumOfUnseenOffersDisplay())
                }, t.prototype.getNumOfUnseenOffersDisplay = function() {
                    var e = this.props.numOfUnseenOffers;
                    if (e) return s.createElement(v._35, {
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
                        type: v._49.H6
                    }, Object(c.d)("New Prime Loot", "PrimeOfferHeader"))), s.createElement(v._8, {
                        className: "prime-offer__new-offer-header-count",
                        textAlign: v._45.Center
                    }, s.createElement(v._35, {
                        className: "prime-offer__new-offer-header-count__text",
                        background: v.n.Base,
                        color: v.K.Base,
                        display: v.R.Flex,
                        alignItems: v.c.Center,
                        justifyContent: v._7.Center
                    }, s.createElement(v.Q, null, e.toString())))))
                }, t = a.__decorate([Object(f.d)("PrimeOfferHeader")], t)
            }(s.Component)),
            g = r("Lpko"),
            k = r("Tr7p"),
            b = r("Kckk");
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
                        }), Object(k.c)(!e, {
                            hasPrime: t.hasPrime()
                        })
                    }, t.onHover = function() {
                        Object(k.b)({
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
                                i = Object(b.h)();
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
                            t.updateOfferStatus(), Object(b.l)(r)
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
                                                status: b.a.Seen
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
                        }, s.createElement(_, {
                            numOfUnseenOffers: t.state.numOfUnseenOffers
                        }), s.createElement(g.a, null)) : null
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
                        align: v._53.Center,
                        direction: v._54.Bottom,
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
                        icon: v._25.Crown,
                        "data-a-target": "prime-offers-icon",
                        "data-target": "prime-offers-icon"
                    })), s.createElement(v.q, {
                        direction: v.r.BottomRight,
                        size: v.s.Large,
                        offsetX: "9px"
                    }, this.renderOfferList())), this.renderUnseenOffersDisplay())
                }, t.prototype.offerIsSeen = function(e) {
                    return e.self && e.self.status === b.a.Seen
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
                                dateOverride: Object(b.e)()
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
            T = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = this.props.data.currentUser && this.props.data.currentUser.hasPrime,
                        t = this.props.data.requestInfo && this.props.data.requestInfo.countryCode;
                    if (!Object(b.m)(e, t)) return null;
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
                    return s.createElement(v._35, {
                        color: v.K.Base,
                        className: "blue-bar",
                        position: v._15.Relative,
                        fullWidth: !0,
                        zIndex: v._62.Above
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
                    }, s.createElement(v._24, {
                        asset: v._25.Crown,
                        width: 20,
                        height: 13
                    })), s.createElement(v.Q, {
                        bold: !0,
                        type: v._49.Span,
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
                        type: v._49.Span,
                        fontSize: v.V.Size6
                    }, i)), s.createElement(v._8, {
                        display: v.R.InlineFlex,
                        flexShrink: 0
                    }, s.createElement(v.Q, {
                        bold: !0,
                        type: v._49.Span,
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
                                dateOverride: Object(b.e)()
                            }
                        }
                    }
                }), Object(f.d)("BlueBarComponent")], t)
            }(s.Component),
            x = r("dnng");
        r.d(t, "c", function() {
            return N
        }), r.d(t, "a", function() {
            return T
        }), r.d(t, "b", function() {
            return x.a
        }), r.d(t, "d", function() {
            return b.e
        }), r.d(t, !1, function() {
            return b.c
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
        r.d(t, "d", function() {
            return u
        }), r.d(t, "c", function() {
            return n
        }), r.d(t, "b", function() {
            return p
        }), r.d(t, "f", function() {
            return m
        }), r.d(t, "a", function() {
            return d
        }), r.d(t, "i", function() {
            return f
        }), r.d(t, "g", function() {
            return h
        }), r.d(t, "h", function() {
            return v
        }), r.d(t, "l", function() {
            return _
        }), r.d(t, "n", function() {
            return g
        }), r.d(t, "m", function() {
            return b
        }), r.d(t, "e", function() {
            return O
        }), r.d(t, "k", function() {
            return y
        }), r.d(t, "j", function() {
            return E
        });
        var n, i = r("HW6M"),
            a = (r.n(i), r("OAwv")),
            o = (r.n(a), r("GiK3")),
            s = (r.n(o), r("F8kA")),
            c = r("6sO2"),
            l = r("S1vB"),
            u = {
                DIRECT_ENTITLEMENT: "DIRECT_ENTITLEMENT",
                CLAIM_CODE: "CLAIM_CODE",
                EXTERNAL_OFFER: "EXTERNAL_OFFER"
            };
        ! function(e) {
            e.Vertical = "Vertical", e.Horizontal = "Horizontal", e.Default = "Vertical"
        }(n || (n = {}));
        var d, p = {
                UNKNOWN_ERROR: "UNKNOWN_ERROR",
                OFFER_ALREADY_CLAIMED: "OFFER_ALREADY_CLAIMED",
                UNABLE_TO_SPEND: "UNABLE_TO_SPEND",
                TOO_MANY_RECENT_SPENDS: "TOO_MANY_RECENT_SPENDS"
            },
            m = function(e) {
                switch (e || p.UNKNOWN_ERROR) {
                    case p.OFFER_ALREADY_CLAIMED:
                        return Object(c.d)("Oh no! Unable to claim. Another linked Twitch account may have already claimed this content. Click {learnMoreLink}.", {
                            learnMoreLink: o.createElement(s.a, {
                                to: "https://help.twitch.tv/customer/portal/articles/2572060-twitch-prime-guide#MultipleAccounts",
                                target: "_blank",
                                className: "prime-error__link",
                                "data-a-target": "prime-error_link"
                            }, "here to learn more")
                        }, "PrimeError");
                    case p.UNABLE_TO_SPEND:
                    case p.TOO_MANY_RECENT_SPENDS:
                    default:
                        return Object(c.d)("Something has gone wrong. Please try again later.", "PrimeError")
                }
            };
        ! function(e) {
            e.Seen = "SEEN", e.Unseen = "UNSEEN", e.Claimed = "CLAIMED"
        }(d || (d = {}));
        var f = function(e) {
                return e === n.Vertical
            },
            h = function(e, t) {
                var r = t === n.Horizontal ? "horizontal" : "vertical";
                return i(e, e + "--" + r)
            },
            v = function() {
                return k("seenOffers")
            },
            _ = function(e) {
                c.l.set("seenOffers", e)
            },
            g = function(e, t) {
                return (e && (e.priority || 0 === e.priority) ? e.priority : 99999) - (t && (t.priority || 0 === t.priority) ? t.priority : 99999)
            },
            k = function(e) {
                return c.l.get(e, [])
            },
            b = function(e, t) {
                return void 0 !== e && void 0 !== t && (!e && Object(l.a)(t))
            },
            O = function() {
                var e = location.search,
                    t = a.parse(e);
                return t && t.dateOverride || void 0
            },
            y = function(e) {
                return e && !e.loading && !e.error && null !== e.currentUser && e.currentUser.hasPrime
            },
            E = function(e) {
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
                            type: u._49.Span
                        }, Object(o.d)("Hearthstone", "PrimeEmpty")),
                        smite: a.createElement(u.Q, {
                            italic: !0,
                            type: u._49.Span
                        }, Object(o.d)("Smite", "PrimeEmpty"))
                    }, "PrimeEmpty");
                    return a.createElement(u._8, {
                        className: "prime-empty",
                        margin: 2
                    }, a.createElement(u._8, {
                        textAlign: u._45.Center,
                        margin: 2
                    }, a.createElement("img", {
                        className: "prime-empty__image",
                        src: "https://m.media-amazon.com/images/G/01/sm/landing/Trunk_w_Star_transparent._V530838660_.png",
                        alt: Object(o.d)("Prime Treasure Chest", "PrimeEmpty")
                    })), a.createElement(u.Q, {
                        type: u._49.P,
                        bold: !0
                    }, Object(o.d)("Free in-game loot every month, plus surprises", "PrimeEmpty")), a.createElement("div", null, e))
                }, t = i.__decorate([Object(l.d)("PrimeEmpty")], t)
            }(a.Component),
            p = r("lfvs"),
            m = r("oIkB"),
            f = r("AGQo"),
            h = r("Tr7p"),
            v = r("Kckk"),
            _ = (r("w/8h"), r("sq7i")),
            g = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onClick = function(e) {
                        Object(h.d)({
                            offerID: t.props.offerID,
                            externalURL: t.props.externalURL,
                            hasPrime: !0,
                            index: t.props.index
                        }, t.props.offerType), t.props.claimCallback && t.props.offerType !== v.d.EXTERNAL_OFFER && t.props.claimCallback(e)
                    }, t.onHover = function() {
                        Object(h.e)({
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
                    var e = this.props.orientation || v.c.Default,
                        t = v.i(e),
                        r = v.g("prime-claim-button", e);
                    return a.createElement(u._8, {
                        fullWidth: !0,
                        className: r,
                        display: t ? u.R.Block : u.R.InlineBlock
                    }, this.getClaimButton())
                }, t.prototype.getClaimButton = function() {
                    var e = this.props,
                        t = this.getButtonText(),
                        r = a.createElement(f.a, {
                            onHover: this.onHover
                        }, a.createElement(u.v, {
                            fullWidth: !0,
                            state: this.props.claiming ? u.A.Loading : u.A.Default,
                            disabled: this.props.claiming,
                            onClick: this.onClick,
                            "data-a-target": "prime-claim-button"
                        }, t));
                    return e.offerType === v.d.EXTERNAL_OFFER ? a.createElement(f.a, {
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
                        case v.d.CLAIM_CODE:
                            return Object(o.d)("Get Code", "PrimeClaimButton");
                        case v.d.EXTERNAL_OFFER:
                            return e;
                        case v.d.DIRECT_ENTITLEMENT:
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
                        Object(h.g)(e, {
                            offerID: r.props.offerID,
                            externalURL: r.props.externalURL,
                            hasPrime: r.props.hasPrime,
                            index: r.props.index
                        }), r.setState({
                            showDescription: e
                        })
                    }, r.onHover = function() {
                        r.state.showDescription ? Object(h.f)({
                            offerID: r.props.offerID,
                            externalURL: r.props.externalURL,
                            hasPrime: r.props.hasPrime,
                            index: r.props.index
                        }) : Object(h.h)({
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
                    var e = this.props.orientation || v.c.Default,
                        t = Object(v.g)("prime-claim-description", e);
                    return a.createElement(u._8, {
                        fullWidth: !0,
                        className: t,
                        margin: {
                            top: 1
                        }
                    }, a.createElement(f.a, {
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
                        r = Object(v.i)(e);
                    return this.state.showDescription && (t = a.createElement(u._35, {
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
            b = r("Hs3O"),
            O = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onClick = function() {
                        Object(h.k)({
                            offerID: t.props.offerID,
                            externalURL: t.getLink(),
                            hasPrime: !1,
                            index: t.props.index
                        })
                    }, t.onHover = function() {
                        Object(h.l)({
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
                    }, a.createElement(f.a, {
                        onHover: this.onHover
                    }, a.createElement(u.v, {
                        fullWidth: !0,
                        linkTo: this.getLink(),
                        targetBlank: !0,
                        onClick: this.onClick
                    }, Object(o.d)("Start Your Free Trial", "PrimeUpsellButton"))))
                }, t.prototype.getLink = function() {
                    if (this.props.externalURL) return this.props.externalURL;
                    var e = this.props.externalReftag || b.c;
                    return Object(b.d)(e, window.location.pathname.substring(1))
                }, t = i.__decorate([Object(l.d)("PrimeUpsellButton")], t)
            }(a.Component),
            y = r("4VmI"),
            E = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = this.props.orientation || v.c.Default,
                        t = Object(v.g)("prime-claim", e);
                    return a.createElement(u._8, {
                        className: t,
                        margin: {
                            bottom: 1
                        }
                    }, this.getCallToAction(), this.getClaimDescriptionSection())
                }, t.prototype.getCallToAction = function() {
                    var e = this.props.data;
                    return Object(v.k)(e) ? a.createElement(g, {
                        offerType: this.props.offerType,
                        offerID: this.props.offerID,
                        claimCallback: this.props.claimCallback,
                        claiming: this.props.claiming,
                        orientation: this.props.orientation,
                        externalURL: this.props.externalURL,
                        index: this.props.index
                    }) : a.createElement(O, {
                        externalReftag: this.props.externalReftag,
                        externalURL: this.props.externalURL,
                        offerID: this.props.offerID,
                        index: this.props.index
                    })
                }, t.prototype.getClaimDescriptionSection = function() {
                    if (this.props.offerType === v.d.EXTERNAL_OFFER) return null;
                    var e = this.props.data;
                    return a.createElement(k, {
                        description: this.props.offerDescription,
                        offerID: this.props.offerID,
                        externalURL: this.props.externalURL,
                        index: this.props.index,
                        orientation: this.props.orientation,
                        hasPrime: Object(v.k)(e)
                    })
                }, t = i.__decorate([Object(c.a)(y), Object(l.d)("PrimeInstructions")], t)
            }(a.Component),
            S = r("dnng"),
            N = (r("nFc2"), function(e) {
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
            C = function(e) {
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
                    })), a.createElement(u._8, null, a.createElement(N, {
                        clipboardText: this.state.value
                    }))) : null
                }, t = i.__decorate([Object(l.d)("CopyableItem")], t)
            }(a.Component),
            D = (r("yqdF"), function(e) {
                function t(t) {
                    var r = e.call(this, t) || this;
                    return r.getClaimInstructions = function() {
                        return a.createElement(u._58, null, a.createElement(p, {
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
                        return a.createElement(u._35, {
                            className: "prime-claim-instructions prime-claim-instructions--vertical",
                            background: u.n.Alt2,
                            border: !0,
                            padding: 1,
                            fontSize: u.V.Size6
                        }, r.getClaimInstructions())
                    }, r.renderHorizontalLayout = function() {
                        return a.createElement(u._35, {
                            fullWidth: !0,
                            className: "prime-claim-instructions prime-claim-instructions--horizontal",
                            margin: {
                                top: 1
                            }
                        }, a.createElement(u.v, {
                            fullWidth: !0,
                            type: u.B.Text,
                            onClick: r.toggleShowDescription
                        }, r.getDescriptionButtonText()), r.state.showDescription && a.createElement(u._35, {
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
                    var e = this.props.orientation || v.c.Default;
                    return Object(v.i)(e) ? this.renderVerticalLayout() : this.renderHorizontalLayout()
                }, t = i.__decorate([Object(l.d)("PrimeClaimInstructions", {
                    autoReportInteractive: !0
                })], t)
            }(a.Component)),
            P = (r("S5wX"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.getPrimeClaimInstructions = function() {
                        if (t.props.claimInstructions) return a.createElement(D, {
                            claimInstructions: t.props.claimInstructions || "",
                            orientation: t.props.orientation
                        })
                    }, t
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = this.props.orientation || v.c.Default,
                        t = Object(v.g)("prime-redeem", e);
                    return a.createElement(u._8, {
                        className: t
                    }, this.getCodeOrConfirmation(e), this.getPrimeClaimInstructions())
                }, t.prototype.getCodeOrConfirmation = function(e) {
                    var t = Object(v.i)(e);
                    if (this.props.code && this.props.deliveryMethod === v.d.CLAIM_CODE) return a.createElement(u._8, null, a.createElement(C, {
                        initialText: this.props.code,
                        readOnly: !0,
                        textCenter: !0
                    }));
                    var r = t ? 1 : 0;
                    return a.createElement(u._35, {
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
                        type: t ? u._49.H4 : u._49.H6,
                        align: u._59.Middle,
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
                    }, a.createElement(u._24, {
                        asset: u._25.Check,
                        width: 20,
                        height: 20
                    })), Object(o.d)("Added To Your Twitch Account", "PrimeRedeem"))))
                }, t = i.__decorate([Object(l.d)("PrimeRedeem")], t)
            }(a.Component)),
            T = r("/3Cb"),
            x = (r("v+rJ"), function(e) {
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
                        return a.createElement(u._35, {
                            "data-a-target": "prime-offer",
                            className: "prime-offer prime-offer--vertical",
                            alignItems: u.c.Center,
                            display: u.R.Block,
                            borderBottom: !r,
                            textAlign: u._45.Left,
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
                        }), a.createElement(u._35, {
                            margin: {
                                bottom: 2
                            }
                        }, a.createElement(u._8, {
                            className: "prime-offer__description",
                            padding: {
                                top: .5
                            }
                        }, a.createElement(u.Q, {
                            type: u._49.P
                        }, i.name, " ", o[0])), a.createElement(u._8, {
                            className: "prime-offer__publisher"
                        }, a.createElement(u.Q, {
                            type: u._49.P,
                            color: u.K.Alt2,
                            fontSize: u.V.Size7
                        }, n.publisher))), t.renderRedeemUpsellOrClaimSection(e))
                    }, t.renderHorizontalLayout = function(e) {
                        var r = e.content || {},
                            n = r.game || {},
                            i = r.categories || [];
                        return a.createElement(u._35, {
                            "data-a-target": "prime-offer",
                            className: "prime-offer prime-offer--horizontal",
                            alignItems: u.c.Center,
                            display: u.R.InlineBlock,
                            textAlign: u._45.Left,
                            position: u._15.Relative,
                            padding: {
                                right: 1,
                                y: .5
                            }
                        }, a.createElement(u._35, {
                            className: "prime-offer__content"
                        }, a.createElement(u._35, {
                            className: "prime-offer__content__text",
                            background: u.n.Base
                        }, a.createElement(u._8, {
                            className: "prime-offer__publisher"
                        }, a.createElement(u.Q, {
                            type: u._49.P,
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
                            type: u._49.P,
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
                            return a.createElement(S.a, {
                                fontSize: u.V.Size6,
                                testTarget: "prime-offer-error",
                                errorType: o
                            })
                        }
                        if ((t.isCurrentOfferClaimed(e) || t.state.claimed) && Object(v.k)(i)) {
                            var s = t.state.claimData || n.claimData;
                            return a.createElement(P, {
                                claimInstructions: e.claimInstructions,
                                code: s,
                                deliveryMethod: e.deliveryMethod,
                                orientation: t.props.orientation
                            })
                        }
                        return a.createElement(E, {
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
                        return t.state.error || v.b.UNKNOWN_ERROR
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
                                    var o = v.b[a.code];
                                    t.setState({
                                        claiming: !1,
                                        claimed: !1,
                                        error: o || v.b.UNKNOWN_ERROR
                                    })
                                }
                            }).catch(function() {
                                t.setState({
                                    claiming: !1,
                                    claimed: !1,
                                    error: v.b.UNKNOWN_ERROR
                                })
                            })
                        }
                    }, t
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = this.props.offer;
                    if (e) {
                        var t = this.props.orientation || v.c.Default;
                        return v.i(t) ? this.renderVerticalLayout(e) : this.renderHorizontalLayout(e)
                    }
                    return null
                }, t.prototype.isCurrentOfferClaimed = function(e) {
                    return (e.self || {
                        hasEntitlement: !1
                    }).hasEntitlement
                }, t = i.__decorate([Object(c.a)(y, {
                    name: "data"
                }), Object(c.a)(T, {
                    name: "claimPrimeOffer"
                }), Object(l.d)("PrimeOffer")], t)
            }(a.Component)),
            I = (r("WC9X"), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = this.props.orientation || v.c.Default,
                        t = Object(v.i)(e);
                    return a.createElement(u._35, {
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
            L = (r("7L7x"), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return a.createElement(u._35, {
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
                        type: u._49.H4
                    }, Object(o.d)("Claim With Twitch Prime", "PrimeUpsell")), a.createElement(u._8, {
                        className: "prime-upsell__logo-container",
                        fullWidth: !0,
                        margin: {
                            y: 2
                        },
                        textAlign: u._45.Center
                    }, a.createElement(u._24, {
                        asset: u._25.LogoTwitchPrime,
                        width: 330,
                        height: 150,
                        type: u._26.Brand
                    })), a.createElement(u.Q, {
                        type: u._49.P
                    }, Object(o.d)("Get free game loot like this every month plus surprises, ad-free viewing, and loads more with Twitch Prime.", "PrimeUpsell")), a.createElement(O, null))
                }, t = i.__decorate([Object(l.d)("PrimeUpsell")], t)
            }(a.Component)),
            R = r("LXDe"),
            F = r("eY4D"),
            U = (r("DgR+"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.renderDesktopOffers = function(e) {
                        return a.createElement(u._8, {
                            className: "prime-offer-list__content--desktop"
                        }, t.renderSectionTitle(), a.createElement(u._55, {
                            childWidth: u._56.Large,
                            gutterSize: u._57.Small,
                            center: !0,
                            placeholderItems: 20
                        }, e))
                    }, t.renderSectionTitle = function() {
                        return t.props.sectionTitle && a.createElement(u._8, {
                            padding: {
                                top: 1
                            },
                            className: "prime-offers__title"
                        }, a.createElement(u.Q, {
                            type: u._49.H3,
                            color: u.K.Base,
                            bold: !0
                        }, t.props.sectionTitle))
                    }, t.renderMobileOffers = function(e) {
                        return a.createElement(u._8, {
                            className: "prime-offer-list__content--mobile"
                        }, t.renderSectionTitle(), e)
                    }, t.getOfferListOrientation = function() {
                        return t.props.listDirection || v.c.Default
                    }, t.shouldShowPlaceholders = function() {
                        if (!t.props.offersData) return !0;
                        var e = t.props.offersData,
                            r = e.primeOffers,
                            n = void 0 === r || null === r;
                        return e.loading || !e.error && n
                    }, t.renderOfferPlaceholders = function() {
                        for (var e = [], r = 0; r < 3; ++r) {
                            var n = a.createElement(I, {
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
                        r = Object(v.g)("prime-offer-list", e),
                        n = "prime-offer-list__content prime-offer-list__content--" + t,
                        i = this.props.listDirection === v.c.Horizontal,
                        o = this.props.listDirection === v.c.Vertical,
                        c = this.renderOfferExperience();
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
                    }, this.renderUpsell(), this.props.listDirection === v.c.Horizontal && this.renderDesktopOffers(c), this.renderMobileOffers(c)))
                }, t.prototype.renderUpsell = function() {
                    var e = this.props.userData;
                    if (!Object(v.j)(e) && !Object(v.k)(e) && !this.props.hideUpsell) return a.createElement(L, null)
                }, t.prototype.renderOfferExperience = function() {
                    var e = this,
                        t = this.props.offersData;
                    if (this.shouldShowPlaceholders()) return this.renderOfferPlaceholders();
                    if (!t.error && t.primeOffers && t.primeOffers.length) {
                        var r = this.getSortedOffers(),
                            n = r[r.length - 1];
                        return r.map(function(t, r) {
                            return a.createElement(x, {
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
                            }).sort(v.n),
                            n = this.filterOffersByOfferType(r),
                            i = t.filter(function(e) {
                                return !e.self || !e.self.hasEntitlement
                            }).sort(v.n);
                        return this.filterOffersByOfferType(i).concat(n)
                    }
                    return this.filterOffersByOfferType(t).slice().sort(v.n)
                }, t.prototype.filterOffersByOfferType = function(e) {
                    var t = this.getFreeGamesWithPrimeOfferIds();
                    return this.props.offerFilterType === R.a.Game ? e.filter(function(e) {
                        return t.includes(e.id)
                    }).sort(v.n) : this.props.offerFilterType === R.a.InGameLoot ? e.filter(function(e) {
                        return !t.includes(e.id)
                    }).sort(v.n) : e
                }, t.prototype.getUserId = function() {
                    var e = this.props.userData;
                    return e && !e.loading && !e.error && e.currentUser && e.currentUser.id ? e.currentUser.id : ""
                }, t = i.__decorate([Object(c.a)(F, {
                    name: "offersData",
                    options: function() {
                        return {
                            variables: {
                                dateOverride: Object(v.e)()
                            }
                        }
                    },
                    skip: function(e) {
                        return !e.firstPageLoaded && !e.ignoreFirstPageLoad
                    }
                }), Object(c.a)(y, {
                    name: "userData",
                    skip: function(e) {
                        return !e.firstPageLoaded && !e.ignoreFirstPageLoad
                    }
                }), Object(l.d)("PrimeOfferList", {
                    autoReportInteractive: !0
                })], t)
            }(a.Component));
        var j = Object(n.b)(function(e) {
            return {
                firstPageLoaded: e.session.firstPageLoaded
            }
        })(U);
        r.d(t, "a", function() {
            return j
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
                action: e ? n.Open : n.Close,
                user_agent: navigator.userAgent
            })
        }, t.k = function(e) {
            d(e, i.Click, a.StartYourFreeTrial)
        }, t.l = function(e) {
            d(e, i.Hover, a.StartYourFreeTrial)
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
            l = r("Kckk");

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
                return n.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = Object(o.f)(this.props.errorType);
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
                }, t = n.__decorate([Object(a.d)("PrimeError")], t)
            }(i.Component);
        r.d(t, "a", function() {
            return c
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
//# sourceMappingURL=features.subscribe-button.components.subscribe-with-prime.component-10b37bcf3c81c28813a793fd270767d7.js.map