webpackJsonp([58], {
    "+Znq": function(e, t, n) {
        "use strict";
        var r = n("jetF");
        n.d(t, "a", function() {
            return r.a
        })
    },
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
    "079T": function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n("TToO"),
            i = n("GiK3"),
            a = n("3zLD"),
            o = n("CIox"),
            s = n("F8kA"),
            l = n("6sO2"),
            c = n("bZTi"),
            p = n("CSlQ"),
            d = n("Qk3C"),
            u = n("+Znq"),
            m = n("vH/s"),
            f = n("RH2O"),
            h = n("2KeS"),
            g = n("+xm8"),
            v = n("f2i/"),
            _ = n("Aj/L"),
            O = n("HW6M"),
            k = n("rCmJ"),
            y = n("7vx8"),
            b = n("8PKe"),
            E = n("Odds"),
            N = n("icPo"),
            C = (n("9wqU"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        dropdownOpen: !1
                    }, t.onClickOut = function() {
                        t.state.dropdownOpen && t.toggleDropdown()
                    }, t.toggleDropdown = function() {
                        return t.setState(function(e) {
                            return {
                                dropdownOpen: !e.dropdownOpen
                            }
                        })
                    }, t.onLoginClick = function(e) {
                        e.preventDefault(), t.props.login()
                    }, t.onLogoutClick = function(e) {
                        e.preventDefault(), t.props.logout()
                    }, t
                }
                return r.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.reportInteractive()
                }, t.prototype.componentDidUpdate = function() {
                    this.reportInteractive()
                }, t.prototype.render = function() {
                    if (this.props.data.error) return i.createElement(b.b, null);
                    if (this.props.data.loading) return this.renderPlaceholders();
                    if (this.props.isLoggedIn) {
                        var e = O({
                            "twitch-prime-top-nav-user__dropdown--open": this.state.dropdownOpen
                        });
                        return i.createElement(E._2, {
                            className: "twitch-prime-top-nav-user__wrapper",
                            margin: {
                                right: 2
                            }
                        }, i.createElement(k.a, {
                            onClickOut: this.onClickOut,
                            className: e
                        }, i.createElement(E._8, {
                            display: E.R.Flex,
                            className: "twitch-prime-top-nav-user twitch-prime-top-nav-user--signed-in",
                            fullHeight: !0,
                            zIndex: E._62.Above
                        }, i.createElement(E._6, {
                            onClick: this.toggleDropdown,
                            "data-test-selector": "user-menu-toggle",
                            blurAfterClick: !0,
                            alpha: !0
                        }, i.createElement(E._8, {
                            display: E.R.Flex,
                            flexWrap: E.U.NoWrap,
                            alignItems: E.c.Center,
                            flexGrow: 1,
                            padding: {
                                right: 1
                            },
                            fullHeight: !0
                        }, i.createElement(E._8, {
                            margin: {
                                x: 1
                            },
                            flexShrink: 0
                        }, i.createElement(E.e, {
                            type: E.j.FadeIn,
                            duration: E.g.Long,
                            enabled: !0
                        }, i.createElement(E.m, {
                            size: 30,
                            src: this.props.data.currentUser.profileImageURL,
                            alt: "User avatar"
                        }))), i.createElement(E._8, {
                            flexGrow: 1,
                            flexShrink: 1,
                            flexDirection: E.T.Column,
                            ellipsis: !0
                        }, i.createElement(E._35, {
                            className: "twitch-prime-top-nav-user__username"
                        }, this.props.data.currentUser.displayName)), i.createElement(E._35, {
                            display: E.R.Flex,
                            flexShrink: 0,
                            className: "twitch-prime-top-nav-user__expand"
                        }, i.createElement(E._24, {
                            asset: E._25.GlyphArrDown
                        }))))), this.renderDropdown()))
                    }
                    return i.createElement(E._35, {
                        display: E.R.Flex,
                        fullHeight: !0,
                        padding: {
                            right: 1
                        },
                        className: "twitch-prime-top-nav-user"
                    }, i.createElement(E._8, {
                        display: E.R.Flex,
                        flexWrap: E.U.NoWrap,
                        margin: {
                            x: .5
                        },
                        alignItems: E.c.Center,
                        flexGrow: 1
                    }, i.createElement(E.v, {
                        onClick: this.onLoginClick
                    }, Object(l.d)("Log in", "PrimeUser"))))
                }, t.prototype.renderDropdown = function() {
                    var e = O({
                            "twitch-prime-top-nav-user__dropdown": !0,
                            "twitch-prime-top-nav-user__dropdown--open": this.state.dropdownOpen
                        }),
                        t = i.createElement(E._6, {
                            onClick: this.onLogoutClick,
                            alpha: !0
                        }, i.createElement(E._35, {
                            color: E.K.Alt,
                            display: E.R.Flex,
                            alignItems: E.c.Center,
                            padding: {
                                x: 2,
                                y: .5
                            }
                        }, i.createElement(E._8, {
                            display: E.R.Flex,
                            alignItems: E.c.Center,
                            margin: {
                                right: 1
                            }
                        }, i.createElement(E._24, {
                            asset: E._25.NavLogout,
                            height: 18,
                            width: 18
                        })), i.createElement(E.Q, null, Object(l.d)("Log Out", "PrimeUser"))));
                    return i.createElement(E._35, {
                        className: e,
                        background: E.n.Base,
                        zIndex: E._62.Below,
                        fullWidth: !0,
                        overflow: E._11.Hidden,
                        position: E._15.Absolute,
                        "data-test-selector": "dropdown-down",
                        borderLeft: this.state.dropdownOpen,
                        borderTop: this.state.dropdownOpen,
                        borderBottom: this.state.dropdownOpen,
                        borderRight: this.state.dropdownOpen
                    }, i.createElement(E._8, {
                        padding: {
                            y: 1
                        }
                    }, t))
                }, t.prototype.reportInteractive = function() {
                    this.props.data.loading && !this.props.data.error || this.props.latencyTracking.reportInteractive()
                }, t.prototype.renderPlaceholders = function() {
                    return i.createElement(E._8, null, i.createElement(E._8, {
                        className: "twitch-prime-top-nav-user",
                        display: E.R.Flex,
                        alignItems: E.c.Center,
                        justifyContent: E._7.Between,
                        fullHeight: !0,
                        padding: {
                            x: 1
                        }
                    }, i.createElement(E._8, null, i.createElement(E._14, {
                        width: 30,
                        height: 30
                    })), i.createElement(E._35, {
                        display: E.R.Flex,
                        flexShrink: 0,
                        className: "twitch-prime-top-nav-user__expand"
                    }, i.createElement(E._24, {
                        asset: E._25.GlyphArrDown,
                        type: E._26.Placeholder
                    }))))
                }, t
            }(i.Component)),
            D = Object(a.compose)(Object(y.a)(N), Object(p.d)("PrimeUser"))(C);
        var S = Object(f.b)(function(e) {
                return {
                    isLoggedIn: Object(_.d)(e)
                }
            }, function(e) {
                return Object(h.b)({
                    logout: v.g,
                    login: function() {
                        return Object(v.f)(g.a.TopNavLoginButton)
                    },
                    signup: function() {
                        return Object(v.h)(g.a.TopNavSignupButton)
                    }
                }, e)
            })(D),
            x = (n("kOVI"), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    return i.createElement(E._2, {
                        position: E._15.Fixed,
                        attachTop: !0,
                        fullWidth: !0
                    }, i.createElement("nav", {
                        className: "twitch-prime-top-nav"
                    }, i.createElement(E._8, {
                        className: "twitch-prime-top-nav__menu",
                        display: E.R.Flex,
                        alignItems: E.c.Center,
                        flexWrap: E.U.NoWrap,
                        fullHeight: !0,
                        justifyContent: E._7.Between
                    }, i.createElement(E._8, {
                        className: "twitch-prime-top-nav__menu__left",
                        display: E.R.Flex
                    }, i.createElement(E._2, {
                        display: E.R.InlineFlex,
                        alignItems: E.c.Center,
                        flexShrink: 0,
                        padding: {
                            left: .5,
                            y: 1
                        }
                    }, i.createElement(s.a, {
                        to: {
                            pathname: "/prime",
                            state: {
                                medium: m.PageviewMedium.TopNav,
                                content: m.PageviewContent.Logo
                            }
                        },
                        className: "twitch-prime-top-nav__home-link"
                    }, i.createElement(E._24, {
                        asset: E._25.LogoTwitchPrime,
                        width: 90,
                        height: 40
                    }))), i.createElement(E._8, {
                        className: "twitch-prime-top-nav__ellipsis-button",
                        display: E.R.Flex,
                        alignItems: E.c.Center,
                        margin: {
                            left: 1
                        }
                    }, i.createElement(u.a, null, i.createElement(E.w, {
                        icon: E._25.NavMore,
                        type: E.y.Default,
                        ariaLabel: Object(l.d)("More nav items", "PrimeTopNav"),
                        "data-a-target": "twitch-prime-top-nav__ellipsis-icon"
                    }), i.createElement(E.q, {
                        direction: E.r.Bottom,
                        tailOffset: 7,
                        size: E.s.Small,
                        "data-a-target": "overflow-menu"
                    }, i.createElement(E._8, {
                        padding: 1
                    }, i.createElement(u.a, {
                        display: E.R.Block
                    }, i.createElement(E._6, {
                        "data-target": "twitch-prime-top-nav-language-selector-click",
                        "data-a-target": "twitch-prime-top-nav-language-selector"
                    }, i.createElement(E._8, {
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, Object(l.d)("Language", "PrimeTopNav"))), i.createElement(E.q, {
                        size: E.s.Small,
                        direction: E.r.BottomCenter,
                        offsetY: "15px",
                        "data-target": "language-selector",
                        "data-a-target": "language-selector-menu"
                    }, i.createElement(d.a, null)))))))), i.createElement(S, null))))
                }, t
            }(i.Component)),
            I = Object(p.d)("PrimeTopNav", {
                autoReportInteractive: !0
            })(x),
            P = c.a.wrap(function() {
                return n.e(115).then(n.bind(null, "o0He"))
            }, "TwitchPrimeOffersPage"),
            T = c.a.wrap(function() {
                return n.e(100).then(n.bind(null, "9GX+"))
            }, "TwitchPrimeSuccessPage"),
            L = c.a.wrap(function() {
                return n.e(111).then(n.bind(null, "Uen5"))
            }, "TwitchPrimeLinkingPage"),
            w = c.a.wrap(function() {
                return n.e(112).then(n.bind(null, "HnrI"))
            }, "TwitchPrimeFortnitePage"),
            R = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    return l.b.get("prime_subsite_up", !1) ? i.createElement(E._8, {
                        className: "prime-root",
                        fullHeight: !0,
                        display: E.R.Flex,
                        flexDirection: E.T.Column,
                        position: E._15.Relative
                    }, i.createElement(I, null), i.createElement(E._2, {
                        position: E._15.Relative,
                        flexGrow: 1,
                        fullHeight: !0,
                        fullWidth: !0,
                        margin: {
                            top: 5
                        },
                        overflow: E._11.Scroll
                    }, i.createElement("main", null, i.createElement(E._8, {
                        className: "prime-main",
                        fullHeight: !0
                    }, i.createElement(o.e, null, i.createElement(s.d, {
                        path: "/prime/fortnite/link",
                        component: L
                    }), i.createElement(s.d, {
                        path: "/prime/fortnite/success",
                        component: T
                    }), i.createElement(s.d, {
                        path: "/prime/fortnite",
                        component: w
                    }), i.createElement(s.d, {
                        path: "/prime",
                        component: P
                    })))))) : (window.location.replace("https://twitch.amazon.com/prime?ref_=SM_OW_DT"), null)
                }, t
            }(i.Component),
            U = Object(a.compose)(s.f, Object(p.d)("PrimeRoot", {
                autoReportInteractive: !0
            }))(R);
        n.d(t, "PrimeRoot", function() {
            return U
        })
    },
    "2Nqs": function(e, t) {},
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
            l = n("3zLD"),
            c = n("6sO2"),
            p = n("+Znq"),
            d = n("7vx8"),
            u = n("S1vB"),
            m = n("oIkB"),
            f = n("ZVME"),
            h = n("CSlQ"),
            g = n("AGQo"),
            v = n("Odds"),
            _ = (n("f8UT"), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.render = function() {
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
                }, t
            }(s.Component)),
            O = Object(h.d)("PrimeOfferHeader", {
                autoReportInteractive: !0
            })(_),
            k = n("Lpko"),
            y = n("Tr7p"),
            b = n("Kckk");
        ! function(e) {
            e.OFFERS_FAILED_TO_UPDATE = "OFFERS_FAILED_TO_UPDATE", e.UNKNOWN = "UNKNOWN"
        }(r || (r = {}));
        var E = n("8OKC"),
            N = n("tTbW"),
            C = (n("9856"), n("wjhu")),
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
                            n = o.parse(e);
                        return n && !!n.expandoffers || t.props.openByDefault
                    }, t.onToggleMenu = function(e) {
                        t.seeOffers(), e && t.setState({
                            numOfUnseenOffers: 0
                        }), Object(y.c)(!e, {
                            hasPrime: t.hasPrime(),
                            numberOfOffers: t.getNumberOfOffers()
                        })
                    }, t.getHiddenCrownOfferIds = function() {
                        return c.b.get("prime-crown-hidden-ids", [])
                    }, t.getNumberOfOffers = function() {
                        var e = t.props.offersData,
                            n = e && e.primeOffers;
                        return n && n.length || 0
                    }, t.onHover = function() {
                        Object(y.b)({
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
                        var n = e.offersData;
                        if (n && !n.loading && !n.error) {
                            var r = n.primeOffers || [];
                            t.setState({
                                numOfUnseenOffers: r.filter(t.offerIsUnseen).length
                            })
                        }
                    }, t.offerIsUnseen = function(e) {
                        var n = Object(b.i)();
                        return !(t.getHiddenCrownOfferIds().includes(e.id) || n.includes(e.id) || t.offerIsSeen(e))
                    }, t.seeOffers = function() {
                        var e = t.props.offersData;
                        if (e && !e.loading && !e.error) {
                            var n = (e.primeOffers || []).map(function(e) {
                                return "" + e.id
                            });
                            t.updateOfferStatus(), Object(b.m)(n)
                        }
                    }, t.updateOfferStatus = function() {
                        return a.__awaiter(t, void 0, void 0, function() {
                            var e, t, n, i, o, s, l, c;
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
                                        return s = a.sent(), (l = s.updatePrimeOfferStatus && s.updatePrimeOfferStatus.error) && l.code ? (c = r[l.code], this.setState({
                                            updated: !1,
                                            error: c || r.UNKNOWN
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
                        return s.createElement(v._8, {
                            "data-a-target": "offers-list",
                            className: "prime-offers__list"
                        }, s.createElement(O, {
                            numOfUnseenOffers: t.state.numOfUnseenOffers
                        }), s.createElement(k.a, {
                            placement: b.d.Crown
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
                        n = e.offersData;
                    if (t && t.loading && n && !n.loading && n.primeOffers) {
                        this.props.latencyTracking.reportCustomEvent(this.offersLoadedEvent);
                        var r = n.primeOffers,
                            i = r && r.length;
                        Object(y.d)({
                            hasPrime: this.hasPrime(),
                            numberOfOffers: i || 0
                        })
                    }
                }, t.prototype.render = function() {
                    var e = this.props.userData && this.props.userData.requestInfo && Object(u.a)(this.props.userData.requestInfo.countryCode),
                        t = this.props.userData && this.props.userData.currentUser && this.props.userData.currentUser.hasPrime;
                    if (!e && !t) return null;
                    var n = {
                        align: v._53.Center,
                        direction: v._54.Bottom,
                        label: ""
                    };
                    return this.state.numOfUnseenOffers > 0 ? n.label = Object(c.d)("New Prime Loot", "PrimeOffers") : n.label = Object(c.d)("Prime Loot", "PrimeOffers"), s.createElement(v._8, {
                        className: "prime-offers",
                        position: v._15.Relative
                    }, s.createElement(p.a, {
                        onToggle: this.onToggleMenu,
                        openByDefault: this.showOffersByDefault(),
                        tooltipProps: n
                    }, s.createElement(g.a, {
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
            S = Object(l.compose)(Object(d.a)(N, {
                name: "offersData",
                skip: function(e) {
                    return !e.firstPageLoaded && !e.openByDefault
                },
                options: function() {
                    return {
                        variables: {
                            dateOverride: Object(b.f)()
                        }
                    }
                }
            }), Object(d.a)(C, {
                name: "userData"
            }), Object(d.a)(E, {
                name: "updatePrimeOfferStatus"
            }), Object(h.d)("PrimeOffers"))(D);
        var x = Object(i.b)(function(e) {
                return {
                    firstPageLoaded: !!e.session.firstPageLoaded
                }
            })(S),
            I = n("lfvs"),
            P = n("Hs3O"),
            T = (n("ukY1"), n("F1v6")),
            L = function(e) {
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
                    if (!Object(b.n)(e, t)) return null;
                    if (this.props.data.loading) return null;
                    var n = Object(P.d)(P.a, ""),
                        r = Object(c.d)("Twitch Prime", "BlueBar"),
                        i = s.createElement("span", null, Object(c.d)("Free loot every month, plus exclusives and surprises, ad-free viewing, and loads more.", "BlueBar")),
                        a = Object(P.d)(P.a, ""),
                        o = Object(c.d)("Start Your Free Trial", "BlueBar");
                    if (!this.props.data.loading && !this.props.data.error) {
                        var l = this.props.data;
                        l && l.primePromotions && l.primePromotions.forEach(function(e) {
                            switch (e.id) {
                                case "twitch.prime.bluebar.left1":
                                    n = e.externalURL, r = e.text;
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
                    return s.createElement(v._35, {
                        color: v.K.Base,
                        className: "blue-bar",
                        "data-a-target": "blue-bar",
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
                        "data-a-target": "blue-bar__link",
                        href: n,
                        target: "_blank",
                        rel: "noopener noreferrer"
                    }, r))), s.createElement(v.Q, {
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
                }, t
            }(s.Component),
            w = Object(l.compose)(Object(d.a)(T, {
                options: function() {
                    return {
                        variables: {
                            stringIds: ["twitch.prime.bluebar.left1", "twitch.prime.bluebar.center1", "twitch.prime.bluebar.right1"],
                            dateOverride: Object(b.f)()
                        }
                    }
                }
            }), Object(h.d)("BlueBarComponent"))(L),
            R = n("dnng");
        n.d(t, "c", function() {
            return x
        }), n.d(t, "a", function() {
            return w
        }), n.d(t, "b", function() {
            return R.a
        }), n.d(t, "d", function() {
            return b.f
        }), n.d(t, !1, function() {
            return b.c
        })
    },
    9856: function(e, t) {},
    "9wqU": function(e, t) {},
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
                l.error(e, "Could not decode location pathname substring for redirect")
            }
            return i ? n + "?ref_=" + e + "&redirectRoute=" + i : n + "?ref_=" + e
        };
        var r = n("6sO2"),
            i = "sm_tw_tup_ntp_t_all",
            a = "sm_tw_thp_blue_t_all",
            o = "sm_w_tup_ntp_t_c",
            s = "prime_landing_page_base_url",
            l = r.j.withCategory("PrimeUtilsLogger")
    },
    Kckk: function(e, t, n) {
        "use strict";
        n.d(t, "e", function() {
            return d
        }), n.d(t, "c", function() {
            return r
        }), n.d(t, "d", function() {
            return i
        }), n.d(t, "b", function() {
            return m
        }), n.d(t, "g", function() {
            return f
        }), n.d(t, "a", function() {
            return u
        }), n.d(t, "j", function() {
            return h
        }), n.d(t, "h", function() {
            return g
        }), n.d(t, "i", function() {
            return v
        }), n.d(t, "m", function() {
            return _
        }), n.d(t, "o", function() {
            return O
        }), n.d(t, "n", function() {
            return y
        }), n.d(t, "f", function() {
            return b
        }), n.d(t, "l", function() {
            return E
        }), n.d(t, "k", function() {
            return N
        });
        var r, i, a = n("HW6M"),
            o = (n.n(a), n("OAwv")),
            s = (n.n(o), n("GiK3")),
            l = (n.n(s), n("F8kA")),
            c = n("6sO2"),
            p = n("S1vB"),
            d = {
                DIRECT_ENTITLEMENT: "DIRECT_ENTITLEMENT",
                CLAIM_CODE: "CLAIM_CODE",
                EXTERNAL_OFFER: "EXTERNAL_OFFER"
            };
        ! function(e) {
            e.Vertical = "Vertical", e.Horizontal = "Horizontal", e.Default = "Vertical"
        }(r || (r = {})),
        function(e) {
            e.Crown = "Crown", e.LootPage = "LootPage"
        }(i || (i = {}));
        var u, m = {
                UNKNOWN_ERROR: "UNKNOWN_ERROR",
                OFFER_ALREADY_CLAIMED: "OFFER_ALREADY_CLAIMED",
                UNABLE_TO_SPEND: "UNABLE_TO_SPEND",
                TOO_MANY_RECENT_SPENDS: "TOO_MANY_RECENT_SPENDS"
            },
            f = function(e) {
                switch (e || m.UNKNOWN_ERROR) {
                    case m.OFFER_ALREADY_CLAIMED:
                        return Object(c.d)("Oh no! Unable to claim. Another linked Twitch account may have already claimed this content. Click {learnMoreLink}.", {
                            learnMoreLink: s.createElement(l.a, {
                                to: "https://help.twitch.tv/customer/portal/articles/2572060-twitch-prime-guide#MultipleAccounts",
                                target: "_blank",
                                className: "prime-error__link",
                                "data-a-target": "prime-error_link"
                            }, "here to learn more")
                        }, "PrimeError");
                    case m.UNABLE_TO_SPEND:
                    case m.TOO_MANY_RECENT_SPENDS:
                    default:
                        return Object(c.d)("Something has gone wrong. Please try again later.", "PrimeError")
                }
            };
        ! function(e) {
            e.Seen = "SEEN", e.Unseen = "UNSEEN", e.Claimed = "CLAIMED"
        }(u || (u = {}));
        var h = function(e) {
                return e === r.Vertical
            },
            g = function(e, t) {
                var n = t === r.Horizontal ? "horizontal" : "vertical";
                return a(e, e + "--" + n)
            },
            v = function() {
                return k("seenOffers")
            },
            _ = function(e) {
                c.l.set("seenOffers", e)
            },
            O = function(e, t) {
                return (e && (e.priority || 0 === e.priority) ? e.priority : 99999) - (t && (t.priority || 0 === t.priority) ? t.priority : 99999)
            },
            k = function(e) {
                return c.l.get(e, [])
            },
            y = function(e, t) {
                return void 0 !== e && void 0 !== t && (!e && Object(p.a)(t))
            },
            b = function() {
                var e = location.search,
                    t = o.parse(e);
                return t && t.dateOverride || void 0
            },
            E = function(e) {
                return e && !e.loading && !e.error && null !== e.currentUser && e.currentUser.hasPrime
            },
            N = function(e) {
                return e && e.loading
            }
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
            o = n("3zLD"),
            s = n("6sO2"),
            l = n("zCIC"),
            c = n("7vx8"),
            p = n("CSlQ"),
            d = n("Odds"),
            u = function(e) {
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
            m = Object(p.d)("PrimeEmpty", {
                autoReportInteractive: !0
            })(u),
            f = n("lfvs"),
            h = n("oIkB"),
            g = n("AGQo"),
            v = n("Tr7p"),
            _ = n("Kckk"),
            O = (n("w/8h"), n("sq7i")),
            k = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onClick = function(e) {
                        Object(v.e)({
                            offerID: t.props.offerID,
                            externalURL: t.props.externalURL,
                            hasPrime: !0,
                            index: t.props.index
                        }, t.props.offerType), t.props.claimCallback && t.props.offerType !== _.e.EXTERNAL_OFFER && !t.props.externalURL && t.props.claimCallback(e)
                    }, t.onHover = function() {
                        Object(v.f)({
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
                        n = _.h("prime-claim-button", e);
                    return a.createElement(d._8, {
                        fullWidth: !0,
                        className: n,
                        display: t ? d.R.Block : d.R.InlineBlock
                    }, this.getClaimButton())
                }, t.prototype.getClaimButton = function() {
                    var e = this.props,
                        t = e.externalURL,
                        n = e.claiming,
                        r = e.offerType,
                        i = this.getButtonText();
                    if (t || r === _.e.EXTERNAL_OFFER) return a.createElement(g.a, {
                        onHover: this.onHover
                    }, a.createElement(d.v, {
                        fullWidth: !0,
                        linkTo: t,
                        targetBlank: !0,
                        onClick: this.onClick
                    }, i));
                    var o = a.createElement(g.a, {
                        onHover: this.onHover
                    }, a.createElement(d.v, {
                        fullWidth: !0,
                        state: n ? d.A.Loading : d.A.Default,
                        disabled: n,
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
            y = Object(o.compose)(Object(c.a)(O), Object(p.d)("PrimeClaimButton"))(k),
            b = (n("zAvr"), function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.toggleShowDescription = function() {
                        var e = !n.state.showDescription;
                        Object(v.h)(e, {
                            offerID: n.props.offerID,
                            externalURL: n.props.externalURL,
                            hasPrime: n.props.hasPrime,
                            index: n.props.index
                        }), n.setState({
                            showDescription: e
                        })
                    }, n.onHover = function() {
                        n.state.showDescription ? Object(v.g)({
                            offerID: n.props.offerID,
                            externalURL: n.props.externalURL,
                            hasPrime: n.props.hasPrime,
                            index: n.props.index
                        }) : Object(v.i)({
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
                    var e = this.props.orientation || _.c.Default,
                        t = Object(_.h)("prime-claim-description", e);
                    return a.createElement(d._8, {
                        fullWidth: !0,
                        className: t,
                        margin: {
                            top: 1
                        }
                    }, a.createElement(g.a, {
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
                        n = Object(_.j)(e);
                    return this.state.showDescription && (t = a.createElement(d._35, {
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
                    }, a.createElement(f, {
                        source: this.props.description || ""
                    })))), t
                }, t
            }(a.Component)),
            E = Object(p.d)("PrimeClaimDescription", {
                autoReportInteractive: !0
            })(b),
            N = n("Hs3O"),
            C = function(e) {
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
                return i.__extends(t, e), t.prototype.render = function() {
                    return a.createElement(d._8, {
                        className: "prime-upsell-button",
                        margin: {
                            top: 2,
                            bottom: 1
                        }
                    }, a.createElement(g.a, {
                        onHover: this.onHover
                    }, a.createElement(d.v, {
                        fullWidth: !0,
                        linkTo: this.getLink(),
                        targetBlank: !0,
                        onClick: this.onClick
                    }, Object(s.d)("Start Your Free Trial", "PrimeUpsellButton"))))
                }, t.prototype.getLink = function() {
                    if (this.props.externalURL) return this.props.externalURL;
                    var e = this.props.externalReftag || N.c;
                    return Object(N.d)(e, window.location.pathname.substring(1))
                }, t
            }(a.Component),
            D = Object(p.d)("PrimeUpsellButton", {
                autoReportInteractive: !0
            })(C),
            S = n("4VmI"),
            x = function(e) {
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
                    return Object(_.l)(e) ? a.createElement(y, {
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
            I = Object(o.compose)(Object(c.a)(S), Object(p.d)("PrimeInstructions"))(x),
            P = n("dnng"),
            T = n("2KeS"),
            L = (n("nFc2"), function(e) {
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
            w = Object(T.d)(Object(p.d)("CopyButton"))(L),
            R = function(e) {
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
                    })), a.createElement(d._8, null, a.createElement(w, {
                        clipboardText: this.state.value
                    }))) : null
                }, t
            }(a.Component),
            U = Object(T.d)(Object(p.d)("CopyableItem"))(R),
            j = (n("yqdF"), function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.getClaimInstructions = function() {
                        return a.createElement(d._58, null, a.createElement(f, {
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
                        return a.createElement(d._35, {
                            className: "prime-claim-instructions prime-claim-instructions--vertical",
                            background: d.n.Alt2,
                            border: !0,
                            padding: 1,
                            fontSize: d.V.Size6
                        }, n.getClaimInstructions())
                    }, n.renderHorizontalLayout = function() {
                        return a.createElement(d._35, {
                            fullWidth: !0,
                            className: "prime-claim-instructions prime-claim-instructions--horizontal",
                            margin: {
                                top: 1
                            }
                        }, a.createElement(d.v, {
                            fullWidth: !0,
                            type: d.B.Text,
                            onClick: n.toggleShowDescription
                        }, n.getDescriptionButtonText()), n.state.showDescription && a.createElement(d._35, {
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
                        return n.state.showDescription ? Object(s.d)("Close Info", "PrimeClaimInstruction") : Object(s.d)("Click here for Claim Instructions", "PrimeClaimInsctuction")
                    }, n.state = {
                        showDescription: !1
                    }, n
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    var e = this.props.orientation || _.c.Default;
                    return Object(_.j)(e) ? this.renderVerticalLayout() : this.renderHorizontalLayout()
                }, t
            }(a.Component)),
            F = Object(p.d)("PrimeClaimInstructions", {
                autoReportInteractive: !0
            })(j),
            B = (n("S5wX"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.getPrimeClaimInstructions = function() {
                        if (t.props.claimInstructions) return a.createElement(F, {
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
                    if (this.props.code && this.props.deliveryMethod === _.e.CLAIM_CODE) return a.createElement(d._8, null, a.createElement(U, {
                        initialText: this.props.code,
                        readOnly: !0,
                        textCenter: !0
                    }));
                    var n = t ? 1 : 0;
                    return a.createElement(d._35, {
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
                    }, a.createElement(d._24, {
                        asset: d._25.Check,
                        width: 20,
                        height: 20
                    })), Object(s.d)("Added To Your Twitch Account", "PrimeRedeem"))))
                }, t
            }(a.Component)),
            A = Object(p.d)("PrimeRedeem", {
                autoReportInteractive: !0
            })(B),
            H = n("/3Cb"),
            M = (n("v+rJ"), "prime-offer__video"),
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
                        var n = t.props.isLast || !1,
                            r = e.content || {},
                            i = r.game || {},
                            o = r.categories || [];
                        return a.createElement(d._35, {
                            "data-a-target": "prime-offer",
                            className: "prime-offer prime-offer--vertical",
                            alignItems: d.c.Center,
                            display: d.R.Block,
                            borderBottom: !n,
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
                        }, r.publisher))), t.renderRedeemUpsellOrClaimSection(e))
                    }, t.renderHorizontalLayout = function(e) {
                        var n = e.content || {},
                            r = n.game || {},
                            i = n.categories || [];
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
                        }, n.publisher)), a.createElement(d._8, {
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
                        }, r.name, " ", i[0]))), t.renderOfferImageOrVideo(e.imageURL)), t.renderRedeemUpsellOrClaimSection(e))
                    }, t.renderOfferImageOrVideo = function(e) {
                        var n = t.getExtensionFromURL(e),
                            r = /iPhone.*Mobile|iPod|iPad/.test(navigator.userAgent);
                        return "mp4" === n ? a.createElement("video", {
                            ref: function(e) {
                                t.offerVideo = e || void 0
                            },
                            preload: "auto",
                            loop: !0,
                            autoPlay: !0,
                            playsInline: !0,
                            muted: !0,
                            controls: r,
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
                        var n = e.content || {},
                            r = e.self || {
                                claimData: ""
                            },
                            i = t.props.data || {};
                        if (t.state.error) {
                            var o = t.getErrorType();
                            return a.createElement(P.a, {
                                fontSize: d.V.Size6,
                                testTarget: "prime-offer-error",
                                errorType: o
                            })
                        }
                        if (!n.externalURL && (t.isCurrentOfferClaimed(e) || t.state.claimed) && Object(_.l)(i)) {
                            var s = t.state.claimData || r.claimData;
                            return a.createElement(A, {
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
                            externalURL: n.externalURL,
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
                        var n = t.props.data;
                        if (!n.loading && !n.error && n.currentUser && n.currentUser.id) {
                            var r = t.props.offer,
                                i = Object(h.a)({
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
            G = Object(o.compose)(Object(c.a)(S, {
                name: "data"
            }), Object(c.a)(H, {
                name: "claimPrimeOffer"
            }), Object(p.d)("PrimeOffer"))(W),
            z = (n("WC9X"), function(e) {
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
            V = Object(p.d)("PrimeOfferPlaceholder", {
                autoReportInteractive: !0
            })(z),
            q = (n("7L7x"), function(e) {
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
            K = Object(p.d)("PrimeUpsell", {
                autoReportInteractive: !0
            })(q),
            Q = n("LXDe"),
            Y = n("eY4D"),
            X = (n("DgR+"), function(e) {
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
                        for (var e = [], n = 0; n < 3; ++n) {
                            var r = a.createElement(V, {
                                key: n,
                                orientation: t.getOfferListOrientation()
                            });
                            e.push(r)
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
                        n = Object(_.h)("prime-offer-list", e),
                        r = "prime-offer-list__content prime-offer-list__content--" + t,
                        i = this.props.listDirection === _.c.Horizontal,
                        o = this.props.listDirection === _.c.Vertical,
                        s = this.renderOfferExperience();
                    return a.createElement(l.b, {
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
                    }, this.renderUpsell(), this.props.listDirection === _.c.Horizontal && this.renderDesktopOffers(s), this.renderMobileOffers(s)))
                }, t.prototype.renderUpsell = function() {
                    var e = this.props.userData;
                    if (!Object(_.k)(e) && !Object(_.l)(e) && !this.props.hideUpsell) return a.createElement(K, null)
                }, t.prototype.renderOfferExperience = function() {
                    var e = this,
                        t = this.props.offersData;
                    if (this.shouldShowPlaceholders()) return this.renderOfferPlaceholders();
                    if (t.primeOffers && t.primeOffers.length) {
                        var n = this.getSortedOffers(),
                            r = n[n.length - 1];
                        return n.map(function(t, n) {
                            return a.createElement(G, {
                                externalReftag: e.props.externalReftag,
                                key: t.id,
                                offer: t,
                                isLast: r.id === t.id,
                                index: n,
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
                    var n = this.props.offersData.primeOffers,
                        r = this.getHiddenOfferIdsByPlacement(this.props.placement),
                        i = n.filter(function(e) {
                            return !r.includes(e.id)
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
            $ = Object(o.compose)(Object(c.a)(Y, {
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
            }), Object(c.a)(S, {
                name: "userData",
                skip: function(e) {
                    return !e.firstPageLoaded && !e.ignoreFirstPageLoad
                }
            }), Object(p.d)("PrimeOfferList"))(X);
        var J = Object(r.b)(function(e) {
            return {
                firstPageLoaded: e.session.firstPageLoaded
            }
        })($);
        n.d(t, "a", function() {
            return J
        })
    },
    Qk3C: function(e, t, n) {
        "use strict";
        var r = n("RH2O"),
            i = n("2KeS"),
            a = n("TToO"),
            o = n("FuaS"),
            s = n("U9pL");

        function l(e, t) {
            var n = this;
            return function() {
                return a.__awaiter(n, void 0, void 0, function() {
                    return a.__generator(this, function(n) {
                        switch (n.label) {
                            case 0:
                                return t ? [4, Object(s.c)({
                                    userID: t,
                                    preferredLanguageTag: Object(s.b)(e)
                                })] : [3, 2];
                            case 1:
                                n.sent(), n.label = 2;
                            case 2:
                                return Object(o.c)(e), window.location.reload(!0), [2]
                        }
                    })
                })
            }
        }
        var c = n("GiK3"),
            p = n("6sO2"),
            d = n("Odds"),
            u = (n("2Nqs"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.renderLink = function(e) {
                        return c.createElement(d._6, {
                            key: e.languageCode,
                            onClick: t.handleLanguageClick,
                            "data-target": "language-selector-link",
                            "data-language": e.languageCode
                        }, c.createElement(d._8, {
                            padding: {
                                y: .5,
                                x: 1
                            },
                            "data-a-target": "language-" + e.languageCode
                        }, e.name))
                    }, t.handleLanguageClick = function(e) {
                        var n = e.currentTarget.getAttribute("data-language");
                        n && t.props.changeLanguage(n, t.props.currentUserID)
                    }, t
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    var e = Math.floor(p.a.locales.length / 2);
                    return c.createElement(d._8, {
                        className: "language-selector",
                        display: d.R.Flex,
                        padding: {
                            y: 1
                        }
                    }, c.createElement("div", {
                        className: "language-selector__list language-selector__list--border-right"
                    }, p.a.locales.slice(0, e).map(this.renderLink)), c.createElement("div", {
                        className: "language-selector__list"
                    }, p.a.locales.slice(e).map(this.renderLink)))
                }, t
            }(c.Component));
        var m = Object(r.b)(function(e) {
            return {
                currentUserID: e.session.user && e.session.user.id || null
            }
        }, function(e) {
            return Object(i.b)({
                changeLanguage: l
            }, e)
        })(u);
        n.d(t, "a", function() {
            return m
        })
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
            s.n.track(l.SpadeEventType.CrownInteraction, {
                has_prime: e.hasPrime,
                client_time: Date.now(),
                action: r.Hover,
                user_agent: navigator.userAgent
            })
        }, t.c = function(e, t) {
            s.n.track(l.SpadeEventType.CrownInteraction, {
                has_prime: t.hasPrime,
                client_time: Date.now(),
                number_of_offers: t.numberOfOffers,
                action: e ? r.Open : r.Close,
                user_agent: navigator.userAgent
            })
        }, t.d = function(e) {
            s.n.track(l.SpadeEventType.CrownInteraction, {
                has_prime: e.hasPrime,
                client_time: Date.now(),
                number_of_offers: e.numberOfOffers,
                action: r.OffersLoaded,
                user_agent: navigator.userAgent
            })
        }, t.l = function(e) {
            d(e, i.Click, a.StartYourFreeTrial)
        }, t.m = function(e) {
            d(e, i.Hover, a.StartYourFreeTrial)
        }, t.h = function(e, t) {
            d(t, i.Click, e ? a.MoreInfo : a.CloseInfo)
        }, t.e = function(e, t) {
            p(e, i.Click, t)
        }, t.i = function(e) {
            d(e, i.Hover, a.MoreInfo)
        }, t.g = function(e) {
            d(e, i.Hover, a.CloseInfo)
        }, t.f = function(e, t) {
            p(e, i.Hover, t)
        }, t.j = function(e) {
            s.n.track(l.SpadeEventType.PrimeLootPagePageview, {
                client_time: Date.now(),
                reftag: e.reftag,
                user_agent: navigator.userAgent
            })
        }, t.k = function(e) {
            s.n.track(l.SpadeEventType.PrimeLootPageTryPrimeClick, {
                client_time: Date.now(),
                button_position: e.buttonPosition,
                user_agent: navigator.userAgent
            })
        };
        var r, i, a, o, s = n("6sO2"),
            l = n("vH/s"),
            c = n("Kckk");

        function p(e, t, n) {
            var r;
            switch (n) {
                case c.e.CLAIM_CODE:
                    r = a.GetCode;
                    break;
                case c.e.EXTERNAL_OFFER:
                    r = a.LearnMore;
                    break;
                case c.e.DIRECT_ENTITLEMENT:
                    r = a.ClaimOffer
            }
            r && d(e, t, r)
        }

        function d(e, t, n) {
            s.n.track(l.SpadeEventType.PrimeOfferInteraction, {
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
            e.Open = "click_open", e.Close = "click_close", e.Hover = "hover", e.OffersLoaded = "offers_loaded"
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
            a = n("CSlQ"),
            o = n("Kckk"),
            s = n("Odds"),
            l = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.render = function() {
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
            c = Object(a.d)("PrimeError", {
                autoReportInteractive: !0
            })(l);
        n.d(t, "a", function() {
            return c
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
    f8UT: function(e, t) {},
    icPo: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "PrimeTopNav_PrimeUser"
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
                                    value: "login"
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
            body: "query PrimeTopNav_PrimeUser {\ncurrentUser {\nid\nlogin\ndisplayName\nprofileImageURL(width: 70)\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    jetF: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return s
        });
        var r = n("TToO"),
            i = n("GiK3"),
            a = (n.n(i), n("HM6l")),
            o = n("Odds"),
            s = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        showBalloon: !!t.props.openByDefault,
                        hasInteracted: !!t.props.openByDefault
                    }, t.toggleBalloonId = Object(a.a)(), t.handleButtonClick = function() {
                        t.setState(function(e) {
                            return {
                                showBalloon: !e.showBalloon,
                                hasInteracted: !0
                            }
                        }, function() {
                            t.props.onToggle && t.props.onToggle(!t.state.showBalloon)
                        })
                    }, t.handleGlobalClick = function(e) {
                        e.target.matches('[data-toggle-balloon-id="' + t.toggleBalloonId + '"] *') || t.setState({
                            showBalloon: !1
                        }, function() {
                            t.props.onToggle && t.props.onToggle(!t.state.showBalloon)
                        })
                    }, t.onMouseEnter = function() {
                        t.state.hasInteracted || t.setState({
                            hasInteracted: !0
                        })
                    }, t
                }
                return r.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.openByDefault && document.addEventListener("click", this.handleGlobalClick, !0)
                }, t.prototype.componentWillUpdate = function(e, t) {
                    this.state.showBalloon !== t.showBalloon && (t.showBalloon ? document.addEventListener("click", this.handleGlobalClick, !0) : document.removeEventListener("click", this.handleGlobalClick, !0))
                }, t.prototype.componentWillUnmount = function() {
                    document.removeEventListener("click", this.handleGlobalClick, !0)
                }, t.prototype.render = function() {
                    var e = i.Children.toArray(this.props.children);
                    if (2 !== e.length) throw new Error("ToggleBalloonWrapper should only be given two children: a clickable and a Balloon");
                    var t = e[0],
                        n = e[1];
                    if (n.type !== o.q) throw new Error("ToggleBalloonWrapper needs a Balloon as its second child element");
                    var a = i.cloneElement(t, {
                            onClick: this.handleButtonClick
                        }),
                        s = null;
                    (this.state.hasInteracted || this.props.alwaysMountBalloonContent) && (s = i.cloneElement(n, {
                        show: this.state.showBalloon
                    }));
                    var l = a;
                    return this.props.tooltipProps && (l = i.createElement(o._52, r.__assign({}, this.props.tooltipProps), a)), i.createElement(o._8, {
                        "data-toggle-balloon-id": this.toggleBalloonId,
                        display: this.props.display,
                        position: o._15.Relative
                    }, i.createElement("div", {
                        style: {
                            display: "inherit"
                        },
                        onMouseEnter: this.onMouseEnter,
                        "data-test-selector": "toggle-balloon-wrapper__mouse-enter-detector"
                    }, l), s)
                }, t.prototype.toggleBalloon = function(e) {
                    void 0 === e && (e = !this.state.showBalloon), this.setState({
                        showBalloon: e,
                        hasInteracted: !0
                    })
                }, t
            }(i.Component)
    },
    kOVI: function(e, t) {},
    nFc2: function(e, t) {},
    rCmJ: function(e, t, n) {
        "use strict";
        var r = n("zgdU");
        n.d(t, "a", function() {
            return r.a
        })
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
    zAvr: function(e, t) {},
    zgdU: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return a
        });
        var r = n("TToO"),
            i = n("GiK3"),
            a = (n.n(i), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.setContainerRef = function(e) {
                        t.container = e
                    }, t.handleGlobalClick = function(e) {
                        var n = e.target;
                        t.isParentOf(n) || t.props.onClickOut(e)
                    }, t
                }
                return r.__extends(t, e), t.prototype.componentDidMount = function() {
                    document.addEventListener("click", this.handleGlobalClick, !0)
                }, t.prototype.componentWillUnmount = function() {
                    document.removeEventListener("click", this.handleGlobalClick, !0)
                }, t.prototype.render = function() {
                    var e = this.props,
                        t = (e.onClickOut, r.__rest(e, ["onClickOut"]));
                    return i.createElement("div", r.__assign({}, t, {
                        ref: this.setContainerRef
                    }), this.props.children)
                }, t.prototype.isParentOf = function(e) {
                    for (var t = e; t;) {
                        if (t === this.container) return !0;
                        t = t.parentElement
                    }
                    return !1
                }, t
            }(i.Component))
    }
});
//# sourceMappingURL=pages.prime-56fdc411c57e6c5d62439cb7e3dffcc4.js.map