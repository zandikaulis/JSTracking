webpackJsonp([56], {
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
            d = n("ZyA2"),
            u = n("CSlQ"),
            p = n("Qk3C"),
            m = n("+Znq"),
            f = n("vH/s"),
            h = n("RH2O"),
            g = n("2KeS"),
            v = n("+xm8"),
            _ = n("f2i/"),
            k = n("Aj/L"),
            O = n("HW6M"),
            y = n("rCmJ"),
            E = n("7vx8"),
            b = n("8PKe"),
            N = n("Tr7p"),
            C = n("Odds"),
            D = n("icPo"),
            S = (n("9wqU"), function(e) {
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
                    }, t.onSignUpClick = function(e) {
                        e.preventDefault(), Object(N.j)({
                            buttonPosition: N.a.TopNav
                        }), t.props.signup()
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
                        return i.createElement(C._2, {
                            className: "twitch-prime-top-nav-user__wrapper",
                            margin: {
                                right: 2
                            }
                        }, i.createElement(y.a, {
                            onClickOut: this.onClickOut,
                            className: e
                        }, i.createElement(C._8, {
                            display: C.R.Flex,
                            className: "twitch-prime-top-nav-user twitch-prime-top-nav-user--signed-in",
                            fullHeight: !0,
                            zIndex: C._59.Above
                        }, i.createElement(C._6, {
                            onClick: this.toggleDropdown,
                            "data-test-selector": "user-menu-toggle",
                            blurAfterClick: !0,
                            alpha: !0
                        }, i.createElement(C._8, {
                            display: C.R.Flex,
                            flexWrap: C.U.NoWrap,
                            alignItems: C.c.Center,
                            flexGrow: 1,
                            padding: {
                                right: 1
                            },
                            fullHeight: !0
                        }, i.createElement(C._8, {
                            margin: {
                                x: 1
                            },
                            flexShrink: 0
                        }, i.createElement(C.e, {
                            type: C.j.FadeIn,
                            duration: C.g.Long,
                            enabled: !0
                        }, i.createElement(C.m, {
                            size: 30,
                            src: this.props.data.currentUser.profileImageURL,
                            alt: "User avatar"
                        }))), i.createElement(C._8, {
                            flexGrow: 1,
                            flexShrink: 1,
                            flexDirection: C.T.Column,
                            ellipsis: !0
                        }, i.createElement(C._32, {
                            className: "twitch-prime-top-nav-user__username"
                        }, this.props.data.currentUser.displayName)), i.createElement(C._32, {
                            display: C.R.Flex,
                            flexShrink: 0,
                            className: "twitch-prime-top-nav-user__expand"
                        }, i.createElement(C._22, {
                            asset: C._23.GlyphArrDown
                        }))))), this.renderDropdown()))
                    }
                    return i.createElement(C._32, {
                        display: C.R.Flex,
                        fullHeight: !0,
                        padding: {
                            right: 1
                        },
                        className: "twitch-prime-top-nav-user"
                    }, i.createElement(C._8, {
                        display: C.R.Flex,
                        flexWrap: C.U.NoWrap,
                        margin: {
                            x: .5
                        },
                        alignItems: C.c.Center,
                        flexGrow: 1
                    }, i.createElement(C.v, {
                        onClick: this.onLoginClick,
                        type: C.B.Text
                    }, Object(l.d)("Log in", "PrimeUser"))), i.createElement(C._8, {
                        display: C.R.Flex,
                        flexWrap: C.U.NoWrap,
                        margin: {
                            x: .5
                        },
                        alignItems: C.c.Center,
                        flexGrow: 1,
                        className: "twitch-prime-top-nav-user__button"
                    }, i.createElement(C.v, {
                        onClick: this.onSignUpClick
                    }, Object(l.d)("Try Twitch Prime", "PrimeUser"))))
                }, t.prototype.renderDropdown = function() {
                    var e = O({
                            "twitch-prime-top-nav-user__dropdown": !0,
                            "twitch-prime-top-nav-user__dropdown--open": this.state.dropdownOpen
                        }),
                        t = i.createElement(C._6, {
                            onClick: this.onLogoutClick,
                            alpha: !0
                        }, i.createElement(C._32, {
                            color: C.K.Alt,
                            display: C.R.Flex,
                            alignItems: C.c.Center,
                            padding: {
                                x: 2,
                                y: .5
                            }
                        }, i.createElement(C._8, {
                            display: C.R.Flex,
                            alignItems: C.c.Center,
                            margin: {
                                right: 1
                            }
                        }, i.createElement(C._22, {
                            asset: C._23.NavLogout,
                            height: 18,
                            width: 18
                        })), i.createElement(C.Q, null, Object(l.d)("Log Out", "PrimeUser"))));
                    return i.createElement(C._32, {
                        className: e,
                        background: C.n.Base,
                        zIndex: C._59.Below,
                        fullWidth: !0,
                        overflow: C._11.Hidden,
                        position: C._15.Absolute,
                        "data-test-selector": "dropdown-down",
                        borderLeft: this.state.dropdownOpen,
                        borderTop: this.state.dropdownOpen,
                        borderBottom: this.state.dropdownOpen,
                        borderRight: this.state.dropdownOpen
                    }, i.createElement(C._8, {
                        padding: {
                            y: 1
                        }
                    }, t))
                }, t.prototype.reportInteractive = function() {
                    this.props.data.loading || this.props.latencyTracking.reportInteractive()
                }, t.prototype.renderPlaceholders = function() {
                    return i.createElement(C._8, null, i.createElement(C._8, {
                        className: "twitch-prime-top-nav-user",
                        display: C.R.Flex,
                        alignItems: C.c.Center,
                        justifyContent: C._7.Between,
                        fullHeight: !0,
                        padding: {
                            x: 1
                        }
                    }, i.createElement(C._8, null, i.createElement(C._14, {
                        width: 30,
                        height: 30
                    })), i.createElement(C._32, {
                        display: C.R.Flex,
                        flexShrink: 0,
                        className: "twitch-prime-top-nav-user__expand"
                    }, i.createElement(C._22, {
                        asset: C._23.GlyphArrDown,
                        type: C._24.Placeholder
                    }))))
                }, t
            }(i.Component)),
            x = Object(a.compose)(Object(E.a)(D), Object(u.d)("PrimeUser", {
                autoReportInteractive: !0
            }))(S);
        var P = Object(h.b)(function(e) {
                return {
                    isLoggedIn: Object(k.d)(e)
                }
            }, function(e) {
                return Object(g.b)({
                    logout: _.g,
                    login: function() {
                        return Object(_.f)(v.a.TopNavLoginButton)
                    },
                    signup: function() {
                        return Object(_.h)(v.a.TopNavSignupButton)
                    }
                }, e)
            })(x),
            T = (n("kOVI"), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    return i.createElement(C._2, {
                        position: C._15.Fixed,
                        attachTop: !0,
                        fullWidth: !0
                    }, i.createElement("nav", {
                        className: "twitch-prime-top-nav"
                    }, i.createElement(C._8, {
                        className: "twitch-prime-top-nav__menu",
                        display: C.R.Flex,
                        alignItems: C.c.Center,
                        flexWrap: C.U.NoWrap,
                        fullHeight: !0,
                        justifyContent: C._7.Between
                    }, i.createElement(C._8, {
                        className: "twitch-prime-top-nav__menu__left",
                        display: C.R.Flex
                    }, i.createElement(C._2, {
                        display: C.R.InlineFlex,
                        alignItems: C.c.Center,
                        flexShrink: 0,
                        padding: {
                            left: 2,
                            y: 1
                        }
                    }, i.createElement(s.a, {
                        to: {
                            pathname: "/prime",
                            state: {
                                medium: f.PageviewMedium.TopNav,
                                content: f.PageviewContent.Logo
                            }
                        },
                        className: "twitch-prime-top-nav__home-link"
                    }, i.createElement(C._22, {
                        asset: C._23.LogoTwitchPrime,
                        width: 90,
                        height: 40
                    }))), i.createElement(C._8, {
                        className: "twitch-prime-top-nav__ellipsis-button",
                        display: C.R.Flex,
                        alignItems: C.c.Center,
                        margin: {
                            left: 1
                        }
                    }, i.createElement(m.a, null, i.createElement(C.w, {
                        icon: C._23.NavMore,
                        type: C.y.Default,
                        ariaLabel: Object(l.d)("More nav items", "PrimeTopNav"),
                        "data-a-target": "twitch-prime-top-nav__ellipsis-icon"
                    }), i.createElement(C.q, {
                        direction: C.r.Bottom,
                        tailOffset: 7,
                        size: C.s.Small,
                        "data-a-target": "overflow-menu"
                    }, i.createElement(C._8, {
                        padding: 1
                    }, i.createElement(m.a, {
                        display: C.R.Block
                    }, i.createElement(C._6, {
                        "data-target": "twitch-prime-top-nav-language-selector-click",
                        "data-a-target": "twitch-prime-top-nav-language-selector"
                    }, i.createElement(C._8, {
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, Object(l.d)("Language", "PrimeTopNav"))), i.createElement(C.q, {
                        size: C.s.Small,
                        direction: C.r.BottomCenter,
                        offsetY: "15px",
                        "data-target": "language-selector",
                        "data-a-target": "language-selector-menu"
                    }, i.createElement(p.a, null)))))))), i.createElement(P, null))))
                }, t
            }(i.Component)),
            w = Object(u.d)("PrimeTopNav", {
                autoReportInteractive: !0
            })(T),
            I = c.a.wrap(function() {
                return n.e(89).then(n.bind(null, "o0He"))
            }, "TwitchPrimeOffers"),
            L = c.a.wrap(function() {
                return n.e(78).then(n.bind(null, "9GX+"))
            }, "TwitchPrimeSuccess"),
            R = c.a.wrap(function() {
                return n.e(87).then(n.bind(null, "VQpm"))
            }, "TwitchPrimeLink"),
            U = c.a.wrap(function() {
                return n.e(88).then(n.bind(null, "HnrI"))
            }, "TwitchPrimeFortnite"),
            F = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    return l.b.get("prime_subsite_up", !1) ? i.createElement(C._8, {
                        className: "prime-root",
                        fullHeight: !0,
                        display: C.R.Flex,
                        flexDirection: C.T.Column,
                        position: C._15.Relative
                    }, i.createElement(w, null), i.createElement(C._2, {
                        position: C._15.Relative,
                        flexGrow: 1,
                        fullHeight: !0,
                        fullWidth: !0,
                        margin: {
                            top: 5
                        },
                        overflow: C._11.Scroll
                    }, i.createElement("main", null, i.createElement(C._8, {
                        className: "prime-main",
                        fullHeight: !0
                    }, i.createElement(o.e, null, i.createElement(s.d, {
                        path: "/prime/fortnite/link",
                        component: R
                    }), i.createElement(s.d, {
                        path: "/prime/fortnite/success",
                        component: L
                    }), i.createElement(s.d, {
                        path: "/prime/fortnite",
                        component: U
                    }), i.createElement(s.d, {
                        path: "/prime",
                        component: I
                    }))))), i.createElement(d.a, null)) : (window.location.replace("https://twitch.amazon.com/prime?ref_=SM_OW_DT"), null)
                }, t
            }(i.Component),
            j = Object(a.compose)(s.f, Object(u.d)("PrimeRoot", {}))(F);
        n.d(t, "PrimeRoot", function() {
            return j
        })
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
            l = n("6sO2"),
            c = n("+Znq"),
            d = n("7vx8"),
            u = n("S1vB"),
            p = n("oIkB"),
            m = n("ZVME"),
            f = n("CSlQ"),
            h = n("AGQo"),
            g = n("Odds"),
            v = (n("f8UT"), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return s.createElement(g._8, null, s.createElement(g._32, {
                        className: "prime-offer-header",
                        borderBottom: !0,
                        background: g.n.Alt2,
                        padding: {
                            x: 1,
                            y: .5
                        }
                    }, s.createElement(g.Q, {
                        bold: !0,
                        type: g._46.H6
                    }, Object(l.d)("Free with Prime", "PrimeOfferHeader"))), this.getNumOfUnseenOffersDisplay())
                }, t.prototype.getNumOfUnseenOffersDisplay = function() {
                    var e = this.props.numOfUnseenOffers;
                    if (e) return s.createElement(g._32, {
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
                        type: g._46.H6
                    }, Object(l.d)("New Prime Loot", "PrimeOfferHeader"))), s.createElement(g._8, {
                        className: "prime-offer__new-offer-header-count",
                        textAlign: g._42.Center
                    }, s.createElement(g._32, {
                        className: "prime-offer__new-offer-header-count__text",
                        background: g.n.Base,
                        color: g.K.Base,
                        display: g.R.Flex,
                        alignItems: g.c.Center,
                        justifyContent: g._7.Center
                    }, s.createElement(g.Q, null, e.toString())))))
                }, t = a.__decorate([Object(f.d)("PrimeOfferHeader")], t)
            }(s.Component)),
            _ = n("Lpko"),
            k = n("Tr7p"),
            O = n("R0Kh");
        ! function(e) {
            e.OFFERS_FAILED_TO_UPDATE = "OFFERS_FAILED_TO_UPDATE", e.UNKNOWN = "UNKNOWN"
        }(r || (r = {}));
        var y = n("8OKC"),
            E = n("tTbW"),
            b = (n("9856"), n("wjhu")),
            N = function(e) {
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
                            group: m.a.TwitchPrime,
                            key: m.b.PrimeOfferLoaded,
                            label: m.c.Loaded,
                            start: m.d.Registration
                        })
                    }, t.getUnseenOffers = function(e) {
                        var n = e.offersData;
                        if (n && !n.loading && !n.error) {
                            var r = n.primeOffers || [],
                                i = Object(O.g)();
                            t.setState({
                                numOfUnseenOffers: r.filter(function(e) {
                                    return !(i.includes(e.id) || t.offerIsSeen(e) || t.offerIsClaimed(e))
                                }).length
                            })
                        }
                    }, t.seeOffers = function() {
                        var e = t.props.offersData;
                        if (e && !e.loading && !e.error) {
                            var n = (e.primeOffers || []).map(function(e) {
                                return "" + e.id
                            });
                            t.updateOfferStatus(), Object(O.i)(n)
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
                                                status: O.a.Seen
                                            }
                                        }), o = Object(p.a)({
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
                        var e = t.props.offersData,
                            n = t.showOffersByDefault() || !1,
                            r = e && !e.loading && !e.error;
                        return t.offersLoadedEvent && r && t.props.latencyTracking.reportCustomEvent(t.offersLoadedEvent), r || n ? s.createElement(g._8, {
                            "data-a-target": "offers-list",
                            className: "prime-offers__list"
                        }, s.createElement(v, {
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
                        align: g._50.Center,
                        direction: g._51.Bottom,
                        label: ""
                    };
                    return this.state.numOfUnseenOffers > 0 ? n.label = Object(l.d)("New Prime Loot", "PrimeOffers") : n.label = Object(l.d)("Prime Loot", "PrimeOffers"), s.createElement(g._8, {
                        className: "prime-offers",
                        position: g._15.Relative
                    }, s.createElement(c.a, {
                        onToggle: this.onToggleMenu,
                        openByDefault: this.showOffersByDefault(),
                        tooltipProps: n
                    }, s.createElement(h.a, {
                        onHover: this.onHover
                    }, s.createElement(g.w, {
                        ariaLabel: Object(l.d)("Prime offers", "PrimeOffers"),
                        overlay: !0,
                        size: g.x.Large,
                        icon: g._23.Crown,
                        "data-a-target": "prime-offers-icon",
                        "data-target": "prime-offers-icon"
                    })), s.createElement(g.q, {
                        direction: g.r.BottomRight,
                        size: g.s.Large,
                        offsetX: "9px"
                    }, this.renderOfferList())), this.renderUnseenOffersDisplay())
                }, t.prototype.offerIsClaimed = function(e) {
                    return e.self && e.self.hasEntitlement
                }, t.prototype.offerIsSeen = function(e) {
                    return e.self && e.self.status === O.a.Seen
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
                }, t = a.__decorate([Object(d.a)(E, {
                    name: "offersData",
                    skip: function(e) {
                        return !e.firstPageLoaded
                    },
                    options: function() {
                        return {
                            variables: {
                                dateOverride: Object(O.e)()
                            }
                        }
                    }
                }), Object(d.a)(b, {
                    name: "userData"
                }), Object(d.a)(y, {
                    name: "updatePrimeOfferStatus"
                }), Object(f.d)("PrimeOffers", {
                    autoReportInteractive: !0
                })], t)
            }(s.Component);
        var C = Object(i.b)(function(e) {
                return {
                    firstPageLoaded: !!e.session.firstPageLoaded
                }
            })(N),
            D = n("lfvs"),
            S = n("Hs3O"),
            x = (n("ukY1"), n("F1v6")),
            P = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = this.props.data.currentUser && this.props.data.currentUser.hasPrime,
                        t = this.props.data.requestInfo && this.props.data.requestInfo.countryCode;
                    if (!Object(O.j)(e, t)) return null;
                    if (this.props.data.loading) return null;
                    var n = Object(S.d)(S.a, ""),
                        r = Object(l.d)("Twitch Prime", "BlueBar"),
                        i = s.createElement("span", null, Object(l.d)("Free loot every month, plus exclusives and surprises, ad-free viewing, and loads more.", "BlueBar")),
                        a = Object(S.d)(S.a, ""),
                        o = Object(l.d)("Start Your Free Trial", "BlueBar");
                    if (!this.props.data.loading && !this.props.data.error) {
                        var c = this.props.data;
                        c && c.primePromotions && c.primePromotions.forEach(function(e) {
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
                    return s.createElement(g._32, {
                        color: g.K.Base,
                        className: "blue-bar",
                        position: g._15.Relative,
                        fullWidth: !0,
                        zIndex: g._59.Above
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
                    }, s.createElement(g._22, {
                        asset: g._23.Crown,
                        width: 20,
                        height: 13
                    })), s.createElement(g.Q, {
                        bold: !0,
                        type: g._46.Span,
                        noWrap: !0,
                        fontSize: g.V.Size6
                    }, s.createElement(g._2, {
                        padding: {
                            x: 1
                        }
                    }, s.createElement("a", {
                        className: "blue-bar__link",
                        href: n,
                        target: "_blank",
                        rel: "noopener noreferrer"
                    }, r))), s.createElement(g.Q, {
                        className: "blue-bar__headline",
                        type: g._46.Span,
                        fontSize: g.V.Size6
                    }, i)), s.createElement(g._8, {
                        display: g.R.InlineFlex,
                        flexShrink: 0
                    }, s.createElement(g.Q, {
                        bold: !0,
                        type: g._46.Span,
                        noWrap: !0,
                        fontSize: g.V.Size6,
                        color: g.K.Base
                    }, s.createElement("a", {
                        className: "blue-bar__link",
                        href: a,
                        target: "_blank",
                        rel: "noopener noreferrer"
                    }, o)))))
                }, t = a.__decorate([Object(d.a)(x, {
                    options: function() {
                        return {
                            variables: {
                                stringIds: ["twitch.prime.bluebar.left1", "twitch.prime.bluebar.center1", "twitch.prime.bluebar.right1"],
                                dateOverride: Object(O.e)()
                            }
                        }
                    }
                }), Object(f.d)("BlueBarComponent")], t)
            }(s.Component),
            T = n("dnng");
        n.d(t, "c", function() {
            return C
        }), n.d(t, "a", function() {
            return P
        }), n.d(t, "b", function() {
            return T.a
        }), n.d(t, "d", function() {
            return O.e
        }), n.d(t, !1, function() {
            return O.c
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
            l = n("7vx8"),
            c = n("CSlQ"),
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
                }, t = i.__decorate([Object(c.d)("PrimeEmpty")], t)
            }(a.Component),
            p = n("lfvs"),
            m = n("oIkB"),
            f = n("AGQo"),
            h = n("Tr7p"),
            g = n("R0Kh"),
            v = (n("w/8h"), n("sq7i")),
            _ = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onClick = function(e) {
                        Object(h.d)({
                            offerID: t.props.offerID,
                            externalURL: t.props.externalURL,
                            hasPrime: !0,
                            index: t.props.index
                        }, t.props.offerType), t.props.claimCallback && t.props.offerType !== g.d.EXTERNAL_OFFER && t.props.claimCallback(e)
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
                    var e = this.props.orientation || g.c.Default,
                        t = g.h(e),
                        n = g.f("prime-claim-button", e);
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
                    return e.offerType === g.d.EXTERNAL_OFFER ? a.createElement(f.a, {
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
                        case g.d.CLAIM_CODE:
                            return Object(o.d)("Get Code", "PrimeClaimButton");
                        case g.d.EXTERNAL_OFFER:
                            return e;
                        case g.d.DIRECT_ENTITLEMENT:
                        default:
                            return Object(o.d)("Claim Offer", "PrimeClaimButton")
                    }
                }, t = i.__decorate([Object(l.a)(v), Object(c.d)("PrimeClaimButton")], t)
            }(a.Component),
            k = (n("zAvr"), function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.toggleShowDescription = function() {
                        var e = !n.state.showDescription;
                        Object(h.g)(e, {
                            offerID: n.props.offerID,
                            externalURL: n.props.externalURL,
                            hasPrime: n.props.hasPrime,
                            index: n.props.index
                        }), n.setState({
                            showDescription: e
                        })
                    }, n.onHover = function() {
                        n.state.showDescription ? Object(h.f)({
                            offerID: n.props.offerID,
                            externalURL: n.props.externalURL,
                            hasPrime: n.props.hasPrime,
                            index: n.props.index
                        }) : Object(h.h)({
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
                    var e = this.props.orientation || g.c.Default,
                        t = Object(g.f)("prime-claim-description", e);
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
                        n = Object(g.h)(e);
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
                    }, a.createElement(p, {
                        source: this.props.description || ""
                    })))), t
                }, t = i.__decorate([Object(c.d)("PrimeClaimDescription")], t)
            }(a.Component)),
            O = n("Hs3O"),
            y = function(e) {
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
                    var e = this.props.externalReftag || O.c;
                    return Object(O.d)(e, window.location.pathname.substring(1))
                }, t = i.__decorate([Object(c.d)("PrimeUpsellButton")], t)
            }(a.Component),
            E = n("e2wA"),
            b = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = this.props.orientation || g.c.Default,
                        t = Object(g.f)("prime-claim", e);
                    return a.createElement(d._8, {
                        className: t,
                        margin: {
                            bottom: 1
                        }
                    }, this.getCallToAction(), this.getClaimDescriptionSection())
                }, t.prototype.getCallToAction = function() {
                    var e = this.props.data;
                    return !e.loading && !e.error && e.currentUser && e.currentUser.hasPrime ? a.createElement(_, {
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
                    return this.props.offerType === g.d.EXTERNAL_OFFER ? null : a.createElement(k, {
                        description: this.props.offerDescription,
                        offerID: this.props.offerID,
                        externalURL: this.props.externalURL,
                        index: this.props.index,
                        orientation: this.props.orientation,
                        hasPrime: this.props.data.currentUser && this.props.data.currentUser.hasPrime
                    })
                }, t = i.__decorate([Object(l.a)(E), Object(c.d)("PrimeInstructions")], t)
            }(a.Component),
            N = n("dnng"),
            C = (n("nFc2"), function(e) {
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
                }, t = i.__decorate([Object(c.d)("CopyButton")], t)
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
                    })), a.createElement(d._8, null, a.createElement(C, {
                        clipboardText: this.state.value
                    }))) : null
                }, t = i.__decorate([Object(c.d)("CopyableItem")], t)
            }(a.Component),
            S = (n("yqdF"), function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.getClaimInstructions = function() {
                        return a.createElement(d._55, null, a.createElement(p, {
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
                    var e = this.props.orientation || g.c.Default;
                    return Object(g.h)(e) ? this.renderVerticalLayout() : this.renderHorizontalLayout()
                }, t = i.__decorate([Object(c.d)("PrimeClaimInstructions", {
                    autoReportInteractive: !0
                })], t)
            }(a.Component)),
            x = (n("S5wX"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.getPrimeClaimInstructions = function() {
                        if (t.props.claimInstructions) return a.createElement(S, {
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
                    return a.createElement(d._8, {
                        className: t
                    }, this.getCodeOrConfirmation(e), this.getPrimeClaimInstructions())
                }, t.prototype.getCodeOrConfirmation = function(e) {
                    var t = Object(g.h)(e);
                    if (this.props.code && this.props.deliveryMethod === g.d.CLAIM_CODE) return a.createElement(d._8, null, a.createElement(D, {
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
                }, t = i.__decorate([Object(c.d)("PrimeRedeem")], t)
            }(a.Component)),
            P = n("/3Cb"),
            T = (n("v+rJ"), n("rM0q")),
            w = function(e) {
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
                        }, a.createElement(p, {
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
                        }, a.createElement(p, {
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
                            i = (t.props.data || {}).currentUser || {};
                        if (t.state.error) {
                            var o = t.getErrorType();
                            return a.createElement(N.a, {
                                fontSize: d.V.Size6,
                                testTarget: "prime-offer-error",
                                errorType: o
                            })
                        }
                        if ((t.isCurrentOfferClaimed(e) || t.state.claimed) && i && i.hasPrime) {
                            var s = t.state.claimData || r.claimData;
                            return a.createElement(x, {
                                claimInstructions: e.claimInstructions,
                                code: s,
                                deliveryMethod: e.deliveryMethod,
                                orientation: t.props.orientation
                            })
                        }
                        return a.createElement(b, {
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
                        return t.state.error || g.b.UNKNOWN_ERROR
                    }, t.claimOffer = function(e) {
                        e.nativeEvent.stopImmediatePropagation(), t.setState({
                            claiming: !0
                        });
                        var n = t.props.data;
                        if (!n.loading && !n.error && n.currentUser.id) {
                            var r = t.props.offer,
                                i = Object(m.a)({
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
                    }, t
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
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
                }, t = i.__decorate([Object(l.a)(T, {
                    name: "data"
                }), Object(l.a)(P, {
                    name: "claimPrimeOffer"
                }), Object(c.d)("PrimeOffer")], t)
            }(a.Component),
            I = (n("WC9X"), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = this.props.orientation || g.c.Default,
                        t = Object(g.h)(e);
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
                }, t = i.__decorate([Object(c.d)("PrimeOfferPlaceholder")], t)
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
                    }, Object(o.d)("Get free game loot like this every month plus surprises, ad-free viewing, and loads more with Twitch Prime.", "PrimeUpsell")), a.createElement(y, null))
                }, t = i.__decorate([Object(c.d)("PrimeUpsell")], t)
            }(a.Component)),
            R = n("LXDe"),
            U = n("eY4D"),
            F = (n("DgR+"), n("65au")),
            j = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.getOfferListOrientation = function() {
                        return t.props.listDirection || g.c.Default
                    }, t.shouldShowPlaceholders = function() {
                        if (!t.props.offersData) return !0;
                        var e = t.props.offersData,
                            n = e.primeOffers,
                            r = void 0 === n || null === n;
                        return e.loading || !e.error && r
                    }, t.renderOfferPlaceholders = function() {
                        for (var e = [], n = 0; n < 3; ++n) {
                            var r = a.createElement(I, {
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
                        n = Object(g.f)("prime-offer-list", e),
                        r = "prime-offer-list__content prime-offer-list__content--" + t,
                        i = this.props.listDirection === g.c.Horizontal,
                        o = this.props.listDirection === g.c.Vertical;
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
                    if (e && !e.loading && !e.error && !this.currentUserHasPrime(e) && !this.props.hideUpsell) return a.createElement(L, null)
                }, t.prototype.renderOfferExperience = function() {
                    var e = this,
                        t = this.props.offersData;
                    if (this.shouldShowPlaceholders()) return this.renderOfferPlaceholders();
                    if (!t.error && t.primeOffers && t.primeOffers.length) {
                        var n = this.getSortedOffers(),
                            r = n[n.length - 1];
                        return n.map(function(t, n) {
                            return a.createElement(w, {
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
                            }).sort(g.k),
                            r = this.filterOffersByOfferType(n),
                            i = t.filter(function(e) {
                                return !e.self || !e.self.hasEntitlement
                            }).sort(g.k);
                        return this.filterOffersByOfferType(i).concat(r)
                    }
                    return this.filterOffersByOfferType(t).slice().sort(g.k)
                }, t.prototype.filterOffersByOfferType = function(e) {
                    var t = this.getFreeGamesWithPrimeOfferIds();
                    return this.props.offerFilterType === R.a.Game ? e.filter(function(e) {
                        return t.includes(e.id)
                    }).sort(g.k) : this.props.offerFilterType === R.a.InGameLoot ? e.filter(function(e) {
                        return !t.includes(e.id)
                    }).sort(g.k) : e
                }, t.prototype.getUserId = function() {
                    var e = this.props.userData;
                    return e && !e.loading && !e.error && e.currentUser && e.currentUser.id ? e.currentUser.id : ""
                }, t.prototype.currentUserHasPrime = function(e) {
                    var t = e.currentUser;
                    return t && t.hasPrime
                }, t = i.__decorate([Object(l.a)(U, {
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
                }), Object(l.a)(F, {
                    name: "userData",
                    skip: function(e) {
                        return !e.firstPageLoaded && !e.ignoreFirstPageLoad
                    }
                }), Object(c.d)("PrimeOfferList", {
                    autoReportInteractive: !0
                })], t)
            }(a.Component);
        var B = Object(r.b)(function(e) {
            return {
                firstPageLoaded: e.session.firstPageLoaded
            }
        })(j);
        n.d(t, "a", function() {
            return B
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
            d = n("6sO2"),
            u = n("Odds"),
            p = (n("2Nqs"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.renderLink = function(e) {
                        return c.createElement(u._6, {
                            key: e.languageCode,
                            onClick: t.handleLanguageClick,
                            "data-target": "language-selector-link",
                            "data-language": e.languageCode
                        }, c.createElement(u._8, {
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
                    var e = Math.floor(d.a.locales.length / 2);
                    return c.createElement(u._8, {
                        className: "language-selector",
                        display: u.R.Flex,
                        padding: {
                            y: 1
                        }
                    }, c.createElement("div", {
                        className: "language-selector__list language-selector__list--border-right"
                    }, d.a.locales.slice(0, e).map(this.renderLink)), c.createElement("div", {
                        className: "language-selector__list"
                    }, d.a.locales.slice(e).map(this.renderLink)))
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
        })(p);
        n.d(t, "a", function() {
            return m
        })
    },
    R0Kh: function(e, t, n) {
        "use strict";
        n.d(t, "d", function() {
            return l
        }), n.d(t, "c", function() {
            return r
        }), n.d(t, "b", function() {
            return d
        }), n.d(t, "a", function() {
            return c
        }), n.d(t, "h", function() {
            return u
        }), n.d(t, "f", function() {
            return p
        }), n.d(t, "g", function() {
            return m
        }), n.d(t, "i", function() {
            return f
        }), n.d(t, "k", function() {
            return h
        }), n.d(t, "j", function() {
            return v
        }), n.d(t, "e", function() {
            return _
        });
        var r, i = n("HW6M"),
            a = (n.n(i), n("OAwv")),
            o = (n.n(a), n("6sO2")),
            s = n("S1vB"),
            l = {
                DIRECT_ENTITLEMENT: "DIRECT_ENTITLEMENT",
                CLAIM_CODE: "CLAIM_CODE",
                EXTERNAL_OFFER: "EXTERNAL_OFFER"
            };
        ! function(e) {
            e.Vertical = "Vertical", e.Horizontal = "Horizontal", e.Default = "Vertical"
        }(r || (r = {}));
        var c, d = {
            UNKNOWN_ERROR: "UNKNOWN_ERROR",
            OFFER_ALREADY_CLAIMED: "OFFER_ALREADY_CLAIMED",
            UNABLE_TO_SPEND: "UNABLE_TO_SPEND",
            TOO_MANY_RECENT_SPENDS: "TOO_MANY_RECENT_SPENDS"
        };
        ! function(e) {
            e.Seen = "SEEN", e.Unseen = "UNSEEN", e.Claimed = "CLAIMED"
        }(c || (c = {}));
        var u = function(e) {
                return e === r.Vertical
            },
            p = function(e, t) {
                var n = t === r.Horizontal ? "horizontal" : "vertical";
                return i(e, e + "--" + n)
            },
            m = function() {
                return g("seenOffers")
            },
            f = function(e) {
                o.l.set("seenOffers", e)
            },
            h = function(e, t) {
                return (e && (e.priority || 0 === e.priority) ? e.priority : 99999) - (t && (t.priority || 0 === t.priority) ? t.priority : 99999)
            },
            g = function(e) {
                return o.l.get(e, [])
            },
            v = function(e, t) {
                return void 0 !== e && void 0 !== t && (!e && Object(s.a)(t))
            },
            _ = function() {
                var e = location.search,
                    t = a.parse(e);
                return t && t.dateOverride || void 0
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
            s.n.track(l.SpadeEventType.CrownInteraction, {
                has_prime: e.hasPrime,
                client_time: Date.now(),
                action: r.Hover
            })
        }, t.c = function(e, t) {
            s.n.track(l.SpadeEventType.CrownInteraction, {
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
            s.n.track(l.SpadeEventType.PrimeLootPagePageview, {
                client_time: Date.now(),
                reftag: e.reftag,
                user_agent: navigator.userAgent
            })
        }, t.j = function(e) {
            s.n.track(l.SpadeEventType.PrimeLootPageTryPrimeClick, {
                client_time: Date.now(),
                button_position: e.buttonPosition,
                user_agent: navigator.userAgent
            })
        };
        var r, i, a, o, s = n("6sO2"),
            l = n("vH/s"),
            c = n("R0Kh");

        function d(e, t, n) {
            var r;
            switch (n) {
                case c.d.CLAIM_CODE:
                    r = a.GetCode;
                    break;
                case c.d.EXTERNAL_OFFER:
                    r = a.LearnMore;
                    break;
                case c.d.DIRECT_ENTITLEMENT:
                    r = a.ClaimOffer
            }
            r && u(e, t, r)
        }

        function u(e, t, n) {
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
            l = n("R0Kh"),
            c = n("Odds"),
            d = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.getErrorMessage = function() {
                        switch (t.props.errorType || l.b.UNKNOWN_ERROR) {
                            case l.b.OFFER_ALREADY_CLAIMED:
                                return Object(o.d)("Oh no! Unable to claim. Another linked Twitch account may have already claimed this content. Click here to {learnMoreLink}.", {
                                    learnMoreLink: i.createElement(a.a, {
                                        to: "https://help.twitch.tv/customer/portal/articles/2572060-twitch-prime-guide#MultipleAccounts",
                                        target: "_blank",
                                        className: "prime-error__link",
                                        "data-a-target": "prime-error_link"
                                    }, "learn more")
                                }, "PrimeError");
                            case l.b.UNABLE_TO_SPEND:
                            case l.b.TOO_MANY_RECENT_SPENDS:
                            default:
                                return Object(o.d)("Something has gone wrong. Please try again later.", "PrimeError")
                        }
                    }, t
                }
                return r.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = this.getErrorMessage();
                    return i.createElement(c._32, {
                        background: c.n.Alt2,
                        display: c.R.Flex,
                        justifyContent: c._7.Center,
                        padding: {
                            y: 1
                        },
                        margin: {
                            bottom: 1
                        },
                        textAlign: c._42.Center,
                        "data-test-selector": this.props.testTarget,
                        "data-a-target": this.props.testTarget
                    }, i.createElement(c.Q, {
                        type: c._46.H4,
                        align: c._56.Middle
                    }, i.createElement(c._32, {
                        padding: 1,
                        display: c.R.InlineFlex,
                        flexGrow: 1,
                        flexWrap: c.U.NoWrap,
                        alignItems: c.c.Center,
                        textAlign: c._42.Left,
                        fontSize: this.props.fontSize ? this.props.fontSize : c.V.Size5,
                        "data-a-target": "prime-error-glitch"
                    }, i.createElement(c._8, {
                        margin: {
                            right: 1
                        },
                        display: c.R.InlineFlex,
                        flexGrow: 1,
                        flexWrap: c.U.NoWrap,
                        alignItems: c.c.Center
                    }, i.createElement(c._22, {
                        asset: c._23.DeadGlitch,
                        type: c._24.Alert,
                        width: 20,
                        height: 20
                    })), i.createElement(c.Q, {
                        type: c._46.P
                    }, e))))
                }, t = r.__decorate([Object(s.d)("PrimeError")], t)
            }(i.Component);
        n.d(t, "a", function() {
            return d
        })
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
                    return this.props.tooltipProps && (l = i.createElement(o._49, r.__assign({}, this.props.tooltipProps), a)), i.createElement(o._8, {
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
                end: 151
            }
        };
        n.loc.source = {
            body: "query Prime_PrimeOffers_PrimeOfferIds($dateOverride: Time) {\nprimeOffers(dateOverride: $dateOverride) {\nid\nself {\nhasEntitlement\nclaimData\nstatus\n}\n}\n}",
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
//# sourceMappingURL=pages.prime-525b207075476525743c8b57da82e8e4.js.map