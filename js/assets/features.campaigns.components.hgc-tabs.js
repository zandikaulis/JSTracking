(window.webpackJsonp = window.webpackJsonp || []).push([
    [111], {
        "+L10": function(e, t, r) {},
        "0nav": function(e, t, r) {
            "use strict";
            r.d(t, "a", function() {
                return s
            });
            var n, a = r("mrSG"),
                i = r("/7QA"),
                o = r("2xye");

            function s(e, t, r) {
                return a.__awaiter(this, void 0, void 0, function() {
                    return a.__generator(this, function(a) {
                        return i.o.track(o.SpadeEventType.CampaignTabSwitch, {
                            action: n.Click,
                            module: "tab_selector",
                            component_name: e,
                            component_type: "tab",
                            channel_id: t,
                            user_id: r,
                            device_id: i.p.session.deviceID
                        }), [2]
                    })
                })
            }! function(e) {
                e.Click = "click", e.Hover = "hover"
            }(n || (n = {}))
        },
        "12i0": function(e, t, r) {
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
            var a = {};
            n.definitions = n.definitions.concat(function(e) {
                return e.filter(function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var t = e.name.value;
                    return !a[t] && (a[t] = !0, !0)
                })
            }(r("fhkr").definitions)), e.exports = n
        },
        "2UI6": function(e, t, r) {},
        "2iq9": function(e, t, r) {},
        "3NMT": function(e, t, r) {},
        "7QWs": function(e, t) {
            var r = {
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
            r.loc.source = {
                body: "mutation ClaimAllRewards($input: ClaimAllRewardsInput!) {\nclaimAllRewards(input: $input) {\ndomain\nrewards {\nid\nname\ndescription\ntype\nisEntitled\ncanBeFulfilled\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = r
        },
        "7gDD": function(e, t, r) {},
        "81Gi": function(e, t, r) {
            "use strict";
            var n = r("q1tI"),
                a = (r("bt+X"), function() {
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
            r.d(t, "a", function() {
                return a
            })
        },
        "8n0m": function(e, t, r) {
            "use strict";
            r.d(t, "b", function() {
                return i
            }), r.d(t, "a", function() {
                return o
            }), r.d(t, "c", function() {
                return s
            });
            var n = r("/7QA"),
                a = r("2xye");

            function i(e) {
                n.o.track(a.SpadeEventType.CollectionCreate, {
                    channel_id: e.channelID,
                    playlist_id: e.playlistID,
                    user_id: e.userID,
                    title: e.title
                })
            }

            function o(e) {
                n.o.track(a.SpadeEventType.CollectionAddItem, {
                    channel_id: e.channelID,
                    item_id: e.itemID,
                    item_position: e.itemPosition,
                    item_type: e.itemType,
                    playlist_id: e.playlistID,
                    user_id: e.userID,
                    place: e.place
                })
            }

            function s(e) {
                n.o.track(a.SpadeEventType.CollectionRemoveItem, {
                    channel_id: e.channelID,
                    item_id: e.itemID,
                    item_position: e.itemPosition,
                    item_type: e.itemType,
                    playlist_id: e.playlistID,
                    user_id: e.userID
                })
            }
        },
        APPd: function(e, t, r) {
            "use strict";
            var n = r("/MKj"),
                a = r("kRBY"),
                i = r("mrSG"),
                o = r("q1tI"),
                s = r("/7QA"),
                l = r("eJ65"),
                c = r("yR8l"),
                d = r("SDEh"),
                m = r("edgk"),
                p = r("b6Yk"),
                u = r("5zXJ"),
                h = r("Ue10"),
                g = r("RNrf"),
                b = (r("IEPL"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.blizzardUnlink = function() {
                            return i.__awaiter(t, void 0, void 0, function() {
                                return i.__generator(this, function(e) {
                                    switch (e.label) {
                                        case 0:
                                            return this.props.user ? [4, p.a.delete("/v5/blizzard/" + this.props.user.id)] : [3, 2];
                                        case 1:
                                            e.sent(), this.props.data && this.props.data.refetch && this.props.data.refetch(), e.label = 2;
                                        case 2:
                                            return [2]
                                    }
                                })
                            })
                        }, t.blizzardLink = function(e) {
                            if (t.props.user) {
                                var r = e.currentTarget.getAttribute("data-region"),
                                    n = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width,
                                    a = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height,
                                    i = n / 2 - 262.5 + window.screenLeft,
                                    o = a / 2 - 277.5 + window.screenTop,
                                    s = window.open("https://api.twitch.tv/v5/blizzard/" + t.props.user.id + "/auth?region=" + r, "blizzardConnectionWindow", "height=555,width=525,top=" + o + ",left=" + i + ",chrome=no");
                                if (!s || Object(d.a)()) return void(t.props.onOpenBlizzardConnect && t.props.onOpenBlizzardConnect(t.props.user.id, r, function() {
                                    t.props.data.refetch()
                                }));
                                s.focus(), Object(m.a)(s, function(e) {
                                    t.props.data && t.props.data.refetch && t.props.data.refetch()
                                })
                            }
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        return o.createElement(h.Xa, {
                            className: "blizzard-account-link"
                        }, this.props.data && this.props.data.loading && o.createElement(h.z, {
                            type: h.F.Hollow,
                            size: h.D.Default
                        }, o.createElement(h.Za, null)), this.props.data && !this.props.data.loading && this.props.data.error && o.createElement(h.z, {
                            "data-test-selector": "blizzard_account_link_component_error",
                            type: h.F.Hollow,
                            size: h.D.Default
                        }, o.createElement(h.ob, {
                            asset: h.pb.DeadGlitch
                        })), this.props.data && this.props.data.currentUser && !this.props.data.currentUser.blizzardAccount && o.createElement(l.a, null, o.createElement(h.z, {
                            type: h.F.Hollow,
                            "data-test-selector": "blizzard_account_link_component_unlinked",
                            dropdown: !0,
                            size: h.D.Default
                        }, Object(s.d)("Link your Blizzard Account", "CampaignsBlizzardAccountLink")), o.createElement(h.u, {
                            direction: h.v.BottomRight,
                            size: h.w.Small,
                            noTail: !0
                        }, o.createElement(h.Xa, {
                            padding: .5
                        }, o.createElement(h.Ua, {
                            onClick: this.blizzardLink,
                            "data-region": "us"
                        }, Object(s.d)("North America (US)", "CampaignsBlizzardAccountLink")), o.createElement(h.Ua, {
                            onClick: this.blizzardLink,
                            "data-region": "eu"
                        }, Object(s.d)("Europe (EU)", "CampaignsBlizzardAccountLink")), o.createElement(h.Ua, {
                            onClick: this.blizzardLink,
                            "data-region": "kr"
                        }, Object(s.d)("Korea (KR)", "CampaignsBlizzardAccountLink")), o.createElement(h.Ua, {
                            onClick: this.blizzardLink,
                            "data-region": "tw"
                        }, Object(s.d)("Taiwan (TW)", "CampaignsBlizzardAccountLink")), o.createElement(h.Ua, {
                            onClick: this.blizzardLink,
                            "data-region": "cn"
                        }, Object(s.d)("China (CN)", "CampaignsBlizzardAccountLink")), o.createElement(h.Ua, {
                            onClick: this.blizzardLink,
                            "data-region": "sea"
                        }, Object(s.d)("South East Asia (SEA)", "CampaignsBlizzardAccountLink"))))), this.props.data && this.props.data.currentUser && this.props.data.currentUser.blizzardAccount && o.createElement(h.Rb, {
                            label: this.props.data.currentUser.blizzardAccount.battleTag
                        }, o.createElement(l.a, null, o.createElement(h.z, {
                            type: h.F.Hollow,
                            size: h.D.Default,
                            "data-test-selector": "blizzard_account_link_component_linked"
                        }, o.createElement(h.Xa, {
                            display: h.X.Flex,
                            flexDirection: h.Aa.Row,
                            alignItems: h.f.Center
                        }, o.createElement(h.ob, {
                            asset: h.pb.Check,
                            type: h.qb.Success
                        }), o.createElement(h.Pa, {
                            className: "blizzard-account-link__logo",
                            padding: {
                                left: .5
                            }
                        }, o.createElement(h.S, {
                            src: u.c + "/hgc2017/blizzard_logo.svg",
                            alt: Object(s.d)('Blizzard account "{accountName}" is connected', {
                                accountName: this.props.data.currentUser.blizzardAccount.battleTag
                            }, "CampaignsBlizzardAccountLink")
                        })))), o.createElement(h.u, {
                            direction: h.v.Bottom,
                            size: h.w.Small,
                            noTail: !0
                        }, o.createElement(h.Xa, {
                            padding: .5
                        }, o.createElement(h.Ua, {
                            onClick: this.blizzardUnlink,
                            "data-test-selector": "blizzard_account_link_component_unlink_account"
                        }, Object(s.d)("Unlink Blizzard Account", "CampaignsBlizzardAccountLink")))))))
                    }, t = i.__decorate([Object(c.a)(g)], t)
                }(o.Component));
            var f = Object(n.connect)(function(e) {
                return {
                    user: Object(a.e)(e)
                }
            })(b);
            r.d(t, "a", function() {
                return f
            })
        },
        AvCV: function(e, t, r) {},
        "DR+f": function(e, t, r) {},
        "EU+x": function(e, t, r) {},
        FYlg: function(e, t, r) {
            "use strict";
            var n, a = r("mrSG"),
                i = r("q1tI"),
                o = r("/7QA"),
                s = r("TSYQ"),
                l = r("zF2X"),
                c = r("cUCe"),
                d = r("81Gi"),
                m = r("Ue10");
            r("2UI6");
            ! function(e) {
                e.Stem = "campaign-stem", e.Node = "campaign-node", e.Image = "campaign-image"
            }(n || (n = {}));
            var p, u = {
                    offsetY: "1px"
                },
                h = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        var e = this.props,
                            t = e.milestone,
                            r = e.participation,
                            a = e.progress,
                            o = new Date(t.startDate),
                            p = t.rewards[0],
                            h = void 0 !== a && a < t.threshold,
                            g = void 0 === a || void 0 !== a && a >= t.threshold,
                            b = void 0 !== r && r >= t.participationThreshold,
                            f = g && !b,
                            v = !p || o > new Date(Date.now()),
                            y = p && (p.canBeFulfilled || !p.isEntitled && g && b),
                            k = null;
                        f ? k = i.createElement(d.a, null) : p && p.isEntitled ? k = i.createElement(c.a, null) : y && (k = i.createElement(m.K, {
                            status: m.M.Live,
                            pulse: !0
                        }));
                        var E = s("campaigns-milestone-node__clickable", {
                            "campaigns-milestone-node__clickable--inactive": null === k && (h || v),
                            "campaigns-milestone-node__clickable--claimable": y
                        });
                        return i.createElement(l.a, {
                            balloon: this.props.milestoneBalloon,
                            balloonProps: u
                        }, this.renderRewardImage(v), i.createElement(m.Xa, {
                            className: "campaigns-milestone-node",
                            margin: {
                                x: .5
                            },
                            display: m.X.Flex,
                            flexDirection: m.Aa.Column,
                            alignItems: m.f.Center
                        }, i.createElement("div", {
                            className: E,
                            "data-test-selector": n.Node
                        }, k), this.renderStem(v || h)))
                    }, t.prototype.renderRewardImage = function(e) {
                        var t = this.props.milestone.rewards[0];
                        return this.props.showRewardImage && t ? i.createElement(m.Xa, {
                            className: "campaigns-milestone-node__img-container",
                            "data-test-selector": n.Image,
                            display: m.X.Flex,
                            justifyContent: m.Wa.Center,
                            alignItems: m.f.Center,
                            padding: {
                                bottom: 2
                            }
                        }, i.createElement(m.S, {
                            className: "campaigns-milestone-node__img",
                            src: e ? this.props.milestoneFormatter.getUnannouncedMilestoneImage() : t.imageURL,
                            alt: e ? this.props.milestoneFormatter.formatMilestoneNotAvailableMessage() : t.name
                        })) : null
                    }, t.prototype.renderStem = function(e) {
                        if (this.props.showRewardImage) return null;
                        var t = s("campaigns-milestone-node__stem", {
                            "campaigns-milestone-node__stem--locked": e
                        });
                        return i.createElement("div", {
                            className: t,
                            "data-test-selector": n.Stem
                        })
                    }, t
                }(i.Component),
                g = r("OTph"),
                b = r("sAoK"),
                f = r("klJU"),
                v = r("rkjw"),
                y = r("vt2+");
            r("qOeB");
            (p || (p = {})).ProgressBar = "progress-bar";
            var k, E = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.renderBalloon = function(e) {
                            return i.createElement(g.a, {
                                milestone: e,
                                reward: e.rewards[0],
                                globalProgress: t.props.progress,
                                userProgress: t.props.participation,
                                blizzardAccount: t.props.blizzardAccount,
                                milestoneFormatter: t.props.milestoneFormatter,
                                objectiveActive: t.props.objectiveActive
                            })
                        }, t.renderNode = function(e) {
                            var r = t.renderBalloon(e);
                            return i.createElement(h, {
                                key: e.id,
                                milestone: e,
                                milestoneBalloon: r,
                                progress: t.props.progress,
                                participation: t.props.participation,
                                blizzardAccount: t.props.blizzardAccount,
                                milestoneFormatter: t.props.milestoneFormatter
                            })
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        var e = this,
                            t = [],
                            r = [],
                            n = null,
                            a = 0,
                            o = this.props.milestones.slice(0).sort(function(e, t) {
                                return e.threshold - t.threshold
                            });
                        o.forEach(function(s, l) {
                            if (e.props.progress >= s.threshold && l < o.length - 1 && Object(y.a)(s, new Date(Date.now()))) {
                                var c = e.renderNode(s);
                                t.push(c)
                            } else if (n) {
                                c = e.renderNode(s);
                                r.push(c)
                            } else {
                                var d = s.rewards[0],
                                    m = e.props.progress >= s.threshold,
                                    p = e.props.participation >= s.participationThreshold,
                                    u = !Object(y.a)(s, new Date(Date.now())),
                                    h = v.b.Locked;
                                u ? h = v.b.Unavailable : m && p ? h = v.b.Available : (m || p) && (h = v.b.HalfLocked), n = i.createElement(v.a, {
                                    status: h,
                                    imageURL: u ? e.props.milestoneFormatter.getUnannouncedMilestoneImage() : d && d.imageURL || "",
                                    milestoneBalloon: e.renderBalloon(s),
                                    title: u ? e.props.milestoneFormatter.formatMilestoneNotAvailableMessage() : d && d.name || "",
                                    threshold: u ? void 0 : s.threshold,
                                    rarity: u ? void 0 : d && d.rarity
                                });
                                var g = l > 0 ? o[l - 1].threshold : 0;
                                a = Object(y.a)(s, new Date(Date.now())) ? (e.props.progress - g) / (s.threshold - g) * 100 : 0
                            }
                        });
                        var l = s("campaigns-progress-bar__nodes", {
                            "campaigns-progress-bar__nodes--end": r.length <= 3
                        });
                        return t.length > 3 && (t = t.slice(t.length - 3, t.length)), r.length > 3 && (r = r.slice(0, 3)), i.createElement(m.Xa, {
                            className: "campaigns-progress-bar",
                            position: m.fb.Relative,
                            margin: {
                                y: 1
                            }
                        }, i.createElement(m.Xa, {
                            className: "campaigns-progress-bar__bg",
                            ariaHidden: !0,
                            fullWidth: !0
                        }, i.createElement(m.ib, {
                            value: 50,
                            size: m.kb.Default,
                            mask: !0
                        })), i.createElement(m.Xa, {
                            fullWidth: !0,
                            className: "campaigns-progress-bar__wrapper"
                        }, i.createElement(m.Xa, {
                            alignItems: m.f.Center,
                            className: "campaigns-progress-bar__nodes"
                        }, t), i.createElement(m.Pa, {
                            className: "campaigns-progress-bar__value"
                        }, i.createElement(m.ib, {
                            "data-test-selector": p.ProgressBar,
                            value: a,
                            size: m.kb.Default,
                            mask: !0
                        })), i.createElement(m.Xa, {
                            className: "campaigns-progress-bar__square"
                        }, n), r.length > 0 && i.createElement(m.Xa, {
                            alignItems: m.f.Center,
                            className: l,
                            margin: {
                                left: 1
                            }
                        }, r)))
                    }, t
                }(i.Component),
                C = r("KnFV"),
                w = r("T1g+");
            r("3NMT");
            ! function(e) {
                e.UnlockedNodes = "unlocked-nodes", e.UnlockedText = "unlocked-text"
            }(k || (k = {}));
            var N = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.renderMilestoneNode = function(e) {
                            var r = i.createElement(g.a, {
                                milestone: e,
                                reward: e.rewards[0],
                                globalProgress: t.props.progress,
                                userProgress: t.props.participation,
                                blizzardAccount: t.props.blizzardAccount,
                                milestoneFormatter: t.props.milestoneFormatter,
                                objectiveActive: t.props.objectiveActive
                            });
                            return i.createElement(m.Xa, {
                                key: e.id,
                                padding: {
                                    x: 2
                                }
                            }, i.createElement(h, {
                                milestone: e,
                                milestoneBalloon: r,
                                progress: t.props.progress,
                                participation: t.props.participation,
                                blizzardAccount: t.props.blizzardAccount,
                                showRewardImage: !0,
                                milestoneFormatter: t.props.milestoneFormatter
                            }))
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        var e = this.props.milestones.map(function(e) {
                            return e.participationThreshold
                        }).reduce(function(e, t) {
                            return e > t ? e : t
                        }, 0);
                        return i.createElement(m.yb, {
                            className: "campaigns-progress-section",
                            border: !0,
                            display: m.X.Block,
                            background: m.r.Base,
                            borderRadius: m.x.Large
                        }, i.createElement(m.yb, {
                            className: "campaigns-progress-section__header",
                            borderBottom: !0,
                            padding: 2
                        }, i.createElement(m.Xa, {
                            className: "campaigns-progress-section__titles"
                        }, i.createElement(m.Pa, {
                            display: m.X.InlineBlock
                        }, i.createElement(m.W, {
                            bold: !0,
                            type: m.Ob.H6,
                            color: m.O.Link,
                            transform: m.Nb.Uppercase
                        }, this.props.title)), this.props.subtitle && i.createElement(m.Pa, {
                            margin: {
                                left: 1
                            },
                            display: m.X.InlineBlock
                        }, i.createElement(m.W, {
                            className: "campaigns-progress-section__subtitle",
                            bold: !0,
                            type: m.Ob.H6,
                            transform: m.Nb.Uppercase
                        }, this.renderStageDescription(this.props.subtitle)))), i.createElement(m.Xa, {
                            display: m.X.Flex,
                            justifyContent: m.Wa.Between,
                            alignItems: m.f.Center
                        }, i.createElement(m.Xa, {
                            display: m.X.Flex,
                            alignItems: m.f.Baseline
                        }, i.createElement(m.Xa, {
                            padding: {
                                right: .5
                            }
                        }, i.createElement(m.ob, {
                            type: m.qb.Brand,
                            height: 30,
                            width: 30,
                            asset: m.pb.Bits
                        })), i.createElement(m.W, {
                            type: m.Ob.H1,
                            bold: !0
                        }, Object(o.f)(this.props.progress))), this.props.showRewardsButton && i.createElement(m.Xa, null, this.renderRewardsButton())), i.createElement(m.Xa, {
                            className: "campaigns-progress-section__description"
                        }, i.createElement(m.W, null, this.props.description)), this.props.showUnlocked && i.createElement(m.Xa, {
                            "data-test-selector": k.UnlockedText,
                            display: m.X.Flex,
                            justifyContent: m.Wa.Between,
                            margin: {
                                top: 1
                            }
                        }, i.createElement(m.Xa, {
                            display: m.X.Flex,
                            alignItems: m.f.Center
                        }, i.createElement(m.Xa, {
                            margin: {
                                right: 1
                            }
                        }, this.props.participation >= e ? i.createElement(b.a, null) : i.createElement(f.a, null)), i.createElement(m.W, {
                            bold: !0
                        }, Object(o.d)("Cheer {threshold} Bits", {
                            threshold: Object(o.f)(e)
                        }, "CampaignsProgressSection"))), i.createElement(m.Xa, {
                            display: m.X.Flex
                        }, this.props.isLoggedIn && i.createElement(m.Xa, {
                            margin: {
                                right: 1
                            }
                        }, i.createElement(m.z, {
                            onClick: w.a
                        }, Object(o.d)("Cheer Now", "CampaignsProgressSection"))), this.renderRewardsButton()))), i.createElement(m.Xa, {
                            padding: 2
                        }, this.renderSectionContents()))
                    }, t.prototype.renderSectionContents = function() {
                        return this.props.showUnlocked ? i.createElement(m.Xa, {
                            "data-test-selector": k.UnlockedNodes,
                            display: m.X.Flex,
                            justifyContent: m.Wa.Center,
                            alignItems: m.f.End,
                            margin: {
                                top: 2
                            }
                        }, this.props.milestones.map(this.renderMilestoneNode)) : i.createElement(E, {
                            milestones: this.props.milestones,
                            progress: this.props.progress,
                            participation: this.props.participation,
                            userHasPrime: this.props.userHasPrime,
                            blizzardAccount: this.props.blizzardAccount,
                            milestoneFormatter: this.props.milestoneFormatter,
                            objectiveActive: this.props.objectiveActive
                        })
                    }, t.prototype.renderRewardsButton = function() {
                        return i.createElement(m.z, {
                            onClick: this.props.tabSwitch,
                            type: m.F.Hollow,
                            "data-tab-target": C.a.Rewards
                        }, Object(o.d)("See All Rewards", "CampaignsProgressSection"))
                    }, t.prototype.renderStageDescription = function(e) {
                        return {
                            "stage 1": Object(o.d)("Stage 1", "CampaignsProgressSection"),
                            "stage 2": Object(o.d)("Stage 2", "CampaignsProgressSection"),
                            "stage 3": Object(o.d)("Stage 3", "CampaignsProgressSection")
                        }[e.toLowerCase()] || e
                    }, t
                }(i.Component),
                A = N;
            r.d(t, !1, function() {
                return k
            }), r.d(t, !1, function() {
                return N
            }), r.d(t, "a", function() {
                return A
            })
        },
        G30c: function(e, t, r) {
            "use strict";
            var n = r("mrSG"),
                a = r("q1tI"),
                i = r("oJmH"),
                o = r("/7QA"),
                s = r("yR8l"),
                l = r("eDVu"),
                c = r("+LJB"),
                d = r("i4ay"),
                m = r("Ue10"),
                p = r("12i0"),
                u = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return n.__extends(t, e), t.prototype.render = function() {
                        var e = this.props.data,
                            t = e.user && e.user.tournament && e.user.tournament.teamLeaderboard;
                        return e.loading && !t ? a.createElement(m.Za, {
                            fillContent: !0
                        }) : !t || e.error ? a.createElement(m.Xa, {
                            fullHeight: !0,
                            fullWidth: !0,
                            textAlign: m.Kb.Center,
                            padding: {
                                top: 4
                            }
                        }, a.createElement(m.ob, {
                            asset: m.pb.DeadGlitch,
                            fill: !0,
                            width: 50,
                            height: 50
                        })) : a.createElement(m.yb, {
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
                        }, a.createElement(m.Xa, {
                            padding: {
                                bottom: 2
                            }
                        }, a.createElement(m.W, {
                            type: m.Ob.H3
                        }, Object(o.d)("Team Leaderboards", "CampaignsProgressTab"))), a.createElement(d.a, {
                            leaderboardRows: t.items.edges,
                            pageSize: 10,
                            channelID: this.props.channelID,
                            isTeam: !0,
                            domain: this.props.domain,
                            hideLocale: this.props.hideLocale
                        }))
                    }, t
                }(a.Component),
                h = Object(i.compose)(Object(s.a)(p, {
                    options: function(e) {
                        return {
                            variables: {
                                channelID: e.channelID
                            }
                        }
                    }
                }), Object(l.a)(function(e) {
                    return Object(c.a)(p, e.channelID, e.data.user && e.data.user.tournament && e.data.user.tournament.teamLeaderboard)
                }))(u);
            r.d(t, !1, function() {
                return u
            }), r.d(t, "a", function() {
                return h
            })
        },
        IEPL: function(e, t, r) {},
        "ImQ+": function(e, t, r) {
            "use strict";
            var n, a = r("mrSG"),
                i = r("q1tI"),
                o = r("/7QA"),
                s = r("gzKk"),
                l = r("zF2X"),
                c = r("OTph"),
                d = r("fHRJ"),
                m = r("Ue10");
            r("hR8f");
            ! function(e) {
                e.Reward = "campaigns-reward-row-reward"
            }(n || (n = {}));
            var p = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        var e = this;
                        return i.createElement(m.Xa, {
                            className: "campaigns-reward-row"
                        }, i.createElement(m.Ja, {
                            justifyContent: m.Wa.Start,
                            gutterSize: m.Ka.None
                        }, this.props.milestones.map(function(t) {
                            return i.createElement(m.P, {
                                key: t.id,
                                cols: {
                                    default: 6,
                                    sm: 4,
                                    lg: 3,
                                    xl: 2
                                }
                            }, i.createElement(m.yb, {
                                className: "campaigns-reward-row__border",
                                "data-test-selector": n.Reward,
                                borderLeft: !0,
                                borderRight: !0
                            }, i.createElement(l.a, {
                                balloon: e.renderMilestoneBalloon(t)
                            }, i.createElement(m.Xa, {
                                position: m.fb.Relative
                            }, i.createElement(d.a, {
                                imageURL: t.rewards[0] && t.rewards[0].imageURL,
                                imageAlt: t.rewards[0] && t.rewards[0].name,
                                rarity: t.rewards[0] && t.rewards[0].rarity,
                                imageClassName: "campaigns-reward-row__reward-image"
                            }), void 0 !== e.props.userProgress && e.props.userProgress < t.threshold && i.createElement(m.yb, {
                                className: "campaigns-reward-row__locked-overlay",
                                fullHeight: !0,
                                fullWidth: !0,
                                attachTop: !0,
                                attachLeft: !0,
                                position: m.fb.Absolute,
                                display: m.X.Flex,
                                justifyContent: m.Wa.Center,
                                alignItems: m.f.Center
                            }, i.createElement(m.Xa, {
                                className: "campaigns-reward-row__overlay-icon"
                            }, i.createElement(m.ob, {
                                fill: !0,
                                asset: m.pb.Lock
                            })))))))
                        })))
                    }, t.prototype.renderMilestoneBalloon = function(e) {
                        return i.createElement(c.a, {
                            milestone: e,
                            reward: e.rewards[0],
                            globalProgress: this.props.globalProgress,
                            userProgress: this.props.userProgress,
                            blizzardAccount: this.props.blizzardAccount,
                            milestoneFormatter: this.props.milestoneFormatter,
                            objectiveActive: this.props.objectiveActive
                        })
                    }, t
                }(i.Component),
                u = r("vt2+"),
                h = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        var e = Object(o.d)("Personal Rewards", "CampaignsIndividualRewards"),
                            t = this.props.milestones.length,
                            r = this.props.milestones.filter(function(e) {
                                return e.rewards.some(function(e) {
                                    return e.isEntitled
                                })
                            }).length,
                            n = Object(u.b)(this.props.milestones);
                        return i.createElement(s.a, {
                            title: e,
                            description: this.props.description,
                            totalRewards: t,
                            rewardsEntitled: r,
                            showCheer: this.props.showCheer
                        }, i.createElement(p, {
                            milestones: n,
                            blizzardAccount: this.props.blizzardAccount,
                            userProgress: this.props.progress,
                            milestoneFormatter: this.props.milestoneFormatter,
                            objectiveActive: this.props.objectiveActive
                        }))
                    }, t
                }(i.Component);
            r.d(t, "a", function() {
                return h
            })
        },
        Jio5: function(e, t, r) {},
        KUJM: function(e, t, r) {},
        NcrI: function(e, t) {
            var r = {
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
            r.loc.source = {
                body: "query CampaignsLeaderboardData($userIDs: [ID!] $isTeam: Boolean!) {\nusers (ids: $userIDs) {\nid\ndisplayName @skip(if: $isTeam)\nprofileImageURL(width: 50) @skip(if: $isTeam)\ntournament @include(if: $isTeam) {\nid\nteams {\nid\nname\nlogoURL\ndivision\n}\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = r
        },
        OTph: function(e, t, r) {
            "use strict";
            var n, a = r("/MKj"),
                i = r("kRBY"),
                o = r("mrSG"),
                s = r("q1tI"),
                l = r("/7QA"),
                c = r("yR8l"),
                d = r("sAoK"),
                m = r("klJU"),
                p = r("fHRJ"),
                u = r("QlRw"),
                h = r("rC/K"),
                g = r("RhRD"),
                b = r("vt2+"),
                f = r("Ue10"),
                v = r("QHS7");
            r("+L10");
            ! function(e) {
                e.AvailableAndRedeemedText = "milestone-progress-balloon-available-and-redeemed-text", e.AvailableAndUnredeemedText = "milestone-progress-balloon-available-and-unredeemed-text", e.AvailableAndUnlinkedText = "milestone-progress-balloon-available-and-unlinked-text", e.GloballyAvailableCheerMoreText = "milestone-progress-balloon-globally-available-cheer-more-text", e.GlobalKeepCheeringText = "milestone-progress-balloon-keep-cheering-text", e.GlobalLockedText = "milestone-progress-balloon-global-locked-text", e.IndividualLockedText = "milestone-progress-balloon-individual-locked-text", e.UnavailableText = "milestone-progress-balloon-unavailable-text", e.AvailabilityPendingText = "milestone-progress-balloon-availability-pending-text", e.StatusIconUnavailable = "milestone-progress-balloon-unavailable-icon", e.StatusIconLocked = "milestone-progress-balloon-locked-icon", e.StatusIconUnlocked = "milestone-progress-balloon-unlocked-icon", e.RedeemedIndicator = "milestone-progress-balloon-redeemed-indicator", e.UnredeemedIndicator = "milestone-progress-balloon-unredeemed-indicator", e.AvailabilityPendingIndicator = "milestone-progress-balloon-availability-pending-indicator", e.GlobalCheerCTA = "milestone-progress-balloon-global-cheer-cta", e.CheerNowButton = "milestone-progress-balloon-cheer-now-button", e.NotAvailableText = "milestone-progress-balloon-not-available-text", e.NotAvailableDate = "milestone-progress-balloon-not-available-date", e.NotAvailableMessage = "milestone-progress-balloon-not-available-message", e.ObjectiveOverMessage = "milestone-progress-balloon-objective-over-message"
            }(n || (n = {}));
            var y = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        isErrorState: !1
                    }, t
                }
                return o.__extends(t, e), t.prototype.render = function() {
                    var e = this.props.trigger && this.props.trigger.triggerType === g.a.Cheer;
                    if (!this.props.milestone && !e) return null;
                    if (this.props.milestone && !Object(b.a)(this.props.milestone, new Date(Date.now()))) return this.renderNotAvailableBallon();
                    var t, r = !!this.props.milestone && this.props.milestone.objectiveTag === h.a.Global;
                    return t = e ? this.renderCheerbombTriggerBodyContent() : r ? this.renderGlobalObjectiveBodyContent() : this.renderIndividualObjectiveBodyContent(), s.createElement(f.Xa, {
                        className: "milestone-progress-balloon",
                        textAlign: f.Kb.Left
                    }, s.createElement(f.Xa, {
                        className: "milestone-progress-balloon__reward-showcase"
                    }, s.createElement(p.a, {
                        imageURL: this.props.reward.imageURL,
                        imageAlt: this.props.reward.name,
                        rarity: this.props.reward.rarity
                    })), s.createElement(f.Xa, {
                        margin: 1
                    }, s.createElement(f.yb, {
                        display: f.X.Flex,
                        justifyContent: f.Wa.Between,
                        borderBottom: !0,
                        padding: {
                            bottom: 1
                        }
                    }, s.createElement(f.Xa, null, s.createElement(f.W, {
                        bold: !0,
                        fontSize: f.Ca.Size4
                    }, this.props.reward.name), s.createElement(f.W, {
                        color: f.O.Alt2
                    }, this.props.reward.description)), s.createElement(f.Xa, null, this.renderStatusSVG(), this.props.milestone && s.createElement(f.Xa, {
                        display: f.X.Flex,
                        alignItems: f.f.Center
                    }, s.createElement(f.ob, {
                        type: f.qb.Brand,
                        asset: f.pb.Bits
                    }), s.createElement(f.W, {
                        fontSize: f.Ca.Size5,
                        type: f.Ob.Span
                    }, Object(l.f)(this.props.milestone.threshold))))), s.createElement(f.Xa, {
                        margin: {
                            top: 1
                        }
                    }, t)))
                }, t.prototype.renderNotAvailableBallon = function() {
                    return s.createElement(f.Xa, {
                        className: "milestone-progress-balloon",
                        textAlign: f.Kb.Left
                    }, s.createElement(f.Xa, {
                        className: "milestone-progress-balloon__reward-showcase"
                    }, s.createElement(p.a, {
                        imageURL: this.props.milestoneFormatter.getUnannouncedMilestoneImage()
                    })), s.createElement(f.Xa, {
                        margin: 1
                    }, s.createElement(f.yb, {
                        "data-test-selector": n.NotAvailableText,
                        display: f.X.Flex,
                        justifyContent: f.Wa.Between,
                        borderBottom: !0,
                        padding: {
                            bottom: 1
                        }
                    }, s.createElement(f.Xa, null, s.createElement(f.W, {
                        "data-test-selector": n.NotAvailableMessage,
                        bold: !0,
                        fontSize: f.Ca.Size4
                    }, this.props.milestoneFormatter.formatMilestoneNotAvailableMessage()), this.props.milestone && s.createElement(f.W, {
                        "data-test-selector": n.NotAvailableDate,
                        color: f.O.Alt2
                    }, Object(l.c)(new Date(this.props.milestone.startDate), {
                        month: "numeric",
                        day: "numeric"
                    })))), s.createElement(f.Xa, {
                        margin: {
                            top: 1
                        }
                    }, s.createElement(f.W, {
                        fontSize: f.Ca.Size5,
                        type: f.Ob.Span
                    }, Object(l.d)("This reward has not yet been announced.", "MilestoneProgressBalloon")))))
                }, t.prototype.renderStatusSVG = function() {
                    var e, t = f.pb.Lock,
                        r = n.StatusIconLocked;
                    return (this.props.milestone && this.isRewardUnlocked() || this.props.trigger && this.props.triggerRewardRedeemed) && (e = f.qb.Success, t = f.pb.Unlock, r = n.StatusIconUnlocked), this.isRewardUnavailable() && (e = f.qb.Alert, t = f.pb.Ban, r = n.StatusIconUnavailable), s.createElement(f.Xa, {
                        "data-test-selector": r,
                        textAlign: f.Kb.Right,
                        className: "milestone-progress-balloon__status-svg"
                    }, s.createElement(f.ob, {
                        type: e,
                        asset: t
                    }))
                }, t.prototype.renderGlobalObjectiveBodyContent = function() {
                    return this.props.milestone ? this.isRewardUnavailable() ? this.renderUnavailableText() : this.isStageLockedAndUnavailable() ? this.renderLockedAndUnavailableText() : this.isRewardGloballyUnlocked() && this.isRewardParticipationMet() ? this.props.reward.isEntitled ? this.props.reward.metadata && this.props.reward.metadata.isPending ? s.createElement(s.Fragment, null, this.renderAvailabilityPendingText(), this.renderRedeemedIndicator(), this.renderAvailabilityPendingIndicatorIfNeeded()) : s.createElement(s.Fragment, null, this.renderRedeemedText(), this.renderRedeemedIndicator(), this.renderAvailabilityPendingIndicatorIfNeeded()) : this.props.blizzardAccount ? s.createElement(s.Fragment, null, this.renderUnredeemedText(), this.renderGlobalCheerCTA(), this.renderUnredeemedIndicator(), this.renderAvailabilityPendingIndicatorIfNeeded()) : s.createElement(s.Fragment, null, this.renderUnlinkedText(), this.renderGlobalCheerCTA(), this.renderUnredeemedIndicator(), this.renderAvailabilityPendingIndicatorIfNeeded()) : this.isRewardGloballyUnlocked() ? s.createElement(s.Fragment, null, s.createElement(f.W, {
                        "data-test-selector": n.GloballyAvailableCheerMoreText
                    }, this.props.milestoneFormatter.formatCommunityUnlockedMessage(this.props.milestone.participationThreshold)), this.renderGlobalCheerCTA(), this.renderAvailabilityPendingIndicatorIfNeeded()) : this.isRewardParticipationMet() ? s.createElement(s.Fragment, null, s.createElement(f.W, {
                        "data-test-selector": n.GlobalKeepCheeringText
                    }, this.props.milestoneFormatter.formatKeepCheeringMessage()), this.renderGlobalCheerCTA(), this.renderAvailabilityPendingIndicatorIfNeeded()) : s.createElement(s.Fragment, null, s.createElement(f.W, {
                        "data-test-selector": n.GlobalLockedText
                    }, this.props.milestoneFormatter.formatParticipationThresholdMessage(this.props.milestone.participationThreshold)), this.renderGlobalCheerCTA(), this.renderAvailabilityPendingIndicatorIfNeeded()) : null
                }, t.prototype.renderIndividualObjectiveBodyContent = function() {
                    return this.isRewardUnavailable() ? this.renderUnavailableText() : this.isRewardIndividuallyUnlocked() ? this.props.reward.isEntitled ? this.props.reward.metadata && this.props.reward.metadata.isPending ? s.createElement(s.Fragment, null, this.renderAvailabilityPendingText(), this.renderRedeemedIndicator(), this.renderAvailabilityPendingIndicatorIfNeeded()) : s.createElement(s.Fragment, null, this.renderRedeemedText(), this.renderRedeemedIndicator()) : this.props.blizzardAccount ? s.createElement(s.Fragment, null, this.renderUnredeemedText(), this.renderUnredeemedIndicator(), this.renderAvailabilityPendingIndicatorIfNeeded()) : s.createElement(s.Fragment, null, this.renderUnlinkedText(), this.renderUnredeemedIndicator(), this.renderAvailabilityPendingIndicatorIfNeeded()) : s.createElement(s.Fragment, null, s.createElement(f.W, {
                        "data-test-selector": n.IndividualLockedText
                    }, Object(l.d)("Keep Cheering for your team to unlock this reward!", "MilestoneProgressBalloon"), this.renderAvailabilityPendingIndicatorIfNeeded()), this.renderCheerNowButton())
                }, t.prototype.renderGlobalCheerCTA = function() {
                    if (!this.props.milestone) return null;
                    var e = s.createElement(m.a, null);
                    return this.isRewardParticipationMet() && (e = s.createElement(d.a, null)), s.createElement(f.Xa, {
                        "data-test-selector": n.GlobalCheerCTA,
                        margin: {
                            top: 2
                        },
                        display: f.X.Flex,
                        alignItems: f.f.Center
                    }, s.createElement(f.Xa, {
                        margin: {
                            right: 1
                        },
                        display: f.X.Flex,
                        alignItems: f.f.Center
                    }, e), Object(l.d)("Cheer {amount, number} Bits", {
                        amount: this.props.milestone.participationThreshold
                    }, "MilestoneProgressBalloon"), s.createElement(f.Xa, {
                        margin: {
                            left: "auto"
                        }
                    }, !this.isRewardGloballyUnlocked() && this.renderCheerNowButton()))
                }, t.prototype.renderCheerbombTriggerBodyContent = function() {
                    return this.isCheerbombTriggerRewardClaimedOrClaimable() ? this.props.blizzardAccount ? this.props.triggerRewardRedeemed ? s.createElement(s.Fragment, null, this.renderRedeemedText(), this.renderRedeemedIndicator()) : s.createElement(s.Fragment, null, this.renderUnredeemedText(), this.renderUnredeemedIndicator()) : s.createElement(s.Fragment, null, this.renderUnlinkedText()) : this.renderCheerbombDescriptionText()
                }, t.prototype.renderCheerNowButton = function() {
                    return this.props.isLoggedIn ? s.createElement(f.Xa, {
                        "data-test-selector": n.CheerNowButton,
                        padding: {
                            y: 1
                        }
                    }, s.createElement(f.z, {
                        onClick: this.openBitsCard
                    }, Object(l.d)("Cheer Now", "MilestoneProgressBalloon"))) : null
                }, t.prototype.renderRedeemedIndicator = function() {
                    return s.createElement(f.Xa, {
                        "data-test-selector": n.RedeemedIndicator,
                        padding: {
                            y: .5
                        },
                        display: f.X.Flex,
                        alignItems: f.f.Center
                    }, s.createElement(f.Xa, {
                        margin: {
                            right: 1
                        },
                        display: f.X.Flex,
                        alignItems: f.f.Center
                    }, s.createElement(f.ob, {
                        type: f.qb.Success,
                        asset: f.pb.Check
                    })), s.createElement(f.W, {
                        className: "milestone-progress-balloon__redeemed-text",
                        bold: !0,
                        fontSize: f.Ca.Size5
                    }, Object(l.d)("Redeemed", "MilestoneProgressBalloon")))
                }, t.prototype.renderUnredeemedIndicator = function() {
                    return s.createElement(f.Xa, {
                        "data-test-selector": n.UnredeemedIndicator,
                        padding: {
                            y: .5
                        }
                    }, s.createElement(f.W, {
                        bold: !0,
                        color: f.O.Error,
                        fontSize: f.Ca.Size5
                    }, Object(l.d)("Unredeemed", "MilestoneProgressBalloon")))
                }, t.prototype.renderUnavailableText = function() {
                    return s.createElement(f.W, {
                        "data-test-selector": n.UnavailableText,
                        bold: !0,
                        color: f.O.Error
                    }, Object(l.d)("Sorry, these rewards are not available in your region.", "MilestoneProgressBalloon"))
                }, t.prototype.renderRedeemedText = function() {
                    var e = Object(l.d)("This reward is unlocked and available on Twitch.", "MilestoneProgressBalloon");
                    return "igc" === this.props.reward.type && (e = Object(l.d)("This reward is unlocked and available in-game.", "MilestoneProgressBalloon")), s.createElement(f.W, {
                        "data-test-selector": n.AvailableAndRedeemedText
                    }, e)
                }, t.prototype.renderUnredeemedText = function() {
                    return s.createElement(f.W, {
                        "data-test-selector": n.AvailableAndUnredeemedText
                    }, Object(l.d)("Reward unlocked. Click 'Redeem All' on the loot tab to redeem this reward.", "MilestoneProgressBalloon"))
                }, t.prototype.renderUnlinkedText = function() {
                    return s.createElement(f.W, {
                        "data-test-selector": n.AvailableAndUnlinkedText
                    }, Object(l.d)("Link your Blizzard account to Twitch to claim this reward.", "MilestoneProgressBalloon"))
                }, t.prototype.renderAvailabilityPendingText = function() {
                    return s.createElement(f.W, {
                        "data-test-selector": n.AvailabilityPendingText
                    }, Object(l.d)("This reward is unlocked and will be available in-game soon.", "MilestoneProgressBalloon"))
                }, t.prototype.renderAvailabilityPendingIndicatorIfNeeded = function() {
                    if (this.props.reward.metadata && this.props.reward.metadata.isPending) return s.createElement(f.W, {
                        bold: !0,
                        className: "milestone-progress-balloon__availability-pending-indicator",
                        "data-test-selector": n.AvailabilityPendingIndicator
                    }, Object(l.d)("In-Game Availability Pending", "MilestoneProgressBalloon"))
                }, t.prototype.renderCheerbombDescriptionText = function() {
                    return s.createElement(f.W, null, this.props.milestoneFormatter.formatCheerbombDescriptionMessage())
                }, t.prototype.renderLockedAndUnavailableText = function() {
                    return s.createElement(f.W, {
                        "data-test-selector": n.ObjectiveOverMessage
                    }, this.props.milestoneFormatter.formatPostStageMessage())
                }, t.prototype.isRewardUnavailable = function() {
                    return !!this.props.blizzardAccount && this.props.blizzardAccount.region === u.a.China
                }, t.prototype.isRewardGloballyUnlocked = function() {
                    return void 0 !== this.props.globalProgress && !!this.props.milestone && this.props.milestone.threshold <= this.props.globalProgress
                }, t.prototype.isRewardParticipationMet = function() {
                    return void 0 !== this.props.userProgress && !!this.props.milestone && this.props.milestone.participationThreshold <= this.props.userProgress
                }, t.prototype.isRewardIndividuallyUnlocked = function() {
                    return void 0 !== this.props.userProgress && !!this.props.milestone && this.props.milestone.threshold <= this.props.userProgress
                }, t.prototype.isRewardUnlocked = function() {
                    return !!this.props.milestone && this.props.milestone.objectiveTag === h.a.Global && this.isRewardGloballyUnlocked() || this.isRewardIndividuallyUnlocked()
                }, t.prototype.isCheerbombTriggerRewardClaimedOrClaimable = function() {
                    return this.props.reward.entitledQuantity > 0 || this.props.reward.canBeFulfilledQuantity > 0
                }, t.prototype.isStageLockedAndUnavailable = function() {
                    return !!this.props.milestone && (this.props.milestone.objectiveTag === h.a.Global && (!this.props.objectiveActive && 0 === this.props.reward.entitledQuantity && 0 === this.props.reward.canBeFulfilledQuantity))
                }, t.prototype.openBitsCard = function() {
                    var e = document.querySelector('[data-a-target="bits-button"]');
                    e && e.click()
                }, t = o.__decorate([Object(c.a)(v, {
                    name: "claimMilestone"
                })], t)
            }(s.Component);
            var k = Object(a.connect)(function(e) {
                return {
                    isLoggedIn: Object(i.f)(e)
                }
            })(y);
            r.d(t, "a", function() {
                return k
            })
        },
        QHS7: function(e, t) {
            var r = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "mutation",
                    name: {
                        kind: "Name",
                        value: "HgcClaimMilestone"
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
                    end: 169
                }
            };
            r.loc.source = {
                body: "mutation HgcClaimMilestone($input: ClaimMilestoneInput!) {\nclaimMilestone(input: $input) {\nmilestoneID\nrewards {\nid\nname\ndescription\ntype\nisEntitled\ncanBeFulfilled\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = r
        },
        QlRw: function(e, t, r) {
            "use strict";
            var n;
            r.d(t, "a", function() {
                    return n
                }),
                function(e) {
                    e.NorthAmerica = "us", e.Europe = "eu", e.Korea = "kr", e.Taiwan = "tw", e.China = "cn", e.SouthEastAsia = "sea"
                }(n || (n = {}))
        },
        RNrf: function(e, t) {
            var r = {
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
            r.loc.source = {
                body: "query BlizzardAccountForUser {\ncurrentUser {\nid\nblizzardAccount {\nid\nbattleTag\nregion\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = r
        },
        RhRD: function(e, t, r) {
            "use strict";
            var n;
            r.d(t, "a", function() {
                    return n
                }),
                function(e) {
                    e.Cheer = "CHEER"
                }(n || (n = {}))
        },
        RkuX: function(e, t, r) {},
        Shl3: function(e, t, r) {},
        SiBg: function(e, t, r) {
            "use strict";
            var n = r("mrSG"),
                a = r("/7QA"),
                i = r("8n0m"),
                o = r("b6Yk"),
                s = r("kRBY"),
                l = r("rj3Y"),
                c = r("uzvh");

            function d(e) {
                return function(t, r) {
                    return e({
                        store: {
                            dispatch: t,
                            getState: r
                        }
                    })
                }
            }
            r.d(t, "a", function() {
                return m
            }), r.d(t, "b", function() {
                return p
            }), r.d(t, "c", function() {
                return u
            }), r.d(t, "e", function() {
                return b
            }), r.d(t, "d", function() {
                return v
            }), r.d(t, "f", function() {
                return y
            });
            var m = "collections.COLLECTIONS_FETCHED",
                p = "collections.COLLECTIONS_FETCHED_FOR_VIDEO_ID",
                u = "collections.COLLECTIONS_FETCH_FAILED",
                h = "collections.COLLECTIONS_CREATE_FAILED",
                g = "collections.COLLECTIONS_UPDATE_FAILED";

            function b(e, t) {
                var r = this;
                return d(function(i) {
                    return n.__awaiter(r, void 0, void 0, function() {
                        var r, s, c;
                        return n.__generator(this, function(n) {
                            switch (n.label) {
                                case 0:
                                    return n.trys.push([0, 3, , 4]), [4, o.a.getOrThrow("/v5/channels/" + e + "/collections/?limit=100")];
                                case 1:
                                    return r = n.sent(), i.store.dispatch({
                                        type: m,
                                        collections: Object(l.d)(r.body)
                                    }), [4, o.a.getOrThrow("/v5/channels/" + e + "/collections/?limit=100&containing_item=" + l.b.Video + ":" + t)];
                                case 2:
                                    return s = n.sent(), i.store.dispatch({
                                        type: p,
                                        containingCollections: Object(l.d)(s.body),
                                        videoID: t
                                    }), [3, 4];
                                case 3:
                                    return c = n.sent(), a.k.error(c, "Failed to fetch collections"), i.store.dispatch({
                                        type: u,
                                        errorType: "Fetch Failed",
                                        errorMessage: "Fetching collections for channel " + e + " and video " + t + " failed."
                                    }), [3, 4];
                                case 4:
                                    return [2]
                            }
                        })
                    })
                })
            }
            var f = function(e, t) {
                return o.a.postOrThrow(e, {
                    body: t
                })
            };

            function v(e, t, r, o) {
                var c = this;
                return d(function(d) {
                    return n.__awaiter(c, void 0, void 0, function() {
                        var c, u, g, b, v, y, k, E;
                        return n.__generator(this, function(n) {
                            switch (n.label) {
                                case 0:
                                    c = d.store.getState(), u = c.collections, g = Object(s.e)(c), b = g ? g.id : "", n.label = 1;
                                case 1:
                                    return n.trys.push([1, 4, , 5]), [4, f("/v5/channels/" + e + "/collections/", {
                                        title: t
                                    })];
                                case 2:
                                    return v = n.sent(), y = Object(l.c)(v.body), u.collections = [y].concat(u.collections), d.store.dispatch({
                                        type: m,
                                        collections: u.collections
                                    }), Object(i.b)({
                                        channelID: e,
                                        playlistID: y.id,
                                        userID: b,
                                        title: y.title
                                    }), k = {
                                        type: l.b.Video,
                                        id: r
                                    }, [4, f("/v5/collections/" + y.id + "/items", k)];
                                case 3:
                                    return n.sent(), u.containingCollections = [y].concat(u.containingCollections), d.store.dispatch({
                                        type: p,
                                        containingCollections: u.containingCollections,
                                        videoID: r
                                    }), Object(i.a)({
                                        channelID: e,
                                        itemID: r,
                                        itemPosition: -1,
                                        itemType: l.b.Video,
                                        playlistID: y.id,
                                        userID: b,
                                        place: o
                                    }), [3, 5];
                                case 4:
                                    return E = n.sent(), a.k.error(E, "Failed to add new collection with video"), d.store.dispatch({
                                        type: h,
                                        errorType: "Create Failed",
                                        errorMessage: "Creating collections for channel " + e + " and video " + r + " with title " + t + "."
                                    }), [3, 5];
                                case 5:
                                    return [2]
                            }
                        })
                    })
                })
            }

            function y(e, t, r, m) {
                var u = this;
                return d(function(d) {
                    return n.__awaiter(u, void 0, void 0, function() {
                        var u, h, b, v, y, k, E, C, w;
                        return n.__generator(this, function(n) {
                            switch (n.label) {
                                case 0:
                                    u = d.store.getState(), h = Object(c.a)(u), b = Object(s.e)(u), v = b ? b.id : "", n.label = 1;
                                case 1:
                                    return n.trys.push([1, 6, , 7]), h.map(function(e) {
                                        return e.id
                                    }).includes(e.id) ? (y = JSON.stringify({
                                        type: l.b.Video,
                                        id: t
                                    }), k = btoa(y), [4, o.a.deleteOrThrow("/v5/collections/" + e.id + "/items/" + k)]) : [3, 3];
                                case 2:
                                    return n.sent(), C = h.filter(function(t) {
                                        return t.id !== e.id
                                    }), d.store.dispatch({
                                        type: p,
                                        containingCollections: C,
                                        videoID: t
                                    }), Object(i.c)({
                                        channelID: r,
                                        itemID: t,
                                        itemPosition: -1,
                                        itemType: l.b.Video,
                                        playlistID: e.id,
                                        userID: v
                                    }), [3, 5];
                                case 3:
                                    return E = {
                                        type: l.b.Video,
                                        id: t
                                    }, [4, f("/v5/collections/" + e.id + "/items", E)];
                                case 4:
                                    n.sent(), C = h.concat([e]), d.store.dispatch({
                                        type: p,
                                        containingCollections: C,
                                        videoID: t
                                    }), Object(i.a)({
                                        channelID: r,
                                        itemID: t,
                                        itemPosition: -1,
                                        itemType: l.b.Video,
                                        playlistID: e.id,
                                        userID: v,
                                        place: m
                                    }), n.label = 5;
                                case 5:
                                    return [3, 7];
                                case 6:
                                    return w = n.sent(), a.k.error(w, "Failed to fetch collections"), d.store.dispatch({
                                        type: g,
                                        errorType: "Update Failed",
                                        errorMessage: "Updating collection " + e.id + " for channel " + r + " and video " + t + " failed."
                                    }), [3, 7];
                                case 7:
                                    return [2]
                            }
                        })
                    })
                })
            }
        },
        "T1g+": function(e, t, r) {
            "use strict";
            r.d(t, "a", function() {
                return n
            });
            var n = function() {
                var e = document.querySelector('[data-a-target="bits-button"]');
                e && e.click()
            }
        },
        WaLP: function(e, t, r) {
            "use strict";
            var n = r("/MKj"),
                a = r("kRBY"),
                i = r("mrSG"),
                o = r("q1tI"),
                s = r("oJmH"),
                l = r("/7QA"),
                c = r("yR8l"),
                d = r("eDVu"),
                m = r("+LJB"),
                p = r("i4ay"),
                u = r("Ue10"),
                h = r("ktVs"),
                g = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        return !this.props.data || this.props.data.loading && !this.props.data.user ? o.createElement(u.Za, {
                            fillContent: !0
                        }) : this.props.data && this.props.data.error ? o.createElement(u.Xa, {
                            fullHeight: !0,
                            fullWidth: !0,
                            textAlign: u.Kb.Center,
                            padding: {
                                top: 4
                            }
                        }, o.createElement(u.ob, {
                            asset: u.pb.DeadGlitch,
                            fill: !0,
                            width: 50,
                            height: 50
                        })) : o.createElement(u.yb, {
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
                        }, o.createElement(u.Xa, {
                            padding: {
                                bottom: 2
                            }
                        }, o.createElement(u.W, {
                            type: u.Ob.H3
                        }, Object(l.d)("Individual Leaderboards", "CampaignsProgressTab"))), o.createElement(p.a, {
                            leaderboardRows: this.props.data.user.tournament.globalLeaderboard.items.edges,
                            pageSize: 10,
                            channelID: this.props.channelID,
                            isTeam: !1,
                            userRow: this.props.data.user.tournament.self && this.props.data.user.tournament.self.globalLeaderboardItem
                        }))
                    }, t
                }(o.Component),
                b = Object(s.compose)(Object(c.a)(h, {
                    options: function(e) {
                        return {
                            variables: {
                                channelID: e.channelID
                            }
                        }
                    }
                }), Object(d.a)(function(e) {
                    return Object(m.a)(h, e.channelID, e.data.user && e.data.user.tournament && e.data.user.tournament.globalLeaderboard, e.user && e.user.id)
                }))(g);
            var f = Object(n.connect)(function(e) {
                return {
                    user: Object(a.e)(e)
                }
            })(b);
            r.d(t, "a", function() {
                return f
            })
        },
        Yg6M: function(e, t, r) {},
        aUl8: function(e, t, r) {},
        "bt+X": function(e, t, r) {},
        cUCe: function(e, t, r) {
            "use strict";
            var n = r("q1tI"),
                a = (r("Yg6M"), function() {
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
            r.d(t, "a", function() {
                return a
            })
        },
        fHRJ: function(e, t, r) {
            "use strict";
            var n, a = r("mrSG"),
                i = r("TSYQ"),
                o = r("q1tI"),
                s = r("Ue10");
            r("2iq9");
            ! function(e) {
                e.RewardShowcase = "reward-showcase"
            }(n || (n = {}));
            var l = {
                    0: "reward-showcase--no-rarity",
                    1: "reward-showcase--rare",
                    2: "reward-showcase--epic",
                    3: "reward-showcase--legendary"
                },
                c = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        var e = this.props.rarity;
                        void 0 === e && (e = 0);
                        var t = i(this.props.className, "reward-showcase", l[e]),
                            r = i(this.props.imageClassName, "reward-showcase__image");
                        return o.createElement(s.Xa, {
                            "data-test-selector": n.RewardShowcase,
                            display: s.X.Flex,
                            alignItems: s.f.Center,
                            justifyContent: s.Wa.Center,
                            className: t
                        }, o.createElement(s.S, {
                            className: r,
                            src: this.props.imageURL || "",
                            alt: this.props.imageAlt || ""
                        }))
                    }, t
                }(o.Component);
            r.d(t, !1, function() {
                return n
            }), r.d(t, "a", function() {
                return c
            })
        },
        fR2g: function(e, t, r) {
            "use strict";
            var n = r("mrSG"),
                a = r("q1tI"),
                i = r("/7QA"),
                o = r("Ue10"),
                s = (r("ywDU"), function() {
                    return a.createElement(o.Xa, {
                        className: "esports-campaign-new-feature",
                        position: o.fb.Relative
                    }, a.createElement(o.Xa, {
                        position: o.fb.Absolute,
                        attachRight: !0,
                        attachTop: !0
                    }, a.createElement(o.cb, {
                        label: Object(i.d)("New", "CampaignsTabs"),
                        type: o.db.Alert
                    })))
                }),
                l = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return n.__extends(t, e), t.prototype.render = function() {
                        var e = new Date(Date.now()),
                            t = !1;
                        return this.props.newDisplayInfo && this.props.newDisplayInfo.startDate ? t = this.props.newDisplayInfo && this.props.newDisplayInfo.endDate ? this.props.newDisplayInfo.startDate <= e && this.props.newDisplayInfo.endDate >= e : this.props.newDisplayInfo.startDate <= e : this.props.newDisplayInfo && this.props.newDisplayInfo.endDate && (t = this.props.newDisplayInfo.endDate >= e), this.props.newDisplayInfo && void 0 !== this.props.newDisplayInfo.shouldShow && (t = this.props.newDisplayInfo.shouldShow), a.createElement(o.zb, {
                            active: this.props.isSelected,
                            onClick: this.props.onClick,
                            "data-tab-target": this.props.id
                        }, a.createElement(o.Xa, {
                            display: o.X.Flex
                        }, a.createElement(o.W, {
                            breakpointExtraSmall: {
                                fontSize: o.Ca.Size5
                            },
                            breakpointSmall: {
                                fontSize: o.Ca.Size3
                            },
                            breakpointExtraLarge: {
                                fontSize: o.Ca.Size4
                            },
                            breakpointExtraExtraLarge: {
                                fontSize: o.Ca.Size3
                            },
                            type: o.Ob.H3
                        }, this.props.title), t && a.createElement(s, null)))
                    }, t
                }(a.PureComponent);
            r.d(t, "a", function() {
                return l
            })
        },
        gsJi: function(e, t, r) {},
        gzKk: function(e, t, r) {
            "use strict";
            var n = r("mrSG"),
                a = r("q1tI"),
                i = r("/7QA"),
                o = r("T1g+"),
                s = r("Ue10"),
                l = (r("DR+f"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            activeMilestoneID: void 0
                        }, t
                    }
                    return n.__extends(t, e), t.prototype.render = function() {
                        var e = "campaign-reward-group";
                        return a.createElement(s.yb, {
                            className: e,
                            overflow: s.ab.Hidden,
                            border: !0,
                            borderRadius: s.x.Large,
                            background: s.r.Base
                        }, a.createElement(s.yb, {
                            className: e + "__header",
                            display: s.X.Flex,
                            flexWrap: s.Ba.Wrap,
                            alignItems: s.f.Stretch,
                            borderBottom: !!this.props.children,
                            breakpointLarge: {
                                flexWrap: s.Ba.NoWrap
                            }
                        }, a.createElement(s.yb, {
                            className: e + "__header-main",
                            display: s.X.Flex,
                            flexWrap: s.Ba.Wrap,
                            alignItems: s.f.Stretch,
                            breakpointLarge: {
                                flexWrap: s.Ba.NoWrap
                            },
                            borderRight: !!this.props.headerExtraContent,
                            fullWidth: !0
                        }, a.createElement(s.Xa, {
                            display: s.X.Flex,
                            alignItems: s.f.Stretch
                        }, a.createElement(s.yb, {
                            padding: {
                                x: 2,
                                y: 3
                            },
                            background: s.r.Accent,
                            display: s.X.Flex,
                            alignItems: s.f.Center,
                            justifyContent: s.Wa.Start
                        }, a.createElement(s.W, {
                            color: s.O.Overlay,
                            transform: s.Nb.Uppercase,
                            "data-test-selector": "esports-reward-group-title",
                            fontSize: s.Ca.Size5,
                            type: s.Ob.Strong
                        }, this.props.title)), a.createElement(s.Xa, {
                            className: e + "__header-rewards",
                            display: s.X.Flex,
                            alignItems: s.f.Stretch
                        }, !!this.props.rewardsEntitled && !!this.props.totalRewards && this.props.totalRewards > 0 && a.createElement(s.yb, {
                            "data-test-selector": "esports-reward-group-entitled-rewards-numbers",
                            display: s.X.Flex,
                            padding: {
                                left: 2
                            },
                            className: e + "__header-rewards-entitled",
                            alignItems: s.f.Center,
                            background: s.r.Accent
                        }, a.createElement(s.W, {
                            type: s.Ob.Strong,
                            fontSize: s.Ca.Size2
                        }, Object(i.f)(this.props.rewardsEntitled))), a.createElement(s.Xa, {
                            className: e + "__header-rewards-sep",
                            overflow: s.ab.Hidden
                        }), !!this.props.rewardsEntitled && !!this.props.totalRewards && this.props.totalRewards > 0 && a.createElement(s.Xa, {
                            "data-test-selector": "esports-reward-group-entitled-rewards-numbers",
                            display: s.X.Flex,
                            padding: {
                                right: 2
                            },
                            className: e + "__header-rewards-total",
                            alignItems: s.f.Center
                        }, a.createElement(s.W, {
                            type: s.Ob.Strong,
                            fontSize: s.Ca.Size2
                        }, Object(i.f)(this.props.totalRewards))))), this.props.showCheer && a.createElement(s.Xa, {
                            margin: {
                                left: "auto",
                                right: 2
                            },
                            alignSelf: s.g.Center,
                            className: e + "__claim-button"
                        }, a.createElement(s.z, {
                            type: s.F.Hollow,
                            onClick: o.a
                        }, Object(i.d)("Cheer Now", "HGCRewardGroup"))), a.createElement(s.Pa, {
                            margin: {
                                right: "auto"
                            },
                            padding: 2,
                            flexGrow: 1,
                            alignSelf: s.g.Center
                        }, a.createElement(s.W, {
                            "data-test-selector": "esports-reward-group-description",
                            className: e + "__header-description"
                        }, this.props.description))), this.props.headerExtraContent), this.props.children && a.createElement(s.Xa, {
                            "data-test-selector": "esports-reward-group-display-children",
                            position: s.fb.Relative
                        }, this.props.children))
                    }, t
                }(a.Component));
            r.d(t, !1, function() {
                return "esports-reward-group-title"
            }), r.d(t, !1, function() {
                return "esports-reward-group-description"
            }), r.d(t, !1, function() {
                return "esports-reward-group-display-children"
            }), r.d(t, !1, function() {
                return "esports-reward-group-entitled-rewards-numbers"
            }), r.d(t, "a", function() {
                return l
            })
        },
        hR8f: function(e, t, r) {},
        hRrL: function(e, t, r) {
            "use strict";
            var n = r("/MKj"),
                a = r("kRBY"),
                i = r("mrSG"),
                o = r("q1tI"),
                s = r("oJmH"),
                l = r("/7QA"),
                c = r("yR8l"),
                d = r("Ue10"),
                m = r("7QWs"),
                p = function(e) {
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
                        return o.createElement(d.Xa, {
                            className: "esports-claim-all-rewards-button",
                            display: d.X.InlineFlex,
                            margin: {
                                right: 1
                            },
                            verticalAlign: d.Yb.Bottom
                        }, o.createElement(d.z, {
                            "data-test-selector": "esports-claim-all-button",
                            onClick: this.claimAllRewards,
                            disabled: !this.props.enabled
                        }, this.state.error && o.createElement(d.ob, {
                            "data-test-selector": "esports-claim-all-button-error",
                            asset: d.pb.DeadGlitch
                        }), !this.state.error && e))
                    }, t
                }(o.Component),
                u = Object(s.compose)(Object(c.a)(m, {
                    name: "claimAllRewards"
                }))(p);
            var h = Object(n.connect)(function(e) {
                return {
                    user: Object(a.e)(e)
                }
            })(u);
            r.d(t, "a", function() {
                return h
            })
        },
        i4ay: function(e, t, r) {
            "use strict";
            var n, a = r("mrSG"),
                i = r("q1tI"),
                o = r("/7QA"),
                s = r("yR8l"),
                l = r("f00E"),
                c = r("4Wd7"),
                d = r("4h+t"),
                m = r("Ue10"),
                p = (r("aUl8"), function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(t, e), t.prototype.shouldComponentUpdate = function(e) {
                        return this.props.displayName !== e.displayName || this.props.rank !== e.rank || this.props.score !== e.score || this.props.secondaryName !== e.secondaryName || this.props.imageURL !== e.imageURL
                    }, t.prototype.render = function() {
                        return i.createElement(m.Qa, {
                            display: m.X.Flex,
                            alignItems: m.f.Center,
                            borderBottom: !0,
                            padding: {
                                y: 1
                            }
                        }, i.createElement("li", {
                            className: "campaign-leaderboard-row"
                        }, i.createElement(m.Pa, {
                            margin: {
                                right: 1
                            }
                        }, i.createElement(m.W, {
                            "data-test-selector": "esports-leaderboard-row-rank",
                            color: m.O.Link,
                            bold: !0
                        }, Object(o.f)(this.props.rank))), this.props.imageURL && i.createElement(m.Xa, {
                            "data-test-selector": "esports-leaderboard-row-image-url",
                            margin: {
                                right: 1
                            }
                        }, i.createElement(m.q, {
                            src: this.props.imageURL,
                            size: 30,
                            alt: this.props.displayName + " Avatar"
                        })), i.createElement(m.Xa, {
                            margin: {
                                right: 1
                            }
                        }, this.props.secondaryName && i.createElement(m.W, {
                            "data-test-selector": "esports-leaderboard-row-secondary-name",
                            color: m.O.Link,
                            transform: m.Nb.Uppercase,
                            lineHeight: m.Ya.Heading
                        }, this.props.secondaryName), i.createElement(m.W, {
                            "data-test-selector": "esports-leaderboard-row-display-name",
                            type: m.Ob.H5,
                            bold: !0,
                            lineHeight: m.Ya.Heading
                        }, this.props.displayName)), i.createElement(m.Xa, {
                            display: m.X.Flex,
                            margin: {
                                left: "auto"
                            }
                        }, i.createElement(m.Xa, {
                            className: "campaign-leaderboard-row__cheermote"
                        }, i.createElement(c.a, {
                            prefix: "Cheer",
                            showImage: !0,
                            showAmount: !1,
                            formattedNumber: !0,
                            bitsConfig: Object(d.a)(),
                            amount: this.props.score,
                            animated: !1,
                            size: c.b.ExtraSmall
                        })), i.createElement(m.Pa, {
                            className: "campaign-leaderboard-row__amount"
                        }, i.createElement(m.W, {
                            "data-test-selector": "esports-leaderboard-row-score",
                            lineHeight: m.Ya.Body,
                            type: m.Ob.H4
                        }, Object(o.f)(this.props.score))))))
                    }, t
                }(i.Component)),
                u = (r("o5UI"), function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        return i.createElement(m.Qa, {
                            display: m.X.Flex,
                            alignItems: m.f.Center,
                            borderBottom: !0,
                            padding: {
                                y: 1,
                                left: 2
                            }
                        }, i.createElement("li", {
                            className: "campaign-leaderboard-self-row"
                        }, this.props.imageURL && i.createElement(m.Xa, {
                            "data-test-selector": "esports-leaderboard-row-image-url",
                            margin: {
                                right: 1
                            }
                        }, i.createElement(m.q, {
                            src: this.props.imageURL,
                            size: 30,
                            alt: this.props.displayName + " Avatar"
                        })), i.createElement(m.Xa, {
                            margin: {
                                right: 1
                            }
                        }, i.createElement(m.W, {
                            "data-test-selector": "esports-leaderboard-row-rank",
                            color: m.O.Link,
                            transform: m.Nb.Uppercase,
                            lineHeight: m.Ya.Heading
                        }, Object(o.d)("Rank: {rank}", {
                            rank: Object(o.f)(this.props.rank)
                        }, "CampaignsLeaderboardSelfRow")), i.createElement(m.W, {
                            "data-test-selector": "esports-leaderboard-row-display-name",
                            type: m.Ob.H5,
                            bold: !0,
                            lineHeight: m.Ya.Heading
                        }, this.props.displayName)), i.createElement(m.Xa, {
                            display: m.X.Flex,
                            margin: {
                                left: "auto"
                            }
                        }, i.createElement(m.Xa, {
                            className: "campaign-leaderboard-self-row__cheermote"
                        }, i.createElement(c.a, {
                            prefix: "Cheer",
                            showImage: !0,
                            showAmount: !1,
                            formattedNumber: !0,
                            bitsConfig: Object(d.a)(),
                            amount: this.props.score,
                            animated: !1,
                            size: c.b.ExtraSmall
                        })), i.createElement(m.Pa, {
                            className: "campaign-leaderboard-self-row__amount",
                            margin: {
                                right: 2
                            }
                        }, i.createElement(m.W, {
                            "data-test-selector": "esports-leaderboard-row-score",
                            lineHeight: m.Ya.Body,
                            type: m.Ob.H4
                        }, Object(o.f)(this.props.score))))))
                    }, t
                }(i.PureComponent)),
                h = r("VJHF"),
                g = r("NcrI");
            r("KUJM");
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
                        var r = parseInt(e.currentTarget.dataset.pageNumber, 10);
                        t.setState({
                            showPage: r
                        })
                    }, t.tabClick = function(e) {
                        if (e.currentTarget.parentElement) {
                            var r = e.currentTarget.parentElement.getAttribute("data-tab-id") || n.AllTeams;
                            t.setState({
                                activeTab: r,
                                showPage: 1
                            })
                        }
                    }, t
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    var e = this;
                    if (Object(o.d)("Rank: {rank}", {
                            rank: 1
                        }, "CampaignsLeaderboard"), !this.props.data || !this.props.data.users || this.props.data.loading) return i.createElement(m.Za, {
                        fillContent: !0
                    });
                    var t = this.props.isTeam && this.props.data.users && this.props.data.users[0] ? this.props.data.users[0].tournament : null,
                        r = this.props.leaderboardRows;
                    this.props.isTeam && this.state.activeTab !== n.AllTeams && (r = this.props.leaderboardRows.filter(function(r) {
                        var n = t && t.teams.find(function(e) {
                            return e.id.toUpperCase() === r.node.entryKey.toUpperCase()
                        });
                        if (n) return n.division.toLowerCase().includes(e.state.activeTab)
                    }));
                    var a = Math.ceil(r.length / this.props.pageSize),
                        s = this.props.pageSize * (this.state.showPage - 1),
                        c = s + this.props.pageSize,
                        d = r.slice(s, c).map(function(r) {
                            var n = {
                                rank: r.node.rank,
                                displayName: "Somebody",
                                score: r.node.score
                            };
                            if (e.props.isTeam && t) {
                                var a = t.teams.find(function(e) {
                                    return e.id.toUpperCase() === r.node.entryKey.toUpperCase()
                                });
                                a && (n.displayName = a.name, n.secondaryName = a.division, n.imageURL = a.logoURL)
                            } else if (!e.props.isTeam) {
                                var i = e.props.data.users.find(function(e) {
                                    return e.id === r.node.entryKey
                                });
                                i && i.displayName && (n.displayName = i.displayName, n.imageURL = i.profileImageURL)
                            }
                            return n
                        }).map(function(t) {
                            return i.createElement(p, {
                                key: "leaderboard-row-" + (e.props.isTeam ? "team" : "user") + "-" + t.rank,
                                rank: t.rank,
                                score: t.score,
                                displayName: t.displayName,
                                imageURL: t.imageURL,
                                secondaryName: e.props.hideLocale ? void 0 : t.secondaryName
                            })
                        }),
                        g = this.props.pageSize - d.length % this.props.pageSize;
                    if (g !== this.props.pageSize)
                        for (var b = 0; b < g; b++) d.push(i.createElement(m.Xa, {
                            key: "leaderboard-blank-row-" + b,
                            className: "campaign-leaderboard__blank-row"
                        }));
                    var f = [];
                    for (b = 1; b <= a; b++) {
                        var v = b === this.state.showPage ? m.r.Accent : m.r.Alt;
                        f.push(i.createElement(m.Qa, {
                            className: "campaign-leaderboard__buttons",
                            padding: 1,
                            key: "leaderboard-page-pip-" + Object(l.a)()
                        }, i.createElement("button", {
                            onClick: this.pagePipClick,
                            "data-page-number": b
                        }, i.createElement(m.yb, {
                            border: !0,
                            padding: .5,
                            display: m.X.Block,
                            background: v,
                            borderRadius: m.x.Rounded
                        }))))
                    }
                    var y = null;
                    if (this.props.isTeam) {
                        var k = null;
                        this.props.domain === h.c ? k = i.createElement(i.Fragment, null, i.createElement(m.zb, {
                            active: this.state.activeTab === n.NA,
                            onClick: this.tabClick,
                            "data-tab-id": n.NA
                        }, i.createElement(m.W, {
                            type: m.Ob.H4
                        }, Object(o.d)("NA", "CampaignsProgressTab"))), i.createElement(m.zb, {
                            active: this.state.activeTab === n.EU,
                            onClick: this.tabClick,
                            "data-tab-id": n.EU
                        }, i.createElement(m.W, {
                            type: m.Ob.H4
                        }, Object(o.d)("EU", "CampaignsProgressTab"))), i.createElement(m.zb, {
                            active: this.state.activeTab === n.KR,
                            onClick: this.tabClick,
                            "data-tab-id": n.KR
                        }, i.createElement(m.W, {
                            type: m.Ob.H4
                        }, Object(o.d)("KR", "CampaignsProgressTab"))), i.createElement(m.zb, {
                            active: this.state.activeTab === n.CN,
                            onClick: this.tabClick,
                            "data-tab-id": n.CN
                        }, i.createElement(m.W, {
                            type: m.Ob.H4
                        }, Object(o.d)("CN", "CampaignsProgressTab")))) : this.props.domain === h.f && (k = i.createElement(i.Fragment, null, i.createElement(m.zb, {
                            active: this.state.activeTab === n.Atlantic,
                            onClick: this.tabClick,
                            "data-tab-id": n.Atlantic
                        }, i.createElement(m.W, {
                            type: m.Ob.H4
                        }, Object(o.d)("Atlantic", "CampaignsProgressTab"))), i.createElement(m.zb, {
                            active: this.state.activeTab === n.Pacific,
                            onClick: this.tabClick,
                            "data-tab-id": n.Pacific
                        }, i.createElement(m.W, {
                            type: m.Ob.H4
                        }, Object(o.d)("Pacific", "CampaignsProgressTab"))))), y = i.createElement(m.Xa, {
                            padding: {
                                bottom: 2
                            }
                        }, i.createElement(m.Ab, null, i.createElement(m.zb, {
                            active: this.state.activeTab === n.AllTeams,
                            onClick: this.tabClick,
                            "data-tab-id": n.AllTeams
                        }, i.createElement(m.W, {
                            type: m.Ob.H4
                        }, Object(o.d)("All Teams", "CampaignsProgressTab"))), k))
                    }
                    var E = null;
                    if (this.props.userRow) {
                        var C = {
                                rank: this.props.userRow.rank,
                                displayName: "Somebody",
                                score: this.props.userRow.score
                            },
                            w = this.props.data.users.find(function(t) {
                                return !!e.props.userRow && t.id === e.props.userRow.entryKey
                            });
                        w && w.displayName && (C.displayName = w.displayName, C.imageURL = w.profileImageURL), E = i.createElement(u, {
                            rank: C.rank,
                            score: C.score,
                            displayName: C.displayName,
                            imageURL: C.imageURL
                        })
                    }
                    return i.createElement(m.Xa, {
                        className: "campaign-leaderboard",
                        display: m.X.Flex,
                        flexDirection: m.Aa.Column,
                        justifyContent: m.Wa.Between,
                        flexGrow: 1
                    }, y, i.createElement(m.Xa, {
                        className: "campaign-leaderboard__rows"
                    }, i.createElement("ul", null, d, this.props.userRow && E)), i.createElement(m.Xa, {
                        display: m.X.Flex,
                        justifyContent: m.Wa.Center,
                        margin: {
                            top: 2
                        }
                    }, f.length > 1 && f))
                }, t = a.__decorate([Object(s.a)(g, {
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
            r.d(t, "a", function() {
                return b
            })
        },
        klJU: function(e, t, r) {
            "use strict";
            var n = r("q1tI"),
                a = (r("7gDD"), function() {
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
            r.d(t, "a", function() {
                return a
            })
        },
        ktVs: function(e, t, r) {
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
            var a = {};
            n.definitions = n.definitions.concat(function(e) {
                return e.filter(function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var t = e.name.value;
                    return !a[t] && (a[t] = !0, !0)
                })
            }(r("fhkr").definitions)), e.exports = n
        },
        o5UI: function(e, t, r) {},
        oLk2: function(e, t, r) {},
        qOeB: function(e, t, r) {},
        "rC/K": function(e, t, r) {
            "use strict";
            var n;
            r.d(t, "a", function() {
                    return n
                }),
                function(e) {
                    e.Individual = "INDIVIDUAL", e.Team = "TEAM", e.Global = "GLOBAL", e.Insider = "INSIDER", e.Collection = "COLLECTION"
                }(n || (n = {}))
        },
        rgIk: function(e, t, r) {
            "use strict";
            r.r(t);
            var n, a = r("mrSG"),
                i = r("q1tI"),
                o = r("/7QA"),
                s = r("APPd"),
                l = r("FYlg"),
                c = r("/MKj"),
                d = r("fvjX"),
                m = r("1/iK"),
                p = r("y5D0"),
                u = r("kRBY"),
                h = (r("zHWM"), r("T1g+")),
                g = r("RVih"),
                b = r("Ue10"),
                f = (r("Jio5"), "hgc-marketing-closed");
            ! function(e) {
                e.Banner = "hgc-marketing-banner", e.Close = "hgc-marketing-close"
            }(n || (n = {}));
            var v = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        dismissedBanner: o.m.get(f, !1)
                    }, t.renderLoggedIn = function() {
                        return i.createElement(b.Xa, null, i.createElement(b.W, {
                            color: b.O.Overlay
                        }, Object(o.d)("Collect exclusive in-game items including loot boxes, mounts, and team-themed content as well as Twitch emotes when you Cheer for your favorite teams. Work together to unlock special community loot - there are new ones every Stage!", "HGCMarketingBanner")), i.createElement(b.Xa, {
                            display: b.X.Flex,
                            flexDirection: b.Aa.Row,
                            flexWrap: b.Ba.Wrap,
                            alignItems: b.f.Center,
                            margin: {
                                top: 1
                            }
                        }, i.createElement(b.Xa, {
                            margin: {
                                right: 1
                            }
                        }, i.createElement(b.z, {
                            onClick: h.a
                        }, Object(o.d)("Cheer now", "HGCMarketingBanner"))), t.renderLearnMore()))
                    }, t.renderLoggedOut = function() {
                        return i.createElement(b.yb, {
                            color: b.O.Overlay
                        }, i.createElement(b.Xa, {
                            margin: {
                                bottom: 1
                            }
                        }, i.createElement(b.W, {
                            color: b.O.Overlay
                        }, Object(o.d)("Cheer for your favorite teams and unlock tons of exclusive in-game loot!", "HGCMarketingBanner"))), i.createElement("ol", {
                            className: "hgc-marketing-banner__list"
                        }, i.createElement("li", null, i.createElement(b.W, {
                            type: b.Ob.Span,
                            color: b.O.Overlay
                        }, " ", Object(o.d)("Sign up or Log in to your Twitch account to participate", "HGCMarketingBanner"))), i.createElement("li", null, i.createElement(b.W, {
                            type: b.Ob.Span,
                            color: b.O.Overlay
                        }, " ", Object(o.d)("Connect your Blizzard account to Twitch", "HGCMarketingBanner")))), i.createElement(b.Xa, {
                            className: "hgc-marketing-banner__anon",
                            margin: {
                                y: 1
                            }
                        }, i.createElement(g.a, {
                            login: t.props.login,
                            signup: t.props.signup
                        })), t.renderLearnMore())
                    }, t.renderLearnMore = function() {
                        return i.createElement(b.Xa, {
                            margin: {
                                y: 1
                            }
                        }, i.createElement(b.U, {
                            type: b.V.Overlay,
                            to: "https://link.twitch.tv/hgccheer2018",
                            targetBlank: !0,
                            hoverUnderlineNone: !1
                        }, Object(o.d)("Learn more", "HGCMarketingBanner")))
                    }, t.closeBanner = function() {
                        o.m.set(f, !0), t.setState({
                            dismissedBanner: !0
                        })
                    }, t
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    return this.state.dismissedBanner ? null : i.createElement(b.yb, {
                        className: "hgc-marketing-banner",
                        borderRadius: b.x.Medium,
                        margin: {
                            bottom: 2
                        },
                        position: b.fb.Relative,
                        "data-test-selector": n.Banner
                    }, i.createElement(b.Ja, {
                        gutterSize: b.Ka.None
                    }, i.createElement(b.P, {
                        cols: {
                            default: 12,
                            lg: 7
                        }
                    }, i.createElement(b.Xa, {
                        className: "hgc-marketing-banner__bg",
                        fullHeight: !0,
                        fullWidth: !0,
                        display: b.X.Flex,
                        justifyContent: b.Wa.Around,
                        alignItems: b.f.Center
                    }, i.createElement(b.Xa, {
                        padding: 2
                    }, i.createElement(b.S, {
                        className: "hgc-marketing-banner__img",
                        src: "https://s3-us-west-2.amazonaws.com/bits-assets/hgc2018/banner/rewards-left.png",
                        alt: ""
                    })), i.createElement(b.Xa, {
                        padding: 2
                    }, i.createElement(b.S, {
                        className: "hgc-marketing-banner__logo",
                        src: "https://s3-us-west-2.amazonaws.com/bits-assets/hgc2018/banner/logo.png",
                        alt: ""
                    })), i.createElement(b.Xa, {
                        padding: 2
                    }, i.createElement(b.S, {
                        className: "hgc-marketing-banner__img",
                        src: "https://s3-us-west-2.amazonaws.com/bits-assets/hgc2018/banner/rewards-right.png",
                        alt: ""
                    })))), i.createElement(b.P, {
                        cols: {
                            default: 12,
                            lg: 5
                        }
                    }, i.createElement(b.Xa, {
                        padding: 2,
                        fullHeight: !0,
                        display: b.X.Flex,
                        flexDirection: b.Aa.Column,
                        justifyContent: b.Wa.Center
                    }, i.createElement(b.Xa, {
                        margin: {
                            y: 1
                        }
                    }, i.createElement(b.W, {
                        type: b.Ob.H4,
                        color: b.O.Overlay
                    }, Object(o.d)("HGC Cheer is back!", "HGCMarketingBanner"))), i.createElement(b.Xa, {
                        margin: {
                            bottom: 1
                        }
                    }, this.props.isLoggedIn ? this.renderLoggedIn() : this.renderLoggedOut())))), i.createElement(b.Xa, {
                        className: "hgc-marketing-banner__close",
                        position: b.fb.Absolute,
                        display: b.X.Flex
                    }, i.createElement(b.A, {
                        "data-test-selector": n.Close,
                        icon: b.pb.Close,
                        ariaLabel: Object(o.d)("Close", "HGCMarketingBanner"),
                        overlay: !0,
                        onClick: this.closeBanner
                    })))
                }, t
            }(i.Component);
            var y, k, E = Object(c.connect)(function(e) {
                    return {
                        isLoggedIn: Object(u.f)(e)
                    }
                }, function(e) {
                    return Object(d.bindActionCreators)({
                        login: function() {
                            return Object(p.e)(m.a.EsportsCampaignTabsFTUE)
                        },
                        signup: function() {
                            return Object(p.g)(m.a.EsportsCampaignTabsFTUE)
                        }
                    }, e)
                })(v),
                C = r("G30c"),
                w = r("WaLP"),
                N = r("TSYQ"),
                A = r("zF2X");
            r("RkuX");
            ! function(e) {
                e.Available = "available", e.Locked = "locked", e.Unavailable = "unavailable"
            }(y || (y = {})),
            function(e) {
                e.pillAvailable = "milestone-pill-available", e.pillLocked = "milestone-pill-locked", e.pillUnavailable = "milestone-pill-unavailable", e.image = "milestone-pill-image", e.overlay = "milestone-pill-overlay", e.svgWrapper = "milestone-pill-svg-wrapper"
            }(k || (k = {}));
            var I, _ = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        var e = this.props.status !== y.Available,
                            t = N("milestone-pill__overlay", {
                                "milestone-pill__overlay--show": e
                            }),
                            r = N("milestone-pill__svg", {
                                "milestone-pill__svg--show": e
                            }),
                            n = b.pb.Lock;
                        this.props.status === y.Unavailable && (n = b.pb.Halt);
                        var a = k.pillAvailable;
                        return this.props.status === y.Locked && (a = k.pillLocked), this.props.status === y.Unavailable && (a = k.pillUnavailable), i.createElement(b.Pa, {
                            "data-test-selector": a,
                            className: "milestone-pill",
                            position: b.fb.Relative,
                            flexGrow: 1,
                            display: b.X.Flex,
                            justifyContent: b.Wa.Center,
                            alignItems: b.f.Center,
                            fullWidth: !0
                        }, i.createElement(A.a, {
                            balloon: this.props.milestoneBalloon
                        }, i.createElement(b.S, {
                            "data-test-selector": k.image,
                            className: "milestone-pill__img",
                            src: this.props.imageURL,
                            alt: ""
                        }), i.createElement(b.yb, {
                            "data-test-selector": k.overlay,
                            className: t,
                            position: b.fb.Absolute,
                            fullHeight: !0,
                            fullWidth: !0,
                            attachTop: !0,
                            attachLeft: !0
                        }), i.createElement(b.Xa, {
                            "data-test-selector": k.svgWrapper,
                            className: r
                        }, i.createElement(b.ob, {
                            asset: n
                        }))))
                    }, t
                }(i.Component),
                S = r("OTph"),
                R = r("vt2+");
            r("Shl3");
            ! function(e) {
                e.trackName = "milestone-pills-track-name", e.rewardProgress = "milestone-pills-reward-progress"
            }(I || (I = {}));
            var T, z = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    return i.createElement(b.Xa, {
                        display: b.X.InlineBlock,
                        flexGrow: 1,
                        className: "milestone-pills"
                    }, i.createElement(b.yb, {
                        className: "milestone-pills__header",
                        display: b.X.Flex,
                        justifyContent: b.Wa.Start,
                        alignItems: b.f.Center,
                        margin: {
                            bottom: .5
                        }
                    }, i.createElement(b.S, {
                        className: "milestone-pills__header-image",
                        src: this.props.trackImageURL,
                        alt: this.props.trackName
                    }), i.createElement(b.yb, {
                        fullHeight: !0,
                        display: b.X.Flex,
                        alignItems: b.f.Center,
                        margin: {
                            left: .5
                        }
                    }, i.createElement(b.W, {
                        "data-test-selector": I.trackName,
                        color: b.O.Alt,
                        fontSize: b.Ca.Size5
                    }, this.props.trackName)), i.createElement(b.yb, {
                        fullHeight: !0,
                        display: b.X.Flex,
                        alignItems: b.f.Center,
                        margin: {
                            left: "auto"
                        }
                    }, this.renderRewardProgress())), i.createElement(b.Xa, {
                        display: b.X.Flex,
                        justifyContent: b.Wa.Center
                    }, this.renderMilestones()))
                }, t.prototype.renderRewardProgress = function() {
                    var e = this.props.milestones.reduce(function(e, t) {
                            return e.concat(t.rewards)
                        }, []),
                        t = e.length,
                        r = e.filter(function(e) {
                            return e.isEntitled
                        }).length;
                    return i.createElement(b.W, {
                        "data-test-selector": I.rewardProgress,
                        color: b.O.Alt2
                    }, Object(o.d)("{entitled, number} / {total, number}", {
                        entitled: r,
                        total: t
                    }, "CampaignMilestonePills"))
                }, t.prototype.renderMilestones = function() {
                    var e = this;
                    return Object(R.b)(this.props.milestones).map(function(t) {
                        var r = t.rewards && t.rewards.length && t.rewards[0] || null;
                        if (!r) return null;
                        var n = i.createElement(S.a, {
                                milestone: t,
                                reward: r,
                                userProgress: e.props.userProgress,
                                blizzardAccount: e.props.blizzardAccount,
                                milestoneFormatter: e.props.milestoneFormatter,
                                objectiveActive: e.props.objectiveActive
                            }),
                            a = y.Locked;
                        return e.props.userProgress >= t.threshold && (a = y.Available), i.createElement(_, {
                            key: t.id,
                            imageURL: r.imageURL,
                            status: a,
                            milestoneBalloon: n
                        })
                    })
                }, t
            }(i.Component);
            r("oLk2");
            (T || (T = {})).ExpandControl = "cheermote-progress-expand-control";
            var O, L = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            isExpanded: !1
                        }, t.toggleExpanded = function() {
                            t.setState({
                                isExpanded: !t.state.isExpanded
                            })
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        var e = this,
                            t = this.props.objectives.slice(0).sort(function(e, t) {
                                return t.progress - e.progress
                            });
                        if (!this.state.isExpanded) {
                            var r = 6;
                            "number" == typeof this.props.minimizedPillGroups && (r = this.props.minimizedPillGroups), t = t.slice(0, r)
                        }
                        return i.createElement(b.yb, {
                            className: "cheermote-progress",
                            background: b.r.Base,
                            border: !0,
                            borderRadius: b.x.Large,
                            overflow: b.ab.Hidden
                        }, i.createElement(b.yb, {
                            display: b.X.Flex,
                            alignItems: b.f.Center,
                            padding: 2,
                            borderBottom: !0
                        }, " ", i.createElement(b.Xa, {
                            className: "cheermote-progress__header-text"
                        }, " ", i.createElement(b.W, {
                            bold: !0,
                            type: b.Ob.H6,
                            color: b.O.Link,
                            transform: b.Nb.Uppercase
                        }, Object(o.d)("Team Rewards", "CheermoteProgress")), i.createElement(b.W, null, Object(o.d)("Use team Cheermotes and unlock team-themed loot such as in-game banners and Twitch emotes.", "CheermoteProgress"))), i.createElement(b.Xa, {
                            margin: {
                                left: "auto"
                            }
                        }, i.createElement(b.z, {
                            type: b.F.Hollow,
                            onClick: this.openBitsCard
                        }, Object(o.d)("Cheer Now", "CheermoteProgress")))), i.createElement(b.Xa, {
                            padding: 1
                        }, i.createElement(b.Ja, {
                            justifyContent: b.Wa.Between
                        }, t.map(function(t) {
                            return i.createElement(b.P, {
                                key: t.id,
                                cols: {
                                    default: 12,
                                    sm: 12,
                                    md: 6,
                                    lg: 6,
                                    xl: 6,
                                    xxl: 4
                                }
                            }, i.createElement(b.Xa, {
                                display: b.X.Flex,
                                justifyContent: b.Wa.Center,
                                padding: 1
                            }, i.createElement(z, {
                                trackName: t.cheergroup && t.cheergroup.name || "",
                                trackImageURL: t.cheergroup && t.cheergroup.imageUrl || "",
                                milestones: t.milestones,
                                blizzardAccount: e.props.blizzardAccount,
                                userProgress: t.progress,
                                milestoneFormatter: e.props.milestoneFormatter,
                                objectiveActive: e.props.objectiveActive
                            })))
                        }))), i.createElement(b.Ua, {
                            "data-test-selector": T.ExpandControl,
                            type: b.Va.Alpha,
                            blurAfterClick: !0,
                            onClick: this.toggleExpanded
                        }, i.createElement(b.yb, {
                            display: b.X.Flex,
                            justifyContent: b.Wa.Center,
                            alignItems: b.f.Center,
                            padding: 1,
                            color: b.O.Link,
                            borderTop: !0,
                            textAlign: b.Kb.Center,
                            verticalAlign: b.Yb.Middle
                        }, i.createElement(b.Xa, {
                            margin: {
                                right: .5
                            }
                        }, i.createElement(b.W, null, this.getFoldText())), i.createElement(b.ob, {
                            width: 12,
                            height: 12,
                            asset: this.state.isExpanded ? b.pb.AngleUp : b.pb.AngleDown
                        }))))
                    }, t.prototype.getFoldText = function() {
                        return this.state.isExpanded ? Object(o.d)("Collapse", "CheermoteProgress") : Object(o.d)("Expand", "CheermoteProgress")
                    }, t.prototype.openBitsCard = function() {
                        var e = document.querySelector('[data-a-target="bits-button"]');
                        e && e.click()
                    }, t
                }(i.Component),
                F = r("VJHF"),
                x = r("rC/K"),
                j = {
                    formatParticipationThresholdMessage: function(e) {
                        return Object(o.d)("Cheer at least {participationThreshold, number} Bits to help reach this Stage's community goal.", {
                            participationThreshold: e
                        }, "HCGMilestoneFormatter")
                    },
                    formatCheerbombDescriptionMessage: function() {
                        return Object(o.d)("Cheer 1000 Bits in a single Cheer to unlock 2 loot chests for yourself and share 8 or more with lucky viewers in Chat.", "HCGMilestoneFormatter")
                    },
                    formatCommunityUnlockedMessage: function(e) {
                        return Object(o.d)("The community has unlocked this reward! Cheer at least {participationThreshold, number} Bits during this Stage to unlock it.", {
                            participationThreshold: e
                        }, "HCGMilestoneFormatter")
                    },
                    formatKeepCheeringMessage: function() {
                        return Object(o.d)("Keep cheering along with the community to reach this Stage's goal more quickly.", "HCGMilestoneFormatter")
                    },
                    formatMilestoneNotAvailableMessage: function() {
                        return Object(o.d)("Coming Soon", "HGCMilestoneFormatter")
                    },
                    getUnannouncedMilestoneImage: function() {
                        return ""
                    },
                    formatPostStageMessage: function() {
                        return Object(o.d)("Stage Rewards are locked.", "HGCMilestoneFormatter")
                    }
                };
            ! function(e) {
                e.CommunityRewards = "community-rewards", e.IndividualRewards = "individual-rewards"
            }(O || (O = {}));
            var D, X = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.renderCommunityRewards = function() {
                            var e = t.props.objectives.find(function(e) {
                                return e.tag === x.a.Global && e.isActive
                            });
                            if (!e) return null;
                            var r = Object(R.b)(e.milestones),
                                n = r.length > 0 && r.filter(function(t) {
                                    return e.progress >= t.threshold
                                }).length === r.length,
                                a = r.map(function(e) {
                                    return e.participationThreshold
                                }).reduce(function(e, t) {
                                    return e > t ? e : t
                                }, 0),
                                s = Object(o.d)("Unlock exclusive in-game mounts when you contribute to and reach the community Cheer goals.", "HGCProgressTab");
                            return n && (s = Object(o.d)("This Stage’s HGC Community Rewards have been unlocked. Cheer {threshold} Bits or more and unlock them for yourself!", {
                                threshold: a
                            }, "HGCProgressTab")), i.createElement(b.Xa, {
                                "data-test-selector": O.CommunityRewards
                            }, i.createElement(l.a, {
                                milestones: r,
                                progress: e.progress,
                                participation: e.participation,
                                userHasPrime: t.props.userHasPrime,
                                blizzardAccount: t.props.blizzardAccount,
                                title: Object(o.d)("Community Progress", "HGCProgressTab"),
                                subtitle: e.description,
                                description: s,
                                isLoggedIn: t.props.isLoggedIn,
                                showUnlocked: n,
                                tabSwitch: t.props.tabSwitch,
                                milestoneFormatter: j,
                                objectiveActive: e.isActive
                            }))
                        }, t.renderIndividualRewards = function() {
                            var e = t.props.objectives.find(function(e) {
                                return e.tag === x.a.Individual && !e.cheergroup
                            });
                            if (!e) return null;
                            var r = Object(R.b)(e.milestones);
                            return i.createElement(b.Xa, {
                                "data-test-selector": O.IndividualRewards
                            }, i.createElement(l.a, {
                                milestones: r,
                                progress: e.progress,
                                participation: e.participation,
                                userHasPrime: t.props.userHasPrime,
                                blizzardAccount: t.props.blizzardAccount,
                                title: Object(o.d)("Personal Progress", "HGCProgressTab"),
                                description: Object(o.d)("Collect exclusive Heroes of the Storm in-game mounts, banners, rare and epic loot boxes, and Twitch emotes when you Cheer and support your favorite teams.", "HGCProgressTab"),
                                isLoggedIn: t.props.isLoggedIn,
                                showRewardsButton: !0,
                                tabSwitch: t.props.tabSwitch,
                                milestoneFormatter: j,
                                objectiveActive: e.isActive
                            }))
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        return i.createElement(b.Xa, {
                            className: "campaigns-progress-tab",
                            margin: {
                                y: 2
                            }
                        }, i.createElement(E, null), i.createElement(b.Xa, null, i.createElement(b.Xa, {
                            display: b.X.Flex,
                            flexWrap: b.Ba.Wrap
                        }, i.createElement(b.P, {
                            cols: {
                                default: 12,
                                xl: 5
                            }
                        }, i.createElement(b.Xa, {
                            fullHeight: !0,
                            margin: {
                                right: 0,
                                bottom: 2
                            },
                            breakpointExtraLarge: {
                                margin: {
                                    right: 2
                                }
                            }
                        }, this.renderCommunityRewards())), i.createElement(b.P, {
                            cols: {
                                default: 12,
                                xl: 7
                            }
                        }, i.createElement(b.Xa, {
                            fullHeight: !0,
                            margin: {
                                bottom: 2
                            }
                        }, this.renderIndividualRewards())))), i.createElement(b.Xa, {
                            padding: {
                                bottom: 2
                            }
                        }, i.createElement(L, {
                            objectives: this.props.objectives.filter(function(e) {
                                return !!e.cheergroup
                            }),
                            blizzardAccount: this.props.blizzardAccount,
                            milestoneFormatter: j,
                            objectiveActive: !0
                        })), i.createElement(b.Ja, {
                            gutterSize: b.Ka.Large
                        }, i.createElement(b.P, {
                            cols: {
                                xl: 6,
                                default: 12
                            }
                        }, i.createElement(b.Xa, {
                            padding: {
                                bottom: 2
                            },
                            breakpointExtraLarge: {
                                padding: {
                                    bottom: 0
                                }
                            }
                        }, i.createElement(C.a, {
                            channelID: this.props.channelID,
                            domain: F.c
                        }))), i.createElement(b.P, {
                            cols: {
                                xl: 6,
                                default: 12
                            }
                        }, i.createElement(w.a, {
                            channelID: this.props.channelID
                        }))))
                    }, t
                }(i.Component),
                U = r("ImQ+"),
                P = r("t95G"),
                B = r("gzKk"),
                H = (r("EU+x"), function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        if (0 === this.props.cheerbombTrigger.rewards.length) return null;
                        var e = this.props.cheerbombTrigger.rewards[0],
                            t = e.entitledQuantity,
                            r = e.canBeFulfilledQuantity,
                            n = 0 === t && 0 === r;
                        return n ? i.createElement(b.Xa, {
                            display: b.X.Flex,
                            margin: {
                                right: 1
                            }
                        }, this.renderRewardSquare(n, 0, this.renderCheerbombTriggerBalloon(!1))) : i.createElement(b.Xa, {
                            display: b.X.Flex,
                            margin: {
                                right: 1
                            }
                        }, r > 0 && this.renderRewardSquare(n, r, this.renderCheerbombTriggerBalloon(!1), "cheerbomb-rewards__reward-count__unredeemed"), t > 0 && this.renderRewardSquare(n, t, this.renderCheerbombTriggerBalloon(!0), "cheerbomb-rewards__reward-count__redeemed"))
                    }, t.prototype.renderCheerbombTriggerBalloon = function(e) {
                        return i.createElement(S.a, {
                            trigger: this.props.cheerbombTrigger,
                            triggerRewardRedeemed: e,
                            reward: this.props.cheerbombTrigger.rewards[0],
                            blizzardAccount: this.props.blizzardAccount,
                            milestoneFormatter: j,
                            objectiveActive: this.props.objectiveActive
                        })
                    }, t.prototype.renderRewardSquare = function(e, t, r, n) {
                        var a = N("cheerbomb-rewards__reward-count", n),
                            o = this.props.cheerbombTrigger.rewards[0];
                        return i.createElement(b.yb, {
                            display: b.X.Flex,
                            alignItems: b.f.Stretch,
                            breakpointLarge: {
                                flexWrap: b.Ba.NoWrap
                            },
                            borderRight: !0,
                            "data-test-selector": "esports-cheerbomb-rewards-square"
                        }, i.createElement(b.Pa, {
                            display: b.X.Flex,
                            alignItems: b.f.Stretch
                        }, i.createElement(A.a, {
                            balloon: r
                        }, i.createElement(b.Xa, {
                            position: b.fb.Relative,
                            display: b.X.Flex,
                            alignItems: b.f.Stretch
                        }, i.createElement(b.Xa, {
                            display: b.X.Flex,
                            alignItems: b.f.Center,
                            justifyContent: b.Wa.Center,
                            padding: 2
                        }, i.createElement(b.S, {
                            className: "cheerbomb-rewards__reward-image",
                            src: o.imageURL,
                            alt: o.name
                        })), e && this.renderLockedOverlay(), !e && i.createElement(b.yb, {
                            className: a,
                            position: b.fb.Absolute,
                            borderRadius: b.x.Rounded,
                            color: b.O.Overlay,
                            textAlign: b.Kb.Center,
                            "data-test-selector": "esports-cheerbomb-rewards-square-count"
                        }, i.createElement(b.W, {
                            className: "cheerbomb-rewards__reward-count__text"
                        }, t))))))
                    }, t.prototype.renderLockedOverlay = function() {
                        return i.createElement(b.yb, {
                            className: "cheerbomb-rewards__locked-overlay",
                            fullHeight: !0,
                            fullWidth: !0,
                            attachTop: !0,
                            attachLeft: !0,
                            position: b.fb.Absolute,
                            display: b.X.Flex,
                            justifyContent: b.Wa.Center,
                            alignItems: b.f.Center,
                            "data-test-selector": "esports-cheerbomb-rewards-square-locked-overlay"
                        }, i.createElement(b.Xa, {
                            className: "cheerbomb-rewards__overlay-icon"
                        }, i.createElement(b.ob, {
                            fill: !0,
                            asset: b.pb.Lock
                        })))
                    }, t
                }(i.Component)),
                W = ["North America", "Europe", "Korea", "China"],
                M = r("RhRD");
            (D || (D = {})).Community = "community-objectives";
            var G = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    var e = this,
                        t = this.getObjectivesForTag(x.a.Global);
                    t.sort(function(e, t) {
                        return e.description < t.description ? -1 : e.description > t.description ? 1 : 0
                    });
                    var r = t.map(function(e) {
                            return e.milestones.length
                        }).reduce(function(e, t) {
                            return t + e
                        }, 0),
                        n = t.map(function(e) {
                            return e.milestones.map(function(e) {
                                return e.rewards.filter(function(e) {
                                    return e.isEntitled
                                }).length
                            }).reduce(function(e, t) {
                                return t + e
                            }, 0)
                        }).reduce(function(e, t) {
                            return t + e
                        }, 0),
                        a = t.map(function(e) {
                            return e.isActive
                        }).indexOf(!0),
                        s = this.getObjectivesForTag(x.a.Individual).filter(function(e) {
                            return !e.cheergroup
                        })[0],
                        l = this.getObjectivesForTag(x.a.Individual).filter(function(e) {
                            return !!e.cheergroup
                        }),
                        c = l.reduce(function(e, t) {
                            return e + t.milestones.length
                        }, 0),
                        d = l.reduce(function(e, t) {
                            return e + t.milestones.filter(function(e) {
                                return e.rewards.some(function(e) {
                                    return e.isEntitled
                                })
                            }).length
                        }, 0),
                        m = (this.props.triggers || []).filter(function(e) {
                            return e.triggerType === M.a.Cheer && e.isActive
                        }).map(function(t) {
                            return i.createElement(H, {
                                key: t.id,
                                cheerbombTrigger: t,
                                blizzardAccount: e.props.blizzardAccount,
                                objectiveActive: !0
                            })
                        });
                    return i.createElement(b.Xa, {
                        margin: {
                            y: 2
                        }
                    }, t.length > 0 && i.createElement(b.Xa, {
                        margin: {
                            bottom: 2
                        }
                    }, i.createElement(B.a, {
                        title: Object(o.d)("Community Rewards", "HGCRewardsTab"),
                        description: Object(o.d)("Cheer with the community and unlock Heroes of the Storm in-game items. Keep Cheering at every stage to collect new loot.", "HGCRewardsTab"),
                        totalRewards: r,
                        rewardsEntitled: n,
                        showCheer: this.props.isLoggedIn,
                        "data-test-selector": D.Community
                    }, i.createElement(b.Xa, {
                        display: b.X.Flex,
                        flexWrap: b.Ba.Wrap,
                        justifyContent: b.Wa.Start,
                        padding: 1
                    }, t.map(function(t, r) {
                        return i.createElement(b.Xa, {
                            padding: 1,
                            key: t.id
                        }, i.createElement(P.a, {
                            title: e.renderStageDescription(t.description.toLowerCase()),
                            milestones: t.milestones,
                            globalProgress: t.progress,
                            userProgress: t.participation,
                            blizzardAccount: e.props.blizzardAccount,
                            isLocked: r > a,
                            placeholderMilestones: r > a ? r + 1 : 0,
                            milestoneFormatter: j,
                            objectiveActive: t.isActive
                        }))
                    }), 1 === t.length && i.createElement(i.Fragment, null, i.createElement(b.Xa, {
                        padding: 1
                    }, i.createElement(P.a, {
                        title: this.renderStageDescription("stage 2"),
                        milestones: t[0].milestones,
                        globalProgress: t[0].progress,
                        userProgress: t[0].participation,
                        blizzardAccount: this.props.blizzardAccount,
                        isLocked: !0,
                        placeholderMilestones: 2,
                        milestoneFormatter: j,
                        objectiveActive: t[0].isActive
                    })), i.createElement(b.Xa, {
                        padding: 1
                    }, i.createElement(P.a, {
                        title: this.renderStageDescription("stage 3"),
                        milestones: t[0].milestones,
                        globalProgress: t[0].progress,
                        userProgress: t[0].participation,
                        blizzardAccount: this.props.blizzardAccount,
                        isLocked: !0,
                        placeholderMilestones: 3,
                        milestoneFormatter: j,
                        objectiveActive: t[0].isActive
                    })))))), i.createElement(b.Xa, {
                        margin: {
                            bottom: 2
                        }
                    }, i.createElement(U.a, {
                        progress: s ? s.progress : 0,
                        milestones: s.milestones,
                        blizzardAccount: this.props.blizzardAccount,
                        showCheer: this.props.isLoggedIn,
                        description: Object(o.d)("Hype your team by Cheering Bits for your favorite teams and unlock special Heroes of the Storm and Twitch loot as you go.", "HGCIndividualRewards"),
                        milestoneFormatter: j,
                        objectiveActive: s.isActive
                    })), m.length > 0 && i.createElement(b.Xa, {
                        margin: {
                            bottom: 2
                        }
                    }, i.createElement(B.a, {
                        title: Object(o.d)("Cheer Gift Rewards", "HGCRewardsTab"),
                        description: Object(o.d)("Cheer at least 1000 Bits at once for your favorite teams to unlock 2 common loot chests and trigger a Cheer Gift to reward 8 or more members in Chat with a loot chest. The larger the cheer, the more members in Chat you will gift with a loot chest!", "HGCRewardsTab"),
                        headerExtraContent: m
                    })), this.props.objectives && i.createElement(b.Xa, {
                        margin: {
                            bottom: 2
                        }
                    }, i.createElement(B.a, {
                        title: Object(o.d)("Team Rewards", "HGCRewardsTab"),
                        description: Object(o.d)("Cheer to show your favorite teams some love! Cheer Bits using a team’s Cheermote and unlock team-themed rewards such as in-game banners and Twitch emotes.", "HGCRewardsTab"),
                        totalRewards: c,
                        rewardsEntitled: d,
                        showCheer: this.props.isLoggedIn
                    }, i.createElement(b.Xa, {
                        padding: 2
                    }, i.createElement(b.Ja, {
                        justifyContent: b.Wa.Start,
                        gutterSize: b.Ka.Medium
                    }, W.map(function(t) {
                        return i.createElement(i.Fragment, {
                            key: t
                        }, i.createElement(b.P, {
                            cols: 12
                        }, i.createElement(b.yb, {
                            borderBottom: !0,
                            padding: {
                                bottom: .5
                            }
                        }, e.renderDivisionHeader(t))), e.renderCheergroupRewardsForDivision(t))
                    }))))))
                }, t.prototype.renderCheergroupRewardsForDivision = function(e) {
                    var t = this;
                    return this.props.objectives ? this.props.objectives.filter(function(t) {
                        return t.cheergroup && t.cheergroup.division === e
                    }).map(function(e) {
                        return i.createElement(b.P, {
                            key: e.id,
                            cols: {
                                default: 12,
                                sm: 12,
                                md: 6,
                                lg: 6,
                                xl: 6,
                                xxl: 4
                            }
                        }, i.createElement(b.Xa, {
                            display: b.X.Flex,
                            justifyContent: b.Wa.Center,
                            padding: {
                                y: 1
                            }
                        }, i.createElement(z, {
                            trackName: e.cheergroup && e.cheergroup.name || "",
                            trackImageURL: e.cheergroup && e.cheergroup.imageUrl || "",
                            milestones: e.milestones,
                            blizzardAccount: t.props.blizzardAccount,
                            userProgress: e.progress,
                            milestoneFormatter: j,
                            objectiveActive: e.isActive
                        })))
                    }) : null
                }, t.prototype.renderDivisionHeader = function(e) {
                    var t = "";
                    switch (e) {
                        case "North America":
                            t = Object(o.d)("North America", "HGCRewardsTab");
                            break;
                        case "Europe":
                            t = Object(o.d)("Europe", "HGCRewardsTab");
                            break;
                        case "Korea":
                            t = Object(o.d)("Korea", "HGCRewardsTab");
                            break;
                        case "China":
                            t = Object(o.d)("China", "HGCRewardsTab");
                            break;
                        default:
                            return null
                    }
                    return i.createElement(b.W, {
                        bold: !0,
                        fontSize: b.Ca.Size4,
                        transform: b.Nb.Uppercase,
                        color: b.O.Link
                    }, t)
                }, t.prototype.getObjectivesForTag = function(e) {
                    return (this.props.objectives || []).filter(function(t) {
                        return t.tag === e
                    })
                }, t.prototype.renderStageDescription = function(e) {
                    return {
                        "stage 1": Object(o.d)("Stage 1", "HGCRewardsTab"),
                        "stage 2": Object(o.d)("Stage 2", "HGCRewardsTab"),
                        "stage 3": Object(o.d)("Stage 3", "HGCRewardsTab")
                    }[e.toLowerCase()] || e
                }, t
            }(i.Component);
            var q = Object(c.connect)(function(e) {
                    return {
                        isLoggedIn: Object(u.f)(e)
                    }
                })(G),
                K = r("Rfsd"),
                V = r("hRrL"),
                Q = r("fR2g"),
                J = r("QlRw"),
                Y = r("KnFV"),
                $ = r("0nav"),
                Z = function(e) {
                    function t(t) {
                        var r = e.call(this, t) || this;
                        return r.state = {
                            tabToShow: Y.a.Progress
                        }, r.tabClick = function(e) {
                            var t = Y.a.Progress;
                            e.currentTarget.hasAttribute("data-tab-target") ? t = e.currentTarget.getAttribute("data-tab-target") || t : e.currentTarget.parentElement && e.currentTarget.parentElement.hasAttribute("data-tab-target") && (t = e.currentTarget.parentElement.getAttribute("data-tab-target") || t), r.setState({
                                tabToShow: t
                            }), Object($.a)(t, r.props.channelID, r.props.currentUserID)
                        }, r.state.tabToShow = Y.a.Progress, r
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        var e = this.props,
                            t = e.hasPrime,
                            r = e.campaignProperties,
                            n = !!this.props.blizzardAccount,
                            a = this.props.blizzardAccount && this.props.blizzardAccount.region !== J.a.China,
                            l = this.canRewardsBeFulfilled(r) && a,
                            c = null;
                        return this.state.tabToShow === Y.a.Progress ? c = i.createElement(X, {
                            channelID: this.props.channelID,
                            channelLogin: this.props.channelLogin,
                            blizzardAccount: this.props.blizzardAccount,
                            tabSwitch: this.tabClick,
                            userHasPrime: t,
                            objectives: r.objectives,
                            activeCampaigns: r.activeCampaigns,
                            isLoggedIn: !!this.props.user
                        }) : this.state.tabToShow === Y.a.Rewards ? c = i.createElement(q, {
                            channelID: this.props.channelID,
                            blizzardAccount: this.props.blizzardAccount,
                            userHasPrime: t,
                            tournamentID: this.props.domain,
                            objectives: r.objectives,
                            triggers: r.triggers,
                            activeCampaigns: r.activeCampaigns
                        }) : this.state.tabToShow === Y.a.Info && (c = i.createElement(K.a, {
                            channelLogin: this.props.channelLogin,
                            channelID: this.props.channelID
                        })), i.createElement(b.Xa, {
                            margin: {
                                y: 3
                            },
                            position: b.fb.Relative
                        }, i.createElement(b.yb, {
                            borderBottom: !0
                        }, i.createElement(b.Xa, {
                            display: b.X.Flex,
                            flexDirection: b.Aa.ColumnReverse,
                            flexWrap: b.Ba.Wrap,
                            breakpointExtraLarge: {
                                flexDirection: b.Aa.Row
                            }
                        }, i.createElement(b.P, {
                            cols: {
                                xl: 7,
                                default: 12
                            }
                        }, i.createElement(b.Pa, {
                            display: b.X.Flex,
                            alignItems: b.f.End,
                            fullHeight: !0
                        }, i.createElement("ul", null, i.createElement(Q.a, {
                            id: Y.a.Progress,
                            isSelected: this.state.tabToShow === Y.a.Progress,
                            title: Object(o.d)("Event Progress", "HGCTabs"),
                            onClick: this.tabClick
                        }), i.createElement(Q.a, {
                            id: Y.a.Rewards,
                            isSelected: this.state.tabToShow === Y.a.Rewards,
                            title: Object(o.d)("Loot", "HGCTabs"),
                            onClick: this.tabClick
                        }), i.createElement(Q.a, {
                            id: Y.a.Info,
                            isSelected: this.state.tabToShow === Y.a.Info,
                            title: Object(o.d)("Info", "HGCTabs"),
                            onClick: this.tabClick
                        })))), i.createElement(b.P, {
                            cols: {
                                xl: 5,
                                default: 12
                            }
                        }, i.createElement(b.Xa, {
                            display: b.X.Flex,
                            alignItems: b.f.End,
                            padding: {
                                bottom: 1
                            },
                            breakpointExtraLarge: {
                                padding: {
                                    bottom: .5
                                },
                                justifyContent: b.Wa.End
                            }
                        }, this.state.tabToShow === Y.a.Rewards && i.createElement(V.a, {
                            tournamentID: this.props.domain,
                            enabled: l
                        }), this.props.currentUserID && i.createElement(b.Xa, null, n && !a && this.state.tabToShow === Y.a.Rewards ? i.createElement(b.W, {
                            color: b.O.Error
                        }, Object(o.d)("Not available in linked account's region", "HGCTabs")) : i.createElement(s.a, {
                            onOpenBlizzardConnect: this.props.onOpenBlizzardConnect
                        })))))), c)
                    }, t.prototype.canRewardsBeFulfilled = function(e) {
                        var t = e.objectives && e.objectives.some(function(e) {
                                return e.milestones && e.milestones.some(function(e) {
                                    return e.rewards && e.rewards.some(function(e) {
                                        return e.canBeFulfilled
                                    })
                                })
                            }),
                            r = e.triggers && e.triggers.some(function(e) {
                                return e.rewards && e.rewards.some(function(e) {
                                    return e.canBeFulfilled
                                })
                            });
                        return t || r
                    }, t
                }(i.Component),
                ee = Z;
            r.d(t, "HGCTabsComponent", function() {
                return Z
            }), r.d(t, "HGCTabs", function() {
                return ee
            })
        },
        rj3Y: function(e, t, r) {
            "use strict";
            var n, a, i = function(e, t, r) {
                var n = e.collectionItems || [];
                return Boolean(n.find(function(e) {
                    return e.ObjectType === r && e.id === t
                }))
            };
            ! function(e) {
                e.Public = "public"
            }(n || (n = {})),
            function(e) {
                e.Staff = "staff"
            }(a || (a = {}));
            var o, s, l = function(e) {
                return {
                    __typename: "Collection",
                    id: e._id,
                    title: e.title,
                    state: n.Public,
                    thumbnailSrc: e.thumbnails && e.thumbnails.small,
                    totalDuration: e.total_duration,
                    itemsCount: e.items_count
                }
            };

            function c(e) {
                return e.collections.map(function(e) {
                    return l(e)
                })
            }! function(e) {
                e.Video = "video"
            }(o || (o = {})),
            function(e) {
                e.PostCreateModal = "post-create", e.EditModal = "edit", e.CollectionManager = "collection_manager", e.VideoProducerRow = "video_producer_row"
            }(s || (s = {})), r.d(t, !1, function() {
                return i
            }), r.d(t, !1, function() {
                return n
            }), r.d(t, !1, function() {
                return a
            }), r.d(t, "c", function() {
                return l
            }), r.d(t, "d", function() {
                return c
            }), r.d(t, "b", function() {
                return o
            }), r.d(t, "a", function() {
                return s
            })
        },
        rkjw: function(e, t, r) {
            "use strict";
            var n, a, i = r("mrSG"),
                o = r("TSYQ"),
                s = r("q1tI"),
                l = r("/7QA"),
                c = r("zF2X"),
                d = r("fHRJ"),
                m = r("Ue10");
            r("AvCV");
            ! function(e) {
                e.Available = "available", e.Locked = "locked", e.HalfLocked = "progressLocked", e.Unavailable = "unavailable"
            }(n || (n = {})),
            function(e) {
                e.overlay = "milestone-square-overlay", e.info = "milestone-square-info", e.statusAvailable = "milestone-square-status-available", e.statusLocked = "milestone-square-status-locked", e.statusHalfLocked = "milestone-square-status-half-locked", e.statusUnavailable = "milestone-square-status-unavailable"
            }(a || (a = {}));
            var p = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.renderInfo = function() {
                            return t.props.title ? s.createElement(m.yb, {
                                "data-test-selector": a.info,
                                className: "milestone-square__info",
                                position: m.fb.Relative,
                                textAlign: m.Kb.Center
                            }, s.createElement(m.Xa, {
                                padding: .5
                            }, s.createElement(m.W, {
                                type: m.Ob.H5,
                                bold: !0
                            }, t.props.title)), t.props.subtitle && s.createElement(m.Xa, null, s.createElement(m.W, {
                                color: m.O.Alt
                            }, t.props.subtitle)), t.props.threshold && s.createElement(m.Xa, {
                                display: m.X.Flex,
                                alignItems: m.f.Center,
                                justifyContent: m.Wa.Center
                            }, s.createElement(m.ob, {
                                type: m.qb.Brand,
                                asset: m.pb.Bits,
                                width: 12,
                                height: 12
                            }), s.createElement(m.Pa, {
                                margin: {
                                    left: .5
                                }
                            }, s.createElement(m.W, null, Object(l.f)(t.props.threshold))))) : null
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        var e = this.props.status !== n.Available,
                            t = o("milestone-square__wrapper", {
                                "milestone-square__wrapper--small": !this.props.title
                            }),
                            r = o("milestone-square__overlay", {
                                "milestone-square__overlay--accent": this.props.status === n.HalfLocked
                            }),
                            i = m.pb.Lock;
                        this.props.status === n.Unavailable && (i = m.pb.Halt);
                        var l = a.statusAvailable;
                        return this.props.status === n.Locked && (l = a.statusLocked), this.props.status === n.HalfLocked && (l = a.statusHalfLocked), this.props.status === n.Unavailable && (l = a.statusUnavailable), s.createElement(m.Pa, {
                            className: "milestone-square",
                            position: m.fb.Relative
                        }, s.createElement(c.a, {
                            balloon: this.props.milestoneBalloon
                        }, s.createElement(m.yb, {
                            "data-test-selector": l,
                            className: t,
                            background: m.r.Base,
                            position: m.fb.Relative,
                            textAlign: m.Kb.Center,
                            border: !0,
                            borderRadius: m.x.Large,
                            display: m.X.Flex,
                            alignItems: m.f.Center,
                            justifyContent: m.Wa.Center
                        }, s.createElement(d.a, {
                            className: "milestone-square__img-wrapper",
                            imageClassName: "milestone-square__img",
                            imageURL: this.props.imageURL,
                            imageAlt: this.props.title,
                            rarity: this.props.rarity
                        }), e && s.createElement(m.yb, {
                            "data-test-selector": a.overlay,
                            className: r,
                            display: m.X.Flex,
                            justifyContent: m.Wa.Center,
                            alignItems: m.f.Center,
                            position: m.fb.Absolute,
                            fullHeight: !0,
                            fullWidth: !0,
                            attachTop: !0,
                            attachLeft: !0
                        }, s.createElement(m.Xa, {
                            className: "milestone-square__overlay-icon"
                        }, s.createElement(m.ob, {
                            fill: !0,
                            asset: i
                        })))), this.renderInfo()))
                    }, t
                }(s.Component),
                u = p;
            r.d(t, "b", function() {
                return n
            }), r.d(t, !1, function() {
                return a
            }), r.d(t, !1, function() {
                return p
            }), r.d(t, "a", function() {
                return u
            })
        },
        sAoK: function(e, t, r) {
            "use strict";
            var n = r("q1tI"),
                a = (r("v/+I"), function() {
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
            r.d(t, "a", function() {
                return a
            })
        },
        t95G: function(e, t, r) {
            "use strict";
            var n = r("mrSG"),
                a = r("TSYQ"),
                i = r("q1tI"),
                o = r("OTph"),
                s = r("rkjw"),
                l = r("vt2+"),
                c = r("Ue10"),
                d = (r("gsJi"), function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return n.__extends(t, e), t.prototype.render = function() {
                        var e = this,
                            t = a("large-milestone-pills", this.props.className),
                            r = Object(l.b)(this.props.milestones);
                        return i.createElement(c.Xa, {
                            className: t
                        }, this.props.title && i.createElement(c.Xa, {
                            margin: {
                                bottom: 1
                            }
                        }, i.createElement(c.W, {
                            bold: !0,
                            fontSize: c.Ca.Size5,
                            color: c.O.Link
                        }, this.props.title)), this.props.isLocked ? this.renderLocked() : i.createElement(c.Xa, {
                            display: c.X.Flex,
                            justifyContent: c.Wa.Start
                        }, r.map(function(t) {
                            return e.renderMilestoneSquare(t)
                        })))
                    }, t.prototype.renderMilestoneSquare = function(e) {
                        var t = e.rewards[0],
                            r = this.props.globalProgress >= e.threshold,
                            n = this.props.userProgress >= e.participationThreshold,
                            a = !Object(l.a)(e, new Date(Date.now())),
                            o = s.b.Locked;
                        return a ? o = s.b.Unavailable : r && n ? o = s.b.Available : (r || n) && (o = s.b.HalfLocked), i.createElement(s.a, {
                            key: a ? "" : e.id,
                            status: o,
                            imageURL: a ? this.props.milestoneFormatter.getUnannouncedMilestoneImage() : t.imageURL,
                            title: a ? this.props.milestoneFormatter.formatMilestoneNotAvailableMessage() : t.name,
                            subtitle: a ? "" : t.description,
                            rarity: a ? void 0 : t.rarity,
                            milestoneBalloon: this.renderMilestoneBalloon(e)
                        })
                    }, t.prototype.renderMilestoneBalloon = function(e) {
                        return i.createElement(o.a, {
                            milestone: e,
                            reward: e.rewards[0],
                            globalProgress: this.props.globalProgress,
                            userProgress: this.props.userProgress,
                            blizzardAccount: this.props.blizzardAccount,
                            milestoneFormatter: this.props.milestoneFormatter,
                            objectiveActive: this.props.objectiveActive
                        })
                    }, t.prototype.renderLocked = function() {
                        return i.createElement("div", {
                            style: {
                                height: "13rem",
                                width: 13 * (this.props.placeholderMilestones || 1) + "rem"
                            }
                        }, i.createElement(c.yb, {
                            display: c.X.Flex,
                            justifyContent: c.Wa.Center,
                            alignItems: c.f.Center,
                            background: c.r.Alt2,
                            fullHeight: !0,
                            fullWidth: !0,
                            border: !0,
                            borderRadius: c.x.Large
                        }, i.createElement(c.Xa, {
                            className: "large-milestone-pills__lock-icon",
                            display: c.X.Flex,
                            justifyContent: c.Wa.Center,
                            alignItems: c.f.Center
                        }, i.createElement(c.ob, {
                            asset: c.pb.Lock,
                            type: c.qb.Inherit,
                            fill: !0
                        }))))
                    }, t
                }(i.Component));
            r.d(t, "a", function() {
                return d
            })
        },
        uzvh: function(e, t, r) {
            "use strict";
            r.d(t, "a", function() {
                return o
            });
            var n = r("mrSG"),
                a = r("/7QA"),
                i = r("SiBg");

            function o(e) {
                return e.collections.containingCollections
            }
            a.p.store.registerReducer("collections", function(e, t) {
                var r;
                switch (void 0 === e && (e = {
                    collections: [],
                    videoID: "",
                    containingCollections: [],
                    errors: {}
                }), t.type) {
                    case i.a:
                        return n.__assign({}, e, {
                            collections: t.collections
                        });
                    case i.b:
                        return n.__assign({}, e, {
                            videoID: t.videoID,
                            containingCollections: t.containingCollections
                        });
                    case i.c:
                        return n.__assign({}, e, {
                            errors: n.__assign({}, e.errors, (r = {}, r[t.errorType] = t.errorMessage, r))
                        });
                    default:
                        return e
                }
            })
        },
        "v/+I": function(e, t, r) {},
        "vt2+": function(e, t, r) {
            "use strict";
            r.d(t, "b", function() {
                return i
            }), r.d(t, "a", function() {
                return o
            });
            var n = r("NAv5"),
                a = r("HGFl"),
                i = function(e) {
                    return e.slice().sort(function(e, t) {
                        return e.threshold - t.threshold
                    })
                },
                o = function(e, t) {
                    if (!e || !e.startDate) return !1;
                    var r = Object(a.c)(e.startDate);
                    return Object(n.isEqual)(t, r) || Object(n.isAfter)(t, r)
                }
        },
        ywDU: function(e, t, r) {},
        zF2X: function(e, t, r) {
            "use strict";
            var n = r("mrSG"),
                a = r("TSYQ"),
                i = r("q1tI"),
                o = r("Ar2k"),
                s = r("Ue10"),
                l = {
                    size: s.w.Medium,
                    direction: s.v.TopCenter
                },
                c = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.setBalloonContainerRef = function(e) {
                            return t.balloonContainerRef = e
                        }, t.onMouseEnter = function() {
                            if (t.balloonContainerRef && t.props.balloon) {
                                var e = Object.assign({}, l, t.props.balloonProps || {});
                                t.props.tooltipLayer.showRich({
                                    from: t.balloonContainerRef,
                                    richContent: t.props.balloon,
                                    allowHover: !0,
                                    balloonProps: e
                                })
                            }
                        }, t.onMouseLeave = function() {
                            t.props.tooltipLayer.hide()
                        }, t.addEventListeners = function() {
                            t.balloonContainerRef && (t.balloonContainerRef.addEventListener("mouseover", t.onMouseEnter), t.balloonContainerRef.addEventListener("wheel", t.onMouseEnter), t.balloonContainerRef.addEventListener("mouseleave", t.onMouseLeave))
                        }, t.removeEventListeners = function() {
                            t.balloonContainerRef && (t.balloonContainerRef.removeEventListener("mouseover", t.onMouseEnter), t.balloonContainerRef.removeEventListener("wheel", t.onMouseEnter), t.balloonContainerRef.removeEventListener("mouseleave", t.onMouseLeave))
                        }, t
                    }
                    return n.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.addEventListeners()
                    }, t.prototype.componentWillUnmount = function() {
                        this.removeEventListeners()
                    }, t.prototype.render = function() {
                        var e = a("balloon-container", this.props.className);
                        return i.createElement(s.Xa, {
                            className: e,
                            refDelegate: this.setBalloonContainerRef
                        }, this.props.children)
                    }, t = n.__decorate([Object(o.c)()], t)
                }(i.Component),
                d = c;
            r.d(t, !1, function() {
                return c
            }), r.d(t, "a", function() {
                return d
            })
        },
        zHWM: function(e, t, r) {
            "use strict";
            r("uzvh")
        }
    }
]);