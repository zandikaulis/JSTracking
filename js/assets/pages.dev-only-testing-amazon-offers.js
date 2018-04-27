webpackJsonp([62], {
    "4mOb": function(e, t) {},
    "6Vx1": function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = n("TToO"),
            i = n("GiK3"),
            r = n("j0yR"),
            o = n("K+dm"),
            s = n("Odds"),
            c = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    return i.createElement(s._8, {
                        padding: 3
                    }, i.createElement(s.Q, {
                        type: s._47.H2
                    }, "Amazon Retail Offers Amendment v2"), i.createElement(s._8, {
                        margin: {
                            y: 2
                        }
                    }, i.createElement(o.a, {
                        channelName: this.props.match.params.channelName
                    }), i.createElement(r.a, {
                        channelName: this.props.match.params.channelName
                    })))
                }, t
            }(i.Component),
            l = c;
        n.d(t, "DevOnlyTestingAmazonOffersComponent", function() {
            return c
        }), n.d(t, "DevOnlyTestingAmazonOffersPage", function() {
            return l
        })
    },
    HW2d: function(e, t, n) {
        "use strict";
        n.d(t, "c", function() {
            return a
        }), n.d(t, "a", function() {
            return i
        }), n.d(t, "b", function() {
            return r
        }), t.d = function(e) {
            var t = s.__assign({
                action_type: o.CLICK,
                category: "Monetization",
                section_name: "amazon_associates"
            }, e);
            c.n.track(l.SpadeEventType.PartnerAffiliateSettings, t)
        };
        var a, i, r, o, s = n("TToO"),
            c = n("6sO2"),
            l = n("vH/s");
        ! function(e) {
            e.PARTNER = "partner", e.AFFILIATE = "affiliate", e.NONE = "none"
        }(a || (a = {})),
        function(e) {
            e.NONE = "none", e.LINKED = "linked"
        }(i || (i = {})),
        function(e) {
            e.OptInEarnRevenueCheckbox = "opt_in_earn_revenue_checkbox", e.AcceptCommerceAddendum = "accept_commerce_addendum", e.LinkAccountGetStarted = "link_account_get_started", e.LinkAccountEdit = "link_account_edit"
        }(r || (r = {})),
        function(e) {
            e.CLICK = "click"
        }(o || (o = {}))
    },
    IjoR: function(e, t) {},
    Jo6h: function(e, t, n) {
        "use strict";
        var a = n("GiK3"),
            i = n("6sO2"),
            r = n("OjIq"),
            o = n("Odds"),
            s = (n("IjoR"), function(e) {
                return a.createElement(o._33, {
                    className: "settings-form-group"
                }, a.createElement(r.a, null, a.createElement(o.W, {
                    error: e.error,
                    errorMessage: e.errorMessage || Object(i.d)("Sorry, something went wrong. Please try again later.", "SettingsFormGroup"),
                    hint: e.hint,
                    id: e.id,
                    label: e.label,
                    labelOptional: e.labelOptional,
                    orientation: e.orientation || o.X.Horizontal
                }, e.children)))
            });
        n.d(t, "a", function() {
            return s
        })
    },
    "K+dm": function(e, t, n) {
        "use strict";
        var a = n("TToO"),
            i = n("RH2O"),
            r = n("2KeS"),
            o = n("V5M+"),
            s = n("GiK3"),
            c = n("6sO2"),
            l = n("7vx8"),
            d = n("HW2d"),
            m = n("Jo6h"),
            u = n("Odds"),
            p = n("tu8+"),
            h = (n("pBoG"), "GAME_COMMERCE_V2"),
            f = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        amendmentAccepted: !1
                    }, t.onAmendmentClick = function() {
                        if (!t.props.data) return !1;
                        var e = {
                                channel: t.props.channelName,
                                channel_id: t.props.data.user && t.props.data.user.id,
                                partner_status: d.c.NONE,
                                associate_status: d.a.NONE
                            },
                            n = t.props.data.user && t.props.data.user.roles,
                            i = t.props.data.user && t.props.data.user.amazon.associatesStore.storeID;
                        return n && (e.partner_status = n.isPartner ? d.c.PARTNER : n.isAffiliate ? d.c.AFFILIATE : d.c.NONE), i && (e.associate_status = d.a.LINKED), Object(d.d)(a.__assign({
                            action: d.b.OptInEarnRevenueCheckbox
                        }, e)), t.props.showAmendmentModal({
                            amendmentAccepted: t.state.amendmentAccepted,
                            trackingParameters: e
                        }), !1
                    }, t
                }
                return a.__extends(t, e), t.prototype.componentWillReceiveProps = function(e) {
                    var t = e.data && e.data.user && e.data.user.twitch && e.data.user.twitch.commerceAmendment[0].isSigned || !1;
                    t !== this.state.amendmentAccepted && this.setState({
                        amendmentAccepted: t
                    })
                }, t.prototype.render = function() {
                    return !this.props.data || this.props.data.loading ? null : s.createElement(m.a, {
                        orientation: u.X.Horizontal,
                        label: Object(c.d)("Opt in to earn revenue", "AmazonRetailOffersAmendment")
                    }, s.createElement("div", {
                        onClick: this.onAmendmentClick,
                        "data-test-selector": "amazon-retail-offers-amendment-checkbox-wrapper",
                        className: "amazon-retail-offers__amendment"
                    }, s.createElement(u.J, {
                        "data-test-selector": "amazon-retail-offers-amendment-checkbox",
                        checked: this.state.amendmentAccepted,
                        disabled: !0,
                        id: "amazon-retail-offers-amendment",
                        label: Object(c.d)("Opt in to earn revenue from sales on Amazon.com", "AmazonRetailOffersAmendment")
                    })), s.createElement(u.Q, null, Object(c.d)("Please read and agree to the new Commerce Addendum to become eligible for this program.", "AmazonRetailOffersAmendment")))
                }, t = a.__decorate([Object(l.a)(p, {
                    options: function(e) {
                        return {
                            variables: {
                                login: e.channelName,
                                amendmentType: h
                            }
                        }
                    }
                })], t)
            }(s.PureComponent),
            k = n("oIkB"),
            g = n("Wedf"),
            A = "amendment-modal-accept-button",
            v = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        hasUserScrolled: !1
                    }, t.onUserScroll = function() {
                        t.setState({
                            hasUserScrolled: !0
                        })
                    }, t.renderAcceptButton = function(e) {
                        return e ? null : s.createElement(u._8, {
                            margin: {
                                left: .5,
                                right: .5
                            }
                        }, s.createElement(u.v, {
                            "data-test-selector": A,
                            type: u.B.Text,
                            onClick: t.onAccept,
                            disabled: !t.state.hasUserScrolled
                        }, Object(c.d)("Accept", "AmazonRetailOffersAmendmentModal")))
                    }, t.onClose = function() {
                        t.props.onClose()
                    }, t.onAccept = function() {
                        return a.__awaiter(t, void 0, void 0, function() {
                            return a.__generator(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        if (!0 === this.props.amendmentAccepted || !this.props.setAmendmentAcceptance) return [3, 4];
                                        e.label = 1;
                                    case 1:
                                        return e.trys.push([1, , 3, 4]), [4, this.props.setAmendmentAcceptance(Object(k.a)(h))];
                                    case 2:
                                        return e.sent(), Object(d.d)(a.__assign({
                                            action: d.b.AcceptCommerceAddendum
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
                return a.__extends(t, e), t.prototype.render = function() {
                    return s.createElement(u._8, {
                        padding: 3
                    }, s.createElement(u._33, {
                        padding: {
                            bottom: 3
                        },
                        borderBottom: !0,
                        textAlign: u._43.Center
                    }, s.createElement(u.Q, {
                        type: u._47.H4
                    }, Object(c.d)("Addendum to Content Partner Agreement – Commerce Addendum", "AmazonRetailOffersAmendmentModal"))), s.createElement(u._8, {
                        padding: {
                            top: 2,
                            bottom: 2
                        },
                        textAlign: u._43.Center
                    }, s.createElement(u.Q, {
                        fontSize: u.V.Size5
                    }, Object(c.d)('Please read and agree to the following addendum ("Addendum") to your Content License and Base Agreement (or Content License Agreement, as applicable) (the "Agreement") with Twitch in order to be eligible to earn revenue for certain purchases by a Twitch user that is viewing your Twitch channel.', "AmazonRetailOffersAmendmentModal"))), s.createElement(u._33, {
                        borderTop: !0,
                        borderRight: !0,
                        borderBottom: !0,
                        borderLeft: !0,
                        padding: 2
                    }, s.createElement("div", {
                        onScroll: this.onUserScroll,
                        className: "amendment-modal__amendment-text",
                        "data-test-selector": "amendment-modal-text-container"
                    }, s.createElement(u.Q, null, 'Please read and agree to the following addendum ("', s.createElement(u.Q, {
                        type: u._47.Span,
                        bold: !0
                    }, "Addendum"), '") to your Content License and Base Agreement (or Content License Agreement, as applicable) (the "', s.createElement(u.Q, {
                        type: u._47.Span,
                        bold: !0
                    }, "Agreement"), '") with Twitch in order to be eligible to earn revenue for certain purchases by a Twitch user that is viewing your Twitch channel. Twitch, in its sole discretion, may make specially-formatted links appear on your Twitch channel page (a "', s.createElement(u.Q, {
                        type: u._47.Span,
                        bold: !0
                    }, "Special Link"), '"), which would direct Twitch users to the purchase of a Product (as defined below). For every such purchase of a Product that is a Qualifying Purchase (as defined below), you will receive a fee (a "', s.createElement(u.Q, {
                        type: u._47.Span,
                        bold: !0
                    }, "Product Purchase Fee"), '") that will be calculated as a certain percentage as published by Twitch in the Supplemental Fees Statement, currently available at ', s.createElement("a", {
                        href: "https://www.twitch.tv/p/legal/supplemental-fees-statement/",
                        target: "_blank",
                        rel: "noopener noreferrer"
                    }, "https://www.twitch.tv/p/legal/supplemental-fees-statement/"), ' or a successor website (as may be updated from time to time) (the "', s.createElement(u.Q, {
                        type: u._47.Span,
                        bold: !0
                    }, "Supplemental Fees Statement"), '"), of (a) the purchase price of such Product, as such price was listed by Twitch at the time of the Qualifying Purchase and in the currency in which the Qualifying Purchase was made, less (b) any special discounts or promotions, taxes, service charges, rebates, payment processing fees (e.g. credit card processing fees) and any other related transaction and processing expenses. Calculation of and eligibility to receive Product Purchase Fees will be further subject to any limitations or clarifications set forth in the Supplemental Fees Statement.'), s.createElement(u.Q, null, '"', s.createElement(u.Q, {
                        type: u._47.Span,
                        bold: !0
                    }, "Product"), '" means a product that is set forth in the Supplemental Fees Statement and is associated with a program in which Twitch places Special Links.'), s.createElement(u.Q, null, 'A "', s.createElement(u.Q, {
                        type: u._47.Span,
                        bold: !0
                    }, "Qualifying Purchase"), '" of a Product occurs when: (a) a user of Twitch clicks through a Special Link on your Twitch channel page; (b) such user purchases a Product(s) sold by Twitch Interactive, Inc., or a related entity that is designated in the Supplemental Fees Statement as a relevant seller of record; and (c) Twitch receives a fully settled payment for the purchase by such user.'), s.createElement(u.Q, null, "If we pay you a Product Purchase Fee and later issue a refund or credit to the Twitch user for such Qualifying Purchase (or receive a chargeback related to the Qualifying Purchase), we may offset the amount of the Product Purchase Fee we previously paid you for such Qualifying Purchase against future Product Purchase Fees or other amounts that would otherwise be payable to you under the Agreement or this Addendum, or require you to remit that amount to us."), s.createElement(u.Q, null, "This Addendum is governed by and subject to the Agreement.  Capitalized terms used but not defined in this Addendum will have the meanings defined in the Agreement.  Except as amended by this Addendum, all other terms and conditions of the Agreement remain in full force and effect."))), s.createElement(u._8, {
                        padding: {
                            top: 2,
                            bottom: 2
                        }
                    }, s.createElement(u.Q, {
                        fontSize: u.V.Size4
                    }, Object(c.d)("Summary", "AmazonRetailOffersAmendmentModal")), s.createElement(u.Q, null, Object(c.d)("By accepting below, you may earn revenue for certain purchases by your viewers as described above.", "AmazonRetailOffersAmendmentModal"))), s.createElement(u._33, {
                        borderTop: !0,
                        display: u.R.Flex,
                        flexDirection: u.T.Row,
                        alignItems: u.c.Center,
                        justifyContent: u._7.Center,
                        padding: {
                            top: 2,
                            bottom: 1
                        }
                    }, s.createElement(u._8, {
                        margin: {
                            left: .5,
                            right: .5
                        }
                    }, s.createElement(u.v, {
                        "data-test-selector": "amendment-modal-cancel-button",
                        type: u.B.Text,
                        onClick: this.onClose
                    }, Object(c.d)("Cancel", "AmazonRetailOffersAmendmentModal"))), this.renderAcceptButton(this.props.amendmentAccepted)))
                }, t
            }(s.PureComponent),
            b = Object(l.a)(g, {
                name: "setAmendmentAcceptance"
            })(v),
            y = (n("4mOb"), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    return s.createElement(u._33, {
                        className: "amendment-modal__container",
                        background: u.n.Base
                    }, s.createElement(b, {
                        "data-test-selector": "amendment-modal-selector",
                        trackingParameters: this.props.trackingParameters,
                        onClose: this.props.closeModal,
                        amendmentAccepted: this.props.amendmentAccepted
                    }))
                }, t
            }(s.Component));
        var S = Object(i.b)(null, function(e) {
            return Object(r.b)({
                closeModal: o.c
            }, e)
        })(y);
        var N = Object(i.b)(null, function(e) {
            return Object(r.b)({
                showAmendmentModal: function(e) {
                    var t = a.__rest(e, []);
                    return Object(o.d)(S, t)
                }
            }, e)
        })(f);
        n.d(t, "a", function() {
            return N
        })
    },
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
    OjIq: function(e, t, n) {
        "use strict";
        var a = n("GiK3"),
            i = n("Odds"),
            r = function(e) {
                var t = null;
                return e.title && (t = a.createElement(i._8, {
                    padding: {
                        bottom: 1
                    }
                }, a.createElement(i.Q, {
                    fontSize: i.V.Size6,
                    color: e.error ? i.K.Error : i.K.Base,
                    bold: !0
                }, e.title))), a.createElement(i._33, {
                    padding: 2,
                    borderTop: !0
                }, t, e.children, e.errorMessage && a.createElement(i.Q, {
                    color: i.K.Error,
                    fontSize: i.V.Size7
                }, e.errorMessage))
            };
        n.d(t, "a", function() {
            return r
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
    j0yR: function(e, t, n) {
        "use strict";
        var a = n("TToO"),
            i = n("GiK3"),
            r = n("6sO2"),
            o = n("7vx8"),
            s = n("jF7o"),
            c = n("HW2d"),
            l = n("Jo6h"),
            d = n("Odds"),
            m = n("LHN4"),
            u = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.renderButtonText = function(e) {
                        return e ? Object(r.d)("Edit", "AmazonRetailAssociatesAccountLinking") : Object(r.d)("Get Started", "AmazonRetailAssociatesAccountLinking")
                    }, t.renderDescriptionText = function(e) {
                        return e ? Object(r.d)("Link to {storeID}", {
                            storeID: i.createElement(d.Q, {
                                type: d._47.Span,
                                bold: !0
                            }, e)
                        }, "AmazonRetailAssociatesAccountLinking") : Object(r.d)("Create and link an Amazon Associates account to your Twitch account. Only one Amazon account may be linked at any one time.", "AmazonRetailAssociatesAccountLinking")
                    }, t.launchLinkAccount = function(e) {
                        e.preventDefault();
                        var n = "https://twitch.amazon.com/associates/register",
                            a = t.props.data.user && t.props.data.user.roles,
                            i = t.props.data.user && t.props.data.user.amazon.associatesStore.storeID,
                            r = c.c.NONE,
                            o = c.a.NONE;
                        a && (r = a.isPartner ? c.c.PARTNER : a.isAffiliate ? c.c.AFFILIATE : c.c.NONE), i && (o = c.a.LINKED), t.launchPopup(n), Object(c.d)({
                            action: i ? c.b.LinkAccountEdit : c.b.LinkAccountGetStarted,
                            channel: t.props.channelName,
                            channel_id: t.props.data.user && t.props.data.user.id,
                            partner_status: r,
                            associate_status: o,
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
                        n && (n.focus(), Object(s.a)(n, function() {
                            t.props.data.refetch && t.props.data.refetch()
                        }))
                    }, t
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    var e = null,
                        t = !1;
                    return this.props.data.user && this.props.data.user.amazon && this.props.data.user.amazon.associatesStore && (e = this.props.data.user.amazon.associatesStore.storeID, t = this.props.data.user.amazon.associatesStore.isPayoutEnabled), i.createElement(i.Fragment, null, i.createElement(l.a, {
                        orientation: d.X.Horizontal,
                        label: Object(r.d)("Link an Amazon Associates Account", "AmazonRetailAssociatesAccountLinking")
                    }, i.createElement(d.Q, {
                        "data-test-selector": "amazon-associates-account-linking-setup-text"
                    }, this.renderDescriptionText(e || null)), i.createElement(d._8, {
                        padding: {
                            top: .5
                        }
                    }, i.createElement(d.v, {
                        "data-test-selector": "amazon-associates-account-linking-setup-button",
                        onClick: this.launchLinkAccount
                    }, this.renderButtonText(e || null)))), i.createElement(l.a, {
                        orientation: d.X.Horizontal,
                        label: Object(r.d)("Receive payments from Amazon.com", "AmazonRetailAssociatesAccountLinking")
                    }, !(!e || t) && i.createElement(d.Q, {
                        color: d.K.Error,
                        "data-test-selector": "amazon-associates-account-linking-tax-info-error"
                    }, Object(r.d)("You must complete your tax and payment forms before you will receive any payments.", "AmazonRetailAssociatesAccountLinking")), i.createElement(d.Q, null, Object(r.d)("To receive payments, please provide your <x:tax>Tax Information</x:tax> and your <x:payment>Payment Information</x:payment>. Note, changes made to your Tax Information must be made by the primary account holder and any changes after the 15th will go into effect the following month. Please ignore this message if you have already submitted your information.", {
                        "x:tax": function(e) {
                            return i.createElement(d.Q, {
                                key: "tax",
                                type: d._47.Span,
                                bold: !0,
                                decoration: d._45.Underline
                            }, e)
                        },
                        "x:payment": function(e) {
                            return i.createElement(d.Q, {
                                key: "payment",
                                type: d._47.Span,
                                bold: !0,
                                decoration: d._45.Underline
                            }, e)
                        }
                    }, "AmazonRetailAssociatesAccountLinking")), i.createElement(d._8, {
                        padding: {
                            top: 1
                        }
                    }, i.createElement(d._2, {
                        padding: {
                            right: 2
                        }
                    }, i.createElement("a", {
                        href: "#",
                        onClick: this.launchAssociatesAccount
                    }, Object(r.d)("Add/update tax information", "AmazonRetailAssociatesAccountLinking"))), i.createElement(d._2, {
                        padding: {
                            right: 2
                        }
                    }, i.createElement("a", {
                        href: "#",
                        onClick: this.launchAssociatesAccount
                    }, Object(r.d)("Add/update payment information", "AmazonRetailAssociatesAccountLinking"))), i.createElement("a", {
                        href: "#",
                        onClick: this.launchAssociatesReporting
                    }, Object(r.d)("Reporting", "AmazonRetailAssociatesAccountLinking")))))
                }, t
            }(i.Component),
            p = Object(o.a)(m, {
                options: function(e) {
                    return {
                        variables: {
                            login: e.channelName
                        }
                    }
                }
            })(u);
        n.d(t, !1, function() {
            return u
        }), n.d(t, "a", function() {
            return p
        })
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
//# sourceMappingURL=pages.dev-only-testing-amazon-offers-9948355e60259221a3aafbacaa35d2f3.js.map