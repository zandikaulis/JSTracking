webpackJsonp([69], {
    1951: function(e, t) {
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
    1952: function(e, t) {},
    1953: function(e, t) {},
    1954: function(e, t) {},
    1955: function(e, t) {},
    2077: function(e, t, n) {
        "use strict";

        function a(e) {
            var t = {
                spotlight_type: e.type,
                achievement_key: e.achievementKey ? e.achievementKey : null,
                quest_key: e.questKey ? e.questKey : null
            };
            o.m.track(u.SpadeEventType.AchievementSpotlightImpression, t)
        }

        function i(e) {
            var t = {
                quest_id: e
            };
            o.m.track(u.SpadeEventType.AchievementQuestBannerClick, t)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var l = n(0),
            r = n(1),
            c = n(31),
            o = n(2),
            s = n(813),
            m = n(810),
            u = n(12),
            h = n(5),
            p = (n(1577), n(1578)),
            d = n(1505),
            f = n(1951),
            g = n(22),
            v = n(1283),
            b = n(1580),
            E = n(4),
            _ = n(10),
            y = n(1579),
            A = n(1506),
            S = n(907),
            k = n(3),
            x = {
                imageSrc: "https://static-cdn.jtvnw.net/emoticons/v1/81274/2.0",
                imageAlt: "VoHiYo"
            },
            C = function(e) {
                var t = E({
                    "ach-card": !0,
                    "ach-card--expanded": !0,
                    "ach-card--completed": Boolean(e.achievement.completedAt),
                    "ach-card--recent": e.achievement.wasRecentlyCompleted()
                });
                return r.createElement(k._17, {
                    className: t,
                    position: k._2.Relative
                }, r.createElement(k._17, {
                    className: "ach-card__inner",
                    elevation: 4,
                    refDelegate: e.refDelegate
                }, r.createElement(y.a, {
                    achievement: e.achievement
                }, r.createElement(N, {
                    achievement: e.achievement
                })), r.createElement(k.U, {
                    position: k._2.Absolute,
                    attachTop: !0,
                    attachRight: !0,
                    margin: {
                        top: 1,
                        right: 1
                    }
                }, r.createElement(_.a, {
                    to: S.b.channelAchievements(e.achievement.channelName)
                }, r.createElement(k.v, {
                    ariaLabel: "Close",
                    icon: k._9.Close
                }))), r.createElement(k.U, {
                    display: k.H.Flex,
                    flexGrow: 1,
                    position: k._2.Relative,
                    padding: {
                        top: 1
                    }
                }, r.createElement(k._17, {
                    display: k.H.Flex,
                    flexWrap: k.K.NoWrap,
                    alignItems: k.c.Center,
                    flexGrow: 1,
                    padding: 1,
                    background: k.m.Alt2,
                    border: !0
                }, r.createElement(k.l, l.__assign({}, x, {
                    size: 30
                })), r.createElement(k._17, {
                    color: k.F.Alt,
                    margin: {
                        left: .5
                    },
                    padding: {
                        left: 1
                    }
                }, r.createElement("p", null, e.achievement.longDescription))))))
            },
            N = function(e) {
                return 0 === e.achievement.progress ? r.createElement("span", null) : e.achievement.completedAt ? r.createElement(A.a, {
                    date: e.achievement.completedAt
                }) : r.createElement(k._17, {
                    className: "ach-card__pill-wrapper",
                    fontSize: k.L.Size5
                }, r.createElement(k.Z, {
                    label: Object(o.e)(e.achievement.progressRatio, "percent")
                }))
            },
            O = n(867),
            w = (n(1952), ["confetti-layer__confetti--slow", "confetti-layer__confetti--medium", "confetti-layer__confetti--fast"]),
            P = ["rgba(247, 42, 107, 1)", "rgba(255, 113, 105, 1)", "rgba(253, 226, 132, 1)", "rgba(181, 138, 242, 1)"],
            T = ["0.011s", "0.176s", "0.321s", "0.446s", "0.849s", "1.056s", "1.229s", "1.333s", "1.379s", "1.828s"],
            j = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return l.__extends(t, e), t.prototype.render = function() {
                    var e = E({
                        "confetti-layer__confetti": !0,
                        "confetti-layer__confetti--infinite": this.props.infinite
                    });
                    return r.createElement(k.U, {
                        className: "confetti-layer",
                        position: k._2.Absolute,
                        overflow: k.Y.Hidden,
                        zIndex: k._38.Default,
                        attachTop: !0,
                        attachRight: !0,
                        attachBottom: !0,
                        attachLeft: !0
                    }, Object(O.times)(this.props.confettiCount, function(t) {
                        return r.createElement("div", {
                            key: t,
                            className: e + " " + Object(O.sample)(w),
                            style: {
                                position: "absolute",
                                left: Object(O.random)(2, 95) + "%",
                                width: Object(O.random)(4, 10) + "px",
                                height: Object(O.random)(4, 10) + "px",
                                backgroundColor: "" + Object(O.sample)(P),
                                animationDelay: "" + Object(O.sample)(T)
                            }
                        })
                    }))
                }, t
            }(r.PureComponent),
            q = n(1284),
            L = {
                "data-test-selector": "recently-completed-achievements-list"
            },
            F = {
                "data-test-selector": "not-completed-achievements-list"
            },
            z = {
                "data-test-selector": "past-completed-achievements-list"
            },
            D = function(e) {
                return r.createElement(k.U, {
                    padding: {
                        x: 4,
                        y: 4
                    },
                    margin: {
                        bottom: 2
                    }
                }, e.isLoading ? U() : r.createElement(H, {
                    achievements: e.achievements
                }))
            },
            H = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        didCelebrate: !1
                    }, t.timeoutID = 0, t
                }
                return l.__extends(t, e), t.prototype.componentDidMount = function() {
                    var e = this;
                    this.timeoutID = setTimeout(function() {
                        e.setState({
                            didCelebrate: !0
                        })
                    }, 5e3)
                }, t.prototype.componentWillUnmount = function() {
                    clearTimeout(this.timeoutID)
                }, t.prototype.render = function() {
                    var e = this;
                    return r.createElement("div", null, Boolean(this.props.achievements.topRecentlyCompleted.length) && r.createElement(k.U, l.__assign({
                        margin: {
                            bottom: 3
                        }
                    }, L), r.createElement(k.U, {
                        padding: {
                            bottom: 1
                        },
                        margin: {
                            bottom: .5
                        }
                    }, r.createElement(k._21, {
                        type: k._26.H3,
                        fontSize: k.L.Size4,
                        bold: !0
                    }, Object(o.d)("Recently Completed", "AchievementsList"))), this.props.achievements.topRecentlyCompleted.map(function(t) {
                        return r.createElement(B, {
                            achievement: t,
                            key: t.id
                        }, !e.state.didCelebrate && r.createElement(j, {
                            confettiCount: 30
                        }))
                    })), Boolean(this.props.achievements.notCompleted.length) && r.createElement("div", l.__assign({}, F), r.createElement(k.U, {
                        padding: {
                            bottom: 1
                        },
                        margin: {
                            bottom: .5
                        }
                    }, r.createElement(k._21, {
                        type: k._26.H3,
                        fontSize: k.L.Size4,
                        bold: !0
                    }, Object(o.d)("In Progress", "AchievementsList"))), this.props.achievements.notCompleted.map(function(e) {
                        return r.createElement(B, {
                            achievement: e,
                            key: e.id
                        })
                    })), Boolean(this.props.achievements.pastCompleted.length) && r.createElement(k.U, l.__assign({
                        margin: {
                            top: 3
                        }
                    }, z), r.createElement(k.U, {
                        padding: {
                            bottom: 1
                        },
                        margin: {
                            bottom: .5
                        }
                    }, r.createElement(k._21, {
                        type: k._26.H3,
                        fontSize: k.L.Size4,
                        bold: !0
                    }, Object(o.d)("Completed", "AchievementsList"))), this.props.achievements.pastCompleted.map(function(e) {
                        return r.createElement(B, {
                            achievement: e,
                            key: e.id
                        })
                    })))
                }, t
            }(r.Component),
            B = function(e) {
                return r.createElement(g.b, {
                    path: S.b.achievement(e.achievement),
                    exact: !0
                }, function(t) {
                    var n = t.match;
                    return Boolean(n) ? r.createElement(C, {
                        achievement: e.achievement,
                        refDelegate: q.a
                    }) : r.createElement(k._17, {
                        elevation: 1
                    }, r.createElement(v.a, {
                        achievement: e.achievement,
                        layoutClassName: "ach-card--in-list"
                    }, r.createElement("div", null, e.children, r.createElement(b.a, {
                        achievement: e.achievement
                    }))))
                })
            },
            U = function() {
                var e = Array(3).fill("").map(function(e, t) {
                    return r.createElement(k.U, {
                        margin: {
                            bottom: 1
                        },
                        key: t
                    }, r.createElement(k._1, {
                        height: 70
                    }))
                });
                return [r.createElement(k.U, l.__assign({
                    margin: {
                        bottom: 3
                    }
                }, L, {
                    key: "recently-completed"
                }), e), r.createElement("div", l.__assign({}, F, {
                    key: "not-completed"
                }), e), r.createElement(k.U, l.__assign({
                    margin: {
                        top: 3
                    }
                }, z, {
                    key: "past-completed"
                }), e)]
            },
            I = n(47),
            K = (n(1953), function() {
                return r.createElement(k._17, {
                    className: "dash-feedback",
                    position: k._2.Absolute,
                    margin: {
                        bottom: 2,
                        right: 2
                    },
                    zIndex: k._38.Above,
                    background: k.m.Overlay,
                    elevation: 3,
                    attachBottom: !0,
                    attachRight: !0
                }, r.createElement(I.a, null, r.createElement(k.v, {
                    ariaLabel: Object(o.d)("Feedback", "DashboardHelpLinks"),
                    icon: k._9.QuestionMark,
                    "data-a-target": "feedback-button",
                    overlay: !0
                }), r.createElement(k.p, {
                    direction: k.q.TopRight,
                    size: k.r.Small,
                    "data-a-target": "feedback-balloon",
                    offsetX: "6px"
                }, r.createElement(k.U, {
                    padding: {
                        top: .5,
                        bottom: .5
                    }
                }, r.createElement(k.S, {
                    linkTo: "https://help.twitch.tv/customer/portal/articles/2877822",
                    targetBlank: !0
                }, r.createElement(k.U, {
                    padding: {
                        y: .5,
                        x: 1
                    }
                }, r.createElement(k._21, null, Object(o.d)("Learn More", "DashboardHelpLinks")))), r.createElement(k.S, {
                    linkTo: "https://twitch.uservoice.com/forums/310216",
                    targetBlank: !0
                }, r.createElement(k.U, {
                    padding: {
                        y: .5,
                        x: 1
                    }
                }, r.createElement(k._21, null, Object(o.d)("Send Feedback", "DashboardHelpLinks"))))))))
            }),
            W = (n(1954), {
                "data-test-selector": "quests-col"
            }),
            R = {
                "data-test-selector": "achs-col"
            },
            G = function(e) {
                var t = E({
                        "ach-col": !0,
                        "ach-col--q": !0,
                        "ach-col--spotlight": e.isSpotlightShown
                    }),
                    n = E({
                        "ach-col": !0,
                        "ach-col--l": !0,
                        "ach-col--spotlight": e.isSpotlightShown
                    });
                return r.createElement(k._17, {
                    className: "ach-page",
                    margin: {
                        bottom: 1
                    },
                    display: k.H.Flex,
                    flexDirection: k.J.Column,
                    flexWrap: k.K.NoWrap,
                    alignItems: k.c.Stretch,
                    breakpointMedium: {
                        flexDirection: k.J.Row
                    },
                    fullHeight: !0
                }, r.createElement(k._17, {
                    className: "ach-col-wrapper ach-col-wrapper--q",
                    display: k.H.Flex,
                    flexWrap: k.K.NoWrap,
                    flexDirection: k.J.Column,
                    flexShrink: 0,
                    breakpointMedium: {
                        display: k.H.Block
                    }
                }, r.createElement(k.U, l.__assign({
                    className: t
                }, W), r.createElement(k.U, {
                    padding: {
                        x: 4,
                        y: 4
                    },
                    margin: {
                        bottom: 2
                    },
                    fullHeight: !0
                }, e.left))), r.createElement(k._17, {
                    className: "ach-col-wrapper ach-col-wrapper--l",
                    display: k.H.Flex,
                    flexGrow: 1,
                    flexWrap: k.K.NoWrap,
                    flexDirection: k.J.Column,
                    flexShrink: 0,
                    breakpointMedium: {
                        display: k.H.Block
                    }
                }, r.createElement(k.U, l.__assign({
                    className: n
                }, R), e.right)), r.createElement(K, null))
            },
            M = n(1581),
            Y = n(1140),
            V = n(1063),
            J = function(e) {
                if (e.isPartner) return r.createElement(Q, {
                    title: e.title,
                    subtitle: e.subtitle,
                    url: e.url
                });
                var t = e.url ? r.createElement("a", {
                    target: "_blank",
                    href: e.url,
                    className: "c-text-overlay-alt"
                }, e.subtitle) : e.subtitle;
                return r.createElement("div", null, r.createElement(k._21, {
                    ellipsis: !0,
                    color: k.F.Overlay,
                    bold: !0,
                    fontSize: k.L.Size5
                }, e.title), r.createElement(k._21, {
                    ellipsis: !0,
                    color: k.F.OverlayAlt,
                    fontSize: k.L.Size5
                }, t))
            },
            Q = function(e) {
                return r.createElement(k._17, {
                    display: k.H.Flex,
                    flexGrow: 1,
                    flexWrap: k.K.NoWrap,
                    alignItems: k.c.Center
                }, r.createElement(k.U, {
                    display: k.H.Flex,
                    flexDirection: k.J.Column,
                    flexGrow: 1
                }, r.createElement(k._21, {
                    ellipsis: !0,
                    color: k.F.Overlay,
                    bold: !0,
                    fontSize: k.L.Size5
                }, e.title), r.createElement(k._21, {
                    ellipsis: !0,
                    color: k.F.OverlayAlt,
                    fontSize: k.L.Size5
                }, r.createElement("a", {
                    target: "_blank",
                    href: e.url,
                    className: "c-text-overlay-alt"
                }, e.subtitle))), r.createElement(k._17, {
                    display: k.H.Flex,
                    color: k.F.OverlayAlt
                }, r.createElement(k._8, {
                    asset: k._9.Verified
                })))
            },
            $ = function(e) {
                return r.createElement(k._17, {
                    display: k.H.Flex,
                    flexGrow: 1,
                    flexWrap: k.K.NoWrap,
                    alignItems: k.c.Center
                }, r.createElement(k.U, {
                    display: k.H.Flex,
                    flexDirection: k.J.Column,
                    flexGrow: 1
                }, r.createElement(k._21, {
                    ellipsis: !0,
                    color: k.F.Overlay,
                    bold: !0,
                    fontSize: k.L.Size5
                }, e.title), r.createElement(k._21, {
                    ellipsis: !0,
                    color: k.F.OverlayAlt,
                    fontSize: k.L.Size5
                }, e.subtitle)), r.createElement(k.U, {
                    display: k.H.Flex,
                    flexShrink: 0,
                    padding: {
                        left: 1
                    }
                }, r.createElement(k.u, {
                    linkTo: e.url,
                    onClick: e.onClickCTA
                }, e.cta)))
            },
            X = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return l.__extends(t, e), t.prototype.render = function() {
                    var e = this.props.quest,
                        t = null,
                        n = null;
                    switch (e.key) {
                        case Y.c:
                            e.role === V.c.Partner ? t = r.createElement(ne, null) : e.role === V.c.Affiliate && e.completedAt && (t = r.createElement(ae, {
                                questKey: e.key
                            }));
                            break;
                        case Y.b:
                            e.role === V.c.Partner ? t = r.createElement(ne, null) : e.role === V.c.Affiliate ? t = r.createElement(ee, null) : e.role === V.c.None && e.completedAt && (t = r.createElement(te, {
                                channelName: this.props.channelName,
                                questKey: e.key
                            }));
                            break;
                        case Y.a:
                            e.role === V.c.Partner ? t = r.createElement(ne, null) : e.role === V.c.Affiliate ? t = r.createElement(ee, null) : e.completedAt && (t = r.createElement(Z, null))
                    }
                    return t && (n = r.createElement(k._17, {
                        padding: 1,
                        background: k.m.AccentAlt2
                    }, t)), n
                }, t
            }(r.Component),
            Z = function() {
                return r.createElement(J, {
                    title: Object(o.d)("You've started your path as a Twitch streamer", "AchievementsBannerItBegins"),
                    subtitle: Object(o.d)("Which achievement will you complete next?", "AchievementsBannerItBegins")
                })
            },
            ee = function() {
                return r.createElement(J, {
                    title: Object(o.d)("Congratulations! You’re a Twitch Affiliate", "AchievementsBannerPathToAffiliate"),
                    subtitle: Object(o.d)("Learn more", "AchievementsBannerPathToAffiliate"),
                    url: "https://help.twitch.tv/customer/en/portal/topics/1070347-affiliate-program/articles"
                })
            },
            te = function(e) {
                var t = function() {
                    return i(e.questKey)
                };
                return r.createElement($, {
                    title: Object(o.d)("You're eligible to become a Twitch Affiliate", "AchievementsBannerPathToAffiliate"),
                    subtitle: Object(o.d)("Click Get Started to begin", "AchievementsBannerPathToAffiliate"),
                    cta: Object(o.d)("Get Started", "AchievementsBannerPathToAffiliate"),
                    url: "https://www.twitch.tv/" + e.channelName + "/dashboard/settings",
                    onClickCTA: t
                })
            },
            ne = function() {
                return r.createElement(J, {
                    title: Object(o.d)("Congratulations! You’re a Twitch Partner", "AchievementsBannerPathToPartner"),
                    subtitle: Object(o.d)("Learn more", "AchievementsBannerPathToPartner"),
                    url: "https://help.twitch.tv/customer/portal/topics/301854-partner-program/articles",
                    isPartner: !0
                })
            },
            ae = function(e) {
                var t = function() {
                    return i(e.questKey)
                };
                return r.createElement($, {
                    title: Object(o.d)("Apply to become a Twitch Partner today", "AchievementsBannerPathToPartner"),
                    subtitle: Object(o.d)("We usually follow up within 7 business days", "AchievementsBannerPathToPartner"),
                    cta: Object(o.d)("Apply", "AchievementsBannerPathToPartner"),
                    url: "https://www.twitch.tv/partner/signup",
                    onClickCTA: t
                })
            },
            ie = n(1582),
            le = function(e) {
                var t = E({
                        "ach-q-item": !0,
                        "ach-q-item--expanded": e.isActive
                    }),
                    n = r.createElement(k._17, {
                        display: k.H.InlineBlock
                    }, r.createElement(M.a, null)),
                    a = r.createElement("a", {
                        href: e.quest.learnMoreURL,
                        "aria-hidden": !e.isActive,
                        tabIndex: -1,
                        target: "_blank"
                    }, Object(o.d)("Learn more", "AchievementsPathToAffiliate")),
                    i = e.quest.getInstructions(n),
                    l = Object(o.d)("{numCompleted, number} of {numTotal, number}", {
                        numCompleted: e.quest.completedAchievementsCount,
                        numTotal: e.quest.achievements.length
                    }, "AchievementsQuests");
                return r.createElement(k._17, {
                    className: t,
                    position: k._2.Relative,
                    margin: {
                        bottom: 2
                    },
                    elevation: 1,
                    border: !0
                }, r.createElement(k.S, {
                    onClick: e.onHeaderClick
                }, r.createElement(k._17, {
                    className: "ach-q-item__header",
                    display: k.H.Flex,
                    padding: {
                        left: 1,
                        right: 1
                    },
                    borderBottom: !0
                }, r.createElement(k.U, {
                    className: "ach-q-item__info",
                    display: k.H.Flex,
                    flexGrow: 1,
                    flexWrap: k.K.NoWrap,
                    alignItems: k.c.Center
                }, Boolean(e.quest.isComplete) && r.createElement(k.U, {
                    display: k.H.Flex,
                    padding: {
                        left: .5,
                        right: 1
                    }
                }, r.createElement(re, null)), r.createElement(k.U, {
                    display: k.H.Flex,
                    flexGrow: 1
                }, r.createElement(k._21, {
                    className: "ach-q-item__title",
                    type: k._26.H3,
                    color: k.F.Alt,
                    fontSize: k.L.Size3
                }, e.quest.title)), !Boolean(e.quest.isComplete) && r.createElement(k.U, {
                    display: k.H.Flex
                }, r.createElement(k._21, {
                    className: "ach-q-item__label",
                    color: k.F.Alt2,
                    fontSize: k.L.Size5
                }, l))))), r.createElement(X, {
                    quest: e.quest,
                    channelName: e.channelName
                }), r.createElement(k._17, {
                    padding: {
                        top: 1,
                        bottom: .5
                    },
                    background: k.m.Base
                }, e.quest.achievements.map(function(t) {
                    return r.createElement(v.a, {
                        key: t.id,
                        achievement: t,
                        isHidden: !e.isActive
                    }, r.createElement(ie.a, {
                        achievement: t,
                        quest: e.quest
                    }))
                })), r.createElement(k._17, {
                    className: t,
                    display: k.H.Flex,
                    padding: 1,
                    background: k.m.Alt2,
                    borderTop: !0
                }, r.createElement(k.U, {
                    padding: {
                        top: .5,
                        bottom: .5
                    },
                    margin: {
                        left: .5,
                        right: .5
                    }
                }, r.createElement(k._21, {
                    color: k.F.Alt2,
                    fontSize: k.L.Size5,
                    type: k._26.Span
                }, i, " ", a))))
            },
            re = function() {
                return r.createElement(k._8, {
                    asset: k._9.Check,
                    type: k._10.Brand
                })
            },
            ce = function(e) {
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
                return l.__extends(t, e), t.prototype.render = function() {
                    var e = this,
                        t = this.state.userSelectedQuest || this.props.quests[0],
                        n = this.props.quests.map(function(n) {
                            var a = function() {
                                return e.handleActivate(n)
                            };
                            return r.createElement(le, {
                                key: n.id,
                                quest: n,
                                channelName: e.props.channel.name,
                                onHeaderClick: a,
                                isActive: n === t
                            })
                        });
                    return r.createElement(k.U, {
                        fullHeight: !0
                    }, this.props.isLoading ? this.renderPlaceholders() : n)
                }, t.prototype.renderPlaceholders = function() {
                    return [r.createElement(k.U, {
                        margin: {
                            bottom: 2
                        },
                        key: "opened-quest"
                    }, r.createElement(k._1, {
                        height: 450
                    })), r.createElement(k.U, {
                        margin: {
                            bottom: 2
                        },
                        key: "collasped-quest-1"
                    }, r.createElement(k._1, {
                        height: 62
                    })), r.createElement(k.U, {
                        margin: {
                            bottom: 2
                        },
                        key: "collasped-quest-2"
                    }, r.createElement(k._1, {
                        height: 62
                    }))]
                }, t
            }(r.Component),
            oe = {
                "data-test-selector": "title"
            },
            se = {
                "data-test-selector": "subtitle"
            },
            me = {
                "data-test-selector": "dismiss"
            },
            ue = function(e) {
                var t = e.title,
                    n = e.subtitle;
                return r.createElement(k._17, {
                    position: k._2.Relative,
                    padding: 2,
                    textAlign: k._22.Center,
                    className: "ach-sb",
                    elevation: 1,
                    border: !0
                }, r.createElement(j, {
                    confettiCount: 40,
                    infinite: !0
                }), r.createElement(k.U, {
                    margin: {
                        left: 1
                    },
                    position: k._2.Relative,
                    zIndex: k._38.Above,
                    className: "ach-sb__text"
                }, r.createElement(k._21, l.__assign({}, oe, {
                    fontSize: k.L.Size4,
                    bold: !0,
                    ellipsis: !0
                }), t), r.createElement(k._21, l.__assign({}, se, {
                    fontSize: k.L.Size5,
                    color: k.F.Alt2,
                    ellipsis: !0
                }), n)))
            },
            he = function(e) {
                return r.createElement(k._17, {
                    position: k._2.Absolute,
                    margin: {
                        top: 3,
                        x: 4
                    },
                    zIndex: k._38.Above,
                    attachTop: !0,
                    attachLeft: !0,
                    attachRight: !0
                }, r.createElement(k.e, {
                    type: k.i.BounceIn,
                    duration: k.g.Medium,
                    enabled: !0,
                    timing: k.h.EaseInOut
                }, e.children, r.createElement(k.U, {
                    className: "ach-sb__dismiss",
                    position: k._2.Absolute,
                    attachRight: !0,
                    attachTop: !0
                }, r.createElement(k.v, l.__assign({}, me, {
                    ariaLabel: Object(o.d)("Close", "AchievementSpotlightDismiss"),
                    type: k.w.Default,
                    size: k.x.Large,
                    icon: k._9.Close,
                    onClick: e.onDismissSpotlight
                })))))
            },
            pe = {
                src: "https://static-cdn.jtvnw.net/emoticons/v1/135393/3.0",
                alt: "PartyTime"
            },
            de = function() {
                var e = Object(o.d)("Celebrate milestones and track your progress towards becoming an Affiliate or Partner.", "AchievementsSpotlight"),
                    t = Object(o.d)("Learn more", "AchievementsSpotlight");
                return r.createElement(k._17, {
                    padding: 2,
                    className: "ach-sb",
                    display: k.H.Flex,
                    alignItems: k.c.Center,
                    elevation: 1,
                    border: !0
                }, r.createElement(k._17, {
                    display: k.H.Flex,
                    flexDirection: k.J.Row,
                    flexWrap: k.K.NoWrap
                }, r.createElement(k.U, {
                    display: k.H.Flex,
                    flexShrink: 0,
                    alignContent: k.b.Center,
                    alignItems: k.c.Center
                }, r.createElement(k.l, {
                    imageSrc: pe.src,
                    imageAlt: pe.alt,
                    size: 30
                })), r.createElement(k.U, {
                    display: k.H.Flex,
                    margin: {
                        left: 1
                    },
                    className: "ach-sb__text"
                }, r.createElement(k._21, l.__assign({}, oe, {
                    fontSize: k.L.Size4,
                    bold: !0,
                    ellipsis: !0
                }), Object(o.d)("Welcome to Achievements", "AchievementsSpotlight")), r.createElement(k._21, l.__assign({}, se, {
                    fontSize: k.L.Size5,
                    color: k.F.Alt2,
                    ellipsis: !0
                }), e, " ", r.createElement("a", {
                    target: "_blank",
                    href: "https://help.twitch.tv/customer/portal/articles/2877819"
                }, t)))))
            },
            fe = (n(1955), "achievement-spotlights"),
            ge = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.state = {
                        didDismiss: !1
                    }, n.dismissedSpotlights = {}, n.handleDismissSpotlight = function() {
                        n.setState({
                            didDismiss: !0
                        }, n.handleViewSpotlight)
                    }, n.handleViewSpotlight = function() {
                        var e = n.dismissedSpotlights[n.spotlightKey],
                            t = "number" == typeof e ? e + 1 : 1,
                            a = l.__assign({}, n.dismissedSpotlights, (i = {}, i[n.spotlightKey] = t, i));
                        return o.k.set(fe, a), t;
                        var i
                    }, n.dismissedSpotlights = o.k.get(fe, {}), n
                }
                return l.__extends(t, e), t.prototype.render = function() {
                    var e = null;
                    if (!this.props.isLoading && !this.currentSpotlightWasDismissed) {
                        this.handleViewSpotlight();
                        var t = void 0;
                        switch (this.bannerType) {
                            case Y.c:
                                t = r.createElement(ve, null);
                                break;
                            case Y.b:
                                t = r.createElement(be, null);
                                break;
                            case Y.a:
                                t = r.createElement(Ee, null);
                                break;
                            default:
                                t = r.createElement(de, null)
                        }
                        e = r.createElement(he, {
                            onDismissSpotlight: this.handleDismissSpotlight
                        }, t)
                    }
                    return r.createElement(k.U, {
                        fullHeight: !0
                    }, e, this.props.children(Boolean(e)))
                }, Object.defineProperty(t.prototype, "spotlightKey", {
                    get: function() {
                        return this.props.channelName + "-" + this.bannerType
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "bannerType", {
                    get: function() {
                        var e = "",
                            t = "",
                            n = "";
                        return this.props.quests.forEach(function(a) {
                            a.completedAt && (a.key === Y.c && a.role === V.c.Affiliate && (e = Y.c), a.key === Y.b && a.role === V.c.None && (t = Y.b), a.key === Y.a && a.role === V.c.None && (n = Y.a))
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
            }(r.PureComponent),
            ve = function() {
                var e = r.createElement(_e, {
                        title: Object(o.d)("Path to Partner", "AchievementsSpotlightPathToPartner")
                    }),
                    t = Object(o.d)("You've completed {achievementTitle}", {
                        achievementTitle: e
                    }, "AchievementsSpotlightPathToPartner");
                return a({
                    type: "quest",
                    questKey: Y.c
                }), r.createElement(ue, {
                    title: t,
                    subtitle: Object(o.d)("Apply to become a Twitch Partner today", "AchievementsSpotlightPathToPartner")
                })
            },
            be = function() {
                var e = r.createElement(_e, {
                        title: Object(o.d)("Path to Affiliate", "AchievementsSpotlightPathToAffiliate")
                    }),
                    t = Object(o.d)("You've completed {achievementTitle}", {
                        achievementTitle: e
                    }, "AchievementsSpotlightPathToAffiliate");
                return a({
                    type: "quest",
                    questKey: Y.b
                }), r.createElement(ue, {
                    title: t,
                    subtitle: Object(o.d)("You're eligible to become a Twitch Affiliate", "AchievementsSpotlightPathToAffiliate")
                })
            },
            Ee = function() {
                var e = r.createElement(_e, {
                        title: Object(o.d)("It Begins", "AchievementsSpotlightItBegins")
                    }),
                    t = Object(o.d)("You've completed {achievementTitle}", {
                        achievementTitle: e
                    }, "AchievementsSpotlightItBegins");
                return a({
                    type: "quest",
                    questKey: Y.a
                }), r.createElement(ue, {
                    title: t,
                    subtitle: Object(o.d)("Which achievement will you complete next?", "AchievementsSpotlightItBegins")
                })
            },
            _e = function(e) {
                var t = e.title;
                return r.createElement(k._21, {
                    type: k._26.Span,
                    color: k.F.OverlayAlt
                }, t)
            },
            ye = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return l.__extends(t, e), t.prototype.componentDidMount = function() {
                    o.n.setPageTitle(Object(o.d)("Achievements", "DashboardAchievementsPage"))
                }, t.prototype.render = function() {
                    if (void 0 === this.props.data.channel) return null;
                    var e = d.a.fromChannelData(this.props.data.channel),
                        t = function(t) {
                            return r.createElement(ge, l.__assign({}, t, {
                                channelName: e.name
                            }), function(n) {
                                return r.createElement(G, {
                                    isSpotlightShown: n,
                                    left: r.createElement(ce, {
                                        quests: t.quests,
                                        channel: e,
                                        isLoading: t.isLoading
                                    }),
                                    right: r.createElement(D, {
                                        achievements: t.achievements,
                                        isLoading: t.isLoading
                                    })
                                })
                            })
                        };
                    return r.createElement(p.a, {
                        channel: e,
                        render: t
                    })
                }, t
            }(r.Component),
            Ae = Object(h.c)("AchievementsPage", {
                destination: m.a.ChannelDashboardAchievements,
                autoReportInteractive: !0
            })(Object(s.a)({
                location: u.PageviewLocation.DashboardAchievements
            })(ye)),
            Se = Object(c.graphql)(f, {
                options: function(e) {
                    return {
                        variables: {
                            channelName: e.channelName
                        }
                    }
                }
            })(Ae);
        n.d(t, "AchievementsPageComponent", function() {
            return ye
        }), n.d(t, "AchievementsPage", function() {
            return Se
        })
    }
});
//# sourceMappingURL=pages.dashboard.achievements-1c8acc2f921c441bf7a53c788021d00f.js.map