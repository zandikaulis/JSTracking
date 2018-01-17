webpackJsonp([52], {
    "2AKG": function(e, n) {},
    "4mOb": function(e, n) {},
    "6Vx1": function(e, n, t) {
        "use strict";

        function a(e) {
            var n = o.__assign({
                action_type: f.CLICK,
                category: "Monetization",
                section_name: "amazon_associates"
            }, e);
            s.m.track(m.SpadeEventType.PartnerAffiliateSettings, n)
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var i, o = t("TToO"),
            r = t("U7vG"),
            l = t("HW6M"),
            s = t("6sO2"),
            c = t("7vx8"),
            d = t("jF7o"),
            m = t("vH/s");
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
        var h = t("Odds"),
            k = t("ZOrf"),
            A = (t("2AKG"), function(e) {
                function n() {
                    var n = null !== e && e.apply(this, arguments) || this;
                    return n.renderButtonText = function(e) {
                        return e ? Object(s.d)("Edit", "AmazonRetailAssociatesAccountLinking") : Object(s.d)("Get Started", "AmazonRetailAssociatesAccountLinking")
                    }, n.renderDescriptionText = function(e) {
                        return e ? Object(s.d)("Link to {storeID}", {
                            storeID: r.createElement(h._23, {
                                type: h._28.Span,
                                bold: !0
                            }, e)
                        }, "AmazonRetailAssociatesAccountLinking") : Object(s.d)("Create and link an Amazon Associates account to your Twitch account. Only one Amazon account may be linked at any one time.", "AmazonRetailAssociatesAccountLinking")
                    }, n.launchLinkAccount = function(e) {
                        e.preventDefault();
                        var t = "https://twitch.amazon.com/associates/register",
                            o = n.props.data.user && n.props.data.user.roles,
                            r = n.props.data.user && n.props.data.user.amazon.associatesStore.storeID,
                            l = i.NONE,
                            s = u.NONE;
                        o && (l = o.isPartner ? i.PARTNER : o.isAffiliate ? i.AFFILIATE : i.NONE), r && (s = u.LINKED), n.launchPopup(t), a({
                            action: r ? p.LinkAccountEdit : p.LinkAccountGetStarted,
                            channel: n.props.channelName,
                            channel_id: n.props.data.user && n.props.data.user.id,
                            partner_status: l,
                            associate_status: s,
                            target: t
                        })
                    }, n.launchAssociatesAccount = function(e) {
                        e.preventDefault();
                        n.launchPopup("https://affiliate-program.amazon.com/home/account")
                    }, n.launchAssociatesReporting = function(e) {
                        e.preventDefault();
                        n.launchPopup("https://affiliate-program.amazon.com/home/reports")
                    }, n.launchPopup = function(e) {
                        var t = window.open(e, "Twitch", "width=1024,height=600,scrollbars=yes");
                        t && (t.focus(), Object(d.a)(t, function() {
                            n.props.data.refetch && n.props.data.refetch()
                        }))
                    }, n
                }
                return o.__extends(n, e), n.prototype.render = function() {
                    var e = this.props.data.user && this.props.data.user.amazon.associatesStore && this.props.data.user.amazon.associatesStore.storeID,
                        n = this.props.data.user && this.props.data.user.amazon.associatesStore && this.props.data.user.amazon.associatesStore.isPayoutEnabled;
                    return r.createElement(h.V, null, r.createElement(h._19, {
                        background: h.m.Alt2,
                        borderBottom: !0,
                        display: h.H.Flex,
                        flexDirection: h.J.Row,
                        flexWrap: h.K.NoWrap
                    }, r.createElement(h.V, {
                        padding: 2,
                        flexShrink: 0,
                        flexGrow: 0,
                        className: "amazon-associates-account-linking__label"
                    }, r.createElement(h._23, {
                        bold: !0
                    }, Object(s.d)("Link an Amazon Associates Account", "AmazonRetailAssociatesAccountLinking"))), r.createElement(h.V, {
                        display: h.H.Flex,
                        flexDirection: h.J.Column,
                        padding: 2
                    }, r.createElement(h._23, {
                        "data-test-selector": "amazon-associates-account-linking-setup-text"
                    }, this.renderDescriptionText(e || null)), r.createElement(h.V, {
                        padding: {
                            top: .5
                        }
                    }, r.createElement(h.u, {
                        "data-test-selector": "amazon-associates-account-linking-setup-button",
                        onClick: this.launchLinkAccount
                    }, this.renderButtonText(e || null))))), r.createElement(h._19, {
                        display: h.H.Flex,
                        flexDirection: h.J.Row,
                        flexWrap: h.K.NoWrap,
                        "data-test-selector": "amazon-associates-account-linking-tax-info",
                        className: l({
                            "amazon-associates-account-linking__tax-info--error": !(!e || n)
                        })
                    }, r.createElement(h.V, {
                        padding: {
                            top: 2,
                            right: 2,
                            bottom: 2,
                            left: e && !n ? 1 : 2
                        },
                        flexShrink: 0,
                        flexGrow: 0,
                        className: "amazon-associates-account-linking__label"
                    }, r.createElement(h._23, {
                        bold: !0
                    }, Object(s.d)("Receive payments from Amazon.com", "AmazonRetailAssociatesAccountLinking"))), r.createElement(h.V, {
                        display: h.H.Flex,
                        flexDirection: h.J.Column,
                        padding: 2
                    }, r.createElement(h._23, null, Object(s.d)("To receive payments, please provide your <x:tax>Tax Information</x:tax> and your <x:payment>Payment Information</x:payment>. Note, changes made to your Tax Information must be made by the primary account holder and any changes after the 15th will go into effect the following month. Please ignore this message if you have already submitted your information.", {
                        "x:tax": function(e) {
                            return r.createElement(h._23, {
                                key: "tax",
                                type: h._28.Span,
                                bold: !0,
                                decoration: h._26.Underline
                            }, e)
                        },
                        "x:payment": function(e) {
                            return r.createElement(h._23, {
                                key: "payment",
                                type: h._28.Span,
                                bold: !0,
                                decoration: h._26.Underline
                            }, e)
                        }
                    }, "AmazonRetailAssociatesAccountLinking")), r.createElement(h.V, {
                        padding: {
                            top: 1
                        }
                    }, r.createElement(h.Q, {
                        padding: {
                            right: 2
                        }
                    }, r.createElement("a", {
                        href: "#",
                        onClick: this.launchAssociatesAccount
                    }, Object(s.d)("Add/update tax information", "AmazonRetailAssociatesAccountLinking"))), r.createElement(h.Q, {
                        padding: {
                            right: 2
                        }
                    }, r.createElement("a", {
                        href: "#",
                        onClick: this.launchAssociatesAccount
                    }, Object(s.d)("Add/update payment information", "AmazonRetailAssociatesAccountLinking"))), r.createElement("a", {
                        href: "#",
                        onClick: this.launchAssociatesReporting
                    }, Object(s.d)("Reporting", "AmazonRetailAssociatesAccountLinking"))))))
                }, n = o.__decorate([Object(c.a)(k, {
                    options: function(e) {
                        return {
                            variables: {
                                login: e.channelName
                            }
                        }
                    }
                })], n)
            }(r.Component)),
            g = t("RH2O"),
            v = t("2KeS"),
            y = t("V5M+"),
            b = t("tu8+"),
            S = (t("pBoG"), "GAME_COMMERCE_V2"),
            _ = function(e) {
                function n() {
                    var n = null !== e && e.apply(this, arguments) || this;
                    return n.state = {
                        amendmentAccepted: !1
                    }, n.onAmendmentClick = function() {
                        var e = {
                                channel: n.props.channelName,
                                channel_id: n.props.data.user && n.props.data.user.id,
                                partner_status: i.NONE,
                                associate_status: u.NONE
                            },
                            t = n.props.data.user && n.props.data.user.roles,
                            r = n.props.data.user && n.props.data.user.amazon.associatesStore.storeID;
                        return t && (e.partner_status = t.isPartner ? i.PARTNER : t.isAffiliate ? i.AFFILIATE : i.NONE), r && (e.associate_status = u.LINKED), a(o.__assign({
                            action: p.OptInEarnRevenueCheckbox
                        }, e)), n.props.showAmendmentModal({
                            amendmentAccepted: n.state.amendmentAccepted,
                            trackingParameters: e
                        }), !1
                    }, n
                }
                return o.__extends(n, e), n.prototype.componentWillReceiveProps = function(e) {
                    var n = e.data.user && e.data.user.twitch && e.data.user.twitch.commerceAmendment[0].isSigned || !1;
                    n !== this.state.amendmentAccepted && this.setState({
                        amendmentAccepted: n
                    })
                }, n.prototype.render = function() {
                    return this.props.data.loading ? null : r.createElement(h._19, {
                        display: h.H.Flex,
                        flexDirection: h.J.Row,
                        borderTop: !0,
                        borderBottom: !0,
                        background: h.m.Alt2
                    }, r.createElement(h.V, {
                        padding: 2,
                        flexShrink: 0,
                        flexGrow: 0,
                        className: "amazon-retail-offers__label"
                    }, r.createElement(h._23, {
                        bold: !0
                    }, Object(s.d)("Opt in to earn revenue", "AmazonRetailOffersAmendnment"))), r.createElement(h.V, {
                        padding: 2
                    }, r.createElement("div", {
                        onClick: this.onAmendmentClick,
                        "data-test-selector": "amazon-retail-offers-amendment-checkbox-wrapper",
                        className: "amazon-retail-offers__amendment"
                    }, r.createElement(h.E, {
                        "data-test-selector": "amazon-retail-offers-amendment-checkbox",
                        checked: this.state.amendmentAccepted,
                        disabled: !0,
                        id: "amazon-retail-offers-amendment",
                        label: Object(s.d)("Opt in to earn revenue from sales on Amazon.com", "AmazonRetailOffersAmendnment")
                    })), r.createElement(h._23, null, Object(s.d)("Please read and agree to the new Commerce Addendum to become eligible for this program.", "AmazonRetailOffersAmendnment"))))
                }, n = o.__decorate([Object(c.a)(b, {
                    options: function(e) {
                        return {
                            variables: {
                                login: e.channelName,
                                amendmentType: S
                            }
                        }
                    }
                })], n)
            }(r.Component),
            N = _,
            E = t("oIkB"),
            w = t("Wedf"),
            O = "amendment-modal-accept-button",
            z = function(e) {
                function n() {
                    var n = null !== e && e.apply(this, arguments) || this;
                    return n.state = {
                        hasUserScrolled: !1
                    }, n.onUserScroll = function() {
                        n.setState({
                            hasUserScrolled: !0
                        })
                    }, n.renderAcceptButton = function(e) {
                        return e ? null : r.createElement(h.V, {
                            margin: {
                                left: .5,
                                right: .5
                            }
                        }, r.createElement(h.u, {
                            "data-test-selector": O,
                            type: h.z.Text,
                            onClick: n.onAccept,
                            disabled: !n.state.hasUserScrolled
                        }, Object(s.d)("Accept", "AmazonRetailOffersAmendmentModal")))
                    }, n.onClose = function() {
                        n.props.onClose()
                    }, n.onAccept = function() {
                        return o.__awaiter(n, void 0, void 0, function() {
                            return o.__generator(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        if (!0 === this.props.amendmentAccepted || !this.props.setAmendmentAcceptance) return [3, 4];
                                        e.label = 1;
                                    case 1:
                                        return e.trys.push([1, , 3, 4]), [4, this.props.setAmendmentAcceptance(Object(E.a)(S))];
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
                    }, n
                }
                return o.__extends(n, e), n.prototype.render = function() {
                    return r.createElement(h.V, {
                        padding: 3
                    }, r.createElement(h._19, {
                        padding: {
                            bottom: 3
                        },
                        borderBottom: !0,
                        textAlign: h._24.Center
                    }, r.createElement(h._23, {
                        type: h._28.H4
                    }, Object(s.d)("Addendum to Content Partner Agreement – Commerce Addendum", "AmazonRetailOffersAmendmentModal"))), r.createElement(h.V, {
                        padding: {
                            top: 2,
                            bottom: 2
                        },
                        textAlign: h._24.Center
                    }, r.createElement(h._23, {
                        fontSize: h.L.Size5
                    }, Object(s.d)('Please read and agree to the following addendum ("Addendum") to your Content License and Base Agreement (or Content License Agreement, as applicable) (the "Agreement") with Twitch in order to be eligible to earn revenue for certain purchases by a Twitch user that is viewing your Twitch channel.', "AmazonRetailOffersAmendmentModal"))), r.createElement(h._19, {
                        borderTop: !0,
                        borderRight: !0,
                        borderBottom: !0,
                        borderLeft: !0,
                        padding: 2
                    }, r.createElement("div", {
                        onScroll: this.onUserScroll,
                        className: "amendment-modal__amendment-text",
                        "data-test-selector": "amendment-modal-text-container"
                    }, r.createElement(h._23, null, 'Please read and agree to the following addendum ("', r.createElement(h._23, {
                        type: h._28.Span,
                        bold: !0
                    }, "Addendum"), '") to your Content License and Base Agreement (or Content License Agreement, as applicable) (the "', r.createElement(h._23, {
                        type: h._28.Span,
                        bold: !0
                    }, "Agreement"), '") with Twitch in order to be eligible to earn revenue for certain purchases by a Twitch user that is viewing your Twitch channel. Twitch, in its sole discretion, may make specially-formatted links appear on your Twitch channel page (a "', r.createElement(h._23, {
                        type: h._28.Span,
                        bold: !0
                    }, "Special Link"), '"), which would direct Twitch users to the purchase of a Product (as defined below). For every such purchase of a Product that is a Qualifying Purchase (as defined below), you will receive a fee (a "', r.createElement(h._23, {
                        type: h._28.Span,
                        bold: !0
                    }, "Product Purchase Fee"), '") that will be calculated as a certain percentage as published by Twitch in the Supplemental Fees Statement, currently available at ', r.createElement("a", {
                        href: "http://www.twitch.tv/legal/p/supplemental-fees",
                        target: "_blank",
                        rel: "noopener noreferrer"
                    }, "http://www.twitch.tv/legal/p/supplemental-fees"), ' or a successor website (as may be updated from time to time) (the "', r.createElement(h._23, {
                        type: h._28.Span,
                        bold: !0
                    }, "Supplemental Fees Statement"), '"), of (a) the purchase price of such Product, as such price was listed by Twitch at the time of the Qualifying Purchase and in the currency in which the Qualifying Purchase was made, less (b) any special discounts or promotions, taxes, service charges, rebates, payment processing fees (e.g. credit card processing fees) and any other related transaction and processing expenses. Calculation of and eligibility to receive Product Purchase Fees will be further subject to any limitations or clarifications set forth in the Supplemental Fees Statement.'), r.createElement(h._23, null, '"', r.createElement(h._23, {
                        type: h._28.Span,
                        bold: !0
                    }, "Product"), '" means a product that is set forth in the Supplemental Fees Statement and is associated with a program in which Twitch places Special Links.'), r.createElement(h._23, null, 'A "', r.createElement(h._23, {
                        type: h._28.Span,
                        bold: !0
                    }, "Qualifying Purchase"), '" of a Product occurs when: (a) a user of Twitch clicks through a Special Link on your Twitch channel page; (b) such user purchases a Product(s) sold by Twitch Interactive, Inc., or a related entity that is designated in the Supplemental Fees Statement as a relevant seller of record; and (c) Twitch receives a fully settled payment for the purchase by such user.'), r.createElement(h._23, null, "If we pay you a Product Purchase Fee and later issue a refund or credit to the Twitch user for such Qualifying Purchase (or receive a chargeback related to the Qualifying Purchase), we may offset the amount of the Product Purchase Fee we previously paid you for such Qualifying Purchase against future Product Purchase Fees or other amounts that would otherwise be payable to you under the Agreement or this Addendum, or require you to remit that amount to us."), r.createElement(h._23, null, "This Addendum is governed by and subject to the Agreement.  Capitalized terms used but not defined in this Addendum will have the meanings defined in the Agreement.  Except as amended by this Addendum, all other terms and conditions of the Agreement remain in full force and effect."))), r.createElement(h.V, {
                        padding: {
                            top: 2,
                            bottom: 2
                        }
                    }, r.createElement(h._23, {
                        fontSize: h.L.Size4
                    }, Object(s.d)("Summary", "AmazonRetailOffersAmendmentModal")), r.createElement(h._23, null, Object(s.d)("By accepting below, you may earn revenue for certain purchases by your viewers as described above.", "AmazonRetailOffersAmendmentModal"))), r.createElement(h._19, {
                        borderTop: !0,
                        display: h.H.Flex,
                        flexDirection: h.J.Row,
                        alignItems: h.c.Center,
                        justifyContent: h.U.Center,
                        padding: {
                            top: 2,
                            bottom: 1
                        }
                    }, r.createElement(h.V, {
                        margin: {
                            left: .5,
                            right: .5
                        }
                    }, r.createElement(h.u, {
                        "data-test-selector": "amendment-modal-cancel-button",
                        type: h.z.Text,
                        onClick: this.onClose
                    }, Object(s.d)("Cancel", "AmazonRetailOffersAmendmentModal"))), this.renderAcceptButton(this.props.amendmentAccepted)))
                }, n
            }(r.Component),
            x = Object(c.a)(w, {
                name: "setAmendmentAcceptance"
            })(z),
            T = (t("4mOb"), function(e) {
                function n() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return o.__extends(n, e), n.prototype.render = function() {
                    return r.createElement(h._19, {
                        className: "amendment-modal__container",
                        background: h.m.Base
                    }, r.createElement(x, {
                        "data-test-selector": "amendment-modal-selector",
                        trackingParameters: this.props.trackingParameters,
                        onClose: this.props.closeModal,
                        amendmentAccepted: this.props.amendmentAccepted
                    }))
                }, n
            }(r.Component)),
            C = Object(g.a)(null, function(e) {
                return Object(v.bindActionCreators)({
                    closeModal: y.c
                }, e)
            })(T),
            F = Object(g.a)(null, function(e) {
                return Object(v.bindActionCreators)({
                    showAmendmentModal: function(e) {
                        var n = o.__rest(e, []);
                        return Object(y.d)(C, n)
                    }
                }, e)
            })(N),
            P = function(e) {
                function n() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return o.__extends(n, e), n.prototype.render = function() {
                    return r.createElement(h.V, {
                        padding: 3
                    }, r.createElement(h._23, {
                        type: h._28.H2
                    }, "Amazon Retail Offers Amendment v2"), r.createElement(h.V, {
                        margin: {
                            y: 2
                        }
                    }, r.createElement(F, {
                        channelName: this.props.match.params.channelName
                    }), r.createElement(A, {
                        channelName: this.props.match.params.channelName
                    })))
                }, n
            }(r.Component),
            R = P;
        t.d(n, "DevOnlyTestingAmazonOffersComponent", function() {
            return P
        }), t.d(n, "DevOnlyTestingAmazonOffersPage", function() {
            return R
        })
    },
    Wedf: function(e, n) {
        var t = {
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
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "isSigned"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: null
                                            }, {
                                                kind: "Field",
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "id"
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
                end: 200
            }
        };
        t.loc.source = {
            body: "mutation AmazonRetailOffers_AcceptAmendment($input: CommerceAmendmentType!) {\nsetAmendmentAcceptance(input: {\namendmentType: $input\n}){\ntwitch {\ncommerceAmendment(types:[$input]) {\nisSigned\nid\n}\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = t
    },
    ZOrf: function(e, n) {
        var t = {
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
                                    value: "displayName"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
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
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "isPartner"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
                                    }, {
                                        kind: "Field",
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "isAffiliate"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
                                    }]
                                }
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
                end: 181
            }
        };
        t.loc.source = {
            body: "query AmazonAssociates_LinkedStore($login: String!) {\nuser(login: $login) {\nid\ndisplayName\nroles {\nisPartner\nisAffiliate\n}\namazon {\nassociatesStore {\nisPayoutEnabled\nstoreID\n}\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = t
    },
    jF7o: function(e, n, t) {
        "use strict";
        n.a = function(e, n) {
            if (e) var t = setInterval(function() {
                var a = !1,
                    i = !1;
                try {
                    a = e.closed, i = !!e.success
                } catch (e) {}
                if (a || i) {
                    n(i);
                    try {
                        e.close()
                    } catch (e) {}
                    clearInterval(t)
                }
            }, 500);
            else a.i.warn("[onPopupClose] Attempted to observe a window that failed to open.")
        };
        var a = t("6sO2")
    },
    pBoG: function(e, n) {},
    "tu8+": function(e, n) {
        var t = {
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
                                    value: "displayName"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
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
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "isPartner"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
                                    }, {
                                        kind: "Field",
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "isAffiliate"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
                                    }]
                                }
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
                                                    value: "storeID"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: null
                                            }]
                                        }
                                    }]
                                }
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
                end: 282
            }
        };
        t.loc.source = {
            body: "query AmazonRetailOffers_CommerceAmendment($login: String! $amendmentType: CommerceAmendmentType!) {\nuser(login: $login) {\nid\ndisplayName\nroles {\nisPartner\nisAffiliate\n}\namazon {\nassociatesStore {\nstoreID\n}\n}\ntwitch {\ncommerceAmendment(types: [$amendmentType]) {\nid\nisSigned\n}\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = t
    }
});
//# sourceMappingURL=pages.dev-only-testing-amazon-offers-d900052a543e2d4e1a991b837334d737.js.map