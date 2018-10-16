(window.webpackJsonp = window.webpackJsonp || []).push([
    [110], {
        "+L10": function(e, t, n) {},
        "0nav": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return s
            });
            var a, r = n("mrSG"),
                i = n("/7QA"),
                o = n("2xye");

            function s(e, t, n) {
                return r.__awaiter(this, void 0, void 0, function() {
                    return r.__generator(this, function(r) {
                        return i.o.track(o.SpadeEventType.CampaignTabSwitch, {
                            action: a.Click,
                            module: "tab_selector",
                            component_name: e,
                            component_type: "tab",
                            channel_id: t,
                            user_id: n,
                            device_id: i.p.session.deviceID
                        }), [2]
                    })
                })
            }! function(e) {
                e.Click = "click", e.Hover = "hover"
            }(a || (a = {}))
        },
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
            var r = {};
            a.definitions = a.definitions.concat(function(e) {
                return e.filter(function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var t = e.name.value;
                    return !r[t] && (r[t] = !0, !0)
                })
            }(n("fhkr").definitions)), e.exports = a
        },
        "2UI6": function(e, t, n) {},
        "2iq9": function(e, t, n) {},
        "3NMT": function(e, t, n) {},
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
        "7gDD": function(e, t, n) {},
        "81Gi": function(e, t, n) {
            "use strict";
            var a = n("q1tI"),
                r = (n("bt+X"), function() {
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
                return r
            })
        },
        "8n0m": function(e, t, n) {
            "use strict";
            n.d(t, "b", function() {
                return i
            }), n.d(t, "a", function() {
                return o
            }), n.d(t, "c", function() {
                return s
            });
            var a = n("/7QA"),
                r = n("2xye");

            function i(e) {
                a.o.track(r.SpadeEventType.CollectionCreate, {
                    channel_id: e.channelID,
                    playlist_id: e.playlistID,
                    user_id: e.userID,
                    title: e.title
                })
            }

            function o(e) {
                a.o.track(r.SpadeEventType.CollectionAddItem, {
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
                a.o.track(r.SpadeEventType.CollectionRemoveItem, {
                    channel_id: e.channelID,
                    item_id: e.itemID,
                    item_position: e.itemPosition,
                    item_type: e.itemType,
                    playlist_id: e.playlistID,
                    user_id: e.userID
                })
            }
        },
        APPd: function(e, t, n) {
            "use strict";
            var a = n("/MKj"),
                r = n("kRBY"),
                i = n("mrSG"),
                o = n("q1tI"),
                s = n("/7QA"),
                l = n("eJ65"),
                c = n("yR8l"),
                d = n("SDEh"),
                m = n("edgk"),
                p = n("b6Yk"),
                u = n("5zXJ"),
                h = n("Ue10"),
                g = n("RNrf"),
                b = (n("IEPL"), function(e) {
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
                                var n = e.currentTarget.getAttribute("data-region"),
                                    a = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width,
                                    r = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height,
                                    i = a / 2 - 262.5 + window.screenLeft,
                                    o = r / 2 - 277.5 + window.screenTop,
                                    s = window.open("https://api.twitch.tv/v5/blizzard/" + t.props.user.id + "/auth?region=" + n, "blizzardConnectionWindow", "height=555,width=525,top=" + o + ",left=" + i + ",chrome=no");
                                if (!s || Object(d.a)()) return void(t.props.onOpenBlizzardConnect && t.props.onOpenBlizzardConnect(t.props.user.id, n, function() {
                                    t.props.data.refetch()
                                }));
                                s.focus(), Object(m.a)(s, function(e) {
                                    t.props.data && t.props.data.refetch && t.props.data.refetch()
                                })
                            }
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        return o.createElement(h.Wa, {
                            className: "blizzard-account-link"
                        }, this.props.data && this.props.data.loading && o.createElement(h.z, {
                            type: h.F.Hollow,
                            size: h.D.Default
                        }, o.createElement(h.Ya, null)), this.props.data && !this.props.data.loading && this.props.data.error && o.createElement(h.z, {
                            "data-test-selector": "blizzard_account_link_component_error",
                            type: h.F.Hollow,
                            size: h.D.Default
                        }, o.createElement(h.nb, {
                            asset: h.ob.DeadGlitch
                        })), this.props.data && this.props.data.currentUser && !this.props.data.currentUser.blizzardAccount && o.createElement(l.a, null, o.createElement(h.z, {
                            type: h.F.Hollow,
                            "data-test-selector": "blizzard_account_link_component_unlinked",
                            dropdown: !0,
                            size: h.D.Default
                        }, Object(s.d)("Link your Blizzard Account", "CampaignsBlizzardAccountLink")), o.createElement(h.u, {
                            direction: h.v.BottomRight,
                            size: h.w.Small,
                            noTail: !0
                        }, o.createElement(h.Wa, {
                            padding: .5
                        }, o.createElement(h.Ta, {
                            onClick: this.blizzardLink,
                            "data-region": "us"
                        }, Object(s.d)("North America (US)", "CampaignsBlizzardAccountLink")), o.createElement(h.Ta, {
                            onClick: this.blizzardLink,
                            "data-region": "eu"
                        }, Object(s.d)("Europe (EU)", "CampaignsBlizzardAccountLink")), o.createElement(h.Ta, {
                            onClick: this.blizzardLink,
                            "data-region": "kr"
                        }, Object(s.d)("Korea (KR)", "CampaignsBlizzardAccountLink")), o.createElement(h.Ta, {
                            onClick: this.blizzardLink,
                            "data-region": "tw"
                        }, Object(s.d)("Taiwan (TW)", "CampaignsBlizzardAccountLink")), o.createElement(h.Ta, {
                            onClick: this.blizzardLink,
                            "data-region": "cn"
                        }, Object(s.d)("China (CN)", "CampaignsBlizzardAccountLink")), o.createElement(h.Ta, {
                            onClick: this.blizzardLink,
                            "data-region": "sea"
                        }, Object(s.d)("South East Asia (SEA)", "CampaignsBlizzardAccountLink"))))), this.props.data && this.props.data.currentUser && this.props.data.currentUser.blizzardAccount && o.createElement(h.Qb, {
                            label: this.props.data.currentUser.blizzardAccount.battleTag
                        }, o.createElement(l.a, null, o.createElement(h.z, {
                            type: h.F.Hollow,
                            size: h.D.Default,
                            "data-test-selector": "blizzard_account_link_component_linked"
                        }, o.createElement(h.Wa, {
                            display: h.X.Flex,
                            flexDirection: h.Z.Row,
                            alignItems: h.f.Center
                        }, o.createElement(h.nb, {
                            asset: h.ob.Check,
                            type: h.pb.Success
                        }), o.createElement(h.Oa, {
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
                        }, o.createElement(h.Wa, {
                            padding: .5
                        }, o.createElement(h.Ta, {
                            onClick: this.blizzardUnlink,
                            "data-test-selector": "blizzard_account_link_component_unlink_account"
                        }, Object(s.d)("Unlink Blizzard Account", "CampaignsBlizzardAccountLink")))))))
                    }, t = i.__decorate([Object(c.a)(g)], t)
                }(o.Component));
            var f = Object(a.connect)(function(e) {
                return {
                    user: Object(r.e)(e)
                }
            })(b);
            n.d(t, "a", function() {
                return f
            })
        },
        AesC: function(e, t, n) {
            "use strict";
            n.r(t);
            var a, r = n("mrSG"),
                i = n("q1tI"),
                o = n("/7QA"),
                s = n("APPd"),
                l = n("FYlg"),
                c = n("/MKj"),
                d = n("fvjX"),
                m = n("1/iK"),
                p = n("y5D0"),
                u = n("kRBY"),
                h = (n("zHWM"), n("T1g+")),
                g = n("RVih"),
                b = n("Ue10"),
                f = (n("Vl1W"), "hearthstonegg-marketing-closed");
            ! function(e) {
                e.Banner = "hearthstonegg-marketing-banner", e.Close = "hearthstone-marketing-close"
            }(a || (a = {}));
            var v = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        dismissedBanner: o.m.get(f, !1)
                    }, t.renderLoggedIn = function() {
                        return i.createElement(b.Wa, null, i.createElement(b.Wa, {
                            margin: {
                                bottom: 1
                            }
                        }, i.createElement(b.S, {
                            className: "hgg-marketing-banner__message__img",
                            src: "https://d3aqoihi2n8ty8.cloudfront.net/hearthstone2018/marketing/Leeroy.png",
                            alt: ""
                        }), i.createElement(b.S, {
                            className: "hgg-marketing-banner__message__img",
                            src: "https://d3aqoihi2n8ty8.cloudfront.net/hearthstone2018/marketing/oops.png",
                            alt: ""
                        }), i.createElement(b.S, {
                            className: "hgg-marketing-banner__message__img",
                            src: "https://d3aqoihi2n8ty8.cloudfront.net/hearthstone2018/marketing/LegendRank.png",
                            alt: ""
                        }), i.createElement(b.S, {
                            className: "hgg-marketing-banner__message__img",
                            src: "https://d3aqoihi2n8ty8.cloudfront.net/hearthstone2018/marketing/GG.png",
                            alt: ""
                        }), i.createElement(b.S, {
                            className: "hgg-marketing-banner__message__img",
                            src: "https://d3aqoihi2n8ty8.cloudfront.net/hearthstone2018/marketing/CompassRose.png",
                            alt: ""
                        })), i.createElement(b.W, {
                            className: "hgg-marketing-banner__message__title",
                            bold: !0,
                            fontSize: b.Ba.Size5,
                            color: b.O.Link
                        }, Object(o.d)("Get rewards while watching Hearthstone Global Games on Twitch!", "HGGMarketingBanner")), i.createElement(b.W, null, Object(o.d)("Connect your Blizzard Account to Twitch and Cheer for your favorite team while unlocking in-game rewards and Twitch chat emotes", "HGGMarketingBanner")), i.createElement(b.Wa, {
                            display: b.X.Flex,
                            flexDirection: b.Z.Row,
                            flexWrap: b.Aa.Wrap,
                            alignItems: b.f.Center,
                            margin: {
                                top: 1
                            }
                        }, i.createElement(b.Wa, {
                            margin: {
                                right: 1,
                                bottom: 1
                            }
                        }, i.createElement(b.z, {
                            onClick: h.a
                        }, Object(o.d)("Cheer now", "HGGMarketingBanner"))), t.renderLearnMore()))
                    }, t.renderLoggedOut = function() {
                        return i.createElement(b.Wa, {
                            className: "hgg-marketing-banner__out"
                        }, i.createElement(b.Wa, null, i.createElement(b.W, {
                            className: "hgg-marketing-banner__out__title",
                            bold: !0,
                            fontSize: b.Ba.Size5,
                            color: b.O.Link
                        }, Object(o.d)("Sign in to get rewards while watching Hearthstone Global Games on Twitch!", "HGGMarketingBanner")), i.createElement(b.W, null, Object(o.d)("Cheer while unlocking in-game items and Twitch chat emotes.", "HGGMarketingBanner"))), i.createElement("ol", {
                            className: "hgg-marketing-banner__list"
                        }, i.createElement("li", null, i.createElement(b.W, {
                            type: b.Nb.Span
                        }, " ", Object(o.d)("Sign up or Log in to your Twitch account to participate", "HGGMarketingBanner"))), i.createElement("li", null, i.createElement(b.W, {
                            type: b.Nb.Span
                        }, " ", Object(o.d)("Connect your Blizzard account to Twitch", "HGGMarketingBanner")))), i.createElement(b.Wa, {
                            className: "hgg-marketing-banner__anon",
                            margin: {
                                y: 1
                            }
                        }, i.createElement(g.a, {
                            login: t.props.login,
                            signup: t.props.signup
                        })), t.renderLearnMore())
                    }, t.renderLearnMore = function() {
                        return i.createElement(b.Wa, {
                            margin: {
                                y: 1
                            }
                        }, i.createElement(b.U, {
                            type: b.V.Default,
                            to: "https://watch.twitch.tv/HGGCheer",
                            targetBlank: !0,
                            hoverUnderlineNone: !1
                        }, Object(o.d)("Learn more", "HGGMarketingBanner")))
                    }, t.renderRewardsInfo = function() {
                        var e = i.createElement(b.Wa, {
                            padding: 2
                        }, i.createElement(b.W, null, Object(o.d)("Earn cardpacks, a special card back, Twitch emotes and other exclusive rewards just by Cheering to support your favorite team!", "HGGMarketingBanner")));
                        return i.createElement(b.xb, {
                            display: b.X.Flex,
                            alignItems: b.f.Stretch,
                            flexDirection: b.Z.Row,
                            fullWidth: !0
                        }, i.createElement(b.xb, {
                            className: "hgg-marketing-banner__rewards__bottom",
                            borderTop: !0,
                            padding: 1,
                            display: b.X.Flex,
                            flexDirection: b.Z.Row,
                            breakpointExtraLarge: {
                                display: b.X.Hide
                            },
                            fullWidth: !0,
                            alignItems: b.f.Center,
                            justifyContent: b.Va.Around
                        }, i.createElement(b.S, {
                            className: "hgg-marketing-banner__rewards__card",
                            src: "https://d3aqoihi2n8ty8.cloudfront.net/hearthstone2018/marketing/WW.png",
                            alt: ""
                        }), i.createElement(b.S, {
                            className: "hgg-marketing-banner__rewards__card",
                            src: "https://d3aqoihi2n8ty8.cloudfront.net/hearthstone2018/marketing/KC.png",
                            alt: ""
                        }), e, i.createElement(b.S, {
                            className: "hgg-marketing-banner__rewards__card",
                            src: "https://d3aqoihi2n8ty8.cloudfront.net/hearthstone2018/marketing/Boomsday.png",
                            alt: ""
                        })), i.createElement(b.xb, {
                            borderLeft: !0,
                            display: b.X.Hide,
                            breakpointExtraLarge: {
                                display: b.X.Flex
                            },
                            justifyContent: b.Va.Center,
                            alignItems: b.f.Center
                        }, i.createElement(b.S, {
                            className: "hgg-marketing-banner__rewards__multi",
                            src: "https://d3aqoihi2n8ty8.cloudfront.net/hearthstone2018/marketing/threeCardpacks.png",
                            alt: ""
                        }), e))
                    }, t.closeBanner = function() {
                        o.m.set(f, !0), t.setState({
                            dismissedBanner: !0
                        })
                    }, t
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    return this.state.dismissedBanner ? null : i.createElement(b.xb, {
                        className: "hgg-marketing-banner",
                        borderRadius: b.x.Large,
                        background: b.r.Base,
                        margin: {
                            bottom: 2
                        },
                        position: b.eb.Relative,
                        "data-test-selector": a.Banner,
                        border: !0
                    }, i.createElement(b.xb, {
                        display: b.X.Flex,
                        flexDirection: b.Z.Column,
                        breakpointExtraLarge: {
                            flexDirection: b.Z.Row
                        },
                        justifyContent: b.Va.Center
                    }, i.createElement(b.Wa, {
                        className: "hgg-marketing-banner__message",
                        display: b.X.Flex,
                        flexDirection: b.Z.Row
                    }, i.createElement(b.Wa, {
                        className: "hgg-marketing-banner__bg",
                        display: b.X.Flex,
                        justifyContent: b.Va.Around,
                        alignItems: b.f.Center
                    }, i.createElement(b.S, {
                        className: "hgg-marketing-banner__logo",
                        src: "https://s3-us-west-2.amazonaws.com/bits-assets/hearthstone2018/marketing/hgg_icon.png",
                        alt: ""
                    })), i.createElement(b.Wa, {
                        padding: 3,
                        display: b.X.Flex,
                        flexDirection: b.Z.Column,
                        justifyContent: b.Va.Center
                    }, this.props.isLoggedIn ? this.renderLoggedIn() : this.renderLoggedOut())), i.createElement(b.Wa, {
                        className: "hgg-marketing-banner__rewards",
                        display: b.X.Flex,
                        flexDirection: b.Z.Row,
                        alignItems: b.f.Stretch
                    }, this.renderRewardsInfo())), i.createElement(b.Wa, {
                        className: "hgg-marketing-banner__close",
                        position: b.eb.Absolute,
                        display: b.X.Flex
                    }, i.createElement(b.A, {
                        "data-test-selector": a.Close,
                        icon: b.ob.Close,
                        ariaLabel: Object(o.d)("Close", "HGGMarketingBanner"),
                        onClick: this.closeBanner
                    })))
                }, t
            }(i.Component);
            var k, y = Object(c.connect)(function(e) {
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
                E = n("G30c"),
                w = n("WaLP"),
                C = n("VJHF"),
                N = n("rC/K"),
                _ = n("5zXJ"),
                I = {
                    formatParticipationThresholdMessage: function(e) {
                        return Object(o.d)("Cheer at least {participationThreshold, number} Bits to help reach this community goal.", {
                            participationThreshold: e
                        }, "DefaultMilestoneFormatter")
                    },
                    formatCheerbombDescriptionMessage: function() {
                        return ""
                    },
                    formatCommunityUnlockedMessage: function(e) {
                        return Object(o.d)("The community has unlocked this reward! Cheer at least {participationThreshold, number} Bits to unlock it.", {
                            participationThreshold: e
                        }, "DefaultMilestoneFormatter")
                    },
                    formatKeepCheeringMessage: function() {
                        return Object(o.d)("Keep cheering along with the community to reach this goal more quickly.", "DefaultMilestoneFormatter")
                    },
                    formatMilestoneNotAvailableMessage: function() {
                        return Object(o.d)("Coming Soon", "DefaultMilestoneFormatter")
                    },
                    getUnannouncedMilestoneImage: function() {
                        return _.c + "/hearthstone2018/rewards/coming-soon.png"
                    },
                    formatPostStageMessage: function() {
                        return ""
                    }
                },
                S = n("vt2+");
            ! function(e) {
                e.CommunityRewards = "community-rewards", e.IndividualRewards = "individual-rewards"
            }(k || (k = {}));
            var A, T = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.renderCommunityRewards = function() {
                            var e = t.props.objectives.find(function(e) {
                                return e.tag === N.a.Global && e.isActive
                            });
                            if (!e) return null;
                            var n = Object(S.b)(e.milestones),
                                a = n.length > 0 && n.filter(function(t) {
                                    return e.progress >= t.threshold && Object(S.a)(t, new Date(Date.now()))
                                }).length === n.length,
                                r = n.map(function(e) {
                                    return e.participationThreshold
                                }).reduce(function(e, t) {
                                    return e > t ? e : t
                                }, 0),
                                s = Object(o.d)("Unlock exclusive in-game items when you contribute to and reach the community Cheer goals.", "HGGProgressTab");
                            return a && (s = Object(o.d)("These HGG Community Rewards have been unlocked. Cheer {threshold} Bits or more and unlock them for yourself!", {
                                threshold: r
                            }, "HGGProgressTab")), i.createElement(b.Wa, {
                                "data-test-selector": k.CommunityRewards
                            }, i.createElement(l.a, {
                                milestones: n,
                                progress: e.progress,
                                participation: e.participation,
                                userHasPrime: t.props.userHasPrime,
                                blizzardAccount: t.props.blizzardAccount,
                                title: Object(o.d)("Community Progress", "HGGProgressTab"),
                                description: s,
                                isLoggedIn: t.props.isLoggedIn,
                                showUnlocked: a,
                                tabSwitch: t.props.tabSwitch,
                                milestoneFormatter: I,
                                objectiveActive: e.isActive
                            }))
                        }, t.renderIndividualRewards = function() {
                            var e = t.props.objectives.find(function(e) {
                                return e.tag === N.a.Individual && !e.cheergroup
                            });
                            if (!e) return null;
                            var n = Object(S.b)(e.milestones);
                            return i.createElement(b.Wa, {
                                "data-test-selector": k.IndividualRewards
                            }, i.createElement(l.a, {
                                milestones: n,
                                progress: e.progress,
                                participation: e.participation,
                                userHasPrime: t.props.userHasPrime,
                                blizzardAccount: t.props.blizzardAccount,
                                title: Object(o.d)("Personal Progress", "HGGProgressTab"),
                                description: Object(o.d)("Cheer to hype your favorite Hearthstone teams and unlock Hearthstone cardpacks, cardbacks, and Twitch emotes.", "HGGProgressTab"),
                                isLoggedIn: t.props.isLoggedIn,
                                showRewardsButton: !0,
                                tabSwitch: t.props.tabSwitch,
                                milestoneFormatter: I,
                                objectiveActive: e.isActive
                            }))
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        return i.createElement(b.Wa, {
                            className: "campaigns-progress-tab",
                            margin: {
                                y: 2
                            }
                        }, i.createElement(y, null), i.createElement(b.Wa, null, i.createElement(b.Wa, {
                            display: b.X.Flex,
                            flexWrap: b.Aa.Wrap
                        }, i.createElement(b.P, {
                            cols: {
                                default: 12,
                                xl: 5
                            }
                        }, i.createElement(b.Wa, {
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
                        }, i.createElement(b.Wa, {
                            fullHeight: !0,
                            margin: {
                                bottom: 2
                            }
                        }, this.renderIndividualRewards())))), i.createElement(b.Ia, {
                            gutterSize: b.Ja.Large
                        }, i.createElement(b.P, {
                            cols: {
                                xl: 6,
                                default: 12
                            }
                        }, i.createElement(b.Wa, {
                            padding: {
                                bottom: 2
                            },
                            breakpointExtraLarge: {
                                padding: {
                                    bottom: 0
                                }
                            }
                        }, i.createElement(E.a, {
                            hideLocale: !0,
                            channelID: this.props.channelID,
                            domain: "250540387" === this.props.channelID ? C.e : C.d
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
                R = n("ImQ+"),
                L = n("t95G"),
                x = n("gzKk");
            (A || (A = {})).Community = "community-objectives";
            var z = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    var e = this.getObjectivesForTag(N.a.Global)[0],
                        t = e.milestones.length,
                        n = e.milestones.map(function(e) {
                            return e.rewards.filter(function(e) {
                                return e.isEntitled
                            }).length
                        }).reduce(function(e, t) {
                            return t + e
                        }, 0),
                        a = this.getObjectivesForTag(N.a.Individual).filter(function(e) {
                            return !e.cheergroup
                        })[0];
                    return i.createElement(b.Wa, {
                        margin: {
                            y: 2
                        }
                    }, e && i.createElement(b.Wa, {
                        margin: {
                            bottom: 2
                        }
                    }, i.createElement(x.a, {
                        title: Object(o.d)("Community Rewards", "HGGRewardsTab"),
                        description: Object(o.d)("Cheer along with the rest of the community and unlock Hearthstone in-game rewards. Keep Cheering every stage for new rewards.", "HGGRewardsTab"),
                        totalRewards: t,
                        rewardsEntitled: n,
                        showCheer: this.props.isLoggedIn,
                        "data-test-selector": A.Community
                    }, i.createElement(b.Wa, {
                        display: b.X.Flex,
                        flexWrap: b.Aa.Wrap,
                        justifyContent: b.Va.Start,
                        padding: 1
                    }, i.createElement(b.Wa, {
                        padding: 1,
                        key: e.id
                    }, i.createElement(L.a, {
                        milestones: e.milestones,
                        globalProgress: e.progress,
                        userProgress: e.participation,
                        blizzardAccount: this.props.blizzardAccount,
                        isLocked: !1,
                        placeholderMilestones: 0,
                        milestoneFormatter: I,
                        objectiveActive: e.isActive
                    }))))), i.createElement(b.Wa, {
                        margin: {
                            bottom: 2
                        }
                    }, i.createElement(R.a, {
                        progress: a ? a.progress : 0,
                        milestones: a.milestones,
                        blizzardAccount: this.props.blizzardAccount,
                        showCheer: this.props.isLoggedIn,
                        description: Object(o.d)("Cheer Bits for your favorite teams and unlock Special Hearthstone and Twitch rewards as you go.", "HGGRewardsTab"),
                        milestoneFormatter: I,
                        objectiveActive: a.isActive
                    })))
                }, t.prototype.getObjectivesForTag = function(e) {
                    return (this.props.objectives || []).filter(function(t) {
                        return t.tag === e
                    })
                }, t
            }(i.Component);
            var F = Object(c.connect)(function(e) {
                    return {
                        isLoggedIn: Object(u.f)(e)
                    }
                })(z),
                D = n("Rfsd"),
                O = n("hRrL"),
                W = n("fR2g"),
                j = n("QlRw"),
                B = n("KnFV"),
                U = n("0nav"),
                P = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.state = {
                            tabToShow: B.a.Progress
                        }, n.tabClick = function(e) {
                            var t = B.a.Progress;
                            e.currentTarget.hasAttribute("data-tab-target") ? t = e.currentTarget.getAttribute("data-tab-target") || t : e.currentTarget.parentElement && e.currentTarget.parentElement.hasAttribute("data-tab-target") && (t = e.currentTarget.parentElement.getAttribute("data-tab-target") || t), n.setState({
                                tabToShow: t
                            }), Object(U.a)(t, n.props.channelID, n.props.currentUserID)
                        }, n.state.tabToShow = B.a.Progress, n
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        var e = this.props,
                            t = e.hasPrime,
                            n = e.campaignProperties,
                            a = !!this.props.blizzardAccount,
                            r = this.props.blizzardAccount && this.props.blizzardAccount.region !== j.a.China,
                            l = this.canRewardsBeFulfilled(n) && r,
                            c = null;
                        return this.state.tabToShow === B.a.Progress ? c = i.createElement(T, {
                            channelID: this.props.channelID,
                            channelLogin: this.props.channelLogin,
                            blizzardAccount: this.props.blizzardAccount,
                            tabSwitch: this.tabClick,
                            userHasPrime: t,
                            objectives: n.objectives,
                            activeCampaigns: n.activeCampaigns,
                            isLoggedIn: !!this.props.user
                        }) : this.state.tabToShow === B.a.Rewards ? c = i.createElement(F, {
                            channelID: this.props.channelID,
                            blizzardAccount: this.props.blizzardAccount,
                            userHasPrime: t,
                            domain: this.props.domain,
                            objectives: n.objectives,
                            triggers: n.triggers,
                            activeCampaigns: n.activeCampaigns
                        }) : this.state.tabToShow === B.a.Info && (c = i.createElement(D.a, {
                            channelLogin: this.props.channelLogin,
                            channelID: this.props.channelID
                        })), i.createElement(b.Wa, {
                            margin: {
                                y: 3
                            },
                            position: b.eb.Relative
                        }, i.createElement(b.xb, {
                            borderBottom: !0
                        }, i.createElement(b.Wa, {
                            display: b.X.Flex,
                            flexDirection: b.Z.ColumnReverse,
                            flexWrap: b.Aa.Wrap,
                            breakpointExtraLarge: {
                                flexDirection: b.Z.Row
                            }
                        }, i.createElement(b.P, {
                            cols: {
                                xl: 7,
                                default: 12
                            }
                        }, i.createElement(b.Oa, {
                            display: b.X.Flex,
                            alignItems: b.f.End,
                            fullHeight: !0
                        }, i.createElement("ul", null, i.createElement(W.a, {
                            id: B.a.Progress,
                            isSelected: this.state.tabToShow === B.a.Progress,
                            title: Object(o.d)("Event Progress", "HGGTabs"),
                            onClick: this.tabClick
                        }), i.createElement(W.a, {
                            id: B.a.Rewards,
                            isSelected: this.state.tabToShow === B.a.Rewards,
                            title: Object(o.d)("Loot", "HGGTabs"),
                            onClick: this.tabClick
                        }), i.createElement(W.a, {
                            id: B.a.Info,
                            isSelected: this.state.tabToShow === B.a.Info,
                            title: Object(o.d)("Info", "HGGTabs"),
                            onClick: this.tabClick
                        })))), i.createElement(b.P, {
                            cols: {
                                xl: 5,
                                default: 12
                            }
                        }, i.createElement(b.Wa, {
                            display: b.X.Flex,
                            alignItems: b.f.End,
                            padding: {
                                bottom: 1
                            },
                            breakpointExtraLarge: {
                                padding: {
                                    bottom: .5
                                },
                                justifyContent: b.Va.End
                            }
                        }, this.state.tabToShow === B.a.Rewards && i.createElement(O.a, {
                            tournamentID: this.props.domain,
                            enabled: l
                        }), this.props.currentUserID && i.createElement(b.Wa, null, a && !r && this.state.tabToShow === B.a.Rewards ? i.createElement(b.W, {
                            color: b.O.Error
                        }, Object(o.d)("Not available in linked account's region", "HGGTabs")) : i.createElement(s.a, {
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
                            n = e.triggers && e.triggers.some(function(e) {
                                return e.rewards && e.rewards.some(function(e) {
                                    return e.canBeFulfilled
                                })
                            });
                        return t || n
                    }, t
                }(i.Component),
                G = P;
            n.d(t, "HGGTabsComponent", function() {
                return P
            }), n.d(t, "HGGTabs", function() {
                return G
            })
        },
        AvCV: function(e, t, n) {},
        "DR+f": function(e, t, n) {},
        FYlg: function(e, t, n) {
            "use strict";
            var a, r = n("mrSG"),
                i = n("q1tI"),
                o = n("/7QA"),
                s = n("TSYQ"),
                l = n("zF2X"),
                c = n("cUCe"),
                d = n("81Gi"),
                m = n("Ue10");
            n("2UI6");
            ! function(e) {
                e.Stem = "campaign-stem", e.Node = "campaign-node", e.Image = "campaign-image"
            }(a || (a = {}));
            var p, u = {
                    offsetY: "1px"
                },
                h = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        var e = this.props,
                            t = e.milestone,
                            n = e.participation,
                            r = e.progress,
                            o = new Date(t.startDate),
                            p = t.rewards[0],
                            h = void 0 !== r && r < t.threshold,
                            g = void 0 === r || void 0 !== r && r >= t.threshold,
                            b = void 0 !== n && n >= t.participationThreshold,
                            f = g && !b,
                            v = !p || o > new Date(Date.now()),
                            k = p && (p.canBeFulfilled || !p.isEntitled && g && b),
                            y = null;
                        f ? y = i.createElement(d.a, null) : p && p.isEntitled ? y = i.createElement(c.a, null) : k && (y = i.createElement(m.K, {
                            status: m.M.Live,
                            pulse: !0
                        }));
                        var E = s("campaigns-milestone-node__clickable", {
                            "campaigns-milestone-node__clickable--inactive": null === y && (h || v),
                            "campaigns-milestone-node__clickable--claimable": k
                        });
                        return i.createElement(l.a, {
                            balloon: this.props.milestoneBalloon,
                            balloonProps: u
                        }, this.renderRewardImage(v), i.createElement(m.Wa, {
                            className: "campaigns-milestone-node",
                            margin: {
                                x: .5
                            },
                            display: m.X.Flex,
                            flexDirection: m.Z.Column,
                            alignItems: m.f.Center
                        }, i.createElement("div", {
                            className: E,
                            "data-test-selector": a.Node
                        }, y), this.renderStem(v || h)))
                    }, t.prototype.renderRewardImage = function(e) {
                        var t = this.props.milestone.rewards[0];
                        return this.props.showRewardImage && t ? i.createElement(m.Wa, {
                            className: "campaigns-milestone-node__img-container",
                            "data-test-selector": a.Image,
                            display: m.X.Flex,
                            justifyContent: m.Va.Center,
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
                            "data-test-selector": a.Stem
                        })
                    }, t
                }(i.Component),
                g = n("OTph"),
                b = n("sAoK"),
                f = n("klJU"),
                v = n("rkjw"),
                k = n("vt2+");
            n("qOeB");
            (p || (p = {})).ProgressBar = "progress-bar";
            var y, E = function(e) {
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
                            var n = t.renderBalloon(e);
                            return i.createElement(h, {
                                key: e.id,
                                milestone: e,
                                milestoneBalloon: n,
                                progress: t.props.progress,
                                participation: t.props.participation,
                                blizzardAccount: t.props.blizzardAccount,
                                milestoneFormatter: t.props.milestoneFormatter
                            })
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        var e = this,
                            t = [],
                            n = [],
                            a = null,
                            r = 0,
                            o = this.props.milestones.slice(0).sort(function(e, t) {
                                return e.threshold - t.threshold
                            });
                        o.forEach(function(s, l) {
                            if (e.props.progress >= s.threshold && l < o.length - 1 && Object(k.a)(s, new Date(Date.now()))) {
                                var c = e.renderNode(s);
                                t.push(c)
                            } else if (a) {
                                c = e.renderNode(s);
                                n.push(c)
                            } else {
                                var d = s.rewards[0],
                                    m = e.props.progress >= s.threshold,
                                    p = e.props.participation >= s.participationThreshold,
                                    u = !Object(k.a)(s, new Date(Date.now())),
                                    h = v.b.Locked;
                                u ? h = v.b.Unavailable : m && p ? h = v.b.Available : (m || p) && (h = v.b.HalfLocked), a = i.createElement(v.a, {
                                    status: h,
                                    imageURL: u ? e.props.milestoneFormatter.getUnannouncedMilestoneImage() : d && d.imageURL || "",
                                    milestoneBalloon: e.renderBalloon(s),
                                    title: u ? e.props.milestoneFormatter.formatMilestoneNotAvailableMessage() : d && d.name || "",
                                    threshold: u ? void 0 : s.threshold,
                                    rarity: u ? void 0 : d && d.rarity
                                });
                                var g = l > 0 ? o[l - 1].threshold : 0;
                                r = Object(k.a)(s, new Date(Date.now())) ? (e.props.progress - g) / (s.threshold - g) * 100 : 0
                            }
                        });
                        var l = s("campaigns-progress-bar__nodes", {
                            "campaigns-progress-bar__nodes--end": n.length <= 3
                        });
                        return t.length > 3 && (t = t.slice(t.length - 3, t.length)), n.length > 3 && (n = n.slice(0, 3)), i.createElement(m.Wa, {
                            className: "campaigns-progress-bar",
                            position: m.eb.Relative,
                            margin: {
                                y: 1
                            }
                        }, i.createElement(m.Wa, {
                            className: "campaigns-progress-bar__bg",
                            ariaHidden: !0,
                            fullWidth: !0
                        }, i.createElement(m.hb, {
                            value: 50,
                            size: m.jb.Default,
                            mask: !0
                        })), i.createElement(m.Wa, {
                            fullWidth: !0,
                            className: "campaigns-progress-bar__wrapper"
                        }, i.createElement(m.Wa, {
                            alignItems: m.f.Center,
                            className: "campaigns-progress-bar__nodes"
                        }, t), i.createElement(m.Oa, {
                            className: "campaigns-progress-bar__value"
                        }, i.createElement(m.hb, {
                            "data-test-selector": p.ProgressBar,
                            value: r,
                            size: m.jb.Default,
                            mask: !0
                        })), i.createElement(m.Wa, {
                            className: "campaigns-progress-bar__square"
                        }, a), n.length > 0 && i.createElement(m.Wa, {
                            alignItems: m.f.Center,
                            className: l,
                            margin: {
                                left: 1
                            }
                        }, n)))
                    }, t
                }(i.Component),
                w = n("KnFV"),
                C = n("T1g+");
            n("3NMT");
            ! function(e) {
                e.UnlockedNodes = "unlocked-nodes", e.UnlockedText = "unlocked-text"
            }(y || (y = {}));
            var N = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.renderMilestoneNode = function(e) {
                            var n = i.createElement(g.a, {
                                milestone: e,
                                reward: e.rewards[0],
                                globalProgress: t.props.progress,
                                userProgress: t.props.participation,
                                blizzardAccount: t.props.blizzardAccount,
                                milestoneFormatter: t.props.milestoneFormatter,
                                objectiveActive: t.props.objectiveActive
                            });
                            return i.createElement(m.Wa, {
                                key: e.id,
                                padding: {
                                    x: 2
                                }
                            }, i.createElement(h, {
                                milestone: e,
                                milestoneBalloon: n,
                                progress: t.props.progress,
                                participation: t.props.participation,
                                blizzardAccount: t.props.blizzardAccount,
                                showRewardImage: !0,
                                milestoneFormatter: t.props.milestoneFormatter
                            }))
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        var e = this.props.milestones.map(function(e) {
                            return e.participationThreshold
                        }).reduce(function(e, t) {
                            return e > t ? e : t
                        }, 0);
                        return i.createElement(m.xb, {
                            className: "campaigns-progress-section",
                            border: !0,
                            display: m.X.Block,
                            background: m.r.Base,
                            borderRadius: m.x.Large
                        }, i.createElement(m.xb, {
                            className: "campaigns-progress-section__header",
                            borderBottom: !0,
                            padding: 2
                        }, i.createElement(m.Wa, {
                            className: "campaigns-progress-section__titles"
                        }, i.createElement(m.Oa, {
                            display: m.X.InlineBlock
                        }, i.createElement(m.W, {
                            bold: !0,
                            type: m.Nb.H6,
                            color: m.O.Link,
                            transform: m.Mb.Uppercase
                        }, this.props.title)), this.props.subtitle && i.createElement(m.Oa, {
                            margin: {
                                left: 1
                            },
                            display: m.X.InlineBlock
                        }, i.createElement(m.W, {
                            className: "campaigns-progress-section__subtitle",
                            bold: !0,
                            type: m.Nb.H6,
                            transform: m.Mb.Uppercase
                        }, this.renderStageDescription(this.props.subtitle)))), i.createElement(m.Wa, {
                            display: m.X.Flex,
                            justifyContent: m.Va.Between,
                            alignItems: m.f.Center
                        }, i.createElement(m.Wa, {
                            display: m.X.Flex,
                            alignItems: m.f.Baseline
                        }, i.createElement(m.Wa, {
                            padding: {
                                right: .5
                            }
                        }, i.createElement(m.nb, {
                            type: m.pb.Brand,
                            height: 30,
                            width: 30,
                            asset: m.ob.Bits
                        })), i.createElement(m.W, {
                            type: m.Nb.H1,
                            bold: !0
                        }, Object(o.f)(this.props.progress))), this.props.showRewardsButton && i.createElement(m.Wa, null, this.renderRewardsButton())), i.createElement(m.Wa, {
                            className: "campaigns-progress-section__description"
                        }, i.createElement(m.W, null, this.props.description)), this.props.showUnlocked && i.createElement(m.Wa, {
                            "data-test-selector": y.UnlockedText,
                            display: m.X.Flex,
                            justifyContent: m.Va.Between,
                            margin: {
                                top: 1
                            }
                        }, i.createElement(m.Wa, {
                            display: m.X.Flex,
                            alignItems: m.f.Center
                        }, i.createElement(m.Wa, {
                            margin: {
                                right: 1
                            }
                        }, this.props.participation >= e ? i.createElement(b.a, null) : i.createElement(f.a, null)), i.createElement(m.W, {
                            bold: !0
                        }, Object(o.d)("Cheer {threshold} Bits", {
                            threshold: Object(o.f)(e)
                        }, "CampaignsProgressSection"))), i.createElement(m.Wa, {
                            display: m.X.Flex
                        }, this.props.isLoggedIn && i.createElement(m.Wa, {
                            margin: {
                                right: 1
                            }
                        }, i.createElement(m.z, {
                            onClick: C.a
                        }, Object(o.d)("Cheer Now", "CampaignsProgressSection"))), this.renderRewardsButton()))), i.createElement(m.Wa, {
                            padding: 2
                        }, this.renderSectionContents()))
                    }, t.prototype.renderSectionContents = function() {
                        return this.props.showUnlocked ? i.createElement(m.Wa, {
                            "data-test-selector": y.UnlockedNodes,
                            display: m.X.Flex,
                            justifyContent: m.Va.Center,
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
                            "data-tab-target": w.a.Rewards
                        }, Object(o.d)("See All Rewards", "CampaignsProgressSection"))
                    }, t.prototype.renderStageDescription = function(e) {
                        return {
                            "stage 1": Object(o.d)("Stage 1", "CampaignsProgressSection"),
                            "stage 2": Object(o.d)("Stage 2", "CampaignsProgressSection"),
                            "stage 3": Object(o.d)("Stage 3", "CampaignsProgressSection")
                        }[e.toLowerCase()] || e
                    }, t
                }(i.Component),
                _ = N;
            n.d(t, !1, function() {
                return y
            }), n.d(t, !1, function() {
                return N
            }), n.d(t, "a", function() {
                return _
            })
        },
        G30c: function(e, t, n) {
            "use strict";
            var a = n("mrSG"),
                r = n("q1tI"),
                i = n("oJmH"),
                o = n("/7QA"),
                s = n("yR8l"),
                l = n("eDVu"),
                c = n("+LJB"),
                d = n("i4ay"),
                m = n("Ue10"),
                p = n("12i0"),
                u = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        var e = this.props.data,
                            t = e.user && e.user.tournament && e.user.tournament.teamLeaderboard;
                        return e.loading && !t ? r.createElement(m.Ya, {
                            fillContent: !0
                        }) : !t || e.error ? r.createElement(m.Wa, {
                            fullHeight: !0,
                            fullWidth: !0,
                            textAlign: m.Jb.Center,
                            padding: {
                                top: 4
                            }
                        }, r.createElement(m.nb, {
                            asset: m.ob.DeadGlitch,
                            fill: !0,
                            width: 50,
                            height: 50
                        })) : r.createElement(m.xb, {
                            display: m.X.Flex,
                            flexDirection: m.Z.Column,
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
                        }, r.createElement(m.Wa, {
                            padding: {
                                bottom: 2
                            }
                        }, r.createElement(m.W, {
                            type: m.Nb.H3
                        }, Object(o.d)("Team Leaderboards", "CampaignsProgressTab"))), r.createElement(d.a, {
                            leaderboardRows: t.items.edges,
                            pageSize: 10,
                            channelID: this.props.channelID,
                            isTeam: !0,
                            domain: this.props.domain,
                            hideLocale: this.props.hideLocale
                        }))
                    }, t
                }(r.Component),
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
            n.d(t, !1, function() {
                return u
            }), n.d(t, "a", function() {
                return h
            })
        },
        IEPL: function(e, t, n) {},
        "ImQ+": function(e, t, n) {
            "use strict";
            var a, r = n("mrSG"),
                i = n("q1tI"),
                o = n("/7QA"),
                s = n("gzKk"),
                l = n("zF2X"),
                c = n("OTph"),
                d = n("fHRJ"),
                m = n("Ue10");
            n("hR8f");
            ! function(e) {
                e.Reward = "campaigns-reward-row-reward"
            }(a || (a = {}));
            var p = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        var e = this;
                        return i.createElement(m.Wa, {
                            className: "campaigns-reward-row"
                        }, i.createElement(m.Ia, {
                            justifyContent: m.Va.Start,
                            gutterSize: m.Ja.None
                        }, this.props.milestones.map(function(t) {
                            return i.createElement(m.P, {
                                key: t.id,
                                cols: {
                                    default: 6,
                                    sm: 4,
                                    lg: 3,
                                    xl: 2
                                }
                            }, i.createElement(m.xb, {
                                className: "campaigns-reward-row__border",
                                "data-test-selector": a.Reward,
                                borderLeft: !0,
                                borderRight: !0
                            }, i.createElement(l.a, {
                                balloon: e.renderMilestoneBalloon(t)
                            }, i.createElement(m.Wa, {
                                position: m.eb.Relative
                            }, i.createElement(d.a, {
                                imageURL: t.rewards[0] && t.rewards[0].imageURL,
                                imageAlt: t.rewards[0] && t.rewards[0].name,
                                rarity: t.rewards[0] && t.rewards[0].rarity,
                                imageClassName: "campaigns-reward-row__reward-image"
                            }), void 0 !== e.props.userProgress && e.props.userProgress < t.threshold && i.createElement(m.xb, {
                                className: "campaigns-reward-row__locked-overlay",
                                fullHeight: !0,
                                fullWidth: !0,
                                attachTop: !0,
                                attachLeft: !0,
                                position: m.eb.Absolute,
                                display: m.X.Flex,
                                justifyContent: m.Va.Center,
                                alignItems: m.f.Center
                            }, i.createElement(m.Wa, {
                                className: "campaigns-reward-row__overlay-icon"
                            }, i.createElement(m.nb, {
                                fill: !0,
                                asset: m.ob.Lock
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
                u = n("vt2+"),
                h = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        var e = Object(o.d)("Personal Rewards", "CampaignsIndividualRewards"),
                            t = this.props.milestones.length,
                            n = this.props.milestones.filter(function(e) {
                                return e.rewards.some(function(e) {
                                    return e.isEntitled
                                })
                            }).length,
                            a = Object(u.b)(this.props.milestones);
                        return i.createElement(s.a, {
                            title: e,
                            description: this.props.description,
                            totalRewards: t,
                            rewardsEntitled: n,
                            showCheer: this.props.showCheer
                        }, i.createElement(p, {
                            milestones: a,
                            blizzardAccount: this.props.blizzardAccount,
                            userProgress: this.props.progress,
                            milestoneFormatter: this.props.milestoneFormatter,
                            objectiveActive: this.props.objectiveActive
                        }))
                    }, t
                }(i.Component);
            n.d(t, "a", function() {
                return h
            })
        },
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
        OTph: function(e, t, n) {
            "use strict";
            var a, r = n("/MKj"),
                i = n("kRBY"),
                o = n("mrSG"),
                s = n("q1tI"),
                l = n("/7QA"),
                c = n("yR8l"),
                d = n("sAoK"),
                m = n("klJU"),
                p = n("fHRJ"),
                u = n("QlRw"),
                h = n("rC/K"),
                g = n("RhRD"),
                b = n("vt2+"),
                f = n("Ue10"),
                v = n("QHS7");
            n("+L10");
            ! function(e) {
                e.AvailableAndRedeemedText = "milestone-progress-balloon-available-and-redeemed-text", e.AvailableAndUnredeemedText = "milestone-progress-balloon-available-and-unredeemed-text", e.AvailableAndUnlinkedText = "milestone-progress-balloon-available-and-unlinked-text", e.GloballyAvailableCheerMoreText = "milestone-progress-balloon-globally-available-cheer-more-text", e.GlobalKeepCheeringText = "milestone-progress-balloon-keep-cheering-text", e.GlobalLockedText = "milestone-progress-balloon-global-locked-text", e.IndividualLockedText = "milestone-progress-balloon-individual-locked-text", e.UnavailableText = "milestone-progress-balloon-unavailable-text", e.AvailabilityPendingText = "milestone-progress-balloon-availability-pending-text", e.StatusIconUnavailable = "milestone-progress-balloon-unavailable-icon", e.StatusIconLocked = "milestone-progress-balloon-locked-icon", e.StatusIconUnlocked = "milestone-progress-balloon-unlocked-icon", e.RedeemedIndicator = "milestone-progress-balloon-redeemed-indicator", e.UnredeemedIndicator = "milestone-progress-balloon-unredeemed-indicator", e.AvailabilityPendingIndicator = "milestone-progress-balloon-availability-pending-indicator", e.GlobalCheerCTA = "milestone-progress-balloon-global-cheer-cta", e.CheerNowButton = "milestone-progress-balloon-cheer-now-button", e.NotAvailableText = "milestone-progress-balloon-not-available-text", e.NotAvailableDate = "milestone-progress-balloon-not-available-date", e.NotAvailableMessage = "milestone-progress-balloon-not-available-message", e.ObjectiveOverMessage = "milestone-progress-balloon-objective-over-message"
            }(a || (a = {}));
            var k = function(e) {
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
                    var t, n = !!this.props.milestone && this.props.milestone.objectiveTag === h.a.Global;
                    return t = e ? this.renderCheerbombTriggerBodyContent() : n ? this.renderGlobalObjectiveBodyContent() : this.renderIndividualObjectiveBodyContent(), s.createElement(f.Wa, {
                        className: "milestone-progress-balloon",
                        textAlign: f.Jb.Left
                    }, s.createElement(f.Wa, {
                        className: "milestone-progress-balloon__reward-showcase"
                    }, s.createElement(p.a, {
                        imageURL: this.props.reward.imageURL,
                        imageAlt: this.props.reward.name,
                        rarity: this.props.reward.rarity
                    })), s.createElement(f.Wa, {
                        margin: 1
                    }, s.createElement(f.xb, {
                        display: f.X.Flex,
                        justifyContent: f.Va.Between,
                        borderBottom: !0,
                        padding: {
                            bottom: 1
                        }
                    }, s.createElement(f.Wa, null, s.createElement(f.W, {
                        bold: !0,
                        fontSize: f.Ba.Size4
                    }, this.props.reward.name), s.createElement(f.W, {
                        color: f.O.Alt2
                    }, this.props.reward.description)), s.createElement(f.Wa, null, this.renderStatusSVG(), this.props.milestone && s.createElement(f.Wa, {
                        display: f.X.Flex,
                        alignItems: f.f.Center
                    }, s.createElement(f.nb, {
                        type: f.pb.Brand,
                        asset: f.ob.Bits
                    }), s.createElement(f.W, {
                        fontSize: f.Ba.Size5,
                        type: f.Nb.Span
                    }, Object(l.f)(this.props.milestone.threshold))))), s.createElement(f.Wa, {
                        margin: {
                            top: 1
                        }
                    }, t)))
                }, t.prototype.renderNotAvailableBallon = function() {
                    return s.createElement(f.Wa, {
                        className: "milestone-progress-balloon",
                        textAlign: f.Jb.Left
                    }, s.createElement(f.Wa, {
                        className: "milestone-progress-balloon__reward-showcase"
                    }, s.createElement(p.a, {
                        imageURL: this.props.milestoneFormatter.getUnannouncedMilestoneImage()
                    })), s.createElement(f.Wa, {
                        margin: 1
                    }, s.createElement(f.xb, {
                        "data-test-selector": a.NotAvailableText,
                        display: f.X.Flex,
                        justifyContent: f.Va.Between,
                        borderBottom: !0,
                        padding: {
                            bottom: 1
                        }
                    }, s.createElement(f.Wa, null, s.createElement(f.W, {
                        "data-test-selector": a.NotAvailableMessage,
                        bold: !0,
                        fontSize: f.Ba.Size4
                    }, this.props.milestoneFormatter.formatMilestoneNotAvailableMessage()), this.props.milestone && s.createElement(f.W, {
                        "data-test-selector": a.NotAvailableDate,
                        color: f.O.Alt2
                    }, Object(l.c)(new Date(this.props.milestone.startDate), {
                        month: "numeric",
                        day: "numeric"
                    })))), s.createElement(f.Wa, {
                        margin: {
                            top: 1
                        }
                    }, s.createElement(f.W, {
                        fontSize: f.Ba.Size5,
                        type: f.Nb.Span
                    }, Object(l.d)("This reward has not yet been announced.", "MilestoneProgressBalloon")))))
                }, t.prototype.renderStatusSVG = function() {
                    var e, t = f.ob.Lock,
                        n = a.StatusIconLocked;
                    return (this.props.milestone && this.isRewardUnlocked() || this.props.trigger && this.props.triggerRewardRedeemed) && (e = f.pb.Success, t = f.ob.Unlock, n = a.StatusIconUnlocked), this.isRewardUnavailable() && (e = f.pb.Alert, t = f.ob.Ban, n = a.StatusIconUnavailable), s.createElement(f.Wa, {
                        "data-test-selector": n,
                        textAlign: f.Jb.Right,
                        className: "milestone-progress-balloon__status-svg"
                    }, s.createElement(f.nb, {
                        type: e,
                        asset: t
                    }))
                }, t.prototype.renderGlobalObjectiveBodyContent = function() {
                    return this.props.milestone ? this.isRewardUnavailable() ? this.renderUnavailableText() : this.isStageLockedAndUnavailable() ? this.renderLockedAndUnavailableText() : this.isRewardGloballyUnlocked() && this.isRewardParticipationMet() ? this.props.reward.isEntitled ? this.props.reward.metadata && this.props.reward.metadata.isPending ? s.createElement(s.Fragment, null, this.renderAvailabilityPendingText(), this.renderRedeemedIndicator(), this.renderAvailabilityPendingIndicatorIfNeeded()) : s.createElement(s.Fragment, null, this.renderRedeemedText(), this.renderRedeemedIndicator(), this.renderAvailabilityPendingIndicatorIfNeeded()) : this.props.blizzardAccount ? s.createElement(s.Fragment, null, this.renderUnredeemedText(), this.renderGlobalCheerCTA(), this.renderUnredeemedIndicator(), this.renderAvailabilityPendingIndicatorIfNeeded()) : s.createElement(s.Fragment, null, this.renderUnlinkedText(), this.renderGlobalCheerCTA(), this.renderUnredeemedIndicator(), this.renderAvailabilityPendingIndicatorIfNeeded()) : this.isRewardGloballyUnlocked() ? s.createElement(s.Fragment, null, s.createElement(f.W, {
                        "data-test-selector": a.GloballyAvailableCheerMoreText
                    }, this.props.milestoneFormatter.formatCommunityUnlockedMessage(this.props.milestone.participationThreshold)), this.renderGlobalCheerCTA(), this.renderAvailabilityPendingIndicatorIfNeeded()) : this.isRewardParticipationMet() ? s.createElement(s.Fragment, null, s.createElement(f.W, {
                        "data-test-selector": a.GlobalKeepCheeringText
                    }, this.props.milestoneFormatter.formatKeepCheeringMessage()), this.renderGlobalCheerCTA(), this.renderAvailabilityPendingIndicatorIfNeeded()) : s.createElement(s.Fragment, null, s.createElement(f.W, {
                        "data-test-selector": a.GlobalLockedText
                    }, this.props.milestoneFormatter.formatParticipationThresholdMessage(this.props.milestone.participationThreshold)), this.renderGlobalCheerCTA(), this.renderAvailabilityPendingIndicatorIfNeeded()) : null
                }, t.prototype.renderIndividualObjectiveBodyContent = function() {
                    return this.isRewardUnavailable() ? this.renderUnavailableText() : this.isRewardIndividuallyUnlocked() ? this.props.reward.isEntitled ? this.props.reward.metadata && this.props.reward.metadata.isPending ? s.createElement(s.Fragment, null, this.renderAvailabilityPendingText(), this.renderRedeemedIndicator(), this.renderAvailabilityPendingIndicatorIfNeeded()) : s.createElement(s.Fragment, null, this.renderRedeemedText(), this.renderRedeemedIndicator()) : this.props.blizzardAccount ? s.createElement(s.Fragment, null, this.renderUnredeemedText(), this.renderUnredeemedIndicator(), this.renderAvailabilityPendingIndicatorIfNeeded()) : s.createElement(s.Fragment, null, this.renderUnlinkedText(), this.renderUnredeemedIndicator(), this.renderAvailabilityPendingIndicatorIfNeeded()) : s.createElement(s.Fragment, null, s.createElement(f.W, {
                        "data-test-selector": a.IndividualLockedText
                    }, Object(l.d)("Keep Cheering for your team to unlock this reward!", "MilestoneProgressBalloon"), this.renderAvailabilityPendingIndicatorIfNeeded()), this.renderCheerNowButton())
                }, t.prototype.renderGlobalCheerCTA = function() {
                    if (!this.props.milestone) return null;
                    var e = s.createElement(m.a, null);
                    return this.isRewardParticipationMet() && (e = s.createElement(d.a, null)), s.createElement(f.Wa, {
                        "data-test-selector": a.GlobalCheerCTA,
                        margin: {
                            top: 2
                        },
                        display: f.X.Flex,
                        alignItems: f.f.Center
                    }, s.createElement(f.Wa, {
                        margin: {
                            right: 1
                        },
                        display: f.X.Flex,
                        alignItems: f.f.Center
                    }, e), Object(l.d)("Cheer {amount, number} Bits", {
                        amount: this.props.milestone.participationThreshold
                    }, "MilestoneProgressBalloon"), s.createElement(f.Wa, {
                        margin: {
                            left: "auto"
                        }
                    }, !this.isRewardGloballyUnlocked() && this.renderCheerNowButton()))
                }, t.prototype.renderCheerbombTriggerBodyContent = function() {
                    return this.isCheerbombTriggerRewardClaimedOrClaimable() ? this.props.blizzardAccount ? this.props.triggerRewardRedeemed ? s.createElement(s.Fragment, null, this.renderRedeemedText(), this.renderRedeemedIndicator()) : s.createElement(s.Fragment, null, this.renderUnredeemedText(), this.renderUnredeemedIndicator()) : s.createElement(s.Fragment, null, this.renderUnlinkedText()) : this.renderCheerbombDescriptionText()
                }, t.prototype.renderCheerNowButton = function() {
                    return this.props.isLoggedIn ? s.createElement(f.Wa, {
                        "data-test-selector": a.CheerNowButton,
                        padding: {
                            y: 1
                        }
                    }, s.createElement(f.z, {
                        onClick: this.openBitsCard
                    }, Object(l.d)("Cheer Now", "MilestoneProgressBalloon"))) : null
                }, t.prototype.renderRedeemedIndicator = function() {
                    return s.createElement(f.Wa, {
                        "data-test-selector": a.RedeemedIndicator,
                        padding: {
                            y: .5
                        },
                        display: f.X.Flex,
                        alignItems: f.f.Center
                    }, s.createElement(f.Wa, {
                        margin: {
                            right: 1
                        },
                        display: f.X.Flex,
                        alignItems: f.f.Center
                    }, s.createElement(f.nb, {
                        type: f.pb.Success,
                        asset: f.ob.Check
                    })), s.createElement(f.W, {
                        className: "milestone-progress-balloon__redeemed-text",
                        bold: !0,
                        fontSize: f.Ba.Size5
                    }, Object(l.d)("Redeemed", "MilestoneProgressBalloon")))
                }, t.prototype.renderUnredeemedIndicator = function() {
                    return s.createElement(f.Wa, {
                        "data-test-selector": a.UnredeemedIndicator,
                        padding: {
                            y: .5
                        }
                    }, s.createElement(f.W, {
                        bold: !0,
                        color: f.O.Error,
                        fontSize: f.Ba.Size5
                    }, Object(l.d)("Unredeemed", "MilestoneProgressBalloon")))
                }, t.prototype.renderUnavailableText = function() {
                    return s.createElement(f.W, {
                        "data-test-selector": a.UnavailableText,
                        bold: !0,
                        color: f.O.Error
                    }, Object(l.d)("Sorry, these rewards are not available in your region.", "MilestoneProgressBalloon"))
                }, t.prototype.renderRedeemedText = function() {
                    var e = Object(l.d)("This reward is unlocked and available on Twitch.", "MilestoneProgressBalloon");
                    return "igc" === this.props.reward.type && (e = Object(l.d)("This reward is unlocked and available in-game.", "MilestoneProgressBalloon")), s.createElement(f.W, {
                        "data-test-selector": a.AvailableAndRedeemedText
                    }, e)
                }, t.prototype.renderUnredeemedText = function() {
                    return s.createElement(f.W, {
                        "data-test-selector": a.AvailableAndUnredeemedText
                    }, Object(l.d)("Reward unlocked. Click 'Redeem All' on the loot tab to redeem this reward.", "MilestoneProgressBalloon"))
                }, t.prototype.renderUnlinkedText = function() {
                    return s.createElement(f.W, {
                        "data-test-selector": a.AvailableAndUnlinkedText
                    }, Object(l.d)("Link your Blizzard account to Twitch to claim this reward.", "MilestoneProgressBalloon"))
                }, t.prototype.renderAvailabilityPendingText = function() {
                    return s.createElement(f.W, {
                        "data-test-selector": a.AvailabilityPendingText
                    }, Object(l.d)("This reward is unlocked and will be available in-game soon.", "MilestoneProgressBalloon"))
                }, t.prototype.renderAvailabilityPendingIndicatorIfNeeded = function() {
                    if (this.props.reward.metadata && this.props.reward.metadata.isPending) return s.createElement(f.W, {
                        bold: !0,
                        className: "milestone-progress-balloon__availability-pending-indicator",
                        "data-test-selector": a.AvailabilityPendingIndicator
                    }, Object(l.d)("In-Game Availability Pending", "MilestoneProgressBalloon"))
                }, t.prototype.renderCheerbombDescriptionText = function() {
                    return s.createElement(f.W, null, this.props.milestoneFormatter.formatCheerbombDescriptionMessage())
                }, t.prototype.renderLockedAndUnavailableText = function() {
                    return s.createElement(f.W, {
                        "data-test-selector": a.ObjectiveOverMessage
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
            var y = Object(r.connect)(function(e) {
                return {
                    isLoggedIn: Object(i.f)(e)
                }
            })(k);
            n.d(t, "a", function() {
                return y
            })
        },
        QHS7: function(e, t) {
            var n = {
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
            n.loc.source = {
                body: "mutation HgcClaimMilestone($input: ClaimMilestoneInput!) {\nclaimMilestone(input: $input) {\nmilestoneID\nrewards {\nid\nname\ndescription\ntype\nisEntitled\ncanBeFulfilled\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
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
        RhRD: function(e, t, n) {
            "use strict";
            var a;
            n.d(t, "a", function() {
                    return a
                }),
                function(e) {
                    e.Cheer = "CHEER"
                }(a || (a = {}))
        },
        SiBg: function(e, t, n) {
            "use strict";
            var a = n("mrSG"),
                r = n("/7QA"),
                i = n("8n0m"),
                o = n("b6Yk"),
                s = n("kRBY"),
                l = n("rj3Y"),
                c = n("uzvh");

            function d(e) {
                return function(t, n) {
                    return e({
                        store: {
                            dispatch: t,
                            getState: n
                        }
                    })
                }
            }
            n.d(t, "a", function() {
                return m
            }), n.d(t, "b", function() {
                return p
            }), n.d(t, "c", function() {
                return u
            }), n.d(t, "e", function() {
                return b
            }), n.d(t, "d", function() {
                return v
            }), n.d(t, "f", function() {
                return k
            });
            var m = "collections.COLLECTIONS_FETCHED",
                p = "collections.COLLECTIONS_FETCHED_FOR_VIDEO_ID",
                u = "collections.COLLECTIONS_FETCH_FAILED",
                h = "collections.COLLECTIONS_CREATE_FAILED",
                g = "collections.COLLECTIONS_UPDATE_FAILED";

            function b(e, t) {
                var n = this;
                return d(function(i) {
                    return a.__awaiter(n, void 0, void 0, function() {
                        var n, s, c;
                        return a.__generator(this, function(a) {
                            switch (a.label) {
                                case 0:
                                    return a.trys.push([0, 3, , 4]), [4, o.a.getOrThrow("/v5/channels/" + e + "/collections/?limit=100")];
                                case 1:
                                    return n = a.sent(), i.store.dispatch({
                                        type: m,
                                        collections: Object(l.d)(n.body)
                                    }), [4, o.a.getOrThrow("/v5/channels/" + e + "/collections/?limit=100&containing_item=" + l.b.Video + ":" + t)];
                                case 2:
                                    return s = a.sent(), i.store.dispatch({
                                        type: p,
                                        containingCollections: Object(l.d)(s.body),
                                        videoID: t
                                    }), [3, 4];
                                case 3:
                                    return c = a.sent(), r.k.error(c, "Failed to fetch collections"), i.store.dispatch({
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

            function v(e, t, n, o) {
                var c = this;
                return d(function(d) {
                    return a.__awaiter(c, void 0, void 0, function() {
                        var c, u, g, b, v, k, y, E;
                        return a.__generator(this, function(a) {
                            switch (a.label) {
                                case 0:
                                    c = d.store.getState(), u = c.collections, g = Object(s.e)(c), b = g ? g.id : "", a.label = 1;
                                case 1:
                                    return a.trys.push([1, 4, , 5]), [4, f("/v5/channels/" + e + "/collections/", {
                                        title: t
                                    })];
                                case 2:
                                    return v = a.sent(), k = Object(l.c)(v.body), u.collections = [k].concat(u.collections), d.store.dispatch({
                                        type: m,
                                        collections: u.collections
                                    }), Object(i.b)({
                                        channelID: e,
                                        playlistID: k.id,
                                        userID: b,
                                        title: k.title
                                    }), y = {
                                        type: l.b.Video,
                                        id: n
                                    }, [4, f("/v5/collections/" + k.id + "/items", y)];
                                case 3:
                                    return a.sent(), u.containingCollections = [k].concat(u.containingCollections), d.store.dispatch({
                                        type: p,
                                        containingCollections: u.containingCollections,
                                        videoID: n
                                    }), Object(i.a)({
                                        channelID: e,
                                        itemID: n,
                                        itemPosition: -1,
                                        itemType: l.b.Video,
                                        playlistID: k.id,
                                        userID: b,
                                        place: o
                                    }), [3, 5];
                                case 4:
                                    return E = a.sent(), r.k.error(E, "Failed to add new collection with video"), d.store.dispatch({
                                        type: h,
                                        errorType: "Create Failed",
                                        errorMessage: "Creating collections for channel " + e + " and video " + n + " with title " + t + "."
                                    }), [3, 5];
                                case 5:
                                    return [2]
                            }
                        })
                    })
                })
            }

            function k(e, t, n, m) {
                var u = this;
                return d(function(d) {
                    return a.__awaiter(u, void 0, void 0, function() {
                        var u, h, b, v, k, y, E, w, C;
                        return a.__generator(this, function(a) {
                            switch (a.label) {
                                case 0:
                                    u = d.store.getState(), h = Object(c.a)(u), b = Object(s.e)(u), v = b ? b.id : "", a.label = 1;
                                case 1:
                                    return a.trys.push([1, 6, , 7]), h.map(function(e) {
                                        return e.id
                                    }).includes(e.id) ? (k = JSON.stringify({
                                        type: l.b.Video,
                                        id: t
                                    }), y = btoa(k), [4, o.a.deleteOrThrow("/v5/collections/" + e.id + "/items/" + y)]) : [3, 3];
                                case 2:
                                    return a.sent(), w = h.filter(function(t) {
                                        return t.id !== e.id
                                    }), d.store.dispatch({
                                        type: p,
                                        containingCollections: w,
                                        videoID: t
                                    }), Object(i.c)({
                                        channelID: n,
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
                                    a.sent(), w = h.concat([e]), d.store.dispatch({
                                        type: p,
                                        containingCollections: w,
                                        videoID: t
                                    }), Object(i.a)({
                                        channelID: n,
                                        itemID: t,
                                        itemPosition: -1,
                                        itemType: l.b.Video,
                                        playlistID: e.id,
                                        userID: v,
                                        place: m
                                    }), a.label = 5;
                                case 5:
                                    return [3, 7];
                                case 6:
                                    return C = a.sent(), r.k.error(C, "Failed to fetch collections"), d.store.dispatch({
                                        type: g,
                                        errorType: "Update Failed",
                                        errorMessage: "Updating collection " + e.id + " for channel " + n + " and video " + t + " failed."
                                    }), [3, 7];
                                case 7:
                                    return [2]
                            }
                        })
                    })
                })
            }
        },
        "T1g+": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return a
            });
            var a = function() {
                var e = document.querySelector('[data-a-target="bits-button"]');
                e && e.click()
            }
        },
        Vl1W: function(e, t, n) {},
        WaLP: function(e, t, n) {
            "use strict";
            var a = n("/MKj"),
                r = n("kRBY"),
                i = n("mrSG"),
                o = n("q1tI"),
                s = n("oJmH"),
                l = n("/7QA"),
                c = n("yR8l"),
                d = n("eDVu"),
                m = n("+LJB"),
                p = n("i4ay"),
                u = n("Ue10"),
                h = n("ktVs"),
                g = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        return !this.props.data || this.props.data.loading && !this.props.data.user ? o.createElement(u.Ya, {
                            fillContent: !0
                        }) : this.props.data && this.props.data.error ? o.createElement(u.Wa, {
                            fullHeight: !0,
                            fullWidth: !0,
                            textAlign: u.Jb.Center,
                            padding: {
                                top: 4
                            }
                        }, o.createElement(u.nb, {
                            asset: u.ob.DeadGlitch,
                            fill: !0,
                            width: 50,
                            height: 50
                        })) : o.createElement(u.xb, {
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
                        }, o.createElement(u.Wa, {
                            padding: {
                                bottom: 2
                            }
                        }, o.createElement(u.W, {
                            type: u.Nb.H3
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
            var f = Object(a.connect)(function(e) {
                return {
                    user: Object(r.e)(e)
                }
            })(b);
            n.d(t, "a", function() {
                return f
            })
        },
        Yg6M: function(e, t, n) {},
        aUl8: function(e, t, n) {},
        "bt+X": function(e, t, n) {},
        cUCe: function(e, t, n) {
            "use strict";
            var a = n("q1tI"),
                r = (n("Yg6M"), function() {
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
                return r
            })
        },
        fHRJ: function(e, t, n) {
            "use strict";
            var a, r = n("mrSG"),
                i = n("TSYQ"),
                o = n("q1tI"),
                s = n("Ue10");
            n("2iq9");
            ! function(e) {
                e.RewardShowcase = "reward-showcase"
            }(a || (a = {}));
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
                    return r.__extends(t, e), t.prototype.render = function() {
                        var e = this.props.rarity;
                        void 0 === e && (e = 0);
                        var t = i(this.props.className, "reward-showcase", l[e]),
                            n = i(this.props.imageClassName, "reward-showcase__image");
                        return o.createElement(s.Wa, {
                            "data-test-selector": a.RewardShowcase,
                            display: s.X.Flex,
                            alignItems: s.f.Center,
                            justifyContent: s.Va.Center,
                            className: t
                        }, o.createElement(s.S, {
                            className: n,
                            src: this.props.imageURL || "",
                            alt: this.props.imageAlt || ""
                        }))
                    }, t
                }(o.Component);
            n.d(t, !1, function() {
                return a
            }), n.d(t, "a", function() {
                return c
            })
        },
        fR2g: function(e, t, n) {
            "use strict";
            var a = n("mrSG"),
                r = n("q1tI"),
                i = n("/7QA"),
                o = n("Ue10"),
                s = (n("ywDU"), function() {
                    return r.createElement(o.Wa, {
                        className: "esports-campaign-new-feature",
                        position: o.eb.Relative
                    }, r.createElement(o.Wa, {
                        position: o.eb.Absolute,
                        attachRight: !0,
                        attachTop: !0
                    }, r.createElement(o.bb, {
                        label: Object(i.d)("New", "CampaignsTabs"),
                        type: o.cb.Alert
                    })))
                }),
                l = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        var e = new Date(Date.now()),
                            t = !1;
                        return this.props.newDisplayInfo && this.props.newDisplayInfo.startDate ? t = this.props.newDisplayInfo && this.props.newDisplayInfo.endDate ? this.props.newDisplayInfo.startDate <= e && this.props.newDisplayInfo.endDate >= e : this.props.newDisplayInfo.startDate <= e : this.props.newDisplayInfo && this.props.newDisplayInfo.endDate && (t = this.props.newDisplayInfo.endDate >= e), this.props.newDisplayInfo && void 0 !== this.props.newDisplayInfo.shouldShow && (t = this.props.newDisplayInfo.shouldShow), r.createElement(o.yb, {
                            active: this.props.isSelected,
                            onClick: this.props.onClick,
                            "data-tab-target": this.props.id
                        }, r.createElement(o.Wa, {
                            display: o.X.Flex
                        }, r.createElement(o.W, {
                            breakpointExtraSmall: {
                                fontSize: o.Ba.Size5
                            },
                            breakpointSmall: {
                                fontSize: o.Ba.Size3
                            },
                            breakpointExtraLarge: {
                                fontSize: o.Ba.Size4
                            },
                            breakpointExtraExtraLarge: {
                                fontSize: o.Ba.Size3
                            },
                            type: o.Nb.H3
                        }, this.props.title), t && r.createElement(s, null)))
                    }, t
                }(r.PureComponent);
            n.d(t, "a", function() {
                return l
            })
        },
        gsJi: function(e, t, n) {},
        gzKk: function(e, t, n) {
            "use strict";
            var a = n("mrSG"),
                r = n("q1tI"),
                i = n("/7QA"),
                o = n("T1g+"),
                s = n("Ue10"),
                l = (n("DR+f"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            activeMilestoneID: void 0
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        var e = "campaign-reward-group";
                        return r.createElement(s.xb, {
                            className: e,
                            overflow: s.Za.Hidden,
                            border: !0,
                            borderRadius: s.x.Large,
                            background: s.r.Base
                        }, r.createElement(s.xb, {
                            className: e + "__header",
                            display: s.X.Flex,
                            flexWrap: s.Aa.Wrap,
                            alignItems: s.f.Stretch,
                            borderBottom: !!this.props.children,
                            breakpointLarge: {
                                flexWrap: s.Aa.NoWrap
                            }
                        }, r.createElement(s.xb, {
                            className: e + "__header-main",
                            display: s.X.Flex,
                            flexWrap: s.Aa.Wrap,
                            alignItems: s.f.Stretch,
                            breakpointLarge: {
                                flexWrap: s.Aa.NoWrap
                            },
                            borderRight: !!this.props.headerExtraContent,
                            fullWidth: !0
                        }, r.createElement(s.Wa, {
                            display: s.X.Flex,
                            alignItems: s.f.Stretch
                        }, r.createElement(s.xb, {
                            padding: {
                                x: 2,
                                y: 3
                            },
                            background: s.r.Accent,
                            display: s.X.Flex,
                            alignItems: s.f.Center,
                            justifyContent: s.Va.Start
                        }, r.createElement(s.W, {
                            color: s.O.Overlay,
                            transform: s.Mb.Uppercase,
                            "data-test-selector": "esports-reward-group-title",
                            fontSize: s.Ba.Size5,
                            type: s.Nb.Strong
                        }, this.props.title)), r.createElement(s.Wa, {
                            className: e + "__header-rewards",
                            display: s.X.Flex,
                            alignItems: s.f.Stretch
                        }, !!this.props.rewardsEntitled && !!this.props.totalRewards && this.props.totalRewards > 0 && r.createElement(s.xb, {
                            "data-test-selector": "esports-reward-group-entitled-rewards-numbers",
                            display: s.X.Flex,
                            padding: {
                                left: 2
                            },
                            className: e + "__header-rewards-entitled",
                            alignItems: s.f.Center,
                            background: s.r.Accent
                        }, r.createElement(s.W, {
                            type: s.Nb.Strong,
                            fontSize: s.Ba.Size2
                        }, Object(i.f)(this.props.rewardsEntitled))), r.createElement(s.Wa, {
                            className: e + "__header-rewards-sep",
                            overflow: s.Za.Hidden
                        }), !!this.props.rewardsEntitled && !!this.props.totalRewards && this.props.totalRewards > 0 && r.createElement(s.Wa, {
                            "data-test-selector": "esports-reward-group-entitled-rewards-numbers",
                            display: s.X.Flex,
                            padding: {
                                right: 2
                            },
                            className: e + "__header-rewards-total",
                            alignItems: s.f.Center
                        }, r.createElement(s.W, {
                            type: s.Nb.Strong,
                            fontSize: s.Ba.Size2
                        }, Object(i.f)(this.props.totalRewards))))), this.props.showCheer && r.createElement(s.Wa, {
                            margin: {
                                left: "auto",
                                right: 2
                            },
                            alignSelf: s.g.Center,
                            className: e + "__claim-button"
                        }, r.createElement(s.z, {
                            type: s.F.Hollow,
                            onClick: o.a
                        }, Object(i.d)("Cheer Now", "HGCRewardGroup"))), r.createElement(s.Oa, {
                            margin: {
                                right: "auto"
                            },
                            padding: 2,
                            flexGrow: 1,
                            alignSelf: s.g.Center
                        }, r.createElement(s.W, {
                            "data-test-selector": "esports-reward-group-description",
                            className: e + "__header-description"
                        }, this.props.description))), this.props.headerExtraContent), this.props.children && r.createElement(s.Wa, {
                            "data-test-selector": "esports-reward-group-display-children",
                            position: s.eb.Relative
                        }, this.props.children))
                    }, t
                }(r.Component));
            n.d(t, !1, function() {
                return "esports-reward-group-title"
            }), n.d(t, !1, function() {
                return "esports-reward-group-description"
            }), n.d(t, !1, function() {
                return "esports-reward-group-display-children"
            }), n.d(t, !1, function() {
                return "esports-reward-group-entitled-rewards-numbers"
            }), n.d(t, "a", function() {
                return l
            })
        },
        hR8f: function(e, t, n) {},
        hRrL: function(e, t, n) {
            "use strict";
            var a = n("/MKj"),
                r = n("kRBY"),
                i = n("mrSG"),
                o = n("q1tI"),
                s = n("oJmH"),
                l = n("/7QA"),
                c = n("yR8l"),
                d = n("Ue10"),
                m = n("7QWs"),
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
                        return o.createElement(d.Wa, {
                            className: "esports-claim-all-rewards-button",
                            display: d.X.InlineFlex,
                            margin: {
                                right: 1
                            },
                            verticalAlign: d.Xb.Bottom
                        }, o.createElement(d.z, {
                            "data-test-selector": "esports-claim-all-button",
                            onClick: this.claimAllRewards,
                            disabled: !this.props.enabled
                        }, this.state.error && o.createElement(d.nb, {
                            "data-test-selector": "esports-claim-all-button-error",
                            asset: d.ob.DeadGlitch
                        }), !this.state.error && e))
                    }, t
                }(o.Component),
                u = Object(s.compose)(Object(c.a)(m, {
                    name: "claimAllRewards"
                }))(p);
            var h = Object(a.connect)(function(e) {
                return {
                    user: Object(r.e)(e)
                }
            })(u);
            n.d(t, "a", function() {
                return h
            })
        },
        i4ay: function(e, t, n) {
            "use strict";
            var a, r = n("mrSG"),
                i = n("q1tI"),
                o = n("/7QA"),
                s = n("yR8l"),
                l = n("f00E"),
                c = n("4Wd7"),
                d = n("4h+t"),
                m = n("Ue10"),
                p = (n("aUl8"), function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return r.__extends(t, e), t.prototype.shouldComponentUpdate = function(e) {
                        return this.props.displayName !== e.displayName || this.props.rank !== e.rank || this.props.score !== e.score || this.props.secondaryName !== e.secondaryName || this.props.imageURL !== e.imageURL
                    }, t.prototype.render = function() {
                        return i.createElement(m.Pa, {
                            display: m.X.Flex,
                            alignItems: m.f.Center,
                            borderBottom: !0,
                            padding: {
                                y: 1
                            }
                        }, i.createElement("li", {
                            className: "campaign-leaderboard-row"
                        }, i.createElement(m.Oa, {
                            margin: {
                                right: 1
                            }
                        }, i.createElement(m.W, {
                            "data-test-selector": "esports-leaderboard-row-rank",
                            color: m.O.Link,
                            bold: !0
                        }, Object(o.f)(this.props.rank))), this.props.imageURL && i.createElement(m.Wa, {
                            "data-test-selector": "esports-leaderboard-row-image-url",
                            margin: {
                                right: 1
                            }
                        }, i.createElement(m.q, {
                            src: this.props.imageURL,
                            size: 30,
                            alt: this.props.displayName + " Avatar"
                        })), i.createElement(m.Wa, {
                            margin: {
                                right: 1
                            }
                        }, this.props.secondaryName && i.createElement(m.W, {
                            "data-test-selector": "esports-leaderboard-row-secondary-name",
                            color: m.O.Link,
                            transform: m.Mb.Uppercase,
                            lineHeight: m.Xa.Heading
                        }, this.props.secondaryName), i.createElement(m.W, {
                            "data-test-selector": "esports-leaderboard-row-display-name",
                            type: m.Nb.H5,
                            bold: !0,
                            lineHeight: m.Xa.Heading
                        }, this.props.displayName)), i.createElement(m.Wa, {
                            display: m.X.Flex,
                            margin: {
                                left: "auto"
                            }
                        }, i.createElement(m.Wa, {
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
                        })), i.createElement(m.Oa, {
                            className: "campaign-leaderboard-row__amount"
                        }, i.createElement(m.W, {
                            "data-test-selector": "esports-leaderboard-row-score",
                            lineHeight: m.Xa.Body,
                            type: m.Nb.H4
                        }, Object(o.f)(this.props.score))))))
                    }, t
                }(i.Component)),
                u = (n("o5UI"), function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        return i.createElement(m.Pa, {
                            display: m.X.Flex,
                            alignItems: m.f.Center,
                            borderBottom: !0,
                            padding: {
                                y: 1,
                                left: 2
                            }
                        }, i.createElement("li", {
                            className: "campaign-leaderboard-self-row"
                        }, this.props.imageURL && i.createElement(m.Wa, {
                            "data-test-selector": "esports-leaderboard-row-image-url",
                            margin: {
                                right: 1
                            }
                        }, i.createElement(m.q, {
                            src: this.props.imageURL,
                            size: 30,
                            alt: this.props.displayName + " Avatar"
                        })), i.createElement(m.Wa, {
                            margin: {
                                right: 1
                            }
                        }, i.createElement(m.W, {
                            "data-test-selector": "esports-leaderboard-row-rank",
                            color: m.O.Link,
                            transform: m.Mb.Uppercase,
                            lineHeight: m.Xa.Heading
                        }, Object(o.d)("Rank: {rank}", {
                            rank: Object(o.f)(this.props.rank)
                        }, "CampaignsLeaderboardSelfRow")), i.createElement(m.W, {
                            "data-test-selector": "esports-leaderboard-row-display-name",
                            type: m.Nb.H5,
                            bold: !0,
                            lineHeight: m.Xa.Heading
                        }, this.props.displayName)), i.createElement(m.Wa, {
                            display: m.X.Flex,
                            margin: {
                                left: "auto"
                            }
                        }, i.createElement(m.Wa, {
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
                        })), i.createElement(m.Oa, {
                            className: "campaign-leaderboard-self-row__amount",
                            margin: {
                                right: 2
                            }
                        }, i.createElement(m.W, {
                            "data-test-selector": "esports-leaderboard-row-score",
                            lineHeight: m.Xa.Body,
                            type: m.Nb.H4
                        }, Object(o.f)(this.props.score))))))
                    }, t
                }(i.PureComponent)),
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
                return r.__extends(t, e), t.prototype.render = function() {
                    var e = this;
                    if (Object(o.d)("Rank: {rank}", {
                            rank: 1
                        }, "CampaignsLeaderboard"), !this.props.data || !this.props.data.users || this.props.data.loading) return i.createElement(m.Ya, {
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
                    var r = Math.ceil(n.length / this.props.pageSize),
                        s = this.props.pageSize * (this.state.showPage - 1),
                        c = s + this.props.pageSize,
                        d = n.slice(s, c).map(function(n) {
                            var a = {
                                rank: n.node.rank,
                                displayName: "Somebody",
                                score: n.node.score
                            };
                            if (e.props.isTeam && t) {
                                var r = t.teams.find(function(e) {
                                    return e.id.toUpperCase() === n.node.entryKey.toUpperCase()
                                });
                                r && (a.displayName = r.name, a.secondaryName = r.division, a.imageURL = r.logoURL)
                            } else if (!e.props.isTeam) {
                                var i = e.props.data.users.find(function(e) {
                                    return e.id === n.node.entryKey
                                });
                                i && i.displayName && (a.displayName = i.displayName, a.imageURL = i.profileImageURL)
                            }
                            return a
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
                        for (var b = 0; b < g; b++) d.push(i.createElement(m.Wa, {
                            key: "leaderboard-blank-row-" + b,
                            className: "campaign-leaderboard__blank-row"
                        }));
                    var f = [];
                    for (b = 1; b <= r; b++) {
                        var v = b === this.state.showPage ? m.r.Accent : m.r.Alt;
                        f.push(i.createElement(m.Pa, {
                            className: "campaign-leaderboard__buttons",
                            padding: 1,
                            key: "leaderboard-page-pip-" + Object(l.a)()
                        }, i.createElement("button", {
                            onClick: this.pagePipClick,
                            "data-page-number": b
                        }, i.createElement(m.xb, {
                            border: !0,
                            padding: .5,
                            display: m.X.Block,
                            background: v,
                            borderRadius: m.x.Rounded
                        }))))
                    }
                    var k = null;
                    if (this.props.isTeam) {
                        var y = null;
                        this.props.domain === h.c ? y = i.createElement(i.Fragment, null, i.createElement(m.yb, {
                            active: this.state.activeTab === a.NA,
                            onClick: this.tabClick,
                            "data-tab-id": a.NA
                        }, i.createElement(m.W, {
                            type: m.Nb.H4
                        }, Object(o.d)("NA", "CampaignsProgressTab"))), i.createElement(m.yb, {
                            active: this.state.activeTab === a.EU,
                            onClick: this.tabClick,
                            "data-tab-id": a.EU
                        }, i.createElement(m.W, {
                            type: m.Nb.H4
                        }, Object(o.d)("EU", "CampaignsProgressTab"))), i.createElement(m.yb, {
                            active: this.state.activeTab === a.KR,
                            onClick: this.tabClick,
                            "data-tab-id": a.KR
                        }, i.createElement(m.W, {
                            type: m.Nb.H4
                        }, Object(o.d)("KR", "CampaignsProgressTab"))), i.createElement(m.yb, {
                            active: this.state.activeTab === a.CN,
                            onClick: this.tabClick,
                            "data-tab-id": a.CN
                        }, i.createElement(m.W, {
                            type: m.Nb.H4
                        }, Object(o.d)("CN", "CampaignsProgressTab")))) : this.props.domain === h.f && (y = i.createElement(i.Fragment, null, i.createElement(m.yb, {
                            active: this.state.activeTab === a.Atlantic,
                            onClick: this.tabClick,
                            "data-tab-id": a.Atlantic
                        }, i.createElement(m.W, {
                            type: m.Nb.H4
                        }, Object(o.d)("Atlantic", "CampaignsProgressTab"))), i.createElement(m.yb, {
                            active: this.state.activeTab === a.Pacific,
                            onClick: this.tabClick,
                            "data-tab-id": a.Pacific
                        }, i.createElement(m.W, {
                            type: m.Nb.H4
                        }, Object(o.d)("Pacific", "CampaignsProgressTab"))))), k = i.createElement(m.Wa, {
                            padding: {
                                bottom: 2
                            }
                        }, i.createElement(m.zb, null, i.createElement(m.yb, {
                            active: this.state.activeTab === a.AllTeams,
                            onClick: this.tabClick,
                            "data-tab-id": a.AllTeams
                        }, i.createElement(m.W, {
                            type: m.Nb.H4
                        }, Object(o.d)("All Teams", "CampaignsProgressTab"))), y))
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
                        C && C.displayName && (w.displayName = C.displayName, w.imageURL = C.profileImageURL), E = i.createElement(u, {
                            rank: w.rank,
                            score: w.score,
                            displayName: w.displayName,
                            imageURL: w.imageURL
                        })
                    }
                    return i.createElement(m.Wa, {
                        className: "campaign-leaderboard",
                        display: m.X.Flex,
                        flexDirection: m.Z.Column,
                        justifyContent: m.Va.Between,
                        flexGrow: 1
                    }, k, i.createElement(m.Wa, {
                        className: "campaign-leaderboard__rows"
                    }, i.createElement("ul", null, d, this.props.userRow && E)), i.createElement(m.Wa, {
                        display: m.X.Flex,
                        justifyContent: m.Va.Center,
                        margin: {
                            top: 2
                        }
                    }, f.length > 1 && f))
                }, t = r.__decorate([Object(s.a)(g, {
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
            n.d(t, "a", function() {
                return b
            })
        },
        klJU: function(e, t, n) {
            "use strict";
            var a = n("q1tI"),
                r = (n("7gDD"), function() {
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
                return r
            })
        },
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
            var r = {};
            a.definitions = a.definitions.concat(function(e) {
                return e.filter(function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var t = e.name.value;
                    return !r[t] && (r[t] = !0, !0)
                })
            }(n("fhkr").definitions)), e.exports = a
        },
        o5UI: function(e, t, n) {},
        qOeB: function(e, t, n) {},
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
        rj3Y: function(e, t, n) {
            "use strict";
            var a, r, i = function(e, t, n) {
                var a = e.collectionItems || [];
                return Boolean(a.find(function(e) {
                    return e.ObjectType === n && e.id === t
                }))
            };
            ! function(e) {
                e.Public = "public"
            }(a || (a = {})),
            function(e) {
                e.Staff = "staff"
            }(r || (r = {}));
            var o, s, l = function(e) {
                return {
                    __typename: "Collection",
                    id: e._id,
                    title: e.title,
                    state: a.Public,
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
            }(s || (s = {})), n.d(t, !1, function() {
                return i
            }), n.d(t, !1, function() {
                return a
            }), n.d(t, !1, function() {
                return r
            }), n.d(t, "c", function() {
                return l
            }), n.d(t, "d", function() {
                return c
            }), n.d(t, "b", function() {
                return o
            }), n.d(t, "a", function() {
                return s
            })
        },
        rkjw: function(e, t, n) {
            "use strict";
            var a, r, i = n("mrSG"),
                o = n("TSYQ"),
                s = n("q1tI"),
                l = n("/7QA"),
                c = n("zF2X"),
                d = n("fHRJ"),
                m = n("Ue10");
            n("AvCV");
            ! function(e) {
                e.Available = "available", e.Locked = "locked", e.HalfLocked = "progressLocked", e.Unavailable = "unavailable"
            }(a || (a = {})),
            function(e) {
                e.overlay = "milestone-square-overlay", e.info = "milestone-square-info", e.statusAvailable = "milestone-square-status-available", e.statusLocked = "milestone-square-status-locked", e.statusHalfLocked = "milestone-square-status-half-locked", e.statusUnavailable = "milestone-square-status-unavailable"
            }(r || (r = {}));
            var p = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.renderInfo = function() {
                            return t.props.title ? s.createElement(m.xb, {
                                "data-test-selector": r.info,
                                className: "milestone-square__info",
                                position: m.eb.Relative,
                                textAlign: m.Jb.Center
                            }, s.createElement(m.Wa, {
                                padding: .5
                            }, s.createElement(m.W, {
                                type: m.Nb.H5,
                                bold: !0
                            }, t.props.title)), t.props.subtitle && s.createElement(m.Wa, null, s.createElement(m.W, {
                                color: m.O.Alt
                            }, t.props.subtitle)), t.props.threshold && s.createElement(m.Wa, {
                                display: m.X.Flex,
                                alignItems: m.f.Center,
                                justifyContent: m.Va.Center
                            }, s.createElement(m.nb, {
                                type: m.pb.Brand,
                                asset: m.ob.Bits,
                                width: 12,
                                height: 12
                            }), s.createElement(m.Oa, {
                                margin: {
                                    left: .5
                                }
                            }, s.createElement(m.W, null, Object(l.f)(t.props.threshold))))) : null
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        var e = this.props.status !== a.Available,
                            t = o("milestone-square__wrapper", {
                                "milestone-square__wrapper--small": !this.props.title
                            }),
                            n = o("milestone-square__overlay", {
                                "milestone-square__overlay--accent": this.props.status === a.HalfLocked
                            }),
                            i = m.ob.Lock;
                        this.props.status === a.Unavailable && (i = m.ob.Halt);
                        var l = r.statusAvailable;
                        return this.props.status === a.Locked && (l = r.statusLocked), this.props.status === a.HalfLocked && (l = r.statusHalfLocked), this.props.status === a.Unavailable && (l = r.statusUnavailable), s.createElement(m.Oa, {
                            className: "milestone-square",
                            position: m.eb.Relative
                        }, s.createElement(c.a, {
                            balloon: this.props.milestoneBalloon
                        }, s.createElement(m.xb, {
                            "data-test-selector": l,
                            className: t,
                            background: m.r.Base,
                            position: m.eb.Relative,
                            textAlign: m.Jb.Center,
                            border: !0,
                            borderRadius: m.x.Large,
                            display: m.X.Flex,
                            alignItems: m.f.Center,
                            justifyContent: m.Va.Center
                        }, s.createElement(d.a, {
                            className: "milestone-square__img-wrapper",
                            imageClassName: "milestone-square__img",
                            imageURL: this.props.imageURL,
                            imageAlt: this.props.title,
                            rarity: this.props.rarity
                        }), e && s.createElement(m.xb, {
                            "data-test-selector": r.overlay,
                            className: n,
                            display: m.X.Flex,
                            justifyContent: m.Va.Center,
                            alignItems: m.f.Center,
                            position: m.eb.Absolute,
                            fullHeight: !0,
                            fullWidth: !0,
                            attachTop: !0,
                            attachLeft: !0
                        }, s.createElement(m.Wa, {
                            className: "milestone-square__overlay-icon"
                        }, s.createElement(m.nb, {
                            fill: !0,
                            asset: i
                        })))), this.renderInfo()))
                    }, t
                }(s.Component),
                u = p;
            n.d(t, "b", function() {
                return a
            }), n.d(t, !1, function() {
                return r
            }), n.d(t, !1, function() {
                return p
            }), n.d(t, "a", function() {
                return u
            })
        },
        sAoK: function(e, t, n) {
            "use strict";
            var a = n("q1tI"),
                r = (n("v/+I"), function() {
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
                return r
            })
        },
        t95G: function(e, t, n) {
            "use strict";
            var a = n("mrSG"),
                r = n("TSYQ"),
                i = n("q1tI"),
                o = n("OTph"),
                s = n("rkjw"),
                l = n("vt2+"),
                c = n("Ue10"),
                d = (n("gsJi"), function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        var e = this,
                            t = r("large-milestone-pills", this.props.className),
                            n = Object(l.b)(this.props.milestones);
                        return i.createElement(c.Wa, {
                            className: t
                        }, this.props.title && i.createElement(c.Wa, {
                            margin: {
                                bottom: 1
                            }
                        }, i.createElement(c.W, {
                            bold: !0,
                            fontSize: c.Ba.Size5,
                            color: c.O.Link
                        }, this.props.title)), this.props.isLocked ? this.renderLocked() : i.createElement(c.Wa, {
                            display: c.X.Flex,
                            justifyContent: c.Va.Start
                        }, n.map(function(t) {
                            return e.renderMilestoneSquare(t)
                        })))
                    }, t.prototype.renderMilestoneSquare = function(e) {
                        var t = e.rewards[0],
                            n = this.props.globalProgress >= e.threshold,
                            a = this.props.userProgress >= e.participationThreshold,
                            r = !Object(l.a)(e, new Date(Date.now())),
                            o = s.b.Locked;
                        return r ? o = s.b.Unavailable : n && a ? o = s.b.Available : (n || a) && (o = s.b.HalfLocked), i.createElement(s.a, {
                            key: r ? "" : e.id,
                            status: o,
                            imageURL: r ? this.props.milestoneFormatter.getUnannouncedMilestoneImage() : t.imageURL,
                            title: r ? this.props.milestoneFormatter.formatMilestoneNotAvailableMessage() : t.name,
                            subtitle: r ? "" : t.description,
                            rarity: r ? void 0 : t.rarity,
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
                        }, i.createElement(c.xb, {
                            display: c.X.Flex,
                            justifyContent: c.Va.Center,
                            alignItems: c.f.Center,
                            background: c.r.Alt2,
                            fullHeight: !0,
                            fullWidth: !0,
                            border: !0,
                            borderRadius: c.x.Large
                        }, i.createElement(c.Wa, {
                            className: "large-milestone-pills__lock-icon",
                            display: c.X.Flex,
                            justifyContent: c.Va.Center,
                            alignItems: c.f.Center
                        }, i.createElement(c.nb, {
                            asset: c.ob.Lock,
                            type: c.pb.Inherit,
                            fill: !0
                        }))))
                    }, t
                }(i.Component));
            n.d(t, "a", function() {
                return d
            })
        },
        uzvh: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return o
            });
            var a = n("mrSG"),
                r = n("/7QA"),
                i = n("SiBg");

            function o(e) {
                return e.collections.containingCollections
            }
            r.p.store.registerReducer("collections", function(e, t) {
                var n;
                switch (void 0 === e && (e = {
                    collections: [],
                    videoID: "",
                    containingCollections: [],
                    errors: {}
                }), t.type) {
                    case i.a:
                        return a.__assign({}, e, {
                            collections: t.collections
                        });
                    case i.b:
                        return a.__assign({}, e, {
                            videoID: t.videoID,
                            containingCollections: t.containingCollections
                        });
                    case i.c:
                        return a.__assign({}, e, {
                            errors: a.__assign({}, e.errors, (n = {}, n[t.errorType] = t.errorMessage, n))
                        });
                    default:
                        return e
                }
            })
        },
        "v/+I": function(e, t, n) {},
        "vt2+": function(e, t, n) {
            "use strict";
            n.d(t, "b", function() {
                return i
            }), n.d(t, "a", function() {
                return o
            });
            var a = n("NAv5"),
                r = n("HGFl"),
                i = function(e) {
                    return e.slice().sort(function(e, t) {
                        return e.threshold - t.threshold
                    })
                },
                o = function(e, t) {
                    if (!e || !e.startDate) return !1;
                    var n = Object(r.c)(e.startDate);
                    return Object(a.isEqual)(t, n) || Object(a.isAfter)(t, n)
                }
        },
        ywDU: function(e, t, n) {},
        zF2X: function(e, t, n) {
            "use strict";
            var a = n("mrSG"),
                r = n("TSYQ"),
                i = n("q1tI"),
                o = n("Ar2k"),
                s = n("Ue10"),
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
                    return a.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.addEventListeners()
                    }, t.prototype.componentWillUnmount = function() {
                        this.removeEventListeners()
                    }, t.prototype.render = function() {
                        var e = r("balloon-container", this.props.className);
                        return i.createElement(s.Wa, {
                            className: e,
                            refDelegate: this.setBalloonContainerRef
                        }, this.props.children)
                    }, t = a.__decorate([Object(o.c)()], t)
                }(i.Component),
                d = c;
            n.d(t, !1, function() {
                return c
            }), n.d(t, "a", function() {
                return d
            })
        },
        zHWM: function(e, t, n) {
            "use strict";
            n("uzvh")
        }
    }
]);