(window.webpackJsonp = window.webpackJsonp || []).push([
    [113], {
        "/s/o": function(e, n, i) {
            "use strict";
            i.r(n);
            var a = i("/MKj"),
                t = i("kRBY"),
                r = i("mrSG"),
                s = i("q1tI"),
                d = i("oJmH"),
                o = i("/7QA"),
                l = i("ZS2+"),
                m = i("yR8l"),
                c = i("eDVu"),
                u = i("0Log"),
                p = i("/aPz"),
                v = i("Rfsd"),
                g = i("VJHF"),
                k = i("KnFV"),
                h = i("GnwI"),
                f = i("Ue10"),
                N = i("kaYI"),
                F = (i("1ggj"), "esports-insider-pass-trial-displayed"),
                S = s.createElement(f.Va, {
                    fullHeight: !0,
                    fullWidth: !0,
                    textAlign: f.Jb.Center,
                    padding: {
                        y: 4
                    },
                    margin: {
                        y: 4
                    }
                }, s.createElement(f.Xa, {
                    fillContent: !0
                })),
                b = l.a.wrap(function() {
                    return Promise.all([i.e(0), i.e(112)]).then(i.bind(null, "rgIk"))
                }, "HGCTabs", {
                    failSilently: !1,
                    placeholder: S
                }),
                y = l.a.wrap(function() {
                    return Promise.all([i.e(0), i.e(111)]).then(i.bind(null, "R3ld"))
                }, "OWLTabs", {
                    failSilently: !1,
                    placeholder: S
                }),
                C = l.a.wrap(function() {
                    return Promise.all([i.e(0), i.e(110)]).then(i.bind(null, "AesC"))
                }, "HGGTabs", {
                    failSilently: !1,
                    placeholder: S
                }),
                D = function(e) {
                    function n(n) {
                        var i = e.call(this, n) || this;
                        return i.state = {
                            tabToShow: k.a.Progress
                        }, i.state.tabToShow = k.a.Progress, o.l.remove(F), i
                    }
                    return r.__extends(n, e), n.prototype.render = function() {
                        if (!this.props.data || this.props.data.loading) return S;
                        if (this.props.data.error) return s.createElement(v.a, {
                            channelLogin: this.props.channelLogin,
                            channelID: this.props.channelID
                        });
                        var e = this.props.data.user.campaignProperties,
                            n = this.props.data.currentUser && this.props.data.currentUser.blizzardAccount,
                            i = !(!this.props.data.user.self || !this.props.data.user.self.subscriptionBenefit) || !1,
                            a = !(!this.props.data.currentUser || !this.props.data.currentUser.hasPrime),
                            t = e.domains && e.domains[0] || "";
                        return t === g.c ? s.createElement(b, {
                            campaignProperties: e,
                            channelID: this.props.channelID,
                            channelLogin: this.props.channelLogin,
                            currentUserID: this.props.currentUserID,
                            isLive: this.props.isLive,
                            user: this.props.user,
                            showInsiderChannel: this.props.showInsiderChannel,
                            domain: t,
                            blizzardAccount: n,
                            hasInsiderPass: i,
                            hasPrime: a,
                            onChannelChange: this.props.onChannelChange,
                            onOpenBlizzardConnect: this.props.onOpenBlizzardConnect
                        }) : t === g.d || t === g.e ? s.createElement(C, {
                            campaignProperties: e,
                            channelID: this.props.channelID,
                            channelLogin: this.props.channelLogin,
                            currentUserID: this.props.currentUserID,
                            isLive: this.props.isLive,
                            user: this.props.user,
                            showInsiderChannel: this.props.showInsiderChannel,
                            domain: t,
                            blizzardAccount: n,
                            hasInsiderPass: i,
                            hasPrime: a,
                            onChannelChange: this.props.onChannelChange,
                            onOpenBlizzardConnect: this.props.onOpenBlizzardConnect
                        }) : s.createElement(y, {
                            campaignProperties: e,
                            channelID: this.props.channelID,
                            channelLogin: this.props.channelLogin,
                            currentUserID: this.props.currentUserID,
                            isLive: this.props.isLive,
                            showInsiderChannel: this.props.showInsiderChannel,
                            subscriptionProducts: this.props.data.user.subscriptionProducts,
                            tournamentID: t,
                            blizzardAccount: n,
                            hasInsiderPass: i,
                            hasPrime: a,
                            onChannelChange: this.props.onChannelChange,
                            onOpenBlizzardConnect: this.props.onOpenBlizzardConnect
                        })
                    }, n
                }(s.Component),
                I = Object(d.compose)(Object(m.a)(N, {
                    options: function(e) {
                        return {
                            variables: {
                                channelID: e.channelID
                            }
                        }
                    }
                }), Object(h.c)("CampaignsTabs", {
                    autoReportInteractive: !0
                }), Object(c.a)(function(e) {
                    return {
                        topic: e.user && e.data && e.data.user && e.data.user.campaignProperties ? Object(p.C)(e.user.id) : "",
                        query: N,
                        variables: {
                            channelID: e.channelID
                        },
                        skip: !e.data || !e.data.user || !e.data.user.campaignProperties,
                        type: u.PubsubMessageType.UserCampaignProgressEvent,
                        mutator: function(n, i) {
                            if (i && i.user && i.user.campaignProperties) {
                                for (var a = 0, t = i.user.campaignProperties.objectives; a < t.length; a++) {
                                    var r = t[a];
                                    r.id === n.data.objectiveID && (r.progress = n.data.progress, r.participation = n.data.progress)
                                }
                                return e && e.data && e.data.refetch && e.data.refetch(), i
                            }
                        }
                    }
                }), Object(c.a)(function(e) {
                    return {
                        topic: e.user && e.data && e.data.user && e.data.user.campaignProperties ? Object(p.m)(e.data.user.campaignProperties.domains[0]) : "",
                        query: N,
                        variables: {
                            channelID: e.channelID
                        },
                        skip: !e.data || !e.data.user || !e.data.user.campaignProperties,
                        type: u.PubsubMessageType.UserCampaignProgressEvent,
                        mutator: function(e, n) {
                            if (n && n.user && n.user.campaignProperties) {
                                for (var i = 0, a = n.user.campaignProperties.objectives; i < a.length; i++) {
                                    var t = a[i];
                                    t.id === e.data.objectiveID && (t.progress = e.data.progress)
                                }
                                return n
                            }
                        }
                    }
                }))(D);
            var P = Object(a.connect)(function(e) {
                return {
                    user: Object(t.e)(e)
                }
            })(I);
            i.d(n, "CampaignsTabs", function() {
                return P
            })
        },
        "1ggj": function(e, n, i) {},
        "8Ver": function(e, n, i) {
            var a = {
                kind: "Document",
                definitions: [{
                    kind: "FragmentDefinition",
                    name: {
                        kind: "Name",
                        value: "milestone"
                    },
                    typeCondition: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "Milestone"
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
                                value: "startDate"
                            },
                            arguments: [],
                            directives: []
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "endDate"
                            },
                            arguments: [],
                            directives: []
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "threshold"
                            },
                            arguments: [],
                            directives: []
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "participationThreshold"
                            },
                            arguments: [],
                            directives: []
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "objectiveTag"
                            },
                            arguments: [],
                            directives: []
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "rewards"
                            },
                            arguments: [],
                            directives: [],
                            selectionSet: {
                                kind: "SelectionSet",
                                selections: [{
                                    kind: "FragmentSpread",
                                    name: {
                                        kind: "Name",
                                        value: "reward"
                                    },
                                    directives: []
                                }]
                            }
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 180
                }
            };
            a.loc.source = {
                body: '#import "twilight/features/campaigns/models/reward.gql"\nfragment milestone on Milestone {\nid\nstartDate\nendDate\nthreshold\nparticipationThreshold\nobjectiveTag\nrewards {\n...reward\n}\n}',
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            var t = {};
            a.definitions = a.definitions.concat(function(e) {
                return e.filter(function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var n = e.name.value;
                    return !t[n] && (t[n] = !0, !0)
                })
            }(i("VK0B").definitions)), e.exports = a
        },
        FXik: function(e, n, i) {},
        KiCN: function(e, n, i) {
            var a = {
                kind: "Document",
                definitions: [{
                    kind: "FragmentDefinition",
                    name: {
                        kind: "Name",
                        value: "trigger"
                    },
                    typeCondition: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "CampaignTrigger"
                        }
                    },
                    directives: [],
                    selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "description"
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
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "isActive"
                            },
                            arguments: [],
                            directives: []
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "rewards"
                            },
                            arguments: [],
                            directives: [],
                            selectionSet: {
                                kind: "SelectionSet",
                                selections: [{
                                    kind: "FragmentSpread",
                                    name: {
                                        kind: "Name",
                                        value: "reward"
                                    },
                                    directives: []
                                }]
                            }
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
                                value: "triggerAmountMax"
                            },
                            arguments: [],
                            directives: []
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "triggerAmountMin"
                            },
                            arguments: [],
                            directives: []
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "triggerType"
                            },
                            arguments: [],
                            directives: []
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 193
                }
            };
            a.loc.source = {
                body: '#import "twilight/features/campaigns/models/reward.gql"\nfragment trigger on CampaignTrigger {\ndescription\nid\nisActive\nrewards {\n...reward\n}\ntitle\ntriggerAmountMax\ntriggerAmountMin\ntriggerType\n}',
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            var t = {};
            a.definitions = a.definitions.concat(function(e) {
                return e.filter(function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var n = e.name.value;
                    return !t[n] && (t[n] = !0, !0)
                })
            }(i("VK0B").definitions)), e.exports = a
        },
        KnFV: function(e, n, i) {
            "use strict";
            var a;
            i.d(n, "a", function() {
                    return a
                }),
                function(e) {
                    e.Progress = "progress", e.Rewards = "rewards", e.Info = "info", e.InsiderPass = "insider-pass"
                }(a || (a = {}))
        },
        Rfsd: function(e, n, i) {
            "use strict";
            var a = i("mrSG"),
                t = i("q1tI"),
                r = i("0bws"),
                s = i("EuHz"),
                d = i("Ue10"),
                o = (i("FXik"), function(e) {
                    function n() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(n, e), n.prototype.render = function() {
                        return t.createElement(d.Va, {
                            className: "esports-info-tab"
                        }, t.createElement(r.a, null), t.createElement(d.Va, {
                            display: d.W.Flex,
                            flexDirection: d.Y.ColumnReverse,
                            breakpointMedium: {
                                flexDirection: d.Y.Row
                            },
                            flexWrap: d.Z.NoWrap,
                            margin: {
                                x: "auto"
                            },
                            padding: {
                                y: 3
                            },
                            flexShrink: 1
                        }, t.createElement(d.Va, {
                            className: "esports-info-tab__panel-container",
                            flexGrow: 1,
                            flexShrink: 1
                        }, t.createElement(s.ChannelPanels, {
                            channelName: this.props.channelLogin,
                            channelID: this.props.channelID
                        }))))
                    }, n
                }(t.Component));
            i.d(n, "a", function() {
                return o
            })
        },
        VK0B: function(e, n) {
            var i = {
                kind: "Document",
                definitions: [{
                    kind: "FragmentDefinition",
                    name: {
                        kind: "Name",
                        value: "reward"
                    },
                    typeCondition: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "TournamentReward"
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
                                value: "name"
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
                                value: "imageURL"
                            },
                            arguments: [],
                            directives: []
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "description"
                            },
                            arguments: [],
                            directives: []
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "canBeFulfilled"
                            },
                            arguments: [],
                            directives: []
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "canBeFulfilledQuantity"
                            },
                            arguments: [],
                            directives: []
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "isEntitled"
                            },
                            arguments: [],
                            directives: []
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "entitledQuantity"
                            },
                            arguments: [],
                            directives: []
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "isPrimeOnly"
                            },
                            arguments: [],
                            directives: []
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "quantity"
                            },
                            arguments: [],
                            directives: []
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "rarity"
                            },
                            arguments: [],
                            directives: []
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "metadata"
                            },
                            arguments: [],
                            directives: [],
                            selectionSet: {
                                kind: "SelectionSet",
                                selections: [{
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "subType"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "isPending"
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
                    end: 198
                }
            };
            i.loc.source = {
                body: "fragment reward on TournamentReward {\nid\nname\ntype\nimageURL\ndescription\ncanBeFulfilled\ncanBeFulfilledQuantity\nisEntitled\nentitledQuantity\nisPrimeOnly\nquantity\nrarity\nmetadata {\nsubType\nisPending\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = i
        },
        WzG8: function(e, n, i) {
            var a = {
                kind: "Document",
                definitions: [{
                    kind: "FragmentDefinition",
                    name: {
                        kind: "Name",
                        value: "objective"
                    },
                    typeCondition: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "CampaignObjective"
                        }
                    },
                    directives: [],
                    selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "cheergroup"
                            },
                            arguments: [],
                            directives: [],
                            selectionSet: {
                                kind: "SelectionSet",
                                selections: [{
                                    kind: "FragmentSpread",
                                    name: {
                                        kind: "Name",
                                        value: "cheergroup"
                                    },
                                    directives: []
                                }]
                            }
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "description"
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
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "milestones"
                            },
                            arguments: [],
                            directives: [],
                            selectionSet: {
                                kind: "SelectionSet",
                                selections: [{
                                    kind: "FragmentSpread",
                                    name: {
                                        kind: "Name",
                                        value: "milestone"
                                    },
                                    directives: []
                                }]
                            }
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "participation"
                            },
                            arguments: [],
                            directives: []
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "progress"
                            },
                            arguments: [],
                            directives: []
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "tag"
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
                                value: "isActive"
                            },
                            arguments: [],
                            directives: []
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 276
                }
            };
            a.loc.source = {
                body: '#import "twilight/features/campaigns/models/milestone.gql"\n#import "twilight/features/campaigns/models/cheergroup.gql"\nfragment objective on CampaignObjective {\ncheergroup {\n...cheergroup\n}\ndescription\nid\nmilestones {\n...milestone\n}\nparticipation\nprogress\ntag\ntitle\nisActive\n}',
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            var t = {};

            function r(e) {
                return e.filter(function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var n = e.name.value;
                    return !t[n] && (t[n] = !0, !0)
                })
            }
            a.definitions = a.definitions.concat(r(i("8Ver").definitions)), a.definitions = a.definitions.concat(r(i("mI2A").definitions)), e.exports = a
        },
        kaYI: function(e, n, i) {
            var a = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "CampaignQuery"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "channelID"
                            }
                        },
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "ID"
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
                                    value: "id"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "channelID"
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
                                        value: "subscriptionProducts"
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
                                                value: "url"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "price"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "emotes"
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
                                            name: {
                                                kind: "Name",
                                                value: "self"
                                            },
                                            arguments: [],
                                            directives: [],
                                            selectionSet: {
                                                kind: "SelectionSet",
                                                selections: [{
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "promotion"
                                                    },
                                                    arguments: [],
                                                    directives: [],
                                                    selectionSet: {
                                                        kind: "SelectionSet",
                                                        selections: [{
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "newPrice"
                                                            },
                                                            arguments: [],
                                                            directives: []
                                                        }, {
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "oldPrice"
                                                            },
                                                            arguments: [],
                                                            directives: []
                                                        }, {
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "discountType"
                                                            },
                                                            arguments: [],
                                                            directives: []
                                                        }, {
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "discountValue"
                                                            },
                                                            arguments: [],
                                                            directives: []
                                                        }]
                                                    }
                                                }]
                                            }
                                        }]
                                    }
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "campaignProperties"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "domains"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "activeCampaigns"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "hasPass"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "objectives"
                                            },
                                            arguments: [],
                                            directives: [],
                                            selectionSet: {
                                                kind: "SelectionSet",
                                                selections: [{
                                                    kind: "FragmentSpread",
                                                    name: {
                                                        kind: "Name",
                                                        value: "objective"
                                                    },
                                                    directives: []
                                                }]
                                            }
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "triggers"
                                            },
                                            arguments: [],
                                            directives: [],
                                            selectionSet: {
                                                kind: "SelectionSet",
                                                selections: [{
                                                    kind: "FragmentSpread",
                                                    name: {
                                                        kind: "Name",
                                                        value: "trigger"
                                                    },
                                                    directives: []
                                                }]
                                            }
                                        }]
                                    }
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "self"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "subscriptionBenefit"
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
                                            name: {
                                                kind: "Name",
                                                value: "isModerator"
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
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "hasPrime"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "blizzardAccount"
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
                                                value: "battleTag"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "region"
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
                    end: 527
                }
            };
            a.loc.source = {
                body: '#import "twilight/features/campaigns/models/objective.gql"\n#import "twilight/features/campaigns/models/trigger.gql"\nquery CampaignQuery($channelID: ID!) {\nuser(id: $channelID) {\nid\nsubscriptionProducts {\nid\nurl\nprice\nemotes {\nid\n}\nself {\npromotion {\nnewPrice\noldPrice\ndiscountType\ndiscountValue\n}\n}\n}\ncampaignProperties {\ndomains\nactiveCampaigns\nhasPass\nobjectives {\n...objective\n}\ntriggers {\n...trigger\n}\n}\nself {\nsubscriptionBenefit {\nid\n}\nisModerator\n}\n}\ncurrentUser {\nid\nhasPrime\nblizzardAccount {\nid\nbattleTag\nregion\n}\n}\n}',
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            var t = {};

            function r(e) {
                return e.filter(function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var n = e.name.value;
                    return !t[n] && (t[n] = !0, !0)
                })
            }
            a.definitions = a.definitions.concat(r(i("WzG8").definitions)), a.definitions = a.definitions.concat(r(i("KiCN").definitions)), e.exports = a
        },
        mI2A: function(e, n) {
            var i = {
                kind: "Document",
                definitions: [{
                    kind: "FragmentDefinition",
                    name: {
                        kind: "Name",
                        value: "cheergroup"
                    },
                    typeCondition: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "CampaignCheergroup"
                        }
                    },
                    directives: [],
                    selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "name"
                            },
                            arguments: [],
                            directives: []
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "imageUrl"
                            },
                            arguments: [],
                            directives: []
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "cheerCodes"
                            },
                            arguments: [],
                            directives: []
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "division"
                            },
                            arguments: [],
                            directives: []
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 79
                }
            };
            i.loc.source = {
                body: "fragment cheergroup on CampaignCheergroup {\nname\nimageUrl\ncheerCodes\ndivision\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = i
        }
    }
]);