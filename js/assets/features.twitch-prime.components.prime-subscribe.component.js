webpackJsonp([59], {
    "/3Cb": function(e, t) {
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
        n.loc.source = {
            body: "mutation claimPrimeOffer($input: ClaimPrimeOfferInput!) {\nclaimPrimeOffer(input: $input) {\nself {\nclaimData\nhasEntitlement\n}\nerror {\ncode\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    "4VmI": function(e, t) {
        var n = {
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
        n.loc.source = {
            body: "query Prime_Current_User {\ncurrentUser {\nid\nhasPrime\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    "7L7x": function(e, t) {},
    "81fF": function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "ChannelPage_SubscribeButton_PrimeSubscribe_UserPrimeData"
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
                                    value: "login"
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
                                            value: "canPrimeSubscribe"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
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
                                                    value: "purchasedWithPrime"
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
                end: 239
            }
        };
        n.loc.source = {
            body: "query ChannelPage_SubscribeButton_PrimeSubscribe_UserPrimeData($login: String!) {\nuser(login: $login) {\nid\nself {\ncanPrimeSubscribe\nsubscriptionBenefit {\nid\npurchasedWithPrime\n}\n}\n}\ncurrentUser {\nid\nhasPrime\n}\nrequestInfo {\ncountryCode\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    "8OKC": function(e, t) {
        var n = {
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
        n.loc.source = {
            body: "mutation updatePrimeOfferStatus($input: UpdatePrimeOfferStatusInput!) {\nupdatePrimeOfferStatus(input: $input) {\nself {\nhasEntitlement\nclaimData\nstatus\n}\nerror {\ncode\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    "8PKe": function(e, t, n) {
        "use strict";
        var r, i = n("RH2O"),
            a = n("TToO"),
            o = n("OAwv"),
            s = n("GiK3"),
            c = n("6sO2"),
            l = n("+Znq"),
            d = n("7vx8"),
            u = n("S1vB"),
            m = n("oIkB"),
            p = n("ZVME"),
            f = n("CSlQ"),
            v = n("AGQo"),
            h = n("Odds"),
            g = (n("f8UT"), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return s.createElement(h._8, null, s.createElement(h._32, {
                        className: "prime-offer-header",
                        borderBottom: !0,
                        background: h.n.Alt2,
                        padding: {
                            x: 1,
                            y: .5
                        }
                    }, s.createElement(h.Q, {
                        bold: !0,
                        type: h._46.H6
                    }, Object(c.d)("Free with Prime", "PrimeOfferHeader"))), this.getNumOfUnseenOffersDisplay())
                }, t.prototype.getNumOfUnseenOffersDisplay = function() {
                    var e = this.props.numOfUnseenOffers;
                    if (e) return s.createElement(h._32, {
                        className: "prime-offer__new-offer-header",
                        borderBottom: !0,
                        background: h.n.Alt2,
                        padding: {
                            x: 1,
                            y: .5
                        }
                    }, s.createElement(h._8, {
                        fullWidth: !0,
                        display: h.R.Flex,
                        alignItems: h.c.Center
                    }, s.createElement(h._8, {
                        flexGrow: 1
                    }, s.createElement(h.Q, {
                        bold: !0,
                        type: h._46.H6
                    }, Object(c.d)("New Prime Loot", "PrimeOfferHeader"))), s.createElement(h._8, {
                        className: "prime-offer__new-offer-header-count",
                        textAlign: h._42.Center
                    }, s.createElement(h._32, {
                        className: "prime-offer__new-offer-header-count__text",
                        background: h.n.Base,
                        color: h.K.Base,
                        display: h.R.Flex,
                        alignItems: h.c.Center,
                        justifyContent: h._7.Center
                    }, s.createElement(h.Q, null, e.toString())))))
                }, t = a.__decorate([Object(f.d)("PrimeOfferHeader")], t)
            }(s.Component)),
            _ = n("Lpko"),
            k = n("Tr7p"),
            b = n("R0Kh");
        ! function(e) {
            e.OFFERS_FAILED_TO_UPDATE = "OFFERS_FAILED_TO_UPDATE", e.UNKNOWN = "UNKNOWN"
        }(r || (r = {}));
        var O = n("8OKC"),
            y = n("tTbW"),
            S = (n("9856"), n("wjhu")),
            E = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        numOfUnseenOffers: 0,
                        updated: !1,
                        status: void 0,
                        error: void 0
                    }, t.showOffersByDefault = function() {
                        var e = location.search,
                            n = o.parse(e);
                        return n && !!n.expandoffers || t.props.openByDefault
                    }, t.onToggleMenu = function(e) {
                        t.offersLoadedEvent = t.registerOffersLoadedEvent();
                        var n = t.props.offersData;
                        !n || n.loading || n.error || t.props.latencyTracking.reportCustomEvent(t.offersLoadedEvent), t.seeOffers(), e && t.setState({
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
                            group: p.a.TwitchPrime,
                            key: p.b.PrimeOfferLoaded,
                            label: p.c.Loaded,
                            start: p.d.Registration
                        })
                    }, t.getUnseenOffers = function(e) {
                        var n = e.offersData;
                        if (n && !n.loading && !n.error) {
                            var r = n.primeOffers || [],
                                i = Object(b.g)();
                            t.setState({
                                numOfUnseenOffers: r.filter(function(e) {
                                    return !(i.includes(e.id) || t.offerIsSeen(e))
                                }).length
                            })
                        }
                    }, t.seeOffers = function() {
                        var e = t.props.offersData;
                        if (e && !e.loading && !e.error) {
                            var n = (e.primeOffers || []).map(function(e) {
                                return "" + e.id
                            });
                            t.updateOfferStatus(), Object(b.k)(n)
                        }
                    }, t.updateOfferStatus = function() {
                        return a.__awaiter(t, void 0, void 0, function() {
                            var e, t, n, i, o, s, c, l;
                            return a.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        if (e = this.props.userData, !(t = e.currentUser && e.currentUser.id)) return [2];
                                        n = this.props.offersData.primeOffers || [], i = n.map(function(e) {
                                            return {
                                                offerID: e.id,
                                                status: b.a.Seen
                                            }
                                        }), o = Object(m.a)({
                                            userID: t,
                                            statusChanges: i
                                        }), a.label = 1;
                                    case 1:
                                        return a.trys.push([1, 3, , 4]), [4, this.props.updatePrimeOfferStatus(o)];
                                    case 2:
                                        return s = a.sent(), (c = s.updatePrimeOfferStatus && s.updatePrimeOfferStatus.error) && c.code ? (l = r[c.code], this.setState({
                                            updated: !1,
                                            error: l || r.UNKNOWN
                                        }), [2]) : s.updatePrimeOfferStatus && s.updatePrimeOfferStatus.self ? (this.setState({
                                            updated: !0,
                                            error: void 0
                                        }), [3, 4]) : (this.setState({
                                            updated: !1,
                                            error: r.UNKNOWN
                                        }), [2]);
                                    case 3:
                                        return a.sent(), this.setState({
                                            updated: !1,
                                            error: r.UNKNOWN
                                        }), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, t.renderOfferList = function() {
                        var e = t.props.offersData,
                            n = t.showOffersByDefault() || !1,
                            r = e && !e.loading && !e.error;
                        return t.offersLoadedEvent && r && t.props.latencyTracking.reportCustomEvent(t.offersLoadedEvent), r || n ? s.createElement(h._8, {
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
                    var e = this.props.userData && this.props.userData.requestInfo && Object(u.a)(this.props.userData.requestInfo.countryCode),
                        t = this.props.userData && this.props.userData.currentUser && this.props.userData.currentUser.hasPrime;
                    if (!e && !t) return null;
                    var n = {
                        align: h._50.Center,
                        direction: h._51.Bottom,
                        label: ""
                    };
                    return this.state.numOfUnseenOffers > 0 ? n.label = Object(c.d)("New Prime Loot", "PrimeOffers") : n.label = Object(c.d)("Prime Loot", "PrimeOffers"), s.createElement(h._8, {
                        className: "prime-offers",
                        position: h._15.Relative
                    }, s.createElement(l.a, {
                        onToggle: this.onToggleMenu,
                        openByDefault: this.showOffersByDefault(),
                        tooltipProps: n
                    }, s.createElement(v.a, {
                        onHover: this.onHover
                    }, s.createElement(h.w, {
                        ariaLabel: Object(c.d)("Prime offers", "PrimeOffers"),
                        overlay: !0,
                        size: h.x.Large,
                        icon: h._23.Crown,
                        "data-a-target": "prime-offers-icon",
                        "data-target": "prime-offers-icon"
                    })), s.createElement(h.q, {
                        direction: h.r.BottomRight,
                        size: h.s.Large,
                        offsetX: "9px"
                    }, this.renderOfferList())), this.renderUnseenOffersDisplay())
                }, t.prototype.offerIsSeen = function(e) {
                    return e.self && e.self.status === b.a.Seen
                }, t.prototype.renderUnseenOffersDisplay = function() {
                    var e = this.state.numOfUnseenOffers;
                    if (e && !this.state.error) return s.createElement(h._8, {
                        className: "prime-offers__pill",
                        position: h._15.Absolute
                    }, s.createElement(h.e, {
                        type: h.j.BounceIn,
                        duration: h.g.Medium,
                        timing: h.i.EaseIn,
                        enabled: e > 0
                    }, s.createElement(h._12, {
                        label: e.toString(),
                        type: h._13.Notification
                    })))
                }, t = a.__decorate([Object(d.a)(y, {
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
                }), Object(d.a)(S, {
                    name: "userData"
                }), Object(d.a)(O, {
                    name: "updatePrimeOfferStatus"
                }), Object(f.d)("PrimeOffers", {
                    autoReportInteractive: !0
                })], t)
            }(s.Component);
        var N = Object(i.b)(function(e) {
                return {
                    firstPageLoaded: !!e.session.firstPageLoaded
                }
            })(E),
            D = n("lfvs"),
            C = n("Hs3O"),
            P = (n("ukY1"), n("F1v6")),
            T = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = this.props.data.currentUser && this.props.data.currentUser.hasPrime,
                        t = this.props.data.requestInfo && this.props.data.requestInfo.countryCode;
                    if (!Object(b.l)(e, t)) return null;
                    if (this.props.data.loading) return null;
                    var n = Object(C.d)(C.a, ""),
                        r = Object(c.d)("Twitch Prime", "BlueBar"),
                        i = s.createElement("span", null, Object(c.d)("Free loot every month, plus exclusives and surprises, ad-free viewing, and loads more.", "BlueBar")),
                        a = Object(C.d)(C.a, ""),
                        o = Object(c.d)("Start Your Free Trial", "BlueBar");
                    if (!this.props.data.loading && !this.props.data.error) {
                        var l = this.props.data;
                        l && l.primePromotions && l.primePromotions.forEach(function(e) {
                            switch (e.id) {
                                case "twitch.prime.bluebar.left1":
                                    n = e.externalURL, r = e.text;
                                    break;
                                case "twitch.prime.bluebar.center1":
                                    i = s.createElement(D, {
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
                    return s.createElement(h._32, {
                        color: h.K.Base,
                        className: "blue-bar",
                        position: h._15.Relative,
                        fullWidth: !0,
                        zIndex: h._59.Above
                    }, s.createElement(h._8, {
                        className: "blue-bar__bar",
                        display: h.R.Flex,
                        alignItems: h.c.Center,
                        justifyContent: h._7.Between,
                        flexWrap: h.U.NoWrap,
                        margin: "auto",
                        padding: {
                            x: 2,
                            y: .5
                        }
                    }, s.createElement(h._8, {
                        display: h.R.InlineFlex,
                        alignItems: h.c.Center,
                        padding: {
                            right: .5
                        }
                    }, s.createElement(h._8, {
                        className: "blue-bar__logo",
                        display: h.R.InlineFlex,
                        margin: {
                            right: .5
                        },
                        flexShrink: 0
                    }, s.createElement(h._22, {
                        asset: h._23.Crown,
                        width: 20,
                        height: 13
                    })), s.createElement(h.Q, {
                        bold: !0,
                        type: h._46.Span,
                        noWrap: !0,
                        fontSize: h.V.Size6
                    }, s.createElement(h._2, {
                        padding: {
                            x: 1
                        }
                    }, s.createElement("a", {
                        className: "blue-bar__link",
                        href: n,
                        target: "_blank",
                        rel: "noopener noreferrer"
                    }, r))), s.createElement(h.Q, {
                        className: "blue-bar__headline",
                        type: h._46.Span,
                        fontSize: h.V.Size6
                    }, i)), s.createElement(h._8, {
                        display: h.R.InlineFlex,
                        flexShrink: 0
                    }, s.createElement(h.Q, {
                        bold: !0,
                        type: h._46.Span,
                        noWrap: !0,
                        fontSize: h.V.Size6,
                        color: h.K.Base
                    }, s.createElement("a", {
                        className: "blue-bar__link",
                        href: a,
                        target: "_blank",
                        rel: "noopener noreferrer"
                    }, o)))))
                }, t = a.__decorate([Object(d.a)(P, {
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
            I = n("dnng");
        n.d(t, "c", function() {
            return N
        }), n.d(t, "a", function() {
            return T
        }), n.d(t, "b", function() {
            return I.a
        }), n.d(t, "d", function() {
            return b.e
        }), n.d(t, !1, function() {
            return b.c
        })
    },
    9856: function(e, t) {},
    AGQo: function(e, t, n) {
        "use strict";
        var r, i = n("TToO"),
            a = n("GiK3");
        ! function(e) {
            e.PrimeTrackingButtonWrapper = "test_selector_prime_tracking_button_wrapper"
        }(r || (r = {}));
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
                        "data-test-selector": r.PrimeTrackingButtonWrapper,
                        onMouseEnter: this.onMouseEnter,
                        onMouseLeave: this.onMouseLeave,
                        onClick: this.onClick
                    }, this.props.children)
                }, t
            }(a.Component);
        n.d(t, !1, function() {
            return r
        }), n.d(t, "a", function() {
            return s
        })
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
    Hs3O: function(e, t, n) {
        "use strict";
        n.d(t, "b", function() {
            return i
        }), n.d(t, "a", function() {
            return a
        }), n.d(t, "c", function() {
            return o
        }), t.d = function(e, t) {
            var n = r.b.get(s, "https://twitch.amazon.com/prime"),
                i = "";
            try {
                i = btoa(t)
            } catch (e) {
                c.error(e, "Could not decode location pathname substring for redirect")
            }
            return i ? n + "?ref_=" + e + "&redirectRoute=" + i : n + "?ref_=" + e
        };
        var r = n("6sO2"),
            i = "sm_tw_tup_ntp_t_all",
            a = "sm_tw_thp_blue_t_all",
            o = "sm_w_tup_ntp_t_c",
            s = "prime_landing_page_base_url",
            c = r.j.withCategory("PrimeUtilsLogger")
    },
    JJaH: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), n.d(t, "BUTTON_SELECTOR", function() {
            return h
        }), n.d(t, "PrimeSubscribeButton", function() {
            return _
        });
        var r = n("TToO"),
            i = n("GiK3"),
            a = (n.n(i), n("3zLD")),
            o = (n.n(a), n("6sO2")),
            s = n("7vx8"),
            c = n("oIkB"),
            l = n("CSlQ"),
            d = n("CwIZ"),
            u = n("8PKe"),
            m = n("R0Kh"),
            p = n("Odds"),
            f = n("iQti"),
            v = (n.n(f), n("81fF")),
            h = (n.n(v), "subscribe-button__prime-subscribe"),
            g = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        isSubscribing: !1,
                        primeSubFailure: !1,
                        error: void 0
                    }, t.handleStartPrimeTrialClick = function() {
                        t.props.reportSubMenuAction({
                            action: d.a.ClickSignupForPrime
                        })
                    }, t.getErrorType = function() {
                        return t.state.error || m.b.UNABLE_TO_SPEND
                    }, t.spendPrimeCredit = function() {
                        if (t.isReadyForSubCreditSpend(t.props)) {
                            var e = t.props.data.user ? t.props.data.user.id : "",
                                n = t.props.data.currentUser ? t.props.data.currentUser.id : "";
                            t.setState({
                                isSubscribing: !0
                            });
                            var r = Object(c.a)({
                                broadcasterID: e,
                                userID: n
                            });
                            t.props.spendPrimeSubscriptionCredit(r).then(function(e) {
                                var n = e.data || {},
                                    r = n.userID || {},
                                    i = n.error || null;
                                if (r && !i && (t.props.onSubscribedWithPrime(), t.updateUserDataSuccessfulSpend(t.props, e), t.setState({
                                        isSubscribing: !1,
                                        primeSubFailure: !1,
                                        error: void 0
                                    })), i && i.code) {
                                    var a = m.b[i.code];
                                    t.setState({
                                        isSubscribing: !1,
                                        primeSubFailure: !0,
                                        error: a || m.b.UNABLE_TO_SPEND
                                    })
                                }
                            }).catch(function() {
                                t.setState({
                                    isSubscribing: !1,
                                    primeSubFailure: !0,
                                    error: m.b.UNABLE_TO_SPEND
                                })
                            })
                        }
                    }, t
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    if (!this.isUserDataReady(this.props)) return null;
                    var e = this.isSubscribed(this.props),
                        t = this.canPrimeSubscribe(this.props),
                        n = this.canResub(this.props);
                    if (!this.props.data.currentUser || !this.props.data.currentUser.hasPrime) {
                        var a = Object(o.d)("Start Your Free Trial", "PrimeSubscribe");
                        return i.createElement(p.v, r.__assign({
                            ariaLabel: a,
                            "data-test-selector": h,
                            icon: p._23.Crown,
                            linkTo: o.a.tryPrimeURI,
                            onClick: this.handleStartPrimeTrialClick
                        }, Object(p._60)(this.props), {
                            targetBlank: !0
                        }), a)
                    }
                    if (e && !n) {
                        var s = Object(o.d)("Subscribed", "PrimeSubscribe");
                        return i.createElement(p.v, r.__assign({
                            ariaLabel: s,
                            "data-test-selector": h,
                            disabled: !0,
                            icon: p._23.Crown
                        }, Object(p._60)(this.props)), s)
                    }
                    if (!t) {
                        var c = Object(o.d)("Not yet!", "PrimeSubscribe");
                        return i.createElement(p.v, r.__assign({
                            ariaLabel: c,
                            "data-test-selector": h,
                            disabled: !0,
                            icon: p._23.Crown
                        }, Object(p._60)(this.props)), c)
                    }
                    if (this.state.primeSubFailure) {
                        var l = this.getErrorType();
                        return i.createElement(u.b, {
                            fontSize: p.V.Size6,
                            testTarget: "prime-sub-error",
                            errorType: l
                        })
                    }
                    var d = n ? Object(o.d)("Resubscribe Free", "PrimeSubscribe") : Object(o.d)("Subscribe Free", "PrimeSubscribe");
                    return i.createElement(p.v, r.__assign({
                        ariaLabel: d,
                        "data-test-selector": h,
                        disabled: this.state.isSubscribing,
                        icon: p._23.Crown,
                        state: this.state.isSubscribing ? p.A.Loading : p.A.Default,
                        onClick: this.spendPrimeCredit
                    }, Object(p._60)(this.props)), d)
                }, t.prototype.isUserDataReady = function(e) {
                    return e.data && e.data.user && !e.data.loading && !e.data.error
                }, t.prototype.canPrimeSubscribe = function(e) {
                    return e.data && e.data.user && e.data.user.self && e.data.user.self.canPrimeSubscribe
                }, t.prototype.isSubscribed = function(e) {
                    return e.data && e.data.user && e.data.user.self && e.data.user.self.subscriptionBenefit
                }, t.prototype.canResub = function(e) {
                    return e.data && e.data.user && e.data.user.self && e.data.user.self.subscriptionBenefit && e.data.user.self.subscriptionBenefit.purchasedWithPrime && this.canPrimeSubscribe(this.props)
                }, t.prototype.isReadyForSubCreditSpend = function(e) {
                    var t = e.data || {};
                    return this.isUserDataReady(e) && t.currentUser && t.currentUser.id && t.user && t.user.id
                }, t.prototype.updateUserDataSuccessfulSpend = function(e, t) {
                    e.data && e.data.user && e.data.user.self && (e.data.user.self.canPrimeSubscribe = !1, t.data.subscriptionBenefit && (e.data.user.self.subscriptionBenefit = t.data.subscriptionBenefit))
                }, t
            }(i.Component),
            _ = Object(a.compose)(Object(l.d)("PrimeSubscribe", {
                autoReportInteractive: !0
            }), Object(s.a)(v, {
                options: function(e) {
                    return {
                        fetchPolicy: "network-only",
                        variables: {
                            login: e.channelLogin
                        }
                    }
                },
                skip: function(e) {
                    return !e.channelLogin
                }
            }), Object(s.a)(f, {
                name: "spendPrimeSubscriptionCredit"
            }))(g)
    },
    LXDe: function(e, t, n) {
        "use strict";
        var r;
        n.d(t, "a", function() {
                return r
            }),
            function(e) {
                e.Game = "Game", e.InGameLoot = "InGameLoot", e.All = "All"
            }(r || (r = {}))
    },
    Lpko: function(e, t, n) {
        "use strict";
        var r = n("RH2O"),
            i = n("TToO"),
            a = n("GiK3"),
            o = n("6sO2"),
            s = n("zCIC"),
            c = n("7vx8"),
            l = n("CSlQ"),
            d = n("Odds"),
            u = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = Object(o.d)("You'll get characters, vehicles, skins, and boosts for games like {hearthstone} and {smite}, plus surprises like a rotating selection of indie games.", {
                        hearthstone: a.createElement(d.Q, {
                            italic: !0,
                            type: d._46.Span
                        }, Object(o.d)("Hearthstone", "PrimeEmpty")),
                        smite: a.createElement(d.Q, {
                            italic: !0,
                            type: d._46.Span
                        }, Object(o.d)("Smite", "PrimeEmpty"))
                    }, "PrimeEmpty");
                    return a.createElement(d._8, {
                        className: "prime-empty",
                        margin: 2
                    }, a.createElement(d._8, {
                        textAlign: d._42.Center,
                        margin: 2
                    }, a.createElement("img", {
                        className: "prime-empty__image",
                        src: "https://m.media-amazon.com/images/G/01/sm/landing/Trunk_w_Star_transparent._V530838660_.png",
                        alt: Object(o.d)("Prime Treasure Chest", "PrimeEmpty")
                    })), a.createElement(d.Q, {
                        type: d._46.P,
                        bold: !0
                    }, Object(o.d)("Free in-game loot every month, plus surprises", "PrimeEmpty")), a.createElement("div", null, e))
                }, t = i.__decorate([Object(l.d)("PrimeEmpty")], t)
            }(a.Component),
            m = n("lfvs"),
            p = n("oIkB"),
            f = n("AGQo"),
            v = n("Tr7p"),
            h = n("R0Kh"),
            g = (n("w/8h"), n("sq7i")),
            _ = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onClick = function(e) {
                        Object(v.d)({
                            offerID: t.props.offerID,
                            externalURL: t.props.externalURL,
                            hasPrime: !0,
                            index: t.props.index
                        }, t.props.offerType), t.props.claimCallback && t.props.offerType !== h.d.EXTERNAL_OFFER && t.props.claimCallback(e)
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
                    var e = this.props.orientation || h.c.Default,
                        t = h.h(e),
                        n = h.f("prime-claim-button", e);
                    return a.createElement(d._8, {
                        fullWidth: !0,
                        className: n,
                        display: t ? d.R.Block : d.R.InlineBlock
                    }, this.getClaimButton())
                }, t.prototype.getClaimButton = function() {
                    var e = this.props,
                        t = this.getButtonText(),
                        n = a.createElement(f.a, {
                            onHover: this.onHover
                        }, a.createElement(d.v, {
                            fullWidth: !0,
                            state: this.props.claiming ? d.A.Loading : d.A.Default,
                            disabled: this.props.claiming,
                            onClick: this.onClick,
                            "data-a-target": "prime-claim-button"
                        }, t));
                    return e.offerType === h.d.EXTERNAL_OFFER ? a.createElement(f.a, {
                        onHover: this.onHover
                    }, a.createElement(d.v, {
                        fullWidth: !0,
                        linkTo: e.externalURL,
                        targetBlank: !0,
                        onClick: this.onClick
                    }, t)) : a.createElement(d._8, {
                        position: d._15.Relative
                    }, n)
                }, t.prototype.getButtonText = function() {
                    var e = Object(o.d)("Learn More", "PrimeClaimButton");
                    if (this.props.externalURL) return e;
                    switch (this.props.offerType) {
                        case h.d.CLAIM_CODE:
                            return Object(o.d)("Get Code", "PrimeClaimButton");
                        case h.d.EXTERNAL_OFFER:
                            return e;
                        case h.d.DIRECT_ENTITLEMENT:
                        default:
                            return Object(o.d)("Claim Offer", "PrimeClaimButton")
                    }
                }, t = i.__decorate([Object(c.a)(g), Object(l.d)("PrimeClaimButton")], t)
            }(a.Component),
            k = (n("zAvr"), function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.toggleShowDescription = function() {
                        var e = !n.state.showDescription;
                        Object(v.g)(e, {
                            offerID: n.props.offerID,
                            externalURL: n.props.externalURL,
                            hasPrime: n.props.hasPrime,
                            index: n.props.index
                        }), n.setState({
                            showDescription: e
                        })
                    }, n.onHover = function() {
                        n.state.showDescription ? Object(v.f)({
                            offerID: n.props.offerID,
                            externalURL: n.props.externalURL,
                            hasPrime: n.props.hasPrime,
                            index: n.props.index
                        }) : Object(v.h)({
                            offerID: n.props.offerID,
                            externalURL: n.props.externalURL,
                            hasPrime: n.props.hasPrime,
                            index: n.props.index
                        })
                    }, n.state = {
                        showDescription: !1
                    }, n
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = this.props.orientation || h.c.Default,
                        t = Object(h.f)("prime-claim-description", e);
                    return a.createElement(d._8, {
                        fullWidth: !0,
                        className: t,
                        margin: {
                            top: 1
                        }
                    }, a.createElement(f.a, {
                        onHover: this.onHover
                    }, a.createElement(d.v, {
                        "data-a-target": "prime-claim-description-button",
                        fullWidth: !0,
                        type: d.B.Hollow,
                        onClick: this.toggleShowDescription
                    }, this.getDescriptionButtonText())), this.getDescriptionBlock(e))
                }, t.prototype.getDescriptionButtonText = function() {
                    return this.state.showDescription ? Object(o.d)("Close Info", "PrimeClaimDescription") : Object(o.d)("More Info", "PrimeClaimDescription")
                }, t.prototype.getDescriptionBlock = function(e) {
                    var t = null,
                        n = Object(h.h)(e);
                    return this.state.showDescription && (t = a.createElement(d._32, {
                        className: "prime-claim-description__body",
                        background: n ? d.n.Alt2 : d.n.Base,
                        border: !0,
                        position: n ? d._15.Relative : d._15.Absolute
                    }, a.createElement(d._8, {
                        "data-a-target": "prime-claim-description-body",
                        margin: {
                            bottom: 2
                        },
                        padding: 1
                    }, a.createElement(m, {
                        source: this.props.description || ""
                    })))), t
                }, t = i.__decorate([Object(l.d)("PrimeClaimDescription")], t)
            }(a.Component)),
            b = n("Hs3O"),
            O = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onClick = function() {
                        Object(v.k)({
                            offerID: t.props.offerID,
                            externalURL: t.getLink(),
                            hasPrime: !1,
                            index: t.props.index
                        })
                    }, t.onHover = function() {
                        Object(v.l)({
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
                    return a.createElement(d._8, {
                        className: "prime-upsell-button",
                        margin: {
                            top: 2,
                            bottom: 1
                        }
                    }, a.createElement(f.a, {
                        onHover: this.onHover
                    }, a.createElement(d.v, {
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
            y = n("4VmI"),
            S = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = this.props.orientation || h.c.Default,
                        t = Object(h.f)("prime-claim", e);
                    return a.createElement(d._8, {
                        className: t,
                        margin: {
                            bottom: 1
                        }
                    }, this.getCallToAction(), this.getClaimDescriptionSection())
                }, t.prototype.getCallToAction = function() {
                    var e = this.props.data;
                    return Object(h.j)(e) ? a.createElement(_, {
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
                    if (this.props.offerType === h.d.EXTERNAL_OFFER) return null;
                    var e = this.props.data;
                    return a.createElement(k, {
                        description: this.props.offerDescription,
                        offerID: this.props.offerID,
                        externalURL: this.props.externalURL,
                        index: this.props.index,
                        orientation: this.props.orientation,
                        hasPrime: Object(h.j)(e)
                    })
                }, t = i.__decorate([Object(c.a)(y), Object(l.d)("PrimeInstructions")], t)
            }(a.Component),
            E = n("dnng"),
            N = (n("nFc2"), function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.setRef = function(e) {
                        n.setState({
                            clipboardInput: e
                        })
                    }, n.copy = function() {
                        var e;
                        try {
                            n.state.clipboardInput && n.state.clipboardInput.select(), e = document.execCommand("copy")
                        } catch (t) {
                            e = !1
                        }
                        return n.setState({
                            copied: e
                        }), e
                    }, n.state = {
                        copied: !1,
                        clipboardInput: null
                    }, n
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = this.state.copied ? Object(o.d)("copied", "CopyButton") : Object(o.d)("copy", "CopyButton");
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
                    })), a.createElement(d._8, null, a.createElement(N, {
                        clipboardText: this.state.value
                    }))) : null
                }, t = i.__decorate([Object(l.d)("CopyableItem")], t)
            }(a.Component),
            C = (n("yqdF"), function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.getClaimInstructions = function() {
                        return a.createElement(d._55, null, a.createElement(m, {
                            source: n.props.claimInstructions || "",
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
                    }, n.renderVerticalLayout = function() {
                        return a.createElement(d._32, {
                            className: "prime-claim-instructions prime-claim-instructions--vertical",
                            background: d.n.Alt2,
                            border: !0,
                            padding: 1,
                            fontSize: d.V.Size6
                        }, n.getClaimInstructions())
                    }, n.renderHorizontalLayout = function() {
                        return a.createElement(d._32, {
                            fullWidth: !0,
                            className: "prime-claim-instructions prime-claim-instructions--horizontal",
                            margin: {
                                top: 1
                            }
                        }, a.createElement(d.v, {
                            fullWidth: !0,
                            type: d.B.Text,
                            onClick: n.toggleShowDescription
                        }, n.getDescriptionButtonText()), n.state.showDescription && a.createElement(d._32, {
                            className: "prime-claim-instructions__body",
                            border: !0,
                            position: d._15.Absolute,
                            padding: 1,
                            background: d.n.Alt,
                            overflow: d._11.Scroll
                        }, n.getClaimInstructions()))
                    }, n.toggleShowDescription = function() {
                        n.setState({
                            showDescription: !n.state.showDescription
                        })
                    }, n.getDescriptionButtonText = function() {
                        return n.state.showDescription ? Object(o.d)("Close Info", "PrimeClaimInstruction") : Object(o.d)("Click here for Claim Instructions", "PrimeClaimInsctuction")
                    }, n.state = {
                        showDescription: !1
                    }, n
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = this.props.orientation || h.c.Default;
                    return Object(h.h)(e) ? this.renderVerticalLayout() : this.renderHorizontalLayout()
                }, t = i.__decorate([Object(l.d)("PrimeClaimInstructions", {
                    autoReportInteractive: !0
                })], t)
            }(a.Component)),
            P = (n("S5wX"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.getPrimeClaimInstructions = function() {
                        if (t.props.claimInstructions) return a.createElement(C, {
                            claimInstructions: t.props.claimInstructions || "",
                            orientation: t.props.orientation
                        })
                    }, t
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = this.props.orientation || h.c.Default,
                        t = Object(h.f)("prime-redeem", e);
                    return a.createElement(d._8, {
                        className: t
                    }, this.getCodeOrConfirmation(e), this.getPrimeClaimInstructions())
                }, t.prototype.getCodeOrConfirmation = function(e) {
                    var t = Object(h.h)(e);
                    if (this.props.code && this.props.deliveryMethod === h.d.CLAIM_CODE) return a.createElement(d._8, null, a.createElement(D, {
                        initialText: this.props.code,
                        readOnly: !0,
                        textCenter: !0
                    }));
                    var n = t ? 1 : 0;
                    return a.createElement(d._32, {
                        border: !t,
                        display: d.R.Flex,
                        justifyContent: d._7.Center,
                        margin: {
                            bottom: n
                        },
                        padding: {
                            y: n
                        },
                        className: "prime-redeem__confirmation"
                    }, a.createElement(d.Q, {
                        type: t ? d._46.H4 : d._46.H6,
                        align: d._56.Middle,
                        color: d.K.Overlay
                    }, a.createElement(d._8, {
                        display: d.R.InlineFlex,
                        flexGrow: 1,
                        flexWrap: d.U.NoWrap,
                        alignItems: d.c.Center,
                        "data-test-target": "prime-redeem-check",
                        "data-a-target": "prime-redeem-check",
                        padding: {
                            left: n
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
                    }, a.createElement(d._22, {
                        asset: d._23.Check,
                        width: 20,
                        height: 20
                    })), Object(o.d)("Added To Your Twitch Account", "PrimeRedeem"))))
                }, t = i.__decorate([Object(l.d)("PrimeRedeem")], t)
            }(a.Component)),
            T = n("/3Cb"),
            I = (n("v+rJ"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        claimed: !1,
                        claiming: !1,
                        error: void 0,
                        claimData: void 0,
                        status: void 0
                    }, t.renderVerticalLayout = function(e) {
                        var n = t.props.isLast || !1,
                            r = e.content || {},
                            i = r.game || {},
                            o = r.categories || [];
                        return a.createElement(d._32, {
                            "data-a-target": "prime-offer",
                            className: "prime-offer prime-offer--vertical",
                            alignItems: d.c.Center,
                            display: d.R.Block,
                            borderBottom: !n,
                            textAlign: d._42.Left,
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
                        }, a.createElement(m, {
                            className: "prime-offer__title__markdown",
                            containerTagName: "h4",
                            source: e.title || ""
                        })), a.createElement("img", {
                            src: e.imageURL
                        }), a.createElement(d._32, {
                            margin: {
                                bottom: 2
                            }
                        }, a.createElement(d._8, {
                            className: "prime-offer__description",
                            padding: {
                                top: .5
                            }
                        }, a.createElement(d.Q, {
                            type: d._46.P
                        }, i.name, " ", o[0])), a.createElement(d._8, {
                            className: "prime-offer__publisher"
                        }, a.createElement(d.Q, {
                            type: d._46.P,
                            color: d.K.Alt2,
                            fontSize: d.V.Size7
                        }, r.publisher))), t.renderRedeemUpsellOrClaimSection(e))
                    }, t.renderHorizontalLayout = function(e) {
                        var n = e.content || {},
                            r = n.game || {},
                            i = n.categories || [];
                        return a.createElement(d._32, {
                            "data-a-target": "prime-offer",
                            className: "prime-offer prime-offer--horizontal",
                            alignItems: d.c.Center,
                            display: d.R.InlineBlock,
                            textAlign: d._42.Left,
                            position: d._15.Relative,
                            padding: {
                                right: 1,
                                y: .5
                            }
                        }, a.createElement(d._32, {
                            className: "prime-offer__content"
                        }, a.createElement(d._32, {
                            className: "prime-offer__content__text",
                            background: d.n.Base
                        }, a.createElement(d._8, {
                            className: "prime-offer__publisher"
                        }, a.createElement(d.Q, {
                            type: d._46.P,
                            color: d.K.Alt2,
                            fontSize: d.V.Size7
                        }, n.publisher)), a.createElement(d._8, {
                            className: "prime-offer__title",
                            alignItems: d.c.Start
                        }, a.createElement(m, {
                            className: "prime-offer__title__markdown",
                            containerTagName: "h4",
                            source: e.title || ""
                        })), a.createElement(d._8, {
                            className: "prime-offer__description"
                        }, a.createElement(d.Q, {
                            type: d._46.P,
                            color: d.K.Alt2
                        }, r.name, " ", i[0]))), a.createElement("img", {
                            src: e.imageURL
                        })), t.renderRedeemUpsellOrClaimSection(e))
                    }, t.renderRedeemUpsellOrClaimSection = function(e) {
                        var n = e.content || {},
                            r = e.self || {
                                claimData: ""
                            },
                            i = t.props.data || {};
                        if (t.state.error) {
                            var o = t.getErrorType();
                            return a.createElement(E.a, {
                                fontSize: d.V.Size6,
                                testTarget: "prime-offer-error",
                                errorType: o
                            })
                        }
                        if ((t.isCurrentOfferClaimed(e) || t.state.claimed) && Object(h.j)(i)) {
                            var s = t.state.claimData || r.claimData;
                            return a.createElement(P, {
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
                            externalURL: n.externalURL,
                            claimCallback: t.claimOffer,
                            claiming: t.state.claiming,
                            index: t.props.index,
                            orientation: t.props.orientation
                        })
                    }, t.getErrorType = function() {
                        return t.state.error || h.b.UNKNOWN_ERROR
                    }, t.claimOffer = function(e) {
                        e.nativeEvent.stopImmediatePropagation(), t.setState({
                            claiming: !0
                        });
                        var n = t.props.data;
                        if (!n.loading && !n.error && n.currentUser && n.currentUser.id) {
                            var r = t.props.offer,
                                i = Object(p.a)({
                                    offerID: r.id
                                });
                            t.props.claimPrimeOffer(i).then(function(e) {
                                var n = (e.data || {}).claimPrimeOffer || {},
                                    i = n.self || {},
                                    a = n.error || {};
                                if (i && i.hasEntitlement && r && t.setState({
                                        claimData: i.claimData,
                                        claiming: !1,
                                        claimed: !0,
                                        error: void 0
                                    }), a && a.code) {
                                    var o = h.b[a.code];
                                    t.setState({
                                        claiming: !1,
                                        claimed: !1,
                                        error: o || h.b.UNKNOWN_ERROR
                                    })
                                }
                            }).catch(function() {
                                t.setState({
                                    claiming: !1,
                                    claimed: !1,
                                    error: h.b.UNKNOWN_ERROR
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
                        var t = this.props.orientation || h.c.Default;
                        return h.h(t) ? this.renderVerticalLayout(e) : this.renderHorizontalLayout(e)
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
            x = (n("WC9X"), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = this.props.orientation || h.c.Default,
                        t = Object(h.h)(e);
                    return a.createElement(d._32, {
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
                }, t = i.__decorate([Object(l.d)("PrimeOfferPlaceholder")], t)
            }(a.Component)),
            L = (n("7L7x"), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return a.createElement(d._32, {
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
                        type: d._46.H4
                    }, Object(o.d)("Claim With Twitch Prime", "PrimeUpsell")), a.createElement(d._8, {
                        className: "prime-upsell__logo-container",
                        fullWidth: !0,
                        margin: {
                            y: 2
                        },
                        textAlign: d._42.Center
                    }, a.createElement(d._22, {
                        asset: d._23.LogoTwitchPrime,
                        width: 330,
                        height: 150,
                        type: d._24.Brand
                    })), a.createElement(d.Q, {
                        type: d._46.P
                    }, Object(o.d)("Get free game loot like this every month plus surprises, ad-free viewing, and loads more with Twitch Prime.", "PrimeUpsell")), a.createElement(O, null))
                }, t = i.__decorate([Object(l.d)("PrimeUpsell")], t)
            }(a.Component)),
            F = n("LXDe"),
            R = n("eY4D"),
            U = (n("DgR+"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.getOfferListOrientation = function() {
                        return t.props.listDirection || h.c.Default
                    }, t.shouldShowPlaceholders = function() {
                        if (!t.props.offersData) return !0;
                        var e = t.props.offersData,
                            n = e.primeOffers,
                            r = void 0 === n || null === n;
                        return e.loading || !e.error && r
                    }, t.renderOfferPlaceholders = function() {
                        for (var e = [], n = 0; n < 3; ++n) {
                            var r = a.createElement(x, {
                                key: n,
                                orientation: t.getOfferListOrientation()
                            });
                            e.push(r)
                        }
                        return e
                    }, t
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    var e = this.getOfferListOrientation(),
                        t = e.toLowerCase(),
                        n = Object(h.f)("prime-offer-list", e),
                        r = "prime-offer-list__content prime-offer-list__content--" + t,
                        i = this.props.listDirection === h.c.Horizontal,
                        o = this.props.listDirection === h.c.Vertical;
                    return a.createElement(s.b, {
                        className: n,
                        suppressScrollX: o,
                        suppressScrollY: i
                    }, a.createElement(d._8, {
                        className: r,
                        alignItems: d.c.Center,
                        padding: {
                            top: 1,
                            bottom: 2,
                            x: 1
                        }
                    }, this.renderUpsell(), this.renderOfferExperience()))
                }, t.prototype.renderUpsell = function() {
                    var e = this.props.userData;
                    if (!Object(h.i)(e) && !Object(h.j)(e) && !this.props.hideUpsell) return a.createElement(L, null)
                }, t.prototype.renderOfferExperience = function() {
                    var e = this,
                        t = this.props.offersData;
                    if (this.shouldShowPlaceholders()) return this.renderOfferPlaceholders();
                    if (!t.error && t.primeOffers && t.primeOffers.length) {
                        var n = this.getSortedOffers(),
                            r = n[n.length - 1];
                        return n.map(function(t, n) {
                            return a.createElement(I, {
                                externalReftag: e.props.externalReftag,
                                key: t.id,
                                offer: t,
                                isLast: r.id === t.id,
                                index: n,
                                orientation: e.getOfferListOrientation()
                            })
                        })
                    }
                    return a.createElement(u, null)
                }, t.prototype.getFreeGamesWithPrimeOfferIds = function() {
                    return o.b.get("prime_free_game_offerids", [])
                }, t.prototype.getSortedOffers = function() {
                    var e = this.getUserId();
                    if (!this.props.offersData || !this.props.offersData.primeOffers) return [];
                    var t = this.props.offersData.primeOffers;
                    if (e) {
                        var n = t.filter(function(e) {
                                return e.self && e.self.hasEntitlement
                            }).sort(h.m),
                            r = this.filterOffersByOfferType(n),
                            i = t.filter(function(e) {
                                return !e.self || !e.self.hasEntitlement
                            }).sort(h.m);
                        return this.filterOffersByOfferType(i).concat(r)
                    }
                    return this.filterOffersByOfferType(t).slice().sort(h.m)
                }, t.prototype.filterOffersByOfferType = function(e) {
                    var t = this.getFreeGamesWithPrimeOfferIds();
                    return this.props.offerFilterType === F.a.Game ? e.filter(function(e) {
                        return t.includes(e.id)
                    }).sort(h.m) : this.props.offerFilterType === F.a.InGameLoot ? e.filter(function(e) {
                        return !t.includes(e.id)
                    }).sort(h.m) : e
                }, t.prototype.getUserId = function() {
                    var e = this.props.userData;
                    return e && !e.loading && !e.error && e.currentUser && e.currentUser.id ? e.currentUser.id : ""
                }, t = i.__decorate([Object(c.a)(R, {
                    name: "offersData",
                    options: function() {
                        return {
                            variables: {
                                dateOverride: Object(h.e)()
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
        var j = Object(r.b)(function(e) {
            return {
                firstPageLoaded: e.session.firstPageLoaded
            }
        })(U);
        n.d(t, "a", function() {
            return j
        })
    },
    R0Kh: function(e, t, n) {
        "use strict";
        n.d(t, "d", function() {
            return c
        }), n.d(t, "c", function() {
            return r
        }), n.d(t, "b", function() {
            return d
        }), n.d(t, "a", function() {
            return l
        }), n.d(t, "h", function() {
            return u
        }), n.d(t, "f", function() {
            return m
        }), n.d(t, "g", function() {
            return p
        }), n.d(t, "k", function() {
            return f
        }), n.d(t, "m", function() {
            return v
        }), n.d(t, "l", function() {
            return g
        }), n.d(t, "e", function() {
            return _
        }), n.d(t, "j", function() {
            return k
        }), n.d(t, "i", function() {
            return b
        });
        var r, i = n("HW6M"),
            a = (n.n(i), n("OAwv")),
            o = (n.n(a), n("6sO2")),
            s = n("S1vB"),
            c = {
                DIRECT_ENTITLEMENT: "DIRECT_ENTITLEMENT",
                CLAIM_CODE: "CLAIM_CODE",
                EXTERNAL_OFFER: "EXTERNAL_OFFER"
            };
        ! function(e) {
            e.Vertical = "Vertical", e.Horizontal = "Horizontal", e.Default = "Vertical"
        }(r || (r = {}));
        var l, d = {
            UNKNOWN_ERROR: "UNKNOWN_ERROR",
            OFFER_ALREADY_CLAIMED: "OFFER_ALREADY_CLAIMED",
            UNABLE_TO_SPEND: "UNABLE_TO_SPEND",
            TOO_MANY_RECENT_SPENDS: "TOO_MANY_RECENT_SPENDS"
        };
        ! function(e) {
            e.Seen = "SEEN", e.Unseen = "UNSEEN", e.Claimed = "CLAIMED"
        }(l || (l = {}));
        var u = function(e) {
                return e === r.Vertical
            },
            m = function(e, t) {
                var n = t === r.Horizontal ? "horizontal" : "vertical";
                return i(e, e + "--" + n)
            },
            p = function() {
                return h("seenOffers")
            },
            f = function(e) {
                o.l.set("seenOffers", e)
            },
            v = function(e, t) {
                return (e && (e.priority || 0 === e.priority) ? e.priority : 99999) - (t && (t.priority || 0 === t.priority) ? t.priority : 99999)
            },
            h = function(e) {
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
            k = function(e) {
                return e && !e.loading && !e.error && null !== e.currentUser && e.currentUser.hasPrime
            },
            b = function(e) {
                return e && e.loading
            }
    },
    S1vB: function(e, t, n) {
        "use strict";
        t.a = function(e) {
            var t = r.b.get("prime_blocked_regions", []);
            if (!e) return !1;
            return !t.includes(e.toUpperCase())
        };
        var r = n("6sO2")
    },
    S5wX: function(e, t) {},
    Tr7p: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return o
        }), t.b = function(e) {
            s.n.track(c.SpadeEventType.CrownInteraction, {
                has_prime: e.hasPrime,
                client_time: Date.now(),
                action: r.Hover
            })
        }, t.c = function(e, t) {
            s.n.track(c.SpadeEventType.CrownInteraction, {
                has_prime: t.hasPrime,
                client_time: Date.now(),
                action: e ? r.Open : r.Close
            })
        }, t.k = function(e) {
            u(e, i.Click, a.StartYourFreeTrial)
        }, t.l = function(e) {
            u(e, i.Hover, a.StartYourFreeTrial)
        }, t.g = function(e, t) {
            u(t, i.Click, e ? a.MoreInfo : a.CloseInfo)
        }, t.d = function(e, t) {
            d(e, i.Click, t)
        }, t.h = function(e) {
            u(e, i.Hover, a.MoreInfo)
        }, t.f = function(e) {
            u(e, i.Hover, a.CloseInfo)
        }, t.e = function(e, t) {
            d(e, i.Hover, t)
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
        var r, i, a, o, s = n("6sO2"),
            c = n("vH/s"),
            l = n("R0Kh");

        function d(e, t, n) {
            var r;
            switch (n) {
                case l.d.CLAIM_CODE:
                    r = a.GetCode;
                    break;
                case l.d.EXTERNAL_OFFER:
                    r = a.LearnMore;
                    break;
                case l.d.DIRECT_ENTITLEMENT:
                    r = a.ClaimOffer
            }
            r && u(e, t, r)
        }

        function u(e, t, n) {
            s.n.track(c.SpadeEventType.PrimeOfferInteraction, {
                client_time: Date.now(),
                offer_id: e.offerID,
                external_url: e.externalURL,
                index: e.index,
                element: n,
                action: t,
                user_agent: navigator.userAgent,
                has_prime: e.hasPrime
            })
        }! function(e) {
            e.Open = "click_open", e.Close = "click_close", e.Hover = "hover"
        }(r || (r = {})),
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
    dnng: function(e, t, n) {
        "use strict";
        var r = n("TToO"),
            i = n("GiK3"),
            a = n("F8kA"),
            o = n("6sO2"),
            s = n("CSlQ"),
            c = n("R0Kh"),
            l = n("Odds"),
            d = function(e) {
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
                return r.__extends(t, e), t.prototype.componentDidMount = function() {
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
                }, t = r.__decorate([Object(s.d)("PrimeError")], t)
            }(i.Component);
        n.d(t, "a", function() {
            return d
        })
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
        n.loc.source = {
            body: "query Prime_PrimeOfferList_PrimeOffers($dateOverride: Time) {\nprimeOffers(dateOverride: $dateOverride) {\nid\ntitle\nimageURL\nclaimInstructions\ndescription\ndeliveryMethod\npriority\ncontent {\ngame {\nid\nname\n}\nexternalURL\npublisher\ncategories\n}\nself {\nhasEntitlement\nclaimData\nstatus\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    f8UT: function(e, t) {},
    iQti: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "ChannelPage_SubscribeButton_PrimeSubscribe_SpendPrimeSubscriptionCredit"
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
                                value: "SpendSubscriptionCreditInput"
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
                            value: "spendSubscriptionCredit"
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
                                    value: "userID"
                                },
                                arguments: [],
                                directives: []
                            }, {
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
                                            value: "purchasedWithPrime"
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
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "endsAt"
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
                end: 255
            }
        };
        n.loc.source = {
            body: "mutation ChannelPage_SubscribeButton_PrimeSubscribe_SpendPrimeSubscriptionCredit($input: SpendSubscriptionCreditInput!) {\nspendSubscriptionCredit(input: $input) {\nuserID\nsubscriptionBenefit {\nid\npurchasedWithPrime\ntier\nplatform\nendsAt\n}\nerror {\ncode\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    nFc2: function(e, t) {},
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
        n.loc.source = {
            body: "query Prime_PrimeOffers_PrimeOfferIds($dateOverride: Time) {\nprimeOffers(dateOverride: $dateOverride) {\nid\nself {\nstatus\n}\n}\n}",
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
    yqdF: function(e, t) {},
    zAvr: function(e, t) {}
});
//# sourceMappingURL=features.twitch-prime.components.prime-subscribe.component-9e7b7611e449525bec46c160b9c1d023.js.map