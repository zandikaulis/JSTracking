(window.webpackJsonp = window.webpackJsonp || []).push([
    [112], {
        "+8bU": function(e, t, a) {},
        "+z1J": function(e, t, a) {
            "use strict";
            var n, r, i;
            a.d(t, "a", function() {
                    return n
                }), a.d(t, "b", function() {
                    return r
                }), a.d(t, "c", function() {
                    return i
                }),
                function(e) {
                    e.Blizzard = "blizzard", e.Twitch = "twitch", e.Insider = "insider"
                }(n || (n = {})),
                function(e) {
                    e.Hero = "hero", e.Team = "team", e.Insider = "insider", e.Cheerbomb = "cheerbomb"
                }(r || (r = {})),
                function(e) {
                    e.HeroSkin = "hero-skin", e.InGameContent = "in-game-content", e.SubEmote = "emote", e.Badge = "badge", e.Bits = "bits"
                }(i || (i = {}))
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
        "0/kz": function(e, t, a) {},
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
            var r = {};
            n.definitions = n.definitions.concat(function(e) {
                return e.filter(function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var t = e.name.value;
                    return !r[t] && (r[t] = !0, !0)
                })
            }(a("fhkr").definitions)), e.exports = n
        },
        "3hlQ": function(e, t, a) {},
        "44In": function(e, t, a) {},
        "6mxx": function(e, t, a) {},
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
            var r = {};
            n.definitions = n.definitions.concat(function(e) {
                return e.filter(function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var t = e.name.value;
                    return !r[t] && (r[t] = !0, !0)
                })
            }(a("VK0B").definitions)), e.exports = n
        },
        "81Gi": function(e, t, a) {
            "use strict";
            var n = a("q1tI"),
                r = (a("bt+X"), function() {
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
                return r
            })
        },
        "9Kf6": function(e, t, a) {},
        APPd: function(e, t, a) {
            "use strict";
            var n = a("/MKj"),
                r = a("kRBY"),
                i = a("mrSG"),
                s = a("q1tI"),
                o = a("/7QA"),
                l = a("eJ65"),
                d = a("yR8l"),
                c = a("SDEh"),
                p = a("edgk"),
                m = a("b6Yk"),
                u = a("5zXJ"),
                h = a("Ue10"),
                g = a("RNrf"),
                b = (a("IEPL"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.blizzardUnlink = function() {
                            return i.__awaiter(t, void 0, void 0, function() {
                                return i.__generator(this, function(e) {
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
                                var a = e.currentTarget.getAttribute("data-region"),
                                    n = window.innerWidth ? window.innerWidth : document.documentElement && document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width,
                                    r = window.innerHeight ? window.innerHeight : document.documentElement && document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height,
                                    i = n / 2 - 262.5 + window.screenLeft,
                                    s = r / 2 - 277.5 + window.screenTop,
                                    o = window.open("https://api.twitch.tv/v5/blizzard/" + t.props.user.id + "/auth?region=" + a, "blizzardConnectionWindow", "height=555,width=525,top=" + s + ",left=" + i + ",chrome=no");
                                if (!o || Object(c.a)()) return void(t.props.onOpenBlizzardConnect && t.props.onOpenBlizzardConnect(t.props.user.id, a, function() {
                                    t.props.data.refetch()
                                }));
                                o.focus(), Object(p.a)(o, function(e) {
                                    t.props.data && t.props.data.refetch && t.props.data.refetch()
                                })
                            }
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        return s.createElement(h.Xa, {
                            className: "blizzard-account-link"
                        }, this.props.data && this.props.data.loading && s.createElement(h.z, {
                            type: h.F.Hollow,
                            size: h.D.Default
                        }, s.createElement(h.Za, null)), this.props.data && !this.props.data.loading && this.props.data.error && s.createElement(h.z, {
                            "data-test-selector": "blizzard_account_link_component_error",
                            type: h.F.Hollow,
                            size: h.D.Default
                        }, s.createElement(h.sb, {
                            asset: h.tb.DeadGlitch
                        })), this.props.data && this.props.data.currentUser && !this.props.data.currentUser.blizzardAccount && s.createElement(l.a, null, s.createElement(h.z, {
                            type: h.F.Hollow,
                            "data-test-selector": "blizzard_account_link_component_unlinked",
                            dropdown: !0,
                            size: h.D.Default
                        }, Object(o.d)("Link your Blizzard Account", "CampaignsBlizzardAccountLink")), s.createElement(h.u, {
                            direction: h.v.BottomRight,
                            size: h.w.Small,
                            noTail: !0
                        }, s.createElement(h.Xa, {
                            padding: .5
                        }, s.createElement(h.Ua, {
                            onClick: this.blizzardLink,
                            "data-region": "us"
                        }, Object(o.d)("North America (US)", "CampaignsBlizzardAccountLink")), s.createElement(h.Ua, {
                            onClick: this.blizzardLink,
                            "data-region": "eu"
                        }, Object(o.d)("Europe (EU)", "CampaignsBlizzardAccountLink")), s.createElement(h.Ua, {
                            onClick: this.blizzardLink,
                            "data-region": "kr"
                        }, Object(o.d)("Korea (KR)", "CampaignsBlizzardAccountLink")), s.createElement(h.Ua, {
                            onClick: this.blizzardLink,
                            "data-region": "tw"
                        }, Object(o.d)("Taiwan (TW)", "CampaignsBlizzardAccountLink")), s.createElement(h.Ua, {
                            onClick: this.blizzardLink,
                            "data-region": "cn"
                        }, Object(o.d)("China (CN)", "CampaignsBlizzardAccountLink")), s.createElement(h.Ua, {
                            onClick: this.blizzardLink,
                            "data-region": "sea"
                        }, Object(o.d)("South East Asia (SEA)", "CampaignsBlizzardAccountLink"))))), this.props.data && this.props.data.currentUser && this.props.data.currentUser.blizzardAccount && s.createElement(h.Yb, {
                            label: this.props.data.currentUser.blizzardAccount.battleTag
                        }, s.createElement(l.a, null, s.createElement(h.z, {
                            type: h.F.Hollow,
                            size: h.D.Default,
                            "data-test-selector": "blizzard_account_link_component_linked"
                        }, s.createElement(h.Xa, {
                            display: h.X.Flex,
                            flexDirection: h.Aa.Row,
                            alignItems: h.f.Center
                        }, s.createElement(h.sb, {
                            asset: h.tb.Check,
                            type: h.ub.Success
                        }), s.createElement(h.Pa, {
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
                        }, s.createElement(h.Xa, {
                            padding: .5
                        }, s.createElement(h.Ua, {
                            onClick: this.blizzardUnlink,
                            "data-test-selector": "blizzard_account_link_component_unlink_account"
                        }, Object(o.d)("Unlink Blizzard Account", "CampaignsBlizzardAccountLink")))))))
                    }, t = i.__decorate([Object(d.a)(g)], t)
                }(s.Component));
            var f = Object(n.connect)(function(e) {
                return {
                    user: Object(r.e)(e)
                }
            })(b);
            a.d(t, "a", function() {
                return f
            })
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
            var r = {};
            n.definitions = n.definitions.concat(function(e) {
                return e.filter(function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var t = e.name.value;
                    return !r[t] && (r[t] = !0, !0)
                })
            }(a("VK0B").definitions)), e.exports = n
        },
        F30f: function(e, t, a) {},
        G30c: function(e, t, a) {
            "use strict";
            var n = a("mrSG"),
                r = a("q1tI"),
                i = a("oJmH"),
                s = a("/7QA"),
                o = a("yR8l"),
                l = a("eDVu"),
                d = a("+LJB"),
                c = a("i4ay"),
                p = a("Ue10"),
                m = a("12i0"),
                u = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return n.__extends(t, e), t.prototype.render = function() {
                        var e = this.props.data,
                            t = e.user && e.user.tournament && e.user.tournament.teamLeaderboard;
                        return e.loading && !t ? r.createElement(p.Za, {
                            fillContent: !0
                        }) : !t || e.error ? r.createElement(p.Xa, {
                            fullHeight: !0,
                            fullWidth: !0,
                            textAlign: p.Rb.Center,
                            padding: {
                                top: 4
                            }
                        }, r.createElement(p.sb, {
                            asset: p.tb.DeadGlitch,
                            fill: !0,
                            width: 50,
                            height: 50
                        })) : r.createElement(p.Eb, {
                            display: p.X.Flex,
                            flexDirection: p.Aa.Column,
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
                        }, r.createElement(p.Xa, {
                            padding: {
                                bottom: 2
                            }
                        }, r.createElement(p.W, {
                            type: p.Vb.H3
                        }, Object(s.d)("Team Leaderboards", "CampaignsProgressTab"))), r.createElement(c.a, {
                            leaderboardRows: t.items.edges,
                            pageSize: 10,
                            channelID: this.props.channelID,
                            isTeam: !0,
                            domain: this.props.domain,
                            hideLocale: this.props.hideLocale
                        }))
                    }, t
                }(r.Component),
                h = Object(i.compose)(Object(o.a)(m, {
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
            a.d(t, !1, function() {
                return u
            }), a.d(t, "a", function() {
                return h
            })
        },
        GIGq: function(e, t, a) {
            "use strict";
            a.r(t);
            var n, r = a("/MKj"),
                i = a("kRBY"),
                s = a("mrSG"),
                o = a("q1tI"),
                l = a("/7QA"),
                d = a("yR8l"),
                c = a("WlPE"),
                p = a("YkUe"),
                m = a("Sk0q"),
                u = a("Ue10"),
                h = a("xjjM"),
                g = (a("ko4C"), function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return s.__extends(t, e), t.prototype.render = function() {
                        var e = this;
                        if (!this.props.data || this.props.data.loading) return o.createElement(u.Za, null);
                        if (this.props.data && this.props.data.error) return null;
                        if (!this.props.data.user || !this.props.data.user.subscriptionProducts || this.props.data.user.subscriptionProducts.length < 1 || !this.props.data.user.tournament) return null;
                        var t = this.props.data.user.subscriptionProducts[0],
                            a = Object(m.b)(t, !0).map(function(t) {
                                return o.createElement(u.Pa, {
                                    className: "insider-pass-emote-and-badge-rewards__item",
                                    "data-test-selector": "insider-pass-emote-reward",
                                    key: t.name
                                }, o.createElement("li", null, o.createElement(u.Xa, {
                                    display: u.X.Flex,
                                    flexDirection: u.Aa.Column,
                                    alignItems: u.f.Center,
                                    padding: {
                                        bottom: e.props.insiderPurchaseState === p.a.PrePurchase ? 4 : 2
                                    }
                                }, o.createElement(c.a, {
                                    imageURL: t.imageURL,
                                    size: c.c.Default,
                                    noBorder: !0
                                }), e.props.insiderPurchaseState === p.a.PostPurchase && o.createElement(u.Xa, {
                                    textAlign: u.Rb.Center,
                                    padding: {
                                        top: .5,
                                        bottom: 1
                                    }
                                }, o.createElement(u.W, {
                                    noWrap: !0,
                                    bold: !0
                                }, t.name)))))
                            }),
                            n = this.props.data.user.broadcastBadges ? this.props.data.user.broadcastBadges.reduce(function(e, t) {
                                var a = Object(m.a)(t, !1);
                                return t && "subscriber" !== t.setID && a && e.push(a), e
                            }, []) : [],
                            r = (this.props.data.user.tournament.rewards ? this.props.data.user.tournament.rewards.insider.badges.concat(n) : []).map(function(t) {
                                return o.createElement(u.Pa, {
                                    className: "insider-pass-emote-and-badge-rewards__item",
                                    "data-test-selector": "insider-pass-badge-reward",
                                    key: t.name
                                }, o.createElement("li", null, o.createElement(u.Xa, {
                                    display: u.X.Flex,
                                    flexDirection: u.Aa.Column,
                                    alignItems: u.f.Center
                                }, o.createElement(c.a, {
                                    imageURL: t.imageURL,
                                    size: c.c.Default,
                                    noBorder: !0
                                }), e.props.insiderPurchaseState === p.a.PostPurchase && o.createElement(u.Xa, {
                                    textAlign: u.Rb.Center,
                                    padding: {
                                        top: .5,
                                        bottom: 1
                                    }
                                }, o.createElement(u.W, {
                                    bold: !0
                                }, t.name)))))
                            });
                        return o.createElement(u.Xa, {
                            className: "insider-pass-emote-and-badge-rewards",
                            display: u.X.Flex,
                            flexDirection: u.Aa.Column
                        }, o.createElement(u.Xa, {
                            padding: {
                                bottom: 4
                            }
                        }, o.createElement(u.Xa, {
                            textAlign: u.Rb.Center,
                            padding: {
                                bottom: 2
                            }
                        }, o.createElement(u.W, {
                            fontSize: u.Ca.Size3,
                            color: u.O.Link,
                            bold: !0
                        }, Object(l.d)("Global Overwatch League Twitch Emotes", "CampaignsInsiderPassEmoteAndBadgeRewards"))), o.createElement(u.Pa, {
                            textAlign: u.Rb.Center,
                            display: u.X.Flex,
                            flexWrap: u.Ba.Wrap,
                            flexDirection: u.Aa.Row,
                            justifyContent: u.Wa.Center,
                            alignItems: u.f.Baseline
                        }, o.createElement("ul", null, a))), o.createElement(u.Xa, null, o.createElement(u.Xa, {
                            textAlign: u.Rb.Center
                        }, o.createElement(u.W, {
                            fontSize: u.Ca.Size3,
                            color: u.O.Link,
                            bold: !0
                        }, Object(l.d)("Global Overwatch League Twitch Badges", "CampaignsInsiderPassEmoteAndBadgeRewards"))), o.createElement(u.Pa, {
                            display: u.X.Flex,
                            flexDirection: u.Aa.Row,
                            flexWrap: u.Ba.Wrap,
                            justifyContent: u.Wa.Center,
                            padding: {
                                y: 2
                            }
                        }, o.createElement("ul", null, r))))
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
                    return o.createElement(u.Eb, {
                        borderTop: !0,
                        className: "insider-pass-footer",
                        textAlign: u.Rb.Center,
                        padding: {
                            top: 5
                        }
                    }, o.createElement(u.W, null, Object(l.d)("All-Access benefits last up to the start of the 2019 Overwatch League Season.", "CampaignsInsiderPassFooter")), o.createElement(u.W, null, Object(l.d)("Twitch emotes, badges, and in-game content are yours to keep forever.", "CampaignsInsiderPassFooter")))
                },
                f = a("uLiP"),
                k = a("5zXJ"),
                v = a("TSYQ");
            a("yImC");
            ! function(e) {
                e.Major = "major", e.Minor = "minor"
            }(n || (n = {}));
            var E, y = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return s.__extends(t, e), t.prototype.render = function() {
                        var e = v({
                                "insider-pass-marketing-item__major": this.props.type === n.Major
                            }, {
                                "insider-pass-marketing-item__minor": this.props.type === n.Minor
                            }),
                            t = {
                                padding: {}
                            };
                        this.props.type === n.Minor && (t.padding = {
                            left: 2
                        });
                        var a = this.props.type === n.Major ? "auto" : void 0,
                            r = this.props.type === n.Major ? "auto" : void 0,
                            i = this.props.type === n.Major ? u.Aa.Column : u.Aa.Row;
                        return o.createElement(u.Xa, {
                            className: "insider-pass-marketing-item",
                            display: u.X.Flex,
                            flexDirection: u.Aa.Column,
                            breakpointExtraSmall: {
                                flexDirection: i
                            }
                        }, o.createElement(u.Xa, {
                            "data-test-selector": "insider-marketing-item-image",
                            margin: a
                        }, o.createElement("img", {
                            className: e,
                            src: this.props.imageURL
                        })), o.createElement(u.Xa, s.__assign({
                            "data-test-selector": "insider-marketing-item-content",
                            className: this.props.type === n.Major ? e : void 0,
                            display: u.X.Flex,
                            flexDirection: u.Aa.Column,
                            margin: r
                        }, t), o.createElement(u.Xa, {
                            padding: {
                                top: 1
                            }
                        }, o.createElement(u.W, {
                            fontSize: u.Ca.Size4,
                            bold: !0
                        }, this.props.title)), o.createElement(u.Xa, {
                            padding: {
                                top: 1
                            }
                        }, o.createElement(u.W, {
                            "data-test-selector": "insider-marketing-item-content-text",
                            fontSize: this.props.type === n.Major ? u.Ca.Size5 : u.Ca.Size6
                        }, this.props.body))))
                    }, t
                }(o.PureComponent),
                w = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return s.__extends(t, e), t.prototype.render = function() {
                        return o.createElement(u.Xa, {
                            className: "insider-pass-post-purchase-marketing-callouts"
                        }, o.createElement(u.Xa, {
                            textAlign: u.Rb.Center,
                            padding: {
                                bottom: 2
                            }
                        }, o.createElement(u.W, {
                            fontSize: u.Ca.Size3,
                            color: u.O.Link,
                            bold: !0
                        }, Object(l.d)("How to Use Your All-Access Experience", "CampaignsInsiderPassPostPurchaseMarketingCallouts"))), o.createElement(u.Xa, {
                            padding: {
                                y: 0
                            },
                            breakpointLarge: {
                                padding: {
                                    y: 2
                                }
                            }
                        }, o.createElement(u.Ja, {
                            gutterSize: u.Ka.Large
                        }, o.createElement(u.P, {
                            cols: {
                                default: 12,
                                lg: 6
                            }
                        }, o.createElement(u.Xa, {
                            padding: {
                                bottom: 2
                            },
                            breakpointLarge: {
                                padding: 0
                            }
                        }, o.createElement(y, {
                            type: n.Minor,
                            title: Object(l.d)("Switch to Passholder-Only Chat", "CampaignsInsiderPassPostPurchaseMarketingCallouts"),
                            body: Object(l.d)('Click on the "Rooms" icon in the upper right corner of chat. Select "all-access" from the drop-down menu.', "CampaignsInsiderPassPostPurchaseMarketingCallouts"),
                            imageURL: k.c + "/owl-2017/marketing/insider-post-purchase-rooms.png"
                        }))), o.createElement(u.P, {
                            cols: {
                                default: 12,
                                lg: 6
                            }
                        }, o.createElement(u.Xa, {
                            padding: {
                                bottom: 2
                            },
                            breakpointLarge: {
                                padding: 0
                            }
                        }, o.createElement(y, {
                            type: n.Minor,
                            title: Object(l.d)("Submit a question for today's post-match Q&A", "CampaignsInsiderPassPostPurchaseMarketingCallouts"),
                            body: Object(l.d)('Click on the "Rooms" icon in the upper right corner of chat. Select "ama-for-[interviewee]" from the drop-down menu. Questions are limited to one per day, per Passholder.', "CampaignsInsiderPassPostPurchaseMarketingCallouts"),
                            imageURL: k.c + "/owl-2017/marketing/insider-post-purchase-q-and-a.png"
                        }))))), o.createElement(u.Xa, {
                            padding: {
                                y: 0
                            },
                            breakpointLarge: {
                                padding: {
                                    y: 2
                                }
                            }
                        }, o.createElement(u.Ja, {
                            gutterSize: u.Ka.Large
                        }, o.createElement(u.P, {
                            cols: {
                                default: 12,
                                lg: 6
                            }
                        }, o.createElement(u.Xa, {
                            padding: {
                                bottom: 2
                            },
                            breakpointLarge: {
                                padding: 0
                            }
                        }, o.createElement(y, {
                            type: n.Minor,
                            title: Object(l.d)("Launch your Command Center stream", "CampaignsInsiderPassPostPurchaseMarketingCallouts"),
                            body: Object(l.d)('Click on the button lableled "Switch to Command Center" on the right side of the page, below the stream.', "CampaignsInsiderPassPostPurchaseMarketingCallouts"),
                            imageURL: k.c + "/owl-2017/marketing/insider-post-purchase-command-center.png"
                        }))), o.createElement(u.P, {
                            cols: {
                                default: 12,
                                lg: 6
                            }
                        }, o.createElement(u.Xa, {
                            padding: {
                                bottom: 2
                            },
                            breakpointLarge: {
                                padding: 0
                            }
                        }, o.createElement(y, {
                            type: n.Minor,
                            title: Object(l.d)("Watch match analysis videos", "CampaignsInsiderPassPostPurchaseMarketingCallouts"),
                            body: Object(l.d)('Click on the "Videos" link in the menu just above the stream. On the Videos page, find a preview video in a carousel at the top of the page - Behind the Screens is coming soon!', "CampaignsInsiderPassPostPurchaseMarketingCallouts"),
                            imageURL: k.c + "/owl-2017/marketing/insider-post-purchase-vods.png"
                        }))))), o.createElement(u.Xa, {
                            padding: {
                                y: 0
                            },
                            breakpointLarge: {
                                padding: {
                                    y: 2
                                }
                            }
                        }, o.createElement(u.Ja, {
                            gutterSize: u.Ka.Large
                        }, o.createElement(u.P, {
                            cols: {
                                default: 12,
                                lg: 6
                            }
                        }, o.createElement(u.Xa, {
                            padding: {
                                bottom: 2
                            },
                            breakpointLarge: {
                                padding: 0
                            }
                        }, o.createElement(y, {
                            type: n.Minor,
                            title: Object(l.d)("Activate your OWL chat badge", "CampaignsInsiderPassPostPurchaseMarketingCallouts"),
                            body: Object(l.d)('Click on the gear icon at the bottom of chat below the text entry field, then click on the "Edit Appearance" link in the Name Display section near the top of the pop-up.', "CampaignsInsiderPassPostPurchaseMarketingCallouts"),
                            imageURL: k.c + "/owl-2017/marketing/insider-post-purchase-badge.png"
                        }))), o.createElement(u.P, {
                            cols: {
                                default: 12,
                                lg: 6
                            }
                        }, o.createElement(u.Xa, {
                            padding: {
                                bottom: 2
                            },
                            breakpointLarge: {
                                padding: 0
                            }
                        }, o.createElement(y, {
                            type: n.Minor,
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
                        return o.createElement(u.Xa, {
                            className: "insider-pass-post-purchase"
                        }, o.createElement(u.Eb, {
                            borderBottom: !0,
                            margin: {
                                top: 2
                            }
                        }, o.createElement(f.b, {
                            channelID: this.props.channelID,
                            insiderPurchaseState: p.a.PostPurchase,
                            blizzardRewardsAvailable: this.props.blizzardRewardsAvailable
                        })), o.createElement(u.Eb, {
                            borderBottom: !0,
                            padding: {
                                top: 4,
                                bottom: 3
                            }
                        }, o.createElement(w, null)), o.createElement(u.Xa, {
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
                S = a("4rCz");
            a("R4QF");
            ! function(e) {
                e.Root = "insider-pass-purchase-banner-root", e.BitsPromotion = "insider-pass-purchase-banner-bits-promotion", e.PrimePromotion = "insider-pass-purchase-banner-prime-promotion"
            }(E || (E = {}));
            var P, x = "insider-pass-purchase-banner",
                I = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return s.__extends(t, e), t.prototype.render = function() {
                        var e = Object(S.d)("Get the All-Access Pass", "CampaignsTabs"),
                            t = v(x, this.props.className);
                        return o.createElement(u.Eb, {
                            "data-test-selector": E.Root,
                            border: !0,
                            borderRadius: u.x.Large,
                            className: t,
                            overflow: u.cb.Hidden
                        }, o.createElement(u.Eb, {
                            color: u.O.Overlay,
                            background: u.r.Accent,
                            textAlign: u.Rb.Center,
                            padding: .5
                        }, o.createElement(u.W, {
                            fontSize: u.Ca.Size4
                        }, Object(S.d)("All-Access Pass", "CampaignsTabs"))), o.createElement(u.Eb, {
                            display: u.X.Flex,
                            flexDirection: u.Aa.Column,
                            justifyContent: u.Wa.Center,
                            alignItems: u.f.Center,
                            breakpointMedium: {
                                flexDirection: u.Aa.Row
                            },
                            borderBottom: this.props.bitsPromoIsActive,
                            padding: 1
                        }, o.createElement(u.Eb, {
                            fullHeight: !0,
                            display: u.X.Flex,
                            alignItems: u.f.Center,
                            justifyContent: u.Wa.Center,
                            margin: {
                                x: 3,
                                bottom: 3,
                                top: 2
                            }
                        }, o.createElement(u.S, {
                            className: x + "__logo",
                            src: k.c + "/owl-2017/all-access-logo.svg",
                            alt: Object(S.d)("Overwatch League All-Access Pass on Twitch", "CampaignsTabs")
                        })), o.createElement(u.Xa, {
                            className: x + "__body-text",
                            margin: 1,
                            justifyContent: u.Wa.Center
                        }, o.createElement(u.Pa, {
                            margin: {
                                bottom: .5
                            }
                        }, o.createElement(u.W, {
                            bold: !0,
                            color: u.O.Base,
                            fontSize: u.Ca.Size4
                        }, Object(S.d)("Your VIP pass to the best of the Overwatch League.", "CampaignsTabs"))), o.createElement(u.W, {
                            color: u.O.Base,
                            fontSize: u.Ca.Size6
                        }, Object(S.d)("The season may be over, but the battle goes on. Enjoy the off-season with the All-Access Pass for 2018 – only {price}.", {
                            price: this.props.passPrice
                        }, "CampaignsTabs")), o.createElement(u.Xa, {
                            margin: {
                                top: 2,
                                bottom: 1
                            },
                            textAlign: u.Rb.Left
                        }, o.createElement(u.z, {
                            targetBlank: !0,
                            ariaLabel: e + " " + this.props.passPrice,
                            linkTo: this.props.purchaseUrl,
                            purchase: this.props.passPrice
                        }, e)))), this.props.bitsPromoIsActive && o.createElement(u.Eb, {
                            "data-test-selector": E.BitsPromotion,
                            display: u.X.Flex,
                            justifyContent: u.Wa.Center,
                            alignItems: u.f.Center,
                            padding: 2
                        }, o.createElement(u.Xa, {
                            className: x + "__bits-image-wrapper",
                            margin: {
                                right: 1
                            }
                        }, o.createElement(u.S, {
                            className: x + "__bits-image",
                            src: k.a + "/cheer/light/static/100/3.png",
                            alt: ""
                        })), o.createElement(u.Xa, null, o.createElement(u.W, {
                            bold: !0,
                            fontSize: u.Ca.Size5
                        }, Object(S.d)("Buy now and get 500 Bits as a bonus reward on purchase, only with Twitch Prime.", "CampaignsTabs")), o.createElement(u.W, {
                            color: u.O.Alt2
                        }, Object(S.d)("Offer available for a limited time. Terms and conditions apply.", "CampaignsTabs")))))
                    }, t
                }(o.Component),
                N = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return s.__extends(t, e), t.prototype.render = function() {
                        return o.createElement(u.Xa, {
                            display: u.X.Flex,
                            flexDirection: u.Aa.Column,
                            padding: {
                                top: 2,
                                bottom: 4
                            }
                        }, o.createElement(u.Xa, {
                            textAlign: u.Rb.Center,
                            padding: {
                                bottom: 2
                            }
                        }, o.createElement(u.W, {
                            fontSize: u.Ca.Size3,
                            color: u.O.Link,
                            bold: !0
                        }, Object(l.d)("The Overwatch League All-Access Experience", "CampaignsInsiderPassTab"))), o.createElement(u.Xa, {
                            display: u.X.Flex,
                            flexDirection: u.Aa.Column,
                            breakpointSmall: {
                                flexDirection: u.Aa.Row
                            },
                            justifyContent: u.Wa.Center
                        }, o.createElement(u.Xa, {
                            margin: {
                                x: 2
                            },
                            padding: {
                                bottom: 2
                            },
                            breakpointSmall: {
                                padding: 0
                            }
                        }, o.createElement(y, {
                            type: n.Major,
                            title: Object(l.d)("Exclusive Command Center livestream", "CampaignsInsiderPassTab"),
                            body: Object(l.d)("This game-changing stream shows you alternate camera angles, live stats, player POVs, and team facecams all on one multiviewer overlay. Try it for free until Stage 4.", "CampaignsInsiderPassTab"),
                            imageURL: k.c + "/owl-2017/marketing/insider-stream.jpg"
                        })), o.createElement(u.Xa, {
                            margin: {
                                x: 2
                            },
                            padding: {
                                bottom: 2
                            },
                            breakpointSmall: {
                                padding: 0
                            }
                        }, o.createElement(y, {
                            type: n.Major,
                            title: Object(l.d)("Your questions, answered!", "CampaignsInsiderPassTab"),
                            body: Object(l.d)("After Overwatch League match day broadcasts, enjoy an interactive player Q&A session by submitting your questions in Passholder-only chat. Selected questions will be answered by players live on the Command Center stream.", "CampaignsInsiderPassTab"),
                            imageURL: k.c + "/owl-2017/marketing/insider-questions.jpg"
                        })), o.createElement(u.Xa, {
                            margin: {
                                x: 2
                            }
                        }, o.createElement(y, {
                            type: n.Major,
                            title: Object(l.d)("Behind the Screens: Match analysis by players", "CampaignsInsiderPassTab"),
                            body: Object(l.d)("Top players from each team will walk you through their thoughts on a match and explain what they did and why in an exclusive video every week, starting April 6th!", "CampaignsInsiderPassTab"),
                            imageURL: k.c + "/owl-2017/marketing/insider-vods.jpg"
                        }))))
                    }, t
                }(o.PureComponent),
                R = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return s.__extends(t, e), t.prototype.render = function() {
                        return o.createElement(u.Ja, {
                            gutterSize: u.Ka.Large
                        }, o.createElement(u.P, {
                            cols: {
                                default: 12,
                                lg: 6
                            }
                        }, o.createElement(u.Xa, {
                            padding: {
                                bottom: 2
                            },
                            breakpointLarge: {
                                padding: 0
                            }
                        }, o.createElement(y, {
                            type: n.Minor,
                            title: Object(l.d)("Passholder-Only Chat", "CampaignsInsiderPassMarketingMinorCallouts"),
                            body: Object(l.d)("Hang out and chat with people who love the game as much as you do.", "CampaignsInsiderPassMarketingMinorCallouts"),
                            imageURL: k.c + "/owl-2017/marketing/insider-pre-purchase-chat.png"
                        }))), o.createElement(u.P, {
                            cols: {
                                default: 12,
                                lg: 6
                            }
                        }, o.createElement(u.Xa, {
                            padding: {
                                bottom: 2
                            },
                            breakpointLarge: {
                                padding: 0
                            }
                        }, o.createElement(y, {
                            type: n.Minor,
                            title: Object(l.d)("Ad-free viewing on Overwatch League", "CampaignsInsiderPassMarketingMinorCallouts"),
                            body: Object(l.d)("With the All-Access Pass you won’t have to sit through Twitch ads before you can watch the game.", "CampaignsInsiderPassMarketingMinorCallouts"),
                            imageURL: k.c + "/owl-2017/marketing/insider-pre-purchase-ads.png"
                        }))))
                    }, t
                }(o.PureComponent),
                z = (a("9Kf6"), function(e) {
                    function t(t) {
                        var a = e.call(this, t) || this;
                        return a.onPlayPause = function() {
                            a.videoRef && (a.state.playing ? a.videoRef.pause() : a.videoRef.play(), a.setState({
                                playing: !a.state.playing
                            }))
                        }, a.onMuteMax = function() {
                            a.videoRef && (a.state.muted ? a.videoRef.muted = !1 : a.videoRef.muted = !0, a.setState({
                                muted: !a.state.muted
                            }))
                        }, a.setRef = function(e) {
                            a.videoRef = e
                        }, a.handleMouseEnter = function() {
                            a.setState({
                                hovering: !0
                            }), a.setState({
                                shouldFade: a.state.playing
                            })
                        }, a.handleMouseLeave = function() {
                            a.setState({
                                hovering: !1
                            }), a.setState({
                                shouldFade: a.state.playing
                            })
                        }, a.state = {
                            playing: !1,
                            muted: !1,
                            hovering: !1,
                            shouldFade: !1
                        }, a
                    }
                    return s.__extends(t, e), t.prototype.render = function() {
                        return o.createElement("div", {
                            onMouseEnter: this.handleMouseEnter,
                            onMouseLeave: this.handleMouseLeave
                        }, o.createElement(u.Xa, {
                            position: u.jb.Relative,
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
                        }, o.createElement(u.Xa, {
                            position: u.jb.Absolute,
                            attachTop: !0,
                            attachLeft: !0,
                            fullWidth: !0,
                            fullHeight: !0,
                            display: u.X.Flex,
                            alignItems: u.f.Center,
                            justifyContent: u.Wa.Center
                        }, o.createElement("button", {
                            className: "callout-video__controls playpause-button",
                            onClick: this.onPlayPause
                        }, !this.state.playing && o.createElement(u.Xa, {
                            className: "playpause-button__playicon"
                        }, " ", o.createElement(u.sb, {
                            asset: u.tb.MiniPlayerPlay,
                            width: 35,
                            height: 35
                        }), " "), this.state.playing && o.createElement(u.sb, {
                            asset: u.tb.MiniPlayerPause,
                            width: 35,
                            height: 35
                        }))), o.createElement(u.Xa, {
                            position: u.jb.Absolute,
                            attachBottom: !0,
                            attachRight: !0,
                            padding: {
                                right: 1,
                                bottom: 1
                            }
                        }, o.createElement("button", {
                            className: "callout-video__controls",
                            onClick: this.onMuteMax
                        }, o.createElement(u.sb, {
                            asset: this.state.muted ? u.tb.VolumeMuted : u.tb.VolumeMax
                        }))))))
                    }, t
                }(o.PureComponent));
            a("RkfI");
            ! function(e) {
                e.MarketingSpecialCalloutInfo = "marketing-special-callout-info", e.MarketingSpecialCalloutDesc = "margeting-special-callout-desc"
            }(P || (P = {}));
            var _ = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return s.__extends(t, e), t.prototype.render = function() {
                        return o.createElement(u.Ja, null, o.createElement(u.P, {
                            cols: {
                                default: 10,
                                xl: 6
                            },
                            offset: {
                                default: 1,
                                xl: 0
                            }
                        }, o.createElement(u.Xa, {
                            "data-test-selector": P.MarketingSpecialCalloutInfo,
                            justifyContent: u.Wa.Center,
                            alignItems: u.f.Center,
                            padding: {
                                top: 3,
                                bottom: 3,
                                left: 2,
                                right: 2
                            }
                        }, this.props.isJustAdded && o.createElement(u.Eb, {
                            display: u.X.Flex,
                            alignItems: u.f.Center,
                            position: u.jb.Relative,
                            className: "marketing-special-callout__just-added-banner",
                            padding: {
                                left: 1
                            }
                        }, o.createElement(u.W, {
                            bold: !0,
                            fontSize: u.Ca.Size5
                        }, Object(l.d)("JUST ADDED!", "DJLucioCallout"))), o.createElement(u.Xa, {
                            padding: {
                                top: this.props.isJustAdded ? 1 : 4
                            }
                        }, this.props.title), this.props.description && o.createElement(u.Xa, {
                            padding: {
                                top: 2
                            },
                            "data-test-selector": P.MarketingSpecialCalloutDesc
                        }, o.createElement(u.W, {
                            fontSize: u.Ca.Size5
                        }, this.props.description)))), o.createElement(u.P, {
                            cols: {
                                default: 10,
                                xl: 6
                            },
                            offset: {
                                default: 1,
                                xl: 0
                            }
                        }, o.createElement(u.Xa, {
                            padding: {
                                top: 3,
                                bottom: 3,
                                left: 2,
                                right: 2
                            }
                        }, this.props.videoURL && o.createElement(z, {
                            posterURL: this.props.posterURL,
                            videoURL: this.props.videoURL
                        }), !this.props.videoURL && o.createElement(u.Xa, {
                            className: "marketing-special-callout__image",
                            position: u.jb.Relative,
                            display: u.X.Flex
                        }, o.createElement(u.S, {
                            src: this.props.posterURL,
                            alt: this.props.contentAlt
                        })))))
                    }, t
                }(o.PureComponent),
                T = a("NAv5"),
                A = a("HGFl"),
                O = "esport_insider_allstars_launch",
                j = "2018-08-24T16:00:00Z";
            var D, L = a("W8Fi");
            a("T9jf");
            (D || (D = {})).PrimePromoBanner = "insider-pass-pre-purchase-prime-promo-banner";
            var F = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return s.__extends(t, e), t.prototype.render = function() {
                        var e = Object(L.g)(this.props.subscriptionProducts) ? Object(L.c)(this.props.subscriptionProducts[0]) : this.props.subscriptionProducts[0].price,
                            t = function(e, t) {
                                var a = S.b.get(O, j),
                                    n = Object(A.c)(a),
                                    r = Object(T.isEqual)(e, n) || Object(T.isAfter)(e, n),
                                    i = t && t.roles && t.roles.isStaff || !1;
                                return r || i
                            }(new Date(Date.now()), this.props.user);
                        return o.createElement(u.Xa, {
                            className: "insider-pass-pre-purchase"
                        }, o.createElement(u.Qa, {
                            margin: {
                                bottom: 3,
                                top: 2
                            }
                        }, o.createElement(I, {
                            passPrice: e,
                            purchaseUrl: this.props.subscriptionProducts[0].url || ""
                        })), o.createElement(u.Eb, {
                            borderBottom: !0,
                            padding: {
                                bottom: 2
                            },
                            margin: {
                                y: 2
                            }
                        }, o.createElement(u.Xa, {
                            textAlign: u.Rb.Center
                        }, o.createElement(u.W, {
                            bold: !0,
                            fontSize: u.Ca.Size2,
                            color: u.O.Link,
                            lineHeight: u.Ya.Heading
                        }, Object(S.d)("What you get with the All-Access Pass:", "CampaignsTabs"))), o.createElement(u.Ja, null, o.createElement(u.P, {
                            cols: {
                                default: 6,
                                md: 3
                            }
                        }, o.createElement(u.Xa, {
                            className: "insider-pass-pre-purchase__feature-box"
                        }, o.createElement(u.S, {
                            src: k.c + "/owl-2017/marketing/insider-feature-boxes/1-IGC.png",
                            alt: Object(S.d)("15 Skins and additional In-Game Items", "CampaignsTabs")
                        }), o.createElement(u.Xa, {
                            padding: {
                                y: 1
                            }
                        }, Object(S.d)("<x:header>15</x:header> <x:subheader>Skins</x:subheader> <x:body>And additional In-Game Items</x:body>", {
                            "x:header": X,
                            "x:subheader": M,
                            "x:body": B
                        }, "CampaignsTabs")))), o.createElement(u.P, {
                            cols: {
                                default: 6,
                                md: 3
                            }
                        }, o.createElement(u.Xa, {
                            className: "insider-pass-pre-purchase__feature-box"
                        }, o.createElement(u.S, {
                            src: k.c + "/owl-2017/marketing/insider-feature-boxes/2-Emotes.png",
                            alt: Object(S.d)("Twitch emotes & chat badges", "CampaignsTabs")
                        }), o.createElement(u.Xa, {
                            padding: {
                                y: 1
                            }
                        }, Object(S.d)("<x:header>25</x:header> <x:subheader>Emotes</x:subheader> <x:body>Twitch emotes & chat badges</x:body>", {
                            "x:header": X,
                            "x:subheader": M,
                            "x:body": B
                        }, "CampaignsTabs")))), o.createElement(u.P, {
                            cols: {
                                default: 6,
                                md: 3
                            }
                        }, o.createElement(u.Xa, {
                            className: "insider-pass-pre-purchase__feature-box"
                        }, o.createElement(u.S, {
                            src: k.c + "/owl-2017/marketing/insider-feature-boxes/3-chat-slice.png",
                            alt: Object(S.d)("An exclusive chat room for passholders", "CampaignsTabs")
                        }), o.createElement(u.Xa, {
                            padding: {
                                y: 1
                            }
                        }, Object(S.d)("<x:header>1</x:header> <x:subheader>Chatroom</x:subheader> <x:body>An exclusive chat room for pass holders</x:body>", {
                            "x:header": X,
                            "x:subheader": M,
                            "x:body": B
                        }, "CampaignsTabs")))), o.createElement(u.P, {
                            cols: {
                                default: 6,
                                md: 3
                            }
                        }, o.createElement(u.Xa, {
                            className: "insider-pass-pre-purchase__feature-box"
                        }, o.createElement(u.S, {
                            src: k.c + "/owl-2017/marketing/insider-feature-boxes/4-QandA.png",
                            alt: Object(S.d)("Exclusive Player Q&A, Inside the League, Behind the Screens and more!", "CampaignsTabs")
                        }), o.createElement(u.Xa, {
                            padding: {
                                y: 1
                            }
                        }, Object(S.d)("<x:header>Tons</x:header> <x:subheader>Of videos</x:subheader> <x:body>Exclusive Player Q&A, Inside the League, Behind the Screens and more!</x:body>", {
                            "x:header": X,
                            "x:subheader": M,
                            "x:body": B
                        }, "CampaignsTabs")))))), t && o.createElement(u.Eb, {
                            borderBottom: !0
                        }, o.createElement(_, {
                            posterURL: k.c + "/owl-2017/insider-test/owl-igc-allstars-pack.png",
                            title: Object(S.d)("<x:header>PLAY LIKE AN ALL STAR</x:header>", {
                                "x:header": W
                            }, "CampaignsTabs"),
                            description: Object(S.d)("All-Star Weekend hero skins for Mercy, Brigitte, Moira, Reinhardt, D.Va, and Tracer", "CampaignsTabs"),
                            contentAlt: Object(S.d)("Play like an all star", "CampaignsTabs"),
                            isJustAdded: !0
                        })), o.createElement(u.Eb, {
                            borderBottom: !0
                        }, o.createElement(_, {
                            posterURL: k.c + "/owl-2017/insider-test/lucio-emote-static.png",
                            videoURL: k.c + "/owl-2017/insider-test/djlucio-emote-video.mp4",
                            title: Object(S.d)("<x:header>PUMP UP THE VOLUME</x:header> <x:body>with the new Lucio DJ emote</x:body>", {
                                "x:header": W,
                                "x:body": U
                            }, "DJLucioCallout"),
                            contentAlt: Object(S.d)("Pump up the volume", "CampaignsTabs"),
                            isJustAdded: !t
                        })), o.createElement(u.Eb, {
                            borderBottom: !0
                        }, o.createElement(f.b, {
                            channelID: this.props.channelID,
                            insiderPurchaseState: p.a.PrePurchase
                        })), o.createElement(u.Eb, {
                            padding: {
                                bottom: 2
                            },
                            borderBottom: !0
                        }, o.createElement(N, null)), o.createElement(u.Xa, {
                            className: "insider-pass-pre-purchase__marketing",
                            padding: {
                                y: 3
                            }
                        }, o.createElement(u.Eb, {
                            borderBottom: !0,
                            padding: {
                                y: 2
                            }
                        }, o.createElement(g, {
                            channelID: this.props.channelID,
                            insiderPurchaseState: p.a.PrePurchase
                        })), o.createElement(u.Xa, {
                            padding: {
                                top: 2
                            }
                        }, o.createElement(R, null))), o.createElement(b, null))
                    }, t
                }(o.PureComponent),
                X = function(e) {
                    return o.createElement(u.W, {
                        className: "insider-pass-pre-purchase__feature-box-header",
                        bold: !0,
                        color: u.O.Link,
                        fontSize: u.Ca.Size1
                    }, e)
                },
                M = function(e) {
                    return o.createElement(u.W, {
                        className: "insider-pass-pre-purchase__feature-box-subheader",
                        bold: !0,
                        color: u.O.Link,
                        fontSize: u.Ca.Size3,
                        transform: u.Ub.Uppercase
                    }, e)
                },
                B = function(e) {
                    return o.createElement(u.W, null, e)
                },
                W = function(e) {
                    return o.createElement(u.W, {
                        fontSize: u.Ca.Size1,
                        bold: !0,
                        color: u.O.Link,
                        lineHeight: u.Ya.Heading
                    }, e)
                },
                U = function(e) {
                    return o.createElement(u.W, {
                        fontSize: u.Ca.Size3,
                        bold: !0,
                        lineHeight: u.Ya.Heading
                    }, e)
                },
                H = (a("etgA"), function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return s.__extends(t, e), t.prototype.render = function() {
                        return o.createElement(u.Xa, {
                            className: "esports-insider-pass-tab"
                        }, this.props.hasInsiderPass && o.createElement(C, {
                            channelID: this.props.channelID,
                            blizzardRewardsAvailable: this.props.blizzardRewardsAvailable
                        }), !this.props.hasInsiderPass && this.props.subscriptionProducts && o.createElement(F, {
                            channelID: this.props.channelID,
                            subscriptionProducts: this.props.subscriptionProducts,
                            userID: this.props.user && this.props.user.id,
                            userHasPrime: this.props.userHasPrime,
                            user: this.props.user
                        }))
                    }, t
                }(o.PureComponent));
            var q = Object(r.connect)(function(e) {
                return {
                    user: Object(i.e)(e)
                }
            })(H);
            a.d(t, "PublicProps", function() {}), a.d(t, "CampaignsInsiderPassTab", function() {
                return q
            })
        },
        IEPL: function(e, t, a) {},
        JPbf: function(e, t, a) {},
        KUJM: function(e, t, a) {},
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
        QlRw: function(e, t, a) {
            "use strict";
            var n;
            a.d(t, "a", function() {
                    return n
                }),
                function(e) {
                    e.NorthAmerica = "us", e.Europe = "eu", e.Korea = "kr", e.Taiwan = "tw", e.China = "cn", e.SouthEastAsia = "sea"
                }(n || (n = {}))
        },
        R3ld: function(e, t, a) {
            "use strict";
            a.r(t);
            var n = a("mrSG"),
                r = a("q1tI"),
                i = a("/7QA"),
                s = a("APPd"),
                o = a("Ue10"),
                l = (a("aPbA"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onVideoToggle = function() {
                            t.props.isLive && t.props.onVideoToggle && t.props.onVideoToggle()
                        }, t
                    }
                    return n.__extends(t, e), t.prototype.render = function() {
                        var e = Object(i.d)("Switch to Standard Stream", "CampaignsTabs"),
                            t = Object(i.d)("Switch to Command Center", "CampaignsTabs"),
                            a = Object(i.d)("Command Center is unavailable", "CampaignsTabs"),
                            n = Object(i.d)("Command Center will return during live broadcast", "CampaignsTabs"),
                            s = Object(i.d)("Command Center view: Watch with All-Access Pass", "CampaignsTabs"),
                            l = !(this.props.isLive && !this.props.noAccess || this.props.showInsiderChannel && !this.props.isLive),
                            d = a;
                        this.props.noAccess ? d = s : this.props.isLive || (d = n);
                        var c = r.createElement("svg", {
                                width: "24",
                                height: "16",
                                viewBox: "0 0 24 16",
                                className: "video-toggle-button__icon",
                                "data-test-selector": "video-toggle-button__standard-svg"
                            }, r.createElement("path", {
                                d: "M3 3h21v13H3V3zm2 2v9h17V5H5z",
                                opacity: ".5"
                            }), r.createElement("path", {
                                d: "M0 0h1v14H0z M0 0h21v1H0z"
                            })),
                            p = r.createElement("svg", {
                                width: "24",
                                height: "16",
                                viewBox: "0 0 24 16",
                                className: "video-toggle-button__icon",
                                "data-test-selector": "video-toggle-button__alternate-svg"
                            }, r.createElement("path", {
                                fillRule: "evenodd",
                                d: "M0 0h21v13H0z M2 2h8v5H2zM2 8h4v3H2zM15 8h4v3h-4zM7 8h7v2H7zM11 2h8v5h-8z"
                            }), r.createElement("path", {
                                opacity: ".5",
                                d: "M23 2h1v14h-1z M3 15h21v1H3z M0 0h21v13H0z"
                            })),
                            m = r.createElement(o.z, {
                                ariaLabel: this.props.showInsiderChannel ? e : t,
                                type: o.F.Hollow,
                                "data-test-selector": "video-toggle-button",
                                disabled: l,
                                onClick: this.onVideoToggle
                            }, r.createElement(o.Xa, {
                                display: o.X.Flex,
                                alignItems: o.f.Center
                            }, this.props.showInsiderChannel ? c : p, r.createElement(o.Xa, {
                                display: o.X.Flex,
                                flexDirection: o.Aa.Column,
                                alignItems: o.f.Start,
                                margin: {
                                    left: .5
                                }
                            }, r.createElement(o.Pa, {
                                visibility: this.props.showInsiderChannel ? o.gc.Visible : o.gc.Hidden,
                                "data-test-selector": "video-toggle-button__standard-string"
                            }, r.createElement(o.W, {
                                type: o.Vb.Span,
                                className: "video-toggle-button__text"
                            }, e)), r.createElement(o.Pa, {
                                visibility: this.props.showInsiderChannel ? o.gc.Hidden : o.gc.Visible,
                                "data-test-selector": "video-toggle-button__alternate-string"
                            }, r.createElement(o.W, {
                                type: o.Vb.Span,
                                className: "video-toggle-button__text video-toggle-button__text--alternate"
                            }, t)))));
                        return l ? r.createElement(o.Yb, {
                            label: d,
                            "data-test-selector": "video-toggle-button__tooltip"
                        }, m) : m
                    }, t
                }(r.PureComponent)),
                d = a("Rfsd"),
                c = a("GIGq"),
                p = a("Y6wA"),
                m = a("n7kk"),
                u = a("fR2g"),
                h = a("QlRw"),
                g = a("KnFV"),
                b = "esports-insider-pass-trial-displayed",
                f = function(e) {
                    function t(t) {
                        var a = e.call(this, t) || this;
                        return a.state = {
                            tabToShow: g.a.Progress
                        }, a.tabClick = function(e) {
                            var t = g.a.Progress;
                            e.currentTarget.hasAttribute("data-tab-target") ? t = e.currentTarget.getAttribute("data-tab-target") || t : e.currentTarget.parentElement && e.currentTarget.parentElement.hasAttribute("data-tab-target") && (t = e.currentTarget.parentElement.getAttribute("data-tab-target") || t), a.setState({
                                tabToShow: t
                            })
                        }, a.state.tabToShow = g.a.Progress, i.m.remove(b), a
                    }
                    return n.__extends(t, e), t.prototype.render = function() {
                        var e = this.props,
                            t = e.hasInsiderPass,
                            a = e.hasPrime,
                            n = !!this.props.blizzardAccount,
                            b = !!this.props.blizzardAccount && this.props.blizzardAccount.region !== h.a.China,
                            f = null;
                        return this.state.tabToShow === g.a.Progress ? f = r.createElement(p.CampaignsProgressTab, {
                            campaignProperties: this.props.campaignProperties,
                            channelID: this.props.channelID,
                            channelLogin: this.props.channelLogin,
                            blizzardAccount: this.props.blizzardAccount,
                            tabSwitch: this.tabClick,
                            hasInsiderPass: t
                        }) : this.state.tabToShow === g.a.Rewards ? f = r.createElement(m.CampaignsRewardsTab, {
                            campaignProperties: this.props.campaignProperties,
                            channelID: this.props.channelID,
                            blizzardAccount: this.props.blizzardAccount,
                            userHasPrime: a
                        }) : this.state.tabToShow === g.a.Info ? f = r.createElement(d.a, {
                            channelLogin: this.props.channelLogin,
                            channelID: this.props.channelID
                        }) : this.state.tabToShow === g.a.InsiderPass && (f = r.createElement(c.CampaignsInsiderPassTab, {
                            channelID: this.props.channelID,
                            blizzardRewardsAvailable: n && b,
                            userHasPrime: a,
                            subscriptionProducts: this.props.subscriptionProducts,
                            hasInsiderPass: t
                        })), r.createElement(o.Xa, {
                            margin: {
                                y: 3
                            },
                            position: o.jb.Relative
                        }, r.createElement(o.Eb, {
                            borderBottom: !0
                        }, r.createElement(o.Xa, {
                            display: o.X.Flex,
                            flexDirection: o.Aa.ColumnReverse,
                            flexWrap: o.Ba.Wrap,
                            breakpointExtraLarge: {
                                flexDirection: o.Aa.Row
                            }
                        }, r.createElement(o.P, {
                            cols: {
                                xl: 7,
                                default: 12
                            }
                        }, r.createElement(o.Pa, {
                            display: o.X.Flex,
                            alignItems: o.f.End,
                            fullHeight: !0
                        }, r.createElement("ul", null, r.createElement(u.a, {
                            id: g.a.Progress,
                            isSelected: this.state.tabToShow === g.a.Progress,
                            title: Object(i.d)("Event Progress", "OWLTabs"),
                            onClick: this.tabClick
                        }), r.createElement(u.a, {
                            id: g.a.InsiderPass,
                            isSelected: this.state.tabToShow === g.a.InsiderPass,
                            title: Object(i.d)("All-Access Pass", "OWLTabs"),
                            onClick: this.tabClick
                        }), r.createElement(u.a, {
                            id: g.a.Rewards,
                            isSelected: this.state.tabToShow === g.a.Rewards,
                            title: Object(i.d)("Loot", "OWLTabs"),
                            onClick: this.tabClick
                        }), r.createElement(u.a, {
                            id: g.a.Info,
                            isSelected: this.state.tabToShow === g.a.Info,
                            title: Object(i.d)("Info", "OWLTabs"),
                            onClick: this.tabClick
                        })))), r.createElement(o.P, {
                            cols: {
                                xl: 5,
                                default: 12
                            }
                        }, r.createElement(o.Xa, {
                            display: o.X.Flex,
                            alignItems: o.f.End,
                            padding: {
                                bottom: 1
                            },
                            breakpointExtraLarge: {
                                padding: {
                                    bottom: .5
                                },
                                justifyContent: o.Wa.End
                            }
                        }, r.createElement(l, {
                            isLive: this.props.isLive,
                            noAccess: !t,
                            showInsiderChannel: !!this.props.showInsiderChannel,
                            onVideoToggle: this.props.onChannelChange
                        }), this.props.currentUserID && r.createElement(o.Xa, {
                            margin: {
                                left: 1
                            }
                        }, n && !b && this.state.tabToShow === g.a.Rewards ? r.createElement(o.W, {
                            color: o.O.Error
                        }, Object(i.d)("Not available in linked account's region", "OWLTabs")) : r.createElement(s.a, {
                            onOpenBlizzardConnect: this.props.onOpenBlizzardConnect
                        })))))), f)
                    }, t
                }(r.Component);
            a.d(t, "ESPORT_INSIDER_PASS_TRIAL_STORAGE_KEY", function() {
                return b
            }), a.d(t, "OWLTabs", function() {
                return f
            })
        },
        R4QF: function(e, t, a) {},
        RNrf: function(e, t) {
            var a = {
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
            a.loc.source = {
                body: "query BlizzardAccountForUser {\ncurrentUser {\nid\nblizzardAccount {\nid\nbattleTag\nregion\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = a
        },
        RkfI: function(e, t, a) {},
        Sk0q: function(e, t, a) {
            "use strict";
            a.d(t, "b", function() {
                return i
            }), a.d(t, "a", function() {
                return s
            });
            var n = a("/5u6"),
                r = a("OpME");

            function i(e, t) {
                return e && e.emotes ? Object(r.b)(e.emotes).map(function(e) {
                    var a = "",
                        r = e.srcSet.split(",").find(function(e) {
                            return e.includes("3.0x")
                        });
                    return r && (a = r.trim().split(" ")[0]), {
                        __typename: "TournamentReward",
                        id: e.id,
                        name: e.displayName,
                        type: n.a.Insider,
                        description: "",
                        imageURL: a,
                        isEntitled: t,
                        canBeFulfilled: !1,
                        entitledQuantity: t ? 1 : 0,
                        canBeFulfilledQuantity: 0,
                        isPrimeOnly: !1,
                        quantity: 1,
                        rarity: 0,
                        metadata: null
                    }
                }) : []
            }

            function s(e, t) {
                return e ? {
                    __typename: "TournamentReward",
                    id: e.id,
                    type: n.a.Insider,
                    name: e.title,
                    description: e.title,
                    canBeFulfilled: !1,
                    isEntitled: t,
                    entitledQuantity: t ? 1 : 0,
                    canBeFulfilledQuantity: 0,
                    imageURL: e.image4x,
                    isPrimeOnly: !1,
                    quantity: 1,
                    rarity: 0,
                    metadata: null
                } : null
            }
        },
        T9jf: function(e, t, a) {},
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
        WaLP: function(e, t, a) {
            "use strict";
            var n = a("/MKj"),
                r = a("kRBY"),
                i = a("mrSG"),
                s = a("q1tI"),
                o = a("oJmH"),
                l = a("/7QA"),
                d = a("yR8l"),
                c = a("eDVu"),
                p = a("+LJB"),
                m = a("i4ay"),
                u = a("Ue10"),
                h = a("ktVs"),
                g = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        return !this.props.data || this.props.data.loading && !this.props.data.user ? s.createElement(u.Za, {
                            fillContent: !0
                        }) : this.props.data && this.props.data.error ? s.createElement(u.Xa, {
                            fullHeight: !0,
                            fullWidth: !0,
                            textAlign: u.Rb.Center,
                            padding: {
                                top: 4
                            }
                        }, s.createElement(u.sb, {
                            asset: u.tb.DeadGlitch,
                            fill: !0,
                            width: 50,
                            height: 50
                        })) : s.createElement(u.Eb, {
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
                        }, s.createElement(u.Xa, {
                            padding: {
                                bottom: 2
                            }
                        }, s.createElement(u.W, {
                            type: u.Vb.H3
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
            var f = Object(n.connect)(function(e) {
                return {
                    user: Object(r.e)(e)
                }
            })(b);
            a.d(t, "a", function() {
                return f
            })
        },
        WlPE: function(e, t, a) {
            "use strict";
            var n, r, i = a("mrSG"),
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
            }(r || (r = {}));
            var c = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    var e = "esports-square__mask--locked-" + Object(l.a)(),
                        t = "esports-square__mask--locked-" + Object(l.a)(),
                        a = void 0,
                        i = void 0;
                    this.props.locked ? (a = "esports-square__mask--locked", i = "url(#" + e + ")") : void 0 === this.props.hasInsiderPass || this.props.hasInsiderPass || (a = "esports-square__mask--locked", i = "url(#" + t + ")");
                    var c = s({
                            "esports-square--border": !this.props.noBorder
                        }, {
                            "esports-square--border__brand": this.props.borderType === r.Brand
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
                        p = s({
                            "esports-square__image--large": this.props.size === n.Large
                        }, {
                            "esports-square__image--medium": this.props.size === n.Medium
                        }, {
                            "esports-square__image--default": this.props.size === n.Default
                        }, {
                            "esports-square__image": !0
                        }),
                        m = s({
                            "esports-square__svg--large": this.props.size === n.Large
                        }, {
                            "esports-square__svg--medium": this.props.size === n.Medium
                        }, {
                            "esports-square__svg": !0
                        });
                    return o.createElement(d.Eb, {
                        "data-test-selector": a,
                        className: c,
                        textAlign: d.Rb.Center,
                        position: d.jb.Relative,
                        borderRadius: d.x.Large,
                        overflow: d.cb.Hidden,
                        background: d.r.Base,
                        display: d.X.InlineBlock
                    }, o.createElement("img", {
                        className: p,
                        src: this.props.imageURL,
                        alt: "",
                        style: {
                            filter: i
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
            a.d(t, !1, function() {
                return "esports-square__mask--locked"
            }), a.d(t, !1, function() {
                return "esports-square__mask--locked"
            }), a.d(t, !1, function() {
                return "esports-square__pattern"
            }), a.d(t, "c", function() {
                return n
            }), a.d(t, "b", function() {
                return r
            }), a.d(t, "a", function() {
                return c
            })
        },
        Y6wA: function(e, t, a) {
            "use strict";
            a.r(t);
            var n = a("/MKj"),
                r = a("kRBY"),
                i = a("mrSG"),
                s = a("TSYQ"),
                o = a("q1tI"),
                l = a("oJmH"),
                d = a("/7QA"),
                c = a("yR8l"),
                p = a("eDVu"),
                m = a("0Log"),
                u = a("/aPz"),
                h = a("5zXJ"),
                g = a("fvjX"),
                b = a("1/iK"),
                f = a("y5D0"),
                k = a("qyxT"),
                v = a("VJHF"),
                E = a("/5u6"),
                y = a("RVih"),
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
                                case E.a.Individual:
                                    n = t.props.data.user.tournament.rewards.individual;
                                    break;
                                default:
                                    n = []
                            }
                            return (n = n.filter(function(e) {
                                return "emote" === e.type
                            })).length < 1 ? [] : Object(k.a)(n.slice()).slice(0, a).map(function(e, t) {
                                return o.createElement(w.Pa, {
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
                    return i.__extends(t, e), t.prototype.render = function() {
                        if (this.state.dismissedFtue) return null;
                        var e = o.createElement(w.Ja, {
                                gutterSize: w.Ka.None
                            }, o.createElement(w.P, {
                                cols: {
                                    default: 6
                                }
                            }, o.createElement(w.Xa, {
                                display: w.X.Flex,
                                alignItems: w.f.Center,
                                justifyContent: w.Wa.Center,
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
                            }, o.createElement(w.Xa, {
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
                            }, o.createElement(w.Pa, {
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
                            }, Object(d.d)("Complete the Collection", "CampaignsFirstTimeExperience"))), o.createElement(w.Pa, {
                                padding: {
                                    bottom: 1
                                }
                            }, o.createElement(w.W, {
                                fontSize: w.Ca.Size6
                            }, Object(d.d)("Hype your team by Cheering 300 Bits and immediately unlock four Overwatch Hero skins to use right away.", "CampaignsFirstTimeExperience"))), o.createElement(w.Xa, {
                                display: w.X.Flex,
                                flexDirection: w.Aa.Row
                            }, this.props.user ? o.createElement(w.z, {
                                onClick: this.openBitsCard,
                                "data-test-selector": "logged-in-ftue"
                            }, Object(d.d)("Cheer now", "CampaignsFirstTimeExperience")) : o.createElement(w.Xa, {
                                "data-test-selector": "logged-out-ftue"
                            }, o.createElement(y.a, {
                                login: this.props.login,
                                signup: this.props.signup
                            })), o.createElement(w.Pa, {
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
                            t = this.generateRandomNumberOfEmotes(E.a.Individual, 4),
                            a = o.createElement(w.Eb, {
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
                            }, o.createElement(w.Xa, {
                                display: w.X.Flex,
                                alignItems: w.f.Center,
                                justifyContent: w.Wa.Center,
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
                            }, o.createElement(w.Xa, {
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
                            }, o.createElement(w.Xa, null, t), o.createElement(w.Pa, {
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
                            }, Object(d.d)("Even more skins!", "CampaignsFirstTimeExperience"))), o.createElement(w.Pa, {
                                padding: {
                                    bottom: 1
                                }
                            }, o.createElement(w.W, {
                                fontSize: w.Ca.Size6,
                                color: w.O.Overlay
                            }, Object(d.d)("Keep Cheering and you'll unlock a Mercy skin when you unlock 13 emotes and a Genji skin when you collect all 26!", "CampaignsFirstTimeExperience"))))))),
                            n = Object(d.d)("Close", "CampaignsFirstTimeExperience");
                        return o.createElement(w.Eb, {
                            className: "esports-ftue " + s(this.props.className),
                            border: !0,
                            background: w.r.Base,
                            borderRadius: w.x.Large,
                            position: w.jb.Relative,
                            overflow: w.cb.Hidden
                        }, o.createElement(w.Xa, {
                            className: "esports-ftue__close",
                            position: w.jb.Absolute,
                            display: w.X.Flex,
                            breakpointExtraLarge: {
                                display: w.X.Hide
                            }
                        }, o.createElement(w.A, {
                            "data-test-selector": "dismiss-ftue-selector",
                            icon: w.tb.Close,
                            ariaLabel: n,
                            onClick: this.closeFtue
                        })), o.createElement(w.Xa, {
                            className: "esports-ftue__close",
                            position: w.jb.Absolute,
                            display: w.X.Hide,
                            breakpointExtraLarge: {
                                display: w.X.Flex
                            }
                        }, o.createElement(w.A, {
                            icon: w.tb.Close,
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
                        }, o.createElement(w.Xa, {
                            display: w.X.Flex,
                            alignItems: w.f.Center,
                            fullHeight: !0,
                            position: w.jb.Relative,
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
                        }, o.createElement(w.Xa, {
                            display: w.X.Flex,
                            alignItems: w.f.Center,
                            fullHeight: !0
                        }, a))))
                    }, t.prototype.openBitsCard = function() {
                        var e = document.querySelector('[data-a-target="bits-button"]');
                        e && e.click()
                    }, t = i.__decorate([Object(c.a)(C, {
                        options: function(e) {
                            return {
                                variables: {
                                    channelID: e.channelID
                                }
                            }
                        }
                    })], t)
                }(o.Component));
            var P = Object(n.connect)(function(e) {
                    return {
                        user: Object(r.e)(e)
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
                x = a("G30c"),
                I = a("WaLP"),
                N = a("jAjM"),
                R = a("huSm"),
                z = a("f00E"),
                _ = (a("44In"), 100),
                T = 13,
                A = 9,
                O = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            animatablePercent: 0
                        }, t.canvasMidpoint = _ / 2, t.meterRadius = t.canvasMidpoint - T / 2, t.troughRadius = t.canvasMidpoint - A / 2, t.meterLength = Math.PI * t.meterRadius * 2, t.maskRadius = t.canvasMidpoint / 2, t.maskLength = Math.PI * t.maskRadius * 2, t.clampPercent = function(e) {
                            return Math.min(Math.max(e, 0), 1)
                        }, t.getLowestFactor = function(e) {
                            for (var t = 2; e % t > 0 && t <= e;) t++;
                            return t
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.componentDidMount = function() {
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
                        var e = "progress-circle__main-mask-" + Object(z.a)(),
                            t = "progress-circle__secondary-mask-" + Object(z.a)(),
                            a = 3 * this.maskLength / 360,
                            n = this.maskLength / this.props.segments - a,
                            r = n + " " + a,
                            i = this.getLowestFactor(this.props.segments),
                            s = n * i + a * (i - 1) + " " + a;
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
                            strokeDasharray: r,
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
                            strokeWidth: A,
                            mask: "url(#" + e + ")"
                        }), o.createElement("circle", {
                            className: "progress-circle__meter",
                            cx: this.canvasMidpoint,
                            cy: this.canvasMidpoint,
                            r: this.meterRadius,
                            mask: "url(#" + e + ")",
                            strokeWidth: T,
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
                j = a("+z1J"),
                D = a("fFIB"),
                L = (a("+8bU"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.getRect = function() {
                            return t.ref ? t.ref.getBoundingClientRect() : null
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        var e = this;
                        if (this.props.data && this.props.data.loading) return o.createElement(w.Za, {
                            fillContent: !0
                        });
                        var t;
                        if (this.props.data && (!this.props.data.loading && this.props.data.error || !this.props.data.user || !this.props.data.user.tournament)) return o.createElement(w.Xa, {
                            className: "esports-individual-progress__error",
                            position: w.jb.Relative,
                            textAlign: w.Rb.Center
                        }, o.createElement(w.sb, {
                            height: 50,
                            width: 50,
                            asset: w.tb.DeadGlitch
                        }));
                        var a = [],
                            n = [],
                            r = 0,
                            i = 0;
                        this.props.data && this.props.data.user && this.props.data.user.tournament && this.props.data.user.tournament.self && this.props.data.user.tournament.rewards && (a = this.props.data.user.tournament.rewards.individual.filter(function(e) {
                            return "emote" === e.type
                        }), n = this.props.data.user.tournament.self.progress.milestones.filter(function(e) {
                            return e.id.includes("individual") && e.rewards.every(function(e) {
                                return "igc" === e.type
                            })
                        }), r = a.length, i = a.filter(function(e) {
                            return e.isEntitled
                        }).length);
                        var s = this.props.data && this.props.data.user && this.props.data.user.tournament && this.props.data.user.tournament.self ? this.props.data.user.tournament.self.progress.amount : 0,
                            l = Math.min(s / 2600, 1),
                            c = n.map(function(t) {
                                var a = t.rewards[0];
                                return a ? o.createElement(w.Xa, {
                                    key: t.id,
                                    textAlign: w.Rb.Right
                                }, o.createElement(R.a, {
                                    milestoneID: t.id,
                                    type: j.a.Blizzard,
                                    userProgress: s,
                                    globalProgress: s,
                                    reward: a,
                                    threshold: t.threshold,
                                    participationThreshold: t.threshold,
                                    startDate: new Date(t.startDate),
                                    blizzardAccount: e.props.blizzardAccount,
                                    getParentRect: e.getRect,
                                    size: N.b.Small
                                })) : null
                            });
                        return t = o.createElement(w.Xa, {
                            padding: {
                                top: 3
                            },
                            display: w.X.Flex,
                            flexDirection: w.Aa.Column,
                            position: w.jb.Relative
                        }, o.createElement(w.Xa, {
                            className: "esports-individual-progress__user-progress-ring",
                            textAlign: w.Rb.Center
                        }, o.createElement(O, {
                            percentComplete: l,
                            segments: 26
                        }), r > 0 && o.createElement(w.Xa, {
                            padding: {
                                top: 2
                            }
                        }, o.createElement(w.W, {
                            fontSize: w.Ca.Size3
                        }, Object(d.d)("{entitled} / {total}", {
                            entitled: Object(d.f)(i),
                            total: Object(d.f)(r)
                        }, "CampaignsProgressTab")))), n.length > 0 && o.createElement(w.Xa, {
                            className: "esports-individual-progress__igc-container",
                            position: w.jb.Absolute,
                            display: w.X.Flex,
                            justifyContent: w.Wa.Between,
                            flexDirection: w.Aa.Column,
                            textAlign: w.Rb.Right,
                            "data-test-selector": "esports-individual-progress-igc-selector"
                        }, c)), o.createElement(w.Xa, {
                            className: "esports-individual-progress",
                            fullHeight: !0
                        }, o.createElement(w.W, {
                            bold: !0,
                            type: w.Vb.H6,
                            color: w.O.Link,
                            transform: w.Ub.Uppercase
                        }, Object(d.d)("Your Progress", "CampaignsProgressTab")), o.createElement(w.Xa, {
                            display: w.X.Flex,
                            alignItems: w.f.Baseline
                        }, o.createElement(w.Xa, {
                            padding: {
                                right: .5
                            }
                        }, o.createElement(w.sb, {
                            type: w.ub.Brand,
                            height: 30,
                            width: 30,
                            asset: w.tb.Bits
                        })), o.createElement(w.W, {
                            "data-test-selector": "esports-individual-progress-selector",
                            type: w.Vb.H1,
                            bold: !0
                        }, Object(d.f)(s))), o.createElement(w.Xa, {
                            padding: {
                                y: 1
                            }
                        }, o.createElement(w.W, null, Object(d.d)("Unlock an Overwatch Hero Twitch emote for every 100 Bits you Cheer. No duplicates!", "CampaignsProgressTab"))), t || o.createElement(w.Xa, {
                            className: "esports-individual-progress__empty"
                        }))
                    }, t
                }(o.Component)),
                F = Object(l.compose)(Object(c.a)(D, {
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
                        topic: e.data && e.data.user && e.data.user.tournament && e.user ? Object(u.F)(e.user.id) : "",
                        query: D,
                        variables: {
                            channelID: e.channelID
                        },
                        skip: !(e.user && e.data && e.data.user && e.data.user.tournament),
                        type: m.PubsubMessageType.UserCampaignProgressEvent,
                        mutator: function(e, t) {
                            if (t && t.user && t.user.tournament && t.user.tournament.self) return t.user.tournament.self.progress.amount = e.data.progress, t
                        }
                    }
                }))(L);
            var X, M = Object(n.connect)(function(e) {
                    return {
                        user: Object(r.e)(e)
                    }
                })(F),
                B = a("rC/K"),
                W = a("KnFV"),
                U = a("tuvy"),
                H = a("EYeq");
            a("ODAr");
            ! function(e) {
                e.AllAccessMarketing = "aap-marketing-selector", e.CommunityRewards = "community-rewards-selector", e.TeamRewards = "team-rewards-selector"
            }(X || (X = {}));
            var q = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.renderCommunityRewards = function() {
                            return o.createElement(w.Xa, {
                                "data-test-selector": X.CommunityRewards
                            }, o.createElement(w.W, {
                                bold: !0,
                                type: w.Vb.H6,
                                color: w.O.Link,
                                transform: w.Ub.Uppercase
                            }, Object(d.d)("Community Rewards", "CampaignsProgressTab")), o.createElement(w.Pa, {
                                margin: {
                                    y: 1
                                }
                            }, o.createElement(w.W, null, Object(d.d)("All Overwatch skins unlocked! Cheer just 300 Bits to hype your team and unlock all four skins!", "CampaignsProgressTab"))), t.renderCheerButton(), o.createElement(w.Xa, {
                                display: w.X.Flex,
                                justifyContent: w.Wa.Between,
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
                            var a = e ? 12 : 6;
                            return o.createElement(w.Ja, null, o.createElement(w.P, {
                                cols: {
                                    default: 12,
                                    md: a
                                }
                            }, o.createElement(w.Xa, {
                                display: w.X.Flex,
                                margin: {
                                    bottom: 2
                                }
                            }, o.createElement(w.Xa, {
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
                            })), o.createElement(w.Xa, null, o.createElement(w.Xa, {
                                display: w.X.Flex
                            }, o.createElement(w.W, {
                                bold: !0,
                                type: w.Vb.H6,
                                transform: w.Ub.Uppercase,
                                color: w.O.Link
                            }, Object(d.d)("Team Cheering", "CampaignsProgressTab")), o.createElement(w.Xa, {
                                margin: {
                                    left: 1
                                }
                            }, o.createElement(w.W, {
                                bold: !0,
                                type: w.Vb.H6,
                                transform: w.Ub.Uppercase,
                                color: w.O.Error
                            }, Object(d.d)("New Rewards!", "CampaignsProgressTab")))), o.createElement(w.W, null, Object(d.d)("Collect all 12 team emotes and you’ll unlock an exclusive D.Va skin! Cheer at least 150 Bits for each team to unlock their emote.", "CampaignsProgressTab")), o.createElement(w.Xa, {
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
                            return o.createElement(w.Xa, {
                                "data-test-selector": X.TeamRewards
                            }, o.createElement(w.Xa, {
                                textAlign: w.Rb.Right,
                                padding: {
                                    bottom: 1
                                }
                            }, o.createElement(w.W, {
                                bold: !0,
                                type: w.Vb.H6,
                                color: w.O.Link,
                                transform: w.Ub.Uppercase
                            }, Object(d.d)("{complete} / {total}", {
                                complete: n,
                                total: a.length
                            }, "CampaignsProgressTab"))), o.createElement(w.Xa, {
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
                                return o.createElement(w.Eb, {
                                    key: e.id,
                                    className: t,
                                    background: w.r.Base,
                                    borderRadius: w.x.Rounded,
                                    overflow: w.cb.Hidden,
                                    position: w.jb.Relative,
                                    margin: 1,
                                    padding: 1
                                }, o.createElement(w.S, {
                                    className: "campaign-progress-tab__team-progress-list-item-img",
                                    src: e.imageURL,
                                    alt: e.name
                                }), !e.isEntitled && o.createElement(w.Eb, {
                                    className: "campaign-progress-tab__team-progress-list-item-locked",
                                    position: w.jb.Absolute,
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
                            }, o.createElement(w.Xa, {
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
                            }, o.createElement(w.Xa, {
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
                            }, o.createElement(w.Xa, {
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
                                "data-test-selector": X.AllAccessMarketing
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
                            }, o.createElement(w.Xa, {
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
                                "data-test-selector": X.AllAccessMarketing
                            }, t.renderAllAccessMarketing()), o.createElement(w.P, {
                                cols: {
                                    default: 12,
                                    md: e ? 12 : 6,
                                    xxl: e ? 12 : 7
                                }
                            }, o.createElement(w.Xa, {
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
                            }, o.createElement(w.Xa, {
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
                            }, o.createElement(w.Xa, {
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
                            return o.createElement(w.Xa, {
                                display: w.X.Flex,
                                flexWrap: w.Ba.WrapReverse
                            }, o.createElement(w.P, {
                                cols: {
                                    default: 12,
                                    md: 7
                                }
                            }, o.createElement(w.Xa, {
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
                            }, o.createElement(w.Xa, {
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
                            }, o.createElement(w.Xa, {
                                className: "campaign-progress-tab__team-cheering-wrapper",
                                fullHeight: !0,
                                padding: {
                                    bottom: 3
                                }
                            }, t.renderTeamCheeringRewards())))
                        }, t.teamRewardIsActive = function() {
                            var e = t.props.campaignProperties && t.props.campaignProperties.objectives;
                            return !!e && e.filter(function(e) {
                                return e.tag === B.a.Collection && e.milestones && e.milestones.length > 0
                            }).length > 0
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        return o.createElement(w.Xa, {
                            className: "campaign-progress-tab",
                            margin: {
                                y: 2
                            }
                        }, o.createElement(w.Pa, {
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
                        })), o.createElement(w.Xa, {
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
                        }, o.createElement(w.Xa, {
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
                        }, o.createElement(I.a, {
                            channelID: this.props.channelID
                        }))))
                    }, t.prototype.renderAllAccessMarketing = function() {
                        var e = Object(d.d)("Explore the All-Access Pass", "CampaignsProgressTab");
                        return o.createElement(w.Xa, {
                            className: "campaign-progress-tab__all-access-marketing",
                            padding: {
                                bottom: 3
                            },
                            breakpointMedium: {
                                padding: {
                                    left: 3
                                }
                            }
                        }, o.createElement(w.Eb, {
                            textAlign: w.Rb.Center,
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
                            position: w.jb.Relative
                        }, o.createElement(w.Pa, {
                            position: w.jb.Absolute,
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
                            transform: w.Ub.Uppercase,
                            color: w.O.Link,
                            bold: !0
                        }, Object(d.d)("Included with the Pass:", "CampaignsProgressTab")), o.createElement(w.W, null, Object(d.d)("15 Overwatch skins, 1 player icon and 1 spray", "CampaignsProgressTab")), o.createElement(w.Xa, {
                            margin: {
                                y: 2
                            }
                        }, o.createElement(w.Xa, {
                            display: w.X.Flex,
                            alignItems: w.f.Center,
                            margin: {
                                y: 1
                            }
                        }, o.createElement(w.Pa, {
                            margin: {
                                right: 1
                            }
                        }, o.createElement("img", {
                            src: h.c + "/owl-2017/switcher-command-center.svg",
                            height: "36px",
                            width: "36px"
                        })), o.createElement(w.W, null, Object(d.d)("Exclusive Command Center Stream access plus Passholder-only chat", "CampaignsProgressTab"))), o.createElement(w.Xa, {
                            display: w.X.Flex,
                            alignItems: w.f.Center,
                            margin: {
                                y: 1
                            }
                        }, o.createElement(w.Pa, {
                            margin: {
                                right: 1
                            }
                        }, o.createElement("img", {
                            src: h.c + "/owl-2017/marketing/insider-post-purchase-vods.png",
                            height: "36px",
                            width: "36px"
                        })), o.createElement(w.W, null, Object(d.d)("Post-match Q&A and match-analysis videos by players", "CampaignsProgressTab"))), o.createElement(w.Xa, {
                            display: w.X.Flex,
                            alignItems: w.f.Center,
                            margin: {
                                y: 1
                            }
                        }, o.createElement(w.Pa, {
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
                            "data-tab-target": W.a.InsiderPass
                        }, e) : o.createElement(w.z, {
                            type: w.F.Hollow,
                            onClick: this.props.tabSwitch,
                            "data-tab-target": W.a.InsiderPass
                        }, e))
                    }, t.prototype.openBitsCard = function() {
                        var e = document.querySelector('[data-a-target="bits-button"]');
                        e && e.click()
                    }, t
                }(o.Component),
                V = Object(l.compose)(Object(c.a)(H, {
                    options: function(e) {
                        return {
                            variables: {
                                channelID: e.channelID
                            }
                        }
                    }
                }), Object(p.a)(function(e) {
                    return {
                        topic: e.data && e.data.user && e.data.user.tournament && e.user ? Object(u.F)(e.user.id) : "",
                        query: H,
                        variables: {
                            channelID: e.channelID
                        },
                        skip: !(e.user && e.data && e.data.user && e.data.user.tournament),
                        type: m.PubsubMessageType.UserCampaignProgressEvent,
                        mutator: function(t, a) {
                            if (a && a.user && a.user.tournament) return e && e.data && e.data.refetch && e.data.refetch(), a
                        }
                    }
                }))(q);
            var G = Object(n.connect)(function(e) {
                return {
                    user: Object(r.e)(e)
                }
            })(V);
            a.d(t, "PublicProps", function() {}), a.d(t, "CampaignsProgressTab", function() {
                return G
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
        aPbA: function(e, t, a) {},
        aUl8: function(e, t, a) {},
        "bt+X": function(e, t, a) {},
        bwyL: function(e, t, a) {
            var n = {
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
                                            kind: "FragmentSpread",
                                            name: {
                                                kind: "Name",
                                                value: "campaignSubscriptionProduct"
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
                    end: 805
                }
            };
            n.loc.source = {
                body: '#import "twilight/features/badges/models/badge-fragment.gql"\n#import "twilight/features/campaigns/models/milestone.gql"\n#import "twilight/features/campaigns/models/reward.gql"\n#import "twilight/features/campaigns/models/subscription-product.gql"\nquery CampaignsGetRewards($channelID: ID!) {\nuser(id: $channelID) {\nid\nbroadcastBadges {\n...badge\n}\nsubscriptionProducts {\n...campaignSubscriptionProduct\n}\nself {\nsubscriptionBenefit {\nid\npurchasedWithPrime\ntier\n}\nisModerator\n}\ntournament {\nid\nprogress {\namount\nmilestones {\n...milestone\n}\n}\nself {\nprogress {\namount\nmilestones {\n...milestone\n}\n}\n}\nrewards {\nglobal {\n...reward\n}\nteam {\n...reward\n}\nindividual {\n...reward\n}\ncheerbomb {\n...reward\n}\ninsider {\nheroSkins {\n...reward\n}\ninGameContent {\n...reward\n}\nbadges {\n...reward\n}\nbits {\n...reward\n}\n}\n}\n}\n}\n}',
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            var r = {};

            function i(e) {
                return e.filter(function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var t = e.name.value;
                    return !r[t] && (r[t] = !0, !0)
                })
            }
            n.definitions = n.definitions.concat(i(a("IKE4").definitions)), n.definitions = n.definitions.concat(i(a("8Ver").definitions)), n.definitions = n.definitions.concat(i(a("VK0B").definitions)), n.definitions = n.definitions.concat(i(a("ySEf").definitions)), e.exports = n
        },
        cUCe: function(e, t, a) {
            "use strict";
            var n = a("q1tI"),
                r = (a("Yg6M"), function() {
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
                return r
            })
        },
        etgA: function(e, t, a) {},
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
            var r = {};

            function i(e) {
                return e.filter(function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var t = e.name.value;
                    return !r[t] && (r[t] = !0, !0)
                })
            }
            n.definitions = n.definitions.concat(i(a("8Ver").definitions)), n.definitions = n.definitions.concat(i(a("VK0B").definitions)), e.exports = n
        },
        fR2g: function(e, t, a) {
            "use strict";
            var n = a("mrSG"),
                r = a("q1tI"),
                i = a("/7QA"),
                s = a("Ue10"),
                o = (a("ywDU"), function() {
                    return r.createElement(s.Xa, {
                        className: "esports-campaign-new-feature",
                        position: s.jb.Relative
                    }, r.createElement(s.Xa, {
                        position: s.jb.Absolute,
                        attachRight: !0,
                        attachTop: !0
                    }, r.createElement(s.gb, {
                        label: Object(i.d)("New", "CampaignsTabs"),
                        type: s.hb.Alert
                    })))
                }),
                l = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return n.__extends(t, e), t.prototype.render = function() {
                        var e = new Date(Date.now()),
                            t = !1;
                        return this.props.newDisplayInfo && this.props.newDisplayInfo.startDate ? t = this.props.newDisplayInfo && this.props.newDisplayInfo.endDate ? this.props.newDisplayInfo.startDate <= e && this.props.newDisplayInfo.endDate >= e : this.props.newDisplayInfo.startDate <= e : this.props.newDisplayInfo && this.props.newDisplayInfo.endDate && (t = this.props.newDisplayInfo.endDate >= e), this.props.newDisplayInfo && void 0 !== this.props.newDisplayInfo.shouldShow && (t = this.props.newDisplayInfo.shouldShow), r.createElement(s.Fb, {
                            active: this.props.isSelected,
                            onClick: this.props.onClick,
                            "data-tab-target": this.props.id
                        }, r.createElement(s.Xa, {
                            display: s.X.Flex
                        }, r.createElement(s.W, {
                            breakpointExtraSmall: {
                                fontSize: s.Ca.Size5
                            },
                            breakpointSmall: {
                                fontSize: s.Ca.Size3
                            },
                            breakpointExtraLarge: {
                                fontSize: s.Ca.Size4
                            },
                            breakpointExtraExtraLarge: {
                                fontSize: s.Ca.Size3
                            },
                            type: s.Vb.H3
                        }, this.props.title), t && r.createElement(o, null)))
                    }, t
                }(r.PureComponent);
            a.d(t, "a", function() {
                return l
            })
        },
        hRrL: function(e, t, a) {
            "use strict";
            var n = a("/MKj"),
                r = a("kRBY"),
                i = a("mrSG"),
                s = a("q1tI"),
                o = a("oJmH"),
                l = a("/7QA"),
                d = a("yR8l"),
                c = a("Ue10"),
                p = a("7QWs"),
                m = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            error: !1
                        }, t.claimAllRewards = function() {
                            return i.__awaiter(t, void 0, void 0, function() {
                                return i.__generator(this, function(e) {
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
                    return i.__extends(t, e), t.prototype.render = function() {
                        var e = this.props.inGame ? Object(l.d)("Redeem All In-Game Rewards", "CampaignsRewardsTab") : Object(l.d)("Redeem All", "CampaignsRewardsTab");
                        return s.createElement(c.Xa, {
                            className: "esports-claim-all-rewards-button",
                            display: c.X.InlineFlex,
                            margin: {
                                right: 1
                            },
                            verticalAlign: c.fc.Bottom
                        }, s.createElement(c.z, {
                            "data-test-selector": "esports-claim-all-button",
                            onClick: this.claimAllRewards,
                            disabled: !this.props.enabled
                        }, this.state.error && s.createElement(c.sb, {
                            "data-test-selector": "esports-claim-all-button-error",
                            asset: c.tb.DeadGlitch
                        }), !this.state.error && e))
                    }, t
                }(s.Component),
                u = Object(o.compose)(Object(d.a)(p, {
                    name: "claimAllRewards"
                }))(m);
            var h = Object(n.connect)(function(e) {
                return {
                    user: Object(r.e)(e)
                }
            })(u);
            a.d(t, "a", function() {
                return h
            })
        },
        huSm: function(e, t, a) {
            "use strict";
            var n, r, i, s = a("mrSG"),
                o = a("q1tI"),
                l = a("5zXJ"),
                d = a("jAjM"),
                c = a("/MKj"),
                p = a("kRBY"),
                m = a("yR8l"),
                u = a("geRD"),
                h = a("/7QA"),
                g = a("fvjX"),
                b = a("1/iK"),
                f = a("y5D0"),
                k = a("+z1J");
            ! function(e) {
                e.RedeemMilestoneButton = "milestone_balloon__redeem-milestone-button", e.Redeemed = "milestone_button_redeemed-milestone", e.MilestoneRestricted = "milestone_balloon_restricted", e.CheerNowButton = "milestone_balloon_cheer_now", e.LoginSignup = "milestone_balloon_login_signup", e.BuyInsiderPass = "milestone-balloon-buy-insider-pass", e.TryPrime = "milestone-balloon-try-prime"
            }(n || (n = {})),
            function(e) {
                e.Description = "milestone-balloon-body-description"
            }(r || (r = {})),
            function(e) {
                e.RewardType = "milestone-balloon-header-reward-type", e.MilestoneRestricted = "milestone-balloon-header-milestone-restricted", e.MilestoneLocked = "milestone-balloon-header-milestone-locked", e.MilestoneUnlocked = "milestone-balloon-header-milestone-unlocked"
            }(i || (i = {}));
            var v = a("DnOo"),
                E = a("W8Fi"),
                y = a("RVih"),
                w = a("Ue10"),
                C = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.handleSubAction = function() {}, t
                    }
                    return s.__extends(t, e), t.prototype.render = function() {
                        var e = null,
                            t = this.props.type === k.a.Blizzard || this.props.insiderType === k.c.InGameContent,
                            a = Object(h.d)("Redeem", "CampaignsMilestoneBalloon");
                        if (this.props.reward.isEntitled) e = o.createElement(w.Xa, {
                            display: w.X.Flex,
                            className: "esports-milestone-balloon__redeemed",
                            "data-test-selector": n.Redeemed,
                            padding: {
                                top: 1
                            }
                        }, o.createElement(w.Xa, {
                            padding: {
                                right: .5
                            }
                        }, o.createElement(w.sb, {
                            asset: w.tb.Check,
                            type: w.ub.Success
                        })), o.createElement(w.W, null, Object(h.d)("Redeemed", "CampaignsMilestoneBalloon")));
                        else if (t && this.props.isRestrictedBlizzardAccount) e = o.createElement(w.Xa, {
                            display: w.X.Flex,
                            "data-test-selector": n.MilestoneRestricted
                        }, o.createElement(w.W, {
                            color: w.O.Error
                        }, Object(h.d)("Reward unavailable", "CampaignsMilestoneBalloon")));
                        else if (this.props.isClaimable) t ? e = void 0 === this.props.isBlizzardAccountLinked || this.props.isBlizzardAccountLinked ? o.createElement(w.z, {
                            onClick: this.props.claimMilestone,
                            disabled: this.props.isRestrictedBlizzardAccount,
                            "data-test-selector": n.RedeemMilestoneButton
                        }, a) : o.createElement(w.Xa, null, o.createElement(w.W, null, Object(h.d)("Link your Blizzard Account to use in-game!", "CampaignsMilestoneBalloon"))) : this.props.insiderType === k.c.Bits && (e = o.createElement(w.z, {
                            onClick: this.props.claimMilestone,
                            "data-test-selector": n.RedeemMilestoneButton
                        }, a));
                        else if (!this.props.hasInsiderPass && this.props.subscriptionProducts && this.props.subscriptionProducts.length > 0) {
                            var r = this.props.subscriptionProducts[0].price;
                            Object(E.g)(this.props.subscriptionProducts) && (r = Object(E.c)(this.props.subscriptionProducts[0])), e = o.createElement(w.Xa, {
                                display: w.X.Flex
                            }, o.createElement(w.Xa, {
                                margin: {
                                    right: 1,
                                    top: 1
                                }
                            }, o.createElement(v.a, {
                                isSubbedToTier: !1,
                                tierPrice: r,
                                "data-a-target": "tier1-subscribe-button",
                                handleSubAction: this.handleSubAction,
                                productName: this.props.subscriptionProducts[0].name,
                                url: this.props.subscriptionProducts[0].url || "",
                                isEsportChannel: !0
                            })))
                        } else e = this.props.reward.isPrimeOnly ? o.createElement(w.z, {
                            linkTo: h.a.tryPrimeURI,
                            targetBlank: !0,
                            "data-test-selector": n.TryPrime
                        }, Object(h.d)("Get Twitch Prime", "CampaignsMilestoneBalloon")) : this.props.user ? o.createElement(w.z, {
                            onClick: this.props.openBitsCard,
                            "data-test-selector": n.CheerNowButton
                        }, Object(h.d)("Cheer now", "CampaignsMilestoneBalloon")) : o.createElement(w.Xa, {
                            "data-test-selector": n.LoginSignup
                        }, o.createElement(y.a, {
                            login: this.props.login,
                            signup: this.props.signup
                        }));
                        return o.createElement(w.Xa, {
                            className: "esports-milestone-balloon-call-to-action"
                        }, e)
                    }, t
                }(o.PureComponent);
            var S = Object(c.connect)(function(e) {
                    return {
                        user: Object(p.e)(e)
                    }
                }, function(e) {
                    return Object(g.bindActionCreators)({
                        login: function() {
                            return Object(f.e)(b.a.EsportsCampaignTabsMilestoneBalloon)
                        },
                        signup: function() {
                            return Object(f.g)(b.a.EsportsCampaignTabsMilestoneBalloon)
                        }
                    }, e)
                })(C),
                P = a("cUCe"),
                x = a("81Gi"),
                I = (a("qGAq"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.getDescriptionText = function() {
                            var e = null;
                            return t.props.type === k.a.Twitch ? t.props.emoteType === k.b.Hero ? e = t.props.reward.isEntitled ? Object(h.d)("You’ve unlocked this Overwatch Hero emote to use anywhere on Twitch!", "CampaignsMilestoneBalloon") : Object(h.d)("Unlock one of 26 random Overwatch Hero Twitch emotes for every 100 Bits you Cheer.", "CampaignsMilestoneBalloon") : t.props.emoteType === k.b.Team ? e = t.props.reward.isEntitled ? Object(h.d)("You’ve unlocked this emote. Use it anywhere on Twitch to show your love for the team!", "CampaignsMilestoneBalloon") : Object(h.d)("Cheer 150 Bits or more using this team’s Cheermote and receive their emote.", "CampaignsMilestoneBalloon") : t.props.emoteType === k.b.Cheerbomb && (e = Object(h.d)("Cheer 250 Bits for a set of five emotes, 500 Bits for the second set and share with Chat.", "CampaignsMilestoneBalloon")) : t.props.insiderType ? e = t.props.reward.isPrimeOnly ? Object(h.d)("Included with the Overwatch League All-Access Pass 2018, only for Twitch Prime members.", "CampaignsMilestoneBalloon") : Object(h.d)("Included with the Overwatch League All-Access Pass 2018.", "CampaignsMilestoneBalloon") : t.props.type === k.a.Blizzard && (t.props.isErrorState ? e = Object(h.d)("Error redeeming reward, please try again later!", "CampaignsMilestoneBalloon") : t.props.globalThresholdReached ? t.props.globalThresholdReached && !t.props.userThresholdReached ? e = Object(h.d)("The community unlocked this loot! Cheer to join them and get it yourself!", "CampaignsMilestoneBalloon") : t.props.reward.isEntitled ? e = Object(h.d)("Now available to use in-game!", "CampaignsMilestoneBalloon") : t.props.isClaimable && (e = t.props.isBlizzardAccountLinked ? Object(h.d)("Now available! Click Redeem to use in-game.", "CampaignsMilestoneBalloon") : Object(h.d)("Now available! Link your Blizzard Account to use in-game.", "CampaignsMilestoneBalloon")) : e = Object(h.d)("Cheer with the community to unlock this loot!", "CampaignsMilestoneBalloon")), e
                        }, t
                    }
                    return s.__extends(t, e), t.prototype.render = function() {
                        var e = this.getDescriptionText(),
                            t = null;
                        if (this.props.type === k.a.Blizzard && !this.props.insiderType && this.props.participationThreshold > 0) {
                            var a = null;
                            a = this.props.userThresholdReached ? o.createElement(P.a, null) : o.createElement(x.a, null), t = o.createElement(w.Xa, {
                                display: w.X.Flex,
                                padding: {
                                    bottom: 1
                                }
                            }, o.createElement(w.Xa, {
                                padding: {
                                    right: .5
                                }
                            }, a), o.createElement(w.W, {
                                className: "esports-milestone-balloon-body__participation-text"
                            }, Object(h.d)("Cheer {amount} Bits", {
                                amount: Object(h.f)(this.props.participationThreshold)
                            }, "CampaignsMilestoneBalloon")))
                        }
                        return o.createElement(w.Xa, {
                            padding: {
                                top: 1,
                                x: 2,
                                bottom: 2
                            }
                        }, this.props.participationThreshold > 0 && t, o.createElement(w.W, {
                            "data-test-selector": r.Description
                        }, e), o.createElement(w.Xa, {
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
                N = a("TSYQ"),
                R = a("WlPE"),
                z = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return s.__extends(t, e), t.prototype.render = function() {
                        var e = o.createElement(w.W, {
                            "data-test-selector": i.RewardType,
                            color: w.O.Alt2
                        }, this.props.reward.description);
                        this.props.isEmote && (e = o.createElement(w.W, {
                            "data-test-selector": i.RewardType,
                            color: w.O.Link
                        }, Object(h.d)("Twitch Emote", "CampaignsMilestoneBalloon")));
                        var t, a = null;
                        a = this.props.isRestricted ? o.createElement(w.sb, {
                            "data-test-selector": i.MilestoneRestricted,
                            type: w.ub.Alert,
                            asset: w.tb.Ban
                        }) : this.props.isLocked ? o.createElement(w.sb, {
                            "data-test-selector": i.MilestoneLocked,
                            asset: w.tb.Lock
                        }) : o.createElement(w.sb, {
                            "data-test-selector": i.MilestoneUnlocked,
                            type: w.ub.Success,
                            asset: w.tb.Unlock
                        }), t = this.props.isHexagon ? o.createElement(d.a, {
                            imageURL: this.props.reward.imageURL
                        }) : o.createElement(R.a, {
                            imageURL: this.props.reward.imageURL,
                            size: R.c.Default,
                            noBorder: !0
                        });
                        var n = null;
                        n = this.props.requiresPass ? o.createElement(w.W, null, Object(h.d)("All-Access Pass", "CampaignsMilestoneBalloon")) : o.createElement(w.Xa, {
                            display: w.X.Flex,
                            alignItems: w.f.Center
                        }, o.createElement(w.sb, {
                            type: w.ub.Brand,
                            asset: w.tb.Bits
                        }), this.props.threshold > 0 && o.createElement(w.Pa, {
                            margin: {
                                left: .5
                            }
                        }, o.createElement(w.W, {
                            className: "esports-milestone-balloon__threshold",
                            bold: !0,
                            fontSize: w.Ca.Size5,
                            type: w.Vb.Span
                        }, Object(h.f)(this.props.threshold))));
                        var r = N("esports-milestone-balloon__image", {
                            "esports-milestone-balloon__image--blizzard": this.props.isHexagon
                        });
                        return o.createElement(w.Eb, {
                            borderBottom: !0,
                            display: w.X.Flex,
                            alignItems: w.f.Center,
                            padding: {
                                right: 1,
                                bottom: .5
                            }
                        }, o.createElement(w.Xa, {
                            className: r
                        }, t), o.createElement(w.Xa, {
                            margin: {
                                left: 1
                            }
                        }, e, o.createElement(w.W, {
                            bold: !0
                        }, this.props.reward.name)), o.createElement(w.Xa, {
                            textAlign: w.Rb.Right,
                            margin: {
                                left: "auto"
                            }
                        }, a, n))
                    }, t
                }(o.PureComponent),
                _ = a("QlRw"),
                T = a("UOrd"),
                A = (a("Zqs6"), function(e) {
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
                        var n = !!this.props.blizzardAccount && this.props.blizzardAccount.region === _.a.China,
                            r = !!this.props.blizzardAccount,
                            i = this.props.type === k.a.Twitch || this.props.insiderType === k.c.SubEmote,
                            s = !this.props.isBundle && (this.props.insiderType === k.c.HeroSkin || this.props.type === k.a.Blizzard),
                            l = n && (this.props.type === k.a.Blizzard || this.props.type === k.a.Insider),
                            d = !!this.props.insiderType;
                        return o.createElement(w.Xa, {
                            className: "esports-milestone-balloon",
                            textAlign: w.Rb.Left
                        }, o.createElement(z, {
                            reward: this.props.reward,
                            threshold: this.props.threshold,
                            requiresPass: d,
                            isEmote: i,
                            isHexagon: s,
                            isLocked: !a,
                            isRestricted: l
                        }), o.createElement(I, {
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
                            isBlizzardAccountLinked: r,
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
            var O = Object(c.connect)(function(e) {
                    return {
                        user: Object(p.e)(e)
                    }
                })(A),
                j = a("uLiP"),
                D = a("rC/K"),
                L = (a("JPbf"), a("Ar2k")),
                F = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.setContainerRef = function(e) {
                            return t.containerRef = e
                        }, t.onMouseEnter = function() {
                            if (t.containerRef) {
                                var e = !t.props.startDate || t.props.startDate <= new Date(Date.now()),
                                    a = t.props.reward && t.props.reward.id === j.d,
                                    n = t.props.reward && t.props.reward.id === j.a;
                                t.props.reward && e && t.props.tooltipLayer.showRich({
                                    from: t.containerRef,
                                    richContent: o.createElement(O, {
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
                        var e, t = this.props.objectiveTag === D.a.Collection && this.props.reward && !this.props.reward.canBeFulfilled && !this.props.reward.isEntitled,
                            a = void 0 !== this.props.globalProgress && this.props.globalProgress < this.props.threshold,
                            n = void 0 !== this.props.globalProgress && this.props.globalProgress >= this.props.threshold && void 0 !== this.props.userProgress && this.props.userProgress < this.props.participationThreshold || void 0 === this.props.globalProgress && void 0 !== this.props.userProgress && this.props.userProgress < this.props.participationThreshold,
                            r = this.props.emoteType && this.props.reward && !this.props.reward.isEntitled || this.props.insiderType !== k.c.InGameContent && void 0 !== this.props.hasInsiderPass && !this.props.hasInsiderPass,
                            i = !this.props.reward || this.props.startDate && this.props.startDate > new Date(Date.now()),
                            s = this.props.type === k.a.Twitch && this.props.emoteType || this.props.type === k.a.Insider && this.props.insiderType !== k.c.HeroSkin;
                        if (this.props.big) {
                            var c = this.props.reward ? this.props.reward.imageURL : "";
                            this.props.reward && this.props.reward.id === j.c && (c = l.c + "/owl-2017/insider-test/lucio-emote-static-alt.png"), e = o.createElement(w.Eb, {
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
                            var p = R.c.Default,
                                m = R.b.Default;
                            (this.props.type === k.a.Insider && this.props.insiderType === k.c.InGameContent || this.props.insiderType === k.c.Bits) && (m = R.b.Brand), this.props.type === k.a.Insider && this.props.insiderType === k.c.InGameContent ? p = R.c.Large : this.props.insiderType === k.c.Bits && (p = R.c.Medium), e = o.createElement(R.a, {
                                imageURL: this.props.reward ? this.props.reward.imageURL : "",
                                locked: r,
                                size: p,
                                borderType: m,
                                hasInsiderPass: this.props.insiderType === k.c.InGameContent && void 0 !== this.props.hasInsiderPass ? this.props.hasInsiderPass : void 0
                            })
                        } else e = o.createElement(d.a, {
                            imageURL: this.props.reward ? this.props.reward.imageURL : "",
                            size: this.props.size,
                            isUnavailable: a,
                            needsToCheerMore: void 0 !== this.props.hasInsiderPass ? !this.props.hasInsiderPass : n || t,
                            comingSoon: i
                        });
                        return o.createElement(w.Xa, {
                            className: "esports-milestone",
                            position: w.jb.Relative,
                            display: w.X.InlineFlex
                        }, o.createElement("div", {
                            className: "esports-milestone__clickable",
                            ref: this.setContainerRef
                        }, e))
                    }, t = s.__decorate([Object(L.c)()], t)
                }(o.Component),
                X = F;
            a.d(t, !1, function() {
                return F
            }), a.d(t, "a", function() {
                return X
            })
        },
        i4ay: function(e, t, a) {
            "use strict";
            var n, r = a("mrSG"),
                i = a("q1tI"),
                s = a("/7QA"),
                o = a("yR8l"),
                l = a("f00E"),
                d = a("3CMh"),
                c = a("4h+t"),
                p = a("Ue10"),
                m = (a("aUl8"), function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return r.__extends(t, e), t.prototype.shouldComponentUpdate = function(e) {
                        return this.props.displayName !== e.displayName || this.props.rank !== e.rank || this.props.score !== e.score || this.props.secondaryName !== e.secondaryName || this.props.imageURL !== e.imageURL
                    }, t.prototype.render = function() {
                        return i.createElement(p.Qa, {
                            display: p.X.Flex,
                            alignItems: p.f.Center,
                            borderBottom: !0,
                            padding: {
                                y: 1
                            }
                        }, i.createElement("li", {
                            className: "campaign-leaderboard-row"
                        }, i.createElement(p.Pa, {
                            margin: {
                                right: 1
                            }
                        }, i.createElement(p.W, {
                            "data-test-selector": "esports-leaderboard-row-rank",
                            color: p.O.Link,
                            bold: !0
                        }, Object(s.f)(this.props.rank))), this.props.imageURL && i.createElement(p.Xa, {
                            "data-test-selector": "esports-leaderboard-row-image-url",
                            margin: {
                                right: 1
                            }
                        }, i.createElement(p.q, {
                            src: this.props.imageURL,
                            size: 30,
                            alt: this.props.displayName + " Avatar"
                        })), i.createElement(p.Xa, {
                            margin: {
                                right: 1
                            }
                        }, this.props.secondaryName && i.createElement(p.W, {
                            "data-test-selector": "esports-leaderboard-row-secondary-name",
                            color: p.O.Link,
                            transform: p.Ub.Uppercase,
                            lineHeight: p.Ya.Heading
                        }, this.props.secondaryName), i.createElement(p.W, {
                            "data-test-selector": "esports-leaderboard-row-display-name",
                            type: p.Vb.H5,
                            bold: !0,
                            lineHeight: p.Ya.Heading
                        }, this.props.displayName)), i.createElement(p.Xa, {
                            display: p.X.Flex,
                            margin: {
                                left: "auto"
                            }
                        }, i.createElement(p.Xa, {
                            className: "campaign-leaderboard-row__cheermote"
                        }, i.createElement(d.a, {
                            prefix: "Cheer",
                            showImage: !0,
                            showAmount: !1,
                            formattedNumber: !0,
                            bitsConfig: Object(c.a)(),
                            amount: this.props.score,
                            animated: !1,
                            size: d.b.ExtraSmall
                        })), i.createElement(p.Pa, {
                            className: "campaign-leaderboard-row__amount"
                        }, i.createElement(p.W, {
                            "data-test-selector": "esports-leaderboard-row-score",
                            lineHeight: p.Ya.Body,
                            type: p.Vb.H4
                        }, Object(s.f)(this.props.score))))))
                    }, t
                }(i.Component)),
                u = (a("o5UI"), function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        return i.createElement(p.Qa, {
                            display: p.X.Flex,
                            alignItems: p.f.Center,
                            borderBottom: !0,
                            padding: {
                                y: 1,
                                left: 2
                            }
                        }, i.createElement("li", {
                            className: "campaign-leaderboard-self-row"
                        }, this.props.imageURL && i.createElement(p.Xa, {
                            "data-test-selector": "esports-leaderboard-row-image-url",
                            margin: {
                                right: 1
                            }
                        }, i.createElement(p.q, {
                            src: this.props.imageURL,
                            size: 30,
                            alt: this.props.displayName + " Avatar"
                        })), i.createElement(p.Xa, {
                            margin: {
                                right: 1
                            }
                        }, i.createElement(p.W, {
                            "data-test-selector": "esports-leaderboard-row-rank",
                            color: p.O.Link,
                            transform: p.Ub.Uppercase,
                            lineHeight: p.Ya.Heading
                        }, Object(s.d)("Rank: {rank}", {
                            rank: Object(s.f)(this.props.rank)
                        }, "CampaignsLeaderboardSelfRow")), i.createElement(p.W, {
                            "data-test-selector": "esports-leaderboard-row-display-name",
                            type: p.Vb.H5,
                            bold: !0,
                            lineHeight: p.Ya.Heading
                        }, this.props.displayName)), i.createElement(p.Xa, {
                            display: p.X.Flex,
                            margin: {
                                left: "auto"
                            }
                        }, i.createElement(p.Xa, {
                            className: "campaign-leaderboard-self-row__cheermote"
                        }, i.createElement(d.a, {
                            prefix: "Cheer",
                            showImage: !0,
                            showAmount: !1,
                            formattedNumber: !0,
                            bitsConfig: Object(c.a)(),
                            amount: this.props.score,
                            animated: !1,
                            size: d.b.ExtraSmall
                        })), i.createElement(p.Pa, {
                            className: "campaign-leaderboard-self-row__amount",
                            margin: {
                                right: 2
                            }
                        }, i.createElement(p.W, {
                            "data-test-selector": "esports-leaderboard-row-score",
                            lineHeight: p.Ya.Body,
                            type: p.Vb.H4
                        }, Object(s.f)(this.props.score))))))
                    }, t
                }(i.PureComponent)),
                h = a("VJHF"),
                g = a("NcrI");
            a("KUJM");
            ! function(e) {
                e.AllTeams = "allTeams", e.Atlantic = "atlantic", e.Pacific = "pacific", e.EU = "eu", e.NA = "na", e.KR = "kr", e.CN = "cn"
            }(n || (n = {}));
            var b = function(e) {
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
                return r.__extends(t, e), t.prototype.render = function() {
                    var e = this;
                    if (Object(s.d)("Rank: {rank}", {
                            rank: 1
                        }, "CampaignsLeaderboard"), this.props.data.loading) return i.createElement(p.Za, {
                        fillContent: !0
                    });
                    var t = this.props.data.users ? this.props.data.users[0] : null,
                        a = this.props.isTeam && t ? t.tournament : null,
                        r = this.props.leaderboardRows;
                    this.props.isTeam && this.state.activeTab !== n.AllTeams && (r = this.props.leaderboardRows.filter(function(t) {
                        var n = a && a.teams.find(function(e) {
                            return !!e && e.id.toUpperCase() === t.node.entryKey.toUpperCase()
                        });
                        if (n) return n.division.toLowerCase().includes(e.state.activeTab)
                    }));
                    var o = Math.ceil(r.length / this.props.pageSize),
                        d = this.props.pageSize * (this.state.showPage - 1),
                        c = d + this.props.pageSize,
                        g = r.slice(d, c).map(function(t) {
                            var n = {
                                rank: t.node.rank,
                                displayName: "Somebody",
                                score: t.node.score
                            };
                            if (e.props.isTeam && a) {
                                var r = a.teams.find(function(e) {
                                    return !!e && e.id.toUpperCase() === t.node.entryKey.toUpperCase()
                                });
                                r && (n.displayName = r.name, n.secondaryName = r.division, n.imageURL = r.logoURL)
                            } else if (!e.props.isTeam) {
                                var i = e.props.data.users ? e.props.data.users.find(function(e) {
                                    return !!e && e.id === t.node.entryKey
                                }) : null;
                                i && i.displayName && (n.displayName = i.displayName, i.profileImageURL && (n.imageURL = i.profileImageURL))
                            }
                            return n
                        }).map(function(t) {
                            return i.createElement(m, {
                                key: "leaderboard-row-" + (e.props.isTeam ? "team" : "user") + "-" + t.rank,
                                rank: t.rank,
                                score: t.score,
                                displayName: t.displayName,
                                imageURL: t.imageURL,
                                secondaryName: e.props.hideLocale ? void 0 : t.secondaryName
                            })
                        }),
                        b = this.props.pageSize - g.length % this.props.pageSize;
                    if (b !== this.props.pageSize)
                        for (var f = 0; f < b; f++) g.push(i.createElement(p.Xa, {
                            key: "leaderboard-blank-row-" + f,
                            className: "campaign-leaderboard__blank-row"
                        }));
                    var k = [];
                    for (f = 1; f <= o; f++) {
                        var v = f === this.state.showPage ? p.r.Accent : p.r.Alt;
                        k.push(i.createElement(p.Qa, {
                            className: "campaign-leaderboard__buttons",
                            padding: 1,
                            key: "leaderboard-page-pip-" + Object(l.a)()
                        }, i.createElement("button", {
                            onClick: this.pagePipClick,
                            "data-page-number": f
                        }, i.createElement(p.Eb, {
                            border: !0,
                            padding: .5,
                            display: p.X.Block,
                            background: v,
                            borderRadius: p.x.Rounded
                        }))))
                    }
                    var E = null;
                    if (this.props.isTeam) {
                        var y = null;
                        this.props.domain === h.c ? y = i.createElement(i.Fragment, null, i.createElement(p.Fb, {
                            active: this.state.activeTab === n.NA,
                            onClick: this.tabClick,
                            "data-tab-id": n.NA
                        }, i.createElement(p.W, {
                            type: p.Vb.H4
                        }, Object(s.d)("NA", "CampaignsProgressTab"))), i.createElement(p.Fb, {
                            active: this.state.activeTab === n.EU,
                            onClick: this.tabClick,
                            "data-tab-id": n.EU
                        }, i.createElement(p.W, {
                            type: p.Vb.H4
                        }, Object(s.d)("EU", "CampaignsProgressTab"))), i.createElement(p.Fb, {
                            active: this.state.activeTab === n.KR,
                            onClick: this.tabClick,
                            "data-tab-id": n.KR
                        }, i.createElement(p.W, {
                            type: p.Vb.H4
                        }, Object(s.d)("KR", "CampaignsProgressTab"))), i.createElement(p.Fb, {
                            active: this.state.activeTab === n.CN,
                            onClick: this.tabClick,
                            "data-tab-id": n.CN
                        }, i.createElement(p.W, {
                            type: p.Vb.H4
                        }, Object(s.d)("CN", "CampaignsProgressTab")))) : this.props.domain === h.f && (y = i.createElement(i.Fragment, null, i.createElement(p.Fb, {
                            active: this.state.activeTab === n.Atlantic,
                            onClick: this.tabClick,
                            "data-tab-id": n.Atlantic
                        }, i.createElement(p.W, {
                            type: p.Vb.H4
                        }, Object(s.d)("Atlantic", "CampaignsProgressTab"))), i.createElement(p.Fb, {
                            active: this.state.activeTab === n.Pacific,
                            onClick: this.tabClick,
                            "data-tab-id": n.Pacific
                        }, i.createElement(p.W, {
                            type: p.Vb.H4
                        }, Object(s.d)("Pacific", "CampaignsProgressTab"))))), E = i.createElement(p.Xa, {
                            padding: {
                                bottom: 2
                            }
                        }, i.createElement(p.Gb, null, i.createElement(p.Fb, {
                            active: this.state.activeTab === n.AllTeams,
                            onClick: this.tabClick,
                            "data-tab-id": n.AllTeams
                        }, i.createElement(p.W, {
                            type: p.Vb.H4
                        }, Object(s.d)("All Teams", "CampaignsProgressTab"))), y))
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
                        S && S.displayName && (C.displayName = S.displayName, S.profileImageURL && (C.imageURL = S.profileImageURL)), w = i.createElement(u, {
                            rank: C.rank,
                            score: C.score,
                            displayName: C.displayName,
                            imageURL: C.imageURL
                        })
                    }
                    return i.createElement(p.Xa, {
                        className: "campaign-leaderboard",
                        display: p.X.Flex,
                        flexDirection: p.Aa.Column,
                        justifyContent: p.Wa.Between,
                        flexGrow: 1
                    }, E, i.createElement(p.Xa, {
                        className: "campaign-leaderboard__rows"
                    }, i.createElement("ul", null, g, this.props.userRow && w)), i.createElement(p.Xa, {
                        display: p.X.Flex,
                        justifyContent: p.Wa.Center,
                        margin: {
                            top: 2
                        }
                    }, k.length > 1 && k))
                }, t = r.__decorate([Object(o.a)(g, {
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
            }(i.Component);
            a.d(t, "a", function() {
                return b
            })
        },
        jAjM: function(e, t, a) {
            "use strict";
            var n, r = a("mrSG"),
                i = a("TSYQ"),
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
                return r.__extends(t, e), t.prototype.render = function() {
                    var e, t, a = "esports-hexagon__mask--unavailable-" + Object(o.a)(),
                        r = "esports-hexagon__mask--cheer-more-" + Object(o.a)(),
                        c = "esports-hexagon__pattern--" + Object(o.a)();
                    this.props.isUnavailable ? (e = "url(#" + a, t = "esports-hexagon__mask--unavailable") : this.props.needsToCheerMore && (e = "url(#" + r, t = "esports-hexagon__mask--cheer-more");
                    var p = /Edge/.test(window.navigator.userAgent) ? 5 : Object(l.b)(window.navigator.userAgent) ? -25 : 0,
                        m = /Edge/.test(window.navigator.userAgent) ? -5 : Object(l.b)(window.navigator.userAgent) ? 8 : 5,
                        u = /Edge/.test(window.navigator.userAgent) ? 155 : 131,
                        h = /Edge/.test(window.navigator.userAgent) ? 90 : Object(l.b)(window.navigator.userAgent) ? 150 : 100,
                        g = Object(l.b)(window.navigator.userAgent) ? 150 : 131,
                        b = Object(l.b)(window.navigator.userAgent) ? 0 : 10,
                        f = i("esports-hexagon__svg", {
                            "esports-hexagon__svg--large": this.props.size === n.Large
                        }, {
                            "esports-hexagon__svg--small": this.props.size === n.Small
                        }, {
                            "esports-hexagon__svg--medium": this.props.size === n.Medium
                        }, {
                            "esports-hexagon__svg--small-blizzard": !this.props.comingSoon && this.props.size === n.Small
                        }),
                        k = i("esports-hexagon__svg--background", {
                            "esports-hexagon__svg--background-coming-soon": this.props.comingSoon
                        }),
                        v = i("esports-hexagon__svg--fill", {
                            "esports-hexagon__svg--fill-coming-soon": this.props.comingSoon
                        });
                    return s.createElement(d.Xa, {
                        className: "esports-hexagon",
                        display: d.X.Flex,
                        flexDirection: d.Aa.Column
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
                        id: a
                    }, s.createElement("feColorMatrix", {
                        type: "matrix",
                        values: "0.04 0 0 0 0 0 0.04 0 0 0 0 0 0.04 0 0 0 0 0 1 0"
                    })), s.createElement("filter", {
                        id: r
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
            var r = {};
            n.definitions = n.definitions.concat(function(e) {
                return e.filter(function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var t = e.name.value;
                    return !r[t] && (r[t] = !0, !0)
                })
            }(a("VK0B").definitions)), e.exports = n
        },
        ko4C: function(e, t, a) {},
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
            var r = {};
            n.definitions = n.definitions.concat(function(e) {
                return e.filter(function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var t = e.name.value;
                    return !r[t] && (r[t] = !0, !0)
                })
            }(a("fhkr").definitions)), e.exports = n
        },
        n7kk: function(e, t, a) {
            "use strict";
            a.r(t);
            var n = a("/MKj"),
                r = a("kRBY"),
                i = a("mrSG"),
                s = a("q1tI"),
                o = a("oJmH"),
                l = a("yR8l"),
                d = a("eDVu"),
                c = a("0Log"),
                p = a("/aPz"),
                m = a("4rCz"),
                u = a("/7QA"),
                h = a("jAjM"),
                g = a("uLiP"),
                b = a("hRrL"),
                f = a("Ue10"),
                k = (a("6mxx"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            activeMilestoneID: void 0
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        return s.createElement("div", {
                            className: "campaign-reward-group"
                        }, s.createElement(f.Xa, {
                            position: f.jb.Relative
                        }, s.createElement(f.Xa, {
                            padding: {
                                bottom: 1
                            }
                        }, s.createElement(f.W, {
                            "data-test-selector": "campaign-reward-group-title",
                            type: f.Vb.H3
                        }, this.props.title), this.props.totalRewards > 0 && s.createElement(f.Xa, {
                            className: "campaign-reward-group__entitled-amount",
                            attachRight: !0,
                            position: f.jb.Absolute
                        }, s.createElement(f.Xa, {
                            className: "campaign-claim-all-rewards-button",
                            display: f.X.InlineFlex,
                            margin: {
                                right: 1
                            }
                        }, s.createElement(f.W, {
                            "data-test-selector": "campaign-reward-group-entitled-rewards",
                            fontSize: f.Ca.Size3
                        }, Object(u.d)("{entitled} / {total}", {
                            entitled: Object(u.f)(this.props.rewardsEntitled),
                            total: Object(u.f)(this.props.totalRewards)
                        }, "CampaignsRewardGroup"))))), s.createElement(f.Xa, {
                            display: f.X.Flex,
                            justifyContent: f.Wa.Between
                        }, s.createElement(f.W, {
                            "data-test-selector": "campaign-reward-group-description"
                        }, this.props.description), this.props.showClaimAllButton && this.props.tournamentID && s.createElement(f.Xa, {
                            margin: {
                                left: 4
                            }
                        }, s.createElement(b.a, {
                            tournamentID: this.props.tournamentID,
                            enabled: !!this.props.canClaimRewards
                        })))), s.createElement(f.Xa, {
                            "data-test-selector": "campaign-reward-group-display-children",
                            padding: {
                                bottom: 5
                            },
                            position: f.jb.Relative
                        }, this.props.children))
                    }, t
                }(s.Component)),
                v = a("TSYQ"),
                E = a("huSm"),
                y = a("+z1J"),
                w = (a("0/kz"), function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        var e = this,
                            t = this.props.milestones.find(function(t) {
                                return t.rewards.some(function(t) {
                                    return t.id === e.props.reward.id
                                })
                            }),
                            a = t || this.props.milestones.length < 1 ? this.props.reward : void 0,
                            n = this.props.type === y.a.Blizzard || this.props.type === y.a.Twitch && this.props.reward.isEntitled || this.props.insiderType === y.c.Bits,
                            r = v({
                                "esports-reward-row-item__emote": !!this.props.emoteType
                            }, {
                                "esports-reward-row-item__bits": this.props.type === y.a.Insider && this.props.insiderType === y.c.Bits
                            }, {
                                "esports-reward-row-item__badge": this.props.type === y.a.Insider && this.props.insiderType === y.c.Badge
                            }, {
                                "esports-reward-row-item__igc": this.props.type === y.a.Insider && this.props.insiderType === y.c.InGameContent
                            });
                        return s.createElement(f.Pa, {
                            className: r,
                            padding: this.props.emoteType && {
                                right: 0,
                                bottom: 2
                            },
                            textAlign: f.Rb.Center
                        }, s.createElement("li", null, s.createElement(E.a, {
                            milestoneID: t ? t.id : "",
                            type: this.props.type,
                            emoteType: this.props.emoteType,
                            insiderType: this.props.insiderType,
                            globalProgress: this.props.globalProgress,
                            userProgress: this.props.userProgress,
                            objectiveTag: t && t.objectiveTag,
                            reward: a,
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
                        }), a && s.createElement(f.Xa, {
                            "data-test-selector": "esports-reward-row-item-title",
                            display: f.X.Flex,
                            flexDirection: f.Aa.Column,
                            alignItems: f.f.Center,
                            padding: {
                                top: 1
                            }
                        }, s.createElement(f.W, {
                            noWrap: this.props.insiderType !== y.c.Badge,
                            bold: !0
                        }, a.name), n && s.createElement(f.W, {
                            "data-test-selector": "esports-reward-row-item-subtext",
                            noWrap: !0,
                            color: f.O.Alt2
                        }, a.description)), !t && this.props.type === y.a.Blizzard && !this.props.insiderType && s.createElement(f.Xa, {
                            "data-test-selector": "esports-reward-row-item-coming-soon",
                            display: f.X.Flex,
                            flexDirection: f.Aa.Column,
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
                    return i.__extends(t, e), t.prototype.render = function() {
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
                            var a = this.props.secondaryType;
                            t.push.apply(t, this.props.secondaryRewards.map(function(t) {
                                return s.createElement(w, {
                                    key: t.id,
                                    reward: t,
                                    milestones: e.props.milestones,
                                    type: a,
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
                        }, s.createElement(f.Pa, {
                            display: f.X.Flex,
                            flexWrap: f.Ba.Wrap,
                            flexDirection: f.Aa.Row,
                            justifyContent: f.Wa.Start,
                            alignItems: f.f.Baseline
                        }, s.createElement("ul", null, t)))
                    }, t
                }(s.Component),
                S = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        return s.createElement(f.Xa, {
                            className: "esports-reward-subgroup",
                            display: f.X.InlineBlock,
                            margin: {
                                top: 2,
                                right: 2
                            }
                        }, s.createElement(f.Eb, {
                            "data-test-selector": "esports-reward-group-title",
                            borderBottom: !0
                        }, s.createElement(f.Xa, {
                            padding: {
                                bottom: 1
                            }
                        }, s.createElement(f.W, {
                            color: f.O.Link,
                            transform: f.Ub.Uppercase,
                            bold: !0
                        }, this.props.title)), s.createElement(f.Xa, {
                            padding: {
                                bottom: 1
                            }
                        }, this.props.description && s.createElement(f.W, null, this.props.description))), s.createElement(f.Xa, {
                            "data-test-selector": "esports-reward-group-display-children"
                        }, this.props.children))
                    }, t
                }(s.PureComponent),
                P = a("QlRw"),
                x = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
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
                        var a = Object(u.d)("Overwatch Skins, Player Icons & Sprays", "CampaignsGlobalRewards"),
                            n = Object(u.d)("Overwatch in-game items you’ve unlocked with the All-Access Pass or by Cheering with other community members. Collect all {amount}!", {
                                amount: e
                            }, "CampaignsGlobalRewards"),
                            r = 0,
                            i = 0;
                        this.props.globalRewards.length > 0 && (r = e, i = this.props.globalRewards.filter(function(e) {
                            return e.isEntitled
                        }).length, this.props.individualMilestones && this.props.individualRewards && (i += this.props.individualRewards.filter(function(e) {
                            return e.isEntitled
                        }).length), i += this.props.insiderRewards.heroSkins.filter(function(e) {
                            return e.isEntitled
                        }).length, i += this.props.insiderRewards.inGameContent.filter(function(e) {
                            return e.isEntitled
                        }).length, t.length > 0 && (i += t.filter(function(e) {
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
                            title: a,
                            description: n,
                            totalRewards: r,
                            rewardsEntitled: i,
                            tournamentID: this.props.tournamentId,
                            showClaimAllButton: !!this.props.blizzardAccount && this.props.blizzardAccount.region !== P.a.China,
                            canClaimRewards: this.props.canClaimRewards
                        }, s.createElement(S, {
                            title: Object(u.d)("Global Progress Rewards", "CampaignsGlobalRewards")
                        }, s.createElement(C, {
                            type: y.a.Blizzard,
                            rewards: this.props.globalRewards,
                            milestones: this.props.globalMilestones,
                            milestoneSize: h.b.Large,
                            blizzardAccount: this.props.blizzardAccount,
                            userProgress: this.props.individualProgress,
                            globalProgress: this.props.globalProgress
                        })), this.props.individualRewards && this.props.individualRewards.length > 0 && this.props.individualMilestones && s.createElement(f.Pa, {
                            padding: {
                                top: 2
                            }
                        }, s.createElement(S, {
                            title: Object(u.d)("Individual Progress Rewards", "CampaignsGlobalRewards")
                        }, s.createElement(C, {
                            type: y.a.Blizzard,
                            rewards: this.props.individualRewards,
                            milestones: this.props.individualMilestones,
                            milestoneSize: h.b.Large,
                            blizzardAccount: this.props.blizzardAccount,
                            userProgress: this.props.individualProgress,
                            globalProgress: this.props.globalProgress
                        }))), this.props.collectionMilestones && this.props.collectionMilestones.length > 0 && s.createElement(f.Pa, {
                            padding: {
                                top: 2
                            }
                        }, s.createElement(S, {
                            title: Object(u.d)("Team Emote Collection", "CampaignsGlobalRewards")
                        }, s.createElement(C, {
                            type: y.a.Blizzard,
                            rewards: t,
                            milestones: this.props.collectionMilestones,
                            milestoneSize: h.b.Large,
                            blizzardAccount: this.props.blizzardAccount
                        }))), s.createElement(f.Pa, {
                            padding: {
                                top: 2
                            }
                        }, s.createElement(S, {
                            title: Object(u.d)("All-Access Pass Rewards", "CampaignsGlobalRewards")
                        }, d && c && s.createElement(f.Ja, null, s.createElement(f.P, {
                            cols: {
                                default: 12,
                                xl: 6
                            }
                        }, s.createElement(C, {
                            type: y.a.Blizzard,
                            insiderType: y.c.HeroSkin,
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
                            type: y.a.Blizzard,
                            insiderType: y.c.HeroSkin,
                            rewards: [c],
                            milestones: this.props.insiderMilestones,
                            blizzardAccount: this.props.blizzardAccount,
                            hasInsiderPass: this.props.hasInsiderPass,
                            subscriptionProducts: this.props.subscriptionProducts,
                            big: !0
                        }))), l && s.createElement(C, {
                            type: y.a.Blizzard,
                            insiderType: y.c.HeroSkin,
                            rewards: [l],
                            milestones: this.props.insiderMilestones,
                            blizzardAccount: this.props.blizzardAccount,
                            hasInsiderPass: this.props.hasInsiderPass,
                            subscriptionProducts: this.props.subscriptionProducts,
                            big: !0
                        }), s.createElement(C, {
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
                }(s.Component),
                I = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        var e = Object(u.d)("Badges", "CampaignsBadgeRewards");
                        return s.createElement(S, {
                            title: e,
                            description: ""
                        }, s.createElement(f.Xa, {
                            padding: {
                                top: 2
                            }
                        }, s.createElement(C, {
                            type: y.a.Insider,
                            insiderType: y.c.Badge,
                            milestones: [],
                            rewards: this.props.rewards,
                            hasInsiderPass: this.props.hasInsiderPass,
                            subscriptionProducts: this.props.subscriptionProducts
                        })))
                    }, t
                }(s.Component),
                N = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        var e = Object(u.d)("Bits", "CampaignsBitsRewards");
                        return s.createElement(S, {
                            title: e,
                            description: ""
                        }, s.createElement(f.Xa, {
                            padding: {
                                top: 2
                            }
                        }, s.createElement(C, {
                            type: y.a.Insider,
                            insiderType: y.c.Bits,
                            milestones: this.props.milestones,
                            rewards: this.props.rewards,
                            hasInsiderPass: this.props.hasInsiderPass,
                            subscriptionProducts: this.props.subscriptionProducts,
                            userHasPrime: this.props.userHasPrime
                        })))
                    }, t
                }(s.Component),
                R = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        var e = Object(u.d)("Quote Emotes", "CampaignsCheerbombEmotes"),
                            t = Object(u.d)("Unlock 5 emotes by cheering 250 bits or more! Cheer 500 bits or more and you’ll unlock the other 5 and trigger a shower of gifts for others in Chat.", "CampaignsCheerbombEmotes");
                        return s.createElement(S, {
                            title: e,
                            description: t
                        }, s.createElement(f.Xa, {
                            padding: {
                                top: 2
                            }
                        }, s.createElement(C, {
                            type: y.a.Twitch,
                            emoteType: y.b.Cheerbomb,
                            milestones: [],
                            rewards: this.props.rewards
                        })))
                    }, t
                }(s.Component),
                z = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        var e = this.props.rewards.length,
                            t = Object(u.d)("Hero Emotes", "CampaignsHeroEmotes"),
                            a = Object(u.d)("Unlock a random Twitch emote featuring one of {amount} Overwatch Heroes for every 100 Bits you Cheer. Guaranteed no duplicates! Collect them all!", {
                                amount: e
                            }, "CampaignsHeroEmotes");
                        return s.createElement(S, {
                            title: t,
                            description: a
                        }, s.createElement(f.Xa, {
                            padding: {
                                top: 2
                            }
                        }, s.createElement(C, {
                            type: y.a.Twitch,
                            emoteType: y.b.Hero,
                            milestones: this.props.milestones,
                            rewards: this.props.rewards
                        })))
                    }, t
                }(s.Component),
                _ = a("Sk0q"),
                T = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        var e = Object(u.d)("All-Access Pass Emotes", "CampaignsInsiderEmotes");
                        if (!this.props.subscriptionProducts || this.props.subscriptionProducts.length < 1) return null;
                        var t = this.props.subscriptionProducts[0],
                            a = Object(_.b)(t, this.props.hasInsiderPass);
                        return s.createElement(S, {
                            title: e,
                            description: ""
                        }, s.createElement(f.Xa, {
                            padding: {
                                top: 2
                            }
                        }, s.createElement(C, {
                            type: y.a.Insider,
                            emoteType: y.b.Insider,
                            insiderType: y.c.SubEmote,
                            milestones: [],
                            rewards: a,
                            hasInsiderPass: this.props.hasInsiderPass,
                            subscriptionProducts: this.props.subscriptionProducts
                        })))
                    }, t
                }(s.PureComponent),
                A = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        var e = Object(u.d)("Team Emotes", "CampaignsTeamEmotes"),
                            t = Object(u.d)("Cheer to show your favorite team some love! Cheers 150 Bits or more using a team’s Cheermote and unlock their Twitch emote.", "CampaignsTeamEmotes");
                        return s.createElement(S, {
                            title: e,
                            description: t
                        }, s.createElement(f.Xa, {
                            padding: {
                                top: 2
                            }
                        }, s.createElement(C, {
                            type: y.a.Twitch,
                            emoteType: y.b.Team,
                            milestones: this.props.milestones,
                            rewards: this.props.rewards
                        })))
                    }, t
                }(s.Component),
                O = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.getRewardCounts = function() {
                            var e = t.props.rewards,
                                a = e.cheerbomb,
                                n = e.individual,
                                r = e.team,
                                i = e.insider,
                                s = 0,
                                o = 0,
                                l = n.filter(function(e) {
                                    return "emote" === e.type
                                });
                            l.length > 0 && (s += l.length, o += l.filter(function(e) {
                                return e.isEntitled
                            }).length), r.length > 0 && (s += r.length, o += r.filter(function(e) {
                                return e.isEntitled
                            }).length), a.length > 0 && (s += a.length, o += a.filter(function(e) {
                                return e.isEntitled
                            }).length);
                            var d = t.props.subscriptionProducts && t.props.subscriptionProducts.length > 0 ? Object(_.b)(t.props.subscriptionProducts[0], t.props.hasInsiderPass) : [];
                            return d.length > 0 && (s += d.length, o += d.filter(function(e) {
                                return e.isEntitled
                            }).length), t.props.badgeRewards.length > 0 && (s += t.props.badgeRewards.length, o += t.props.badgeRewards.filter(function(e) {
                                return e.isEntitled
                            }).length), i.bits.length > 0 && (s += i.bits.length, o += i.bits.filter(function(e) {
                                return e.isEntitled
                            }).length), {
                                totalRewards: s,
                                rewardsEntitled: o
                            }
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        var e = Object(u.d)("Twitch Rewards", "CampaignsTwitchRewards"),
                            t = Object(u.d)("Unlock exclusive Twitch Rewards by Cheering for your favorite team and by purchasing the Overwatch League All-Access Pass", "CampaignsTwitchRewards"),
                            a = this.getRewardCounts(),
                            n = a.totalRewards,
                            r = a.rewardsEntitled;
                        return s.createElement(k, {
                            title: e,
                            description: t,
                            totalRewards: n,
                            rewardsEntitled: r,
                            showClaimAllButton: !1,
                            canClaimRewards: !1
                        }, this.props.rewards.insider.bits.length > 0 && s.createElement(f.Xa, {
                            padding: {
                                top: 2
                            }
                        }, s.createElement(N, {
                            milestones: this.props.insiderMilestones,
                            rewards: this.props.rewards.insider.bits,
                            hasInsiderPass: this.props.hasInsiderPass,
                            subscriptionProducts: this.props.subscriptionProducts,
                            userHasPrime: this.props.userHasPrime
                        })), s.createElement(f.Xa, {
                            padding: {
                                top: 2
                            }
                        }, s.createElement(z, {
                            milestones: this.props.inidividualMilestones,
                            rewards: this.props.rewards.individual.filter(function(e) {
                                return "emote" === e.type
                            })
                        })), s.createElement(f.Xa, {
                            padding: {
                                top: 2
                            }
                        }, s.createElement(A, {
                            milestones: this.props.teamMilestones,
                            rewards: this.props.rewards.team
                        })), this.props.rewards.cheerbomb.length > 0 && s.createElement(f.Xa, {
                            padding: {
                                top: 2
                            }
                        }, s.createElement(R, {
                            rewards: this.props.rewards.cheerbomb
                        })), s.createElement(f.Xa, {
                            padding: {
                                top: 2
                            }
                        }, s.createElement(T, {
                            subscriptionProducts: this.props.subscriptionProducts,
                            hasInsiderPass: this.props.hasInsiderPass
                        })), s.createElement(f.Xa, {
                            padding: {
                                top: 2
                            }
                        }, s.createElement(I, {
                            rewards: this.props.badgeRewards,
                            hasInsiderPass: this.props.hasInsiderPass,
                            subscriptionProducts: this.props.subscriptionProducts
                        })))
                    }, t
                }(s.Component),
                j = a("rC/K"),
                D = a("/5u6"),
                L = a("bwyL"),
                F = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            canClaimRewards: !1
                        }, t.getIndividualMilestone = function() {
                            return t.getMilestoneForType(D.a.Individual)
                        }, t.getTeamMilestone = function() {
                            return t.getMilestoneForType(D.a.Team)
                        }, t.getInsiderMilestones = function() {
                            return t.getMilestoneForType(D.a.Insider)
                        }, t.getMilestoneForType = function(e) {
                            return t.props.data && t.props.data.user && t.props.data.user.tournament && t.props.data.user.tournament.self ? t.props.data.user.tournament.self.progress.milestones.filter(function(t) {
                                return t.objectiveTag === e
                            }) : []
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.componentDidUpdate = function() {
                        if (this.props.data && !this.props.data.loading && !this.props.data.error && this.props.data.user && this.props.data.user.tournament) {
                            var e = this.props.campaignProperties,
                                t = !1;
                            if (void 0 !== e) t = e.objectives && e.objectives.some(function(e) {
                                return !!e.milestones && e.milestones.some(function(e) {
                                    return !!e.rewards && e.rewards.some(function(e) {
                                        return !!e.canBeFulfilled
                                    })
                                })
                            }) || !1;
                            else if (this.props.data.user.tournament.rewards) {
                                var a = this.props.data.user.tournament.rewards,
                                    n = a.global,
                                    r = a.team,
                                    i = a.individual,
                                    s = a.insider;
                                t = n.concat(r, i, s.heroSkins, s.inGameContent).some(function(e) {
                                    return e.canBeFulfilled
                                })
                            }
                            this.state.canClaimRewards !== t && this.setState({
                                canClaimRewards: t
                            })
                        }
                    }, t.prototype.render = function() {
                        if (!this.props.data || this.props.data.loading) return s.createElement(f.Xa, {
                            fullHeight: !0,
                            fullWidth: !0,
                            textAlign: f.Rb.Center,
                            padding: {
                                top: 4
                            }
                        }, s.createElement(f.Za, {
                            fillContent: !0
                        }));
                        if (this.props.data && this.props.data.error || !this.props.data.user || !this.props.data.user.tournament || !this.props.data.user.tournament.rewards) return null;
                        var e = this.props.data.user.tournament.progress.milestones,
                            t = this.getIndividualMilestone(),
                            a = this.getTeamMilestone(),
                            n = this.getInsiderMilestones(),
                            r = this.props.data.user.tournament.progress.milestones.slice();
                        this.props.data.user.tournament.self && r.concat.apply(r, this.props.data.user.tournament.self.progress.milestones.filter(function(e) {
                            return e.rewards.every(function(e) {
                                return "igc" === e.type
                            })
                        }));
                        var i = !!(this.props.user && this.props.data && this.props.data.user && this.props.data.user.self && this.props.data.user.self.subscriptionBenefit),
                            o = this.props.data.user.broadcastBadges ? this.props.data.user.broadcastBadges.reduce(function(e, t) {
                                if (!t || "subscriber" !== t.setID) return e;
                                var a = Object(_.a)(t, i);
                                return a && e.push(a), e
                            }, []) : [],
                            l = this.props.data.user.tournament.rewards.insider.badges.concat(o),
                            d = this.props.campaignProperties && this.props.campaignProperties.objectives && this.props.campaignProperties.objectives.filter(function(e) {
                                return e.tag === j.a.Collection
                            }),
                            c = d && d.reduce(function(e, t) {
                                return t.milestones ? e.concat(t.milestones) : e
                            }, []),
                            p = this.props.data.user.subscriptionProducts ? this.props.data.user.subscriptionProducts.filter(this.notEmpty) : [];
                        return s.createElement(f.Xa, {
                            margin: {
                                y: 2
                            }
                        }, s.createElement(f.Xa, {
                            margin: {
                                bottom: 2
                            }
                        }, s.createElement(x, {
                            globalRewards: this.props.data.user.tournament.rewards.global,
                            globalProgress: this.props.data.user.tournament.progress.amount,
                            globalMilestones: e,
                            individualRewards: this.props.data.user.tournament.rewards.individual.filter(function(e) {
                                return "igc" === e.type
                            }),
                            individualProgress: this.props.data.user.tournament.self && this.props.data.user.tournament.self.progress.amount || void 0,
                            individualMilestones: this.props.data.user.tournament.self && this.props.data.user.tournament.self.progress.milestones || void 0,
                            insiderRewards: this.props.data.user.tournament.rewards.insider,
                            insiderMilestones: n,
                            collectionMilestones: c,
                            blizzardAccount: this.props.blizzardAccount,
                            tournamentId: this.props.data.user.tournament.id,
                            canClaimRewards: this.state.canClaimRewards,
                            hasInsiderPass: i,
                            subscriptionProducts: p
                        })), s.createElement(O, {
                            inidividualMilestones: t,
                            teamMilestones: a,
                            insiderMilestones: n,
                            rewards: this.props.data.user.tournament.rewards,
                            badgeRewards: l,
                            hasInsiderPass: i,
                            subscriptionProducts: p,
                            userHasPrime: this.props.userHasPrime
                        }))
                    }, t.prototype.notEmpty = function(e) {
                        return null !== e && void 0 !== e
                    }, t
                }(s.Component),
                X = Object(o.compose)(Object(l.a)(L, {
                    options: function(e) {
                        return {
                            variables: {
                                channelID: e.channelID
                            }
                        }
                    }
                }), Object(d.a)(function(e) {
                    return {
                        topic: e.user ? Object(p.F)(e.user.id) : "",
                        query: L,
                        variables: {
                            channelID: e.channelID
                        },
                        skip: !e.user,
                        type: c.PubsubMessageType.UserCampaignRewardEvent,
                        mutator: function(t, a) {
                            if (!(t.data.contents.length < 1) && (m.l.debug("got individual reward message for reward: " + t.data.contents[0].id), a && a.user && a.user.tournament && a.user.tournament.self)) return e && e.data && e.data.refetch && e.data.refetch(), a
                        }
                    }
                }))(F);
            var M = Object(n.connect)(function(e) {
                return {
                    user: Object(r.e)(e)
                }
            })(X);
            a.d(t, "PublicProps", function() {}), a.d(t, "CampaignsRewardsTab", function() {
                return M
            })
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
                r = a("TSYQ"),
                i = a("q1tI"),
                s = a("/7QA"),
                o = a("yR8l"),
                l = a("5zXJ"),
                d = a("jAjM"),
                c = a("WlPE"),
                p = a("Ue10"),
                m = (a("PvlP"), function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return n.__extends(t, e), t.prototype.render = function() {
                        return i.createElement(p.Xa, {
                            className: "insider-pass-full-skin-reward",
                            padding: {
                                x: 1
                            },
                            display: p.X.Flex,
                            flexDirection: p.Aa.Column
                        }, i.createElement("img", {
                            className: "insider-pass-full-skin-reward__image",
                            src: this.props.imageURL
                        }), i.createElement(p.Xa, {
                            textAlign: p.Rb.Center
                        }, i.createElement(p.W, {
                            fontSize: p.Ca.Size4,
                            bold: !0
                        }, this.props.name)), i.createElement(p.Xa, {
                            textAlign: p.Rb.Center
                        }, i.createElement(p.W, {
                            color: p.O.Alt2
                        }, this.props.subText)))
                    }, t
                }(i.PureComponent)),
                u = a("YkUe"),
                h = a("hRrL"),
                g = a("7TMk"),
                b = (a("nCSL"), "rewards-purchase-owl2018-playerspack"),
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
                    return n.__extends(t, e), t.prototype.render = function() {
                        if (!this.props.data || this.props.data.loading) return i.createElement(p.Za, null);
                        if (this.props.data && this.props.data.error || !this.props.data.user || !this.props.data.user.tournament || !this.props.data.user.tournament.rewards) return null;
                        var e = this.props.insiderPurchaseState === u.a.PostPurchase,
                            t = r("insider-pass-rewards__item", {
                                "insider-pass-rewards__item--post-purchase": e
                            }),
                            a = !!this.props.data.user.tournament.rewards.insider.heroSkins.find(function(e) {
                                return e.id === b
                            }),
                            n = !!this.props.data.user.tournament.rewards.insider.heroSkins.find(function(e) {
                                return "rewards-purchase-owl2018-allstars" === e.id
                            }),
                            o = this.props.data.user.tournament.rewards.insider.heroSkins.find(function(e) {
                                return e.id === f
                            }) || null,
                            l = [];
                        if (this.props.insiderPurchaseState === u.a.PrePurchase) l = this.props.data.user && this.props.data.user.tournament && this.props.data.user.tournament.rewards ? this.props.data.user.tournament.rewards.insider.heroSkins.filter(function(e) {
                            return e.id !== b && e.id !== f && "rewards-purchase-owl2018-allstars" !== e.id
                        }).map(function(e) {
                            return i.createElement(m, {
                                key: e.name,
                                name: e.name,
                                subText: "OWL Skin",
                                imageURL: k[e.name]
                            })
                        }) : [];
                        else {
                            var g = this.props.data.user.tournament.rewards.insider.heroSkins.filter(function(e) {
                                return e.id !== b && "rewards-purchase-owl2018-allstars" !== e.id
                            });
                            o && n && (g = g.filter(function(e) {
                                return e.id !== f
                            })), l = g.map(function(e) {
                                return i.createElement(p.Xa, {
                                    className: t,
                                    padding: {
                                        x: 3
                                    },
                                    key: e.name
                                }, i.createElement(d.a, {
                                    imageURL: e.imageURL,
                                    size: d.b.Large
                                }), i.createElement(p.Xa, {
                                    display: p.X.Flex,
                                    flexDirection: p.Aa.Column,
                                    alignItems: p.f.Center,
                                    padding: {
                                        top: 1
                                    }
                                }, i.createElement(p.W, {
                                    fontSize: p.Ca.Size4,
                                    noWrap: !0,
                                    bold: !0
                                }, e.name), i.createElement(p.W, {
                                    noWrap: !0,
                                    color: p.O.Alt2
                                }, e.description)))
                            })
                        }
                        var v = this.props.data.user.tournament.rewards.insider.inGameContent.map(function(a) {
                                return i.createElement(p.Xa, {
                                    className: t,
                                    "data-test-selector": "in-game-content-selector",
                                    padding: {
                                        x: 1
                                    },
                                    key: a.name,
                                    textAlign: p.Rb.Center
                                }, i.createElement(c.a, {
                                    imageURL: a.imageURL,
                                    size: e ? c.c.Large : c.c.Medium,
                                    borderType: e ? c.b.Brand : c.b.Default
                                }), i.createElement(p.Xa, {
                                    display: p.X.Flex,
                                    flexDirection: p.Aa.Column,
                                    alignItems: p.f.Center,
                                    padding: {
                                        top: 1
                                    }
                                }, i.createElement(p.W, {
                                    fontSize: p.Ca.Size5,
                                    noWrap: !0,
                                    bold: !0
                                }, a.name)))
                            }),
                            E = e && this.props.blizzardRewardsAvailable,
                            y = this.props.data.user.tournament.rewards.insider,
                            w = y.heroSkins.concat(y.inGameContent).some(function(e) {
                                return e.canBeFulfilled
                            });
                        return i.createElement(p.Xa, {
                            className: "insider-pass-rewards",
                            display: p.X.Flex,
                            flexDirection: p.Aa.Column,
                            padding: {
                                y: 3
                            },
                            textAlign: p.Rb.Center
                        }, i.createElement(p.W, {
                            fontSize: p.Ca.Size3,
                            color: p.O.Link,
                            bold: !0
                        }, Object(s.d)("Overwatch Content with the All-Access Pass", "CampaignsInsiderRewards")), E && !w && i.createElement(p.W, {
                            fontSize: p.Ca.Size4
                        }, Object(s.d)("All in-game rewards have been claimed to your Blizzard account", "CampaignsInsiderRewards")), E && w && i.createElement(p.Xa, {
                            display: p.X.Flex,
                            flexDirection: p.Aa.Row,
                            flexWrap: p.Ba.Wrap,
                            justifyContent: p.Wa.Center,
                            padding: {
                                y: 1
                            }
                        }, i.createElement(h.a, {
                            tournamentID: this.props.data.user.tournament.id,
                            enabled: !0,
                            inGame: !0
                        })), !E && i.createElement(p.W, {
                            fontSize: p.Ca.Size4
                        }, Object(s.d)("A Blizzard account link is required to redeem in-game rewards", "CampaignsInsiderRewards")), this.props.insiderPurchaseState === u.a.PostPurchase && o && n && i.createElement(p.Ja, null, i.createElement(p.P, {
                            cols: {
                                default: 12,
                                xl: 6
                            }
                        }, this.renderAllstarsPack()), i.createElement(p.P, {
                            cols: {
                                default: 12,
                                xl: 6
                            }
                        }, this.renderLucio(o))), a && this.renderPlayersPack(), i.createElement(p.Xa, {
                            display: p.X.Flex,
                            flexDirection: e ? p.Aa.Column : p.Aa.Row,
                            flexWrap: p.Ba.Wrap,
                            justifyContent: p.Wa.Center,
                            alignItems: p.f.Stretch,
                            padding: {
                                y: 2
                            }
                        }, i.createElement(p.Xa, {
                            display: p.X.Flex,
                            flexWrap: p.Ba.Wrap,
                            justifyContent: p.Wa.Center,
                            alignItems: p.f.Center
                        }, l), i.createElement(p.Xa, {
                            display: p.X.Flex,
                            flexWrap: p.Ba.Wrap,
                            justifyContent: p.Wa.Center,
                            alignItems: p.f.Center,
                            padding: 2
                        }, v)))
                    }, t.prototype.renderPlayersPack = function() {
                        return i.createElement(p.Xa, {
                            display: p.X.Flex,
                            justifyContent: p.Wa.Center,
                            padding: {
                                left: 1,
                                right: 1
                            }
                        }, i.createElement(p.Eb, {
                            className: "insider-pass-rewards__players-pack",
                            textAlign: p.Rb.Center,
                            fullWidth: !0
                        }, i.createElement(p.S, {
                            className: "insider-pass-rewards__players-pack__image",
                            src: l.c + "/owl-2017/insider-test/owl-igc-playerspack.png",
                            alt: Object(s.d)("The Players Pack Skins", "CampaignsInsiderRewards")
                        }), i.createElement(p.Xa, {
                            display: p.X.Flex,
                            flexDirection: p.Aa.Column,
                            alignItems: p.f.Center,
                            padding: {
                                top: 1,
                                bottom: 1
                            }
                        }, i.createElement(p.W, {
                            fontSize: p.Ca.Size4,
                            noWrap: !0,
                            bold: !0
                        }, Object(s.d)("The Players Pack", "CampaignsInsiderRewards")), i.createElement(p.W, {
                            fontSize: p.Ca.Size5,
                            bold: !0
                        }, Object(s.d)("D.Va, Ana, Zarya, Genji, Sombra, Lucio, Widowmaker, Orisa, Winston, Reinhardt, Zenyatta, Junkrat", "CampaignsInsiderRewards")), this.renderFormattedOwlSkinsText())))
                    }, t.prototype.renderAllstarsPack = function() {
                        return i.createElement(p.Xa, {
                            display: p.X.Flex,
                            justifyContent: p.Wa.Center,
                            padding: {
                                left: 1,
                                right: 1,
                                bottom: 2,
                                top: 2
                            }
                        }, i.createElement(p.Eb, {
                            className: "insider-pass-rewards__new-item",
                            textAlign: p.Rb.Center,
                            fullWidth: !0
                        }, i.createElement(p.S, {
                            className: "insider-pass-rewards__new-item__image",
                            src: l.c + "/owl-2017/insider-test/owl-igc-allstars-pack.png",
                            alt: Object(s.d)("The All Stars Pack Skins", "CampaignsInsiderRewards")
                        }), i.createElement(p.Xa, {
                            display: p.X.Flex,
                            flexDirection: p.Aa.Column,
                            alignItems: p.f.Center,
                            padding: {
                                top: 1,
                                bottom: 1
                            }
                        }, i.createElement(p.W, {
                            fontSize: p.Ca.Size4,
                            noWrap: !0,
                            bold: !0
                        }, Object(s.d)("The All-Stars Pack", "CampaignsInsiderRewards")), i.createElement(p.W, {
                            fontSize: p.Ca.Size5,
                            bold: !0
                        }, Object(s.d)("Mercy, Brigitte, Moira, Reinhardt, D.Va, Tracer", "CampaignsInsiderRewards")), this.renderFormattedOwlSkinsText())))
                    }, t.prototype.renderLucio = function(e) {
                        if (e) return i.createElement(p.Xa, {
                            display: p.X.Flex,
                            justifyContent: p.Wa.Center,
                            padding: {
                                left: 1,
                                right: 1,
                                bottom: 2,
                                top: 2
                            }
                        }, i.createElement(p.Eb, {
                            className: "insider-pass-rewards__new-item",
                            textAlign: p.Rb.Center,
                            fullWidth: !0
                        }, i.createElement(p.S, {
                            className: "insider-pass-rewards__new-item__image",
                            src: l.c + "/owl-2017/insider-test/lucio-emote-static-alt.png",
                            alt: e.name
                        }), i.createElement(p.Xa, {
                            display: p.X.Flex,
                            flexDirection: p.Aa.Column,
                            alignItems: p.f.Center,
                            padding: {
                                top: 1,
                                bottom: 1
                            }
                        }, i.createElement(p.W, {
                            fontSize: p.Ca.Size4,
                            noWrap: !0,
                            bold: !0
                        }, e.name), i.createElement(p.W, {
                            noWrap: !0,
                            color: p.O.Alt2
                        }, e.description))))
                    }, t.prototype.renderFormattedOwlSkinsText = function() {
                        var e = Object(s.d)("OWL Skins", "CampaignsInsiderRewards");
                        return i.createElement(p.W, {
                            noWrap: !0,
                            color: p.O.Alt2
                        }, e)
                    }, t = n.__decorate([Object(o.a)(g, {
                        options: function(e) {
                            return {
                                variables: {
                                    channelID: e.channelID
                                }
                            }
                        }
                    })], t)
                }(i.PureComponent);
            a.d(t, !1, function() {
                return "in-game-content-selector"
            }), a.d(t, "d", function() {
                return b
            }), a.d(t, "c", function() {
                return f
            }), a.d(t, "a", function() {
                return "rewards-purchase-owl2018-allstars"
            }), a.d(t, "b", function() {
                return v
            })
        },
        xjjM: function(e, t, a) {
            var n = {
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
                                            kind: "FragmentSpread",
                                            name: {
                                                kind: "Name",
                                                value: "campaignSubscriptionProduct"
                                            },
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
                    end: 425
                }
            };
            n.loc.source = {
                body: '#import "twilight/features/badges/models/badge-fragment.gql"\n#import "twilight/features/campaigns/models/subscription-product.gql"\nquery InsiderPassTabEmotesAndBadges($channelID: ID!) {\nuser(id: $channelID) {\nid\nbroadcastBadges {\n...badge\n}\nsubscriptionProducts {\n...campaignSubscriptionProduct\n}\ntournament {\nid\nrewards {\ninsider {\nbadges {\nid\nname\ntype\nimageURL\ndescription\ncanBeFulfilled\nisEntitled\nisPrimeOnly\n}\n}\n}\n}\n}\n}',
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            var r = {};

            function i(e) {
                return e.filter(function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var t = e.name.value;
                    return !r[t] && (r[t] = !0, !0)
                })
            }
            n.definitions = n.definitions.concat(i(a("IKE4").definitions)), n.definitions = n.definitions.concat(i(a("ySEf").definitions)), e.exports = n
        },
        yImC: function(e, t, a) {},
        ywDU: function(e, t, a) {}
    }
]);