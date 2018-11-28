(window.webpackJsonp = window.webpackJsonp || []).push([
    [171], {
        FzuF: function(e, t, n) {},
        dtaG: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "StandaloneGetAutoModProperties"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "channelLogin"
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
                        }
                    }],
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
                                        value: "roles"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "isStaff"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "isSiteAdmin"
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
                                        value: "channelLogin"
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
                                        value: "autoModProperties"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "aggressiveLevel"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "identityLevel"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "profanityLevel"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "sexualLevel"
                                            },
                                            arguments: [],
                                            directives: []
                                        }]
                                    }
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "blockedTerms"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "phrases"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "createdAt"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "updatedAt"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "expiresAt"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "category"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "isModEditable"
                                            },
                                            arguments: [],
                                            directives: []
                                        }]
                                    }
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "permittedTerms"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "phrases"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "createdAt"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "updatedAt"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "expiresAt"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "category"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "isModEditable"
                                            },
                                            arguments: [],
                                            directives: []
                                        }]
                                    }
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "chatSettings"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "isOptedOutOfGlobalBannedWordsList"
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
                                                value: "isModerator"
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
                    end: 454
                }
            };
            n.loc.source = {
                body: "query StandaloneGetAutoModProperties($channelLogin: String!) {\ncurrentUser{\nid\nroles {\nisStaff\nisSiteAdmin\n}\n}\nuser(login: $channelLogin) {\nid\nautoModProperties {\naggressiveLevel\nidentityLevel\nprofanityLevel\nsexualLevel\n}\nblockedTerms {\nphrases\ncreatedAt\nupdatedAt\nexpiresAt\ncategory\nisModEditable\n}\npermittedTerms {\nphrases\ncreatedAt\nupdatedAt\nexpiresAt\ncategory\nisModEditable\n}\nchatSettings{\nisOptedOutOfGlobalBannedWordsList\n}\nself {\nisModerator\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        hE0z: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "mutation",
                    name: {
                        kind: "Name",
                        value: "StandaloneUpdateAutoModProperties"
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
                                    value: "UpdateAutoModPropertiesInput"
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
                                value: "updateAutoModProperties"
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
                                        value: "autoModProperties"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "aggressiveLevel"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "identityLevel"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "profanityLevel"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "sexualLevel"
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
                    end: 207
                }
            };
            n.loc.source = {
                body: "mutation StandaloneUpdateAutoModProperties($input: UpdateAutoModPropertiesInput!) {\nupdateAutoModProperties(input: $input) {\nautoModProperties {\naggressiveLevel\nidentityLevel\nprofanityLevel\nsexualLevel\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        hfrd: function(e, t, n) {
            "use strict";
            n.r(t);
            var a = n("mrSG"),
                i = n("q1tI"),
                o = n("fvjX"),
                r = n("V+GM"),
                l = n("NvVO"),
                s = n("2xye"),
                d = n("GnwI"),
                c = n("/MKj"),
                u = n("yR8l"),
                m = n("aCAx"),
                p = n("kRBY"),
                g = n("/7QA"),
                v = n("cZKs"),
                S = n("Ue10"),
                h = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        return i.createElement(S.Fb, {
                            background: S.r.Base,
                            padding: {
                                x: 2,
                                y: 1
                            }
                        }, i.createElement(S.Fb, {
                            background: S.r.Base
                        }, i.createElement(S.Ya, {
                            display: S.X.Flex,
                            justifyContent: S.Xa.Center,
                            textAlign: S.Sb.Center,
                            padding: 1
                        }, i.createElement(S.W, {
                            bold: !0,
                            fontSize: S.Ca.Size4
                        }, Object(g.d)("AutoMod Demo", "AutoModSettingsModal"))), i.createElement(S.Fb, {
                            padding: {
                                top: 2
                            },
                            borderTop: !0
                        }, i.createElement(S.S, {
                            src: "https://s.jtvnw.net/jtv_user_pictures/hosted_images/automod_onboarding.gif",
                            alt: Object(g.d)("Automod demo animation", "AutoModSettingsModal")
                        }))), i.createElement(v.a, null))
                    }, t
                }(i.Component),
                b = n("u5aL"),
                k = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            menuItemsVisible: !1
                        }, t.menuItemClicked = function(e) {
                            var n = Number(e.currentTarget.dataset.newLevel);
                            t.props.onLevelChange(t.props.category, n), t.setState({
                                menuItemsVisible: !t.state.menuItemsVisible
                            })
                        }, t.toggleCategoryMenu = function() {
                            t.setState({
                                menuItemsVisible: !t.state.menuItemsVisible
                            })
                        }, t.hideCategoryMenu = function() {
                            t.setState({
                                menuItemsVisible: !1
                            })
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        return i.createElement(S.Ya, {
                            attachRight: !0,
                            padding: {
                                left: 3
                            },
                            className: "auto-mod-wrapper__category-display"
                        }, i.createElement(b.a, {
                            onClickOut: this.hideCategoryMenu
                        }, i.createElement(S.Ya, {
                            padding: {
                                top: .5
                            }
                        }, i.createElement(S.z, {
                            dropdown: !0,
                            type: S.F.Hollow,
                            onClick: this.toggleCategoryMenu,
                            fullWidth: !0
                        }, this.menuOption(this.props.categoryLevel)), this.menuItems())))
                    }, t.prototype.menuItems = function() {
                        return this.state.menuItemsVisible ? i.createElement(S.Fb, {
                            border: !0,
                            background: S.r.Alt,
                            position: S.kb.Absolute,
                            zIndex: S.jc.Above
                        }, this.renderMenuItem(0), this.renderMenuItem(6), this.renderMenuItem(5), this.renderMenuItem(4), this.renderMenuItem(3)) : ""
                    }, t.prototype.renderMenuItem = function(e) {
                        return i.createElement(S.Va, {
                            type: S.Wa.Alpha,
                            selected: this.props.categoryLevel === e,
                            "data-new-level": e,
                            onClick: this.menuItemClicked
                        }, i.createElement(S.Ya, {
                            padding: {
                                y: .5,
                                x: 1
                            }
                        }, this.menuOption(e)))
                    }, t.prototype.getNumShields = function(e) {
                        switch (e) {
                            case 6:
                                return 1;
                            case 5:
                                return 2;
                            case 4:
                                return 3;
                            case 3:
                            case 2:
                                return 4;
                            default:
                                return 0
                        }
                    }, t.prototype.menuOption = function(e) {
                        for (var t = [Object(g.d)("No filtering", "StandaloneAutoModSettings"), Object(g.d)("Less filtering", "StandaloneAutoModSettings"), Object(g.d)("Some filtering", "StandaloneAutoModSettings"), Object(g.d)("More filtering", "StandaloneAutoModSettings"), Object(g.d)("Most filtering", "StandaloneAutoModSettings")], n = this.getNumShields(e), a = [], o = 0; o < n; o++) a.push(i.createElement(S.Ya, {
                            key: "shield" + o,
                            display: S.X.InlineFlex,
                            padding: {
                                right: .5
                            }
                        }, i.createElement(S.tb, {
                            asset: S.ub.Automod,
                            height: 13,
                            width: 13,
                            type: S.vb.Alt2
                        })));
                        var r = t[n];
                        return i.createElement(S.Ya, {
                            display: S.X.Flex,
                            padding: .5
                        }, a, i.createElement(S.W, {
                            align: S.gc.Middle,
                            color: S.O.Alt2
                        }, r))
                    }, t
                }(i.Component),
                y = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        return i.createElement(S.Ya, {
                            attachLeft: !0,
                            className: "auto-mod-wrapper__category-header"
                        }, i.createElement(S.Ya, {
                            padding: {
                                bottom: 1
                            }
                        }, i.createElement("strong", null, this.props.category), i.createElement(S.W, {
                            color: S.O.Alt2,
                            type: S.Wb.P
                        }, this.props.description)))
                    }, t
                }(i.Component),
                f = function(e) {
                    if (e.isBlank || 0 === e.level || !e.categories) return null;
                    var t = Object(g.d)("Characteristics", "StandaloneAutoModSettings"),
                        n = Object(g.d)("Race, religion, gender, etc.", "StandaloneAutoModSettings"),
                        a = Object(g.d)("Sexual content", "StandaloneAutoModSettings"),
                        o = Object(g.d)("Sexual acts and anatomy", "StandaloneAutoModSettings"),
                        r = Object(g.d)("Hostility", "StandaloneAutoModSettings"),
                        l = Object(g.d)("Provocation and bullying", "StandaloneAutoModSettings"),
                        s = Object(g.d)("Profanity", "StandaloneAutoModSettings"),
                        d = Object(g.d)("Swear words, &*^!#@%*", "StandaloneAutoModSettings");
                    return i.createElement(S.Fb, {
                        padding: 2,
                        "data-test-selector": "automod-categories-container"
                    }, i.createElement(S.Ya, {
                        display: S.X.Flex
                    }, i.createElement(y, {
                        category: t,
                        description: n
                    }), i.createElement(k, {
                        category: 1,
                        categoryLevel: e.categories[1],
                        onLevelChange: e.handleCategoryLevelChange
                    })), i.createElement(S.Ya, {
                        display: S.X.Flex
                    }, i.createElement(y, {
                        category: a,
                        description: o
                    }), i.createElement(k, {
                        category: 3,
                        categoryLevel: e.categories[3],
                        onLevelChange: e.handleCategoryLevelChange
                    })), i.createElement(S.Ya, {
                        display: S.X.Flex
                    }, i.createElement(y, {
                        category: r,
                        description: l
                    }), i.createElement(k, {
                        category: 0,
                        categoryLevel: e.categories[0],
                        onLevelChange: e.handleCategoryLevelChange
                    })), i.createElement(S.Ya, {
                        display: S.X.Flex
                    }, i.createElement(y, {
                        category: s,
                        description: d
                    }), i.createElement(k, {
                        category: 2,
                        categoryLevel: e.categories[2],
                        onLevelChange: e.handleCategoryLevelChange
                    })))
                },
                A = function(e) {
                    return e.isBlank ? i.createElement(S.Fb, {
                        padding: {
                            x: 2,
                            y: 1
                        }
                    }, i.createElement(S.W, null, Object(g.d)("You can adjust how much moderation you'd like for your channel.", "StandaloneAutoModSettings")), i.createElement(S.U, {
                        onClick: e.onSeeHowRulesetsWorkClick
                    }, Object(g.d)("See how rulesets work", "StandaloneAutoModSettings"))) : i.createElement(S.Ya, null, i.createElement(S.Fb, {
                        padding: {
                            y: 1,
                            x: 2
                        },
                        display: S.X.Flex
                    }, i.createElement("a", {
                        href: "https://help.twitch.tv/customer/portal/articles/2662186-how-to-use-automod",
                        target: "_blank"
                    }, Object(g.d)("Learn more on our help page", "StandaloneAutoModSettings")), i.createElement(S.Ya, {
                        display: S.X.Inline,
                        padding: {
                            x: 1
                        }
                    }, "•"), i.createElement(S.U, {
                        onClick: e.onViewDemoClick
                    }, Object(g.d)("View demo", "StandaloneAutoModSettings"))))
                },
                M = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.handleSliderMove = function(e) {
                            var n = Number(e.currentTarget.value);
                            t.props.onLevelChange(n)
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        var e = Object(g.d)("Automod is off", "StandaloneAutoModSettings"),
                            t = Object(g.d)("A Little Moderation", "StandaloneAutoModSettings"),
                            n = Object(g.d)("Some Moderation", "StandaloneAutoModSettings"),
                            a = Object(g.d)("More Moderation", "StandaloneAutoModSettings"),
                            o = Object(g.d)("A Lot of Moderation", "StandaloneAutoModSettings"),
                            r = Object(g.d)("Your AutoMod setting:", "StandaloneAutoModSettings"),
                            l = [e, t, n, a, o];
                        if (this.props.isBlank) return i.createElement(S.Fb, {
                            padding: {
                                x: 2
                            },
                            "data-test-selector": "slider-blank-state-container"
                        }, i.createElement(S.Ya, {
                            display: S.X.Flex
                        }, i.createElement(S.Ya, {
                            padding: {
                                right: .5
                            }
                        }, Object(g.d)("Level 0", "StandaloneAutoModSettings")), i.createElement(S.W, {
                            color: S.O.Alt2,
                            type: S.Wb.Strong
                        }, e)), i.createElement(S.Ya, {
                            padding: {
                                top: 2
                            }
                        }, i.createElement(S.S, {
                            src: "https://s.jtvnw.net/jtv_user_pictures/hosted_images/automod_onboarding.gif",
                            alt: Object(g.d)("Automod demo animation", "StandaloneAutoModSettings")
                        })), i.createElement(S.Fb, null, i.createElement(S.Fb, {
                            padding: {
                                y: 1
                            }
                        }, i.createElement(S.z, {
                            onClick: this.props.onOnboardingButtonClick,
                            state: S.E.Default
                        }, Object(g.d)("Turn On Automod", "StandaloneAutoModSettings")))));
                        if (this.props.isCustom) return i.createElement(S.Fb, {
                            padding: {
                                y: 1,
                                x: 2
                            }
                        }, i.createElement(S.Ja, {
                            gutterSize: S.Ka.Small
                        }, i.createElement(S.P, {
                            cols: 6
                        }, i.createElement(S.Ya, {
                            display: S.X.Flex,
                            fullHeight: !0,
                            alignItems: S.f.Center
                        }, i.createElement(S.W, {
                            color: S.O.Alt2,
                            type: S.Wb.Span
                        }, r), i.createElement(S.Ya, {
                            padding: {
                                left: .5
                            },
                            display: S.X.InlineFlex
                        }, i.createElement(S.W, {
                            color: S.O.Alt2,
                            type: S.Wb.Strong
                        }, Object(g.d)("Custom", "StandaloneAutoModSettings"))))), i.createElement(S.P, {
                            cols: 5
                        }, i.createElement(S.z, {
                            type: S.F.Hollow,
                            onClick: this.props.onRevertCustomButtonClick
                        }, Object(g.d)("Revert to defaults", "StandaloneAutoModSettings")))));
                        if (!this.props.level && 0 !== this.props.level) return null;
                        var s = this.props.level,
                            d = l[s],
                            c = Object(g.d)("Level {lvl,number}", {
                                lvl: s
                            }, "StandaloneAutoModSettings");
                        return i.createElement(S.Fb, {
                            padding: {
                                x: 2
                            }
                        }, i.createElement(S.Ya, {
                            padding: {
                                bottom: .5
                            }
                        }, i.createElement(S.W, {
                            color: S.O.Alt2,
                            type: S.Wb.P
                        }, r)), i.createElement(S.rb, {
                            min: 0,
                            max: 4,
                            step: 1,
                            value: String(s),
                            onChange: this.handleSliderMove,
                            "data-test-selector": "auto-mod-slider"
                        }), i.createElement(S.Ya, {
                            display: S.X.Flex
                        }, i.createElement(S.Ya, {
                            padding: {
                                right: .5
                            }
                        }, c), i.createElement(S.W, {
                            color: S.O.Alt2,
                            type: S.Wb.Strong
                        }, d)), i.createElement(S.Fb, {
                            background: S.r.Base,
                            padding: 1,
                            className: "auto-mod-wrapper__carat",
                            position: S.kb.Relative,
                            borderRight: !0,
                            borderBottom: !0
                        }))
                    }, t
                }(i.Component),
                E = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            isCustom: !1,
                            submissionState: S.E.Default,
                            displayTurnedOnAutomodConfirmation: !1,
                            cancelDisabled: !0,
                            isUnsetInBackend: !0,
                            isDataLoaded: !1,
                            initialState: {
                                isCustom: !1
                            }
                        }, t.levelToIdentity = [0, 5, 5, 4, 4], t.levelToSex = [0, 0, 5, 4, 4], t.levelToAggro = [0, 0, 4, 4, 2], t.levelToProfanity = [0, 0, 0, 0, 4], t.recentSuccessfulMutation = 0, t.showAutoModCategoriesAtLevelZero = function() {
                            var e = [t.levelToAggro[0], t.levelToIdentity[0], t.levelToProfanity[0], t.levelToSex[0]];
                            t.setState({
                                level: 0,
                                categories: e,
                                isCustom: !1,
                                cancelDisabled: !1
                            })
                        }, t.showAutoModCategories = function() {
                            var e = [t.levelToAggro[1], t.levelToIdentity[1], t.levelToProfanity[1], t.levelToSex[1]];
                            t.setState({
                                level: 1,
                                categories: e,
                                isCustom: !1,
                                cancelDisabled: !1,
                                displayTurnedOnAutomodConfirmation: !0
                            })
                        }, t.handleLevelChange = function(e) {
                            var n = [t.levelToAggro[e], t.levelToIdentity[e], t.levelToProfanity[e], t.levelToSex[e]];
                            t.setState({
                                level: e,
                                categories: n,
                                cancelDisabled: !1
                            })
                        }, t.updateAutoModProperties = function() {
                            t.state.categories && t.props.data.user && (t.setState({
                                submissionState: S.E.Loading
                            }), t.props.onUpdateAutoModProperties({
                                variables: {
                                    input: {
                                        channelID: t.props.data.user.id,
                                        aggressiveLevel: t.state.categories[0],
                                        identityLevel: t.state.categories[1],
                                        profanityLevel: t.state.categories[2],
                                        sexualLevel: t.state.categories[3]
                                    }
                                }
                            }).then(function() {
                                t.handleSuccessfulMutation()
                            }))
                        }, t.resetAutoModProperties = function() {
                            t.setState({
                                categories: t.state.initialState.categories,
                                isCustom: t.state.initialState.isCustom,
                                submissionState: S.E.Default,
                                level: t.state.initialState.level,
                                cancelDisabled: !0
                            })
                        }, t.handleCategoryLevelChange = function(e, n) {
                            if (t.state.categories) {
                                var a = t.state.categories.slice();
                                a[e] = n, t.setState({
                                    isCustom: !0,
                                    categories: a,
                                    cancelDisabled: !1
                                })
                            }
                        }, t.handleOpenDemoModal = function() {
                            t.props.showAutomodDemoModal({})
                        }, t.closeTurnedOnAutomodConfirmation = function() {
                            t.setState({
                                displayTurnedOnAutomodConfirmation: !1
                            })
                        }, t.handleSuccessfulMutation = function() {
                            var e = {
                                level: t.state.level,
                                categories: t.state.categories,
                                isCustom: -1 === t.state.level
                            };
                            t.setState({
                                submissionState: S.E.Success,
                                cancelDisabled: !0,
                                initialState: e
                            }), clearTimeout(t.recentSuccessfulMutation), t.recentSuccessfulMutation = setTimeout(t.handleSuccessfulMutationExpired, 3e3)
                        }, t.handleSuccessfulMutationExpired = function() {
                            t.setState({
                                submissionState: S.E.Default
                            })
                        }, t.revertToSlider = function() {
                            var e = [t.levelToAggro[1], t.levelToIdentity[1], t.levelToProfanity[1], t.levelToSex[1]];
                            t.setState({
                                isCustom: !1,
                                level: 1,
                                categories: e,
                                cancelDisabled: !1
                            })
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive()
                    }, t.prototype.componentWillReceiveProps = function(e) {
                        e.data && !e.data.loading && !e.data.error && e.data.user && (this.state.isDataLoaded || (this.hasAutoModProperties(e) ? this.initializeStateFromBackend(e) : this.setState({
                            isDataLoaded: !0
                        })))
                    }, t.prototype.render = function() {
                        if (!this.props.data || this.props.data.loading || this.props.data.error || null === this.props.data.user) return i.createElement(S.Fb, {
                            "data-test-selector": "automod-placeholder-container"
                        });
                        if (!this.hasAutoModDashboardAccess()) return i.createElement(S.Fb, {
                            margin: {
                                top: 2
                            },
                            color: S.O.Alt2,
                            textAlign: S.Sb.Center,
                            "data-test-selector": "automod-placeholder-container"
                        }, i.createElement(S.W, {
                            type: S.Wb.H3,
                            italic: !0
                        }, Object(g.d)("You do not have permission to access this dashboard.", "StandaloneAutoModSettings")));
                        var e = this.isBlankState();
                        return i.createElement(S.Fb, {
                            border: !0
                        }, i.createElement(S.Fb, {
                            background: S.r.Base,
                            padding: {
                                left: 1,
                                right: 3,
                                bottom: 2,
                                top: 2
                            },
                            borderBottom: !0
                        }, i.createElement(S.Ya, {
                            display: S.X.Flex
                        }, i.createElement(S.tb, {
                            asset: S.ub.AngleLeft
                        }), this.AutomodTableHeader())), this.state.displayTurnedOnAutomodConfirmation && i.createElement(S.Fb, {
                            background: S.r.Base,
                            padding: {
                                y: 1,
                                x: 2
                            }
                        }, i.createElement(S.Oa, {
                            background: S.r.Alt2,
                            closeButtonAriaLabel: Object(g.d)("close", "StandaloneAutoModSettings"),
                            closeButtonOnClick: this.closeTurnedOnAutomodConfirmation,
                            description: Object(g.d)("AutoMod is now set to Level 1. You can drag the slider to view other levels.", "StandaloneAutoModSettings"),
                            narrow: !0,
                            title: Object(g.d)("Successfully turned on AutoMod!", "StandaloneAutoModSettings"),
                            type: S.Pa.Success
                        })), i.createElement(S.Fb, {
                            background: S.r.Base,
                            padding: 3
                        }, i.createElement(S.Ya, {
                            display: S.X.Flex
                        }, i.createElement(S.Ya, null, i.createElement(S.W, {
                            color: S.O.Alt2,
                            type: S.Wb.Strong
                        }, Object(g.d)("Your AutoMod Setting:", "StandaloneAutoModSettings"))), i.createElement(S.Ya, {
                            className: "auto-mod-wrapper__right-column"
                        }, i.createElement(M, {
                            isBlank: e,
                            isCustom: this.state.isCustom,
                            level: this.state.level,
                            onLevelChange: this.handleLevelChange,
                            onOnboardingButtonClick: this.showAutoModCategories,
                            onRevertCustomButtonClick: this.revertToSlider
                        }), i.createElement(S.Fb, {
                            borderBottom: !0
                        }), i.createElement(f, {
                            isBlank: e,
                            level: this.state.level,
                            categories: this.state.categories,
                            handleCategoryLevelChange: this.handleCategoryLevelChange
                        }), i.createElement(S.Fb, {
                            borderBottom: !0
                        }), i.createElement(A, {
                            isBlank: e,
                            onSeeHowRulesetsWorkClick: this.showAutoModCategoriesAtLevelZero,
                            onViewDemoClick: this.handleOpenDemoModal
                        })))), i.createElement(S.Fb, {
                            display: S.X.Flex,
                            padding: {
                                y: 1,
                                left: 3
                            },
                            background: S.r.Alt2
                        }, i.createElement(S.Ya, {
                            padding: {
                                right: .5
                            }
                        }, i.createElement(S.z, {
                            onClick: this.updateAutoModProperties,
                            state: this.state.submissionState
                        }, Object(g.d)("Save", "StandaloneAutoModSettings"))), i.createElement(S.z, {
                            onClick: this.resetAutoModProperties,
                            type: S.F.Text,
                            disabled: this.state.cancelDisabled
                        }, Object(g.d)("Cancel", "StandaloneAutoModSettings"))))
                    }, t.prototype.isBlankState = function() {
                        return !this.state.categories && !this.state.level
                    }, t.prototype.AutomodTableHeader = function() {
                        var e = Object(g.d)("AutoMod", "StandaloneAutoModSettings"),
                            t = Object(g.d)("Automatically hold risky messages for moderators to review.", "StandaloneAutoModSettings");
                        return i.createElement(S.G, {
                            row: !0
                        }, i.createElement(S.Ya, {
                            padding: {
                                y: 1,
                                x: 2
                            }
                        }, i.createElement(S.Fb, {
                            className: "auto-mod-wrapper__shield",
                            padding: {
                                y: .5,
                                x: .5
                            },
                            display: S.X.Flex,
                            color: S.O.Overlay
                        }, i.createElement(S.tb, {
                            asset: S.ub.Automod,
                            type: S.vb.Inherit
                        }))), i.createElement(S.Ya, {
                            padding: {
                                y: 1,
                                right: 2
                            }
                        }, i.createElement(S.W, {
                            fontSize: S.Ca.Size4,
                            bold: !0
                        }, e), i.createElement(S.W, {
                            fontSize: S.Ca.Size7,
                            color: S.O.Alt2
                        }, t)))
                    }, t.prototype.determineLevel = function(e) {
                        for (var t in [0, 1, 2, 3, 4])
                            if (e[0] === this.levelToAggro[t] && e[1] === this.levelToIdentity[t] && e[2] === this.levelToProfanity[t] && e[3] === this.levelToSex[t]) return Number(t);
                        return -1
                    }, t.prototype.hasAutoModDashboardAccess = function() {
                        return !!(this.props.data.user && this.props.data.user.self && this.props.data.currentUser && this.props.data.currentUser.roles) && (this.props.data.user.self.isModerator || this.props.data.currentUser.roles.isStaff || this.props.data.currentUser.roles.isSiteAdmin || this.props.data.user.id === this.props.data.currentUser.id)
                    }, t.prototype.initializeStateFromBackend = function(e) {
                        if (e.data.user && e.data.user.autoModProperties) {
                            var t = [e.data.user.autoModProperties.aggressiveLevel, e.data.user.autoModProperties.identityLevel, e.data.user.autoModProperties.profanityLevel, e.data.user.autoModProperties.sexualLevel],
                                n = this.determineLevel(t),
                                a = -1 === n,
                                i = {
                                    level: n,
                                    categories: t,
                                    isCustom: a
                                };
                            this.setState({
                                categories: t,
                                isCustom: a,
                                level: n,
                                initialState: i,
                                isDataLoaded: !0
                            })
                        }
                    }, t.prototype.hasAutoModProperties = function(e) {
                        return e.data.user ? e.data.user.autoModProperties : null
                    }, t
                }(i.Component),
                C = n("dtaG"),
                O = n("hE0z");
            var F = Object(o.compose)(Object(c.connect)(function(e) {
                    return {
                        isLoggedIn: Object(p.f)(e)
                    }
                }, function(e) {
                    return Object(o.bindActionCreators)({
                        showAutomodDemoModal: function(e) {
                            var t = a.__rest(e, []);
                            return Object(m.d)(h, t)
                        }
                    }, e)
                }), Object(u.a)(C, {
                    options: function(e) {
                        return {
                            variables: {
                                channelLogin: e.channelLogin
                            },
                            fetchPolicy: "cache-and-network"
                        }
                    },
                    skip: function(e) {
                        return !e.isLoggedIn
                    }
                }), Object(u.a)(O, {
                    name: "onUpdateAutoModProperties"
                }), Object(d.b)("AutomodControls"))(E),
                L = n("IFXb"),
                N = (n("FzuF"), function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        return i.createElement(L.a, null, i.createElement(S.Fb, {
                            className: "auto-mod-wrapper",
                            padding: {
                                y: 3
                            }
                        }, i.createElement(F, {
                            channelLogin: this.props.match.params.channelLogin
                        })))
                    }, t
                }(i.Component)),
                x = Object(o.compose)(Object(d.b)("AutomodPage", {
                    autoReportInteractive: !0,
                    destination: l.a.DashboardSettingsModerationAutomod
                }), Object(r.a)({
                    location: s.PageviewLocation.DashboardSettingsModerationAutomod
                }))(N);
            n.d(t, "AutomodPage", function() {
                return x
            })
        }
    }
]);