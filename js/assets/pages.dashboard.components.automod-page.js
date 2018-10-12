(window.webpackJsonp = window.webpackJsonp || []).push([
    [160], {
        "4l1H": function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "mutation",
                    name: {
                        kind: "Name",
                        value: "Chat_AddChannelBlockedTerm"
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
                                    value: "AddChannelBlockedTermInput"
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
                                value: "addChannelBlockedTerm"
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
                                        value: "phrases"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "addedAt"
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
                    end: 133
                }
            };
            n.loc.source = {
                body: "mutation Chat_AddChannelBlockedTerm($input: AddChannelBlockedTermInput!) {\naddChannelBlockedTerm(input: $input) {\nphrases\naddedAt\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        "5R7h": function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "mutation",
                    name: {
                        kind: "Name",
                        value: "Chat_DeleteChannelPermittedTerm"
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
                                    value: "DeleteChannelPermittedTermInput"
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
                                value: "deleteChannelPermittedTerm"
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
                                        value: "deletedAt"
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
                    end: 142
                }
            };
            n.loc.source = {
                body: "mutation Chat_DeleteChannelPermittedTerm($input: DeleteChannelPermittedTermInput!) {\ndeleteChannelPermittedTerm(input: $input) {\ndeletedAt\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
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
        R17a: function(e, t, n) {},
        Temx: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "mutation",
                    name: {
                        kind: "Name",
                        value: "Chat_AddChannelPermittedTerm"
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
                                    value: "AddChannelPermittedTermInput"
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
                                value: "addChannelPermittedTerm"
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
                                        value: "phrases"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "addedAt"
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
                    end: 139
                }
            };
            n.loc.source = {
                body: "mutation Chat_AddChannelPermittedTerm($input: AddChannelPermittedTermInput!) {\naddChannelPermittedTerm(input: $input) {\nphrases\naddedAt\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        U5Uu: function(e, t, n) {
            "use strict";
            n.r(t);
            var a = n("mrSG"),
                i = n("q1tI"),
                r = n("wIs1"),
                o = n("fvjX"),
                d = n("/7QA"),
                l = n("4VQm"),
                s = n("V+GM"),
                c = n("NvVO"),
                u = n("2xye"),
                m = n("GnwI"),
                p = n("/MKj"),
                h = n("kRBY"),
                g = n("oJmH"),
                v = n("yR8l"),
                k = n("u5aL"),
                b = n("Ue10"),
                f = function(e) {
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
                    return a.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        return i.createElement(b.P, {
                            cols: 6
                        }, i.createElement(k.a, {
                            onClickOut: this.hideCategoryMenu
                        }, i.createElement(b.Va, {
                            padding: {
                                top: .5
                            }
                        }, i.createElement(b.z, {
                            dropdown: !0,
                            type: b.F.Hollow,
                            onClick: this.toggleCategoryMenu
                        }, this.menuOption(this.props.categoryLevel)), this.menuItems())))
                    }, t.prototype.menuItems = function() {
                        return this.state.menuItemsVisible ? i.createElement(b.xb, {
                            border: !0,
                            background: b.r.Alt,
                            position: b.db.Absolute,
                            zIndex: b.ac.Above
                        }, this.renderMenuItem(0), this.renderMenuItem(6), this.renderMenuItem(5), this.renderMenuItem(4), this.renderMenuItem(3)) : ""
                    }, t.prototype.renderMenuItem = function(e) {
                        return i.createElement(b.Sa, {
                            type: b.Ta.Alpha,
                            selected: this.props.categoryLevel === e,
                            "data-new-level": e,
                            onClick: this.menuItemClicked
                        }, i.createElement(b.Va, {
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
                        for (var t = [Object(d.d)("No filtering", "AutoModSettings"), Object(d.d)("Less filtering", "AutoModSettings"), Object(d.d)("Some filtering", "AutoModSettings"), Object(d.d)("More filtering", "AutoModSettings"), Object(d.d)("Most filtering", "AutoModSettings")], n = this.getNumShields(e), a = [], r = 0; r < n; r++) a.push(i.createElement(b.Va, {
                            key: "shield" + r,
                            display: b.W.InlineFlex,
                            padding: {
                                right: .5
                            }
                        }, i.createElement(b.mb, {
                            asset: b.nb.Automod,
                            height: 13,
                            width: 13,
                            type: b.ob.Alt2
                        })));
                        var o = t[n];
                        return i.createElement(b.Va, {
                            display: b.W.Flex,
                            padding: .5
                        }, a, i.createElement(b.V, {
                            align: b.Xb.Middle,
                            color: b.O.Alt2
                        }, o))
                    }, t = a.__decorate([Object(m.c)("AutomodCategoryDisplay")], t)
                }(i.Component),
                S = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        return i.createElement(b.P, {
                            cols: 6
                        }, i.createElement(b.Va, {
                            padding: {
                                bottom: 1
                            }
                        }, i.createElement("strong", null, this.props.category), i.createElement(b.V, {
                            color: b.O.Alt2,
                            type: b.Nb.P
                        }, this.props.description)))
                    }, t
                }(i.Component),
                y = "automod-onboarding-closed",
                A = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            onboardingVisible: !1
                        }, t.onCloseOnboarding = function() {
                            d.l.set(y, !0), t.setState({
                                onboardingVisible: !1
                            })
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.componentDidMount = function() {
                        var e = d.l.getOptional(y);
                        null === e ? this.setState({
                            onboardingVisible: !0
                        }) : this.setState({
                            onboardingVisible: !e
                        })
                    }, t.prototype.render = function() {
                        return this.state.onboardingVisible ? i.createElement(b.Ha, null, i.createElement(b.P, {
                            cols: 8
                        }, i.createElement(b.xb, {
                            position: b.db.Relative,
                            border: !0,
                            color: b.O.Alt2,
                            padding: 2
                        }, i.createElement(b.V, {
                            type: b.Nb.H4,
                            color: b.O.Link,
                            bold: !0
                        }, Object(d.d)("AutoMod Tip", "AutoModSettings")), i.createElement(b.Va, {
                            padding: 1,
                            position: b.db.Absolute,
                            attachTop: !0,
                            attachRight: !0
                        }, i.createElement(b.z, {
                            type: b.F.Text,
                            icon: b.nb.Close,
                            onClick: this.onCloseOnboarding,
                            "data-test-selector": "automod-tip-dismiss-button"
                        })), i.createElement(b.V, {
                            color: b.O.Alt2,
                            type: b.Nb.Span
                        }, Object(d.d)("Did you know AutoMod catches misspelled words and evasion? N!ce try, pe0ple wh0 t@lk lik3 th!s.", "AutoModSettings"))))) : ""
                    }, t
                }(i.Component),
                E = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.handleSliderMove = function(e) {
                            var n = Number(e.currentTarget.value);
                            t.props.onLevelChange(n)
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        var e = [Object(d.d)("Only commonly blocked terms", "AutoModSettings"), Object(d.d)("A Little Moderation", "AutoModSettings"), Object(d.d)("Some Moderation", "AutoModSettings"), Object(d.d)("More Moderation", "AutoModSettings"), Object(d.d)("A Lot of Moderation", "AutoModSettings")],
                            t = this.props.level,
                            n = e[t],
                            a = Object(d.d)("Level {lvl,number}", {
                                lvl: t
                            }, "AutoModSettings");
                        return i.createElement(b.xb, {
                            borderLeft: !0,
                            borderRight: !0,
                            padding: {
                                top: 1,
                                x: 2
                            }
                        }, i.createElement(b.Va, {
                            padding: {
                                bottom: .5
                            }
                        }, i.createElement(b.V, {
                            color: b.O.Alt2,
                            type: b.Nb.P
                        }, Object(d.d)("Your AutoMod setting:", "AutoModSettingsSlider"))), i.createElement(b.kb, {
                            min: 0,
                            max: 4,
                            step: 1,
                            value: String(t),
                            onChange: this.handleSliderMove,
                            "data-test-selector": "auto-mod-slider"
                        }), i.createElement(b.Va, {
                            display: b.W.Flex
                        }, i.createElement(b.Va, {
                            padding: {
                                right: .5
                            }
                        }, a), i.createElement(b.V, {
                            color: b.O.Alt2,
                            type: b.Nb.Strong
                        }, n)), i.createElement(b.xb, {
                            background: b.r.Alt2,
                            padding: 1,
                            className: "auto-mod-wrapper__carat",
                            position: b.db.Relative
                        }))
                    }, t
                }(i.Component),
                C = "slider-blank-state-container",
                T = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            isCustom: !1,
                            initialIsCustom: !1,
                            submissionState: b.E.Default,
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
                                submissionState: b.E.Loading
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
                                submissionState: b.E.Default,
                                level: t.state.initialLevel,
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
                        }, t.handleSuccessfulMutation = function() {
                            t.setState({
                                submissionState: b.E.Success,
                                cancelDisabled: !0,
                                initialCategories: t.state.categories,
                                initialLevel: t.state.level
                            }), clearTimeout(t.recentSuccessfulMutation), t.recentSuccessfulMutation = setTimeout(t.handleSuccessfulMutationExpired, 3e3)
                        }, t.handleSuccessfulMutationExpired = function() {
                            t.setState({
                                submissionState: b.E.Default
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
                            return e ? i.createElement(b.xb, {
                                borderLeft: !0,
                                borderRight: !0,
                                padding: 2,
                                "data-test-selector": C
                            }, i.createElement("img", {
                                src: "https://s.jtvnw.net/jtv_user_pictures/hosted_images/automod_setup_en.gif"
                            }), i.createElement(b.xb, null, i.createElement(b.xb, {
                                padding: {
                                    top: 2
                                },
                                textAlign: b.Jb.Center
                            }, Object(d.d)("Your current AutoMod level: 0", "AutoModSettings")), i.createElement(b.xb, {
                                margin: {
                                    x: 2
                                },
                                padding: {
                                    y: 1,
                                    x: 5
                                },
                                textAlign: b.Jb.Center
                            }, i.createElement(b.z, {
                                fullWidth: !0,
                                onClick: t.showAutoModCategories,
                                state: b.E.Default
                            }, Object(d.d)("Choose level", "AutoModSettings"))))) : t.state.isCustom || void 0 === t.state.level ? i.createElement(b.xb, {
                                borderLeft: !0,
                                borderRight: !0,
                                padding: {
                                    y: 1,
                                    x: 2
                                }
                            }, i.createElement(b.Ha, {
                                gutterSize: b.Ia.Small
                            }, i.createElement(b.P, {
                                cols: 6
                            }, i.createElement(b.Va, {
                                display: b.W.Flex,
                                fullHeight: !0,
                                alignItems: b.f.Center
                            }, i.createElement(b.V, {
                                color: b.O.Alt2,
                                type: b.Nb.Span
                            }, Object(d.d)("Your AutoMod setting:", "AutoModSettings")), i.createElement(b.Va, {
                                padding: {
                                    left: .5
                                },
                                display: b.W.InlineFlex
                            }, i.createElement(b.V, {
                                color: b.O.Alt2,
                                type: b.Nb.Strong
                            }, Object(d.d)("Custom", "AutoModSettingsValue"))))), i.createElement(b.P, {
                                cols: 5
                            }, i.createElement(b.z, {
                                type: b.F.Hollow,
                                onClick: t.revertToSlider
                            }, Object(d.d)("Revert to defaults", "AutoModSettings"))))) : i.createElement(E, {
                                level: t.state.level.valueOf(),
                                onLevelChange: t.handleLevelChange
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
                        if (!this.props.data || this.props.data.loading || this.props.data.error || null === this.props.data.user) return i.createElement(b.xb, {
                            "data-test-selector": "automod-placeholder-container"
                        });
                        if (!this.hasAutoModDashboardAccess()) return i.createElement(b.xb, {
                            margin: {
                                top: 2
                            },
                            color: b.O.Alt2,
                            textAlign: b.Jb.Center,
                            "data-test-selector": "automod-placeholder-container"
                        }, i.createElement(b.V, {
                            type: b.Nb.H3,
                            italic: !0
                        }, Object(d.d)("You do not have permission to access this dashboard.", "AutoModSettings")));
                        var e = this.isBlankState();
                        return i.createElement(b.Va, null, i.createElement(b.xb, {
                            margin: {
                                bottom: 2
                            }
                        }, i.createElement(A, null)), i.createElement(b.Ha, null, i.createElement(b.P, {
                            cols: 2
                        }, i.createElement(b.V, {
                            color: b.O.Alt2,
                            type: b.Nb.Strong
                        }, Object(d.d)("AutoMod Rulesets", "AutoModSettings"))), i.createElement(b.P, {
                            cols: 5
                        }, this.AutomodTableHeader(), this.renderSlider(e), this.AutomodCategories(e), this.AutomodTableFooter(e))))
                    }, t.prototype.isBlankState = function() {
                        return !this.state.categories && !this.state.level
                    }, t.prototype.AutomodTableFooter = function(e) {
                        return e ? i.createElement(b.xb, {
                            border: !0,
                            padding: 2,
                            background: b.r.Alt2
                        }, i.createElement(b.Ha, null, i.createElement(b.P, {
                            cols: 7
                        }, Object(d.d)("You can adjust how much moderation you'd like for your channel.", "AutoModSettings")), i.createElement(b.P, {
                            cols: 5
                        }, i.createElement(b.Va, {
                            display: b.W.Flex,
                            fullHeight: !0,
                            flexDirection: b.Y.Column,
                            justifyContent: b.Ua.Center,
                            alignItems: b.f.End
                        }, i.createElement(b.z, {
                            onClick: this.showAutoModCategories,
                            type: b.F.Hollow
                        }, Object(d.d)("See how rulesets work", "AutoModSettings")))))) : i.createElement(b.Va, null, i.createElement(b.xb, {
                            border: !0,
                            padding: {
                                y: 1,
                                x: 2
                            },
                            background: b.r.Alt2
                        }, i.createElement("a", {
                            href: "https://help.twitch.tv/customer/portal/articles/2662186-how-to-use-automod",
                            target: "_blank"
                        }, Object(d.d)("Learn more in our help page", "AutoModSettings"))), i.createElement(b.Va, {
                            display: b.W.Flex,
                            padding: {
                                y: 1
                            },
                            margin: {
                                top: .5
                            }
                        }, i.createElement(b.Va, {
                            padding: {
                                right: .5
                            }
                        }, i.createElement(b.z, {
                            onClick: this.updateAutoModProperties,
                            state: this.state.submissionState
                        }, Object(d.d)("Save", "AutoModSettings"))), i.createElement(b.z, {
                            onClick: this.resetAutoModProperties,
                            type: b.F.Text,
                            disabled: this.state.cancelDisabled
                        }, Object(d.d)("Cancel", "AutoModSettings"))))
                    }, t.prototype.AutomodCategories = function(e) {
                        if (!e && 0 !== this.state.level && this.state.categories) {
                            var t = Object(d.d)("Identity language", "AutoModSettings"),
                                n = Object(d.d)("Referring to race, religion, gender, orientation, disability, or similar", "AutoModSettings"),
                                a = Object(d.d)("Sexually Explicit Language", "AutoModSettings"),
                                r = Object(d.d)("Referring to sexual acts, sexual content, and body parts", "AutoModSettings"),
                                o = Object(d.d)("Aggressive language", "AutoModSettings"),
                                l = Object(d.d)("Hostility towards other people, often associated with bullying", "AutoModSettings"),
                                s = Object(d.d)("Profanity", "AutoModSettings"),
                                c = Object(d.d)("Expletives, curse words, things you wouldn’t say to grandma", "AutoModSettings");
                            return i.createElement(b.xb, {
                                borderLeft: !0,
                                borderRight: !0,
                                padding: 2,
                                background: b.r.Alt2,
                                "data-test-selector": "automod-categories-container"
                            }, i.createElement(b.Ha, {
                                gutterSize: b.Ia.Small
                            }, i.createElement(S, {
                                category: t,
                                description: n
                            }), i.createElement(f, {
                                category: 1,
                                categoryLevel: this.state.categories[1],
                                onLevelChange: this.handleCategoryLevelChange
                            }), i.createElement(S, {
                                category: a,
                                description: r
                            }), i.createElement(f, {
                                category: 3,
                                categoryLevel: this.state.categories[3],
                                onLevelChange: this.handleCategoryLevelChange
                            }), i.createElement(S, {
                                category: o,
                                description: l
                            }), i.createElement(f, {
                                category: 0,
                                categoryLevel: this.state.categories[0],
                                onLevelChange: this.handleCategoryLevelChange
                            }), i.createElement(S, {
                                category: s,
                                description: c
                            }), i.createElement(f, {
                                category: 2,
                                categoryLevel: this.state.categories[2],
                                onLevelChange: this.handleCategoryLevelChange
                            })))
                        }
                    }, t.prototype.AutomodTableHeader = function() {
                        var e = Object(d.d)("AutoMod", "AutoModSettings"),
                            t = Object(d.d)("Automatically hold risky messages for moderators to review.", "AutoModSettings");
                        return i.createElement(b.G, {
                            border: !0,
                            row: !0
                        }, i.createElement(b.Va, {
                            padding: {
                                y: 1,
                                x: 2
                            }
                        }, i.createElement(b.xb, {
                            className: "auto-mod-wrapper__shield",
                            padding: {
                                y: .5,
                                x: .5
                            },
                            display: b.W.Flex,
                            color: b.O.Overlay
                        }, i.createElement(b.mb, {
                            asset: b.nb.Automod,
                            type: b.ob.Inherit
                        }))), i.createElement(b.Va, {
                            padding: {
                                y: 1,
                                right: 2
                            }
                        }, i.createElement(b.V, null, e), i.createElement(b.V, {
                            color: b.O.Alt2
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
                                a = -1 === n;
                            this.setState({
                                categories: t,
                                initialCategories: t,
                                isCustom: a,
                                initialIsCustom: a,
                                level: n,
                                initialLevel: n,
                                isDataLoaded: !0
                            })
                        }
                    }, t.prototype.hasAutoModProperties = function(e) {
                        return e.data.user.autoModProperties
                    }, t
                }(i.Component),
                N = n("K1HF"),
                M = n("hxCz");
            var O, x, I = Object(o.compose)(Object(p.connect)(function(e) {
                    return {
                        isLoggedIn: Object(h.f)(e)
                    }
                }), Object(v.a)(N, {
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
                }), Object(v.a)(M, {
                    name: "onUpdateAutoModProperties"
                }), Object(m.c)("AutomodControls"))(T),
                L = n("8Ad5");
            n("zjB3");
            ! function(e) {
                e.DisplayedTerm = "term", e.AddTermInput = "add-term-input", e.EditTermInput = "edit-term-input", e.EditTermArea = "edit-term-area", e.AddTermButton = "add-term-button", e.EditTermButton = "edit-term-button", e.DelTermButton = "del-term-button", e.EditConfirmButton = "edit-confirm-button", e.EditCancelButton = "edit-cancel-button"
            }(O || (O = {})),
            function(e) {
                e.Banned = "banned", e.Permitted = "permitted"
            }(x || (x = {}));
            var j = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            editingIndex: null,
                            justSavedIndex: null,
                            editingIsModEditable: null,
                            terms: [],
                            justSaved: !1,
                            errorAddingTerm: !1,
                            errorAddingLabel: null
                        }, t.onCheckModEditableChange = function(e) {
                            t.setState({
                                editingIsModEditable: !e.target.checked
                            })
                        }, t.handleAdd = function() {
                            if (t.addInput.value.trim()) {
                                for (var e = 0, n = t.state.terms; e < n.length; e++) {
                                    if (n[e].phrases.join(" ") === t.addInput.value.trim()) return void t.setState({
                                        errorAddingTerm: !0,
                                        errorAddingLabel: Object(d.d)("Duplicate Term", "ChatTermsControl")
                                    })
                                }
                                var a = {
                                    phrases: [t.addInput.value.trim()],
                                    category: t.props.type,
                                    createdAt: null,
                                    updatedAt: null,
                                    expiresAt: null,
                                    isModEditable: t.props.channelID !== t.props.userID
                                };
                                t.props.onTermAdd(a, !0) && (t.addInput.value = ""), t.setState({
                                    justSavedIndex: 0,
                                    justSaved: !0
                                })
                            }
                        }, t.handleEdit = function(e) {
                            var n = e.currentTarget.closest("[data-index]").getAttribute("data-index");
                            n && t.setState({
                                editingIndex: +n
                            })
                        }, t.handleDelete = function(e) {
                            var n = e.currentTarget.closest("[data-index]").getAttribute("data-index");
                            if (n) {
                                +n == t.state.terms.length - 1 ? t.setState({
                                    justSavedIndex: +n - 1,
                                    justSaved: !0
                                }) : t.setState({
                                    justSavedIndex: +n,
                                    justSaved: !0
                                }), t.props.onTermDelete(t.state.terms[+n], !1);
                                var a = t.state.editingIndex;
                                null === a || +n === a ? a = null : a > +n && (a -= 1), a !== t.state.editingIndex && t.setState({
                                    editingIndex: a
                                })
                            }
                        }, t.saveAddInputRef = function(e) {
                            t.addInput = e
                        }, t.saveEditInputRef = function(e) {
                            t.editInput = e
                        }, t.handleAddKeyDown = function(e) {
                            e.keyCode === L.a.Enter && t.handleAdd(), t.state.errorAddingTerm && t.setState({
                                errorAddingTerm: !1
                            })
                        }, t.handleEditKeyDown = function(e) {
                            switch (e.keyCode) {
                                case L.a.Enter:
                                    t.confirmEdit();
                                    break;
                                case L.a.Esc:
                                    t.cancelEdit();
                                    break;
                                default:
                                    return
                            }
                        }, t.cancelEdit = function() {
                            t.setState({
                                editingIndex: null
                            })
                        }, t.clearLabels = function() {
                            (t.state.justSaved || t.state.errorAddingTerm) && t.setState({
                                justSaved: !1,
                                justSavedIndex: null,
                                errorAddingTerm: !1,
                                errorAddingLabel: null
                            })
                        }, t.confirmEdit = function() {
                            if (null !== t.state.editingIndex && t.editInput) {
                                var e = t.state.terms[t.state.editingIndex].isModEditable;
                                null !== t.state.editingIsModEditable && (e = t.state.editingIsModEditable);
                                var n = {
                                    isModEditable: e,
                                    category: t.props.type,
                                    phrases: [t.editInput.value],
                                    createdAt: null,
                                    updatedAt: null,
                                    expiresAt: null
                                };
                                t.props.onTermEdit(t.state.terms[t.state.editingIndex], n, e);
                                var a = t.state.terms;
                                a[t.state.editingIndex] = n, t.setState(function() {
                                    return {
                                        terms: a,
                                        editingIndex: -1,
                                        justSaved: !0,
                                        justSavedIndex: t.state.editingIndex
                                    }
                                })
                            }
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.componentWillReceiveProps = function(e) {
                        if (this.state.terms === e.terms) return null;
                        this.setState({
                            terms: e.terms
                        })
                    }, t.prototype.render = function() {
                        for (var e = [], t = 0; t < this.state.terms.length; t++) e.push(this.renderTerm(this.state.terms[t], t));
                        return i.createElement(b.Na, {
                            fullWidth: !0
                        }, i.createElement("div", {
                            className: "chat-terms-control",
                            "data-a-target": "chat-terms-control"
                        }, i.createElement(b.Va, {
                            display: b.W.Flex,
                            flexDirection: b.Y.Row,
                            alignItems: b.f.Stretch,
                            fullWidth: !0,
                            flexWrap: b.Z.NoWrap
                        }, i.createElement(b.Va, {
                            flexGrow: 1
                        }, i.createElement(b.Ca, {
                            label: "",
                            error: this.state.errorAddingTerm,
                            errorMessage: this.state.errorAddingLabel || ""
                        }, i.createElement(b.Pa, {
                            "data-a-target": "add-term-input",
                            "data-test-selector": O.AddTermInput,
                            ariaLabel: Object(d.d)("Add term", "ChatTermsControl"),
                            refDelegate: this.saveAddInputRef,
                            type: b.Ra.Text,
                            placeholder: this.props.addPlaceholder,
                            onKeyDown: this.handleAddKeyDown,
                            error: this.state.errorAddingTerm
                        }))), i.createElement(b.Va, {
                            flexShrink: 0,
                            margin: {
                                top: .5
                            }
                        }, i.createElement(b.z, {
                            onClick: this.handleAdd,
                            "data-a-target": "add-term",
                            "data-test-selector": O.AddTermButton
                        }, Object(d.d)("Add", "ChatTermsControl")))), i.createElement(b.Va, {
                            className: "chat-terms"
                        }, e)))
                    }, t.prototype.renderTerm = function(e, t) {
                        if (t === this.state.editingIndex) return this.renderEditTermRow(e, t);
                        var n = null;
                        if (!0 == !e.isModEditable && this.props.type === x.Banned) n = i.createElement(b.Va, {
                            alignItems: b.f.Center,
                            display: b.W.Flex,
                            margin: {
                                left: "auto"
                            },
                            fullHeight: !0
                        }, i.createElement(b.ab, {
                            label: Object(d.d)("private", "ChatTermsControl")
                        }));
                        else if (e.expiresAt) {
                            var a = Object(d.h)(new Date(e.expiresAt), {
                                style: "numeric"
                            });
                            n = i.createElement(b.Va, {
                                margin: {
                                    right: 1
                                }
                            }, i.createElement(b.V, {
                                ellipsis: !0,
                                color: b.O.Alt2
                            }, " ", Object(d.d)("Expires {relativeTime}", {
                                relativeTime: a
                            }, "ChatTermsControl"), " "))
                        }
                        var r = null;
                        t === this.state.justSavedIndex && (r = i.createElement(b.Na, {
                            position: b.db.Absolute,
                            margin: {
                                left: 5
                            }
                        }, i.createElement("span", {
                            className: "chat-terms-control__saved"
                        }, i.createElement(b.i, {
                            delay: b.j.Long,
                            duration: b.k.Medium,
                            type: b.n.FadeOut,
                            enabled: !0,
                            onAnimationEnd: this.clearLabels
                        }, i.createElement(b.Va, {
                            position: b.db.Absolute,
                            attachRight: !0
                        }, Object(d.d)("Saved", "ChatTermsControl"))))));
                        var o = Object(d.d)("Edit", "ChatTermsControl"),
                            l = Object(d.d)("Delete", "ChatTermsControl");
                        return i.createElement(b.Na, {
                            className: "chat-term-row",
                            key: t,
                            "data-index": t
                        }, i.createElement("div", {
                            className: "chat-terms-control__term-row",
                            "data-selectable": t,
                            "data-test-selector": O.EditTermArea
                        }, i.createElement(b.Ha, null, i.createElement(b.P, {
                            cols: 6
                        }, i.createElement(b.Va, {
                            "data-test-selector": O.DisplayedTerm,
                            margin: {
                                right: 1
                            },
                            display: b.W.Flex,
                            alignItems: b.f.Center,
                            justifyContent: b.Ua.Between,
                            fullHeight: !0
                        }, i.createElement(b.V, {
                            ellipsis: !0
                        }, e.phrases.join(" ")))), i.createElement(b.P, {
                            cols: 4
                        }, i.createElement(b.Va, {
                            alignItems: b.f.Center,
                            display: b.W.Flex,
                            flexWrap: b.Z.NoWrap,
                            fullHeight: !0
                        }, n)), i.createElement(b.P, {
                            cols: 1
                        }, i.createElement(b.Qb, {
                            label: o
                        }, i.createElement(b.A, {
                            "data-a-target": "edit-term",
                            "data-test-selector": O.EditTermButton,
                            icon: b.nb.Edit,
                            ariaLabel: o,
                            onClick: this.handleEdit
                        }))), i.createElement(b.P, {
                            cols: 1
                        }, i.createElement(b.Qb, {
                            label: l
                        }, i.createElement(b.A, {
                            "data-a-target": "delete-term",
                            "data-test-selector": O.DelTermButton,
                            icon: b.nb.Trash,
                            ariaLabel: l,
                            onClick: this.handleDelete
                        })), r))))
                    }, t.prototype.renderEditTermRow = function(e, t) {
                        var n = Object(d.d)("Save", "ChatTermsControl"),
                            a = Object(d.d)("Cancel", "ChatTermsControl"),
                            r = this.renderEditBalloon(e, t);
                        return i.createElement(k.a, {
                            key: "clickout-item-" + t,
                            onClickOut: this.cancelEdit
                        }, i.createElement(b.Va, {
                            key: "line-item-" + t,
                            className: "chat-term-row",
                            position: b.db.Relative
                        }, i.createElement(b.Va, {
                            key: t,
                            "data-index": t,
                            display: b.W.Flex,
                            flexDirection: b.Y.Row,
                            flexWrap: b.Z.NoWrap
                        }, i.createElement(b.Va, {
                            flexGrow: 1
                        }, i.createElement(b.Pa, {
                            autoFocus: !0,
                            ariaLabel: Object(d.d)("Edit term", "ChatTermsControl"),
                            "data-a-target": "edit-term-input",
                            "data-test-selector": O.EditTermInput,
                            refDelegate: this.saveEditInputRef,
                            type: b.Ra.Text,
                            defaultValue: e.phrases.join(" "),
                            onKeyDown: this.handleEditKeyDown
                        })), i.createElement(b.Va, {
                            flexShrink: 0
                        }, i.createElement(b.Qb, {
                            label: n
                        }, i.createElement(b.A, {
                            "data-a-target": "save-term-edit",
                            "data-test-selector": O.EditConfirmButton,
                            icon: b.nb.Check,
                            ariaLabel: n,
                            onClick: this.confirmEdit
                        })), i.createElement(b.Qb, {
                            label: a
                        }, i.createElement(b.A, {
                            "data-a-target": "cancel-term-edit",
                            "data-test-selector": O.EditCancelButton,
                            icon: b.nb.Close,
                            ariaLabel: a,
                            onClick: this.cancelEdit
                        })))), r))
                    }, t.prototype.renderEditBalloon = function(e, t) {
                        var n = null;
                        return e.expiresAt ? n = i.createElement(b.Va, null, Object(d.d)("Save changes to make term always active", "ChatTermsControl")) : this.props.type === x.Banned && this.props.channelID === this.props.userID && (n = i.createElement(b.Va, null, i.createElement(b.N, {
                            "data-test-selector": "isModEditableCheckbox",
                            id: "isModEditableCheckbox",
                            label: "Mark as Private",
                            defaultChecked: !e.isModEditable,
                            onChange: this.onCheckModEditableChange
                        }), i.createElement(b.V, {
                            color: b.O.Alt2,
                            fontSize: b.Aa.Size8
                        }, Object(d.d)("Private terms are not viewable to anyone except for yourself.", "ChatTermsControl")))), n ? i.createElement(b.u, {
                            key: "edit-balloon-" + t,
                            direction: b.v.Right,
                            size: b.w.Large,
                            show: !0
                        }, i.createElement(b.Va, {
                            margin: 1
                        }, i.createElement(b.xb, {
                            borderBottom: !0,
                            margin: {
                                bottom: .5
                            }
                        }, e.phrases.join(" ")), n)) : null
                    }, t
                }(i.Component),
                D = n("4l1H"),
                V = n("Temx"),
                F = n("kk6A"),
                P = n("5R7h"),
                w = (n("R17a"), function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.state = {
                            terms: []
                        }, n.addTerm = function(e, t) {
                            return a.__awaiter(n, void 0, void 0, function() {
                                var n, i = this;
                                return a.__generator(this, function(a) {
                                    switch (a.label) {
                                        case 0:
                                            return null === this.state.terms ? [2, !1] : this.props.type !== x.Banned ? [3, 2] : [4, this.props.addChannelBlockedTerm({
                                                variables: {
                                                    input: {
                                                        channelID: this.props.channelID,
                                                        phrases: e.phrases,
                                                        isModEditable: e.isModEditable
                                                    }
                                                }
                                            })];
                                        case 1:
                                            return a.sent(), [3, 4];
                                        case 2:
                                            return this.props.type !== x.Permitted ? [3, 4] : [4, this.props.addChannelPermittedTerm({
                                                variables: {
                                                    input: {
                                                        channelID: this.props.channelID,
                                                        phrases: e.phrases
                                                    }
                                                }
                                            })];
                                        case 3:
                                            a.sent(), a.label = 4;
                                        case 4:
                                            return n = this.state.terms, !0 === t && n.unshift(e), this.setState(function() {
                                                return {
                                                    terms: i.state.terms
                                                }
                                            }), [2, !0]
                                    }
                                })
                            })
                        }, n.deleteTerm = function(e, t) {
                            return a.__awaiter(n, void 0, void 0, function() {
                                return a.__generator(this, function(n) {
                                    switch (n.label) {
                                        case 0:
                                            return null === this.state.terms ? [2, !1] : (!1 === t && this.setState(function(t) {
                                                return {
                                                    terms: t.terms.filter(function(t) {
                                                        return t.phrases.join(" ") !== e.phrases.join(" ")
                                                    })
                                                }
                                            }), this.props.type !== x.Banned ? [3, 2] : [4, this.props.deleteChannelBlockedTerm({
                                                variables: {
                                                    input: {
                                                        channelID: this.props.channelID,
                                                        phrases: e.phrases
                                                    }
                                                }
                                            })]);
                                        case 1:
                                            return n.sent(), [3, 4];
                                        case 2:
                                            return this.props.type !== x.Permitted ? [3, 4] : [4, this.props.deleteChannelPermittedTerm({
                                                variables: {
                                                    input: {
                                                        channelID: this.props.channelID,
                                                        phrases: e.phrases
                                                    }
                                                }
                                            })];
                                        case 3:
                                            n.sent(), n.label = 4;
                                        case 4:
                                            return [2, !0]
                                    }
                                })
                            })
                        }, n.editTerm = function(e, t, i) {
                            return a.__awaiter(n, void 0, void 0, function() {
                                var n;
                                return a.__generator(this, function(a) {
                                    switch (a.label) {
                                        case 0:
                                            return [4, this.deleteTerm(e, !0)];
                                        case 1:
                                            return a.sent(), t.isModEditable = i, [4, this.addTerm(t, !1)];
                                        case 2:
                                            return a.sent(), n = this.state.terms, this.setState({
                                                terms: n
                                            }), [2]
                                    }
                                })
                            })
                        }, n
                    }
                    return a.__extends(t, e), t.prototype.componentDidMount = function() {
                        if (this.state.terms === []) return null;
                        var e = [];
                        this.props.terms.forEach(function(t) {
                            e.push(t)
                        }), this.setState({
                            terms: e
                        })
                    }, t.prototype.render = function() {
                        if (!this.state.terms) return null;
                        var e = null;
                        return this.props.type === x.Banned && (e = i.createElement(b.V, {
                            color: b.O.Alt2,
                            fontSize: b.Aa.Size8
                        }, Object(d.d)("Tip: Some terms may be marked as Private and only visible to the channel owner.", "ChatTermsSetting"))), i.createElement(b.Va, {
                            margin: {
                                bottom: 2
                            }
                        }, i.createElement("div", {
                            className: "chat-terms-setting"
                        }, i.createElement(j, {
                            channelID: this.props.channelID,
                            userID: this.props.userID,
                            addPlaceholder: this.props.addPlaceholderMsg,
                            terms: this.state.terms,
                            onTermAdd: this.addTerm,
                            onTermEdit: this.editTerm,
                            onTermDelete: this.deleteTerm,
                            type: this.props.type
                        })), i.createElement(b.Va, {
                            margin: {
                                top: .5
                            }
                        }, e))
                    }, t = a.__decorate([Object(v.a)(D, {
                        name: "addChannelBlockedTerm"
                    }), Object(v.a)(V, {
                        name: "addChannelPermittedTerm"
                    }), Object(v.a)(F, {
                        name: "deleteChannelBlockedTerm"
                    }), Object(v.a)(P, {
                        name: "deleteChannelPermittedTerm"
                    })], t)
                }(i.Component)),
                B = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.handleOptOutChange = function(e) {
                            var n = e.currentTarget;
                            t.props.onUpdateChatSettings({
                                variables: {
                                    input: {
                                        channelID: t.props.data.user.id,
                                        isOptedOutOfGlobalBannedWordsList: n.checked
                                    }
                                }
                            })
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        return !this.props.data || this.props.data.loading || this.props.data.error || !this.props.data.user ? i.createElement(b.Va, null) : i.createElement(b.xb, {
                            padding: {
                                top: 2
                            }
                        }, i.createElement(b.Ha, null, i.createElement(b.P, {
                            cols: 2
                        }, i.createElement(b.V, {
                            color: b.O.Alt2,
                            type: b.Nb.Strong
                        }, Object(d.d)("Blocked and Permitted Terms", "AutoModTermsTitle"))), i.createElement(b.P, {
                            cols: 5
                        }, i.createElement(b.V, {
                            color: b.O.Alt2,
                            type: b.Nb.Strong
                        }, Object(d.d)("Blocked Terms or Phrases", "AutoModBlockedTermsTitle")), i.createElement(b.V, {
                            color: b.O.Alt2
                        }, Object(d.d)("Messages containing these terms or phrases will be blocked from chat. Terms are automatically added when a mod denies a caught message.", "AutoModBlockedTermsDescription")), i.createElement(w, {
                            channelID: this.props.data.user.id,
                            userID: this.props.data.currentUser.id,
                            type: x.Banned,
                            addPlaceholderMsg: Object(d.d)("Add new blocked term or phrase", "AutoModBlockedTermAdditionPlaceHolder"),
                            terms: this.props.data.user.blockedTerms
                        }), i.createElement(b.V, {
                            color: b.O.Alt2,
                            type: b.Nb.Strong
                        }, Object(d.d)("Permitted Terms or Phrases", "AutoModPermittedTermsTitle")), i.createElement(b.V, {
                            color: b.O.Alt2
                        }, Object(d.d)("Messages containing these terms, and no other blocked terms, will not be caught by AutoMod. Terms are automatically added when a mod allows a message.", "AutoModPermittedTermsDescription")), i.createElement(w, {
                            channelID: this.props.data.user.id,
                            userID: this.props.data.currentUser.id,
                            type: x.Permitted,
                            addPlaceholderMsg: Object(d.d)("Add new permitted term or phrase", "AutoModPermittedTermsAdditionPlaceholder"),
                            terms: this.props.data.user.permittedTerms
                        }), i.createElement(b.N, {
                            defaultChecked: this.props.data.user.chatSettings.isOptedOutOfGlobalBannedWordsList,
                            label: Object(d.d)("Opt out of commonly blocked terms", "AutoModSettings"),
                            onChange: this.handleOptOutChange
                        }), i.createElement(b.V, {
                            color: b.O.Alt2,
                            fontSize: b.Aa.Size8
                        }, Object(d.d)("AutoMod level 0 automatically holds messages containing commonly blocked terms for mods to review. If you enable this feature AutoMod won't hold these messages.", "AutoModSettings")))))
                    }, t
                }(i.Component),
                _ = n("Z6v5"),
                R = n("ah12");
            var W = Object(o.compose)(Object(p.connect)(function(e) {
                    return {
                        isLoggedIn: Object(h.f)(e)
                    }
                }), Object(v.a)(_, {
                    options: function(e) {
                        return {
                            variables: {
                                channelLogin: e.channelLogin
                            },
                            fetchPolicy: "cache-and-network"
                        }
                    }
                }), Object(v.a)(R, {
                    name: "onUpdateChatSettings"
                }), Object(m.c)("ChatTermsContainer"))(B),
                U = (n("gBSZ"), function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        return i.createElement(b.xb, {
                            className: "auto-mod-wrapper",
                            padding: {
                                y: 3
                            }
                        }, i.createElement(I, {
                            channelLogin: this.props.channelLogin
                        }), i.createElement(b.xb, {
                            borderTop: !0,
                            padding: {
                                top: .5
                            },
                            margin: {
                                y: 1
                            }
                        }), i.createElement(W, {
                            channelLogin: this.props.channelLogin
                        }))
                    }, t
                }(i.Component)),
                H = Object(g.compose)(Object(m.c)("AutoModWrapper"))(U);
            var z = Object(p.connect)(function(e) {
                    return {
                        isLoggedIn: Object(h.f)(e)
                    }
                })(H),
                G = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        return i.createElement(l.b, null, i.createElement(b.Va, {
                            padding: 2,
                            position: b.db.Relative
                        }, i.createElement(b.V, {
                            type: b.Nb.H3
                        }, Object(d.d)("Moderation Settings", "AutoModPage")), i.createElement(z, {
                            channelLogin: this.props.match.params.channelName
                        })))
                    }, t
                }(i.Component),
                $ = Object(o.compose)(r.a, Object(m.c)("AutoModPage", {
                    autoReportInteractive: !0,
                    destination: c.a.DashboardSettingsAutoMod
                }), Object(s.a)({
                    location: u.PageviewLocation.DashboardSettingsAutoMod
                }))(G);
            n.d(t, "AutoModPageComponent", function() {
                return G
            }), n.d(t, "AutoModPage", function() {
                return $
            })
        },
        Z6v5: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "ChatTermsContainer"
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
                    end: 364
                }
            };
            n.loc.source = {
                body: "query ChatTermsContainer($channelLogin: String!) {\ncurrentUser{\nid\nroles {\nisStaff\nisSiteAdmin\n}\n}\nuser(login: $channelLogin) {\nid\nblockedTerms {\nphrases\ncreatedAt\nupdatedAt\nexpiresAt\ncategory\nisModEditable\n}\npermittedTerms {\nphrases\ncreatedAt\nupdatedAt\nexpiresAt\ncategory\nisModEditable\n}\nchatSettings {\nisOptedOutOfGlobalBannedWordsList\n}\nself {\nisModerator\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        ah12: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "mutation",
                    name: {
                        kind: "Name",
                        value: "UpdateChatSettings_UpdateChatSettingsInput"
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
                                    value: "UpdateChatSettingsInput"
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
                                value: "updateChatSettings"
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
                                }]
                            }
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 178
                }
            };
            n.loc.source = {
                body: "mutation UpdateChatSettings_UpdateChatSettingsInput($input: UpdateChatSettingsInput!) {\nupdateChatSettings(input: $input) {\nchatSettings {\nisOptedOutOfGlobalBannedWordsList\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        gBSZ: function(e, t, n) {},
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
        kk6A: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "mutation",
                    name: {
                        kind: "Name",
                        value: "Chat_DeleteChannelBlockedTerm"
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
                                    value: "DeleteChannelBlockedTermInput"
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
                                value: "deleteChannelBlockedTerm"
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
                                        value: "deletedAt"
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
                    end: 136
                }
            };
            n.loc.source = {
                body: "mutation Chat_DeleteChannelBlockedTerm($input: DeleteChannelBlockedTermInput!) {\ndeleteChannelBlockedTerm(input: $input) {\ndeletedAt\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        zjB3: function(e, t, n) {}
    }
]);