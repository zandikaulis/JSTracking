(window.webpackJsonp = window.webpackJsonp || []).push([
    [91], {
        "+6S+": function(e, t, n) {},
        "25vm": function(e, t, n) {},
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
            var r = n("/MKj"),
                i = n("mrSG"),
                a = n("q1tI"),
                o = n("oJmH"),
                s = n("/7QA"),
                l = n("8/mp"),
                c = n("yR8l"),
                d = n("GnwI"),
                u = n("Ue10"),
                p = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        var e = Object(s.d)("You'll get characters, vehicles, skins, and boosts for games like {hearthstone} and {smite}, plus surprises like a rotating selection of indie games.", {
                            hearthstone: a.createElement(u.W, {
                                italic: !0,
                                type: u.Ob.Span
                            }, Object(s.d)("Hearthstone", "PrimeEmpty")),
                            smite: a.createElement(u.W, {
                                italic: !0,
                                type: u.Ob.Span
                            }, Object(s.d)("Smite", "PrimeEmpty"))
                        }, "PrimeEmpty");
                        return a.createElement(u.Wa, {
                            className: "prime-empty",
                            margin: 2
                        }, a.createElement(u.Wa, {
                            textAlign: u.Kb.Center,
                            margin: 2
                        }, a.createElement("img", {
                            className: "prime-empty__image",
                            src: "https://m.media-amazon.com/images/G/01/sm/landing/Trunk_w_Star_transparent._V530838660_.png",
                            alt: Object(s.d)("Prime Treasure Chest", "PrimeEmpty")
                        })), a.createElement(u.W, {
                            type: u.Ob.P,
                            bold: !0
                        }, Object(s.d)("Free in-game loot every month, plus surprises", "PrimeEmpty")), a.createElement("div", null, e))
                    }, t
                }(a.Component),
                m = Object(d.b)("PrimeEmpty", {
                    autoReportInteractive: !0
                })(p),
                f = n("6x+I"),
                g = n("geRD"),
                h = n("JVUd"),
                v = n("cinR"),
                k = n("Rjl4"),
                b = n("O4UZ"),
                O = n("cx1G"),
                y = (n("5ZOr"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onClick = function(e) {
                            Object(k.i)({
                                offerID: t.props.offerID,
                                externalURL: t.props.externalURL,
                                hasPrime: !0,
                                index: t.props.index
                            }, t.props.offerType), t.props.claimCallback && t.props.offerType !== b.e.EXTERNAL_OFFER && !t.props.externalURL && t.props.claimCallback(e)
                        }, t.onHover = function() {
                            Object(k.j)({
                                offerID: t.props.offerID,
                                externalURL: t.props.externalURL,
                                hasPrime: !0,
                                index: t.props.index
                            }, t.props.offerType)
                        }, t.isGifted = function() {
                            return t.props.data && t.props.data.currentUser && t.props.data.currentUser.primeGift
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.data && this.props.data.loading && !this.props.data.error || this.props.latencyTracking.reportInteractive()
                    }, t.prototype.componentDidUpdate = function() {
                        this.props.data && this.props.data.loading && !this.props.data.error || this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        var e = this.props.orientation || b.c.Default,
                            t = b.k(e),
                            n = b.h("prime-claim-button", e);
                        return a.createElement(u.Wa, {
                            fullWidth: !0,
                            className: n,
                            display: t ? u.X.Block : u.X.InlineBlock
                        }, this.renderClaimButton())
                    }, t.prototype.renderClaimButton = function() {
                        var e = this.props,
                            t = e.externalURL,
                            n = e.claiming,
                            r = e.offerType,
                            i = this.getButtonText();
                        if (t || r === b.e.EXTERNAL_OFFER) return a.createElement(v.a, {
                            onHover: this.onHover
                        }, a.createElement(u.z, {
                            fullWidth: !0,
                            linkTo: t,
                            targetBlank: !0,
                            onClick: this.onClick,
                            "data-a-target": "prime-claim-button"
                        }, i));
                        var o = a.createElement(v.a, {
                            onHover: this.onHover
                        }, a.createElement(u.z, {
                            fullWidth: !0,
                            state: n ? u.E.Loading : u.E.Default,
                            disabled: n,
                            linkTo: t,
                            onClick: this.onClick,
                            "data-a-target": "prime-claim-button",
                            icon: this.isGifted() ? u.ob.Gift : void 0
                        }, i));
                        return a.createElement(u.Wa, {
                            position: u.eb.Relative
                        }, o)
                    }, t.prototype.getButtonText = function() {
                        var e = Object(s.d)("Learn More", "PrimeClaimButton");
                        if (this.props.externalURL) return e;
                        switch (this.props.offerType) {
                            case b.e.CLAIM_CODE:
                                return Object(s.d)("Get Code", "PrimeClaimButton");
                            case b.e.EXTERNAL_OFFER:
                                return e;
                            case b.e.DIRECT_ENTITLEMENT:
                            default:
                                return this.isGifted() ? Object(s.d)("Claim Gift", "PrimeClaimButton") : Object(s.d)("Claim Offer", "PrimeClaimButton")
                        }
                    }, t
                }(a.Component)),
                E = Object(o.compose)(Object(c.a)(O, {
                    skip: function(e) {
                        return !Object(b.j)(e.offerID)
                    },
                    options: function(e) {
                        return {
                            variables: {
                                offerID: e.offerID
                            }
                        }
                    }
                }), Object(d.b)("PrimeClaimButton"))(y),
                N = (n("KbPt"), function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.toggleShowDescription = function() {
                            var e = !n.state.showDescription;
                            Object(k.l)(e, {
                                offerID: n.props.offerID,
                                externalURL: n.props.externalURL,
                                hasPrime: n.props.hasPrime,
                                index: n.props.index
                            }), n.setState({
                                showDescription: e
                            })
                        }, n.onHover = function() {
                            n.state.showDescription ? Object(k.k)({
                                offerID: n.props.offerID,
                                externalURL: n.props.externalURL,
                                hasPrime: n.props.hasPrime,
                                index: n.props.index
                            }) : Object(k.m)({
                                offerID: n.props.offerID,
                                externalURL: n.props.externalURL,
                                hasPrime: n.props.hasPrime,
                                index: n.props.index
                            })
                        }, n.renderVerticalDescriptionBlock = function() {
                            return a.createElement(u.yb, {
                                className: "prime-claim-description__body",
                                background: u.r.Alt2,
                                border: !0,
                                position: u.eb.Relative
                            }, n.renderDescription())
                        }, n.renderHorizontalDescriptionBlock = function() {
                            return a.createElement(u.yb, {
                                className: "prime-claim-description__body",
                                background: u.r.Base,
                                border: !0,
                                position: u.eb.Absolute,
                                attachTop: !0,
                                attachLeft: !0,
                                attachRight: !0,
                                margin: {
                                    right: 1,
                                    top: .5
                                },
                                overflow: u.Za.Scroll
                            }, n.renderDescription())
                        }, n.renderDescription = function() {
                            return a.createElement(u.Wa, {
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
                    return i.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        var e = this.props.orientation || b.c.Default,
                            t = Object(b.h)("prime-claim-description", e);
                        return a.createElement(u.Wa, {
                            fullWidth: !0,
                            className: t,
                            margin: {
                                top: 1
                            }
                        }, a.createElement(v.a, {
                            onHover: this.onHover
                        }, a.createElement(u.z, {
                            "data-a-target": "prime-claim-description-button",
                            fullWidth: !0,
                            type: u.F.Hollow,
                            onClick: this.toggleShowDescription
                        }, this.getDescriptionButtonText())), this.getDescriptionBlock(e))
                    }, t.prototype.getDescriptionButtonText = function() {
                        return this.state.showDescription ? Object(s.d)("Close Info", "PrimeClaimDescription") : Object(s.d)("More Info", "PrimeClaimDescription")
                    }, t.prototype.getDescriptionBlock = function(e) {
                        var t = null,
                            n = Object(b.k)(e);
                        return this.state.showDescription && (t = n ? this.renderVerticalDescriptionBlock() : this.renderHorizontalDescriptionBlock()), t
                    }, t
                }(a.Component)),
                S = Object(d.b)("PrimeClaimDescription", {
                    autoReportInteractive: !0
                })(N),
                _ = n("fvjX"),
                D = n("aCAx"),
                I = n("kRBY"),
                C = n("ZS2+"),
                x = n("cZKs"),
                P = C.a.wrap(function() {
                    return Promise.all([n.e(0), n.e(84)]).then(n.bind(null, "+Zk8"))
                }, "GiftForm"),
                w = function(e) {
                    function t(t) {
                        return e.call(this, t) || this
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        return a.createElement(u.Wa, {
                            className: "prime-gift-modal",
                            position: u.eb.Relative,
                            "data-a-target": "passport-modal"
                        }, a.createElement(P, {
                            action: this.props.action,
                            offerID: this.props.offerID,
                            offer: this.props.offer,
                            getGiftRecipientList: this.props.getGiftRecipientList,
                            updateGiftRecipientList: this.props.updateGiftRecipientList
                        }), a.createElement(x.a, {
                            closeOnBackdropClick: !0,
                            onClose: this.props.onClose
                        }))
                    }, t
                }(a.Component),
                L = Object(d.b)("PrimeGiftModal", {
                    autoReportInteractive: !0
                })(w),
                T = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            recipients: t.getGiftLogins(),
                            newRecipients: new Set
                        }, t.onClick = function() {
                            t.props.isLoggedIn && (t.props.giftPrimeOffer(t.getGiftRecipients.bind(t), t.updateGiftRecipients.bind(t)), t.props.toggleCrownMenu && t.props.toggleCrownMenu(!1))
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        return a.createElement(u.z, {
                            type: u.F.Hollow,
                            icon: u.ob.Gift,
                            onClick: this.onClick,
                            fullWidth: !0,
                            targetBlank: !0,
                            "data-a-target": "prime-gift-button"
                        }, Object(s.d)("Send as a Gift", "PrimeGiftExperiment"))
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
                U = Object(o.compose)(Object(d.b)("PrimeGiftButton", {
                    autoReportInteractive: !0
                }))(T);
            var F = Object(r.connect)(function(e) {
                    return {
                        isLoggedIn: Object(I.f)(e)
                    }
                }, function(e, t) {
                    return Object(_.bindActionCreators)({
                        giftPrimeOffer: function(e, n) {
                            return Object(D.d)(L, {
                                offerID: t.offerID,
                                offer: t.offer,
                                getGiftRecipientList: e,
                                updateGiftRecipientList: n
                            })
                        }
                    }, e)
                })(U),
                R = n("9pSj"),
                j = n("j3KY"),
                W = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onClick = function() {
                            Object(k.q)({
                                offerID: t.props.offerID,
                                externalURL: t.getLink(),
                                hasPrime: !1,
                                index: t.props.index
                            })
                        }, t.onHover = function() {
                            Object(k.r)({
                                offerID: t.props.offerID,
                                externalURL: t.getLink(),
                                hasPrime: !1,
                                index: t.props.index
                            })
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        return a.createElement(u.Wa, {
                            className: "prime-upsell-button",
                            margin: {
                                top: 2,
                                bottom: 1
                            }
                        }, a.createElement(v.a, {
                            onHover: this.onHover
                        }, a.createElement(u.z, {
                            fullWidth: !0,
                            linkTo: this.getLink(),
                            targetBlank: !0,
                            onClick: this.onClick
                        }, Object(s.d)("Start Your Free Trial", "PrimeUpsellButton"))))
                    }, t.prototype.getLink = function() {
                        if (this.props.externalURL) return this.props.externalURL;
                        var e = (this.props.orientation || R.b.Default) === R.b.Vertical ? j.d : j.b,
                            t = this.props.externalReftag || e,
                            n = window.location.pathname.substring(1);
                        return Object(j.e)(t, n)
                    }, t
                }(a.Component),
                B = Object(d.b)("PrimeUpsellButton", {
                    autoReportInteractive: !0
                })(W),
                G = n("zUQL"),
                A = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return i.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.data.loading && !this.props.data.error || this.props.latencyTracking.reportInteractive()
                    }, t.prototype.componentDidUpdate = function() {
                        this.props.data.loading && !this.props.data.error || this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        var e = this.props.orientation || b.c.Default,
                            t = Object(b.h)("prime-claim", e);
                        return a.createElement(u.Wa, {
                            className: t,
                            margin: {
                                bottom: 1
                            }
                        }, this.getCallToAction(), this.getClaimDescriptionSection())
                    }, t.prototype.getCallToAction = function() {
                        var e = this.props.data;
                        return Object(b.m)(e) || this.props.isGifted ? Object(b.m)(e) && Object(b.j)(this.props.offerID) ? a.createElement(u.Wa, {
                            display: u.X.Flex,
                            alignItems: u.f.Center
                        }, a.createElement(u.Wa, {
                            fullWidth: !0,
                            display: u.X.Flex,
                            margin: {
                                right: 1
                            }
                        }, this.renderPrimeClaimButton()), a.createElement(u.Wa, {
                            fullWidth: !0,
                            display: u.X.Flex,
                            margin: {
                                left: 1
                            }
                        }, a.createElement(F, {
                            offerID: this.props.offerID,
                            offer: this.props.offer,
                            toggleCrownMenu: this.props.toggleCrownMenu
                        }))) : this.renderPrimeClaimButton() : a.createElement(B, {
                            externalReftag: this.props.externalReftag,
                            externalURL: this.props.externalURL,
                            offerID: this.props.offerID,
                            index: this.props.index,
                            orientation: this.props.orientation
                        })
                    }, t.prototype.getClaimDescriptionSection = function() {
                        if (this.props.offerType === b.e.EXTERNAL_OFFER || this.props.externalURL) return null;
                        var e = this.props.data;
                        return a.createElement(S, {
                            description: this.props.offerDescription,
                            offerID: this.props.offerID,
                            externalURL: this.props.externalURL,
                            index: this.props.index,
                            orientation: this.props.orientation,
                            hasPrime: Object(b.m)(e)
                        })
                    }, t.prototype.renderPrimeClaimButton = function() {
                        return a.createElement(E, {
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
                M = Object(o.compose)(Object(c.a)(G), Object(d.b)("PrimeInstructions"))(A),
                H = n("z8lI"),
                V = (n("25vm"), function(e) {
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
                        return a.createElement(u.Wa, {
                            className: "copy-button copy-btn",
                            display: u.X.Flex
                        }, a.createElement(u.Oa, {
                            className: "copy-button__btn"
                        }, a.createElement(u.z, {
                            onClick: this.copy,
                            type: this.state.copied ? u.F.Success : u.F.Default
                        }, e)), a.createElement("input", {
                            className: "copy-button__copy-input",
                            ref: this.setRef,
                            value: this.props.clipboardText,
                            readOnly: !0
                        }))
                    }, t
                }(a.Component)),
                z = Object(_.compose)(Object(d.b)("CopyButton"))(V),
                X = function(e) {
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
                        return this.state && this.state.value ? a.createElement(u.Wa, {
                            className: "copyable-item",
                            display: u.X.Flex,
                            flexGrow: 1
                        }, a.createElement(u.Wa, {
                            flexGrow: 1
                        }, a.createElement(u.Qa, {
                            type: u.Sa.Text,
                            onChange: this.onChange,
                            value: this.state.value,
                            disabled: this.props.disabled,
                            readOnly: this.props.readOnly
                        })), a.createElement(u.Wa, null, a.createElement(z, {
                            clipboardText: this.state.value
                        }))) : null
                    }, t
                }(a.Component),
                q = Object(_.compose)(Object(d.b)("CopyableItem"))(X),
                K = (n("Sb+K"), function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.getClaimInstructions = function() {
                            return a.createElement(u.Xb, null, a.createElement(f, {
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
                            return a.createElement(u.yb, {
                                className: "prime-claim-instructions prime-claim-instructions--vertical",
                                "data-a-target": "prime-claim-instructions--vertical",
                                background: u.r.Alt2,
                                border: !0,
                                padding: 1,
                                fontSize: u.Ba.Size6
                            }, n.getClaimInstructions())
                        }, n.renderHorizontalLayout = function() {
                            return a.createElement(u.yb, {
                                fullWidth: !0,
                                className: "prime-claim-instructions prime-claim-instructions--horizontal",
                                margin: {
                                    top: 1
                                }
                            }, a.createElement(u.Wa, {
                                fullWidth: !0,
                                justifyContent: u.Va.Center,
                                textAlign: u.Kb.Center
                            }, a.createElement(u.U, {
                                onClick: n.toggleShowDescription
                            }, n.getDescriptionButtonText())), n.state.showDescription && a.createElement(u.yb, {
                                className: "prime-claim-instructions__body",
                                "data-a-target": "prime-claim-instructions--horizontal",
                                border: !0,
                                position: u.eb.Absolute,
                                padding: 1,
                                background: u.r.Alt,
                                overflow: u.Za.Scroll,
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
                            return n.state.showDescription ? Object(s.d)("Close Info", "PrimeClaimInstruction") : Object(s.d)("Click here for Claim Instructions", "PrimeClaimInsctuction")
                        }, n.state = {
                            showDescription: !1
                        }, n
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        var e = this.props.orientation || b.c.Default;
                        return Object(b.k)(e) ? this.renderVerticalLayout() : this.renderHorizontalLayout()
                    }, t
                }(a.Component)),
                Q = Object(d.b)("PrimeClaimInstructions", {
                    autoReportInteractive: !0
                })(K),
                Y = n("UFVY"),
                $ = (n("PCo6"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.renderGiftRedeemedButton = function(e) {
                            if (!t.props.data || t.props.data.loading || t.props.data.error) return a.createElement(u.db, null);
                            var n = t.props.data.currentUser && t.props.data.currentUser.primeGift;
                            return a.createElement(u.yb, {
                                fullWidth: !0,
                                display: u.X.Flex,
                                justifyContent: u.Va.Center,
                                margin: {
                                    bottom: e,
                                    right: .5
                                },
                                className: "prime-redeem__confirmation",
                                alignItems: u.f.Center,
                                borderRadius: u.x.Medium
                            }, a.createElement(u.W, {
                                type: u.Ob.Span,
                                align: u.Yb.Middle,
                                color: u.O.Overlay
                            }, a.createElement(u.Wa, {
                                display: u.X.InlineFlex,
                                flexWrap: u.Aa.NoWrap,
                                alignItems: u.f.Center,
                                "data-test-target": "prime-redeem-check",
                                "data-a-target": "prime-redeem-check"
                            }, a.createElement(u.Wa, {
                                margin: {
                                    right: 1
                                },
                                display: u.X.InlineFlex,
                                flexWrap: u.Aa.NoWrap,
                                padding: {
                                    y: .5
                                },
                                alignItems: u.f.Center
                            }, a.createElement(u.nb, {
                                asset: n ? u.ob.Gift : u.ob.Check,
                                width: 20,
                                height: 20
                            })), n ? Object(s.d)("Gift Claimed", "PrimeRedeem") : Object(s.d)("Claimed", "PrimeRedeem"))))
                        }, t.getPrimeClaimInstructions = function() {
                            return a.createElement(Q, {
                                claimInstructions: t.props.claimInstructions || "",
                                orientation: t.props.orientation
                            })
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        var e = this.props.orientation || b.c.Default,
                            t = Object(b.h)("prime-redeem", e);
                        return a.createElement(u.Wa, {
                            className: t
                        }, this.getCodeOrConfirmation(e), this.getPrimeClaimInstructions())
                    }, t.prototype.getCodeOrConfirmation = function(e) {
                        var t = Object(b.k)(e);
                        if (this.props.code && this.props.deliveryMethod === b.e.CLAIM_CODE) return a.createElement(u.Wa, {
                            "data-a-target": "prime-redeem-code-container"
                        }, a.createElement(q, {
                            initialText: this.props.code,
                            readOnly: !0,
                            textCenter: !0
                        }));
                        var n = t ? 1 : 0;
                        return Object(b.j)(this.props.offerID) ? this.props.isPrime ? a.createElement(u.Wa, {
                            display: u.X.Flex
                        }, this.renderGiftRedeemedButton(n), a.createElement(u.Wa, {
                            fullWidth: !0,
                            display: u.X.Flex,
                            margin: {
                                left: .5,
                                bottom: n
                            }
                        }, a.createElement(F, {
                            offerID: this.props.offerID,
                            offer: this.props.offer,
                            toggleCrownMenu: this.props.toggleCrownMenu
                        }))) : this.renderGiftRedeemedButton(n) : a.createElement(u.yb, {
                            display: u.X.Flex,
                            justifyContent: u.Va.Center,
                            margin: {
                                bottom: n
                            },
                            padding: {
                                y: n
                            },
                            className: "prime-redeem__confirmation",
                            borderRadius: u.x.Medium
                        }, a.createElement(u.W, {
                            type: t ? u.Ob.H4 : u.Ob.H6,
                            align: u.Yb.Middle,
                            color: u.O.Overlay
                        }, a.createElement(u.Wa, {
                            display: u.X.InlineFlex,
                            flexGrow: 1,
                            flexWrap: u.Aa.NoWrap,
                            alignItems: u.f.Center,
                            "data-test-target": "prime-redeem-check",
                            "data-a-target": "prime-redeem-check",
                            padding: {
                                left: n
                            }
                        }, a.createElement(u.Wa, {
                            margin: {
                                right: 1
                            },
                            display: u.X.InlineFlex,
                            flexGrow: 1,
                            flexWrap: u.Aa.NoWrap,
                            padding: {
                                y: .5
                            },
                            alignItems: u.f.Center
                        }, a.createElement(u.nb, {
                            asset: u.ob.Check,
                            width: 20,
                            height: 20
                        })), Object(s.d)("Added To Your Twitch Account", "PrimeRedeem"))))
                    }, t
                }(a.Component)),
                Z = Object(o.compose)(Object(d.b)("PrimeRedeem", {
                    autoReportInteractive: !0
                }), Object(c.a)(Y, {
                    skip: function(e) {
                        return !Object(b.j)(e.offerID)
                    },
                    options: function(e) {
                        return {
                            variables: {
                                offerID: e.offerID
                            }
                        }
                    }
                }))($),
                J = n("SStD"),
                ee = n("QK1T"),
                te = n("9k8c"),
                ne = n("PsVi"),
                re = (n("oj5W"), "prime-offer__video"),
                ie = function(e) {
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
                                r = e.content,
                                i = r && r.game && r.game.name || "",
                                o = r && r.categories && r.categories[0] || "",
                                s = r && r.publisher || "";
                            return a.createElement(u.yb, {
                                "data-a-target": "prime-offer",
                                className: "prime-offer prime-offer--vertical",
                                alignItems: u.f.Center,
                                display: u.X.Block,
                                borderBottom: !n,
                                textAlign: u.Kb.Left,
                                position: u.eb.Relative,
                                padding: {
                                    x: 2,
                                    y: 1
                                }
                            }, a.createElement(u.Wa, {
                                padding: {
                                    y: .5
                                }
                            }, t.renderTitle(e), a.createElement(u.W, null, t.renderGiftText())), t.renderOfferImageOrVideo(e.imageURL), a.createElement(u.yb, {
                                margin: {
                                    bottom: 2
                                }
                            }, a.createElement(u.Wa, {
                                className: "prime-offer__description",
                                padding: {
                                    top: .5
                                }
                            }, a.createElement(u.W, {
                                type: u.Ob.P
                            }, i, " ", o)), a.createElement(u.Wa, {
                                className: "prime-offer__publisher"
                            }, a.createElement(u.W, {
                                type: u.Ob.P,
                                color: u.O.Alt2,
                                fontSize: u.Ba.Size7
                            }, s))), t.renderRedeemUpsellOrClaimSection(e))
                        }, t.renderHorizontalLayout = function(e) {
                            var n = e.content,
                                r = n && n.game && n.game.name || "",
                                i = n && n.categories && n.categories[0] || "",
                                o = n && n.publisher || "";
                            return a.createElement(u.yb, {
                                "data-a-target": "prime-offer",
                                className: "prime-offer prime-offer--horizontal",
                                alignItems: u.f.Center,
                                display: u.X.InlineBlock,
                                textAlign: u.Kb.Left,
                                position: u.eb.Relative,
                                padding: {
                                    right: 1,
                                    y: .5
                                },
                                fullWidth: !0
                            }, a.createElement(u.yb, {
                                className: "prime-offer__content",
                                margin: {
                                    bottom: 2
                                }
                            }, a.createElement(u.yb, {
                                className: "prime-offer__content__text",
                                background: u.r.Base
                            }, a.createElement(u.Wa, {
                                className: "prime-offer__publisher"
                            }, a.createElement(u.W, {
                                type: u.Ob.P,
                                color: u.O.OverlayAlt,
                                fontSize: u.Ba.Size7,
                                transform: u.Nb.Uppercase
                            }, o)), a.createElement(u.Wa, {
                                className: "prime-offer__title",
                                alignItems: u.f.Start,
                                padding: {
                                    y: .5
                                }
                            }, t.renderTitle(e)), a.createElement(u.Wa, {
                                className: "prime-offer__description"
                            }, a.createElement(u.W, {
                                type: u.Ob.P,
                                color: u.O.Alt2
                            }, r, " ", i, " ", t.renderGiftText()))), t.renderOfferImageOrVideo(e.imageURL)), t.renderRedeemUpsellOrClaimSection(e))
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
                                "data-test-selector": re,
                                poster: "https://m.media-amazon.com/images/G/01/sm/Evergreen_Shared/crown_video_evergreen.jpg"
                            }, a.createElement("source", {
                                src: e,
                                type: "video/mp4"
                            })) : a.createElement("img", {
                                src: e
                            }), a.createElement(u.Pa, {
                                borderRadius: u.x.Medium
                            }, n)
                        }, t.getExtensionFromURL = function(e) {
                            if (!e) return e;
                            var t = e.split(".");
                            return t[t.length - 1]
                        }, t.renderRedeemUpsellOrClaimSection = function(e) {
                            var n = e.content,
                                r = n && n.externalURL || "",
                                i = e.self || {
                                    claimData: ""
                                };
                            if (t.state.error) {
                                var o = t.getErrorType();
                                return a.createElement(H.a, {
                                    fontSize: u.Ba.Size6,
                                    testTarget: "prime-offer-error",
                                    errorType: o
                                })
                            }
                            if (!r && (t.isCurrentOfferClaimed(e) || t.state.claimed)) {
                                var s = t.state.claimData || i.claimData;
                                return a.createElement(Z, {
                                    claimInstructions: e.claimInstructions,
                                    isPrime: Object(b.m)(t.props.data),
                                    offerID: e.id,
                                    offer: e,
                                    code: s,
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
                                externalURL: r,
                                claimCallback: t.claimOffer,
                                claiming: t.state.claiming,
                                index: t.props.index,
                                orientation: t.props.orientation,
                                toggleCrownMenu: t.props.toggleCrownMenu
                            })
                        }, t.getErrorType = function() {
                            return t.state.error || b.b.UNKNOWN_ERROR
                        }, t.claimOffer = function(e) {
                            e.nativeEvent.stopImmediatePropagation(), t.setState({
                                claiming: !0
                            }), t.props.giftData && t.props.giftData.currentUser && t.props.giftData.currentUser.primeGift && t.props.giftData.currentUser.primeGift && t.props.claimGift(Object(g.a)({
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
                                    error: b.b.UNKNOWN_ERROR
                                })
                            });
                            var n = t.props.data;
                            if (n && !n.loading && !n.error && n.currentUser && n.currentUser.id) {
                                var r = t.props.offer,
                                    i = Object(g.a)({
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
                                        var o = b.b[a.code];
                                        t.setState({
                                            claiming: !1,
                                            claimed: !1,
                                            error: o || b.b.UNKNOWN_ERROR
                                        })
                                    }
                                }).catch(function() {
                                    t.setState({
                                        claiming: !1,
                                        claimed: !1,
                                        error: b.b.UNKNOWN_ERROR
                                    })
                                })
                            }
                        }, t.trackImpression = function() {
                            var e = null;
                            t.props.offer.content && (e = t.props.offer.content.externalURL), Object(k.p)({
                                offerID: t.props.offer.id,
                                externalURL: e || "",
                                index: t.props.index,
                                hasPrime: Object(b.m)(t.props.data),
                                displayWidthType: t.props.displayWidthType
                            })
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.reportInteractiveIfReady(), this.props.impressionListener.registerImpressionCallback(this.trackImpression)
                    }, t.prototype.componentDidUpdate = function() {
                        this.reportInteractiveIfReady(), this.offerVideo && (this.offerVideo.setAttribute("muted", "muted"), this.offerVideo.play())
                    }, t.prototype.reportInteractiveIfReady = function() {
                        this.props.data && this.props.data.loading && !this.props.data.error || this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        var e = this.props.offer;
                        if (e) {
                            var t = this.props.orientation || b.c.Default;
                            return b.k(t) ? this.renderVerticalLayout(e) : this.renderHorizontalLayout(e)
                        }
                        return null
                    }, t.prototype.renderTitle = function(e) {
                        var t = null;
                        return !!(this.props.giftData && this.props.giftData.currentUser && this.props.giftData.currentUser.primeGift) && !!(this.props.giftData.currentUser.primeGift && this.props.giftData.currentUser.primeGift.from && this.props.giftData.currentUser.primeGift.from.login) && (t = a.createElement(u.Wa, {
                            margin: {
                                right: .5
                            }
                        }, a.createElement(u.nb, {
                            asset: u.ob.Gift
                        }))), a.createElement(u.Wa, {
                            "data-a-target": e.id,
                            className: "prime-offer__title",
                            alignItems: u.f.Start,
                            display: u.X.Flex
                        }, t, a.createElement(f, {
                            className: "prime-offer__title__markdown",
                            containerTagName: "h4",
                            source: e.title || ""
                        }))
                    }, t.prototype.renderGiftText = function() {
                        return this.props.giftData && this.props.giftData.currentUser && this.props.giftData.currentUser.primeGift && this.props.giftData.currentUser.primeGift.from && this.props.giftData.currentUser.primeGift.from.login ? Object(s.d)("from <x:bold>{gifterLogin}</x:bold>", {
                            "x:bold": function(e) {
                                return a.createElement(u.W, {
                                    type: u.Ob.Span,
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
                ae = Object(o.compose)(Object(c.a)(ne, {
                    name: "giftData",
                    skip: function(e) {
                        return !Object(b.j)(e.offer.id)
                    },
                    options: function(e) {
                        return {
                            variables: {
                                offerID: e.offer.id
                            }
                        }
                    }
                }), Object(c.a)(G, {
                    name: "data"
                }), Object(c.a)(J, {
                    name: "claimPrimeOffer"
                }), Object(c.a)(te, {
                    name: "claimGift"
                }), Object(d.b)("PrimeOffer"), Object(h.a)("PrimeOffer", {
                    pixels: 100
                }))(ie),
                oe = (n("WGf9"), function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return i.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        var e = this.props.orientation || b.c.Default,
                            t = Object(b.k)(e);
                        return a.createElement(u.yb, {
                            className: "prime-offer-placeholder",
                            alignItems: u.f.Center,
                            borderBottom: t,
                            padding: {
                                x: 2,
                                y: 1
                            },
                            display: t ? u.X.Block : u.X.InlineBlock,
                            fullWidth: t
                        }, a.createElement(u.Wa, {
                            className: "prime-offer-placeholder__title",
                            padding: {
                                y: .5
                            }
                        }, a.createElement(u.db, {
                            height: 20
                        })), a.createElement(u.db, {
                            height: 160
                        }), a.createElement(u.Wa, {
                            className: "prime-offer-placeholder__description",
                            padding: {
                                y: .5
                            }
                        }, a.createElement(u.db, {
                            height: 20,
                            width: 160
                        })), a.createElement(u.Wa, {
                            className: "prime-offer-placeholder__publisher"
                        }, a.createElement(u.db, {
                            height: 20,
                            width: 80
                        })), a.createElement(u.Wa, {
                            className: "prime-offer-placeholder__claim",
                            margin: {
                                top: 2,
                                bottom: 1
                            }
                        }, a.createElement(u.db, {
                            height: 40
                        })))
                    }, t
                }(a.Component)),
                se = Object(d.b)("PrimeOfferPlaceholder", {
                    autoReportInteractive: !0
                })(oe),
                le = (n("6sE4"), function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        return a.createElement(u.yb, {
                            "data-test-target": "prime-offers-upsell",
                            "data-a-target": "prime-offers-upsell",
                            className: "prime-offers-upsell",
                            alignItems: u.f.Center,
                            padding: {
                                x: 2,
                                y: 1
                            },
                            borderBottom: !0
                        }, a.createElement(u.W, {
                            type: u.Ob.H4
                        }, Object(s.d)("Claim With Twitch Prime", "PrimeUpsell")), a.createElement(u.Wa, {
                            className: "prime-upsell__logo-container",
                            fullWidth: !0,
                            margin: {
                                y: 2
                            },
                            textAlign: u.Kb.Center
                        }, a.createElement(u.nb, {
                            asset: u.ob.LogoTwitchPrime,
                            width: 330,
                            height: 150,
                            type: u.pb.Brand
                        })), a.createElement(u.W, {
                            type: u.Ob.P
                        }, Object(s.d)("Support your favorite streamer, plus get monthly games and in-game loot, and loads more with Twitch Prime.", "PrimeUpsell")), a.createElement(B, null))
                    }, t
                }(a.Component)),
                ce = Object(d.b)("PrimeUpsell", {
                    autoReportInteractive: !0
                })(le),
                de = n("RfIv"),
                ue = n("OeOm"),
                pe = (n("iuxt"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.shouldShowOffersSection = function() {
                            if (t.isOffersDataLoading) return !0;
                            var e = t.props.offersData,
                                n = e && e.primeOffers && e.primeOffers.length && t.getSortedOffers(),
                                r = n && n.length;
                            return r || !r && !t.props.hideWithNoOffers
                        }, t.renderDesktopOffers = function() {
                            return a.createElement(u.Wa, {
                                className: "prime-offer-list__content--desktop"
                            }, t.renderSectionTitle(), a.createElement(u.Ub, {
                                childWidth: u.Vb.Large,
                                gutterSize: u.Wb.Small,
                                center: !0,
                                placeholderItems: 20
                            }, t.renderOfferExperience(k.a.Wide)))
                        }, t.renderSectionTitle = function() {
                            return t.props.sectionTitle ? t.shouldShowPlaceholders ? a.createElement(u.Wa, {
                                padding: {
                                    x: 1
                                },
                                className: "prime-offers__title__placeholder"
                            }, a.createElement(u.db, {
                                height: 28,
                                width: 300
                            })) : a.createElement(u.Wa, {
                                margin: {
                                    y: 1
                                },
                                className: "prime-offers__title"
                            }, a.createElement(u.W, {
                                type: u.Ob.H3,
                                color: u.O.Base,
                                bold: !0
                            }, t.props.sectionTitle)) : null
                        }, t.renderMobileOffers = function() {
                            return a.createElement(u.Wa, {
                                className: "prime-offer-list__content--mobile"
                            }, t.renderSectionTitle(), t.renderOfferExperience(k.a.Narrow))
                        }, t.getOfferListOrientation = function() {
                            return t.props.listDirection || b.c.Default
                        }, t.getHiddenOfferIdsByPlacement = function(e) {
                            switch (e) {
                                case b.d.Crown:
                                    return s.b.get("prime-crown-hidden-ids", []);
                                case b.d.LootPage:
                                    return s.b.get("prime-loot-page-hidden-ids", []);
                                default:
                                    return []
                            }
                        }, t.renderOfferPlaceholders = function() {
                            for (var e = [], n = 0; n < 3; ++n) {
                                var r = a.createElement(se, {
                                    key: n,
                                    orientation: t.getOfferListOrientation()
                                });
                                e.push(r)
                            }
                            return e
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.shouldReportInteractive && this.props.latencyTracking.reportInteractive()
                    }, t.prototype.componentDidUpdate = function() {
                        this.shouldReportInteractive && this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        var e = this.getOfferListOrientation(),
                            t = e.toLowerCase(),
                            n = Object(b.h)("prime-offer-list", e),
                            r = "prime-offer-list__content prime-offer-list__content--" + t,
                            i = this.props.listDirection === b.c.Horizontal,
                            o = this.props.listDirection === b.c.Vertical;
                        return this.shouldShowOffersSection() ? a.createElement(l.b, {
                            className: n,
                            suppressScrollX: o,
                            suppressScrollY: i
                        }, a.createElement(u.Wa, {
                            className: r,
                            alignItems: u.f.Center,
                            padding: {
                                top: 1,
                                bottom: 2,
                                x: 1
                            }
                        }, this.renderUpsell(), this.props.listDirection === b.c.Horizontal && this.renderDesktopOffers(), this.renderMobileOffers())) : null
                    }, t.prototype.renderUpsell = function() {
                        var e = this.props.userData;
                        if (e && !Object(b.l)(e) && !Object(b.m)(e) && !this.props.hideUpsell) return a.createElement(ce, null)
                    }, t.prototype.renderOfferExperience = function(e) {
                        var t = this,
                            n = this.props.offersData;
                        if (this.shouldShowPlaceholders) return this.renderOfferPlaceholders();
                        if (n && n.primeOffers && n.primeOffers.length) {
                            var r = this.getSortedOffers(),
                                i = r[r.length - 1];
                            return r.map(function(n, r) {
                                return a.createElement(u.Wa, {
                                    display: u.X.InlineBlock,
                                    key: n.id
                                }, a.createElement(ae, {
                                    externalReftag: t.props.externalReftag,
                                    key: n.id,
                                    offer: n,
                                    isLast: i.id === n.id,
                                    index: r,
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
                            r = t.filter(function(e) {
                                return !n.includes(e.id)
                            });
                        if (this.getUserId()) {
                            var i = r.filter(function(t) {
                                    return e.isClaimedOffer(t)
                                }).sort(b.p),
                                a = this.filterOffersByOfferType(i),
                                o = r.filter(function(t) {
                                    return !e.isClaimedOffer(t)
                                }).sort(b.p);
                            return this.filterOffersByOfferType(o).concat(a)
                        }
                        return this.filterOffersByOfferType(r).slice().sort(b.p)
                    }, t.prototype.isClaimedOffer = function(e) {
                        return !this.offerHasExternalURL(e) && this.offerHasEntitlement(e)
                    }, t.prototype.offerHasEntitlement = function(e) {
                        return e.self && e.self.hasEntitlement
                    }, t.prototype.offerHasExternalURL = function(e) {
                        return e.content && e.content.externalURL
                    }, t.prototype.filterOffersByOfferType = function(e) {
                        var t = this.getFreeGamesWithPrimeOfferIds() || [];
                        return this.props.offerFilterType === de.a.Game ? e.filter(function(e) {
                            return t.includes(e.id)
                        }).sort(b.p) : this.props.offerFilterType === de.a.InGameLoot ? e.filter(function(e) {
                            return !t.includes(e.id)
                        }).sort(b.p) : e
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
                me = Object(o.compose)(Object(c.a)(ue, {
                    name: "offersData",
                    options: function() {
                        return {
                            variables: {
                                dateOverride: Object(b.f)()
                            }
                        }
                    },
                    skip: function(e) {
                        return !e.firstPageLoaded && !e.ignoreFirstPageLoad
                    }
                }), Object(c.a)(G, {
                    name: "userData",
                    skip: function(e) {
                        return !e.firstPageLoaded && !e.ignoreFirstPageLoad
                    }
                }), Object(d.b)("PrimeOfferList"))(pe);
            var fe = Object(r.connect)(function(e) {
                return {
                    firstPageLoaded: e.session.firstPageLoaded
                }
            })(me);
            n.d(t, "a", function() {
                return fe
            })
        },
        "5ZOr": function(e, t, n) {},
        "6sE4": function(e, t, n) {},
        "9iNR": function(e, t, n) {
            "use strict";
            n.r(t);
            var r = n("mrSG"),
                i = n("q1tI"),
                a = n("oJmH"),
                o = n("yoKv"),
                s = n("2INN"),
                l = n("wIs1"),
                c = n("ZS2+"),
                d = n("4VQm"),
                u = n("/0dD"),
                p = n("76Lv"),
                m = n("GnwI"),
                f = n("/7QA"),
                g = n("J4y2"),
                h = n("eJ65"),
                v = n("2xye"),
                k = n("/MKj"),
                b = n("fvjX"),
                O = n("1/iK"),
                y = n("y5D0"),
                E = n("kRBY"),
                N = n("TSYQ"),
                S = n("u5aL"),
                _ = n("yR8l"),
                D = n("9pSj"),
                I = n("Ue10"),
                C = n("Oowd"),
                x = (n("+6S+"), function(e) {
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
                        if (this.props.data.error) return i.createElement(D.c, null);
                        if (this.props.data.loading) return this.renderPlaceholders();
                        if (this.props.isLoggedIn) {
                            var e = N({
                                "twitch-prime-top-nav-user__dropdown--open": this.state.dropdownOpen
                            });
                            return i.createElement(I.Oa, {
                                className: "twitch-prime-top-nav-user__wrapper",
                                margin: {
                                    right: 2
                                },
                                fullHeight: !0
                            }, i.createElement(S.a, {
                                onClickOut: this.onClickOut,
                                className: e
                            }, i.createElement(I.Wa, {
                                display: I.X.Flex,
                                className: "twitch-prime-top-nav-user twitch-prime-top-nav-user--signed-in",
                                fullHeight: !0,
                                zIndex: I.bc.Above
                            }, i.createElement(I.Ta, {
                                onClick: this.toggleDropdown,
                                "data-test-selector": "user-menu-toggle",
                                blurAfterClick: !0,
                                type: I.Ua.Alpha
                            }, i.createElement(I.Wa, {
                                display: I.X.Flex,
                                flexWrap: I.Aa.NoWrap,
                                alignItems: I.f.Center,
                                flexGrow: 1,
                                padding: {
                                    right: 1
                                },
                                fullHeight: !0
                            }, i.createElement(I.Wa, {
                                margin: {
                                    x: 1
                                },
                                flexShrink: 0
                            }, i.createElement(I.i, {
                                type: I.n.FadeIn,
                                duration: I.k.Long,
                                enabled: !0
                            }, i.createElement(I.q, {
                                size: 30,
                                src: this.props.data.currentUser.profileImageURL,
                                alt: Object(f.d)("Your Avatar", "PrimeUser")
                            }))), i.createElement(I.Wa, {
                                flexGrow: 1,
                                flexShrink: 1,
                                flexDirection: I.Z.Column,
                                ellipsis: !0
                            }, i.createElement(I.yb, {
                                className: "twitch-prime-top-nav-user__username"
                            }, this.props.data.currentUser.displayName)), i.createElement(I.yb, {
                                display: I.X.Flex,
                                flexShrink: 0,
                                className: "twitch-prime-top-nav-user__expand"
                            }, i.createElement(I.nb, {
                                asset: I.ob.GlyphArrDown
                            }))))), this.renderDropdown()))
                        }
                        return i.createElement(I.yb, {
                            display: I.X.Flex,
                            fullHeight: !0,
                            padding: {
                                right: 1
                            },
                            className: "twitch-prime-top-nav-user"
                        }, i.createElement(I.Wa, {
                            display: I.X.Flex,
                            flexWrap: I.Aa.NoWrap,
                            margin: {
                                x: .5
                            },
                            alignItems: I.f.Center,
                            flexGrow: 1
                        }, i.createElement(I.z, {
                            onClick: this.onLoginClick
                        }, Object(f.d)("Log in", "PrimeUser"))))
                    }, t.prototype.renderDropdown = function() {
                        var e = N({
                                "twitch-prime-top-nav-user__dropdown": !0,
                                "twitch-prime-top-nav-user__dropdown--open": this.state.dropdownOpen
                            }),
                            t = i.createElement(I.Ta, {
                                onClick: this.onLogoutClick,
                                type: I.Ua.Alpha
                            }, i.createElement(I.yb, {
                                color: I.O.Alt,
                                display: I.X.Flex,
                                alignItems: I.f.Center,
                                padding: {
                                    x: 2,
                                    y: .5
                                }
                            }, i.createElement(I.Wa, {
                                display: I.X.Flex,
                                alignItems: I.f.Center,
                                margin: {
                                    right: 1
                                }
                            }, i.createElement(I.nb, {
                                asset: I.ob.NavLogout,
                                height: 18,
                                width: 18
                            })), i.createElement(I.W, null, Object(f.d)("Log Out", "PrimeUser"))));
                        return i.createElement(I.yb, {
                            className: e,
                            background: I.r.Base,
                            zIndex: I.bc.Below,
                            fullWidth: !0,
                            overflow: I.Za.Hidden,
                            position: I.eb.Absolute,
                            "data-test-selector": "dropdown-down",
                            borderLeft: this.state.dropdownOpen,
                            borderTop: this.state.dropdownOpen,
                            borderBottom: this.state.dropdownOpen,
                            borderRight: this.state.dropdownOpen
                        }, i.createElement(I.Wa, {
                            padding: {
                                y: 1
                            }
                        }, t))
                    }, t.prototype.reportInteractive = function() {
                        this.props.data.loading && !this.props.data.error || this.props.latencyTracking.reportInteractive()
                    }, t.prototype.renderPlaceholders = function() {
                        return i.createElement(I.Wa, null, i.createElement(I.Wa, {
                            className: "twitch-prime-top-nav-user",
                            display: I.X.Flex,
                            alignItems: I.f.Center,
                            justifyContent: I.Va.Between,
                            fullHeight: !0,
                            padding: {
                                x: 1
                            }
                        }, i.createElement(I.Wa, null, i.createElement(I.db, {
                            width: 30,
                            height: 30
                        })), i.createElement(I.yb, {
                            display: I.X.Flex,
                            flexShrink: 0,
                            className: "twitch-prime-top-nav-user__expand"
                        }, i.createElement(I.nb, {
                            asset: I.ob.GlyphArrDown,
                            type: I.pb.Placeholder
                        }))))
                    }, t
                }(i.Component)),
                P = Object(a.compose)(Object(_.a)(C), Object(m.b)("PrimeUser"))(x);
            var w = Object(k.connect)(function(e) {
                    return {
                        isLoggedIn: Object(E.f)(e)
                    }
                }, function(e) {
                    return Object(b.bindActionCreators)({
                        logout: y.f,
                        login: function() {
                            return Object(y.e)(O.a.TopNavLoginButton)
                        },
                        signup: function() {
                            return Object(y.g)(O.a.TopNavSignupButton)
                        }
                    }, e)
                })(P),
                L = (n("A1Hl"), function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        return i.createElement(I.Oa, {
                            position: I.eb.Fixed,
                            attachTop: !0,
                            fullWidth: !0
                        }, i.createElement("nav", {
                            className: "twitch-prime-top-nav"
                        }, i.createElement(I.Wa, {
                            className: "twitch-prime-top-nav__menu",
                            display: I.X.Flex,
                            alignItems: I.f.Center,
                            flexWrap: I.Aa.NoWrap,
                            fullHeight: !0,
                            justifyContent: I.Va.Between
                        }, i.createElement(I.Wa, {
                            className: "twitch-prime-top-nav__menu__left",
                            display: I.X.Flex
                        }, i.createElement(I.Oa, {
                            display: I.X.InlineFlex,
                            alignItems: I.f.Center,
                            flexShrink: 0,
                            padding: {
                                left: .5,
                                y: 1
                            }
                        }, i.createElement(I.U, {
                            to: {
                                pathname: "/prime",
                                state: {
                                    medium: v.PageviewMedium.TopNav,
                                    content: v.PageviewContent.Logo
                                }
                            },
                            className: "twitch-prime-top-nav__home-link"
                        }, i.createElement(I.nb, {
                            asset: I.ob.LogoTwitchPrime,
                            width: 90,
                            height: 40
                        }))), i.createElement(I.Wa, {
                            className: "twitch-prime-top-nav__ellipsis-button",
                            display: I.X.Flex,
                            alignItems: I.f.Center,
                            margin: {
                                left: 1
                            }
                        }, i.createElement(h.a, null, i.createElement(I.A, {
                            icon: I.ob.NavMore,
                            type: I.C.Default,
                            ariaLabel: Object(f.d)("More nav items", "PrimeTopNav"),
                            "data-a-target": "twitch-prime-top-nav__ellipsis-icon"
                        }), i.createElement(I.u, {
                            direction: I.v.Bottom,
                            tailOffset: 7,
                            size: I.w.Small,
                            "data-a-target": "overflow-menu"
                        }, i.createElement(I.Wa, {
                            padding: 1
                        }, i.createElement(h.a, {
                            display: I.X.Block
                        }, i.createElement(I.Ta, {
                            "data-target": "twitch-prime-top-nav-language-selector-click",
                            "data-a-target": "twitch-prime-top-nav-language-selector"
                        }, i.createElement(I.Wa, {
                            padding: {
                                y: .5,
                                x: 1
                            }
                        }, Object(f.d)("Language", "PrimeTopNav"))), i.createElement(I.u, {
                            size: I.w.Small,
                            direction: I.v.BottomCenter,
                            offsetY: "15px",
                            "data-target": "language-selector",
                            "data-a-target": "language-selector-menu"
                        }, i.createElement(g.a, null)))))))), i.createElement(w, null))))
                    }, t
                }(i.Component)),
                T = Object(m.b)("PrimeTopNav", {
                    autoReportInteractive: !0
                })(L),
                U = c.a.wrap(function() {
                    return n.e(170).then(n.bind(null, "eAh4"))
                }, "TwitchPrimeOffersPage"),
                F = c.a.wrap(function() {
                    return n.e(169).then(n.bind(null, "EU9V"))
                }, "TwitchPrimeSuccessPage"),
                R = c.a.wrap(function() {
                    return n.e(168).then(n.bind(null, "crDv"))
                }, "TwitchPrimeLinkingPage"),
                j = c.a.wrap(function() {
                    return n.e(167).then(n.bind(null, "CinY"))
                }, "TwitchPrimeFortnitePage"),
                W = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        return i.createElement(I.Wa, {
                            className: "prime-root " + Object(p.b)(u.a.Light),
                            fullHeight: !0,
                            display: I.X.Flex,
                            flexDirection: I.Z.Column,
                            position: I.eb.Relative
                        }, i.createElement(T, null), i.createElement(I.Oa, {
                            position: I.eb.Relative,
                            flexGrow: 1,
                            fullHeight: !0,
                            fullWidth: !0,
                            margin: {
                                top: 5
                            }
                        }, i.createElement("main", null, i.createElement(d.b, null, i.createElement(I.Wa, {
                            className: "prime-main",
                            fullHeight: !0
                        }, i.createElement(o.a, null, i.createElement(s.a, {
                            path: "/prime/fortnite/link",
                            component: R
                        }), i.createElement(s.a, {
                            path: "/prime/fortnite/success",
                            component: F
                        }), i.createElement(s.a, {
                            path: "/prime/fortnite",
                            component: j
                        }), i.createElement(s.a, {
                            path: "/prime",
                            component: U
                        })))))))
                    }, t
                }(i.Component),
                B = Object(a.compose)(l.a, Object(m.b)("PrimeRoot", {
                    autoReportInteractive: !0
                }))(W);
            n.d(t, "PrimeRoot", function() {
                return B
            })
        },
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
        "9pSj": function(e, t, n) {
            "use strict";
            var r, i = n("/MKj"),
                a = n("mrSG"),
                o = n("cr+I"),
                s = n("q1tI"),
                l = n("oJmH"),
                c = n("/7QA"),
                d = n("eJ65"),
                u = n("yR8l"),
                p = n("ht6z"),
                m = n("geRD"),
                f = n("kz7j"),
                g = n("GnwI"),
                h = n("cinR"),
                v = n("Ue10"),
                k = (n("Wu8b"), function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        return s.createElement(v.Wa, null, s.createElement(v.yb, {
                            className: "prime-offer-header",
                            borderBottom: !0,
                            background: v.r.Alt2,
                            padding: {
                                x: 1,
                                y: .5
                            }
                        }, s.createElement(v.W, {
                            bold: !0,
                            type: v.Ob.H6
                        }, Object(c.d)("Free with Prime", "PrimeOfferHeader"))), this.getNumOfUnseenOffersDisplay())
                    }, t.prototype.getNumOfUnseenOffersDisplay = function() {
                        var e = this.props.numOfUnseenOffers;
                        if (e) return s.createElement(v.yb, {
                            className: "prime-offer__new-offer-header",
                            borderBottom: !0,
                            background: v.r.Alt2,
                            padding: {
                                x: 1,
                                y: .5
                            }
                        }, s.createElement(v.Wa, {
                            fullWidth: !0,
                            display: v.X.Flex,
                            alignItems: v.f.Center
                        }, s.createElement(v.Wa, {
                            flexGrow: 1
                        }, s.createElement(v.W, {
                            bold: !0,
                            type: v.Ob.H6
                        }, Object(c.d)("New Prime Loot", "PrimeOfferHeader"))), s.createElement(v.Wa, {
                            className: "prime-offer__new-offer-header-count",
                            textAlign: v.Kb.Center
                        }, s.createElement(v.yb, {
                            className: "prime-offer__new-offer-header-count__text",
                            background: v.r.Base,
                            color: v.O.Base,
                            display: v.X.Flex,
                            alignItems: v.f.Center,
                            justifyContent: v.Va.Center
                        }, s.createElement(v.W, null, e.toString())))))
                    }, t
                }(s.Component)),
                b = Object(g.b)("PrimeOfferHeader", {
                    autoReportInteractive: !0
                })(k),
                O = n("4NwI"),
                y = n("Rjl4"),
                E = n("O4UZ");
            ! function(e) {
                e.OFFERS_FAILED_TO_UPDATE = "OFFERS_FAILED_TO_UPDATE", e.UNKNOWN = "UNKNOWN"
            }(r || (r = {}));
            var N = n("QAxy"),
                S = n("SXud"),
                _ = (n("l0e4"), n("yO+B")),
                D = function(e) {
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
                                n = o.parse(e);
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
                            return c.b.get("prime-crown-hidden-ids", [])
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
                                var r = n.primeOffers || [];
                                t.setState({
                                    numOfUnseenOffers: r.filter(t.offerIsUnseen).length
                                })
                            }
                        }, t.offerIsUnseen = function(e) {
                            var n = Object(E.i)();
                            return !(t.getHiddenCrownOfferIds().includes(e.id) || n.includes(e.id) || t.offerIsSeen(e))
                        }, t.seeOffers = function() {
                            var e = t.props.offersData;
                            if (e && !e.loading && !e.error) {
                                var n = (e.primeOffers || []).map(function(e) {
                                    return "" + e.id
                                });
                                t.updateOfferStatus(), Object(E.n)(n)
                            }
                        }, t.updateOfferStatus = function() {
                            return a.__awaiter(t, void 0, void 0, function() {
                                var e, t, n, i, o, s, l, c;
                                return a.__generator(this, function(a) {
                                    switch (a.label) {
                                        case 0:
                                            if (e = this.props.userData, !(t = e && e.currentUser && e.currentUser.id)) return [2];
                                            n = this.props.offersData && this.props.offersData.primeOffers || [], i = n.map(function(e) {
                                                return {
                                                    offerID: e.id,
                                                    status: E.a.Seen
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
                            return s.createElement(v.Wa, {
                                "data-a-target": "offers-list",
                                className: "prime-offers__list"
                            }, s.createElement(b, {
                                numOfUnseenOffers: t.state.numOfUnseenOffers
                            }), s.createElement(O.a, {
                                placement: E.d.Crown,
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
                            var r = n.primeOffers,
                                i = r && r.length;
                            Object(y.e)({
                                hasPrime: this.hasPrime(),
                                numberOfOffers: i || 0
                            })
                        }
                    }, t.prototype.render = function() {
                        var e = this.props.userData && this.props.userData.requestInfo && Object(p.a)(this.props.userData.requestInfo.countryCode),
                            t = this.props.userData && this.props.userData.currentUser && this.props.userData.currentUser.hasPrime;
                        if (!e && !t) return null;
                        var n = {
                            align: v.Sb.Center,
                            direction: v.Tb.Bottom,
                            label: ""
                        };
                        return this.state.numOfUnseenOffers > 0 ? n.label = Object(c.d)("New Prime Loot", "PrimeOffers") : n.label = Object(c.d)("Prime Loot", "PrimeOffers"), s.createElement(v.Wa, {
                            className: "prime-offers",
                            position: v.eb.Relative
                        }, s.createElement(d.a, {
                            onToggle: this.onToggleMenu,
                            openByDefault: this.showOffersByDefault(),
                            tooltipProps: n,
                            ref: this.saveCrownMenuRef
                        }, s.createElement(h.a, {
                            onHover: this.onHover
                        }, s.createElement(v.A, {
                            ariaLabel: Object(c.d)("Prime offers", "PrimeOffers"),
                            overlay: !0,
                            icon: v.ob.Crown,
                            "data-a-target": "prime-offers-icon",
                            "data-target": "prime-offers-icon"
                        })), s.createElement(v.u, {
                            direction: v.v.BottomRight,
                            size: v.w.Large,
                            offsetX: "7px"
                        }, this.renderOfferList())), this.renderUnseenOffersDisplay())
                    }, t.prototype.offerIsSeen = function(e) {
                        return e.self && e.self.status === E.a.Seen
                    }, t.prototype.renderUnseenOffersDisplay = function() {
                        var e = this.state.numOfUnseenOffers;
                        if (e && !this.state.error) return s.createElement(v.Wa, {
                            className: "prime-offers__pill",
                            position: v.eb.Absolute
                        }, s.createElement(v.i, {
                            type: v.n.BounceIn,
                            duration: v.k.Medium,
                            timing: v.m.EaseIn,
                            enabled: e > 0
                        }, s.createElement(v.bb, {
                            label: e.toString(),
                            type: v.cb.Notification
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
                I = Object(l.compose)(Object(u.a)(S, {
                    name: "offersData",
                    skip: function(e) {
                        return !e.firstPageLoaded && !e.openByDefault
                    },
                    options: function() {
                        return {
                            variables: {
                                dateOverride: Object(E.f)()
                            }
                        }
                    }
                }), Object(u.a)(_, {
                    name: "userData"
                }), Object(u.a)(N, {
                    name: "updatePrimeOfferStatus"
                }), Object(g.b)("PrimeOffers"))(D);
            var C = Object(i.connect)(function(e) {
                    return {
                        firstPageLoaded: !!e.session.firstPageLoaded
                    }
                })(I),
                x = n("6x+I"),
                P = n("KxT4"),
                w = n("j3KY"),
                L = (n("gQ2q"), n("487o")),
                T = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.reportInteractive = function() {
                            var e = t.props,
                                n = e.data,
                                r = e.latencyTracking;
                            n.loading && !n.error || r.reportInteractive()
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
                            r = !!t.currentUser && t.currentUser.hasPrime,
                            i = t.requestInfo && t.requestInfo.countryCode;
                        if (!Object(E.o)(r, i) || t.loading || n) return null;
                        var a = Object(w.e)(w.a, ""),
                            o = Object(c.d)("Twitch Prime", "BlueBar"),
                            l = s.createElement("span", null, Object(c.d)("Monthly games and in-game loot, exclusives, and access to hundreds of movies & TV shows with Prime Video.", "BlueBar")),
                            d = Object(w.e)(w.a, ""),
                            u = Object(c.d)("Start Your Free Trial", "BlueBar");
                        return t.loading || t.error || t.primePromotions && t.primePromotions.forEach(function(e) {
                            if (e) {
                                var t = e.externalURL ? e.externalURL : "";
                                switch (e.id) {
                                    case "twitch.prime.bluebar.left1":
                                        a = t, o = e.text;
                                        break;
                                    case "twitch.prime.bluebar.center1":
                                        l = s.createElement(x, {
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
                                        d = t, u = e.text
                                }
                            }
                        }), s.createElement(h.a, {
                            onHover: y.g,
                            onClick: y.f
                        }, s.createElement(v.yb, {
                            color: v.O.Base,
                            className: "blue-bar",
                            "data-a-target": "blue-bar",
                            position: v.eb.Relative,
                            fullWidth: !0,
                            zIndex: v.bc.Above
                        }, s.createElement(v.Wa, {
                            className: "blue-bar__bar",
                            display: v.X.Flex,
                            alignItems: v.f.Center,
                            justifyContent: v.Va.Between,
                            flexWrap: v.Aa.NoWrap,
                            margin: "auto",
                            padding: {
                                x: 2,
                                y: .5
                            }
                        }, s.createElement(v.Wa, {
                            display: v.X.InlineFlex,
                            alignItems: v.f.Center,
                            padding: {
                                right: .5
                            }
                        }, s.createElement(v.Wa, {
                            className: "blue-bar__logo",
                            display: v.X.InlineFlex,
                            margin: {
                                right: .5
                            },
                            flexShrink: 0
                        }, s.createElement(v.nb, {
                            asset: v.ob.Crown
                        })), s.createElement(v.W, {
                            bold: !0,
                            type: v.Ob.Span,
                            noWrap: !0,
                            fontSize: v.Ba.Size6
                        }, s.createElement(v.Oa, {
                            padding: {
                                x: 1
                            }
                        }, s.createElement("a", {
                            className: "blue-bar__link",
                            "data-a-target": "blue-bar__link",
                            href: a,
                            target: "_blank",
                            rel: "noopener noreferrer"
                        }, o))), s.createElement(v.W, {
                            className: "blue-bar__headline",
                            type: v.Ob.Span,
                            fontSize: v.Ba.Size6
                        }, l)), s.createElement(v.Wa, {
                            display: v.X.InlineFlex,
                            flexShrink: 0
                        }, s.createElement(v.W, {
                            bold: !0,
                            type: v.Ob.Span,
                            noWrap: !0,
                            fontSize: v.Ba.Size6,
                            color: v.O.Base
                        }, s.createElement("a", {
                            className: "blue-bar__link",
                            href: d,
                            target: "_blank",
                            rel: "noopener noreferrer"
                        }, u))))))
                    }, t
                }(s.Component),
                U = Object(l.compose)(Object(i.connect)(function(e) {
                    return {
                        blockBannerForGDPR: Object(P.h)(e)
                    }
                }), Object(u.a)(L, {
                    options: function() {
                        return {
                            variables: {
                                stringIds: ["twitch.prime.bluebar.left1", "twitch.prime.bluebar.center1", "twitch.prime.bluebar.right1"],
                                dateOverride: Object(E.f)()
                            }
                        }
                    }
                }), Object(g.b)("BlueBarComponent"))(T),
                F = n("z8lI");
            n.d(t, "d", function() {
                return C
            }), n.d(t, "a", function() {
                return U
            }), n.d(t, "c", function() {
                return F.a
            }), n.d(t, "e", function() {
                return E.f
            }), n.d(t, "b", function() {
                return E.c
            })
        },
        A1Hl: function(e, t, n) {},
        J4y2: function(e, t, n) {
            "use strict";
            var r = n("/MKj"),
                i = n("fvjX"),
                a = n("mrSG"),
                o = n("5e4V"),
                s = n("Pmew");

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
            var c, d = n("q1tI"),
                u = n("/7QA"),
                p = n("Ue10");
            n("d/K1");
            ! function(e) {
                e.LeftColumn = "language-selector__left-column", e.RightColumn = "language-selector__right-column"
            }(c || (c = {}));
            var m = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.renderLink = function(e) {
                        return d.createElement(p.Ta, {
                            key: e.languageCode,
                            onClick: t.handleLanguageClick,
                            "data-target": "language-selector-link",
                            "data-language": e.languageCode
                        }, d.createElement(p.Wa, {
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
                    var e = Math.floor(u.a.locales.length / 2);
                    return d.createElement(p.Wa, {
                        className: "language-selector",
                        display: p.X.Flex,
                        padding: {
                            y: 1
                        }
                    }, d.createElement("div", {
                        className: "language-selector__list language-selector__list--border-right",
                        "data-test-selector": c.LeftColumn
                    }, u.a.locales.slice(0, e).map(this.renderLink)), d.createElement("div", {
                        className: "language-selector__list",
                        "data-test-selector": c.RightColumn
                    }, u.a.locales.slice(e).map(this.renderLink)))
                }, t
            }(d.Component);
            var f = Object(r.connect)(function(e) {
                return {
                    currentUserID: e.session.user && e.session.user.id || null
                }
            }, function(e) {
                return Object(i.bindActionCreators)({
                    changeLanguage: l
                }, e)
            })(m);
            n.d(t, "a", function() {
                return f
            })
        },
        JVUd: function(e, t, n) {
            "use strict";
            var r = n("mrSG"),
                i = n("17x9"),
                a = n("q1tI"),
                o = n("/7QA");

            function s(e) {
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
                    r = function() {
                        if (window.innerHeight) return window.innerHeight;
                        if (document.documentElement.clientHeight) return document.documentElement.clientHeight;
                        return screen.height
                    }();
                return e.bottom <= 0 || e.top > r || e.right < 0 || e.left > n ? t : (t.top = Math.max(0, e.top), t.left = Math.max(0, e.left), t.right = Math.min(e.right, n), t.bottom = Math.min(e.bottom, r), t.width = t.right - t.left, t.height = t.bottom - t.top, t)
            }

            function l(e, t) {
                return function(n) {
                    return function(l) {
                        function c() {
                            var e = null !== l && l.apply(this, arguments) || this;
                            return e.state = {
                                hadImpression: !1,
                                didScroll: !1
                            }, e.logger = o.k.withCategory("with-impression-listener"), e.setRef = function(t) {
                                return e.element = t
                            }, e.registerImpressionCallback = function(t) {
                                e.reportImpression = t
                            }, e
                        }
                        return r.__extends(c, l), c.prototype.componentDidMount = function() {
                            this.scrollContext = this.context;
                            var n = this.scrollContext.registerReceiver;
                            n ? t && void 0 !== t.percentage && void 0 !== t.pixels ? this.logger.warn("<" + e + " /> should only be initialized with percentage or pixel thresholds, not both") : this.unregister = n(this) : this.logger.warn("<" + e + " /> initialized missing a <ScrollableArea /> provider")
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
                            }, a.createElement(n, r.__assign({}, this.props, e)))
                        }, c.prototype.checkVisible = function(e) {
                            return r.__awaiter(this, void 0, void 0, function() {
                                var t, n;
                                return r.__generator(this, function(r) {
                                    return this.state.hadImpression || (t = this.isVisible(e)) && (n = this.isScrolled(), this.setState({
                                        hadImpression: t,
                                        didScroll: n
                                    }), this.reportImpression && this.reportImpression(n)), [2]
                                })
                            })
                        }, c.prototype.isVisible = function(e) {
                            if (!this.element) return !1;
                            var n = s(e),
                                r = this.element.getBoundingClientRect();
                            if (r.left < n.right && r.right > n.left && r.top < n.bottom && r.bottom > n.top) {
                                if (!t || 0 === t.percentage || 0 === t.pixels) return !0;
                                var i = t.percentage,
                                    a = t.pixels,
                                    o = r.bottom - r.top,
                                    l = n.bottom - n.top,
                                    c = Math.min(n.bottom - r.top, o, l);
                                if (a) {
                                    if (o >= a) return c >= a;
                                    i = 100
                                }
                                return !i || 100 * (c / o) >= i
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
            n.d(t, "a", function() {
                return l
            })
        },
        KbPt: function(e, t, n) {},
        O4UZ: function(e, t, n) {
            "use strict";
            n.d(t, "e", function() {
                return u
            }), n.d(t, "c", function() {
                return r
            }), n.d(t, "d", function() {
                return i
            }), n.d(t, "b", function() {
                return m
            }), n.d(t, "g", function() {
                return f
            }), n.d(t, "a", function() {
                return p
            }), n.d(t, "k", function() {
                return g
            }), n.d(t, "h", function() {
                return h
            }), n.d(t, "i", function() {
                return v
            }), n.d(t, "n", function() {
                return k
            }), n.d(t, "p", function() {
                return b
            }), n.d(t, "o", function() {
                return y
            }), n.d(t, "f", function() {
                return E
            }), n.d(t, "m", function() {
                return N
            }), n.d(t, "l", function() {
                return S
            }), n.d(t, "j", function() {
                return _
            });
            var r, i, a = n("TSYQ"),
                o = n("cr+I"),
                s = n("q1tI"),
                l = n("/7QA"),
                c = n("ht6z"),
                d = n("Ue10"),
                u = {
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
            var p, m = {
                    UNKNOWN_ERROR: "UNKNOWN_ERROR",
                    OFFER_ALREADY_CLAIMED: "OFFER_ALREADY_CLAIMED",
                    UNABLE_TO_SPEND: "UNABLE_TO_SPEND",
                    TOO_MANY_RECENT_SPENDS: "TOO_MANY_RECENT_SPENDS"
                },
                f = function(e) {
                    switch (e || m.UNKNOWN_ERROR) {
                        case m.OFFER_ALREADY_CLAIMED:
                            return Object(l.d)("Oh no! Unable to claim. Another linked Twitch account may have already claimed this content. Click <x:link>here to learn more</x:link>.", {
                                "x:link": function(e) {
                                    return s.createElement(d.U, {
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
                            return Object(l.d)("Something has gone wrong. Please try again later.", "PrimeError")
                    }
                };
            ! function(e) {
                e.Seen = "SEEN", e.Unseen = "UNSEEN", e.Claimed = "CLAIMED"
            }(p || (p = {}));
            var g = function(e) {
                    return e === r.Vertical
                },
                h = function(e, t) {
                    var n = t === r.Horizontal ? "horizontal" : "vertical";
                    return a(e, e + "--" + n)
                },
                v = function() {
                    return O("seenOffers")
                },
                k = function(e) {
                    l.m.set("seenOffers", e)
                },
                b = function(e, t) {
                    return (e && (e.priority || 0 === e.priority) ? e.priority : 99999) - (t && (t.priority || 0 === t.priority) ? t.priority : 99999)
                },
                O = function(e) {
                    return l.m.get(e, [])
                },
                y = function(e, t) {
                    return void 0 !== e && void 0 !== t && (!e && Object(c.a)(t))
                },
                E = function() {
                    var e = location.search,
                        t = o.parse(e);
                    return t && t.dateOverride || void 0
                },
                N = function(e) {
                    return e && !e.loading && !e.error && null !== e.currentUser && e.currentUser.hasPrime
                },
                S = function(e) {
                    return e && e.loading
                },
                _ = function(e) {
                    return D().includes(e)
                },
                D = function() {
                    return l.b.get("prime_gift_experiment_offer_ids", [])
                }
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
        Oowd: function(e, t) {
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
            var r = /Android/i,
                i = /chrome/i,
                a = /webOS/i,
                o = /iPhone/i,
                s = /iPad/i,
                l = /iPod/i,
                c = /BlackBerry/i,
                d = /Windows Phone/i,
                u = /Mobile/i;

            function p(e) {
                return m(e) || a.test(e) || o.test(e) || s.test(e) || l.test(e) || c.test(e) || d.test(e) || u.test(e)
            }

            function m(e) {
                return r.test(e)
            }

            function f(e) {
                return i.test(e)
            }
        },
        RfIv: function(e, t, n) {
            "use strict";
            var r;
            n.d(t, "a", function() {
                    return r
                }),
                function(e) {
                    e.Game = "Game", e.InGameLoot = "InGameLoot", e.All = "All"
                }(r || (r = {}))
        },
        Rjl4: function(e, t, n) {
            "use strict";
            n.d(t, "b", function() {
                return s
            }), n.d(t, "a", function() {
                return l
            }), n.d(t, "c", function() {
                return p
            }), n.d(t, "d", function() {
                return m
            }), n.d(t, "e", function() {
                return f
            }), n.d(t, "q", function() {
                return g
            }), n.d(t, "r", function() {
                return h
            }), n.d(t, "l", function() {
                return v
            }), n.d(t, "i", function() {
                return k
            }), n.d(t, "m", function() {
                return b
            }), n.d(t, "k", function() {
                return O
            }), n.d(t, "j", function() {
                return y
            }), n.d(t, "p", function() {
                return E
            }), n.d(t, "n", function() {
                return _
            }), n.d(t, "o", function() {
                return D
            }), n.d(t, "h", function() {
                return I
            }), n.d(t, "g", function() {
                return C
            }), n.d(t, "f", function() {
                return x
            });
            var r, i, a, o, s, l, c = n("/7QA"),
                d = n("2xye"),
                u = n("O4UZ");

            function p(e) {
                c.o.track(d.SpadeEventType.CrownInteraction, {
                    has_prime: e.hasPrime,
                    action: r.Hover,
                    user_agent: navigator.userAgent
                })
            }

            function m(e, t) {
                c.o.track(d.SpadeEventType.CrownInteraction, {
                    has_prime: t.hasPrime,
                    number_of_offers: t.numberOfOffers,
                    action: e ? r.Open : r.Close,
                    user_agent: navigator.userAgent
                })
            }

            function f(e) {
                c.o.track(d.SpadeEventType.CrownInteraction, {
                    has_prime: e.hasPrime,
                    number_of_offers: e.numberOfOffers,
                    action: r.OffersLoaded,
                    user_agent: navigator.userAgent
                })
            }

            function g(e) {
                S(e, i.Click, o.StartYourFreeTrial)
            }

            function h(e) {
                S(e, i.Hover, o.StartYourFreeTrial)
            }

            function v(e, t) {
                S(t, i.Click, e ? o.MoreInfo : o.CloseInfo)
            }

            function k(e, t) {
                N(e, i.Click, t)
            }

            function b(e) {
                S(e, i.Hover, o.MoreInfo)
            }

            function O(e) {
                S(e, i.Hover, o.CloseInfo)
            }

            function y(e, t) {
                N(e, i.Hover, t)
            }

            function E(e) {
                S(e, i.Impression, o.Offer)
            }

            function N(e, t, n) {
                var r;
                switch (n) {
                    case u.e.CLAIM_CODE:
                        r = o.GetCode;
                        break;
                    case u.e.EXTERNAL_OFFER:
                        r = o.LearnMore;
                        break;
                    case u.e.DIRECT_ENTITLEMENT:
                        r = o.ClaimOffer
                }
                r && S(e, t, r)
            }

            function S(e, t, n) {
                c.o.track(d.SpadeEventType.PrimeOfferInteraction, {
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

            function _(e) {
                c.o.track(d.SpadeEventType.PrimeLootPagePageview, {
                    reftag: e.reftag,
                    user_agent: navigator.userAgent
                })
            }

            function D(e) {
                c.o.track(d.SpadeEventType.PrimeLootPageTryPrimeClick, {
                    button_position: e.buttonPosition,
                    user_agent: navigator.userAgent
                })
            }

            function I() {
                P(a.Impression)
            }

            function C() {
                P(a.Hover)
            }

            function x() {
                P(a.Click)
            }

            function P(e) {
                c.o.track(d.SpadeEventType.PrimeBlueBarInteraction, {
                    client_time: Date.now(),
                    action: e
                })
            }! function(e) {
                e.Open = "click_open", e.Close = "click_close", e.Hover = "hover", e.OffersLoaded = "offers_loaded"
            }(r || (r = {})),
            function(e) {
                e.Hover = "hover", e.Click = "click", e.Impression = "impression"
            }(i || (i = {})),
            function(e) {
                e.Hover = "hover", e.Click = "click", e.Impression = "impression"
            }(a || (a = {})),
            function(e) {
                e.StartYourFreeTrial = "start_your_free_trial", e.MoreInfo = "more_info", e.CloseInfo = "close_info", e.ClaimOffer = "claim_offer", e.LearnMore = "learn_more", e.GetCode = "get_code", e.Offer = "offer"
            }(o || (o = {})),
            function(e) {
                e.TopNav = "top-nav", e.CenterBanner = "center-banner", e.CenterFooter = "center-footer"
            }(s || (s = {})),
            function(e) {
                e.Wide = "wide", e.Narrow = "narrow"
            }(l || (l = {}))
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
        WGf9: function(e, t, n) {},
        Wu8b: function(e, t, n) {},
        bq0i: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return l
            });
            var r, i = n("mrSG"),
                a = n("q1tI"),
                o = n("f00E"),
                s = n("Ue10");
            ! function(e) {
                e.BalloonInsideClickDetector = "balloon-inside-click-detector", e.MouseEnterDetector = "toggle-balloon-wrapper__mouse-enter-detector"
            }(r || (r = {}));
            var l = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        showBalloon: !!t.props.openByDefault,
                        hasInteracted: !!t.props.openByDefault
                    }, t.toggleBalloonId = Object(o.a)(), t.handleButtonClick = function() {
                        t.setState(function(e) {
                            return {
                                showBalloon: !e.showBalloon,
                                hasInteracted: !0
                            }
                        }, function() {
                            t.props.onToggle && t.props.onToggle(!t.state.showBalloon)
                        })
                    }, t.handleGlobalClick = function(e) {
                        e.target.matches('[data-toggle-balloon-id="' + t.toggleBalloonId + '"] *') || t.hideBalloon()
                    }, t.handleInsideBalloonClick = function() {
                        t.hideBalloon()
                    }, t.handleMouseEnter = function() {
                        t.state.hasInteracted || t.setState({
                            hasInteracted: !0
                        })
                    }, t
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.openByDefault && document.addEventListener("click", this.handleGlobalClick, !0)
                }, t.prototype.componentWillUpdate = function(e, t) {
                    this.state.showBalloon !== t.showBalloon && (t.showBalloon ? document.addEventListener("click", this.handleGlobalClick, !0) : document.removeEventListener("click", this.handleGlobalClick, !0))
                }, t.prototype.componentWillUnmount = function() {
                    document.removeEventListener("click", this.handleGlobalClick, !0)
                }, t.prototype.render = function() {
                    var e = a.Children.toArray(this.props.children);
                    if (2 !== e.length) throw new Error("ToggleBalloonWrapper should only be given two children: a clickable and a Balloon");
                    var t = e[0],
                        n = e[1];
                    if (n.type !== s.u) throw new Error("ToggleBalloonWrapper needs a Balloon as its second child element");
                    var o = a.cloneElement(t, {
                            onClick: this.handleButtonClick
                        }),
                        l = null;
                    (this.state.hasInteracted || this.props.alwaysMountBalloonContent) && (l = a.cloneElement(n, {
                        show: this.state.showBalloon
                    }), this.props.hideBalloonOnInsideClick && (l = a.createElement("div", {
                        "data-test-selector": r.BalloonInsideClickDetector,
                        onClick: this.handleInsideBalloonClick
                    }, l)));
                    var c = o;
                    return this.props.tooltipProps && (c = a.createElement(s.Rb, i.__assign({}, this.props.tooltipProps), o)), a.createElement(s.Wa, {
                        "data-toggle-balloon-id": this.toggleBalloonId,
                        display: this.props.display,
                        position: s.eb.Relative
                    }, a.createElement("div", {
                        style: {
                            display: "inherit"
                        },
                        onMouseEnter: this.handleMouseEnter,
                        "data-test-selector": r.MouseEnterDetector
                    }, c), l)
                }, t.prototype.toggleBalloon = function(e) {
                    void 0 === e && (e = !this.state.showBalloon), this.setState({
                        showBalloon: e,
                        hasInteracted: !0
                    })
                }, t.prototype.hideBalloon = function() {
                    var e = this;
                    this.setState({
                        showBalloon: !1
                    }, function() {
                        e.props.onToggle && e.props.onToggle(!0)
                    })
                }, t
            }(a.Component)
        },
        cinR: function(e, t, n) {
            "use strict";
            var r, i = n("mrSG"),
                a = n("q1tI");
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
        "d/K1": function(e, t, n) {},
        eJ65: function(e, t, n) {
            "use strict";
            var r = n("bq0i");
            n.d(t, "a", function() {
                return r.a
            })
        },
        gQ2q: function(e, t, n) {},
        ht6z: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return i
            });
            var r = n("/7QA");

            function i(e) {
                var t = r.b.get("prime_blocked_regions", []);
                return !!e && !t.includes(e.toUpperCase())
            }
        },
        iuxt: function(e, t, n) {},
        j3KY: function(e, t, n) {
            "use strict";
            n.d(t, "c", function() {
                return r
            }), n.d(t, "a", function() {
                return i
            }), n.d(t, "d", function() {
                return a
            }), n.d(t, "b", function() {
                return o
            }), n.d(t, "e", function() {
                return l
            });
            var r = "sm_tw_tup_ntp_t_all",
                i = "sm_tw_thp_blue_t_all",
                a = "sm_w_tup_ntp_t_c",
                o = "sm_om_tpltp",
                s = n("/7QA").k.withCategory("PrimeUtilsLogger");

            function l(e, t) {
                return function(e, t, n) {
                    var r = "";
                    try {
                        r = btoa(n)
                    } catch (e) {
                        s.error(e, "Could not decode location pathname substring for redirect")
                    }
                    return r ? e + "?ref_=" + t + "&redirectRoute=" + r : e + "?ref_=" + t
                }("https://twitch.amazon.com/prime/country", e, t)
            }
        },
        l0e4: function(e, t, n) {},
        oj5W: function(e, t, n) {},
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
            var r = n("mrSG"),
                i = n("q1tI"),
                a = n("GnwI"),
                o = n("O4UZ"),
                s = n("Ue10"),
                l = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        var e = Object(o.g)(this.props.errorType);
                        return i.createElement(s.yb, {
                            background: s.r.Alt2,
                            display: s.X.Flex,
                            justifyContent: s.Va.Center,
                            padding: {
                                y: 1
                            },
                            margin: {
                                bottom: 1
                            },
                            textAlign: s.Kb.Center,
                            "data-test-selector": this.props.testTarget,
                            "data-a-target": this.props.testTarget
                        }, i.createElement(s.W, {
                            type: s.Ob.H4,
                            align: s.Yb.Middle
                        }, i.createElement(s.yb, {
                            padding: 1,
                            display: s.X.InlineFlex,
                            flexGrow: 1,
                            flexWrap: s.Aa.NoWrap,
                            alignItems: s.f.Center,
                            textAlign: s.Kb.Left,
                            fontSize: this.props.fontSize ? this.props.fontSize : s.Ba.Size5,
                            "data-a-target": "prime-error-glitch"
                        }, i.createElement(s.Wa, {
                            margin: {
                                right: 1
                            },
                            display: s.X.InlineFlex,
                            flexGrow: 1,
                            flexWrap: s.Aa.NoWrap,
                            alignItems: s.f.Center
                        }, i.createElement(s.nb, {
                            asset: s.ob.DeadGlitch,
                            type: s.pb.Alert,
                            width: 20,
                            height: 20
                        })), i.createElement(s.W, {
                            type: s.Ob.P
                        }, e))))
                    }, t
                }(i.Component),
                c = Object(a.b)("PrimeError", {
                    autoReportInteractive: !0
                })(l);
            n.d(t, "a", function() {
                return c
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