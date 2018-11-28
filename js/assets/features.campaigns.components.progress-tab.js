(window.webpackJsonp = window.webpackJsonp || []).push([
    [121], {
        "+8bU": function(e, t, a) {},
        "+z1J": function(e, t, a) {
            "use strict";
            var n, i, r;
            a.d(t, "a", function() {
                    return n
                }), a.d(t, "b", function() {
                    return i
                }), a.d(t, "c", function() {
                    return r
                }),
                function(e) {
                    e.Blizzard = "blizzard", e.Twitch = "twitch", e.Insider = "insider"
                }(n || (n = {})),
                function(e) {
                    e.Hero = "hero", e.Team = "team", e.Insider = "insider", e.Cheerbomb = "cheerbomb"
                }(i || (i = {})),
                function(e) {
                    e.HeroSkin = "hero-skin", e.InGameContent = "in-game-content", e.SubEmote = "emote", e.Badge = "badge", e.Bits = "bits"
                }(r || (r = {}))
        },
        "/2zc": function(e, t, a) {},
        "/5u6": function(e, t, a) {
            "use strict";
            var n;
            a.d(t, "a", function() {
                    return n
                }),
                function(e) {
                    e.Individual = "INDIVIDUAL", e.Team = "TEAM", e.Global = "GLOBAL", e.Insider = "INSIDER"
                }(n || (n = {}))
        },
        "12i0": function(e, t, a) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "CampaignsTeamLeaderboard"
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
                                        value: "tournament"
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
                                                value: "teamLeaderboard"
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
                                                    kind: "FragmentSpread",
                                                    name: {
                                                        kind: "Name",
                                                        value: "leaderboardItem"
                                                    },
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
                    end: 214
                }
            };
            n.loc.source = {
                body: '#import "twilight/features/bits/models/bits-leaderboard-item-fragment.gql"\nquery CampaignsTeamLeaderboard($channelID: ID!) {\nuser(id: $channelID) {\nid\ntournament {\nid\nteamLeaderboard {\nid\n...leaderboardItem\n}\n}\n}\n}',
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            var i = {};
            n.definitions = n.definitions.concat(function(e) {
                return e.filter(function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var t = e.name.value;
                    return !i[t] && (i[t] = !0, !0)
                })
            }(a("fhkr").definitions)), e.exports = n
        },
        "3hlQ": function(e, t, a) {},
        "44In": function(e, t, a) {},
        "7QWs": function(e, t) {
            var a = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "mutation",
                    name: {
                        kind: "Name",
                        value: "ClaimAllRewards"
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
                                    value: "ClaimAllRewardsInput"
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
                                value: "claimAllRewards"
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
                                        value: "domain"
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
                                                value: "description"
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
                                                value: "isEntitled"
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
                                        }]
                                    }
                                }]
                            }
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 164
                }
            };
            a.loc.source = {
                body: "mutation ClaimAllRewards($input: ClaimAllRewardsInput!) {\nclaimAllRewards(input: $input) {\ndomain\nrewards {\nid\nname\ndescription\ntype\nisEntitled\ncanBeFulfilled\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = a
        },
        "7TMk": function(e, t, a) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "InsiderPassTabRewards"
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
                                        value: "tournament"
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
                                                value: "rewards"
                                            },
                                            arguments: [],
                                            directives: [],
                                            selectionSet: {
                                                kind: "SelectionSet",
                                                selections: [{
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "insider"
                                                    },
                                                    arguments: [],
                                                    directives: [],
                                                    selectionSet: {
                                                        kind: "SelectionSet",
                                                        selections: [{
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "heroSkins"
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
                                                                value: "inGameContent"
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
                    end: 226
                }
            };
            n.loc.source = {
                body: '#import "twilight/features/campaigns/models/reward.gql"\nquery InsiderPassTabRewards($channelID: ID!) {\nuser(id: $channelID) {\nid\ntournament {\nid\nrewards {\ninsider {\nheroSkins {\n...reward\n}\ninGameContent {\n...reward\n}\n}\n}\n}\n}\n}',
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            var i = {};
            n.definitions = n.definitions.concat(function(e) {
                return e.filter(function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var t = e.name.value;
                    return !i[t] && (i[t] = !0, !0)
                })
            }(a("VK0B").definitions)), e.exports = n
        },
        "81Gi": function(e, t, a) {
            "use strict";
            var n = a("q1tI"),
                i = (a("bt+X"), function() {
                    return n.createElement("svg", {
                        className: "esports-participation-threshold-incomplete",
                        viewBox: "0 0 24 24"
                    }, n.createElement("defs", null, n.createElement("circle", {
                        id: "path-participation-threshold-incomplete-circle",
                        cx: "12",
                        cy: "12",
                        r: "12"
                    })), n.createElement("g", {
                        id: "Symbols",
                        stroke: "none",
                        strokeWidth: "1",
                        fill: "none",
                        fillRule: "evenodd"
                    }, n.createElement("g", {
                        id: "bits/bit-checkpoint-alt",
                        transform: "translate(-4.000000, -4.000000)"
                    }, n.createElement("g", {
                        id: "Group",
                        transform: "translate(4.000000, 4.000000)"
                    }, n.createElement("g", {
                        id: "Oval-Copy-6"
                    }, n.createElement("use", {
                        fill: "#FFFFFF",
                        fillRule: "evenodd",
                        xlinkHref: "#path-participation-threshold-incomplete-circle"
                    }), n.createElement("circle", {
                        stroke: "#CCBEE6",
                        strokeWidth: "2",
                        cx: "12",
                        cy: "12",
                        r: "11"
                    })), n.createElement("g", {
                        id: "Bits/glyph-outline-sm",
                        opacity: "0.400000006",
                        transform: "translate(7.000000, 6.000000)",
                        fill: "#6E4AAD",
                        stroke: "#6E4AAD",
                        strokeWidth: "0.5"
                    }, n.createElement("path", {
                        d: "M4.99965672,12 C4.9239113,12 4.84816588,11.977818 4.78016715,11.9353025 L0.211341127,9.03130897 C0.112355634,8.96938422 0.0409139311,8.86679247 0.0133701419,8.74756422 C-0.0150343907,8.62833596 0.00218047755,8.50171371 0.0615717729,8.39634921 L4.6303978,0.209342627 C4.78619236,-0.0697808757 5.21312109,-0.0697808757 5.36891565,0.209342627 L9.93860242,8.39634921 C9.99713297,8.50171371 10.0152086,8.62833596 9.98680405,8.74756422 C9.95839952,8.86679247 9.88695782,8.96938422 9.78883307,9.03130897 L5.21828555,11.9353025 C5.15114757,11.977818 5.07540214,12 4.99965672,12 Z M1.78824571,7.10038909 L4.99965672,1.34617014 L8.2119993,7.10081295 L5.19823023,4.92563446 C5.07342244,4.85631571 4.92537457,4.85631571 4.80142752,4.92563446 L1.78824571,7.10038909 Z M8.76932756,8.60565931 L4.99965672,11.0008857 L1.23048631,8.60545901 L4.9993985,5.85635422 L8.76932756,8.60565931 Z",
                        id: "Icon-Copy"
                    }))))))
                });
            a.d(t, "a", function() {
                return i
            })
        },
        "8Ver": function(e, t, a) {
            var n = {
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
            n.loc.source = {
                body: '#import "twilight/features/campaigns/models/reward.gql"\nfragment milestone on Milestone {\nid\nstartDate\nendDate\nthreshold\nparticipationThreshold\nobjectiveTag\nrewards {\n...reward\n}\n}',
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            var i = {};
            n.definitions = n.definitions.concat(function(e) {
                return e.filter(function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var t = e.name.value;
                    return !i[t] && (i[t] = !0, !0)
                })
            }(a("VK0B").definitions)), e.exports = n
        },
        EYeq: function(e, t, a) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "CampaignsGetTeamRewards"
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
                                        value: "tournament"
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
                                                value: "rewards"
                                            },
                                            arguments: [],
                                            directives: [],
                                            selectionSet: {
                                                kind: "SelectionSet",
                                                selections: [{
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "team"
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
                                        }]
                                    }
                                }]
                            }
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 183
                }
            };
            n.loc.source = {
                body: '#import "twilight/features/campaigns/models/reward.gql"\nquery CampaignsGetTeamRewards($channelID: ID!) {\nuser(id: $channelID) {\nid\ntournament {\nid\nrewards {\nteam {\n...reward\n}\n}\n}\n}\n}',
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            var i = {};
            n.definitions = n.definitions.concat(function(e) {
                return e.filter(function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var t = e.name.value;
                    return !i[t] && (i[t] = !0, !0)
                })
            }(a("VK0B").definitions)), e.exports = n
        },
        F30f: function(e, t, a) {},
        G30c: function(e, t, a) {
            "use strict";
            var n = a("mrSG"),
                i = a("q1tI"),
                r = a("oJmH"),
                s = a("/7QA"),
                o = a("yR8l"),
                l = a("eDVu"),
                d = a("+LJB"),
                c = a("i4ay"),
                m = a("Ue10"),
                p = a("12i0"),
                u = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return n.__extends(t, e), t.prototype.render = function() {
                        var e = this.props.data,
                            t = e.user && e.user.tournament && e.user.tournament.teamLeaderboard;
                        return e.loading && !t ? i.createElement(m.ab, {
                            fillContent: !0
                        }) : !t || e.error ? i.createElement(m.Ya, {
                            fullHeight: !0,
                            fullWidth: !0,
                            textAlign: m.Sb.Center,
                            padding: {
                                top: 4
                            }
                        }, i.createElement(m.tb, {
                            asset: m.ub.DeadGlitch,
                            fill: !0,
                            width: 50,
                            height: 50
                        })) : i.createElement(m.Fb, {
                            display: m.X.Flex,
                            flexDirection: m.Aa.Column,
                            fullHeight: !0,
                            padding: {
                                top: 3,
                                left: 3,
                                right: 3,
                                bottom: 0
                            },
                            borderRadius: m.x.Large,
                            background: m.r.Base,
                            border: !0
                        }, i.createElement(m.Ya, {
                            padding: {
                                bottom: 2
                            }
                        }, i.createElement(m.W, {
                            type: m.Wb.H3
                        }, Object(s.d)("Team Leaderboards", "CampaignsProgressTab"))), i.createElement(c.a, {
                            leaderboardRows: t.items.edges,
                            pageSize: 10,
                            channelID: this.props.channelID,
                            isTeam: !0,
                            domain: this.props.domain,
                            hideLocale: this.props.hideLocale
                        }))
                    }, t
                }(i.Component),
                g = Object(r.compose)(Object(o.a)(p, {
                    options: function(e) {
                        return {
                            variables: {
                                channelID: e.channelID
                            }
                        }
                    }
                }), Object(l.a)(function(e) {
                    return Object(d.a)(p, e.channelID, e.data.user && e.data.user.tournament && e.data.user.tournament.teamLeaderboard)
                }))(u);
            a.d(t, !1, function() {
                return u
            }), a.d(t, "a", function() {
                return g
            })
        },
        JPbf: function(e, t, a) {},
        KUJM: function(e, t, a) {},
        KnFV: function(e, t, a) {
            "use strict";
            var n;
            a.d(t, "a", function() {
                    return n
                }),
                function(e) {
                    e.Progress = "progress", e.Rewards = "rewards", e.Info = "info", e.InsiderPass = "insider-pass"
                }(n || (n = {}))
        },
        NcrI: function(e, t) {
            var a = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "CampaignsLeaderboardData"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "userIDs"
                            }
                        },
                        type: {
                            kind: "ListType",
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
                        }
                    }, {
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "isTeam"
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
                                value: "users"
                            },
                            arguments: [{
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "ids"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "userIDs"
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
                                                    value: "isTeam"
                                                }
                                            }
                                        }]
                                    }]
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "profileImageURL"
                                    },
                                    arguments: [{
                                        kind: "Argument",
                                        name: {
                                            kind: "Name",
                                            value: "width"
                                        },
                                        value: {
                                            kind: "IntValue",
                                            value: "50"
                                        }
                                    }],
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
                                                    value: "isTeam"
                                                }
                                            }
                                        }]
                                    }]
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "tournament"
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
                                                    value: "isTeam"
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
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "teams"
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
                                                        value: "name"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "logoURL"
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
                                        }]
                                    }
                                }]
                            }
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 250
                }
            };
            a.loc.source = {
                body: "query CampaignsLeaderboardData($userIDs: [ID!] $isTeam: Boolean!) {\nusers (ids: $userIDs) {\nid\ndisplayName @skip(if: $isTeam)\nprofileImageURL(width: 50) @skip(if: $isTeam)\ntournament @include(if: $isTeam) {\nid\nteams {\nid\nname\nlogoURL\ndivision\n}\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = a
        },
        ODAr: function(e, t, a) {},
        PvlP: function(e, t, a) {},
        UOrd: function(e, t) {
            var a = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "mutation",
                    name: {
                        kind: "Name",
                        value: "ClaimMilestone"
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
                                    value: "ClaimMilestoneInput"
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
                                value: "claimMilestone"
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
                                        value: "milestoneID"
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
                                                value: "description"
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
                                                value: "isEntitled"
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
                                        }]
                                    }
                                }]
                            }
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 166
                }
            };
            a.loc.source = {
                body: "mutation ClaimMilestone($input: ClaimMilestoneInput!) {\nclaimMilestone(input: $input) {\nmilestoneID\nrewards {\nid\nname\ndescription\ntype\nisEntitled\ncanBeFulfilled\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = a
        },
        VK0B: function(e, t) {
            var a = {
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
            a.loc.source = {
                body: "fragment reward on TournamentReward {\nid\nname\ntype\nimageURL\ndescription\ncanBeFulfilled\ncanBeFulfilledQuantity\nisEntitled\nentitledQuantity\nisPrimeOnly\nquantity\nrarity\nmetadata {\nsubType\nisPending\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = a
        },
        WaLP: function(e, t, a) {
            "use strict";
            var n = a("/MKj"),
                i = a("kRBY"),
                r = a("mrSG"),
                s = a("q1tI"),
                o = a("oJmH"),
                l = a("/7QA"),
                d = a("yR8l"),
                c = a("eDVu"),
                m = a("+LJB"),
                p = a("i4ay"),
                u = a("Ue10"),
                g = a("ktVs"),
                h = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        return !this.props.data || this.props.data.loading && !this.props.data.user ? s.createElement(u.ab, {
                            fillContent: !0
                        }) : this.props.data && this.props.data.error ? s.createElement(u.Ya, {
                            fullHeight: !0,
                            fullWidth: !0,
                            textAlign: u.Sb.Center,
                            padding: {
                                top: 4
                            }
                        }, s.createElement(u.tb, {
                            asset: u.ub.DeadGlitch,
                            fill: !0,
                            width: 50,
                            height: 50
                        })) : s.createElement(u.Fb, {
                            display: u.X.Flex,
                            flexDirection: u.Aa.Column,
                            fullHeight: !0,
                            padding: {
                                top: 3,
                                left: 3,
                                right: 3,
                                bottom: 0
                            },
                            borderRadius: u.x.Large,
                            background: u.r.Base,
                            border: !0
                        }, s.createElement(u.Ya, {
                            padding: {
                                bottom: 2
                            }
                        }, s.createElement(u.W, {
                            type: u.Wb.H3
                        }, Object(l.d)("Individual Leaderboards", "CampaignsProgressTab"))), s.createElement(p.a, {
                            leaderboardRows: this.props.data.user.tournament.globalLeaderboard.items.edges,
                            pageSize: 10,
                            channelID: this.props.channelID,
                            isTeam: !1,
                            userRow: this.props.data.user.tournament.self && this.props.data.user.tournament.self.globalLeaderboardItem
                        }))
                    }, t
                }(s.Component),
                f = Object(o.compose)(Object(d.a)(g, {
                    options: function(e) {
                        return {
                            variables: {
                                channelID: e.channelID
                            }
                        }
                    }
                }), Object(c.a)(function(e) {
                    return Object(m.a)(g, e.channelID, e.data.user && e.data.user.tournament && e.data.user.tournament.globalLeaderboard, e.user && e.user.id)
                }))(h);
            var b = Object(n.connect)(function(e) {
                return {
                    user: Object(i.e)(e)
                }
            })(f);
            a.d(t, "a", function() {
                return b
            })
        },
        WlPE: function(e, t, a) {
            "use strict";
            var n, i, r = a("mrSG"),
                s = a("TSYQ"),
                o = a("q1tI"),
                l = a("f00E"),
                d = a("Ue10");
            a("F30f");
            ! function(e) {
                e.Default = "default", e.Medium = "medium", e.Large = "large"
            }(n || (n = {})),
            function(e) {
                e.Default = "default", e.Brand = "brand"
            }(i || (i = {}));
            var c = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    var e = "esports-square__mask--locked-" + Object(l.a)(),
                        t = "esports-square__mask--locked-" + Object(l.a)(),
                        a = void 0,
                        r = void 0;
                    this.props.locked ? (a = "esports-square__mask--locked", r = "url(#" + e + ")") : void 0 === this.props.hasInsiderPass || this.props.hasInsiderPass || (a = "esports-square__mask--locked", r = "url(#" + t + ")");
                    var c = s({
                            "esports-square--border": !this.props.noBorder
                        }, {
                            "esports-square--border__brand": this.props.borderType === i.Brand
                        }, {
                            "esports-square--border__none": this.props.noBorder
                        }, {
                            "esports-square--large": this.props.size === n.Large
                        }, {
                            "esports-square--medium": this.props.size === n.Medium
                        }, {
                            "esports-square--default": this.props.size === n.Default
                        }, {
                            "esports-square": !0
                        }),
                        m = s({
                            "esports-square__image--large": this.props.size === n.Large
                        }, {
                            "esports-square__image--medium": this.props.size === n.Medium
                        }, {
                            "esports-square__image--default": this.props.size === n.Default
                        }, {
                            "esports-square__image": !0
                        }),
                        p = s({
                            "esports-square__svg--large": this.props.size === n.Large
                        }, {
                            "esports-square__svg--medium": this.props.size === n.Medium
                        }, {
                            "esports-square__svg": !0
                        });
                    return o.createElement(d.Fb, {
                        "data-test-selector": a,
                        className: c,
                        textAlign: d.Sb.Center,
                        position: d.kb.Relative,
                        borderRadius: d.x.Large,
                        overflow: d.db.Hidden,
                        background: d.r.Base,
                        display: d.X.InlineBlock
                    }, o.createElement("img", {
                        className: m,
                        src: this.props.imageURL,
                        alt: "",
                        style: {
                            filter: r
                        }
                    }), o.createElement("svg", {
                        className: p,
                        width: "60px",
                        height: "60px",
                        viewBox: "0 0 60 60"
                    }, o.createElement("defs", null, o.createElement("filter", {
                        id: e
                    }, o.createElement("feColorMatrix", {
                        type: "matrix",
                        values: "0.3 0 0 0 0 0 0.3 0 0 0 0 0 0.3 0 0 0 0 0 0.3 0"
                    })), o.createElement("filter", {
                        id: t
                    }, o.createElement("feColorMatrix", {
                        type: "matrix",
                        values: "0.12 0 0 0 0 0 0.04 0 0 0 0 0 0.68 0 0 0 0 0 1 0"
                    }))), o.createElement("g", {
                        id: "Reward-hex-med",
                        stroke: "none",
                        strokeWidth: "1",
                        fill: "none",
                        fillRule: "evenodd",
                        transform: "translate(-30.000000, -7.000000)"
                    }, o.createElement("g", {
                        id: "Rectangle-14"
                    }, void 0 !== this.props.hasInsiderPass && !this.props.hasInsiderPass && o.createElement("path", {
                        className: "esports-hexagon__svg--lock",
                        transform: "translate(50, 28)",
                        fill: "#fff",
                        d: "M7.987 6.599C7.987 5.166 8.685 4 9.997 4c1.311 0 2.009 1.166 2.009 2.599v2.412H7.987V6.599zm7.256 2.412h-1.248V6.599C13.995 4.063 12.411 2 9.997 2S5.998 4.063 5.998 6.599v2.412H4.751c-.415 0-.751.359-.751.8v7.397c0 .442.336.8.751.8h10.492c.414 0 .751-.358.751-.8V9.811c0-.441-.337-.8-.751-.8z",
                        fillRule: "evenodd"
                    })))))
                }, t
            }(o.PureComponent);
            a.d(t, !1, function() {
                return "esports-square__mask--locked"
            }), a.d(t, !1, function() {
                return "esports-square__mask--locked"
            }), a.d(t, !1, function() {
                return "esports-square__pattern"
            }), a.d(t, "c", function() {
                return n
            }), a.d(t, "b", function() {
                return i
            }), a.d(t, "a", function() {
                return c
            })
        },
        Y6wA: function(e, t, a) {
            "use strict";
            a.r(t);
            var n = a("/MKj"),
                i = a("kRBY"),
                r = a("mrSG"),
                s = a("TSYQ"),
                o = a("q1tI"),
                l = a("oJmH"),
                d = a("/7QA"),
                c = a("yR8l"),
                m = a("eDVu"),
                p = a("0Log"),
                u = a("/aPz"),
                g = a("5zXJ"),
                h = a("fvjX"),
                f = a("1/iK"),
                b = a("y5D0"),
                k = a("qyxT"),
                v = a("VJHF"),
                y = a("/5u6"),
                E = a("RVih"),
                w = a("Ue10"),
                C = a("knLa"),
                S = (a("3hlQ"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            dismissedFtue: d.m.get(v.b, !1)
                        }, t.generateRandomNumberOfEmotes = function(e, a) {
                            if (!t.props.data || t.props.data && t.props.data.loading) return [];
                            if (!t.props.data.user || t.props.data.error || !t.props.data.user.tournament || !t.props.data.user.tournament.rewards) return [];
                            var n = [];
                            if (t.props.data.user.tournament) switch (e) {
                                case y.a.Individual:
                                    n = t.props.data.user.tournament.rewards.individual;
                                    break;
                                default:
                                    n = []
                            }
                            return (n = n.filter(function(e) {
                                return "emote" === e.type
                            })).length < 1 ? [] : Object(k.a)(n.slice()).slice(0, a).map(function(e, t) {
                                return o.createElement(w.Qa, {
                                    key: t,
                                    className: "esports-ftue__emote-image-container",
                                    margin: t > 0 ? {
                                        left: .5,
                                        bottom: 1
                                    } : {
                                        bottom: 1
                                    }
                                }, o.createElement(w.S, {
                                    alt: e.name,
                                    className: "esports-ftue__emote-image",
                                    src: e.imageURL
                                }))
                            })
                        }, t.closeFtue = function() {
                            d.m.set(v.b, !0), t.setState({
                                dismissedFtue: !0
                            })
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        if (this.state.dismissedFtue) return null;
                        var e = o.createElement(w.Ja, {
                                gutterSize: w.Ka.None
                            }, o.createElement(w.P, {
                                cols: {
                                    default: 6
                                }
                            }, o.createElement(w.Ya, {
                                display: w.X.Flex,
                                alignItems: w.f.Center,
                                justifyContent: w.Xa.Center,
                                padding: {
                                    top: 1,
                                    left: 1
                                },
                                breakpointExtraSmall: {
                                    padding: {
                                        y: 1,
                                        left: 1
                                    }
                                },
                                breakpointSmall: {
                                    padding: {
                                        top: 1,
                                        bottom: 0,
                                        left: 1
                                    }
                                },
                                breakpointMedium: {
                                    padding: {
                                        top: 1
                                    }
                                },
                                breakpointExtraLarge: {
                                    padding: {
                                        y: 2
                                    }
                                },
                                fullHeight: !0,
                                fullWidth: !0
                            }, o.createElement(w.S, {
                                className: "esports-ftue__skin-collection esports-ftue__skin-collection--global",
                                src: g.c + "/owl-2017/marketing/global-collection.png",
                                alt: Object(d.d)("Tracer, Junkrat, Widowmaker, and Hanzo Skins", "CampaignsFirstTimeExperience")
                            }))), o.createElement(w.P, {
                                cols: {
                                    default: 6
                                }
                            }, o.createElement(w.Ya, {
                                margin: {
                                    y: 2,
                                    left: 1,
                                    right: 2
                                },
                                breakpointSmall: {
                                    margin: {
                                        y: 2,
                                        left: 3,
                                        right: 2
                                    }
                                },
                                breakpointMedium: {
                                    margin: {
                                        y: 3,
                                        left: 3,
                                        right: 2
                                    }
                                }
                            }, o.createElement(w.Qa, {
                                padding: {
                                    bottom: 1
                                }
                            }, o.createElement(w.W, {
                                fontSize: w.Ca.Size5,
                                breakpointSmall: {
                                    fontSize: w.Ca.Size4
                                },
                                bold: !0,
                                color: w.O.Link
                            }, Object(d.d)("Complete the Collection", "CampaignsFirstTimeExperience"))), o.createElement(w.Qa, {
                                padding: {
                                    bottom: 1
                                }
                            }, o.createElement(w.W, {
                                fontSize: w.Ca.Size6
                            }, Object(d.d)("Hype your team by Cheering 300 Bits and immediately unlock four Overwatch Hero skins to use right away.", "CampaignsFirstTimeExperience"))), o.createElement(w.Ya, {
                                display: w.X.Flex,
                                flexDirection: w.Aa.Row
                            }, this.props.user ? o.createElement(w.z, {
                                onClick: this.openBitsCard,
                                "data-test-selector": "logged-in-ftue"
                            }, Object(d.d)("Cheer now", "CampaignsFirstTimeExperience")) : o.createElement(w.Ya, {
                                "data-test-selector": "logged-out-ftue"
                            }, o.createElement(E.a, {
                                login: this.props.login,
                                signup: this.props.signup
                            })), o.createElement(w.Qa, {
                                alignSelf: w.g.Center,
                                padding: {
                                    left: 2
                                }
                            }, o.createElement(w.U, {
                                to: "http://link.twitch.tv/owl-drops-onsite-bitscard-blogus",
                                targetBlank: !0,
                                hoverUnderlineNone: !1
                            }, o.createElement(w.W, {
                                fontSize: w.Ca.Size6
                            }, Object(d.d)("Learn More", "CampaignsFirstTimeExperience")))))))),
                            t = this.generateRandomNumberOfEmotes(y.a.Individual, 4),
                            a = o.createElement(w.Fb, {
                                display: w.X.Flex,
                                flexDirection: w.Aa.Row,
                                background: w.r.Accent,
                                fullHeight: !0,
                                fullWidth: !0
                            }, o.createElement(w.Ja, {
                                gutterSize: w.Ka.None
                            }, o.createElement(w.P, {
                                cols: {
                                    default: 6,
                                    xl: 5
                                }
                            }, o.createElement(w.Ya, {
                                display: w.X.Flex,
                                alignItems: w.f.Center,
                                justifyContent: w.Xa.Center,
                                padding: {
                                    top: 1,
                                    left: 1
                                },
                                breakpointExtraSmall: {
                                    padding: {
                                        y: 1,
                                        left: 1
                                    }
                                },
                                breakpointSmall: {
                                    padding: {
                                        top: 1,
                                        bottom: 0,
                                        left: 1
                                    }
                                },
                                breakpointMedium: {
                                    padding: {
                                        top: 1
                                    }
                                },
                                breakpointExtraLarge: {
                                    padding: {
                                        y: 2
                                    }
                                },
                                fullHeight: !0,
                                fullWidth: !0
                            }, o.createElement(w.S, {
                                className: "esports-ftue__skin-collection esports-ftue__skin-collection--individual",
                                src: g.c + "/owl-2017/marketing/individual-collection.png",
                                alt: Object(d.d)("Mercy and Genji Skins", "CampaignsFirstTimeExperience")
                            }))), o.createElement(w.P, {
                                cols: {
                                    default: 6,
                                    xl: 7
                                }
                            }, o.createElement(w.Ya, {
                                margin: {
                                    y: 2,
                                    left: 1,
                                    right: 2
                                },
                                breakpointSmall: {
                                    margin: {
                                        y: 2,
                                        left: 3,
                                        right: 2
                                    }
                                },
                                breakpointMedium: {
                                    margin: {
                                        y: 3,
                                        left: 3,
                                        right: 2
                                    }
                                },
                                breakpointExtraLarge: {
                                    margin: {
                                        y: 3,
                                        left: 0,
                                        right: 2
                                    }
                                }
                            }, o.createElement(w.Ya, null, t), o.createElement(w.Qa, {
                                padding: {
                                    bottom: 1
                                }
                            }, o.createElement(w.W, {
                                fontSize: w.Ca.Size5,
                                breakpointSmall: {
                                    fontSize: w.Ca.Size4
                                },
                                bold: !0,
                                color: w.O.Overlay
                            }, Object(d.d)("Even more skins!", "CampaignsFirstTimeExperience"))), o.createElement(w.Qa, {
                                padding: {
                                    bottom: 1
                                }
                            }, o.createElement(w.W, {
                                fontSize: w.Ca.Size6,
                                color: w.O.Overlay
                            }, Object(d.d)("Keep Cheering and you'll unlock a Mercy skin when you unlock 13 emotes and a Genji skin when you collect all 26!", "CampaignsFirstTimeExperience"))))))),
                            n = Object(d.d)("Close", "CampaignsFirstTimeExperience");
                        return o.createElement(w.Fb, {
                            className: "esports-ftue " + s(this.props.className),
                            border: !0,
                            background: w.r.Base,
                            borderRadius: w.x.Large,
                            position: w.kb.Relative,
                            overflow: w.db.Hidden
                        }, o.createElement(w.Ya, {
                            className: "esports-ftue__close",
                            position: w.kb.Absolute,
                            display: w.X.Flex,
                            breakpointExtraLarge: {
                                display: w.X.Hide
                            }
                        }, o.createElement(w.A, {
                            "data-test-selector": "dismiss-ftue-selector",
                            icon: w.ub.Close,
                            ariaLabel: n,
                            onClick: this.closeFtue
                        })), o.createElement(w.Ya, {
                            className: "esports-ftue__close",
                            position: w.kb.Absolute,
                            display: w.X.Hide,
                            breakpointExtraLarge: {
                                display: w.X.Flex
                            }
                        }, o.createElement(w.A, {
                            icon: w.ub.Close,
                            ariaLabel: n,
                            onClick: this.closeFtue,
                            overlay: !0
                        })), o.createElement(w.Ja, {
                            gutterSize: w.Ka.None
                        }, o.createElement(w.P, {
                            cols: {
                                default: 12,
                                xl: 7
                            }
                        }, o.createElement(w.Ya, {
                            display: w.X.Flex,
                            alignItems: w.f.Center,
                            fullHeight: !0,
                            position: w.kb.Relative,
                            breakpointExtraLarge: {
                                padding: {
                                    right: 2
                                }
                            },
                            className: "esports-ftue__left-content"
                        }, e)), o.createElement(w.P, {
                            cols: {
                                default: 12,
                                xl: 5
                            }
                        }, o.createElement(w.Ya, {
                            display: w.X.Flex,
                            alignItems: w.f.Center,
                            fullHeight: !0
                        }, a))))
                    }, t.prototype.openBitsCard = function() {
                        var e = document.querySelector('[data-a-target="bits-button"]');
                        e && e.click()
                    }, t = r.__decorate([Object(c.a)(C, {
                        options: function(e) {
                            return {
                                variables: {
                                    channelID: e.channelID
                                }
                            }
                        }
                    })], t)
                }(o.Component));
            var N = Object(n.connect)(function(e) {
                    return {
                        user: Object(i.e)(e)
                    }
                }, function(e) {
                    return Object(h.bindActionCreators)({
                        login: function() {
                            return Object(b.e)(f.a.TopNavSignupButton)
                        },
                        signup: function() {
                            return Object(b.g)(f.a.TopNavSignupButton)
                        }
                    }, e)
                })(S),
                x = a("G30c"),
                _ = a("WaLP"),
                T = a("jAjM"),
                R = a("huSm"),
                F = a("f00E"),
                P = (a("44In"), 100),
                I = 13,
                O = 9,
                D = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            animatablePercent: 0
                        }, t.canvasMidpoint = P / 2, t.meterRadius = t.canvasMidpoint - I / 2, t.troughRadius = t.canvasMidpoint - O / 2, t.meterLength = Math.PI * t.meterRadius * 2, t.maskRadius = t.canvasMidpoint / 2, t.maskLength = Math.PI * t.maskRadius * 2, t.clampPercent = function(e) {
                            return Math.min(Math.max(e, 0), 1)
                        }, t.getLowestFactor = function(e) {
                            for (var t = 2; e % t > 0 && t <= e;) t++;
                            return t
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.componentDidMount = function() {
                        var e = this;
                        window.requestAnimationFrame(function() {
                            e.setState({
                                animatablePercent: e.props.percentComplete
                            })
                        })
                    }, t.prototype.componentWillReceiveProps = function(e) {
                        e.percentComplete !== this.state.animatablePercent && this.setState({
                            animatablePercent: e.percentComplete
                        })
                    }, t.prototype.render = function() {
                        var e = "progress-circle__main-mask-" + Object(F.a)(),
                            t = "progress-circle__secondary-mask-" + Object(F.a)(),
                            a = 3 * this.maskLength / 360,
                            n = this.maskLength / this.props.segments - a,
                            i = n + " " + a,
                            r = this.getLowestFactor(this.props.segments),
                            s = n * r + a * (r - 1) + " " + a;
                        return o.createElement("svg", {
                            className: "progress-circle",
                            viewBox: "0 0 " + P + " " + P
                        }, o.createElement("defs", null, o.createElement("mask", {
                            id: e
                        }, o.createElement("circle", {
                            cx: this.canvasMidpoint,
                            cy: this.canvasMidpoint,
                            r: this.maskRadius,
                            stroke: "#fff",
                            fill: "none",
                            strokeDasharray: i,
                            strokeDashoffset: a / -2,
                            strokeWidth: 2 * this.maskRadius
                        })), o.createElement("mask", {
                            id: t
                        }, o.createElement("circle", {
                            cx: this.canvasMidpoint,
                            cy: this.canvasMidpoint,
                            r: this.maskRadius,
                            stroke: "#fff",
                            fill: "none",
                            strokeDasharray: s,
                            strokeDashoffset: a / -2,
                            strokeWidth: 2 * this.maskRadius
                        }))), o.createElement("circle", {
                            className: "progress-circle__trough",
                            cx: this.canvasMidpoint,
                            cy: this.canvasMidpoint,
                            r: this.troughRadius,
                            strokeWidth: O,
                            mask: "url(#" + e + ")"
                        }), o.createElement("circle", {
                            className: "progress-circle__meter",
                            cx: this.canvasMidpoint,
                            cy: this.canvasMidpoint,
                            r: this.meterRadius,
                            mask: "url(#" + e + ")",
                            strokeWidth: I,
                            strokeDasharray: this.meterLength,
                            strokeDashoffset: this.meterLength - this.meterLength * this.clampPercent(this.state.animatablePercent)
                        }), o.createElement("circle", {
                            className: "progress-circle__meter progress-circle__meter--inner",
                            cx: this.canvasMidpoint,
                            cy: this.canvasMidpoint,
                            r: this.meterRadius - 10,
                            mask: "url(#" + t + ")",
                            strokeWidth: 1
                        }), o.createElement("text", {
                            className: "progress-circle__text",
                            x: this.canvasMidpoint,
                            y: this.canvasMidpoint,
                            dy: ".4em",
                            fontSize: "14",
                            textAnchor: "middle"
                        }, Object(d.f)(this.clampPercent(this.props.percentComplete), "percent")))
                    }, t
                }(o.Component),
                L = a("+z1J"),
                A = a("fFIB"),
                j = (a("+8bU"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.getRect = function() {
                            return t.ref ? t.ref.getBoundingClientRect() : null
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        var e = this;
                        if (this.props.data && this.props.data.loading) return o.createElement(w.ab, {
                            fillContent: !0
                        });
                        var t;
                        if (this.props.data && (!this.props.data.loading && this.props.data.error || !this.props.data.user || !this.props.data.user.tournament)) return o.createElement(w.Ya, {
                            className: "esports-individual-progress__error",
                            position: w.kb.Relative,
                            textAlign: w.Sb.Center
                        }, o.createElement(w.tb, {
                            height: 50,
                            width: 50,
                            asset: w.ub.DeadGlitch
                        }));
                        var a = [],
                            n = [],
                            i = 0,
                            r = 0;
                        this.props.data && this.props.data.user && this.props.data.user.tournament && this.props.data.user.tournament.self && this.props.data.user.tournament.rewards && (a = this.props.data.user.tournament.rewards.individual.filter(function(e) {
                            return "emote" === e.type
                        }), n = this.props.data.user.tournament.self.progress.milestones.filter(function(e) {
                            return e.id.includes("individual") && e.rewards.every(function(e) {
                                return "igc" === e.type
                            })
                        }), i = a.length, r = a.filter(function(e) {
                            return e.isEntitled
                        }).length);
                        var s = this.props.data && this.props.data.user && this.props.data.user.tournament && this.props.data.user.tournament.self ? this.props.data.user.tournament.self.progress.amount : 0,
                            l = Math.min(s / 2600, 1),
                            c = n.map(function(t) {
                                var a = t.rewards[0];
                                return a ? o.createElement(w.Ya, {
                                    key: t.id,
                                    textAlign: w.Sb.Right
                                }, o.createElement(R.a, {
                                    milestoneID: t.id,
                                    type: L.a.Blizzard,
                                    userProgress: s,
                                    globalProgress: s,
                                    reward: a,
                                    threshold: t.threshold,
                                    participationThreshold: t.threshold,
                                    startDate: new Date(t.startDate),
                                    blizzardAccount: e.props.blizzardAccount,
                                    getParentRect: e.getRect,
                                    size: T.b.Small
                                })) : null
                            });
                        return t = o.createElement(w.Ya, {
                            padding: {
                                top: 3
                            },
                            display: w.X.Flex,
                            flexDirection: w.Aa.Column,
                            position: w.kb.Relative
                        }, o.createElement(w.Ya, {
                            className: "esports-individual-progress__user-progress-ring",
                            textAlign: w.Sb.Center
                        }, o.createElement(D, {
                            percentComplete: l,
                            segments: 26
                        }), i > 0 && o.createElement(w.Ya, {
                            padding: {
                                top: 2
                            }
                        }, o.createElement(w.W, {
                            fontSize: w.Ca.Size3
                        }, Object(d.d)("{entitled} / {total}", {
                            entitled: Object(d.f)(r),
                            total: Object(d.f)(i)
                        }, "CampaignsProgressTab")))), n.length > 0 && o.createElement(w.Ya, {
                            className: "esports-individual-progress__igc-container",
                            position: w.kb.Absolute,
                            display: w.X.Flex,
                            justifyContent: w.Xa.Between,
                            flexDirection: w.Aa.Column,
                            textAlign: w.Sb.Right,
                            "data-test-selector": "esports-individual-progress-igc-selector"
                        }, c)), o.createElement(w.Ya, {
                            className: "esports-individual-progress",
                            fullHeight: !0
                        }, o.createElement(w.W, {
                            bold: !0,
                            type: w.Wb.H6,
                            color: w.O.Link,
                            transform: w.Vb.Uppercase
                        }, Object(d.d)("Your Progress", "CampaignsProgressTab")), o.createElement(w.Ya, {
                            display: w.X.Flex,
                            alignItems: w.f.Baseline
                        }, o.createElement(w.Ya, {
                            padding: {
                                right: .5
                            }
                        }, o.createElement(w.tb, {
                            type: w.vb.Brand,
                            height: 30,
                            width: 30,
                            asset: w.ub.Bits
                        })), o.createElement(w.W, {
                            "data-test-selector": "esports-individual-progress-selector",
                            type: w.Wb.H1,
                            bold: !0
                        }, Object(d.f)(s))), o.createElement(w.Ya, {
                            padding: {
                                y: 1
                            }
                        }, o.createElement(w.W, null, Object(d.d)("Unlock an Overwatch Hero Twitch emote for every 100 Bits you Cheer. No duplicates!", "CampaignsProgressTab"))), t || o.createElement(w.Ya, {
                            className: "esports-individual-progress__empty"
                        }))
                    }, t
                }(o.Component)),
                z = Object(l.compose)(Object(c.a)(A, {
                    options: function(e) {
                        return {
                            variables: {
                                channelID: e.channelID
                            },
                            skip: !e.user
                        }
                    }
                }), Object(m.a)(function(e) {
                    return {
                        topic: e.data && e.data.user && e.data.user.tournament && e.user ? Object(u.F)(e.user.id) : "",
                        query: A,
                        variables: {
                            channelID: e.channelID
                        },
                        skip: !(e.user && e.data && e.data.user && e.data.user.tournament),
                        type: p.PubsubMessageType.UserCampaignProgressEvent,
                        mutator: function(e, t) {
                            if (t && t.user && t.user.tournament && t.user.tournament.self) return t.user.tournament.self.progress.amount = e.data.progress, t
                        }
                    }
                }))(j);
            var B, M = Object(n.connect)(function(e) {
                    return {
                        user: Object(i.e)(e)
                    }
                })(z),
                W = a("rC/K"),
                Y = a("KnFV"),
                U = a("tuvy"),
                q = a("EYeq");
            a("ODAr");
            ! function(e) {
                e.AllAccessMarketing = "aap-marketing-selector", e.CommunityRewards = "community-rewards-selector", e.TeamRewards = "team-rewards-selector"
            }(B || (B = {}));
            var H = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.renderCommunityRewards = function() {
                            return o.createElement(w.Ya, {
                                "data-test-selector": B.CommunityRewards
                            }, o.createElement(w.W, {
                                bold: !0,
                                type: w.Wb.H6,
                                color: w.O.Link,
                                transform: w.Vb.Uppercase
                            }, Object(d.d)("Community Rewards", "CampaignsProgressTab")), o.createElement(w.Qa, {
                                margin: {
                                    y: 1
                                }
                            }, o.createElement(w.W, null, Object(d.d)("All Overwatch skins unlocked! Cheer just 300 Bits to hype your team and unlock all four skins!", "CampaignsProgressTab"))), t.renderCheerButton(), o.createElement(w.Ya, {
                                display: w.X.Flex,
                                justifyContent: w.Xa.Between,
                                alignItems: w.f.End,
                                margin: {
                                    top: 3
                                },
                                className: "campaign-progress-tab__global-skins"
                            }, o.createElement(w.S, {
                                src: g.c + "/owl-2017/global-rewards/full-skin/tracer.png",
                                srcSet: {
                                    "2x": g.c + "/owl-2017/global-rewards/full-skin/tracer@2x.png"
                                },
                                alt: Object(d.d)("Tracer skin", "CampaignsProgressTab")
                            }), o.createElement(w.S, {
                                src: g.c + "/owl-2017/global-rewards/full-skin/widowmaker.png",
                                srcSet: {
                                    "2x": g.c + "/owl-2017/global-rewards/full-skin/widowmaker@2x.png"
                                },
                                alt: Object(d.d)("Widowmaker skin", "CampaignsProgressTab")
                            }), o.createElement(w.S, {
                                src: g.c + "/owl-2017/global-rewards/full-skin/junkrat.png",
                                srcSet: {
                                    "2x": g.c + "/owl-2017/global-rewards/full-skin/junkrat@2x.png"
                                },
                                alt: Object(d.d)("Junkrat skin", "CampaignsProgressTab")
                            }), o.createElement(w.S, {
                                src: g.c + "/owl-2017/global-rewards/full-skin/hanzo.png",
                                srcSet: {
                                    "2x": g.c + "/owl-2017/global-rewards/full-skin/hanzo@2x.png"
                                },
                                alt: Object(d.d)("Hanzo skin", "CampaignsProgressTab")
                            })))
                        }, t.renderCheerButton = function() {
                            return o.createElement(w.z, {
                                onClick: t.openBitsCard
                            }, Object(d.d)("Cheer now", "CampaignsProgressTab"))
                        }, t.renderTeamCheeringRewards = function(e) {
                            void 0 === e && (e = !1);
                            var a = e ? 12 : 6;
                            return o.createElement(w.Ja, null, o.createElement(w.P, {
                                cols: {
                                    default: 12,
                                    md: a
                                }
                            }, o.createElement(w.Ya, {
                                display: w.X.Flex,
                                margin: {
                                    bottom: 2
                                }
                            }, o.createElement(w.Ya, {
                                margin: {
                                    right: 1
                                }
                            }, o.createElement(w.S, {
                                className: "campaign-progress-tab__dva-skin",
                                src: g.c + "/owl-2017/team-collection.png",
                                srcSet: {
                                    "2x": g.c + "/owl-2017/team-collection@2x.png"
                                },
                                alt: Object(d.d)("D.Va Skin", "CampaignsProgressTab")
                            })), o.createElement(w.Ya, null, o.createElement(w.Ya, {
                                display: w.X.Flex
                            }, o.createElement(w.W, {
                                bold: !0,
                                type: w.Wb.H6,
                                transform: w.Vb.Uppercase,
                                color: w.O.Link
                            }, Object(d.d)("Team Cheering", "CampaignsProgressTab")), o.createElement(w.Ya, {
                                margin: {
                                    left: 1
                                }
                            }, o.createElement(w.W, {
                                bold: !0,
                                type: w.Wb.H6,
                                transform: w.Vb.Uppercase,
                                color: w.O.Error
                            }, Object(d.d)("New Rewards!", "CampaignsProgressTab")))), o.createElement(w.W, null, Object(d.d)("Collect all 12 team emotes and you’ll unlock an exclusive D.Va skin! Cheer at least 150 Bits for each team to unlock their emote.", "CampaignsProgressTab")), o.createElement(w.Ya, {
                                margin: {
                                    top: 1
                                }
                            }, t.renderCheerButton())))), o.createElement(w.P, {
                                cols: {
                                    default: 12,
                                    md: a
                                }
                            }, t.renderTeamEmoteList()))
                        }, t.renderTeamEmoteList = function() {
                            var e = t.props.data;
                            if (!(e && e.user && e.user.tournament && e.user.tournament.rewards && e.user.tournament.rewards.team)) return null;
                            var a = e.user.tournament.rewards.team,
                                n = a.filter(function(e) {
                                    return e.isEntitled
                                }).length;
                            return o.createElement(w.Ya, {
                                "data-test-selector": B.TeamRewards
                            }, o.createElement(w.Ya, {
                                textAlign: w.Sb.Right,
                                padding: {
                                    bottom: 1
                                }
                            }, o.createElement(w.W, {
                                bold: !0,
                                type: w.Wb.H6,
                                color: w.O.Link,
                                transform: w.Vb.Uppercase
                            }, Object(d.d)("{complete} / {total}", {
                                complete: n,
                                total: a.length
                            }, "CampaignsProgressTab"))), o.createElement(w.Ya, {
                                className: "campaign-progress-tab__team-progress-list-items",
                                display: w.X.Flex,
                                flexWrap: w.Ba.Wrap,
                                padding: {
                                    bottom: 2
                                }
                            }, a.map(function(e) {
                                var t = s("campaign-progress-tab__team-progress-list-item", {
                                    "campaign-progress-tab__team-progress-list-item--locked": !e.isEntitled
                                });
                                return o.createElement(w.Fb, {
                                    key: e.id,
                                    className: t,
                                    background: w.r.Base,
                                    borderRadius: w.x.Rounded,
                                    overflow: w.db.Hidden,
                                    position: w.kb.Relative,
                                    margin: 1,
                                    padding: 1
                                }, o.createElement(w.S, {
                                    className: "campaign-progress-tab__team-progress-list-item-img",
                                    src: e.imageURL,
                                    alt: e.name
                                }), !e.isEntitled && o.createElement(w.Fb, {
                                    className: "campaign-progress-tab__team-progress-list-item-locked",
                                    position: w.kb.Absolute,
                                    borderRadius: w.x.Rounded,
                                    fullHeight: !0,
                                    fullWidth: !0,
                                    attachTop: !0,
                                    attachLeft: !0
                                }))
                            })))
                        }, t.renderPrePurchase = function() {
                            return t.teamRewardIsActive() ? t.renderPrePurchaseWithTeam() : t.renderOldPrePurchase()
                        }, t.renderOldPrePurchase = function() {
                            return o.createElement(w.Ja, {
                                gutterSize: w.Ka.None
                            }, o.createElement(w.P, {
                                cols: {
                                    default: 12,
                                    lg: 7,
                                    xxl: 8
                                }
                            }, o.createElement(w.Ya, {
                                className: "campaign-progress-tab__progress-wrapper",
                                margin: {
                                    bottom: 3
                                },
                                padding: {
                                    bottom: 3
                                },
                                breakpointLarge: {
                                    padding: {
                                        right: 3
                                    },
                                    margin: 0
                                },
                                breakpointExtraExtraLarge: {
                                    padding: {
                                        bottom: 0,
                                        right: 0
                                    }
                                },
                                display: w.X.Flex,
                                flexWrap: w.Ba.Wrap,
                                fullHeight: !0
                            }, o.createElement(w.P, {
                                cols: {
                                    default: 12,
                                    md: 6,
                                    lg: 12,
                                    xxl: 5
                                }
                            }, o.createElement(w.Ya, {
                                fullHeight: !0,
                                padding: {
                                    bottom: 3
                                },
                                breakpointMedium: {
                                    padding: {
                                        bottom: 0,
                                        right: 3
                                    }
                                },
                                breakpointLarge: {
                                    padding: {
                                        bottom: 3
                                    }
                                },
                                breakpointExtraExtraLarge: {
                                    padding: {
                                        bottom: 0,
                                        right: 3
                                    }
                                },
                                className: "campaign-progress-tab__individual-progress"
                            }, o.createElement(M, {
                                channelID: t.props.channelID,
                                blizzardAccount: t.props.blizzardAccount
                            }))), o.createElement(w.P, {
                                cols: {
                                    default: 12,
                                    md: 6,
                                    lg: 12,
                                    xxl: 7
                                }
                            }, o.createElement(w.Ya, {
                                fullHeight: !0,
                                padding: {
                                    top: 3
                                },
                                breakpointMedium: {
                                    padding: {
                                        top: 0,
                                        x: 3
                                    }
                                },
                                breakpointLarge: {
                                    padding: {
                                        top: 3
                                    }
                                },
                                breakpointExtraExtraLarge: {
                                    padding: {
                                        top: 0,
                                        x: 3
                                    }
                                }
                            }, t.renderCommunityRewards())))), o.createElement(w.P, {
                                cols: {
                                    default: 12,
                                    lg: 5,
                                    xxl: 4
                                },
                                "data-test-selector": B.AllAccessMarketing
                            }, t.renderAllAccessMarketing()))
                        }, t.renderPrePurchaseWithTeam = function() {
                            var e = t.teamRewardIsActive();
                            return o.createElement(w.Ja, {
                                gutterSize: w.Ka.None
                            }, e && o.createElement(w.P, {
                                cols: {
                                    default: 12,
                                    md: 6,
                                    xxl: 7
                                }
                            }, o.createElement(w.Ya, {
                                className: "campaign-progress-tab__team-cheering-wrapper--small",
                                margin: {
                                    bottom: 2
                                },
                                padding: {
                                    right: 2
                                }
                            }, t.renderTeamCheeringRewards(!0))), o.createElement(w.P, {
                                cols: {
                                    default: 12,
                                    md: 6,
                                    xxl: 5
                                },
                                order: e ? void 0 : w.Q.Last,
                                "data-test-selector": B.AllAccessMarketing
                            }, t.renderAllAccessMarketing()), o.createElement(w.P, {
                                cols: {
                                    default: 12,
                                    md: e ? 12 : 6,
                                    xxl: e ? 12 : 7
                                }
                            }, o.createElement(w.Ya, {
                                margin: {
                                    bottom: 3
                                },
                                padding: {
                                    bottom: 3
                                },
                                display: w.X.Flex,
                                flexWrap: w.Ba.Wrap,
                                fullHeight: !0
                            }, o.createElement(w.P, {
                                cols: {
                                    default: 12,
                                    md: 6,
                                    xxl: 7
                                }
                            }, o.createElement(w.Ya, {
                                className: "campaign-progress-tab__global-progress",
                                fullHeight: !0,
                                padding: {
                                    top: 3,
                                    right: 3
                                }
                            }, t.renderCommunityRewards())), o.createElement(w.P, {
                                cols: {
                                    default: 12,
                                    md: 6,
                                    xxl: 5
                                },
                                order: {
                                    default: w.Q.First,
                                    md: w.Q.Last
                                }
                            }, o.createElement(w.Ya, {
                                fullHeight: !0,
                                padding: {
                                    top: 3
                                },
                                breakpointMedium: {
                                    padding: {
                                        left: 3
                                    }
                                }
                            }, o.createElement(M, {
                                channelID: t.props.channelID,
                                blizzardAccount: t.props.blizzardAccount
                            }))))))
                        }, t.renderPostPurchase = function() {
                            return o.createElement(w.Ya, {
                                display: w.X.Flex,
                                flexWrap: w.Ba.WrapReverse
                            }, o.createElement(w.P, {
                                cols: {
                                    default: 12,
                                    md: 7
                                }
                            }, o.createElement(w.Ya, {
                                fullHeight: !0,
                                padding: {
                                    y: 3
                                },
                                margin: {
                                    top: 3
                                },
                                breakpointMedium: {
                                    padding: {
                                        x: 3,
                                        bottom: 0
                                    },
                                    margin: {
                                        top: 0
                                    }
                                }
                            }, t.renderCommunityRewards())), o.createElement(w.P, {
                                cols: {
                                    default: 12,
                                    md: 5
                                },
                                order: {
                                    md: w.Q.First
                                }
                            }, o.createElement(w.Ya, {
                                className: "campaign-progress-tab__individual-progress-post-purchase",
                                fullHeight: !0,
                                margin: {
                                    y: 3
                                },
                                breakpointMedium: {
                                    padding: {
                                        right: 3
                                    }
                                }
                            }, o.createElement(M, {
                                channelID: t.props.channelID
                            }))), t.teamRewardIsActive() && o.createElement(w.P, {
                                cols: 12
                            }, o.createElement(w.Ya, {
                                className: "campaign-progress-tab__team-cheering-wrapper",
                                fullHeight: !0,
                                padding: {
                                    bottom: 3
                                }
                            }, t.renderTeamCheeringRewards())))
                        }, t.teamRewardIsActive = function() {
                            var e = t.props.campaignProperties && t.props.campaignProperties.objectives;
                            return !!e && e.filter(function(e) {
                                return e.tag === W.a.Collection && e.milestones && e.milestones.length > 0
                            }).length > 0
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        return o.createElement(w.Ya, {
                            className: "campaign-progress-tab",
                            margin: {
                                y: 2
                            }
                        }, o.createElement(w.Qa, {
                            margin: {
                                bottom: 4,
                                top: 3
                            },
                            padding: {
                                bottom: 2
                            },
                            breakpointExtraLarge: {
                                padding: {
                                    bottom: 0
                                }
                            }
                        }, o.createElement(N, {
                            channelID: this.props.channelID
                        })), o.createElement(w.Ya, {
                            padding: {
                                bottom: 4
                            }
                        }, this.props.hasInsiderPass ? this.renderPostPurchase() : this.renderPrePurchase()), o.createElement(w.Ja, {
                            gutterSize: w.Ka.Large
                        }, o.createElement(w.P, {
                            cols: {
                                xl: 6,
                                default: 12
                            }
                        }, o.createElement(w.Ya, {
                            padding: {
                                bottom: 2
                            },
                            breakpointExtraLarge: {
                                padding: {
                                    bottom: 0
                                }
                            }
                        }, o.createElement(x.a, {
                            channelID: this.props.channelID,
                            domain: v.f
                        }))), o.createElement(w.P, {
                            cols: {
                                xl: 6,
                                default: 12
                            }
                        }, o.createElement(_.a, {
                            channelID: this.props.channelID
                        }))))
                    }, t.prototype.renderAllAccessMarketing = function() {
                        var e = Object(d.d)("Explore the All-Access Pass", "CampaignsProgressTab");
                        return o.createElement(w.Ya, {
                            className: "campaign-progress-tab__all-access-marketing",
                            padding: {
                                bottom: 3
                            },
                            breakpointMedium: {
                                padding: {
                                    left: 3
                                }
                            }
                        }, o.createElement(w.Fb, {
                            textAlign: w.Sb.Center,
                            margin: {
                                y: 2
                            },
                            padding: {
                                top: 3,
                                bottom: .5
                            },
                            background: w.r.Accent,
                            color: w.O.Overlay,
                            borderRadius: w.x.Medium,
                            position: w.kb.Relative
                        }, o.createElement(w.Qa, {
                            position: w.kb.Absolute,
                            attachLeft: !0
                        }, o.createElement(w.S, {
                            className: "campaign-progress-tab__all-access-logo",
                            src: g.c + "/owl-2017/all-access-logo.svg",
                            alt: Object(d.d)("Overwatch League All-Access Pass on Twitch", "CampaignsProgressTab")
                        })), o.createElement(w.S, {
                            className: "campaign-progress-tab__players-pack-image",
                            src: g.c + "/owl-2017/players-pack.jpg",
                            alt: Object(d.d)("The Players Pack Skins", "CampaignsProgressTab")
                        })), o.createElement(w.W, {
                            transform: w.Vb.Uppercase,
                            color: w.O.Link,
                            bold: !0
                        }, Object(d.d)("Included with the Pass:", "CampaignsProgressTab")), o.createElement(w.W, null, Object(d.d)("15 Overwatch skins, 1 player icon and 1 spray", "CampaignsProgressTab")), o.createElement(w.Ya, {
                            margin: {
                                y: 2
                            }
                        }, o.createElement(w.Ya, {
                            display: w.X.Flex,
                            alignItems: w.f.Center,
                            margin: {
                                y: 1
                            }
                        }, o.createElement(w.Qa, {
                            margin: {
                                right: 1
                            }
                        }, o.createElement("img", {
                            src: g.c + "/owl-2017/switcher-command-center.svg",
                            height: "36px",
                            width: "36px"
                        })), o.createElement(w.W, null, Object(d.d)("Exclusive Command Center Stream access plus Passholder-only chat", "CampaignsProgressTab"))), o.createElement(w.Ya, {
                            display: w.X.Flex,
                            alignItems: w.f.Center,
                            margin: {
                                y: 1
                            }
                        }, o.createElement(w.Qa, {
                            margin: {
                                right: 1
                            }
                        }, o.createElement("img", {
                            src: g.c + "/owl-2017/marketing/insider-post-purchase-vods.png",
                            height: "36px",
                            width: "36px"
                        })), o.createElement(w.W, null, Object(d.d)("Post-match Q&A and match-analysis videos by players", "CampaignsProgressTab"))), o.createElement(w.Ya, {
                            display: w.X.Flex,
                            alignItems: w.f.Center,
                            margin: {
                                y: 1
                            }
                        }, o.createElement(w.Qa, {
                            margin: {
                                right: 1
                            }
                        }, o.createElement("img", {
                            src: "https://static-cdn.jtvnw.net/emoticons/v1/894665/3.0",
                            height: "36px",
                            width: "36px"
                        })), o.createElement(w.W, null, Object(d.d)("23 Twitch emotes, 2 Twitch badges, and more!", "CampaignsProgressTab")))), Object(U.a)() && Object(U.e)() ? o.createElement(w.z, {
                            type: w.F.Hollow,
                            linkTo: "/" + this.props.channelLogin + "/esports-pass",
                            "data-tab-target": Y.a.InsiderPass
                        }, e) : o.createElement(w.z, {
                            type: w.F.Hollow,
                            onClick: this.props.tabSwitch,
                            "data-tab-target": Y.a.InsiderPass
                        }, e))
                    }, t.prototype.openBitsCard = function() {
                        var e = document.querySelector('[data-a-target="bits-button"]');
                        e && e.click()
                    }, t
                }(o.Component),
                X = Object(l.compose)(Object(c.a)(q, {
                    options: function(e) {
                        return {
                            variables: {
                                channelID: e.channelID
                            }
                        }
                    }
                }), Object(m.a)(function(e) {
                    return {
                        topic: e.data && e.data.user && e.data.user.tournament && e.user ? Object(u.F)(e.user.id) : "",
                        query: q,
                        variables: {
                            channelID: e.channelID
                        },
                        skip: !(e.user && e.data && e.data.user && e.data.user.tournament),
                        type: p.PubsubMessageType.UserCampaignProgressEvent,
                        mutator: function(t, a) {
                            if (a && a.user && a.user.tournament) return e && e.data && e.data.refetch && e.data.refetch(), a
                        }
                    }
                }))(H);
            var V = Object(n.connect)(function(e) {
                return {
                    user: Object(i.e)(e)
                }
            })(X);
            a.d(t, "PublicProps", function() {}), a.d(t, "CampaignsProgressTab", function() {
                return V
            })
        },
        Yg6M: function(e, t, a) {},
        YkUe: function(e, t, a) {
            "use strict";
            var n;
            a.d(t, "a", function() {
                    return n
                }),
                function(e) {
                    e.PostPurchase = "post-purchase", e.PrePurchase = "pre-purchase"
                }(n || (n = {}))
        },
        Zqs6: function(e, t, a) {},
        aUl8: function(e, t, a) {},
        "bt+X": function(e, t, a) {},
        cUCe: function(e, t, a) {
            "use strict";
            var n = a("q1tI"),
                i = (a("Yg6M"), function() {
                    return n.createElement("svg", {
                        className: "esports-participation-threshold-complete",
                        viewBox: "0 0 22 22"
                    }, n.createElement("defs", null, n.createElement("path", {
                        d: "M8.42897991,15.9999799 C8.18397991,15.9999799 7.93897991,15.9099799 7.74597991,15.7309799 L4.31797991,12.5309799 C3.91397991,12.1539799 3.89197991,11.5209799 4.26897991,11.1169799 C4.64697991,10.7129799 5.27997991,10.6919799 5.68197991,11.0679799 L8.42897991,13.6319799 L16.3179799,6.26897991 C16.7229799,5.89197991 17.3549799,5.91397991 17.7319799,6.31797991 C18.1079799,6.72097991 18.0859799,7.35397991 17.6829799,7.73097991 L9.11197991,15.7309799 C8.91897991,15.9099799 8.67397991,15.9999799 8.42897991,15.9999799",
                        id: "path-participation-threshold-complete"
                    })), n.createElement("g", {
                        id: "Symbols",
                        stroke: "none",
                        strokeWidth: "1",
                        fill: "none",
                        fillRule: "evenodd"
                    }, n.createElement("g", {
                        id: "bits/bit-checkpoint-done",
                        transform: "translate(-5.000000, -5.000000)"
                    }, n.createElement("g", {
                        id: "Group",
                        transform: "translate(5.000000, 5.000000)"
                    }, n.createElement("circle", {
                        id: "Oval-Copy-6",
                        fill: "#6441A4",
                        cx: "11",
                        cy: "11",
                        r: "11"
                    }), n.createElement("mask", {
                        id: "mask-2",
                        fill: "white"
                    }, n.createElement("use", {
                        xlinkHref: "#path-participation-threshold-complete"
                    })), n.createElement("use", {
                        id: "Mask",
                        fill: "#FFFFFF",
                        xlinkHref: "#path-participation-threshold-complete"
                    })))))
                });
            a.d(t, "a", function() {
                return i
            })
        },
        fFIB: function(e, t, a) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "CampaignsIndividualProgress"
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
                                        value: "tournament"
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
                                                        value: "progress"
                                                    },
                                                    arguments: [],
                                                    directives: [],
                                                    selectionSet: {
                                                        kind: "SelectionSet",
                                                        selections: [{
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "amount"
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
                                                        }]
                                                    }
                                                }]
                                            }
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
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "individual"
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
                                        }]
                                    }
                                }]
                            }
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 309
                }
            };
            n.loc.source = {
                body: '#import "twilight/features/campaigns/models/milestone.gql"\n#import "twilight/features/campaigns/models/reward.gql"\nquery CampaignsIndividualProgress($channelID: ID!) {\nuser(id: $channelID) {\nid\ntournament {\nid\nself {\nprogress {\namount\nmilestones {\n...milestone\n}\n}\n}\nrewards {\nindividual {\n...reward\n}\n}\n}\n}\n}',
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            var i = {};

            function r(e) {
                return e.filter(function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var t = e.name.value;
                    return !i[t] && (i[t] = !0, !0)
                })
            }
            n.definitions = n.definitions.concat(r(a("8Ver").definitions)), n.definitions = n.definitions.concat(r(a("VK0B").definitions)), e.exports = n
        },
        hRrL: function(e, t, a) {
            "use strict";
            var n = a("/MKj"),
                i = a("kRBY"),
                r = a("mrSG"),
                s = a("q1tI"),
                o = a("oJmH"),
                l = a("/7QA"),
                d = a("yR8l"),
                c = a("Ue10"),
                m = a("7QWs"),
                p = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            error: !1
                        }, t.claimAllRewards = function() {
                            return r.__awaiter(t, void 0, void 0, function() {
                                return r.__generator(this, function(e) {
                                    switch (e.label) {
                                        case 0:
                                            if (!this.props.claimAllRewards || !this.props.user) return [2];
                                            e.label = 1;
                                        case 1:
                                            return e.trys.push([1, 3, , 4]), [4, this.props.claimAllRewards({
                                                variables: {
                                                    input: {
                                                        domain: this.props.tournamentID,
                                                        userID: this.props.user.id
                                                    }
                                                }
                                            })];
                                        case 2:
                                            return e.sent(), [3, 4];
                                        case 3:
                                            return e.sent(), this.setState({
                                                error: !0
                                            }), [3, 4];
                                        case 4:
                                            return [2]
                                    }
                                })
                            })
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        var e = this.props.inGame ? Object(l.d)("Redeem All In-Game Rewards", "CampaignsRewardsTab") : Object(l.d)("Redeem All", "CampaignsRewardsTab");
                        return s.createElement(c.Ya, {
                            className: "esports-claim-all-rewards-button",
                            display: c.X.InlineFlex,
                            margin: {
                                right: 1
                            },
                            verticalAlign: c.gc.Bottom
                        }, s.createElement(c.z, {
                            "data-test-selector": "esports-claim-all-button",
                            onClick: this.claimAllRewards,
                            disabled: !this.props.enabled
                        }, this.state.error && s.createElement(c.tb, {
                            "data-test-selector": "esports-claim-all-button-error",
                            asset: c.ub.DeadGlitch
                        }), !this.state.error && e))
                    }, t
                }(s.Component),
                u = Object(o.compose)(Object(d.a)(m, {
                    name: "claimAllRewards"
                }))(p);
            var g = Object(n.connect)(function(e) {
                return {
                    user: Object(i.e)(e)
                }
            })(u);
            a.d(t, "a", function() {
                return g
            })
        },
        huSm: function(e, t, a) {
            "use strict";
            var n, i, r, s = a("mrSG"),
                o = a("q1tI"),
                l = a("5zXJ"),
                d = a("jAjM"),
                c = a("/MKj"),
                m = a("kRBY"),
                p = a("yR8l"),
                u = a("geRD"),
                g = a("/7QA"),
                h = a("fvjX"),
                f = a("1/iK"),
                b = a("y5D0"),
                k = a("+z1J");
            ! function(e) {
                e.RedeemMilestoneButton = "milestone_balloon__redeem-milestone-button", e.Redeemed = "milestone_button_redeemed-milestone", e.MilestoneRestricted = "milestone_balloon_restricted", e.CheerNowButton = "milestone_balloon_cheer_now", e.LoginSignup = "milestone_balloon_login_signup", e.BuyInsiderPass = "milestone-balloon-buy-insider-pass", e.TryPrime = "milestone-balloon-try-prime"
            }(n || (n = {})),
            function(e) {
                e.Description = "milestone-balloon-body-description"
            }(i || (i = {})),
            function(e) {
                e.RewardType = "milestone-balloon-header-reward-type", e.MilestoneRestricted = "milestone-balloon-header-milestone-restricted", e.MilestoneLocked = "milestone-balloon-header-milestone-locked", e.MilestoneUnlocked = "milestone-balloon-header-milestone-unlocked"
            }(r || (r = {}));
            var v = a("DnOo"),
                y = a("W8Fi"),
                E = a("RVih"),
                w = a("Ue10"),
                C = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.handleSubAction = function() {}, t
                    }
                    return s.__extends(t, e), t.prototype.render = function() {
                        var e = null,
                            t = this.props.type === k.a.Blizzard || this.props.insiderType === k.c.InGameContent,
                            a = Object(g.d)("Redeem", "CampaignsMilestoneBalloon");
                        if (this.props.reward.isEntitled) e = o.createElement(w.Ya, {
                            display: w.X.Flex,
                            className: "esports-milestone-balloon__redeemed",
                            "data-test-selector": n.Redeemed,
                            padding: {
                                top: 1
                            }
                        }, o.createElement(w.Ya, {
                            padding: {
                                right: .5
                            }
                        }, o.createElement(w.tb, {
                            asset: w.ub.Check,
                            type: w.vb.Success
                        })), o.createElement(w.W, null, Object(g.d)("Redeemed", "CampaignsMilestoneBalloon")));
                        else if (t && this.props.isRestrictedBlizzardAccount) e = o.createElement(w.Ya, {
                            display: w.X.Flex,
                            "data-test-selector": n.MilestoneRestricted
                        }, o.createElement(w.W, {
                            color: w.O.Error
                        }, Object(g.d)("Reward unavailable", "CampaignsMilestoneBalloon")));
                        else if (this.props.isClaimable) t ? e = void 0 === this.props.isBlizzardAccountLinked || this.props.isBlizzardAccountLinked ? o.createElement(w.z, {
                            onClick: this.props.claimMilestone,
                            disabled: this.props.isRestrictedBlizzardAccount,
                            "data-test-selector": n.RedeemMilestoneButton
                        }, a) : o.createElement(w.Ya, null, o.createElement(w.W, null, Object(g.d)("Link your Blizzard Account to use in-game!", "CampaignsMilestoneBalloon"))) : this.props.insiderType === k.c.Bits && (e = o.createElement(w.z, {
                            onClick: this.props.claimMilestone,
                            "data-test-selector": n.RedeemMilestoneButton
                        }, a));
                        else if (!this.props.hasInsiderPass && this.props.subscriptionProducts && this.props.subscriptionProducts.length > 0) {
                            var i = this.props.subscriptionProducts[0].price;
                            Object(y.g)(this.props.subscriptionProducts) && (i = Object(y.c)(this.props.subscriptionProducts[0])), e = o.createElement(w.Ya, {
                                display: w.X.Flex
                            }, o.createElement(w.Ya, {
                                margin: {
                                    right: 1,
                                    top: 1
                                }
                            }, o.createElement(v.a, {
                                isSubbedToTier: !1,
                                tierPrice: i,
                                "data-a-target": "tier1-subscribe-button",
                                handleSubAction: this.handleSubAction,
                                productName: this.props.subscriptionProducts[0].name,
                                url: this.props.subscriptionProducts[0].url || "",
                                isEsportChannel: !0
                            })))
                        } else e = this.props.reward.isPrimeOnly ? o.createElement(w.z, {
                            linkTo: g.a.tryPrimeURI,
                            targetBlank: !0,
                            "data-test-selector": n.TryPrime
                        }, Object(g.d)("Get Twitch Prime", "CampaignsMilestoneBalloon")) : this.props.user ? o.createElement(w.z, {
                            onClick: this.props.openBitsCard,
                            "data-test-selector": n.CheerNowButton
                        }, Object(g.d)("Cheer now", "CampaignsMilestoneBalloon")) : o.createElement(w.Ya, {
                            "data-test-selector": n.LoginSignup
                        }, o.createElement(E.a, {
                            login: this.props.login,
                            signup: this.props.signup
                        }));
                        return o.createElement(w.Ya, {
                            className: "esports-milestone-balloon-call-to-action"
                        }, e)
                    }, t
                }(o.PureComponent);
            var S = Object(c.connect)(function(e) {
                    return {
                        user: Object(m.e)(e)
                    }
                }, function(e) {
                    return Object(h.bindActionCreators)({
                        login: function() {
                            return Object(b.e)(f.a.EsportsCampaignTabsMilestoneBalloon)
                        },
                        signup: function() {
                            return Object(b.g)(f.a.EsportsCampaignTabsMilestoneBalloon)
                        }
                    }, e)
                })(C),
                N = a("cUCe"),
                x = a("81Gi"),
                _ = (a("qGAq"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.getDescriptionText = function() {
                            var e = null;
                            return t.props.type === k.a.Twitch ? t.props.emoteType === k.b.Hero ? e = t.props.reward.isEntitled ? Object(g.d)("You’ve unlocked this Overwatch Hero emote to use anywhere on Twitch!", "CampaignsMilestoneBalloon") : Object(g.d)("Unlock one of 26 random Overwatch Hero Twitch emotes for every 100 Bits you Cheer.", "CampaignsMilestoneBalloon") : t.props.emoteType === k.b.Team ? e = t.props.reward.isEntitled ? Object(g.d)("You’ve unlocked this emote. Use it anywhere on Twitch to show your love for the team!", "CampaignsMilestoneBalloon") : Object(g.d)("Cheer 150 Bits or more using this team’s Cheermote and receive their emote.", "CampaignsMilestoneBalloon") : t.props.emoteType === k.b.Cheerbomb && (e = Object(g.d)("Cheer 250 Bits for a set of five emotes, 500 Bits for the second set and share with Chat.", "CampaignsMilestoneBalloon")) : t.props.insiderType ? e = t.props.reward.isPrimeOnly ? Object(g.d)("Included with the Overwatch League All-Access Pass 2018, only for Twitch Prime members.", "CampaignsMilestoneBalloon") : Object(g.d)("Included with the Overwatch League All-Access Pass 2018.", "CampaignsMilestoneBalloon") : t.props.type === k.a.Blizzard && (t.props.isErrorState ? e = Object(g.d)("Error redeeming reward, please try again later!", "CampaignsMilestoneBalloon") : t.props.globalThresholdReached ? t.props.globalThresholdReached && !t.props.userThresholdReached ? e = Object(g.d)("The community unlocked this loot! Cheer to join them and get it yourself!", "CampaignsMilestoneBalloon") : t.props.reward.isEntitled ? e = Object(g.d)("Now available to use in-game!", "CampaignsMilestoneBalloon") : t.props.isClaimable && (e = t.props.isBlizzardAccountLinked ? Object(g.d)("Now available! Click Redeem to use in-game.", "CampaignsMilestoneBalloon") : Object(g.d)("Now available! Link your Blizzard Account to use in-game.", "CampaignsMilestoneBalloon")) : e = Object(g.d)("Cheer with the community to unlock this loot!", "CampaignsMilestoneBalloon")), e
                        }, t
                    }
                    return s.__extends(t, e), t.prototype.render = function() {
                        var e = this.getDescriptionText(),
                            t = null;
                        if (this.props.type === k.a.Blizzard && !this.props.insiderType && this.props.participationThreshold > 0) {
                            var a = null;
                            a = this.props.userThresholdReached ? o.createElement(N.a, null) : o.createElement(x.a, null), t = o.createElement(w.Ya, {
                                display: w.X.Flex,
                                padding: {
                                    bottom: 1
                                }
                            }, o.createElement(w.Ya, {
                                padding: {
                                    right: .5
                                }
                            }, a), o.createElement(w.W, {
                                className: "esports-milestone-balloon-body__participation-text"
                            }, Object(g.d)("Cheer {amount} Bits", {
                                amount: Object(g.f)(this.props.participationThreshold)
                            }, "CampaignsMilestoneBalloon")))
                        }
                        return o.createElement(w.Ya, {
                            padding: {
                                top: 1,
                                x: 2,
                                bottom: 2
                            }
                        }, this.props.participationThreshold > 0 && t, o.createElement(w.W, {
                            "data-test-selector": i.Description
                        }, e), o.createElement(w.Ya, {
                            display: w.X.Flex,
                            padding: {
                                top: 1
                            },
                            flexDirection: w.Aa.Row
                        }, o.createElement(S, {
                            type: this.props.type,
                            reward: this.props.reward,
                            isRestrictedBlizzardAccount: this.props.isRestrictedBlizzardAccount,
                            isBlizzardAccountLinked: this.props.isBlizzardAccountLinked,
                            isErrorState: this.props.isErrorState,
                            isClaimable: this.props.isClaimable,
                            openBitsCard: this.props.openBitsCard,
                            claimMilestone: this.props.claimMilestone,
                            hasInsiderPass: this.props.hasInsiderPass,
                            subscriptionProducts: this.props.subscriptionProducts,
                            insiderType: this.props.insiderType
                        })))
                    }, t
                }(o.PureComponent)),
                T = a("TSYQ"),
                R = a("WlPE"),
                F = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return s.__extends(t, e), t.prototype.render = function() {
                        var e = o.createElement(w.W, {
                            "data-test-selector": r.RewardType,
                            color: w.O.Alt2
                        }, this.props.reward.description);
                        this.props.isEmote && (e = o.createElement(w.W, {
                            "data-test-selector": r.RewardType,
                            color: w.O.Link
                        }, Object(g.d)("Twitch Emote", "CampaignsMilestoneBalloon")));
                        var t, a = null;
                        a = this.props.isRestricted ? o.createElement(w.tb, {
                            "data-test-selector": r.MilestoneRestricted,
                            type: w.vb.Alert,
                            asset: w.ub.Ban
                        }) : this.props.isLocked ? o.createElement(w.tb, {
                            "data-test-selector": r.MilestoneLocked,
                            asset: w.ub.Lock
                        }) : o.createElement(w.tb, {
                            "data-test-selector": r.MilestoneUnlocked,
                            type: w.vb.Success,
                            asset: w.ub.Unlock
                        }), t = this.props.isHexagon ? o.createElement(d.a, {
                            imageURL: this.props.reward.imageURL
                        }) : o.createElement(R.a, {
                            imageURL: this.props.reward.imageURL,
                            size: R.c.Default,
                            noBorder: !0
                        });
                        var n = null;
                        n = this.props.requiresPass ? o.createElement(w.W, null, Object(g.d)("All-Access Pass", "CampaignsMilestoneBalloon")) : o.createElement(w.Ya, {
                            display: w.X.Flex,
                            alignItems: w.f.Center
                        }, o.createElement(w.tb, {
                            type: w.vb.Brand,
                            asset: w.ub.Bits
                        }), this.props.threshold > 0 && o.createElement(w.Qa, {
                            margin: {
                                left: .5
                            }
                        }, o.createElement(w.W, {
                            className: "esports-milestone-balloon__threshold",
                            bold: !0,
                            fontSize: w.Ca.Size5,
                            type: w.Wb.Span
                        }, Object(g.f)(this.props.threshold))));
                        var i = T("esports-milestone-balloon__image", {
                            "esports-milestone-balloon__image--blizzard": this.props.isHexagon
                        });
                        return o.createElement(w.Fb, {
                            borderBottom: !0,
                            display: w.X.Flex,
                            alignItems: w.f.Center,
                            padding: {
                                right: 1,
                                bottom: .5
                            }
                        }, o.createElement(w.Ya, {
                            className: i
                        }, t), o.createElement(w.Ya, {
                            margin: {
                                left: 1
                            }
                        }, e, o.createElement(w.W, {
                            bold: !0
                        }, this.props.reward.name)), o.createElement(w.Ya, {
                            textAlign: w.Sb.Right,
                            margin: {
                                left: "auto"
                            }
                        }, a, n))
                    }, t
                }(o.PureComponent),
                P = a("QlRw"),
                I = a("UOrd"),
                O = (a("Zqs6"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            isErrorState: !1
                        }, t.claimMilestone = function() {
                            return s.__awaiter(t, void 0, void 0, function() {
                                return s.__generator(this, function(e) {
                                    switch (e.label) {
                                        case 0:
                                            if (!this.props.claimMilestone) return [2];
                                            e.label = 1;
                                        case 1:
                                            return e.trys.push([1, 3, , 4]), [4, this.props.claimMilestone(Object(u.b)({
                                                input: {
                                                    userID: this.props.user && this.props.user.id || "",
                                                    milestoneID: this.props.milestoneID
                                                }
                                            }, {
                                                claimMilestone: {
                                                    __typename: "ClaimMilestonePayload",
                                                    milestoneID: this.props.milestoneID,
                                                    rewards: [this.props.reward]
                                                }
                                            }))];
                                        case 2:
                                            return e.sent(), [3, 4];
                                        case 3:
                                            return e.sent(), this.setState({
                                                isErrorState: !0
                                            }), [3, 4];
                                        case 4:
                                            return [2]
                                    }
                                })
                            })
                        }, t
                    }
                    return s.__extends(t, e), t.prototype.render = function() {
                        var e = void 0 !== this.props.userProgress && this.props.participationThreshold <= this.props.userProgress,
                            t = void 0 !== this.props.globalProgress && this.props.threshold <= this.props.globalProgress,
                            a = this.props.reward.canBeFulfilled;
                        this.props.insiderType && (a = !!this.props.hasInsiderPass);
                        var n = !!this.props.blizzardAccount && this.props.blizzardAccount.region === P.a.China,
                            i = !!this.props.blizzardAccount,
                            r = this.props.type === k.a.Twitch || this.props.insiderType === k.c.SubEmote,
                            s = !this.props.isBundle && (this.props.insiderType === k.c.HeroSkin || this.props.type === k.a.Blizzard),
                            l = n && (this.props.type === k.a.Blizzard || this.props.type === k.a.Insider),
                            d = !!this.props.insiderType;
                        return o.createElement(w.Ya, {
                            className: "esports-milestone-balloon",
                            textAlign: w.Sb.Left
                        }, o.createElement(F, {
                            reward: this.props.reward,
                            threshold: this.props.threshold,
                            requiresPass: d,
                            isEmote: r,
                            isHexagon: s,
                            isLocked: !a,
                            isRestricted: l
                        }), o.createElement(_, {
                            type: this.props.type,
                            emoteType: this.props.emoteType,
                            insiderType: this.props.insiderType,
                            reward: this.props.reward,
                            globalThresholdReached: t,
                            userThresholdReached: e,
                            participationThreshold: this.props.participationThreshold,
                            isRestrictedBlizzardAccount: n,
                            isErrorState: this.state.isErrorState,
                            isClaimable: a,
                            isBlizzardAccountLinked: i,
                            openBitsCard: this.openBitsCard,
                            claimMilestone: this.claimMilestone,
                            hasInsiderPass: this.props.hasInsiderPass,
                            subscriptionProducts: this.props.subscriptionProducts
                        }))
                    }, t.prototype.openBitsCard = function() {
                        var e = document.querySelector('[data-a-target="bits-button"]');
                        e && e.click()
                    }, t = s.__decorate([Object(p.a)(I, {
                        name: "claimMilestone"
                    })], t)
                }(o.Component));
            var D = Object(c.connect)(function(e) {
                    return {
                        user: Object(m.e)(e)
                    }
                })(O),
                L = a("uLiP"),
                A = a("rC/K"),
                j = (a("JPbf"), a("Ar2k")),
                z = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.setContainerRef = function(e) {
                            return t.containerRef = e
                        }, t.onMouseEnter = function() {
                            if (t.containerRef) {
                                var e = !t.props.startDate || t.props.startDate <= new Date(Date.now()),
                                    a = t.props.reward && t.props.reward.id === L.d,
                                    n = t.props.reward && t.props.reward.id === L.a;
                                t.props.reward && e && t.props.tooltipLayer.showRich({
                                    from: t.containerRef,
                                    richContent: o.createElement(D, {
                                        milestoneID: t.props.milestoneID,
                                        type: t.props.type,
                                        emoteType: t.props.emoteType,
                                        insiderType: t.props.insiderType,
                                        globalProgress: t.props.globalProgress,
                                        userProgress: t.props.userProgress,
                                        reward: t.props.reward,
                                        threshold: t.props.threshold,
                                        participationThreshold: t.props.participationThreshold,
                                        blizzardAccount: t.props.blizzardAccount,
                                        hasInsiderPass: t.props.hasInsiderPass,
                                        subscriptionProducts: t.props.subscriptionProducts,
                                        userHasPrime: t.props.userHasPrime,
                                        isBundle: a || n
                                    }),
                                    allowHover: !0,
                                    balloonProps: {
                                        size: w.w.Medium,
                                        direction: w.v.TopCenter,
                                        offsetY: "-15px"
                                    }
                                })
                            }
                        }, t.onMouseLeave = function() {
                            t.props.tooltipLayer.hide()
                        }, t.addEventListeners = function() {
                            t.containerRef && (t.containerRef.addEventListener("mouseover", t.onMouseEnter), t.containerRef.addEventListener("wheel", t.onMouseEnter), t.containerRef.addEventListener("mouseleave", t.onMouseLeave))
                        }, t.removeEventListeners = function() {
                            t.containerRef && (t.containerRef.removeEventListener("mouseover", t.onMouseEnter), t.containerRef.removeEventListener("wheel", t.onMouseEnter), t.containerRef.removeEventListener("mouseleave", t.onMouseLeave))
                        }, t
                    }
                    return s.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.addEventListeners()
                    }, t.prototype.componentWillUnmount = function() {
                        this.removeEventListeners()
                    }, t.prototype.render = function() {
                        var e, t = this.props.objectiveTag === A.a.Collection && this.props.reward && !this.props.reward.canBeFulfilled && !this.props.reward.isEntitled,
                            a = void 0 !== this.props.globalProgress && this.props.globalProgress < this.props.threshold,
                            n = void 0 !== this.props.globalProgress && this.props.globalProgress >= this.props.threshold && void 0 !== this.props.userProgress && this.props.userProgress < this.props.participationThreshold || void 0 === this.props.globalProgress && void 0 !== this.props.userProgress && this.props.userProgress < this.props.participationThreshold,
                            i = this.props.emoteType && this.props.reward && !this.props.reward.isEntitled || this.props.insiderType !== k.c.InGameContent && void 0 !== this.props.hasInsiderPass && !this.props.hasInsiderPass,
                            r = !this.props.reward || this.props.startDate && this.props.startDate > new Date(Date.now()),
                            s = this.props.type === k.a.Twitch && this.props.emoteType || this.props.type === k.a.Insider && this.props.insiderType !== k.c.HeroSkin;
                        if (this.props.big) {
                            var c = this.props.reward ? this.props.reward.imageURL : "";
                            this.props.reward && this.props.reward.id === L.c && (c = l.c + "/owl-2017/insider-test/lucio-emote-static-alt.png"), e = o.createElement(w.Fb, {
                                className: "esports-milestone__insider--players-pack",
                                margin: {
                                    top: 2
                                }
                            }, o.createElement(R.a, {
                                imageURL: c,
                                locked: !1,
                                borderType: R.b.Brand,
                                hasInsiderPass: void 0 !== this.props.hasInsiderPass ? this.props.hasInsiderPass : void 0
                            }))
                        } else if (s) {
                            var m = R.c.Default,
                                p = R.b.Default;
                            (this.props.type === k.a.Insider && this.props.insiderType === k.c.InGameContent || this.props.insiderType === k.c.Bits) && (p = R.b.Brand), this.props.type === k.a.Insider && this.props.insiderType === k.c.InGameContent ? m = R.c.Large : this.props.insiderType === k.c.Bits && (m = R.c.Medium), e = o.createElement(R.a, {
                                imageURL: this.props.reward ? this.props.reward.imageURL : "",
                                locked: i,
                                size: m,
                                borderType: p,
                                hasInsiderPass: this.props.insiderType === k.c.InGameContent && void 0 !== this.props.hasInsiderPass ? this.props.hasInsiderPass : void 0
                            })
                        } else e = o.createElement(d.a, {
                            imageURL: this.props.reward ? this.props.reward.imageURL : "",
                            size: this.props.size,
                            isUnavailable: a,
                            needsToCheerMore: void 0 !== this.props.hasInsiderPass ? !this.props.hasInsiderPass : n || t,
                            comingSoon: r
                        });
                        return o.createElement(w.Ya, {
                            className: "esports-milestone",
                            position: w.kb.Relative,
                            display: w.X.InlineFlex
                        }, o.createElement("div", {
                            className: "esports-milestone__clickable",
                            ref: this.setContainerRef
                        }, e))
                    }, t = s.__decorate([Object(j.c)()], t)
                }(o.Component),
                B = z;
            a.d(t, !1, function() {
                return z
            }), a.d(t, "a", function() {
                return B
            })
        },
        i4ay: function(e, t, a) {
            "use strict";
            var n, i = a("mrSG"),
                r = a("q1tI"),
                s = a("/7QA"),
                o = a("yR8l"),
                l = a("f00E"),
                d = a("3CMh"),
                c = a("4h+t"),
                m = a("Ue10"),
                p = (a("aUl8"), function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return i.__extends(t, e), t.prototype.shouldComponentUpdate = function(e) {
                        return this.props.displayName !== e.displayName || this.props.rank !== e.rank || this.props.score !== e.score || this.props.secondaryName !== e.secondaryName || this.props.imageURL !== e.imageURL
                    }, t.prototype.render = function() {
                        return r.createElement(m.Ra, {
                            display: m.X.Flex,
                            alignItems: m.f.Center,
                            borderBottom: !0,
                            padding: {
                                y: 1
                            }
                        }, r.createElement("li", {
                            className: "campaign-leaderboard-row"
                        }, r.createElement(m.Qa, {
                            margin: {
                                right: 1
                            }
                        }, r.createElement(m.W, {
                            "data-test-selector": "esports-leaderboard-row-rank",
                            color: m.O.Link,
                            bold: !0
                        }, Object(s.f)(this.props.rank))), this.props.imageURL && r.createElement(m.Ya, {
                            "data-test-selector": "esports-leaderboard-row-image-url",
                            margin: {
                                right: 1
                            }
                        }, r.createElement(m.q, {
                            src: this.props.imageURL,
                            size: 30,
                            alt: this.props.displayName + " Avatar"
                        })), r.createElement(m.Ya, {
                            margin: {
                                right: 1
                            }
                        }, this.props.secondaryName && r.createElement(m.W, {
                            "data-test-selector": "esports-leaderboard-row-secondary-name",
                            color: m.O.Link,
                            transform: m.Vb.Uppercase,
                            lineHeight: m.Za.Heading
                        }, this.props.secondaryName), r.createElement(m.W, {
                            "data-test-selector": "esports-leaderboard-row-display-name",
                            type: m.Wb.H5,
                            bold: !0,
                            lineHeight: m.Za.Heading
                        }, this.props.displayName)), r.createElement(m.Ya, {
                            display: m.X.Flex,
                            margin: {
                                left: "auto"
                            }
                        }, r.createElement(m.Ya, {
                            className: "campaign-leaderboard-row__cheermote"
                        }, r.createElement(d.a, {
                            prefix: "Cheer",
                            showImage: !0,
                            showAmount: !1,
                            formattedNumber: !0,
                            bitsConfig: Object(c.a)(),
                            amount: this.props.score,
                            animated: !1,
                            size: d.b.ExtraSmall
                        })), r.createElement(m.Qa, {
                            className: "campaign-leaderboard-row__amount"
                        }, r.createElement(m.W, {
                            "data-test-selector": "esports-leaderboard-row-score",
                            lineHeight: m.Za.Body,
                            type: m.Wb.H4
                        }, Object(s.f)(this.props.score))))))
                    }, t
                }(r.Component)),
                u = (a("o5UI"), function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        return r.createElement(m.Ra, {
                            display: m.X.Flex,
                            alignItems: m.f.Center,
                            borderBottom: !0,
                            padding: {
                                y: 1,
                                left: 2
                            }
                        }, r.createElement("li", {
                            className: "campaign-leaderboard-self-row"
                        }, this.props.imageURL && r.createElement(m.Ya, {
                            "data-test-selector": "esports-leaderboard-row-image-url",
                            margin: {
                                right: 1
                            }
                        }, r.createElement(m.q, {
                            src: this.props.imageURL,
                            size: 30,
                            alt: this.props.displayName + " Avatar"
                        })), r.createElement(m.Ya, {
                            margin: {
                                right: 1
                            }
                        }, r.createElement(m.W, {
                            "data-test-selector": "esports-leaderboard-row-rank",
                            color: m.O.Link,
                            transform: m.Vb.Uppercase,
                            lineHeight: m.Za.Heading
                        }, Object(s.d)("Rank: {rank}", {
                            rank: Object(s.f)(this.props.rank)
                        }, "CampaignsLeaderboardSelfRow")), r.createElement(m.W, {
                            "data-test-selector": "esports-leaderboard-row-display-name",
                            type: m.Wb.H5,
                            bold: !0,
                            lineHeight: m.Za.Heading
                        }, this.props.displayName)), r.createElement(m.Ya, {
                            display: m.X.Flex,
                            margin: {
                                left: "auto"
                            }
                        }, r.createElement(m.Ya, {
                            className: "campaign-leaderboard-self-row__cheermote"
                        }, r.createElement(d.a, {
                            prefix: "Cheer",
                            showImage: !0,
                            showAmount: !1,
                            formattedNumber: !0,
                            bitsConfig: Object(c.a)(),
                            amount: this.props.score,
                            animated: !1,
                            size: d.b.ExtraSmall
                        })), r.createElement(m.Qa, {
                            className: "campaign-leaderboard-self-row__amount",
                            margin: {
                                right: 2
                            }
                        }, r.createElement(m.W, {
                            "data-test-selector": "esports-leaderboard-row-score",
                            lineHeight: m.Za.Body,
                            type: m.Wb.H4
                        }, Object(s.f)(this.props.score))))))
                    }, t
                }(r.PureComponent)),
                g = a("VJHF"),
                h = a("NcrI");
            a("KUJM");
            ! function(e) {
                e.AllTeams = "allTeams", e.Atlantic = "atlantic", e.Pacific = "pacific", e.EU = "eu", e.NA = "na", e.KR = "kr", e.CN = "cn"
            }(n || (n = {}));
            var f = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        showPage: 1,
                        activeTab: n.AllTeams
                    }, t.pagePipClick = function(e) {
                        var a = parseInt(e.currentTarget.dataset.pageNumber, 10);
                        t.setState({
                            showPage: a
                        })
                    }, t.tabClick = function(e) {
                        if (e.currentTarget.parentElement) {
                            var a = e.currentTarget.parentElement.getAttribute("data-tab-id") || n.AllTeams;
                            t.setState({
                                activeTab: a,
                                showPage: 1
                            })
                        }
                    }, t
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    var e = this;
                    if (Object(s.d)("Rank: {rank}", {
                            rank: 1
                        }, "CampaignsLeaderboard"), this.props.data.loading) return r.createElement(m.ab, {
                        fillContent: !0
                    });
                    var t = this.props.data.users ? this.props.data.users[0] : null,
                        a = this.props.isTeam && t ? t.tournament : null,
                        i = this.props.leaderboardRows;
                    this.props.isTeam && this.state.activeTab !== n.AllTeams && (i = this.props.leaderboardRows.filter(function(t) {
                        var n = a && a.teams.find(function(e) {
                            return !!e && e.id.toUpperCase() === t.node.entryKey.toUpperCase()
                        });
                        if (n) return n.division.toLowerCase().includes(e.state.activeTab)
                    }));
                    var o = Math.ceil(i.length / this.props.pageSize),
                        d = this.props.pageSize * (this.state.showPage - 1),
                        c = d + this.props.pageSize,
                        h = i.slice(d, c).map(function(t) {
                            var n = {
                                rank: t.node.rank,
                                displayName: "Somebody",
                                score: t.node.score
                            };
                            if (e.props.isTeam && a) {
                                var i = a.teams.find(function(e) {
                                    return !!e && e.id.toUpperCase() === t.node.entryKey.toUpperCase()
                                });
                                i && (n.displayName = i.name, n.secondaryName = i.division, n.imageURL = i.logoURL)
                            } else if (!e.props.isTeam) {
                                var r = e.props.data.users ? e.props.data.users.find(function(e) {
                                    return !!e && e.id === t.node.entryKey
                                }) : null;
                                r && r.displayName && (n.displayName = r.displayName, r.profileImageURL && (n.imageURL = r.profileImageURL))
                            }
                            return n
                        }).map(function(t) {
                            return r.createElement(p, {
                                key: "leaderboard-row-" + (e.props.isTeam ? "team" : "user") + "-" + t.rank,
                                rank: t.rank,
                                score: t.score,
                                displayName: t.displayName,
                                imageURL: t.imageURL,
                                secondaryName: e.props.hideLocale ? void 0 : t.secondaryName
                            })
                        }),
                        f = this.props.pageSize - h.length % this.props.pageSize;
                    if (f !== this.props.pageSize)
                        for (var b = 0; b < f; b++) h.push(r.createElement(m.Ya, {
                            key: "leaderboard-blank-row-" + b,
                            className: "campaign-leaderboard__blank-row"
                        }));
                    var k = [];
                    for (b = 1; b <= o; b++) {
                        var v = b === this.state.showPage ? m.r.Accent : m.r.Alt;
                        k.push(r.createElement(m.Ra, {
                            className: "campaign-leaderboard__buttons",
                            padding: 1,
                            key: "leaderboard-page-pip-" + Object(l.a)()
                        }, r.createElement("button", {
                            onClick: this.pagePipClick,
                            "data-page-number": b
                        }, r.createElement(m.Fb, {
                            border: !0,
                            padding: .5,
                            display: m.X.Block,
                            background: v,
                            borderRadius: m.x.Rounded
                        }))))
                    }
                    var y = null;
                    if (this.props.isTeam) {
                        var E = null;
                        this.props.domain === g.c ? E = r.createElement(r.Fragment, null, r.createElement(m.Gb, {
                            active: this.state.activeTab === n.NA,
                            onClick: this.tabClick,
                            "data-tab-id": n.NA
                        }, r.createElement(m.W, {
                            type: m.Wb.H4
                        }, Object(s.d)("NA", "CampaignsProgressTab"))), r.createElement(m.Gb, {
                            active: this.state.activeTab === n.EU,
                            onClick: this.tabClick,
                            "data-tab-id": n.EU
                        }, r.createElement(m.W, {
                            type: m.Wb.H4
                        }, Object(s.d)("EU", "CampaignsProgressTab"))), r.createElement(m.Gb, {
                            active: this.state.activeTab === n.KR,
                            onClick: this.tabClick,
                            "data-tab-id": n.KR
                        }, r.createElement(m.W, {
                            type: m.Wb.H4
                        }, Object(s.d)("KR", "CampaignsProgressTab"))), r.createElement(m.Gb, {
                            active: this.state.activeTab === n.CN,
                            onClick: this.tabClick,
                            "data-tab-id": n.CN
                        }, r.createElement(m.W, {
                            type: m.Wb.H4
                        }, Object(s.d)("CN", "CampaignsProgressTab")))) : this.props.domain === g.f && (E = r.createElement(r.Fragment, null, r.createElement(m.Gb, {
                            active: this.state.activeTab === n.Atlantic,
                            onClick: this.tabClick,
                            "data-tab-id": n.Atlantic
                        }, r.createElement(m.W, {
                            type: m.Wb.H4
                        }, Object(s.d)("Atlantic", "CampaignsProgressTab"))), r.createElement(m.Gb, {
                            active: this.state.activeTab === n.Pacific,
                            onClick: this.tabClick,
                            "data-tab-id": n.Pacific
                        }, r.createElement(m.W, {
                            type: m.Wb.H4
                        }, Object(s.d)("Pacific", "CampaignsProgressTab"))))), y = r.createElement(m.Ya, {
                            padding: {
                                bottom: 2
                            }
                        }, r.createElement(m.Hb, null, r.createElement(m.Gb, {
                            active: this.state.activeTab === n.AllTeams,
                            onClick: this.tabClick,
                            "data-tab-id": n.AllTeams
                        }, r.createElement(m.W, {
                            type: m.Wb.H4
                        }, Object(s.d)("All Teams", "CampaignsProgressTab"))), E))
                    }
                    var w = null;
                    if (this.props.userRow) {
                        var C = {
                                rank: this.props.userRow.rank,
                                displayName: "Somebody",
                                score: this.props.userRow.score
                            },
                            S = this.props.data.users && this.props.userRow && this.props.data.users.find(function(t) {
                                return !!t && !!e.props.userRow && t.id === e.props.userRow.entryKey
                            }) || null;
                        S && S.displayName && (C.displayName = S.displayName, S.profileImageURL && (C.imageURL = S.profileImageURL)), w = r.createElement(u, {
                            rank: C.rank,
                            score: C.score,
                            displayName: C.displayName,
                            imageURL: C.imageURL
                        })
                    }
                    return r.createElement(m.Ya, {
                        className: "campaign-leaderboard",
                        display: m.X.Flex,
                        flexDirection: m.Aa.Column,
                        justifyContent: m.Xa.Between,
                        flexGrow: 1
                    }, y, r.createElement(m.Ya, {
                        className: "campaign-leaderboard__rows"
                    }, r.createElement("ul", null, h, this.props.userRow && w)), r.createElement(m.Ya, {
                        display: m.X.Flex,
                        justifyContent: m.Xa.Center,
                        margin: {
                            top: 2
                        }
                    }, k.length > 1 && k))
                }, t = i.__decorate([Object(o.a)(h, {
                    options: function(e) {
                        return {
                            variables: {
                                userIDs: function(e) {
                                    if (e.isTeam) return [e.channelID];
                                    var t = e.leaderboardRows.map(function(e) {
                                        return e.node.entryKey
                                    });
                                    return e.userRow && (e.leaderboardRows.find(function(t) {
                                        return !!e.userRow && t.node.entryKey === e.userRow.entryKey
                                    }) || t.push(e.userRow.entryKey)), t
                                }(e),
                                isTeam: e.isTeam
                            }
                        }
                    }
                })], t)
            }(r.Component);
            a.d(t, "a", function() {
                return f
            })
        },
        jAjM: function(e, t, a) {
            "use strict";
            var n, i = a("mrSG"),
                r = a("TSYQ"),
                s = a("q1tI"),
                o = a("f00E"),
                l = a("QK1T"),
                d = a("Ue10");
            a("/2zc");
            ! function(e) {
                e[e.Default = 0] = "Default", e[e.Small = 1] = "Small", e[e.Medium = 2] = "Medium", e[e.Large = 3] = "Large"
            }(n || (n = {}));
            var c = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    var e, t, a = "esports-hexagon__mask--unavailable-" + Object(o.a)(),
                        i = "esports-hexagon__mask--cheer-more-" + Object(o.a)(),
                        c = "esports-hexagon__pattern--" + Object(o.a)();
                    this.props.isUnavailable ? (e = "url(#" + a, t = "esports-hexagon__mask--unavailable") : this.props.needsToCheerMore && (e = "url(#" + i, t = "esports-hexagon__mask--cheer-more");
                    var m = /Edge/.test(window.navigator.userAgent) ? 5 : Object(l.b)(window.navigator.userAgent) ? -25 : 0,
                        p = /Edge/.test(window.navigator.userAgent) ? -5 : Object(l.b)(window.navigator.userAgent) ? 8 : 5,
                        u = /Edge/.test(window.navigator.userAgent) ? 155 : 131,
                        g = /Edge/.test(window.navigator.userAgent) ? 90 : Object(l.b)(window.navigator.userAgent) ? 150 : 100,
                        h = Object(l.b)(window.navigator.userAgent) ? 150 : 131,
                        f = Object(l.b)(window.navigator.userAgent) ? 0 : 10,
                        b = r("esports-hexagon__svg", {
                            "esports-hexagon__svg--large": this.props.size === n.Large
                        }, {
                            "esports-hexagon__svg--small": this.props.size === n.Small
                        }, {
                            "esports-hexagon__svg--medium": this.props.size === n.Medium
                        }, {
                            "esports-hexagon__svg--small-blizzard": !this.props.comingSoon && this.props.size === n.Small
                        }),
                        k = r("esports-hexagon__svg--background", {
                            "esports-hexagon__svg--background-coming-soon": this.props.comingSoon
                        }),
                        v = r("esports-hexagon__svg--fill", {
                            "esports-hexagon__svg--fill-coming-soon": this.props.comingSoon
                        });
                    return s.createElement(d.Ya, {
                        className: "esports-hexagon",
                        display: d.X.Flex,
                        flexDirection: d.Aa.Column
                    }, s.createElement("svg", {
                        className: b,
                        viewBox: "5 0 90 131"
                    }, s.createElement("defs", null, s.createElement("pattern", {
                        id: c,
                        patternUnits: "userSpaceOnUse",
                        width: "100",
                        height: h
                    }, s.createElement("image", {
                        className: "esports-hexagon__image",
                        xlinkHref: this.props.imageURL,
                        x: m,
                        y: p,
                        width: g,
                        height: u
                    })), s.createElement("filter", {
                        id: a
                    }, s.createElement("feColorMatrix", {
                        type: "matrix",
                        values: "0.04 0 0 0 0 0 0.04 0 0 0 0 0 0.04 0 0 0 0 0 1 0"
                    })), s.createElement("filter", {
                        id: i
                    }, s.createElement("feColorMatrix", {
                        type: "matrix",
                        values: "0.12 0 0 0 0 0 0.04 0 0 0 0 0 0.68 0 0 0 0 0 1 0"
                    }))), s.createElement("polygon", {
                        className: k,
                        points: "50,2 8.042394,26.558603 8,75 50,98 92,75 92,25",
                        stroke: "none",
                        strokeWidth: "1px",
                        transform: "translate(0, 31)"
                    }), s.createElement("path", {
                        transform: "translate(0, 31)",
                        className: v,
                        d: "M49.9,99.1c-2.1,0-4.2-0.5-5.8-1.4L11.6,79c-3.3-2-5.9-6.4-5.9-10.2V31.3c0-3.8,2.6-8.3,5.9-10.2L44.2,2.4C45.8,1.5,47.8,1,50,1c2.2,0,4.3,0.5,5.8,1.4l32.5,18.7c3.3,1.9,5.9,6.5,5.7,10.3l0,37.4c0,3.8-2.6,8.3-5.9,10.2L55.8,97.7C54.1,98.6,52,99.1,49.9,99.1z M50,4c-1.7,0-3.2,0.4-4.4,1L13.1,23.7c-2.4,1.3-4.3,4.8-4.3,7.6v37.5c0,2.7,2,6.2,4.4,7.6l32.4,18.7c2.3,1.3,6.4,1.3,8.7,0l32.4-18.7c2.4-1.3,4.3-4.8,4.3-7.6V31.3c0.2-2.7-1.8-6.2-4.1-7.6l0,0L54.4,5C53.3,4.4,51.6,4,50,4z"
                    }), !this.props.comingSoon && s.createElement("polygon", {
                        className: "esports-hexagon__svg--filtered-image",
                        "data-test-selector": t,
                        filter: e,
                        points: 0 + f + ",0 " + (100 - f) + ",0 " + (100 - f) + ",131 " + (0 + f) + ",131",
                        stroke: "none",
                        strokeWidth: "1px",
                        fill: "url(#" + c + ")"
                    }), this.props.comingSoon && s.createElement("text", {
                        className: "esports-hexagon__svg--question-mark",
                        x: "38",
                        y: "97",
                        fontSize: "44",
                        fontWeight: "600"
                    }, "?"), !this.props.comingSoon && (this.props.isUnavailable || this.props.needsToCheerMore) && s.createElement("path", {
                        className: "esports-hexagon__svg--lock",
                        transform: "translate(40, 70)",
                        fill: "white",
                        d: "M7.987 6.599C7.987 5.166 8.685 4 9.997 4c1.311 0 2.009 1.166 2.009 2.599v2.412H7.987V6.599zm7.256 2.412h-1.248V6.599C13.995 4.063 12.411 2 9.997 2S5.998 4.063 5.998 6.599v2.412H4.751c-.415 0-.751.359-.751.8v7.397c0 .442.336.8.751.8h10.492c.414 0 .751-.358.751-.8V9.811c0-.441-.337-.8-.751-.8z",
                        fillRule: "evenodd"
                    })))
                }, t
            }(s.PureComponent);
            a.d(t, !1, function() {
                return "esports-hexagon__mask--unavailable"
            }), a.d(t, !1, function() {
                return "esports-hexagon__mask--cheer-more"
            }), a.d(t, !1, function() {
                return "esports-hexagon__pattern"
            }), a.d(t, "b", function() {
                return n
            }), a.d(t, "a", function() {
                return c
            })
        },
        knLa: function(e, t, a) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "CampaignsIndividualAndTeamRewards"
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
                                        value: "tournament"
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
                                                value: "rewards"
                                            },
                                            arguments: [],
                                            directives: [],
                                            selectionSet: {
                                                kind: "SelectionSet",
                                                selections: [{
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "individual"
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
                                        }]
                                    }
                                }]
                            }
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 199
                }
            };
            n.loc.source = {
                body: '#import "twilight/features/campaigns/models/reward.gql"\nquery CampaignsIndividualAndTeamRewards($channelID: ID!) {\nuser(id: $channelID) {\nid\ntournament {\nid\nrewards {\nindividual {\n...reward\n}\n}\n}\n}\n}',
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            var i = {};
            n.definitions = n.definitions.concat(function(e) {
                return e.filter(function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var t = e.name.value;
                    return !i[t] && (i[t] = !0, !0)
                })
            }(a("VK0B").definitions)), e.exports = n
        },
        ktVs: function(e, t, a) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "CampaignsUserLeaderboard"
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
                                        value: "tournament"
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
                                                value: "globalLeaderboard"
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
                                                    kind: "FragmentSpread",
                                                    name: {
                                                        kind: "Name",
                                                        value: "leaderboardItem"
                                                    },
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
                                                        value: "globalLeaderboardItem"
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
                                                                value: "entryKey"
                                                            },
                                                            arguments: [],
                                                            directives: []
                                                        }, {
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "score"
                                                            },
                                                            arguments: [],
                                                            directives: []
                                                        }, {
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "rank"
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
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 274
                }
            };
            n.loc.source = {
                body: '#import "twilight/features/bits/models/bits-leaderboard-item-fragment.gql"\nquery CampaignsUserLeaderboard($channelID: ID!) {\nuser(id: $channelID) {\nid\ntournament {\nid\nglobalLeaderboard {\nid\n...leaderboardItem\n}\nself {\nglobalLeaderboardItem {\nid\nentryKey\nscore\nrank\n}\n}\n}\n}\n}',
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            var i = {};
            n.definitions = n.definitions.concat(function(e) {
                return e.filter(function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var t = e.name.value;
                    return !i[t] && (i[t] = !0, !0)
                })
            }(a("fhkr").definitions)), e.exports = n
        },
        nCSL: function(e, t, a) {},
        o5UI: function(e, t, a) {},
        qGAq: function(e, t, a) {},
        qyxT: function(e, t, a) {
            "use strict";

            function n(e) {
                for (var t = e.length - 1; t > 0; t--) {
                    var a = Math.floor(Math.random() * (t + 1)),
                        n = e[t];
                    e[t] = e[a], e[a] = n
                }
                return e
            }
            a.d(t, "a", function() {
                return n
            })
        },
        "rC/K": function(e, t, a) {
            "use strict";
            var n;
            a.d(t, "a", function() {
                    return n
                }),
                function(e) {
                    e.Individual = "INDIVIDUAL", e.Team = "TEAM", e.Global = "GLOBAL", e.Insider = "INSIDER", e.Collection = "COLLECTION"
                }(n || (n = {}))
        },
        uLiP: function(e, t, a) {
            "use strict";
            var n = a("mrSG"),
                i = a("TSYQ"),
                r = a("q1tI"),
                s = a("/7QA"),
                o = a("yR8l"),
                l = a("5zXJ"),
                d = a("jAjM"),
                c = a("WlPE"),
                m = a("Ue10"),
                p = (a("PvlP"), function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return n.__extends(t, e), t.prototype.render = function() {
                        return r.createElement(m.Ya, {
                            className: "insider-pass-full-skin-reward",
                            padding: {
                                x: 1
                            },
                            display: m.X.Flex,
                            flexDirection: m.Aa.Column
                        }, r.createElement("img", {
                            className: "insider-pass-full-skin-reward__image",
                            src: this.props.imageURL
                        }), r.createElement(m.Ya, {
                            textAlign: m.Sb.Center
                        }, r.createElement(m.W, {
                            fontSize: m.Ca.Size4,
                            bold: !0
                        }, this.props.name)), r.createElement(m.Ya, {
                            textAlign: m.Sb.Center
                        }, r.createElement(m.W, {
                            color: m.O.Alt2
                        }, this.props.subText)))
                    }, t
                }(r.PureComponent)),
                u = a("YkUe"),
                g = a("hRrL"),
                h = a("7TMk"),
                f = (a("nCSL"), "rewards-purchase-owl2018-playerspack"),
                b = "rewards-purchase-owl2018-lucio-ig-emote",
                k = {
                    McCree: l.c + "/owl-2017/global-rewards/full-skin/mccree.png",
                    Moira: l.c + "/owl-2017/global-rewards/full-skin/moira.png",
                    "Soldier: 76": l.c + "/owl-2017/global-rewards/full-skin/soldier-76.png"
                },
                v = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return n.__extends(t, e), t.prototype.render = function() {
                        if (!this.props.data || this.props.data.loading) return r.createElement(m.ab, null);
                        if (this.props.data && this.props.data.error || !this.props.data.user || !this.props.data.user.tournament || !this.props.data.user.tournament.rewards) return null;
                        var e = this.props.insiderPurchaseState === u.a.PostPurchase,
                            t = i("insider-pass-rewards__item", {
                                "insider-pass-rewards__item--post-purchase": e
                            }),
                            a = !!this.props.data.user.tournament.rewards.insider.heroSkins.find(function(e) {
                                return e.id === f
                            }),
                            n = !!this.props.data.user.tournament.rewards.insider.heroSkins.find(function(e) {
                                return "rewards-purchase-owl2018-allstars" === e.id
                            }),
                            o = this.props.data.user.tournament.rewards.insider.heroSkins.find(function(e) {
                                return e.id === b
                            }) || null,
                            l = [];
                        if (this.props.insiderPurchaseState === u.a.PrePurchase) l = this.props.data.user && this.props.data.user.tournament && this.props.data.user.tournament.rewards ? this.props.data.user.tournament.rewards.insider.heroSkins.filter(function(e) {
                            return e.id !== f && e.id !== b && "rewards-purchase-owl2018-allstars" !== e.id
                        }).map(function(e) {
                            return r.createElement(p, {
                                key: e.name,
                                name: e.name,
                                subText: "OWL Skin",
                                imageURL: k[e.name]
                            })
                        }) : [];
                        else {
                            var h = this.props.data.user.tournament.rewards.insider.heroSkins.filter(function(e) {
                                return e.id !== f && "rewards-purchase-owl2018-allstars" !== e.id
                            });
                            o && n && (h = h.filter(function(e) {
                                return e.id !== b
                            })), l = h.map(function(e) {
                                return r.createElement(m.Ya, {
                                    className: t,
                                    padding: {
                                        x: 3
                                    },
                                    key: e.name
                                }, r.createElement(d.a, {
                                    imageURL: e.imageURL,
                                    size: d.b.Large
                                }), r.createElement(m.Ya, {
                                    display: m.X.Flex,
                                    flexDirection: m.Aa.Column,
                                    alignItems: m.f.Center,
                                    padding: {
                                        top: 1
                                    }
                                }, r.createElement(m.W, {
                                    fontSize: m.Ca.Size4,
                                    noWrap: !0,
                                    bold: !0
                                }, e.name), r.createElement(m.W, {
                                    noWrap: !0,
                                    color: m.O.Alt2
                                }, e.description)))
                            })
                        }
                        var v = this.props.data.user.tournament.rewards.insider.inGameContent.map(function(a) {
                                return r.createElement(m.Ya, {
                                    className: t,
                                    "data-test-selector": "in-game-content-selector",
                                    padding: {
                                        x: 1
                                    },
                                    key: a.name,
                                    textAlign: m.Sb.Center
                                }, r.createElement(c.a, {
                                    imageURL: a.imageURL,
                                    size: e ? c.c.Large : c.c.Medium,
                                    borderType: e ? c.b.Brand : c.b.Default
                                }), r.createElement(m.Ya, {
                                    display: m.X.Flex,
                                    flexDirection: m.Aa.Column,
                                    alignItems: m.f.Center,
                                    padding: {
                                        top: 1
                                    }
                                }, r.createElement(m.W, {
                                    fontSize: m.Ca.Size5,
                                    noWrap: !0,
                                    bold: !0
                                }, a.name)))
                            }),
                            y = e && this.props.blizzardRewardsAvailable,
                            E = this.props.data.user.tournament.rewards.insider,
                            w = E.heroSkins.concat(E.inGameContent).some(function(e) {
                                return e.canBeFulfilled
                            });
                        return r.createElement(m.Ya, {
                            className: "insider-pass-rewards",
                            display: m.X.Flex,
                            flexDirection: m.Aa.Column,
                            padding: {
                                y: 3
                            },
                            textAlign: m.Sb.Center
                        }, r.createElement(m.W, {
                            fontSize: m.Ca.Size3,
                            color: m.O.Link,
                            bold: !0
                        }, Object(s.d)("Overwatch Content with the All-Access Pass", "CampaignsInsiderRewards")), y && !w && r.createElement(m.W, {
                            fontSize: m.Ca.Size4
                        }, Object(s.d)("All in-game rewards have been claimed to your Blizzard account", "CampaignsInsiderRewards")), y && w && r.createElement(m.Ya, {
                            display: m.X.Flex,
                            flexDirection: m.Aa.Row,
                            flexWrap: m.Ba.Wrap,
                            justifyContent: m.Xa.Center,
                            padding: {
                                y: 1
                            }
                        }, r.createElement(g.a, {
                            tournamentID: this.props.data.user.tournament.id,
                            enabled: !0,
                            inGame: !0
                        })), !y && r.createElement(m.W, {
                            fontSize: m.Ca.Size4
                        }, Object(s.d)("A Blizzard account link is required to redeem in-game rewards", "CampaignsInsiderRewards")), this.props.insiderPurchaseState === u.a.PostPurchase && o && n && r.createElement(m.Ja, null, r.createElement(m.P, {
                            cols: {
                                default: 12,
                                xl: 6
                            }
                        }, this.renderAllstarsPack()), r.createElement(m.P, {
                            cols: {
                                default: 12,
                                xl: 6
                            }
                        }, this.renderLucio(o))), a && this.renderPlayersPack(), r.createElement(m.Ya, {
                            display: m.X.Flex,
                            flexDirection: e ? m.Aa.Column : m.Aa.Row,
                            flexWrap: m.Ba.Wrap,
                            justifyContent: m.Xa.Center,
                            alignItems: m.f.Stretch,
                            padding: {
                                y: 2
                            }
                        }, r.createElement(m.Ya, {
                            display: m.X.Flex,
                            flexWrap: m.Ba.Wrap,
                            justifyContent: m.Xa.Center,
                            alignItems: m.f.Center
                        }, l), r.createElement(m.Ya, {
                            display: m.X.Flex,
                            flexWrap: m.Ba.Wrap,
                            justifyContent: m.Xa.Center,
                            alignItems: m.f.Center,
                            padding: 2
                        }, v)))
                    }, t.prototype.renderPlayersPack = function() {
                        return r.createElement(m.Ya, {
                            display: m.X.Flex,
                            justifyContent: m.Xa.Center,
                            padding: {
                                left: 1,
                                right: 1
                            }
                        }, r.createElement(m.Fb, {
                            className: "insider-pass-rewards__players-pack",
                            textAlign: m.Sb.Center,
                            fullWidth: !0
                        }, r.createElement(m.S, {
                            className: "insider-pass-rewards__players-pack__image",
                            src: l.c + "/owl-2017/insider-test/owl-igc-playerspack.png",
                            alt: Object(s.d)("The Players Pack Skins", "CampaignsInsiderRewards")
                        }), r.createElement(m.Ya, {
                            display: m.X.Flex,
                            flexDirection: m.Aa.Column,
                            alignItems: m.f.Center,
                            padding: {
                                top: 1,
                                bottom: 1
                            }
                        }, r.createElement(m.W, {
                            fontSize: m.Ca.Size4,
                            noWrap: !0,
                            bold: !0
                        }, Object(s.d)("The Players Pack", "CampaignsInsiderRewards")), r.createElement(m.W, {
                            fontSize: m.Ca.Size5,
                            bold: !0
                        }, Object(s.d)("D.Va, Ana, Zarya, Genji, Sombra, Lucio, Widowmaker, Orisa, Winston, Reinhardt, Zenyatta, Junkrat", "CampaignsInsiderRewards")), this.renderFormattedOwlSkinsText())))
                    }, t.prototype.renderAllstarsPack = function() {
                        return r.createElement(m.Ya, {
                            display: m.X.Flex,
                            justifyContent: m.Xa.Center,
                            padding: {
                                left: 1,
                                right: 1,
                                bottom: 2,
                                top: 2
                            }
                        }, r.createElement(m.Fb, {
                            className: "insider-pass-rewards__new-item",
                            textAlign: m.Sb.Center,
                            fullWidth: !0
                        }, r.createElement(m.S, {
                            className: "insider-pass-rewards__new-item__image",
                            src: l.c + "/owl-2017/insider-test/owl-igc-allstars-pack.png",
                            alt: Object(s.d)("The All Stars Pack Skins", "CampaignsInsiderRewards")
                        }), r.createElement(m.Ya, {
                            display: m.X.Flex,
                            flexDirection: m.Aa.Column,
                            alignItems: m.f.Center,
                            padding: {
                                top: 1,
                                bottom: 1
                            }
                        }, r.createElement(m.W, {
                            fontSize: m.Ca.Size4,
                            noWrap: !0,
                            bold: !0
                        }, Object(s.d)("The All-Stars Pack", "CampaignsInsiderRewards")), r.createElement(m.W, {
                            fontSize: m.Ca.Size5,
                            bold: !0
                        }, Object(s.d)("Mercy, Brigitte, Moira, Reinhardt, D.Va, Tracer", "CampaignsInsiderRewards")), this.renderFormattedOwlSkinsText())))
                    }, t.prototype.renderLucio = function(e) {
                        if (e) return r.createElement(m.Ya, {
                            display: m.X.Flex,
                            justifyContent: m.Xa.Center,
                            padding: {
                                left: 1,
                                right: 1,
                                bottom: 2,
                                top: 2
                            }
                        }, r.createElement(m.Fb, {
                            className: "insider-pass-rewards__new-item",
                            textAlign: m.Sb.Center,
                            fullWidth: !0
                        }, r.createElement(m.S, {
                            className: "insider-pass-rewards__new-item__image",
                            src: l.c + "/owl-2017/insider-test/lucio-emote-static-alt.png",
                            alt: e.name
                        }), r.createElement(m.Ya, {
                            display: m.X.Flex,
                            flexDirection: m.Aa.Column,
                            alignItems: m.f.Center,
                            padding: {
                                top: 1,
                                bottom: 1
                            }
                        }, r.createElement(m.W, {
                            fontSize: m.Ca.Size4,
                            noWrap: !0,
                            bold: !0
                        }, e.name), r.createElement(m.W, {
                            noWrap: !0,
                            color: m.O.Alt2
                        }, e.description))))
                    }, t.prototype.renderFormattedOwlSkinsText = function() {
                        var e = Object(s.d)("OWL Skins", "CampaignsInsiderRewards");
                        return r.createElement(m.W, {
                            noWrap: !0,
                            color: m.O.Alt2
                        }, e)
                    }, t = n.__decorate([Object(o.a)(h, {
                        options: function(e) {
                            return {
                                variables: {
                                    channelID: e.channelID
                                }
                            }
                        }
                    })], t)
                }(r.PureComponent);
            a.d(t, !1, function() {
                return "in-game-content-selector"
            }), a.d(t, "d", function() {
                return f
            }), a.d(t, "c", function() {
                return b
            }), a.d(t, "a", function() {
                return "rewards-purchase-owl2018-allstars"
            }), a.d(t, "b", function() {
                return v
            })
        }
    }
]);