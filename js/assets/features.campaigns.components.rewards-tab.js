(window.webpackJsonp = window.webpackJsonp || []).push([
    [123], {
        "+z1J": function(e, t, n) {
            "use strict";
            var i, r, s;
            n.d(t, "a", function() {
                    return i
                }), n.d(t, "b", function() {
                    return r
                }), n.d(t, "c", function() {
                    return s
                }),
                function(e) {
                    e.Blizzard = "blizzard", e.Twitch = "twitch", e.Insider = "insider"
                }(i || (i = {})),
                function(e) {
                    e.Hero = "hero", e.Team = "team", e.Insider = "insider", e.Cheerbomb = "cheerbomb"
                }(r || (r = {})),
                function(e) {
                    e.HeroSkin = "hero-skin", e.InGameContent = "in-game-content", e.SubEmote = "emote", e.Badge = "badge", e.Bits = "bits"
                }(s || (s = {}))
        },
        "/2zc": function(e, t, n) {},
        "/5u6": function(e, t, n) {
            "use strict";
            var i;
            n.d(t, "a", function() {
                    return i
                }),
                function(e) {
                    e.Individual = "INDIVIDUAL", e.Team = "TEAM", e.Global = "GLOBAL", e.Insider = "INSIDER"
                }(i || (i = {}))
        },
        "0/kz": function(e, t, n) {},
        "6mxx": function(e, t, n) {},
        "7QWs": function(e, t) {
            var n = {
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
            n.loc.source = {
                body: "mutation ClaimAllRewards($input: ClaimAllRewardsInput!) {\nclaimAllRewards(input: $input) {\ndomain\nrewards {\nid\nname\ndescription\ntype\nisEntitled\ncanBeFulfilled\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        "7TMk": function(e, t) {
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
                                                                        value: "isEntitled"
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
                                                                        value: "isEntitled"
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
                    end: 312
                }
            };
            n.loc.source = {
                body: "query InsiderPassTabRewards($channelID: ID!) {\nuser(id: $channelID) {\nid\ntournament {\nid\nrewards {\ninsider {\nheroSkins {\nid\nname\ntype\nimageURL\ndescription\ncanBeFulfilled\nisEntitled\nisPrimeOnly\nquantity\n}\ninGameContent {\nid\nname\ntype\nimageURL\ndescription\ncanBeFulfilled\nisEntitled\nisPrimeOnly\nquantity\n}\n}\n}\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        "81Gi": function(e, t, n) {
            "use strict";
            var i = n("q1tI"),
                r = (n("bt+X"), function() {
                    return i.createElement("svg", {
                        className: "esports-participation-threshold-incomplete",
                        viewBox: "0 0 24 24"
                    }, i.createElement("defs", null, i.createElement("circle", {
                        id: "path-participation-threshold-incomplete-circle",
                        cx: "12",
                        cy: "12",
                        r: "12"
                    })), i.createElement("g", {
                        id: "Symbols",
                        stroke: "none",
                        strokeWidth: "1",
                        fill: "none",
                        fillRule: "evenodd"
                    }, i.createElement("g", {
                        id: "bits/bit-checkpoint-alt",
                        transform: "translate(-4.000000, -4.000000)"
                    }, i.createElement("g", {
                        id: "Group",
                        transform: "translate(4.000000, 4.000000)"
                    }, i.createElement("g", {
                        id: "Oval-Copy-6"
                    }, i.createElement("use", {
                        fill: "#FFFFFF",
                        fillRule: "evenodd",
                        xlinkHref: "#path-participation-threshold-incomplete-circle"
                    }), i.createElement("circle", {
                        stroke: "#CCBEE6",
                        strokeWidth: "2",
                        cx: "12",
                        cy: "12",
                        r: "11"
                    })), i.createElement("g", {
                        id: "Bits/glyph-outline-sm",
                        opacity: "0.400000006",
                        transform: "translate(7.000000, 6.000000)",
                        fill: "#6E4AAD",
                        stroke: "#6E4AAD",
                        strokeWidth: "0.5"
                    }, i.createElement("path", {
                        d: "M4.99965672,12 C4.9239113,12 4.84816588,11.977818 4.78016715,11.9353025 L0.211341127,9.03130897 C0.112355634,8.96938422 0.0409139311,8.86679247 0.0133701419,8.74756422 C-0.0150343907,8.62833596 0.00218047755,8.50171371 0.0615717729,8.39634921 L4.6303978,0.209342627 C4.78619236,-0.0697808757 5.21312109,-0.0697808757 5.36891565,0.209342627 L9.93860242,8.39634921 C9.99713297,8.50171371 10.0152086,8.62833596 9.98680405,8.74756422 C9.95839952,8.86679247 9.88695782,8.96938422 9.78883307,9.03130897 L5.21828555,11.9353025 C5.15114757,11.977818 5.07540214,12 4.99965672,12 Z M1.78824571,7.10038909 L4.99965672,1.34617014 L8.2119993,7.10081295 L5.19823023,4.92563446 C5.07342244,4.85631571 4.92537457,4.85631571 4.80142752,4.92563446 L1.78824571,7.10038909 Z M8.76932756,8.60565931 L4.99965672,11.0008857 L1.23048631,8.60545901 L4.9993985,5.85635422 L8.76932756,8.60565931 Z",
                        id: "Icon-Copy"
                    }))))))
                });
            n.d(t, "a", function() {
                return r
            })
        },
        "8Ver": function(e, t, n) {
            var i = {
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
            i.loc.source = {
                body: '#import "twilight/features/campaigns/models/reward.gql"\nfragment milestone on Milestone {\nid\nstartDate\nendDate\nthreshold\nparticipationThreshold\nobjectiveTag\nrewards {\n...reward\n}\n}',
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            var r = {};
            i.definitions = i.definitions.concat(function(e) {
                return e.filter(function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var t = e.name.value;
                    return !r[t] && (r[t] = !0, !0)
                })
            }(n("VK0B").definitions)), e.exports = i
        },
        F30f: function(e, t, n) {},
        JPbf: function(e, t, n) {},
        PvlP: function(e, t, n) {},
        Sk0q: function(e, t, n) {
            "use strict";
            n.d(t, "b", function() {
                return s
            }), n.d(t, "a", function() {
                return a
            });
            var i = n("/5u6"),
                r = n("OpME");

            function s(e, t) {
                return e.emotes ? Object(r.b)(e.emotes).map(function(e) {
                    var n = "",
                        r = e.srcSet.split(",").find(function(e) {
                            return e.includes("3.0x")
                        });
                    return r && (n = r.trim().split(" ")[0]), {
                        id: e.id,
                        name: e.displayName,
                        type: i.a.Insider,
                        description: "",
                        imageURL: n,
                        isEntitled: t,
                        canBeFulfilled: !1,
                        entitledQuantity: t ? 1 : 0,
                        canBeFulfilledQuantity: 0,
                        isPrimeOnly: !1,
                        quantity: 1
                    }
                }) : []
            }

            function a(e, t) {
                return {
                    id: e.id,
                    type: i.a.Insider,
                    name: e.title,
                    description: e.title,
                    canBeFulfilled: !1,
                    isEntitled: t,
                    entitledQuantity: t ? 1 : 0,
                    canBeFulfilledQuantity: 0,
                    imageURL: e.image4x,
                    isPrimeOnly: !1,
                    quantity: 1
                }
            }
        },
        UOrd: function(e, t) {
            var n = {
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
            n.loc.source = {
                body: "mutation ClaimMilestone($input: ClaimMilestoneInput!) {\nclaimMilestone(input: $input) {\nmilestoneID\nrewards {\nid\nname\ndescription\ntype\nisEntitled\ncanBeFulfilled\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        VK0B: function(e, t) {
            var n = {
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
            n.loc.source = {
                body: "fragment reward on TournamentReward {\nid\nname\ntype\nimageURL\ndescription\ncanBeFulfilled\ncanBeFulfilledQuantity\nisEntitled\nentitledQuantity\nisPrimeOnly\nquantity\nrarity\nmetadata {\nsubType\nisPending\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        WlPE: function(e, t, n) {
            "use strict";
            var i, r, s = n("mrSG"),
                a = n("TSYQ"),
                o = n("q1tI"),
                l = n("f00E"),
                d = n("Ue10");
            n("F30f");
            ! function(e) {
                e.Default = "default", e.Medium = "medium", e.Large = "large"
            }(i || (i = {})),
            function(e) {
                e.Default = "default", e.Brand = "brand"
            }(r || (r = {}));
            var p = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return s.__extends(t, e), t.prototype.render = function() {
                    var e = "esports-square__mask--locked-" + Object(l.a)(),
                        t = "esports-square__mask--locked-" + Object(l.a)(),
                        n = void 0,
                        s = void 0;
                    this.props.locked ? (n = "esports-square__mask--locked", s = "url(#" + e + ")") : void 0 === this.props.hasInsiderPass || this.props.hasInsiderPass || (n = "esports-square__mask--locked", s = "url(#" + t + ")");
                    var p = a({
                            "esports-square--border": !this.props.noBorder
                        }, {
                            "esports-square--border__brand": this.props.borderType === r.Brand
                        }, {
                            "esports-square--border__none": this.props.noBorder
                        }, {
                            "esports-square--large": this.props.size === i.Large
                        }, {
                            "esports-square--medium": this.props.size === i.Medium
                        }, {
                            "esports-square--default": this.props.size === i.Default
                        }, {
                            "esports-square": !0
                        }),
                        c = a({
                            "esports-square__image--large": this.props.size === i.Large
                        }, {
                            "esports-square__image--medium": this.props.size === i.Medium
                        }, {
                            "esports-square__image--default": this.props.size === i.Default
                        }, {
                            "esports-square__image": !0
                        }),
                        m = a({
                            "esports-square__svg--large": this.props.size === i.Large
                        }, {
                            "esports-square__svg--medium": this.props.size === i.Medium
                        }, {
                            "esports-square__svg": !0
                        });
                    return o.createElement(d.yb, {
                        "data-test-selector": n,
                        className: p,
                        textAlign: d.Kb.Center,
                        position: d.eb.Relative,
                        borderRadius: d.x.Large,
                        overflow: d.Za.Hidden,
                        background: d.r.Base,
                        display: d.X.InlineBlock
                    }, o.createElement("img", {
                        className: c,
                        src: this.props.imageURL,
                        alt: "",
                        style: {
                            filter: s
                        }
                    }), o.createElement("svg", {
                        className: m,
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
            n.d(t, !1, function() {
                return "esports-square__mask--locked"
            }), n.d(t, !1, function() {
                return "esports-square__mask--locked"
            }), n.d(t, !1, function() {
                return "esports-square__pattern"
            }), n.d(t, "c", function() {
                return i
            }), n.d(t, "b", function() {
                return r
            }), n.d(t, "a", function() {
                return p
            })
        },
        Yg6M: function(e, t, n) {},
        YkUe: function(e, t, n) {
            "use strict";
            var i;
            n.d(t, "a", function() {
                    return i
                }),
                function(e) {
                    e.PostPurchase = "post-purchase", e.PrePurchase = "pre-purchase"
                }(i || (i = {}))
        },
        Zqs6: function(e, t, n) {},
        "bt+X": function(e, t, n) {},
        bwyL: function(e, t, n) {
            var i = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "CampaignsGetRewards"
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
                                        value: "broadcastBadges"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "FragmentSpread",
                                            name: {
                                                kind: "Name",
                                                value: "badge"
                                            },
                                            directives: []
                                        }]
                                    }
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
                                                value: "price"
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
                                                value: "emoteSetID"
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
                                                value: "name"
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
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "token"
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
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "giftPromotion"
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
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "purchasedWithPrime"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "tier"
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
                                                        value: "global"
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
                                                }, {
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
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "cheerbomb"
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
                                                        }, {
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "badges"
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
                                                                value: "bits"
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
                    end: 896
                }
            };
            i.loc.source = {
                body: '#import "twilight/features/badges/models/badge-fragment.gql"\n#import "twilight/features/campaigns/models/milestone.gql"\n#import "twilight/features/campaigns/models/reward.gql"\nquery CampaignsGetRewards($channelID: ID!) {\nuser(id: $channelID) {\nid\nbroadcastBadges {\n...badge\n}\nsubscriptionProducts {\nid\nprice\nurl\nemoteSetID\ndisplayName\nname\nemotes {\nid\ntoken\n}\nself {\npromotion {\nnewPrice\noldPrice\ndiscountType\ndiscountValue\n}\n}\ngiftPromotion {\nnewPrice\noldPrice\ndiscountType\ndiscountValue\n}\n}\nself {\nsubscriptionBenefit {\nid\npurchasedWithPrime\ntier\n}\nisModerator\n}\ntournament {\nid\nprogress {\namount\nmilestones {\n...milestone\n}\n}\nself {\nprogress {\namount\nmilestones {\n...milestone\n}\n}\n}\nrewards {\nglobal {\n...reward\n}\nteam {\n...reward\n}\nindividual {\n...reward\n}\ncheerbomb {\n...reward\n}\ninsider {\nheroSkins {\n...reward\n}\ninGameContent {\n...reward\n}\nbadges {\n...reward\n}\nbits {\n...reward\n}\n}\n}\n}\n}\n}',
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            var r = {};

            function s(e) {
                return e.filter(function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var t = e.name.value;
                    return !r[t] && (r[t] = !0, !0)
                })
            }
            i.definitions = i.definitions.concat(s(n("IKE4").definitions)), i.definitions = i.definitions.concat(s(n("8Ver").definitions)), i.definitions = i.definitions.concat(s(n("VK0B").definitions)), e.exports = i
        },
        cUCe: function(e, t, n) {
            "use strict";
            var i = n("q1tI"),
                r = (n("Yg6M"), function() {
                    return i.createElement("svg", {
                        className: "esports-participation-threshold-complete",
                        viewBox: "0 0 22 22"
                    }, i.createElement("defs", null, i.createElement("path", {
                        d: "M8.42897991,15.9999799 C8.18397991,15.9999799 7.93897991,15.9099799 7.74597991,15.7309799 L4.31797991,12.5309799 C3.91397991,12.1539799 3.89197991,11.5209799 4.26897991,11.1169799 C4.64697991,10.7129799 5.27997991,10.6919799 5.68197991,11.0679799 L8.42897991,13.6319799 L16.3179799,6.26897991 C16.7229799,5.89197991 17.3549799,5.91397991 17.7319799,6.31797991 C18.1079799,6.72097991 18.0859799,7.35397991 17.6829799,7.73097991 L9.11197991,15.7309799 C8.91897991,15.9099799 8.67397991,15.9999799 8.42897991,15.9999799",
                        id: "path-participation-threshold-complete"
                    })), i.createElement("g", {
                        id: "Symbols",
                        stroke: "none",
                        strokeWidth: "1",
                        fill: "none",
                        fillRule: "evenodd"
                    }, i.createElement("g", {
                        id: "bits/bit-checkpoint-done",
                        transform: "translate(-5.000000, -5.000000)"
                    }, i.createElement("g", {
                        id: "Group",
                        transform: "translate(5.000000, 5.000000)"
                    }, i.createElement("circle", {
                        id: "Oval-Copy-6",
                        fill: "#6441A4",
                        cx: "11",
                        cy: "11",
                        r: "11"
                    }), i.createElement("mask", {
                        id: "mask-2",
                        fill: "white"
                    }, i.createElement("use", {
                        xlinkHref: "#path-participation-threshold-complete"
                    })), i.createElement("use", {
                        id: "Mask",
                        fill: "#FFFFFF",
                        xlinkHref: "#path-participation-threshold-complete"
                    })))))
                });
            n.d(t, "a", function() {
                return r
            })
        },
        hRrL: function(e, t, n) {
            "use strict";
            var i = n("/MKj"),
                r = n("kRBY"),
                s = n("mrSG"),
                a = n("q1tI"),
                o = n("oJmH"),
                l = n("/7QA"),
                d = n("yR8l"),
                p = n("Ue10"),
                c = n("7QWs"),
                m = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            error: !1
                        }, t.claimAllRewards = function() {
                            return s.__awaiter(t, void 0, void 0, function() {
                                return s.__generator(this, function(e) {
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
                    return s.__extends(t, e), t.prototype.render = function() {
                        var e = this.props.inGame ? Object(l.d)("Redeem All In-Game Rewards", "CampaignsRewardsTab") : Object(l.d)("Redeem All", "CampaignsRewardsTab");
                        return a.createElement(p.Wa, {
                            className: "esports-claim-all-rewards-button",
                            display: p.X.InlineFlex,
                            margin: {
                                right: 1
                            },
                            verticalAlign: p.Yb.Bottom
                        }, a.createElement(p.z, {
                            "data-test-selector": "esports-claim-all-button",
                            onClick: this.claimAllRewards,
                            disabled: !this.props.enabled
                        }, this.state.error && a.createElement(p.nb, {
                            "data-test-selector": "esports-claim-all-button-error",
                            asset: p.ob.DeadGlitch
                        }), !this.state.error && e))
                    }, t
                }(a.Component),
                u = Object(o.compose)(Object(d.a)(c, {
                    name: "claimAllRewards"
                }))(m);
            var h = Object(i.connect)(function(e) {
                return {
                    user: Object(r.e)(e)
                }
            })(u);
            n.d(t, "a", function() {
                return h
            })
        },
        huSm: function(e, t, n) {
            "use strict";
            var i, r, s, a = n("mrSG"),
                o = n("q1tI"),
                l = n("5zXJ"),
                d = n("jAjM"),
                p = n("/MKj"),
                c = n("kRBY"),
                m = n("yR8l"),
                u = n("/7QA"),
                h = n("fvjX"),
                g = n("1/iK"),
                f = n("y5D0"),
                v = n("+z1J");
            ! function(e) {
                e.RedeemMilestoneButton = "milestone_balloon__redeem-milestone-button", e.Redeemed = "milestone_button_redeemed-milestone", e.MilestoneRestricted = "milestone_balloon_restricted", e.CheerNowButton = "milestone_balloon_cheer_now", e.LoginSignup = "milestone_balloon_login_signup", e.BuyInsiderPass = "milestone-balloon-buy-insider-pass", e.TryPrime = "milestone-balloon-try-prime"
            }(i || (i = {})),
            function(e) {
                e.Description = "milestone-balloon-body-description"
            }(r || (r = {})),
            function(e) {
                e.RewardType = "milestone-balloon-header-reward-type", e.MilestoneRestricted = "milestone-balloon-header-milestone-restricted", e.MilestoneLocked = "milestone-balloon-header-milestone-locked", e.MilestoneUnlocked = "milestone-balloon-header-milestone-unlocked"
            }(s || (s = {}));
            var b = n("DnOo"),
                k = n("W8Fi"),
                w = n("RVih"),
                y = n("Ue10"),
                E = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.handleSubAction = function() {}, t
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        var e = null,
                            t = this.props.type === v.a.Blizzard || this.props.insiderType === v.c.InGameContent,
                            n = Object(u.d)("Redeem", "CampaignsMilestoneBalloon");
                        if (this.props.reward.isEntitled) e = o.createElement(y.Wa, {
                            display: y.X.Flex,
                            className: "esports-milestone-balloon__redeemed",
                            "data-test-selector": i.Redeemed,
                            padding: {
                                top: 1
                            }
                        }, o.createElement(y.Wa, {
                            padding: {
                                right: .5
                            }
                        }, o.createElement(y.nb, {
                            asset: y.ob.Check,
                            type: y.pb.Success
                        })), o.createElement(y.W, null, Object(u.d)("Redeemed", "CampaignsMilestoneBalloon")));
                        else if (t && this.props.isRestrictedBlizzardAccount) e = o.createElement(y.Wa, {
                            display: y.X.Flex,
                            "data-test-selector": i.MilestoneRestricted
                        }, o.createElement(y.W, {
                            color: y.O.Error
                        }, Object(u.d)("Reward unavailable", "CampaignsMilestoneBalloon")));
                        else if (this.props.isClaimable) t ? e = void 0 === this.props.isBlizzardAccountLinked || this.props.isBlizzardAccountLinked ? o.createElement(y.z, {
                            onClick: this.props.claimMilestone,
                            disabled: this.props.isRestrictedBlizzardAccount,
                            "data-test-selector": i.RedeemMilestoneButton
                        }, n) : o.createElement(y.Wa, null, o.createElement(y.W, null, Object(u.d)("Link your Blizzard Account to use in-game!", "CampaignsMilestoneBalloon"))) : this.props.insiderType === v.c.Bits && (e = o.createElement(y.z, {
                            onClick: this.props.claimMilestone,
                            "data-test-selector": i.RedeemMilestoneButton
                        }, n));
                        else if (!this.props.hasInsiderPass && this.props.subscriptionProducts && this.props.subscriptionProducts.length > 0) {
                            var r = this.props.subscriptionProducts[0].price;
                            Object(k.g)(this.props.subscriptionProducts) && (r = Object(k.c)(this.props.subscriptionProducts[0])), e = o.createElement(y.Wa, {
                                display: y.X.Flex
                            }, o.createElement(y.Wa, {
                                margin: {
                                    right: 1,
                                    top: 1
                                }
                            }, o.createElement(b.a, {
                                isSubbedToTier: !1,
                                tierPrice: r,
                                "data-a-target": "tier1-subscribe-button",
                                handleSubAction: this.handleSubAction,
                                productName: this.props.subscriptionProducts[0].name,
                                url: this.props.subscriptionProducts[0].url,
                                isEsportChannel: !0
                            })))
                        } else e = this.props.reward.isPrimeOnly ? o.createElement(y.z, {
                            linkTo: u.a.tryPrimeURI,
                            targetBlank: !0,
                            "data-test-selector": i.TryPrime
                        }, Object(u.d)("Get Twitch Prime", "CampaignsMilestoneBalloon")) : this.props.user ? o.createElement(y.z, {
                            onClick: this.props.openBitsCard,
                            "data-test-selector": i.CheerNowButton
                        }, Object(u.d)("Cheer now", "CampaignsMilestoneBalloon")) : o.createElement(y.Wa, {
                            "data-test-selector": i.LoginSignup
                        }, o.createElement(w.a, {
                            login: this.props.login,
                            signup: this.props.signup
                        }));
                        return o.createElement(y.Wa, {
                            className: "esports-milestone-balloon-call-to-action"
                        }, e)
                    }, t
                }(o.PureComponent);
            var S = Object(p.connect)(function(e) {
                    return {
                        user: Object(c.e)(e)
                    }
                }, function(e) {
                    return Object(h.bindActionCreators)({
                        login: function() {
                            return Object(f.e)(g.a.EsportsCampaignTabsMilestoneBalloon)
                        },
                        signup: function() {
                            return Object(f.g)(g.a.EsportsCampaignTabsMilestoneBalloon)
                        }
                    }, e)
                })(E),
                C = n("cUCe"),
                P = n("81Gi"),
                N = (n("qGAq"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.getDescriptionText = function() {
                            var e = null;
                            return t.props.type === v.a.Twitch ? t.props.emoteType === v.b.Hero ? e = t.props.reward.isEntitled ? Object(u.d)("You’ve unlocked this Overwatch Hero emote to use anywhere on Twitch!", "CampaignsMilestoneBalloon") : Object(u.d)("Unlock one of 26 random Overwatch Hero Twitch emotes for every 100 Bits you Cheer.", "CampaignsMilestoneBalloon") : t.props.emoteType === v.b.Team ? e = t.props.reward.isEntitled ? Object(u.d)("You’ve unlocked this emote. Use it anywhere on Twitch to show your love for the team!", "CampaignsMilestoneBalloon") : Object(u.d)("Cheer 150 Bits or more using this team’s Cheermote and receive their emote.", "CampaignsMilestoneBalloon") : t.props.emoteType === v.b.Cheerbomb && (e = Object(u.d)("Cheer 250 Bits for a set of five emotes, 500 Bits for the second set and share with Chat.", "CampaignsMilestoneBalloon")) : t.props.insiderType ? e = t.props.reward.isPrimeOnly ? Object(u.d)("Included with the Overwatch League All-Access Pass 2018, only for Twitch Prime members.", "CampaignsMilestoneBalloon") : Object(u.d)("Included with the Overwatch League All-Access Pass 2018.", "CampaignsMilestoneBalloon") : t.props.type === v.a.Blizzard && (t.props.isErrorState ? e = Object(u.d)("Error redeeming reward, please try again later!", "CampaignsMilestoneBalloon") : t.props.globalThresholdReached ? t.props.globalThresholdReached && !t.props.userThresholdReached ? e = Object(u.d)("The community unlocked this loot! Cheer to join them and get it yourself!", "CampaignsMilestoneBalloon") : t.props.reward.isEntitled ? e = Object(u.d)("Now available to use in-game!", "CampaignsMilestoneBalloon") : t.props.isClaimable && (e = t.props.isBlizzardAccountLinked ? Object(u.d)("Now available! Click Redeem to use in-game.", "CampaignsMilestoneBalloon") : Object(u.d)("Now available! Link your Blizzard Account to use in-game.", "CampaignsMilestoneBalloon")) : e = Object(u.d)("Cheer with the community to unlock this loot!", "CampaignsMilestoneBalloon")), e
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        var e = this.getDescriptionText(),
                            t = null;
                        if (this.props.type === v.a.Blizzard && !this.props.insiderType && this.props.participationThreshold > 0) {
                            var n = null;
                            n = this.props.userThresholdReached ? o.createElement(C.a, null) : o.createElement(P.a, null), t = o.createElement(y.Wa, {
                                display: y.X.Flex,
                                padding: {
                                    bottom: 1
                                }
                            }, o.createElement(y.Wa, {
                                padding: {
                                    right: .5
                                }
                            }, n), o.createElement(y.W, {
                                className: "esports-milestone-balloon-body__participation-text"
                            }, Object(u.d)("Cheer {amount} Bits", {
                                amount: Object(u.f)(this.props.participationThreshold)
                            }, "CampaignsMilestoneBalloon")))
                        }
                        return o.createElement(y.Wa, {
                            padding: {
                                top: 1,
                                x: 2,
                                bottom: 2
                            }
                        }, this.props.participationThreshold > 0 && t, o.createElement(y.W, {
                            "data-test-selector": r.Description
                        }, e), o.createElement(y.Wa, {
                            display: y.X.Flex,
                            padding: {
                                top: 1
                            },
                            flexDirection: y.Z.Row
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
                R = n("TSYQ"),
                z = n("WlPE"),
                F = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        var e = o.createElement(y.W, {
                            "data-test-selector": s.RewardType,
                            color: y.O.Alt2
                        }, this.props.reward.description);
                        this.props.isEmote && (e = o.createElement(y.W, {
                            "data-test-selector": s.RewardType,
                            color: y.O.Link
                        }, Object(u.d)("Twitch Emote", "CampaignsMilestoneBalloon")));
                        var t, n = null;
                        n = this.props.isRestricted ? o.createElement(y.nb, {
                            "data-test-selector": s.MilestoneRestricted,
                            type: y.pb.Alert,
                            asset: y.ob.Ban
                        }) : this.props.isLocked ? o.createElement(y.nb, {
                            "data-test-selector": s.MilestoneLocked,
                            asset: y.ob.Lock
                        }) : o.createElement(y.nb, {
                            "data-test-selector": s.MilestoneUnlocked,
                            type: y.pb.Success,
                            asset: y.ob.Unlock
                        }), t = this.props.isHexagon ? o.createElement(d.a, {
                            imageURL: this.props.reward.imageURL
                        }) : o.createElement(z.a, {
                            imageURL: this.props.reward.imageURL,
                            size: z.c.Default,
                            noBorder: !0
                        });
                        var i = null;
                        i = this.props.requiresPass ? o.createElement(y.W, null, Object(u.d)("All-Access Pass", "CampaignsMilestoneBalloon")) : o.createElement(y.Wa, {
                            display: y.X.Flex,
                            alignItems: y.f.Center
                        }, o.createElement(y.nb, {
                            type: y.pb.Brand,
                            asset: y.ob.Bits
                        }), this.props.threshold > 0 && o.createElement(y.Oa, {
                            margin: {
                                left: .5
                            }
                        }, o.createElement(y.W, {
                            className: "esports-milestone-balloon__threshold",
                            bold: !0,
                            fontSize: y.Ba.Size5,
                            type: y.Ob.Span
                        }, Object(u.f)(this.props.threshold))));
                        var r = R("esports-milestone-balloon__image", {
                            "esports-milestone-balloon__image--blizzard": this.props.isHexagon
                        });
                        return o.createElement(y.yb, {
                            borderBottom: !0,
                            display: y.X.Flex,
                            alignItems: y.f.Center,
                            padding: {
                                right: 1,
                                bottom: .5
                            }
                        }, o.createElement(y.Wa, {
                            className: r
                        }, t), o.createElement(y.Wa, {
                            margin: {
                                left: 1
                            }
                        }, e, o.createElement(y.W, {
                            bold: !0
                        }, this.props.reward.name)), o.createElement(y.Wa, {
                            textAlign: y.Kb.Right,
                            margin: {
                                left: "auto"
                            }
                        }, n, i))
                    }, t
                }(o.PureComponent),
                I = n("QlRw"),
                _ = n("UOrd"),
                T = (n("Zqs6"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            isErrorState: !1
                        }, t.claimMilestone = function() {
                            return a.__awaiter(t, void 0, void 0, function() {
                                return a.__generator(this, function(e) {
                                    switch (e.label) {
                                        case 0:
                                            if (!this.props.claimMilestone) return [2];
                                            e.label = 1;
                                        case 1:
                                            return e.trys.push([1, 3, , 4]), [4, this.props.claimMilestone({
                                                variables: {
                                                    input: {
                                                        userID: this.props.user && this.props.user.id || "",
                                                        milestoneID: this.props.milestoneID
                                                    }
                                                }
                                            })];
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
                    return a.__extends(t, e), t.prototype.render = function() {
                        var e = void 0 !== this.props.userProgress && this.props.participationThreshold <= this.props.userProgress,
                            t = void 0 !== this.props.globalProgress && this.props.threshold <= this.props.globalProgress,
                            n = this.props.reward.canBeFulfilled;
                        this.props.insiderType && (n = !!this.props.hasInsiderPass);
                        var i = !!this.props.blizzardAccount && this.props.blizzardAccount.region === I.a.China,
                            r = !!this.props.blizzardAccount,
                            s = this.props.type === v.a.Twitch || this.props.insiderType === v.c.SubEmote,
                            a = !this.props.isBundle && (this.props.insiderType === v.c.HeroSkin || this.props.type === v.a.Blizzard),
                            l = i && (this.props.type === v.a.Blizzard || this.props.type === v.a.Insider),
                            d = !!this.props.insiderType;
                        return o.createElement(y.Wa, {
                            className: "esports-milestone-balloon",
                            textAlign: y.Kb.Left
                        }, o.createElement(F, {
                            reward: this.props.reward,
                            threshold: this.props.threshold,
                            requiresPass: d,
                            isEmote: s,
                            isHexagon: a,
                            isLocked: !n,
                            isRestricted: l
                        }), o.createElement(N, {
                            type: this.props.type,
                            emoteType: this.props.emoteType,
                            insiderType: this.props.insiderType,
                            reward: this.props.reward,
                            globalThresholdReached: t,
                            userThresholdReached: e,
                            participationThreshold: this.props.participationThreshold,
                            isRestrictedBlizzardAccount: i,
                            isErrorState: this.state.isErrorState,
                            isClaimable: n,
                            isBlizzardAccountLinked: r,
                            openBitsCard: this.openBitsCard,
                            claimMilestone: this.claimMilestone,
                            hasInsiderPass: this.props.hasInsiderPass,
                            subscriptionProducts: this.props.subscriptionProducts
                        }))
                    }, t.prototype.openBitsCard = function() {
                        var e = document.querySelector('[data-a-target="bits-button"]');
                        e && e.click()
                    }, t = a.__decorate([Object(m.a)(_, {
                        name: "claimMilestone"
                    })], t)
                }(o.Component));
            var B = Object(p.connect)(function(e) {
                    return {
                        user: Object(c.e)(e)
                    }
                })(T),
                x = n("uLiP"),
                O = n("rC/K"),
                M = (n("JPbf"), n("Ar2k")),
                A = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.setContainerRef = function(e) {
                            return t.containerRef = e
                        }, t.onMouseEnter = function() {
                            if (t.containerRef) {
                                var e = !t.props.startDate || t.props.startDate <= new Date(Date.now()),
                                    n = t.props.reward && t.props.reward.id === x.d,
                                    i = t.props.reward && t.props.reward.id === x.a;
                                t.props.reward && e && t.props.tooltipLayer.showRich({
                                    from: t.containerRef,
                                    richContent: o.createElement(B, {
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
                                        isBundle: n || i
                                    }),
                                    allowHover: !0,
                                    balloonProps: {
                                        size: y.w.Medium,
                                        direction: y.v.TopCenter,
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
                    return a.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.addEventListeners()
                    }, t.prototype.componentWillUnmount = function() {
                        this.removeEventListeners()
                    }, t.prototype.render = function() {
                        var e, t = this.props.objectiveTag === O.a.Collection && this.props.reward && !this.props.reward.canBeFulfilled && !this.props.reward.isEntitled,
                            n = void 0 !== this.props.globalProgress && this.props.globalProgress < this.props.threshold,
                            i = void 0 !== this.props.globalProgress && this.props.globalProgress >= this.props.threshold && void 0 !== this.props.userProgress && this.props.userProgress < this.props.participationThreshold || void 0 === this.props.globalProgress && void 0 !== this.props.userProgress && this.props.userProgress < this.props.participationThreshold,
                            r = this.props.emoteType && this.props.reward && !this.props.reward.isEntitled || this.props.insiderType !== v.c.InGameContent && void 0 !== this.props.hasInsiderPass && !this.props.hasInsiderPass,
                            s = !this.props.reward || this.props.startDate && this.props.startDate > new Date(Date.now()),
                            a = this.props.type === v.a.Twitch && this.props.emoteType || this.props.type === v.a.Insider && this.props.insiderType !== v.c.HeroSkin;
                        if (this.props.big) {
                            var p = this.props.reward ? this.props.reward.imageURL : "";
                            this.props.reward && this.props.reward.id === x.c && (p = l.c + "/owl-2017/insider-test/lucio-emote-static-alt.png"), e = o.createElement(y.yb, {
                                className: "esports-milestone__insider--players-pack",
                                margin: {
                                    top: 2
                                }
                            }, o.createElement(z.a, {
                                imageURL: p,
                                locked: !1,
                                borderType: z.b.Brand,
                                hasInsiderPass: void 0 !== this.props.hasInsiderPass ? this.props.hasInsiderPass : void 0
                            }))
                        } else if (a) {
                            var c = z.c.Default,
                                m = z.b.Default;
                            (this.props.type === v.a.Insider && this.props.insiderType === v.c.InGameContent || this.props.insiderType === v.c.Bits) && (m = z.b.Brand), this.props.type === v.a.Insider && this.props.insiderType === v.c.InGameContent ? c = z.c.Large : this.props.insiderType === v.c.Bits && (c = z.c.Medium), e = o.createElement(z.a, {
                                imageURL: this.props.reward ? this.props.reward.imageURL : "",
                                locked: r,
                                size: c,
                                borderType: m,
                                hasInsiderPass: this.props.insiderType === v.c.InGameContent && void 0 !== this.props.hasInsiderPass ? this.props.hasInsiderPass : void 0
                            })
                        } else e = o.createElement(d.a, {
                            imageURL: this.props.reward ? this.props.reward.imageURL : "",
                            size: this.props.size,
                            isUnavailable: n,
                            needsToCheerMore: void 0 !== this.props.hasInsiderPass ? !this.props.hasInsiderPass : i || t,
                            comingSoon: s
                        });
                        return o.createElement(y.Wa, {
                            className: "esports-milestone",
                            position: y.eb.Relative,
                            display: y.X.InlineFlex
                        }, o.createElement("div", {
                            className: "esports-milestone__clickable",
                            ref: this.setContainerRef
                        }, e))
                    }, t = a.__decorate([Object(M.c)()], t)
                }(o.Component),
                W = A;
            n.d(t, !1, function() {
                return A
            }), n.d(t, "a", function() {
                return W
            })
        },
        jAjM: function(e, t, n) {
            "use strict";
            var i, r = n("mrSG"),
                s = n("TSYQ"),
                a = n("q1tI"),
                o = n("f00E"),
                l = n("QK1T"),
                d = n("Ue10");
            n("/2zc");
            ! function(e) {
                e[e.Default = 0] = "Default", e[e.Small = 1] = "Small", e[e.Medium = 2] = "Medium", e[e.Large = 3] = "Large"
            }(i || (i = {}));
            var p = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    var e, t, n = "esports-hexagon__mask--unavailable-" + Object(o.a)(),
                        r = "esports-hexagon__mask--cheer-more-" + Object(o.a)(),
                        p = "esports-hexagon__pattern--" + Object(o.a)();
                    this.props.isUnavailable ? (e = "url(#" + n, t = "esports-hexagon__mask--unavailable") : this.props.needsToCheerMore && (e = "url(#" + r, t = "esports-hexagon__mask--cheer-more");
                    var c = /Edge/.test(window.navigator.userAgent) ? 5 : Object(l.b)(window.navigator.userAgent) ? -25 : 0,
                        m = /Edge/.test(window.navigator.userAgent) ? -5 : Object(l.b)(window.navigator.userAgent) ? 8 : 5,
                        u = /Edge/.test(window.navigator.userAgent) ? 155 : 131,
                        h = /Edge/.test(window.navigator.userAgent) ? 90 : Object(l.b)(window.navigator.userAgent) ? 150 : 100,
                        g = Object(l.b)(window.navigator.userAgent) ? 150 : 131,
                        f = Object(l.b)(window.navigator.userAgent) ? 0 : 10,
                        v = s("esports-hexagon__svg", {
                            "esports-hexagon__svg--large": this.props.size === i.Large
                        }, {
                            "esports-hexagon__svg--small": this.props.size === i.Small
                        }, {
                            "esports-hexagon__svg--medium": this.props.size === i.Medium
                        }, {
                            "esports-hexagon__svg--small-blizzard": !this.props.comingSoon && this.props.size === i.Small
                        }),
                        b = s("esports-hexagon__svg--background", {
                            "esports-hexagon__svg--background-coming-soon": this.props.comingSoon
                        }),
                        k = s("esports-hexagon__svg--fill", {
                            "esports-hexagon__svg--fill-coming-soon": this.props.comingSoon
                        });
                    return a.createElement(d.Wa, {
                        className: "esports-hexagon",
                        display: d.X.Flex,
                        flexDirection: d.Z.Column
                    }, a.createElement("svg", {
                        className: v,
                        viewBox: "5 0 90 131"
                    }, a.createElement("defs", null, a.createElement("pattern", {
                        id: p,
                        patternUnits: "userSpaceOnUse",
                        width: "100",
                        height: g
                    }, a.createElement("image", {
                        className: "esports-hexagon__image",
                        xlinkHref: this.props.imageURL,
                        x: c,
                        y: m,
                        width: h,
                        height: u
                    })), a.createElement("filter", {
                        id: n
                    }, a.createElement("feColorMatrix", {
                        type: "matrix",
                        values: "0.04 0 0 0 0 0 0.04 0 0 0 0 0 0.04 0 0 0 0 0 1 0"
                    })), a.createElement("filter", {
                        id: r
                    }, a.createElement("feColorMatrix", {
                        type: "matrix",
                        values: "0.12 0 0 0 0 0 0.04 0 0 0 0 0 0.68 0 0 0 0 0 1 0"
                    }))), a.createElement("polygon", {
                        className: b,
                        points: "50,2 8.042394,26.558603 8,75 50,98 92,75 92,25",
                        stroke: "none",
                        strokeWidth: "1px",
                        transform: "translate(0, 31)"
                    }), a.createElement("path", {
                        transform: "translate(0, 31)",
                        className: k,
                        d: "M49.9,99.1c-2.1,0-4.2-0.5-5.8-1.4L11.6,79c-3.3-2-5.9-6.4-5.9-10.2V31.3c0-3.8,2.6-8.3,5.9-10.2L44.2,2.4C45.8,1.5,47.8,1,50,1c2.2,0,4.3,0.5,5.8,1.4l32.5,18.7c3.3,1.9,5.9,6.5,5.7,10.3l0,37.4c0,3.8-2.6,8.3-5.9,10.2L55.8,97.7C54.1,98.6,52,99.1,49.9,99.1z M50,4c-1.7,0-3.2,0.4-4.4,1L13.1,23.7c-2.4,1.3-4.3,4.8-4.3,7.6v37.5c0,2.7,2,6.2,4.4,7.6l32.4,18.7c2.3,1.3,6.4,1.3,8.7,0l32.4-18.7c2.4-1.3,4.3-4.8,4.3-7.6V31.3c0.2-2.7-1.8-6.2-4.1-7.6l0,0L54.4,5C53.3,4.4,51.6,4,50,4z"
                    }), !this.props.comingSoon && a.createElement("polygon", {
                        className: "esports-hexagon__svg--filtered-image",
                        "data-test-selector": t,
                        filter: e,
                        points: 0 + f + ",0 " + (100 - f) + ",0 " + (100 - f) + ",131 " + (0 + f) + ",131",
                        stroke: "none",
                        strokeWidth: "1px",
                        fill: "url(#" + p + ")"
                    }), this.props.comingSoon && a.createElement("text", {
                        className: "esports-hexagon__svg--question-mark",
                        x: "38",
                        y: "97",
                        fontSize: "44",
                        fontWeight: "600"
                    }, "?"), !this.props.comingSoon && (this.props.isUnavailable || this.props.needsToCheerMore) && a.createElement("path", {
                        className: "esports-hexagon__svg--lock",
                        transform: "translate(40, 70)",
                        fill: "white",
                        d: "M7.987 6.599C7.987 5.166 8.685 4 9.997 4c1.311 0 2.009 1.166 2.009 2.599v2.412H7.987V6.599zm7.256 2.412h-1.248V6.599C13.995 4.063 12.411 2 9.997 2S5.998 4.063 5.998 6.599v2.412H4.751c-.415 0-.751.359-.751.8v7.397c0 .442.336.8.751.8h10.492c.414 0 .751-.358.751-.8V9.811c0-.441-.337-.8-.751-.8z",
                        fillRule: "evenodd"
                    })))
                }, t
            }(a.PureComponent);
            n.d(t, !1, function() {
                return "esports-hexagon__mask--unavailable"
            }), n.d(t, !1, function() {
                return "esports-hexagon__mask--cheer-more"
            }), n.d(t, !1, function() {
                return "esports-hexagon__pattern"
            }), n.d(t, "b", function() {
                return i
            }), n.d(t, "a", function() {
                return p
            })
        },
        n7kk: function(e, t, n) {
            "use strict";
            n.r(t);
            var i = n("/MKj"),
                r = n("kRBY"),
                s = n("mrSG"),
                a = n("q1tI"),
                o = n("oJmH"),
                l = n("yR8l"),
                d = n("eDVu"),
                p = n("0Log"),
                c = n("/aPz"),
                m = n("4rCz"),
                u = n("/7QA"),
                h = n("jAjM"),
                g = n("uLiP"),
                f = n("hRrL"),
                v = n("Ue10"),
                b = (n("6mxx"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            activeMilestoneID: void 0
                        }, t
                    }
                    return s.__extends(t, e), t.prototype.render = function() {
                        return a.createElement("div", {
                            className: "campaign-reward-group"
                        }, a.createElement(v.Wa, {
                            position: v.eb.Relative
                        }, a.createElement(v.Wa, {
                            padding: {
                                bottom: 1
                            }
                        }, a.createElement(v.W, {
                            "data-test-selector": "campaign-reward-group-title",
                            type: v.Ob.H3
                        }, this.props.title), this.props.totalRewards > 0 && a.createElement(v.Wa, {
                            className: "campaign-reward-group__entitled-amount",
                            attachRight: !0,
                            position: v.eb.Absolute
                        }, a.createElement(v.Wa, {
                            className: "campaign-claim-all-rewards-button",
                            display: v.X.InlineFlex,
                            margin: {
                                right: 1
                            }
                        }, a.createElement(v.W, {
                            "data-test-selector": "campaign-reward-group-entitled-rewards",
                            fontSize: v.Ba.Size3
                        }, Object(u.d)("{entitled} / {total}", {
                            entitled: Object(u.f)(this.props.rewardsEntitled),
                            total: Object(u.f)(this.props.totalRewards)
                        }, "CampaignsRewardGroup"))))), a.createElement(v.Wa, {
                            display: v.X.Flex,
                            justifyContent: v.Va.Between
                        }, a.createElement(v.W, {
                            "data-test-selector": "campaign-reward-group-description"
                        }, this.props.description), this.props.showClaimAllButton && this.props.tournamentID && a.createElement(v.Wa, {
                            margin: {
                                left: 4
                            }
                        }, a.createElement(f.a, {
                            tournamentID: this.props.tournamentID,
                            enabled: !!this.props.canClaimRewards
                        })))), a.createElement(v.Wa, {
                            "data-test-selector": "campaign-reward-group-display-children",
                            padding: {
                                bottom: 5
                            },
                            position: v.eb.Relative
                        }, this.props.children))
                    }, t
                }(a.Component)),
                k = n("TSYQ"),
                w = n("huSm"),
                y = n("+z1J"),
                E = (n("0/kz"), function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return s.__extends(t, e), t.prototype.render = function() {
                        var e = this,
                            t = this.props.milestones.find(function(t) {
                                return t.rewards.some(function(t) {
                                    return t.id === e.props.reward.id
                                })
                            }),
                            n = t || this.props.milestones.length < 1 ? this.props.reward : void 0,
                            i = this.props.type === y.a.Blizzard || this.props.type === y.a.Twitch && this.props.reward.isEntitled || this.props.insiderType === y.c.Bits,
                            r = k({
                                "esports-reward-row-item__emote": !!this.props.emoteType
                            }, {
                                "esports-reward-row-item__bits": this.props.type === y.a.Insider && this.props.insiderType === y.c.Bits
                            }, {
                                "esports-reward-row-item__badge": this.props.type === y.a.Insider && this.props.insiderType === y.c.Badge
                            }, {
                                "esports-reward-row-item__igc": this.props.type === y.a.Insider && this.props.insiderType === y.c.InGameContent
                            });
                        return a.createElement(v.Oa, {
                            className: r,
                            padding: this.props.emoteType && {
                                right: 0,
                                bottom: 2
                            },
                            textAlign: v.Kb.Center
                        }, a.createElement("li", null, a.createElement(w.a, {
                            milestoneID: t ? t.id : "",
                            type: this.props.type,
                            emoteType: this.props.emoteType,
                            insiderType: this.props.insiderType,
                            globalProgress: this.props.globalProgress,
                            userProgress: this.props.userProgress,
                            objectiveTag: t && t.objectiveTag,
                            reward: n,
                            threshold: t ? t.threshold : 0,
                            participationThreshold: t ? t.participationThreshold : 0,
                            size: this.props.milestoneSize,
                            startDate: t && new Date(t.startDate),
                            blizzardAccount: this.props.blizzardAccount,
                            getParentRect: this.props.getParentRect,
                            hasInsiderPass: this.props.hasInsiderPass,
                            subscriptionProducts: this.props.subscriptionProducts,
                            userHasPrime: this.props.userHasPrime,
                            big: this.props.big
                        }), n && a.createElement(v.Wa, {
                            "data-test-selector": "esports-reward-row-item-title",
                            display: v.X.Flex,
                            flexDirection: v.Z.Column,
                            alignItems: v.f.Center,
                            padding: {
                                top: 1
                            }
                        }, a.createElement(v.W, {
                            noWrap: this.props.insiderType !== y.c.Badge,
                            bold: !0
                        }, n.name), i && a.createElement(v.W, {
                            "data-test-selector": "esports-reward-row-item-subtext",
                            noWrap: !0,
                            color: v.O.Alt2
                        }, n.description)), !t && this.props.type === y.a.Blizzard && !this.props.insiderType && a.createElement(v.Wa, {
                            "data-test-selector": "esports-reward-row-item-coming-soon",
                            display: v.X.Flex,
                            flexDirection: v.Z.Column,
                            alignItems: v.f.Center,
                            padding: {
                                top: 1,
                                bottom: 2
                            }
                        }, a.createElement(v.W, {
                            bold: !0
                        }, Object(u.d)("Coming Soon", "CampaignsRewardGroup")))))
                    }, t
                }(a.Component)),
                S = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            activeMilestoneID: void 0
                        }, t.setRefDelegate = function(e) {
                            return t.ref = e
                        }, t.getRect = function() {
                            return t.ref ? t.ref.getBoundingClientRect() : null
                        }, t
                    }
                    return s.__extends(t, e), t.prototype.render = function() {
                        var e = this,
                            t = this.props.rewards.map(function(t) {
                                return a.createElement(E, {
                                    key: t.id,
                                    reward: t,
                                    milestones: e.props.milestones,
                                    type: e.props.type,
                                    emoteType: e.props.emoteType,
                                    insiderType: e.props.insiderType,
                                    blizzardAccount: e.props.blizzardAccount,
                                    milestoneSize: e.props.milestoneSize,
                                    globalProgress: e.props.globalProgress,
                                    userProgress: e.props.userProgress,
                                    activeMilestoneID: e.state.activeMilestoneID,
                                    getParentRect: e.getRect,
                                    hasInsiderPass: e.props.hasInsiderPass,
                                    subscriptionProducts: e.props.subscriptionProducts,
                                    userHasPrime: e.props.userHasPrime,
                                    big: e.props.big
                                })
                            });
                        if (this.props.secondaryType && this.props.secondaryRewards) {
                            var n = this.props.secondaryType;
                            t.push.apply(t, this.props.secondaryRewards.map(function(t) {
                                return a.createElement(E, {
                                    key: t.id,
                                    reward: t,
                                    milestones: e.props.milestones,
                                    type: n,
                                    emoteType: e.props.emoteType,
                                    insiderType: e.props.secondaryInsiderType,
                                    blizzardAccount: e.props.blizzardAccount,
                                    milestoneSize: e.props.secondaryMilestoneSize,
                                    globalProgress: e.props.globalProgress,
                                    userProgress: e.props.userProgress,
                                    activeMilestoneID: e.state.activeMilestoneID,
                                    getParentRect: e.getRect,
                                    hasInsiderPass: e.props.hasInsiderPass,
                                    subscriptionProducts: e.props.subscriptionProducts,
                                    userHasPrime: e.props.userHasPrime
                                })
                            }))
                        }
                        return a.createElement("div", {
                            className: "esports-reward-row",
                            ref: this.setRefDelegate
                        }, a.createElement(v.Oa, {
                            display: v.X.Flex,
                            flexWrap: v.Aa.Wrap,
                            flexDirection: v.Z.Row,
                            justifyContent: v.Va.Start,
                            alignItems: v.f.Baseline
                        }, a.createElement("ul", null, t)))
                    }, t
                }(a.Component),
                C = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return s.__extends(t, e), t.prototype.render = function() {
                        return a.createElement(v.Wa, {
                            className: "esports-reward-subgroup",
                            display: v.X.InlineBlock,
                            margin: {
                                top: 2,
                                right: 2
                            }
                        }, a.createElement(v.yb, {
                            "data-test-selector": "esports-reward-group-title",
                            borderBottom: !0
                        }, a.createElement(v.Wa, {
                            padding: {
                                bottom: 1
                            }
                        }, a.createElement(v.W, {
                            color: v.O.Link,
                            transform: v.Nb.Uppercase,
                            bold: !0
                        }, this.props.title)), a.createElement(v.Wa, {
                            padding: {
                                bottom: 1
                            }
                        }, this.props.description && a.createElement(v.W, null, this.props.description))), a.createElement(v.Wa, {
                            "data-test-selector": "esports-reward-group-display-children"
                        }, this.props.children))
                    }, t
                }(a.PureComponent),
                P = n("QlRw"),
                N = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return s.__extends(t, e), t.prototype.render = function() {
                        var e = this.props.globalRewards.length + this.props.insiderRewards.heroSkins.length + this.props.insiderRewards.inGameContent.length;
                        this.props.individualRewards && (e += this.props.individualRewards.length);
                        var t = [];
                        this.props.collectionMilestones && this.props.collectionMilestones.length > 0 && (e += (t = this.props.collectionMilestones.map(function(e) {
                            return e.rewards
                        }).reduce(function(e, t) {
                            return t.concat(e)
                        }, [])).filter(function(e) {
                            return "igc" === e.type
                        }).length);
                        var n = Object(u.d)("Overwatch Skins, Player Icons & Sprays", "CampaignsGlobalRewards"),
                            i = Object(u.d)("Overwatch in-game items you’ve unlocked with the All-Access Pass or by Cheering with other community members. Collect all {amount}!", {
                                amount: e
                            }, "CampaignsGlobalRewards"),
                            r = 0,
                            s = 0;
                        this.props.globalRewards.length > 0 && (r = e, s = this.props.globalRewards.filter(function(e) {
                            return e.isEntitled
                        }).length, this.props.individualMilestones && this.props.individualRewards && (s += this.props.individualRewards.filter(function(e) {
                            return e.isEntitled
                        }).length), s += this.props.insiderRewards.heroSkins.filter(function(e) {
                            return e.isEntitled
                        }).length, s += this.props.insiderRewards.inGameContent.filter(function(e) {
                            return e.isEntitled
                        }).length, t.length > 0 && (s += t.filter(function(e) {
                            return "igc" === e.type && e.isEntitled
                        }).length));
                        var o = this.props.insiderRewards.heroSkins,
                            l = o.find(function(e) {
                                return e.id === g.d
                            }),
                            d = o.find(function(e) {
                                return e.id === g.a
                            }),
                            p = o.find(function(e) {
                                return e.id === g.c
                            });
                        return o = o.filter(function(e) {
                            return e.id !== g.d && e.id !== g.a
                        }), d && p && (o = o.filter(function(e) {
                            return e.id !== g.c
                        })), a.createElement(b, {
                            title: n,
                            description: i,
                            totalRewards: r,
                            rewardsEntitled: s,
                            tournamentID: this.props.tournamentId,
                            showClaimAllButton: this.props.blizzardAccount && this.props.blizzardAccount.region !== P.a.China,
                            canClaimRewards: this.props.canClaimRewards
                        }, a.createElement(C, {
                            title: Object(u.d)("Global Progress Rewards", "CampaignsGlobalRewards")
                        }, a.createElement(S, {
                            type: y.a.Blizzard,
                            rewards: this.props.globalRewards,
                            milestones: this.props.globalMilestones,
                            milestoneSize: h.b.Large,
                            blizzardAccount: this.props.blizzardAccount,
                            userProgress: this.props.individualProgress,
                            globalProgress: this.props.globalProgress
                        })), this.props.individualRewards && this.props.individualRewards.length > 0 && this.props.individualMilestones && a.createElement(v.Oa, {
                            padding: {
                                top: 2
                            }
                        }, a.createElement(C, {
                            title: Object(u.d)("Individual Progress Rewards", "CampaignsGlobalRewards")
                        }, a.createElement(S, {
                            type: y.a.Blizzard,
                            rewards: this.props.individualRewards,
                            milestones: this.props.individualMilestones,
                            milestoneSize: h.b.Large,
                            blizzardAccount: this.props.blizzardAccount,
                            userProgress: this.props.individualProgress,
                            globalProgress: this.props.globalProgress
                        }))), this.props.collectionMilestones && this.props.collectionMilestones.length > 0 && a.createElement(v.Oa, {
                            padding: {
                                top: 2
                            }
                        }, a.createElement(C, {
                            title: Object(u.d)("Team Emote Collection", "CampaignsGlobalRewards")
                        }, a.createElement(S, {
                            type: y.a.Blizzard,
                            rewards: t,
                            milestones: this.props.collectionMilestones,
                            milestoneSize: h.b.Large,
                            blizzardAccount: this.props.blizzardAccount
                        }))), a.createElement(v.Oa, {
                            padding: {
                                top: 2
                            }
                        }, a.createElement(C, {
                            title: Object(u.d)("All-Access Pass Rewards", "CampaignsGlobalRewards")
                        }, d && p && a.createElement(v.Ia, null, a.createElement(v.P, {
                            cols: {
                                default: 12,
                                xl: 6
                            }
                        }, a.createElement(S, {
                            type: y.a.Blizzard,
                            insiderType: y.c.HeroSkin,
                            rewards: [d],
                            milestones: this.props.insiderMilestones,
                            blizzardAccount: this.props.blizzardAccount,
                            hasInsiderPass: this.props.hasInsiderPass,
                            subscriptionProducts: this.props.subscriptionProducts,
                            big: !0
                        })), a.createElement(v.P, {
                            cols: {
                                default: 12,
                                xl: 6
                            }
                        }, a.createElement(S, {
                            type: y.a.Blizzard,
                            insiderType: y.c.HeroSkin,
                            rewards: [p],
                            milestones: this.props.insiderMilestones,
                            blizzardAccount: this.props.blizzardAccount,
                            hasInsiderPass: this.props.hasInsiderPass,
                            subscriptionProducts: this.props.subscriptionProducts,
                            big: !0
                        }))), l && a.createElement(S, {
                            type: y.a.Blizzard,
                            insiderType: y.c.HeroSkin,
                            rewards: [l],
                            milestones: this.props.insiderMilestones,
                            blizzardAccount: this.props.blizzardAccount,
                            hasInsiderPass: this.props.hasInsiderPass,
                            subscriptionProducts: this.props.subscriptionProducts,
                            big: !0
                        }), a.createElement(S, {
                            type: y.a.Blizzard,
                            insiderType: y.c.HeroSkin,
                            rewards: o,
                            milestones: this.props.insiderMilestones,
                            milestoneSize: h.b.Large,
                            blizzardAccount: this.props.blizzardAccount,
                            hasInsiderPass: this.props.hasInsiderPass,
                            subscriptionProducts: this.props.subscriptionProducts,
                            secondaryType: y.a.Insider,
                            secondaryInsiderType: y.c.InGameContent,
                            secondaryRewards: this.props.insiderRewards.inGameContent
                        }))))
                    }, t
                }(a.Component),
                R = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return s.__extends(t, e), t.prototype.render = function() {
                        var e = Object(u.d)("Badges", "CampaignsBadgeRewards");
                        return a.createElement(C, {
                            title: e,
                            description: ""
                        }, a.createElement(v.Wa, {
                            padding: {
                                top: 2
                            }
                        }, a.createElement(S, {
                            type: y.a.Insider,
                            insiderType: y.c.Badge,
                            milestones: [],
                            rewards: this.props.rewards,
                            hasInsiderPass: this.props.hasInsiderPass,
                            subscriptionProducts: this.props.subscriptionProducts
                        })))
                    }, t
                }(a.Component),
                z = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return s.__extends(t, e), t.prototype.render = function() {
                        var e = Object(u.d)("Bits", "CampaignsBitsRewards");
                        return a.createElement(C, {
                            title: e,
                            description: ""
                        }, a.createElement(v.Wa, {
                            padding: {
                                top: 2
                            }
                        }, a.createElement(S, {
                            type: y.a.Insider,
                            insiderType: y.c.Bits,
                            milestones: this.props.milestones,
                            rewards: this.props.rewards,
                            hasInsiderPass: this.props.hasInsiderPass,
                            subscriptionProducts: this.props.subscriptionProducts,
                            userHasPrime: this.props.userHasPrime
                        })))
                    }, t
                }(a.Component),
                F = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return s.__extends(t, e), t.prototype.render = function() {
                        var e = Object(u.d)("Quote Emotes", "CampaignsCheerbombEmotes"),
                            t = Object(u.d)("Unlock 5 emotes by cheering 250 bits or more! Cheer 500 bits or more and you’ll unlock the other 5 and trigger a shower of gifts for others in Chat.", "CampaignsCheerbombEmotes");
                        return a.createElement(C, {
                            title: e,
                            description: t
                        }, a.createElement(v.Wa, {
                            padding: {
                                top: 2
                            }
                        }, a.createElement(S, {
                            type: y.a.Twitch,
                            emoteType: y.b.Cheerbomb,
                            milestones: [],
                            rewards: this.props.rewards
                        })))
                    }, t
                }(a.Component),
                I = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return s.__extends(t, e), t.prototype.render = function() {
                        var e = this.props.rewards.length,
                            t = Object(u.d)("Hero Emotes", "CampaignsHeroEmotes"),
                            n = Object(u.d)("Unlock a random Twitch emote featuring one of {amount} Overwatch Heroes for every 100 Bits you Cheer. Guaranteed no duplicates! Collect them all!", {
                                amount: e
                            }, "CampaignsHeroEmotes");
                        return a.createElement(C, {
                            title: t,
                            description: n
                        }, a.createElement(v.Wa, {
                            padding: {
                                top: 2
                            }
                        }, a.createElement(S, {
                            type: y.a.Twitch,
                            emoteType: y.b.Hero,
                            milestones: this.props.milestones,
                            rewards: this.props.rewards
                        })))
                    }, t
                }(a.Component),
                _ = n("Sk0q"),
                T = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return s.__extends(t, e), t.prototype.render = function() {
                        var e = Object(u.d)("All-Access Pass Emotes", "CampaignsInsiderEmotes");
                        if (this.props.subscriptionProducts.length < 1) return null;
                        var t = this.props.subscriptionProducts[0],
                            n = Object(_.b)(t, this.props.hasInsiderPass);
                        return a.createElement(C, {
                            title: e,
                            description: ""
                        }, a.createElement(v.Wa, {
                            padding: {
                                top: 2
                            }
                        }, a.createElement(S, {
                            type: y.a.Insider,
                            emoteType: y.b.Insider,
                            insiderType: y.c.SubEmote,
                            milestones: [],
                            rewards: n,
                            hasInsiderPass: this.props.hasInsiderPass,
                            subscriptionProducts: this.props.subscriptionProducts
                        })))
                    }, t
                }(a.PureComponent),
                B = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return s.__extends(t, e), t.prototype.render = function() {
                        var e = Object(u.d)("Team Emotes", "CampaignsTeamEmotes"),
                            t = Object(u.d)("Cheer to show your favorite team some love! Cheers 150 Bits or more using a team’s Cheermote and unlock their Twitch emote.", "CampaignsTeamEmotes");
                        return a.createElement(C, {
                            title: e,
                            description: t
                        }, a.createElement(v.Wa, {
                            padding: {
                                top: 2
                            }
                        }, a.createElement(S, {
                            type: y.a.Twitch,
                            emoteType: y.b.Team,
                            milestones: this.props.milestones,
                            rewards: this.props.rewards
                        })))
                    }, t
                }(a.Component),
                x = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.getRewardCounts = function() {
                            var e = t.props.rewards,
                                n = e.cheerbomb,
                                i = e.individual,
                                r = e.team,
                                s = e.insider,
                                a = 0,
                                o = 0,
                                l = i.filter(function(e) {
                                    return "emote" === e.type
                                });
                            l.length > 0 && (a += l.length, o += l.filter(function(e) {
                                return e.isEntitled
                            }).length), r.length > 0 && (a += r.length, o += r.filter(function(e) {
                                return e.isEntitled
                            }).length), n.length > 0 && (a += n.length, o += n.filter(function(e) {
                                return e.isEntitled
                            }).length);
                            var d = t.props.subscriptionProducts.length > 0 ? Object(_.b)(t.props.subscriptionProducts[0], t.props.hasInsiderPass) : [];
                            return d.length > 0 && (a += d.length, o += d.filter(function(e) {
                                return e.isEntitled
                            }).length), t.props.badgeRewards.length > 0 && (a += t.props.badgeRewards.length, o += t.props.badgeRewards.filter(function(e) {
                                return e.isEntitled
                            }).length), s.bits.length > 0 && (a += s.bits.length, o += s.bits.filter(function(e) {
                                return e.isEntitled
                            }).length), {
                                totalRewards: a,
                                rewardsEntitled: o
                            }
                        }, t
                    }
                    return s.__extends(t, e), t.prototype.render = function() {
                        var e = Object(u.d)("Twitch Rewards", "CampaignsTwitchRewards"),
                            t = Object(u.d)("Unlock exclusive Twitch Rewards by Cheering for your favorite team and by purchasing the Overwatch League All-Access Pass", "CampaignsTwitchRewards"),
                            n = this.getRewardCounts(),
                            i = n.totalRewards,
                            r = n.rewardsEntitled;
                        return a.createElement(b, {
                            title: e,
                            description: t,
                            totalRewards: i,
                            rewardsEntitled: r,
                            showClaimAllButton: !1,
                            canClaimRewards: !1
                        }, this.props.rewards.insider.bits.length > 0 && a.createElement(v.Wa, {
                            padding: {
                                top: 2
                            }
                        }, a.createElement(z, {
                            milestones: this.props.insiderMilestones,
                            rewards: this.props.rewards.insider.bits,
                            hasInsiderPass: this.props.hasInsiderPass,
                            subscriptionProducts: this.props.subscriptionProducts,
                            userHasPrime: this.props.userHasPrime
                        })), a.createElement(v.Wa, {
                            padding: {
                                top: 2
                            }
                        }, a.createElement(I, {
                            milestones: this.props.inidividualMilestones,
                            rewards: this.props.rewards.individual.filter(function(e) {
                                return "emote" === e.type
                            })
                        })), a.createElement(v.Wa, {
                            padding: {
                                top: 2
                            }
                        }, a.createElement(B, {
                            milestones: this.props.teamMilestones,
                            rewards: this.props.rewards.team
                        })), this.props.rewards.cheerbomb.length > 0 && a.createElement(v.Wa, {
                            padding: {
                                top: 2
                            }
                        }, a.createElement(F, {
                            rewards: this.props.rewards.cheerbomb
                        })), a.createElement(v.Wa, {
                            padding: {
                                top: 2
                            }
                        }, a.createElement(T, {
                            subscriptionProducts: this.props.subscriptionProducts,
                            hasInsiderPass: this.props.hasInsiderPass
                        })), a.createElement(v.Wa, {
                            padding: {
                                top: 2
                            }
                        }, a.createElement(R, {
                            rewards: this.props.badgeRewards,
                            hasInsiderPass: this.props.hasInsiderPass,
                            subscriptionProducts: this.props.subscriptionProducts
                        })))
                    }, t
                }(a.Component),
                O = n("rC/K"),
                M = n("/5u6"),
                A = n("bwyL"),
                W = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            canClaimRewards: !1
                        }, t.getIndividualMilestone = function() {
                            return t.getMilestoneForType(M.a.Individual)
                        }, t.getTeamMilestone = function() {
                            return t.getMilestoneForType(M.a.Team)
                        }, t.getInsiderMilestones = function() {
                            return t.getMilestoneForType(M.a.Insider)
                        }, t.getMilestoneForType = function(e) {
                            return t.props.data && t.props.data.user.tournament && t.props.data.user.tournament.self ? t.props.data.user.tournament.self.progress.milestones.filter(function(t) {
                                return t.objectiveTag === e
                            }) : []
                        }, t
                    }
                    return s.__extends(t, e), t.prototype.componentDidUpdate = function() {
                        if (this.props.data && !this.props.data.loading && !this.props.data.error && this.props.data.user.tournament) {
                            var e = this.props.campaignProperties,
                                t = !1;
                            if (void 0 !== e) t = e.objectives && e.objectives.some(function(e) {
                                return e.milestones && e.milestones.some(function(e) {
                                    return e.rewards && e.rewards.some(function(e) {
                                        return e.canBeFulfilled
                                    })
                                })
                            }) || !1;
                            else {
                                var n = this.props.data.user.tournament.rewards,
                                    i = n.global,
                                    r = n.team,
                                    s = n.individual,
                                    a = n.insider;
                                t = i.concat(r, s, a.heroSkins, a.inGameContent).some(function(e) {
                                    return e.canBeFulfilled
                                })
                            }
                            this.state.canClaimRewards !== t && this.setState({
                                canClaimRewards: t
                            })
                        }
                    }, t.prototype.render = function() {
                        if (!this.props.data || this.props.data.loading) return a.createElement(v.Wa, {
                            fullHeight: !0,
                            fullWidth: !0,
                            textAlign: v.Kb.Center,
                            padding: {
                                top: 4
                            }
                        }, a.createElement(v.Ya, {
                            fillContent: !0
                        }));
                        if (this.props.data && this.props.data.error || !this.props.data.user.tournament) return null;
                        var e = this.props.data.user.tournament.progress.milestones,
                            t = this.getIndividualMilestone(),
                            n = this.getTeamMilestone(),
                            i = this.getInsiderMilestones(),
                            r = this.props.data.user.tournament.progress.milestones.slice();
                        this.props.data.user.tournament.self && r.concat.apply(r, this.props.data.user.tournament.self.progress.milestones.filter(function(e) {
                            return e.rewards.every(function(e) {
                                return "igc" === e.type
                            })
                        }));
                        var s = !!(this.props.user && this.props.data && this.props.data.user && this.props.data.user.self && this.props.data.user.self.subscriptionBenefit),
                            o = this.props.data.user.broadcastBadges.filter(function(e) {
                                return "subscriber" === e.setID
                            }).map(function(e) {
                                return Object(_.a)(e, s)
                            }),
                            l = this.props.data.user.tournament.rewards.insider.badges.concat(o),
                            d = this.props.campaignProperties && this.props.campaignProperties.objectives && this.props.campaignProperties.objectives.filter(function(e) {
                                return e.tag === O.a.Collection
                            }),
                            p = d && d.map(function(e) {
                                return e.milestones
                            }).reduce(function(e, t) {
                                return t.concat(e)
                            }, []);
                        return a.createElement(v.Wa, {
                            margin: {
                                y: 2
                            }
                        }, a.createElement(v.Wa, {
                            margin: {
                                bottom: 2
                            }
                        }, a.createElement(N, {
                            globalRewards: this.props.data.user.tournament.rewards.global,
                            globalProgress: this.props.data.user.tournament.progress.amount,
                            globalMilestones: e,
                            individualRewards: this.props.data.user.tournament.rewards.individual.filter(function(e) {
                                return "igc" === e.type
                            }),
                            individualProgress: this.props.data.user.tournament.self && this.props.data.user.tournament.self.progress.amount,
                            individualMilestones: this.props.data.user.tournament.self && this.props.data.user.tournament.self.progress.milestones,
                            insiderRewards: this.props.data.user.tournament.rewards.insider,
                            insiderMilestones: i,
                            collectionMilestones: p,
                            blizzardAccount: this.props.blizzardAccount,
                            tournamentId: this.props.data.user.tournament.id,
                            canClaimRewards: this.state.canClaimRewards,
                            hasInsiderPass: s,
                            subscriptionProducts: this.props.data.user.subscriptionProducts
                        })), a.createElement(x, {
                            inidividualMilestones: t,
                            teamMilestones: n,
                            insiderMilestones: i,
                            rewards: this.props.data.user.tournament.rewards,
                            badgeRewards: l,
                            hasInsiderPass: s,
                            subscriptionProducts: this.props.data.user.subscriptionProducts,
                            userHasPrime: this.props.userHasPrime
                        }))
                    }, t
                }(a.Component),
                L = Object(o.compose)(Object(l.a)(A, {
                    options: function(e) {
                        return {
                            variables: {
                                channelID: e.channelID
                            }
                        }
                    }
                }), Object(d.a)(function(e) {
                    return {
                        topic: e.user ? Object(c.C)(e.user.id) : "",
                        query: A,
                        variables: {
                            channelID: e.channelID
                        },
                        skip: !e.user,
                        type: p.PubsubMessageType.UserCampaignRewardEvent,
                        mutator: function(t, n) {
                            if (!(t.data.contents.length < 1) && (m.l.debug("got individual reward message for reward: " + t.data.contents[0].id), n && n.user && n.user.tournament && n.user.tournament.self)) return e && e.data && e.data.refetch && e.data.refetch(), n
                        }
                    }
                }))(W);
            var j = Object(i.connect)(function(e) {
                return {
                    user: Object(r.e)(e)
                }
            })(L);
            n.d(t, "PublicProps", function() {}), n.d(t, "CampaignsRewardsTab", function() {
                return j
            })
        },
        nCSL: function(e, t, n) {},
        qGAq: function(e, t, n) {},
        "rC/K": function(e, t, n) {
            "use strict";
            var i;
            n.d(t, "a", function() {
                    return i
                }),
                function(e) {
                    e.Individual = "INDIVIDUAL", e.Team = "TEAM", e.Global = "GLOBAL", e.Insider = "INSIDER", e.Collection = "COLLECTION"
                }(i || (i = {}))
        },
        uLiP: function(e, t, n) {
            "use strict";
            var i = n("mrSG"),
                r = n("TSYQ"),
                s = n("q1tI"),
                a = n("/7QA"),
                o = n("yR8l"),
                l = n("5zXJ"),
                d = n("jAjM"),
                p = n("WlPE"),
                c = n("Ue10"),
                m = (n("PvlP"), function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        return s.createElement(c.Wa, {
                            className: "insider-pass-full-skin-reward",
                            padding: {
                                x: 1
                            },
                            display: c.X.Flex,
                            flexDirection: c.Z.Column
                        }, s.createElement("img", {
                            className: "insider-pass-full-skin-reward__image",
                            src: this.props.imageURL
                        }), s.createElement(c.Wa, {
                            textAlign: c.Kb.Center
                        }, s.createElement(c.W, {
                            fontSize: c.Ba.Size4,
                            bold: !0
                        }, this.props.name)), s.createElement(c.Wa, {
                            textAlign: c.Kb.Center
                        }, s.createElement(c.W, {
                            color: c.O.Alt2
                        }, this.props.subText)))
                    }, t
                }(s.PureComponent)),
                u = n("YkUe"),
                h = n("hRrL"),
                g = n("7TMk"),
                f = (n("nCSL"), "rewards-purchase-owl2018-playerspack"),
                v = "rewards-purchase-owl2018-lucio-ig-emote",
                b = {
                    McCree: l.c + "/owl-2017/global-rewards/full-skin/mccree.png",
                    Moira: l.c + "/owl-2017/global-rewards/full-skin/moira.png",
                    "Soldier: 76": l.c + "/owl-2017/global-rewards/full-skin/soldier-76.png"
                },
                k = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        if (!this.props.data || this.props.data.loading) return s.createElement(c.Ya, null);
                        if (this.props.data && this.props.data.error) return null;
                        var e = this.props.insiderPurchaseState === u.a.PostPurchase,
                            t = r("insider-pass-rewards__item", {
                                "insider-pass-rewards__item--post-purchase": e
                            }),
                            n = !!this.props.data.user.tournament.rewards.insider.heroSkins.find(function(e) {
                                return e.id === f
                            }),
                            i = !!this.props.data.user.tournament.rewards.insider.heroSkins.find(function(e) {
                                return "rewards-purchase-owl2018-allstars" === e.id
                            }),
                            o = this.props.data.user.tournament.rewards.insider.heroSkins.find(function(e) {
                                return e.id === v
                            }),
                            l = [];
                        if (this.props.insiderPurchaseState === u.a.PrePurchase) l = this.props.data.user.tournament.rewards.insider.heroSkins.filter(function(e) {
                            return e.id !== f && e.id !== v && "rewards-purchase-owl2018-allstars" !== e.id
                        }).map(function(e) {
                            return s.createElement(m, {
                                key: e.name,
                                name: e.name,
                                subText: "OWL Skin",
                                imageURL: b[e.name]
                            })
                        });
                        else {
                            var g = this.props.data.user.tournament.rewards.insider.heroSkins.filter(function(e) {
                                return e.id !== f && "rewards-purchase-owl2018-allstars" !== e.id
                            });
                            o && i && (g = g.filter(function(e) {
                                return e.id !== v
                            })), l = g.map(function(e) {
                                return s.createElement(c.Wa, {
                                    className: t,
                                    padding: {
                                        x: 3
                                    },
                                    key: e.name
                                }, s.createElement(d.a, {
                                    imageURL: e.imageURL,
                                    size: d.b.Large
                                }), s.createElement(c.Wa, {
                                    display: c.X.Flex,
                                    flexDirection: c.Z.Column,
                                    alignItems: c.f.Center,
                                    padding: {
                                        top: 1
                                    }
                                }, s.createElement(c.W, {
                                    fontSize: c.Ba.Size4,
                                    noWrap: !0,
                                    bold: !0
                                }, e.name), s.createElement(c.W, {
                                    noWrap: !0,
                                    color: c.O.Alt2
                                }, e.description)))
                            })
                        }
                        var k = this.props.data.user.tournament.rewards.insider.inGameContent.map(function(n) {
                                return s.createElement(c.Wa, {
                                    className: t,
                                    "data-test-selector": "in-game-content-selector",
                                    padding: {
                                        x: 1
                                    },
                                    key: n.name,
                                    textAlign: c.Kb.Center
                                }, s.createElement(p.a, {
                                    imageURL: n.imageURL,
                                    size: e ? p.c.Large : p.c.Medium,
                                    borderType: e ? p.b.Brand : p.b.Default
                                }), s.createElement(c.Wa, {
                                    display: c.X.Flex,
                                    flexDirection: c.Z.Column,
                                    alignItems: c.f.Center,
                                    padding: {
                                        top: 1
                                    }
                                }, s.createElement(c.W, {
                                    fontSize: c.Ba.Size5,
                                    noWrap: !0,
                                    bold: !0
                                }, n.name)))
                            }),
                            w = e && this.props.blizzardRewardsAvailable,
                            y = this.props.data.user.tournament.rewards.insider,
                            E = y.heroSkins.concat(y.inGameContent).some(function(e) {
                                return e.canBeFulfilled
                            });
                        return s.createElement(c.Wa, {
                            className: "insider-pass-rewards",
                            display: c.X.Flex,
                            flexDirection: c.Z.Column,
                            padding: {
                                y: 3
                            },
                            textAlign: c.Kb.Center
                        }, s.createElement(c.W, {
                            fontSize: c.Ba.Size3,
                            color: c.O.Link,
                            bold: !0
                        }, Object(a.d)("Overwatch Content with the All-Access Pass", "CampaignsInsiderRewards")), w && !E && s.createElement(c.W, {
                            fontSize: c.Ba.Size4
                        }, Object(a.d)("All in-game rewards have been claimed to your Blizzard account", "CampaignsInsiderRewards")), w && E && s.createElement(c.Wa, {
                            display: c.X.Flex,
                            flexDirection: c.Z.Row,
                            flexWrap: c.Aa.Wrap,
                            justifyContent: c.Va.Center,
                            padding: {
                                y: 1
                            }
                        }, s.createElement(h.a, {
                            tournamentID: this.props.data.user.tournament.id,
                            enabled: !0,
                            inGame: !0
                        })), !w && s.createElement(c.W, {
                            fontSize: c.Ba.Size4
                        }, Object(a.d)("A Blizzard account link is required to redeem in-game rewards", "CampaignsInsiderRewards")), this.props.insiderPurchaseState === u.a.PostPurchase && o && i && s.createElement(c.Ia, null, s.createElement(c.P, {
                            cols: {
                                default: 12,
                                xl: 6
                            }
                        }, this.renderAllstarsPack()), s.createElement(c.P, {
                            cols: {
                                default: 12,
                                xl: 6
                            }
                        }, this.renderLucio(o))), n && this.renderPlayersPack(), s.createElement(c.Wa, {
                            display: c.X.Flex,
                            flexDirection: e ? c.Z.Column : c.Z.Row,
                            flexWrap: c.Aa.Wrap,
                            justifyContent: c.Va.Center,
                            alignItems: c.f.Stretch,
                            padding: {
                                y: 2
                            }
                        }, s.createElement(c.Wa, {
                            display: c.X.Flex,
                            flexWrap: c.Aa.Wrap,
                            justifyContent: c.Va.Center,
                            alignItems: c.f.Center
                        }, l), s.createElement(c.Wa, {
                            display: c.X.Flex,
                            flexWrap: c.Aa.Wrap,
                            justifyContent: c.Va.Center,
                            alignItems: c.f.Center,
                            padding: 2
                        }, k)))
                    }, t.prototype.renderPlayersPack = function() {
                        return s.createElement(c.Wa, {
                            display: c.X.Flex,
                            justifyContent: c.Va.Center,
                            padding: {
                                left: 1,
                                right: 1
                            }
                        }, s.createElement(c.yb, {
                            className: "insider-pass-rewards__players-pack",
                            textAlign: c.Kb.Center,
                            fullWidth: !0
                        }, s.createElement(c.S, {
                            className: "insider-pass-rewards__players-pack__image",
                            src: l.c + "/owl-2017/insider-test/owl-igc-playerspack.png",
                            alt: Object(a.d)("The Players Pack Skins", "CampaignsInsiderRewards")
                        }), s.createElement(c.Wa, {
                            display: c.X.Flex,
                            flexDirection: c.Z.Column,
                            alignItems: c.f.Center,
                            padding: {
                                top: 1,
                                bottom: 1
                            }
                        }, s.createElement(c.W, {
                            fontSize: c.Ba.Size4,
                            noWrap: !0,
                            bold: !0
                        }, Object(a.d)("The Players Pack", "CampaignsInsiderRewards")), s.createElement(c.W, {
                            fontSize: c.Ba.Size5,
                            bold: !0
                        }, Object(a.d)("D.Va, Ana, Zarya, Genji, Sombra, Lucio, Widowmaker, Orisa, Winston, Reinhardt, Zenyatta, Junkrat", "CampaignsInsiderRewards")), this.renderFormattedOwlSkinsText())))
                    }, t.prototype.renderAllstarsPack = function() {
                        return s.createElement(c.Wa, {
                            display: c.X.Flex,
                            justifyContent: c.Va.Center,
                            padding: {
                                left: 1,
                                right: 1,
                                bottom: 2,
                                top: 2
                            }
                        }, s.createElement(c.yb, {
                            className: "insider-pass-rewards__new-item",
                            textAlign: c.Kb.Center,
                            fullWidth: !0
                        }, s.createElement(c.S, {
                            className: "insider-pass-rewards__new-item__image",
                            src: l.c + "/owl-2017/insider-test/owl-igc-allstars-pack.png",
                            alt: Object(a.d)("The All Stars Pack Skins", "CampaignsInsiderRewards")
                        }), s.createElement(c.Wa, {
                            display: c.X.Flex,
                            flexDirection: c.Z.Column,
                            alignItems: c.f.Center,
                            padding: {
                                top: 1,
                                bottom: 1
                            }
                        }, s.createElement(c.W, {
                            fontSize: c.Ba.Size4,
                            noWrap: !0,
                            bold: !0
                        }, Object(a.d)("The All-Stars Pack", "CampaignsInsiderRewards")), s.createElement(c.W, {
                            fontSize: c.Ba.Size5,
                            bold: !0
                        }, Object(a.d)("Mercy, Brigitte, Moira, Reinhardt, D.Va, Tracer", "CampaignsInsiderRewards")), this.renderFormattedOwlSkinsText())))
                    }, t.prototype.renderLucio = function(e) {
                        return s.createElement(c.Wa, {
                            display: c.X.Flex,
                            justifyContent: c.Va.Center,
                            padding: {
                                left: 1,
                                right: 1,
                                bottom: 2,
                                top: 2
                            }
                        }, s.createElement(c.yb, {
                            className: "insider-pass-rewards__new-item",
                            textAlign: c.Kb.Center,
                            fullWidth: !0
                        }, s.createElement(c.S, {
                            className: "insider-pass-rewards__new-item__image",
                            src: l.c + "/owl-2017/insider-test/lucio-emote-static-alt.png",
                            alt: e.name
                        }), s.createElement(c.Wa, {
                            display: c.X.Flex,
                            flexDirection: c.Z.Column,
                            alignItems: c.f.Center,
                            padding: {
                                top: 1,
                                bottom: 1
                            }
                        }, s.createElement(c.W, {
                            fontSize: c.Ba.Size4,
                            noWrap: !0,
                            bold: !0
                        }, e.name), s.createElement(c.W, {
                            noWrap: !0,
                            color: c.O.Alt2
                        }, e.description))))
                    }, t.prototype.renderFormattedOwlSkinsText = function() {
                        var e = Object(a.d)("OWL Skins", "CampaignsInsiderRewards");
                        return s.createElement(c.W, {
                            noWrap: !0,
                            color: c.O.Alt2
                        }, e)
                    }, t = i.__decorate([Object(o.a)(g, {
                        options: function(e) {
                            return {
                                variables: {
                                    channelID: e.channelID
                                }
                            }
                        }
                    })], t)
                }(s.PureComponent);
            n.d(t, !1, function() {
                return "in-game-content-selector"
            }), n.d(t, "d", function() {
                return f
            }), n.d(t, "c", function() {
                return v
            }), n.d(t, "a", function() {
                return "rewards-purchase-owl2018-allstars"
            }), n.d(t, "b", function() {
                return k
            })
        }
    }
]);