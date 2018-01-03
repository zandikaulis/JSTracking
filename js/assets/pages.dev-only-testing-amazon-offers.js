webpackJsonp([52], {
    "6Vx1": function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = n("TToO"),
            i = n("U7vG"),
            o = n("HW6M"),
            r = n("6sO2"),
            l = n("7vx8"),
            c = n("jF7o"),
            s = n("Odds"),
            d = n("CB9r"),
            m = (n("c8iB"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.renderButtonText = function(e) {
                        return e ? Object(r.d)("Edit", "AmazonRetailAssociatesAccountLinking") : Object(r.d)("Get Started", "AmazonRetailAssociatesAccountLinking")
                    }, t.renderDescriptionText = function(e) {
                        return e ? Object(r.d)("Link to {storeID}", {
                            storeID: i.createElement(s._22, {
                                type: s._27.Span,
                                bold: !0
                            }, e)
                        }, "AmazonRetailAssociatesAccountLinking") : Object(r.d)("Create and link an Amazon Associates account to your Twitch account. Only one Amazon account may be linked at any one time.", "AmazonRetailAssociatesAccountLinking")
                    }, t.launchLinkAccount = function() {
                        t.launchPopup("https://affiliate-program.amazon.com/home/account")
                    }, t.launchAssociatesAccount = function(e) {
                        e.preventDefault();
                        t.launchPopup("https://affiliate-program.amazon.com/home/account")
                    }, t.launchAssociatesReporting = function(e) {
                        e.preventDefault();
                        t.launchPopup("https://affiliate-program.amazon.com/home/reports")
                    }, t.launchPopup = function(e) {
                        var n = window.open(e, "Twitch", "width=1024,height=600,scrollbars=yes");
                        n && (n.focus(), Object(c.a)(n, function() {
                            t.props.data.refetch && t.props.data.refetch()
                        }))
                    }, t
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    var e = this.props.data.user && this.props.data.user.amazon.associatesStore && this.props.data.user.amazon.associatesStore.storeID,
                        t = this.props.data.user && this.props.data.user.amazon.associatesStore && this.props.data.user.amazon.associatesStore.isPayoutEnabled;
                    return i.createElement(s.U, null, i.createElement(s._18, {
                        background: s.m.Alt2,
                        borderBottom: !0,
                        display: s.H.Flex,
                        flexDirection: s.J.Row,
                        flexWrap: s.K.NoWrap
                    }, i.createElement(s.U, {
                        padding: 2,
                        flexShrink: 0,
                        flexGrow: 0,
                        className: "amazon-associates-account-linking__label"
                    }, i.createElement(s._22, {
                        bold: !0
                    }, Object(r.d)("Link an Amazon Associates Account", "AmazonRetailAssociatesAccountLinking"))), i.createElement(s.U, {
                        display: s.H.Flex,
                        flexDirection: s.J.Column,
                        padding: 2
                    }, i.createElement(s._22, {
                        "data-test-selector": "amazon-associates-account-linking-setup-text"
                    }, this.renderDescriptionText(e || null)), i.createElement(s.U, {
                        padding: {
                            top: .5
                        }
                    }, i.createElement(s.u, {
                        "data-test-selector": "amazon-associates-account-linking-setup-button",
                        targetBlank: !0,
                        onClick: this.launchLinkAccount
                    }, this.renderButtonText(e || null))))), i.createElement(s._18, {
                        display: s.H.Flex,
                        flexDirection: s.J.Row,
                        flexWrap: s.K.NoWrap,
                        "data-test-selector": "amazon-associates-account-linking-tax-info",
                        className: o({
                            "amazon-associates-account-linking__tax-info--error": !(!e || t)
                        })
                    }, i.createElement(s.U, {
                        padding: {
                            top: 2,
                            right: 2,
                            bottom: 2,
                            left: e && !t ? 1 : 2
                        },
                        flexShrink: 0,
                        flexGrow: 0,
                        className: "amazon-associates-account-linking__label"
                    }, i.createElement(s._22, {
                        bold: !0
                    }, Object(r.d)("Receive payments from Amazon.com", "AmazonRetailAssociatesAccountLinking"))), i.createElement(s.U, {
                        display: s.H.Flex,
                        flexDirection: s.J.Column,
                        padding: 2
                    }, i.createElement(s._22, null, Object(r.d)("To receive payments, please provide your <x:tax>Tax Information</x:tax> and your <x:payment>Payment Information</x:payment>. Note, changes made to your Tax Information must be made by the primary account holder and any changes after the 15th will go into effect the following month. Please ignore this message if you have already submitted your information.", {
                        "x:tax": function(e) {
                            return i.createElement(s._22, {
                                key: "tax",
                                type: s._27.Span,
                                bold: !0,
                                decoration: s._25.Underline
                            }, e)
                        },
                        "x:payment": function(e) {
                            return i.createElement(s._22, {
                                key: "payment",
                                type: s._27.Span,
                                bold: !0,
                                decoration: s._25.Underline
                            }, e)
                        }
                    }, "AmazonRetailAssociatesAccountLinking")), i.createElement(s.U, {
                        padding: {
                            top: 1
                        }
                    }, i.createElement(s.P, {
                        padding: {
                            right: 2
                        }
                    }, i.createElement("a", {
                        href: "#",
                        onClick: this.launchAssociatesAccount
                    }, Object(r.d)("Add/update tax information", "AmazonRetailAssociatesAccountLinking"))), i.createElement(s.P, {
                        padding: {
                            right: 2
                        }
                    }, i.createElement("a", {
                        href: "#",
                        onClick: this.launchAssociatesAccount
                    }, Object(r.d)("Add/update payment information", "AmazonRetailAssociatesAccountLinking"))), i.createElement("a", {
                        href: "#",
                        onClick: this.launchAssociatesReporting
                    }, Object(r.d)("Reporting", "AmazonRetailAssociatesAccountLinking"))))))
                }, t = a.__decorate([Object(l.a)(d, {
                    options: function(e) {
                        return {
                            variables: {
                                login: e.channelName
                            }
                        }
                    }
                })], t)
            }(i.Component)),
            u = n("RH2O"),
            p = n("2KeS"),
            h = n("V5M+"),
            f = n("ivNp"),
            g = (n("Kv1R"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        amendmentAccepted: !1,
                        isError: !1
                    }, t.onAmendmentClick = function() {
                        return t.props.showAmendmentModal({
                            onClose: t.onCloseModal,
                            amendmentAccepted: t.state.amendmentAccepted
                        }), !1
                    }, t.onCloseModal = function(e) {
                        return e
                    }, t
                }
                return a.__extends(t, e), t.prototype.componentWillReceiveProps = function(e) {
                    var t = e.data.user && e.data.user.twitch && e.data.user.twitch.commerceAmendment[0].isSigned || !1;
                    t !== this.state.amendmentAccepted && this.setState({
                        amendmentAccepted: t
                    })
                }, t.prototype.render = function() {
                    return this.props.data.loading || this.props.data.error ? null : i.createElement(s._18, {
                        display: s.H.Flex,
                        flexDirection: s.J.Row,
                        borderTop: !0,
                        borderBottom: !0,
                        background: s.m.Alt2
                    }, i.createElement(s.U, {
                        padding: 2
                    }, i.createElement(s._22, {
                        bold: !0
                    }, Object(r.d)("Opt in to earn revenue", "AmazonRetailOffersAmendnment"))), i.createElement(s.U, {
                        padding: 2
                    }, i.createElement("div", {
                        onClick: this.onAmendmentClick,
                        "data-test-selector": "amazon-retail-offers-amendment-checkbox-wrapper",
                        className: "amazon-retail-offers__amendment"
                    }, i.createElement(s.E, {
                        "data-test-selector": "amazon-retail-offers-amendment-checkbox",
                        checked: this.state.amendmentAccepted,
                        disabled: !0,
                        id: "amazon-retail-offers-amendment",
                        label: Object(r.d)("Opt in to earn revenue from sales on Amazon.com", "AmazonRetailOffersAmendnment")
                    })), i.createElement(s._22, null, Object(r.d)("Please read and agree to the new Commerce Addendum to become eligible for this program.", "AmazonRetailOffersAmendnment"))))
                }, t = a.__decorate([Object(l.a)(f, {
                    options: function(e) {
                        return {
                            variables: {
                                login: e.channelName,
                                amendmentType: "GAME_COMMERCE_V2"
                            }
                        }
                    }
                })], t)
            }(i.Component)),
            y = "amendment-modal-accept-button",
            A = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        hasUserScrolled: !1
                    }, t.onUserScroll = function() {
                        t.setState({
                            hasUserScrolled: !0
                        })
                    }, t.renderAcceptButton = function(e) {
                        return e ? null : i.createElement(s.U, {
                            margin: {
                                left: .5,
                                right: .5
                            }
                        }, i.createElement(s.u, {
                            "data-test-selector": y,
                            type: s.z.Text,
                            onClick: t.onAccept,
                            disabled: !t.state.hasUserScrolled
                        }, Object(r.d)("Accept", "AmazonRetailOffersAmendmentModal")))
                    }, t.onClose = function() {
                        t.props.onClose(!1)
                    }, t.onAccept = function() {
                        t.props.onClose(!0)
                    }, t
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    return i.createElement(s.U, {
                        padding: 3
                    }, i.createElement(s._18, {
                        padding: {
                            bottom: 3
                        },
                        borderBottom: !0,
                        textAlign: s._23.Center
                    }, i.createElement(s._22, {
                        type: s._27.H4
                    }, Object(r.d)("Addendum to Content Partner Agreement – Commerce Addendum", "AmazonRetailOffersAmendmentModal"))), i.createElement(s.U, {
                        padding: {
                            top: 2,
                            bottom: 2
                        },
                        textAlign: s._23.Center
                    }, i.createElement(s._22, {
                        fontSize: s.L.Size5
                    }, Object(r.d)('Please read and agree to the following addendum ("Addendum") to your Content License and Base Agreement (or Content License Agreement, as applicable) (the "Agreement") with Twitch in order to be eligible to earn revenue for certain purchases by a Twitch user that is viewing your Twitch channel.', "AmazonRetailOffersAmendmentModal"))), i.createElement(s._18, {
                        borderTop: !0,
                        borderRight: !0,
                        borderBottom: !0,
                        borderLeft: !0,
                        padding: 2
                    }, i.createElement("div", {
                        onScroll: this.onUserScroll,
                        className: "amendment-modal__amendment-text",
                        "data-test-selector": "amendment-modal-text-container"
                    }, i.createElement(s._22, null, 'Please read and agree to the following addendum ("', i.createElement(s._22, {
                        type: s._27.Span,
                        bold: !0
                    }, "Addendum"), '") to your Content License and Base Agreement (or Content License Agreement, as applicable) (the "', i.createElement(s._22, {
                        type: s._27.Span,
                        bold: !0
                    }, "Agreement"), '") with Twitch in order to be eligible to earn revenue for certain purchases by a Twitch user that is viewing your Twitch channel. Twitch, in its sole discretion, may make specially-formatted links appear on your Twitch channel page (a "', i.createElement(s._22, {
                        type: s._27.Span,
                        bold: !0
                    }, "Special Link"), '"), which would direct Twitch users to the purchase of a Product (as defined below). For every such purchase of a Product that is a Qualifying Purchase (as defined below), you will receive a fee (a "', i.createElement(s._22, {
                        type: s._27.Span,
                        bold: !0
                    }, "Product Purchase Fee"), '") that will be calculated as a certain percentage as published by Twitch in the Supplemental Fees Statement, currently available at ', i.createElement("a", {
                        href: "http://www.twitch.tv/legal/p/supplemental-fees",
                        target: "_blank",
                        rel: "noopener noreferrer"
                    }, "http://www.twitch.tv/legal/p/supplemental-fees"), ' or a successor website (as may be updated from time to time) (the "', i.createElement(s._22, {
                        type: s._27.Span,
                        bold: !0
                    }, "Supplemental Fees Statement"), '"), of (a) the purchase price of such Product, as such price was listed by Twitch at the time of the Qualifying Purchase and in the currency in which the Qualifying Purchase was made, less (b) any special discounts or promotions, taxes, service charges, rebates, payment processing fees (e.g. credit card processing fees) and any other related transaction and processing expenses. Calculation of and eligibility to receive Product Purchase Fees will be further subject to any limitations or clarifications set forth in the Supplemental Fees Statement.'), i.createElement(s._22, null, '"', i.createElement(s._22, {
                        type: s._27.Span,
                        bold: !0
                    }, "Product"), '" means a product that is set forth in the Supplemental Fees Statement and is associated with a program in which Twitch places Special Links.'), i.createElement(s._22, null, 'A "', i.createElement(s._22, {
                        type: s._27.Span,
                        bold: !0
                    }, "Qualifying Purchase"), '" of a Product occurs when: (a) a user of Twitch clicks through a Special Link on your Twitch channel page; (b) such user purchases a Product(s) sold by Twitch Interactive, Inc., or a related entity that is designated in the Supplemental Fees Statement as a relevant seller of record; and (c) Twitch receives a fully settled payment for the purchase by such user.'), i.createElement(s._22, null, "If we pay you a Product Purchase Fee and later issue a refund or credit to the Twitch user for such Qualifying Purchase (or receive a chargeback related to the Qualifying Purchase), we may offset the amount of the Product Purchase Fee we previously paid you for such Qualifying Purchase against future Product Purchase Fees or other amounts that would otherwise be payable to you under the Agreement or this Addendum, or require you to remit that amount to us."), i.createElement(s._22, null, "This Addendum is governed by and subject to the Agreement.  Capitalized terms used but not defined in this Addendum will have the meanings defined in the Agreement.  Except as amended by this Addendum, all other terms and conditions of the Agreement remain in full force and effect."))), i.createElement(s.U, {
                        padding: {
                            top: 2,
                            bottom: 2
                        }
                    }, i.createElement(s._22, {
                        fontSize: s.L.Size4
                    }, Object(r.d)("Summary", "AmazonRetailOffersAmendmentModal")), i.createElement(s._22, null, Object(r.d)("By accepting below, you may earn revenue for certain purchases by your viewers as described above.", "AmazonRetailOffersAmendmentModal"))), i.createElement(s._18, {
                        borderTop: !0,
                        display: s.H.Flex,
                        flexDirection: s.J.Row,
                        alignItems: s.c.Center,
                        justifyContent: s.T.Center,
                        padding: {
                            top: 2,
                            bottom: 1
                        }
                    }, i.createElement(s.U, {
                        margin: {
                            left: .5,
                            right: .5
                        }
                    }, i.createElement(s.u, {
                        "data-test-selector": "amendment-modal-cancel-button",
                        type: s.z.Text,
                        onClick: this.onClose
                    }, Object(r.d)("Cancel", "AmazonRetailOffersAmendmentModal"))), this.renderAcceptButton(this.props.amendmentAccepted)))
                }, t
            }(i.Component),
            b = (n("mJW4"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.amendmentAccepted = !1, t.handleClose = function(e) {
                        t.amendmentAccepted = e, t.props.closeModal()
                    }, t
                }
                return a.__extends(t, e), t.prototype.componentWillUnmount = function() {
                    this.props.onClose && this.props.onClose(this.amendmentAccepted)
                }, t.prototype.render = function() {
                    return i.createElement(s._18, {
                        className: "amendment-modal__container",
                        background: s.m.Base
                    }, i.createElement(A, {
                        "data-test-selector": "amendment-modal-selector",
                        onClose: this.handleClose,
                        amendmentAccepted: this.props.amendmentAccepted
                    }))
                }, t
            }(i.Component)),
            k = Object(u.a)(null, function(e) {
                return Object(p.bindActionCreators)({
                    closeModal: h.c
                }, e)
            })(b),
            v = Object(u.a)(null, function(e) {
                return Object(p.bindActionCreators)({
                    showAmendmentModal: function(e) {
                        var t = a.__rest(e, []);
                        return Object(h.d)(k, t)
                    }
                }, e)
            })(g),
            _ = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    return i.createElement(s.U, {
                        padding: 3
                    }, i.createElement(s._22, {
                        type: s._27.H2
                    }, "Amazon Retail Offers Amendment v2"), i.createElement(s.U, {
                        margin: {
                            y: 2
                        }
                    }, i.createElement(v, {
                        channelName: this.props.match.params.channelName
                    }), i.createElement(m, {
                        channelName: this.props.match.params.channelName
                    })))
                }, t
            }(i.Component),
            S = _;
        n.d(t, "DevOnlyTestingAmazonOffersComponent", function() {
            return _
        }), n.d(t, "DevOnlyTestingAmazonOffersPage", function() {
            return S
        })
    },
    CB9r: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "AmazonAssociates_LinkedStore"
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
                    },
                    defaultValue: null
                }],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        alias: null,
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
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "id"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "amazon"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "associatesStore"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "isPayoutEnabled"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: null
                                            }, {
                                                kind: "Field",
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "storeID"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: null
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
                end: 137
            }
        };
        n.loc.source = {
            body: "query AmazonAssociates_LinkedStore($login: String!) {\nuser(login: $login) {\nid\namazon {\nassociatesStore {\nisPayoutEnabled\nstoreID\n}\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    Kv1R: function(e, t) {},
    c8iB: function(e, t) {},
    ivNp: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "AmazonRetailOffers_CommerceAmendment"
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
                    },
                    defaultValue: null
                }, {
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "amendmentType"
                        }
                    },
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "CommerceAmendmentType"
                            }
                        }
                    },
                    defaultValue: null
                }],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        alias: null,
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
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "id"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "twitch"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "commerceAmendment"
                                        },
                                        arguments: [{
                                            kind: "Argument",
                                            name: {
                                                kind: "Name",
                                                value: "types"
                                            },
                                            value: {
                                                kind: "ListValue",
                                                values: [{
                                                    kind: "Variable",
                                                    name: {
                                                        kind: "Name",
                                                        value: "amendmentType"
                                                    }
                                                }]
                                            }
                                        }],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "id"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: null
                                            }, {
                                                kind: "Field",
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "isSigned"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: null
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
                end: 199
            }
        };
        n.loc.source = {
            body: "query AmazonRetailOffers_CommerceAmendment($login: String! $amendmentType: CommerceAmendmentType!) {\nuser(login: $login) {\nid\ntwitch {\ncommerceAmendment(types: [$amendmentType]) {\nid\nisSigned\n}\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    jF7o: function(e, t, n) {
        "use strict";
        t.a = function(e, t) {
            if (e) var n = setInterval(function() {
                var a = !1,
                    i = !1;
                try {
                    a = e.closed, i = !!e.success
                } catch (e) {}
                if (a || i) {
                    t(i);
                    try {
                        e.close()
                    } catch (e) {}
                    clearInterval(n)
                }
            }, 500);
            else a.i.warn("[onPopupClose] Attempted to observe a window that failed to open.")
        };
        var a = n("6sO2")
    },
    mJW4: function(e, t) {}
});
//# sourceMappingURL=pages.dev-only-testing-amazon-offers-8684682378a651b7d528e918b4b238a7.js.map