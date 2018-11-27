(window.webpackJsonp = window.webpackJsonp || []).push([
    [110], {
        "12i0": function(e, a, t) {
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
                    var a = e.name.value;
                    return !i[a] && (i[a] = !0, !0)
                })
            }(t("fhkr").definitions)), e.exports = n
        },
        APPd: function(e, a, t) {
            "use strict";
            var n = t("/MKj"),
                i = t("kRBY"),
                r = t("mrSG"),
                s = t("q1tI"),
                o = t("/7QA"),
                d = t("eJ65"),
                l = t("yR8l"),
                c = t("SDEh"),
                m = t("edgk"),
                u = t("b6Yk"),
                p = t("5zXJ"),
                b = t("Ue10"),
                g = t("RNrf"),
                k = (t("IEPL"), function(e) {
                    function a() {
                        var a = null !== e && e.apply(this, arguments) || this;
                        return a.blizzardUnlink = function() {
                            return r.__awaiter(a, void 0, void 0, function() {
                                return r.__generator(this, function(e) {
                                    switch (e.label) {
                                        case 0:
                                            return this.props.user ? [4, u.a.delete("/v5/blizzard/" + this.props.user.id)] : [3, 2];
                                        case 1:
                                            e.sent(), this.props.data && this.props.data.refetch && this.props.data.refetch(), e.label = 2;
                                        case 2:
                                            return [2]
                                    }
                                })
                            })
                        }, a.blizzardLink = function(e) {
                            if (a.props.user) {
                                var t = e.currentTarget.getAttribute("data-region"),
                                    n = window.innerWidth ? window.innerWidth : document.documentElement && document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width,
                                    i = window.innerHeight ? window.innerHeight : document.documentElement && document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height,
                                    r = n / 2 - 262.5 + window.screenLeft,
                                    s = i / 2 - 277.5 + window.screenTop,
                                    o = window.open("https://api.twitch.tv/v5/blizzard/" + a.props.user.id + "/auth?region=" + t, "blizzardConnectionWindow", "height=555,width=525,top=" + s + ",left=" + r + ",chrome=no");
                                if (!o || Object(c.a)()) return void(a.props.onOpenBlizzardConnect && a.props.onOpenBlizzardConnect(a.props.user.id, t, function() {
                                    a.props.data.refetch()
                                }));
                                o.focus(), Object(m.a)(o, function(e) {
                                    a.props.data && a.props.data.refetch && a.props.data.refetch()
                                })
                            }
                        }, a
                    }
                    return r.__extends(a, e), a.prototype.render = function() {
                        var e = this.props.type === b.F.Default || this.props.type ? this.props.type : b.F.Hollow;
                        return s.createElement(b.Ya, {
                            className: "blizzard-account-link"
                        }, this.props.data && this.props.data.loading && s.createElement(b.z, {
                            type: b.F.Hollow,
                            size: b.D.Default
                        }, s.createElement(b.ab, null)), this.props.data && !this.props.data.loading && this.props.data.error && s.createElement(b.z, {
                            "data-test-selector": "blizzard_account_link_component_error",
                            type: b.F.Hollow,
                            size: b.D.Default
                        }, s.createElement(b.tb, {
                            asset: b.ub.DeadGlitch
                        })), this.props.data && this.props.data.currentUser && !this.props.data.currentUser.blizzardAccount && s.createElement(d.a, null, s.createElement(b.z, {
                            type: e,
                            "data-test-selector": "blizzard_account_link_component_unlinked",
                            dropdown: !0,
                            size: b.D.Default
                        }, this.props.linkText || Object(o.d)("Link your Blizzard Account", "CampaignsBlizzardAccountLink")), s.createElement(b.u, {
                            direction: b.v.BottomRight,
                            size: b.w.Small,
                            noTail: !0
                        }, s.createElement(b.Ya, {
                            padding: 1
                        }, s.createElement(b.Va, {
                            onClick: this.blizzardLink,
                            "data-region": "us"
                        }, s.createElement(b.Ya, {
                            padding: .5
                        }, Object(o.d)("North America (US)", "CampaignsBlizzardAccountLink"))), s.createElement(b.Va, {
                            onClick: this.blizzardLink,
                            "data-region": "eu"
                        }, s.createElement(b.Ya, {
                            padding: .5
                        }, Object(o.d)("Europe (EU)", "CampaignsBlizzardAccountLink"))), s.createElement(b.Va, {
                            onClick: this.blizzardLink,
                            "data-region": "kr"
                        }, s.createElement(b.Ya, {
                            padding: .5
                        }, Object(o.d)("Korea (KR)", "CampaignsBlizzardAccountLink"))), s.createElement(b.Va, {
                            onClick: this.blizzardLink,
                            "data-region": "tw"
                        }, s.createElement(b.Ya, {
                            padding: .5
                        }, Object(o.d)("Taiwan (TW)", "CampaignsBlizzardAccountLink"))), s.createElement(b.Va, {
                            onClick: this.blizzardLink,
                            "data-region": "cn"
                        }, s.createElement(b.Ya, {
                            padding: .5
                        }, Object(o.d)("China (CN)", "CampaignsBlizzardAccountLink"))), s.createElement(b.Va, {
                            onClick: this.blizzardLink,
                            "data-region": "sea"
                        }, s.createElement(b.Ya, {
                            padding: .5
                        }, Object(o.d)("South East Asia (SEA)", "CampaignsBlizzardAccountLink")))))), this.props.data && this.props.data.currentUser && this.props.data.currentUser.blizzardAccount && s.createElement(b.Zb, {
                            label: this.props.data.currentUser.blizzardAccount.battleTag
                        }, s.createElement(d.a, null, s.createElement(b.z, {
                            type: e,
                            size: b.D.Default,
                            "data-test-selector": "blizzard_account_link_component_linked"
                        }, s.createElement(b.Ya, {
                            display: b.X.Flex,
                            flexDirection: b.Aa.Row,
                            alignItems: b.f.Center
                        }, s.createElement(b.tb, {
                            asset: b.ub.Check,
                            type: b.vb.Success
                        }), s.createElement(b.Qa, {
                            className: "blizzard-account-link__logo",
                            padding: {
                                left: .5
                            }
                        }, s.createElement(b.S, {
                            src: p.c + "/hgc2017/blizzard_logo.svg",
                            alt: Object(o.d)('Blizzard account "{accountName}" is connected', {
                                accountName: this.props.data.currentUser.blizzardAccount.battleTag
                            }, "CampaignsBlizzardAccountLink")
                        })))), s.createElement(b.u, {
                            direction: b.v.Bottom,
                            size: b.w.Small,
                            noTail: !0
                        }, s.createElement(b.Ya, {
                            padding: 1
                        }, s.createElement(b.Va, {
                            onClick: this.blizzardUnlink,
                            "data-test-selector": "blizzard_account_link_component_unlink_account"
                        }, s.createElement(b.Ya, {
                            padding: .5
                        }, Object(o.d)("Unlink Blizzard Account", "CampaignsBlizzardAccountLink"))))))))
                    }, a = r.__decorate([Object(l.a)(g)], a)
                }(s.Component));
            var h = Object(n.connect)(function(e) {
                return {
                    user: Object(i.e)(e)
                }
            })(k);
            t.d(a, "a", function() {
                return h
            })
        },
        G30c: function(e, a, t) {
            "use strict";
            var n = t("mrSG"),
                i = t("q1tI"),
                r = t("oJmH"),
                s = t("/7QA"),
                o = t("yR8l"),
                d = t("eDVu"),
                l = t("+LJB"),
                c = t("i4ay"),
                m = t("Ue10"),
                u = t("12i0"),
                p = function(e) {
                    function a() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return n.__extends(a, e), a.prototype.render = function() {
                        var e = this.props.data,
                            a = e.user && e.user.tournament && e.user.tournament.teamLeaderboard;
                        return e.loading && !a ? i.createElement(m.ab, {
                            fillContent: !0
                        }) : !a || e.error ? i.createElement(m.Ya, {
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
                            leaderboardRows: a.items.edges,
                            pageSize: 10,
                            channelID: this.props.channelID,
                            isTeam: !0,
                            domain: this.props.domain,
                            hideLocale: this.props.hideLocale
                        }))
                    }, a
                }(i.Component),
                b = Object(r.compose)(Object(o.a)(u, {
                    options: function(e) {
                        return {
                            variables: {
                                channelID: e.channelID
                            }
                        }
                    }
                }), Object(d.a)(function(e) {
                    return Object(l.a)(u, e.channelID, e.data.user && e.data.user.tournament && e.data.user.tournament.teamLeaderboard)
                }))(p);
            t.d(a, !1, function() {
                return p
            }), t.d(a, "a", function() {
                return b
            })
        },
        IEPL: function(e, a, t) {},
        KUJM: function(e, a, t) {},
        NcrI: function(e, a) {
            var t = {
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
            t.loc.source = {
                body: "query CampaignsLeaderboardData($userIDs: [ID!] $isTeam: Boolean!) {\nusers (ids: $userIDs) {\nid\ndisplayName @skip(if: $isTeam)\nprofileImageURL(width: 50) @skip(if: $isTeam)\ntournament @include(if: $isTeam) {\nid\nteams {\nid\nname\nlogoURL\ndivision\n}\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = t
        },
        RNrf: function(e, a) {
            var t = {
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
            t.loc.source = {
                body: "query BlizzardAccountForUser {\ncurrentUser {\nid\nblizzardAccount {\nid\nbattleTag\nregion\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = t
        },
        U9Uw: function(e, a, t) {
            "use strict";
            t.r(a);
            var n = t("mrSG"),
                i = t("q1tI"),
                r = t("G30c"),
                s = t("WaLP"),
                o = t("/7QA"),
                d = t("APPd"),
                l = t("Ue10"),
                c = function(e) {
                    var a = !!e.blizzardAccount;
                    return !e.currentUserID || a ? null : i.createElement(l.Fb, {
                        background: l.r.Base,
                        padding: 1,
                        margin: {
                            y: 1
                        },
                        border: !0,
                        borderRadius: l.x.Medium,
                        display: l.X.Flex,
                        alignItems: l.f.Center
                    }, i.createElement(l.tb, {
                        asset: l.ub.Warning,
                        height: 30,
                        width: 30,
                        type: l.vb.Brand
                    }), i.createElement(l.Ya, {
                        flexGrow: 1,
                        padding: {
                            x: 1
                        }
                    }, i.createElement(l.W, {
                        color: l.O.Link,
                        type: l.Wb.Strong,
                        fontSize: l.Ca.Size3
                    }, Object(o.e)("Connect your Blizzard Account to Claim Your Rewards", "BlizzardAccountLinkFTUE"))), i.createElement(d.a, {
                        linkText: Object(o.e)("Connect Account", "BlizzardAccountLinkFTUE"),
                        type: l.F.Default,
                        onOpenBlizzardConnect: e.onOpenBlizzardConnect
                    }))
                },
                m = t("VJHF"),
                u = function(e) {
                    function a() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return n.__extends(a, e), a.prototype.render = function() {
                        return i.createElement(l.Ya, {
                            padding: {
                                y: 1
                            }
                        }, i.createElement(c, {
                            currentUserID: this.props.currentUserID,
                            blizzardAccount: this.props.blizzardAccount,
                            onOpenBlizzardConnect: this.props.onOpenBlizzardConnect
                        }), i.createElement(l.Ya, {
                            margin: {
                                y: 1
                            }
                        }, i.createElement(l.Ja, {
                            gutterSize: l.Ka.Large
                        }, i.createElement(l.P, {
                            cols: {
                                xl: 6,
                                default: 12
                            }
                        }, i.createElement(l.Ya, {
                            padding: {
                                bottom: 2
                            },
                            breakpointExtraLarge: {
                                padding: {
                                    bottom: 0
                                }
                            }
                        }, i.createElement(r.a, {
                            channelID: this.props.channelID,
                            domain: m.f
                        }))), i.createElement(l.P, {
                            cols: {
                                xl: 6,
                                default: 12
                            }
                        }, i.createElement(s.a, {
                            channelID: this.props.channelID
                        })))))
                    }, a
                }(i.Component),
                p = u;
            t.d(a, "OWLCampaignLayoutPresentation", function() {
                return u
            }), t.d(a, "OWLCampaignLayout", function() {
                return p
            })
        },
        WaLP: function(e, a, t) {
            "use strict";
            var n = t("/MKj"),
                i = t("kRBY"),
                r = t("mrSG"),
                s = t("q1tI"),
                o = t("oJmH"),
                d = t("/7QA"),
                l = t("yR8l"),
                c = t("eDVu"),
                m = t("+LJB"),
                u = t("i4ay"),
                p = t("Ue10"),
                b = t("ktVs"),
                g = function(e) {
                    function a() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return r.__extends(a, e), a.prototype.render = function() {
                        return !this.props.data || this.props.data.loading && !this.props.data.user ? s.createElement(p.ab, {
                            fillContent: !0
                        }) : this.props.data && this.props.data.error ? s.createElement(p.Ya, {
                            fullHeight: !0,
                            fullWidth: !0,
                            textAlign: p.Sb.Center,
                            padding: {
                                top: 4
                            }
                        }, s.createElement(p.tb, {
                            asset: p.ub.DeadGlitch,
                            fill: !0,
                            width: 50,
                            height: 50
                        })) : s.createElement(p.Fb, {
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
                        }, s.createElement(p.Ya, {
                            padding: {
                                bottom: 2
                            }
                        }, s.createElement(p.W, {
                            type: p.Wb.H3
                        }, Object(d.d)("Individual Leaderboards", "CampaignsProgressTab"))), s.createElement(u.a, {
                            leaderboardRows: this.props.data.user.tournament.globalLeaderboard.items.edges,
                            pageSize: 10,
                            channelID: this.props.channelID,
                            isTeam: !1,
                            userRow: this.props.data.user.tournament.self && this.props.data.user.tournament.self.globalLeaderboardItem
                        }))
                    }, a
                }(s.Component),
                k = Object(o.compose)(Object(l.a)(b, {
                    options: function(e) {
                        return {
                            variables: {
                                channelID: e.channelID
                            }
                        }
                    }
                }), Object(c.a)(function(e) {
                    return Object(m.a)(b, e.channelID, e.data.user && e.data.user.tournament && e.data.user.tournament.globalLeaderboard, e.user && e.user.id)
                }))(g);
            var h = Object(n.connect)(function(e) {
                return {
                    user: Object(i.e)(e)
                }
            })(k);
            t.d(a, "a", function() {
                return h
            })
        },
        aUl8: function(e, a, t) {},
        i4ay: function(e, a, t) {
            "use strict";
            var n, i = t("mrSG"),
                r = t("q1tI"),
                s = t("/7QA"),
                o = t("yR8l"),
                d = t("f00E"),
                l = t("3CMh"),
                c = t("4h+t"),
                m = t("Ue10"),
                u = (t("aUl8"), function(e) {
                    function a() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return i.__extends(a, e), a.prototype.shouldComponentUpdate = function(e) {
                        return this.props.displayName !== e.displayName || this.props.rank !== e.rank || this.props.score !== e.score || this.props.secondaryName !== e.secondaryName || this.props.imageURL !== e.imageURL
                    }, a.prototype.render = function() {
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
                        }, r.createElement(l.a, {
                            prefix: "Cheer",
                            showImage: !0,
                            showAmount: !1,
                            formattedNumber: !0,
                            bitsConfig: Object(c.a)(),
                            amount: this.props.score,
                            animated: !1,
                            size: l.b.ExtraSmall
                        })), r.createElement(m.Qa, {
                            className: "campaign-leaderboard-row__amount"
                        }, r.createElement(m.W, {
                            "data-test-selector": "esports-leaderboard-row-score",
                            lineHeight: m.Za.Body,
                            type: m.Wb.H4
                        }, Object(s.f)(this.props.score))))))
                    }, a
                }(r.Component)),
                p = (t("o5UI"), function(e) {
                    function a() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return i.__extends(a, e), a.prototype.render = function() {
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
                        }, r.createElement(l.a, {
                            prefix: "Cheer",
                            showImage: !0,
                            showAmount: !1,
                            formattedNumber: !0,
                            bitsConfig: Object(c.a)(),
                            amount: this.props.score,
                            animated: !1,
                            size: l.b.ExtraSmall
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
                    }, a
                }(r.PureComponent)),
                b = t("VJHF"),
                g = t("NcrI");
            t("KUJM");
            ! function(e) {
                e.AllTeams = "allTeams", e.Atlantic = "atlantic", e.Pacific = "pacific", e.EU = "eu", e.NA = "na", e.KR = "kr", e.CN = "cn"
            }(n || (n = {}));
            var k = function(e) {
                function a() {
                    var a = null !== e && e.apply(this, arguments) || this;
                    return a.state = {
                        showPage: 1,
                        activeTab: n.AllTeams
                    }, a.pagePipClick = function(e) {
                        var t = parseInt(e.currentTarget.dataset.pageNumber, 10);
                        a.setState({
                            showPage: t
                        })
                    }, a.tabClick = function(e) {
                        if (e.currentTarget.parentElement) {
                            var t = e.currentTarget.parentElement.getAttribute("data-tab-id") || n.AllTeams;
                            a.setState({
                                activeTab: t,
                                showPage: 1
                            })
                        }
                    }, a
                }
                return i.__extends(a, e), a.prototype.render = function() {
                    var e = this;
                    if (Object(s.d)("Rank: {rank}", {
                            rank: 1
                        }, "CampaignsLeaderboard"), this.props.data.loading) return r.createElement(m.ab, {
                        fillContent: !0
                    });
                    var a = this.props.data.users ? this.props.data.users[0] : null,
                        t = this.props.isTeam && a ? a.tournament : null,
                        i = this.props.leaderboardRows;
                    this.props.isTeam && this.state.activeTab !== n.AllTeams && (i = this.props.leaderboardRows.filter(function(a) {
                        var n = t && t.teams.find(function(e) {
                            return !!e && e.id.toUpperCase() === a.node.entryKey.toUpperCase()
                        });
                        if (n) return n.division.toLowerCase().includes(e.state.activeTab)
                    }));
                    var o = Math.ceil(i.length / this.props.pageSize),
                        l = this.props.pageSize * (this.state.showPage - 1),
                        c = l + this.props.pageSize,
                        g = i.slice(l, c).map(function(a) {
                            var n = {
                                rank: a.node.rank,
                                displayName: "Somebody",
                                score: a.node.score
                            };
                            if (e.props.isTeam && t) {
                                var i = t.teams.find(function(e) {
                                    return !!e && e.id.toUpperCase() === a.node.entryKey.toUpperCase()
                                });
                                i && (n.displayName = i.name, n.secondaryName = i.division, n.imageURL = i.logoURL)
                            } else if (!e.props.isTeam) {
                                var r = e.props.data.users ? e.props.data.users.find(function(e) {
                                    return !!e && e.id === a.node.entryKey
                                }) : null;
                                r && r.displayName && (n.displayName = r.displayName, r.profileImageURL && (n.imageURL = r.profileImageURL))
                            }
                            return n
                        }).map(function(a) {
                            return r.createElement(u, {
                                key: "leaderboard-row-" + (e.props.isTeam ? "team" : "user") + "-" + a.rank,
                                rank: a.rank,
                                score: a.score,
                                displayName: a.displayName,
                                imageURL: a.imageURL,
                                secondaryName: e.props.hideLocale ? void 0 : a.secondaryName
                            })
                        }),
                        k = this.props.pageSize - g.length % this.props.pageSize;
                    if (k !== this.props.pageSize)
                        for (var h = 0; h < k; h++) g.push(r.createElement(m.Ya, {
                            key: "leaderboard-blank-row-" + h,
                            className: "campaign-leaderboard__blank-row"
                        }));
                    var f = [];
                    for (h = 1; h <= o; h++) {
                        var v = h === this.state.showPage ? m.r.Accent : m.r.Alt;
                        f.push(r.createElement(m.Ra, {
                            className: "campaign-leaderboard__buttons",
                            padding: 1,
                            key: "leaderboard-page-pip-" + Object(d.a)()
                        }, r.createElement("button", {
                            onClick: this.pagePipClick,
                            "data-page-number": h
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
                        this.props.domain === b.c ? E = r.createElement(r.Fragment, null, r.createElement(m.Gb, {
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
                        }, Object(s.d)("CN", "CampaignsProgressTab")))) : this.props.domain === b.f && (E = r.createElement(r.Fragment, null, r.createElement(m.Gb, {
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
                    var N = null;
                    if (this.props.userRow) {
                        var z = {
                                rank: this.props.userRow.rank,
                                displayName: "Somebody",
                                score: this.props.userRow.score
                            },
                            C = this.props.data.users && this.props.userRow && this.props.data.users.find(function(a) {
                                return !!a && !!e.props.userRow && a.id === e.props.userRow.entryKey
                            }) || null;
                        C && C.displayName && (z.displayName = C.displayName, C.profileImageURL && (z.imageURL = C.profileImageURL)), N = r.createElement(p, {
                            rank: z.rank,
                            score: z.score,
                            displayName: z.displayName,
                            imageURL: z.imageURL
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
                    }, r.createElement("ul", null, g, this.props.userRow && N)), r.createElement(m.Ya, {
                        display: m.X.Flex,
                        justifyContent: m.Xa.Center,
                        margin: {
                            top: 2
                        }
                    }, f.length > 1 && f))
                }, a = i.__decorate([Object(o.a)(g, {
                    options: function(e) {
                        return {
                            variables: {
                                userIDs: function(e) {
                                    if (e.isTeam) return [e.channelID];
                                    var a = e.leaderboardRows.map(function(e) {
                                        return e.node.entryKey
                                    });
                                    return e.userRow && (e.leaderboardRows.find(function(a) {
                                        return !!e.userRow && a.node.entryKey === e.userRow.entryKey
                                    }) || a.push(e.userRow.entryKey)), a
                                }(e),
                                isTeam: e.isTeam
                            }
                        }
                    }
                })], a)
            }(r.Component);
            t.d(a, "a", function() {
                return k
            })
        },
        ktVs: function(e, a, t) {
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
                    var a = e.name.value;
                    return !i[a] && (i[a] = !0, !0)
                })
            }(t("fhkr").definitions)), e.exports = n
        },
        o5UI: function(e, a, t) {}
    }
]);