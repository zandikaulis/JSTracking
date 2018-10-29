(window.webpackJsonp = window.webpackJsonp || []).push([
    [161], {
        "+gf1": function(e, t, n) {},
        "534W": function(e, t, n) {},
        "7Vxt": function(e, t, n) {
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
            a.definitions = a.definitions.concat(function(e) {
                return e.filter(function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var t = e.name.value;
                    return !r[t] && (r[t] = !0, !0)
                })
            }(n("D493").definitions)), e.exports = a
        },
        "B/yC": function(e, t, n) {},
        CVMv: function(e, t, n) {},
        D493: function(e, t, n) {
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
                                value: "platform"
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
                                value: "startTime"
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
                    end: 351
                }
            };
            a.loc.source = {
                body: '#import "twilight/features/bounties/models/bounty-campaign.gql"\n#import "twilight/features/bounties/models/bounty-restriction.gql"\nfragment bounty on Bounty {\nid\ncampaign {\n...bountyCampaign\n}\nstatus\nplatform\nlastModifiedAt\nstartAt\nstartTime\nendAt\npayoutCents\nmaximumPayoutCents\nmaximumPayoutCCU\nminimumPayoutCCU\nrestriction {\n...bountyRestriction\n}\n}',
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
            a.definitions = a.definitions.concat(o(n("Tu4X").definitions)), a.definitions = a.definitions.concat(o(n("MBS8").definitions)), e.exports = a
        },
        DWxE: function(e, t, n) {},
        KeYu: function(e, t, n) {
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
            a.definitions = a.definitions.concat(function(e) {
                return e.filter(function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var t = e.name.value;
                    return !r[t] && (r[t] = !0, !0)
                })
            }(n("D493").definitions)), e.exports = a
        },
        MBS8: function(e, t) {
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
        N74f: function(e, t, n) {
            "use strict";
            n.d(t, "b", function() {
                return r
            }), n.d(t, "a", function() {
                return i
            });
            var a, r, o = n("Ue10");
            ! function(e) {
                e.Android = "Android", e.HTCVive = "HTC Vive", e.iOS = "iOS", e.MacOS = "Mac OS", e.NintendoSwitch = "Nintendo Switch", e.OculusRift = "Oculus Rift", e.PC = "PC", e.PlayStation4 = "PlayStation 4", e.PlayStationVR = "PlayStation VR", e.XboxOne = "Xbox One"
            }(r || (r = {}));
            var i = ((a = {})[r.Android] = o.rb.Android, a[r.HTCVive] = o.rb.HTCVibe, a[r.iOS] = o.rb.IOS, a[r.MacOS] = o.rb.MacOs, a[r.NintendoSwitch] = o.rb.NintendoSwitch, a[r.OculusRift] = o.rb.OculusVR, a[r.PC] = o.rb.Windows, a[r.PlayStation4] = o.rb.PlayStation, a[r.PlayStationVR] = o.rb.PlayStation, a[r.XboxOne] = o.rb.XboxOne, a)
        },
        "Nzv/": function(e, t, n) {},
        OnAS: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return a
            }), n.d(t, "d", function() {
                return l
            }), n.d(t, "b", function() {
                return s
            }), n.d(t, "c", function() {
                return c
            });
            var a, r = n("/7QA"),
                o = n("f00E"),
                i = n("2xye");

            function l(e) {
                var t = {
                    user_id: e.channelID,
                    bounty_page_action_desc: e.action
                };
                r.p.tracking.track(i.SpadeEventType.BountyBoardActions, t)
            }

            function s(e) {
                var t = {
                    bounty_id: e.bounty.id,
                    campaign_id: e.bounty.campaign.id,
                    user_id: e.channelID,
                    bounty_action_desc: e.action,
                    bounty_status: e.bounty.status,
                    bounty_cancel_reason: e.cancelReason,
                    bounty_selected_platform: e.selectedPlatform
                };
                r.p.tracking.track(i.SpadeEventType.BountyBoardActions, t)
            }

            function c(e) {
                var t = {
                    bounty_id: e.bounty.id,
                    campaign_id: e.bounty.campaign.id,
                    user_id: e.channelID,
                    impression_id: Object(o.b)(),
                    impression_group_id: e.impressionGroupID,
                    bounty_payout: e.bounty.payoutCents,
                    bounty_status: e.bounty.status,
                    bounty_expiration_date: e.bounty.endAt
                };
                r.p.tracking.track(i.SpadeEventType.BountyBoardImpressions, t)
            }! function(e) {
                e.ViewDetails = "view_details", e.ViewLegal = "view_legal", e.DeclineLegal = "decline_legal", e.AcceptLegal = "accept_legal", e.Terms = "terms", e.CancelBounty = "cancel_bounty", e.ViewTermsOfUse = "view_terms_of_use", e.DismissFTUE = "dismiss_first_time_user_experience"
            }(a || (a = {}))
        },
        Tu4X: function(e, t) {
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
                                value: "streamLengthMinutes"
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
                            arguments: [],
                            directives: []
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "coverURL"
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
                                value: "availablePlatforms"
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
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 247
                }
            };
            n.loc.source = {
                body: "fragment bountyCampaign on BountyCampaign {\nid\ntitle\ntype\nsponsor\ndetails\nstreamLengthMinutes\ndisplayName\nboxArtURL\ncoverURL\ngame {\nid\ndisplayName\nboxArtURL(width:85 height: 113)\ncoverURL(width: 566 height: 85)\n}\navailablePlatforms\nstartAt\nendAt\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        Z9g5: function(e, t, n) {
            "use strict";
            var a = n("mrSG"),
                r = n("q1tI"),
                o = n("/MKj"),
                i = n("fvjX"),
                l = n("aCAx"),
                s = n("Ue10"),
                c = n("/7QA"),
                u = n("yR8l"),
                d = n("geRD"),
                m = n("DMoW"),
                p = n("7Vxt"),
                y = function(e) {
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
                            return a.__awaiter(t, void 0, void 0, function() {
                                var e, t, n;
                                return a.__generator(this, function(a) {
                                    switch (a.label) {
                                        case 0:
                                            e = null, a.label = 1;
                                        case 1:
                                            return a.trys.push([1, 3, 4, 5]), t = {
                                                bountyID: this.props.bounty.id,
                                                reason: this.state.reason,
                                                userID: this.props.channelID
                                            }, [4, this.props.cancelBounty(Object(d.a)(t))];
                                        case 2:
                                            return (n = a.sent()).data.cancelBounty && n.data.cancelBounty.error ? e = n.data.cancelBounty.error.code : n.data.cancelBounty && n.data.cancelBounty.bounty && this.props.handleBountyStatusChanged(n.data.cancelBounty.bounty), [3, 5];
                                        case 3:
                                            return a.sent(), e = m.h.UNKNOWN_ERROR, [3, 5];
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
                            return e === m.h.BOUNTY_NOT_LIVE ? Object(c.d)("This bounty is no longer live. It may have already been completed or cancelled.", "CancelBountyModal") : Object(c.d)("Something went wrong and the bounty could not be cancelled.", "CancelBountyModal")
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        var e = this,
                            t = this.reasons.map(function(t) {
                                var n = t.key,
                                    a = t.text;
                                return r.createElement("option", {
                                    value: n,
                                    key: n,
                                    selected: e.state.reason === n
                                }, a)
                            }),
                            n = Object(c.d)("Cancel Bounty", "CancelBountyModal"),
                            a = null;
                        return this.state.errorCode && (a = r.createElement(s.Xa, {
                            "data-test-selector": "accept-bounty-modal-error-message",
                            padding: {
                                top: 2
                            },
                            fullWidth: !0,
                            flexShrink: 0
                        }, r.createElement(s.W, {
                            color: s.O.Error
                        }, this.getMessageFromErrorCode(this.state.errorCode)))), r.createElement(s.Xa, {
                            padding: 3
                        }, r.createElement(s.Xa, null, r.createElement(s.W, {
                            type: s.Rb.H4
                        }, n), r.createElement(s.Xa, {
                            margin: {
                                y: 1
                            }
                        }, r.createElement(s.W, null, Object(c.d)("Are you sure you want to cancel this bounty? If there are still bounties available you can pick it up again later.", "CancelBountyModal"))), r.createElement(s.Xa, {
                            margin: {
                                bottom: 1
                            }
                        }, r.createElement(s.W, null, Object(c.d)("Let us know why the bounty didn't work out:", "CancelBountyModal"))), r.createElement(s.xb, {
                            "data-test-selector": "cancel-bounty-modal-reason-select",
                            onChange: this.handleSelectChange,
                            value: this.state.reason
                        }, r.createElement("option", {
                            disabled: !0,
                            selected: !0,
                            value: ""
                        }, Object(c.d)("Select Reason", "CancelBountyModal")), t)), a, r.createElement(s.Xa, {
                            display: s.X.Flex,
                            flexDirection: s.Aa.Row,
                            alignItems: s.f.Center,
                            justifyContent: s.Wa.Center,
                            padding: {
                                top: 2
                            }
                        }, r.createElement(s.Xa, {
                            margin: {
                                left: .5,
                                right: .5
                            }
                        }, r.createElement(s.z, {
                            "data-test-selector": "cancel-bounty-modal-cancel-button",
                            onClick: this.onClose,
                            type: s.F.Hollow
                        }, Object(c.d)("Nevermind", "CancelBountyModal"))), r.createElement(s.Xa, {
                            margin: {
                                left: .5,
                                right: .5
                            }
                        }, r.createElement(s.z, {
                            "data-test-selector": "cancel-bounty-modal-confirm-button",
                            disabled: "" === this.state.reason || !!this.state.errorCode,
                            onClick: this.onCancel,
                            type: s.F.Alert
                        }, n))))
                    }, t
                }(r.PureComponent),
                h = Object(u.a)(p, {
                    name: "cancelBounty"
                })(y),
                b = (n("CVMv"), function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        return r.createElement(s.Bb, {
                            className: "cancel-bounty-modal__container",
                            background: s.r.Base
                        }, r.createElement(h, {
                            "data-test-selector": "cancel-bounty-modal-selector",
                            onClose: this.props.closeModal,
                            bounty: this.props.bounty,
                            channelID: this.props.channelID,
                            handleBountyStatusChanged: this.props.handleBountyStatusChanged,
                            refreshData: this.props.refreshData
                        }))
                    }, t
                }(r.Component));
            var f = Object(o.connect)(null, function(e) {
                return Object(i.bindActionCreators)({
                    closeModal: l.c
                }, e)
            })(b);
            n.d(t, !1, function() {
                return "cancel-bounty-modal-selector"
            }), n.d(t, !1, function() {
                return b
            }), n.d(t, "a", function() {
                return f
            })
        },
        aSNP: function(e, t, n) {},
        h4KP: function(e, t, n) {
            "use strict";
            n.r(t);
            var a = n("mrSG"),
                r = n("q1tI"),
                o = n("fvjX"),
                i = n("/7QA"),
                l = n("ZDlU"),
                s = n("yR8l"),
                c = n("V+GM"),
                u = n("geRD"),
                d = n("f00E"),
                m = n("DMoW"),
                p = n("NvVO"),
                y = n("2xye"),
                h = n("GnwI"),
                b = n("6x+I"),
                f = n("pQow"),
                g = n("OnAS"),
                v = n("Ue10"),
                E = (n("DWxE"), {
                    "data-test-selector": "bounty-expanded-section"
                }),
                B = {
                    "data-test-selector": "bounty-heder-amount"
                },
                w = {
                    "data-test-selector": "bounty-header-date"
                },
                k = {
                    "data-test-selector": "bounty-content-description"
                },
                C = {
                    "data-test-selector": "bounty-content-payout"
                },
                A = {
                    "data-test-selector": "bounty-content-title"
                },
                x = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.renderHeader = function() {
                            var e = t.props,
                                n = e.isSelected,
                                o = e.bounty,
                                i = e.renderHeaderAmount,
                                l = e.renderHeaderDate,
                                s = {
                                    backgroundImage: "url(" + (o.campaign.coverURL || o.campaign.game && o.campaign.game.coverURL || "") + ")"
                                };
                            return r.createElement(v.Bb, {
                                elevation: 2
                            }, r.createElement(v.U, {
                                hoverUnderlineNone: !0,
                                to: t.getPath(),
                                onClick: t.onClickHeader,
                                className: "bounty-item__link"
                            }, r.createElement(v.Xa, {
                                display: v.X.Flex,
                                position: v.hb.Relative
                            }, r.createElement(v.Xa, {
                                position: v.hb.Absolute,
                                fullWidth: !0,
                                fullHeight: !0
                            }, r.createElement("div", {
                                className: "bounty-item__backdrop",
                                style: s
                            })), r.createElement(v.Xa, {
                                className: "bounty-item__indicator",
                                position: v.hb.Relative,
                                display: v.X.Flex,
                                alignItems: v.f.Center,
                                justifyContent: v.Wa.Center,
                                padding: {
                                    left: 2
                                }
                            }, r.createElement(v.qb, {
                                asset: n ? v.rb.AngleUp : v.rb.AngleDown,
                                type: v.sb.Alt2
                            })), r.createElement(v.Xa, {
                                flexGrow: 1,
                                className: "bounty-item__description",
                                display: v.X.Flex,
                                padding: {
                                    y: 2,
                                    left: 1,
                                    right: 2
                                },
                                justifyContent: v.Wa.Around,
                                flexDirection: v.Aa.Column,
                                position: v.hb.Relative
                            }, r.createElement(v.W, {
                                type: v.Rb.H4,
                                color: v.O.Base,
                                ellipsis: !0,
                                title: o.campaign.title
                            }, o.campaign.title), r.createElement(v.W, a.__assign({}, w, {
                                color: v.O.Alt2
                            }), l)), r.createElement(v.Bb, a.__assign({}, B, {
                                className: "bounty-item__amount",
                                display: v.X.Flex,
                                alignItems: v.f.Center,
                                justifyContent: v.Wa.Center,
                                flexGrow: 0,
                                flexShrink: 0,
                                position: v.hb.Relative,
                                background: v.r.Base
                            }), i))))
                        }, t.renderContent = function() {
                            var e = t.props,
                                n = e.bounty,
                                o = e.contentPayout,
                                i = e.extraDetails,
                                l = e.renderContentActions,
                                s = e.renderContentDescription,
                                c = n.campaign.displayName || n.campaign.game && n.campaign.game.displayName || "",
                                u = n.campaign.boxArtURL || n.campaign.game && n.campaign.game.boxArtURL || "";
                            return r.createElement(v.i, {
                                type: v.n.SlideInTop,
                                duration: v.k.Short,
                                enabled: !0,
                                timing: v.m.EaseOut
                            }, r.createElement(v.Bb, a.__assign({
                                className: "bounty-item__expanded",
                                elevation: 1,
                                padding: 2,
                                display: v.X.Flex,
                                flexDirection: v.Aa.Column,
                                fullWidth: !0
                            }, E), r.createElement(v.Xa, {
                                display: v.X.Flex,
                                flexDirection: v.Aa.Row,
                                flexWrap: v.Ba.NoWrap,
                                fullWidth: !0
                            }, r.createElement(v.Xa, {
                                className: "bounty-item__boxart",
                                margin: {
                                    right: 2,
                                    bottom: 2
                                }
                            }, r.createElement(v.o, {
                                ratio: v.p.BoxArt
                            }, r.createElement("img", {
                                src: u
                            }))), r.createElement(v.Xa, null, r.createElement(v.W, a.__assign({}, A, {
                                type: v.Rb.H4
                            }), c), r.createElement(v.W, {
                                color: v.O.Alt2
                            }, n.campaign.sponsor), r.createElement(v.Xa, {
                                padding: {
                                    top: 2
                                }
                            }), r.createElement(v.Xa, a.__assign({}, k), s))), r.createElement(v.Xa, {
                                padding: {
                                    top: 2
                                }
                            }, i && t.renderContentExtraDetails(i)), r.createElement(v.Xa, {
                                fullWidth: !0,
                                display: v.X.Flex,
                                flexDirection: v.Aa.Row,
                                justifyContent: v.Wa.Between,
                                alignItems: v.f.Center
                            }, r.createElement(v.Xa, null, r.createElement(v.W, a.__assign({}, C, {
                                type: v.Rb.H4
                            }), o)), r.createElement(v.Xa, {
                                display: v.X.Flex,
                                flexDirection: v.Aa.Row,
                                alignItems: v.f.Center
                            }, l))))
                        }, t.renderContentExtraDetails = function(e) {
                            return null === t.props.bounty.campaign.details ? null : r.createElement(v.Xa, {
                                fullWidth: !0,
                                margin: {
                                    bottom: 1
                                }
                            }, r.createElement(b, {
                                escapeHtml: !0,
                                source: e,
                                renderers: {
                                    Link: t.renderNewWindowLink
                                }
                            }))
                        }, t.renderNewWindowLink = function(e) {
                            return r.createElement("a", {
                                href: e.href,
                                target: "_blank"
                            }, e.children)
                        }, t.trackImpression = function() {
                            var e = t.props,
                                n = e.bounty,
                                a = e.channelID,
                                r = e.impressionGroupID;
                            Object(g.c)({
                                bounty: n,
                                channelID: a,
                                impressionGroupID: r
                            })
                        }, t.onClickHeader = function() {
                            var e = t.props,
                                n = e.isSelected,
                                a = e.bounty,
                                r = e.channelID;
                            n || Object(g.b)({
                                action: g.a.ViewDetails,
                                bounty: a,
                                channelID: r,
                                cancelReason: void 0,
                                selectedPlatform: void 0
                            })
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.trackImpression()
                    }, t.prototype.render = function() {
                        var e = this.props.isSelected;
                        return r.createElement(v.Xa, {
                            className: "bounty-item",
                            margin: {
                                bottom: 1
                            }
                        }, this.renderHeader(), e && this.renderContent())
                    }, t.prototype.getPath = function() {
                        var e = this.props,
                            t = e.bounty,
                            n = e.channelName;
                        return e.isSelected ? Object(f.c)(n) : t.status === m.f.AVAILABLE ? Object(f.b)(n, t.campaign) : Object(f.a)(n, t)
                    }, t
                }(r.Component),
                I = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.renderContentDescription = function() {
                            var e, n = t.props.bounty;
                            return e = n.lastModifiedAt ? Object(i.d)("This bounty was cancelled on {dateCancelled}.", {
                                dateCancelled: r.createElement(v.W, {
                                    key: "x_bold_text_0",
                                    type: v.Rb.Strong
                                }, Object(i.c)(new Date(n.lastModifiedAt)))
                            }, "BountyItemCancelled") : Object(i.d)("This bounty was cancelled.", "BountyItemCancelled"), r.createElement(r.Fragment, null, e)
                        }, t.renderHeaderAmount = function() {
                            return r.createElement(v.W, {
                                type: v.Rb.H2
                            }, Object(i.d)("N/A", "BountyItemCancelled"))
                        }, t.renderContentPayout = function() {
                            var e = t.props.bounty;
                            return Object(i.d)("Max Payout: ${amount}", {
                                amount: e.maximumPayoutCents / 100
                            }, "BountyItemCancelled")
                        }, t.renderHeaderDate = function() {
                            var e = t.props.bounty;
                            return e.lastModifiedAt ? Object(i.d)("Cancelled on {relativeOrAbsoluteDate}", {
                                relativeOrAbsoluteDate: Object(i.c)(new Date(e.lastModifiedAt))
                            }, "BountyItemCancelled") : ""
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        var e = this.props,
                            t = e.bounty,
                            n = e.channelID,
                            a = e.channelName,
                            o = e.impressionGroupID,
                            i = e.isSelected;
                        return r.createElement(x, {
                            bounty: t,
                            channelID: n,
                            channelName: a,
                            contentPayout: this.renderContentPayout(),
                            extraDetails: t.campaign.details,
                            impressionGroupID: o,
                            isSelected: i,
                            renderContentActions: null,
                            renderContentDescription: this.renderContentDescription(),
                            renderHeaderAmount: this.renderHeaderAmount(),
                            renderHeaderDate: this.renderHeaderDate()
                        })
                    }, t
                }(r.Component),
                O = Object(o.compose)(Object(h.b)("BountyItemCancelled", {
                    autoReportInteractive: !0
                }))(I),
                S = new(function() {
                    return function() {
                        var e = this;
                        this.keyCounter = 0, this.renderAux = function(t) {
                            return r.createElement(v.W, {
                                key: "x_bold_text_" + ++e.keyCounter,
                                type: v.Rb.Strong
                            }, t)
                        }, this.render = this.renderAux.bind(this)
                    }
                }()),
                T = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.renderContentDescription = function() {
                            var e = t.getPayoutMessage();
                            return r.createElement(r.Fragment, null, e)
                        }, t.getPayoutMessage = function() {
                            var e = t.props.bounty,
                                n = e.maximumPayoutCCU || 0,
                                a = e.minimumPayoutCCU || 0,
                                r = e.maximumPayoutCents || 0,
                                o = e.payoutCents || 0;
                            return 0 === e.payoutCents ? Object(i.d)("Unfortunately your average concurrent viewers did not reach the minimum requirement of <x:bold>{ccuMin} concurrent viewers</x:bold> and you will not receive a payout for this bounty. Make sure to do bounties during your peak hours to increase your chances of a good payout.", {
                                "x:bold": S.render,
                                ccuMin: a
                            }, "BountyItemCompleted") : o === r ? Object(i.d)("Based on your concurrent viewers, you got the max payout of <x:bold>${maxPayout}</x:bold>. Bounty payouts are bundled with your standard monthly accrued revenue payment.", {
                                "x:bold": S.render,
                                maxPayout: r / 100
                            }, "BountyItemCompleted") : n ? Object(i.d)("You hit <x:bold>{percentPayout}%</x:bold> of your target payout goal, for a total of <x:bold>${payout}</x:bold>. Bounty payouts are bundled with your standard monthly accrued revenue payment.", {
                                "x:bold": S.render,
                                percentPayout: Math.floor(o / r * 100),
                                payout: o / 100
                            }, "BountyItemCompleted") : Object(i.d)("Based on your concurrent viewers, you got a payout of <x:bold>${payout}</x:bold> out of a potential ${maxPayout}. Bounty payouts are bundled with your standard monthly accrued revenue payment.", {
                                "x:bold": S.render,
                                payout: o / 100,
                                maxPayout: r / 100
                            }, "BountyItemCompleted")
                        }, t.renderHeaderAmount = function() {
                            var e = t.props.bounty;
                            return r.createElement(v.Xa, {
                                display: v.X.Flex
                            }, r.createElement(v.W, {
                                fontSize: v.Ca.Size7
                            }, "$"), r.createElement(v.W, {
                                type: v.Rb.H2
                            }, (e.payoutCents || 0) / 100))
                        }, t.renderContentPayout = function() {
                            var e = t.props.bounty;
                            return Object(i.d)("Your Payout: ${amount}", {
                                amount: (e.payoutCents || 0) / 100
                            }, "BountyItemCompleted")
                        }, t.renderHeaderDate = function() {
                            var e = t.props.bounty;
                            return e.lastModifiedAt ? Object(i.d)("Completed on {relativeOrAbsoluteDate}", {
                                relativeOrAbsoluteDate: Object(i.c)(new Date(e.lastModifiedAt))
                            }, "BountyItemCompleted") : ""
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        var e = this.props,
                            t = e.bounty,
                            n = e.channelID,
                            a = e.channelName,
                            o = e.impressionGroupID,
                            i = e.isSelected;
                        return r.createElement(x, {
                            bounty: t,
                            channelID: n,
                            channelName: a,
                            contentPayout: this.renderContentPayout(),
                            extraDetails: null,
                            impressionGroupID: o,
                            isSelected: i,
                            renderContentActions: null,
                            renderContentDescription: this.renderContentDescription(),
                            renderHeaderAmount: this.renderHeaderAmount(),
                            renderHeaderDate: this.renderHeaderDate()
                        })
                    }, t
                }(r.Component),
                _ = Object(o.compose)(Object(h.b)("BountyItemCompleted", {
                    autoReportInteractive: !0
                }))(T),
                D = n("jCK8"),
                N = n("/MKj"),
                P = n("aCAx"),
                j = n("kRSO"),
                R = n("hLBu"),
                W = {
                    "data-test-selector": "bounty-description"
                },
                M = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        var e = this,
                            t = this.props,
                            n = t.bounty,
                            o = t.channelName,
                            l = n.maximumPayoutCCU || 0,
                            s = n.minimumPayoutCCU || 0,
                            c = n.campaign.displayName || n.campaign.game && n.campaign.game.displayName || "";
                        return r.createElement(r.Fragment, null, r.createElement(v.W, a.__assign({}, W, {
                            type: v.Rb.P,
                            key: "bounty_description_" + n.id
                        }), Object(i.d)("At any point during a stream session, for <x:bold>{streamLength}</x:bold>, watch the <x:bold>{displayName} Trailer</x:bold> and discuss what you saw on stream with an average of <x:bold>{ccuMax} concurrent viewers</x:bold>. If you don't hit an average of at least <x:bold>{ccuMin} concurrents</x:bold>, you will not receive a payout. If you achieve the minimum but do not reach the goal, you will get a <x:bold>proportional percentage</x:bold> of the payout.", {
                            "x:bold": S.render,
                            ccuMax: l,
                            ccuMin: s,
                            displayName: c,
                            streamLength: Object(R.a)(n.campaign.streamLengthMinutes)
                        }, "BountyItemTrailerDescription")), r.createElement("ul", {
                            className: "bounty-item__description-list",
                            key: "bounty_rule_list_" + n.id
                        }, r.createElement("li", {
                            key: "bounty_rule_2_" + n.id
                        }, Object(i.d)("No needless bad-mouthing of the content, and be sure to engage with the content and your community!", "BountyItemTrailerDescription")), r.createElement("li", {
                            key: "bounty_rule_3_" + n.id
                        }, Object(i.d)("Use the <x:bold>Bounties widget</x:bold> on your <x:link>Live Dashboard</x:link> to add <x:bold>#sponsored</x:bold> to your stream title.", {
                            "x:bold": S.render,
                            "x:link": function(t) {
                                return r.createElement(v.U, {
                                    to: "/" + e.props.channelName + "/dashboard/live"
                                }, t)
                            }
                        }, "BountyItemTrailerDescription")), r.createElement("li", {
                            key: "bounty_rule_4_" + n.id
                        }, Object(i.d)('Turn on the "<x:bold>Store Past Broadcasts</x:bold>" option in your <x:link>Channel Settings</x:link>.', {
                            "x:bold": S.render,
                            "x:link": function(e) {
                                return r.createElement(v.U, {
                                    key: "bount_item_settings_link_" + n.id,
                                    to: "/" + o + "/dashboard/settings"
                                }, e)
                            }
                        }, "BountyItemTrailerDescription")), r.createElement("li", {
                            key: "bounty_rule_5_" + n.id
                        }, Object(i.d)("Bounties are held in your queue for a <x:bold>maximum of 5 days</x:bold>. They will expire sooner if the broader bounty campaign is ending.", {
                            "x:bold": S.render
                        }, "BountyItemTrailerDescription"))))
                    }, t
                }(r.Component),
                L = {
                    "data-test-selector": "bounty-activate-btn"
                },
                X = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.renderContentActions = function() {
                            return r.createElement(v.z, a.__assign({}, L, {
                                onClick: t.showAcceptBountyModal
                            }), Object(i.d)("Activate Bounty", "BountyTrailerItemAvailable"))
                        }, t.renderContentDescription = function() {
                            var e = t.props,
                                n = e.bounty,
                                a = e.channelName;
                            return r.createElement(M, {
                                bounty: n,
                                channelName: a
                            })
                        }, t.renderHeaderAmount = function() {
                            var e = t.props.bounty;
                            return r.createElement(v.Xa, {
                                display: v.X.Flex
                            }, r.createElement(v.W, {
                                fontSize: v.Ca.Size7
                            }, "$"), r.createElement(v.W, {
                                type: v.Rb.H2
                            }, e.maximumPayoutCents / 100))
                        }, t.renderContentPayout = function() {
                            var e = t.props.bounty;
                            return Object(i.d)("Max Payout: ${amount}", {
                                amount: e.maximumPayoutCents / 100
                            }, "BountyTrailerItemAvailable")
                        }, t.renderHeaderDate = function() {
                            var e = t.props.bounty,
                                n = Object(i.c)(new Date(e.campaign.endAt)) + " " + Object(i.j)(new Date(e.campaign.endAt));
                            return Object(i.d)("Available until {relativeOrAbsoluteDate}", {
                                relativeOrAbsoluteDate: n
                            }, "BountyTrailerItemAvailable")
                        }, t.showAcceptBountyModal = function() {
                            var e = t.props,
                                n = e.bounty,
                                a = e.channelID,
                                r = e.channelName,
                                o = e.handleBountyStatusChanged,
                                i = e.refreshData,
                                l = e.showAcceptBountyModal;
                            Object(g.b)({
                                action: g.a.ViewLegal,
                                bounty: n,
                                channelID: a,
                                selectedPlatform: void 0,
                                cancelReason: void 0
                            }), l({
                                bounty: n,
                                channelID: a,
                                channelName: r,
                                handleBountyStatusChanged: o,
                                platform: null,
                                refreshData: i
                            })
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        var e = this.props,
                            t = e.bounty,
                            n = e.channelID,
                            a = e.channelName,
                            o = e.impressionGroupID,
                            i = e.isSelected;
                        return r.createElement(x, {
                            bounty: t,
                            channelID: n,
                            channelName: a,
                            contentPayout: this.renderContentPayout(),
                            extraDetails: t.campaign.details,
                            impressionGroupID: o,
                            isSelected: i,
                            renderContentActions: this.renderContentActions(),
                            renderContentDescription: this.renderContentDescription(),
                            renderHeaderAmount: this.renderHeaderAmount(),
                            renderHeaderDate: this.renderHeaderDate()
                        })
                    }, t
                }(r.Component),
                F = Object(o.compose)(Object(h.b)("BountyTrailerItemAvailable", {
                    autoReportInteractive: !0
                }))(X);
            var U = Object(N.connect)(null, function(e) {
                    return Object(o.bindActionCreators)({
                        showAcceptBountyModal: function(e) {
                            var t = a.__rest(e, []);
                            return Object(P.d)(j.a, t)
                        }
                    }, e)
                })(F),
                V = n("Z9g5"),
                H = {
                    "data-test-selector": "bounty-terms-btn"
                },
                G = {
                    "data-test-selector": "bounty-cancel-btn"
                },
                q = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.renderContentActions = function() {
                            return r.createElement(r.Fragment, null, r.createElement(v.Xa, {
                                margin: {
                                    right: 2
                                }
                            }, r.createElement(v.z, a.__assign({}, H, {
                                type: v.F.Text,
                                onClick: t.showTermsBountyModal
                            }), Object(i.d)("Terms", "BountyTrailerItemLive"))), r.createElement(v.z, a.__assign({}, G, {
                                type: v.F.Hollow,
                                onClick: t.showCancelBountyModal
                            }), Object(i.d)("Cancel Bounty", "BountyTrailerItemLive")))
                        }, t.renderContentDescription = function() {
                            var e = t.props,
                                n = e.bounty,
                                a = e.channelName;
                            return r.createElement(M, {
                                bounty: n,
                                channelName: a
                            })
                        }, t.renderHeaderAmount = function() {
                            var e = t.props.bounty;
                            return r.createElement(v.Xa, {
                                display: v.X.Flex
                            }, r.createElement(v.W, {
                                fontSize: v.Ca.Size7
                            }, "$"), r.createElement(v.W, {
                                type: v.Rb.H2
                            }, e.maximumPayoutCents / 100))
                        }, t.renderContentPayout = function() {
                            var e = t.props.bounty;
                            return Object(i.d)("Max Payout: ${amount}", {
                                amount: e.maximumPayoutCents / 100
                            }, "BountyTrailerItemLive")
                        }, t.renderHeaderDate = function() {
                            var e = t.props.bounty;
                            return e.endAt ? Object(i.d)("Expires {relativeDate}", {
                                relativeDate: Object(i.i)(new Date(e.endAt))
                            }, "BountyTrailerItemLive") : ""
                        }, t.showTermsBountyModal = function() {
                            var e = t.props,
                                n = e.bounty,
                                a = e.channelID,
                                r = e.channelName,
                                o = e.handleBountyStatusChanged,
                                i = e.refreshData,
                                l = e.showAcceptBountyModal;
                            Object(g.b)({
                                action: g.a.ViewLegal,
                                bounty: n,
                                channelID: a,
                                selectedPlatform: void 0,
                                cancelReason: void 0
                            }), l({
                                bounty: n,
                                channelID: a,
                                channelName: r,
                                handleBountyStatusChanged: o,
                                platform: n.platform,
                                refreshData: i
                            })
                        }, t.showCancelBountyModal = function() {
                            var e = t.props,
                                n = e.bounty,
                                a = e.channelID,
                                r = e.handleBountyStatusChanged,
                                o = e.refreshData;
                            (0, e.showCancelBountyModal)({
                                bounty: n,
                                channelID: a,
                                handleBountyStatusChanged: r,
                                refreshData: o
                            })
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        var e = this.props,
                            t = e.bounty,
                            n = e.channelID,
                            a = e.channelName,
                            o = e.impressionGroupID,
                            i = e.isSelected;
                        return r.createElement(x, {
                            bounty: t,
                            channelID: n,
                            channelName: a,
                            contentPayout: this.renderContentPayout(),
                            extraDetails: t.campaign.details,
                            impressionGroupID: o,
                            isSelected: i,
                            renderContentActions: this.renderContentActions(),
                            renderContentDescription: this.renderContentDescription(),
                            renderHeaderAmount: this.renderHeaderAmount(),
                            renderHeaderDate: this.renderHeaderDate()
                        })
                    }, t
                }(r.Component),
                Y = Object(o.compose)(Object(h.b)("BountyTrailerItemLive", {
                    autoReportInteractive: !0
                }))(q);
            var z = Object(N.connect)(null, function(e) {
                    return Object(o.bindActionCreators)({
                        showAcceptBountyModal: function(e) {
                            var t = a.__rest(e, []);
                            return Object(P.d)(j.a, t)
                        },
                        showCancelBountyModal: function(e) {
                            var t = a.__rest(e, []);
                            return Object(P.d)(V.a, t)
                        }
                    }, e)
                })(Y),
                $ = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        return r.createElement(v.Xa, {
                            padding: 3
                        }, r.createElement(v.Xa, {
                            margin: {
                                bottom: 1
                            },
                            textAlign: v.Nb.Center
                        }, r.createElement(v.W, {
                            "data-test-selector": "tou-bounty-modal-header",
                            type: v.Rb.H3
                        }, Object(i.d)("Terms of Use", "TermsOfUseBountyModal"))), r.createElement(v.Bb, {
                            "data-test-selector": "tou-bounty-legal-container",
                            className: "accept-bounty-modal__agreement-text",
                            border: !0,
                            padding: 1
                        }, "Last Updated: April 12, 2018", r.createElement("br", null), r.createElement("br", null), "Welcome to the Bounty Board services operated by Twitch Interactive, Inc. (with its affiliates, “Twitch”, “us”, “we”, “our”) consisting of the website available at ", r.createElement("a", {
                            href: "https://www.twitch.tv/",
                            target: "_blank",
                            rel: "noopener noreferrer"
                        }, "http://www.twitch.tv"), ' and any related services Twitch provides (collectively, the “Service”). The following terms of use (the "Terms") govern your access to and use of the Service and form an agreement between Twitch and you.', r.createElement("br", null), 'An “Influencer” is defined as a user of the Service offering to create promotional online media content for Advertisers (as defined below). The term "you" refers to the person or entity (i) visiting the Service, browsing or otherwise using the Service (including Influencers), or (ii) communicating with individuals or businesses registered on the Service (each, an “Advertiser”) for the purpose of creating promotional online media content for their products or services (each, a “Bounty”).', r.createElement("br", null), r.createElement("br", null), "By accessing or using the Service, you accept and agree to be bound by and comply with these Terms. IF YOU DO NOT ACCEPT AND AGREE TO BE BOUND BY THESE TERMS, PLEASE DO NOT ACCESS OR USE THE SERVICE. If you are accessing or using the Service on behalf of another person or a corporate entity, you represent and warrant that you have the authority to bind such person or entity to these Terms.", r.createElement("br", null), r.createElement("br", null), "Your use of the Service is further subject to Twitch’s (i) ", r.createElement("a", {
                            href: "https://www.twitch.tv/p/legal/terms-of-service/",
                            target: "_blank",
                            rel: "noopener noreferrer"
                        }, "Terms of Service (Terms of Service (“TOS”)"), ", (ii) ", r.createElement("a", {
                            href: "https://www.twitch.tv/p/legal/community-guidelines/",
                            target: "_blank",
                            rel: "noopener noreferrer"
                        }, "Community Guidelines"), ", and (iii) ", r.createElement("a", {
                            href: "https://www.twitch.tv/p/legal/privacy-policy/",
                            target: "_blank",
                            rel: "noopener noreferrer"
                        }, "Privacy Policy"), ", which are incorporated fully herein.  Where there is a conflict between the foregoing terms and these Terms, these Terms shall govern.", r.createElement("br", null), r.createElement("br", null), "The Service is provided solely (the “Permitted Use”) to: (i) as an Influencer, assist you in gathering information about the various types of Bounty opportunities and Advertisers available on the Service, including profiles, price ranges, and Bounty descriptions (each, an “Advertiser Profile”); (ii) as an Advertiser, assist you in gathering information about the various types of Bounties and Influencers available on the Platform, including profiles, price quotes, and videos of Influencers (each, an “Influencer Profile”); (iii) enable you to post information regarding yourself and to respond to any Bounty opportunities; (iv) facilitate communication between Advertisers and Influencers with the objective of entering into a Bounty Order; and (v) facilitate the transmission of payments from the Advertiser to Influencers under a Bounty Order.", r.createElement("br", null), r.createElement("br", null), r.createElement(v.W, {
                            type: v.Rb.Strong
                        }, "1.\tModifications to these Terms and Service"), r.createElement("br", null), r.createElement("br", null), "Twitch reserves the right to change these Terms at any time at our discretion. We will give you notice of the changes by posting an updated version of these Terms online, updating the “Last Modified” date above, or by emailing you at an email address you have provided. Changes to these Terms will be effective as of the date we post them or otherwise notify you of them, unless we specify a different effective date when we make a particular change. Your continued use of the Service after changes to these Terms take effect will constitute your acceptance of the changes. If you do not agree to a change, you must stop using the Service.", r.createElement("br", null), r.createElement("br", null), r.createElement(v.Xa, {
                            margin: {
                                left: 1
                            }
                        }, 'Twitch reserves the right to change any information, material or content (including, but not limited to, price, features, availability of Advertiser or Influencer, Influencer Profiles and Advertiser Profiles, types of Bounties, and reviews of Bounties and Advertisers) contained on or provided through the Service (the "Content") at any time, and from time to time, without notice.'), r.createElement("br", null), r.createElement("br", null), r.createElement(v.W, {
                            type: v.Rb.Strong
                        }, "2.\tLicense Grants"), r.createElement("br", null), "The Service is owned and operated by Twitch. Unless otherwise indicated, all content, information, and other materials on the Service are “Materials” as such term is defined in the TOS. Unless otherwise expressly stated in writing by Twitch, by agreeing to these Terms you are granted a license (i.e. a personal and limited right) to access and use the Service and Materials as set forth in Section 7 of the TOS.", r.createElement("br", null), r.createElement("br", null), "Unless otherwise agreed to in a written agreement between you and Twitch that was signed by an authorized representative of Twitch, you grant to Twitch an unrestricted, worldwide, perpetual, irrevocable, fully sub-licensable, nonexclusive, and royalty-free right to use, reproduce, modify, adapt, publish, translate, create derivative works from, distribute, perform and display (in any form, format, media or media channels now known or later developed or discovered) any data, information, records and files that (1) you provide, transmit or stream through the Service, or (2) we collect from your local computer system or from third-parties with your permission (collectively, “Bounty Board User Content”) and (in each case) including all results from processing such data, including compilations and derivative works thereof.  All Bounty Board User Content is “User Content” as such term is defined in the TOS.", r.createElement("br", null), r.createElement("br", null), r.createElement(v.W, {
                            type: v.Rb.Strong
                        }, "3.\tTerm and Termination"), r.createElement("br", null), r.createElement("br", null), "Twitch reserves the right, without notice and in our sole discretion, to terminate your license to use the Service and to block or prevent your future access to and use of the Service. Your only remedy with respect to any dissatisfaction with (i) the Service, (ii) any term of these Terms, (iii) any policy or practice of Twitch in operating the Service, or (iv) any content or information transmitted through the Service, is to terminate your account and to discontinue use of any and all parts of the Service.", r.createElement("br", null), r.createElement("br", null), "Any Bounty Order shall be subject to the cancellation and payment provisions as specified in such Bounty Order.", r.createElement("br", null), r.createElement(v.W, {
                            type: v.Rb.Strong
                        }, "4.\tInsertion Orders and Bounty Orders"), r.createElement("br", null), r.createElement("br", null), "The Service permits Advertisers to enter into Bounties pursuant to which Influencers who have registered for our Service will provide online promotional content for Advertiser’s products or services. In order to have Influencers provide such content, Advertiser must enter into an agreement with Twitch that provides for payment to Twitch in order for Twitch to engage Influencers on behalf of Advertiser for the Bounty (each, an “Insertion Order”). The Insertion Order will contain (a) a description of the services Influencers will provide for the Bounty, (b) payment to Twitch, and (c) any other terms and conditions agreed upon between Twitch and the Advertiser through this Service or otherwise.", r.createElement("br", null), r.createElement("br", null), "In order to participate in a particular Bounty, Influencer must enter into an agreement with Twitch (each, a “Bounty Order”) that contains: (a) a description of the services Influencers will provide for the Bounty, (b) payment from Twitch, and (c) any other terms and conditions as agreed upon between Influencer and the Twitch through this Service or otherwise. Influencer further understands and agrees that any content submitted through the Service shall remain publicly accessible as specified in the Bounty Order.", r.createElement("br", null), r.createElement("br", null), "Twitch does not make any representations or warranties of any kind in respect of an Advertiser or a Bounty Order.", r.createElement("br", null), r.createElement("br", null), r.createElement(v.W, {
                            type: v.Rb.Strong
                        }, "5.\tPayments"), r.createElement("br", null), r.createElement("br", null), "Advertiser will pay Twitch for each Bounty the amount set forth in the Insertion Order, under the terms set forth in the Insertion Order.", r.createElement("br", null), r.createElement("br", null), "Twitch will pay each Influencer the amount set forth in the Bounty Order, under the terms set forth in the Bounty Order. Twitch, in its sole discretion, may withhold payments to Influencer for breach of applicable law, or the Bounty Order.", r.createElement("br", null), r.createElement("br", null), r.createElement(v.W, {
                            type: v.Rb.Strong
                        }, "6.\tNo Unlawful or Prohibited Use"), r.createElement("br", null), r.createElement("br", null), "BY USING THE SERVICE, YOU AGREE NOT TO violate any law, contract, intellectual property or other third-party right or commit a tort, and that you are solely responsible for your conduct while on the Service.", r.createElement("br", null), r.createElement("br", null), "You agree that you will comply with these Terms, Twitch’s ", r.createElement("a", {
                            href: "https://www.twitch.tv/p/legal/terms-of-service/",
                            target: "_blank",
                            rel: "noopener noreferrer"
                        }, "Terms of Service"), " and ", r.createElement("a", {
                            href: "https://www.twitch.tv/p/legal/community-guidelines/",
                            target: "_blank",
                            rel: "noopener noreferrer"
                        }, "Twitch’s Community Guidelines"), ".", r.createElement("br", null), r.createElement("br", null), "Twitch takes no responsibility and assumes no liability for any Bounty Board User Content or for any loss or damage resulting therefrom, nor is Twitch liable for any mistakes, defamation, slander, libel, omissions, falsehoods, obscenity, pornography or profanity you may encounter when using the Service. Your use of the Service is at your own risk. In addition, these rules do not create any private right of action on the part of any third party or any reasonable expectation that the Service will not contain any content that is prohibited by such rules.", r.createElement("br", null), r.createElement("br", null), "Twitch is not liable for any statements or representations included in Bounty Board User Content. Twitch does not endorse any Bounty Board User Content, opinion, recommendation, or advice expressed therein, and Twitch expressly disclaims any and all liability in connection with Bounty Board User Content. Although Twitch has no obligation to screen, edit, or monitor any of the Bounty Board User Content, Twitch reserves the right, and has absolute discretion, to remove, screen or edit any Bounty Board User Content posted or stored on the Service at any time and for any reason without notice, and you are solely responsible for creating backup copies of and replacing any Bounty Board User Content you post or store on the Service at your sole cost and expense. Any use of the Service in violation of the foregoing violates these Terms and may result in, among other things, termination or suspension of your rights to use the Service.", r.createElement("br", null), r.createElement("br", null), r.createElement(v.W, {
                            type: v.Rb.Strong
                        }, "7.\tClear and Prominent Disclosure in Bounties of Material Connections Between Influencer and Advertiser"), r.createElement("br", null), r.createElement("br", null), "You are required to follow the ", r.createElement("a", {
                            href: "https://www.ftc.gov/tips-advice/business-center/guidance/ftcs-endorsement-guides-what-people-are-asking",
                            target: "_blank",
                            rel: "noopener noreferrer"
                        }, "Federal Trade Commission’s Endorsement Guides"), ". You each understand and agree that you are required to clearly and conspicuously disclose any material connection between Influencer and the Advertiser. Material connections include, but are not necessarily limited to, the Advertiser providing Influencer with something of value, such as free use of products or services. In general, disclosures should be:", r.createElement("br", null), r.createElement("br", null), r.createElement("ul", {
                            className: "tou-bounty-modal__endorsement-list"
                        }, r.createElement("li", null, "in clear and unambiguous language;"), r.createElement("li", null, "as close as possible to the native ads to which they relate;"), r.createElement("li", null, "in the same medium as the ad, for instance, in the video or in the Twitter post;"), r.createElement("li", null, "in a font and color that’s easy to read;"), r.createElement("li", null, "in a shade that stands out against the background;"), r.createElement("li", null, "for video ads, on the screen long enough to be noticed, read, and understood; and"), r.createElement("li", null, "for audio disclosures, read at a cadence that’s easy for consumers to follow and in words consumers will understand")), r.createElement("br", null), "As an Influencer or an Advertiser, it is your responsibility to understand and abide by the requirements imposed by the FTC and to ensure that a clear and conspicuous disclosure is made each and every time Influencer creates content for a Bounty. You represent and warrant that you will abide by these provisions.", r.createElement("br", null), r.createElement("br", null), "If Twitch learns of Bounties you create or initiate that do not, in our sole discretion, abide by the FTC endorsement disclosure guides, we may require you to add appropriate disclosures, and we may require you to suspend the Bounty until such disclosures are added. Repeated failure to include appropriate disclosures in your Bounties, or your failure to add disclosures upon request by Twitch, may result in termination of your account.", r.createElement("br", null), r.createElement("br", null), "You will not obscure or remove any disclosures that are added by Twitch to comply with FTC endorsement disclosure guidelines.", r.createElement("br", null), r.createElement("br", null), "You agree to indemnify, defend, and hold harmless Twitch, its affiliated companies, contractors, employees, agents and its third-party suppliers, licensors, and partners from any claims, losses, damages, liabilities, including legal fees and expenses, arising out of the failure of any Bounty to comply with the FTC Endorsement Guides."), r.createElement(v.Bb, {
                            borderTop: !0,
                            display: v.X.Flex,
                            flexDirection: v.Aa.Row,
                            alignItems: v.f.Center,
                            justifyContent: v.Wa.End,
                            padding: {
                                top: 2,
                                bottom: 1
                            },
                            flexWrap: v.Ba.Wrap
                        }, r.createElement(v.Xa, {
                            margin: {
                                left: .5,
                                right: .5
                            }
                        }, r.createElement(v.z, {
                            "data-test-selector": "tou-bounty-modal-ok-button",
                            onClick: this.props.onClose
                        }, Object(i.d)("OK", "TermsOfUseBountyModal")))))
                    }, t
                }(r.PureComponent),
                Q = (n("+gf1"), function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        return r.createElement(v.Bb, {
                            className: "accept-bounty-modal__container",
                            background: v.r.Base
                        }, r.createElement($, {
                            "data-test-selector": "tou-bounty-modal-selector",
                            onClose: this.props.closeModal
                        }))
                    }, t
                }(r.Component));
            var K = Object(N.connect)(null, function(e) {
                    return Object(o.bindActionCreators)({
                        closeModal: P.c
                    }, e)
                })(Q),
                Z = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.showModal = function(e) {
                            e.preventDefault(), e.stopPropagation(), t.props.trackPageAction(g.a.ViewTermsOfUse), t.props.showTOUModal()
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        return r.createElement(v.H, null, r.createElement(v.Xa, {
                            display: v.X.Flex,
                            justifyContent: v.Wa.Around,
                            padding: 1
                        }, r.createElement(v.W, null, r.createElement("a", {
                            "data-test-selector": "bounties-page-terms-of-use-selector",
                            href: "#",
                            onClick: this.showModal
                        }, Object(i.d)("Terms of Use", "TermsOfUseBountyCard")))))
                    }, t
                }(r.Component);
            var J = Object(N.connect)(null, function(e) {
                    return Object(o.bindActionCreators)({
                        showTOUModal: function() {
                            return Object(P.d)(K, {})
                        }
                    }, e)
                })(Z),
                ee = (n("Nzv/"), function(e) {
                    return r.createElement(v.Bb, {
                        className: "bb-page",
                        margin: {
                            bottom: 1
                        },
                        display: v.X.Flex,
                        flexDirection: v.Aa.Column,
                        flexWrap: v.Ba.NoWrap,
                        alignItems: v.f.Stretch,
                        breakpointMedium: {
                            flexDirection: v.Aa.Row
                        },
                        fullHeight: !0
                    }, r.createElement(v.Bb, {
                        className: "bb-col-wrapper bb-col-wrapper--l",
                        display: v.X.Flex,
                        flexWrap: v.Ba.NoWrap,
                        flexDirection: v.Aa.Column,
                        flexShrink: 0,
                        justifyContent: v.Wa.Between
                    }, r.createElement(v.Xa, {
                        className: "bb-col bb-col--l",
                        padding: 1
                    }, e.left), r.createElement(v.Xa, {
                        padding: 1
                    }, r.createElement(v.G, {
                        background: v.r.Base,
                        elevation: 1
                    }, r.createElement(J, {
                        trackPageAction: e.trackPageAction
                    })))), r.createElement(v.Bb, {
                        className: "bb-col-wrapper bb-col-wrapper--r",
                        display: v.X.Flex,
                        flexGrow: 1,
                        flexWrap: v.Ba.NoWrap,
                        flexDirection: v.Aa.Column,
                        breakpointMedium: {
                            display: v.X.Block
                        }
                    }, r.createElement(v.Xa, {
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
                te = (n("534W"), "bounty_board_ftue_banner"),
                ne = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.state = {
                            didDismiss: !1
                        }, n.dismissedBanners = {}, n.onDismissBanner = function() {
                            var e, t = n.dismissedBanners[n.bannerKey],
                                r = "number" == typeof t ? t + 1 : 1,
                                o = a.__assign({}, n.dismissedBanners, ((e = {})[n.bannerKey] = r, e));
                            i.m.set(te, o), n.props.trackPageAction(g.a.DismissFTUE), n.setState({
                                didDismiss: !0
                            })
                        }, n.dismissedBanners = i.m.get(te, {}), n
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        var e = this;
                        return this.currentBannerWasDismissed ? null : r.createElement(v.i, {
                            type: v.n.BounceIn,
                            duration: v.k.Medium,
                            enabled: !0,
                            timing: v.m.EaseInOut
                        }, r.createElement(v.Bb, {
                            padding: 2,
                            display: v.X.Flex,
                            alignItems: v.f.Center,
                            elevation: 1,
                            background: v.r.Base,
                            border: !0,
                            "data-test-selector": "bounty_board_ftue_banner_container_selector"
                        }, r.createElement(v.Bb, {
                            display: v.X.Flex,
                            fullWidth: !0,
                            flexWrap: v.Ba.NoWrap
                        }, r.createElement(v.Xa, {
                            flexGrow: 1,
                            margin: {
                                left: 1
                            }
                        }, r.createElement(v.W, {
                            fontSize: v.Ca.Size4,
                            bold: !0,
                            ellipsis: !0
                        }, Object(i.d)("Welcome to Bounty Board", "BountiesPageFTUEBanner")), r.createElement(v.Xa, {
                            margin: {
                                top: 2
                            }
                        }, r.createElement(v.W, null, Object(i.d)("Bounty Board allows you to browse and accept sponsored opportunities (AKA bounties) from brands. Before you activate a bounty, here are a couple important things to keep in mind:", "BountiesPageFTUEBanner")), r.createElement(v.Pa, {
                            margin: {
                                left: 1
                            }
                        }, r.createElement("ol", {
                            className: "bb-ftue__rules-list"
                        }, r.createElement("li", {
                            key: "bb_ftue_rule_1"
                        }, Object(i.d)("<x:bold>No needless bad-mouthing.</x:bold> You can share your authentic opinion of the content, even if it’s not entirely positive. However, be mindful of the difference between constructive feedback, which is welcome, and mean-spirited bashing, which is not.", {
                            "x:bold": function(e) {
                                return r.createElement(v.W, {
                                    type: v.Rb.Strong
                                }, e)
                            }
                        }, "BountiesPageFTUEBanner")), r.createElement("li", {
                            key: "bb_ftue_rule_2"
                        }, Object(i.d)("<x:bold>Use the Bounties Widget on your</x:bold> <x:link>Live Dashboard</x:link> <x:bold>to track your bounty.</x:bold> It automatically sets your Game/Category and updates your stream title to include <x:bold>#sponsored</x:bold>, both of which must be properly set and in place to consider a bounty as complete.", {
                            "x:link": function(t) {
                                return r.createElement(v.U, {
                                    to: "/" + e.props.channelName + "/dashboard/live"
                                }, t)
                            },
                            "x:bold": function(e) {
                                return r.createElement(v.W, {
                                    type: v.Rb.Strong
                                }, e)
                            }
                        }, "BountiesPageFTUEBanner")), r.createElement("li", {
                            key: "bb_ftue_rule_3"
                        }, Object(i.d)('<x:bold>We’ll use Past Broadcasts to verify bounty completion.</x:bold> Make sure to have "Store Past Broadcasts" on in your <x:link>Channel Settings</x:link>. Otherwise, you won\'t get paid.', {
                            "x:link": function(t) {
                                return r.createElement(v.U, {
                                    to: "/" + e.props.channelName + "/dashboard/settings"
                                }, t)
                            },
                            "x:bold": function(e) {
                                return r.createElement(v.W, {
                                    type: v.Rb.Strong
                                }, e)
                            }
                        }, "BountiesPageFTUEBanner")), r.createElement("li", {
                            key: "bb_ftue_rule_4"
                        }, Object(i.d)("<x:bold>We require you to disclose your bounties to viewers.</x:bold> In addition to including <x:bold>#sponsored</x:bold> in your stream title, make sure that your viewers are aware that your bounties are sponsored content.", {
                            "x:bold": function(e) {
                                return r.createElement(v.W, {
                                    type: v.Rb.Strong
                                }, e)
                            }
                        }, "BountiesPageFTUEBanner")), r.createElement("li", {
                            key: "bb_ftue_rule_5"
                        }, Object(i.d)("<x:bold>Payouts are based on concurrent viewer requirements being met.</x:bold> You’ll get a payout for hitting the minimum viewer requirements provided in the bounty. If you achieve the minimum but don't reach the average viewer goal, you’ll get a percentage of the maximum payout.", {
                            "x:bold": function(e) {
                                return r.createElement(v.W, {
                                    type: v.Rb.Strong
                                }, e)
                            }
                        }, "BountiesPageFTUEBanner")))), r.createElement(v.Pa, {
                            margin: {
                                top: 2
                            }
                        }, r.createElement(v.W, null, Object(i.d)("Please make sure you review the terms associated with your bounty for additional details.", "BountiesPageFTUEBanner"))))))), r.createElement(v.Xa, {
                            position: v.hb.Absolute,
                            attachRight: !0,
                            attachTop: !0
                        }, r.createElement(v.A, {
                            "data-test-selector": "bounty_board_ftue_dismiss_selector",
                            ariaLabel: Object(i.d)("Close", "BountiesPageFTUEBanner"),
                            type: v.C.Default,
                            size: v.B.Large,
                            icon: v.rb.Close,
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
                }(r.Component),
                ae = n("GIFg"),
                re = n("kYmV"),
                oe = n("cuu2"),
                ie = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        return r.createElement(ae.a, null, r.createElement(oe.a, {
                            learnMoreUrl: "https://help.twitch.tv/customer/portal/articles/2936067-bounty-board-program-information-and-faq",
                            page: re.b.Bounties
                        }))
                    }, t
                }(r.Component),
                le = n("t241"),
                se = "bounties-page-available-bounty-text-selector",
                ce = "bounties-page-empty-available-bounty-text-selector",
                ue = "bounties-page-empty-past-available-bounty-text-selector",
                de = "bounty_board_available_bounties_date",
                me = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.AVAILABLE = Object(i.d)("Available", "BountiesPage"), t.COMPLETED = Object(i.d)("Completed", "BountiesPage"), t.IN_QUEUE = Object(i.d)("In Queue", "BountiesPage"), t.impressionGroupID = Object(d.b)(), t.renderBounty = function(e) {
                            switch (e.campaign.type) {
                                case m.e.PAY_TO_STREAM:
                                    return t.renderLegacyBounty(e);
                                case m.e.GAME_TRAILER:
                                case m.e.MISC_TRAILER:
                                    return t.renderTrailerBounty(e);
                                default:
                                    return t.renderLegacyBounty(e)
                            }
                        }, t.renderTrailerBounty = function(e) {
                            var n = t.props.match.params.selectedID,
                                o = e.id === n || e.campaign.id === n && e.status === m.f.AVAILABLE,
                                i = {
                                    bounty: e,
                                    channelID: t.props.data.user.id,
                                    channelName: t.props.match.params.channelName,
                                    isSelected: o,
                                    handleBountyStatusChanged: t.handleBountyStatusChanged,
                                    refreshData: t.refreshData,
                                    key: e.id,
                                    impressionGroupID: t.impressionGroupID
                                };
                            switch (e.status) {
                                case m.f.AVAILABLE:
                                    return r.createElement(U, a.__assign({}, i));
                                case m.f.COMPLETED:
                                    return r.createElement(_, a.__assign({}, i));
                                case m.f.CANCELLED:
                                    return r.createElement(O, a.__assign({}, i));
                                case m.f.LIVE:
                                    return r.createElement(z, a.__assign({}, i));
                                default:
                                    return null
                            }
                        }, t.renderLegacyBounty = function(e) {
                            return r.createElement(D.a, {
                                bounty: e,
                                channelID: t.props.data.user.id,
                                channelName: t.props.match.params.channelName,
                                selectedItem: t.props.match.params.selectedID,
                                handleBountyStatusChanged: t.handleBountyStatusChanged,
                                refreshData: t.refreshData,
                                key: e.id,
                                impressionGroupID: t.impressionGroupID
                            })
                        }, t.renderAvailabilityText = function(e) {
                            var t = new Date(i.b.get(de, "Thu Apr 05 2063 00:00:00 GMT-0700 (PDT)")),
                                n = new Date > t,
                                a = null;
                            return 0 === e ? a = n ? r.createElement(v.W, {
                                "data-test-selector": ue,
                                color: v.O.Alt2
                            }, Object(i.d)("All bounties have been claimed! Make sure to check back soon for more bounties.", "BountiesPage")) : r.createElement(v.W, {
                                "data-test-selector": ce,
                                color: v.O.Alt2
                            }, Object(i.d)("All bounties have been claimed! Make sure to check back on {availableDate} when the next round are released.", {
                                availableDate: r.createElement(v.W, {
                                    type: v.Rb.Strong
                                }, Object(i.c)(t))
                            }, "BountiesPage")) : n || (a = r.createElement(v.Xa, {
                                "data-test-selector": se,
                                margin: {
                                    y: 2
                                }
                            }, r.createElement(v.W, {
                                color: v.O.Alt2
                            }, Object(i.d)("The next round of bounties will be released on {availableDate}.", {
                                availableDate: r.createElement(v.W, {
                                    type: v.Rb.Strong
                                }, Object(i.c)(t))
                            }, "BountiesPage")))), a
                        }, t.handleBountyStatusChanged = function(e) {
                            Object(u.e)(le, {
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
                                    case m.f.AVAILABLE:
                                        t.user.availableBounties.unshift(e);
                                        break;
                                    case m.f.LIVE:
                                        t.user.liveBounties.unshift(e);
                                        break;
                                    case m.f.COMPLETED:
                                        t.user.completedBounties.unshift(e);
                                        break;
                                    case m.f.CANCELLED:
                                    default:
                                        t.user.cancelledBounties.unshift(e)
                                }
                                return t
                            })
                        }, t.refreshData = function() {
                            t.props.data.refetch && t.props.data.refetch()
                        }, t.trackPageAction = function(e) {
                            Object(g.d)({
                                action: e,
                                channelID: t.props.match.params.channelName
                            })
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.componentDidMount = function() {
                        i.p.setPageTitle(Object(i.d)("Bounties", "BountiesPage")), this.postRender()
                    }, t.prototype.componentDidUpdate = function() {
                        this.postRender()
                    }, t.prototype.render = function() {
                        if (this.props.data.loading) return r.createElement(v.Xa, {
                            padding: 2,
                            fullHeight: !0
                        }, r.createElement(ee, {
                            left: this.renderLeftColumnPlaceholders(),
                            right: this.renderRightColumnPlaceholders(),
                            trackPageAction: this.trackPageAction
                        }));
                        if (this.props.data.error) return r.createElement(l.a, {
                            message: Object(i.d)("Error loading data.", "BountiesPage")
                        });
                        var e = this.props.data.user,
                            t = e.completedBounties,
                            n = e.liveBounties,
                            a = e.cancelledBounties,
                            o = e.availableBounties;
                        return r.createElement(v.Xa, {
                            overflow: v.cb.Auto,
                            padding: 1,
                            fullHeight: !0,
                            display: v.X.Flex,
                            flexDirection: v.Aa.Column
                        }, r.createElement(ne, {
                            channelName: this.props.match.params.channelName,
                            trackPageAction: this.trackPageAction
                        }), r.createElement(ee, {
                            left: this.renderLeftColumn(n, t, a),
                            right: this.renderRightColumn(o),
                            trackPageAction: this.trackPageAction
                        }), r.createElement(ie, null))
                    }, t.prototype.renderLeftColumn = function(e, t, n) {
                        var a = t.concat(n);
                        return a.sort(function(e, t) {
                            return t.lastModifiedAt ? e.lastModifiedAt ? t.lastModifiedAt.localeCompare(e.lastModifiedAt) : 1 : -1
                        }), r.createElement(v.Xa, null, this.renderTitle(this.IN_QUEUE), e.length > 0 ? this.renderBounties(e) : r.createElement(v.W, {
                            color: v.O.Alt2
                        }, Object(i.d)("You currently have no activated bounties in queue. Once activated, bounties are held in your queue for a maximum of 5 days. They will expire sooner if the broader bounty campaign is ending.", "BountiesPage")), a.length > 0 ? r.createElement(r.Fragment, null, this.renderTitle(this.COMPLETED), this.renderBounties(a)) : null)
                    }, t.prototype.renderRightColumn = function(e) {
                        return r.createElement(v.Xa, {
                            key: "right-column"
                        }, this.renderTitle(this.AVAILABLE), this.renderBounties(e), this.renderAvailabilityText(e.length))
                    }, t.prototype.renderLeftColumnPlaceholders = function() {
                        return r.createElement(v.Xa, {
                            key: "left-column-placeholders"
                        }, this.renderTitle(this.IN_QUEUE), r.createElement(v.gb, {
                            height: 85
                        }))
                    }, t.prototype.renderRightColumnPlaceholders = function() {
                        return r.createElement(v.Xa, {
                            key: "right-column-placeholders"
                        }, this.renderTitle(this.AVAILABLE), r.createElement(v.Xa, {
                            padding: {
                                bottom: 2
                            }
                        }, r.createElement(v.gb, {
                            height: 85
                        })), r.createElement(v.Xa, {
                            padding: {
                                bottom: 2
                            }
                        }, r.createElement(v.gb, {
                            height: 85
                        })), r.createElement(v.Xa, {
                            padding: {
                                bottom: 2
                            }
                        }, r.createElement(v.gb, {
                            height: 85
                        })), r.createElement(v.Xa, {
                            padding: {
                                bottom: 2
                            }
                        }, r.createElement(v.gb, {
                            height: 85
                        })))
                    }, t.prototype.renderTitle = function(e) {
                        return r.createElement(v.Xa, {
                            margin: {
                                y: 2
                            }
                        }, r.createElement(v.W, {
                            type: v.Rb.H4
                        }, e))
                    }, t.prototype.renderBounties = function(e) {
                        return e.map(this.renderBounty)
                    }, t.prototype.postRender = function() {
                        this.props.data.loading || this.props.latencyTracking.reportInteractive()
                    }, t
                }(r.Component),
                pe = Object(o.compose)(Object(h.b)("BountiesPage", {
                    destination: p.a.ChannelDashboardBounties
                }), Object(c.a)({
                    location: y.PageviewLocation.DashboardBounties
                }), Object(s.a)(le, {
                    options: function(e) {
                        return {
                            fetchPolicy: "cache-and-network",
                            variables: {
                                login: e.match.params.channelName
                            }
                        }
                    }
                }))(me);
            n.d(t, "AVAILABLE_BOUNTY_TEXT_SELECTOR", function() {
                return se
            }), n.d(t, "EMPTY_AVAILABLE_BOUNTY_TEXT_SELECTOR", function() {
                return ce
            }), n.d(t, "EMPTY_PAST_AVAILABLE_BOUNTY_TEXT_SELECTOR", function() {
                return ue
            }), n.d(t, "BOUNTY_AVAILABILITY_DATE_SETTING", function() {
                return de
            }), n.d(t, "BountiesPage", function() {
                return pe
            })
        },
        hLBu: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return r
            });
            n("NAv5");
            var a = n("/7QA");

            function r(e) {
                var t = function(e) {
                        return {
                            hours: Math.floor(e / 60),
                            minutes: e % 60
                        }
                    }(e),
                    n = Object(a.d)("{time, plural, one {1 hour} other {{time} hours}}", {
                        time: t.hours
                    }, "BountyUtilitiesTimeSpan"),
                    r = Object(a.d)("{time, plural, one {1 minute} other {{time} minutes}}", {
                        time: t.minutes
                    }, "BountyUtilitiesTimeSpan");
                return t.hours && !t.minutes ? n : t.minutes && !t.hours ? r : Object(a.d)("{hours} and {minutes}", {
                    hours: n,
                    minutes: r
                }, "BountyUtilitiesTimeSpan")
            }
        },
        jCK8: function(e, t, n) {
            "use strict";
            var a = n("mrSG"),
                r = n("/MKj"),
                o = n("fvjX"),
                i = n("aCAx"),
                l = n("kRSO"),
                s = n("Z9g5"),
                c = n("q1tI"),
                u = n("6x+I"),
                d = n("/7QA"),
                m = n("DMoW"),
                p = n("N74f"),
                y = n("GnwI"),
                h = n("pQow"),
                b = n("hLBu"),
                f = n("OnAS"),
                g = n("Ue10"),
                v = (n("aSNP"), {
                    "data-test-selector": "bounty-expanded-section"
                }),
                E = {
                    "data-test-selector": "bounty-activate-btn"
                },
                B = {
                    "data-test-selector": "bounty-platform-select"
                },
                w = {
                    "data-test-selector": "bounty-sub-header"
                },
                k = {
                    "data-test-selector": "bounty-description"
                },
                C = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        n.onChangePlatform = function(e) {
                            var t = e.currentTarget.value;
                            n.setState({
                                selectedPlatform: t
                            })
                        }, n.getPlatformIconInfo = function(e) {
                            var t = null,
                                n = "";
                            return Object.keys(p.a).includes(e) && (t = p.a[e]), "PlayStation VR" === e && (n = "VR"), {
                                asset: t,
                                suffix: n
                            }
                        }, n.renderPlatformIcons = function(e) {
                            return c.createElement(g.Xa, {
                                margin: {
                                    right: .5
                                },
                                display: g.X.InlineFlex
                            }, e.map(function(e) {
                                var t = n.getPlatformIconInfo(e);
                                return c.createElement(c.Fragment, {
                                    key: e
                                }, t.asset && c.createElement(g.qb, {
                                    asset: t.asset,
                                    type: g.sb.Alt2
                                }), t.suffix && c.createElement(g.Xa, {
                                    display: g.X.Flex,
                                    alignItems: g.f.Center
                                }, c.createElement(g.W, {
                                    color: g.O.Alt2
                                }, t.suffix)))
                            }))
                        }, n.renderPlatformSelector = function(e) {
                            return c.createElement(g.Xa, {
                                margin: {
                                    right: 1
                                }
                            }, c.createElement(g.xb, a.__assign({}, B, {
                                onChange: n.onChangePlatform,
                                value: n.state.selectedPlatform || void 0
                            }), c.createElement("option", {
                                value: "",
                                key: "platform-not-selected"
                            }, Object(d.d)("Select Platform", "BountyItem")), e.map(function(e) {
                                return c.createElement("option", {
                                    key: e,
                                    value: e
                                }, e)
                            })))
                        }, n.renderExpanded = function(e) {
                            var t, r = e.campaign.game && e.campaign.game.boxArtURL || "",
                                o = e.campaign.game && e.campaign.game.displayName || "",
                                i = e.campaign.availablePlatforms,
                                l = null !== i && i.length > 1,
                                s = !!e.maximumPayoutCents && l && !n.state.selectedPlatform,
                                p = c.createElement(g.Xa, {
                                    fullWidth: !0,
                                    margin: {
                                        bottom: 1
                                    }
                                }, c.createElement(g.W, null, Object(d.d)("<x:bold>Game key included with bounty activation.</x:bold> Keys are emailed within 72 hours of bounty activation.", {
                                    "x:bold": function(e) {
                                        return c.createElement(g.W, {
                                            type: g.Rb.Strong
                                        }, e)
                                    }
                                }, "BountyItem"))),
                                y = e.campaign.details ? c.createElement(g.Xa, {
                                    fullWidth: !0,
                                    margin: {
                                        bottom: 1
                                    }
                                }, c.createElement(u, {
                                    escapeHtml: !0,
                                    source: e.campaign.details,
                                    renderers: {
                                        Link: n.renderNewWindowLink
                                    }
                                })) : null;
                            switch (e.status) {
                                case m.f.AVAILABLE:
                                    t = c.createElement(c.Fragment, null, l && n.renderPlatformSelector(i || []), c.createElement(g.z, a.__assign({}, E, {
                                        disabled: s || !e.id,
                                        onClick: n.showAcceptBountyModal
                                    }), Object(d.d)("Activate Bounty", "BountyItem")));
                                    break;
                                case m.f.LIVE:
                                    t = c.createElement(c.Fragment, null, c.createElement(g.Xa, {
                                        margin: {
                                            right: 2
                                        }
                                    }, c.createElement(g.z, {
                                        type: g.F.Text,
                                        onClick: n.showTermsModal
                                    }, Object(d.d)("Terms", "BountyItem"))), c.createElement(g.z, {
                                        onClick: n.showCancelBountyModal,
                                        type: g.F.Hollow
                                    }, Object(d.d)("Cancel Bounty", "BountyItem")));
                                    break;
                                case m.f.COMPLETED:
                                case m.f.CANCELLED:
                                    p = null, y = null
                            }
                            return c.createElement(g.i, {
                                type: g.n.SlideInTop,
                                duration: g.k.Short,
                                enabled: !0,
                                timing: g.m.EaseOut
                            }, c.createElement(g.Bb, a.__assign({
                                className: "bounty-item__expanded",
                                elevation: 1
                            }, v, {
                                padding: 2,
                                display: g.X.Flex,
                                flexDirection: g.Aa.Column,
                                fullWidth: !0
                            }), c.createElement(g.Xa, {
                                display: g.X.Flex,
                                flexDirection: g.Aa.Row,
                                flexWrap: g.Ba.NoWrap,
                                fullWidth: !0
                            }, c.createElement(g.Xa, {
                                className: "bounty-item__boxart",
                                margin: {
                                    right: 2,
                                    bottom: 2
                                }
                            }, c.createElement(g.o, {
                                ratio: g.p.BoxArt
                            }, c.createElement("img", {
                                src: r
                            }))), c.createElement(g.Xa, null, c.createElement(g.W, {
                                type: g.Rb.H4
                            }, o), c.createElement(g.W, {
                                color: g.O.Alt2
                            }, e.campaign.sponsor), c.createElement(g.Xa, {
                                padding: {
                                    top: 2
                                }
                            }, p), c.createElement(g.Xa, null, n.renderDescriptionText(e)))), c.createElement(g.Xa, {
                                padding: {
                                    top: 2
                                }
                            }, y), c.createElement(g.Xa, {
                                fullWidth: !0,
                                display: g.X.Flex,
                                flexDirection: g.Aa.Row,
                                justifyContent: g.Wa.Between,
                                alignItems: g.f.Center
                            }, c.createElement(g.Xa, null, c.createElement(g.W, {
                                type: g.Rb.H4
                            }, n.renderPayoutText(e))), c.createElement(g.Xa, {
                                display: g.X.Flex,
                                flexDirection: g.Aa.Row,
                                alignItems: g.f.Center
                            }, t))))
                        }, n.trackViewDetails = function() {
                            n.props.bounty.id === n.props.selectedItem || n.props.bounty.campaign.id === n.props.selectedItem || n.trackAction(f.a.ViewDetails)
                        }, n.showTermsModal = function() {
                            n.trackAction(f.a.Terms), n.props.showAcceptBountyModal({
                                bounty: n.props.bounty,
                                channelID: n.props.channelID,
                                channelName: n.props.channelName,
                                handleBountyStatusChanged: n.props.handleBountyStatusChanged,
                                platform: n.props.bounty.platform,
                                refreshData: n.props.refreshData
                            })
                        }, n.showAcceptBountyModal = function() {
                            n.trackAction(f.a.ViewLegal), n.props.showAcceptBountyModal({
                                bounty: n.props.bounty,
                                channelID: n.props.channelID,
                                channelName: n.props.channelName,
                                handleBountyStatusChanged: n.props.handleBountyStatusChanged,
                                platform: n.state.selectedPlatform || null,
                                refreshData: n.props.refreshData
                            })
                        }, n.showCancelBountyModal = function() {
                            n.props.showCancelBountyModal({
                                bounty: n.props.bounty,
                                channelID: n.props.channelID,
                                handleBountyStatusChanged: n.props.handleBountyStatusChanged,
                                refreshData: n.props.refreshData
                            })
                        }, n.renderNewWindowLink = function(e) {
                            return c.createElement("a", {
                                href: e.href,
                                target: "_blank"
                            }, e.children)
                        }, n.trackImpression = function() {
                            n.props.impressionGroupID && Object(f.c)({
                                bounty: n.props.bounty,
                                channelID: n.props.channelID,
                                impressionGroupID: n.props.impressionGroupID
                            })
                        }, n.trackAction = function(e, t) {
                            Object(f.b)({
                                action: e,
                                bounty: n.props.bounty,
                                channelID: n.props.channelID,
                                cancelReason: t,
                                selectedPlatform: n.state.selectedPlatform || void 0
                            })
                        };
                        var r = t.bounty.campaign.availablePlatforms;
                        return t.bounty.status === m.f.AVAILABLE && r && 1 === r.length ? n.state = {
                            selectedPlatform: r[0]
                        } : n.state = {
                            selectedPlatform: void 0
                        }, n
                    }
                    return a.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.trackImpression()
                    }, t.prototype.render = function() {
                        var e = this.props.bounty,
                            t = this.props.channelName,
                            n = this.props.linkDisabled,
                            r = e.id === this.props.selectedItem || e.campaign.id === this.props.selectedItem && e.status === m.f.AVAILABLE,
                            o = e.status === m.f.COMPLETED ? e.payoutCents || 0 : e.maximumPayoutCents,
                            i = e.status === m.f.CANCELLED ? c.createElement(g.W, {
                                type: g.Rb.H2
                            }, Object(d.d)("N/A", "BountyItem")) : c.createElement(g.Xa, {
                                display: g.X.Flex
                            }, c.createElement(g.W, {
                                fontSize: g.Ca.Size7
                            }, "$"), c.createElement(g.W, {
                                type: g.Rb.H2
                            }, Number.isNaN(o / 100) ? "XX" : o / 100)),
                            l = e.status === m.f.AVAILABLE ? e.campaign.availablePlatforms : e.platform ? [e.platform] : null,
                            s = {
                                backgroundImage: "url(" + (e.campaign.game && e.campaign.game.coverURL || "") + ")"
                            },
                            u = Object(h.c)(t);
                        return r || (u = e.status === m.f.AVAILABLE ? Object(h.b)(t, e.campaign) : Object(h.a)(t, e)), n && (u = "#"), c.createElement(g.Xa, {
                            className: "bounty-item",
                            margin: {
                                bottom: 1
                            }
                        }, c.createElement(g.Bb, {
                            elevation: 2
                        }, c.createElement(g.U, {
                            hoverUnderlineNone: !0,
                            to: u,
                            onClick: this.trackViewDetails,
                            className: "bounty-item__link"
                        }, c.createElement(g.Xa, {
                            display: g.X.Flex,
                            position: g.hb.Relative
                        }, c.createElement(g.Xa, {
                            position: g.hb.Absolute,
                            fullWidth: !0,
                            fullHeight: !0
                        }, c.createElement("div", {
                            className: "bounty-item__backdrop",
                            style: s
                        })), c.createElement(g.Xa, {
                            className: "bounty-item__indicator",
                            position: g.hb.Relative,
                            display: g.X.Flex,
                            alignItems: g.f.Center,
                            justifyContent: g.Wa.Center,
                            padding: {
                                left: 2
                            }
                        }, r ? c.createElement(g.qb, {
                            asset: g.rb.AngleUp,
                            type: g.sb.Alt2
                        }) : c.createElement(g.qb, {
                            asset: g.rb.AngleDown,
                            type: g.sb.Alt2
                        })), c.createElement(g.Xa, {
                            flexGrow: 1,
                            className: "bounty-item__description",
                            display: g.X.Flex,
                            padding: {
                                y: 2,
                                left: 1,
                                right: 2
                            },
                            justifyContent: g.Wa.Around,
                            flexDirection: g.Aa.Column,
                            position: g.hb.Relative
                        }, c.createElement(g.W, {
                            type: g.Rb.H4,
                            color: g.O.Base,
                            ellipsis: !0,
                            title: e.campaign.title
                        }, e.campaign.title), c.createElement(g.Xa, a.__assign({}, w, {
                            display: g.X.Flex,
                            alignItems: g.f.Center
                        }), l && this.renderPlatformIcons(l), c.createElement(g.W, {
                            color: g.O.Alt2
                        }, this.renderTimeString(e)))), c.createElement(g.Bb, {
                            className: "bounty-item__amount",
                            display: g.X.Flex,
                            alignItems: g.f.Center,
                            justifyContent: g.Wa.Center,
                            flexGrow: 0,
                            flexShrink: 0,
                            position: g.hb.Relative,
                            background: g.r.Base
                        }, i)))), r && this.renderExpanded(e))
                    }, t.prototype.renderDescriptionText = function(e) {
                        var t = this,
                            n = this.props.isPreview,
                            r = e.payoutCents || 0,
                            o = e.maximumPayoutCents || 0,
                            i = e.maximumPayoutCCU || "XXXX";
                        switch (e.status) {
                            case m.f.COMPLETED:
                                return 0 === e.payoutCents ? Object(d.d)("Unfortunately your average concurrent viewers did not reach the minimum requirement of <x:bold>{ccuMin} concurrent viewers</x:bold> and you will not receive a payout for this bounty. Make sure to do bounties during your peak hours to increase your chances of a good payout.", {
                                    "x:bold": function(e) {
                                        return c.createElement(g.W, {
                                            type: g.Rb.Strong
                                        }, e)
                                    },
                                    ccuMin: e.minimumPayoutCCU || 0
                                }, "BountyItem") : r === o ? Object(d.d)("Based on your concurrent viewers, you got the max payout of <x:bold>${maxPayout}</x:bold>.  Bounty payouts are bundled with your standard monthly accrued revenue payment.", {
                                    "x:bold": function(e) {
                                        return c.createElement(g.W, {
                                            type: g.Rb.Strong
                                        }, e)
                                    },
                                    maxPayout: o / 100
                                }, "BountyItem") : i ? Object(d.d)("You hit <x:bold>{percentPayout}%</x:bold> of your target payout goal, for a total of <x:bold>${payout}</x:bold>. Bounty payouts are bundled with your standard monthly accrued revenue payment.", {
                                    "x:bold": function(e) {
                                        return c.createElement(g.W, {
                                            type: g.Rb.Strong
                                        }, e)
                                    },
                                    percentPayout: Math.floor(r / o * 100),
                                    payout: r / 100
                                }, "BountyItem") : Object(d.d)("Based on your concurrent viewers, you got a payout of <x:bold>${payout}</x:bold> out of a potential ${maxPayout}. Bounty payouts are bundled with your standard monthly accrued revenue payment.", {
                                    "x:bold": function(e) {
                                        return c.createElement(g.W, {
                                            type: g.Rb.Strong
                                        }, e)
                                    },
                                    payout: r / 100,
                                    maxPayout: o / 100
                                }, "BountyItem");
                            case m.f.CANCELLED:
                                return e.lastModifiedAt ? Object(d.d)("This bounty was cancelled on {dateCancelled}.", {
                                    dateCancelled: c.createElement(g.W, {
                                        type: g.Rb.Strong
                                    }, Object(d.c)(new Date(e.lastModifiedAt)))
                                }, "BountyItem") : Object(d.d)("This bounty was cancelled.", "BountyItem");
                            default:
                                return c.createElement(c.Fragment, null, c.createElement(g.W, a.__assign({}, k, {
                                    type: g.Rb.P,
                                    key: "bounty_description_" + e.id
                                }), Object(d.d)("At any point during a stream session, stream {game} for {streamLength} straight with an average of {ccuMax} <x:bold>concurrent viewers</x:bold>. If you don’t hit an average of at least {ccuMin} <x:bold>concurrents</x:bold>, you will not receive a payout. If you achieve the minimum but do not reach the goal, you will get a <x:bold>proportional percentage</x:bold> of the payout.", {
                                    "x:bold": function(e) {
                                        return c.createElement(g.W, {
                                            type: g.Rb.Strong
                                        }, e)
                                    },
                                    ccuMax: c.createElement(g.W, {
                                        type: g.Rb.Strong
                                    }, i),
                                    ccuMin: c.createElement(g.W, {
                                        type: g.Rb.Strong
                                    }, null === e.minimumPayoutCCU ? "XXX" : e.minimumPayoutCCU),
                                    game: c.createElement(g.W, {
                                        type: g.Rb.Strong
                                    }, e.campaign.game && e.campaign.game.displayName),
                                    streamLength: Object(b.a)(e.campaign.streamLengthMinutes)
                                }, "BountyItem")), c.createElement("ul", {
                                    className: "bounty-item__description-list",
                                    key: "bounty_rule_list_" + e.id
                                }, c.createElement("li", {
                                    key: "bounty_rule_2_" + e.id
                                }, Object(d.d)("No needless bad-mouthing of the content, and be sure to engage with the content and your community!", "BountyItem")), c.createElement("li", {
                                    key: "bounty_rule_3_" + e.id
                                }, Object(d.d)("Use the <x:bold>Bounties widget</x:bold> on your <x:link>Live Dashboard</x:link> to add <x:bold>#sponsored</x:bold> to your stream title.", {
                                    "x:bold": function(e) {
                                        return c.createElement(g.W, {
                                            type: g.Rb.Strong
                                        }, e)
                                    },
                                    "x:link": function(e) {
                                        return c.createElement(g.U, {
                                            to: n ? "" : "/" + t.props.channelName + "/dashboard/live"
                                        }, e)
                                    }
                                }, "BountyItem")), c.createElement("li", {
                                    key: "bounty_rule_4_" + e.id
                                }, Object(d.d)('Turn on the "<x:bold>Store Past Broadcasts</x:bold>" option in your <x:link>Channel Settings</x:link>.', {
                                    "x:bold": function(e) {
                                        return c.createElement(g.W, {
                                            type: g.Rb.Strong
                                        }, e)
                                    },
                                    "x:link": function(a) {
                                        return c.createElement(g.U, {
                                            key: "bount_item_settings_link_" + e.id,
                                            to: n ? "" : "/" + t.props.channelName + "/dashboard/settings"
                                        }, a)
                                    }
                                }, "BountyItem")), c.createElement("li", {
                                    key: "bounty_rule_5_" + e.id
                                }, Object(d.d)("Bounties are held in your queue for a <x:bold>maximum of 5 days</x:bold>. They will expire sooner if the broader bounty campaign is ending.", {
                                    "x:bold": function(e) {
                                        return c.createElement(g.W, {
                                            type: g.Rb.Strong
                                        }, e)
                                    }
                                }, "BountyItem"))))
                        }
                    }, t.prototype.renderPayoutText = function(e) {
                        if (e.status === m.f.COMPLETED) return Object(d.d)("Your Payout: ${amount}", {
                            amount: (e.payoutCents || 0) / 100
                        }, "BountyItem");
                        var t = Number.isNaN(e.maximumPayoutCents / 100) ? "XX" : e.maximumPayoutCents / 100;
                        return Object(d.d)("Max Payout: ${amount}", {
                            amount: t
                        }, "BountyItem")
                    }, t.prototype.renderTimeString = function(e) {
                        switch (e.status) {
                            case m.f.LIVE:
                                return e.endAt ? Object(d.d)("Expires {relativeDate}", {
                                    relativeDate: Object(d.i)(new Date(e.endAt))
                                }, "BountyItem") : "";
                            case m.f.COMPLETED:
                                return e.lastModifiedAt ? Object(d.d)("Completed on {relativeOrAbsoluteDate}", {
                                    relativeOrAbsoluteDate: Object(d.c)(new Date(e.lastModifiedAt))
                                }, "BountyItem") : "";
                            case m.f.CANCELLED:
                                return e.lastModifiedAt ? Object(d.d)("Cancelled on {relativeOrAbsoluteDate}", {
                                    relativeOrAbsoluteDate: Object(d.c)(new Date(e.lastModifiedAt))
                                }, "BountyItem") : "";
                            default:
                            case m.f.AVAILABLE:
                                return e.endAt ? Object(d.d)("Available until {relativeOrAbsoluteDate}", {
                                    relativeOrAbsoluteDate: Object(d.c)(new Date(e.campaign.endAt)) + " " + Object(d.j)(new Date(e.campaign.endAt))
                                }, "BountyItem") : "Available until {DATE}"
                        }
                    }, t
                }(c.Component),
                A = Object(o.compose)(Object(y.b)("BountyItem", {
                    autoReportInteractive: !0
                }))(C);
            var x = Object(r.connect)(null, function(e) {
                return Object(o.bindActionCreators)({
                    showAcceptBountyModal: function(e) {
                        var t = a.__rest(e, []);
                        return Object(i.d)(l.a, t)
                    },
                    showCancelBountyModal: function(e) {
                        var t = a.__rest(e, []);
                        return Object(i.d)(s.a, t)
                    }
                }, e)
            })(A);
            n.d(t, "a", function() {
                return x
            })
        },
        kRSO: function(e, t, n) {
            "use strict";
            var a = n("mrSG"),
                r = n("q1tI"),
                o = n("/MKj"),
                i = n("fvjX"),
                l = n("aCAx"),
                s = n("Ue10"),
                c = n("/7QA"),
                u = n("yR8l"),
                d = n("geRD"),
                m = n("DMoW"),
                p = n("hLBu"),
                y = n("KeYu"),
                h = function(e) {
                    function t() {
                        var t, n = null !== e && e.apply(this, arguments) || this;
                        return n.state = {
                            errorCode: null
                        }, n.bountyErrorCodeToMessage = ((t = {})[m.j.BOUNTY_LIMIT_REACHED] = Object(c.d)("You have already reached your limit of active bounties. Please complete or cancel an active bounty before activating a new one.", "AcceptBountyModal"), t[m.j.BOUNTY_ALREADY_CLAIMED] = Object(c.d)("Oops, it looks like this bounty is no longer available.", "AcceptBountyModal"), t.default = Object(c.d)("Something went wrong and the bounty could not be activated.", "AcceptBountyModal"), t), n.onClose = function() {
                            n.state.errorCode && n.props.refreshData(), n.props.onClose()
                        }, n.onAccept = function() {
                            return a.__awaiter(n, void 0, void 0, function() {
                                var e, t, n;
                                return a.__generator(this, function(a) {
                                    switch (a.label) {
                                        case 0:
                                            e = null, a.label = 1;
                                        case 1:
                                            return a.trys.push([1, 3, 4, 5]), t = {
                                                bountyID: this.props.bounty.id,
                                                bountyCampaignID: this.props.bounty.campaign.id,
                                                userID: this.props.channelID,
                                                platform: this.props.platform
                                            }, [4, this.props.claimBounty(Object(d.a)(t))];
                                        case 2:
                                            return (n = a.sent()).data.claimBounty && n.data.claimBounty.error ? e = n.data.claimBounty.error.code : n.data.claimBounty && n.data.claimBounty.claimedBounty && this.props.handleBountyStatusChanged(n.data.claimBounty.claimedBounty), [3, 5];
                                        case 3:
                                            return a.sent(), e = m.j.UNKNOWN_ERROR, [3, 5];
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
                    return a.__extends(t, e), t.prototype.render = function() {
                        var e = this.props.platform ? " [" + this.props.platform + "]" : "",
                            t = this.props.bounty,
                            n = t.campaign && t.campaign.boxArtURL || t.campaign && t.campaign.game && t.campaign.game.boxArtURL || "",
                            a = null;
                        return this.state.errorCode && (a = r.createElement(s.Xa, {
                            "data-test-selector": "accept-bounty-modal-error-message",
                            padding: {
                                bottom: 2
                            },
                            margin: {
                                right: .5
                            },
                            textAlign: s.Nb.Right,
                            fullWidth: !0,
                            flexShrink: 0
                        }, r.createElement(s.W, {
                            color: s.O.Error
                        }, this.getMessageFromErrorCode(this.state.errorCode)))), r.createElement(s.Xa, {
                            padding: 3
                        }, r.createElement(s.Xa, {
                            display: s.X.Flex,
                            flexDirection: s.Aa.Row,
                            flexWrap: s.Ba.NoWrap,
                            fullWidth: !0,
                            margin: {
                                bottom: 2
                            }
                        }, r.createElement(s.Xa, {
                            className: "accept-bounty-modal__boxart"
                        }, r.createElement(s.o, {
                            ratio: s.p.BoxArt
                        }, r.createElement("img", {
                            src: n
                        }))), r.createElement(s.Xa, {
                            margin: {
                                left: 2
                            }
                        }, r.createElement(s.Xa, null, r.createElement(s.W, {
                            bold: !0,
                            type: s.Rb.Span
                        }, Object(c.d)("Bounty:", "AcceptBountyModal")), " ", r.createElement(s.W, {
                            "data-test-selector": "accept-bounty-modal-title",
                            type: s.Rb.Span
                        }, Object(c.d)("{bountyTitle}{platform} with an average of {ccuMax} concurrent viewers and #sponsored in your stream title.", {
                            bountyTitle: this.props.bounty.campaign.title,
                            ccuMax: this.props.bounty.maximumPayoutCCU || 0,
                            platform: e
                        }, "AcceptBountyModal"))), r.createElement(s.Xa, null, r.createElement(s.W, {
                            bold: !0,
                            type: s.Rb.Span
                        }, Object(c.d)("Bounty Partner:", "AcceptBountyModal")), " ", r.createElement(s.W, {
                            type: s.Rb.Span
                        }, this.props.bounty.campaign.sponsor)), r.createElement(s.Xa, null, r.createElement(s.W, {
                            bold: !0,
                            type: s.Rb.Span
                        }, Object(c.d)("Influencer:", "AcceptBountyModal")), " ", r.createElement(s.W, {
                            type: s.Rb.Span
                        }, this.props.channelName, " (", Object(c.d)("Twitch ID: {id}", {
                            id: this.props.channelID
                        }, "AcceptBountyModal"), ")")), r.createElement(s.Xa, null, r.createElement(s.W, {
                            bold: !0,
                            type: s.Rb.Span
                        }, Object(c.d)("Bounty Period:", "AcceptBountyModal")), " ", r.createElement(s.W, {
                            type: s.Rb.Span
                        }, Object(p.a)(this.props.bounty.campaign.streamLengthMinutes))), r.createElement(s.Xa, null, r.createElement(s.W, {
                            bold: !0,
                            type: s.Rb.Span
                        }, Object(c.d)("Compensation:", "AcceptBountyModal")), " ", r.createElement(s.W, {
                            type: s.Rb.Span
                        }, "$", this.props.bounty.maximumPayoutCents / 100, " USD")))), r.createElement(s.Bb, {
                            className: "accept-bounty-modal__agreement-text",
                            border: !0,
                            padding: 1
                        }, r.createElement(s.Xa, {
                            textAlign: s.Nb.Center
                        }, r.createElement(s.W, {
                            type: s.Rb.Strong
                        }, "Influencer Bounty Order")), r.createElement("br", null), r.createElement(s.W, {
                            type: s.Rb.P
                        }, "This Bounty Order is governed by the (i) Influencer Terms and Conditions attached hereto as Exhibit A and (ii) Bounty Board Service Terms of Use (the “Terms of Use”), both of which are fully incorporated into this Bounty Order. All capitalized terms not defined in this Bounty Order have the respective meanings set forth in the Terms of Use."), r.createElement("br", null), r.createElement(s.W, {
                            type: s.Rb.P
                        }, "By accepting this Bounty Order, you, as the Influencer, accept and agree to be bound by and comply with the terms as set forth herein. IF YOU DO NOT ACCEPT AND AGREE TO BE BOUND BY THESE TERMS, PLEASE DO NOT ACCEPT THE BOUNTY ORDER. If you are accepting the Bounty Order on behalf of another person or a corporate entity, you represent and warrant that you have the authority to bind such person or entity to the terms of this Bounty Order."), r.createElement("br", null), r.createElement(s.Xa, null, r.createElement(s.W, {
                            type: s.Rb.Strong
                        }, "Bounty Requirements:")), r.createElement("br", null), r.createElement("ul", {
                            className: "accept-bounty-modal__bounty-requirements"
                        }, r.createElement("li", null, "Influencer is a party to a Content License Agreement (“Agreement”) with Twitch."), r.createElement("li", null, "Influencer agrees to provide the services as set forth in the Bounty. As compensation for the services, Twitch will pay Influencer in accordance with the terms set forth in the Bounty. Payments by Twitch to Influencer are based on certain concurrent user (“CCU”) requirements being met. If Influencer does not meet the CCU requirements as set forth in the Bounty, Influencer will receive a pro rata portion of the Compensation. In addition, if Influencer does not meet the Minimum Bar as defined above, then no portion of the Compensation will be payable to Influencer."), r.createElement("li", null, 'Title of the broadcast related to the Bounty will state any relationship with the Bounty Partner as instructed by Twitch: i.e. "Ad Content of X", "Paid Advertisement of X" or "#sponsored".'), r.createElement("li", null, "Influencer to save a VOD of the broadcast as a highlight to their Twitch channel."), r.createElement("li", null, "If applicable, Influencer to post on social media accounts/tweet at the start of the broadcast to raise awareness for the Bounty. These posts/tweets and any subsequent posts in connection with the Bounty must contain “#sponsored”."), r.createElement("li", null, "Influencer shall not commit any act or make any statement that disparages Twitch, Bounty Partner, or their respective products/services, or brings Twitch or the Bounty Partner disrepute, contempt, scandal, or ridicule for the Bounty Period and six (6) months thereafter.  Twitch may immediately take down, or request the take down of, any Influencer content that violates this section and Influencer shall cooperate with Twitch to execute such takedowns."), r.createElement("li", null, "If Influencer fails to comply with any of the above Bounty requirements, Twitch may at its discretion immediately terminate this Bounty Order and disqualify the influencer from participating in future Bounties.")), r.createElement("br", null), r.createElement(s.Xa, {
                            textAlign: s.Nb.Center
                        }, r.createElement(s.W, {
                            type: s.Rb.Strong
                        }, "Exhibit A")), r.createElement(s.Xa, {
                            textAlign: s.Nb.Center
                        }, r.createElement(s.W, {
                            type: s.Rb.Strong
                        }, "Influencer Terms and Conditions")), r.createElement("br", null), r.createElement(s.W, {
                            type: s.Rb.P
                        }, "This Exhibit A is made a part of the Bounty Order to which it is attached, and the Agreement to which the Influencer is a party."), r.createElement("br", null), r.createElement(s.W, {
                            type: s.Rb.P
                        }, "1.\t", r.createElement(s.W, {
                            type: s.Rb.Strong
                        }, "Licenses and Release.")), r.createElement("br", null), r.createElement(s.W, {
                            type: s.Rb.P
                        }, "1.1.\t", r.createElement(s.W, {
                            type: s.Rb.Strong,
                            decoration: s.Pb.Underline
                        }, "Influencer Trademark and Copyright License."), " Influencer hereby grants Twitch and the Bounty Partner of each particular accepted Bounty Order a royalty-free, non-exclusive, non-transferable, non-sublicensable, revocable, worldwide license to use and display any trademark, service mark, trade dress, trade name, or logo (“Marks”) and reproduce, distribute, publicly display or perform, or make derivative works of any copyrighted materials (“Materials”) belonging to Influencer and specified for use by Influencer for use in connection with the particular accepted Bounty Order. Without limiting the foregoing, all use by Twitch or the Bounty Partner of the Influencer’s Marks shall be in accordance with Influencer’s usage guidelines that have been delivered or made available to Twitch prior to the date of such use. Influencer may provide in writing an updated version of its usage guidelines and Twitch shall make commercially reasonable efforts to alter, modify or change any Influencer’s Marks being used by Twitch or Bounty Partner in accordance with such request as soon as reasonably practical.  Any such use of Influencer’s Marks will inure solely to Influencer’s benefit.  Nothing contained herein or in the Agreement gives Twitch or Bounty Partner any right, title or interest in the Influencer’s Marks or goodwill therein and thereto, or in any Materials, except as expressly provided in this Section.  For avoidance of doubt, nothing in this Section shall be construed to limit any rights with respect to Influencer’s Marks or Materials that Twitch or Bounty Partner would have as a member of the general public."), r.createElement("br", null), r.createElement(s.W, {
                            type: s.Rb.P
                        }, "1.2.\t", r.createElement(s.W, {
                            type: s.Rb.Strong,
                            decoration: s.Pb.Underline
                        }, "Influencer Release."), " Influencer agrees that Twitch or Bounty Partner of an accepted Bounty Order may use Influencer’s name, voice, signature, likeness, identity, persona or any biographical material concerning Influencer in promotion, advertising, sale, publicizing and exploitation, including ancillary products (e.g., merchandise) in connection with the Bounty and Bounty Partner’s products and services, throughout the world in all media, and in perpetuity.  Influencer agrees that Twitch or Bounty Partner of an accepted Bounty Order may record Influencer’s voice, conversation and sounds, including any performance of any musical composition(s), during and in connection with Influencer’s participation in the Bounty, and that Twitch or Bounty Partner shall have the right, throughout the world, an unlimited number of times in perpetuity, royalty-free, to use and to license others to use, in any manner, all or any portion thereof or of a reproduction thereof in connection with the Bounty.  Influencer waives any right of inspection or approval with respect to any materials created or used by Twitch or Bounty Partner of an accepted Bounty Order and expressly waives any moral rights in connection with its participation in any Bounty."), r.createElement("br", null), r.createElement(s.W, {
                            type: s.Rb.P
                        }, "1.3.\t", r.createElement(s.W, {
                            type: s.Rb.Strong,
                            decoration: s.Pb.Underline
                        }, "License from Bounty Partner."), " Bounty Partner of an accepted Bounty Order may provide licenses to its content, trademarks and other property for Influencer’s use in connection with the Bounty, either directly or through Twitch.  Influencer shall comply with all requirements, guidelines and restrictions with respect to such licenses."), r.createElement("br", null), r.createElement(s.W, {
                            type: s.Rb.P
                        }, "2.\t", r.createElement(s.W, {
                            type: s.Rb.Strong
                        }, "Compliance with Laws."), " Influencer will comply with all applicable laws, rules, regulations and guidelines, including but not limited to the FTC’s Guidelines Concerning the Use of Testimonials and Endorsements in Advertising and all other advertising, marketing, and sweepstakes, contests and promotions laws."), r.createElement("br", null), r.createElement(s.W, {
                            type: s.Rb.P
                        }, "Without limiting the foregoing, Influencer will include in all Influencer Channels for a Bounty all title headers, overlays and other audio or visual disclosures that Twitch requires of Influencer.  Influencer will comply with Twitch’s instructions regarding the format, placement and duration of such disclosures."), r.createElement("br", null), r.createElement(s.W, {
                            type: s.Rb.P
                        }, "Influencer agrees and acknowledges that Twitch may edit or take down the Influencer Channel at any time in order to ensure compliance with applicable laws, rules, regulations and guidelines."), r.createElement("br", null), r.createElement(s.W, {
                            type: s.Rb.P
                        }, "3.\t", r.createElement(s.W, {
                            type: s.Rb.Strong
                        }, "Influencer Representations and Warranties."), " Influencer represents and warrants that: (i) it has the requisite power and authority to enter into the Bounty Order and to perform fully its obligations hereunder; (ii) it is not and will not be under any contractual or other legal obligation which will in any way interfere with its full, prompt and complete performance under any  Bounty Order; (iii) it conducts and will conduct its affairs in compliance with all applicable international, federal, state, and local laws, rules and regulations, including but not limited to the representations and warranties; (iv) it is not a member of a union, guild or other labor organization and is not a party to any collective bargaining or similar agreement, and understands that Twitch is not a member of any union, guild or other labor organization, and the Bountys are not subject to any collective bargaining agreement; and (v) all other representations and warranties made by Influencer in the Agreement will continue to apply."), r.createElement("br", null), r.createElement(s.W, {
                            type: s.Rb.P
                        }, "4.\t", r.createElement(s.W, {
                            type: s.Rb.Strong
                        }, "Bounty Partner Confidential Information."), " Twitch or Bounty Partner may disclose to Influencer certain Confidential Information of Bounty Partner or its associated companies, suppliers, or customers.  Influencer agrees to treat such information as Confidential Information under the Agreement."), r.createElement("br", null), r.createElement(s.W, {
                            type: s.Rb.P
                        }, "5.\t", r.createElement(s.W, {
                            type: s.Rb.Strong
                        }, "Influencer Indemnification Obligations."), " Influencer hereby agrees to defend, indemnify and hold harmless Twitch and/or the Bounty Partner of any accepted Bounty Order, and their directors, officers, employees and affiliated entities, against any and all claims, actions, losses, judgments, settlements, damages, costs, and expenses, including reasonable attorneys’ fees (collectively, “Losses”) arising out of or based on any claim by a third party related to, involving or concerning a breach by Influencer of its representations, warranties or obligations under an accepted Bounty Order."), r.createElement("br", null), r.createElement(s.W, {
                            type: s.Rb.P
                        }, "6.\t", r.createElement(s.W, {
                            type: s.Rb.Strong
                        }, "Term and Termination.")), r.createElement("br", null), r.createElement(s.W, {
                            type: s.Rb.P
                        }, "6.1.\t", r.createElement(s.W, {
                            type: s.Rb.Strong,
                            decoration: s.Pb.Underline
                        }, "Termination for Convenience or Breach."), " Twitch may terminate any particular Bounty Order at any time in its sole discretion or at the request of a Bounty Partner for convenience, or for breach of any requirements set forth in the Bounty Orders by the Influencer.  In the event that Twitch terminates any Bounty Order for breach, Twitch nor its Bounty Partner(s) are obliged to make any payments to the Influencer in connection with the breached Bounty Orders."), r.createElement("br", null), r.createElement(s.W, {
                            type: s.Rb.P
                        }, "6.2.\t", r.createElement(s.W, {
                            type: s.Rb.Strong,
                            decoration: s.Pb.Underline
                        }, "Obligations Upon Termination."), " Influencer must return, delete, destroy or take down any materials or content in accordance with instructions from Twitch or the applicable Bounty Partner upon termination or expiration of any particular Bounty Orders."), r.createElement("br", null), r.createElement(s.W, {
                            type: s.Rb.P
                        }, "7.\t", r.createElement(s.W, {
                            type: s.Rb.Strong
                        }, "Payment."), " Payment terms shall be net sixty (60) days following the end of the Bounty Period and shall be payable in accordance with the Terms of Use."), r.createElement("br", null), r.createElement(s.W, {
                            type: s.Rb.P
                        }, "8.\t", r.createElement(s.W, {
                            type: s.Rb.Strong
                        }, "Miscellaneous.")), r.createElement("br", null), r.createElement(s.W, {
                            type: s.Rb.P
                        }, "8.1.\t", r.createElement(s.W, {
                            type: s.Rb.Strong,
                            decoration: s.Pb.Underline
                        }, "Third Party Beneficiaries."), " The Bounty Partner of any accepted Bounty Order shall be a third party beneficiary with respect to that accepted Bounty Order."), r.createElement("br", null), r.createElement(s.W, {
                            type: s.Rb.P
                        }, "8.2.\t", r.createElement(s.W, {
                            type: s.Rb.Strong,
                            decoration: s.Pb.Underline
                        }, "Other Terms."), " These Influencer Terms and Conditions and all Bounty Orders are governed by and subject to the Agreement.  Capitalized terms used but not defined in these Influencer Terms and Conditions will have the meanings defined in the Agreement.  Except as amended by these Influencer Terms and Conditions, all other terms and conditions of the Agreement remain in full force and effect.")), r.createElement(s.Bb, {
                            borderTop: !0,
                            display: s.X.Flex,
                            flexDirection: s.Aa.Row,
                            alignItems: s.f.Center,
                            justifyContent: s.Wa.End,
                            padding: {
                                top: 2
                            },
                            flexWrap: s.Ba.Wrap
                        }, a, this.props.bounty.status === m.f.AVAILABLE ? r.createElement(r.Fragment, null, r.createElement(s.Xa, {
                            margin: {
                                left: .5,
                                right: .5
                            }
                        }, r.createElement(s.z, {
                            "data-test-selector": "accept-bounty-modal-cancel-button",
                            type: s.F.Hollow,
                            onClick: this.onClose
                        }, Object(c.d)("Cancel", "AcceptBountyModal"))), r.createElement(s.Xa, {
                            margin: {
                                left: .5,
                                right: .5
                            }
                        }, r.createElement(s.z, {
                            "data-test-selector": "accept-bounty-modal-accept-button",
                            onClick: this.onAccept,
                            disabled: !!this.state.errorCode
                        }, Object(c.d)("Accept & Activate", "AcceptBountyModal")))) : r.createElement(s.Xa, {
                            margin: {
                                left: .5,
                                right: .5
                            }
                        }, r.createElement(s.z, {
                            "data-test-selector": "accept-bounty-modal-cancel-button",
                            type: s.F.Hollow,
                            onClick: this.onClose
                        }, Object(c.d)("Close", "AcceptBountyModal")))))
                    }, t
                }(r.PureComponent),
                b = Object(u.a)(y, {
                    name: "claimBounty"
                })(h),
                f = (n("B/yC"), function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        return r.createElement(s.Bb, {
                            className: "accept-bounty-modal__container",
                            background: s.r.Base
                        }, r.createElement(b, {
                            "data-test-selector": "accept-bounty-modal-selector",
                            onClose: this.props.closeModal,
                            bounty: this.props.bounty,
                            channelID: this.props.channelID,
                            channelName: this.props.channelName,
                            handleBountyStatusChanged: this.props.handleBountyStatusChanged,
                            platform: this.props.platform,
                            refreshData: this.props.refreshData
                        }))
                    }, t
                }(r.Component));
            var g = Object(o.connect)(null, function(e) {
                return Object(i.bindActionCreators)({
                    closeModal: l.c
                }, e)
            })(f);
            n.d(t, !1, function() {
                return "accept-bounty-modal-selector"
            }), n.d(t, !1, function() {
                return f
            }), n.d(t, "a", function() {
                return g
            })
        },
        pQow: function(e, t, n) {
            "use strict";

            function a(e) {
                return "/" + e + "/dashboard/bounties/"
            }

            function r(e, t) {
                return "/" + e + "/dashboard/bounties/" + t.id
            }

            function o(e, t) {
                return "/" + e + "/dashboard/bounties/" + t.id
            }
            n.d(t, "c", function() {
                return a
            }), n.d(t, "a", function() {
                return r
            }), n.d(t, "b", function() {
                return o
            })
        },
        t241: function(e, t, n) {
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
            a.definitions = a.definitions.concat(function(e) {
                return e.filter(function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var t = e.name.value;
                    return !r[t] && (r[t] = !0, !0)
                })
            }(n("D493").definitions)), e.exports = a
        }
    }
]);