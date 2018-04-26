webpackJsonp([102], {
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
        var i = {};
        a.definitions = a.definitions.concat(n("R0Dv").definitions.filter(function(e) {
            if ("FragmentDefinition" !== e.kind) return !0;
            var t = e.name.value;
            return !i[t] && (i[t] = !0, !0)
        })), e.exports = a
    },
    EOq4: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a, i, o, r = n("TToO"),
            l = n("GiK3"),
            s = n("2KeS"),
            u = n("6sO2"),
            c = n("yWCw"),
            d = n("7vx8"),
            m = n("j7/Y"),
            p = n("oIkB"),
            b = n("HM6l"),
            h = n("w9tK"),
            y = n("vH/s"),
            g = n("CSlQ");
        ! function(e) {
            e.BOUNTY_ALREADY_CLAIMED = "BOUNTY_ALREADY_CLAIMED", e.BOUNTY_LIMIT_REACHED = "BOUNTY_LIMIT_REACHED", e.INVALID_PARAMETER = "INVALID_PARAMETER", e.UNKNOWN_ERROR = "UNKNOWN_ERROR"
        }(a || (a = {})),
        function(e) {
            e.PAY_TO_STREAM = "PAY_TO_STREAM"
        }(i || (i = {})),
        function(e) {
            e.AVAILABLE = "AVAILABLE", e.CANCELLED = "CANCELLED", e.COMPLETED = "COMPLETED", e.LIVE = "LIVE"
        }(o || (o = {}));
        var f, v, k = n("RH2O"),
            E = n("V5M+"),
            _ = n("Odds");
        ! function(e) {
            e.AVAILABLE = "AVAILABLE", e.CANCELLED = "CANCELLED", e.COMPLETED = "COMPLETED", e.LIVE = "LIVE"
        }(f || (f = {})), (v || (v = {})).PAY_TO_STREAM = "PAY_TO_STREAM";
        var C = n("Is0m"),
            B = function(e) {
                function t() {
                    var t, n = null !== e && e.apply(this, arguments) || this;
                    return n.state = {
                        errorCode: null
                    }, n.bountyErrorCodeToMessage = ((t = {})[a.BOUNTY_LIMIT_REACHED] = Object(u.d)("You have already reached your limit of active bounties. Please complete or cancel an active bounty before activating a new one.", "AcceptBountyModal"), t[a.BOUNTY_ALREADY_CLAIMED] = Object(u.d)("Oops, it looks like this bounty is no longer available.", "AcceptBountyModal"), t.default = Object(u.d)("Something went wrong and the bounty could not be activated.", "AcceptBountyModal"), t), n.onClose = function() {
                        n.state.errorCode && n.props.refreshData(), n.props.onClose()
                    }, n.onAccept = function() {
                        return r.__awaiter(n, void 0, void 0, function() {
                            var e, t, n;
                            return r.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        e = null, i.label = 1;
                                    case 1:
                                        return i.trys.push([1, 3, 4, 5]), t = {
                                            bountyID: this.props.bounty.id,
                                            bountyCampaignID: this.props.bounty.campaign.id,
                                            userID: this.props.channelID
                                        }, [4, this.props.claimBounty(Object(p.a)(t))];
                                    case 2:
                                        return (n = i.sent()).data.claimBounty && n.data.claimBounty.error ? e = n.data.claimBounty.error.code : n.data.claimBounty && n.data.claimBounty.claimedBounty && this.props.handleBountyStatusChanged(n.data.claimBounty.claimedBounty), [3, 5];
                                    case 3:
                                        return i.sent(), e = a.UNKNOWN_ERROR, [3, 5];
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
                return r.__extends(t, e), t.prototype.render = function() {
                    var e = this.props.bounty.campaign.game && this.props.bounty.campaign.game.boxArtURL || "",
                        t = null;
                    return this.state.errorCode && (t = l.createElement(_._8, {
                        "data-test-selector": "accept-bounty-modal-error-message",
                        padding: {
                            bottom: 2
                        },
                        margin: {
                            right: .5
                        },
                        textAlign: _._42.Right,
                        fullWidth: !0,
                        flexShrink: 0
                    }, l.createElement(_.Q, {
                        color: _.K.Error
                    }, this.getMessageFromErrorCode(this.state.errorCode)))), l.createElement(_._8, {
                        padding: 3
                    }, l.createElement(_._8, {
                        display: _.R.Flex,
                        flexDirection: _.T.Row,
                        flexWrap: _.U.NoWrap,
                        fullWidth: !0,
                        margin: {
                            bottom: 2
                        }
                    }, l.createElement(_._8, {
                        className: "accept-bounty-modal__boxart"
                    }, l.createElement(_.k, {
                        ratio: _.l.BoxArt
                    }, l.createElement("img", {
                        src: e
                    }))), l.createElement(_._8, {
                        margin: {
                            left: 2
                        }
                    }, l.createElement(_._8, null, l.createElement(_.Q, {
                        bold: !0,
                        type: _._46.Span
                    }, Object(u.d)("Bounty:", "AcceptBountyModal")), " ", l.createElement(_.Q, {
                        type: _._46.Span
                    }, this.props.bounty.campaign.title)), l.createElement(_._8, null, l.createElement(_.Q, {
                        bold: !0,
                        type: _._46.Span
                    }, Object(u.d)("Bounty Partner:", "AcceptBountyModal")), " ", l.createElement(_.Q, {
                        type: _._46.Span
                    }, this.props.bounty.campaign.sponsor)), l.createElement(_._8, null, l.createElement(_.Q, {
                        bold: !0,
                        type: _._46.Span
                    }, Object(u.d)("Influencer:", "AcceptBountyModal")), " ", l.createElement(_.Q, {
                        type: _._46.Span
                    }, this.props.channelName, " (", Object(u.d)("Twitch ID: {id}", {
                        id: this.props.channelID
                    }, "AcceptBountyModal"), ")")), l.createElement(_._8, null, l.createElement(_.Q, {
                        bold: !0,
                        type: _._46.Span
                    }, Object(u.d)("Bounty Period:", "AcceptBountyModal")), " ", l.createElement(_.Q, {
                        type: _._46.Span
                    }, this.props.bounty.campaign.title)), l.createElement(_._8, null, l.createElement(_.Q, {
                        bold: !0,
                        type: _._46.Span
                    }, Object(u.d)("Compensation:", "AcceptBountyModal")), " ", l.createElement(_.Q, {
                        type: _._46.Span
                    }, "$", this.props.bounty.payoutCents / 100, " USD")))), l.createElement(_._32, {
                        className: "accept-bounty-modal__agreement-text",
                        border: !0,
                        padding: 1
                    }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi rhoncus in sapien ut mattis. Pellentesque ipsum ex, aliquam sed ipsum id, sagittis egestas lectus. Vestibulum in justo ut dolor tristique consequat id id nibh. Vivamus non ultrices odio. Mauris a blandit diam, ac fermentum dui. Proin efficitur at nibh a pretium. Fusce quis aliquet justo. Phasellus varius auctor libero quis blandit. Aenean ipsum velit, posuere non elementum at, efficitur quis lectus. Vivamus ut rhoncus augue, eget viverra felis. Nunc gravida tellus metus, id convallis odio consectetur eu. Nullam eget faucibus neque. Aenean eget orci aliquam, iaculis sapien sit amet, fringilla libero. Curabitur vel pulvinar nulla, at pharetra ex. Phasellus diam tortor, volutpat vel pharetra nec, fermentum fringilla elit. Fusce lacinia nulla nec ipsum tristique sollicitudin. Nam faucibus scelerisque nunc, et tincidunt leo maximus eu. Donec nec dui quis velit dictum facilisis nec eu nisi. Vivamus nec quam vel eros condimentum tincidunt. Suspendisse maximus urna vitae tellus eleifend iaculis. Nulla tempor blandit ligula ac scelerisque. Duis sodales tincidunt diam sed dignissim. Fusce porttitor id felis vitae volutpat. Aliquam erat volutpat. Cras erat sapien, maximus ac velit pharetra, convallis ullamcorper nibh. Duis cursus lacus ut bibendum ultrices. In quis leo vitae velit accumsan rhoncus ac non mauris. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut tempus, neque nec euismod vestibulum, orci massa consectetur justo, ac fringilla mauris arcu tristique enim. Etiam laoreet urna eu suscipit aliquam. Curabitur id sem sit amet sem fermentum dictum maximus consequat odio. Sed nec tempus arcu. Praesent mauris libero, pulvinar eu diam non, tempus hendrerit massa. Pellentesque condimentum aliquam malesuada. Sed a scelerisque arcu, a condimentum purus. Suspendisse consectetur hendrerit nibh ut lobortis. Cras accumsan magna est, elementum volutpat velit varius nec. Donec varius tellus elementum velit bibendum tincidunt. Etiam eu risus tincidunt, imperdiet nisl vitae, maximus velit. Aenean vehicula nunc et ipsum pharetra tristique. Donec ac est ligula. Maecenas tincidunt sagittis justo luctus aliquam. Phasellus ac pulvinar risus. Aliquam nunc turpis, aliquet non vehicula in, maximus quis odio. Phasellus aliquet mi faucibus nunc aliquet, sed blandit lacus pharetra. Donec maximus, nisi eget consequat scelerisque, purus odio malesuada arcu, in malesuada odio felis ac nulla. Etiam sed rhoncus ipsum, ut ultrices metus. Nullam et aliquam eros. Fusce et purus quis justo sodales laoreet nec ac turpis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer ligula neque, suscipit non diam id, sodales porta sapien. Quisque scelerisque venenatis mi sed ultricies. Nullam lobortis condimentum tortor. Sed finibus, nulla in lacinia fringilla, tellus lectus tempus eros, id ornare libero mauris vitae lectus. Phasellus ante velit, tristique non felis ut, condimentum ornare justo. Cras interdum augue non hendrerit porttitor. Donec facilisis hendrerit velit, sit amet porttitor neque blandit sit amet. Mauris in metus porttitor, commodo neque at, venenatis urna. Duis molestie tellus vel lorem interdum, eget vulputate ligula fermentum. Quisque vitae nisl purus. Nam pulvinar tellus ac augue dignissim hendrerit. Cras fermentum interdum erat elementum blandit. Nulla fermentum magna et eros tempor, ut ultrices justo sagittis. Sed nec blandit lacus, nec posuere velit. Donec porta, dui ac tincidunt convallis, justo ante blandit urna, vitae posuere velit lectus ac purus. Mauris tristique augue non commodo tempor."), l.createElement(_._32, {
                        borderTop: !0,
                        display: _.R.Flex,
                        flexDirection: _.T.Row,
                        alignItems: _.c.Center,
                        justifyContent: _._7.End,
                        padding: {
                            top: 2,
                            bottom: 1
                        },
                        flexWrap: _.U.Wrap
                    }, t, this.props.bounty.status === f.AVAILABLE ? l.createElement(l.Fragment, null, l.createElement(_._8, {
                        margin: {
                            left: .5,
                            right: .5
                        }
                    }, l.createElement(_.v, {
                        "data-test-selector": "accept-bounty-modal-cancel-button",
                        type: _.B.Hollow,
                        onClick: this.onClose
                    }, Object(u.d)("Cancel", "AcceptBountyModal"))), l.createElement(_._8, {
                        margin: {
                            left: .5,
                            right: .5
                        }
                    }, l.createElement(_.v, {
                        "data-test-selector": "accept-bounty-modal-accept-button",
                        onClick: this.onAccept,
                        disabled: !!this.state.errorCode
                    }, Object(u.d)("Accept & Activate", "AcceptBountyModal")))) : l.createElement(_._8, {
                        margin: {
                            left: .5,
                            right: .5
                        }
                    }, l.createElement(_.v, {
                        "data-test-selector": "accept-bounty-modal-cancel-button",
                        type: _.B.Hollow,
                        onClick: this.onClose
                    }, Object(u.d)("Close", "AcceptBountyModal")))))
                }, t
            }(l.PureComponent),
            A = Object(d.a)(C, {
                name: "claimBounty"
            })(B),
            N = (n("KP8S"), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    return l.createElement(_._32, {
                        className: "accept-bounty-modal__container",
                        background: _.n.Base
                    }, l.createElement(A, {
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
        var S, D, O, I = Object(k.b)(null, function(e) {
            return Object(s.b)({
                closeModal: E.c
            }, e)
        })(N);
        ! function(e) {
            e.BOUNTY_NOT_LIVE = "BOUNTY_NOT_LIVE", e.INVALID_PARAMETER = "INVALID_PARAMETER", e.UNKNOWN_ERROR = "UNKNOWN_ERROR"
        }(S || (S = {})), (D || (D = {})).PAY_TO_STREAM = "PAY_TO_STREAM",
            function(e) {
                e.AVAILABLE = "AVAILABLE", e.CANCELLED = "CANCELLED", e.COMPLETED = "COMPLETED", e.LIVE = "LIVE"
            }(O || (O = {}));
        var F = n("dwSm"),
            L = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        reason: "",
                        errorCode: null
                    }, t.reasons = [{
                        key: "i-didnt-like",
                        text: Object(u.d)("I didn't like the Game", "CancelBountyModal")
                    }, {
                        key: "comm-didnt-like",
                        text: Object(u.d)("My community didn't like the Game", "CancelBountyModal")
                    }, {
                        key: "i-comm-didnt-like",
                        text: Object(u.d)("My community and I didn't like the Game", "CancelBountyModal")
                    }, {
                        key: "no-time",
                        text: Object(u.d)("I don't have time to complete the offer", "CancelBountyModal")
                    }, {
                        key: "cant-start",
                        text: Object(u.d)("I can't figure out how to start the offer", "CancelBountyModal")
                    }, {
                        key: "accident",
                        text: Object(u.d)("I accidentally picked the wrong offer", "CancelBountyModal")
                    }, {
                        key: "another-offer",
                        text: Object(u.d)("I found an offer that I want more", "CancelBountyModal")
                    }, {
                        key: "just-testing",
                        text: Object(u.d)("I was just testing to see how it worked", "CancelBountyModal")
                    }, {
                        key: "other",
                        text: Object(u.d)("Other", "CancelBountyModal")
                    }], t.handleSelectChange = function(e) {
                        t.setState({
                            reason: e.target.value
                        })
                    }, t.onClose = function() {
                        t.state.errorCode && t.props.refreshData(), t.props.onClose()
                    }, t.onCancel = function() {
                        return r.__awaiter(t, void 0, void 0, function() {
                            var e, t, n;
                            return r.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        e = null, a.label = 1;
                                    case 1:
                                        return a.trys.push([1, 3, 4, 5]), t = {
                                            bountyID: this.props.bounty.id,
                                            reason: this.state.reason,
                                            userID: this.props.channelID
                                        }, [4, this.props.cancelBounty(Object(p.a)(t))];
                                    case 2:
                                        return (n = a.sent()).data.cancelBounty && n.data.cancelBounty.error ? e = n.data.cancelBounty.error.code : n.data.cancelBounty && n.data.cancelBounty.bounty && this.props.handleBountyStatusChanged(n.data.cancelBounty.bounty), [3, 5];
                                    case 3:
                                        return a.sent(), e = S.UNKNOWN_ERROR, [3, 5];
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
                        return e === S.BOUNTY_NOT_LIVE ? Object(u.d)("This bounty is no longer live. It may have already been completed or cancelled.", "CancelBountyModal") : Object(u.d)("Something went wrong and the bounty could not be cancelled.", "CancelBountyModal")
                    }, t
                }
                return r.__extends(t, e), t.prototype.render = function() {
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
                        n = Object(u.d)("Cancel Bounty", "CancelBountyModal"),
                        a = null;
                    return this.state.errorCode && (a = l.createElement(_._8, {
                        "data-test-selector": "accept-bounty-modal-error-message",
                        padding: {
                            top: 2
                        },
                        textAlign: _._42.Center,
                        fullWidth: !0,
                        flexShrink: 0
                    }, l.createElement(_.Q, {
                        color: _.K.Error
                    }, this.getMessageFromErrorCode(this.state.errorCode)))), l.createElement(_._8, {
                        padding: 3
                    }, l.createElement(_._8, null, l.createElement(_.Q, {
                        type: _._46.H4
                    }, n), l.createElement(_._8, {
                        margin: {
                            y: 1
                        }
                    }, l.createElement(_.Q, null, Object(u.d)("Are you sure you want to cancel this bounty? It will no longer be available to you if you do.", "CancelBountyModal"))), l.createElement(_._8, {
                        margin: {
                            bottom: 1
                        }
                    }, l.createElement(_.Q, null, Object(u.d)("And if you could let us know why, it would be much appreciated!", "CancelBountyModal"))), l.createElement(_._28, {
                        "data-test-selector": "cancel-bounty-modal-reason-select",
                        onChange: this.handleSelectChange,
                        value: this.state.reason
                    }, l.createElement("option", {
                        disabled: !0,
                        selected: !0,
                        value: ""
                    }, "Select Reason"), t)), a, l.createElement(_._8, {
                        display: _.R.Flex,
                        flexDirection: _.T.Row,
                        alignItems: _.c.Center,
                        justifyContent: _._7.Center,
                        padding: {
                            top: 2
                        }
                    }, l.createElement(_._8, {
                        margin: {
                            left: .5,
                            right: .5
                        }
                    }, l.createElement(_.v, {
                        "data-test-selector": "cancel-bounty-modal-cancel-button",
                        onClick: this.onClose
                    }, Object(u.d)("Nevermind", "CancelBountyModal"))), l.createElement(_._8, {
                        margin: {
                            left: .5,
                            right: .5
                        }
                    }, l.createElement(_.v, {
                        "data-test-selector": "cancel-bounty-modal-confirm-button",
                        disabled: "" === this.state.reason || !!this.state.errorCode,
                        onClick: this.onCancel
                    }, n))))
                }, t
            }(l.PureComponent),
            M = Object(d.a)(F, {
                name: "cancelBounty"
            })(L),
            T = (n("IuHc"), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    return l.createElement(_._32, {
                        className: "cancel-bounty-modal__container",
                        background: _.n.Base
                    }, l.createElement(M, {
                        "data-test-selector": "cancel-bounty-modal-selector",
                        onClose: this.props.closeModal,
                        bounty: this.props.bounty,
                        channelID: this.props.channelID,
                        handleBountyStatusChanged: this.props.handleBountyStatusChanged,
                        refreshData: this.props.refreshData
                    }))
                }, t
            }(l.Component));
        var R = Object(k.b)(null, function(e) {
                return Object(s.b)({
                    closeModal: E.c
                }, e)
            })(T),
            x = n("F8kA");
        var j, w = 864e5;

        function P(e) {
            if (!e) return "";
            var t = e instanceof Date ? e : new Date(e),
                n = t.getTime() - Date.now();
            return n < -w ? Object(u.c)(t, "short") : n < 0 ? Object(u.g)(t) : n > w ? Object(u.c)(t, "short") : Object(u.h)(t)
        }! function(e) {
            e.ViewDetails = "view_details", e.ViewLegal = "view_legal", e.DeclineLegal = "decline_legal", e.AcceptLegal = "accept_legal", e.Terms = "terms", e.CancelBounty = "cancel_bounty"
        }(j || (j = {}));
        n("j2K2");
        var V = {
                "data-test-selector": "bounty-expanded-section"
            },
            q = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.renderExpanded = function(e) {
                        var n, a = e.campaign.game && e.campaign.game.boxArtURL || "",
                            i = e.campaign.game && e.campaign.game.displayName || "";
                        switch (e.status) {
                            case f.AVAILABLE:
                                n = l.createElement(_.v, {
                                    onClick: t.showAcceptBountyModal
                                }, Object(u.d)("Activate Bounty", "BountyItem"));
                                break;
                            case f.LIVE:
                                n = l.createElement(l.Fragment, null, l.createElement(_._8, {
                                    margin: {
                                        right: 2
                                    }
                                }, l.createElement(_.v, {
                                    type: _.B.Text,
                                    onClick: t.showTermsModal
                                }, Object(u.d)("Terms", "BountyItem"))), l.createElement(_.v, {
                                    onClick: t.showCancelBountyModal
                                }, Object(u.d)("Cancel", "BountyItem")))
                        }
                        return l.createElement(_.e, {
                            type: _.j.SlideInTop,
                            duration: _.g.Short,
                            enabled: !0,
                            timing: _.i.EaseOut
                        }, l.createElement(_._32, r.__assign({
                            className: "bounty-item__expanded",
                            elevation: 1
                        }, V, {
                            padding: 2,
                            display: _.R.Flex,
                            flexDirection: _.T.Column,
                            fullWidth: !0
                        }), l.createElement(_._8, {
                            display: _.R.Flex,
                            flexDirection: _.T.Row,
                            flexWrap: _.U.NoWrap,
                            fullWidth: !0
                        }, l.createElement(_._8, {
                            className: "bounty-item__boxart",
                            margin: {
                                right: 2,
                                bottom: 2
                            }
                        }, l.createElement(_.k, {
                            ratio: _.l.BoxArt
                        }, l.createElement("img", {
                            src: a
                        }))), l.createElement(_._8, null, l.createElement(_.Q, {
                            type: _._46.H4
                        }, i), l.createElement(_.Q, {
                            color: _.K.Alt2
                        }, e.campaign.sponsor), l.createElement(_._8, {
                            padding: {
                                y: 2
                            }
                        }, t.renderExpiresTime(e)), l.createElement(_.Q, null, Object(u.d)("Where's my game?", "BountyItem")))), l.createElement(_._8, {
                            fullWidth: !0,
                            display: _.R.Flex,
                            flexDirection: _.T.Row,
                            justifyContent: _._7.Between,
                            alignItems: _.c.Center
                        }, l.createElement(_._8, null, l.createElement(_.Q, {
                            type: _._46.H4
                        }, Object(u.d)("Payout: ${amount}", {
                            amount: e.payoutCents / 100
                        }, "BountyItem"))), l.createElement(_._8, {
                            display: _.R.Flex,
                            flexDirection: _.T.Row,
                            alignItems: _.c.Center
                        }, n))))
                    }, t.trackViewDetails = function() {
                        t.props.bounty.id === t.props.selectedItem || t.props.bounty.campaign.id === t.props.selectedItem || t.trackAction(j.ViewDetails)
                    }, t.showTermsModal = function() {
                        t.trackAction(j.Terms), t.props.showAcceptBountyModal({
                            bounty: t.props.bounty,
                            channelID: t.props.channelID,
                            channelName: t.props.channelName,
                            handleBountyStatusChanged: t.props.handleBountyStatusChanged,
                            refreshData: t.props.refreshData
                        })
                    }, t.showAcceptBountyModal = function() {
                        t.trackAction(j.ViewLegal), t.props.showAcceptBountyModal({
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
                            impression_id: Object(b.b)(),
                            impression_group_id: e.impressionGroupID,
                            bounty_payout: e.bounty.payoutCents,
                            bounty_status: e.bounty.status,
                            bounty_expiration_date: e.bounty.endAt
                        }, u.o.tracking.track(y.SpadeEventType.BountyBoardImpressions, n)
                    }, t.trackAction = function(e, n) {
                        var a, i;
                        a = {
                            action: e,
                            bounty: t.props.bounty,
                            channelID: t.props.channelID,
                            cancelReason: n
                        }, i = {
                            bounty_id: a.bounty.id,
                            campaign_id: a.bounty.campaign.id,
                            user_id: a.channelID,
                            bounty_action_desc: a.action,
                            bounty_status: a.bounty.status,
                            bounty_cancel_reason: a.cancelReason
                        }, u.o.tracking.track(y.SpadeEventType.BountyBoardActions, i)
                    }, t
                }
                return r.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.trackImpression()
                }, t.prototype.render = function() {
                    var e = this.props.bounty,
                        t = this.props.channelName,
                        n = e.id === this.props.selectedItem || e.campaign.id === this.props.selectedItem && e.status === f.AVAILABLE,
                        a = e.status === f.CANCELLED ? l.createElement(_.Q, {
                            type: _._46.H2
                        }, Object(u.d)("N/A", "BountyItem")) : l.createElement(_._8, {
                            display: _.R.Flex
                        }, l.createElement(_.Q, {
                            fontSize: _.V.Size7
                        }, "$"), l.createElement(_.Q, {
                            type: _._46.H2
                        }, e.payoutCents / 100)),
                        i = {
                            backgroundImage: "url(" + (e.campaign.game && e.campaign.game.coverURL || "") + ")"
                        },
                        o = "/" + t + "/dashboard/bounties/";
                    return n || (o = e.status === f.AVAILABLE ? function(e, t) {
                        return "/" + e + "/dashboard/bounties/" + t.id
                    }(t, e.campaign) : function(e, t) {
                        return "/" + e + "/dashboard/bounties/" + t.id
                    }(t, e)), l.createElement(_._8, {
                        className: "bounty-item",
                        margin: {
                            bottom: 1
                        }
                    }, l.createElement(_._32, {
                        elevation: 2
                    }, l.createElement(x.a, {
                        to: o,
                        onClick: this.trackViewDetails,
                        className: "bounty-item__link"
                    }, l.createElement(_._8, {
                        display: _.R.Flex,
                        position: _._15.Relative
                    }, l.createElement(_._8, {
                        position: _._15.Absolute,
                        fullWidth: !0,
                        fullHeight: !0
                    }, l.createElement("div", {
                        className: "bounty-item__backdrop",
                        style: i
                    })), l.createElement(_._8, {
                        className: "bounty-item__indicator",
                        position: _._15.Relative,
                        display: _.R.Flex,
                        alignItems: _.c.Center,
                        justifyContent: _._7.Center,
                        padding: {
                            left: 2
                        }
                    }, n ? l.createElement(_._22, {
                        asset: _._23.AngleUp,
                        type: _._24.Alt2
                    }) : l.createElement(_._22, {
                        asset: _._23.AngleDown,
                        type: _._24.Alt2
                    })), l.createElement(_._8, {
                        flexGrow: 1,
                        className: "bounty-item__description",
                        display: _.R.Flex,
                        padding: {
                            y: 2,
                            left: 1,
                            right: 2
                        },
                        justifyContent: _._7.Around,
                        flexDirection: _.T.Column,
                        position: _._15.Relative
                    }, l.createElement(_.Q, {
                        type: _._46.H4
                    }, e.campaign.title), l.createElement(_.Q, {
                        color: _.K.Alt2
                    }, this.renderTimeString(e))), l.createElement(_._32, {
                        className: "bounty-item__amount",
                        display: _.R.Flex,
                        alignItems: _.c.Center,
                        justifyContent: _._7.Center,
                        flexGrow: 0,
                        flexShrink: 0,
                        position: _._15.Relative,
                        background: _.n.Base
                    }, a)))), n && this.renderExpanded(e))
                }, t.prototype.renderTimeString = function(e) {
                    switch (e.status) {
                        case f.LIVE:
                            return e.endAt ? Object(u.d)("Expires {relativeDate}", {
                                relativeDate: Object(u.h)(new Date(e.endAt))
                            }, "BountyItem") : "";
                        case f.COMPLETED:
                            return e.lastModifiedAt ? Object(u.d)("Completed {relativeOrAbsoluteDate}", {
                                relativeOrAbsoluteDate: P(e.lastModifiedAt)
                            }, "BountyItem") : "";
                        case f.CANCELLED:
                            return e.lastModifiedAt ? Object(u.d)("Cancelled {relativeOrAbsoluteDate}", {
                                relativeOrAbsoluteDate: P(e.lastModifiedAt)
                            }, "BountyItem") : "";
                        default:
                        case f.AVAILABLE:
                            return e.endAt ? Object(u.d)("Available until {relativeOrAbsoluteDate}", {
                                relativeOrAbsoluteDate: P(e.campaign.endAt)
                            }, "BountyItem") : ""
                    }
                }, t.prototype.renderExpiresTime = function(e) {
                    return l.createElement(_.Q, null, Object(u.d)("You have until {date} to complete the bounty", {
                        date: l.createElement(_.Q, {
                            key: "endat",
                            bold: !0,
                            type: _._46.Span
                        }, Object(u.c)(new Date(e.campaign.endAt)))
                    }, "BountyItem"))
                }, t
            }(l.Component),
            Q = Object(s.d)(Object(g.d)("BountyItem", {
                autoReportInteractive: !0
            }))(q);
        var U = Object(k.b)(null, function(e) {
                return Object(s.b)({
                    showAcceptBountyModal: function(e) {
                        var t = r.__rest(e, []);
                        return Object(E.d)(I, t)
                    },
                    showCancelBountyModal: function(e) {
                        var t = r.__rest(e, []);
                        return Object(E.d)(R, t)
                    }
                }, e)
            })(Q),
            H = (n("MRI1"), function(e) {
                return l.createElement(_._32, {
                    className: "bb-page",
                    margin: {
                        bottom: 1
                    },
                    display: _.R.Flex,
                    flexDirection: _.T.Column,
                    flexWrap: _.U.NoWrap,
                    alignItems: _.c.Stretch,
                    breakpointMedium: {
                        flexDirection: _.T.Row
                    },
                    fullHeight: !0
                }, l.createElement(_._32, {
                    className: "bb-col-wrapper bb-col-wrapper--l",
                    display: _.R.Flex,
                    flexWrap: _.U.NoWrap,
                    flexDirection: _.T.Column,
                    flexShrink: 0,
                    justifyContent: _._7.Between
                }, l.createElement(_._8, {
                    className: "bb-col bb-col--l",
                    padding: 1
                }, e.left), l.createElement(_._8, {
                    padding: 1
                }, l.createElement(_.C, {
                    background: _.n.Base,
                    elevation: 1
                }, l.createElement(_.D, null, l.createElement(_._8, {
                    display: _.R.Flex,
                    justifyContent: _._7.Around,
                    padding: 1
                }, l.createElement(_.Q, null, l.createElement("a", {
                    href: "https://twitch.tv",
                    target: "_blank"
                }, Object(u.d)("Terms & Conditions", "BountiesPageLayout")))))))), l.createElement(_._32, {
                    className: "bb-col-wrapper bb-col-wrapper--r",
                    display: _.R.Flex,
                    flexGrow: 1,
                    flexWrap: _.U.NoWrap,
                    flexDirection: _.T.Column,
                    flexShrink: 0,
                    breakpointMedium: {
                        display: _.R.Block
                    }
                }, l.createElement(_._8, {
                    className: "bb-col bb-col--r",
                    fullHeight: !0,
                    padding: 1
                }, e.right)))
            }),
            W = n("WmaG"),
            G = n("1zmE"),
            Y = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.AVAILABLE = Object(u.d)("Available", "BountiesPage"), t.COMPLETED = Object(u.d)("Completed", "BountiesPage"), t.IN_PROGRESS = Object(u.d)("In Progress", "BountiesPage"), t.impressionGroupID = Object(b.b)(), t.renderBounty = function(e) {
                        return l.createElement(U, {
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
                        Object(p.e)(G, {
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
                    }, t
                }
                return r.__extends(t, e), t.prototype.componentDidMount = function() {
                    u.o.setPageTitle(Object(u.d)("Bounties", "BountiesPage")), this.postRender()
                }, t.prototype.componentDidUpdate = function() {
                    this.postRender()
                }, t.prototype.render = function() {
                    if (this.props.data.loading) return l.createElement(_._8, {
                        padding: 2,
                        fullHeight: !0
                    }, l.createElement(H, {
                        left: this.renderLeftColumnPlaceholders(),
                        right: this.renderRightColumnPlaceholders()
                    }));
                    if (this.props.data.error) return l.createElement(c.a, {
                        message: Object(u.d)("Error loading data.", "BountiesPage")
                    });
                    var e = this.props.data.user,
                        t = e.completedBounties,
                        n = e.liveBounties,
                        a = e.cancelledBounties,
                        i = e.availableBounties;
                    return l.createElement(_._8, {
                        padding: 1,
                        fullHeight: !0
                    }, l.createElement(H, {
                        left: this.renderLeftColumn(n, t, a),
                        right: this.renderRightColumn(i)
                    }), l.createElement(W.a, {
                        learnMoreUrl: "",
                        page: "bounties"
                    }))
                }, t.prototype.renderLeftColumn = function(e, t, n) {
                    var a = t.concat(n);
                    return a.sort(function(e, t) {
                        return t.lastModifiedAt ? e.lastModifiedAt ? t.lastModifiedAt.localeCompare(e.lastModifiedAt) : 1 : -1
                    }), l.createElement(_._8, null, this.renderTitle(this.IN_PROGRESS), e.length > 0 ? this.renderBounties(e) : l.createElement(_.Q, {
                        color: _.K.Alt2
                    }, Object(u.d)("You currently have no bounties in progress", "BountiesPage")), a.length > 0 ? l.createElement(l.Fragment, null, this.renderTitle(this.COMPLETED), this.renderBounties(a)) : null)
                }, t.prototype.renderRightColumn = function(e) {
                    return l.createElement(_._8, {
                        key: "right-column"
                    }, this.renderTitle(this.AVAILABLE), this.renderBounties(e))
                }, t.prototype.renderLeftColumnPlaceholders = function() {
                    return l.createElement(_._8, {
                        key: "left-column-placeholders"
                    }, this.renderTitle(this.IN_PROGRESS), l.createElement(_._14, {
                        height: 85
                    }))
                }, t.prototype.renderRightColumnPlaceholders = function() {
                    return l.createElement(_._8, {
                        key: "right-column-placeholders"
                    }, this.renderTitle(this.AVAILABLE), l.createElement(_._8, {
                        padding: {
                            bottom: 2
                        }
                    }, l.createElement(_._14, {
                        height: 85
                    })), l.createElement(_._8, {
                        padding: {
                            bottom: 2
                        }
                    }, l.createElement(_._14, {
                        height: 85
                    })), l.createElement(_._8, {
                        padding: {
                            bottom: 2
                        }
                    }, l.createElement(_._14, {
                        height: 85
                    })), l.createElement(_._8, {
                        padding: {
                            bottom: 2
                        }
                    }, l.createElement(_._14, {
                        height: 85
                    })))
                }, t.prototype.renderTitle = function(e) {
                    return l.createElement(_._8, {
                        margin: {
                            y: 2
                        }
                    }, l.createElement(_.Q, {
                        type: _._46.H4
                    }, e))
                }, t.prototype.renderBounties = function(e) {
                    return e.map(this.renderBounty)
                }, t.prototype.postRender = function() {
                    this.props.data.loading || this.props.latencyTracking.reportInteractive()
                }, t
            }(l.Component),
            K = Object(s.d)(Object(g.d)("BountiesPage", {
                destination: h.a.ChannelDashboardBounties
            }), Object(m.a)({
                location: y.PageviewLocation.DashboardBounties
            }), Object(d.a)(G, {
                options: function(e) {
                    return {
                        variables: {
                            login: e.match.params.channelName
                        }
                    }
                }
            }))(Y);
        n.d(t, "BountiesPage", function() {
            return K
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
        var i = {};
        a.definitions = a.definitions.concat(n("R0Dv").definitions.filter(function(e) {
            if ("FragmentDefinition" !== e.kind) return !0;
            var t = e.name.value;
            return !i[t] && (i[t] = !0, !0)
        })), e.exports = a
    },
    IuHc: function(e, t) {},
    KP8S: function(e, t) {},
    MRI1: function(e, t) {},
    Nwhx: function(e, t) {},
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
                end: 279
            }
        };
        a.loc.source = {
            body: '#import "twilight/features/bounties/models/bounty-campaign.gql"\n#import "twilight/features/bounties/models/bounty-restriction.gql"\nfragment bounty on Bounty {\nid\ncampaign {\n...bountyCampaign\n}\nstatus\nlastModifiedAt\nstartAt\nendAt\npayoutCents\nrestriction {\n...bountyRestriction\n}\n}',
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        var i = {};

        function o(e) {
            return e.filter(function(e) {
                if ("FragmentDefinition" !== e.kind) return !0;
                var t = e.name.value;
                return !i[t] && (i[t] = !0, !0)
            })
        }
        a.definitions = a.definitions.concat(o(n("rzey").definitions)), a.definitions = a.definitions.concat(o(n("ed0H").definitions)), e.exports = a
    },
    WmaG: function(e, t, n) {
        "use strict";
        var a, i = n("TToO"),
            o = n("GiK3"),
            r = n("6sO2"),
            l = n("+Znq"),
            s = n("RH2O"),
            u = n("PGY2"),
            c = n("vH/s");

        function d(e) {
            r.n.track(c.SpadeEventType.DashboardHelpInteraction, e)
        }! function(e) {
            e.OpenHelp = "open_help", e.LearnMore = "learn_more", e.OpenSendFeedback = "open_send_feedback", e.CancelFeedback = "cancel_feedback", e.SentFeedback = "sent_feedback"
        }(a || (a = {}));
        var m = n("Odds"),
            p = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.handleCancel = function() {
                        d({
                            action: a.CancelFeedback,
                            location: "dashboard/" + n.props.page
                        }), n.props.onClose()
                    }, n.handleChange = function(e) {
                        n.setState({
                            body: e.currentTarget.value
                        })
                    }, n.sendFeedback = function() {
                        return i.__awaiter(n, void 0, void 0, function() {
                            var e, t;
                            return i.__generator(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        return this.setState({
                                            inFlight: !0,
                                            errorMessage: ""
                                        }), e = "https://api.twitch.tv/kraken/users/" + this.props.currentUserID + "/stats_feedbacks", [4, Object(u.c)({
                                            path: e,
                                            method: "POST",
                                            body: {
                                                message: this.state.body,
                                                page: this.props.page
                                            }
                                        })];
                                    case 1:
                                        return t = n.sent(), d({
                                            action: a.SentFeedback,
                                            location: "dashboard/" + this.props.page
                                        }), t.isError() ? this.setState({
                                            inFlight: !1,
                                            errorMessage: t.error.message
                                        }) : this.setState({
                                            body: "",
                                            inFlight: !1,
                                            errorMessage: "",
                                            successTimeout: setTimeout(this.props.onClose, 2e3)
                                        }), [2]
                                }
                            })
                        })
                    }, n.state = {
                        body: "",
                        inFlight: !1,
                        errorMessage: "",
                        successTimeout: 0
                    }, n
                }
                return i.__extends(t, e), t.prototype.componentWillUnmount = function() {
                    clearTimeout(this.state.successTimeout)
                }, t.prototype.render = function() {
                    return o.createElement(m._8, {
                        padding: 2
                    }, o.createElement(m.W, {
                        label: Object(r.d)("How can we improve this page for you?", "DashboardFeedbackForm"),
                        error: Boolean(this.state.errorMessage.length),
                        errorMessage: this.state.errorMessage
                    }, o.createElement(m._8, {
                        padding: {
                            top: 1
                        }
                    }, o.createElement(m._43, {
                        disabled: this.state.inFlight || this.state.successTimeout > 0,
                        onChange: this.handleChange,
                        placeholder: Object(r.d)("It would help me if this page...", "DashboardFeedbackForm"),
                        rows: 4,
                        noResize: !0
                    }))), o.createElement(m._8, {
                        display: m.R.Flex,
                        flexGrow: 1,
                        flexWrap: m.U.NoWrap,
                        justifyContent: m._7.End,
                        padding: {
                            top: 2
                        }
                    }, o.createElement(m._8, {
                        padding: {
                            right: 1
                        }
                    }, o.createElement(m.v, {
                        onClick: this.handleCancel,
                        type: m.B.Text,
                        "data-test-selector": "feedback-form-cancel"
                    }, Object(r.d)("Cancel", "DashboardFeedbackForm"))), o.createElement(m.v, {
                        disabled: this.state.inFlight || this.state.successTimeout > 0 || 0 === this.state.body.length,
                        onClick: this.sendFeedback,
                        "data-test-selector": "feedback-form-submit"
                    }, this.state.successTimeout > 0 ? Object(r.d)("Sent", "DashboardFeedbackForm") : Object(r.d)("Send Feedback", "DashboardFeedbackForm"))))
                }, t
            }(o.Component);
        var b = Object(s.b)(function(e) {
                return {
                    currentUserID: e.session.user && e.session.user.id || null
                }
            })(p),
            h = (n("Nwhx"), function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.selectFeedbackForm = function() {
                        n.setState({
                            isFeedbackFormSelected: !0
                        }), d({
                            action: a.OpenSendFeedback,
                            location: "dashboard/" + n.props.page
                        })
                    }, n.unselectFeedbackForm = function() {
                        n.setState({
                            isFeedbackFormSelected: !1
                        })
                    }, n.handleLearnMoreClick = function() {
                        d({
                            action: a.LearnMore,
                            location: "dashboard/" + n.props.page
                        })
                    }, n.handleToggle = function(e) {
                        e ? n.setState({
                            isFeedbackFormSelected: !1
                        }) : d({
                            action: a.OpenHelp,
                            location: "dashboard/" + n.props.page
                        })
                    }, n.state = {
                        isFeedbackFormSelected: !1
                    }, n
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    var e;
                    return e = this.state.isFeedbackFormSelected ? o.createElement(b, {
                        page: this.props.page,
                        onClose: this.unselectFeedbackForm,
                        key: 0
                    }) : o.createElement(m._32, {
                        padding: {
                            top: .5,
                            bottom: .5
                        },
                        color: m.K.Base
                    }, o.createElement(m._6, {
                        linkTo: this.props.learnMoreUrl,
                        onClick: this.handleLearnMoreClick,
                        targetBlank: !0
                    }, o.createElement(m._8, {
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, o.createElement(m.Q, null, Object(r.d)("Learn More", "DashboardHelpMenu")))), o.createElement(m._6, {
                        onClick: this.selectFeedbackForm
                    }, o.createElement(m._8, {
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, o.createElement(m.Q, null, Object(r.d)("Send Feedback", "DashboardHelpMenu"))))), o.createElement(m._32, {
                        className: "help-menu",
                        position: m._15.Absolute,
                        margin: {
                            bottom: 2,
                            right: 2
                        },
                        zIndex: m._59.Above,
                        background: m.n.Overlay,
                        elevation: 3,
                        attachBottom: !0,
                        attachRight: !0
                    }, o.createElement(l.a, {
                        onToggle: this.handleToggle,
                        tooltipProps: {
                            align: m._50.Right,
                            direction: m._51.Top,
                            label: Object(r.d)("Help & Feedback", "DashboardHelpMenu"),
                            offsetX: "6px",
                            offsetY: "10px"
                        }
                    }, o.createElement(m.w, {
                        ariaLabel: Object(r.d)("Feedback", "DashboardHelpMenu"),
                        icon: m._23.QuestionMark,
                        "data-a-target": "help-button",
                        overlay: !0
                    }), o.createElement(m.q, {
                        direction: m.r.TopRight,
                        size: this.state.isFeedbackFormSelected ? m.s.Large : m.s.Small,
                        "data-a-target": "help-balloon",
                        offsetX: "6px"
                    }, e)))
                }, t
            }(o.Component));
        n.d(t, "a", function() {
            return h
        })
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
        var i = {};
        a.definitions = a.definitions.concat(n("R0Dv").definitions.filter(function(e) {
            if ("FragmentDefinition" !== e.kind) return !0;
            var t = e.name.value;
            return !i[t] && (i[t] = !0, !0)
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
    }
});
//# sourceMappingURL=pages.bounties-0d12e4b794c1dc1d1b756e504e1da2e7.js.map