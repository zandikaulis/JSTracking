webpackJsonp([69], {
    1927: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "DashboardAchievements_Channel"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "channelName"
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
                    },
                    defaultValue: null
                }],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        alias: {
                            kind: "Name",
                            value: "channel"
                        },
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
                                    value: "channelName"
                                }
                            }
                        }],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "id"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "login"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "roles"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "isPartner"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
                                    }, {
                                        kind: "Field",
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "isAffiliate"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
                                    }]
                                }
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 175
            }
        };
        n.loc.source = {
            body: "query DashboardAchievements_Channel($channelName: String!) {\n  channel: user(login: $channelName) {\n    id\n    login\n    roles {\n      isPartner\n      isAffiliate\n    }\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    1928: function(e, t) {},
    1929: function(e, t) {},
    1930: function(e, t) {},
    2032: function(e, t, n) {
        "use strict";

        function a(e) {
            var t = {
                spotlight_type: e.type,
                achievement_key: e.achievementKey ? e.achievementKey : null,
                quest_key: e.questKey ? e.questKey : null
            };
            p.m.track(v.SpadeEventType.AchievementSpotlightImpression, t)
        }

        function l(e) {
            var t = {
                quest_id: e
            };
            p.m.track(v.SpadeEventType.AchievementQuestBannerClick, t)
        }

        function i(e) {
            for (var t = [], n = 0; n < e; n++) t.push(h.createElement(de, {
                key: n
            }));
            return t
        }

        function r(e, t) {
            return Math.round(Math.random() * (t - e) + e)
        }

        function c() {
            var e = ["rgba(247, 42, 107, 1)", "rgba(255, 113, 105, 1)", "rgba(253, 226, 132, 1)", "rgba(181, 138, 242, 1)"];
            return e[r(0, e.length - 1)]
        }

        function o() {
            var e = ["0.011s", "0.176s", "0.321s", "0.446s", "0.849s", "1.056s", "1.229s", "1.333s", "1.379s", "1.828s"];
            return e[r(0, e.length - 1)]
        }

        function s() {
            var e = ["confetti--slow", "confetti--medium", "confetti--fast"];
            return e[r(0, e.length - 1)]
        }

        function m() {
            return {
                left: r(2, 95) + "%",
                width: r(4, 10) + "px",
                height: r(4, 10) + "px",
                backgroundColor: "" + c(),
                animationDelay: "" + o()
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var u = n(0),
            h = n(1),
            d = n(31),
            p = n(2),
            f = n(922),
            g = n(918),
            v = n(14),
            b = n(6),
            E = (n(1544), n(1545)),
            _ = n(1473),
            y = n(1927),
            A = n(22),
            k = n(1352),
            S = n(1547),
            x = n(4),
            N = n(12),
            C = n(1546),
            w = n(1474),
            O = n(1050),
            P = n(3),
            T = {
                imageSrc: "https://static-cdn.jtvnw.net/emoticons/v1/81274/2.0",
                imageAlt: "VoHiYo"
            },
            q = function(e) {
                var t = x({
                    "ach-card": !0,
                    "ach-card--expanded": !0,
                    "ach-card--completed": Boolean(e.achievement.completedAt),
                    "ach-card--recent": e.achievement.wasRecentlyCompleted()
                });
                return h.createElement(P._17, {
                    className: t,
                    position: P._2.Relative
                }, h.createElement(P._17, {
                    className: "ach-card__inner",
                    elevation: 4,
                    refDelegate: e.refDelegate
                }, h.createElement(C.a, {
                    achievement: e.achievement
                }, h.createElement(j, {
                    achievement: e.achievement
                })), h.createElement(P.U, {
                    position: P._2.Absolute,
                    attachTop: !0,
                    attachRight: !0,
                    margin: {
                        top: 1,
                        right: 1
                    }
                }, h.createElement(N.a, {
                    to: O.b.channelAchievements(e.achievement.channelName)
                }, h.createElement(P.v, {
                    ariaLabel: "Close",
                    icon: P._9.Close
                }))), h.createElement(P.U, {
                    display: P.H.Flex,
                    flexGrow: 1,
                    position: P._2.Relative,
                    padding: {
                        top: 1
                    }
                }, h.createElement(P._17, {
                    display: P.H.Flex,
                    flexWrap: P.K.NoWrap,
                    alignItems: P.c.Center,
                    flexGrow: 1,
                    padding: 1,
                    background: P.m.Alt2,
                    border: !0
                }, h.createElement(P.l, u.__assign({}, T, {
                    size: 30
                })), h.createElement(P._17, {
                    color: P.F.Alt,
                    margin: {
                        left: .5
                    },
                    padding: {
                        left: 1
                    }
                }, h.createElement("p", null, e.achievement.longDescription))))))
            },
            j = function(e) {
                return 0 === e.achievement.progress ? h.createElement("span", null) : e.achievement.completedAt ? h.createElement(w.a, {
                    date: e.achievement.completedAt
                }) : h.createElement(P._17, {
                    className: "ach-card__pill-wrapper",
                    fontSize: P.L.Size5
                }, h.createElement(P.Z, {
                    label: Object(p.e)(e.achievement.progressRatio, "percent")
                }))
            },
            F = n(1353),
            L = {
                "data-test-selector": "recently-completed-achievements-list"
            },
            z = {
                "data-test-selector": "not-completed-achievements-list"
            },
            H = {
                "data-test-selector": "past-completed-achievements-list"
            },
            B = function(e) {
                return h.createElement(P.U, {
                    padding: {
                        x: 4,
                        y: 4
                    },
                    margin: {
                        bottom: 2
                    }
                }, e.isLoading ? I() : D(e))
            },
            D = function(e) {
                return [Boolean(e.achievements.topRecentlyCompleted.length) && h.createElement(P.U, u.__assign({
                    margin: {
                        bottom: 3
                    }
                }, L, {
                    key: "recently-completed"
                }), h.createElement(P.U, {
                    padding: {
                        bottom: 1
                    },
                    margin: {
                        bottom: .5
                    }
                }, h.createElement(P._21, {
                    type: P._26.H3,
                    fontSize: P.L.Size4,
                    bold: !0
                }, Object(p.d)("Recently Completed", "AchievementsList"))), e.achievements.topRecentlyCompleted.map(U)), Boolean(e.achievements.notCompleted.length) && h.createElement("div", u.__assign({}, z, {
                    key: "not-completed"
                }), h.createElement(P.U, {
                    padding: {
                        bottom: 1
                    },
                    margin: {
                        bottom: .5
                    }
                }, h.createElement(P._21, {
                    type: P._26.H3,
                    fontSize: P.L.Size4,
                    bold: !0
                }, Object(p.d)("In Progress", "AchievementsList"))), e.achievements.notCompleted.map(U)), Boolean(e.achievements.pastCompleted.length) && h.createElement(P.U, u.__assign({
                    margin: {
                        top: 3
                    }
                }, H, {
                    key: "past-completed"
                }), h.createElement(P.U, {
                    padding: {
                        bottom: 1
                    },
                    margin: {
                        bottom: .5
                    }
                }, h.createElement(P._21, {
                    type: P._26.H3,
                    fontSize: P.L.Size4,
                    bold: !0
                }, Object(p.d)("Completed", "AchievementsList"))), e.achievements.pastCompleted.map(U))]
            },
            U = function(e) {
                return h.createElement(A.b, {
                    key: e.id,
                    path: O.b.achievement(e),
                    exact: !0
                }, function(t) {
                    var n = t.match;
                    return Boolean(n) ? h.createElement(q, {
                        achievement: e,
                        refDelegate: F.a
                    }) : h.createElement(P._17, {
                        elevation: 1
                    }, h.createElement(k.a, {
                        achievement: e,
                        layoutClassName: "ach-card--in-list"
                    }, h.createElement(S.a, {
                        achievement: e
                    })))
                })
            },
            I = function() {
                var e = Array(3).fill("").map(function(e, t) {
                    return h.createElement(P.U, {
                        margin: {
                            bottom: 1
                        },
                        key: t
                    }, h.createElement(P._1, {
                        height: 70
                    }))
                });
                return [h.createElement(P.U, u.__assign({
                    margin: {
                        bottom: 3
                    }
                }, L, {
                    key: "recently-completed"
                }), e), h.createElement("div", u.__assign({}, z, {
                    key: "not-completed"
                }), e), h.createElement(P.U, u.__assign({
                    margin: {
                        top: 3
                    }
                }, H, {
                    key: "past-completed"
                }), e)]
            },
            K = n(64),
            W = (n(1928), function() {
                return h.createElement(P._17, {
                    className: "dash-feedback",
                    position: P._2.Absolute,
                    margin: {
                        bottom: 2,
                        right: 2
                    },
                    zIndex: P._38.Above,
                    background: P.m.Overlay,
                    elevation: 3,
                    attachBottom: !0,
                    attachRight: !0
                }, h.createElement(K.a, null, h.createElement(P.v, {
                    ariaLabel: Object(p.d)("Feedback", "DashboardHelpLinks"),
                    icon: P._9.QuestionMark,
                    "data-a-target": "feedback-button",
                    overlay: !0
                }), h.createElement(P.p, {
                    direction: P.q.TopRight,
                    size: P.r.Small,
                    "data-a-target": "feedback-balloon",
                    offsetX: "6px"
                }, h.createElement(P.U, {
                    padding: {
                        top: .5,
                        bottom: .5
                    }
                }, h.createElement(P.S, {
                    linkTo: "https://help.twitch.tv/customer/portal/articles/2877822",
                    targetBlank: !0
                }, h.createElement(P.U, {
                    padding: {
                        y: .5,
                        x: 1
                    }
                }, h.createElement(P._21, null, Object(p.d)("Learn More", "DashboardHelpLinks")))), h.createElement(P.S, {
                    linkTo: "https://twitch.uservoice.com/forums/310216",
                    targetBlank: !0
                }, h.createElement(P.U, {
                    padding: {
                        y: .5,
                        x: 1
                    }
                }, h.createElement(P._21, null, Object(p.d)("Send Feedback", "DashboardHelpLinks"))))))))
            }),
            R = (n(1929), {
                "data-test-selector": "quests-col"
            }),
            G = {
                "data-test-selector": "achs-col"
            },
            M = function(e) {
                var t = x({
                        "ach-col": !0,
                        "ach-col--q": !0,
                        "ach-col--spotlight": e.isSpotlightShown
                    }),
                    n = x({
                        "ach-col": !0,
                        "ach-col--l": !0,
                        "ach-col--spotlight": e.isSpotlightShown
                    });
                return h.createElement(P._17, {
                    className: "ach-page",
                    margin: {
                        bottom: 1
                    },
                    display: P.H.Flex,
                    flexDirection: P.J.Column,
                    flexWrap: P.K.NoWrap,
                    alignItems: P.c.Stretch,
                    breakpointMedium: {
                        flexDirection: P.J.Row
                    },
                    fullHeight: !0
                }, h.createElement(P._17, {
                    className: "ach-col-wrapper ach-col-wrapper--q",
                    display: P.H.Flex,
                    flexWrap: P.K.NoWrap,
                    flexDirection: P.J.Column,
                    flexShrink: 0,
                    breakpointMedium: {
                        display: P.H.Block
                    }
                }, h.createElement(P.U, u.__assign({
                    className: t
                }, R), h.createElement(P.U, {
                    padding: {
                        x: 4,
                        y: 4
                    },
                    margin: {
                        bottom: 2
                    },
                    fullHeight: !0
                }, e.left))), h.createElement(P._17, {
                    className: "ach-col-wrapper ach-col-wrapper--l",
                    display: P.H.Flex,
                    flexGrow: 1,
                    flexWrap: P.K.NoWrap,
                    flexDirection: P.J.Column,
                    flexShrink: 0,
                    breakpointMedium: {
                        display: P.H.Block
                    }
                }, h.createElement(P.U, u.__assign({
                    className: n
                }, G), e.right)), h.createElement(W, null))
            },
            V = n(1548),
            Y = n(1325),
            J = n(1293),
            Q = function(e) {
                if (e.isPartner) return h.createElement($, {
                    title: e.title,
                    subtitle: e.subtitle,
                    url: e.url
                });
                var t = e.url ? h.createElement("a", {
                    target: "_blank",
                    href: e.url,
                    className: "c-text-overlay-alt"
                }, e.subtitle) : e.subtitle;
                return h.createElement("div", null, h.createElement(P._21, {
                    ellipsis: !0,
                    color: P.F.Overlay,
                    bold: !0,
                    fontSize: P.L.Size5
                }, e.title), h.createElement(P._21, {
                    ellipsis: !0,
                    color: P.F.OverlayAlt,
                    fontSize: P.L.Size5
                }, t))
            },
            $ = function(e) {
                return h.createElement(P._17, {
                    display: P.H.Flex,
                    flexGrow: 1,
                    flexWrap: P.K.NoWrap,
                    alignItems: P.c.Center
                }, h.createElement(P.U, {
                    display: P.H.Flex,
                    flexDirection: P.J.Column,
                    flexGrow: 1
                }, h.createElement(P._21, {
                    ellipsis: !0,
                    color: P.F.Overlay,
                    bold: !0,
                    fontSize: P.L.Size5
                }, e.title), h.createElement(P._21, {
                    ellipsis: !0,
                    color: P.F.OverlayAlt,
                    fontSize: P.L.Size5
                }, h.createElement("a", {
                    target: "_blank",
                    href: e.url,
                    className: "c-text-overlay-alt"
                }, e.subtitle))), h.createElement(P._17, {
                    display: P.H.Flex,
                    color: P.F.OverlayAlt
                }, h.createElement(P._8, {
                    asset: P._9.Verified
                })))
            },
            X = function(e) {
                return h.createElement(P._17, {
                    display: P.H.Flex,
                    flexGrow: 1,
                    flexWrap: P.K.NoWrap,
                    alignItems: P.c.Center
                }, h.createElement(P.U, {
                    display: P.H.Flex,
                    flexDirection: P.J.Column,
                    flexGrow: 1
                }, h.createElement(P._21, {
                    ellipsis: !0,
                    color: P.F.Overlay,
                    bold: !0,
                    fontSize: P.L.Size5
                }, e.title), h.createElement(P._21, {
                    ellipsis: !0,
                    color: P.F.OverlayAlt,
                    fontSize: P.L.Size5
                }, e.subtitle)), h.createElement(P.U, {
                    display: P.H.Flex,
                    flexShrink: 0,
                    padding: {
                        left: 1
                    }
                }, h.createElement(P.u, {
                    linkTo: e.url,
                    onClick: e.onClickCTA
                }, e.cta)))
            },
            Z = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return u.__extends(t, e), t.prototype.render = function() {
                    var e = this.props.quest,
                        t = null,
                        n = null;
                    switch (e.key) {
                        case Y.c:
                            e.role === J.c.Partner ? t = h.createElement(ae, null) : e.role === J.c.Affiliate && e.completedAt && (t = h.createElement(le, {
                                questKey: e.key
                            }));
                            break;
                        case Y.b:
                            e.role === J.c.Partner ? t = h.createElement(ae, null) : e.role === J.c.Affiliate ? t = h.createElement(te, null) : e.role === J.c.None && e.completedAt && (t = h.createElement(ne, {
                                channelName: this.props.channelName,
                                questKey: e.key
                            }));
                            break;
                        case Y.a:
                            e.role === J.c.Partner ? t = h.createElement(ae, null) : e.role === J.c.Affiliate ? t = h.createElement(te, null) : e.completedAt && (t = h.createElement(ee, null))
                    }
                    return t && (n = h.createElement(P._17, {
                        padding: 1,
                        background: P.m.AccentAlt2
                    }, t)), n
                }, t
            }(h.Component),
            ee = function() {
                return h.createElement(Q, {
                    title: Object(p.d)("You've started your path as a Twitch streamer", "AchievementsBannerItBegins"),
                    subtitle: Object(p.d)("Which achievement will you complete next?", "AchievementsBannerItBegins")
                })
            },
            te = function() {
                return h.createElement(Q, {
                    title: Object(p.d)("Congratulations! You’re a Twitch Affiliate", "AchievementsBannerPathToAffiliate"),
                    subtitle: Object(p.d)("Learn more", "AchievementsBannerPathToAffiliate"),
                    url: "https://help.twitch.tv/customer/en/portal/topics/1070347-affiliate-program/articles"
                })
            },
            ne = function(e) {
                var t = function() {
                    return l(e.questKey)
                };
                return h.createElement(X, {
                    title: Object(p.d)("You're eligible to become a Twitch Affiliate", "AchievementsBannerPathToAffiliate"),
                    subtitle: Object(p.d)("Click Get Started to begin", "AchievementsBannerPathToAffiliate"),
                    cta: Object(p.d)("Get Started", "AchievementsBannerPathToAffiliate"),
                    url: "https://www.twitch.tv/" + e.channelName + "/dashboard/settings",
                    onClickCTA: t
                })
            },
            ae = function() {
                return h.createElement(Q, {
                    title: Object(p.d)("Congratulations! You’re a Twitch Partner", "AchievementsBannerPathToPartner"),
                    subtitle: Object(p.d)("Learn more", "AchievementsBannerPathToPartner"),
                    url: "https://help.twitch.tv/customer/portal/topics/301854-partner-program/articles",
                    isPartner: !0
                })
            },
            le = function(e) {
                var t = function() {
                    return l(e.questKey)
                };
                return h.createElement(X, {
                    title: Object(p.d)("Apply to become a Twitch Partner today", "AchievementsBannerPathToPartner"),
                    subtitle: Object(p.d)("We usually follow up within 7 business days", "AchievementsBannerPathToPartner"),
                    cta: Object(p.d)("Apply", "AchievementsBannerPathToPartner"),
                    url: "https://www.twitch.tv/partner/signup",
                    onClickCTA: t
                })
            },
            ie = n(1549),
            re = function(e) {
                var t = x({
                        "ach-q-item": !0,
                        "ach-q-item--expanded": e.isActive
                    }),
                    n = h.createElement(P._17, {
                        display: P.H.InlineBlock
                    }, h.createElement(V.a, null)),
                    a = h.createElement("a", {
                        href: e.quest.learnMoreURL,
                        "aria-hidden": !e.isActive,
                        tabIndex: -1,
                        target: "_blank"
                    }, Object(p.d)("Learn more", "AchievementsPathToAffiliate")),
                    l = e.quest.getInstructions(n),
                    i = Object(p.d)("{numCompleted, number} of {numTotal, number}", {
                        numCompleted: e.quest.completedAchievementsCount,
                        numTotal: e.quest.achievements.length
                    }, "AchievementsQuests");
                return h.createElement(P._17, {
                    className: t,
                    position: P._2.Relative,
                    margin: {
                        bottom: 2
                    },
                    elevation: 1,
                    border: !0
                }, h.createElement(P.S, {
                    onClick: e.onHeaderClick
                }, h.createElement(P._17, {
                    className: "ach-q-item__header",
                    display: P.H.Flex,
                    padding: {
                        left: 1,
                        right: 1
                    },
                    borderBottom: !0
                }, h.createElement(P.U, {
                    className: "ach-q-item__info",
                    display: P.H.Flex,
                    flexGrow: 1,
                    flexWrap: P.K.NoWrap,
                    alignItems: P.c.Center
                }, Boolean(e.quest.isComplete) && h.createElement(P.U, {
                    display: P.H.Flex,
                    padding: {
                        left: .5,
                        right: 1
                    }
                }, h.createElement(ce, null)), h.createElement(P.U, {
                    display: P.H.Flex,
                    flexGrow: 1
                }, h.createElement(P._21, {
                    className: "ach-q-item__title",
                    type: P._26.H3,
                    color: P.F.Alt,
                    fontSize: P.L.Size3
                }, e.quest.title)), !Boolean(e.quest.isComplete) && h.createElement(P.U, {
                    display: P.H.Flex
                }, h.createElement(P._21, {
                    className: "ach-q-item__label",
                    color: P.F.Alt2,
                    fontSize: P.L.Size5
                }, i))))), h.createElement(Z, {
                    quest: e.quest,
                    channelName: e.channelName
                }), h.createElement(P._17, {
                    padding: {
                        top: 1,
                        bottom: .5
                    },
                    background: P.m.Base
                }, e.quest.achievements.map(function(t) {
                    return h.createElement(k.a, {
                        key: t.id,
                        achievement: t,
                        isHidden: !e.isActive
                    }, h.createElement(ie.a, {
                        achievement: t,
                        quest: e.quest
                    }))
                })), h.createElement(P._17, {
                    className: t,
                    display: P.H.Flex,
                    padding: 1,
                    background: P.m.Alt2,
                    borderTop: !0
                }, h.createElement(P.U, {
                    padding: {
                        top: .5,
                        bottom: .5
                    },
                    margin: {
                        left: .5,
                        right: .5
                    }
                }, h.createElement(P._21, {
                    color: P.F.Alt2,
                    fontSize: P.L.Size5,
                    type: P._26.Span
                }, l, " ", a))))
            },
            ce = function() {
                return h.createElement(P._8, {
                    asset: P._9.Check,
                    type: P._10.Brand
                })
            },
            oe = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        userSelectedQuest: void 0
                    }, t.handleActivate = function(e) {
                        t.setState({
                            userSelectedQuest: e
                        })
                    }, t
                }
                return u.__extends(t, e), t.prototype.render = function() {
                    var e = this,
                        t = this.state.userSelectedQuest || this.props.quests[0],
                        n = this.props.quests.map(function(n) {
                            var a = function() {
                                return e.handleActivate(n)
                            };
                            return h.createElement(re, {
                                key: n.id,
                                quest: n,
                                channelName: e.props.channel.name,
                                onHeaderClick: a,
                                isActive: n === t
                            })
                        });
                    return h.createElement(P.U, {
                        fullHeight: !0
                    }, this.props.isLoading ? this.renderPlaceholders() : n)
                }, t.prototype.renderPlaceholders = function() {
                    return [h.createElement(P.U, {
                        margin: {
                            bottom: 2
                        },
                        key: "opened-quest"
                    }, h.createElement(P._1, {
                        height: 450
                    })), h.createElement(P.U, {
                        margin: {
                            bottom: 2
                        },
                        key: "collasped-quest-1"
                    }, h.createElement(P._1, {
                        height: 62
                    })), h.createElement(P.U, {
                        margin: {
                            bottom: 2
                        },
                        key: "collasped-quest-2"
                    }, h.createElement(P._1, {
                        height: 62
                    }))]
                }, t
            }(h.Component),
            se = {
                "data-test-selector": "title"
            },
            me = {
                "data-test-selector": "subtitle"
            },
            ue = {
                "data-test-selector": "dismiss"
            },
            he = function(e) {
                var t = e.title,
                    n = e.subtitle,
                    a = i(40);
                return h.createElement(P._17, {
                    position: P._2.Relative,
                    padding: 2,
                    textAlign: P._22.Center,
                    className: "ach-sb",
                    elevation: 1,
                    border: !0
                }, h.createElement("div", {
                    className: "ach-sb__flourish"
                }, a), h.createElement(P.U, {
                    margin: {
                        left: 1
                    },
                    position: P._2.Relative,
                    zIndex: P._38.Above,
                    className: "ach-sb__text"
                }, h.createElement(P._21, u.__assign({}, se, {
                    fontSize: P.L.Size4,
                    bold: !0,
                    ellipsis: !0
                }), t), h.createElement(P._21, u.__assign({}, me, {
                    fontSize: P.L.Size5,
                    color: P.F.Alt2,
                    ellipsis: !0
                }), n)))
            },
            de = function() {
                return h.createElement("div", {
                    className: "confetti " + s(),
                    style: u.__assign({
                        position: "absolute"
                    }, m())
                })
            },
            pe = function(e) {
                return h.createElement(P._17, {
                    position: P._2.Absolute,
                    margin: {
                        top: 3,
                        x: 4
                    },
                    zIndex: P._38.Above,
                    attachTop: !0,
                    attachLeft: !0,
                    attachRight: !0
                }, h.createElement(P.e, {
                    type: P.i.BounceIn,
                    duration: P.g.Medium,
                    enabled: !0,
                    timing: P.h.EaseInOut
                }, e.children, h.createElement(P.U, {
                    className: "ach-sb__dismiss",
                    position: P._2.Absolute,
                    attachRight: !0,
                    attachTop: !0
                }, h.createElement(P.v, u.__assign({}, ue, {
                    ariaLabel: Object(p.d)("Close", "AchievementSpotlightDismiss"),
                    type: P.w.Default,
                    size: P.x.Large,
                    icon: P._9.Close,
                    onClick: e.onDismissSpotlight
                })))))
            },
            fe = {
                src: "https://static-cdn.jtvnw.net/emoticons/v1/135393/3.0",
                alt: "PartyTime"
            },
            ge = function() {
                var e = Object(p.d)("Celebrate milestones and track your progress towards becoming an Affiliate or Partner.", "AchievementsSpotlight"),
                    t = Object(p.d)("Learn more", "AchievementsSpotlight");
                return h.createElement(P._17, {
                    padding: 2,
                    className: "ach-sb",
                    display: P.H.Flex,
                    alignItems: P.c.Center,
                    elevation: 1,
                    border: !0
                }, h.createElement(P._17, {
                    display: P.H.Flex,
                    flexDirection: P.J.Row,
                    flexWrap: P.K.NoWrap
                }, h.createElement(P.U, {
                    display: P.H.Flex,
                    flexShrink: 0,
                    alignContent: P.b.Center,
                    alignItems: P.c.Center
                }, h.createElement(P.l, {
                    imageSrc: fe.src,
                    imageAlt: fe.alt,
                    size: 30
                })), h.createElement(P.U, {
                    display: P.H.Flex,
                    margin: {
                        left: 1
                    },
                    className: "ach-sb__text"
                }, h.createElement(P._21, u.__assign({}, se, {
                    fontSize: P.L.Size4,
                    bold: !0,
                    ellipsis: !0
                }), Object(p.d)("Welcome to Achievements", "AchievementsSpotlight")), h.createElement(P._21, u.__assign({}, me, {
                    fontSize: P.L.Size5,
                    color: P.F.Alt2,
                    ellipsis: !0
                }), e, " ", h.createElement("a", {
                    target: "_blank",
                    href: "https://help.twitch.tv/customer/portal/articles/2877819"
                }, t)))))
            },
            ve = (n(1930), "achievement-spotlights"),
            be = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        didDismiss: !1
                    }, t.handleDismissSpotlight = function() {
                        t.setState({
                            didDismiss: !0
                        }, t.handleViewSpotlight)
                    }, t.handleViewSpotlight = function() {
                        var e = t.dismissedSpotlights[t.spotlightKey],
                            n = "number" == typeof e ? e + 1 : 1,
                            a = u.__assign({}, t.dismissedSpotlights, (l = {}, l[t.spotlightKey] = n, l));
                        return p.k.set(ve, a), n;
                        var l
                    }, t
                }
                return u.__extends(t, e), t.prototype.render = function() {
                    var e = null;
                    if (!this.props.isLoading && !this.currentSpotlightWasDismissed) {
                        this.handleViewSpotlight();
                        var t = void 0;
                        switch (this.bannerType) {
                            case Y.c:
                                t = h.createElement(Ee, null);
                                break;
                            case Y.b:
                                t = h.createElement(_e, null);
                                break;
                            case Y.a:
                                t = h.createElement(ye, null);
                                break;
                            default:
                                t = h.createElement(ge, null)
                        }
                        e = h.createElement(pe, {
                            onDismissSpotlight: this.handleDismissSpotlight
                        }, t)
                    }
                    return h.createElement(P.U, {
                        fullHeight: !0
                    }, e, this.props.children(Boolean(e)))
                }, Object.defineProperty(t.prototype, "spotlightKey", {
                    get: function() {
                        return this.props.channelName + "-" + this.bannerType
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "dismissedSpotlights", {
                    get: function() {
                        return p.k.get(ve, {})
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "bannerType", {
                    get: function() {
                        var e = "",
                            t = "",
                            n = "";
                        return this.props.quests.forEach(function(a) {
                            a.completedAt && (a.key === Y.c && a.role === J.c.Affiliate && (e = Y.c), a.key === Y.b && a.role === J.c.None && (t = Y.b), a.key === Y.a && a.role === J.c.None && (n = Y.a))
                        }), e || t || n || "first_time"
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "currentSpotlightWasDismissed", {
                    get: function() {
                        return this.state.didDismiss || this.dismissedSpotlights[this.spotlightKey]
                    },
                    enumerable: !0,
                    configurable: !0
                }), t
            }(h.PureComponent),
            Ee = function() {
                var e = h.createElement(Ae, {
                        title: Object(p.d)("Path to Partner", "AchievementsSpotlightPathToPartner")
                    }),
                    t = Object(p.d)("You've completed {achievementTitle}", {
                        achievementTitle: e
                    }, "AchievementsSpotlightPathToPartner");
                return a({
                    type: "quest",
                    questKey: Y.c
                }), h.createElement(he, {
                    title: t,
                    subtitle: Object(p.d)("Apply to become a Twitch Partner today", "AchievementsSpotlightPathToPartner")
                })
            },
            _e = function() {
                var e = h.createElement(Ae, {
                        title: Object(p.d)("Path to Affiliate", "AchievementsSpotlightPathToAffiliate")
                    }),
                    t = Object(p.d)("You've completed {achievementTitle}", {
                        achievementTitle: e
                    }, "AchievementsSpotlightPathToAffiliate");
                return a({
                    type: "quest",
                    questKey: Y.b
                }), h.createElement(he, {
                    title: t,
                    subtitle: Object(p.d)("You're eligible to become a Twitch Affiliate", "AchievementsSpotlightPathToAffiliate")
                })
            },
            ye = function() {
                var e = h.createElement(Ae, {
                        title: Object(p.d)("It Begins", "AchievementsSpotlightItBegins")
                    }),
                    t = Object(p.d)("You've completed {achievementTitle}", {
                        achievementTitle: e
                    }, "AchievementsSpotlightItBegins");
                return a({
                    type: "quest",
                    questKey: Y.a
                }), h.createElement(he, {
                    title: t,
                    subtitle: Object(p.d)("Which achievement will you complete next?", "AchievementsSpotlightItBegins")
                })
            },
            Ae = function(e) {
                var t = e.title;
                return h.createElement(P._21, {
                    type: P._26.Span,
                    color: P.F.OverlayAlt
                }, t)
            },
            ke = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return u.__extends(t, e), t.prototype.componentDidMount = function() {
                    p.n.setPageTitle(Object(p.d)("Achievements", "DashboardAchievementsPage"))
                }, t.prototype.render = function() {
                    if (void 0 === this.props.data.channel) return null;
                    var e = _.a.fromChannelData(this.props.data.channel),
                        t = function(t) {
                            return h.createElement(be, u.__assign({}, t, {
                                channelName: e.name
                            }), function(n) {
                                return h.createElement(M, {
                                    isSpotlightShown: n,
                                    left: h.createElement(oe, {
                                        quests: t.quests,
                                        channel: e,
                                        isLoading: t.isLoading
                                    }),
                                    right: h.createElement(B, {
                                        achievements: t.achievements,
                                        isLoading: t.isLoading
                                    })
                                })
                            })
                        };
                    return h.createElement(E.a, {
                        channel: e,
                        render: t
                    })
                }, t
            }(h.Component),
            Se = Object(b.c)("AchievementsPage", {
                destination: g.a.ChannelDashboardAchievements,
                autoReportInteractive: !0
            })(Object(f.a)({
                location: v.PageviewLocation.DashboardAchievements
            })(ke)),
            xe = Object(d.graphql)(y, {
                options: function(e) {
                    return {
                        variables: {
                            channelName: e.channelName
                        }
                    }
                }
            })(Se);
        n.d(t, "AchievementsPageComponent", function() {
            return ke
        }), n.d(t, "AchievementsPage", function() {
            return xe
        })
    }
});
//# sourceMappingURL=pages.dashboard.achievements-871b84c550119359c5d16bc237152649.js.map