webpackJsonp([58], {
    "2AKG": function(e, t) {},
    "4mOb": function(e, t) {},
    "6Vx1": function(e, t, n) {
        "use strict";

        function a(e) {
            var t = o.__assign({
                action_type: f.CLICK,
                category: "Monetization",
                section_name: "amazon_associates"
            }, e);
            c.m.track(m.SpadeEventType.PartnerAffiliateSettings, t)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i, o = n("TToO"),
            r = n("U7vG"),
            s = n("HW6M"),
            c = n("6sO2"),
            l = n("7vx8"),
            d = n("jF7o"),
            m = n("vH/s");
        ! function(e) {
            e.PARTNER = "partner", e.AFFILIATE = "affiliate", e.NONE = "none"
        }(i || (i = {}));
        var u;
        ! function(e) {
            e.NONE = "none", e.LINKED = "linked"
        }(u || (u = {}));
        var p;
        ! function(e) {
            e.OptInEarnRevenueCheckbox = "opt_in_earn_revenue_checkbox", e.AcceptCommerceAddendum = "accept_commerce_addendum", e.LinkAccountGetStarted = "link_account_get_started", e.LinkAccountEdit = "link_account_edit"
        }(p || (p = {}));
        var f;
        (f || (f = {})).CLICK = "click";
        var h = n("Odds"),
            k = n("ZOrf"),
            g = (n("2AKG"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.renderButtonText = function(e) {
                        return e ? Object(c.d)("Edit", "AmazonRetailAssociatesAccountLinking") : Object(c.d)("Get Started", "AmazonRetailAssociatesAccountLinking")
                    }, t.renderDescriptionText = function(e) {
                        return e ? Object(c.d)("Link to {storeID}", {
                            storeID: r.createElement(h._35, {
                                type: h._40.Span,
                                bold: !0
                            }, e)
                        }, "AmazonRetailAssociatesAccountLinking") : Object(c.d)("Create and link an Amazon Associates account to your Twitch account. Only one Amazon account may be linked at any one time.", "AmazonRetailAssociatesAccountLinking")
                    }, t.launchLinkAccount = function(e) {
                        e.preventDefault();
                        var n = "https://twitch.amazon.com/associates/register",
                            o = t.props.data.user && t.props.data.user.roles,
                            r = t.props.data.user && t.props.data.user.amazon.associatesStore.storeID,
                            s = i.NONE,
                            c = u.NONE;
                        o && (s = o.isPartner ? i.PARTNER : o.isAffiliate ? i.AFFILIATE : i.NONE), r && (c = u.LINKED), t.launchPopup(n), a({
                            action: r ? p.LinkAccountEdit : p.LinkAccountGetStarted,
                            channel: t.props.channelName,
                            channel_id: t.props.data.user && t.props.data.user.id,
                            partner_status: s,
                            associate_status: c,
                            target: n
                        })
                    }, t.launchAssociatesAccount = function(e) {
                        e.preventDefault();
                        t.launchPopup("https://affiliate-program.amazon.com/home/account")
                    }, t.launchAssociatesReporting = function(e) {
                        e.preventDefault();
                        t.launchPopup("https://affiliate-program.amazon.com/home/reports")
                    }, t.launchPopup = function(e) {
                        var n = window.open(e, "Twitch", "width=1024,height=600,scrollbars=yes");
                        n && (n.focus(), Object(d.a)(n, function() {
                            t.props.data.refetch && t.props.data.refetch()
                        }))
                    }, t
                }
                return o.__extends(t, e), t.prototype.render = function() {
                    var e = this.props.data.user && this.props.data.user.amazon.associatesStore && this.props.data.user.amazon.associatesStore.storeID,
                        t = this.props.data.user && this.props.data.user.amazon.associatesStore && this.props.data.user.amazon.associatesStore.isPayoutEnabled;
                    return r.createElement(h._2, null, r.createElement(h._25, {
                        background: h.m.Alt2,
                        borderBottom: !0,
                        display: h.N.Flex,
                        flexDirection: h.P.Row,
                        flexWrap: h.Q.NoWrap
                    }, r.createElement(h._2, {
                        padding: 2,
                        flexShrink: 0,
                        flexGrow: 0,
                        className: "amazon-associates-account-linking__label"
                    }, r.createElement(h._35, {
                        bold: !0
                    }, Object(c.d)("Link an Amazon Associates Account", "AmazonRetailAssociatesAccountLinking"))), r.createElement(h._2, {
                        display: h.N.Flex,
                        flexDirection: h.P.Column,
                        padding: 2
                    }, r.createElement(h._35, {
                        "data-test-selector": "amazon-associates-account-linking-setup-text"
                    }, this.renderDescriptionText(e || null)), r.createElement(h._2, {
                        padding: {
                            top: .5
                        }
                    }, r.createElement(h.u, {
                        "data-test-selector": "amazon-associates-account-linking-setup-button",
                        onClick: this.launchLinkAccount
                    }, this.renderButtonText(e || null))))), r.createElement(h._25, {
                        display: h.N.Flex,
                        flexDirection: h.P.Row,
                        flexWrap: h.Q.NoWrap,
                        "data-test-selector": "amazon-associates-account-linking-tax-info",
                        className: s({
                            "amazon-associates-account-linking__tax-info--error": !(!e || t)
                        })
                    }, r.createElement(h._2, {
                        padding: {
                            top: 2,
                            right: 2,
                            bottom: 2,
                            left: e && !t ? 1 : 2
                        },
                        flexShrink: 0,
                        flexGrow: 0,
                        className: "amazon-associates-account-linking__label"
                    }, r.createElement(h._35, {
                        bold: !0
                    }, Object(c.d)("Receive payments from Amazon.com", "AmazonRetailAssociatesAccountLinking"))), r.createElement(h._2, {
                        display: h.N.Flex,
                        flexDirection: h.P.Column,
                        padding: 2
                    }, r.createElement(h._35, null, Object(c.d)("To receive payments, please provide your <x:tax>Tax Information</x:tax> and your <x:payment>Payment Information</x:payment>. Note, changes made to your Tax Information must be made by the primary account holder and any changes after the 15th will go into effect the following month. Please ignore this message if you have already submitted your information.", {
                        "x:tax": function(e) {
                            return r.createElement(h._35, {
                                key: "tax",
                                type: h._40.Span,
                                bold: !0,
                                decoration: h._38.Underline
                            }, e)
                        },
                        "x:payment": function(e) {
                            return r.createElement(h._35, {
                                key: "payment",
                                type: h._40.Span,
                                bold: !0,
                                decoration: h._38.Underline
                            }, e)
                        }
                    }, "AmazonRetailAssociatesAccountLinking")), r.createElement(h._2, {
                        padding: {
                            top: 1
                        }
                    }, r.createElement(h.W, {
                        padding: {
                            right: 2
                        }
                    }, r.createElement("a", {
                        href: "#",
                        onClick: this.launchAssociatesAccount
                    }, Object(c.d)("Add/update tax information", "AmazonRetailAssociatesAccountLinking"))), r.createElement(h.W, {
                        padding: {
                            right: 2
                        }
                    }, r.createElement("a", {
                        href: "#",
                        onClick: this.launchAssociatesAccount
                    }, Object(c.d)("Add/update payment information", "AmazonRetailAssociatesAccountLinking"))), r.createElement("a", {
                        href: "#",
                        onClick: this.launchAssociatesReporting
                    }, Object(c.d)("Reporting", "AmazonRetailAssociatesAccountLinking"))))))
                }, t = o.__decorate([Object(l.a)(k, {
                    options: function(e) {
                        return {
                            variables: {
                                login: e.channelName
                            }
                        }
                    }
                })], t)
            }(r.Component)),
            A = n("RH2O"),
            v = n("2KeS"),
            y = n("V5M+"),
            b = n("tu8+"),
            _ = (n("pBoG"), "GAME_COMMERCE_V2"),
            S = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        amendmentAccepted: !1
                    }, t.onAmendmentClick = function() {
                        var e = {
                                channel: t.props.channelName,
                                channel_id: t.props.data.user && t.props.data.user.id,
                                partner_status: i.NONE,
                                associate_status: u.NONE
                            },
                            n = t.props.data.user && t.props.data.user.roles,
                            r = t.props.data.user && t.props.data.user.amazon.associatesStore.storeID;
                        return n && (e.partner_status = n.isPartner ? i.PARTNER : n.isAffiliate ? i.AFFILIATE : i.NONE), r && (e.associate_status = u.LINKED), a(o.__assign({
                            action: p.OptInEarnRevenueCheckbox
                        }, e)), t.props.showAmendmentModal({
                            amendmentAccepted: t.state.amendmentAccepted,
                            trackingParameters: e
                        }), !1
                    }, t
                }
                return o.__extends(t, e), t.prototype.componentWillReceiveProps = function(e) {
                    var t = e.data.user && e.data.user.twitch && e.data.user.twitch.commerceAmendment[0].isSigned || !1;
                    t !== this.state.amendmentAccepted && this.setState({
                        amendmentAccepted: t
                    })
                }, t.prototype.render = function() {
                    return this.props.data.loading ? null : r.createElement(h._25, {
                        display: h.N.Flex,
                        flexDirection: h.P.Row,
                        borderTop: !0,
                        borderBottom: !0,
                        background: h.m.Alt2
                    }, r.createElement(h._2, {
                        padding: 2,
                        flexShrink: 0,
                        flexGrow: 0,
                        className: "amazon-retail-offers__label"
                    }, r.createElement(h._35, {
                        bold: !0
                    }, Object(c.d)("Opt in to earn revenue", "AmazonRetailOffersAmendnment"))), r.createElement(h._2, {
                        padding: 2
                    }, r.createElement("div", {
                        onClick: this.onAmendmentClick,
                        "data-test-selector": "amazon-retail-offers-amendment-checkbox-wrapper",
                        className: "amazon-retail-offers__amendment"
                    }, r.createElement(h.H, {
                        "data-test-selector": "amazon-retail-offers-amendment-checkbox",
                        checked: this.state.amendmentAccepted,
                        disabled: !0,
                        id: "amazon-retail-offers-amendment",
                        label: Object(c.d)("Opt in to earn revenue from sales on Amazon.com", "AmazonRetailOffersAmendnment")
                    })), r.createElement(h._35, null, Object(c.d)("Please read and agree to the new Commerce Addendum to become eligible for this program.", "AmazonRetailOffersAmendnment"))))
                }, t = o.__decorate([Object(l.a)(b, {
                    options: function(e) {
                        return {
                            variables: {
                                login: e.channelName,
                                amendmentType: _
                            }
                        }
                    }
                })], t)
            }(r.Component),
            N = S,
            E = n("oIkB"),
            w = n("Wedf"),
            O = "amendment-modal-accept-button",
            z = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        hasUserScrolled: !1
                    }, t.onUserScroll = function() {
                        t.setState({
                            hasUserScrolled: !0
                        })
                    }, t.renderAcceptButton = function(e) {
                        return e ? null : r.createElement(h._2, {
                            margin: {
                                left: .5,
                                right: .5
                            }
                        }, r.createElement(h.u, {
                            "data-test-selector": O,
                            type: h.z.Text,
                            onClick: t.onAccept,
                            disabled: !t.state.hasUserScrolled
                        }, Object(c.d)("Accept", "AmazonRetailOffersAmendmentModal")))
                    }, t.onClose = function() {
                        t.props.onClose()
                    }, t.onAccept = function() {
                        return o.__awaiter(t, void 0, void 0, function() {
                            return o.__generator(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        if (!0 === this.props.amendmentAccepted || !this.props.setAmendmentAcceptance) return [3, 4];
                                        e.label = 1;
                                    case 1:
                                        return e.trys.push([1, , 3, 4]), [4, this.props.setAmendmentAcceptance(Object(E.a)(_))];
                                    case 2:
                                        return e.sent(), a(o.__assign({
                                            action: p.AcceptCommerceAddendum
                                        }, this.props.trackingParameters)), [3, 4];
                                    case 3:
                                        return this.props.onClose(), [7];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, t
                }
                return o.__extends(t, e), t.prototype.render = function() {
                    return r.createElement(h._2, {
                        padding: 3
                    }, r.createElement(h._25, {
                        padding: {
                            bottom: 3
                        },
                        borderBottom: !0,
                        textAlign: h._36.Center
                    }, r.createElement(h._35, {
                        type: h._40.H4
                    }, Object(c.d)("Addendum to Content Partner Agreement – Commerce Addendum", "AmazonRetailOffersAmendmentModal"))), r.createElement(h._2, {
                        padding: {
                            top: 2,
                            bottom: 2
                        },
                        textAlign: h._36.Center
                    }, r.createElement(h._35, {
                        fontSize: h.R.Size5
                    }, Object(c.d)('Please read and agree to the following addendum ("Addendum") to your Content License and Base Agreement (or Content License Agreement, as applicable) (the "Agreement") with Twitch in order to be eligible to earn revenue for certain purchases by a Twitch user that is viewing your Twitch channel.', "AmazonRetailOffersAmendmentModal"))), r.createElement(h._25, {
                        borderTop: !0,
                        borderRight: !0,
                        borderBottom: !0,
                        borderLeft: !0,
                        padding: 2
                    }, r.createElement("div", {
                        onScroll: this.onUserScroll,
                        className: "amendment-modal__amendment-text",
                        "data-test-selector": "amendment-modal-text-container"
                    }, r.createElement(h._35, null, 'Please read and agree to the following addendum ("', r.createElement(h._35, {
                        type: h._40.Span,
                        bold: !0
                    }, "Addendum"), '") to your Content License and Base Agreement (or Content License Agreement, as applicable) (the "', r.createElement(h._35, {
                        type: h._40.Span,
                        bold: !0
                    }, "Agreement"), '") with Twitch in order to be eligible to earn revenue for certain purchases by a Twitch user that is viewing your Twitch channel. Twitch, in its sole discretion, may make specially-formatted links appear on your Twitch channel page (a "', r.createElement(h._35, {
                        type: h._40.Span,
                        bold: !0
                    }, "Special Link"), '"), which would direct Twitch users to the purchase of a Product (as defined below). For every such purchase of a Product that is a Qualifying Purchase (as defined below), you will receive a fee (a "', r.createElement(h._35, {
                        type: h._40.Span,
                        bold: !0
                    }, "Product Purchase Fee"), '") that will be calculated as a certain percentage as published by Twitch in the Supplemental Fees Statement, currently available at ', r.createElement("a", {
                        href: "https://www.twitch.tv/p/legal/supplemental-fees-statement/",
                        target: "_blank",
                        rel: "noopener noreferrer"
                    }, "https://www.twitch.tv/p/legal/supplemental-fees-statement/"), ' or a successor website (as may be updated from time to time) (the "', r.createElement(h._35, {
                        type: h._40.Span,
                        bold: !0
                    }, "Supplemental Fees Statement"), '"), of (a) the purchase price of such Product, as such price was listed by Twitch at the time of the Qualifying Purchase and in the currency in which the Qualifying Purchase was made, less (b) any special discounts or promotions, taxes, service charges, rebates, payment processing fees (e.g. credit card processing fees) and any other related transaction and processing expenses. Calculation of and eligibility to receive Product Purchase Fees will be further subject to any limitations or clarifications set forth in the Supplemental Fees Statement.'), r.createElement(h._35, null, '"', r.createElement(h._35, {
                        type: h._40.Span,
                        bold: !0
                    }, "Product"), '" means a product that is set forth in the Supplemental Fees Statement and is associated with a program in which Twitch places Special Links.'), r.createElement(h._35, null, 'A "', r.createElement(h._35, {
                        type: h._40.Span,
                        bold: !0
                    }, "Qualifying Purchase"), '" of a Product occurs when: (a) a user of Twitch clicks through a Special Link on your Twitch channel page; (b) such user purchases a Product(s) sold by Twitch Interactive, Inc., or a related entity that is designated in the Supplemental Fees Statement as a relevant seller of record; and (c) Twitch receives a fully settled payment for the purchase by such user.'), r.createElement(h._35, null, "If we pay you a Product Purchase Fee and later issue a refund or credit to the Twitch user for such Qualifying Purchase (or receive a chargeback related to the Qualifying Purchase), we may offset the amount of the Product Purchase Fee we previously paid you for such Qualifying Purchase against future Product Purchase Fees or other amounts that would otherwise be payable to you under the Agreement or this Addendum, or require you to remit that amount to us."), r.createElement(h._35, null, "This Addendum is governed by and subject to the Agreement.  Capitalized terms used but not defined in this Addendum will have the meanings defined in the Agreement.  Except as amended by this Addendum, all other terms and conditions of the Agreement remain in full force and effect."))), r.createElement(h._2, {
                        padding: {
                            top: 2,
                            bottom: 2
                        }
                    }, r.createElement(h._35, {
                        fontSize: h.R.Size4
                    }, Object(c.d)("Summary", "AmazonRetailOffersAmendmentModal")), r.createElement(h._35, null, Object(c.d)("By accepting below, you may earn revenue for certain purchases by your viewers as described above.", "AmazonRetailOffersAmendmentModal"))), r.createElement(h._25, {
                        borderTop: !0,
                        display: h.N.Flex,
                        flexDirection: h.P.Row,
                        alignItems: h.c.Center,
                        justifyContent: h._1.Center,
                        padding: {
                            top: 2,
                            bottom: 1
                        }
                    }, r.createElement(h._2, {
                        margin: {
                            left: .5,
                            right: .5
                        }
                    }, r.createElement(h.u, {
                        "data-test-selector": "amendment-modal-cancel-button",
                        type: h.z.Text,
                        onClick: this.onClose
                    }, Object(c.d)("Cancel", "AmazonRetailOffersAmendmentModal"))), this.renderAcceptButton(this.props.amendmentAccepted)))
                }, t
            }(r.Component),
            x = Object(l.a)(w, {
                name: "setAmendmentAcceptance"
            })(z),
            T = (n("4mOb"), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return o.__extends(t, e), t.prototype.render = function() {
                    return r.createElement(h._25, {
                        className: "amendment-modal__container",
                        background: h.m.Base
                    }, r.createElement(x, {
                        "data-test-selector": "amendment-modal-selector",
                        trackingParameters: this.props.trackingParameters,
                        onClose: this.props.closeModal,
                        amendmentAccepted: this.props.amendmentAccepted
                    }))
                }, t
            }(r.Component)),
            P = Object(A.b)(null, function(e) {
                return Object(v.b)({
                    closeModal: y.c
                }, e)
            })(T),
            C = Object(A.b)(null, function(e) {
                return Object(v.b)({
                    showAmendmentModal: function(e) {
                        var t = o.__rest(e, []);
                        return Object(y.d)(P, t)
                    }
                }, e)
            })(N),
            F = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return o.__extends(t, e), t.prototype.render = function() {
                    return r.createElement(h._2, {
                        padding: 3
                    }, r.createElement(h._35, {
                        type: h._40.H2
                    }, "Amazon Retail Offers Amendment v2"), r.createElement(h._2, {
                        margin: {
                            y: 2
                        }
                    }, r.createElement(C, {
                        channelName: this.props.match.params.channelName
                    }), r.createElement(g, {
                        channelName: this.props.match.params.channelName
                    })))
                }, t
            }(r.Component),
            R = F;
        n.d(t, "DevOnlyTestingAmazonOffersComponent", function() {
            return F
        }), n.d(t, "DevOnlyTestingAmazonOffersPage", function() {
            return R
        })
    },
    Wedf: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "AmazonRetailOffers_AcceptAmendment"
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
                                value: "CommerceAmendmentType"
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
                            value: "setAmendmentAcceptance"
                        },
                        arguments: [{
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "input"
                            },
                            value: {
                                kind: "ObjectValue",
                                fields: [{
                                    kind: "ObjectField",
                                    name: {
                                        kind: "Name",
                                        value: "amendmentType"
                                    },
                                    value: {
                                        kind: "Variable",
                                        name: {
                                            kind: "Name",
                                            value: "input"
                                        }
                                    }
                                }]
                            }
                        }],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
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
                                                        value: "input"
                                                    }
                                                }]
                                            }
                                        }],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "isSigned"
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
                end: 200
            }
        };
        n.loc.source = {
            body: "mutation AmazonRetailOffers_AcceptAmendment($input: CommerceAmendmentType!) {\nsetAmendmentAcceptance(input: {\namendmentType: $input\n}){\ntwitch {\ncommerceAmendment(types:[$input]) {\nisSigned\nid\n}\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    ZOrf: function(e, t) {
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
                                    value: "displayName"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "roles"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "isPartner"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "isAffiliate"
                                        },
                                        arguments: [],
                                        directives: []
                                    }]
                                }
                            }, {
                                kind: "Field",
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
                                                name: {
                                                    kind: "Name",
                                                    value: "isPayoutEnabled"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "storeID"
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
                end: 181
            }
        };
        n.loc.source = {
            body: "query AmazonAssociates_LinkedStore($login: String!) {\nuser(login: $login) {\nid\ndisplayName\nroles {\nisPartner\nisAffiliate\n}\namazon {\nassociatesStore {\nisPayoutEnabled\nstoreID\n}\n}\n}\n}",
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
    pBoG: function(e, t) {},
    "tu8+": function(e, t) {
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
                    }
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
                                    value: "displayName"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "roles"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "isPartner"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "isAffiliate"
                                        },
                                        arguments: [],
                                        directives: []
                                    }]
                                }
                            }, {
                                kind: "Field",
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
                                                name: {
                                                    kind: "Name",
                                                    value: "storeID"
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
                                    value: "twitch"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
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
                                                    value: "isSigned"
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
                end: 282
            }
        };
        n.loc.source = {
            body: "query AmazonRetailOffers_CommerceAmendment($login: String! $amendmentType: CommerceAmendmentType!) {\nuser(login: $login) {\nid\ndisplayName\nroles {\nisPartner\nisAffiliate\n}\namazon {\nassociatesStore {\nstoreID\n}\n}\ntwitch {\ncommerceAmendment(types: [$amendmentType]) {\nid\nisSigned\n}\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    }
});
//# sourceMappingURL=pages.dev-only-testing-amazon-offers-3398e3148d9337a5ff757d6bfa9555aa.js.map