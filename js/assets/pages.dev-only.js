webpackJsonp([62], {
    "4mOb": function(e, t) {},
    "G+DA": function(e, t) {},
    HW2d: function(e, t, n) {
        "use strict";
        n.d(t, "c", function() {
            return a
        }), n.d(t, "a", function() {
            return r
        }), n.d(t, "b", function() {
            return i
        }), t.d = function(e) {
            var t = l.__assign({
                action_type: o.CLICK,
                category: "Monetization",
                section_name: "amazon_associates"
            }, e);
            s.n.track(c.SpadeEventType.PartnerAffiliateSettings, t)
        };
        var a, r, i, o, l = n("TToO"),
            s = n("6sO2"),
            c = n("vH/s");
        ! function(e) {
            e.PARTNER = "partner", e.AFFILIATE = "affiliate", e.NONE = "none"
        }(a || (a = {})),
        function(e) {
            e.NONE = "none", e.LINKED = "linked"
        }(r || (r = {})),
        function(e) {
            e.OptInEarnRevenueCheckbox = "opt_in_earn_revenue_checkbox", e.AcceptCommerceAddendum = "accept_commerce_addendum", e.LinkAccountGetStarted = "link_account_get_started", e.LinkAccountEdit = "link_account_edit"
        }(i || (i = {})),
        function(e) {
            e.CLICK = "click"
        }(o || (o = {}))
    },
    IjoR: function(e, t) {},
    Jo6h: function(e, t, n) {
        "use strict";
        var a = n("GiK3"),
            r = n("6sO2"),
            i = n("OjIq"),
            o = n("Odds"),
            l = (n("IjoR"), function(e) {
                return a.createElement(o._35, {
                    className: "settings-form-group"
                }, a.createElement(i.a, null, a.createElement(o.W, {
                    error: e.error,
                    errorMessage: e.errorMessage || Object(r.d)("Sorry, something went wrong. Please try again later.", "SettingsFormGroup"),
                    hint: e.hint,
                    id: e.id,
                    label: e.label,
                    labelOptional: e.labelOptional,
                    orientation: e.orientation || o.X.Horizontal
                }, e.children)))
            });
        n.d(t, "a", function() {
            return l
        })
    },
    "K+dm": function(e, t, n) {
        "use strict";
        var a = n("TToO"),
            r = n("RH2O"),
            i = n("2KeS"),
            o = n("V5M+"),
            l = n("GiK3"),
            s = n("6sO2"),
            c = n("7vx8"),
            d = n("HW2d"),
            m = n("Jo6h"),
            u = n("Odds"),
            p = n("tu8+"),
            h = (n("pBoG"), "GAME_COMMERCE_V2"),
            g = function(e) {
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
                            r = t.props.data.user && t.props.data.user.amazon.associatesStore.storeID;
                        return n && (e.partner_status = n.isPartner ? d.c.PARTNER : n.isAffiliate ? d.c.AFFILIATE : d.c.NONE), r && (e.associate_status = d.a.LINKED), Object(d.d)(a.__assign({
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
                    return !this.props.data || this.props.data.loading ? null : l.createElement(m.a, {
                        orientation: u.X.Horizontal,
                        label: Object(s.d)("Opt in to earn revenue", "AmazonRetailOffersAmendment")
                    }, l.createElement("div", {
                        onClick: this.onAmendmentClick,
                        "data-test-selector": "amazon-retail-offers-amendment-checkbox-wrapper",
                        className: "amazon-retail-offers__amendment"
                    }, l.createElement(u.J, {
                        "data-test-selector": "amazon-retail-offers-amendment-checkbox",
                        checked: this.state.amendmentAccepted,
                        disabled: !0,
                        id: "amazon-retail-offers-amendment",
                        label: Object(s.d)("Opt in to earn revenue from sales on Amazon.com", "AmazonRetailOffersAmendment")
                    })), l.createElement(u.Q, null, Object(s.d)("Please read and agree to the new Commerce Addendum to become eligible for this program.", "AmazonRetailOffersAmendment")))
                }, t = a.__decorate([Object(c.a)(p, {
                    options: function(e) {
                        return {
                            variables: {
                                login: e.channelName,
                                amendmentType: h
                            }
                        }
                    }
                })], t)
            }(l.PureComponent),
            f = n("oIkB"),
            v = n("Wedf"),
            y = "amendment-modal-accept-button",
            E = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        hasUserScrolled: !1
                    }, t.onUserScroll = function() {
                        t.setState({
                            hasUserScrolled: !0
                        })
                    }, t.renderAcceptButton = function(e) {
                        return e ? null : l.createElement(u._8, {
                            margin: {
                                left: .5,
                                right: .5
                            }
                        }, l.createElement(u.v, {
                            "data-test-selector": y,
                            type: u.B.Text,
                            onClick: t.onAccept,
                            disabled: !t.state.hasUserScrolled
                        }, Object(s.d)("Accept", "AmazonRetailOffersAmendmentModal")))
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
                                        return e.trys.push([1, , 3, 4]), [4, this.props.setAmendmentAcceptance(Object(f.a)(h))];
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
                    return l.createElement(u._8, {
                        padding: 3
                    }, l.createElement(u._35, {
                        padding: {
                            bottom: 3
                        },
                        borderBottom: !0,
                        textAlign: u._45.Center
                    }, l.createElement(u.Q, {
                        type: u._49.H4
                    }, Object(s.d)("Addendum to Content Partner Agreement – Commerce Addendum", "AmazonRetailOffersAmendmentModal"))), l.createElement(u._8, {
                        padding: {
                            top: 2,
                            bottom: 2
                        },
                        textAlign: u._45.Center
                    }, l.createElement(u.Q, {
                        fontSize: u.V.Size5
                    }, Object(s.d)('Please read and agree to the following addendum ("Addendum") to your Content License and Base Agreement (or Content License Agreement, as applicable) (the "Agreement") with Twitch in order to be eligible to earn revenue for certain purchases by a Twitch user that is viewing your Twitch channel.', "AmazonRetailOffersAmendmentModal"))), l.createElement(u._35, {
                        borderTop: !0,
                        borderRight: !0,
                        borderBottom: !0,
                        borderLeft: !0,
                        padding: 2
                    }, l.createElement("div", {
                        onScroll: this.onUserScroll,
                        className: "amendment-modal__amendment-text",
                        "data-test-selector": "amendment-modal-text-container"
                    }, l.createElement(u.Q, null, 'Please read and agree to the following addendum ("', l.createElement(u.Q, {
                        type: u._49.Span,
                        bold: !0
                    }, "Addendum"), '") to your Content License and Base Agreement (or Content License Agreement, as applicable) (the "', l.createElement(u.Q, {
                        type: u._49.Span,
                        bold: !0
                    }, "Agreement"), '") with Twitch in order to be eligible to earn revenue for certain purchases by a Twitch user that is viewing your Twitch channel. Twitch, in its sole discretion, may make specially-formatted links appear on your Twitch channel page (a "', l.createElement(u.Q, {
                        type: u._49.Span,
                        bold: !0
                    }, "Special Link"), '"), which would direct Twitch users to the purchase of a Product (as defined below). For every such purchase of a Product that is a Qualifying Purchase (as defined below), you will receive a fee (a "', l.createElement(u.Q, {
                        type: u._49.Span,
                        bold: !0
                    }, "Product Purchase Fee"), '") that will be calculated as a certain percentage as published by Twitch in the Supplemental Fees Statement, currently available at ', l.createElement("a", {
                        href: "https://www.twitch.tv/p/legal/supplemental-fees-statement/",
                        target: "_blank",
                        rel: "noopener noreferrer"
                    }, "https://www.twitch.tv/p/legal/supplemental-fees-statement/"), ' or a successor website (as may be updated from time to time) (the "', l.createElement(u.Q, {
                        type: u._49.Span,
                        bold: !0
                    }, "Supplemental Fees Statement"), '"), of (a) the purchase price of such Product, as such price was listed by Twitch at the time of the Qualifying Purchase and in the currency in which the Qualifying Purchase was made, less (b) any special discounts or promotions, taxes, service charges, rebates, payment processing fees (e.g. credit card processing fees) and any other related transaction and processing expenses. Calculation of and eligibility to receive Product Purchase Fees will be further subject to any limitations or clarifications set forth in the Supplemental Fees Statement.'), l.createElement(u.Q, null, '"', l.createElement(u.Q, {
                        type: u._49.Span,
                        bold: !0
                    }, "Product"), '" means a product that is set forth in the Supplemental Fees Statement and is associated with a program in which Twitch places Special Links.'), l.createElement(u.Q, null, 'A "', l.createElement(u.Q, {
                        type: u._49.Span,
                        bold: !0
                    }, "Qualifying Purchase"), '" of a Product occurs when: (a) a user of Twitch clicks through a Special Link on your Twitch channel page; (b) such user purchases a Product(s) sold by Twitch Interactive, Inc., or a related entity that is designated in the Supplemental Fees Statement as a relevant seller of record; and (c) Twitch receives a fully settled payment for the purchase by such user.'), l.createElement(u.Q, null, "If we pay you a Product Purchase Fee and later issue a refund or credit to the Twitch user for such Qualifying Purchase (or receive a chargeback related to the Qualifying Purchase), we may offset the amount of the Product Purchase Fee we previously paid you for such Qualifying Purchase against future Product Purchase Fees or other amounts that would otherwise be payable to you under the Agreement or this Addendum, or require you to remit that amount to us."), l.createElement(u.Q, null, "This Addendum is governed by and subject to the Agreement.  Capitalized terms used but not defined in this Addendum will have the meanings defined in the Agreement.  Except as amended by this Addendum, all other terms and conditions of the Agreement remain in full force and effect."))), l.createElement(u._8, {
                        padding: {
                            top: 2,
                            bottom: 2
                        }
                    }, l.createElement(u.Q, {
                        fontSize: u.V.Size4
                    }, Object(s.d)("Summary", "AmazonRetailOffersAmendmentModal")), l.createElement(u.Q, null, Object(s.d)("By accepting below, you may earn revenue for certain purchases by your viewers as described above.", "AmazonRetailOffersAmendmentModal"))), l.createElement(u._35, {
                        borderTop: !0,
                        display: u.R.Flex,
                        flexDirection: u.T.Row,
                        alignItems: u.c.Center,
                        justifyContent: u._7.Center,
                        padding: {
                            top: 2,
                            bottom: 1
                        }
                    }, l.createElement(u._8, {
                        margin: {
                            left: .5,
                            right: .5
                        }
                    }, l.createElement(u.v, {
                        "data-test-selector": "amendment-modal-cancel-button",
                        type: u.B.Text,
                        onClick: this.onClose
                    }, Object(s.d)("Cancel", "AmazonRetailOffersAmendmentModal"))), this.renderAcceptButton(this.props.amendmentAccepted)))
                }, t
            }(l.PureComponent),
            k = Object(c.a)(v, {
                name: "setAmendmentAcceptance"
            })(E),
            _ = (n("4mOb"), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    return l.createElement(u._35, {
                        className: "amendment-modal__container",
                        background: u.n.Base
                    }, l.createElement(k, {
                        "data-test-selector": "amendment-modal-selector",
                        trackingParameters: this.props.trackingParameters,
                        onClose: this.props.closeModal,
                        amendmentAccepted: this.props.amendmentAccepted
                    }))
                }, t
            }(l.Component));
        var b = Object(r.b)(null, function(e) {
            return Object(i.b)({
                closeModal: o.c
            }, e)
        })(_);
        var A = Object(r.b)(null, function(e) {
            return Object(i.b)({
                showAmendmentModal: function(e) {
                    var t = a.__rest(e, []);
                    return Object(o.d)(b, t)
                }
            }, e)
        })(g);
        n.d(t, "a", function() {
            return A
        })
    },
    KqsW: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return h
        });
        var a, r = n("TToO"),
            i = n("HW6M"),
            o = (n.n(i), n("GiK3")),
            l = (n.n(o), n("6sO2")),
            s = n("CSlQ"),
            c = n("Odds"),
            d = n("M4d4"),
            m = (n.n(d), "[data-js-selector=carousel-content]");
        ! function(e) {
            e.Previous = "previous", e.Next = "next"
        }(a || (a = {}));
        var u, p = ((u = {})[a.Previous] = c._25.AngleLeft, u[a.Next] = c._25.AngleRight, u),
            h = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        currentElementIndex: 0,
                        childrenRendered: !1,
                        windowWidth: window.innerWidth
                    }, t.onResize = function() {
                        t.setState({
                            windowWidth: window.innerWidth
                        })
                    }, t.moveCarouselForward = function() {
                        if (!t.isForwardButtonDisabled() && t.props.items) {
                            for (var e = t.getCarouselChildren(), n = t.getCarouselWidth(), a = t.state.currentElementIndex + 1, r = a; r < e.length; r++) {
                                if (e[r].getBoundingClientRect().right - t.getBaseOffset() > n) {
                                    a = r;
                                    break
                                }
                            }
                            t.setState({
                                currentElementIndex: a
                            })
                        }
                    }, t.moveCarouselBackward = function() {
                        if (!t.isBackButtonDisabled()) {
                            for (var e = t.getCarouselChildren(), n = t.getCarouselWidth(), a = t.state.currentElementIndex - 1, r = a - 1; r >= 0; r--) {
                                if (n < -1 * (e[r].getBoundingClientRect().left - t.getBaseOffset())) break;
                                a = r
                            }
                            t.setState({
                                currentElementIndex: a
                            })
                        }
                    }, t.isForwardButtonDisabled = function() {
                        if (!t.carouselContainerRef) return !0;
                        if (t.props.items) {
                            var e = t.getCarouselWidth(),
                                n = t.getCarouselChildren();
                            if (t.state.currentElementIndex >= n.length - 1) return !0;
                            var a = n[t.state.currentElementIndex].getBoundingClientRect().left;
                            if (n[n.length - 1].getBoundingClientRect().right - a > e) return !1
                        }
                        return !0
                    }, t.isBackButtonDisabled = function() {
                        return 0 === t.state.currentElementIndex
                    }, t.getCarouselChildren = function() {
                        if (!t.carouselContainerRef) return [];
                        var e = t.getCarouselSlider();
                        return e && e.children.length ? Array.prototype.slice.call(e.children) : []
                    }, t.getCarouselSlider = function() {
                        return t.carouselContainerRef.querySelector(m)
                    }, t.getCarouselWidth = function() {
                        return t.carouselContainerRef ? t.carouselContainerRef.getBoundingClientRect().width : 0
                    }, t.getBaseOffset = function() {
                        return t.carouselContainerRef ? t.carouselContainerRef.getBoundingClientRect().left : 0
                    }, t.getSliderOffset = function() {
                        if (!t.carouselContainerRef) return 0;
                        var e = t.getCarouselSlider();
                        return e ? e.getBoundingClientRect().left : 0
                    }, t.getChildOffset = function(e) {
                        var n = t.getCarouselChildren();
                        return 0 === n.length || n.length <= e ? 0 : n[e].getBoundingClientRect().left
                    }, t.transformString = function() {
                        return -1 * (t.getChildOffset(t.state.currentElementIndex) - t.getSliderOffset()) + "px"
                    }, t.refHandler = function(e) {
                        return t.state.childrenRendered || null === t.props.items || t.setState({
                            childrenRendered: !0
                        }), t.carouselContainerRef = e
                    }, t.renderNavButton = function(e, n, r) {
                        var s, d = ((s = {})[a.Previous] = Object(l.d)("previous", "MediaCarouselNavButton"), s[a.Next] = Object(l.d)("next", "MediaCarouselNavButton"), s),
                            m = i("media-carousel__button", {
                                "media-carousel__button--previous": e === a.Previous,
                                "media-carousel__button--next": e === a.Next,
                                "media-carousel__button--disabled": n
                            }, {
                                "media-carousel__button--inset": !0 === t.props.insetStyle
                            });
                        return o.createElement(c._8, {
                            className: m,
                            position: c._15.Relative,
                            display: c.R.Flex,
                            alignItems: c.c.Stretch
                        }, o.createElement(c.w, {
                            "data-test-selector": e + "-button",
                            "data-a-target": e + "-button",
                            onClick: r,
                            disabled: n,
                            ariaLabel: d[e],
                            icon: p[e],
                            size: c.x.Large
                        }))
                    }, t
                }
                return r.__extends(t, e), t.prototype.componentDidUpdate = function() {
                    this.state.childrenRendered || null === this.props.items || this.setState({
                        childrenRendered: !0
                    })
                }, t.prototype.componentDidMount = function() {
                    window.addEventListener("resize", this.onResize)
                }, t.prototype.componentWillUnmount = function() {
                    window.removeEventListener("resize", this.onResize)
                }, t.prototype.render = function() {
                    return o.createElement(c._2, r.__assign({}, this.props, {
                        position: c._15.Relative
                    }), o.createElement("div", {
                        className: "media-carousel",
                        ref: this.refHandler,
                        "data-test-selector": "carousel-container"
                    }, o.createElement(c._8, {
                        className: "media-carousel__child-container",
                        overflow: c._11.Hidden,
                        fullWidth: !0,
                        "data-test-selector": "child-container"
                    }, o.createElement("div", {
                        className: "media-carousel__body",
                        style: {
                            marginLeft: this.transformString()
                        },
                        "data-test-selector": "carousel-body"
                    }, o.createElement(c._2, {
                        className: "media-carousel__content",
                        display: c.R.Flex,
                        flexWrap: c.U.NoWrap,
                        flexDirection: c.T.Row,
                        alignItems: c.c.Center,
                        "data-js-selector": "carousel-content"
                    }, o.createElement("div", {
                        style: {
                            width: "max-content"
                        }
                    }, this.props.items)))), o.createElement(c._8, {
                        className: "media-carousel__nav",
                        display: c.R.Flex,
                        alignItems: c.c.Center,
                        position: c._15.Absolute,
                        attachTop: !0,
                        attachLeft: !0,
                        fullHeight: !0
                    }, this.renderNavButton(a.Previous, !this.state.childrenRendered || this.isBackButtonDisabled(), this.moveCarouselBackward)), o.createElement(c._8, {
                        className: "media-carousel__nav",
                        display: c.R.Flex,
                        alignItems: c.c.Center,
                        position: c._15.Absolute,
                        attachTop: !0,
                        attachRight: !0,
                        fullHeight: !0
                    }, this.renderNavButton(a.Next, !this.state.childrenRendered || this.isForwardButtonDisabled(), this.moveCarouselForward))))
                }, t = r.__decorate([Object(s.d)("MediaCarousel", {
                    autoReportInteractive: !0
                })], t)
            }(o.Component)
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
    M4d4: function(e, t) {},
    OjIq: function(e, t, n) {
        "use strict";
        var a = n("GiK3"),
            r = n("Odds"),
            i = function(e) {
                var t = null;
                return e.title && (t = a.createElement(r._8, {
                    padding: {
                        bottom: 1
                    }
                }, a.createElement(r.Q, {
                    fontSize: r.V.Size6,
                    color: e.error ? r.K.Error : r.K.Base,
                    bold: !0
                }, e.title))), a.createElement(r._35, {
                    padding: 2,
                    borderTop: !0
                }, t, e.children, e.errorMessage && a.createElement(r.Q, {
                    color: r.K.Error,
                    fontSize: r.V.Size7
                }, e.errorMessage))
            };
        n.d(t, "a", function() {
            return i
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
            r = n("GiK3"),
            i = n("6sO2"),
            o = n("7vx8"),
            l = n("jF7o"),
            s = n("HW2d"),
            c = n("Jo6h"),
            d = n("Odds"),
            m = n("LHN4"),
            u = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.renderButtonText = function(e) {
                        return e ? Object(i.d)("Edit", "AmazonRetailAssociatesAccountLinking") : Object(i.d)("Get Started", "AmazonRetailAssociatesAccountLinking")
                    }, t.renderDescriptionText = function(e) {
                        return e ? Object(i.d)("Link to {storeID}", {
                            storeID: r.createElement(d.Q, {
                                type: d._49.Span,
                                bold: !0
                            }, e)
                        }, "AmazonRetailAssociatesAccountLinking") : Object(i.d)("Create and link an Amazon Associates account to your Twitch account. Only one Amazon account may be linked at any one time.", "AmazonRetailAssociatesAccountLinking")
                    }, t.launchLinkAccount = function(e) {
                        e.preventDefault();
                        var n = "https://twitch.amazon.com/associates/register",
                            a = t.props.data.user && t.props.data.user.roles,
                            r = t.props.data.user && t.props.data.user.amazon.associatesStore.storeID,
                            i = s.c.NONE,
                            o = s.a.NONE;
                        a && (i = a.isPartner ? s.c.PARTNER : a.isAffiliate ? s.c.AFFILIATE : s.c.NONE), r && (o = s.a.LINKED), t.launchPopup(n), Object(s.d)({
                            action: r ? s.b.LinkAccountEdit : s.b.LinkAccountGetStarted,
                            channel: t.props.channelName,
                            channel_id: t.props.data.user && t.props.data.user.id,
                            partner_status: i,
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
                        n && (n.focus(), Object(l.a)(n, function() {
                            t.props.data.refetch && t.props.data.refetch()
                        }))
                    }, t
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    var e = null,
                        t = !1;
                    return this.props.data.user && this.props.data.user.amazon && this.props.data.user.amazon.associatesStore && (e = this.props.data.user.amazon.associatesStore.storeID, t = this.props.data.user.amazon.associatesStore.isPayoutEnabled), r.createElement(r.Fragment, null, r.createElement(c.a, {
                        orientation: d.X.Horizontal,
                        label: Object(i.d)("Link an Amazon Associates Account", "AmazonRetailAssociatesAccountLinking")
                    }, r.createElement(d.Q, {
                        "data-test-selector": "amazon-associates-account-linking-setup-text"
                    }, this.renderDescriptionText(e || null)), r.createElement(d._8, {
                        padding: {
                            top: .5
                        }
                    }, r.createElement(d.v, {
                        "data-test-selector": "amazon-associates-account-linking-setup-button",
                        onClick: this.launchLinkAccount
                    }, this.renderButtonText(e || null)))), r.createElement(c.a, {
                        orientation: d.X.Horizontal,
                        label: Object(i.d)("Receive payments from Amazon.com", "AmazonRetailAssociatesAccountLinking")
                    }, !(!e || t) && r.createElement(d.Q, {
                        color: d.K.Error,
                        "data-test-selector": "amazon-associates-account-linking-tax-info-error"
                    }, Object(i.d)("You must complete your tax and payment forms before you will receive any payments.", "AmazonRetailAssociatesAccountLinking")), r.createElement(d.Q, null, Object(i.d)("To receive payments, please provide your <x:tax>Tax Information</x:tax> and your <x:payment>Payment Information</x:payment>. Note, changes made to your Tax Information must be made by the primary account holder and any changes after the 15th will go into effect the following month. Please ignore this message if you have already submitted your information.", {
                        "x:tax": function(e) {
                            return r.createElement(d.Q, {
                                key: "tax",
                                type: d._49.Span,
                                bold: !0,
                                decoration: d._47.Underline
                            }, e)
                        },
                        "x:payment": function(e) {
                            return r.createElement(d.Q, {
                                key: "payment",
                                type: d._49.Span,
                                bold: !0,
                                decoration: d._47.Underline
                            }, e)
                        }
                    }, "AmazonRetailAssociatesAccountLinking")), r.createElement(d._8, {
                        padding: {
                            top: 1
                        }
                    }, r.createElement(d._2, {
                        padding: {
                            right: 2
                        }
                    }, r.createElement("a", {
                        href: "#",
                        onClick: this.launchAssociatesAccount
                    }, Object(i.d)("Add/update tax information", "AmazonRetailAssociatesAccountLinking"))), r.createElement(d._2, {
                        padding: {
                            right: 2
                        }
                    }, r.createElement("a", {
                        href: "#",
                        onClick: this.launchAssociatesAccount
                    }, Object(i.d)("Add/update payment information", "AmazonRetailAssociatesAccountLinking"))), r.createElement("a", {
                        href: "#",
                        onClick: this.launchAssociatesReporting
                    }, Object(i.d)("Reporting", "AmazonRetailAssociatesAccountLinking")))))
                }, t
            }(r.Component),
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
    },
    yMnN: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = n("GiK3"),
            r = n("CIox"),
            i = n("F8kA"),
            o = n("6sO2"),
            l = n("zCIC"),
            s = n("w9tK"),
            c = n("CSlQ"),
            d = n("TToO"),
            m = n("Odds"),
            u = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.loadMoreA = function() {
                        return n.setState({
                            loadingA: !0
                        }), new Promise(function(e) {
                            setTimeout(function() {
                                n.setState({
                                    loadingA: !1,
                                    colA: n.state.colA + 2
                                }), e()
                            }, 3e3)
                        })
                    }, n.loadMoreB = function() {
                        return new Promise(function(e) {
                            n.setState({
                                loadingB: !0
                            }), setTimeout(function() {
                                n.setState({
                                    loadingB: !1,
                                    colB: n.state.colB + 5
                                }), e()
                            }, 2e3)
                        })
                    }, n.state = {
                        colA: 5,
                        loadingA: !1,
                        colB: 6,
                        loadingB: !1
                    }, n
                }
                return d.__extends(t, e), t.prototype.render = function() {
                    for (var e = [], t = 0; t < this.state.colA; t++) e.push(a.createElement(m._8, {
                        key: t,
                        display: m.R.Flex,
                        flexWrap: m.U.NoWrap,
                        margin: 1
                    }, a.createElement(m._8, {
                        margin: {
                            right: 1
                        }
                    }, a.createElement(m._14, {
                        height: 90,
                        width: 90
                    })), a.createElement(m._8, null, a.createElement(m._14, {
                        width: 300,
                        lineCount: 3
                    }))));
                    var n = [];
                    for (t = 0; t < this.state.colB; t++) n.push(a.createElement(m._8, {
                        key: t,
                        display: m.R.Flex,
                        flexWrap: m.U.NoWrap,
                        margin: 1
                    }, a.createElement(m._8, {
                        margin: {
                            right: 1
                        }
                    }, a.createElement(m._14, {
                        height: 90,
                        width: 90
                    })), a.createElement(m._8, null, a.createElement(m._14, {
                        width: 300,
                        lineCount: 3
                    }))));
                    var r = {
                        border: "solid 3px",
                        borderColor: this.state.loadingA || this.state.loadingB ? "yellow" : "green",
                        height: "500px"
                    };
                    return a.createElement("div", {
                        style: r
                    }, a.createElement(l.b, null, a.createElement(m._8, {
                        display: m.R.Flex,
                        flexWrap: m.U.NoWrap
                    }, a.createElement(m._8, {
                        margin: {
                            right: 1
                        }
                    }, e, this.state.loadingA && a.createElement(m._8, null, a.createElement(m._10, {
                        fillContent: !0
                    })), a.createElement(l.a, {
                        enabled: !0,
                        loadMore: this.loadMoreA,
                        pixelThreshold: 0
                    })), a.createElement(m._8, null, n, this.state.loadingB && a.createElement(m._8, null, a.createElement(m._10, {
                        fillContent: !0
                    })), a.createElement(l.a, {
                        contentLength: n.length,
                        enabled: !0,
                        loadMore: this.loadMoreB,
                        pixelThreshold: 100
                    })))))
                }, t
            }(a.Component),
            p = Object(c.d)("DevOnlyPage", {
                destination: s.a.DevOnly,
                autoReportInteractive: !0
            })(function() {
                return a.createElement(l.b, null, a.createElement("div", {
                    style: {
                        margin: "0 2rem"
                    }
                }, a.createElement("h1", {
                    style: {
                        margin: "2rem 0"
                    }
                }, "The Dev only page!"), a.createElement("p", null, "This page is only included in development. Use it for testing all the things that need testing."), a.createElement("h2", {
                    style: {
                        margin: "2rem 0"
                    }
                }, " Logging and error reporting"), a.createElement("div", null, a.createElement(m.v, {
                    onClick: h
                }, "Log a debug-level message"), " ", a.createElement(m.v, {
                    onClick: g
                }, "Log a info-level message"), " ", a.createElement(m.v, {
                    onClick: f
                }, "Log a warning-level message"), " ", a.createElement(m.v, {
                    onClick: y
                }, "Log an error-level message with error"), " ", a.createElement(m.v, {
                    onClick: E
                }, "Log a fatal-level message with error"), " ", a.createElement(m.v, {
                    onClick: v
                }, "Log message with unserializable argument"), " ", a.createElement(m.v, {
                    onClick: k
                }, "Throw an error")), a.createElement("h2", {
                    style: {
                        margin: "2rem 0"
                    }
                }, " Dynamic Settings"), a.createElement("ul", null, a.createElement("li", null, a.createElement("pre", null, "environment = ", JSON.stringify(o.b.get("environment", "<not set>")))), a.createElement("li", null, a.createElement("pre", null, "env_test = ", JSON.stringify(o.b.get("env_test", "<not set>")))), a.createElement("li", null, a.createElement("pre", null, "totally_invalid_key = ", JSON.stringify(o.b.get("totally_invalid_key", "<default value>")))), a.createElement("li", null, a.createElement("pre", null, "experiments (hidden) = ", JSON.stringify(o.b.get("experiments", "<default value>"))))), a.createElement("h2", {
                    style: {
                        margin: "2rem 0"
                    }
                }, " Link tests"), a.createElement("ul", null, a.createElement("li", null, a.createElement(i.a, {
                    to: "/_dev"
                }, "Full path")), a.createElement("li", null, a.createElement(i.a, {
                    to: "/_dev?qs"
                }, "Full path, query string")), a.createElement("li", null, a.createElement(i.a, {
                    to: "/_dev#hash"
                }, "Full path, hash")), a.createElement("li", null, a.createElement(i.a, {
                    to: "/_dev?qs#hash"
                }, "Full path, query string, hash")), a.createElement("li", null, a.createElement(i.a, {
                    to: "_dev"
                }, "Relative (identical) path")), a.createElement("li", null, a.createElement(i.a, {
                    to: "_dev?qs"
                }, "Relative path, query string")), a.createElement("li", null, a.createElement(i.a, {
                    to: "_dev#hash"
                }, "Relative path, hash")), a.createElement("li", null, a.createElement(i.a, {
                    to: "_dev?qs#hash"
                }, "Relative path, query string, hash")), a.createElement("li", null, a.createElement(i.a, {
                    to: "?qs"
                }, "Query string")), a.createElement("li", null, a.createElement(i.a, {
                    to: "#hash"
                }, "Hash")), a.createElement("li", null, a.createElement(i.a, {
                    to: "?qs#hash"
                }, "Query string and hash")), a.createElement("li", null, a.createElement(i.a, {
                    to: {
                        pathname: "/_dev"
                    }
                }, "Location with pathname")), a.createElement("li", null, a.createElement(i.a, {
                    to: {
                        pathname: "_dev"
                    }
                }, "Location with relative (identical) pathname")), a.createElement("li", null, a.createElement(i.a, {
                    to: {
                        search: "?qs"
                    }
                }, "Location with query string")), a.createElement("li", null, a.createElement(i.a, {
                    to: {
                        hash: "hash"
                    }
                }, "Location with hash")), a.createElement("li", null, a.createElement(i.a, {
                    to: "/pondelinp?foo=bar&tt_content=content&tt_medium=medium&tt_foo=extrafoo"
                }, "URL with query parameters, including tt_codes")), a.createElement("li", null, a.createElement(i.a, {
                    to: {
                        pathname: "/pondelinp",
                        state: {
                            content: "content",
                            medium: "medium"
                        }
                    }
                }, "Internal Link with location state, including tt_codes")), a.createElement("li", null, a.createElement(i.a, {
                    to: "/adamar/dashboard"
                }, "Legacy Link (dashbaord)"))), a.createElement(m._8, {
                    margin: {
                        top: 2
                    }
                }, a.createElement(m.Q, {
                    type: m._49.H2
                }, " Infinite Scroll Test"), a.createElement(u, null))))
            });

        function h() {
            o.j.debug("debug message")
        }

        function g() {
            o.j.info("info message")
        }

        function f() {
            o.j.warn("warn message")
        }

        function v() {
            var e = {};
            e.self = e, o.j.info("Can't serialize this arg, oh no.", e)
        }

        function y() {
            try {
                throw new Error("throwing an error.")
            } catch (e) {
                o.j.error(e, "Artisanal error handling.")
            }
        }

        function E() {
            try {
                throw new Error("throwing a super bad unrecoverable error.")
            } catch (e) {
                o.j.fatal(e, "Superb fatal error handling.")
            }
        }

        function k() {
            throw new Error("Throwing an uncaught error.")
        }
        var _ = n("j0yR"),
            b = n("K+dm"),
            A = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return d.__extends(t, e), t.prototype.render = function() {
                    return a.createElement(m._8, {
                        padding: 3
                    }, a.createElement(m.Q, {
                        type: m._49.H2
                    }, "Amazon Retail Offers Amendment v2"), a.createElement(m._8, {
                        margin: {
                            y: 2
                        }
                    }, a.createElement(b.a, {
                        channelName: this.props.match.params.channelName
                    }), a.createElement(_.a, {
                        channelName: this.props.match.params.channelName
                    })))
                }, t
            }(a.Component),
            S = n("KqsW"),
            N = (n("G+DA"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {}, t
                }
                return d.__extends(t, e), t.prototype.render = function() {
                    return a.createElement(l.b, null, a.createElement(m._8, {
                        className: "testing-carousel",
                        padding: 3
                    }, a.createElement(m.Q, {
                        type: m._49.H2
                    }, "Media Carousel - Standard"), a.createElement(m._8, {
                        "data-a-target": "carousel-standard"
                    }, a.createElement(m._2, {
                        margin: {
                            bottom: 3,
                            top: 1
                        }
                    }, a.createElement(S.a, {
                        items: this.renderStandardItems()
                    }))), a.createElement(m.Q, {
                        type: m._49.H2
                    }, "Media Carousel - Tiny"), a.createElement(m._8, {
                        "data-a-target": "carousel-standard-tiny"
                    }, a.createElement(m._2, {
                        margin: {
                            bottom: 3,
                            top: 1
                        }
                    }, a.createElement(S.a, {
                        items: this.renderStandardTinyItems()
                    }))), a.createElement(m.Q, {
                        type: m._49.H2
                    }, "Media Carousel - HUGE"), a.createElement(m._8, {
                        "data-a-target": "carousel-standard-huge"
                    }, a.createElement(m._2, {
                        margin: {
                            bottom: 3,
                            top: 1
                        }
                    }, a.createElement(S.a, {
                        items: this.renderStandardHugeItems()
                    }))), a.createElement(m.Q, {
                        type: m._49.H2
                    }, "Media Carousel - Single"), a.createElement(m._8, {
                        "data-a-target": "carousel-single"
                    }, a.createElement(m._2, {
                        margin: {
                            bottom: 3,
                            top: 1
                        }
                    }, a.createElement(S.a, {
                        items: this.renderSingleItem()
                    }))), a.createElement(m.Q, {
                        type: m._49.H2
                    }, "Media Carousel - Single and HUGE"), a.createElement(m._8, {
                        "data-a-target": "carousel-single-huge"
                    }, a.createElement(m._2, {
                        margin: {
                            bottom: 3,
                            top: 1
                        }
                    }, a.createElement(S.a, {
                        items: this.renderSingleHugeItem()
                    }))), a.createElement(m.Q, {
                        type: m._49.H2
                    }, "Media Carousel - Various Widths"), a.createElement(m._8, {
                        "data-a-target": "carousel-various-widths"
                    }, a.createElement(m._2, {
                        margin: {
                            bottom: 3,
                            top: 1
                        }
                    }, a.createElement(S.a, {
                        items: this.renderVariousWidthItems()
                    })))))
                }, t.prototype.renderStandardItems = function() {
                    return [0, 1, 2, 3, 4, 5, 6, 7, 8].map(function(e) {
                        return a.createElement(m._8, {
                            key: "placeholder-" + e,
                            padding: {
                                right: 2
                            },
                            "data-a-target": "standard-item-" + e
                        }, a.createElement("div", {
                            className: "testing-carousel__item",
                            style: {
                                width: 200,
                                height: 100
                            }
                        }, a.createElement(m.Q, {
                            type: m._49.H1,
                            color: m.K.Overlay
                        }, e)))
                    })
                }, t.prototype.renderStandardTinyItems = function() {
                    return [0, 1, 2].map(function(e) {
                        return a.createElement(m._8, {
                            key: "placeholder-" + e,
                            padding: {
                                right: 2
                            },
                            "data-a-target": "standard-tiny-item-" + e
                        }, a.createElement("div", {
                            className: "testing-carousel__item",
                            style: {
                                width: 20,
                                height: 100
                            }
                        }, a.createElement(m.Q, {
                            type: m._49.H1,
                            color: m.K.Overlay
                        }, e)))
                    })
                }, t.prototype.renderStandardHugeItems = function() {
                    return [0, 1, 2, 3, 4, 5, 6, 7, 8].map(function(e) {
                        return a.createElement(m._8, {
                            key: "placeholder-" + e,
                            padding: {
                                right: 2
                            },
                            "data-a-target": "standard-huge-item-" + e
                        }, a.createElement("div", {
                            className: "testing-carousel__item",
                            style: {
                                width: 2e3,
                                height: 100
                            }
                        }, a.createElement(m.Q, {
                            type: m._49.H1,
                            color: m.K.Overlay
                        }, e)))
                    })
                }, t.prototype.renderSingleItem = function() {
                    return [0].map(function(e) {
                        return a.createElement(m._8, {
                            key: "placeholder-" + e,
                            padding: {
                                right: 2
                            },
                            "data-a-target": "single-item-" + e
                        }, a.createElement("div", {
                            className: "testing-carousel__item",
                            style: {
                                width: 200,
                                height: 100
                            }
                        }, a.createElement(m.Q, {
                            type: m._49.H1,
                            color: m.K.Overlay
                        }, e)))
                    })
                }, t.prototype.renderSingleHugeItem = function() {
                    return [0].map(function(e) {
                        return a.createElement(m._8, {
                            key: "placeholder-" + e,
                            padding: {
                                right: 2
                            },
                            "data-a-target": "single-huge-item-" + e
                        }, a.createElement("div", {
                            className: "testing-carousel__item",
                            style: {
                                width: 2e3,
                                height: 100
                            }
                        }, a.createElement(m.Q, {
                            type: m._49.H1,
                            color: m.K.Overlay
                        }, e)))
                    })
                }, t.prototype.renderVariousWidthItems = function() {
                    return [0, 1, 2, 3, 4, 5, 6, 7, 8].map(function(e) {
                        return a.createElement(m._8, {
                            key: "placeholder-" + e,
                            padding: {
                                right: 2
                            },
                            "data-a-target": "various-width-item-" + e
                        }, a.createElement("div", {
                            className: "testing-carousel__item",
                            style: {
                                width: 30 * (e + 1),
                                height: 100
                            }
                        }, a.createElement(m.Q, {
                            type: m._49.H1,
                            color: m.K.Overlay
                        }, e)))
                    })
                }, t
            }(a.Component)),
            w = n("2KeS"),
            C = n("UvtE"),
            O = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.state = {
                        consentRecord: [t.gdpr.consentGiven]
                    }, n
                }
                return d.__extends(t, e), t.prototype.componentWillReceiveProps = function(e) {
                    this.setState(function(t) {
                        return {
                            consentRecord: t.consentRecord.concat([e.gdpr.consentGiven])
                        }
                    })
                }, t.prototype.render = function() {
                    var e = window.location.search.includes("gdpr_override"),
                        t = Object(C.a)(),
                        n = e || t;
                    return a.createElement(m._8, {
                        padding: 2
                    }, a.createElement(m.Q, {
                        fontSize: m.V.Size2
                    }, "GDPR Consent"), a.createElement(m.Q, null, "Testing our withGDPRConsent HOC. Each prop update will render the current GDPRConsent value in the section below."), a.createElement(m._8, {
                        margin: {
                            y: 2
                        }
                    }, a.createElement(m.Q, {
                        fontSize: m.V.Size4
                    }, n ? "Enabled" : "Disabled"), a.createElement(m.Q, {
                        color: e ? m.K.Base : m.K.Error
                    }, "Query String: ?gdpr_override"), a.createElement(m.Q, {
                        color: t ? m.K.Base : m.K.Error
                    }, "Dynamic Settings: gdpr_consent_enabled")), a.createElement(m._35, {
                        padding: {
                            y: 1
                        },
                        borderTop: !0,
                        borderBottom: !0,
                        flexDirection: m.T.Row,
                        display: m.R.Flex
                    }, this.state.consentRecord.map(function(e, t) {
                        return a.createElement(m._35, {
                            border: !0,
                            margin: {
                                right: 1
                            },
                            key: t,
                            padding: 1
                        }, a.createElement(m.Q, {
                            fontSize: m.V.Size4
                        }, e ? "Consent" : "No Consent"))
                    })), e && a.createElement(m._8, {
                        margin: {
                            top: 1
                        }
                    }, a.createElement(m.Q, {
                        italic: !0
                    }, "The query param override is enabled, which means you will see the consent notice even if you are not in an EEA country."), a.createElement(m.Q, {
                        italic: !0
                    }, "Use the dynamic settings override instead to simulate the scenario where our consent solution determines you do not need to see the notice since you are not in an EEA country.")))
                }, t
            }(a.Component),
            R = Object(w.d)(Object(c.d)("GDPRTestPage", {
                autoReportInteractive: !0,
                destination: s.a.Unknown
            }), Object(C.b)())(O),
            x = n("3zLD"),
            T = n("7vx8"),
            z = n("z7vJ"),
            F = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return d.__extends(t, e), t.prototype.render = function() {
                    return a.createElement("div", {
                        style: {
                            margin: "0 2rem"
                        }
                    }, a.createElement("p", null, "Testing GraphQL"))
                }, t
            }(a.Component),
            L = Object(x.compose)(Object(T.a)(z, {
                options: function(e) {
                    return {
                        variables: {
                            shouldSkip: e.shouldSkip
                        }
                    }
                }
            }), i.f)(F),
            P = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        shouldSkip: !0
                    }, t
                }
                return d.__extends(t, e), t.prototype.componentDidMount = function() {
                    var e = this;
                    setTimeout(function() {
                        return e.setState({
                            shouldSkip: !1
                        }, function() {
                            return setTimeout(function() {
                                return e.setState({
                                    shouldSkip: !0
                                })
                            }, 1e3)
                        })
                    }, 1e3)
                }, t.prototype.render = function() {
                    return a.createElement(L, {
                        shouldSkip: this.state.shouldSkip
                    })
                }, t
            }(a.Component),
            I = n("9u8h"),
            j = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.logger = o.o.logger.withCategory("legacy-api-test"), t.testFailingAPICall = function() {
                        return d.__awaiter(t, void 0, void 0, function() {
                            var e, t;
                            return d.__generator(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        return n.trys.push([0, 2, , 3]), [4, I.a.getOrThrow("/v5/some-bad-route/test.json")];
                                    case 1:
                                        return e = n.sent(), this.logger.debug("API success for a bad route", {
                                            response: e
                                        }), [3, 3];
                                    case 2:
                                        return t = n.sent(), this.logger.error(t, "API failure caught"), [3, 3];
                                    case 3:
                                        return [2]
                                }
                            })
                        })
                    }, t
                }
                return d.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.testFailingAPICall()
                }, t.prototype.render = function() {
                    return a.createElement("div", {
                        style: {
                            margin: "0 2rem"
                        }
                    }, a.createElement("p", null, "Testing LegacyAPI"))
                }, t
            }(a.Component),
            Q = function() {
                return a.createElement(r.e, null, a.createElement(r.c, {
                    path: "/_dev/gql",
                    component: P
                }), a.createElement(r.c, {
                    path: "/_dev/gdpr",
                    component: R
                }), a.createElement(r.c, {
                    path: "/_dev/legacy-api",
                    component: j
                }), a.createElement(r.c, {
                    path: "/_dev/testing/carousel",
                    component: N
                }), "}", a.createElement(r.c, {
                    path: "/_dev/testing/amazon-offers/:channelName",
                    component: A
                }), "}", a.createElement(r.c, {
                    path: "/_dev",
                    component: p
                }))
            };
        n.d(t, "DevOnlyRoot", function() {
            return Q
        })
    },
    z7vJ: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "Dev_Only_GQL"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "shouldSkip"
                        }
                    },
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "Boolean"
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
                            }]
                        }
                    }, {
                        kind: "Field",
                        alias: {
                            kind: "Name",
                            value: "includeUser"
                        },
                        name: {
                            kind: "Name",
                            value: "currentUser"
                        },
                        arguments: [],
                        directives: [{
                            kind: "Directive",
                            name: {
                                kind: "Name",
                                value: "include"
                            },
                            arguments: [{
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "if"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "shouldSkip"
                                    }
                                }
                            }]
                        }],
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
                        alias: {
                            kind: "Name",
                            value: "skipUser"
                        },
                        name: {
                            kind: "Name",
                            value: "currentUser"
                        },
                        arguments: [],
                        directives: [{
                            kind: "Directive",
                            name: {
                                kind: "Name",
                                value: "skip"
                            },
                            arguments: [{
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "if"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "shouldSkip"
                                    }
                                }
                            }]
                        }],
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
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 174
            }
        };
        n.loc.source = {
            body: "query Dev_Only_GQL($shouldSkip: Boolean!) {\ncurrentUser {\nid\n}\nincludeUser: currentUser @include(if: $shouldSkip) {\nid\n}\nskipUser: currentUser @skip(if: $shouldSkip) {\nid\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    }
});
//# sourceMappingURL=pages.dev-only-7607ae895f162797d3637aa353ee624b.js.map