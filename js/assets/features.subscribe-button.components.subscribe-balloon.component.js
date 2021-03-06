(window.webpackJsonp = window.webpackJsonp || []).push([
    [199], {
        "+naV": function(e, t, n) {
            e.exports = n.p + "assets/10-gifts-2x-cf78830dc8b3e0039af8.png"
        },
        "/Zlu": function(e, t, n) {
            e.exports = n.p + "assets/1-gift-4x-b67143fa86d9788306fe.png"
        },
        "/iCH": function(e, t, n) {
            e.exports = n.p + "assets/1-gift-2x-15e5628e525688ddff00.png"
        },
        "25vm": function(e, t, n) {},
        "2xp8": function(e, t, n) {
            e.exports = n.p + "assets/50-gifts-1x-52ba645f6c5362c19ef4.png"
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
                o = n("oJmH"),
                s = n("/7QA"),
                c = n("8/mp"),
                u = n("yR8l"),
                l = n("GnwI"),
                d = n("Ue10"),
                p = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        var e = Object(s.d)("You'll get characters, vehicles, skins, and boosts for games like {hearthstone} and {smite}, plus surprises like a rotating selection of indie games.", {
                            hearthstone: a.createElement(d.W, {
                                italic: !0,
                                type: d.Wb.Span
                            }, Object(s.d)("Hearthstone", "PrimeEmpty")),
                            smite: a.createElement(d.W, {
                                italic: !0,
                                type: d.Wb.Span
                            }, Object(s.d)("Smite", "PrimeEmpty"))
                        }, "PrimeEmpty");
                        return a.createElement(d.Ya, {
                            className: "prime-empty",
                            margin: 2
                        }, a.createElement(d.Ya, {
                            textAlign: d.Sb.Center,
                            margin: 2
                        }, a.createElement("img", {
                            className: "prime-empty__image",
                            src: "https://m.media-amazon.com/images/G/01/sm/landing/Trunk_w_Star_transparent._V530838660_.png",
                            alt: Object(s.d)("Prime Treasure Chest", "PrimeEmpty")
                        })), a.createElement(d.W, {
                            type: d.Wb.P,
                            bold: !0
                        }, Object(s.d)("Free in-game loot every month, plus surprises", "PrimeEmpty")), a.createElement("div", null, e))
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
                y = n("cx1G"),
                k = (n("5ZOr"), function(e) {
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
                            t = S.l(e),
                            n = S.h("prime-claim-button", e);
                        return a.createElement(d.Ya, {
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
                        var o = a.createElement(h.a, {
                            onHover: this.onHover
                        }, a.createElement(d.z, {
                            fullWidth: !0,
                            state: n ? d.E.Loading : d.E.Default,
                            disabled: n,
                            linkTo: t,
                            onClick: this.onClick,
                            "data-a-target": "prime-claim-button",
                            icon: this.isGifted() ? d.ub.Gift : void 0
                        }, r));
                        return a.createElement(d.Ya, {
                            position: d.kb.Relative
                        }, o)
                    }, t.prototype.getButtonText = function() {
                        var e = Object(s.d)("Learn More", "PrimeClaimButton");
                        if (this.props.externalURL) return e;
                        switch (this.props.offerType) {
                            case S.e.CLAIM_CODE:
                                return Object(s.d)("Get Code", "PrimeClaimButton");
                            case S.e.EXTERNAL_OFFER:
                                return e;
                            case S.e.DIRECT_ENTITLEMENT:
                            default:
                                return this.isGifted() ? Object(s.d)("Claim Gift", "PrimeClaimButton") : Object(s.d)("Claim Offer", "PrimeClaimButton")
                        }
                    }, t
                }(a.Component)),
                E = Object(o.compose)(Object(u.a)(y, {
                    skip: function(e) {
                        return !Object(S.k)(e.offerID)
                    },
                    options: function(e) {
                        return {
                            variables: {
                                offerID: e.offerID
                            }
                        }
                    }
                }), Object(l.b)("PrimeClaimButton"))(k),
                O = (n("KbPt"), function(e) {
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
                            return a.createElement(d.Fb, {
                                className: "prime-claim-description__body",
                                background: d.r.Alt2,
                                border: !0,
                                position: d.kb.Relative
                            }, n.renderDescription())
                        }, n.renderHorizontalDescriptionBlock = function() {
                            return a.createElement(d.Fb, {
                                className: "prime-claim-description__body",
                                background: d.r.Base,
                                border: !0,
                                position: d.kb.Absolute,
                                attachTop: !0,
                                attachLeft: !0,
                                attachRight: !0,
                                margin: {
                                    right: 1,
                                    top: .5
                                },
                                overflow: d.db.Scroll
                            }, n.renderDescription())
                        }, n.renderDescription = function() {
                            return a.createElement(d.Ya, {
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
                        return a.createElement(d.Ya, {
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
                        return this.state.showDescription ? Object(s.d)("Close Info", "PrimeClaimDescription") : Object(s.d)("More Info", "PrimeClaimDescription")
                    }, t.prototype.getDescriptionBlock = function(e) {
                        var t = null,
                            n = Object(S.l)(e);
                        return this.state.showDescription && (t = n ? this.renderVerticalDescriptionBlock() : this.renderHorizontalDescriptionBlock()), t
                    }, t
                }(a.Component)),
                P = Object(l.b)("PrimeClaimDescription", {
                    autoReportInteractive: !0
                })(O),
                C = n("fvjX"),
                N = n("aCAx"),
                T = n("kRBY"),
                D = n("ZS2+"),
                _ = n("cZKs"),
                x = D.a.wrap(function() {
                    return Promise.all([n.e(0), n.e(83)]).then(n.bind(null, "+Zk8"))
                }, "GiftForm"),
                G = function(e) {
                    function t(t) {
                        return e.call(this, t) || this
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        return a.createElement(d.Ya, {
                            className: "prime-gift-modal",
                            position: d.kb.Relative,
                            "data-a-target": "passport-modal"
                        }, a.createElement(x, {
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
                I = Object(l.b)("PrimeGiftModal", {
                    autoReportInteractive: !0
                })(G),
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
                            icon: d.ub.Gift,
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
                w = Object(o.compose)(Object(l.b)("PrimeGiftButton", {
                    autoReportInteractive: !0
                }))(F);
            var A = Object(i.connect)(function(e) {
                    return {
                        isLoggedIn: Object(T.f)(e)
                    }
                }, function(e, t) {
                    return Object(C.bindActionCreators)({
                        giftPrimeOffer: function(e, n) {
                            return Object(N.d)(I, {
                                offerID: t.offerID,
                                offer: t.offer,
                                getGiftRecipientList: e,
                                updateGiftRecipientList: n
                            })
                        }
                    }, e)
                })(w),
                j = n("9pSj"),
                R = n("j3KY"),
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
                        return a.createElement(d.Ya, {
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
                        }, Object(s.d)("Start Your Free Trial", "PrimeUpsellButton"))))
                    }, t.prototype.getLink = function() {
                        if (this.props.externalURL) return this.props.externalURL;
                        var e = (this.props.orientation || j.b.Default) === j.b.Vertical ? R.d : R.b,
                            t = this.props.externalReftag || e,
                            n = window.location.pathname.substring(1);
                        return Object(R.e)(t, n)
                    }, t
                }(a.Component),
                L = Object(l.b)("PrimeUpsellButton", {
                    autoReportInteractive: !0
                })(B),
                U = n("zUQL"),
                M = function(e) {
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
                        return a.createElement(d.Ya, {
                            className: t,
                            margin: {
                                bottom: 1
                            }
                        }, this.getCallToAction(), this.getClaimDescriptionSection())
                    }, t.prototype.getCallToAction = function() {
                        var e = this.props.data;
                        return Object(S.n)(e) || this.props.isGifted ? Object(S.n)(e) && Object(S.k)(this.props.offerID) ? a.createElement(d.Ya, {
                            display: d.X.Flex,
                            alignItems: d.f.Center
                        }, a.createElement(d.Ya, {
                            fullWidth: !0,
                            display: d.X.Flex,
                            margin: {
                                right: 1
                            }
                        }, this.renderPrimeClaimButton()), a.createElement(d.Ya, {
                            fullWidth: !0,
                            display: d.X.Flex,
                            margin: {
                                left: 1
                            }
                        }, a.createElement(A, {
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
                        return a.createElement(P, {
                            description: this.props.offerDescription,
                            offerID: this.props.offerID,
                            externalURL: this.props.externalURL,
                            index: this.props.index,
                            orientation: this.props.orientation,
                            hasPrime: Object(S.n)(e)
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
                W = Object(o.compose)(Object(u.a)(U), Object(l.b)("PrimeInstructions"))(M),
                Y = n("z8lI"),
                H = (n("25vm"), function(e) {
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
                        var e = this.state.copied ? Object(s.d)("copied", "CopyButton") : Object(s.d)("copy", "CopyButton");
                        return a.createElement(d.Ya, {
                            className: "copy-button copy-btn",
                            display: d.X.Flex
                        }, a.createElement(d.Qa, {
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
                z = Object(C.compose)(Object(l.b)("CopyButton"))(H),
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
                    return r.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive()
                    }, t.prototype.componentWillMount = function() {
                        this.props.initialText && this.setState({
                            value: this.props.initialText,
                            copied: !1
                        })
                    }, t.prototype.render = function() {
                        return this.state && this.state.value ? a.createElement(d.Ya, {
                            className: "copyable-item",
                            display: d.X.Flex,
                            flexGrow: 1
                        }, a.createElement(d.Ya, {
                            flexGrow: 1
                        }, a.createElement(d.Sa, {
                            type: d.Ua.Text,
                            onChange: this.onChange,
                            value: this.state.value,
                            disabled: this.props.disabled,
                            readOnly: this.props.readOnly
                        })), a.createElement(d.Ya, null, a.createElement(z, {
                            clipboardText: this.state.value
                        }))) : null
                    }, t
                }(a.Component),
                q = Object(C.compose)(Object(l.b)("CopyableItem"))(V),
                X = (n("Sb+K"), function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.getClaimInstructions = function() {
                            return a.createElement(d.fc, null, a.createElement(f, {
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
                            return a.createElement(d.Fb, {
                                className: "prime-claim-instructions prime-claim-instructions--vertical",
                                "data-a-target": "prime-claim-instructions--vertical",
                                background: d.r.Alt2,
                                border: !0,
                                padding: 1,
                                fontSize: d.Ca.Size6
                            }, n.getClaimInstructions())
                        }, n.renderHorizontalLayout = function() {
                            return a.createElement(d.Fb, {
                                fullWidth: !0,
                                className: "prime-claim-instructions prime-claim-instructions--horizontal",
                                margin: {
                                    top: 1
                                }
                            }, a.createElement(d.Ya, {
                                fullWidth: !0,
                                justifyContent: d.Xa.Center,
                                textAlign: d.Sb.Center
                            }, a.createElement(d.U, {
                                onClick: n.toggleShowDescription
                            }, n.getDescriptionButtonText())), n.state.showDescription && a.createElement(d.Fb, {
                                className: "prime-claim-instructions__body",
                                "data-a-target": "prime-claim-instructions--horizontal",
                                border: !0,
                                position: d.kb.Absolute,
                                padding: 1,
                                background: d.r.Alt,
                                overflow: d.db.Scroll,
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
                    return r.__extends(t, e), t.prototype.render = function() {
                        var e = this.props.orientation || S.c.Default;
                        return Object(S.l)(e) ? this.renderVerticalLayout() : this.renderHorizontalLayout()
                    }, t
                }(a.Component)),
                Q = Object(l.b)("PrimeClaimInstructions", {
                    autoReportInteractive: !0
                })(X),
                K = n("UFVY"),
                $ = (n("PCo6"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.renderGiftRedeemedButton = function(e) {
                            if (!t.props.data || t.props.data.loading || t.props.data.error) return a.createElement(d.jb, null);
                            var n = t.props.data.currentUser && t.props.data.currentUser.primeGift;
                            return a.createElement(d.Fb, {
                                fullWidth: !0,
                                display: d.X.Flex,
                                justifyContent: d.Xa.Center,
                                margin: {
                                    bottom: e,
                                    right: .5
                                },
                                className: "prime-redeem__confirmation",
                                alignItems: d.f.Center,
                                borderRadius: d.x.Medium
                            }, a.createElement(d.W, {
                                type: d.Wb.Span,
                                align: d.gc.Middle,
                                color: d.O.Overlay
                            }, a.createElement(d.Ya, {
                                display: d.X.InlineFlex,
                                flexWrap: d.Ba.NoWrap,
                                alignItems: d.f.Center,
                                "data-test-target": "prime-redeem-check",
                                "data-a-target": "prime-redeem-check"
                            }, a.createElement(d.Ya, {
                                margin: {
                                    right: 1
                                },
                                display: d.X.InlineFlex,
                                flexWrap: d.Ba.NoWrap,
                                padding: {
                                    y: .5
                                },
                                alignItems: d.f.Center
                            }, a.createElement(d.tb, {
                                asset: n ? d.ub.Gift : d.ub.Check,
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
                    return r.__extends(t, e), t.prototype.render = function() {
                        var e = this.props.orientation || S.c.Default,
                            t = Object(S.h)("prime-redeem", e);
                        return a.createElement(d.Ya, {
                            className: t
                        }, this.getCodeOrConfirmation(e), this.getPrimeClaimInstructions())
                    }, t.prototype.getCodeOrConfirmation = function(e) {
                        var t = Object(S.l)(e);
                        if (this.props.code && this.props.deliveryMethod === S.e.CLAIM_CODE) return a.createElement(d.Ya, {
                            "data-a-target": "prime-redeem-code-container"
                        }, a.createElement(q, {
                            initialText: this.props.code,
                            readOnly: !0,
                            textCenter: !0
                        }));
                        var n = t ? 1 : 0;
                        return Object(S.k)(this.props.offerID) ? this.props.isPrime ? a.createElement(d.Ya, {
                            display: d.X.Flex
                        }, this.renderGiftRedeemedButton(n), a.createElement(d.Ya, {
                            fullWidth: !0,
                            display: d.X.Flex,
                            margin: {
                                left: .5,
                                bottom: n
                            }
                        }, a.createElement(A, {
                            offerID: this.props.offerID,
                            offer: this.props.offer,
                            toggleCrownMenu: this.props.toggleCrownMenu
                        }))) : this.renderGiftRedeemedButton(n) : a.createElement(d.Fb, {
                            display: d.X.Flex,
                            justifyContent: d.Xa.Center,
                            margin: {
                                bottom: n
                            },
                            padding: {
                                y: n
                            },
                            className: "prime-redeem__confirmation",
                            borderRadius: d.x.Medium
                        }, a.createElement(d.W, {
                            type: t ? d.Wb.H4 : d.Wb.H6,
                            align: d.gc.Middle,
                            color: d.O.Overlay
                        }, a.createElement(d.Ya, {
                            display: d.X.InlineFlex,
                            flexGrow: 1,
                            flexWrap: d.Ba.NoWrap,
                            alignItems: d.f.Center,
                            "data-test-target": "prime-redeem-check",
                            "data-a-target": "prime-redeem-check",
                            padding: {
                                left: n
                            }
                        }, a.createElement(d.Ya, {
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
                        }, a.createElement(d.tb, {
                            asset: d.ub.Check,
                            width: 20,
                            height: 20
                        })), Object(s.d)("Added To Your Twitch Account", "PrimeRedeem"))))
                    }, t
                }(a.Component)),
                J = Object(o.compose)(Object(l.b)("PrimeRedeem", {
                    autoReportInteractive: !0
                }), Object(u.a)(K, {
                    skip: function(e) {
                        return !Object(S.k)(e.offerID)
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
                                o = i && i.categories && i.categories[0] || "",
                                s = i && i.publisher || "";
                            return a.createElement(d.Fb, {
                                "data-a-target": "prime-offer",
                                className: "prime-offer prime-offer--vertical",
                                alignItems: d.f.Center,
                                display: d.X.Block,
                                borderBottom: !n,
                                textAlign: d.Sb.Left,
                                position: d.kb.Relative,
                                padding: {
                                    x: 2,
                                    y: 1
                                }
                            }, a.createElement(d.Ya, {
                                padding: {
                                    y: .5
                                }
                            }, t.renderTitle(e), a.createElement(d.W, null, t.renderGiftText())), t.renderOfferImageOrVideo(e.imageURL), a.createElement(d.Fb, {
                                margin: {
                                    bottom: 2
                                }
                            }, a.createElement(d.Ya, {
                                className: "prime-offer__description",
                                padding: {
                                    top: .5
                                }
                            }, a.createElement(d.W, {
                                type: d.Wb.P
                            }, r, " ", o)), a.createElement(d.Ya, {
                                className: "prime-offer__publisher"
                            }, a.createElement(d.W, {
                                type: d.Wb.P,
                                color: d.O.Alt2,
                                fontSize: d.Ca.Size7
                            }, s))), t.renderRedeemUpsellOrClaimSection(e))
                        }, t.renderHorizontalLayout = function(e) {
                            var n = e.content,
                                i = n && n.game && n.game.name || "",
                                r = n && n.categories && n.categories[0] || "",
                                o = n && n.publisher || "";
                            return a.createElement(d.Fb, {
                                "data-a-target": "prime-offer",
                                className: "prime-offer prime-offer--horizontal",
                                alignItems: d.f.Center,
                                display: d.X.InlineBlock,
                                textAlign: d.Sb.Left,
                                position: d.kb.Relative,
                                padding: {
                                    right: 1,
                                    y: .5
                                },
                                fullWidth: !0
                            }, a.createElement(d.Fb, {
                                className: "prime-offer__content",
                                margin: {
                                    bottom: 2
                                }
                            }, a.createElement(d.Fb, {
                                className: "prime-offer__content__text",
                                background: d.r.Base
                            }, a.createElement(d.Ya, {
                                className: "prime-offer__publisher"
                            }, a.createElement(d.W, {
                                type: d.Wb.P,
                                color: d.O.Alt2,
                                fontSize: d.Ca.Size7,
                                transform: d.Vb.Uppercase
                            }, o)), a.createElement(d.Ya, {
                                className: "prime-offer__title",
                                alignItems: d.f.Start,
                                padding: {
                                    bottom: .5
                                }
                            }, t.renderTitle(e)), a.createElement(d.Ya, {
                                className: "prime-offer__description",
                                padding: {
                                    bottom: .5
                                }
                            }, a.createElement(d.W, {
                                type: d.Wb.P,
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
                            }), a.createElement(d.Ra, {
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
                                var o = t.getErrorType();
                                return a.createElement(Y.a, {
                                    fontSize: d.Ca.Size6,
                                    testTarget: "prime-offer-error",
                                    errorType: o
                                })
                            }
                            if (!i && (t.isCurrentOfferClaimed(e) || t.state.claimed)) {
                                var s = t.state.claimData || r.claimData;
                                return a.createElement(J, {
                                    claimInstructions: e.claimInstructions,
                                    isPrime: Object(S.n)(t.props.data),
                                    offerID: e.id,
                                    offer: e,
                                    code: s,
                                    deliveryMethod: e.deliveryMethod,
                                    orientation: t.props.orientation,
                                    toggleCrownMenu: t.props.toggleCrownMenu
                                })
                            }
                            return a.createElement(W, {
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
                                        var o = S.b[a.code];
                                        t.setState({
                                            claiming: !1,
                                            claimed: !1,
                                            error: o || S.b.UNKNOWN_ERROR
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
                                hasPrime: Object(S.n)(t.props.data),
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
                            return S.l(t) ? this.renderVerticalLayout(e) : this.renderHorizontalLayout(e)
                        }
                        return null
                    }, t.prototype.renderTitle = function(e) {
                        var t = null;
                        return !!(this.props.giftData && this.props.giftData.currentUser && this.props.giftData.currentUser.primeGift) && !!(this.props.giftData.currentUser.primeGift && this.props.giftData.currentUser.primeGift.from && this.props.giftData.currentUser.primeGift.from.login) && (t = a.createElement(d.Ya, {
                            margin: {
                                right: .5
                            }
                        }, a.createElement(d.tb, {
                            asset: d.ub.Gift
                        }))), a.createElement(d.Ya, {
                            "data-a-target": e.id,
                            className: "prime-offer__title",
                            alignItems: d.f.Start,
                            display: d.X.Flex
                        }, t, a.createElement(f, {
                            unwrapDisallowed: !0,
                            disallowedTypes: ["Paragraph"],
                            containerTagName: "h4",
                            source: e.title || ""
                        }))
                    }, t.prototype.renderGiftText = function() {
                        return this.props.giftData && this.props.giftData.currentUser && this.props.giftData.currentUser.primeGift && this.props.giftData.currentUser.primeGift.from && this.props.giftData.currentUser.primeGift.from.login ? Object(s.d)("from <x:bold>{gifterLogin}</x:bold>", {
                            "x:bold": function(e) {
                                return a.createElement(d.W, {
                                    type: d.Wb.Span,
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
                ae = Object(o.compose)(Object(u.a)(ne, {
                    name: "giftData",
                    skip: function(e) {
                        return !Object(S.k)(e.offer.id)
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
                oe = (n("WGf9"), function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return r.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        var e = this.props.orientation || S.c.Default,
                            t = Object(S.l)(e);
                        return a.createElement(d.Fb, {
                            className: "prime-offer-placeholder",
                            alignItems: d.f.Center,
                            borderBottom: t,
                            padding: {
                                x: 2,
                                y: 1
                            },
                            display: t ? d.X.Block : d.X.InlineBlock,
                            fullWidth: t
                        }, a.createElement(d.Ya, {
                            className: "prime-offer-placeholder__title",
                            padding: {
                                y: .5
                            }
                        }, a.createElement(d.jb, {
                            height: 20
                        })), a.createElement(d.jb, {
                            height: 160
                        }), a.createElement(d.Ya, {
                            className: "prime-offer-placeholder__description",
                            padding: {
                                y: .5
                            }
                        }, a.createElement(d.jb, {
                            height: 20,
                            width: 160
                        })), a.createElement(d.Ya, {
                            className: "prime-offer-placeholder__publisher"
                        }, a.createElement(d.jb, {
                            height: 20,
                            width: 80
                        })), a.createElement(d.Ya, {
                            className: "prime-offer-placeholder__claim",
                            margin: {
                                top: 2,
                                bottom: 1
                            }
                        }, a.createElement(d.jb, {
                            height: 40
                        })))
                    }, t
                }(a.Component)),
                se = Object(l.b)("PrimeOfferPlaceholder", {
                    autoReportInteractive: !0
                })(oe),
                ce = (n("6sE4"), function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        return a.createElement(d.Fb, {
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
                            type: d.Wb.H4
                        }, Object(s.d)("Claim With Twitch Prime", "PrimeUpsell")), a.createElement(d.Ya, {
                            className: "prime-upsell__logo-container",
                            fullWidth: !0,
                            margin: {
                                y: 2
                            },
                            textAlign: d.Sb.Center
                        }, a.createElement(d.tb, {
                            asset: d.ub.LogoTwitchPrime,
                            width: 330,
                            height: 150,
                            type: d.vb.Brand
                        })), a.createElement(d.W, {
                            type: d.Wb.P
                        }, Object(s.d)("Support your favorite streamer, plus get monthly games and in-game loot, and loads more with Twitch Prime.", "PrimeUpsell")), a.createElement(L, null))
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
                            return a.createElement(d.Ya, {
                                className: "prime-offer-list__content--desktop"
                            }, t.renderSectionTitle(), a.createElement(d.cc, {
                                childWidth: d.dc.Large,
                                gutterSize: d.ec.Small,
                                center: !0,
                                placeholderItems: 20
                            }, t.renderOfferExperience(v.a.Wide)))
                        }, t.renderSectionTitle = function() {
                            return t.props.sectionTitle ? t.shouldShowPlaceholders ? a.createElement(d.Ya, {
                                padding: {
                                    x: 1
                                },
                                className: "prime-offers__title__placeholder"
                            }, a.createElement(d.jb, {
                                height: 28,
                                width: 300
                            })) : a.createElement(d.Ya, {
                                margin: {
                                    y: 1
                                },
                                className: "prime-offers__title"
                            }, a.createElement(d.W, {
                                type: d.Wb.H3,
                                color: d.O.Base,
                                bold: !0
                            }, t.props.sectionTitle)) : null
                        }, t.renderMobileOffers = function() {
                            return a.createElement(d.Ya, {
                                className: "prime-offer-list__content--mobile"
                            }, t.renderSectionTitle(), t.renderOfferExperience(v.a.Narrow))
                        }, t.getOfferListOrientation = function() {
                            return t.props.listDirection || S.c.Default
                        }, t.getHiddenOfferIdsByPlacement = function(e) {
                            switch (e) {
                                case S.d.Crown:
                                    return s.b.get("prime-crown-hidden-ids", []);
                                case S.d.LootPage:
                                    return s.b.get("prime-loot-page-hidden-ids", []);
                                default:
                                    return []
                            }
                        }, t.renderOfferPlaceholders = function() {
                            for (var e = [], n = 0; n < 3; ++n) {
                                var i = a.createElement(se, {
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
                            o = this.props.listDirection === S.c.Vertical;
                        return this.shouldShowOffersSection() ? a.createElement(c.b, {
                            className: n,
                            suppressScrollX: o,
                            suppressScrollY: r
                        }, a.createElement(d.Ya, {
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
                        if (e && !Object(S.m)(e) && !Object(S.n)(e) && !this.props.hideUpsell) return a.createElement(ue, null)
                    }, t.prototype.renderOfferExperience = function(e) {
                        var t = this,
                            n = this.props.offersData;
                        if (this.shouldShowPlaceholders) return this.renderOfferPlaceholders();
                        if (n && n.primeOffers && n.primeOffers.length) {
                            var i = this.getSortedOffers(),
                                r = i[i.length - 1];
                            return i.map(function(n, i) {
                                return a.createElement(d.Ya, {
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
                                }).sort(S.q),
                                a = this.filterOffersByOfferType(r),
                                o = i.filter(function(t) {
                                    return !e.isClaimedOffer(t)
                                }).sort(S.q);
                            return this.filterOffersByOfferType(o).concat(a)
                        }
                        return this.filterOffersByOfferType(i).slice().sort(S.q)
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
                        }).sort(S.q) : this.props.offerFilterType === le.a.InGameLoot ? e.filter(function(e) {
                            return !t.includes(e.id)
                        }).sort(S.q) : e
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
                me = Object(o.compose)(Object(u.a)(de, {
                    name: "offersData",
                    options: function() {
                        return {
                            variables: {
                                dateOverride: Object(S.i)(S.f.DateOverride),
                                countryCode: Object(S.i)(S.f.CountryCode)
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
        "5ZOr": function(e, t, n) {},
        "6BMd": function(e, t, n) {
            e.exports = n.p + "assets/bg-ghost-purple-47e963c18fbc4a4def29.svg"
        },
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
                o = n("2xye"),
                s = n("sLmD");

            function c(e) {
                var t, n, s, c, d = e.append,
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
                        var s = l(e.tags);
                        return {
                            title: n,
                            thumbnailAltText: e.name,
                            linkTo: {
                                pathname: Object(a.c)(e.name),
                                state: {
                                    content: o.PageviewContent.Game,
                                    content_index: t,
                                    medium: o.PageviewMedium.NavSearch
                                }
                            },
                            id: e.objectID,
                            popularity: e.popularity,
                            tags: s
                        }
                    }))), m.videos) {
                    var v = p && g ? g.results : [],
                        S = m.videos.totalHits;
                    p && m.exhaustedHits && g && !m.videos.totalHits && (S = g.totalHits), s = function(e, t, n) {
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
                                content: o.PageviewContent.User,
                                content_index: t,
                                medium: o.PageviewMedium.NavSearch
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
                                content: o.PageviewContent.Live,
                                content_index: t,
                                medium: o.PageviewMedium.NavSearch
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
                    currentVideoResults: s,
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
                            content: o.PageviewContent.Video,
                            content_index: t,
                            medium: o.PageviewMedium.NavSearch
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
                    var t, n = Object(s.a)();
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
                o = n("cr+I"),
                s = n("q1tI"),
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
                        return s.createElement(h.Ya, null, s.createElement(h.Fb, {
                            className: "prime-offer-header",
                            borderBottom: !0,
                            background: h.r.Alt2,
                            padding: {
                                x: 1,
                                y: .5
                            }
                        }, s.createElement(h.W, {
                            bold: !0,
                            type: h.Wb.H6
                        }, Object(u.d)("Free with Prime", "PrimeOfferHeader"))), this.getNumOfUnseenOffersDisplay())
                    }, t.prototype.getNumOfUnseenOffersDisplay = function() {
                        var e = this.props.numOfUnseenOffers;
                        if (e) return s.createElement(h.Fb, {
                            className: "prime-offer__new-offer-header",
                            borderBottom: !0,
                            background: h.r.Alt2,
                            padding: {
                                x: 1,
                                y: .5
                            }
                        }, s.createElement(h.Ya, {
                            fullWidth: !0,
                            display: h.X.Flex,
                            alignItems: h.f.Center
                        }, s.createElement(h.Ya, {
                            flexGrow: 1
                        }, s.createElement(h.W, {
                            bold: !0,
                            type: h.Wb.H6
                        }, Object(u.d)("New Prime Loot", "PrimeOfferHeader"))), s.createElement(h.Ya, {
                            className: "prime-offer__new-offer-header-count",
                            textAlign: h.Sb.Center
                        }, s.createElement(h.Fb, {
                            className: "prime-offer__new-offer-header-count__text",
                            background: h.r.Base,
                            color: h.O.Base,
                            display: h.X.Flex,
                            alignItems: h.f.Center,
                            justifyContent: h.Xa.Center
                        }, s.createElement(h.W, null, e.toString())))))
                    }, t
                }(s.Component)),
                S = Object(b.b)("PrimeOfferHeader", {
                    autoReportInteractive: !0
                })(v),
                y = n("4NwI"),
                k = n("Rjl4"),
                E = n("O4UZ");
            ! function(e) {
                e.OFFERS_FAILED_TO_UPDATE = "OFFERS_FAILED_TO_UPDATE", e.UNKNOWN = "UNKNOWN"
            }(i || (i = {}));
            var O = n("QAxy"),
                P = n("SXud"),
                C = (n("l0e4"), n("yO+B")),
                N = function(e) {
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
                            }), Object(k.d)(!e, {
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
                            Object(k.c)({
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
                            var n = Object(E.j)();
                            return !(t.getHiddenCrownOfferIds().includes(e.id) || n.includes(e.id) || t.offerIsSeen(e))
                        }, t.seeOffers = function() {
                            var e = t.props.offersData;
                            if (e && !e.loading && !e.error) {
                                var n = (e.primeOffers || []).map(function(e) {
                                    return "" + e.id
                                });
                                t.updateOfferStatus(), Object(E.o)(n)
                            }
                        }, t.updateOfferStatus = function() {
                            return a.__awaiter(t, void 0, void 0, function() {
                                var e, t, n, r, o, s, c, u;
                                return a.__generator(this, function(a) {
                                    switch (a.label) {
                                        case 0:
                                            if (e = this.props.userData, !(t = e && e.currentUser && e.currentUser.id)) return [2];
                                            n = this.props.offersData && this.props.offersData.primeOffers || [], r = n.map(function(e) {
                                                return {
                                                    offerID: e.id,
                                                    status: E.a.Seen
                                                }
                                            }), o = Object(m.a)({
                                                userID: t,
                                                statusChanges: r
                                            }), a.label = 1;
                                        case 1:
                                            return a.trys.push([1, 3, , 4]), [4, this.props.updatePrimeOfferStatus(o)];
                                        case 2:
                                            return s = a.sent(), (c = s.updatePrimeOfferStatus && s.updatePrimeOfferStatus.error) && c.code ? (u = i[c.code], this.setState({
                                                updated: !1,
                                                error: u || i.UNKNOWN
                                            }), [2]) : s.updatePrimeOfferStatus && s.updatePrimeOfferStatus.self ? (this.setState({
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
                            return s.createElement(h.Ya, {
                                "data-a-target": "offers-list",
                                className: "prime-offers__list"
                            }, s.createElement(S, {
                                numOfUnseenOffers: t.state.numOfUnseenOffers
                            }), s.createElement(y.a, {
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
                            var i = n.primeOffers,
                                r = i && i.length;
                            Object(k.e)({
                                hasPrime: this.hasPrime(),
                                numberOfOffers: r || 0
                            })
                        }
                    }, t.prototype.render = function() {
                        var e = this.props.userData && this.props.userData.requestInfo && Object(p.a)(this.props.userData.requestInfo.countryCode),
                            t = this.props.userData && this.props.userData.currentUser && this.props.userData.currentUser.hasPrime;
                        if (!e && !t) return null;
                        var n = {
                            align: h.ac.Center,
                            direction: h.bc.Bottom,
                            label: ""
                        };
                        return this.state.numOfUnseenOffers > 0 ? n.label = Object(u.d)("New Prime Loot", "PrimeOffers") : n.label = Object(u.d)("Prime Loot", "PrimeOffers"), s.createElement(h.Ya, {
                            className: "prime-offers",
                            position: h.kb.Relative
                        }, s.createElement(l.a, {
                            onToggle: this.onToggleMenu,
                            openByDefault: this.showOffersByDefault(),
                            tooltipProps: n,
                            ref: this.saveCrownMenuRef
                        }, s.createElement(g.a, {
                            onHover: this.onHover
                        }, s.createElement(h.A, {
                            ariaLabel: Object(u.d)("Prime offers", "PrimeOffers"),
                            overlay: !0,
                            icon: h.ub.Crown,
                            "data-a-target": "prime-offers-icon",
                            "data-target": "prime-offers-icon"
                        })), s.createElement(h.u, {
                            direction: h.v.BottomRight,
                            size: h.w.Large,
                            offsetX: "7px"
                        }, this.renderOfferList())), this.renderUnseenOffersDisplay())
                    }, t.prototype.offerIsSeen = function(e) {
                        return e.self && e.self.status === E.a.Seen
                    }, t.prototype.renderUnseenOffersDisplay = function() {
                        var e = this.state.numOfUnseenOffers;
                        if (e && !this.state.error) return s.createElement(h.Ya, {
                            className: "prime-offers__pill",
                            position: h.kb.Absolute
                        }, s.createElement(h.i, {
                            type: h.n.BounceIn,
                            duration: h.k.Medium,
                            timing: h.m.EaseIn,
                            enabled: e > 0
                        }, s.createElement(h.hb, {
                            label: e.toString(),
                            type: h.ib.Notification
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
                T = Object(c.compose)(Object(d.a)(P, {
                    name: "offersData",
                    skip: function(e) {
                        return !e.firstPageLoaded && !e.openByDefault
                    },
                    options: function() {
                        return {
                            variables: {
                                dateOverride: Object(E.i)(E.f.DateOverride),
                                countryCode: Object(E.i)(E.f.CountryCode)
                            }
                        }
                    }
                }), Object(d.a)(C, {
                    name: "userData"
                }), Object(d.a)(O, {
                    name: "updatePrimeOfferStatus"
                }), Object(b.b)("PrimeOffers"))(N);
            var D = Object(r.connect)(function(e) {
                    return {
                        firstPageLoaded: !!e.session.firstPageLoaded
                    }
                })(T),
                _ = n("6x+I"),
                x = n("KxT4"),
                G = n("j3KY"),
                I = (n("gQ2q"), n("487o")),
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
                        this.reportInteractive(), Object(k.h)()
                    }, t.prototype.componentDidUpdate = function() {
                        this.reportInteractive()
                    }, t.prototype.render = function() {
                        var e = this.props,
                            t = e.data,
                            n = e.blockBannerForGDPR,
                            i = !!t.currentUser && t.currentUser.hasPrime,
                            r = t.requestInfo && t.requestInfo.countryCode;
                        if (!Object(E.p)(i, r) || t.loading || n) return null;
                        var a = Object(G.e)(G.a, ""),
                            o = Object(u.d)("Twitch Prime", "BlueBar"),
                            c = s.createElement("span", null, Object(u.d)("Monthly games and in-game loot, exclusives, and access to hundreds of movies & TV shows with Prime Video.", "BlueBar")),
                            l = Object(G.e)(G.a, ""),
                            d = Object(u.d)("Start Your Free Trial", "BlueBar");
                        return t.loading || t.error || t.primePromotions && t.primePromotions.forEach(function(e) {
                            if (e) {
                                var t = e.externalURL ? e.externalURL : "";
                                switch (e.id) {
                                    case "twitch.prime.bluebar.left1":
                                        a = t, o = e.text;
                                        break;
                                    case "twitch.prime.bluebar.center1":
                                        c = s.createElement(_, {
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
                                        l = t, d = e.text
                                }
                            }
                        }), s.createElement(g.a, {
                            onHover: k.g,
                            onClick: k.f
                        }, s.createElement(h.Fb, {
                            color: h.O.Base,
                            className: "blue-bar",
                            "data-a-target": "blue-bar",
                            position: h.kb.Relative,
                            fullWidth: !0,
                            zIndex: h.jc.Above
                        }, s.createElement(h.Ya, {
                            className: "blue-bar__bar",
                            display: h.X.Flex,
                            alignItems: h.f.Center,
                            justifyContent: h.Xa.Between,
                            flexWrap: h.Ba.NoWrap,
                            margin: "auto",
                            padding: {
                                x: 2,
                                y: .5
                            }
                        }, s.createElement(h.Ya, {
                            display: h.X.InlineFlex,
                            alignItems: h.f.Center,
                            padding: {
                                right: .5
                            }
                        }, s.createElement(h.Ya, {
                            className: "blue-bar__logo",
                            display: h.X.InlineFlex,
                            margin: {
                                right: .5
                            },
                            flexShrink: 0
                        }, s.createElement(h.tb, {
                            asset: h.ub.Crown
                        })), s.createElement(h.W, {
                            bold: !0,
                            type: h.Wb.Span,
                            noWrap: !0,
                            fontSize: h.Ca.Size6
                        }, s.createElement(h.Qa, {
                            padding: {
                                x: 1
                            }
                        }, s.createElement("a", {
                            className: "blue-bar__link",
                            "data-a-target": "blue-bar__link",
                            href: a,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            "data-test-selector": "blue-bar-left-url"
                        }, o))), s.createElement(h.W, {
                            className: "blue-bar__headline",
                            type: h.Wb.Span,
                            fontSize: h.Ca.Size6
                        }, c)), s.createElement(h.Ya, {
                            display: h.X.InlineFlex,
                            flexShrink: 0
                        }, s.createElement(h.W, {
                            bold: !0,
                            type: h.Wb.Span,
                            noWrap: !0,
                            fontSize: h.Ca.Size6,
                            color: h.O.Base
                        }, s.createElement("a", {
                            className: "blue-bar__link",
                            href: l,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            "data-test-selector": "blue-bar-right-url"
                        }, d))))))
                    }, t
                }(s.Component),
                w = Object(c.compose)(Object(r.connect)(function(e) {
                    return {
                        blockBannerForGDPR: Object(x.h)(e)
                    }
                }), Object(d.a)(I, {
                    options: function() {
                        return {
                            variables: {
                                stringIds: ["twitch.prime.bluebar.left1", "twitch.prime.bluebar.center1", "twitch.prime.bluebar.right1"],
                                dateOverride: Object(E.i)(E.f.DateOverride)
                            }
                        }
                    }
                }), Object(b.b)("BlueBarComponent"))(F),
                A = n("z8lI");
            n.d(t, "d", function() {
                return D
            }), n.d(t, "a", function() {
                return w
            }), n.d(t, "c", function() {
                return A.a
            }), n.d(t, "f", function() {
                return E.i
            }), n.d(t, "b", function() {
                return E.c
            }), n.d(t, "e", function() {
                return E.f
            })
        },
        AXRb: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return y
            });
            var i = n("mrSG"),
                r = n("q1tI"),
                a = n("oJmH"),
                o = n("/7QA"),
                s = n("yR8l"),
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
                                                tier: c.a.Prime,
                                                platform: l.V.WEB,
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
                            icon: b.ub.Crown,
                            state: b.E.Loading
                        }, Object(b.kc)(this.props)));
                        if (this.state.primeSubFailure) {
                            var e = this.getErrorType();
                            return r.createElement(m.c, {
                                fontSize: b.Ca.Size6,
                                testTarget: "prime-sub-error",
                                errorType: e
                            })
                        }
                        if (!this.isUserDataReady(this.props)) return r.createElement(b.jb, {
                            width: 82,
                            height: 30
                        });
                        var t = this.canPrimeSubscribe(this.props),
                            n = this.canResub(this.props),
                            a = this.willPrimeSubCreditRenew(),
                            s = this.primeSubCreditRenewalDate();
                        if (!this.props.data.currentUser || !this.props.data.currentUser.hasPrime) {
                            var c = Object(o.d)("Start Your Free Trial", "PrimeSubscribe");
                            return r.createElement(b.z, i.__assign({
                                ariaLabel: c,
                                "data-test-selector": v,
                                icon: b.ub.Crown,
                                linkTo: o.a.tryPrimeURI,
                                onClick: this.handleStartPrimeTrialClick
                            }, Object(b.kc)(this.props), {
                                targetBlank: !0
                            }), c)
                        }
                        if (this.isSubscribed(this.props) && !n) {
                            var u = Object(o.d)("Subscribed", "PrimeSubscribe");
                            return r.createElement(b.z, i.__assign({
                                ariaLabel: u,
                                "data-a-target": "subscribe-with-prime-button",
                                "data-test-selector": v,
                                disabled: !0,
                                icon: b.ub.Crown
                            }, Object(b.kc)(this.props)), u)
                        }
                        if (!t) {
                            var l = Object(o.d)("Prime subscription unavailable", "PrimeSubscribe");
                            if (a && s) {
                                var d = Object(o.c)(new Date(s), {
                                    month: "long",
                                    day: "numeric"
                                });
                                l = Object(o.d)("Prime subscription available {availableDate}", {
                                    availableDate: d
                                }, "PrimeSubscribe")
                            }
                            return r.createElement(b.z, i.__assign({
                                ariaLabel: l,
                                "data-test-selector": v,
                                disabled: !0,
                                icon: b.ub.Crown
                            }, Object(b.kc)(this.props)), l)
                        }
                        var p = n ? Object(o.d)("Resubscribe Free", "PrimeSubscribe") : Object(o.d)("Subscribe Free", "PrimeSubscribe");
                        return r.createElement(b.z, i.__assign({
                            ariaLabel: p,
                            "data-test-selector": v,
                            "data-a-target": "subscribe-with-prime-button",
                            disabled: this.state.isSubscribing,
                            icon: b.ub.Crown,
                            state: this.state.isSubscribing ? b.E.Loading : b.E.Default,
                            onClick: this.spendPrimeCredit
                        }, Object(b.kc)(this.props)), p)
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
                y = Object(a.compose)(Object(d.b)("PrimeSubscribe"), Object(s.a)(h, {
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
                }), Object(s.a)(g, {
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
        CCnc: function(e, t, n) {
            e.exports = n.p + "assets/100-gifts-4x-03202bb488c686b56775.png"
        },
        CDqf: function(e, t, n) {
            "use strict";
            var i = n("mrSG"),
                r = n("q1tI"),
                a = n("/7QA"),
                o = n("Ue10"),
                s = (n("WAGi"), function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        return r.createElement(o.Fb, {
                            borderRadius: this.getBannerBorderRadius(),
                            className: "sub-promo-banner",
                            display: o.X.Flex
                        }, this.getCTA())
                    }, t.prototype.getCTA = function() {
                        var e = this.props.alignCTA,
                            t = "Left" === e ? "Right" : "Left",
                            n = r.createElement(o.Ya, {
                                className: "sub-promo-banner__triangle-" + e.toLowerCase()
                            }),
                            i = r.createElement(o.Fb, {
                                borderRadius: this.getChildBorderRadius(e),
                                className: "sub-promo-banner__promo-price",
                                display: o.X.Flex,
                                flexDirection: o.Aa.Column,
                                justifyContent: o.Xa.Center
                            }, r.createElement(o.Ya, {
                                display: o.X.Flex,
                                justifyContent: o.Xa.Center
                            }, r.createElement(o.Ya, {
                                margin: {
                                    top: .5
                                }
                            }, r.createElement(o.W, {
                                className: "sub-promo-banner__currency-symbol",
                                color: o.O.Overlay
                            }, "$1".substring(0, 1))), r.createElement(o.W, {
                                bold: !0,
                                className: "sub-promo-banner__currency-number",
                                color: o.O.Overlay
                            }, "$1".substring(1))), r.createElement(o.W, {
                                className: "sub-promo-banner__subs-cta",
                                color: o.O.Overlay
                            }, Object(a.d)("SUBS", "SubPromoBanner"))),
                            s = r.createElement(o.Fb, {
                                borderLeft: !1,
                                borderRadius: this.getChildBorderRadius(t),
                                className: "sub-promo-banner__cta",
                                display: o.X.Flex,
                                flexDirection: o.Aa.Column,
                                flexGrow: 1,
                                justifyContent: o.Xa.Center,
                                padding: {
                                    left: 2,
                                    right: 3,
                                    y: 1
                                }
                            }, r.createElement(o.W, {
                                bold: !0,
                                color: o.O.Overlay,
                                fontSize: o.Ca.Size4
                            }, Object(a.d)("Subtember is here!", "SubPromoBanner")), r.createElement(o.W, {
                                color: o.O.Overlay
                            }, Object(a.d)("Make the most of your Gift Sub this September by continuing at Tier 1 for <x:strong>only {promoPrice}</x:strong>. {promoLink}", {
                                promoLink: r.createElement(o.U, {
                                    key: "SubPromoBannerLink",
                                    targetBlank: !0,
                                    to: "https://link.twitch.tv/subtember",
                                    type: o.V.Overlay
                                }, Object(a.d)("Learn More", "SubPromoBanner")),
                                promoPrice: "$1",
                                "x:strong": function(e) {
                                    return r.createElement(o.W, {
                                        bold: !0,
                                        key: "SubPromoBannerBoldText",
                                        type: o.Wb.Span
                                    }, e)
                                }
                            }, "SubPromoBanner")));
                        return "Left" === e ? r.createElement(r.Fragment, null, i, n, s) : r.createElement(r.Fragment, null, s, n, i)
                    }, t.prototype.getBannerBorderRadius = function() {
                        var e = this.props,
                            t = e.roundedBottom,
                            n = e.roundedTop;
                        return t && n ? {
                            bottomLeft: o.x.Large,
                            bottomRight: o.x.Large,
                            topLeft: o.x.Large,
                            topRight: o.x.Large
                        } : t ? {
                            bottomLeft: o.x.Large,
                            bottomRight: o.x.Large
                        } : n ? {
                            topLeft: o.x.Large,
                            topRight: o.x.Large
                        } : {}
                    }, t.prototype.getChildBorderRadius = function(e) {
                        var t, n, i, r = this.props,
                            a = r.roundedBottom,
                            s = r.roundedTop;
                        return a && s ? ((t = {})["bottom" + e] = o.x.Large, t["top" + e] = o.x.Large, t) : a ? ((n = {})["bottom" + e] = o.x.Large, n) : s ? ((i = {})["top" + e] = o.x.Large, i) : {}
                    }, t
                }(r.Component));
            n.d(t, "a", function() {
                return s
            })
        },
        CdEI: function(e, t, n) {
            e.exports = n.p + "assets/random-viewer-4x-f63102da906995e27c24.png"
        },
        "D+xR": function(e, t, n) {
            e.exports = n.p + "assets/100-gifts-2x-964c2934bb2454637abf.png"
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
                o = n("/7QA"),
                s = n("UUve"),
                c = n("GnwI"),
                u = n("br9A"),
                l = n("Ue10"),
                d = "subscribe-button__subscribe-tier-button",
                p = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.handleClick = function() {
                            t.openCheckout(), t.props.handleSubAction({
                                action: u.a.ClickCheckout,
                                checkoutButtonTier: t.props.tierPrice
                            })
                        }, t.openCheckout = function() {
                            t.props.isMobileCheckout || o.n.set(s.d, t.props.productName)
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        if (this.props.isSubbedToTier) {
                            var e = Object(o.d)("Subscribed", "SubTierButton");
                            return r.createElement(l.z, {
                                ariaLabel: e,
                                "data-test-selector": d,
                                disabled: !0,
                                icon: l.ub.Star
                            }, e)
                        }
                        var t;
                        return t = this.props.isEsportChannel ? Object(o.d)("Get the All-Access Pass", "SubTierButton") : this.props.customSubscribeNowMessage ? this.props.customSubscribeNowMessage : Object(o.d)("Subscribe Now", "SubTierButton"), r.createElement(l.z, i.__assign({
                            ariaLabel: t + " " + this.props.tierPrice,
                            "data-test-selector": d,
                            linkTo: this.props.isMobileCheckout ? this.props.url : void 0,
                            onClick: this.handleClick,
                            purchase: this.props.tierPrice
                        }, Object(l.kc)(this.props), {
                            fullWidth: this.props.fullWidth
                        }), t)
                    }, t
                }(r.Component),
                m = Object(a.compose)(Object(c.b)("SubTierButton", {
                    autoReportInteractive: !0
                }))(p);
            n.d(t, !1, function() {
                return d
            }), n.d(t, "a", function() {
                return m
            })
        },
        DqL7: function(e, t, n) {
            "use strict";
            var i = n("mrSG"),
                r = n("q1tI"),
                a = n("/7QA"),
                o = n("3Bft"),
                s = n("GnwI"),
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
                                case o.a.Prime:
                                    return Object(a.d)("Free Channel Sub with Twitch Prime", "SubTierTabs");
                                case o.a.Tier1:
                                    return t.props.subscriptionProducts[0].displayName;
                                case o.a.Tier2:
                                    return t.props.subscriptionProducts[1].displayName;
                                case o.a.Tier3:
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
                                    giftingAnonymously: t.props.giftingAnonymously,
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
                            return t.props.subbedTier === t.state.activeTab && t.state.activeTab === o.a.Prime ? r.createElement(b.a, {
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
                        var e = this.props.subbedTier && r.createElement(g.Ya, {
                            className: "subscription-balloon-options__subbed-star",
                            display: g.X.InlineFlex,
                            margin: {
                                right: .5
                            }
                        }, r.createElement(g.tb, {
                            asset: g.ub.Star
                        }));
                        return r.createElement(g.Ya, {
                            className: "channel-header__subscription-balloon-options"
                        }, r.createElement(g.Ya, {
                            margin: {
                                bottom: 1
                            }
                        }, r.createElement(g.Hb, null, this.props.subbedTier === o.a.Prime ? !this.props.isGift && r.createElement(g.Ya, {
                            display: g.X.InlineFlex,
                            margin: {
                                right: 2
                            }
                        }, r.createElement(g.Ya, {
                            className: "subscription-balloon-options__prime-crown",
                            display: g.X.InlineFlex,
                            margin: {
                                right: 1
                            }
                        }, r.createElement(g.tb, {
                            asset: g.ub.Crown
                        })), r.createElement(g.Gb, {
                            active: this.state.activeTab === o.a.Prime,
                            "data-a-target": y(o.a.Prime),
                            "data-tier": y(o.a.Prime),
                            onClick: this.toggleActiveTab
                        }, Object(a.d)("Prime", "SubTierTabs"))) : r.createElement(g.Ya, {
                            display: g.X.InlineFlex,
                            margin: {
                                right: 2
                            }
                        }, this.props.subbedTier === o.a.Tier1 && e, r.createElement(g.Gb, {
                            active: this.state.activeTab === o.a.Tier1,
                            "data-a-target": y(o.a.Tier1),
                            "data-tier": y(o.a.Tier1),
                            onClick: this.toggleActiveTab
                        }, Object(a.d)("Tier 1", "SubTierTabs"))), r.createElement(g.Ya, {
                            display: g.X.InlineFlex,
                            margin: {
                                right: 2
                            }
                        }, this.props.subbedTier === o.a.Tier2 && e, r.createElement(g.Gb, {
                            active: this.state.activeTab === o.a.Tier2,
                            "data-a-target": y(o.a.Tier2),
                            "data-tier": y(o.a.Tier2),
                            onClick: this.toggleActiveTab
                        }, Object(a.d)("Tier 2", "SubTierTabs"))), r.createElement(g.Ya, {
                            display: g.X.InlineFlex
                        }, this.props.subbedTier === o.a.Tier3 && e, r.createElement(g.Gb, {
                            active: this.state.activeTab === o.a.Tier3,
                            "data-a-target": y(o.a.Tier3),
                            "data-tier": y(o.a.Tier3),
                            onClick: this.toggleActiveTab
                        }, Object(a.d)("Tier 3", "SubTierTabs"))))), r.createElement(g.Ya, null, r.createElement(g.Ya, {
                            margin: {
                                bottom: 1
                            }
                        }, r.createElement(g.W, {
                            type: g.Wb.H5,
                            bold: !0
                        }, this.getTabTitle())), r.createElement(g.Ya, {
                            margin: {
                                bottom: 1
                            }
                        }, r.createElement(u.a, {
                            allSubProducts: this.props.subscriptionProducts,
                            selectedSubProduct: this.getSubProduct(this.state.activeTab) || this.props.subscriptionProducts[0]
                        })), r.createElement(l.a, {
                            isGift: this.props.isGift,
                            subscriptionProduct: this.getSubProduct(this.state.activeTab)
                        }), this.props.giftRecipient && r.createElement(g.Ya, {
                            margin: {
                                top: 1
                            }
                        }, r.createElement(g.N, {
                            checked: this.props.giftingAnonymously,
                            label: Object(a.d)("Gift Anonymously", "SubscribeTierTabs"),
                            onChange: this.props.onAnonymousGiftingSelect
                        })), r.createElement(g.Ya, {
                            margin: {
                                right: 1,
                                top: 1
                            }
                        }, this.getTierSubscribeButton())))
                    }, t.prototype.getPrice = function(e) {
                        return Object(m.g)(this.props.subscriptionProducts) || Object(m.e)(this.props.subscriptionProducts) ? Object(m.c)(e, this.props.isGift) : e.priceInfo ? Object(p.a)(Object(p.b)(e.priceInfo.total, e.priceInfo.exponent), e.priceInfo.currency) : e.price
                    }, t.prototype.getSubProduct = function(e) {
                        switch (e) {
                            case o.a.Tier1:
                                return this.props.subscriptionProducts[0];
                            case o.a.Tier2:
                                return this.props.subscriptionProducts[1];
                            case o.a.Tier3:
                                return this.props.subscriptionProducts[2];
                            default:
                                return this.props.subscriptionProducts[0]
                        }
                    }, t
                }(r.Component);

            function y(e) {
                return "subscribe-button-modal-tab-" + e
            }
            var k = Object(s.b)("SubTierTabs", {
                autoReportInteractive: !0
            })(S);
            n.d(t, !1, function() {
                return h
            }), n.d(t, !1, function() {
                return v
            }), n.d(t, !1, function() {
                return S
            }), n.d(t, !1, function() {
                return y
            }), n.d(t, "a", function() {
                return k
            })
        },
        EBDZ: function(e, t, n) {},
        EEuB: function(e, t, n) {
            e.exports = n.p + "assets/1-gift-1x-5bc79cc635e889b58b5a.png"
        },
        EYib: function(e, t, n) {},
        FLOH: function(e, t, n) {
            "use strict";
            var i, r = n("q1tI"),
                a = n("/7QA"),
                o = n("3Bft"),
                s = n("OpME"),
                c = n("0WFu"),
                u = n("Ue10");
            ! function(e) {
                e.BenefitMessage = "BenefitMessage", e.ExtraEmoteMessage = "ExtraEmoteMessage"
            }(i || (i = {}));
            var l = function(e) {
                var t = function(e, t) {
                    var n = [];
                    e.tier === o.a.Tier2 && n.push.apply(n, t[1].emotes);
                    e.tier === o.a.Tier3 && (n.push.apply(n, t[1].emotes), n.push.apply(n, t[2].emotes));
                    return Object(s.b)(n)
                }(e.selectedSubProduct, e.allSubProducts);
                return r.createElement(u.Ya, null, r.createElement(u.W, {
                    "data-test-selector": i.BenefitMessage
                }, function(e) {
                    if (e.isEsportChannel) return Object(a.d)("Overwatch League: {giftPrice} All-Access Pass for current season", {
                        giftPrice: e.selectedSubProduct ? e.selectedSubProduct.price : ""
                    }, "SubBenefitMessage");
                    var t = e.allSubProducts[0].emotes.length;
                    if (e.selectedSubProduct.tier) {
                        var n = Object(c.b)(e.selectedSubProduct.tier);
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
                }(e)), t.length > 0 && r.createElement(u.Ya, {
                    alignItems: u.f.Center,
                    display: u.X.Flex,
                    margin: {
                        top: 1
                    }
                }, t.map(function(e) {
                    return r.createElement(u.Ya, {
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
            e.exports = n.p + "assets/specific-viewer-2x-aa0b9ac4ccd63c0f0ef5.png"
        },
        GJys: function(e, t, n) {
            e.exports = n.p + "assets/20-gifts-2x-a82739f104cf891a55f7.png"
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
                return o
            }), n.d(t, "d", function() {
                return s
            });
            var i = n("NAv5"),
                r = {
                    RFC3399: "YYYY-MM-DDTHH:mm:ssZ",
                    timeString: "h:mma"
                };

            function a(e, t) {
                return Object(i.format)(e, t)
            }

            function o(e) {
                return Object(i.parse)(e)
            }

            function s(e, t) {
                var n = e.split(":");
                if (2 !== n.length) throw new Error("invalid time string: " + e);
                var i = parseInt(n[0], 10),
                    r = parseInt(n[1].substring(0, 2), 10),
                    a = n[1].substring(n[1].length - 2);
                if (12 === i && "am" === a && (i = 0), "pm" === a && i < 12 && (i += 12), isNaN(i) || i < 0 || i > 23 || isNaN(r) || r < 0 || r > 59) throw new Error("invalid time string: " + e);
                var o = t || new Date;
                return o.setHours(i, r), o
            }
        },
        HdJw: function(e, t, n) {
            e.exports = n.p + "assets/specific-viewer-1x-14cdd082b3033dafa054.png"
        },
        J5He: function(e, t, n) {},
        JMwM: function(e, t, n) {
            "use strict";
            var i = n("mrSG"),
                r = n("q1tI"),
                a = n("/7QA"),
                o = n("yR8l"),
                s = n("UUve"),
                c = n("GnwI"),
                u = n("Ue10"),
                l = n("k91D"),
                d = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.handleClick = function() {
                            return t.openCheckout(), t.props.onClick && t.props.onClick()
                        }, t.openCheckout = function() {
                            t.props.giftRecipient && (a.n.set(s.d, t.props.productName), a.n.set(s.e, t.props.giftRecipient), a.n.set(s.a, t.props.giftingAnonymously || !1))
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        var e, t, n = !!(this.props.data && this.props.data.user && this.props.data.user.self) && this.props.data.user.self.canGift;
                        return this.props.checkoutURL ? this.props.isEsportChannel ? (e = Object(a.d)("Buy All-Access Pass Gift", "GiftSubscribeButton"), t = "esports-checkout-gift-subscribe-button") : (e = Object(a.d)("Buy Gift Subscription", "GiftSubscribeButton"), t = "checkout-gift-subscribe-button") : this.props.isEsportChannel ? (e = Object(a.d)("Gift All-Access Pass", "GiftSubscribeButton"), t = "esports-gift-subscribe-button") : (e = Object(a.d)("Gift Subscription", "GiftSubscribeButton"), t = "gift-subscribe-button"), r.createElement(u.z, {
                            targetBlank: !0,
                            disabled: !n,
                            onClick: this.handleClick,
                            "data-test-selector": t,
                            purchase: this.props.purchase
                        }, this.props.buttonMessage || e)
                    }, t = i.__decorate([Object(c.b)("GiftSubscribeButton", {
                        autoReportInteractive: !0
                    }), Object(o.a)(l, {
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
                return d
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
                            return e.hadImpression = !1, e.logger = o.k.withCategory("with-impression-listener"), e.setRef = function(t) {
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
                                        registerImpressionCallback: this.registerImpressionCallback
                                    }
                                },
                                r = t && t.impressionWrapperClassName,
                                o = r ? {
                                    className: r
                                } : {};
                            return a.createElement("div", i.__assign({
                                ref: this.setRef
                            }, o), a.createElement(n, i.__assign({}, this.props, e)))
                        }, u.prototype.checkVisible = function(e) {
                            return i.__awaiter(this, void 0, void 0, function() {
                                var t, n;
                                return i.__generator(this, function(i) {
                                    return this.hadImpression || (t = this.isVisible(e)) && (n = this.isScrolled(), this.hadImpression = t, this.reportImpression && this.reportImpression(n)), [2]
                                })
                            })
                        }, u.prototype.isVisible = function(e) {
                            if (!this.element) return !1;
                            var n = s(e),
                                i = this.element.getBoundingClientRect();
                            if (i.left < n.right && i.right > n.left && i.top < n.bottom && i.bottom > n.top) {
                                if (!t || 0 === t.percentage || 0 === t.pixels) return !0;
                                var r = t.percentage,
                                    a = t.pixels,
                                    o = i.bottom - i.top,
                                    c = n.bottom - n.top,
                                    u = Math.min(n.bottom - i.top, o, c);
                                if (a) {
                                    if (o >= a) return u >= a;
                                    r = 100
                                }
                                return !r || 100 * (u / o) >= r
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
                o = n("W8Fi"),
                s = n("Ue10"),
                c = (n("W5/R"), function(e) {
                    var t = e.subscriptionProduct;
                    if (void 0 === t) return i.createElement("div", null);
                    var n = Object(o.e)([e.subscriptionProduct]),
                        c = Object(o.g)([e.subscriptionProduct]),
                        u = Object(o.f)([e.subscriptionProduct]),
                        l = t.price;
                    t.priceInfo && (l = Object(a.a)(Object(a.b)(t.priceInfo.total, t.priceInfo.exponent), t.priceInfo.currency));
                    var d = e.isOneTime ? Object(r.d)("{price} / One-time purchase", {
                        price: l
                    }, "SubDiscountPriceLabel") : Object(r.d)("{price} / Month", {
                        price: l
                    }, "SubDiscountPriceLabel");
                    if (o.e || o.g || o.f) {
                        var p = void 0;
                        if (e.isGift && n ? p = Object(r.d)("{price} (Save {percent})", {
                                price: Object(o.c)(e.subscriptionProduct, e.isGift),
                                percent: Object(r.f)(Object(o.d)(e.subscriptionProduct, e.isGift) / 100, "percent")
                            }, "SubDiscountPriceLabel") : e.isPaidUpgrade && u ? p = Object(r.d)("{price} / First Month", {
                                price: Object(o.a)(e.subscriptionProduct)
                            }, "SubDiscountPriceLabel") : c && (p = Object(r.d)("{price} for the first month (Save {percent})", {
                                price: Object(o.c)(e.subscriptionProduct, e.isGift),
                                percent: Object(r.f)(Object(o.d)(e.subscriptionProduct, e.isGift) / 100, "percent")
                            }, "SubDiscountPriceLabel")), p) return i.createElement(s.Ya, {
                            "data-test-selector": "sub-discount-price-label__discounted"
                        }, i.createElement(s.W, {
                            className: "sub-discount-price-label__original-price",
                            color: s.O.Alt2,
                            decoration: s.Ub.Strikethrough
                        }, d), i.createElement(s.W, {
                            bold: !0,
                            className: "sub-discount-price-label__discount-price"
                        }, p))
                    }
                    return i.createElement(s.Ya, {
                        "data-test-selector": "sub-discount-price-label__non-discounted"
                    }, i.createElement(s.W, null, d))
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
                o = n("D7An"),
                s = n("H/lO"),
                c = n("vR4/"),
                u = n("BSTw"),
                l = n("Z9JJ"),
                d = {
                    games: {
                        indexName: s.a.Games,
                        hitsPerPage: 2,
                        topNumericFilters: ["popularity>1"],
                        singleTypeNumericFilters: [],
                        optionalFacetFilters: ""
                    },
                    videos: {
                        indexName: s.a.Videos,
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
                        indexName: s.a.Users,
                        hitsPerPage: 2,
                        topNumericFilters: ["followers>50"],
                        singleTypeNumericFilters: [],
                        optionalFacetFilters: ""
                    },
                    channels: {
                        indexName: s.a.Channels,
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
                        indexName: s.a.StreamTags,
                        hitsPerPage: 2,
                        topNumericFilters: [],
                        singleTypeNumericFilters: [],
                        optionalFacetFilters: ""
                    },
                    tags: {
                        indexName: s.a.Tags,
                        hitsPerPage: 2,
                        topNumericFilters: [],
                        singleTypeNumericFilters: [],
                        optionalFacetFilters: ""
                    }
                },
                p = function() {
                    function e(e) {
                        this.apolloClient = e.apolloClient, this.client = r(e.appId, e.apiKey), this.stats = e.stats, this.logger = e.logger.withCategory("search-client"), this.sendSearchRequestToForage = "variant" === a.p.experiments.getAssignment(o.b.NewSearchBackend), this.getCountryCode()
                    }
                    return e.prototype.queryTopResults = function(e, t) {
                        return i.__awaiter(this, void 0, void 0, function() {
                            var n, r, a, o;
                            return i.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        return r = [], (n = []).push(this.getTopResult(d.games, e)), n.push(this.getTopResult(d.videos, e)), n.push(this.getTopResult(d.users, e)), n.push(this.getTopResult(d.channels, e)), r.push(this.getTotalResult(d.games, e)), r.push(this.getTotalResult(d.videos, e)), r.push(this.getTotalResult(d.users, e)), r.push(this.getTotalResult(d.channels, e)), [4, this.query(n.concat(r))];
                                    case 1:
                                        return (a = i.sent()) ? (o = a.results, [2, {
                                            id: t,
                                            games: {
                                                totalHits: o[4].nbHits,
                                                hits: o[0].hits
                                            },
                                            videos: {
                                                totalHits: o[5].nbHits,
                                                hits: o[1].hits
                                            },
                                            users: {
                                                totalHits: o[6].nbHits,
                                                hits: o[2].hits
                                            },
                                            channels: {
                                                totalHits: o[7].nbHits,
                                                hits: o[3].hits
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
                            o = a.page,
                            c = void 0 === o ? 0 : o,
                            u = a.hitsPerPage,
                            l = void 0 === u ? 50 : u,
                            p = a.facetFilters,
                            m = void 0 === p ? "" : p,
                            f = a.numericFilters,
                            b = a.restrictSearchableAttributes,
                            g = void 0 === b ? [] : b;
                        return i.__awaiter(this, void 0, void 0, function() {
                            var r, a, o, u, p, b, h, v, S = this;
                            return i.__generator(this, function(y) {
                                switch (y.label) {
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
                                            case s.a.Games:
                                                return [3, 1];
                                            case s.a.Users:
                                                return [3, 3];
                                            case s.a.Channels:
                                                return [3, 5];
                                            case s.a.Videos:
                                                return [3, 7];
                                            case s.a.StreamTags:
                                                return [3, 9];
                                            case s.a.Tags:
                                                return [3, 11]
                                        }
                                        return [3, 13];
                                    case 1:
                                        return o = r, [4, a(d.games)];
                                    case 2:
                                        return o.games = y.sent(), [3, 14];
                                    case 3:
                                        return u = r, [4, a(d.users)];
                                    case 4:
                                        return u.users = y.sent(), [3, 14];
                                    case 5:
                                        return p = r, [4, a(d.channels)];
                                    case 6:
                                        return p.channels = y.sent(), [3, 14];
                                    case 7:
                                        return b = r, [4, a(d.videos)];
                                    case 8:
                                        return b.videos = y.sent(), [3, 14];
                                    case 9:
                                        return h = r, [4, a(d.streamTags)];
                                    case 10:
                                        return h.streamTags = y.sent(), [3, 14];
                                    case 11:
                                        return v = r, [4, a(d.tags)];
                                    case 12:
                                        return v.tags = y.sent(), [3, 14];
                                    case 13:
                                        return [2, null];
                                    case 14:
                                        return [2, r]
                                }
                            })
                        })
                    }, e.prototype.queryVideos = function(e, t, n) {
                        return i.__awaiter(this, void 0, void 0, function() {
                            var r, a, o, u;
                            return i.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        switch (r = s.a.Videos, a = [], n.length) {
                                            case c.a.Short:
                                                a.push("length<=900");
                                                break;
                                            case c.a.Long:
                                                a.push("length>900")
                                        }
                                        switch (o = {
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
                                                o.params.facetFilters = "broadcast_type:archive";
                                                break;
                                            case c.b.Uploads:
                                                o.params.facetFilters = "broadcast_type:upload";
                                                break;
                                            case c.b.Highlights:
                                                o.params.facetFilters = "broadcast_type:highlight"
                                        }
                                        return [4, this.query([o])];
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
                            e.logger.warn(t, "Failed to get country code")
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
                            return t.logger.warn(e, "Failed to get search results"), e
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
                            var t, n, r, a, o;
                            return i.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        n = Date.now(), a = !1, i.label = 1;
                                    case 1:
                                        return i.trys.push([1, 6, , 7]), this.sendSearchRequestToForage && e.length > 7 ? (o = e[0].query, [4, this.getSearchResults(o)]) : [3, 3];
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
            }), n.d(t, "l", function() {
                return g
            }), n.d(t, "h", function() {
                return h
            }), n.d(t, "j", function() {
                return v
            }), n.d(t, "o", function() {
                return S
            }), n.d(t, "q", function() {
                return y
            }), n.d(t, "p", function() {
                return E
            }), n.d(t, "f", function() {
                return b
            }), n.d(t, "i", function() {
                return O
            }), n.d(t, "n", function() {
                return P
            }), n.d(t, "m", function() {
                return C
            }), n.d(t, "k", function() {
                return N
            });
            var i, r, a = n("TSYQ"),
                o = n("cr+I"),
                s = n("q1tI"),
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
                                    return s.createElement(l.U, {
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
            var b, g = function(e) {
                    return e === i.Vertical
                },
                h = function(e, t) {
                    var n = t === i.Horizontal ? "horizontal" : "vertical";
                    return a(e, e + "--" + n)
                },
                v = function() {
                    return k("seenOffers")
                },
                S = function(e) {
                    c.m.set("seenOffers", e)
                },
                y = function(e, t) {
                    return (e && (e.priority || 0 === e.priority) ? e.priority : 99999) - (t && (t.priority || 0 === t.priority) ? t.priority : 99999)
                },
                k = function(e) {
                    return c.m.get(e, [])
                },
                E = function(e, t) {
                    return void 0 !== e && void 0 !== t && (!e && Object(u.a)(t))
                };
            ! function(e) {
                e.DateOverride = "dateOverride", e.CountryCode = "countryCode"
            }(b || (b = {}));
            var O = function(e) {
                    var t = location.search,
                        n = o.parse(t);
                    return n && n[e] || void 0
                },
                P = function(e) {
                    return e && !e.loading && !e.error && null !== e.currentUser && e.currentUser.hasPrime
                },
                C = function(e) {
                    return e && e.loading
                },
                N = function(e) {
                    return T().includes(e)
                },
                T = function() {
                    return c.b.get("prime_gift_experiment_offer_ids", [])
                }
        },
        OdUb: function(e, t, n) {
            e.exports = n.p + "assets/5-gifts-1x-de5a1142e70dbf5d7e40.png"
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
                return f
            }), n.d(t, "d", function() {
                return b
            });
            var i = n("mrSG"),
                r = n("lZdE"),
                a = n("cpJf"),
                o = {
                    "B-?\\)": "B)",
                    "\\:-?[z|Z|\\|]": ":|",
                    "\\:-?\\)": ":)",
                    "\\:-?\\(": ":(",
                    "\\:-?(p|P)": ":P",
                    "\\;-?(p|P)": ";P",
                    "\\:-?[\\\\/]": ":/",
                    "\\;-?\\)": ";)",
                    "R-?\\)": "R)",
                    ":>": ":>",
                    "\\:\\&gt\\;": ":>",
                    "[oO](_|\\.)[oO]": "O_o",
                    "\\:-?D": ":D",
                    "\\:-?(o|O)": ":O",
                    ">\\\\(": ">(",
                    ":-?(?:7|L)": ":7",
                    "\\:-?(S|s)": ":S",
                    "#-?[\\\\/]": "#/",
                    "<\\]": "<]",
                    "<3": "<3",
                    "\\&lt\\;3": "<3",
                    "\\&lt\\;\\]": "<]",
                    "\\&gt\\;\\(": ">("
                },
                s = ["1.0", "2.0", "3.0"],
                c = new Set([457, 33, 42, 0]);

            function u(e) {
                for (var t = [], n = function(e) {
                        if (!e || !e.id || !e.token) return "continue";
                        var n = o[e.token] || e.token,
                            r = s.reduce(function(t, n) {
                                var i = t;
                                return i && (i = i.concat(", ")), i.concat("https://static-cdn.jtvnw.net/emoticons/v1/" + e.id + "/" + n + " " + n + "x")
                            }, "");
                        t.push(i.__assign({
                            displayName: n,
                            srcSet: r
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
                            }, o = 0, s = r.emotes; o < s.length; o++) {
                            var c = s[o];
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
                        var o = {
                            id: a.id,
                            emotes: l(d(a.emotes), a.id)
                        };
                        a.owner && (o.owner = a.owner), c.has(parseInt(a.id, 10)) ? t.push(o) : n.push(o)
                    }
                }
                return n.concat(t)
            }
            var f = function(e, t, n) {
                    var i = n || a.d,
                        o = [],
                        s = [],
                        c = [],
                        u = new RegExp("^" + Object(r.a)(t), "i");
                    return e.forEach(function(e) {
                        i[e.token] ? c.push(e) : e.token.match(u) ? o.push(e) : s.push(e)
                    }), o.sort(function(e, t) {
                        return e.token < t.token ? -1 : e.token > t.token ? 1 : 0
                    }), s.sort(function(e, t) {
                        return e.token < t.token ? -1 : e.token > t.token ? 1 : 0
                    }), c.sort(function(e, t) {
                        return i[t.token].count - i[e.token].count
                    }), c.concat(o).concat(s)
                },
                b = function(e) {
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
                o = /iPhone/i,
                s = /iPad/i,
                c = /iPod/i,
                u = /BlackBerry/i,
                l = /Windows Phone/i,
                d = /Mobile/i;

            function p(e) {
                return m(e) || a.test(e) || o.test(e) || s.test(e) || c.test(e) || u.test(e) || l.test(e) || d.test(e)
            }

            function m(e) {
                return i.test(e)
            }

            function f(e) {
                return r.test(e)
            }
        },
        R9CH: function(e, t, n) {
            e.exports = n.p + "assets/5-gifts-4x-af7088c1de2d9829c6c8.png"
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
                return s
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
                return y
            }), n.d(t, "j", function() {
                return k
            }), n.d(t, "p", function() {
                return E
            }), n.d(t, "n", function() {
                return C
            }), n.d(t, "o", function() {
                return N
            }), n.d(t, "h", function() {
                return T
            }), n.d(t, "g", function() {
                return D
            }), n.d(t, "f", function() {
                return _
            });
            var i, r, a, o, s, c, u = n("/7QA"),
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
                P(e, r.Click, o.StartYourFreeTrial)
            }

            function g(e) {
                P(e, r.Hover, o.StartYourFreeTrial)
            }

            function h(e, t) {
                P(t, r.Click, e ? o.MoreInfo : o.CloseInfo)
            }

            function v(e, t) {
                O(e, r.Click, t)
            }

            function S(e) {
                P(e, r.Hover, o.MoreInfo)
            }

            function y(e) {
                P(e, r.Hover, o.CloseInfo)
            }

            function k(e, t) {
                O(e, r.Hover, t)
            }

            function E(e) {
                P(e, r.Impression, o.Offer)
            }

            function O(e, t, n) {
                var i;
                switch (n) {
                    case d.e.CLAIM_CODE:
                        i = o.GetCode;
                        break;
                    case d.e.EXTERNAL_OFFER:
                        i = o.LearnMore;
                        break;
                    case d.e.DIRECT_ENTITLEMENT:
                        i = o.ClaimOffer
                }
                i && P(e, t, i)
            }

            function P(e, t, n) {
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

            function C(e) {
                u.o.track(l.SpadeEventType.PrimeLootPagePageview, {
                    reftag: e.reftag,
                    user_agent: navigator.userAgent
                })
            }

            function N(e) {
                u.o.track(l.SpadeEventType.PrimeLootPageTryPrimeClick, {
                    button_position: e.buttonPosition,
                    user_agent: navigator.userAgent
                })
            }

            function T() {
                x(a.Impression)
            }

            function D() {
                x(a.Hover)
            }

            function _() {
                x(a.Click)
            }

            function x(e) {
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
            }(o || (o = {})),
            function(e) {
                e.TopNav = "top-nav", e.CenterBanner = "center-banner", e.CenterFooter = "center-footer"
            }(s || (s = {})),
            function(e) {
                e.Wide = "wide", e.Narrow = "narrow"
            }(c || (c = {}))
        },
        SPHB: function(e, t, n) {
            e.exports = n.p + "assets/20-gifts-4x-5618312098f1e4ff3c87.png"
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
        TMQs: function(e, t, n) {
            e.exports = n.p + "assets/ghost-9d66fa1bc55c4ae70570.svg"
        },
        TybJ: function(e, t, n) {
            e.exports = n.p + "assets/10-gifts-4x-13dfbe312ba8d6e9e7c5.png"
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
            e.exports = n.p + "assets/random-viewer-2x-49d419f2c634247ddcad.png"
        },
        "W5/R": function(e, t, n) {},
        W8Fi: function(e, t, n) {
            "use strict";

            function i(e) {
                return e.some(function(e) {
                    return !!e.self && !!e.self.promotion
                })
            }

            function r(e) {
                return e.some(function(e) {
                    return !!e.giftPromotion
                })
            }

            function a(e) {
                return e.some(function(e) {
                    return !!e.self && !!e.self.paidUpgradePromotion
                })
            }

            function o(e, t) {
                var n;
                return t ? n = e.giftPromotion : e.self && (n = e.self.promotion), n ? n.newPrice : e.price
            }

            function s(e, t) {
                var n;
                return t ? n = e.giftPromotion : e.self && (n = e.self.promotion), n ? parseInt(n.discountValue, 10) : 0
            }

            function c(e) {
                return e.self && e.self.paidUpgradePromotion ? e.self.paidUpgradePromotion.newPrice : e.price
            }

            function u(e) {
                return e.find(function(e) {
                    return !!e.self && !!e.self.paidUpgradePromotion
                }) || null
            }
            n.d(t, "g", function() {
                return i
            }), n.d(t, "e", function() {
                return r
            }), n.d(t, "f", function() {
                return a
            }), n.d(t, "c", function() {
                return o
            }), n.d(t, "d", function() {
                return s
            }), n.d(t, "a", function() {
                return c
            }), n.d(t, "b", function() {
                return u
            })
        },
        WAGi: function(e, t, n) {},
        WGf9: function(e, t, n) {},
        Wu8b: function(e, t, n) {},
        XlIw: function(e, t, n) {},
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
                return s
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
                    return o
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
                o = ["354", "49106", "4339", "48", "25", "55338", "70433", "1902", "68856", "81103", "76171", "27509"];
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
        eVBn: function(e, t, n) {
            e.exports = n.p + "assets/random-viewer-1x-a8838e45efbc7b3c7ef1.png"
        },
        "f+qK": function(e, t, n) {
            "use strict";
            n.r(t);
            var i, r = n("mrSG"),
                a = n("q1tI"),
                o = n("fvjX"),
                s = n("/7QA"),
                c = n("ZDlU"),
                u = n("yR8l"),
                l = n("5zXJ"),
                d = n("Ue10");
            ! function(e) {
                e.BalloonDetailLogo = "BalloonDetailLogo", e.BalloonDetailSubheader = "BalloonDetailSubheader", e.BalloonDetailIGCSubheader = "BalloonDetailIGCSubheader", e.BalloonDetailIGCCopy = "BalloonDetailIGCCopy", e.BalloonDetailExperienceSubheader = "BalloonDetailExperienceSubheader", e.BalloonDetailExperienceCopy = "BalloonDetailExperienceCopy"
            }(i || (i = {}));
            var p, m = function() {
                    return a.createElement(d.Ya, {
                        className: "esports-top-page-details"
                    }, a.createElement(d.Ya, {
                        className: "insider-pass-pre-purchase__header",
                        display: d.X.Flex,
                        justifyContent: d.Xa.Center,
                        margin: {
                            bottom: 1
                        },
                        padding: {
                            x: 2,
                            y: 1
                        }
                    }, a.createElement("img", {
                        alt: Object(s.d)("Overwatch League All-Access Pass on Twitch", "CampaignsTopPageDetails"),
                        "data-test-selector": i.BalloonDetailLogo,
                        height: "80px",
                        src: l.c + "/owl-2017/all-access-logo.svg"
                    })), a.createElement(d.Ya, {
                        margin: {
                            bottom: 1
                        }
                    }, a.createElement(d.W, {
                        bold: !0,
                        "data-test-selector": i.BalloonDetailSubheader,
                        type: d.Wb.H4
                    }, Object(s.d)("Your VIP pass to the best of the Overwatch League", "CampaignsTopPageDetails"))), a.createElement(d.Ya, {
                        margin: {
                            bottom: 1
                        }
                    }, a.createElement(d.W, {
                        bold: !0,
                        "data-test-selector": i.BalloonDetailIGCSubheader,
                        type: d.Wb.H6
                    }, Object(s.d)("Overwatch In-Game Content (requires Blizzard account link)", "CampaignsTopPageDetails")), a.createElement(d.W, {
                        "data-test-selector": i.BalloonDetailIGCCopy
                    }, Object(s.d)("15 Hero Skins • OWL Player Icon • OWL Spray", "CampaignsTopPageDetails"))), a.createElement(d.Ya, {
                        margin: {
                            bottom: 1
                        }
                    }, a.createElement(d.W, {
                        bold: !0,
                        "data-test-selector": i.BalloonDetailExperienceSubheader,
                        type: d.Wb.H6
                    }, Object(s.d)("The Overwatch League All-Access Experience", "CampaignsTopPageDetails")), a.createElement(d.W, {
                        "data-test-selector": i.BalloonDetailExperienceCopy
                    }, Object(s.d)("Passholder-only chat •            Match analysis videos by players •            23 Twitch emotes •            OWL chat badges •            Ad-free viewing on OWL •            Post-Match Q&A VODs", "CampaignsTopPageDetails"))))
                },
                f = n("DnOo"),
                b = n("W8Fi");
            n("6nJs");
            ! function(e) {
                e.GiftButtonSelector = "GiftButtonSelector", e.SubscribeButtonSelector = "SubscribeButtonSelector"
            }(p || (p = {}));
            var g, h = function(e) {
                var t = Object(s.d)("Gift All-Access Pass", "CampaignsNonSubbedTopPage");
                return a.createElement(d.Ya, {
                    padding: 2
                }, a.createElement(m, null), a.createElement(d.W, {
                    bold: !0,
                    type: d.Wb.H6
                }, Object(s.d)("One-Time Purchase for the 2018 Season", "CampaignsNonSubbedTopPage")), a.createElement(d.W, null, Object(s.d)("All-Access benefits last up to the start of the 2019 Overwatch League Season.            Twitch emotes, badges, and in-game content are yours to keep forever.", "CampaignsNonSubbedTopPage")), a.createElement(d.Ya, {
                    margin: {
                        top: 1
                    }
                }, a.createElement(d.Ya, {
                    display: d.X.Inline,
                    margin: {
                        right: .5
                    }
                }, a.createElement(f.a, {
                    "data-a-target": p.SubscribeButtonSelector,
                    handleSubAction: e.handleTopPageSubButtonClick,
                    isEsportChannel: !0,
                    isSubbedToTier: !1,
                    productName: e.subscriptionProducts[0].name,
                    tierPrice: Object(b.g)(e.subscriptionProducts) ? Object(b.c)(e.subscriptionProducts[0]) : e.subscriptionProducts[0].price,
                    url: e.subscriptionProducts[0].url
                })), a.createElement(d.z, {
                    ariaLabel: t,
                    "data-test-selector": p.GiftButtonSelector,
                    onClick: e.showRecipientSelect,
                    type: d.F.Hollow
                }, t)))
            };
            ! function(e) {
                e.SubbedSubheader = "SubbedSubheader", e.SubbedCopy = "SubbedCopy", e.GiftButtonSelector = "GiftButtonSelector"
            }(g || (g = {}));
            var v, S = function(e) {
                    var t = Object(s.d)("Gift All-Access Pass", "CampaignsSubbedTopPage");
                    return a.createElement(d.Ya, {
                        padding: 2
                    }, a.createElement(m, null), a.createElement(d.W, {
                        "test-selector": g.SubbedSubheader,
                        type: d.Wb.H4,
                        bold: !0
                    }, Object(s.d)("You have the All-Access Pass", "CampaignsSubbedTopPage")), a.createElement(d.W, {
                        "test-selector": g.SubbedCopy
                    }, Object(s.d)("All-Access benefits last up to the start of the 2019 Overwatch League Season.            Twitch emotes, badges, and in-game content are yours to keep.", "CampaignsSubbedTopPage")), a.createElement(d.Ya, {
                        margin: {
                            top: 1
                        }
                    }, a.createElement(d.z, {
                        ariaLabel: t,
                        "data-test-selector": g.GiftButtonSelector,
                        onClick: e.showRecipientSelect,
                        type: d.F.Hollow
                    }, t)))
                },
                y = n("8Ad5"),
                k = n("f00E"),
                E = n("GnwI"),
                O = n("H/lO"),
                P = n("NZDK"),
                C = n("9kXc"),
                N = n("8/mp"),
                T = n("QVaV"),
                D = n("k91D"),
                _ = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        var e = this.props.data;
                        if (!e || e.loading || !this.props.recipientLogin || !e.user || !e.user.self || e.user.self.canGift) return null;
                        var t = this.props.isEsportChannel ? Object(s.d)("Sorry, an All-Access Pass to this channel is not available for this user", "GiftRecipientIneligibleMessage") : Object(s.d)("Sorry, a gift subscription to this channel is not available for this user.", "GiftRecipientIneligibleMessage"),
                            n = this.props.isEsportChannel ? "esports-gift-eligibility-message-selector" : "gift-eligibility-message-selector";
                        return a.createElement(d.Ya, {
                            margin: {
                                top: 1
                            }
                        }, a.createElement(d.W, {
                            italic: !0,
                            color: d.O.Alt2,
                            "data-test-selector": n
                        }, t))
                    }, t
                }(a.Component),
                x = Object(o.compose)(Object(E.b)("GiftRecipientIneligibleMessage"), Object(u.a)(D, {
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
                }))(_),
                G = n("JMwM"),
                I = n("br9A"),
                F = (n("d/7K"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            selectedUser: null
                        }, t.reportGiftCheckoutAction = function() {
                            t.props.handleSubMenuAction({
                                action: I.a.BuyGiftSub,
                                checkoutButtonTier: t.props.selectedProductPrice,
                                giftRecipient: t.state.selectedUser ? t.state.selectedUser.login : null,
                                isAnonymous: t.props.giftingAnonymously
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
                    return r.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive()
                    }, t.prototype.componentWillReceiveProps = function(e) {
                        (e.isWaiting || e.isErrored || !e.hasInput) && this.setState({
                            selectedUser: null
                        })
                    }, t.prototype.render = function() {
                        var e;
                        return e = this.props.isWaiting ? a.createElement(d.Ya, {
                            fullHeight: !0
                        }, a.createElement(d.ab, {
                            fillContent: !0
                        })) : this.props.hasInput ? this.props.isErrored ? this.getErrorMessage() : this.props.userResults && this.props.userResults.totalHits > 0 ? this.getUserResultContent() : this.getNoResultsMessage() : a.createElement(d.Ya, {
                            margin: 1
                        }, a.createElement(d.W, {
                            color: d.O.Alt2
                        }, Object(s.d)("Start typing to see a list of suggestions here.", "GiftRecipientSearchResult"))), a.createElement("div", {
                            onKeyDown: this.props.onKeyDown
                        }, a.createElement(d.Fb, {
                            className: "gift-recipient-search-result-view",
                            background: d.r.Alt,
                            position: d.kb.Relative,
                            overflow: d.db.Hidden,
                            display: d.X.Block,
                            margin: {
                                bottom: 2
                            },
                            borderLeft: !0,
                            borderBottom: !0,
                            borderRight: !0
                        }, a.createElement(d.Qa, {
                            overflow: d.db.Hidden,
                            position: d.kb.Relative
                        }, a.createElement(N.b, {
                            suppressScrollX: !0
                        }, a.createElement(d.Ya, null, e, a.createElement(N.a, {
                            enabled: !this.props.isWaiting && this.props.hasInput,
                            loadMore: this.props.loadMore
                        }))))), a.createElement(d.Ya, null, a.createElement(d.Ya, {
                            display: d.X.Flex,
                            alignItems: d.f.Center,
                            fullWidth: !0
                        }, this.getBuyGiftButton(), a.createElement(d.Qa, {
                            margin: {
                                x: 1
                            }
                        }, a.createElement(d.W, {
                            "data-test-selector": "gift-recipient-display-name-selector"
                        }, Object(s.d)("for {displayName}", {
                            displayName: a.createElement(d.W, {
                                bold: !0,
                                type: d.Wb.Span
                            }, this.getFormattedDisplayName())
                        }, "GiftRecipientCheckoutButton")))), a.createElement(x, {
                            subProductId: this.props.selectedProductId,
                            recipientLogin: this.state.selectedUser ? this.state.selectedUser.login : null,
                            isEsportChannel: this.props.isEsportChannel
                        })))
                    }, t.prototype.getBuyGiftButton = function() {
                        return a.createElement(G.a, {
                            checkoutURL: this.props.selectedProductURL,
                            giftingAnonymously: this.props.giftingAnonymously,
                            giftRecipient: this.state.selectedUser ? this.state.selectedUser.login : null,
                            isEsportChannel: this.props.isEsportChannel,
                            onClick: this.reportGiftCheckoutAction,
                            productName: this.props.selectedProductName,
                            subProductId: this.props.selectedProductId
                        })
                    }, t.prototype.getFormattedDisplayName = function() {
                        return this.state.selectedUser ? Object(T.a)(this.state.selectedUser.login, this.state.selectedUser.name) : ""
                    }, t.prototype.getErrorMessage = function() {
                        return a.createElement(d.Ya, {
                            fullWidth: !0,
                            textAlign: d.Sb.Center,
                            justifyContent: d.Xa.Center
                        }, a.createElement(d.W, null, Object(s.d)("Something went wrong", "GiftRecipientSearchResult")))
                    }, t.prototype.getUserResultContent = function() {
                        var e = this;
                        return this.props.userResults ? this.props.userResults.results.map(function(t) {
                            var n = Object(T.a)(t.login || "", t.name || "");
                            return a.createElement(d.Va, {
                                tabIndex: -1,
                                "data-ts_selectable": !0,
                                "data-tt_content": !0,
                                key: "git-recipient-result__" + t.id,
                                "data-user_id": t.id,
                                "data-user_login": t.login,
                                "data-user_name": t.name,
                                onClick: e.onUserClick,
                                "data-test-selector": "subscribe-button__gift_search_result"
                            }, a.createElement(d.Ya, {
                                padding: .5
                            }, a.createElement(d.G, {
                                row: !0
                            }, a.createElement(d.I, {
                                alt: t.thumbnailAltText,
                                src: t.thumbnail ? t.thumbnail : "",
                                size: d.J.Size4,
                                aspect: d.p.Aspect1x1
                            }), a.createElement(d.H, {
                                overflow: d.db.Hidden
                            }, a.createElement(d.Qa, {
                                padding: {
                                    x: 1
                                }
                            }, a.createElement(d.W, {
                                type: d.Wb.H5,
                                ellipsis: !0
                            }, n))))))
                        }) : a.createElement(d.jb, null)
                    }, t.prototype.getNoResultsMessage = function() {
                        return a.createElement(d.Ya, {
                            margin: 1
                        }, a.createElement(d.W, {
                            color: d.O.Alt2
                        }, Object(s.d)("No Results", "GiftRecipientSearchResult")))
                    }, t = r.__decorate([Object(E.b)("GiftRecipientSearchResultPanel")], t)
                }(a.Component)),
                w = n("FLOH");
            ! function(e) {
                e.Prime = "prime", e.Tier1 = "1000", e.Tier2 = "2000", e.Tier3 = "3000"
            }(v || (v = {}));
            var A, j = {
                    prime: 0,
                    1000: 0,
                    2000: 1,
                    3000: 2
                },
                R = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            activeTab: v.Tier1
                        }, t.toggleActiveTab = function(e) {
                            if (e.currentTarget.parentElement) {
                                var n = e.currentTarget.parentElement;
                                t.setState(function(e) {
                                    return {
                                        activeTab: n.getAttribute("data-tier") || e.activeTab
                                    }
                                }, function() {
                                    var e = t.props.subscriptionProducts[j[t.state.activeTab]];
                                    t.props.handleSubMenuAction({
                                        action: I.a.ChangeTier,
                                        checkoutButtonTier: e.price
                                    }), t.props.onTierSelect(e)
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
                                tierNumber: j[n] + 1
                            }, "TierTabsWrapper"))
                        });
                        return a.createElement(d.Ya, {
                            className: "tier-tabs-wrapper"
                        }, a.createElement(d.Ya, {
                            margin: {
                                bottom: 1
                            }
                        }, a.createElement(d.Hb, null, t)), a.createElement(d.Ya, null, this.props.children))
                    }, t.prototype.renderTab = function(e, t) {
                        return a.createElement(d.Ya, {
                            display: d.X.InlineFlex,
                            key: "sub-tier-tab-" + e,
                            margin: {
                                right: 2
                            }
                        }, this.props.subbedTier === e && a.createElement(d.Ya, {
                            display: d.X.InlineFlex,
                            margin: {
                                right: .5
                            }
                        }, a.createElement(d.tb, {
                            asset: d.ub.Star
                        })), a.createElement(d.Gb, {
                            active: this.state.activeTab === e,
                            "data-tier": e,
                            onClick: this.toggleActiveTab
                        }, t))
                    }, t
                }(a.Component),
                B = (n("D/Iv"), function(e) {
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
                    return r.__extends(t, e), t.prototype.render = function() {
                        if (!this.state.selectedSubProduct) return a.createElement(d.jb, null);
                        var e = null;
                        if (this.state.selectedSubProduct && this.state.selectedSubProduct.giftPromotion) {
                            var t = this.state.selectedSubProduct && this.state.selectedSubProduct.giftPromotion ? this.state.selectedSubProduct.giftPromotion : null;
                            e = a.createElement(d.W, {
                                bold: !0,
                                className: "subscription-gift-recipient-search__discount-message"
                            }, Object(s.d)("{price} (Save {percent})", {
                                percent: Object(s.f)(t ? parseInt(t.discountValue, 10) / 100 : 0, "percent"),
                                price: t ? t.newPrice : ""
                            }, "GiftRecipientSearch"))
                        }
                        var n = this.props.isEsportChannel ? "gift-recipient-search-esports-subheading-selector" : "gift-recipient-search-subheading-selector",
                            i = Object(s.d)("Gift Anonymously", "GiftRecipientSearch");
                        return a.createElement(d.Ya, {
                            className: "subscription-gift-recipient-search",
                            padding: 2
                        }, a.createElement(d.Ya, {
                            display: d.X.Flex,
                            justifyContent: d.Xa.Between,
                            margin: {
                                bottom: 1
                            }
                        }, a.createElement(d.Ya, {
                            className: "community-gift-bundle-selection__back-button"
                        }, a.createElement(d.z, {
                            "data-a-target": "subscribe-back-button",
                            "data-test-selector": "gift-recipient-search-back-button",
                            icon: d.ub.AngleLeft,
                            onClick: this.props.onBack,
                            type: d.F.Text
                        }, a.createElement(d.Ya, {
                            alignItems: d.f.Center,
                            display: d.X.InlineFlex
                        }, a.createElement(d.W, null, Object(s.d)("Back", "GiftRecipientSearch"))))), a.createElement(d.Ya, {
                            alignSelf: d.g.Center
                        }, a.createElement(d.N, {
                            checked: this.props.giftingAnonymously,
                            label: i,
                            onChange: this.props.onAnonymousGiftingSelect
                        }))), a.createElement(d.Ya, {
                            margin: {
                                y: 1
                            }
                        }, a.createElement(d.Ya, {
                            display: d.X.Flex
                        }, a.createElement(d.tb, {
                            asset: this.props.giftingAnonymously ? d.ub.Ghost : d.ub.Gift
                        }), a.createElement(d.Ya, {
                            flexGrow: 1,
                            padding: {
                                left: .5
                            }
                        }, a.createElement(d.W, {
                            bold: !0,
                            fontSize: d.Ca.Size4
                        }, Object(s.d)("Choose a Gift Recipient", "GiftRecipientSearch"))))), a.createElement(R, {
                            handleSubMenuAction: this.props.handleSubMenuAction,
                            onTierSelect: this.onTierSelect,
                            subscriptionProducts: this.props.subscriptionProducts
                        }, a.createElement(a.Fragment, null, a.createElement(d.Ya, {
                            padding: {
                                y: 1
                            }
                        }, a.createElement(w.a, {
                            allSubProducts: this.props.subscriptionProducts,
                            "data-test-selector": n,
                            isEsportChannel: this.props.isEsportChannel,
                            selectedSubProduct: this.state.selectedSubProduct
                        })), e, a.createElement(d.Ya, {
                            display: d.X.Flex,
                            fullWidth: !0,
                            justifyContent: d.Xa.Center,
                            padding: {
                                top: 1
                            }
                        }, a.createElement(d.Ya, {
                            fullWidth: !0
                        }, a.createElement(d.wb, {
                            "data-test-selector": "gift-recipient-search-input-selector",
                            id: "gift-recipient-search",
                            onChange: this.handleChange,
                            onKeyDown: this.props.onKeyDown,
                            placeholder: Object(s.d)("Search for a Twitch ID", "GiftRecipientSearch")
                        }), a.createElement(F, {
                            giftingAnonymously: this.props.giftingAnonymously,
                            handleSubMenuAction: this.props.handleSubMenuAction,
                            hasInput: this.props.hasInput,
                            isErrored: this.props.isErrored,
                            isEsportChannel: this.props.isEsportChannel,
                            isWaiting: this.props.isWaiting,
                            loadMore: this.props.loadMore,
                            onKeyDown: this.props.onKeyDown,
                            selectedProductId: this.state.selectedSubProduct.id,
                            selectedProductName: this.state.selectedSubProduct.name,
                            selectedProductPrice: this.state.selectedSubProduct.price,
                            selectedProductURL: this.state.selectedSubProduct.url,
                            userResults: this.props.userResults
                        }))))))
                    }, t
                }(a.Component)),
                L = 50,
                U = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.onChange = function(e) {
                            n.inputTimer && (clearTimeout(n.inputTimer), n.inputTimer = 0), e ? (n.setState({
                                isWaiting: !0
                            }), n.inputTimer = setTimeout(function() {
                                return n.doSearch(e)
                            }, L)) : n.setState(n.getEmptyState())
                        }, n.loadMore = function() {
                            return r.__awaiter(n, void 0, void 0, function() {
                                var e, t, n;
                                return r.__generator(this, function(i) {
                                    switch (i.label) {
                                        case 0:
                                            if (this.state.queryID || !0 === this.state.exhaustedHits) return [2];
                                            e = this.state.currentPage + 1, i.label = 1;
                                        case 1:
                                            return i.trys.push([1, 3, , 4]), [4, this.searchClient.queryForType(O.a.Users, this.state.term, "", {
                                                page: e
                                            })];
                                        case 2:
                                            return t = i.sent(), [3, 4];
                                        case 3:
                                            return i.sent(), this.setState(r.__assign({}, this.getEmptyState(), {
                                                isErrored: !0,
                                                hasInput: !0
                                            })), [2];
                                        case 4:
                                            return t ? (n = Object(C.b)({
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
                                            }), [2]) : (this.setState(r.__assign({}, this.getEmptyState(), {
                                                isErrored: !0,
                                                hasInput: !0
                                            })), [2])
                                    }
                                })
                            })
                        }, n.onKeyDown = function(e) {
                            n.state.term && (e.keyCode === y.a.Esc ? n.setState({
                                hasInput: !1
                            }) : e.keyCode === y.a.Up ? n.focusNext(-1) : e.keyCode === y.a.Down && n.focusNext(1))
                        }, n.state = n.getEmptyState(), n.searchClient = new P.a({
                            appId: s.a.algoliaApplicationID,
                            apiKey: s.a.algoliaAPIKey,
                            apolloClient: s.p.apollo.client,
                            logger: s.k,
                            config: s.a,
                            stats: s.p.stats
                        }), n
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        return a.createElement(B, {
                            giftingAnonymously: this.props.giftingAnonymously,
                            handleSubMenuAction: this.props.handleSubMenuAction,
                            hasInput: this.state.hasInput,
                            isErrored: this.state.isErrored,
                            isEsportChannel: this.props.isEsportChannel,
                            isStaff: this.props.isStaff,
                            isWaiting: this.state.isWaiting,
                            onAnonymousGiftingSelect: this.props.onAnonymousGiftingSelect,
                            onBack: this.props.onBack,
                            onChange: this.onChange,
                            onKeyDown: this.onKeyDown,
                            loadMore: this.loadMore,
                            subscriptionProducts: this.props.subscriptionProducts,
                            userResults: this.state.currentUserResults
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
                        return r.__awaiter(this, void 0, void 0, function() {
                            var t, n, i, a, o;
                            return r.__generator(this, function(s) {
                                switch (s.label) {
                                    case 0:
                                        this.inputTimer = 0, t = -1, n = k.a(), i = "INPUT" === document.activeElement.tagName, this.setState({
                                            queryID: n,
                                            focusSelectable: !i && !!this.state.currentFocus
                                        }), s.label = 1;
                                    case 1:
                                        return s.trys.push([1, 3, , 4]), t = 0, [4, this.searchClient.queryForType(O.a.Users, e, n)];
                                    case 2:
                                        return a = s.sent(), [3, 4];
                                    case 3:
                                        return s.sent(), this.setState(r.__assign({}, this.getEmptyState(), {
                                            isErrored: !0,
                                            hasInput: !0,
                                            term: e
                                        })), [2];
                                    case 4:
                                        return a ? this.state.queryID !== a.id ? [2] : (o = Object(C.b)({
                                            searchResults: a,
                                            append: !1
                                        }), this.setState(function(n) {
                                            return r.__assign({}, n, o, {
                                                queryID: "",
                                                term: e,
                                                hasInput: !0,
                                                isWaiting: !1,
                                                currentPage: t
                                            })
                                        }), [2]) : (this.setState(r.__assign({}, this.getEmptyState(), {
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
                    }, t = r.__decorate([Object(E.b)("GiftRecipientSearch")], t)
                }(a.Component);
            ! function(e) {
                e[e.Top = 0] = "Top", e[e.SubOptions = 1] = "SubOptions", e[e.GiftOptions = 2] = "GiftOptions", e[e.RecipientSelect = 3] = "RecipientSelect", e[e.MysteryGiftSelect = 4] = "MysteryGiftSelect", e[e.Esports = 5] = "Esports"
            }(A || (A = {}));
            var M, W = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.goToPreviousPage = function() {
                            t.props.handleSubMenuAction({
                                action: I.a.ClickBack,
                                modalLevel: t.props.currentPage === A.SubOptions || t.props.currentPage === A.GiftOptions ? "top_page" : "second_page"
                            }), t.props.currentPage !== A.RecipientSelect || t.props.showTop()
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        return this.props.currentPage === A.RecipientSelect ? this.getGiftRecipientSearchPage() : this.props.isSubscribed ? this.getSubbedTopPage() : this.getUnsubbedTopPage()
                    }, t.prototype.getSubbedTopPage = function() {
                        return a.createElement(S, {
                            showRecipientSelect: this.props.showRecipientSelect
                        })
                    }, t.prototype.getUnsubbedTopPage = function() {
                        return a.createElement(h, {
                            channelLogin: this.props.channelLogin,
                            handleTopPageSubButtonClick: this.props.handleTopPageSubButtonClick,
                            handleSubMenuAction: this.props.handleSubMenuAction,
                            subscriptionProducts: this.props.subscriptionProducts ? this.props.subscriptionProducts : [],
                            userHasPrime: this.props.userHasPrime,
                            showRecipientSelect: this.props.showRecipientSelect
                        })
                    }, t.prototype.getGiftRecipientSearchPage = function() {
                        return this.props.subscriptionProducts ? a.createElement(U, {
                            giftingAnonymously: this.props.giftingAnonymously,
                            handleSubMenuAction: this.props.handleSubMenuAction,
                            isEsportChannel: !0,
                            isStaff: this.props.isStaff,
                            key: "gift-recipient-search-page",
                            onAnonymousGiftingSelect: this.props.onAnonymousGiftingSelect,
                            onBack: this.goToPreviousPage,
                            subscriptionProducts: this.props.subscriptionProducts
                        }) : null
                    }, t
                }(a.Component),
                Y = n("gzT4"),
                H = n.n(Y),
                z = n("eVBn"),
                V = n.n(z),
                q = n("W+18"),
                X = n.n(q),
                Q = n("CdEI"),
                K = n.n(Q),
                $ = n("HdJw"),
                J = n.n($),
                Z = n("FMOh"),
                ee = n.n(Z),
                te = n("fIIl"),
                ne = n.n(te),
                ie = (n("hKya"), "animated-background-transition"),
                re = ie + "__toggled-content",
                ae = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            previousToggle: t.props.toggle,
                            toggled: !1
                        }, t.ref = null, t.setRef = function(e) {
                            t.ref = e, t.ref && t.ref.addEventListener("animationend", t.unToggle)
                        }, t.unToggle = function() {
                            return t.setState({
                                toggled: !1
                            })
                        }, t
                    }
                    return r.__extends(t, e), t.getDerivedStateFromProps = function(e, t) {
                        return t.previousToggle === e.toggle ? null : {
                            previousToggle: e.toggle,
                            toggled: !0
                        }
                    }, t.prototype.componentWillUnmount = function() {
                        this.ref && this.ref.removeEventListener("animationend", this.unToggle)
                    }, t.prototype.render = function() {
                        var e = this.props.toggle ? re + "--show" : re + "--hide";
                        return this.state.toggled && (e = this.props.toggle ? re + "--fade-in" : re + "--fade-out"), a.createElement(d.Ya, {
                            className: ie,
                            position: d.kb.Relative
                        }, a.createElement(d.Ya, {
                            className: ie + "__background",
                            position: d.kb.Absolute
                        }), a.createElement(d.Ya, {
                            className: e,
                            position: d.kb.Absolute,
                            refDelegate: this.setRef
                        }, this.props.toggledContent), a.createElement(d.Ya, {
                            position: d.kb.Absolute
                        }, this.props.content))
                    }, t
                }(a.Component),
                oe = n("TMQs"),
                se = n.n(oe),
                ce = (n("gCfo"), "dismissed_anonymous_gifting_promo"),
                ue = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            dismissedPromo: s.m.get(ce, !1)
                        }, t.closeButtonOnClick = function() {
                            s.m.set(ce, !0), t.setState({
                                dismissedPromo: !0
                            })
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        return this.state.dismissedPromo ? null : a.createElement(d.Fb, {
                            alignItems: d.f.Center,
                            borderRadius: d.x.Medium,
                            className: "anonymous-gifting-promo",
                            display: d.X.Flex
                        }, a.createElement(d.Qa, {
                            margin: {
                                top: .5,
                                x: 1
                            }
                        }, a.createElement(d.S, {
                            alt: Object(s.d)("Ghost", "AnonymousGiftingPromo"),
                            src: se.a
                        })), a.createElement(d.W, {
                            color: d.O.Overlay
                        }, Object(s.d)("<x:strong>New!</x:strong> You can now give gifts anonymously!", {
                            "x:strong": function(e) {
                                return a.createElement(d.W, {
                                    bold: !0,
                                    className: "anonymous-gifting-promo__cta",
                                    type: d.Wb.Span
                                }, e)
                            }
                        }, "AnonymousGiftingPromo")), a.createElement(d.Ya, {
                            margin: {
                                left: "auto",
                                right: .5
                            }
                        }, a.createElement(d.A, {
                            ariaLabel: Object(s.d)("Close", "AnonymousGiftingPromo"),
                            icon: d.ub.Close,
                            onClick: this.closeButtonOnClick,
                            type: d.C.Secondary
                        })))
                    }, t
                }(a.Component);
            n("EBDZ");
            ! function(e) {
                e.IneligibleToGiftMessage = "IneligibleToGiftMessage", e.MysteryGiftButton = "MysteryGiftButton", e.SingleGiftButton = "SingleGiftButton"
            }(M || (M = {}));
            var le = function(e) {
                    var t = Object(s.d)("Gift Anonymously", "GiftOptions");
                    return a.createElement(d.Ya, {
                        className: "subscription-gift-options",
                        padding: 2
                    }, a.createElement(d.Ya, {
                        display: d.X.Flex,
                        justifyContent: d.Xa.Between,
                        padding: {
                            bottom: .5
                        }
                    }, a.createElement(d.Ya, null, e.onBack && a.createElement(d.Ya, {
                        className: "subscription-gift-options__back-button",
                        margin: {
                            bottom: 1
                        }
                    }, a.createElement(d.z, {
                        type: d.F.Text,
                        "data-a-target": "subscribe-back-button",
                        icon: d.ub.AngleLeft,
                        onClick: e.onBack
                    }, a.createElement(d.Ya, {
                        alignItems: d.f.Center,
                        display: d.X.InlineFlex
                    }, a.createElement(d.W, null, Object(s.d)("Back", "GiftOptions"))))), a.createElement(d.Ya, {
                        display: d.X.Flex
                    }, a.createElement(d.tb, {
                        asset: e.giftingAnonymously ? d.ub.Ghost : d.ub.Gift
                    }), a.createElement(d.Ya, {
                        flexGrow: 1,
                        padding: {
                            left: .5
                        }
                    }, a.createElement(d.W, {
                        bold: !0,
                        fontSize: d.Ca.Size4
                    }, Object(s.d)("Gift a Subscription", "GiftOptions"))))), a.createElement(d.Ya, {
                        alignSelf: e.onBack ? d.g.Start : d.g.Center,
                        margin: {
                            top: .5
                        }
                    }, a.createElement(d.N, {
                        checked: e.giftingAnonymously,
                        label: t,
                        onChange: e.onAnonymousGiftingSelect
                    }))), e.currentUserCanGift ? a.createElement(d.Ya, {
                        margin: {
                            top: 1
                        }
                    }, a.createElement(ue, null)) : a.createElement(d.Fb, {
                        borderBottom: !0,
                        borderRight: !0,
                        borderTop: !0,
                        className: "subscription-gift-options__ineligible-message",
                        "data-test-selector": M.IneligibleToGiftMessage,
                        margin: {
                            top: 1
                        },
                        padding: 1
                    }, a.createElement(d.W, null, Object(s.d)("Sorry, you cannot give gifts in this channel.", "GiftOptions"))), a.createElement(d.Ya, {
                        display: d.X.Flex,
                        margin: {
                            top: 1
                        }
                    }, a.createElement(d.Ya, {
                        flexShrink: 0,
                        margin: {
                            bottom: "auto"
                        }
                    }, a.createElement(ae, {
                        content: a.createElement(d.S, {
                            alt: Object(s.d)("Give a gift to a viewer", "GiftOptions"),
                            src: J.a,
                            srcSet: {
                                "1x": J.a,
                                "2x": ee.a,
                                "4x": ne.a
                            }
                        }),
                        toggle: e.giftingAnonymously,
                        toggledContent: a.createElement(d.Ra, {
                            borderRadius: d.x.Medium
                        }, a.createElement(d.S, {
                            alt: Object(s.d)("Give a gift to a viewer anonymously", "GiftOptions"),
                            src: H.a
                        }))
                    })), a.createElement(d.Ya, {
                        margin: {
                            left: .5
                        },
                        padding: {
                            left: 1
                        }
                    }, a.createElement(d.Ya, {
                        margin: {
                            bottom: .5
                        }
                    }, a.createElement(d.W, {
                        bold: !0,
                        fontSize: d.Ca.Size5
                    }, Object(s.d)("Gift to a Viewer", "GiftOptions"))), a.createElement(d.Ya, {
                        margin: {
                            bottom: 1,
                            top: .5
                        }
                    }, a.createElement(d.W, null, Object(s.d)("Help grow the community by gifting a one-month subscription to someone specific.", "GiftOptions"))), a.createElement(d.Ya, {
                        margin: {
                            top: 1
                        }
                    }, a.createElement(d.z, {
                        "data-test-selector": M.SingleGiftButton,
                        disabled: !e.currentUserCanGift,
                        onClick: e.onGiftSelect
                    }, Object(s.d)("Give a Gift Subscription", "GiftOptions"))))), !e.isNonStandardSub && a.createElement(d.Ya, {
                        display: d.X.Flex,
                        margin: {
                            top: 2
                        }
                    }, a.createElement(d.Ya, {
                        flexShrink: 0,
                        margin: {
                            bottom: "auto"
                        }
                    }, a.createElement(ae, {
                        content: a.createElement(d.S, {
                            alt: Object(s.d)("Give a gift to the community", "GiftOptions"),
                            src: V.a,
                            srcSet: {
                                "1x": V.a,
                                "2x": X.a,
                                "4x": K.a
                            }
                        }),
                        toggle: e.giftingAnonymously,
                        toggledContent: a.createElement(d.Ra, {
                            borderRadius: d.x.Medium
                        }, a.createElement(d.S, {
                            alt: Object(s.d)("Give a gift to the community anonymously", "GiftOptions"),
                            src: H.a
                        }))
                    })), a.createElement(d.Ya, {
                        margin: {
                            left: .5
                        },
                        padding: {
                            left: 1
                        }
                    }, a.createElement(d.Ya, {
                        margin: {
                            bottom: .5
                        }
                    }, a.createElement(d.Ya, {
                        display: d.X.InlineBlock
                    }, a.createElement(d.W, {
                        bold: !0,
                        fontSize: d.Ca.Size5
                    }, Object(s.d)("Gift to the Community", "GiftOptions"))), " ", a.createElement(d.W, {
                        bold: !0,
                        color: d.O.Link,
                        fontSize: d.Ca.Size5,
                        type: d.Wb.Span
                    }, Object(s.d)("New!", "GiftOptions"))), a.createElement(d.Ya, {
                        margin: {
                            bottom: 1,
                            top: .5
                        }
                    }, a.createElement(d.W, null, Object(s.d)("Give up to 100 gifts to followers and viewers of {channelDisplayName}! Twitch will figure out the lucky recipients.", {
                        channelDisplayName: e.channelDisplayName
                    }, "GiftOptions"))), a.createElement(d.Ya, {
                        margin: {
                            top: 1
                        }
                    }, a.createElement(d.z, {
                        "data-test-selector": M.MysteryGiftButton,
                        disabled: !e.currentUserCanGift,
                        onClick: e.onMysteryGiftSelect
                    }, Object(s.d)("Give Gift Subscriptions", "GiftOptions"))))))
                },
                de = n("UUve");

            function pe(e, t) {
                return "$" + (parseFloat(t.price.slice(1)) * e).toFixed(2)
            }
            n("XlIw");
            var me = 1,
                fe = 100,
                be = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            giftCount: me,
                            inputString: me.toString()
                        }, t.handleChange = function(e) {
                            if ("" !== e.target.value) {
                                var n = parseInt(e.target.value, 10);
                                isNaN(n) || (n < me ? n = me : n > fe && (n = fe), t.setState({
                                    giftCount: n,
                                    inputString: n.toString()
                                }))
                            } else t.setState({
                                giftCount: 1,
                                inputString: e.target.value
                            })
                        }, t.onCheckoutClick = function() {
                            s.n.set(de.d, t.props.subscriptionProduct.name), s.n.set(de.c, t.state.giftCount), s.n.set(de.a, t.props.giftingAnonymously), t.props.handleSubMenuAction({
                                action: I.a.BuyCustomMysteryGift,
                                checkoutButtonTier: t.props.subscriptionProduct.tier,
                                mysteryGiftCount: t.state.giftCount,
                                isAnonymous: t.props.giftingAnonymously
                            })
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        return a.createElement(d.Ya, {
                            fullWidth: !0
                        }, a.createElement(d.W, {
                            bold: !0,
                            fontSize: d.Ca.Size5
                        }, Object(s.d)("Custom Amount", "CustomMysteryGiftBundle")), a.createElement(d.Ya, {
                            display: d.X.Flex,
                            justifyContent: d.Xa.Between,
                            margin: {
                                top: 1
                            }
                        }, a.createElement(d.Ya, {
                            alignItems: d.f.Center,
                            display: d.X.Flex,
                            margin: {
                                right: .5
                            }
                        }, a.createElement(d.Ya, {
                            margin: {
                                right: 1
                            }
                        }, a.createElement(d.Sa, {
                            max: this.props.limit || fe,
                            min: me,
                            onChange: this.handleChange,
                            type: d.Ua.Number,
                            value: this.state.inputString
                        })), a.createElement(d.W, {
                            className: "custom-community-gift-bundle__max-text"
                        }, Object(s.d)("(Max {limit, number})", {
                            limit: this.props.limit || fe
                        }, "CustomMysteryGiftBundle"))), a.createElement(d.Ya, {
                            className: "custom-community-gift-bundle__purchase-button"
                        }, a.createElement(d.z, {
                            fullWidth: !0,
                            onClick: this.onCheckoutClick,
                            purchase: pe(this.state.giftCount, this.props.subscriptionProduct),
                            targetBlank: !0
                        }, Object(s.d)("{mysteryGiftCount, plural, one {Give {mysteryGiftCount} Gift} other {Give {mysteryGiftCount} Gifts}}", {
                            mysteryGiftCount: this.state.giftCount
                        }, "CustomMysteryGiftBundle")))))
                    }, t
                }(a.Component),
                ge = n("6BMd"),
                he = n.n(ge),
                ve = (n("EYib"), n("EEuB")),
                Se = n.n(ve),
                ye = n("/iCH"),
                ke = n.n(ye),
                Ee = n("/Zlu"),
                Oe = n.n(Ee),
                Pe = n("wK7Q"),
                Ce = n.n(Pe),
                Ne = n("+naV"),
                Te = n.n(Ne),
                De = n("TybJ"),
                _e = n.n(De),
                xe = n("rhZM"),
                Ge = n.n(xe),
                Ie = n("D+xR"),
                Fe = n.n(Ie),
                we = n("CCnc"),
                Ae = n.n(we),
                je = n("u3Ph"),
                Re = n.n(je),
                Be = n("GJys"),
                Le = n.n(Be),
                Ue = n("SPHB"),
                Me = n.n(Ue),
                We = n("OdUb"),
                Ye = n.n(We),
                He = n("nhit"),
                ze = n.n(He),
                Ve = n("R9CH"),
                qe = n.n(Ve),
                Xe = n("2xp8"),
                Qe = n.n(Xe),
                Ke = n("kHse"),
                $e = n.n(Ke),
                Je = n("wM1o"),
                Ze = n.n(Je);
            var et, tt = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.handleClick = function() {
                            s.n.set(de.d, t.props.subscriptionProduct.name), s.n.set(de.c, String(t.props.mysteryGiftCount)), s.n.set(de.a, t.props.giftingAnonymously), t.props.handleSubMenuAction({
                                action: I.a.BuyMysteryGift,
                                checkoutButtonTier: t.props.subscriptionProduct.tier,
                                mysteryGiftCount: t.props.mysteryGiftCount,
                                isAnonymous: t.props.giftingAnonymously
                            })
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        var e = function(e) {
                            return e >= 100 ? {
                                "1x": Ge.a,
                                "2x": Fe.a,
                                "4x": Ae.a
                            } : e >= 50 ? {
                                "1x": Qe.a,
                                "2x": $e.a,
                                "4x": Ze.a
                            } : e >= 20 ? {
                                "1x": Re.a,
                                "2x": Le.a,
                                "4x": Me.a
                            } : e >= 10 ? {
                                "1x": Ce.a,
                                "2x": Te.a,
                                "4x": _e.a
                            } : e >= 5 ? {
                                "1x": Ye.a,
                                "2x": ze.a,
                                "4x": qe.a
                            } : e >= 1 ? {
                                "1x": Se.a,
                                "2x": ke.a,
                                "4x": Oe.a
                            } : {
                                "1x": "",
                                "2x": "",
                                "4x": ""
                            }
                        }(this.props.mysteryGiftCount);
                        return a.createElement(d.Ya, {
                            className: "mystery-gift-bundle",
                            margin: {
                                bottom: 2
                            }
                        }, a.createElement(ae, {
                            content: a.createElement(d.S, {
                                alt: Object(s.d)("{mysteryGiftCount, plural, one {Give {mysteryGiftCount} gift randomly.} other {Give {mysteryGiftCount} gifts randomly.}}", {
                                    mysteryGiftCount: this.props.mysteryGiftCount
                                }, "MysteryGiftBundle"),
                                src: e["1x"],
                                srcSet: e
                            }),
                            toggle: this.props.giftingAnonymously,
                            toggledContent: a.createElement(d.Ra, {
                                borderRadius: d.x.Medium
                            }, a.createElement(d.S, {
                                alt: Object(s.d)("{mysteryGiftCount, plural, one {Give {mysteryGiftCount} anonymous gift randomly.} other {Give {mysteryGiftCount} anonymous gifts randomly.}}", {
                                    mysteryGiftCount: this.props.mysteryGiftCount
                                }, "MysteryGiftBundle"),
                                src: he.a
                            }))
                        }), a.createElement(d.Ya, {
                            display: d.X.Flex,
                            margin: {
                                top: .5
                            }
                        }, a.createElement(d.z, {
                            fullWidth: !0,
                            onClick: this.handleClick,
                            purchase: pe(this.props.mysteryGiftCount, this.props.subscriptionProduct),
                            targetBlank: !0
                        }, Object(s.d)("{mysteryGiftCount, plural, one {Give {mysteryGiftCount} Gift} other {Give {mysteryGiftCount} Gifts}}", {
                            mysteryGiftCount: this.props.mysteryGiftCount
                        }, "MysteryGiftBundle"))))
                    }, t
                }(a.Component),
                nt = (n("uOOi"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            activeProduct: t.props.subscriptionProducts[0]
                        }, t.setActiveTab = function(e) {
                            t.setState({
                                activeProduct: e
                            })
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        var e = this.props,
                            t = this.state,
                            n = Object(s.d)("Gift Anonymously", "MysteryGiftBundleSelection");
                        return a.createElement(d.Ya, {
                            className: "community-gift-bundle-selection"
                        }, a.createElement(d.Ya, {
                            padding: {
                                top: 2,
                                x: 2
                            }
                        }, a.createElement(d.Ya, {
                            display: d.X.Flex,
                            justifyContent: d.Xa.Between
                        }, a.createElement(d.Ya, {
                            className: "community-gift-bundle-selection__back-button"
                        }, a.createElement(d.z, {
                            "data-a-target": "subscribe-back-button",
                            icon: d.ub.AngleLeft,
                            onClick: e.onBack,
                            type: d.F.Text
                        }, a.createElement(d.W, null, Object(s.d)("Back", "MysteryGiftBundleSelection")))), a.createElement(d.Ya, {
                            alignSelf: d.g.Center
                        }, a.createElement(d.N, {
                            checked: e.giftingAnonymously,
                            label: n,
                            onChange: e.onAnonymousGiftingSelect
                        }))), a.createElement(d.Ya, {
                            margin: {
                                y: 1
                            }
                        }, a.createElement(d.Ya, {
                            display: d.X.Flex
                        }, a.createElement(d.tb, {
                            asset: e.giftingAnonymously ? d.ub.Ghost : d.ub.Gift
                        }), a.createElement(d.Ya, {
                            flexGrow: 1,
                            padding: {
                                left: .5
                            }
                        }, a.createElement(d.W, {
                            bold: !0,
                            fontSize: d.Ca.Size4
                        }, Object(s.d)("Gift to the Community", "MysteryGiftBundleSelection")))))), a.createElement(R, {
                            handleSubMenuAction: this.props.handleSubMenuAction,
                            onTierSelect: this.setActiveTab,
                            subscriptionProducts: e.subscriptionProducts
                        }, a.createElement(d.Qa, {
                            className: "community-gift-bundle-selection__view",
                            overflow: d.db.Hidden,
                            position: d.kb.Relative
                        }, a.createElement(N.b, null, a.createElement(d.Ya, {
                            padding: {
                                bottom: 2,
                                x: 2
                            }
                        }, a.createElement(d.Ya, {
                            padding: {
                                top: 1
                            }
                        }, a.createElement(w.a, {
                            allSubProducts: e.subscriptionProducts,
                            selectedSubProduct: t.activeProduct
                        })), a.createElement(d.Ya, {
                            display: d.X.Flex,
                            flexWrap: d.Ba.Wrap,
                            justifyContent: d.Xa.Between,
                            padding: {
                                top: 2
                            }
                        }, e.mysteryGiftBundles.map(function(n) {
                            return a.createElement(tt, {
                                giftingAnonymously: e.giftingAnonymously,
                                handleSubMenuAction: e.handleSubMenuAction,
                                key: "MysteryGiftBundle" + n,
                                mysteryGiftCount: n,
                                subscriptionProduct: t.activeProduct
                            })
                        }), a.createElement(be, {
                            giftingAnonymously: e.giftingAnonymously,
                            handleSubMenuAction: e.handleSubMenuAction,
                            limit: e.customMysteryGiftBundleLimit,
                            subscriptionProduct: t.activeProduct
                        })))))))
                    }, t
                }(a.Component)),
                it = n("DMoW"),
                rt = n("L+W6"),
                at = n("a5fV"),
                ot = n("AXRb"),
                st = function(e) {
                    var t = null,
                        n = null,
                        i = null,
                        r = e.subscriptionProducts[0].price;
                    if (e.subscriptionProducts[0].priceInfo) {
                        var o = e.subscriptionProducts[0].priceInfo;
                        r = Object(at.a)(Object(at.b)(o.total, o.exponent), o.currency)
                    }
                    if (Object(b.g)(e.subscriptionProducts) && (r = Object(b.c)(e.subscriptionProducts[0])), e.channelLogin && (e.inPrimeRegion || e.userHasPrime)) {
                        var c = e.userHasPrime ? Object(s.d)("Use your free channel subscription to directly support your favorite streamer. {upsellTextLink}", {
                            upsellTextLink: a.createElement("a", {
                                href: "https://help.twitch.tv/customer/en/portal/articles/2572060-twitch-prime-guide",
                                target: "_blank"
                            }, Object(s.d)("Learn more about your free sub", "NonSubbedTopPage"))
                        }, "NonSubbedTopPage") : Object(s.d)("Get monthly games and in-game loot, a monthly Twitch channel subscription, and loads more with Twitch Prime.", "NonSubbedTopPage");
                        i = a.createElement(d.Ya, {
                            margin: {
                                bottom: 2
                            }
                        }, a.createElement(d.Ya, {
                            margin: {
                                bottom: 1
                            }
                        }, a.createElement(d.W, {
                            type: d.Wb.H4,
                            bold: !0
                        }, Object(s.d)("Free Channel Sub with Twitch Prime", "NonSubbedTopPage"))), a.createElement(d.Ya, null, a.createElement(d.Ya, {
                            margin: {
                                bottom: 1
                            },
                            "data-test-selector": "prime-sub-upsell"
                        }, a.createElement(d.W, null, c)), a.createElement(ot.a, {
                            "data-a-target": "subscribe-with-prime-button",
                            handleSubMenuAction: e.handleSubMenuAction,
                            channelLogin: e.channelLogin
                        })))
                    }
                    if (!e.isNonStandardSub) {
                        var u = Object(s.d)("More Paid Subscription Options", "NonSubbedTopPage");
                        t = a.createElement(d.Ya, {
                            margin: {
                                right: 1
                            },
                            display: d.X.Inline
                        }, a.createElement(d.z, {
                            ariaLabel: u,
                            onClick: e.showSubOptions,
                            type: d.F.Hollow,
                            "data-test-selector": "subscribe-button__more-sub-options-button",
                            "data-a-target": "see-more-sub-options-button"
                        }, u));
                        var l = Object(s.d)("Gift a Subscription", "NonSubbedTopPage");
                        n = a.createElement(d.Ya, {
                            display: d.X.Inline
                        }, a.createElement(d.z, {
                            ariaLabel: l,
                            onClick: e.showGiftOptions,
                            type: d.F.Hollow,
                            "data-test-selector": "subscribe-button__gift"
                        }, l))
                    }
                    var p = e.subscriptionProducts[0],
                        m = (p.interval && p.interval.unit) === it.U.ONE_TIME;
                    return a.createElement(d.Ya, {
                        padding: 2
                    }, i, a.createElement(d.Ya, null, a.createElement(d.W, {
                        type: d.Wb.H4,
                        bold: !0
                    }, Object(s.d)("Paid Subscription", "NonSubbedTopPage")), a.createElement(rt.a, {
                        subscriptionProduct: e.subscriptionProducts[0],
                        isOneTime: m
                    }), a.createElement(d.Ya, {
                        display: d.X.Flex
                    }, a.createElement(d.Ya, {
                        margin: {
                            right: 1,
                            top: 1
                        }
                    }, a.createElement(f.a, {
                        isSubbedToTier: !1,
                        tierPrice: r,
                        "data-a-target": "tier1-subscribe-button",
                        handleSubAction: e.handleTopPageSubButtonClick,
                        productName: e.subscriptionProducts[0].name,
                        url: e.subscriptionProducts[0].url
                    })))), a.createElement(d.Ya, {
                        margin: {
                            right: 1,
                            top: 2
                        }
                    }, t, n))
                },
                ct = n("DqL7"),
                ut = function(e) {
                    return a.createElement(d.Ya, {
                        padding: 2
                    }, a.createElement(d.Ya, null, a.createElement(d.Ya, {
                        alignItems: d.f.Center,
                        display: d.X.Flex,
                        fullWidth: !0,
                        justifyContent: d.Xa.Between
                    }, a.createElement(d.W, {
                        type: d.Wb.H4,
                        bold: !0
                    }, e.header), a.createElement(d.z, {
                        type: d.F.Text,
                        "data-a-target": "subscribe-back-button",
                        "data-test-selector": "subscribe-button__back-button",
                        icon: d.ub.AngleLeft,
                        onClick: e.onBack
                    }, a.createElement(d.Ya, {
                        alignItems: d.f.Center,
                        display: d.X.InlineFlex
                    }, a.createElement(d.W, null, Object(s.d)("Back", "PaidSubOptions"))))), a.createElement(ct.a, {
                        canPrimeSubscribe: !1,
                        channelDisplayName: e.channelDisplayName,
                        handleSubMenuAction: e.handleSubMenuAction,
                        isSubscribed: e.isSubscribed,
                        subscriptionProducts: e.subscriptionProducts,
                        userHasPrime: !1
                    })))
                },
                lt = n("3Bft"),
                dt = n("D7An"),
                pt = n("4rCz"),
                mt = n("HGFl"),
                ft = n("0WFu"),
                bt = function(e) {
                    var t = Object(ft.b)(e.subbedTier);
                    return a.createElement(d.Ya, {
                        display: d.X.Flex
                    }, a.createElement(d.Ya, {
                        flexShrink: 0,
                        margin: {
                            y: "auto"
                        }
                    }, a.createElement(d.q, {
                        alt: Object(s.d)("Channel Profile Image", "CurrentSubscriptionChannelInfo"),
                        size: 40,
                        src: e.channelProfileImageURL
                    })), a.createElement(d.Ya, {
                        margin: {
                            x: 1
                        }
                    }, a.createElement(d.W, {
                        bold: !0,
                        "data-test-selector": et.ChannelDisplayName,
                        fontSize: d.Ca.Size5
                    }, e.channelDisplayName, !e.isPrimeSubscription && t && Object(s.d)(" - Tier {subscriptionTier}", {
                        subscriptionTier: t
                    }, "CurrentSubscriptionChannelInfo")), a.createElement(d.W, {
                        "data-test-selector": et.SubscriptionName
                    }, e.subProduct.displayName)))
                },
                gt = function(e) {
                    var t = "";
                    return t = e.isPrimeSubscription ? Object(s.d)("Your Prime Subscription", "CurrentSubscriptionHeader") : e.isGift ? Object(s.d)("Your Gift Subscription", "CurrentSubscriptionHeader") : Object(s.d)("Your Subscription", "CurrentSubscriptionHeader"), a.createElement(d.Ya, {
                        className: "current-subscription__heading-" + (e.isPrimeSubscription ? "prime" : "tier"),
                        display: d.X.Flex,
                        margin: {
                            bottom: 1
                        },
                        padding: {
                            bottom: .5
                        }
                    }, a.createElement(d.tb, {
                        asset: e.isPrimeSubscription ? d.ub.Crown : d.ub.Star,
                        height: 25
                    }), a.createElement(d.Qa, {
                        margin: {
                            left: .5
                        }
                    }, a.createElement(d.W, {
                        bold: !0,
                        "data-test-selector": et.Header,
                        type: d.Wb.H4
                    }, t)))
                },
                ht = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onContinueSub = function() {
                            var e = Object(b.b)(t.props.subProducts) || t.props.subProduct;
                            s.n.set(de.d, e.name), t.props.handleSubMenuAction({
                                action: I.a.BuyGiftToPaidUpgrade,
                                checkoutButtonTier: e.tier
                            })
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        var e = this.props,
                            t = Object(b.b)(e.subProducts),
                            n = Object(ft.b)(e.subbedTier);
                        return a.createElement(d.Fb, {
                            borderTop: !0,
                            padding: 2,
                            className: "current-subscription"
                        }, a.createElement(gt, {
                            isGift: !0
                        }), a.createElement(bt, {
                            channelDisplayName: e.channelDisplayName,
                            channelProfileImageURL: e.channelProfileImageURL,
                            subbedTier: e.subbedTier,
                            subProduct: e.subProduct
                        }), a.createElement(d.Ya, {
                            display: d.X.Flex,
                            margin: {
                                top: .5
                            }
                        }, a.createElement(d.W, {
                            "data-test-selector": et.GiftMessage,
                            type: d.Wb.Span
                        }, e.giftSender ? Object(s.d)("Gift from <x:strong>{giftSender}</x:strong>", {
                            giftSender: e.giftSender,
                            "x:strong": function(e) {
                                return a.createElement(d.W, {
                                    bold: !0,
                                    key: "CurrentPaidSubscriptionGiftSender",
                                    type: d.Wb.Span
                                }, e)
                            }
                        }, "CurrentGiftSubscription") : Object(s.d)("Gift Subscription", "CurrentGiftSubscription"), e.subEndDate && a.createElement(a.Fragment, null, " - ", Object(s.d)("Benefits expire on {subEndDate}", {
                            subEndDate: Object(s.c)(Object(mt.c)(e.subEndDate.toString()), {
                                day: "numeric",
                                month: "long"
                            })
                        }, "CurrentGiftSubscription")))), e.pendingSubscription ? e.subEndDate && a.createElement(d.Ya, {
                            display: d.X.Flex,
                            margin: {
                                top: .5
                            }
                        }, a.createElement(d.W, {
                            bold: !0,
                            className: "current-subscription__gift-message",
                            "data-test-selector": et.GiftUpgradeMessage
                        }, Object(s.d)("Your new Tier {subbedTier} Paid Subscription will begin on {subEndDate}", {
                            subbedTier: Object(ft.b)(e.pendingSubscription.tier) || "",
                            subEndDate: Object(s.c)(Object(mt.c)(e.subEndDate.toString()), {
                                month: "long",
                                day: "numeric"
                            })
                        }, "CurrentSubscription"))) : a.createElement(d.Ya, {
                            margin: {
                                top: 1
                            },
                            padding: {
                                y: .5
                            }
                        }, a.createElement(d.Ya, {
                            display: d.X.InlineBlock,
                            margin: {
                                right: 1
                            },
                            padding: {
                                right: .5
                            }
                        }, a.createElement(d.z, {
                            "data-test-selector": et.GiftPaidUpgradeButton,
                            icon: d.ub.Star,
                            onClick: this.onContinueSub,
                            purchase: t ? Object(b.a)(t) : e.subProduct.price
                        }, Object(s.d)("Continue Sub", "CurrentGiftSubscription"))), t && a.createElement(d.Ya, {
                            display: d.X.InlineBlock,
                            verticalAlign: d.gc.Middle
                        }, a.createElement(rt.a, {
                            isPaidUpgrade: !0,
                            subscriptionProduct: t
                        }))), a.createElement(d.Ya, {
                            margin: {
                                top: 1
                            }
                        }, !e.pendingSubscription && a.createElement(d.Ya, {
                            display: d.X.Inline,
                            margin: {
                                right: 1
                            }
                        }, a.createElement(d.z, {
                            "data-a-target": "upgrade-tier-button",
                            "data-test-selector": et.UpgradeCurrentTierButton,
                            onClick: e.onUpgradeTier,
                            type: d.F.Hollow
                        }, 3 === n ? Object(s.d)("Change Your Tier", "CurrentGiftSubscription") : Object(s.d)("Upgrade Your Tier", "CurrentGiftSubscription"))), a.createElement(d.z, {
                            "data-a-target": "gift-subscription-button",
                            "data-test-selector": et.GiftSubscriptionButton,
                            onClick: e.onGiftOptionsSelect,
                            type: d.F.Hollow
                        }, Object(s.d)("Gift a Subscription", "CurrentGiftSubscription"))))
                    }, t
                }(a.Component),
                vt = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onUpgradeSub = function() {
                            var e = t.props.upgradeSubProduct;
                            s.n.set(de.d, e.name), t.props.handleSubMenuAction({
                                action: I.a.BuyPaidUpgrade,
                                checkoutButtonTier: e.tier
                            })
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        var e = this.props,
                            t = Object(ft.b)(e.subbedTier);
                        return a.createElement(d.Fb, {
                            borderTop: !0,
                            padding: 2,
                            className: "current-subscription"
                        }, a.createElement(gt, null), a.createElement(bt, {
                            channelDisplayName: e.channelDisplayName,
                            channelProfileImageURL: e.channelProfileImageURL,
                            subbedTier: e.subbedTier,
                            subProduct: e.subProduct
                        }), e.subEndDate && a.createElement(d.Ya, {
                            display: d.X.Flex,
                            alignItems: d.f.Center,
                            margin: {
                                top: 1
                            }
                        }, a.createElement(d.Ya, {
                            margin: {
                                right: .5
                            }
                        }, a.createElement(d.tb, {
                            asset: d.ub.Timeout
                        })), Object(s.d)("Benefits end on {subEndDate} ({dayDiff})", {
                            subEndDate: Object(pt.c)(Object(mt.c)(e.subEndDate.toString()), {
                                day: "numeric",
                                month: "long"
                            }),
                            dayDiff: Object(pt.i)(e.subEndDate, {
                                units: "day",
                                style: "best fit"
                            })
                        }, "CurrentPaidSubscription")), t && !e.hideButtons && a.createElement(a.Fragment, null, e.upgradeSubProduct && a.createElement(d.Ya, {
                            margin: {
                                top: 1
                            },
                            padding: {
                                top: .5
                            }
                        }, a.createElement(d.z, {
                            "data-a-target": "upgrade-tier-button",
                            "data-test-selector": et.UpgradeCurrentTierButton,
                            icon: d.ub.Star,
                            onClick: this.onUpgradeSub,
                            purchase: e.upgradeSubProduct.price
                        }, Object(s.d)("Upgrade Sub", "CurrentPaidSubscription"))), a.createElement(d.Ya, {
                            margin: {
                                top: 1
                            },
                            padding: {
                                top: .5
                            }
                        }, a.createElement(d.Ya, {
                            display: d.X.Inline,
                            margin: {
                                right: 1
                            }
                        }, a.createElement(d.z, {
                            "data-a-target": "upgrade-tier-button",
                            "data-test-selector": et.UpgradeOtherTierButton,
                            onClick: e.onUpgradeTier,
                            type: d.F.Hollow
                        }, Object(s.d)("More Paid Subscription Options", "CurrentPaidSubscription"))))))
                    }, t
                }(a.Component),
                St = function(e) {
                    return a.createElement(d.Fb, {
                        borderTop: !0,
                        padding: 2,
                        className: "current-subscription"
                    }, a.createElement(gt, {
                        isPrimeSubscription: !0
                    }), a.createElement(bt, {
                        channelDisplayName: e.channelDisplayName,
                        channelProfileImageURL: e.channelProfileImageURL,
                        isPrimeSubscription: !0,
                        subbedTier: e.subbedTier,
                        subProduct: e.subProduct
                    }), e.subEndDate && a.createElement(d.Ya, {
                        display: d.X.Flex,
                        margin: {
                            top: .5
                        }
                    }, a.createElement(d.W, {
                        "data-test-selector": et.ExpiryMessage,
                        type: d.Wb.Span
                    }, Object(s.d)("Benefits expire on {subEndDate}", {
                        subEndDate: Object(s.c)(Object(mt.c)(e.subEndDate.toString()), {
                            day: "numeric",
                            month: "long"
                        })
                    }, "CurrentPrimeSubscription"))), a.createElement(d.Ya, {
                        margin: {
                            top: 1
                        }
                    }, a.createElement(ot.a, {
                        channelLogin: e.channelLogin,
                        handleSubMenuAction: e.handleSubMenuAction
                    })), a.createElement(d.Ya, {
                        margin: {
                            top: 1
                        },
                        padding: {
                            top: .5
                        }
                    }, a.createElement(d.Ya, {
                        display: d.X.Inline,
                        margin: {
                            right: 1
                        }
                    }, a.createElement(d.z, {
                        "data-a-target": "upgrade-tier-button",
                        "data-test-selector": et.UpgradeCurrentTierButton,
                        onClick: e.onUpgradeTier,
                        type: d.F.Hollow
                    }, Object(s.d)("Upgrade Your Tier", "CurrentPrimeSubscription")))))
                };
            n("psMd");
            ! function(e) {
                e.ChannelDisplayName = "ChannelDisplayName", e.ExpiryMessage = "ExpiryMessage", e.GiftMessage = "GiftMessage", e.GiftPaidUpgradeButton = "GiftPaidUpgradeButton", e.GiftUpgradeMessage = "GiftUpgradeMessage", e.GiftSubscriptionButton = "GiftSubscriptionButton", e.Header = "Header", e.SubscriptionName = "SubscriptionName", e.SubscriptionTier = "SubscriptionTier", e.UpgradeCurrentTierButton = "UpgradeCurrentTierButton", e.UpgradeOtherTierButton = "UpgradeOtherTierButton"
            }(et || (et = {}));
            var yt, kt = function(e) {
                    return lt.a.Prime === e.subbedTier ? a.createElement(St, {
                        channelDisplayName: e.channelDisplayName,
                        channelLogin: e.channelLogin,
                        channelProfileImageURL: e.channelProfileImageURL,
                        handleSubMenuAction: e.handleSubMenuAction,
                        onGiftOptionsSelect: e.onGiftOptionsSelect,
                        onUpgradeTier: e.onUpgradeTier,
                        subbedTier: e.subbedTier,
                        subEndDate: e.subEndDate,
                        subProduct: e.subProduct
                    }) : e.isGift ? a.createElement(ht, {
                        channelDisplayName: e.channelDisplayName,
                        channelProfileImageURL: e.channelProfileImageURL,
                        pendingSubscription: e.pendingSubscription,
                        giftSender: e.giftSender,
                        handleSubMenuAction: e.handleSubMenuAction,
                        onGiftOptionsSelect: e.onGiftOptionsSelect,
                        onUpgradeTier: e.onUpgradeTier,
                        subbedTier: e.subbedTier,
                        subEndDate: e.subEndDate,
                        subProduct: e.subProduct,
                        subProducts: e.subProducts
                    }) : a.createElement(vt, {
                        channelDisplayName: e.channelDisplayName,
                        channelProfileImageURL: e.channelProfileImageURL,
                        handleSubMenuAction: e.handleSubMenuAction,
                        hideButtons: e.hideButtons,
                        onGiftOptionsSelect: e.onGiftOptionsSelect,
                        onUpgradeTier: e.onUpgradeTier,
                        subbedTier: e.subbedTier,
                        subProduct: e.subProduct,
                        upgradeSubProduct: e.upgradeSubProduct
                    })
                },
                Et = function(e) {
                    var t = e.subbedTier !== lt.a.Tier3 ? Object(s.d)("Change Your Subscription", "SubOptions") : Object(s.d)("Your Subscription", "SubOptions");
                    return a.createElement(d.Ya, {
                        padding: 2
                    }, a.createElement(d.Ya, {
                        alignItems: d.f.Center,
                        display: d.X.Flex,
                        margin: {
                            bottom: 1
                        }
                    }, a.createElement(d.Ya, {
                        flexGrow: 1
                    }, a.createElement(d.W, {
                        bold: !0,
                        fontSize: d.Ca.Size4
                    }, t)), a.createElement(d.z, {
                        type: d.F.Text,
                        "data-a-target": "subscribe-back-button",
                        icon: d.ub.AngleLeft,
                        onClick: e.onBack
                    }, a.createElement(d.Ya, {
                        alignItems: d.f.Center,
                        display: d.X.InlineFlex
                    }, a.createElement(d.W, null, Object(s.d)("Back", "SubOptions"))))), a.createElement(ct.a, {
                        authToken: e.authToken,
                        canPrimeSubscribe: !0,
                        channelDisplayName: e.channelDisplayName,
                        handleSubMenuAction: e.handleSubMenuAction,
                        isSubscribed: !0,
                        onGiftSelect: e.onGiftSelect,
                        subbedTier: e.subbedTier,
                        subscriptionProducts: e.subscriptionProducts,
                        subLogin: e.channelLogin,
                        subbedEndDate: e.subbedEndDate,
                        userHasPrime: e.userHasPrime
                    }))
                },
                Ot = n("CDqf");
            ! function(e) {
                e.SingleMonthMessage = "SingleMonthMessage", e.SingleMonthButton = "SingleMonthButton"
            }(yt || (yt = {}));
            var Pt, Ct, Nt = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            isSingleMonth: !1
                        }, t.onContinueSub = function() {
                            pt.o.set(de.d, t.props.subProductName), t.state.isSingleMonth && pt.o.set(de.b, !0), t.props.handleSubMenuAction({
                                action: I.a.BuyDNRToResub,
                                checkoutButtonTier: t.props.subPrice,
                                isOneTime: t.state.isSingleMonth
                            })
                        }, t.onRadioToggle = function() {
                            t.setState(function(e) {
                                return {
                                    isSingleMonth: !e.isSingleMonth
                                }
                            })
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        if (!this.props.subEndDate) return null;
                        var e = "variant_b" === pt.q.experiments.getAssignment(dt.b.SubsReanimator),
                            t = new Date(this.props.subEndDate.getTime());
                        return t.setMonth(t.getMonth() + 1), a.createElement(d.Ya, {
                            margin: {
                                x: 2
                            }
                        }, a.createElement(d.Qa, {
                            margin: {
                                bottom: .5
                            }
                        }, a.createElement(d.W, {
                            bold: !0,
                            type: d.Wb.H4
                        }, Object(pt.d)("Continue Subscription", "ContinueSubscription"))), a.createElement(d.W, null, Object(pt.d)("Continue your sub to keep {emoteCount} emotes, your current badge, and progress to the next badge! <x:strong>You won't be charged until {renewalDate}.</x:strong>", {
                            emoteCount: this.props.emoteCount,
                            "x:strong": function(e) {
                                return a.createElement("strong", null, e)
                            },
                            renewalDate: Object(pt.c)(this.props.subEndDate, {
                                day: "numeric",
                                month: "short"
                            })
                        }, "ContinueSubscription")), e && a.createElement(d.Ya, {
                            display: d.X.Flex,
                            flexDirection: d.Aa.Row,
                            margin: {
                                y: 2
                            }
                        }, a.createElement(d.Ya, {
                            margin: {
                                right: 1
                            }
                        }, a.createElement(d.qb, {
                            name: "resub-single-month",
                            checked: !this.state.isSingleMonth,
                            onChange: this.onRadioToggle,
                            label: Object(pt.d)("Monthly Recurring", "ContinueSubscription")
                        })), a.createElement(d.qb, {
                            name: "resub-single-month",
                            checked: this.state.isSingleMonth,
                            onChange: this.onRadioToggle,
                            label: Object(pt.d)("Single Month", "ContinueSubscription")
                        })), a.createElement(d.Ya, {
                            margin: {
                                top: 1,
                                bottom: this.state.isSingleMonth ? 2 : 0
                            }
                        }, !this.state.isSingleMonth && a.createElement(d.z, {
                            onClick: this.onContinueSub,
                            icon: d.ub.Star,
                            purchase: this.props.subPrice
                        }, Object(pt.d)("Continue Sub", "ContinueSubscription")), this.state.isSingleMonth && a.createElement(d.z, {
                            onClick: this.onContinueSub,
                            icon: d.ub.Star,
                            purchase: this.props.subPrice,
                            "data-test-selector": yt.SingleMonthButton
                        }, Object(pt.d)("Continue Sub for 1 Month", "ContinueSubscription"))), this.state.isSingleMonth && a.createElement(d.W, {
                            "data-test-selector": yt.SingleMonthMessage
                        }, Object(pt.d)("Your sub will continue for one month from <x:strong>{renewalDate}</x:strong> with no automatic renewal. This offer does not apply to tier upgrades or gift subscriptions.", {
                            "x:strong": function(e) {
                                return a.createElement("strong", null, e)
                            },
                            renewalDate: Object(pt.c)(this.props.subEndDate, {
                                day: "numeric",
                                month: "short"
                            })
                        }, "ContinueSubscription")))
                    }, t
                }(a.Component),
                Tt = Object(o.compose)(Object(E.b)("ContinueSubscription", {
                    autoReportInteractive: !0
                }))(Nt),
                Dt = function(e) {
                    return a.createElement(a.Fragment, null, a.createElement(vt, {
                        channelDisplayName: e.channelDisplayName,
                        channelProfileImageURL: e.channelProfileImageURL,
                        handleSubMenuAction: e.handleSubMenuAction,
                        hideButtons: !0,
                        onGiftOptionsSelect: e.showGiftOptions,
                        onUpgradeTier: e.showSubOptions,
                        subbedTier: e.subbedTier,
                        subEndDate: e.subEndDate,
                        subProduct: e.currentSubProduct,
                        upgradeSubProduct: null
                    }), a.createElement(Tt, {
                        handleSubMenuAction: e.handleSubMenuAction,
                        subProductName: e.currentSubProduct.name,
                        subEndDate: e.subEndDate,
                        subPrice: e.currentSubProduct.price,
                        emoteCount: e.currentSubProduct.emotes.length
                    }), a.createElement(d.Ya, {
                        margin: 2
                    }, a.createElement(d.Ya, {
                        display: d.X.Inline,
                        margin: {
                            right: 1
                        }
                    }, a.createElement(d.z, {
                        "data-a-target": "upgrade-tier-button",
                        onClick: e.showSubOptions,
                        type: d.F.Hollow
                    }, Object(pt.d)("All Paid Tiers", "SubbedDnrdPage"))), a.createElement(d.z, {
                        onClick: e.showGiftOptions,
                        type: d.F.Hollow
                    }, Object(pt.d)("Gift a Subscription", "SubbedDnrdPage"))))
                };
            n("h0zH");
            ! function(e) {
                e[e.CurrentSubscription = 0] = "CurrentSubscription", e[e.GiftOptions = 1] = "GiftOptions", e[e.GiftSelect = 2] = "GiftSelect", e[e.MysteryGiftSelect = 3] = "MysteryGiftSelect", e[e.SubOptions = 4] = "SubOptions"
            }(Pt || (Pt = {})),
            function(e) {
                e.CurrentSubscription = "CurrentSubscription", e.GiftOptions = "GiftOptions", e.GiftRecipientSearch = "GiftRecipientSearch", e.MysteryGiftBundleSelection = "MysteryGiftBundleSelection", e.SubOptions = "SubOptions"
            }(Ct || (Ct = {}));
            var _t, xt = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            currentPage: Pt.CurrentSubscription
                        }, t.showCurrentSubscription = function() {
                            t.setState({
                                currentPage: Pt.CurrentSubscription
                            })
                        }, t.showGiftOptions = function() {
                            t.setState({
                                currentPage: Pt.GiftOptions
                            })
                        }, t.onGiftSelect = function() {
                            t.setState({
                                currentPage: Pt.GiftSelect
                            })
                        }, t.showMysteryGiftBundleSelect = function() {
                            t.setState({
                                currentPage: Pt.MysteryGiftSelect
                            })
                        }, t.showSubOptions = function() {
                            t.setState({
                                currentPage: Pt.SubOptions
                            })
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        var e = pt.q.experiments.getAssignment(dt.b.SubsReanimator),
                            t = this.props.isGift && !this.props.pendingSubscription && Object(b.f)(this.props.subscriptionProducts);
                        switch (this.state.currentPage) {
                            case Pt.CurrentSubscription:
                                return "control" !== e && this.props.isDNRd && !this.props.pendingSubscription && this.props.subEndDate && Object(ft.a)(this.props.subEndDate) <= 15 ? a.createElement(Dt, {
                                    channelDisplayName: this.props.channelDisplayName,
                                    channelProfileImageURL: this.props.channelProfileImageURL,
                                    handleSubMenuAction: this.props.handleSubMenuAction,
                                    showGiftOptions: this.showGiftOptions,
                                    showSubOptions: this.showSubOptions,
                                    subbedTier: this.props.subbedTier,
                                    subEndDate: this.props.subEndDate,
                                    currentSubProduct: this.getCurrentSubProduct()
                                }) : a.createElement(a.Fragment, null, t ? a.createElement(Ot.a, {
                                    alignCTA: "Right",
                                    roundedTop: !0
                                }) : a.createElement(le, {
                                    channelDisplayName: this.props.channelDisplayName,
                                    currentUserCanGift: this.props.currentUserCanGift,
                                    "data-test-selector": Ct.GiftOptions,
                                    giftingAnonymously: this.props.giftingAnonymously,
                                    isNonStandardSub: this.props.isNonStandardSub,
                                    isStaff: this.props.isStaff,
                                    onAnonymousGiftingSelect: this.props.onAnonymousGiftingSelect,
                                    onGiftSelect: this.onGiftSelect,
                                    onMysteryGiftSelect: this.showMysteryGiftBundleSelect
                                }), a.createElement(kt, {
                                    channelDisplayName: this.props.channelDisplayName,
                                    channelLogin: this.props.channelLogin,
                                    channelProfileImageURL: this.props.channelProfileImageURL,
                                    "data-test-selector": Ct.CurrentSubscription,
                                    pendingSubscription: this.props.pendingSubscription,
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
                            case Pt.GiftOptions:
                                return a.createElement(le, {
                                    channelDisplayName: this.props.channelDisplayName,
                                    currentUserCanGift: this.props.currentUserCanGift,
                                    "data-test-selector": Ct.GiftOptions,
                                    giftingAnonymously: this.props.giftingAnonymously,
                                    isNonStandardSub: this.props.isNonStandardSub,
                                    isStaff: this.props.isStaff,
                                    onAnonymousGiftingSelect: this.props.onAnonymousGiftingSelect,
                                    onBack: this.showCurrentSubscription,
                                    onGiftSelect: this.onGiftSelect,
                                    onMysteryGiftSelect: this.showMysteryGiftBundleSelect
                                });
                            case Pt.GiftSelect:
                                return a.createElement(U, {
                                    "data-test-selector": Ct.GiftRecipientSearch,
                                    giftingAnonymously: this.props.giftingAnonymously,
                                    handleSubMenuAction: this.props.handleSubMenuAction,
                                    isEsportChannel: this.props.isEsportChannel,
                                    isStaff: this.props.isStaff,
                                    key: "gift-recipient-search-page",
                                    onAnonymousGiftingSelect: this.props.onAnonymousGiftingSelect,
                                    onBack: t ? this.showGiftOptions : this.showCurrentSubscription,
                                    subscriptionProducts: this.props.subscriptionProducts
                                });
                            case Pt.MysteryGiftSelect:
                                return a.createElement(nt, {
                                    customMysteryGiftBundleLimit: 100,
                                    "data-test-selector": Ct.MysteryGiftBundleSelection,
                                    giftingAnonymously: this.props.giftingAnonymously,
                                    isStaff: this.props.isStaff,
                                    mysteryGiftBundles: [1, 5, 10, 20, 50, 100],
                                    onAnonymousGiftingSelect: this.props.onAnonymousGiftingSelect,
                                    onBack: t ? this.showGiftOptions : this.showCurrentSubscription,
                                    subscriptionProducts: this.props.subscriptionProducts,
                                    handleSubMenuAction: this.props.handleSubMenuAction
                                });
                            case Pt.SubOptions:
                                return a.createElement(Et, {
                                    authToken: this.props.authToken,
                                    channelDisplayName: this.props.channelDisplayName,
                                    channelLogin: this.props.channelLogin,
                                    "data-test-selector": Ct.SubOptions,
                                    handleSubMenuAction: this.props.handleSubMenuAction,
                                    isSubscribed: !0,
                                    onBack: this.showCurrentSubscription,
                                    subbedEndDate: this.props.subEndDate,
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
                            case lt.a.Tier1:
                                return this.props.subscriptionProducts[0];
                            case lt.a.Tier2:
                                return this.props.subscriptionProducts[1];
                            case lt.a.Tier3:
                                return this.props.subscriptionProducts[2];
                            default:
                                return this.props.subscriptionProducts[0]
                        }
                    }, t.prototype.getUpgradeSubProduct = function() {
                        switch (this.props.subbedTier) {
                            case lt.a.Tier1:
                                return this.props.subscriptionProducts[1];
                            case lt.a.Tier2:
                                return this.props.subscriptionProducts[2];
                            case lt.a.Tier3:
                            default:
                                return null
                        }
                    }, t
                }(a.Component),
                Gt = (n("77JB"), n("wEyv"));
            n.d(t, "TestSelectors", function() {
                    return _t
                }), n.d(t, "SubscribeBalloonComponent", function() {
                    return It
                }), n.d(t, "SubscribeBalloon", function() {
                    return Ft
                }),
                function(e) {
                    e.CampaignsSubscribeBalloon = "CampaignsSubscribeBalloon", e.GiftOptions = "GiftOptions", e.GiftRecipientSearch = "GiftRecipientSearch", e.MysteryGiftBundleSelection = "MysteryGiftBundleSelection", e.NonSubbedTopPage = "NonSubbedTopPage", e.PaidSubOptions = "PaidSubOptions", e.SubbedTopPage = "SubbedTopPage"
                }(_t || (_t = {}));
            var It = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            currentPage: t.props.isEsportChannel ? A.Esports : A.Top,
                            giftingAnonymously: !1,
                            previousPage: null
                        }, t.getLoadingContent = function() {
                            return s.k.debug("NOT rendering sub balloon; sub data not yet ready", {
                                state: t.state
                            }), a.createElement(d.Ya, {
                                alignItems: d.f.Center,
                                className: "channel-header__subscription-modal",
                                display: d.X.Flex,
                                justifyContent: d.Xa.Center
                            }, a.createElement(d.ab, {
                                fillContent: !0
                            }))
                        }, t.getErrorContent = function() {
                            return s.k.debug("NOT rendering sub balloon; error occurred", {
                                state: t.state
                            }), a.createElement(d.Ya, {
                                alignItems: d.f.Center,
                                className: "channel-header__subscription-modal",
                                display: d.X.Flex,
                                padding: {
                                    left: 4,
                                    right: 2,
                                    y: 2
                                }
                            }, a.createElement(c.a, {
                                message: Object(s.d)("Something has gone wrong. Please try again later.", "SubscribeBalloon")
                            }))
                        }, t.showTop = function() {
                            t.setState(function(e) {
                                return {
                                    currentPage: A.Top,
                                    previousPage: e.currentPage
                                }
                            })
                        }, t.showSubOptions = function() {
                            t.props.handleSubMenuAction({
                                action: I.a.ClickMoreSubOptions,
                                modalLevel: "second_page"
                            }), t.setState(function(e) {
                                return {
                                    currentPage: A.SubOptions,
                                    previousPage: e.currentPage
                                }
                            })
                        }, t.showGiftOptions = function() {
                            t.props.handleSubMenuAction({
                                action: I.a.ClickGiftSubOptions,
                                modalLevel: "second_page"
                            }), t.setState(function(e) {
                                return {
                                    currentPage: A.GiftOptions,
                                    previousPage: e.currentPage
                                }
                            })
                        }, t.showRecipientSelect = function() {
                            t.setState(function(e) {
                                return {
                                    currentPage: A.RecipientSelect,
                                    previousPage: e.currentPage
                                }
                            })
                        }, t.showMysteryGiftBundleSelect = function() {
                            t.setState(function(e) {
                                return {
                                    currentPage: A.MysteryGiftSelect,
                                    previousPage: e.currentPage
                                }
                            })
                        }, t.showEsports = function() {
                            t.setState(function(e) {
                                return {
                                    currentPage: A.Esports,
                                    previousPage: e.currentPage
                                }
                            })
                        }, t.goToPreviousPage = function() {
                            t.props.handleSubMenuAction({
                                action: I.a.ClickBack,
                                modalLevel: t.state.currentPage === A.SubOptions || t.state.currentPage === A.GiftOptions ? "top_page" : "second_page"
                            }), t.state.currentPage !== A.GiftOptions && t.state.currentPage !== A.SubOptions ? t.state.currentPage !== A.RecipientSelect && t.state.currentPage !== A.MysteryGiftSelect || t.showGiftOptions() : t.showTop()
                        }, t.onGiftSelect = function() {
                            var e = t.props.data.user;
                            if (!e || !e.subscriptionProducts) return null;
                            var n = e.subscriptionProducts[0];
                            if (!n) return null;
                            t.props.handleSubMenuAction({
                                action: I.a.GiftASub,
                                checkoutButtonTier: n.price,
                                isAnonymous: t.state.giftingAnonymously
                            }), t.showRecipientSelect()
                        }, t.canSendGift = function() {
                            var e = t.props.data.user;
                            return !(!e || !e.self) && e.self.canGiftInChannel
                        }, t.handleTopPageSubButtonClick = function() {
                            var e = t.props.data.user;
                            if (!e || !e.subscriptionProducts) return null;
                            var n = e.subscriptionProducts[0];
                            if (!n) return null;
                            t.props.handleSubMenuAction({
                                action: I.a.ClickCheckout,
                                checkoutButtonTier: n.price
                            })
                        }, t.onAnonymousGiftingSelect = function(e) {
                            t.props.handleSubMenuAction({
                                action: I.a.ClickAnonymousGiftCheckbox,
                                isAnonymous: e.target.checked
                            }), t.setState({
                                giftingAnonymously: e.target.checked
                            })
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive()
                    }, t.prototype.componentWillReceiveProps = function(e) {
                        e.channelLogin !== this.props.channelLogin && this.setState({
                            currentPage: this.props.isEsportChannel ? A.Esports : A.Top,
                            previousPage: null
                        })
                    }, t.prototype.render = function() {
                        var e = this.props.data,
                            t = e.user;
                        if (e.loading) return this.getLoadingContent();
                        if (e.error) return this.getErrorContent();
                        if (!t || !t.subscriptionProducts) return s.k.debug("NOT rendering sub balloon; sub data not yet ready", {
                            state: this.state
                        }), null;
                        s.k.debug("rendering sub balloon", {
                            state: this.state
                        });
                        var n = t.self,
                            i = t.subscriptionProducts.filter(function(e) {
                                return e
                            }),
                            r = !(!e.currentUser || !e.currentUser.hasPrime);
                        switch (this.state.currentPage) {
                            case A.Top:
                                var o = !!n && !!n.subscriptionBenefit && n.subscriptionBenefit.gift;
                                return this.props.isSubscribed ? n && n.subscriptionBenefit && a.createElement(xt, {
                                    authToken: this.props.authToken,
                                    channelDisplayName: t.displayName || "",
                                    channelLogin: this.props.channelLogin,
                                    channelProfileImageURL: t.profileImageURL,
                                    currentUserCanGift: this.canSendGift(),
                                    "data-test-selector": _t.SubbedTopPage,
                                    giftingAnonymously: this.state.giftingAnonymously,
                                    giftSender: o && o.isGift && o.gifter ? o.gifter.displayName : null,
                                    handleSubMenuAction: this.props.handleSubMenuAction,
                                    isDNRd: !n.subscriptionBenefit.renewsAt,
                                    isEsportChannel: this.props.isEsportChannel,
                                    isGift: !(!o || !o.isGift) && o.isGift,
                                    isNonStandardSub: this.props.isNonStandardSub,
                                    isStaff: this.props.isStaff,
                                    onAnonymousGiftingSelect: this.onAnonymousGiftingSelect,
                                    onGiftSelect: this.onGiftSelect,
                                    pendingSubscription: n.subscriptionBenefit.pendingSubscription,
                                    showGiftOptions: this.showGiftOptions,
                                    showSubOptions: this.showSubOptions,
                                    subbedTier: this.props.subbedTier,
                                    subscriptionProducts: i,
                                    subEndDate: n.subscriptionBenefit.endsAt ? new Date(n.subscriptionBenefit.endsAt) : void 0,
                                    userHasPrime: r
                                }) : a.createElement(st, {
                                    authToken: this.props.authToken,
                                    canPrimeSubscribe: !!n && n.canPrimeSubscribe,
                                    channelLogin: this.props.channelLogin,
                                    "data-test-selector": _t.NonSubbedTopPage,
                                    handleSubMenuAction: this.props.handleSubMenuAction,
                                    handleTopPageSubButtonClick: this.handleTopPageSubButtonClick,
                                    inPrimeRegion: this.props.inPrimeRegion,
                                    isNonStandardSub: this.props.isNonStandardSub,
                                    showGiftOptions: this.showGiftOptions,
                                    showSubOptions: this.showSubOptions,
                                    subscriptionProducts: i,
                                    userHasPrime: r
                                });
                            case A.SubOptions:
                                return a.createElement(ut, {
                                    channelDisplayName: t.displayName || "",
                                    channelLogin: this.props.channelLogin,
                                    "data-test-selector": _t.PaidSubOptions,
                                    handleSubMenuAction: this.props.handleSubMenuAction,
                                    header: Object(s.d)("All Paid Subscriptions", "SubscribeBalloon"),
                                    isSubscribed: this.props.isSubscribed,
                                    onBack: this.goToPreviousPage,
                                    subscriptionProducts: i
                                });
                            case A.GiftOptions:
                                return a.createElement(le, {
                                    channelDisplayName: t.displayName || "",
                                    currentUserCanGift: this.canSendGift(),
                                    "data-test-selector": _t.GiftOptions,
                                    giftingAnonymously: this.state.giftingAnonymously,
                                    isNonStandardSub: this.props.isNonStandardSub,
                                    isStaff: this.props.isStaff,
                                    onAnonymousGiftingSelect: this.onAnonymousGiftingSelect,
                                    onBack: this.goToPreviousPage,
                                    onGiftSelect: this.onGiftSelect,
                                    onMysteryGiftSelect: this.showMysteryGiftBundleSelect
                                });
                            case A.RecipientSelect:
                                return a.createElement(U, {
                                    "data-test-selector": _t.GiftRecipientSearch,
                                    giftingAnonymously: this.state.giftingAnonymously,
                                    handleSubMenuAction: this.props.handleSubMenuAction,
                                    isEsportChannel: this.props.isEsportChannel,
                                    isStaff: this.props.isStaff,
                                    onAnonymousGiftingSelect: this.onAnonymousGiftingSelect,
                                    onBack: this.state.previousPage === A.Esports ? this.showEsports : this.goToPreviousPage,
                                    subscriptionProducts: i
                                });
                            case A.MysteryGiftSelect:
                                return a.createElement(nt, {
                                    customMysteryGiftBundleLimit: 100,
                                    "data-test-selector": _t.MysteryGiftBundleSelection,
                                    giftingAnonymously: this.state.giftingAnonymously,
                                    isStaff: this.props.isStaff,
                                    handleSubMenuAction: this.props.handleSubMenuAction,
                                    mysteryGiftBundles: [1, 5, 10, 20, 50, 100],
                                    onAnonymousGiftingSelect: this.onAnonymousGiftingSelect,
                                    onBack: this.goToPreviousPage,
                                    subscriptionProducts: i
                                });
                            case A.Esports:
                                return a.createElement(W, {
                                    channelLogin: this.props.channelLogin,
                                    currentPage: this.state.currentPage,
                                    "data-test-selector": _t.CampaignsSubscribeBalloon,
                                    giftingAnonymously: this.state.giftingAnonymously,
                                    handleSubMenuAction: this.props.handleSubMenuAction,
                                    handleTopPageSubButtonClick: this.handleTopPageSubButtonClick,
                                    isStaff: this.props.isStaff,
                                    isSubscribed: this.props.isSubscribed,
                                    onAnonymousGiftingSelect: this.onAnonymousGiftingSelect,
                                    showRecipientSelect: this.showRecipientSelect,
                                    showTop: this.showTop,
                                    subscriptionProducts: i,
                                    userHasPrime: r
                                });
                            default:
                                return null
                        }
                    }, t
                }(a.Component),
                Ft = Object(o.compose)(Object(u.a)(Gt, {
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
                }), Object(E.b)("SubscribeBalloon"))(It)
        },
        fIIl: function(e, t, n) {
            e.exports = n.p + "assets/specific-viewer-4x-01e3327376e17ea6f48e.png"
        },
        gCfo: function(e, t, n) {},
        gQ2q: function(e, t, n) {},
        gzT4: function(e, t, n) {
            e.exports = n.p + "assets/bg-ghost-portrait-1f3051b296ccc174260a.svg"
        },
        h0zH: function(e, t, n) {},
        hKya: function(e, t, n) {},
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
                return o
            }), n.d(t, "e", function() {
                return c
            });
            var i = "sm_tw_tup_ntp_t_all",
                r = "sm_tw_thp_blue_t_all",
                a = "sm_w_tup_ntp_t_c",
                o = "sm_om_tpltp",
                s = n("/7QA").k.withCategory("PrimeUtilsLogger");

            function c(e, t) {
                return function(e, t, n) {
                    var i = "";
                    try {
                        i = btoa(n)
                    } catch (e) {
                        s.error(e, "Could not decode location pathname substring for redirect")
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
            e.exports = n.p + "assets/50-gifts-2x-ed3b0c433b91fe9a8617.png"
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

            function o(e) {
                return "/" + encodeURIComponent(e) + "/manager"
            }
            n.d(t, "c", function() {
                return i
            }), n.d(t, "a", function() {
                return r
            }), n.d(t, "b", function() {
                return a
            }), n.d(t, "d", function() {
                return o
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
            e.exports = n.p + "assets/5-gifts-2x-31c0ca11e3a878c9e296.png"
        },
        oj5W: function(e, t, n) {},
        psMd: function(e, t, n) {},
        rhZM: function(e, t, n) {
            e.exports = n.p + "assets/100-gifts-1x-270f0ea21595daea8c60.png"
        },
        sLmD: function(e, t, n) {
            "use strict";
            n.d(t, "b", function() {
                return o
            }), n.d(t, "a", function() {
                return c
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
                o = function(e, t) {
                    var n, i = c();
                    return n = t ? {
                        id: s(e) ? e.tag_id : e.objectID,
                        tagName: e.tag_name,
                        isAutomated: e.automated || !1,
                        localizedDescription: s(e) ? "" : e.description_localizations && e.description_localizations[i] || "",
                        localizedName: ""
                    } : {
                        id: s(e) ? e.tag_id : e.objectID,
                        isLanguageTag: e.tag_name.includes("auto___lang"),
                        localizedName: "",
                        tagName: e.tag_name
                    }, e.localizations && e.localizations[i] ? n.localizedName = e.localizations[i] : e.localizations && e.localizations[r] ? n.localizedName = e.localizations[r] : n.localizedName = n.tagName, n
                };

            function s(e) {
                return void 0 !== e.tag_id
            }

            function c() {
                return a[i.p.intl.getLanguageCode() || ""] || r
            }
        },
        u3Ph: function(e, t, n) {
            e.exports = n.p + "assets/20-gifts-1x-8beac3bea0eadc26d5c8.png"
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
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "token"
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
                                                        value: "pendingSubscription"
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
                                                        }, {
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "type"
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
                    end: 844
                }
            };
            n.loc.source = {
                body: "query ChannelPage_SubscribeBalloon_User($login: String! $productId: String!) {\nuser(login: $login) {\nid\nlogin\ndisplayName\nprofileImageURL(width: 50)\nsubscriptionProducts {\nid\nprice\npriceInfo {\ncurrency\nexponent\ntotal\ndescription\nprice\nisTaxInclusive\nid\ntax\n}\nurl\nemoteSetID\ndisplayName\nname\ntier\nhasAdFree\nemotes {\nid\ntoken\n}\ninterval {\nunit\n}\nself {\npromotion {\nnewPrice\noldPrice\ndiscountType\ndiscountValue\n}\npaidUpgradePromotion {\nnewPrice\noldPrice\ndiscountType\ndiscountValue\n}\n}\ngiftPromotion {\nnewPrice\noldPrice\ndiscountType\ndiscountValue\n}\n}\nself {\ncanPrimeSubscribe\ncanGiftInChannel(product: $productId)\nsubscriptionBenefit {\nid\npurchasedWithPrime\ntier\nplatform\nrenewsAt\nendsAt\npendingSubscription {\nprice\ntier\nstartsAt\ntype\n}\ngift {\nisGift\ngifter {\nid\ndisplayName\n}\n}\n}\n}\n}\ncurrentUser {\nid\nlogin\nhasPrime\n}\nrequestInfo {\ncountryCode\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        wK7Q: function(e, t, n) {
            e.exports = n.p + "assets/10-gifts-1x-3a783f70e0f1fd478200.png"
        },
        wM1o: function(e, t, n) {
            e.exports = n.p + "assets/50-gifts-4x-14e4d872909d78129de8.png"
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
                o = n("O4UZ"),
                s = n("Ue10"),
                c = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        var e = Object(o.g)(this.props.errorType);
                        return r.createElement(s.Fb, {
                            background: s.r.Alt2,
                            display: s.X.Flex,
                            justifyContent: s.Xa.Center,
                            padding: {
                                y: 1
                            },
                            margin: {
                                bottom: 1
                            },
                            textAlign: s.Sb.Center,
                            "data-test-selector": this.props.testTarget,
                            "data-a-target": this.props.testTarget
                        }, r.createElement(s.W, {
                            type: s.Wb.H4,
                            align: s.gc.Middle
                        }, r.createElement(s.Fb, {
                            padding: 1,
                            display: s.X.InlineFlex,
                            flexGrow: 1,
                            flexWrap: s.Ba.NoWrap,
                            alignItems: s.f.Center,
                            textAlign: s.Sb.Left,
                            fontSize: this.props.fontSize ? this.props.fontSize : s.Ca.Size5,
                            "data-a-target": "prime-error-glitch"
                        }, r.createElement(s.Ya, {
                            margin: {
                                right: 1
                            },
                            display: s.X.InlineFlex,
                            flexGrow: 1,
                            flexWrap: s.Ba.NoWrap,
                            alignItems: s.f.Center
                        }, r.createElement(s.tb, {
                            asset: s.ub.DeadGlitch,
                            type: s.vb.Alert,
                            width: 20,
                            height: 20
                        })), r.createElement(s.W, {
                            type: s.Wb.P
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