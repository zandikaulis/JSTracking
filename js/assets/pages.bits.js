webpackJsonp([56], {
    "+Znq": function(e, t, n) {
        "use strict";
        var r = n("jetF");
        n.d(t, "a", function() {
            return r.a
        })
    },
    "2b/B": function(e, t, n) {
        "use strict";
        var r = n("RH2O"),
            i = n("2KeS"),
            a = n("+xm8"),
            o = n("f2i/"),
            s = n("NikC"),
            l = n("Aj/L"),
            c = n("TToO"),
            d = n("HW6M"),
            m = n("GiK3"),
            u = n("6sO2"),
            p = n("rCmJ"),
            f = n("7vx8"),
            h = n("NXs7"),
            g = n("VAT8"),
            v = n("CSlQ"),
            _ = n("Odds"),
            k = n("Kkxm"),
            y = (n("e6tx"), function(e) {
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
                    }, n.onLoginClick = function(e) {
                        e.preventDefault(), n.props.login()
                    }, n.onLogoutClick = function(e) {
                        e.preventDefault(), n.props.logout()
                    }, n.onDarkModeCheckboxClick = function() {
                        var e = n.props.theme === h.a.Dark ? h.a.Light : h.a.Dark;
                        n.props.changeTheme(e, s.a.UserMenu)
                    }, n.state = {
                        dropdownOpen: !1
                    }, n
                }
                return c.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.reportInteractive()
                }, t.prototype.componentDidUpdate = function() {
                    this.reportInteractive()
                }, t.prototype.render = function() {
                    if (this.props.data.loading || this.props.data.error) return m.createElement(_._13, null);
                    if (this.props.isOnboarding) return m.createElement(_._7, {
                        display: _.Q.Flex,
                        className: "minimal-top-nav__user",
                        fullHeight: !0
                    }, m.createElement(_._7, {
                        display: _.Q.Flex,
                        flexWrap: _.T.NoWrap,
                        alignItems: _.c.Center,
                        flexGrow: 1,
                        padding: {
                            right: 1
                        },
                        fullHeight: !0
                    }, m.createElement(_._7, {
                        margin: {
                            x: 1
                        },
                        flexShrink: 0
                    }, m.createElement(_._7, null, m.createElement(_.l, {
                        size: 30,
                        src: this.props.data.currentUser.profileImageURL,
                        alt: "User avatar"
                    }))), m.createElement(_._7, {
                        flexGrow: 1,
                        flexShrink: 1,
                        flexDirection: _.S.Column,
                        ellipsis: !0
                    }, m.createElement(_._30, {
                        className: "minimal-top-nav__username"
                    }, this.props.data.currentUser.displayName))));
                    if (this.props.isLoggedIn) {
                        var e = null;
                        this.props.darkModeEnabled && (e = m.createElement(_._30, {
                            borderBottom: !0,
                            margin: {
                                y: 1
                            }
                        }, m.createElement(_._7, {
                            margin: {
                                x: 2,
                                bottom: 1
                            }
                        }, m.createElement(_.I, {
                            id: "dark-mode-toggle",
                            label: Object(u.d)("Dark Mode", "MinimalUser"),
                            "data-a-target": "dark-mode-toggle",
                            "data-test-selector": "dark-mode-toggle",
                            "data-a-value": this.props.theme,
                            checked: this.props.theme === h.a.Dark,
                            onChange: this.onDarkModeCheckboxClick
                        }))));
                        var t = d(Object(g.c)(h.a.Dark), {
                                "minimal-top-nav__dropdown-open": this.state.dropdownOpen
                            }),
                            n = d({
                                "minimal-top-nav__dropdown-open": this.state.dropdownOpen
                            }, {
                                "minimal-top-nav__dropdown": !this.state.dropdownOpen
                            });
                        return m.createElement(p.a, {
                            onClickOut: this.onClickOut,
                            className: t
                        }, m.createElement(_._7, {
                            display: _.Q.Flex,
                            className: "minimal-top-nav__user",
                            fullHeight: !0
                        }, m.createElement(_._5, {
                            onClick: this.onCardClick,
                            "data-test-selector": "user-menu-toggle"
                        }, m.createElement(_._7, {
                            display: _.Q.Flex,
                            flexWrap: _.T.NoWrap,
                            alignItems: _.c.Center,
                            flexGrow: 1,
                            padding: {
                                right: 1
                            },
                            fullHeight: !0
                        }, m.createElement(_._7, {
                            margin: {
                                x: 1
                            },
                            flexShrink: 0
                        }, m.createElement(_._7, null, m.createElement(_.l, {
                            size: 30,
                            src: this.props.data.currentUser.profileImageURL,
                            alt: "User avatar"
                        }))), m.createElement(_._7, {
                            flexGrow: 1,
                            flexShrink: 1,
                            flexDirection: _.S.Column,
                            ellipsis: !0
                        }, m.createElement(_._30, {
                            className: "minimal-top-nav__username"
                        }, this.props.data.currentUser.displayName)), m.createElement(_._30, {
                            display: _.Q.Flex,
                            flexShrink: 0,
                            className: "minimal-top-nav__expand"
                        }, m.createElement(_._20, {
                            asset: _._21.GlyphArrDown
                        }))))), m.createElement(_._30, {
                            fullWidth: !0,
                            overflow: _._10.Hidden,
                            position: _._14.Absolute,
                            padding: {
                                y: 1
                            },
                            background: _.m.Base,
                            className: n,
                            "data-test-selector": "dropdown-down"
                        }, e, m.createElement(_._5, {
                            onClick: this.onLogoutClick
                        }, m.createElement(_._30, {
                            color: _.J.Alt,
                            display: _.Q.Flex,
                            alignItems: _.c.Center,
                            padding: {
                                x: 2,
                                y: .5
                            }
                        }, m.createElement(_._7, {
                            display: _.Q.Flex,
                            alignItems: _.c.Center,
                            margin: {
                                right: 1
                            }
                        }, m.createElement(_._20, {
                            asset: _._21.NavLogout,
                            height: 18,
                            width: 18
                        })), m.createElement(_.P, null, Object(u.d)("Log Out", "MinimalUser"))))))
                    }
                    return m.createElement(_._7, {
                        margin: 1
                    }, m.createElement(_.u, {
                        onClick: this.onLoginClick
                    }, Object(u.d)("Log in", "MinimalUser")))
                }, t.prototype.reportInteractive = function() {
                    !this.props.data || this.props.data.loading && !this.props.data.error || this.props.latencyTracking.reportInteractive()
                }, t = c.__decorate([Object(v.d)("MinimalUser"), Object(f.a)(k)], t)
            }(m.Component));
        var b = Object(r.b)(function(e) {
            return {
                isLoggedIn: Object(l.d)(e),
                theme: e.ui.theme
            }
        }, function(e) {
            return Object(i.b)({
                logout: o.g,
                login: function() {
                    return o.f(a.a.TopNavLoginButton)
                },
                changeTheme: s.b
            }, e)
        })(y);
        n.d(t, "a", function() {
            return b
        })
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
    "6WAQ": function(e, t, n) {
        "use strict";
        var r;
        n.d(t, "a", function() {
                return r
            }),
            function(e) {
                e.Archive = "ARCHIVE", e.Highlight = "HIGHLIGHT", e.Upload = "UPLOAD", e.WatchParty = "WATCH_PARTY", e.PastPremiere = "PAST_PREMIERE", e.PremiereUpload = "PREMIERE_UPLOAD"
            }(r || (r = {}))
    },
    "7L7x": function(e, t) {},
    "8PKe": function(e, t, n) {
        "use strict";
        var r, i = n("RH2O"),
            a = n("TToO"),
            o = n("OAwv"),
            s = n("GiK3"),
            l = n("6sO2"),
            c = n("+Znq"),
            d = n("7vx8"),
            m = n("S1vB"),
            u = n("ZVME"),
            p = n("CSlQ"),
            f = n("Odds"),
            h = (n("f8UT"), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return s.createElement(f._7, null, s.createElement(f._30, {
                        className: "prime-offer-header",
                        borderBottom: !0,
                        background: f.m.Alt2,
                        padding: {
                            x: 1,
                            y: .5
                        }
                    }, s.createElement(f.P, {
                        bold: !0,
                        type: f._44.H6
                    }, Object(l.d)("Free with Prime", "PrimeOfferHeader"))), this.getNumOfUnseenOffersDisplay())
                }, t.prototype.getNumOfUnseenOffersDisplay = function() {
                    var e = this.props.numOfUnseenOffers;
                    if (e) return s.createElement(f._30, {
                        className: "prime-offer__new-offer-header",
                        borderBottom: !0,
                        background: f.m.Alt2,
                        padding: {
                            x: 1,
                            y: .5
                        }
                    }, s.createElement(f._7, {
                        fullWidth: !0,
                        display: f.Q.Flex,
                        alignItems: f.c.Center
                    }, s.createElement(f._7, {
                        flexGrow: 1
                    }, s.createElement(f.P, {
                        bold: !0,
                        type: f._44.H6
                    }, Object(l.d)("New Prime Loot", "PrimeOfferHeader"))), s.createElement(f._7, {
                        className: "prime-offer__new-offer-header-count",
                        textAlign: f._40.Center
                    }, s.createElement(f._30, {
                        className: "prime-offer__new-offer-header-count__text",
                        background: f.m.Base,
                        color: f.J.Base,
                        display: f.Q.Flex,
                        alignItems: f.c.Center,
                        justifyContent: f._6.Center
                    }, s.createElement(f.P, null, e.toString())))))
                }, t = a.__decorate([Object(p.d)("PrimeOfferHeader")], t)
            }(s.Component)),
            g = n("zCIC"),
            v = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = Object(l.d)("You'll get characters, vehicles, skins, and boosts for games like {hearthstone} and {smite}, plus surprises like a rotating selection of indie games.", {
                        hearthstone: s.createElement(f.P, {
                            italic: !0,
                            type: f._44.Span
                        }, Object(l.d)("Hearthstone", "PrimeEmpty")),
                        smite: s.createElement(f.P, {
                            italic: !0,
                            type: f._44.Span
                        }, Object(l.d)("Smite", "PrimeEmpty"))
                    }, "PrimeEmpty");
                    return s.createElement(f._7, {
                        className: "prime-empty",
                        margin: 2
                    }, s.createElement(f._7, {
                        textAlign: f._40.Center,
                        margin: 2
                    }, s.createElement("img", {
                        className: "prime-empty__image",
                        src: "https://m.media-amazon.com/images/G/01/sm/landing/Trunk_w_Star_transparent._V530838660_.png",
                        alt: Object(l.d)("Prime Treasure Chest", "PrimeEmpty")
                    })), s.createElement(f.P, {
                        type: f._44.P,
                        bold: !0
                    }, Object(l.d)("Free in-game loot every month, plus surprises", "PrimeEmpty")), s.createElement("div", null, e))
                }, t = a.__decorate([Object(p.d)("PrimeEmpty")], t)
            }(s.Component),
            _ = n("lfvs"),
            k = n("oIkB"),
            y = n("R0Kh"),
            b = (n("w/8h"), n("sq7i")),
            O = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return s.createElement(f._7, {
                        className: "prime-claim-button"
                    }, this.getClaimButton())
                }, t.prototype.getClaimButton = function() {
                    var e = this.props,
                        t = this.getButtonText(),
                        n = s.createElement(f.u, {
                            fullWidth: !0,
                            state: this.props.claiming ? f.z.Loading : f.z.Default,
                            disabled: this.props.claiming,
                            onClick: this.props.claimCallback,
                            "data-a-target": "prime-claim-button"
                        }, t);
                    return e.offerType === y.b.EXTERNAL_OFFER ? s.createElement(f.u, {
                        fullWidth: !0,
                        linkTo: e.offerLinkUri,
                        targetBlank: !0
                    }, t) : s.createElement(f._7, {
                        position: f._14.Relative
                    }, n)
                }, t.prototype.getButtonText = function() {
                    return this.props.offerType === y.b.CLAIM_CODE ? Object(l.d)("Get Code", "PrimeClaimButton") : this.props.offerType === y.b.EXTERNAL_OFFER ? Object(l.d)("Learn More", "PrimeClaimButton") : Object(l.d)("Claim Offer", "PrimeClaimButton")
                }, t = a.__decorate([Object(d.a)(b), Object(p.d)("PrimeClaimButton")], t)
            }(s.Component),
            E = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.toggleShowDescription = function() {
                        n.setState({
                            showDescription: !n.state.showDescription
                        })
                    }, n.state = {
                        showDescription: !1
                    }, n
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return s.createElement(f._7, {
                        className: "prime-claim-description",
                        margin: {
                            top: 1
                        }
                    }, s.createElement(f.u, {
                        "data-a-target": "prime-claim-description-button",
                        fullWidth: !0,
                        type: f.A.Hollow,
                        onClick: this.toggleShowDescription
                    }, this.getDescriptionButtonText()), this.getDescriptionBlock())
                }, t.prototype.getDescriptionButtonText = function() {
                    return this.state.showDescription ? Object(l.d)("Close Info", "PrimeClaimDescription") : Object(l.d)("More Info", "PrimeClaimDescription")
                }, t.prototype.getDescriptionBlock = function() {
                    var e = null;
                    return this.state.showDescription && (e = s.createElement(f._30, {
                        className: "prime-claim-description__body",
                        background: f.m.Alt2,
                        border: !0
                    }, s.createElement(f._7, {
                        "data-a-target": "prime-claim-description-body",
                        margin: {
                            bottom: 2
                        },
                        padding: 1
                    }, s.createElement(_, {
                        source: this.props.description || ""
                    })))), e
                }, t = a.__decorate([Object(p.d)("PrimeClaimDescription")], t)
            }(s.Component),
            N = n("Hs3O"),
            C = n("vH/s");
        ! function(e) {
            e.Open = "open", e.Close = "close"
        }(r || (r = {}));
        var S = "test_selector_prime_upsell_button",
            P = "test_selector_prime_upsell_button_wrapper",
            x = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onClick = function() {
                        var e;
                        e = {
                            offerId: t.props.offerId,
                            externalUri: t.getLink()
                        }, l.n.track(C.SpadeEventType.StartYourFreeTrialClick, {
                            client_time: Date.now(),
                            offer_id: e.offerId,
                            external_uri: e.externalUri
                        })
                    }, t.onMouseEnter = function() {
                        var e;
                        e = {
                            offerId: t.props.offerId,
                            externalUri: t.getLink()
                        }, l.n.track(C.SpadeEventType.StartYourFreeTrialMouseEnter, {
                            client_time: Date.now(),
                            offer_id: e.offerId,
                            external_uri: e.externalUri
                        })
                    }, t
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.getLink = function() {
                    return this.props.externalUri ? this.props.externalUri : Object(N.d)(N.c, window.location.pathname.substring(1))
                }, t.prototype.render = function() {
                    return s.createElement(f._7, {
                        className: "prime-upsell-button",
                        margin: {
                            top: 2,
                            bottom: 1
                        }
                    }, s.createElement("div", {
                        "data-test-selector": P,
                        onMouseEnter: this.onMouseEnter
                    }, s.createElement(f.u, {
                        "data-test-selector": S,
                        fullWidth: !0,
                        linkTo: this.getLink(),
                        targetBlank: !0,
                        onClick: this.onClick
                    }, Object(l.d)("Start Your Free Trial", "PrimeUpsellButton"))))
                }, t = a.__decorate([Object(p.d)("PrimeUpsellButton")], t)
            }(s.Component),
            D = n("e2wA"),
            T = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return s.createElement(f._7, {
                        className: "prime-claim",
                        margin: {
                            top: 2,
                            bottom: 1
                        }
                    }, this.getCallToAction(), this.getClaimDescriptionSection())
                }, t.prototype.getCallToAction = function() {
                    var e = this.props.data;
                    return !e.loading && !e.error && e.currentUser && e.currentUser.hasPrime ? s.createElement(O, {
                        offerType: this.props.offerType,
                        offerId: this.props.offerId,
                        claimCallback: this.props.claimCallback,
                        claiming: this.props.claiming,
                        offerLinkUri: this.props.externalUri
                    }) : s.createElement(x, {
                        externalUri: this.props.externalUri,
                        offerId: this.props.offerId
                    })
                }, t.prototype.getClaimDescriptionSection = function() {
                    return this.props.offerType === y.b.EXTERNAL_OFFER ? null : s.createElement(E, {
                        description: this.props.offerDescription
                    })
                }, t = a.__decorate([Object(d.a)(D), Object(p.d)("PrimeInstructions")], t)
            }(s.Component),
            I = n("F8kA"),
            U = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.getErrorMessage = function() {
                        switch (t.props.errorType || y.a.UNKNOWN_ERROR) {
                            case y.a.OFFER_ALREADY_CLAIMED:
                                return Object(l.d)("Oh no! Unable to claim. Another linked Twitch account may have already claimed this content. Click here to {learnMoreLink}.", {
                                    learnMoreLink: s.createElement(I.a, {
                                        to: "https://help.twitch.tv/customer/portal/articles/2572060-twitch-prime-guide#MultipleAccounts",
                                        target: "_blank",
                                        className: "prime-error__link",
                                        "data-a-target": "prime-error_link"
                                    }, "learn more")
                                }, "PrimeError");
                            default:
                                return Object(l.d)("Something has gone wrong. Please try again later.", "PrimeError")
                        }
                    }, t
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = this.getErrorMessage();
                    return s.createElement(f._30, {
                        background: f.m.Alt2,
                        display: f.Q.Flex,
                        justifyContent: f._6.Center,
                        padding: {
                            y: 1
                        },
                        margin: {
                            bottom: 1
                        },
                        textAlign: f._40.Center,
                        "data-test-selector": this.props.testTarget,
                        "data-a-target": this.props.testTarget
                    }, s.createElement(f.P, {
                        type: f._44.H4,
                        align: f._54.Middle
                    }, s.createElement(f._30, {
                        padding: 1,
                        display: f.Q.InlineFlex,
                        flexGrow: 1,
                        flexWrap: f.T.NoWrap,
                        alignItems: f.c.Center,
                        textAlign: f._40.Left,
                        fontSize: this.props.fontSize ? this.props.fontSize : f.U.Size5,
                        "data-a-target": "prime-error-glitch"
                    }, s.createElement(f._7, {
                        margin: {
                            right: 1
                        },
                        display: f.Q.InlineFlex,
                        flexGrow: 1,
                        flexWrap: f.T.NoWrap,
                        alignItems: f.c.Center
                    }, s.createElement(f._20, {
                        asset: f._21.DeadGlitch,
                        type: f._22.Alert,
                        width: 20,
                        height: 20
                    })), s.createElement(f.P, {
                        type: f._44.P
                    }, e))))
                }, t = a.__decorate([Object(p.d)("PrimeError")], t)
            }(s.Component),
            w = (n("nFc2"), function(e) {
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
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = this.state.copied ? Object(l.d)("copied", "CopyButton") : Object(l.d)("copy", "CopyButton");
                    return s.createElement(f._7, {
                        className: "copy-button copy-btn",
                        display: f.Q.Flex,
                        "data-test-target": "copy-button"
                    }, s.createElement(f._1, {
                        className: "copy-button__btn"
                    }, s.createElement(f.u, {
                        onClick: this.copy,
                        type: this.state.copied ? f.A.Success : f.A.Default
                    }, e)), s.createElement("input", {
                        className: "copy-button__copy-input",
                        ref: this.setRef,
                        value: this.props.clipboardText,
                        readOnly: !0
                    }))
                }, t = a.__decorate([Object(p.d)("CopyButton")], t)
            }(s.Component)),
            L = function(e) {
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
                    return this.state && this.state.value ? s.createElement(f._7, {
                        className: "copyable-item",
                        display: f.Q.Flex,
                        flexGrow: 1
                    }, s.createElement(f._7, {
                        flexGrow: 1
                    }, s.createElement(f._3, {
                        type: f._4.Text,
                        onChange: this.onChange,
                        value: this.state.value,
                        disabled: this.props.disabled,
                        readOnly: this.props.readOnly
                    })), s.createElement(f._7, null, s.createElement(w, {
                        clipboardText: this.state.value
                    }))) : null
                }, t = a.__decorate([Object(p.d)("CopyableItem")], t)
            }(s.Component),
            F = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return s.createElement(f._30, {
                        className: "prime-claim-instructions",
                        background: f.m.Alt2,
                        border: !0,
                        padding: 1,
                        fontSize: f.U.Size6
                    }, s.createElement(f._53, null, s.createElement(_, {
                        source: this.props.claimInstructions || "",
                        escapeHtml: !0,
                        renderers: {
                            Link: function(e) {
                                return s.createElement("a", {
                                    href: e.href,
                                    target: "_blank",
                                    rel: "nofollow noopener noreferrer"
                                }, e.children)
                            }
                        }
                    })))
                }, t = a.__decorate([Object(p.d)("PrimeClaimInstructions")], t)
            }(s.Component),
            j = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return s.createElement(f._7, {
                        className: "prime-redeem",
                        margin: {
                            top: 1
                        }
                    }, this.getCodeOrConfirmation(), this.getPrimeClaimInstructions())
                }, t.prototype.getCodeOrConfirmation = function() {
                    return this.props.code && this.props.deliveryMethod === y.b.CLAIM_CODE ? s.createElement(f._7, null, s.createElement(L, {
                        initialText: this.props.code,
                        readOnly: !0,
                        textCenter: !0
                    })) : s.createElement(f._30, {
                        background: f.m.Alt2,
                        display: f.Q.Flex,
                        justifyContent: f._6.Center,
                        padding: {
                            y: 1
                        },
                        margin: {
                            bottom: 1
                        }
                    }, s.createElement(f.P, {
                        type: f._44.H4,
                        align: f._54.Middle
                    }, s.createElement(f._7, {
                        padding: 1,
                        display: f.Q.InlineFlex,
                        flexGrow: 1,
                        flexWrap: f.T.NoWrap,
                        alignItems: f.c.Center,
                        "data-a-target": "prime-redeem-check"
                    }, s.createElement(f._7, {
                        margin: {
                            right: 1
                        },
                        display: f.Q.InlineFlex,
                        flexGrow: 1,
                        flexWrap: f.T.NoWrap,
                        alignItems: f.c.Center
                    }, s.createElement(f._20, {
                        asset: f._21.Check,
                        type: f._22.Success,
                        width: 20,
                        height: 20
                    })), Object(l.d)("Added To Your Twitch Account", "PrimeRedeem"))))
                }, t.prototype.getPrimeClaimInstructions = function() {
                    if (this.props.claimInstructions) return s.createElement(F, {
                        claimInstructions: this.props.claimInstructions || ""
                    })
                }, t = a.__decorate([Object(p.d)("PrimeRedeem")], t)
            }(s.Component),
            B = n("el3o"),
            M = (n("v+rJ"), n("rM0q")),
            R = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        claimed: !1,
                        claiming: !1,
                        error: "",
                        claimData: ""
                    }, t.renderRedeemUpsellOrClaimSection = function(e) {
                        var n = e.content || {},
                            r = e.self || {
                                claimData: ""
                            },
                            i = (t.props.data || {}).currentUser || {};
                        if (t.state.error) {
                            var a = t.getErrorType();
                            return s.createElement(U, {
                                fontSize: f.U.Size6,
                                testTarget: "prime-offer-error",
                                errorType: a
                            })
                        }
                        if ((t.isCurrentOfferClaimed(e) || t.state.claimed) && i && i.hasPrime) {
                            var o = t.state.claimData || r.claimData;
                            return s.createElement(j, {
                                claimInstructions: e.claimInstructions,
                                code: o,
                                deliveryMethod: e.deliveryMethod
                            })
                        }
                        return s.createElement(T, {
                            offerId: e.id,
                            offerDescription: e.description || "",
                            offerType: e.deliveryMethod || "",
                            externalUri: n.externalURL || "",
                            claimCallback: t.claimOffer,
                            claiming: t.state.claiming
                        })
                    }, t.getErrorType = function() {
                        return t.state.error || y.a.UNKNOWN_ERROR
                    }, t.claimOffer = function(e) {
                        e.nativeEvent.stopImmediatePropagation(), t.setState({
                            claiming: !0
                        });
                        var n = t.props.data;
                        if (!n.loading && !n.error && n.currentUser.id) {
                            var r = t.props.offer,
                                i = Object(k.a)({
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
                                    var o = y.a[a.code];
                                    t.setState({
                                        claiming: !1,
                                        claimed: !1,
                                        error: o || y.a.UNKNOWN_ERROR
                                    })
                                }
                            }).catch(function() {
                                t.setState({
                                    claiming: !1,
                                    claimed: !1,
                                    error: y.a.UNKNOWN_ERROR
                                })
                            })
                        }
                    }, t
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = this.props.offer,
                        t = this.props.isLast || !1;
                    if (e) {
                        var n = e.content || {},
                            r = n.game || {},
                            i = n.categories || [];
                        return s.createElement(f._30, {
                            "data-a-target": "prime-offer",
                            className: "prime-offer",
                            alignItems: f.c.Center,
                            borderBottom: !t,
                            padding: {
                                x: 2,
                                y: 1
                            }
                        }, s.createElement(f._7, {
                            className: "prime-offer__title",
                            "data-a-target": e.id,
                            padding: {
                                y: .5
                            }
                        }, s.createElement(_, {
                            className: "prime-offer__title__markdown",
                            containerTagName: "h4",
                            source: e.title || ""
                        })), s.createElement("img", {
                            src: e.imageURL
                        }), s.createElement(f._7, {
                            className: "prime-offer__description",
                            padding: {
                                top: .5
                            }
                        }, s.createElement(f.P, {
                            type: f._44.P
                        }, r.name, " ", i[0])), s.createElement(f._7, {
                            className: "prime-offer__publisher"
                        }, s.createElement(f.P, {
                            type: f._44.P,
                            color: f.J.Alt2,
                            fontSize: f.U.Size7
                        }, n.publisher)), this.renderRedeemUpsellOrClaimSection(e))
                    }
                    return null
                }, t.prototype.isCurrentOfferClaimed = function(e) {
                    return (e.self || {
                        hasEntitlement: !1
                    }).hasEntitlement
                }, t = a.__decorate([Object(d.a)(M, {
                    name: "data"
                }), Object(d.a)(B, {
                    name: "claimPrimeOffer"
                }), Object(p.d)("PrimeOffer")], t)
            }(s.Component),
            A = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return s.createElement(f._30, {
                        className: "prime-offer-placeholder",
                        alignItems: f.c.Center,
                        borderBottom: !0,
                        padding: {
                            x: 2,
                            y: 1
                        }
                    }, s.createElement(f._7, {
                        className: "prime-offer-placeholder__title",
                        padding: {
                            y: .5
                        }
                    }, s.createElement(f._13, {
                        height: 20
                    })), s.createElement(f._13, {
                        height: 160
                    }), s.createElement(f._7, {
                        className: "prime-offer-placeholder__description",
                        padding: {
                            y: .5
                        }
                    }, s.createElement(f._13, {
                        height: 20,
                        width: 160
                    })), s.createElement(f._7, {
                        className: "prime-offer-placeholder__publisher"
                    }, s.createElement(f._13, {
                        height: 20,
                        width: 80
                    })), s.createElement(f._7, {
                        className: "prime-offer-placeholder__claim",
                        margin: {
                            top: 2,
                            bottom: 1
                        }
                    }, s.createElement(f._13, {
                        height: 40
                    })))
                }, t = a.__decorate([Object(p.d)("PrimeOfferPlaceholder")], t)
            }(s.Component),
            W = (n("7L7x"), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return s.createElement(f._30, {
                        "data-test-target": "prime-offers-upsell",
                        "data-a-target": "prime-offers-upsell",
                        className: "prime-offers-upsell",
                        alignItems: f.c.Center,
                        padding: {
                            x: 2,
                            y: 1
                        },
                        borderBottom: !0
                    }, s.createElement(f.P, {
                        type: f._44.H4
                    }, Object(l.d)("Claim With Twitch Prime", "PrimeUpsell")), s.createElement(f._7, {
                        className: "prime-upsell__logo-container",
                        fullWidth: !0,
                        margin: {
                            y: 2
                        },
                        textAlign: f._40.Center
                    }, s.createElement(f._20, {
                        asset: f._21.LogoTwitchPrime,
                        width: 330,
                        height: 150,
                        type: f._22.Brand
                    })), s.createElement(f.P, {
                        type: f._44.P
                    }, Object(l.d)("Get free game loot like this every month plus surprises, ad-free viewing, and loads more with Twitch Prime.", "PrimeUpsell")), s.createElement(x, null))
                }, t = a.__decorate([Object(p.d)("PrimeUpsell")], t)
            }(s.Component)),
            H = n("eY4D"),
            q = (n("DgR+"), n("65au")),
            G = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.shouldShowPlaceholders = function() {
                        if (!t.props.offersData) return !0;
                        var e = t.props.offersData,
                            n = e.primeOffers,
                            r = void 0 === n || null === n;
                        return e.loading || !e.error && r
                    }, t.renderOfferPlaceholders = function() {
                        for (var e = [], t = 0; t < 3; ++t) e.push(s.createElement(A, {
                            key: t
                        }));
                        return e
                    }, t
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    return s.createElement(g.b, {
                        className: "prime-offer-listing"
                    }, s.createElement(f._7, {
                        className: "prime-offer-listing__content",
                        alignItems: f.c.Center,
                        padding: {
                            top: 1,
                            bottom: 2,
                            left: 1,
                            right: 1
                        }
                    }, this.renderUpsell(), this.renderOfferExperience()))
                }, t.prototype.renderUpsell = function() {
                    var e = this.props.userData;
                    if (e && !e.loading && !e.error && !this.currentUserHasPrime(e)) return s.createElement(W, null)
                }, t.prototype.renderOfferExperience = function() {
                    var e = this.props.offersData;
                    if (this.shouldShowPlaceholders()) return this.renderOfferPlaceholders();
                    if (!e.error && e.primeOffers && e.primeOffers.length) {
                        var t = this.getSortedOffers(),
                            n = t[t.length - 1];
                        return t.map(function(e) {
                            return s.createElement(R, {
                                key: e.id,
                                offer: e,
                                isLast: n.id === e.id
                            })
                        })
                    }
                    return s.createElement(v, null)
                }, t.prototype.getSortedOffers = function() {
                    var e = this.getUserId();
                    if (!this.props.offersData || !this.props.offersData.primeOffers) return [];
                    var t = this.props.offersData.primeOffers;
                    if (e) {
                        var n = t.filter(function(e) {
                            return e.self && e.self.hasEntitlement
                        }).sort(y.g);
                        return t.filter(function(e) {
                            return !e.self || !e.self.hasEntitlement
                        }).sort(y.g).concat(n)
                    }
                    return t.slice().sort(y.g)
                }, t.prototype.getUserId = function() {
                    var e = this.props.userData;
                    return e && !e.loading && !e.error && e.currentUser && e.currentUser.id ? e.currentUser.id : ""
                }, t.prototype.currentUserHasPrime = function(e) {
                    var t = e.currentUser;
                    return t && t.hasPrime
                }, t = a.__decorate([Object(d.a)(H, {
                    name: "offersData",
                    options: function() {
                        return {
                            variables: {
                                dateOverride: Object(y.c)()
                            }
                        }
                    },
                    skip: function(e) {
                        return !e.firstPageLoaded
                    }
                }), Object(d.a)(q, {
                    name: "userData",
                    skip: function(e) {
                        return !e.firstPageLoaded
                    }
                }), Object(p.d)("PrimeOfferList", {
                    autoReportInteractive: !0
                })], t)
            }(s.Component);
        var Q = Object(i.b)(function(e) {
                return {
                    firstPageLoaded: e.session.firstPageLoaded
                }
            })(G),
            V = n("tTbW"),
            z = (n("9856"), n("wjhu")),
            K = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        numOfUnseenOffers: 0
                    }, t.showOffersByDefault = function() {
                        var e = location.search,
                            n = o.parse(e);
                        return n && !!n.expandoffers || t.props.openByDefault
                    }, t.onToggleMenu = function(e) {
                        t.offersLoadedEvent = t.registerOffersLoadedEvent();
                        var n, i = t.props.offersData;
                        !i || i.loading || i.error || t.props.latencyTracking.reportCustomEvent(t.offersLoadedEvent), t.seeOffers(), e && t.setState({
                            numOfUnseenOffers: 0
                        }), n = !e, l.n.track(C.SpadeEventType.CrownMenuToggle, {
                            client_time: Date.now(),
                            action: n ? r.Open : r.Close
                        })
                    }, t.onHover = function() {
                        l.n.track(C.SpadeEventType.CrownMouseEnter, {
                            client_time: Date.now()
                        })
                    }, t.registerOffersLoadedEvent = function() {
                        return t.props.latencyTracking.registerCustomEvent({
                            benchmark: 1e3,
                            group: u.a.TwitchPrime,
                            key: u.b.PrimeOfferLoaded,
                            label: u.c.Loaded,
                            start: u.d.Registration
                        })
                    }, t.getUnseenOffers = function(e) {
                        var n = e.offersData;
                        if (n && !n.loading && !n.error) {
                            var r = n.primeOffers || [],
                                i = y.d();
                            t.setState({
                                numOfUnseenOffers: r.filter(function(e) {
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
                            y.e(n)
                        }
                    }, t.renderOfferList = function() {
                        var e = t.props.offersData,
                            n = t.showOffersByDefault() || !1,
                            r = e && !e.loading && !e.error;
                        return t.offersLoadedEvent && r && t.props.latencyTracking.reportCustomEvent(t.offersLoadedEvent), r || n ? s.createElement(f._7, {
                            "data-a-target": "offers-list",
                            className: "prime-offers__list"
                        }, s.createElement(h, {
                            numOfUnseenOffers: t.state.numOfUnseenOffers
                        }), s.createElement(Q, null)) : null
                    }, t
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.getUnseenOffers(this.props)
                }, t.prototype.componentWillReceiveProps = function(e) {
                    this.getUnseenOffers(e)
                }, t.prototype.render = function() {
                    var e = this.props.userData && this.props.userData.requestInfo && Object(m.a)(this.props.userData.requestInfo.countryCode),
                        t = this.props.userData && this.props.userData.currentUser && this.props.userData.currentUser.hasPrime;
                    if (!e && !t) return null;
                    var n = {
                        align: f._48.Center,
                        direction: f._49.Bottom,
                        label: ""
                    };
                    return this.state.numOfUnseenOffers > 0 ? n.label = Object(l.d)("New Prime Loot", "PrimeOffers") : n.label = Object(l.d)("Prime Loot", "PrimeOffers"), s.createElement(f._7, {
                        className: "prime-offers",
                        position: f._14.Relative
                    }, s.createElement(c.a, {
                        onToggle: this.onToggleMenu,
                        openByDefault: this.showOffersByDefault(),
                        tooltipProps: n,
                        onHover: this.onHover
                    }, s.createElement(f.v, {
                        ariaLabel: Object(l.d)("Prime offers", "PrimeOffers"),
                        overlay: !0,
                        size: f.w.Large,
                        icon: f._21.Crown,
                        "data-a-target": "prime-offers-icon",
                        "data-target": "prime-offers-icon"
                    }), s.createElement(f.p, {
                        direction: f.q.BottomRight,
                        size: f.r.Large,
                        offsetX: "9px"
                    }, this.renderOfferList())), this.renderUnseenOffersDisplay())
                }, t.prototype.renderUnseenOffersDisplay = function() {
                    var e = this.state.numOfUnseenOffers;
                    if (e) return s.createElement(f._7, {
                        className: "prime-offers__pill",
                        position: f._14.Absolute
                    }, s.createElement(f.e, {
                        type: f.i.BounceIn,
                        duration: f.g.Medium,
                        timing: f.h.EaseIn,
                        enabled: e > 0
                    }, s.createElement(f._11, {
                        label: e.toString(),
                        type: f._12.Notification
                    })))
                }, t = a.__decorate([Object(d.a)(V, {
                    name: "offersData",
                    skip: function(e) {
                        return !e.firstPageLoaded
                    },
                    options: function() {
                        return {
                            variables: {
                                dateOverride: Object(y.c)()
                            }
                        }
                    }
                }), Object(d.a)(z, {
                    name: "userData"
                }), Object(p.d)("PrimeOffers", {
                    autoReportInteractive: !0
                })], t)
            }(s.Component);
        var Y = Object(i.b)(function(e) {
                return {
                    firstPageLoaded: !!e.session.firstPageLoaded
                }
            })(K),
            J = (n("ukY1"), n("F1v6")),
            X = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = this.props.data.currentUser && this.props.data.currentUser.hasPrime,
                        t = this.props.data.requestInfo && this.props.data.requestInfo.countryCode;
                    if (!Object(y.f)(e, t)) return null;
                    if (this.props.data.loading) return null;
                    var n = Object(N.d)(N.a, ""),
                        r = Object(l.d)("Twitch Prime", "BlueBar"),
                        i = s.createElement("span", null, Object(l.d)("Free loot every month, plus exclusives and surprises, ad-free viewing, and loads more.", "BlueBar")),
                        a = Object(N.d)(N.a, ""),
                        o = Object(l.d)("Start Your Free Trial", "BlueBar");
                    if (!this.props.data.loading && !this.props.data.error) {
                        var c = this.props.data;
                        c && c.primePromotions && c.primePromotions.forEach(function(e) {
                            switch (e.id) {
                                case "twitch.prime.bluebar.left1":
                                    n = e.externalURL, r = e.text;
                                    break;
                                case "twitch.prime.bluebar.center1":
                                    i = s.createElement(_, {
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
                    return s.createElement(f._30, {
                        color: f.J.Base,
                        className: "blue-bar",
                        position: f._14.Relative,
                        fullWidth: !0,
                        zIndex: f._57.Above
                    }, s.createElement(f._7, {
                        className: "blue-bar__bar",
                        display: f.Q.Flex,
                        alignItems: f.c.Center,
                        justifyContent: f._6.Between,
                        flexWrap: f.T.NoWrap,
                        margin: "auto",
                        padding: {
                            x: 2,
                            y: .5
                        }
                    }, s.createElement(f._7, {
                        display: f.Q.InlineFlex,
                        alignItems: f.c.Center,
                        padding: {
                            right: .5
                        }
                    }, s.createElement(f._7, {
                        className: "blue-bar__logo",
                        display: f.Q.InlineFlex,
                        margin: {
                            right: .5
                        },
                        flexShrink: 0
                    }, s.createElement(f._20, {
                        asset: f._21.Crown,
                        width: 20,
                        height: 13
                    })), s.createElement(f.P, {
                        bold: !0,
                        type: f._44.Span,
                        noWrap: !0,
                        fontSize: f.U.Size6
                    }, s.createElement(f._1, {
                        padding: {
                            x: 1
                        }
                    }, s.createElement("a", {
                        className: "blue-bar__link",
                        href: n,
                        target: "_blank",
                        rel: "noopener noreferrer"
                    }, r))), s.createElement(f.P, {
                        className: "blue-bar__headline",
                        type: f._44.Span,
                        fontSize: f.U.Size6
                    }, i)), s.createElement(f._7, {
                        display: f.Q.InlineFlex,
                        flexShrink: 0
                    }, s.createElement(f.P, {
                        bold: !0,
                        type: f._44.Span,
                        noWrap: !0,
                        fontSize: f.U.Size6,
                        color: f.J.Base
                    }, s.createElement("a", {
                        className: "blue-bar__link",
                        href: a,
                        target: "_blank",
                        rel: "noopener noreferrer"
                    }, o)))))
                }, t = a.__decorate([Object(d.a)(J, {
                    options: function() {
                        return {
                            variables: {
                                stringIds: ["twitch.prime.bluebar.left1", "twitch.prime.bluebar.center1", "twitch.prime.bluebar.right1"],
                                dateOverride: Object(y.c)()
                            }
                        }
                    }
                }), Object(p.d)("BlueBarComponent")], t)
            }(s.Component);
        n.d(t, "c", function() {
            return Y
        }), n.d(t, "a", function() {
            return X
        }), n.d(t, "b", function() {
            return U
        }), n.d(t, "d", function() {
            return y.c
        })
    },
    9856: function(e, t) {},
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
    "JeT+": function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n("RH2O"),
            i = n("F8kA"),
            a = n("Aj/L"),
            o = n("TToO"),
            s = n("GiK3"),
            l = n("bZTi"),
            c = n("VAT8"),
            d = n("tnNl"),
            m = n("8PKe"),
            u = n("Odds"),
            p = l.a.wrap(function() {
                return n.e(76).then(n.bind(null, "HQb3"))
            }, "BitsLandingPage"),
            f = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return o.__extends(t, e), t.prototype.render = function() {
                    return s.createElement(u._7, {
                        className: "bits-root " + Object(c.c)(this.props.theme),
                        position: u._14.Absolute,
                        overflow: u._10.Hidden,
                        attachRight: !0,
                        attachTop: !0,
                        attachBottom: !0,
                        attachLeft: !0,
                        margin: {
                            top: 5
                        }
                    }, s.createElement(d.a, {
                        darkModeEnabled: !0
                    }), s.createElement(m.a, null), s.createElement(u._7, {
                        display: u.Q.Flex,
                        flexWrap: u.T.NoWrap,
                        fullHeight: !0,
                        position: u._14.Relative
                    }, s.createElement(u._1, {
                        display: u.Q.Flex,
                        position: u._14.Relative,
                        flexGrow: 1,
                        fullHeight: !0,
                        fullWidth: !0
                    }, s.createElement("main", {
                        className: "bits-root__main"
                    }, s.createElement(i.d, {
                        path: "/bits",
                        component: p
                    })))))
                }, t
            }(s.Component);
        var h = Object(r.b)(function(e) {
                return {
                    firstPageLoaded: !!e.session.firstPageLoaded,
                    isLoggedIn: Object(a.d)(e),
                    theme: e.ui.theme
                }
            })(f),
            g = Object(i.f)(h);
        n.d(t, "BitsRoot", function() {
            return g
        })
    },
    Kkxm: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "MinimalTopNav_MinimalUser"
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
                end: 93
            }
        };
        n.loc.source = {
            body: "query MinimalTopNav_MinimalUser {\ncurrentUser {\nid\ndisplayName\nprofileImageURL(width: 70)\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    NikC: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return r
        }), t.b = function(e, t, n) {
            void 0 === n && (n = !0);
            return function(r) {
                r(Object(a.A)(e)), n && Object(i.d)(e), t && Object(o.b)(e, t)
            }
        };
        var r, i = n("VAT8"),
            a = n("7enT"),
            o = n("xrVp");
        ! function(e) {
            e[e.UserMenu = 1] = "UserMenu", e[e.TypedCommand = 2] = "TypedCommand"
        }(r || (r = {}))
    },
    R0Kh: function(e, t, n) {
        "use strict";
        n.d(t, "b", function() {
            return o
        }), n.d(t, "a", function() {
            return s
        }), n.d(t, "d", function() {
            return l
        }), n.d(t, "e", function() {
            return c
        }), n.d(t, "g", function() {
            return d
        }), n.d(t, "f", function() {
            return u
        }), n.d(t, "c", function() {
            return p
        });
        var r = n("OAwv"),
            i = (n.n(r), n("6sO2")),
            a = n("S1vB"),
            o = {
                DIRECT_ENTITLEMENT: "DIRECT_ENTITLEMENT",
                CLAIM_CODE: "CLAIM_CODE",
                EXTERNAL_OFFER: "EXTERNAL_OFFER"
            },
            s = {
                UNKNOWN_ERROR: "UNKNOWN_ERROR",
                OFFER_ALREADY_CLAIMED: "OFFER_ALREADY_CLAIMED"
            },
            l = function() {
                return m("seenOffers")
            },
            c = function(e) {
                i.l.set("seenOffers", e)
            },
            d = function(e, t) {
                return (e && (e.priority || 0 === e.priority) ? e.priority : 99999) - (t && (t.priority || 0 === t.priority) ? t.priority : 99999)
            },
            m = function(e) {
                return i.l.get(e, [])
            },
            u = function(e, t) {
                return void 0 !== e && void 0 !== t && (!e && Object(a.a)(t))
            },
            p = function() {
                var e = location.search,
                    t = r.parse(e);
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
    Xorj: function(e, t) {},
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
    e6tx: function(e, t) {},
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
    f8UT: function(e, t) {},
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
                        }), t.props.onHover && t.props.onHover()
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
                    if (n.type !== o.p) throw new Error("ToggleBalloonWrapper needs a Balloon as its second child element");
                    var a = i.cloneElement(t, {
                            onClick: this.handleButtonClick
                        }),
                        s = null;
                    (this.state.hasInteracted || this.props.alwaysMountBalloonContent) && (s = i.cloneElement(n, {
                        show: this.state.showBalloon
                    }));
                    var l = a;
                    return this.props.tooltipProps && (l = i.createElement(o._47, r.__assign({}, this.props.tooltipProps), a)), i.createElement(o._7, {
                        "data-toggle-balloon-id": this.toggleBalloonId,
                        display: this.props.display,
                        position: o._14.Relative
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
    tnNl: function(e, t, n) {
        "use strict";
        var r = n("TToO"),
            i = n("GiK3"),
            a = n("F8kA"),
            o = n("vH/s"),
            s = n("CSlQ"),
            l = n("2b/B"),
            c = n("Odds"),
            d = (n("Xorj"), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    return i.createElement(c._1, {
                        position: c._14.Fixed,
                        attachTop: !0,
                        fullWidth: !0
                    }, i.createElement("nav", {
                        className: "minimal-top-nav"
                    }, i.createElement(c._7, {
                        className: "minimal-top-nav__menu",
                        display: c.Q.Flex,
                        alignItems: c.c.Stretch,
                        flexWrap: c.T.NoWrap,
                        fullHeight: !0,
                        justifyContent: c._6.Between
                    }, i.createElement(c._1, {
                        display: c.Q.InlineFlex,
                        alignItems: c.c.Center,
                        flexShrink: 0
                    }, i.createElement(a.a, {
                        to: {
                            pathname: "/",
                            state: {
                                medium: o.PageviewMedium.TopNav,
                                content: o.PageviewContent.Logo
                            }
                        },
                        className: "minimal-top-nav__home-link"
                    }, i.createElement(c._20, {
                        asset: c._21.LogoTwitch,
                        width: 94,
                        height: 32
                    }))), i.createElement(l.a, {
                        darkModeEnabled: this.props.darkModeEnabled
                    }))))
                }, t = r.__decorate([Object(s.d)("MinimalTopNav", {
                    autoReportInteractive: !0
                })], t)
            }(i.Component));
        n.d(t, "a", function() {
            return d
        })
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
    xrVp: function(e, t, n) {
        "use strict";
        t.b = function(e, t) {
            var n = "";
            switch (t) {
                case o.a.TypedCommand:
                    n = "typed_command";
                    break;
                case o.a.UserMenu:
                    n = "user_menu";
                    break;
                default:
                    n = "user_menu"
            }
            var a = "";
            switch (e) {
                case i.a.Dark:
                    a = "dark";
                    break;
                case i.a.Light:
                    a = "light";
                    break;
                default:
                    a = "light"
            }
            r.n.track(s.SpadeEventType.ThemeChange, {
                source: n,
                mode: a
            })
        }, t.a = function(e) {
            switch (e) {
                case a.a.Archive:
                    return s.SpadeVideoBroadcastType.Archive;
                case a.a.Highlight:
                    return s.SpadeVideoBroadcastType.Highlight;
                case a.a.Upload:
                    return s.SpadeVideoBroadcastType.Upload;
                case a.a.WatchParty:
                    return s.SpadeVideoBroadcastType.WatchParty;
                case a.a.PastPremiere:
                    return s.SpadeVideoBroadcastType.PastPremiere;
                case a.a.PremiereUpload:
                    return s.SpadeVideoBroadcastType.PremiereUpload;
                default:
                    var t = e;
                    return t
            }
        };
        var r = n("6sO2"),
            i = n("NXs7"),
            a = n("6WAQ"),
            o = n("NikC"),
            s = n("vH/s")
    },
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
//# sourceMappingURL=pages.bits-9b10370fcf1cd59635105db006889420.js.map