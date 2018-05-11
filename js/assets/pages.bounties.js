webpackJsonp([112], {
    "1zmE": function(e, t, n) {
        var a = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "BountiesPage"
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
                                alias: {
                                    kind: "Name",
                                    value: "availableBounties"
                                },
                                name: {
                                    kind: "Name",
                                    value: "bounties"
                                },
                                arguments: [{
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "status"
                                    },
                                    value: {
                                        kind: "StringValue",
                                        value: "AVAILABLE",
                                        block: !1
                                    }
                                }],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "FragmentSpread",
                                        name: {
                                            kind: "Name",
                                            value: "bounty"
                                        },
                                        directives: []
                                    }]
                                }
                            }, {
                                kind: "Field",
                                alias: {
                                    kind: "Name",
                                    value: "liveBounties"
                                },
                                name: {
                                    kind: "Name",
                                    value: "bounties"
                                },
                                arguments: [{
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "status"
                                    },
                                    value: {
                                        kind: "StringValue",
                                        value: "LIVE",
                                        block: !1
                                    }
                                }],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "FragmentSpread",
                                        name: {
                                            kind: "Name",
                                            value: "bounty"
                                        },
                                        directives: []
                                    }]
                                }
                            }, {
                                kind: "Field",
                                alias: {
                                    kind: "Name",
                                    value: "completedBounties"
                                },
                                name: {
                                    kind: "Name",
                                    value: "bounties"
                                },
                                arguments: [{
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "status"
                                    },
                                    value: {
                                        kind: "StringValue",
                                        value: "COMPLETED",
                                        block: !1
                                    }
                                }],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "FragmentSpread",
                                        name: {
                                            kind: "Name",
                                            value: "bounty"
                                        },
                                        directives: []
                                    }]
                                }
                            }, {
                                kind: "Field",
                                alias: {
                                    kind: "Name",
                                    value: "cancelledBounties"
                                },
                                name: {
                                    kind: "Name",
                                    value: "bounties"
                                },
                                arguments: [{
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "status"
                                    },
                                    value: {
                                        kind: "StringValue",
                                        value: "CANCELLED",
                                        block: !1
                                    }
                                }],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "FragmentSpread",
                                        name: {
                                            kind: "Name",
                                            value: "bounty"
                                        },
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
                end: 363
            }
        };
        a.loc.source = {
            body: '#import "twilight/features/bounties/models/bounty.gql"\nquery BountiesPage($login: String!) {\nuser(login: $login) {\nid\navailableBounties: bounties(status: "AVAILABLE") {\n...bounty\n}\nliveBounties: bounties(status: "LIVE") {\n...bounty\n}\ncompletedBounties: bounties(status: "COMPLETED") {\n...bounty\n}\ncancelledBounties: bounties(status: "CANCELLED") {\n...bounty\n}\n}\n}',
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        var r = {};
        a.definitions = a.definitions.concat(n("R0Dv").definitions.filter(function(e) {
            if ("FragmentDefinition" !== e.kind) return !0;
            var t = e.name.value;
            return !r[t] && (r[t] = !0, !0)
        })), e.exports = a
    },
    EOq4: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a, r, o, i = n("TToO"),
            l = n("GiK3"),
            s = n("2KeS"),
            c = n("6sO2"),
            u = n("yWCw"),
            d = n("7vx8"),
            m = n("j7/Y"),
            h = n("oIkB"),
            p = n("HM6l"),
            y = n("w9tK"),
            b = n("vH/s"),
            f = n("CSlQ");
        ! function(e) {
            e.BOUNTY_ALREADY_CLAIMED = "BOUNTY_ALREADY_CLAIMED", e.BOUNTY_LIMIT_REACHED = "BOUNTY_LIMIT_REACHED", e.INVALID_PARAMETER = "INVALID_PARAMETER", e.UNKNOWN_ERROR = "UNKNOWN_ERROR"
        }(a || (a = {})),
        function(e) {
            e.PAY_TO_STREAM = "PAY_TO_STREAM"
        }(r || (r = {})),
        function(e) {
            e.AVAILABLE = "AVAILABLE", e.CANCELLED = "CANCELLED", e.COMPLETED = "COMPLETED", e.LIVE = "LIVE"
        }(o || (o = {}));
        var g, E, v = n("RH2O"),
            _ = n("V5M+"),
            w = n("Odds");
        ! function(e) {
            e.AVAILABLE = "AVAILABLE", e.CANCELLED = "CANCELLED", e.COMPLETED = "COMPLETED", e.LIVE = "LIVE"
        }(g || (g = {})), (E || (E = {})).PAY_TO_STREAM = "PAY_TO_STREAM";
        var B = n("Is0m"),
            k = function(e) {
                function t() {
                    var t, n = null !== e && e.apply(this, arguments) || this;
                    return n.state = {
                        errorCode: null
                    }, n.bountyErrorCodeToMessage = ((t = {})[a.BOUNTY_LIMIT_REACHED] = Object(c.d)("You have already reached your limit of active bounties. Please complete or cancel an active bounty before activating a new one.", "AcceptBountyModal"), t[a.BOUNTY_ALREADY_CLAIMED] = Object(c.d)("Oops, it looks like this bounty is no longer available.", "AcceptBountyModal"), t.default = Object(c.d)("Something went wrong and the bounty could not be activated.", "AcceptBountyModal"), t), n.onClose = function() {
                        n.state.errorCode && n.props.refreshData(), n.props.onClose()
                    }, n.onAccept = function() {
                        return i.__awaiter(n, void 0, void 0, function() {
                            var e, t, n;
                            return i.__generator(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        e = null, r.label = 1;
                                    case 1:
                                        return r.trys.push([1, 3, 4, 5]), t = {
                                            bountyID: this.props.bounty.id,
                                            bountyCampaignID: this.props.bounty.campaign.id,
                                            userID: this.props.channelID
                                        }, [4, this.props.claimBounty(Object(h.a)(t))];
                                    case 2:
                                        return (n = r.sent()).data.claimBounty && n.data.claimBounty.error ? e = n.data.claimBounty.error.code : n.data.claimBounty && n.data.claimBounty.claimedBounty && this.props.handleBountyStatusChanged(n.data.claimBounty.claimedBounty), [3, 5];
                                    case 3:
                                        return r.sent(), e = a.UNKNOWN_ERROR, [3, 5];
                                    case 4:
                                        return e ? this.setState({
                                            errorCode: e
                                        }) : this.props.onClose(), [7];
                                    case 5:
                                        return [2]
                                }
                            })
                        })
                    }, n.getMessageFromErrorCode = function(e) {
                        return n.bountyErrorCodeToMessage[e || "default"] || n.bountyErrorCodeToMessage.default
                    }, n
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    var e = this.props.bounty.campaign.game && this.props.bounty.campaign.game.boxArtURL || "",
                        t = null;
                    return this.state.errorCode && (t = l.createElement(w._8, {
                        "data-test-selector": "accept-bounty-modal-error-message",
                        padding: {
                            bottom: 2
                        },
                        margin: {
                            right: .5
                        },
                        textAlign: w._45.Right,
                        fullWidth: !0,
                        flexShrink: 0
                    }, l.createElement(w.Q, {
                        color: w.K.Error
                    }, this.getMessageFromErrorCode(this.state.errorCode)))), l.createElement(w._8, {
                        padding: 3
                    }, l.createElement(w._8, {
                        display: w.R.Flex,
                        flexDirection: w.T.Row,
                        flexWrap: w.U.NoWrap,
                        fullWidth: !0,
                        margin: {
                            bottom: 2
                        }
                    }, l.createElement(w._8, {
                        className: "accept-bounty-modal__boxart"
                    }, l.createElement(w.k, {
                        ratio: w.l.BoxArt
                    }, l.createElement("img", {
                        src: e
                    }))), l.createElement(w._8, {
                        margin: {
                            left: 2
                        }
                    }, l.createElement(w._8, null, l.createElement(w.Q, {
                        bold: !0,
                        type: w._49.Span
                    }, Object(c.d)("Bounty:", "AcceptBountyModal")), " ", l.createElement(w.Q, {
                        type: w._49.Span
                    }, Object(c.d)("{bountyTitle} with an average of {ccuMax} concurrent viewers and #sponsored in your stream title.", {
                        bountyTitle: this.props.bounty.campaign.title,
                        ccuMax: this.props.bounty.maximumPayoutCCU || 0
                    }, "AcceptBountyModal"))), l.createElement(w._8, null, l.createElement(w.Q, {
                        bold: !0,
                        type: w._49.Span
                    }, Object(c.d)("Bounty Partner:", "AcceptBountyModal")), " ", l.createElement(w.Q, {
                        type: w._49.Span
                    }, this.props.bounty.campaign.sponsor)), l.createElement(w._8, null, l.createElement(w.Q, {
                        bold: !0,
                        type: w._49.Span
                    }, Object(c.d)("Influencer:", "AcceptBountyModal")), " ", l.createElement(w.Q, {
                        type: w._49.Span
                    }, this.props.channelName, " (", Object(c.d)("Twitch ID: {id}", {
                        id: this.props.channelID
                    }, "AcceptBountyModal"), ")")), l.createElement(w._8, null, l.createElement(w.Q, {
                        bold: !0,
                        type: w._49.Span
                    }, Object(c.d)("Bounty Period:", "AcceptBountyModal")), " ", l.createElement(w.Q, {
                        type: w._49.Span
                    }, "1 hour")), l.createElement(w._8, null, l.createElement(w.Q, {
                        bold: !0,
                        type: w._49.Span
                    }, Object(c.d)("Compensation:", "AcceptBountyModal")), " ", l.createElement(w.Q, {
                        type: w._49.Span
                    }, "$", this.props.bounty.maximumPayoutCents / 100, " USD")))), l.createElement(w._35, {
                        className: "accept-bounty-modal__agreement-text",
                        border: !0,
                        padding: 1
                    }, l.createElement(w._8, {
                        textAlign: w._45.Center
                    }, l.createElement(w.Q, {
                        type: w._49.Strong
                    }, "Influencer Bounty Order")), l.createElement("br", null), l.createElement(w.Q, {
                        type: w._49.P
                    }, "This Bounty Order is governed by the (i) Influencer Terms and Conditions attached hereto as Exhibit A and (ii) Bounty Board Service Terms of Use (the “Terms of Use”), both of which are fully incorporated into this Bounty Order. All capitalized terms not defined in this Bounty Order have the respective meanings set forth in the Terms of Use."), l.createElement("br", null), l.createElement(w.Q, {
                        type: w._49.P
                    }, "By accepting this Bounty Order, you, as the Influencer, accept and agree to be bound by and comply with the terms as set forth herein. IF YOU DO NOT ACCEPT AND AGREE TO BE BOUND BY THESE TERMS, PLEASE DO NOT ACCEPT THE BOUNTY ORDER. If you are accepting the Bounty Order on behalf of another person or a corporate entity, you represent and warrant that you have the authority to bind such person or entity to the terms of this Bounty Order."), l.createElement("br", null), l.createElement(w._8, null, l.createElement(w.Q, {
                        type: w._49.Strong
                    }, "Bounty Requirements:")), l.createElement("br", null), l.createElement("ul", {
                        className: "accept-bounty-modal__bounty-requirements"
                    }, l.createElement("li", null, "Influencer is a party to a Content License Agreement (“Agreement”) with Twitch."), l.createElement("li", null, "Influencer agrees to provide the services as set forth in the Bounty. As compensation for the services, Twitch will pay Influencer in accordance with the terms set forth in the Bounty. Payments by Twitch to Influencer are based on certain concurrent user (“CCU”) requirements being met. If Influencer does not meet the CCU requirements as set forth in the Bounty, Influencer will receive a pro rata portion of the Compensation. In addition, if Influencer does not meet the Minimum Bar as defined above, then no portion of the Compensation will be payable to Influencer."), l.createElement("li", null, 'Title of the broadcast related to the Bounty will state any relationship with the Bounty Partner as instructed by Twitch: i.e. "Ad Content of X", "Paid Advertisement of X" or "#sponsored".'), l.createElement("li", null, "Influencer to save a VOD of the broadcast as a highlight to their Twitch channel."), l.createElement("li", null, "If applicable, Influencer to post on social media accounts/tweet at the start of the broadcast to raise awareness for the Bounty. These posts/tweets and any subsequent posts in connection with the Bounty must contain “#sponsored”."), l.createElement("li", null, "Influencer shall not commit any act or make any statement that disparages Twitch, Bounty Partner, or their respective products/services, or brings Twitch or the Bounty Partner disrepute, contempt, scandal, or ridicule for the Bounty Period and six (6) months thereafter.  Twitch may immediately take down, or request the take down of, any Influencer content that violates this section and Influencer shall cooperate with Twitch to execute such takedowns."), l.createElement("li", null, "If Influencer fails to comply with any of the above Bounty requirements, Twitch may at its discretion immediately terminate this Bounty Order and disqualify the influencer from participating in future Bounties.")), l.createElement("br", null), l.createElement(w._8, {
                        textAlign: w._45.Center
                    }, l.createElement(w.Q, {
                        type: w._49.Strong
                    }, "Exhibit A")), l.createElement(w._8, {
                        textAlign: w._45.Center
                    }, l.createElement(w.Q, {
                        type: w._49.Strong
                    }, "Influencer Terms and Conditions")), l.createElement("br", null), l.createElement(w.Q, {
                        type: w._49.P
                    }, "This Exhibit A is made a part of the Bounty Order to which it is attached, and the Agreement to which the Influencer is a party."), l.createElement("br", null), l.createElement(w.Q, {
                        type: w._49.P
                    }, "1.\t", l.createElement(w.Q, {
                        type: w._49.Strong
                    }, "Licenses and Release.")), l.createElement("br", null), l.createElement(w.Q, {
                        type: w._49.P
                    }, "1.1.\t", l.createElement(w.Q, {
                        type: w._49.Strong,
                        decoration: w._47.Underline
                    }, "Influencer Trademark and Copyright License."), " Influencer hereby grants Twitch and the Bounty Partner of each particular accepted Bounty Order a royalty-free, non-exclusive, non-transferable, non-sublicensable, revocable, worldwide license to use and display any trademark, service mark, trade dress, trade name, or logo (“Marks”) and reproduce, distribute, publicly display or perform, or make derivative works of any copyrighted materials (“Materials”) belonging to Influencer and specified for use by Influencer for use in connection with the particular accepted Bounty Order. Without limiting the foregoing, all use by Twitch or the Bounty Partner of the Influencer’s Marks shall be in accordance with Influencer’s usage guidelines that have been delivered or made available to Twitch prior to the date of such use. Influencer may provide in writing an updated version of its usage guidelines and Twitch shall make commercially reasonable efforts to alter, modify or change any Influencer’s Marks being used by Twitch or Bounty Partner in accordance with such request as soon as reasonably practical.  Any such use of Influencer’s Marks will inure solely to Influencer’s benefit.  Nothing contained herein or in the Agreement gives Twitch or Bounty Partner any right, title or interest in the Influencer’s Marks or goodwill therein and thereto, or in any Materials, except as expressly provided in this Section.  For avoidance of doubt, nothing in this Section shall be construed to limit any rights with respect to Influencer’s Marks or Materials that Twitch or Bounty Partner would have as a member of the general public."), l.createElement("br", null), l.createElement(w.Q, {
                        type: w._49.P
                    }, "1.2.\t", l.createElement(w.Q, {
                        type: w._49.Strong,
                        decoration: w._47.Underline
                    }, "Influencer Release."), " Influencer agrees that Twitch or Bounty Partner of an accepted Bounty Order may use Influencer’s name, voice, signature, likeness, identity, persona or any biographical material concerning Influencer in promotion, advertising, sale, publicizing and exploitation, including ancillary products (e.g., merchandise) in connection with the Bounty and Bounty Partner’s products and services, throughout the world in all media, and in perpetuity.  Influencer agrees that Twitch or Bounty Partner of an accepted Bounty Order may record Influencer’s voice, conversation and sounds, including any performance of any musical composition(s), during and in connection with Influencer’s participation in the Bounty, and that Twitch or Bounty Partner shall have the right, throughout the world, an unlimited number of times in perpetuity, royalty-free, to use and to license others to use, in any manner, all or any portion thereof or of a reproduction thereof in connection with the Bounty.  Influencer waives any right of inspection or approval with respect to any materials created or used by Twitch or Bounty Partner of an accepted Bounty Order and expressly waives any moral rights in connection with its participation in any Bounty."), l.createElement("br", null), l.createElement(w.Q, {
                        type: w._49.P
                    }, "1.3.\t", l.createElement(w.Q, {
                        type: w._49.Strong,
                        decoration: w._47.Underline
                    }, "License from Bounty Partner."), " Bounty Partner of an accepted Bounty Order may provide licenses to its content, trademarks and other property for Influencer’s use in connection with the Bounty, either directly or through Twitch.  Influencer shall comply with all requirements, guidelines and restrictions with respect to such licenses."), l.createElement("br", null), l.createElement(w.Q, {
                        type: w._49.P
                    }, "2.\t", l.createElement(w.Q, {
                        type: w._49.Strong
                    }, "Compliance with Laws./CoreText>"), " Influencer will comply with all applicable laws, rules, regulations and guidelines, including but not limited to the FTC’s Guidelines Concerning the Use of Testimonials and Endorsements in Advertising and all other advertising, marketing, and sweepstakes, contests and promotions laws."), l.createElement("br", null), l.createElement(w.Q, {
                        type: w._49.P
                    }, "Without limiting the foregoing, Influencer will include in all Influencer Channels for a Bounty all title headers, overlays and other audio or visual disclosures that Twitch requires of Influencer.  Influencer will comply with Twitch’s instructions regarding the format, placement and duration of such disclosures."), l.createElement("br", null), l.createElement(w.Q, {
                        type: w._49.P
                    }, "Influencer agrees and acknowledges that Twitch may edit or take down the Influencer Channel at any time in order to ensure compliance with applicable laws, rules, regulations and guidelines."), l.createElement("br", null), l.createElement(w.Q, {
                        type: w._49.P
                    }, "3.\t", l.createElement(w.Q, {
                        type: w._49.Strong
                    }, "Influencer Representations and Warranties."), " Influencer represents and warrants that: (i) it has the requisite power and authority to enter into the Bounty Order and to perform fully its obligations hereunder; (ii) it is not and will not be under any contractual or other legal obligation which will in any way interfere with its full, prompt and complete performance under any  Bounty Order; (iii) it conducts and will conduct its affairs in compliance with all applicable international, federal, state, and local laws, rules and regulations, including but not limited to the representations and warranties; (iv) it is not a member of a union, guild or other labor organization and is not a party to any collective bargaining or similar agreement, and understands that Twitch is not a member of any union, guild or other labor organization, and the Bountys are not subject to any collective bargaining agreement; and (v) all other representations and warranties made by Influencer in the Agreement will continue to apply."), l.createElement("br", null), l.createElement(w.Q, {
                        type: w._49.P
                    }, "4.\t", l.createElement(w.Q, {
                        type: w._49.Strong
                    }, "Bounty Partner Confidential Information."), " Twitch or Bounty Partner may disclose to Influencer certain Confidential Information of Bounty Partner or its associated companies, suppliers, or customers.  Influencer agrees to treat such information as Confidential Information under the Agreement."), l.createElement("br", null), l.createElement(w.Q, {
                        type: w._49.P
                    }, "5.\t", l.createElement(w.Q, {
                        type: w._49.Strong
                    }, "Influencer Indemnification Obligations."), " Influencer hereby agrees to defend, indemnify and hold harmless Twitch and/or the Bounty Partner of any accepted Bounty Order, and their directors, officers, employees and affiliated entities, against any and all claims, actions, losses, judgments, settlements, damages, costs, and expenses, including reasonable attorneys’ fees (collectively, “Losses”) arising out of or based on any claim by a third party related to, involving or concerning a breach by Influencer of its representations, warranties or obligations under an accepted Bounty Order."), l.createElement("br", null), l.createElement(w.Q, {
                        type: w._49.P
                    }, "6.\t", l.createElement(w.Q, {
                        type: w._49.Strong
                    }, "Term and Termination.")), l.createElement("br", null), l.createElement(w.Q, {
                        type: w._49.P
                    }, "6.1.\t", l.createElement(w.Q, {
                        type: w._49.Strong,
                        decoration: w._47.Underline
                    }, "Termination for Convenience or Breach."), " Twitch may terminate any particular Bounty Order at any time in its sole discretion or at the request of a Bounty Partner for convenience, or for breach of any requirements set forth in the Bounty Orders by the Influencer.  In the event that Twitch terminates any Bounty Order for breach, Twitch nor its Bounty Partner(s) are obliged to make any payments to the Influencer in connection with the breached Bounty Orders."), l.createElement("br", null), l.createElement(w.Q, {
                        type: w._49.P
                    }, "6.2.\t", l.createElement(w.Q, {
                        type: w._49.Strong,
                        decoration: w._47.Underline
                    }, "Obligations Upon Termination."), " Influencer must return, delete, destroy or take down any materials or content in accordance with instructions from Twitch or the applicable Bounty Partner upon termination or expiration of any particular Bounty Orders."), l.createElement("br", null), l.createElement(w.Q, {
                        type: w._49.P
                    }, "7.\t", l.createElement(w.Q, {
                        type: w._49.Strong
                    }, "Payment."), " Payment terms shall be net sixty (60) days following the end of the Bounty Period and shall be payable in accordance with the Terms of Use."), l.createElement("br", null), l.createElement(w.Q, {
                        type: w._49.P
                    }, "8.\t", l.createElement(w.Q, {
                        type: w._49.Strong
                    }, "Miscellaneous.")), l.createElement("br", null), l.createElement(w.Q, {
                        type: w._49.P
                    }, "8.1.\t", l.createElement(w.Q, {
                        type: w._49.Strong,
                        decoration: w._47.Underline
                    }, "Third Party Beneficiaries."), " The Bounty Partner of any accepted Bounty Order shall be a third party beneficiary with respect to that accepted Bounty Order."), l.createElement("br", null), l.createElement(w.Q, {
                        type: w._49.P
                    }, "8.2.\t", l.createElement(w.Q, {
                        type: w._49.Strong,
                        decoration: w._47.Underline
                    }, "Other Terms."), " These Influencer Terms and Conditions and all Bounty Orders are governed by and subject to the Agreement.  Capitalized terms used but not defined in these Influencer Terms and Conditions will have the meanings defined in the Agreement.  Except as amended by these Influencer Terms and Conditions, all other terms and conditions of the Agreement remain in full force and effect.")), l.createElement(w._35, {
                        borderTop: !0,
                        display: w.R.Flex,
                        flexDirection: w.T.Row,
                        alignItems: w.c.Center,
                        justifyContent: w._7.End,
                        padding: {
                            top: 2
                        },
                        flexWrap: w.U.Wrap
                    }, t, this.props.bounty.status === g.AVAILABLE ? l.createElement(l.Fragment, null, l.createElement(w._8, {
                        margin: {
                            left: .5,
                            right: .5
                        }
                    }, l.createElement(w.v, {
                        "data-test-selector": "accept-bounty-modal-cancel-button",
                        type: w.B.Hollow,
                        onClick: this.onClose
                    }, Object(c.d)("Cancel", "AcceptBountyModal"))), l.createElement(w._8, {
                        margin: {
                            left: .5,
                            right: .5
                        }
                    }, l.createElement(w.v, {
                        "data-test-selector": "accept-bounty-modal-accept-button",
                        onClick: this.onAccept,
                        disabled: !!this.state.errorCode
                    }, Object(c.d)("Accept & Activate", "AcceptBountyModal")))) : l.createElement(w._8, {
                        margin: {
                            left: .5,
                            right: .5
                        }
                    }, l.createElement(w.v, {
                        "data-test-selector": "accept-bounty-modal-cancel-button",
                        type: w.B.Hollow,
                        onClick: this.onClose
                    }, Object(c.d)("Close", "AcceptBountyModal")))))
                }, t
            }(l.PureComponent),
            C = Object(d.a)(B, {
                name: "claimBounty"
            })(k),
            T = (n("KP8S"), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    return l.createElement(w._35, {
                        className: "accept-bounty-modal__container",
                        background: w.n.Base
                    }, l.createElement(C, {
                        "data-test-selector": "accept-bounty-modal-selector",
                        onClose: this.props.closeModal,
                        bounty: this.props.bounty,
                        channelID: this.props.channelID,
                        channelName: this.props.channelName,
                        handleBountyStatusChanged: this.props.handleBountyStatusChanged,
                        refreshData: this.props.refreshData
                    }))
                }, t
            }(l.Component));
        var I, A, O, S = Object(v.b)(null, function(e) {
            return Object(s.b)({
                closeModal: _.c
            }, e)
        })(T);
        ! function(e) {
            e.BOUNTY_NOT_LIVE = "BOUNTY_NOT_LIVE", e.INVALID_PARAMETER = "INVALID_PARAMETER", e.UNKNOWN_ERROR = "UNKNOWN_ERROR"
        }(I || (I = {})), (A || (A = {})).PAY_TO_STREAM = "PAY_TO_STREAM",
            function(e) {
                e.AVAILABLE = "AVAILABLE", e.CANCELLED = "CANCELLED", e.COMPLETED = "COMPLETED", e.LIVE = "LIVE"
            }(O || (O = {}));
        var x = n("dwSm"),
            N = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        reason: "",
                        errorCode: null
                    }, t.reasons = [{
                        key: "i-didnt-like",
                        text: Object(c.d)("I didn't like the game.", "CancelBountyModal")
                    }, {
                        key: "comm-didnt-like",
                        text: Object(c.d)("My community didn't like the game.", "CancelBountyModal")
                    }, {
                        key: "i-comm-didnt-like",
                        text: Object(c.d)("Both my community and I didn't like the game.", "CancelBountyModal")
                    }, {
                        key: "no-time",
                        text: Object(c.d)("I don't have time to complete the bounty.", "CancelBountyModal")
                    }, {
                        key: "cant-start",
                        text: Object(c.d)("I can't figure out how to start the bounty.", "CancelBountyModal")
                    }, {
                        key: "accident",
                        text: Object(c.d)("I accidentally activated the wrong bounty.", "CancelBountyModal")
                    }, {
                        key: "another-offer",
                        text: Object(c.d)("I found another bounty I want to activate.", "CancelBountyModal")
                    }, {
                        key: "just-testing",
                        text: Object(c.d)("I was just testing to see how things worked.", "CancelBountyModal")
                    }, {
                        key: "other",
                        text: Object(c.d)("Other", "CancelBountyModal")
                    }], t.handleSelectChange = function(e) {
                        t.setState({
                            reason: e.target.value
                        })
                    }, t.onClose = function() {
                        t.state.errorCode && t.props.refreshData(), t.props.onClose()
                    }, t.onCancel = function() {
                        return i.__awaiter(t, void 0, void 0, function() {
                            var e, t, n;
                            return i.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        e = null, a.label = 1;
                                    case 1:
                                        return a.trys.push([1, 3, 4, 5]), t = {
                                            bountyID: this.props.bounty.id,
                                            reason: this.state.reason,
                                            userID: this.props.channelID
                                        }, [4, this.props.cancelBounty(Object(h.a)(t))];
                                    case 2:
                                        return (n = a.sent()).data.cancelBounty && n.data.cancelBounty.error ? e = n.data.cancelBounty.error.code : n.data.cancelBounty && n.data.cancelBounty.bounty && this.props.handleBountyStatusChanged(n.data.cancelBounty.bounty), [3, 5];
                                    case 3:
                                        return a.sent(), e = I.UNKNOWN_ERROR, [3, 5];
                                    case 4:
                                        return e ? this.setState({
                                            errorCode: e
                                        }) : this.props.onClose(), [7];
                                    case 5:
                                        return [2]
                                }
                            })
                        })
                    }, t.getMessageFromErrorCode = function(e) {
                        return e === I.BOUNTY_NOT_LIVE ? Object(c.d)("This bounty is no longer live. It may have already been completed or cancelled.", "CancelBountyModal") : Object(c.d)("Something went wrong and the bounty could not be cancelled.", "CancelBountyModal")
                    }, t
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    var e = this,
                        t = this.reasons.map(function(t) {
                            var n = t.key,
                                a = t.text;
                            return l.createElement("option", {
                                value: n,
                                key: n,
                                selected: e.state.reason === n
                            }, a)
                        }),
                        n = Object(c.d)("Cancel Bounty", "CancelBountyModal"),
                        a = null;
                    return this.state.errorCode && (a = l.createElement(w._8, {
                        "data-test-selector": "accept-bounty-modal-error-message",
                        padding: {
                            top: 2
                        },
                        fullWidth: !0,
                        flexShrink: 0
                    }, l.createElement(w.Q, {
                        color: w.K.Error
                    }, this.getMessageFromErrorCode(this.state.errorCode)))), l.createElement(w._8, {
                        padding: 3
                    }, l.createElement(w._8, null, l.createElement(w.Q, {
                        type: w._49.H4
                    }, n), l.createElement(w._8, {
                        margin: {
                            y: 1
                        }
                    }, l.createElement(w.Q, null, Object(c.d)("Are you sure you want to cancel this bounty? If there are still bounties available you can pick it up again later.", "CancelBountyModal"))), l.createElement(w._8, {
                        margin: {
                            bottom: 1
                        }
                    }, l.createElement(w.Q, null, Object(c.d)("Let us know why the bounty didn't work out:", "CancelBountyModal"))), l.createElement(w._30, {
                        "data-test-selector": "cancel-bounty-modal-reason-select",
                        onChange: this.handleSelectChange,
                        value: this.state.reason
                    }, l.createElement("option", {
                        disabled: !0,
                        selected: !0,
                        value: ""
                    }, "Select Reason"), t)), a, l.createElement(w._8, {
                        display: w.R.Flex,
                        flexDirection: w.T.Row,
                        alignItems: w.c.Center,
                        justifyContent: w._7.Center,
                        padding: {
                            top: 2
                        }
                    }, l.createElement(w._8, {
                        margin: {
                            left: .5,
                            right: .5
                        }
                    }, l.createElement(w.v, {
                        "data-test-selector": "cancel-bounty-modal-cancel-button",
                        onClick: this.onClose,
                        type: w.B.Hollow
                    }, Object(c.d)("Nevermind", "CancelBountyModal"))), l.createElement(w._8, {
                        margin: {
                            left: .5,
                            right: .5
                        }
                    }, l.createElement(w.v, {
                        "data-test-selector": "cancel-bounty-modal-confirm-button",
                        disabled: "" === this.state.reason || !!this.state.errorCode,
                        onClick: this.onCancel,
                        type: w.B.Alert
                    }, n))))
                }, t
            }(l.PureComponent),
            D = Object(d.a)(x, {
                name: "cancelBounty"
            })(N),
            P = (n("IuHc"), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    return l.createElement(w._35, {
                        className: "cancel-bounty-modal__container",
                        background: w.n.Base
                    }, l.createElement(D, {
                        "data-test-selector": "cancel-bounty-modal-selector",
                        onClose: this.props.closeModal,
                        bounty: this.props.bounty,
                        channelID: this.props.channelID,
                        handleBountyStatusChanged: this.props.handleBountyStatusChanged,
                        refreshData: this.props.refreshData
                    }))
                }, t
            }(l.Component));
        var M, L = Object(v.b)(null, function(e) {
                return Object(s.b)({
                    closeModal: _.c
                }, e)
            })(P),
            j = n("lfvs"),
            R = n("F8kA");
        ! function(e) {
            e.ViewDetails = "view_details", e.ViewLegal = "view_legal", e.DeclineLegal = "decline_legal", e.AcceptLegal = "accept_legal", e.Terms = "terms", e.CancelBounty = "cancel_bounty", e.ViewTermsOfUse = "view_terms_of_use", e.DismissFTUE = "dismiss_first_time_user_experience"
        }(M || (M = {}));
        n("j2K2");
        var U = {
                "data-test-selector": "bounty-expanded-section"
            },
            F = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.renderExpanded = function(e) {
                        var n, a = e.campaign.game && e.campaign.game.boxArtURL || "",
                            r = e.campaign.game && e.campaign.game.displayName || "",
                            o = l.createElement(w._8, {
                                fullWidth: !0,
                                margin: {
                                    bottom: 1
                                }
                            }, l.createElement(w.Q, null, Object(c.d)("Game key included with bounty activation. Keys are emailed 72 hours after bounty activation.", "BountyItem"))),
                            s = e.campaign.details ? l.createElement(w._8, {
                                fullWidth: !0,
                                margin: {
                                    bottom: 1
                                }
                            }, l.createElement(j, {
                                source: e.campaign.details,
                                renderers: {
                                    Link: t.renderNewWindowLink
                                }
                            })) : null;
                        switch (e.status) {
                            case g.AVAILABLE:
                                n = l.createElement(w.v, {
                                    onClick: t.showAcceptBountyModal
                                }, Object(c.d)("Activate Bounty", "BountyItem"));
                                break;
                            case g.LIVE:
                                n = l.createElement(l.Fragment, null, l.createElement(w._8, {
                                    margin: {
                                        right: 2
                                    }
                                }, l.createElement(w.v, {
                                    type: w.B.Text,
                                    onClick: t.showTermsModal
                                }, Object(c.d)("Terms", "BountyItem"))), l.createElement(w.v, {
                                    onClick: t.showCancelBountyModal,
                                    type: w.B.Hollow
                                }, Object(c.d)("Cancel Bounty", "BountyItem")));
                                break;
                            case g.COMPLETED:
                            case g.CANCELLED:
                                o = null, s = null
                        }
                        return l.createElement(w.e, {
                            type: w.j.SlideInTop,
                            duration: w.g.Short,
                            enabled: !0,
                            timing: w.i.EaseOut
                        }, l.createElement(w._35, i.__assign({
                            className: "bounty-item__expanded",
                            elevation: 1
                        }, U, {
                            padding: 2,
                            display: w.R.Flex,
                            flexDirection: w.T.Column,
                            fullWidth: !0
                        }), l.createElement(w._8, {
                            display: w.R.Flex,
                            flexDirection: w.T.Row,
                            flexWrap: w.U.NoWrap,
                            fullWidth: !0
                        }, l.createElement(w._8, {
                            className: "bounty-item__boxart",
                            margin: {
                                right: 2,
                                bottom: 2
                            }
                        }, l.createElement(w.k, {
                            ratio: w.l.BoxArt
                        }, l.createElement("img", {
                            src: a
                        }))), l.createElement(w._8, null, l.createElement(w.Q, {
                            type: w._49.H4
                        }, r), l.createElement(w.Q, {
                            color: w.K.Alt2
                        }, e.campaign.sponsor), l.createElement(w._8, {
                            padding: {
                                y: 2
                            }
                        }, t.renderDescriptionText(e)))), o, s, l.createElement(w._8, {
                            fullWidth: !0,
                            display: w.R.Flex,
                            flexDirection: w.T.Row,
                            justifyContent: w._7.Between,
                            alignItems: w.c.Center
                        }, l.createElement(w._8, null, l.createElement(w.Q, {
                            type: w._49.H4
                        }, t.renderPayoutText(e))), l.createElement(w._8, {
                            display: w.R.Flex,
                            flexDirection: w.T.Row,
                            alignItems: w.c.Center
                        }, n))))
                    }, t.trackViewDetails = function() {
                        t.props.bounty.id === t.props.selectedItem || t.props.bounty.campaign.id === t.props.selectedItem || t.trackAction(M.ViewDetails)
                    }, t.showTermsModal = function() {
                        t.trackAction(M.Terms), t.props.showAcceptBountyModal({
                            bounty: t.props.bounty,
                            channelID: t.props.channelID,
                            channelName: t.props.channelName,
                            handleBountyStatusChanged: t.props.handleBountyStatusChanged,
                            refreshData: t.props.refreshData
                        })
                    }, t.showAcceptBountyModal = function() {
                        t.trackAction(M.ViewLegal), t.props.showAcceptBountyModal({
                            bounty: t.props.bounty,
                            channelID: t.props.channelID,
                            channelName: t.props.channelName,
                            handleBountyStatusChanged: t.props.handleBountyStatusChanged,
                            refreshData: t.props.refreshData
                        })
                    }, t.showCancelBountyModal = function() {
                        t.props.showCancelBountyModal({
                            bounty: t.props.bounty,
                            channelID: t.props.channelID,
                            handleBountyStatusChanged: t.props.handleBountyStatusChanged,
                            refreshData: t.props.refreshData
                        })
                    }, t.renderNewWindowLink = function(e) {
                        return l.createElement("a", {
                            href: e.href,
                            target: "_blank"
                        }, e.children)
                    }, t.trackImpression = function() {
                        var e, n;
                        e = {
                            bounty: t.props.bounty,
                            channelID: t.props.channelID,
                            impressionGroupID: t.props.impressionGroupID
                        }, n = {
                            bounty_id: e.bounty.id,
                            campaign_id: e.bounty.campaign.id,
                            user_id: e.channelID,
                            impression_id: Object(p.b)(),
                            impression_group_id: e.impressionGroupID,
                            bounty_payout: e.bounty.payoutCents,
                            bounty_status: e.bounty.status,
                            bounty_expiration_date: e.bounty.endAt
                        }, c.o.tracking.track(b.SpadeEventType.BountyBoardImpressions, n)
                    }, t.trackAction = function(e, n) {
                        var a, r;
                        a = {
                            action: e,
                            bounty: t.props.bounty,
                            channelID: t.props.channelID,
                            cancelReason: n
                        }, r = {
                            bounty_id: a.bounty.id,
                            campaign_id: a.bounty.campaign.id,
                            user_id: a.channelID,
                            bounty_action_desc: a.action,
                            bounty_status: a.bounty.status,
                            bounty_cancel_reason: a.cancelReason
                        }, c.o.tracking.track(b.SpadeEventType.BountyBoardActions, r)
                    }, t
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.trackImpression()
                }, t.prototype.render = function() {
                    var e = this.props.bounty,
                        t = this.props.channelName,
                        n = e.id === this.props.selectedItem || e.campaign.id === this.props.selectedItem && e.status === g.AVAILABLE,
                        a = e.status === g.CANCELLED ? l.createElement(w.Q, {
                            type: w._49.H2
                        }, Object(c.d)("N/A", "BountyItem")) : l.createElement(w._8, {
                            display: w.R.Flex
                        }, l.createElement(w.Q, {
                            fontSize: w.V.Size7
                        }, "$"), l.createElement(w.Q, {
                            type: w._49.H2
                        }, (e.status === g.COMPLETED ? e.payoutCents || 0 : e.maximumPayoutCents) / 100)),
                        r = {
                            backgroundImage: "url(" + (e.campaign.game && e.campaign.game.coverURL || "") + ")"
                        },
                        o = "/" + t + "/dashboard/bounties/";
                    return n || (o = e.status === g.AVAILABLE ? function(e, t) {
                        return "/" + e + "/dashboard/bounties/" + t.id
                    }(t, e.campaign) : function(e, t) {
                        return "/" + e + "/dashboard/bounties/" + t.id
                    }(t, e)), l.createElement(w._8, {
                        className: "bounty-item",
                        margin: {
                            bottom: 1
                        }
                    }, l.createElement(w._35, {
                        elevation: 2
                    }, l.createElement(R.a, {
                        to: o,
                        onClick: this.trackViewDetails,
                        className: "bounty-item__link"
                    }, l.createElement(w._8, {
                        display: w.R.Flex,
                        position: w._15.Relative
                    }, l.createElement(w._8, {
                        position: w._15.Absolute,
                        fullWidth: !0,
                        fullHeight: !0
                    }, l.createElement("div", {
                        className: "bounty-item__backdrop",
                        style: r
                    })), l.createElement(w._8, {
                        className: "bounty-item__indicator",
                        position: w._15.Relative,
                        display: w.R.Flex,
                        alignItems: w.c.Center,
                        justifyContent: w._7.Center,
                        padding: {
                            left: 2
                        }
                    }, n ? l.createElement(w._24, {
                        asset: w._25.AngleUp,
                        type: w._26.Alt2
                    }) : l.createElement(w._24, {
                        asset: w._25.AngleDown,
                        type: w._26.Alt2
                    })), l.createElement(w._8, {
                        flexGrow: 1,
                        className: "bounty-item__description",
                        display: w.R.Flex,
                        padding: {
                            y: 2,
                            left: 1,
                            right: 2
                        },
                        justifyContent: w._7.Around,
                        flexDirection: w.T.Column,
                        position: w._15.Relative
                    }, l.createElement(w.Q, {
                        type: w._49.H4,
                        color: w.K.Base,
                        ellipsis: !0,
                        title: e.campaign.title
                    }, e.campaign.title), l.createElement(w.Q, {
                        color: w.K.Alt2
                    }, this.renderTimeString(e))), l.createElement(w._35, {
                        className: "bounty-item__amount",
                        display: w.R.Flex,
                        alignItems: w.c.Center,
                        justifyContent: w._7.Center,
                        flexGrow: 0,
                        flexShrink: 0,
                        position: w._15.Relative,
                        background: w.n.Base
                    }, a)))), n && this.renderExpanded(e))
                }, t.prototype.renderDescriptionText = function(e) {
                    var t = e.payoutCents || 0,
                        n = e.maximumPayoutCents || 0,
                        a = e.maximumPayoutCCU || 0,
                        r = 0;
                    switch (e.status) {
                        case g.COMPLETED:
                            return 0 === e.payoutCents ? Object(c.d)("Unfortunately your average concurrent viewers did not reach the minimum requirement of <x:bold>{ccuMin} concurrent viewers</x:bold> and you will not receive a payout for this bounty. Make sure to do bounties during your peak hours to increase your chances of a good payout.", {
                                "x:bold": function(e) {
                                    return l.createElement(w.Q, {
                                        key: "x_bold_text_" + ++r,
                                        type: w._49.Strong
                                    }, e)
                                },
                                ccuMin: e.minimumPayoutCCU || 0
                            }, "BountyItem") : t === n ? Object(c.d)("Based on your concurrent viewers, you got the max payout of <x:bold>${maxPayout}</x:bold>.  Bounty payouts are bundled with your standard monthly accrued revenue payment.", {
                                "x:bold": function(e) {
                                    return l.createElement(w.Q, {
                                        key: "x_bold_text_" + ++r,
                                        type: w._49.Strong
                                    }, e)
                                },
                                maxPayout: n / 100
                            }, "BountyItem") : a ? Object(c.d)("You hit <x:bold>{percentPayout}%</x:bold> of your {ccuMax} concurrent viewers goal, for a payout of <x:bold>${payout}</x:bold> out of a potential ${maxPayout}. Bounty payouts are bundled with your standard monthly accrued revenue payment.", {
                                "x:bold": function(e) {
                                    return l.createElement(w.Q, {
                                        key: "x_bold_text_" + ++r,
                                        type: w._49.Strong
                                    }, e)
                                },
                                percentPayout: Math.floor(t / n * 100),
                                ccuMax: a,
                                payout: t / 100,
                                maxPayout: n / 100
                            }, "BountyItem") : Object(c.d)("Based on your concurrent viewers, you got a payout of <x:bold>${payout}</x:bold> out of a potential ${maxPayout}. Bounty payouts are bundled with your standard monthly accrued revenue payment.", {
                                "x:bold": function(e) {
                                    return l.createElement(w.Q, {
                                        key: "x_bold_text_" + ++r,
                                        type: w._49.Strong
                                    }, e)
                                },
                                payout: t / 100,
                                maxPayout: n / 100
                            }, "BountyItem");
                        case g.CANCELLED:
                            return e.lastModifiedAt ? Object(c.d)("This bounty was cancelled on {dateCancelled}.", {
                                dateCancelled: l.createElement(w.Q, {
                                    key: "x_bold_text_" + ++r,
                                    type: w._49.Strong
                                }, Object(c.c)(new Date(e.lastModifiedAt)))
                            }, "BountyItem") : Object(c.d)("This bounty was cancelled.", "BountyItem");
                        default:
                            return l.createElement(l.Fragment, null, l.createElement(w.Q, {
                                type: w._49.P,
                                key: "bounty_description_" + e.id
                            }, Object(c.d)("Stream for 1 hour straight with an average of {ccuMax} <x:bold>concurrent viewers</x:bold>. If you don’t hit an average of at least {ccuMin} <x:bold>concurrents</x:bold>, you will not receive a payout. If you achieve the minimum but do not reach the goal, you will get a <x:bold>proportional percentage</x:bold> of the payout.", {
                                "x:bold": function(e) {
                                    return l.createElement(w.Q, {
                                        key: "x_bold_text_" + ++r,
                                        type: w._49.Strong
                                    }, e)
                                },
                                ccuMax: l.createElement(w.Q, {
                                    type: w._49.Strong
                                }, a),
                                ccuMin: l.createElement(w.Q, {
                                    type: w._49.Strong
                                }, e.minimumPayoutCCU)
                            }, "BountyItem")), l.createElement("ul", {
                                className: "bounty-item__description-list",
                                key: "bounty_rule_list_" + e.id
                            }, l.createElement("li", {
                                key: "bounty_rule_1_" + e.id
                            }, Object(c.d)("No needless bad-mouthing of the content.", "BountyItem")), l.createElement("li", {
                                key: "bounty_rule_2_" + e.id
                            }, Object(c.d)("Put <x:bold>#sponsored</x:bold> in your stream title.", {
                                "x:bold": function(e) {
                                    return l.createElement(w.Q, {
                                        key: "x_bold_text_" + ++r,
                                        type: w._49.Strong
                                    }, e)
                                }
                            }, "BountyItem")), l.createElement("li", {
                                key: "bounty_rule_3_" + e.id
                            }, Object(c.d)('Turn on the "<x:bold>Store Past Broadcasts</x:bold>" option in your <x:link>Channel Settings</x:link>.', {
                                "x:bold": function(e) {
                                    return l.createElement(w.Q, {
                                        key: "x_bold_text_" + ++r,
                                        type: w._49.Strong
                                    }, e)
                                },
                                "x:link": function(t) {
                                    return l.createElement("a", {
                                        key: "bount_item_settings_link_" + e.id,
                                        href: "https://www.twitch.tv/broadcast/dashboard/settings",
                                        target: "_blank",
                                        rel: "noopener noreferrer"
                                    }, t)
                                }
                            }, "BountyItem")), l.createElement("li", {
                                key: "bounty_rule_4_" + e.id
                            }, Object(c.d)("Complete the bounty by {date}.", {
                                date: l.createElement(w.Q, {
                                    key: "endat",
                                    bold: !0,
                                    type: w._49.Span
                                }, Object(c.c)(new Date(e.campaign.endAt)))
                            }, "BountyItem"))))
                    }
                }, t.prototype.renderPayoutText = function(e) {
                    return e.status === g.COMPLETED ? Object(c.d)("Your Payout: ${amount}", {
                        amount: (e.payoutCents || 0) / 100
                    }, "BountyItem") : Object(c.d)("Max Payout: ${amount}", {
                        amount: e.maximumPayoutCents / 100
                    }, "BountyItem")
                }, t.prototype.renderTimeString = function(e) {
                    switch (e.status) {
                        case g.LIVE:
                            return e.endAt ? Object(c.d)("Expires {relativeDate}", {
                                relativeDate: Object(c.h)(new Date(e.endAt))
                            }, "BountyItem") : "";
                        case g.COMPLETED:
                            return e.lastModifiedAt ? Object(c.d)("Completed on {relativeOrAbsoluteDate}", {
                                relativeOrAbsoluteDate: Object(c.c)(new Date(e.lastModifiedAt))
                            }, "BountyItem") : "";
                        case g.CANCELLED:
                            return e.lastModifiedAt ? Object(c.d)("Cancelled on {relativeOrAbsoluteDate}", {
                                relativeOrAbsoluteDate: Object(c.c)(new Date(e.lastModifiedAt))
                            }, "BountyItem") : "";
                        default:
                        case g.AVAILABLE:
                            return e.endAt ? Object(c.d)("Available until {relativeOrAbsoluteDate}", {
                                relativeOrAbsoluteDate: Object(c.c)(new Date(e.campaign.endAt))
                            }, "BountyItem") : ""
                    }
                }, t
            }(l.Component),
            Q = Object(s.d)(Object(f.d)("BountyItem", {
                autoReportInteractive: !0
            }))(F);
        var V = Object(v.b)(null, function(e) {
                return Object(s.b)({
                    showAcceptBountyModal: function(e) {
                        var t = i.__rest(e, []);
                        return Object(_.d)(S, t)
                    },
                    showCancelBountyModal: function(e) {
                        var t = i.__rest(e, []);
                        return Object(_.d)(L, t)
                    }
                }, e)
            })(Q),
            W = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    return l.createElement(w._8, {
                        padding: 3
                    }, l.createElement(w._8, {
                        margin: {
                            bottom: 1
                        },
                        textAlign: w._45.Center
                    }, l.createElement(w.Q, {
                        "data-test-selector": "tou-bounty-modal-header",
                        type: w._49.H3
                    }, Object(c.d)("Terms of Use", "TermsOfUseBountyModal"))), l.createElement(w._35, {
                        "data-test-selector": "tou-bounty-legal-container",
                        className: "accept-bounty-modal__agreement-text",
                        border: !0,
                        padding: 1
                    }, "Last Updated: April 12, 2018", l.createElement("br", null), l.createElement("br", null), "Welcome to the Bounty Board services operated by Twitch Interactive, Inc. (with its affiliates, “Twitch”, “us”, “we”, “our”) consisting of the website available at ", l.createElement("a", {
                        href: "https://www.twitch.tv/",
                        target: "_blank",
                        rel: "noopener noreferrer"
                    }, "http://www.twitch.tv"), ' and any related services Twitch provides (collectively, the “Service”). The following terms of use (the "Terms") govern your access to and use of the Service and form an agreement between Twitch and you.', l.createElement("br", null), 'An “Influencer” is defined as a user of the Service offering to create promotional online media content for Advertisers (as defined below). The term "you" refers to the person or entity (i) visiting the Service, browsing or otherwise using the Service (including Influencers), or (ii) communicating with individuals or businesses registered on the Service (each, an “Advertiser”) for the purpose of creating promotional online media content for their products or services (each, a “Bounty”).', l.createElement("br", null), l.createElement("br", null), "By accessing or using the Service, you accept and agree to be bound by and comply with these Terms. IF YOU DO NOT ACCEPT AND AGREE TO BE BOUND BY THESE TERMS, PLEASE DO NOT ACCESS OR USE THE SERVICE. If you are accessing or using the Service on behalf of another person or a corporate entity, you represent and warrant that you have the authority to bind such person or entity to these Terms.", l.createElement("br", null), l.createElement("br", null), "Your use of the Service is further subject to Twitch’s (i) ", l.createElement("a", {
                        href: "https://www.twitch.tv/p/legal/terms-of-service/",
                        target: "_blank",
                        rel: "noopener noreferrer"
                    }, "Terms of Service (Terms of Service (“TOS”)"), ", (ii) ", l.createElement("a", {
                        href: "https://www.twitch.tv/p/legal/community-guidelines/",
                        target: "_blank",
                        rel: "noopener noreferrer"
                    }, "Community Guidelines"), ", and (iii) ", l.createElement("a", {
                        href: "https://www.twitch.tv/p/legal/privacy-policy/",
                        target: "_blank",
                        rel: "noopener noreferrer"
                    }, "Privacy Policy"), ", which are incorporated fully herein.  Where there is a conflict between the foregoing terms and these Terms, these Terms shall govern.", l.createElement("br", null), l.createElement("br", null), "The Service is provided solely (the “Permitted Use”) to: (i) as an Influencer, assist you in gathering information about the various types of Bounty opportunities and Advertisers available on the Service, including profiles, price ranges, and Bounty descriptions (each, an “Advertiser Profile”); (ii) as an Advertiser, assist you in gathering information about the various types of Bounties and Influencers available on the Platform, including profiles, price quotes, and videos of Influencers (each, an “Influencer Profile”); (iii) enable you to post information regarding yourself and to respond to any Bounty opportunities; (iv) facilitate communication between Advertisers and Influencers with the objective of entering into a Bounty Order; and (v) facilitate the transmission of payments from the Advertiser to Influencers under a Bounty Order.", l.createElement("br", null), l.createElement("br", null), l.createElement(w.Q, {
                        type: w._49.Strong
                    }, "1.\tModifications to these Terms and Service"), l.createElement("br", null), l.createElement("br", null), "Twitch reserves the right to change these Terms at any time at our discretion. We will give you notice of the changes by posting an updated version of these Terms online, updating the “Last Modified” date above, or by emailing you at an email address you have provided. Changes to these Terms will be effective as of the date we post them or otherwise notify you of them, unless we specify a different effective date when we make a particular change. Your continued use of the Service after changes to these Terms take effect will constitute your acceptance of the changes. If you do not agree to a change, you must stop using the Service.", l.createElement("br", null), l.createElement("br", null), l.createElement(w._8, {
                        margin: {
                            left: 1
                        }
                    }, 'Twitch reserves the right to change any information, material or content (including, but not limited to, price, features, availability of Advertiser or Influencer, Influencer Profiles and Advertiser Profiles, types of Bounties, and reviews of Bounties and Advertisers) contained on or provided through the Service (the "Content") at any time, and from time to time, without notice.'), l.createElement("br", null), l.createElement("br", null), l.createElement(w.Q, {
                        type: w._49.Strong
                    }, "2.\tLicense Grants"), l.createElement("br", null), "The Service is owned and operated by Twitch. Unless otherwise indicated, all content, information, and other materials on the Service are “Materials” as such term is defined in the TOS. Unless otherwise expressly stated in writing by Twitch, by agreeing to these Terms you are granted a license (i.e. a personal and limited right) to access and use the Service and Materials as set forth in Section 7 of the TOS.", l.createElement("br", null), l.createElement("br", null), "Unless otherwise agreed to in a written agreement between you and Twitch that was signed by an authorized representative of Twitch, you grant to Twitch an unrestricted, worldwide, perpetual, irrevocable, fully sub-licensable, nonexclusive, and royalty-free right to use, reproduce, modify, adapt, publish, translate, create derivative works from, distribute, perform and display (in any form, format, media or media channels now known or later developed or discovered) any data, information, records and files that (1) you provide, transmit or stream through the Service, or (2) we collect from your local computer system or from third-parties with your permission (collectively, “Bounty Board User Content”) and (in each case) including all results from processing such data, including compilations and derivative works thereof.  All Bounty Board User Content is “User Content” as such term is defined in the TOS.", l.createElement("br", null), l.createElement("br", null), l.createElement(w.Q, {
                        type: w._49.Strong
                    }, "3.\tTerm and Termination"), l.createElement("br", null), l.createElement("br", null), "Twitch reserves the right, without notice and in our sole discretion, to terminate your license to use the Service and to block or prevent your future access to and use of the Service. Your only remedy with respect to any dissatisfaction with (i) the Service, (ii) any term of these Terms, (iii) any policy or practice of Twitch in operating the Service, or (iv) any content or information transmitted through the Service, is to terminate your account and to discontinue use of any and all parts of the Service.", l.createElement("br", null), l.createElement("br", null), "Any Bounty Order shall be subject to the cancellation and payment provisions as specified in such Bounty Order.", l.createElement("br", null), l.createElement(w.Q, {
                        type: w._49.Strong
                    }, "4.\tInsertion Orders and Bounty Orders"), l.createElement("br", null), l.createElement("br", null), "The Service permits Advertisers to enter into Bounties pursuant to which Influencers who have registered for our Service will provide online promotional content for Advertiser’s products or services. In order to have Influencers provide such content, Advertiser must enter into an agreement with Twitch that provides for payment to Twitch in order for Twitch to engage Influencers on behalf of Advertiser for the Bounty (each, an “Insertion Order”). The Insertion Order will contain (a) a description of the services Influencers will provide for the Bounty, (b) payment to Twitch, and (c) any other terms and conditions agreed upon between Twitch and the Advertiser through this Service or otherwise.", l.createElement("br", null), l.createElement("br", null), "In order to participate in a particular Bounty, Influencer must enter into an agreement with Twitch (each, a “Bounty Order”) that contains: (a) a description of the services Influencers will provide for the Bounty, (b) payment from Twitch, and (c) any other terms and conditions as agreed upon between Influencer and the Twitch through this Service or otherwise. Influencer further understands and agrees that any content submitted through the Service shall remain publicly accessible as specified in the Bounty Order.", l.createElement("br", null), l.createElement("br", null), "Twitch does not make any representations or warranties of any kind in respect of an Advertiser or a Bounty Order.", l.createElement("br", null), l.createElement("br", null), l.createElement(w.Q, {
                        type: w._49.Strong
                    }, "5.\tPayments"), l.createElement("br", null), l.createElement("br", null), "Advertiser will pay Twitch for each Bounty the amount set forth in the Insertion Order, under the terms set forth in the Insertion Order.", l.createElement("br", null), l.createElement("br", null), "Twitch will pay each Influencer the amount set forth in the Bounty Order, under the terms set forth in the Bounty Order. Twitch, in its sole discretion, may withhold payments to Influencer for breach of applicable law, or the Bounty Order.", l.createElement("br", null), l.createElement("br", null), l.createElement(w.Q, {
                        type: w._49.Strong
                    }, "6.\tNo Unlawful or Prohibited Use"), l.createElement("br", null), l.createElement("br", null), "BY USING THE SERVICE, YOU AGREE NOT TO violate any law, contract, intellectual property or other third-party right or commit a tort, and that you are solely responsible for your conduct while on the Service.", l.createElement("br", null), l.createElement("br", null), "You agree that you will comply with these Terms, Twitch’s ", l.createElement("a", {
                        href: "https://www.twitch.tv/p/legal/terms-of-service/",
                        target: "_blank",
                        rel: "noopener noreferrer"
                    }, "Terms of Service"), " and ", l.createElement("a", {
                        href: "https://www.twitch.tv/p/legal/community-guidelines/",
                        target: "_blank",
                        rel: "noopener noreferrer"
                    }, "Twitch’s Community Guidelines"), ".", l.createElement("br", null), l.createElement("br", null), "Twitch takes no responsibility and assumes no liability for any Bounty Board User Content or for any loss or damage resulting therefrom, nor is Twitch liable for any mistakes, defamation, slander, libel, omissions, falsehoods, obscenity, pornography or profanity you may encounter when using the Service. Your use of the Service is at your own risk. In addition, these rules do not create any private right of action on the part of any third party or any reasonable expectation that the Service will not contain any content that is prohibited by such rules.", l.createElement("br", null), l.createElement("br", null), "Twitch is not liable for any statements or representations included in Bounty Board User Content. Twitch does not endorse any Bounty Board User Content, opinion, recommendation, or advice expressed therein, and Twitch expressly disclaims any and all liability in connection with Bounty Board User Content. Although Twitch has no obligation to screen, edit, or monitor any of the Bounty Board User Content, Twitch reserves the right, and has absolute discretion, to remove, screen or edit any Bounty Board User Content posted or stored on the Service at any time and for any reason without notice, and you are solely responsible for creating backup copies of and replacing any Bounty Board User Content you post or store on the Service at your sole cost and expense. Any use of the Service in violation of the foregoing violates these Terms and may result in, among other things, termination or suspension of your rights to use the Service.", l.createElement("br", null), l.createElement("br", null), l.createElement(w.Q, {
                        type: w._49.Strong
                    }, "7.\tClear and Prominent Disclosure in Bounties of Material Connections Between Influencer and Advertiser"), l.createElement("br", null), l.createElement("br", null), "You are required to follow the ", l.createElement("a", {
                        href: "https://www.ftc.gov/tips-advice/business-center/guidance/ftcs-endorsement-guides-what-people-are-asking",
                        target: "_blank",
                        rel: "noopener noreferrer"
                    }, "Federal Trade Commission’s Endorsement Guides"), ". You each understand and agree that you are required to clearly and conspicuously disclose any material connection between Influencer and the Advertiser. Material connections include, but are not necessarily limited to, the Advertiser providing Influencer with something of value, such as free use of products or services. In general, disclosures should be:", l.createElement("br", null), l.createElement("br", null), l.createElement("ul", {
                        className: "tou-bounty-modal__endorsement-list"
                    }, l.createElement("li", null, "in clear and unambiguous language;"), l.createElement("li", null, "as close as possible to the native ads to which they relate;"), l.createElement("li", null, "in the same medium as the ad, for instance, in the video or in the Twitter post;"), l.createElement("li", null, "in a font and color that’s easy to read;"), l.createElement("li", null, "in a shade that stands out against the background;"), l.createElement("li", null, "for video ads, on the screen long enough to be noticed, read, and understood; and"), l.createElement("li", null, "for audio disclosures, read at a cadence that’s easy for consumers to follow and in words consumers will understand")), l.createElement("br", null), "As an Influencer or an Advertiser, it is your responsibility to understand and abide by the requirements imposed by the FTC and to ensure that a clear and conspicuous disclosure is made each and every time Influencer creates content for a Bounty. You represent and warrant that you will abide by these provisions.", l.createElement("br", null), l.createElement("br", null), "If Twitch learns of Bounties you create or initiate that do not, in our sole discretion, abide by the FTC endorsement disclosure guides, we may require you to add appropriate disclosures, and we may require you to suspend the Bounty until such disclosures are added. Repeated failure to include appropriate disclosures in your Bounties, or your failure to add disclosures upon request by Twitch, may result in termination of your account.", l.createElement("br", null), l.createElement("br", null), "You will not obscure or remove any disclosures that are added by Twitch to comply with FTC endorsement disclosure guidelines.", l.createElement("br", null), l.createElement("br", null), "You agree to indemnify, defend, and hold harmless Twitch, its affiliated companies, contractors, employees, agents and its third-party suppliers, licensors, and partners from any claims, losses, damages, liabilities, including legal fees and expenses, arising out of the failure of any Bounty to comply with the FTC Endorsement Guides."), l.createElement(w._35, {
                        borderTop: !0,
                        display: w.R.Flex,
                        flexDirection: w.T.Row,
                        alignItems: w.c.Center,
                        justifyContent: w._7.End,
                        padding: {
                            top: 2,
                            bottom: 1
                        },
                        flexWrap: w.U.Wrap
                    }, l.createElement(w._8, {
                        margin: {
                            left: .5,
                            right: .5
                        }
                    }, l.createElement(w.v, {
                        "data-test-selector": "tou-bounty-modal-ok-button",
                        onClick: this.props.onClose
                    }, Object(c.d)("OK", "TermsOfUseBountyModal")))))
                }, t
            }(l.PureComponent),
            Y = (n("nELE"), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    return l.createElement(w._35, {
                        className: "accept-bounty-modal__container",
                        background: w.n.Base
                    }, l.createElement(W, {
                        "data-test-selector": "tou-bounty-modal-selector",
                        onClose: this.props.closeModal
                    }))
                }, t
            }(l.Component));
        var q = Object(v.b)(null, function(e) {
                return Object(s.b)({
                    closeModal: _.c
                }, e)
            })(Y),
            H = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.showModal = function(e) {
                        e.preventDefault(), e.stopPropagation(), t.props.trackPageAction(M.ViewTermsOfUse), t.props.showTOUModal()
                    }, t
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    return l.createElement(w.D, null, l.createElement(w._8, {
                        display: w.R.Flex,
                        justifyContent: w._7.Around,
                        padding: 1
                    }, l.createElement(w.Q, null, l.createElement("a", {
                        "data-test-selector": "bounties-page-terms-of-use-selector",
                        href: "#",
                        onClick: this.showModal
                    }, Object(c.d)("Terms of Use", "TermsOfUseBountyCard")))))
                }, t
            }(l.Component);
        var G = Object(v.b)(null, function(e) {
                return Object(s.b)({
                    showTOUModal: function() {
                        return Object(_.d)(q, {})
                    }
                }, e)
            })(H),
            K = (n("MRI1"), function(e) {
                return l.createElement(w._35, {
                    className: "bb-page",
                    margin: {
                        bottom: 1
                    },
                    display: w.R.Flex,
                    flexDirection: w.T.Column,
                    flexWrap: w.U.NoWrap,
                    alignItems: w.c.Stretch,
                    breakpointMedium: {
                        flexDirection: w.T.Row
                    },
                    fullHeight: !0
                }, l.createElement(w._35, {
                    className: "bb-col-wrapper bb-col-wrapper--l",
                    display: w.R.Flex,
                    flexWrap: w.U.NoWrap,
                    flexDirection: w.T.Column,
                    flexShrink: 0,
                    justifyContent: w._7.Between
                }, l.createElement(w._8, {
                    className: "bb-col bb-col--l",
                    padding: 1
                }, e.left), l.createElement(w._8, {
                    padding: 1
                }, l.createElement(w.C, {
                    background: w.n.Base,
                    elevation: 1
                }, l.createElement(G, {
                    trackPageAction: e.trackPageAction
                })))), l.createElement(w._35, {
                    className: "bb-col-wrapper bb-col-wrapper--r",
                    display: w.R.Flex,
                    flexGrow: 1,
                    flexWrap: w.U.NoWrap,
                    flexDirection: w.T.Column,
                    breakpointMedium: {
                        display: w.R.Block
                    }
                }, l.createElement(w._8, {
                    className: "bb-col bb-col--r",
                    fullHeight: !0,
                    padding: {
                        top: 1,
                        right: 1,
                        bottom: 1,
                        left: 2
                    }
                }, e.right)))
            }),
            z = (n("y0HA"), "bounty_board_ftue_banner"),
            $ = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.state = {
                        didDismiss: !1
                    }, n.dismissedBanners = {}, n.onDismissBanner = function() {
                        var e, t = n.dismissedBanners[n.bannerKey],
                            a = "number" == typeof t ? t + 1 : 1,
                            r = i.__assign({}, n.dismissedBanners, ((e = {})[n.bannerKey] = a, e));
                        c.l.set(z, r), n.props.trackPageAction(M.DismissFTUE), n.setState({
                            didDismiss: !0
                        })
                    }, n.dismissedBanners = c.l.get(z, {}), n
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    var e = 0;
                    return this.currentBannerWasDismissed ? null : l.createElement(w.e, {
                        type: w.j.BounceIn,
                        duration: w.g.Medium,
                        enabled: !0,
                        timing: w.i.EaseInOut
                    }, l.createElement(w._35, {
                        padding: 2,
                        display: w.R.Flex,
                        alignItems: w.c.Center,
                        elevation: 1,
                        background: w.n.Base,
                        border: !0,
                        "data-test-selector": "bounty_board_ftue_banner_container_selector"
                    }, l.createElement(w._35, {
                        display: w.R.Flex,
                        fullWidth: !0,
                        flexWrap: w.U.NoWrap
                    }, l.createElement(w._8, {
                        flexGrow: 1,
                        margin: {
                            left: 1
                        }
                    }, l.createElement(w.Q, {
                        fontSize: w.V.Size4,
                        bold: !0,
                        ellipsis: !0
                    }, Object(c.d)("Welcome to Bounty Board", "BountiesPageFTUEBanner")), l.createElement(w._8, {
                        margin: {
                            top: 2
                        }
                    }, l.createElement(w.Q, null, Object(c.d)("Bounty Board allows you to browse and accept sponsored opportunities (AKA bounties) from brands. Before you activate a bounty, here are a couple important things to keep in mind:", "BountiesPageFTUEBanner")), l.createElement(w._2, {
                        margin: {
                            left: 1
                        }
                    }, l.createElement("ol", {
                        className: "bb-ftue__rules-list"
                    }, l.createElement("li", {
                        key: "bb_ftue_rule_1"
                    }, Object(c.d)("<x:bold>No needless bad-mouthing.</x:bold> You can share your authentic opinion of the content, even if it’s not entirely positive. However, be mindful of the difference between constructive feedback, which is welcome, and mean-spirited bashing, which is not.", {
                        "x:bold": function(t) {
                            return l.createElement(w.Q, {
                                key: "x_bold_" + ++e,
                                type: w._49.Strong
                            }, t)
                        }
                    }, "BountiesPageFTUEBanner")), l.createElement("li", {
                        key: "bb_ftue_rule_2"
                    }, Object(c.d)('<x:bold>We’ll use the stream title, game and Past Broadcast to verify bounty completion.</x:bold> Update your stream title to include <x:bold>#sponsored</x:bold>, stream under the correct game, and have "Store Past Broadcasts" on in your <x:link>Channel Settings</x:link>. Otherwise, you won\'t get paid.', {
                        "x:link": function(e) {
                            return l.createElement("a", {
                                key: "settings_link",
                                href: "https://www.twitch.tv/broadcast/dashboard/settings",
                                target: "_blank",
                                rel: "noopener noreferrer"
                            }, e)
                        },
                        "x:bold": function(t) {
                            return l.createElement(w.Q, {
                                key: "x_bold_" + ++e,
                                type: w._49.Strong
                            }, t)
                        }
                    }, "BountiesPageFTUEBanner")), l.createElement("li", {
                        key: "bb_ftue_rule_3"
                    }, Object(c.d)("<x:bold>We require you to disclose your bounties to viewers.</x:bold> In addition to including <x:bold>#sponsored</x:bold> in your stream title, make sure that your viewers are aware that your bounties are sponsored content.", {
                        "x:bold": function(t) {
                            return l.createElement(w.Q, {
                                key: "x_bold_" + ++e,
                                type: w._49.Strong
                            }, t)
                        }
                    }, "BountiesPageFTUEBanner")), l.createElement("li", {
                        key: "bb_ftue_rule_4"
                    }, Object(c.d)("<x:bold>Payouts are based on concurrent viewer requirements being met.</x:bold> You’ll get a payout for hitting the minimum viewer requirements provided in the bounty. If you achieve the minimum but don't reach the average viewer goal, you’ll get a percentage of the maximum payout.", {
                        "x:bold": function(t) {
                            return l.createElement(w.Q, {
                                key: "x_bold_" + ++e,
                                type: w._49.Strong
                            }, t)
                        }
                    }, "BountiesPageFTUEBanner")))), l.createElement(w._2, {
                        margin: {
                            top: 2
                        }
                    }, l.createElement(w.Q, null, Object(c.d)("Please make sure you review the terms associated with your bounty for additional details.", "BountiesPageFTUEBanner"))))))), l.createElement(w._8, {
                        position: w._15.Absolute,
                        attachRight: !0,
                        attachTop: !0
                    }, l.createElement(w.w, {
                        "data-test-selector": "bounty_board_ftue_dismiss_selector",
                        ariaLabel: Object(c.d)("Close", "BountiesPageFTUEBanner"),
                        type: w.y.Default,
                        size: w.x.Large,
                        icon: w._25.Close,
                        onClick: this.onDismissBanner
                    })))
                }, Object.defineProperty(t.prototype, "currentBannerWasDismissed", {
                    get: function() {
                        return this.state.didDismiss || this.dismissedBanners[this.bannerKey]
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "bannerKey", {
                    get: function() {
                        return this.props.channelName + "-FIRST_TIME_USER"
                    },
                    enumerable: !0,
                    configurable: !0
                }), t
            }(l.Component),
            X = n("WmaG"),
            J = n("1zmE"),
            Z = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.AVAILABLE = Object(c.d)("Available", "BountiesPage"), t.COMPLETED = Object(c.d)("Completed", "BountiesPage"), t.IN_PROGRESS = Object(c.d)("In Progress", "BountiesPage"), t.impressionGroupID = Object(p.b)(), t.renderBounty = function(e) {
                        return l.createElement(V, {
                            bounty: e,
                            channelID: t.props.data.user.id,
                            channelName: t.props.match.params.channelName,
                            selectedItem: t.props.match.params.selectedID,
                            handleBountyStatusChanged: t.handleBountyStatusChanged,
                            refreshData: t.refreshData,
                            key: e.id,
                            impressionGroupID: t.impressionGroupID
                        })
                    }, t.handleBountyStatusChanged = function(e) {
                        Object(h.e)(J, {
                            login: t.props.match.params.channelName
                        }, function(t) {
                            if (t.user) switch (t.user.availableBounties = t.user.availableBounties.filter(function(t) {
                                return t.id !== e.id
                            }), t.user.liveBounties = t.user.liveBounties.filter(function(t) {
                                return t.id !== e.id
                            }), t.user.cancelledBounties = t.user.cancelledBounties.filter(function(t) {
                                return t.id !== e.id
                            }), t.user.completedBounties = t.user.completedBounties.filter(function(t) {
                                return t.id !== e.id
                            }), e.status) {
                                case o.AVAILABLE:
                                    t.user.availableBounties.unshift(e);
                                    break;
                                case o.LIVE:
                                    t.user.liveBounties.unshift(e);
                                    break;
                                case o.COMPLETED:
                                    t.user.completedBounties.unshift(e);
                                    break;
                                case o.CANCELLED:
                                default:
                                    t.user.cancelledBounties.unshift(e)
                            }
                            return t
                        })
                    }, t.refreshData = function() {
                        t.props.data.refetch && t.props.data.refetch()
                    }, t.trackPageAction = function(e) {
                        var n, a;
                        n = {
                            action: e,
                            channelID: t.props.match.params.channelName
                        }, a = {
                            user_id: n.channelID,
                            bounty_page_action_desc: n.action
                        }, c.o.tracking.track(b.SpadeEventType.BountyBoardActions, a)
                    }, t
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    c.o.setPageTitle(Object(c.d)("Bounties", "BountiesPage")), this.postRender()
                }, t.prototype.componentDidUpdate = function() {
                    this.postRender()
                }, t.prototype.render = function() {
                    if (this.props.data.loading) return l.createElement(w._8, {
                        padding: 2,
                        fullHeight: !0
                    }, l.createElement(K, {
                        left: this.renderLeftColumnPlaceholders(),
                        right: this.renderRightColumnPlaceholders(),
                        trackPageAction: this.trackPageAction
                    }));
                    if (this.props.data.error) return l.createElement(u.a, {
                        message: Object(c.d)("Error loading data.", "BountiesPage")
                    });
                    var e = this.props.data.user,
                        t = e.completedBounties,
                        n = e.liveBounties,
                        a = e.cancelledBounties,
                        r = e.availableBounties;
                    return l.createElement(w._8, {
                        overflow: w._11.Auto,
                        padding: 1,
                        fullHeight: !0,
                        display: w.R.Flex,
                        flexDirection: w.T.Column
                    }, l.createElement($, {
                        channelName: this.props.match.params.channelName,
                        trackPageAction: this.trackPageAction
                    }), l.createElement(K, {
                        left: this.renderLeftColumn(n, t, a),
                        right: this.renderRightColumn(r),
                        trackPageAction: this.trackPageAction
                    }), l.createElement(X.a, {
                        learnMoreUrl: "https://help.twitch.tv/customer/portal/articles/2936067-bounty-board-program-information-and-faq",
                        page: "bounties"
                    }))
                }, t.prototype.renderLeftColumn = function(e, t, n) {
                    var a = t.concat(n);
                    return a.sort(function(e, t) {
                        return t.lastModifiedAt ? e.lastModifiedAt ? t.lastModifiedAt.localeCompare(e.lastModifiedAt) : 1 : -1
                    }), l.createElement(w._8, null, this.renderTitle(this.IN_PROGRESS), e.length > 0 ? this.renderBounties(e) : l.createElement(w.Q, {
                        color: w.K.Alt2
                    }, Object(c.d)("You currently have no bounties in progress", "BountiesPage")), a.length > 0 ? l.createElement(l.Fragment, null, this.renderTitle(this.COMPLETED), this.renderBounties(a)) : null)
                }, t.prototype.renderRightColumn = function(e) {
                    var t = c.b.get("bounty_board_available_bounties_date", "Thu Apr 05 2063 00:00:00 GMT-0700 (PDT)"),
                        n = 0 === e.length ? l.createElement(w.Q, {
                            "data-test-selector": "bounties-page-empty-available-bounty-text-selector",
                            color: w.K.Alt2
                        }, Object(c.d)("All bounties have been claimed! Make sure to check back on {availableDate} when the next round are released.", {
                            availableDate: l.createElement(w.Q, {
                                type: w._49.Strong
                            }, Object(c.c)(new Date(t)))
                        }, "BountiesPage")) : l.createElement(w._8, {
                            margin: {
                                y: 2
                            }
                        }, l.createElement(w.Q, {
                            color: w.K.Alt2
                        }, Object(c.d)("The next round of bounties will be released on {availableDate}.", {
                            availableDate: l.createElement(w.Q, {
                                type: w._49.Strong
                            }, Object(c.c)(new Date(t)))
                        }, "BountiesPage")));
                    return l.createElement(w._8, {
                        key: "right-column"
                    }, this.renderTitle(this.AVAILABLE), this.renderBounties(e), n)
                }, t.prototype.renderLeftColumnPlaceholders = function() {
                    return l.createElement(w._8, {
                        key: "left-column-placeholders"
                    }, this.renderTitle(this.IN_PROGRESS), l.createElement(w._14, {
                        height: 85
                    }))
                }, t.prototype.renderRightColumnPlaceholders = function() {
                    return l.createElement(w._8, {
                        key: "right-column-placeholders"
                    }, this.renderTitle(this.AVAILABLE), l.createElement(w._8, {
                        padding: {
                            bottom: 2
                        }
                    }, l.createElement(w._14, {
                        height: 85
                    })), l.createElement(w._8, {
                        padding: {
                            bottom: 2
                        }
                    }, l.createElement(w._14, {
                        height: 85
                    })), l.createElement(w._8, {
                        padding: {
                            bottom: 2
                        }
                    }, l.createElement(w._14, {
                        height: 85
                    })), l.createElement(w._8, {
                        padding: {
                            bottom: 2
                        }
                    }, l.createElement(w._14, {
                        height: 85
                    })))
                }, t.prototype.renderTitle = function(e) {
                    return l.createElement(w._8, {
                        margin: {
                            y: 2
                        }
                    }, l.createElement(w.Q, {
                        type: w._49.H4
                    }, e))
                }, t.prototype.renderBounties = function(e) {
                    return e.map(this.renderBounty)
                }, t.prototype.postRender = function() {
                    this.props.data.loading || this.props.latencyTracking.reportInteractive()
                }, t
            }(l.Component),
            ee = Object(s.d)(Object(f.d)("BountiesPage", {
                destination: y.a.ChannelDashboardBounties
            }), Object(m.a)({
                location: b.PageviewLocation.DashboardBounties
            }), Object(d.a)(J, {
                options: function(e) {
                    return {
                        variables: {
                            login: e.match.params.channelName
                        }
                    }
                }
            }))(Z);
        n.d(t, "EMPTY_AVAILABLE_BOUNTY_TEXT_SELECTOR", function() {
            return "bounties-page-empty-available-bounty-text-selector"
        }), n.d(t, "BountiesPage", function() {
            return ee
        })
    },
    Is0m: function(e, t, n) {
        var a = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "claimBounty"
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
                                value: "ClaimBountyInput"
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
                            value: "claimBounty"
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
                                    value: "claimedBounty"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "FragmentSpread",
                                        name: {
                                            kind: "Name",
                                            value: "bounty"
                                        },
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
                end: 177
            }
        };
        a.loc.source = {
            body: '#import "twilight/features/bounties/models/bounty.gql"\nmutation claimBounty($input: ClaimBountyInput!) {\nclaimBounty(input: $input){\nclaimedBounty{\n...bounty\n}\nerror{\ncode\n}\n}\n}',
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        var r = {};
        a.definitions = a.definitions.concat(n("R0Dv").definitions.filter(function(e) {
            if ("FragmentDefinition" !== e.kind) return !0;
            var t = e.name.value;
            return !r[t] && (r[t] = !0, !0)
        })), e.exports = a
    },
    IuHc: function(e, t) {},
    KP8S: function(e, t) {},
    MRI1: function(e, t) {},
    R0Dv: function(e, t, n) {
        var a = {
            kind: "Document",
            definitions: [{
                kind: "FragmentDefinition",
                name: {
                    kind: "Name",
                    value: "bounty"
                },
                typeCondition: {
                    kind: "NamedType",
                    name: {
                        kind: "Name",
                        value: "Bounty"
                    }
                },
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
                            value: "campaign"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "FragmentSpread",
                                name: {
                                    kind: "Name",
                                    value: "bountyCampaign"
                                },
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
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "lastModifiedAt"
                        },
                        arguments: [],
                        directives: []
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "startAt"
                        },
                        arguments: [],
                        directives: []
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "endAt"
                        },
                        arguments: [],
                        directives: []
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "payoutCents"
                        },
                        arguments: [],
                        directives: []
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "maximumPayoutCents"
                        },
                        arguments: [],
                        directives: []
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "maximumPayoutCCU"
                        },
                        arguments: [],
                        directives: []
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "minimumPayoutCCU"
                        },
                        arguments: [],
                        directives: []
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "restriction"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "FragmentSpread",
                                name: {
                                    kind: "Name",
                                    value: "bountyRestriction"
                                },
                                directives: []
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 332
            }
        };
        a.loc.source = {
            body: '#import "twilight/features/bounties/models/bounty-campaign.gql"\n#import "twilight/features/bounties/models/bounty-restriction.gql"\nfragment bounty on Bounty {\nid\ncampaign {\n...bountyCampaign\n}\nstatus\nlastModifiedAt\nstartAt\nendAt\npayoutCents\nmaximumPayoutCents\nmaximumPayoutCCU\nminimumPayoutCCU\nrestriction {\n...bountyRestriction\n}\n}',
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        var r = {};

        function o(e) {
            return e.filter(function(e) {
                if ("FragmentDefinition" !== e.kind) return !0;
                var t = e.name.value;
                return !r[t] && (r[t] = !0, !0)
            })
        }
        a.definitions = a.definitions.concat(o(n("rzey").definitions)), a.definitions = a.definitions.concat(o(n("ed0H").definitions)), e.exports = a
    },
    dwSm: function(e, t, n) {
        var a = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "cancelBounty"
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
                                value: "CancelBountyInput"
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
                            value: "cancelBounty"
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
                                    value: "bounty"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "FragmentSpread",
                                        name: {
                                            kind: "Name",
                                            value: "bounty"
                                        },
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
                end: 173
            }
        };
        a.loc.source = {
            body: '#import "twilight/features/bounties/models/bounty.gql"\nmutation cancelBounty($input: CancelBountyInput!) {\ncancelBounty(input: $input){\nbounty{\n...bounty\n}\nerror{\ncode\n}\n}\n}',
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        var r = {};
        a.definitions = a.definitions.concat(n("R0Dv").definitions.filter(function(e) {
            if ("FragmentDefinition" !== e.kind) return !0;
            var t = e.name.value;
            return !r[t] && (r[t] = !0, !0)
        })), e.exports = a
    },
    ed0H: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "FragmentDefinition",
                name: {
                    kind: "Name",
                    value: "bountyRestriction"
                },
                typeCondition: {
                    kind: "NamedType",
                    name: {
                        kind: "Name",
                        value: "BountyRestriction"
                    }
                },
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "days"
                        },
                        arguments: [],
                        directives: []
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "startTime"
                        },
                        arguments: [],
                        directives: []
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "endTime"
                        },
                        arguments: [],
                        directives: []
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 74
            }
        };
        n.loc.source = {
            body: "fragment bountyRestriction on BountyRestriction {\ndays\nstartTime\nendTime\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    j2K2: function(e, t) {},
    nELE: function(e, t) {},
    rzey: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "FragmentDefinition",
                name: {
                    kind: "Name",
                    value: "bountyCampaign"
                },
                typeCondition: {
                    kind: "NamedType",
                    name: {
                        kind: "Name",
                        value: "BountyCampaign"
                    }
                },
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
                            value: "type"
                        },
                        arguments: [],
                        directives: []
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "sponsor"
                        },
                        arguments: [],
                        directives: []
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "details"
                        },
                        arguments: [],
                        directives: []
                    }, {
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
                                    value: "displayName"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "boxArtURL"
                                },
                                arguments: [{
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "width"
                                    },
                                    value: {
                                        kind: "IntValue",
                                        value: "85"
                                    }
                                }, {
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "height"
                                    },
                                    value: {
                                        kind: "IntValue",
                                        value: "113"
                                    }
                                }],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "coverURL"
                                },
                                arguments: [{
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "width"
                                    },
                                    value: {
                                        kind: "IntValue",
                                        value: "566"
                                    }
                                }, {
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "height"
                                    },
                                    value: {
                                        kind: "IntValue",
                                        value: "85"
                                    }
                                }],
                                directives: []
                            }]
                        }
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "startAt"
                        },
                        arguments: [],
                        directives: []
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "endAt"
                        },
                        arguments: [],
                        directives: []
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 177
            }
        };
        n.loc.source = {
            body: "fragment bountyCampaign on BountyCampaign {\nid\ntitle\ntype\nsponsor\ndetails\ngame {\nid\ndisplayName\nboxArtURL(width:85 height: 113)\ncoverURL(width: 566 height: 85)\n}\nstartAt\nendAt\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    y0HA: function(e, t) {}
});
//# sourceMappingURL=pages.bounties-505404975d2a13ea59442bc9da638011.js.map