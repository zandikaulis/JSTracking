webpackJsonp([53], {
    "6Vx1": function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = n("TToO"),
            r = n("U7vG"),
            i = n("RH2O"),
            o = n("2KeS"),
            l = n("V5M+"),
            c = n("6sO2"),
            d = n("7vx8"),
            s = n("Odds"),
            m = n("ivNp"),
            u = (n("Kv1R"), function(e) {
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
                    return this.props.data.loading || this.props.data.error ? null : r.createElement(s._18, {
                        display: s.H.Flex,
                        flexDirection: s.J.Row,
                        borderTop: !0,
                        borderBottom: !0,
                        background: s.m.Alt2
                    }, r.createElement(s.U, {
                        padding: 2
                    }, r.createElement(s._22, {
                        bold: !0
                    }, Object(c.d)("Opt in to earn revenue", "AmazonRetailOffersAmendnment"))), r.createElement(s.U, {
                        padding: 2
                    }, r.createElement("div", {
                        onClick: this.onAmendmentClick,
                        "data-test-selector": "amazon-retail-offers-amendment-checkbox-wrapper",
                        className: "amazon-retail-offers__amendment"
                    }, r.createElement(s.E, {
                        "data-test-selector": "amazon-retail-offers-amendment-checkbox",
                        checked: this.state.amendmentAccepted,
                        disabled: !0,
                        id: "amazon-retail-offers-amendment",
                        label: Object(c.d)("Opt in to earn revenue from sales on Amazon.com", "AmazonRetailOffersAmendnment")
                    })), r.createElement(s._22, null, Object(c.d)("Please read and agree to the new Commerce Addendum to become eligible for this program.", "AmazonRetailOffersAmendnment"))))
                }, t = a.__decorate([Object(d.a)(m, {
                    options: function(e) {
                        return {
                            variables: {
                                login: e.channelName,
                                amendmentType: "GAME_COMMERCE_V2"
                            }
                        }
                    }
                })], t)
            }(r.Component)),
            p = "amendment-modal-accept-button",
            h = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        hasUserScrolled: !1
                    }, t.onUserScroll = function() {
                        t.setState({
                            hasUserScrolled: !0
                        })
                    }, t.renderAcceptButton = function(e) {
                        return e ? null : r.createElement(s.U, {
                            margin: {
                                left: .5,
                                right: .5
                            }
                        }, r.createElement(s.u, {
                            "data-test-selector": p,
                            type: s.z.Text,
                            onClick: t.onAccept,
                            disabled: !t.state.hasUserScrolled
                        }, Object(c.d)("Accept", "AmazonRetailOffersAmendmentModal")))
                    }, t.onClose = function() {
                        t.props.onClose(!1)
                    }, t.onAccept = function() {
                        t.props.onClose(!0)
                    }, t
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    return r.createElement(s.U, {
                        padding: 3
                    }, r.createElement(s._18, {
                        padding: {
                            bottom: 3
                        },
                        borderBottom: !0,
                        textAlign: s._23.Center
                    }, r.createElement(s._22, {
                        type: s._27.H4
                    }, Object(c.d)("Addendum to Content Partner Agreement – Commerce Addendum", "AmazonRetailOffersAmendmentModal"))), r.createElement(s.U, {
                        padding: {
                            top: 2,
                            bottom: 2
                        },
                        textAlign: s._23.Center
                    }, r.createElement(s._22, {
                        fontSize: s.L.Size5
                    }, Object(c.d)('Please read and agree to the following addendum ("Addendum") to your Content License and Base Agreement (or Content License Agreement, as applicable) (the "Agreement") with Twitch in order to be eligible to earn revenue for certain purchases by a Twitch user that is viewing your Twitch channel.', "AmazonRetailOffersAmendmentModal"))), r.createElement(s._18, {
                        borderTop: !0,
                        borderRight: !0,
                        borderBottom: !0,
                        borderLeft: !0,
                        padding: 2
                    }, r.createElement("div", {
                        onScroll: this.onUserScroll,
                        className: "amendment-modal__amendment-text",
                        "data-test-selector": "amendment-modal-text-container"
                    }, r.createElement(s._22, null, 'Please read and agree to the following addendum ("', r.createElement(s._22, {
                        type: s._27.Span,
                        bold: !0
                    }, "Addendum"), '") to your Content License and Base Agreement (or Content License Agreement, as applicable) (the "', r.createElement(s._22, {
                        type: s._27.Span,
                        bold: !0
                    }, "Agreement"), '") with Twitch in order to be eligible to earn revenue for certain purchases by a Twitch user that is viewing your Twitch channel. Twitch, in its sole discretion, may make specially-formatted links appear on your Twitch channel page (a "', r.createElement(s._22, {
                        type: s._27.Span,
                        bold: !0
                    }, "Special Link"), '"), which would direct Twitch users to the purchase of a Product (as defined below). For every such purchase of a Product that is a Qualifying Purchase (as defined below), you will receive a fee (a "', r.createElement(s._22, {
                        type: s._27.Span,
                        bold: !0
                    }, "Product Purchase Fee"), '") that will be calculated as a certain percentage as published by Twitch in the Supplemental Fees Statement, currently available at ', r.createElement("a", {
                        href: "http://www.twitch.tv/legal/p/supplemental-fees",
                        target: "_blank",
                        rel: "noopener noreferrer"
                    }, "http://www.twitch.tv/legal/p/supplemental-fees"), ' or a successor website (as may be updated from time to time) (the "', r.createElement(s._22, {
                        type: s._27.Span,
                        bold: !0
                    }, "Supplemental Fees Statement"), '"), of (a) the purchase price of such Product, as such price was listed by Twitch at the time of the Qualifying Purchase and in the currency in which the Qualifying Purchase was made, less (b) any special discounts or promotions, taxes, service charges, rebates, payment processing fees (e.g. credit card processing fees) and any other related transaction and processing expenses. Calculation of and eligibility to receive Product Purchase Fees will be further subject to any limitations or clarifications set forth in the Supplemental Fees Statement.'), r.createElement(s._22, null, '"', r.createElement(s._22, {
                        type: s._27.Span,
                        bold: !0
                    }, "Product"), '" means a product that is set forth in the Supplemental Fees Statement and is associated with a program in which Twitch places Special Links.'), r.createElement(s._22, null, 'A "', r.createElement(s._22, {
                        type: s._27.Span,
                        bold: !0
                    }, "Qualifying Purchase"), '" of a Product occurs when: (a) a user of Twitch clicks through a Special Link on your Twitch channel page; (b) such user purchases a Product(s) sold by Twitch Interactive, Inc., or a related entity that is designated in the Supplemental Fees Statement as a relevant seller of record; and (c) Twitch receives a fully settled payment for the purchase by such user.'), r.createElement(s._22, null, "If we pay you a Product Purchase Fee and later issue a refund or credit to the Twitch user for such Qualifying Purchase (or receive a chargeback related to the Qualifying Purchase), we may offset the amount of the Product Purchase Fee we previously paid you for such Qualifying Purchase against future Product Purchase Fees or other amounts that would otherwise be payable to you under the Agreement or this Addendum, or require you to remit that amount to us."), r.createElement(s._22, null, "This Addendum is governed by and subject to the Agreement.  Capitalized terms used but not defined in this Addendum will have the meanings defined in the Agreement.  Except as amended by this Addendum, all other terms and conditions of the Agreement remain in full force and effect."))), r.createElement(s.U, {
                        padding: {
                            top: 2,
                            bottom: 2
                        }
                    }, r.createElement(s._22, {
                        fontSize: s.L.Size4
                    }, Object(c.d)("Summary", "AmazonRetailOffersAmendmentModal")), r.createElement(s._22, null, Object(c.d)("By accepting below, you may earn revenue for certain purchases by your viewers as described above.", "AmazonRetailOffersAmendmentModal"))), r.createElement(s._18, {
                        borderTop: !0,
                        display: s.H.Flex,
                        flexDirection: s.J.Row,
                        alignItems: s.c.Center,
                        justifyContent: s.T.Center,
                        padding: {
                            top: 2,
                            bottom: 1
                        }
                    }, r.createElement(s.U, {
                        margin: {
                            left: .5,
                            right: .5
                        }
                    }, r.createElement(s.u, {
                        "data-test-selector": "amendment-modal-cancel-button",
                        type: s.z.Text,
                        onClick: this.onClose
                    }, Object(c.d)("Cancel", "AmazonRetailOffersAmendmentModal"))), this.renderAcceptButton(this.props.amendmentAccepted)))
                }, t
            }(r.Component),
            f = (n("mJW4"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.amendmentAccepted = !1, t.handleClose = function(e) {
                        t.amendmentAccepted = e, t.props.closeModal()
                    }, t
                }
                return a.__extends(t, e), t.prototype.componentWillUnmount = function() {
                    this.props.onClose && this.props.onClose(this.amendmentAccepted)
                }, t.prototype.render = function() {
                    return r.createElement(s._18, {
                        className: "amendment-modal__container",
                        background: s.m.Base
                    }, r.createElement(h, {
                        "data-test-selector": "amendment-modal-selector",
                        onClose: this.handleClose,
                        amendmentAccepted: this.props.amendmentAccepted
                    }))
                }, t
            }(r.Component)),
            b = Object(i.a)(null, function(e) {
                return Object(o.bindActionCreators)({
                    closeModal: l.c
                }, e)
            })(f),
            y = Object(i.a)(null, function(e) {
                return Object(o.bindActionCreators)({
                    showAmendmentModal: function(e) {
                        var t = a.__rest(e, []);
                        return Object(l.d)(b, t)
                    }
                }, e)
            })(u),
            g = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    return r.createElement(s.U, {
                        padding: 3
                    }, r.createElement(s._22, {
                        type: s._27.H2
                    }, "Amazon Retail Offers Amendment v2"), r.createElement(s.U, {
                        margin: {
                            y: 2
                        }
                    }, r.createElement(y, {
                        channelName: this.props.match.params.channelName
                    })))
                }, t
            }(r.Component),
            A = g;
        n.d(t, "DevOnlyTestingAmazonOffersComponent", function() {
            return g
        }), n.d(t, "DevOnlyTestingAmazonOffersPage", function() {
            return A
        })
    },
    Kv1R: function(e, t) {},
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
    mJW4: function(e, t) {}
});
//# sourceMappingURL=pages.dev-only-testing-amazon-offers-efd10016d4d80a8ee73c198d5e139f5c.js.map