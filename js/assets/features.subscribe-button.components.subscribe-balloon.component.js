(window.webpackJsonp = window.webpackJsonp || []).push([
    [180], {
        "+naV": function(e, t, n) {
            e.exports = n.p + "assets/10-gifts-2x-2f03f55cc8cde11ce21f.png"
        },
        "/Zlu": function(e, t, n) {
            e.exports = n.p + "assets/1-gift-4x-ce25ec1115689841dda6.png"
        },
        "/iCH": function(e, t, n) {
            e.exports = n.p + "assets/1-gift-2x-fc586bd84eadc524746e.png"
        },
        "0WFu": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return r
            });
            var i = n("3Bft");

            function r(e) {
                return [i.b.Prime, i.b.Custom].includes(e) ? null : parseInt(e, 10) / 1e3
            }
        },
        "25vm": function(e, t, n) {},
        "2xp8": function(e, t, n) {
            e.exports = n.p + "assets/50-gifts-1x-1a09217a34e3815d5470.png"
        },
        "487o": function(e, t) {
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
        "4NwI": function(e, t, n) {
            "use strict";
            var i = n("/MKj"),
                r = n("mrSG"),
                a = n("q1tI"),
                s = n("oJmH"),
                o = n("/7QA"),
                c = n("8/mp"),
                u = n("yR8l"),
                l = n("GnwI"),
                d = n("Ue10"),
                p = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        var e = Object(o.d)("You'll get characters, vehicles, skins, and boosts for games like {hearthstone} and {smite}, plus surprises like a rotating selection of indie games.", {
                            hearthstone: a.createElement(d.W, {
                                italic: !0,
                                type: d.Nb.Span
                            }, Object(o.d)("Hearthstone", "PrimeEmpty")),
                            smite: a.createElement(d.W, {
                                italic: !0,
                                type: d.Nb.Span
                            }, Object(o.d)("Smite", "PrimeEmpty"))
                        }, "PrimeEmpty");
                        return a.createElement(d.Wa, {
                            className: "prime-empty",
                            margin: 2
                        }, a.createElement(d.Wa, {
                            textAlign: d.Jb.Center,
                            margin: 2
                        }, a.createElement("img", {
                            className: "prime-empty__image",
                            src: "https://m.media-amazon.com/images/G/01/sm/landing/Trunk_w_Star_transparent._V530838660_.png",
                            alt: Object(o.d)("Prime Treasure Chest", "PrimeEmpty")
                        })), a.createElement(d.W, {
                            type: d.Nb.P,
                            bold: !0
                        }, Object(o.d)("Free in-game loot every month, plus surprises", "PrimeEmpty")), a.createElement("div", null, e))
                    }, t
                }(a.Component),
                m = Object(l.b)("PrimeEmpty", {
                    autoReportInteractive: !0
                })(p),
                f = n("6x+I"),
                b = n("geRD"),
                g = n("JVUd"),
                h = n("cinR"),
                v = n("Rjl4"),
                S = n("O4UZ"),
                k = n("cx1G"),
                y = (n("5ZOr"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onClick = function(e) {
                            Object(v.i)({
                                offerID: t.props.offerID,
                                externalURL: t.props.externalURL,
                                hasPrime: !0,
                                index: t.props.index
                            }, t.props.offerType), t.props.claimCallback && t.props.offerType !== S.e.EXTERNAL_OFFER && !t.props.externalURL && t.props.claimCallback(e)
                        }, t.onHover = function() {
                            Object(v.j)({
                                offerID: t.props.offerID,
                                externalURL: t.props.externalURL,
                                hasPrime: !0,
                                index: t.props.index
                            }, t.props.offerType)
                        }, t.isGifted = function() {
                            return t.props.data && t.props.data.currentUser && t.props.data.currentUser.primeGift
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.data && this.props.data.loading && !this.props.data.error || this.props.latencyTracking.reportInteractive()
                    }, t.prototype.componentDidUpdate = function() {
                        this.props.data && this.props.data.loading && !this.props.data.error || this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        var e = this.props.orientation || S.c.Default,
                            t = S.k(e),
                            n = S.h("prime-claim-button", e);
                        return a.createElement(d.Wa, {
                            fullWidth: !0,
                            className: n,
                            display: t ? d.X.Block : d.X.InlineBlock
                        }, this.renderClaimButton())
                    }, t.prototype.renderClaimButton = function() {
                        var e = this.props,
                            t = e.externalURL,
                            n = e.claiming,
                            i = e.offerType,
                            r = this.getButtonText();
                        if (t || i === S.e.EXTERNAL_OFFER) return a.createElement(h.a, {
                            onHover: this.onHover
                        }, a.createElement(d.z, {
                            fullWidth: !0,
                            linkTo: t,
                            targetBlank: !0,
                            onClick: this.onClick,
                            "data-a-target": "prime-claim-button"
                        }, r));
                        var s = a.createElement(h.a, {
                            onHover: this.onHover
                        }, a.createElement(d.z, {
                            fullWidth: !0,
                            state: n ? d.E.Loading : d.E.Default,
                            disabled: n,
                            linkTo: t,
                            onClick: this.onClick,
                            "data-a-target": "prime-claim-button",
                            icon: this.isGifted() ? d.ob.Gift : void 0
                        }, r));
                        return a.createElement(d.Wa, {
                            position: d.eb.Relative
                        }, s)
                    }, t.prototype.getButtonText = function() {
                        var e = Object(o.d)("Learn More", "PrimeClaimButton");
                        if (this.props.externalURL) return e;
                        switch (this.props.offerType) {
                            case S.e.CLAIM_CODE:
                                return Object(o.d)("Get Code", "PrimeClaimButton");
                            case S.e.EXTERNAL_OFFER:
                                return e;
                            case S.e.DIRECT_ENTITLEMENT:
                            default:
                                return this.isGifted() ? Object(o.d)("Claim Gift", "PrimeClaimButton") : Object(o.d)("Claim Offer", "PrimeClaimButton")
                        }
                    }, t
                }(a.Component)),
                O = Object(s.compose)(Object(u.a)(k, {
                    skip: function(e) {
                        return !Object(S.j)(e.offerID)
                    },
                    options: function(e) {
                        return {
                            variables: {
                                offerID: e.offerID
                            }
                        }
                    }
                }), Object(l.b)("PrimeClaimButton"))(y),
                P = (n("KbPt"), function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.toggleShowDescription = function() {
                            var e = !n.state.showDescription;
                            Object(v.l)(e, {
                                offerID: n.props.offerID,
                                externalURL: n.props.externalURL,
                                hasPrime: n.props.hasPrime,
                                index: n.props.index
                            }), n.setState({
                                showDescription: e
                            })
                        }, n.onHover = function() {
                            n.state.showDescription ? Object(v.k)({
                                offerID: n.props.offerID,
                                externalURL: n.props.externalURL,
                                hasPrime: n.props.hasPrime,
                                index: n.props.index
                            }) : Object(v.m)({
                                offerID: n.props.offerID,
                                externalURL: n.props.externalURL,
                                hasPrime: n.props.hasPrime,
                                index: n.props.index
                            })
                        }, n.renderVerticalDescriptionBlock = function() {
                            return a.createElement(d.xb, {
                                className: "prime-claim-description__body",
                                background: d.r.Alt2,
                                border: !0,
                                position: d.eb.Relative
                            }, n.renderDescription())
                        }, n.renderHorizontalDescriptionBlock = function() {
                            return a.createElement(d.xb, {
                                className: "prime-claim-description__body",
                                background: d.r.Base,
                                border: !0,
                                position: d.eb.Absolute,
                                attachTop: !0,
                                attachLeft: !0,
                                attachRight: !0,
                                margin: {
                                    right: 1,
                                    top: .5
                                },
                                overflow: d.Za.Scroll
                            }, n.renderDescription())
                        }, n.renderDescription = function() {
                            return a.createElement(d.Wa, {
                                "data-a-target": "prime-claim-description-body",
                                margin: {
                                    bottom: 2
                                },
                                padding: 1
                            }, a.createElement(f, {
                                source: n.props.description || ""
                            }))
                        }, n.state = {
                            showDescription: !1
                        }, n
                    }
                    return r.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        var e = this.props.orientation || S.c.Default,
                            t = Object(S.h)("prime-claim-description", e);
                        return a.createElement(d.Wa, {
                            fullWidth: !0,
                            className: t,
                            margin: {
                                top: 1
                            }
                        }, a.createElement(h.a, {
                            onHover: this.onHover
                        }, a.createElement(d.z, {
                            "data-a-target": "prime-claim-description-button",
                            fullWidth: !0,
                            type: d.F.Hollow,
                            onClick: this.toggleShowDescription
                        }, this.getDescriptionButtonText())), this.getDescriptionBlock(e))
                    }, t.prototype.getDescriptionButtonText = function() {
                        return this.state.showDescription ? Object(o.d)("Close Info", "PrimeClaimDescription") : Object(o.d)("More Info", "PrimeClaimDescription")
                    }, t.prototype.getDescriptionBlock = function(e) {
                        var t = null,
                            n = Object(S.k)(e);
                        return this.state.showDescription && (t = n ? this.renderVerticalDescriptionBlock() : this.renderHorizontalDescriptionBlock()), t
                    }, t
                }(a.Component)),
                E = Object(l.b)("PrimeClaimDescription", {
                    autoReportInteractive: !0
                })(P),
                N = n("fvjX"),
                C = n("aCAx"),
                T = n("kRBY"),
                x = n("ZS2+"),
                _ = n("cZKs"),
                D = x.a.wrap(function() {
                    return Promise.all([n.e(0), n.e(84)]).then(n.bind(null, "+Zk8"))
                }, "GiftForm"),
                I = function(e) {
                    function t(t) {
                        return e.call(this, t) || this
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        return a.createElement(d.Wa, {
                            className: "prime-gift-modal",
                            position: d.eb.Relative,
                            "data-a-target": "passport-modal"
                        }, a.createElement(D, {
                            action: this.props.action,
                            offerID: this.props.offerID,
                            offer: this.props.offer,
                            getGiftRecipientList: this.props.getGiftRecipientList,
                            updateGiftRecipientList: this.props.updateGiftRecipientList
                        }), a.createElement(_.a, {
                            closeOnBackdropClick: !0,
                            onClose: this.props.onClose
                        }))
                    }, t
                }(a.Component),
                G = Object(l.b)("PrimeGiftModal", {
                    autoReportInteractive: !0
                })(I),
                F = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            recipients: t.getGiftLogins(),
                            newRecipients: new Set
                        }, t.onClick = function() {
                            t.props.isLoggedIn && (t.props.giftPrimeOffer(t.getGiftRecipients.bind(t), t.updateGiftRecipients.bind(t)), t.props.toggleCrownMenu && t.props.toggleCrownMenu(!1))
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        return a.createElement(d.z, {
                            type: d.F.Hollow,
                            icon: d.ob.Gift,
                            onClick: this.onClick,
                            fullWidth: !0,
                            targetBlank: !0,
                            "data-a-target": "prime-gift-button"
                        }, Object(o.d)("Send as a Gift", "PrimeGiftExperiment"))
                    }, t.prototype.getGiftRecipients = function() {
                        return this.state.recipients.concat(Array.from(this.state.newRecipients.values()))
                    }, t.prototype.updateGiftRecipients = function(e) {
                        this.state.newRecipients.add(e)
                    }, t.prototype.getGiftLogins = function() {
                        var e = [];
                        return this.props.offer && this.props.offer.self && this.props.offer.self.gifts && this.props.offer.self.gifts.forEach(function(t) {
                            t.to && t.to.login && e.push(t.to.login)
                        }), e
                    }, t
                }(a.Component),
                w = Object(s.compose)(Object(l.b)("PrimeGiftButton", {
                    autoReportInteractive: !0
                }))(F);
            var R = Object(i.connect)(function(e) {
                    return {
                        isLoggedIn: Object(T.f)(e)
                    }
                }, function(e, t) {
                    return Object(N.bindActionCreators)({
                        giftPrimeOffer: function(e, n) {
                            return Object(C.d)(G, {
                                offerID: t.offerID,
                                offer: t.offer,
                                getGiftRecipientList: e,
                                updateGiftRecipientList: n
                            })
                        }
                    }, e)
                })(w),
                W = n("9pSj"),
                j = n("j3KY"),
                B = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onClick = function() {
                            Object(v.q)({
                                offerID: t.props.offerID,
                                externalURL: t.getLink(),
                                hasPrime: !1,
                                index: t.props.index
                            })
                        }, t.onHover = function() {
                            Object(v.r)({
                                offerID: t.props.offerID,
                                externalURL: t.getLink(),
                                hasPrime: !1,
                                index: t.props.index
                            })
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        return a.createElement(d.Wa, {
                            className: "prime-upsell-button",
                            margin: {
                                top: 2,
                                bottom: 1
                            }
                        }, a.createElement(h.a, {
                            onHover: this.onHover
                        }, a.createElement(d.z, {
                            fullWidth: !0,
                            linkTo: this.getLink(),
                            targetBlank: !0,
                            onClick: this.onClick
                        }, Object(o.d)("Start Your Free Trial", "PrimeUpsellButton"))))
                    }, t.prototype.getLink = function() {
                        if (this.props.externalURL) return this.props.externalURL;
                        var e = (this.props.orientation || W.b.Default) === W.b.Vertical ? j.d : j.b,
                            t = this.props.externalReftag || e,
                            n = window.location.pathname.substring(1);
                        return Object(j.e)(t, n)
                    }, t
                }(a.Component),
                L = Object(l.b)("PrimeUpsellButton", {
                    autoReportInteractive: !0
                })(B),
                U = n("zUQL"),
                A = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return r.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.data.loading && !this.props.data.error || this.props.latencyTracking.reportInteractive()
                    }, t.prototype.componentDidUpdate = function() {
                        this.props.data.loading && !this.props.data.error || this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        var e = this.props.orientation || S.c.Default,
                            t = Object(S.h)("prime-claim", e);
                        return a.createElement(d.Wa, {
                            className: t,
                            margin: {
                                bottom: 1
                            }
                        }, this.getCallToAction(), this.getClaimDescriptionSection())
                    }, t.prototype.getCallToAction = function() {
                        var e = this.props.data;
                        return Object(S.m)(e) || this.props.isGifted ? Object(S.m)(e) && Object(S.j)(this.props.offerID) ? a.createElement(d.Wa, {
                            display: d.X.Flex,
                            alignItems: d.f.Center
                        }, a.createElement(d.Wa, {
                            fullWidth: !0,
                            display: d.X.Flex,
                            margin: {
                                right: 1
                            }
                        }, this.renderPrimeClaimButton()), a.createElement(d.Wa, {
                            fullWidth: !0,
                            display: d.X.Flex,
                            margin: {
                                left: 1
                            }
                        }, a.createElement(R, {
                            offerID: this.props.offerID,
                            offer: this.props.offer,
                            toggleCrownMenu: this.props.toggleCrownMenu
                        }))) : this.renderPrimeClaimButton() : a.createElement(L, {
                            externalReftag: this.props.externalReftag,
                            externalURL: this.props.externalURL,
                            offerID: this.props.offerID,
                            index: this.props.index,
                            orientation: this.props.orientation
                        })
                    }, t.prototype.getClaimDescriptionSection = function() {
                        if (this.props.offerType === S.e.EXTERNAL_OFFER || this.props.externalURL) return null;
                        var e = this.props.data;
                        return a.createElement(E, {
                            description: this.props.offerDescription,
                            offerID: this.props.offerID,
                            externalURL: this.props.externalURL,
                            index: this.props.index,
                            orientation: this.props.orientation,
                            hasPrime: Object(S.m)(e)
                        })
                    }, t.prototype.renderPrimeClaimButton = function() {
                        return a.createElement(O, {
                            offerType: this.props.offerType,
                            offerID: this.props.offerID,
                            claimCallback: this.props.claimCallback,
                            claiming: this.props.claiming,
                            orientation: this.props.orientation,
                            externalURL: this.props.externalURL,
                            index: this.props.index
                        })
                    }, t
                }(a.Component),
                M = Object(s.compose)(Object(u.a)(U), Object(l.b)("PrimeInstructions"))(A),
                H = n("z8lI"),
                z = (n("25vm"), function(e) {
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
                    return r.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        var e = this.state.copied ? Object(o.d)("copied", "CopyButton") : Object(o.d)("copy", "CopyButton");
                        return a.createElement(d.Wa, {
                            className: "copy-button copy-btn",
                            display: d.X.Flex
                        }, a.createElement(d.Oa, {
                            className: "copy-button__btn"
                        }, a.createElement(d.z, {
                            onClick: this.copy,
                            type: this.state.copied ? d.F.Success : d.F.Default
                        }, e)), a.createElement("input", {
                            className: "copy-button__copy-input",
                            ref: this.setRef,
                            value: this.props.clipboardText,
                            readOnly: !0
                        }))
                    }, t
                }(a.Component)),
                V = Object(N.compose)(Object(l.b)("CopyButton"))(z),
                q = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onChange = function(e) {
                            t.setState({
                                value: e.currentTarget.value,
                                copied: !1
                            })
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive()
                    }, t.prototype.componentWillMount = function() {
                        this.props.initialText && this.setState({
                            value: this.props.initialText,
                            copied: !1
                        })
                    }, t.prototype.render = function() {
                        return this.state && this.state.value ? a.createElement(d.Wa, {
                            className: "copyable-item",
                            display: d.X.Flex,
                            flexGrow: 1
                        }, a.createElement(d.Wa, {
                            flexGrow: 1
                        }, a.createElement(d.Qa, {
                            type: d.Sa.Text,
                            onChange: this.onChange,
                            value: this.state.value,
                            disabled: this.props.disabled,
                            readOnly: this.props.readOnly
                        })), a.createElement(d.Wa, null, a.createElement(V, {
                            clipboardText: this.state.value
                        }))) : null
                    }, t
                }(a.Component),
                X = Object(N.compose)(Object(l.b)("CopyableItem"))(q),
                $ = (n("Sb+K"), function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.getClaimInstructions = function() {
                            return a.createElement(d.Wb, null, a.createElement(f, {
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
                            return a.createElement(d.xb, {
                                className: "prime-claim-instructions prime-claim-instructions--vertical",
                                "data-a-target": "prime-claim-instructions--vertical",
                                background: d.r.Alt2,
                                border: !0,
                                padding: 1,
                                fontSize: d.Ba.Size6
                            }, n.getClaimInstructions())
                        }, n.renderHorizontalLayout = function() {
                            return a.createElement(d.xb, {
                                fullWidth: !0,
                                className: "prime-claim-instructions prime-claim-instructions--horizontal",
                                margin: {
                                    top: 1
                                }
                            }, a.createElement(d.Wa, {
                                fullWidth: !0,
                                justifyContent: d.Va.Center,
                                textAlign: d.Jb.Center
                            }, a.createElement(d.U, {
                                onClick: n.toggleShowDescription
                            }, n.getDescriptionButtonText())), n.state.showDescription && a.createElement(d.xb, {
                                className: "prime-claim-instructions__body",
                                "data-a-target": "prime-claim-instructions--horizontal",
                                border: !0,
                                position: d.eb.Absolute,
                                padding: 1,
                                background: d.r.Alt,
                                overflow: d.Za.Scroll,
                                attachTop: !0,
                                attachLeft: !0,
                                attachRight: !0,
                                margin: {
                                    right: 1,
                                    top: .5
                                }
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
                    return r.__extends(t, e), t.prototype.render = function() {
                        var e = this.props.orientation || S.c.Default;
                        return Object(S.k)(e) ? this.renderVerticalLayout() : this.renderHorizontalLayout()
                    }, t
                }(a.Component)),
                Q = Object(l.b)("PrimeClaimInstructions", {
                    autoReportInteractive: !0
                })($),
                K = n("UFVY"),
                J = (n("PCo6"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.renderGiftRedeemedButton = function(e) {
                            if (!t.props.data || t.props.data.loading || t.props.data.error) return a.createElement(d.db, null);
                            var n = t.props.data.currentUser && t.props.data.currentUser.primeGift;
                            return a.createElement(d.xb, {
                                fullWidth: !0,
                                display: d.X.Flex,
                                justifyContent: d.Va.Center,
                                margin: {
                                    bottom: e,
                                    right: .5
                                },
                                className: "prime-redeem__confirmation",
                                alignItems: d.f.Center,
                                borderRadius: d.x.Medium
                            }, a.createElement(d.W, {
                                type: d.Nb.Span,
                                align: d.Xb.Middle,
                                color: d.O.Overlay
                            }, a.createElement(d.Wa, {
                                display: d.X.InlineFlex,
                                flexWrap: d.Aa.NoWrap,
                                alignItems: d.f.Center,
                                "data-test-target": "prime-redeem-check",
                                "data-a-target": "prime-redeem-check"
                            }, a.createElement(d.Wa, {
                                margin: {
                                    right: 1
                                },
                                display: d.X.InlineFlex,
                                flexWrap: d.Aa.NoWrap,
                                padding: {
                                    y: .5
                                },
                                alignItems: d.f.Center
                            }, a.createElement(d.nb, {
                                asset: n ? d.ob.Gift : d.ob.Check,
                                width: 20,
                                height: 20
                            })), n ? Object(o.d)("Gift Claimed", "PrimeRedeem") : Object(o.d)("Claimed", "PrimeRedeem"))))
                        }, t.getPrimeClaimInstructions = function() {
                            return a.createElement(Q, {
                                claimInstructions: t.props.claimInstructions || "",
                                orientation: t.props.orientation
                            })
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        var e = this.props.orientation || S.c.Default,
                            t = Object(S.h)("prime-redeem", e);
                        return a.createElement(d.Wa, {
                            className: t
                        }, this.getCodeOrConfirmation(e), this.getPrimeClaimInstructions())
                    }, t.prototype.getCodeOrConfirmation = function(e) {
                        var t = Object(S.k)(e);
                        if (this.props.code && this.props.deliveryMethod === S.e.CLAIM_CODE) return a.createElement(d.Wa, {
                            "data-a-target": "prime-redeem-code-container"
                        }, a.createElement(X, {
                            initialText: this.props.code,
                            readOnly: !0,
                            textCenter: !0
                        }));
                        var n = t ? 1 : 0;
                        return Object(S.j)(this.props.offerID) ? this.props.isPrime ? a.createElement(d.Wa, {
                            display: d.X.Flex
                        }, this.renderGiftRedeemedButton(n), a.createElement(d.Wa, {
                            fullWidth: !0,
                            display: d.X.Flex,
                            margin: {
                                left: .5,
                                bottom: n
                            }
                        }, a.createElement(R, {
                            offerID: this.props.offerID,
                            offer: this.props.offer,
                            toggleCrownMenu: this.props.toggleCrownMenu
                        }))) : this.renderGiftRedeemedButton(n) : a.createElement(d.xb, {
                            display: d.X.Flex,
                            justifyContent: d.Va.Center,
                            margin: {
                                bottom: n
                            },
                            padding: {
                                y: n
                            },
                            className: "prime-redeem__confirmation",
                            borderRadius: d.x.Medium
                        }, a.createElement(d.W, {
                            type: t ? d.Nb.H4 : d.Nb.H6,
                            align: d.Xb.Middle,
                            color: d.O.Overlay
                        }, a.createElement(d.Wa, {
                            display: d.X.InlineFlex,
                            flexGrow: 1,
                            flexWrap: d.Aa.NoWrap,
                            alignItems: d.f.Center,
                            "data-test-target": "prime-redeem-check",
                            "data-a-target": "prime-redeem-check",
                            padding: {
                                left: n
                            }
                        }, a.createElement(d.Wa, {
                            margin: {
                                right: 1
                            },
                            display: d.X.InlineFlex,
                            flexGrow: 1,
                            flexWrap: d.Aa.NoWrap,
                            padding: {
                                y: .5
                            },
                            alignItems: d.f.Center
                        }, a.createElement(d.nb, {
                            asset: d.ob.Check,
                            width: 20,
                            height: 20
                        })), Object(o.d)("Added To Your Twitch Account", "PrimeRedeem"))))
                    }, t
                }(a.Component)),
                Y = Object(s.compose)(Object(l.b)("PrimeRedeem", {
                    autoReportInteractive: !0
                }), Object(u.a)(K, {
                    skip: function(e) {
                        return !Object(S.j)(e.offerID)
                    },
                    options: function(e) {
                        return {
                            variables: {
                                offerID: e.offerID
                            }
                        }
                    }
                }))(J),
                Z = n("SStD"),
                ee = n("QK1T"),
                te = n("9k8c"),
                ne = n("PsVi"),
                ie = (n("oj5W"), "prime-offer__video"),
                re = function(e) {
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
                                i = e.content,
                                r = i && i.game && i.game.name || "",
                                s = i && i.categories && i.categories[0] || "",
                                o = i && i.publisher || "";
                            return a.createElement(d.xb, {
                                "data-a-target": "prime-offer",
                                className: "prime-offer prime-offer--vertical",
                                alignItems: d.f.Center,
                                display: d.X.Block,
                                borderBottom: !n,
                                textAlign: d.Jb.Left,
                                position: d.eb.Relative,
                                padding: {
                                    x: 2,
                                    y: 1
                                }
                            }, a.createElement(d.Wa, {
                                padding: {
                                    y: .5
                                }
                            }, t.renderTitle(e), a.createElement(d.W, null, t.renderGiftText())), t.renderOfferImageOrVideo(e.imageURL), a.createElement(d.xb, {
                                margin: {
                                    bottom: 2
                                }
                            }, a.createElement(d.Wa, {
                                className: "prime-offer__description",
                                padding: {
                                    top: .5
                                }
                            }, a.createElement(d.W, {
                                type: d.Nb.P
                            }, r, " ", s)), a.createElement(d.Wa, {
                                className: "prime-offer__publisher"
                            }, a.createElement(d.W, {
                                type: d.Nb.P,
                                color: d.O.Alt2,
                                fontSize: d.Ba.Size7
                            }, o))), t.renderRedeemUpsellOrClaimSection(e))
                        }, t.renderHorizontalLayout = function(e) {
                            var n = e.content,
                                i = n && n.game && n.game.name || "",
                                r = n && n.categories && n.categories[0] || "",
                                s = n && n.publisher || "";
                            return a.createElement(d.xb, {
                                "data-a-target": "prime-offer",
                                className: "prime-offer prime-offer--horizontal",
                                alignItems: d.f.Center,
                                display: d.X.InlineBlock,
                                textAlign: d.Jb.Left,
                                position: d.eb.Relative,
                                padding: {
                                    right: 1,
                                    y: .5
                                },
                                fullWidth: !0
                            }, a.createElement(d.xb, {
                                className: "prime-offer__content",
                                margin: {
                                    bottom: 2
                                }
                            }, a.createElement(d.xb, {
                                className: "prime-offer__content__text",
                                background: d.r.Base
                            }, a.createElement(d.Wa, {
                                className: "prime-offer__publisher"
                            }, a.createElement(d.W, {
                                type: d.Nb.P,
                                color: d.O.OverlayAlt,
                                fontSize: d.Ba.Size7,
                                transform: d.Mb.Uppercase
                            }, s)), a.createElement(d.Wa, {
                                className: "prime-offer__title",
                                alignItems: d.f.Start,
                                padding: {
                                    y: .5
                                }
                            }, t.renderTitle(e)), a.createElement(d.Wa, {
                                className: "prime-offer__description"
                            }, a.createElement(d.W, {
                                type: d.Nb.P,
                                color: d.O.Alt2
                            }, i, " ", r, " ", t.renderGiftText()))), t.renderOfferImageOrVideo(e.imageURL)), t.renderRedeemUpsellOrClaimSection(e))
                        }, t.renderOfferImageOrVideo = function(e) {
                            var n;
                            return n = "mp4" === t.getExtensionFromURL(e) ? a.createElement("video", {
                                preload: "auto",
                                ref: function(e) {
                                    t.offerVideo = e || void 0
                                },
                                loop: !0,
                                playsInline: !0,
                                muted: !0,
                                autoPlay: !0,
                                controls: Object(ee.c)(window.navigator.userAgent),
                                "data-test-selector": ie,
                                poster: "https://m.media-amazon.com/images/G/01/sm/Evergreen_Shared/crown_video_evergreen.jpg"
                            }, a.createElement("source", {
                                src: e,
                                type: "video/mp4"
                            })) : a.createElement("img", {
                                src: e
                            }), a.createElement(d.Pa, {
                                borderRadius: d.x.Medium
                            }, n)
                        }, t.getExtensionFromURL = function(e) {
                            if (!e) return e;
                            var t = e.split(".");
                            return t[t.length - 1]
                        }, t.renderRedeemUpsellOrClaimSection = function(e) {
                            var n = e.content,
                                i = n && n.externalURL || "",
                                r = e.self || {
                                    claimData: ""
                                };
                            if (t.state.error) {
                                var s = t.getErrorType();
                                return a.createElement(H.a, {
                                    fontSize: d.Ba.Size6,
                                    testTarget: "prime-offer-error",
                                    errorType: s
                                })
                            }
                            if (!i && (t.isCurrentOfferClaimed(e) || t.state.claimed)) {
                                var o = t.state.claimData || r.claimData;
                                return a.createElement(Y, {
                                    claimInstructions: e.claimInstructions,
                                    isPrime: Object(S.m)(t.props.data),
                                    offerID: e.id,
                                    offer: e,
                                    code: o,
                                    deliveryMethod: e.deliveryMethod,
                                    orientation: t.props.orientation,
                                    toggleCrownMenu: t.props.toggleCrownMenu
                                })
                            }
                            return a.createElement(M, {
                                offerID: e.id,
                                offer: e,
                                offerDescription: e.description,
                                offerType: e.deliveryMethod,
                                isGifted: !!(t.props.giftData && t.props.giftData.currentUser && t.props.giftData.currentUser.primeGift),
                                externalReftag: t.props.externalReftag,
                                externalURL: i,
                                claimCallback: t.claimOffer,
                                claiming: t.state.claiming,
                                index: t.props.index,
                                orientation: t.props.orientation,
                                toggleCrownMenu: t.props.toggleCrownMenu
                            })
                        }, t.getErrorType = function() {
                            return t.state.error || S.b.UNKNOWN_ERROR
                        }, t.claimOffer = function(e) {
                            e.nativeEvent.stopImmediatePropagation(), t.setState({
                                claiming: !0
                            }), t.props.giftData && t.props.giftData.currentUser && t.props.giftData.currentUser.primeGift && t.props.giftData.currentUser.primeGift && t.props.claimGift(Object(b.a)({
                                giftID: t.props.giftData.currentUser.primeGift.id
                            })).then(function(e) {
                                t.setState({
                                    claiming: !1,
                                    claimed: !0,
                                    error: void 0
                                })
                            }).catch(function(e) {
                                t.setState({
                                    claiming: !1,
                                    claimed: !1,
                                    error: S.b.UNKNOWN_ERROR
                                })
                            });
                            var n = t.props.data;
                            if (n && !n.loading && !n.error && n.currentUser && n.currentUser.id) {
                                var i = t.props.offer,
                                    r = Object(b.a)({
                                        offerID: i.id
                                    });
                                t.props.claimPrimeOffer(r).then(function(e) {
                                    var n = (e.data || {}).claimPrimeOffer || {},
                                        r = n.self || {},
                                        a = n.error || {};
                                    if (r && r.hasEntitlement && i && t.setState({
                                            claimData: r.claimData,
                                            claiming: !1,
                                            claimed: !0,
                                            error: void 0
                                        }), a && a.code) {
                                        var s = S.b[a.code];
                                        t.setState({
                                            claiming: !1,
                                            claimed: !1,
                                            error: s || S.b.UNKNOWN_ERROR
                                        })
                                    }
                                }).catch(function() {
                                    t.setState({
                                        claiming: !1,
                                        claimed: !1,
                                        error: S.b.UNKNOWN_ERROR
                                    })
                                })
                            }
                        }, t.trackImpression = function() {
                            var e = null;
                            t.props.offer.content && (e = t.props.offer.content.externalURL), Object(v.p)({
                                offerID: t.props.offer.id,
                                externalURL: e || "",
                                index: t.props.index,
                                hasPrime: Object(S.m)(t.props.data),
                                displayWidthType: t.props.displayWidthType
                            })
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.reportInteractiveIfReady(), this.props.impressionListener.registerImpressionCallback(this.trackImpression)
                    }, t.prototype.componentDidUpdate = function() {
                        this.reportInteractiveIfReady(), this.offerVideo && (this.offerVideo.setAttribute("muted", "muted"), this.offerVideo.play())
                    }, t.prototype.reportInteractiveIfReady = function() {
                        this.props.data && this.props.data.loading && !this.props.data.error || this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        var e = this.props.offer;
                        if (e) {
                            var t = this.props.orientation || S.c.Default;
                            return S.k(t) ? this.renderVerticalLayout(e) : this.renderHorizontalLayout(e)
                        }
                        return null
                    }, t.prototype.renderTitle = function(e) {
                        var t = null;
                        return !!(this.props.giftData && this.props.giftData.currentUser && this.props.giftData.currentUser.primeGift) && !!(this.props.giftData.currentUser.primeGift && this.props.giftData.currentUser.primeGift.from && this.props.giftData.currentUser.primeGift.from.login) && (t = a.createElement(d.Wa, {
                            margin: {
                                right: .5
                            }
                        }, a.createElement(d.nb, {
                            asset: d.ob.Gift
                        }))), a.createElement(d.Wa, {
                            "data-a-target": e.id,
                            className: "prime-offer__title",
                            alignItems: d.f.Start,
                            display: d.X.Flex
                        }, t, a.createElement(f, {
                            className: "prime-offer__title__markdown",
                            containerTagName: "h4",
                            source: e.title || ""
                        }))
                    }, t.prototype.renderGiftText = function() {
                        return this.props.giftData && this.props.giftData.currentUser && this.props.giftData.currentUser.primeGift && this.props.giftData.currentUser.primeGift.from && this.props.giftData.currentUser.primeGift.from.login ? Object(o.d)("from <x:bold>{gifterLogin}</x:bold>", {
                            "x:bold": function(e) {
                                return a.createElement(d.W, {
                                    type: d.Nb.Span,
                                    bold: !0
                                }, e)
                            },
                            gifterLogin: this.props.giftData.currentUser.primeGift.from.login
                        }, "PrimeClaimButton") : null
                    }, t.prototype.isCurrentOfferClaimed = function(e) {
                        return (e.self || {
                            hasEntitlement: !1
                        }).hasEntitlement
                    }, t
                }(a.Component),
                ae = Object(s.compose)(Object(u.a)(ne, {
                    name: "giftData",
                    skip: function(e) {
                        return !Object(S.j)(e.offer.id)
                    },
                    options: function(e) {
                        return {
                            variables: {
                                offerID: e.offer.id
                            }
                        }
                    }
                }), Object(u.a)(U, {
                    name: "data"
                }), Object(u.a)(Z, {
                    name: "claimPrimeOffer"
                }), Object(u.a)(te, {
                    name: "claimGift"
                }), Object(l.b)("PrimeOffer"), Object(g.a)("PrimeOffer", {
                    pixels: 100
                }))(re),
                se = (n("WGf9"), function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return r.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        var e = this.props.orientation || S.c.Default,
                            t = Object(S.k)(e);
                        return a.createElement(d.xb, {
                            className: "prime-offer-placeholder",
                            alignItems: d.f.Center,
                            borderBottom: t,
                            padding: {
                                x: 2,
                                y: 1
                            },
                            display: t ? d.X.Block : d.X.InlineBlock,
                            fullWidth: t
                        }, a.createElement(d.Wa, {
                            className: "prime-offer-placeholder__title",
                            padding: {
                                y: .5
                            }
                        }, a.createElement(d.db, {
                            height: 20
                        })), a.createElement(d.db, {
                            height: 160
                        }), a.createElement(d.Wa, {
                            className: "prime-offer-placeholder__description",
                            padding: {
                                y: .5
                            }
                        }, a.createElement(d.db, {
                            height: 20,
                            width: 160
                        })), a.createElement(d.Wa, {
                            className: "prime-offer-placeholder__publisher"
                        }, a.createElement(d.db, {
                            height: 20,
                            width: 80
                        })), a.createElement(d.Wa, {
                            className: "prime-offer-placeholder__claim",
                            margin: {
                                top: 2,
                                bottom: 1
                            }
                        }, a.createElement(d.db, {
                            height: 40
                        })))
                    }, t
                }(a.Component)),
                oe = Object(l.b)("PrimeOfferPlaceholder", {
                    autoReportInteractive: !0
                })(se),
                ce = (n("6sE4"), function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        return a.createElement(d.xb, {
                            "data-test-target": "prime-offers-upsell",
                            "data-a-target": "prime-offers-upsell",
                            className: "prime-offers-upsell",
                            alignItems: d.f.Center,
                            padding: {
                                x: 2,
                                y: 1
                            },
                            borderBottom: !0
                        }, a.createElement(d.W, {
                            type: d.Nb.H4
                        }, Object(o.d)("Claim With Twitch Prime", "PrimeUpsell")), a.createElement(d.Wa, {
                            className: "prime-upsell__logo-container",
                            fullWidth: !0,
                            margin: {
                                y: 2
                            },
                            textAlign: d.Jb.Center
                        }, a.createElement(d.nb, {
                            asset: d.ob.LogoTwitchPrime,
                            width: 330,
                            height: 150,
                            type: d.pb.Brand
                        })), a.createElement(d.W, {
                            type: d.Nb.P
                        }, Object(o.d)("Support your favorite streamer, plus get monthly games and in-game loot, and loads more with Twitch Prime.", "PrimeUpsell")), a.createElement(L, null))
                    }, t
                }(a.Component)),
                ue = Object(l.b)("PrimeUpsell", {
                    autoReportInteractive: !0
                })(ce),
                le = n("RfIv"),
                de = n("OeOm"),
                pe = (n("iuxt"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.shouldShowOffersSection = function() {
                            if (t.isOffersDataLoading) return !0;
                            var e = t.props.offersData,
                                n = e && e.primeOffers && e.primeOffers.length && t.getSortedOffers(),
                                i = n && n.length;
                            return i || !i && !t.props.hideWithNoOffers
                        }, t.renderDesktopOffers = function() {
                            return a.createElement(d.Wa, {
                                className: "prime-offer-list__content--desktop"
                            }, t.renderSectionTitle(), a.createElement(d.Tb, {
                                childWidth: d.Ub.Large,
                                gutterSize: d.Vb.Small,
                                center: !0,
                                placeholderItems: 20
                            }, t.renderOfferExperience(v.a.Wide)))
                        }, t.renderSectionTitle = function() {
                            return t.props.sectionTitle ? t.shouldShowPlaceholders ? a.createElement(d.Wa, {
                                padding: {
                                    x: 1
                                },
                                className: "prime-offers__title__placeholder"
                            }, a.createElement(d.db, {
                                height: 28,
                                width: 300
                            })) : a.createElement(d.Wa, {
                                margin: {
                                    y: 1
                                },
                                className: "prime-offers__title"
                            }, a.createElement(d.W, {
                                type: d.Nb.H3,
                                color: d.O.Base,
                                bold: !0
                            }, t.props.sectionTitle)) : null
                        }, t.renderMobileOffers = function() {
                            return a.createElement(d.Wa, {
                                className: "prime-offer-list__content--mobile"
                            }, t.renderSectionTitle(), t.renderOfferExperience(v.a.Narrow))
                        }, t.getOfferListOrientation = function() {
                            return t.props.listDirection || S.c.Default
                        }, t.getHiddenOfferIdsByPlacement = function(e) {
                            switch (e) {
                                case S.d.Crown:
                                    return o.b.get("prime-crown-hidden-ids", []);
                                case S.d.LootPage:
                                    return o.b.get("prime-loot-page-hidden-ids", []);
                                default:
                                    return []
                            }
                        }, t.renderOfferPlaceholders = function() {
                            for (var e = [], n = 0; n < 3; ++n) {
                                var i = a.createElement(oe, {
                                    key: n,
                                    orientation: t.getOfferListOrientation()
                                });
                                e.push(i)
                            }
                            return e
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.shouldReportInteractive && this.props.latencyTracking.reportInteractive()
                    }, t.prototype.componentDidUpdate = function() {
                        this.shouldReportInteractive && this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        var e = this.getOfferListOrientation(),
                            t = e.toLowerCase(),
                            n = Object(S.h)("prime-offer-list", e),
                            i = "prime-offer-list__content prime-offer-list__content--" + t,
                            r = this.props.listDirection === S.c.Horizontal,
                            s = this.props.listDirection === S.c.Vertical;
                        return this.shouldShowOffersSection() ? a.createElement(c.b, {
                            className: n,
                            suppressScrollX: s,
                            suppressScrollY: r
                        }, a.createElement(d.Wa, {
                            className: i,
                            alignItems: d.f.Center,
                            padding: {
                                top: 1,
                                bottom: 2,
                                x: 1
                            }
                        }, this.renderUpsell(), this.props.listDirection === S.c.Horizontal && this.renderDesktopOffers(), this.renderMobileOffers())) : null
                    }, t.prototype.renderUpsell = function() {
                        var e = this.props.userData;
                        if (e && !Object(S.l)(e) && !Object(S.m)(e) && !this.props.hideUpsell) return a.createElement(ue, null)
                    }, t.prototype.renderOfferExperience = function(e) {
                        var t = this,
                            n = this.props.offersData;
                        if (this.shouldShowPlaceholders) return this.renderOfferPlaceholders();
                        if (n && n.primeOffers && n.primeOffers.length) {
                            var i = this.getSortedOffers(),
                                r = i[i.length - 1];
                            return i.map(function(n, i) {
                                return a.createElement(d.Wa, {
                                    display: d.X.InlineBlock,
                                    key: n.id
                                }, a.createElement(ae, {
                                    externalReftag: t.props.externalReftag,
                                    key: n.id,
                                    offer: n,
                                    isLast: r.id === n.id,
                                    index: i,
                                    orientation: t.getOfferListOrientation(),
                                    displayWidthType: e,
                                    toggleCrownMenu: t.props.toggleCrownMenu
                                }))
                            })
                        }
                        return a.createElement(m, null)
                    }, t.prototype.getFreeGamesWithPrimeOfferIds = function() {
                        return this.props.offersData ? this.props.offersData.primeOffers.filter(function(e) {
                            return e.tags.includes("FGWP")
                        }).map(function(e) {
                            return e.id
                        }) : []
                    }, t.prototype.getSortedOffers = function() {
                        var e = this;
                        if (!this.props.offersData || !this.props.offersData.primeOffers) return [];
                        var t = this.props.offersData.primeOffers,
                            n = this.getHiddenOfferIdsByPlacement(this.props.placement),
                            i = t.filter(function(e) {
                                return !n.includes(e.id)
                            });
                        if (this.getUserId()) {
                            var r = i.filter(function(t) {
                                    return e.isClaimedOffer(t)
                                }).sort(S.p),
                                a = this.filterOffersByOfferType(r),
                                s = i.filter(function(t) {
                                    return !e.isClaimedOffer(t)
                                }).sort(S.p);
                            return this.filterOffersByOfferType(s).concat(a)
                        }
                        return this.filterOffersByOfferType(i).slice().sort(S.p)
                    }, t.prototype.isClaimedOffer = function(e) {
                        return !this.offerHasExternalURL(e) && this.offerHasEntitlement(e)
                    }, t.prototype.offerHasEntitlement = function(e) {
                        return e.self && e.self.hasEntitlement
                    }, t.prototype.offerHasExternalURL = function(e) {
                        return e.content && e.content.externalURL
                    }, t.prototype.filterOffersByOfferType = function(e) {
                        var t = this.getFreeGamesWithPrimeOfferIds() || [];
                        return this.props.offerFilterType === le.a.Game ? e.filter(function(e) {
                            return t.includes(e.id)
                        }).sort(S.p) : this.props.offerFilterType === le.a.InGameLoot ? e.filter(function(e) {
                            return !t.includes(e.id)
                        }).sort(S.p) : e
                    }, t.prototype.getUserId = function() {
                        var e = this.props.userData;
                        return e && !e.loading && !e.error && e.currentUser && e.currentUser.id ? e.currentUser.id : ""
                    }, Object.defineProperty(t.prototype, "shouldShowPlaceholders", {
                        get: function() {
                            var e = this.props.offersData;
                            return !e || e.loading
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "shouldReportInteractive", {
                        get: function() {
                            return (!this.isUserDataLoading || this.isUserDataError) && (!this.isOffersDataLoading || this.isOffersDataError)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "isUserDataLoading", {
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
                me = Object(s.compose)(Object(u.a)(de, {
                    name: "offersData",
                    options: function() {
                        return {
                            variables: {
                                dateOverride: Object(S.f)()
                            }
                        }
                    },
                    skip: function(e) {
                        return !e.firstPageLoaded && !e.ignoreFirstPageLoad
                    }
                }), Object(u.a)(U, {
                    name: "userData",
                    skip: function(e) {
                        return !e.firstPageLoaded && !e.ignoreFirstPageLoad
                    }
                }), Object(l.b)("PrimeOfferList"))(pe);
            var fe = Object(i.connect)(function(e) {
                return {
                    firstPageLoaded: e.session.firstPageLoaded
                }
            })(me);
            n.d(t, "a", function() {
                return fe
            })
        },
        "4z5c": function(e, t, n) {},
        "5ZOr": function(e, t, n) {},
        "6nJs": function(e, t, n) {},
        "6sE4": function(e, t, n) {},
        "77JB": function(e, t, n) {},
        "9k8c": function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "mutation",
                    name: {
                        kind: "Name",
                        value: "PrimeOffer_ClaimGiftMutation"
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
                                    value: "ClaimGiftedOfferInput"
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
                                value: "claimGiftedOffer"
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
                                        value: "claimedGift"
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
                                                value: "to"
                                            },
                                            arguments: [],
                                            directives: [],
                                            selectionSet: {
                                                kind: "SelectionSet",
                                                selections: [{
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "login"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }]
                                            }
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "offerID"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "from"
                                            },
                                            arguments: [],
                                            directives: [],
                                            selectionSet: {
                                                kind: "SelectionSet",
                                                selections: [{
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "login"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }]
                                            }
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
                    end: 186
                }
            };
            n.loc.source = {
                body: "mutation PrimeOffer_ClaimGiftMutation($input: ClaimGiftedOfferInput!) {\nclaimGiftedOffer(input: $input) {\nclaimedGift {\nid\nto {\nlogin\n}\nofferID\nfrom {\nlogin\n}\nstatus\n}\nerror {\ncode\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        "9kXc": function(e, t, n) {
            "use strict";
            n.d(t, "b", function() {
                return c
            }), n.d(t, "a", function() {
                return u
            });
            var i = n("/7QA"),
                r = n("yLwq"),
                a = n("kduP"),
                s = n("2xye"),
                o = n("sLmD");

            function c(e) {
                var t, n, o, c, d = e.append,
                    p = void 0 !== d && d,
                    m = e.searchResults,
                    f = e.currentGameResults,
                    b = e.currentUserResults,
                    g = e.currentVideoResults,
                    h = e.currentLiveResults;
                if (m.games && (t = {
                        totalHits: m.games.totalHits,
                        results: p && f ? f.results : []
                    }, p && m.exhaustedHits && f && !m.games.totalHits && (t.totalHits = f.totalHits), t.results = t.results.concat(m.games.hits.map(function(e, t) {
                        var n, r = i.p.intl.getLanguageCode();
                        n = r && void 0 !== e.localizations && r in e.localizations ? e.localizations[r] : e.name;
                        var o = l(e.tags);
                        return {
                            title: n,
                            thumbnailAltText: e.name,
                            linkTo: {
                                pathname: Object(a.c)(e.name),
                                state: {
                                    content: s.PageviewContent.Game,
                                    content_index: t,
                                    medium: s.PageviewMedium.NavSearch
                                }
                            },
                            id: e.objectID,
                            popularity: e.popularity,
                            tags: o
                        }
                    }))), m.videos) {
                    var v = p && g ? g.results : [],
                        S = m.videos.totalHits;
                    p && m.exhaustedHits && g && !m.videos.totalHits && (S = g.totalHits), o = function(e, t, n) {
                        return {
                            results: e.concat(t.hits.map(u)),
                            totalHits: t.totalHits || n
                        }
                    }(v, m.videos, S)
                }
                return m.users && (n = {
                    totalHits: p && b ? b.totalHits : m.users.totalHits,
                    results: p && b ? b.results : []
                }, p && m.exhaustedHits && b && !m.users.totalHits && (n.totalHits = b.totalHits), n.results = n.results.concat(m.users.hits.map(function(e, t) {
                    return {
                        login: e.login,
                        name: e.name,
                        thumbnail: e.profile_image || Object(r.c)(e.objectID, 64),
                        thumbnailAltText: e.name,
                        linkTo: {
                            pathname: "/" + e.login,
                            state: {
                                content: s.PageviewContent.User,
                                content_index: t,
                                medium: s.PageviewMedium.NavSearch
                            }
                        },
                        id: e.objectID,
                        followers: e.followers
                    }
                }))), m.channels && ((c = {
                    totalHits: p && h ? h.totalHits : m.channels.totalHits,
                    results: p && h ? h.results : []
                }).results = c.results.concat(m.channels.hits.map(function(e, t) {
                    var n = l(e.graffiti);
                    return {
                        viewerCount: e.channel_count,
                        login: e.login,
                        name: e.name,
                        thumbnailAltText: e.status,
                        linkTo: {
                            pathname: "/" + e.login,
                            state: {
                                content: s.PageviewContent.Live,
                                content_index: t,
                                medium: s.PageviewMedium.NavSearch
                            }
                        },
                        id: e.objectID,
                        status: e.status,
                        tags: n
                    }
                }))), {
                    currentGameResults: t,
                    currentUserResults: n,
                    currentLiveResults: c,
                    currentVideoResults: o,
                    exhaustedHits: m.exhaustedHits
                }
            }

            function u(e, t) {
                return {
                    title: e.title,
                    thumbnail: e.thumbnail,
                    thumbnailAltText: e.title,
                    linkTo: {
                        pathname: "/videos/" + e.objectID,
                        state: {
                            content: s.PageviewContent.Video,
                            content_index: t,
                            medium: s.PageviewMedium.NavSearch
                        }
                    },
                    login: e.broadcaster_login,
                    name: e.broadcaster_name,
                    createdAt: e.created_at,
                    length: e.length,
                    id: e.objectID
                }
            }

            function l(e) {
                if (e) return e.map(function(e) {
                    var t, n = Object(o.a)();
                    return t = n && void 0 !== e.localizations && n in e.localizations ? e.localizations[n] : e.name, {
                        id: e.id,
                        isLanguageTag: e.name.includes("auto___lang"),
                        localizedName: t,
                        tagName: e.name
                    }
                })
            }
        },
        "9pSj": function(e, t, n) {
            "use strict";
            var i, r = n("/MKj"),
                a = n("mrSG"),
                s = n("cr+I"),
                o = n("q1tI"),
                c = n("oJmH"),
                u = n("/7QA"),
                l = n("eJ65"),
                d = n("yR8l"),
                p = n("ht6z"),
                m = n("geRD"),
                f = n("kz7j"),
                b = n("GnwI"),
                g = n("cinR"),
                h = n("Ue10"),
                v = (n("Wu8b"), function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        return o.createElement(h.Wa, null, o.createElement(h.xb, {
                            className: "prime-offer-header",
                            borderBottom: !0,
                            background: h.r.Alt2,
                            padding: {
                                x: 1,
                                y: .5
                            }
                        }, o.createElement(h.W, {
                            bold: !0,
                            type: h.Nb.H6
                        }, Object(u.d)("Free with Prime", "PrimeOfferHeader"))), this.getNumOfUnseenOffersDisplay())
                    }, t.prototype.getNumOfUnseenOffersDisplay = function() {
                        var e = this.props.numOfUnseenOffers;
                        if (e) return o.createElement(h.xb, {
                            className: "prime-offer__new-offer-header",
                            borderBottom: !0,
                            background: h.r.Alt2,
                            padding: {
                                x: 1,
                                y: .5
                            }
                        }, o.createElement(h.Wa, {
                            fullWidth: !0,
                            display: h.X.Flex,
                            alignItems: h.f.Center
                        }, o.createElement(h.Wa, {
                            flexGrow: 1
                        }, o.createElement(h.W, {
                            bold: !0,
                            type: h.Nb.H6
                        }, Object(u.d)("New Prime Loot", "PrimeOfferHeader"))), o.createElement(h.Wa, {
                            className: "prime-offer__new-offer-header-count",
                            textAlign: h.Jb.Center
                        }, o.createElement(h.xb, {
                            className: "prime-offer__new-offer-header-count__text",
                            background: h.r.Base,
                            color: h.O.Base,
                            display: h.X.Flex,
                            alignItems: h.f.Center,
                            justifyContent: h.Va.Center
                        }, o.createElement(h.W, null, e.toString())))))
                    }, t
                }(o.Component)),
                S = Object(b.b)("PrimeOfferHeader", {
                    autoReportInteractive: !0
                })(v),
                k = n("4NwI"),
                y = n("Rjl4"),
                O = n("O4UZ");
            ! function(e) {
                e.OFFERS_FAILED_TO_UPDATE = "OFFERS_FAILED_TO_UPDATE", e.UNKNOWN = "UNKNOWN"
            }(i || (i = {}));
            var P = n("QAxy"),
                E = n("SXud"),
                N = (n("l0e4"), n("yO+B")),
                C = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            numOfUnseenOffers: 0,
                            updated: !1,
                            status: void 0,
                            error: void 0
                        }, t.saveCrownMenuRef = function(e) {
                            return t.crownMenuRef = e
                        }, t.toggleCrownMenu = function(e) {
                            t.crownMenuRef.toggleBalloon(e)
                        }, t.showOffersByDefault = function() {
                            var e = location.search,
                                n = s.parse(e);
                            return n && !!n.expandoffers || t.props.openByDefault
                        }, t.onToggleMenu = function(e) {
                            t.seeOffers(), e && t.setState({
                                numOfUnseenOffers: 0
                            }), Object(y.d)(!e, {
                                hasPrime: t.hasPrime(),
                                numberOfOffers: t.getNumberOfOffers()
                            }), t.refreshImpressionTracking()
                        }, t.refreshImpressionTracking = function() {
                            window.dispatchEvent(new Event("resize"))
                        }, t.getHiddenCrownOfferIds = function() {
                            return u.b.get("prime-crown-hidden-ids", [])
                        }, t.getNumberOfOffers = function() {
                            var e = t.props.offersData,
                                n = e && e.primeOffers;
                            return n && n.length || 0
                        }, t.onHover = function() {
                            Object(y.c)({
                                hasPrime: t.hasPrime()
                            })
                        }, t.hasPrime = function() {
                            return !!(t.props.userData && t.props.userData.currentUser && t.props.userData.currentUser.hasPrime)
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
                                var i = n.primeOffers || [];
                                t.setState({
                                    numOfUnseenOffers: i.filter(t.offerIsUnseen).length
                                })
                            }
                        }, t.offerIsUnseen = function(e) {
                            var n = Object(O.i)();
                            return !(t.getHiddenCrownOfferIds().includes(e.id) || n.includes(e.id) || t.offerIsSeen(e))
                        }, t.seeOffers = function() {
                            var e = t.props.offersData;
                            if (e && !e.loading && !e.error) {
                                var n = (e.primeOffers || []).map(function(e) {
                                    return "" + e.id
                                });
                                t.updateOfferStatus(), Object(O.n)(n)
                            }
                        }, t.updateOfferStatus = function() {
                            return a.__awaiter(t, void 0, void 0, function() {
                                var e, t, n, r, s, o, c, u;
                                return a.__generator(this, function(a) {
                                    switch (a.label) {
                                        case 0:
                                            if (e = this.props.userData, !(t = e && e.currentUser && e.currentUser.id)) return [2];
                                            n = this.props.offersData && this.props.offersData.primeOffers || [], r = n.map(function(e) {
                                                return {
                                                    offerID: e.id,
                                                    status: O.a.Seen
                                                }
                                            }), s = Object(m.a)({
                                                userID: t,
                                                statusChanges: r
                                            }), a.label = 1;
                                        case 1:
                                            return a.trys.push([1, 3, , 4]), [4, this.props.updatePrimeOfferStatus(s)];
                                        case 2:
                                            return o = a.sent(), (c = o.updatePrimeOfferStatus && o.updatePrimeOfferStatus.error) && c.code ? (u = i[c.code], this.setState({
                                                updated: !1,
                                                error: u || i.UNKNOWN
                                            }), [2]) : o.updatePrimeOfferStatus && o.updatePrimeOfferStatus.self ? (this.setState({
                                                updated: !0,
                                                error: void 0
                                            }), [3, 4]) : (this.setState({
                                                updated: !1,
                                                error: i.UNKNOWN
                                            }), [2]);
                                        case 3:
                                            return a.sent(), this.setState({
                                                updated: !1,
                                                error: i.UNKNOWN
                                            }), [3, 4];
                                        case 4:
                                            return [2]
                                    }
                                })
                            })
                        }, t.renderOfferList = function() {
                            return o.createElement(h.Wa, {
                                "data-a-target": "offers-list",
                                className: "prime-offers__list"
                            }, o.createElement(S, {
                                numOfUnseenOffers: t.state.numOfUnseenOffers
                            }), o.createElement(k.a, {
                                placement: O.d.Crown,
                                toggleCrownMenu: t.toggleCrownMenu
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
                            var i = n.primeOffers,
                                r = i && i.length;
                            Object(y.e)({
                                hasPrime: this.hasPrime(),
                                numberOfOffers: r || 0
                            })
                        }
                    }, t.prototype.render = function() {
                        var e = this.props.userData && this.props.userData.requestInfo && Object(p.a)(this.props.userData.requestInfo.countryCode),
                            t = this.props.userData && this.props.userData.currentUser && this.props.userData.currentUser.hasPrime;
                        if (!e && !t) return null;
                        var n = {
                            align: h.Rb.Center,
                            direction: h.Sb.Bottom,
                            label: ""
                        };
                        return this.state.numOfUnseenOffers > 0 ? n.label = Object(u.d)("New Prime Loot", "PrimeOffers") : n.label = Object(u.d)("Prime Loot", "PrimeOffers"), o.createElement(h.Wa, {
                            className: "prime-offers",
                            position: h.eb.Relative
                        }, o.createElement(l.a, {
                            onToggle: this.onToggleMenu,
                            openByDefault: this.showOffersByDefault(),
                            tooltipProps: n,
                            ref: this.saveCrownMenuRef
                        }, o.createElement(g.a, {
                            onHover: this.onHover
                        }, o.createElement(h.A, {
                            ariaLabel: Object(u.d)("Prime offers", "PrimeOffers"),
                            overlay: !0,
                            icon: h.ob.Crown,
                            "data-a-target": "prime-offers-icon",
                            "data-target": "prime-offers-icon"
                        })), o.createElement(h.u, {
                            direction: h.v.BottomRight,
                            size: h.w.Large,
                            offsetX: "7px"
                        }, this.renderOfferList())), this.renderUnseenOffersDisplay())
                    }, t.prototype.offerIsSeen = function(e) {
                        return e.self && e.self.status === O.a.Seen
                    }, t.prototype.renderUnseenOffersDisplay = function() {
                        var e = this.state.numOfUnseenOffers;
                        if (e && !this.state.error) return o.createElement(h.Wa, {
                            className: "prime-offers__pill",
                            position: h.eb.Absolute
                        }, o.createElement(h.i, {
                            type: h.n.BounceIn,
                            duration: h.k.Medium,
                            timing: h.m.EaseIn,
                            enabled: e > 0
                        }, o.createElement(h.bb, {
                            label: e.toString(),
                            type: h.cb.Notification
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
                }(o.Component),
                T = Object(c.compose)(Object(d.a)(E, {
                    name: "offersData",
                    skip: function(e) {
                        return !e.firstPageLoaded && !e.openByDefault
                    },
                    options: function() {
                        return {
                            variables: {
                                dateOverride: Object(O.f)()
                            }
                        }
                    }
                }), Object(d.a)(N, {
                    name: "userData"
                }), Object(d.a)(P, {
                    name: "updatePrimeOfferStatus"
                }), Object(b.b)("PrimeOffers"))(C);
            var x = Object(r.connect)(function(e) {
                    return {
                        firstPageLoaded: !!e.session.firstPageLoaded
                    }
                })(T),
                _ = n("6x+I"),
                D = n("KxT4"),
                I = n("j3KY"),
                G = (n("gQ2q"), n("487o")),
                F = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.reportInteractive = function() {
                            var e = t.props,
                                n = e.data,
                                i = e.latencyTracking;
                            n.loading && !n.error || i.reportInteractive()
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.reportInteractive(), Object(y.h)()
                    }, t.prototype.componentDidUpdate = function() {
                        this.reportInteractive()
                    }, t.prototype.render = function() {
                        var e = this.props,
                            t = e.data,
                            n = e.blockBannerForGDPR,
                            i = !!t.currentUser && t.currentUser.hasPrime,
                            r = t.requestInfo && t.requestInfo.countryCode;
                        if (!Object(O.o)(i, r) || t.loading || n) return null;
                        var a = Object(I.e)(I.a, ""),
                            s = Object(u.d)("Twitch Prime", "BlueBar"),
                            c = o.createElement("span", null, Object(u.d)("Monthly games and in-game loot, exclusives, and access to hundreds of movies & TV shows with Prime Video.", "BlueBar")),
                            l = Object(I.e)(I.a, ""),
                            d = Object(u.d)("Start Your Free Trial", "BlueBar");
                        return t.loading || t.error || t.primePromotions && t.primePromotions.forEach(function(e) {
                            if (e) {
                                var t = e.externalURL ? e.externalURL : "";
                                switch (e.id) {
                                    case "twitch.prime.bluebar.left1":
                                        a = t, s = e.text;
                                        break;
                                    case "twitch.prime.bluebar.center1":
                                        c = o.createElement(_, {
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
                                        l = t, d = e.text
                                }
                            }
                        }), o.createElement(g.a, {
                            onHover: y.g,
                            onClick: y.f
                        }, o.createElement(h.xb, {
                            color: h.O.Base,
                            className: "blue-bar",
                            "data-a-target": "blue-bar",
                            position: h.eb.Relative,
                            fullWidth: !0,
                            zIndex: h.ac.Above
                        }, o.createElement(h.Wa, {
                            className: "blue-bar__bar",
                            display: h.X.Flex,
                            alignItems: h.f.Center,
                            justifyContent: h.Va.Between,
                            flexWrap: h.Aa.NoWrap,
                            margin: "auto",
                            padding: {
                                x: 2,
                                y: .5
                            }
                        }, o.createElement(h.Wa, {
                            display: h.X.InlineFlex,
                            alignItems: h.f.Center,
                            padding: {
                                right: .5
                            }
                        }, o.createElement(h.Wa, {
                            className: "blue-bar__logo",
                            display: h.X.InlineFlex,
                            margin: {
                                right: .5
                            },
                            flexShrink: 0
                        }, o.createElement(h.nb, {
                            asset: h.ob.Crown
                        })), o.createElement(h.W, {
                            bold: !0,
                            type: h.Nb.Span,
                            noWrap: !0,
                            fontSize: h.Ba.Size6
                        }, o.createElement(h.Oa, {
                            padding: {
                                x: 1
                            }
                        }, o.createElement("a", {
                            className: "blue-bar__link",
                            "data-a-target": "blue-bar__link",
                            href: a,
                            target: "_blank",
                            rel: "noopener noreferrer"
                        }, s))), o.createElement(h.W, {
                            className: "blue-bar__headline",
                            type: h.Nb.Span,
                            fontSize: h.Ba.Size6
                        }, c)), o.createElement(h.Wa, {
                            display: h.X.InlineFlex,
                            flexShrink: 0
                        }, o.createElement(h.W, {
                            bold: !0,
                            type: h.Nb.Span,
                            noWrap: !0,
                            fontSize: h.Ba.Size6,
                            color: h.O.Base
                        }, o.createElement("a", {
                            className: "blue-bar__link",
                            href: l,
                            target: "_blank",
                            rel: "noopener noreferrer"
                        }, d))))))
                    }, t
                }(o.Component),
                w = Object(c.compose)(Object(r.connect)(function(e) {
                    return {
                        blockBannerForGDPR: Object(D.h)(e)
                    }
                }), Object(d.a)(G, {
                    options: function() {
                        return {
                            variables: {
                                stringIds: ["twitch.prime.bluebar.left1", "twitch.prime.bluebar.center1", "twitch.prime.bluebar.right1"],
                                dateOverride: Object(O.f)()
                            }
                        }
                    }
                }), Object(b.b)("BlueBarComponent"))(F),
                R = n("z8lI");
            n.d(t, "d", function() {
                return x
            }), n.d(t, "a", function() {
                return w
            }), n.d(t, "c", function() {
                return R.a
            }), n.d(t, "e", function() {
                return O.f
            }), n.d(t, "b", function() {
                return O.c
            })
        },
        AXRb: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return k
            });
            var i = n("mrSG"),
                r = n("q1tI"),
                a = n("oJmH"),
                s = n("/7QA"),
                o = n("yR8l"),
                c = n("3Bft"),
                u = n("geRD"),
                l = n("DMoW"),
                d = n("GnwI"),
                p = n("br9A"),
                m = n("9pSj"),
                f = n("O4UZ"),
                b = n("Ue10"),
                g = n("D/KL"),
                h = n("JRpg"),
                v = "subscribe-button__prime-subscribe",
                S = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            isSubscribing: !1,
                            primeSubFailure: !1,
                            error: void 0
                        }, t.handleStartPrimeTrialClick = function() {
                            t.props.handleSubMenuAction({
                                action: p.a.ClickSignupForPrime
                            })
                        }, t.getErrorType = function() {
                            return t.state.error || f.b.UNABLE_TO_SPEND
                        }, t.spendPrimeCredit = function() {
                            t.setState({
                                isSubscribing: !0
                            });
                            var e = t.props,
                                n = e.data;
                            if (t.isUserDataReady(e) && n.currentUser && n.currentUser.id && n.user && n.user.id) {
                                var i = n.user.id,
                                    r = n.currentUser.id,
                                    a = Object(u.a)({
                                        broadcasterID: i,
                                        userID: r
                                    });
                                t.props.handleSubMenuAction({
                                    action: p.a.SubWithPrime
                                }), t.props.spendPrimeSubscriptionCredit(a).then(function(e) {
                                    var n = ((e.data || {}).spendSubscriptionCredit || {}).error;
                                    if (n) {
                                        var i = f.b[n.code];
                                        t.setState({
                                            isSubscribing: !1,
                                            primeSubFailure: !0,
                                            error: i || f.b.UNABLE_TO_SPEND
                                        })
                                    } else {
                                        t.setState({
                                            isSubscribing: !1,
                                            primeSubFailure: !1,
                                            error: void 0
                                        });
                                        Object(u.e)(h, {
                                            login: t.props.channelLogin
                                        }, function(e) {
                                            var t = e.user;
                                            return t && t.self && t.id && (t.self.subscriptionBenefit || (t.self.subscriptionBenefit = {
                                                __typename: "SubscriptionBenefit",
                                                id: t.id,
                                                purchasedWithPrime: !0,
                                                tier: c.b.Prime,
                                                platform: l.J.WEB,
                                                gift: {
                                                    __typename: "SubscriptionGift",
                                                    isGift: !1,
                                                    gifter: null
                                                },
                                                renewsAt: null,
                                                endsAt: null,
                                                paidUpgrade: null
                                            }), t.self.canPrimeSubscribe = !1), e
                                        })
                                    }
                                }).catch(function() {
                                    t.setState({
                                        isSubscribing: !1,
                                        primeSubFailure: !0,
                                        error: f.b.UNABLE_TO_SPEND
                                    })
                                })
                            }
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.data.loading && !this.props.data.error || this.props.latencyTracking.reportInteractive()
                    }, t.prototype.componentDidUpdate = function() {
                        this.props.data.loading && !this.props.data.error || this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        if (this.state.isSubscribing) return r.createElement(b.z, i.__assign({
                            "data-test-selector": v,
                            disabled: this.state.isSubscribing,
                            icon: b.ob.Crown,
                            state: b.E.Loading
                        }, Object(b.bc)(this.props)));
                        if (this.state.primeSubFailure) {
                            var e = this.getErrorType();
                            return r.createElement(m.c, {
                                fontSize: b.Ba.Size6,
                                testTarget: "prime-sub-error",
                                errorType: e
                            })
                        }
                        if (!this.isUserDataReady(this.props)) return r.createElement(b.db, {
                            width: 82,
                            height: 30
                        });
                        var t = this.canPrimeSubscribe(this.props),
                            n = this.canResub(this.props),
                            a = this.willPrimeSubCreditRenew(),
                            o = this.primeSubCreditRenewalDate();
                        if (!this.props.data.currentUser || !this.props.data.currentUser.hasPrime) {
                            var c = Object(s.d)("Start Your Free Trial", "PrimeSubscribe");
                            return r.createElement(b.z, i.__assign({
                                ariaLabel: c,
                                "data-test-selector": v,
                                icon: b.ob.Crown,
                                linkTo: s.a.tryPrimeURI,
                                onClick: this.handleStartPrimeTrialClick
                            }, Object(b.bc)(this.props), {
                                targetBlank: !0
                            }), c)
                        }
                        if (this.isSubscribed(this.props) && !n) {
                            var u = Object(s.d)("Subscribed", "PrimeSubscribe");
                            return r.createElement(b.z, i.__assign({
                                ariaLabel: u,
                                "data-test-selector": v,
                                disabled: !0,
                                icon: b.ob.Crown
                            }, Object(b.bc)(this.props)), u)
                        }
                        if (!t) {
                            var l = Object(s.d)("Prime subscription unavailable", "PrimeSubscribe");
                            if (a && o) {
                                var d = Object(s.c)(new Date(o), {
                                    month: "long",
                                    day: "numeric"
                                });
                                l = Object(s.d)("Prime subscription available {availableDate}", {
                                    availableDate: d
                                }, "PrimeSubscribe")
                            }
                            return r.createElement(b.z, i.__assign({
                                ariaLabel: l,
                                "data-test-selector": v,
                                disabled: !0,
                                icon: b.ob.Crown
                            }, Object(b.bc)(this.props)), l)
                        }
                        var p = n ? Object(s.d)("Resubscribe Free", "PrimeSubscribe") : Object(s.d)("Subscribe Free", "PrimeSubscribe");
                        return r.createElement(b.z, i.__assign({
                            ariaLabel: p,
                            "data-test-selector": v,
                            disabled: this.state.isSubscribing,
                            icon: b.ob.Crown,
                            state: this.state.isSubscribing ? b.E.Loading : b.E.Default,
                            onClick: this.spendPrimeCredit
                        }, Object(b.bc)(this.props)), p)
                    }, t.prototype.isUserDataReady = function(e) {
                        return e.data && e.data.user && !e.data.loading && !e.data.error
                    }, t.prototype.canPrimeSubscribe = function(e) {
                        return e.data && e.data.user && e.data.user.self && e.data.user.self.canPrimeSubscribe
                    }, Object.defineProperty(t.prototype, "primeSubCreditBenefit", {
                        get: function() {
                            return this.props.data && this.props.data.user && this.props.data.user.self && this.props.data.user.self.primeSubCreditBenefit
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t.prototype.willPrimeSubCreditRenew = function() {
                        return this.primeSubCreditBenefit && this.primeSubCreditBenefit.willRenew
                    }, t.prototype.primeSubCreditRenewalDate = function() {
                        return this.primeSubCreditBenefit && this.primeSubCreditBenefit.renewalDate
                    }, t.prototype.canResub = function(e) {
                        return e.data && e.data.user && e.data.user.self && e.data.user.self.subscriptionBenefit && e.data.user.self.subscriptionBenefit.purchasedWithPrime && this.canPrimeSubscribe(this.props)
                    }, t.prototype.isSubscribed = function(e) {
                        var t = e.data,
                            n = t && t.user,
                            i = n && n.self;
                        return i && i.subscriptionBenefit
                    }, t
                }(r.Component),
                k = Object(a.compose)(Object(d.b)("PrimeSubscribe"), Object(o.a)(h, {
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
                }), Object(o.a)(g, {
                    name: "spendPrimeSubscriptionCredit"
                }))(S)
        },
        BSTw: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "Algolia_RequestInfo"
                    },
                    variableDefinitions: [],
                    directives: [],
                    selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
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
                    end: 57
                }
            };
            n.loc.source = {
                body: "query Algolia_RequestInfo {\nrequestInfo {\ncountryCode\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        "Br/p": function(e, t, n) {
            "use strict";
            n.r(t);
            var i = n("mrSG"),
                r = n("q1tI"),
                a = n("/7QA"),
                s = n("8Ad5"),
                o = n("f00E"),
                c = n("GnwI"),
                u = n("H/lO"),
                l = n("NZDK"),
                d = n("9kXc"),
                p = n("8/mp"),
                m = n("QVaV"),
                f = n("fvjX"),
                b = n("yR8l"),
                g = n("k91D"),
                h = n("Ue10"),
                v = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        var e = this.props.data;
                        if (!e || e.loading || !this.props.recipientLogin || !e.user || !e.user.self || e.user.self.canGift) return null;
                        var t = this.props.isEsportChannel ? Object(a.d)("Sorry, an All-Access Pass to this channel is not available for this user", "GiftRecipientIneligibleMessage") : Object(a.d)("Sorry, a gift subscription to this channel is not available for this user.", "GiftRecipientIneligibleMessage"),
                            n = this.props.isEsportChannel ? "esports-gift-eligibility-message-selector" : "gift-eligibility-message-selector";
                        return r.createElement(h.Wa, {
                            margin: {
                                top: 1
                            }
                        }, r.createElement(h.W, {
                            italic: !0,
                            color: h.O.Alt2,
                            "data-test-selector": n
                        }, t))
                    }, t
                }(r.Component),
                S = Object(f.compose)(Object(c.b)("GiftRecipientIneligibleMessage"), Object(b.a)(g, {
                    options: function(e) {
                        return {
                            variables: {
                                recipientLogin: e.recipientLogin,
                                subProductId: e.subProductId
                            }
                        }
                    },
                    skip: function(e) {
                        return !e.recipientLogin || !e.subProductId
                    }
                }))(v),
                k = n("JMwM"),
                y = n("br9A"),
                O = (n("d/7K"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            selectedUser: null
                        }, t.reportGiftCheckoutAction = function() {
                            t.props.handleSubMenuAction({
                                action: y.a.BuyGiftSub,
                                checkoutButtonTier: t.props.selectedProductPrice,
                                giftRecipient: t.state.selectedUser ? t.state.selectedUser.login : null
                            })
                        }, t.onUserClick = function(e) {
                            for (var n = e.target; n.parentElement && !n.dataset.user_id;) n = n.parentElement;
                            n.dataset.user_id && n.dataset.user_login && n.dataset.user_name ? t.setState({
                                selectedUser: {
                                    id: n.dataset.userId || "",
                                    login: n.dataset.user_login || "",
                                    name: n.dataset.user_name || ""
                                }
                            }) : t.setState({
                                selectedUser: null
                            })
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive()
                    }, t.prototype.componentWillReceiveProps = function(e) {
                        (e.isWaiting || e.isErrored || !e.hasInput) && this.setState({
                            selectedUser: null
                        })
                    }, t.prototype.render = function() {
                        var e;
                        return e = this.props.isWaiting ? r.createElement(h.Wa, {
                            fullHeight: !0
                        }, r.createElement(h.Ya, {
                            fillContent: !0
                        })) : this.props.hasInput ? this.props.isErrored ? this.getErrorMessage() : this.props.userResults && this.props.userResults.totalHits > 0 ? this.getUserResultContent() : this.getNoResultsMessage() : r.createElement(h.Wa, {
                            margin: 1
                        }, r.createElement(h.W, {
                            color: h.O.Alt2
                        }, Object(a.d)("Start typing to see a list of suggestions here.", "GiftRecipientSearchResult"))), r.createElement("div", {
                            onKeyDown: this.props.onKeyDown
                        }, r.createElement(h.xb, {
                            className: "gift-recipient-search-result-view",
                            background: h.r.Alt,
                            position: h.eb.Relative,
                            overflow: h.Za.Hidden,
                            display: h.X.Block,
                            margin: {
                                bottom: 2
                            },
                            borderLeft: !0,
                            borderBottom: !0,
                            borderRight: !0
                        }, r.createElement(h.Oa, {
                            overflow: h.Za.Hidden,
                            position: h.eb.Relative
                        }, r.createElement(p.b, {
                            suppressScrollX: !0
                        }, r.createElement(h.Wa, null, e, r.createElement(p.a, {
                            enabled: !this.props.isWaiting && this.props.hasInput,
                            loadMore: this.props.loadMore
                        }))))), r.createElement(h.Wa, null, r.createElement(h.Wa, {
                            display: h.X.Flex,
                            alignItems: h.f.Center,
                            fullWidth: !0
                        }, this.getBuyGiftButton(), r.createElement(h.Oa, {
                            margin: {
                                x: 1
                            }
                        }, r.createElement(h.W, {
                            "data-test-selector": "gift-recipient-display-name-selector"
                        }, Object(a.d)("for {displayName}", {
                            displayName: r.createElement(h.W, {
                                bold: !0,
                                type: h.Nb.Span
                            }, this.getFormattedDisplayName())
                        }, "GiftRecipientCheckoutButton")))), r.createElement(S, {
                            subProductId: this.props.selectedProductId,
                            recipientLogin: this.state.selectedUser ? this.state.selectedUser.login : null,
                            isEsportChannel: this.props.isEsportChannel
                        })))
                    }, t.prototype.getBuyGiftButton = function() {
                        return r.createElement(k.a, {
                            productName: this.props.selectedProductName,
                            subProductId: this.props.selectedProductId,
                            giftRecipient: this.state.selectedUser ? this.state.selectedUser.login : null,
                            checkoutURL: this.props.selectedProductURL,
                            onClick: this.reportGiftCheckoutAction,
                            isEsportChannel: this.props.isEsportChannel
                        })
                    }, t.prototype.getFormattedDisplayName = function() {
                        return this.state.selectedUser ? Object(m.a)(this.state.selectedUser.login, this.state.selectedUser.name) : ""
                    }, t.prototype.getErrorMessage = function() {
                        return r.createElement(h.Wa, {
                            fullWidth: !0,
                            textAlign: h.Jb.Center,
                            justifyContent: h.Va.Center
                        }, r.createElement(h.W, null, Object(a.d)("Something went wrong", "GiftRecipientSearchResult")))
                    }, t.prototype.getUserResultContent = function() {
                        var e = this;
                        return this.props.userResults ? this.props.userResults.results.map(function(t) {
                            var n = Object(m.a)(t.login || "", t.name || "");
                            return r.createElement(h.Ta, {
                                tabIndex: -1,
                                "data-ts_selectable": !0,
                                "data-tt_content": !0,
                                key: "git-recipient-result__" + t.id,
                                "data-user_id": t.id,
                                "data-user_login": t.login,
                                "data-user_name": t.name,
                                onClick: e.onUserClick,
                                "data-test-selector": "subscribe-button__gift_search_result"
                            }, r.createElement(h.Wa, {
                                padding: .5
                            }, r.createElement(h.G, {
                                row: !0
                            }, r.createElement(h.I, {
                                alt: t.thumbnailAltText,
                                src: t.thumbnail ? t.thumbnail : "",
                                size: h.J.Size4,
                                aspect: h.p.Aspect1x1
                            }), r.createElement(h.H, {
                                overflow: h.Za.Hidden
                            }, r.createElement(h.Oa, {
                                padding: {
                                    x: 1
                                }
                            }, r.createElement(h.W, {
                                type: h.Nb.H5,
                                ellipsis: !0
                            }, n))))))
                        }) : r.createElement(h.db, null)
                    }, t.prototype.getNoResultsMessage = function() {
                        return r.createElement(h.Wa, {
                            margin: 1
                        }, r.createElement(h.W, {
                            color: h.O.Alt2
                        }, Object(a.d)("No Results", "GiftRecipientSearchResult")))
                    }, t = i.__decorate([Object(c.b)("GiftRecipientSearchResultPanel")], t)
                }(r.Component)),
                P = n("FLOH"),
                E = n("dBR3"),
                N = (n("D/Iv"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            selectedSubProduct: t.props.subscriptionProducts[0]
                        }, t.onTierSelect = function(e) {
                            t.setState({
                                selectedSubProduct: e
                            })
                        }, t.handleChange = function(e) {
                            t.props.onChange(e.target.value)
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        if (this.state.selectedSubProduct) {
                            var e = null;
                            if (this.state.selectedSubProduct && this.state.selectedSubProduct.giftPromotion) {
                                var t = this.state.selectedSubProduct && this.state.selectedSubProduct.giftPromotion ? this.state.selectedSubProduct.giftPromotion : null;
                                e = r.createElement(h.W, {
                                    bold: !0,
                                    className: "subscription-gift-recipient-search__discount-message"
                                }, Object(a.d)("{price} (Save {percent})", {
                                    price: t ? t.newPrice : "",
                                    percent: Object(a.f)(t ? t.discountValue / 100 : 0, "percent")
                                }, "GiftRecipientSearch"))
                            }
                            var n = this.props.isEsportChannel ? "gift-recipient-search-esports-subheading-selector" : "gift-recipient-search-subheading-selector";
                            return r.createElement(h.Wa, {
                                padding: 2,
                                className: "subscription-gift-recipient-search"
                            }, r.createElement(h.Wa, null, r.createElement(h.Wa, {
                                display: h.X.Flex,
                                justifyContent: h.Va.Between,
                                alignItems: h.f.Center,
                                margin: {
                                    bottom: 1
                                }
                            }, r.createElement(h.W, {
                                type: h.Nb.H4,
                                bold: !0
                            }, Object(a.d)("Choose a Gift Recipient", "GiftRecipientSearch")), r.createElement(h.z, {
                                type: h.F.Text,
                                "data-a-target": "subscribe-back-button",
                                icon: h.ob.AngleLeft,
                                onClick: this.props.onBack,
                                "data-test-selector": "gift-recipient-search-back-button"
                            }, r.createElement(h.Wa, {
                                alignItems: h.f.Center,
                                display: h.X.InlineFlex
                            }, r.createElement(h.W, null, Object(a.d)("Back", "GiftRecipientSearch"))))), r.createElement(E.a, {
                                subscriptionProducts: this.props.subscriptionProducts,
                                onTierSelect: this.onTierSelect
                            }, r.createElement(r.Fragment, null, r.createElement(h.Wa, {
                                padding: {
                                    y: 1
                                }
                            }, r.createElement(P.a, {
                                allSubProducts: this.props.subscriptionProducts,
                                isEsportChannel: this.props.isEsportChannel,
                                selectedSubProduct: this.state.selectedSubProduct,
                                "data-test-selector": n
                            })), e, r.createElement(h.Wa, {
                                display: h.X.Flex,
                                justifyContent: h.Va.Center,
                                padding: {
                                    top: 1
                                },
                                fullWidth: !0
                            }, r.createElement(h.Wa, {
                                fullWidth: !0
                            }, r.createElement(h.qb, {
                                onChange: this.handleChange,
                                onKeyDown: this.props.onKeyDown,
                                id: "gift-recipient-search",
                                placeholder: Object(a.d)("Search for a Twitch ID", "GiftRecipientSearch"),
                                "data-test-selector": "gift-recipient-search-input-selector"
                            }), r.createElement(O, {
                                hasInput: this.props.hasInput,
                                userResults: this.props.userResults,
                                isErrored: this.props.isErrored,
                                isWaiting: this.props.isWaiting,
                                loadMore: this.props.loadMore,
                                onKeyDown: this.props.onKeyDown,
                                selectedProductName: this.state.selectedSubProduct.name,
                                selectedProductId: this.state.selectedSubProduct.id,
                                selectedProductURL: this.state.selectedSubProduct.url,
                                selectedProductPrice: this.state.selectedSubProduct.price,
                                handleSubMenuAction: this.props.handleSubMenuAction,
                                isEsportChannel: this.props.isEsportChannel
                            })))))))
                        }
                        return r.createElement(h.db, null)
                    }, t
                }(r.Component)),
                C = 50,
                T = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.onChange = function(e) {
                            n.inputTimer && (clearTimeout(n.inputTimer), n.inputTimer = 0), e ? (n.setState({
                                isWaiting: !0
                            }), n.inputTimer = setTimeout(function() {
                                return n.doSearch(e)
                            }, C)) : n.setState(n.getEmptyState())
                        }, n.loadMore = function() {
                            return i.__awaiter(n, void 0, void 0, function() {
                                var e, t, n;
                                return i.__generator(this, function(r) {
                                    switch (r.label) {
                                        case 0:
                                            if (this.state.queryID || !0 === this.state.exhaustedHits) return [2];
                                            e = this.state.currentPage + 1, r.label = 1;
                                        case 1:
                                            return r.trys.push([1, 3, , 4]), [4, this.searchClient.queryForType(u.a.Users, this.state.term, "", {
                                                page: e
                                            })];
                                        case 2:
                                            return t = r.sent(), [3, 4];
                                        case 3:
                                            return r.sent(), this.setState(i.__assign({}, this.getEmptyState(), {
                                                isErrored: !0,
                                                hasInput: !0
                                            })), [2];
                                        case 4:
                                            return t ? (n = Object(d.b)({
                                                searchResults: t,
                                                append: e > 0,
                                                currentUserResults: this.state.currentUserResults
                                            }), this.setState({
                                                currentUserResults: n.currentUserResults,
                                                term: this.state.term,
                                                hasInput: !0,
                                                isWaiting: !1,
                                                currentPage: e,
                                                exhaustedHits: n.exhaustedHits
                                            }), [2]) : (this.setState(i.__assign({}, this.getEmptyState(), {
                                                isErrored: !0,
                                                hasInput: !0
                                            })), [2])
                                    }
                                })
                            })
                        }, n.onKeyDown = function(e) {
                            n.state.term && (e.keyCode === s.a.Esc ? n.setState({
                                hasInput: !1
                            }) : e.keyCode === s.a.Up ? n.focusNext(-1) : e.keyCode === s.a.Down && n.focusNext(1))
                        }, n.state = n.getEmptyState(), n.searchClient = new l.a({
                            appId: a.a.algoliaApplicationID,
                            apiKey: a.a.algoliaAPIKey,
                            apolloClient: a.p.apollo.client,
                            logger: a.k,
                            config: a.a,
                            stats: a.p.stats
                        }), n
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        return r.createElement(N, {
                            onChange: this.onChange,
                            loadMore: this.loadMore,
                            onKeyDown: this.onKeyDown,
                            userResults: this.state.currentUserResults,
                            hasInput: this.state.hasInput,
                            isErrored: this.state.isErrored,
                            isWaiting: this.state.isWaiting,
                            onBack: this.props.onBack,
                            subscriptionProducts: this.props.subscriptionProducts,
                            handleSubMenuAction: this.props.handleSubMenuAction,
                            isEsportChannel: this.props.isEsportChannel
                        })
                    }, t.prototype.getEmptyState = function() {
                        return {
                            currentUserResults: {
                                totalHits: 0,
                                results: []
                            },
                            term: "",
                            hasInput: !1,
                            isErrored: !1,
                            queryID: "",
                            isWaiting: !1,
                            currentPage: -1,
                            focusSelectable: !1,
                            exhaustedHits: !1
                        }
                    }, t.prototype.doSearch = function(e) {
                        return i.__awaiter(this, void 0, void 0, function() {
                            var t, n, r, a, s;
                            return i.__generator(this, function(c) {
                                switch (c.label) {
                                    case 0:
                                        this.inputTimer = 0, t = -1, n = o.a(), r = "INPUT" === document.activeElement.tagName, this.setState({
                                            queryID: n,
                                            focusSelectable: !r && !!this.state.currentFocus
                                        }), c.label = 1;
                                    case 1:
                                        return c.trys.push([1, 3, , 4]), t = 0, [4, this.searchClient.queryForType(u.a.Users, e, n)];
                                    case 2:
                                        return a = c.sent(), [3, 4];
                                    case 3:
                                        return c.sent(), this.setState(i.__assign({}, this.getEmptyState(), {
                                            isErrored: !0,
                                            hasInput: !0,
                                            term: e
                                        })), [2];
                                    case 4:
                                        return a ? this.state.queryID !== a.id ? [2] : (s = Object(d.b)({
                                            searchResults: a,
                                            append: !1
                                        }), this.setState(function(n) {
                                            return i.__assign({}, n, s, {
                                                queryID: "",
                                                term: e,
                                                hasInput: !0,
                                                isWaiting: !1,
                                                currentPage: t
                                            })
                                        }), [2]) : (this.setState(i.__assign({}, this.getEmptyState(), {
                                            isErrored: !0,
                                            hasInput: !0,
                                            term: e
                                        })), [2])
                                }
                            })
                        })
                    }, t.prototype.focusNext = function(e) {
                        var t, n = document.querySelectorAll("[data-ts_selectable=true]"),
                            i = document.activeElement,
                            r = Array.prototype.indexOf.call(n, i);
                        if ((t = r < 0 ? e > 0 ? 0 : n.length - 1 : r + e) < 0 && (t = 0), !(t >= n.length)) {
                            var a = n.item(t);
                            a.focus(), a.tabIndex = 0, this.state.currentFocus && (this.state.currentFocus.tabIndex = -1), this.setState({
                                currentFocus: a
                            })
                        }
                    }, t = i.__decorate([Object(c.b)("GiftRecipientSearch")], t)
                }(r.Component);
            n.d(t, "GiftRecipientSearch", function() {
                return T
            })
        },
        CCnc: function(e, t, n) {
            e.exports = n.p + "assets/100-gifts-4x-6fe1bae274dc007a980c.png"
        },
        CDqf: function(e, t, n) {
            "use strict";
            var i = n("mrSG"),
                r = n("q1tI"),
                a = n("/7QA"),
                s = n("Ue10"),
                o = (n("WAGi"), function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        return r.createElement(s.xb, {
                            borderRadius: this.getBannerBorderRadius(),
                            className: "sub-promo-banner",
                            display: s.X.Flex
                        }, this.getCTA())
                    }, t.prototype.getCTA = function() {
                        var e = this.props.alignCTA,
                            t = "Left" === e ? "Right" : "Left",
                            n = r.createElement(s.Wa, {
                                className: "sub-promo-banner__triangle-" + e.toLowerCase()
                            }),
                            i = r.createElement(s.xb, {
                                borderRadius: this.getChildBorderRadius(e),
                                className: "sub-promo-banner__promo-price",
                                display: s.X.Flex,
                                flexDirection: s.Z.Column,
                                justifyContent: s.Va.Center
                            }, r.createElement(s.Wa, {
                                display: s.X.Flex,
                                justifyContent: s.Va.Center
                            }, r.createElement(s.Wa, {
                                margin: {
                                    top: .5
                                }
                            }, r.createElement(s.W, {
                                className: "sub-promo-banner__currency-symbol",
                                color: s.O.Overlay
                            }, "$1".substring(0, 1))), r.createElement(s.W, {
                                bold: !0,
                                className: "sub-promo-banner__currency-number",
                                color: s.O.Overlay
                            }, "$1".substring(1))), r.createElement(s.W, {
                                className: "sub-promo-banner__subs-cta",
                                color: s.O.Overlay
                            }, Object(a.d)("SUBS", "SubPromoBanner"))),
                            o = r.createElement(s.xb, {
                                borderLeft: !1,
                                borderRadius: this.getChildBorderRadius(t),
                                className: "sub-promo-banner__cta",
                                display: s.X.Flex,
                                flexDirection: s.Z.Column,
                                flexGrow: 1,
                                justifyContent: s.Va.Center,
                                padding: {
                                    left: 2,
                                    right: 3,
                                    y: 1
                                }
                            }, r.createElement(s.W, {
                                bold: !0,
                                color: s.O.Overlay,
                                fontSize: s.Ba.Size4
                            }, Object(a.d)("Subtember is here!", "SubPromoBanner")), r.createElement(s.W, {
                                color: s.O.Overlay
                            }, Object(a.d)("Make the most of your Gift Sub this September by continuing at Tier 1 for <x:strong>only {promoPrice}</x:strong>. {promoLink}", {
                                promoLink: r.createElement(s.U, {
                                    key: "SubPromoBannerLink",
                                    targetBlank: !0,
                                    to: "https://link.twitch.tv/subtember",
                                    type: s.V.Overlay
                                }, Object(a.d)("Learn More", "SubPromoBanner")),
                                promoPrice: "$1",
                                "x:strong": function(e) {
                                    return r.createElement(s.W, {
                                        bold: !0,
                                        key: "SubPromoBannerBoldText",
                                        type: s.Nb.Span
                                    }, e)
                                }
                            }, "SubPromoBanner")));
                        return "Left" === e ? r.createElement(r.Fragment, null, i, n, o) : r.createElement(r.Fragment, null, o, n, i)
                    }, t.prototype.getBannerBorderRadius = function() {
                        var e = this.props,
                            t = e.roundedBottom,
                            n = e.roundedTop;
                        return t && n ? {
                            bottomLeft: s.x.Large,
                            bottomRight: s.x.Large,
                            topLeft: s.x.Large,
                            topRight: s.x.Large
                        } : t ? {
                            bottomLeft: s.x.Large,
                            bottomRight: s.x.Large
                        } : n ? {
                            topLeft: s.x.Large,
                            topRight: s.x.Large
                        } : {}
                    }, t.prototype.getChildBorderRadius = function(e) {
                        var t, n, i, r = this.props,
                            a = r.roundedBottom,
                            o = r.roundedTop;
                        return a && o ? ((t = {})["bottom" + e] = s.x.Large, t["top" + e] = s.x.Large, t) : a ? ((n = {})["bottom" + e] = s.x.Large, n) : o ? ((i = {})["top" + e] = s.x.Large, i) : {}
                    }, t
                }(r.Component));
            n.d(t, "a", function() {
                return o
            })
        },
        CdEI: function(e, t, n) {
            e.exports = n.p + "assets/random-viewer-4x-bff949ba6c023602bbff.png"
        },
        "D+xR": function(e, t, n) {
            e.exports = n.p + "assets/100-gifts-2x-8a3bdf6f1dc17d706724.png"
        },
        "D/Iv": function(e, t, n) {},
        "D/KL": function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "mutation",
                    name: {
                        kind: "Name",
                        value: "PrimeSubscribe_SpendPrimeSubscriptionCredit"
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
                    end: 227
                }
            };
            n.loc.source = {
                body: "mutation PrimeSubscribe_SpendPrimeSubscriptionCredit($input: SpendSubscriptionCreditInput!) {\nspendSubscriptionCredit(input: $input) {\nuserID\nsubscriptionBenefit {\nid\npurchasedWithPrime\ntier\nplatform\nendsAt\n}\nerror {\ncode\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        DnOo: function(e, t, n) {
            "use strict";
            var i = n("mrSG"),
                r = n("q1tI"),
                a = n("oJmH"),
                s = n("/7QA"),
                o = n("UUve"),
                c = n("D7An"),
                u = n("GnwI"),
                l = n("br9A"),
                d = n("Ue10"),
                p = "subscribe-button__subscribe-tier-button",
                m = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        if (n.state = {
                                hasPopupExperiment: !1
                            }, n.handleClick = function() {
                                n.openCheckout(), n.props.handleSubAction({
                                    action: l.a.ClickCheckout,
                                    checkoutButtonTier: n.props.tierPrice
                                })
                            }, n.openCheckout = function() {
                                n.state.hasPopupExperiment && s.n.set(o.b, n.props.productName)
                            }, !1 === n.props.targetBlank) return n;
                        var i = s.p.experiments.getAssignment(c.b.InstreamCheckout);
                        return n.state = {
                            hasPopupExperiment: "yes" === i
                        }, n
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        if (this.props.isSubbedToTier) {
                            var e = Object(s.d)("Subscribed", "SubTierButton");
                            return r.createElement(d.z, {
                                ariaLabel: e,
                                "data-test-selector": p,
                                disabled: !0,
                                icon: d.ob.Star
                            }, e)
                        }
                        var t = this.props.isEsportChannel ? Object(s.d)("Get the All-Access Pass", "SubTierButton") : Object(s.d)("Subscribe Now", "SubTierButton");
                        return r.createElement(d.z, i.__assign({
                            ariaLabel: t + " " + this.props.tierPrice,
                            "data-test-selector": p,
                            linkTo: this.state.hasPopupExperiment ? void 0 : this.props.url,
                            onClick: this.handleClick,
                            purchase: this.props.tierPrice
                        }, Object(d.bc)(this.props), {
                            targetBlank: void 0 === this.props.targetBlank || this.props.targetBlank
                        }), t)
                    }, t
                }(r.Component),
                f = Object(a.compose)(Object(u.b)("SubTierButton", {
                    autoReportInteractive: !0
                }))(m);
            n.d(t, !1, function() {
                return p
            }), n.d(t, "a", function() {
                return f
            })
        },
        DqL7: function(e, t, n) {
            "use strict";
            var i = n("mrSG"),
                r = n("q1tI"),
                a = n("/7QA"),
                s = n("3Bft"),
                o = n("GnwI"),
                c = n("JMwM"),
                u = n("FLOH"),
                l = n("L+W6"),
                d = n("DnOo"),
                p = n("a5fV"),
                m = n("W8Fi"),
                f = n("br9A"),
                b = n("AXRb"),
                g = n("Ue10"),
                h = (n("J5He"), "gift-subscription-button"),
                v = "subscribe-button",
                S = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            activeTab: t.props.subbedTier || ""
                        }, t.toggleActiveTab = function(e) {
                            if (e.currentTarget.parentElement) {
                                var n = e.currentTarget.parentElement.getAttribute("data-tier");
                                if (n) {
                                    var i = n.replace("subscribe-button-modal-tab-", "");
                                    t.props.handleSubMenuAction({
                                        action: f.a.ChangeTier,
                                        checkoutButtonTier: t.getPrice(t.getSubProduct(i))
                                    }), t.setState({
                                        activeTab: i
                                    })
                                }
                            }
                        }, t.getTabTitle = function() {
                            switch (t.state.activeTab) {
                                case s.b.Prime:
                                    return Object(a.d)("Free Channel Sub with Twitch Prime", "SubTierTabs");
                                case s.b.Tier1:
                                    return t.props.subscriptionProducts[0].displayName;
                                case s.b.Tier2:
                                    return t.props.subscriptionProducts[1].displayName;
                                case s.b.Tier3:
                                    return t.props.subscriptionProducts[2].displayName;
                                default:
                                    return t.props.subscriptionProducts[0].displayName
                            }
                        }, t.getTierSubscribeButton = function() {
                            var e = t.getSubProduct(t.state.activeTab || ""),
                                n = t.getPrice(e);
                            if (t.props.isGift) {
                                var i = Object(a.d)("Gift A Subscription", "SubTierTabs");
                                return t.props.giftRecipient ? r.createElement(c.a, {
                                    buttonMessage: i,
                                    checkoutURL: e.url,
                                    giftRecipient: t.props.giftRecipient,
                                    onClick: t.reportGiftCheckoutAction,
                                    productName: e.name,
                                    purchase: n,
                                    subProductId: e.id
                                }) : r.createElement(g.z, {
                                    ariaLabel: i + " " + n,
                                    "data-test-selector": h,
                                    onClick: t.onGiftSelect,
                                    purchase: n
                                }, i)
                            }
                            return t.props.subbedTier === t.state.activeTab && t.state.activeTab === s.b.Prime ? r.createElement(b.a, {
                                "data-a-target": "subscribe-with-prime-button",
                                handleSubMenuAction: t.props.handleSubMenuAction,
                                channelLogin: t.props.subLogin
                            }) : r.createElement(d.a, {
                                "data-a-target": "subscribe-now-button",
                                "data-test-selector": v,
                                handleSubAction: t.props.handleSubMenuAction,
                                isSubbedToTier: t.props.subbedTier === t.state.activeTab,
                                productName: e.name,
                                tierPrice: n,
                                url: e.url
                            })
                        }, t.reportGiftCheckoutAction = function() {
                            t.props.handleSubMenuAction({
                                action: f.a.BuyGiftSub,
                                checkoutButtonTier: t.getPrice(t.getSubProduct(t.state.activeTab)),
                                giftRecipient: t.props.giftRecipient || null
                            })
                        }, t.onGiftSelect = function() {
                            t.props.onGiftSelect && t.props.onGiftSelect()
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        var e = this.props.subbedTier && r.createElement(g.Wa, {
                            className: "subscription-balloon-options__subbed-star",
                            display: g.X.InlineFlex,
                            margin: {
                                right: .5
                            }
                        }, r.createElement(g.nb, {
                            asset: g.ob.Star
                        }));
                        return r.createElement(g.Wa, {
                            className: "channel-header__subscription-balloon-options"
                        }, r.createElement(g.Wa, {
                            margin: {
                                bottom: 1
                            }
                        }, r.createElement(g.zb, null, this.props.subbedTier === s.b.Prime ? !this.props.isGift && r.createElement(g.Wa, {
                            display: g.X.InlineFlex,
                            margin: {
                                right: 2
                            }
                        }, r.createElement(g.Wa, {
                            className: "subscription-balloon-options__prime-crown",
                            display: g.X.InlineFlex,
                            margin: {
                                right: 1
                            }
                        }, r.createElement(g.nb, {
                            asset: g.ob.Crown
                        })), r.createElement(g.yb, {
                            active: this.state.activeTab === s.b.Prime,
                            "data-a-target": k(s.b.Prime),
                            "data-tier": k(s.b.Prime),
                            onClick: this.toggleActiveTab
                        }, Object(a.d)("Prime", "SubTierTabs"))) : r.createElement(g.Wa, {
                            display: g.X.InlineFlex,
                            margin: {
                                right: 2
                            }
                        }, this.props.subbedTier === s.b.Tier1 && e, r.createElement(g.yb, {
                            active: this.state.activeTab === s.b.Tier1,
                            "data-a-target": k(s.b.Tier1),
                            "data-tier": k(s.b.Tier1),
                            onClick: this.toggleActiveTab
                        }, Object(a.d)("Tier 1", "SubTierTabs"))), r.createElement(g.Wa, {
                            display: g.X.InlineFlex,
                            margin: {
                                right: 2
                            }
                        }, this.props.subbedTier === s.b.Tier2 && e, r.createElement(g.yb, {
                            active: this.state.activeTab === s.b.Tier2,
                            "data-a-target": k(s.b.Tier2),
                            "data-tier": k(s.b.Tier2),
                            onClick: this.toggleActiveTab
                        }, Object(a.d)("Tier 2", "SubTierTabs"))), r.createElement(g.Wa, {
                            display: g.X.InlineFlex
                        }, this.props.subbedTier === s.b.Tier3 && e, r.createElement(g.yb, {
                            active: this.state.activeTab === s.b.Tier3,
                            "data-a-target": k(s.b.Tier3),
                            "data-tier": k(s.b.Tier3),
                            onClick: this.toggleActiveTab
                        }, Object(a.d)("Tier 3", "SubTierTabs"))))), r.createElement(g.Wa, null, r.createElement(g.Wa, {
                            margin: {
                                bottom: 1
                            }
                        }, r.createElement(g.W, {
                            type: g.Nb.H5,
                            bold: !0
                        }, this.getTabTitle())), r.createElement(g.Wa, {
                            margin: {
                                bottom: 1
                            }
                        }, r.createElement(u.a, {
                            allSubProducts: this.props.subscriptionProducts,
                            selectedSubProduct: this.getSubProduct(this.state.activeTab) || this.props.subscriptionProducts[0]
                        })), r.createElement(l.a, {
                            isGift: this.props.isGift,
                            subscriptionProduct: this.getSubProduct(this.state.activeTab)
                        }), r.createElement(g.Wa, {
                            margin: {
                                right: 1,
                                top: 1
                            }
                        }, this.getTierSubscribeButton())))
                    }, t.prototype.getPrice = function(e) {
                        return Object(m.g)(this.props.subscriptionProducts) || Object(m.e)(this.props.subscriptionProducts) ? Object(m.c)(e, this.props.isGift) : e.priceInfo ? Object(p.a)(Object(p.b)(e.priceInfo.total, e.priceInfo.exponent), e.priceInfo.currency) : e.price
                    }, t.prototype.getSubProduct = function(e) {
                        switch (e) {
                            case s.b.Tier1:
                                return this.props.subscriptionProducts[0];
                            case s.b.Tier2:
                                return this.props.subscriptionProducts[1];
                            case s.b.Tier3:
                                return this.props.subscriptionProducts[2];
                            default:
                                return this.props.subscriptionProducts[0]
                        }
                    }, t
                }(r.Component);

            function k(e) {
                return "subscribe-button-modal-tab-" + e
            }
            var y = Object(o.b)("SubTierTabs", {
                autoReportInteractive: !0
            })(S);
            n.d(t, !1, function() {
                return h
            }), n.d(t, !1, function() {
                return v
            }), n.d(t, !1, function() {
                return S
            }), n.d(t, !1, function() {
                return k
            }), n.d(t, "a", function() {
                return y
            })
        },
        EBDZ: function(e, t, n) {},
        EEuB: function(e, t, n) {
            e.exports = n.p + "assets/1-gift-1x-fecd78ab9c34c8eead6b.png"
        },
        FLOH: function(e, t, n) {
            "use strict";
            var i, r = n("q1tI"),
                a = n("/7QA"),
                s = n("3Bft"),
                o = n("OpME"),
                c = n("0WFu"),
                u = n("Ue10");
            ! function(e) {
                e.BenefitMessage = "BenefitMessage", e.ExtraEmoteMessage = "ExtraEmoteMessage"
            }(i || (i = {}));
            var l = function(e) {
                var t = function(e, t) {
                    var n = [];
                    e.tier === s.b.Tier2 && n.push.apply(n, t[1].emotes);
                    e.tier === s.b.Tier3 && (n.push.apply(n, t[1].emotes), n.push.apply(n, t[2].emotes));
                    return Object(o.b)(n)
                }(e.selectedSubProduct, e.allSubProducts);
                return r.createElement(u.Wa, null, r.createElement(u.W, {
                    "data-test-selector": i.BenefitMessage
                }, function(e) {
                    if (e.isEsportChannel) return Object(a.d)("Overwatch League: {giftPrice} All-Access Pass for current season", {
                        giftPrice: e.selectedSubProduct ? e.selectedSubProduct.price : ""
                    }, "SubBenefitMessage");
                    var t = e.allSubProducts[0].emotes.length;
                    if (e.selectedSubProduct.tier) {
                        var n = Object(c.a)(e.selectedSubProduct.tier);
                        if (n) return e.selectedSubProduct.hasAdFree ? t > 0 ? Object(a.d)("{emoteCount, plural,               one {Tier {tierNum} Subscriptions include Ad-Free viewing, chatting during Sub-Only Mode, subscription tenure badges and # emote.}               other {Tier {tierNum} Subscriptions include Ad-Free viewing, chatting during Sub-Only Mode, subscription tenure badges and # emotes.}}", {
                            tierNum: n,
                            emoteCount: t
                        }, "SubBenefitMessage") : Object(a.d)("Tier {tierNum} Subscriptions include Ad-Free viewing, chatting during Sub-Only Mode, and subscription tenure badges.", {
                            tierNum: n
                        }, "SubBenefitMessage") : t > 0 ? Object(a.d)("{emoteCount, plural,               one {Tier {tierNum} Subscriptions include chatting during Sub-Only Mode, subscription tenure badges and # emote.}               other {Tier {tierNum} Subscriptions include chatting during Sub-Only Mode, subscription tenure badges and # emotes.}}", {
                            tierNum: n,
                            emoteCount: t
                        }, "SubBenefitMessage") : Object(a.d)("Tier {tierNum} Subscriptions include chatting during Sub-Only Mode, and subscription tenure badges.", {
                            tierNum: n
                        }, "SubBenefitMessage")
                    }
                    if (e.selectedSubProduct.hasAdFree) return t > 0 ? Object(a.d)("{emoteCount, plural,           one {Subscriptions include Ad-Free viewing, chatting during Sub-Only Mode, subscription tenure badges and # emote.}           other {Subscriptions include Ad-Free viewing, chatting during Sub-Only Mode, subscription tenure badges and # emotes.}}", {
                        emoteCount: t
                    }, "SubBenefitMessage") : Object(a.d)("Subscriptions include Ad-Free viewing, chatting during Sub-Only Mode, and subscription tenure badges.", "SubBenefitMessage");
                    if (t > 0) return Object(a.d)("{emoteCount, plural,           one {Subscriptions include chatting during Sub-Only Mode, subscription tenure badges and # emote.}           other {Subscriptions include chatting during Sub-Only Mode, subscription tenure badges and # emotes.}}", {
                        emoteCount: t
                    }, "SubBenefitMessage");
                    return Object(a.d)("Subscriptions include chatting during Sub-Only Mode and subscription tenure badges.", "SubBenefitMessage")
                }(e)), t.length > 0 && r.createElement(u.Wa, {
                    alignItems: u.f.Center,
                    display: u.X.Flex,
                    margin: {
                        top: 1
                    }
                }, t.map(function(e) {
                    return r.createElement(u.Wa, {
                        display: u.X.InlineFlex,
                        key: e.id,
                        margin: {
                            right: .5
                        }
                    }, r.createElement("img", {
                        alt: e.displayName,
                        srcSet: e.srcSet,
                        title: e.displayName
                    }))
                }), r.createElement(u.W, {
                    bold: !0,
                    "data-test-selector": i.ExtraEmoteMessage
                }, Object(a.d)("{extraEmoteCount, plural,                 one {Plus {extraEmoteCount, number} extra channel emote}                 other {Plus {extraEmoteCount, number} extra channel emotes}}", {
                    extraEmoteCount: t.length
                }, "SubBenefitMessage"))))
            };
            n.d(t, !1, function() {
                return i
            }), n.d(t, "a", function() {
                return l
            })
        },
        FMOh: function(e, t, n) {
            e.exports = n.p + "assets/specific-viewer-2x-5e2c1a31987df05d038e.png"
        },
        GJys: function(e, t, n) {
            e.exports = n.p + "assets/20-gifts-2x-a7b11d5a311d503f86d9.png"
        },
        "H/lO": function(e, t, n) {
            "use strict";
            var i;
            n.d(t, "a", function() {
                    return i
                }),
                function(e) {
                    e.Games = "game", e.Videos = "vod", e.Users = "user", e.Channels = "live_channel", e.StreamTags = "stream_tag", e.Tags = "tag"
                }(i || (i = {}))
        },
        HGFl: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return r
            }), n.d(t, "b", function() {
                return a
            }), n.d(t, "c", function() {
                return s
            }), n.d(t, "d", function() {
                return o
            });
            var i = n("NAv5"),
                r = {
                    RFC3399: "YYYY-MM-DDTHH:mm:ssZ",
                    timeString: "h:mma"
                };

            function a(e, t) {
                return Object(i.format)(e, t)
            }

            function s(e) {
                return Object(i.parse)(e)
            }

            function o(e, t) {
                var n = e.split(":");
                if (2 !== n.length) throw new Error("invalid time string: " + e);
                var i = parseInt(n[0], 10),
                    r = parseInt(n[1].substring(0, 2), 10),
                    a = n[1].substring(n[1].length - 2);
                if (12 === i && "am" === a && (i = 0), "pm" === a && i < 12 && (i += 12), isNaN(i) || i < 0 || i > 23 || isNaN(r) || r < 0 || r > 59) throw new Error("invalid time string: " + e);
                var s = t || new Date;
                return s.setHours(i, r), s
            }
        },
        HdJw: function(e, t, n) {
            e.exports = n.p + "assets/specific-viewer-1x-de48230545a296dd9a9b.png"
        },
        J5He: function(e, t, n) {},
        JMwM: function(e, t, n) {
            "use strict";
            var i = n("mrSG"),
                r = n("q1tI"),
                a = n("/7QA"),
                s = n("yR8l"),
                o = n("UUve"),
                c = n("+GjP"),
                u = n("D7An"),
                l = n("GnwI"),
                d = n("Ue10"),
                p = n("k91D"),
                m = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        n.handleClick = function() {
                            return n.openCheckout(), n.props.onClick && n.props.onClick()
                        }, n.openCheckout = function() {
                            n.state.hasPopupExperiment && n.props.giftRecipient && (a.n.set(o.b, n.props.productName), a.n.set(o.c, n.props.giftRecipient))
                        };
                        var i = a.p.experiments.getAssignment(u.b.InstreamCheckout);
                        return n.state = {
                            hasPopupExperiment: "yes" === i
                        }, n
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        var e, t, n = !!(this.props.data && this.props.data.user && this.props.data.user.self) && this.props.data.user.self.canGift;
                        this.props.checkoutURL ? this.props.isEsportChannel ? (e = Object(a.d)("Buy All-Access Pass Gift", "GiftSubscribeButton"), t = "esports-checkout-gift-subscribe-button") : (e = Object(a.d)("Buy Gift Subscription", "GiftSubscribeButton"), t = "checkout-gift-subscribe-button") : this.props.isEsportChannel ? (e = Object(a.d)("Gift All-Access Pass", "GiftSubscribeButton"), t = "esports-gift-subscribe-button") : (e = Object(a.d)("Gift Subscription", "GiftSubscribeButton"), t = "gift-subscribe-button");
                        var i = this.props.checkoutURL && this.props.giftRecipient ? Object(c.e)(this.props.checkoutURL, {
                            recipient: this.props.giftRecipient
                        }) : "";
                        return r.createElement(d.z, {
                            targetBlank: !0,
                            disabled: !n,
                            onClick: this.handleClick,
                            linkTo: this.state.hasPopupExperiment ? void 0 : i,
                            "data-test-selector": t,
                            purchase: this.props.purchase
                        }, this.props.buttonMessage || e)
                    }, t = i.__decorate([Object(l.b)("GiftSubscribeButton", {
                        autoReportInteractive: !0
                    }), Object(s.a)(p, {
                        options: function(e) {
                            return {
                                variables: {
                                    recipientLogin: e.giftRecipient,
                                    subProductId: e.subProductId
                                }
                            }
                        },
                        skip: function(e) {
                            return !e.giftRecipient || !e.subProductId
                        }
                    })], t)
                }(r.Component);
            n.d(t, !1, function() {
                return "gift-subscribe-button"
            }), n.d(t, !1, function() {
                return "checkout-gift-subscribe-button"
            }), n.d(t, !1, function() {
                return "esports-gift-subscribe-button"
            }), n.d(t, !1, function() {
                return "esports-checkout-gift-subscribe-button"
            }), n.d(t, "a", function() {
                return m
            })
        },
        JRpg: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "PrimeSubscribe_UserPrimeData"
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
                                                value: "primeSubCreditBenefit"
                                            },
                                            arguments: [],
                                            directives: [],
                                            selectionSet: {
                                                kind: "SelectionSet",
                                                selections: [{
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "willRenew"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "renewalDate"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }]
                                            }
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
                                                        value: "renewsAt"
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
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "paidUpgrade"
                                                    },
                                                    arguments: [],
                                                    directives: [],
                                                    selectionSet: {
                                                        kind: "SelectionSet",
                                                        selections: [{
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "price"
                                                            },
                                                            arguments: [],
                                                            directives: []
                                                        }, {
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "startsAt"
                                                            },
                                                            arguments: [],
                                                            directives: []
                                                        }]
                                                    }
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "gift"
                                                    },
                                                    arguments: [],
                                                    directives: [],
                                                    selectionSet: {
                                                        kind: "SelectionSet",
                                                        selections: [{
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "isGift"
                                                            },
                                                            arguments: [],
                                                            directives: []
                                                        }, {
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "gifter"
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
                    end: 362
                }
            };
            n.loc.source = {
                body: "query PrimeSubscribe_UserPrimeData($login: String!) {\nuser(login: $login) {\nid\nself {\ncanPrimeSubscribe\nprimeSubCreditBenefit {\nwillRenew\nrenewalDate\n}\nsubscriptionBenefit {\nid\npurchasedWithPrime\ntier\nplatform\nrenewsAt\nendsAt\npaidUpgrade {\nprice\nstartsAt\n}\ngift {\nisGift\ngifter {\nid\ndisplayName\n}\n}\n}\n}\n}\ncurrentUser {\nid\nhasPrime\n}\nrequestInfo {\ncountryCode\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        JVUd: function(e, t, n) {
            "use strict";
            var i = n("mrSG"),
                r = n("17x9"),
                a = n("q1tI"),
                s = n("/7QA");

            function o(e) {
                var t = {
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0,
                        height: 0,
                        width: 0
                    },
                    n = function() {
                        if (window.innerWidth) return window.innerWidth;
                        if (document.documentElement.clientWidth) return document.documentElement.clientWidth;
                        return screen.width
                    }(),
                    i = function() {
                        if (window.innerHeight) return window.innerHeight;
                        if (document.documentElement.clientHeight) return document.documentElement.clientHeight;
                        return screen.height
                    }();
                return e.bottom <= 0 || e.top > i || e.right < 0 || e.left > n ? t : (t.top = Math.max(0, e.top), t.left = Math.max(0, e.left), t.right = Math.min(e.right, n), t.bottom = Math.min(e.bottom, i), t.width = t.right - t.left, t.height = t.bottom - t.top, t)
            }

            function c(e, t) {
                return function(n) {
                    return function(c) {
                        function u() {
                            var e = null !== c && c.apply(this, arguments) || this;
                            return e.state = {
                                hadImpression: !1,
                                didScroll: !1
                            }, e.logger = s.k.withCategory("with-impression-listener"), e.setRef = function(t) {
                                return e.element = t
                            }, e.registerImpressionCallback = function(t) {
                                e.reportImpression = t
                            }, e
                        }
                        return i.__extends(u, c), u.prototype.componentDidMount = function() {
                            this.scrollContext = this.context;
                            var n = this.scrollContext.registerReceiver;
                            n ? t && void 0 !== t.percentage && void 0 !== t.pixels ? this.logger.warn("<" + e + " /> should only be initialized with percentage or pixel thresholds, not both") : this.unregister = n(this) : this.logger.warn("<" + e + " /> initialized missing a <ScrollableArea /> provider")
                        }, u.prototype.componentWillUnmount = function() {
                            this.unregister && this.unregister()
                        }, u.prototype.render = function() {
                            var e = {
                                impressionListener: {
                                    hadImpression: this.state.hadImpression,
                                    didScroll: this.state.didScroll,
                                    registerImpressionCallback: this.registerImpressionCallback
                                }
                            };
                            return a.createElement("div", {
                                ref: this.setRef
                            }, a.createElement(n, i.__assign({}, this.props, e)))
                        }, u.prototype.checkVisible = function(e) {
                            return i.__awaiter(this, void 0, void 0, function() {
                                var t, n;
                                return i.__generator(this, function(i) {
                                    return this.state.hadImpression || (t = this.isVisible(e)) && (n = this.isScrolled(), this.setState({
                                        hadImpression: t,
                                        didScroll: n
                                    }), this.reportImpression && this.reportImpression(n)), [2]
                                })
                            })
                        }, u.prototype.isVisible = function(e) {
                            if (!this.element) return !1;
                            var n = o(e),
                                i = this.element.getBoundingClientRect();
                            if (i.left < n.right && i.right > n.left && i.top < n.bottom && i.bottom > n.top) {
                                if (!t || 0 === t.percentage || 0 === t.pixels) return !0;
                                var r = t.percentage,
                                    a = t.pixels,
                                    s = i.bottom - i.top,
                                    c = n.bottom - n.top,
                                    u = Math.min(n.bottom - i.top, s, c);
                                if (a) {
                                    if (s >= a) return u >= a;
                                    r = 100
                                }
                                return !r || 100 * (u / s) >= r
                            }
                            return !1
                        }, u.prototype.isScrolled = function() {
                            if (!this.scrollContext) return !1;
                            var e = this.scrollContext.getScrollContent();
                            return !(!e || 0 === e.scrollTop)
                        }, u.contextTypes = {
                            registerReceiver: r.func,
                            getScrollContent: r.func
                        }, u
                    }(a.Component)
                }
            }
            n.d(t, "a", function() {
                return c
            })
        },
        KbPt: function(e, t, n) {},
        "L+W6": function(e, t, n) {
            "use strict";
            var i = n("q1tI"),
                r = n("/7QA"),
                a = n("a5fV"),
                s = n("W8Fi"),
                o = n("Ue10"),
                c = (n("W5/R"), function(e) {
                    var t = e.subscriptionProduct;
                    if (void 0 === t) return i.createElement("div", null);
                    var n = Object(s.e)([e.subscriptionProduct]),
                        c = Object(s.g)([e.subscriptionProduct]),
                        u = Object(s.f)([e.subscriptionProduct]),
                        l = t.price;
                    t.priceInfo && (l = Object(a.a)(Object(a.b)(t.priceInfo.total, t.priceInfo.exponent), t.priceInfo.currency));
                    var d = e.isOneTime ? Object(r.d)("{price} / One-time purchase", {
                        price: l
                    }, "SubDiscountPriceLabel") : Object(r.d)("{price} / Month", {
                        price: l
                    }, "SubDiscountPriceLabel");
                    if (s.e || s.g || s.f) {
                        var p = void 0;
                        if (e.isGift && n ? p = Object(r.d)("{price} (Save {percent})", {
                                price: Object(s.c)(e.subscriptionProduct, e.isGift),
                                percent: Object(r.f)(Object(s.d)(e.subscriptionProduct, e.isGift) / 100, "percent")
                            }, "SubDiscountPriceLabel") : e.isPaidUpgrade && u ? p = Object(r.d)("{price} / First Month", {
                                price: Object(s.a)(e.subscriptionProduct)
                            }, "SubDiscountPriceLabel") : c && (p = Object(r.d)("{price} for the first month (Save {percent})", {
                                price: Object(s.c)(e.subscriptionProduct, e.isGift),
                                percent: Object(r.f)(Object(s.d)(e.subscriptionProduct, e.isGift) / 100, "percent")
                            }, "SubDiscountPriceLabel")), p) return i.createElement(o.Wa, {
                            "data-test-selector": "sub-discount-price-label__discounted"
                        }, i.createElement(o.W, {
                            className: "sub-discount-price-label__original-price",
                            color: o.O.Alt2,
                            decoration: o.Lb.Strikethrough
                        }, d), i.createElement(o.W, {
                            bold: !0,
                            className: "sub-discount-price-label__discount-price"
                        }, p))
                    }
                    return i.createElement(o.Wa, {
                        "data-test-selector": "sub-discount-price-label__non-discounted"
                    }, i.createElement(o.W, null, d))
                });
            n.d(t, !1, function() {
                return "sub-discount-price-label__discounted"
            }), n.d(t, !1, function() {
                return "sub-discount-price-label__non-discounted"
            }), n.d(t, "a", function() {
                return c
            })
        },
        NZDK: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return p
            });
            var i = n("mrSG"),
                r = n("hnrd"),
                a = n("/7QA"),
                s = n("D7An"),
                o = n("H/lO"),
                c = n("vR4/"),
                u = n("BSTw"),
                l = n("Z9JJ"),
                d = {
                    games: {
                        indexName: o.a.Games,
                        hitsPerPage: 2,
                        topNumericFilters: ["popularity>1"],
                        singleTypeNumericFilters: [],
                        optionalFacetFilters: ""
                    },
                    videos: {
                        indexName: o.a.Videos,
                        hitsPerPage: 6,
                        get topNumericFilters() {
                            return ["created_at>" + f(function() {
                                var e = new Date;
                                return e.setMonth(e.getMonth() - 1), Math.floor(e.getTime() / 1e3)
                            }())]
                        },
                        singleTypeNumericFilters: [],
                        optionalFacetFilters: ""
                    },
                    users: {
                        indexName: o.a.Users,
                        hitsPerPage: 2,
                        topNumericFilters: ["followers>50"],
                        singleTypeNumericFilters: [],
                        optionalFacetFilters: ""
                    },
                    channels: {
                        indexName: o.a.Channels,
                        hitsPerPage: 6,
                        get topNumericFilters() {
                            return ["channel_count>10", "updated_on>" + f(m())]
                        },
                        get singleTypeNumericFilters() {
                            return ["updated_on>" + f(m())]
                        },
                        optionalFacetFilters: ""
                    },
                    streamTags: {
                        indexName: o.a.StreamTags,
                        hitsPerPage: 2,
                        topNumericFilters: [],
                        singleTypeNumericFilters: [],
                        optionalFacetFilters: ""
                    },
                    tags: {
                        indexName: o.a.Tags,
                        hitsPerPage: 2,
                        topNumericFilters: [],
                        singleTypeNumericFilters: [],
                        optionalFacetFilters: ""
                    }
                },
                p = function() {
                    function e(e) {
                        this.apolloClient = e.apolloClient, this.client = r(e.appId, e.apiKey), this.stats = e.stats, this.logger = e.logger.withCategory("search-client"), this.sendSearchRequestToForage = "variant" === a.p.experiments.getAssignment(s.b.NewSearchBackend), this.getCountryCode()
                    }
                    return e.prototype.queryTopResults = function(e, t) {
                        return i.__awaiter(this, void 0, void 0, function() {
                            var n, r, a, s;
                            return i.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        return r = [], (n = []).push(this.getTopResult(d.games, e)), n.push(this.getTopResult(d.videos, e)), n.push(this.getTopResult(d.users, e)), n.push(this.getTopResult(d.channels, e)), r.push(this.getTotalResult(d.games, e)), r.push(this.getTotalResult(d.videos, e)), r.push(this.getTotalResult(d.users, e)), r.push(this.getTotalResult(d.channels, e)), [4, this.query(n.concat(r))];
                                    case 1:
                                        return (a = i.sent()) ? (s = a.results, [2, {
                                            id: t,
                                            games: {
                                                totalHits: s[4].nbHits,
                                                hits: s[0].hits
                                            },
                                            videos: {
                                                totalHits: s[5].nbHits,
                                                hits: s[1].hits
                                            },
                                            users: {
                                                totalHits: s[6].nbHits,
                                                hits: s[2].hits
                                            },
                                            channels: {
                                                totalHits: s[7].nbHits,
                                                hits: s[3].hits
                                            }
                                        }]) : [2, function(e) {
                                            return {
                                                id: e,
                                                games: {
                                                    totalHits: 0,
                                                    hits: []
                                                },
                                                videos: {
                                                    totalHits: 0,
                                                    hits: []
                                                },
                                                users: {
                                                    totalHits: 0,
                                                    hits: []
                                                },
                                                channels: {
                                                    totalHits: 0,
                                                    hits: []
                                                }
                                            }
                                        }(t)]
                                }
                            })
                        })
                    }, e.prototype.queryForType = function(e, t, n, r) {
                        var a = void 0 === r ? {} : r,
                            s = a.page,
                            c = void 0 === s ? 0 : s,
                            u = a.hitsPerPage,
                            l = void 0 === u ? 50 : u,
                            p = a.facetFilters,
                            m = void 0 === p ? "" : p,
                            f = a.numericFilters,
                            b = a.restrictSearchableAttributes,
                            g = void 0 === b ? [] : b;
                        return i.__awaiter(this, void 0, void 0, function() {
                            var r, a, s, u, p, b, h, v, S = this;
                            return i.__generator(this, function(k) {
                                switch (k.label) {
                                    case 0:
                                        switch (r = {
                                            id: n,
                                            currentPage: c
                                        }, a = function(e) {
                                            return i.__awaiter(S, void 0, void 0, function() {
                                                var n, a;
                                                return i.__generator(this, function(i) {
                                                    switch (i.label) {
                                                        case 0:
                                                            return n = {
                                                                indexName: e.indexName,
                                                                query: t,
                                                                params: {
                                                                    page: c,
                                                                    hitsPerPage: l,
                                                                    numericFilters: f || e.singleTypeNumericFilters,
                                                                    facets: "*",
                                                                    facetFilters: m,
                                                                    restrictSearchableAttributes: g
                                                                }
                                                            }, [4, this.query([n])];
                                                        case 1:
                                                            return (a = i.sent()) ? (r.exhaustedHits = !a.results[0].nbHits || a.results[0].hits.length < l, [2, {
                                                                totalHits: a.results[0].nbHits,
                                                                hits: a.results[0].hits
                                                            }]) : (r.exhaustedHits = !0, [2, {
                                                                totalHits: 0,
                                                                hits: []
                                                            }])
                                                    }
                                                })
                                            })
                                        }, e) {
                                            case o.a.Games:
                                                return [3, 1];
                                            case o.a.Users:
                                                return [3, 3];
                                            case o.a.Channels:
                                                return [3, 5];
                                            case o.a.Videos:
                                                return [3, 7];
                                            case o.a.StreamTags:
                                                return [3, 9];
                                            case o.a.Tags:
                                                return [3, 11]
                                        }
                                        return [3, 13];
                                    case 1:
                                        return s = r, [4, a(d.games)];
                                    case 2:
                                        return s.games = k.sent(), [3, 14];
                                    case 3:
                                        return u = r, [4, a(d.users)];
                                    case 4:
                                        return u.users = k.sent(), [3, 14];
                                    case 5:
                                        return p = r, [4, a(d.channels)];
                                    case 6:
                                        return p.channels = k.sent(), [3, 14];
                                    case 7:
                                        return b = r, [4, a(d.videos)];
                                    case 8:
                                        return b.videos = k.sent(), [3, 14];
                                    case 9:
                                        return h = r, [4, a(d.streamTags)];
                                    case 10:
                                        return h.streamTags = k.sent(), [3, 14];
                                    case 11:
                                        return v = r, [4, a(d.tags)];
                                    case 12:
                                        return v.tags = k.sent(), [3, 14];
                                    case 13:
                                        return [2, null];
                                    case 14:
                                        return [2, r]
                                }
                            })
                        })
                    }, e.prototype.queryVideos = function(e, t, n) {
                        return i.__awaiter(this, void 0, void 0, function() {
                            var r, a, s, u;
                            return i.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        switch (r = o.a.Videos, a = [], n.length) {
                                            case c.a.Short:
                                                a.push("length<=900");
                                                break;
                                            case c.a.Long:
                                                a.push("length>900")
                                        }
                                        switch (s = {
                                            indexName: r,
                                            query: e,
                                            params: {
                                                page: 0,
                                                hitsPerPage: 50,
                                                numericFilters: a,
                                                facets: "*",
                                                facetFilters: ""
                                            }
                                        }, n.type) {
                                            case c.b.PastBroadcasts:
                                                s.params.facetFilters = "broadcast_type:archive";
                                                break;
                                            case c.b.Uploads:
                                                s.params.facetFilters = "broadcast_type:upload";
                                                break;
                                            case c.b.Highlights:
                                                s.params.facetFilters = "broadcast_type:highlight"
                                        }
                                        return [4, this.query([s])];
                                    case 1:
                                        return (u = i.sent()) ? [2, {
                                            id: t,
                                            totalHits: u.results[0].nbHits,
                                            hits: u.results[0].hits
                                        }] : [2, {
                                            id: t,
                                            totalHits: 0,
                                            hits: []
                                        }]
                                }
                            })
                        })
                    }, e.prototype.getCountryCode = function() {
                        var e = this;
                        this.apolloClient.query({
                            query: u
                        }).then(function(t) {
                            e.countryCode = t.data.requestInfo.countryCode
                        }).catch(function(t) {
                            e.logger.error(t, "Failed to get country code")
                        })
                    }, e.prototype.getSearchResults = function(e) {
                        var t = this,
                            n = {
                                query: e,
                                platform: "web"
                            };
                        return this.apolloClient.query({
                            query: l,
                            variables: n,
                            fetchPolicy: "network-only"
                        }).then(function(e) {
                            if (e.data.search) return {
                                results: JSON.parse(e.data.search.result)
                            }
                        }).catch(function(e) {
                            return t.logger.error(e, "Failed to get search results"), e
                        })
                    }, e.prototype.getTopResult = function(e, t) {
                        return {
                            indexName: e.indexName,
                            query: t,
                            params: {
                                page: 0,
                                hitsPerPage: e.hitsPerPage,
                                numericFilters: e.topNumericFilters
                            }
                        }
                    }, e.prototype.getTotalResult = function(e, t) {
                        return {
                            indexName: e.indexName,
                            query: t,
                            params: {
                                hitsPerPage: 0,
                                numericFilters: e.singleTypeNumericFilters
                            }
                        }
                    }, e.prototype.query = function(e) {
                        return i.__awaiter(this, void 0, void 0, function() {
                            var t, n, r, a, s;
                            return i.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        n = Date.now(), a = !1, i.label = 1;
                                    case 1:
                                        return i.trys.push([1, 6, , 7]), this.sendSearchRequestToForage && e.length > 7 ? (s = e[0].query, [4, this.getSearchResults(s)]) : [3, 3];
                                    case 2:
                                        return t = i.sent(), [3, 5];
                                    case 3:
                                        return [4, this.client.search(e)];
                                    case 4:
                                        t = i.sent(), i.label = 5;
                                    case 5:
                                        return [3, 7];
                                    case 6:
                                        return i.sent(), a = !0, t = null, [3, 7];
                                    case 7:
                                        return r = Date.now(), this.countryCode && (a ? this.stats.recordSearchError(this.countryCode, r - n) : this.stats.recordSearchSuccess(this.countryCode, r - n)), [2, t]
                                }
                            })
                        })
                    }, e
                }();

            function m() {
                return Math.floor(((new Date).getTime() - 6e5) / 1e3)
            }

            function f(e) {
                return e <= 100 ? e : 100 * Math.round(e / 100)
            }
        },
        O4UZ: function(e, t, n) {
            "use strict";
            n.d(t, "e", function() {
                return d
            }), n.d(t, "c", function() {
                return i
            }), n.d(t, "d", function() {
                return r
            }), n.d(t, "b", function() {
                return m
            }), n.d(t, "g", function() {
                return f
            }), n.d(t, "a", function() {
                return p
            }), n.d(t, "k", function() {
                return b
            }), n.d(t, "h", function() {
                return g
            }), n.d(t, "i", function() {
                return h
            }), n.d(t, "n", function() {
                return v
            }), n.d(t, "p", function() {
                return S
            }), n.d(t, "o", function() {
                return y
            }), n.d(t, "f", function() {
                return O
            }), n.d(t, "m", function() {
                return P
            }), n.d(t, "l", function() {
                return E
            }), n.d(t, "j", function() {
                return N
            });
            var i, r, a = n("TSYQ"),
                s = n("cr+I"),
                o = n("q1tI"),
                c = n("/7QA"),
                u = n("ht6z"),
                l = n("Ue10"),
                d = {
                    DIRECT_ENTITLEMENT: "DIRECT_ENTITLEMENT",
                    CLAIM_CODE: "CLAIM_CODE",
                    EXTERNAL_OFFER: "EXTERNAL_OFFER"
                };
            ! function(e) {
                e.Vertical = "Vertical", e.Horizontal = "Horizontal", e.Default = "Vertical"
            }(i || (i = {})),
            function(e) {
                e.Crown = "Crown", e.LootPage = "LootPage"
            }(r || (r = {}));
            var p, m = {
                    UNKNOWN_ERROR: "UNKNOWN_ERROR",
                    OFFER_ALREADY_CLAIMED: "OFFER_ALREADY_CLAIMED",
                    UNABLE_TO_SPEND: "UNABLE_TO_SPEND",
                    TOO_MANY_RECENT_SPENDS: "TOO_MANY_RECENT_SPENDS"
                },
                f = function(e) {
                    switch (e || m.UNKNOWN_ERROR) {
                        case m.OFFER_ALREADY_CLAIMED:
                            return Object(c.d)("Oh no! Unable to claim. Another linked Twitch account may have already claimed this content. Click <x:link>here to learn more</x:link>.", {
                                "x:link": function(e) {
                                    return o.createElement(l.U, {
                                        to: "https://help.twitch.tv/customer/portal/articles/2572060-twitch-prime-guide#MultipleAccounts",
                                        targetBlank: !0,
                                        className: "prime-error__link",
                                        "data-a-target": "prime-error_link"
                                    }, e)
                                }
                            }, "PrimeError");
                        case m.UNABLE_TO_SPEND:
                        case m.TOO_MANY_RECENT_SPENDS:
                        default:
                            return Object(c.d)("Something has gone wrong. Please try again later.", "PrimeError")
                    }
                };
            ! function(e) {
                e.Seen = "SEEN", e.Unseen = "UNSEEN", e.Claimed = "CLAIMED"
            }(p || (p = {}));
            var b = function(e) {
                    return e === i.Vertical
                },
                g = function(e, t) {
                    var n = t === i.Horizontal ? "horizontal" : "vertical";
                    return a(e, e + "--" + n)
                },
                h = function() {
                    return k("seenOffers")
                },
                v = function(e) {
                    c.m.set("seenOffers", e)
                },
                S = function(e, t) {
                    return (e && (e.priority || 0 === e.priority) ? e.priority : 99999) - (t && (t.priority || 0 === t.priority) ? t.priority : 99999)
                },
                k = function(e) {
                    return c.m.get(e, [])
                },
                y = function(e, t) {
                    return void 0 !== e && void 0 !== t && (!e && Object(u.a)(t))
                },
                O = function() {
                    var e = location.search,
                        t = s.parse(e);
                    return t && t.dateOverride || void 0
                },
                P = function(e) {
                    return e && !e.loading && !e.error && null !== e.currentUser && e.currentUser.hasPrime
                },
                E = function(e) {
                    return e && e.loading
                },
                N = function(e) {
                    return C().includes(e)
                },
                C = function() {
                    return c.b.get("prime_gift_experiment_offer_ids", [])
                }
        },
        OdUb: function(e, t, n) {
            e.exports = n.p + "assets/5-gifts-1x-94e5b57c4062c0e3ff51.png"
        },
        OeOm: function(e, t) {
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
                                        value: "tags"
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
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "gifts"
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
                                                        value: "to"
                                                    },
                                                    arguments: [],
                                                    directives: [],
                                                    selectionSet: {
                                                        kind: "SelectionSet",
                                                        selections: [{
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "login"
                                                            },
                                                            arguments: [],
                                                            directives: []
                                                        }]
                                                    }
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "from"
                                                    },
                                                    arguments: [],
                                                    directives: [],
                                                    selectionSet: {
                                                        kind: "SelectionSet",
                                                        selections: [{
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "login"
                                                            },
                                                            arguments: [],
                                                            directives: []
                                                        }]
                                                    }
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "offerID"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "offerConnection"
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
                                }]
                            }
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 364
                }
            };
            n.loc.source = {
                body: "query Prime_PrimeOfferList_PrimeOffers($dateOverride: Time) {\nprimeOffers(dateOverride: $dateOverride) {\nid\ntitle\nimageURL\nclaimInstructions\ndescription\ndeliveryMethod\npriority\ntags\ncontent {\ngame {\nid\nname\n}\nexternalURL\npublisher\ncategories\n}\nself {\nhasEntitlement\nclaimData\nstatus\ngifts {\nid\nto {\nlogin\n}\nfrom {\nlogin\n}\nofferID\nofferConnection {\nstatus\n}\n}\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        OpME: function(e, t, n) {
            "use strict";
            n.d(t, "b", function() {
                return u
            }), n.d(t, "e", function() {
                return l
            }), n.d(t, "c", function() {
                return p
            }), n.d(t, "a", function() {
                return m
            }), n.d(t, "f", function() {
                return b
            }), n.d(t, "d", function() {
                return g
            });
            var i = n("mrSG"),
                r = n("lZdE"),
                a = n("cpJf"),
                s = {
                    "^B-?\\)$": "B)",
                    "^:-?[z|Z|\\|]$": ":|",
                    "^:-?\\)$": ":)",
                    "^:-?\\($": ":(",
                    "^:-?(p|P)$": ":P",
                    "^;-?(p|P)$": ";P",
                    "^:-?[\\\\/]$": ":/",
                    "^;-?\\)$": ";)",
                    "^R-?\\)$": "R)",
                    "^:>$": ":>",
                    "^:&gt;$": ":>",
                    "^[oO](_|\\.)[oO]$": "O_o",
                    "^:-?D$": ":D",
                    "^:-?(o|O)$": ":O",
                    "^>\\($": ">(",
                    "^:-?(?:7|L)$": ":7",
                    "^:-?(S|s)$": ":S",
                    "^#-?[\\\\/]$": "#/",
                    "^<\\]$": "<]",
                    "^<3$": "<3",
                    "^&lt;3$": "<3",
                    "^&lt;\\]$": "<]",
                    "^&gt;\\($": ">("
                },
                o = ["1.0", "2.0", "3.0"],
                c = new Set([457, 33, 42, 0]);

            function u(e) {
                for (var t = [], n = function(e) {
                        if (!e || !e.id || !e.token) return "continue";
                        var n = f(e.token),
                            r = s[n] || n,
                            a = o.reduce(function(t, n) {
                                var i = t;
                                return i && (i = i.concat(", ")), i.concat("https://static-cdn.jtvnw.net/emoticons/v1/" + e.id + "/" + n + " " + n + "x")
                            }, "");
                        t.push(i.__assign({
                            displayName: r,
                            srcSet: a
                        }, e))
                    }, r = 0, a = e; r < a.length; r++) {
                    n(a[r])
                }
                return t
            }

            function l(e, t) {
                var n = u(e);
                return t && (n = function(e, t) {
                    return e.map(function(e) {
                        return i.__assign({}, e, {
                            setID: t
                        })
                    })
                }(n, t)), n
            }

            function d(e) {
                return e.filter(function(e) {
                    return !!e && !!e.id && !!e.token
                }).sort(function(e, t) {
                    return parseInt(e.id, 10) - parseInt(t.id, 10)
                })
            }

            function p(e) {
                for (var t = [], n = 0, i = e; n < i.length; n++) {
                    var r = i[n];
                    if (r && r.id && r.emotes) {
                        for (var a = {
                                id: r.id,
                                emotes: []
                            }, s = 0, o = r.emotes; s < o.length; s++) {
                            var c = o[s];
                            c && c.id && c.token && a.emotes.push(c)
                        }
                        t.push(a)
                    }
                }
                return t
            }

            function m(e) {
                for (var t = [], n = [], i = 0, r = e; i < r.length; i++) {
                    var a = r[i];
                    if (a && a.id && a.emotes) {
                        var s = {
                            id: a.id,
                            emotes: l(d(a.emotes), a.id)
                        };
                        c.has(parseInt(a.id, 10)) ? t.push(s) : n.push(s)
                    }
                }
                return n.concat(t)
            }
            var f = function(e) {
                    return function(e) {
                        return /[\|\\\^\$\*\+\?\:\#]/.test(e)
                    }(e) ? "^" + e.replace(/\\(?=[&;:])/g, "") + "$" : e
                },
                b = function(e, t, n) {
                    var i = n || a.d,
                        s = [],
                        o = [],
                        c = [],
                        u = new RegExp("^" + Object(r.a)(t), "i");
                    return e.forEach(function(e) {
                        i[e.token] ? c.push(e) : e.token.match(u) ? s.push(e) : o.push(e)
                    }), s.sort(function(e, t) {
                        return e.token < t.token ? -1 : e.token > t.token ? 1 : 0
                    }), o.sort(function(e, t) {
                        return e.token < t.token ? -1 : e.token > t.token ? 1 : 0
                    }), c.sort(function(e, t) {
                        return i[t.token].count - i[e.token].count
                    }), c.concat(s).concat(o)
                },
                g = function(e) {
                    var t = {};
                    return e.filter(function(e) {
                        return !t.hasOwnProperty(e.token) && (t[e.token] = !0)
                    })
                }
        },
        PCo6: function(e, t, n) {},
        PsVi: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "PrimeOffer_GiftsQuery"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "offerID"
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
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "primeGift"
                                    },
                                    arguments: [{
                                        kind: "Argument",
                                        name: {
                                            kind: "Name",
                                            value: "offerID"
                                        },
                                        value: {
                                            kind: "Variable",
                                            name: {
                                                kind: "Name",
                                                value: "offerID"
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
                                                value: "to"
                                            },
                                            arguments: [],
                                            directives: [],
                                            selectionSet: {
                                                kind: "SelectionSet",
                                                selections: [{
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "login"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }]
                                            }
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "from"
                                            },
                                            arguments: [],
                                            directives: [],
                                            selectionSet: {
                                                kind: "SelectionSet",
                                                selections: [{
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "login"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }]
                                            }
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "offerConnection"
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
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 169
                }
            };
            n.loc.source = {
                body: "query PrimeOffer_GiftsQuery($offerID: String!) {\ncurrentUser {\nid\nhasPrime\nprimeGift(offerID: $offerID) {\nid\nto {\nlogin\n}\nfrom {\nlogin\n}\nofferConnection {\nstatus\n}\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        QAxy: function(e, t) {
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
        QK1T: function(e, t, n) {
            "use strict";
            n.d(t, "c", function() {
                return p
            }), n.d(t, "a", function() {
                return m
            }), n.d(t, "b", function() {
                return f
            });
            var i = /Android/i,
                r = /chrome/i,
                a = /webOS/i,
                s = /iPhone/i,
                o = /iPad/i,
                c = /iPod/i,
                u = /BlackBerry/i,
                l = /Windows Phone/i,
                d = /Mobile/i;

            function p(e) {
                return m(e) || a.test(e) || s.test(e) || o.test(e) || c.test(e) || u.test(e) || l.test(e) || d.test(e)
            }

            function m(e) {
                return i.test(e)
            }

            function f(e) {
                return r.test(e)
            }
        },
        R9CH: function(e, t, n) {
            e.exports = n.p + "assets/5-gifts-4x-fbc53988fbb5e9612bc6.png"
        },
        RfIv: function(e, t, n) {
            "use strict";
            var i;
            n.d(t, "a", function() {
                    return i
                }),
                function(e) {
                    e.Game = "Game", e.InGameLoot = "InGameLoot", e.All = "All"
                }(i || (i = {}))
        },
        Rjl4: function(e, t, n) {
            "use strict";
            n.d(t, "b", function() {
                return o
            }), n.d(t, "a", function() {
                return c
            }), n.d(t, "c", function() {
                return p
            }), n.d(t, "d", function() {
                return m
            }), n.d(t, "e", function() {
                return f
            }), n.d(t, "q", function() {
                return b
            }), n.d(t, "r", function() {
                return g
            }), n.d(t, "l", function() {
                return h
            }), n.d(t, "i", function() {
                return v
            }), n.d(t, "m", function() {
                return S
            }), n.d(t, "k", function() {
                return k
            }), n.d(t, "j", function() {
                return y
            }), n.d(t, "p", function() {
                return O
            }), n.d(t, "n", function() {
                return N
            }), n.d(t, "o", function() {
                return C
            }), n.d(t, "h", function() {
                return T
            }), n.d(t, "g", function() {
                return x
            }), n.d(t, "f", function() {
                return _
            });
            var i, r, a, s, o, c, u = n("/7QA"),
                l = n("2xye"),
                d = n("O4UZ");

            function p(e) {
                u.o.track(l.SpadeEventType.CrownInteraction, {
                    has_prime: e.hasPrime,
                    action: i.Hover,
                    user_agent: navigator.userAgent
                })
            }

            function m(e, t) {
                u.o.track(l.SpadeEventType.CrownInteraction, {
                    has_prime: t.hasPrime,
                    number_of_offers: t.numberOfOffers,
                    action: e ? i.Open : i.Close,
                    user_agent: navigator.userAgent
                })
            }

            function f(e) {
                u.o.track(l.SpadeEventType.CrownInteraction, {
                    has_prime: e.hasPrime,
                    number_of_offers: e.numberOfOffers,
                    action: i.OffersLoaded,
                    user_agent: navigator.userAgent
                })
            }

            function b(e) {
                E(e, r.Click, s.StartYourFreeTrial)
            }

            function g(e) {
                E(e, r.Hover, s.StartYourFreeTrial)
            }

            function h(e, t) {
                E(t, r.Click, e ? s.MoreInfo : s.CloseInfo)
            }

            function v(e, t) {
                P(e, r.Click, t)
            }

            function S(e) {
                E(e, r.Hover, s.MoreInfo)
            }

            function k(e) {
                E(e, r.Hover, s.CloseInfo)
            }

            function y(e, t) {
                P(e, r.Hover, t)
            }

            function O(e) {
                E(e, r.Impression, s.Offer)
            }

            function P(e, t, n) {
                var i;
                switch (n) {
                    case d.e.CLAIM_CODE:
                        i = s.GetCode;
                        break;
                    case d.e.EXTERNAL_OFFER:
                        i = s.LearnMore;
                        break;
                    case d.e.DIRECT_ENTITLEMENT:
                        i = s.ClaimOffer
                }
                i && E(e, t, i)
            }

            function E(e, t, n) {
                u.o.track(l.SpadeEventType.PrimeOfferInteraction, {
                    offer_id: e.offerID,
                    external_url: e.externalURL,
                    index: e.index,
                    element: n,
                    action: t,
                    user_agent: navigator.userAgent,
                    has_prime: e.hasPrime,
                    display_width_type: e.displayWidthType
                })
            }

            function N(e) {
                u.o.track(l.SpadeEventType.PrimeLootPagePageview, {
                    reftag: e.reftag,
                    user_agent: navigator.userAgent
                })
            }

            function C(e) {
                u.o.track(l.SpadeEventType.PrimeLootPageTryPrimeClick, {
                    button_position: e.buttonPosition,
                    user_agent: navigator.userAgent
                })
            }

            function T() {
                D(a.Impression)
            }

            function x() {
                D(a.Hover)
            }

            function _() {
                D(a.Click)
            }

            function D(e) {
                u.o.track(l.SpadeEventType.PrimeBlueBarInteraction, {
                    client_time: Date.now(),
                    action: e
                })
            }! function(e) {
                e.Open = "click_open", e.Close = "click_close", e.Hover = "hover", e.OffersLoaded = "offers_loaded"
            }(i || (i = {})),
            function(e) {
                e.Hover = "hover", e.Click = "click", e.Impression = "impression"
            }(r || (r = {})),
            function(e) {
                e.Hover = "hover", e.Click = "click", e.Impression = "impression"
            }(a || (a = {})),
            function(e) {
                e.StartYourFreeTrial = "start_your_free_trial", e.MoreInfo = "more_info", e.CloseInfo = "close_info", e.ClaimOffer = "claim_offer", e.LearnMore = "learn_more", e.GetCode = "get_code", e.Offer = "offer"
            }(s || (s = {})),
            function(e) {
                e.TopNav = "top-nav", e.CenterBanner = "center-banner", e.CenterFooter = "center-footer"
            }(o || (o = {})),
            function(e) {
                e.Wide = "wide", e.Narrow = "narrow"
            }(c || (c = {}))
        },
        SPHB: function(e, t, n) {
            e.exports = n.p + "assets/20-gifts-4x-56e2b5150ecd3c405509.png"
        },
        SStD: function(e, t) {
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
        SXud: function(e, t) {
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
        "Sb+K": function(e, t, n) {},
        TybJ: function(e, t, n) {
            e.exports = n.p + "assets/10-gifts-4x-ee94b6fd6b07004e277a.png"
        },
        UFVY: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "PrimeRedeem_GiftsQuery"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "offerID"
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
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "primeGift"
                                    },
                                    arguments: [{
                                        kind: "Argument",
                                        name: {
                                            kind: "Name",
                                            value: "offerID"
                                        },
                                        value: {
                                            kind: "Variable",
                                            name: {
                                                kind: "Name",
                                                value: "offerID"
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
                                                value: "to"
                                            },
                                            arguments: [],
                                            directives: [],
                                            selectionSet: {
                                                kind: "SelectionSet",
                                                selections: [{
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "login"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }]
                                            }
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "from"
                                            },
                                            arguments: [],
                                            directives: [],
                                            selectionSet: {
                                                kind: "SelectionSet",
                                                selections: [{
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "login"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }]
                                            }
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "offerConnection"
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
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 170
                }
            };
            n.loc.source = {
                body: "query PrimeRedeem_GiftsQuery($offerID: String!) {\ncurrentUser {\nid\nhasPrime\nprimeGift(offerID: $offerID) {\nid\nto {\nlogin\n}\nfrom {\nlogin\n}\nofferConnection {\nstatus\n}\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        "W+18": function(e, t, n) {
            e.exports = n.p + "assets/random-viewer-2x-a2bc4d5bae483c0f3b9d.png"
        },
        "W5/R": function(e, t, n) {},
        WAGi: function(e, t, n) {},
        WGf9: function(e, t, n) {},
        Wu8b: function(e, t, n) {},
        Z9JJ: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "NavSearch"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "query"
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
                    }, {
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "platform"
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
                                value: "search"
                            },
                            arguments: [{
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "userQuery"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "query"
                                    }
                                }
                            }, {
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "platform"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "platform"
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
                                        value: "result"
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
                    end: 112
                }
            };
            n.loc.source = {
                body: "query NavSearch($query: String! $platform: String!) {\nsearch(userQuery: $query platform: $platform) {\nresult\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        a5fV: function(e, t, n) {
            "use strict";
            n.d(t, "b", function() {
                return r
            }), n.d(t, "a", function() {
                return a
            });
            var i = n("/7QA");

            function r(e, t) {
                return e / Math.pow(10, t)
            }

            function a(e, t) {
                return Object(i.f)(e, {
                    style: "currency",
                    currency: t
                })
            }
        },
        cinR: function(e, t, n) {
            "use strict";
            var i, r = n("mrSG"),
                a = n("q1tI");
            ! function(e) {
                e.PrimeTrackingButtonWrapper = "test_selector_prime_tracking_button_wrapper"
            }(i || (i = {}));
            var s = 200,
                o = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.hoverTimer = 0, t.onMouseEnter = function(e) {
                            t.clearTimeout(), t.hoverTimer = setTimeout(function() {
                                t.props.onHover && t.props.onHover(e)
                            }, s)
                        }, t.onMouseLeave = function() {
                            t.clearTimeout()
                        }, t.onClick = function(e) {
                            t.props.onClick && t.props.onClick(e), t.clearTimeout()
                        }, t.clearTimeout = function() {
                            t.hoverTimer && (clearTimeout(t.hoverTimer), t.hoverTimer = 0)
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.componentWillUnmount = function() {
                        this.clearTimeout()
                    }, t.prototype.render = function() {
                        return a.createElement("div", {
                            "data-test-selector": i.PrimeTrackingButtonWrapper,
                            onMouseEnter: this.onMouseEnter,
                            onMouseLeave: this.onMouseLeave,
                            onClick: this.onClick
                        }, this.props.children)
                    }, t
                }(a.Component);
            n.d(t, !1, function() {
                return i
            }), n.d(t, "a", function() {
                return o
            })
        },
        cpJf: function(e, t, n) {
            "use strict";
            var i;
            n.d(t, "a", function() {
                    return i
                }), n.d(t, "d", function() {
                    return a
                }), n.d(t, "c", function() {
                    return s
                }), n.d(t, "b", function() {
                    return r
                }),
                function(e) {
                    e.Chat = "stream_chat", e.Feeds = "feeds", e.Room = "chatroom", e.Whisper = "whisper", e.VodChat = "vod-chat"
                }(i || (i = {}));
            var r, a = {
                    TriHard: {
                        count: 196568036
                    },
                    Kappa: {
                        count: 192158118
                    },
                    "4Head": {
                        count: 155758710
                    },
                    PogChamp: {
                        count: 151485090
                    },
                    cmonBruh: {
                        count: 146352878
                    },
                    BibleThump: {
                        count: 56472964
                    },
                    WutFace: {
                        count: 45069031
                    },
                    Kreygasm: {
                        count: 41387580
                    },
                    DansGame: {
                        count: 38097659
                    },
                    hi5F: {
                        count: 34986404
                    },
                    SMOrc: {
                        count: 34734484
                    },
                    KappaPride: {
                        count: 34262839
                    },
                    VoHiYo: {
                        count: 27886434
                    },
                    SwiftRage: {
                        count: 24561900
                    },
                    ResidentSleeper: {
                        count: 24438298
                    },
                    EleGiggle: {
                        count: 19891526
                    },
                    FailFish: {
                        count: 19118343
                    },
                    NotLikeThis: {
                        count: 18802905
                    },
                    Keepo: {
                        count: 18351415
                    },
                    BabyRage: {
                        count: 18220906
                    },
                    MingLee: {
                        count: 18026207
                    },
                    pbfSSH: {
                        count: 16911241
                    },
                    forsenE: {
                        count: 14960299
                    },
                    HeyGuys: {
                        count: 14851569
                    },
                    ANELE: {
                        count: 14648986
                    },
                    PJSalt: {
                        count: 14438861
                    }
                },
                s = ["354", "49106", "4339", "48", "25", "55338", "70433", "1902", "68856", "81103", "76171", "27509"];
            ! function(e) {
                e.Web = "WEB", e.IOS = "IOS", e.Android = "ANDROID"
            }(r || (r = {}))
        },
        cx1G: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "PrimeClaimButton_GiftsQuery"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "offerID"
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
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "primeGift"
                                    },
                                    arguments: [{
                                        kind: "Argument",
                                        name: {
                                            kind: "Name",
                                            value: "offerID"
                                        },
                                        value: {
                                            kind: "Variable",
                                            name: {
                                                kind: "Name",
                                                value: "offerID"
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
                                                value: "to"
                                            },
                                            arguments: [],
                                            directives: [],
                                            selectionSet: {
                                                kind: "SelectionSet",
                                                selections: [{
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "login"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }]
                                            }
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "from"
                                            },
                                            arguments: [],
                                            directives: [],
                                            selectionSet: {
                                                kind: "SelectionSet",
                                                selections: [{
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "login"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }]
                                            }
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "offerConnection"
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
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 175
                }
            };
            n.loc.source = {
                body: "query PrimeClaimButton_GiftsQuery($offerID: String!) {\ncurrentUser {\nid\nhasPrime\nprimeGift(offerID: $offerID) {\nid\nto {\nlogin\n}\nfrom {\nlogin\n}\nofferConnection {\nstatus\n}\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        "d/7K": function(e, t, n) {},
        dBR3: function(e, t, n) {
            "use strict";
            var i, r = n("mrSG"),
                a = n("q1tI"),
                s = n("/7QA"),
                o = n("Ue10");
            ! function(e) {
                e.Prime = "prime", e.Tier1 = "1000", e.Tier2 = "2000", e.Tier3 = "3000"
            }(i || (i = {}));
            var c = {
                    prime: 0,
                    1000: 0,
                    2000: 1,
                    3000: 2
                },
                u = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            activeTab: i.Tier1
                        }, t.toggleActiveTab = function(e) {
                            if (e.currentTarget.parentElement) {
                                var n = e.currentTarget.parentElement;
                                t.setState(function(e) {
                                    return {
                                        activeTab: n.getAttribute("data-tier") || e.activeTab
                                    }
                                }, function() {
                                    t.props.onTierSelect(t.props.subscriptionProducts[c[t.state.activeTab]])
                                })
                            }
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        var e = this;
                        if (1 === this.props.subscriptionProducts.length) return this.props.children;
                        var t = this.props.subscriptionProducts.filter(function(e) {
                            return e.tier
                        }).map(function(t) {
                            var n = t.tier;
                            return e.renderTab(n, Object(s.d)("Tier {tierNumber}", {
                                tierNumber: c[n] + 1
                            }, "TierTabsWrapper"))
                        });
                        return a.createElement(o.Wa, {
                            className: "tier-tabs-wrapper"
                        }, a.createElement(o.Wa, {
                            margin: {
                                bottom: 1
                            }
                        }, a.createElement(o.zb, null, t)), a.createElement(o.Wa, null, this.props.children))
                    }, t.prototype.renderTab = function(e, t) {
                        return a.createElement(o.Wa, {
                            display: o.X.InlineFlex,
                            key: "sub-tier-tab-" + e,
                            margin: {
                                right: 2
                            }
                        }, this.props.subbedTier === e && a.createElement(o.Wa, {
                            display: o.X.InlineFlex,
                            margin: {
                                right: .5
                            }
                        }, a.createElement(o.nb, {
                            asset: o.ob.Star
                        })), a.createElement(o.yb, {
                            active: this.state.activeTab === e,
                            "data-tier": e,
                            onClick: this.toggleActiveTab
                        }, t))
                    }, t
                }(a.Component);
            n.d(t, !1, function() {
                return i
            }), n.d(t, "a", function() {
                return u
            })
        },
        eVBn: function(e, t, n) {
            e.exports = n.p + "assets/random-viewer-1x-f59e34affa671c8a8237.png"
        },
        "f+qK": function(e, t, n) {
            "use strict";
            n.r(t);
            var i, r = n("mrSG"),
                a = n("q1tI"),
                s = n("fvjX"),
                o = n("/7QA"),
                c = n("ZDlU"),
                u = n("yR8l"),
                l = n("ZS2+"),
                d = n("5zXJ"),
                p = n("Ue10");
            ! function(e) {
                e.BalloonDetailLogo = "BalloonDetailLogo", e.BalloonDetailSubheader = "BalloonDetailSubheader", e.BalloonDetailIGCSubheader = "BalloonDetailIGCSubheader", e.BalloonDetailIGCCopy = "BalloonDetailIGCCopy", e.BalloonDetailExperienceSubheader = "BalloonDetailExperienceSubheader", e.BalloonDetailExperienceCopy = "BalloonDetailExperienceCopy"
            }(i || (i = {}));
            var m, f = function() {
                    return a.createElement(p.Wa, {
                        className: "esports-top-page-details"
                    }, a.createElement(p.Wa, {
                        className: "insider-pass-pre-purchase__header",
                        display: p.X.Flex,
                        justifyContent: p.Va.Center,
                        margin: {
                            bottom: 1
                        },
                        padding: {
                            x: 2,
                            y: 1
                        }
                    }, a.createElement("img", {
                        alt: Object(o.d)("Overwatch League All-Access Pass on Twitch", "CampaignsTopPageDetails"),
                        "data-test-selector": i.BalloonDetailLogo,
                        height: "80px",
                        src: d.c + "/owl-2017/all-access-logo.svg"
                    })), a.createElement(p.Wa, {
                        margin: {
                            bottom: 1
                        }
                    }, a.createElement(p.W, {
                        bold: !0,
                        "data-test-selector": i.BalloonDetailSubheader,
                        type: p.Nb.H4
                    }, Object(o.d)("Your VIP pass to the best of the Overwatch League", "CampaignsTopPageDetails"))), a.createElement(p.Wa, {
                        margin: {
                            bottom: 1
                        }
                    }, a.createElement(p.W, {
                        bold: !0,
                        "data-test-selector": i.BalloonDetailIGCSubheader,
                        type: p.Nb.H6
                    }, Object(o.d)("Overwatch In-Game Content (requires Blizzard account link)", "CampaignsTopPageDetails")), a.createElement(p.W, {
                        "data-test-selector": i.BalloonDetailIGCCopy
                    }, Object(o.d)("15 Hero Skins • OWL Player Icon • OWL Spray", "CampaignsTopPageDetails"))), a.createElement(p.Wa, {
                        margin: {
                            bottom: 1
                        }
                    }, a.createElement(p.W, {
                        bold: !0,
                        "data-test-selector": i.BalloonDetailExperienceSubheader,
                        type: p.Nb.H6
                    }, Object(o.d)("The Overwatch League All-Access Experience", "CampaignsTopPageDetails")), a.createElement(p.W, {
                        "data-test-selector": i.BalloonDetailExperienceCopy
                    }, Object(o.d)("Passholder-only chat •            Match analysis videos by players •            23 Twitch emotes •            OWL chat badges •            Ad-free viewing on OWL •            Post-Match Q&A VODs", "CampaignsTopPageDetails"))))
                },
                b = n("DnOo"),
                g = n("W8Fi");
            n("6nJs");
            ! function(e) {
                e.GiftButtonSelector = "GiftButtonSelector", e.SubscribeButtonSelector = "SubscribeButtonSelector"
            }(m || (m = {}));
            var h, v = function(e) {
                var t = Object(o.d)("Gift All-Access Pass", "CampaignsNonSubbedTopPage");
                return a.createElement(p.Wa, {
                    padding: 2
                }, a.createElement(f, null), a.createElement(p.W, {
                    bold: !0,
                    type: p.Nb.H6
                }, Object(o.d)("One-Time Purchase for the 2018 Season", "CampaignsNonSubbedTopPage")), a.createElement(p.W, null, Object(o.d)("All-Access benefits last up to the start of the 2019 Overwatch League Season.            Twitch emotes, badges, and in-game content are yours to keep forever.", "CampaignsNonSubbedTopPage")), a.createElement(p.Wa, {
                    margin: {
                        top: 1
                    }
                }, a.createElement(p.Wa, {
                    display: p.X.Inline,
                    margin: {
                        right: .5
                    }
                }, a.createElement(b.a, {
                    "data-a-target": m.SubscribeButtonSelector,
                    handleSubAction: e.handleTopPageSubButtonClick,
                    isEsportChannel: !0,
                    isSubbedToTier: !1,
                    productName: e.subscriptionProducts[0].name,
                    tierPrice: Object(g.g)(e.subscriptionProducts) ? Object(g.c)(e.subscriptionProducts[0]) : e.subscriptionProducts[0].price,
                    url: e.subscriptionProducts[0].url
                })), a.createElement(p.z, {
                    ariaLabel: t,
                    "data-test-selector": m.GiftButtonSelector,
                    onClick: e.showRecipientSelect,
                    type: p.F.Hollow
                }, t)))
            };
            ! function(e) {
                e.SubbedSubheader = "SubbedSubheader", e.SubbedCopy = "SubbedCopy", e.GiftButtonSelector = "GiftButtonSelector"
            }(h || (h = {}));
            var S, k = function(e) {
                var t = Object(o.d)("Gift All-Access Pass", "CampaignsSubbedTopPage");
                return a.createElement(p.Wa, {
                    padding: 2
                }, a.createElement(f, null), a.createElement(p.W, {
                    "test-selector": h.SubbedSubheader,
                    type: p.Nb.H4,
                    bold: !0
                }, Object(o.d)("You have the All-Access Pass", "CampaignsSubbedTopPage")), a.createElement(p.W, {
                    "test-selector": h.SubbedCopy
                }, Object(o.d)("All-Access benefits last up to the start of the 2019 Overwatch League Season.            Twitch emotes, badges, and in-game content are yours to keep.", "CampaignsSubbedTopPage")), a.createElement(p.Wa, {
                    margin: {
                        top: 1
                    }
                }, a.createElement(p.z, {
                    ariaLabel: t,
                    "data-test-selector": h.GiftButtonSelector,
                    onClick: e.showRecipientSelect,
                    type: p.F.Hollow
                }, t)))
            };
            ! function(e) {
                e[e.Top = 0] = "Top", e[e.SubOptions = 1] = "SubOptions", e[e.GiftOptions = 2] = "GiftOptions", e[e.RecipientSelect = 3] = "RecipientSelect", e[e.MysteryGiftSelect = 4] = "MysteryGiftSelect", e[e.Esports = 5] = "Esports"
            }(S || (S = {}));
            var y, O = n("br9A"),
                P = l.a.wrap(function() {
                    return Promise.resolve().then(n.bind(null, "Br/p"))
                }, "GiftRecipientSearch"),
                E = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.goToPreviousPage = function() {
                            t.props.handleSubMenuAction({
                                action: O.a.ClickBack,
                                modalLevel: t.props.currentPage === S.SubOptions || t.props.currentPage === S.GiftOptions ? "top_page" : "second_page"
                            }), t.props.currentPage !== S.RecipientSelect || t.props.showTop()
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        return this.props.currentPage === S.RecipientSelect ? this.getGiftRecipientSearchPage() : this.props.isSubscribed ? this.getSubbedTopPage() : this.getUnsubbedTopPage()
                    }, t.prototype.getSubbedTopPage = function() {
                        return a.createElement(k, {
                            showRecipientSelect: this.props.showRecipientSelect
                        })
                    }, t.prototype.getUnsubbedTopPage = function() {
                        return a.createElement(v, {
                            channelLogin: this.props.channelLogin,
                            handleTopPageSubButtonClick: this.props.handleTopPageSubButtonClick,
                            handleSubMenuAction: this.props.handleSubMenuAction,
                            subscriptionProducts: this.props.subscriptionProducts ? this.props.subscriptionProducts : [],
                            userHasPrime: this.props.userHasPrime,
                            showRecipientSelect: this.props.showRecipientSelect
                        })
                    }, t.prototype.getGiftRecipientSearchPage = function() {
                        return this.props.subscriptionProducts ? a.createElement(P, {
                            key: "gift-recipient-search-page",
                            onBack: this.goToPreviousPage,
                            subscriptionProducts: this.props.subscriptionProducts,
                            handleSubMenuAction: this.props.handleSubMenuAction,
                            isEsportChannel: !0
                        }) : null
                    }, t
                }(a.Component),
                N = n("GnwI"),
                C = n("eVBn"),
                T = n.n(C),
                x = n("W+18"),
                _ = n.n(x),
                D = n("CdEI"),
                I = n.n(D),
                G = n("HdJw"),
                F = n.n(G),
                w = n("FMOh"),
                R = n.n(w),
                W = n("fIIl"),
                j = n.n(W);
            n("EBDZ");
            ! function(e) {
                e.IneligibleToGiftMessage = "IneligibleToGiftMessage", e.SingleGiftButton = "SingleGiftButton", e.MysteryGiftButton = "MysteryGiftButton"
            }(y || (y = {}));
            var B = function(e) {
                    return a.createElement(p.Wa, {
                        padding: 2
                    }, a.createElement(p.Wa, {
                        alignItems: p.f.Center,
                        display: p.X.Flex,
                        padding: {
                            bottom: .5
                        }
                    }, a.createElement(p.nb, {
                        asset: p.ob.Gift
                    }), a.createElement(p.Wa, {
                        flexGrow: 1,
                        padding: {
                            left: .5
                        }
                    }, a.createElement(p.W, {
                        bold: !0,
                        fontSize: p.Ba.Size4
                    }, Object(o.d)("Gift a Subscription", "GiftOptions"))), e.onBack && a.createElement(p.z, {
                        type: p.F.Text,
                        "data-a-target": "subscribe-back-button",
                        icon: p.ob.AngleLeft,
                        onClick: e.onBack
                    }, a.createElement(p.Wa, {
                        alignItems: p.f.Center,
                        display: p.X.InlineFlex
                    }, a.createElement(p.W, null, Object(o.d)("Back", "GiftOptions"))))), !e.currentUserCanGift && a.createElement(p.xb, {
                        borderBottom: !0,
                        borderRight: !0,
                        borderTop: !0,
                        className: "subscription-gift-options__ineligible-message",
                        "data-test-selector": y.IneligibleToGiftMessage,
                        margin: {
                            top: 1
                        },
                        padding: 1
                    }, a.createElement(p.W, null, Object(o.d)("Sorry, you cannot give gifts in this channel.", "GiftOptions"))), a.createElement(p.Wa, {
                        display: p.X.Flex,
                        margin: {
                            top: 1
                        }
                    }, a.createElement(p.Wa, {
                        flexShrink: 0,
                        margin: {
                            bottom: "auto"
                        }
                    }, a.createElement(p.Pa, {
                        borderRadius: p.x.Medium
                    }, a.createElement(p.S, {
                        alt: Object(o.d)("Give a gift to a viewer", "GiftOptions"),
                        src: F.a,
                        srcSet: {
                            "1x": F.a,
                            "2x": R.a,
                            "4x": j.a
                        }
                    }))), a.createElement(p.Wa, {
                        margin: {
                            left: .5
                        },
                        padding: {
                            left: 1
                        }
                    }, a.createElement(p.Wa, {
                        margin: {
                            bottom: .5
                        }
                    }, a.createElement(p.W, {
                        bold: !0,
                        fontSize: p.Ba.Size5
                    }, Object(o.d)("Gift to a Viewer", "GiftOptions"))), a.createElement(p.Wa, {
                        margin: {
                            bottom: 1,
                            top: .5
                        }
                    }, a.createElement(p.W, null, Object(o.d)("Help grow the community by gifting a one-month subscription to someone specific.", "GiftOptions"))), a.createElement(p.Wa, {
                        margin: {
                            top: 1
                        }
                    }, a.createElement(p.z, {
                        "data-test-selector": y.SingleGiftButton,
                        disabled: !e.currentUserCanGift,
                        onClick: e.onGiftSelect
                    }, Object(o.d)("Give a Gift Subscription", "GiftOptions"))))), !e.isNonStandardSub && a.createElement(p.Wa, {
                        display: p.X.Flex,
                        margin: {
                            top: 2
                        }
                    }, a.createElement(p.Wa, {
                        flexShrink: 0,
                        margin: {
                            bottom: "auto"
                        }
                    }, a.createElement(p.Pa, {
                        borderRadius: p.x.Medium
                    }, a.createElement(p.S, {
                        alt: Object(o.d)("Give a gift to the community", "GiftOptions"),
                        src: T.a,
                        srcSet: {
                            "1x": T.a,
                            "2x": _.a,
                            "4x": I.a
                        }
                    }))), a.createElement(p.Wa, {
                        margin: {
                            left: .5
                        },
                        padding: {
                            left: 1
                        }
                    }, a.createElement(p.Wa, {
                        margin: {
                            bottom: .5
                        }
                    }, a.createElement(p.Wa, {
                        display: p.X.InlineBlock
                    }, a.createElement(p.W, {
                        bold: !0,
                        fontSize: p.Ba.Size5
                    }, Object(o.d)("Gift to the Community", "GiftOptions"))), " ", a.createElement(p.W, {
                        bold: !0,
                        color: p.O.Link,
                        fontSize: p.Ba.Size5,
                        type: p.Nb.Span
                    }, Object(o.d)("New!", "GiftOptions"))), a.createElement(p.Wa, {
                        margin: {
                            bottom: 1,
                            top: .5
                        }
                    }, a.createElement(p.W, null, Object(o.d)("Give up to 100 gifts to followers and viewers of {channelDisplayName}! Twitch will figure out the lucky recipients.", {
                        channelDisplayName: e.channelDisplayName
                    }, "GiftOptions"))), a.createElement(p.Wa, {
                        margin: {
                            top: 1
                        }
                    }, a.createElement(p.z, {
                        "data-test-selector": y.MysteryGiftButton,
                        disabled: !e.currentUserCanGift,
                        onClick: e.onMysteryGiftSelect
                    }, Object(o.d)("Give Gift Subscriptions", "GiftOptions"))))))
                },
                L = n("Br/p"),
                U = n("8/mp"),
                A = n("D7An"),
                M = n("UUve");

            function H(e, t) {
                return "$" + (parseFloat(t.price.slice(1)) * e).toFixed(2)
            }
            n("4z5c");
            var z = 1,
                V = 100,
                q = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            hasPopupExperiment: "yes" === o.p.experiments.getAssignment(A.b.InstreamCheckout),
                            giftCount: z,
                            inputString: z.toString()
                        }, t.handleChange = function(e) {
                            if ("" !== e.target.value) {
                                var n = parseInt(e.target.value, 10);
                                isNaN(n) || (n < z ? n = z : n > V && (n = V), t.setState({
                                    giftCount: n,
                                    inputString: n.toString()
                                }))
                            } else t.setState({
                                giftCount: 1,
                                inputString: e.target.value
                            })
                        }, t.onCheckoutClick = function() {
                            t.state.hasPopupExperiment && (o.n.set(M.b, t.props.subscriptionProduct.name), o.n.set(M.a, t.state.giftCount)), t.props.handleSubMenuAction({
                                action: O.a.BuyCustomMysteryGift,
                                checkoutButtonTier: t.props.subscriptionProduct.tier,
                                mysteryGiftCount: t.state.giftCount
                            })
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        return a.createElement(p.Wa, {
                            fullWidth: !0
                        }, a.createElement(p.W, {
                            bold: !0,
                            fontSize: p.Ba.Size5
                        }, Object(o.d)("Custom Amount", "CustomMysteryGiftBundle")), a.createElement(p.Wa, {
                            display: p.X.Flex,
                            justifyContent: p.Va.Between,
                            margin: {
                                top: 1
                            }
                        }, a.createElement(p.Wa, {
                            alignItems: p.f.Center,
                            display: p.X.Flex,
                            margin: {
                                right: .5
                            }
                        }, a.createElement(p.Wa, {
                            margin: {
                                right: 1
                            }
                        }, a.createElement(p.Qa, {
                            max: this.props.limit || V,
                            min: z,
                            onChange: this.handleChange,
                            type: p.Sa.Number,
                            value: this.state.inputString
                        })), a.createElement(p.W, {
                            className: "custom-community-gift-bundle__max-text"
                        }, Object(o.d)("(Max {limit, number})", {
                            limit: this.props.limit || V
                        }, "CustomMysteryGiftBundle"))), a.createElement(p.Wa, {
                            className: "custom-community-gift-bundle__purchase-button"
                        }, a.createElement(p.z, {
                            fullWidth: !0,
                            linkTo: this.state.hasPopupExperiment ? void 0 : this.props.subscriptionProduct.url + "?gift_count=" + this.state.giftCount,
                            onClick: this.onCheckoutClick,
                            purchase: H(this.state.giftCount, this.props.subscriptionProduct),
                            targetBlank: !0
                        }, Object(o.d)("{mysteryGiftCount, plural, one {Give {mysteryGiftCount} Gift} other {Give {mysteryGiftCount} Gifts}}", {
                            mysteryGiftCount: this.state.giftCount
                        }, "CustomMysteryGiftBundle")))))
                    }, t
                }(a.Component),
                X = n("EEuB"),
                $ = n.n(X),
                Q = n("/iCH"),
                K = n.n(Q),
                J = n("/Zlu"),
                Y = n.n(J),
                Z = n("wK7Q"),
                ee = n.n(Z),
                te = n("+naV"),
                ne = n.n(te),
                ie = n("TybJ"),
                re = n.n(ie),
                ae = n("rhZM"),
                se = n.n(ae),
                oe = n("D+xR"),
                ce = n.n(oe),
                ue = n("CCnc"),
                le = n.n(ue),
                de = n("u3Ph"),
                pe = n.n(de),
                me = n("GJys"),
                fe = n.n(me),
                be = n("SPHB"),
                ge = n.n(be),
                he = n("OdUb"),
                ve = n.n(he),
                Se = n("nhit"),
                ke = n.n(Se),
                ye = n("R9CH"),
                Oe = n.n(ye),
                Pe = n("2xp8"),
                Ee = n.n(Pe),
                Ne = n("kHse"),
                Ce = n.n(Ne),
                Te = n("wM1o"),
                xe = n.n(Te);
            var _e, De = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.handleClick = function() {
                            t.props.hasPopupExperiment && (o.n.set(M.b, t.props.subscriptionProduct.name), o.n.set(M.a, String(t.props.mysteryGiftCount))), t.props.handleSubMenuAction({
                                action: O.a.BuyMysteryGift,
                                checkoutButtonTier: t.props.subscriptionProduct.tier,
                                mysteryGiftCount: t.props.mysteryGiftCount
                            })
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        var e = function(e) {
                            return e >= 100 ? {
                                "1x": se.a,
                                "2x": ce.a,
                                "4x": le.a
                            } : e >= 50 ? {
                                "1x": Ee.a,
                                "2x": Ce.a,
                                "4x": xe.a
                            } : e >= 20 ? {
                                "1x": pe.a,
                                "2x": fe.a,
                                "4x": ge.a
                            } : e >= 10 ? {
                                "1x": ee.a,
                                "2x": ne.a,
                                "4x": re.a
                            } : e >= 5 ? {
                                "1x": ve.a,
                                "2x": ke.a,
                                "4x": Oe.a
                            } : e >= 1 ? {
                                "1x": $.a,
                                "2x": K.a,
                                "4x": Y.a
                            } : {
                                "1x": "",
                                "2x": "",
                                "4x": ""
                            }
                        }(this.props.mysteryGiftCount);
                        return a.createElement(p.Wa, {
                            margin: {
                                bottom: 2
                            }
                        }, a.createElement(p.Pa, {
                            borderRadius: p.x.Medium
                        }, a.createElement(p.S, {
                            alt: Object(o.d)("{mysteryGiftCount, plural, one {Give {mysteryGiftCount} gift randomly.} other {Give {mysteryGiftCount} gifts randomly.}}", {
                                mysteryGiftCount: this.props.mysteryGiftCount
                            }, "MysteryGiftBundle"),
                            src: e["1x"],
                            srcSet: e
                        })), a.createElement(p.Wa, {
                            display: p.X.Flex,
                            margin: {
                                top: .5
                            }
                        }, a.createElement(p.z, {
                            fullWidth: !0,
                            onClick: this.handleClick,
                            linkTo: this.props.hasPopupExperiment ? void 0 : this.props.subscriptionProduct.url + "?gift_count=" + this.props.mysteryGiftCount,
                            purchase: H(this.props.mysteryGiftCount, this.props.subscriptionProduct),
                            targetBlank: !0
                        }, Object(o.d)("{mysteryGiftCount, plural, one {Give {mysteryGiftCount} Gift} other {Give {mysteryGiftCount} Gifts}}", {
                            mysteryGiftCount: this.props.mysteryGiftCount
                        }, "MysteryGiftBundle"))))
                    }, t
                }(a.Component),
                Ie = n("FLOH"),
                Ge = n("dBR3"),
                Fe = (n("uOOi"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            activeProduct: t.props.subscriptionProducts[0],
                            hasPopupExperiment: "yes" === o.p.experiments.getAssignment(A.b.InstreamCheckout)
                        }, t.setActiveTab = function(e) {
                            t.setState({
                                activeProduct: e
                            })
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        var e = this;
                        return a.createElement(p.Wa, {
                            className: "community-gift-bundle-selection"
                        }, a.createElement(p.Wa, {
                            alignItems: p.f.Center,
                            display: p.X.Flex,
                            padding: {
                                top: 2,
                                x: 2
                            }
                        }, a.createElement(p.Wa, {
                            flexGrow: 1,
                            margin: {
                                bottom: 1
                            }
                        }, a.createElement(p.W, {
                            bold: !0,
                            type: p.Nb.H4
                        }, Object(o.d)("Gift to the Community", "MysteryGiftBundleSelection"))), a.createElement(p.z, {
                            "data-a-target": "subscribe-back-button",
                            icon: p.ob.AngleLeft,
                            onClick: this.props.onBack,
                            type: p.F.Text
                        }, a.createElement(p.Wa, {
                            alignItems: p.f.Center,
                            display: p.X.InlineFlex
                        }, a.createElement(p.W, null, Object(o.d)("Back", "MysteryGiftBundleSelection"))))), a.createElement(Ge.a, {
                            onTierSelect: this.setActiveTab,
                            subscriptionProducts: this.props.subscriptionProducts
                        }, a.createElement(p.Oa, {
                            className: "community-gift-bundle-selection__view",
                            overflow: p.Za.Hidden,
                            position: p.eb.Relative
                        }, a.createElement(U.b, null, a.createElement(p.Wa, {
                            padding: {
                                bottom: 2,
                                x: 2
                            }
                        }, a.createElement(p.Wa, {
                            padding: {
                                top: 1
                            }
                        }, a.createElement(Ie.a, {
                            selectedSubProduct: this.state.activeProduct,
                            allSubProducts: this.props.subscriptionProducts
                        })), a.createElement(p.Wa, {
                            display: p.X.Flex,
                            flexWrap: p.Aa.Wrap,
                            justifyContent: p.Va.Between,
                            padding: {
                                top: 2
                            }
                        }, this.props.mysteryGiftBundles.map(function(t) {
                            return a.createElement(De, {
                                key: "MysteryGiftBundle" + t,
                                mysteryGiftCount: t,
                                subscriptionProduct: e.state.activeProduct,
                                handleSubMenuAction: e.props.handleSubMenuAction,
                                hasPopupExperiment: e.state.hasPopupExperiment
                            })
                        }), a.createElement(q, {
                            limit: this.props.customMysteryGiftBundleLimit,
                            subscriptionProduct: this.state.activeProduct,
                            handleSubMenuAction: this.props.handleSubMenuAction
                        })))))))
                    }, t
                }(a.Component)),
                we = n("3Bft"),
                Re = n("L+W6"),
                We = n("a5fV"),
                je = n("AXRb"),
                Be = function(e) {
                    var t = null,
                        n = null,
                        i = null,
                        r = e.subscriptionProducts[0].price;
                    if (e.subscriptionProducts[0].priceInfo) {
                        var s = e.subscriptionProducts[0].priceInfo;
                        r = Object(We.a)(Object(We.b)(s.total, s.exponent), s.currency)
                    }
                    if (Object(g.g)(e.subscriptionProducts) && (r = Object(g.c)(e.subscriptionProducts[0])), e.channelLogin && (e.inPrimeRegion || e.userHasPrime)) {
                        var c = e.userHasPrime ? Object(o.d)("Use your free channel subscription to directly support your favorite streamer. {upsellTextLink}", {
                            upsellTextLink: a.createElement("a", {
                                href: "https://help.twitch.tv/customer/en/portal/articles/2572060-twitch-prime-guide",
                                target: "_blank"
                            }, Object(o.d)("Learn more about your free sub", "NonSubbedTopPage"))
                        }, "NonSubbedTopPage") : Object(o.d)("Get monthly games and in-game loot, a monthly Twitch channel subscription, and loads more with Twitch Prime.", "NonSubbedTopPage");
                        i = a.createElement(p.Wa, {
                            margin: {
                                bottom: 2
                            }
                        }, a.createElement(p.Wa, {
                            margin: {
                                bottom: 1
                            }
                        }, a.createElement(p.W, {
                            type: p.Nb.H4,
                            bold: !0
                        }, Object(o.d)("Free Channel Sub with Twitch Prime", "NonSubbedTopPage"))), a.createElement(p.Wa, null, a.createElement(p.Wa, {
                            margin: {
                                bottom: 1
                            },
                            "data-test-selector": "prime-sub-upsell"
                        }, a.createElement(p.W, null, c)), a.createElement(je.a, {
                            "data-a-target": "subscribe-with-prime-button",
                            handleSubMenuAction: e.handleSubMenuAction,
                            channelLogin: e.channelLogin
                        })))
                    }
                    if (!e.isNonStandardSub) {
                        var u = Object(o.d)("More Paid Subscription Options", "NonSubbedTopPage");
                        t = a.createElement(p.Wa, {
                            margin: {
                                right: 1
                            },
                            display: p.X.Inline
                        }, a.createElement(p.z, {
                            ariaLabel: u,
                            onClick: e.showSubOptions,
                            type: p.F.Hollow,
                            "data-test-selector": "subscribe-button__more-sub-options-button",
                            "data-a-target": "see-more-sub-options-button"
                        }, u));
                        var l = Object(o.d)("Gift a Subscription", "NonSubbedTopPage");
                        n = a.createElement(p.Wa, {
                            display: p.X.Inline
                        }, a.createElement(p.z, {
                            ariaLabel: l,
                            onClick: e.showGiftOptions,
                            type: p.F.Hollow,
                            "data-test-selector": "subscribe-button__gift"
                        }, l))
                    }
                    var d = e.subscriptionProducts[0],
                        m = (d.interval && d.interval.unit) === we.a.OneTime;
                    return a.createElement(p.Wa, {
                        padding: 2
                    }, i, a.createElement(p.Wa, null, a.createElement(p.W, {
                        type: p.Nb.H4,
                        bold: !0
                    }, Object(o.d)("Paid Subscription", "NonSubbedTopPage")), a.createElement(Re.a, {
                        subscriptionProduct: e.subscriptionProducts[0],
                        isOneTime: m
                    }), a.createElement(p.Wa, {
                        display: p.X.Flex
                    }, a.createElement(p.Wa, {
                        margin: {
                            right: 1,
                            top: 1
                        }
                    }, a.createElement(b.a, {
                        isSubbedToTier: !1,
                        tierPrice: r,
                        "data-a-target": "tier1-subscribe-button",
                        handleSubAction: e.handleTopPageSubButtonClick,
                        productName: e.subscriptionProducts[0].name,
                        url: e.subscriptionProducts[0].url
                    })))), a.createElement(p.Wa, {
                        margin: {
                            right: 1,
                            top: 2
                        }
                    }, t, n))
                },
                Le = n("DqL7"),
                Ue = function(e) {
                    return a.createElement(p.Wa, {
                        padding: 2
                    }, a.createElement(p.Wa, null, a.createElement(p.Wa, {
                        display: p.X.Flex,
                        justifyContent: p.Va.Between,
                        alignItems: p.f.Center,
                        fullWidth: !0
                    }, a.createElement(p.W, {
                        type: p.Nb.H4,
                        bold: !0
                    }, e.header), a.createElement(p.z, {
                        type: p.F.Text,
                        "data-a-target": "subscribe-back-button",
                        "data-test-selector": "subscribe-button__back-button",
                        icon: p.ob.AngleLeft,
                        onClick: e.onBack
                    }, a.createElement(p.Wa, {
                        alignItems: p.f.Center,
                        display: p.X.InlineFlex
                    }, a.createElement(p.W, null, Object(o.d)("Back", "PaidSubOptions"))))), a.createElement(Le.a, {
                        canPrimeSubscribe: !1,
                        channelDisplayName: e.channelDisplayName,
                        giftRecipient: e.giftRecipient,
                        handleSubMenuAction: e.handleSubMenuAction,
                        isGift: e.isGift,
                        isSubscribed: e.isSubscribed,
                        onGiftSelect: e.onGiftSelect,
                        subbedTier: e.subbedTier,
                        subscriptionProducts: e.subscriptionProducts,
                        userHasPrime: !1
                    })))
                },
                Ae = n("HGFl"),
                Me = n("0WFu"),
                He = function(e) {
                    var t = Object(Me.a)(e.subbedTier);
                    return a.createElement(p.Wa, {
                        display: p.X.Flex
                    }, a.createElement(p.Wa, {
                        flexShrink: 0,
                        margin: {
                            y: "auto"
                        }
                    }, a.createElement(p.q, {
                        alt: Object(o.d)("Channel Profile Image", "CurrentSubscriptionChannelInfo"),
                        size: 40,
                        src: e.channelProfileImageURL
                    })), a.createElement(p.Wa, {
                        margin: {
                            x: 1
                        }
                    }, a.createElement(p.W, {
                        bold: !0,
                        "data-test-selector": _e.ChannelDisplayName,
                        fontSize: p.Ba.Size5
                    }, e.channelDisplayName, !e.isPrimeSubscription && t && Object(o.d)(" - Tier {subscriptionTier}", {
                        subscriptionTier: t
                    }, "CurrentSubscriptionChannelInfo")), a.createElement(p.W, {
                        "data-test-selector": _e.SubscriptionName
                    }, e.subProduct.displayName)))
                },
                ze = function(e) {
                    var t = "";
                    return t = e.isPrimeSubscription ? Object(o.d)("Your Prime Subscription", "CurrentSubscriptionHeader") : e.isGift ? Object(o.d)("Your Gift Subscription", "CurrentSubscriptionHeader") : Object(o.d)("Your Subscription", "CurrentSubscriptionHeader"), a.createElement(p.Wa, {
                        className: "current-subscription__heading-" + (e.isPrimeSubscription ? "prime" : "tier"),
                        display: p.X.Flex,
                        margin: {
                            bottom: 1
                        },
                        padding: {
                            bottom: .5
                        }
                    }, a.createElement(p.nb, {
                        asset: e.isPrimeSubscription ? p.ob.Crown : p.ob.Star,
                        height: 25
                    }), a.createElement(p.Oa, {
                        margin: {
                            left: .5
                        }
                    }, a.createElement(p.W, {
                        bold: !0,
                        "data-test-selector": _e.Header,
                        type: p.Nb.H4
                    }, t)))
                },
                Ve = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onContinueSub = function() {
                            var e = Object(g.b)(t.props.subProducts) || t.props.subProduct;
                            o.n.set(M.b, e.name), t.props.handleSubMenuAction({
                                action: O.a.BuyGiftToPaidUpgrade,
                                checkoutButtonTier: e.tier
                            })
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        var e = this.props,
                            t = Object(g.b)(e.subProducts),
                            n = Object(Me.a)(e.subbedTier);
                        return a.createElement(p.xb, {
                            borderTop: !0,
                            padding: 2,
                            className: "current-subscription"
                        }, a.createElement(ze, {
                            isGift: !0
                        }), a.createElement(He, {
                            channelDisplayName: e.channelDisplayName,
                            channelProfileImageURL: e.channelProfileImageURL,
                            subbedTier: e.subbedTier,
                            subProduct: e.subProduct
                        }), a.createElement(p.Wa, {
                            display: p.X.Flex,
                            margin: {
                                top: .5
                            }
                        }, a.createElement(p.W, {
                            "data-test-selector": _e.GiftMessage,
                            type: p.Nb.Span
                        }, e.giftSender ? Object(o.d)("Gift from <x:strong>{giftSender}</x:strong>", {
                            giftSender: e.giftSender,
                            "x:strong": function(e) {
                                return a.createElement(p.W, {
                                    bold: !0,
                                    key: "CurrentPaidSubscriptionGiftSender",
                                    type: p.Nb.Span
                                }, e)
                            }
                        }, "CurrentGiftSubscription") : Object(o.d)("Gift Subscription", "CurrentGiftSubscription"), e.subEndDate && a.createElement(a.Fragment, null, " - ", Object(o.d)("Benefits expire on {subEndDate}", {
                            subEndDate: Object(o.c)(Object(Ae.c)(e.subEndDate.toString()), {
                                day: "numeric",
                                month: "long"
                            })
                        }, "CurrentGiftSubscription")))), e.giftPaidUpgrade ? e.subEndDate && a.createElement(p.Wa, {
                            display: p.X.Flex,
                            margin: {
                                top: .5
                            }
                        }, a.createElement(p.W, {
                            bold: !0,
                            className: "current-subscription__gift-message",
                            "data-test-selector": _e.GiftUpgradeMessage
                        }, Object(o.d)("Your new Tier {subbedTier} Paid Subscription will begin on {subEndDate}", {
                            subbedTier: Object(Me.a)(e.giftPaidUpgrade.tier) || "",
                            subEndDate: Object(o.c)(Object(Ae.c)(e.subEndDate.toString()), {
                                month: "long",
                                day: "numeric"
                            })
                        }, "CurrentSubscription"))) : a.createElement(p.Wa, {
                            margin: {
                                top: 1
                            },
                            padding: {
                                y: .5
                            }
                        }, a.createElement(p.Wa, {
                            display: p.X.InlineBlock,
                            margin: {
                                right: 1
                            },
                            padding: {
                                right: .5
                            }
                        }, a.createElement(p.z, {
                            "data-test-selector": _e.GiftPaidUpgradeButton,
                            icon: p.ob.Star,
                            onClick: this.onContinueSub,
                            purchase: t ? Object(g.a)(t) : e.subProduct.price
                        }, Object(o.d)("Continue Sub", "CurrentGiftSubscription"))), t && a.createElement(p.Wa, {
                            display: p.X.InlineBlock,
                            verticalAlign: p.Xb.Middle
                        }, a.createElement(Re.a, {
                            isPaidUpgrade: !0,
                            subscriptionProduct: t
                        }))), a.createElement(p.Wa, {
                            margin: {
                                top: 1
                            }
                        }, !e.giftPaidUpgrade && a.createElement(p.Wa, {
                            display: p.X.Inline,
                            margin: {
                                right: 1
                            }
                        }, a.createElement(p.z, {
                            "data-a-target": "upgrade-tier-button",
                            "data-test-selector": _e.UpgradeCurrentTierButton,
                            onClick: e.onUpgradeTier,
                            type: p.F.Hollow
                        }, 3 === n ? Object(o.d)("Change Your Tier", "CurrentGiftSubscription") : Object(o.d)("Upgrade Your Tier", "CurrentGiftSubscription"))), a.createElement(p.z, {
                            "data-a-target": "gift-subscription-button",
                            "data-test-selector": _e.GiftSubscriptionButton,
                            onClick: e.onGiftOptionsSelect,
                            type: p.F.Hollow
                        }, Object(o.d)("Gift a Subscription", "CurrentGiftSubscription"))))
                    }, t
                }(a.Component),
                qe = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onUpgradeSub = function() {
                            var e = t.props.upgradeSubProduct;
                            o.n.set(M.b, e.name), t.props.handleSubMenuAction({
                                action: O.a.BuyPaidUpgrade,
                                checkoutButtonTier: e.tier
                            })
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        var e = this.props,
                            t = Object(Me.a)(e.subbedTier);
                        return a.createElement(p.xb, {
                            borderTop: !0,
                            padding: 2,
                            className: "current-subscription"
                        }, a.createElement(ze, null), a.createElement(He, {
                            channelDisplayName: e.channelDisplayName,
                            channelProfileImageURL: e.channelProfileImageURL,
                            subbedTier: e.subbedTier,
                            subProduct: e.subProduct
                        }), t && a.createElement(a.Fragment, null, e.upgradeSubProduct && a.createElement(p.Wa, {
                            margin: {
                                top: 1
                            },
                            padding: {
                                top: .5
                            }
                        }, a.createElement(p.z, {
                            "data-a-target": "upgrade-tier-button",
                            "data-test-selector": _e.UpgradeCurrentTierButton,
                            icon: p.ob.Star,
                            onClick: this.onUpgradeSub,
                            purchase: e.upgradeSubProduct.price
                        }, Object(o.d)("Upgrade Sub", "CurrentPaidSubscription"))), a.createElement(p.Wa, {
                            margin: {
                                top: 1
                            },
                            padding: {
                                top: .5
                            }
                        }, a.createElement(p.Wa, {
                            display: p.X.Inline,
                            margin: {
                                right: 1
                            }
                        }, a.createElement(p.z, {
                            "data-a-target": "upgrade-tier-button",
                            "data-test-selector": _e.UpgradeOtherTierButton,
                            onClick: e.onUpgradeTier,
                            type: p.F.Hollow
                        }, Object(o.d)("More Paid Subscription Options", "CurrentPaidSubscription"))))))
                    }, t
                }(a.Component),
                Xe = function(e) {
                    return a.createElement(p.xb, {
                        borderTop: !0,
                        padding: 2,
                        className: "current-subscription"
                    }, a.createElement(ze, {
                        isPrimeSubscription: !0
                    }), a.createElement(He, {
                        channelDisplayName: e.channelDisplayName,
                        channelProfileImageURL: e.channelProfileImageURL,
                        isPrimeSubscription: !0,
                        subbedTier: e.subbedTier,
                        subProduct: e.subProduct
                    }), e.subEndDate && a.createElement(p.Wa, {
                        display: p.X.Flex,
                        margin: {
                            top: .5
                        }
                    }, a.createElement(p.W, {
                        "data-test-selector": _e.ExpiryMessage,
                        type: p.Nb.Span
                    }, Object(o.d)("Benefits expire on {subEndDate}", {
                        subEndDate: Object(o.c)(Object(Ae.c)(e.subEndDate.toString()), {
                            day: "numeric",
                            month: "long"
                        })
                    }, "CurrentPrimeSubscription"))), a.createElement(p.Wa, {
                        margin: {
                            top: 1
                        }
                    }, a.createElement(je.a, {
                        channelLogin: e.channelLogin,
                        handleSubMenuAction: e.handleSubMenuAction
                    })), a.createElement(p.Wa, {
                        margin: {
                            top: 1
                        },
                        padding: {
                            top: .5
                        }
                    }, a.createElement(p.Wa, {
                        display: p.X.Inline,
                        margin: {
                            right: 1
                        }
                    }, a.createElement(p.z, {
                        "data-a-target": "upgrade-tier-button",
                        "data-test-selector": _e.UpgradeCurrentTierButton,
                        onClick: e.onUpgradeTier,
                        type: p.F.Hollow
                    }, Object(o.d)("Upgrade Your Tier", "CurrentPrimeSubscription")))))
                };
            n("psMd");
            ! function(e) {
                e.ChannelDisplayName = "ChannelDisplayName", e.ExpiryMessage = "ExpiryMessage", e.GiftMessage = "GiftMessage", e.GiftPaidUpgradeButton = "GiftPaidUpgradeButton", e.GiftUpgradeMessage = "GiftUpgradeMessage", e.GiftSubscriptionButton = "GiftSubscriptionButton", e.Header = "Header", e.SubscriptionName = "SubscriptionName", e.SubscriptionTier = "SubscriptionTier", e.UpgradeCurrentTierButton = "UpgradeCurrentTierButton", e.UpgradeOtherTierButton = "UpgradeOtherTierButton"
            }(_e || (_e = {}));
            var $e, Qe, Ke = function(e) {
                    return we.b.Prime === e.subbedTier ? a.createElement(Xe, {
                        channelDisplayName: e.channelDisplayName,
                        channelLogin: e.channelLogin,
                        channelProfileImageURL: e.channelProfileImageURL,
                        handleSubMenuAction: e.handleSubMenuAction,
                        onGiftOptionsSelect: e.onGiftOptionsSelect,
                        onUpgradeTier: e.onUpgradeTier,
                        subbedTier: e.subbedTier,
                        subEndDate: e.subEndDate,
                        subProduct: e.subProduct
                    }) : e.isGift ? a.createElement(Ve, {
                        channelDisplayName: e.channelDisplayName,
                        channelProfileImageURL: e.channelProfileImageURL,
                        giftPaidUpgrade: e.giftPaidUpgrade,
                        giftSender: e.giftSender,
                        handleSubMenuAction: e.handleSubMenuAction,
                        onGiftOptionsSelect: e.onGiftOptionsSelect,
                        onUpgradeTier: e.onUpgradeTier,
                        subbedTier: e.subbedTier,
                        subEndDate: e.subEndDate,
                        subProduct: e.subProduct,
                        subProducts: e.subProducts
                    }) : a.createElement(qe, {
                        channelDisplayName: e.channelDisplayName,
                        channelProfileImageURL: e.channelProfileImageURL,
                        handleSubMenuAction: e.handleSubMenuAction,
                        onGiftOptionsSelect: e.onGiftOptionsSelect,
                        onUpgradeTier: e.onUpgradeTier,
                        subbedTier: e.subbedTier,
                        subProduct: e.subProduct,
                        upgradeSubProduct: e.upgradeSubProduct
                    })
                },
                Je = function(e) {
                    var t = e.subbedTier !== we.b.Tier3 ? Object(o.d)("Change Your Subscription", "SubOptions") : Object(o.d)("Your Subscription", "SubOptions");
                    return a.createElement(p.Wa, {
                        padding: 2
                    }, a.createElement(p.Wa, {
                        alignItems: p.f.Center,
                        display: p.X.Flex,
                        margin: {
                            bottom: 1
                        }
                    }, a.createElement(p.Wa, {
                        flexGrow: 1
                    }, a.createElement(p.W, {
                        bold: !0,
                        fontSize: p.Ba.Size4
                    }, t)), a.createElement(p.z, {
                        type: p.F.Text,
                        "data-a-target": "subscribe-back-button",
                        icon: p.ob.AngleLeft,
                        onClick: e.onBack
                    }, a.createElement(p.Wa, {
                        alignItems: p.f.Center,
                        display: p.X.InlineFlex
                    }, a.createElement(p.W, null, Object(o.d)("Back", "SubOptions"))))), a.createElement(Le.a, {
                        authToken: e.authToken,
                        canPrimeSubscribe: !0,
                        channelDisplayName: e.channelDisplayName,
                        handleSubMenuAction: e.handleSubMenuAction,
                        isSubscribed: !0,
                        onGiftSelect: e.onGiftSelect,
                        subbedTier: e.subbedTier,
                        subscriptionProducts: e.subscriptionProducts,
                        subLogin: e.channelLogin,
                        userHasPrime: e.userHasPrime
                    }))
                },
                Ye = n("CDqf");
            n("h0zH");
            ! function(e) {
                e[e.CurrentSubscription = 0] = "CurrentSubscription", e[e.GiftOptions = 1] = "GiftOptions", e[e.GiftSelect = 2] = "GiftSelect", e[e.MysteryGiftSelect = 3] = "MysteryGiftSelect", e[e.SubOptions = 4] = "SubOptions"
            }($e || ($e = {})),
            function(e) {
                e.CurrentSubscription = "CurrentSubscription", e.GiftOptions = "GiftOptions", e.GiftRecipientSearch = "GiftRecipientSearch", e.MysteryGiftBundleSelection = "MysteryGiftBundleSelection", e.SubOptions = "SubOptions"
            }(Qe || (Qe = {}));
            var Ze, et = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            currentPage: $e.CurrentSubscription
                        }, t.showCurrentSubscription = function() {
                            t.setState({
                                currentPage: $e.CurrentSubscription
                            })
                        }, t.showGiftOptions = function() {
                            t.setState({
                                currentPage: $e.GiftOptions
                            })
                        }, t.onGiftSelect = function() {
                            t.setState({
                                currentPage: $e.GiftSelect
                            })
                        }, t.showMysteryGiftBundleSelect = function() {
                            t.setState({
                                currentPage: $e.MysteryGiftSelect
                            })
                        }, t.showSubOptions = function() {
                            t.setState({
                                currentPage: $e.SubOptions
                            })
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        var e = this.props.isGift && !this.props.giftPaidUpgrade && Object(g.f)(this.props.subscriptionProducts);
                        switch (this.state.currentPage) {
                            case $e.CurrentSubscription:
                                return a.createElement(a.Fragment, null, e ? a.createElement(Ye.a, {
                                    alignCTA: "Right",
                                    roundedTop: !0
                                }) : a.createElement(B, {
                                    channelDisplayName: this.props.channelDisplayName,
                                    currentUserCanGift: this.props.currentUserCanGift,
                                    "data-test-selector": Qe.GiftOptions,
                                    isNonStandardSub: this.props.isNonStandardSub,
                                    onGiftSelect: this.onGiftSelect,
                                    onMysteryGiftSelect: this.showMysteryGiftBundleSelect
                                }), a.createElement(Ke, {
                                    channelDisplayName: this.props.channelDisplayName,
                                    channelLogin: this.props.channelLogin,
                                    channelProfileImageURL: this.props.channelProfileImageURL,
                                    "data-test-selector": Qe.CurrentSubscription,
                                    giftPaidUpgrade: this.props.giftPaidUpgrade,
                                    giftSender: this.props.giftSender,
                                    handleSubMenuAction: this.props.handleSubMenuAction,
                                    isGift: this.props.isGift,
                                    onGiftOptionsSelect: this.showGiftOptions,
                                    onUpgradeTier: this.showSubOptions,
                                    subbedTier: this.props.subbedTier,
                                    subEndDate: this.props.subEndDate,
                                    subProduct: this.getCurrentSubProduct(),
                                    subProducts: this.props.subscriptionProducts,
                                    upgradeSubProduct: this.getUpgradeSubProduct()
                                }));
                            case $e.GiftOptions:
                                return a.createElement(B, {
                                    channelDisplayName: this.props.channelDisplayName,
                                    currentUserCanGift: this.props.currentUserCanGift,
                                    "data-test-selector": Qe.GiftOptions,
                                    isNonStandardSub: this.props.isNonStandardSub,
                                    onBack: this.showCurrentSubscription,
                                    onGiftSelect: this.onGiftSelect,
                                    onMysteryGiftSelect: this.showMysteryGiftBundleSelect
                                });
                            case $e.GiftSelect:
                                return a.createElement(L.GiftRecipientSearch, {
                                    "data-test-selector": Qe.GiftRecipientSearch,
                                    handleSubMenuAction: this.props.handleSubMenuAction,
                                    isEsportChannel: this.props.isEsportChannel,
                                    key: "gift-recipient-search-page",
                                    onBack: e ? this.showGiftOptions : this.showCurrentSubscription,
                                    subscriptionProducts: this.props.subscriptionProducts
                                });
                            case $e.MysteryGiftSelect:
                                return a.createElement(Fe, {
                                    customMysteryGiftBundleLimit: 100,
                                    "data-test-selector": Qe.MysteryGiftBundleSelection,
                                    mysteryGiftBundles: [1, 5, 10, 20, 50, 100],
                                    onBack: e ? this.showGiftOptions : this.showCurrentSubscription,
                                    subscriptionProducts: this.props.subscriptionProducts,
                                    handleSubMenuAction: this.props.handleSubMenuAction
                                });
                            case $e.SubOptions:
                                return a.createElement(Je, {
                                    authToken: this.props.authToken,
                                    channelDisplayName: this.props.channelDisplayName,
                                    channelLogin: this.props.channelLogin,
                                    "data-test-selector": Qe.SubOptions,
                                    handleSubMenuAction: this.props.handleSubMenuAction,
                                    isSubscribed: !0,
                                    onBack: this.showCurrentSubscription,
                                    onGiftSelect: this.props.onGiftSelect,
                                    subbedTier: this.props.subbedTier,
                                    subscriptionProducts: this.props.subscriptionProducts,
                                    userHasPrime: this.props.userHasPrime
                                });
                            default:
                                return null
                        }
                    }, t.prototype.getCurrentSubProduct = function() {
                        switch (this.props.subbedTier) {
                            case we.b.Tier1:
                                return this.props.subscriptionProducts[0];
                            case we.b.Tier2:
                                return this.props.subscriptionProducts[1];
                            case we.b.Tier3:
                                return this.props.subscriptionProducts[2];
                            default:
                                return this.props.subscriptionProducts[0]
                        }
                    }, t.prototype.getUpgradeSubProduct = function() {
                        switch (this.props.subbedTier) {
                            case we.b.Tier1:
                                return this.props.subscriptionProducts[1];
                            case we.b.Tier2:
                                return this.props.subscriptionProducts[2];
                            case we.b.Tier3:
                            default:
                                return null
                        }
                    }, t
                }(a.Component),
                tt = (n("77JB"), n("wEyv"));
            n.d(t, "TestSelectors", function() {
                    return Ze
                }), n.d(t, "SubscribeBalloonComponent", function() {
                    return nt
                }), n.d(t, "SubscribeBalloon", function() {
                    return it
                }),
                function(e) {
                    e.CampaignsSubscribeBalloon = "CampaignsSubscribeBalloon", e.GiftOptions = "GiftOptions", e.GiftRecipientSearch = "GiftRecipientSearch", e.MysteryGiftBundleSelection = "MysteryGiftBundleSelection", e.NonSubbedTopPage = "NonSubbedTopPage", e.PaidSubOptions = "PaidSubOptions", e.SubbedTopPage = "SubbedTopPage"
                }(Ze || (Ze = {}));
            var nt = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            currentPage: t.props.isEsportChannel ? S.Esports : S.Top,
                            previousPage: null
                        }, t.getLoadingContent = function() {
                            return o.k.debug("NOT rendering sub balloon; sub data not yet ready", {
                                state: t.state
                            }), a.createElement(p.Wa, {
                                alignItems: p.f.Center,
                                className: "channel-header__subscription-modal",
                                display: p.X.Flex,
                                justifyContent: p.Va.Center
                            }, a.createElement(p.Ya, {
                                fillContent: !0
                            }))
                        }, t.getErrorContent = function() {
                            return o.k.debug("NOT rendering sub balloon; error occurred", {
                                state: t.state
                            }), a.createElement(p.Wa, {
                                alignItems: p.f.Center,
                                className: "channel-header__subscription-modal",
                                display: p.X.Flex,
                                padding: {
                                    left: 4,
                                    right: 2,
                                    y: 2
                                }
                            }, a.createElement(c.a, {
                                message: Object(o.d)("Something has gone wrong. Please try again later.", "SubscribeBalloon")
                            }))
                        }, t.showTop = function() {
                            t.setState(function(e) {
                                return {
                                    currentPage: S.Top,
                                    previousPage: e.currentPage
                                }
                            })
                        }, t.showSubOptions = function() {
                            t.props.handleSubMenuAction({
                                action: O.a.ClickMoreSubOptions,
                                modalLevel: "second_page"
                            }), t.setState(function(e) {
                                return {
                                    currentPage: S.SubOptions,
                                    previousPage: e.currentPage
                                }
                            })
                        }, t.showGiftOptions = function() {
                            t.props.handleSubMenuAction({
                                action: O.a.ClickGiftSubOptions,
                                modalLevel: "second_page"
                            }), t.setState(function(e) {
                                return {
                                    currentPage: S.GiftOptions,
                                    previousPage: e.currentPage
                                }
                            })
                        }, t.showRecipientSelect = function() {
                            t.setState(function(e) {
                                return {
                                    currentPage: S.RecipientSelect,
                                    previousPage: e.currentPage
                                }
                            })
                        }, t.showMysteryGiftBundleSelect = function() {
                            t.setState(function(e) {
                                return {
                                    currentPage: S.MysteryGiftSelect,
                                    previousPage: e.currentPage
                                }
                            })
                        }, t.showEsports = function() {
                            t.setState(function(e) {
                                return {
                                    currentPage: S.Esports,
                                    previousPage: e.currentPage
                                }
                            })
                        }, t.goToPreviousPage = function() {
                            t.props.handleSubMenuAction({
                                action: O.a.ClickBack,
                                modalLevel: t.state.currentPage === S.SubOptions || t.state.currentPage === S.GiftOptions ? "top_page" : "second_page"
                            }), t.state.currentPage !== S.GiftOptions && t.state.currentPage !== S.SubOptions ? t.state.currentPage !== S.RecipientSelect && t.state.currentPage !== S.MysteryGiftSelect || t.showGiftOptions() : t.showTop()
                        }, t.onGiftSelect = function() {
                            if (!t.props.data.user || !t.props.data.user.subscriptionProducts) return null;
                            t.props.handleSubMenuAction({
                                action: O.a.GiftASub,
                                checkoutButtonTier: t.props.data.user.subscriptionProducts[0].price
                            }), t.showRecipientSelect()
                        }, t.canSendGift = function() {
                            return !!(t.props.data && t.props.data.user && t.props.data.user.self) && t.props.data.user.self.canGiftInChannel
                        }, t.handleTopPageSubButtonClick = function() {
                            if (!t.props.data.user || !t.props.data.user.subscriptionProducts) return null;
                            t.props.handleSubMenuAction({
                                action: O.a.ClickCheckout,
                                checkoutButtonTier: t.props.data.user.subscriptionProducts[0].price
                            })
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive()
                    }, t.prototype.componentWillReceiveProps = function(e) {
                        e.channelLogin !== this.props.channelLogin && this.setState({
                            currentPage: this.props.isEsportChannel ? S.Esports : S.Top,
                            previousPage: null
                        })
                    }, t.prototype.render = function() {
                        if (this.props.data.loading) return this.getLoadingContent();
                        if (this.props.data.error) return this.getErrorContent();
                        if (!this.props.data.user || !this.props.data.user.subscriptionProducts) return o.k.debug("NOT rendering sub balloon; sub data not yet ready", {
                            state: this.state
                        }), null;
                        o.k.debug("rendering sub balloon", {
                            state: this.state
                        });
                        var e = this.props.data.user,
                            t = e.self,
                            n = e.subscriptionProducts,
                            i = !(!this.props.data.currentUser || !this.props.data.currentUser.hasPrime);
                        switch (this.state.currentPage) {
                            case S.Top:
                                var r = !!t && !!t.subscriptionBenefit && t.subscriptionBenefit.gift;
                                return this.props.isSubscribed ? t && t.subscriptionBenefit && a.createElement(et, {
                                    authToken: this.props.authToken,
                                    channelDisplayName: e.displayName,
                                    channelLogin: this.props.channelLogin,
                                    channelProfileImageURL: e.profileImageURL,
                                    currentUserCanGift: this.canSendGift(),
                                    "data-test-selector": Ze.SubbedTopPage,
                                    giftPaidUpgrade: t.subscriptionBenefit.paidUpgrade,
                                    giftSender: r && r.isGift ? r.gifter && r.gifter.displayName : null,
                                    handleSubMenuAction: this.props.handleSubMenuAction,
                                    isEsportChannel: this.props.isEsportChannel,
                                    isGift: !(!r || !r.isGift) && r.isGift,
                                    isNonStandardSub: this.props.isNonStandardSub,
                                    onGiftSelect: this.onGiftSelect,
                                    showGiftOptions: this.showGiftOptions,
                                    showSubOptions: this.showSubOptions,
                                    subbedTier: this.props.subbedTier,
                                    subscriptionProducts: n,
                                    subEndDate: t.subscriptionBenefit.endsAt,
                                    userHasPrime: i
                                }) : a.createElement(Be, {
                                    authToken: this.props.authToken,
                                    canPrimeSubscribe: !!t && t.canPrimeSubscribe,
                                    channelLogin: this.props.channelLogin,
                                    "data-test-selector": Ze.NonSubbedTopPage,
                                    handleSubMenuAction: this.props.handleSubMenuAction,
                                    handleTopPageSubButtonClick: this.handleTopPageSubButtonClick,
                                    inPrimeRegion: this.props.inPrimeRegion,
                                    isNonStandardSub: this.props.isNonStandardSub,
                                    showGiftOptions: this.showGiftOptions,
                                    showSubOptions: this.showSubOptions,
                                    subscriptionProducts: n,
                                    userHasPrime: i
                                });
                            case S.SubOptions:
                                return a.createElement(Ue, {
                                    channelDisplayName: e.displayName,
                                    channelLogin: this.props.channelLogin,
                                    "data-test-selector": Ze.PaidSubOptions,
                                    handleSubMenuAction: this.props.handleSubMenuAction,
                                    header: Object(o.d)("All Paid Subscriptions", "SubscribeBalloon"),
                                    isSubscribed: this.props.isSubscribed,
                                    onBack: this.goToPreviousPage,
                                    subscriptionProducts: n
                                });
                            case S.GiftOptions:
                                return a.createElement(B, {
                                    channelDisplayName: e.displayName,
                                    currentUserCanGift: this.canSendGift(),
                                    "data-test-selector": Ze.GiftOptions,
                                    isNonStandardSub: this.props.isNonStandardSub,
                                    onBack: this.goToPreviousPage,
                                    onGiftSelect: this.onGiftSelect,
                                    onMysteryGiftSelect: this.showMysteryGiftBundleSelect
                                });
                            case S.RecipientSelect:
                                return a.createElement(L.GiftRecipientSearch, {
                                    "data-test-selector": Ze.GiftRecipientSearch,
                                    onBack: this.state.previousPage === S.Esports ? this.showEsports : this.goToPreviousPage,
                                    subscriptionProducts: n,
                                    handleSubMenuAction: this.props.handleSubMenuAction,
                                    isEsportChannel: this.props.isEsportChannel
                                });
                            case S.MysteryGiftSelect:
                                return a.createElement(Fe, {
                                    customMysteryGiftBundleLimit: 100,
                                    "data-test-selector": Ze.MysteryGiftBundleSelection,
                                    mysteryGiftBundles: [1, 5, 10, 20, 50, 100],
                                    onBack: this.goToPreviousPage,
                                    subscriptionProducts: n,
                                    handleSubMenuAction: this.props.handleSubMenuAction
                                });
                            case S.Esports:
                                return a.createElement(E, {
                                    channelLogin: this.props.channelLogin,
                                    currentPage: this.state.currentPage,
                                    "data-test-selector": Ze.CampaignsSubscribeBalloon,
                                    handleSubMenuAction: this.props.handleSubMenuAction,
                                    handleTopPageSubButtonClick: this.handleTopPageSubButtonClick,
                                    isSubscribed: this.props.isSubscribed,
                                    showRecipientSelect: this.showRecipientSelect,
                                    showTop: this.showTop,
                                    subscriptionProducts: n,
                                    userHasPrime: i
                                });
                            default:
                                return null
                        }
                    }, t
                }(a.Component),
                it = Object(s.compose)(Object(u.a)(tt, {
                    options: function(e) {
                        return {
                            fetchPolicy: "network-only",
                            variables: {
                                login: e.channelLogin,
                                productId: e.productId
                            }
                        }
                    },
                    skip: function(e) {
                        return !e.channelLogin
                    }
                }), Object(N.b)("SubscribeBalloon"))(nt)
        },
        fIIl: function(e, t, n) {
            e.exports = n.p + "assets/specific-viewer-4x-537ef89077ec8795ab65.png"
        },
        gQ2q: function(e, t, n) {},
        h0zH: function(e, t, n) {},
        iuxt: function(e, t, n) {},
        j3KY: function(e, t, n) {
            "use strict";
            n.d(t, "c", function() {
                return i
            }), n.d(t, "a", function() {
                return r
            }), n.d(t, "d", function() {
                return a
            }), n.d(t, "b", function() {
                return s
            }), n.d(t, "e", function() {
                return c
            });
            var i = "sm_tw_tup_ntp_t_all",
                r = "sm_tw_thp_blue_t_all",
                a = "sm_w_tup_ntp_t_c",
                s = "sm_om_tpltp",
                o = n("/7QA").k.withCategory("PrimeUtilsLogger");

            function c(e, t) {
                return function(e, t, n) {
                    var i = "";
                    try {
                        i = btoa(n)
                    } catch (e) {
                        o.error(e, "Could not decode location pathname substring for redirect")
                    }
                    return i ? e + "?ref_=" + t + "&redirectRoute=" + i : e + "?ref_=" + t
                }("https://twitch.amazon.com/prime/country", e, t)
            }
        },
        k91D: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "GiftSubscribeButton_Gift_Eligibility"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "recipientLogin"
                            }
                        },
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "String"
                            }
                        }
                    }, {
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "subProductId"
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
                                        value: "recipientLogin"
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
                                                value: "canGift"
                                            },
                                            arguments: [{
                                                kind: "Argument",
                                                name: {
                                                    kind: "Name",
                                                    value: "product"
                                                },
                                                value: {
                                                    kind: "Variable",
                                                    name: {
                                                        kind: "Name",
                                                        value: "subProductId"
                                                    }
                                                }
                                            }],
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
                body: "query GiftSubscribeButton_Gift_Eligibility($recipientLogin: String $subProductId: String!) {\nuser(login: $recipientLogin) {\nid\nself {\ncanGift(product: $subProductId)\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        kHse: function(e, t, n) {
            e.exports = n.p + "assets/50-gifts-2x-4c629fbf9d2661bca097.png"
        },
        kduP: function(e, t, n) {
            "use strict";

            function i(e) {
                return "/directory/game/" + encodeURIComponent(e)
            }

            function r(e) {
                return "/communities/" + encodeURIComponent(e)
            }

            function a(e) {
                return "/events/" + encodeURIComponent(e)
            }

            function s(e) {
                return "/" + encodeURIComponent(e) + "/manager"
            }
            n.d(t, "c", function() {
                return i
            }), n.d(t, "a", function() {
                return r
            }), n.d(t, "b", function() {
                return a
            }), n.d(t, "d", function() {
                return s
            })
        },
        l0e4: function(e, t, n) {},
        lZdE: function(e, t, n) {
            "use strict";

            function i(e) {
                return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
            }
            n.d(t, "a", function() {
                return i
            })
        },
        nhit: function(e, t, n) {
            e.exports = n.p + "assets/5-gifts-2x-939f2b1cf2051ee665dd.png"
        },
        oj5W: function(e, t, n) {},
        psMd: function(e, t, n) {},
        rhZM: function(e, t, n) {
            e.exports = n.p + "assets/100-gifts-1x-e31af9ea5d16be25f02b.png"
        },
        sLmD: function(e, t, n) {
            "use strict";
            n.d(t, "b", function() {
                return s
            }), n.d(t, "a", function() {
                return o
            });
            var i = n("/7QA"),
                r = "en-us",
                a = {
                    bg: "bg-bg",
                    cs: "cs-cz",
                    da: "da-dk",
                    de: "de-de",
                    el: "el-gr",
                    en: r,
                    "en-gb": r,
                    es: "es-es",
                    "es-mx": "es-mx",
                    fi: "fi-fi",
                    fr: "fr-fr",
                    hu: "hu-hu",
                    it: "it-it",
                    ja: "ja-jp",
                    ko: "ko-kr",
                    nl: "nl-nl",
                    no: "no-no",
                    pl: "pl-pl",
                    "pt-br": "pt-br",
                    pt: "pt-pt",
                    ro: "ro-ro",
                    ru: "ru-ru",
                    sk: "sk-sk",
                    sv: "sv-se",
                    th: "th-th",
                    tr: "tr-tr",
                    vi: "vi-vn",
                    "zh-cn": "zh-cn",
                    "zh-tw": "zh-tw"
                },
                s = function(e) {
                    var t, n = o();
                    return t = function(e) {
                        return void 0 !== e.tag_id
                    }(e) ? {
                        id: e.tag_id,
                        isLanguageTag: e.tag_name.includes("auto___lang"),
                        localizedName: "",
                        tagName: e.tag_name
                    } : {
                        id: e.objectID,
                        tagName: e.tag_name,
                        isAutomated: e.automated || !1,
                        localizedDescription: e.description_localizations && e.description_localizations[n] || "",
                        localizedName: ""
                    }, e.localizations && e.localizations[n] ? t.localizedName = e.localizations[n] : e.localizations && e.localizations[r] ? t.localizedName = e.localizations[r] : t.localizedName = t.tagName, t
                };

            function o() {
                return a[i.p.intl.getLanguageCode() || ""] || r
            }
        },
        u3Ph: function(e, t, n) {
            e.exports = n.p + "assets/20-gifts-1x-61ea2090b2266638ecb9.png"
        },
        uOOi: function(e, t, n) {},
        "vR4/": function(e, t, n) {
            "use strict";
            var i, r;
            n.d(t, "b", function() {
                    return i
                }), n.d(t, "a", function() {
                    return r
                }),
                function(e) {
                    e[e.AllVideos = 0] = "AllVideos", e[e.PastBroadcasts = 1] = "PastBroadcasts", e[e.Uploads = 2] = "Uploads", e[e.Highlights = 3] = "Highlights"
                }(i || (i = {})),
                function(e) {
                    e[e.AnyLength = 0] = "AnyLength", e[e.Short = 1] = "Short", e[e.Long = 2] = "Long"
                }(r || (r = {}))
        },
        wEyv: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "ChannelPage_SubscribeBalloon_User"
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
                    }, {
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "productId"
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
                                            value: "50"
                                        }
                                    }],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "subscriptionProducts"
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
                                                value: "price"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "priceInfo"
                                            },
                                            arguments: [],
                                            directives: [],
                                            selectionSet: {
                                                kind: "SelectionSet",
                                                selections: [{
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "currency"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "exponent"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "total"
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
                                                        value: "price"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "isTaxInclusive"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }, {
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
                                                        value: "tax"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }]
                                            }
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "url"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "emoteSetID"
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
                                                value: "name"
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
                                                value: "hasAdFree"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
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
                                                    name: {
                                                        kind: "Name",
                                                        value: "id"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }]
                                            }
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "interval"
                                            },
                                            arguments: [],
                                            directives: [],
                                            selectionSet: {
                                                kind: "SelectionSet",
                                                selections: [{
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "unit"
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
                                                        value: "promotion"
                                                    },
                                                    arguments: [],
                                                    directives: [],
                                                    selectionSet: {
                                                        kind: "SelectionSet",
                                                        selections: [{
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "newPrice"
                                                            },
                                                            arguments: [],
                                                            directives: []
                                                        }, {
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "oldPrice"
                                                            },
                                                            arguments: [],
                                                            directives: []
                                                        }, {
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "discountType"
                                                            },
                                                            arguments: [],
                                                            directives: []
                                                        }, {
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "discountValue"
                                                            },
                                                            arguments: [],
                                                            directives: []
                                                        }]
                                                    }
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "paidUpgradePromotion"
                                                    },
                                                    arguments: [],
                                                    directives: [],
                                                    selectionSet: {
                                                        kind: "SelectionSet",
                                                        selections: [{
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "newPrice"
                                                            },
                                                            arguments: [],
                                                            directives: []
                                                        }, {
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "oldPrice"
                                                            },
                                                            arguments: [],
                                                            directives: []
                                                        }, {
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "discountType"
                                                            },
                                                            arguments: [],
                                                            directives: []
                                                        }, {
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "discountValue"
                                                            },
                                                            arguments: [],
                                                            directives: []
                                                        }]
                                                    }
                                                }]
                                            }
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "giftPromotion"
                                            },
                                            arguments: [],
                                            directives: [],
                                            selectionSet: {
                                                kind: "SelectionSet",
                                                selections: [{
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "newPrice"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "oldPrice"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "discountType"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "discountValue"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }]
                                            }
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
                                                value: "canPrimeSubscribe"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "canGiftInChannel"
                                            },
                                            arguments: [{
                                                kind: "Argument",
                                                name: {
                                                    kind: "Name",
                                                    value: "product"
                                                },
                                                value: {
                                                    kind: "Variable",
                                                    name: {
                                                        kind: "Name",
                                                        value: "productId"
                                                    }
                                                }
                                            }],
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
                                                        value: "renewsAt"
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
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "paidUpgrade"
                                                    },
                                                    arguments: [],
                                                    directives: [],
                                                    selectionSet: {
                                                        kind: "SelectionSet",
                                                        selections: [{
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "price"
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
                                                                value: "startsAt"
                                                            },
                                                            arguments: [],
                                                            directives: []
                                                        }]
                                                    }
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "gift"
                                                    },
                                                    arguments: [],
                                                    directives: [],
                                                    selectionSet: {
                                                        kind: "SelectionSet",
                                                        selections: [{
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "isGift"
                                                            },
                                                            arguments: [],
                                                            directives: []
                                                        }, {
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "gifter"
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
                    end: 825
                }
            };
            n.loc.source = {
                body: "query ChannelPage_SubscribeBalloon_User($login: String! $productId: String!) {\nuser(login: $login) {\nid\nlogin\ndisplayName\nprofileImageURL(width: 50)\nsubscriptionProducts {\nid\nprice\npriceInfo {\ncurrency\nexponent\ntotal\ndescription\nprice\nisTaxInclusive\nid\ntax\n}\nurl\nemoteSetID\ndisplayName\nname\ntier\nhasAdFree\nemotes {\nid\n}\ninterval {\nunit\n}\nself {\npromotion {\nnewPrice\noldPrice\ndiscountType\ndiscountValue\n}\npaidUpgradePromotion {\nnewPrice\noldPrice\ndiscountType\ndiscountValue\n}\n}\ngiftPromotion {\nnewPrice\noldPrice\ndiscountType\ndiscountValue\n}\n}\nself {\ncanPrimeSubscribe\ncanGiftInChannel(product: $productId)\nsubscriptionBenefit {\nid\npurchasedWithPrime\ntier\nplatform\nrenewsAt\nendsAt\npaidUpgrade {\nprice\ntier\nstartsAt\n}\ngift {\nisGift\ngifter {\nid\ndisplayName\n}\n}\n}\n}\n}\ncurrentUser {\nid\nlogin\nhasPrime\n}\nrequestInfo {\ncountryCode\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        wK7Q: function(e, t, n) {
            e.exports = n.p + "assets/10-gifts-1x-97b2f3bd2b967bea73b1.png"
        },
        wM1o: function(e, t, n) {
            e.exports = n.p + "assets/50-gifts-4x-5eb89fc1a85792f46df4.png"
        },
        yLwq: function(e, t, n) {
            "use strict";
            n.d(t, "b", function() {
                return i
            }), n.d(t, "a", function() {
                return r
            }), n.d(t, "c", function() {
                return a
            });
            var i = [{
                id: "profile_image_001",
                urlSlug: "bb97f7e6-f11a-4194-9708-52bf5a5125e8"
            }, {
                id: "profile_image_002",
                urlSlug: "27103734-3cda-44d6-a384-f2ab71e4bb85"
            }, {
                id: "profile_image_003",
                urlSlug: "49988c7b-57bc-4dee-bd4f-6df4ad215d3a"
            }, {
                id: "profile_image_004",
                urlSlug: "0ecbb6c3-fecb-4016-8115-aa467b7c36ed"
            }, {
                id: "profile_image_005",
                urlSlug: "cd618d3e-f14d-4960-b7cf-094231b04735"
            }, {
                id: "profile_image_006",
                urlSlug: "4cbf10f1-bb9f-4f57-90e1-15bf06cfe6f5"
            }, {
                id: "profile_image_007",
                urlSlug: "b83b1794-7df9-4878-916c-88c2ad2e4f9f"
            }];

            function r(e, t) {
                var n = 70;
                return 300 === t ? n = 300 : 96 !== t && 80 !== t || (n = 150), "https://static-cdn.jtvnw.net/user-default-pictures/" + e.urlSlug + "-profile_image-" + n + "x" + n + ".jpg"
            }

            function a(e, t) {
                var n = parseInt(e, 10) % i.length;
                return r(i[n], t)
            }
        },
        "yO+B": function(e, t) {
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
        z8lI: function(e, t, n) {
            "use strict";
            var i = n("mrSG"),
                r = n("q1tI"),
                a = n("GnwI"),
                s = n("O4UZ"),
                o = n("Ue10"),
                c = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        var e = Object(s.g)(this.props.errorType);
                        return r.createElement(o.xb, {
                            background: o.r.Alt2,
                            display: o.X.Flex,
                            justifyContent: o.Va.Center,
                            padding: {
                                y: 1
                            },
                            margin: {
                                bottom: 1
                            },
                            textAlign: o.Jb.Center,
                            "data-test-selector": this.props.testTarget,
                            "data-a-target": this.props.testTarget
                        }, r.createElement(o.W, {
                            type: o.Nb.H4,
                            align: o.Xb.Middle
                        }, r.createElement(o.xb, {
                            padding: 1,
                            display: o.X.InlineFlex,
                            flexGrow: 1,
                            flexWrap: o.Aa.NoWrap,
                            alignItems: o.f.Center,
                            textAlign: o.Jb.Left,
                            fontSize: this.props.fontSize ? this.props.fontSize : o.Ba.Size5,
                            "data-a-target": "prime-error-glitch"
                        }, r.createElement(o.Wa, {
                            margin: {
                                right: 1
                            },
                            display: o.X.InlineFlex,
                            flexGrow: 1,
                            flexWrap: o.Aa.NoWrap,
                            alignItems: o.f.Center
                        }, r.createElement(o.nb, {
                            asset: o.ob.DeadGlitch,
                            type: o.pb.Alert,
                            width: 20,
                            height: 20
                        })), r.createElement(o.W, {
                            type: o.Nb.P
                        }, e))))
                    }, t
                }(r.Component),
                u = Object(a.b)("PrimeError", {
                    autoReportInteractive: !0
                })(c);
            n.d(t, "a", function() {
                return u
            })
        },
        zUQL: function(e, t) {
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
        }
    }
]);