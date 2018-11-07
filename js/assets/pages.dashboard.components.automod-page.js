(window.webpackJsonp = window.webpackJsonp || []).push([
    [174], {
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
        Jpqj: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "ModLogs"
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
                                        value: "displayName"
                                    },
                                    arguments: [],
                                    directives: []
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
                                        value: "modLogsRoleAccess"
                                    },
                                    arguments: [{
                                        kind: "Argument",
                                        name: {
                                            kind: "Name",
                                            value: "role"
                                        },
                                        value: {
                                            kind: "EnumValue",
                                            value: "MODERATOR"
                                        }
                                    }],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "accessLevel"
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
                    end: 157
                }
            };
            n.loc.source = {
                body: "query ModLogs($channelLogin: String!) {\ncurrentUser {\nid\ndisplayName\n}\nuser(login: $channelLogin) {\nid\nmodLogsRoleAccess(role: MODERATOR) {\naccessLevel\n}\n}\n}",
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
                s = n("/7QA"),
                d = n("4VQm"),
                l = n("V+GM"),
                c = n("NvVO"),
                u = n("2xye"),
                m = n("GnwI"),
                p = n("/MKj"),
                g = n("kRBY"),
                h = n("oJmH"),
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
                        }, i.createElement(b.Xa, {
                            padding: {
                                top: .5
                            }
                        }, i.createElement(b.z, {
                            dropdown: !0,
                            type: b.F.Hollow,
                            onClick: this.toggleCategoryMenu
                        }, this.menuOption(this.props.categoryLevel)), this.menuItems())))
                    }, t.prototype.menuItems = function() {
                        return this.state.menuItemsVisible ? i.createElement(b.Cb, {
                            border: !0,
                            background: b.r.Alt,
                            position: b.hb.Absolute,
                            zIndex: b.gc.Above
                        }, this.renderMenuItem(0), this.renderMenuItem(6), this.renderMenuItem(5), this.renderMenuItem(4), this.renderMenuItem(3)) : ""
                    }, t.prototype.renderMenuItem = function(e) {
                        return i.createElement(b.Ua, {
                            type: b.Va.Alpha,
                            selected: this.props.categoryLevel === e,
                            "data-new-level": e,
                            onClick: this.menuItemClicked
                        }, i.createElement(b.Xa, {
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
                        for (var t = [Object(s.d)("No filtering", "AutoModSettings"), Object(s.d)("Less filtering", "AutoModSettings"), Object(s.d)("Some filtering", "AutoModSettings"), Object(s.d)("More filtering", "AutoModSettings"), Object(s.d)("Most filtering", "AutoModSettings")], n = this.getNumShields(e), a = [], r = 0; r < n; r++) a.push(i.createElement(b.Xa, {
                            key: "shield" + r,
                            display: b.X.InlineFlex,
                            padding: {
                                right: .5
                            }
                        }, i.createElement(b.qb, {
                            asset: b.rb.Automod,
                            height: 13,
                            width: 13,
                            type: b.sb.Alt2
                        })));
                        var o = t[n];
                        return i.createElement(b.Xa, {
                            display: b.X.Flex,
                            padding: .5
                        }, a, i.createElement(b.W, {
                            align: b.dc.Middle,
                            color: b.O.Alt2
                        }, o))
                    }, t = a.__decorate([Object(m.b)("AutomodCategoryDisplay")], t)
                }(i.Component),
                S = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        return i.createElement(b.P, {
                            cols: 6
                        }, i.createElement(b.Xa, {
                            padding: {
                                bottom: 1
                            }
                        }, i.createElement("strong", null, this.props.category), i.createElement(b.W, {
                            color: b.O.Alt2,
                            type: b.Tb.P
                        }, this.props.description)))
                    }, t
                }(i.Component),
                A = "automod-onboarding-closed",
                y = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            onboardingVisible: !1
                        }, t.onCloseOnboarding = function() {
                            s.m.set(A, !0), t.setState({
                                onboardingVisible: !1
                            })
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.componentDidMount = function() {
                        var e = s.m.getOptional(A);
                        null === e ? this.setState({
                            onboardingVisible: !0
                        }) : this.setState({
                            onboardingVisible: !e
                        })
                    }, t.prototype.render = function() {
                        return this.state.onboardingVisible ? i.createElement(b.Ja, null, i.createElement(b.P, {
                            cols: 8
                        }, i.createElement(b.Cb, {
                            position: b.hb.Relative,
                            border: !0,
                            color: b.O.Alt2,
                            padding: 2
                        }, i.createElement(b.W, {
                            type: b.Tb.H4,
                            color: b.O.Link,
                            bold: !0
                        }, Object(s.d)("AutoMod Tip", "AutoModSettings")), i.createElement(b.Xa, {
                            padding: 1,
                            position: b.hb.Absolute,
                            attachTop: !0,
                            attachRight: !0
                        }, i.createElement(b.z, {
                            type: b.F.Text,
                            icon: b.rb.Close,
                            onClick: this.onCloseOnboarding,
                            "data-test-selector": "automod-tip-dismiss-button"
                        })), i.createElement(b.W, {
                            color: b.O.Alt2,
                            type: b.Tb.Span
                        }, Object(s.d)("Did you know AutoMod catches misspelled words and evasion? N!ce try, pe0ple wh0 t@lk lik3 th!s.", "AutoModSettings"))))) : ""
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
                        var e = [Object(s.d)("Only commonly blocked terms", "AutoModSettings"), Object(s.d)("A Little Moderation", "AutoModSettings"), Object(s.d)("Some Moderation", "AutoModSettings"), Object(s.d)("More Moderation", "AutoModSettings"), Object(s.d)("A Lot of Moderation", "AutoModSettings")],
                            t = this.props.level,
                            n = e[t],
                            a = Object(s.d)("Level {lvl,number}", {
                                lvl: t
                            }, "AutoModSettings");
                        return i.createElement(b.Cb, {
                            borderLeft: !0,
                            borderRight: !0,
                            padding: {
                                top: 1,
                                x: 2
                            }
                        }, i.createElement(b.Xa, {
                            padding: {
                                bottom: .5
                            }
                        }, i.createElement(b.W, {
                            color: b.O.Alt2,
                            type: b.Tb.P
                        }, Object(s.d)("Your AutoMod setting:", "AutoModSettingsSlider"))), i.createElement(b.ob, {
                            min: 0,
                            max: 4,
                            step: 1,
                            value: String(t),
                            onChange: this.handleSliderMove,
                            "data-test-selector": "auto-mod-slider"
                        }), i.createElement(b.Xa, {
                            display: b.X.Flex
                        }, i.createElement(b.Xa, {
                            padding: {
                                right: .5
                            }
                        }, a), i.createElement(b.W, {
                            color: b.O.Alt2,
                            type: b.Tb.Strong
                        }, n)), i.createElement(b.Cb, {
                            background: b.r.Alt2,
                            padding: 1,
                            className: "auto-mod-wrapper__carat",
                            position: b.hb.Relative
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
                            return e ? i.createElement(b.Cb, {
                                borderLeft: !0,
                                borderRight: !0,
                                padding: 2,
                                "data-test-selector": C
                            }, i.createElement("img", {
                                src: "https://s.jtvnw.net/jtv_user_pictures/hosted_images/automod_setup_en.gif"
                            }), i.createElement(b.Cb, null, i.createElement(b.Cb, {
                                padding: {
                                    top: 2
                                },
                                textAlign: b.Pb.Center
                            }, Object(s.d)("Your current AutoMod level: 0", "AutoModSettings")), i.createElement(b.Cb, {
                                margin: {
                                    x: 2
                                },
                                padding: {
                                    y: 1,
                                    x: 5
                                },
                                textAlign: b.Pb.Center
                            }, i.createElement(b.z, {
                                fullWidth: !0,
                                onClick: t.showAutoModCategories,
                                state: b.E.Default
                            }, Object(s.d)("Choose level", "AutoModSettings"))))) : t.state.isCustom || void 0 === t.state.level ? i.createElement(b.Cb, {
                                borderLeft: !0,
                                borderRight: !0,
                                padding: {
                                    y: 1,
                                    x: 2
                                }
                            }, i.createElement(b.Ja, {
                                gutterSize: b.Ka.Small
                            }, i.createElement(b.P, {
                                cols: 6
                            }, i.createElement(b.Xa, {
                                display: b.X.Flex,
                                fullHeight: !0,
                                alignItems: b.f.Center
                            }, i.createElement(b.W, {
                                color: b.O.Alt2,
                                type: b.Tb.Span
                            }, Object(s.d)("Your AutoMod setting:", "AutoModSettings")), i.createElement(b.Xa, {
                                padding: {
                                    left: .5
                                },
                                display: b.X.InlineFlex
                            }, i.createElement(b.W, {
                                color: b.O.Alt2,
                                type: b.Tb.Strong
                            }, Object(s.d)("Custom", "AutoModSettingsValue"))))), i.createElement(b.P, {
                                cols: 5
                            }, i.createElement(b.z, {
                                type: b.F.Hollow,
                                onClick: t.revertToSlider
                            }, Object(s.d)("Revert to defaults", "AutoModSettings"))))) : i.createElement(E, {
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
                        if (!this.props.data || this.props.data.loading || this.props.data.error || null === this.props.data.user) return i.createElement(b.Cb, {
                            "data-test-selector": "automod-placeholder-container"
                        });
                        if (!this.hasAutoModDashboardAccess()) return i.createElement(b.Cb, {
                            margin: {
                                top: 2
                            },
                            color: b.O.Alt2,
                            textAlign: b.Pb.Center,
                            "data-test-selector": "automod-placeholder-container"
                        }, i.createElement(b.W, {
                            type: b.Tb.H3,
                            italic: !0
                        }, Object(s.d)("You do not have permission to access this dashboard.", "AutoModSettings")));
                        var e = this.isBlankState();
                        return i.createElement(b.Xa, null, i.createElement(b.Cb, {
                            margin: {
                                bottom: 2
                            }
                        }, i.createElement(y, null)), i.createElement(b.Ja, null, i.createElement(b.P, {
                            cols: 2
                        }, i.createElement(b.W, {
                            color: b.O.Alt2,
                            type: b.Tb.Strong
                        }, Object(s.d)("AutoMod Rulesets", "AutoModSettings"))), i.createElement(b.P, {
                            cols: 5
                        }, this.AutomodTableHeader(), this.renderSlider(e), this.AutomodCategories(e), this.AutomodTableFooter(e))))
                    }, t.prototype.isBlankState = function() {
                        return !this.state.categories && !this.state.level
                    }, t.prototype.AutomodTableFooter = function(e) {
                        return e ? i.createElement(b.Cb, {
                            border: !0,
                            padding: 2,
                            background: b.r.Alt2
                        }, i.createElement(b.Ja, null, i.createElement(b.P, {
                            cols: 7
                        }, Object(s.d)("You can adjust how much moderation you'd like for your channel.", "AutoModSettings")), i.createElement(b.P, {
                            cols: 5
                        }, i.createElement(b.Xa, {
                            display: b.X.Flex,
                            fullHeight: !0,
                            flexDirection: b.Aa.Column,
                            justifyContent: b.Wa.Center,
                            alignItems: b.f.End
                        }, i.createElement(b.z, {
                            onClick: this.showAutoModCategories,
                            type: b.F.Hollow
                        }, Object(s.d)("See how rulesets work", "AutoModSettings")))))) : i.createElement(b.Xa, null, i.createElement(b.Cb, {
                            border: !0,
                            padding: {
                                y: 1,
                                x: 2
                            },
                            background: b.r.Alt2
                        }, i.createElement("a", {
                            href: "https://help.twitch.tv/customer/portal/articles/2662186-how-to-use-automod",
                            target: "_blank"
                        }, Object(s.d)("Learn more in our help page", "AutoModSettings"))), i.createElement(b.Xa, {
                            display: b.X.Flex,
                            padding: {
                                y: 1
                            },
                            margin: {
                                top: .5
                            }
                        }, i.createElement(b.Xa, {
                            padding: {
                                right: .5
                            }
                        }, i.createElement(b.z, {
                            onClick: this.updateAutoModProperties,
                            state: this.state.submissionState
                        }, Object(s.d)("Save", "AutoModSettings"))), i.createElement(b.z, {
                            onClick: this.resetAutoModProperties,
                            type: b.F.Text,
                            disabled: this.state.cancelDisabled
                        }, Object(s.d)("Cancel", "AutoModSettings"))))
                    }, t.prototype.AutomodCategories = function(e) {
                        if (!e && 0 !== this.state.level && this.state.categories) {
                            var t = Object(s.d)("Identity language", "AutoModSettings"),
                                n = Object(s.d)("Referring to race, religion, gender, orientation, disability, or similar", "AutoModSettings"),
                                a = Object(s.d)("Sexually Explicit Language", "AutoModSettings"),
                                r = Object(s.d)("Referring to sexual acts, sexual content, and body parts", "AutoModSettings"),
                                o = Object(s.d)("Aggressive language", "AutoModSettings"),
                                d = Object(s.d)("Hostility towards other people, often associated with bullying", "AutoModSettings"),
                                l = Object(s.d)("Profanity", "AutoModSettings"),
                                c = Object(s.d)("Expletives, curse words, things you wouldn’t say to grandma", "AutoModSettings");
                            return i.createElement(b.Cb, {
                                borderLeft: !0,
                                borderRight: !0,
                                padding: 2,
                                background: b.r.Alt2,
                                "data-test-selector": "automod-categories-container"
                            }, i.createElement(b.Ja, {
                                gutterSize: b.Ka.Small
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
                                description: d
                            }), i.createElement(f, {
                                category: 0,
                                categoryLevel: this.state.categories[0],
                                onLevelChange: this.handleCategoryLevelChange
                            }), i.createElement(S, {
                                category: l,
                                description: c
                            }), i.createElement(f, {
                                category: 2,
                                categoryLevel: this.state.categories[2],
                                onLevelChange: this.handleCategoryLevelChange
                            })))
                        }
                    }, t.prototype.AutomodTableHeader = function() {
                        var e = Object(s.d)("AutoMod", "AutoModSettings"),
                            t = Object(s.d)("Automatically hold risky messages for moderators to review.", "AutoModSettings");
                        return i.createElement(b.G, {
                            border: !0,
                            row: !0
                        }, i.createElement(b.Xa, {
                            padding: {
                                y: 1,
                                x: 2
                            }
                        }, i.createElement(b.Cb, {
                            className: "auto-mod-wrapper__shield",
                            padding: {
                                y: .5,
                                x: .5
                            },
                            display: b.X.Flex,
                            color: b.O.Overlay
                        }, i.createElement(b.qb, {
                            asset: b.rb.Automod,
                            type: b.sb.Inherit
                        }))), i.createElement(b.Xa, {
                            padding: {
                                y: 1,
                                right: 2
                            }
                        }, i.createElement(b.W, null, e), i.createElement(b.W, {
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
                O = n("hxCz");
            var M, L, I = Object(o.compose)(Object(p.connect)(function(e) {
                    return {
                        isLoggedIn: Object(g.f)(e)
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
                }), Object(v.a)(O, {
                    name: "onUpdateAutoModProperties"
                }), Object(m.b)("AutomodControls"))(T),
                D = n("8Ad5");
            n("zjB3");
            ! function(e) {
                e.DisplayedTerm = "term", e.AddTermInput = "add-term-input", e.EditTermInput = "edit-term-input", e.EditTermArea = "edit-term-area", e.AddTermButton = "add-term-button", e.EditTermButton = "edit-term-button", e.DelTermButton = "del-term-button", e.EditConfirmButton = "edit-confirm-button", e.EditCancelButton = "edit-cancel-button"
            }(M || (M = {})),
            function(e) {
                e.Banned = "banned", e.Permitted = "permitted"
            }(L || (L = {}));
            var x = function(e) {
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
                                        errorAddingLabel: Object(s.d)("Duplicate Term", "ChatTermsControl")
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
                            e.keyCode === D.a.Enter && t.handleAdd(), t.state.errorAddingTerm && t.setState({
                                errorAddingTerm: !1
                            })
                        }, t.handleEditKeyDown = function(e) {
                            switch (e.keyCode) {
                                case D.a.Enter:
                                    t.confirmEdit();
                                    break;
                                case D.a.Esc:
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
                        return i.createElement(b.Pa, {
                            fullWidth: !0
                        }, i.createElement("div", {
                            className: "chat-terms-control",
                            "data-a-target": "chat-terms-control"
                        }, i.createElement(b.Xa, {
                            display: b.X.Flex,
                            flexDirection: b.Aa.Row,
                            alignItems: b.f.Stretch,
                            fullWidth: !0,
                            flexWrap: b.Ba.NoWrap
                        }, i.createElement(b.Xa, {
                            flexGrow: 1
                        }, i.createElement(b.Ea, {
                            label: "",
                            error: this.state.errorAddingTerm,
                            errorMessage: this.state.errorAddingLabel || ""
                        }, i.createElement(b.Ra, {
                            "data-a-target": "add-term-input",
                            "data-test-selector": M.AddTermInput,
                            ariaLabel: Object(s.d)("Add term", "ChatTermsControl"),
                            refDelegate: this.saveAddInputRef,
                            type: b.Ta.Text,
                            placeholder: this.props.addPlaceholder,
                            onKeyDown: this.handleAddKeyDown,
                            error: this.state.errorAddingTerm
                        }))), i.createElement(b.Xa, {
                            flexShrink: 0,
                            margin: {
                                top: .5
                            }
                        }, i.createElement(b.z, {
                            onClick: this.handleAdd,
                            "data-a-target": "add-term",
                            "data-test-selector": M.AddTermButton
                        }, Object(s.d)("Add", "ChatTermsControl")))), i.createElement(b.Xa, {
                            className: "chat-terms"
                        }, e)))
                    }, t.prototype.renderTerm = function(e, t) {
                        if (t === this.state.editingIndex) return this.renderEditTermRow(e, t);
                        var n = null;
                        if (!0 == !e.isModEditable && this.props.type === L.Banned) n = i.createElement(b.Xa, {
                            alignItems: b.f.Center,
                            display: b.X.Flex,
                            margin: {
                                left: "auto"
                            },
                            fullHeight: !0
                        }, i.createElement(b.eb, {
                            label: Object(s.d)("private", "ChatTermsControl")
                        }));
                        else if (e.expiresAt) {
                            var a = Object(s.i)(new Date(e.expiresAt), {
                                style: "numeric"
                            });
                            n = i.createElement(b.Xa, {
                                margin: {
                                    right: 1
                                }
                            }, i.createElement(b.W, {
                                ellipsis: !0,
                                color: b.O.Alt2
                            }, " ", Object(s.d)("Expires {relativeTime}", {
                                relativeTime: a
                            }, "ChatTermsControl"), " "))
                        }
                        var r = null;
                        t === this.state.justSavedIndex && (r = i.createElement(b.Pa, {
                            position: b.hb.Absolute,
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
                        }, i.createElement(b.Xa, {
                            position: b.hb.Absolute,
                            attachRight: !0
                        }, Object(s.d)("Saved", "ChatTermsControl"))))));
                        var o = Object(s.d)("Edit", "ChatTermsControl"),
                            d = Object(s.d)("Delete", "ChatTermsControl");
                        return i.createElement(b.Pa, {
                            className: "chat-term-row",
                            key: t,
                            "data-index": t
                        }, i.createElement("div", {
                            className: "chat-terms-control__term-row",
                            "data-selectable": t,
                            "data-test-selector": M.EditTermArea
                        }, i.createElement(b.Ja, null, i.createElement(b.P, {
                            cols: 6
                        }, i.createElement(b.Xa, {
                            "data-test-selector": M.DisplayedTerm,
                            margin: {
                                right: 1
                            },
                            display: b.X.Flex,
                            alignItems: b.f.Center,
                            justifyContent: b.Wa.Between,
                            fullHeight: !0
                        }, i.createElement(b.W, {
                            ellipsis: !0
                        }, e.phrases.join(" ")))), i.createElement(b.P, {
                            cols: 4
                        }, i.createElement(b.Xa, {
                            alignItems: b.f.Center,
                            display: b.X.Flex,
                            flexWrap: b.Ba.NoWrap,
                            fullHeight: !0
                        }, n)), i.createElement(b.P, {
                            cols: 1
                        }, i.createElement(b.Wb, {
                            label: o
                        }, i.createElement(b.A, {
                            "data-a-target": "edit-term",
                            "data-test-selector": M.EditTermButton,
                            icon: b.rb.Edit,
                            ariaLabel: o,
                            onClick: this.handleEdit
                        }))), i.createElement(b.P, {
                            cols: 1
                        }, i.createElement(b.Wb, {
                            label: d
                        }, i.createElement(b.A, {
                            "data-a-target": "delete-term",
                            "data-test-selector": M.DelTermButton,
                            icon: b.rb.Trash,
                            ariaLabel: d,
                            onClick: this.handleDelete
                        })), r))))
                    }, t.prototype.renderEditTermRow = function(e, t) {
                        var n = Object(s.d)("Save", "ChatTermsControl"),
                            a = Object(s.d)("Cancel", "ChatTermsControl"),
                            r = this.renderEditBalloon(e, t);
                        return i.createElement(k.a, {
                            key: "clickout-item-" + t,
                            onClickOut: this.cancelEdit
                        }, i.createElement(b.Xa, {
                            key: "line-item-" + t,
                            className: "chat-term-row",
                            position: b.hb.Relative
                        }, i.createElement(b.Xa, {
                            key: t,
                            "data-index": t,
                            display: b.X.Flex,
                            flexDirection: b.Aa.Row,
                            flexWrap: b.Ba.NoWrap
                        }, i.createElement(b.Xa, {
                            flexGrow: 1
                        }, i.createElement(b.Ra, {
                            autoFocus: !0,
                            ariaLabel: Object(s.d)("Edit term", "ChatTermsControl"),
                            "data-a-target": "edit-term-input",
                            "data-test-selector": M.EditTermInput,
                            refDelegate: this.saveEditInputRef,
                            type: b.Ta.Text,
                            defaultValue: e.phrases.join(" "),
                            onKeyDown: this.handleEditKeyDown
                        })), i.createElement(b.Xa, {
                            flexShrink: 0
                        }, i.createElement(b.Wb, {
                            label: n
                        }, i.createElement(b.A, {
                            "data-a-target": "save-term-edit",
                            "data-test-selector": M.EditConfirmButton,
                            icon: b.rb.Check,
                            ariaLabel: n,
                            onClick: this.confirmEdit
                        })), i.createElement(b.Wb, {
                            label: a
                        }, i.createElement(b.A, {
                            "data-a-target": "cancel-term-edit",
                            "data-test-selector": M.EditCancelButton,
                            icon: b.rb.Close,
                            ariaLabel: a,
                            onClick: this.cancelEdit
                        })))), r))
                    }, t.prototype.renderEditBalloon = function(e, t) {
                        var n = null;
                        return e.expiresAt ? n = i.createElement(b.Xa, null, Object(s.d)("Save changes to make term always active", "ChatTermsControl")) : this.props.type === L.Banned && this.props.channelID === this.props.userID && (n = i.createElement(b.Xa, null, i.createElement(b.N, {
                            "data-test-selector": "isModEditableCheckbox",
                            id: "isModEditableCheckbox",
                            label: "Mark as Private",
                            defaultChecked: !e.isModEditable,
                            onChange: this.onCheckModEditableChange
                        }), i.createElement(b.W, {
                            color: b.O.Alt2,
                            fontSize: b.Ca.Size8
                        }, Object(s.d)("Private terms are not viewable to anyone except for yourself.", "ChatTermsControl")))), n ? i.createElement(b.u, {
                            key: "edit-balloon-" + t,
                            direction: b.v.Right,
                            size: b.w.Large,
                            show: !0
                        }, i.createElement(b.Xa, {
                            margin: 1
                        }, i.createElement(b.Cb, {
                            borderBottom: !0,
                            margin: {
                                bottom: .5
                            }
                        }, e.phrases.join(" ")), n)) : null
                    }, t
                }(i.Component),
                j = n("4l1H"),
                F = n("Temx"),
                P = n("kk6A"),
                w = n("5R7h"),
                _ = (n("R17a"), function(e) {
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
                                            return null === this.state.terms ? [2, !1] : this.props.type !== L.Banned ? [3, 2] : [4, this.props.addChannelBlockedTerm({
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
                                            return this.props.type !== L.Permitted ? [3, 4] : [4, this.props.addChannelPermittedTerm({
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
                                            }), this.props.type !== L.Banned ? [3, 2] : [4, this.props.deleteChannelBlockedTerm({
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
                                            return this.props.type !== L.Permitted ? [3, 4] : [4, this.props.deleteChannelPermittedTerm({
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
                        return this.props.type === L.Banned && (e = i.createElement(b.W, {
                            color: b.O.Alt2,
                            fontSize: b.Ca.Size8
                        }, Object(s.d)("Tip: Some terms may be marked as Private and only visible to the channel owner.", "ChatTermsSetting"))), i.createElement(b.Xa, {
                            margin: {
                                bottom: 2
                            }
                        }, i.createElement("div", {
                            className: "chat-terms-setting"
                        }, i.createElement(x, {
                            channelID: this.props.channelID,
                            userID: this.props.userID,
                            addPlaceholder: this.props.addPlaceholderMsg,
                            terms: this.state.terms,
                            onTermAdd: this.addTerm,
                            onTermEdit: this.editTerm,
                            onTermDelete: this.deleteTerm,
                            type: this.props.type
                        })), i.createElement(b.Xa, {
                            margin: {
                                top: .5
                            }
                        }, e))
                    }, t = a.__decorate([Object(v.a)(j, {
                        name: "addChannelBlockedTerm"
                    }), Object(v.a)(F, {
                        name: "addChannelPermittedTerm"
                    }), Object(v.a)(P, {
                        name: "deleteChannelBlockedTerm"
                    }), Object(v.a)(w, {
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
                        return !this.props.data || this.props.data.loading || this.props.data.error || !this.props.data.user ? i.createElement(b.Xa, null) : i.createElement(b.Cb, {
                            padding: {
                                top: 2
                            }
                        }, i.createElement(b.Ja, null, i.createElement(b.P, {
                            cols: 2
                        }, i.createElement(b.W, {
                            color: b.O.Alt2,
                            type: b.Tb.Strong
                        }, Object(s.d)("Blocked and Permitted Terms", "AutoModTermsTitle"))), i.createElement(b.P, {
                            cols: 5
                        }, i.createElement(b.W, {
                            color: b.O.Alt2,
                            type: b.Tb.Strong
                        }, Object(s.d)("Blocked Terms or Phrases", "AutoModBlockedTermsTitle")), i.createElement(b.W, {
                            color: b.O.Alt2
                        }, Object(s.d)("Messages containing these terms or phrases will be blocked from chat. Terms are automatically added when a mod denies a caught message.", "AutoModBlockedTermsDescription")), i.createElement(_, {
                            channelID: this.props.data.user.id,
                            userID: this.props.data.currentUser.id,
                            type: L.Banned,
                            addPlaceholderMsg: Object(s.d)("Add new blocked term or phrase", "AutoModBlockedTermAdditionPlaceHolder"),
                            terms: this.props.data.user.blockedTerms
                        }), i.createElement(b.W, {
                            color: b.O.Alt2,
                            type: b.Tb.Strong
                        }, Object(s.d)("Permitted Terms or Phrases", "AutoModPermittedTermsTitle")), i.createElement(b.W, {
                            color: b.O.Alt2
                        }, Object(s.d)("Messages containing these terms, and no other blocked terms, will not be caught by AutoMod. Terms are automatically added when a mod allows a message.", "AutoModPermittedTermsDescription")), i.createElement(_, {
                            channelID: this.props.data.user.id,
                            userID: this.props.data.currentUser.id,
                            type: L.Permitted,
                            addPlaceholderMsg: Object(s.d)("Add new permitted term or phrase", "AutoModPermittedTermsAdditionPlaceholder"),
                            terms: this.props.data.user.permittedTerms
                        }), i.createElement(b.N, {
                            defaultChecked: this.props.data.user.chatSettings.isOptedOutOfGlobalBannedWordsList,
                            label: Object(s.d)("Opt out of commonly blocked terms", "AutoModSettings"),
                            onChange: this.handleOptOutChange
                        }), i.createElement(b.W, {
                            color: b.O.Alt2,
                            fontSize: b.Ca.Size8
                        }, Object(s.d)("AutoMod level 0 automatically holds messages containing commonly blocked terms for mods to review. If you enable this feature AutoMod won't hold these messages.", "AutoModSettings")))))
                    }, t
                }(i.Component),
                R = n("Z6v5"),
                W = n("ah12");
            var X = Object(o.compose)(Object(p.connect)(function(e) {
                    return {
                        isLoggedIn: Object(g.f)(e)
                    }
                }), Object(v.a)(R, {
                    options: function(e) {
                        return {
                            variables: {
                                channelLogin: e.channelLogin
                            },
                            fetchPolicy: "cache-and-network"
                        }
                    }
                }), Object(v.a)(W, {
                    name: "onUpdateChatSettings"
                }), Object(m.b)("ChatTermsContainer"))(B),
                V = n("DMoW"),
                U = n("Ww25"),
                G = n("l/RX"),
                z = n("Jpqj"),
                q = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            canAccess: !!t.props.data.user && !!t.props.data.user.modLogsRoleAccess && t.props.data.user.modLogsRoleAccess.accessLevel === V.A.WRITE,
                            error: !1,
                            enabled: !1
                        }, t.onChange = function() {
                            return a.__awaiter(t, void 0, void 0, function() {
                                return a.__generator(this, function(e) {
                                    switch (e.label) {
                                        case 0:
                                            return this.props.data.currentUser && this.props.data.currentUser.id ? this.state.canAccess ? [4, this.toggleAccessOff()] : [3, 2] : [2];
                                        case 1:
                                            return e.sent(), [3, 4];
                                        case 2:
                                            return [4, this.toggleAccessOn()];
                                        case 3:
                                            e.sent(), e.label = 4;
                                        case 4:
                                            return [2]
                                    }
                                })
                            })
                        }, t.toggleAccessOff = function() {
                            if (t.props.data.currentUser && t.props.data.currentUser.id && t.props.setModLogsAccess) return t.props.setModLogsAccess({
                                variables: {
                                    input: {
                                        channelID: t.props.data.currentUser.id,
                                        channelRole: V.j.MODERATOR,
                                        accessLevel: V.A.NONE
                                    }
                                }
                            }).then(function() {
                                t.setState({
                                    canAccess: !1,
                                    error: !1
                                })
                            }).catch(function() {
                                t.setState({
                                    error: !0
                                })
                            })
                        }, t.toggleAccessOn = function() {
                            if (t.props.data.currentUser && t.props.data.currentUser.id) return t.props.setModLogsAccess({
                                variables: {
                                    input: {
                                        channelID: t.props.data.currentUser.id,
                                        channelRole: V.j.MODERATOR,
                                        accessLevel: V.A.WRITE
                                    }
                                }
                            }).then(function() {
                                t.setState({
                                    canAccess: !0,
                                    error: !1
                                })
                            }).catch(function() {
                                t.setState({
                                    error: !0
                                })
                            })
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.componentWillMount = function() {
                        var e = s.b.get("viewer_card_mod_logs", !1);
                        this.setState({
                            enabled: e
                        })
                    }, t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive()
                    }, t.prototype.componentWillReceiveProps = function(e) {
                        !e.data.loading && this.props.data.loading && e.data.user && e.data.user.modLogsRoleAccess && this.setState({
                            canAccess: e.data.user.modLogsRoleAccess.accessLevel === V.A.WRITE,
                            error: !!e.data.error
                        })
                    }, t.prototype.render = function() {
                        return this.props.data.loading || !this.state.enabled ? null : this.props.data.currentUser && this.props.data.user && this.props.data.currentUser.id !== this.props.data.user.id ? null : i.createElement(b.Cb, {
                            borderTop: !0,
                            margin: {
                                top: 2
                            },
                            padding: {
                                top: 3
                            }
                        }, i.createElement(b.Ja, null, i.createElement(b.P, {
                            cols: 2
                        }, i.createElement(b.W, {
                            color: b.O.Alt2,
                            type: b.Tb.Strong
                        }, Object(s.d)("Chat Logs for Mods", "ModLogsAccessToggle")), i.createElement(b.Xa, {
                            display: b.X.Inline,
                            padding: {
                                x: 1
                            }
                        }, i.createElement(b.eb, {
                            label: Object(s.d)("private", "ModLogsAccessToggle")
                        }))), i.createElement(b.P, {
                            cols: 5
                        }, i.createElement(b.Vb, {
                            checked: this.state.canAccess,
                            error: this.state.error,
                            disabled: this.props.data.loading || !!this.props.data.error,
                            onChange: this.onChange,
                            "data-test-selector": "dashboard-moderation-chat-logs-access-toggle"
                        }), i.createElement(U.a, {
                            text: Object(s.d)("Allows your moderators to view chat and ban history for users in your channel, and view and add comments on users.", "ModLogsAccessToggle")
                        }), this.state.error && i.createElement(b.W, {
                            color: b.O.Error,
                            "data-test-selector": "dashboard-moderation-chat-logs-access-error-message"
                        }, Object(s.d)("Sorry, something went wrong. Please try again later.", "ModLogsAccessToggle")))))
                    }, t
                }(i.Component),
                H = Object(o.compose)(Object(m.b)("ModLogsAccessToggle"), Object(v.a)(z, {
                    options: function(e) {
                        return {
                            variables: {
                                channelLogin: e.channelLogin
                            }
                        }
                    }
                }), Object(v.a)(G, {
                    name: "setModLogsAccess"
                }))(q),
                $ = (n("gBSZ"), function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        return i.createElement(b.Cb, {
                            className: "auto-mod-wrapper",
                            padding: {
                                y: 3
                            }
                        }, i.createElement(I, {
                            channelLogin: this.props.channelLogin
                        }), i.createElement(b.Cb, {
                            borderTop: !0,
                            padding: {
                                top: .5
                            },
                            margin: {
                                y: 1
                            }
                        }), i.createElement(X, {
                            channelLogin: this.props.channelLogin
                        }), i.createElement(H, {
                            channelLogin: this.props.channelLogin
                        }))
                    }, t
                }(i.Component)),
                J = Object(h.compose)(Object(m.b)("AutoModWrapper"))($);
            var Q = Object(p.connect)(function(e) {
                    return {
                        isLoggedIn: Object(g.f)(e)
                    }
                })(J),
                K = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        return i.createElement(d.b, null, i.createElement(b.Xa, {
                            padding: 2,
                            position: b.hb.Relative
                        }, i.createElement(b.W, {
                            type: b.Tb.H3
                        }, Object(s.d)("Moderation Settings", "AutoModPage")), i.createElement(Q, {
                            channelLogin: this.props.match.params.channelName
                        })))
                    }, t
                }(i.Component),
                Y = Object(o.compose)(r.a, Object(m.b)("AutoModPage", {
                    autoReportInteractive: !0,
                    destination: c.a.DashboardSettingsAutoMod
                }), Object(l.a)({
                    location: u.PageviewLocation.DashboardSettingsAutoMod
                }))(K);
            n.d(t, "AutoModPageComponent", function() {
                return K
            }), n.d(t, "AutoModPage", function() {
                return Y
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
        "l/RX": function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "mutation",
                    name: {
                        kind: "Name",
                        value: "setModLogsAccess"
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
                                    value: "SetModLogsAccessInput"
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
                                value: "setModLogsAccess"
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
                                        value: "modLogsAccess"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "channelRole"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "accessLevel"
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
                    end: 139
                }
            };
            n.loc.source = {
                body: "mutation setModLogsAccess($input: SetModLogsAccessInput!) {\nsetModLogsAccess(input: $input) {\nmodLogsAccess {\nchannelRole\naccessLevel\n}\n}\n}",
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