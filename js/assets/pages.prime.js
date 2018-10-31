(window.webpackJsonp = window.webpackJsonp || []).push([
    [91], {
        "+6S+": function(e, t, n) {},
        "+Mtq": function(e, t, n) {},
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
                o = n("q1tI"),
                a = n("oJmH"),
                s = n("/7QA"),
                l = n("8/mp"),
                c = n("yR8l"),
                u = n("GnwI"),
                d = n("Ue10"),
                p = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        var e = Object(s.d)("You'll get characters, vehicles, skins, and boosts for games like {hearthstone} and {smite}, plus surprises like a rotating selection of indie games.", {
                            hearthstone: o.createElement(d.W, {
                                italic: !0,
                                type: d.Sb.Span
                            }, Object(s.d)("Hearthstone", "PrimeEmpty")),
                            smite: o.createElement(d.W, {
                                italic: !0,
                                type: d.Sb.Span
                            }, Object(s.d)("Smite", "PrimeEmpty"))
                        }, "PrimeEmpty");
                        return o.createElement(d.Xa, {
                            className: "prime-empty",
                            margin: 2
                        }, o.createElement(d.Xa, {
                            textAlign: d.Ob.Center,
                            margin: 2
                        }, o.createElement("img", {
                            className: "prime-empty__image",
                            src: "https://m.media-amazon.com/images/G/01/sm/landing/Trunk_w_Star_transparent._V530838660_.png",
                            alt: Object(s.d)("Prime Treasure Chest", "PrimeEmpty")
                        })), o.createElement(d.W, {
                            type: d.Sb.P,
                            bold: !0
                        }, Object(s.d)("Free in-game loot every month, plus surprises", "PrimeEmpty")), o.createElement("div", null, e))
                    }, t
                }(o.Component),
                m = Object(u.b)("PrimeEmpty", {
                    autoReportInteractive: !0
                })(p),
                f = n("6x+I"),
                h = n("geRD"),
                g = n("JVUd"),
                v = n("cinR"),
                b = n("Rjl4"),
                k = n("O4UZ"),
                y = n("cx1G"),
                O = (n("5ZOr"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onClick = function(e) {
                            Object(b.i)({
                                offerID: t.props.offerID,
                                externalURL: t.props.externalURL,
                                hasPrime: !0,
                                index: t.props.index
                            }, t.props.offerType), t.props.claimCallback && t.props.offerType !== k.e.EXTERNAL_OFFER && !t.props.externalURL && t.props.claimCallback(e)
                        }, t.onHover = function() {
                            Object(b.j)({
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
                        var e = this.props.orientation || k.c.Default,
                            t = k.l(e),
                            n = k.h("prime-claim-button", e);
                        return o.createElement(d.Xa, {
                            fullWidth: !0,
                            className: n,
                            display: t ? d.X.Block : d.X.InlineBlock
                        }, this.renderClaimButton())
                    }, t.prototype.renderClaimButton = function() {
                        var e = this.props,
                            t = e.externalURL,
                            n = e.claiming,
                            r = e.offerType,
                            i = this.getButtonText();
                        if (t || r === k.e.EXTERNAL_OFFER) return o.createElement(v.a, {
                            onHover: this.onHover
                        }, o.createElement(d.z, {
                            fullWidth: !0,
                            linkTo: t,
                            targetBlank: !0,
                            onClick: this.onClick,
                            "data-a-target": "prime-claim-button"
                        }, i));
                        var a = o.createElement(v.a, {
                            onHover: this.onHover
                        }, o.createElement(d.z, {
                            fullWidth: !0,
                            state: n ? d.E.Loading : d.E.Default,
                            disabled: n,
                            linkTo: t,
                            onClick: this.onClick,
                            "data-a-target": "prime-claim-button",
                            icon: this.isGifted() ? d.rb.Gift : void 0
                        }, i));
                        return o.createElement(d.Xa, {
                            position: d.hb.Relative
                        }, a)
                    }, t.prototype.getButtonText = function() {
                        var e = Object(s.d)("Learn More", "PrimeClaimButton");
                        if (this.props.externalURL) return e;
                        switch (this.props.offerType) {
                            case k.e.CLAIM_CODE:
                                return Object(s.d)("Get Code", "PrimeClaimButton");
                            case k.e.EXTERNAL_OFFER:
                                return e;
                            case k.e.DIRECT_ENTITLEMENT:
                            default:
                                return this.isGifted() ? Object(s.d)("Claim Gift", "PrimeClaimButton") : Object(s.d)("Claim Offer", "PrimeClaimButton")
                        }
                    }, t
                }(o.Component)),
                C = Object(a.compose)(Object(c.a)(y, {
                    skip: function(e) {
                        return !Object(k.k)(e.offerID)
                    },
                    options: function(e) {
                        return {
                            variables: {
                                offerID: e.offerID
                            }
                        }
                    }
                }), Object(u.b)("PrimeClaimButton"))(O),
                S = (n("KbPt"), function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.toggleShowDescription = function() {
                            var e = !n.state.showDescription;
                            Object(b.l)(e, {
                                offerID: n.props.offerID,
                                externalURL: n.props.externalURL,
                                hasPrime: n.props.hasPrime,
                                index: n.props.index
                            }), n.setState({
                                showDescription: e
                            })
                        }, n.onHover = function() {
                            n.state.showDescription ? Object(b.k)({
                                offerID: n.props.offerID,
                                externalURL: n.props.externalURL,
                                hasPrime: n.props.hasPrime,
                                index: n.props.index
                            }) : Object(b.m)({
                                offerID: n.props.offerID,
                                externalURL: n.props.externalURL,
                                hasPrime: n.props.hasPrime,
                                index: n.props.index
                            })
                        }, n.renderVerticalDescriptionBlock = function() {
                            return o.createElement(d.Cb, {
                                className: "prime-claim-description__body",
                                background: d.r.Alt2,
                                border: !0,
                                position: d.hb.Relative
                            }, n.renderDescription())
                        }, n.renderHorizontalDescriptionBlock = function() {
                            return o.createElement(d.Cb, {
                                className: "prime-claim-description__body",
                                background: d.r.Base,
                                border: !0,
                                position: d.hb.Absolute,
                                attachTop: !0,
                                attachLeft: !0,
                                attachRight: !0,
                                margin: {
                                    right: 1,
                                    top: .5
                                },
                                overflow: d.cb.Scroll
                            }, n.renderDescription())
                        }, n.renderDescription = function() {
                            return o.createElement(d.Xa, {
                                "data-a-target": "prime-claim-description-body",
                                margin: {
                                    bottom: 2
                                },
                                padding: 1
                            }, o.createElement(f, {
                                source: n.props.description || ""
                            }))
                        }, n.state = {
                            showDescription: !1
                        }, n
                    }
                    return i.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        var e = this.props.orientation || k.c.Default,
                            t = Object(k.h)("prime-claim-description", e);
                        return o.createElement(d.Xa, {
                            fullWidth: !0,
                            className: t,
                            margin: {
                                top: 1
                            }
                        }, o.createElement(v.a, {
                            onHover: this.onHover
                        }, o.createElement(d.z, {
                            "data-a-target": "prime-claim-description-button",
                            fullWidth: !0,
                            type: d.F.Hollow,
                            onClick: this.toggleShowDescription
                        }, this.getDescriptionButtonText())), this.getDescriptionBlock(e))
                    }, t.prototype.getDescriptionButtonText = function() {
                        return this.state.showDescription ? Object(s.d)("Close Info", "PrimeClaimDescription") : Object(s.d)("More Info", "PrimeClaimDescription")
                    }, t.prototype.getDescriptionBlock = function(e) {
                        var t = null,
                            n = Object(k.l)(e);
                        return this.state.showDescription && (t = n ? this.renderVerticalDescriptionBlock() : this.renderHorizontalDescriptionBlock()), t
                    }, t
                }(o.Component)),
                E = Object(u.b)("PrimeClaimDescription", {
                    autoReportInteractive: !0
                })(S),
                N = n("fvjX"),
                _ = n("aCAx"),
                D = n("kRBY"),
                I = n("ZS2+"),
                w = n("cZKs"),
                x = I.a.wrap(function() {
                    return Promise.all([n.e(0), n.e(84)]).then(n.bind(null, "+Zk8"))
                }, "GiftForm"),
                P = function(e) {
                    function t(t) {
                        return e.call(this, t) || this
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        return o.createElement(d.Xa, {
                            className: "prime-gift-modal",
                            position: d.hb.Relative,
                            "data-a-target": "passport-modal"
                        }, o.createElement(x, {
                            action: this.props.action,
                            offerID: this.props.offerID,
                            offer: this.props.offer,
                            getGiftRecipientList: this.props.getGiftRecipientList,
                            updateGiftRecipientList: this.props.updateGiftRecipientList
                        }), o.createElement(w.a, {
                            closeOnBackdropClick: !0,
                            onClose: this.props.onClose
                        }))
                    }, t
                }(o.Component),
                T = Object(u.b)("PrimeGiftModal", {
                    autoReportInteractive: !0
                })(P),
                R = function(e) {
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
                        return o.createElement(d.z, {
                            type: d.F.Hollow,
                            icon: d.rb.Gift,
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
                }(o.Component),
                L = Object(a.compose)(Object(u.b)("PrimeGiftButton", {
                    autoReportInteractive: !0
                }))(R);
            var U = Object(r.connect)(function(e) {
                    return {
                        isLoggedIn: Object(D.f)(e)
                    }
                }, function(e, t) {
                    return Object(N.bindActionCreators)({
                        giftPrimeOffer: function(e, n) {
                            return Object(_.d)(T, {
                                offerID: t.offerID,
                                offer: t.offer,
                                getGiftRecipientList: e,
                                updateGiftRecipientList: n
                            })
                        }
                    }, e)
                })(L),
                F = n("9pSj"),
                j = n("j3KY"),
                B = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onClick = function() {
                            Object(b.q)({
                                offerID: t.props.offerID,
                                externalURL: t.getLink(),
                                hasPrime: !1,
                                index: t.props.index
                            })
                        }, t.onHover = function() {
                            Object(b.r)({
                                offerID: t.props.offerID,
                                externalURL: t.getLink(),
                                hasPrime: !1,
                                index: t.props.index
                            })
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        return o.createElement(d.Xa, {
                            className: "prime-upsell-button",
                            margin: {
                                top: 2,
                                bottom: 1
                            }
                        }, o.createElement(v.a, {
                            onHover: this.onHover
                        }, o.createElement(d.z, {
                            fullWidth: !0,
                            linkTo: this.getLink(),
                            targetBlank: !0,
                            onClick: this.onClick
                        }, Object(s.d)("Start Your Free Trial", "PrimeUpsellButton"))))
                    }, t.prototype.getLink = function() {
                        if (this.props.externalURL) return this.props.externalURL;
                        var e = (this.props.orientation || F.b.Default) === F.b.Vertical ? j.d : j.b,
                            t = this.props.externalReftag || e,
                            n = window.location.pathname.substring(1);
                        return Object(j.e)(t, n)
                    }, t
                }(o.Component),
                X = Object(u.b)("PrimeUpsellButton", {
                    autoReportInteractive: !0
                })(B),
                G = n("zUQL"),
                W = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return i.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.data.loading && !this.props.data.error || this.props.latencyTracking.reportInteractive()
                    }, t.prototype.componentDidUpdate = function() {
                        this.props.data.loading && !this.props.data.error || this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        var e = this.props.orientation || k.c.Default,
                            t = Object(k.h)("prime-claim", e);
                        return o.createElement(d.Xa, {
                            className: t,
                            margin: {
                                bottom: 1
                            }
                        }, this.getCallToAction(), this.getClaimDescriptionSection())
                    }, t.prototype.getCallToAction = function() {
                        var e = this.props.data;
                        return Object(k.n)(e) || this.props.isGifted ? Object(k.n)(e) && Object(k.k)(this.props.offerID) ? o.createElement(d.Xa, {
                            display: d.X.Flex,
                            alignItems: d.f.Center
                        }, o.createElement(d.Xa, {
                            fullWidth: !0,
                            display: d.X.Flex,
                            margin: {
                                right: 1
                            }
                        }, this.renderPrimeClaimButton()), o.createElement(d.Xa, {
                            fullWidth: !0,
                            display: d.X.Flex,
                            margin: {
                                left: 1
                            }
                        }, o.createElement(U, {
                            offerID: this.props.offerID,
                            offer: this.props.offer,
                            toggleCrownMenu: this.props.toggleCrownMenu
                        }))) : this.renderPrimeClaimButton() : o.createElement(X, {
                            externalReftag: this.props.externalReftag,
                            externalURL: this.props.externalURL,
                            offerID: this.props.offerID,
                            index: this.props.index,
                            orientation: this.props.orientation
                        })
                    }, t.prototype.getClaimDescriptionSection = function() {
                        if (this.props.offerType === k.e.EXTERNAL_OFFER || this.props.externalURL) return null;
                        var e = this.props.data;
                        return o.createElement(E, {
                            description: this.props.offerDescription,
                            offerID: this.props.offerID,
                            externalURL: this.props.externalURL,
                            index: this.props.index,
                            orientation: this.props.orientation,
                            hasPrime: Object(k.n)(e)
                        })
                    }, t.prototype.renderPrimeClaimButton = function() {
                        return o.createElement(C, {
                            offerType: this.props.offerType,
                            offerID: this.props.offerID,
                            claimCallback: this.props.claimCallback,
                            claiming: this.props.claiming,
                            orientation: this.props.orientation,
                            externalURL: this.props.externalURL,
                            index: this.props.index
                        })
                    }, t
                }(o.Component),
                A = Object(a.compose)(Object(c.a)(G), Object(u.b)("PrimeInstructions"))(W),
                M = n("z8lI"),
                q = (n("25vm"), function(e) {
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
                        return o.createElement(d.Xa, {
                            className: "copy-button copy-btn",
                            display: d.X.Flex
                        }, o.createElement(d.Pa, {
                            className: "copy-button__btn"
                        }, o.createElement(d.z, {
                            onClick: this.copy,
                            type: this.state.copied ? d.F.Success : d.F.Default
                        }, e)), o.createElement("input", {
                            className: "copy-button__copy-input",
                            ref: this.setRef,
                            value: this.props.clipboardText,
                            readOnly: !0
                        }))
                    }, t
                }(o.Component)),
                H = Object(N.compose)(Object(u.b)("CopyButton"))(q),
                V = function(e) {
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
                        return this.state && this.state.value ? o.createElement(d.Xa, {
                            className: "copyable-item",
                            display: d.X.Flex,
                            flexGrow: 1
                        }, o.createElement(d.Xa, {
                            flexGrow: 1
                        }, o.createElement(d.Ra, {
                            type: d.Ta.Text,
                            onChange: this.onChange,
                            value: this.state.value,
                            disabled: this.props.disabled,
                            readOnly: this.props.readOnly
                        })), o.createElement(d.Xa, null, o.createElement(H, {
                            clipboardText: this.state.value
                        }))) : null
                    }, t
                }(o.Component),
                z = Object(N.compose)(Object(u.b)("CopyableItem"))(V),
                Q = (n("Sb+K"), function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.getClaimInstructions = function() {
                            return o.createElement(d.bc, null, o.createElement(f, {
                                source: n.props.claimInstructions || "",
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
                            }))
                        }, n.renderVerticalLayout = function() {
                            return o.createElement(d.Cb, {
                                className: "prime-claim-instructions prime-claim-instructions--vertical",
                                "data-a-target": "prime-claim-instructions--vertical",
                                background: d.r.Alt2,
                                border: !0,
                                padding: 1,
                                fontSize: d.Ca.Size6
                            }, n.getClaimInstructions())
                        }, n.renderHorizontalLayout = function() {
                            return o.createElement(d.Cb, {
                                fullWidth: !0,
                                className: "prime-claim-instructions prime-claim-instructions--horizontal",
                                margin: {
                                    top: 1
                                }
                            }, o.createElement(d.Xa, {
                                fullWidth: !0,
                                justifyContent: d.Wa.Center,
                                textAlign: d.Ob.Center
                            }, o.createElement(d.U, {
                                onClick: n.toggleShowDescription
                            }, n.getDescriptionButtonText())), n.state.showDescription && o.createElement(d.Cb, {
                                className: "prime-claim-instructions__body",
                                "data-a-target": "prime-claim-instructions--horizontal",
                                border: !0,
                                position: d.hb.Absolute,
                                padding: 1,
                                background: d.r.Alt,
                                overflow: d.cb.Scroll,
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
                        var e = this.props.orientation || k.c.Default;
                        return Object(k.l)(e) ? this.renderVerticalLayout() : this.renderHorizontalLayout()
                    }, t
                }(o.Component)),
                Y = Object(u.b)("PrimeClaimInstructions", {
                    autoReportInteractive: !0
                })(Q),
                K = n("UFVY"),
                $ = (n("PCo6"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.renderGiftRedeemedButton = function(e) {
                            if (!t.props.data || t.props.data.loading || t.props.data.error) return o.createElement(d.gb, null);
                            var n = t.props.data.currentUser && t.props.data.currentUser.primeGift;
                            return o.createElement(d.Cb, {
                                fullWidth: !0,
                                display: d.X.Flex,
                                justifyContent: d.Wa.Center,
                                margin: {
                                    bottom: e,
                                    right: .5
                                },
                                className: "prime-redeem__confirmation",
                                alignItems: d.f.Center,
                                borderRadius: d.x.Medium
                            }, o.createElement(d.W, {
                                type: d.Sb.Span,
                                align: d.cc.Middle,
                                color: d.O.Overlay
                            }, o.createElement(d.Xa, {
                                display: d.X.InlineFlex,
                                flexWrap: d.Ba.NoWrap,
                                alignItems: d.f.Center,
                                "data-test-target": "prime-redeem-check",
                                "data-a-target": "prime-redeem-check"
                            }, o.createElement(d.Xa, {
                                margin: {
                                    right: 1
                                },
                                display: d.X.InlineFlex,
                                flexWrap: d.Ba.NoWrap,
                                padding: {
                                    y: .5
                                },
                                alignItems: d.f.Center
                            }, o.createElement(d.qb, {
                                asset: n ? d.rb.Gift : d.rb.Check,
                                width: 20,
                                height: 20
                            })), n ? Object(s.d)("Gift Claimed", "PrimeRedeem") : Object(s.d)("Claimed", "PrimeRedeem"))))
                        }, t.getPrimeClaimInstructions = function() {
                            return o.createElement(Y, {
                                claimInstructions: t.props.claimInstructions || "",
                                orientation: t.props.orientation
                            })
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        var e = this.props.orientation || k.c.Default,
                            t = Object(k.h)("prime-redeem", e);
                        return o.createElement(d.Xa, {
                            className: t
                        }, this.getCodeOrConfirmation(e), this.getPrimeClaimInstructions())
                    }, t.prototype.getCodeOrConfirmation = function(e) {
                        var t = Object(k.l)(e);
                        if (this.props.code && this.props.deliveryMethod === k.e.CLAIM_CODE) return o.createElement(d.Xa, {
                            "data-a-target": "prime-redeem-code-container"
                        }, o.createElement(z, {
                            initialText: this.props.code,
                            readOnly: !0,
                            textCenter: !0
                        }));
                        var n = t ? 1 : 0;
                        return Object(k.k)(this.props.offerID) ? this.props.isPrime ? o.createElement(d.Xa, {
                            display: d.X.Flex
                        }, this.renderGiftRedeemedButton(n), o.createElement(d.Xa, {
                            fullWidth: !0,
                            display: d.X.Flex,
                            margin: {
                                left: .5,
                                bottom: n
                            }
                        }, o.createElement(U, {
                            offerID: this.props.offerID,
                            offer: this.props.offer,
                            toggleCrownMenu: this.props.toggleCrownMenu
                        }))) : this.renderGiftRedeemedButton(n) : o.createElement(d.Cb, {
                            display: d.X.Flex,
                            justifyContent: d.Wa.Center,
                            margin: {
                                bottom: n
                            },
                            padding: {
                                y: n
                            },
                            className: "prime-redeem__confirmation",
                            borderRadius: d.x.Medium
                        }, o.createElement(d.W, {
                            type: t ? d.Sb.H4 : d.Sb.H6,
                            align: d.cc.Middle,
                            color: d.O.Overlay
                        }, o.createElement(d.Xa, {
                            display: d.X.InlineFlex,
                            flexGrow: 1,
                            flexWrap: d.Ba.NoWrap,
                            alignItems: d.f.Center,
                            "data-test-target": "prime-redeem-check",
                            "data-a-target": "prime-redeem-check",
                            padding: {
                                left: n
                            }
                        }, o.createElement(d.Xa, {
                            margin: {
                                right: 1
                            },
                            display: d.X.InlineFlex,
                            flexGrow: 1,
                            flexWrap: d.Ba.NoWrap,
                            padding: {
                                y: .5
                            },
                            alignItems: d.f.Center
                        }, o.createElement(d.qb, {
                            asset: d.rb.Check,
                            width: 20,
                            height: 20
                        })), Object(s.d)("Added To Your Twitch Account", "PrimeRedeem"))))
                    }, t
                }(o.Component)),
                J = Object(a.compose)(Object(u.b)("PrimeRedeem", {
                    autoReportInteractive: !0
                }), Object(c.a)(K, {
                    skip: function(e) {
                        return !Object(k.k)(e.offerID)
                    },
                    options: function(e) {
                        return {
                            variables: {
                                offerID: e.offerID
                            }
                        }
                    }
                }))($),
                Z = n("SStD"),
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
                                a = r && r.categories && r.categories[0] || "",
                                s = r && r.publisher || "";
                            return o.createElement(d.Cb, {
                                "data-a-target": "prime-offer",
                                className: "prime-offer prime-offer--vertical",
                                alignItems: d.f.Center,
                                display: d.X.Block,
                                borderBottom: !n,
                                textAlign: d.Ob.Left,
                                position: d.hb.Relative,
                                padding: {
                                    x: 2,
                                    y: 1
                                }
                            }, o.createElement(d.Xa, {
                                padding: {
                                    y: .5
                                }
                            }, t.renderTitle(e), o.createElement(d.W, null, t.renderGiftText())), t.renderOfferImageOrVideo(e.imageURL), o.createElement(d.Cb, {
                                margin: {
                                    bottom: 2
                                }
                            }, o.createElement(d.Xa, {
                                className: "prime-offer__description",
                                padding: {
                                    top: .5
                                }
                            }, o.createElement(d.W, {
                                type: d.Sb.P
                            }, i, " ", a)), o.createElement(d.Xa, {
                                className: "prime-offer__publisher"
                            }, o.createElement(d.W, {
                                type: d.Sb.P,
                                color: d.O.Alt2,
                                fontSize: d.Ca.Size7
                            }, s))), t.renderRedeemUpsellOrClaimSection(e))
                        }, t.renderHorizontalLayout = function(e) {
                            var n = e.content,
                                r = n && n.game && n.game.name || "",
                                i = n && n.categories && n.categories[0] || "",
                                a = n && n.publisher || "";
                            return o.createElement(d.Cb, {
                                "data-a-target": "prime-offer",
                                className: "prime-offer prime-offer--horizontal",
                                alignItems: d.f.Center,
                                display: d.X.InlineBlock,
                                textAlign: d.Ob.Left,
                                position: d.hb.Relative,
                                padding: {
                                    right: 1,
                                    y: .5
                                },
                                fullWidth: !0
                            }, o.createElement(d.Cb, {
                                className: "prime-offer__content",
                                margin: {
                                    bottom: 2
                                }
                            }, o.createElement(d.Cb, {
                                className: "prime-offer__content__text",
                                background: d.r.Base
                            }, o.createElement(d.Xa, {
                                className: "prime-offer__publisher"
                            }, o.createElement(d.W, {
                                type: d.Sb.P,
                                color: d.O.OverlayAlt,
                                fontSize: d.Ca.Size7,
                                transform: d.Rb.Uppercase
                            }, a)), o.createElement(d.Xa, {
                                className: "prime-offer__title",
                                alignItems: d.f.Start,
                                padding: {
                                    y: .5
                                }
                            }, t.renderTitle(e)), o.createElement(d.Xa, {
                                className: "prime-offer__description"
                            }, o.createElement(d.W, {
                                type: d.Sb.P,
                                color: d.O.Alt2
                            }, r, " ", i, " ", t.renderGiftText()))), t.renderOfferImageOrVideo(e.imageURL)), t.renderRedeemUpsellOrClaimSection(e))
                        }, t.renderOfferImageOrVideo = function(e) {
                            var n;
                            return n = "mp4" === t.getExtensionFromURL(e) ? o.createElement("video", {
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
                            }, o.createElement("source", {
                                src: e,
                                type: "video/mp4"
                            })) : o.createElement("img", {
                                src: e
                            }), o.createElement(d.Qa, {
                                borderRadius: d.x.Medium
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
                                var a = t.getErrorType();
                                return o.createElement(M.a, {
                                    fontSize: d.Ca.Size6,
                                    testTarget: "prime-offer-error",
                                    errorType: a
                                })
                            }
                            if (!r && (t.isCurrentOfferClaimed(e) || t.state.claimed)) {
                                var s = t.state.claimData || i.claimData;
                                return o.createElement(J, {
                                    claimInstructions: e.claimInstructions,
                                    isPrime: Object(k.n)(t.props.data),
                                    offerID: e.id,
                                    offer: e,
                                    code: s,
                                    deliveryMethod: e.deliveryMethod,
                                    orientation: t.props.orientation,
                                    toggleCrownMenu: t.props.toggleCrownMenu
                                })
                            }
                            return o.createElement(A, {
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
                            return t.state.error || k.b.UNKNOWN_ERROR
                        }, t.claimOffer = function(e) {
                            e.nativeEvent.stopImmediatePropagation(), t.setState({
                                claiming: !0
                            }), t.props.giftData && t.props.giftData.currentUser && t.props.giftData.currentUser.primeGift && t.props.giftData.currentUser.primeGift && t.props.claimGift(Object(h.a)({
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
                                    error: k.b.UNKNOWN_ERROR
                                })
                            });
                            var n = t.props.data;
                            if (n && !n.loading && !n.error && n.currentUser && n.currentUser.id) {
                                var r = t.props.offer,
                                    i = Object(h.a)({
                                        offerID: r.id
                                    });
                                t.props.claimPrimeOffer(i).then(function(e) {
                                    var n = (e.data || {}).claimPrimeOffer || {},
                                        i = n.self || {},
                                        o = n.error || {};
                                    if (i && i.hasEntitlement && r && t.setState({
                                            claimData: i.claimData,
                                            claiming: !1,
                                            claimed: !0,
                                            error: void 0
                                        }), o && o.code) {
                                        var a = k.b[o.code];
                                        t.setState({
                                            claiming: !1,
                                            claimed: !1,
                                            error: a || k.b.UNKNOWN_ERROR
                                        })
                                    }
                                }).catch(function() {
                                    t.setState({
                                        claiming: !1,
                                        claimed: !1,
                                        error: k.b.UNKNOWN_ERROR
                                    })
                                })
                            }
                        }, t.trackImpression = function() {
                            var e = null;
                            t.props.offer.content && (e = t.props.offer.content.externalURL), Object(b.p)({
                                offerID: t.props.offer.id,
                                externalURL: e || "",
                                index: t.props.index,
                                hasPrime: Object(k.n)(t.props.data),
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
                            var t = this.props.orientation || k.c.Default;
                            return k.l(t) ? this.renderVerticalLayout(e) : this.renderHorizontalLayout(e)
                        }
                        return null
                    }, t.prototype.renderTitle = function(e) {
                        var t = null;
                        return !!(this.props.giftData && this.props.giftData.currentUser && this.props.giftData.currentUser.primeGift) && !!(this.props.giftData.currentUser.primeGift && this.props.giftData.currentUser.primeGift.from && this.props.giftData.currentUser.primeGift.from.login) && (t = o.createElement(d.Xa, {
                            margin: {
                                right: .5
                            }
                        }, o.createElement(d.qb, {
                            asset: d.rb.Gift
                        }))), o.createElement(d.Xa, {
                            "data-a-target": e.id,
                            className: "prime-offer__title",
                            alignItems: d.f.Start,
                            display: d.X.Flex
                        }, t, o.createElement(f, {
                            className: "prime-offer__title__markdown",
                            containerTagName: "h4",
                            source: e.title || ""
                        }))
                    }, t.prototype.renderGiftText = function() {
                        return this.props.giftData && this.props.giftData.currentUser && this.props.giftData.currentUser.primeGift && this.props.giftData.currentUser.primeGift.from && this.props.giftData.currentUser.primeGift.from.login ? Object(s.d)("from <x:bold>{gifterLogin}</x:bold>", {
                            "x:bold": function(e) {
                                return o.createElement(d.W, {
                                    type: d.Sb.Span,
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
                }(o.Component),
                oe = Object(a.compose)(Object(c.a)(ne, {
                    name: "giftData",
                    skip: function(e) {
                        return !Object(k.k)(e.offer.id)
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
                }), Object(c.a)(Z, {
                    name: "claimPrimeOffer"
                }), Object(c.a)(te, {
                    name: "claimGift"
                }), Object(u.b)("PrimeOffer"), Object(g.a)("PrimeOffer", {
                    pixels: 100
                }))(ie),
                ae = (n("WGf9"), function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return i.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        var e = this.props.orientation || k.c.Default,
                            t = Object(k.l)(e);
                        return o.createElement(d.Cb, {
                            className: "prime-offer-placeholder",
                            alignItems: d.f.Center,
                            borderBottom: t,
                            padding: {
                                x: 2,
                                y: 1
                            },
                            display: t ? d.X.Block : d.X.InlineBlock,
                            fullWidth: t
                        }, o.createElement(d.Xa, {
                            className: "prime-offer-placeholder__title",
                            padding: {
                                y: .5
                            }
                        }, o.createElement(d.gb, {
                            height: 20
                        })), o.createElement(d.gb, {
                            height: 160
                        }), o.createElement(d.Xa, {
                            className: "prime-offer-placeholder__description",
                            padding: {
                                y: .5
                            }
                        }, o.createElement(d.gb, {
                            height: 20,
                            width: 160
                        })), o.createElement(d.Xa, {
                            className: "prime-offer-placeholder__publisher"
                        }, o.createElement(d.gb, {
                            height: 20,
                            width: 80
                        })), o.createElement(d.Xa, {
                            className: "prime-offer-placeholder__claim",
                            margin: {
                                top: 2,
                                bottom: 1
                            }
                        }, o.createElement(d.gb, {
                            height: 40
                        })))
                    }, t
                }(o.Component)),
                se = Object(u.b)("PrimeOfferPlaceholder", {
                    autoReportInteractive: !0
                })(ae),
                le = (n("6sE4"), function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        return o.createElement(d.Cb, {
                            "data-test-target": "prime-offers-upsell",
                            "data-a-target": "prime-offers-upsell",
                            className: "prime-offers-upsell",
                            alignItems: d.f.Center,
                            padding: {
                                x: 2,
                                y: 1
                            },
                            borderBottom: !0
                        }, o.createElement(d.W, {
                            type: d.Sb.H4
                        }, Object(s.d)("Claim With Twitch Prime", "PrimeUpsell")), o.createElement(d.Xa, {
                            className: "prime-upsell__logo-container",
                            fullWidth: !0,
                            margin: {
                                y: 2
                            },
                            textAlign: d.Ob.Center
                        }, o.createElement(d.qb, {
                            asset: d.rb.LogoTwitchPrime,
                            width: 330,
                            height: 150,
                            type: d.sb.Brand
                        })), o.createElement(d.W, {
                            type: d.Sb.P
                        }, Object(s.d)("Support your favorite streamer, plus get monthly games and in-game loot, and loads more with Twitch Prime.", "PrimeUpsell")), o.createElement(X, null))
                    }, t
                }(o.Component)),
                ce = Object(u.b)("PrimeUpsell", {
                    autoReportInteractive: !0
                })(le),
                ue = n("RfIv"),
                de = n("OeOm"),
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
                            return o.createElement(d.Xa, {
                                className: "prime-offer-list__content--desktop"
                            }, t.renderSectionTitle(), o.createElement(d.Yb, {
                                childWidth: d.Zb.Large,
                                gutterSize: d.ac.Small,
                                center: !0,
                                placeholderItems: 20
                            }, t.renderOfferExperience(b.a.Wide)))
                        }, t.renderSectionTitle = function() {
                            return t.props.sectionTitle ? t.shouldShowPlaceholders ? o.createElement(d.Xa, {
                                padding: {
                                    x: 1
                                },
                                className: "prime-offers__title__placeholder"
                            }, o.createElement(d.gb, {
                                height: 28,
                                width: 300
                            })) : o.createElement(d.Xa, {
                                margin: {
                                    y: 1
                                },
                                className: "prime-offers__title"
                            }, o.createElement(d.W, {
                                type: d.Sb.H3,
                                color: d.O.Base,
                                bold: !0
                            }, t.props.sectionTitle)) : null
                        }, t.renderMobileOffers = function() {
                            return o.createElement(d.Xa, {
                                className: "prime-offer-list__content--mobile"
                            }, t.renderSectionTitle(), t.renderOfferExperience(b.a.Narrow))
                        }, t.getOfferListOrientation = function() {
                            return t.props.listDirection || k.c.Default
                        }, t.getHiddenOfferIdsByPlacement = function(e) {
                            switch (e) {
                                case k.d.Crown:
                                    return s.b.get("prime-crown-hidden-ids", []);
                                case k.d.LootPage:
                                    return s.b.get("prime-loot-page-hidden-ids", []);
                                default:
                                    return []
                            }
                        }, t.renderOfferPlaceholders = function() {
                            for (var e = [], n = 0; n < 3; ++n) {
                                var r = o.createElement(se, {
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
                            n = Object(k.h)("prime-offer-list", e),
                            r = "prime-offer-list__content prime-offer-list__content--" + t,
                            i = this.props.listDirection === k.c.Horizontal,
                            a = this.props.listDirection === k.c.Vertical;
                        return this.shouldShowOffersSection() ? o.createElement(l.b, {
                            className: n,
                            suppressScrollX: a,
                            suppressScrollY: i
                        }, o.createElement(d.Xa, {
                            className: r,
                            alignItems: d.f.Center,
                            padding: {
                                top: 1,
                                bottom: 2,
                                x: 1
                            }
                        }, this.renderUpsell(), this.props.listDirection === k.c.Horizontal && this.renderDesktopOffers(), this.renderMobileOffers())) : null
                    }, t.prototype.renderUpsell = function() {
                        var e = this.props.userData;
                        if (e && !Object(k.m)(e) && !Object(k.n)(e) && !this.props.hideUpsell) return o.createElement(ce, null)
                    }, t.prototype.renderOfferExperience = function(e) {
                        var t = this,
                            n = this.props.offersData;
                        if (this.shouldShowPlaceholders) return this.renderOfferPlaceholders();
                        if (n && n.primeOffers && n.primeOffers.length) {
                            var r = this.getSortedOffers(),
                                i = r[r.length - 1];
                            return r.map(function(n, r) {
                                return o.createElement(d.Xa, {
                                    display: d.X.InlineBlock,
                                    key: n.id
                                }, o.createElement(oe, {
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
                        return o.createElement(m, null)
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
                                }).sort(k.q),
                                o = this.filterOffersByOfferType(i),
                                a = r.filter(function(t) {
                                    return !e.isClaimedOffer(t)
                                }).sort(k.q);
                            return this.filterOffersByOfferType(a).concat(o)
                        }
                        return this.filterOffersByOfferType(r).slice().sort(k.q)
                    }, t.prototype.isClaimedOffer = function(e) {
                        return !this.offerHasExternalURL(e) && this.offerHasEntitlement(e)
                    }, t.prototype.offerHasEntitlement = function(e) {
                        return e.self && e.self.hasEntitlement
                    }, t.prototype.offerHasExternalURL = function(e) {
                        return e.content && e.content.externalURL
                    }, t.prototype.filterOffersByOfferType = function(e) {
                        var t = this.getFreeGamesWithPrimeOfferIds() || [];
                        return this.props.offerFilterType === ue.a.Game ? e.filter(function(e) {
                            return t.includes(e.id)
                        }).sort(k.q) : this.props.offerFilterType === ue.a.InGameLoot ? e.filter(function(e) {
                            return !t.includes(e.id)
                        }).sort(k.q) : e
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
                }(o.Component)),
                me = Object(a.compose)(Object(c.a)(de, {
                    name: "offersData",
                    options: function() {
                        return {
                            variables: {
                                dateOverride: Object(k.i)(k.f.DateOverride),
                                countryCode: Object(k.i)(k.f.CountryCode)
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
                }), Object(u.b)("PrimeOfferList"))(pe);
            var fe = Object(r.connect)(function(e) {
                return {
                    firstPageLoaded: e.session.firstPageLoaded
                }
            })(me);
            n.d(t, "a", function() {
                return fe
            })
        },
        "4VQm": function(e, t, n) {
            "use strict";
            var r, i = n("mrSG"),
                o = n("TSYQ"),
                a = n("17x9"),
                s = n("q1tI"),
                l = n("GxwZ"),
                c = n("N0BP"),
                u = (n("+Mtq"), 100);
            ! function(e) {
                e[e.Resize = 0] = "Resize", e[e.Scroll = 1] = "Scroll", e[e.Wheel = 2] = "Wheel"
            }(r || (r = {}));
            var d = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.root = null, n.scrollContent = null, n.xScrollContent = null, n.resizeTimeout = 0, n.receivers = [], n.scrollTimeout = 0, n.wheelTimeout = 0, n.getChildContext = function() {
                        return {
                            registerReceiver: n.registerReceiver,
                            requestVisibilityCheck: n.requestVisibilityCheck,
                            getScrollContent: n.getScrollContent,
                            scrollToTop: n.scrollToTop,
                            yScrollTo: n.yScrollTo
                        }
                    }, n.scrollToBottom = function() {
                        n.scrollContent && n.yScrollTo(n.scrollContent.scrollHeight)
                    }, n.scrollToTop = function() {
                        n.yScrollTo(0)
                    }, n.notifyReceivers = function(e) {
                        requestAnimationFrame(function() {
                            if (n.scrollContent) {
                                var t = n.scrollContent.getBoundingClientRect();
                                e && (e.offset = n.scrollContent.scrollTop), n.receivers.forEach(function(n) {
                                    n.checkVisible(t, e)
                                })
                            }
                        })
                    }, n.onResize = function() {
                        if (!n.resizeTimeout && n.scrollContent) {
                            var e = {
                                type: r.Resize,
                                offset: n.scrollContent.scrollTop
                            };
                            n.props.disableDebounce ? n.notifyReceivers(e) : n.resizeTimeout = setTimeout(function() {
                                n.resizeTimeout = 0, n.notifyReceivers(e)
                            }, u)
                        }
                    }, n.onScroll = function() {
                        if (!n.scrollTimeout && n.scrollContent) {
                            var e = {
                                type: r.Scroll,
                                offset: n.scrollContent.scrollTop
                            };
                            n.props.disableDebounce ? n.notifyReceivers(e) : n.scrollTimeout = setTimeout(function() {
                                n.scrollTimeout = 0, n.notifyReceivers(e)
                            }, u)
                        }
                    }, n.onWheel = function(e) {
                        if (!n.wheelTimeout && n.scrollContent) {
                            var t = {
                                type: r.Wheel,
                                offset: n.scrollContent.scrollTop,
                                wheelEvent: e
                            };
                            n.props.disableDebounce ? n.notifyReceivers(t) : n.wheelTimeout = setTimeout(function() {
                                n.wheelTimeout = 0, n.notifyReceivers(t)
                            }, u)
                        }
                    }, n.registerReceiver = function(e) {
                        return n.scrollContext && n.scrollContext.registerReceiver && n.scrollContext.registerReceiver(e), n.receivers.push(e), n.requestVisibilityCheck(e),
                            function() {
                                var t = n.receivers.indexOf(e);
                                n.receivers.splice(t, 1)
                            }
                    }, n.requestVisibilityCheck = function(e) {
                        requestAnimationFrame(function() {
                            var t = n.scrollContent;
                            if (t) {
                                var r = t.getBoundingClientRect();
                                e.checkVisible(r)
                            }
                        })
                    }, n.setRef = function(e) {
                        return n.root = e
                    }, n.yScrollTo = function(e) {
                        n.scrollContent && (n.scrollContent.scrollTop = e), n.onScroll()
                    }, n.getScrollContent = function() {
                        return n.scrollContent
                    }, n.createSimpleBarOptions = function() {
                        return {
                            autoHide: void 0 === n.props.autoHide || n.props.autoHide
                        }
                    }, t.scrollRef && t.scrollRef(n), n
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    if (this.scrollContext = this.context, this.root) {
                        if (this.simplebarRef = new l(this.root, this.createSimpleBarOptions()), this.scrollContent = this.simplebarRef.getScrollElement(), this.xScrollContent = this.simplebarRef.getContentElement(), this.props.contentRef && this.props.contentRef(this.scrollContent), this.props.contentClassName) {
                            var e = this.scrollContent.querySelector(".simplebar-content");
                            e && e.classList.add(this.props.contentClassName)
                        }
                        this.props.scrollContentClassName && this.scrollContent.classList.add(this.props.scrollContentClassName), window.addEventListener("resize", this.onResize), this.scrollContent.addEventListener("scroll", this.onScroll), this.xScrollContent.addEventListener("scroll", this.onScroll), this.scrollContent.addEventListener("wheel", this.onWheel), this.notifyReceivers()
                    }
                }, t.prototype.componentWillUnmount = function() {
                    this.root && (delete this.simplebarRef, window.removeEventListener("resize", this.onResize), this.scrollContent && this.scrollContent.removeEventListener("scroll", this.onScroll), this.xScrollContent && this.xScrollContent.removeEventListener("scroll", this.onScroll))
                }, t.prototype.render = function() {
                    var e = this.props,
                        t = (e.disableDebounce, e.suppressScrollX, e.suppressScrollY, e.scrollRef, e.scrollContentClassName, e.contentClassName, i.__rest(e, ["disableDebounce", "suppressScrollX", "suppressScrollY", "scrollRef", "scrollContentClassName", "contentClassName"])),
                        n = {
                            "scrollable-area": !0,
                            "scrollable-area--suppress-scroll-x": this.props.suppressScrollX,
                            "scrollable-area--suppress-scroll-y": this.props.suppressScrollY
                        };
                    return s.createElement("div", i.__assign({
                        className: o(t.className, n),
                        "data-test-selector": "scrollable-area-wrapper",
                        ref: this.setRef
                    }, Object(c.a)(this.props), {
                        style: this.props.style
                    }), s.Children.only(this.props.children))
                }, t.contextTypes = {
                    registerReceiver: a.func
                }, t.childContextTypes = {
                    registerReceiver: a.func,
                    requestVisibilityCheck: a.func,
                    getScrollContent: a.func,
                    scrollToTop: a.func,
                    yScrollTo: a.func
                }, t
            }(s.Component);
            n.d(t, !1, function() {
                return "scrollable-area-wrapper"
            }), n.d(t, "a", function() {
                return r
            }), n.d(t, "b", function() {
                return d
            })
        },
        "5ZOr": function(e, t, n) {},
        "6sE4": function(e, t, n) {},
        "8/mp": function(e, t, n) {
            "use strict";
            var r = n("4VQm"),
                i = n("HAa/"),
                o = n("/MKj"),
                a = n("mrSG"),
                s = n("17x9"),
                l = n("q1tI"),
                c = n("/7QA"),
                u = n("Ue10"),
                d = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.getStyles = function() {
                            if (n.props.disableStickiness) return {
                                position: "relative"
                            };
                            var e = n.state,
                                t = e.anchoredBottom,
                                r = e.anchoredTop,
                                i = e.top,
                                o = e.width,
                                a = t || r,
                                s = "absolute";
                            return window.outerWidth < (n.props.disableStickinessBelowWidth || 0) ? (s = "inherit", a = !1) : a && (s = "fixed"), {
                                position: s,
                                top: r ? "inherit" : i,
                                width: a ? o : "inherit"
                            }
                        }, n.lockBottom = function(e) {
                            n.element && n.setState({
                                anchoredBottom: !0,
                                top: window.innerHeight - e,
                                width: n.element.getBoundingClientRect().width
                            })
                        }, n.lockTop = function() {
                            n.element && n.setState({
                                anchoredTop: !0,
                                width: n.element.getBoundingClientRect().width
                            })
                        }, n.resizeStickyColumn = function() {
                            n.unlock(n.state.lastOffset || 0), n.checkBounding(!0, 0)
                        }, n.setRef = function(e) {
                            return n.element = e
                        }, n.state = {
                            anchoredBottom: !1,
                            anchoredTop: !1,
                            lastOffset: void 0,
                            offsetTop: void 0,
                            top: void 0,
                            width: void 0
                        }, n
                    }
                    return a.__extends(t, e), t.prototype.componentDidMount = function() {
                        if (this.element) {
                            var e = this.element.getBoundingClientRect();
                            this.setState({
                                offsetTop: e.top
                            })
                        }
                        var t = this.context.registerReceiver;
                        t ? this.unregister = t(this) : c.k.warn("<StickyContainer /> initialized missing a <ScrollableArea /> provider")
                    }, t.prototype.componentWillReceiveProps = function(e) {
                        this.props.sideNavExpanded !== e.sideNavExpanded && this.resizeStickyColumn()
                    }, t.prototype.componentWillUnmount = function() {
                        this.unregister && this.unregister()
                    }, t.prototype.render = function() {
                        return l.createElement(u.Xa, {
                            position: u.hb.Relative,
                            fullWidth: !0
                        }, l.createElement("div", {
                            className: "sticky-container",
                            ref: this.setRef,
                            style: this.getStyles()
                        }, this.props.children))
                    }, t.prototype.checkVisible = function(e, t) {
                        return a.__awaiter(this, void 0, void 0, function() {
                            var e, n, i, o, s;
                            return a.__generator(this, function(a) {
                                return !t || t.type !== r.a.Resize && t.type !== r.a.Wheel && t.type !== r.a.Scroll || (e = this.state.anchoredBottom || this.state.anchoredTop, n = t.offset >= (this.state.lastOffset || 0), t.type === r.a.Resize ? (this.unlock(t.offset), this.checkBounding(n, t.offset)) : t.wheelEvent && t.type === r.a.Wheel && e ? (i = t.wheelEvent, o = void 0, o = 0 === i.deltaMode ? i.deltaY || i.wheelDelta : 16 * i.deltaY, s = o + t.offset, this.context.yScrollTo(s), this.checkBounding(o > 0, t.offset)) : t.type !== r.a.Scroll || t.offset === this.state.lastOffset || e || this.checkBounding(n, t.offset)), [2]
                            })
                        })
                    }, t.prototype.checkBounding = function(e, t) {
                        e && this.state.anchoredTop && this.unlock(t), !e && this.state.anchoredBottom && this.unlock(t), this.state.anchoredBottom || this.state.anchoredTop || this.shouldLock(e), this.setState({
                            lastOffset: t
                        })
                    }, t.prototype.shouldLock = function(e) {
                        if (this.element) {
                            var t = this.element.getBoundingClientRect(),
                                n = this.state.offsetTop || 0;
                            if (t.height < window.innerHeight - n) this.lockTop();
                            else {
                                var r = t.top < n,
                                    i = t.top >= window.innerHeight,
                                    o = t.bottom < n,
                                    a = t.bottom + (this.props.bottomPixelThreshold || 0) >= window.innerHeight,
                                    s = !i && !r,
                                    l = !a && !o;
                                !s && !l || s && l || (!e && s && this.lockTop(), e && l && this.lockBottom(t.height + (this.props.bottomPixelThreshold || 0))), r && o && this.lockBottom(t.height + (this.props.bottomPixelThreshold || 0)), i && a && this.lockTop()
                            }
                        }
                    }, t.prototype.unlock = function(e) {
                        if (this.element) {
                            var t, n = this.state,
                                r = n.offsetTop,
                                i = n.width,
                                o = this.element.getBoundingClientRect(),
                                a = window.innerHeight - (r || 0),
                                s = i;
                            t = "inherit", o.height <= a ? s = "inherit" : this.state.anchoredTop ? t = e : this.state.anchoredBottom && (t = e - o.height + a - (this.props.bottomPixelThreshold || 0)), this.setState({
                                top: t,
                                width: s,
                                anchoredBottom: !1,
                                anchoredTop: !1
                            })
                        }
                    }, t.contextTypes = {
                        registerReceiver: s.func,
                        yScrollTo: s.func
                    }, t
                }(l.Component);
            var p = Object(o.connect)(function(e) {
                return {
                    sideNavExpanded: e.ui.sideNavExpanded
                }
            })(d);
            n.d(t, "b", function() {
                return r.b
            }), n.d(t, "a", function() {
                return i.a
            }), n.d(t, "c", function() {
                return p
            })
        },
        "9iNR": function(e, t, n) {
            "use strict";
            n.r(t);
            var r = n("mrSG"),
                i = n("q1tI"),
                o = n("oJmH"),
                a = n("yoKv"),
                s = n("2INN"),
                l = n("wIs1"),
                c = n("ZS2+"),
                u = n("4VQm"),
                d = n("/0dD"),
                p = n("76Lv"),
                m = n("GnwI"),
                f = n("/7QA"),
                h = n("J4y2"),
                g = n("eJ65"),
                v = n("2xye"),
                b = n("/MKj"),
                k = n("fvjX"),
                y = n("1/iK"),
                O = n("y5D0"),
                C = n("kRBY"),
                S = n("TSYQ"),
                E = n("u5aL"),
                N = n("yR8l"),
                _ = n("9pSj"),
                D = n("Ue10"),
                I = n("Oowd"),
                w = (n("+6S+"), function(e) {
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
                        if (this.props.data.error) return i.createElement(_.c, null);
                        if (this.props.data.loading) return this.renderPlaceholders();
                        if (this.props.isLoggedIn) {
                            var e = S({
                                "twitch-prime-top-nav-user__dropdown--open": this.state.dropdownOpen
                            });
                            return i.createElement(D.Pa, {
                                className: "twitch-prime-top-nav-user__wrapper",
                                margin: {
                                    right: 2
                                },
                                fullHeight: !0
                            }, i.createElement(E.a, {
                                onClickOut: this.onClickOut,
                                className: e
                            }, i.createElement(D.Xa, {
                                display: D.X.Flex,
                                className: "twitch-prime-top-nav-user twitch-prime-top-nav-user--signed-in",
                                fullHeight: !0,
                                zIndex: D.fc.Above
                            }, i.createElement(D.Ua, {
                                onClick: this.toggleDropdown,
                                "data-test-selector": "user-menu-toggle",
                                blurAfterClick: !0,
                                type: D.Va.Alpha
                            }, i.createElement(D.Xa, {
                                display: D.X.Flex,
                                flexWrap: D.Ba.NoWrap,
                                alignItems: D.f.Center,
                                flexGrow: 1,
                                padding: {
                                    right: 1
                                },
                                fullHeight: !0
                            }, i.createElement(D.Xa, {
                                margin: {
                                    x: 1
                                },
                                flexShrink: 0
                            }, i.createElement(D.i, {
                                type: D.n.FadeIn,
                                duration: D.k.Long,
                                enabled: !0
                            }, i.createElement(D.q, {
                                size: 30,
                                src: this.props.data.currentUser.profileImageURL,
                                alt: Object(f.d)("Your Avatar", "PrimeUser")
                            }))), i.createElement(D.Xa, {
                                flexGrow: 1,
                                flexShrink: 1,
                                flexDirection: D.Aa.Column,
                                ellipsis: !0
                            }, i.createElement(D.Cb, {
                                className: "twitch-prime-top-nav-user__username"
                            }, this.props.data.currentUser.displayName)), i.createElement(D.Cb, {
                                display: D.X.Flex,
                                flexShrink: 0,
                                className: "twitch-prime-top-nav-user__expand"
                            }, i.createElement(D.qb, {
                                asset: D.rb.GlyphArrDown
                            }))))), this.renderDropdown()))
                        }
                        return i.createElement(D.Cb, {
                            display: D.X.Flex,
                            fullHeight: !0,
                            padding: {
                                right: 1
                            },
                            className: "twitch-prime-top-nav-user"
                        }, i.createElement(D.Xa, {
                            display: D.X.Flex,
                            flexWrap: D.Ba.NoWrap,
                            margin: {
                                x: .5
                            },
                            alignItems: D.f.Center,
                            flexGrow: 1
                        }, i.createElement(D.z, {
                            onClick: this.onLoginClick
                        }, Object(f.d)("Log in", "PrimeUser"))))
                    }, t.prototype.renderDropdown = function() {
                        var e = S({
                                "twitch-prime-top-nav-user__dropdown": !0,
                                "twitch-prime-top-nav-user__dropdown--open": this.state.dropdownOpen
                            }),
                            t = i.createElement(D.Ua, {
                                onClick: this.onLogoutClick,
                                type: D.Va.Alpha
                            }, i.createElement(D.Cb, {
                                color: D.O.Alt,
                                display: D.X.Flex,
                                alignItems: D.f.Center,
                                padding: {
                                    x: 2,
                                    y: .5
                                }
                            }, i.createElement(D.Xa, {
                                display: D.X.Flex,
                                alignItems: D.f.Center,
                                margin: {
                                    right: 1
                                }
                            }, i.createElement(D.qb, {
                                asset: D.rb.NavLogout,
                                height: 18,
                                width: 18
                            })), i.createElement(D.W, null, Object(f.d)("Log Out", "PrimeUser"))));
                        return i.createElement(D.Cb, {
                            className: e,
                            background: D.r.Base,
                            zIndex: D.fc.Below,
                            fullWidth: !0,
                            overflow: D.cb.Hidden,
                            position: D.hb.Absolute,
                            "data-test-selector": "dropdown-down",
                            borderLeft: this.state.dropdownOpen,
                            borderTop: this.state.dropdownOpen,
                            borderBottom: this.state.dropdownOpen,
                            borderRight: this.state.dropdownOpen
                        }, i.createElement(D.Xa, {
                            padding: {
                                y: 1
                            }
                        }, t))
                    }, t.prototype.reportInteractive = function() {
                        this.props.data.loading && !this.props.data.error || this.props.latencyTracking.reportInteractive()
                    }, t.prototype.renderPlaceholders = function() {
                        return i.createElement(D.Xa, null, i.createElement(D.Xa, {
                            className: "twitch-prime-top-nav-user",
                            display: D.X.Flex,
                            alignItems: D.f.Center,
                            justifyContent: D.Wa.Between,
                            fullHeight: !0,
                            padding: {
                                x: 1
                            }
                        }, i.createElement(D.Xa, null, i.createElement(D.gb, {
                            width: 30,
                            height: 30
                        })), i.createElement(D.Cb, {
                            display: D.X.Flex,
                            flexShrink: 0,
                            className: "twitch-prime-top-nav-user__expand"
                        }, i.createElement(D.qb, {
                            asset: D.rb.GlyphArrDown,
                            type: D.sb.Placeholder
                        }))))
                    }, t
                }(i.Component)),
                x = Object(o.compose)(Object(N.a)(I), Object(m.b)("PrimeUser"))(w);
            var P = Object(b.connect)(function(e) {
                    return {
                        isLoggedIn: Object(C.f)(e)
                    }
                }, function(e) {
                    return Object(k.bindActionCreators)({
                        logout: O.f,
                        login: function() {
                            return Object(O.e)(y.a.TopNavLoginButton)
                        },
                        signup: function() {
                            return Object(O.g)(y.a.TopNavSignupButton)
                        }
                    }, e)
                })(x),
                T = (n("A1Hl"), function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        return i.createElement(D.Pa, {
                            position: D.hb.Fixed,
                            attachTop: !0,
                            fullWidth: !0
                        }, i.createElement("nav", {
                            className: "twitch-prime-top-nav"
                        }, i.createElement(D.Xa, {
                            className: "twitch-prime-top-nav__menu",
                            display: D.X.Flex,
                            alignItems: D.f.Center,
                            flexWrap: D.Ba.NoWrap,
                            fullHeight: !0,
                            justifyContent: D.Wa.Between
                        }, i.createElement(D.Xa, {
                            className: "twitch-prime-top-nav__menu__left",
                            display: D.X.Flex
                        }, i.createElement(D.Pa, {
                            display: D.X.InlineFlex,
                            alignItems: D.f.Center,
                            flexShrink: 0,
                            padding: {
                                left: .5,
                                y: 1
                            }
                        }, i.createElement(D.U, {
                            to: {
                                pathname: "/prime",
                                state: {
                                    medium: v.PageviewMedium.TopNav,
                                    content: v.PageviewContent.Logo
                                }
                            },
                            className: "twitch-prime-top-nav__home-link"
                        }, i.createElement(D.qb, {
                            asset: D.rb.LogoTwitchPrime,
                            width: 90,
                            height: 40
                        }))), i.createElement(D.Xa, {
                            className: "twitch-prime-top-nav__ellipsis-button",
                            display: D.X.Flex,
                            alignItems: D.f.Center,
                            margin: {
                                left: 1
                            }
                        }, i.createElement(g.a, null, i.createElement(D.A, {
                            icon: D.rb.NavMore,
                            type: D.C.Default,
                            ariaLabel: Object(f.d)("More nav items", "PrimeTopNav"),
                            "data-a-target": "twitch-prime-top-nav__ellipsis-icon"
                        }), i.createElement(D.u, {
                            direction: D.v.Bottom,
                            tailOffset: 7,
                            size: D.w.Small,
                            "data-a-target": "overflow-menu"
                        }, i.createElement(D.Xa, {
                            padding: 1
                        }, i.createElement(g.a, {
                            display: D.X.Block
                        }, i.createElement(D.Ua, {
                            "data-target": "twitch-prime-top-nav-language-selector-click",
                            "data-a-target": "twitch-prime-top-nav-language-selector"
                        }, i.createElement(D.Xa, {
                            padding: {
                                y: .5,
                                x: 1
                            }
                        }, Object(f.d)("Language", "PrimeTopNav"))), i.createElement(D.u, {
                            size: D.w.Small,
                            direction: D.v.BottomCenter,
                            offsetY: "15px",
                            "data-target": "language-selector",
                            "data-a-target": "language-selector-menu"
                        }, i.createElement(h.a, null)))))))), i.createElement(P, null))))
                    }, t
                }(i.Component)),
                R = Object(m.b)("PrimeTopNav", {
                    autoReportInteractive: !0
                })(T),
                L = c.a.wrap(function() {
                    return n.e(171).then(n.bind(null, "eAh4"))
                }, "TwitchPrimeOffersPage"),
                U = c.a.wrap(function() {
                    return n.e(170).then(n.bind(null, "di4w"))
                }, "TwitchPrimeFortniteSuccessPage"),
                F = c.a.wrap(function() {
                    return n.e(169).then(n.bind(null, "IyqF"))
                }, "TwitchPrimeFortniteLinkingPage"),
                j = c.a.wrap(function() {
                    return n.e(168).then(n.bind(null, "CinY"))
                }, "TwitchPrimeFortnitePage"),
                B = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        return i.createElement(D.Xa, {
                            className: "prime-root " + Object(p.b)(d.a.Light),
                            fullHeight: !0,
                            display: D.X.Flex,
                            flexDirection: D.Aa.Column,
                            position: D.hb.Relative
                        }, i.createElement(R, null), i.createElement(D.Pa, {
                            position: D.hb.Relative,
                            flexGrow: 1,
                            fullHeight: !0,
                            fullWidth: !0,
                            margin: {
                                top: 5
                            }
                        }, i.createElement("main", null, i.createElement(u.b, null, i.createElement(D.Xa, {
                            className: "prime-main",
                            fullHeight: !0
                        }, i.createElement(a.a, null, i.createElement(s.a, {
                            path: "/prime/fortnite/link",
                            component: F
                        }), i.createElement(s.a, {
                            path: "/prime/fortnite/success",
                            component: U
                        }), i.createElement(s.a, {
                            path: "/prime/fortnite",
                            component: j
                        }), i.createElement(s.a, {
                            path: "/prime",
                            component: L
                        })))))))
                    }, t
                }(i.Component),
                X = Object(o.compose)(l.a, Object(m.b)("PrimeRoot", {
                    autoReportInteractive: !0
                }))(B);
            n.d(t, "PrimeRoot", function() {
                return X
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
                o = n("mrSG"),
                a = n("cr+I"),
                s = n("q1tI"),
                l = n("oJmH"),
                c = n("/7QA"),
                u = n("eJ65"),
                d = n("yR8l"),
                p = n("ht6z"),
                m = n("geRD"),
                f = n("kz7j"),
                h = n("GnwI"),
                g = n("cinR"),
                v = n("Ue10"),
                b = (n("Wu8b"), function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return o.__extends(t, e), t.prototype.render = function() {
                        return s.createElement(v.Xa, null, s.createElement(v.Cb, {
                            className: "prime-offer-header",
                            borderBottom: !0,
                            background: v.r.Alt2,
                            padding: {
                                x: 1,
                                y: .5
                            }
                        }, s.createElement(v.W, {
                            bold: !0,
                            type: v.Sb.H6
                        }, Object(c.d)("Free with Prime", "PrimeOfferHeader"))), this.getNumOfUnseenOffersDisplay())
                    }, t.prototype.getNumOfUnseenOffersDisplay = function() {
                        var e = this.props.numOfUnseenOffers;
                        if (e) return s.createElement(v.Cb, {
                            className: "prime-offer__new-offer-header",
                            borderBottom: !0,
                            background: v.r.Alt2,
                            padding: {
                                x: 1,
                                y: .5
                            }
                        }, s.createElement(v.Xa, {
                            fullWidth: !0,
                            display: v.X.Flex,
                            alignItems: v.f.Center
                        }, s.createElement(v.Xa, {
                            flexGrow: 1
                        }, s.createElement(v.W, {
                            bold: !0,
                            type: v.Sb.H6
                        }, Object(c.d)("New Prime Loot", "PrimeOfferHeader"))), s.createElement(v.Xa, {
                            className: "prime-offer__new-offer-header-count",
                            textAlign: v.Ob.Center
                        }, s.createElement(v.Cb, {
                            className: "prime-offer__new-offer-header-count__text",
                            background: v.r.Base,
                            color: v.O.Base,
                            display: v.X.Flex,
                            alignItems: v.f.Center,
                            justifyContent: v.Wa.Center
                        }, s.createElement(v.W, null, e.toString())))))
                    }, t
                }(s.Component)),
                k = Object(h.b)("PrimeOfferHeader", {
                    autoReportInteractive: !0
                })(b),
                y = n("4NwI"),
                O = n("Rjl4"),
                C = n("O4UZ");
            ! function(e) {
                e.OFFERS_FAILED_TO_UPDATE = "OFFERS_FAILED_TO_UPDATE", e.UNKNOWN = "UNKNOWN"
            }(r || (r = {}));
            var S = n("QAxy"),
                E = n("SXud"),
                N = (n("l0e4"), n("yO+B")),
                _ = function(e) {
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
                                n = a.parse(e);
                            return n && !!n.expandoffers || t.props.openByDefault
                        }, t.onToggleMenu = function(e) {
                            t.seeOffers(), e && t.setState({
                                numOfUnseenOffers: 0
                            }), Object(O.d)(!e, {
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
                            Object(O.c)({
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
                            var n = Object(C.j)();
                            return !(t.getHiddenCrownOfferIds().includes(e.id) || n.includes(e.id) || t.offerIsSeen(e))
                        }, t.seeOffers = function() {
                            var e = t.props.offersData;
                            if (e && !e.loading && !e.error) {
                                var n = (e.primeOffers || []).map(function(e) {
                                    return "" + e.id
                                });
                                t.updateOfferStatus(), Object(C.o)(n)
                            }
                        }, t.updateOfferStatus = function() {
                            return o.__awaiter(t, void 0, void 0, function() {
                                var e, t, n, i, a, s, l, c;
                                return o.__generator(this, function(o) {
                                    switch (o.label) {
                                        case 0:
                                            if (e = this.props.userData, !(t = e && e.currentUser && e.currentUser.id)) return [2];
                                            n = this.props.offersData && this.props.offersData.primeOffers || [], i = n.map(function(e) {
                                                return {
                                                    offerID: e.id,
                                                    status: C.a.Seen
                                                }
                                            }), a = Object(m.a)({
                                                userID: t,
                                                statusChanges: i
                                            }), o.label = 1;
                                        case 1:
                                            return o.trys.push([1, 3, , 4]), [4, this.props.updatePrimeOfferStatus(a)];
                                        case 2:
                                            return s = o.sent(), (l = s.updatePrimeOfferStatus && s.updatePrimeOfferStatus.error) && l.code ? (c = r[l.code], this.setState({
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
                                            return o.sent(), this.setState({
                                                updated: !1,
                                                error: r.UNKNOWN
                                            }), [3, 4];
                                        case 4:
                                            return [2]
                                    }
                                })
                            })
                        }, t.renderOfferList = function() {
                            return s.createElement(v.Xa, {
                                "data-a-target": "offers-list",
                                className: "prime-offers__list"
                            }, s.createElement(k, {
                                numOfUnseenOffers: t.state.numOfUnseenOffers
                            }), s.createElement(y.a, {
                                placement: C.d.Crown,
                                toggleCrownMenu: t.toggleCrownMenu
                            }))
                        }, t.shouldReportInteractive = function() {
                            return (!t.isUserDataLoading || t.isUserDataError) && (!t.isOffersDataLoading || t.isOffersDataError)
                        }, t
                    }
                    return o.__extends(t, e), t.prototype.componentDidMount = function() {
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
                            Object(O.e)({
                                hasPrime: this.hasPrime(),
                                numberOfOffers: i || 0
                            })
                        }
                    }, t.prototype.render = function() {
                        var e = this.props.userData && this.props.userData.requestInfo && Object(p.a)(this.props.userData.requestInfo.countryCode),
                            t = this.props.userData && this.props.userData.currentUser && this.props.userData.currentUser.hasPrime;
                        if (!e && !t) return null;
                        var n = {
                            align: v.Wb.Center,
                            direction: v.Xb.Bottom,
                            label: ""
                        };
                        return this.state.numOfUnseenOffers > 0 ? n.label = Object(c.d)("New Prime Loot", "PrimeOffers") : n.label = Object(c.d)("Prime Loot", "PrimeOffers"), s.createElement(v.Xa, {
                            className: "prime-offers",
                            position: v.hb.Relative
                        }, s.createElement(u.a, {
                            onToggle: this.onToggleMenu,
                            openByDefault: this.showOffersByDefault(),
                            tooltipProps: n,
                            ref: this.saveCrownMenuRef
                        }, s.createElement(g.a, {
                            onHover: this.onHover
                        }, s.createElement(v.A, {
                            ariaLabel: Object(c.d)("Prime offers", "PrimeOffers"),
                            overlay: !0,
                            icon: v.rb.Crown,
                            "data-a-target": "prime-offers-icon",
                            "data-target": "prime-offers-icon"
                        })), s.createElement(v.u, {
                            direction: v.v.BottomRight,
                            size: v.w.Large,
                            offsetX: "7px"
                        }, this.renderOfferList())), this.renderUnseenOffersDisplay())
                    }, t.prototype.offerIsSeen = function(e) {
                        return e.self && e.self.status === C.a.Seen
                    }, t.prototype.renderUnseenOffersDisplay = function() {
                        var e = this.state.numOfUnseenOffers;
                        if (e && !this.state.error) return s.createElement(v.Xa, {
                            className: "prime-offers__pill",
                            position: v.hb.Absolute
                        }, s.createElement(v.i, {
                            type: v.n.BounceIn,
                            duration: v.k.Medium,
                            timing: v.m.EaseIn,
                            enabled: e > 0
                        }, s.createElement(v.eb, {
                            label: e.toString(),
                            type: v.fb.Notification
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
                D = Object(l.compose)(Object(d.a)(E, {
                    name: "offersData",
                    skip: function(e) {
                        return !e.firstPageLoaded && !e.openByDefault
                    },
                    options: function() {
                        return {
                            variables: {
                                dateOverride: Object(C.i)(C.f.DateOverride),
                                countryCode: Object(C.i)(C.f.CountryCode)
                            }
                        }
                    }
                }), Object(d.a)(N, {
                    name: "userData"
                }), Object(d.a)(S, {
                    name: "updatePrimeOfferStatus"
                }), Object(h.b)("PrimeOffers"))(_);
            var I = Object(i.connect)(function(e) {
                    return {
                        firstPageLoaded: !!e.session.firstPageLoaded
                    }
                })(D),
                w = n("6x+I"),
                x = n("KxT4"),
                P = n("j3KY"),
                T = (n("gQ2q"), n("487o")),
                R = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.reportInteractive = function() {
                            var e = t.props,
                                n = e.data,
                                r = e.latencyTracking;
                            n.loading && !n.error || r.reportInteractive()
                        }, t
                    }
                    return o.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.reportInteractive(), Object(O.h)()
                    }, t.prototype.componentDidUpdate = function() {
                        this.reportInteractive()
                    }, t.prototype.render = function() {
                        var e = this.props,
                            t = e.data,
                            n = e.blockBannerForGDPR,
                            r = !!t.currentUser && t.currentUser.hasPrime,
                            i = t.requestInfo && t.requestInfo.countryCode;
                        if (!Object(C.p)(r, i) || t.loading || n) return null;
                        var o = Object(P.e)(P.a, ""),
                            a = Object(c.d)("Twitch Prime", "BlueBar"),
                            l = s.createElement("span", null, Object(c.d)("Monthly games and in-game loot, exclusives, and access to hundreds of movies & TV shows with Prime Video.", "BlueBar")),
                            u = Object(P.e)(P.a, ""),
                            d = Object(c.d)("Start Your Free Trial", "BlueBar");
                        return t.loading || t.error || t.primePromotions && t.primePromotions.forEach(function(e) {
                            if (e) {
                                var t = e.externalURL ? e.externalURL : "";
                                switch (e.id) {
                                    case "twitch.prime.bluebar.left1":
                                        o = t, a = e.text;
                                        break;
                                    case "twitch.prime.bluebar.center1":
                                        l = s.createElement(w, {
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
                                        u = t, d = e.text
                                }
                            }
                        }), s.createElement(g.a, {
                            onHover: O.g,
                            onClick: O.f
                        }, s.createElement(v.Cb, {
                            color: v.O.Base,
                            className: "blue-bar",
                            "data-a-target": "blue-bar",
                            position: v.hb.Relative,
                            fullWidth: !0,
                            zIndex: v.fc.Above
                        }, s.createElement(v.Xa, {
                            className: "blue-bar__bar",
                            display: v.X.Flex,
                            alignItems: v.f.Center,
                            justifyContent: v.Wa.Between,
                            flexWrap: v.Ba.NoWrap,
                            margin: "auto",
                            padding: {
                                x: 2,
                                y: .5
                            }
                        }, s.createElement(v.Xa, {
                            display: v.X.InlineFlex,
                            alignItems: v.f.Center,
                            padding: {
                                right: .5
                            }
                        }, s.createElement(v.Xa, {
                            className: "blue-bar__logo",
                            display: v.X.InlineFlex,
                            margin: {
                                right: .5
                            },
                            flexShrink: 0
                        }, s.createElement(v.qb, {
                            asset: v.rb.Crown
                        })), s.createElement(v.W, {
                            bold: !0,
                            type: v.Sb.Span,
                            noWrap: !0,
                            fontSize: v.Ca.Size6
                        }, s.createElement(v.Pa, {
                            padding: {
                                x: 1
                            }
                        }, s.createElement("a", {
                            className: "blue-bar__link",
                            "data-a-target": "blue-bar__link",
                            href: o,
                            target: "_blank",
                            rel: "noopener noreferrer"
                        }, a))), s.createElement(v.W, {
                            className: "blue-bar__headline",
                            type: v.Sb.Span,
                            fontSize: v.Ca.Size6
                        }, l)), s.createElement(v.Xa, {
                            display: v.X.InlineFlex,
                            flexShrink: 0
                        }, s.createElement(v.W, {
                            bold: !0,
                            type: v.Sb.Span,
                            noWrap: !0,
                            fontSize: v.Ca.Size6,
                            color: v.O.Base
                        }, s.createElement("a", {
                            className: "blue-bar__link",
                            href: u,
                            target: "_blank",
                            rel: "noopener noreferrer"
                        }, d))))))
                    }, t
                }(s.Component),
                L = Object(l.compose)(Object(i.connect)(function(e) {
                    return {
                        blockBannerForGDPR: Object(x.h)(e)
                    }
                }), Object(d.a)(T, {
                    options: function() {
                        return {
                            variables: {
                                stringIds: ["twitch.prime.bluebar.left1", "twitch.prime.bluebar.center1", "twitch.prime.bluebar.right1"],
                                dateOverride: Object(C.i)(C.f.DateOverride)
                            }
                        }
                    }
                }), Object(h.b)("BlueBarComponent"))(R),
                U = n("z8lI");
            n.d(t, "d", function() {
                return I
            }), n.d(t, "a", function() {
                return L
            }), n.d(t, "c", function() {
                return U.a
            }), n.d(t, "f", function() {
                return C.i
            }), n.d(t, "b", function() {
                return C.c
            }), n.d(t, "e", function() {
                return C.f
            })
        },
        A1Hl: function(e, t, n) {},
        "HAa/": function(e, t, n) {
            "use strict";
            var r, i = n("mrSG"),
                o = n("TSYQ"),
                a = n("17x9"),
                s = n("q1tI"),
                l = n("/7QA");
            n("miXC");
            ! function(e) {
                e[e.Up = 0] = "Up", e[e.Down = 1] = "Down"
            }(r || (r = {}));
            var c = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        hasPendingLoadMoreRequest: !1,
                        loadedMore: !0
                    }, t.isTriggerVisible = function(e, t) {
                        var n = t.top,
                            r = t.top + t.height;
                        return !(e.bottom < n || e.top > r)
                    }, t.getOrientation = function() {
                        return void 0 === t.props.orientation ? r.Up : t.props.orientation
                    }, t.setWrapRef = function(e) {
                        return t.wrapElement = e
                    }, t.setRef = function(e) {
                        return t.element = e
                    }, t
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    var e = this.getOrientation(),
                        t = o({
                            "scrollable-trigger__trigger-area": !0,
                            "scrollable-trigger__trigger-area--up": e === r.Up,
                            "scrollable-trigger__trigger-area--down": e === r.Down
                        }),
                        n = {
                            height: this.props.pixelThreshold || 100
                        };
                    return s.createElement("div", {
                        className: "scrollable-trigger__wrapper",
                        ref: this.setWrapRef
                    }, s.createElement("div", {
                        className: t,
                        ref: this.setRef,
                        style: n
                    }))
                }, t.prototype.componentDidMount = function() {
                    var e = this.context.registerReceiver;
                    e ? this.unregister = e(this) : l.k.warn("<InfiniteScrollTrigger /> initialized missing a <ScrollableArea /> provider")
                }, t.prototype.componentWillUnmount = function() {
                    this.unregister && this.unregister()
                }, t.prototype.componentWillReceiveProps = function(e) {
                    !this.props.enabled && e.enabled && this.context.requestVisibilityCheck && this.context.requestVisibilityCheck(this)
                }, t.prototype.checkVisible = function(e, t, n) {
                    return i.__awaiter(this, void 0, void 0, function() {
                        var t, r, o, a, s = this;
                        return i.__generator(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    if (void 0 === n && (n = this.props.requestCap || 5), !(this.wrapElement && this.element && (this.state.loadedMore || this.props.forceLoadMoreContent) && !this.state.hasPendingLoadMoreRequest && this.props.enabled && n > 0)) return [3, 4];
                                    if (t = this.element.getBoundingClientRect(), r = this.props.contentLength, o = this.wrapElement.offsetTop, !this.isTriggerVisible(t, e)) return [3, 4];
                                    this.setState({
                                        hasPendingLoadMoreRequest: !0
                                    }), i.label = 1;
                                case 1:
                                    return i.trys.push([1, 3, , 4]), [4, this.props.loadMore()];
                                case 2:
                                    return i.sent(), this.setState({
                                        hasPendingLoadMoreRequest: !1
                                    }), requestAnimationFrame(function() {
                                        var t;
                                        s.element && (t = void 0 !== s.props.contentLength && void 0 !== r ? s.props.contentLength > r : s.wrapElement.offsetTop > o, s.setState({
                                            loadedMore: t
                                        }), n && (t || s.props.forceLoadMoreContent) && s.checkVisible(e, void 0, n - 1))
                                    }), [3, 4];
                                case 3:
                                    throw a = i.sent(), this.element && this.setState({
                                        hasPendingLoadMoreRequest: !1
                                    }), a;
                                case 4:
                                    return [2]
                            }
                        })
                    })
                }, t.contextTypes = {
                    registerReceiver: a.func,
                    requestVisibilityCheck: a.func
                }, t
            }(s.Component);
            n.d(t, "b", function() {
                return r
            }), n.d(t, "a", function() {
                return c
            })
        },
        J4y2: function(e, t, n) {
            "use strict";
            var r = n("/MKj"),
                i = n("fvjX"),
                o = n("mrSG"),
                a = n("5e4V"),
                s = n("Pmew"),
                l = n("p7E/");

            function c(e, t) {
                var n = this;
                return function() {
                    return o.__awaiter(n, void 0, void 0, function() {
                        return o.__generator(this, function(n) {
                            switch (n.label) {
                                case 0:
                                    return Object(l.b)(l.a.LanguageSelection + e)(), t ? [4, Object(s.c)({
                                        userID: t,
                                        preferredLanguageTag: Object(s.b)(e)
                                    })] : [3, 2];
                                case 1:
                                    n.sent(), n.label = 2;
                                case 2:
                                    return Object(a.c)(e), window.location.reload(!0), [2]
                            }
                        })
                    })
                }
            }
            var u, d = n("q1tI"),
                p = n("/7QA"),
                m = n("Ue10");
            n("d/K1");
            ! function(e) {
                e.LeftColumn = "language-selector__left-column", e.RightColumn = "language-selector__right-column"
            }(u || (u = {}));
            var f = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.renderLink = function(e) {
                        return d.createElement(m.Ua, {
                            key: e.languageCode,
                            onClick: t.handleLanguageClick,
                            "data-target": "language-selector-link",
                            "data-language": e.languageCode
                        }, d.createElement(m.Xa, {
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
                return o.__extends(t, e), t.prototype.render = function() {
                    var e = Math.floor(p.a.locales.length / 2);
                    return d.createElement(m.Xa, {
                        className: "language-selector",
                        display: m.X.Flex,
                        padding: {
                            y: 1
                        }
                    }, d.createElement("div", {
                        className: "language-selector__list language-selector__list--border-right",
                        "data-test-selector": u.LeftColumn
                    }, p.a.locales.slice(0, e).map(this.renderLink)), d.createElement("div", {
                        className: "language-selector__list",
                        "data-test-selector": u.RightColumn
                    }, p.a.locales.slice(e).map(this.renderLink)))
                }, t
            }(d.Component);
            var h = Object(r.connect)(function(e) {
                return {
                    currentUserID: e.session.user && e.session.user.id || null
                }
            }, function(e) {
                return Object(i.bindActionCreators)({
                    changeLanguage: c
                }, e)
            })(f);
            n.d(t, "a", function() {
                return h
            })
        },
        JVUd: function(e, t, n) {
            "use strict";
            var r = n("mrSG"),
                i = n("17x9"),
                o = n("q1tI"),
                a = n("/7QA");

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
                            }, e.logger = a.k.withCategory("with-impression-listener"), e.setRef = function(t) {
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
                            return o.createElement("div", {
                                ref: this.setRef
                            }, o.createElement(n, r.__assign({}, this.props, e)))
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
                                    o = t.pixels,
                                    a = r.bottom - r.top,
                                    l = n.bottom - n.top,
                                    c = Math.min(n.bottom - r.top, a, l);
                                if (o) {
                                    if (a >= o) return c >= o;
                                    i = 100
                                }
                                return !i || 100 * (c / a) >= i
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
                    }(o.Component)
                }
            }
            n.d(t, "a", function() {
                return l
            })
        },
        KbPt: function(e, t, n) {},
        N0BP: function(e, t, n) {
            "use strict";

            function r(e) {
                for (var t = {}, n = 0, r = Object.keys(e).filter(function(e) {
                        return e.startsWith("data-")
                    }); n < r.length; n++) {
                    var i = r[n];
                    t[i] = e[i]
                }
                return t
            }
            n.d(t, "a", function() {
                return r
            })
        },
        O4UZ: function(e, t, n) {
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
                return p
            }), n.d(t, "l", function() {
                return g
            }), n.d(t, "h", function() {
                return v
            }), n.d(t, "j", function() {
                return b
            }), n.d(t, "o", function() {
                return k
            }), n.d(t, "q", function() {
                return y
            }), n.d(t, "p", function() {
                return C
            }), n.d(t, "f", function() {
                return h
            }), n.d(t, "i", function() {
                return S
            }), n.d(t, "n", function() {
                return E
            }), n.d(t, "m", function() {
                return N
            }), n.d(t, "k", function() {
                return _
            });
            var r, i, o = n("TSYQ"),
                a = n("cr+I"),
                s = n("q1tI"),
                l = n("/7QA"),
                c = n("ht6z"),
                u = n("Ue10"),
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
                                    return s.createElement(u.U, {
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
            var h, g = function(e) {
                    return e === r.Vertical
                },
                v = function(e, t) {
                    var n = t === r.Horizontal ? "horizontal" : "vertical";
                    return o(e, e + "--" + n)
                },
                b = function() {
                    return O("seenOffers")
                },
                k = function(e) {
                    l.m.set("seenOffers", e)
                },
                y = function(e, t) {
                    return (e && (e.priority || 0 === e.priority) ? e.priority : 99999) - (t && (t.priority || 0 === t.priority) ? t.priority : 99999)
                },
                O = function(e) {
                    return l.m.get(e, [])
                },
                C = function(e, t) {
                    return void 0 !== e && void 0 !== t && (!e && Object(c.a)(t))
                };
            ! function(e) {
                e.DateOverride = "dateOverride", e.CountryCode = "countryCode"
            }(h || (h = {}));
            var S = function(e) {
                    var t = location.search,
                        n = a.parse(t);
                    return n && n[e] || void 0
                },
                E = function(e) {
                    return e && !e.loading && !e.error && null !== e.currentUser && e.currentUser.hasPrime
                },
                N = function(e) {
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
                    }, {
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "countryCode"
                            }
                        },
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "String"
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
                            }, {
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "countryCode"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "countryCode"
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
                    end: 411
                }
            };
            n.loc.source = {
                body: "query Prime_PrimeOfferList_PrimeOffers($dateOverride: Time $countryCode: String) {\nprimeOffers(dateOverride: $dateOverride countryCode: $countryCode) {\nid\ntitle\nimageURL\nclaimInstructions\ndescription\ndeliveryMethod\npriority\ntags\ncontent {\ngame {\nid\nname\n}\nexternalURL\npublisher\ncategories\n}\nself {\nhasEntitlement\nclaimData\nstatus\ngifts {\nid\nto {\nlogin\n}\nfrom {\nlogin\n}\nofferID\nofferConnection {\nstatus\n}\n}\n}\n}\n}",
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
                o = /webOS/i,
                a = /iPhone/i,
                s = /iPad/i,
                l = /iPod/i,
                c = /BlackBerry/i,
                u = /Windows Phone/i,
                d = /Mobile/i;

            function p(e) {
                return m(e) || o.test(e) || a.test(e) || s.test(e) || l.test(e) || c.test(e) || u.test(e) || d.test(e)
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
                return h
            }), n.d(t, "r", function() {
                return g
            }), n.d(t, "l", function() {
                return v
            }), n.d(t, "i", function() {
                return b
            }), n.d(t, "m", function() {
                return k
            }), n.d(t, "k", function() {
                return y
            }), n.d(t, "j", function() {
                return O
            }), n.d(t, "p", function() {
                return C
            }), n.d(t, "n", function() {
                return N
            }), n.d(t, "o", function() {
                return _
            }), n.d(t, "h", function() {
                return D
            }), n.d(t, "g", function() {
                return I
            }), n.d(t, "f", function() {
                return w
            });
            var r, i, o, a, s, l, c = n("/7QA"),
                u = n("2xye"),
                d = n("O4UZ");

            function p(e) {
                c.o.track(u.SpadeEventType.CrownInteraction, {
                    has_prime: e.hasPrime,
                    action: r.Hover,
                    user_agent: navigator.userAgent
                })
            }

            function m(e, t) {
                c.o.track(u.SpadeEventType.CrownInteraction, {
                    has_prime: t.hasPrime,
                    number_of_offers: t.numberOfOffers,
                    action: e ? r.Open : r.Close,
                    user_agent: navigator.userAgent
                })
            }

            function f(e) {
                c.o.track(u.SpadeEventType.CrownInteraction, {
                    has_prime: e.hasPrime,
                    number_of_offers: e.numberOfOffers,
                    action: r.OffersLoaded,
                    user_agent: navigator.userAgent
                })
            }

            function h(e) {
                E(e, i.Click, a.StartYourFreeTrial)
            }

            function g(e) {
                E(e, i.Hover, a.StartYourFreeTrial)
            }

            function v(e, t) {
                E(t, i.Click, e ? a.MoreInfo : a.CloseInfo)
            }

            function b(e, t) {
                S(e, i.Click, t)
            }

            function k(e) {
                E(e, i.Hover, a.MoreInfo)
            }

            function y(e) {
                E(e, i.Hover, a.CloseInfo)
            }

            function O(e, t) {
                S(e, i.Hover, t)
            }

            function C(e) {
                E(e, i.Impression, a.Offer)
            }

            function S(e, t, n) {
                var r;
                switch (n) {
                    case d.e.CLAIM_CODE:
                        r = a.GetCode;
                        break;
                    case d.e.EXTERNAL_OFFER:
                        r = a.LearnMore;
                        break;
                    case d.e.DIRECT_ENTITLEMENT:
                        r = a.ClaimOffer
                }
                r && E(e, t, r)
            }

            function E(e, t, n) {
                c.o.track(u.SpadeEventType.PrimeOfferInteraction, {
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
                c.o.track(u.SpadeEventType.PrimeLootPagePageview, {
                    reftag: e.reftag,
                    user_agent: navigator.userAgent
                })
            }

            function _(e) {
                c.o.track(u.SpadeEventType.PrimeLootPageTryPrimeClick, {
                    button_position: e.buttonPosition,
                    user_agent: navigator.userAgent
                })
            }

            function D() {
                x(o.Impression)
            }

            function I() {
                x(o.Hover)
            }

            function w() {
                x(o.Click)
            }

            function x(e) {
                c.o.track(u.SpadeEventType.PrimeBlueBarInteraction, {
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
            }(o || (o = {})),
            function(e) {
                e.StartYourFreeTrial = "start_your_free_trial", e.MoreInfo = "more_info", e.CloseInfo = "close_info", e.ClaimOffer = "claim_offer", e.LearnMore = "learn_more", e.GetCode = "get_code", e.Offer = "offer"
            }(a || (a = {})),
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
                    }, {
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "countryCode"
                            }
                        },
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "String"
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
                            }, {
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "countryCode"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "countryCode"
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
                    end: 173
                }
            };
            n.loc.source = {
                body: "query Prime_PrimeOffers_PrimeOfferIds($dateOverride: Time $countryCode: String) {\nprimeOffers(dateOverride: $dateOverride countryCode: $countryCode) {\nid\nself {\nstatus\n}\n}\n}",
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
                o = n("q1tI"),
                a = n("f00E"),
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
                    var e = o.Children.toArray(this.props.children);
                    if (2 !== e.length) throw new Error("ToggleBalloonWrapper should only be given two children: a clickable and a Balloon");
                    var t = e[0],
                        n = e[1];
                    if (n.type !== s.u) throw new Error("ToggleBalloonWrapper needs a Balloon as its second child element");
                    var a = o.cloneElement(t, {
                            onClick: this.handleButtonClick
                        }),
                        l = null;
                    (this.state.hasInteracted || this.props.alwaysMountBalloonContent) && (l = o.cloneElement(n, {
                        show: this.state.showBalloon
                    }), this.props.hideBalloonOnInsideClick && (l = o.createElement("div", {
                        "data-test-selector": r.BalloonInsideClickDetector,
                        onClick: this.handleInsideBalloonClick
                    }, l)));
                    var c = a;
                    return this.props.tooltipProps && (c = o.createElement(s.Vb, i.__assign({}, this.props.tooltipProps), a)), o.createElement(s.Xa, {
                        "data-toggle-balloon-id": this.toggleBalloonId,
                        display: this.props.display,
                        position: s.hb.Relative
                    }, o.createElement("div", {
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
            }(o.Component)
        },
        cinR: function(e, t, n) {
            "use strict";
            var r, i = n("mrSG"),
                o = n("q1tI");
            ! function(e) {
                e.PrimeTrackingButtonWrapper = "test_selector_prime_tracking_button_wrapper"
            }(r || (r = {}));
            var a = 200,
                s = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.hoverTimer = 0, t.onMouseEnter = function(e) {
                            t.clearTimeout(), t.hoverTimer = setTimeout(function() {
                                t.props.onHover && t.props.onHover(e)
                            }, a)
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
                        return o.createElement("div", {
                            "data-test-selector": r.PrimeTrackingButtonWrapper,
                            onMouseEnter: this.onMouseEnter,
                            onMouseLeave: this.onMouseLeave,
                            onClick: this.onClick
                        }, this.props.children)
                    }, t
                }(o.Component);
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
                return o
            }), n.d(t, "b", function() {
                return a
            }), n.d(t, "e", function() {
                return l
            });
            var r = "sm_tw_tup_ntp_t_all",
                i = "sm_tw_thp_blue_t_all",
                o = "sm_w_tup_ntp_t_c",
                a = "sm_om_tpltp",
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
        miXC: function(e, t, n) {},
        oj5W: function(e, t, n) {},
        "p7E/": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return r
            }), n.d(t, "b", function() {
                return a
            });
            var r, i = n("/7QA"),
                o = n("2xye");
            ! function(e) {
                e.HomeIcon = "home_icon", e.Following = "following", e.Browse = "browse", e.GetDesktop = "get_desktop", e.Store = "store", e.TryPrime = "try_prime", e.GoTurbo = "go_turbo", e.ThreeDot = "three_dot", e.PrimeCrown = "prime_crown", e.NotificationsBell = "notifications_bell", e.GetBits = "get_bits", e.AvatarDropdown = "avatar_dropdow", e.LogIn = "login", e.SignUp = "signup", e.About = "about", e.AdChoices = "ad_choices", e.Advertisers = "advertisers", e.Blog = "blog", e.CommunityGuidelines = "community_guidelines", e.CookiePolicy = "cookie_policy", e.Creative = "creative", e.Developers = "developers", e.Help = "help", e.Jobs = "jobs", e.Language = "language", e.Music = "music", e.Store2 = "store2", e.Partners = "partners", e.Press = "press", e.PrivacyPolicy = "privacy_policy", e.Security = "security", e.Terms = "terms", e.LanguageSelection = "language_"
            }(r || (r = {}));
            var a = function(e) {
                return function() {
                    var t = i.o.getLastPageview();
                    i.o.track(o.SpadeEventType.TopNavClick, {
                        location: t && t.location,
                        button_name: e
                    })
                }
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
            var r = n("mrSG"),
                i = n("q1tI"),
                o = n("GnwI"),
                a = n("O4UZ"),
                s = n("Ue10"),
                l = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        var e = Object(a.g)(this.props.errorType);
                        return i.createElement(s.Cb, {
                            background: s.r.Alt2,
                            display: s.X.Flex,
                            justifyContent: s.Wa.Center,
                            padding: {
                                y: 1
                            },
                            margin: {
                                bottom: 1
                            },
                            textAlign: s.Ob.Center,
                            "data-test-selector": this.props.testTarget,
                            "data-a-target": this.props.testTarget
                        }, i.createElement(s.W, {
                            type: s.Sb.H4,
                            align: s.cc.Middle
                        }, i.createElement(s.Cb, {
                            padding: 1,
                            display: s.X.InlineFlex,
                            flexGrow: 1,
                            flexWrap: s.Ba.NoWrap,
                            alignItems: s.f.Center,
                            textAlign: s.Ob.Left,
                            fontSize: this.props.fontSize ? this.props.fontSize : s.Ca.Size5,
                            "data-a-target": "prime-error-glitch"
                        }, i.createElement(s.Xa, {
                            margin: {
                                right: 1
                            },
                            display: s.X.InlineFlex,
                            flexGrow: 1,
                            flexWrap: s.Ba.NoWrap,
                            alignItems: s.f.Center
                        }, i.createElement(s.qb, {
                            asset: s.rb.DeadGlitch,
                            type: s.sb.Alert,
                            width: 20,
                            height: 20
                        })), i.createElement(s.W, {
                            type: s.Sb.P
                        }, e))))
                    }, t
                }(i.Component),
                c = Object(o.b)("PrimeError", {
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