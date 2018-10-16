(window.webpackJsonp = window.webpackJsonp || []).push([
    [111], {
        "+8bU": function(e, t, n) {},
        "+z1J": function(e, t, n) {
            "use strict";
            var a, i, r;
            n.d(t, "a", function() {
                    return a
                }), n.d(t, "b", function() {
                    return i
                }), n.d(t, "c", function() {
                    return r
                }),
                function(e) {
                    e.Blizzard = "blizzard", e.Twitch = "twitch", e.Insider = "insider"
                }(a || (a = {})),
                function(e) {
                    e.Hero = "hero", e.Team = "team", e.Insider = "insider", e.Cheerbomb = "cheerbomb"
                }(i || (i = {})),
                function(e) {
                    e.HeroSkin = "hero-skin", e.InGameContent = "in-game-content", e.SubEmote = "emote", e.Badge = "badge", e.Bits = "bits"
                }(r || (r = {}))
        },
        "/2zc": function(e, t, n) {},
        "/5u6": function(e, t, n) {
            "use strict";
            var a;
            n.d(t, "a", function() {
                    return a
                }),
                function(e) {
                    e.Individual = "INDIVIDUAL", e.Team = "TEAM", e.Global = "GLOBAL", e.Insider = "INSIDER"
                }(a || (a = {}))
        },
        "0/kz": function(e, t, n) {},
        "12i0": function(e, t, n) {
            var a = {
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
            a.loc.source = {
                body: '#import "twilight/features/bits/models/bits-leaderboard-item-fragment.gql"\nquery CampaignsTeamLeaderboard($channelID: ID!) {\nuser(id: $channelID) {\nid\ntournament {\nid\nteamLeaderboard {\nid\n...leaderboardItem\n}\n}\n}\n}',
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            var i = {};
            a.definitions = a.definitions.concat(function(e) {
                return e.filter(function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var t = e.name.value;
                    return !i[t] && (i[t] = !0, !0)
                })
            }(n("fhkr").definitions)), e.exports = a
        },
        "3hlQ": function(e, t, n) {},
        "44In": function(e, t, n) {},
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
            var a = n("q1tI"),
                i = (n("bt+X"), function() {
                    return a.createElement("svg", {
                        className: "esports-participation-threshold-incomplete",
                        viewBox: "0 0 24 24"
                    }, a.createElement("defs", null, a.createElement("circle", {
                        id: "path-participation-threshold-incomplete-circle",
                        cx: "12",
                        cy: "12",
                        r: "12"
                    })), a.createElement("g", {
                        id: "Symbols",
                        stroke: "none",
                        strokeWidth: "1",
                        fill: "none",
                        fillRule: "evenodd"
                    }, a.createElement("g", {
                        id: "bits/bit-checkpoint-alt",
                        transform: "translate(-4.000000, -4.000000)"
                    }, a.createElement("g", {
                        id: "Group",
                        transform: "translate(4.000000, 4.000000)"
                    }, a.createElement("g", {
                        id: "Oval-Copy-6"
                    }, a.createElement("use", {
                        fill: "#FFFFFF",
                        fillRule: "evenodd",
                        xlinkHref: "#path-participation-threshold-incomplete-circle"
                    }), a.createElement("circle", {
                        stroke: "#CCBEE6",
                        strokeWidth: "2",
                        cx: "12",
                        cy: "12",
                        r: "11"
                    })), a.createElement("g", {
                        id: "Bits/glyph-outline-sm",
                        opacity: "0.400000006",
                        transform: "translate(7.000000, 6.000000)",
                        fill: "#6E4AAD",
                        stroke: "#6E4AAD",
                        strokeWidth: "0.5"
                    }, a.createElement("path", {
                        d: "M4.99965672,12 C4.9239113,12 4.84816588,11.977818 4.78016715,11.9353025 L0.211341127,9.03130897 C0.112355634,8.96938422 0.0409139311,8.86679247 0.0133701419,8.74756422 C-0.0150343907,8.62833596 0.00218047755,8.50171371 0.0615717729,8.39634921 L4.6303978,0.209342627 C4.78619236,-0.0697808757 5.21312109,-0.0697808757 5.36891565,0.209342627 L9.93860242,8.39634921 C9.99713297,8.50171371 10.0152086,8.62833596 9.98680405,8.74756422 C9.95839952,8.86679247 9.88695782,8.96938422 9.78883307,9.03130897 L5.21828555,11.9353025 C5.15114757,11.977818 5.07540214,12 4.99965672,12 Z M1.78824571,7.10038909 L4.99965672,1.34617014 L8.2119993,7.10081295 L5.19823023,4.92563446 C5.07342244,4.85631571 4.92537457,4.85631571 4.80142752,4.92563446 L1.78824571,7.10038909 Z M8.76932756,8.60565931 L4.99965672,11.0008857 L1.23048631,8.60545901 L4.9993985,5.85635422 L8.76932756,8.60565931 Z",
                        id: "Icon-Copy"
                    }))))))
                });
            n.d(t, "a", function() {
                return i
            })
        },
        "9Kf6": function(e, t, n) {},
        APPd: function(e, t, n) {
            "use strict";
            var a = n("/MKj"),
                i = n("kRBY"),
                r = n("mrSG"),
                s = n("q1tI"),
                o = n("/7QA"),
                l = n("eJ65"),
                d = n("yR8l"),
                c = n("SDEh"),
                p = n("edgk"),
                m = n("b6Yk"),
                u = n("5zXJ"),
                h = n("Ue10"),
                g = n("RNrf"),
                b = (n("IEPL"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.blizzardUnlink = function() {
                            return r.__awaiter(t, void 0, void 0, function() {
                                return r.__generator(this, function(e) {
                                    switch (e.label) {
                                        case 0:
                                            return this.props.user ? [4, m.a.delete("/v5/blizzard/" + this.props.user.id)] : [3, 2];
                                        case 1:
                                            e.sent(), this.props.data && this.props.data.refetch && this.props.data.refetch(), e.label = 2;
                                        case 2:
                                            return [2]
                                    }
                                })
                            })
                        }, t.blizzardLink = function(e) {
                            if (t.props.user) {
                                var n = e.currentTarget.getAttribute("data-region"),
                                    a = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width,
                                    i = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height,
                                    r = a / 2 - 262.5 + window.screenLeft,
                                    s = i / 2 - 277.5 + window.screenTop,
                                    o = window.open("https://api.twitch.tv/v5/blizzard/" + t.props.user.id + "/auth?region=" + n, "blizzardConnectionWindow", "height=555,width=525,top=" + s + ",left=" + r + ",chrome=no");
                                if (!o || Object(c.a)()) return void(t.props.onOpenBlizzardConnect && t.props.onOpenBlizzardConnect(t.props.user.id, n, function() {
                                    t.props.data.refetch()
                                }));
                                o.focus(), Object(p.a)(o, function(e) {
                                    t.props.data && t.props.data.refetch && t.props.data.refetch()
                                })
                            }
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        return s.createElement(h.Wa, {
                            className: "blizzard-account-link"
                        }, this.props.data && this.props.data.loading && s.createElement(h.z, {
                            type: h.F.Hollow,
                            size: h.D.Default
                        }, s.createElement(h.Ya, null)), this.props.data && !this.props.data.loading && this.props.data.error && s.createElement(h.z, {
                            "data-test-selector": "blizzard_account_link_component_error",
                            type: h.F.Hollow,
                            size: h.D.Default
                        }, s.createElement(h.nb, {
                            asset: h.ob.DeadGlitch
                        })), this.props.data && this.props.data.currentUser && !this.props.data.currentUser.blizzardAccount && s.createElement(l.a, null, s.createElement(h.z, {
                            type: h.F.Hollow,
                            "data-test-selector": "blizzard_account_link_component_unlinked",
                            dropdown: !0,
                            size: h.D.Default
                        }, Object(o.d)("Link your Blizzard Account", "CampaignsBlizzardAccountLink")), s.createElement(h.u, {
                            direction: h.v.BottomRight,
                            size: h.w.Small,
                            noTail: !0
                        }, s.createElement(h.Wa, {
                            padding: .5
                        }, s.createElement(h.Ta, {
                            onClick: this.blizzardLink,
                            "data-region": "us"
                        }, Object(o.d)("North America (US)", "CampaignsBlizzardAccountLink")), s.createElement(h.Ta, {
                            onClick: this.blizzardLink,
                            "data-region": "eu"
                        }, Object(o.d)("Europe (EU)", "CampaignsBlizzardAccountLink")), s.createElement(h.Ta, {
                            onClick: this.blizzardLink,
                            "data-region": "kr"
                        }, Object(o.d)("Korea (KR)", "CampaignsBlizzardAccountLink")), s.createElement(h.Ta, {
                            onClick: this.blizzardLink,
                            "data-region": "tw"
                        }, Object(o.d)("Taiwan (TW)", "CampaignsBlizzardAccountLink")), s.createElement(h.Ta, {
                            onClick: this.blizzardLink,
                            "data-region": "cn"
                        }, Object(o.d)("China (CN)", "CampaignsBlizzardAccountLink")), s.createElement(h.Ta, {
                            onClick: this.blizzardLink,
                            "data-region": "sea"
                        }, Object(o.d)("South East Asia (SEA)", "CampaignsBlizzardAccountLink"))))), this.props.data && this.props.data.currentUser && this.props.data.currentUser.blizzardAccount && s.createElement(h.Qb, {
                            label: this.props.data.currentUser.blizzardAccount.battleTag
                        }, s.createElement(l.a, null, s.createElement(h.z, {
                            type: h.F.Hollow,
                            size: h.D.Default,
                            "data-test-selector": "blizzard_account_link_component_linked"
                        }, s.createElement(h.Wa, {
                            display: h.X.Flex,
                            flexDirection: h.Z.Row,
                            alignItems: h.f.Center
                        }, s.createElement(h.nb, {
                            asset: h.ob.Check,
                            type: h.pb.Success
                        }), s.createElement(h.Oa, {
                            className: "blizzard-account-link__logo",
                            padding: {
                                left: .5
                            }
                        }, s.createElement(h.S, {
                            src: u.c + "/hgc2017/blizzard_logo.svg",
                            alt: Object(o.d)('Blizzard account "{accountName}" is connected', {
                                accountName: this.props.data.currentUser.blizzardAccount.battleTag
                            }, "CampaignsBlizzardAccountLink")
                        })))), s.createElement(h.u, {
                            direction: h.v.Bottom,
                            size: h.w.Small,
                            noTail: !0
                        }, s.createElement(h.Wa, {
                            padding: .5
                        }, s.createElement(h.Ta, {
                            onClick: this.blizzardUnlink,
                            "data-test-selector": "blizzard_account_link_component_unlink_account"
                        }, Object(o.d)("Unlink Blizzard Account", "CampaignsBlizzardAccountLink")))))))
                    }, t = r.__decorate([Object(d.a)(g)], t)
                }(s.Component));
            var f = Object(a.connect)(function(e) {
                return {
                    user: Object(i.e)(e)
                }
            })(b);
            n.d(t, "a", function() {
                return f
            })
        },
        EYeq: function(e, t, n) {
            var a = {
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
            a.loc.source = {
                body: '#import "twilight/features/campaigns/models/reward.gql"\nquery CampaignsGetTeamRewards($channelID: ID!) {\nuser(id: $channelID) {\nid\ntournament {\nid\nrewards {\nteam {\n...reward\n}\n}\n}\n}\n}',
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            var i = {};
            a.definitions = a.definitions.concat(function(e) {
                return e.filter(function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var t = e.name.value;
                    return !i[t] && (i[t] = !0, !0)
                })
            }(n("VK0B").definitions)), e.exports = a
        },
        F30f: function(e, t, n) {},
        G30c: function(e, t, n) {
            "use strict";
            var a = n("mrSG"),
                i = n("q1tI"),
                r = n("oJmH"),
                s = n("/7QA"),
                o = n("yR8l"),
                l = n("eDVu"),
                d = n("+LJB"),
                c = n("i4ay"),
                p = n("Ue10"),
                m = n("12i0"),
                u = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        var e = this.props.data,
                            t = e.user && e.user.tournament && e.user.tournament.teamLeaderboard;
                        return e.loading && !t ? i.createElement(p.Ya, {
                            fillContent: !0
                        }) : !t || e.error ? i.createElement(p.Wa, {
                            fullHeight: !0,
                            fullWidth: !0,
                            textAlign: p.Jb.Center,
                            padding: {
                                top: 4
                            }
                        }, i.createElement(p.nb, {
                            asset: p.ob.DeadGlitch,
                            fill: !0,
                            width: 50,
                            height: 50
                        })) : i.createElement(p.xb, {
                            display: p.X.Flex,
                            flexDirection: p.Z.Column,
                            fullHeight: !0,
                            padding: {
                                top: 3,
                                left: 3,
                                right: 3,
                                bottom: 0
                            },
                            borderRadius: p.x.Large,
                            background: p.r.Base,
                            border: !0
                        }, i.createElement(p.Wa, {
                            padding: {
                                bottom: 2
                            }
                        }, i.createElement(p.W, {
                            type: p.Nb.H3
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
                h = Object(r.compose)(Object(o.a)(m, {
                    options: function(e) {
                        return {
                            variables: {
                                channelID: e.channelID
                            }
                        }
                    }
                }), Object(l.a)(function(e) {
                    return Object(d.a)(m, e.channelID, e.data.user && e.data.user.tournament && e.data.user.tournament.teamLeaderboard)
                }))(u);
            n.d(t, !1, function() {
                return u
            }), n.d(t, "a", function() {
                return h
            })
        },
        GIGq: function(e, t, n) {
            "use strict";
            n.r(t);
            var a, i = n("/MKj"),
                r = n("kRBY"),
                s = n("mrSG"),
                o = n("q1tI"),
                l = n("/7QA"),
                d = n("yR8l"),
                c = n("WlPE"),
                p = n("YkUe"),
                m = n("Sk0q"),
                u = n("Ue10"),
                h = n("xjjM"),
                g = (n("ko4C"), function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return s.__extends(t, e), t.prototype.render = function() {
                        var e = this;
                        if (!this.props.data || this.props.data.loading) return o.createElement(u.Ya, null);
                        if (this.props.data && this.props.data.error) return null;
                        if (this.props.data.user.subscriptionProducts.length < 1) return null;
                        var t = this.props.data.user.subscriptionProducts[0],
                            n = Object(m.b)(t, !0).map(function(t) {
                                return o.createElement(u.Oa, {
                                    className: "insider-pass-emote-and-badge-rewards__item",
                                    "data-test-selector": "insider-pass-emote-reward",
                                    key: t.name
                                }, o.createElement("li", null, o.createElement(u.Wa, {
                                    display: u.X.Flex,
                                    flexDirection: u.Z.Column,
                                    alignItems: u.f.Center,
                                    padding: {
                                        bottom: e.props.insiderPurchaseState === p.a.PrePurchase ? 4 : 2
                                    }
                                }, o.createElement(c.a, {
                                    imageURL: t.imageURL,
                                    size: c.c.Default,
                                    noBorder: !0
                                }), e.props.insiderPurchaseState === p.a.PostPurchase && o.createElement(u.Wa, {
                                    textAlign: u.Jb.Center,
                                    padding: {
                                        top: .5,
                                        bottom: 1
                                    }
                                }, o.createElement(u.W, {
                                    noWrap: !0,
                                    bold: !0
                                }, t.name)))))
                            }),
                            a = this.props.data.user.broadcastBadges.filter(function(e) {
                                return "subscriber" === e.setID
                            }).map(function(e) {
                                return Object(m.a)(e, !1)
                            }),
                            i = this.props.data.user.tournament.rewards.insider.badges.concat(a).map(function(t) {
                                return o.createElement(u.Oa, {
                                    className: "insider-pass-emote-and-badge-rewards__item",
                                    "data-test-selector": "insider-pass-badge-reward",
                                    key: t.name
                                }, o.createElement("li", null, o.createElement(u.Wa, {
                                    display: u.X.Flex,
                                    flexDirection: u.Z.Column,
                                    alignItems: u.f.Center
                                }, o.createElement(c.a, {
                                    imageURL: t.imageURL,
                                    size: c.c.Default,
                                    noBorder: !0
                                }), e.props.insiderPurchaseState === p.a.PostPurchase && o.createElement(u.Wa, {
                                    textAlign: u.Jb.Center,
                                    padding: {
                                        top: .5,
                                        bottom: 1
                                    }
                                }, o.createElement(u.W, {
                                    bold: !0
                                }, t.name)))))
                            });
                        return o.createElement(u.Wa, {
                            className: "insider-pass-emote-and-badge-rewards",
                            display: u.X.Flex,
                            flexDirection: u.Z.Column
                        }, o.createElement(u.Wa, {
                            padding: {
                                bottom: 4
                            }
                        }, o.createElement(u.Wa, {
                            textAlign: u.Jb.Center,
                            padding: {
                                bottom: 2
                            }
                        }, o.createElement(u.W, {
                            fontSize: u.Ba.Size3,
                            color: u.O.Link,
                            bold: !0
                        }, Object(l.d)("Global Overwatch League Twitch Emotes", "CampaignsInsiderPassEmoteAndBadgeRewards"))), o.createElement(u.Oa, {
                            textAlign: u.Jb.Center,
                            display: u.X.Flex,
                            flexWrap: u.Aa.Wrap,
                            flexDirection: u.Z.Row,
                            justifyContent: u.Va.Center,
                            alignItems: u.f.Baseline
                        }, o.createElement("ul", null, n))), o.createElement(u.Wa, null, o.createElement(u.Wa, {
                            textAlign: u.Jb.Center
                        }, o.createElement(u.W, {
                            fontSize: u.Ba.Size3,
                            color: u.O.Link,
                            bold: !0
                        }, Object(l.d)("Global Overwatch League Twitch Badges", "CampaignsInsiderPassEmoteAndBadgeRewards"))), o.createElement(u.Oa, {
                            display: u.X.Flex,
                            flexDirection: u.Z.Row,
                            flexWrap: u.Aa.Wrap,
                            justifyContent: u.Va.Center,
                            padding: {
                                y: 2
                            }
                        }, o.createElement("ul", null, i))))
                    }, t = s.__decorate([Object(d.a)(h, {
                        options: function(e) {
                            return {
                                variables: {
                                    channelID: e.channelID
                                }
                            }
                        }
                    })], t)
                }(o.PureComponent)),
                b = function() {
                    return o.createElement(u.xb, {
                        borderTop: !0,
                        className: "insider-pass-footer",
                        textAlign: u.Jb.Center,
                        padding: {
                            top: 5
                        }
                    }, o.createElement(u.W, null, Object(l.d)("All-Access benefits last up to the start of the 2019 Overwatch League Season.", "CampaignsInsiderPassFooter")), o.createElement(u.W, null, Object(l.d)("Twitch emotes, badges, and in-game content are yours to keep forever.", "CampaignsInsiderPassFooter")))
                },
                f = n("uLiP"),
                k = n("5zXJ"),
                v = n("TSYQ");
            n("yImC");
            ! function(e) {
                e.Major = "major", e.Minor = "minor"
            }(a || (a = {}));
            var y, E = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return s.__extends(t, e), t.prototype.render = function() {
                        var e = v({
                                "insider-pass-marketing-item__major": this.props.type === a.Major
                            }, {
                                "insider-pass-marketing-item__minor": this.props.type === a.Minor
                            }),
                            t = {
                                padding: {}
                            };
                        this.props.type === a.Minor && (t.padding = {
                            left: 2
                        });
                        var n = this.props.type === a.Major ? "auto" : void 0,
                            i = this.props.type === a.Major ? "auto" : void 0,
                            r = this.props.type === a.Major ? u.Z.Column : u.Z.Row;
                        return o.createElement(u.Wa, {
                            className: "insider-pass-marketing-item",
                            display: u.X.Flex,
                            flexDirection: u.Z.Column,
                            breakpointExtraSmall: {
                                flexDirection: r
                            }
                        }, o.createElement(u.Wa, {
                            "data-test-selector": "insider-marketing-item-image",
                            margin: n
                        }, o.createElement("img", {
                            className: e,
                            src: this.props.imageURL
                        })), o.createElement(u.Wa, s.__assign({
                            "data-test-selector": "insider-marketing-item-content",
                            className: this.props.type === a.Major ? e : void 0,
                            display: u.X.Flex,
                            flexDirection: u.Z.Column,
                            margin: i
                        }, t), o.createElement(u.Wa, {
                            padding: {
                                top: 1
                            }
                        }, o.createElement(u.W, {
                            fontSize: u.Ba.Size4,
                            bold: !0
                        }, this.props.title)), o.createElement(u.Wa, {
                            padding: {
                                top: 1
                            }
                        }, o.createElement(u.W, {
                            "data-test-selector": "insider-marketing-item-content-text",
                            fontSize: this.props.type === a.Major ? u.Ba.Size5 : u.Ba.Size6
                        }, this.props.body))))
                    }, t
                }(o.PureComponent),
                w = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return s.__extends(t, e), t.prototype.render = function() {
                        return o.createElement(u.Wa, {
                            className: "insider-pass-post-purchase-marketing-callouts"
                        }, o.createElement(u.Wa, {
                            textAlign: u.Jb.Center,
                            padding: {
                                bottom: 2
                            }
                        }, o.createElement(u.W, {
                            fontSize: u.Ba.Size3,
                            color: u.O.Link,
                            bold: !0
                        }, Object(l.d)("How to Use Your All-Access Experience", "CampaignsInsiderPassPostPurchaseMarketingCallouts"))), o.createElement(u.Wa, {
                            padding: {
                                y: 0
                            },
                            breakpointLarge: {
                                padding: {
                                    y: 2
                                }
                            }
                        }, o.createElement(u.Ia, {
                            gutterSize: u.Ja.Large
                        }, o.createElement(u.P, {
                            cols: {
                                default: 12,
                                lg: 6
                            }
                        }, o.createElement(u.Wa, {
                            padding: {
                                bottom: 2
                            },
                            breakpointLarge: {
                                padding: 0
                            }
                        }, o.createElement(E, {
                            type: a.Minor,
                            title: Object(l.d)("Switch to Passholder-Only Chat", "CampaignsInsiderPassPostPurchaseMarketingCallouts"),
                            body: Object(l.d)('Click on the "Rooms" icon in the upper right corner of chat. Select "all-access" from the drop-down menu.', "CampaignsInsiderPassPostPurchaseMarketingCallouts"),
                            imageURL: k.c + "/owl-2017/marketing/insider-post-purchase-rooms.png"
                        }))), o.createElement(u.P, {
                            cols: {
                                default: 12,
                                lg: 6
                            }
                        }, o.createElement(u.Wa, {
                            padding: {
                                bottom: 2
                            },
                            breakpointLarge: {
                                padding: 0
                            }
                        }, o.createElement(E, {
                            type: a.Minor,
                            title: Object(l.d)("Submit a question for today's post-match Q&A", "CampaignsInsiderPassPostPurchaseMarketingCallouts"),
                            body: Object(l.d)('Click on the "Rooms" icon in the upper right corner of chat. Select "ama-for-[interviewee]" from the drop-down menu. Questions are limited to one per day, per Passholder.', "CampaignsInsiderPassPostPurchaseMarketingCallouts"),
                            imageURL: k.c + "/owl-2017/marketing/insider-post-purchase-q-and-a.png"
                        }))))), o.createElement(u.Wa, {
                            padding: {
                                y: 0
                            },
                            breakpointLarge: {
                                padding: {
                                    y: 2
                                }
                            }
                        }, o.createElement(u.Ia, {
                            gutterSize: u.Ja.Large
                        }, o.createElement(u.P, {
                            cols: {
                                default: 12,
                                lg: 6
                            }
                        }, o.createElement(u.Wa, {
                            padding: {
                                bottom: 2
                            },
                            breakpointLarge: {
                                padding: 0
                            }
                        }, o.createElement(E, {
                            type: a.Minor,
                            title: Object(l.d)("Launch your Command Center stream", "CampaignsInsiderPassPostPurchaseMarketingCallouts"),
                            body: Object(l.d)('Click on the button lableled "Switch to Command Center" on the right side of the page, below the stream.', "CampaignsInsiderPassPostPurchaseMarketingCallouts"),
                            imageURL: k.c + "/owl-2017/marketing/insider-post-purchase-command-center.png"
                        }))), o.createElement(u.P, {
                            cols: {
                                default: 12,
                                lg: 6
                            }
                        }, o.createElement(u.Wa, {
                            padding: {
                                bottom: 2
                            },
                            breakpointLarge: {
                                padding: 0
                            }
                        }, o.createElement(E, {
                            type: a.Minor,
                            title: Object(l.d)("Watch match analysis videos", "CampaignsInsiderPassPostPurchaseMarketingCallouts"),
                            body: Object(l.d)('Click on the "Videos" link in the menu just above the stream. On the Videos page, find a preview video in a carousel at the top of the page - Behind the Screens is coming soon!', "CampaignsInsiderPassPostPurchaseMarketingCallouts"),
                            imageURL: k.c + "/owl-2017/marketing/insider-post-purchase-vods.png"
                        }))))), o.createElement(u.Wa, {
                            padding: {
                                y: 0
                            },
                            breakpointLarge: {
                                padding: {
                                    y: 2
                                }
                            }
                        }, o.createElement(u.Ia, {
                            gutterSize: u.Ja.Large
                        }, o.createElement(u.P, {
                            cols: {
                                default: 12,
                                lg: 6
                            }
                        }, o.createElement(u.Wa, {
                            padding: {
                                bottom: 2
                            },
                            breakpointLarge: {
                                padding: 0
                            }
                        }, o.createElement(E, {
                            type: a.Minor,
                            title: Object(l.d)("Activate your OWL chat badge", "CampaignsInsiderPassPostPurchaseMarketingCallouts"),
                            body: Object(l.d)('Click on the gear icon at the bottom of chat below the text entry field, then click on the "Edit Appearance" link in the Name Display section near the top of the pop-up.', "CampaignsInsiderPassPostPurchaseMarketingCallouts"),
                            imageURL: k.c + "/owl-2017/marketing/insider-post-purchase-badge.png"
                        }))), o.createElement(u.P, {
                            cols: {
                                default: 12,
                                lg: 6
                            }
                        }, o.createElement(u.Wa, {
                            padding: {
                                bottom: 2
                            },
                            breakpointLarge: {
                                padding: 0
                            }
                        }, o.createElement(E, {
                            type: a.Minor,
                            title: Object(l.d)("Post emotes in chat to cheer on your team", "CampaignsInsiderPassPostPurchaseMarketingCallouts"),
                            body: Object(l.d)('Click on the smiley-face icon in the top right of the Chat text field, then click on the emote you want. Click the "Chat" button to post the emote.', "CampaignsInsiderPassPostPurchaseMarketingCallouts"),
                            imageURL: k.c + "/owl-2017/marketing/insider-post-purchase-chat.png"
                        }))))))
                    }, t
                }(o.PureComponent),
                C = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return s.__extends(t, e), t.prototype.render = function() {
                        return o.createElement(u.Wa, {
                            className: "insider-pass-post-purchase"
                        }, o.createElement(u.xb, {
                            borderBottom: !0,
                            margin: {
                                top: 2
                            }
                        }, o.createElement(f.b, {
                            channelID: this.props.channelID,
                            insiderPurchaseState: p.a.PostPurchase,
                            blizzardRewardsAvailable: this.props.blizzardRewardsAvailable
                        })), o.createElement(u.xb, {
                            borderBottom: !0,
                            padding: {
                                top: 4,
                                bottom: 3
                            }
                        }, o.createElement(w, null)), o.createElement(u.Wa, {
                            padding: {
                                top: 4,
                                bottom: 3
                            }
                        }, o.createElement(g, {
                            channelID: this.props.channelID,
                            insiderPurchaseState: p.a.PostPurchase
                        })), o.createElement(b, null))
                    }, t
                }(o.PureComponent),
                S = n("4rCz");
            n("R4QF");
            ! function(e) {
                e.Root = "insider-pass-purchase-banner-root", e.BitsPromotion = "insider-pass-purchase-banner-bits-promotion", e.PrimePromotion = "insider-pass-purchase-banner-prime-promotion"
            }(y || (y = {}));
            var P, N = "insider-pass-purchase-banner",
                x = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return s.__extends(t, e), t.prototype.render = function() {
                        var e = Object(S.d)("Get the All-Access Pass", "CampaignsTabs"),
                            t = v(N, this.props.className);
                        return o.createElement(u.xb, {
                            "data-test-selector": y.Root,
                            border: !0,
                            borderRadius: u.x.Large,
                            className: t,
                            overflow: u.Za.Hidden
                        }, o.createElement(u.xb, {
                            color: u.O.Overlay,
                            background: u.r.Accent,
                            textAlign: u.Jb.Center,
                            padding: .5
                        }, o.createElement(u.W, {
                            fontSize: u.Ba.Size4
                        }, Object(S.d)("All-Access Pass", "CampaignsTabs"))), o.createElement(u.xb, {
                            display: u.X.Flex,
                            flexDirection: u.Z.Column,
                            justifyContent: u.Va.Center,
                            alignItems: u.f.Center,
                            breakpointMedium: {
                                flexDirection: u.Z.Row
                            },
                            borderBottom: this.props.bitsPromoIsActive,
                            padding: 1
                        }, o.createElement(u.xb, {
                            fullHeight: !0,
                            display: u.X.Flex,
                            alignItems: u.f.Center,
                            justifyContent: u.Va.Center,
                            margin: {
                                x: 3,
                                bottom: 3,
                                top: 2
                            }
                        }, o.createElement(u.S, {
                            className: N + "__logo",
                            src: k.c + "/owl-2017/all-access-logo.svg",
                            alt: Object(S.d)("Overwatch League All-Access Pass on Twitch", "CampaignsTabs")
                        })), o.createElement(u.Wa, {
                            className: N + "__body-text",
                            margin: 1,
                            justifyContent: u.Va.Center
                        }, o.createElement(u.Oa, {
                            margin: {
                                bottom: .5
                            }
                        }, o.createElement(u.W, {
                            bold: !0,
                            color: u.O.Base,
                            fontSize: u.Ba.Size4
                        }, Object(S.d)("Your VIP pass to the best of the Overwatch League.", "CampaignsTabs"))), o.createElement(u.W, {
                            color: u.O.Base,
                            fontSize: u.Ba.Size6
                        }, Object(S.d)("The season may be over, but the battle goes on. Enjoy the off-season with the All-Access Pass for 2018 – only {price}.", {
                            price: this.props.passPrice
                        }, "CampaignsTabs")), o.createElement(u.Wa, {
                            margin: {
                                top: 2,
                                bottom: 1
                            },
                            textAlign: u.Jb.Left
                        }, o.createElement(u.z, {
                            targetBlank: !0,
                            ariaLabel: e + " " + this.props.passPrice,
                            linkTo: this.props.purchaseUrl,
                            purchase: this.props.passPrice
                        }, e)))), this.props.bitsPromoIsActive && o.createElement(u.xb, {
                            "data-test-selector": y.BitsPromotion,
                            display: u.X.Flex,
                            justifyContent: u.Va.Center,
                            alignItems: u.f.Center,
                            padding: 2
                        }, o.createElement(u.Wa, {
                            className: N + "__bits-image-wrapper",
                            margin: {
                                right: 1
                            }
                        }, o.createElement(u.S, {
                            className: N + "__bits-image",
                            src: k.a + "/cheer/light/static/100/3.png",
                            alt: ""
                        })), o.createElement(u.Wa, null, o.createElement(u.W, {
                            bold: !0,
                            fontSize: u.Ba.Size5
                        }, Object(S.d)("Buy now and get 500 Bits as a bonus reward on purchase, only with Twitch Prime.", "CampaignsTabs")), o.createElement(u.W, {
                            color: u.O.Alt2
                        }, Object(S.d)("Offer available for a limited time. Terms and conditions apply.", "CampaignsTabs")))))
                    }, t
                }(o.Component),
                I = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return s.__extends(t, e), t.prototype.render = function() {
                        return o.createElement(u.Wa, {
                            display: u.X.Flex,
                            flexDirection: u.Z.Column,
                            padding: {
                                top: 2,
                                bottom: 4
                            }
                        }, o.createElement(u.Wa, {
                            textAlign: u.Jb.Center,
                            padding: {
                                bottom: 2
                            }
                        }, o.createElement(u.W, {
                            fontSize: u.Ba.Size3,
                            color: u.O.Link,
                            bold: !0
                        }, Object(l.d)("The Overwatch League All-Access Experience", "CampaignsInsiderPassTab"))), o.createElement(u.Wa, {
                            display: u.X.Flex,
                            flexDirection: u.Z.Column,
                            breakpointSmall: {
                                flexDirection: u.Z.Row
                            },
                            justifyContent: u.Va.Center
                        }, o.createElement(u.Wa, {
                            margin: {
                                x: 2
                            },
                            padding: {
                                bottom: 2
                            },
                            breakpointSmall: {
                                padding: 0
                            }
                        }, o.createElement(E, {
                            type: a.Major,
                            title: Object(l.d)("Exclusive Command Center livestream", "CampaignsInsiderPassTab"),
                            body: Object(l.d)("This game-changing stream shows you alternate camera angles, live stats, player POVs, and team facecams all on one multiviewer overlay. Try it for free until Stage 4.", "CampaignsInsiderPassTab"),
                            imageURL: k.c + "/owl-2017/marketing/insider-stream.jpg"
                        })), o.createElement(u.Wa, {
                            margin: {
                                x: 2
                            },
                            padding: {
                                bottom: 2
                            },
                            breakpointSmall: {
                                padding: 0
                            }
                        }, o.createElement(E, {
                            type: a.Major,
                            title: Object(l.d)("Your questions, answered!", "CampaignsInsiderPassTab"),
                            body: Object(l.d)("After Overwatch League match day broadcasts, enjoy an interactive player Q&A session by submitting your questions in Passholder-only chat. Selected questions will be answered by players live on the Command Center stream.", "CampaignsInsiderPassTab"),
                            imageURL: k.c + "/owl-2017/marketing/insider-questions.jpg"
                        })), o.createElement(u.Wa, {
                            margin: {
                                x: 2
                            }
                        }, o.createElement(E, {
                            type: a.Major,
                            title: Object(l.d)("Behind the Screens: Match analysis by players", "CampaignsInsiderPassTab"),
                            body: Object(l.d)("Top players from each team will walk you through their thoughts on a match and explain what they did and why in an exclusive video every week, starting April 6th!", "CampaignsInsiderPassTab"),
                            imageURL: k.c + "/owl-2017/marketing/insider-vods.jpg"
                        }))))
                    }, t
                }(o.PureComponent),
                z = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return s.__extends(t, e), t.prototype.render = function() {
                        return o.createElement(u.Ia, {
                            gutterSize: u.Ja.Large
                        }, o.createElement(u.P, {
                            cols: {
                                default: 12,
                                lg: 6
                            }
                        }, o.createElement(u.Wa, {
                            padding: {
                                bottom: 2
                            },
                            breakpointLarge: {
                                padding: 0
                            }
                        }, o.createElement(E, {
                            type: a.Minor,
                            title: Object(l.d)("Passholder-Only Chat", "CampaignsInsiderPassMarketingMinorCallouts"),
                            body: Object(l.d)("Hang out and chat with people who love the game as much as you do.", "CampaignsInsiderPassMarketingMinorCallouts"),
                            imageURL: k.c + "/owl-2017/marketing/insider-pre-purchase-chat.png"
                        }))), o.createElement(u.P, {
                            cols: {
                                default: 12,
                                lg: 6
                            }
                        }, o.createElement(u.Wa, {
                            padding: {
                                bottom: 2
                            },
                            breakpointLarge: {
                                padding: 0
                            }
                        }, o.createElement(E, {
                            type: a.Minor,
                            title: Object(l.d)("Ad-free viewing on Overwatch League", "CampaignsInsiderPassMarketingMinorCallouts"),
                            body: Object(l.d)("With the All-Access Pass you won’t have to sit through Twitch ads before you can watch the game.", "CampaignsInsiderPassMarketingMinorCallouts"),
                            imageURL: k.c + "/owl-2017/marketing/insider-pre-purchase-ads.png"
                        }))))
                    }, t
                }(o.PureComponent),
                O = (n("9Kf6"), function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.onPlayPause = function() {
                            n.videoRef && (n.state.playing ? n.videoRef.pause() : n.videoRef.play(), n.setState({
                                playing: !n.state.playing
                            }))
                        }, n.onMuteMax = function() {
                            n.videoRef && (n.state.muted ? n.videoRef.muted = !1 : n.videoRef.muted = !0, n.setState({
                                muted: !n.state.muted
                            }))
                        }, n.setRef = function(e) {
                            n.videoRef = e
                        }, n.handleMouseEnter = function() {
                            n.setState({
                                hovering: !0
                            }), n.setState({
                                shouldFade: n.state.playing
                            })
                        }, n.handleMouseLeave = function() {
                            n.setState({
                                hovering: !1
                            }), n.setState({
                                shouldFade: n.state.playing
                            })
                        }, n.state = {
                            playing: !1,
                            muted: !1,
                            hovering: !1,
                            shouldFade: !1
                        }, n
                    }
                    return s.__extends(t, e), t.prototype.render = function() {
                        return o.createElement("div", {
                            onMouseEnter: this.handleMouseEnter,
                            onMouseLeave: this.handleMouseLeave
                        }, o.createElement(u.Wa, {
                            position: u.eb.Relative,
                            className: "callout-video"
                        }, o.createElement("video", {
                            className: "callout-video__video",
                            ref: this.setRef,
                            preload: "auto",
                            loop: !0,
                            autoPlay: !1,
                            playsInline: !0,
                            poster: this.props.posterURL,
                            "max-height": "270",
                            "max-width": "480"
                        }, o.createElement("source", {
                            src: this.props.videoURL,
                            type: "video/mp4"
                        })), o.createElement(u.i, {
                            type: this.state.hovering ? u.n.FadeIn : u.n.FadeOut,
                            duration: u.k.Medium,
                            enabled: this.state.shouldFade
                        }, o.createElement(u.Wa, {
                            position: u.eb.Absolute,
                            attachTop: !0,
                            attachLeft: !0,
                            fullWidth: !0,
                            fullHeight: !0,
                            display: u.X.Flex,
                            alignItems: u.f.Center,
                            justifyContent: u.Va.Center
                        }, o.createElement("button", {
                            className: "callout-video__controls playpause-button",
                            onClick: this.onPlayPause
                        }, !this.state.playing && o.createElement(u.Wa, {
                            className: "playpause-button__playicon"
                        }, " ", o.createElement(u.nb, {
                            asset: u.ob.MiniPlayerPlay,
                            width: 35,
                            height: 35
                        }), " "), this.state.playing && o.createElement(u.nb, {
                            asset: u.ob.MiniPlayerPause,
                            width: 35,
                            height: 35
                        }))), o.createElement(u.Wa, {
                            position: u.eb.Absolute,
                            attachBottom: !0,
                            attachRight: !0,
                            padding: {
                                right: 1,
                                bottom: 1
                            }
                        }, o.createElement("button", {
                            className: "callout-video__controls",
                            onClick: this.onMuteMax
                        }, o.createElement(u.nb, {
                            asset: this.state.muted ? u.ob.VolumeMuted : u.ob.VolumeMax
                        }))))))
                    }, t
                }(o.PureComponent));
            n("RkfI");
            ! function(e) {
                e.MarketingSpecialCalloutInfo = "marketing-special-callout-info", e.MarketingSpecialCalloutDesc = "margeting-special-callout-desc"
            }(P || (P = {}));
            var T = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return s.__extends(t, e), t.prototype.render = function() {
                        return o.createElement(u.Ia, null, o.createElement(u.P, {
                            cols: {
                                default: 10,
                                xl: 6
                            },
                            offset: {
                                default: 1,
                                xl: 0
                            }
                        }, o.createElement(u.Wa, {
                            "data-test-selector": P.MarketingSpecialCalloutInfo,
                            justifyContent: u.Va.Center,
                            alignItems: u.f.Center,
                            padding: {
                                top: 3,
                                bottom: 3,
                                left: 2,
                                right: 2
                            }
                        }, this.props.isJustAdded && o.createElement(u.xb, {
                            display: u.X.Flex,
                            alignItems: u.f.Center,
                            position: u.eb.Relative,
                            className: "marketing-special-callout__just-added-banner",
                            padding: {
                                left: 1
                            }
                        }, o.createElement(u.W, {
                            bold: !0,
                            fontSize: u.Ba.Size5
                        }, Object(l.d)("JUST ADDED!", "DJLucioCallout"))), o.createElement(u.Wa, {
                            padding: {
                                top: this.props.isJustAdded ? 1 : 4
                            }
                        }, this.props.title), this.props.description && o.createElement(u.Wa, {
                            padding: {
                                top: 2
                            },
                            "data-test-selector": P.MarketingSpecialCalloutDesc
                        }, o.createElement(u.W, {
                            fontSize: u.Ba.Size5
                        }, this.props.description)))), o.createElement(u.P, {
                            cols: {
                                default: 10,
                                xl: 6
                            },
                            offset: {
                                default: 1,
                                xl: 0
                            }
                        }, o.createElement(u.Wa, {
                            padding: {
                                top: 3,
                                bottom: 3,
                                left: 2,
                                right: 2
                            }
                        }, this.props.videoURL && o.createElement(O, {
                            posterURL: this.props.posterURL,
                            videoURL: this.props.videoURL
                        }), !this.props.videoURL && o.createElement(u.Wa, {
                            className: "marketing-special-callout__image",
                            position: u.eb.Relative,
                            display: u.X.Flex
                        }, o.createElement(u.S, {
                            src: this.props.posterURL,
                            alt: this.props.contentAlt
                        })))))
                    }, t
                }(o.PureComponent),
                _ = n("NAv5"),
                R = n("HGFl"),
                W = "esport_insider_allstars_launch",
                F = "2018-08-24T16:00:00Z";
            var A, L = n("W8Fi");
            n("T9jf");
            (A || (A = {})).PrimePromoBanner = "insider-pass-pre-purchase-prime-promo-banner";
            var D = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return s.__extends(t, e), t.prototype.render = function() {
                        var e = Object(L.g)(this.props.subscriptionProducts) ? Object(L.c)(this.props.subscriptionProducts[0]) : this.props.subscriptionProducts[0].price,
                            t = function(e, t) {
                                var n = S.b.get(W, F),
                                    a = Object(R.c)(n),
                                    i = Object(_.isEqual)(e, a) || Object(_.isAfter)(e, a),
                                    r = t && t.roles && t.roles.isStaff || !1;
                                return i || r
                            }(new Date(Date.now()), this.props.user);
                        return o.createElement(u.Wa, {
                            className: "insider-pass-pre-purchase"
                        }, o.createElement(u.Pa, {
                            margin: {
                                bottom: 3,
                                top: 2
                            }
                        }, o.createElement(x, {
                            passPrice: e,
                            purchaseUrl: this.props.subscriptionProducts[0].url
                        })), o.createElement(u.xb, {
                            borderBottom: !0,
                            padding: {
                                bottom: 2
                            },
                            margin: {
                                y: 2
                            }
                        }, o.createElement(u.Wa, {
                            textAlign: u.Jb.Center
                        }, o.createElement(u.W, {
                            bold: !0,
                            fontSize: u.Ba.Size2,
                            color: u.O.Link,
                            lineHeight: u.Xa.Heading
                        }, Object(S.d)("What you get with the All-Access Pass:", "CampaignsTabs"))), o.createElement(u.Ia, null, o.createElement(u.P, {
                            cols: {
                                default: 6,
                                md: 3
                            }
                        }, o.createElement(u.Wa, {
                            className: "insider-pass-pre-purchase__feature-box"
                        }, o.createElement(u.S, {
                            src: k.c + "/owl-2017/marketing/insider-feature-boxes/1-IGC.png",
                            alt: Object(S.d)("15 Skins and additional In-Game Items", "CampaignsTabs")
                        }), o.createElement(u.Wa, {
                            padding: {
                                y: 1
                            }
                        }, Object(S.d)("<x:header>15</x:header> <x:subheader>Skins</x:subheader> <x:body>And additional In-Game Items</x:body>", {
                            "x:header": j,
                            "x:subheader": B,
                            "x:body": M
                        }, "CampaignsTabs")))), o.createElement(u.P, {
                            cols: {
                                default: 6,
                                md: 3
                            }
                        }, o.createElement(u.Wa, {
                            className: "insider-pass-pre-purchase__feature-box"
                        }, o.createElement(u.S, {
                            src: k.c + "/owl-2017/marketing/insider-feature-boxes/2-Emotes.png",
                            alt: Object(S.d)("Twitch emotes & chat badges", "CampaignsTabs")
                        }), o.createElement(u.Wa, {
                            padding: {
                                y: 1
                            }
                        }, Object(S.d)("<x:header>25</x:header> <x:subheader>Emotes</x:subheader> <x:body>Twitch emotes & chat badges</x:body>", {
                            "x:header": j,
                            "x:subheader": B,
                            "x:body": M
                        }, "CampaignsTabs")))), o.createElement(u.P, {
                            cols: {
                                default: 6,
                                md: 3
                            }
                        }, o.createElement(u.Wa, {
                            className: "insider-pass-pre-purchase__feature-box"
                        }, o.createElement(u.S, {
                            src: k.c + "/owl-2017/marketing/insider-feature-boxes/3-chat-slice.png",
                            alt: Object(S.d)("An exclusive chat room for passholders", "CampaignsTabs")
                        }), o.createElement(u.Wa, {
                            padding: {
                                y: 1
                            }
                        }, Object(S.d)("<x:header>1</x:header> <x:subheader>Chatroom</x:subheader> <x:body>An exclusive chat room for pass holders</x:body>", {
                            "x:header": j,
                            "x:subheader": B,
                            "x:body": M
                        }, "CampaignsTabs")))), o.createElement(u.P, {
                            cols: {
                                default: 6,
                                md: 3
                            }
                        }, o.createElement(u.Wa, {
                            className: "insider-pass-pre-purchase__feature-box"
                        }, o.createElement(u.S, {
                            src: k.c + "/owl-2017/marketing/insider-feature-boxes/4-QandA.png",
                            alt: Object(S.d)("Exclusive Player Q&A, Inside the League, Behind the Screens and more!", "CampaignsTabs")
                        }), o.createElement(u.Wa, {
                            padding: {
                                y: 1
                            }
                        }, Object(S.d)("<x:header>Tons</x:header> <x:subheader>Of videos</x:subheader> <x:body>Exclusive Player Q&A, Inside the League, Behind the Screens and more!</x:body>", {
                            "x:header": j,
                            "x:subheader": B,
                            "x:body": M
                        }, "CampaignsTabs")))))), t && o.createElement(u.xb, {
                            borderBottom: !0
                        }, o.createElement(T, {
                            posterURL: k.c + "/owl-2017/insider-test/owl-igc-allstars-pack.png",
                            title: Object(S.d)("<x:header>PLAY LIKE AN ALL STAR</x:header>", {
                                "x:header": U
                            }, "CampaignsTabs"),
                            description: Object(S.d)("All-Star Weekend hero skins for Mercy, Brigitte, Moira, Reinhardt, D.Va, and Tracer", "CampaignsTabs"),
                            contentAlt: Object(S.d)("Play like an all star", "CampaignsTabs"),
                            isJustAdded: !0
                        })), o.createElement(u.xb, {
                            borderBottom: !0
                        }, o.createElement(T, {
                            posterURL: k.c + "/owl-2017/insider-test/lucio-emote-static.png",
                            videoURL: k.c + "/owl-2017/insider-test/djlucio-emote-video.mp4",
                            title: Object(S.d)("<x:header>PUMP UP THE VOLUME</x:header> <x:body>with the new Lucio DJ emote</x:body>", {
                                "x:header": U,
                                "x:body": H
                            }, "DJLucioCallout"),
                            contentAlt: Object(S.d)("Pump up the volume", "CampaignsTabs"),
                            isJustAdded: !t
                        })), o.createElement(u.xb, {
                            borderBottom: !0
                        }, o.createElement(f.b, {
                            channelID: this.props.channelID,
                            insiderPurchaseState: p.a.PrePurchase
                        })), o.createElement(u.xb, {
                            padding: {
                                bottom: 2
                            },
                            borderBottom: !0
                        }, o.createElement(I, null)), o.createElement(u.Wa, {
                            className: "insider-pass-pre-purchase__marketing",
                            padding: {
                                y: 3
                            }
                        }, o.createElement(u.xb, {
                            borderBottom: !0,
                            padding: {
                                y: 2
                            }
                        }, o.createElement(g, {
                            channelID: this.props.channelID,
                            insiderPurchaseState: p.a.PrePurchase
                        })), o.createElement(u.Wa, {
                            padding: {
                                top: 2
                            }
                        }, o.createElement(z, null))), o.createElement(b, null))
                    }, t
                }(o.PureComponent),
                j = function(e) {
                    return o.createElement(u.W, {
                        className: "insider-pass-pre-purchase__feature-box-header",
                        bold: !0,
                        color: u.O.Link,
                        fontSize: u.Ba.Size1
                    }, e)
                },
                B = function(e) {
                    return o.createElement(u.W, {
                        className: "insider-pass-pre-purchase__feature-box-subheader",
                        bold: !0,
                        color: u.O.Link,
                        fontSize: u.Ba.Size3,
                        transform: u.Mb.Uppercase
                    }, e)
                },
                M = function(e) {
                    return o.createElement(u.W, null, e)
                },
                U = function(e) {
                    return o.createElement(u.W, {
                        fontSize: u.Ba.Size1,
                        bold: !0,
                        color: u.O.Link,
                        lineHeight: u.Xa.Heading
                    }, e)
                },
                H = function(e) {
                    return o.createElement(u.W, {
                        fontSize: u.Ba.Size3,
                        bold: !0,
                        lineHeight: u.Xa.Heading
                    }, e)
                },
                V = (n("etgA"), function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return s.__extends(t, e), t.prototype.render = function() {
                        return o.createElement(u.Wa, {
                            className: "esports-insider-pass-tab"
                        }, this.props.hasInsiderPass && o.createElement(C, {
                            channelID: this.props.channelID,
                            blizzardRewardsAvailable: this.props.blizzardRewardsAvailable
                        }), !this.props.hasInsiderPass && this.props.subscriptionProducts && o.createElement(D, {
                            channelID: this.props.channelID,
                            subscriptionProducts: this.props.subscriptionProducts,
                            userID: this.props.user && this.props.user.id,
                            userHasPrime: this.props.userHasPrime,
                            user: this.props.user
                        }))
                    }, t
                }(o.PureComponent));
            var q = Object(i.connect)(function(e) {
                return {
                    user: Object(r.e)(e)
                }
            })(V);
            n.d(t, "PublicProps", function() {}), n.d(t, "CampaignsInsiderPassTab", function() {
                return q
            })
        },
        IEPL: function(e, t, n) {},
        JPbf: function(e, t, n) {},
        KUJM: function(e, t, n) {},
        NcrI: function(e, t) {
            var n = {
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
            n.loc.source = {
                body: "query CampaignsLeaderboardData($userIDs: [ID!] $isTeam: Boolean!) {\nusers (ids: $userIDs) {\nid\ndisplayName @skip(if: $isTeam)\nprofileImageURL(width: 50) @skip(if: $isTeam)\ntournament @include(if: $isTeam) {\nid\nteams {\nid\nname\nlogoURL\ndivision\n}\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        ODAr: function(e, t, n) {},
        PvlP: function(e, t, n) {},
        QlRw: function(e, t, n) {
            "use strict";
            var a;
            n.d(t, "a", function() {
                    return a
                }),
                function(e) {
                    e.NorthAmerica = "us", e.Europe = "eu", e.Korea = "kr", e.Taiwan = "tw", e.China = "cn", e.SouthEastAsia = "sea"
                }(a || (a = {}))
        },
        R3ld: function(e, t, n) {
            "use strict";
            n.r(t);
            var a = n("mrSG"),
                i = n("q1tI"),
                r = n("/7QA"),
                s = n("APPd"),
                o = n("Ue10"),
                l = (n("aPbA"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onVideoToggle = function() {
                            t.props.isLive && t.props.onVideoToggle && t.props.onVideoToggle()
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        var e = Object(r.d)("Switch to Standard Stream", "CampaignsTabs"),
                            t = Object(r.d)("Switch to Command Center", "CampaignsTabs"),
                            n = Object(r.d)("Command Center is unavailable", "CampaignsTabs"),
                            a = Object(r.d)("Command Center will return during live broadcast", "CampaignsTabs"),
                            s = Object(r.d)("Command Center view: Watch with All-Access Pass", "CampaignsTabs"),
                            l = !(this.props.isLive && !this.props.noAccess || this.props.showInsiderChannel && !this.props.isLive),
                            d = n;
                        this.props.noAccess ? d = s : this.props.isLive || (d = a);
                        var c = i.createElement("svg", {
                                width: "24",
                                height: "16",
                                viewBox: "0 0 24 16",
                                className: "video-toggle-button__icon",
                                "data-test-selector": "video-toggle-button__standard-svg"
                            }, i.createElement("path", {
                                d: "M3 3h21v13H3V3zm2 2v9h17V5H5z",
                                opacity: ".5"
                            }), i.createElement("path", {
                                d: "M0 0h1v14H0z M0 0h21v1H0z"
                            })),
                            p = i.createElement("svg", {
                                width: "24",
                                height: "16",
                                viewBox: "0 0 24 16",
                                className: "video-toggle-button__icon",
                                "data-test-selector": "video-toggle-button__alternate-svg"
                            }, i.createElement("path", {
                                fillRule: "evenodd",
                                d: "M0 0h21v13H0z M2 2h8v5H2zM2 8h4v3H2zM15 8h4v3h-4zM7 8h7v2H7zM11 2h8v5h-8z"
                            }), i.createElement("path", {
                                opacity: ".5",
                                d: "M23 2h1v14h-1z M3 15h21v1H3z M0 0h21v13H0z"
                            })),
                            m = i.createElement(o.z, {
                                ariaLabel: this.props.showInsiderChannel ? e : t,
                                type: o.F.Hollow,
                                "data-test-selector": "video-toggle-button",
                                disabled: l,
                                onClick: this.onVideoToggle
                            }, i.createElement(o.Wa, {
                                display: o.X.Flex,
                                alignItems: o.f.Center
                            }, this.props.showInsiderChannel ? c : p, i.createElement(o.Wa, {
                                display: o.X.Flex,
                                flexDirection: o.Z.Column,
                                alignItems: o.f.Start,
                                margin: {
                                    left: .5
                                }
                            }, i.createElement(o.Oa, {
                                visibility: this.props.showInsiderChannel ? o.Yb.Visible : o.Yb.Hidden,
                                "data-test-selector": "video-toggle-button__standard-string"
                            }, i.createElement(o.W, {
                                type: o.Nb.Span,
                                className: "video-toggle-button__text"
                            }, e)), i.createElement(o.Oa, {
                                visibility: this.props.showInsiderChannel ? o.Yb.Hidden : o.Yb.Visible,
                                "data-test-selector": "video-toggle-button__alternate-string"
                            }, i.createElement(o.W, {
                                type: o.Nb.Span,
                                className: "video-toggle-button__text video-toggle-button__text--alternate"
                            }, t)))));
                        return l ? i.createElement(o.Qb, {
                            label: d,
                            "data-test-selector": "video-toggle-button__tooltip"
                        }, m) : m
                    }, t
                }(i.PureComponent)),
                d = n("Rfsd"),
                c = n("GIGq"),
                p = n("Y6wA"),
                m = n("n7kk"),
                u = n("fR2g"),
                h = n("QlRw"),
                g = n("KnFV"),
                b = "esports-insider-pass-trial-displayed",
                f = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.state = {
                            tabToShow: g.a.Progress
                        }, n.tabClick = function(e) {
                            var t = g.a.Progress;
                            e.currentTarget.hasAttribute("data-tab-target") ? t = e.currentTarget.getAttribute("data-tab-target") || t : e.currentTarget.parentElement && e.currentTarget.parentElement.hasAttribute("data-tab-target") && (t = e.currentTarget.parentElement.getAttribute("data-tab-target") || t), n.setState({
                                tabToShow: t
                            })
                        }, n.state.tabToShow = g.a.Progress, r.m.remove(b), n
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        var e = this.props,
                            t = e.hasInsiderPass,
                            n = e.hasPrime,
                            a = !!this.props.blizzardAccount,
                            b = this.props.blizzardAccount && this.props.blizzardAccount.region !== h.a.China,
                            f = null;
                        return this.state.tabToShow === g.a.Progress ? f = i.createElement(p.CampaignsProgressTab, {
                            campaignProperties: this.props.campaignProperties,
                            channelID: this.props.channelID,
                            channelLogin: this.props.channelLogin,
                            blizzardAccount: this.props.blizzardAccount,
                            tabSwitch: this.tabClick,
                            hasInsiderPass: t
                        }) : this.state.tabToShow === g.a.Rewards ? f = i.createElement(m.CampaignsRewardsTab, {
                            campaignProperties: this.props.campaignProperties,
                            channelID: this.props.channelID,
                            blizzardAccount: this.props.blizzardAccount,
                            userHasPrime: n
                        }) : this.state.tabToShow === g.a.Info ? f = i.createElement(d.a, {
                            channelLogin: this.props.channelLogin,
                            channelID: this.props.channelID
                        }) : this.state.tabToShow === g.a.InsiderPass && (f = i.createElement(c.CampaignsInsiderPassTab, {
                            channelID: this.props.channelID,
                            blizzardRewardsAvailable: a && b,
                            userHasPrime: n,
                            subscriptionProducts: this.props.subscriptionProducts,
                            hasInsiderPass: t
                        })), i.createElement(o.Wa, {
                            margin: {
                                y: 3
                            },
                            position: o.eb.Relative
                        }, i.createElement(o.xb, {
                            borderBottom: !0
                        }, i.createElement(o.Wa, {
                            display: o.X.Flex,
                            flexDirection: o.Z.ColumnReverse,
                            flexWrap: o.Aa.Wrap,
                            breakpointExtraLarge: {
                                flexDirection: o.Z.Row
                            }
                        }, i.createElement(o.P, {
                            cols: {
                                xl: 7,
                                default: 12
                            }
                        }, i.createElement(o.Oa, {
                            display: o.X.Flex,
                            alignItems: o.f.End,
                            fullHeight: !0
                        }, i.createElement("ul", null, i.createElement(u.a, {
                            id: g.a.Progress,
                            isSelected: this.state.tabToShow === g.a.Progress,
                            title: Object(r.d)("Event Progress", "OWLTabs"),
                            onClick: this.tabClick
                        }), i.createElement(u.a, {
                            id: g.a.InsiderPass,
                            isSelected: this.state.tabToShow === g.a.InsiderPass,
                            title: Object(r.d)("All-Access Pass", "OWLTabs"),
                            onClick: this.tabClick
                        }), i.createElement(u.a, {
                            id: g.a.Rewards,
                            isSelected: this.state.tabToShow === g.a.Rewards,
                            title: Object(r.d)("Loot", "OWLTabs"),
                            onClick: this.tabClick
                        }), i.createElement(u.a, {
                            id: g.a.Info,
                            isSelected: this.state.tabToShow === g.a.Info,
                            title: Object(r.d)("Info", "OWLTabs"),
                            onClick: this.tabClick
                        })))), i.createElement(o.P, {
                            cols: {
                                xl: 5,
                                default: 12
                            }
                        }, i.createElement(o.Wa, {
                            display: o.X.Flex,
                            alignItems: o.f.End,
                            padding: {
                                bottom: 1
                            },
                            breakpointExtraLarge: {
                                padding: {
                                    bottom: .5
                                },
                                justifyContent: o.Va.End
                            }
                        }, i.createElement(l, {
                            isLive: this.props.isLive,
                            noAccess: !t,
                            showInsiderChannel: !!this.props.showInsiderChannel,
                            onVideoToggle: this.props.onChannelChange
                        }), this.props.currentUserID && i.createElement(o.Wa, {
                            margin: {
                                left: 1
                            }
                        }, a && !b && this.state.tabToShow === g.a.Rewards ? i.createElement(o.W, {
                            color: o.O.Error
                        }, Object(r.d)("Not available in linked account's region", "OWLTabs")) : i.createElement(s.a, {
                            onOpenBlizzardConnect: this.props.onOpenBlizzardConnect
                        })))))), f)
                    }, t
                }(i.Component);
            n.d(t, "ESPORT_INSIDER_PASS_TRIAL_STORAGE_KEY", function() {
                return b
            }), n.d(t, "OWLTabs", function() {
                return f
            })
        },
        R4QF: function(e, t, n) {},
        RNrf: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "BlizzardAccountForUser"
                    },
                    variableDefinitions: [],
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
                    end: 91
                }
            };
            n.loc.source = {
                body: "query BlizzardAccountForUser {\ncurrentUser {\nid\nblizzardAccount {\nid\nbattleTag\nregion\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        RkfI: function(e, t, n) {},
        Sk0q: function(e, t, n) {
            "use strict";
            n.d(t, "b", function() {
                return r
            }), n.d(t, "a", function() {
                return s
            });
            var a = n("/5u6"),
                i = n("OpME");

            function r(e, t) {
                return e.emotes ? Object(i.b)(e.emotes).map(function(e) {
                    var n = "",
                        i = e.srcSet.split(",").find(function(e) {
                            return e.includes("3.0x")
                        });
                    return i && (n = i.trim().split(" ")[0]), {
                        id: e.id,
                        name: e.displayName,
                        type: a.a.Insider,
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

            function s(e, t) {
                return {
                    id: e.id,
                    type: a.a.Insider,
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
        T9jf: function(e, t, n) {},
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
        WaLP: function(e, t, n) {
            "use strict";
            var a = n("/MKj"),
                i = n("kRBY"),
                r = n("mrSG"),
                s = n("q1tI"),
                o = n("oJmH"),
                l = n("/7QA"),
                d = n("yR8l"),
                c = n("eDVu"),
                p = n("+LJB"),
                m = n("i4ay"),
                u = n("Ue10"),
                h = n("ktVs"),
                g = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        return !this.props.data || this.props.data.loading && !this.props.data.user ? s.createElement(u.Ya, {
                            fillContent: !0
                        }) : this.props.data && this.props.data.error ? s.createElement(u.Wa, {
                            fullHeight: !0,
                            fullWidth: !0,
                            textAlign: u.Jb.Center,
                            padding: {
                                top: 4
                            }
                        }, s.createElement(u.nb, {
                            asset: u.ob.DeadGlitch,
                            fill: !0,
                            width: 50,
                            height: 50
                        })) : s.createElement(u.xb, {
                            display: u.X.Flex,
                            flexDirection: u.Z.Column,
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
                        }, s.createElement(u.Wa, {
                            padding: {
                                bottom: 2
                            }
                        }, s.createElement(u.W, {
                            type: u.Nb.H3
                        }, Object(l.d)("Individual Leaderboards", "CampaignsProgressTab"))), s.createElement(m.a, {
                            leaderboardRows: this.props.data.user.tournament.globalLeaderboard.items.edges,
                            pageSize: 10,
                            channelID: this.props.channelID,
                            isTeam: !1,
                            userRow: this.props.data.user.tournament.self && this.props.data.user.tournament.self.globalLeaderboardItem
                        }))
                    }, t
                }(s.Component),
                b = Object(o.compose)(Object(d.a)(h, {
                    options: function(e) {
                        return {
                            variables: {
                                channelID: e.channelID
                            }
                        }
                    }
                }), Object(c.a)(function(e) {
                    return Object(p.a)(h, e.channelID, e.data.user && e.data.user.tournament && e.data.user.tournament.globalLeaderboard, e.user && e.user.id)
                }))(g);
            var f = Object(a.connect)(function(e) {
                return {
                    user: Object(i.e)(e)
                }
            })(b);
            n.d(t, "a", function() {
                return f
            })
        },
        WlPE: function(e, t, n) {
            "use strict";
            var a, i, r = n("mrSG"),
                s = n("TSYQ"),
                o = n("q1tI"),
                l = n("f00E"),
                d = n("Ue10");
            n("F30f");
            ! function(e) {
                e.Default = "default", e.Medium = "medium", e.Large = "large"
            }(a || (a = {})),
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
                        n = void 0,
                        r = void 0;
                    this.props.locked ? (n = "esports-square__mask--locked", r = "url(#" + e + ")") : void 0 === this.props.hasInsiderPass || this.props.hasInsiderPass || (n = "esports-square__mask--locked", r = "url(#" + t + ")");
                    var c = s({
                            "esports-square--border": !this.props.noBorder
                        }, {
                            "esports-square--border__brand": this.props.borderType === i.Brand
                        }, {
                            "esports-square--border__none": this.props.noBorder
                        }, {
                            "esports-square--large": this.props.size === a.Large
                        }, {
                            "esports-square--medium": this.props.size === a.Medium
                        }, {
                            "esports-square--default": this.props.size === a.Default
                        }, {
                            "esports-square": !0
                        }),
                        p = s({
                            "esports-square__image--large": this.props.size === a.Large
                        }, {
                            "esports-square__image--medium": this.props.size === a.Medium
                        }, {
                            "esports-square__image--default": this.props.size === a.Default
                        }, {
                            "esports-square__image": !0
                        }),
                        m = s({
                            "esports-square__svg--large": this.props.size === a.Large
                        }, {
                            "esports-square__svg--medium": this.props.size === a.Medium
                        }, {
                            "esports-square__svg": !0
                        });
                    return o.createElement(d.xb, {
                        "data-test-selector": n,
                        className: c,
                        textAlign: d.Jb.Center,
                        position: d.eb.Relative,
                        borderRadius: d.x.Large,
                        overflow: d.Za.Hidden,
                        background: d.r.Base,
                        display: d.X.InlineBlock
                    }, o.createElement("img", {
                        className: p,
                        src: this.props.imageURL,
                        alt: "",
                        style: {
                            filter: r
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
                return a
            }), n.d(t, "b", function() {
                return i
            }), n.d(t, "a", function() {
                return c
            })
        },
        Y6wA: function(e, t, n) {
            "use strict";
            n.r(t);
            var a = n("/MKj"),
                i = n("kRBY"),
                r = n("mrSG"),
                s = n("TSYQ"),
                o = n("q1tI"),
                l = n("oJmH"),
                d = n("/7QA"),
                c = n("yR8l"),
                p = n("eDVu"),
                m = n("0Log"),
                u = n("/aPz"),
                h = n("5zXJ"),
                g = n("fvjX"),
                b = n("1/iK"),
                f = n("y5D0"),
                k = n("qyxT"),
                v = n("VJHF"),
                y = n("/5u6"),
                E = n("RVih"),
                w = n("Ue10"),
                C = n("knLa"),
                S = (n("3hlQ"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            dismissedFtue: d.m.get(v.b, !1)
                        }, t.generateRandomNumberOfEmotes = function(e, n) {
                            if (!t.props.data || t.props.data.loading) return [];
                            if (t.props.data && (t.props.data.error || !t.props.data.user.tournament)) return [];
                            var a = [];
                            if (t.props.data.user.tournament) switch (e) {
                                case y.a.Individual:
                                    a = t.props.data.user.tournament.rewards.individual;
                                    break;
                                default:
                                    a = []
                            }
                            return (a = a.filter(function(e) {
                                return "emote" === e.type
                            })).length < 1 ? [] : Object(k.a)(a.slice()).slice(0, n).map(function(e, t) {
                                return o.createElement(w.Oa, {
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
                        var e = o.createElement(w.Ia, {
                                gutterSize: w.Ja.None
                            }, o.createElement(w.P, {
                                cols: {
                                    default: 6
                                }
                            }, o.createElement(w.Wa, {
                                display: w.X.Flex,
                                alignItems: w.f.Center,
                                justifyContent: w.Va.Center,
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
                                src: h.c + "/owl-2017/marketing/global-collection.png",
                                alt: Object(d.d)("Tracer, Junkrat, Widowmaker, and Hanzo Skins", "CampaignsFirstTimeExperience")
                            }))), o.createElement(w.P, {
                                cols: {
                                    default: 6
                                }
                            }, o.createElement(w.Wa, {
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
                            }, o.createElement(w.Oa, {
                                padding: {
                                    bottom: 1
                                }
                            }, o.createElement(w.W, {
                                fontSize: w.Ba.Size5,
                                breakpointSmall: {
                                    fontSize: w.Ba.Size4
                                },
                                bold: !0,
                                color: w.O.Link
                            }, Object(d.d)("Complete the Collection", "CampaignsFirstTimeExperience"))), o.createElement(w.Oa, {
                                padding: {
                                    bottom: 1
                                }
                            }, o.createElement(w.W, {
                                fontSize: w.Ba.Size6
                            }, Object(d.d)("Hype your team by Cheering 300 Bits and immediately unlock four Overwatch Hero skins to use right away.", "CampaignsFirstTimeExperience"))), o.createElement(w.Wa, {
                                display: w.X.Flex,
                                flexDirection: w.Z.Row
                            }, this.props.user ? o.createElement(w.z, {
                                onClick: this.openBitsCard,
                                "data-test-selector": "logged-in-ftue"
                            }, Object(d.d)("Cheer now", "CampaignsFirstTimeExperience")) : o.createElement(w.Wa, {
                                "data-test-selector": "logged-out-ftue"
                            }, o.createElement(E.a, {
                                login: this.props.login,
                                signup: this.props.signup
                            })), o.createElement(w.Oa, {
                                alignSelf: w.g.Center,
                                padding: {
                                    left: 2
                                }
                            }, o.createElement(w.U, {
                                to: "http://link.twitch.tv/owl-drops-onsite-bitscard-blogus",
                                targetBlank: !0,
                                hoverUnderlineNone: !1
                            }, o.createElement(w.W, {
                                fontSize: w.Ba.Size6
                            }, Object(d.d)("Learn More", "CampaignsFirstTimeExperience")))))))),
                            t = this.generateRandomNumberOfEmotes(y.a.Individual, 4),
                            n = o.createElement(w.xb, {
                                display: w.X.Flex,
                                flexDirection: w.Z.Row,
                                background: w.r.Accent,
                                fullHeight: !0,
                                fullWidth: !0
                            }, o.createElement(w.Ia, {
                                gutterSize: w.Ja.None
                            }, o.createElement(w.P, {
                                cols: {
                                    default: 6,
                                    xl: 5
                                }
                            }, o.createElement(w.Wa, {
                                display: w.X.Flex,
                                alignItems: w.f.Center,
                                justifyContent: w.Va.Center,
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
                                src: h.c + "/owl-2017/marketing/individual-collection.png",
                                alt: Object(d.d)("Mercy and Genji Skins", "CampaignsFirstTimeExperience")
                            }))), o.createElement(w.P, {
                                cols: {
                                    default: 6,
                                    xl: 7
                                }
                            }, o.createElement(w.Wa, {
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
                            }, o.createElement(w.Wa, null, t), o.createElement(w.Oa, {
                                padding: {
                                    bottom: 1
                                }
                            }, o.createElement(w.W, {
                                fontSize: w.Ba.Size5,
                                breakpointSmall: {
                                    fontSize: w.Ba.Size4
                                },
                                bold: !0,
                                color: w.O.Overlay
                            }, Object(d.d)("Even more skins!", "CampaignsFirstTimeExperience"))), o.createElement(w.Oa, {
                                padding: {
                                    bottom: 1
                                }
                            }, o.createElement(w.W, {
                                fontSize: w.Ba.Size6,
                                color: w.O.Overlay
                            }, Object(d.d)("Keep Cheering and you'll unlock a Mercy skin when you unlock 13 emotes and a Genji skin when you collect all 26!", "CampaignsFirstTimeExperience"))))))),
                            a = Object(d.d)("Close", "CampaignsFirstTimeExperience");
                        return o.createElement(w.xb, {
                            className: "esports-ftue " + s(this.props.className),
                            border: !0,
                            background: w.r.Base,
                            borderRadius: w.x.Large,
                            position: w.eb.Relative,
                            overflow: w.Za.Hidden
                        }, o.createElement(w.Wa, {
                            className: "esports-ftue__close",
                            position: w.eb.Absolute,
                            display: w.X.Flex,
                            breakpointExtraLarge: {
                                display: w.X.Hide
                            }
                        }, o.createElement(w.A, {
                            "data-test-selector": "dismiss-ftue-selector",
                            icon: w.ob.Close,
                            ariaLabel: a,
                            onClick: this.closeFtue
                        })), o.createElement(w.Wa, {
                            className: "esports-ftue__close",
                            position: w.eb.Absolute,
                            display: w.X.Hide,
                            breakpointExtraLarge: {
                                display: w.X.Flex
                            }
                        }, o.createElement(w.A, {
                            icon: w.ob.Close,
                            ariaLabel: a,
                            onClick: this.closeFtue,
                            overlay: !0
                        })), o.createElement(w.Ia, {
                            gutterSize: w.Ja.None
                        }, o.createElement(w.P, {
                            cols: {
                                default: 12,
                                xl: 7
                            }
                        }, o.createElement(w.Wa, {
                            display: w.X.Flex,
                            alignItems: w.f.Center,
                            fullHeight: !0,
                            position: w.eb.Relative,
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
                        }, o.createElement(w.Wa, {
                            display: w.X.Flex,
                            alignItems: w.f.Center,
                            fullHeight: !0
                        }, n))))
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
            var P = Object(a.connect)(function(e) {
                    return {
                        user: Object(i.e)(e)
                    }
                }, function(e) {
                    return Object(g.bindActionCreators)({
                        login: function() {
                            return Object(f.e)(b.a.TopNavSignupButton)
                        },
                        signup: function() {
                            return Object(f.g)(b.a.TopNavSignupButton)
                        }
                    }, e)
                })(S),
                N = n("G30c"),
                x = n("WaLP"),
                I = n("4rCz"),
                z = n("jAjM"),
                O = n("huSm"),
                T = n("f00E"),
                _ = (n("44In"), 100),
                R = 13,
                W = 9,
                F = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            animatablePercent: 0
                        }, t.canvasMidpoint = _ / 2, t.meterRadius = t.canvasMidpoint - R / 2, t.troughRadius = t.canvasMidpoint - W / 2, t.meterLength = Math.PI * t.meterRadius * 2, t.maskRadius = t.canvasMidpoint / 2, t.maskLength = Math.PI * t.maskRadius * 2, t.clampPercent = function(e) {
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
                        var e = "progress-circle__main-mask-" + Object(T.a)(),
                            t = "progress-circle__secondary-mask-" + Object(T.a)(),
                            n = 3 * this.maskLength / 360,
                            a = this.maskLength / this.props.segments - n,
                            i = a + " " + n,
                            r = this.getLowestFactor(this.props.segments),
                            s = a * r + n * (r - 1) + " " + n;
                        return o.createElement("svg", {
                            className: "progress-circle",
                            viewBox: "0 0 " + _ + " " + _
                        }, o.createElement("defs", null, o.createElement("mask", {
                            id: e
                        }, o.createElement("circle", {
                            cx: this.canvasMidpoint,
                            cy: this.canvasMidpoint,
                            r: this.maskRadius,
                            stroke: "#fff",
                            fill: "none",
                            strokeDasharray: i,
                            strokeDashoffset: n / -2,
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
                            strokeDashoffset: n / -2,
                            strokeWidth: 2 * this.maskRadius
                        }))), o.createElement("circle", {
                            className: "progress-circle__trough",
                            cx: this.canvasMidpoint,
                            cy: this.canvasMidpoint,
                            r: this.troughRadius,
                            strokeWidth: W,
                            mask: "url(#" + e + ")"
                        }), o.createElement("circle", {
                            className: "progress-circle__meter",
                            cx: this.canvasMidpoint,
                            cy: this.canvasMidpoint,
                            r: this.meterRadius,
                            mask: "url(#" + e + ")",
                            strokeWidth: R,
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
                A = n("+z1J"),
                L = n("fFIB"),
                D = (n("+8bU"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.getRect = function() {
                            return t.ref ? t.ref.getBoundingClientRect() : null
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        var e = this;
                        if (this.props.data && this.props.data.loading) return o.createElement(w.Ya, {
                            fillContent: !0
                        });
                        var t;
                        if (this.props.data && (!this.props.data.loading && this.props.data.error || !this.props.data.user.tournament)) return o.createElement(w.Wa, {
                            className: "esports-individual-progress__error",
                            position: w.eb.Relative,
                            textAlign: w.Jb.Center
                        }, o.createElement(w.nb, {
                            height: 50,
                            width: 50,
                            asset: w.ob.DeadGlitch
                        }));
                        var n = [],
                            a = [],
                            i = 0,
                            r = 0;
                        this.props.data && this.props.data.user && this.props.data.user.tournament && this.props.data.user.tournament.self && (n = this.props.data.user.tournament.rewards.individual.filter(function(e) {
                            return "emote" === e.type
                        }), a = this.props.data.user.tournament.self.progress.milestones.filter(function(e) {
                            return e.id.includes("individual") && e.rewards.every(function(e) {
                                return "igc" === e.type
                            })
                        }), i = n.length, r = n.filter(function(e) {
                            return e.isEntitled
                        }).length);
                        var s = this.props.data && this.props.data.user && this.props.data.user.tournament && this.props.data.user.tournament.self ? this.props.data.user.tournament.self.progress.amount : 0,
                            l = Math.min(s / 2600, 1),
                            c = a.map(function(t) {
                                var n = t.rewards[0];
                                return n ? o.createElement(w.Wa, {
                                    key: t.id,
                                    textAlign: w.Jb.Right
                                }, o.createElement(O.a, {
                                    milestoneID: t.id,
                                    type: A.a.Blizzard,
                                    userProgress: s,
                                    globalProgress: s,
                                    reward: n,
                                    threshold: t.threshold,
                                    participationThreshold: t.threshold,
                                    startDate: new Date(t.startDate),
                                    blizzardAccount: e.props.blizzardAccount,
                                    getParentRect: e.getRect,
                                    size: z.b.Small
                                })) : null
                            });
                        return t = o.createElement(w.Wa, {
                            padding: {
                                top: 3
                            },
                            display: w.X.Flex,
                            flexDirection: w.Z.Column,
                            position: w.eb.Relative
                        }, o.createElement(w.Wa, {
                            className: "esports-individual-progress__user-progress-ring",
                            textAlign: w.Jb.Center
                        }, o.createElement(F, {
                            percentComplete: l,
                            segments: 26
                        }), i > 0 && o.createElement(w.Wa, {
                            padding: {
                                top: 2
                            }
                        }, o.createElement(w.W, {
                            fontSize: w.Ba.Size3
                        }, Object(d.d)("{entitled} / {total}", {
                            entitled: Object(d.f)(r),
                            total: Object(d.f)(i)
                        }, "CampaignsProgressTab")))), a.length > 0 && o.createElement(w.Wa, {
                            className: "esports-individual-progress__igc-container",
                            position: w.eb.Absolute,
                            display: w.X.Flex,
                            justifyContent: w.Va.Between,
                            flexDirection: w.Z.Column,
                            textAlign: w.Jb.Right,
                            "data-test-selector": "esports-individual-progress-igc-selector"
                        }, c)), o.createElement(w.Wa, {
                            className: "esports-individual-progress",
                            fullHeight: !0
                        }, o.createElement(w.W, {
                            bold: !0,
                            type: w.Nb.H6,
                            color: w.O.Link,
                            transform: w.Mb.Uppercase
                        }, Object(d.d)("Your Progress", "CampaignsProgressTab")), o.createElement(w.Wa, {
                            display: w.X.Flex,
                            alignItems: w.f.Baseline
                        }, o.createElement(w.Wa, {
                            padding: {
                                right: .5
                            }
                        }, o.createElement(w.nb, {
                            type: w.pb.Brand,
                            height: 30,
                            width: 30,
                            asset: w.ob.Bits
                        })), o.createElement(w.W, {
                            "data-test-selector": "esports-individual-progress-selector",
                            type: w.Nb.H1,
                            bold: !0
                        }, Object(d.f)(s))), o.createElement(w.Wa, {
                            padding: {
                                y: 1
                            }
                        }, o.createElement(w.W, null, Object(d.d)("Unlock an Overwatch Hero Twitch emote for every 100 Bits you Cheer. No duplicates!", "CampaignsProgressTab"))), t || o.createElement(w.Wa, {
                            className: "esports-individual-progress__empty"
                        }))
                    }, t
                }(o.Component)),
                j = Object(l.compose)(Object(c.a)(L, {
                    options: function(e) {
                        return {
                            variables: {
                                channelID: e.channelID
                            },
                            skip: !e.user
                        }
                    }
                }), Object(p.a)(function(e) {
                    return {
                        topic: e.data && e.data.user && e.data.user.tournament && e.user ? Object(u.C)(e.user.id) : "",
                        query: L,
                        variables: {
                            channelID: e.channelID
                        },
                        skip: !(e.user && e.data && e.data.user && e.data.user.tournament),
                        type: m.PubsubMessageType.UserCampaignProgressEvent,
                        mutator: function(e, t) {
                            if (I.l.debug("got individual progress message"), t && t.user && t.user.tournament && t.user.tournament.self) return t.user.tournament.self.progress.amount = e.data.progress, t
                        }
                    }
                }))(D);
            var B, M = Object(a.connect)(function(e) {
                    return {
                        user: Object(i.e)(e)
                    }
                })(j),
                U = n("rC/K"),
                H = n("KnFV"),
                V = n("tuvy"),
                q = n("EYeq");
            n("ODAr");
            ! function(e) {
                e.AllAccessMarketing = "aap-marketing-selector", e.CommunityRewards = "community-rewards-selector", e.TeamRewards = "team-rewards-selector"
            }(B || (B = {}));
            var X = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.renderCommunityRewards = function() {
                            return o.createElement(w.Wa, {
                                "data-test-selector": B.CommunityRewards
                            }, o.createElement(w.W, {
                                bold: !0,
                                type: w.Nb.H6,
                                color: w.O.Link,
                                transform: w.Mb.Uppercase
                            }, Object(d.d)("Community Rewards", "CampaignsProgressTab")), o.createElement(w.Oa, {
                                margin: {
                                    y: 1
                                }
                            }, o.createElement(w.W, null, Object(d.d)("All Overwatch skins unlocked! Cheer just 300 Bits to hype your team and unlock all four skins!", "CampaignsProgressTab"))), t.renderCheerButton(), o.createElement(w.Wa, {
                                display: w.X.Flex,
                                justifyContent: w.Va.Between,
                                alignItems: w.f.End,
                                margin: {
                                    top: 3
                                },
                                className: "campaign-progress-tab__global-skins"
                            }, o.createElement(w.S, {
                                src: h.c + "/owl-2017/global-rewards/full-skin/tracer.png",
                                srcSet: {
                                    "2x": h.c + "/owl-2017/global-rewards/full-skin/tracer@2x.png"
                                },
                                alt: Object(d.d)("Tracer skin", "CampaignsProgressTab")
                            }), o.createElement(w.S, {
                                src: h.c + "/owl-2017/global-rewards/full-skin/widowmaker.png",
                                srcSet: {
                                    "2x": h.c + "/owl-2017/global-rewards/full-skin/widowmaker@2x.png"
                                },
                                alt: Object(d.d)("Widowmaker skin", "CampaignsProgressTab")
                            }), o.createElement(w.S, {
                                src: h.c + "/owl-2017/global-rewards/full-skin/junkrat.png",
                                srcSet: {
                                    "2x": h.c + "/owl-2017/global-rewards/full-skin/junkrat@2x.png"
                                },
                                alt: Object(d.d)("Junkrat skin", "CampaignsProgressTab")
                            }), o.createElement(w.S, {
                                src: h.c + "/owl-2017/global-rewards/full-skin/hanzo.png",
                                srcSet: {
                                    "2x": h.c + "/owl-2017/global-rewards/full-skin/hanzo@2x.png"
                                },
                                alt: Object(d.d)("Hanzo skin", "CampaignsProgressTab")
                            })))
                        }, t.renderCheerButton = function() {
                            return o.createElement(w.z, {
                                onClick: t.openBitsCard
                            }, Object(d.d)("Cheer now", "CampaignsProgressTab"))
                        }, t.renderTeamCheeringRewards = function(e) {
                            void 0 === e && (e = !1);
                            var n = e ? 12 : 6;
                            return o.createElement(w.Ia, null, o.createElement(w.P, {
                                cols: {
                                    default: 12,
                                    md: n
                                }
                            }, o.createElement(w.Wa, {
                                display: w.X.Flex,
                                margin: {
                                    bottom: 2
                                }
                            }, o.createElement(w.Wa, {
                                margin: {
                                    right: 1
                                }
                            }, o.createElement(w.S, {
                                className: "campaign-progress-tab__dva-skin",
                                src: h.c + "/owl-2017/team-collection.png",
                                srcSet: {
                                    "2x": h.c + "/owl-2017/team-collection@2x.png"
                                },
                                alt: Object(d.d)("D.Va Skin", "CampaignsProgressTab")
                            })), o.createElement(w.Wa, null, o.createElement(w.Wa, {
                                display: w.X.Flex
                            }, o.createElement(w.W, {
                                bold: !0,
                                type: w.Nb.H6,
                                transform: w.Mb.Uppercase,
                                color: w.O.Link
                            }, Object(d.d)("Team Cheering", "CampaignsProgressTab")), o.createElement(w.Wa, {
                                margin: {
                                    left: 1
                                }
                            }, o.createElement(w.W, {
                                bold: !0,
                                type: w.Nb.H6,
                                transform: w.Mb.Uppercase,
                                color: w.O.Error
                            }, Object(d.d)("New Rewards!", "CampaignsProgressTab")))), o.createElement(w.W, null, Object(d.d)("Collect all 12 team emotes and you’ll unlock an exclusive D.Va skin! Cheer at least 150 Bits for each team to unlock their emote.", "CampaignsProgressTab")), o.createElement(w.Wa, {
                                margin: {
                                    top: 1
                                }
                            }, t.renderCheerButton())))), o.createElement(w.P, {
                                cols: {
                                    default: 12,
                                    md: n
                                }
                            }, t.renderTeamEmoteList()))
                        }, t.renderTeamEmoteList = function() {
                            var e = t.props.data;
                            if (!(e && e.user && e.user.tournament && e.user.tournament.rewards && e.user.tournament.rewards.team)) return null;
                            var n = e.user.tournament.rewards.team,
                                a = n.filter(function(e) {
                                    return e.isEntitled
                                }).length;
                            return o.createElement(w.Wa, {
                                "data-test-selector": B.TeamRewards
                            }, o.createElement(w.Wa, {
                                textAlign: w.Jb.Right,
                                padding: {
                                    bottom: 1
                                }
                            }, o.createElement(w.W, {
                                bold: !0,
                                type: w.Nb.H6,
                                color: w.O.Link,
                                transform: w.Mb.Uppercase
                            }, Object(d.d)("{complete} / {total}", {
                                complete: a,
                                total: n.length
                            }, "CampaignsProgressTab"))), o.createElement(w.Wa, {
                                className: "campaign-progress-tab__team-progress-list-items",
                                display: w.X.Flex,
                                flexWrap: w.Aa.Wrap,
                                padding: {
                                    bottom: 2
                                }
                            }, n.map(function(e) {
                                var t = s("campaign-progress-tab__team-progress-list-item", {
                                    "campaign-progress-tab__team-progress-list-item--locked": !e.isEntitled
                                });
                                return o.createElement(w.xb, {
                                    key: e.id,
                                    className: t,
                                    background: w.r.Base,
                                    borderRadius: w.x.Rounded,
                                    overflow: w.Za.Hidden,
                                    position: w.eb.Relative,
                                    margin: 1,
                                    padding: 1
                                }, o.createElement(w.S, {
                                    className: "campaign-progress-tab__team-progress-list-item-img",
                                    src: e.imageURL,
                                    alt: e.name
                                }), !e.isEntitled && o.createElement(w.xb, {
                                    className: "campaign-progress-tab__team-progress-list-item-locked",
                                    position: w.eb.Absolute,
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
                            return o.createElement(w.Ia, {
                                gutterSize: w.Ja.None
                            }, o.createElement(w.P, {
                                cols: {
                                    default: 12,
                                    lg: 7,
                                    xxl: 8
                                }
                            }, o.createElement(w.Wa, {
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
                                flexWrap: w.Aa.Wrap,
                                fullHeight: !0
                            }, o.createElement(w.P, {
                                cols: {
                                    default: 12,
                                    md: 6,
                                    lg: 12,
                                    xxl: 5
                                }
                            }, o.createElement(w.Wa, {
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
                            }, o.createElement(w.Wa, {
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
                            return o.createElement(w.Ia, {
                                gutterSize: w.Ja.None
                            }, e && o.createElement(w.P, {
                                cols: {
                                    default: 12,
                                    md: 6,
                                    xxl: 7
                                }
                            }, o.createElement(w.Wa, {
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
                            }, o.createElement(w.Wa, {
                                margin: {
                                    bottom: 3
                                },
                                padding: {
                                    bottom: 3
                                },
                                display: w.X.Flex,
                                flexWrap: w.Aa.Wrap,
                                fullHeight: !0
                            }, o.createElement(w.P, {
                                cols: {
                                    default: 12,
                                    md: 6,
                                    xxl: 7
                                }
                            }, o.createElement(w.Wa, {
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
                            }, o.createElement(w.Wa, {
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
                            return o.createElement(w.Wa, {
                                display: w.X.Flex,
                                flexWrap: w.Aa.WrapReverse
                            }, o.createElement(w.P, {
                                cols: {
                                    default: 12,
                                    md: 7
                                }
                            }, o.createElement(w.Wa, {
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
                            }, o.createElement(w.Wa, {
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
                            }, o.createElement(w.Wa, {
                                className: "campaign-progress-tab__team-cheering-wrapper",
                                fullHeight: !0,
                                padding: {
                                    bottom: 3
                                }
                            }, t.renderTeamCheeringRewards())))
                        }, t.teamRewardIsActive = function() {
                            var e = t.props.campaignProperties && t.props.campaignProperties.objectives;
                            return !!e && e.filter(function(e) {
                                return e.tag === U.a.Collection && e.milestones.length > 0
                            }).length > 0
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        return o.createElement(w.Wa, {
                            className: "campaign-progress-tab",
                            margin: {
                                y: 2
                            }
                        }, o.createElement(w.Oa, {
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
                        }, o.createElement(P, {
                            channelID: this.props.channelID
                        })), o.createElement(w.Wa, {
                            padding: {
                                bottom: 4
                            }
                        }, this.props.hasInsiderPass ? this.renderPostPurchase() : this.renderPrePurchase()), o.createElement(w.Ia, {
                            gutterSize: w.Ja.Large
                        }, o.createElement(w.P, {
                            cols: {
                                xl: 6,
                                default: 12
                            }
                        }, o.createElement(w.Wa, {
                            padding: {
                                bottom: 2
                            },
                            breakpointExtraLarge: {
                                padding: {
                                    bottom: 0
                                }
                            }
                        }, o.createElement(N.a, {
                            channelID: this.props.channelID,
                            domain: v.f
                        }))), o.createElement(w.P, {
                            cols: {
                                xl: 6,
                                default: 12
                            }
                        }, o.createElement(x.a, {
                            channelID: this.props.channelID
                        }))))
                    }, t.prototype.renderAllAccessMarketing = function() {
                        var e = Object(d.d)("Explore the All-Access Pass", "CampaignsProgressTab");
                        return o.createElement(w.Wa, {
                            className: "campaign-progress-tab__all-access-marketing",
                            padding: {
                                bottom: 3
                            },
                            breakpointMedium: {
                                padding: {
                                    left: 3
                                }
                            }
                        }, o.createElement(w.xb, {
                            textAlign: w.Jb.Center,
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
                            position: w.eb.Relative
                        }, o.createElement(w.Oa, {
                            position: w.eb.Absolute,
                            attachLeft: !0
                        }, o.createElement(w.S, {
                            className: "campaign-progress-tab__all-access-logo",
                            src: h.c + "/owl-2017/all-access-logo.svg",
                            alt: Object(d.d)("Overwatch League All-Access Pass on Twitch", "CampaignsProgressTab")
                        })), o.createElement(w.S, {
                            className: "campaign-progress-tab__players-pack-image",
                            src: h.c + "/owl-2017/players-pack.jpg",
                            alt: Object(d.d)("The Players Pack Skins", "CampaignsProgressTab")
                        })), o.createElement(w.W, {
                            transform: w.Mb.Uppercase,
                            color: w.O.Link,
                            bold: !0
                        }, Object(d.d)("Included with the Pass:", "CampaignsProgressTab")), o.createElement(w.W, null, Object(d.d)("15 Overwatch skins, 1 player icon and 1 spray", "CampaignsProgressTab")), o.createElement(w.Wa, {
                            margin: {
                                y: 2
                            }
                        }, o.createElement(w.Wa, {
                            display: w.X.Flex,
                            alignItems: w.f.Center,
                            margin: {
                                y: 1
                            }
                        }, o.createElement(w.Oa, {
                            margin: {
                                right: 1
                            }
                        }, o.createElement("img", {
                            src: h.c + "/owl-2017/switcher-command-center.svg",
                            height: "36px",
                            width: "36px"
                        })), o.createElement(w.W, null, Object(d.d)("Exclusive Command Center Stream access plus Passholder-only chat", "CampaignsProgressTab"))), o.createElement(w.Wa, {
                            display: w.X.Flex,
                            alignItems: w.f.Center,
                            margin: {
                                y: 1
                            }
                        }, o.createElement(w.Oa, {
                            margin: {
                                right: 1
                            }
                        }, o.createElement("img", {
                            src: h.c + "/owl-2017/marketing/insider-post-purchase-vods.png",
                            height: "36px",
                            width: "36px"
                        })), o.createElement(w.W, null, Object(d.d)("Post-match Q&A and match-analysis videos by players", "CampaignsProgressTab"))), o.createElement(w.Wa, {
                            display: w.X.Flex,
                            alignItems: w.f.Center,
                            margin: {
                                y: 1
                            }
                        }, o.createElement(w.Oa, {
                            margin: {
                                right: 1
                            }
                        }, o.createElement("img", {
                            src: "https://static-cdn.jtvnw.net/emoticons/v1/894665/3.0",
                            height: "36px",
                            width: "36px"
                        })), o.createElement(w.W, null, Object(d.d)("23 Twitch emotes, 2 Twitch badges, and more!", "CampaignsProgressTab")))), Object(V.a)() && Object(V.e)() ? o.createElement(w.z, {
                            type: w.F.Hollow,
                            linkTo: "/" + this.props.channelLogin + "/esports-pass",
                            "data-tab-target": H.a.InsiderPass
                        }, e) : o.createElement(w.z, {
                            type: w.F.Hollow,
                            onClick: this.props.tabSwitch,
                            "data-tab-target": H.a.InsiderPass
                        }, e))
                    }, t.prototype.openBitsCard = function() {
                        var e = document.querySelector('[data-a-target="bits-button"]');
                        e && e.click()
                    }, t
                }(o.Component),
                G = Object(l.compose)(Object(c.a)(q, {
                    options: function(e) {
                        return {
                            variables: {
                                channelID: e.channelID
                            }
                        }
                    }
                }), Object(p.a)(function(e) {
                    return {
                        topic: e.data && e.data.user && e.data.user.tournament && e.user ? Object(u.C)(e.user.id) : "",
                        query: q,
                        variables: {
                            channelID: e.channelID
                        },
                        skip: !(e.user && e.data && e.data.user && e.data.user.tournament),
                        type: m.PubsubMessageType.UserCampaignProgressEvent,
                        mutator: function(t, n) {
                            if (n && n.user && n.user.tournament) return e && e.data && e.data.refetch && e.data.refetch(), n
                        }
                    }
                }))(X);
            var J = Object(a.connect)(function(e) {
                return {
                    user: Object(i.e)(e)
                }
            })(G);
            n.d(t, "PublicProps", function() {}), n.d(t, "CampaignsProgressTab", function() {
                return J
            })
        },
        Yg6M: function(e, t, n) {},
        YkUe: function(e, t, n) {
            "use strict";
            var a;
            n.d(t, "a", function() {
                    return a
                }),
                function(e) {
                    e.PostPurchase = "post-purchase", e.PrePurchase = "pre-purchase"
                }(a || (a = {}))
        },
        Zqs6: function(e, t, n) {},
        aPbA: function(e, t, n) {},
        aUl8: function(e, t, n) {},
        "bt+X": function(e, t, n) {},
        bwyL: function(e, t, n) {
            var a = {
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
            a.loc.source = {
                body: '#import "twilight/features/badges/models/badge-fragment.gql"\n#import "twilight/features/campaigns/models/milestone.gql"\n#import "twilight/features/campaigns/models/reward.gql"\nquery CampaignsGetRewards($channelID: ID!) {\nuser(id: $channelID) {\nid\nbroadcastBadges {\n...badge\n}\nsubscriptionProducts {\nid\nprice\nurl\nemoteSetID\ndisplayName\nname\nemotes {\nid\ntoken\n}\nself {\npromotion {\nnewPrice\noldPrice\ndiscountType\ndiscountValue\n}\n}\ngiftPromotion {\nnewPrice\noldPrice\ndiscountType\ndiscountValue\n}\n}\nself {\nsubscriptionBenefit {\nid\npurchasedWithPrime\ntier\n}\nisModerator\n}\ntournament {\nid\nprogress {\namount\nmilestones {\n...milestone\n}\n}\nself {\nprogress {\namount\nmilestones {\n...milestone\n}\n}\n}\nrewards {\nglobal {\n...reward\n}\nteam {\n...reward\n}\nindividual {\n...reward\n}\ncheerbomb {\n...reward\n}\ninsider {\nheroSkins {\n...reward\n}\ninGameContent {\n...reward\n}\nbadges {\n...reward\n}\nbits {\n...reward\n}\n}\n}\n}\n}\n}',
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
            a.definitions = a.definitions.concat(r(n("IKE4").definitions)), a.definitions = a.definitions.concat(r(n("8Ver").definitions)), a.definitions = a.definitions.concat(r(n("VK0B").definitions)), e.exports = a
        },
        cUCe: function(e, t, n) {
            "use strict";
            var a = n("q1tI"),
                i = (n("Yg6M"), function() {
                    return a.createElement("svg", {
                        className: "esports-participation-threshold-complete",
                        viewBox: "0 0 22 22"
                    }, a.createElement("defs", null, a.createElement("path", {
                        d: "M8.42897991,15.9999799 C8.18397991,15.9999799 7.93897991,15.9099799 7.74597991,15.7309799 L4.31797991,12.5309799 C3.91397991,12.1539799 3.89197991,11.5209799 4.26897991,11.1169799 C4.64697991,10.7129799 5.27997991,10.6919799 5.68197991,11.0679799 L8.42897991,13.6319799 L16.3179799,6.26897991 C16.7229799,5.89197991 17.3549799,5.91397991 17.7319799,6.31797991 C18.1079799,6.72097991 18.0859799,7.35397991 17.6829799,7.73097991 L9.11197991,15.7309799 C8.91897991,15.9099799 8.67397991,15.9999799 8.42897991,15.9999799",
                        id: "path-participation-threshold-complete"
                    })), a.createElement("g", {
                        id: "Symbols",
                        stroke: "none",
                        strokeWidth: "1",
                        fill: "none",
                        fillRule: "evenodd"
                    }, a.createElement("g", {
                        id: "bits/bit-checkpoint-done",
                        transform: "translate(-5.000000, -5.000000)"
                    }, a.createElement("g", {
                        id: "Group",
                        transform: "translate(5.000000, 5.000000)"
                    }, a.createElement("circle", {
                        id: "Oval-Copy-6",
                        fill: "#6441A4",
                        cx: "11",
                        cy: "11",
                        r: "11"
                    }), a.createElement("mask", {
                        id: "mask-2",
                        fill: "white"
                    }, a.createElement("use", {
                        xlinkHref: "#path-participation-threshold-complete"
                    })), a.createElement("use", {
                        id: "Mask",
                        fill: "#FFFFFF",
                        xlinkHref: "#path-participation-threshold-complete"
                    })))))
                });
            n.d(t, "a", function() {
                return i
            })
        },
        etgA: function(e, t, n) {},
        fFIB: function(e, t, n) {
            var a = {
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
            a.loc.source = {
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
            a.definitions = a.definitions.concat(r(n("8Ver").definitions)), a.definitions = a.definitions.concat(r(n("VK0B").definitions)), e.exports = a
        },
        fR2g: function(e, t, n) {
            "use strict";
            var a = n("mrSG"),
                i = n("q1tI"),
                r = n("/7QA"),
                s = n("Ue10"),
                o = (n("ywDU"), function() {
                    return i.createElement(s.Wa, {
                        className: "esports-campaign-new-feature",
                        position: s.eb.Relative
                    }, i.createElement(s.Wa, {
                        position: s.eb.Absolute,
                        attachRight: !0,
                        attachTop: !0
                    }, i.createElement(s.bb, {
                        label: Object(r.d)("New", "CampaignsTabs"),
                        type: s.cb.Alert
                    })))
                }),
                l = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        var e = new Date(Date.now()),
                            t = !1;
                        return this.props.newDisplayInfo && this.props.newDisplayInfo.startDate ? t = this.props.newDisplayInfo && this.props.newDisplayInfo.endDate ? this.props.newDisplayInfo.startDate <= e && this.props.newDisplayInfo.endDate >= e : this.props.newDisplayInfo.startDate <= e : this.props.newDisplayInfo && this.props.newDisplayInfo.endDate && (t = this.props.newDisplayInfo.endDate >= e), this.props.newDisplayInfo && void 0 !== this.props.newDisplayInfo.shouldShow && (t = this.props.newDisplayInfo.shouldShow), i.createElement(s.yb, {
                            active: this.props.isSelected,
                            onClick: this.props.onClick,
                            "data-tab-target": this.props.id
                        }, i.createElement(s.Wa, {
                            display: s.X.Flex
                        }, i.createElement(s.W, {
                            breakpointExtraSmall: {
                                fontSize: s.Ba.Size5
                            },
                            breakpointSmall: {
                                fontSize: s.Ba.Size3
                            },
                            breakpointExtraLarge: {
                                fontSize: s.Ba.Size4
                            },
                            breakpointExtraExtraLarge: {
                                fontSize: s.Ba.Size3
                            },
                            type: s.Nb.H3
                        }, this.props.title), t && i.createElement(o, null)))
                    }, t
                }(i.PureComponent);
            n.d(t, "a", function() {
                return l
            })
        },
        hRrL: function(e, t, n) {
            "use strict";
            var a = n("/MKj"),
                i = n("kRBY"),
                r = n("mrSG"),
                s = n("q1tI"),
                o = n("oJmH"),
                l = n("/7QA"),
                d = n("yR8l"),
                c = n("Ue10"),
                p = n("7QWs"),
                m = function(e) {
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
                        return s.createElement(c.Wa, {
                            className: "esports-claim-all-rewards-button",
                            display: c.X.InlineFlex,
                            margin: {
                                right: 1
                            },
                            verticalAlign: c.Xb.Bottom
                        }, s.createElement(c.z, {
                            "data-test-selector": "esports-claim-all-button",
                            onClick: this.claimAllRewards,
                            disabled: !this.props.enabled
                        }, this.state.error && s.createElement(c.nb, {
                            "data-test-selector": "esports-claim-all-button-error",
                            asset: c.ob.DeadGlitch
                        }), !this.state.error && e))
                    }, t
                }(s.Component),
                u = Object(o.compose)(Object(d.a)(p, {
                    name: "claimAllRewards"
                }))(m);
            var h = Object(a.connect)(function(e) {
                return {
                    user: Object(i.e)(e)
                }
            })(u);
            n.d(t, "a", function() {
                return h
            })
        },
        huSm: function(e, t, n) {
            "use strict";
            var a, i, r, s = n("mrSG"),
                o = n("q1tI"),
                l = n("5zXJ"),
                d = n("jAjM"),
                c = n("/MKj"),
                p = n("kRBY"),
                m = n("yR8l"),
                u = n("/7QA"),
                h = n("fvjX"),
                g = n("1/iK"),
                b = n("y5D0"),
                f = n("+z1J");
            ! function(e) {
                e.RedeemMilestoneButton = "milestone_balloon__redeem-milestone-button", e.Redeemed = "milestone_button_redeemed-milestone", e.MilestoneRestricted = "milestone_balloon_restricted", e.CheerNowButton = "milestone_balloon_cheer_now", e.LoginSignup = "milestone_balloon_login_signup", e.BuyInsiderPass = "milestone-balloon-buy-insider-pass", e.TryPrime = "milestone-balloon-try-prime"
            }(a || (a = {})),
            function(e) {
                e.Description = "milestone-balloon-body-description"
            }(i || (i = {})),
            function(e) {
                e.RewardType = "milestone-balloon-header-reward-type", e.MilestoneRestricted = "milestone-balloon-header-milestone-restricted", e.MilestoneLocked = "milestone-balloon-header-milestone-locked", e.MilestoneUnlocked = "milestone-balloon-header-milestone-unlocked"
            }(r || (r = {}));
            var k = n("DnOo"),
                v = n("W8Fi"),
                y = n("RVih"),
                E = n("Ue10"),
                w = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.handleSubAction = function() {}, t
                    }
                    return s.__extends(t, e), t.prototype.render = function() {
                        var e = null,
                            t = this.props.type === f.a.Blizzard || this.props.insiderType === f.c.InGameContent,
                            n = Object(u.d)("Redeem", "CampaignsMilestoneBalloon");
                        if (this.props.reward.isEntitled) e = o.createElement(E.Wa, {
                            display: E.X.Flex,
                            className: "esports-milestone-balloon__redeemed",
                            "data-test-selector": a.Redeemed,
                            padding: {
                                top: 1
                            }
                        }, o.createElement(E.Wa, {
                            padding: {
                                right: .5
                            }
                        }, o.createElement(E.nb, {
                            asset: E.ob.Check,
                            type: E.pb.Success
                        })), o.createElement(E.W, null, Object(u.d)("Redeemed", "CampaignsMilestoneBalloon")));
                        else if (t && this.props.isRestrictedBlizzardAccount) e = o.createElement(E.Wa, {
                            display: E.X.Flex,
                            "data-test-selector": a.MilestoneRestricted
                        }, o.createElement(E.W, {
                            color: E.O.Error
                        }, Object(u.d)("Reward unavailable", "CampaignsMilestoneBalloon")));
                        else if (this.props.isClaimable) t ? e = void 0 === this.props.isBlizzardAccountLinked || this.props.isBlizzardAccountLinked ? o.createElement(E.z, {
                            onClick: this.props.claimMilestone,
                            disabled: this.props.isRestrictedBlizzardAccount,
                            "data-test-selector": a.RedeemMilestoneButton
                        }, n) : o.createElement(E.Wa, null, o.createElement(E.W, null, Object(u.d)("Link your Blizzard Account to use in-game!", "CampaignsMilestoneBalloon"))) : this.props.insiderType === f.c.Bits && (e = o.createElement(E.z, {
                            onClick: this.props.claimMilestone,
                            "data-test-selector": a.RedeemMilestoneButton
                        }, n));
                        else if (!this.props.hasInsiderPass && this.props.subscriptionProducts && this.props.subscriptionProducts.length > 0) {
                            var i = this.props.subscriptionProducts[0].price;
                            Object(v.g)(this.props.subscriptionProducts) && (i = Object(v.c)(this.props.subscriptionProducts[0])), e = o.createElement(E.Wa, {
                                display: E.X.Flex
                            }, o.createElement(E.Wa, {
                                margin: {
                                    right: 1,
                                    top: 1
                                }
                            }, o.createElement(k.a, {
                                isSubbedToTier: !1,
                                tierPrice: i,
                                "data-a-target": "tier1-subscribe-button",
                                handleSubAction: this.handleSubAction,
                                productName: this.props.subscriptionProducts[0].name,
                                url: this.props.subscriptionProducts[0].url,
                                isEsportChannel: !0
                            })))
                        } else e = this.props.reward.isPrimeOnly ? o.createElement(E.z, {
                            linkTo: u.a.tryPrimeURI,
                            targetBlank: !0,
                            "data-test-selector": a.TryPrime
                        }, Object(u.d)("Get Twitch Prime", "CampaignsMilestoneBalloon")) : this.props.user ? o.createElement(E.z, {
                            onClick: this.props.openBitsCard,
                            "data-test-selector": a.CheerNowButton
                        }, Object(u.d)("Cheer now", "CampaignsMilestoneBalloon")) : o.createElement(E.Wa, {
                            "data-test-selector": a.LoginSignup
                        }, o.createElement(y.a, {
                            login: this.props.login,
                            signup: this.props.signup
                        }));
                        return o.createElement(E.Wa, {
                            className: "esports-milestone-balloon-call-to-action"
                        }, e)
                    }, t
                }(o.PureComponent);
            var C = Object(c.connect)(function(e) {
                    return {
                        user: Object(p.e)(e)
                    }
                }, function(e) {
                    return Object(h.bindActionCreators)({
                        login: function() {
                            return Object(b.e)(g.a.EsportsCampaignTabsMilestoneBalloon)
                        },
                        signup: function() {
                            return Object(b.g)(g.a.EsportsCampaignTabsMilestoneBalloon)
                        }
                    }, e)
                })(w),
                S = n("cUCe"),
                P = n("81Gi"),
                N = (n("qGAq"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.getDescriptionText = function() {
                            var e = null;
                            return t.props.type === f.a.Twitch ? t.props.emoteType === f.b.Hero ? e = t.props.reward.isEntitled ? Object(u.d)("You’ve unlocked this Overwatch Hero emote to use anywhere on Twitch!", "CampaignsMilestoneBalloon") : Object(u.d)("Unlock one of 26 random Overwatch Hero Twitch emotes for every 100 Bits you Cheer.", "CampaignsMilestoneBalloon") : t.props.emoteType === f.b.Team ? e = t.props.reward.isEntitled ? Object(u.d)("You’ve unlocked this emote. Use it anywhere on Twitch to show your love for the team!", "CampaignsMilestoneBalloon") : Object(u.d)("Cheer 150 Bits or more using this team’s Cheermote and receive their emote.", "CampaignsMilestoneBalloon") : t.props.emoteType === f.b.Cheerbomb && (e = Object(u.d)("Cheer 250 Bits for a set of five emotes, 500 Bits for the second set and share with Chat.", "CampaignsMilestoneBalloon")) : t.props.insiderType ? e = t.props.reward.isPrimeOnly ? Object(u.d)("Included with the Overwatch League All-Access Pass 2018, only for Twitch Prime members.", "CampaignsMilestoneBalloon") : Object(u.d)("Included with the Overwatch League All-Access Pass 2018.", "CampaignsMilestoneBalloon") : t.props.type === f.a.Blizzard && (t.props.isErrorState ? e = Object(u.d)("Error redeeming reward, please try again later!", "CampaignsMilestoneBalloon") : t.props.globalThresholdReached ? t.props.globalThresholdReached && !t.props.userThresholdReached ? e = Object(u.d)("The community unlocked this loot! Cheer to join them and get it yourself!", "CampaignsMilestoneBalloon") : t.props.reward.isEntitled ? e = Object(u.d)("Now available to use in-game!", "CampaignsMilestoneBalloon") : t.props.isClaimable && (e = t.props.isBlizzardAccountLinked ? Object(u.d)("Now available! Click Redeem to use in-game.", "CampaignsMilestoneBalloon") : Object(u.d)("Now available! Link your Blizzard Account to use in-game.", "CampaignsMilestoneBalloon")) : e = Object(u.d)("Cheer with the community to unlock this loot!", "CampaignsMilestoneBalloon")), e
                        }, t
                    }
                    return s.__extends(t, e), t.prototype.render = function() {
                        var e = this.getDescriptionText(),
                            t = null;
                        if (this.props.type === f.a.Blizzard && !this.props.insiderType && this.props.participationThreshold > 0) {
                            var n = null;
                            n = this.props.userThresholdReached ? o.createElement(S.a, null) : o.createElement(P.a, null), t = o.createElement(E.Wa, {
                                display: E.X.Flex,
                                padding: {
                                    bottom: 1
                                }
                            }, o.createElement(E.Wa, {
                                padding: {
                                    right: .5
                                }
                            }, n), o.createElement(E.W, {
                                className: "esports-milestone-balloon-body__participation-text"
                            }, Object(u.d)("Cheer {amount} Bits", {
                                amount: Object(u.f)(this.props.participationThreshold)
                            }, "CampaignsMilestoneBalloon")))
                        }
                        return o.createElement(E.Wa, {
                            padding: {
                                top: 1,
                                x: 2,
                                bottom: 2
                            }
                        }, this.props.participationThreshold > 0 && t, o.createElement(E.W, {
                            "data-test-selector": i.Description
                        }, e), o.createElement(E.Wa, {
                            display: E.X.Flex,
                            padding: {
                                top: 1
                            },
                            flexDirection: E.Z.Row
                        }, o.createElement(C, {
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
                x = n("TSYQ"),
                I = n("WlPE"),
                z = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return s.__extends(t, e), t.prototype.render = function() {
                        var e = o.createElement(E.W, {
                            "data-test-selector": r.RewardType,
                            color: E.O.Alt2
                        }, this.props.reward.description);
                        this.props.isEmote && (e = o.createElement(E.W, {
                            "data-test-selector": r.RewardType,
                            color: E.O.Link
                        }, Object(u.d)("Twitch Emote", "CampaignsMilestoneBalloon")));
                        var t, n = null;
                        n = this.props.isRestricted ? o.createElement(E.nb, {
                            "data-test-selector": r.MilestoneRestricted,
                            type: E.pb.Alert,
                            asset: E.ob.Ban
                        }) : this.props.isLocked ? o.createElement(E.nb, {
                            "data-test-selector": r.MilestoneLocked,
                            asset: E.ob.Lock
                        }) : o.createElement(E.nb, {
                            "data-test-selector": r.MilestoneUnlocked,
                            type: E.pb.Success,
                            asset: E.ob.Unlock
                        }), t = this.props.isHexagon ? o.createElement(d.a, {
                            imageURL: this.props.reward.imageURL
                        }) : o.createElement(I.a, {
                            imageURL: this.props.reward.imageURL,
                            size: I.c.Default,
                            noBorder: !0
                        });
                        var a = null;
                        a = this.props.requiresPass ? o.createElement(E.W, null, Object(u.d)("All-Access Pass", "CampaignsMilestoneBalloon")) : o.createElement(E.Wa, {
                            display: E.X.Flex,
                            alignItems: E.f.Center
                        }, o.createElement(E.nb, {
                            type: E.pb.Brand,
                            asset: E.ob.Bits
                        }), this.props.threshold > 0 && o.createElement(E.Oa, {
                            margin: {
                                left: .5
                            }
                        }, o.createElement(E.W, {
                            className: "esports-milestone-balloon__threshold",
                            bold: !0,
                            fontSize: E.Ba.Size5,
                            type: E.Nb.Span
                        }, Object(u.f)(this.props.threshold))));
                        var i = x("esports-milestone-balloon__image", {
                            "esports-milestone-balloon__image--blizzard": this.props.isHexagon
                        });
                        return o.createElement(E.xb, {
                            borderBottom: !0,
                            display: E.X.Flex,
                            alignItems: E.f.Center,
                            padding: {
                                right: 1,
                                bottom: .5
                            }
                        }, o.createElement(E.Wa, {
                            className: i
                        }, t), o.createElement(E.Wa, {
                            margin: {
                                left: 1
                            }
                        }, e, o.createElement(E.W, {
                            bold: !0
                        }, this.props.reward.name)), o.createElement(E.Wa, {
                            textAlign: E.Jb.Right,
                            margin: {
                                left: "auto"
                            }
                        }, n, a))
                    }, t
                }(o.PureComponent),
                O = n("QlRw"),
                T = n("UOrd"),
                _ = (n("Zqs6"), function(e) {
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
                    return s.__extends(t, e), t.prototype.render = function() {
                        var e = void 0 !== this.props.userProgress && this.props.participationThreshold <= this.props.userProgress,
                            t = void 0 !== this.props.globalProgress && this.props.threshold <= this.props.globalProgress,
                            n = this.props.reward.canBeFulfilled;
                        this.props.insiderType && (n = !!this.props.hasInsiderPass);
                        var a = !!this.props.blizzardAccount && this.props.blizzardAccount.region === O.a.China,
                            i = !!this.props.blizzardAccount,
                            r = this.props.type === f.a.Twitch || this.props.insiderType === f.c.SubEmote,
                            s = !this.props.isBundle && (this.props.insiderType === f.c.HeroSkin || this.props.type === f.a.Blizzard),
                            l = a && (this.props.type === f.a.Blizzard || this.props.type === f.a.Insider),
                            d = !!this.props.insiderType;
                        return o.createElement(E.Wa, {
                            className: "esports-milestone-balloon",
                            textAlign: E.Jb.Left
                        }, o.createElement(z, {
                            reward: this.props.reward,
                            threshold: this.props.threshold,
                            requiresPass: d,
                            isEmote: r,
                            isHexagon: s,
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
                            isRestrictedBlizzardAccount: a,
                            isErrorState: this.state.isErrorState,
                            isClaimable: n,
                            isBlizzardAccountLinked: i,
                            openBitsCard: this.openBitsCard,
                            claimMilestone: this.claimMilestone,
                            hasInsiderPass: this.props.hasInsiderPass,
                            subscriptionProducts: this.props.subscriptionProducts
                        }))
                    }, t.prototype.openBitsCard = function() {
                        var e = document.querySelector('[data-a-target="bits-button"]');
                        e && e.click()
                    }, t = s.__decorate([Object(m.a)(T, {
                        name: "claimMilestone"
                    })], t)
                }(o.Component));
            var R = Object(c.connect)(function(e) {
                    return {
                        user: Object(p.e)(e)
                    }
                })(_),
                W = n("uLiP"),
                F = n("rC/K"),
                A = (n("JPbf"), n("Ar2k")),
                L = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.setContainerRef = function(e) {
                            return t.containerRef = e
                        }, t.onMouseEnter = function() {
                            if (t.containerRef) {
                                var e = !t.props.startDate || t.props.startDate <= new Date(Date.now()),
                                    n = t.props.reward && t.props.reward.id === W.d,
                                    a = t.props.reward && t.props.reward.id === W.a;
                                t.props.reward && e && t.props.tooltipLayer.showRich({
                                    from: t.containerRef,
                                    richContent: o.createElement(R, {
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
                                        isBundle: n || a
                                    }),
                                    allowHover: !0,
                                    balloonProps: {
                                        size: E.w.Medium,
                                        direction: E.v.TopCenter,
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
                        var e, t = this.props.objectiveTag === F.a.Collection && this.props.reward && !this.props.reward.canBeFulfilled && !this.props.reward.isEntitled,
                            n = void 0 !== this.props.globalProgress && this.props.globalProgress < this.props.threshold,
                            a = void 0 !== this.props.globalProgress && this.props.globalProgress >= this.props.threshold && void 0 !== this.props.userProgress && this.props.userProgress < this.props.participationThreshold || void 0 === this.props.globalProgress && void 0 !== this.props.userProgress && this.props.userProgress < this.props.participationThreshold,
                            i = this.props.emoteType && this.props.reward && !this.props.reward.isEntitled || this.props.insiderType !== f.c.InGameContent && void 0 !== this.props.hasInsiderPass && !this.props.hasInsiderPass,
                            r = !this.props.reward || this.props.startDate && this.props.startDate > new Date(Date.now()),
                            s = this.props.type === f.a.Twitch && this.props.emoteType || this.props.type === f.a.Insider && this.props.insiderType !== f.c.HeroSkin;
                        if (this.props.big) {
                            var c = this.props.reward ? this.props.reward.imageURL : "";
                            this.props.reward && this.props.reward.id === W.c && (c = l.c + "/owl-2017/insider-test/lucio-emote-static-alt.png"), e = o.createElement(E.xb, {
                                className: "esports-milestone__insider--players-pack",
                                margin: {
                                    top: 2
                                }
                            }, o.createElement(I.a, {
                                imageURL: c,
                                locked: !1,
                                borderType: I.b.Brand,
                                hasInsiderPass: void 0 !== this.props.hasInsiderPass ? this.props.hasInsiderPass : void 0
                            }))
                        } else if (s) {
                            var p = I.c.Default,
                                m = I.b.Default;
                            (this.props.type === f.a.Insider && this.props.insiderType === f.c.InGameContent || this.props.insiderType === f.c.Bits) && (m = I.b.Brand), this.props.type === f.a.Insider && this.props.insiderType === f.c.InGameContent ? p = I.c.Large : this.props.insiderType === f.c.Bits && (p = I.c.Medium), e = o.createElement(I.a, {
                                imageURL: this.props.reward ? this.props.reward.imageURL : "",
                                locked: i,
                                size: p,
                                borderType: m,
                                hasInsiderPass: this.props.insiderType === f.c.InGameContent && void 0 !== this.props.hasInsiderPass ? this.props.hasInsiderPass : void 0
                            })
                        } else e = o.createElement(d.a, {
                            imageURL: this.props.reward ? this.props.reward.imageURL : "",
                            size: this.props.size,
                            isUnavailable: n,
                            needsToCheerMore: void 0 !== this.props.hasInsiderPass ? !this.props.hasInsiderPass : a || t,
                            comingSoon: r
                        });
                        return o.createElement(E.Wa, {
                            className: "esports-milestone",
                            position: E.eb.Relative,
                            display: E.X.InlineFlex
                        }, o.createElement("div", {
                            className: "esports-milestone__clickable",
                            ref: this.setContainerRef
                        }, e))
                    }, t = s.__decorate([Object(A.c)()], t)
                }(o.Component),
                D = L;
            n.d(t, !1, function() {
                return L
            }), n.d(t, "a", function() {
                return D
            })
        },
        i4ay: function(e, t, n) {
            "use strict";
            var a, i = n("mrSG"),
                r = n("q1tI"),
                s = n("/7QA"),
                o = n("yR8l"),
                l = n("f00E"),
                d = n("4Wd7"),
                c = n("4h+t"),
                p = n("Ue10"),
                m = (n("aUl8"), function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return i.__extends(t, e), t.prototype.shouldComponentUpdate = function(e) {
                        return this.props.displayName !== e.displayName || this.props.rank !== e.rank || this.props.score !== e.score || this.props.secondaryName !== e.secondaryName || this.props.imageURL !== e.imageURL
                    }, t.prototype.render = function() {
                        return r.createElement(p.Pa, {
                            display: p.X.Flex,
                            alignItems: p.f.Center,
                            borderBottom: !0,
                            padding: {
                                y: 1
                            }
                        }, r.createElement("li", {
                            className: "campaign-leaderboard-row"
                        }, r.createElement(p.Oa, {
                            margin: {
                                right: 1
                            }
                        }, r.createElement(p.W, {
                            "data-test-selector": "esports-leaderboard-row-rank",
                            color: p.O.Link,
                            bold: !0
                        }, Object(s.f)(this.props.rank))), this.props.imageURL && r.createElement(p.Wa, {
                            "data-test-selector": "esports-leaderboard-row-image-url",
                            margin: {
                                right: 1
                            }
                        }, r.createElement(p.q, {
                            src: this.props.imageURL,
                            size: 30,
                            alt: this.props.displayName + " Avatar"
                        })), r.createElement(p.Wa, {
                            margin: {
                                right: 1
                            }
                        }, this.props.secondaryName && r.createElement(p.W, {
                            "data-test-selector": "esports-leaderboard-row-secondary-name",
                            color: p.O.Link,
                            transform: p.Mb.Uppercase,
                            lineHeight: p.Xa.Heading
                        }, this.props.secondaryName), r.createElement(p.W, {
                            "data-test-selector": "esports-leaderboard-row-display-name",
                            type: p.Nb.H5,
                            bold: !0,
                            lineHeight: p.Xa.Heading
                        }, this.props.displayName)), r.createElement(p.Wa, {
                            display: p.X.Flex,
                            margin: {
                                left: "auto"
                            }
                        }, r.createElement(p.Wa, {
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
                        })), r.createElement(p.Oa, {
                            className: "campaign-leaderboard-row__amount"
                        }, r.createElement(p.W, {
                            "data-test-selector": "esports-leaderboard-row-score",
                            lineHeight: p.Xa.Body,
                            type: p.Nb.H4
                        }, Object(s.f)(this.props.score))))))
                    }, t
                }(r.Component)),
                u = (n("o5UI"), function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        return r.createElement(p.Pa, {
                            display: p.X.Flex,
                            alignItems: p.f.Center,
                            borderBottom: !0,
                            padding: {
                                y: 1,
                                left: 2
                            }
                        }, r.createElement("li", {
                            className: "campaign-leaderboard-self-row"
                        }, this.props.imageURL && r.createElement(p.Wa, {
                            "data-test-selector": "esports-leaderboard-row-image-url",
                            margin: {
                                right: 1
                            }
                        }, r.createElement(p.q, {
                            src: this.props.imageURL,
                            size: 30,
                            alt: this.props.displayName + " Avatar"
                        })), r.createElement(p.Wa, {
                            margin: {
                                right: 1
                            }
                        }, r.createElement(p.W, {
                            "data-test-selector": "esports-leaderboard-row-rank",
                            color: p.O.Link,
                            transform: p.Mb.Uppercase,
                            lineHeight: p.Xa.Heading
                        }, Object(s.d)("Rank: {rank}", {
                            rank: Object(s.f)(this.props.rank)
                        }, "CampaignsLeaderboardSelfRow")), r.createElement(p.W, {
                            "data-test-selector": "esports-leaderboard-row-display-name",
                            type: p.Nb.H5,
                            bold: !0,
                            lineHeight: p.Xa.Heading
                        }, this.props.displayName)), r.createElement(p.Wa, {
                            display: p.X.Flex,
                            margin: {
                                left: "auto"
                            }
                        }, r.createElement(p.Wa, {
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
                        })), r.createElement(p.Oa, {
                            className: "campaign-leaderboard-self-row__amount",
                            margin: {
                                right: 2
                            }
                        }, r.createElement(p.W, {
                            "data-test-selector": "esports-leaderboard-row-score",
                            lineHeight: p.Xa.Body,
                            type: p.Nb.H4
                        }, Object(s.f)(this.props.score))))))
                    }, t
                }(r.PureComponent)),
                h = n("VJHF"),
                g = n("NcrI");
            n("KUJM");
            ! function(e) {
                e.AllTeams = "allTeams", e.Atlantic = "atlantic", e.Pacific = "pacific", e.EU = "eu", e.NA = "na", e.KR = "kr", e.CN = "cn"
            }(a || (a = {}));
            var b = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        showPage: 1,
                        activeTab: a.AllTeams
                    }, t.pagePipClick = function(e) {
                        var n = parseInt(e.currentTarget.dataset.pageNumber, 10);
                        t.setState({
                            showPage: n
                        })
                    }, t.tabClick = function(e) {
                        if (e.currentTarget.parentElement) {
                            var n = e.currentTarget.parentElement.getAttribute("data-tab-id") || a.AllTeams;
                            t.setState({
                                activeTab: n,
                                showPage: 1
                            })
                        }
                    }, t
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    var e = this;
                    if (Object(s.d)("Rank: {rank}", {
                            rank: 1
                        }, "CampaignsLeaderboard"), !this.props.data || !this.props.data.users || this.props.data.loading) return r.createElement(p.Ya, {
                        fillContent: !0
                    });
                    var t = this.props.isTeam && this.props.data.users && this.props.data.users[0] ? this.props.data.users[0].tournament : null,
                        n = this.props.leaderboardRows;
                    this.props.isTeam && this.state.activeTab !== a.AllTeams && (n = this.props.leaderboardRows.filter(function(n) {
                        var a = t && t.teams.find(function(e) {
                            return e.id.toUpperCase() === n.node.entryKey.toUpperCase()
                        });
                        if (a) return a.division.toLowerCase().includes(e.state.activeTab)
                    }));
                    var i = Math.ceil(n.length / this.props.pageSize),
                        o = this.props.pageSize * (this.state.showPage - 1),
                        d = o + this.props.pageSize,
                        c = n.slice(o, d).map(function(n) {
                            var a = {
                                rank: n.node.rank,
                                displayName: "Somebody",
                                score: n.node.score
                            };
                            if (e.props.isTeam && t) {
                                var i = t.teams.find(function(e) {
                                    return e.id.toUpperCase() === n.node.entryKey.toUpperCase()
                                });
                                i && (a.displayName = i.name, a.secondaryName = i.division, a.imageURL = i.logoURL)
                            } else if (!e.props.isTeam) {
                                var r = e.props.data.users.find(function(e) {
                                    return e.id === n.node.entryKey
                                });
                                r && r.displayName && (a.displayName = r.displayName, a.imageURL = r.profileImageURL)
                            }
                            return a
                        }).map(function(t) {
                            return r.createElement(m, {
                                key: "leaderboard-row-" + (e.props.isTeam ? "team" : "user") + "-" + t.rank,
                                rank: t.rank,
                                score: t.score,
                                displayName: t.displayName,
                                imageURL: t.imageURL,
                                secondaryName: e.props.hideLocale ? void 0 : t.secondaryName
                            })
                        }),
                        g = this.props.pageSize - c.length % this.props.pageSize;
                    if (g !== this.props.pageSize)
                        for (var b = 0; b < g; b++) c.push(r.createElement(p.Wa, {
                            key: "leaderboard-blank-row-" + b,
                            className: "campaign-leaderboard__blank-row"
                        }));
                    var f = [];
                    for (b = 1; b <= i; b++) {
                        var k = b === this.state.showPage ? p.r.Accent : p.r.Alt;
                        f.push(r.createElement(p.Pa, {
                            className: "campaign-leaderboard__buttons",
                            padding: 1,
                            key: "leaderboard-page-pip-" + Object(l.a)()
                        }, r.createElement("button", {
                            onClick: this.pagePipClick,
                            "data-page-number": b
                        }, r.createElement(p.xb, {
                            border: !0,
                            padding: .5,
                            display: p.X.Block,
                            background: k,
                            borderRadius: p.x.Rounded
                        }))))
                    }
                    var v = null;
                    if (this.props.isTeam) {
                        var y = null;
                        this.props.domain === h.c ? y = r.createElement(r.Fragment, null, r.createElement(p.yb, {
                            active: this.state.activeTab === a.NA,
                            onClick: this.tabClick,
                            "data-tab-id": a.NA
                        }, r.createElement(p.W, {
                            type: p.Nb.H4
                        }, Object(s.d)("NA", "CampaignsProgressTab"))), r.createElement(p.yb, {
                            active: this.state.activeTab === a.EU,
                            onClick: this.tabClick,
                            "data-tab-id": a.EU
                        }, r.createElement(p.W, {
                            type: p.Nb.H4
                        }, Object(s.d)("EU", "CampaignsProgressTab"))), r.createElement(p.yb, {
                            active: this.state.activeTab === a.KR,
                            onClick: this.tabClick,
                            "data-tab-id": a.KR
                        }, r.createElement(p.W, {
                            type: p.Nb.H4
                        }, Object(s.d)("KR", "CampaignsProgressTab"))), r.createElement(p.yb, {
                            active: this.state.activeTab === a.CN,
                            onClick: this.tabClick,
                            "data-tab-id": a.CN
                        }, r.createElement(p.W, {
                            type: p.Nb.H4
                        }, Object(s.d)("CN", "CampaignsProgressTab")))) : this.props.domain === h.f && (y = r.createElement(r.Fragment, null, r.createElement(p.yb, {
                            active: this.state.activeTab === a.Atlantic,
                            onClick: this.tabClick,
                            "data-tab-id": a.Atlantic
                        }, r.createElement(p.W, {
                            type: p.Nb.H4
                        }, Object(s.d)("Atlantic", "CampaignsProgressTab"))), r.createElement(p.yb, {
                            active: this.state.activeTab === a.Pacific,
                            onClick: this.tabClick,
                            "data-tab-id": a.Pacific
                        }, r.createElement(p.W, {
                            type: p.Nb.H4
                        }, Object(s.d)("Pacific", "CampaignsProgressTab"))))), v = r.createElement(p.Wa, {
                            padding: {
                                bottom: 2
                            }
                        }, r.createElement(p.zb, null, r.createElement(p.yb, {
                            active: this.state.activeTab === a.AllTeams,
                            onClick: this.tabClick,
                            "data-tab-id": a.AllTeams
                        }, r.createElement(p.W, {
                            type: p.Nb.H4
                        }, Object(s.d)("All Teams", "CampaignsProgressTab"))), y))
                    }
                    var E = null;
                    if (this.props.userRow) {
                        var w = {
                                rank: this.props.userRow.rank,
                                displayName: "Somebody",
                                score: this.props.userRow.score
                            },
                            C = this.props.data.users.find(function(t) {
                                return !!e.props.userRow && t.id === e.props.userRow.entryKey
                            });
                        C && C.displayName && (w.displayName = C.displayName, w.imageURL = C.profileImageURL), E = r.createElement(u, {
                            rank: w.rank,
                            score: w.score,
                            displayName: w.displayName,
                            imageURL: w.imageURL
                        })
                    }
                    return r.createElement(p.Wa, {
                        className: "campaign-leaderboard",
                        display: p.X.Flex,
                        flexDirection: p.Z.Column,
                        justifyContent: p.Va.Between,
                        flexGrow: 1
                    }, v, r.createElement(p.Wa, {
                        className: "campaign-leaderboard__rows"
                    }, r.createElement("ul", null, c, this.props.userRow && E)), r.createElement(p.Wa, {
                        display: p.X.Flex,
                        justifyContent: p.Va.Center,
                        margin: {
                            top: 2
                        }
                    }, f.length > 1 && f))
                }, t = i.__decorate([Object(o.a)(g, {
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
            n.d(t, "a", function() {
                return b
            })
        },
        jAjM: function(e, t, n) {
            "use strict";
            var a, i = n("mrSG"),
                r = n("TSYQ"),
                s = n("q1tI"),
                o = n("f00E"),
                l = n("QK1T"),
                d = n("Ue10");
            n("/2zc");
            ! function(e) {
                e[e.Default = 0] = "Default", e[e.Small = 1] = "Small", e[e.Medium = 2] = "Medium", e[e.Large = 3] = "Large"
            }(a || (a = {}));
            var c = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    var e, t, n = "esports-hexagon__mask--unavailable-" + Object(o.a)(),
                        i = "esports-hexagon__mask--cheer-more-" + Object(o.a)(),
                        c = "esports-hexagon__pattern--" + Object(o.a)();
                    this.props.isUnavailable ? (e = "url(#" + n, t = "esports-hexagon__mask--unavailable") : this.props.needsToCheerMore && (e = "url(#" + i, t = "esports-hexagon__mask--cheer-more");
                    var p = /Edge/.test(window.navigator.userAgent) ? 5 : Object(l.b)(window.navigator.userAgent) ? -25 : 0,
                        m = /Edge/.test(window.navigator.userAgent) ? -5 : Object(l.b)(window.navigator.userAgent) ? 8 : 5,
                        u = /Edge/.test(window.navigator.userAgent) ? 155 : 131,
                        h = /Edge/.test(window.navigator.userAgent) ? 90 : Object(l.b)(window.navigator.userAgent) ? 150 : 100,
                        g = Object(l.b)(window.navigator.userAgent) ? 150 : 131,
                        b = Object(l.b)(window.navigator.userAgent) ? 0 : 10,
                        f = r("esports-hexagon__svg", {
                            "esports-hexagon__svg--large": this.props.size === a.Large
                        }, {
                            "esports-hexagon__svg--small": this.props.size === a.Small
                        }, {
                            "esports-hexagon__svg--medium": this.props.size === a.Medium
                        }, {
                            "esports-hexagon__svg--small-blizzard": !this.props.comingSoon && this.props.size === a.Small
                        }),
                        k = r("esports-hexagon__svg--background", {
                            "esports-hexagon__svg--background-coming-soon": this.props.comingSoon
                        }),
                        v = r("esports-hexagon__svg--fill", {
                            "esports-hexagon__svg--fill-coming-soon": this.props.comingSoon
                        });
                    return s.createElement(d.Wa, {
                        className: "esports-hexagon",
                        display: d.X.Flex,
                        flexDirection: d.Z.Column
                    }, s.createElement("svg", {
                        className: f,
                        viewBox: "5 0 90 131"
                    }, s.createElement("defs", null, s.createElement("pattern", {
                        id: c,
                        patternUnits: "userSpaceOnUse",
                        width: "100",
                        height: g
                    }, s.createElement("image", {
                        className: "esports-hexagon__image",
                        xlinkHref: this.props.imageURL,
                        x: p,
                        y: m,
                        width: h,
                        height: u
                    })), s.createElement("filter", {
                        id: n
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
                        points: 0 + b + ",0 " + (100 - b) + ",0 " + (100 - b) + ",131 " + (0 + b) + ",131",
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
            n.d(t, !1, function() {
                return "esports-hexagon__mask--unavailable"
            }), n.d(t, !1, function() {
                return "esports-hexagon__mask--cheer-more"
            }), n.d(t, !1, function() {
                return "esports-hexagon__pattern"
            }), n.d(t, "b", function() {
                return a
            }), n.d(t, "a", function() {
                return c
            })
        },
        knLa: function(e, t, n) {
            var a = {
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
            a.loc.source = {
                body: '#import "twilight/features/campaigns/models/reward.gql"\nquery CampaignsIndividualAndTeamRewards($channelID: ID!) {\nuser(id: $channelID) {\nid\ntournament {\nid\nrewards {\nindividual {\n...reward\n}\n}\n}\n}\n}',
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            var i = {};
            a.definitions = a.definitions.concat(function(e) {
                return e.filter(function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var t = e.name.value;
                    return !i[t] && (i[t] = !0, !0)
                })
            }(n("VK0B").definitions)), e.exports = a
        },
        ko4C: function(e, t, n) {},
        ktVs: function(e, t, n) {
            var a = {
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
            a.loc.source = {
                body: '#import "twilight/features/bits/models/bits-leaderboard-item-fragment.gql"\nquery CampaignsUserLeaderboard($channelID: ID!) {\nuser(id: $channelID) {\nid\ntournament {\nid\nglobalLeaderboard {\nid\n...leaderboardItem\n}\nself {\nglobalLeaderboardItem {\nid\nentryKey\nscore\nrank\n}\n}\n}\n}\n}',
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            var i = {};
            a.definitions = a.definitions.concat(function(e) {
                return e.filter(function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var t = e.name.value;
                    return !i[t] && (i[t] = !0, !0)
                })
            }(n("fhkr").definitions)), e.exports = a
        },
        n7kk: function(e, t, n) {
            "use strict";
            n.r(t);
            var a = n("/MKj"),
                i = n("kRBY"),
                r = n("mrSG"),
                s = n("q1tI"),
                o = n("oJmH"),
                l = n("yR8l"),
                d = n("eDVu"),
                c = n("0Log"),
                p = n("/aPz"),
                m = n("4rCz"),
                u = n("/7QA"),
                h = n("jAjM"),
                g = n("uLiP"),
                b = n("hRrL"),
                f = n("Ue10"),
                k = (n("6mxx"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            activeMilestoneID: void 0
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        return s.createElement("div", {
                            className: "campaign-reward-group"
                        }, s.createElement(f.Wa, {
                            position: f.eb.Relative
                        }, s.createElement(f.Wa, {
                            padding: {
                                bottom: 1
                            }
                        }, s.createElement(f.W, {
                            "data-test-selector": "campaign-reward-group-title",
                            type: f.Nb.H3
                        }, this.props.title), this.props.totalRewards > 0 && s.createElement(f.Wa, {
                            className: "campaign-reward-group__entitled-amount",
                            attachRight: !0,
                            position: f.eb.Absolute
                        }, s.createElement(f.Wa, {
                            className: "campaign-claim-all-rewards-button",
                            display: f.X.InlineFlex,
                            margin: {
                                right: 1
                            }
                        }, s.createElement(f.W, {
                            "data-test-selector": "campaign-reward-group-entitled-rewards",
                            fontSize: f.Ba.Size3
                        }, Object(u.d)("{entitled} / {total}", {
                            entitled: Object(u.f)(this.props.rewardsEntitled),
                            total: Object(u.f)(this.props.totalRewards)
                        }, "CampaignsRewardGroup"))))), s.createElement(f.Wa, {
                            display: f.X.Flex,
                            justifyContent: f.Va.Between
                        }, s.createElement(f.W, {
                            "data-test-selector": "campaign-reward-group-description"
                        }, this.props.description), this.props.showClaimAllButton && this.props.tournamentID && s.createElement(f.Wa, {
                            margin: {
                                left: 4
                            }
                        }, s.createElement(b.a, {
                            tournamentID: this.props.tournamentID,
                            enabled: !!this.props.canClaimRewards
                        })))), s.createElement(f.Wa, {
                            "data-test-selector": "campaign-reward-group-display-children",
                            padding: {
                                bottom: 5
                            },
                            position: f.eb.Relative
                        }, this.props.children))
                    }, t
                }(s.Component)),
                v = n("TSYQ"),
                y = n("huSm"),
                E = n("+z1J"),
                w = (n("0/kz"), function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        var e = this,
                            t = this.props.milestones.find(function(t) {
                                return t.rewards.some(function(t) {
                                    return t.id === e.props.reward.id
                                })
                            }),
                            n = t || this.props.milestones.length < 1 ? this.props.reward : void 0,
                            a = this.props.type === E.a.Blizzard || this.props.type === E.a.Twitch && this.props.reward.isEntitled || this.props.insiderType === E.c.Bits,
                            i = v({
                                "esports-reward-row-item__emote": !!this.props.emoteType
                            }, {
                                "esports-reward-row-item__bits": this.props.type === E.a.Insider && this.props.insiderType === E.c.Bits
                            }, {
                                "esports-reward-row-item__badge": this.props.type === E.a.Insider && this.props.insiderType === E.c.Badge
                            }, {
                                "esports-reward-row-item__igc": this.props.type === E.a.Insider && this.props.insiderType === E.c.InGameContent
                            });
                        return s.createElement(f.Oa, {
                            className: i,
                            padding: this.props.emoteType && {
                                right: 0,
                                bottom: 2
                            },
                            textAlign: f.Jb.Center
                        }, s.createElement("li", null, s.createElement(y.a, {
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
                        }), n && s.createElement(f.Wa, {
                            "data-test-selector": "esports-reward-row-item-title",
                            display: f.X.Flex,
                            flexDirection: f.Z.Column,
                            alignItems: f.f.Center,
                            padding: {
                                top: 1
                            }
                        }, s.createElement(f.W, {
                            noWrap: this.props.insiderType !== E.c.Badge,
                            bold: !0
                        }, n.name), a && s.createElement(f.W, {
                            "data-test-selector": "esports-reward-row-item-subtext",
                            noWrap: !0,
                            color: f.O.Alt2
                        }, n.description)), !t && this.props.type === E.a.Blizzard && !this.props.insiderType && s.createElement(f.Wa, {
                            "data-test-selector": "esports-reward-row-item-coming-soon",
                            display: f.X.Flex,
                            flexDirection: f.Z.Column,
                            alignItems: f.f.Center,
                            padding: {
                                top: 1,
                                bottom: 2
                            }
                        }, s.createElement(f.W, {
                            bold: !0
                        }, Object(u.d)("Coming Soon", "CampaignsRewardGroup")))))
                    }, t
                }(s.Component)),
                C = function(e) {
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
                    return r.__extends(t, e), t.prototype.render = function() {
                        var e = this,
                            t = this.props.rewards.map(function(t) {
                                return s.createElement(w, {
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
                                return s.createElement(w, {
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
                        return s.createElement("div", {
                            className: "esports-reward-row",
                            ref: this.setRefDelegate
                        }, s.createElement(f.Oa, {
                            display: f.X.Flex,
                            flexWrap: f.Aa.Wrap,
                            flexDirection: f.Z.Row,
                            justifyContent: f.Va.Start,
                            alignItems: f.f.Baseline
                        }, s.createElement("ul", null, t)))
                    }, t
                }(s.Component),
                S = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        return s.createElement(f.Wa, {
                            className: "esports-reward-subgroup",
                            display: f.X.InlineBlock,
                            margin: {
                                top: 2,
                                right: 2
                            }
                        }, s.createElement(f.xb, {
                            "data-test-selector": "esports-reward-group-title",
                            borderBottom: !0
                        }, s.createElement(f.Wa, {
                            padding: {
                                bottom: 1
                            }
                        }, s.createElement(f.W, {
                            color: f.O.Link,
                            transform: f.Mb.Uppercase,
                            bold: !0
                        }, this.props.title)), s.createElement(f.Wa, {
                            padding: {
                                bottom: 1
                            }
                        }, this.props.description && s.createElement(f.W, null, this.props.description))), s.createElement(f.Wa, {
                            "data-test-selector": "esports-reward-group-display-children"
                        }, this.props.children))
                    }, t
                }(s.PureComponent),
                P = n("QlRw"),
                N = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
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
                            a = Object(u.d)("Overwatch in-game items you’ve unlocked with the All-Access Pass or by Cheering with other community members. Collect all {amount}!", {
                                amount: e
                            }, "CampaignsGlobalRewards"),
                            i = 0,
                            r = 0;
                        this.props.globalRewards.length > 0 && (i = e, r = this.props.globalRewards.filter(function(e) {
                            return e.isEntitled
                        }).length, this.props.individualMilestones && this.props.individualRewards && (r += this.props.individualRewards.filter(function(e) {
                            return e.isEntitled
                        }).length), r += this.props.insiderRewards.heroSkins.filter(function(e) {
                            return e.isEntitled
                        }).length, r += this.props.insiderRewards.inGameContent.filter(function(e) {
                            return e.isEntitled
                        }).length, t.length > 0 && (r += t.filter(function(e) {
                            return "igc" === e.type && e.isEntitled
                        }).length));
                        var o = this.props.insiderRewards.heroSkins,
                            l = o.find(function(e) {
                                return e.id === g.d
                            }),
                            d = o.find(function(e) {
                                return e.id === g.a
                            }),
                            c = o.find(function(e) {
                                return e.id === g.c
                            });
                        return o = o.filter(function(e) {
                            return e.id !== g.d && e.id !== g.a
                        }), d && c && (o = o.filter(function(e) {
                            return e.id !== g.c
                        })), s.createElement(k, {
                            title: n,
                            description: a,
                            totalRewards: i,
                            rewardsEntitled: r,
                            tournamentID: this.props.tournamentId,
                            showClaimAllButton: this.props.blizzardAccount && this.props.blizzardAccount.region !== P.a.China,
                            canClaimRewards: this.props.canClaimRewards
                        }, s.createElement(S, {
                            title: Object(u.d)("Global Progress Rewards", "CampaignsGlobalRewards")
                        }, s.createElement(C, {
                            type: E.a.Blizzard,
                            rewards: this.props.globalRewards,
                            milestones: this.props.globalMilestones,
                            milestoneSize: h.b.Large,
                            blizzardAccount: this.props.blizzardAccount,
                            userProgress: this.props.individualProgress,
                            globalProgress: this.props.globalProgress
                        })), this.props.individualRewards && this.props.individualRewards.length > 0 && this.props.individualMilestones && s.createElement(f.Oa, {
                            padding: {
                                top: 2
                            }
                        }, s.createElement(S, {
                            title: Object(u.d)("Individual Progress Rewards", "CampaignsGlobalRewards")
                        }, s.createElement(C, {
                            type: E.a.Blizzard,
                            rewards: this.props.individualRewards,
                            milestones: this.props.individualMilestones,
                            milestoneSize: h.b.Large,
                            blizzardAccount: this.props.blizzardAccount,
                            userProgress: this.props.individualProgress,
                            globalProgress: this.props.globalProgress
                        }))), this.props.collectionMilestones && this.props.collectionMilestones.length > 0 && s.createElement(f.Oa, {
                            padding: {
                                top: 2
                            }
                        }, s.createElement(S, {
                            title: Object(u.d)("Team Emote Collection", "CampaignsGlobalRewards")
                        }, s.createElement(C, {
                            type: E.a.Blizzard,
                            rewards: t,
                            milestones: this.props.collectionMilestones,
                            milestoneSize: h.b.Large,
                            blizzardAccount: this.props.blizzardAccount
                        }))), s.createElement(f.Oa, {
                            padding: {
                                top: 2
                            }
                        }, s.createElement(S, {
                            title: Object(u.d)("All-Access Pass Rewards", "CampaignsGlobalRewards")
                        }, d && c && s.createElement(f.Ia, null, s.createElement(f.P, {
                            cols: {
                                default: 12,
                                xl: 6
                            }
                        }, s.createElement(C, {
                            type: E.a.Blizzard,
                            insiderType: E.c.HeroSkin,
                            rewards: [d],
                            milestones: this.props.insiderMilestones,
                            blizzardAccount: this.props.blizzardAccount,
                            hasInsiderPass: this.props.hasInsiderPass,
                            subscriptionProducts: this.props.subscriptionProducts,
                            big: !0
                        })), s.createElement(f.P, {
                            cols: {
                                default: 12,
                                xl: 6
                            }
                        }, s.createElement(C, {
                            type: E.a.Blizzard,
                            insiderType: E.c.HeroSkin,
                            rewards: [c],
                            milestones: this.props.insiderMilestones,
                            blizzardAccount: this.props.blizzardAccount,
                            hasInsiderPass: this.props.hasInsiderPass,
                            subscriptionProducts: this.props.subscriptionProducts,
                            big: !0
                        }))), l && s.createElement(C, {
                            type: E.a.Blizzard,
                            insiderType: E.c.HeroSkin,
                            rewards: [l],
                            milestones: this.props.insiderMilestones,
                            blizzardAccount: this.props.blizzardAccount,
                            hasInsiderPass: this.props.hasInsiderPass,
                            subscriptionProducts: this.props.subscriptionProducts,
                            big: !0
                        }), s.createElement(C, {
                            type: E.a.Blizzard,
                            insiderType: E.c.HeroSkin,
                            rewards: o,
                            milestones: this.props.insiderMilestones,
                            milestoneSize: h.b.Large,
                            blizzardAccount: this.props.blizzardAccount,
                            hasInsiderPass: this.props.hasInsiderPass,
                            subscriptionProducts: this.props.subscriptionProducts,
                            secondaryType: E.a.Insider,
                            secondaryInsiderType: E.c.InGameContent,
                            secondaryRewards: this.props.insiderRewards.inGameContent
                        }))))
                    }, t
                }(s.Component),
                x = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        var e = Object(u.d)("Badges", "CampaignsBadgeRewards");
                        return s.createElement(S, {
                            title: e,
                            description: ""
                        }, s.createElement(f.Wa, {
                            padding: {
                                top: 2
                            }
                        }, s.createElement(C, {
                            type: E.a.Insider,
                            insiderType: E.c.Badge,
                            milestones: [],
                            rewards: this.props.rewards,
                            hasInsiderPass: this.props.hasInsiderPass,
                            subscriptionProducts: this.props.subscriptionProducts
                        })))
                    }, t
                }(s.Component),
                I = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        var e = Object(u.d)("Bits", "CampaignsBitsRewards");
                        return s.createElement(S, {
                            title: e,
                            description: ""
                        }, s.createElement(f.Wa, {
                            padding: {
                                top: 2
                            }
                        }, s.createElement(C, {
                            type: E.a.Insider,
                            insiderType: E.c.Bits,
                            milestones: this.props.milestones,
                            rewards: this.props.rewards,
                            hasInsiderPass: this.props.hasInsiderPass,
                            subscriptionProducts: this.props.subscriptionProducts,
                            userHasPrime: this.props.userHasPrime
                        })))
                    }, t
                }(s.Component),
                z = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        var e = Object(u.d)("Quote Emotes", "CampaignsCheerbombEmotes"),
                            t = Object(u.d)("Unlock 5 emotes by cheering 250 bits or more! Cheer 500 bits or more and you’ll unlock the other 5 and trigger a shower of gifts for others in Chat.", "CampaignsCheerbombEmotes");
                        return s.createElement(S, {
                            title: e,
                            description: t
                        }, s.createElement(f.Wa, {
                            padding: {
                                top: 2
                            }
                        }, s.createElement(C, {
                            type: E.a.Twitch,
                            emoteType: E.b.Cheerbomb,
                            milestones: [],
                            rewards: this.props.rewards
                        })))
                    }, t
                }(s.Component),
                O = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        var e = this.props.rewards.length,
                            t = Object(u.d)("Hero Emotes", "CampaignsHeroEmotes"),
                            n = Object(u.d)("Unlock a random Twitch emote featuring one of {amount} Overwatch Heroes for every 100 Bits you Cheer. Guaranteed no duplicates! Collect them all!", {
                                amount: e
                            }, "CampaignsHeroEmotes");
                        return s.createElement(S, {
                            title: t,
                            description: n
                        }, s.createElement(f.Wa, {
                            padding: {
                                top: 2
                            }
                        }, s.createElement(C, {
                            type: E.a.Twitch,
                            emoteType: E.b.Hero,
                            milestones: this.props.milestones,
                            rewards: this.props.rewards
                        })))
                    }, t
                }(s.Component),
                T = n("Sk0q"),
                _ = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        var e = Object(u.d)("All-Access Pass Emotes", "CampaignsInsiderEmotes");
                        if (this.props.subscriptionProducts.length < 1) return null;
                        var t = this.props.subscriptionProducts[0],
                            n = Object(T.b)(t, this.props.hasInsiderPass);
                        return s.createElement(S, {
                            title: e,
                            description: ""
                        }, s.createElement(f.Wa, {
                            padding: {
                                top: 2
                            }
                        }, s.createElement(C, {
                            type: E.a.Insider,
                            emoteType: E.b.Insider,
                            insiderType: E.c.SubEmote,
                            milestones: [],
                            rewards: n,
                            hasInsiderPass: this.props.hasInsiderPass,
                            subscriptionProducts: this.props.subscriptionProducts
                        })))
                    }, t
                }(s.PureComponent),
                R = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        var e = Object(u.d)("Team Emotes", "CampaignsTeamEmotes"),
                            t = Object(u.d)("Cheer to show your favorite team some love! Cheers 150 Bits or more using a team’s Cheermote and unlock their Twitch emote.", "CampaignsTeamEmotes");
                        return s.createElement(S, {
                            title: e,
                            description: t
                        }, s.createElement(f.Wa, {
                            padding: {
                                top: 2
                            }
                        }, s.createElement(C, {
                            type: E.a.Twitch,
                            emoteType: E.b.Team,
                            milestones: this.props.milestones,
                            rewards: this.props.rewards
                        })))
                    }, t
                }(s.Component),
                W = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.getRewardCounts = function() {
                            var e = t.props.rewards,
                                n = e.cheerbomb,
                                a = e.individual,
                                i = e.team,
                                r = e.insider,
                                s = 0,
                                o = 0,
                                l = a.filter(function(e) {
                                    return "emote" === e.type
                                });
                            l.length > 0 && (s += l.length, o += l.filter(function(e) {
                                return e.isEntitled
                            }).length), i.length > 0 && (s += i.length, o += i.filter(function(e) {
                                return e.isEntitled
                            }).length), n.length > 0 && (s += n.length, o += n.filter(function(e) {
                                return e.isEntitled
                            }).length);
                            var d = t.props.subscriptionProducts.length > 0 ? Object(T.b)(t.props.subscriptionProducts[0], t.props.hasInsiderPass) : [];
                            return d.length > 0 && (s += d.length, o += d.filter(function(e) {
                                return e.isEntitled
                            }).length), t.props.badgeRewards.length > 0 && (s += t.props.badgeRewards.length, o += t.props.badgeRewards.filter(function(e) {
                                return e.isEntitled
                            }).length), r.bits.length > 0 && (s += r.bits.length, o += r.bits.filter(function(e) {
                                return e.isEntitled
                            }).length), {
                                totalRewards: s,
                                rewardsEntitled: o
                            }
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        var e = Object(u.d)("Twitch Rewards", "CampaignsTwitchRewards"),
                            t = Object(u.d)("Unlock exclusive Twitch Rewards by Cheering for your favorite team and by purchasing the Overwatch League All-Access Pass", "CampaignsTwitchRewards"),
                            n = this.getRewardCounts(),
                            a = n.totalRewards,
                            i = n.rewardsEntitled;
                        return s.createElement(k, {
                            title: e,
                            description: t,
                            totalRewards: a,
                            rewardsEntitled: i,
                            showClaimAllButton: !1,
                            canClaimRewards: !1
                        }, this.props.rewards.insider.bits.length > 0 && s.createElement(f.Wa, {
                            padding: {
                                top: 2
                            }
                        }, s.createElement(I, {
                            milestones: this.props.insiderMilestones,
                            rewards: this.props.rewards.insider.bits,
                            hasInsiderPass: this.props.hasInsiderPass,
                            subscriptionProducts: this.props.subscriptionProducts,
                            userHasPrime: this.props.userHasPrime
                        })), s.createElement(f.Wa, {
                            padding: {
                                top: 2
                            }
                        }, s.createElement(O, {
                            milestones: this.props.inidividualMilestones,
                            rewards: this.props.rewards.individual.filter(function(e) {
                                return "emote" === e.type
                            })
                        })), s.createElement(f.Wa, {
                            padding: {
                                top: 2
                            }
                        }, s.createElement(R, {
                            milestones: this.props.teamMilestones,
                            rewards: this.props.rewards.team
                        })), this.props.rewards.cheerbomb.length > 0 && s.createElement(f.Wa, {
                            padding: {
                                top: 2
                            }
                        }, s.createElement(z, {
                            rewards: this.props.rewards.cheerbomb
                        })), s.createElement(f.Wa, {
                            padding: {
                                top: 2
                            }
                        }, s.createElement(_, {
                            subscriptionProducts: this.props.subscriptionProducts,
                            hasInsiderPass: this.props.hasInsiderPass
                        })), s.createElement(f.Wa, {
                            padding: {
                                top: 2
                            }
                        }, s.createElement(x, {
                            rewards: this.props.badgeRewards,
                            hasInsiderPass: this.props.hasInsiderPass,
                            subscriptionProducts: this.props.subscriptionProducts
                        })))
                    }, t
                }(s.Component),
                F = n("rC/K"),
                A = n("/5u6"),
                L = n("bwyL"),
                D = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            canClaimRewards: !1
                        }, t.getIndividualMilestone = function() {
                            return t.getMilestoneForType(A.a.Individual)
                        }, t.getTeamMilestone = function() {
                            return t.getMilestoneForType(A.a.Team)
                        }, t.getInsiderMilestones = function() {
                            return t.getMilestoneForType(A.a.Insider)
                        }, t.getMilestoneForType = function(e) {
                            return t.props.data && t.props.data.user.tournament && t.props.data.user.tournament.self ? t.props.data.user.tournament.self.progress.milestones.filter(function(t) {
                                return t.objectiveTag === e
                            }) : []
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.componentDidUpdate = function() {
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
                                    a = n.global,
                                    i = n.team,
                                    r = n.individual,
                                    s = n.insider;
                                t = a.concat(i, r, s.heroSkins, s.inGameContent).some(function(e) {
                                    return e.canBeFulfilled
                                })
                            }
                            this.state.canClaimRewards !== t && this.setState({
                                canClaimRewards: t
                            })
                        }
                    }, t.prototype.render = function() {
                        if (!this.props.data || this.props.data.loading) return s.createElement(f.Wa, {
                            fullHeight: !0,
                            fullWidth: !0,
                            textAlign: f.Jb.Center,
                            padding: {
                                top: 4
                            }
                        }, s.createElement(f.Ya, {
                            fillContent: !0
                        }));
                        if (this.props.data && this.props.data.error || !this.props.data.user.tournament) return null;
                        var e = this.props.data.user.tournament.progress.milestones,
                            t = this.getIndividualMilestone(),
                            n = this.getTeamMilestone(),
                            a = this.getInsiderMilestones(),
                            i = this.props.data.user.tournament.progress.milestones.slice();
                        this.props.data.user.tournament.self && i.concat.apply(i, this.props.data.user.tournament.self.progress.milestones.filter(function(e) {
                            return e.rewards.every(function(e) {
                                return "igc" === e.type
                            })
                        }));
                        var r = !!(this.props.user && this.props.data && this.props.data.user && this.props.data.user.self && this.props.data.user.self.subscriptionBenefit),
                            o = this.props.data.user.broadcastBadges.filter(function(e) {
                                return "subscriber" === e.setID
                            }).map(function(e) {
                                return Object(T.a)(e, r)
                            }),
                            l = this.props.data.user.tournament.rewards.insider.badges.concat(o),
                            d = this.props.campaignProperties && this.props.campaignProperties.objectives && this.props.campaignProperties.objectives.filter(function(e) {
                                return e.tag === F.a.Collection
                            }),
                            c = d && d.map(function(e) {
                                return e.milestones
                            }).reduce(function(e, t) {
                                return t.concat(e)
                            }, []);
                        return s.createElement(f.Wa, {
                            margin: {
                                y: 2
                            }
                        }, s.createElement(f.Wa, {
                            margin: {
                                bottom: 2
                            }
                        }, s.createElement(N, {
                            globalRewards: this.props.data.user.tournament.rewards.global,
                            globalProgress: this.props.data.user.tournament.progress.amount,
                            globalMilestones: e,
                            individualRewards: this.props.data.user.tournament.rewards.individual.filter(function(e) {
                                return "igc" === e.type
                            }),
                            individualProgress: this.props.data.user.tournament.self && this.props.data.user.tournament.self.progress.amount,
                            individualMilestones: this.props.data.user.tournament.self && this.props.data.user.tournament.self.progress.milestones,
                            insiderRewards: this.props.data.user.tournament.rewards.insider,
                            insiderMilestones: a,
                            collectionMilestones: c,
                            blizzardAccount: this.props.blizzardAccount,
                            tournamentId: this.props.data.user.tournament.id,
                            canClaimRewards: this.state.canClaimRewards,
                            hasInsiderPass: r,
                            subscriptionProducts: this.props.data.user.subscriptionProducts
                        })), s.createElement(W, {
                            inidividualMilestones: t,
                            teamMilestones: n,
                            insiderMilestones: a,
                            rewards: this.props.data.user.tournament.rewards,
                            badgeRewards: l,
                            hasInsiderPass: r,
                            subscriptionProducts: this.props.data.user.subscriptionProducts,
                            userHasPrime: this.props.userHasPrime
                        }))
                    }, t
                }(s.Component),
                j = Object(o.compose)(Object(l.a)(L, {
                    options: function(e) {
                        return {
                            variables: {
                                channelID: e.channelID
                            }
                        }
                    }
                }), Object(d.a)(function(e) {
                    return {
                        topic: e.user ? Object(p.C)(e.user.id) : "",
                        query: L,
                        variables: {
                            channelID: e.channelID
                        },
                        skip: !e.user,
                        type: c.PubsubMessageType.UserCampaignRewardEvent,
                        mutator: function(t, n) {
                            if (!(t.data.contents.length < 1) && (m.l.debug("got individual reward message for reward: " + t.data.contents[0].id), n && n.user && n.user.tournament && n.user.tournament.self)) return e && e.data && e.data.refetch && e.data.refetch(), n
                        }
                    }
                }))(D);
            var B = Object(a.connect)(function(e) {
                return {
                    user: Object(i.e)(e)
                }
            })(j);
            n.d(t, "PublicProps", function() {}), n.d(t, "CampaignsRewardsTab", function() {
                return B
            })
        },
        nCSL: function(e, t, n) {},
        o5UI: function(e, t, n) {},
        qGAq: function(e, t, n) {},
        qyxT: function(e, t, n) {
            "use strict";

            function a(e) {
                for (var t = e.length - 1; t > 0; t--) {
                    var n = Math.floor(Math.random() * (t + 1)),
                        a = e[t];
                    e[t] = e[n], e[n] = a
                }
                return e
            }
            n.d(t, "a", function() {
                return a
            })
        },
        "rC/K": function(e, t, n) {
            "use strict";
            var a;
            n.d(t, "a", function() {
                    return a
                }),
                function(e) {
                    e.Individual = "INDIVIDUAL", e.Team = "TEAM", e.Global = "GLOBAL", e.Insider = "INSIDER", e.Collection = "COLLECTION"
                }(a || (a = {}))
        },
        uLiP: function(e, t, n) {
            "use strict";
            var a = n("mrSG"),
                i = n("TSYQ"),
                r = n("q1tI"),
                s = n("/7QA"),
                o = n("yR8l"),
                l = n("5zXJ"),
                d = n("jAjM"),
                c = n("WlPE"),
                p = n("Ue10"),
                m = (n("PvlP"), function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        return r.createElement(p.Wa, {
                            className: "insider-pass-full-skin-reward",
                            padding: {
                                x: 1
                            },
                            display: p.X.Flex,
                            flexDirection: p.Z.Column
                        }, r.createElement("img", {
                            className: "insider-pass-full-skin-reward__image",
                            src: this.props.imageURL
                        }), r.createElement(p.Wa, {
                            textAlign: p.Jb.Center
                        }, r.createElement(p.W, {
                            fontSize: p.Ba.Size4,
                            bold: !0
                        }, this.props.name)), r.createElement(p.Wa, {
                            textAlign: p.Jb.Center
                        }, r.createElement(p.W, {
                            color: p.O.Alt2
                        }, this.props.subText)))
                    }, t
                }(r.PureComponent)),
                u = n("YkUe"),
                h = n("hRrL"),
                g = n("7TMk"),
                b = (n("nCSL"), "rewards-purchase-owl2018-playerspack"),
                f = "rewards-purchase-owl2018-lucio-ig-emote",
                k = {
                    McCree: l.c + "/owl-2017/global-rewards/full-skin/mccree.png",
                    Moira: l.c + "/owl-2017/global-rewards/full-skin/moira.png",
                    "Soldier: 76": l.c + "/owl-2017/global-rewards/full-skin/soldier-76.png"
                },
                v = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        if (!this.props.data || this.props.data.loading) return r.createElement(p.Ya, null);
                        if (this.props.data && this.props.data.error) return null;
                        var e = this.props.insiderPurchaseState === u.a.PostPurchase,
                            t = i("insider-pass-rewards__item", {
                                "insider-pass-rewards__item--post-purchase": e
                            }),
                            n = !!this.props.data.user.tournament.rewards.insider.heroSkins.find(function(e) {
                                return e.id === b
                            }),
                            a = !!this.props.data.user.tournament.rewards.insider.heroSkins.find(function(e) {
                                return "rewards-purchase-owl2018-allstars" === e.id
                            }),
                            o = this.props.data.user.tournament.rewards.insider.heroSkins.find(function(e) {
                                return e.id === f
                            }),
                            l = [];
                        if (this.props.insiderPurchaseState === u.a.PrePurchase) l = this.props.data.user.tournament.rewards.insider.heroSkins.filter(function(e) {
                            return e.id !== b && e.id !== f && "rewards-purchase-owl2018-allstars" !== e.id
                        }).map(function(e) {
                            return r.createElement(m, {
                                key: e.name,
                                name: e.name,
                                subText: "OWL Skin",
                                imageURL: k[e.name]
                            })
                        });
                        else {
                            var g = this.props.data.user.tournament.rewards.insider.heroSkins.filter(function(e) {
                                return e.id !== b && "rewards-purchase-owl2018-allstars" !== e.id
                            });
                            o && a && (g = g.filter(function(e) {
                                return e.id !== f
                            })), l = g.map(function(e) {
                                return r.createElement(p.Wa, {
                                    className: t,
                                    padding: {
                                        x: 3
                                    },
                                    key: e.name
                                }, r.createElement(d.a, {
                                    imageURL: e.imageURL,
                                    size: d.b.Large
                                }), r.createElement(p.Wa, {
                                    display: p.X.Flex,
                                    flexDirection: p.Z.Column,
                                    alignItems: p.f.Center,
                                    padding: {
                                        top: 1
                                    }
                                }, r.createElement(p.W, {
                                    fontSize: p.Ba.Size4,
                                    noWrap: !0,
                                    bold: !0
                                }, e.name), r.createElement(p.W, {
                                    noWrap: !0,
                                    color: p.O.Alt2
                                }, e.description)))
                            })
                        }
                        var v = this.props.data.user.tournament.rewards.insider.inGameContent.map(function(n) {
                                return r.createElement(p.Wa, {
                                    className: t,
                                    "data-test-selector": "in-game-content-selector",
                                    padding: {
                                        x: 1
                                    },
                                    key: n.name,
                                    textAlign: p.Jb.Center
                                }, r.createElement(c.a, {
                                    imageURL: n.imageURL,
                                    size: e ? c.c.Large : c.c.Medium,
                                    borderType: e ? c.b.Brand : c.b.Default
                                }), r.createElement(p.Wa, {
                                    display: p.X.Flex,
                                    flexDirection: p.Z.Column,
                                    alignItems: p.f.Center,
                                    padding: {
                                        top: 1
                                    }
                                }, r.createElement(p.W, {
                                    fontSize: p.Ba.Size5,
                                    noWrap: !0,
                                    bold: !0
                                }, n.name)))
                            }),
                            y = e && this.props.blizzardRewardsAvailable,
                            E = this.props.data.user.tournament.rewards.insider,
                            w = E.heroSkins.concat(E.inGameContent).some(function(e) {
                                return e.canBeFulfilled
                            });
                        return r.createElement(p.Wa, {
                            className: "insider-pass-rewards",
                            display: p.X.Flex,
                            flexDirection: p.Z.Column,
                            padding: {
                                y: 3
                            },
                            textAlign: p.Jb.Center
                        }, r.createElement(p.W, {
                            fontSize: p.Ba.Size3,
                            color: p.O.Link,
                            bold: !0
                        }, Object(s.d)("Overwatch Content with the All-Access Pass", "CampaignsInsiderRewards")), y && !w && r.createElement(p.W, {
                            fontSize: p.Ba.Size4
                        }, Object(s.d)("All in-game rewards have been claimed to your Blizzard account", "CampaignsInsiderRewards")), y && w && r.createElement(p.Wa, {
                            display: p.X.Flex,
                            flexDirection: p.Z.Row,
                            flexWrap: p.Aa.Wrap,
                            justifyContent: p.Va.Center,
                            padding: {
                                y: 1
                            }
                        }, r.createElement(h.a, {
                            tournamentID: this.props.data.user.tournament.id,
                            enabled: !0,
                            inGame: !0
                        })), !y && r.createElement(p.W, {
                            fontSize: p.Ba.Size4
                        }, Object(s.d)("A Blizzard account link is required to redeem in-game rewards", "CampaignsInsiderRewards")), this.props.insiderPurchaseState === u.a.PostPurchase && o && a && r.createElement(p.Ia, null, r.createElement(p.P, {
                            cols: {
                                default: 12,
                                xl: 6
                            }
                        }, this.renderAllstarsPack()), r.createElement(p.P, {
                            cols: {
                                default: 12,
                                xl: 6
                            }
                        }, this.renderLucio(o))), n && this.renderPlayersPack(), r.createElement(p.Wa, {
                            display: p.X.Flex,
                            flexDirection: e ? p.Z.Column : p.Z.Row,
                            flexWrap: p.Aa.Wrap,
                            justifyContent: p.Va.Center,
                            alignItems: p.f.Stretch,
                            padding: {
                                y: 2
                            }
                        }, r.createElement(p.Wa, {
                            display: p.X.Flex,
                            flexWrap: p.Aa.Wrap,
                            justifyContent: p.Va.Center,
                            alignItems: p.f.Center
                        }, l), r.createElement(p.Wa, {
                            display: p.X.Flex,
                            flexWrap: p.Aa.Wrap,
                            justifyContent: p.Va.Center,
                            alignItems: p.f.Center,
                            padding: 2
                        }, v)))
                    }, t.prototype.renderPlayersPack = function() {
                        return r.createElement(p.Wa, {
                            display: p.X.Flex,
                            justifyContent: p.Va.Center,
                            padding: {
                                left: 1,
                                right: 1
                            }
                        }, r.createElement(p.xb, {
                            className: "insider-pass-rewards__players-pack",
                            textAlign: p.Jb.Center,
                            fullWidth: !0
                        }, r.createElement(p.S, {
                            className: "insider-pass-rewards__players-pack__image",
                            src: l.c + "/owl-2017/insider-test/owl-igc-playerspack.png",
                            alt: Object(s.d)("The Players Pack Skins", "CampaignsInsiderRewards")
                        }), r.createElement(p.Wa, {
                            display: p.X.Flex,
                            flexDirection: p.Z.Column,
                            alignItems: p.f.Center,
                            padding: {
                                top: 1,
                                bottom: 1
                            }
                        }, r.createElement(p.W, {
                            fontSize: p.Ba.Size4,
                            noWrap: !0,
                            bold: !0
                        }, Object(s.d)("The Players Pack", "CampaignsInsiderRewards")), r.createElement(p.W, {
                            fontSize: p.Ba.Size5,
                            bold: !0
                        }, Object(s.d)("D.Va, Ana, Zarya, Genji, Sombra, Lucio, Widowmaker, Orisa, Winston, Reinhardt, Zenyatta, Junkrat", "CampaignsInsiderRewards")), this.renderFormattedOwlSkinsText())))
                    }, t.prototype.renderAllstarsPack = function() {
                        return r.createElement(p.Wa, {
                            display: p.X.Flex,
                            justifyContent: p.Va.Center,
                            padding: {
                                left: 1,
                                right: 1,
                                bottom: 2,
                                top: 2
                            }
                        }, r.createElement(p.xb, {
                            className: "insider-pass-rewards__new-item",
                            textAlign: p.Jb.Center,
                            fullWidth: !0
                        }, r.createElement(p.S, {
                            className: "insider-pass-rewards__new-item__image",
                            src: l.c + "/owl-2017/insider-test/owl-igc-allstars-pack.png",
                            alt: Object(s.d)("The All Stars Pack Skins", "CampaignsInsiderRewards")
                        }), r.createElement(p.Wa, {
                            display: p.X.Flex,
                            flexDirection: p.Z.Column,
                            alignItems: p.f.Center,
                            padding: {
                                top: 1,
                                bottom: 1
                            }
                        }, r.createElement(p.W, {
                            fontSize: p.Ba.Size4,
                            noWrap: !0,
                            bold: !0
                        }, Object(s.d)("The All-Stars Pack", "CampaignsInsiderRewards")), r.createElement(p.W, {
                            fontSize: p.Ba.Size5,
                            bold: !0
                        }, Object(s.d)("Mercy, Brigitte, Moira, Reinhardt, D.Va, Tracer", "CampaignsInsiderRewards")), this.renderFormattedOwlSkinsText())))
                    }, t.prototype.renderLucio = function(e) {
                        return r.createElement(p.Wa, {
                            display: p.X.Flex,
                            justifyContent: p.Va.Center,
                            padding: {
                                left: 1,
                                right: 1,
                                bottom: 2,
                                top: 2
                            }
                        }, r.createElement(p.xb, {
                            className: "insider-pass-rewards__new-item",
                            textAlign: p.Jb.Center,
                            fullWidth: !0
                        }, r.createElement(p.S, {
                            className: "insider-pass-rewards__new-item__image",
                            src: l.c + "/owl-2017/insider-test/lucio-emote-static-alt.png",
                            alt: e.name
                        }), r.createElement(p.Wa, {
                            display: p.X.Flex,
                            flexDirection: p.Z.Column,
                            alignItems: p.f.Center,
                            padding: {
                                top: 1,
                                bottom: 1
                            }
                        }, r.createElement(p.W, {
                            fontSize: p.Ba.Size4,
                            noWrap: !0,
                            bold: !0
                        }, e.name), r.createElement(p.W, {
                            noWrap: !0,
                            color: p.O.Alt2
                        }, e.description))))
                    }, t.prototype.renderFormattedOwlSkinsText = function() {
                        var e = Object(s.d)("OWL Skins", "CampaignsInsiderRewards");
                        return r.createElement(p.W, {
                            noWrap: !0,
                            color: p.O.Alt2
                        }, e)
                    }, t = a.__decorate([Object(o.a)(g, {
                        options: function(e) {
                            return {
                                variables: {
                                    channelID: e.channelID
                                }
                            }
                        }
                    })], t)
                }(r.PureComponent);
            n.d(t, !1, function() {
                return "in-game-content-selector"
            }), n.d(t, "d", function() {
                return b
            }), n.d(t, "c", function() {
                return f
            }), n.d(t, "a", function() {
                return "rewards-purchase-owl2018-allstars"
            }), n.d(t, "b", function() {
                return v
            })
        },
        xjjM: function(e, t, n) {
            var a = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "InsiderPassTabEmotesAndBadges"
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
                                                                value: "badges"
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
                    end: 516
                }
            };
            a.loc.source = {
                body: '#import "twilight/features/badges/models/badge-fragment.gql"\nquery InsiderPassTabEmotesAndBadges($channelID: ID!) {\nuser(id: $channelID) {\nid\nbroadcastBadges {\n...badge\n}\nsubscriptionProducts {\nid\nprice\nurl\nemoteSetID\ndisplayName\nname\nemotes {\nid\ntoken\n}\nself {\npromotion {\nnewPrice\noldPrice\ndiscountType\ndiscountValue\n}\n}\ngiftPromotion {\nnewPrice\noldPrice\ndiscountType\ndiscountValue\n}\n}\ntournament {\nid\nrewards {\ninsider {\nbadges {\nid\nname\ntype\nimageURL\ndescription\ncanBeFulfilled\nisEntitled\nisPrimeOnly\n}\n}\n}\n}\n}\n}',
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            var i = {};
            a.definitions = a.definitions.concat(function(e) {
                return e.filter(function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var t = e.name.value;
                    return !i[t] && (i[t] = !0, !0)
                })
            }(n("IKE4").definitions)), e.exports = a
        },
        yImC: function(e, t, n) {},
        ywDU: function(e, t, n) {}
    }
]);