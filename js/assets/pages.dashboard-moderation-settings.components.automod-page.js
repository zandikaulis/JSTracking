(window.webpackJsonp = window.webpackJsonp || []).push([
    [169], {
        FzuF: function(e, t, n) {},
        K1HF: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "GetAutoModProperties"
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
                    end: 444
                }
            };
            n.loc.source = {
                body: "query GetAutoModProperties($channelLogin: String!) {\ncurrentUser{\nid\nroles {\nisStaff\nisSiteAdmin\n}\n}\nuser(login: $channelLogin) {\nid\nautoModProperties {\naggressiveLevel\nidentityLevel\nprofanityLevel\nsexualLevel\n}\nblockedTerms {\nphrases\ncreatedAt\nupdatedAt\nexpiresAt\ncategory\nisModEditable\n}\npermittedTerms {\nphrases\ncreatedAt\nupdatedAt\nexpiresAt\ncategory\nisModEditable\n}\nchatSettings{\nisOptedOutOfGlobalBannedWordsList\n}\nself {\nisModerator\n}\n}\n}",
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
            var i = n("mrSG"),
                a = n("q1tI"),
                o = n("fvjX"),
                r = n("V+GM"),
                s = n("NvVO"),
                l = n("2xye"),
                d = n("GnwI"),
                c = n("xE3M"),
                u = n("Ue10"),
                m = (n("FzuF"), function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        return a.createElement(u.Eb, {
                            className: "auto-mod-wrapper",
                            padding: {
                                y: 3
                            }
                        }, a.createElement(c.a, {
                            channelLogin: this.props.match.params.channelLogin
                        }))
                    }, t
                }(a.Component)),
                p = Object(o.compose)(Object(d.b)("AutomodPage", {
                    autoReportInteractive: !0,
                    destination: s.a.DashboardSettingsModerationAutomod
                }), Object(r.a)({
                    location: l.PageviewLocation.DashboardSettingsModerationAutomod
                }))(m);
            n.d(t, "AutomodPage", function() {
                return p
            })
        },
        hxCz: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "mutation",
                    name: {
                        kind: "Name",
                        value: "UpdateAutoModProperties"
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
                    end: 197
                }
            };
            n.loc.source = {
                body: "mutation UpdateAutoModProperties($input: UpdateAutoModPropertiesInput!) {\nupdateAutoModProperties(input: $input) {\nautoModProperties {\naggressiveLevel\nidentityLevel\nprofanityLevel\nsexualLevel\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        xE3M: function(e, t, n) {
            "use strict";
            var i = n("/MKj"),
                a = n("fvjX"),
                o = n("yR8l"),
                r = n("kRBY"),
                s = n("GnwI"),
                l = n("mrSG"),
                d = n("q1tI"),
                c = n("/7QA"),
                u = n("u5aL"),
                m = n("Ue10"),
                p = function(e) {
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
                    return l.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        return d.createElement(m.P, {
                            cols: 6
                        }, d.createElement(u.a, {
                            onClickOut: this.hideCategoryMenu
                        }, d.createElement(m.Xa, {
                            padding: {
                                top: .5
                            }
                        }, d.createElement(m.z, {
                            dropdown: !0,
                            type: m.F.Hollow,
                            onClick: this.toggleCategoryMenu
                        }, this.menuOption(this.props.categoryLevel)), this.menuItems())))
                    }, t.prototype.menuItems = function() {
                        return this.state.menuItemsVisible ? d.createElement(m.Eb, {
                            border: !0,
                            background: m.r.Alt,
                            position: m.jb.Absolute,
                            zIndex: m.ic.Above
                        }, this.renderMenuItem(0), this.renderMenuItem(6), this.renderMenuItem(5), this.renderMenuItem(4), this.renderMenuItem(3)) : ""
                    }, t.prototype.renderMenuItem = function(e) {
                        return d.createElement(m.Ua, {
                            type: m.Va.Alpha,
                            selected: this.props.categoryLevel === e,
                            "data-new-level": e,
                            onClick: this.menuItemClicked
                        }, d.createElement(m.Xa, {
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
                        for (var t = [Object(c.d)("No filtering", "AutoModSettings"), Object(c.d)("Less filtering", "AutoModSettings"), Object(c.d)("Some filtering", "AutoModSettings"), Object(c.d)("More filtering", "AutoModSettings"), Object(c.d)("Most filtering", "AutoModSettings")], n = this.getNumShields(e), i = [], a = 0; a < n; a++) i.push(d.createElement(m.Xa, {
                            key: "shield" + a,
                            display: m.X.InlineFlex,
                            padding: {
                                right: .5
                            }
                        }, d.createElement(m.sb, {
                            asset: m.tb.Automod,
                            height: 13,
                            width: 13,
                            type: m.ub.Alt2
                        })));
                        var o = t[n];
                        return d.createElement(m.Xa, {
                            display: m.X.Flex,
                            padding: .5
                        }, i, d.createElement(m.W, {
                            align: m.fc.Middle,
                            color: m.O.Alt2
                        }, o))
                    }, t = l.__decorate([Object(s.b)("AutomodCategoryDisplay")], t)
                }(d.Component),
                g = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return l.__extends(t, e), t.prototype.render = function() {
                        return d.createElement(m.P, {
                            cols: 6
                        }, d.createElement(m.Xa, {
                            padding: {
                                bottom: 1
                            }
                        }, d.createElement("strong", null, this.props.category), d.createElement(m.W, {
                            color: m.O.Alt2,
                            type: m.Vb.P
                        }, this.props.description)))
                    }, t
                }(d.Component),
                v = "automod-onboarding-closed",
                h = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            onboardingVisible: !1
                        }, t.onCloseOnboarding = function() {
                            c.m.set(v, !0), t.setState({
                                onboardingVisible: !1
                            })
                        }, t
                    }
                    return l.__extends(t, e), t.prototype.componentDidMount = function() {
                        var e = c.m.getOptional(v);
                        null === e ? this.setState({
                            onboardingVisible: !0
                        }) : this.setState({
                            onboardingVisible: !e
                        })
                    }, t.prototype.render = function() {
                        return this.state.onboardingVisible ? d.createElement(m.Ja, null, d.createElement(m.P, {
                            cols: 8
                        }, d.createElement(m.Eb, {
                            position: m.jb.Relative,
                            border: !0,
                            color: m.O.Alt2,
                            padding: 2
                        }, d.createElement(m.W, {
                            type: m.Vb.H4,
                            color: m.O.Link,
                            bold: !0
                        }, Object(c.d)("AutoMod Tip", "AutoModSettings")), d.createElement(m.Xa, {
                            padding: 1,
                            position: m.jb.Absolute,
                            attachTop: !0,
                            attachRight: !0
                        }, d.createElement(m.z, {
                            type: m.F.Text,
                            icon: m.tb.Close,
                            onClick: this.onCloseOnboarding,
                            "data-test-selector": "automod-tip-dismiss-button"
                        })), d.createElement(m.W, {
                            color: m.O.Alt2,
                            type: m.Vb.Span
                        }, Object(c.d)("Did you know AutoMod catches misspelled words and evasion? N!ce try, pe0ple wh0 t@lk lik3 th!s.", "AutoModSettings"))))) : ""
                    }, t
                }(d.Component),
                b = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.handleSliderMove = function(e) {
                            var n = Number(e.currentTarget.value);
                            t.props.onLevelChange(n)
                        }, t
                    }
                    return l.__extends(t, e), t.prototype.render = function() {
                        var e = [Object(c.d)("Only commonly blocked terms", "AutoModSettings"), Object(c.d)("A Little Moderation", "AutoModSettings"), Object(c.d)("Some Moderation", "AutoModSettings"), Object(c.d)("More Moderation", "AutoModSettings"), Object(c.d)("A Lot of Moderation", "AutoModSettings")],
                            t = this.props.level,
                            n = e[t],
                            i = Object(c.d)("Level {lvl,number}", {
                                lvl: t
                            }, "AutoModSettings");
                        return d.createElement(m.Eb, {
                            borderLeft: !0,
                            borderRight: !0,
                            padding: {
                                top: 1,
                                x: 2
                            }
                        }, d.createElement(m.Xa, {
                            padding: {
                                bottom: .5
                            }
                        }, d.createElement(m.W, {
                            color: m.O.Alt2,
                            type: m.Vb.P
                        }, Object(c.d)("Your AutoMod setting:", "AutoModSettingsSlider"))), d.createElement(m.qb, {
                            min: 0,
                            max: 4,
                            step: 1,
                            value: String(t),
                            onChange: this.handleSliderMove,
                            "data-test-selector": "auto-mod-slider"
                        }), d.createElement(m.Xa, {
                            display: m.X.Flex
                        }, d.createElement(m.Xa, {
                            padding: {
                                right: .5
                            }
                        }, i), d.createElement(m.W, {
                            color: m.O.Alt2,
                            type: m.Vb.Strong
                        }, n)), d.createElement(m.Eb, {
                            background: m.r.Alt2,
                            padding: 1,
                            className: "auto-mod-wrapper__carat",
                            position: m.jb.Relative
                        }))
                    }, t
                }(d.Component),
                y = "slider-blank-state-container",
                k = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            isCustom: !1,
                            initialIsCustom: !1,
                            submissionState: m.E.Default,
                            cancelDisabled: !0,
                            isUnsetInBackend: !0,
                            isDataLoaded: !1
                        }, t.levelToIdentity = [0, 5, 5, 4, 4], t.levelToSex = [0, 0, 5, 4, 4], t.levelToAggro = [0, 0, 4, 4, 2], t.levelToProfanity = [0, 0, 0, 0, 4], t.recentSuccessfulMutation = 0, t.showAutoModCategories = function() {
                            var e = [t.levelToAggro[1], t.levelToIdentity[1], t.levelToProfanity[1], t.levelToSex[1]];
                            t.setState({
                                level: 1,
                                categories: e,
                                isCustom: !1,
                                cancelDisabled: !1
                            })
                        }, t.handleLevelChange = function(e) {
                            var n = [t.levelToAggro[e], t.levelToIdentity[e], t.levelToProfanity[e], t.levelToSex[e]];
                            t.setState({
                                level: e,
                                categories: n,
                                cancelDisabled: !1
                            })
                        }, t.updateAutoModProperties = function() {
                            t.state.categories && (t.setState({
                                submissionState: m.E.Loading
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
                                categories: t.state.initialCategories,
                                isCustom: t.state.initialIsCustom,
                                submissionState: m.E.Default,
                                level: t.state.initialLevel,
                                cancelDisabled: !0
                            })
                        }, t.handleCategoryLevelChange = function(e, n) {
                            if (t.state.categories) {
                                var i = t.state.categories.slice();
                                i[e] = n, t.setState({
                                    isCustom: !0,
                                    categories: i,
                                    cancelDisabled: !1
                                })
                            }
                        }, t.handleSuccessfulMutation = function() {
                            t.setState({
                                submissionState: m.E.Success,
                                cancelDisabled: !0,
                                initialCategories: t.state.categories,
                                initialLevel: t.state.level
                            }), clearTimeout(t.recentSuccessfulMutation), t.recentSuccessfulMutation = setTimeout(t.handleSuccessfulMutationExpired, 3e3)
                        }, t.handleSuccessfulMutationExpired = function() {
                            t.setState({
                                submissionState: m.E.Default
                            })
                        }, t.revertToSlider = function() {
                            var e = [t.levelToAggro[1], t.levelToIdentity[1], t.levelToProfanity[1], t.levelToSex[1]];
                            t.setState({
                                isCustom: !1,
                                level: 1,
                                categories: e,
                                cancelDisabled: !1
                            })
                        }, t.renderSlider = function(e) {
                            return e ? d.createElement(m.Eb, {
                                borderLeft: !0,
                                borderRight: !0,
                                padding: 2,
                                "data-test-selector": y
                            }, d.createElement("img", {
                                src: "https://s.jtvnw.net/jtv_user_pictures/hosted_images/automod_onboarding.gif"
                            }), d.createElement(m.Eb, null, d.createElement(m.Eb, {
                                padding: {
                                    top: 2
                                },
                                textAlign: m.Rb.Center
                            }, Object(c.d)("Your current AutoMod level: 0", "AutoModSettings")), d.createElement(m.Eb, {
                                margin: {
                                    x: 2
                                },
                                padding: {
                                    y: 1,
                                    x: 5
                                },
                                textAlign: m.Rb.Center
                            }, d.createElement(m.z, {
                                fullWidth: !0,
                                onClick: t.showAutoModCategories,
                                state: m.E.Default
                            }, Object(c.d)("Choose level", "AutoModSettings"))))) : t.state.isCustom || void 0 === t.state.level ? d.createElement(m.Eb, {
                                borderLeft: !0,
                                borderRight: !0,
                                padding: {
                                    y: 1,
                                    x: 2
                                }
                            }, d.createElement(m.Ja, {
                                gutterSize: m.Ka.Small
                            }, d.createElement(m.P, {
                                cols: 6
                            }, d.createElement(m.Xa, {
                                display: m.X.Flex,
                                fullHeight: !0,
                                alignItems: m.f.Center
                            }, d.createElement(m.W, {
                                color: m.O.Alt2,
                                type: m.Vb.Span
                            }, Object(c.d)("Your AutoMod setting:", "AutoModSettings")), d.createElement(m.Xa, {
                                padding: {
                                    left: .5
                                },
                                display: m.X.InlineFlex
                            }, d.createElement(m.W, {
                                color: m.O.Alt2,
                                type: m.Vb.Strong
                            }, Object(c.d)("Custom", "AutoModSettingsValue"))))), d.createElement(m.P, {
                                cols: 5
                            }, d.createElement(m.z, {
                                type: m.F.Hollow,
                                onClick: t.revertToSlider
                            }, Object(c.d)("Revert to defaults", "AutoModSettings"))))) : d.createElement(b, {
                                level: t.state.level.valueOf(),
                                onLevelChange: t.handleLevelChange
                            })
                        }, t
                    }
                    return l.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive()
                    }, t.prototype.componentWillReceiveProps = function(e) {
                        e.data && !e.data.loading && !e.data.error && e.data.user && (this.state.isDataLoaded || (this.hasAutoModProperties(e) ? this.initializeStateFromBackend(e) : this.setState({
                            isDataLoaded: !0
                        })))
                    }, t.prototype.render = function() {
                        if (!this.props.data || this.props.data.loading || this.props.data.error || null === this.props.data.user) return d.createElement(m.Eb, {
                            "data-test-selector": "automod-placeholder-container"
                        });
                        if (!this.hasAutoModDashboardAccess()) return d.createElement(m.Eb, {
                            margin: {
                                top: 2
                            },
                            color: m.O.Alt2,
                            textAlign: m.Rb.Center,
                            "data-test-selector": "automod-placeholder-container"
                        }, d.createElement(m.W, {
                            type: m.Vb.H3,
                            italic: !0
                        }, Object(c.d)("You do not have permission to access this dashboard.", "AutoModSettings")));
                        var e = this.isBlankState();
                        return d.createElement(m.Xa, null, d.createElement(m.Eb, {
                            margin: {
                                bottom: 2
                            }
                        }, d.createElement(h, null)), d.createElement(m.Ja, null, d.createElement(m.P, {
                            cols: 2
                        }, d.createElement(m.W, {
                            color: m.O.Alt2,
                            type: m.Vb.Strong
                        }, Object(c.d)("AutoMod Rulesets", "AutoModSettings"))), d.createElement(m.P, {
                            cols: 5
                        }, this.AutomodTableHeader(), this.renderSlider(e), this.AutomodCategories(e), this.AutomodTableFooter(e))))
                    }, t.prototype.isBlankState = function() {
                        return !this.state.categories && !this.state.level
                    }, t.prototype.AutomodTableFooter = function(e) {
                        return e ? d.createElement(m.Eb, {
                            border: !0,
                            padding: 2,
                            background: m.r.Alt2
                        }, d.createElement(m.Ja, null, d.createElement(m.P, {
                            cols: 7
                        }, Object(c.d)("You can adjust how much moderation you'd like for your channel.", "AutoModSettings")), d.createElement(m.P, {
                            cols: 5
                        }, d.createElement(m.Xa, {
                            display: m.X.Flex,
                            fullHeight: !0,
                            flexDirection: m.Aa.Column,
                            justifyContent: m.Wa.Center,
                            alignItems: m.f.End
                        }, d.createElement(m.z, {
                            onClick: this.showAutoModCategories,
                            type: m.F.Hollow
                        }, Object(c.d)("See how rulesets work", "AutoModSettings")))))) : d.createElement(m.Xa, null, d.createElement(m.Eb, {
                            border: !0,
                            padding: {
                                y: 1,
                                x: 2
                            },
                            background: m.r.Alt2
                        }, d.createElement("a", {
                            href: "https://help.twitch.tv/customer/portal/articles/2662186-how-to-use-automod",
                            target: "_blank"
                        }, Object(c.d)("Learn more in our help page", "AutoModSettings"))), d.createElement(m.Xa, {
                            display: m.X.Flex,
                            padding: {
                                y: 1
                            },
                            margin: {
                                top: .5
                            }
                        }, d.createElement(m.Xa, {
                            padding: {
                                right: .5
                            }
                        }, d.createElement(m.z, {
                            onClick: this.updateAutoModProperties,
                            state: this.state.submissionState
                        }, Object(c.d)("Save", "AutoModSettings"))), d.createElement(m.z, {
                            onClick: this.resetAutoModProperties,
                            type: m.F.Text,
                            disabled: this.state.cancelDisabled
                        }, Object(c.d)("Cancel", "AutoModSettings"))))
                    }, t.prototype.AutomodCategories = function(e) {
                        if (!e && 0 !== this.state.level && this.state.categories) {
                            var t = Object(c.d)("Identity language", "AutoModSettings"),
                                n = Object(c.d)("Referring to race, religion, gender, orientation, disability, or similar", "AutoModSettings"),
                                i = Object(c.d)("Sexually Explicit Language", "AutoModSettings"),
                                a = Object(c.d)("Referring to sexual acts, sexual content, and body parts", "AutoModSettings"),
                                o = Object(c.d)("Aggressive language", "AutoModSettings"),
                                r = Object(c.d)("Hostility towards other people, often associated with bullying", "AutoModSettings"),
                                s = Object(c.d)("Profanity", "AutoModSettings"),
                                l = Object(c.d)("Expletives, curse words, things you wouldn’t say to grandma", "AutoModSettings");
                            return d.createElement(m.Eb, {
                                borderLeft: !0,
                                borderRight: !0,
                                padding: 2,
                                background: m.r.Alt2,
                                "data-test-selector": "automod-categories-container"
                            }, d.createElement(m.Ja, {
                                gutterSize: m.Ka.Small
                            }, d.createElement(g, {
                                category: t,
                                description: n
                            }), d.createElement(p, {
                                category: 1,
                                categoryLevel: this.state.categories[1],
                                onLevelChange: this.handleCategoryLevelChange
                            }), d.createElement(g, {
                                category: i,
                                description: a
                            }), d.createElement(p, {
                                category: 3,
                                categoryLevel: this.state.categories[3],
                                onLevelChange: this.handleCategoryLevelChange
                            }), d.createElement(g, {
                                category: o,
                                description: r
                            }), d.createElement(p, {
                                category: 0,
                                categoryLevel: this.state.categories[0],
                                onLevelChange: this.handleCategoryLevelChange
                            }), d.createElement(g, {
                                category: s,
                                description: l
                            }), d.createElement(p, {
                                category: 2,
                                categoryLevel: this.state.categories[2],
                                onLevelChange: this.handleCategoryLevelChange
                            })))
                        }
                    }, t.prototype.AutomodTableHeader = function() {
                        var e = Object(c.d)("AutoMod", "AutoModSettings"),
                            t = Object(c.d)("Automatically hold risky messages for moderators to review.", "AutoModSettings");
                        return d.createElement(m.G, {
                            border: !0,
                            row: !0
                        }, d.createElement(m.Xa, {
                            padding: {
                                y: 1,
                                x: 2
                            }
                        }, d.createElement(m.Eb, {
                            className: "auto-mod-wrapper__shield",
                            padding: {
                                y: .5,
                                x: .5
                            },
                            display: m.X.Flex,
                            color: m.O.Overlay
                        }, d.createElement(m.sb, {
                            asset: m.tb.Automod,
                            type: m.ub.Inherit
                        }))), d.createElement(m.Xa, {
                            padding: {
                                y: 1,
                                right: 2
                            }
                        }, d.createElement(m.W, null, e), d.createElement(m.W, {
                            color: m.O.Alt2
                        }, t)))
                    }, t.prototype.determineLevel = function(e) {
                        for (var t in [0, 1, 2, 3, 4])
                            if (e[0] === this.levelToAggro[t] && e[1] === this.levelToIdentity[t] && e[2] === this.levelToProfanity[t] && e[3] === this.levelToSex[t]) return Number(t);
                        return -1
                    }, t.prototype.hasAutoModDashboardAccess = function() {
                        return this.props.data.user.self.isModerator || this.props.data.currentUser.roles.isStaff || this.props.data.currentUser.roles.isSiteAdmin || this.props.data.user.id === this.props.data.currentUser.id
                    }, t.prototype.initializeStateFromBackend = function(e) {
                        if (e.data.user.autoModProperties) {
                            var t = [e.data.user.autoModProperties.aggressiveLevel, e.data.user.autoModProperties.identityLevel, e.data.user.autoModProperties.profanityLevel, e.data.user.autoModProperties.sexualLevel],
                                n = this.determineLevel(t),
                                i = -1 === n;
                            this.setState({
                                categories: t,
                                initialCategories: t,
                                isCustom: i,
                                initialIsCustom: i,
                                level: n,
                                initialLevel: n,
                                isDataLoaded: !0
                            })
                        }
                    }, t.prototype.hasAutoModProperties = function(e) {
                        return e.data.user.autoModProperties
                    }, t
                }(d.Component),
                S = n("K1HF"),
                f = n("hxCz");
            var A = Object(a.compose)(Object(i.connect)(function(e) {
                return {
                    isLoggedIn: Object(r.f)(e)
                }
            }), Object(o.a)(S, {
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
            }), Object(o.a)(f, {
                name: "onUpdateAutoModProperties"
            }), Object(s.b)("AutomodControls"))(k);
            n.d(t, "a", function() {
                return A
            })
        }
    }
]);