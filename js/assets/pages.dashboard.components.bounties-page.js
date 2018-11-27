(window.webpackJsonp = window.webpackJsonp || []).push([
    [179], {
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
                return l
            });
            var a, r, o = n("Ue10");
            ! function(e) {
                e.Android = "Android", e.HTCVive = "HTC Vive", e.iOS = "iOS", e.MacOS = "Mac OS", e.NintendoSwitch = "Nintendo Switch", e.OculusRift = "Oculus Rift", e.PC = "PC", e.PlayStation4 = "PlayStation 4", e.PlayStationVR = "PlayStation VR", e.XboxOne = "Xbox One"
            }(r || (r = {}));
            var i = function() {
                    return function(e, t) {
                        void 0 === t && (t = ""), this.asset = e, this.suffix = t
                    }
                }(),
                l = ((a = {})[r.Android] = new i(o.ub.Android), a[r.HTCVive] = new i(o.ub.HTCVibe), a[r.iOS] = new i(o.ub.IOS), a[r.MacOS] = new i(o.ub.MacOs), a[r.NintendoSwitch] = new i(o.ub.NintendoSwitch), a[r.OculusRift] = new i(o.ub.OculusVR), a[r.PC] = new i(o.ub.Windows), a[r.PlayStation4] = new i(o.ub.PlayStation), a[r.PlayStationVR] = new i(o.ub.PlayStation, "VR"), a[r.XboxOne] = new i(o.ub.XboxOne), a)
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
        SWPa: function(e, t, n) {
            "use strict";
            var a = n("mrSG"),
                r = n("q1tI"),
                o = n("6x+I"),
                i = n("DMoW");
            var l, s = n("OnAS"),
                c = n("Ue10");
            n("DWxE");
            ! function(e) {
                e.ExpandedSection = "bounty-expanded-section", e.HeaderAmount = "bounty-heder-amount", e.HeaderDate = "bounty-header-date", e.HeaderIcons = "bounty-header-icons", e.ContentDescription = "bounty-content-description", e.ContentDescriptionLink = "bounty-content-description", e.ContentBottomExtra = "bounty-content-bottom-extra", e.ContentPayout = "bounty-content-payout", e.ContentTitle = "bounty-content-title", e.ActionActivate = "bounty-action-activate", e.ActionCancel = "bounty-action-cancel", e.ActionTerms = "bounty-action-terms", e.PlatformSelect = "bounty-platform-select"
            }(l || (l = {}));
            var u = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.renderHeader = function() {
                            var e = t.props,
                                n = e.isSelected,
                                a = e.bounty,
                                o = e.renderHeaderAmount,
                                i = e.renderHeaderDate,
                                s = {
                                    backgroundImage: "url(" + (a.campaign.coverURL || a.campaign.game && a.campaign.game.coverURL || "") + ")"
                                };
                            return r.createElement(c.Fb, {
                                elevation: 2
                            }, r.createElement(c.U, {
                                hoverUnderlineNone: !0,
                                to: t.getPath(),
                                onClick: t.onClickHeader,
                                className: "bounty-item__link"
                            }, r.createElement(c.Ya, {
                                display: c.X.Flex,
                                position: c.kb.Relative
                            }, r.createElement(c.Ya, {
                                position: c.kb.Absolute,
                                fullWidth: !0,
                                fullHeight: !0
                            }, r.createElement("div", {
                                className: "bounty-item__backdrop",
                                style: s
                            })), r.createElement(c.Ya, {
                                className: "bounty-item__indicator",
                                position: c.kb.Relative,
                                display: c.X.Flex,
                                alignItems: c.f.Center,
                                justifyContent: c.Xa.Center,
                                padding: {
                                    left: 2
                                }
                            }, r.createElement(c.tb, {
                                asset: n ? c.ub.AngleUp : c.ub.AngleDown,
                                type: c.vb.Alt2
                            })), r.createElement(c.Ya, {
                                flexGrow: 1,
                                className: "bounty-item__description",
                                display: c.X.Flex,
                                padding: {
                                    y: 2,
                                    left: 1,
                                    right: 2
                                },
                                justifyContent: c.Xa.Around,
                                flexDirection: c.Aa.Column,
                                position: c.kb.Relative
                            }, r.createElement(c.W, {
                                type: c.Wb.H4,
                                color: c.O.Base,
                                ellipsis: !0,
                                title: a.campaign.title
                            }, a.campaign.title), r.createElement(c.Ya, {
                                display: c.X.Flex,
                                alignItems: c.f.Center
                            }, t.renderIcons(), r.createElement(c.W, {
                                "data-test-selector": l.HeaderDate,
                                color: c.O.Alt2
                            }, i))), r.createElement(c.Fb, {
                                "data-test-selector": l.HeaderAmount,
                                className: "bounty-item__amount",
                                display: c.X.Flex,
                                alignItems: c.f.Center,
                                justifyContent: c.Xa.Center,
                                flexGrow: 0,
                                flexShrink: 0,
                                position: c.kb.Relative,
                                background: c.r.Base
                            }, o))))
                        }, t.renderIcons = function() {
                            var e = t.props.headerIcons;
                            return e && e.length > 0 ? r.createElement(c.Ya, {
                                "data-test-selector": l.HeaderIcons,
                                margin: {
                                    right: .5
                                },
                                display: c.X.InlineFlex
                            }, e.map(function(e) {
                                return e ? r.createElement(r.Fragment, {
                                    key: e.asset
                                }, e.asset && r.createElement(c.tb, {
                                    asset: e.asset,
                                    type: c.vb.Alt2
                                }), e.suffix && r.createElement(c.Ya, {
                                    display: c.X.Flex,
                                    alignItems: c.f.Center
                                }, r.createElement(c.W, {
                                    color: c.O.Alt2
                                }, e.suffix))) : null
                            })) : null
                        }, t.renderContent = function() {
                            var e = t.props,
                                n = e.bounty,
                                a = e.contentPayout,
                                o = e.markdownContent,
                                i = e.renderContentActions,
                                s = e.renderContentDescription,
                                u = n.campaign.displayName || n.campaign.game && n.campaign.game.displayName || "",
                                d = n.campaign.boxArtURL || n.campaign.game && n.campaign.game.boxArtURL || "";
                            return r.createElement(c.i, {
                                type: c.n.SlideInTop,
                                duration: c.k.Short,
                                enabled: !0,
                                timing: c.m.EaseOut
                            }, r.createElement(c.Fb, {
                                className: "bounty-item__expanded",
                                elevation: 1,
                                padding: 2,
                                display: c.X.Flex,
                                flexDirection: c.Aa.Column,
                                fullWidth: !0,
                                "data-test-selector": l.ExpandedSection
                            }, r.createElement(c.Ya, {
                                display: c.X.Flex,
                                flexDirection: c.Aa.Row,
                                flexWrap: c.Ba.NoWrap,
                                fullWidth: !0
                            }, r.createElement(c.Ya, {
                                className: "bounty-item__boxart",
                                margin: {
                                    right: 2,
                                    bottom: 2
                                }
                            }, r.createElement(c.o, {
                                ratio: c.p.BoxArt
                            }, r.createElement("img", {
                                src: d
                            }))), r.createElement(c.Ya, null, r.createElement(c.W, {
                                "data-test-selector": l.ContentTitle,
                                type: c.Wb.H4
                            }, u), r.createElement(c.W, {
                                color: c.O.Alt2
                            }, n.campaign.sponsor), r.createElement(c.Ya, {
                                "data-test-selector": l.ContentDescription,
                                padding: {
                                    top: 2
                                }
                            }, s))), r.createElement(c.Ya, {
                                padding: {
                                    top: 2
                                }
                            }, o && t.renderContentExtraDetails(o)), r.createElement(c.Ya, {
                                fullWidth: !0,
                                display: c.X.Flex,
                                flexDirection: c.Aa.Row,
                                justifyContent: c.Xa.Between,
                                alignItems: c.f.Center
                            }, r.createElement(c.Ya, null, r.createElement(c.W, {
                                "data-test-selector": l.ContentPayout,
                                type: c.Wb.H4
                            }, a)), r.createElement(c.Ya, {
                                display: c.X.Flex,
                                flexDirection: c.Aa.Row,
                                alignItems: c.f.Center
                            }, i))))
                        }, t.renderContentExtraDetails = function(e) {
                            return null === t.props.bounty.campaign.details ? null : r.createElement(c.Ya, {
                                "data-test-selector": l.ContentBottomExtra,
                                fullWidth: !0,
                                margin: {
                                    bottom: 1
                                }
                            }, r.createElement(o, {
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
                            Object(s.c)({
                                bounty: n,
                                channelID: a,
                                impressionGroupID: r
                            })
                        }, t.onClickHeader = function() {
                            var e = t.props,
                                n = e.isSelected,
                                a = e.bounty,
                                r = e.channelID;
                            n || Object(s.b)({
                                action: s.a.ViewDetails,
                                bounty: a,
                                channelID: r
                            })
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.trackImpression()
                    }, t.prototype.render = function() {
                        var e = this.props.isSelected;
                        return r.createElement(c.Ya, {
                            className: "bounty-item",
                            margin: {
                                bottom: 1
                            }
                        }, this.renderHeader(), e && this.renderContent())
                    }, t.prototype.getPath = function() {
                        var e = this.props,
                            t = e.bounty,
                            n = e.channelName,
                            a = e.isPreview,
                            r = e.isSelected;
                        return a ? "#" : r ? function(e) {
                            return "/" + e + "/dashboard/bounties/"
                        }(n) : t.status === i.h.AVAILABLE ? function(e, t) {
                            return "/" + e + "/dashboard/bounties/" + t.id
                        }(n, t.campaign) : function(e, t) {
                            return "/" + e + "/dashboard/bounties/" + t.id
                        }(n, t)
                    }, t
                }(r.Component),
                d = u;
            n.d(t, "b", function() {
                return l
            }), n.d(t, !1, function() {
                return u
            }), n.d(t, "a", function() {
                return d
            })
        },
        TKuN: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return i
            });
            var a = n("q1tI"),
                r = n("f00E"),
                o = n("Ue10"),
                i = function() {
                    function e(e) {
                        this.counter = 0, this.prefix = "", this.prefix = e || Object(r.b)(), this.reset()
                    }
                    return e.prototype.reset = function() {
                        this.counter = 0
                    }, e.prototype.bold = function() {
                        var e = this;
                        return function(t) {
                            return a.createElement(o.W, {
                                key: e.key(),
                                type: o.Wb.Strong
                            }, t)
                        }
                    }, e.prototype.key = function() {
                        var e = "bounty_" + this.prefix + "_" + this.counter;
                        return this.counter++, e
                    }, e
                }()
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
        "VWz+": function(e, t, n) {
            "use strict";
            var a = n("mrSG"),
                r = n("q1tI"),
                o = n("/7QA"),
                i = n("SWPa"),
                l = n("TKuN"),
                s = n("Ue10"),
                c = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.unique = new l.a("rules"), t
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        var e = this.props.channelName;
                        return this.unique.reset(), r.createElement("ul", {
                            className: "bounty-item__description-list",
                            key: this.unique.key()
                        }, r.createElement("li", null, Object(o.d)("No needless bad-mouthing of the content, and be sure to engage with the content and your community!", "BountyItemDescriptionRules")), r.createElement("li", {
                            key: this.unique.key()
                        }, Object(o.d)("Use the <x:bold>Bounties widget</x:bold> on your <x:link>Live Dashboard</x:link> to add <x:bold>#sponsored</x:bold> to your stream title.", {
                            "x:bold": this.unique.bold(),
                            "x:link": this.createLink("/" + e + "/dashboard/live")
                        }, "BountyItemDescriptionRules")), r.createElement("li", {
                            key: this.unique.key()
                        }, Object(o.d)('Turn on the "<x:bold>Store Past Broadcasts</x:bold>" option in your <x:link>Channel Settings</x:link>.', {
                            "x:bold": this.unique.bold(),
                            "x:link": this.createLink("/" + e + "/dashboard/settings")
                        }, "BountyItemDescriptionRules")), r.createElement("li", {
                            key: this.unique.key()
                        }, Object(o.d)("Bounties are held in your queue for a <x:bold>maximum of 5 days</x:bold>. They will expire sooner if the broader bounty campaign is ending.", {
                            "x:bold": this.unique.bold()
                        }, "BountyItemDescriptionRules")))
                    }, t.prototype.createLink = function(e) {
                        var t = this;
                        return function(n) {
                            var a = t.props.isPreview ? "" : e;
                            return r.createElement(s.U, {
                                "data-test-selector": i.b.ContentDescriptionLink,
                                key: t.unique.key(),
                                to: a
                            }, n)
                        }
                    }, t
                }(r.Component);
            n.d(t, "a", function() {
                return c
            })
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
                h = function(e) {
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
                        }, t.getMessageFromErrorCode = function(e) {
                            return e === m.j.BOUNTY_NOT_LIVE ? Object(c.d)("This bounty is no longer live. It may have already been completed or cancelled.", "CancelBountyModal") : Object(c.d)("Something went wrong and the bounty could not be cancelled.", "CancelBountyModal")
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
                        return this.state.errorCode && (a = r.createElement(s.Ya, {
                            "data-test-selector": "accept-bounty-modal-error-message",
                            padding: {
                                top: 2
                            },
                            fullWidth: !0,
                            flexShrink: 0
                        }, r.createElement(s.W, {
                            color: s.O.Error
                        }, this.getMessageFromErrorCode(this.state.errorCode)))), r.createElement(s.Ya, {
                            padding: 3
                        }, r.createElement(s.Ya, null, r.createElement(s.W, {
                            type: s.Wb.H4
                        }, n), r.createElement(s.Ya, {
                            margin: {
                                y: 1
                            }
                        }, r.createElement(s.W, null, Object(c.d)("Are you sure you want to cancel this bounty? If there are still bounties available you can pick it up again later.", "CancelBountyModal"))), r.createElement(s.Ya, {
                            margin: {
                                bottom: 1
                            }
                        }, r.createElement(s.W, null, Object(c.d)("Let us know why the bounty didn't work out:", "CancelBountyModal"))), r.createElement(s.Ab, {
                            "data-test-selector": "cancel-bounty-modal-reason-select",
                            onChange: this.handleSelectChange,
                            value: this.state.reason
                        }, r.createElement("option", {
                            disabled: !0,
                            selected: !0,
                            value: ""
                        }, Object(c.d)("Select Reason", "CancelBountyModal")), t)), a, r.createElement(s.Ya, {
                            display: s.X.Flex,
                            flexDirection: s.Aa.Row,
                            alignItems: s.f.Center,
                            justifyContent: s.Xa.Center,
                            padding: {
                                top: 2
                            }
                        }, r.createElement(s.Ya, {
                            margin: {
                                left: .5,
                                right: .5
                            }
                        }, r.createElement(s.z, {
                            "data-test-selector": "cancel-bounty-modal-cancel-button",
                            onClick: this.onClose,
                            type: s.F.Hollow
                        }, Object(c.d)("Nevermind", "CancelBountyModal"))), r.createElement(s.Ya, {
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
                y = Object(u.a)(p, {
                    name: "cancelBounty"
                })(h),
                b = (n("CVMv"), function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        return r.createElement(s.Fb, {
                            className: "cancel-bounty-modal__container",
                            background: s.r.Base
                        }, r.createElement(y, {
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
        amCr: function(e, t, n) {
            "use strict";
            var a = n("mrSG"),
                r = n("/MKj"),
                o = n("fvjX"),
                i = n("aCAx"),
                l = n("kRSO"),
                s = n("q1tI"),
                c = n("/7QA"),
                u = n("N74f"),
                d = n("GnwI"),
                m = n("pK0l"),
                p = n("SWPa"),
                h = n("OnAS"),
                y = n("Ue10"),
                b = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        n.getHeaderIcons = function() {
                            return (n.props.bounty.campaign.availablePlatforms || []).map(function(e) {
                                return u.a[e]
                            })
                        }, n.onChangePlatform = function(e) {
                            var t = e.currentTarget.value;
                            n.setState({
                                selectedPlatform: t
                            })
                        }, n.renderContentActions = function() {
                            var e = n.props,
                                t = e.bounty,
                                a = e.isPreview,
                                r = t.campaign.availablePlatforms || [],
                                o = r.length > 1,
                                i = a || o && !n.state.selectedPlatform;
                            return s.createElement(s.Fragment, null, o && n.renderPlatformAction(r), s.createElement(y.z, {
                                "data-test-selector": p.b.ActionActivate,
                                disabled: i,
                                onClick: n.showAcceptBountyModal
                            }, Object(c.d)("Activate Bounty", "BountyGameItemAvailable")))
                        }, n.renderPlatformAction = function(e) {
                            return s.createElement(y.Ya, {
                                margin: {
                                    right: 1
                                }
                            }, s.createElement(y.Ab, {
                                "data-test-selector": p.b.PlatformSelect,
                                onChange: n.onChangePlatform,
                                value: n.state.selectedPlatform
                            }, s.createElement("option", {
                                value: "",
                                key: "platform-not-selected"
                            }, Object(c.d)("Select Platform", "BountyGameItemAvailable")), e.map(function(e) {
                                return s.createElement("option", {
                                    key: e,
                                    value: e
                                }, e)
                            })))
                        }, n.renderContentDescription = function() {
                            var e = n.props,
                                t = e.bounty,
                                a = e.channelName,
                                r = e.isPreview;
                            return s.createElement(m.a, {
                                bounty: t,
                                channelName: a,
                                isPreview: r,
                                key: t.id
                            })
                        }, n.renderContentPayout = function() {
                            var e = n.props,
                                t = e.bounty,
                                a = e.isPreview ? "XX" : t.maximumPayoutCents / 100;
                            return Object(c.d)("Max Payout: ${amount}", {
                                amount: a
                            }, "BountyGameItemAvailable")
                        }, n.renderHeaderAmount = function() {
                            var e = n.props,
                                t = e.bounty,
                                a = e.isPreview ? "XX" : t.maximumPayoutCents / 100;
                            return s.createElement(y.Ya, {
                                display: y.X.Flex
                            }, s.createElement(y.W, {
                                fontSize: y.Ca.Size7
                            }, "$"), s.createElement(y.W, {
                                type: y.Wb.H2
                            }, a))
                        }, n.renderHeaderDate = function() {
                            var e = n.props.bounty,
                                t = Object(c.c)(new Date(e.campaign.endAt)) + " " + Object(c.j)(new Date(e.campaign.endAt));
                            return Object(c.d)("Available until {relativeOrAbsoluteDate}", {
                                relativeOrAbsoluteDate: t
                            }, "BountyGameItemAvailable")
                        }, n.showAcceptBountyModal = function() {
                            var e = n.props,
                                t = e.bounty,
                                a = e.channelID,
                                r = e.channelName,
                                o = e.handleBountyStatusChanged,
                                i = e.refreshData,
                                l = e.showAcceptBountyModal;
                            Object(h.b)({
                                action: h.a.ViewLegal,
                                bounty: t,
                                channelID: a,
                                selectedPlatform: n.state.selectedPlatform
                            }), l({
                                bounty: t,
                                channelID: a,
                                channelName: r,
                                handleBountyStatusChanged: o,
                                platform: n.state.selectedPlatform || null,
                                refreshData: i
                            })
                        };
                        var a = t.bounty.campaign.availablePlatforms || [];
                        return n.state = 1 === a.length ? {
                            selectedPlatform: a[0]
                        } : {}, n
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        var e = this.props,
                            t = e.bounty,
                            n = e.channelID,
                            a = e.channelName,
                            r = e.impressionGroupID,
                            o = e.isSelected,
                            i = e.isPreview;
                        return s.createElement(p.a, {
                            bounty: t,
                            channelID: n,
                            channelName: a,
                            contentPayout: this.renderContentPayout(),
                            headerIcons: this.getHeaderIcons(),
                            impressionGroupID: r,
                            isSelected: o,
                            isPreview: i,
                            markdownContent: t.campaign.details,
                            renderContentActions: this.renderContentActions(),
                            renderContentDescription: this.renderContentDescription(),
                            renderHeaderAmount: this.renderHeaderAmount(),
                            renderHeaderDate: this.renderHeaderDate()
                        })
                    }, t
                }(s.Component),
                f = Object(o.compose)(Object(d.b)("BountyGameItemAvailable", {
                    autoReportInteractive: !0
                }))(b);
            var g = Object(r.connect)(null, function(e) {
                return Object(o.bindActionCreators)({
                    showAcceptBountyModal: function(e) {
                        var t = a.__rest(e, []);
                        return Object(i.d)(l.a, t)
                    }
                }, e)
            })(f);
            n.d(t, "a", function() {
                return g
            })
        },
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
                h = n("2xye"),
                y = n("GnwI"),
                b = n("N74f"),
                f = n("SWPa"),
                g = n("Ue10"),
                v = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.getHeaderIcons = function() {
                            var e = t.props.bounty,
                                n = e.platform ? b.a[e.platform] : null;
                            return n ? [n] : []
                        }, t.renderContentDescription = function() {
                            var e, n = t.props.bounty;
                            return e = n.lastModifiedAt ? Object(i.d)("This bounty was cancelled on {dateCancelled}.", {
                                dateCancelled: r.createElement(g.W, {
                                    type: g.Wb.Strong
                                }, Object(i.c)(new Date(n.lastModifiedAt)))
                            }, "BountyItemCancelled") : Object(i.d)("This bounty was cancelled.", "BountyItemCancelled"), r.createElement(r.Fragment, null, e)
                        }, t.renderHeaderAmount = function() {
                            return r.createElement(g.W, {
                                type: g.Wb.H2
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
                        return r.createElement(f.a, {
                            bounty: t,
                            channelID: n,
                            channelName: a,
                            contentPayout: this.renderContentPayout(),
                            headerIcons: this.getHeaderIcons(),
                            impressionGroupID: o,
                            isSelected: i,
                            isPreview: !1,
                            markdownContent: null,
                            renderContentActions: null,
                            renderContentDescription: this.renderContentDescription(),
                            renderHeaderAmount: this.renderHeaderAmount(),
                            renderHeaderDate: this.renderHeaderDate()
                        })
                    }, t
                }(r.Component),
                E = Object(o.compose)(Object(y.b)("BountyItemCancelled", {
                    autoReportInteractive: !0
                }))(v),
                w = n("TKuN"),
                B = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.unique = new w.a("completed"), t.getHeaderIcons = function() {
                            var e = t.props.bounty,
                                n = e.platform ? b.a[e.platform] : null;
                            return n ? [n] : []
                        }, t.renderContentDescription = function() {
                            var e = t.getPayoutMessage();
                            return r.createElement(r.Fragment, null, e)
                        }, t.getPayoutMessage = function() {
                            var e = t.props.bounty,
                                n = e.maximumPayoutCCU || 0,
                                a = e.minimumPayoutCCU || 0,
                                r = e.maximumPayoutCents || 0,
                                o = e.payoutCents || 0;
                            return 0 === e.payoutCents ? Object(i.d)("Unfortunately your average concurrent viewers did not reach the minimum requirement of <x:bold>{ccuMin} concurrent viewers</x:bold> and you will not receive a payout for this bounty. Make sure to do bounties during your peak hours to increase your chances of a good payout.", {
                                "x:bold": t.unique.bold(),
                                ccuMin: a
                            }, "BountyItemCompleted") : o === r ? Object(i.d)("Based on your concurrent viewers, you got the max payout of <x:bold>${maxPayout}</x:bold>. Bounty payouts are bundled with your standard monthly accrued revenue payment.", {
                                "x:bold": t.unique.bold(),
                                maxPayout: r / 100
                            }, "BountyItemCompleted") : n ? Object(i.d)("You hit <x:bold>{percentPayout}%</x:bold> of your target payout goal, for a total of <x:bold>${payout}</x:bold>. Bounty payouts are bundled with your standard monthly accrued revenue payment.", {
                                "x:bold": t.unique.bold(),
                                percentPayout: Math.floor(o / r * 100),
                                payout: o / 100
                            }, "BountyItemCompleted") : Object(i.d)("Based on your concurrent viewers, you got a payout of <x:bold>${payout}</x:bold> out of a potential ${maxPayout}. Bounty payouts are bundled with your standard monthly accrued revenue payment.", {
                                "x:bold": t.unique.bold(),
                                payout: o / 100,
                                maxPayout: r / 100
                            }, "BountyItemCompleted")
                        }, t.renderHeaderAmount = function() {
                            var e = t.props.bounty;
                            return r.createElement(g.Ya, {
                                display: g.X.Flex
                            }, r.createElement(g.W, {
                                fontSize: g.Ca.Size7
                            }, "$"), r.createElement(g.W, {
                                type: g.Wb.H2
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
                        return this.unique.reset(), r.createElement(f.a, {
                            bounty: t,
                            channelID: n,
                            channelName: a,
                            contentPayout: this.renderContentPayout(),
                            headerIcons: this.getHeaderIcons(),
                            impressionGroupID: o,
                            isSelected: i,
                            isPreview: !1,
                            markdownContent: null,
                            renderContentActions: null,
                            renderContentDescription: this.renderContentDescription(),
                            renderHeaderAmount: this.renderHeaderAmount(),
                            renderHeaderDate: this.renderHeaderDate()
                        })
                    }, t
                }(r.Component),
                k = Object(o.compose)(Object(y.b)("BountyItemCompleted", {
                    autoReportInteractive: !0
                }))(B),
                C = n("amCr"),
                A = n("/MKj"),
                I = n("aCAx"),
                S = n("kRSO"),
                O = n("Z9g5"),
                x = n("pK0l"),
                T = n("OnAS"),
                D = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.getHeaderIcons = function() {
                            var e = t.props.bounty;
                            return e.platform ? [b.a[e.platform]] : []
                        }, t.renderContentActions = function() {
                            return r.createElement(r.Fragment, null, r.createElement(g.Ya, {
                                margin: {
                                    right: 2
                                }
                            }, r.createElement(g.z, {
                                "data-test-selector": f.b.ActionTerms,
                                type: g.F.Text,
                                onClick: t.showTermsBountyModal
                            }, Object(i.d)("Terms", "BountyGameItemLive"))), r.createElement(g.z, {
                                "data-test-selector": f.b.ActionCancel,
                                type: g.F.Hollow,
                                onClick: t.showCancelBountyModal
                            }, Object(i.d)("Cancel Bounty", "BountyGameItemLive")))
                        }, t.renderContentDescription = function() {
                            var e = t.props,
                                n = e.bounty,
                                a = e.channelName,
                                o = e.isPreview;
                            return r.createElement(x.a, {
                                bounty: n,
                                channelName: a,
                                isPreview: o
                            })
                        }, t.renderHeaderAmount = function() {
                            var e = t.props.bounty;
                            return r.createElement(g.Ya, {
                                display: g.X.Flex
                            }, r.createElement(g.W, {
                                fontSize: g.Ca.Size7
                            }, "$"), r.createElement(g.W, {
                                type: g.Wb.H2
                            }, e.maximumPayoutCents / 100))
                        }, t.renderContentPayout = function() {
                            var e = t.props.bounty;
                            return Object(i.d)("Max Payout: ${amount}", {
                                amount: e.maximumPayoutCents / 100
                            }, "BountyGameItemLive")
                        }, t.renderHeaderDate = function() {
                            var e = t.props.bounty;
                            return e.endAt ? Object(i.d)("Expires {relativeDate}", {
                                relativeDate: Object(i.i)(new Date(e.endAt))
                            }, "BountyGameItemLive") : ""
                        }, t.showTermsBountyModal = function() {
                            var e = t.props,
                                n = e.bounty,
                                a = e.channelID,
                                r = e.channelName,
                                o = e.handleBountyStatusChanged,
                                i = e.refreshData,
                                l = e.showAcceptBountyModal;
                            Object(T.b)({
                                action: T.a.ViewLegal,
                                bounty: n,
                                channelID: a
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
                        return r.createElement(f.a, {
                            bounty: t,
                            channelID: n,
                            channelName: a,
                            contentPayout: this.renderContentPayout(),
                            headerIcons: this.getHeaderIcons(),
                            impressionGroupID: o,
                            isSelected: i,
                            isPreview: !1,
                            markdownContent: t.campaign.details,
                            renderContentActions: this.renderContentActions(),
                            renderContentDescription: this.renderContentDescription(),
                            renderHeaderAmount: this.renderHeaderAmount(),
                            renderHeaderDate: this.renderHeaderDate()
                        })
                    }, t
                }(r.Component),
                P = Object(o.compose)(Object(y.b)("BountyGameItemLive", {
                    autoReportInteractive: !0
                }))(D);
            var N = Object(A.connect)(null, function(e) {
                    return Object(o.bindActionCreators)({
                        showAcceptBountyModal: function(e) {
                            var t = a.__rest(e, []);
                            return Object(I.d)(S.a, t)
                        },
                        showCancelBountyModal: function(e) {
                            var t = a.__rest(e, []);
                            return Object(I.d)(O.a, t)
                        }
                    }, e)
                })(P),
                W = n("VWz+"),
                _ = n("hLBu"),
                j = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.unique = new w.a("trailer-description"), t
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        var e = this.props,
                            t = e.bounty,
                            n = e.channelName,
                            a = e.isPreview,
                            o = Object(_.a)(t.campaign.streamLengthMinutes),
                            l = a ? "XX" : t.minimumPayoutCCU || 0,
                            s = a ? "XXXX" : t.maximumPayoutCCU || 0,
                            c = t.campaign.displayName || t.campaign.game && t.campaign.game.displayName || "";
                        return this.unique.reset(), r.createElement(r.Fragment, null, r.createElement(g.W, {
                            type: g.Wb.P,
                            key: this.unique.key()
                        }, Object(i.d)("At any point during a stream session, for <x:bold>{streamLength}</x:bold>, watch the <x:bold>{displayName} Trailer</x:bold> and discuss what you saw on stream with an average of <x:bold>{ccuMax} concurrent viewers</x:bold>. If you don't hit an average of at least <x:bold>{ccuMin} concurrents</x:bold>, you will not receive a payout. If you achieve the minimum but do not reach the goal, you will get a <x:bold>proportional percentage</x:bold> of the payout.", {
                            "x:bold": this.unique.bold(),
                            ccuMax: s,
                            ccuMin: l,
                            displayName: c,
                            streamLength: o
                        }, "BountyItemTrailerDescription")), r.createElement(W.a, {
                            channelName: n,
                            isPreview: a
                        }))
                    }, t
                }(r.Component),
                M = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.renderContentActions = function() {
                            return r.createElement(g.z, {
                                "data-test-selector": f.b.ActionActivate,
                                onClick: t.showAcceptBountyModal
                            }, Object(i.d)("Activate Bounty", "BountyTrailerItemAvailable"))
                        }, t.renderContentDescription = function() {
                            var e = t.props,
                                n = e.bounty,
                                a = e.channelName,
                                o = e.isPreview;
                            return r.createElement(j, {
                                bounty: n,
                                isPreview: o,
                                channelName: a
                            })
                        }, t.renderHeaderAmount = function() {
                            var e = t.props.bounty;
                            return r.createElement(g.Ya, {
                                display: g.X.Flex
                            }, r.createElement(g.W, {
                                fontSize: g.Ca.Size7
                            }, "$"), r.createElement(g.W, {
                                type: g.Wb.H2
                            }, e.maximumPayoutCents / 100))
                        }, t.renderContentPayout = function() {
                            var e = t.props.bounty;
                            return Object(i.d)("Max Payout: ${amount}", {
                                amount: e.maximumPayoutCents / 100
                            }, "BountyTrailerItemAvailable")
                        }, t.renderHeaderDate = function() {
                            var e = t.props.bounty,
                                n = Object(i.c)(new Date(e.campaign.endAt)) + " " + Object(i.j)(new Date(e.campaign.endAt));
                            return Object(i.d)("Available until {dateAndTime}", {
                                dateAndTime: n
                            }, "BountyTrailerItemAvailable")
                        }, t.showAcceptBountyModal = function() {
                            var e = t.props,
                                n = e.bounty,
                                a = e.channelID,
                                r = e.channelName,
                                o = e.handleBountyStatusChanged,
                                i = e.refreshData,
                                l = e.showAcceptBountyModal;
                            Object(T.b)({
                                action: T.a.ViewLegal,
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
                            i = e.isSelected,
                            l = e.isPreview;
                        return r.createElement(f.a, {
                            bounty: t,
                            channelID: n,
                            channelName: a,
                            contentPayout: this.renderContentPayout(),
                            impressionGroupID: o,
                            isSelected: i,
                            isPreview: l,
                            markdownContent: t.campaign.details,
                            renderContentActions: this.renderContentActions(),
                            renderContentDescription: this.renderContentDescription(),
                            renderHeaderAmount: this.renderHeaderAmount(),
                            renderHeaderDate: this.renderHeaderDate()
                        })
                    }, t
                }(r.Component),
                F = Object(o.compose)(Object(y.b)("BountyTrailerItemAvailable", {
                    autoReportInteractive: !0
                }))(M);
            var L = Object(A.connect)(null, function(e) {
                    return Object(o.bindActionCreators)({
                        showAcceptBountyModal: function(e) {
                            var t = a.__rest(e, []);
                            return Object(I.d)(S.a, t)
                        }
                    }, e)
                })(F),
                U = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.renderContentActions = function() {
                            return r.createElement(r.Fragment, null, r.createElement(g.Ya, {
                                margin: {
                                    right: 2
                                }
                            }, r.createElement(g.z, {
                                "data-test-selector": f.b.ActionTerms,
                                type: g.F.Text,
                                onClick: t.showTermsBountyModal
                            }, Object(i.d)("Terms", "BountyTrailerItemLive"))), r.createElement(g.z, {
                                "data-test-selector": f.b.ActionCancel,
                                type: g.F.Hollow,
                                onClick: t.showCancelBountyModal
                            }, Object(i.d)("Cancel Bounty", "BountyTrailerItemLive")))
                        }, t.renderContentDescription = function() {
                            var e = t.props,
                                n = e.bounty,
                                a = e.channelName,
                                o = e.isPreview;
                            return r.createElement(j, {
                                bounty: n,
                                channelName: a,
                                isPreview: o
                            })
                        }, t.renderHeaderAmount = function() {
                            var e = t.props.bounty;
                            return r.createElement(g.Ya, {
                                display: g.X.Flex
                            }, r.createElement(g.W, {
                                fontSize: g.Ca.Size7
                            }, "$"), r.createElement(g.W, {
                                type: g.Wb.H2
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
                            Object(T.b)({
                                action: T.a.ViewLegal,
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
                        return r.createElement(f.a, {
                            bounty: t,
                            channelID: n,
                            channelName: a,
                            contentPayout: this.renderContentPayout(),
                            impressionGroupID: o,
                            isSelected: i,
                            isPreview: !1,
                            markdownContent: t.campaign.details,
                            renderContentActions: this.renderContentActions(),
                            renderContentDescription: this.renderContentDescription(),
                            renderHeaderAmount: this.renderHeaderAmount(),
                            renderHeaderDate: this.renderHeaderDate()
                        })
                    }, t
                }(r.Component),
                Y = Object(o.compose)(Object(y.b)("BountyTrailerItemLive", {
                    autoReportInteractive: !0
                }))(U);
            var R = Object(A.connect)(null, function(e) {
                    return Object(o.bindActionCreators)({
                        showAcceptBountyModal: function(e) {
                            var t = a.__rest(e, []);
                            return Object(I.d)(S.a, t)
                        },
                        showCancelBountyModal: function(e) {
                            var t = a.__rest(e, []);
                            return Object(I.d)(O.a, t)
                        }
                    }, e)
                })(Y),
                H = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        return r.createElement(g.Ya, {
                            padding: 3
                        }, r.createElement(g.Ya, {
                            margin: {
                                bottom: 1
                            },
                            textAlign: g.Sb.Center
                        }, r.createElement(g.W, {
                            "data-test-selector": "tou-bounty-modal-header",
                            type: g.Wb.H3
                        }, Object(i.d)("Terms of Use", "TermsOfUseBountyModal"))), r.createElement(g.Fb, {
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
                        }, "Privacy Policy"), ", which are incorporated fully herein.  Where there is a conflict between the foregoing terms and these Terms, these Terms shall govern.", r.createElement("br", null), r.createElement("br", null), "The Service is provided solely (the “Permitted Use”) to: (i) as an Influencer, assist you in gathering information about the various types of Bounty opportunities and Advertisers available on the Service, including profiles, price ranges, and Bounty descriptions (each, an “Advertiser Profile”); (ii) as an Advertiser, assist you in gathering information about the various types of Bounties and Influencers available on the Platform, including profiles, price quotes, and videos of Influencers (each, an “Influencer Profile”); (iii) enable you to post information regarding yourself and to respond to any Bounty opportunities; (iv) facilitate communication between Advertisers and Influencers with the objective of entering into a Bounty Order; and (v) facilitate the transmission of payments from the Advertiser to Influencers under a Bounty Order.", r.createElement("br", null), r.createElement("br", null), r.createElement(g.W, {
                            type: g.Wb.Strong
                        }, "1.\tModifications to these Terms and Service"), r.createElement("br", null), r.createElement("br", null), "Twitch reserves the right to change these Terms at any time at our discretion. We will give you notice of the changes by posting an updated version of these Terms online, updating the “Last Modified” date above, or by emailing you at an email address you have provided. Changes to these Terms will be effective as of the date we post them or otherwise notify you of them, unless we specify a different effective date when we make a particular change. Your continued use of the Service after changes to these Terms take effect will constitute your acceptance of the changes. If you do not agree to a change, you must stop using the Service.", r.createElement("br", null), r.createElement("br", null), r.createElement(g.Ya, {
                            margin: {
                                left: 1
                            }
                        }, 'Twitch reserves the right to change any information, material or content (including, but not limited to, price, features, availability of Advertiser or Influencer, Influencer Profiles and Advertiser Profiles, types of Bounties, and reviews of Bounties and Advertisers) contained on or provided through the Service (the "Content") at any time, and from time to time, without notice.'), r.createElement("br", null), r.createElement("br", null), r.createElement(g.W, {
                            type: g.Wb.Strong
                        }, "2.\tLicense Grants"), r.createElement("br", null), "The Service is owned and operated by Twitch. Unless otherwise indicated, all content, information, and other materials on the Service are “Materials” as such term is defined in the TOS. Unless otherwise expressly stated in writing by Twitch, by agreeing to these Terms you are granted a license (i.e. a personal and limited right) to access and use the Service and Materials as set forth in Section 7 of the TOS.", r.createElement("br", null), r.createElement("br", null), "Unless otherwise agreed to in a written agreement between you and Twitch that was signed by an authorized representative of Twitch, you grant to Twitch an unrestricted, worldwide, perpetual, irrevocable, fully sub-licensable, nonexclusive, and royalty-free right to use, reproduce, modify, adapt, publish, translate, create derivative works from, distribute, perform and display (in any form, format, media or media channels now known or later developed or discovered) any data, information, records and files that (1) you provide, transmit or stream through the Service, or (2) we collect from your local computer system or from third-parties with your permission (collectively, “Bounty Board User Content”) and (in each case) including all results from processing such data, including compilations and derivative works thereof.  All Bounty Board User Content is “User Content” as such term is defined in the TOS.", r.createElement("br", null), r.createElement("br", null), r.createElement(g.W, {
                            type: g.Wb.Strong
                        }, "3.\tTerm and Termination"), r.createElement("br", null), r.createElement("br", null), "Twitch reserves the right, without notice and in our sole discretion, to terminate your license to use the Service and to block or prevent your future access to and use of the Service. Your only remedy with respect to any dissatisfaction with (i) the Service, (ii) any term of these Terms, (iii) any policy or practice of Twitch in operating the Service, or (iv) any content or information transmitted through the Service, is to terminate your account and to discontinue use of any and all parts of the Service.", r.createElement("br", null), r.createElement("br", null), "Any Bounty Order shall be subject to the cancellation and payment provisions as specified in such Bounty Order.", r.createElement("br", null), r.createElement(g.W, {
                            type: g.Wb.Strong
                        }, "4.\tInsertion Orders and Bounty Orders"), r.createElement("br", null), r.createElement("br", null), "The Service permits Advertisers to enter into Bounties pursuant to which Influencers who have registered for our Service will provide online promotional content for Advertiser’s products or services. In order to have Influencers provide such content, Advertiser must enter into an agreement with Twitch that provides for payment to Twitch in order for Twitch to engage Influencers on behalf of Advertiser for the Bounty (each, an “Insertion Order”). The Insertion Order will contain (a) a description of the services Influencers will provide for the Bounty, (b) payment to Twitch, and (c) any other terms and conditions agreed upon between Twitch and the Advertiser through this Service or otherwise.", r.createElement("br", null), r.createElement("br", null), "In order to participate in a particular Bounty, Influencer must enter into an agreement with Twitch (each, a “Bounty Order”) that contains: (a) a description of the services Influencers will provide for the Bounty, (b) payment from Twitch, and (c) any other terms and conditions as agreed upon between Influencer and the Twitch through this Service or otherwise. Influencer further understands and agrees that any content submitted through the Service shall remain publicly accessible as specified in the Bounty Order.", r.createElement("br", null), r.createElement("br", null), "Twitch does not make any representations or warranties of any kind in respect of an Advertiser or a Bounty Order.", r.createElement("br", null), r.createElement("br", null), r.createElement(g.W, {
                            type: g.Wb.Strong
                        }, "5.\tPayments"), r.createElement("br", null), r.createElement("br", null), "Advertiser will pay Twitch for each Bounty the amount set forth in the Insertion Order, under the terms set forth in the Insertion Order.", r.createElement("br", null), r.createElement("br", null), "Twitch will pay each Influencer the amount set forth in the Bounty Order, under the terms set forth in the Bounty Order. Twitch, in its sole discretion, may withhold payments to Influencer for breach of applicable law, or the Bounty Order.", r.createElement("br", null), r.createElement("br", null), r.createElement(g.W, {
                            type: g.Wb.Strong
                        }, "6.\tNo Unlawful or Prohibited Use"), r.createElement("br", null), r.createElement("br", null), "BY USING THE SERVICE, YOU AGREE NOT TO violate any law, contract, intellectual property or other third-party right or commit a tort, and that you are solely responsible for your conduct while on the Service.", r.createElement("br", null), r.createElement("br", null), "You agree that you will comply with these Terms, Twitch’s ", r.createElement("a", {
                            href: "https://www.twitch.tv/p/legal/terms-of-service/",
                            target: "_blank",
                            rel: "noopener noreferrer"
                        }, "Terms of Service"), " and ", r.createElement("a", {
                            href: "https://www.twitch.tv/p/legal/community-guidelines/",
                            target: "_blank",
                            rel: "noopener noreferrer"
                        }, "Twitch’s Community Guidelines"), ".", r.createElement("br", null), r.createElement("br", null), "Twitch takes no responsibility and assumes no liability for any Bounty Board User Content or for any loss or damage resulting therefrom, nor is Twitch liable for any mistakes, defamation, slander, libel, omissions, falsehoods, obscenity, pornography or profanity you may encounter when using the Service. Your use of the Service is at your own risk. In addition, these rules do not create any private right of action on the part of any third party or any reasonable expectation that the Service will not contain any content that is prohibited by such rules.", r.createElement("br", null), r.createElement("br", null), "Twitch is not liable for any statements or representations included in Bounty Board User Content. Twitch does not endorse any Bounty Board User Content, opinion, recommendation, or advice expressed therein, and Twitch expressly disclaims any and all liability in connection with Bounty Board User Content. Although Twitch has no obligation to screen, edit, or monitor any of the Bounty Board User Content, Twitch reserves the right, and has absolute discretion, to remove, screen or edit any Bounty Board User Content posted or stored on the Service at any time and for any reason without notice, and you are solely responsible for creating backup copies of and replacing any Bounty Board User Content you post or store on the Service at your sole cost and expense. Any use of the Service in violation of the foregoing violates these Terms and may result in, among other things, termination or suspension of your rights to use the Service.", r.createElement("br", null), r.createElement("br", null), r.createElement(g.W, {
                            type: g.Wb.Strong
                        }, "7.\tClear and Prominent Disclosure in Bounties of Material Connections Between Influencer and Advertiser"), r.createElement("br", null), r.createElement("br", null), "You are required to follow the ", r.createElement("a", {
                            href: "https://www.ftc.gov/tips-advice/business-center/guidance/ftcs-endorsement-guides-what-people-are-asking",
                            target: "_blank",
                            rel: "noopener noreferrer"
                        }, "Federal Trade Commission’s Endorsement Guides"), ". You each understand and agree that you are required to clearly and conspicuously disclose any material connection between Influencer and the Advertiser. Material connections include, but are not necessarily limited to, the Advertiser providing Influencer with something of value, such as free use of products or services. In general, disclosures should be:", r.createElement("br", null), r.createElement("br", null), r.createElement("ul", {
                            className: "tou-bounty-modal__endorsement-list"
                        }, r.createElement("li", null, "in clear and unambiguous language;"), r.createElement("li", null, "as close as possible to the native ads to which they relate;"), r.createElement("li", null, "in the same medium as the ad, for instance, in the video or in the Twitter post;"), r.createElement("li", null, "in a font and color that’s easy to read;"), r.createElement("li", null, "in a shade that stands out against the background;"), r.createElement("li", null, "for video ads, on the screen long enough to be noticed, read, and understood; and"), r.createElement("li", null, "for audio disclosures, read at a cadence that’s easy for consumers to follow and in words consumers will understand")), r.createElement("br", null), "As an Influencer or an Advertiser, it is your responsibility to understand and abide by the requirements imposed by the FTC and to ensure that a clear and conspicuous disclosure is made each and every time Influencer creates content for a Bounty. You represent and warrant that you will abide by these provisions.", r.createElement("br", null), r.createElement("br", null), "If Twitch learns of Bounties you create or initiate that do not, in our sole discretion, abide by the FTC endorsement disclosure guides, we may require you to add appropriate disclosures, and we may require you to suspend the Bounty until such disclosures are added. Repeated failure to include appropriate disclosures in your Bounties, or your failure to add disclosures upon request by Twitch, may result in termination of your account.", r.createElement("br", null), r.createElement("br", null), "You will not obscure or remove any disclosures that are added by Twitch to comply with FTC endorsement disclosure guidelines.", r.createElement("br", null), r.createElement("br", null), "You agree to indemnify, defend, and hold harmless Twitch, its affiliated companies, contractors, employees, agents and its third-party suppliers, licensors, and partners from any claims, losses, damages, liabilities, including legal fees and expenses, arising out of the failure of any Bounty to comply with the FTC Endorsement Guides."), r.createElement(g.Fb, {
                            borderTop: !0,
                            display: g.X.Flex,
                            flexDirection: g.Aa.Row,
                            alignItems: g.f.Center,
                            justifyContent: g.Xa.End,
                            padding: {
                                top: 2,
                                bottom: 1
                            },
                            flexWrap: g.Ba.Wrap
                        }, r.createElement(g.Ya, {
                            margin: {
                                left: .5,
                                right: .5
                            }
                        }, r.createElement(g.z, {
                            "data-test-selector": "tou-bounty-modal-ok-button",
                            onClick: this.props.onClose
                        }, Object(i.d)("OK", "TermsOfUseBountyModal")))))
                    }, t
                }(r.PureComponent),
                q = (n("+gf1"), function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        return r.createElement(g.Fb, {
                            className: "accept-bounty-modal__container",
                            background: g.r.Base
                        }, r.createElement(H, {
                            "data-test-selector": "tou-bounty-modal-selector",
                            onClose: this.props.closeModal
                        }))
                    }, t
                }(r.Component));
            var G = Object(A.connect)(null, function(e) {
                    return Object(o.bindActionCreators)({
                        closeModal: I.c
                    }, e)
                })(q),
                X = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.showModal = function(e) {
                            e.preventDefault(), e.stopPropagation(), t.props.trackPageAction(T.a.ViewTermsOfUse), t.props.showTOUModal()
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        return r.createElement(g.H, null, r.createElement(g.Ya, {
                            display: g.X.Flex,
                            justifyContent: g.Xa.Around,
                            padding: 1
                        }, r.createElement(g.W, null, r.createElement("a", {
                            "data-test-selector": "bounties-page-terms-of-use-selector",
                            href: "#",
                            onClick: this.showModal
                        }, Object(i.d)("Terms of Use", "TermsOfUseBountyCard")))))
                    }, t
                }(r.Component);
            var V = Object(A.connect)(null, function(e) {
                    return Object(o.bindActionCreators)({
                        showTOUModal: function() {
                            return Object(I.d)(G, {})
                        }
                    }, e)
                })(X),
                z = (n("Nzv/"), function(e) {
                    return r.createElement(g.Fb, {
                        className: "bb-page",
                        margin: {
                            bottom: 1
                        },
                        display: g.X.Flex,
                        flexDirection: g.Aa.Column,
                        flexWrap: g.Ba.NoWrap,
                        alignItems: g.f.Stretch,
                        breakpointMedium: {
                            flexDirection: g.Aa.Row
                        },
                        fullHeight: !0
                    }, r.createElement(g.Fb, {
                        className: "bb-col-wrapper bb-col-wrapper--l",
                        display: g.X.Flex,
                        flexWrap: g.Ba.NoWrap,
                        flexDirection: g.Aa.Column,
                        flexShrink: 0,
                        justifyContent: g.Xa.Between
                    }, r.createElement(g.Ya, {
                        className: "bb-col bb-col--l",
                        padding: 1
                    }, e.left), r.createElement(g.Ya, {
                        padding: 1
                    }, r.createElement(g.G, {
                        background: g.r.Base,
                        elevation: 1
                    }, r.createElement(V, {
                        trackPageAction: e.trackPageAction
                    })))), r.createElement(g.Fb, {
                        className: "bb-col-wrapper bb-col-wrapper--r",
                        display: g.X.Flex,
                        flexGrow: 1,
                        flexWrap: g.Ba.NoWrap,
                        flexDirection: g.Aa.Column,
                        breakpointMedium: {
                            display: g.X.Block
                        }
                    }, r.createElement(g.Ya, {
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
                K = (n("534W"), "bounty_board_ftue_banner"),
                $ = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.state = {
                            didDismiss: !1
                        }, n.dismissedBanners = {}, n.onDismissBanner = function() {
                            var e, t = n.dismissedBanners[n.bannerKey],
                                r = "number" == typeof t ? t + 1 : 1,
                                o = a.__assign({}, n.dismissedBanners, ((e = {})[n.bannerKey] = r, e));
                            i.m.set(K, o), n.props.trackPageAction(T.a.DismissFTUE), n.setState({
                                didDismiss: !0
                            })
                        }, n.dismissedBanners = i.m.get(K, {}), n
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        var e = this;
                        return this.currentBannerWasDismissed ? null : r.createElement(g.i, {
                            type: g.n.BounceIn,
                            duration: g.k.Medium,
                            enabled: !0,
                            timing: g.m.EaseInOut
                        }, r.createElement(g.Fb, {
                            padding: 2,
                            display: g.X.Flex,
                            alignItems: g.f.Center,
                            elevation: 1,
                            background: g.r.Base,
                            border: !0,
                            "data-test-selector": "bounty_board_ftue_banner_container_selector"
                        }, r.createElement(g.Fb, {
                            display: g.X.Flex,
                            fullWidth: !0,
                            flexWrap: g.Ba.NoWrap
                        }, r.createElement(g.Ya, {
                            flexGrow: 1,
                            margin: {
                                left: 1
                            }
                        }, r.createElement(g.W, {
                            fontSize: g.Ca.Size4,
                            bold: !0,
                            ellipsis: !0
                        }, Object(i.d)("Welcome to Bounty Board", "BountiesPageFTUEBanner")), r.createElement(g.Ya, {
                            margin: {
                                top: 2
                            }
                        }, r.createElement(g.W, null, Object(i.d)("Bounty Board allows you to browse and accept sponsored opportunities (AKA bounties) from brands. Before you activate a bounty, here are a couple important things to keep in mind:", "BountiesPageFTUEBanner")), r.createElement(g.Qa, {
                            margin: {
                                left: 1
                            }
                        }, r.createElement("ol", {
                            className: "bb-ftue__rules-list"
                        }, r.createElement("li", {
                            key: "bb_ftue_rule_1"
                        }, Object(i.d)("<x:bold>No needless bad-mouthing.</x:bold> You can share your authentic opinion of the content, even if it’s not entirely positive. However, be mindful of the difference between constructive feedback, which is welcome, and mean-spirited bashing, which is not.", {
                            "x:bold": function(e) {
                                return r.createElement(g.W, {
                                    type: g.Wb.Strong
                                }, e)
                            }
                        }, "BountiesPageFTUEBanner")), r.createElement("li", {
                            key: "bb_ftue_rule_2"
                        }, Object(i.d)("<x:bold>Use the Bounties Widget on your</x:bold> <x:link>Live Dashboard</x:link> <x:bold>to track your bounty.</x:bold> It automatically sets your Game/Category and updates your stream title to include <x:bold>#sponsored</x:bold>, both of which must be properly set and in place to consider a bounty as complete.", {
                            "x:link": function(t) {
                                return r.createElement(g.U, {
                                    to: "/" + e.props.channelName + "/dashboard/live"
                                }, t)
                            },
                            "x:bold": function(e) {
                                return r.createElement(g.W, {
                                    type: g.Wb.Strong
                                }, e)
                            }
                        }, "BountiesPageFTUEBanner")), r.createElement("li", {
                            key: "bb_ftue_rule_3"
                        }, Object(i.d)('<x:bold>We’ll use Past Broadcasts to verify bounty completion.</x:bold> Make sure to have "Store Past Broadcasts" on in your <x:link>Channel Settings</x:link>. Otherwise, you won\'t get paid.', {
                            "x:link": function(t) {
                                return r.createElement(g.U, {
                                    to: "/" + e.props.channelName + "/dashboard/settings"
                                }, t)
                            },
                            "x:bold": function(e) {
                                return r.createElement(g.W, {
                                    type: g.Wb.Strong
                                }, e)
                            }
                        }, "BountiesPageFTUEBanner")), r.createElement("li", {
                            key: "bb_ftue_rule_4"
                        }, Object(i.d)("<x:bold>We require you to disclose your bounties to viewers.</x:bold> In addition to including <x:bold>#sponsored</x:bold> in your stream title, make sure that your viewers are aware that your bounties are sponsored content.", {
                            "x:bold": function(e) {
                                return r.createElement(g.W, {
                                    type: g.Wb.Strong
                                }, e)
                            }
                        }, "BountiesPageFTUEBanner")), r.createElement("li", {
                            key: "bb_ftue_rule_5"
                        }, Object(i.d)("<x:bold>Payouts are based on concurrent viewer requirements being met.</x:bold> You’ll get a payout for hitting the minimum viewer requirements provided in the bounty. If you achieve the minimum but don't reach the average viewer goal, you’ll get a percentage of the maximum payout.", {
                            "x:bold": function(e) {
                                return r.createElement(g.W, {
                                    type: g.Wb.Strong
                                }, e)
                            }
                        }, "BountiesPageFTUEBanner")))), r.createElement(g.Qa, {
                            margin: {
                                top: 2
                            }
                        }, r.createElement(g.W, null, Object(i.d)("Please make sure you review the terms associated with your bounty for additional details.", "BountiesPageFTUEBanner"))))))), r.createElement(g.Ya, {
                            position: g.kb.Absolute,
                            attachRight: !0,
                            attachTop: !0
                        }, r.createElement(g.A, {
                            "data-test-selector": "bounty_board_ftue_dismiss_selector",
                            ariaLabel: Object(i.d)("Close", "BountiesPageFTUEBanner"),
                            type: g.C.Default,
                            size: g.B.Large,
                            icon: g.ub.Close,
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
                Q = n("GIFg"),
                Z = n("kYmV"),
                J = n("cuu2"),
                ee = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        return r.createElement(Q.a, null, r.createElement(J.a, {
                            learnMoreUrl: "https://help.twitch.tv/customer/portal/articles/2936067-bounty-board-program-information-and-faq",
                            page: Z.b.Bounties
                        }))
                    }, t
                }(r.Component),
                te = n("t241"),
                ne = "bounties-page-available-bounty-text-selector",
                ae = "bounties-page-empty-available-bounty-text-selector",
                re = "bounties-page-empty-past-available-bounty-text-selector",
                oe = "bounty_board_available_bounties_date",
                ie = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.AVAILABLE = Object(i.d)("Available", "BountiesPage"), t.COMPLETED = Object(i.d)("Completed", "BountiesPage"), t.IN_QUEUE = Object(i.d)("In Queue", "BountiesPage"), t.impressionGroupID = Object(d.b)(), t.renderBounty = function(e) {
                            var n = t.props.match.params.selectedID,
                                o = e.id === n || e.campaign.id === n && e.status === m.h.AVAILABLE,
                                i = {
                                    bounty: e,
                                    channelID: t.props.data.user.id,
                                    channelName: t.props.match.params.channelName,
                                    handleBountyStatusChanged: t.handleBountyStatusChanged,
                                    impressionGroupID: t.impressionGroupID,
                                    isSelected: o,
                                    isPreview: !1,
                                    key: e.id,
                                    refreshData: t.refreshData
                                };
                            switch (e.status) {
                                case m.h.AVAILABLE:
                                    return t.renderAvailableBounty(e.campaign.type, i);
                                case m.h.COMPLETED:
                                    return r.createElement(k, a.__assign({}, i));
                                case m.h.CANCELLED:
                                    return r.createElement(E, a.__assign({}, i));
                                case m.h.LIVE:
                                    return t.renderLiveBounty(e.campaign.type, i);
                                default:
                                    return null
                            }
                        }, t.renderAvailableBounty = function(e, t) {
                            switch (e) {
                                case m.g.MISC_TRAILER:
                                case m.g.GAME_TRAILER:
                                    return r.createElement(L, a.__assign({}, t));
                                case m.g.PAY_TO_STREAM:
                                    return r.createElement(C.a, a.__assign({}, t));
                                default:
                                    return null
                            }
                        }, t.renderLiveBounty = function(e, t) {
                            switch (e) {
                                case m.g.MISC_TRAILER:
                                case m.g.GAME_TRAILER:
                                    return r.createElement(R, a.__assign({}, t));
                                case m.g.PAY_TO_STREAM:
                                    return r.createElement(N, a.__assign({}, t));
                                default:
                                    return null
                            }
                        }, t.renderAvailabilityText = function(e) {
                            var t = new Date(i.b.get(oe, "Thu Apr 05 2063 00:00:00 GMT-0700 (PDT)")),
                                n = new Date > t,
                                a = null;
                            return 0 === e ? a = n ? r.createElement(g.W, {
                                "data-test-selector": re,
                                color: g.O.Alt2
                            }, Object(i.d)("All bounties have been claimed! Make sure to check back soon for more bounties.", "BountiesPage")) : r.createElement(g.W, {
                                "data-test-selector": ae,
                                color: g.O.Alt2
                            }, Object(i.d)("All bounties have been claimed! Make sure to check back on {availableDate} when the next round are released.", {
                                availableDate: r.createElement(g.W, {
                                    type: g.Wb.Strong
                                }, Object(i.c)(t))
                            }, "BountiesPage")) : n || (a = r.createElement(g.Ya, {
                                "data-test-selector": ne,
                                margin: {
                                    y: 2
                                }
                            }, r.createElement(g.W, {
                                color: g.O.Alt2
                            }, Object(i.d)("The next round of bounties will be released on {availableDate}.", {
                                availableDate: r.createElement(g.W, {
                                    type: g.Wb.Strong
                                }, Object(i.c)(t))
                            }, "BountiesPage")))), a
                        }, t.handleBountyStatusChanged = function(e) {
                            Object(u.e)(te, {
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
                                    case m.h.AVAILABLE:
                                        t.user.availableBounties.unshift(e);
                                        break;
                                    case m.h.LIVE:
                                        t.user.liveBounties.unshift(e);
                                        break;
                                    case m.h.COMPLETED:
                                        t.user.completedBounties.unshift(e);
                                        break;
                                    case m.h.CANCELLED:
                                    default:
                                        t.user.cancelledBounties.unshift(e)
                                }
                                return t
                            })
                        }, t.refreshData = function() {
                            t.props.data.refetch && t.props.data.refetch()
                        }, t.trackPageAction = function(e) {
                            Object(T.d)({
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
                        if (this.props.data.loading) return r.createElement(g.Ya, {
                            padding: 2,
                            fullHeight: !0
                        }, r.createElement(z, {
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
                        return r.createElement(g.Ya, {
                            overflow: g.db.Auto,
                            padding: 1,
                            fullHeight: !0,
                            display: g.X.Flex,
                            flexDirection: g.Aa.Column
                        }, r.createElement($, {
                            channelName: this.props.match.params.channelName,
                            trackPageAction: this.trackPageAction
                        }), r.createElement(z, {
                            left: this.renderLeftColumn(n, t, a),
                            right: this.renderRightColumn(o),
                            trackPageAction: this.trackPageAction
                        }), r.createElement(ee, null))
                    }, t.prototype.renderLeftColumn = function(e, t, n) {
                        var a = t.concat(n);
                        return a.sort(function(e, t) {
                            return t.lastModifiedAt ? e.lastModifiedAt ? t.lastModifiedAt.localeCompare(e.lastModifiedAt) : 1 : -1
                        }), r.createElement(g.Ya, null, this.renderTitle(this.IN_QUEUE), e.length > 0 ? this.renderBounties(e) : r.createElement(g.W, {
                            color: g.O.Alt2
                        }, Object(i.d)("You currently have no activated bounties in queue. Once activated, bounties are held in your queue for a maximum of 5 days. They will expire sooner if the broader bounty campaign is ending.", "BountiesPage")), a.length > 0 ? r.createElement(r.Fragment, null, this.renderTitle(this.COMPLETED), this.renderBounties(a)) : null)
                    }, t.prototype.renderRightColumn = function(e) {
                        return r.createElement(g.Ya, {
                            key: "right-column"
                        }, this.renderTitle(this.AVAILABLE), this.renderBounties(e), this.renderAvailabilityText(e.length))
                    }, t.prototype.renderLeftColumnPlaceholders = function() {
                        return r.createElement(g.Ya, {
                            key: "left-column-placeholders"
                        }, this.renderTitle(this.IN_QUEUE), r.createElement(g.jb, {
                            height: 85
                        }))
                    }, t.prototype.renderRightColumnPlaceholders = function() {
                        return r.createElement(g.Ya, {
                            key: "right-column-placeholders"
                        }, this.renderTitle(this.AVAILABLE), r.createElement(g.Ya, {
                            padding: {
                                bottom: 2
                            }
                        }, r.createElement(g.jb, {
                            height: 85
                        })), r.createElement(g.Ya, {
                            padding: {
                                bottom: 2
                            }
                        }, r.createElement(g.jb, {
                            height: 85
                        })), r.createElement(g.Ya, {
                            padding: {
                                bottom: 2
                            }
                        }, r.createElement(g.jb, {
                            height: 85
                        })), r.createElement(g.Ya, {
                            padding: {
                                bottom: 2
                            }
                        }, r.createElement(g.jb, {
                            height: 85
                        })))
                    }, t.prototype.renderTitle = function(e) {
                        return r.createElement(g.Ya, {
                            margin: {
                                y: 2
                            }
                        }, r.createElement(g.W, {
                            type: g.Wb.H4
                        }, e))
                    }, t.prototype.renderBounties = function(e) {
                        return e.map(this.renderBounty)
                    }, t.prototype.postRender = function() {
                        this.props.data.loading || this.props.latencyTracking.reportInteractive()
                    }, t
                }(r.Component),
                le = Object(o.compose)(Object(y.b)("BountiesPage", {
                    destination: p.a.ChannelDashboardBounties
                }), Object(c.a)({
                    location: h.PageviewLocation.DashboardBounties
                }), Object(s.a)(te, {
                    options: function(e) {
                        return {
                            fetchPolicy: "cache-and-network",
                            variables: {
                                login: e.match.params.channelName
                            }
                        }
                    }
                }))(ie);
            n.d(t, "AVAILABLE_BOUNTY_TEXT_SELECTOR", function() {
                return ne
            }), n.d(t, "EMPTY_AVAILABLE_BOUNTY_TEXT_SELECTOR", function() {
                return ae
            }), n.d(t, "EMPTY_PAST_AVAILABLE_BOUNTY_TEXT_SELECTOR", function() {
                return re
            }), n.d(t, "BOUNTY_AVAILABILITY_DATE_SETTING", function() {
                return oe
            }), n.d(t, "BountiesPage", function() {
                return le
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
                h = n("KeYu"),
                y = function(e) {
                    function t() {
                        var t, n = null !== e && e.apply(this, arguments) || this;
                        return n.state = {
                            errorCode: null
                        }, n.bountyErrorCodeToMessage = ((t = {})[m.m.BOUNTY_LIMIT_REACHED] = Object(c.d)("You have already reached your limit of active bounties. Please complete or cancel an active bounty before activating a new one.", "AcceptBountyModal"), t[m.m.BOUNTY_ALREADY_CLAIMED] = Object(c.d)("Oops, it looks like this bounty is no longer available.", "AcceptBountyModal"), t.default = Object(c.d)("Something went wrong and the bounty could not be activated.", "AcceptBountyModal"), t), n.onClose = function() {
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
                                            return a.sent(), e = m.m.UNKNOWN_ERROR, [3, 5];
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
                        return this.state.errorCode && (a = r.createElement(s.Ya, {
                            "data-test-selector": "accept-bounty-modal-error-message",
                            padding: {
                                bottom: 2
                            },
                            margin: {
                                right: .5
                            },
                            textAlign: s.Sb.Right,
                            fullWidth: !0,
                            flexShrink: 0
                        }, r.createElement(s.W, {
                            color: s.O.Error
                        }, this.getMessageFromErrorCode(this.state.errorCode)))), r.createElement(s.Ya, {
                            padding: 3
                        }, r.createElement(s.Ya, {
                            display: s.X.Flex,
                            flexDirection: s.Aa.Row,
                            flexWrap: s.Ba.NoWrap,
                            fullWidth: !0,
                            margin: {
                                bottom: 2
                            }
                        }, r.createElement(s.Ya, {
                            className: "accept-bounty-modal__boxart"
                        }, r.createElement(s.o, {
                            ratio: s.p.BoxArt
                        }, r.createElement("img", {
                            src: n
                        }))), r.createElement(s.Ya, {
                            margin: {
                                left: 2
                            }
                        }, r.createElement(s.Ya, null, r.createElement(s.W, {
                            bold: !0,
                            type: s.Wb.Span
                        }, Object(c.d)("Bounty:", "AcceptBountyModal")), " ", r.createElement(s.W, {
                            "data-test-selector": "accept-bounty-modal-title",
                            type: s.Wb.Span
                        }, Object(c.d)("{bountyTitle}{platform} with an average of {ccuMax} concurrent viewers and #sponsored in your stream title.", {
                            bountyTitle: this.props.bounty.campaign.title,
                            ccuMax: this.props.bounty.maximumPayoutCCU || 0,
                            platform: e
                        }, "AcceptBountyModal"))), r.createElement(s.Ya, null, r.createElement(s.W, {
                            bold: !0,
                            type: s.Wb.Span
                        }, Object(c.d)("Bounty Partner:", "AcceptBountyModal")), " ", r.createElement(s.W, {
                            type: s.Wb.Span
                        }, this.props.bounty.campaign.sponsor)), r.createElement(s.Ya, null, r.createElement(s.W, {
                            bold: !0,
                            type: s.Wb.Span
                        }, Object(c.d)("Influencer:", "AcceptBountyModal")), " ", r.createElement(s.W, {
                            type: s.Wb.Span
                        }, this.props.channelName, " (", Object(c.d)("Twitch ID: {id}", {
                            id: this.props.channelID
                        }, "AcceptBountyModal"), ")")), r.createElement(s.Ya, null, r.createElement(s.W, {
                            bold: !0,
                            type: s.Wb.Span
                        }, Object(c.d)("Bounty Period:", "AcceptBountyModal")), " ", r.createElement(s.W, {
                            type: s.Wb.Span
                        }, Object(p.a)(this.props.bounty.campaign.streamLengthMinutes))), r.createElement(s.Ya, null, r.createElement(s.W, {
                            bold: !0,
                            type: s.Wb.Span
                        }, Object(c.d)("Compensation:", "AcceptBountyModal")), " ", r.createElement(s.W, {
                            type: s.Wb.Span
                        }, "$", this.props.bounty.maximumPayoutCents / 100, " USD")))), r.createElement(s.Fb, {
                            className: "accept-bounty-modal__agreement-text",
                            border: !0,
                            padding: 1
                        }, r.createElement(s.Ya, {
                            textAlign: s.Sb.Center
                        }, r.createElement(s.W, {
                            type: s.Wb.Strong
                        }, "Influencer Bounty Order")), r.createElement("br", null), r.createElement(s.W, {
                            type: s.Wb.P
                        }, "This Bounty Order is governed by the (i) Influencer Terms and Conditions attached hereto as Exhibit A and (ii) Bounty Board Service Terms of Use (the “Terms of Use”), both of which are fully incorporated into this Bounty Order. All capitalized terms not defined in this Bounty Order have the respective meanings set forth in the Terms of Use."), r.createElement("br", null), r.createElement(s.W, {
                            type: s.Wb.P
                        }, "By accepting this Bounty Order, you, as the Influencer, accept and agree to be bound by and comply with the terms as set forth herein. IF YOU DO NOT ACCEPT AND AGREE TO BE BOUND BY THESE TERMS, PLEASE DO NOT ACCEPT THE BOUNTY ORDER. If you are accepting the Bounty Order on behalf of another person or a corporate entity, you represent and warrant that you have the authority to bind such person or entity to the terms of this Bounty Order."), r.createElement("br", null), r.createElement(s.Ya, null, r.createElement(s.W, {
                            type: s.Wb.Strong
                        }, "Bounty Requirements:")), r.createElement("br", null), r.createElement("ul", {
                            className: "accept-bounty-modal__bounty-requirements"
                        }, r.createElement("li", null, "Influencer is a party to a Content License Agreement (“Agreement”) with Twitch."), r.createElement("li", null, "Influencer agrees to provide the services as set forth in the Bounty. As compensation for the services, Twitch will pay Influencer in accordance with the terms set forth in the Bounty. Payments by Twitch to Influencer are based on certain concurrent user (“CCU”) requirements being met. If Influencer does not meet the CCU requirements as set forth in the Bounty, Influencer will receive a pro rata portion of the Compensation. In addition, if Influencer does not meet the Minimum Bar as defined above, then no portion of the Compensation will be payable to Influencer."), r.createElement("li", null, 'Title of the broadcast related to the Bounty will state any relationship with the Bounty Partner as instructed by Twitch: i.e. "Ad Content of X", "Paid Advertisement of X" or "#sponsored".'), r.createElement("li", null, "Influencer to save a VOD of the broadcast as a highlight to their Twitch channel."), r.createElement("li", null, "If applicable, Influencer to post on social media accounts/tweet at the start of the broadcast to raise awareness for the Bounty. These posts/tweets and any subsequent posts in connection with the Bounty must contain “#sponsored”."), r.createElement("li", null, "Influencer shall not commit any act or make any statement that disparages Twitch, Bounty Partner, or their respective products/services, or brings Twitch or the Bounty Partner disrepute, contempt, scandal, or ridicule for the Bounty Period and six (6) months thereafter.  Twitch may immediately take down, or request the take down of, any Influencer content that violates this section and Influencer shall cooperate with Twitch to execute such takedowns."), r.createElement("li", null, "If Influencer fails to comply with any of the above Bounty requirements, Twitch may at its discretion immediately terminate this Bounty Order and disqualify the influencer from participating in future Bounties.")), r.createElement("br", null), r.createElement(s.Ya, {
                            textAlign: s.Sb.Center
                        }, r.createElement(s.W, {
                            type: s.Wb.Strong
                        }, "Exhibit A")), r.createElement(s.Ya, {
                            textAlign: s.Sb.Center
                        }, r.createElement(s.W, {
                            type: s.Wb.Strong
                        }, "Influencer Terms and Conditions")), r.createElement("br", null), r.createElement(s.W, {
                            type: s.Wb.P
                        }, "This Exhibit A is made a part of the Bounty Order to which it is attached, and the Agreement to which the Influencer is a party."), r.createElement("br", null), r.createElement(s.W, {
                            type: s.Wb.P
                        }, "1.\t", r.createElement(s.W, {
                            type: s.Wb.Strong
                        }, "Licenses and Release.")), r.createElement("br", null), r.createElement(s.W, {
                            type: s.Wb.P
                        }, "1.1.\t", r.createElement(s.W, {
                            type: s.Wb.Strong,
                            decoration: s.Ub.Underline
                        }, "Influencer Trademark and Copyright License."), " Influencer hereby grants Twitch and the Bounty Partner of each particular accepted Bounty Order a royalty-free, non-exclusive, non-transferable, non-sublicensable, revocable, worldwide license to use and display any trademark, service mark, trade dress, trade name, or logo (“Marks”) and reproduce, distribute, publicly display or perform, or make derivative works of any copyrighted materials (“Materials”) belonging to Influencer and specified for use by Influencer for use in connection with the particular accepted Bounty Order. Without limiting the foregoing, all use by Twitch or the Bounty Partner of the Influencer’s Marks shall be in accordance with Influencer’s usage guidelines that have been delivered or made available to Twitch prior to the date of such use. Influencer may provide in writing an updated version of its usage guidelines and Twitch shall make commercially reasonable efforts to alter, modify or change any Influencer’s Marks being used by Twitch or Bounty Partner in accordance with such request as soon as reasonably practical.  Any such use of Influencer’s Marks will inure solely to Influencer’s benefit.  Nothing contained herein or in the Agreement gives Twitch or Bounty Partner any right, title or interest in the Influencer’s Marks or goodwill therein and thereto, or in any Materials, except as expressly provided in this Section.  For avoidance of doubt, nothing in this Section shall be construed to limit any rights with respect to Influencer’s Marks or Materials that Twitch or Bounty Partner would have as a member of the general public."), r.createElement("br", null), r.createElement(s.W, {
                            type: s.Wb.P
                        }, "1.2.\t", r.createElement(s.W, {
                            type: s.Wb.Strong,
                            decoration: s.Ub.Underline
                        }, "Influencer Release."), " Influencer agrees that Twitch or Bounty Partner of an accepted Bounty Order may use Influencer’s name, voice, signature, likeness, identity, persona or any biographical material concerning Influencer in promotion, advertising, sale, publicizing and exploitation, including ancillary products (e.g., merchandise) in connection with the Bounty and Bounty Partner’s products and services, throughout the world in all media, and in perpetuity.  Influencer agrees that Twitch or Bounty Partner of an accepted Bounty Order may record Influencer’s voice, conversation and sounds, including any performance of any musical composition(s), during and in connection with Influencer’s participation in the Bounty, and that Twitch or Bounty Partner shall have the right, throughout the world, an unlimited number of times in perpetuity, royalty-free, to use and to license others to use, in any manner, all or any portion thereof or of a reproduction thereof in connection with the Bounty.  Influencer waives any right of inspection or approval with respect to any materials created or used by Twitch or Bounty Partner of an accepted Bounty Order and expressly waives any moral rights in connection with its participation in any Bounty."), r.createElement("br", null), r.createElement(s.W, {
                            type: s.Wb.P
                        }, "1.3.\t", r.createElement(s.W, {
                            type: s.Wb.Strong,
                            decoration: s.Ub.Underline
                        }, "License from Bounty Partner."), " Bounty Partner of an accepted Bounty Order may provide licenses to its content, trademarks and other property for Influencer’s use in connection with the Bounty, either directly or through Twitch.  Influencer shall comply with all requirements, guidelines and restrictions with respect to such licenses."), r.createElement("br", null), r.createElement(s.W, {
                            type: s.Wb.P
                        }, "2.\t", r.createElement(s.W, {
                            type: s.Wb.Strong
                        }, "Compliance with Laws."), " Influencer will comply with all applicable laws, rules, regulations and guidelines, including but not limited to the FTC’s Guidelines Concerning the Use of Testimonials and Endorsements in Advertising and all other advertising, marketing, and sweepstakes, contests and promotions laws."), r.createElement("br", null), r.createElement(s.W, {
                            type: s.Wb.P
                        }, "Without limiting the foregoing, Influencer will include in all Influencer Channels for a Bounty all title headers, overlays and other audio or visual disclosures that Twitch requires of Influencer.  Influencer will comply with Twitch’s instructions regarding the format, placement and duration of such disclosures."), r.createElement("br", null), r.createElement(s.W, {
                            type: s.Wb.P
                        }, "Influencer agrees and acknowledges that Twitch may edit or take down the Influencer Channel at any time in order to ensure compliance with applicable laws, rules, regulations and guidelines."), r.createElement("br", null), r.createElement(s.W, {
                            type: s.Wb.P
                        }, "3.\t", r.createElement(s.W, {
                            type: s.Wb.Strong
                        }, "Influencer Representations and Warranties."), " Influencer represents and warrants that: (i) it has the requisite power and authority to enter into the Bounty Order and to perform fully its obligations hereunder; (ii) it is not and will not be under any contractual or other legal obligation which will in any way interfere with its full, prompt and complete performance under any  Bounty Order; (iii) it conducts and will conduct its affairs in compliance with all applicable international, federal, state, and local laws, rules and regulations, including but not limited to the representations and warranties; (iv) it is not a member of a union, guild or other labor organization and is not a party to any collective bargaining or similar agreement, and understands that Twitch is not a member of any union, guild or other labor organization, and the Bountys are not subject to any collective bargaining agreement; and (v) all other representations and warranties made by Influencer in the Agreement will continue to apply."), r.createElement("br", null), r.createElement(s.W, {
                            type: s.Wb.P
                        }, "4.\t", r.createElement(s.W, {
                            type: s.Wb.Strong
                        }, "Bounty Partner Confidential Information."), " Twitch or Bounty Partner may disclose to Influencer certain Confidential Information of Bounty Partner or its associated companies, suppliers, or customers.  Influencer agrees to treat such information as Confidential Information under the Agreement."), r.createElement("br", null), r.createElement(s.W, {
                            type: s.Wb.P
                        }, "5.\t", r.createElement(s.W, {
                            type: s.Wb.Strong
                        }, "Influencer Indemnification Obligations."), " Influencer hereby agrees to defend, indemnify and hold harmless Twitch and/or the Bounty Partner of any accepted Bounty Order, and their directors, officers, employees and affiliated entities, against any and all claims, actions, losses, judgments, settlements, damages, costs, and expenses, including reasonable attorneys’ fees (collectively, “Losses”) arising out of or based on any claim by a third party related to, involving or concerning a breach by Influencer of its representations, warranties or obligations under an accepted Bounty Order."), r.createElement("br", null), r.createElement(s.W, {
                            type: s.Wb.P
                        }, "6.\t", r.createElement(s.W, {
                            type: s.Wb.Strong
                        }, "Term and Termination.")), r.createElement("br", null), r.createElement(s.W, {
                            type: s.Wb.P
                        }, "6.1.\t", r.createElement(s.W, {
                            type: s.Wb.Strong,
                            decoration: s.Ub.Underline
                        }, "Termination for Convenience or Breach."), " Twitch may terminate any particular Bounty Order at any time in its sole discretion or at the request of a Bounty Partner for convenience, or for breach of any requirements set forth in the Bounty Orders by the Influencer.  In the event that Twitch terminates any Bounty Order for breach, Twitch nor its Bounty Partner(s) are obliged to make any payments to the Influencer in connection with the breached Bounty Orders."), r.createElement("br", null), r.createElement(s.W, {
                            type: s.Wb.P
                        }, "6.2.\t", r.createElement(s.W, {
                            type: s.Wb.Strong,
                            decoration: s.Ub.Underline
                        }, "Obligations Upon Termination."), " Influencer must return, delete, destroy or take down any materials or content in accordance with instructions from Twitch or the applicable Bounty Partner upon termination or expiration of any particular Bounty Orders."), r.createElement("br", null), r.createElement(s.W, {
                            type: s.Wb.P
                        }, "7.\t", r.createElement(s.W, {
                            type: s.Wb.Strong
                        }, "Payment."), " Payment terms shall be net sixty (60) days following the end of the Bounty Period and shall be payable in accordance with the Terms of Use."), r.createElement("br", null), r.createElement(s.W, {
                            type: s.Wb.P
                        }, "8.\t", r.createElement(s.W, {
                            type: s.Wb.Strong
                        }, "Miscellaneous.")), r.createElement("br", null), r.createElement(s.W, {
                            type: s.Wb.P
                        }, "8.1.\t", r.createElement(s.W, {
                            type: s.Wb.Strong,
                            decoration: s.Ub.Underline
                        }, "Third Party Beneficiaries."), " The Bounty Partner of any accepted Bounty Order shall be a third party beneficiary with respect to that accepted Bounty Order."), r.createElement("br", null), r.createElement(s.W, {
                            type: s.Wb.P
                        }, "8.2.\t", r.createElement(s.W, {
                            type: s.Wb.Strong,
                            decoration: s.Ub.Underline
                        }, "Other Terms."), " These Influencer Terms and Conditions and all Bounty Orders are governed by and subject to the Agreement.  Capitalized terms used but not defined in these Influencer Terms and Conditions will have the meanings defined in the Agreement.  Except as amended by these Influencer Terms and Conditions, all other terms and conditions of the Agreement remain in full force and effect.")), r.createElement(s.Fb, {
                            borderTop: !0,
                            display: s.X.Flex,
                            flexDirection: s.Aa.Row,
                            alignItems: s.f.Center,
                            justifyContent: s.Xa.End,
                            padding: {
                                top: 2
                            },
                            flexWrap: s.Ba.Wrap
                        }, a, this.props.bounty.status === m.h.AVAILABLE ? r.createElement(r.Fragment, null, r.createElement(s.Ya, {
                            margin: {
                                left: .5,
                                right: .5
                            }
                        }, r.createElement(s.z, {
                            "data-test-selector": "accept-bounty-modal-cancel-button",
                            type: s.F.Hollow,
                            onClick: this.onClose
                        }, Object(c.d)("Cancel", "AcceptBountyModal"))), r.createElement(s.Ya, {
                            margin: {
                                left: .5,
                                right: .5
                            }
                        }, r.createElement(s.z, {
                            "data-test-selector": "accept-bounty-modal-accept-button",
                            onClick: this.onAccept,
                            disabled: !!this.state.errorCode
                        }, Object(c.d)("Accept & Activate", "AcceptBountyModal")))) : r.createElement(s.Ya, {
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
                b = Object(u.a)(h, {
                    name: "claimBounty"
                })(y),
                f = (n("B/yC"), function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        return r.createElement(s.Fb, {
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
        pK0l: function(e, t, n) {
            "use strict";
            var a = n("mrSG"),
                r = n("q1tI"),
                o = n("/7QA"),
                i = n("VWz+"),
                l = n("hLBu"),
                s = n("TKuN"),
                c = n("Ue10"),
                u = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.unique = new s.a("game-description"), t
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        var e = this.props,
                            t = e.bounty,
                            n = e.channelName,
                            a = e.isPreview,
                            s = t.campaign.game && t.campaign.game.displayName || "",
                            u = Object(l.a)(t.campaign.streamLengthMinutes),
                            d = a ? "XX" : t.minimumPayoutCCU || 0,
                            m = a ? "XXXX" : t.maximumPayoutCCU || 0;
                        return this.unique.reset(), r.createElement(r.Fragment, null, r.createElement(c.Ya, {
                            fullWidth: !0,
                            margin: {
                                bottom: 1
                            }
                        }, r.createElement(c.W, null, Object(o.d)("<x:bold>Game key included with bounty activation.</x:bold> Keys are emailed within 72 hours of bounty activation.", {
                            "x:bold": this.unique.bold()
                        }, "BountyItemGameDescription"))), r.createElement(c.W, {
                            type: c.Wb.P,
                            key: this.unique.key()
                        }, Object(o.d)("At any point during a stream session, stream <x:bold>{displayName}</x:bold> for <x:bold>{streamLength} straight</x:bold> with an average of <x:bold>{ccuMax} concurrent viewers</x:bold>. If you don’t hit an average of at least <x:bold>{ccuMin} concurrents</x:bold>, you will not receive a payout. If you achieve the minimum but do not reach the goal, you will get a <x:bold>proportional percentage</x:bold> of the payout.", {
                            "x:bold": this.unique.bold(),
                            ccuMax: m,
                            ccuMin: d,
                            displayName: s,
                            streamLength: u
                        }, "BountyItemGameDescription")), r.createElement(i.a, {
                            channelName: n,
                            isPreview: a
                        }))
                    }, t
                }(r.Component);
            n.d(t, "a", function() {
                return u
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