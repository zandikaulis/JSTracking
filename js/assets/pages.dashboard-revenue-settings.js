webpackJsonp([100], {
    "+0KR": function(e, t, n) {
        "use strict";
        var a = n("oR9V");
        n.d(t, "a", function() {
            return a.a
        }), n.d(t, "b", function() {
            return a.b
        })
    },
    "+QF8": function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "EmoticonPrefix_SubmitEmoticon"
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
                                value: "SubmitEmoticonPrefixInput"
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
                            value: "submitEmoticonPrefix"
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
                                    value: "response"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
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
                                            value: "state"
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
                end: 142
            }
        };
        n.loc.source = {
            body: "mutation EmoticonPrefix_SubmitEmoticon($input: SubmitEmoticonPrefixInput!) {\nsubmitEmoticonPrefix(input: $input) {\nresponse {\nname\nstate\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    "/D4H": function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "LoyaltyBadgesPage_Query"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "login"
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
                                    value: "login"
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
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 78
            }
        };
        n.loc.source = {
            body: "query LoyaltyBadgesPage_Query ($login: String!) {\nuser(login: $login) {\nid\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    "/GDT": function(e, t) {},
    "17w3": function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "PayoutSettingsPage_CurrentUser"
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
                                    value: "payoutInvite"
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
                                            value: "category"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "workflow"
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
                                                    value: "currentStep"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "payoutSettingsURL"
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
                end: 134
            }
        };
        n.loc.source = {
            body: "query PayoutSettingsPage_CurrentUser {\ncurrentUser {\nid\npayoutInvite {\nid\ncategory\nworkflow {\nid\ncurrentStep\npayoutSettingsURL\n}\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    "212O": function(e, t) {},
    "24ae": function(e, t) {},
    "2pd5": function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "Commerce_AcceptAmendment"
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
                                value: "CommerceAmendmentType"
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
                            value: "setAmendmentAcceptance"
                        },
                        arguments: [{
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "input"
                            },
                            value: {
                                kind: "ObjectValue",
                                fields: [{
                                    kind: "ObjectField",
                                    name: {
                                        kind: "Name",
                                        value: "amendmentType"
                                    },
                                    value: {
                                        kind: "Variable",
                                        name: {
                                            kind: "Name",
                                            value: "input"
                                        }
                                    }
                                }]
                            }
                        }],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "twitch"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "commerceAmendment"
                                        },
                                        arguments: [{
                                            kind: "Argument",
                                            name: {
                                                kind: "Name",
                                                value: "types"
                                            },
                                            value: {
                                                kind: "ListValue",
                                                values: [{
                                                    kind: "Variable",
                                                    name: {
                                                        kind: "Name",
                                                        value: "input"
                                                    }
                                                }]
                                            }
                                        }],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "isSigned"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "id"
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
                end: 190
            }
        };
        n.loc.source = {
            body: "mutation Commerce_AcceptAmendment($input: CommerceAmendmentType!) {\nsetAmendmentAcceptance(input: {\namendmentType: $input\n}){\ntwitch {\ncommerceAmendment(types:[$input]) {\nisSigned\nid\n}\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    "3+pE": function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "DashboardRevenueSettingsRoot"
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
                                    value: "login"
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
                                    }]
                                }
                            }]
                        }
                    }, {
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
                                    value: "payoutInvite"
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
                                            value: "category"
                                        },
                                        arguments: [],
                                        directives: []
                                    }]
                                }
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "payoutPlans"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
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
                                            value: "isReceivingRevenue"
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
                end: 219
            }
        };
        n.loc.source = {
            body: "query DashboardRevenueSettingsRoot($channelName: String!) {\ncurrentUser {\nid\nlogin\nroles {\nisStaff\n}\n}\nchannel: user(login: $channelName) {\nid\npayoutInvite {\nid\ncategory\n}\npayoutPlans {\ncategory\nisReceivingRevenue\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    "3ecc": function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "UpgradeTermsPage_AcceptProgramAgreement"
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
                                value: "AcceptProgramAgreementInput"
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
                            value: "acceptProgramAgreement"
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
                                    value: "workflow"
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
                                            value: "currentStep"
                                        },
                                        arguments: [],
                                        directives: []
                                    }]
                                }
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "error"
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
                end: 166
            }
        };
        n.loc.source = {
            body: "mutation UpgradeTermsPage_AcceptProgramAgreement($input: AcceptProgramAgreementInput!) {\nacceptProgramAgreement(input: $input) {\nworkflow {\nid\ncurrentStep\n}\nerror\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    "3fb4": function(e, t) {},
    "3w+p": function(e, t, n) {
        "use strict";
        var a;
        n.d(t, "a", function() {
                return a
            }),
            function(e) {
                e[e.Summary = 0] = "Summary", e[e.Registration = 1] = "Registration", e[e.Agreement = 2] = "Agreement", e[e.TaxInterview = 3] = "TaxInterview", e[e.PayoutMethod = 4] = "PayoutMethod", e[e.Review = 5] = "Review"
            }(a || (a = {}))
    },
    "4mOb": function(e, t) {},
    "5EkD": function(e, t, n) {
        "use strict";
        var a = n("GiK3"),
            r = n("Odds"),
            i = (n("TJLs"), function(e) {
                return a.createElement(r._35, {
                    className: "settings-page-header",
                    borderTop: !0,
                    borderRight: !0,
                    borderLeft: !0,
                    background: r.n.Base
                }, a.createElement(r._6, {
                    linkTo: e.linkToParent,
                    onClick: e.onClick,
                    alpha: !0
                }, a.createElement(r._8, {
                    display: r.R.Flex,
                    flexWrap: r.U.NoWrap
                }, a.createElement(r._8, {
                    display: r.R.Flex,
                    padding: {
                        x: 1
                    }
                }, a.createElement(r._24, {
                    asset: r._25.AngleLeft,
                    height: 20,
                    width: 20
                })), a.createElement(r._8, {
                    flexGrow: 1,
                    margin: 2
                }, a.createElement(r.Q, {
                    bold: !0,
                    fontSize: r.V.Size4
                }, e.title), a.createElement(r.Q, {
                    color: r.K.Alt2
                }, e.description)))))
            });
        n.d(t, "a", function() {
            return i
        })
    },
    "6/rd": function(e, t) {},
    "6iLs": function(e, t) {},
    "7GS+": function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "PayoutOnboardingAgreement_AcceptProgramAgreement"
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
                                value: "AcceptProgramAgreementInput"
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
                            value: "acceptProgramAgreement"
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
                                    value: "workflow"
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
                                            value: "currentStep"
                                        },
                                        arguments: [],
                                        directives: []
                                    }]
                                }
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "error"
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
                end: 175
            }
        };
        n.loc.source = {
            body: "mutation PayoutOnboardingAgreement_AcceptProgramAgreement($input: AcceptProgramAgreementInput!) {\nacceptProgramAgreement(input: $input) {\nworkflow {\nid\ncurrentStep\n}\nerror\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    "7iMl": function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "Fuel_CommerceAmendment"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "login"
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
                }, {
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "amendmentType"
                        }
                    },
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "CommerceAmendmentType"
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
                                value: "login"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "login"
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
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "twitch"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "commerceAmendment"
                                        },
                                        arguments: [{
                                            kind: "Argument",
                                            name: {
                                                kind: "Name",
                                                value: "types"
                                            },
                                            value: {
                                                kind: "ListValue",
                                                values: [{
                                                    kind: "Variable",
                                                    name: {
                                                        kind: "Name",
                                                        value: "amendmentType"
                                                    }
                                                }]
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
                                                    value: "isSigned"
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
                end: 197
            }
        };
        n.loc.source = {
            body: "query Fuel_CommerceAmendment($login: String! $amendmentType: CommerceAmendmentType!) {\nuser(login: $login) {\nid\ndisplayName\ntwitch {\ncommerceAmendment(types: [$amendmentType]) {\nid\nisSigned\n}\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    "8/C/": function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "ChatBadgeUploadForm_UpdateBadgeTierImages"
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
                                value: "UpdateCheerPartnerSettingsInput"
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
                            value: "updateCheerPartnerSettings"
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
                                    value: "cheer"
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
                                                    value: "tiers"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "threshold"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "badge"
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
                                                                    value: "title"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }, {
                                                                kind: "Field",
                                                                alias: {
                                                                    kind: "Name",
                                                                    value: "image1x"
                                                                },
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "imageURL"
                                                                },
                                                                arguments: [{
                                                                    kind: "Argument",
                                                                    name: {
                                                                        kind: "Name",
                                                                        value: "size"
                                                                    },
                                                                    value: {
                                                                        kind: "EnumValue",
                                                                        value: "NORMAL"
                                                                    }
                                                                }],
                                                                directives: []
                                                            }, {
                                                                kind: "Field",
                                                                alias: {
                                                                    kind: "Name",
                                                                    value: "image2x"
                                                                },
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "imageURL"
                                                                },
                                                                arguments: [{
                                                                    kind: "Argument",
                                                                    name: {
                                                                        kind: "Name",
                                                                        value: "size"
                                                                    },
                                                                    value: {
                                                                        kind: "EnumValue",
                                                                        value: "DOUBLE"
                                                                    }
                                                                }],
                                                                directives: []
                                                            }, {
                                                                kind: "Field",
                                                                alias: {
                                                                    kind: "Name",
                                                                    value: "image4x"
                                                                },
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "imageURL"
                                                                },
                                                                arguments: [{
                                                                    kind: "Argument",
                                                                    name: {
                                                                        kind: "Name",
                                                                        value: "size"
                                                                    },
                                                                    value: {
                                                                        kind: "EnumValue",
                                                                        value: "QUADRUPLE"
                                                                    }
                                                                }],
                                                                directives: []
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "user"
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
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 313
            }
        };
        n.loc.source = {
            body: "mutation ChatBadgeUploadForm_UpdateBadgeTierImages($input: UpdateCheerPartnerSettingsInput!) {\nupdateCheerPartnerSettings(input: $input) {\ncheer {\nbadges {\ntiers {\nthreshold\nbadge {\nid\ntitle\nimage1x: imageURL(size: NORMAL)\nimage2x: imageURL(size: DOUBLE)\nimage4x: imageURL(size: QUADRUPLE)\nuser {\nid\n}\n}\n}\n}\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    "81je": function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "SubsNamesSettingPage_UpdateSubscriptionProduct"
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
                                value: "UpdateSubscriptionProductInput"
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
                            value: "updateSubscriptionProduct"
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
                                    value: "product"
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
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 172
            }
        };
        n.loc.source = {
            body: "mutation SubsNamesSettingPage_UpdateSubscriptionProduct($input: UpdateSubscriptionProductInput!) {\nupdateSubscriptionProduct(input: $input) {\nproduct {\nid\ndisplayName\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    "9FLI": function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "SubsSettingsSection_Query"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "login"
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
                                    value: "login"
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
                                            value: "isPartner"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "isAffiliate"
                                        },
                                        arguments: [],
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
                                            value: "hasAdFree"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "hasFastChat"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "hasSubonlyVideoArchive"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "hasSubOnlyChat"
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
                end: 200
            }
        };
        n.loc.source = {
            body: "query SubsSettingsSection_Query ($login: String!) {\nuser(login: $login) {\nid\nroles {\nisPartner\nisAffiliate\n}\nsubscriptionProducts {\nid\nhasAdFree\nhasFastChat\nhasSubonlyVideoArchive\nhasSubOnlyChat\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    "AQc/": function(e, t, n) {
        "use strict";
        var a = n("GiK3"),
            r = n("Odds");

        function i(e) {
            var t = null;
            return e.description && (t = a.createElement(r._8, {
                margin: {
                    top: 1
                }
            }, a.createElement(r.Q, {
                color: r.K.Alt2
            }, e.description))), a.createElement(r._8, {
                margin: {
                    y: 2
                }
            }, a.createElement(r.Q, {
                type: r._49.H3,
                fontSize: r.V.Size2
            }, e.title), t)
        }
        n.d(t, "a", function() {
            return i
        })
    },
    AbdN: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "PayoutOnboardingContainer_CancelPayoutOnboardingWorkflow"
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
                                value: "CancelPayoutOnboardingWorkflowInput"
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
                            value: "cancelPayoutOnboardingWorkflow"
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
                                    value: "workflow"
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
                                            value: "currentStep"
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
                end: 193
            }
        };
        n.loc.source = {
            body: "mutation PayoutOnboardingContainer_CancelPayoutOnboardingWorkflow($input: CancelPayoutOnboardingWorkflowInput!) {\ncancelPayoutOnboardingWorkflow(input: $input) {\nworkflow {\nid\ncurrentStep\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    CR5K: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "PayoutOnboardingContainer_StartPayoutOnboardingWorkflow"
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
                                value: "StartPayoutOnboardingWorkflowInput"
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
                            value: "startPayoutOnboardingWorkflow"
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
                                    value: "workflow"
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
                                            value: "currentStep"
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
                end: 190
            }
        };
        n.loc.source = {
            body: "mutation PayoutOnboardingContainer_StartPayoutOnboardingWorkflow($input: StartPayoutOnboardingWorkflowInput!) {\nstartPayoutOnboardingWorkflow(input: $input) {\nworkflow {\nid\ncurrentStep\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    CRdy: function(e, t) {},
    Cte4: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "PayoutOnboardingContainer_CurrentUser"
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
                                    value: "payoutInvite"
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
                                            value: "workflow"
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
                                                    value: "currentStep"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "registration"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "birthdate"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "city"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "companyName"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "countryCode"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "email"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "firstName"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "lastName"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "middleName"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "postal"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "stateCode"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "streetAddress"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "streetAddress2"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "parentName"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "parentEmail"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }]
                                                }
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "taxMismatchErrors"
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
                end: 293
            }
        };
        n.loc.source = {
            body: "query PayoutOnboardingContainer_CurrentUser {\ncurrentUser {\nid\npayoutInvite {\nid\nworkflow {\nid\ncurrentStep\nregistration {\nbirthdate\ncity\ncompanyName\ncountryCode\nemail\nfirstName\nlastName\nmiddleName\npostal\nstateCode\nstreetAddress\nstreetAddress2\nparentName\nparentEmail\n}\ntaxMismatchErrors\n}\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    D6iq: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "PinnedCheerSettings_SetPinnedCheerSettings"
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
                                value: "UpdateCheerPartnerSettingsInput"
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
                            value: "updateCheerPartnerSettings"
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
                                    value: "cheer"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "recentCheer"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "canPin"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "minimumBits"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "timeoutMilliseconds"
                                                },
                                                arguments: [],
                                                directives: []
                                            }]
                                        }
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "leaderboard"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "isEnabled"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "timePeriod"
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
                end: 245
            }
        };
        n.loc.source = {
            body: "mutation PinnedCheerSettings_SetPinnedCheerSettings($input: UpdateCheerPartnerSettingsInput!) {\nupdateCheerPartnerSettings(input: $input) {\ncheer {\nrecentCheer {\ncanPin\nminimumBits\ntimeoutMilliseconds\n}\nleaderboard {\nisEnabled\ntimePeriod\n}\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    Fk2o: function(e, t) {},
    G9Ha: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "ChatEmoticonsPage_Query"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "login"
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
                                    value: "login"
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
                                    value: "emoticonPrefix"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
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
                                            value: "state"
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
                end: 108
            }
        };
        n.loc.source = {
            body: "query ChatEmoticonsPage_Query ($login: String!) {\nuser(login: $login) {\nid\nemoticonPrefix {\nname\nstate\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    "GH+X": function(e, t, n) {
        "use strict";
        var a = n("GiK3"),
            r = n("Odds"),
            i = (n("3fb4"), function(e) {
                var t = null;
                return e.footer && (t = a.createElement(r._35, {
                    padding: 2,
                    background: r.n.Alt2
                }, e.footer)), a.createElement(r._35, {
                    className: "settings-section",
                    background: r.n.Base,
                    margin: {
                        bottom: 4
                    },
                    borderRight: !0,
                    borderBottom: !0,
                    borderLeft: !0
                }, e.children, t)
            });
        n.d(t, "a", function() {
            return i
        })
    },
    HW2d: function(e, t, n) {
        "use strict";
        n.d(t, "c", function() {
            return a
        }), n.d(t, "a", function() {
            return r
        }), n.d(t, "b", function() {
            return i
        }), t.d = function(e) {
            var t = s.__assign({
                action_type: o.CLICK,
                category: "Monetization",
                section_name: "amazon_associates"
            }, e);
            l.n.track(c.SpadeEventType.PartnerAffiliateSettings, t)
        };
        var a, r, i, o, s = n("TToO"),
            l = n("6sO2"),
            c = n("vH/s");
        ! function(e) {
            e.PARTNER = "partner", e.AFFILIATE = "affiliate", e.NONE = "none"
        }(a || (a = {})),
        function(e) {
            e.NONE = "none", e.LINKED = "linked"
        }(r || (r = {})),
        function(e) {
            e.OptInEarnRevenueCheckbox = "opt_in_earn_revenue_checkbox", e.AcceptCommerceAddendum = "accept_commerce_addendum", e.LinkAccountGetStarted = "link_account_get_started", e.LinkAccountEdit = "link_account_edit"
        }(i || (i = {})),
        function(e) {
            e.CLICK = "click"
        }(o || (o = {}))
    },
    "I/Yr": function(e, t) {},
    IIxK: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return a
        }), n.d(t, "b", function() {
            return r
        });
        var a = function(e) {
                return new Promise(function(t, n) {
                    var a = new FileReader;
                    a.onload = function() {
                        var e = r(a.result);
                        t(e)
                    }, a.onerror = function(e) {
                        n(e)
                    }, a.readAsDataURL(e)
                })
            },
            r = function(e) {
                return e.replace(/data:image.*;base64,/, "")
            }
    },
    IjoR: function(e, t) {},
    J8WN: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return s
        });
        var a = n("TToO"),
            r = n("GiK3"),
            i = (n.n(r), n("Odds")),
            o = n("yU6t"),
            s = (n.n(o), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        isDraggingOver: !1
                    }, t.onDragEnter = function(e) {
                        e.preventDefault(), t.setState({
                            isDraggingOver: !0
                        })
                    }, t.onDragLeave = function(e) {
                        e.preventDefault(), t.setState({
                            isDraggingOver: !1
                        })
                    }, t.onFileInputChange = function(e) {
                        e.preventDefault(), t.finalizeSelections(e.target.files), e.target.value = ""
                    }, t.onFileDrop = function(e) {
                        e.preventDefault(), t.setState({
                            isDraggingOver: !1
                        }), t.finalizeSelections(e.dataTransfer.files)
                    }, t
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    return r.createElement(i.S, {
                        dragOver: this.state.isDraggingOver,
                        error: this.props.error
                    }, r.createElement(i._2, {
                        position: i._15.Absolute,
                        attachTop: !0,
                        attachLeft: !0,
                        fullWidth: !0,
                        fullHeight: !0,
                        zIndex: i._62.Above
                    }, r.createElement("input", {
                        "data-a-target": "file-picker-input",
                        "data-test-selector": "file-picker-input",
                        className: "drag-and-drop-file-picker__input",
                        accept: this.props.allowedFileTypes.join(","),
                        multiple: this.props.multiFile || !1,
                        onChange: this.onFileInputChange,
                        type: "file",
                        onDragLeave: this.onDragLeave,
                        onDragEnter: this.onDragEnter,
                        onDrop: this.onFileDrop
                    })), this.props.children)
                }, t.prototype.finalizeSelections = function(e) {
                    e && this.props.onFilesSubmitted(Array.from(e))
                }, t
            }(r.Component))
    },
    Jo6h: function(e, t, n) {
        "use strict";
        var a = n("GiK3"),
            r = n("6sO2"),
            i = n("OjIq"),
            o = n("Odds"),
            s = (n("IjoR"), function(e) {
                return a.createElement(o._35, {
                    className: "settings-form-group"
                }, a.createElement(i.a, null, a.createElement(o.W, {
                    error: e.error,
                    errorMessage: e.errorMessage || Object(r.d)("Sorry, something went wrong. Please try again later.", "SettingsFormGroup"),
                    hint: e.hint,
                    id: e.id,
                    label: e.label,
                    labelOptional: e.labelOptional,
                    orientation: e.orientation || o.X.Horizontal
                }, e.children)))
            });
        n.d(t, "a", function() {
            return s
        })
    },
    "K+dm": function(e, t, n) {
        "use strict";
        var a = n("TToO"),
            r = n("RH2O"),
            i = n("2KeS"),
            o = n("V5M+"),
            s = n("GiK3"),
            l = n("6sO2"),
            c = n("7vx8"),
            d = n("HW2d"),
            u = n("Jo6h"),
            m = n("Odds"),
            p = n("tu8+"),
            g = (n("pBoG"), "GAME_COMMERCE_V2"),
            h = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        amendmentAccepted: !1
                    }, t.onAmendmentClick = function() {
                        if (!t.props.data) return !1;
                        var e = {
                                channel: t.props.channelName,
                                channel_id: t.props.data.user && t.props.data.user.id,
                                partner_status: d.c.NONE,
                                associate_status: d.a.NONE
                            },
                            n = t.props.data.user && t.props.data.user.roles,
                            r = t.props.data.user && t.props.data.user.amazon.associatesStore.storeID;
                        return n && (e.partner_status = n.isPartner ? d.c.PARTNER : n.isAffiliate ? d.c.AFFILIATE : d.c.NONE), r && (e.associate_status = d.a.LINKED), Object(d.d)(a.__assign({
                            action: d.b.OptInEarnRevenueCheckbox
                        }, e)), t.props.showAmendmentModal({
                            amendmentAccepted: t.state.amendmentAccepted,
                            trackingParameters: e
                        }), !1
                    }, t
                }
                return a.__extends(t, e), t.prototype.componentWillReceiveProps = function(e) {
                    var t = e.data && e.data.user && e.data.user.twitch && e.data.user.twitch.commerceAmendment[0].isSigned || !1;
                    t !== this.state.amendmentAccepted && this.setState({
                        amendmentAccepted: t
                    })
                }, t.prototype.render = function() {
                    return !this.props.data || this.props.data.loading ? null : s.createElement(u.a, {
                        orientation: m.X.Horizontal,
                        label: Object(l.d)("Opt in to earn revenue", "AmazonRetailOffersAmendment")
                    }, s.createElement("div", {
                        onClick: this.onAmendmentClick,
                        "data-test-selector": "amazon-retail-offers-amendment-checkbox-wrapper",
                        className: "amazon-retail-offers__amendment"
                    }, s.createElement(m.J, {
                        "data-test-selector": "amazon-retail-offers-amendment-checkbox",
                        checked: this.state.amendmentAccepted,
                        disabled: !0,
                        id: "amazon-retail-offers-amendment",
                        label: Object(l.d)("Opt in to earn revenue from sales on Amazon.com", "AmazonRetailOffersAmendment")
                    })), s.createElement(m.Q, null, Object(l.d)("Please read and agree to the new Commerce Addendum to become eligible for this program.", "AmazonRetailOffersAmendment")))
                }, t = a.__decorate([Object(c.a)(p, {
                    options: function(e) {
                        return {
                            variables: {
                                login: e.channelName,
                                amendmentType: g
                            }
                        }
                    }
                })], t)
            }(s.PureComponent),
            b = n("oIkB"),
            f = n("Wedf"),
            E = "amendment-modal-accept-button",
            v = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        hasUserScrolled: !1
                    }, t.onUserScroll = function() {
                        t.setState({
                            hasUserScrolled: !0
                        })
                    }, t.renderAcceptButton = function(e) {
                        return e ? null : s.createElement(m._8, {
                            margin: {
                                left: .5,
                                right: .5
                            }
                        }, s.createElement(m.v, {
                            "data-test-selector": E,
                            type: m.B.Text,
                            onClick: t.onAccept,
                            disabled: !t.state.hasUserScrolled
                        }, Object(l.d)("Accept", "AmazonRetailOffersAmendmentModal")))
                    }, t.onClose = function() {
                        t.props.onClose()
                    }, t.onAccept = function() {
                        return a.__awaiter(t, void 0, void 0, function() {
                            return a.__generator(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        if (!0 === this.props.amendmentAccepted || !this.props.setAmendmentAcceptance) return [3, 4];
                                        e.label = 1;
                                    case 1:
                                        return e.trys.push([1, , 3, 4]), [4, this.props.setAmendmentAcceptance(Object(b.a)(g))];
                                    case 2:
                                        return e.sent(), Object(d.d)(a.__assign({
                                            action: d.b.AcceptCommerceAddendum
                                        }, this.props.trackingParameters)), [3, 4];
                                    case 3:
                                        return this.props.onClose(), [7];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, t
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    return s.createElement(m._8, {
                        padding: 3
                    }, s.createElement(m._35, {
                        padding: {
                            bottom: 3
                        },
                        borderBottom: !0,
                        textAlign: m._45.Center
                    }, s.createElement(m.Q, {
                        type: m._49.H4
                    }, Object(l.d)("Addendum to Content Partner Agreement – Commerce Addendum", "AmazonRetailOffersAmendmentModal"))), s.createElement(m._8, {
                        padding: {
                            top: 2,
                            bottom: 2
                        },
                        textAlign: m._45.Center
                    }, s.createElement(m.Q, {
                        fontSize: m.V.Size5
                    }, Object(l.d)('Please read and agree to the following addendum ("Addendum") to your Content License and Base Agreement (or Content License Agreement, as applicable) (the "Agreement") with Twitch in order to be eligible to earn revenue for certain purchases by a Twitch user that is viewing your Twitch channel.', "AmazonRetailOffersAmendmentModal"))), s.createElement(m._35, {
                        borderTop: !0,
                        borderRight: !0,
                        borderBottom: !0,
                        borderLeft: !0,
                        padding: 2
                    }, s.createElement("div", {
                        onScroll: this.onUserScroll,
                        className: "amendment-modal__amendment-text",
                        "data-test-selector": "amendment-modal-text-container"
                    }, s.createElement(m.Q, null, 'Please read and agree to the following addendum ("', s.createElement(m.Q, {
                        type: m._49.Span,
                        bold: !0
                    }, "Addendum"), '") to your Content License and Base Agreement (or Content License Agreement, as applicable) (the "', s.createElement(m.Q, {
                        type: m._49.Span,
                        bold: !0
                    }, "Agreement"), '") with Twitch in order to be eligible to earn revenue for certain purchases by a Twitch user that is viewing your Twitch channel. Twitch, in its sole discretion, may make specially-formatted links appear on your Twitch channel page (a "', s.createElement(m.Q, {
                        type: m._49.Span,
                        bold: !0
                    }, "Special Link"), '"), which would direct Twitch users to the purchase of a Product (as defined below). For every such purchase of a Product that is a Qualifying Purchase (as defined below), you will receive a fee (a "', s.createElement(m.Q, {
                        type: m._49.Span,
                        bold: !0
                    }, "Product Purchase Fee"), '") that will be calculated as a certain percentage as published by Twitch in the Supplemental Fees Statement, currently available at ', s.createElement("a", {
                        href: "https://www.twitch.tv/p/legal/supplemental-fees-statement/",
                        target: "_blank",
                        rel: "noopener noreferrer"
                    }, "https://www.twitch.tv/p/legal/supplemental-fees-statement/"), ' or a successor website (as may be updated from time to time) (the "', s.createElement(m.Q, {
                        type: m._49.Span,
                        bold: !0
                    }, "Supplemental Fees Statement"), '"), of (a) the purchase price of such Product, as such price was listed by Twitch at the time of the Qualifying Purchase and in the currency in which the Qualifying Purchase was made, less (b) any special discounts or promotions, taxes, service charges, rebates, payment processing fees (e.g. credit card processing fees) and any other related transaction and processing expenses. Calculation of and eligibility to receive Product Purchase Fees will be further subject to any limitations or clarifications set forth in the Supplemental Fees Statement.'), s.createElement(m.Q, null, '"', s.createElement(m.Q, {
                        type: m._49.Span,
                        bold: !0
                    }, "Product"), '" means a product that is set forth in the Supplemental Fees Statement and is associated with a program in which Twitch places Special Links.'), s.createElement(m.Q, null, 'A "', s.createElement(m.Q, {
                        type: m._49.Span,
                        bold: !0
                    }, "Qualifying Purchase"), '" of a Product occurs when: (a) a user of Twitch clicks through a Special Link on your Twitch channel page; (b) such user purchases a Product(s) sold by Twitch Interactive, Inc., or a related entity that is designated in the Supplemental Fees Statement as a relevant seller of record; and (c) Twitch receives a fully settled payment for the purchase by such user.'), s.createElement(m.Q, null, "If we pay you a Product Purchase Fee and later issue a refund or credit to the Twitch user for such Qualifying Purchase (or receive a chargeback related to the Qualifying Purchase), we may offset the amount of the Product Purchase Fee we previously paid you for such Qualifying Purchase against future Product Purchase Fees or other amounts that would otherwise be payable to you under the Agreement or this Addendum, or require you to remit that amount to us."), s.createElement(m.Q, null, "This Addendum is governed by and subject to the Agreement.  Capitalized terms used but not defined in this Addendum will have the meanings defined in the Agreement.  Except as amended by this Addendum, all other terms and conditions of the Agreement remain in full force and effect."))), s.createElement(m._8, {
                        padding: {
                            top: 2,
                            bottom: 2
                        }
                    }, s.createElement(m.Q, {
                        fontSize: m.V.Size4
                    }, Object(l.d)("Summary", "AmazonRetailOffersAmendmentModal")), s.createElement(m.Q, null, Object(l.d)("By accepting below, you may earn revenue for certain purchases by your viewers as described above.", "AmazonRetailOffersAmendmentModal"))), s.createElement(m._35, {
                        borderTop: !0,
                        display: m.R.Flex,
                        flexDirection: m.T.Row,
                        alignItems: m.c.Center,
                        justifyContent: m._7.Center,
                        padding: {
                            top: 2,
                            bottom: 1
                        }
                    }, s.createElement(m._8, {
                        margin: {
                            left: .5,
                            right: .5
                        }
                    }, s.createElement(m.v, {
                        "data-test-selector": "amendment-modal-cancel-button",
                        type: m.B.Text,
                        onClick: this.onClose
                    }, Object(l.d)("Cancel", "AmazonRetailOffersAmendmentModal"))), this.renderAcceptButton(this.props.amendmentAccepted)))
                }, t
            }(s.PureComponent),
            y = Object(c.a)(f, {
                name: "setAmendmentAcceptance"
            })(v),
            S = (n("4mOb"), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    return s.createElement(m._35, {
                        className: "amendment-modal__container",
                        background: m.n.Base
                    }, s.createElement(y, {
                        "data-test-selector": "amendment-modal-selector",
                        trackingParameters: this.props.trackingParameters,
                        onClose: this.props.closeModal,
                        amendmentAccepted: this.props.amendmentAccepted
                    }))
                }, t
            }(s.Component));
        var k = Object(r.b)(null, function(e) {
            return Object(i.b)({
                closeModal: o.c
            }, e)
        })(S);
        var _ = Object(r.b)(null, function(e) {
            return Object(i.b)({
                showAmendmentModal: function(e) {
                    var t = a.__rest(e, []);
                    return Object(o.d)(k, t)
                }
            }, e)
        })(h);
        n.d(t, "a", function() {
            return _
        })
    },
    KcSS: function(e, t) {},
    Kz5W: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "SubsNameSettingPage_Query"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "login"
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
                                    value: "login"
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
                                    value: "subscriptionProducts"
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
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "price"
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
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 131
            }
        };
        n.loc.source = {
            body: "query SubsNameSettingPage_Query ($login: String!) {\nuser(login: $login) {\nid\nsubscriptionProducts {\nid\ndisplayName\nprice\ntier\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    LHN4: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "AmazonAssociates_LinkedStore"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "login"
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
                                    value: "login"
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
                                            value: "isPartner"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "isAffiliate"
                                        },
                                        arguments: [],
                                        directives: []
                                    }]
                                }
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "amazon"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "associatesStore"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "isPayoutEnabled"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "storeID"
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
                end: 181
            }
        };
        n.loc.source = {
            body: "query AmazonAssociates_LinkedStore($login: String!) {\nuser(login: $login) {\nid\ndisplayName\nroles {\nisPartner\nisAffiliate\n}\namazon {\nassociatesStore {\nisPayoutEnabled\nstoreID\n}\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    MQKV: function(e, t) {},
    NrhD: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "RequireTwoFactorEnabled"
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
                                    value: "settings"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "hasTwoFactorEnabled"
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
                end: 85
            }
        };
        n.loc.source = {
            body: "query RequireTwoFactorEnabled {\ncurrentUser {\nid\nsettings {\nhasTwoFactorEnabled\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    OjIq: function(e, t, n) {
        "use strict";
        var a = n("GiK3"),
            r = n("Odds"),
            i = function(e) {
                var t = null;
                return e.title && (t = a.createElement(r._8, {
                    padding: {
                        bottom: 1
                    }
                }, a.createElement(r.Q, {
                    fontSize: r.V.Size6,
                    color: e.error ? r.K.Error : r.K.Base,
                    bold: !0
                }, e.title))), a.createElement(r._35, {
                    padding: 2,
                    borderTop: !0
                }, t, e.children, e.errorMessage && a.createElement(r.Q, {
                    color: r.K.Error,
                    fontSize: r.V.Size7
                }, e.errorMessage))
            };
        n.d(t, "a", function() {
            return i
        })
    },
    QnA7: function(e, t) {},
    R9L7: function(e, t) {},
    RhBo: function(e, t) {},
    SR0I: function(e, t, n) {
        "use strict";
        var a = n("GiK3"),
            r = n("Odds"),
            i = function(e) {
                return a.createElement(r._35, {
                    borderTop: !0
                }, a.createElement(r._6, {
                    linkTo: e.linkTo,
                    alpha: !0
                }, a.createElement(r._35, {
                    padding: 2,
                    alignItems: r.c.Center,
                    display: r.R.Flex,
                    flexWrap: r.U.NoWrap
                }, a.createElement(r._8, {
                    flexGrow: 1
                }, a.createElement(r.Q, {
                    fontSize: r.V.Size6,
                    bold: !0
                }, e.text), a.createElement(r.Q, {
                    type: r._49.Span
                }, e.description)), a.createElement(r._8, null, a.createElement(r._24, {
                    asset: r._25.AngleRight
                })))))
            };
        n.d(t, "a", function() {
            return i
        })
    },
    TFaR: function(e, t, n) {
        "use strict";
        var a;
        n.d(t, "a", function() {
                return a
            }),
            function(e) {
                e[e.REQUESTED = 0] = "REQUESTED", e[e.POSTPROCESS_STARTED = 1] = "POSTPROCESS_STARTED", e[e.POSTPROCESS_COMPLETE = 2] = "POSTPROCESS_COMPLETE", e[e.COMPLETE = 3] = "COMPLETE", e[e.VALIDATION_FAILED = 4] = "VALIDATION_FAILED", e[e.POSTPROCESS_FAILED = 5] = "POSTPROCESS_FAILED", e[e.POSTPROCESS_RETRYING = 6] = "POSTPROCESS_RETRYING", e[e.FEATURE_SERVICE_FAILED = 7] = "FEATURE_SERVICE_FAILED", e[e.IS_IMAGE_VALIDATION_FAILED = 110] = "IS_IMAGE_VALIDATION_FAILED", e[e.ASPECT_RATIO_VALIDATION_FAILED = 111] = "ASPECT_RATIO_VALIDATION_FAILED", e[e.WIDTH_VALIDATION_FAILED = 112] = "WIDTH_VALIDATION_FAILED", e[e.HEIGHT_VALIDATION_FAILED = 113] = "HEIGHT_VALIDATION_FAILED", e[e.IMAGE_FORMAT_VALIDATION_FAILED = 114] = "IMAGE_FORMAT_VALIDATION_FAILED", e[e.FILE_SIZE_VALIDATION_FAILED = 120] = "FILE_SIZE_VALIDATION_FAILED", e[e.TRANSFORMATION_FAILED = 210] = "TRANSFORMATION_FAILED", e[e.PROCESSING_FAILED = 220] = "PROCESSING_FAILED"
            }(a || (a = {}))
    },
    TJLs: function(e, t) {},
    Tbnh: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "OnboardingSection_CurrentUser"
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
                                    value: "login"
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
                                            value: "isAffiliate"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "isExtensionsDeveloper"
                                        },
                                        arguments: [],
                                        directives: []
                                    }]
                                }
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "payoutPlans"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
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
                                            value: "isReceivingRevenue"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "tags"
                                        },
                                        arguments: [],
                                        directives: []
                                    }]
                                }
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "payoutInvite"
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
                                            value: "category"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "workflow"
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
                                                    value: "currentStep"
                                                },
                                                arguments: [],
                                                directives: []
                                            }]
                                        }
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "isLegacy"
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
                end: 223
            }
        };
        n.loc.source = {
            body: "query OnboardingSection_CurrentUser {\ncurrentUser {\nid\nlogin\nroles {\nisAffiliate\nisExtensionsDeveloper\n}\npayoutPlans {\ncategory\nisReceivingRevenue\ntags\n}\npayoutInvite {\nid\ncategory\nworkflow {\nid\ncurrentStep\n}\nisLegacy\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    U5GC: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "PayoutOnboardingAgreement_CurrentUser"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "withAgreement"
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
                                            value: "isPartner"
                                        },
                                        arguments: [],
                                        directives: []
                                    }]
                                }
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "payoutPlans"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
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
                                            value: "isReceivingRevenue"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "tags"
                                        },
                                        arguments: [],
                                        directives: []
                                    }]
                                }
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "programAgreement"
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
                                                value: "withAgreement"
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
                                            value: "type"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "version"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "body"
                                        },
                                        arguments: [],
                                        directives: []
                                    }]
                                }
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "payoutInvite"
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
                                            value: "isLegacy"
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
                end: 258
            }
        };
        n.loc.source = {
            body: "query PayoutOnboardingAgreement_CurrentUser($withAgreement: Boolean!) {\ncurrentUser {\nid\nroles {\nisPartner\n}\npayoutPlans {\ncategory\nisReceivingRevenue\ntags\n}\nprogramAgreement @include(if: $withAgreement) {\ntype\nversion\nbody\n}\npayoutInvite {\nid\nisLegacy\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    VRWR: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "ListEmotes_Query"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "login"
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
                                    value: "login"
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
                                            value: "isAffiliate"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "isPartner"
                                        },
                                        arguments: [],
                                        directives: []
                                    }]
                                }
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "isInGoodStanding"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "subscriberScore"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "current"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "next"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "currentEmoteLimit"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "nextEmoteLimit"
                                        },
                                        arguments: [],
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
                                            value: "price"
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
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "emotes"
                                        },
                                        arguments: [{
                                            kind: "Argument",
                                            name: {
                                                kind: "Name",
                                                value: "state"
                                            },
                                            value: {
                                                kind: "EnumValue",
                                                value: "ALL"
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
                                                    value: "token"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "state"
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
                end: 263
            }
        };
        n.loc.source = {
            body: "query ListEmotes_Query ($login: String!) {\nuser(login: $login) {\nid\nroles {\nisAffiliate\nisPartner\n}\nisInGoodStanding\nsubscriberScore {\ncurrent\nnext\ncurrentEmoteLimit\nnextEmoteLimit\n}\nsubscriptionProducts {\nid\nprice\ntier\nemotes(state: ALL) {\nid\ntoken\nstate\n}\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    Wedf: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "AmazonRetailOffers_AcceptAmendment"
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
                                value: "CommerceAmendmentType"
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
                            value: "setAmendmentAcceptance"
                        },
                        arguments: [{
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "input"
                            },
                            value: {
                                kind: "ObjectValue",
                                fields: [{
                                    kind: "ObjectField",
                                    name: {
                                        kind: "Name",
                                        value: "amendmentType"
                                    },
                                    value: {
                                        kind: "Variable",
                                        name: {
                                            kind: "Name",
                                            value: "input"
                                        }
                                    }
                                }]
                            }
                        }],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "twitch"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "commerceAmendment"
                                        },
                                        arguments: [{
                                            kind: "Argument",
                                            name: {
                                                kind: "Name",
                                                value: "types"
                                            },
                                            value: {
                                                kind: "ListValue",
                                                values: [{
                                                    kind: "Variable",
                                                    name: {
                                                        kind: "Name",
                                                        value: "input"
                                                    }
                                                }]
                                            }
                                        }],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "isSigned"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "id"
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
                end: 200
            }
        };
        n.loc.source = {
            body: "mutation AmazonRetailOffers_AcceptAmendment($input: CommerceAmendmentType!) {\nsetAmendmentAcceptance(input: {\namendmentType: $input\n}){\ntwitch {\ncommerceAmendment(types:[$input]) {\nisSigned\nid\n}\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    WrTc: function(e, t, n) {
        "use strict";
        var a = n("TToO"),
            r = n("GiK3"),
            i = n("6sO2"),
            o = n("+0KR"),
            s = n("Odds"),
            l = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    var e = null;
                    return this.props.onClickCancel && (e = r.createElement(s._8, {
                        padding: {
                            left: 1
                        },
                        display: s.R.Inline
                    }, r.createElement(s.v, {
                        disabled: !(this.props.status === o.b.DirtyChanges || this.props.status === o.b.Error),
                        size: s.z.Large,
                        type: s.B.Text,
                        "data-test-selector": "cancel-button-selector",
                        onClick: this.props.onClickCancel
                    }, Object(i.d)("Cancel", "SaveSettingsFooter")))), r.createElement(s._8, null, r.createElement(o.a, {
                        status: this.props.status,
                        size: s.z.Large,
                        onClick: this.props.onClickSave,
                        "data-a-target": "save-user-settings-button",
                        "data-test-selector": "save-button-selector"
                    }, this.props.status === o.b.Error ? Object(i.d)("Failed to save settings. Try again.", "SaveButton") : Object(i.d)("Save Changes", "SaveSettingsFooter")), e)
                }, t
            }(r.Component);
        n.d(t, !1, function() {
            return "save-button-selector"
        }), n.d(t, !1, function() {
            return "cancel-button-selector"
        }), n.d(t, "a", function() {
            return l
        })
    },
    XnHd: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "BitsThresholdSettingsForm_SetMinBitsPerEmote"
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
                                value: "UpdateCheerPartnerSettingsInput"
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
                            value: "updateCheerPartnerSettings"
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
                                    value: "cheer"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "chatMessage"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "minBitsPerEmote"
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
                end: 187
            }
        };
        n.loc.source = {
            body: "mutation BitsThresholdSettingsForm_SetMinBitsPerEmote($input: UpdateCheerPartnerSettingsInput!) {\nupdateCheerPartnerSettings(input: $input) {\ncheer {\nchatMessage {\nminBitsPerEmote\n}\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    ZDnG: function(e, t) {},
    ZKiL: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "PinnedCheerSettings_GetPinnedCheerSettings"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "login"
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
                                    value: "login"
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
                                    value: "login"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "settings"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "cheer"
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
                                                    value: "recentCheer"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "canPin"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "minimumBits"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "timeoutMilliseconds"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }]
                                                }
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "leaderboard"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "isEnabled"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "timePeriod"
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
                end: 220
            }
        };
        n.loc.source = {
            body: "query PinnedCheerSettings_GetPinnedCheerSettings($login: String!) {\nuser(login: $login) {\nid\nlogin\nsettings {\ncheer {\nid\nrecentCheer {\ncanPin\nminimumBits\ntimeoutMilliseconds\n}\nleaderboard {\nisEnabled\ntimePeriod\n}\n}\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    aEaB: function(e, t) {},
    bU3K: function(e, t, n) {
        "use strict";
        var a;
        n.d(t, "a", function() {
                return a
            }),
            function(e) {
                e.Standard = "STANDARD", e.Premium = "PREMIUM", e.Custom = "CUSTOM", e.Legacy = "LEGACY"
            }(a || (a = {}))
    },
    "bv1+": function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "TaxPreviewModal_CurrentUser"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "taxType"
                        }
                    },
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "TaxInterviewType"
                            }
                        }
                    }
                }, {
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "returnURL"
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
                                    value: "payoutInvite"
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
                                            value: "workflow"
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
                                                    value: "taxInterview"
                                                },
                                                arguments: [{
                                                    kind: "Argument",
                                                    name: {
                                                        kind: "Name",
                                                        value: "type"
                                                    },
                                                    value: {
                                                        kind: "Variable",
                                                        name: {
                                                            kind: "Name",
                                                            value: "taxType"
                                                        }
                                                    }
                                                }, {
                                                    kind: "Argument",
                                                    name: {
                                                        kind: "Name",
                                                        value: "returnURL"
                                                    },
                                                    value: {
                                                        kind: "Variable",
                                                        name: {
                                                            kind: "Name",
                                                            value: "returnURL"
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
                                                            value: "url"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "accountID"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "clientID"
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
                                                            value: "governmentAlias"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "locale"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "signature"
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
                end: 257
            }
        };
        n.loc.source = {
            body: "query TaxPreviewModal_CurrentUser($taxType: TaxInterviewType! $returnURL: String!) {\ncurrentUser {\nid\npayoutInvite {\nid\nworkflow {\nid\ntaxInterview(type: $taxType returnURL: $returnURL) {\nurl\naccountID\nclientID\ntype\ngovernmentAlias\nlocale\nsignature\n}\n}\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    d4P3: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "ChatBadgeTiersForm_UpdateBadgeTiers"
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
                                value: "UpdateCheerPartnerSettingsInput"
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
                            value: "updateCheerPartnerSettings"
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
                                    value: "cheer"
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
                                                    value: "tiers"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "isEnabled"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "threshold"
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
                end: 187
            }
        };
        n.loc.source = {
            body: "mutation ChatBadgeTiersForm_UpdateBadgeTiers($input: UpdateCheerPartnerSettingsInput!) {\nupdateCheerPartnerSettings(input: $input) {\ncheer {\nbadges {\ntiers {\nisEnabled\nthreshold\n}\n}\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    ew1p: function(e, t, n) {
        "use strict";
        var a = n("xHQB");
        n.d(t, "OnboardEntity", function() {
            return a.a
        });
        var r = n("3w+p");
        n.d(t, "OnboardStep", function() {
            return r.a
        });
        var i = n("lxmB");
        n.d(t, "PayoutCategory", function() {
            return i.a
        });
        var o = n("bU3K");
        n.d(t, "PayoutPlanTag", function() {
            return o.a
        });
        var s = n("iX3E");
        n.n(s);
        n.o(s, "TaxMismatchError") && n.d(t, "TaxMismatchError", function() {
            return s.TaxMismatchError
        }), n.o(s, "WorkflowState") && n.d(t, "WorkflowState", function() {
            return s.WorkflowState
        });
        var l = n("6/rd");
        n.n(l);
        n.o(l, "TaxMismatchError") && n.d(t, "TaxMismatchError", function() {
            return l.TaxMismatchError
        }), n.o(l, "WorkflowState") && n.d(t, "WorkflowState", function() {
            return l.WorkflowState
        });
        var c = n("shWG");
        n.d(t, "TaxMismatchError", function() {
            return c.a
        });
        var d = n("RhBo");
        n.n(d);
        n.o(d, "WorkflowState") && n.d(t, "WorkflowState", function() {
            return d.WorkflowState
        });
        var u = n("mFFQ");
        n.d(t, "WorkflowState", function() {
            return u.a
        })
    },
    exGi: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "SubsSettingsSection_UpdateSubscriptionProduct"
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
                                value: "UpdateSubscriptionProductInput"
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
                            value: "updateSubscriptionProduct"
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
                                    value: "product"
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
                                            value: "hasAdFree"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "hasFastChat"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "hasSubonlyVideoArchive"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "hasSubOnlyChat"
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
                end: 219
            }
        };
        n.loc.source = {
            body: "mutation SubsSettingsSection_UpdateSubscriptionProduct($input: UpdateSubscriptionProductInput!) {\nupdateSubscriptionProduct(input: $input) {\nproduct {\nid\nhasAdFree\nhasFastChat\nhasSubonlyVideoArchive\nhasSubOnlyChat\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    gABf: function(e, t) {},
    gLfK: function(e, t, n) {
        "use strict";
        var a = n("GiK3"),
            r = n("Odds"),
            i = function(e) {
                return a.createElement(r._8, {
                    margin: {
                        top: 1
                    }
                }, a.createElement(r.Q, {
                    color: r.K.Alt,
                    "data-a-target": e.textDataTarget
                }, e.text), e.extraText && a.createElement(r._8, {
                    margin: {
                        top: .5
                    }
                }, a.createElement(r.Q, {
                    color: r.K.Alt2
                }, e.extraText)))
            };
        n.d(t, "a", function() {
            return i
        })
    },
    gb2f: function(e, t) {},
    gurA: function(e, t) {},
    hXLX: function(e, t) {},
    iX3E: function(e, t) {},
    ihgL: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "GetPartnerCustomCheermotes"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "login"
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
                                    value: "login"
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
                                    value: "settings"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "cheer"
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
                                                    value: "customPrefix"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "prefix"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "tiers"
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
                                                                    value: "bits"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "color"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "images"
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
                                                                            value: "url"
                                                                        },
                                                                        arguments: [],
                                                                        directives: []
                                                                    }, {
                                                                        kind: "Field",
                                                                        name: {
                                                                            kind: "Name",
                                                                            value: "theme"
                                                                        },
                                                                        arguments: [],
                                                                        directives: []
                                                                    }, {
                                                                        kind: "Field",
                                                                        name: {
                                                                            kind: "Name",
                                                                            value: "isAnimated"
                                                                        },
                                                                        arguments: [],
                                                                        directives: []
                                                                    }, {
                                                                        kind: "Field",
                                                                        name: {
                                                                            kind: "Name",
                                                                            value: "dpiScale"
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
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 198
            }
        };
        n.loc.source = {
            body: "query GetPartnerCustomCheermotes($login: String!) {\nuser(login: $login) {\nid\nsettings {\ncheer {\nid\ncustomPrefix {\nprefix\ntiers {\nid\nbits\ncolor\nimages {\nid\nurl\ntheme\nisAnimated\ndpiScale\n}\n}\n}\n}\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    j0yR: function(e, t, n) {
        "use strict";
        var a = n("TToO"),
            r = n("GiK3"),
            i = n("6sO2"),
            o = n("7vx8"),
            s = n("jF7o"),
            l = n("HW2d"),
            c = n("Jo6h"),
            d = n("Odds"),
            u = n("LHN4"),
            m = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.renderButtonText = function(e) {
                        return e ? Object(i.d)("Edit", "AmazonRetailAssociatesAccountLinking") : Object(i.d)("Get Started", "AmazonRetailAssociatesAccountLinking")
                    }, t.renderDescriptionText = function(e) {
                        return e ? Object(i.d)("Link to {storeID}", {
                            storeID: r.createElement(d.Q, {
                                type: d._49.Span,
                                bold: !0
                            }, e)
                        }, "AmazonRetailAssociatesAccountLinking") : Object(i.d)("Create and link an Amazon Associates account to your Twitch account. Only one Amazon account may be linked at any one time.", "AmazonRetailAssociatesAccountLinking")
                    }, t.launchLinkAccount = function(e) {
                        e.preventDefault();
                        var n = "https://twitch.amazon.com/associates/register",
                            a = t.props.data.user && t.props.data.user.roles,
                            r = t.props.data.user && t.props.data.user.amazon.associatesStore.storeID,
                            i = l.c.NONE,
                            o = l.a.NONE;
                        a && (i = a.isPartner ? l.c.PARTNER : a.isAffiliate ? l.c.AFFILIATE : l.c.NONE), r && (o = l.a.LINKED), t.launchPopup(n), Object(l.d)({
                            action: r ? l.b.LinkAccountEdit : l.b.LinkAccountGetStarted,
                            channel: t.props.channelName,
                            channel_id: t.props.data.user && t.props.data.user.id,
                            partner_status: i,
                            associate_status: o,
                            target: n
                        })
                    }, t.launchAssociatesAccount = function(e) {
                        e.preventDefault();
                        t.launchPopup("https://affiliate-program.amazon.com/home/account")
                    }, t.launchAssociatesReporting = function(e) {
                        e.preventDefault();
                        t.launchPopup("https://affiliate-program.amazon.com/home/reports")
                    }, t.launchPopup = function(e) {
                        var n = window.open(e, "Twitch", "width=1024,height=600,scrollbars=yes");
                        n && (n.focus(), Object(s.a)(n, function() {
                            t.props.data.refetch && t.props.data.refetch()
                        }))
                    }, t
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    var e = null,
                        t = !1;
                    return this.props.data.user && this.props.data.user.amazon && this.props.data.user.amazon.associatesStore && (e = this.props.data.user.amazon.associatesStore.storeID, t = this.props.data.user.amazon.associatesStore.isPayoutEnabled), r.createElement(r.Fragment, null, r.createElement(c.a, {
                        orientation: d.X.Horizontal,
                        label: Object(i.d)("Link an Amazon Associates Account", "AmazonRetailAssociatesAccountLinking")
                    }, r.createElement(d.Q, {
                        "data-test-selector": "amazon-associates-account-linking-setup-text"
                    }, this.renderDescriptionText(e || null)), r.createElement(d._8, {
                        padding: {
                            top: .5
                        }
                    }, r.createElement(d.v, {
                        "data-test-selector": "amazon-associates-account-linking-setup-button",
                        onClick: this.launchLinkAccount
                    }, this.renderButtonText(e || null)))), r.createElement(c.a, {
                        orientation: d.X.Horizontal,
                        label: Object(i.d)("Receive payments from Amazon.com", "AmazonRetailAssociatesAccountLinking")
                    }, !(!e || t) && r.createElement(d.Q, {
                        color: d.K.Error,
                        "data-test-selector": "amazon-associates-account-linking-tax-info-error"
                    }, Object(i.d)("You must complete your tax and payment forms before you will receive any payments.", "AmazonRetailAssociatesAccountLinking")), r.createElement(d.Q, null, Object(i.d)("To receive payments, please provide your <x:tax>Tax Information</x:tax> and your <x:payment>Payment Information</x:payment>. Note, changes made to your Tax Information must be made by the primary account holder and any changes after the 15th will go into effect the following month. Please ignore this message if you have already submitted your information.", {
                        "x:tax": function(e) {
                            return r.createElement(d.Q, {
                                key: "tax",
                                type: d._49.Span,
                                bold: !0,
                                decoration: d._47.Underline
                            }, e)
                        },
                        "x:payment": function(e) {
                            return r.createElement(d.Q, {
                                key: "payment",
                                type: d._49.Span,
                                bold: !0,
                                decoration: d._47.Underline
                            }, e)
                        }
                    }, "AmazonRetailAssociatesAccountLinking")), r.createElement(d._8, {
                        padding: {
                            top: 1
                        }
                    }, r.createElement(d._2, {
                        padding: {
                            right: 2
                        }
                    }, r.createElement("a", {
                        href: "#",
                        onClick: this.launchAssociatesAccount
                    }, Object(i.d)("Add/update tax information", "AmazonRetailAssociatesAccountLinking"))), r.createElement(d._2, {
                        padding: {
                            right: 2
                        }
                    }, r.createElement("a", {
                        href: "#",
                        onClick: this.launchAssociatesAccount
                    }, Object(i.d)("Add/update payment information", "AmazonRetailAssociatesAccountLinking"))), r.createElement("a", {
                        href: "#",
                        onClick: this.launchAssociatesReporting
                    }, Object(i.d)("Reporting", "AmazonRetailAssociatesAccountLinking")))))
                }, t
            }(r.Component),
            p = Object(o.a)(u, {
                options: function(e) {
                    return {
                        variables: {
                            login: e.channelName
                        }
                    }
                }
            })(m);
        n.d(t, !1, function() {
            return m
        }), n.d(t, "a", function() {
            return p
        })
    },
    jlxi: function(e, t) {},
    kB8u: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "ViewTermsPage_CurrentUser"
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
                                    value: "payoutPlans"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
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
                                            value: "isReceivingRevenue"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "tags"
                                        },
                                        arguments: [],
                                        directives: []
                                    }]
                                }
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "payoutInvite"
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
                                            value: "category"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "workflow"
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
                                                    value: "currentStep"
                                                },
                                                arguments: [],
                                                directives: []
                                            }]
                                        }
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "isLegacy"
                                        },
                                        arguments: [],
                                        directives: []
                                    }]
                                }
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "programAgreement"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "body"
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
                end: 195
            }
        };
        n.loc.source = {
            body: "query ViewTermsPage_CurrentUser {\ncurrentUser {\nid\npayoutPlans {\ncategory\nisReceivingRevenue\ntags\n}\npayoutInvite {\nid\ncategory\nworkflow {\nid\ncurrentStep\n}\nisLegacy\n}\nprogramAgreement {\nbody\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    lQfX: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "PayoutOnboardingPage_CurrentUser"
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
                                    value: "login"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "payoutInvite"
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
                                            value: "category"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "workflow"
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
                                                    value: "currentStep"
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
                end: 124
            }
        };
        n.loc.source = {
            body: "query PayoutOnboardingPage_CurrentUser {\ncurrentUser {\nid\nlogin\npayoutInvite {\nid\ncategory\nworkflow {\nid\ncurrentStep\n}\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    lxmB: function(e, t, n) {
        "use strict";
        var a;
        n.d(t, "a", function() {
                return a
            }),
            function(e) {
                e.Affiliate = "AFFILIATE", e.Partner = "PARTNER", e.ExtensionsDeveloper = "EXTENSIONS_DEVELOPER"
            }(a || (a = {}))
    },
    mFFQ: function(e, t, n) {
        "use strict";
        var a;
        n.d(t, "a", function() {
                return a
            }),
            function(e) {
                e.REGISTRATION_NOT_STARTED = "REGISTRATION_NOT_STARTED", e.AGREEMENT_NOT_STARTED = "AGREEMENT_NOT_STARTED", e.ROYALTY_TAX_INTERVIEW_NOT_STARTED = "ROYALTY_TAX_INTERVIEW_NOT_STARTED", e.ROYALTY_TAX_INTERVIEW_PENDING = "ROYALTY_TAX_INTERVIEW_PENDING", e.ROYALTY_TAX_INTERVIEW_ACTION_REQUIRED = "ROYALTY_TAX_INTERVIEW_ACTION_REQUIRED", e.ROYALTY_TAX_INTERVIEW_MISMATCH = "ROYALTY_TAX_INTERVIEW_MISMATCH", e.ROYALTY_TAX_INTERVIEW_FAILED = "ROYALTY_TAX_INTERVIEW_FAILED", e.SERVICE_TAX_INTERVIEW_NOT_STARTED = "SERVICE_TAX_INTERVIEW_NOT_STARTED", e.SERVICE_TAX_INTERVIEW_PENDING = "SERVICE_TAX_INTERVIEW_PENDING", e.SERVICE_TAX_INTERVIEW_ACTION_REQUIRED = "SERVICE_TAX_INTERVIEW_ACTION_REQUIRED", e.SERVICE_TAX_INTERVIEW_MISMATCH = "SERVICE_TAX_INTERVIEW_MISMATCH", e.SERVICE_TAX_INTERVIEW_FAILED = "SERVICE_TAX_INTERVIEW_FAILED", e.PAYOUT_METHOD_NOT_STARTED = "PAYOUT_METHOD_NOT_STARTED", e.PAYOUT_METHOD_PENDING = "PAYOUT_METHOD_PENDING", e.REVIEW_PENDING = "REVIEW_PENDING", e.COMPLETED = "COMPLETED", e.CANCELED = "CANCELED", e.AGREEMENT_PENDING_UPGRADE = "AGREEMENT_PENDING_UPGRADE"
            }(a || (a = {}))
    },
    mHbH: function(e, t) {},
    mQVd: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "CheermotesEnable_GetCheermotesEnableSetting"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "login"
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
                                    value: "login"
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
                                    value: "settings"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "cheer"
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
                                                    value: "customPrefix"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "isEnabled"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "prefix"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "tiers"
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
                                                                    value: "bits"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "images"
                                                                },
                                                                arguments: [{
                                                                    kind: "Argument",
                                                                    name: {
                                                                        kind: "Name",
                                                                        value: "theme"
                                                                    },
                                                                    value: {
                                                                        kind: "EnumValue",
                                                                        value: "LIGHT"
                                                                    }
                                                                }, {
                                                                    kind: "Argument",
                                                                    name: {
                                                                        kind: "Name",
                                                                        value: "isAnimated"
                                                                    },
                                                                    value: {
                                                                        kind: "BooleanValue",
                                                                        value: !1
                                                                    }
                                                                }, {
                                                                    kind: "Argument",
                                                                    name: {
                                                                        kind: "Name",
                                                                        value: "dpiScale"
                                                                    },
                                                                    value: {
                                                                        kind: "IntValue",
                                                                        value: "4"
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
                                                                            value: "url"
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
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 237
            }
        };
        n.loc.source = {
            body: "query CheermotesEnable_GetCheermotesEnableSetting($login: String!) {\nuser(login: $login) {\nid\nsettings {\ncheer {\nid\ncustomPrefix {\nisEnabled\nprefix\ntiers {\nid\nbits\nimages(theme: LIGHT isAnimated: false dpiScale: 4) {\nid\nurl\n}\n}\n}\n}\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    mfHG: function(e, t) {},
    "n63+": function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "ChatBadgeTiersForm_GetBadgeTiers"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "login"
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
                                    value: "login"
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
                                    value: "login"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "settings"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "cheer"
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
                                                            value: "tiers"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: {
                                                            kind: "SelectionSet",
                                                            selections: [{
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "isEnabled"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "threshold"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "badge"
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
                                                                            value: "title"
                                                                        },
                                                                        arguments: [],
                                                                        directives: []
                                                                    }, {
                                                                        kind: "Field",
                                                                        alias: {
                                                                            kind: "Name",
                                                                            value: "image1x"
                                                                        },
                                                                        name: {
                                                                            kind: "Name",
                                                                            value: "imageURL"
                                                                        },
                                                                        arguments: [{
                                                                            kind: "Argument",
                                                                            name: {
                                                                                kind: "Name",
                                                                                value: "size"
                                                                            },
                                                                            value: {
                                                                                kind: "EnumValue",
                                                                                value: "NORMAL"
                                                                            }
                                                                        }],
                                                                        directives: []
                                                                    }, {
                                                                        kind: "Field",
                                                                        alias: {
                                                                            kind: "Name",
                                                                            value: "image2x"
                                                                        },
                                                                        name: {
                                                                            kind: "Name",
                                                                            value: "imageURL"
                                                                        },
                                                                        arguments: [{
                                                                            kind: "Argument",
                                                                            name: {
                                                                                kind: "Name",
                                                                                value: "size"
                                                                            },
                                                                            value: {
                                                                                kind: "EnumValue",
                                                                                value: "DOUBLE"
                                                                            }
                                                                        }],
                                                                        directives: []
                                                                    }, {
                                                                        kind: "Field",
                                                                        alias: {
                                                                            kind: "Name",
                                                                            value: "image4x"
                                                                        },
                                                                        name: {
                                                                            kind: "Name",
                                                                            value: "imageURL"
                                                                        },
                                                                        arguments: [{
                                                                            kind: "Argument",
                                                                            name: {
                                                                                kind: "Name",
                                                                                value: "size"
                                                                            },
                                                                            value: {
                                                                                kind: "EnumValue",
                                                                                value: "QUADRUPLE"
                                                                            }
                                                                        }],
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
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 277
            }
        };
        n.loc.source = {
            body: "query ChatBadgeTiersForm_GetBadgeTiers($login: String!) {\nuser(login: $login) {\nid\nlogin\nsettings {\ncheer {\nid\nbadges {\ntiers {\nisEnabled\nthreshold\nbadge {\nid\ntitle\nimage1x: imageURL(size: NORMAL)\nimage2x: imageURL(size: DOUBLE)\nimage4x: imageURL(size: QUADRUPLE)\n}\n}\n}\n}\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    n8vm: function(e, t) {},
    nQ9n: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "DashboardRevenueSettingsIndexPage"
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
                    }
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
                                    value: "payoutPlans"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
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
                                            value: "isReceivingRevenue"
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
                end: 152
            }
        };
        n.loc.source = {
            body: "query DashboardRevenueSettingsIndexPage($channelName: String!) {\nchannel: user(login: $channelName) {\nid\npayoutPlans {\ncategory\nisReceivingRevenue\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    ns5w: function(e, t) {},
    oR9V: function(e, t, n) {
        "use strict";
        n.d(t, "b", function() {
            return a
        }), n.d(t, "a", function() {
            return l
        });
        var a, r = n("TToO"),
            i = n("GiK3"),
            o = (n.n(i), n("6sO2")),
            s = n("Odds");
        ! function(e) {
            e[e.NoChanges = 0] = "NoChanges", e[e.DirtyChanges = 1] = "DirtyChanges", e[e.Working = 2] = "Working", e[e.Success = 3] = "Success", e[e.Error = 4] = "Error"
        }(a || (a = {}));
        var l = function(e) {
            var t = e.status,
                n = e.children,
                l = r.__rest(e, ["status", "children"]),
                c = s.A.Default,
                d = s.B.Default,
                u = !1;
            return t === a.Working ? c = s.A.Loading : t === a.Success ? c = s.A.Success : t === a.Error ? d = s.B.Alert : t === a.NoChanges && (u = !0), n || (n = t === a.Error ? Object(o.d)("Error", "Save Button") : Object(o.d)("Save", "Save Button")), i.createElement(s.v, r.__assign({
                disabled: u,
                state: c,
                type: d
            }, l), n)
        }
    },
    pBCJ: function(e, t) {},
    pBoG: function(e, t) {},
    pMje: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "PayoutOnboardingRegistration_RegisterPayoutWorkflow"
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
                                value: "RegisterPayoutInformationInput"
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
                            value: "registerPayoutInformation"
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
                                    value: "error"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "code"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "invalidFields"
                                        },
                                        arguments: [],
                                        directives: []
                                    }]
                                }
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "workflow"
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
                                            value: "currentStep"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "registration"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "birthdate"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "city"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "companyName"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "countryCode"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "email"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "firstName"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "lastName"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "middleName"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "postal"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "stateCode"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "streetAddress"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "streetAddress2"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "parentName"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "parentEmail"
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
                                    value: "error"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "code"
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
                end: 383
            }
        };
        n.loc.source = {
            body: "mutation PayoutOnboardingRegistration_RegisterPayoutWorkflow($input: RegisterPayoutInformationInput!) {\nregisterPayoutInformation(input: $input) {\nerror {\ncode\ninvalidFields\n}\nworkflow {\nid\ncurrentStep\nregistration {\nbirthdate\ncity\ncompanyName\ncountryCode\nemail\nfirstName\nlastName\nmiddleName\npostal\nstateCode\nstreetAddress\nstreetAddress2\nparentName\nparentEmail\n}\n}\nerror {\ncode\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    qSfI: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "CheermotesEnable_SetCheermotesEnable"
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
                                value: "UpdateCheerPartnerSettingsInput"
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
                            value: "updateCheerPartnerSettings"
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
                                    value: "cheer"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "customPrefix"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "isEnabled"
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
                end: 174
            }
        };
        n.loc.source = {
            body: "mutation CheermotesEnable_SetCheermotesEnable($input: UpdateCheerPartnerSettingsInput!) {\nupdateCheerPartnerSettings(input: $input) {\ncheer {\ncustomPrefix {\nisEnabled\n}\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    "rr+v": function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "BitsThresholdSettingsForm_SetMinBitsToCheer"
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
                                value: "UpdateCheerPartnerSettingsInput"
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
                            value: "updateCheerPartnerSettings"
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
                                    value: "cheer"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "chatMessage"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "minBitsToCheer"
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
                end: 185
            }
        };
        n.loc.source = {
            body: "mutation BitsThresholdSettingsForm_SetMinBitsToCheer($input: UpdateCheerPartnerSettingsInput!) {\nupdateCheerPartnerSettings(input: $input) {\ncheer {\nchatMessage {\nminBitsToCheer\n}\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    shWG: function(e, t, n) {
        "use strict";
        var a;
        n.d(t, "a", function() {
                return a
            }),
            function(e) {
                e.NAME = "NAME", e.EMAIL = "EMAIL", e.STREET_ADDRESS = "STREET_ADDRESS", e.STREET_ADDRESS_2 = "STREET_ADDRESS_2", e.CITY = "CITY", e.STATE = "STATE", e.COUNTRY = "COUNTRY", e.POSTAL = "POSTAL"
            }(a || (a = {}))
    },
    "tu8+": function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "AmazonRetailOffers_CommerceAmendment"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "login"
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
                }, {
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "amendmentType"
                        }
                    },
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "CommerceAmendmentType"
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
                                value: "login"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "login"
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
                                            value: "isPartner"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "isAffiliate"
                                        },
                                        arguments: [],
                                        directives: []
                                    }]
                                }
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "amazon"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "associatesStore"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "storeID"
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
                                    value: "twitch"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "commerceAmendment"
                                        },
                                        arguments: [{
                                            kind: "Argument",
                                            name: {
                                                kind: "Name",
                                                value: "types"
                                            },
                                            value: {
                                                kind: "ListValue",
                                                values: [{
                                                    kind: "Variable",
                                                    name: {
                                                        kind: "Name",
                                                        value: "amendmentType"
                                                    }
                                                }]
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
                                                    value: "isSigned"
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
                end: 282
            }
        };
        n.loc.source = {
            body: "query AmazonRetailOffers_CommerceAmendment($login: String! $amendmentType: CommerceAmendmentType!) {\nuser(login: $login) {\nid\ndisplayName\nroles {\nisPartner\nisAffiliate\n}\namazon {\nassociatesStore {\nstoreID\n}\n}\ntwitch {\ncommerceAmendment(types: [$amendmentType]) {\nid\nisSigned\n}\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    uAAQ: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "PayoutMethodModal_CurrentUser"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "redirectURL"
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
                                    value: "payoutInvite"
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
                                            value: "workflow"
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
                                                    value: "payoutSettingsURL"
                                                },
                                                arguments: [{
                                                    kind: "Argument",
                                                    name: {
                                                        kind: "Name",
                                                        value: "redirectURL"
                                                    },
                                                    value: {
                                                        kind: "Variable",
                                                        name: {
                                                            kind: "Name",
                                                            value: "redirectURL"
                                                        }
                                                    }
                                                }],
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
                end: 162
            }
        };
        n.loc.source = {
            body: "query PayoutMethodModal_CurrentUser($redirectURL: String!) {\ncurrentUser {\nid\npayoutInvite {\nid\nworkflow {\nid\npayoutSettingsURL(redirectURL: $redirectURL)\n}\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    wGye: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "ChatBadgeUploadForm_GetBadgeTiers"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "login"
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
                                    value: "login"
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
                                    value: "login"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "settings"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "cheer"
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
                                                            value: "tiers"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: {
                                                            kind: "SelectionSet",
                                                            selections: [{
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "threshold"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "badge"
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
                                                                            value: "title"
                                                                        },
                                                                        arguments: [],
                                                                        directives: []
                                                                    }, {
                                                                        kind: "Field",
                                                                        alias: {
                                                                            kind: "Name",
                                                                            value: "image1x"
                                                                        },
                                                                        name: {
                                                                            kind: "Name",
                                                                            value: "imageURL"
                                                                        },
                                                                        arguments: [{
                                                                            kind: "Argument",
                                                                            name: {
                                                                                kind: "Name",
                                                                                value: "size"
                                                                            },
                                                                            value: {
                                                                                kind: "EnumValue",
                                                                                value: "NORMAL"
                                                                            }
                                                                        }],
                                                                        directives: []
                                                                    }, {
                                                                        kind: "Field",
                                                                        alias: {
                                                                            kind: "Name",
                                                                            value: "image2x"
                                                                        },
                                                                        name: {
                                                                            kind: "Name",
                                                                            value: "imageURL"
                                                                        },
                                                                        arguments: [{
                                                                            kind: "Argument",
                                                                            name: {
                                                                                kind: "Name",
                                                                                value: "size"
                                                                            },
                                                                            value: {
                                                                                kind: "EnumValue",
                                                                                value: "DOUBLE"
                                                                            }
                                                                        }],
                                                                        directives: []
                                                                    }, {
                                                                        kind: "Field",
                                                                        alias: {
                                                                            kind: "Name",
                                                                            value: "image4x"
                                                                        },
                                                                        name: {
                                                                            kind: "Name",
                                                                            value: "imageURL"
                                                                        },
                                                                        arguments: [{
                                                                            kind: "Argument",
                                                                            name: {
                                                                                kind: "Name",
                                                                                value: "size"
                                                                            },
                                                                            value: {
                                                                                kind: "EnumValue",
                                                                                value: "QUADRUPLE"
                                                                            }
                                                                        }],
                                                                        directives: []
                                                                    }, {
                                                                        kind: "Field",
                                                                        name: {
                                                                            kind: "Name",
                                                                            value: "user"
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
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 280
            }
        };
        n.loc.source = {
            body: "query ChatBadgeUploadForm_GetBadgeTiers($login: String!) {\nuser(login: $login) {\nid\nlogin\nsettings {\ncheer {\nid\nbadges {\ntiers {\nthreshold\nbadge {\nid\ntitle\nimage1x: imageURL(size: NORMAL)\nimage2x: imageURL(size: DOUBLE)\nimage4x: imageURL(size: QUADRUPLE)\nuser {\nid\n}\n}\n}\n}\n}\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    xHQB: function(e, t, n) {
        "use strict";
        var a;
        n.d(t, "a", function() {
                return a
            }),
            function(e) {
                e.Affiliate = "AFFILIATE", e.ExtensionsDeveloper = "EXTENSIONS_DEVELOPER", e.StandardPartner = "STANDARD_PARTNER", e.PremiumPartner = "PREMIUM_PARTNER", e.CustomPartner = "CUSTOM_PARTNER"
            }(a || (a = {}))
    },
    xZ9c: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "BitsThresholdSettingsForm_GetBitsThresholdSettings"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "login"
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
                                    value: "login"
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
                                    value: "login"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "settings"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "cheer"
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
                                                    value: "chatMessage"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "minBitsPerEmote"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "minBitsToCheer"
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
                end: 183
            }
        };
        n.loc.source = {
            body: "query BitsThresholdSettingsForm_GetBitsThresholdSettings($login: String!) {\nuser(login: $login) {\nid\nlogin\nsettings {\ncheer {\nid\nchatMessage {\nminBitsPerEmote\nminBitsToCheer\n}\n}\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    yOH8: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "UpgradeTermsPage_CurrentUser"
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
                                            value: "isAffiliate"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "isPartner"
                                        },
                                        arguments: [],
                                        directives: []
                                    }]
                                }
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "payoutPlans"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
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
                                            value: "isReceivingRevenue"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "tags"
                                        },
                                        arguments: [],
                                        directives: []
                                    }]
                                }
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "payoutInvite"
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
                                            value: "category"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "workflow"
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
                                                    value: "currentStep"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "registration"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "birthdate"
                                                        },
                                                        arguments: [],
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
                                    value: "programAgreement"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
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
                                            value: "version"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "body"
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
                end: 261
            }
        };
        n.loc.source = {
            body: "query UpgradeTermsPage_CurrentUser {\ncurrentUser {\nid\nroles {\nisAffiliate\nisPartner\n}\npayoutPlans {\ncategory\nisReceivingRevenue\ntags\n}\npayoutInvite {\nid\ncategory\nworkflow {\nid\ncurrentStep\nregistration {\nbirthdate\n}\n}\n}\nprogramAgreement {\ntype\nversion\nbody\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    yU6t: function(e, t) {},
    yuX3: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a, r = n("TToO"),
            i = n("GiK3"),
            o = n("3zLD"),
            s = n("CIox"),
            l = n("F8kA"),
            c = n("yWCw"),
            d = n("68hr"),
            u = n("zCIC"),
            m = n("7vx8"),
            p = n("CSlQ"),
            g = n("2KeS"),
            h = n("6sO2"),
            b = n("oIkB"),
            f = n("+0KR"),
            E = n("WrTc"),
            v = n("gLfK"),
            y = n("Jo6h"),
            S = n("5EkD"),
            k = n("OjIq"),
            _ = n("GH+X"),
            N = n("Odds");
        n("ns5w");
        ! function(e) {
            e.ACTIVE = "ACTIVE", e.PENDING = "PENDING", e.REJECTED = "REJECTED", e.UNKNOWN = "UNKNOWN", e.UNSET = "UNSET"
        }(a || (a = {}));
        var T, O = n("+QF8"),
            A = 10,
            C = "prefix",
            P = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        prefix: t.props.prefix || "",
                        saveStatus: f.b.NoChanges
                    }, t.renderBanner = function(e) {
                        return e === a.REJECTED ? i.createElement(N._8, {
                            className: "emoticon-prefix__rejected-prefix-banner",
                            padding: {
                                y: 1,
                                x: 2
                            },
                            margin: {
                                bottom: 1
                            }
                        }, Object(h.d)("Your prefix has been rejected. Please choose another one.", "EmoticonPrefix")) : i.createElement(N._8, {
                            className: "emoticon-prefix__set-prefix-banner",
                            padding: {
                                y: 1,
                                x: 2
                            },
                            margin: {
                                bottom: 1
                            }
                        }, Object(h.d)("Please set your emoticon prefix. The prefix must be approved before submitting your emoticons.", "EmoticonPrefix"))
                    }, t.renderPrefixSection = function() {
                        var e = t.props.prefixState,
                            n = 0 === t.state.prefix.length ? C : t.state.prefix;
                        return i.createElement(y.a, {
                            label: Object(h.d)("Unique Prefix", "EmoticonPrefix")
                        }, i.createElement(N._4, {
                            type: N._5.Text,
                            disabled: e === a.PENDING,
                            maxLength: A,
                            placeholder: C,
                            value: t.state.prefix,
                            onChange: t.onPrefixChange
                        }), i.createElement(v.a, {
                            text: Object(h.d)("Prefix must begin with a lowercase letter. Prefix must be 3-10 characters in length, all lowercase. Numbers may follow first character.\nExample of how it will work: {prefix}Emotecode", {
                                prefix: n
                            }, "EmoticonPrefix")
                        }))
                    }, t.renderPendingMessage = function() {
                        return t.props.prefixState === a.PENDING && i.createElement(k.a, null, i.createElement(N.Q, {
                            bold: !0
                        }, Object(h.d)("Your prefix has been submitted for approval. Thank you for your patience.", "EmoticonPrefix")))
                    }, t.onPrefixChange = function(e) {
                        var n = e.currentTarget.value;
                        (0 === n.length || n[0].match(/^[a-z]+$/)) && (0 === n.length || n.match(/^[0-9a-z]+$/)) ? 0 !== n.length && n.length < 3 ? t.setState({
                            prefix: n,
                            saveStatus: f.b.NoChanges
                        }) : t.setState({
                            prefix: n,
                            saveStatus: f.b.DirtyChanges
                        }): t.setState({
                            saveStatus: f.b.NoChanges
                        })
                    }, t.onClickSave = function() {
                        return r.__awaiter(t, void 0, void 0, function() {
                            var e, t;
                            return r.__generator(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        e = f.b.Working, this.setState({
                                            saveStatus: e
                                        }), t = r.__assign({}, Object(b.a)({
                                            channelID: this.props.channelId,
                                            name: this.state.prefix
                                        })), n.label = 1;
                                    case 1:
                                        return n.trys.push([1, 3, , 4]), [4, this.props.submitEmoticon(t)];
                                    case 2:
                                        return n.sent(), this.props.refetch && this.props.refetch(), e = f.b.Success, [3, 4];
                                    case 3:
                                        return n.sent(), e = f.b.Error, [3, 4];
                                    case 4:
                                        return this.setState({
                                            saveStatus: e
                                        }), [2]
                                }
                            })
                        })
                    }, t
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    var e = this.props.prefixState,
                        t = null;
                    return e !== a.PENDING && (t = i.createElement(E.a, {
                        status: this.state.saveStatus,
                        onClickSave: this.onClickSave
                    })), i.createElement(i.Fragment, null, this.renderBanner(e), i.createElement(S.a, {
                        title: Object(h.d)("Emoticon Code Prefix", "EmoticonPrefix"),
                        description: Object(h.d)("Prefix that will be prepended before your emoticon's unique code", "EmoticonPrefix"),
                        linkToParent: "/" + this.props.channelName + "/dashboard/settings/revenue"
                    }), i.createElement(_.a, {
                        footer: t
                    }, this.renderPrefixSection(), this.renderPendingMessage()))
                }, t
            }(i.Component),
            I = Object(g.d)(Object(m.a)(O, {
                name: "submitEmoticon"
            }))(P);
        ! function(e) {
            e.ACTIVE = "ACTIVE", e.PENDING = "PENDING", e.REJECTED = "REJECTED", e.UNKNOWN = "UNKNOWN", e.UNSET = "UNSET"
        }(T || (T = {}));
        var w = n("G9Ha"),
            R = n("9u8h");

        function x(e, t, n, a) {
            return r.__awaiter(this, void 0, void 0, function() {
                var i, o;
                return r.__generator(this, function(r) {
                    switch (r.label) {
                        case 0:
                            return [4, R.a.post("v" + h.a.defaultAPIVersion + "/subscriptions/" + e + "/emoticons", {
                                body: {
                                    code_suffix: a,
                                    product_id: t,
                                    image28_id: n[0],
                                    image56_id: n[1],
                                    image112_id: n[2]
                                }
                            })];
                        case 1:
                            if (i = r.sent(), (o = i.body).error) throw new Error(o.error.error_code);
                            if (o.emoticon) return [2, {
                                emoticonID: o.emoticon.id
                            }];
                            throw new Error("Unkown Error")
                    }
                })
            })
        }
        var D, F = n("J8WN"),
            j = n("TFaR"),
            L = (n("gb2f"), ["image/*"]);
        ! function(e) {
            e[e.BadImageDimensionsError = 0] = "BadImageDimensionsError", e[e.BadImageError = 1] = "BadImageError", e[e.None = 2] = "None", e[e.Uploading = 3] = "Uploading", e[e.Success = 4] = "Success"
        }(D || (D = {}));
        var M, U = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.state = {
                    status: D.None,
                    url: "",
                    isUploading: !1
                }, t.getErrorText = function() {
                    switch (t.state.status) {
                        case D.BadImageError:
                            return Object(h.d)("Bad PNG file", "EmotesUploadPicker");
                        case D.BadImageDimensionsError:
                            return Object(h.d)("PNG must be {width} x {height}px", {
                                width: t.props.size,
                                height: t.props.size
                            }, "EmotesUploadPicker");
                        default:
                            return
                    }
                }, t.onImageInputChange = function(e) {
                    return r.__awaiter(t, void 0, void 0, function() {
                        var t, n, a, i, o = this;
                        return r.__generator(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    return null === e ? (this.setState({
                                        status: D.None
                                    }), [2]) : (this.setState({
                                        url: "",
                                        status: D.Uploading
                                    }), [4, this.uploadEmoticon(e[0])]);
                                case 1:
                                    return t = r.sent(), n = t.url, a = t.uploadId, i = t.imageId, this.unsubscribe = h.k.subscribe({
                                        topic: "upload." + a,
                                        onMessage: function(e) {
                                            switch (o.unsubscribe(), e.status) {
                                                case j.a.POSTPROCESS_COMPLETE:
                                                case j.a.COMPLETE:
                                                    return o.setState({
                                                        url: n,
                                                        status: D.Success
                                                    }), void o.props.uploadEmote(i, o.props.size);
                                                case j.a.WIDTH_VALIDATION_FAILED:
                                                case j.a.HEIGHT_VALIDATION_FAILED:
                                                    return void o.setState({
                                                        status: D.BadImageDimensionsError
                                                    });
                                                case j.a.IMAGE_FORMAT_VALIDATION_FAILED:
                                                    return void o.setState({
                                                        status: D.BadImageError
                                                    });
                                                default:
                                                    o.setState({
                                                        status: D.BadImageError
                                                    })
                                            }
                                        }
                                    }), [2]
                            }
                        })
                    })
                }, t.uploadEmoticon = function(e) {
                    return r.__awaiter(t, void 0, void 0, function() {
                        var t, n;
                        return r.__generator(this, function(a) {
                            switch (a.label) {
                                case 0:
                                    return [4, function(e, t) {
                                        return r.__awaiter(this, void 0, void 0, function() {
                                            return r.__generator(this, function(n) {
                                                switch (n.label) {
                                                    case 0:
                                                        return [4, R.a.post("v" + h.a.defaultAPIVersion + "/subscriptions/" + e + "/emoticons/upload_configuration", {
                                                            headers: {
                                                                "Content-Type": "application/json; charset=utf-8",
                                                                Accept: "application/json"
                                                            },
                                                            body: JSON.stringify({
                                                                image_height: t,
                                                                image_width: t
                                                            })
                                                        })];
                                                    case 1:
                                                        return [2, n.sent().body]
                                                }
                                            })
                                        })
                                    }(this.props.channelId, this.props.size)];
                                case 1:
                                    return t = a.sent(), n = decodeURI(t.upload_configuration.upload_url), [4, fetch(n, {
                                        method: "PUT",
                                        body: e
                                    })];
                                case 2:
                                    return a.sent(), [2, {
                                        url: t.upload_configuration.image_url,
                                        uploadId: t.upload_configuration.upload_id,
                                        imageId: t.upload_configuration.image_id
                                    }]
                            }
                        })
                    })
                }, t
            }
            return r.__extends(t, e), t.prototype.componentWillUnmount = function() {
                void 0 !== this.unsubscribe && this.unsubscribe()
            }, t.prototype.render = function() {
                var e = this.getErrorText(),
                    t = null;
                return t = "" === this.state.url && this.state.status === D.None ? i.createElement(N._8, {
                    className: "profile-edit__upload-info"
                }, i.createElement(N._8, null, i.createElement(N._24, {
                    asset: N._25.Plus,
                    type: N._26.Alt2,
                    height: 15,
                    width: 15
                }))) : this.state.status === D.Uploading ? i.createElement(N._8, null, i.createElement(N._10, {
                    fillContent: !0
                })) : i.createElement(N._8, {
                    className: "profile-edit__image-preview emotes-upload-picker__size-" + this.props.size,
                    position: N._15.Relative
                }, this.state.isUploading ? i.createElement(N._10, null) : i.createElement("img", {
                    src: "" + this.state.url
                })), i.createElement(N._35, {
                    padding: {
                        x: 2,
                        y: 2
                    },
                    display: N.R.InlineBlock
                }, i.createElement(N._8, {
                    margin: {
                        top: 1
                    }
                }, i.createElement(N._8, {
                    className: "loyalty-badges-file-picker__container",
                    display: N.R.InlineFlex,
                    flexDirection: N.T.Column,
                    position: N._15.Relative
                }, i.createElement(F.a, {
                    allowedFileTypes: L,
                    error: void 0 !== e,
                    onFilesSubmitted: this.onImageInputChange
                }, i.createElement(N._8, {
                    padding: .5
                }, e ? i.createElement(N.Q, {
                    color: N.K.Error,
                    wordBreak: N._61.BreakWord
                }, e) : t))), i.createElement(N.Q, null, Object(h.d)("{width} x {height}px", {
                    width: this.props.size,
                    height: this.props.size
                }, "EmotesUploadPicker"))))
            }, t
        }(i.Component);
        ! function(e) {
            e[e.None = 0] = "None", e[e.Success = 1] = "Success", e[e.CodeNotUnique = 2] = "CodeNotUnique", e[e.Error = 3] = "Error"
        }(M || (M = {}));
        var B, V = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        status: M.None
                    }, t.onChange = function(e) {
                        e.currentTarget.value.length > 20 ? e.preventDefault() : t.setState({
                            code: e.currentTarget.value
                        })
                    }, t.uploadEmote = function(e, n) {
                        switch (n) {
                            case 28:
                                return void t.setState({
                                    emote28: e
                                });
                            case 56:
                                return void t.setState({
                                    emote56: e
                                });
                            case 112:
                                return void t.setState({
                                    emote112: e
                                })
                        }
                    }, t.onClick = function() {
                        return r.__awaiter(t, void 0, void 0, function() {
                            var e, t;
                            return r.__generator(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        e = [this.state.emote28 || "", this.state.emote56 || "", this.state.emote112 || ""], n.label = 1;
                                    case 1:
                                        return n.trys.push([1, 4, , 5]), [4, this.props.uploadEmoticon(this.props.channelId, this.props.productId, e, this.state.code && this.state.code.toUpperCase() || "")];
                                    case 2:
                                        return n.sent(), this.setState({
                                            code: "",
                                            emote28: "",
                                            emote56: "",
                                            emote112: "",
                                            status: M.Success
                                        }), [4, this.props.refresh()];
                                    case 3:
                                        return n.sent(), this.forceUpdate(), [3, 5];
                                    case 4:
                                        return (t = n.sent()) && "CODE_NOT_UNIQUE" === t.message ? this.setState({
                                            status: M.CodeNotUnique
                                        }) : this.setState({
                                            status: M.Error
                                        }), [3, 5];
                                    case 5:
                                        return [2]
                                }
                            })
                        })
                    }, t.renderPicker = function(e) {
                        return i.createElement(U, {
                            key: e,
                            channelId: t.props.channelId,
                            size: e,
                            uploadEmote: t.uploadEmote
                        })
                    }, t
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    return i.createElement(N._8, {
                        margin: {
                            top: 1
                        }
                    }, this.renderStatus(), i.createElement(N._8, {
                        margin: {
                            bottom: 1
                        }
                    }, this.renderPicker(28), this.renderPicker(56), this.renderPicker(112)), i.createElement(N._8, {
                        margin: {
                            y: 1
                        }
                    }, i.createElement(y.a, {
                        label: Object(h.d)("Unique Code", "EmotesUploader")
                    }, i.createElement(N._4, {
                        type: N._5.Text,
                        onChange: this.onChange
                    }))), i.createElement(N._8, {
                        margin: {
                            y: 1
                        }
                    }, i.createElement(y.a, {
                        label: Object(h.d)("Full Emoticon Code Preview", "EmotesUploader")
                    }, this.props.emoticonPrefix, this.state.code && this.state.code.toUpperCase())), i.createElement(N._8, {
                        margin: {
                            y: 1
                        }
                    }, i.createElement(y.a, {
                        label: ""
                    }, i.createElement(N.v, {
                        disabled: this.submitDisabled,
                        onClick: this.onClick,
                        "data-test-selector": "upload-emoticon-button"
                    }, Object(h.d)("Submit Changes", "EmotesUploader")))))
                }, t.prototype.renderStatus = function() {
                    return this.state.status === M.Error ? i.createElement(N._35, {
                        "data-test-selector": "upload-emoticon-error",
                        borderTop: !0,
                        borderRight: !0,
                        borderBottom: !0,
                        padding: 1,
                        margin: {
                            top: 1
                        },
                        className: "disable-gift-modal__error"
                    }, i.createElement(N.Q, null, Object(h.d)("Something went wrong and your request could not be processed at this time. Please try again later.", "EmotesUploader"))) : this.state.status === M.CodeNotUnique ? i.createElement(N._35, {
                        "data-test-selector": "upload-emoticon-code-invalid",
                        borderTop: !0,
                        borderRight: !0,
                        borderBottom: !0,
                        padding: 1,
                        margin: {
                            top: 1
                        },
                        className: "disable-gift-modal__error"
                    }, i.createElement(N.Q, null, Object(h.d)("An emoticon with the same code already exists.", "EmotesUploader"))) : this.state.status === M.Success ? i.createElement(N._35, {
                        "data-test-selector": "upload-emoticon-success",
                        borderTop: !0,
                        borderRight: !0,
                        borderBottom: !0,
                        padding: 1,
                        margin: {
                            top: 1
                        },
                        className: "disable-gift-modal"
                    }, i.createElement(N.Q, null, Object(h.d)("Emoticon was successfully uploaded!", "EmotesUploader"))) : null
                }, Object.defineProperty(t.prototype, "submitDisabled", {
                    get: function() {
                        return !(this.state.emote112 && this.state.emote56 && this.state.emote28 && this.state.code)
                    },
                    enumerable: !0,
                    configurable: !0
                }), t
            }(i.Component),
            W = (n("z1LJ"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        isChecked: !1
                    }, t.selectForDelete = function() {
                        t.setState(function(e) {
                            return {
                                isChecked: !e.isChecked
                            }
                        }), t.props.toggleEmoteForDeletion(t.props.emoticon.id, t.state.isChecked)
                    }, t
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    var e = this.props,
                        t = e.isEditing,
                        n = e.emoticon,
                        a = i.createElement(N._8, {
                            margin: {
                                left: 1,
                                right: 2
                            }
                        }, i.createElement(N.J, {
                            label: "",
                            checked: this.state.isChecked,
                            "data-id": n.id,
                            onChange: this.selectForDelete
                        })),
                        r = n.state && "PENDING" === n.state ? Object(h.d)("( Pending )", "ChatEmoticonsSettingsItem") : "";
                    return i.createElement(N._52, {
                        display: N.R.Flex,
                        align: N._53.Center,
                        label: n.token + r,
                        direction: N._54.Bottom
                    }, i.createElement(N._8, {
                        display: N.R.InlineBlock,
                        className: "emote-item__img"
                    }, i.createElement(N.N, {
                        alt: "Emoticon",
                        src: "https://static-cdn.jtvnw.net/emoticons/v1/" + n.id + "/1.0"
                    })), t ? a : null)
                }, t
            }(i.Component)),
            Q = (n("6iLs"), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    var e = this,
                        t = this.props,
                        n = t.isEditing,
                        a = t.emoticons,
                        r = t.products,
                        o = a.map(function(t, a) {
                            return i.createElement(N._8, {
                                display: N.R.InlineBlock,
                                key: t.id,
                                margin: {
                                    y: .5,
                                    right: .5
                                }
                            }, i.createElement(W, {
                                emoticon: t,
                                toggleEmoteForDeletion: e.props.toggleEmoteForDeletion,
                                isEditing: n
                            }))
                        }),
                        s = this.props.emoticonLimit - o.length;
                    if (s > 0)
                        for (var l = 0; l < s; l++) o.push(i.createElement(N._8, {
                            display: N.R.InlineBlock,
                            key: l,
                            margin: {
                                y: .5,
                                right: .5
                            },
                            position: N._15.Relative
                        }, i.createElement("div", {
                            className: "emoticons-list__empty"
                        }, i.createElement(N.S, null))));
                    var c = r.map(function(t, a) {
                            var r = null;
                            if (0 === t.emotes.length) r = i.createElement(N._35, {
                                display: N.R.InlineBlock,
                                key: a,
                                margin: {
                                    y: .5,
                                    right: .5
                                },
                                position: N._15.Relative
                            }, i.createElement("div", {
                                className: "emoticons-list__empty"
                            }, i.createElement(N.S, null)));
                            else {
                                var o = t.emotes[0];
                                r = i.createElement(i.Fragment, null, i.createElement(N._8, {
                                    display: N.R.InlineBlock,
                                    key: o.id
                                }, i.createElement(W, {
                                    emoticon: o,
                                    toggleEmoteForDeletion: e.props.toggleEmoteForDeletion,
                                    isEditing: n
                                })), i.createElement(N._8, {
                                    position: N._15.Relative,
                                    margin: {
                                        left: .5
                                    },
                                    display: N.R.InlineBlock,
                                    className: "emoticons-list__price"
                                }, i.createElement(N.Q, null, t.price)))
                            }
                            return i.createElement(N._8, {
                                display: N.R.InlineBlock,
                                key: a,
                                margin: {
                                    right: 1
                                }
                            }, r)
                        }),
                        d = Object(h.d)("Emoticons {a}/{b}", {
                            a: a.length,
                            b: this.props.emoticonLimit
                        }, "EmoticonsList"),
                        u = i.createElement(N._35, {
                            margin: {
                                top: 2
                            }
                        }, i.createElement(y.a, {
                            label: Object(h.d)("Upload Progress", "EmoticonsList")
                        }, i.createElement(N._8, {
                            margin: {
                                top: 1,
                                bottom: 2
                            }
                        }, i.createElement(N.Q, null, Object(h.d)("Mission: Get {num} Subscriber Points", {
                            num: this.props.maxSubScore
                        }, "EmoticonsList"))), i.createElement(N._8, {
                            margin: {
                                y: 1
                            }
                        }, i.createElement(N._8, {
                            display: N.R.InlineBlock
                        }, i.createElement(N.Q, null, Object(h.d)("Reward", "EmoticonsList"), ":")), i.createElement(N._8, {
                            display: N.R.InlineBlock
                        }, i.createElement(N.Q, null, "+", this.props.nextEmoticonLimit - this.props.emoticonLimit, " ", Object(h.d)("Emoticon Slot(s)", "EmoticonsList")))), i.createElement(N._18, {
                            mask: !0,
                            value: this.props.currentSubScore / this.props.maxSubScore * 100,
                            size: N._20.Default
                        }), i.createElement(N._8, {
                            margin: {
                                top: 1,
                                bottom: 2
                            }
                        }, i.createElement(N.Q, null, this.props.currentSubScore, "/", this.props.maxSubScore, " ", Object(h.d)("Subscriber Points", "EmoticonsList")))));
                    return i.createElement(N._8, null, i.createElement(N._35, {
                        margin: {
                            bottom: 2
                        }
                    }, i.createElement(y.a, {
                        label: d
                    }, o)), i.createElement(N._35, {
                        margin: {
                            y: 2
                        }
                    }, i.createElement(y.a, {
                        label: Object(h.d)("Additional Emoticons", "EmoticonsList")
                    }, c, i.createElement(N._8, {
                        margin: {
                            y: 1
                        }
                    }, i.createElement(N.Q, null, Object(h.d)("1 extra emoticon for $9.99 subscribers, and 1 extra for $24.99 subscribers.", "EmoticonsList")), i.createElement(N.Q, null, Object(h.d)("$24.99 subscribers will have access to both emoticons.", "EmoticonsList"))))), this.props.nextEmoticonLimit > 0 ? u : null)
                }, t
            }(i.Component)),
            z = (n("KcSS"), n("VRWR"));
        ! function(e) {
            e[e.None = 0] = "None", e[e.Error = 1] = "Error", e[e.Success = 2] = "Success"
        }(B || (B = {}));
        var G = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        activeTab: 0,
                        isEditing: !1,
                        emotesDeleteQueue: [],
                        deleteStatus: B.None
                    }, t.renderContent = function() {
                        if (t.props.data.loading) return i.createElement(N._10, {
                            fillContent: !0
                        });
                        if (!t.props.data.error && t.props.data.user && t.props.data.user.id && t.props.data.user.subscriptionProducts && t.props.data.user.subscriberScore && t.props.data.user.subscriptionProducts[0]) {
                            var e = t.props.data.user.subscriptionProducts[0];
                            if (!e || !e.emotes) return t.renderPageError();
                            var n = [];
                            e.emotes.forEach(function(e) {
                                e && e.id && e.token && n.push({
                                    id: e.id,
                                    token: e.token,
                                    state: e.state
                                })
                            });
                            var a = [];
                            t.props.data.user.subscriptionProducts.forEach(function(e) {
                                if (e && e.emotes && e.price) {
                                    var t = [];
                                    e.emotes.forEach(function(e) {
                                        e && e.id && e.token && t.push({
                                            id: e.id,
                                            token: e.token,
                                            state: e.state
                                        })
                                    }), a.push({
                                        id: e.id,
                                        price: e.price,
                                        tier: e.tier,
                                        emotes: t
                                    })
                                }
                            });
                            var r = a.slice(1),
                                o = a[t.state.activeTab],
                                s = null,
                                l = t.props.data.user.subscriberScore.currentEmoteLimit;
                            s = 0 === t.state.activeTab && o.emotes && o.emotes.length < l || t.state.activeTab > 0 && o.emotes.length < 1 ? i.createElement(V, {
                                refresh: t.refresh,
                                emoticonPrefix: t.props.emoticonPrefix,
                                channelId: t.props.data.user.id,
                                productId: o.id,
                                uploadEmoticon: x
                            }) : i.createElement(N._8, {
                                margin: {
                                    y: 2
                                }
                            }, Object(h.d)("You’ve already uploaded an emoticon for your {price} subscription. Please feel free to swap an emoticon for a new one by clicking edit, selecting the emoticon(s) you wish to remove, clicking delete, then submitting a new emoticon in the sizes specified.", {
                                price: o.price
                            }, "ChatEmoticonsSettingsPage"));
                            var c = t.props.data.user.subscriberScore.nextEmoteLimit || 0,
                                d = t.props.data.user.subscriberScore.next || 0;
                            return i.createElement(N._8, null, t.renderDeleteError(), t.goodStanding(), i.createElement(N._35, {
                                className: "chat-emoticons-settings-page__actions",
                                margin: {
                                    top: 2
                                }
                            }, t.state.isEditing ? t.editActions() : i.createElement(N.v, {
                                onClick: t.toggleEmotesEditing
                            }, Object(h.d)("Edit", "ChatEmoticonsSettingsPage"))), i.createElement(N._8, {
                                padding: {
                                    top: 2,
                                    bottom: 2
                                }
                            }, i.createElement(Q, {
                                emoticonLimit: t.props.data.user.subscriberScore.currentEmoteLimit,
                                nextEmoticonLimit: c,
                                currentSubScore: t.props.data.user.subscriberScore.current,
                                maxSubScore: d,
                                emoticons: n,
                                products: r,
                                channelName: t.props.channelName,
                                isEditing: t.state.isEditing,
                                toggleEmoteForDeletion: t.toggleEmoteForDeletion
                            })), i.createElement(N._8, {
                                padding: {
                                    top: 1,
                                    bottom: 2,
                                    left: 2,
                                    right: 2
                                }
                            }, i.createElement("h3", null, i.createElement(N.Q, null, Object(h.d)("Upload Emoticons", "ChatEmoticonsSettingsPage"))), i.createElement(N._8, {
                                margin: {
                                    top: 3
                                }
                            }, i.createElement(N._37, null, t.getTabs())), s))
                        }
                        return t.renderPageError()
                    }, t.renderPageError = function() {
                        return i.createElement(c.a, {
                            message: Object(h.d)("Failed to get emote settings. Please try again later", "ChatEmoticonsSettingsPage")
                        })
                    }, t.getTabs = function() {
                        return t.props.data.user && t.props.data.user.subscriptionProducts ? t.props.data.user.subscriptionProducts.map(function(e, n) {
                            return e ? i.createElement(N._36, {
                                key: e.tier,
                                active: t.state.activeTab === n,
                                "data-tab-target": e.tier,
                                onClick: t.toggleActiveTab
                            }, i.createElement(N.Q, null, Object(h.d)("Tier {n}", {
                                n: n + 1
                            }, "ChatEmoticonsSettingsPage"))) : null
                        }) : null
                    }, t.goodStanding = function() {
                        return t.props.data.user && t.props.data.user.isInGoodStanding ? i.createElement(N._8, {
                            className: "chat-emoticons-settings-page__goodstanding",
                            padding: 1,
                            margin: {
                                left: "auto",
                                right: "auto"
                            }
                        }, Object(h.d)("As a Partner in good standing with the ToS, you can add emotes without going through a manual review. Please keep in mind that the <x:link>same emote rules</x:link> still apply.", {
                            "x:link": function(e) {
                                return i.createElement(N.O, {
                                    to: "https://help.twitch.tv/customer/portal/articles/2348985"
                                }, e)
                            }
                        }, "ChatEmoticonsSettingsPage")) : null
                    }, t.editActions = function() {
                        return i.createElement(i.Fragment, null, i.createElement(N.v, {
                            type: N.B.Alert,
                            disabled: 0 === t.state.emotesDeleteQueue.length,
                            onClick: t.deleteEmotes
                        }, Object(h.d)("Delete", "ChatEmoticonsSettingsPage")), i.createElement(N.v, {
                            onClick: t.toggleEmotesEditing
                        }, Object(h.d)("Cancel", "ChatEmoticonsSettingsPage")))
                    }, t.toggleEmoteForDeletion = function(e, n) {
                        var a = t.state.emotesDeleteQueue.indexOf(e);
                        n || -1 !== a ? n && -1 !== a && (t.state.emotesDeleteQueue.splice(a, 1), t.setState({
                            emotesDeleteQueue: t.state.emotesDeleteQueue
                        })) : (t.state.emotesDeleteQueue.push(e), t.setState({
                            emotesDeleteQueue: t.state.emotesDeleteQueue
                        }))
                    }, t.deleteEmotes = function() {
                        return r.__awaiter(t, void 0, void 0, function() {
                            var e, t, n;
                            return r.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        if (0 === this.state.emotesDeleteQueue.length) return [2];
                                        e = 0, t = this.state.emotesDeleteQueue, a.label = 1;
                                    case 1:
                                        if (!(e < t.length)) return [3, 7];
                                        n = t[e], a.label = 2;
                                    case 2:
                                        return a.trys.push([2, 4, 5, 6]), [4, function(e, t) {
                                            return r.__awaiter(this, void 0, void 0, function() {
                                                return r.__generator(this, function(n) {
                                                    switch (n.label) {
                                                        case 0:
                                                            return [4, R.a.deleteOrThrow("/api/ticket_products/" + e + "/remove_emoticon", {
                                                                headers: {
                                                                    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
                                                                    Accept: "application/json"
                                                                },
                                                                credentials: "include",
                                                                body: "emoticon_id=" + t + "&on_site=1"
                                                            })];
                                                        case 1:
                                                            if (n.sent().status >= 400) throw new Error("failed to delete emoticon");
                                                            return [2]
                                                    }
                                                })
                                            })
                                        }(this.props.channelName, n)];
                                    case 3:
                                        return a.sent(), [3, 6];
                                    case 4:
                                        return a.sent(), this.setState({
                                            deleteStatus: B.Error
                                        }), [2];
                                    case 5:
                                        return this.setState({
                                            deleteStatus: B.Success,
                                            isEditing: !1
                                        }), this.props.data.refetch(), [7];
                                    case 6:
                                        return e++, [3, 1];
                                    case 7:
                                        return [2]
                                }
                            })
                        })
                    }, t.toggleEmotesEditing = function() {
                        t.setState(function(e) {
                            return {
                                isEditing: !e.isEditing,
                                emotesDeleteQueue: []
                            }
                        })
                    }, t.refresh = function() {
                        return r.__awaiter(t, void 0, void 0, function() {
                            return r.__generator(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, this.props.data.refetch()];
                                    case 1:
                                        return e.sent(), [2, Promise.resolve()]
                                }
                            })
                        })
                    }, t.toggleActiveTab = function(e) {
                        return r.__awaiter(t, void 0, void 0, function() {
                            var t, n = this;
                            return r.__generator(this, function(a) {
                                return e.currentTarget.parentElement && this.props.data.user && this.props.data.user.subscriptionProducts && (t = e.currentTarget.parentElement.getAttribute("data-tab-target"), this.props.data.user.subscriptionProducts.forEach(function(e, a) {
                                    e && t === e.tier && n.setState({
                                        activeTab: a
                                    })
                                })), [2]
                            })
                        })
                    }, t
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    return i.createElement(N._8, null, i.createElement(S.a, {
                        title: Object(h.d)("Emotes Settings", "EmotesSettingsPage"),
                        description: Object(h.d)("Emoticons that your subscribers can use in Twitch chat", "EmotesSettingsPage"),
                        linkToParent: "/" + this.props.channelName + "/dashboard/settings/revenue"
                    }), i.createElement(_.a, null, this.renderContent()))
                }, t.prototype.renderDeleteError = function() {
                    return this.state.deleteStatus === B.Error ? i.createElement(N._35, {
                        borderTop: !0,
                        borderRight: !0,
                        borderBottom: !0,
                        padding: 1,
                        margin: {
                            top: 1
                        },
                        className: "disable-gift-modal__error"
                    }, i.createElement(N.Q, null, Object(h.d)("Something went wrong and your request could not be processed at this time. Please try again later.", "ChatEmoticonsSettingsPage"))) : null
                }, t
            }(i.Component),
            Y = Object(g.d)(Object(m.a)(z, {
                options: function(e) {
                    return {
                        variables: {
                            login: e.channelName
                        }
                    }
                }
            }))(G),
            q = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.refetch = function() {
                        t.props.data.refetch()
                    }, t
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    return this.props.data.user && this.props.data.user.id && this.props.data.user.emoticonPrefix && this.props.data.user.emoticonPrefix.state ? this.props.data.user && this.props.data.user.emoticonPrefix.state === T.ACTIVE ? i.createElement(Y, {
                        channelName: this.props.match.params.channelName,
                        emoticonPrefix: this.props.data.user.emoticonPrefix.name
                    }) : i.createElement(I, {
                        channelId: this.props.data.user.id,
                        channelName: this.props.match.params.channelName,
                        prefix: this.props.data.user.emoticonPrefix.name,
                        prefixState: this.props.data.user.emoticonPrefix.state,
                        refetch: this.refetch
                    }) : this.props.data.loading ? i.createElement(N._10, {
                        fillContent: !0
                    }) : i.createElement(c.a, {
                        message: Object(h.d)("Failed to get emote settings. Please try again later.", "ChatEmoticonsPage")
                    })
                }, t
            }(i.Component),
            H = Object(g.d)(Object(m.a)(w, {
                options: function(e) {
                    return {
                        variables: {
                            login: e.match.params.channelName
                        }
                    }
                }
            }))(q),
            X = n("n63+"),
            K = n("d4P3"),
            $ = function(e) {
                return i.createElement(N._35, {
                    display: N.R.Flex,
                    flexDirection: N.T.Row,
                    background: N.n.Alt,
                    alignItems: N.c.Center,
                    padding: 1
                }, i.createElement(N._8, {
                    margin: {
                        right: 1
                    },
                    display: N.R.Flex,
                    alignContent: N.b.Center
                }, i.createElement(N._52, {
                    label: e.title,
                    "data-test-selector": "tooltip-selector"
                }, i.createElement("img", {
                    alt: e.title,
                    src: e.imageSrc
                }))), i.createElement(N._8, {
                    flexGrow: 1
                }, i.createElement(N.Q, {
                    "data-test-selector": "threshold-selector"
                }, Object(h.d)("{threshold} Bit Badge", {
                    threshold: Object(h.e)(e.threshold)
                }, "ChatBadgeTierItem"))), i.createElement(N._51, {
                    onChange: e.onToggle,
                    checked: e.checked,
                    "data-test-selector": "toggle-selector"
                }, Object(h.d)("Edit", "ChatBadgeTierItem")))
            },
            J = function() {
                return i.createElement(N._35, {
                    padding: 1,
                    display: N.R.Flex,
                    flexDirection: N.T.Row
                }, i.createElement(N._8, {
                    padding: {
                        right: 1
                    }
                }, i.createElement(N._14, {
                    width: 20,
                    height: 20
                })), i.createElement(N._8, {
                    flexGrow: 1
                }, i.createElement(N._14, null)))
            },
            Z = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        saveStatus: f.b.NoChanges
                    }, t.renderTierItems = function() {
                        return t.tiers.map(function(e, n) {
                            var a, r;
                            return e && e.badge ? (a = e.badge.id, r = i.createElement($, {
                                threshold: e.threshold,
                                checked: e.isEnabled,
                                imageSrc: e.badge.image1x,
                                title: e.badge.title,
                                onToggle: t.onItemToggle.bind(t, n)
                            })) : (a = n, r = i.createElement(J, null)), i.createElement(N._8, {
                                margin: {
                                    bottom: 1
                                },
                                key: a
                            }, r)
                        })
                    }, t.onItemToggle = function(e, n) {
                        return r.__awaiter(t, void 0, void 0, function() {
                            var t, a, i, o, s, l, c, d, u;
                            return r.__generator(this, function(m) {
                                switch (m.label) {
                                    case 0:
                                        return t = n.currentTarget.checked, a = this.props, i = a.channelName, o = a.data, s = a.updateBadgeTiers, this.tiers && o.user && o.user.id ? (l = this.tiers[e], c = {
                                            userID: o.user.id,
                                            badges: {
                                                tiers: [{
                                                    isEnabled: t,
                                                    threshold: l.threshold
                                                }]
                                            }
                                        }, d = {
                                            updateCheerPartnerSettings: {
                                                __typename: "UpdateCheerPartnerSettingsPayload",
                                                cheer: {
                                                    __typename: "CheerPartnerSettings",
                                                    badges: {
                                                        __typename: "CheerPartnerBadgeSettings",
                                                        tiers: this.tiers.slice(0, e).concat([r.__assign({}, l, {
                                                            isEnabled: t
                                                        })], this.tiers.slice(e + 1))
                                                    }
                                                }
                                            }
                                        }, [4, s(Object(b.b)(c, d))]) : [2];
                                    case 1:
                                        return u = m.sent(), Object(b.e)(X, {
                                            login: i
                                        }, function(t) {
                                            return t.user && t.user.settings && t.user.settings.cheer && t.user.settings.cheer.badges && u.data.updateCheerPartnerSettings && u.data.updateCheerPartnerSettings.cheer && u.data.updateCheerPartnerSettings.cheer.badges && (t.user.settings.cheer.badges.tiers[e].isEnabled = u.data.updateCheerPartnerSettings.cheer.badges.tiers[e].isEnabled), t
                                        }), [2]
                                }
                            })
                        })
                    }, t
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    var e = this.renderTierItems();
                    return i.createElement(y.a, {
                        label: Object(h.d)("Chat Badge Tiers", "ChatBadgeTiersForm")
                    }, i.createElement(N._8, {
                        margin: {
                            bottom: 2
                        }
                    }, i.createElement(N.Q, null, Object(h.d)("Choose which Cheer Chat Badges are enabled in your channel. Viewers unlock badges based on total Bits used to Cheer for you. The highest unlocked enabled badge will appear next to viewers' names", "ChatBadgeTiersForm"))), i.createElement(N.Y, {
                        gutterSize: N.Z.Medium
                    }, i.createElement(N.L, {
                        cols: {
                            default: 12,
                            sm: 6
                        }
                    }, e.slice(0, Math.floor(e.length / 2))), i.createElement(N.L, {
                        cols: {
                            default: 12,
                            sm: 6
                        }
                    }, e.slice(Math.floor(e.length / 2)))))
                }, Object.defineProperty(t.prototype, "tiers", {
                    get: function() {
                        var e = this.props.data,
                            t = Array(28).fill(null);
                        return !e.loading && !e.error && e.user && e.user.settings && e.user.settings.cheer && e.user.settings.cheer.badges && (t = e.user.settings.cheer.badges.tiers), t
                    },
                    enumerable: !0,
                    configurable: !0
                }), t
            }(i.Component),
            ee = Object(g.d)(Object(m.a)(X, {
                options: function(e) {
                    return {
                        variables: {
                            login: e.channelName
                        }
                    }
                }
            }), Object(m.a)(K, {
                name: "updateBadgeTiers"
            }))(Z),
            te = n("IIxK"),
            ne = (n("24ae"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onFilesSubmitted = function(e) {
                        var n = t.props.onImageSubmit,
                            a = e[0],
                            r = new FileReader;
                        r.onloadend = function() {
                            n && n(r.result)
                        }, r.readAsDataURL(a)
                    }, t
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    var e = this.props,
                        t = e.error,
                        n = e.children;
                    return i.createElement(N._35, {
                        position: N._15.Relative,
                        padding: 5,
                        background: N.n.Alt
                    }, i.createElement(F.a, {
                        allowedFileTypes: [".png"],
                        onFilesSubmitted: this.onFilesSubmitted,
                        error: t
                    }, i.createElement(N._35, {
                        position: N._15.Absolute,
                        attachTop: !0,
                        attachLeft: !0,
                        fullWidth: !0,
                        fullHeight: !0,
                        display: N.R.Flex,
                        flexDirection: N.T.Column,
                        alignItems: N.c.Center,
                        justifyContent: N._7.Center,
                        className: "chat-badge-drop-zone__content"
                    }, n)))
                }, t
            }(i.Component));
        var ae, re = this,
            ie = function(e, t) {
                return r.__awaiter(re, void 0, void 0, function() {
                    var n, a, i;
                    return r.__generator(this, function(r) {
                        switch (r.label) {
                            case 0:
                                return [4, (o = e, new Promise(function(e, t) {
                                    var n = new Image;
                                    n.onload = function() {
                                        var t = n.height,
                                            a = n.width;
                                        e({
                                            height: t,
                                            width: a
                                        })
                                    }, n.onerror = function() {
                                        t("Failed to load image")
                                    }, n.src = o
                                }))];
                            case 1:
                                return n = r.sent(), a = n.height, i = n.width, [2, a === t.height && i === t.width]
                        }
                        var o
                    })
                })
            },
            oe = n("wGye"),
            se = n("8/C/"),
            le = 18,
            ce = 36,
            de = 72,
            ue = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        selectedIndex: 2,
                        stagedImageURLs: {},
                        saveStatus: f.b.NoChanges,
                        image1xError: !1,
                        image2xError: !1,
                        image4xError: !1
                    }, t.onSelectChange = function(e) {
                        var n = e.currentTarget.selectedIndex;
                        t.setState(function(e) {
                            if (t.tiers) {
                                var a = t.tiers[n],
                                    r = e.stagedImageURLs[a.threshold];
                                return {
                                    selectedIndex: n,
                                    saveStatus: r && r.image1x && r.image2x && r.image4x ? f.b.DirtyChanges : f.b.NoChanges
                                }
                            }
                        })
                    }, t.onNormalImageSubmitted = function(e) {
                        return r.__awaiter(t, void 0, void 0, function() {
                            return r.__generator(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        return [4, ie(e, {
                                            height: le,
                                            width: le
                                        })];
                                    case 1:
                                        return t.sent() ? (this.updateStagedImageURLs({
                                            image1x: e
                                        }), [2]) : (this.setState({
                                            image1xError: !0
                                        }), [2])
                                }
                            })
                        })
                    }, t.onDoubleImageSubmitted = function(e) {
                        return r.__awaiter(t, void 0, void 0, function() {
                            return r.__generator(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        return [4, ie(e, {
                                            height: ce,
                                            width: ce
                                        })];
                                    case 1:
                                        return t.sent() ? (this.updateStagedImageURLs({
                                            image2x: e
                                        }), [2]) : (this.setState({
                                            image2xError: !0
                                        }), [2])
                                }
                            })
                        })
                    }, t.onQuadrupleImageSubmitted = function(e) {
                        return r.__awaiter(t, void 0, void 0, function() {
                            return r.__generator(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        return [4, ie(e, {
                                            height: de,
                                            width: de
                                        })];
                                    case 1:
                                        return t.sent() ? (this.updateStagedImageURLs({
                                            image4x: e
                                        }), [2]) : (this.setState({
                                            image4xError: !0
                                        }), [2])
                                }
                            })
                        })
                    }, t.updateStagedImageURLs = function(e) {
                        t.setState(function(n) {
                            if (t.tiers) {
                                var a, i = t.tiers[n.selectedIndex],
                                    o = {};
                                return e && (o = r.__assign({}, n.stagedImageURLs[i.threshold], e)), {
                                    stagedImageURLs: r.__assign({}, n.stagedImageURLs, (a = {}, a[i.threshold] = o, a)),
                                    saveStatus: o && o.image1x && o.image2x && o.image4x ? f.b.DirtyChanges : f.b.NoChanges,
                                    image1xError: !1,
                                    image2xError: !1,
                                    image4xError: !1
                                }
                            }
                        })
                    }, t.onRevertButtonClick = function() {
                        return r.__awaiter(t, void 0, void 0, function() {
                            var e, t, n, a, i, o, s, l, c, d = this;
                            return r.__generator(this, function(u) {
                                switch (u.label) {
                                    case 0:
                                        return e = this.state.selectedIndex, t = this.props, n = t.data, a = t.updateBadgeTierImages, i = t.channelName, this.tiers && n.user && n.user.id ? (o = this.tiers[e]).badge ? (s = {
                                            userID: n.user.id,
                                            badges: {
                                                tiers: [{
                                                    threshold: o.threshold,
                                                    deleteImage: !0
                                                }]
                                            }
                                        }, l = {
                                            updateCheerPartnerSettings: {
                                                __typename: "UpdateCheerPartnerSettingsPayload",
                                                cheer: {
                                                    __typename: "CheerPartnerSettings",
                                                    badges: {
                                                        __typename: "CheerPartnerBadgeSettings",
                                                        tiers: this.tiers.slice(0, e).concat([r.__assign({}, o, {
                                                            badge: r.__assign({}, o.badge, {
                                                                user: null
                                                            })
                                                        })], this.tiers.slice(e + 1))
                                                    }
                                                }
                                            }
                                        }, [4, a(Object(b.b)(s, l))]) : [2] : [2];
                                    case 1:
                                        return c = u.sent(), Object(b.e)(oe, {
                                            login: i
                                        }, function(t) {
                                            if (t.user && t.user.settings && t.user.settings.cheer && t.user.settings.cheer.badges && c.data.updateCheerPartnerSettings && c.data.updateCheerPartnerSettings.cheer && c.data.updateCheerPartnerSettings.cheer.badges) {
                                                var n = c.data.updateCheerPartnerSettings.cheer.badges.tiers[e],
                                                    a = t.user.settings.cheer.badges.tiers[e];
                                                n && n.badge && a && a.badge && (a.badge = r.__assign({}, a.badge, n.badge))
                                            }
                                            return d.updateStagedImageURLs(), t
                                        }), [2]
                                }
                            })
                        })
                    }, t.onSaveButtonClick = function() {
                        return r.__awaiter(t, void 0, void 0, function() {
                            var e, t, n, a, i, o, s, l, c, d, u;
                            return r.__generator(this, function(m) {
                                switch (m.label) {
                                    case 0:
                                        if (e = this.state, t = e.stagedImageURLs, n = e.selectedIndex, a = this.props, i = a.data, o = a.updateBadgeTierImages, s = a.channelName, !this.tiers || !i.user || !i.user.id) return [2];
                                        if (l = this.tiers[n], !(c = t[l.threshold]).image1x || !c.image2x || !c.image4x) return [2];
                                        d = {
                                            userID: i.user.id,
                                            badges: {
                                                tiers: [{
                                                    threshold: l.threshold,
                                                    imageData1x: Object(te.b)(c.image1x),
                                                    imageData2x: Object(te.b)(c.image2x),
                                                    imageData4x: Object(te.b)(c.image4x)
                                                }]
                                            }
                                        }, this.setState({
                                            saveStatus: f.b.Working
                                        }), m.label = 1;
                                    case 1:
                                        return m.trys.push([1, 3, , 4]), [4, o(Object(b.a)(d))];
                                    case 2:
                                        return u = m.sent(), Object(b.e)(oe, {
                                            login: s
                                        }, function(e) {
                                            if (e.user && e.user.settings && e.user.settings.cheer && e.user.settings.cheer.badges && u.data.updateCheerPartnerSettings && u.data.updateCheerPartnerSettings.cheer && u.data.updateCheerPartnerSettings.cheer.badges) {
                                                var t = u.data.updateCheerPartnerSettings.cheer.badges.tiers[n],
                                                    a = e.user.settings.cheer.badges.tiers[n];
                                                t && t.badge && a && a.badge && (a.badge = r.__assign({}, a.badge, t.badge))
                                            }
                                            return e
                                        }), this.updateStagedImageURLs(), this.setState({
                                            saveStatus: f.b.Success
                                        }), [3, 4];
                                    case 3:
                                        return m.sent(), this.setState({
                                            saveStatus: f.b.Error
                                        }), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, t
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    var e = this.state,
                        t = e.selectedIndex,
                        n = e.stagedImageURLs,
                        a = e.saveStatus,
                        r = e.image1xError,
                        o = e.image2xError,
                        s = e.image4xError;
                    if (!this.tiers) return null;
                    var l, c, d, u, m = this.tiers[t];
                    m.badge && m.badge.user && (l = i.createElement(N.v, {
                        onClick: this.onRevertButtonClick,
                        type: N.B.Hollow,
                        fullWidth: !0
                    }, Object(h.d)("Reset to Default Badge", "ChatBadgeUploadForm")), c = m.badge.image1x, d = m.badge.image2x, u = m.badge.image4x);
                    var p = n[m.threshold];
                    return p && (c = p.image1x || c, d = p.image2x || d, u = p.image4x || u), i.createElement(y.a, {
                        label: Object(h.d)("Upload Badge Images", "ChatBadgeUploadForm")
                    }, i.createElement(N.Y, null, i.createElement(N.L, {
                        cols: {
                            default: 12,
                            sm: 5
                        }
                    }, i.createElement(N._30, {
                        onChange: this.onSelectChange,
                        value: String(m.threshold)
                    }, this.tiers.map(function(e) {
                        return i.createElement("option", {
                            key: e.threshold,
                            value: e.threshold,
                            disabled: e.threshold < 1e3
                        }, " ", Object(h.d)("{threshold} Bit Badge", {
                            threshold: Object(h.e)(e.threshold)
                        }, "ChatBadgeUploadForm"))
                    })))), i.createElement(N.Y, null, i.createElement(N.L, {
                        cols: {
                            default: 12,
                            sm: 8
                        }
                    }, i.createElement(N._8, {
                        display: N.R.Flex,
                        justifyContent: N._7.Between,
                        margin: {
                            y: 2
                        }
                    }, i.createElement(N._8, {
                        display: N.R.InlineFlex,
                        flexDirection: N.T.Column,
                        alignItems: N.c.Center
                    }, i.createElement(ne, {
                        onImageSubmit: this.onNormalImageSubmitted,
                        error: r
                    }, c ? i.createElement("img", {
                        src: c,
                        height: 18,
                        width: 18
                    }) : i.createElement(N._24, {
                        asset: N._25.Plus,
                        height: 32,
                        width: 32
                    })), i.createElement(N.Q, {
                        color: r ? N.K.Error : N.K.Base
                    }, Object(h.d)("18 x 18px", "ChatBadgeUploadForm"))), i.createElement(N._8, {
                        display: N.R.InlineFlex,
                        flexDirection: N.T.Column,
                        alignItems: N.c.Center
                    }, i.createElement(ne, {
                        onImageSubmit: this.onDoubleImageSubmitted,
                        error: o
                    }, d ? i.createElement("img", {
                        src: d,
                        height: 36,
                        width: 36
                    }) : i.createElement(N._24, {
                        asset: N._25.Plus,
                        height: 32,
                        width: 32
                    })), i.createElement(N.Q, {
                        color: o ? N.K.Error : N.K.Base
                    }, Object(h.d)("36 x 36px", "ChatBadgeUploadForm"))), i.createElement(N._8, {
                        display: N.R.InlineFlex,
                        flexDirection: N.T.Column,
                        alignItems: N.c.Center
                    }, i.createElement(ne, {
                        onImageSubmit: this.onQuadrupleImageSubmitted,
                        error: s
                    }, u ? i.createElement("img", {
                        src: u,
                        height: 72,
                        width: 72
                    }) : i.createElement(N._24, {
                        asset: N._25.Plus,
                        height: 32,
                        width: 32
                    })), i.createElement(N.Q, {
                        color: s ? N.K.Error : N.K.Base
                    }, Object(h.d)("72 x 72px", "ChatBadgeUploadForm")))))), i.createElement(N.Y, {
                        gutterSize: N.Z.Medium
                    }, i.createElement(N.L, {
                        cols: 4
                    }, i.createElement(f.a, {
                        status: a,
                        onClick: this.onSaveButtonClick,
                        fullWidth: !0
                    }, Object(h.d)("Upload Badge Images", "ChatBadgeUploadFormSaveButton"))), i.createElement(N.L, {
                        cols: 4
                    }, l)))
                }, Object.defineProperty(t.prototype, "tiers", {
                    get: function() {
                        var e, t = this.props.data;
                        return !t.loading && !t.error && t.user && t.user.settings && t.user.settings.cheer && t.user.settings.cheer.badges && (e = t.user.settings.cheer.badges.tiers), e
                    },
                    enumerable: !0,
                    configurable: !0
                }), t
            }(i.Component),
            me = Object(g.d)(Object(m.a)(oe, {
                options: function(e) {
                    return {
                        variables: {
                            login: e.channelName
                        }
                    }
                }
            }), Object(m.a)(se, {
                name: "updateBadgeTierImages"
            }))(ue),
            pe = function(e) {
                var t = e.match;
                return i.createElement(N._8, null, i.createElement(S.a, {
                    title: Object(h.d)("Cheer Chat Badge Settings", "CheerBadgesSettingsPage"),
                    description: Object(h.d)("Custom settings for Cheer chat badges", "CheerBadgesSettingsPage"),
                    linkToParent: "/" + t.params.channelName + "/dashboard/settings/revenue"
                }), i.createElement(_.a, null, i.createElement(ee, {
                    channelName: t.params.channelName
                }), i.createElement(me, {
                    channelName: t.params.channelName
                })))
            },
            ge = n("LIeg");
        ! function(e) {
            e.ALLTIME = "ALLTIME", e.MONTH = "MONTH", e.WEEK = "WEEK"
        }(ae || (ae = {}));
        var he = n("D6iq"),
            be = n("ZKiL"),
            fe = 5,
            Ee = 300,
            ve = 1e6,
            ye = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    n.state = {
                        recentCheerMinimumBitsSaveStatus: f.b.NoChanges,
                        recentCheerTimeoutSaveStatus: f.b.NoChanges,
                        recentCheerTimeoutError: !1
                    }, n.onLeaderboardEnabledCheckBoxClick = function(e) {
                        return r.__awaiter(n, void 0, void 0, function() {
                            var t, n, a, i, o, s, l, c, d;
                            return r.__generator(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        if (t = e.currentTarget.checked, n = this.props, a = n.setPinnedCheerSettings, i = n.data, o = n.channelName, !(i.user && i.user.id && i.user.settings && i.user.settings.cheer)) return [2];
                                        s = {
                                            userID: i.user.id,
                                            leaderboard: {
                                                isEnabled: t
                                            }
                                        }, l = ge(i.user.settings.cheer, function(e) {
                                            return e.leaderboard
                                        }, function(e) {
                                            return e.isEnabled = t, e
                                        }), c = {
                                            updateCheerPartnerSettings: {
                                                __typename: "UpdateCheerPartnerSettingsPayload",
                                                cheer: l
                                            }
                                        }, r.label = 1;
                                    case 1:
                                        return r.trys.push([1, 3, , 4]), [4, a(Object(b.b)(s, c))];
                                    case 2:
                                        return d = r.sent(), Object(b.e)(be, {
                                            login: o
                                        }, function(e) {
                                            return e.user && e.user.settings && e.user.settings.cheer && d.data.updateCheerPartnerSettings && (e.user.settings.cheer.leaderboard.isEnabled = d.data.updateCheerPartnerSettings.cheer.leaderboard.isEnabled), e
                                        }), [3, 4];
                                    case 3:
                                        return r.sent(), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, n.onLeaderboardTimePeriodRadioButtonClick = function(e) {
                        return r.__awaiter(n, void 0, void 0, function() {
                            var t, n, a, i, o, s, l, c, d;
                            return r.__generator(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        if (t = e.currentTarget.value, n = this.props, a = n.setPinnedCheerSettings, i = n.data, o = n.channelName, !(i.user && i.user.id && i.user.settings && i.user.settings.cheer)) return [2];
                                        s = {
                                            userID: i.user.id,
                                            leaderboard: {
                                                timePeriod: t
                                            }
                                        }, l = ge(i.user.settings.cheer, function(e) {
                                            return e.leaderboard
                                        }, function(e) {
                                            return e.timePeriod = t, e
                                        }), c = {
                                            updateCheerPartnerSettings: {
                                                __typename: "UpdateCheerPartnerSettingsPayload",
                                                cheer: l
                                            }
                                        }, r.label = 1;
                                    case 1:
                                        return r.trys.push([1, 3, , 4]), [4, a(Object(b.b)(s, c))];
                                    case 2:
                                        return d = r.sent(), Object(b.e)(be, {
                                            login: o
                                        }, function(e) {
                                            return e.user && e.user.settings && e.user.settings.cheer && d.data.updateCheerPartnerSettings && (e.user.settings.cheer.leaderboard.timePeriod = d.data.updateCheerPartnerSettings.cheer.leaderboard.timePeriod), e
                                        }), [3, 4];
                                    case 3:
                                        return r.sent(), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, n.onRecentCheerEnabledCheckBoxChange = function(e) {
                        return r.__awaiter(n, void 0, void 0, function() {
                            var t, n, a, i, o, s, l, c, d;
                            return r.__generator(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        if (t = e.currentTarget.checked, n = this.props, a = n.setPinnedCheerSettings, i = n.data, o = n.channelName, !(i.user && i.user.id && i.user.settings && i.user.settings.cheer)) return [2];
                                        s = {
                                            userID: i.user.id,
                                            recentCheer: {
                                                canPin: t
                                            }
                                        }, l = ge(i.user.settings.cheer, function(e) {
                                            return e.recentCheer
                                        }, function(e) {
                                            return e.canPin = t, e
                                        }), c = {
                                            updateCheerPartnerSettings: {
                                                __typename: "UpdateCheerPartnerSettingsPayload",
                                                cheer: l
                                            }
                                        }, r.label = 1;
                                    case 1:
                                        return r.trys.push([1, 3, , 4]), [4, a(Object(b.b)(s, c))];
                                    case 2:
                                        return d = r.sent(), Object(b.e)(be, {
                                            login: o
                                        }, function(e) {
                                            return e.user && e.user.settings && e.user.settings.cheer && d.data.updateCheerPartnerSettings && (e.user.settings.cheer.recentCheer.canPin = d.data.updateCheerPartnerSettings.cheer.recentCheer.canPin), e
                                        }), [3, 4];
                                    case 3:
                                        return r.sent(), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, n.onRecentCheerTimeoutInputChange = function(e) {
                        var t = parseInt(e.currentTarget.value, 10),
                            a = !t || t < fe;
                        n.setState({
                            recentCheerTimeout: Math.min(t, Ee),
                            recentCheerTimeoutSaveStatus: a ? f.b.NoChanges : f.b.DirtyChanges,
                            recentCheerTimeoutError: a
                        })
                    }, n.onRecentCheerTimeoutSaveButtonClick = function() {
                        return r.__awaiter(n, void 0, void 0, function() {
                            var e, t, n, a, i, o, s, l, c;
                            return r.__generator(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        if (e = this.state.recentCheerTimeout, t = this.props, n = t.setPinnedCheerSettings, a = t.data, i = t.channelName, !(a.user && a.user.id && a.user.settings && a.user.settings.cheer && e)) return [2];
                                        o = {
                                            userID: a.user.id,
                                            recentCheer: {
                                                timeoutMilliseconds: e
                                            }
                                        }, s = ge(a.user.settings.cheer, function(e) {
                                            return e.recentCheer
                                        }, function(t) {
                                            return t.timeoutMilliseconds = e, t
                                        }), l = {
                                            updateCheerPartnerSettings: {
                                                __typename: "UpdateCheerPartnerSettingsPayload",
                                                cheer: s
                                            }
                                        }, this.setState({
                                            recentCheerTimeoutSaveStatus: f.b.Working
                                        }), r.label = 1;
                                    case 1:
                                        return r.trys.push([1, 3, , 4]), [4, n(Object(b.b)(o, l))];
                                    case 2:
                                        return c = r.sent(), Object(b.e)(be, {
                                            login: i
                                        }, function(e) {
                                            return e.user && e.user.settings && e.user.settings.cheer && c.data.updateCheerPartnerSettings && (e.user.settings.cheer.recentCheer.timeoutMilliseconds = c.data.updateCheerPartnerSettings.cheer.recentCheer.timeoutMilliseconds), e
                                        }), this.setState({
                                            recentCheerTimeoutSaveStatus: f.b.Success
                                        }), [3, 4];
                                    case 3:
                                        return r.sent(), this.setState({
                                            recentCheerTimeoutSaveStatus: f.b.Error
                                        }), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, n.onRecentCheerMinimumBitsInputChange = function(e) {
                        var t = parseInt(e.currentTarget.value, 10);
                        n.setState({
                            recentCheerMinimumBits: Math.min(t, ve),
                            recentCheerMinimumBitsSaveStatus: t ? f.b.DirtyChanges : f.b.NoChanges
                        })
                    }, n.onRecentCheerMinimumBitsSaveButtonClick = function() {
                        return r.__awaiter(n, void 0, void 0, function() {
                            var e, t, n, a, i, o, s, l, c;
                            return r.__generator(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        if (e = this.state.recentCheerMinimumBits, t = this.props, n = t.setPinnedCheerSettings, a = t.data, i = t.channelName, !(a.user && a.user.id && a.user.settings && a.user.settings.cheer && e)) return [2];
                                        o = {
                                            userID: a.user.id,
                                            recentCheer: {
                                                minimumBits: e
                                            }
                                        }, s = ge(a.user.settings.cheer, function(e) {
                                            return e.recentCheer
                                        }, function(t) {
                                            return t.minimumBits = e, t
                                        }), l = {
                                            updateCheerPartnerSettings: {
                                                __typename: "UpdateCheerPartnerSettingsPayload",
                                                cheer: s
                                            }
                                        }, this.setState({
                                            recentCheerMinimumBitsSaveStatus: f.b.Working
                                        }), r.label = 1;
                                    case 1:
                                        return r.trys.push([1, 3, , 4]), [4, n(Object(b.b)(o, l))];
                                    case 2:
                                        return c = r.sent(), Object(b.e)(be, {
                                            login: i
                                        }, function(e) {
                                            return e.user && e.user.settings && e.user.settings.cheer && c.data.updateCheerPartnerSettings && (e.user.settings.cheer.recentCheer.minimumBits = c.data.updateCheerPartnerSettings.cheer.recentCheer.minimumBits), e
                                        }), this.setState({
                                            recentCheerMinimumBitsSaveStatus: f.b.Success
                                        }), [3, 4];
                                    case 3:
                                        return r.sent(), this.setState({
                                            recentCheerMinimumBitsSaveStatus: f.b.Error
                                        }), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    };
                    var a = t.data;
                    return !a.loading && !a.error && a.user && a.user.settings && a.user.settings.cheer && (n.state = r.__assign({}, n.state, {
                        recentCheerTimeout: a.user.settings.cheer.recentCheer.timeoutMilliseconds,
                        recentCheerMinimumBits: a.user.settings.cheer.recentCheer.minimumBits
                    })), n
                }
                return r.__extends(t, e), t.prototype.componentWillReceiveProps = function(e) {
                    var t = e.data;
                    !t.loading && !t.error && t.user && t.user.settings && t.user.settings.cheer && this.setState({
                        recentCheerTimeout: t.user.settings.cheer.recentCheer.timeoutMilliseconds,
                        recentCheerMinimumBits: t.user.settings.cheer.recentCheer.minimumBits
                    })
                }, t.prototype.render = function() {
                    var e = this.props.data,
                        t = this.state,
                        n = t.recentCheerTimeout,
                        a = t.recentCheerMinimumBits,
                        r = t.recentCheerMinimumBitsSaveStatus,
                        o = t.recentCheerTimeoutError,
                        s = t.recentCheerTimeoutSaveStatus,
                        l = !1,
                        c = null,
                        d = !1;
                    return e.user && e.user.settings && e.user.settings.cheer && (l = e.user.settings.cheer.leaderboard.isEnabled, c = e.user.settings.cheer.leaderboard.timePeriod, d = e.user.settings.cheer.recentCheer.canPin), i.createElement(_.a, null, i.createElement(y.a, {
                        label: Object(h.d)("Enable Top Cheerers", "PinnedCheerSettings")
                    }, i.createElement(N.J, {
                        label: Object(h.d)("Enable Top Cheerers", "PinnedCheerSettingsCheckBox"),
                        checked: l,
                        onChange: this.onLeaderboardEnabledCheckBoxClick,
                        "data-test-selector": "top-cheerers-checkbox-selector"
                    }), i.createElement(v.a, {
                        text: Object(h.d)("Pin Top Cheerers to the top of your chat.", "PinnedCheerSettings")
                    })), i.createElement(y.a, {
                        label: Object(h.d)("Top Cheerers Time Range", "PinnedCheerSettings")
                    }, i.createElement(N._8, null, i.createElement(N._21, {
                        label: Object(h.d)("Weekly", "PinnedCheerSettings"),
                        value: ae.WEEK,
                        checked: c === ae.WEEK,
                        onChange: this.onLeaderboardTimePeriodRadioButtonClick
                    })), i.createElement(N._8, {
                        margin: {
                            y: 1
                        }
                    }, i.createElement(N._21, {
                        label: Object(h.d)("Monthly", "PinnedCheerSettings"),
                        value: ae.MONTH,
                        checked: c === ae.MONTH,
                        onChange: this.onLeaderboardTimePeriodRadioButtonClick
                    })), i.createElement(N._8, {
                        margin: {
                            y: 1
                        }
                    }, i.createElement(N._21, {
                        label: Object(h.d)("All-Time", "PinnedCheerSettings"),
                        value: ae.ALLTIME,
                        checked: c === ae.ALLTIME,
                        onChange: this.onLeaderboardTimePeriodRadioButtonClick
                    })), i.createElement(v.a, {
                        text: Object(h.d)("Choose Weekly for a leaderboard that automatically resets every Monday 12:01AM PT. Choose Monthly to reset every 1st day of the month. Choose All-Time for a leaderboard that tracks the Top Cheerers in your channel for all time, starting from when Bits launched in June of 2016.", "PinnedCheerSettings")
                    })), i.createElement(y.a, {
                        label: Object(h.d)("Enable Recent Cheers", "PinnedCheerSettings")
                    }, i.createElement(N.J, {
                        label: Object(h.d)("Pin Most Recent Cheer", "PinnedCheerSettings"),
                        checked: d,
                        onChange: this.onRecentCheerEnabledCheckBoxChange,
                        "data-test-selector": "pin-most-recent-cheer-checkbox-selector"
                    }), i.createElement(v.a, {
                        text: i.createElement(i.Fragment, null, Object(h.d)("Pin the most recent Cheer to the top of your chat. Note that you and your moderators can unpin a Pinned Cheer at any time.", "PinnedCheerSettings"), i.createElement(N._8, {
                            margin: {
                                top: 1
                            }
                        }, Object(h.d)("If enabled, Pinned Recent Cheers will be automatically dismissed after the number of seconds that you set below.", "PinnedCheerSettings")))
                    }), i.createElement(N._8, {
                        margin: {
                            top: 1
                        }
                    }, i.createElement(N.W, {
                        label: Object(h.d)("Seconds", "PinnedCheerSettings"),
                        error: d && o,
                        errorMessage: Object(h.d)("Timeout must be between {min} and {max} seconds", {
                            min: fe,
                            max: Ee
                        }, "PinnedCheerSettings"),
                        "data-test-selector": "recent-cheer-timeout-form-group-selector"
                    }, i.createElement(N.Y, null, i.createElement(N.L, {
                        cols: {
                            default: 12,
                            sm: 3
                        }
                    }, i.createElement(N._8, {
                        display: N.R.Flex
                    }, i.createElement(N._8, {
                        flexGrow: 1,
                        margin: {
                            right: 1
                        }
                    }, i.createElement(N._4, {
                        type: N._5.Number,
                        value: String(n),
                        disabled: !d,
                        onChange: this.onRecentCheerTimeoutInputChange,
                        min: fe,
                        max: Ee,
                        "data-test-selector": "recent-cheer-timeout-input-selector"
                    })), i.createElement(N._8, {
                        visibility: d ? N._60.Visible : N._60.Hidden
                    }, i.createElement(f.a, {
                        status: s,
                        onClick: this.onRecentCheerTimeoutSaveButtonClick,
                        "data-test-selector": "recent-cheer-timeout-save-button-selector"
                    })))))))), i.createElement(y.a, {
                        label: Object(h.d)("Minimum Bits for a Recent Cheer", "CheerSettingsPage")
                    }, i.createElement(N.Y, null, i.createElement(N.L, {
                        cols: {
                            default: 12,
                            sm: 8
                        }
                    }, i.createElement(N._8, {
                        display: N.R.Flex
                    }, i.createElement(N._8, {
                        flexGrow: 1,
                        margin: {
                            right: 1
                        }
                    }, i.createElement(N._4, {
                        type: N._5.Number,
                        value: String(a),
                        onChange: this.onRecentCheerMinimumBitsInputChange,
                        min: 1,
                        max: ve,
                        "data-test-selector": "recent-cheer-minimum-bits-input-selector"
                    })), i.createElement(f.a, {
                        status: r,
                        onClick: this.onRecentCheerMinimumBitsSaveButtonClick,
                        "data-test-selector": "recent-cheer-minimum-bits-save-button-selector"
                    })))), i.createElement(v.a, {
                        text: Object(h.d)("Sets the minimum number of Bits required for a Recent Cheer to be Pinned. Viewers will receive notifications indicating your Pinned Recent Cheer minimum.", "PinnedCheerSettings")
                    })))
                }, t
            }(i.Component),
            Se = Object(g.d)(Object(m.a)(be, {
                options: function(e) {
                    return {
                        variables: {
                            login: e.channelName
                        }
                    }
                }
            }), Object(m.a)(he, {
                name: "setPinnedCheerSettings"
            }))(ye),
            ke = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    var e = this.props.match;
                    return i.createElement(N._8, null, i.createElement(S.a, {
                        title: Object(h.d)("Pinned and Top Cheers Settings", "CheerSettingsPage"),
                        description: Object(h.d)("Custom settings for Pinned Cheering", "CheerSettingsPage"),
                        linkToParent: "/" + e.params.channelName + "/dashboard/settings/revenue"
                    }), i.createElement(Se, {
                        channelName: e.params.channelName
                    }))
                }, t
            }(i.Component),
            _e = n("qSfI"),
            Ne = n("mQVd"),
            Te = (n("hXLX"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        cheermotesToggleError: !1
                    }, t.onItemToggle = function(e) {
                        return r.__awaiter(t, void 0, void 0, function() {
                            var t, n, a, i, o, s, l, c;
                            return r.__generator(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        if (t = e.currentTarget.checked, n = this.props, a = n.setCheermotesEnable, i = n.data, o = n.channelName, !(i.user && i.user.id && i.user.settings && i.user.settings.cheer)) return [2];
                                        s = {
                                            userID: i.user.id,
                                            customPrefix: {
                                                isEnabled: t
                                            }
                                        }, l = Object(b.a)(s), r.label = 1;
                                    case 1:
                                        return r.trys.push([1, 3, , 4]), [4, a(l)];
                                    case 2:
                                        return c = r.sent(), Object(b.e)(Ne, {
                                            login: o
                                        }, function(e) {
                                            return c.data.updateCheerPartnerSettings && e.user && e.user.settings && e.user.settings.cheer && (e.user.settings.cheer.customPrefix.isEnabled = c.data.updateCheerPartnerSettings.cheer.customPrefix.isEnabled), e
                                        }), this.setState({
                                            cheermotesToggleError: !1
                                        }), [3, 4];
                                    case 3:
                                        return r.sent(), this.setState({
                                            cheermotesToggleError: !0
                                        }), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, t
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    var e = this.props.data,
                        t = this.state.cheermotesToggleError,
                        n = !1,
                        a = i.createElement(N._14, {
                            width: 100,
                            height: 18
                        });
                    !e.loading && !e.error && e.user && e.user.settings && e.user.settings.cheer && (n = e.user.settings.cheer.customPrefix.isEnabled, a = i.createElement(N.Q, {
                        bold: !0
                    }, e.user.settings.cheer.customPrefix.prefix));
                    var r = this.tiers.map(function(e, t) {
                            var n = e.images[0];
                            return i.createElement(N._35, {
                                key: n ? n.id : t,
                                background: N.n.Alt2,
                                border: !0,
                                className: "cheermote-enable-form__cheermote-preview",
                                margin: {
                                    right: 4 === t ? 0 : 1
                                },
                                display: N.R.InlineFlex
                            }, i.createElement("img", {
                                src: n ? n.url : "",
                                alt: "Cheermote"
                            }))
                        }),
                        o = this.tiers.filter(function(e) {
                            return e.images && e.images[0]
                        }).length;
                    return i.createElement(y.a, {
                        label: Object(h.d)("Enable Cheermotes", "CheermtoesEnableForm")
                    }, i.createElement(N._51, {
                        checked: n,
                        onChange: this.onItemToggle,
                        error: t
                    }), i.createElement(N._8, {
                        margin: {
                            top: .5
                        }
                    }, i.createElement(N.Q, {
                        color: N.K.Alt2
                    }, Object(h.d)("Upload images for all tiers to enable your Cheermote.", "CheermotesEnableForm"))), i.createElement(N._8, {
                        padding: {
                            y: 2
                        }
                    }, i.createElement(N.Q, {
                        color: N.K.Alt2
                    }, Object(h.d)("Cheermote Code", "CheermotesEnableForm")), a), i.createElement(N._8, null, i.createElement(N.Q, {
                        type: N._49.Span,
                        color: N.K.Alt2
                    }, Object(h.d)("Tiers", "CheermotesEnableForm")), " ", i.createElement(N.Q, {
                        type: N._49.Span,
                        color: 5 === o ? N.K.Base : N.K.Error
                    }, Object(h.d)("{tierNum}/{totalTiers}", {
                        tierNum: o,
                        totalTiers: 5
                    }, "CheermotesEnableForm")), i.createElement(N.Y, null, i.createElement(N.L, {
                        cols: 4
                    }, i.createElement(N._8, {
                        margin: {
                            top: .5
                        },
                        display: N.R.Flex,
                        justifyContent: N._7.Between
                    }, r)))))
                }, Object.defineProperty(t.prototype, "tiers", {
                    get: function() {
                        var e, t = this.props.data;
                        return t.user && t.user.settings && t.user.settings.cheer && t.user.settings.cheer.customPrefix.tiers && t.user.settings.cheer.customPrefix.tiers.length > 0 && (e = t.user.settings.cheer.customPrefix.tiers), e || []
                    },
                    enumerable: !0,
                    configurable: !0
                }), t
            }(i.Component)),
            Oe = Object(o.compose)(Object(m.a)(Ne, {
                name: "data",
                options: function(e) {
                    return {
                        variables: {
                            login: e.channelName
                        }
                    }
                }
            }), Object(m.a)(_e, {
                name: "setCheermotesEnable"
            }))(Te),
            Ae = n("HZww"),
            Ce = (n("gABf"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onFilesSubmitted = function(e) {
                        var n = e[0];
                        t.props.onImageSubmit && t.props.onImageSubmit(n, t.props.dpiScale)
                    }, t
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    var e = this.props.children;
                    return i.createElement(N._8, {
                        className: "cheermote-upload-drop-zone",
                        display: N.R.Flex,
                        flexDirection: N.T.Column
                    }, i.createElement(N._35, {
                        className: "cheermote-upload-drop-zone__drop-zone",
                        position: N._15.Relative,
                        padding: 5,
                        background: N.n.Alt
                    }, i.createElement(F.a, {
                        allowedFileTypes: [".png", ".gif"],
                        onFilesSubmitted: this.onFilesSubmitted,
                        error: this.props.error
                    }, i.createElement(N._35, {
                        position: N._15.Absolute,
                        attachTop: !0,
                        attachLeft: !0,
                        fullWidth: !0,
                        fullHeight: !0,
                        display: N.R.Flex,
                        flexDirection: N.T.Column,
                        alignItems: N.c.Center,
                        justifyContent: N._7.Center
                    }, e))), i.createElement(N._8, {
                        textAlign: N._45.Center,
                        padding: {
                            top: 1
                        }
                    }, i.createElement(N.Q, null, Object(h.d)("{dimension} x {dimension}px", {
                        dimension: this.props.dimension
                    }, "CheermoteUploadDropZone"))))
                }, t
            }(i.Component));

        function Pe(e, t) {
            return r.__awaiter(this, void 0, void 0, function() {
                var n;
                return r.__generator(this, function(a) {
                    switch (a.label) {
                        case 0:
                            return [4, R.a.post("/v5/channels/" + e + "/bits/customcheermotes", {
                                body: {
                                    background: t.background,
                                    animation_type: t.animationType,
                                    scale: t.scale,
                                    upload_type: t.uploadType,
                                    tier: t.tier
                                }
                            })];
                        case 1:
                            if ((n = a.sent()).error || !n.body) throw new Error(n.error ? n.error.message : Object(h.d)("no response body", "CheermoteUpload"));
                            return [2, {
                                uploadID: n.body.upload_id,
                                uploadURL: n.body.upload_url,
                                imageURLs: n.body.image_urls
                            }]
                    }
                })
            })
        }
        var Ie, we, Re, xe, De = ((Ie = {})[1] = 28, Ie[1.5] = 42, Ie[2] = 56, Ie[3] = 84, Ie[4] = 112, Ie),
            Fe = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onImageSubmitted = function(e, n) {
                        return r.__awaiter(t, void 0, void 0, function() {
                            var t, a, i;
                            return r.__generator(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        t = {
                                            uploadType: "individual",
                                            background: this.props.background,
                                            animationType: this.props.animationType,
                                            scale: "" + n,
                                            tier: "" + this.props.tier
                                        }, r.label = 1;
                                    case 1:
                                        return r.trys.push([1, 3, , 4]), [4, Pe(this.props.channelID, t)];
                                    case 2:
                                        return a = r.sent(), this.props.onImageSubmitted(this.props.tier, e, a, De[n]), [3, 4];
                                    case 3:
                                        return i = r.sent(), this.props.onImageSubmissionError("advanced", i), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, t
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    var e = this,
                        t = this.props.errorDimension,
                        n = this.props.images.map(function(n) {
                            var a = De[n.dpiScale];
                            return i.createElement(N._8, {
                                key: n.dpiScale,
                                padding: {
                                    bottom: 1
                                }
                            }, i.createElement(Ce, {
                                onImageSubmit: e.onImageSubmitted,
                                dimension: a,
                                dpiScale: n.dpiScale,
                                error: !!e.props.uploadError && !!t && a === t
                            }, n ? i.createElement("img", {
                                src: n.url,
                                height: a,
                                width: a
                            }) : e.props.uploadError ? i.createElement(N.Q, null, "this.props.uploadError") : i.createElement(N._24, {
                                asset: N._25.Plus,
                                height: 32,
                                width: 32
                            })))
                        });
                    return i.createElement(N._8, {
                        justifyContent: N._7.Between,
                        display: N.R.Flex,
                        flexDirection: N.T.Row,
                        flexWrap: N.U.Wrap
                    }, n)
                }, t
            }(i.PureComponent),
            je = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    return i.createElement(N._35, {
                        background: N.n.Alt,
                        display: N.R.Flex,
                        alignItems: N.c.Center,
                        padding: 1
                    }, i.createElement("img", {
                        src: this.props.imageSrc,
                        height: 28,
                        width: 28
                    }), i.createElement(N._8, {
                        padding: {
                            left: 1
                        }
                    }, i.createElement(N.Q, null, Object(h.d)("This is a preview of a chat message with your Cheermote!", "CheermotePreviewBar"))))
                }, t
            }(i.PureComponent),
            Le = (n("R9L7"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onImageSubmitted = function(e) {
                        return r.__awaiter(t, void 0, void 0, function() {
                            var t, n, a;
                            return r.__generator(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        t = {
                                            uploadType: "smart",
                                            background: "light",
                                            animationType: "animated",
                                            scale: "4",
                                            tier: "" + this.props.tier
                                        }, r.label = 1;
                                    case 1:
                                        return r.trys.push([1, 3, , 4]), [4, Pe(this.props.channelID, t)];
                                    case 2:
                                        return n = r.sent(), this.props.onImageSubmitted(this.props.tier, e, n, 112), [3, 4];
                                    case 3:
                                        return a = r.sent(), this.props.onImageSubmissionError("simple", a), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, t
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    return i.createElement(Ce, {
                        onImageSubmit: this.onImageSubmitted,
                        dimension: 112,
                        error: !!this.props.uploadError
                    }, this.props.image ? i.createElement("img", {
                        src: this.props.image,
                        height: 112,
                        width: 112
                    }) : this.props.uploadError ? i.createElement(N.Q, null, "this.props.uploadError") : i.createElement(N._24, {
                        asset: N._25.Plus,
                        height: 32,
                        width: 32
                    }))
                }, t
            }(i.PureComponent)),
            Me = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    return i.createElement(N._28, null, i.createElement(N._29, {
                        name: this.props.name,
                        value: this.props.left,
                        checked: this.props.selected === this.props.left,
                        label: this.props.leftTitle,
                        onChange: this.props.onToggle,
                        defaultChecked: !0
                    }), i.createElement(N._29, {
                        name: this.props.name,
                        value: this.props.right,
                        checked: this.props.selected === this.props.right,
                        onChange: this.props.onToggle,
                        label: this.props.rightTitle
                    }))
                }, t
            }(i.PureComponent);
        n("aEaB");
        ! function(e) {
            e.Simple = "simple", e.Advanced = "advanced"
        }(we || (we = {})),
        function(e) {
            e.Light = "light", e.Dark = "dark"
        }(Re || (Re = {})),
        function(e) {
            e.Animated = "animated", e.Static = "static"
        }(xe || (xe = {}));
        var Ue = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.state = {
                    uploadType: we.Simple,
                    background: Re.Light,
                    animation: xe.Animated,
                    uploading: !1
                }, t.onUploadTypeChange = function(e) {
                    var n = e.currentTarget.value,
                        a = xe.Animated;
                    t.setState({
                        uploadType: n,
                        animation: a
                    })
                }, t.onBackgroundChange = function(e) {
                    var n = e.currentTarget.value;
                    t.setState({
                        background: n
                    })
                }, t.onAnimationChange = function(e) {
                    var n = e.currentTarget.value;
                    t.setState({
                        animation: n
                    })
                }, t.onSimpleImageSubmitted = function(e, n, a, r) {
                    t.uploadImageProgress(e, n, a, we.Simple, r, function(e, n) {
                        t.props.onSimpleImageSubmitted(e, n)
                    })
                }, t.onAdvancedImageUpload = function(e, n, a, r) {
                    t.uploadImageProgress(e, n, a, we.Advanced, r, function(e, n) {
                        t.props.onAdvancedImageSubmitted(e, n[0])
                    })
                }, t.uploadImageProgress = function(e, n, a, i, o, s) {
                    t.unsubscribe = h.k.subscribe({
                        topic: Object(Ae.s)(a.uploadID),
                        success: function() {
                            return r.__awaiter(t, void 0, void 0, function() {
                                var e;
                                return r.__generator(this, function(t) {
                                    switch (t.label) {
                                        case 0:
                                            return t.trys.push([0, 2, , 3]), this.setState({
                                                uploading: !0,
                                                simpleLoadingError: void 0,
                                                advancedLoadingError: void 0,
                                                errorDimension: void 0
                                            }), [4, function(e, t) {
                                                return r.__awaiter(this, void 0, void 0, function() {
                                                    var n;
                                                    return r.__generator(this, function(a) {
                                                        switch (a.label) {
                                                            case 0:
                                                                return [4, fetch(e, {
                                                                    method: "PUT",
                                                                    body: new Blob([t])
                                                                })];
                                                            case 1:
                                                                if ((n = a.sent()).status >= 500) throw new Error(JSON.stringify(n.json));
                                                                return [2]
                                                        }
                                                    })
                                                })
                                            }(a.uploadURL, n)];
                                        case 1:
                                            return t.sent(), [3, 3];
                                        case 2:
                                            return e = t.sent(), this.onCreateUploadRequestError(i, e), [3, 3];
                                        case 3:
                                            return [2]
                                    }
                                })
                            })
                        },
                        onMessage: function(n) {
                            return r.__awaiter(t, void 0, void 0, function() {
                                return r.__generator(this, function(t) {
                                    switch (n.status) {
                                        case j.a.COMPLETE:
                                            s(e, a.imageURLs), this.setState({
                                                uploading: !1
                                            }), this.unsubscribe && this.unsubscribe();
                                            break;
                                        case j.a.POSTPROCESS_COMPLETE:
                                            break;
                                        default:
                                            this.handleImageUploadError(n.status, i, o), this.setState({
                                                uploading: !1
                                            }), this.unsubscribe && this.unsubscribe()
                                    }
                                    return [2]
                                })
                            })
                        }
                    })
                }, t.handleImageUploadError = function(e, n, a) {
                    var r;
                    switch (e) {
                        case j.a.FILE_SIZE_VALIDATION_FAILED:
                            r = Object(h.d)("Please make sure you file is under 500kb", "CheermoteUploadArea");
                            break;
                        case j.a.IMAGE_FORMAT_VALIDATION_FAILED:
                            r = Object(h.d)("Please make sure your image is the correct format for uploading", "CheermoteUploadArea");
                            break;
                        case j.a.HEIGHT_VALIDATION_FAILED:
                        case j.a.WIDTH_VALIDATION_FAILED:
                            r = Object(h.d)("Image must be {d} x {d}px", {
                                d: a
                            }, "CheermoteUploadArea");
                            break;
                        case j.a.ASPECT_RATIO_VALIDATION_FAILED:
                            r = Object(h.d)("Please ensure your image has the correct aspect ratio for the dimension you are uploading", "CheermoteUploadArea");
                            break;
                        case j.a.FEATURE_SERVICE_FAILED:
                            r = Object(h.d)("Failed to save new images. Please try again.", "CheermoteUploadArea");
                            break;
                        default:
                            r = Object(h.d)("Something went wrong. Please try again", "CheermoteUploadArea")
                    }
                    t.setState({
                        simpleLoadingError: n === we.Simple ? r : void 0,
                        advancedLoadingError: n === we.Advanced ? r : void 0,
                        errorDimension: a
                    })
                }, t.onCreateUploadRequestError = function(e, n) {
                    var a = Object(h.d)("An error occurred while creating upload request: {errorMsg}", {
                        errorMsg: n.message
                    }, "CheermoteUploadArea");
                    t.setState({
                        simpleLoadingError: e === we.Simple ? a : void 0,
                        advancedLoadingError: e === we.Advanced ? a : void 0
                    })
                }, t
            }
            return r.__extends(t, e), t.prototype.componentWillUnmount = function() {
                void 0 !== this.unsubscribe && this.unsubscribe()
            }, t.prototype.render = function() {
                var e = this;
                if (!this.props.uploadTier) return i.createElement(N._14, null);
                var t = [],
                    n = (t = this.props.uploadTier.images.filter(function(t) {
                        return (t.isAnimated && e.state.animation === xe.Animated || !t.isAnimated && e.state.animation === xe.Static) && t.theme.toLowerCase() === e.state.background
                    }).slice().sort(function(e, t) {
                        return t.dpiScale - e.dpiScale
                    })).find(function(e) {
                        return 4 === e.dpiScale
                    });
                return i.createElement(N._8, {
                    className: "cheermote-upload-area"
                }, i.createElement(N._8, {
                    display: N.R.Flex,
                    flexDirection: N.T.Column
                }, i.createElement(N._8, {
                    display: N.R.Flex
                }, i.createElement(Me, {
                    name: "cheermote-upload-wizard-type",
                    selected: this.state.uploadType,
                    left: we.Simple,
                    leftTitle: Object(h.d)("Simple", "CheermoteUploadArea"),
                    right: we.Advanced,
                    rightTitle: Object(h.d)("Advanced", "CheermoteUploadArea"),
                    onToggle: this.onUploadTypeChange
                }), this.state.uploadType === we.Advanced && i.createElement(N._8, {
                    padding: {
                        x: 2
                    }
                }, i.createElement(Me, {
                    name: "cheermote-background",
                    selected: this.state.background,
                    left: Re.Light,
                    leftTitle: Object(h.d)("Light", "CheermoteUploadArea"),
                    right: Re.Dark,
                    rightTitle: Object(h.d)("Dark", "CheermoteUploadArea"),
                    onToggle: this.onBackgroundChange
                })), this.state.uploadType === we.Advanced && i.createElement(Me, {
                    name: "cheermote-animation",
                    selected: this.state.animation,
                    left: xe.Animated,
                    leftTitle: Object(h.d)("Animated", "CheermoteUploadArea"),
                    right: xe.Static,
                    rightTitle: Object(h.d)("Static", "CheermoteUploadArea"),
                    onToggle: this.onAnimationChange
                })), i.createElement(N._8, {
                    padding: {
                        top: 2
                    }
                }, this.state.uploadType === we.Simple && i.createElement(Le, {
                    channelID: this.props.channelID,
                    tier: this.props.uploadTier.bits,
                    image: n && n.url,
                    onImageSubmitted: this.onSimpleImageSubmitted,
                    onImageSubmissionError: this.onCreateUploadRequestError,
                    uploadError: this.state.simpleLoadingError
                }), this.state.uploadType === we.Advanced && i.createElement(Fe, {
                    channelID: this.props.channelID,
                    images: t,
                    tier: this.props.uploadTier.bits,
                    background: this.state.background,
                    animationType: this.state.animation,
                    onImageSubmitted: this.onAdvancedImageUpload,
                    onImageSubmissionError: this.onCreateUploadRequestError,
                    uploadError: this.state.advancedLoadingError,
                    errorDimension: this.state.errorDimension
                })), this.state.uploadType === we.Simple && this.state.simpleLoadingError && n && n.url && i.createElement(N._35, {
                    display: N.R.Flex,
                    alignItems: N.c.Center,
                    background: N.n.Alt,
                    padding: 1,
                    margin: {
                        top: 1
                    }
                }, i.createElement(N.Q, {
                    color: N.K.Error
                }, this.state.simpleLoadingError)), this.state.uploadType === we.Advanced && this.state.advancedLoadingError && t.length && i.createElement(N._35, {
                    display: N.R.Flex,
                    alignItems: N.c.Center,
                    background: N.n.Alt,
                    padding: 1,
                    margin: {
                        top: 1
                    }
                }, i.createElement(N.Q, {
                    color: N.K.Error
                }, this.state.advancedLoadingError)), n && i.createElement(N._8, {
                    padding: {
                        top: 2
                    }
                }, i.createElement(je, {
                    imageSrc: n.url
                }))), this.state.uploading && i.createElement(N._35, {
                    className: "cheermote-upload-area__uploading",
                    display: N.R.Flex,
                    flexDirection: N.T.Column,
                    alignItems: N.c.Center,
                    justifyContent: N._7.Center,
                    position: N._15.Absolute,
                    attachTop: !0,
                    attachLeft: !0,
                    fullWidth: !0,
                    fullHeight: !0
                }, i.createElement(N._10, null), i.createElement(N._8, {
                    padding: {
                        top: 2
                    }
                }, i.createElement(N.Q, null, Object(h.d)("Uploading...", "CheermoteUploadArea")))))
            }, t
        }(i.PureComponent);

        function Be(e, t, n) {
            var a = t.split("/"),
                r = a[6],
                i = a[7],
                o = a[8],
                s = a[9],
                l = n ? n.toUpperCase() : i.toUpperCase(),
                c = "animated" === o;
            return {
                id: e + ";" + r + ";" + l + ";" + c + ";" + s,
                dpiScale: parseInt(s, 10),
                isAnimated: c,
                theme: l,
                url: t
            }
        }
        var Ve = n("ihgL"),
            We = (n("I/Yr"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        activeTab: 1
                    }, t.onTabSelect = function(e) {
                        if (e.currentTarget.parentElement) {
                            var n = e.currentTarget.parentElement.getAttribute("data-tab-target") || "1";
                            t.setState({
                                activeTab: parseInt(n, 10)
                            })
                        }
                    }, t.onSimpleImageSubmitted = function(e, n) {
                        Object(b.e)(Ve, {
                            login: t.props.channelName
                        }, function(t) {
                            if (t && t.user) {
                                var a = t.user && t.user.settings.cheer.customPrefix;
                                if (a) {
                                    var r = a.prefix,
                                        i = a.tiers.findIndex(function(t) {
                                            return t.bits === e
                                        });
                                    i >= 0 && (t.user.settings.cheer.customPrefix.tiers[i].images = function(e, t) {
                                        return t.map(function(t) {
                                            return Be(e, t)
                                        }).concat(t.map(function(t) {
                                            return Be(e, t, "dark")
                                        }))
                                    }(r, n))
                                }
                                return t
                            }
                        })
                    }, t.onAdvancedImageSubmitted = function(e, n) {
                        Object(b.e)(Ve, {
                            login: t.props.channelName
                        }, function(t) {
                            if (t && t.user) {
                                var a = t.user && t.user.settings.cheer.customPrefix;
                                if (a) {
                                    var r = a.prefix,
                                        i = a.tiers.findIndex(function(t) {
                                            return t.bits === e
                                        });
                                    if (i >= 0) {
                                        var o = Be(r, n),
                                            s = t.user.settings.cheer.customPrefix.tiers[i].images.findIndex(function(e) {
                                                return e.id === o.id
                                            });
                                        s >= 0 && (t.user.settings.cheer.customPrefix.tiers[i].images[s] = o)
                                    }
                                }
                                return t
                            }
                        })
                    }, t
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    var e = this;
                    if (!this.props.data || this.props.data.loading) return i.createElement(N._8, {
                        className: "cheermote-upload-form__loading",
                        fullWidth: !0
                    }, i.createElement(N._10, {
                        fillContent: !0
                    }));
                    if (this.props.data && this.props.data.error || !this.props.data.user) return i.createElement(N._8, {
                        className: "cheermote-upload-form__error",
                        fullWidth: !0,
                        justifyContent: N._7.Center,
                        textAlign: N._45.Center,
                        alignItems: N.c.Center
                    }, i.createElement(N.Q, null, Object(h.d)("An unexpected error occurred while loading the upload wizard", "CheermotesUploadForm")));
                    var t = this.tiers.map(function(t) {
                            return i.createElement(N._36, {
                                key: t.id,
                                active: e.state.activeTab === t.bits,
                                onClick: e.onTabSelect,
                                "data-tab-target": t.bits
                            }, t.bits)
                        }),
                        n = this.tiers.find(function(t) {
                            return t.bits === e.state.activeTab
                        });
                    return i.createElement(y.a, {
                        label: Object(h.d)("Upload Cheermote Images", "CheermotesUploadForm")
                    }, i.createElement(N._8, {
                        padding: {
                            bottom: 2
                        }
                    }, i.createElement(N.Q, null, Object(h.d)('Please upload a 112 x 112px GIF image with a transparent background. Your image will be automatically scaled to smaller sizes. To fine-ture smaller sizes and light/dark mode, turn on "Advanced" option below. (The maximum file size is 500kb)', "CheermotesUploadForm"))), i.createElement(N._37, null, t), i.createElement(N._8, {
                        padding: {
                            top: 2
                        }
                    }, i.createElement(Ue, {
                        channelID: this.props.data.user.id,
                        uploadTier: n,
                        onSimpleImageSubmitted: this.onSimpleImageSubmitted,
                        onAdvancedImageSubmitted: this.onAdvancedImageSubmitted
                    })))
                }, Object.defineProperty(t.prototype, "tiers", {
                    get: function() {
                        var e = this.props.data,
                            t = [];
                        return e.user && e.user.settings.cheer.customPrefix.tiers && e.user.settings.cheer.customPrefix.tiers.length > 0 && (t = e.user.settings.cheer.customPrefix.tiers), t
                    },
                    enumerable: !0,
                    configurable: !0
                }), t
            }(i.PureComponent)),
            Qe = Object(o.compose)(Object(m.a)(Ve, {
                options: function(e) {
                    return {
                        variables: {
                            login: e.channelName
                        }
                    }
                }
            }))(We),
            ze = function(e) {
                var t = e.match;
                return i.createElement(N._8, null, i.createElement(S.a, {
                    title: Object(h.d)("Custom Cheermote", "CheermotesSettingsPage"),
                    description: Object(h.d)("Custom Cheermote that viewers can use when Cheering in your channel", "CheermotesSettingsPage"),
                    linkToParent: "/" + t.params.channelName + "/dashboard/settings/revenue"
                }), i.createElement(_.a, null, i.createElement(Oe, {
                    channelName: t.params.channelName
                }), i.createElement(Qe, {
                    channelName: t.params.channelName
                })))
            },
            Ge = n("j7/Y"),
            Ye = n("w9tK"),
            qe = n("vH/s"),
            He = n("RH2O"),
            Xe = n("V5M+"),
            Ke = n("7iMl"),
            $e = (n("pBCJ"), "GAME_COMMERCE"),
            Je = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        amendmentAccepted: !1
                    }, t.onAmendmentClick = function() {
                        return t.props.showAmendmentModal({
                            amendmentAccepted: t.state.amendmentAccepted
                        }), !1
                    }, t
                }
                return r.__extends(t, e), t.prototype.componentWillReceiveProps = function(e) {
                    var t = e.data && e.data.user && e.data.user.twitch && e.data.user.twitch.commerceAmendment[0].isSigned || !1;
                    t !== this.state.amendmentAccepted && this.setState({
                        amendmentAccepted: t
                    })
                }, t.prototype.render = function() {
                    return !this.props.data || this.props.data.loading ? null : i.createElement(y.a, {
                        orientation: N.X.Horizontal,
                        label: Object(h.d)("Opt in to earn revenue", "CommerceAmendment")
                    }, i.createElement("div", {
                        onClick: this.onAmendmentClick,
                        "data-test-selector": "commerce-amendment-checkbox-wrapper",
                        className: "commerce-amendment__amendment"
                    }, i.createElement(N.J, {
                        "data-test-selector": "commerce-amendment-checkbox",
                        checked: this.state.amendmentAccepted,
                        disabled: !0,
                        id: "commerce-amendment",
                        label: Object(h.d)("Opt in to earn revenue from game sales on Twitch", "CommerceAmendment")
                    })), i.createElement(N.Q, null, Object(h.d)("Please read and agree to the following Commerce Addendum to become eligible for this program.", "CommerceAmendment")))
                }, t = r.__decorate([Object(m.a)(Ke, {
                    options: function(e) {
                        return {
                            variables: {
                                login: e.channelName,
                                amendmentType: $e
                            }
                        }
                    }
                })], t)
            }(i.PureComponent),
            Ze = n("2pd5"),
            et = "amendment-modal-accept-button",
            tt = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        hasUserScrolled: !1
                    }, t.onUserScroll = function() {
                        t.setState({
                            hasUserScrolled: !0
                        })
                    }, t.renderAcceptButton = function(e) {
                        return e ? null : i.createElement(N._8, {
                            margin: {
                                left: .5,
                                right: .5
                            }
                        }, i.createElement(N.v, {
                            "data-test-selector": et,
                            type: N.B.Text,
                            onClick: t.onAccept,
                            disabled: !t.state.hasUserScrolled
                        }, Object(h.d)("Accept", "CommerceAmendmentModal")))
                    }, t.onClose = function() {
                        t.props.onClose()
                    }, t.onAccept = function() {
                        return r.__awaiter(t, void 0, void 0, function() {
                            return r.__generator(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        if (!0 === this.props.amendmentAccepted || !this.props.setAmendmentAcceptance) return [3, 4];
                                        e.label = 1;
                                    case 1:
                                        return e.trys.push([1, , 3, 4]), [4, this.props.setAmendmentAcceptance(Object(b.a)($e))];
                                    case 2:
                                        return e.sent(), [3, 4];
                                    case 3:
                                        return this.props.onClose(), [7];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, t
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    return i.createElement(N._8, {
                        padding: 3
                    }, i.createElement(N._35, {
                        padding: {
                            bottom: 3
                        },
                        borderBottom: !0,
                        textAlign: N._45.Center
                    }, i.createElement(N.Q, {
                        type: N._49.H4
                    }, Object(h.d)("Addendum to Content Partner Agreement – Commerce Addendum", "CommerceAmendmentModal"))), i.createElement(N._8, {
                        padding: {
                            top: 2,
                            bottom: 2
                        },
                        textAlign: N._45.Center
                    }, i.createElement(N.Q, {
                        fontSize: N.V.Size5
                    }, Object(h.d)('Please read and agree to the following addendum ("Addendum") to your Content License and Base Agreement (or Content License Agreement, as applicable) (the "Agreement") with Twitch in order to be eligible to earn revenue for certain purchases by a Twitch user that is viewing your Twitch channel.', "CommerceAmendmentModal"))), i.createElement(N._35, {
                        borderTop: !0,
                        borderRight: !0,
                        borderBottom: !0,
                        borderLeft: !0,
                        padding: 2
                    }, i.createElement("div", {
                        onScroll: this.onUserScroll,
                        className: "amendment-modal__amendment-text",
                        "data-test-selector": "amendment-modal-text-container"
                    }, i.createElement(N.Q, null, 'Twitch, in its sole discretion, may make specially-formatted links appear on your Twitch channel page (a "', i.createElement(N.Q, {
                        type: N._49.Span,
                        bold: !0
                    }, "Special Link"), '"), which would direct Twitch users to the purchase of a software application, video game, in-game item or other digital product (a "', i.createElement(N.Q, {
                        type: N._49.Span,
                        bold: !0
                    }, "Product"), '") from Twitch. For every such purchase of a Product that is a Qualifying Purchase (as defined below), you will receive a fee (a "', i.createElement(N.Q, {
                        type: N._49.Span,
                        bold: !0
                    }, "Product Purchase Fee"), '") that will be equal to five percent (5%) of (a) the purchase price of such Product, as such price was listed by Twitch at the time of the Qualifying Purchase and in the currency in which the Qualifying Purchase was made, less (b) any special discounts or promotions, taxes, service charges, rebates, payment processing fees (e.g. credit card processing fees) and any other related transaction and processing expenses.'), i.createElement(N.Q, null, 'A "', i.createElement("strong", null, "Qualifying Purchase"), '" of a Product occurs when: (a) a user of Twitch clicks through a Special Link on your Twitch channel page; (b) such user purchases a Product(s); and (c) Twitch receives a fully settled payment for the purchase by such user.'), i.createElement(N.Q, null, "If we pay you a Product Purchase Fee and later issue a refund or credit to the Twitch user for such Qualifying Purchase (or receive a chargeback related to the Qualifying Purchase), we may offset the amount of the Product Purchase Fee we previously paid you for such Qualifying Purchase against future Product Purchase Fees or other amounts that would otherwise be payable to you under the Agreement or this Addendum, or require you to remit that amount to us."), i.createElement(N.Q, null, "This Addendum is governed by and subject to the Agreement. Capitalized terms used but not defined in this Addendum will have the meanings defined in the Agreement. Except as amended by this Addendum, all other terms and conditions of the Agreement remain in full force and effect."))), i.createElement(N._8, {
                        padding: {
                            top: 2,
                            bottom: 2
                        }
                    }, i.createElement(N.Q, {
                        fontSize: N.V.Size4
                    }, Object(h.d)("Summary", "CommerceAmendmentModal")), i.createElement(N.Q, null, Object(h.d)("By accepting below, you may earn revenue for certain purchases by your viewers as described above.", "CommerceAmendmentModal"))), i.createElement(N._35, {
                        borderTop: !0,
                        display: N.R.Flex,
                        flexDirection: N.T.Row,
                        alignItems: N.c.Center,
                        justifyContent: N._7.Center,
                        padding: {
                            top: 2,
                            bottom: 1
                        }
                    }, i.createElement(N._8, {
                        margin: {
                            left: .5,
                            right: .5
                        }
                    }, i.createElement(N.v, {
                        "data-test-selector": "amendment-modal-cancel-button",
                        type: N.B.Text,
                        onClick: this.onClose
                    }, Object(h.d)("Cancel", "CommerceAmendmentModal"))), this.renderAcceptButton(this.props.amendmentAccepted)))
                }, t
            }(i.PureComponent),
            nt = Object(m.a)(Ze, {
                name: "setAmendmentAcceptance"
            })(tt),
            at = (n("Fk2o"), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    return i.createElement(N._35, {
                        className: "amendment-modal__container",
                        background: N.n.Base
                    }, i.createElement(nt, {
                        "data-test-selector": "amendment-modal-selector",
                        onClose: this.props.closeModal,
                        amendmentAccepted: this.props.amendmentAccepted
                    }))
                }, t
            }(i.Component));
        var rt = Object(He.b)(null, function(e) {
            return Object(g.b)({
                closeModal: Xe.c
            }, e)
        })(at);
        var it, ot, st, lt, ct, dt, ut, mt, pt = Object(He.b)(null, function(e) {
                return Object(g.b)({
                    showAmendmentModal: function(e) {
                        var t = r.__rest(e, []);
                        return Object(Xe.d)(rt, t)
                    }
                }, e)
            })(Je),
            gt = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    var e = this.props.match.params.channelName;
                    return i.createElement(i.Fragment, null, i.createElement(S.a, {
                        title: Object(h.d)("Game sales via Twitch", "CommerceAmendment"),
                        linkToParent: "/" + this.props.match.params.channelName + "/dashboard/settings/revenue"
                    }), i.createElement(_.a, null, i.createElement(pt, {
                        channelName: e
                    })))
                }, t
            }(i.PureComponent),
            ht = Object(g.d)(Object(p.d)("CommerceAmendmentPage", {
                autoReportInteractive: !0,
                destination: Ye.a.DashboardSettingsRevenueGameCommerce
            }), Object(Ge.a)({
                location: qe.PageviewLocation.DashboardSettingsRevenueGameCommerce
            }))(gt),
            bt = n("j0yR"),
            ft = n("K+dm"),
            Et = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    var e = this.props.match.params.channelName;
                    return i.createElement(i.Fragment, null, i.createElement(S.a, {
                        title: Object(h.d)("Gear, games, and more via Amazon Associates", "CommerceAmendmentV2")
                    }), i.createElement(_.a, null, i.createElement(ft.a, {
                        channelName: e
                    }), i.createElement(bt.a, {
                        channelName: e
                    })))
                }, t
            }(i.Component),
            vt = Object(g.d)(Object(p.d)("CommerceAmendmentV2Page", {
                autoReportInteractive: !0,
                destination: Ye.a.DashboardSettingsRevenueGameCommerceV2
            }), Object(Ge.a)({
                location: qe.PageviewLocation.DashboardSettingsRevenueGameCommerceV2
            }))(Et),
            yt = n("ew1p"),
            St = n("SR0I"),
            kt = n("AQc/"),
            _t = n("oR9V"),
            Nt = n("xZ9c"),
            Tt = n("XnHd"),
            Ot = n("rr+v"),
            At = 1,
            Ct = 1e4,
            Pt = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    n.state = {
                        minBitsToCheerSaveStatus: _t.b.NoChanges,
                        minBitsPerEmoteSaveStatus: _t.b.NoChanges,
                        minBitsToCheerError: !1,
                        minBitsPerEmoteError: !1
                    }, n.onMinBitsToCheerInputChange = function(e) {
                        var t = n.state,
                            a = t.minBitsPerEmote,
                            r = t.minBitsPerEmoteSaveStatus,
                            i = Math.min(parseInt(e.currentTarget.value, 10), Ct),
                            o = _t.b.DirtyChanges,
                            s = r,
                            l = !1;
                        (!i || !a || i < At || a && i < a) && (o = _t.b.NoChanges, s = _t.b.NoChanges), a && i < a && (l = !0), n.setState({
                            minBitsToCheer: i,
                            minBitsToCheerError: l,
                            minBitsPerEmoteError: !1,
                            minBitsToCheerSaveStatus: o,
                            minBitsPerEmoteSaveStatus: s
                        })
                    }, n.onMinBitsPerEmoteInputChange = function(e) {
                        var t = n.state,
                            a = t.minBitsToCheer,
                            r = t.minBitsToCheerSaveStatus,
                            i = Math.min(parseInt(e.currentTarget.value, 10), Ct),
                            o = r,
                            s = _t.b.DirtyChanges,
                            l = !1;
                        (!i || !a || i < At || a && a < i) && (o = _t.b.NoChanges, s = _t.b.NoChanges), a && a < i && (l = !0), n.setState({
                            minBitsPerEmote: i,
                            minBitsToCheerError: !1,
                            minBitsPerEmoteError: l,
                            minBitsToCheerSaveStatus: o,
                            minBitsPerEmoteSaveStatus: s
                        })
                    }, n.onMinBitsToCheerSave = function() {
                        return r.__awaiter(n, void 0, void 0, function() {
                            var e, t, n, a, i, o, s;
                            return r.__generator(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        if (e = this.state.minBitsToCheer, t = this.props, n = t.setMinBitsToCheer, a = t.data, i = t.channelName, !e || !a.user || !a.user.id) return [2];
                                        this.setState({
                                            minBitsToCheerSaveStatus: _t.b.Working
                                        }), o = {
                                            userID: a.user.id,
                                            chatMessage: {
                                                minBitsToCheer: e
                                            }
                                        }, r.label = 1;
                                    case 1:
                                        return r.trys.push([1, 3, , 4]), [4, n(Object(b.a)(o))];
                                    case 2:
                                        return s = r.sent(), Object(b.e)(Nt, {
                                            login: i
                                        }, function(e) {
                                            return e.user && e.user.settings && e.user.settings.cheer && s.data.updateCheerPartnerSettings && (e.user.settings.cheer.chatMessage.minBitsToCheer = s.data.updateCheerPartnerSettings.cheer.chatMessage.minBitsToCheer), e
                                        }), this.setState({
                                            minBitsToCheerSaveStatus: _t.b.Success
                                        }), [3, 4];
                                    case 3:
                                        return r.sent(), this.setState({
                                            minBitsToCheerSaveStatus: _t.b.Error
                                        }), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, n.onMinBitsPerEmoteSave = function() {
                        return r.__awaiter(n, void 0, void 0, function() {
                            var e, t, n, a, i, o, s;
                            return r.__generator(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        if (e = this.state.minBitsPerEmote, t = this.props, n = t.setMinBitsPerEmote, a = t.data, i = t.channelName, !e || !a.user || !a.user.id) return [2];
                                        this.setState({
                                            minBitsPerEmoteSaveStatus: _t.b.Working
                                        }), o = {
                                            userID: a.user.id,
                                            chatMessage: {
                                                minBitsPerEmote: e
                                            }
                                        }, r.label = 1;
                                    case 1:
                                        return r.trys.push([1, 3, , 4]), [4, n(Object(b.a)(o))];
                                    case 2:
                                        return s = r.sent(), Object(b.e)(Nt, {
                                            login: i
                                        }, function(e) {
                                            return e.user && e.user.settings && e.user.settings.cheer && s.data.updateCheerPartnerSettings && (e.user.settings.cheer.chatMessage.minBitsPerEmote = s.data.updateCheerPartnerSettings.cheer.chatMessage.minBitsPerEmote), e
                                        }), this.setState({
                                            minBitsPerEmoteSaveStatus: _t.b.Success
                                        }), [3, 4];
                                    case 3:
                                        return r.sent(), this.setState({
                                            minBitsPerEmoteSaveStatus: _t.b.Error
                                        }), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    };
                    var a = t.data;
                    if (!a.loading && !a.error && a.user && a.user.settings && a.user.settings.cheer) {
                        var i = a.user.settings.cheer.chatMessage,
                            o = i.minBitsToCheer,
                            s = i.minBitsPerEmote;
                        n.state = r.__assign({}, n.state, {
                            minBitsToCheer: o,
                            minBitsPerEmote: s
                        })
                    }
                    return n
                }
                return r.__extends(t, e), t.prototype.componentWillReceiveProps = function(e) {
                    var t = e.data;
                    if (!t.loading && !t.error && t.user && t.user.settings && t.user.settings.cheer) {
                        var n = t.user.settings.cheer.chatMessage,
                            a = n.minBitsToCheer,
                            r = n.minBitsPerEmote;
                        this.setState({
                            minBitsToCheer: a,
                            minBitsPerEmote: r
                        })
                    }
                }, t.prototype.render = function() {
                    var e = this.state,
                        t = e.minBitsToCheer,
                        n = e.minBitsToCheerError,
                        a = e.minBitsPerEmote,
                        r = e.minBitsPerEmoteError,
                        o = e.minBitsToCheerSaveStatus,
                        s = e.minBitsPerEmoteSaveStatus;
                    return i.createElement(i.Fragment, null, i.createElement(y.a, {
                        label: Object(h.d)("Minimum Bits to Cheer", "CheerSettingsPage"),
                        error: n,
                        errorMessage: Object(h.d)("Minimum Bit to Cheer must be greater than or equal to Minimum Bit Emote", "CheerSettingsPage"),
                        "data-test-selector": "cheer-minimum-bits-form"
                    }, i.createElement(N.Y, null, i.createElement(N.L, {
                        cols: {
                            default: 12,
                            sm: 8
                        }
                    }, i.createElement(N._8, {
                        display: N.R.Flex
                    }, i.createElement(N._8, {
                        flexGrow: 1,
                        margin: {
                            right: 1
                        }
                    }, i.createElement(N._4, {
                        type: N._5.Number,
                        min: At,
                        max: Ct,
                        value: isNaN(t) ? "" : String(t),
                        onChange: this.onMinBitsToCheerInputChange,
                        "data-test-selector": "cheer-minimum-bits-input"
                    })), i.createElement(_t.a, {
                        status: o,
                        onClick: this.onMinBitsToCheerSave,
                        "data-test-selector": "cheer-minimum-bits-save-button"
                    })))), i.createElement(v.a, {
                        text: i.createElement(i.Fragment, null, Object(h.d)("Set the minimum number of Bits needed to send a Cheer message in your channel. We only recommend setting this above 1 to combat spam in chat.", "CheerSettingsPage"), i.createElement(N._35, {
                            display: N.R.Inline,
                            margin: {
                                left: 1
                            }
                        }, i.createElement(N._52, {
                            label: Object(h.d)("For example, if you choose 30, viewers will not be able to send a Cheer message with 29 or fewer Bits. They will need to use at least 30 Bits, either in a single emote, or by combining emotes that add up to at least 30 Bits.", "CheerSettingsPage"),
                            width: 300
                        }, i.createElement(N.o, {
                            icon: N._25.QuestionMark,
                            size: 20
                        }))))
                    })), i.createElement(y.a, {
                        label: Object(h.d)("Minimum Bits Emote", "CheerSettingsPage"),
                        error: r,
                        errorMessage: Object(h.d)("Minimum Bits Emote must be less than Minimum Bit to Cheer", "CheerSettingsPage"),
                        "data-test-selector": "emote-minimum-bits-form"
                    }, i.createElement(N.Y, null, i.createElement(N.L, {
                        cols: {
                            default: 12,
                            sm: 8
                        }
                    }, i.createElement(N._8, {
                        display: N.R.Flex
                    }, i.createElement(N._8, {
                        flexGrow: 1,
                        margin: {
                            right: 1
                        }
                    }, i.createElement(N._4, {
                        type: N._5.Number,
                        min: At,
                        max: Ct,
                        value: isNaN(a) ? "" : String(a),
                        onChange: this.onMinBitsPerEmoteInputChange,
                        "data-test-selector": "emote-minimum-bits-input"
                    })), i.createElement(_t.a, {
                        status: s,
                        onClick: this.onMinBitsPerEmoteSave,
                        "data-test-selector": "emote-minimum-bits-save-button"
                    })))), i.createElement(v.a, {
                        text: i.createElement(i.Fragment, null, Object(h.d)("Set the smallest Bit Emote that can be used in your channel. We only recommend setting this above 1 to combat spam in chat.", "CheerSettingsPage"), i.createElement(N._35, {
                            display: N.R.Inline,
                            margin: {
                                left: 1
                            }
                        }, i.createElement(N._52, {
                            label: Object(h.d)("Bit Emote means the individual Bit Emotes that appear in chat. For example, if you choose 100, viewers cannot send “Cheer150 Cheer90” because Cheer90 is less than 100. “Cheer150 Cheer150” would be acceptable, because both cheers are greater than 100.", "CheerSettingsPage"),
                            width: 300
                        }, i.createElement(N.o, {
                            icon: N._25.QuestionMark,
                            size: 20
                        }))))
                    })))
                }, t
            }(i.Component),
            It = Object(g.d)(Object(m.a)(Nt, {
                options: function(e) {
                    return {
                        variables: {
                            login: e.channelName
                        }
                    }
                }
            }), Object(m.a)(Ot, {
                name: "setMinBitsToCheer"
            }), Object(m.a)(Tt, {
                name: "setMinBitsPerEmote"
            }))(Pt),
            wt = function(e) {
                var t = e.channelName,
                    n = e.isPartner;
                return i.createElement(i.Fragment, null, i.createElement(kt.a, {
                    title: Object(h.d)("Bits & Cheering", "CheerSettingsForm")
                }), i.createElement(_.a, null, i.createElement(It, {
                    channelName: t
                }), i.createElement(St.a, {
                    text: Object(h.d)("Cheer Badges", "CheerSettingsForm"),
                    linkTo: "/" + t + "/dashboard/settings/revenue/cheerbadges"
                }), n && i.createElement(St.a, {
                    text: Object(h.d)("Cheermotes", "CheerSettingsForm"),
                    linkTo: "/" + t + "/dashboard/settings/revenue/cheermotes",
                    "data-test-selector": "cheermotes-settings-link-selector"
                }), i.createElement(St.a, {
                    text: Object(h.d)("Pinned and Top Cheers", "CheerSettingsForm"),
                    linkTo: "/" + t + "/dashboard/settings/revenue/cheer"
                })))
            };

        function Rt(e, t) {
            if (!e || !t) return !1;
            if (t.workflow.currentStep === lt.AGREEMENT_PENDING_UPGRADE) return !1;
            var n = e.find(function(e) {
                return e.category === it.PARTNER && e.isReceivingRevenue
            });
            return !(!(n && n.tags && n.tags.includes(ot.LEGACY) && t) || t.isLegacy) || !(n && n.tags && (n.tags.includes(ot.STANDARD) || n.tags.includes(ot.PREMIUM)) && t && t.category === st.CUSTOM_PARTNER) && !!n
        }! function(e) {
            e.AFFILIATE = "AFFILIATE", e.EXTENSIONS_DEVELOPER = "EXTENSIONS_DEVELOPER", e.PARTNER = "PARTNER"
        }(it || (it = {})),
        function(e) {
            e.CUSTOM = "CUSTOM", e.LEGACY = "LEGACY", e.PREMIUM = "PREMIUM", e.STANDARD = "STANDARD"
        }(ot || (ot = {})),
        function(e) {
            e.AFFILIATE = "AFFILIATE", e.CUSTOM_PARTNER = "CUSTOM_PARTNER", e.EXTENSIONS_DEVELOPER = "EXTENSIONS_DEVELOPER", e.PREMIUM_PARTNER = "PREMIUM_PARTNER", e.STANDARD_PARTNER = "STANDARD_PARTNER", e.UNPAID_PARTNER = "UNPAID_PARTNER"
        }(st || (st = {})),
        function(e) {
            e.AGREEMENT_NOT_STARTED = "AGREEMENT_NOT_STARTED", e.AGREEMENT_PENDING_UPGRADE = "AGREEMENT_PENDING_UPGRADE", e.CANCELED = "CANCELED", e.COMPLETED = "COMPLETED", e.PAYOUT_METHOD_NOT_STARTED = "PAYOUT_METHOD_NOT_STARTED", e.PAYOUT_METHOD_PENDING = "PAYOUT_METHOD_PENDING", e.REGISTRATION_NOT_STARTED = "REGISTRATION_NOT_STARTED", e.REVIEW_PENDING = "REVIEW_PENDING", e.ROYALTY_TAX_INTERVIEW_ACTION_REQUIRED = "ROYALTY_TAX_INTERVIEW_ACTION_REQUIRED", e.ROYALTY_TAX_INTERVIEW_FAILED = "ROYALTY_TAX_INTERVIEW_FAILED", e.ROYALTY_TAX_INTERVIEW_MISMATCH = "ROYALTY_TAX_INTERVIEW_MISMATCH", e.ROYALTY_TAX_INTERVIEW_NOT_STARTED = "ROYALTY_TAX_INTERVIEW_NOT_STARTED", e.ROYALTY_TAX_INTERVIEW_PENDING = "ROYALTY_TAX_INTERVIEW_PENDING", e.SERVICE_TAX_INTERVIEW_ACTION_REQUIRED = "SERVICE_TAX_INTERVIEW_ACTION_REQUIRED", e.SERVICE_TAX_INTERVIEW_FAILED = "SERVICE_TAX_INTERVIEW_FAILED", e.SERVICE_TAX_INTERVIEW_MISMATCH = "SERVICE_TAX_INTERVIEW_MISMATCH", e.SERVICE_TAX_INTERVIEW_NOT_STARTED = "SERVICE_TAX_INTERVIEW_NOT_STARTED", e.SERVICE_TAX_INTERVIEW_PENDING = "SERVICE_TAX_INTERVIEW_PENDING"
        }(lt || (lt = {})),
        function(e) {
            e.AFFILIATE = "AFFILIATE", e.EXTENSIONS_DEVELOPER = "EXTENSIONS_DEVELOPER", e.PARTNER = "PARTNER"
        }(ct || (ct = {})),
        function(e) {
            e.CUSTOM = "CUSTOM", e.LEGACY = "LEGACY", e.PREMIUM = "PREMIUM", e.STANDARD = "STANDARD"
        }(dt || (dt = {})),
        function(e) {
            e.AFFILIATE = "AFFILIATE", e.CUSTOM_PARTNER = "CUSTOM_PARTNER", e.EXTENSIONS_DEVELOPER = "EXTENSIONS_DEVELOPER", e.PREMIUM_PARTNER = "PREMIUM_PARTNER", e.STANDARD_PARTNER = "STANDARD_PARTNER", e.UNPAID_PARTNER = "UNPAID_PARTNER"
        }(ut || (ut = {})),
        function(e) {
            e.AGREEMENT_NOT_STARTED = "AGREEMENT_NOT_STARTED", e.AGREEMENT_PENDING_UPGRADE = "AGREEMENT_PENDING_UPGRADE", e.CANCELED = "CANCELED", e.COMPLETED = "COMPLETED", e.PAYOUT_METHOD_NOT_STARTED = "PAYOUT_METHOD_NOT_STARTED", e.PAYOUT_METHOD_PENDING = "PAYOUT_METHOD_PENDING", e.REGISTRATION_NOT_STARTED = "REGISTRATION_NOT_STARTED", e.REVIEW_PENDING = "REVIEW_PENDING", e.ROYALTY_TAX_INTERVIEW_ACTION_REQUIRED = "ROYALTY_TAX_INTERVIEW_ACTION_REQUIRED", e.ROYALTY_TAX_INTERVIEW_FAILED = "ROYALTY_TAX_INTERVIEW_FAILED", e.ROYALTY_TAX_INTERVIEW_MISMATCH = "ROYALTY_TAX_INTERVIEW_MISMATCH", e.ROYALTY_TAX_INTERVIEW_NOT_STARTED = "ROYALTY_TAX_INTERVIEW_NOT_STARTED", e.ROYALTY_TAX_INTERVIEW_PENDING = "ROYALTY_TAX_INTERVIEW_PENDING", e.SERVICE_TAX_INTERVIEW_ACTION_REQUIRED = "SERVICE_TAX_INTERVIEW_ACTION_REQUIRED", e.SERVICE_TAX_INTERVIEW_FAILED = "SERVICE_TAX_INTERVIEW_FAILED", e.SERVICE_TAX_INTERVIEW_MISMATCH = "SERVICE_TAX_INTERVIEW_MISMATCH", e.SERVICE_TAX_INTERVIEW_NOT_STARTED = "SERVICE_TAX_INTERVIEW_NOT_STARTED", e.SERVICE_TAX_INTERVIEW_PENDING = "SERVICE_TAX_INTERVIEW_PENDING"
        }(mt || (mt = {}));
        var xt, Dt = n("Tbnh");
        ! function(e) {
            e.PAYOUT_ONBOARDING_LINK = "onboarding-section__payout-onboarding-link", e.UPGRADE_AGREEMENT_LINK = "onboarding-section__upgrade-agreement-link", e.PAYOUTS_LINK = "onboarding-section__payouts-link", e.AFFILIATE_AGREEMENT_LINK = "onboarding-section__affiliate-agreement-link", e.PARTNER_AGREEMENT_LINK = "onboarding-section__partner-agreement-link", e.EXTENSIONS_DEVELOPER_AGREEMENT_LINK = "onboarding-section__extensions-developer-agreement-link"
        }(xt || (xt = {}));
        var Ft = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    var e = this.props.data,
                        t = e.loading,
                        n = e.error,
                        a = e.currentUser;
                    return t || n || !a || this.props.channelName !== a.login ? null : (this.props.latencyTracking.reportInteractive(), i.createElement(i.Fragment, null, i.createElement(kt.a, {
                        title: Object(h.d)("Onboarding", "OnboardingSection")
                    }), i.createElement(_.a, null, !this.hasAgreementPendingUpgrade && i.createElement(St.a, {
                        "data-test-selector": xt.PAYOUT_ONBOARDING_LINK,
                        text: this.payoutOnboardingLinkText,
                        linkTo: "/" + this.props.channelName + "/dashboard/settings/revenue/payout-onboarding"
                    }), this.hasAgreementPendingUpgrade && i.createElement(St.a, {
                        "data-test-selector": xt.UPGRADE_AGREEMENT_LINK,
                        text: this.upgradeTermsLinkText,
                        linkTo: "/" + this.props.channelName + "/dashboard/settings/revenue/upgrade-terms"
                    }), this.hasCompletedOnboarding && i.createElement(St.a, {
                        "data-test-selector": xt.PAYOUTS_LINK,
                        text: Object(h.d)("Change Payout Method", "OnboardingSection"),
                        linkTo: "/" + this.props.channelName + "/dashboard/settings/revenue/payouts"
                    }), a && a.roles && a.roles.isAffiliate && i.createElement(St.a, {
                        "data-test-selector": xt.AFFILIATE_AGREEMENT_LINK,
                        text: Object(h.d)("View Affiliate Agreement", "OnboardingSection"),
                        linkTo: "/p/legal/affiliate-agreement/"
                    }), this.showPartnerAgreementLink && i.createElement(St.a, {
                        "data-test-selector": xt.PARTNER_AGREEMENT_LINK,
                        text: Object(h.d)("View Active Partner Agreement", "OnboardingSection"),
                        linkTo: "/" + this.props.channelName + "/dashboard/settings/revenue/view-terms"
                    }), a && a.roles && a.roles.isExtensionsDeveloper && i.createElement(St.a, {
                        "data-test-selector": xt.EXTENSIONS_DEVELOPER_AGREEMENT_LINK,
                        text: Object(h.d)("View Extensions Developer Agreement", "OnboardingSection"),
                        linkTo: "/p/legal/developer-agreement/"
                    }))))
                }, Object.defineProperty(t.prototype, "hasAgreementPendingUpgrade", {
                    get: function() {
                        return !!(this.props.data.currentUser && this.props.data.currentUser.payoutInvite && this.props.data.currentUser.payoutInvite.workflow && this.props.data.currentUser.payoutInvite.workflow.currentStep === mt.AGREEMENT_PENDING_UPGRADE)
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "hasCompletedOnboarding", {
                    get: function() {
                        return !!(this.props.data.currentUser && this.props.data.currentUser.payoutInvite && this.props.data.currentUser.payoutInvite.workflow && this.props.data.currentUser.payoutInvite.workflow.currentStep === mt.COMPLETED)
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "payoutOnboardingLinkText", {
                    get: function() {
                        var e = this.props.data.currentUser;
                        if (!e || !e.payoutInvite) return null;
                        switch (e.payoutInvite.category) {
                            case ut.AFFILIATE:
                                return Object(h.d)("Affiliate Onboarding", "OnboardingSection");
                            case ut.STANDARD_PARTNER:
                            case ut.PREMIUM_PARTNER:
                            case ut.CUSTOM_PARTNER:
                                return Object(h.d)("Partner Onboarding", "OnboardingSection");
                            case ut.EXTENSIONS_DEVELOPER:
                                return Object(h.d)("Extensions Developer Onboarding", "OnboardingSection");
                            default:
                                return null
                        }
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "upgradeTermsLinkText", {
                    get: function() {
                        var e = this.props.data.currentUser;
                        if (!e || !e.payoutInvite) return null;
                        switch (e.payoutInvite.category) {
                            case ut.AFFILIATE:
                                return Object(h.d)("Agree to the Twitch Affiliate Agreement", "OnboardingSection");
                            case ut.STANDARD_PARTNER:
                            case ut.PREMIUM_PARTNER:
                                return Object(h.d)("Agree to the Twitch Partner Agreement", "OnboardingSection");
                            default:
                                return null
                        }
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "showPartnerAgreementLink", {
                    get: function() {
                        var e = this.props.data.currentUser;
                        return !!e && Rt(e.payoutPlans && e.payoutPlans.map(function(e) {
                            return {
                                category: e.category,
                                tags: e.tags,
                                isReceivingRevenue: e.isReceivingRevenue
                            }
                        }), e.payoutInvite && {
                            category: e.payoutInvite.category,
                            isLegacy: e.payoutInvite.isLegacy,
                            workflow: {
                                currentStep: e.payoutInvite.workflow && e.payoutInvite.workflow.currentStep
                            }
                        })
                    },
                    enumerable: !0,
                    configurable: !0
                }), t
            }(i.Component),
            jt = Object(o.compose)(Object(p.d)("OnboardingSection"), Object(m.a)(Dt))(Ft),
            Lt = n("Aj/L"),
            Mt = n("QRuM"),
            Ut = function(e) {
                return i.createElement(N._8, null, i.createElement(kt.a, {
                    title: Object(h.d)("Other Revenue Streams", "OtherRevenueStreamsForm")
                }), i.createElement(_.a, null, i.createElement(St.a, {
                    text: Object(h.d)("Game sales via Twitch", "OtherRevenueStreamsForm"),
                    linkTo: "/" + e.channelName + "/dashboard/settings/revenue/game-commerce"
                }), i.createElement(Mt.c, {
                    name: "commerce_amendment_v2",
                    isStaff: e.isStaff
                }, i.createElement(St.a, {
                    text: Object(h.d)("Gear, games, and more via Amazon Associates", "OtherRevenueStreamsForm"),
                    linkTo: "/" + e.channelName + "/dashboard/settings/revenue/game-commerce-v2"
                })), i.createElement(St.a, {
                    text: Object(h.d)("Merch by Amazon (Beta)", "OtherRevenueStreamsForm"),
                    linkTo: "/" + e.channelName + "/dashboard/settings/revenue/merch-by-amazon"
                })))
            };
        var Bt, Vt = Object(He.b)(function(e) {
                var t = Object(Lt.c)(e);
                return {
                    isStaff: !!(t && t.roles && t.roles.isStaff)
                }
            })(Ut),
            Wt = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onChange = function(e) {
                        t.props.onChange(t.props.benefit, e.currentTarget.checked)
                    }, t
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    return i.createElement(y.a, {
                        label: this.props.label
                    }, i.createElement(N._51, {
                        checked: this.props.isToggled,
                        onChange: this.onChange
                    }), i.createElement(v.a, {
                        text: this.props.description
                    }))
                }, t
            }(i.Component),
            Qt = n("9FLI"),
            zt = n("exGi");
        ! function(e) {
            e[e.AD_FREE_VIEWING = 0] = "AD_FREE_VIEWING", e[e.IGNORE_SLOW_MODE = 1] = "IGNORE_SLOW_MODE", e[e.SUBSCRIBER_ONLY_CHAT = 2] = "SUBSCRIBER_ONLY_CHAT", e[e.SUBSCRIBER_ONLY_ARCHIVES = 3] = "SUBSCRIBER_ONLY_ARCHIVES"
        }(Bt || (Bt = {}));
        var Gt = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.toggleBenefit = function(e, n) {
                        return r.__awaiter(t, void 0, void 0, function() {
                            var t, a, i, o, s, l, c, d;
                            return r.__generator(this, function(r) {
                                return this.props.data.user && this.props.data.user.id && this.props.data.user.roles && this.props.data.user.subscriptionProducts && (t = this.props.data.user.subscriptionProducts[0]) ? (a = e === Bt.AD_FREE_VIEWING ? n : t.hasAdFree, i = e === Bt.IGNORE_SLOW_MODE ? n : t.hasFastChat, o = e === Bt.SUBSCRIBER_ONLY_ARCHIVES ? n : t.hasSubonlyVideoArchive, s = e === Bt.SUBSCRIBER_ONLY_CHAT ? n : t.hasSubOnlyChat, l = this.props.data.user.id, c = {
                                    targetUserID: l,
                                    id: t.id,
                                    hasAdFree: a,
                                    hasFastChat: i,
                                    hasSubOnlyVideoArchive: o,
                                    hasSubOnlyChat: s
                                }, d = {
                                    updateSubscriptionProduct: {
                                        product: {
                                            id: t.id,
                                            hasAdFree: a,
                                            hasFastChat: i,
                                            hasSubonlyVideoArchive: o,
                                            hasSubOnlyChat: s,
                                            __typename: "SubscriptionProduct"
                                        },
                                        __typename: "UpdateSubscriptionProductPayload"
                                    }
                                }, this.props.updateSubscriptionProduct(Object(b.b)(c, d)), [2]) : [2]
                            })
                        })
                    }, t
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    if (!this.props.data.user || !this.props.data.user.roles || !this.props.data.user.subscriptionProducts) return this.props.data.loading ? i.createElement(N._10, {
                        fillContent: !0
                    }) : this.props.data.error ? i.createElement(c.a, null) : null;
                    var e = this.props.data.user.subscriptionProducts[0];
                    if (!e) return null;
                    var t = this.props.channelName,
                        n = this.props.data.user.roles.isPartner || !1,
                        a = this.props.data.user.roles.isAffiliate || !1,
                        r = e.hasAdFree,
                        o = e.hasFastChat || !1,
                        s = e.hasSubOnlyChat || !1,
                        l = e.hasSubonlyVideoArchive || !1;
                    return i.createElement(i.Fragment, null, i.createElement(kt.a, {
                        title: Object(h.d)("Subscriptions", "DashboardRevenueSettings")
                    }), i.createElement(_.a, null, i.createElement(St.a, {
                        text: Object(h.d)("Subscription names", "SubsSettingsSection"),
                        linkTo: "/" + t + "/dashboard/settings/revenue/subscription/ticket"
                    }), (n || a) && i.createElement(St.a, {
                        text: Object(h.d)("Emotes", "SubsSettingsSection"),
                        linkTo: "/" + t + "/dashboard/settings/revenue/subscription/chatperks"
                    }), n && i.createElement(i.Fragment, null, i.createElement(St.a, {
                        text: Object(h.d)("Loyalty badges", "SubsSettingsSection"),
                        linkTo: "/" + t + "/dashboard/settings/revenue/subscription/badges"
                    }), i.createElement(Wt, {
                        benefit: Bt.AD_FREE_VIEWING,
                        label: Object(h.d)("Ad-Free viewing", "SubsSettingsSection"),
                        isToggled: r,
                        onChange: this.toggleBenefit,
                        description: Object(h.d)("Allow subscribers to watch your content on your channel ad-free", "SubsSettingsSection")
                    })), i.createElement(Wt, {
                        benefit: Bt.IGNORE_SLOW_MODE,
                        label: Object(h.d)("Ignore slow mode", "SubsSettingsSection"),
                        isToggled: o,
                        onChange: this.toggleBenefit,
                        description: Object(h.d)("Allow subscribers to chat freely in your channel when chat is in slow mode", "SubsSettingsSection")
                    }), i.createElement(Wt, {
                        benefit: Bt.SUBSCRIBER_ONLY_CHAT,
                        label: Object(h.d)("Subscriber-only chat", "SubsSettingsSection"),
                        isToggled: s,
                        onChange: this.toggleBenefit,
                        description: Object(h.d)("Only allow subscribers and moderators to chat in your channel", "SubsSettingsSection")
                    }), i.createElement(Wt, {
                        benefit: Bt.SUBSCRIBER_ONLY_ARCHIVES,
                        label: Object(h.d)("Subscriber-only archives", "SubsSettingsSection"),
                        isToggled: l,
                        onChange: this.toggleBenefit,
                        description: Object(h.d)("Only allow subscribers to watch your past broadcasts", "SubsSettingsSection")
                    })))
                }, t
            }(i.Component),
            Yt = Object(g.d)(Object(m.a)(Qt, {
                options: function(e) {
                    return {
                        variables: {
                            login: e.channelName
                        }
                    }
                }
            }), Object(m.a)(zt, {
                name: "updateSubscriptionProduct"
            }))(Gt),
            qt = n("nQ9n"),
            Ht = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    return this.props.data.loading ? i.createElement(N._8, {
                        fullHeight: !0
                    }, i.createElement(N._10, {
                        fillContent: !0
                    })) : this.props.data.error ? i.createElement(N._8, {
                        fullHeight: !0
                    }, i.createElement(c.a, null)) : i.createElement(u.b, null, i.createElement(N._8, {
                        fullHeight: !0
                    }, i.createElement(jt, {
                        channelName: this.channelName
                    }), (this.isPaidAffiliate || this.isPaidPartner) && i.createElement(i.Fragment, null, i.createElement(Yt, {
                        channelName: this.channelName
                    }), i.createElement(wt, {
                        channelName: this.channelName,
                        isPartner: this.isPaidPartner
                    }), i.createElement(Vt, {
                        channelName: this.channelName
                    }))))
                }, Object.defineProperty(t.prototype, "channelName", {
                    get: function() {
                        return this.props.match.params.channelName
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "isPaidAffiliate", {
                    get: function() {
                        var e = this.props.data.channel.payoutPlans;
                        return !!e && !!e.find(function(e) {
                            return e.category === yt.PayoutCategory.Affiliate && e.isReceivingRevenue
                        })
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "isPaidPartner", {
                    get: function() {
                        var e = this.props.data.channel.payoutPlans;
                        return !!e && !!e.find(function(e) {
                            return e.category === yt.PayoutCategory.Partner && e.isReceivingRevenue
                        })
                    },
                    enumerable: !0,
                    configurable: !0
                }), t
            }(i.Component),
            Xt = Object(o.compose)(Object(p.d)("DashboardRevenueSettingsIndexPage", {
                autoReportInteractive: !0,
                destination: Ye.a.DashboardSettingsRevenue
            }), Object(Ge.a)({
                location: qe.PageviewLocation.DashboardRevenueSettings
            }), Object(m.a)(qt, {
                options: function(e) {
                    return {
                        variables: {
                            channelName: e.match.params.channelName
                        }
                    }
                }
            }))(Ht),
            Kt = n("vNxz"),
            $t = function(e) {
                return i.createElement(N._35, {
                    background: N.n.Base,
                    padding: {
                        x: 2,
                        y: 3
                    }
                }, i.createElement(N._35, {
                    borderBottom: !0,
                    margin: {
                        bottom: 2
                    },
                    padding: {
                        bottom: 2
                    }
                }, i.createElement(N.Q, {
                    type: N._49.H4
                }, Object(h.d)("Save Badge Images", "LoyaltyBadgeUploadModalPresentation"))), i.createElement(N._8, {
                    margin: {
                        bottom: 2
                    }
                }, i.createElement(N.Q, null, Object(h.d)("By uploading and saving these images, you are confirming that you own all rights to the images.", "LoyaltyBadgeUploadModalPresentation"))), i.createElement(N._35, {
                    borderTop: !0,
                    padding: {
                        top: 2
                    },
                    display: N.R.Flex,
                    justifyContent: N._7.Center
                }, i.createElement(N._8, {
                    margin: {
                        right: 2
                    }
                }, i.createElement(N.v, {
                    onClick: e.onClose,
                    type: N.B.Text
                }, Object(h.d)("Cancel", "LoyaltyBadgeUploadModalPresentation"))), i.createElement(N.v, {
                    onClick: e.onSaveClick
                }, Object(h.d)("Save", "LoyaltyBadgeUploadModalPresentation"))), i.createElement(Kt.a, {
                    closeOnBackdropClick: !0,
                    closeOnPageNavigation: !0
                }))
            },
            Jt = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onSaveClick = function() {
                        t.props.closeModal(), t.props.onSaveClick()
                    }, t.onCancelClick = function() {
                        t.props.closeModal()
                    }, t
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    return i.createElement($t, {
                        onSaveClick: this.onSaveClick,
                        onClose: this.onCancelClick
                    })
                }, t
            }(i.Component);
        var Zt, en = Object(He.b)(null, function(e) {
                return Object(g.b)({
                    closeModal: Xe.c
                }, e)
            })(Jt),
            tn = this,
            nn = "subscriptions/v1/channels",
            an = function() {
                function e() {}
                return e.getBadges = function(e) {
                    return r.__awaiter(tn, void 0, void 0, function() {
                        var t, n;
                        return r.__generator(this, function(a) {
                            switch (a.label) {
                                case 0:
                                    return a.trys.push([0, 2, , 3]), [4, R.a.getOrThrow(nn + "/" + e + "/badges", {
                                        credentials: "include"
                                    })];
                                case 1:
                                    return t = a.sent(), [2, on(t.body)];
                                case 2:
                                    return n = a.sent(), [2, Promise.reject(n)];
                                case 3:
                                    return [2]
                            }
                        })
                    })
                }, e.getTimeoutStatuses = function(e) {
                    return r.__awaiter(tn, void 0, void 0, function() {
                        var t;
                        return r.__generator(this, function(n) {
                            switch (n.label) {
                                case 0:
                                    return n.trys.push([0, 2, , 3]), [4, R.a.getOrThrow(nn + "/" + e + "/timeout_statuses", {
                                        credentials: "include"
                                    })];
                                case 1:
                                    return [2, n.sent().body.badges_timed_out];
                                case 2:
                                    return t = n.sent(), [2, Promise.reject(t)];
                                case 3:
                                    return [2]
                            }
                        })
                    })
                }, e.deleteBadge = function(e, t) {
                    return r.__awaiter(tn, void 0, void 0, function() {
                        var n;
                        return r.__generator(this, function(a) {
                            switch (a.label) {
                                case 0:
                                    return a.trys.push([0, 2, , 3]), [4, R.a.deleteOrThrow(nn + "/" + e + "/badges/" + t, {
                                        credentials: "include"
                                    })];
                                case 1:
                                    return a.sent(), [3, 3];
                                case 2:
                                    return n = a.sent(), [2, Promise.reject(n)];
                                case 3:
                                    return [2]
                            }
                        })
                    })
                }, e.uploadBadge = function(e, t) {
                    return r.__awaiter(tn, void 0, void 0, function() {
                        var n, a, i;
                        return r.__generator(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    return r.trys.push([0, 2, , 3]), (n = new FormData).append("required_tenure_months", t.requiredTenureMonths.toString()), n.append("image_1x", t.image1x), n.append("image_2x", t.image2x), n.append("image_4x", t.image4x), [4, R.a.postOrThrow(nn + "/" + e + "/badges", {
                                        body: n,
                                        credentials: "include"
                                    })];
                                case 1:
                                    return a = r.sent(), [2, rn(a.body)];
                                case 2:
                                    return i = r.sent(), [2, Promise.reject(i)];
                                case 3:
                                    return [2]
                            }
                        })
                    })
                }, e
            }(),
            rn = function(e) {
                return {
                    id: e.id,
                    requiredTenureMonths: e.required_tenure_months,
                    image1xURL: e.image_1x_url,
                    image2xURL: e.image_2x_url,
                    image4xURL: e.image_4x_url,
                    title: e.title
                }
            },
            on = function(e) {
                return e.map(function(e) {
                    return rn(e)
                })
            },
            sn = (n("CRdy"), "https://static-cdn.jtvnw.net/badges/v1/19dd8673-124d-4f44-830c-b0f4f9d78635/2"),
            ln = "current-badge-image-selector",
            cn = "current-badge-placeholder-selector",
            dn = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.renderCurrentBadges = function() {
                        var e = new Map(t.props.badgesMap),
                            n = On.map(t => {
                                const {
                                    requiredTenureMonths: n
                                } = t, a = e.get(n);
                                if (0 !== n || this.props.badgesMap.has(0)) {
                                    if (a) {
                                        const e = this.renderToolTip(a.title, a.image2xURL);
                                        return this.renderCurrentBadgeImage(t, e)
                                    }
                                    return this.renderCurrentBadgePlaceholder(t)
                                } {
                                    const e = this.renderToolTip(Object(h.d)("Subscriber", "LoyaltyBadgeCurrentSection"), sn);
                                    return this.renderCurrentBadgeImage(t, e)
                                }
                            });
                        return i.createElement(N._8, {
                            margin: {
                                top: 1,
                                bottom: 1
                            }
                        }, n)
                    }, t.renderCurrentBadgeImage = function(e, n) {
                        var a = ln;
                        return t.renderCurrentBadge(e, "loyalty-badges-current-section__badge", a, n)
                    }, t.renderCurrentBadgePlaceholder = function(e) {
                        var n = cn;
                        return t.renderCurrentBadge(e, "loyalty-badges-current-section__placeholder", n)
                    }, t.renderCurrentBadge = function(e, t, n, a) {
                        return i.createElement(N._8, {
                            key: e.requiredTenureMonths,
                            "data-test-selector": n,
                            display: N.R.InlineFlex,
                            flexDirection: N.T.Column,
                            margin: {
                                right: 2
                            },
                            verticalAlign: N._59.Top
                        }, i.createElement(N._8, {
                            className: t
                        }, a), i.createElement(N._8, {
                            textAlign: N._45.Center
                        }, i.createElement(N.Q, null, e.name)))
                    }, t.renderToolTip = function(e, t) {
                        return i.createElement(N._52, {
                            direction: N._54.Bottom,
                            label: e
                        }, i.createElement("img", {
                            src: t,
                            alt: e
                        }))
                    }, t
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    return i.createElement(k.a, {
                        title: Object(h.d)("Current Badges", "LoyaltyBadgeCurrentSection")
                    }, this.renderCurrentBadges())
                }, t
            }(i.Component);
        n("/GDT");
        ! function(e) {
            e[e.NoChanges = 0] = "NoChanges", e[e.Working = 1] = "Working", e[e.Success = 2] = "Success", e[e.Error = 3] = "Error"
        }(Zt || (Zt = {}));
        var un = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.renderContainer = function(e, n) {
                        return i.createElement(N._8, {
                            textAlign: N._45.Center,
                            margin: {
                                right: 1
                            }
                        }, i.createElement(N._8, {
                            className: "loyalty-badges-delete-section__container",
                            alignItems: N.c.Center,
                            display: N.R.InlineFlex,
                            justifyContent: N._7.Center
                        }, i.createElement("img", {
                            src: e,
                            alt: t.props.title
                        })), i.createElement(N.Q, null, n))
                    }, t.getButtonState = function(e) {
                        switch (e) {
                            case Zt.Working:
                                return N.A.Loading;
                            case Zt.Success:
                            case Zt.NoChanges:
                            case Zt.Error:
                            default:
                                return N.A.Default
                        }
                    }, t
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    return i.createElement(i.Fragment, null, this.renderContainer(this.props.image1xURL, Object(h.d)("18 x 18px", "LoyaltyBadgeDeleteSection")), this.renderContainer(this.props.image2xURL, Object(h.d)("32 x 32px", "LoyaltyBadgeDeleteSection")), this.renderContainer(this.props.image4xURL, Object(h.d)("72 x 72px", "LoyaltyBadgeDeleteSection")), i.createElement(N._8, {
                        className: "loyalty-badges-delete-section__button-container",
                        alignItems: N.c.Start,
                        display: N.R.InlineFlex,
                        flexDirection: N.T.Column,
                        justifyContent: N._7.Center,
                        margin: {
                            left: 1
                        }
                    }, i.createElement(N._8, {
                        margin: {
                            bottom: 1
                        }
                    }, i.createElement(N.v, {
                        type: N.B.Alert,
                        state: this.getButtonState(this.props.deleteStatus),
                        onClick: this.props.showDeleteBadgeModal
                    }, Object(h.d)("Delete Badge", "LoyaltyBadgeUploadSection"))), this.props.deleteStatus === Zt.Error && i.createElement(N._12, {
                        label: Object(h.d)("Failed to delete subscriber badge", "LoyaltyBadgeDeleteSection"),
                        type: N._13.Alert
                    })))
                }, t
            }(i.Component),
            mn = function(e) {
                return i.createElement(N._35, {
                    background: N.n.Base,
                    padding: {
                        x: 2,
                        y: 3
                    }
                }, i.createElement(N._35, {
                    borderBottom: !0,
                    margin: {
                        bottom: 2
                    },
                    padding: {
                        bottom: 2
                    }
                }, i.createElement(N.Q, {
                    type: N._49.H4
                }, Object(h.d)("Are you sure?", "LoyaltyBadgeDeleteModalPresentation"))), i.createElement(N._8, {
                    margin: {
                        bottom: 2
                    }
                }, i.createElement(N.Q, null, Object(h.d)("Deleting your subscriber badge could negatively impact your subscribers.", "LoyaltyBadgeDeleteModalPresentation"))), i.createElement(N._35, {
                    borderTop: !0,
                    padding: {
                        top: 2
                    },
                    display: N.R.Flex,
                    justifyContent: N._7.Center
                }, i.createElement(N._8, {
                    margin: {
                        right: 2
                    }
                }, i.createElement(N.v, {
                    onClick: e.onClose,
                    type: N.B.Text
                }, Object(h.d)("Cancel", "LoyaltyBadgeDeleteModalPresentation"))), i.createElement(N.v, {
                    onClick: e.onDeleteClick
                }, Object(h.d)("Delete", "LoyaltyBadgeDeleteModalPresentation"))), i.createElement(Kt.a, {
                    closeOnBackdropClick: !0,
                    closeOnPageNavigation: !0
                }))
            },
            pn = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onDeleteClick = function() {
                        t.props.closeModal(), t.props.onDeleteClick()
                    }, t.onCancelClick = function() {
                        t.props.closeModal()
                    }, t
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    return i.createElement(mn, {
                        onDeleteClick: this.onDeleteClick,
                        onClose: this.onCancelClick
                    })
                }, t
            }(i.Component);
        var gn = Object(He.b)(null, function(e) {
            return Object(g.b)({
                closeModal: Xe.c
            }, e)
        })(pn);
        var hn, bn = Object(He.b)(null, function(e, t) {
                return Object.assign(Object(g.b)({
                    showDeleteBadgeModal: function() {
                        return Object(Xe.d)(gn, {
                            onDeleteClick: t.onDeleteClick
                        })
                    }
                }, e), t)
            })(un),
            fn = function() {
                return i.createElement(i.Fragment, null, i.createElement(N.Q, {
                    bold: !0,
                    fontSize: N.V.Size7
                }, Object(h.d)("Contact Partner Help", "LoyaltyBadgeTimedOutSection")), i.createElement(N._8, {
                    padding: {
                        top: 1
                    }
                }, i.createElement(N.Q, null, Object(h.d)("One or more of the badges you've attempted to upload violate our Terms of Service. As such, your ability to upload new badges has been temporarily disabled and the offending content has been deleted.", "LoyaltyBadgeTimedOutSection"))), i.createElement(N._8, {
                    padding: {
                        top: 1
                    }
                }, i.createElement(N.Q, null, Object(h.d)("Please contact {email} for more information.", {
                    email: i.createElement("a", {
                        href: "mailto:partnerhelp@twitch.tv"
                    }, "partnerhelp@twitch.tv")
                }, "LoyaltyBadgeTimedOutSection"))))
            },
            En = function() {
                function e() {}
                return e.readFile = function(e, t) {
                    var n = new FileReader;
                    n.onloadend = function() {
                        t(n.result)
                    }, n.readAsDataURL(e)
                }, e.readImage = function(e, t, n, a, r, i) {
                    var o = new Image;
                    o.onload = function() {
                        o.width === t || o.height === n ? a() : r()
                    }, o.onerror = function() {
                        i()
                    }, o.src = e
                }, e
            }();
        n("jlxi");
        ! function(e) {
            e[e.BadSizeError = 0] = "BadSizeError", e[e.BadImageError = 1] = "BadImageError", e[e.BadImageDimensionsError = 2] = "BadImageDimensionsError", e[e.None = 3] = "None"
        }(hn || (hn = {}));
        var vn = 25e3,
            yn = vn / 1e3,
            Sn = ["image/png"],
            kn = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        errorStatus: hn.None
                    }, t.getErrorText = function() {
                        switch (t.state.errorStatus) {
                            case hn.BadSizeError:
                                return Object(h.d)("Max file size is {fileSize} KB", {
                                    fileSize: yn
                                }, "LoyaltyBadgeFilePicker");
                            case hn.BadImageError:
                                return Object(h.d)("Bad PNG file", "LoyaltyBadgeFilePicker");
                            case hn.BadImageDimensionsError:
                                return Object(h.d)("PNG must be {width} x {height}px", {
                                    width: t.props.widthRequirement,
                                    height: t.props.heightRequirement
                                }, "LoyaltyBadgeFilePicker");
                            case hn.None:
                            default:
                                return
                        }
                    }, t.onFilesSubmitted = function(e) {
                        return r.__awaiter(t, void 0, void 0, function() {
                            var t, n = this;
                            return r.__generator(this, function(a) {
                                return e.length < 1 ? [2] : (t = e[0]).size > vn ? (this.setState({
                                    errorStatus: hn.BadSizeError
                                }), [2]) : (En.readFile(t, function(e) {
                                    En.readImage(e, n.props.widthRequirement, n.props.heightRequirement, function() {
                                        n.setState({
                                            errorStatus: hn.None
                                        }), n.props.onFileSubmitted(t, e)
                                    }, function() {
                                        n.setState({
                                            errorStatus: hn.BadImageDimensionsError
                                        })
                                    }, function() {
                                        n.setState({
                                            errorStatus: hn.BadImageError
                                        })
                                    })
                                }), [2])
                            })
                        })
                    }, t
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    var e = this.getErrorText();
                    return i.createElement(N._8, {
                        position: N._15.Relative
                    }, i.createElement(N._8, {
                        textAlign: N._45.Center,
                        margin: {
                            right: 1
                        }
                    }, i.createElement(N._8, {
                        className: "loyalty-badges-file-picker__container",
                        display: N.R.InlineFlex,
                        flexDirection: N.T.Column,
                        position: N._15.Relative
                    }, i.createElement(F.a, {
                        allowedFileTypes: Sn,
                        error: void 0 !== e,
                        onFilesSubmitted: this.onFilesSubmitted
                    }, i.createElement(N._8, {
                        padding: .5
                    }, e ? i.createElement(N.Q, {
                        color: N.K.Error,
                        wordBreak: N._61.BreakWord
                    }, e) : this.props.children))), i.createElement(N.Q, null, Object(h.d)("{width} x {height}px", {
                        width: this.props.widthRequirement,
                        height: this.props.heightRequirement
                    }, "LoyaltyBadgeFilePicker")), e && i.createElement(N._12, {
                        label: e,
                        type: N._13.Alert
                    })))
                }, t
            }(i.Component),
            _n = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.renderFilePickerContents = function() {
                        return i.createElement(i.Fragment, null, i.createElement(N._24, {
                            asset: N._25.Plus,
                            height: 16,
                            width: 16
                        }), i.createElement(N.Q, null, Object(h.d)("Upload Image", "LoyaltyBadgeUploadSection")))
                    }, t
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    var e = this.props,
                        t = e.image1xURL,
                        n = e.image2xURL,
                        a = e.image4xURL;
                    return i.createElement(i.Fragment, null, i.createElement(kn, {
                        onFileSubmitted: this.props.onImage1xSubmitted,
                        heightRequirement: 18,
                        widthRequirement: 18
                    }, t ? i.createElement("img", {
                        src: t
                    }) : this.renderFilePickerContents()), i.createElement(kn, {
                        onFileSubmitted: this.props.onImage2xSubmitted,
                        heightRequirement: 36,
                        widthRequirement: 36
                    }, n ? i.createElement("img", {
                        src: n
                    }) : this.renderFilePickerContents()), i.createElement(kn, {
                        onFileSubmitted: this.props.onImage4xSubmitted,
                        heightRequirement: 72,
                        widthRequirement: 72
                    }, a ? i.createElement("img", {
                        src: a
                    }) : this.renderFilePickerContents()))
                }, t
            }(i.Component),
            Nn = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        isTimedOut: !1
                    }, t.renderTabs = function() {
                        var e = On.map(function(e) {
                            var n = e.requiredTenureMonths;
                            return i.createElement(N._36, {
                                key: n,
                                active: t.props.activeTab === n,
                                "data-tab-target": n,
                                onClick: t.toggleActiveTab
                            }, i.createElement(N.Q, null, e.name))
                        });
                        return i.createElement(N._37, null, e)
                    }, t.renderTabContent = function() {
                        var e = t.props.activeTab,
                            n = t.props.badgesMap.get(e);
                        return i.createElement(N._8, {
                            display: N.R.InlineFlex,
                            margin: {
                                top: 1
                            }
                        }, n ? i.createElement(bn, {
                            image1xURL: n.image1xURL,
                            image2xURL: n.image2xURL,
                            image4xURL: n.image4xURL,
                            title: n.title,
                            onDeleteClick: t.props.onDeleteClick,
                            deleteStatus: t.props.deleteStatus
                        }) : i.createElement(_n, {
                            image1xURL: t.props.image1xDataURL,
                            image2xURL: t.props.image2xDataURL,
                            image4xURL: t.props.image4xDataURL,
                            onImage1xSubmitted: t.props.onImage1xSubmitted,
                            onImage2xSubmitted: t.props.onImage2xSubmitted,
                            onImage4xSubmitted: t.props.onImage4xSubmitted
                        }))
                    }, t.toggleActiveTab = function(e) {
                        return r.__awaiter(t, void 0, void 0, function() {
                            var t, n, a, i, o;
                            return r.__generator(this, function(r) {
                                if (e.currentTarget.parentElement)
                                    for (t = e.currentTarget.parentElement.getAttribute("data-tab-target"), n = 0, a = On; n < a.length; n++) i = a[n], o = i.requiredTenureMonths, t === o.toString() && this.props.toggleActiveTab(o);
                                return [2]
                            })
                        })
                    }, t
                }
                return r.__extends(t, e), t.prototype.componentDidMount = function() {
                    return r.__awaiter(this, void 0, void 0, function() {
                        var e;
                        return r.__generator(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return [4, an.getTimeoutStatuses(this.props.channelId)];
                                case 1:
                                    return e = t.sent(), this.setState({
                                        isTimedOut: e
                                    }), [2]
                            }
                        })
                    })
                }, t.prototype.render = function() {
                    return i.createElement(k.a, {
                        title: Object(h.d)("Manage Badges", "LoyaltyBadgeManageSection")
                    }, this.state.isTimedOut ? i.createElement(fn, null) : i.createElement(i.Fragment, null, this.renderTabs(), this.renderTabContent()))
                }, t
            }(i.Component),
            Tn = n("/D4H"),
            On = [{
                name: "Base",
                requiredTenureMonths: 0
            }, {
                name: "3-Month",
                requiredTenureMonths: 3
            }, {
                name: "6-Month",
                requiredTenureMonths: 6
            }, {
                name: "1-Year",
                requiredTenureMonths: 12
            }, {
                name: "2-Year",
                requiredTenureMonths: 24
            }, {
                name: "3-Year",
                requiredTenureMonths: 36
            }, {
                name: "4-Year",
                requiredTenureMonths: 48
            }, {
                name: "5-Year",
                requiredTenureMonths: 60
            }, {
                name: "6-Year",
                requiredTenureMonths: 72
            }, {
                name: "7-Year",
                requiredTenureMonths: 84
            }, {
                name: "8-Year",
                requiredTenureMonths: 96
            }],
            An = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        badgesMap: new Map,
                        activeTab: 0,
                        saveStatus: f.b.NoChanges,
                        deleteStatus: Zt.NoChanges
                    }, t.onSaveClick = function() {
                        return r.__awaiter(t, void 0, void 0, function() {
                            var e, t, n, a;
                            return r.__generator(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        if (!((e = this.props.data.user) && e.id && this.state.image1x && this.state.image2x && this.state.image4x)) return [3, 4];
                                        this.setState({
                                            saveStatus: f.b.Working
                                        }), t = {
                                            requiredTenureMonths: this.state.activeTab,
                                            image1x: this.state.image1x,
                                            image2x: this.state.image2x,
                                            image4x: this.state.image4x
                                        }, r.label = 1;
                                    case 1:
                                        return r.trys.push([1, 3, , 4]), [4, an.uploadBadge(e.id, t)];
                                    case 2:
                                        return n = r.sent(), (a = new Map(this.state.badgesMap)).set(n.requiredTenureMonths, n), this.setState({
                                            badgesMap: a,
                                            image1xDataURL: void 0,
                                            image2xDataURL: void 0,
                                            image4xDataURL: void 0,
                                            image1x: void 0,
                                            image2x: void 0,
                                            image4x: void 0,
                                            saveStatus: f.b.Success
                                        }), [3, 4];
                                    case 3:
                                        return r.sent(), this.setState({
                                            saveStatus: f.b.Error
                                        }), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, t.toggleActiveTab = function(e) {
                        return r.__awaiter(t, void 0, void 0, function() {
                            return r.__generator(this, function(t) {
                                return this.setState({
                                    activeTab: e,
                                    image1xDataURL: void 0,
                                    image2xDataURL: void 0,
                                    image4xDataURL: void 0,
                                    image1x: void 0,
                                    image2x: void 0,
                                    image4x: void 0,
                                    deleteStatus: Zt.NoChanges,
                                    saveStatus: f.b.NoChanges
                                }), [2]
                            })
                        })
                    }, t.updateSaveStatus = function() {
                        t.state.image1x && t.state.image2x && t.state.image4x ? t.setState({
                            saveStatus: f.b.DirtyChanges
                        }) : t.setState({
                            saveStatus: f.b.NoChanges
                        })
                    }, t.onImage1xSubmitted = function(e, n) {
                        return r.__awaiter(t, void 0, void 0, function() {
                            return r.__generator(this, function(t) {
                                return this.setState({
                                    image1x: e,
                                    image1xDataURL: n
                                }), this.updateSaveStatus(), [2]
                            })
                        })
                    }, t.onImage2xSubmitted = function(e, n) {
                        return r.__awaiter(t, void 0, void 0, function() {
                            return r.__generator(this, function(t) {
                                return this.setState({
                                    image2x: e,
                                    image2xDataURL: n
                                }), this.updateSaveStatus(), [2]
                            })
                        })
                    }, t.onImage4xSubmitted = function(e, n) {
                        return r.__awaiter(t, void 0, void 0, function() {
                            return r.__generator(this, function(t) {
                                return this.setState({
                                    image4x: e,
                                    image4xDataURL: n
                                }), this.updateSaveStatus(), [2]
                            })
                        })
                    }, t.onDeleteClick = function() {
                        return r.__awaiter(t, void 0, void 0, function() {
                            var e, t, n;
                            return r.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        if (e = this.props.data.user, t = this.state.badgesMap.get(this.state.activeTab), !(e && e.id && t)) return [3, 4];
                                        this.setState({
                                            deleteStatus: Zt.Working
                                        }), a.label = 1;
                                    case 1:
                                        return a.trys.push([1, 3, , 4]), [4, an.deleteBadge(e.id, t.id)];
                                    case 2:
                                        return a.sent(), (n = new Map(this.state.badgesMap)).delete(t.requiredTenureMonths), this.setState({
                                            badgesMap: n,
                                            image1xDataURL: void 0,
                                            image2xDataURL: void 0,
                                            image4xDataURL: void 0,
                                            image1x: void 0,
                                            image2x: void 0,
                                            image4x: void 0,
                                            saveStatus: f.b.NoChanges,
                                            deleteStatus: Zt.Success
                                        }), [3, 4];
                                    case 3:
                                        return a.sent(), this.setState({
                                            deleteStatus: Zt.Error
                                        }), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, t.handleModalOpen = function() {
                        t.props.showUploadBadgeModal({
                            onSaveClick: t.onSaveClick
                        })
                    }, t
                }
                return r.__extends(t, e), t.prototype.componentDidMount = function() {
                    return r.__awaiter(this, void 0, void 0, function() {
                        var e, t;
                        return r.__generator(this, function(n) {
                            switch (n.label) {
                                case 0:
                                    return this.props.data.user && this.props.data.user.id ? [4, an.getBadges(this.props.data.user.id)] : [2];
                                case 1:
                                    return e = n.sent(), t = new Map, e.forEach(function(e) {
                                        t.set(e.requiredTenureMonths, e)
                                    }), this.setState({
                                        badgesMap: t
                                    }), [2]
                            }
                        })
                    })
                }, t.prototype.render = function() {
                    if (!this.props.data.user || !this.props.data.user.id) return this.props.data.loading ? i.createElement(N._10, {
                        fillContent: !0
                    }) : this.props.data.error ? i.createElement(c.a, null) : void 0;
                    var e = i.createElement(E.a, {
                        status: this.state.saveStatus,
                        onClickSave: this.handleModalOpen
                    });
                    return i.createElement(i.Fragment, null, i.createElement(S.a, {
                        title: Object(h.d)("Loyalty Badges", "LoyaltyBadgesPageComponent"),
                        linkToParent: "/" + this.props.match.params.channelName + "/dashboard/settings/revenue"
                    }), i.createElement(_.a, {
                        footer: e
                    }, i.createElement(dn, {
                        badgesMap: this.state.badgesMap
                    }), i.createElement(Nn, {
                        activeTab: this.state.activeTab,
                        badgesMap: this.state.badgesMap,
                        channelId: this.props.data.user.id,
                        toggleActiveTab: this.toggleActiveTab,
                        image1xDataURL: this.state.image1xDataURL,
                        image2xDataURL: this.state.image2xDataURL,
                        image4xDataURL: this.state.image4xDataURL,
                        onImage1xSubmitted: this.onImage1xSubmitted,
                        onImage2xSubmitted: this.onImage2xSubmitted,
                        onImage4xSubmitted: this.onImage4xSubmitted,
                        onDeleteClick: this.onDeleteClick,
                        deleteStatus: this.state.deleteStatus
                    })))
                }, t
            }(i.Component),
            Cn = Object(g.d)(Object(m.a)(Tn, {
                options: function(e) {
                    return {
                        variables: {
                            login: e.match.params.channelName
                        }
                    }
                }
            }))(An);
        var Pn, In, wn = Object(He.b)(null, function(e) {
                return Object(g.b)({
                    showUploadBadgeModal: function(e) {
                        var t = r.__rest(e, []);
                        return Object(Xe.d)(en, t)
                    }
                }, e)
            })(Cn),
            Rn = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    return i.createElement(i.Fragment, null, i.createElement(S.a, {
                        title: Object(h.d)("Merch by Amazon (Beta)", "DashboardRevenueSettingsMerchByAmazon"),
                        linkToParent: "/" + this.props.match.params.channelName + "/dashboard/settings/revenue"
                    }), i.createElement(_.a, null, i.createElement(N._35, {
                        borderTop: !0,
                        padding: 2
                    }, i.createElement(N.Q, null, Object(h.d)("Register with Merch by Amazon to create and sell your merchandise.", "DashboardRevenueSettingsMerchByAmazon")), i.createElement(N._8, {
                        padding: {
                            y: 2
                        }
                    }, i.createElement(N.Q, null, Object(h.d)("Merch by Amazon will only approve one account for access per Twitch Partner. When you click this link you will be asked to log in with an Amazon account. Please make sure to log in with your preferred Amazon account, as that is the one we will enable for Merch by Amazon access.", "DashboardRevenueSettingsMerchByAmazon"))), i.createElement(N.v, {
                        targetBlank: !0,
                        linkTo: "https://twitch.amazon.com/link?confirm=ALWAYS&returnUri=https%3A%2F%2Fmerch.amazon.com%2Ftwitch-landing"
                    }, Object(h.d)("Create & Manage Your Merch Account", "DashboardRevenueSettingsMerchByAmazon")))))
                }, t
            }(i.Component),
            xn = Object(g.d)(Object(p.d)("MerchByAmazonPage", {
                autoReportInteractive: !0,
                destination: Ye.a.DashboardSettingsRevenueMerchByAmazon
            }), Object(Ge.a)({
                location: qe.PageviewLocation.DashboardSettingsRevenueMerchByAmazon
            }))(Rn),
            Dn = n("OAwv"),
            Fn = n("RweG"),
            jn = n("wuJz"),
            Ln = n("7GS+"),
            Mn = function() {
                return i.createElement(i.Fragment, null, i.createElement(N._8, {
                    margin: {
                        bottom: 1
                    }
                }, i.createElement(N.Q, {
                    type: N._49.H4
                }, Object(h.d)("Twitch Affiliate Agreement", "AffiliateAgreement"))), i.createElement(N.Q, {
                    type: N._49.P
                }, Object(h.d)('By clicking the "{buttonLabel}" button below, you agree to the <x:link>Twitch Affiliate Agreement</x:link> (including all policies, appendices, specifications, guidelines, schedules, and other rules incorporated by reference therein); provided, however, that the Twitch Affiliate Agreement shall not be effective until we determine that you are eligible to participate in the Twitch Affiliate Program as further described therein.', {
                    buttonLabel: Object(h.d)("Agree", "AffiliateAgreement"),
                    "x:link": function(e) {
                        return i.createElement(N.O, {
                            key: "affiliate-agreement",
                            to: "https://www.twitch.tv/p/legal/affiliate-agreement"
                        }, e)
                    }
                }, "AffiliateAgreement")))
            },
            Un = function() {
                return i.createElement(i.Fragment, null, i.createElement(N._8, {
                    margin: {
                        bottom: 1
                    }
                }, i.createElement(N.Q, {
                    type: N._49.H4
                }, Object(h.d)("Twitch Partner Program Terms", "CustomPartnerAgreement"))), i.createElement(N.Q, {
                    type: N._49.P
                }, Object(h.d)("Your Twitch Partner Agreement has been emailed to you via DocuSign. Check the inbox of the email address associated with your Twitch account for an email from DocuSign/Twitch and follow the instructions. Once you have signed the Twitch Partner Agreement, please click {buttonLabel} to continue.", {
                    buttonLabel: Object(h.d)("Next", "CustomPartnerAgreement")
                }, "CustomPartnerAgreement")))
            },
            Bn = function() {
                return i.createElement(i.Fragment, null, i.createElement(N._8, {
                    margin: {
                        bottom: 1
                    }
                }, i.createElement(N.Q, {
                    type: N._49.H4
                }, Object(h.d)("Twitch Extensions Developer Program Terms", "ExtensionsDeveloperAgreement"))), i.createElement(N.Q, {
                    type: N._49.P
                }, Object(h.d)("It looks like you've already agreed to the Twitch Developer Agreement! Click {buttonLabel} to continue.", {
                    buttonLabel: Object(h.d)("Next", "ExtensionsDeveloperAgreement")
                }, "ExtensionsDeveloperAgreement")))
            },
            Vn = function(e) {
                return i.createElement(N._35, {
                    background: N.n.Alt2,
                    padding: {
                        x: 2,
                        y: 1
                    },
                    borderTop: e.borderTop
                }, i.createElement(N._8, {
                    display: N.R.InlineBlock,
                    margin: {
                        right: 1
                    }
                }, i.createElement(N.Q, {
                    type: N._49.H5,
                    transform: N._48.Uppercase,
                    color: N.K.Alt,
                    bold: !0
                }, e.title)), !!e.statusText && i.createElement(N._8, {
                    display: N.R.InlineBlock
                }, i.createElement(N.Q, {
                    type: N._49.H4,
                    transform: N._48.Uppercase,
                    bold: !0
                }, i.createElement(N._12, {
                    label: e.statusText,
                    type: e.statusType
                }))))
            },
            Wn = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        parentName: "",
                        checked: !1
                    }, t.handleParentNameChange = function(e) {
                        var n = e.target.value;
                        t.setState({
                            parentName: n
                        }), t.props.updateParentName(n)
                    }, t.toggleChecked = function() {
                        t.setState(function(e, t) {
                            return t.updateParentConfirmation(!e.checked), {
                                checked: !e.checked
                            }
                        })
                    }, t
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    return i.createElement(i.Fragment, null, i.createElement(Vn, {
                        title: Object(h.d)("Parent Consent", "ParentConfirmation")
                    }), i.createElement(N._8, {
                        padding: 2
                    }, i.createElement(N.Q, {
                        type: N._49.P,
                        color: N.K.Alt2
                    }, Object(h.d)("Parent or legal guardian: Please type your first and last name and check the box below.", "ParentConfirmation")), i.createElement(N._8, {
                        margin: {
                            top: 2
                        }
                    }, i.createElement(N.W, {
                        label: Object(h.d)("Parent or Legal Guardian Name", "ParentConfirmation"),
                        orientation: N.X.Horizontal
                    }, i.createElement(N._8, {
                        margin: {
                            bottom: 1
                        }
                    }, i.createElement(N._4, {
                        type: N._5.Text,
                        placeholder: Object(h.d)("First and Last Name", "ParentConfirmation"),
                        value: this.state.parentName,
                        onChange: this.handleParentNameChange
                    })), i.createElement(N.J, {
                        label: Object(h.d)("I hereby warrant that I am the (parent)/(guardian) of the Twitch user associated with this account, a minor, and have full authority to authorize this Agreement, which I have read and approved. I hereby agree that I and said minor will be bound by all provisions contained in this Agreement.", "ParentConfirmation"),
                        checked: this.state.checked,
                        onChange: this.toggleChecked
                    })))))
                }, t
            }(i.Component),
            Qn = function() {
                return i.createElement(i.Fragment, null, i.createElement(N._8, {
                    margin: {
                        bottom: 1
                    }
                }, i.createElement(N.Q, {
                    type: N._49.H4
                }, Object(h.d)("Twitch Partner Program Terms", "PartnerRedoInfo"))), i.createElement(N.Q, {
                    type: N._49.P
                }, Object(h.d)("It looks like you've already agreed to the Twitch Partner Agreement! Click {buttonLabel} to continue.", {
                    buttonLabel: Object(h.d)("Next", "PartnerRedoInfo")
                }, "PartnerRedoInfo")))
            },
            zn = function(e) {
                return i.createElement(N._8, {
                    position: N._15.Relative
                }, i.createElement(N._8, {
                    position: N._15.Absolute,
                    attachRight: !0
                }, i.createElement(N.v, {
                    onClick: function() {
                        var e = window.open();
                        if (e) {
                            var t = window.document.getElementById("agreement-id-selector"),
                                n = t && t.innerHTML;
                            n && (e.document.write(n), e.document.close(), e.focus(), e.print())
                        }
                    }
                }, Object(h.d)("Print", "ViewPrintableAgreement"))), i.createElement("div", {
                    id: "agreement-id-selector",
                    dangerouslySetInnerHTML: {
                        __html: e.body
                    }
                }))
            },
            Gn = n("U5GC"),
            Yn = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        parentName: "",
                        parentConfirmationChecked: !1,
                        processingAgreement: !1
                    }, t.updateParentName = function(e) {
                        t.setState({
                            parentName: e
                        })
                    }, t.updateParentConfirmation = function(e) {
                        t.setState({
                            parentConfirmationChecked: e
                        })
                    }, t.handleAgreeClick = function() {
                        return r.__awaiter(t, void 0, void 0, function() {
                            return r.__generator(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        this.setState({
                                            processingAgreement: !0
                                        }), e.label = 1;
                                    case 1:
                                        return e.trys.push([1, 3, , 4]), [4, this.acceptProgramAgreement()];
                                    case 2:
                                        return e.sent(), [3, 4];
                                    case 3:
                                        return e.sent(), this.setState({
                                            processingAgreement: !1
                                        }), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, t.acceptProgramAgreement = function() {
                        return r.__awaiter(t, void 0, void 0, function() {
                            var e, t, n, a, i, o;
                            return r.__generator(this, function(s) {
                                switch (s.label) {
                                    case 0:
                                        return this.props.onboardEntity === yt.OnboardEntity.StandardPartner || this.props.onboardEntity === yt.OnboardEntity.PremiumPartner ? (n = this.props.data.currentUser.programAgreement || "", e = n && n.type, t = n && n.version) : (e = this.props.onboardEntity, t = "v1"), a = r.__assign({}, Object(b.a)({
                                            type: e,
                                            version: t
                                        })), [4, this.props.acceptProgramAgreement(a)];
                                    case 1:
                                        return (i = s.sent()).data.acceptProgramAgreement.error ? (this.setState({
                                            processingAgreement: !1
                                        }), [2]) : (o = function(e) {
                                            return e.currentUser.payoutInvite && e.currentUser.payoutInvite.workflow && i.data.acceptProgramAgreement.workflow && (e.currentUser.payoutInvite.workflow.currentStep = i.data.acceptProgramAgreement.workflow.currentStep), e
                                        }, this.props.updateContainerQuery(o), this.props.updateStepDisplayed(yt.OnboardStep.TaxInterview), [2])
                                }
                            })
                        })
                    }, t
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    if (this.props.data.loading) return i.createElement(_.a, null, i.createElement(k.a, null, i.createElement(N._14, {
                        lineCount: 4
                    })));
                    if (this.props.data.error) return i.createElement(_.a, null, i.createElement(k.a, null, i.createElement(c.a, {
                        message: Object(h.d)("Oops, something went wrong.", "PayoutOnboardingAgreement")
                    })));
                    var e = i.createElement(N.v, {
                        "data-test-selector": "payout-onboarding-agreement__proceed-button",
                        type: N.B.Default,
                        size: N.z.Large,
                        disabled: this.proceedButtonDisabled || this.state.processingAgreement,
                        state: this.state.processingAgreement ? N.A.Loading : N.A.Default,
                        onClick: this.handleAgreeClick
                    }, this.skipAgreement ? Object(h.d)("Next", "PayoutOnboardingAgreement") : Object(h.d)("Agree", "PayoutOnboardingAgreement"));
                    return i.createElement(_.a, {
                        footer: e
                    }, i.createElement(k.a, null, i.createElement(N._35, {
                        borderMarked: !0,
                        background: N.n.Base,
                        padding: 2,
                        elevation: 1
                    }, this.renderAgreement)), !this.skipAgreement && this.requiresParentConsent && i.createElement(Wn, {
                        updateParentName: this.updateParentName,
                        updateParentConfirmation: this.updateParentConfirmation
                    }))
                }, Object.defineProperty(t.prototype, "renderAgreement", {
                    get: function() {
                        if (this.isPartnerRedo) return i.createElement(Qn, null);
                        switch (this.props.onboardEntity) {
                            case yt.OnboardEntity.Affiliate:
                                return i.createElement(Mn, null);
                            case yt.OnboardEntity.ExtensionsDeveloper:
                                return i.createElement(Bn, null);
                            case yt.OnboardEntity.StandardPartner:
                            case yt.OnboardEntity.PremiumPartner:
                                var e = this.props.data.currentUser.programAgreement;
                                return e && i.createElement(zn, {
                                    body: e.body
                                });
                            case yt.OnboardEntity.CustomPartner:
                                return i.createElement(Un, null);
                            default:
                                return null
                        }
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "isPartnerRedo", {
                    get: function() {
                        if (!this.props.data.currentUser.roles.isPartner || !this.props.data.currentUser.payoutPlans) return !1;
                        var e = this.props.data.currentUser.payoutPlans.find(function(e) {
                            return e.category === yt.PayoutCategory.Partner
                        });
                        return !!e && (!!e.isReceivingRevenue && (!!e.tags && (!(!this.props.data.currentUser.payoutInvite || !this.props.data.currentUser.payoutInvite.isLegacy) || !e.tags.includes(yt.PayoutPlanTag.Legacy) && (e.tags.includes(yt.PayoutPlanTag.Standard) ? this.props.onboardEntity === yt.OnboardEntity.StandardPartner : e.tags.includes(yt.PayoutPlanTag.Premium) ? this.props.onboardEntity === yt.OnboardEntity.PremiumPartner : !!e.tags.includes(yt.PayoutPlanTag.Custom) && this.props.onboardEntity === yt.OnboardEntity.CustomPartner))))
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "skipAgreement", {
                    get: function() {
                        return this.props.onboardEntity === yt.OnboardEntity.ExtensionsDeveloper || this.props.onboardEntity === yt.OnboardEntity.CustomPartner || this.isPartnerRedo
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "requiresParentConsent", {
                    get: function() {
                        if (!this.props.workflow.registration) return !1;
                        var e = this.props.workflow.registration.birthdate;
                        return Object(jn.differenceInYears)(new Date, e) < 18
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "proceedButtonDisabled", {
                    get: function() {
                        return !this.skipAgreement && !(!this.requiresParentConsent || this.state.parentName && this.state.parentConfirmationChecked)
                    },
                    enumerable: !0,
                    configurable: !0
                }), t
            }(i.Component),
            qn = Object(g.d)(Object(m.a)(Gn, {
                name: "data",
                options: function(e) {
                    return {
                        variables: {
                            withAgreement: e.onboardEntity === yt.OnboardEntity.StandardPartner || e.onboardEntity === yt.OnboardEntity.PremiumPartner
                        }
                    }
                }
            }), Object(m.a)(Ln, {
                name: "acceptProgramAgreement"
            }))(Yn),
            Hn = function(e) {
                if (e.status === In.Completed) return null;
                var t;
                if (e.status === In.UnderReview) switch (e.onboardEntity) {
                        case yt.OnboardEntity.ExtensionsDeveloper:
                            t = i.createElement(N.Q, null, Object(h.d)("Your financial information is currently under review. This process usually takes a few minutes.", "PayoutInfoBrick"));
                            break;
                        case yt.OnboardEntity.Affiliate:
                        case yt.OnboardEntity.StandardPartner:
                        case yt.OnboardEntity.PremiumPartner:
                        case yt.OnboardEntity.CustomPartner:
                            t = i.createElement(N.Q, null, Object(h.d)("Your payout information is currently under review. This typically only takes a few minutes.", "PayoutInfoBrick"))
                    } else if (e.status === In.NotStarted) switch (e.onboardEntity) {
                        case yt.OnboardEntity.ExtensionsDeveloper:
                            t = i.createElement(i.Fragment, null, i.createElement(N._8, {
                                margin: {
                                    bottom: 1
                                }
                            }, i.createElement(N.Q, null, Object(h.d)("Provide additional financial information to continue this process and, further, providing this information enables you to participate with any monetization features that may become available.", "PayoutInfoBrick"))), i.createElement(N.Q, null, Object(h.d)('Because there are no monetization options and we have no way to pay you out at this time, please choose the "Hold Payouts" option on the following screen.', "PayoutInfoBrick")));
                            break;
                        case yt.OnboardEntity.Affiliate:
                            t = i.createElement(i.Fragment, null, i.createElement(N._8, {
                                margin: {
                                    bottom: 1
                                }
                            }, i.createElement(N.Q, null, Object(h.d)("Here you will choose how you want to get paid. You must accrue a minimum of $100 in revenue before you are eligible to receive a payout. Twitch uses a third party to process your payouts and the processor charges a transaction fee each time you get paid. The fees vary based on the payout method. See the fees <x:link>here.</x:link>", {
                                "x:link": function(e) {
                                    return i.createElement(N.O, {
                                        key: "affiliate-fees",
                                        to: "https://help.twitch.tv/customer/portal/articles/2785925-affiliate-onboarding-guide#fees",
                                        targetBlank: !0
                                    }, e)
                                }
                            }, "PayoutInfoBrick"))), i.createElement(N.Q, null, Object(h.d)('Choose "Hold Payouts" if you want us to hold your money until you are ready for a payout. Otherwise you will be paid automatically and charged a transaction fee each time you are paid out.', "PayoutInfoBrick")));
                            break;
                        case yt.OnboardEntity.StandardPartner:
                        case yt.OnboardEntity.PremiumPartner:
                        case yt.OnboardEntity.CustomPartner:
                            t = i.createElement(i.Fragment, null, i.createElement(N._8, {
                                margin: {
                                    bottom: 1
                                }
                            }, i.createElement(N.Q, null, Object(h.d)("Here you will choose how you want to get paid. You must accrue a minimum of $100 in revenue before you are eligible to receive a payout.", "PayoutInfoBrick"))), i.createElement(N.Q, null, Object(h.d)('Choose "Hold Payouts" if you want us to hold your money until you are ready for a payout. Otherwise you will be paid automatically.', "PayoutInfoBrick")))
                    }
                    return i.createElement(N._35, {
                        borderMarked: !0,
                        padding: 2,
                        margin: {
                            bottom: 2
                        },
                        elevation: 1
                    }, t)
            },
            Xn = function(e) {
                var t;
                switch (e.onboardEntity) {
                    case yt.OnboardEntity.Affiliate:
                        t = "https://help.twitch.tv/customer/portal/articles/2785925-affiliate-onboarding-guide";
                        break;
                    case yt.OnboardEntity.ExtensionsDeveloper:
                        t = "https://dev.twitch.tv/docs/extensions/onboarding";
                        break;
                    case yt.OnboardEntity.StandardPartner:
                    case yt.OnboardEntity.PremiumPartner:
                    case yt.OnboardEntity.CustomPartner:
                        t = "https://help.twitch.tv/customer/portal/articles/2853658-partner-onboarding-guide";
                        break;
                    default:
                        return null
                }
                return i.createElement(N.Q, {
                    type: N._49.P
                }, Object(h.d)("Need Help? <x:link>See our detailed onboarding guide.</x:link>", {
                    "x:link": function(e) {
                        return i.createElement(N.O, {
                            key: "onbording-guide",
                            to: t,
                            targetBlank: !0
                        }, e)
                    }
                }, "OnboardingGuideLink"))
            },
            Kn = function(e) {
                var t;
                return e.onboardEntity === yt.OnboardEntity.ExtensionsDeveloper ? (e.status === In.NotStarted && (t = i.createElement(N.Q, null, Object(h.d)("Click the button below to submit your financial information.", "PayoutInfoText"))), e.status === In.UnderReview && (t = i.createElement(N.Q, null, Object(h.d)("You can change your financial information if you wish to modify any previously submitted information. You may want to do this if your financial information has been under review for more than 48 hours.", "PayoutInfoText"))), e.status === In.Completed && (t = i.createElement(i.Fragment, null, i.createElement(N._8, {
                    margin: {
                        bottom: 1
                    }
                }, i.createElement(N.Q, null, Object(h.d)("Your financial information was successfully validated.", "PayoutInfoText"))), i.createElement(N.Q, null, Object(h.d)("Click the button below if you wish to modify or correct any previously submitted financial information. Please note that this will erase your existing financial information and you will need to fully complete the form again.", "PayoutInfoText"))))) : (e.status === In.NotStarted && (t = i.createElement(N.Q, null, Object(h.d)("Click the button below to submit your payout method.", "PayoutInfoText"))), e.status === In.UnderReview && (t = i.createElement(N.Q, null, Object(h.d)("You can change your payout method if you wish to modify any previously submitted information. You may want to do this if your payout information has been under review for more than 48 hours.", "PayoutInfoText"))), e.status === In.Completed && (t = i.createElement(i.Fragment, null, i.createElement(N._8, {
                    margin: {
                        bottom: 1
                    }
                }, i.createElement(N.Q, null, Object(h.d)("Your payout information was successfully validated.", "PayoutInfoText"))), i.createElement(N.Q, null, Object(h.d)("Click the button below if you wish to modify or correct any previously submitted payout information. Please note that this will erase your existing payout information and you will need to fully complete the form again.", "PayoutInfoText"))))), i.createElement(i.Fragment, null, i.createElement(N._8, {
                    margin: {
                        bottom: 2
                    }
                }, t), e.status !== In.Completed && i.createElement(N._8, {
                    margin: {
                        bottom: 2
                    }
                }, i.createElement(Xn, {
                    onboardEntity: e.onboardEntity
                })))
            },
            $n = n("+8VM"),
            Jn = n("yDzg"),
            Zn = (n("mfHG"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        tipaltiIframeLoaded: !1
                    }, t.onIframeLoad = function() {
                        t.setState({
                            tipaltiIframeLoaded: !0
                        })
                    }, t
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    var e = this;
                    return i.createElement(N._8, {
                        className: "tipalti-iframe--container"
                    }, !this.state.tipaltiIframeLoaded && i.createElement(N._10, {
                        fillContent: !0
                    }), i.createElement(N._8, {
                        "data-test-selector": "tipalti-iframe__iframe-container",
                        fullHeight: !0,
                        display: this.state.tipaltiIframeLoaded ? N.R.Block : N.R.Hide
                    }, i.createElement("iframe", {
                        "data-test-selector": "tipalti-iframe__tipalti-iframe",
                        ref: function(t) {
                            return e.iframe = t
                        },
                        src: this.props.tipaltiURL,
                        onLoad: this.onIframeLoad,
                        width: "100%",
                        height: "100%"
                    })))
                }, t
            }(i.Component)),
            ea = n("uAAQ"),
            ta = (n("212O"), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    return this.props.data.loading ? i.createElement(N._35, {
                        className: "payout-method-modal__container",
                        background: N.n.Base,
                        padding: 5
                    }, i.createElement(N._10, {
                        fillContent: !0
                    })) : this.props.data.error ? i.createElement(N._35, {
                        className: "payout-method-modal__container",
                        background: N.n.Base,
                        padding: 5
                    }, i.createElement(c.a, {
                        message: Object(h.d)("Oops, something went wrong.", "PayoutMethodModal")
                    })) : i.createElement(N._35, {
                        className: "payout-method-modal__container",
                        background: N.n.Base,
                        padding: 2
                    }, i.createElement(Zn, {
                        tipaltiURL: this.tipaltiURL
                    }))
                }, Object.defineProperty(t.prototype, "tipaltiURL", {
                    get: function() {
                        return this.props.data.currentUser.payoutInvite.workflow.payoutSettingsURL
                    },
                    enumerable: !0,
                    configurable: !0
                }), t
            }(i.Component)),
            na = Object(g.d)(Object(m.a)(ea, {
                options: function() {
                    return {
                        variables: {
                            redirectURL: Object(Jn.a)(window.location.href, {
                                redirect_tipalti: "true"
                            })
                        }
                    }
                }
            }))(ta),
            aa = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    return i.createElement(i.Fragment, null, i.createElement(na, null), i.createElement($n.a, {
                        closeOnBackdropClick: !0
                    }))
                }, t
            }(i.Component);
        ! function(e) {
            e.ContinueButton = "payout-onboarding-payout-method__continue-button", e.HeaderStatus = "payout-onboarding-payout-method__header-status"
        }(Pn || (Pn = {})),
        function(e) {
            e[e.NotStarted = 0] = "NotStarted", e[e.UnderReview = 1] = "UnderReview", e[e.Completed = 2] = "Completed"
        }(In || (In = {}));
        var ra = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.openPayoutMethodModal = function() {
                    t.props.showPayoutMethodModal()
                }, t.handleContinueClick = function() {
                    var e = t.props.onboardEntity === yt.OnboardEntity.CustomPartner ? yt.OnboardStep.Review : yt.OnboardStep.Summary;
                    t.props.updateStepDisplayed(e)
                }, t
            }
            return r.__extends(t, e), t.prototype.render = function() {
                return i.createElement(_.a, null, i.createElement(Vn, {
                    title: Object(h.d)("Payout Method", "PayoutOnboardingPayoutMethod"),
                    statusText: this.payoutStatusText,
                    statusType: this.payoutStatusType,
                    borderTop: !0,
                    "data-test-selector": Pn.HeaderStatus
                }), i.createElement(N._35, {
                    borderTop: !0,
                    borderBottom: !0,
                    padding: 2
                }, i.createElement(Hn, {
                    onboardEntity: this.props.onboardEntity,
                    status: this.payoutMethodStatus
                }), i.createElement(Kn, {
                    onboardEntity: this.props.onboardEntity,
                    status: this.payoutMethodStatus
                }), i.createElement(N.v, {
                    onClick: this.openPayoutMethodModal,
                    type: this.payoutMethodStatus === In.NotStarted ? N.B.Default : N.B.Hollow
                }, this.payoutMethodButtonText)), i.createElement(N._35, {
                    padding: 2,
                    background: N.n.Alt2
                }, i.createElement(N.v, {
                    "data-test-selector": Pn.ContinueButton,
                    size: N.z.Large,
                    onClick: this.handleContinueClick,
                    disabled: this.continueButtonDisabled
                }, Object(h.d)("Continue", "PayoutOnboardingPayoutMethod"))))
            }, Object.defineProperty(t.prototype, "isExtensionsDeveloperOnboarding", {
                get: function() {
                    return this.props.onboardEntity === yt.OnboardEntity.ExtensionsDeveloper
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "payoutMethodStatus", {
                get: function() {
                    switch (this.props.workflow.currentStep) {
                        case yt.WorkflowState.PAYOUT_METHOD_PENDING:
                            return In.UnderReview;
                        case yt.WorkflowState.COMPLETED:
                        case yt.WorkflowState.REVIEW_PENDING:
                        case yt.WorkflowState.AGREEMENT_PENDING_UPGRADE:
                            return In.Completed;
                        default:
                            return In.NotStarted
                    }
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "payoutStatusText", {
                get: function() {
                    switch (this.payoutMethodStatus) {
                        case In.UnderReview:
                            return Object(h.d)("Under Review", "PayoutOnboardingPayoutMethod");
                        case In.Completed:
                            return Object(h.d)("Completed", "PayoutOnboardingPayoutMethod");
                        default:
                            return Object(h.d)("Not Started", "PayoutOnboardingPayoutMethod")
                    }
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "payoutStatusType", {
                get: function() {
                    switch (this.payoutMethodStatus) {
                        case In.UnderReview:
                            return N._13.Warn;
                        case In.Completed:
                            return N._13.Success;
                        default:
                            return
                    }
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "payoutMethodButtonText", {
                get: function() {
                    return this.isExtensionsDeveloperOnboarding ? this.payoutMethodStatus === In.NotStarted ? Object(h.d)("Set Financial Information", "PayoutOnboardingPayoutMethod") : Object(h.d)("Change Financial Information", "PayoutOnboardingPayoutMethod") : this.payoutMethodStatus === In.NotStarted ? Object(h.d)("Set Payout Method", "PayoutOnboardingPayoutMethod") : Object(h.d)("Change Payout Method", "PayoutOnboardingPayoutMethod")
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "continueButtonDisabled", {
                get: function() {
                    var e = this.props.workflow.currentStep;
                    return e !== yt.WorkflowState.COMPLETED && e !== yt.WorkflowState.REVIEW_PENDING
                },
                enumerable: !0,
                configurable: !0
            }), t
        }(i.Component);
        var ia, oa = Object(g.d)(Object(He.b)(null, function(e) {
                return Object(g.b)({
                    showPayoutMethodModal: function() {
                        return Object(Xe.d)(aa, null)
                    }
                }, e)
            }))(ra),
            sa = /^[\s\da-zA-Z&\-,‘'\/#\.%]*$/,
            la = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
            ca = function() {
                return Object(h.d)("Only the English alphabet (non-accented Latin characters), numbers, and these special characters & - , ‘ / # . % are accepted.", "PayoutOnboardingRegistration")
            },
            da = function() {
                return Object(h.d)("Must provide a valid email address.", "PayoutOnboardingRegistration")
            },
            ua = function() {
                return Object(h.d)("optional", "PayoutOnboardingRegistration")
            };
        ! function(e) {
            e.FIRST_NAME = "contact-info__first-name", e.MIDDLE_NAME = "contact-info__middle-name", e.LAST_NAME = "contact-info__last-name", e.EMAIL = "contact-info__email", e.CONFIRM_EMAIL = "contact-info__confirm-email", e.COMPANY_LEGAL_NAME = "contact-info__company-legal-name"
        }(ia || (ia = {}));
        var ma, pa = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.state = {
                    firstName: "",
                    middleName: "",
                    lastName: "",
                    email: "",
                    confirmEmail: "",
                    companyName: "",
                    emailFocused: !1,
                    confirmEmailFocused: !1
                }, t.onEmailBlur = function() {
                    t.setState({
                        emailFocused: !1,
                        confirmEmailFocused: !1
                    })
                }, t.onEmailFocus = function() {
                    t.setState({
                        emailFocused: !0,
                        confirmEmailFocused: !0
                    })
                }, t.onConfirmEmailBlur = function() {
                    t.setState({
                        confirmEmailFocused: !1
                    })
                }, t.onConfirmEmailFocus = function() {
                    t.setState({
                        confirmEmailFocused: !0
                    })
                }, t.updateFirstName = function(e) {
                    var n = e.target.value;
                    t.setState({
                        firstName: n
                    }), t.props.onFirstNameChange(n)
                }, t.updateMiddleName = function(e) {
                    var n = e.target.value;
                    t.setState({
                        middleName: n
                    }), t.props.onMiddleNameChange(n)
                }, t.updateLastName = function(e) {
                    var n = e.target.value;
                    t.setState({
                        lastName: n
                    }), t.props.onLastNameChange(n)
                }, t.updateEmail = function(e) {
                    var n = e.target.value;
                    t.setState({
                        email: n
                    }), t.props.onEmailChange(n)
                }, t.updateConfirmEmail = function(e) {
                    var n = e.target.value;
                    t.setState({
                        confirmEmail: n
                    }), t.props.onConfirmEmailChange(n)
                }, t.updateCompanyName = function(e) {
                    var n = e.target.value;
                    t.setState({
                        companyName: n
                    }), t.props.onCompanyNameChange(n)
                }, t
            }
            return r.__extends(t, e), Object.defineProperty(t.prototype, "invalidFormatErrorMessage", {
                get: function() {
                    return ca()
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "invalidEmailErrorMessage", {
                get: function() {
                    return da()
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "optionalText", {
                get: function() {
                    return ua()
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.render = function() {
                return i.createElement(N._8, {
                    padding: 2
                }, i.createElement(N._8, {
                    margin: {
                        bottom: 2
                    }
                }, i.createElement(N.W, {
                    label: Object(h.d)("Channel Name", "ContactInfo")
                }, i.createElement(N._4, {
                    type: N._5.Text,
                    value: this.props.channelName,
                    disabled: !0
                }))), i.createElement(N._8, {
                    margin: {
                        bottom: 2
                    }
                }, i.createElement(N.W, {
                    label: Object(h.d)("First Name", "ContactInfo"),
                    error: !sa.test(this.state.firstName),
                    errorMessage: this.invalidFormatErrorMessage,
                    "data-test-selector": ia.FIRST_NAME
                }, i.createElement(N._4, {
                    autoFocus: !0,
                    type: N._5.Text,
                    value: this.state.firstName,
                    onChange: this.updateFirstName,
                    error: !sa.test(this.state.firstName)
                }))), i.createElement(N._8, {
                    margin: {
                        bottom: 2
                    }
                }, i.createElement(N.W, {
                    label: Object(h.d)("Middle Name", "ContactInfo"),
                    labelOptional: this.optionalText,
                    error: !sa.test(this.state.middleName),
                    errorMessage: this.invalidFormatErrorMessage,
                    "data-test-selector": ia.MIDDLE_NAME
                }, i.createElement(N._4, {
                    type: N._5.Text,
                    value: this.state.middleName,
                    onChange: this.updateMiddleName,
                    error: !sa.test(this.state.middleName)
                }))), i.createElement(N._8, {
                    margin: {
                        bottom: 2
                    }
                }, i.createElement(N.W, {
                    label: Object(h.d)("Last Name", "ContactInfo"),
                    hint: Object(h.d)("Please type your full legal name. This must be the name shown on your income tax return used to report income.", "ContactInfo"),
                    error: !sa.test(this.state.lastName),
                    errorMessage: this.invalidFormatErrorMessage,
                    "data-test-selector": ia.LAST_NAME
                }, i.createElement(N._4, {
                    type: N._5.Text,
                    value: this.state.lastName,
                    onChange: this.updateLastName,
                    error: !sa.test(this.state.lastName)
                }))), i.createElement(N._8, {
                    margin: {
                        bottom: 2
                    }
                }, i.createElement(Ga, {
                    onMonthChange: this.props.onMonthChange,
                    onDayChange: this.props.onDayChange,
                    onYearChange: this.props.onYearChange
                })), i.createElement(N._8, {
                    margin: {
                        bottom: 2
                    }
                }, i.createElement(N.W, {
                    label: Object(h.d)("Email", "ContactInfo"),
                    hint: Object(h.d)("We will use this email to send you important tax documentation and payout information.", "ContactInfo"),
                    error: this.showEmailError,
                    errorMessage: this.invalidEmailErrorMessage,
                    "data-test-selector": ia.EMAIL
                }, i.createElement(N._4, {
                    type: N._5.Email,
                    value: this.state.email,
                    onChange: this.updateEmail,
                    onFocus: this.onEmailFocus,
                    onBlur: this.onEmailBlur,
                    error: this.showEmailError
                }))), i.createElement(N._8, {
                    margin: {
                        bottom: 2
                    }
                }, i.createElement(N.W, {
                    label: Object(h.d)("Confirm Email", "ContactInfo"),
                    error: this.showConfirmEmailError,
                    errorMessage: Object(h.d)("Email addresses must match.", "ContactInfo"),
                    "data-test-selector": ia.CONFIRM_EMAIL
                }, i.createElement(N._4, {
                    type: N._5.Email,
                    value: this.state.confirmEmail,
                    onChange: this.updateConfirmEmail,
                    onFocus: this.onConfirmEmailFocus,
                    onBlur: this.onConfirmEmailBlur,
                    error: this.showConfirmEmailError
                }))), i.createElement(N._8, null, i.createElement(N.W, {
                    label: Object(h.d)("Company Legal Name", "ContactInfo"),
                    labelOptional: this.optionalText,
                    error: !sa.test(this.state.companyName),
                    errorMessage: this.invalidFormatErrorMessage,
                    "data-test-selector": ia.COMPANY_LEGAL_NAME
                }, i.createElement(N._4, {
                    type: N._5.Text,
                    value: this.state.companyName,
                    onChange: this.updateCompanyName,
                    error: !sa.test(this.state.companyName)
                }))))
            }, Object.defineProperty(t.prototype, "showEmailError", {
                get: function() {
                    return !this.state.emailFocused && !!this.state.email && !la.test(this.state.email)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "showConfirmEmailError", {
                get: function() {
                    return !this.state.emailFocused && !this.state.confirmEmailFocused && !!this.state.email && this.state.email !== this.state.confirmEmail
                },
                enumerable: !0,
                configurable: !0
            }), t
        }(i.Component);
        ! function(e) {
            e.PARENT_NAME = "parent-info__parent-name", e.PARENT_EMAIL = "parent-info__parent-email"
        }(ma || (ma = {}));
        var ga = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.state = {
                    parentName: "",
                    parentEmail: ""
                }, t.updateParentName = function(e) {
                    var n = e.target.value;
                    t.setState({
                        parentName: n
                    }), t.props.onParentNameChange(n)
                }, t.updateParentEmail = function(e) {
                    var n = e.target.value;
                    t.setState({
                        parentEmail: n
                    }), t.props.onParentEmailChange(n)
                }, t
            }
            return r.__extends(t, e), t.prototype.componentWillUnmount = function() {
                this.props.onParentNameChange(""), this.props.onParentEmailChange("")
            }, Object.defineProperty(t.prototype, "invalidFormatErrorMessage", {
                get: function() {
                    return ca()
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "invalidEmailErrorMessage", {
                get: function() {
                    return da()
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.render = function() {
                return i.createElement(N._8, {
                    padding: 2
                }, i.createElement(N._8, {
                    margin: {
                        bottom: 2
                    }
                }, i.createElement(N.W, {
                    label: Object(h.d)("Parent or Legal Guardian Name", "ParentInfo"),
                    error: !sa.test(this.state.parentName),
                    errorMessage: this.invalidFormatErrorMessage,
                    "data-test-selector": ma.PARENT_NAME
                }, i.createElement(N._4, {
                    type: N._5.Text,
                    value: this.state.parentName,
                    onChange: this.updateParentName,
                    error: !sa.test(this.state.parentName)
                }))), i.createElement(N._8, null, i.createElement(N.W, {
                    label: Object(h.d)("Parent or Legal Guardian Email", "ParentInfo"),
                    hint: Object(h.d)("Individuals under the age of 18 must provide parent or legal guardian information.", "ParentInfo"),
                    error: !!this.state.parentEmail && !la.test(this.state.parentEmail),
                    errorMessage: this.invalidEmailErrorMessage,
                    "data-test-selector": ma.PARENT_EMAIL
                }, i.createElement(N._4, {
                    type: N._5.Email,
                    value: this.state.parentEmail,
                    onChange: this.updateParentEmail,
                    error: !!this.state.parentEmail && !la.test(this.state.parentEmail)
                }))))
            }, t
        }(i.Component);

        function ha(e) {
            switch (e.toUpperCase()) {
                case "AB":
                    return Object(h.d)("Alberta", "format-canada-state");
                case "BC":
                    return Object(h.d)("British Columbia", "format-canada-state");
                case "MB":
                    return Object(h.d)("Manitoba", "format-canada-state");
                case "NB":
                    return Object(h.d)("New Brunswick", "format-canada-state");
                case "NL":
                    return Object(h.d)("Newfoundland and Labrador", "format-canada-state");
                case "NT":
                    return Object(h.d)("Northwest Territories", "format-canada-state");
                case "NS":
                    return Object(h.d)("Nova Scotia", "format-canada-state");
                case "NU":
                    return Object(h.d)("Nunavut", "format-canada-state");
                case "ON":
                    return Object(h.d)("Ontario", "format-canada-state");
                case "PE":
                    return Object(h.d)("Prince Edward Island", "format-canada-state");
                case "QC":
                    return Object(h.d)("Quebec", "format-canada-state");
                case "SK":
                    return Object(h.d)("Saskatchewan", "format-canada-state");
                case "YT":
                    return Object(h.d)("Yukon", "format-canada-state");
                default:
                    return e
            }
        }
        var ba = ["AB", "BC", "MB", "NB", "NL", "NT", "NS", "NU", "ON", "PE", "QC", "SK", "YT"],
            fa = n("yLtb");

        function Ea(e) {
            switch (e.toUpperCase()) {
                case "AL":
                    return Object(h.d)("Alabama", "format-usa-state");
                case "AK":
                    return Object(h.d)("Alaska", "format-usa-state");
                case "AZ":
                    return Object(h.d)("Arizona", "format-usa-state");
                case "AR":
                    return Object(h.d)("Arkansas", "format-usa-state");
                case "AA":
                    return Object(h.d)("Armed Forces Americas", "format-usa-state");
                case "AE":
                    return Object(h.d)("Armed Forces Europe/Middle East/Canada", "format-usa-state");
                case "AP":
                    return Object(h.d)("Armed Forces Pacific", "format-usa-state");
                case "CA":
                    return Object(h.d)("California", "format-usa-state");
                case "CO":
                    return Object(h.d)("Colorado", "format-usa-state");
                case "CT":
                    return Object(h.d)("Connecticut", "format-usa-state");
                case "DE":
                    return Object(h.d)("Delaware", "format-usa-state");
                case "DC":
                    return Object(h.d)("District of Columbia", "format-usa-state");
                case "FL":
                    return Object(h.d)("Florida", "format-usa-state");
                case "GA":
                    return Object(h.d)("Georgia", "format-usa-state");
                case "HI":
                    return Object(h.d)("Hawaii", "format-usa-state");
                case "ID":
                    return Object(h.d)("Idaho", "format-usa-state");
                case "IL":
                    return Object(h.d)("Illinois", "format-usa-state");
                case "IN":
                    return Object(h.d)("Indiana", "format-usa-state");
                case "IA":
                    return Object(h.d)("Iowa", "format-usa-state");
                case "KS":
                    return Object(h.d)("Kansas", "format-usa-state");
                case "KY":
                    return Object(h.d)("Kentucky", "format-usa-state");
                case "LA":
                    return Object(h.d)("Louisiana", "format-usa-state");
                case "ME":
                    return Object(h.d)("Maine", "format-usa-state");
                case "MD":
                    return Object(h.d)("Maryland", "format-usa-state");
                case "MA":
                    return Object(h.d)("Massachusetts", "format-usa-state");
                case "MI":
                    return Object(h.d)("Michigan", "format-usa-state");
                case "MN":
                    return Object(h.d)("Minnesota", "format-usa-state");
                case "MS":
                    return Object(h.d)("Mississippi", "format-usa-state");
                case "MO":
                    return Object(h.d)("Missouri", "format-usa-state");
                case "MT":
                    return Object(h.d)("Montana", "format-usa-state");
                case "NE":
                    return Object(h.d)("Nebraska", "format-usa-state");
                case "NV":
                    return Object(h.d)("Nevada", "format-usa-state");
                case "NH":
                    return Object(h.d)("New Hampshire", "format-usa-state");
                case "NJ":
                    return Object(h.d)("New Jersey", "format-usa-state");
                case "NM":
                    return Object(h.d)("New Mexico", "format-usa-state");
                case "NY":
                    return Object(h.d)("New York", "format-usa-state");
                case "NC":
                    return Object(h.d)("North Carolina", "format-usa-state");
                case "ND":
                    return Object(h.d)("North Dakota", "format-usa-state");
                case "OH":
                    return Object(h.d)("Ohio", "format-usa-state");
                case "OK":
                    return Object(h.d)("Oklahoma", "format-usa-state");
                case "OR":
                    return Object(h.d)("Oregon", "format-usa-state");
                case "PA":
                    return Object(h.d)("Pennsylvania", "format-usa-state");
                case "RI":
                    return Object(h.d)("Rhode Island", "format-usa-state");
                case "SC":
                    return Object(h.d)("South Carolina", "format-usa-state");
                case "SD":
                    return Object(h.d)("South Dakota", "format-usa-state");
                case "TN":
                    return Object(h.d)("Tennessee", "format-usa-state");
                case "TX":
                    return Object(h.d)("Texas", "format-usa-state");
                case "UT":
                    return Object(h.d)("Utah", "format-usa-state");
                case "VT":
                    return Object(h.d)("Vermont", "format-usa-state");
                case "VA":
                    return Object(h.d)("Virginia", "format-usa-state");
                case "WA":
                    return Object(h.d)("Washington", "format-usa-state");
                case "WV":
                    return Object(h.d)("West Virginia", "format-usa-state");
                case "WI":
                    return Object(h.d)("Wisconsin", "format-usa-state");
                case "WY":
                    return Object(h.d)("Wyoming", "format-usa-state");
                default:
                    return e
            }
        }
        var va, ya = ["AL", "AK", "AZ", "AR", "AA", "AE", "AP", "CA", "CO", "CT", "DE", "DC", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"],
            Sa = ["A1", "A2", "AP", "CU", "EU", "IR", "KP", "MM", "SD", "SS", "SY", "TL"];
        ! function(e) {
            e.COUNTRY = "permanent-address__country", e.STREET_ADDRESS = "permanent-address__street-address", e.STREET_ADDRESS_2 = "permanent-address__street-address-2", e.CITY = "permanent-address__city", e.STATE = "permanent-address__state", e.POSTAL = "permanent-address__postal"
        }(va || (va = {}));
        var ka, _a = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        country: "",
                        streetAddress: "",
                        streetAddress2: "",
                        city: "",
                        state: "",
                        postal: ""
                    }, t.countrySelections = fa.a.map(function(e) {
                        return Sa.includes(e) ? null : i.createElement("option", {
                            value: e,
                            key: "countryCode-" + e
                        }, Object(fa.b)(e))
                    }), t.usaStateSelections = ya.map(function(e) {
                        return i.createElement("option", {
                            value: e,
                            key: "usaStateCode-" + e
                        }, Ea(e))
                    }), t.canadaStateSelections = ba.map(function(e) {
                        return i.createElement("option", {
                            value: e,
                            key: "canadaState-" + e
                        }, ha(e))
                    }), t.handleCountryChange = function(e) {
                        var n = e.target.value,
                            a = "";
                        "US" === n ? a = "AL" : "CA" === n && (a = "AB"), t.setState({
                            country: n,
                            state: a
                        }), t.props.onCountryChange(n), t.props.onStateChange(a)
                    }, t.handleStreetAddressChange = function(e) {
                        var n = e.target.value;
                        t.setState({
                            streetAddress: n
                        }), t.props.onStreetAddressChange(n)
                    }, t.handleStreetAddress2Change = function(e) {
                        var n = e.target.value;
                        t.setState({
                            streetAddress2: n
                        }), t.props.onStreetAddress2Change(n)
                    }, t.handleCityChange = function(e) {
                        var n = e.target.value;
                        t.setState({
                            city: n
                        }), t.props.onCityChange(n)
                    }, t.handleStateInputChange = function(e) {
                        var n = e.target.value;
                        t.setState({
                            state: n
                        }), t.props.onStateChange(n)
                    }, t.handleStateSelectionChange = function(e) {
                        var n = e.target.value;
                        t.setState({
                            state: n
                        }), t.props.onStateChange(n)
                    }, t.handlePostalChange = function(e) {
                        var n = e.target.value;
                        t.setState({
                            postal: n
                        }), t.props.onPostalChange(n)
                    }, t.formatUniquePostalCodes = function(e) {
                        var n = e.target.value;
                        switch (t.state.country) {
                            case "CA":
                                /^[a-zA-Z0-9]{6}$/.test(n) && (n = n.slice(0, 3) + " " + n.slice(3));
                                break;
                            case "GB":
                                if (/^[a-zA-Z0-9]{7}$/.test(n)) {
                                    n = n.slice(0, 4) + " " + n.slice(4);
                                    break
                                }
                                if (/^[a-zA-Z0-9]{6}$/.test(n)) {
                                    n = n.slice(0, 3) + " " + n.slice(3);
                                    break
                                }
                                if (/^[a-zA-Z0-9]{5}$/.test(n)) {
                                    n = n.slice(0, 2) + " " + n.slice(2);
                                    break
                                }
                        }
                        t.setState({
                            postal: n
                        })
                    }, t
                }
                return r.__extends(t, e), Object.defineProperty(t.prototype, "invalidFormatErrorMessage", {
                    get: function() {
                        return ca()
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "optionalText", {
                    get: function() {
                        return ua()
                    },
                    enumerable: !0,
                    configurable: !0
                }), t.prototype.render = function() {
                    return i.createElement(i.Fragment, null, i.createElement(N._8, {
                        padding: {
                            x: 2,
                            top: 2,
                            bottom: 0
                        }
                    }, i.createElement(N.Q, {
                        fontSize: N.V.Size6
                    }, Object(h.d)("Your permanent address is your primary residential address. It is not your P.O. Box or mailing address. If you are a college student studying in another state, but still have a permanent address in your home state (such as your parents' house), then your home state is your principal residence address. If you are registering on behalf of a corporation, please input the primary headquarters address.", "PermanentAddress"))), i.createElement(N._8, {
                        className: "payout-onboarding-registration__form-container",
                        padding: 2
                    }, i.createElement(N._8, {
                        margin: {
                            bottom: 2
                        }
                    }, i.createElement(N.W, {
                        label: Object(h.d)("Country", "PermanentAddress")
                    }, i.createElement(N._30, {
                        defaultValue: "",
                        onChange: this.handleCountryChange,
                        "data-test-selector": va.COUNTRY
                    }, i.createElement("option", {
                        value: "",
                        disabled: !0
                    }), this.countrySelections))), i.createElement(N._8, {
                        margin: {
                            bottom: 2
                        }
                    }, i.createElement(N.W, {
                        label: Object(h.d)("Street Address", "PermanentAddress"),
                        error: !sa.test(this.state.streetAddress),
                        errorMessage: this.invalidFormatErrorMessage,
                        "data-test-selector": va.STREET_ADDRESS
                    }, i.createElement(N._4, {
                        type: N._5.Text,
                        value: this.state.streetAddress,
                        onChange: this.handleStreetAddressChange,
                        error: !sa.test(this.state.streetAddress)
                    }))), i.createElement(N._8, {
                        margin: {
                            bottom: 2
                        }
                    }, i.createElement(N.W, {
                        label: Object(h.d)("Street Address 2", "PermanentAddress"),
                        labelOptional: this.optionalText,
                        error: !sa.test(this.state.streetAddress2),
                        errorMessage: this.invalidFormatErrorMessage,
                        "data-test-selector": va.STREET_ADDRESS_2
                    }, i.createElement(N._4, {
                        type: N._5.Text,
                        value: this.state.streetAddress2,
                        onChange: this.handleStreetAddress2Change,
                        error: !sa.test(this.state.streetAddress2)
                    }))), i.createElement(N._8, {
                        margin: {
                            bottom: 2
                        }
                    }, i.createElement(N.W, {
                        label: Object(h.d)("City or Town", "PermanentAddress"),
                        error: !sa.test(this.state.city),
                        errorMessage: this.invalidFormatErrorMessage,
                        "data-test-selector": va.CITY
                    }, i.createElement(N._4, {
                        type: N._5.Text,
                        value: this.state.city,
                        onChange: this.handleCityChange,
                        error: !sa.test(this.state.city)
                    }))), i.createElement(N._8, {
                        margin: {
                            bottom: 2
                        }
                    }, i.createElement(N.W, {
                        label: Object(h.d)("State/Province", "PermanentAddress"),
                        labelOptional: "US" !== this.state.country && "CA" !== this.state.country ? this.optionalText : void 0,
                        error: !sa.test(this.state.state),
                        errorMessage: this.invalidFormatErrorMessage,
                        "data-test-selector": va.STATE
                    }, "US" === this.state.country && i.createElement(N._30, {
                        onChange: this.handleStateSelectionChange
                    }, this.usaStateSelections), "CA" === this.state.country && i.createElement(N._30, {
                        onChange: this.handleStateSelectionChange
                    }, this.canadaStateSelections), "US" !== this.state.country && "CA" !== this.state.country && i.createElement(N._4, {
                        type: N._5.Text,
                        value: this.state.state,
                        onChange: this.handleStateInputChange,
                        error: !sa.test(this.state.state)
                    }))), i.createElement(N._8, null, i.createElement(N.W, {
                        label: Object(h.d)("Zip Code/Postal Code", "PermanentAddress"),
                        labelOptional: "US" !== this.state.country ? this.optionalText : void 0,
                        error: !sa.test(this.state.postal),
                        errorMessage: this.invalidFormatErrorMessage,
                        "data-test-selector": va.POSTAL
                    }, i.createElement(N._4, {
                        type: N._5.Text,
                        value: this.state.postal,
                        onChange: this.handlePostalChange,
                        onBlur: this.formatUniquePostalCodes,
                        error: !sa.test(this.state.postal)
                    })))))
                }, t
            }(i.Component),
            Na = function() {
                return Object(h.d)("Please fill them out using the following guidelines: <x:link>Amazon Tax Information Interview Guidelines</x:link>", {
                    "x:link": function(e) {
                        return i.createElement(N.O, {
                            key: "amazon-tax-guidelines",
                            to: "https://developer.amazon.com/tax-interview/help?nodeId=201588330&locale=en_US",
                            targetBlank: !0
                        }, e)
                    }
                }, "RegistrationInfoBrick")
            },
            Ta = function() {
                return i.createElement(i.Fragment, null, i.createElement(N._8, {
                    margin: {
                        bottom: 1
                    }
                }, i.createElement(N.Q, {
                    fontSize: N.V.Size6
                }, Object(h.d)("Financial information is required to validate your identity. Further, providing this information enables you to participate with any monetization features that may become available.", "RegistrationInfoBrick"))), i.createElement(N._8, {
                    margin: {
                        bottom: 1
                    }
                }, i.createElement(N.Q, {
                    fontSize: N.V.Size6
                }, Object(h.d)("Twitch is a subsidiary of Amazon and will use some Amazon tools to register and approve your information for Extensions development.", "RegistrationInfoBrick"))), i.createElement(N._8, {
                    margin: {
                        bottom: 1
                    }
                }, i.createElement(N.Q, {
                    fontSize: N.V.Size6
                }, Na())), i.createElement(N._8, {
                    margin: {
                        bottom: 1
                    }
                }, i.createElement(N.Q, {
                    fontSize: N.V.Size6
                }, Object(h.d)("If you are registering on behalf of a company, please fill in the company's information. If you are an individual, please use your personal information.", "RegistrationInfoBrick"))), i.createElement(N._8, {
                    margin: {
                        bottom: 1
                    }
                }, i.createElement(N.Q, {
                    fontSize: N.V.Size6
                }, Object(h.d)("The form must match your tax information exactly and any inconsistencies may cause delays in your registration approval.", "RegistrationInfoBrick"))), i.createElement(N._8, null, i.createElement(N.Q, {
                    fontSize: N.V.Size6
                }, Object(h.d)("You will be able to edit this page later if your information changes.", "RegistrationInfoBrick"))))
            },
            Oa = function() {
                return i.createElement(i.Fragment, null, i.createElement(N._8, {
                    margin: {
                        bottom: 1
                    }
                }, i.createElement(N.Q, {
                    fontSize: N.V.Size6
                }, Object(h.d)("Twitch is a subsidiary of Amazon, and will use some Amazon tools to help you get paid, including the forms on this page.", "RegistrationInfoBrick"))), i.createElement(N._8, {
                    margin: {
                        bottom: 1
                    }
                }, i.createElement(N.Q, {
                    fontSize: N.V.Size6
                }, Na())), i.createElement(N.Q, {
                    fontSize: N.V.Size6
                }, Object(h.d)("This form must match your tax information exactly, and any inconsistencies may cause delays in your Payout Registration approval. Don't worry, you will still be able to edit this page later on if your information changes.", "RegistrationInfoBrick")))
            },
            Aa = function(e) {
                return i.createElement(i.Fragment, null, e.onboardEntity === yt.OnboardEntity.ExtensionsDeveloper ? i.createElement(Ta, null) : i.createElement(Oa, null))
            };
        ! function(e) {
            e.MONTH = "select-birthdate__month", e.YEAR = "select-birthdate__year", e.DAY = "select-birthdate__day"
        }(ka || (ka = {}));
        for (var Ca = [], Pa = (new Date).getFullYear(), Ia = Pa; Ia > Pa - 100; Ia--) Ca.push(i.createElement("option", {
            value: Ia,
            key: "year-" + Ia
        }, Ia));
        var wa, Ra, xa, Da, Fa, ja, La, Ma, Ua, Ba, Va, Wa, Qa, za, Ga = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        month: void 0,
                        year: void 0,
                        day: void 0
                    }, t.yearSelections = Ca, t.handleMonthChange = function(e) {
                        var n = +e.target.value;
                        return t.setState({
                            month: n
                        }), t.props.onMonthChange(n)
                    }, t.handleDayChange = function(e) {
                        var n = +e.target.value;
                        return t.setState({
                            day: n
                        }), t.props.onDayChange(n)
                    }, t.handleYearChange = function(e) {
                        var n = +e.target.value;
                        return t.setState({
                            year: n
                        }), t.props.onYearChange(n)
                    }, t.isUserYoungerThan = function(e) {
                        var n = t.state,
                            a = n.month,
                            r = n.day,
                            i = n.year;
                        if (void 0 === a || void 0 === r || void 0 === i) return !1;
                        var o = new Date(i, a, r);
                        return Object(jn.differenceInYears)(new Date, o) < e
                    }, t
                }
                return r.__extends(t, e), Object.defineProperty(t.prototype, "daySelections", {
                    get: function() {
                        for (var e = this.state.month, t = this.state.year || Pa, n = void 0 !== e ? new Date(t, e + 1, 0).getDate() : 31, a = [], r = 1; r <= n; r++) a.push(i.createElement("option", {
                            value: r,
                            key: "day-" + r
                        }, r));
                        return a
                    },
                    enumerable: !0,
                    configurable: !0
                }), t.prototype.render = function() {
                    return i.createElement(N.W, {
                        label: Object(h.d)("Date of Birth", "SelectBirthdate"),
                        hint: Object(h.d)("If you are registering on behalf of a company, please use your personal date of birth.", "SelectBirthdate"),
                        error: this.isUserYoungerThan(13),
                        errorMessage: Object(h.d)("You must be 13 or older to continue.", "SelectBirthdate")
                    }, i.createElement(N.Y, {
                        gutterSize: N.Z.Small
                    }, i.createElement(N.L, {
                        cols: {
                            default: 4
                        }
                    }, i.createElement(N._30, {
                        defaultValue: "",
                        onChange: this.handleMonthChange,
                        "data-test-selector": ka.MONTH
                    }, i.createElement("option", {
                        value: "",
                        disabled: !0
                    }, Object(h.d)("Month", "SelectBirthdate")), i.createElement("option", {
                        value: 0
                    }, Object(h.d)("January", "SelectBirthdate")), i.createElement("option", {
                        value: 1
                    }, Object(h.d)("February", "SelectBirthdate")), i.createElement("option", {
                        value: 2
                    }, Object(h.d)("March", "SelectBirthdate")), i.createElement("option", {
                        value: 3
                    }, Object(h.d)("April", "SelectBirthdate")), i.createElement("option", {
                        value: 4
                    }, Object(h.d)("May", "SelectBirthdate")), i.createElement("option", {
                        value: 5
                    }, Object(h.d)("June", "SelectBirthdate")), i.createElement("option", {
                        value: 6
                    }, Object(h.d)("July", "SelectBirthdate")), i.createElement("option", {
                        value: 7
                    }, Object(h.d)("August", "SelectBirthdate")), i.createElement("option", {
                        value: 8
                    }, Object(h.d)("September", "SelectBirthdate")), i.createElement("option", {
                        value: 9
                    }, Object(h.d)("October", "SelectBirthdate")), i.createElement("option", {
                        value: 10
                    }, Object(h.d)("November", "SelectBirthdate")), i.createElement("option", {
                        value: 11
                    }, Object(h.d)("December", "SelectBirthdate")))), i.createElement(N.L, {
                        cols: {
                            default: 4
                        }
                    }, i.createElement(N._30, {
                        defaultValue: "",
                        onChange: this.handleDayChange,
                        "data-test-selector": ka.DAY
                    }, i.createElement("option", {
                        value: "",
                        disabled: !0
                    }, Object(h.d)("Day", "SelectBirthdate")), this.daySelections)), i.createElement(N.L, {
                        cols: {
                            default: 4
                        }
                    }, i.createElement(N._30, {
                        defaultValue: "",
                        onChange: this.handleYearChange,
                        "data-test-selector": ka.YEAR
                    }, i.createElement("option", {
                        value: "",
                        disabled: !0
                    }, Object(h.d)("Year", "SelectBirthdate")), this.yearSelections))))
                }, t
            }(i.Component),
            Ya = n("pMje"),
            qa = (n("MQKV"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        firstName: "",
                        middleName: "",
                        lastName: "",
                        email: "",
                        confirmEmail: "",
                        companyName: "",
                        country: "",
                        streetAddress: "",
                        streetAddress2: "",
                        city: "",
                        state: "",
                        postal: "",
                        parentName: "",
                        parentEmail: "",
                        submittingRegistration: !1
                    }, t.updateFirstName = function(e) {
                        t.setState({
                            firstName: e
                        })
                    }, t.updateMiddleName = function(e) {
                        t.setState({
                            middleName: e
                        })
                    }, t.updateLastName = function(e) {
                        t.setState({
                            lastName: e
                        })
                    }, t.updateMonth = function(e) {
                        t.setState({
                            month: e
                        })
                    }, t.updateDay = function(e) {
                        t.setState({
                            day: e
                        })
                    }, t.updateYear = function(e) {
                        t.setState({
                            year: e
                        })
                    }, t.updateEmail = function(e) {
                        t.setState({
                            email: e
                        })
                    }, t.updateConfirmEmail = function(e) {
                        t.setState({
                            confirmEmail: e
                        })
                    }, t.updateCompanyName = function(e) {
                        t.setState({
                            companyName: e
                        })
                    }, t.updateCountry = function(e) {
                        t.setState({
                            country: e
                        })
                    }, t.updateStreetAddress = function(e) {
                        t.setState({
                            streetAddress: e
                        })
                    }, t.updateStreetAddress2 = function(e) {
                        t.setState({
                            streetAddress2: e
                        })
                    }, t.updateCity = function(e) {
                        t.setState({
                            city: e
                        })
                    }, t.updateState = function(e) {
                        t.setState({
                            state: e
                        })
                    }, t.updatePostal = function(e) {
                        t.setState({
                            postal: e
                        })
                    }, t.updateParentName = function(e) {
                        t.setState({
                            parentName: e
                        })
                    }, t.updateParentEmail = function(e) {
                        t.setState({
                            parentEmail: e
                        })
                    }, t.isUserYoungerThan = function(e) {
                        var n = t.state,
                            a = n.month,
                            r = n.day,
                            i = n.year;
                        if (void 0 === a || void 0 === r || void 0 === i) return !1;
                        var o = new Date(i, a, r);
                        return Object(jn.differenceInYears)(new Date, o) < e
                    }, t.handleContinueClick = function() {
                        t.setState({
                            submittingRegistration: !0
                        }), t.submitPayoutRegistration()
                    }, t.submitPayoutRegistration = function() {
                        return r.__awaiter(t, void 0, void 0, function() {
                            var e, t, n, a, i, o, s, l;
                            return r.__generator(this, function(c) {
                                switch (c.label) {
                                    case 0:
                                        if (e = this.state, t = e.year, n = e.month, a = e.day, void 0 === n || void 0 === a || void 0 === t) return [2];
                                        i = new Date(t, n, a), o = r.__assign({}, Object(b.a)({
                                            targetUserID: this.props.userID,
                                            birthdate: i,
                                            city: this.state.city,
                                            companyName: this.state.companyName,
                                            countryCode: this.state.country,
                                            email: this.state.email,
                                            firstName: this.state.firstName,
                                            lastName: this.state.lastName,
                                            middleName: this.state.middleName,
                                            postal: this.state.postal,
                                            stateCode: this.state.state,
                                            streetAddress: this.state.streetAddress,
                                            streetAddress2: this.state.streetAddress2,
                                            parentName: this.state.parentName,
                                            parentEmail: this.state.parentEmail
                                        })), c.label = 1;
                                    case 1:
                                        return c.trys.push([1, 3, , 4]), [4, this.props.registerPayoutInformation(o)];
                                    case 2:
                                        return (s = c.sent()).data.registerPayoutInformation.error ? (this.setState({
                                            submittingRegistration: !1
                                        }), [2]) : (l = function(e) {
                                            return e.currentUser.payoutInvite.workflow && s.data.registerPayoutInformation.workflow && (e.currentUser.payoutInvite.workflow.currentStep = s.data.registerPayoutInformation.workflow.currentStep, e.currentUser.payoutInvite.workflow.registration = s.data.registerPayoutInformation.workflow.registration), e
                                        }, this.props.updateContainerQuery(l), this.props.updateStepDisplayed(yt.OnboardStep.Agreement), [3, 4]);
                                    case 3:
                                        return c.sent(), this.setState({
                                            submittingRegistration: !1
                                        }), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, t
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    var e = i.createElement(N.v, {
                        "data-test-selector": "payout-onboarding-registration__continue-button",
                        type: N.B.Default,
                        size: N.z.Large,
                        disabled: !this.isRegistrationComplete || this.state.submittingRegistration,
                        state: this.state.submittingRegistration ? N.A.Loading : N.A.Default,
                        onClick: this.handleContinueClick
                    }, Object(h.d)("Continue", "PayoutOnboardingRegistration"));
                    return i.createElement(_.a, {
                        footer: e
                    }, i.createElement(k.a, null, i.createElement(Aa, {
                        onboardEntity: this.props.onboardEntity
                    })), i.createElement(Vn, {
                        title: Object(h.d)("Contact Info", "PayoutOnboardingRegistration")
                    }), i.createElement(N._8, {
                        className: "payout-onboarding-registration__form-container"
                    }, i.createElement(pa, {
                        channelName: this.props.channelName,
                        onFirstNameChange: this.updateFirstName,
                        onMiddleNameChange: this.updateMiddleName,
                        onLastNameChange: this.updateLastName,
                        onMonthChange: this.updateMonth,
                        onDayChange: this.updateDay,
                        onYearChange: this.updateYear,
                        onEmailChange: this.updateEmail,
                        onConfirmEmailChange: this.updateConfirmEmail,
                        onCompanyNameChange: this.updateCompanyName
                    })), i.createElement(Vn, {
                        title: Object(h.d)("Permanent Address", "PayoutOnboardingRegistration")
                    }), i.createElement(_a, {
                        onCountryChange: this.updateCountry,
                        onStreetAddressChange: this.updateStreetAddress,
                        onStreetAddress2Change: this.updateStreetAddress2,
                        onCityChange: this.updateCity,
                        onStateChange: this.updateState,
                        onPostalChange: this.updatePostal
                    }), this.isUserYoungerThan(18) && i.createElement(i.Fragment, null, i.createElement(Vn, {
                        title: Object(h.d)("Parent Info", "PayoutOnboardingRegistration")
                    }), i.createElement(N._8, {
                        className: "payout-onboarding-registration__form-container"
                    }, i.createElement(ga, {
                        onParentNameChange: this.updateParentName,
                        onParentEmailChange: this.updateParentEmail
                    }))))
                }, Object.defineProperty(t.prototype, "isRegistrationComplete", {
                    get: function() {
                        return this.requiredFieldsEntered && this.validPermanentAddress && this.validEmail && this.validAge && this.validInputFormat
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "requiredFieldsEntered", {
                    get: function() {
                        return !!(this.state.firstName && this.state.lastName && this.state.email && void 0 !== this.state.month && void 0 !== this.state.day && void 0 !== this.state.year && this.state.country && this.state.streetAddress && this.state.city)
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "validPermanentAddress", {
                    get: function() {
                        return !!("US" !== this.state.country || this.state.state && this.state.postal)
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "validEmail", {
                    get: function() {
                        return la.test(this.state.email) && this.state.email === this.state.confirmEmail
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "validAge", {
                    get: function() {
                        return !this.isUserYoungerThan(13) && !(this.isUserYoungerThan(18) && !(this.state.parentName && sa.test(this.state.parentName) && this.state.parentEmail && la.test(this.state.parentEmail)))
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "validInputFormat", {
                    get: function() {
                        return !!(sa.test(this.state.firstName) && sa.test(this.state.lastName) && sa.test(this.state.country) && sa.test(this.state.streetAddress) && sa.test(this.state.city)) && !(this.state.middleName && !sa.test(this.state.middleName) || this.state.companyName && !sa.test(this.state.companyName) || this.state.streetAddress2 && !sa.test(this.state.streetAddress2) || this.state.state && !sa.test(this.state.state) || this.state.postal && !sa.test(this.state.postal))
                    },
                    enumerable: !0,
                    configurable: !0
                }), t
            }(i.Component)),
            Ha = Object(g.d)(Object(m.a)(Ya, {
                name: "registerPayoutInformation"
            }))(qa),
            Xa = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.handleContinueClick = function() {
                        t.props.updateStepDisplayed(yt.OnboardStep.Summary)
                    }, t
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    return i.createElement(_.a, null, i.createElement(Vn, {
                        title: Object(h.d)("Partnership Approval", "PayoutOnboardingReview"),
                        statusText: this.statusText,
                        statusType: this.statusType,
                        borderTop: !0
                    }), i.createElement(N._35, {
                        borderTop: !0,
                        borderBottom: !0,
                        padding: 2
                    }, i.createElement(N._35, {
                        borderMarked: !0,
                        padding: 2
                    }, this.inReview ? Object(h.d)("Your information is currently under review.", "PayoutOnboardingReview") : Object(h.d)("Your information has been validated by the Partnership Team.", "PayoutOnboardingReview"))), i.createElement(N._8, {
                        padding: 2
                    }, i.createElement(N.v, {
                        onClick: this.handleContinueClick,
                        disabled: this.inReview
                    }, Object(h.d)("Continue", "PayoutOnboardingReview"))))
                }, Object.defineProperty(t.prototype, "inReview", {
                    get: function() {
                        return this.props.workflow.currentStep === yt.WorkflowState.REVIEW_PENDING
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "statusText", {
                    get: function() {
                        return this.inReview ? Object(h.d)("Under Review", "PayoutOnboardingReview") : Object(h.d)("Completed", "PayoutOnboardingReview")
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "statusType", {
                    get: function() {
                        return this.inReview ? N._13.Warn : N._13.Success
                    },
                    enumerable: !0,
                    configurable: !0
                }), t
            }(i.Component),
            Ka = function() {
                return Object(h.d)("Partner Onboarding", "PayoutOnboardingContainer")
            },
            $a = function() {
                return Object(h.d)("Manage or modify your payout information.", "PayoutOnboardingContainer")
            },
            Ja = function() {
                return Object(h.d)("Payout Registration", "PayoutOnboardingContainer")
            },
            Za = function() {
                return Object(h.d)("Begin your payout registration.", "PayoutOnboardingContainer")
            },
            er = function() {
                return Object(h.d)("Twitch Partner Agreement", "PayoutOnboardingContainer")
            },
            tr = function() {
                return Object(h.d)("Agree to the Twitch Partner Agreement.", "PayoutOnboardingContainer")
            },
            nr = function() {
                return Object(h.d)("Tax Interviews", "PayoutOnboardingContainer")
            },
            ar = function() {
                return Object(h.d)("Submit your tax information. The two forms below are very similar, but the information is used for different situations, so both forms are required and should be filled out carefully.", "PayoutOnboardingContainer")
            },
            rr = function() {
                return Object(h.d)("Payout Setup", "PayoutOnboardingContainer")
            },
            ir = function() {
                return Object(h.d)("Choose your payout method.", "PayoutOnboardingContainer")
            },
            or = ((wa = {})[yt.OnboardStep.Summary] = {
                title: (Ra = {}, Ra[yt.OnboardEntity.Affiliate] = function() {
                    return Object(h.d)("Affiliate Onboarding", "PayoutOnboardingContainer")
                }, Ra[yt.OnboardEntity.ExtensionsDeveloper] = function() {
                    return Object(h.d)("Extensions Developer Onboarding", "PayoutOnboardingContainer")
                }, Ra[yt.OnboardEntity.StandardPartner] = function() {
                    return Ka()
                }, Ra[yt.OnboardEntity.PremiumPartner] = function() {
                    return Ka()
                }, Ra[yt.OnboardEntity.CustomPartner] = function() {
                    return Ka()
                }, Ra),
                description: (xa = {}, xa[yt.OnboardEntity.Affiliate] = function() {
                    return $a()
                }, xa[yt.OnboardEntity.ExtensionsDeveloper] = function() {
                    return Object(h.d)("Manage or modify your Extensions Developer Onboarding.", "PayoutOnboardingContainer")
                }, xa[yt.OnboardEntity.StandardPartner] = function() {
                    return $a()
                }, xa[yt.OnboardEntity.PremiumPartner] = function() {
                    return $a()
                }, xa[yt.OnboardEntity.CustomPartner] = function() {
                    return $a()
                }, xa)
            }, wa[yt.OnboardStep.Registration] = {
                title: (Da = {}, Da[yt.OnboardEntity.Affiliate] = function() {
                    return Ja()
                }, Da[yt.OnboardEntity.ExtensionsDeveloper] = function() {
                    return Object(h.d)("Extensions Developer Registration", "PayoutOnboardingContainer")
                }, Da[yt.OnboardEntity.StandardPartner] = function() {
                    return Ja()
                }, Da[yt.OnboardEntity.PremiumPartner] = function() {
                    return Ja()
                }, Da[yt.OnboardEntity.CustomPartner] = function() {
                    return Ja()
                }, Da),
                description: (Fa = {}, Fa[yt.OnboardEntity.Affiliate] = function() {
                    return Za()
                }, Fa[yt.OnboardEntity.ExtensionsDeveloper] = function() {
                    return Object(h.d)("Begin your Extensions Developer Registration.", "PayoutOnboardingContainer")
                }, Fa[yt.OnboardEntity.StandardPartner] = function() {
                    return Za()
                }, Fa[yt.OnboardEntity.PremiumPartner] = function() {
                    return Za()
                }, Fa[yt.OnboardEntity.CustomPartner] = function() {
                    return Za()
                }, Fa)
            }, wa[yt.OnboardStep.Agreement] = {
                title: (ja = {}, ja[yt.OnboardEntity.Affiliate] = function() {
                    return Object(h.d)("Twitch Affiliate Agreement", "PayoutOnboardingContainer")
                }, ja[yt.OnboardEntity.ExtensionsDeveloper] = function() {
                    return Object(h.d)("Twitch Extensions Developer Agreement", "PayoutOnboardingContainer")
                }, ja[yt.OnboardEntity.StandardPartner] = function() {
                    return er()
                }, ja[yt.OnboardEntity.PremiumPartner] = function() {
                    return er()
                }, ja[yt.OnboardEntity.CustomPartner] = function() {
                    return er()
                }, ja),
                description: (La = {}, La[yt.OnboardEntity.Affiliate] = function() {
                    return Object(h.d)("Agree to the Twitch Affiliate Agreement.", "PayoutOnboardingContainer")
                }, La[yt.OnboardEntity.ExtensionsDeveloper] = function() {
                    return Object(h.d)("Agree to the Twitch Extensions Developer Agreement.", "PayoutOnboardingContainer")
                }, La[yt.OnboardEntity.StandardPartner] = function() {
                    return tr()
                }, La[yt.OnboardEntity.PremiumPartner] = function() {
                    return tr()
                }, La[yt.OnboardEntity.CustomPartner] = function() {
                    return tr()
                }, La)
            }, wa[yt.OnboardStep.TaxInterview] = {
                title: (Ma = {}, Ma[yt.OnboardEntity.Affiliate] = function() {
                    return nr()
                }, Ma[yt.OnboardEntity.ExtensionsDeveloper] = function() {
                    return nr()
                }, Ma[yt.OnboardEntity.StandardPartner] = function() {
                    return nr()
                }, Ma[yt.OnboardEntity.PremiumPartner] = function() {
                    return nr()
                }, Ma[yt.OnboardEntity.CustomPartner] = function() {
                    return nr()
                }, Ma),
                description: (Ua = {}, Ua[yt.OnboardEntity.Affiliate] = function() {
                    return ar()
                }, Ua[yt.OnboardEntity.ExtensionsDeveloper] = function() {
                    return ar()
                }, Ua[yt.OnboardEntity.StandardPartner] = function() {
                    return ar()
                }, Ua[yt.OnboardEntity.PremiumPartner] = function() {
                    return ar()
                }, Ua[yt.OnboardEntity.CustomPartner] = function() {
                    return ar()
                }, Ua)
            }, wa[yt.OnboardStep.PayoutMethod] = {
                title: (Ba = {}, Ba[yt.OnboardEntity.Affiliate] = function() {
                    return rr()
                }, Ba[yt.OnboardEntity.ExtensionsDeveloper] = function() {
                    return Object(h.d)("Financial Information", "PayoutOnboardingContainer")
                }, Ba[yt.OnboardEntity.StandardPartner] = function() {
                    return rr()
                }, Ba[yt.OnboardEntity.PremiumPartner] = function() {
                    return rr()
                }, Ba[yt.OnboardEntity.CustomPartner] = function() {
                    return rr()
                }, Ba),
                description: (Va = {}, Va[yt.OnboardEntity.Affiliate] = function() {
                    return ir()
                }, Va[yt.OnboardEntity.ExtensionsDeveloper] = function() {
                    return Object(h.d)("Submit your financial information.", "PayoutOnboardingContainer")
                }, Va[yt.OnboardEntity.StandardPartner] = function() {
                    return ir()
                }, Va[yt.OnboardEntity.PremiumPartner] = function() {
                    return ir()
                }, Va[yt.OnboardEntity.CustomPartner] = function() {
                    return ir()
                }, Va)
            }, wa[yt.OnboardStep.Review] = {
                title: (Wa = {}, Wa[yt.OnboardEntity.CustomPartner] = function() {
                    return Object(h.d)("Partnership Approval", "PayoutOnboardingContainer")
                }, Wa),
                description: (Qa = {}, Qa[yt.OnboardEntity.CustomPartner] = function() {
                    return Object(h.d)("The Partnership Team will validate your paperwork and activate your new agreement.", "PayoutOnboardingContainer")
                }, Qa)
            }, wa),
            sr = function() {
                return Object(h.d)("Continue", "InProgressInfo")
            },
            lr = function(e) {
                var t = e.onboardEntity === yt.OnboardEntity.ExtensionsDeveloper;
                return i.createElement(N._8, {
                    margin: {
                        bottom: 1
                    }
                }, i.createElement(N._2, {
                    margin: {
                        bottom: 1
                    }
                }, i.createElement(N.Q, {
                    type: N._49.P
                }, t ? Object(h.d)("Your developer registration is currently in progress. Please click {buttonLabel} to pick up where you left off.", {
                    buttonLabel: sr()
                }, "InProgressInfo") : Object(h.d)("Your payout setup is currently in progress. Please click {buttonLabel} to pick up where you left off.", {
                    buttonLabel: sr()
                }, "InProgressInfo"))), i.createElement(N._2, {
                    margin: {
                        bottom: 1
                    }
                }, i.createElement(N.Q, {
                    type: N._49.P
                }, Object(h.d)("If you would like to modify your information, please click {buttonLabel}.", {
                    buttonLabel: Object(h.d)("Start Over", "InProgressInfo")
                }, "InProgressInfo"))), i.createElement(N.Q, {
                    type: N._49.P
                }, t ? Object(h.d)("NOTE: Starting over will lose any progress.", "InProgressInfo") : Object(h.d)("NOTE: If you choose Start Over you will delete any stored payout information on your account and we will hold any payouts until you have fully completed the form.", "InProgressInfo")))
            },
            cr = function(e) {
                return i.createElement(i.Fragment, null, i.createElement(N._2, {
                    margin: {
                        bottom: 1
                    }
                }, i.createElement(N.Q, {
                    type: N._49.H4,
                    bold: !0
                }, Object(h.d)("Setup Complete", "SetupCompleteInfo"))), e.onboardEntity === yt.OnboardEntity.ExtensionsDeveloper ? i.createElement(N._2, {
                    margin: {
                        bottom: 1
                    }
                }, i.createElement(N.Q, {
                    type: N._49.P
                }, Object(h.d)("You made it! You’re all set. Return to the <x:link>Developer Portal.</x:link>", {
                    "x:link": function(e) {
                        return i.createElement(N.O, {
                            key: "dev-dashboard-link",
                            to: "https://dev.twitch.tv/dashboard"
                        }, e)
                    }
                }, "SetupCompleteInfo"))) : i.createElement(N._2, {
                    margin: {
                        bottom: 1
                    }
                }, i.createElement(N.Q, {
                    type: N._49.P
                }, Object(h.d)("You made it! You’re all set and no further action is needed.", "SetupCompleteInfo"))), i.createElement(N._2, {
                    margin: {
                        bottom: 1
                    }
                }, i.createElement(N.Q, {
                    type: N._49.P
                }, Object(h.d)("If you want to change your payout information, click {buttonLabel} to reset the form.", {
                    buttonLabel: Object(h.d)("Start Over", "SetupCompleteInfo")
                }, "SetupCompleteInfo"))))
            };
        ! function(e) {
            e.START_OVER_BUTTON = "progress-brick__start-over-button", e.CONTINUE_BUTTON = "progress-brick__continue-button"
        }(za || (za = {}));
        var dr, ur, mr = ((dr = {})[yt.WorkflowState.AGREEMENT_NOT_STARTED] = yt.OnboardStep.Agreement, dr[yt.WorkflowState.ROYALTY_TAX_INTERVIEW_NOT_STARTED] = yt.OnboardStep.TaxInterview, dr[yt.WorkflowState.ROYALTY_TAX_INTERVIEW_PENDING] = yt.OnboardStep.TaxInterview, dr[yt.WorkflowState.ROYALTY_TAX_INTERVIEW_ACTION_REQUIRED] = yt.OnboardStep.TaxInterview, dr[yt.WorkflowState.ROYALTY_TAX_INTERVIEW_MISMATCH] = yt.OnboardStep.TaxInterview, dr[yt.WorkflowState.ROYALTY_TAX_INTERVIEW_FAILED] = yt.OnboardStep.TaxInterview, dr[yt.WorkflowState.SERVICE_TAX_INTERVIEW_NOT_STARTED] = yt.OnboardStep.TaxInterview, dr[yt.WorkflowState.SERVICE_TAX_INTERVIEW_PENDING] = yt.OnboardStep.TaxInterview, dr[yt.WorkflowState.SERVICE_TAX_INTERVIEW_ACTION_REQUIRED] = yt.OnboardStep.TaxInterview, dr[yt.WorkflowState.SERVICE_TAX_INTERVIEW_MISMATCH] = yt.OnboardStep.TaxInterview, dr[yt.WorkflowState.SERVICE_TAX_INTERVIEW_FAILED] = yt.OnboardStep.TaxInterview, dr[yt.WorkflowState.PAYOUT_METHOD_NOT_STARTED] = yt.OnboardStep.PayoutMethod, dr[yt.WorkflowState.PAYOUT_METHOD_PENDING] = yt.OnboardStep.PayoutMethod, dr[yt.WorkflowState.REVIEW_PENDING] = yt.OnboardStep.Review, dr),
            pr = function(e) {
                return i.createElement(N._35, {
                    padding: 2,
                    borderTop: !0,
                    borderLeft: !0,
                    borderRight: !0
                }, i.createElement(N._35, {
                    borderMarked: !0,
                    padding: 2,
                    elevation: 1
                }, e.workflowState === yt.WorkflowState.COMPLETED ? i.createElement(cr, {
                    onboardEntity: e.onboardEntity
                }) : i.createElement(lr, {
                    onboardEntity: e.onboardEntity
                }), i.createElement(N._8, {
                    display: N.R.Flex
                }, e.workflowState !== yt.WorkflowState.COMPLETED && i.createElement(N._8, {
                    margin: {
                        right: 1
                    }
                }, i.createElement(N.v, {
                    "data-test-selector": za.CONTINUE_BUTTON,
                    onClick: function() {
                        return e.updateStepDisplayed(mr[e.workflowState])
                    }
                }, Object(h.d)("Continue", "PayoutOnboardingSummary"))), i.createElement(N.v, {
                    "data-test-selector": za.START_OVER_BUTTON,
                    type: N.B.Hollow,
                    onClick: e.showStartOverModal
                }, Object(h.d)("Start Over", "PayoutOnboardingSummary")))))
            };
        n("gurA");
        ! function(e) {
            e[e.NotStarted = 0] = "NotStarted", e[e.Pending = 1] = "Pending", e[e.Failed = 2] = "Failed", e[e.Completed = 3] = "Completed"
        }(ur || (ur = {}));
        var gr, hr = function(e) {
                return i.createElement(N._35, {
                    borderLeft: !0,
                    borderRight: !0,
                    borderBottom: !0
                }, i.createElement(N._6, {
                    onClick: e.onClick,
                    disabled: !e.isEnabled,
                    alpha: !0
                }, i.createElement(N._8, {
                    padding: 2,
                    alignItems: N.c.Center,
                    display: N.R.Flex,
                    flexWrap: N.U.NoWrap
                }, i.createElement(N._8, {
                    flexGrow: 1
                }, i.createElement(N._2, {
                    margin: {
                        bottom: .5
                    }
                }, i.createElement(N.Q, {
                    type: N._49.H6,
                    bold: !0
                }, e.title)), i.createElement(N.Q, {
                    color: N.K.Alt2
                }, e.description)), i.createElement(N._8, {
                    display: N.R.Flex,
                    alignItems: N.c.Center
                }, (e.type === ur.Completed || e.isEnabled) && i.createElement(N._8, null, i.createElement(N.Q, {
                    type: N._49.H4,
                    transform: N._48.Uppercase,
                    bold: !0
                }, i.createElement(N._12, {
                    label: function(e) {
                        switch (e) {
                            case ur.Pending:
                                return Object(h.d)("Under Review", "ProgressRow");
                            case ur.Failed:
                                return Object(h.d)("Failed", "ProgressRow");
                            case ur.Completed:
                                return Object(h.d)("Completed", "ProgressRow");
                            default:
                                return ""
                        }
                    }(e.type),
                    type: function(e) {
                        switch (e) {
                            case ur.NotStarted:
                                return;
                            case ur.Pending:
                                return N._13.Warn;
                            case ur.Failed:
                                return N._13.Alert;
                            case ur.Completed:
                                return N._13.Success;
                            default:
                                return
                        }
                    }(e.type)
                }))), e.isEnabled && i.createElement(N._8, {
                    margin: {
                        left: 1
                    },
                    display: N.R.Flex,
                    alignItems: N.c.Center
                }, i.createElement(N._24, {
                    asset: N._25.AngleRight
                }))))))
            },
            br = (n("QnA7"), function() {
                return Object(h.d)("Submit your tax information.", "PayoutOnboardingSummary")
            }),
            fr = function() {
                return Object(h.d)("Choose your payout method.", "PayoutOnboardingSummary")
            },
            Er = function() {
                return Object(h.d)("Submit your financial information.", "PayoutOnboardingSummary")
            };
        ! function(e) {
            e.REGISTRATION = "registration-selector", e.AGREEMENT = "agreement-selector", e.TAX_INTERVIEW = "tax-interview-selector", e.PAYOUT_METHOD = "payout-method-selector", e.REVIEW = "review-selector"
        }(gr || (gr = {}));
        var vr = function(e, t, n) {
                return Object(h.d)("Step {numOfCurrentStep} of {numOfTotalSteps}: {stepTitle}", {
                    numOfCurrentStep: e,
                    numOfTotalSteps: t,
                    stepTitle: n
                }, "ProgressRow")
            },
            yr = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.updateStepDisplayed = function(e) {
                        return function() {
                            t.props.updateStepDisplayed(e)
                        }
                    }, t
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    return i.createElement(N._35, {
                        className: "payout-onboarding-summary",
                        background: N.n.Base
                    }, this.isRegistrationComplete && i.createElement(pr, {
                        workflowState: this.props.workflow.currentStep,
                        onboardEntity: this.props.onboardEntity,
                        updateStepDisplayed: this.props.updateStepDisplayed,
                        showStartOverModal: this.props.showStartOverModal
                    }), i.createElement(N._35, {
                        borderTop: !0
                    }), i.createElement(hr, {
                        "data-test-selector": gr.REGISTRATION,
                        title: this.step1Title,
                        description: this.step1Description,
                        type: this.step1Status,
                        onClick: this.updateStepDisplayed(yt.OnboardStep.Registration),
                        isEnabled: !this.isRegistrationComplete
                    }), i.createElement(hr, {
                        "data-test-selector": gr.AGREEMENT,
                        title: this.step2Title,
                        description: this.step2Description,
                        type: this.step2Status,
                        onClick: this.updateStepDisplayed(yt.OnboardStep.Agreement),
                        isEnabled: this.isRegistrationComplete && !this.isAgreementComplete
                    }), i.createElement(hr, {
                        "data-test-selector": gr.TAX_INTERVIEW,
                        title: this.step3Title,
                        description: this.step3Description,
                        type: this.step3Status,
                        onClick: this.updateStepDisplayed(yt.OnboardStep.TaxInterview),
                        isEnabled: this.isAgreementComplete && !this.isTaxInterviewComplete
                    }), i.createElement(hr, {
                        "data-test-selector": gr.PAYOUT_METHOD,
                        title: this.step4Title,
                        description: this.step4Description,
                        type: this.step4Status,
                        onClick: this.updateStepDisplayed(yt.OnboardStep.PayoutMethod),
                        isEnabled: this.isTaxInterviewComplete && !this.isPayoutMethodComplete
                    }), this.props.onboardEntity === yt.OnboardEntity.CustomPartner && i.createElement(hr, {
                        "data-test-selector": gr.REVIEW,
                        title: this.step5Title,
                        description: this.step5Description,
                        type: this.step5Status,
                        onClick: this.updateStepDisplayed(yt.OnboardStep.Review),
                        isEnabled: this.isPayoutMethodComplete && !this.isReviewComplete
                    }))
                }, Object.defineProperty(t.prototype, "isRegistrationComplete", {
                    get: function() {
                        return this.props.workflow.currentStep !== yt.WorkflowState.CANCELED && this.props.workflow.currentStep !== yt.WorkflowState.REGISTRATION_NOT_STARTED
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "isAgreementComplete", {
                    get: function() {
                        return this.isRegistrationComplete && this.props.workflow.currentStep !== yt.WorkflowState.AGREEMENT_NOT_STARTED
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "isTaxInterviewComplete", {
                    get: function() {
                        return this.isAgreementComplete && ![yt.WorkflowState.ROYALTY_TAX_INTERVIEW_NOT_STARTED, yt.WorkflowState.ROYALTY_TAX_INTERVIEW_PENDING, yt.WorkflowState.ROYALTY_TAX_INTERVIEW_FAILED, yt.WorkflowState.ROYALTY_TAX_INTERVIEW_ACTION_REQUIRED, yt.WorkflowState.ROYALTY_TAX_INTERVIEW_MISMATCH, yt.WorkflowState.SERVICE_TAX_INTERVIEW_NOT_STARTED, yt.WorkflowState.SERVICE_TAX_INTERVIEW_PENDING, yt.WorkflowState.SERVICE_TAX_INTERVIEW_FAILED, yt.WorkflowState.SERVICE_TAX_INTERVIEW_ACTION_REQUIRED, yt.WorkflowState.SERVICE_TAX_INTERVIEW_MISMATCH].includes(this.props.workflow.currentStep)
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "isPayoutMethodComplete", {
                    get: function() {
                        return this.isTaxInterviewComplete && ![yt.WorkflowState.PAYOUT_METHOD_NOT_STARTED, yt.WorkflowState.PAYOUT_METHOD_PENDING].includes(this.props.workflow.currentStep)
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "isReviewComplete", {
                    get: function() {
                        return this.isPayoutMethodComplete && this.props.workflow.currentStep !== yt.WorkflowState.REVIEW_PENDING
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "numOfTotalSteps", {
                    get: function() {
                        return this.props.onboardEntity === yt.OnboardEntity.CustomPartner ? 5 : 4
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "step1Title", {
                    get: function() {
                        return vr(Object(h.e)(1), Object(h.e)(this.numOfTotalSteps), or[yt.OnboardStep.Registration].title[this.props.onboardEntity]())
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "step1Description", {
                    get: function() {
                        return this.props.onboardEntity === yt.OnboardEntity.ExtensionsDeveloper ? this.isRegistrationComplete ? Object(h.d)("Your Extensions Developer Registration is complete.", "PayoutOnboardingSummary") : Object(h.d)("Begin your Extensions Developer Registration.", "PayoutOnboardingSummary") : this.isRegistrationComplete ? Object(h.d)("Your payout registration is complete.", "PayoutOnboardingSummary") : Object(h.d)("Begin your payout registration.", "PayoutOnboardingSummary")
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "step1Status", {
                    get: function() {
                        return this.isRegistrationComplete ? ur.Completed : ur.NotStarted
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "step2Title", {
                    get: function() {
                        return vr(Object(h.e)(2), Object(h.e)(this.numOfTotalSteps), or[yt.OnboardStep.Agreement].title[this.props.onboardEntity]())
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "step2Description", {
                    get: function() {
                        switch (this.props.onboardEntity) {
                            case yt.OnboardEntity.Affiliate:
                                return this.isAgreementComplete ? Object(h.d)("You have agreed to the Twitch Affiliate Agreement.", "PayoutOnboardingSummary") : Object(h.d)("Agree to the Twitch Affiliate Agreement.", "PayoutOnboardingSummary");
                            case yt.OnboardEntity.ExtensionsDeveloper:
                                return this.isAgreementComplete ? Object(h.d)("You have agreed to the Twitch Extensions Developer Agreement.", "PayoutOnboardingSummary") : Object(h.d)("Agree to the Twitch Extensions Developer Agreement.", "PayoutOnboardingSummary");
                            case yt.OnboardEntity.StandardPartner:
                            case yt.OnboardEntity.PremiumPartner:
                            case yt.OnboardEntity.CustomPartner:
                                return this.isAgreementComplete ? Object(h.d)("You have agreed to the Twitch Partner Agreement.", "PayoutOnboardingSummary") : Object(h.d)("Agree to the Twitch Partner Agreement.", "PayoutOnboardingSummary");
                            default:
                                return ""
                        }
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "step2Status", {
                    get: function() {
                        return this.isAgreementComplete ? ur.Completed : ur.NotStarted
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "step3Title", {
                    get: function() {
                        return vr(Object(h.e)(3), Object(h.e)(this.numOfTotalSteps), or[yt.OnboardStep.TaxInterview].title[this.props.onboardEntity]())
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "step3Description", {
                    get: function() {
                        if (!this.isAgreementComplete) return br();
                        switch (this.props.workflow.currentStep) {
                            case yt.WorkflowState.ROYALTY_TAX_INTERVIEW_NOT_STARTED:
                                return br();
                            case yt.WorkflowState.ROYALTY_TAX_INTERVIEW_PENDING:
                                return Object(h.d)("Your royalty tax information is currently under review. This process usually takes a few minutes.", "PayoutOnboardingSummary");
                            case yt.WorkflowState.ROYALTY_TAX_INTERVIEW_FAILED:
                            case yt.WorkflowState.ROYALTY_TAX_INTERVIEW_ACTION_REQUIRED:
                            case yt.WorkflowState.ROYALTY_TAX_INTERVIEW_MISMATCH:
                            case yt.WorkflowState.SERVICE_TAX_INTERVIEW_FAILED:
                            case yt.WorkflowState.SERVICE_TAX_INTERVIEW_ACTION_REQUIRED:
                            case yt.WorkflowState.SERVICE_TAX_INTERVIEW_MISMATCH:
                                return Object(h.d)("We could not successfully validate your tax information. Please review and correct your tax information.", "PayoutOnboardingSummary");
                            case yt.WorkflowState.SERVICE_TAX_INTERVIEW_NOT_STARTED:
                                return Object(h.d)("Royalty tax approved. Please complete your service tax information.", "PayoutOnboardingSummary");
                            case yt.WorkflowState.SERVICE_TAX_INTERVIEW_PENDING:
                                return Object(h.d)("Your service tax information is currently under review. This process usually takes a few minutes.", "PayoutOnboardingSummary");
                            default:
                                return Object(h.d)("Your tax information has been successfully validated.", "PayoutOnboardingSummary")
                        }
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "step3Status", {
                    get: function() {
                        if (!this.isAgreementComplete) return ur.NotStarted;
                        switch (this.props.workflow.currentStep) {
                            case yt.WorkflowState.ROYALTY_TAX_INTERVIEW_NOT_STARTED:
                                return ur.NotStarted;
                            case yt.WorkflowState.ROYALTY_TAX_INTERVIEW_PENDING:
                                return ur.Pending;
                            case yt.WorkflowState.ROYALTY_TAX_INTERVIEW_FAILED:
                            case yt.WorkflowState.ROYALTY_TAX_INTERVIEW_ACTION_REQUIRED:
                            case yt.WorkflowState.ROYALTY_TAX_INTERVIEW_MISMATCH:
                                return ur.Failed;
                            case yt.WorkflowState.SERVICE_TAX_INTERVIEW_NOT_STARTED:
                                return ur.NotStarted;
                            case yt.WorkflowState.SERVICE_TAX_INTERVIEW_PENDING:
                                return ur.Pending;
                            case yt.WorkflowState.SERVICE_TAX_INTERVIEW_FAILED:
                            case yt.WorkflowState.SERVICE_TAX_INTERVIEW_ACTION_REQUIRED:
                            case yt.WorkflowState.SERVICE_TAX_INTERVIEW_MISMATCH:
                                return ur.Failed;
                            default:
                                return ur.Completed
                        }
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "step4Title", {
                    get: function() {
                        return vr(Object(h.e)(4), Object(h.e)(this.numOfTotalSteps), or[yt.OnboardStep.PayoutMethod].title[this.props.onboardEntity]())
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "step4Description", {
                    get: function() {
                        var e = this.props.onboardEntity === yt.OnboardEntity.ExtensionsDeveloper;
                        return this.isTaxInterviewComplete ? this.props.workflow.currentStep === yt.WorkflowState.PAYOUT_METHOD_PENDING ? e ? Object(h.d)("Your financial information is currently under review. This process usually takes a few minutes.", "PayoutOnboardingSummary") : Object(h.d)("Your payout method is currently under review. This process usually takes a few minutes.", "PayoutOnboardingSummary") : this.isPayoutMethodComplete ? e ? Object(h.d)("Your financial information has been successfully validated.", "PayoutOnboardingSummary") : Object(h.d)("Your payout method has been successfully validated.", "PayoutOnboardingSummary") : e ? Er() : fr() : e ? Er() : fr()
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "step4Status", {
                    get: function() {
                        return this.isTaxInterviewComplete ? this.props.workflow.currentStep === yt.WorkflowState.PAYOUT_METHOD_PENDING ? ur.Pending : this.isPayoutMethodComplete ? ur.Completed : ur.NotStarted : ur.NotStarted
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "step5Title", {
                    get: function() {
                        return this.props.onboardEntity === yt.OnboardEntity.CustomPartner ? vr(Object(h.e)(5), Object(h.e)(this.numOfTotalSteps), or[yt.OnboardStep.Review].title[this.props.onboardEntity]()) : ""
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "step5Description", {
                    get: function() {
                        return this.isPayoutMethodComplete ? this.props.workflow.currentStep === yt.WorkflowState.REVIEW_PENDING ? Object(h.d)("The Partnership Team is currently validating your paperwork.", "PayoutOnboardingSummary") : Object(h.d)("The Partnership Team has approved your new agreement.", "PayoutOnboardingSummary") : Object(h.d)("The Partnership Team will validate your paperwork and activate your new agreement.", "PayoutOnboardingSummary")
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "step5Status", {
                    get: function() {
                        return this.isPayoutMethodComplete ? this.props.workflow.currentStep === yt.WorkflowState.REVIEW_PENDING ? ur.Pending : ur.Completed : ur.NotStarted
                    },
                    enumerable: !0,
                    configurable: !0
                }), t
            }(i.Component),
            Sr = function(e) {
                return Object(h.d)("Example {exampleNum}", {
                    exampleNum: Object(h.e)(e)
                }, "TaxInfoBrick")
            },
            kr = function(e) {
                if (e.taxStatus === Lr.NotStarted || e.taxStatus === Lr.Completed) return null;
                var t;
                switch (e.taxStatus) {
                    case Lr.Pending:
                        t = i.createElement(N.Q, {
                            fontSize: N.V.Size6
                        }, Object(h.d)("Your tax information is currently under review. This typically takes a few minutes.", "TaxInfoBrick"));
                        break;
                    case Lr.ActionRequired:
                        t = i.createElement(N.Q, {
                            fontSize: N.V.Size6
                        }, Object(h.d)("Looks like you may need to mail documentation to Amazon to complete this process. However, you may be able to avoid this by consenting to electronic signature of your tax form. To do this, click the button below to retake the tax interview and be sure to check the box to consent to electronic signature.", "TaxInfoBrick"));
                        break;
                    case Lr.Failed:
                        t = i.createElement(N.Q, {
                            fontSize: N.V.Size6
                        }, Object(h.d)("We could not successfully validate your tax information.", "TaxInfoBrick"));
                        break;
                    case Lr.Mismatch:
                        t = i.createElement(i.Fragment, null, i.createElement(N._2, {
                            margin: {
                                bottom: 1
                            }
                        }, i.createElement(N.Q, {
                            fontSize: N.V.Size6
                        }, Object(h.d)("Thank you for completing your tax interview. However, the details you have just entered into the tax form does not match the information on file from Step 1 (Registration). Your tax information from Steps 1 and 3 MUST match in order to receive payouts from Twitch.", "TaxInfoBrick"))), i.createElement(N._2, {
                            margin: {
                                bottom: 1
                            }
                        }, i.createElement(N.Q, {
                            fontSize: N.V.Size6
                        }, Sr(1))), i.createElement(N._8, {
                            margin: {
                                left: 1,
                                bottom: 1
                            }
                        }, i.createElement(N.Q, {
                            fontSize: N.V.Size6
                        }, Object(h.d)("Step 1 user is John Doe from the United States of America.", "TaxInfoBrick")), i.createElement(N.Q, {
                            fontSize: N.V.Size6
                        }, Object(h.d)("Step 3 tax information should be for John Doe from the United States of America.", "TaxInfoBrick")), i.createElement(N.Q, {
                            fontSize: N.V.Size6
                        }, Object(h.d)("Step 4 selected payout method is check paid to John Doe from the United States of America.", "TaxInfoBrick"))), i.createElement(N._2, {
                            margin: {
                                bottom: 1
                            }
                        }, i.createElement(N.Q, {
                            fontSize: N.V.Size6
                        }, Sr(2))), i.createElement(N._8, {
                            margin: {
                                left: 1,
                                bottom: 1
                            }
                        }, i.createElement(N.Q, {
                            fontSize: N.V.Size6
                        }, Object(h.d)("Step 1 user is John Doe working for Cool Gaming, Inc. from France.", "TaxInfoBrick")), i.createElement(N.Q, {
                            fontSize: N.V.Size6
                        }, Object(h.d)("Step 3 tax information should be for Cool Gaming, Inc. from France.", "TaxInfoBrick")), i.createElement(N.Q, {
                            fontSize: N.V.Size6
                        }, Object(h.d)("Step 4 selected payout method is a wire paid to Cool Gaming, Inc. from France.", "TaxInfoBrick"))), i.createElement(N.Q, {
                            fontSize: N.V.Size6
                        }, Object(h.d)("Please see the list of errors below for the specific fields that require correction.", "TaxInfoBrick")));
                        break;
                    default:
                        return null
                }
                return i.createElement(N._35, {
                    padding: 2,
                    borderMarked: !0,
                    background: N.n.Base,
                    margin: {
                        bottom: 2
                    },
                    elevation: 1
                }, t)
            },
            _r = function(e) {
                return i.createElement(i.Fragment, null, i.createElement(N._2, {
                    margin: {
                        bottom: 1
                    }
                }, i.createElement(N.Q, {
                    fontSize: N.V.Size6
                }, Object(h.d)("If you prefer not to consent to electronic signature, you will be required to mail additional documentation to Amazon. As a reminder, Twitch is a subsidiary of Amazon, and Amazon handles our tax forms. To proceed, please follow these instructions:", "TaxActionRequiredInfo"))), i.createElement(N._8, {
                    margin: {
                        bottom: 1
                    }
                }, i.createElement(N.Q, {
                    fontSize: N.V.Size6
                }, Object(h.d)("1. Click the button below to retake the tax information interview.", "TaxActionRequiredInfo")), i.createElement(N.Q, {
                    fontSize: N.V.Size6
                }, Object(h.d)("2. Proceed to the page that asks you to print out a hardcopy of the tax form and print out the form.", "TaxActionRequiredInfo")), i.createElement(N.Q, {
                    fontSize: N.V.Size6
                }, Object(h.d)("3. Sign the form with a blue or black pen.", "TaxActionRequiredInfo")), i.createElement(N.Q, {
                    fontSize: N.V.Size6
                }, Object(h.d)("4. Mail the hardcopy of your tax form to:", "TaxActionRequiredInfo"))), i.createElement(N._8, {
                    margin: {
                        left: 2,
                        bottom: 1
                    }
                }, i.createElement(N.Q, {
                    fontSize: N.V.Size6
                }, "Amazon"), i.createElement(N.Q, {
                    fontSize: N.V.Size6
                }, "Attn: FinOps Tax"), i.createElement(N.Q, {
                    fontSize: N.V.Size6
                }, "P.O. Box 80683"), i.createElement(N.Q, {
                    fontSize: N.V.Size6
                }, "Seattle, WA, 98108-0683"), i.createElement(N.Q, {
                    fontSize: N.V.Size6
                }, "U.S.A.")), i.createElement(N._8, {
                    margin: {
                        bottom: 1
                    }
                }, i.createElement(N.Q, {
                    fontSize: N.V.Size6
                }, Object(h.d)("To assist Amazon with locating your account, please write the following at the top of the form in the white space:", "TaxActionRequiredInfo"))), i.createElement(N._8, {
                    margin: {
                        left: 2,
                        bottom: 1
                    }
                }, i.createElement(N.Q, {
                    fontSize: N.V.Size6
                }, "Amazon subsidiary: Twitch Interactive, Inc."), i.createElement(N.Q, {
                    fontSize: N.V.Size6
                }, "Email address: ", e.email)))
            },
            Nr = function(e) {
                var t = e.workflow,
                    n = t.registration,
                    a = t.taxMismatchErrors;
                if (!n || !a) return null;
                var r = a.map(function(e, t) {
                    var a, r;
                    if (e === yt.TaxMismatchError.NAME) a = Object(h.d)("Name", "TaxMismatchSpecificErrors"), r = n.companyName ? n.companyName : [n.firstName, n.middleName, n.lastName].filter(function(e) {
                        return null !== e
                    }).join(" ");
                    else if (e === yt.TaxMismatchError.EMAIL) a = Object(h.d)("Email", "TaxMismatchSpecificErrors"), r = n.email;
                    else if (e === yt.TaxMismatchError.STREET_ADDRESS) a = Object(h.d)("Street Address", "TaxMismatchSpecificErrors"), r = n.streetAddress;
                    else if (e === yt.TaxMismatchError.STREET_ADDRESS_2) a = Object(h.d)("Street Address 2", "TaxMismatchSpecificErrors"), r = n.streetAddress2;
                    else if (e === yt.TaxMismatchError.CITY) a = Object(h.d)("City or Town", "TaxMismatchSpecificErrors"), r = n.city;
                    else if (e === yt.TaxMismatchError.STATE) a = Object(h.d)("State/Province", "TaxMismatchSpecificErrors"), r = "US" === n.countryCode ? Ea(n.stateCode || "") : "CA" === n.countryCode ? ha(n.stateCode || "") : n.stateCode;
                    else if (e === yt.TaxMismatchError.COUNTRY) a = Object(h.d)("Country", "TaxMismatchSpecificErrors"), r = Object(fa.b)(n.countryCode || "");
                    else {
                        if (e !== yt.TaxMismatchError.POSTAL) return null;
                        a = Object(h.d)("Zip Code/Postal Code", "TaxMismatchSpecificErrors"), r = n.postal
                    }
                    return i.createElement(N._2, {
                        key: a + t,
                        padding: {
                            left: 1
                        }
                    }, i.createElement(N.Q, {
                        fontSize: N.V.Size6
                    }, i.createElement(N.Q, {
                        bold: !0,
                        type: N._49.Span
                    }, a), " ", r))
                });
                return i.createElement(i.Fragment, null, i.createElement(N._2, {
                    margin: {
                        bottom: 1
                    }
                }, i.createElement(N.Q, {
                    type: N._49.P,
                    color: N.K.Error,
                    bold: !0
                }, Object(h.d)("Specific Errors", "TaxMismatchSpecificErrors"))), i.createElement(N._2, {
                    margin: {
                        bottom: 1
                    }
                }, i.createElement(N.Q, {
                    fontSize: N.V.Size6
                }, Object(h.d)("The following data you entered in Step 1 does not match the data entered on the tax interview in Step 3:", "TaxMismatchSpecificErrors"))), i.createElement(N._8, {
                    margin: {
                        bottom: 1
                    }
                }, r), i.createElement(N._2, {
                    margin: {
                        bottom: 1
                    }
                }, i.createElement(N.Q, {
                    fontSize: N.V.Size6
                }, Object(h.d)("To fix this, please click the button below to edit your tax form and correct these values. Alternatively, if the tax form has the correct information, you can choose to edit Step 1 instead. To do this, click the button below and then click {buttonLabel} to reset the onboarding flow.", {
                    buttonLabel: Object(h.d)("Start Over", "TaxMismatchSpecificErrors")
                }, "TaxMismatchSpecificErrors"))))
            },
            Tr = function(e) {
                var t = e.workflow.registration;
                if (!t) return null;
                switch (e.taxStatus) {
                    case Lr.NotStarted:
                        return i.createElement(i.Fragment, null, i.createElement(N._2, {
                            margin: {
                                bottom: 1
                            }
                        }, i.createElement(N.Q, {
                            fontSize: N.V.Size6
                        }, Object(h.d)("A new window will open where you can submit your royalty tax information. Please complete the tax information interview fully.", "TaxInfoRoyaltyText"))), i.createElement(N._2, {
                            margin: {
                                bottom: 1
                            }
                        }, i.createElement(N.Q, {
                            fontSize: N.V.Size6
                        }, Object(h.d)('Once you\'ve filled out the form, if your status still says "Not Started", please wait a minute or two for it to update to "Under Review".', "TaxInfoRoyaltyText"))), i.createElement(N._8, {
                            margin: {
                                bottom: 2
                            }
                        }, i.createElement(Xn, {
                            onboardEntity: e.onboardEntity
                        })));
                    case Lr.Pending:
                        return i.createElement(N._2, {
                            margin: {
                                bottom: 2
                            }
                        }, i.createElement(N.Q, {
                            fontSize: N.V.Size6
                        }, Object(h.d)("You can retake the Royalty Tax Interview if you wish to modify or correct any previously submitted information. You may want to do this if your tax information has been under review for more than 48 hours.", "TaxInfoRoyaltyText")));
                    case Lr.Completed:
                        return i.createElement(N.Q, {
                            fontSize: N.V.Size6
                        }, Object(h.d)("Your royalty tax information was successfully validated.", "TaxInfoRoyaltyText"));
                    case Lr.ActionRequired:
                        return i.createElement(i.Fragment, null, i.createElement(_r, {
                            email: t.email
                        }), i.createElement(N._8, {
                            margin: {
                                bottom: 2
                            }
                        }, i.createElement(Xn, {
                            onboardEntity: e.onboardEntity
                        })));
                    case Lr.Mismatch:
                        return i.createElement(i.Fragment, null, i.createElement(Nr, {
                            workflow: e.workflow
                        }), i.createElement(N._8, {
                            margin: {
                                bottom: 2
                            }
                        }, i.createElement(Xn, {
                            onboardEntity: e.onboardEntity
                        })));
                    case Lr.Failed:
                        return i.createElement(N._2, {
                            margin: {
                                bottom: 2
                            }
                        }, i.createElement(N.Q, {
                            fontSize: N.V.Size6
                        }, Object(h.d)("Please click the button below to retake the Royalty Tax Interview and correct your information.", "TaxInfoRoyaltyText")));
                    default:
                        return null
                }
            },
            Or = function(e) {
                var t = e.workflow.registration;
                if (!t) return null;
                if (!e.royaltyTaxCompleted) return i.createElement(i.Fragment, null, i.createElement(N._2, {
                    margin: {
                        bottom: 1
                    }
                }, i.createElement(N.Q, {
                    fontSize: N.V.Size6
                }, Object(h.d)("Please complete your Royalty Tax Interview first. Once your royalty tax information is fully validated, you will need to complete the Service Tax Interview.", "TaxInfoServiceText"))), i.createElement(N._8, {
                    margin: {
                        bottom: 2
                    }
                }, i.createElement(Xn, {
                    onboardEntity: e.onboardEntity
                })));
                switch (e.taxStatus) {
                    case Lr.NotStarted:
                        return i.createElement(i.Fragment, null, i.createElement(N._2, {
                            margin: {
                                bottom: 1
                            }
                        }, i.createElement(N.Q, {
                            fontSize: N.V.Size6
                        }, Object(h.d)("A new window will open where you can submit your service tax information. Please complete the tax information interview fully.", "TaxInfoServiceText"))), i.createElement(N._2, {
                            margin: {
                                bottom: 1
                            }
                        }, i.createElement(N.Q, {
                            fontSize: N.V.Size6
                        }, Object(h.d)('Once you\'ve filled out the form, if your status still says "Not Started", please wait a minute or two for it to update to "Under Review".', "TaxInfoServiceText"))), i.createElement(N._8, {
                            margin: {
                                bottom: 2
                            }
                        }, i.createElement(Xn, {
                            onboardEntity: e.onboardEntity
                        })));
                    case Lr.Pending:
                        return i.createElement(N._2, {
                            margin: {
                                bottom: 2
                            }
                        }, i.createElement(N.Q, {
                            fontSize: N.V.Size6
                        }, Object(h.d)("You can retake the Service Tax Interview if you wish to modify or correct any previously submitted information. You may want to do this if your tax information has been under review for more than 48 hours.", "TaxInfoServiceText")));
                    case Lr.Completed:
                        return i.createElement(N.Q, {
                            fontSize: N.V.Size6
                        }, Object(h.d)("Your service tax information was successfully validated.", "TaxInfoServiceText"));
                    case Lr.ActionRequired:
                        return i.createElement(i.Fragment, null, i.createElement(_r, {
                            email: t.email
                        }), i.createElement(N._8, {
                            margin: {
                                bottom: 2
                            }
                        }, i.createElement(Xn, {
                            onboardEntity: e.onboardEntity
                        })));
                    case Lr.Mismatch:
                        return i.createElement(i.Fragment, null, i.createElement(Nr, {
                            workflow: e.workflow
                        }), i.createElement(N._8, {
                            margin: {
                                bottom: 2
                            }
                        }, i.createElement(Xn, {
                            onboardEntity: e.onboardEntity
                        })));
                    case Lr.Failed:
                        return i.createElement(N._2, {
                            margin: {
                                bottom: 2
                            }
                        }, i.createElement(N.Q, {
                            fontSize: N.V.Size6
                        }, Object(h.d)("Please click the button below to retake the Service Tax Interview and correct your information.", "TaxInfoServiceText")));
                    default:
                        return null
                }
            },
            Ar = function() {
                return Object(h.d)("Start Over", "TaxPreviewInstructions")
            },
            Cr = function(e) {
                return i.createElement(N._8, {
                    padding: 1,
                    margin: {
                        bottom: 1
                    }
                }, i.createElement(N._2, {
                    margin: {
                        bottom: 2
                    }
                }, i.createElement(N.Q, {
                    fontSize: N.V.Size6
                }, Object(h.d)("It is important that you enter consistent information throughout the onboarding process to ensure that we have your correct contact information, tax information, and payout information. When filling out the tax form on the following page, please make sure that you enter the same information as you did in Step 1. For your reference, here is the information you entered in Step 1.", "TaxPreviewInstructions"))), e.onboardEntity !== yt.OnboardEntity.ExtensionsDeveloper && i.createElement(N._2, {
                    margin: {
                        bottom: 2
                    }
                }, i.createElement(N.Q, {
                    fontSize: N.V.Size6
                }, Object(h.d)('If any of this information is incorrect, you must restart your Payout Registration by clicking "{buttonLabel}" below.', {
                    buttonLabel: Ar()
                }, "TaxPreviewInstructions"))), e.onboardEntity === yt.OnboardEntity.ExtensionsDeveloper && i.createElement(N._2, {
                    margin: {
                        bottom: 2
                    }
                }, i.createElement(N.Q, {
                    fontSize: N.V.Size6
                }, Object(h.d)('If any of this information is incorrect, you must restart your Extensions Developer Registration by clicking "{buttonLabel}" below.', {
                    buttonLabel: Ar()
                }, "TaxPreviewInstructions"))), i.createElement(N.Q, {
                    fontSize: N.V.Size6
                }, Object(h.d)("Otherwise, please proceed by clicking the purple button and the tax form will appear in a new window. If the tax form does not appear, make sure that you have pop-ups enabled.", "TaxPreviewInstructions")))
            },
            Pr = function() {
                return Object(h.d)("optional", "TaxPreviewReferenceInfo")
            },
            Ir = function(e) {
                var t, n = e.workflow.registration;
                if (!n) return null;
                t = n.companyName ? n.companyName : [n.firstName, n.middleName, n.lastName].filter(function(e) {
                    return null !== e
                }).join(" ");
                var a = "US" === n.countryCode,
                    r = "CA" === n.countryCode;
                return i.createElement(N._35, {
                    borderMarked: !0,
                    padding: 2
                }, i.createElement(N._8, {
                    margin: {
                        bottom: 2
                    }
                }, i.createElement(N.W, {
                    label: Object(h.d)("Channel Name", "TaxPreviewReferenceInfo"),
                    orientation: N.X.Horizontal
                }, i.createElement(N._4, {
                    type: N._5.Text,
                    value: e.channelName,
                    disabled: !0
                }))), i.createElement(N._8, {
                    margin: {
                        bottom: 2
                    }
                }, i.createElement(N.W, {
                    label: Object(h.d)("Name", "TaxPreviewReferenceInfo"),
                    orientation: N.X.Horizontal
                }, i.createElement(N._4, {
                    type: N._5.Text,
                    value: t || "",
                    disabled: !0
                }))), i.createElement(N._8, {
                    margin: {
                        bottom: 2
                    }
                }, i.createElement(N.W, {
                    label: Object(h.d)("Email", "TaxPreviewReferenceInfo"),
                    orientation: N.X.Horizontal
                }, i.createElement(N._4, {
                    type: N._5.Text,
                    value: n.email,
                    disabled: !0
                }))), i.createElement(N._8, {
                    margin: {
                        bottom: 2
                    }
                }, i.createElement(N.W, {
                    label: Object(h.d)("Country", "TaxPreviewReferenceInfo"),
                    orientation: N.X.Horizontal
                }, i.createElement(N._4, {
                    type: N._5.Text,
                    value: Object(fa.b)(n.countryCode),
                    disabled: !0
                }))), i.createElement(N._8, {
                    margin: {
                        bottom: 2
                    }
                }, i.createElement(N.W, {
                    label: Object(h.d)("Street Address", "TaxPreviewReferenceInfo"),
                    orientation: N.X.Horizontal
                }, i.createElement(N._4, {
                    type: N._5.Text,
                    value: n.streetAddress,
                    disabled: !0
                }))), i.createElement(N._8, {
                    margin: {
                        bottom: 2
                    }
                }, i.createElement(N.W, {
                    label: Object(h.d)("Street Address 2", "TaxPreviewReferenceInfo"),
                    orientation: N.X.Horizontal,
                    labelOptional: Pr()
                }, i.createElement(N._4, {
                    type: N._5.Text,
                    value: n.streetAddress2 || "",
                    disabled: !0
                }))), i.createElement(N._8, {
                    margin: {
                        bottom: 2
                    }
                }, i.createElement(N.W, {
                    label: Object(h.d)("City or Town", "TaxPreviewReferenceInfo"),
                    orientation: N.X.Horizontal
                }, i.createElement(N._4, {
                    type: N._5.Text,
                    value: n.city,
                    disabled: !0
                }))), i.createElement(N._8, {
                    margin: {
                        bottom: 2
                    }
                }, i.createElement(N.W, {
                    label: Object(h.d)("State/Province", "TaxPreviewReferenceInfo"),
                    orientation: N.X.Horizontal,
                    labelOptional: a || r ? "" : Pr()
                }, i.createElement(N._4, {
                    type: N._5.Text,
                    value: a ? Ea(n.stateCode || "") : r ? ha(n.stateCode || "") : n.stateCode || "",
                    disabled: !0
                }))), i.createElement(N.W, {
                    label: Object(h.d)("Zip Code/Postal Code", "TaxPreviewReferenceInfo"),
                    orientation: N.X.Horizontal,
                    labelOptional: a ? "" : Pr()
                }, i.createElement(N._4, {
                    type: N._5.Text,
                    value: n.postal || "",
                    disabled: !0
                })))
            },
            wr = (n("ZDnG"), n("bv1+")),
            Rr = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        openingTaxInterview: !1
                    }, t.handleOpenTaxInterviewClick = function() {
                        t.setState({
                            openingTaxInterview: !0
                        }), t.openTaxInterview()
                    }, t.openTaxInterview = function() {
                        var e = t.props.data.currentUser.payoutInvite.workflow.taxInterview,
                            n = t.props.workflow.registration,
                            a = [{
                                name: "AccountId",
                                value: e.accountID
                            }, {
                                name: "AddressId",
                                value: ""
                            }, {
                                name: "ClientId",
                                value: e.clientID
                            }, {
                                name: "IncomeType",
                                value: t.props.taxType
                            }, {
                                name: "LegalName",
                                value: e.governmentAlias
                            }, {
                                name: "Locale",
                                value: e.locale
                            }, {
                                name: "LoggedInCustomerEmail",
                                value: n && n.email
                            }, {
                                name: "LoggedInCustomerId",
                                value: t.props.data.currentUser.id
                            }, {
                                name: "LogoImageUrl",
                                value: "https://s.jtvnw.net/jtv_user_pictures/hosted_images/twitch_logo_32px.png"
                            }, {
                                name: "ReturnURL",
                                value: window.location.href
                            }, {
                                name: "Signature",
                                value: e.signature
                            }, {
                                name: "SiteId",
                                value: "1"
                            }];
                        if ((!t.popup || (t.popup.close(), t.popup.closed)) && (t.popup = window.open("", "", "toolbar=no, menubar=no, resizable=yes, scrollbars=yes, location=no, height=1000, width=1000"), t.popup)) {
                            var r = t.popup.document.createElement("form");
                            r.setAttribute("action", e.url), r.setAttribute("method", "post"), a.forEach(function(e) {
                                if (t.popup) {
                                    var n = t.popup.document.createElement("input");
                                    n.setAttribute("type", "hidden"), n.setAttribute("name", e.name), n.setAttribute("value", e.value), r.appendChild(n)
                                }
                            }), t.popup.document.body.appendChild(r), r.submit(), clearInterval(t.popupInterval), t.popupInterval = setInterval(function() {
                                try {
                                    if (!t.popup) return;
                                    t.popup.location.href !== window.location.href && t.popup.location.href || (t.popup.close(), t.setState({
                                        openingTaxInterview: !1
                                    }), t.props.closeTaxPreviewModal(), clearInterval(t.popupInterval))
                                } catch (t) {
                                    var e = 'Blocked a frame with origin "' + window.location.origin + '" from accessing a cross-origin frame.';
                                    if (t.message !== e) throw t
                                }
                            }, 100)
                        }
                    }, t
                }
                return r.__extends(t, e), t.prototype.componentWillUnmount = function() {
                    clearInterval(this.popupInterval)
                }, t.prototype.render = function() {
                    return this.props.data.loading ? i.createElement(N._35, {
                        className: "tax-preview-modal__container",
                        background: N.n.Base,
                        padding: 5
                    }, i.createElement(N._10, {
                        fillContent: !0
                    })) : this.props.data.error ? i.createElement(N._35, {
                        className: "tax-preview-modal__container",
                        background: N.n.Base,
                        padding: 5
                    }, i.createElement(c.a, {
                        message: Object(h.d)("Oops, something went wrong.", "TaxPreviewModal")
                    })) : i.createElement(N._35, {
                        className: "tax-preview-modal__container",
                        background: N.n.Base,
                        padding: 2
                    }, i.createElement(N._35, {
                        borderBottom: !0,
                        padding: {
                            bottom: 1
                        },
                        margin: {
                            bottom: 1
                        }
                    }, i.createElement(N.Q, {
                        type: N._49.H4
                    }, Object(h.d)("Information Reference", "TaxPreviewModal"))), i.createElement(Cr, {
                        onboardEntity: this.props.onboardEntity
                    }), i.createElement(Ir, {
                        channelName: this.props.channelName,
                        workflow: this.props.workflow
                    }), i.createElement(N._8, {
                        display: N.R.Flex,
                        justifyContent: N._7.Center,
                        padding: {
                            top: 2
                        }
                    }, i.createElement(N._8, {
                        display: N.R.InlineBlock,
                        margin: {
                            right: 2
                        }
                    }, i.createElement(N.v, {
                        onClick: this.handleOpenTaxInterviewClick,
                        disabled: this.state.openingTaxInterview
                    }, this.openTaxButtonText)), i.createElement(N._8, {
                        display: N.R.InlineBlock,
                        margin: {
                            right: 2
                        }
                    }, i.createElement(N.v, {
                        type: N.B.Text,
                        onClick: this.props.showStartOverModal,
                        disabled: this.state.openingTaxInterview
                    }, Object(h.d)("Start Over", "TaxPreviewModal"))), this.state.openingTaxInterview && i.createElement(N._8, {
                        display: N.R.Flex,
                        justifyContent: N._7.Center,
                        flexDirection: N.T.Column
                    }, i.createElement(N._10, null))))
                }, Object.defineProperty(t.prototype, "openTaxButtonText", {
                    get: function() {
                        return this.props.taxType === jr.Royalty ? Object(h.d)("Open Royalty Tax Interview Form", "TaxPreviewModal") : Object(h.d)("Open Service Tax Interview Form", "TaxPreviewModal")
                    },
                    enumerable: !0,
                    configurable: !0
                }), t
            }(i.Component),
            xr = Object(o.compose)(Object(m.a)(wr, {
                options: function(e) {
                    return {
                        variables: {
                            taxType: e.taxType,
                            returnURL: window.location.href
                        }
                    }
                }
            }))(Rr),
            Dr = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    return i.createElement(N._8, null, i.createElement(xr, {
                        taxType: this.props.taxType,
                        channelName: this.props.channelName,
                        onboardEntity: this.props.onboardEntity,
                        workflow: this.props.workflow,
                        showStartOverModal: this.props.showStartOverModal,
                        closeTaxPreviewModal: this.props.closeModal
                    }), i.createElement($n.a, {
                        closeOnBackdropClick: !0
                    }))
                }, t
            }(i.Component);
        var Fr, jr, Lr, Mr = Object(g.d)(Object(He.b)(null, function(e) {
            return Object(g.b)({
                closeModal: Xe.c
            }, e)
        }))(Dr);
        ! function(e) {
            e.RoyaltyHeader = "payout-onboarding-tax-interview__royalty-header", e.RoyaltyButton = "payout-onboarding-tax-interview__royalty-button", e.ServiceHeader = "payout-onboarding-tax-interview__service-header", e.ServiceButton = "payout-onboarding-tax-interview__service-button", e.ContinueButton = "payout-onboarding-tax-interview__continue-button"
        }(Fr || (Fr = {})),
        function(e) {
            e.Royalty = "Royalty", e.Service = "Service"
        }(jr || (jr = {})),
        function(e) {
            e[e.NotStarted = 0] = "NotStarted", e[e.Pending = 1] = "Pending", e[e.Failed = 2] = "Failed", e[e.ActionRequired = 3] = "ActionRequired", e[e.Mismatch = 4] = "Mismatch", e[e.Completed = 5] = "Completed"
        }(Lr || (Lr = {}));
        var Ur = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.handleRoyaltyTaxButtonClick = function() {
                    t.showTaxPreviewModal(jr.Royalty)
                }, t.handleServiceTaxButtonClick = function() {
                    t.showTaxPreviewModal(jr.Service)
                }, t.showTaxPreviewModal = function(e) {
                    var n = t.props,
                        a = n.channelName,
                        r = n.onboardEntity,
                        i = n.workflow,
                        o = n.showStartOverModal;
                    t.props.showTaxPreviewModal({
                        taxType: e,
                        channelName: a,
                        onboardEntity: r,
                        workflow: i,
                        showStartOverModal: o
                    })
                }, t.handleContinueClick = function() {
                    t.props.updateStepDisplayed(yt.OnboardStep.PayoutMethod)
                }, t
            }
            return r.__extends(t, e), t.prototype.render = function() {
                return i.createElement(_.a, null, i.createElement(Vn, {
                    title: Object(h.d)("Royalty Tax Interview", "PayoutOnboardingTaxInterview"),
                    statusText: this.royaltyStatusText,
                    statusType: this.royaltyStatusType,
                    borderTop: !0,
                    "data-test-selector": Fr.RoyaltyHeader
                }), i.createElement(N._8, {
                    padding: 2
                }, i.createElement(kr, {
                    taxStatus: this.royaltyTaxStatus
                }), i.createElement(Tr, {
                    taxStatus: this.royaltyTaxStatus,
                    workflow: this.props.workflow,
                    onboardEntity: this.props.onboardEntity
                }), this.royaltyTaxStatus !== Lr.Completed && i.createElement(N.v, {
                    type: this.royaltyTaxButtonType,
                    disabled: this.royaltyTaxButtonDisabled,
                    onClick: this.handleRoyaltyTaxButtonClick,
                    "data-test-selector": Fr.RoyaltyButton
                }, this.royaltyTaxButtonText)), i.createElement(Vn, {
                    title: Object(h.d)("Service Tax Interview", "PayoutOnboardingTaxInterview"),
                    statusText: this.serviceStatusText,
                    statusType: this.serviceStatusType,
                    "data-test-selector": Fr.ServiceHeader
                }), i.createElement(N._8, {
                    padding: 2
                }, i.createElement(kr, {
                    taxStatus: this.serviceTaxStatus
                }), i.createElement(Or, {
                    royaltyTaxCompleted: this.royaltyTaxStatus === Lr.Completed,
                    taxStatus: this.serviceTaxStatus,
                    workflow: this.props.workflow,
                    onboardEntity: this.props.onboardEntity
                }), this.serviceTaxStatus !== Lr.Completed && i.createElement(N.v, {
                    type: this.serviceTaxButtonType,
                    disabled: this.serviceTaxButtonDisabled,
                    onClick: this.handleServiceTaxButtonClick,
                    "data-test-selector": Fr.ServiceButton
                }, this.serviceTaxButtonText)), i.createElement(N._35, {
                    padding: 2,
                    background: N.n.Alt2
                }, i.createElement(N.v, {
                    "data-test-selector": Fr.ContinueButton,
                    size: N.z.Large,
                    disabled: this.continueButtonDisabled,
                    onClick: this.handleContinueClick
                }, Object(h.d)("Continue", "PayoutOnboardingTaxInterview"))))
            }, Object.defineProperty(t.prototype, "royaltyTaxStatus", {
                get: function() {
                    switch (this.props.workflow.currentStep) {
                        case yt.WorkflowState.REGISTRATION_NOT_STARTED:
                        case yt.WorkflowState.AGREEMENT_NOT_STARTED:
                        case yt.WorkflowState.ROYALTY_TAX_INTERVIEW_NOT_STARTED:
                            return Lr.NotStarted;
                        case yt.WorkflowState.ROYALTY_TAX_INTERVIEW_PENDING:
                            return Lr.Pending;
                        case yt.WorkflowState.ROYALTY_TAX_INTERVIEW_ACTION_REQUIRED:
                            return Lr.ActionRequired;
                        case yt.WorkflowState.ROYALTY_TAX_INTERVIEW_MISMATCH:
                            return Lr.Mismatch;
                        case yt.WorkflowState.ROYALTY_TAX_INTERVIEW_FAILED:
                            return Lr.Failed;
                        default:
                            return Lr.Completed
                    }
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "serviceTaxStatus", {
                get: function() {
                    switch (this.props.workflow.currentStep) {
                        case yt.WorkflowState.REGISTRATION_NOT_STARTED:
                        case yt.WorkflowState.AGREEMENT_NOT_STARTED:
                        case yt.WorkflowState.ROYALTY_TAX_INTERVIEW_NOT_STARTED:
                        case yt.WorkflowState.ROYALTY_TAX_INTERVIEW_PENDING:
                        case yt.WorkflowState.ROYALTY_TAX_INTERVIEW_ACTION_REQUIRED:
                        case yt.WorkflowState.ROYALTY_TAX_INTERVIEW_MISMATCH:
                        case yt.WorkflowState.ROYALTY_TAX_INTERVIEW_FAILED:
                        case yt.WorkflowState.SERVICE_TAX_INTERVIEW_NOT_STARTED:
                            return Lr.NotStarted;
                        case yt.WorkflowState.SERVICE_TAX_INTERVIEW_PENDING:
                            return Lr.Pending;
                        case yt.WorkflowState.SERVICE_TAX_INTERVIEW_ACTION_REQUIRED:
                            return Lr.ActionRequired;
                        case yt.WorkflowState.SERVICE_TAX_INTERVIEW_MISMATCH:
                            return Lr.Mismatch;
                        case yt.WorkflowState.SERVICE_TAX_INTERVIEW_FAILED:
                            return Lr.Failed;
                        default:
                            return Lr.Completed
                    }
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "royaltyStatusText", {
                get: function() {
                    return this.getStatusText(this.royaltyTaxStatus)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "royaltyStatusType", {
                get: function() {
                    return this.getStatusType(this.royaltyTaxStatus)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "serviceStatusText", {
                get: function() {
                    return this.getStatusText(this.serviceTaxStatus)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "serviceStatusType", {
                get: function() {
                    return this.getStatusType(this.serviceTaxStatus)
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.getStatusText = function(e) {
                switch (e) {
                    case Lr.NotStarted:
                        return Object(h.d)("Not Started", "PayoutOnboardingTaxInterview");
                    case Lr.Pending:
                        return Object(h.d)("Under Review", "PayoutOnboardingTaxInterview");
                    case Lr.ActionRequired:
                        return Object(h.d)("Additional Documentation Required", "PayoutOnboardingTaxInterview");
                    case Lr.Mismatch:
                    case Lr.Failed:
                        return Object(h.d)("Failed", "PayoutOnboardingTaxInterview");
                    case Lr.Completed:
                        return Object(h.d)("Completed", "PayoutOnboardingTaxInterview");
                    default:
                        return ""
                }
            }, t.prototype.getStatusType = function(e) {
                switch (e) {
                    case Lr.Pending:
                        return N._13.Warn;
                    case Lr.ActionRequired:
                    case Lr.Mismatch:
                    case Lr.Failed:
                        return N._13.Alert;
                    case Lr.Completed:
                        return N._13.Success;
                    default:
                        return
                }
            }, Object.defineProperty(t.prototype, "royaltyTaxButtonType", {
                get: function() {
                    return this.royaltyTaxStatus === Lr.Pending || this.royaltyTaxStatus === Lr.ActionRequired ? N.B.Hollow : N.B.Default
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "royaltyTaxButtonDisabled", {
                get: function() {
                    return this.royaltyTaxStatus === Lr.Completed
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "royaltyTaxButtonText", {
                get: function() {
                    return this.royaltyTaxStatus === Lr.NotStarted ? Object(h.d)("Begin Royalty Tax Interview", "PayoutOnboardingTaxInterview") : Object(h.d)("Retake Royalty Tax Interview", "PayoutOnboardingTaxInterview")
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "serviceTaxButtonType", {
                get: function() {
                    return this.serviceTaxStatus === Lr.Pending || this.serviceTaxStatus === Lr.ActionRequired ? N.B.Hollow : N.B.Default
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "serviceTaxButtonDisabled", {
                get: function() {
                    return this.royaltyTaxStatus !== Lr.Completed || this.serviceTaxStatus === Lr.Completed
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "serviceTaxButtonText", {
                get: function() {
                    return this.serviceTaxStatus === Lr.NotStarted ? Object(h.d)("Begin Service Tax Interview", "PayoutOnboardingTaxInterview") : Object(h.d)("Retake Service Tax Interview", "PayoutOnboardingTaxInterview")
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "continueButtonDisabled", {
                get: function() {
                    return this.royaltyTaxStatus !== Lr.Completed || this.serviceTaxStatus !== Lr.Completed
                },
                enumerable: !0,
                configurable: !0
            }), t
        }(i.Component);
        var Br = Object(o.compose)(Object(He.b)(null, function(e) {
                return Object(g.b)({
                    showTaxPreviewModal: function(e) {
                        var t = r.__rest(e, []);
                        return Object(Xe.d)(Mr, t)
                    }
                }, e)
            }))(Ur),
            Vr = n("NrhD"),
            Wr = {
                "data-test-selector": "require-two-factor-enabled__enable-two-factor-message"
            },
            Qr = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    return this.props.data.loading ? i.createElement(_.a, null, i.createElement(k.a, null, i.createElement(N._14, {
                        lineCount: 4
                    }))) : this.props.data.error ? i.createElement(_.a, null, i.createElement(k.a, null, i.createElement(c.a, {
                        message: Object(h.d)("Oops, something went wrong.", "RequireTwoFactorEnabled")
                    }))) : this.hasTwoFactorEnabled ? i.createElement(i.Fragment, null, this.props.children) : i.createElement(_.a, null, i.createElement(k.a, null, i.createElement(N.Q, r.__assign({
                        type: N._49.P
                    }, Wr), this.props.enableTwoFactorMessage)), i.createElement(k.a, null, i.createElement(l.a, {
                        to: "/settings/security"
                    }, i.createElement(N.v, null, Object(h.d)("Enable Two-Factor Authentication", "RequireTwoFactorEnabled")))))
                }, Object.defineProperty(t.prototype, "hasTwoFactorEnabled", {
                    get: function() {
                        return this.props.data.currentUser.settings.hasTwoFactorEnabled
                    },
                    enumerable: !0,
                    configurable: !0
                }), t
            }(i.Component),
            zr = Object(o.compose)(Object(m.a)(Vr))(Qr),
            Gr = n("AbdN"),
            Yr = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        canceling: !1
                    }, t.onStartOverClick = function() {
                        return r.__awaiter(t, void 0, void 0, function() {
                            return r.__generator(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        this.setState({
                                            canceling: !0
                                        }), e.label = 1;
                                    case 1:
                                        return e.trys.push([1, 3, , 4]), [4, this.props.cancelWorkflow()];
                                    case 2:
                                        return e.sent(), this.props.callCloseModal(), [3, 4];
                                    case 3:
                                        return e.sent(), this.setState({
                                            canceling: !1
                                        }), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, t
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    return i.createElement(i.Fragment, null, i.createElement(N._2, {
                        margin: {
                            bottom: 2
                        }
                    }, i.createElement(N.Q, {
                        type: N._49.H4
                    }, Object(h.d)("Are you sure you would like to start over?", "StartOverModal"))), i.createElement(N._35, {
                        borderTop: !0,
                        borderBottom: !0,
                        padding: {
                            y: 2
                        }
                    }, i.createElement(N._2, {
                        margin: {
                            bottom: 2
                        }
                    }, i.createElement(N.Q, {
                        type: N._49.P
                    }, Object(h.d)("Your current progress will be lost!", "StartOverModal"))), i.createElement(N.Q, {
                        type: N._49.P,
                        bold: !0,
                        color: N.K.Error
                    }, Object(h.d)("WARNING: Starting over will lose any progress and make your Twitch account unpayable. We will hold any payouts until you have fully completed the form.", "StartOverModal"))), i.createElement(N._8, {
                        display: N.R.Flex,
                        justifyContent: N._7.Center,
                        padding: {
                            top: 2
                        }
                    }, i.createElement(N._8, {
                        display: N.R.InlineBlock,
                        margin: {
                            right: 2
                        }
                    }, i.createElement(N.v, {
                        "data-test-selector": "start-over-modal___start-over-button",
                        type: N.B.Text,
                        onClick: this.onStartOverClick,
                        disabled: this.state.canceling
                    }, Object(h.d)("Yes, Start Over", "StartOverModal"))), i.createElement(N._8, {
                        display: N.R.InlineBlock,
                        margin: {
                            right: 2
                        }
                    }, i.createElement(N.v, {
                        "data-test-selector": "start-over-modal__stay-here-button",
                        onClick: this.props.callCloseModal,
                        disabled: this.state.canceling
                    }, Object(h.d)("No, Stay Here", "StartOverModal"))), this.state.canceling && i.createElement(N._8, {
                        display: N.R.Flex,
                        justifyContent: N._7.Center,
                        flexDirection: N.T.Column
                    }, i.createElement(N._10, null))))
                }, t
            }(i.Component),
            qr = (n("n8vm"), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    return i.createElement(N._35, {
                        className: "start-over-modal__container",
                        background: N.n.Base,
                        padding: 2
                    }, i.createElement(Yr, {
                        cancelWorkflow: this.props.cancelWorkflow,
                        callCloseModal: this.props.closeModal
                    }), i.createElement($n.a, {
                        closeOnBackdropClick: !0
                    }))
                }, t
            }(i.Component));
        var Hr = Object(He.b)(null, function(e) {
                return Object(g.b)({
                    closeModal: Xe.c
                }, e)
            })(qr),
            Xr = n("Cte4"),
            Kr = n("CR5K"),
            $r = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        stepDisplayed: yt.OnboardStep.Summary,
                        redirectedAlready: !1
                    }, t.backLinkURL = "/" + t.props.channelName + "/dashboard/settings/revenue", t.totalSteps = t.props.onboardEntity === yt.OnboardEntity.CustomPartner ? 5 : 4, t.goBackToSummary = function() {
                        t.setState({
                            stepDisplayed: yt.OnboardStep.Summary
                        })
                    }, t.updateStepDisplayed = function(e) {
                        t.setState({
                            stepDisplayed: e
                        })
                    }, t.startWorkflow = function() {
                        return r.__awaiter(t, void 0, void 0, function() {
                            var e, t;
                            return r.__generator(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        return [4, this.props.startWorkflow(r.__assign({}, Object(b.a)({
                                            targetUserID: this.props.data.currentUser.id
                                        })))];
                                    case 1:
                                        return e = n.sent(), t = function(t) {
                                            return t.currentUser.payoutInvite && t.currentUser.payoutInvite.workflow && e.data.startPayoutOnboardingWorkflow.workflow && (t.currentUser.payoutInvite.workflow.id = e.data.startPayoutOnboardingWorkflow.workflow.id, t.currentUser.payoutInvite.workflow.currentStep = e.data.startPayoutOnboardingWorkflow.workflow.currentStep, t.currentUser.payoutInvite.workflow.registration = null), t
                                        }, this.updateContainerQuery(t), [2]
                                }
                            })
                        })
                    }, t.cancelWorkflow = function() {
                        return r.__awaiter(t, void 0, void 0, function() {
                            var e, t;
                            return r.__generator(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        return [4, this.props.cancelWorkflow(r.__assign({}, Object(b.a)({
                                            targetUserID: this.props.data.currentUser.id
                                        })))];
                                    case 1:
                                        return e = n.sent(), t = function(t) {
                                            return t.currentUser.payoutInvite && t.currentUser.payoutInvite.workflow && e.data.cancelPayoutOnboardingWorkflow.workflow && (t.currentUser.payoutInvite.workflow.id = e.data.cancelPayoutOnboardingWorkflow.workflow.id, t.currentUser.payoutInvite.workflow.currentStep = e.data.cancelPayoutOnboardingWorkflow.workflow.currentStep, t.currentUser.payoutInvite.workflow.registration = null, t.currentUser.payoutInvite.workflow.taxMismatchErrors = null), t
                                        }, this.updateContainerQuery(t), this.updateStepDisplayed(yt.OnboardStep.Summary), [2]
                                }
                            })
                        })
                    }, t.updateContainerQuery = function(e) {
                        Object(b.e)(Xr, {}, e)
                    }, t.showStartOverModal = function() {
                        t.props.showStartOverModal({
                            cancelWorkflow: t.cancelWorkflow
                        })
                    }, t
                }
                return r.__extends(t, e), Object.defineProperty(t.prototype, "enableTwoFactorMessage", {
                    get: function() {
                        return Object(h.d)("You must enable two-factor authentication to access your onboarding.", "PayoutOnboardingContainer")
                    },
                    enumerable: !0,
                    configurable: !0
                }), t.prototype.componentDidUpdate = function() {
                    this.shouldRedirectPayoutMethod && this.setState({
                        redirectedAlready: !0,
                        stepDisplayed: yt.OnboardStep.PayoutMethod
                    })
                }, t.prototype.componentWillReceiveProps = function(e) {
                    var t = this.props.pubsub.messages.payoutOnboardingEvent,
                        n = e.pubsub.messages.payoutOnboardingEvent,
                        a = t && t.state && n && n.state && t.state !== n.state;
                    t && !a || this.props.data.refetch()
                }, Object.defineProperty(t.prototype, "shouldRedirectPayoutMethod", {
                    get: function() {
                        if (this.props.data.loading || this.props.data.error) return !1;
                        if (this.state.redirectedAlready) return !1;
                        var e = this.props.data.currentUser.payoutInvite.workflow;
                        if (!e) return !1;
                        if (e.currentStep !== yt.WorkflowState.PAYOUT_METHOD_NOT_STARTED && e.currentStep !== yt.WorkflowState.PAYOUT_METHOD_PENDING && e.currentStep !== yt.WorkflowState.COMPLETED && e.currentStep !== yt.WorkflowState.REVIEW_PENDING) return !1;
                        var t = Dn.parse(this.props.location.search);
                        return !!t && "true" === t.redirect_tipalti
                    },
                    enumerable: !0,
                    configurable: !0
                }), t.prototype.render = function() {
                    if (this.props.data.loading) return i.createElement(i.Fragment, null, i.createElement(S.a, {
                        title: or[yt.OnboardStep.Summary].title[this.props.onboardEntity](),
                        description: or[yt.OnboardStep.Summary].description[this.props.onboardEntity](),
                        linkToParent: this.backLinkURL
                    }), i.createElement(_.a, null, i.createElement(k.a, null, i.createElement(N._14, {
                        lineCount: 4
                    }))));
                    if (this.props.data.error) return i.createElement(i.Fragment, null, i.createElement(S.a, {
                        title: or[yt.OnboardStep.Summary].title[this.props.onboardEntity](),
                        description: or[yt.OnboardStep.Summary].description[this.props.onboardEntity](),
                        linkToParent: this.backLinkURL
                    }), i.createElement(_.a, null, i.createElement(k.a, null, i.createElement(c.a, {
                        message: Object(h.d)("Oops, something went wrong.", "PayoutOnboardingContainer")
                    }))));
                    var e = this.props.onboardEntity,
                        t = this.updateStepDisplayed,
                        n = this.props.data.currentUser.payoutInvite.workflow,
                        a = this.updateContainerQuery;
                    if (!n || n.currentStep === yt.WorkflowState.CANCELED) return this.startWorkflow(), i.createElement(i.Fragment, null, i.createElement(S.a, {
                        title: or[yt.OnboardStep.Summary].title[this.props.onboardEntity](),
                        description: or[yt.OnboardStep.Summary].description[this.props.onboardEntity](),
                        linkToParent: this.backLinkURL
                    }), i.createElement(_.a, null, i.createElement(k.a, null, i.createElement(N._14, {
                        lineCount: 4
                    }))));
                    var o, s = {
                        onboardEntity: e,
                        updateStepDisplayed: t,
                        workflow: n,
                        updateContainerQuery: a
                    };
                    switch (this.state.stepDisplayed) {
                        case yt.OnboardStep.Summary:
                            return i.createElement(i.Fragment, null, i.createElement(S.a, {
                                title: or[yt.OnboardStep.Summary].title[this.props.onboardEntity](),
                                description: or[yt.OnboardStep.Summary].description[this.props.onboardEntity](),
                                linkToParent: this.backLinkURL
                            }), i.createElement(zr, {
                                enableTwoFactorMessage: this.enableTwoFactorMessage
                            }, i.createElement(yr, r.__assign({}, s, {
                                showStartOverModal: this.showStartOverModal
                            }))));
                        case yt.OnboardStep.Registration:
                            var l = {
                                channelName: this.props.channelName,
                                userID: this.props.data.currentUser.id
                            };
                            o = i.createElement(Ha, r.__assign({}, s, l));
                            break;
                        case yt.OnboardStep.Agreement:
                            o = i.createElement(qn, r.__assign({}, s));
                            break;
                        case yt.OnboardStep.TaxInterview:
                            l = {
                                channelName: this.props.channelName,
                                showStartOverModal: this.showStartOverModal
                            };
                            o = i.createElement(Br, r.__assign({}, s, l));
                            break;
                        case yt.OnboardStep.PayoutMethod:
                            o = i.createElement(oa, r.__assign({}, s));
                            break;
                        case yt.OnboardStep.Review:
                            o = i.createElement(Xa, r.__assign({}, s))
                    }
                    return i.createElement(i.Fragment, null, i.createElement(S.a, {
                        title: Object(h.d)("Step {numOfCurrentStep} of {numOfTotalSteps}: {stepTitle}", {
                            numOfCurrentStep: Object(h.e)(this.state.stepDisplayed),
                            numOfTotalSteps: Object(h.e)(this.totalSteps),
                            stepTitle: or[this.state.stepDisplayed].title[this.props.onboardEntity]()
                        }, "PayoutOnboardingContainer"),
                        description: or[this.state.stepDisplayed].description[this.props.onboardEntity](),
                        onClick: this.goBackToSummary
                    }), i.createElement(zr, {
                        enableTwoFactorMessage: this.enableTwoFactorMessage
                    }, o))
                }, t
            }(i.Component);
        var Jr, Zr, ei, ti = Object(g.d)(Object(m.a)(Xr), Object(m.a)(Kr, {
                name: "startWorkflow"
            }), Object(m.a)(Gr, {
                name: "cancelWorkflow"
            }), Object(Fn.a)([{
                topic: function(e) {
                    return Object(Ae.l)(e.currentUserID)
                },
                mapMessageTypesToProps: (Jr = {}, Jr["*"] = "payoutOnboardingEvent", Jr)
            }]), Object(He.b)(null, function(e) {
                return Object(g.b)({
                    showStartOverModal: function(e) {
                        var t = r.__rest(e, []);
                        return Object(Xe.d)(Hr, t)
                    }
                }, e)
            }), l.f)($r),
            ni = n("lQfX"),
            ai = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    return this.props.data.loading ? i.createElement(N._8, {
                        padding: {
                            y: 5
                        }
                    }, i.createElement(N._10, {
                        fillContent: !0
                    })) : this.props.data.error ? i.createElement(N._8, {
                        padding: {
                            y: 5
                        }
                    }, i.createElement(c.a, null)) : this.hasAgreementPendingUpgrade ? i.createElement(s.b, {
                        to: "/" + this.props.match.params.channelName + "/dashboard/settings/revenue/upgrade-terms"
                    }) : i.createElement(ti, {
                        channelName: this.props.match.params.channelName,
                        currentUserID: this.props.data.currentUser.id,
                        onboardEntity: this.props.data.currentUser.payoutInvite.category
                    })
                }, Object.defineProperty(t.prototype, "hasAgreementPendingUpgrade", {
                    get: function() {
                        return !!this.props.data.currentUser.payoutInvite.workflow && this.props.data.currentUser.payoutInvite.workflow.currentStep === yt.WorkflowState.AGREEMENT_PENDING_UPGRADE
                    },
                    enumerable: !0,
                    configurable: !0
                }), t
            }(i.Component),
            ri = Object(o.compose)(Object(m.a)(ni))(ai),
            ii = n("17w3"),
            oi = (n("mHbH"), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    return this.props.data.loading ? i.createElement(N._8, {
                        padding: {
                            y: 5
                        }
                    }, i.createElement(N._10, {
                        fillContent: !0
                    })) : this.props.data.error ? i.createElement(N._8, {
                        padding: {
                            y: 5
                        }
                    }, i.createElement(c.a, null)) : this.isOnboardingComplete ? i.createElement(i.Fragment, null, i.createElement(S.a, {
                        title: Object(h.d)("Change Payout Method", "PayoutSettingsPage"),
                        linkToParent: "/" + this.props.match.params.channelName + "/dashboard/settings/revenue"
                    }), i.createElement(zr, {
                        enableTwoFactorMessage: Object(h.d)("You must enable two-factor authentication to change your payout method.", "PayoutSettingsPage")
                    }, i.createElement(_.a, null, i.createElement(k.a, null, i.createElement(Zn, {
                        tipaltiURL: this.tipaltiURL
                    }))))) : i.createElement(d.a, null)
                }, Object.defineProperty(t.prototype, "isOnboardingComplete", {
                    get: function() {
                        return !!this.props.data.currentUser.payoutInvite.workflow && this.props.data.currentUser.payoutInvite.workflow.currentStep === yt.WorkflowState.COMPLETED
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "tipaltiURL", {
                    get: function() {
                        return this.props.data.currentUser.payoutInvite.workflow.payoutSettingsURL
                    },
                    enumerable: !0,
                    configurable: !0
                }), t
            }(i.Component)),
            si = Object(o.compose)(Object(m.a)(ii))(oi),
            li = n("vBst"),
            ci = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onChange = function(e) {
                        t.props.onChange(t.props.index, e.currentTarget.value)
                    }, t
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    return i.createElement(y.a, {
                        label: this.props.label
                    }, i.createElement(N._4, {
                        type: N._5.Text,
                        maxLength: 50,
                        placeholder: Object(h.d)("Enter the name of your subscription ticket", "SubsNameSettingsSection"),
                        value: this.props.displayName,
                        onChange: this.onChange
                    }), i.createElement(v.a, {
                        text: this.props.description
                    }))
                }, t
            }(i.Component),
            di = n("Kz5W"),
            ui = n("81je"),
            mi = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        displayNames: new Array,
                        saveStatus: f.b.NoChanges
                    }, t.onDisplayNameChange = function(e, n) {
                        return r.__awaiter(t, void 0, void 0, function() {
                            var t;
                            return r.__generator(this, function(a) {
                                return (t = this.state.displayNames.slice())[e] = n, this.setState({
                                    displayNames: t,
                                    saveStatus: f.b.DirtyChanges
                                }), [2]
                            })
                        })
                    }, t.onClickSave = function() {
                        return r.__awaiter(t, void 0, void 0, function() {
                            var e, t, n, a, i;
                            return r.__generator(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        if (!this.props.data.user || !this.props.data.user.id || !this.props.data.user.subscriptionProducts) return [2];
                                        e = f.b.Working, this.setState({
                                            saveStatus: e
                                        }), t = 0, r.label = 1;
                                    case 1:
                                        if (!(t < this.state.displayNames.length)) return [3, 6];
                                        if (!(n = this.props.data.user.subscriptionProducts[t])) return [3, 5];
                                        a = this.state.displayNames[t], i = {
                                            targetUserID: this.props.data.user.id,
                                            id: n.id,
                                            displayName: a
                                        }, r.label = 2;
                                    case 2:
                                        return r.trys.push([2, 4, , 5]), [4, this.props.updateSubscriptionProduct(Object(b.a)(i))];
                                    case 3:
                                        return r.sent(), e = f.b.Success, [3, 5];
                                    case 4:
                                        return r.sent(), e = f.b.Error, [3, 5];
                                    case 5:
                                        return t++, [3, 1];
                                    case 6:
                                        return this.setState({
                                            saveStatus: e
                                        }), [2]
                                }
                            })
                        })
                    }, t.sortByTier = function(e) {
                        var t = e.slice();
                        return t.sort(function(e, t) {
                            var n = parseInt(e.tier || "0", 10);
                            n = n || 0;
                            var a = parseInt(t.tier || "0", 10);
                            return n - (a = a || 0)
                        }), t
                    }, t.createSubPlanName = function(e) {
                        switch (e) {
                            case li.a.Tier1:
                                return Object(h.d)("Tier 1 Subscription Plan Name", "SubsNameSettingsPage");
                            case li.a.Tier2:
                                return Object(h.d)("TIer 2 Subscription Plan Name", "SubsNameSettingsPage");
                            case li.a.Tier3:
                                return Object(h.d)("Tier 3 Subscription Plan Name", "SubsNameSettingsPage");
                            default:
                                return Object(h.d)("Subscription Plan Name", "SubsNameSettingsPage")
                        }
                    }, t.createSubPlanDescription = function(e) {
                        return e ? Object(h.d)("Name of your {price} subscription plan that will be visible to everyone", {
                            price: e
                        }, "SubsNameSettingsPage") : Object(h.d)("Name of your subscription plan that will be visible to everyone", "SubsNameSettingsPage")
                    }, t
                }
                return r.__extends(t, e), t.prototype.componentWillMount = function() {
                    var e = this.props.data,
                        t = e.loading,
                        n = e.error,
                        a = e.user;
                    if (!t && !n && a && a.subscriptionProducts) {
                        var r = this.sortByTier(a.subscriptionProducts);
                        this.setState({
                            displayNames: r.map(function(e) {
                                return e.displayName
                            }),
                            saveStatus: f.b.NoChanges
                        })
                    }
                }, t.prototype.componentWillReceiveProps = function(e) {
                    var t = e.data,
                        n = t.loading,
                        a = t.error,
                        r = t.user;
                    if (this.props.data.loading && !n && !a && r && r.subscriptionProducts) {
                        var i = this.sortByTier(r.subscriptionProducts);
                        this.setState({
                            displayNames: i.map(function(e) {
                                return e.displayName
                            }),
                            saveStatus: f.b.NoChanges
                        })
                    }
                }, t.prototype.render = function() {
                    var e = this.props.data,
                        t = e.loading,
                        n = e.error,
                        a = e.user;
                    if (!a || !a.subscriptionProducts) return t ? i.createElement(N._10, {
                        fillContent: !0
                    }) : n ? i.createElement(c.a, null) : null;
                    var r = i.createElement(E.a, {
                        status: this.state.saveStatus,
                        onClickSave: this.onClickSave
                    });
                    return i.createElement(N._8, null, i.createElement(S.a, {
                        title: Object(h.d)("Subscription Information", "SubsNameSettingsPage"),
                        linkToParent: "/" + this.props.match.params.channelName + "/dashboard/settings/revenue"
                    }), i.createElement(_.a, {
                        footer: r
                    }, this.renderProducts()))
                }, t.prototype.renderProducts = function() {
                    var e = this;
                    return this.props.data.user && this.props.data.user.subscriptionProducts ? this.props.data.user.subscriptionProducts.map(function(t, n) {
                        if (!t) return null;
                        var a = e.state.displayNames[n],
                            r = t.id,
                            o = e.createSubPlanName(t.tier),
                            s = e.createSubPlanDescription(t.price || void 0);
                        return 0 === n && (o = e.createSubPlanName(t.tier), s = e.createSubPlanDescription()), i.createElement(ci, {
                            key: r,
                            index: n,
                            label: o,
                            displayName: a,
                            onChange: e.onDisplayNameChange,
                            description: s
                        })
                    }) : null
                }, t
            }(i.Component),
            pi = Object(g.d)(Object(m.a)(di, {
                options: function(e) {
                    return {
                        variables: {
                            login: e.match.params.channelName
                        }
                    }
                }
            }), Object(m.a)(ui, {
                name: "updateSubscriptionProduct"
            }))(mi),
            gi = n("3ecc"),
            hi = n("yOH8"),
            bi = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        parentName: "",
                        parentConfirmationChecked: !1,
                        processingAgreement: !1,
                        redirecting: !1
                    }, t.updateParentName = function(e) {
                        t.setState({
                            parentName: e
                        })
                    }, t.updateParentConfirmation = function(e) {
                        t.setState({
                            parentConfirmationChecked: e
                        })
                    }, t.handleAgreeClick = function() {
                        return r.__awaiter(t, void 0, void 0, function() {
                            return r.__generator(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        this.setState({
                                            processingAgreement: !0
                                        }), e.label = 1;
                                    case 1:
                                        return e.trys.push([1, 3, , 4]), [4, this.acceptProgramAgreement()];
                                    case 2:
                                        return e.sent(), [3, 4];
                                    case 3:
                                        return e.sent(), this.setState({
                                            processingAgreement: !1
                                        }), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, t.acceptProgramAgreement = function() {
                        return r.__awaiter(t, void 0, void 0, function() {
                            var e, t, n, a;
                            return r.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        return this.props.data.currentUser.payoutInvite.category === yt.OnboardEntity.StandardPartner || this.props.data.currentUser.payoutInvite.category === yt.OnboardEntity.PremiumPartner ? (n = this.props.data.currentUser.programAgreement || "", e = n && n.type, t = n && n.version) : (e = this.props.data.currentUser.payoutInvite.category, t = "v1"), a = r.__assign({}, Object(b.a)({
                                            type: e,
                                            version: t
                                        })), [4, this.props.acceptProgramAgreement(a)];
                                    case 1:
                                        return i.sent().data.acceptProgramAgreement.error ? (this.setState({
                                            processingAgreement: !1
                                        }), [2]) : (this.setState({
                                            redirecting: !0
                                        }), [4, this.props.data.refetch()]);
                                    case 2:
                                        return i.sent(), this.props.history.push("/" + this.props.match.params.channelName + "/dashboard/settings/revenue"), [2]
                                }
                            })
                        })
                    }, t
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    return this.props.data.loading || this.state.redirecting ? i.createElement(N._8, {
                        padding: {
                            y: 5
                        }
                    }, i.createElement(N._10, {
                        fillContent: !0
                    })) : this.props.data.error ? i.createElement(N._8, {
                        padding: {
                            y: 5
                        }
                    }, i.createElement(c.a, null)) : this.hasAgreementPendingUpgrade ? i.createElement(i.Fragment, null, i.createElement(S.a, {
                        title: this.headerTitle,
                        linkToParent: "/" + this.props.match.params.channelName + "/dashboard/settings/revenue"
                    }), i.createElement(zr, {
                        enableTwoFactorMessage: Object(h.d)("You must enable two-factor authentication to accept your agreement.", "UpgradeTermsPage")
                    }, i.createElement(_.a, null, i.createElement(k.a, null, i.createElement(N._35, {
                        borderMarked: !0,
                        padding: 2,
                        elevation: 1
                    }, this.renderAgreement)), this.requiresParentConsent && i.createElement(Wn, {
                        updateParentName: this.updateParentName,
                        updateParentConfirmation: this.updateParentConfirmation
                    }), i.createElement(N._35, {
                        padding: 2,
                        background: N.n.Alt2
                    }, i.createElement(N.v, {
                        size: N.z.Large,
                        state: this.state.processingAgreement ? N.A.Loading : N.A.Default,
                        onClick: this.handleAgreeClick,
                        disabled: this.proceedButtonDisabled || this.state.processingAgreement
                    }, Object(h.d)("Agree", "UpgradeTermsPage")))))) : i.createElement(d.a, null)
                }, Object.defineProperty(t.prototype, "headerTitle", {
                    get: function() {
                        switch (this.props.data.currentUser.payoutInvite.category) {
                            case yt.OnboardEntity.Affiliate:
                                return Object(h.d)("Agree to the Twitch Affiliate Agreement", "UpgradeTermsPage");
                            case yt.OnboardEntity.StandardPartner:
                            case yt.OnboardEntity.PremiumPartner:
                                return Object(h.d)("Agree to the Twitch Partner Agreement", "UpgradeTermsPage");
                            default:
                                return ""
                        }
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "hasAgreementPendingUpgrade", {
                    get: function() {
                        return !!this.props.data.currentUser.payoutInvite.workflow && this.props.data.currentUser.payoutInvite.workflow.currentStep === yt.WorkflowState.AGREEMENT_PENDING_UPGRADE
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "renderAgreement", {
                    get: function() {
                        switch (this.props.data.currentUser.payoutInvite.category) {
                            case yt.OnboardEntity.Affiliate:
                                return i.createElement(Mn, null);
                            case yt.OnboardEntity.StandardPartner:
                            case yt.OnboardEntity.PremiumPartner:
                                var e = this.props.data.currentUser.programAgreement;
                                return e && i.createElement(zn, {
                                    body: e.body
                                });
                            default:
                                return null
                        }
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "requiresParentConsent", {
                    get: function() {
                        if (!this.props.data.currentUser.payoutInvite.workflow) return !1;
                        var e = this.props.data.currentUser.payoutInvite.workflow.registration.birthdate;
                        return Object(jn.differenceInYears)(new Date, e) < 18
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "proceedButtonDisabled", {
                    get: function() {
                        return !(!this.requiresParentConsent || this.state.parentName && this.state.parentConfirmationChecked)
                    },
                    enumerable: !0,
                    configurable: !0
                }), t
            }(i.Component),
            fi = Object(o.compose)(Object(m.a)(hi), Object(m.a)(gi, {
                name: "acceptProgramAgreement"
            }), s.f)(bi),
            Ei = function() {
                return i.createElement(i.Fragment, null, i.createElement(N._2, {
                    margin: {
                        bottom: 1
                    }
                }, i.createElement(N.Q, {
                    type: N._49.H4,
                    bold: !0
                }, Object(h.d)("Custom Partner Agreement", "CustomPartnerAgreement"))), i.createElement(N.Q, {
                    type: N._49.P
                }, Object(h.d)("Please contact <x:link>support</x:link> for a copy of your active Twitch Partner Agreement.", {
                    "x:link": function(e) {
                        return i.createElement(N.O, {
                            to: "https://help.twitch.tv/customer/portal/emails/new",
                            targetBlank: !0
                        }, e)
                    }
                }, "CustomPartnerAgreement")))
            },
            vi = n("kB8u"),
            yi = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    return this.props.data.loading ? i.createElement(N._8, {
                        padding: {
                            y: 5
                        }
                    }, i.createElement(N._10, {
                        fillContent: !0
                    })) : this.props.data.error ? i.createElement(N._8, {
                        padding: {
                            y: 5
                        }
                    }, i.createElement(c.a, null)) : this.canAccessViewTermsPage ? i.createElement(i.Fragment, null, i.createElement(S.a, {
                        title: Object(h.d)("View Active Partner Agreement", "ViewTermsPage"),
                        linkToParent: "/" + this.props.match.params.channelName + "/dashboard/settings/revenue"
                    }), i.createElement(zr, {
                        enableTwoFactorMessage: Object(h.d)("You must enable two-factor authentication to view your agreement.", "ViewTermsPage")
                    }, i.createElement(_.a, null, i.createElement(k.a, null, i.createElement(N._35, {
                        borderMarked: !0,
                        padding: 2,
                        elevation: 1
                    }, this.renderAgreement))))) : i.createElement(d.a, null)
                }, Object.defineProperty(t.prototype, "canAccessViewTermsPage", {
                    get: function() {
                        var e = this.props.data.currentUser;
                        return !!e && Rt(e.payoutPlans && e.payoutPlans.map(function(e) {
                            return {
                                category: e.category,
                                tags: e.tags,
                                isReceivingRevenue: e.isReceivingRevenue
                            }
                        }), e.payoutInvite && {
                            category: e.payoutInvite.category,
                            isLegacy: e.payoutInvite.isLegacy,
                            workflow: {
                                currentStep: e.payoutInvite.workflow && e.payoutInvite.workflow.currentStep
                            }
                        })
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "renderAgreement", {
                    get: function() {
                        var e = this.props.data.currentUser;
                        if (!e || !e.payoutInvite) return null;
                        var t = e.payoutInvite;
                        if (t.isLegacy || t.category === st.CUSTOM_PARTNER) return i.createElement(Ei, null);
                        if (t.category === st.STANDARD_PARTNER || t.category === st.PREMIUM_PARTNER) {
                            var n = this.props.data.currentUser && this.props.data.currentUser.programAgreement;
                            return n && i.createElement(zn, {
                                body: n.body
                            })
                        }
                    },
                    enumerable: !0,
                    configurable: !0
                }), t
            }(i.Component),
            Si = Object(o.compose)(Object(m.a)(vi))(yi);
        ! function(e) {
            e.AFFILIATE = "AFFILIATE", e.CUSTOM_PARTNER = "CUSTOM_PARTNER", e.EXTENSIONS_DEVELOPER = "EXTENSIONS_DEVELOPER", e.PREMIUM_PARTNER = "PREMIUM_PARTNER", e.STANDARD_PARTNER = "STANDARD_PARTNER", e.UNPAID_PARTNER = "UNPAID_PARTNER"
        }(Zr || (Zr = {})),
        function(e) {
            e.AFFILIATE = "AFFILIATE", e.EXTENSIONS_DEVELOPER = "EXTENSIONS_DEVELOPER", e.PARTNER = "PARTNER"
        }(ei || (ei = {}));
        var ki = n("3+pE"),
            _i = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    var e = this.props.data,
                        t = e.loading,
                        n = e.error,
                        a = e.channel,
                        r = e.currentUser;
                    return t ? i.createElement(N._8, {
                        fullHeight: !0
                    }, i.createElement(N._10, {
                        fillContent: !0
                    })) : !n && a && r ? this.isChannelOwner || this.isStaff ? a.payoutInvite && a.payoutInvite.category !== Zr.UNPAID_PARTNER ? (this.props.latencyTracking.reportInteractive(), i.createElement(u.b, null, i.createElement(N._8, {
                        padding: 2,
                        fullHeight: !0
                    }, i.createElement(l.e, null, i.createElement(s.c, {
                        path: "/:channelName/dashboard/settings/revenue",
                        exact: !0,
                        component: Xt
                    }), this.isChannelOwner && i.createElement(s.c, {
                        path: "/:channelName/dashboard/settings/revenue/payout-onboarding",
                        component: ri
                    }), this.isChannelOwner && i.createElement(s.c, {
                        path: "/:channelName/dashboard/settings/revenue/payouts",
                        component: si
                    }), this.isChannelOwner && i.createElement(s.c, {
                        path: "/:channelName/dashboard/settings/revenue/upgrade-terms",
                        component: fi
                    }), this.isChannelOwner && i.createElement(s.c, {
                        path: "/:channelName/dashboard/settings/revenue/view-terms",
                        component: Si
                    }), (this.isPaidAffiliate || this.isPaidPartner) && i.createElement(s.c, {
                        path: "/:channelName/dashboard/settings/revenue/cheer",
                        component: ke
                    }), (this.isPaidAffiliate || this.isPaidPartner) && i.createElement(s.c, {
                        path: "/:channelName/dashboard/settings/revenue/cheerbadges",
                        component: pe
                    }), (this.isPaidAffiliate || this.isPaidPartner) && i.createElement(s.c, {
                        path: "/:channelName/dashboard/settings/revenue/game-commerce",
                        component: ht
                    }), (this.isPaidAffiliate || this.isPaidPartner) && i.createElement(s.c, {
                        path: "/:channelName/dashboard/settings/revenue/game-commerce-v2",
                        component: vt
                    }), (this.isPaidAffiliate || this.isPaidPartner) && i.createElement(s.c, {
                        path: "/:channelName/dashboard/settings/revenue/merch-by-amazon",
                        component: xn
                    }), (this.isPaidAffiliate || this.isPaidPartner) && i.createElement(s.c, {
                        path: "/:channelName/dashboard/settings/revenue/subscription/chatperks",
                        component: H
                    }), (this.isPaidAffiliate || this.isPaidPartner) && i.createElement(s.c, {
                        path: "/:channelName/dashboard/settings/revenue/subscription/ticket",
                        component: pi
                    }), this.isPaidPartner && i.createElement(s.c, {
                        path: "/:channelName/dashboard/settings/revenue/cheermotes",
                        component: ze
                    }), this.isPaidPartner && i.createElement(s.c, {
                        path: "/:channelName/dashboard/settings/revenue/subscription/badges",
                        component: wn
                    }), i.createElement(s.c, {
                        component: d.a
                    }))))) : i.createElement(N._8, {
                        fullHeight: !0
                    }, i.createElement(d.a, null)) : i.createElement(s.b, {
                        to: "/" + r.login + "/dashboard"
                    }) : i.createElement(N._8, {
                        fullHeight: !0
                    }, i.createElement(c.a, null))
                }, Object.defineProperty(t.prototype, "isChannelOwner", {
                    get: function() {
                        return !(!this.props.data.currentUser || this.props.match.params.channelName !== this.props.data.currentUser.login)
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "isStaff", {
                    get: function() {
                        return !!(this.props.data.currentUser && this.props.data.currentUser.roles && this.props.data.currentUser.roles.isStaff)
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "isPaidAffiliate", {
                    get: function() {
                        return !!(this.props.data.channel && this.props.data.channel.payoutPlans && this.props.data.channel.payoutPlans.find(function(e) {
                            return e.category === ei.AFFILIATE && e.isReceivingRevenue
                        }))
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "isPaidPartner", {
                    get: function() {
                        return !!(this.props.data.channel && this.props.data.channel.payoutPlans && this.props.data.channel.payoutPlans.find(function(e) {
                            return e.category === ei.PARTNER && e.isReceivingRevenue
                        }))
                    },
                    enumerable: !0,
                    configurable: !0
                }), t
            }(i.Component),
            Ni = Object(o.compose)(Object(p.d)("DashboardRevenueSettingsRoot"), Object(m.a)(ki, {
                options: function(e) {
                    return {
                        variables: {
                            channelName: e.match.params.channelName
                        }
                    }
                }
            }))(_i);
        n.d(t, "DashboardRevenueSettingsRootComponent", function() {
            return _i
        }), n.d(t, "DashboardRevenueSettingsRoot", function() {
            return Ni
        })
    },
    z1LJ: function(e, t) {}
});
//# sourceMappingURL=pages.dashboard-revenue-settings-2295f08fab8cc684a7f360f6e10073ff.js.map