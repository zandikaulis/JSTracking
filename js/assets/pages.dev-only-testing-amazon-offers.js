webpackJsonp([58], {
    "4mOb": function(e, t) {},
    "6Vx1": function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a, i, o, r, s = n("TToO"),
            c = n("GiK3"),
            l = n("HW6M"),
            d = n("6sO2"),
            m = n("7vx8"),
            u = n("jF7o"),
            p = n("vH/s");

        function f(e) {
            var t = s.__assign({
                action_type: r.CLICK,
                category: "Monetization",
                section_name: "amazon_associates"
            }, e);
            d.n.track(p.SpadeEventType.PartnerAffiliateSettings, t)
        }! function(e) {
            e.PARTNER = "partner", e.AFFILIATE = "affiliate", e.NONE = "none"
        }(a || (a = {})),
        function(e) {
            e.NONE = "none", e.LINKED = "linked"
        }(i || (i = {})),
        function(e) {
            e.OptInEarnRevenueCheckbox = "opt_in_earn_revenue_checkbox", e.AcceptCommerceAddendum = "accept_commerce_addendum", e.LinkAccountGetStarted = "link_account_get_started", e.LinkAccountEdit = "link_account_edit"
        }(o || (o = {})),
        function(e) {
            e.CLICK = "click"
        }(r || (r = {}));
        var h = n("Odds"),
            k = n("LHN4"),
            g = (n("C+lF"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.renderButtonText = function(e) {
                        return e ? Object(d.d)("Edit", "AmazonRetailAssociatesAccountLinking") : Object(d.d)("Get Started", "AmazonRetailAssociatesAccountLinking")
                    }, t.renderDescriptionText = function(e) {
                        return e ? Object(d.d)("Link to {storeID}", {
                            storeID: c.createElement(h.O, {
                                type: h._41.Span,
                                bold: !0
                            }, e)
                        }, "AmazonRetailAssociatesAccountLinking") : Object(d.d)("Create and link an Amazon Associates account to your Twitch account. Only one Amazon account may be linked at any one time.", "AmazonRetailAssociatesAccountLinking")
                    }, t.launchLinkAccount = function(e) {
                        e.preventDefault();
                        var n = "https://twitch.amazon.com/associates/register",
                            r = t.props.data.user && t.props.data.user.roles,
                            s = t.props.data.user && t.props.data.user.amazon.associatesStore.storeID,
                            c = a.NONE,
                            l = i.NONE;
                        r && (c = r.isPartner ? a.PARTNER : r.isAffiliate ? a.AFFILIATE : a.NONE), s && (l = i.LINKED), t.launchPopup(n), f({
                            action: s ? o.LinkAccountEdit : o.LinkAccountGetStarted,
                            channel: t.props.channelName,
                            channel_id: t.props.data.user && t.props.data.user.id,
                            partner_status: c,
                            associate_status: l,
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
                        n && (n.focus(), Object(u.a)(n, function() {
                            t.props.data.refetch && t.props.data.refetch()
                        }))
                    }, t
                }
                return s.__extends(t, e), t.prototype.render = function() {
                    var e = this.props.data.user && this.props.data.user.amazon.associatesStore && this.props.data.user.amazon.associatesStore.storeID,
                        t = this.props.data.user && this.props.data.user.amazon.associatesStore && this.props.data.user.amazon.associatesStore.isPayoutEnabled;
                    return c.createElement(h._4, null, c.createElement(h._27, {
                        background: h.m.Alt2,
                        borderBottom: !0,
                        display: h.P.Flex,
                        flexDirection: h.R.Row,
                        flexWrap: h.S.NoWrap
                    }, c.createElement(h._4, {
                        padding: 2,
                        flexShrink: 0,
                        flexGrow: 0,
                        className: "amazon-associates-account-linking__label"
                    }, c.createElement(h.O, {
                        bold: !0
                    }, Object(d.d)("Link an Amazon Associates Account", "AmazonRetailAssociatesAccountLinking"))), c.createElement(h._4, {
                        display: h.P.Flex,
                        flexDirection: h.R.Column,
                        padding: 2
                    }, c.createElement(h.O, {
                        "data-test-selector": "amazon-associates-account-linking-setup-text"
                    }, this.renderDescriptionText(e || null)), c.createElement(h._4, {
                        padding: {
                            top: .5
                        }
                    }, c.createElement(h.u, {
                        "data-test-selector": "amazon-associates-account-linking-setup-button",
                        onClick: this.launchLinkAccount
                    }, this.renderButtonText(e || null))))), c.createElement(h._27, {
                        display: h.P.Flex,
                        flexDirection: h.R.Row,
                        flexWrap: h.S.NoWrap,
                        "data-test-selector": "amazon-associates-account-linking-tax-info",
                        className: l({
                            "amazon-associates-account-linking__tax-info--error": !(!e || t)
                        })
                    }, c.createElement(h._4, {
                        padding: {
                            top: 2,
                            right: 2,
                            bottom: 2,
                            left: e && !t ? 1 : 2
                        },
                        flexShrink: 0,
                        flexGrow: 0,
                        className: "amazon-associates-account-linking__label"
                    }, c.createElement(h.O, {
                        bold: !0
                    }, Object(d.d)("Receive payments from Amazon.com", "AmazonRetailAssociatesAccountLinking"))), c.createElement(h._4, {
                        display: h.P.Flex,
                        flexDirection: h.R.Column,
                        padding: 2
                    }, c.createElement(h.O, null, Object(d.d)("To receive payments, please provide your <x:tax>Tax Information</x:tax> and your <x:payment>Payment Information</x:payment>. Note, changes made to your Tax Information must be made by the primary account holder and any changes after the 15th will go into effect the following month. Please ignore this message if you have already submitted your information.", {
                        "x:tax": function(e) {
                            return c.createElement(h.O, {
                                key: "tax",
                                type: h._41.Span,
                                bold: !0,
                                decoration: h._39.Underline
                            }, e)
                        },
                        "x:payment": function(e) {
                            return c.createElement(h.O, {
                                key: "payment",
                                type: h._41.Span,
                                bold: !0,
                                decoration: h._39.Underline
                            }, e)
                        }
                    }, "AmazonRetailAssociatesAccountLinking")), c.createElement(h._4, {
                        padding: {
                            top: 1
                        }
                    }, c.createElement(h.Y, {
                        padding: {
                            right: 2
                        }
                    }, c.createElement("a", {
                        href: "#",
                        onClick: this.launchAssociatesAccount
                    }, Object(d.d)("Add/update tax information", "AmazonRetailAssociatesAccountLinking"))), c.createElement(h.Y, {
                        padding: {
                            right: 2
                        }
                    }, c.createElement("a", {
                        href: "#",
                        onClick: this.launchAssociatesAccount
                    }, Object(d.d)("Add/update payment information", "AmazonRetailAssociatesAccountLinking"))), c.createElement("a", {
                        href: "#",
                        onClick: this.launchAssociatesReporting
                    }, Object(d.d)("Reporting", "AmazonRetailAssociatesAccountLinking"))))))
                }, t
            }(c.Component)),
            A = Object(m.a)(k, {
                options: function(e) {
                    return {
                        variables: {
                            login: e.channelName
                        }
                    }
                }
            })(g),
            v = n("RH2O"),
            y = n("2KeS"),
            b = n("V5M+"),
            S = n("tu8+"),
            _ = (n("pBoG"), "GAME_COMMERCE_V2"),
            N = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        amendmentAccepted: !1
                    }, t.onAmendmentClick = function() {
                        var e = {
                                channel: t.props.channelName,
                                channel_id: t.props.data.user && t.props.data.user.id,
                                partner_status: a.NONE,
                                associate_status: i.NONE
                            },
                            n = t.props.data.user && t.props.data.user.roles,
                            r = t.props.data.user && t.props.data.user.amazon.associatesStore.storeID;
                        return n && (e.partner_status = n.isPartner ? a.PARTNER : n.isAffiliate ? a.AFFILIATE : a.NONE), r && (e.associate_status = i.LINKED), f(s.__assign({
                            action: o.OptInEarnRevenueCheckbox
                        }, e)), t.props.showAmendmentModal({
                            amendmentAccepted: t.state.amendmentAccepted,
                            trackingParameters: e
                        }), !1
                    }, t
                }
                return s.__extends(t, e), t.prototype.componentWillReceiveProps = function(e) {
                    var t = e.data.user && e.data.user.twitch && e.data.user.twitch.commerceAmendment[0].isSigned || !1;
                    t !== this.state.amendmentAccepted && this.setState({
                        amendmentAccepted: t
                    })
                }, t.prototype.render = function() {
                    return this.props.data.loading ? null : c.createElement(h._27, {
                        display: h.P.Flex,
                        flexDirection: h.R.Row,
                        borderTop: !0,
                        borderBottom: !0,
                        background: h.m.Alt2
                    }, c.createElement(h._4, {
                        padding: 2,
                        flexShrink: 0,
                        flexGrow: 0,
                        className: "amazon-retail-offers__label"
                    }, c.createElement(h.O, {
                        bold: !0
                    }, Object(d.d)("Opt in to earn revenue", "AmazonRetailOffersAmendnment"))), c.createElement(h._4, {
                        padding: 2
                    }, c.createElement("div", {
                        onClick: this.onAmendmentClick,
                        "data-test-selector": "amazon-retail-offers-amendment-checkbox-wrapper",
                        className: "amazon-retail-offers__amendment"
                    }, c.createElement(h.I, {
                        "data-test-selector": "amazon-retail-offers-amendment-checkbox",
                        checked: this.state.amendmentAccepted,
                        disabled: !0,
                        id: "amazon-retail-offers-amendment",
                        label: Object(d.d)("Opt in to earn revenue from sales on Amazon.com", "AmazonRetailOffersAmendnment")
                    })), c.createElement(h.O, null, Object(d.d)("Please read and agree to the new Commerce Addendum to become eligible for this program.", "AmazonRetailOffersAmendnment"))))
                }, t = s.__decorate([Object(m.a)(S, {
                    options: function(e) {
                        return {
                            variables: {
                                login: e.channelName,
                                amendmentType: _
                            }
                        }
                    }
                })], t)
            }(c.Component),
            O = N,
            E = n("oIkB"),
            w = n("Wedf"),
            x = "amendment-modal-accept-button",
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
                        return e ? null : c.createElement(h._4, {
                            margin: {
                                left: .5,
                                right: .5
                            }
                        }, c.createElement(h.u, {
                            "data-test-selector": x,
                            type: h.A.Text,
                            onClick: t.onAccept,
                            disabled: !t.state.hasUserScrolled
                        }, Object(d.d)("Accept", "AmazonRetailOffersAmendmentModal")))
                    }, t.onClose = function() {
                        t.props.onClose()
                    }, t.onAccept = function() {
                        return s.__awaiter(t, void 0, void 0, function() {
                            return s.__generator(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        if (!0 === this.props.amendmentAccepted || !this.props.setAmendmentAcceptance) return [3, 4];
                                        e.label = 1;
                                    case 1:
                                        return e.trys.push([1, , 3, 4]), [4, this.props.setAmendmentAcceptance(Object(E.a)(_))];
                                    case 2:
                                        return e.sent(), f(s.__assign({
                                            action: o.AcceptCommerceAddendum
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
                return s.__extends(t, e), t.prototype.render = function() {
                    return c.createElement(h._4, {
                        padding: 3
                    }, c.createElement(h._27, {
                        padding: {
                            bottom: 3
                        },
                        borderBottom: !0,
                        textAlign: h._37.Center
                    }, c.createElement(h.O, {
                        type: h._41.H4
                    }, Object(d.d)("Addendum to Content Partner Agreement – Commerce Addendum", "AmazonRetailOffersAmendmentModal"))), c.createElement(h._4, {
                        padding: {
                            top: 2,
                            bottom: 2
                        },
                        textAlign: h._37.Center
                    }, c.createElement(h.O, {
                        fontSize: h.T.Size5
                    }, Object(d.d)('Please read and agree to the following addendum ("Addendum") to your Content License and Base Agreement (or Content License Agreement, as applicable) (the "Agreement") with Twitch in order to be eligible to earn revenue for certain purchases by a Twitch user that is viewing your Twitch channel.', "AmazonRetailOffersAmendmentModal"))), c.createElement(h._27, {
                        borderTop: !0,
                        borderRight: !0,
                        borderBottom: !0,
                        borderLeft: !0,
                        padding: 2
                    }, c.createElement("div", {
                        onScroll: this.onUserScroll,
                        className: "amendment-modal__amendment-text",
                        "data-test-selector": "amendment-modal-text-container"
                    }, c.createElement(h.O, null, 'Please read and agree to the following addendum ("', c.createElement(h.O, {
                        type: h._41.Span,
                        bold: !0
                    }, "Addendum"), '") to your Content License and Base Agreement (or Content License Agreement, as applicable) (the "', c.createElement(h.O, {
                        type: h._41.Span,
                        bold: !0
                    }, "Agreement"), '") with Twitch in order to be eligible to earn revenue for certain purchases by a Twitch user that is viewing your Twitch channel. Twitch, in its sole discretion, may make specially-formatted links appear on your Twitch channel page (a "', c.createElement(h.O, {
                        type: h._41.Span,
                        bold: !0
                    }, "Special Link"), '"), which would direct Twitch users to the purchase of a Product (as defined below). For every such purchase of a Product that is a Qualifying Purchase (as defined below), you will receive a fee (a "', c.createElement(h.O, {
                        type: h._41.Span,
                        bold: !0
                    }, "Product Purchase Fee"), '") that will be calculated as a certain percentage as published by Twitch in the Supplemental Fees Statement, currently available at ', c.createElement("a", {
                        href: "https://www.twitch.tv/p/legal/supplemental-fees-statement/",
                        target: "_blank",
                        rel: "noopener noreferrer"
                    }, "https://www.twitch.tv/p/legal/supplemental-fees-statement/"), ' or a successor website (as may be updated from time to time) (the "', c.createElement(h.O, {
                        type: h._41.Span,
                        bold: !0
                    }, "Supplemental Fees Statement"), '"), of (a) the purchase price of such Product, as such price was listed by Twitch at the time of the Qualifying Purchase and in the currency in which the Qualifying Purchase was made, less (b) any special discounts or promotions, taxes, service charges, rebates, payment processing fees (e.g. credit card processing fees) and any other related transaction and processing expenses. Calculation of and eligibility to receive Product Purchase Fees will be further subject to any limitations or clarifications set forth in the Supplemental Fees Statement.'), c.createElement(h.O, null, '"', c.createElement(h.O, {
                        type: h._41.Span,
                        bold: !0
                    }, "Product"), '" means a product that is set forth in the Supplemental Fees Statement and is associated with a program in which Twitch places Special Links.'), c.createElement(h.O, null, 'A "', c.createElement(h.O, {
                        type: h._41.Span,
                        bold: !0
                    }, "Qualifying Purchase"), '" of a Product occurs when: (a) a user of Twitch clicks through a Special Link on your Twitch channel page; (b) such user purchases a Product(s) sold by Twitch Interactive, Inc., or a related entity that is designated in the Supplemental Fees Statement as a relevant seller of record; and (c) Twitch receives a fully settled payment for the purchase by such user.'), c.createElement(h.O, null, "If we pay you a Product Purchase Fee and later issue a refund or credit to the Twitch user for such Qualifying Purchase (or receive a chargeback related to the Qualifying Purchase), we may offset the amount of the Product Purchase Fee we previously paid you for such Qualifying Purchase against future Product Purchase Fees or other amounts that would otherwise be payable to you under the Agreement or this Addendum, or require you to remit that amount to us."), c.createElement(h.O, null, "This Addendum is governed by and subject to the Agreement.  Capitalized terms used but not defined in this Addendum will have the meanings defined in the Agreement.  Except as amended by this Addendum, all other terms and conditions of the Agreement remain in full force and effect."))), c.createElement(h._4, {
                        padding: {
                            top: 2,
                            bottom: 2
                        }
                    }, c.createElement(h.O, {
                        fontSize: h.T.Size4
                    }, Object(d.d)("Summary", "AmazonRetailOffersAmendmentModal")), c.createElement(h.O, null, Object(d.d)("By accepting below, you may earn revenue for certain purchases by your viewers as described above.", "AmazonRetailOffersAmendmentModal"))), c.createElement(h._27, {
                        borderTop: !0,
                        display: h.P.Flex,
                        flexDirection: h.R.Row,
                        alignItems: h.c.Center,
                        justifyContent: h._3.Center,
                        padding: {
                            top: 2,
                            bottom: 1
                        }
                    }, c.createElement(h._4, {
                        margin: {
                            left: .5,
                            right: .5
                        }
                    }, c.createElement(h.u, {
                        "data-test-selector": "amendment-modal-cancel-button",
                        type: h.A.Text,
                        onClick: this.onClose
                    }, Object(d.d)("Cancel", "AmazonRetailOffersAmendmentModal"))), this.renderAcceptButton(this.props.amendmentAccepted)))
                }, t
            }(c.Component),
            T = Object(m.a)(w, {
                name: "setAmendmentAcceptance"
            })(z),
            P = (n("4mOb"), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return s.__extends(t, e), t.prototype.render = function() {
                    return c.createElement(h._27, {
                        className: "amendment-modal__container",
                        background: h.m.Base
                    }, c.createElement(T, {
                        "data-test-selector": "amendment-modal-selector",
                        trackingParameters: this.props.trackingParameters,
                        onClose: this.props.closeModal,
                        amendmentAccepted: this.props.amendmentAccepted
                    }))
                }, t
            }(c.Component));
        var C = Object(v.b)(null, function(e) {
            return Object(y.b)({
                closeModal: b.c
            }, e)
        })(P);
        var F = Object(v.b)(null, function(e) {
                return Object(y.b)({
                    showAmendmentModal: function(e) {
                        var t = s.__rest(e, []);
                        return Object(b.d)(C, t)
                    }
                }, e)
            })(O),
            R = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return s.__extends(t, e), t.prototype.render = function() {
                    return c.createElement(h._4, {
                        padding: 3
                    }, c.createElement(h.O, {
                        type: h._41.H2
                    }, "Amazon Retail Offers Amendment v2"), c.createElement(h._4, {
                        margin: {
                            y: 2
                        }
                    }, c.createElement(F, {
                        channelName: this.props.match.params.channelName
                    }), c.createElement(A, {
                        channelName: this.props.match.params.channelName
                    })))
                }, t
            }(c.Component),
            L = R;
        n.d(t, "DevOnlyTestingAmazonOffersComponent", function() {
            return R
        }), n.d(t, "DevOnlyTestingAmazonOffersPage", function() {
            return L
        })
    },
    "C+lF": function(e, t) {},
    LHN4: function(e, t) {
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
    jF7o: function(e, t, n) {
        "use strict";
        t.a = function(e, t) {
            if (!e) return void a.j.warn("[onPopupClose] Attempted to observe a window that failed to open.");
            var n = setInterval(function() {
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
            }, 500)
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
//# sourceMappingURL=pages.dev-only-testing-amazon-offers-bdb85428353f4643cf9bc911a43b061d.js.map