webpackJsonp([98], {
    "+0KR": function(e, t, n) {
        "use strict";
        var a = n("oR9V");
        n.d(t, "a", function() {
            return a.a
        }), n.d(t, "b", function() {
            return a.b
        })
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
                end: 188
            }
        };
        n.loc.source = {
            body: "query SubsSettingsSection_Query ($login: String!) {\nuser(login: $login) {\nid\nroles {\nisPartner\n}\nsubscriptionProducts {\nid\nhasAdFree\nhasFastChat\nhasSubonlyVideoArchive\nhasSubOnlyChat\n}\n}\n}",
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
            l.n.track(d.SpadeEventType.PartnerAffiliateSettings, t)
        };
        var a, r, i, o, s = n("TToO"),
            l = n("6sO2"),
            d = n("vH/s");
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
            d = n("7vx8"),
            c = n("HW2d"),
            u = n("Jo6h"),
            m = n("Odds"),
            p = n("tu8+"),
            h = (n("pBoG"), "GAME_COMMERCE_V2"),
            g = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        amendmentAccepted: !1
                    }, t.onAmendmentClick = function() {
                        if (!t.props.data) return !1;
                        var e = {
                                channel: t.props.channelName,
                                channel_id: t.props.data.user && t.props.data.user.id,
                                partner_status: c.c.NONE,
                                associate_status: c.a.NONE
                            },
                            n = t.props.data.user && t.props.data.user.roles,
                            r = t.props.data.user && t.props.data.user.amazon.associatesStore.storeID;
                        return n && (e.partner_status = n.isPartner ? c.c.PARTNER : n.isAffiliate ? c.c.AFFILIATE : c.c.NONE), r && (e.associate_status = c.a.LINKED), Object(c.d)(a.__assign({
                            action: c.b.OptInEarnRevenueCheckbox
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
                }, t = a.__decorate([Object(d.a)(p, {
                    options: function(e) {
                        return {
                            variables: {
                                login: e.channelName,
                                amendmentType: h
                            }
                        }
                    }
                })], t)
            }(s.PureComponent),
            b = n("oIkB"),
            f = n("Wedf"),
            v = "amendment-modal-accept-button",
            E = function(e) {
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
                            "data-test-selector": v,
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
                                        return e.trys.push([1, , 3, 4]), [4, this.props.setAmendmentAcceptance(Object(b.a)(h))];
                                    case 2:
                                        return e.sent(), Object(c.d)(a.__assign({
                                            action: c.b.AcceptCommerceAddendum
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
            y = Object(d.a)(f, {
                name: "setAmendmentAcceptance"
            })(E),
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
        })(g);
        n.d(t, "a", function() {
            return _
        })
    },
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
    QRuM: function(e, t, n) {
        "use strict";
        var a, r = n("TToO"),
            i = n("GiK3"),
            o = n("6sO2");
        ! function(e) {
            e.On = "on", e.Off = "off", e.StaffOnly = "staff"
        }(a || (a = {}));
        var s = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    var e = o.b.get(this.props.name, a.Off);
                    return e === a.On || e === a.StaffOnly && this.props.isStaff ? this.props.children : null
                }, t
            }(i.Component),
            l = s;
        n.d(t, "a", function() {
            return a
        }), n.d(t, "c", function() {
            return s
        }), n.d(t, "b", function() {
            return l
        })
    },
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
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 229
            }
        };
        n.loc.source = {
            body: "query PayoutOnboardingAgreement_CurrentUser($withAgreement: Boolean!) {\ncurrentUser {\nid\nroles {\nisPartner\n}\npayoutPlans {\ncategory\nisReceivingRevenue\ntags\n}\nprogramAgreement @include(if: $withAgreement) {\ntype\nversion\nbody\n}\n}\n}",
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
        var d = n("shWG");
        n.d(t, "TaxMismatchError", function() {
            return d.a
        });
        var c = n("RhBo");
        n.n(c);
        n.o(c, "WorkflowState") && n.d(t, "WorkflowState", function() {
            return c.WorkflowState
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
            d = n("Jo6h"),
            c = n("Odds"),
            u = n("LHN4"),
            m = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.renderButtonText = function(e) {
                        return e ? Object(i.d)("Edit", "AmazonRetailAssociatesAccountLinking") : Object(i.d)("Get Started", "AmazonRetailAssociatesAccountLinking")
                    }, t.renderDescriptionText = function(e) {
                        return e ? Object(i.d)("Link to {storeID}", {
                            storeID: r.createElement(c.Q, {
                                type: c._49.Span,
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
                    return this.props.data.user && this.props.data.user.amazon && this.props.data.user.amazon.associatesStore && (e = this.props.data.user.amazon.associatesStore.storeID, t = this.props.data.user.amazon.associatesStore.isPayoutEnabled), r.createElement(r.Fragment, null, r.createElement(d.a, {
                        orientation: c.X.Horizontal,
                        label: Object(i.d)("Link an Amazon Associates Account", "AmazonRetailAssociatesAccountLinking")
                    }, r.createElement(c.Q, {
                        "data-test-selector": "amazon-associates-account-linking-setup-text"
                    }, this.renderDescriptionText(e || null)), r.createElement(c._8, {
                        padding: {
                            top: .5
                        }
                    }, r.createElement(c.v, {
                        "data-test-selector": "amazon-associates-account-linking-setup-button",
                        onClick: this.launchLinkAccount
                    }, this.renderButtonText(e || null)))), r.createElement(d.a, {
                        orientation: c.X.Horizontal,
                        label: Object(i.d)("Receive payments from Amazon.com", "AmazonRetailAssociatesAccountLinking")
                    }, !(!e || t) && r.createElement(c.Q, {
                        color: c.K.Error,
                        "data-test-selector": "amazon-associates-account-linking-tax-info-error"
                    }, Object(i.d)("You must complete your tax and payment forms before you will receive any payments.", "AmazonRetailAssociatesAccountLinking")), r.createElement(c.Q, null, Object(i.d)("To receive payments, please provide your <x:tax>Tax Information</x:tax> and your <x:payment>Payment Information</x:payment>. Note, changes made to your Tax Information must be made by the primary account holder and any changes after the 15th will go into effect the following month. Please ignore this message if you have already submitted your information.", {
                        "x:tax": function(e) {
                            return r.createElement(c.Q, {
                                key: "tax",
                                type: c._49.Span,
                                bold: !0,
                                decoration: c._47.Underline
                            }, e)
                        },
                        "x:payment": function(e) {
                            return r.createElement(c.Q, {
                                key: "payment",
                                type: c._49.Span,
                                bold: !0,
                                decoration: c._47.Underline
                            }, e)
                        }
                    }, "AmazonRetailAssociatesAccountLinking")), r.createElement(c._8, {
                        padding: {
                            top: 1
                        }
                    }, r.createElement(c._2, {
                        padding: {
                            right: 2
                        }
                    }, r.createElement("a", {
                        href: "#",
                        onClick: this.launchAssociatesAccount
                    }, Object(i.d)("Add/update tax information", "AmazonRetailAssociatesAccountLinking"))), r.createElement(c._2, {
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
                end: 274
            }
        };
        n.loc.source = {
            body: "query ChatBadgeTiersForm_GetBadgeTiers($login: String!) {\nuser(login: $login) {\nid\nlogin\nsettings {\ncheer {\nbadges {\ntiers {\nisEnabled\nthreshold\nbadge {\nid\ntitle\nimage1x: imageURL(size: NORMAL)\nimage2x: imageURL(size: DOUBLE)\nimage4x: imageURL(size: QUADRUPLE)\n}\n}\n}\n}\n}\n}\n}",
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
                d = s.A.Default,
                c = s.B.Default,
                u = !1;
            return t === a.Working ? d = s.A.Loading : t === a.Success ? d = s.A.Success : t === a.Error ? c = s.B.Alert : t === a.NoChanges && (u = !0), n || (n = t === a.Error ? Object(o.d)("Error", "Save Button") : Object(o.d)("Save", "Save Button")), i.createElement(s.v, r.__assign({
                disabled: u,
                state: d,
                type: c
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
                end: 277
            }
        };
        n.loc.source = {
            body: "query ChatBadgeUploadForm_GetBadgeTiers($login: String!) {\nuser(login: $login) {\nid\nlogin\nsettings {\ncheer {\nbadges {\ntiers {\nthreshold\nbadge {\nid\ntitle\nimage1x: imageURL(size: NORMAL)\nimage2x: imageURL(size: DOUBLE)\nimage4x: imageURL(size: QUADRUPLE)\nuser {\nid\n}\n}\n}\n}\n}\n}\n}\n}",
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
    xHx8: function(e, t) {
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
                                            value: "isPartner"
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
                                    }]
                                }
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 224
            }
        };
        n.loc.source = {
            body: "query OnboardingSection_CurrentUser {\ncurrentUser {\nid\nlogin\nroles {\nisAffiliate\nisPartner\nisExtensionsDeveloper\n}\npayoutPlans {\ncategory\nisReceivingRevenue\ntags\n}\npayoutInvite {\nid\ncategory\nworkflow {\nid\ncurrentStep\n}\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
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
        var a = n("TToO"),
            r = n("GiK3"),
            i = n("3zLD"),
            o = n("CIox"),
            s = n("F8kA"),
            l = n("yWCw"),
            d = n("68hr"),
            c = n("zCIC"),
            u = n("7vx8"),
            m = n("CSlQ"),
            p = n("6sO2"),
            h = n("5EkD"),
            g = n("2KeS"),
            b = n("n63+"),
            f = n("d4P3"),
            v = n("oIkB"),
            E = n("+0KR"),
            y = n("Jo6h"),
            S = n("Odds"),
            k = function(e) {
                return r.createElement(S._35, {
                    display: S.R.Flex,
                    flexDirection: S.T.Row,
                    background: S.n.Alt,
                    alignItems: S.c.Center,
                    padding: 1
                }, r.createElement(S._8, {
                    margin: {
                        right: 1
                    },
                    display: S.R.Flex,
                    alignContent: S.b.Center
                }, r.createElement(S._52, {
                    label: e.title,
                    "data-test-selector": "tooltip-selector"
                }, r.createElement("img", {
                    alt: e.title,
                    src: e.imageSrc
                }))), r.createElement(S._8, {
                    flexGrow: 1
                }, r.createElement(S.Q, {
                    "data-test-selector": "threshold-selector"
                }, Object(p.d)("{threshold} Bit Badge", {
                    threshold: Object(p.e)(e.threshold)
                }, "ChatBadgeTierItem"))), r.createElement(S._51, {
                    onChange: e.onToggle,
                    checked: e.checked,
                    "data-test-selector": "toggle-selector"
                }, Object(p.d)("Edit", "ChatBadgeTierItem")))
            },
            _ = function() {
                return r.createElement(S._35, {
                    padding: 1,
                    display: S.R.Flex,
                    flexDirection: S.T.Row
                }, r.createElement(S._8, {
                    padding: {
                        right: 1
                    }
                }, r.createElement(S._14, {
                    width: 20,
                    height: 20
                })), r.createElement(S._8, {
                    flexGrow: 1
                }, r.createElement(S._14, null)))
            },
            O = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        saveStatus: E.b.NoChanges
                    }, t.renderTierItems = function() {
                        return t.tiers.map(function(e, n) {
                            var a, i;
                            return e && e.badge ? (a = e.badge.id, i = r.createElement(k, {
                                threshold: e.threshold,
                                checked: e.isEnabled,
                                imageSrc: e.badge.image1x,
                                title: e.badge.title,
                                onToggle: t.onItemToggle.bind(t, n)
                            })) : (a = n, i = r.createElement(_, null)), r.createElement(S._8, {
                                margin: {
                                    bottom: 1
                                },
                                key: a
                            }, i)
                        })
                    }, t.onItemToggle = function(e, n) {
                        return a.__awaiter(t, void 0, void 0, function() {
                            var t, r, i, o, s, l, d, c, u;
                            return a.__generator(this, function(m) {
                                switch (m.label) {
                                    case 0:
                                        return t = n.currentTarget.checked, r = this.props, i = r.channelName, o = r.data, s = r.updateBadgeTiers, this.tiers && o.user && o.user.id ? (l = this.tiers[e], d = {
                                            userID: o.user.id,
                                            badges: {
                                                tiers: [{
                                                    isEnabled: t,
                                                    threshold: l.threshold
                                                }]
                                            }
                                        }, c = {
                                            updateCheerPartnerSettings: {
                                                __typename: "UpdateCheerPartnerSettingsPayload",
                                                cheer: {
                                                    __typename: "CheerPartnerSettings",
                                                    badges: {
                                                        __typename: "CheerPartnerBadgeSettings",
                                                        tiers: this.tiers.slice(0, e).concat([a.__assign({}, l, {
                                                            isEnabled: t
                                                        })], this.tiers.slice(e + 1))
                                                    }
                                                }
                                            }
                                        }, [4, s(Object(v.b)(d, c))]) : [2];
                                    case 1:
                                        return u = m.sent(), Object(v.e)(b, {
                                            login: i
                                        }, function(t) {
                                            return t.user && t.user.settings && t.user.settings.cheer && t.user.settings.cheer.badges && u.data.updateCheerPartnerSettings && u.data.updateCheerPartnerSettings.cheer && u.data.updateCheerPartnerSettings.cheer.badges && (t.user.settings.cheer.badges.tiers[e].isEnabled = u.data.updateCheerPartnerSettings.cheer.badges.tiers[e].isEnabled), t
                                        }), [2]
                                }
                            })
                        })
                    }, t
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    var e = this.renderTierItems();
                    return r.createElement(y.a, {
                        label: Object(p.d)("Chat Badge Tiers", "ChatBadgeTiersForm")
                    }, r.createElement(S._8, {
                        margin: {
                            bottom: 2
                        }
                    }, r.createElement(S.Q, null, Object(p.d)("Choose which Cheer Chat Badges are enabled in your channel. Viewers unlock badges based on total Bits used to Cheer for you. The highest unlocked enabled badge will appear next to viewers' names", "ChatBadgeTiersForm"))), r.createElement(S.Y, {
                        gutterSize: S.Z.Medium
                    }, r.createElement(S.L, {
                        cols: {
                            default: 12,
                            sm: 6
                        }
                    }, e.slice(0, Math.floor(e.length / 2))), r.createElement(S.L, {
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
            }(r.Component),
            T = Object(g.d)(Object(u.a)(b, {
                options: function(e) {
                    return {
                        variables: {
                            login: e.channelName
                        }
                    }
                }
            }), Object(u.a)(f, {
                name: "updateBadgeTiers"
            }))(O),
            N = n("IIxK"),
            C = n("J8WN"),
            P = (n("24ae"), function(e) {
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
                return a.__extends(t, e), t.prototype.render = function() {
                    var e = this.props,
                        t = e.error,
                        n = e.children;
                    return r.createElement(S._35, {
                        position: S._15.Relative,
                        padding: 5,
                        background: S.n.Alt
                    }, r.createElement(C.a, {
                        allowedFileTypes: [".png"],
                        onFilesSubmitted: this.onFilesSubmitted,
                        error: t
                    }, r.createElement(S._35, {
                        position: S._15.Absolute,
                        attachTop: !0,
                        attachLeft: !0,
                        fullWidth: !0,
                        fullHeight: !0,
                        display: S.R.Flex,
                        flexDirection: S.T.Column,
                        alignItems: S.c.Center,
                        justifyContent: S._7.Center,
                        className: "chat-badge-drop-zone__content"
                    }, n)))
                }, t
            }(r.Component));
        var A, w = this,
            I = function(e, t) {
                return a.__awaiter(w, void 0, void 0, function() {
                    var n, r, i;
                    return a.__generator(this, function(a) {
                        switch (a.label) {
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
                                return n = a.sent(), r = n.height, i = n.width, [2, r === t.height && i === t.width]
                        }
                        var o
                    })
                })
            },
            R = n("wGye"),
            x = n("8/C/"),
            j = 18,
            D = 36,
            F = 72,
            M = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        selectedIndex: 2,
                        stagedImageURLs: {},
                        saveStatus: E.b.NoChanges,
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
                                    saveStatus: r && r.image1x && r.image2x && r.image4x ? E.b.DirtyChanges : E.b.NoChanges
                                }
                            }
                        })
                    }, t.onNormalImageSubmitted = function(e) {
                        return a.__awaiter(t, void 0, void 0, function() {
                            return a.__generator(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        return [4, I(e, {
                                            height: j,
                                            width: j
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
                        return a.__awaiter(t, void 0, void 0, function() {
                            return a.__generator(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        return [4, I(e, {
                                            height: D,
                                            width: D
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
                        return a.__awaiter(t, void 0, void 0, function() {
                            return a.__generator(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        return [4, I(e, {
                                            height: F,
                                            width: F
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
                                var r, i = t.tiers[n.selectedIndex],
                                    o = {};
                                return e && (o = a.__assign({}, n.stagedImageURLs[i.threshold], e)), {
                                    stagedImageURLs: a.__assign({}, n.stagedImageURLs, (r = {}, r[i.threshold] = o, r)),
                                    saveStatus: o && o.image1x && o.image2x && o.image4x ? E.b.DirtyChanges : E.b.NoChanges,
                                    image1xError: !1,
                                    image2xError: !1,
                                    image4xError: !1
                                }
                            }
                        })
                    }, t.onRevertButtonClick = function() {
                        return a.__awaiter(t, void 0, void 0, function() {
                            var e, t, n, r, i, o, s, l, d, c = this;
                            return a.__generator(this, function(u) {
                                switch (u.label) {
                                    case 0:
                                        return e = this.state.selectedIndex, t = this.props, n = t.data, r = t.updateBadgeTierImages, i = t.channelName, this.tiers && n.user && n.user.id ? (o = this.tiers[e]).badge ? (s = {
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
                                                        tiers: this.tiers.slice(0, e).concat([a.__assign({}, o, {
                                                            badge: a.__assign({}, o.badge, {
                                                                user: null
                                                            })
                                                        })], this.tiers.slice(e + 1))
                                                    }
                                                }
                                            }
                                        }, [4, r(Object(v.b)(s, l))]) : [2] : [2];
                                    case 1:
                                        return d = u.sent(), Object(v.e)(R, {
                                            login: i
                                        }, function(t) {
                                            if (t.user && t.user.settings && t.user.settings.cheer && t.user.settings.cheer.badges && d.data.updateCheerPartnerSettings && d.data.updateCheerPartnerSettings.cheer && d.data.updateCheerPartnerSettings.cheer.badges) {
                                                var n = d.data.updateCheerPartnerSettings.cheer.badges.tiers[e],
                                                    r = t.user.settings.cheer.badges.tiers[e];
                                                n && n.badge && r && r.badge && (r.badge = a.__assign({}, r.badge, n.badge))
                                            }
                                            return c.updateStagedImageURLs(), t
                                        }), [2]
                                }
                            })
                        })
                    }, t.onSaveButtonClick = function() {
                        return a.__awaiter(t, void 0, void 0, function() {
                            var e, t, n, r, i, o, s, l, d, c, u;
                            return a.__generator(this, function(m) {
                                switch (m.label) {
                                    case 0:
                                        if (e = this.state, t = e.stagedImageURLs, n = e.selectedIndex, r = this.props, i = r.data, o = r.updateBadgeTierImages, s = r.channelName, !this.tiers || !i.user || !i.user.id) return [2];
                                        if (l = this.tiers[n], !(d = t[l.threshold]).image1x || !d.image2x || !d.image4x) return [2];
                                        c = {
                                            userID: i.user.id,
                                            badges: {
                                                tiers: [{
                                                    threshold: l.threshold,
                                                    imageData1x: Object(N.b)(d.image1x),
                                                    imageData2x: Object(N.b)(d.image2x),
                                                    imageData4x: Object(N.b)(d.image4x)
                                                }]
                                            }
                                        }, this.setState({
                                            saveStatus: E.b.Working
                                        }), m.label = 1;
                                    case 1:
                                        return m.trys.push([1, 3, , 4]), [4, o(Object(v.a)(c))];
                                    case 2:
                                        return u = m.sent(), Object(v.e)(R, {
                                            login: s
                                        }, function(e) {
                                            if (e.user && e.user.settings && e.user.settings.cheer && e.user.settings.cheer.badges && u.data.updateCheerPartnerSettings && u.data.updateCheerPartnerSettings.cheer && u.data.updateCheerPartnerSettings.cheer.badges) {
                                                var t = u.data.updateCheerPartnerSettings.cheer.badges.tiers[n],
                                                    r = e.user.settings.cheer.badges.tiers[n];
                                                t && t.badge && r && r.badge && (r.badge = a.__assign({}, r.badge, t.badge))
                                            }
                                            return e
                                        }), this.updateStagedImageURLs(), this.setState({
                                            saveStatus: E.b.Success
                                        }), [3, 4];
                                    case 3:
                                        return m.sent(), this.setState({
                                            saveStatus: E.b.Error
                                        }), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, t
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    var e = this.state,
                        t = e.selectedIndex,
                        n = e.stagedImageURLs,
                        a = e.saveStatus,
                        i = e.image1xError,
                        o = e.image2xError,
                        s = e.image4xError;
                    if (!this.tiers) return null;
                    var l, d, c, u, m = this.tiers[t];
                    m.badge && m.badge.user && (l = r.createElement(S.v, {
                        onClick: this.onRevertButtonClick,
                        type: S.B.Hollow,
                        fullWidth: !0
                    }, Object(p.d)("Reset to Default Badge", "ChatBadgeUploadForm")), d = m.badge.image1x, c = m.badge.image2x, u = m.badge.image4x);
                    var h = n[m.threshold];
                    return h && (d = h.image1x || d, c = h.image2x || c, u = h.image4x || u), r.createElement(y.a, {
                        label: Object(p.d)("Upload Badge Images", "ChatBadgeUploadForm")
                    }, r.createElement(S.Y, null, r.createElement(S.L, {
                        cols: {
                            default: 12,
                            sm: 5
                        }
                    }, r.createElement(S._30, {
                        onChange: this.onSelectChange,
                        value: String(m.threshold)
                    }, this.tiers.map(function(e) {
                        return r.createElement("option", {
                            key: e.threshold,
                            value: e.threshold,
                            disabled: e.threshold < 1e3
                        }, " ", Object(p.d)("{threshold} Bit Badge", {
                            threshold: Object(p.e)(e.threshold)
                        }, "ChatBadgeUploadForm"))
                    })))), r.createElement(S.Y, null, r.createElement(S.L, {
                        cols: {
                            default: 12,
                            sm: 8
                        }
                    }, r.createElement(S._8, {
                        display: S.R.Flex,
                        justifyContent: S._7.Between,
                        margin: {
                            y: 2
                        }
                    }, r.createElement(S._8, {
                        display: S.R.InlineFlex,
                        flexDirection: S.T.Column,
                        alignItems: S.c.Center
                    }, r.createElement(P, {
                        onImageSubmit: this.onNormalImageSubmitted,
                        error: i
                    }, d ? r.createElement("img", {
                        src: d,
                        height: 18,
                        width: 18
                    }) : r.createElement(S._24, {
                        asset: S._25.Plus,
                        height: 32,
                        width: 32
                    })), r.createElement(S.Q, {
                        color: i ? S.K.Error : S.K.Base
                    }, Object(p.d)("18 x 18px", "ChatBadgeUploadForm"))), r.createElement(S._8, {
                        display: S.R.InlineFlex,
                        flexDirection: S.T.Column,
                        alignItems: S.c.Center
                    }, r.createElement(P, {
                        onImageSubmit: this.onDoubleImageSubmitted,
                        error: o
                    }, c ? r.createElement("img", {
                        src: c,
                        height: 36,
                        width: 36
                    }) : r.createElement(S._24, {
                        asset: S._25.Plus,
                        height: 32,
                        width: 32
                    })), r.createElement(S.Q, {
                        color: o ? S.K.Error : S.K.Base
                    }, Object(p.d)("36 x 36px", "ChatBadgeUploadForm"))), r.createElement(S._8, {
                        display: S.R.InlineFlex,
                        flexDirection: S.T.Column,
                        alignItems: S.c.Center
                    }, r.createElement(P, {
                        onImageSubmit: this.onQuadrupleImageSubmitted,
                        error: s
                    }, u ? r.createElement("img", {
                        src: u,
                        height: 72,
                        width: 72
                    }) : r.createElement(S._24, {
                        asset: S._25.Plus,
                        height: 32,
                        width: 32
                    })), r.createElement(S.Q, {
                        color: s ? S.K.Error : S.K.Base
                    }, Object(p.d)("72 x 72px", "ChatBadgeUploadForm")))))), r.createElement(S.Y, {
                        gutterSize: S.Z.Medium
                    }, r.createElement(S.L, {
                        cols: 4
                    }, r.createElement(E.a, {
                        status: a,
                        onClick: this.onSaveButtonClick,
                        fullWidth: !0
                    }, Object(p.d)("Upload Badge Images", "ChatBadgeUploadFormSaveButton"))), r.createElement(S.L, {
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
            }(r.Component),
            L = Object(g.d)(Object(u.a)(R, {
                options: function(e) {
                    return {
                        variables: {
                            login: e.channelName
                        }
                    }
                }
            }), Object(u.a)(x, {
                name: "updateBadgeTierImages"
            }))(M),
            U = n("GH+X"),
            B = function(e) {
                var t = e.match;
                return r.createElement(S._8, null, r.createElement(h.a, {
                    title: Object(p.d)("Cheer Chat Badge Settings", "CheerBadgesSettingsPage"),
                    description: Object(p.d)("Custom settings for Cheer chat badges", "CheerBadgesSettingsPage"),
                    linkToParent: "/" + t.params.channelName + "/dashboard/settings/revenue"
                }), r.createElement(U.a, null, r.createElement(T, {
                    channelName: t.params.channelName
                }), r.createElement(L, {
                    channelName: t.params.channelName
                })))
            },
            V = n("WrTc"),
            W = n("gLfK");
        ! function(e) {
            e.ALLTIME = "ALLTIME", e.MONTH = "MONTH", e.WEEK = "WEEK"
        }(A || (A = {}));
        var Q = n("D6iq"),
            Y = n("ZKiL"),
            G = 5,
            z = 300,
            H = 1e6,
            q = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    n.state = {
                        saveStatus: E.b.NoChanges,
                        leaderboardEnabled: !1,
                        recentCheerEnabled: !1,
                        recentCheerTimeoutEnabled: !1,
                        recentCheerTimeoutError: !1
                    }, n.onLeaderboardEnabledCheckBoxClick = function(e) {
                        n.setState({
                            leaderboardEnabled: e.currentTarget.checked,
                            saveStatus: E.b.DirtyChanges
                        })
                    }, n.onLeaderboardTimePeriodRadioButtonClick = function(e) {
                        n.setState({
                            leaderboardTimePeriod: e.currentTarget.value,
                            saveStatus: E.b.DirtyChanges
                        })
                    }, n.onRecentCheerEnabledCheckBoxChange = function(e) {
                        n.setState({
                            recentCheerEnabled: e.currentTarget.checked,
                            saveStatus: E.b.DirtyChanges
                        })
                    }, n.onRecentCheerTimeoutEnabledCheckBoxChange = function(e) {
                        n.setState({
                            recentCheerTimeoutEnabled: e.currentTarget.checked,
                            saveStatus: E.b.DirtyChanges
                        })
                    }, n.onRecentCheerTimeoutInputChange = function(e) {
                        var t = parseInt(e.currentTarget.value, 10),
                            a = !t || t < G;
                        n.setState({
                            recentCheerTimeout: Math.min(t, z),
                            saveStatus: a ? E.b.NoChanges : E.b.DirtyChanges,
                            recentCheerTimeoutError: a
                        })
                    }, n.onRecentCheerMinimumBitsInputChange = function(e) {
                        var t = parseInt(e.currentTarget.value, 10);
                        n.setState({
                            recentCheerMinimumBits: Math.min(t, H),
                            saveStatus: t ? E.b.DirtyChanges : E.b.NoChanges
                        })
                    }, n.onSaveClick = function() {
                        return a.__awaiter(n, void 0, void 0, function() {
                            var e, t, n, r, i, o, s, l, d, c, u, m, p, h;
                            return a.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        if (e = this.state, t = e.leaderboardTimePeriod, n = e.recentCheerTimeout, r = e.recentCheerMinimumBits, i = e.leaderboardEnabled, o = e.recentCheerTimeoutEnabled, s = e.recentCheerEnabled, l = this.props, d = l.setPinnedCheerSettings, c = l.data, u = l.channelName, !c.user || !c.user.id) return [2];
                                        m = {
                                            userID: c.user.id,
                                            recentCheer: {
                                                canPin: s,
                                                minimumBits: r,
                                                timeoutMilliseconds: o ? n : 0
                                            },
                                            leaderboard: {
                                                isEnabled: i,
                                                timePeriod: t
                                            }
                                        }, p = Object(v.a)(m), this.setState({
                                            saveStatus: E.b.Working
                                        }), a.label = 1;
                                    case 1:
                                        return a.trys.push([1, 3, , 4]), [4, d(p)];
                                    case 2:
                                        return h = a.sent(), Object(v.e)(Y, {
                                            login: u
                                        }, function(e) {
                                            return h.data.updateCheerPartnerSettings && e.user && e.user.settings && e.user.settings.cheer && (e.user.settings.cheer.recentCheer = h.data.updateCheerPartnerSettings.cheer.recentCheer, e.user.settings.cheer.leaderboard = h.data.updateCheerPartnerSettings.cheer.leaderboard), e
                                        }), this.setState({
                                            saveStatus: E.b.Success
                                        }), [3, 4];
                                    case 3:
                                        return a.sent(), this.setState({
                                            saveStatus: E.b.Error
                                        }), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    };
                    var r = t.data;
                    if (!r.loading && !r.error && r.user && r.user.settings && r.user.settings.cheer) {
                        var i = r.user.settings.cheer,
                            o = i.leaderboard,
                            s = i.recentCheer;
                        n.state = a.__assign({}, n.state, {
                            leaderboardEnabled: o.isEnabled,
                            leaderboardTimePeriod: o.timePeriod,
                            recentCheerEnabled: s.canPin,
                            recentCheerMinimumBits: s.minimumBits,
                            recentCheerTimeoutEnabled: s.timeoutMilliseconds > 0,
                            recentCheerTimeout: s.timeoutMilliseconds
                        })
                    }
                    return n
                }
                return a.__extends(t, e), t.prototype.componentWillReceiveProps = function(e) {
                    var t = e.data;
                    if (!t.loading && !t.error && t.user && t.user.settings && t.user.settings.cheer) {
                        var n = t.user.settings.cheer,
                            a = n.leaderboard,
                            r = n.recentCheer;
                        this.setState({
                            leaderboardEnabled: a.isEnabled,
                            leaderboardTimePeriod: a.timePeriod,
                            recentCheerEnabled: r.canPin,
                            recentCheerMinimumBits: r.minimumBits,
                            recentCheerTimeoutEnabled: r.timeoutMilliseconds > 0,
                            recentCheerTimeout: r.timeoutMilliseconds
                        })
                    }
                }, t.prototype.render = function() {
                    var e = this.state,
                        t = e.saveStatus,
                        n = e.leaderboardTimePeriod,
                        a = e.recentCheerTimeout,
                        i = e.recentCheerMinimumBits,
                        o = e.leaderboardEnabled,
                        s = e.recentCheerTimeoutEnabled,
                        l = e.recentCheerTimeoutError,
                        d = e.recentCheerEnabled,
                        c = r.createElement(V.a, {
                            status: t,
                            onClickSave: this.onSaveClick
                        });
                    return r.createElement(U.a, {
                        footer: c
                    }, r.createElement(y.a, {
                        label: Object(p.d)("Enable Top Cheerers", "PinnedCheerSettings")
                    }, r.createElement(S.J, {
                        label: Object(p.d)("Enable Top Cheerers", "PinnedCheerSettingsCheckBox"),
                        checked: o,
                        onChange: this.onLeaderboardEnabledCheckBoxClick,
                        "data-test-selector": "top-cheerers-checkbox-selector"
                    }), r.createElement(W.a, {
                        text: Object(p.d)("Pin Top Cheerers to the top of your chat.", "PinnedCheerSettings")
                    })), r.createElement(y.a, {
                        label: Object(p.d)("Top Cheerers Time Range", "PinnedCheerSettings")
                    }, r.createElement(S._8, null, r.createElement(S._21, {
                        label: Object(p.d)("Weekly", "PinnedCheerSettings"),
                        value: A.WEEK,
                        checked: n === A.WEEK,
                        onChange: this.onLeaderboardTimePeriodRadioButtonClick
                    })), r.createElement(S._8, {
                        margin: {
                            y: 1
                        }
                    }, r.createElement(S._21, {
                        label: Object(p.d)("Monthly", "PinnedCheerSettings"),
                        value: A.MONTH,
                        checked: n === A.MONTH,
                        onChange: this.onLeaderboardTimePeriodRadioButtonClick
                    })), r.createElement(S._8, {
                        margin: {
                            y: 1
                        }
                    }, r.createElement(S._21, {
                        label: Object(p.d)("All-Time", "PinnedCheerSettings"),
                        value: A.ALLTIME,
                        checked: n === A.ALLTIME,
                        onChange: this.onLeaderboardTimePeriodRadioButtonClick
                    })), r.createElement(W.a, {
                        text: Object(p.d)("Choose Weekly for a leaderboard that automatically resets every Monday 12:01AM PT. Choose Monthly to reset every 1st day of the month. Choose All-Time for a leaderboard that tracks the Top Cheerers in your channel for all time, starting from when Bits launched in June of 2016.", "PinnedCheerSettings")
                    })), r.createElement(y.a, {
                        label: Object(p.d)("Enable Recent Cheers", "PinnedCheerSettings")
                    }, r.createElement(S.J, {
                        label: Object(p.d)("Pin Most Recent Cheer", "PinnedCheerSettings"),
                        checked: d,
                        onChange: this.onRecentCheerEnabledCheckBoxChange,
                        "data-test-selector": "pin-most-recent-cheer-checkbox-selector"
                    }), r.createElement(W.a, {
                        text: Object(p.d)("Pin the most recent Cheer to the top of your chat. Note that you and your moderators can unpin a Pinned Cheer at any time.", "PinnedCheerSettings")
                    })), r.createElement(y.a, {
                        label: Object(p.d)("Recent Cheer Timeout", "PinnedCheerSettings")
                    }, r.createElement(S.J, {
                        label: Object(p.d)("Enable Recent Cheer Timeout", "PinnedCheerSettings"),
                        checked: s,
                        onChange: this.onRecentCheerTimeoutEnabledCheckBoxChange,
                        "data-test-selector": "enable-recent-cheer-timeout-checkbox-selector"
                    }), r.createElement(W.a, {
                        text: Object(p.d)("If enabled, Pinned Recent Cheers will be automatically dismissed after the number of seconds that you set below.", "PinnedCheerSettings")
                    }), r.createElement(S._8, {
                        margin: {
                            top: 1
                        }
                    }, r.createElement(S.W, {
                        label: Object(p.d)("Seconds", "PinnedCheerSettings"),
                        error: l,
                        errorMessage: Object(p.d)("Timeout must be between {min} and {max} seconds", {
                            min: G,
                            max: z
                        }, "PinnedCheerSettings"),
                        "data-test-selector": "recent-cheer-timeout-form-group-selector"
                    }, r.createElement(S._4, {
                        type: S._5.Number,
                        value: "" + a,
                        disabled: !s,
                        onChange: this.onRecentCheerTimeoutInputChange,
                        min: G,
                        max: z,
                        "data-test-selector": "recent-cheer-timeout-input-selector"
                    })))), r.createElement(y.a, {
                        label: Object(p.d)("Minimum Bits for a Recent Cheer", "CheerSettingsPage")
                    }, r.createElement(S._4, {
                        type: S._5.Number,
                        value: "" + i,
                        onChange: this.onRecentCheerMinimumBitsInputChange,
                        min: 1,
                        max: H,
                        "data-test-selector": "recent-cheer-minimum-bits-input-selector"
                    }), r.createElement(W.a, {
                        text: Object(p.d)("Sets the minimum number of Bits required for a Recent Cheer to be Pinned. Viewers will receive notifications indicating your Pinned Recent Cheer minimum.", "PinnedCheerSettings")
                    })))
                }, t
            }(r.Component),
            X = Object(g.d)(Object(u.a)(Y, {
                options: function(e) {
                    return {
                        variables: {
                            login: e.channelName
                        }
                    }
                }
            }), Object(u.a)(Q, {
                name: "setPinnedCheerSettings"
            }))(q),
            K = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    var e = this.props.match;
                    return r.createElement(S._8, null, r.createElement(h.a, {
                        title: Object(p.d)("Pinned and Top Cheers Settings", "CheerSettingsPage"),
                        description: Object(p.d)("Custom settings for Pinned Cheering", "CheerSettingsPage"),
                        linkToParent: "/" + e.params.channelName + "/dashboard/settings/revenue"
                    }), r.createElement(X, {
                        channelName: e.params.channelName
                    }))
                }, t
            }(r.Component),
            $ = n("qSfI"),
            J = n("mQVd"),
            Z = (n("hXLX"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        cheermotesToggleError: !1
                    }, t.onItemToggle = function(e) {
                        return a.__awaiter(t, void 0, void 0, function() {
                            var t, n, r, i, o, s, l, d;
                            return a.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        if (t = e.currentTarget.checked, n = this.props, r = n.setCheermotesEnable, i = n.data, o = n.channelName, !(i.user && i.user.id && i.user.settings && i.user.settings.cheer)) return [2];
                                        s = {
                                            userID: i.user.id,
                                            customPrefix: {
                                                isEnabled: t
                                            }
                                        }, l = Object(v.a)(s), a.label = 1;
                                    case 1:
                                        return a.trys.push([1, 3, , 4]), [4, r(l)];
                                    case 2:
                                        return d = a.sent(), Object(v.e)(J, {
                                            login: o
                                        }, function(e) {
                                            return d.data.updateCheerPartnerSettings && e.user && e.user.settings && e.user.settings.cheer && (e.user.settings.cheer.customPrefix.isEnabled = d.data.updateCheerPartnerSettings.cheer.customPrefix.isEnabled), e
                                        }), this.setState({
                                            cheermotesToggleError: !1
                                        }), [3, 4];
                                    case 3:
                                        return a.sent(), this.setState({
                                            cheermotesToggleError: !0
                                        }), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, t
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    var e = this.props.data,
                        t = this.state.cheermotesToggleError,
                        n = !1,
                        a = r.createElement(S._14, {
                            width: 100,
                            height: 18
                        }),
                        i = 0,
                        o = [],
                        s = [];
                    if (!e.loading && !e.error && e.user && e.user.settings && e.user.settings.cheer && (n = e.user.settings.cheer.customPrefix.isEnabled, a = r.createElement(S.Q, {
                            bold: !0
                        }, e.user.settings.cheer.customPrefix.prefix), e.user.settings.cheer.customPrefix && e.user.settings.cheer.customPrefix.tiers))
                        for (var l = 0, d = (s = e.user.settings.cheer.customPrefix.tiers.slice().sort(function(e, t) {
                                return e.bits - t.bits
                            })).length; l < d; l++) {
                            var c = s[l].images;
                            c && c[0] ? (o.push({
                                url: c[0].url,
                                id: c[0].id
                            }), i++) : o.push(null)
                        }
                    var u = o.map(function(e, t) {
                        return r.createElement(S._35, {
                            key: e ? e.id : "",
                            background: S.n.Alt2,
                            border: !0,
                            className: "cheermote-enable-form__cheermote-preview",
                            margin: {
                                right: 4 === t ? 0 : 1
                            },
                            display: S.R.InlineFlex
                        }, r.createElement("img", {
                            src: e ? e.url : "",
                            alt: "Cheermote"
                        }))
                    });
                    return r.createElement(y.a, {
                        label: Object(p.d)("Enable Cheermotes", "CheermtoesEnableForm")
                    }, r.createElement(S._51, {
                        checked: n,
                        onChange: this.onItemToggle,
                        error: t
                    }), r.createElement(S._8, {
                        margin: {
                            top: .5
                        }
                    }, r.createElement(S.Q, {
                        color: S.K.Alt2
                    }, Object(p.d)("Upload images for all tiers to enable your Cheermote.", "CheermotesEnableForm"))), r.createElement(S._8, {
                        padding: {
                            y: 2
                        }
                    }, r.createElement(S.Q, {
                        color: S.K.Alt2
                    }, Object(p.d)("Cheermote Code", "CheermotesEnableForm")), a), r.createElement(S._8, null, r.createElement(S.Q, {
                        type: S._49.Span,
                        color: S.K.Alt2
                    }, Object(p.d)("Tiers", "CheermotesEnableForm")), " ", r.createElement(S.Q, {
                        type: S._49.Span,
                        color: 5 === i ? S.K.Base : S.K.Error
                    }, Object(p.d)("{tierNum}/{totalTiers}", {
                        tierNum: i,
                        totalTiers: 5
                    }, "CheermotesEnableForm")), r.createElement(S.Y, null, r.createElement(S.L, {
                        cols: 4
                    }, r.createElement(S._8, {
                        margin: {
                            top: .5
                        },
                        display: S.R.Flex,
                        justifyContent: S._7.Between
                    }, u)))))
                }, t
            }(r.Component)),
            ee = Object(i.compose)(Object(u.a)(J, {
                name: "data",
                options: function(e) {
                    return {
                        variables: {
                            login: e.channelName
                        }
                    }
                }
            }), Object(u.a)($, {
                name: "setCheermotesEnable"
            }))(Z),
            te = n("TFaR"),
            ne = n("HZww"),
            ae = (n("gABf"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onFilesSubmitted = function(e) {
                        var n = e[0];
                        t.props.onImageSubmit && t.props.onImageSubmit(n, t.props.dpiScale)
                    }, t
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    var e = this.props.children;
                    return r.createElement(S._8, {
                        className: "cheermote-upload-drop-zone",
                        display: S.R.Flex,
                        flexDirection: S.T.Column
                    }, r.createElement(S._35, {
                        className: "cheermote-upload-drop-zone__drop-zone",
                        position: S._15.Relative,
                        padding: 5,
                        background: S.n.Alt
                    }, r.createElement(C.a, {
                        allowedFileTypes: [".png", ".gif"],
                        onFilesSubmitted: this.onFilesSubmitted
                    }, r.createElement(S._35, {
                        position: S._15.Absolute,
                        attachTop: !0,
                        attachLeft: !0,
                        fullWidth: !0,
                        fullHeight: !0,
                        display: S.R.Flex,
                        flexDirection: S.T.Column,
                        alignItems: S.c.Center,
                        justifyContent: S._7.Center
                    }, e))), r.createElement(S._8, {
                        textAlign: S._45.Center,
                        padding: {
                            top: 1
                        }
                    }, r.createElement(S.Q, null, Object(p.d)("{dimension} x {dimension}px", {
                        dimension: this.props.dimension
                    }, "CheermoteUploadDropZone"))))
                }, t
            }(r.Component)),
            re = n("9u8h");

        function ie(e, t) {
            return a.__awaiter(this, void 0, void 0, function() {
                var n;
                return a.__generator(this, function(a) {
                    switch (a.label) {
                        case 0:
                            return [4, re.a.post("/v5/channels/" + e + "/bits/customcheermotes", {
                                body: {
                                    background: t.background,
                                    animation_type: t.animationType,
                                    scale: t.scale,
                                    upload_type: t.uploadType,
                                    tier: t.tier
                                }
                            })];
                        case 1:
                            if ((n = a.sent()).error || !n.body) throw new Error(n.error ? n.error.message : Object(p.d)("no response body", "CheermoteUpload"));
                            return [2, {
                                uploadID: n.body.upload_id,
                                uploadURL: n.body.upload_url,
                                imageURLs: n.body.image_urls
                            }]
                    }
                })
            })
        }
        var oe, se, le, de, ce = ((oe = {})[1] = 28, oe[1.5] = 42, oe[2] = 56, oe[3] = 84, oe[4] = 112, oe),
            ue = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onImageSubmitted = function(e, n) {
                        return a.__awaiter(t, void 0, void 0, function() {
                            var t, r, i;
                            return a.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        t = {
                                            uploadType: "individual",
                                            background: this.props.background,
                                            animationType: this.props.animationType,
                                            scale: "" + n,
                                            tier: "" + this.props.tier
                                        }, a.label = 1;
                                    case 1:
                                        return a.trys.push([1, 3, , 4]), [4, ie(this.props.channelID, t)];
                                    case 2:
                                        return r = a.sent(), this.props.onImageSubmitted(this.props.tier, e, r), [3, 4];
                                    case 3:
                                        return i = a.sent(), this.props.onImageSubmissionError(i), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, t
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    var e = this,
                        t = this.props.images.map(function(t) {
                            var n = ce[t.dpiScale];
                            return r.createElement(S._8, {
                                key: t.dpiScale,
                                padding: {
                                    bottom: 1
                                }
                            }, r.createElement(ae, {
                                onImageSubmit: e.onImageSubmitted,
                                dimension: n,
                                dpiScale: t.dpiScale
                            }, t ? r.createElement("img", {
                                src: t.url,
                                height: n,
                                width: n
                            }) : r.createElement(S._24, {
                                asset: S._25.Plus,
                                height: 32,
                                width: 32
                            })))
                        });
                    return r.createElement(S._8, {
                        justifyContent: S._7.Between,
                        display: S.R.Flex,
                        flexDirection: S.T.Row,
                        flexWrap: S.U.Wrap
                    }, t)
                }, t
            }(r.PureComponent),
            me = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    return r.createElement(S._35, {
                        background: S.n.Alt,
                        display: S.R.Flex,
                        alignItems: S.c.Center,
                        padding: 1
                    }, r.createElement("img", {
                        src: this.props.imageSrc,
                        height: 28,
                        width: 28
                    }), r.createElement(S._8, {
                        padding: {
                            left: 1
                        }
                    }, r.createElement(S.Q, null, Object(p.d)("This is a preview of a chat message with your Cheermote!", "CheermotePreviewBar"))))
                }, t
            }(r.PureComponent),
            pe = (n("R9L7"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onImageSubmitted = function(e) {
                        return a.__awaiter(t, void 0, void 0, function() {
                            var t, n, r;
                            return a.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        t = {
                                            uploadType: "smart",
                                            background: "light",
                                            animationType: "animated",
                                            scale: "4",
                                            tier: "" + this.props.tier
                                        }, a.label = 1;
                                    case 1:
                                        return a.trys.push([1, 3, , 4]), [4, ie(this.props.channelID, t)];
                                    case 2:
                                        return n = a.sent(), this.props.onImageSubmitted(this.props.tier, e, n), [3, 4];
                                    case 3:
                                        return r = a.sent(), this.props.onImageSubmissionError(r), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, t
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    return r.createElement(ae, {
                        onImageSubmit: this.onImageSubmitted,
                        dimension: 112
                    }, this.props.image ? r.createElement("img", {
                        src: this.props.image,
                        height: 112,
                        width: 112
                    }) : r.createElement(S._24, {
                        asset: S._25.Plus,
                        height: 32,
                        width: 32
                    }))
                }, t
            }(r.PureComponent)),
            he = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    return r.createElement(S._28, null, r.createElement(S._29, {
                        name: this.props.name,
                        value: this.props.left,
                        checked: this.props.selected === this.props.left,
                        label: this.props.leftTitle,
                        onChange: this.props.onToggle,
                        defaultChecked: !0
                    }), r.createElement(S._29, {
                        name: this.props.name,
                        value: this.props.right,
                        checked: this.props.selected === this.props.right,
                        onChange: this.props.onToggle,
                        label: this.props.rightTitle
                    }))
                }, t
            }(r.PureComponent);
        n("aEaB");
        ! function(e) {
            e.Simple = "simple", e.Advanced = "advanced"
        }(se || (se = {})),
        function(e) {
            e.Light = "light", e.Dark = "dark"
        }(le || (le = {})),
        function(e) {
            e.Animated = "animated", e.Static = "static"
        }(de || (de = {}));
        var ge = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.state = {
                    uploadType: se.Simple,
                    background: le.Light,
                    animation: de.Animated,
                    uploading: !1
                }, t.onUploadTypeChange = function(e) {
                    var n = e.currentTarget.value,
                        a = de.Animated;
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
                }, t.onSimpleImageSubmitted = function(e, n, a) {
                    t.uploadImageProgress(e, n, a, function(e, n) {
                        t.props.onSimpleImageSubmitted(e, n)
                    })
                }, t.onAdvancedImageUpload = function(e, n, a) {
                    t.uploadImageProgress(e, n, a, function(e, n) {
                        t.props.onAdvancedImageSubmitted(e, n[0])
                    })
                }, t.uploadImageProgress = function(e, n, r, i) {
                    t.unsubscribe = p.k.subscribe({
                        topic: Object(ne.t)(r.uploadID),
                        success: function() {
                            return a.__awaiter(t, void 0, void 0, function() {
                                var e;
                                return a.__generator(this, function(t) {
                                    switch (t.label) {
                                        case 0:
                                            return t.trys.push([0, 2, , 3]), this.setState({
                                                uploading: !0,
                                                loadingError: void 0
                                            }), [4, function(e, t) {
                                                return a.__awaiter(this, void 0, void 0, function() {
                                                    var n;
                                                    return a.__generator(this, function(a) {
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
                                            }(r.uploadURL, n)];
                                        case 1:
                                            return t.sent(), [3, 3];
                                        case 2:
                                            return e = t.sent(), this.onCreateUploadRequestError(e), [3, 3];
                                        case 3:
                                            return [2]
                                    }
                                })
                            })
                        },
                        onMessage: function(n) {
                            return a.__awaiter(t, void 0, void 0, function() {
                                return a.__generator(this, function(t) {
                                    switch (n.status) {
                                        case te.a.COMPLETE:
                                            i(e, r.imageURLs), this.setState({
                                                uploading: !1
                                            }), this.unsubscribe && this.unsubscribe();
                                            break;
                                        case te.a.POSTPROCESS_COMPLETE:
                                            break;
                                        default:
                                            this.handleImageUploadError(n.status), this.setState({
                                                uploading: !1
                                            }), this.unsubscribe && this.unsubscribe()
                                    }
                                    return [2]
                                })
                            })
                        }
                    })
                }, t.handleImageUploadError = function(e) {
                    var n;
                    switch (e) {
                        case te.a.FILE_SIZE_VALIDATION_FAILED:
                            n = Object(p.d)("Please make sure you file is under 500kb", "CheermoteUploadArea");
                            break;
                        case te.a.IMAGE_FORMAT_VALIDATION_FAILED:
                            n = Object(p.d)("Please make sure your image is the correct format for uploading", "CheermoteUploadArea");
                            break;
                        case te.a.HEIGHT_VALIDATION_FAILED:
                            n = Object(p.d)("Please ensure your image is the correct height for the dimension you are uploading", "CheermoteUploadArea");
                            break;
                        case te.a.WIDTH_VALIDATION_FAILED:
                            n = Object(p.d)("Please ensure your image is the correct width for the dimension you are uploading", "CheermoteUploadArea");
                            break;
                        case te.a.ASPECT_RATIO_VALIDATION_FAILED:
                            n = Object(p.d)("Please ensure your image has the correct aspect ratio for the dimension you are uploading", "CheermoteUploadArea");
                            break;
                        case te.a.FEATURE_SERVICE_FAILED:
                            n = Object(p.d)("Failed to save new images. Please try again.", "CheermoteUploadArea");
                            break;
                        default:
                            n = Object(p.d)("Something went wrong. Please try again", "CheermoteUploadArea")
                    }
                    t.setState({
                        loadingError: n
                    })
                }, t.onCreateUploadRequestError = function(e) {
                    t.setState({
                        loadingError: Object(p.d)("An error occurred while creating upload request: {errorMsg}", {
                            errorMsg: e.message
                        }, "CheermoteUploadArea")
                    })
                }, t
            }
            return a.__extends(t, e), t.prototype.componentWillUnmount = function() {
                void 0 !== this.unsubscribe && this.unsubscribe()
            }, t.prototype.render = function() {
                var e = this;
                if (!this.props.uploadTier) return r.createElement(S._14, null);
                var t = [],
                    n = (t = this.props.uploadTier.images.filter(function(t) {
                        return (t.isAnimated && e.state.animation === de.Animated || !t.isAnimated && e.state.animation === de.Static) && t.theme.toLowerCase() === e.state.background
                    }).slice().sort(function(e, t) {
                        return t.dpiScale - e.dpiScale
                    })).find(function(e) {
                        return 4 === e.dpiScale
                    });
                return r.createElement(S._8, {
                    className: "cheermote-upload-area"
                }, r.createElement(S._8, {
                    display: S.R.Flex,
                    flexDirection: S.T.Column
                }, r.createElement(S._8, {
                    display: S.R.Flex
                }, r.createElement(he, {
                    name: "cheermote-upload-wizard-type",
                    selected: this.state.uploadType,
                    left: se.Simple,
                    leftTitle: Object(p.d)("Simple", "CheermoteUploadArea"),
                    right: se.Advanced,
                    rightTitle: Object(p.d)("Advanced", "CheermoteUploadArea"),
                    onToggle: this.onUploadTypeChange
                }), this.state.uploadType === se.Advanced && r.createElement(S._8, {
                    padding: {
                        x: 2
                    }
                }, r.createElement(he, {
                    name: "cheermote-background",
                    selected: this.state.background,
                    left: le.Light,
                    leftTitle: Object(p.d)("Light", "CheermoteUploadArea"),
                    right: le.Dark,
                    rightTitle: Object(p.d)("Dark", "CheermoteUploadArea"),
                    onToggle: this.onBackgroundChange
                })), this.state.uploadType === se.Advanced && r.createElement(he, {
                    name: "cheermote-animation",
                    selected: this.state.animation,
                    left: de.Animated,
                    leftTitle: Object(p.d)("Animated", "CheermoteUploadArea"),
                    right: de.Static,
                    rightTitle: Object(p.d)("Static", "CheermoteUploadArea"),
                    onToggle: this.onAnimationChange
                })), r.createElement(S._8, {
                    padding: {
                        top: 2
                    }
                }, this.state.uploadType === se.Simple && r.createElement(pe, {
                    channelID: this.props.channelID,
                    tier: this.props.uploadTier.bits,
                    image: n && n.url,
                    onImageSubmitted: this.onSimpleImageSubmitted,
                    onImageSubmissionError: this.onCreateUploadRequestError
                }), this.state.uploadType === se.Advanced && r.createElement(ue, {
                    channelID: this.props.channelID,
                    images: t,
                    tier: this.props.uploadTier.bits,
                    background: this.state.background,
                    animationType: this.state.animation,
                    onImageSubmitted: this.onAdvancedImageUpload,
                    onImageSubmissionError: this.onCreateUploadRequestError
                })), this.state.loadingError && r.createElement(S._35, {
                    display: S.R.Flex,
                    alignItems: S.c.Center,
                    background: S.n.Alt,
                    padding: 1,
                    margin: {
                        top: 1
                    }
                }, r.createElement(S.Q, {
                    color: S.K.Error
                }, this.state.loadingError)), n && r.createElement(S._8, {
                    padding: {
                        top: 2
                    }
                }, r.createElement(me, {
                    imageSrc: n.url
                }))), this.state.uploading && r.createElement(S._35, {
                    className: "cheermote-upload-area__uploading",
                    display: S.R.Flex,
                    flexDirection: S.T.Column,
                    alignItems: S.c.Center,
                    justifyContent: S._7.Center,
                    position: S._15.Absolute,
                    attachTop: !0,
                    attachLeft: !0,
                    fullWidth: !0,
                    fullHeight: !0
                }, r.createElement(S._10, null), r.createElement(S._8, {
                    padding: {
                        top: 2
                    }
                }, r.createElement(S.Q, null, Object(p.d)("Uploading...", "CheermoteUploadArea")))))
            }, t
        }(r.PureComponent);

        function be(e, t, n) {
            var a = t.split("/"),
                r = a[6],
                i = a[7],
                o = a[8],
                s = a[9],
                l = n ? n.toUpperCase() : i.toUpperCase(),
                d = "animated" === o;
            return {
                id: e + ";" + r + ";" + l + ";" + d + ";" + s,
                dpiScale: parseInt(s, 10),
                isAnimated: d,
                theme: l,
                url: t
            }
        }
        var fe = n("ihgL"),
            ve = (n("I/Yr"), function(e) {
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
                        Object(v.e)(fe, {
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
                                        var o = function(e, t) {
                                            return t.map(function(t) {
                                                return be(e, t)
                                            }).concat(t.map(function(t) {
                                                return be(e, t, "dark")
                                            }))
                                        }(r, n);
                                        t.user.settings.cheer.customPrefix.tiers[i].images = o
                                    }
                                }
                                return t
                            }
                        })
                    }, t.onAdvancedImageSubmitted = function(e, n) {
                        Object(v.e)(fe, {
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
                                        var o = be(r, n),
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
                return a.__extends(t, e), t.prototype.render = function() {
                    var e = this;
                    if (!this.props.data || this.props.data.loading) return r.createElement(S._8, {
                        className: "cheermote-upload-form__loading",
                        fullWidth: !0
                    }, r.createElement(S._10, {
                        fillContent: !0
                    }));
                    if (this.props.data && this.props.data.error || !this.props.data.user) return r.createElement(S._8, {
                        className: "cheermote-upload-form__error",
                        fullWidth: !0,
                        justifyContent: S._7.Center,
                        textAlign: S._45.Center,
                        alignItems: S.c.Center
                    }, r.createElement(S.Q, null, Object(p.d)("An unexpected error occurred while loading the upload wizard", "CheermotesUploadForm")));
                    var t = [];
                    this.props.data && this.props.data.user && this.props.data.user.settings.cheer.customPrefix.tiers && this.props.data.user.settings.cheer.customPrefix.tiers.length > 0 && (t = this.props.data.user.settings.cheer.customPrefix.tiers.slice().sort(function(e, t) {
                        return e.bits - t.bits
                    }));
                    var n = t.map(function(t) {
                            return r.createElement(S._36, {
                                key: t.id,
                                active: e.state.activeTab === t.bits,
                                onClick: e.onTabSelect,
                                "data-tab-target": t.bits
                            }, t.bits)
                        }),
                        a = t.find(function(t) {
                            return t.bits === e.state.activeTab
                        });
                    return r.createElement(y.a, {
                        label: Object(p.d)("Upload Cheermote Images", "CheermotesUploadForm")
                    }, r.createElement(S._8, {
                        padding: {
                            bottom: 2
                        }
                    }, r.createElement(S.Q, null, Object(p.d)('Please upload a 112 x 112px GIF image with a transparent background. Your image will be automatically scaled to smaller sizes. To fine-ture smaller sizes and light/dark mode, turn on "Advanced" option below. (The maximum file size is 500kb)', "CheermotesUploadForm"))), r.createElement(S._37, null, n), r.createElement(S._8, {
                        padding: {
                            top: 2
                        }
                    }, r.createElement(ge, {
                        channelID: this.props.data.user.id,
                        uploadTier: a,
                        onSimpleImageSubmitted: this.onSimpleImageSubmitted,
                        onAdvancedImageSubmitted: this.onAdvancedImageSubmitted
                    })))
                }, t
            }(r.PureComponent)),
            Ee = Object(i.compose)(Object(u.a)(fe, {
                options: function(e) {
                    return {
                        variables: {
                            login: e.channelName
                        }
                    }
                }
            }))(ve),
            ye = function(e) {
                var t = e.match;
                return r.createElement(S._8, null, r.createElement(h.a, {
                    title: Object(p.d)("Custom Cheermote", "CheermotesSettingsPage"),
                    description: Object(p.d)("Custom Cheermote that viewers can use when Cheering in your channel", "CheermotesSettingsPage"),
                    linkToParent: "/" + t.params.channelName + "/dashboard/settings/revenue"
                }), r.createElement(U.a, null, r.createElement(ee, {
                    channelName: t.params.channelName
                }), r.createElement(Ee, {
                    channelName: t.params.channelName
                })))
            },
            Se = n("j7/Y"),
            ke = n("w9tK"),
            _e = n("vH/s"),
            Oe = n("RH2O"),
            Te = n("V5M+"),
            Ne = n("7iMl"),
            Ce = (n("pBCJ"), "GAME_COMMERCE"),
            Pe = function(e) {
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
                return a.__extends(t, e), t.prototype.componentWillReceiveProps = function(e) {
                    var t = e.data && e.data.user && e.data.user.twitch && e.data.user.twitch.commerceAmendment[0].isSigned || !1;
                    t !== this.state.amendmentAccepted && this.setState({
                        amendmentAccepted: t
                    })
                }, t.prototype.render = function() {
                    return !this.props.data || this.props.data.loading ? null : r.createElement(y.a, {
                        orientation: S.X.Horizontal,
                        label: Object(p.d)("Opt in to earn revenue", "CommerceAmendment")
                    }, r.createElement("div", {
                        onClick: this.onAmendmentClick,
                        "data-test-selector": "commerce-amendment-checkbox-wrapper",
                        className: "commerce-amendment__amendment"
                    }, r.createElement(S.J, {
                        "data-test-selector": "commerce-amendment-checkbox",
                        checked: this.state.amendmentAccepted,
                        disabled: !0,
                        id: "commerce-amendment",
                        label: Object(p.d)("Opt in to earn revenue from game sales on Twitch", "CommerceAmendment")
                    })), r.createElement(S.Q, null, Object(p.d)("Please read and agree to the following Commerce Addendum to become eligible for this program.", "CommerceAmendment")))
                }, t = a.__decorate([Object(u.a)(Ne, {
                    options: function(e) {
                        return {
                            variables: {
                                login: e.channelName,
                                amendmentType: Ce
                            }
                        }
                    }
                })], t)
            }(r.PureComponent),
            Ae = n("2pd5"),
            we = "amendment-modal-accept-button",
            Ie = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        hasUserScrolled: !1
                    }, t.onUserScroll = function() {
                        t.setState({
                            hasUserScrolled: !0
                        })
                    }, t.renderAcceptButton = function(e) {
                        return e ? null : r.createElement(S._8, {
                            margin: {
                                left: .5,
                                right: .5
                            }
                        }, r.createElement(S.v, {
                            "data-test-selector": we,
                            type: S.B.Text,
                            onClick: t.onAccept,
                            disabled: !t.state.hasUserScrolled
                        }, Object(p.d)("Accept", "CommerceAmendmentModal")))
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
                                        return e.trys.push([1, , 3, 4]), [4, this.props.setAmendmentAcceptance(Object(v.a)(Ce))];
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
                return a.__extends(t, e), t.prototype.render = function() {
                    return r.createElement(S._8, {
                        padding: 3
                    }, r.createElement(S._35, {
                        padding: {
                            bottom: 3
                        },
                        borderBottom: !0,
                        textAlign: S._45.Center
                    }, r.createElement(S.Q, {
                        type: S._49.H4
                    }, Object(p.d)("Addendum to Content Partner Agreement – Commerce Addendum", "CommerceAmendmentModal"))), r.createElement(S._8, {
                        padding: {
                            top: 2,
                            bottom: 2
                        },
                        textAlign: S._45.Center
                    }, r.createElement(S.Q, {
                        fontSize: S.V.Size5
                    }, Object(p.d)('Please read and agree to the following addendum ("Addendum") to your Content License and Base Agreement (or Content License Agreement, as applicable) (the "Agreement") with Twitch in order to be eligible to earn revenue for certain purchases by a Twitch user that is viewing your Twitch channel.', "CommerceAmendmentModal"))), r.createElement(S._35, {
                        borderTop: !0,
                        borderRight: !0,
                        borderBottom: !0,
                        borderLeft: !0,
                        padding: 2
                    }, r.createElement("div", {
                        onScroll: this.onUserScroll,
                        className: "amendment-modal__amendment-text",
                        "data-test-selector": "amendment-modal-text-container"
                    }, r.createElement(S.Q, null, 'Twitch, in its sole discretion, may make specially-formatted links appear on your Twitch channel page (a "', r.createElement(S.Q, {
                        type: S._49.Span,
                        bold: !0
                    }, "Special Link"), '"), which would direct Twitch users to the purchase of a software application, video game, in-game item or other digital product (a "', r.createElement(S.Q, {
                        type: S._49.Span,
                        bold: !0
                    }, "Product"), '") from Twitch. For every such purchase of a Product that is a Qualifying Purchase (as defined below), you will receive a fee (a "', r.createElement(S.Q, {
                        type: S._49.Span,
                        bold: !0
                    }, "Product Purchase Fee"), '") that will be equal to five percent (5%) of (a) the purchase price of such Product, as such price was listed by Twitch at the time of the Qualifying Purchase and in the currency in which the Qualifying Purchase was made, less (b) any special discounts or promotions, taxes, service charges, rebates, payment processing fees (e.g. credit card processing fees) and any other related transaction and processing expenses.'), r.createElement(S.Q, null, 'A "', r.createElement("strong", null, "Qualifying Purchase"), '" of a Product occurs when: (a) a user of Twitch clicks through a Special Link on your Twitch channel page; (b) such user purchases a Product(s); and (c) Twitch receives a fully settled payment for the purchase by such user.'), r.createElement(S.Q, null, "If we pay you a Product Purchase Fee and later issue a refund or credit to the Twitch user for such Qualifying Purchase (or receive a chargeback related to the Qualifying Purchase), we may offset the amount of the Product Purchase Fee we previously paid you for such Qualifying Purchase against future Product Purchase Fees or other amounts that would otherwise be payable to you under the Agreement or this Addendum, or require you to remit that amount to us."), r.createElement(S.Q, null, "This Addendum is governed by and subject to the Agreement. Capitalized terms used but not defined in this Addendum will have the meanings defined in the Agreement. Except as amended by this Addendum, all other terms and conditions of the Agreement remain in full force and effect."))), r.createElement(S._8, {
                        padding: {
                            top: 2,
                            bottom: 2
                        }
                    }, r.createElement(S.Q, {
                        fontSize: S.V.Size4
                    }, Object(p.d)("Summary", "CommerceAmendmentModal")), r.createElement(S.Q, null, Object(p.d)("By accepting below, you may earn revenue for certain purchases by your viewers as described above.", "CommerceAmendmentModal"))), r.createElement(S._35, {
                        borderTop: !0,
                        display: S.R.Flex,
                        flexDirection: S.T.Row,
                        alignItems: S.c.Center,
                        justifyContent: S._7.Center,
                        padding: {
                            top: 2,
                            bottom: 1
                        }
                    }, r.createElement(S._8, {
                        margin: {
                            left: .5,
                            right: .5
                        }
                    }, r.createElement(S.v, {
                        "data-test-selector": "amendment-modal-cancel-button",
                        type: S.B.Text,
                        onClick: this.onClose
                    }, Object(p.d)("Cancel", "CommerceAmendmentModal"))), this.renderAcceptButton(this.props.amendmentAccepted)))
                }, t
            }(r.PureComponent),
            Re = Object(u.a)(Ae, {
                name: "setAmendmentAcceptance"
            })(Ie),
            xe = (n("Fk2o"), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    return r.createElement(S._35, {
                        className: "amendment-modal__container",
                        background: S.n.Base
                    }, r.createElement(Re, {
                        "data-test-selector": "amendment-modal-selector",
                        onClose: this.props.closeModal,
                        amendmentAccepted: this.props.amendmentAccepted
                    }))
                }, t
            }(r.Component));
        var je = Object(Oe.b)(null, function(e) {
            return Object(g.b)({
                closeModal: Te.c
            }, e)
        })(xe);
        var De, Fe = Object(Oe.b)(null, function(e) {
                return Object(g.b)({
                    showAmendmentModal: function(e) {
                        var t = a.__rest(e, []);
                        return Object(Te.d)(je, t)
                    }
                }, e)
            })(Pe),
            Me = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    var e = this.props.match.params.channelName;
                    return r.createElement(r.Fragment, null, r.createElement(h.a, {
                        title: Object(p.d)("Game sales via Twitch", "CommerceAmendment"),
                        linkToParent: "/" + this.props.match.params.channelName + "/dashboard/settings/revenue"
                    }), r.createElement(U.a, null, r.createElement(Fe, {
                        channelName: e
                    })))
                }, t
            }(r.PureComponent),
            Le = Object(g.d)(Object(m.d)("CommerceAmendmentPage", {
                autoReportInteractive: !0,
                destination: ke.a.DashboardSettingsRevenueGameCommerce
            }), Object(Se.a)({
                location: _e.PageviewLocation.DashboardSettingsRevenueGameCommerce
            }))(Me),
            Ue = n("j0yR"),
            Be = n("K+dm"),
            Ve = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    var e = this.props.match.params.channelName;
                    return r.createElement(r.Fragment, null, r.createElement(h.a, {
                        title: Object(p.d)("Gear, games, and more via Amazon Associates", "CommerceAmendmentV2")
                    }), r.createElement(U.a, null, r.createElement(Be.a, {
                        channelName: e
                    }), r.createElement(Ue.a, {
                        channelName: e
                    })))
                }, t
            }(r.Component),
            We = Object(g.d)(Object(m.d)("CommerceAmendmentV2Page", {
                autoReportInteractive: !0,
                destination: ke.a.DashboardSettingsRevenueGameCommerceV2
            }), Object(Se.a)({
                location: _e.PageviewLocation.DashboardSettingsRevenueGameCommerceV2
            }))(Ve),
            Qe = n("ew1p"),
            Ye = n("SR0I"),
            Ge = n("AQc/"),
            ze = n("oR9V"),
            He = n("xZ9c"),
            qe = n("XnHd"),
            Xe = n("rr+v"),
            Ke = 1,
            $e = 1e4,
            Je = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    n.state = {
                        minBitsToCheerSaveStatus: ze.b.NoChanges,
                        minBitsPerEmoteSaveStatus: ze.b.NoChanges,
                        minBitsToCheerError: !1,
                        minBitsPerEmoteError: !1
                    }, n.onMinBitsToCheerInputChange = function(e) {
                        var t = n.state,
                            a = t.minBitsPerEmote,
                            r = t.minBitsPerEmoteSaveStatus,
                            i = Math.min(parseInt(e.currentTarget.value, 10), $e),
                            o = ze.b.DirtyChanges,
                            s = r,
                            l = !1;
                        (!i || !a || i < Ke || a && i < a) && (o = ze.b.NoChanges, s = ze.b.NoChanges), a && i < a && (l = !0), n.setState({
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
                            i = Math.min(parseInt(e.currentTarget.value, 10), $e),
                            o = r,
                            s = ze.b.DirtyChanges,
                            l = !1;
                        (!i || !a || i < Ke || a && a < i) && (o = ze.b.NoChanges, s = ze.b.NoChanges), a && a < i && (l = !0), n.setState({
                            minBitsPerEmote: i,
                            minBitsToCheerError: !1,
                            minBitsPerEmoteError: l,
                            minBitsToCheerSaveStatus: o,
                            minBitsPerEmoteSaveStatus: s
                        })
                    }, n.onMinBitsToCheerSave = function() {
                        return a.__awaiter(n, void 0, void 0, function() {
                            var e, t, n, r, i, o, s;
                            return a.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        if (e = this.state.minBitsToCheer, t = this.props, n = t.setMinBitsToCheer, r = t.data, i = t.channelName, !e || !r.user || !r.user.id) return [2];
                                        this.setState({
                                            minBitsToCheerSaveStatus: ze.b.Working
                                        }), o = {
                                            userID: r.user.id,
                                            chatMessage: {
                                                minBitsToCheer: e
                                            }
                                        }, a.label = 1;
                                    case 1:
                                        return a.trys.push([1, 3, , 4]), [4, n(Object(v.a)(o))];
                                    case 2:
                                        return s = a.sent(), Object(v.e)(He, {
                                            login: i
                                        }, function(e) {
                                            return e.user && e.user.settings && e.user.settings.cheer && s.data.updateCheerPartnerSettings && (e.user.settings.cheer.chatMessage.minBitsToCheer = s.data.updateCheerPartnerSettings.cheer.chatMessage.minBitsToCheer), e
                                        }), this.setState({
                                            minBitsToCheerSaveStatus: ze.b.Success
                                        }), [3, 4];
                                    case 3:
                                        return a.sent(), this.setState({
                                            minBitsToCheerSaveStatus: ze.b.Error
                                        }), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, n.onMinBitsPerEmoteSave = function() {
                        return a.__awaiter(n, void 0, void 0, function() {
                            var e, t, n, r, i, o, s;
                            return a.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        if (e = this.state.minBitsPerEmote, t = this.props, n = t.setMinBitsPerEmote, r = t.data, i = t.channelName, !e || !r.user || !r.user.id) return [2];
                                        this.setState({
                                            minBitsPerEmoteSaveStatus: ze.b.Working
                                        }), o = {
                                            userID: r.user.id,
                                            chatMessage: {
                                                minBitsPerEmote: e
                                            }
                                        }, a.label = 1;
                                    case 1:
                                        return a.trys.push([1, 3, , 4]), [4, n(Object(v.a)(o))];
                                    case 2:
                                        return s = a.sent(), Object(v.e)(He, {
                                            login: i
                                        }, function(e) {
                                            return e.user && e.user.settings && e.user.settings.cheer && s.data.updateCheerPartnerSettings && (e.user.settings.cheer.chatMessage.minBitsPerEmote = s.data.updateCheerPartnerSettings.cheer.chatMessage.minBitsPerEmote), e
                                        }), this.setState({
                                            minBitsPerEmoteSaveStatus: ze.b.Success
                                        }), [3, 4];
                                    case 3:
                                        return a.sent(), this.setState({
                                            minBitsPerEmoteSaveStatus: ze.b.Error
                                        }), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    };
                    var r = t.data;
                    if (!r.loading && !r.error && r.user && r.user.settings && r.user.settings.cheer) {
                        var i = r.user.settings.cheer.chatMessage,
                            o = i.minBitsToCheer,
                            s = i.minBitsPerEmote;
                        n.state = a.__assign({}, n.state, {
                            minBitsToCheer: o,
                            minBitsPerEmote: s
                        })
                    }
                    return n
                }
                return a.__extends(t, e), t.prototype.componentWillReceiveProps = function(e) {
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
                        i = e.minBitsPerEmoteError,
                        o = e.minBitsToCheerSaveStatus,
                        s = e.minBitsPerEmoteSaveStatus;
                    return r.createElement(r.Fragment, null, r.createElement(y.a, {
                        label: Object(p.d)("Minimum Bits to Cheer", "CheerSettingsPage"),
                        error: n,
                        errorMessage: Object(p.d)("Minimum Bit to Cheer must be greater than or equal to Minimum Bit Emote", "CheerSettingsPage"),
                        "data-test-selector": "cheer-minimum-bits-form"
                    }, r.createElement(S.Y, null, r.createElement(S.L, {
                        cols: {
                            default: 12,
                            sm: 8
                        }
                    }, r.createElement(S._8, {
                        display: S.R.Flex
                    }, r.createElement(S._8, {
                        flexGrow: 1,
                        margin: {
                            right: 1
                        }
                    }, r.createElement(S._4, {
                        type: S._5.Number,
                        min: Ke,
                        max: $e,
                        value: isNaN(t) ? "" : String(t),
                        onChange: this.onMinBitsToCheerInputChange,
                        "data-test-selector": "cheer-minimum-bits-input"
                    })), r.createElement(ze.a, {
                        status: o,
                        onClick: this.onMinBitsToCheerSave,
                        "data-test-selector": "cheer-minimum-bits-save-button"
                    })))), r.createElement(W.a, {
                        text: r.createElement(r.Fragment, null, Object(p.d)("Set the minimum number of Bits needed to send a Cheer message in your channel. We only recommend setting this above 1 to combat spam in chat.", "CheerSettingsPage"), r.createElement(S._35, {
                            display: S.R.Inline,
                            margin: {
                                left: 1
                            }
                        }, r.createElement(S._52, {
                            label: Object(p.d)("For example, if you choose 30, viewers will not be able to send a Cheer message with 29 or fewer Bits. They will need to use at least 30 Bits, either in a single emote, or by combining emotes that add up to at least 30 Bits.", "CheerSettingsPage"),
                            width: 300
                        }, r.createElement(S.o, {
                            icon: S._25.QuestionMark,
                            size: 20
                        }))))
                    })), r.createElement(y.a, {
                        label: Object(p.d)("Minimum Bits Emote", "CheerSettingsPage"),
                        error: i,
                        errorMessage: Object(p.d)("Minimum Bits Emote must be less than Minimum Bit to Cheer", "CheerSettingsPage"),
                        "data-test-selector": "emote-minimum-bits-form"
                    }, r.createElement(S.Y, null, r.createElement(S.L, {
                        cols: {
                            default: 12,
                            sm: 8
                        }
                    }, r.createElement(S._8, {
                        display: S.R.Flex
                    }, r.createElement(S._8, {
                        flexGrow: 1,
                        margin: {
                            right: 1
                        }
                    }, r.createElement(S._4, {
                        type: S._5.Number,
                        min: Ke,
                        max: $e,
                        value: isNaN(a) ? "" : String(a),
                        onChange: this.onMinBitsPerEmoteInputChange,
                        "data-test-selector": "emote-minimum-bits-input"
                    })), r.createElement(ze.a, {
                        status: s,
                        onClick: this.onMinBitsPerEmoteSave,
                        "data-test-selector": "emote-minimum-bits-save-button"
                    })))), r.createElement(W.a, {
                        text: r.createElement(r.Fragment, null, Object(p.d)("Set the smallest Bit Emote that can be used in your channel. We only recommend setting this above 1 to combat spam in chat.", "CheerSettingsPage"), r.createElement(S._35, {
                            display: S.R.Inline,
                            margin: {
                                left: 1
                            }
                        }, r.createElement(S._52, {
                            label: Object(p.d)("Bit Emote means the individual Bit Emotes that appear in chat. For example, if you choose 100, viewers cannot send “Cheer150 Cheer90” because Cheer90 is less than 100. “Cheer150 Cheer150” would be acceptable, because both cheers are greater than 100.", "CheerSettingsPage"),
                            width: 300
                        }, r.createElement(S.o, {
                            icon: S._25.QuestionMark,
                            size: 20
                        }))))
                    })))
                }, t
            }(r.Component),
            Ze = Object(g.d)(Object(u.a)(He, {
                options: function(e) {
                    return {
                        variables: {
                            login: e.channelName
                        }
                    }
                }
            }), Object(u.a)(Xe, {
                name: "setMinBitsToCheer"
            }), Object(u.a)(qe, {
                name: "setMinBitsPerEmote"
            }))(Je),
            et = function(e) {
                var t = e.channelName;
                return r.createElement(r.Fragment, null, r.createElement(Ge.a, {
                    title: Object(p.d)("Bits & Cheering", "CheerSettingsForm")
                }), r.createElement(U.a, null, r.createElement(Ze, {
                    channelName: t
                }), r.createElement(Ye.a, {
                    text: Object(p.d)("Cheer Badges", "CheerSettingsForm"),
                    linkTo: "/" + t + "/dashboard/settings/revenue/cheerbadges"
                }), r.createElement(Ye.a, {
                    text: Object(p.d)("Cheermotes", "CheerSettingsForm"),
                    linkTo: "/" + t + "/dashboard/settings/revenue/cheermotes"
                }), r.createElement(Ye.a, {
                    text: Object(p.d)("Pinned and Top Cheers", "CheerSettingsForm"),
                    linkTo: "/" + t + "/dashboard/settings/revenue/cheer"
                })))
            },
            tt = n("xHx8");
        ! function(e) {
            e.PAYOUT_ONBOARDING_LINK = "onboarding-section__payout-onboarding-link", e.UPGRADE_AGREEMENT_LINK = "onboarding-section__upgrade-agreement-link", e.PAYOUTS_LINK = "onboarding-section__payouts-link", e.AFFILIATE_AGREEMENT_LINK = "onboarding-section__affiliate-agreement-link", e.PARTNER_AGREEMENT_LINK = "onboarding-section__partner-agreement-link", e.EXTENSIONS_DEVELOPER_AGREEMENT_LINK = "onboarding-section__extensions-developer-agreement-link"
        }(De || (De = {}));
        var nt = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    return this.props.data.loading || this.props.data.error || this.props.channelName !== this.props.data.currentUser.login ? null : r.createElement(r.Fragment, null, r.createElement(Ge.a, {
                        title: Object(p.d)("Onboarding", "OnboardingSection")
                    }), r.createElement(U.a, null, !this.hasAgreementPendingUpgrade && r.createElement(Ye.a, {
                        "data-test-selector": De.PAYOUT_ONBOARDING_LINK,
                        text: this.payoutOnboardingLinkText,
                        linkTo: "/" + this.props.channelName + "/dashboard/settings/revenue/payout-onboarding"
                    }), this.hasAgreementPendingUpgrade && r.createElement(Ye.a, {
                        "data-test-selector": De.UPGRADE_AGREEMENT_LINK,
                        text: this.upgradeTermsLinkText,
                        linkTo: "/" + this.props.channelName + "/dashboard/settings/revenue/upgrade-terms"
                    }), this.hasCompletedOnboarding && r.createElement(Ye.a, {
                        "data-test-selector": De.PAYOUTS_LINK,
                        text: Object(p.d)("Change Payout Method", "OnboardingSection"),
                        linkTo: "/" + this.props.channelName + "/dashboard/settings/revenue/payouts"
                    }), this.props.data.currentUser.roles.isAffiliate && r.createElement(Ye.a, {
                        "data-test-selector": De.AFFILIATE_AGREEMENT_LINK,
                        text: Object(p.d)("View Affiliate Agreement", "OnboardingSection"),
                        linkTo: "https://www.twitch.tv/p/legal/affiliate-agreement/"
                    }), this.showPartnerAgreementLink && r.createElement(Ye.a, {
                        "data-test-selector": De.PARTNER_AGREEMENT_LINK,
                        text: Object(p.d)("View Active Partner Agreement", "OnboardingSection"),
                        linkTo: "/" + this.props.channelName + "/dashboard/settings/revenue/view-terms"
                    }), this.props.data.currentUser.roles.isExtensionsDeveloper && r.createElement(Ye.a, {
                        "data-test-selector": De.EXTENSIONS_DEVELOPER_AGREEMENT_LINK,
                        text: Object(p.d)("View Extensions Developer Agreement", "OnboardingSection"),
                        linkTo: "https://www.twitch.tv/p/legal/developer-agreement/"
                    })))
                }, Object.defineProperty(t.prototype, "hasAgreementPendingUpgrade", {
                    get: function() {
                        return !!this.props.data.currentUser.payoutInvite.workflow && this.props.data.currentUser.payoutInvite.workflow.currentStep === Qe.WorkflowState.AGREEMENT_PENDING_UPGRADE
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "hasCompletedOnboarding", {
                    get: function() {
                        return !!this.props.data.currentUser.payoutInvite.workflow && this.props.data.currentUser.payoutInvite.workflow.currentStep === Qe.WorkflowState.COMPLETED
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "payoutOnboardingLinkText", {
                    get: function() {
                        switch (this.props.data.currentUser.payoutInvite.category) {
                            case Qe.OnboardEntity.Affiliate:
                                return Object(p.d)("Affiliate Onboarding", "OnboardingSection");
                            case Qe.OnboardEntity.StandardPartner:
                            case Qe.OnboardEntity.PremiumPartner:
                            case Qe.OnboardEntity.CustomPartner:
                                return Object(p.d)("Partner Onboarding", "OnboardingSection");
                            case Qe.OnboardEntity.ExtensionsDeveloper:
                                return Object(p.d)("Extensions Developer Onboarding", "OnboardingSection");
                            default:
                                return ""
                        }
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "upgradeTermsLinkText", {
                    get: function() {
                        switch (this.props.data.currentUser.payoutInvite.category) {
                            case Qe.OnboardEntity.Affiliate:
                                return Object(p.d)("Agree to the Twitch Affiliate Agreement", "OnboardingSection");
                            case Qe.OnboardEntity.StandardPartner:
                            case Qe.OnboardEntity.PremiumPartner:
                                return Object(p.d)("Agree to the Twitch Partner Agreement", "OnboardingSection");
                            default:
                                return ""
                        }
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "isPaidPartner", {
                    get: function() {
                        return !!this.props.data.currentUser.payoutPlans && !!this.props.data.currentUser.payoutPlans.find(function(e) {
                            return e.category === Qe.PayoutCategory.Partner && e.isReceivingRevenue
                        })
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "isStandardPartner", {
                    get: function() {
                        return !!this.props.data.currentUser.payoutPlans && !!this.props.data.currentUser.payoutPlans.find(function(e) {
                            return e.category === Qe.PayoutCategory.Partner && !!e.tags && e.tags.includes(Qe.PayoutPlanTag.Standard)
                        })
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "isPremiumPartner", {
                    get: function() {
                        return !!this.props.data.currentUser.payoutPlans && !!this.props.data.currentUser.payoutPlans.find(function(e) {
                            return e.category === Qe.PayoutCategory.Partner && !!e.tags && e.tags.includes(Qe.PayoutPlanTag.Premium)
                        })
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "isLegacyPartner", {
                    get: function() {
                        return !!this.props.data.currentUser.payoutPlans && !!this.props.data.currentUser.payoutPlans.find(function(e) {
                            return e.category === Qe.PayoutCategory.Partner && !!e.tags && e.tags.includes(Qe.PayoutPlanTag.Legacy)
                        })
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "isCustomPartnerUpgrade", {
                    get: function() {
                        return this.props.data.currentUser.payoutInvite.category === Qe.OnboardEntity.CustomPartner && (this.isStandardPartner || this.isPremiumPartner)
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "isLegacyPartnerUpgrade", {
                    get: function() {
                        return this.isLegacyPartner && this.isStandardPartner && this.props.data.currentUser.payoutInvite.category === Qe.OnboardEntity.PremiumPartner
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "showPartnerAgreementLink", {
                    get: function() {
                        return this.isPaidPartner && !this.hasAgreementPendingUpgrade && !this.isCustomPartnerUpgrade && !this.isLegacyPartnerUpgrade
                    },
                    enumerable: !0,
                    configurable: !0
                }), t
            }(r.Component),
            at = Object(i.compose)(Object(m.d)("OnboardingSection", {
                autoReportInteractive: !0
            }), Object(u.a)(tt))(nt),
            rt = n("Aj/L"),
            it = n("QRuM"),
            ot = function(e) {
                return r.createElement(S._8, null, r.createElement(Ge.a, {
                    title: Object(p.d)("Other Revenue Streams", "OtherRevenueStreamsForm")
                }), r.createElement(U.a, null, r.createElement(Ye.a, {
                    text: Object(p.d)("Game sales via Twitch", "OtherRevenueStreamsForm"),
                    linkTo: "/" + e.channelName + "/dashboard/settings/revenue/game-commerce"
                }), r.createElement(it.c, {
                    name: "commerce_amendment_v2",
                    isStaff: e.isStaff
                }, r.createElement(Ye.a, {
                    text: Object(p.d)("Gear, games, and more via Amazon Associates", "OtherRevenueStreamsForm"),
                    linkTo: "/" + e.channelName + "/dashboard/settings/revenue/game-commerce-v2"
                })), r.createElement(Ye.a, {
                    text: Object(p.d)("Merch by Amazon (Beta)", "OtherRevenueStreamsForm"),
                    linkTo: "/" + e.channelName + "/dashboard/settings/revenue/merch-by-amazon"
                })))
            };
        var st, lt = Object(Oe.b)(function(e) {
                var t = Object(rt.c)(e);
                return {
                    isStaff: !!(t && t.roles && t.roles.isStaff)
                }
            })(ot),
            dt = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onChange = function(e) {
                        t.props.onChange(t.props.benefit, e.currentTarget.checked)
                    }, t
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    return r.createElement(y.a, {
                        label: this.props.label
                    }, r.createElement(S._51, {
                        checked: this.props.isToggled,
                        onChange: this.onChange
                    }), r.createElement(W.a, {
                        text: this.props.description
                    }))
                }, t
            }(r.Component),
            ct = n("9FLI"),
            ut = n("exGi");
        ! function(e) {
            e[e.AD_FREE_VIEWING = 0] = "AD_FREE_VIEWING", e[e.IGNORE_SLOW_MODE = 1] = "IGNORE_SLOW_MODE", e[e.SUBSCRIBER_ONLY_CHAT = 2] = "SUBSCRIBER_ONLY_CHAT", e[e.SUBSCRIBER_ONLY_ARCHIVES = 3] = "SUBSCRIBER_ONLY_ARCHIVES"
        }(st || (st = {}));
        var mt = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.toggleBenefit = function(e, n) {
                        return a.__awaiter(t, void 0, void 0, function() {
                            var t, r, i, o, s, l, d, c, u;
                            return a.__generator(this, function(m) {
                                switch (m.label) {
                                    case 0:
                                        if (!(this.props.data.user && this.props.data.user.id && this.props.data.user.roles && this.props.data.user.subscriptionProducts)) return [2];
                                        if (!(t = this.props.data.user.subscriptionProducts[0])) return [2];
                                        r = e === st.AD_FREE_VIEWING ? n : t.hasAdFree, i = e === st.IGNORE_SLOW_MODE ? n : t.hasFastChat, o = e === st.SUBSCRIBER_ONLY_ARCHIVES ? n : t.hasSubonlyVideoArchive, s = e === st.SUBSCRIBER_ONLY_CHAT ? n : t.hasSubOnlyChat, l = this.props.data.user.subscriptionProducts, d = function(e) {
                                            var t, n, d;
                                            return a.__generator(this, function(a) {
                                                switch (a.label) {
                                                    case 0:
                                                        return (t = l[e]) ? (n = {
                                                            targetUserID: c.props.data.user.id,
                                                            id: t.id,
                                                            hasAdFree: r,
                                                            hasFastChat: i,
                                                            hasSubOnlyVideoArchive: o,
                                                            hasSubOnlyChat: s
                                                        }, [4, c.props.updateSubscriptionProduct(Object(v.a)(n))]) : [2, "continue"];
                                                    case 1:
                                                        return d = a.sent(), Object(v.e)(ct, {
                                                            login: c.props.channelName
                                                        }, function(t) {
                                                            if (t && t.user && t.user.subscriptionProducts && d.data.updateSubscriptionProduct) {
                                                                var n = t.user.subscriptionProducts[e],
                                                                    a = d.data.updateSubscriptionProduct.product;
                                                                if (n && a) return n.id = a.id, n.hasAdFree = a.hasAdFree, n.hasFastChat = a.hasFastChat, n.hasSubonlyVideoArchive = a.hasSubonlyVideoArchive, n.hasSubOnlyChat = a.hasSubOnlyChat, t
                                                            }
                                                        }), [2]
                                                }
                                            })
                                        }, c = this, u = 0, m.label = 1;
                                    case 1:
                                        return u < l.length ? [5, d(u)] : [3, 4];
                                    case 2:
                                        m.sent(), m.label = 3;
                                    case 3:
                                        return u++, [3, 1];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, t
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    if (!this.props.data.user || !this.props.data.user.roles || !this.props.data.user.subscriptionProducts) return this.props.data.loading ? r.createElement(S._10, {
                        fillContent: !0
                    }) : this.props.data.error ? r.createElement(l.a, null) : null;
                    var e = this.props.data.user.subscriptionProducts[0];
                    if (!e) return null;
                    var t = this.props.channelName,
                        n = this.props.data.user.roles.isPartner || !1,
                        a = e.hasAdFree,
                        i = e.hasFastChat || !1,
                        o = e.hasSubOnlyChat || !1,
                        s = e.hasSubonlyVideoArchive || !1;
                    return r.createElement(r.Fragment, null, r.createElement(Ge.a, {
                        title: Object(p.d)("Subscriptions", "DashboardRevenueSettings")
                    }), r.createElement(U.a, null, r.createElement(Ye.a, {
                        text: Object(p.d)("Subscription names", "SubsSettingsSection"),
                        linkTo: "/" + t + "/dashboard/settings/revenue/subscription/ticket"
                    }), n && r.createElement(r.Fragment, null, r.createElement(Ye.a, {
                        text: Object(p.d)("Emotes", "SubsSettingsSection"),
                        linkTo: "/" + t + "/dashboard/settings/revenue/subscription/chatperks"
                    }), r.createElement(Ye.a, {
                        text: Object(p.d)("Loyalty badges", "SubsSettingsSection"),
                        linkTo: "/" + t + "/dashboard/settings/revenue/subscription/badges"
                    }), r.createElement(dt, {
                        benefit: st.AD_FREE_VIEWING,
                        label: Object(p.d)("Ad-Free viewing", "SubsSettingsSection"),
                        isToggled: a,
                        onChange: this.toggleBenefit,
                        description: Object(p.d)("Allow subscribers to watch your content on your channel ad-free", "SubsSettingsSection")
                    })), r.createElement(dt, {
                        benefit: st.IGNORE_SLOW_MODE,
                        label: Object(p.d)("Ignore slow mode", "SubsSettingsSection"),
                        isToggled: i,
                        onChange: this.toggleBenefit,
                        description: Object(p.d)("Allow subscribers to chat freely in your channel when chat is in slow mode", "SubsSettingsSection")
                    }), r.createElement(dt, {
                        benefit: st.SUBSCRIBER_ONLY_CHAT,
                        label: Object(p.d)("Subscriber-only chat", "SubsSettingsSection"),
                        isToggled: o,
                        onChange: this.toggleBenefit,
                        description: Object(p.d)("Only allow subscribers and moderators to chat in your channel", "SubsSettingsSection")
                    }), r.createElement(dt, {
                        benefit: st.SUBSCRIBER_ONLY_ARCHIVES,
                        label: Object(p.d)("Subscriber-only archives", "SubsSettingsSection"),
                        isToggled: s,
                        onChange: this.toggleBenefit,
                        description: Object(p.d)("Only allow subscribers to watch your past broadcasts", "SubsSettingsSection")
                    })))
                }, t
            }(r.Component),
            pt = Object(g.d)(Object(u.a)(ct, {
                options: function(e) {
                    return {
                        variables: {
                            login: e.channelName
                        }
                    }
                }
            }), Object(u.a)(ut, {
                name: "updateSubscriptionProduct"
            }))(mt),
            ht = n("nQ9n"),
            gt = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    return this.props.data.loading ? r.createElement(S._8, {
                        fullHeight: !0
                    }, r.createElement(S._10, {
                        fillContent: !0
                    })) : this.props.data.error ? r.createElement(S._8, {
                        fullHeight: !0
                    }, r.createElement(l.a, null)) : r.createElement(c.b, null, r.createElement(S._8, {
                        fullHeight: !0
                    }, r.createElement(at, {
                        channelName: this.channelName
                    }), (this.isPaidAffiliate || this.isPaidPartner) && r.createElement(r.Fragment, null, r.createElement(pt, {
                        channelName: this.channelName
                    }), r.createElement(et, {
                        channelName: this.channelName
                    }), r.createElement(lt, {
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
                            return e.category === Qe.PayoutCategory.Affiliate && e.isReceivingRevenue
                        })
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "isPaidPartner", {
                    get: function() {
                        var e = this.props.data.channel.payoutPlans;
                        return !!e && !!e.find(function(e) {
                            return e.category === Qe.PayoutCategory.Partner && e.isReceivingRevenue
                        })
                    },
                    enumerable: !0,
                    configurable: !0
                }), t
            }(r.Component),
            bt = Object(i.compose)(Object(m.d)("DashboardRevenueSettingsIndexPage", {
                autoReportInteractive: !0,
                destination: ke.a.DashboardSettingsRevenue
            }), Object(Se.a)({
                location: _e.PageviewLocation.DashboardRevenueSettings
            }), Object(u.a)(ht, {
                options: function(e) {
                    return {
                        variables: {
                            channelName: e.match.params.channelName
                        }
                    }
                }
            }))(gt),
            ft = n("vNxz"),
            vt = function(e) {
                return r.createElement(S._35, {
                    background: S.n.Base,
                    padding: {
                        x: 2,
                        y: 3
                    }
                }, r.createElement(S._35, {
                    borderBottom: !0,
                    margin: {
                        bottom: 2
                    },
                    padding: {
                        bottom: 2
                    }
                }, r.createElement(S.Q, {
                    type: S._49.H4
                }, Object(p.d)("Save Badge Images", "LoyaltyBadgeUploadModalPresentation"))), r.createElement(S._8, {
                    margin: {
                        bottom: 2
                    }
                }, r.createElement(S.Q, null, Object(p.d)("By uploading and saving these images, you are confirming that you own all rights to the images.", "LoyaltyBadgeUploadModalPresentation"))), r.createElement(S._35, {
                    borderTop: !0,
                    padding: {
                        top: 2
                    },
                    display: S.R.Flex,
                    justifyContent: S._7.Center
                }, r.createElement(S._8, {
                    margin: {
                        right: 2
                    }
                }, r.createElement(S.v, {
                    onClick: e.onClose,
                    type: S.B.Text
                }, Object(p.d)("Cancel", "LoyaltyBadgeUploadModalPresentation"))), r.createElement(S.v, {
                    onClick: e.onSaveClick
                }, Object(p.d)("Save", "LoyaltyBadgeUploadModalPresentation"))), r.createElement(ft.a, {
                    closeOnBackdropClick: !0,
                    closeOnPageNavigation: !0
                }))
            },
            Et = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onSaveClick = function() {
                        t.props.closeModal(), t.props.onSaveClick()
                    }, t.onCancelClick = function() {
                        t.props.closeModal()
                    }, t
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    return r.createElement(vt, {
                        onSaveClick: this.onSaveClick,
                        onClose: this.onCancelClick
                    })
                }, t
            }(r.Component);
        var yt, St = Object(Oe.b)(null, function(e) {
                return Object(g.b)({
                    closeModal: Te.c
                }, e)
            })(Et),
            kt = this,
            _t = "subscriptions/v1/channels",
            Ot = function() {
                function e() {}
                return e.getBadges = function(e) {
                    return a.__awaiter(kt, void 0, void 0, function() {
                        var t, n;
                        return a.__generator(this, function(a) {
                            switch (a.label) {
                                case 0:
                                    return a.trys.push([0, 2, , 3]), [4, re.a.getOrThrow(_t + "/" + e + "/badges", {
                                        credentials: "include"
                                    })];
                                case 1:
                                    return t = a.sent(), [2, Nt(t.body)];
                                case 2:
                                    return n = a.sent(), [2, Promise.reject(n)];
                                case 3:
                                    return [2]
                            }
                        })
                    })
                }, e.getTimeoutStatuses = function(e) {
                    return a.__awaiter(kt, void 0, void 0, function() {
                        var t;
                        return a.__generator(this, function(n) {
                            switch (n.label) {
                                case 0:
                                    return n.trys.push([0, 2, , 3]), [4, re.a.getOrThrow(_t + "/" + e + "/timeout_statuses", {
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
                    return a.__awaiter(kt, void 0, void 0, function() {
                        var n;
                        return a.__generator(this, function(a) {
                            switch (a.label) {
                                case 0:
                                    return a.trys.push([0, 2, , 3]), [4, re.a.deleteOrThrow(_t + "/" + e + "/badges/" + t, {
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
                    return a.__awaiter(kt, void 0, void 0, function() {
                        var n, r, i;
                        return a.__generator(this, function(a) {
                            switch (a.label) {
                                case 0:
                                    return a.trys.push([0, 2, , 3]), (n = new FormData).append("required_tenure_months", t.requiredTenureMonths.toString()), n.append("image_1x", t.image1x), n.append("image_2x", t.image2x), n.append("image_4x", t.image4x), [4, re.a.postOrThrow(_t + "/" + e + "/badges", {
                                        body: n,
                                        credentials: "include"
                                    })];
                                case 1:
                                    return r = a.sent(), [2, Tt(r.body)];
                                case 2:
                                    return i = a.sent(), [2, Promise.reject(i)];
                                case 3:
                                    return [2]
                            }
                        })
                    })
                }, e
            }(),
            Tt = function(e) {
                return {
                    id: e.id,
                    requiredTenureMonths: e.required_tenure_months,
                    image1xURL: e.image_1x_url,
                    image2xURL: e.image_2x_url,
                    image4xURL: e.image_4x_url,
                    title: e.title
                }
            },
            Nt = function(e) {
                return e.map(function(e) {
                    return Tt(e)
                })
            },
            Ct = n("OjIq"),
            Pt = (n("CRdy"), "https://static-cdn.jtvnw.net/badges/v1/19dd8673-124d-4f44-830c-b0f4f9d78635/2"),
            At = "current-badge-image-selector",
            wt = "current-badge-placeholder-selector",
            It = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.renderCurrentBadges = function() {
                        var e = new Map(t.props.badgesMap),
                            n = Ht.map(t => {
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
                                    const e = this.renderToolTip(Object(p.d)("Subscriber", "LoyaltyBadgeCurrentSection"), Pt);
                                    return this.renderCurrentBadgeImage(t, e)
                                }
                            });
                        return r.createElement(S._8, {
                            margin: {
                                top: 1,
                                bottom: 1
                            }
                        }, n)
                    }, t.renderCurrentBadgeImage = function(e, n) {
                        var a = At;
                        return t.renderCurrentBadge(e, "loyalty-badges-current-section__badge", a, n)
                    }, t.renderCurrentBadgePlaceholder = function(e) {
                        var n = wt;
                        return t.renderCurrentBadge(e, "loyalty-badges-current-section__placeholder", n)
                    }, t.renderCurrentBadge = function(e, t, n, a) {
                        return r.createElement(S._8, {
                            key: e.requiredTenureMonths,
                            "data-test-selector": n,
                            display: S.R.InlineFlex,
                            flexDirection: S.T.Column,
                            margin: {
                                right: 2
                            },
                            verticalAlign: S._59.Top
                        }, r.createElement(S._8, {
                            className: t
                        }, a), r.createElement(S._8, {
                            textAlign: S._45.Center
                        }, r.createElement(S.Q, null, e.name)))
                    }, t.renderToolTip = function(e, t) {
                        return r.createElement(S._52, {
                            direction: S._54.Bottom,
                            label: e
                        }, r.createElement("img", {
                            src: t,
                            alt: e
                        }))
                    }, t
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    return r.createElement(Ct.a, {
                        title: Object(p.d)("Current Badges", "LoyaltyBadgeCurrentSection")
                    }, this.renderCurrentBadges())
                }, t
            }(r.Component);
        n("/GDT");
        ! function(e) {
            e[e.NoChanges = 0] = "NoChanges", e[e.Working = 1] = "Working", e[e.Success = 2] = "Success", e[e.Error = 3] = "Error"
        }(yt || (yt = {}));
        var Rt = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.renderContainer = function(e, n) {
                        return r.createElement(S._8, {
                            textAlign: S._45.Center,
                            margin: {
                                right: 1
                            }
                        }, r.createElement(S._8, {
                            className: "loyalty-badges-delete-section__container",
                            alignItems: S.c.Center,
                            display: S.R.InlineFlex,
                            justifyContent: S._7.Center
                        }, r.createElement("img", {
                            src: e,
                            alt: t.props.title
                        })), r.createElement(S.Q, null, n))
                    }, t.getButtonState = function(e) {
                        switch (e) {
                            case yt.Working:
                                return S.A.Loading;
                            case yt.Success:
                            case yt.NoChanges:
                            case yt.Error:
                            default:
                                return S.A.Default
                        }
                    }, t
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    return r.createElement(r.Fragment, null, this.renderContainer(this.props.image1xURL, Object(p.d)("18 x 18px", "LoyaltyBadgeDeleteSection")), this.renderContainer(this.props.image2xURL, Object(p.d)("32 x 32px", "LoyaltyBadgeDeleteSection")), this.renderContainer(this.props.image4xURL, Object(p.d)("72 x 72px", "LoyaltyBadgeDeleteSection")), r.createElement(S._8, {
                        className: "loyalty-badges-delete-section__button-container",
                        alignItems: S.c.Start,
                        display: S.R.InlineFlex,
                        flexDirection: S.T.Column,
                        justifyContent: S._7.Center,
                        margin: {
                            left: 1
                        }
                    }, r.createElement(S._8, {
                        margin: {
                            bottom: 1
                        }
                    }, r.createElement(S.v, {
                        type: S.B.Alert,
                        state: this.getButtonState(this.props.deleteStatus),
                        onClick: this.props.showDeleteBadgeModal
                    }, Object(p.d)("Delete Badge", "LoyaltyBadgeUploadSection"))), this.props.deleteStatus === yt.Error && r.createElement(S._12, {
                        label: Object(p.d)("Failed to delete subscriber badge", "LoyaltyBadgeDeleteSection"),
                        type: S._13.Alert
                    })))
                }, t
            }(r.Component),
            xt = function(e) {
                return r.createElement(S._35, {
                    background: S.n.Base,
                    padding: {
                        x: 2,
                        y: 3
                    }
                }, r.createElement(S._35, {
                    borderBottom: !0,
                    margin: {
                        bottom: 2
                    },
                    padding: {
                        bottom: 2
                    }
                }, r.createElement(S.Q, {
                    type: S._49.H4
                }, Object(p.d)("Are you sure?", "LoyaltyBadgeDeleteModalPresentation"))), r.createElement(S._8, {
                    margin: {
                        bottom: 2
                    }
                }, r.createElement(S.Q, null, Object(p.d)("Deleting your subscriber badge could negatively impact your subscribers.", "LoyaltyBadgeDeleteModalPresentation"))), r.createElement(S._35, {
                    borderTop: !0,
                    padding: {
                        top: 2
                    },
                    display: S.R.Flex,
                    justifyContent: S._7.Center
                }, r.createElement(S._8, {
                    margin: {
                        right: 2
                    }
                }, r.createElement(S.v, {
                    onClick: e.onClose,
                    type: S.B.Text
                }, Object(p.d)("Cancel", "LoyaltyBadgeDeleteModalPresentation"))), r.createElement(S.v, {
                    onClick: e.onDeleteClick
                }, Object(p.d)("Delete", "LoyaltyBadgeDeleteModalPresentation"))), r.createElement(ft.a, {
                    closeOnBackdropClick: !0,
                    closeOnPageNavigation: !0
                }))
            },
            jt = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onDeleteClick = function() {
                        t.props.closeModal(), t.props.onDeleteClick()
                    }, t.onCancelClick = function() {
                        t.props.closeModal()
                    }, t
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    return r.createElement(xt, {
                        onDeleteClick: this.onDeleteClick,
                        onClose: this.onCancelClick
                    })
                }, t
            }(r.Component);
        var Dt = Object(Oe.b)(null, function(e) {
            return Object(g.b)({
                closeModal: Te.c
            }, e)
        })(jt);
        var Ft, Mt = Object(Oe.b)(null, function(e, t) {
                return Object.assign(Object(g.b)({
                    showDeleteBadgeModal: function() {
                        return Object(Te.d)(Dt, {
                            onDeleteClick: t.onDeleteClick
                        })
                    }
                }, e), t)
            })(Rt),
            Lt = function() {
                return r.createElement(r.Fragment, null, r.createElement(S.Q, {
                    bold: !0,
                    fontSize: S.V.Size7
                }, Object(p.d)("Contact Partner Help", "LoyaltyBadgeTimedOutSection")), r.createElement(S._8, {
                    padding: {
                        top: 1
                    }
                }, r.createElement(S.Q, null, Object(p.d)("One or more of the badges you've attempted to upload violate our Terms of Service. As such, your ability to upload new badges has been temporarily disabled and the offending content has been deleted.", "LoyaltyBadgeTimedOutSection"))), r.createElement(S._8, {
                    padding: {
                        top: 1
                    }
                }, r.createElement(S.Q, null, Object(p.d)("Please contact {email} for more information.", {
                    email: r.createElement("a", {
                        href: "mailto:partnerhelp@twitch.tv"
                    }, "partnerhelp@twitch.tv")
                }, "LoyaltyBadgeTimedOutSection"))))
            },
            Ut = function() {
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
        }(Ft || (Ft = {}));
        var Bt = 25e3,
            Vt = Bt / 1e3,
            Wt = ["image/png"],
            Qt = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        errorStatus: Ft.None
                    }, t.getErrorText = function() {
                        switch (t.state.errorStatus) {
                            case Ft.BadSizeError:
                                return Object(p.d)("Max file size is {fileSize} KB", {
                                    fileSize: Vt
                                }, "LoyaltyBadgeFilePicker");
                            case Ft.BadImageError:
                                return Object(p.d)("Bad PNG file", "LoyaltyBadgeFilePicker");
                            case Ft.BadImageDimensionsError:
                                return Object(p.d)("PNG must be {width} x {height}px", {
                                    width: t.props.widthRequirement,
                                    height: t.props.heightRequirement
                                }, "LoyaltyBadgeFilePicker");
                            case Ft.None:
                            default:
                                return
                        }
                    }, t.onFilesSubmitted = function(e) {
                        return a.__awaiter(t, void 0, void 0, function() {
                            var t, n = this;
                            return a.__generator(this, function(a) {
                                return e.length < 1 ? [2] : (t = e[0]).size > Bt ? (this.setState({
                                    errorStatus: Ft.BadSizeError
                                }), [2]) : (Ut.readFile(t, function(e) {
                                    Ut.readImage(e, n.props.widthRequirement, n.props.heightRequirement, function() {
                                        n.setState({
                                            errorStatus: Ft.None
                                        }), n.props.onFileSubmitted(t, e)
                                    }, function() {
                                        n.setState({
                                            errorStatus: Ft.BadImageDimensionsError
                                        })
                                    }, function() {
                                        n.setState({
                                            errorStatus: Ft.BadImageError
                                        })
                                    })
                                }), [2])
                            })
                        })
                    }, t
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    var e = this.getErrorText();
                    return r.createElement(S._8, {
                        position: S._15.Relative
                    }, r.createElement(S._8, {
                        textAlign: S._45.Center,
                        margin: {
                            right: 1
                        }
                    }, r.createElement(S._8, {
                        className: "loyalty-badges-file-picker__container",
                        display: S.R.InlineFlex,
                        flexDirection: S.T.Column,
                        position: S._15.Relative
                    }, r.createElement(C.a, {
                        allowedFileTypes: Wt,
                        error: void 0 !== e,
                        onFilesSubmitted: this.onFilesSubmitted
                    }, r.createElement(S._8, {
                        padding: .5
                    }, e ? r.createElement(S.Q, {
                        color: S.K.Error,
                        wordBreak: S._61.BreakWord
                    }, e) : this.props.children))), r.createElement(S.Q, null, Object(p.d)("{width} x {height}px", {
                        width: this.props.widthRequirement,
                        height: this.props.heightRequirement
                    }, "LoyaltyBadgeFilePicker")), e && r.createElement(S._12, {
                        label: e,
                        type: S._13.Alert
                    })))
                }, t
            }(r.Component),
            Yt = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.renderFilePickerContents = function() {
                        return r.createElement(r.Fragment, null, r.createElement(S._24, {
                            asset: S._25.Plus,
                            height: 16,
                            width: 16
                        }), r.createElement(S.Q, null, Object(p.d)("Upload Image", "LoyaltyBadgeUploadSection")))
                    }, t
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    var e = this.props,
                        t = e.image1xURL,
                        n = e.image2xURL,
                        a = e.image4xURL;
                    return r.createElement(r.Fragment, null, r.createElement(Qt, {
                        onFileSubmitted: this.props.onImage1xSubmitted,
                        heightRequirement: 18,
                        widthRequirement: 18
                    }, t ? r.createElement("img", {
                        src: t
                    }) : this.renderFilePickerContents()), r.createElement(Qt, {
                        onFileSubmitted: this.props.onImage2xSubmitted,
                        heightRequirement: 36,
                        widthRequirement: 36
                    }, n ? r.createElement("img", {
                        src: n
                    }) : this.renderFilePickerContents()), r.createElement(Qt, {
                        onFileSubmitted: this.props.onImage4xSubmitted,
                        heightRequirement: 72,
                        widthRequirement: 72
                    }, a ? r.createElement("img", {
                        src: a
                    }) : this.renderFilePickerContents()))
                }, t
            }(r.Component),
            Gt = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        isTimedOut: !1
                    }, t.renderTabs = function() {
                        var e = Ht.map(function(e) {
                            var n = e.requiredTenureMonths;
                            return r.createElement(S._36, {
                                key: n,
                                active: t.props.activeTab === n,
                                "data-tab-target": n,
                                onClick: t.toggleActiveTab
                            }, r.createElement(S.Q, null, e.name))
                        });
                        return r.createElement(S._37, null, e)
                    }, t.renderTabContent = function() {
                        var e = t.props.activeTab,
                            n = t.props.badgesMap.get(e);
                        return r.createElement(S._8, {
                            display: S.R.InlineFlex,
                            margin: {
                                top: 1
                            }
                        }, n ? r.createElement(Mt, {
                            image1xURL: n.image1xURL,
                            image2xURL: n.image2xURL,
                            image4xURL: n.image4xURL,
                            title: n.title,
                            onDeleteClick: t.props.onDeleteClick,
                            deleteStatus: t.props.deleteStatus
                        }) : r.createElement(Yt, {
                            image1xURL: t.props.image1xDataURL,
                            image2xURL: t.props.image2xDataURL,
                            image4xURL: t.props.image4xDataURL,
                            onImage1xSubmitted: t.props.onImage1xSubmitted,
                            onImage2xSubmitted: t.props.onImage2xSubmitted,
                            onImage4xSubmitted: t.props.onImage4xSubmitted
                        }))
                    }, t.toggleActiveTab = function(e) {
                        return a.__awaiter(t, void 0, void 0, function() {
                            var t, n, r, i, o;
                            return a.__generator(this, function(a) {
                                if (e.currentTarget.parentElement)
                                    for (t = e.currentTarget.parentElement.getAttribute("data-tab-target"), n = 0, r = Ht; n < r.length; n++) i = r[n], o = i.requiredTenureMonths, t === o.toString() && this.props.toggleActiveTab(o);
                                return [2]
                            })
                        })
                    }, t
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    return a.__awaiter(this, void 0, void 0, function() {
                        var e;
                        return a.__generator(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return [4, Ot.getTimeoutStatuses(this.props.channelId)];
                                case 1:
                                    return e = t.sent(), this.setState({
                                        isTimedOut: e
                                    }), [2]
                            }
                        })
                    })
                }, t.prototype.render = function() {
                    return r.createElement(Ct.a, {
                        title: Object(p.d)("Manage Badges", "LoyaltyBadgeManageSection")
                    }, this.state.isTimedOut ? r.createElement(Lt, null) : r.createElement(r.Fragment, null, this.renderTabs(), this.renderTabContent()))
                }, t
            }(r.Component),
            zt = n("/D4H"),
            Ht = [{
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
            qt = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        badgesMap: new Map,
                        activeTab: 0,
                        saveStatus: E.b.NoChanges,
                        deleteStatus: yt.NoChanges
                    }, t.onSaveClick = function() {
                        return a.__awaiter(t, void 0, void 0, function() {
                            var e, t, n, r;
                            return a.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        if (!((e = this.props.data.user) && e.id && this.state.image1x && this.state.image2x && this.state.image4x)) return [3, 4];
                                        this.setState({
                                            saveStatus: E.b.Working
                                        }), t = {
                                            requiredTenureMonths: this.state.activeTab,
                                            image1x: this.state.image1x,
                                            image2x: this.state.image2x,
                                            image4x: this.state.image4x
                                        }, a.label = 1;
                                    case 1:
                                        return a.trys.push([1, 3, , 4]), [4, Ot.uploadBadge(e.id, t)];
                                    case 2:
                                        return n = a.sent(), (r = new Map(this.state.badgesMap)).set(n.requiredTenureMonths, n), this.setState({
                                            badgesMap: r,
                                            image1xDataURL: void 0,
                                            image2xDataURL: void 0,
                                            image4xDataURL: void 0,
                                            image1x: void 0,
                                            image2x: void 0,
                                            image4x: void 0,
                                            saveStatus: E.b.Success
                                        }), [3, 4];
                                    case 3:
                                        return a.sent(), this.setState({
                                            saveStatus: E.b.Error
                                        }), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, t.toggleActiveTab = function(e) {
                        return a.__awaiter(t, void 0, void 0, function() {
                            return a.__generator(this, function(t) {
                                return this.setState({
                                    activeTab: e,
                                    image1xDataURL: void 0,
                                    image2xDataURL: void 0,
                                    image4xDataURL: void 0,
                                    image1x: void 0,
                                    image2x: void 0,
                                    image4x: void 0,
                                    deleteStatus: yt.NoChanges,
                                    saveStatus: E.b.NoChanges
                                }), [2]
                            })
                        })
                    }, t.updateSaveStatus = function() {
                        t.state.image1x && t.state.image2x && t.state.image4x ? t.setState({
                            saveStatus: E.b.DirtyChanges
                        }) : t.setState({
                            saveStatus: E.b.NoChanges
                        })
                    }, t.onImage1xSubmitted = function(e, n) {
                        return a.__awaiter(t, void 0, void 0, function() {
                            return a.__generator(this, function(t) {
                                return this.setState({
                                    image1x: e,
                                    image1xDataURL: n
                                }), this.updateSaveStatus(), [2]
                            })
                        })
                    }, t.onImage2xSubmitted = function(e, n) {
                        return a.__awaiter(t, void 0, void 0, function() {
                            return a.__generator(this, function(t) {
                                return this.setState({
                                    image2x: e,
                                    image2xDataURL: n
                                }), this.updateSaveStatus(), [2]
                            })
                        })
                    }, t.onImage4xSubmitted = function(e, n) {
                        return a.__awaiter(t, void 0, void 0, function() {
                            return a.__generator(this, function(t) {
                                return this.setState({
                                    image4x: e,
                                    image4xDataURL: n
                                }), this.updateSaveStatus(), [2]
                            })
                        })
                    }, t.onDeleteClick = function() {
                        return a.__awaiter(t, void 0, void 0, function() {
                            var e, t, n;
                            return a.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        if (e = this.props.data.user, t = this.state.badgesMap.get(this.state.activeTab), !(e && e.id && t)) return [3, 4];
                                        this.setState({
                                            deleteStatus: yt.Working
                                        }), a.label = 1;
                                    case 1:
                                        return a.trys.push([1, 3, , 4]), [4, Ot.deleteBadge(e.id, t.id)];
                                    case 2:
                                        return a.sent(), (n = new Map(this.state.badgesMap)).delete(t.requiredTenureMonths), this.setState({
                                            badgesMap: n,
                                            image1xDataURL: void 0,
                                            image2xDataURL: void 0,
                                            image4xDataURL: void 0,
                                            image1x: void 0,
                                            image2x: void 0,
                                            image4x: void 0,
                                            saveStatus: E.b.NoChanges,
                                            deleteStatus: yt.Success
                                        }), [3, 4];
                                    case 3:
                                        return a.sent(), this.setState({
                                            deleteStatus: yt.Error
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
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    return a.__awaiter(this, void 0, void 0, function() {
                        var e, t;
                        return a.__generator(this, function(n) {
                            switch (n.label) {
                                case 0:
                                    return this.props.data.user && this.props.data.user.id ? [4, Ot.getBadges(this.props.data.user.id)] : [2];
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
                    if (!this.props.data.user || !this.props.data.user.id) return this.props.data.loading ? r.createElement(S._10, {
                        fillContent: !0
                    }) : this.props.data.error ? r.createElement(l.a, null) : void 0;
                    var e = r.createElement(V.a, {
                        status: this.state.saveStatus,
                        onClickSave: this.handleModalOpen
                    });
                    return r.createElement(r.Fragment, null, r.createElement(h.a, {
                        title: Object(p.d)("Loyalty Badges", "LoyaltyBadgesPageComponent"),
                        linkToParent: "/" + this.props.match.params.channelName + "/dashboard/settings/revenue"
                    }), r.createElement(U.a, {
                        footer: e
                    }, r.createElement(It, {
                        badgesMap: this.state.badgesMap
                    }), r.createElement(Gt, {
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
            }(r.Component),
            Xt = Object(g.d)(Object(u.a)(zt, {
                options: function(e) {
                    return {
                        variables: {
                            login: e.match.params.channelName
                        }
                    }
                }
            }))(qt);
        var Kt, $t, Jt = Object(Oe.b)(null, function(e) {
                return Object(g.b)({
                    showUploadBadgeModal: function(e) {
                        var t = a.__rest(e, []);
                        return Object(Te.d)(St, t)
                    }
                }, e)
            })(Xt),
            Zt = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    return r.createElement(r.Fragment, null, r.createElement(h.a, {
                        title: Object(p.d)("Merch by Amazon (Beta)", "DashboardRevenueSettingsMerchByAmazon"),
                        linkToParent: "/" + this.props.match.params.channelName + "/dashboard/settings/revenue"
                    }), r.createElement(U.a, null, r.createElement(S._35, {
                        borderTop: !0,
                        padding: 2
                    }, r.createElement(S.Q, null, Object(p.d)("Register with Merch by Amazon to create and sell your merchandise.", "DashboardRevenueSettingsMerchByAmazon")), r.createElement(S._8, {
                        padding: {
                            y: 2
                        }
                    }, r.createElement(S.Q, null, Object(p.d)("Merch by Amazon will only approve one account for access per Twitch Partner. When you click this link you will be asked to log in with an Amazon account. Please make sure to log in with your preferred Amazon account, as that is the one we will enable for Merch by Amazon access.", "DashboardRevenueSettingsMerchByAmazon"))), r.createElement(S.v, {
                        targetBlank: !0,
                        linkTo: "https://twitch.amazon.com/link?confirm=ALWAYS&returnUri=https%3A%2F%2Fmerch.amazon.com%2Ftwitch-landing"
                    }, Object(p.d)("Create & Manage Your Merch Account", "DashboardRevenueSettingsMerchByAmazon")))))
                }, t
            }(r.Component),
            en = Object(g.d)(Object(m.d)("MerchByAmazonPage", {
                autoReportInteractive: !0,
                destination: ke.a.DashboardSettingsRevenueMerchByAmazon
            }), Object(Se.a)({
                location: _e.PageviewLocation.DashboardSettingsRevenueMerchByAmazon
            }))(Zt),
            tn = n("OAwv"),
            nn = n("RweG"),
            an = n("wuJz"),
            rn = n("7GS+"),
            on = function() {
                return r.createElement(r.Fragment, null, r.createElement(S._8, {
                    margin: {
                        bottom: 1
                    }
                }, r.createElement(S.Q, {
                    type: S._49.H4
                }, Object(p.d)("Twitch Affiliate Agreement", "AffiliateAgreement"))), r.createElement(S.Q, {
                    type: S._49.P
                }, Object(p.d)('By clicking the "{buttonLabel}" button below, you agree to the <x:link>Twitch Affiliate Agreement</x:link> (including all policies, appendices, specifications, guidelines, schedules, and other rules incorporated by reference therein); provided, however, that the Twitch Affiliate Agreement shall not be effective until we determine that you are eligible to participate in the Twitch Affiliate Program as further described therein.', {
                    buttonLabel: Object(p.d)("Agree", "AffiliateAgreement"),
                    "x:link": function(e) {
                        return r.createElement(S.O, {
                            key: "affiliate-agreement",
                            to: "https://www.twitch.tv/p/legal/affiliate-agreement"
                        }, e)
                    }
                }, "AffiliateAgreement")))
            },
            sn = function() {
                return r.createElement(r.Fragment, null, r.createElement(S._8, {
                    margin: {
                        bottom: 1
                    }
                }, r.createElement(S.Q, {
                    type: S._49.H4
                }, Object(p.d)("Twitch Partner Program Terms", "CustomPartnerAgreement"))), r.createElement(S.Q, {
                    type: S._49.P
                }, Object(p.d)("Your Twitch Partner Agreement has been emailed to you via DocuSign. Check the inbox of the email address associated with your Twitch account for an email from DocuSign/Twitch and follow the instructions. Once you have signed the Twitch Partner Agreement, please click {buttonLabel} to continue.", {
                    buttonLabel: Object(p.d)("Next", "CustomPartnerAgreement")
                }, "CustomPartnerAgreement")))
            },
            ln = function() {
                return r.createElement(r.Fragment, null, r.createElement(S._8, {
                    margin: {
                        bottom: 1
                    }
                }, r.createElement(S.Q, {
                    type: S._49.H4
                }, Object(p.d)("Twitch Extensions Developer Program Terms", "ExtensionsDeveloperAgreement"))), r.createElement(S.Q, {
                    type: S._49.P
                }, Object(p.d)("It looks like you've already agreed to the Twitch Developer Agreement! Click {buttonLabel} to continue.", {
                    buttonLabel: Object(p.d)("Next", "ExtensionsDeveloperAgreement")
                }, "ExtensionsDeveloperAgreement")))
            },
            dn = function(e) {
                return r.createElement(S._35, {
                    background: S.n.Alt2,
                    padding: {
                        x: 2,
                        y: 1
                    },
                    borderTop: e.borderTop
                }, r.createElement(S._8, {
                    display: S.R.InlineBlock,
                    margin: {
                        right: 1
                    }
                }, r.createElement(S.Q, {
                    type: S._49.H5,
                    transform: S._48.Uppercase,
                    color: S.K.Alt,
                    bold: !0
                }, e.title)), !!e.statusText && r.createElement(S._8, {
                    display: S.R.InlineBlock
                }, r.createElement(S.Q, {
                    type: S._49.H4,
                    transform: S._48.Uppercase,
                    bold: !0
                }, r.createElement(S._12, {
                    label: e.statusText,
                    type: e.statusType
                }))))
            },
            cn = function(e) {
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
                return a.__extends(t, e), t.prototype.render = function() {
                    return r.createElement(r.Fragment, null, r.createElement(dn, {
                        title: Object(p.d)("Parent Consent", "ParentConfirmation")
                    }), r.createElement(S._8, {
                        padding: 2
                    }, r.createElement(S.Q, {
                        type: S._49.P,
                        color: S.K.Alt2
                    }, Object(p.d)("Parent or legal guardian: Please type your first and last name and check the box below.", "ParentConfirmation")), r.createElement(S._8, {
                        margin: {
                            top: 2
                        }
                    }, r.createElement(S.W, {
                        label: Object(p.d)("Parent or Legal Guardian Name", "ParentConfirmation"),
                        orientation: S.X.Horizontal
                    }, r.createElement(S._8, {
                        margin: {
                            bottom: 1
                        }
                    }, r.createElement(S._4, {
                        type: S._5.Text,
                        placeholder: Object(p.d)("First and Last Name", "ParentConfirmation"),
                        value: this.state.parentName,
                        onChange: this.handleParentNameChange
                    })), r.createElement(S.J, {
                        label: Object(p.d)("I hereby warrant that I am the (parent)/(guardian) of the Twitch user associated with this account, a minor, and have full authority to authorize this Agreement, which I have read and approved. I hereby agree that I and said minor will be bound by all provisions contained in this Agreement.", "ParentConfirmation"),
                        checked: this.state.checked,
                        onChange: this.toggleChecked
                    })))))
                }, t
            }(r.Component),
            un = function() {
                return r.createElement(r.Fragment, null, r.createElement(S._8, {
                    margin: {
                        bottom: 1
                    }
                }, r.createElement(S.Q, {
                    type: S._49.H4
                }, Object(p.d)("Twitch Partner Program Terms", "PartnerRedoInfo"))), r.createElement(S.Q, {
                    type: S._49.P
                }, Object(p.d)("It looks like you've already agreed to the Twitch Partner Agreement! Click {buttonLabel} to continue.", {
                    buttonLabel: Object(p.d)("Next", "PartnerRedoInfo")
                }, "PartnerRedoInfo")))
            },
            mn = function(e) {
                return r.createElement(S._8, {
                    position: S._15.Relative
                }, r.createElement(S._8, {
                    position: S._15.Absolute,
                    attachRight: !0
                }, r.createElement(S.v, {
                    onClick: function() {
                        var e = window.open();
                        if (e) {
                            var t = window.document.getElementById("agreement-id-selector"),
                                n = t && t.innerHTML;
                            n && (e.document.write(n), e.document.close(), e.focus(), e.print())
                        }
                    }
                }, Object(p.d)("Print", "ViewPrintableAgreement"))), r.createElement("div", {
                    id: "agreement-id-selector",
                    dangerouslySetInnerHTML: {
                        __html: e.body
                    }
                }))
            },
            pn = n("U5GC"),
            hn = function(e) {
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
                        return a.__awaiter(t, void 0, void 0, function() {
                            return a.__generator(this, function(e) {
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
                        return a.__awaiter(t, void 0, void 0, function() {
                            var e, t, n, r, i, o;
                            return a.__generator(this, function(s) {
                                switch (s.label) {
                                    case 0:
                                        return this.props.onboardEntity === Qe.OnboardEntity.StandardPartner || this.props.onboardEntity === Qe.OnboardEntity.PremiumPartner ? (n = this.props.data.currentUser.programAgreement || "", e = n && n.type, t = n && n.version) : (e = this.props.onboardEntity, t = "v1"), r = a.__assign({}, Object(v.a)({
                                            type: e,
                                            version: t
                                        })), [4, this.props.acceptProgramAgreement(r)];
                                    case 1:
                                        return (i = s.sent()).data.acceptProgramAgreement.error ? (this.setState({
                                            processingAgreement: !1
                                        }), [2]) : (o = function(e) {
                                            return e.currentUser.payoutInvite && e.currentUser.payoutInvite.workflow && i.data.acceptProgramAgreement.workflow && (e.currentUser.payoutInvite.workflow.currentStep = i.data.acceptProgramAgreement.workflow.currentStep), e
                                        }, this.props.updateContainerQuery(o), this.props.updateStepDisplayed(Qe.OnboardStep.TaxInterview), [2])
                                }
                            })
                        })
                    }, t
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    if (this.props.data.loading) return r.createElement(U.a, null, r.createElement(Ct.a, null, r.createElement(S._14, {
                        lineCount: 4
                    })));
                    if (this.props.data.error) return r.createElement(U.a, null, r.createElement(Ct.a, null, r.createElement(l.a, {
                        message: Object(p.d)("Oops, something went wrong.", "PayoutOnboardingAgreement")
                    })));
                    var e = r.createElement(S.v, {
                        "data-test-selector": "payout-onboarding-agreement__proceed-button",
                        type: S.B.Default,
                        size: S.z.Large,
                        disabled: this.proceedButtonDisabled || this.state.processingAgreement,
                        state: this.state.processingAgreement ? S.A.Loading : S.A.Default,
                        onClick: this.handleAgreeClick
                    }, this.skipAgreement ? Object(p.d)("Next", "PayoutOnboardingAgreement") : Object(p.d)("Agree", "PayoutOnboardingAgreement"));
                    return r.createElement(U.a, {
                        footer: e
                    }, r.createElement(Ct.a, null, r.createElement(S._35, {
                        borderMarked: !0,
                        background: S.n.Base,
                        padding: 2,
                        elevation: 1
                    }, this.renderAgreement)), !this.skipAgreement && this.requiresParentConsent && r.createElement(cn, {
                        updateParentName: this.updateParentName,
                        updateParentConfirmation: this.updateParentConfirmation
                    }))
                }, Object.defineProperty(t.prototype, "renderAgreement", {
                    get: function() {
                        if (this.isPartnerRedo) return r.createElement(un, null);
                        switch (this.props.onboardEntity) {
                            case Qe.OnboardEntity.Affiliate:
                                return r.createElement(on, null);
                            case Qe.OnboardEntity.ExtensionsDeveloper:
                                return r.createElement(ln, null);
                            case Qe.OnboardEntity.StandardPartner:
                            case Qe.OnboardEntity.PremiumPartner:
                                var e = this.props.data.currentUser.programAgreement;
                                return e && r.createElement(mn, {
                                    body: e.body
                                });
                            case Qe.OnboardEntity.CustomPartner:
                                return r.createElement(sn, null);
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
                            return e.category === Qe.PayoutCategory.Partner
                        });
                        return !!e && (!!e.isReceivingRevenue && (!!e.tags && (e.tags.includes(Qe.PayoutPlanTag.Standard) ? this.props.onboardEntity === Qe.OnboardEntity.StandardPartner : e.tags.includes(Qe.PayoutPlanTag.Premium) ? this.props.onboardEntity === Qe.OnboardEntity.PremiumPartner : !!e.tags.includes(Qe.PayoutPlanTag.Custom) && this.props.onboardEntity === Qe.OnboardEntity.CustomPartner)))
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "skipAgreement", {
                    get: function() {
                        return this.props.onboardEntity === Qe.OnboardEntity.ExtensionsDeveloper || this.props.onboardEntity === Qe.OnboardEntity.CustomPartner || this.isPartnerRedo
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "requiresParentConsent", {
                    get: function() {
                        if (!this.props.workflow.registration) return !1;
                        var e = this.props.workflow.registration.birthdate;
                        return Object(an.differenceInYears)(new Date, e) < 18
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
            }(r.Component),
            gn = Object(g.d)(Object(u.a)(pn, {
                name: "data",
                options: function(e) {
                    return {
                        variables: {
                            withAgreement: e.onboardEntity === Qe.OnboardEntity.StandardPartner || e.onboardEntity === Qe.OnboardEntity.PremiumPartner
                        }
                    }
                }
            }), Object(u.a)(rn, {
                name: "acceptProgramAgreement"
            }))(hn),
            bn = function(e) {
                if (e.status === $t.Completed) return null;
                var t;
                if (e.status === $t.UnderReview) switch (e.onboardEntity) {
                        case Qe.OnboardEntity.ExtensionsDeveloper:
                            t = r.createElement(S.Q, null, Object(p.d)("Your financial information is currently under review. This process usually takes a few minutes.", "PayoutInfoBrick"));
                            break;
                        case Qe.OnboardEntity.Affiliate:
                        case Qe.OnboardEntity.StandardPartner:
                        case Qe.OnboardEntity.PremiumPartner:
                        case Qe.OnboardEntity.CustomPartner:
                            t = r.createElement(S.Q, null, Object(p.d)("Your payout information is currently under review. This typically only takes a few minutes.", "PayoutInfoBrick"))
                    } else if (e.status === $t.NotStarted) switch (e.onboardEntity) {
                        case Qe.OnboardEntity.ExtensionsDeveloper:
                            t = r.createElement(r.Fragment, null, r.createElement(S._8, {
                                margin: {
                                    bottom: 1
                                }
                            }, r.createElement(S.Q, null, Object(p.d)("Provide additional financial information to continue this process and, further, providing this information enables you to participate with any monetization features that may become available.", "PayoutInfoBrick"))), r.createElement(S.Q, null, Object(p.d)('Because there are no monetization options and we have no way to pay you out at this time, please choose the "Hold Payouts" option on the following screen.', "PayoutInfoBrick")));
                            break;
                        case Qe.OnboardEntity.Affiliate:
                            t = r.createElement(r.Fragment, null, r.createElement(S._8, {
                                margin: {
                                    bottom: 1
                                }
                            }, r.createElement(S.Q, null, Object(p.d)("Here you will choose how you want to get paid. You must accrue a minimum of $100 in revenue before you are eligible to receive a payout. Twitch uses a third party to process your payouts and the processor charges a transaction fee each time you get paid. The fees vary based on the payout method. See the fees <x:link>here.</x:link>", {
                                "x:link": function(e) {
                                    return r.createElement(S.O, {
                                        key: "affiliate-fees",
                                        to: "https://help.twitch.tv/customer/portal/articles/2785925-affiliate-onboarding-guide#fees",
                                        targetBlank: !0
                                    }, e)
                                }
                            }, "PayoutInfoBrick"))), r.createElement(S.Q, null, Object(p.d)('Choose "Hold Payouts" if you want us to hold your money until you are ready for a payout. Otherwise you will be paid automatically and charged a transaction fee each time you are paid out.', "PayoutInfoBrick")));
                            break;
                        case Qe.OnboardEntity.StandardPartner:
                        case Qe.OnboardEntity.PremiumPartner:
                        case Qe.OnboardEntity.CustomPartner:
                            t = r.createElement(r.Fragment, null, r.createElement(S._8, {
                                margin: {
                                    bottom: 1
                                }
                            }, r.createElement(S.Q, null, Object(p.d)("Here you will choose how you want to get paid. You must accrue a minimum of $100 in revenue before you are eligible to receive a payout.", "PayoutInfoBrick"))), r.createElement(S.Q, null, Object(p.d)('Choose "Hold Payouts" if you want us to hold your money until you are ready for a payout. Otherwise you will be paid automatically.', "PayoutInfoBrick")))
                    }
                    return r.createElement(S._35, {
                        borderMarked: !0,
                        padding: 2,
                        margin: {
                            bottom: 2
                        },
                        elevation: 1
                    }, t)
            },
            fn = function(e) {
                var t;
                switch (e.onboardEntity) {
                    case Qe.OnboardEntity.Affiliate:
                        t = "https://help.twitch.tv/customer/portal/articles/2785925-affiliate-onboarding-guide";
                        break;
                    case Qe.OnboardEntity.ExtensionsDeveloper:
                        t = "https://dev.twitch.tv/docs/extensions/onboarding";
                        break;
                    case Qe.OnboardEntity.StandardPartner:
                    case Qe.OnboardEntity.PremiumPartner:
                    case Qe.OnboardEntity.CustomPartner:
                        t = "https://help.twitch.tv/customer/portal/articles/2853658-partner-onboarding-guide";
                        break;
                    default:
                        return null
                }
                return r.createElement(S.Q, {
                    type: S._49.P
                }, Object(p.d)("Need Help? <x:link>See our detailed onboarding guide.</x:link>", {
                    "x:link": function(e) {
                        return r.createElement(S.O, {
                            key: "onbording-guide",
                            to: t,
                            targetBlank: !0
                        }, e)
                    }
                }, "OnboardingGuideLink"))
            },
            vn = function(e) {
                var t;
                return e.onboardEntity === Qe.OnboardEntity.ExtensionsDeveloper ? (e.status === $t.NotStarted && (t = r.createElement(S.Q, null, Object(p.d)("Click the button below to submit your financial information.", "PayoutInfoText"))), e.status === $t.UnderReview && (t = r.createElement(S.Q, null, Object(p.d)("You can change your financial information if you wish to modify any previously submitted information. You may want to do this if your financial information has been under review for more than 48 hours.", "PayoutInfoText"))), e.status === $t.Completed && (t = r.createElement(r.Fragment, null, r.createElement(S._8, {
                    margin: {
                        bottom: 1
                    }
                }, r.createElement(S.Q, null, Object(p.d)("Your financial information was successfully validated.", "PayoutInfoText"))), r.createElement(S.Q, null, Object(p.d)("Click the button below if you wish to modify or correct any previously submitted financial information. Please note that this will erase your existing financial information and you will need to fully complete the form again.", "PayoutInfoText"))))) : (e.status === $t.NotStarted && (t = r.createElement(S.Q, null, Object(p.d)("Click the button below to submit your payout method.", "PayoutInfoText"))), e.status === $t.UnderReview && (t = r.createElement(S.Q, null, Object(p.d)("You can change your payout method if you wish to modify any previously submitted information. You may want to do this if your payout information has been under review for more than 48 hours.", "PayoutInfoText"))), e.status === $t.Completed && (t = r.createElement(r.Fragment, null, r.createElement(S._8, {
                    margin: {
                        bottom: 1
                    }
                }, r.createElement(S.Q, null, Object(p.d)("Your payout information was successfully validated.", "PayoutInfoText"))), r.createElement(S.Q, null, Object(p.d)("Click the button below if you wish to modify or correct any previously submitted payout information. Please note that this will erase your existing payout information and you will need to fully complete the form again.", "PayoutInfoText"))))), r.createElement(r.Fragment, null, r.createElement(S._8, {
                    margin: {
                        bottom: 2
                    }
                }, t), e.status !== $t.Completed && r.createElement(S._8, {
                    margin: {
                        bottom: 2
                    }
                }, r.createElement(fn, {
                    onboardEntity: e.onboardEntity
                })))
            },
            En = n("+8VM"),
            yn = n("yDzg"),
            Sn = (n("mfHG"), function(e) {
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
                return a.__extends(t, e), t.prototype.render = function() {
                    var e = this;
                    return r.createElement(S._8, {
                        className: "tipalti-iframe--container"
                    }, !this.state.tipaltiIframeLoaded && r.createElement(S._10, {
                        fillContent: !0
                    }), r.createElement(S._8, {
                        "data-test-selector": "tipalti-iframe__iframe-container",
                        fullHeight: !0,
                        display: this.state.tipaltiIframeLoaded ? S.R.Block : S.R.Hide
                    }, r.createElement("iframe", {
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
            }(r.Component)),
            kn = n("uAAQ"),
            _n = (n("212O"), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    return this.props.data.loading ? r.createElement(S._35, {
                        className: "payout-method-modal__container",
                        background: S.n.Base,
                        padding: 5
                    }, r.createElement(S._10, {
                        fillContent: !0
                    })) : this.props.data.error ? r.createElement(S._35, {
                        className: "payout-method-modal__container",
                        background: S.n.Base,
                        padding: 5
                    }, r.createElement(l.a, {
                        message: Object(p.d)("Oops, something went wrong.", "PayoutMethodModal")
                    })) : r.createElement(S._35, {
                        className: "payout-method-modal__container",
                        background: S.n.Base,
                        padding: 2
                    }, r.createElement(Sn, {
                        tipaltiURL: this.tipaltiURL
                    }))
                }, Object.defineProperty(t.prototype, "tipaltiURL", {
                    get: function() {
                        return this.props.data.currentUser.payoutInvite.workflow.payoutSettingsURL
                    },
                    enumerable: !0,
                    configurable: !0
                }), t
            }(r.Component)),
            On = Object(g.d)(Object(u.a)(kn, {
                options: function() {
                    return {
                        variables: {
                            redirectURL: Object(yn.a)(window.location.href, {
                                redirect_tipalti: "true"
                            })
                        }
                    }
                }
            }))(_n),
            Tn = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    return r.createElement(r.Fragment, null, r.createElement(On, null), r.createElement(En.a, {
                        closeOnBackdropClick: !0
                    }))
                }, t
            }(r.Component);
        ! function(e) {
            e.ContinueButton = "payout-onboarding-payout-method__continue-button", e.HeaderStatus = "payout-onboarding-payout-method__header-status"
        }(Kt || (Kt = {})),
        function(e) {
            e[e.NotStarted = 0] = "NotStarted", e[e.UnderReview = 1] = "UnderReview", e[e.Completed = 2] = "Completed"
        }($t || ($t = {}));
        var Nn = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.openPayoutMethodModal = function() {
                    t.props.showPayoutMethodModal()
                }, t.handleContinueClick = function() {
                    var e = t.props.onboardEntity === Qe.OnboardEntity.CustomPartner ? Qe.OnboardStep.Review : Qe.OnboardStep.Summary;
                    t.props.updateStepDisplayed(e)
                }, t
            }
            return a.__extends(t, e), t.prototype.render = function() {
                return r.createElement(U.a, null, r.createElement(dn, {
                    title: Object(p.d)("Payout Method", "PayoutOnboardingPayoutMethod"),
                    statusText: this.payoutStatusText,
                    statusType: this.payoutStatusType,
                    borderTop: !0,
                    "data-test-selector": Kt.HeaderStatus
                }), r.createElement(S._35, {
                    borderTop: !0,
                    borderBottom: !0,
                    padding: 2
                }, r.createElement(bn, {
                    onboardEntity: this.props.onboardEntity,
                    status: this.payoutMethodStatus
                }), r.createElement(vn, {
                    onboardEntity: this.props.onboardEntity,
                    status: this.payoutMethodStatus
                }), r.createElement(S.v, {
                    onClick: this.openPayoutMethodModal,
                    type: this.payoutMethodStatus === $t.NotStarted ? S.B.Default : S.B.Hollow
                }, this.payoutMethodButtonText)), r.createElement(S._35, {
                    padding: 2,
                    background: S.n.Alt2
                }, r.createElement(S.v, {
                    "data-test-selector": Kt.ContinueButton,
                    size: S.z.Large,
                    onClick: this.handleContinueClick,
                    disabled: this.continueButtonDisabled
                }, Object(p.d)("Continue", "PayoutOnboardingPayoutMethod"))))
            }, Object.defineProperty(t.prototype, "isExtensionsDeveloperOnboarding", {
                get: function() {
                    return this.props.onboardEntity === Qe.OnboardEntity.ExtensionsDeveloper
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "payoutMethodStatus", {
                get: function() {
                    switch (this.props.workflow.currentStep) {
                        case Qe.WorkflowState.PAYOUT_METHOD_PENDING:
                            return $t.UnderReview;
                        case Qe.WorkflowState.COMPLETED:
                        case Qe.WorkflowState.REVIEW_PENDING:
                        case Qe.WorkflowState.AGREEMENT_PENDING_UPGRADE:
                            return $t.Completed;
                        default:
                            return $t.NotStarted
                    }
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "payoutStatusText", {
                get: function() {
                    switch (this.payoutMethodStatus) {
                        case $t.UnderReview:
                            return Object(p.d)("Under Review", "PayoutOnboardingPayoutMethod");
                        case $t.Completed:
                            return Object(p.d)("Completed", "PayoutOnboardingPayoutMethod");
                        default:
                            return Object(p.d)("Not Started", "PayoutOnboardingPayoutMethod")
                    }
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "payoutStatusType", {
                get: function() {
                    switch (this.payoutMethodStatus) {
                        case $t.UnderReview:
                            return S._13.Warn;
                        case $t.Completed:
                            return S._13.Success;
                        default:
                            return
                    }
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "payoutMethodButtonText", {
                get: function() {
                    return this.isExtensionsDeveloperOnboarding ? this.payoutMethodStatus === $t.NotStarted ? Object(p.d)("Set Financial Information", "PayoutOnboardingPayoutMethod") : Object(p.d)("Change Financial Information", "PayoutOnboardingPayoutMethod") : this.payoutMethodStatus === $t.NotStarted ? Object(p.d)("Set Payout Method", "PayoutOnboardingPayoutMethod") : Object(p.d)("Change Payout Method", "PayoutOnboardingPayoutMethod")
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "continueButtonDisabled", {
                get: function() {
                    var e = this.props.workflow.currentStep;
                    return e !== Qe.WorkflowState.COMPLETED && e !== Qe.WorkflowState.REVIEW_PENDING
                },
                enumerable: !0,
                configurable: !0
            }), t
        }(r.Component);
        var Cn, Pn = Object(g.d)(Object(Oe.b)(null, function(e) {
                return Object(g.b)({
                    showPayoutMethodModal: function() {
                        return Object(Te.d)(Tn, null)
                    }
                }, e)
            }))(Nn),
            An = /^[\s\da-zA-Z&\-,‘'\/#\.%]*$/,
            wn = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
            In = function() {
                return Object(p.d)("Only the English alphabet (non-accented Latin characters), numbers, and these special characters & - , ‘ / # . % are accepted.", "PayoutOnboardingRegistration")
            },
            Rn = function() {
                return Object(p.d)("Must provide a valid email address.", "PayoutOnboardingRegistration")
            },
            xn = function() {
                return Object(p.d)("optional", "PayoutOnboardingRegistration")
            };
        ! function(e) {
            e.FIRST_NAME = "contact-info__first-name", e.MIDDLE_NAME = "contact-info__middle-name", e.LAST_NAME = "contact-info__last-name", e.EMAIL = "contact-info__email", e.CONFIRM_EMAIL = "contact-info__confirm-email", e.COMPANY_LEGAL_NAME = "contact-info__company-legal-name"
        }(Cn || (Cn = {}));
        var jn, Dn = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.state = {
                    firstName: "",
                    middleName: "",
                    lastName: "",
                    email: "",
                    confirmEmail: "",
                    companyName: "",
                    showEmailErrors: !1
                }, t.showEmailErrors = function() {
                    t.setState({
                        showEmailErrors: !0
                    })
                }, t.hideEmailErrors = function() {
                    t.setState({
                        showEmailErrors: !1
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
            return a.__extends(t, e), Object.defineProperty(t.prototype, "invalidFormatErrorMessage", {
                get: function() {
                    return In()
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "invalidEmailErrorMessage", {
                get: function() {
                    return Rn()
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "optionalText", {
                get: function() {
                    return xn()
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.render = function() {
                return r.createElement(S._8, {
                    padding: 2
                }, r.createElement(S._8, {
                    margin: {
                        bottom: 2
                    }
                }, r.createElement(S.W, {
                    label: Object(p.d)("Channel Name", "ContactInfo"),
                    orientation: S.X.Horizontal
                }, r.createElement(S._4, {
                    type: S._5.Text,
                    value: this.props.channelName,
                    disabled: !0
                }))), r.createElement(S._8, {
                    margin: {
                        bottom: 2
                    }
                }, r.createElement(S.W, {
                    label: Object(p.d)("First Name", "ContactInfo"),
                    orientation: S.X.Horizontal,
                    error: !An.test(this.state.firstName),
                    errorMessage: this.invalidFormatErrorMessage,
                    "data-test-selector": Cn.FIRST_NAME
                }, r.createElement(S._4, {
                    autoFocus: !0,
                    type: S._5.Text,
                    value: this.state.firstName,
                    onChange: this.updateFirstName,
                    error: !An.test(this.state.firstName)
                }))), r.createElement(S._8, {
                    margin: {
                        bottom: 2
                    }
                }, r.createElement(S.W, {
                    label: Object(p.d)("Middle Name", "ContactInfo"),
                    labelOptional: this.optionalText,
                    orientation: S.X.Horizontal,
                    error: !An.test(this.state.middleName),
                    errorMessage: this.invalidFormatErrorMessage,
                    "data-test-selector": Cn.MIDDLE_NAME
                }, r.createElement(S._4, {
                    type: S._5.Text,
                    value: this.state.middleName,
                    onChange: this.updateMiddleName,
                    error: !An.test(this.state.middleName)
                }))), r.createElement(S._8, {
                    margin: {
                        bottom: 2
                    }
                }, r.createElement(S.W, {
                    label: Object(p.d)("Last Name", "ContactInfo"),
                    hint: Object(p.d)("Please type your full legal name. This must be the name shown on your income tax return used to report income.", "ContactInfo"),
                    orientation: S.X.Horizontal,
                    error: !An.test(this.state.lastName),
                    errorMessage: this.invalidFormatErrorMessage,
                    "data-test-selector": Cn.LAST_NAME
                }, r.createElement(S._4, {
                    type: S._5.Text,
                    value: this.state.lastName,
                    onChange: this.updateLastName,
                    error: !An.test(this.state.lastName)
                }))), r.createElement(S._8, {
                    margin: {
                        bottom: 2
                    }
                }, r.createElement(pa, {
                    onMonthChange: this.props.onMonthChange,
                    onDayChange: this.props.onDayChange,
                    onYearChange: this.props.onYearChange
                })), r.createElement(S._8, {
                    margin: {
                        bottom: 2
                    }
                }, r.createElement(S.W, {
                    label: Object(p.d)("Email", "ContactInfo"),
                    hint: Object(p.d)("We will use this email to send you important tax documentation and payout information.", "ContactInfo"),
                    orientation: S.X.Horizontal,
                    error: !!this.state.email && !wn.test(this.state.email) && this.state.showEmailErrors,
                    errorMessage: this.invalidEmailErrorMessage,
                    "data-test-selector": Cn.EMAIL
                }, r.createElement(S._4, {
                    type: S._5.Email,
                    value: this.state.email,
                    onChange: this.updateEmail,
                    onFocus: this.hideEmailErrors,
                    onBlur: this.showEmailErrors,
                    error: !!this.state.email && !wn.test(this.state.email) && this.state.showEmailErrors
                }))), r.createElement(S._8, {
                    margin: {
                        bottom: 2
                    }
                }, r.createElement(S.W, {
                    label: Object(p.d)("Confirm Email", "ContactInfo"),
                    orientation: S.X.Horizontal,
                    error: this.state.email !== this.state.confirmEmail && this.state.showEmailErrors,
                    errorMessage: Object(p.d)("Email addresses must match.", "ContactInfo"),
                    "data-test-selector": Cn.CONFIRM_EMAIL
                }, r.createElement(S._4, {
                    type: S._5.Email,
                    value: this.state.confirmEmail,
                    onChange: this.updateConfirmEmail,
                    onFocus: this.hideEmailErrors,
                    onBlur: this.showEmailErrors,
                    error: this.state.email !== this.state.confirmEmail && this.state.showEmailErrors
                }))), r.createElement(S._8, null, r.createElement(S.W, {
                    label: Object(p.d)("Company Legal Name", "ContactInfo"),
                    labelOptional: this.optionalText,
                    orientation: S.X.Horizontal,
                    error: !An.test(this.state.companyName),
                    errorMessage: this.invalidFormatErrorMessage,
                    "data-test-selector": Cn.COMPANY_LEGAL_NAME
                }, r.createElement(S._4, {
                    type: S._5.Text,
                    value: this.state.companyName,
                    onChange: this.updateCompanyName,
                    error: !An.test(this.state.companyName)
                }))))
            }, t
        }(r.Component);
        ! function(e) {
            e.PARENT_NAME = "parent-info__parent-name", e.PARENT_EMAIL = "parent-info__parent-email"
        }(jn || (jn = {}));
        var Fn = function(e) {
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
            return a.__extends(t, e), t.prototype.componentWillUnmount = function() {
                this.props.onParentNameChange(""), this.props.onParentEmailChange("")
            }, Object.defineProperty(t.prototype, "invalidFormatErrorMessage", {
                get: function() {
                    return In()
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "invalidEmailErrorMessage", {
                get: function() {
                    return Rn()
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.render = function() {
                return r.createElement(S._8, {
                    padding: 2
                }, r.createElement(S._8, {
                    margin: {
                        bottom: 2
                    }
                }, r.createElement(S.W, {
                    label: Object(p.d)("Parent or Legal Guardian Name", "ParentInfo"),
                    orientation: S.X.Horizontal,
                    error: !An.test(this.state.parentName),
                    errorMessage: this.invalidFormatErrorMessage,
                    "data-test-selector": jn.PARENT_NAME
                }, r.createElement(S._4, {
                    type: S._5.Text,
                    value: this.state.parentName,
                    onChange: this.updateParentName,
                    error: !An.test(this.state.parentName)
                }))), r.createElement(S._8, null, r.createElement(S.W, {
                    label: Object(p.d)("Parent or Legal Guardian Email", "ParentInfo"),
                    hint: Object(p.d)("Individuals under the age of 18 must provide parent or legal guardian information.", "ParentInfo"),
                    orientation: S.X.Horizontal,
                    error: !!this.state.parentEmail && !wn.test(this.state.parentEmail),
                    errorMessage: this.invalidEmailErrorMessage,
                    "data-test-selector": jn.PARENT_EMAIL
                }, r.createElement(S._4, {
                    type: S._5.Email,
                    value: this.state.parentEmail,
                    onChange: this.updateParentEmail,
                    error: !!this.state.parentEmail && !wn.test(this.state.parentEmail)
                }))))
            }, t
        }(r.Component);

        function Mn(e) {
            switch (e.toUpperCase()) {
                case "AB":
                    return Object(p.d)("Alberta", "format-canada-state");
                case "BC":
                    return Object(p.d)("British Columbia", "format-canada-state");
                case "MB":
                    return Object(p.d)("Manitoba", "format-canada-state");
                case "NB":
                    return Object(p.d)("New Brunswick", "format-canada-state");
                case "NL":
                    return Object(p.d)("Newfoundland and Labrador", "format-canada-state");
                case "NT":
                    return Object(p.d)("Northwest Territories", "format-canada-state");
                case "NS":
                    return Object(p.d)("Nova Scotia", "format-canada-state");
                case "NU":
                    return Object(p.d)("Nunavut", "format-canada-state");
                case "ON":
                    return Object(p.d)("Ontario", "format-canada-state");
                case "PE":
                    return Object(p.d)("Prince Edward Island", "format-canada-state");
                case "QC":
                    return Object(p.d)("Quebec", "format-canada-state");
                case "SK":
                    return Object(p.d)("Saskatchewan", "format-canada-state");
                case "YT":
                    return Object(p.d)("Yukon", "format-canada-state");
                default:
                    return e
            }
        }
        var Ln = ["AB", "BC", "MB", "NB", "NL", "NT", "NS", "NU", "ON", "PE", "QC", "SK", "YT"],
            Un = n("yLtb");

        function Bn(e) {
            switch (e.toUpperCase()) {
                case "AL":
                    return Object(p.d)("Alabama", "format-usa-state");
                case "AK":
                    return Object(p.d)("Alaska", "format-usa-state");
                case "AZ":
                    return Object(p.d)("Arizona", "format-usa-state");
                case "AR":
                    return Object(p.d)("Arkansas", "format-usa-state");
                case "AA":
                    return Object(p.d)("Armed Forces Americas", "format-usa-state");
                case "AE":
                    return Object(p.d)("Armed Forces Europe/Middle East/Canada", "format-usa-state");
                case "AP":
                    return Object(p.d)("Armed Forces Pacific", "format-usa-state");
                case "CA":
                    return Object(p.d)("California", "format-usa-state");
                case "CO":
                    return Object(p.d)("Colorado", "format-usa-state");
                case "CT":
                    return Object(p.d)("Connecticut", "format-usa-state");
                case "DE":
                    return Object(p.d)("Delaware", "format-usa-state");
                case "DC":
                    return Object(p.d)("District of Columbia", "format-usa-state");
                case "FL":
                    return Object(p.d)("Florida", "format-usa-state");
                case "GA":
                    return Object(p.d)("Georgia", "format-usa-state");
                case "HI":
                    return Object(p.d)("Hawaii", "format-usa-state");
                case "ID":
                    return Object(p.d)("Idaho", "format-usa-state");
                case "IL":
                    return Object(p.d)("Illinois", "format-usa-state");
                case "IN":
                    return Object(p.d)("Indiana", "format-usa-state");
                case "IA":
                    return Object(p.d)("Iowa", "format-usa-state");
                case "KS":
                    return Object(p.d)("Kansas", "format-usa-state");
                case "KY":
                    return Object(p.d)("Kentucky", "format-usa-state");
                case "LA":
                    return Object(p.d)("Louisiana", "format-usa-state");
                case "ME":
                    return Object(p.d)("Maine", "format-usa-state");
                case "MD":
                    return Object(p.d)("Maryland", "format-usa-state");
                case "MA":
                    return Object(p.d)("Massachusetts", "format-usa-state");
                case "MI":
                    return Object(p.d)("Michigan", "format-usa-state");
                case "MN":
                    return Object(p.d)("Minnesota", "format-usa-state");
                case "MS":
                    return Object(p.d)("Mississippi", "format-usa-state");
                case "MO":
                    return Object(p.d)("Missouri", "format-usa-state");
                case "MT":
                    return Object(p.d)("Montana", "format-usa-state");
                case "NE":
                    return Object(p.d)("Nebraska", "format-usa-state");
                case "NV":
                    return Object(p.d)("Nevada", "format-usa-state");
                case "NH":
                    return Object(p.d)("New Hampshire", "format-usa-state");
                case "NJ":
                    return Object(p.d)("New Jersey", "format-usa-state");
                case "NM":
                    return Object(p.d)("New Mexico", "format-usa-state");
                case "NY":
                    return Object(p.d)("New York", "format-usa-state");
                case "NC":
                    return Object(p.d)("North Carolina", "format-usa-state");
                case "ND":
                    return Object(p.d)("North Dakota", "format-usa-state");
                case "OH":
                    return Object(p.d)("Ohio", "format-usa-state");
                case "OK":
                    return Object(p.d)("Oklahoma", "format-usa-state");
                case "OR":
                    return Object(p.d)("Oregon", "format-usa-state");
                case "PA":
                    return Object(p.d)("Pennsylvania", "format-usa-state");
                case "RI":
                    return Object(p.d)("Rhode Island", "format-usa-state");
                case "SC":
                    return Object(p.d)("South Carolina", "format-usa-state");
                case "SD":
                    return Object(p.d)("South Dakota", "format-usa-state");
                case "TN":
                    return Object(p.d)("Tennessee", "format-usa-state");
                case "TX":
                    return Object(p.d)("Texas", "format-usa-state");
                case "UT":
                    return Object(p.d)("Utah", "format-usa-state");
                case "VT":
                    return Object(p.d)("Vermont", "format-usa-state");
                case "VA":
                    return Object(p.d)("Virginia", "format-usa-state");
                case "WA":
                    return Object(p.d)("Washington", "format-usa-state");
                case "WV":
                    return Object(p.d)("West Virginia", "format-usa-state");
                case "WI":
                    return Object(p.d)("Wisconsin", "format-usa-state");
                case "WY":
                    return Object(p.d)("Wyoming", "format-usa-state");
                default:
                    return e
            }
        }
        var Vn, Wn = ["AL", "AK", "AZ", "AR", "AA", "AE", "AP", "CA", "CO", "CT", "DE", "DC", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"],
            Qn = ["A1", "A2", "AP", "CU", "EU", "IR", "KP", "MM", "SD", "SS", "SY", "TL"];
        ! function(e) {
            e.COUNTRY = "permanent-address__country", e.STREET_ADDRESS = "permanent-address__street-address", e.STREET_ADDRESS_2 = "permanent-address__street-address-2", e.CITY = "permanent-address__city", e.STATE = "permanent-address__state", e.POSTAL = "permanent-address__postal"
        }(Vn || (Vn = {}));
        var Yn, Gn = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        country: "",
                        streetAddress: "",
                        streetAddress2: "",
                        city: "",
                        state: "",
                        postal: ""
                    }, t.countrySelections = Un.a.map(function(e) {
                        return Qn.includes(e) ? null : r.createElement("option", {
                            value: e,
                            key: "countryCode-" + e
                        }, Object(Un.b)(e))
                    }), t.usaStateSelections = Wn.map(function(e) {
                        return r.createElement("option", {
                            value: e,
                            key: "usaStateCode-" + e
                        }, Bn(e))
                    }), t.canadaStateSelections = Ln.map(function(e) {
                        return r.createElement("option", {
                            value: e,
                            key: "canadaState-" + e
                        }, Mn(e))
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
                    }, t
                }
                return a.__extends(t, e), Object.defineProperty(t.prototype, "invalidFormatErrorMessage", {
                    get: function() {
                        return In()
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "optionalText", {
                    get: function() {
                        return xn()
                    },
                    enumerable: !0,
                    configurable: !0
                }), t.prototype.render = function() {
                    return r.createElement(S._8, {
                        padding: 2
                    }, r.createElement(S._8, {
                        margin: {
                            bottom: 3
                        }
                    }, r.createElement(S.Q, {
                        type: S._49.P
                    }, Object(p.d)("Your permanent address is your primary residential address. It is not your P.O. Box or mailing address. If you are a college student studying in another state, but still have a permanent address in your home state (such as your parents' house), then your home state is your principal residence address. If you are registering on behalf of a corporation, please input the primary headquarters address.", "PermanentAddress"))), r.createElement(S._8, {
                        margin: {
                            bottom: 2
                        }
                    }, r.createElement(S.W, {
                        label: Object(p.d)("Country", "PermanentAddress"),
                        orientation: S.X.Horizontal
                    }, r.createElement(S._30, {
                        defaultValue: "",
                        onChange: this.handleCountryChange,
                        "data-test-selector": Vn.COUNTRY
                    }, r.createElement("option", {
                        value: "",
                        disabled: !0
                    }), this.countrySelections))), r.createElement(S._8, {
                        margin: {
                            bottom: 2
                        }
                    }, r.createElement(S.W, {
                        label: Object(p.d)("Street Address", "PermanentAddress"),
                        orientation: S.X.Horizontal,
                        error: !An.test(this.state.streetAddress),
                        errorMessage: this.invalidFormatErrorMessage,
                        "data-test-selector": Vn.STREET_ADDRESS
                    }, r.createElement(S._4, {
                        type: S._5.Text,
                        value: this.state.streetAddress,
                        onChange: this.handleStreetAddressChange,
                        error: !An.test(this.state.streetAddress)
                    }))), r.createElement(S._8, {
                        margin: {
                            bottom: 2
                        }
                    }, r.createElement(S.W, {
                        label: Object(p.d)("Street Address 2", "PermanentAddress"),
                        labelOptional: this.optionalText,
                        orientation: S.X.Horizontal,
                        error: !An.test(this.state.streetAddress2),
                        errorMessage: this.invalidFormatErrorMessage,
                        "data-test-selector": Vn.STREET_ADDRESS_2
                    }, r.createElement(S._4, {
                        type: S._5.Text,
                        value: this.state.streetAddress2,
                        onChange: this.handleStreetAddress2Change,
                        error: !An.test(this.state.streetAddress2)
                    }))), r.createElement(S._8, {
                        margin: {
                            bottom: 2
                        }
                    }, r.createElement(S.W, {
                        label: Object(p.d)("City or Town", "PermanentAddress"),
                        orientation: S.X.Horizontal,
                        error: !An.test(this.state.city),
                        errorMessage: this.invalidFormatErrorMessage,
                        "data-test-selector": Vn.CITY
                    }, r.createElement(S._4, {
                        type: S._5.Text,
                        value: this.state.city,
                        onChange: this.handleCityChange,
                        error: !An.test(this.state.city)
                    }))), r.createElement(S._8, {
                        margin: {
                            bottom: 2
                        }
                    }, r.createElement(S.W, {
                        label: Object(p.d)("State/Province", "PermanentAddress"),
                        labelOptional: "US" !== this.state.country && "CA" !== this.state.country ? this.optionalText : void 0,
                        orientation: S.X.Horizontal,
                        error: !An.test(this.state.state),
                        errorMessage: this.invalidFormatErrorMessage,
                        "data-test-selector": Vn.STATE
                    }, "US" === this.state.country && r.createElement(S._30, {
                        onChange: this.handleStateSelectionChange
                    }, this.usaStateSelections), "CA" === this.state.country && r.createElement(S._30, {
                        onChange: this.handleStateSelectionChange
                    }, this.canadaStateSelections), "US" !== this.state.country && "CA" !== this.state.country && r.createElement(S._4, {
                        type: S._5.Text,
                        value: this.state.state,
                        onChange: this.handleStateInputChange,
                        error: !An.test(this.state.state)
                    }))), r.createElement(S._8, null, r.createElement(S.W, {
                        label: Object(p.d)("Zip Code/Postal Code", "PermanentAddress"),
                        labelOptional: "US" !== this.state.country ? this.optionalText : void 0,
                        orientation: S.X.Horizontal,
                        error: !An.test(this.state.postal),
                        errorMessage: this.invalidFormatErrorMessage,
                        "data-test-selector": Vn.POSTAL
                    }, r.createElement(S._4, {
                        type: S._5.Text,
                        value: this.state.postal,
                        onChange: this.handlePostalChange,
                        error: !An.test(this.state.postal)
                    }))))
                }, t
            }(r.Component),
            zn = function() {
                return Object(p.d)("Please fill them out using the following guidelines: <x:link>Amazon Tax Information Interview Guidelines</x:link>", {
                    "x:link": function(e) {
                        return r.createElement(S.O, {
                            key: "amazon-tax-guidelines",
                            to: "https://developer.amazon.com/tax-interview/help?nodeId=201588330&locale=en_US",
                            targetBlank: !0
                        }, e)
                    }
                }, "RegistrationInfoBrick")
            },
            Hn = function() {
                return r.createElement(r.Fragment, null, r.createElement(S._8, {
                    margin: {
                        bottom: 1
                    }
                }, r.createElement(S.Q, {
                    type: S._49.P
                }, Object(p.d)("Financial information is required to validate your identity. Further, providing this information enables you to participate with any monetization features that may become available.", "RegistrationInfoBrick"))), r.createElement(S._8, {
                    margin: {
                        bottom: 1
                    }
                }, r.createElement(S.Q, {
                    type: S._49.P
                }, Object(p.d)("Twitch is a subsidiary of Amazon and will use some Amazon tools to register and approve your information for Extensions development.", "RegistrationInfoBrick"))), r.createElement(S._8, {
                    margin: {
                        bottom: 1
                    }
                }, r.createElement(S.Q, {
                    type: S._49.P
                }, zn())), r.createElement(S._8, {
                    margin: {
                        bottom: 1
                    }
                }, r.createElement(S.Q, {
                    type: S._49.P
                }, Object(p.d)("If you are registering on behalf of a company, please fill in the company's information. If you are an individual, please use your personal information.", "RegistrationInfoBrick"))), r.createElement(S._8, {
                    margin: {
                        bottom: 1
                    }
                }, r.createElement(S.Q, {
                    type: S._49.P
                }, Object(p.d)("The form must match your tax information exactly and any inconsistencies may cause delays in your registration approval.", "RegistrationInfoBrick"))), r.createElement(S._8, null, r.createElement(S.Q, {
                    type: S._49.P
                }, Object(p.d)("You will be able to edit this page later if your information changes.", "RegistrationInfoBrick"))))
            },
            qn = function() {
                return r.createElement(r.Fragment, null, r.createElement(S._8, {
                    margin: {
                        bottom: 1
                    }
                }, r.createElement(S.Q, {
                    type: S._49.P
                }, Object(p.d)("Twitch is a subsidiary of Amazon, and will use some Amazon tools to help you get paid, including the forms on this page.", "RegistrationInfoBrick"))), r.createElement(S._8, {
                    margin: {
                        bottom: 1
                    }
                }, r.createElement(S.Q, {
                    type: S._49.P
                }, zn())), r.createElement(S.Q, {
                    type: S._49.P
                }, Object(p.d)("This form must match your tax information exactly, and any inconsistencies may cause delays in your Payout Registration approval. Don't worry, you will still be able to edit this page later on if your information changes.", "RegistrationInfoBrick")))
            },
            Xn = function(e) {
                return r.createElement(S._35, {
                    padding: 2,
                    borderMarked: !0,
                    background: S.n.Base,
                    elevation: 1
                }, e.onboardEntity === Qe.OnboardEntity.ExtensionsDeveloper ? r.createElement(Hn, null) : r.createElement(qn, null))
            };
        ! function(e) {
            e.MONTH = "select-birthdate__month", e.YEAR = "select-birthdate__year", e.DAY = "select-birthdate__day"
        }(Yn || (Yn = {}));
        for (var Kn = [], $n = (new Date).getFullYear(), Jn = $n; Jn > $n - 100; Jn--) Kn.push(r.createElement("option", {
            value: Jn,
            key: "year-" + Jn
        }, Jn));
        var Zn, ea, ta, na, aa, ra, ia, oa, sa, la, da, ca, ua, ma, pa = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        month: void 0,
                        year: void 0,
                        day: void 0
                    }, t.yearSelections = Kn, t.handleMonthChange = function(e) {
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
                        return Object(an.differenceInYears)(new Date, o) < e
                    }, t
                }
                return a.__extends(t, e), Object.defineProperty(t.prototype, "daySelections", {
                    get: function() {
                        for (var e = this.state.month, t = this.state.year || $n, n = void 0 !== e ? new Date(t, e + 1, 0).getDate() : 31, a = [], i = 1; i <= n; i++) a.push(r.createElement("option", {
                            value: i,
                            key: "day-" + i
                        }, i));
                        return a
                    },
                    enumerable: !0,
                    configurable: !0
                }), t.prototype.render = function() {
                    return r.createElement(S.W, {
                        label: Object(p.d)("Date of Birth", "SelectBirthdate"),
                        hint: Object(p.d)("If you are registering on behalf of a company, please use your personal date of birth.", "SelectBirthdate"),
                        orientation: S.X.Horizontal,
                        error: this.isUserYoungerThan(13),
                        errorMessage: Object(p.d)("You must be 13 or older to continue.", "SelectBirthdate")
                    }, r.createElement(S.Y, {
                        gutterSize: S.Z.Medium
                    }, r.createElement(S.L, {
                        cols: {
                            default: 4
                        }
                    }, r.createElement(S._30, {
                        defaultValue: "",
                        onChange: this.handleMonthChange,
                        "data-test-selector": Yn.MONTH
                    }, r.createElement("option", {
                        value: "",
                        disabled: !0
                    }, Object(p.d)("Month", "SelectBirthdate")), r.createElement("option", {
                        value: 0
                    }, Object(p.d)("January", "SelectBirthdate")), r.createElement("option", {
                        value: 1
                    }, Object(p.d)("February", "SelectBirthdate")), r.createElement("option", {
                        value: 2
                    }, Object(p.d)("March", "SelectBirthdate")), r.createElement("option", {
                        value: 3
                    }, Object(p.d)("April", "SelectBirthdate")), r.createElement("option", {
                        value: 4
                    }, Object(p.d)("May", "SelectBirthdate")), r.createElement("option", {
                        value: 5
                    }, Object(p.d)("June", "SelectBirthdate")), r.createElement("option", {
                        value: 6
                    }, Object(p.d)("July", "SelectBirthdate")), r.createElement("option", {
                        value: 7
                    }, Object(p.d)("August", "SelectBirthdate")), r.createElement("option", {
                        value: 8
                    }, Object(p.d)("September", "SelectBirthdate")), r.createElement("option", {
                        value: 9
                    }, Object(p.d)("October", "SelectBirthdate")), r.createElement("option", {
                        value: 10
                    }, Object(p.d)("November", "SelectBirthdate")), r.createElement("option", {
                        value: 11
                    }, Object(p.d)("December", "SelectBirthdate")))), r.createElement(S.L, {
                        cols: {
                            default: 4
                        }
                    }, r.createElement(S._30, {
                        defaultValue: "",
                        onChange: this.handleDayChange,
                        "data-test-selector": Yn.DAY
                    }, r.createElement("option", {
                        value: "",
                        disabled: !0
                    }, Object(p.d)("Day", "SelectBirthdate")), this.daySelections)), r.createElement(S.L, {
                        cols: {
                            default: 4
                        }
                    }, r.createElement(S._30, {
                        defaultValue: "",
                        onChange: this.handleYearChange,
                        "data-test-selector": Yn.YEAR
                    }, r.createElement("option", {
                        value: "",
                        disabled: !0
                    }, Object(p.d)("Year", "SelectBirthdate")), this.yearSelections))))
                }, t
            }(r.Component),
            ha = n("pMje"),
            ga = function(e) {
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
                        return Object(an.differenceInYears)(new Date, o) < e
                    }, t.handleContinueClick = function() {
                        t.setState({
                            submittingRegistration: !0
                        }), t.submitPayoutRegistration()
                    }, t.submitPayoutRegistration = function() {
                        return a.__awaiter(t, void 0, void 0, function() {
                            var e, t, n, r, i, o, s, l;
                            return a.__generator(this, function(d) {
                                switch (d.label) {
                                    case 0:
                                        if (e = this.state, t = e.year, n = e.month, r = e.day, void 0 === n || void 0 === r || void 0 === t) return [2];
                                        i = new Date(t, n, r), o = a.__assign({}, Object(v.a)({
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
                                        })), d.label = 1;
                                    case 1:
                                        return d.trys.push([1, 3, , 4]), [4, this.props.registerPayoutInformation(o)];
                                    case 2:
                                        return (s = d.sent()).data.registerPayoutInformation.error ? (this.setState({
                                            submittingRegistration: !1
                                        }), [2]) : (l = function(e) {
                                            return e.currentUser.payoutInvite.workflow && s.data.registerPayoutInformation.workflow && (e.currentUser.payoutInvite.workflow.currentStep = s.data.registerPayoutInformation.workflow.currentStep, e.currentUser.payoutInvite.workflow.registration = s.data.registerPayoutInformation.workflow.registration), e
                                        }, this.props.updateContainerQuery(l), this.props.updateStepDisplayed(Qe.OnboardStep.Agreement), [3, 4]);
                                    case 3:
                                        return d.sent(), this.setState({
                                            submittingRegistration: !1
                                        }), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, t
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    var e = r.createElement(S.v, {
                        "data-test-selector": "payout-onboarding-registration__continue-button",
                        type: S.B.Default,
                        size: S.z.Large,
                        disabled: !this.isRegistrationComplete || this.state.submittingRegistration,
                        state: this.state.submittingRegistration ? S.A.Loading : S.A.Default,
                        onClick: this.handleContinueClick
                    }, Object(p.d)("Continue", "PayoutOnboardingRegistration"));
                    return r.createElement(U.a, {
                        footer: e
                    }, r.createElement(Ct.a, null, r.createElement(Xn, {
                        onboardEntity: this.props.onboardEntity
                    })), r.createElement(dn, {
                        title: Object(p.d)("Contact Info", "PayoutOnboardingRegistration")
                    }), r.createElement(Dn, {
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
                    }), r.createElement(dn, {
                        title: Object(p.d)("Permanent Address", "PayoutOnboardingRegistration")
                    }), r.createElement(Gn, {
                        onCountryChange: this.updateCountry,
                        onStreetAddressChange: this.updateStreetAddress,
                        onStreetAddress2Change: this.updateStreetAddress2,
                        onCityChange: this.updateCity,
                        onStateChange: this.updateState,
                        onPostalChange: this.updatePostal
                    }), this.isUserYoungerThan(18) && r.createElement(r.Fragment, null, r.createElement(dn, {
                        title: Object(p.d)("Parent Info", "PayoutOnboardingRegistration")
                    }), r.createElement(Fn, {
                        onParentNameChange: this.updateParentName,
                        onParentEmailChange: this.updateParentEmail
                    })))
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
                        return wn.test(this.state.email) && this.state.email === this.state.confirmEmail
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "validAge", {
                    get: function() {
                        return !this.isUserYoungerThan(13) && !(this.isUserYoungerThan(18) && !(this.state.parentName && An.test(this.state.parentName) && this.state.parentEmail && wn.test(this.state.parentEmail)))
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "validInputFormat", {
                    get: function() {
                        return !!(An.test(this.state.firstName) && An.test(this.state.lastName) && An.test(this.state.country) && An.test(this.state.streetAddress) && An.test(this.state.city)) && !(this.state.middleName && !An.test(this.state.middleName) || this.state.companyName && !An.test(this.state.companyName) || this.state.streetAddress2 && !An.test(this.state.streetAddress2) || this.state.state && !An.test(this.state.state) || this.state.postal && !An.test(this.state.postal))
                    },
                    enumerable: !0,
                    configurable: !0
                }), t
            }(r.Component),
            ba = Object(g.d)(Object(u.a)(ha, {
                name: "registerPayoutInformation"
            }))(ga),
            fa = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.handleContinueClick = function() {
                        t.props.updateStepDisplayed(Qe.OnboardStep.Summary)
                    }, t
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    return r.createElement(U.a, null, r.createElement(dn, {
                        title: Object(p.d)("Partnership Approval", "PayoutOnboardingReview"),
                        statusText: this.statusText,
                        statusType: this.statusType,
                        borderTop: !0
                    }), r.createElement(S._35, {
                        borderTop: !0,
                        borderBottom: !0,
                        padding: 2
                    }, r.createElement(S._35, {
                        borderMarked: !0,
                        padding: 2
                    }, this.inReview ? Object(p.d)("Your information is currently under review.", "PayoutOnboardingReview") : Object(p.d)("Your information has been validated by the Partnership Team.", "PayoutOnboardingReview"))), r.createElement(S._8, {
                        padding: 2
                    }, r.createElement(S.v, {
                        onClick: this.handleContinueClick,
                        disabled: this.inReview
                    }, Object(p.d)("Continue", "PayoutOnboardingReview"))))
                }, Object.defineProperty(t.prototype, "inReview", {
                    get: function() {
                        return this.props.workflow.currentStep === Qe.WorkflowState.REVIEW_PENDING
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "statusText", {
                    get: function() {
                        return this.inReview ? Object(p.d)("Under Review", "PayoutOnboardingReview") : Object(p.d)("Completed", "PayoutOnboardingReview")
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "statusType", {
                    get: function() {
                        return this.inReview ? S._13.Warn : S._13.Success
                    },
                    enumerable: !0,
                    configurable: !0
                }), t
            }(r.Component),
            va = function() {
                return Object(p.d)("Partner Onboarding", "PayoutOnboardingContainer")
            },
            Ea = function() {
                return Object(p.d)("Manage or modify your payout information.", "PayoutOnboardingContainer")
            },
            ya = function() {
                return Object(p.d)("Payout Registration", "PayoutOnboardingContainer")
            },
            Sa = function() {
                return Object(p.d)("Begin your payout registration.", "PayoutOnboardingContainer")
            },
            ka = function() {
                return Object(p.d)("Twitch Partner Agreement", "PayoutOnboardingContainer")
            },
            _a = function() {
                return Object(p.d)("Agree to the Twitch Partner Agreement.", "PayoutOnboardingContainer")
            },
            Oa = function() {
                return Object(p.d)("Tax Interviews", "PayoutOnboardingContainer")
            },
            Ta = function() {
                return Object(p.d)("Submit your tax information. The two forms below are very similar, but the information is used for different situations, so both forms are required and should be filled out carefully.", "PayoutOnboardingContainer")
            },
            Na = function() {
                return Object(p.d)("Payout Setup", "PayoutOnboardingContainer")
            },
            Ca = function() {
                return Object(p.d)("Choose your payout method.", "PayoutOnboardingContainer")
            },
            Pa = ((Zn = {})[Qe.OnboardStep.Summary] = {
                title: (ea = {}, ea[Qe.OnboardEntity.Affiliate] = function() {
                    return Object(p.d)("Affiliate Onboarding", "PayoutOnboardingContainer")
                }, ea[Qe.OnboardEntity.ExtensionsDeveloper] = function() {
                    return Object(p.d)("Extensions Developer Onboarding", "PayoutOnboardingContainer")
                }, ea[Qe.OnboardEntity.StandardPartner] = function() {
                    return va()
                }, ea[Qe.OnboardEntity.PremiumPartner] = function() {
                    return va()
                }, ea[Qe.OnboardEntity.CustomPartner] = function() {
                    return va()
                }, ea),
                description: (ta = {}, ta[Qe.OnboardEntity.Affiliate] = function() {
                    return Ea()
                }, ta[Qe.OnboardEntity.ExtensionsDeveloper] = function() {
                    return Object(p.d)("Manage or modify your Extensions Developer Onboarding.", "PayoutOnboardingContainer")
                }, ta[Qe.OnboardEntity.StandardPartner] = function() {
                    return Ea()
                }, ta[Qe.OnboardEntity.PremiumPartner] = function() {
                    return Ea()
                }, ta[Qe.OnboardEntity.CustomPartner] = function() {
                    return Ea()
                }, ta)
            }, Zn[Qe.OnboardStep.Registration] = {
                title: (na = {}, na[Qe.OnboardEntity.Affiliate] = function() {
                    return ya()
                }, na[Qe.OnboardEntity.ExtensionsDeveloper] = function() {
                    return Object(p.d)("Extensions Developer Registration", "PayoutOnboardingContainer")
                }, na[Qe.OnboardEntity.StandardPartner] = function() {
                    return ya()
                }, na[Qe.OnboardEntity.PremiumPartner] = function() {
                    return ya()
                }, na[Qe.OnboardEntity.CustomPartner] = function() {
                    return ya()
                }, na),
                description: (aa = {}, aa[Qe.OnboardEntity.Affiliate] = function() {
                    return Sa()
                }, aa[Qe.OnboardEntity.ExtensionsDeveloper] = function() {
                    return Object(p.d)("Begin your Extensions Developer Registration.", "PayoutOnboardingContainer")
                }, aa[Qe.OnboardEntity.StandardPartner] = function() {
                    return Sa()
                }, aa[Qe.OnboardEntity.PremiumPartner] = function() {
                    return Sa()
                }, aa[Qe.OnboardEntity.CustomPartner] = function() {
                    return Sa()
                }, aa)
            }, Zn[Qe.OnboardStep.Agreement] = {
                title: (ra = {}, ra[Qe.OnboardEntity.Affiliate] = function() {
                    return Object(p.d)("Twitch Affiliate Agreement", "PayoutOnboardingContainer")
                }, ra[Qe.OnboardEntity.ExtensionsDeveloper] = function() {
                    return Object(p.d)("Twitch Extensions Developer Agreement", "PayoutOnboardingContainer")
                }, ra[Qe.OnboardEntity.StandardPartner] = function() {
                    return ka()
                }, ra[Qe.OnboardEntity.PremiumPartner] = function() {
                    return ka()
                }, ra[Qe.OnboardEntity.CustomPartner] = function() {
                    return ka()
                }, ra),
                description: (ia = {}, ia[Qe.OnboardEntity.Affiliate] = function() {
                    return Object(p.d)("Agree to the Twitch Affiliate Agreement.", "PayoutOnboardingContainer")
                }, ia[Qe.OnboardEntity.ExtensionsDeveloper] = function() {
                    return Object(p.d)("Agree to the Twitch Extensions Developer Agreement.", "PayoutOnboardingContainer")
                }, ia[Qe.OnboardEntity.StandardPartner] = function() {
                    return _a()
                }, ia[Qe.OnboardEntity.PremiumPartner] = function() {
                    return _a()
                }, ia[Qe.OnboardEntity.CustomPartner] = function() {
                    return _a()
                }, ia)
            }, Zn[Qe.OnboardStep.TaxInterview] = {
                title: (oa = {}, oa[Qe.OnboardEntity.Affiliate] = function() {
                    return Oa()
                }, oa[Qe.OnboardEntity.ExtensionsDeveloper] = function() {
                    return Oa()
                }, oa[Qe.OnboardEntity.StandardPartner] = function() {
                    return Oa()
                }, oa[Qe.OnboardEntity.PremiumPartner] = function() {
                    return Oa()
                }, oa[Qe.OnboardEntity.CustomPartner] = function() {
                    return Oa()
                }, oa),
                description: (sa = {}, sa[Qe.OnboardEntity.Affiliate] = function() {
                    return Ta()
                }, sa[Qe.OnboardEntity.ExtensionsDeveloper] = function() {
                    return Ta()
                }, sa[Qe.OnboardEntity.StandardPartner] = function() {
                    return Ta()
                }, sa[Qe.OnboardEntity.PremiumPartner] = function() {
                    return Ta()
                }, sa[Qe.OnboardEntity.CustomPartner] = function() {
                    return Ta()
                }, sa)
            }, Zn[Qe.OnboardStep.PayoutMethod] = {
                title: (la = {}, la[Qe.OnboardEntity.Affiliate] = function() {
                    return Na()
                }, la[Qe.OnboardEntity.ExtensionsDeveloper] = function() {
                    return Object(p.d)("Financial Information", "PayoutOnboardingContainer")
                }, la[Qe.OnboardEntity.StandardPartner] = function() {
                    return Na()
                }, la[Qe.OnboardEntity.PremiumPartner] = function() {
                    return Na()
                }, la[Qe.OnboardEntity.CustomPartner] = function() {
                    return Na()
                }, la),
                description: (da = {}, da[Qe.OnboardEntity.Affiliate] = function() {
                    return Ca()
                }, da[Qe.OnboardEntity.ExtensionsDeveloper] = function() {
                    return Object(p.d)("Submit your financial information.", "PayoutOnboardingContainer")
                }, da[Qe.OnboardEntity.StandardPartner] = function() {
                    return Ca()
                }, da[Qe.OnboardEntity.PremiumPartner] = function() {
                    return Ca()
                }, da[Qe.OnboardEntity.CustomPartner] = function() {
                    return Ca()
                }, da)
            }, Zn[Qe.OnboardStep.Review] = {
                title: (ca = {}, ca[Qe.OnboardEntity.CustomPartner] = function() {
                    return Object(p.d)("Partnership Approval", "PayoutOnboardingContainer")
                }, ca),
                description: (ua = {}, ua[Qe.OnboardEntity.CustomPartner] = function() {
                    return Object(p.d)("The Partnership Team will validate your paperwork and activate your new agreement.", "PayoutOnboardingContainer")
                }, ua)
            }, Zn),
            Aa = function() {
                return Object(p.d)("Continue", "InProgressInfo")
            },
            wa = function(e) {
                var t = e.onboardEntity === Qe.OnboardEntity.ExtensionsDeveloper;
                return r.createElement(S._8, {
                    margin: {
                        bottom: 1
                    }
                }, r.createElement(S._2, {
                    margin: {
                        bottom: 1
                    }
                }, r.createElement(S.Q, {
                    type: S._49.P
                }, t ? Object(p.d)("Your developer registration is currently in progress. Please click {buttonLabel} to pick up where you left off.", {
                    buttonLabel: Aa()
                }, "InProgressInfo") : Object(p.d)("Your payout setup is currently in progress. Please click {buttonLabel} to pick up where you left off.", {
                    buttonLabel: Aa()
                }, "InProgressInfo"))), r.createElement(S._2, {
                    margin: {
                        bottom: 1
                    }
                }, r.createElement(S.Q, {
                    type: S._49.P
                }, Object(p.d)("If you would like to modify your information, please click {buttonLabel}.", {
                    buttonLabel: Object(p.d)("Start Over", "InProgressInfo")
                }, "InProgressInfo"))), r.createElement(S.Q, {
                    type: S._49.P
                }, t ? Object(p.d)("NOTE: Starting over will lose any progress.", "InProgressInfo") : Object(p.d)("NOTE: If you choose Start Over you will delete any stored payout information on your account and we will hold any payouts until you have fully completed the form.", "InProgressInfo")))
            },
            Ia = function(e) {
                return r.createElement(r.Fragment, null, r.createElement(S._2, {
                    margin: {
                        bottom: 1
                    }
                }, r.createElement(S.Q, {
                    type: S._49.H4,
                    bold: !0
                }, Object(p.d)("Setup Complete", "SetupCompleteInfo"))), e.onboardEntity === Qe.OnboardEntity.ExtensionsDeveloper ? r.createElement(S._2, {
                    margin: {
                        bottom: 1
                    }
                }, r.createElement(S.Q, {
                    type: S._49.P
                }, Object(p.d)("You made it! You’re all set. Return to the <x:link>Developer Portal.</x:link>", {
                    "x:link": function(e) {
                        return r.createElement(S.O, {
                            key: "dev-dashboard-link",
                            to: "https://dev.twitch.tv/dashboard"
                        }, e)
                    }
                }, "SetupCompleteInfo"))) : r.createElement(S._2, {
                    margin: {
                        bottom: 1
                    }
                }, r.createElement(S.Q, {
                    type: S._49.P
                }, Object(p.d)("You made it! You’re all set and no further action is needed.", "SetupCompleteInfo"))), r.createElement(S._2, {
                    margin: {
                        bottom: 1
                    }
                }, r.createElement(S.Q, {
                    type: S._49.P
                }, Object(p.d)("If you want to change your payout information, click {buttonLabel} to reset the form.", {
                    buttonLabel: Object(p.d)("Start Over", "SetupCompleteInfo")
                }, "SetupCompleteInfo"))))
            };
        ! function(e) {
            e.START_OVER_BUTTON = "progress-brick__start-over-button", e.CONTINUE_BUTTON = "progress-brick__continue-button"
        }(ma || (ma = {}));
        var Ra, xa, ja = ((Ra = {})[Qe.WorkflowState.AGREEMENT_NOT_STARTED] = Qe.OnboardStep.Agreement, Ra[Qe.WorkflowState.ROYALTY_TAX_INTERVIEW_NOT_STARTED] = Qe.OnboardStep.TaxInterview, Ra[Qe.WorkflowState.ROYALTY_TAX_INTERVIEW_PENDING] = Qe.OnboardStep.TaxInterview, Ra[Qe.WorkflowState.ROYALTY_TAX_INTERVIEW_ACTION_REQUIRED] = Qe.OnboardStep.TaxInterview, Ra[Qe.WorkflowState.ROYALTY_TAX_INTERVIEW_MISMATCH] = Qe.OnboardStep.TaxInterview, Ra[Qe.WorkflowState.ROYALTY_TAX_INTERVIEW_FAILED] = Qe.OnboardStep.TaxInterview, Ra[Qe.WorkflowState.SERVICE_TAX_INTERVIEW_NOT_STARTED] = Qe.OnboardStep.TaxInterview, Ra[Qe.WorkflowState.SERVICE_TAX_INTERVIEW_PENDING] = Qe.OnboardStep.TaxInterview, Ra[Qe.WorkflowState.SERVICE_TAX_INTERVIEW_ACTION_REQUIRED] = Qe.OnboardStep.TaxInterview, Ra[Qe.WorkflowState.SERVICE_TAX_INTERVIEW_MISMATCH] = Qe.OnboardStep.TaxInterview, Ra[Qe.WorkflowState.SERVICE_TAX_INTERVIEW_FAILED] = Qe.OnboardStep.TaxInterview, Ra[Qe.WorkflowState.PAYOUT_METHOD_NOT_STARTED] = Qe.OnboardStep.PayoutMethod, Ra[Qe.WorkflowState.PAYOUT_METHOD_PENDING] = Qe.OnboardStep.PayoutMethod, Ra[Qe.WorkflowState.REVIEW_PENDING] = Qe.OnboardStep.Review, Ra),
            Da = function(e) {
                return r.createElement(S._8, {
                    padding: {
                        bottom: 1
                    }
                }, r.createElement(S._35, {
                    borderMarked: !0,
                    padding: 2,
                    elevation: 1
                }, e.workflowState === Qe.WorkflowState.COMPLETED ? r.createElement(Ia, {
                    onboardEntity: e.onboardEntity
                }) : r.createElement(wa, {
                    onboardEntity: e.onboardEntity
                }), r.createElement(S._8, {
                    display: S.R.Inline,
                    margin: {
                        right: 1
                    }
                }, r.createElement(S.v, {
                    "data-test-selector": ma.START_OVER_BUTTON,
                    type: S.B.Hollow,
                    onClick: e.showStartOverModal
                }, Object(p.d)("Start Over", "PayoutOnboardingSummary"))), e.workflowState !== Qe.WorkflowState.COMPLETED && r.createElement(S.v, {
                    "data-test-selector": ma.CONTINUE_BUTTON,
                    onClick: function() {
                        return e.updateStepDisplayed(ja[e.workflowState])
                    }
                }, Object(p.d)("Continue", "PayoutOnboardingSummary"))))
            };
        n("gurA");
        ! function(e) {
            e[e.NotStarted = 0] = "NotStarted", e[e.Pending = 1] = "Pending", e[e.Failed = 2] = "Failed", e[e.Completed = 3] = "Completed"
        }(xa || (xa = {}));
        var Fa, Ma = function(e) {
                var t, n;
                return t = e.isEnabled ? r.createElement(S.O, {
                    onClick: e.onTitleClick
                }, e.title) : e.title, e.type === xa.Pending ? n = r.createElement(S._24, {
                    asset: S._25.Halt,
                    type: S._26.Warn
                }) : e.type === xa.Failed ? n = r.createElement(S._24, {
                    asset: S._25.Halt,
                    type: S._26.Alert
                }) : e.type === xa.Completed && (n = r.createElement(S._24, {
                    asset: S._25.Check,
                    type: S._26.Success
                })), r.createElement(S._8, null, r.createElement(S._8, {
                    className: "progress-row__left",
                    padding: {
                        left: 1,
                        top: 3
                    },
                    display: S.R.InlineBlock
                }, n), r.createElement(S._8, {
                    padding: 2,
                    display: S.R.InlineBlock
                }, r.createElement(S._8, {
                    padding: {
                        bottom: .5
                    }
                }, r.createElement(S.Q, {
                    type: S._49.H5,
                    color: S.K.Alt2
                }, t)), r.createElement(S.Q, {
                    type: S._49.P,
                    color: S.K.Alt2
                }, e.description)))
            },
            La = function() {
                return Object(p.d)("Submit your tax information.", "PayoutOnboardingSummary")
            },
            Ua = function() {
                return Object(p.d)("Choose your payout method.", "PayoutOnboardingSummary")
            },
            Ba = function() {
                return Object(p.d)("Submit your financial information.", "PayoutOnboardingSummary")
            };
        ! function(e) {
            e.REGISTRATION = "registration-selector", e.AGREEMENT = "agreement-selector", e.TAX_INTERVIEW = "tax-interview-selector", e.PAYOUT_METHOD = "payout-method-selector", e.REVIEW = "review-selector"
        }(Fa || (Fa = {}));
        var Va = function(e, t, n) {
                return Object(p.d)("Step {numOfCurrentStep} of {numOfTotalSteps}: {stepTitle}", {
                    numOfCurrentStep: e,
                    numOfTotalSteps: t,
                    stepTitle: n
                }, "ProgressRow")
            },
            Wa = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.handleTitleClick = function(e) {
                        return function() {
                            t.props.updateStepDisplayed(e)
                        }
                    }, t
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    return r.createElement(U.a, null, r.createElement(Ct.a, null, this.isRegistrationComplete && r.createElement(Da, {
                        workflowState: this.props.workflow.currentStep,
                        onboardEntity: this.props.onboardEntity,
                        updateStepDisplayed: this.props.updateStepDisplayed,
                        showStartOverModal: this.props.showStartOverModal
                    }), r.createElement(Ma, {
                        "data-test-selector": Fa.REGISTRATION,
                        title: this.step1Title,
                        description: this.step1Description,
                        type: this.step1Status,
                        onTitleClick: this.handleTitleClick(Qe.OnboardStep.Registration),
                        isEnabled: !this.isRegistrationComplete
                    }), r.createElement(Ma, {
                        "data-test-selector": Fa.AGREEMENT,
                        title: this.step2Title,
                        description: this.step2Description,
                        type: this.step2Status,
                        onTitleClick: this.handleTitleClick(Qe.OnboardStep.Agreement),
                        isEnabled: this.isRegistrationComplete && !this.isAgreementComplete
                    }), r.createElement(Ma, {
                        "data-test-selector": Fa.TAX_INTERVIEW,
                        title: this.step3Title,
                        description: this.step3Description,
                        type: this.step3Status,
                        onTitleClick: this.handleTitleClick(Qe.OnboardStep.TaxInterview),
                        isEnabled: this.isAgreementComplete && !this.isTaxInterviewComplete
                    }), r.createElement(Ma, {
                        "data-test-selector": Fa.PAYOUT_METHOD,
                        title: this.step4Title,
                        description: this.step4Description,
                        type: this.step4Status,
                        onTitleClick: this.handleTitleClick(Qe.OnboardStep.PayoutMethod),
                        isEnabled: this.isTaxInterviewComplete && !this.isPayoutMethodComplete
                    }), this.props.onboardEntity === Qe.OnboardEntity.CustomPartner && r.createElement(Ma, {
                        "data-test-selector": Fa.REVIEW,
                        title: this.step5Title,
                        description: this.step5Description,
                        type: this.step5Status,
                        onTitleClick: this.handleTitleClick(Qe.OnboardStep.Review),
                        isEnabled: this.isPayoutMethodComplete && !this.isReviewComplete
                    })))
                }, Object.defineProperty(t.prototype, "isRegistrationComplete", {
                    get: function() {
                        return this.props.workflow.currentStep !== Qe.WorkflowState.CANCELED && this.props.workflow.currentStep !== Qe.WorkflowState.REGISTRATION_NOT_STARTED
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "isAgreementComplete", {
                    get: function() {
                        return this.isRegistrationComplete && this.props.workflow.currentStep !== Qe.WorkflowState.AGREEMENT_NOT_STARTED
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "isTaxInterviewComplete", {
                    get: function() {
                        return this.isAgreementComplete && ![Qe.WorkflowState.ROYALTY_TAX_INTERVIEW_NOT_STARTED, Qe.WorkflowState.ROYALTY_TAX_INTERVIEW_PENDING, Qe.WorkflowState.ROYALTY_TAX_INTERVIEW_FAILED, Qe.WorkflowState.ROYALTY_TAX_INTERVIEW_ACTION_REQUIRED, Qe.WorkflowState.ROYALTY_TAX_INTERVIEW_MISMATCH, Qe.WorkflowState.SERVICE_TAX_INTERVIEW_NOT_STARTED, Qe.WorkflowState.SERVICE_TAX_INTERVIEW_PENDING, Qe.WorkflowState.SERVICE_TAX_INTERVIEW_FAILED, Qe.WorkflowState.SERVICE_TAX_INTERVIEW_ACTION_REQUIRED, Qe.WorkflowState.SERVICE_TAX_INTERVIEW_MISMATCH].includes(this.props.workflow.currentStep)
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "isPayoutMethodComplete", {
                    get: function() {
                        return this.isTaxInterviewComplete && ![Qe.WorkflowState.PAYOUT_METHOD_NOT_STARTED, Qe.WorkflowState.PAYOUT_METHOD_PENDING].includes(this.props.workflow.currentStep)
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "isReviewComplete", {
                    get: function() {
                        return this.isPayoutMethodComplete && this.props.workflow.currentStep !== Qe.WorkflowState.REVIEW_PENDING
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "numOfTotalSteps", {
                    get: function() {
                        return this.props.onboardEntity === Qe.OnboardEntity.CustomPartner ? 5 : 4
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "step1Title", {
                    get: function() {
                        return Va(Object(p.e)(1), Object(p.e)(this.numOfTotalSteps), Pa[Qe.OnboardStep.Registration].title[this.props.onboardEntity]())
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "step1Description", {
                    get: function() {
                        return this.props.onboardEntity === Qe.OnboardEntity.ExtensionsDeveloper ? this.isRegistrationComplete ? Object(p.d)("Your Extensions Developer Registration is complete.", "PayoutOnboardingSummary") : Object(p.d)("Begin your Extensions Developer Registration.", "PayoutOnboardingSummary") : this.isRegistrationComplete ? Object(p.d)("Your payout registration is complete.", "PayoutOnboardingSummary") : Object(p.d)("Begin your payout registration.", "PayoutOnboardingSummary")
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "step1Status", {
                    get: function() {
                        return this.isRegistrationComplete ? xa.Completed : xa.NotStarted
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "step2Title", {
                    get: function() {
                        return Va(Object(p.e)(2), Object(p.e)(this.numOfTotalSteps), Pa[Qe.OnboardStep.Agreement].title[this.props.onboardEntity]())
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "step2Description", {
                    get: function() {
                        switch (this.props.onboardEntity) {
                            case Qe.OnboardEntity.Affiliate:
                                return this.isAgreementComplete ? Object(p.d)("You have agreed to the Twitch Affiliate Agreement.", "PayoutOnboardingSummary") : Object(p.d)("Agree to the Twitch Affiliate Agreement.", "PayoutOnboardingSummary");
                            case Qe.OnboardEntity.ExtensionsDeveloper:
                                return this.isAgreementComplete ? Object(p.d)("You have agreed to the Twitch Extensions Developer Agreement.", "PayoutOnboardingSummary") : Object(p.d)("Agree to the Twitch Extensions Developer Agreement.", "PayoutOnboardingSummary");
                            case Qe.OnboardEntity.StandardPartner:
                            case Qe.OnboardEntity.PremiumPartner:
                            case Qe.OnboardEntity.CustomPartner:
                                return this.isAgreementComplete ? Object(p.d)("You have agreed to the Twitch Partner Agreement.", "PayoutOnboardingSummary") : Object(p.d)("Agree to the Twitch Partner Agreement.", "PayoutOnboardingSummary");
                            default:
                                return ""
                        }
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "step2Status", {
                    get: function() {
                        return this.isAgreementComplete ? xa.Completed : xa.NotStarted
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "step3Title", {
                    get: function() {
                        return Va(Object(p.e)(3), Object(p.e)(this.numOfTotalSteps), Pa[Qe.OnboardStep.TaxInterview].title[this.props.onboardEntity]())
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "step3Description", {
                    get: function() {
                        if (!this.isAgreementComplete) return La();
                        switch (this.props.workflow.currentStep) {
                            case Qe.WorkflowState.ROYALTY_TAX_INTERVIEW_NOT_STARTED:
                                return La();
                            case Qe.WorkflowState.ROYALTY_TAX_INTERVIEW_PENDING:
                                return Object(p.d)("Your royalty tax information is currently under review. This process usually takes a few minutes.", "PayoutOnboardingSummary");
                            case Qe.WorkflowState.ROYALTY_TAX_INTERVIEW_FAILED:
                            case Qe.WorkflowState.ROYALTY_TAX_INTERVIEW_ACTION_REQUIRED:
                            case Qe.WorkflowState.ROYALTY_TAX_INTERVIEW_MISMATCH:
                            case Qe.WorkflowState.SERVICE_TAX_INTERVIEW_FAILED:
                            case Qe.WorkflowState.SERVICE_TAX_INTERVIEW_ACTION_REQUIRED:
                            case Qe.WorkflowState.SERVICE_TAX_INTERVIEW_MISMATCH:
                                return Object(p.d)("We could not successfully validate your tax information. Please review and correct your tax information.", "PayoutOnboardingSummary");
                            case Qe.WorkflowState.SERVICE_TAX_INTERVIEW_NOT_STARTED:
                                return Object(p.d)("Royalty tax approved. Please complete your service tax information.", "PayoutOnboardingSummary");
                            case Qe.WorkflowState.SERVICE_TAX_INTERVIEW_PENDING:
                                return Object(p.d)("Your service tax information is currently under review. This process usually takes a few minutes.", "PayoutOnboardingSummary");
                            default:
                                return Object(p.d)("Your tax information has been successfully validated.", "PayoutOnboardingSummary")
                        }
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "step3Status", {
                    get: function() {
                        if (!this.isAgreementComplete) return xa.NotStarted;
                        switch (this.props.workflow.currentStep) {
                            case Qe.WorkflowState.ROYALTY_TAX_INTERVIEW_NOT_STARTED:
                                return xa.NotStarted;
                            case Qe.WorkflowState.ROYALTY_TAX_INTERVIEW_PENDING:
                                return xa.Pending;
                            case Qe.WorkflowState.ROYALTY_TAX_INTERVIEW_FAILED:
                            case Qe.WorkflowState.ROYALTY_TAX_INTERVIEW_ACTION_REQUIRED:
                            case Qe.WorkflowState.ROYALTY_TAX_INTERVIEW_MISMATCH:
                                return xa.Failed;
                            case Qe.WorkflowState.SERVICE_TAX_INTERVIEW_NOT_STARTED:
                                return xa.NotStarted;
                            case Qe.WorkflowState.SERVICE_TAX_INTERVIEW_PENDING:
                                return xa.Pending;
                            case Qe.WorkflowState.SERVICE_TAX_INTERVIEW_FAILED:
                            case Qe.WorkflowState.SERVICE_TAX_INTERVIEW_ACTION_REQUIRED:
                            case Qe.WorkflowState.SERVICE_TAX_INTERVIEW_MISMATCH:
                                return xa.Failed;
                            default:
                                return xa.Completed
                        }
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "step4Title", {
                    get: function() {
                        return Va(Object(p.e)(4), Object(p.e)(this.numOfTotalSteps), Pa[Qe.OnboardStep.PayoutMethod].title[this.props.onboardEntity]())
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "step4Description", {
                    get: function() {
                        var e = this.props.onboardEntity === Qe.OnboardEntity.ExtensionsDeveloper;
                        return this.isTaxInterviewComplete ? this.props.workflow.currentStep === Qe.WorkflowState.PAYOUT_METHOD_PENDING ? e ? Object(p.d)("Your financial information is currently under review. This process usually takes a few minutes.", "PayoutOnboardingSummary") : Object(p.d)("Your payout method is currently under review. This process usually takes a few minutes.", "PayoutOnboardingSummary") : this.isPayoutMethodComplete ? e ? Object(p.d)("Your financial information has been successfully validated.", "PayoutOnboardingSummary") : Object(p.d)("Your payout method has been successfully validated.", "PayoutOnboardingSummary") : e ? Ba() : Ua() : e ? Ba() : Ua()
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "step4Status", {
                    get: function() {
                        return this.isTaxInterviewComplete ? this.props.workflow.currentStep === Qe.WorkflowState.PAYOUT_METHOD_PENDING ? xa.Pending : this.isPayoutMethodComplete ? xa.Completed : xa.NotStarted : xa.NotStarted
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "step5Title", {
                    get: function() {
                        return this.props.onboardEntity === Qe.OnboardEntity.CustomPartner ? Va(Object(p.e)(5), Object(p.e)(this.numOfTotalSteps), Pa[Qe.OnboardStep.Review].title[this.props.onboardEntity]()) : ""
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "step5Description", {
                    get: function() {
                        return this.isPayoutMethodComplete ? this.props.workflow.currentStep === Qe.WorkflowState.REVIEW_PENDING ? Object(p.d)("The Partnership Team is currently validating your paperwork.", "PayoutOnboardingSummary") : Object(p.d)("The Partnership Team has approved your new agreement.", "PayoutOnboardingSummary") : Object(p.d)("The Partnership Team will validate your paperwork and activate your new agreement.", "PayoutOnboardingSummary")
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "step5Status", {
                    get: function() {
                        return this.isPayoutMethodComplete ? this.props.workflow.currentStep === Qe.WorkflowState.REVIEW_PENDING ? xa.Pending : xa.Completed : xa.NotStarted
                    },
                    enumerable: !0,
                    configurable: !0
                }), t
            }(r.Component),
            Qa = function(e) {
                return Object(p.d)("Example {exampleNum}", {
                    exampleNum: Object(p.e)(e)
                }, "TaxInfoBrick")
            },
            Ya = function(e) {
                if (e.taxStatus === ir.NotStarted || e.taxStatus === ir.Completed) return null;
                var t;
                switch (e.taxStatus) {
                    case ir.Pending:
                        t = r.createElement(S.Q, {
                            type: S._49.P
                        }, Object(p.d)("Your tax information is currently under review. This typically takes a few minutes.", "TaxInfoBrick"));
                        break;
                    case ir.ActionRequired:
                        t = r.createElement(S.Q, {
                            type: S._49.P
                        }, Object(p.d)("Looks like you may need to mail documentation to Amazon to complete this process. However, you may be able to avoid this by consenting to electronic signature of your tax form. To do this, click the button below to retake the tax interview and be sure to check the box to consent to electronic signature.", "TaxInfoBrick"));
                        break;
                    case ir.Failed:
                        t = r.createElement(S.Q, {
                            type: S._49.P
                        }, Object(p.d)("We could not successfully validate your tax information.", "TaxInfoBrick"));
                        break;
                    case ir.Mismatch:
                        t = r.createElement(r.Fragment, null, r.createElement(S._2, {
                            margin: {
                                bottom: 1
                            }
                        }, r.createElement(S.Q, {
                            type: S._49.P
                        }, Object(p.d)("Thank you for completing your tax interview. However, the details you have just entered into the tax form does not match the information on file from Step 1 (Registration). Your tax information from Steps 1 and 3 MUST match in order to receive payouts from Twitch.", "TaxInfoBrick"))), r.createElement(S._2, {
                            margin: {
                                bottom: 1
                            }
                        }, r.createElement(S.Q, {
                            type: S._49.P
                        }, Qa(1))), r.createElement(S._8, {
                            margin: {
                                left: 1,
                                bottom: 1
                            }
                        }, r.createElement(S.Q, {
                            type: S._49.P
                        }, Object(p.d)("Step 1 user is John Doe from the United States of America.", "TaxInfoBrick")), r.createElement(S.Q, {
                            type: S._49.P
                        }, Object(p.d)("Step 3 tax information should be for John Doe from the United States of America.", "TaxInfoBrick")), r.createElement(S.Q, {
                            type: S._49.P
                        }, Object(p.d)("Step 4 selected payout method is check paid to John Doe from the United States of America.", "TaxInfoBrick"))), r.createElement(S._2, {
                            margin: {
                                bottom: 1
                            }
                        }, r.createElement(S.Q, {
                            type: S._49.P
                        }, Qa(2))), r.createElement(S._8, {
                            margin: {
                                left: 1,
                                bottom: 1
                            }
                        }, r.createElement(S.Q, {
                            type: S._49.P
                        }, Object(p.d)("Step 1 user is John Doe working for Cool Gaming, Inc. from France.", "TaxInfoBrick")), r.createElement(S.Q, {
                            type: S._49.P
                        }, Object(p.d)("Step 3 tax information should be for Cool Gaming, Inc. from France.", "TaxInfoBrick")), r.createElement(S.Q, {
                            type: S._49.P
                        }, Object(p.d)("Step 4 selected payout method is a wire paid to Cool Gaming, Inc. from France.", "TaxInfoBrick"))), r.createElement(S.Q, {
                            type: S._49.P
                        }, Object(p.d)("Please see the list of errors below for the specific fields that require correction.", "TaxInfoBrick")));
                        break;
                    default:
                        return null
                }
                return r.createElement(S._35, {
                    padding: 2,
                    borderMarked: !0,
                    background: S.n.Base,
                    margin: {
                        bottom: 2
                    },
                    elevation: 1
                }, t)
            },
            Ga = function(e) {
                return r.createElement(r.Fragment, null, r.createElement(S._2, {
                    margin: {
                        bottom: 1
                    }
                }, r.createElement(S.Q, {
                    type: S._49.P
                }, Object(p.d)("If you prefer not to consent to electronic signature, you will be required to mail additional documentation to Amazon. As a reminder, Twitch is a subsidiary of Amazon, and Amazon handles our tax forms. To proceed, please follow these instructions:", "TaxActionRequiredInfo"))), r.createElement(S._8, {
                    margin: {
                        bottom: 1
                    }
                }, r.createElement(S.Q, {
                    type: S._49.P
                }, Object(p.d)("1. Click the button below to retake the tax information interview.", "TaxActionRequiredInfo")), r.createElement(S.Q, {
                    type: S._49.P
                }, Object(p.d)("2. Proceed to the page that asks you to print out a hardcopy of the tax form and print out the form.", "TaxActionRequiredInfo")), r.createElement(S.Q, {
                    type: S._49.P
                }, Object(p.d)("3. Sign the form with a blue or black pen.", "TaxActionRequiredInfo")), r.createElement(S.Q, {
                    type: S._49.P
                }, Object(p.d)("4. Mail the hardcopy of your tax form to:", "TaxActionRequiredInfo"))), r.createElement(S._8, {
                    margin: {
                        left: 2,
                        bottom: 1
                    }
                }, r.createElement(S.Q, {
                    type: S._49.P
                }, "Amazon"), r.createElement(S.Q, {
                    type: S._49.P
                }, "Attn: FinOps Tax"), r.createElement(S.Q, {
                    type: S._49.P
                }, "P.O. Box 80683"), r.createElement(S.Q, {
                    type: S._49.P
                }, "Seattle, WA, 98108-0683"), r.createElement(S.Q, {
                    type: S._49.P
                }, "U.S.A.")), r.createElement(S._8, {
                    margin: {
                        bottom: 1
                    }
                }, r.createElement(S.Q, {
                    type: S._49.P
                }, Object(p.d)("To assist Amazon with locating your account, please write the following at the top of the form in the white space:", "TaxActionRequiredInfo"))), r.createElement(S._8, {
                    margin: {
                        left: 2,
                        bottom: 1
                    }
                }, r.createElement(S.Q, {
                    type: S._49.P
                }, "Amazon subsidiary: Twitch Interactive, Inc."), r.createElement(S.Q, {
                    type: S._49.P
                }, "Email address: ", e.email)))
            },
            za = function(e) {
                var t = e.workflow,
                    n = t.registration,
                    a = t.taxMismatchErrors;
                if (!n || !a) return null;
                var i = a.map(function(e, t) {
                    var a, i;
                    if (e === Qe.TaxMismatchError.NAME) a = Object(p.d)("Name", "TaxMismatchSpecificErrors"), i = n.companyName ? n.companyName : [n.firstName, n.middleName, n.lastName].filter(function(e) {
                        return null !== e
                    }).join(" ");
                    else if (e === Qe.TaxMismatchError.EMAIL) a = Object(p.d)("Email", "TaxMismatchSpecificErrors"), i = n.email;
                    else if (e === Qe.TaxMismatchError.STREET_ADDRESS) a = Object(p.d)("Street Address", "TaxMismatchSpecificErrors"), i = n.streetAddress;
                    else if (e === Qe.TaxMismatchError.STREET_ADDRESS_2) a = Object(p.d)("Street Address 2", "TaxMismatchSpecificErrors"), i = n.streetAddress2;
                    else if (e === Qe.TaxMismatchError.CITY) a = Object(p.d)("City or Town", "TaxMismatchSpecificErrors"), i = n.city;
                    else if (e === Qe.TaxMismatchError.STATE) a = Object(p.d)("State/Province", "TaxMismatchSpecificErrors"), i = "US" === n.countryCode ? Bn(n.stateCode || "") : "CA" === n.countryCode ? Mn(n.stateCode || "") : n.stateCode;
                    else if (e === Qe.TaxMismatchError.COUNTRY) a = Object(p.d)("Country", "TaxMismatchSpecificErrors"), i = Object(Un.b)(n.countryCode || "");
                    else {
                        if (e !== Qe.TaxMismatchError.POSTAL) return null;
                        a = Object(p.d)("Zip Code/Postal Code", "TaxMismatchSpecificErrors"), i = n.postal
                    }
                    return r.createElement(S._2, {
                        key: a + t,
                        padding: {
                            left: 1
                        }
                    }, r.createElement(S.Q, {
                        type: S._49.P
                    }, r.createElement(S.Q, {
                        bold: !0,
                        type: S._49.Span
                    }, a), " ", i))
                });
                return r.createElement(r.Fragment, null, r.createElement(S._2, {
                    margin: {
                        bottom: 1
                    }
                }, r.createElement(S.Q, {
                    type: S._49.P,
                    color: S.K.Error,
                    bold: !0
                }, Object(p.d)("Specific Errors", "TaxMismatchSpecificErrors"))), r.createElement(S._2, {
                    margin: {
                        bottom: 1
                    }
                }, r.createElement(S.Q, {
                    type: S._49.P
                }, Object(p.d)("The following data you entered in Step 1 does not match the data entered on the tax interview in Step 3:", "TaxMismatchSpecificErrors"))), r.createElement(S._8, {
                    margin: {
                        bottom: 1
                    }
                }, i), r.createElement(S._2, {
                    margin: {
                        bottom: 1
                    }
                }, r.createElement(S.Q, {
                    type: S._49.P
                }, Object(p.d)("To fix this, please click the button below to edit your tax form and correct these values. Alternatively, if the tax form has the correct information, you can choose to edit Step 1 instead. To do this, click the button below and then click {buttonLabel} to reset the onboarding flow.", {
                    buttonLabel: Object(p.d)("Start Over", "TaxMismatchSpecificErrors")
                }, "TaxMismatchSpecificErrors"))))
            },
            Ha = function(e) {
                var t = e.workflow.registration;
                if (!t) return null;
                switch (e.taxStatus) {
                    case ir.NotStarted:
                        return r.createElement(r.Fragment, null, r.createElement(S._2, {
                            margin: {
                                bottom: 1
                            }
                        }, r.createElement(S.Q, {
                            type: S._49.P
                        }, Object(p.d)("A new window will open where you can submit your royalty tax information. Please complete the tax information interview fully.", "TaxInfoRoyaltyText"))), r.createElement(S._2, {
                            margin: {
                                bottom: 1
                            }
                        }, r.createElement(S.Q, {
                            type: S._49.P
                        }, Object(p.d)('Once you\'ve filled out the form, if your status still says "Not Started", please wait a minute or two for it to update to "Under Review".', "TaxInfoRoyaltyText"))), r.createElement(S._8, {
                            margin: {
                                bottom: 2
                            }
                        }, r.createElement(fn, {
                            onboardEntity: e.onboardEntity
                        })));
                    case ir.Pending:
                        return r.createElement(S._2, {
                            margin: {
                                bottom: 2
                            }
                        }, r.createElement(S.Q, {
                            type: S._49.P
                        }, Object(p.d)("You can retake the Royalty Tax Interview if you wish to modify or correct any previously submitted information. You may want to do this if your tax information has been under review for more than 48 hours.", "TaxInfoRoyaltyText")));
                    case ir.Completed:
                        return r.createElement(S.Q, {
                            type: S._49.P
                        }, Object(p.d)("Your royalty tax information was successfully validated.", "TaxInfoRoyaltyText"));
                    case ir.ActionRequired:
                        return r.createElement(r.Fragment, null, r.createElement(Ga, {
                            email: t.email
                        }), r.createElement(S._8, {
                            margin: {
                                bottom: 2
                            }
                        }, r.createElement(fn, {
                            onboardEntity: e.onboardEntity
                        })));
                    case ir.Mismatch:
                        return r.createElement(r.Fragment, null, r.createElement(za, {
                            workflow: e.workflow
                        }), r.createElement(S._8, {
                            margin: {
                                bottom: 2
                            }
                        }, r.createElement(fn, {
                            onboardEntity: e.onboardEntity
                        })));
                    case ir.Failed:
                        return r.createElement(S._2, {
                            margin: {
                                bottom: 2
                            }
                        }, r.createElement(S.Q, {
                            type: S._49.P
                        }, Object(p.d)("Please click the button below to retake the Royalty Tax Interview and correct your information.", "TaxInfoRoyaltyText")));
                    default:
                        return null
                }
            },
            qa = function(e) {
                var t = e.workflow.registration;
                if (!t) return null;
                if (!e.royaltyTaxCompleted) return r.createElement(r.Fragment, null, r.createElement(S._2, {
                    margin: {
                        bottom: 1
                    }
                }, r.createElement(S.Q, {
                    type: S._49.P
                }, Object(p.d)("Please complete your Royalty Tax Interview first. Once your royalty tax information is fully validated, you will need to complete the Service Tax Interview.", "TaxInfoServiceText"))), r.createElement(S._8, {
                    margin: {
                        bottom: 2
                    }
                }, r.createElement(fn, {
                    onboardEntity: e.onboardEntity
                })));
                switch (e.taxStatus) {
                    case ir.NotStarted:
                        return r.createElement(r.Fragment, null, r.createElement(S._2, {
                            margin: {
                                bottom: 1
                            }
                        }, r.createElement(S.Q, {
                            type: S._49.P
                        }, Object(p.d)("A new window will open where you can submit your service tax information. Please complete the tax information interview fully.", "TaxInfoServiceText"))), r.createElement(S._2, {
                            margin: {
                                bottom: 1
                            }
                        }, r.createElement(S.Q, {
                            type: S._49.P
                        }, Object(p.d)('Once you\'ve filled out the form, if your status still says "Not Started", please wait a minute or two for it to update to "Under Review".', "TaxInfoServiceText"))), r.createElement(S._8, {
                            margin: {
                                bottom: 2
                            }
                        }, r.createElement(fn, {
                            onboardEntity: e.onboardEntity
                        })));
                    case ir.Pending:
                        return r.createElement(S._2, {
                            margin: {
                                bottom: 2
                            }
                        }, r.createElement(S.Q, {
                            type: S._49.P
                        }, Object(p.d)("You can retake the Service Tax Interview if you wish to modify or correct any previously submitted information. You may want to do this if your tax information has been under review for more than 48 hours.", "TaxInfoServiceText")));
                    case ir.Completed:
                        return r.createElement(S.Q, {
                            type: S._49.P
                        }, Object(p.d)("Your service tax information was successfully validated.", "TaxInfoServiceText"));
                    case ir.ActionRequired:
                        return r.createElement(r.Fragment, null, r.createElement(Ga, {
                            email: t.email
                        }), r.createElement(S._8, {
                            margin: {
                                bottom: 2
                            }
                        }, r.createElement(fn, {
                            onboardEntity: e.onboardEntity
                        })));
                    case ir.Mismatch:
                        return r.createElement(r.Fragment, null, r.createElement(za, {
                            workflow: e.workflow
                        }), r.createElement(S._8, {
                            margin: {
                                bottom: 2
                            }
                        }, r.createElement(fn, {
                            onboardEntity: e.onboardEntity
                        })));
                    case ir.Failed:
                        return r.createElement(S._2, {
                            margin: {
                                bottom: 2
                            }
                        }, r.createElement(S.Q, {
                            type: S._49.P
                        }, Object(p.d)("Please click the button below to retake the Service Tax Interview and correct your information.", "TaxInfoServiceText")));
                    default:
                        return null
                }
            },
            Xa = function() {
                return Object(p.d)("Start Over", "TaxPreviewInstructions")
            },
            Ka = function(e) {
                return r.createElement(S._35, {
                    borderMarked: !0,
                    padding: 2,
                    margin: {
                        bottom: 1
                    }
                }, r.createElement(S._2, {
                    margin: {
                        bottom: 2
                    }
                }, r.createElement(S.Q, {
                    type: S._49.P
                }, Object(p.d)("It is important that you enter consistent information throughout the onboarding process to ensure that we have your correct contact information, tax information, and payout information. When filling out the tax form on the following page, please make sure that you enter the same information as you did in Step 1. For your reference, here is the information you entered in Step 1.", "TaxPreviewInstructions"))), e.onboardEntity !== Qe.OnboardEntity.ExtensionsDeveloper && r.createElement(S._2, {
                    margin: {
                        bottom: 2
                    }
                }, r.createElement(S.Q, {
                    type: S._49.P
                }, Object(p.d)('If any of this information is incorrect, you must restart your Payout Registration by clicking "{buttonLabel}" below.', {
                    buttonLabel: Xa()
                }, "TaxPreviewInstructions"))), e.onboardEntity === Qe.OnboardEntity.ExtensionsDeveloper && r.createElement(S._2, {
                    margin: {
                        bottom: 2
                    }
                }, r.createElement(S.Q, {
                    type: S._49.P
                }, Object(p.d)('If any of this information is incorrect, you must restart your Extensions Developer Registration by clicking "{buttonLabel}" below.', {
                    buttonLabel: Xa()
                }, "TaxPreviewInstructions"))), r.createElement(S.Q, {
                    type: S._49.P
                }, Object(p.d)("Otherwise, please proceed by clicking the purple button and the tax form will appear in a new window. If the tax form does not appear, make sure that you have pop-ups enabled.", "TaxPreviewInstructions")))
            },
            $a = function() {
                return Object(p.d)("optional", "TaxPreviewReferenceInfo")
            },
            Ja = function(e) {
                var t, n = e.workflow.registration;
                if (!n) return null;
                t = n.companyName ? n.companyName : [n.firstName, n.middleName, n.lastName].filter(function(e) {
                    return null !== e
                }).join(" ");
                var a = "US" === n.countryCode,
                    i = "CA" === n.countryCode;
                return r.createElement(S._35, {
                    borderMarked: !0,
                    padding: 2
                }, r.createElement(S._8, {
                    margin: {
                        bottom: 2
                    }
                }, r.createElement(S.W, {
                    label: Object(p.d)("Channel Name", "TaxPreviewReferenceInfo"),
                    orientation: S.X.Horizontal
                }, r.createElement(S._4, {
                    type: S._5.Text,
                    value: e.channelName,
                    disabled: !0
                }))), r.createElement(S._8, {
                    margin: {
                        bottom: 2
                    }
                }, r.createElement(S.W, {
                    label: Object(p.d)("Name", "TaxPreviewReferenceInfo"),
                    orientation: S.X.Horizontal
                }, r.createElement(S._4, {
                    type: S._5.Text,
                    value: t || "",
                    disabled: !0
                }))), r.createElement(S._8, {
                    margin: {
                        bottom: 2
                    }
                }, r.createElement(S.W, {
                    label: Object(p.d)("Email", "TaxPreviewReferenceInfo"),
                    orientation: S.X.Horizontal
                }, r.createElement(S._4, {
                    type: S._5.Text,
                    value: n.email,
                    disabled: !0
                }))), r.createElement(S._8, {
                    margin: {
                        bottom: 2
                    }
                }, r.createElement(S.W, {
                    label: Object(p.d)("Country", "TaxPreviewReferenceInfo"),
                    orientation: S.X.Horizontal
                }, r.createElement(S._4, {
                    type: S._5.Text,
                    value: Object(Un.b)(n.countryCode),
                    disabled: !0
                }))), r.createElement(S._8, {
                    margin: {
                        bottom: 2
                    }
                }, r.createElement(S.W, {
                    label: Object(p.d)("Street Address", "TaxPreviewReferenceInfo"),
                    orientation: S.X.Horizontal
                }, r.createElement(S._4, {
                    type: S._5.Text,
                    value: n.streetAddress,
                    disabled: !0
                }))), r.createElement(S._8, {
                    margin: {
                        bottom: 2
                    }
                }, r.createElement(S.W, {
                    label: Object(p.d)("Street Address 2", "TaxPreviewReferenceInfo"),
                    orientation: S.X.Horizontal,
                    labelOptional: $a()
                }, r.createElement(S._4, {
                    type: S._5.Text,
                    value: n.streetAddress2 || "",
                    disabled: !0
                }))), r.createElement(S._8, {
                    margin: {
                        bottom: 2
                    }
                }, r.createElement(S.W, {
                    label: Object(p.d)("City or Town", "TaxPreviewReferenceInfo"),
                    orientation: S.X.Horizontal
                }, r.createElement(S._4, {
                    type: S._5.Text,
                    value: n.city,
                    disabled: !0
                }))), r.createElement(S._8, {
                    margin: {
                        bottom: 2
                    }
                }, r.createElement(S.W, {
                    label: Object(p.d)("State/Province", "TaxPreviewReferenceInfo"),
                    orientation: S.X.Horizontal,
                    labelOptional: a || i ? "" : $a()
                }, r.createElement(S._4, {
                    type: S._5.Text,
                    value: a ? Bn(n.stateCode || "") : i ? Mn(n.stateCode || "") : n.stateCode || "",
                    disabled: !0
                }))), r.createElement(S.W, {
                    label: Object(p.d)("Zip Code/Postal Code", "TaxPreviewReferenceInfo"),
                    orientation: S.X.Horizontal,
                    labelOptional: a ? "" : $a()
                }, r.createElement(S._4, {
                    type: S._5.Text,
                    value: n.postal || "",
                    disabled: !0
                })))
            },
            Za = (n("ZDnG"), n("bv1+")),
            er = function(e) {
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
                return a.__extends(t, e), t.prototype.componentWillUnmount = function() {
                    clearInterval(this.popupInterval)
                }, t.prototype.render = function() {
                    return this.props.data.loading ? r.createElement(S._35, {
                        className: "tax-preview-modal__container",
                        background: S.n.Base,
                        padding: 5
                    }, r.createElement(S._10, {
                        fillContent: !0
                    })) : this.props.data.error ? r.createElement(S._35, {
                        className: "tax-preview-modal__container",
                        background: S.n.Base,
                        padding: 5
                    }, r.createElement(l.a, {
                        message: Object(p.d)("Oops, something went wrong.", "TaxPreviewModal")
                    })) : r.createElement(S._35, {
                        className: "tax-preview-modal__container",
                        background: S.n.Base,
                        padding: 2
                    }, r.createElement(S._2, {
                        margin: {
                            bottom: 1
                        }
                    }, r.createElement(S.Q, {
                        type: S._49.H4
                    }, Object(p.d)("Information Reference", "TaxPreviewModal"))), r.createElement(Ka, {
                        onboardEntity: this.props.onboardEntity
                    }), r.createElement(Ja, {
                        channelName: this.props.channelName,
                        workflow: this.props.workflow
                    }), r.createElement(S._8, {
                        display: S.R.Flex,
                        justifyContent: S._7.Center,
                        padding: {
                            top: 2
                        }
                    }, r.createElement(S._8, {
                        display: S.R.InlineBlock,
                        margin: {
                            right: 2
                        }
                    }, r.createElement(S.v, {
                        type: S.B.Text,
                        onClick: this.props.showStartOverModal,
                        disabled: this.state.openingTaxInterview
                    }, Object(p.d)("Start Over", "TaxPreviewModal"))), r.createElement(S._8, {
                        display: S.R.InlineBlock,
                        margin: {
                            right: 2
                        }
                    }, r.createElement(S.v, {
                        onClick: this.handleOpenTaxInterviewClick,
                        disabled: this.state.openingTaxInterview
                    }, this.openTaxButtonText)), this.state.openingTaxInterview && r.createElement(S._8, {
                        display: S.R.Flex,
                        justifyContent: S._7.Center,
                        flexDirection: S.T.Column
                    }, r.createElement(S._10, null))))
                }, Object.defineProperty(t.prototype, "openTaxButtonText", {
                    get: function() {
                        return this.props.taxType === rr.Royalty ? Object(p.d)("Open Royalty Tax Interview Form", "TaxPreviewModal") : Object(p.d)("Open Service Tax Interview Form", "TaxPreviewModal")
                    },
                    enumerable: !0,
                    configurable: !0
                }), t
            }(r.Component),
            tr = Object(i.compose)(Object(u.a)(Za, {
                options: function(e) {
                    return {
                        variables: {
                            taxType: e.taxType,
                            returnURL: window.location.href
                        }
                    }
                }
            }))(er),
            nr = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    return r.createElement(r.Fragment, null, r.createElement(tr, {
                        taxType: this.props.taxType,
                        channelName: this.props.channelName,
                        onboardEntity: this.props.onboardEntity,
                        workflow: this.props.workflow,
                        showStartOverModal: this.props.showStartOverModal,
                        closeTaxPreviewModal: this.props.closeModal
                    }), r.createElement(En.a, {
                        closeOnBackdropClick: !0
                    }))
                }, t
            }(r.Component);
        var ar, rr, ir, or = Object(g.d)(Object(Oe.b)(null, function(e) {
            return Object(g.b)({
                closeModal: Te.c
            }, e)
        }))(nr);
        ! function(e) {
            e.RoyaltyHeader = "payout-onboarding-tax-interview__royalty-header", e.RoyaltyButton = "payout-onboarding-tax-interview__royalty-button", e.ServiceHeader = "payout-onboarding-tax-interview__service-header", e.ServiceButton = "payout-onboarding-tax-interview__service-button", e.ContinueButton = "payout-onboarding-tax-interview__continue-button"
        }(ar || (ar = {})),
        function(e) {
            e.Royalty = "Royalty", e.Service = "Service"
        }(rr || (rr = {})),
        function(e) {
            e[e.NotStarted = 0] = "NotStarted", e[e.Pending = 1] = "Pending", e[e.Failed = 2] = "Failed", e[e.ActionRequired = 3] = "ActionRequired", e[e.Mismatch = 4] = "Mismatch", e[e.Completed = 5] = "Completed"
        }(ir || (ir = {}));
        var sr = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.handleRoyaltyTaxButtonClick = function() {
                    t.showTaxPreviewModal(rr.Royalty)
                }, t.handleServiceTaxButtonClick = function() {
                    t.showTaxPreviewModal(rr.Service)
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
                    t.props.updateStepDisplayed(Qe.OnboardStep.PayoutMethod)
                }, t
            }
            return a.__extends(t, e), t.prototype.render = function() {
                return r.createElement(U.a, null, r.createElement(dn, {
                    title: Object(p.d)("Royalty Tax Interview", "PayoutOnboardingTaxInterview"),
                    statusText: this.royaltyStatusText,
                    statusType: this.royaltyStatusType,
                    borderTop: !0,
                    "data-test-selector": ar.RoyaltyHeader
                }), r.createElement(S._8, {
                    padding: 2
                }, r.createElement(Ya, {
                    taxStatus: this.royaltyTaxStatus
                }), r.createElement(Ha, {
                    taxStatus: this.royaltyTaxStatus,
                    workflow: this.props.workflow,
                    onboardEntity: this.props.onboardEntity
                }), this.royaltyTaxStatus !== ir.Completed && r.createElement(S.v, {
                    type: this.royaltyTaxButtonType,
                    disabled: this.royaltyTaxButtonDisabled,
                    onClick: this.handleRoyaltyTaxButtonClick,
                    "data-test-selector": ar.RoyaltyButton
                }, this.royaltyTaxButtonText)), r.createElement(dn, {
                    title: Object(p.d)("Service Tax Interview", "PayoutOnboardingTaxInterview"),
                    statusText: this.serviceStatusText,
                    statusType: this.serviceStatusType,
                    "data-test-selector": ar.ServiceHeader
                }), r.createElement(S._8, {
                    padding: 2
                }, r.createElement(Ya, {
                    taxStatus: this.serviceTaxStatus
                }), r.createElement(qa, {
                    royaltyTaxCompleted: this.royaltyTaxStatus === ir.Completed,
                    taxStatus: this.serviceTaxStatus,
                    workflow: this.props.workflow,
                    onboardEntity: this.props.onboardEntity
                }), this.serviceTaxStatus !== ir.Completed && r.createElement(S.v, {
                    type: this.serviceTaxButtonType,
                    disabled: this.serviceTaxButtonDisabled,
                    onClick: this.handleServiceTaxButtonClick,
                    "data-test-selector": ar.ServiceButton
                }, this.serviceTaxButtonText)), r.createElement(S._35, {
                    padding: 2,
                    background: S.n.Alt2
                }, r.createElement(S.v, {
                    "data-test-selector": ar.ContinueButton,
                    size: S.z.Large,
                    disabled: this.continueButtonDisabled,
                    onClick: this.handleContinueClick
                }, Object(p.d)("Continue", "PayoutOnboardingTaxInterview"))))
            }, Object.defineProperty(t.prototype, "royaltyTaxStatus", {
                get: function() {
                    switch (this.props.workflow.currentStep) {
                        case Qe.WorkflowState.ROYALTY_TAX_INTERVIEW_NOT_STARTED:
                            return ir.NotStarted;
                        case Qe.WorkflowState.ROYALTY_TAX_INTERVIEW_PENDING:
                            return ir.Pending;
                        case Qe.WorkflowState.ROYALTY_TAX_INTERVIEW_ACTION_REQUIRED:
                            return ir.ActionRequired;
                        case Qe.WorkflowState.ROYALTY_TAX_INTERVIEW_MISMATCH:
                            return ir.Mismatch;
                        case Qe.WorkflowState.ROYALTY_TAX_INTERVIEW_FAILED:
                            return ir.Failed;
                        default:
                            return ir.Completed
                    }
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "serviceTaxStatus", {
                get: function() {
                    switch (this.props.workflow.currentStep) {
                        case Qe.WorkflowState.ROYALTY_TAX_INTERVIEW_NOT_STARTED:
                        case Qe.WorkflowState.ROYALTY_TAX_INTERVIEW_PENDING:
                        case Qe.WorkflowState.ROYALTY_TAX_INTERVIEW_ACTION_REQUIRED:
                        case Qe.WorkflowState.ROYALTY_TAX_INTERVIEW_MISMATCH:
                        case Qe.WorkflowState.ROYALTY_TAX_INTERVIEW_FAILED:
                        case Qe.WorkflowState.SERVICE_TAX_INTERVIEW_NOT_STARTED:
                            return ir.NotStarted;
                        case Qe.WorkflowState.SERVICE_TAX_INTERVIEW_PENDING:
                            return ir.Pending;
                        case Qe.WorkflowState.SERVICE_TAX_INTERVIEW_ACTION_REQUIRED:
                            return ir.ActionRequired;
                        case Qe.WorkflowState.SERVICE_TAX_INTERVIEW_MISMATCH:
                            return ir.Mismatch;
                        case Qe.WorkflowState.SERVICE_TAX_INTERVIEW_FAILED:
                            return ir.Failed;
                        default:
                            return ir.Completed
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
                    case ir.NotStarted:
                        return Object(p.d)("Not Started", "PayoutOnboardingTaxInterview");
                    case ir.Pending:
                        return Object(p.d)("Under Review", "PayoutOnboardingTaxInterview");
                    case ir.ActionRequired:
                        return Object(p.d)("Additional Documentation Required", "PayoutOnboardingTaxInterview");
                    case ir.Mismatch:
                    case ir.Failed:
                        return Object(p.d)("Failed", "PayoutOnboardingTaxInterview");
                    case ir.Completed:
                        return Object(p.d)("Completed", "PayoutOnboardingTaxInterview");
                    default:
                        return ""
                }
            }, t.prototype.getStatusType = function(e) {
                switch (e) {
                    case ir.Pending:
                        return S._13.Warn;
                    case ir.ActionRequired:
                    case ir.Mismatch:
                    case ir.Failed:
                        return S._13.Alert;
                    case ir.Completed:
                        return S._13.Success;
                    default:
                        return
                }
            }, Object.defineProperty(t.prototype, "royaltyTaxButtonType", {
                get: function() {
                    return this.royaltyTaxStatus === ir.Pending || this.royaltyTaxStatus === ir.ActionRequired ? S.B.Hollow : S.B.Default
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "royaltyTaxButtonDisabled", {
                get: function() {
                    return this.royaltyTaxStatus === ir.Completed
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "royaltyTaxButtonText", {
                get: function() {
                    return this.royaltyTaxStatus === ir.NotStarted ? Object(p.d)("Begin Royalty Tax Interview", "PayoutOnboardingTaxInterview") : Object(p.d)("Retake Royalty Tax Interview", "PayoutOnboardingTaxInterview")
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "serviceTaxButtonType", {
                get: function() {
                    return this.serviceTaxStatus === ir.Pending || this.serviceTaxStatus === ir.ActionRequired ? S.B.Hollow : S.B.Default
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "serviceTaxButtonDisabled", {
                get: function() {
                    return this.royaltyTaxStatus !== ir.Completed || this.serviceTaxStatus === ir.Completed
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "serviceTaxButtonText", {
                get: function() {
                    return this.serviceTaxStatus === ir.NotStarted ? Object(p.d)("Begin Service Tax Interview", "PayoutOnboardingTaxInterview") : Object(p.d)("Retake Service Tax Interview", "PayoutOnboardingTaxInterview")
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "continueButtonDisabled", {
                get: function() {
                    return this.royaltyTaxStatus !== ir.Completed || this.serviceTaxStatus !== ir.Completed
                },
                enumerable: !0,
                configurable: !0
            }), t
        }(r.Component);
        var lr = Object(i.compose)(Object(Oe.b)(null, function(e) {
                return Object(g.b)({
                    showTaxPreviewModal: function(e) {
                        var t = a.__rest(e, []);
                        return Object(Te.d)(or, t)
                    }
                }, e)
            }))(sr),
            dr = n("NrhD"),
            cr = {
                "data-test-selector": "require-two-factor-enabled__enable-two-factor-message"
            },
            ur = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    return this.props.data.loading ? r.createElement(U.a, null, r.createElement(Ct.a, null, r.createElement(S._14, {
                        lineCount: 4
                    }))) : this.props.data.error ? r.createElement(U.a, null, r.createElement(Ct.a, null, r.createElement(l.a, {
                        message: Object(p.d)("Oops, something went wrong.", "RequireTwoFactorEnabled")
                    }))) : this.hasTwoFactorEnabled ? r.createElement(r.Fragment, null, this.props.children) : r.createElement(U.a, null, r.createElement(Ct.a, null, r.createElement(S.Q, a.__assign({
                        type: S._49.P
                    }, cr), this.props.enableTwoFactorMessage)), r.createElement(Ct.a, null, r.createElement(s.a, {
                        to: "/settings/security"
                    }, r.createElement(S.v, null, Object(p.d)("Enable Two-Factor Authentication", "RequireTwoFactorEnabled")))))
                }, Object.defineProperty(t.prototype, "hasTwoFactorEnabled", {
                    get: function() {
                        return this.props.data.currentUser.settings.hasTwoFactorEnabled
                    },
                    enumerable: !0,
                    configurable: !0
                }), t
            }(r.Component),
            mr = Object(i.compose)(Object(u.a)(dr))(ur),
            pr = n("AbdN"),
            hr = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        canceling: !1
                    }, t.onStartOverClick = function() {
                        return a.__awaiter(t, void 0, void 0, function() {
                            return a.__generator(this, function(e) {
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
                return a.__extends(t, e), t.prototype.render = function() {
                    return r.createElement(r.Fragment, null, r.createElement(S._2, {
                        margin: {
                            bottom: 2
                        }
                    }, r.createElement(S.Q, {
                        type: S._49.H4
                    }, Object(p.d)("Are you sure you would like to start over?", "StartOverModal"))), r.createElement(S._35, {
                        borderTop: !0,
                        borderBottom: !0,
                        padding: {
                            y: 2
                        }
                    }, r.createElement(S._2, {
                        margin: {
                            bottom: 2
                        }
                    }, r.createElement(S.Q, {
                        type: S._49.P
                    }, Object(p.d)("Your current progress will be lost!", "StartOverModal"))), r.createElement(S.Q, {
                        type: S._49.P,
                        bold: !0,
                        color: S.K.Error
                    }, Object(p.d)("WARNING: Starting over will lose any progress and make your Twitch account unpayable. We will hold any payouts until you have fully completed the form.", "StartOverModal"))), r.createElement(S._8, {
                        display: S.R.Flex,
                        justifyContent: S._7.Center,
                        padding: {
                            top: 2
                        }
                    }, r.createElement(S._8, {
                        display: S.R.InlineBlock,
                        margin: {
                            right: 2
                        }
                    }, r.createElement(S.v, {
                        "data-test-selector": "start-over-modal___start-over-button",
                        type: S.B.Text,
                        onClick: this.onStartOverClick,
                        disabled: this.state.canceling
                    }, Object(p.d)("Yes, Start Over", "StartOverModal"))), r.createElement(S._8, {
                        display: S.R.InlineBlock,
                        margin: {
                            right: 2
                        }
                    }, r.createElement(S.v, {
                        "data-test-selector": "start-over-modal__stay-here-button",
                        onClick: this.props.callCloseModal,
                        disabled: this.state.canceling
                    }, Object(p.d)("No, Stay Here", "StartOverModal"))), this.state.canceling && r.createElement(S._8, {
                        display: S.R.Flex,
                        justifyContent: S._7.Center,
                        flexDirection: S.T.Column
                    }, r.createElement(S._10, null))))
                }, t
            }(r.Component),
            gr = (n("n8vm"), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    return r.createElement(S._35, {
                        className: "start-over-modal__container",
                        background: S.n.Base,
                        padding: 2
                    }, r.createElement(hr, {
                        cancelWorkflow: this.props.cancelWorkflow,
                        callCloseModal: this.props.closeModal
                    }), r.createElement(En.a, {
                        closeOnBackdropClick: !0
                    }))
                }, t
            }(r.Component));
        var br = Object(Oe.b)(null, function(e) {
                return Object(g.b)({
                    closeModal: Te.c
                }, e)
            })(gr),
            fr = n("Cte4"),
            vr = n("CR5K"),
            Er = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        stepDisplayed: Qe.OnboardStep.Summary,
                        redirectedAlready: !1
                    }, t.backLinkURL = "/" + t.props.channelName + "/dashboard/settings/revenue", t.totalSteps = t.props.onboardEntity === Qe.OnboardEntity.CustomPartner ? 5 : 4, t.goBackToSummary = function() {
                        t.setState({
                            stepDisplayed: Qe.OnboardStep.Summary
                        })
                    }, t.updateStepDisplayed = function(e) {
                        t.setState({
                            stepDisplayed: e
                        })
                    }, t.startWorkflow = function() {
                        return a.__awaiter(t, void 0, void 0, function() {
                            var e, t;
                            return a.__generator(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        return [4, this.props.startWorkflow(a.__assign({}, Object(v.a)({
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
                        return a.__awaiter(t, void 0, void 0, function() {
                            var e, t;
                            return a.__generator(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        return [4, this.props.cancelWorkflow(a.__assign({}, Object(v.a)({
                                            targetUserID: this.props.data.currentUser.id
                                        })))];
                                    case 1:
                                        return e = n.sent(), t = function(t) {
                                            return t.currentUser.payoutInvite && t.currentUser.payoutInvite.workflow && e.data.cancelPayoutOnboardingWorkflow.workflow && (t.currentUser.payoutInvite.workflow.id = e.data.cancelPayoutOnboardingWorkflow.workflow.id, t.currentUser.payoutInvite.workflow.currentStep = e.data.cancelPayoutOnboardingWorkflow.workflow.currentStep, t.currentUser.payoutInvite.workflow.registration = null, t.currentUser.payoutInvite.workflow.taxMismatchErrors = null), t
                                        }, this.updateContainerQuery(t), this.updateStepDisplayed(Qe.OnboardStep.Summary), [2]
                                }
                            })
                        })
                    }, t.updateContainerQuery = function(e) {
                        Object(v.e)(fr, {}, e)
                    }, t.showStartOverModal = function() {
                        t.props.showStartOverModal({
                            cancelWorkflow: t.cancelWorkflow
                        })
                    }, t
                }
                return a.__extends(t, e), Object.defineProperty(t.prototype, "enableTwoFactorMessage", {
                    get: function() {
                        return Object(p.d)("You must enable two-factor authentication to access your onboarding.", "PayoutOnboardingContainer")
                    },
                    enumerable: !0,
                    configurable: !0
                }), t.prototype.componentDidUpdate = function() {
                    this.shouldRedirectPayoutMethod && this.setState({
                        redirectedAlready: !0,
                        stepDisplayed: Qe.OnboardStep.PayoutMethod
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
                        if (e.currentStep !== Qe.WorkflowState.PAYOUT_METHOD_NOT_STARTED && e.currentStep !== Qe.WorkflowState.PAYOUT_METHOD_PENDING && e.currentStep !== Qe.WorkflowState.COMPLETED && e.currentStep !== Qe.WorkflowState.REVIEW_PENDING) return !1;
                        var t = tn.parse(this.props.location.search);
                        return !!t && "true" === t.redirect_tipalti
                    },
                    enumerable: !0,
                    configurable: !0
                }), t.prototype.render = function() {
                    if (this.props.data.loading) return r.createElement(r.Fragment, null, r.createElement(h.a, {
                        title: Pa[Qe.OnboardStep.Summary].title[this.props.onboardEntity](),
                        description: Pa[Qe.OnboardStep.Summary].description[this.props.onboardEntity](),
                        linkToParent: this.backLinkURL
                    }), r.createElement(U.a, null, r.createElement(Ct.a, null, r.createElement(S._14, {
                        lineCount: 4
                    }))));
                    if (this.props.data.error) return r.createElement(r.Fragment, null, r.createElement(h.a, {
                        title: Pa[Qe.OnboardStep.Summary].title[this.props.onboardEntity](),
                        description: Pa[Qe.OnboardStep.Summary].description[this.props.onboardEntity](),
                        linkToParent: this.backLinkURL
                    }), r.createElement(U.a, null, r.createElement(Ct.a, null, r.createElement(l.a, {
                        message: Object(p.d)("Oops, something went wrong.", "PayoutOnboardingContainer")
                    }))));
                    var e = this.props.onboardEntity,
                        t = this.updateStepDisplayed,
                        n = this.props.data.currentUser.payoutInvite.workflow,
                        i = this.updateContainerQuery;
                    if (!n || n.currentStep === Qe.WorkflowState.CANCELED) return this.startWorkflow(), r.createElement(r.Fragment, null, r.createElement(h.a, {
                        title: Pa[Qe.OnboardStep.Summary].title[this.props.onboardEntity](),
                        description: Pa[Qe.OnboardStep.Summary].description[this.props.onboardEntity](),
                        linkToParent: this.backLinkURL
                    }), r.createElement(U.a, null, r.createElement(Ct.a, null, r.createElement(S._14, {
                        lineCount: 4
                    }))));
                    var o, s = {
                        onboardEntity: e,
                        updateStepDisplayed: t,
                        workflow: n,
                        updateContainerQuery: i
                    };
                    switch (this.state.stepDisplayed) {
                        case Qe.OnboardStep.Summary:
                            return r.createElement(r.Fragment, null, r.createElement(h.a, {
                                title: Pa[Qe.OnboardStep.Summary].title[this.props.onboardEntity](),
                                description: Pa[Qe.OnboardStep.Summary].description[this.props.onboardEntity](),
                                linkToParent: this.backLinkURL
                            }), r.createElement(mr, {
                                enableTwoFactorMessage: this.enableTwoFactorMessage
                            }, r.createElement(Wa, a.__assign({}, s, {
                                showStartOverModal: this.showStartOverModal
                            }))));
                        case Qe.OnboardStep.Registration:
                            var d = {
                                channelName: this.props.channelName,
                                userID: this.props.data.currentUser.id
                            };
                            o = r.createElement(ba, a.__assign({}, s, d));
                            break;
                        case Qe.OnboardStep.Agreement:
                            o = r.createElement(gn, a.__assign({}, s));
                            break;
                        case Qe.OnboardStep.TaxInterview:
                            d = {
                                channelName: this.props.channelName,
                                showStartOverModal: this.showStartOverModal
                            };
                            o = r.createElement(lr, a.__assign({}, s, d));
                            break;
                        case Qe.OnboardStep.PayoutMethod:
                            o = r.createElement(Pn, a.__assign({}, s));
                            break;
                        case Qe.OnboardStep.Review:
                            o = r.createElement(fa, a.__assign({}, s))
                    }
                    return r.createElement(r.Fragment, null, r.createElement(h.a, {
                        title: Object(p.d)("Step {numOfCurrentStep} of {numOfTotalSteps}: {stepTitle}", {
                            numOfCurrentStep: Object(p.e)(this.state.stepDisplayed),
                            numOfTotalSteps: Object(p.e)(this.totalSteps),
                            stepTitle: Pa[this.state.stepDisplayed].title[this.props.onboardEntity]()
                        }, "PayoutOnboardingContainer"),
                        description: Pa[this.state.stepDisplayed].description[this.props.onboardEntity](),
                        onClick: this.goBackToSummary
                    }), r.createElement(mr, {
                        enableTwoFactorMessage: this.enableTwoFactorMessage
                    }, o))
                }, t
            }(r.Component);
        var yr, Sr, kr, _r, Or, Tr = Object(g.d)(Object(u.a)(fr), Object(u.a)(vr, {
                name: "startWorkflow"
            }), Object(u.a)(pr, {
                name: "cancelWorkflow"
            }), Object(nn.a)([{
                topic: function(e) {
                    return Object(ne.m)(e.currentUserID)
                },
                mapMessageTypesToProps: (yr = {}, yr["*"] = "payoutOnboardingEvent", yr)
            }]), Object(Oe.b)(null, function(e) {
                return Object(g.b)({
                    showStartOverModal: function(e) {
                        var t = a.__rest(e, []);
                        return Object(Te.d)(br, t)
                    }
                }, e)
            }), s.f)(Er),
            Nr = n("lQfX"),
            Cr = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    return this.props.data.loading ? r.createElement(S._8, {
                        padding: {
                            y: 5
                        }
                    }, r.createElement(S._10, {
                        fillContent: !0
                    })) : this.props.data.error ? r.createElement(S._8, {
                        padding: {
                            y: 5
                        }
                    }, r.createElement(l.a, null)) : this.hasAgreementPendingUpgrade ? r.createElement(o.b, {
                        to: "/" + this.props.match.params.channelName + "/dashboard/settings/revenue/upgrade-terms"
                    }) : r.createElement(Tr, {
                        channelName: this.props.match.params.channelName,
                        currentUserID: this.props.data.currentUser.id,
                        onboardEntity: this.props.data.currentUser.payoutInvite.category
                    })
                }, Object.defineProperty(t.prototype, "hasAgreementPendingUpgrade", {
                    get: function() {
                        return !!this.props.data.currentUser.payoutInvite.workflow && this.props.data.currentUser.payoutInvite.workflow.currentStep === Qe.WorkflowState.AGREEMENT_PENDING_UPGRADE
                    },
                    enumerable: !0,
                    configurable: !0
                }), t
            }(r.Component),
            Pr = Object(i.compose)(Object(u.a)(Nr))(Cr),
            Ar = n("17w3"),
            wr = (n("mHbH"), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    return this.props.data.loading ? r.createElement(S._8, {
                        padding: {
                            y: 5
                        }
                    }, r.createElement(S._10, {
                        fillContent: !0
                    })) : this.props.data.error ? r.createElement(S._8, {
                        padding: {
                            y: 5
                        }
                    }, r.createElement(l.a, null)) : this.isOnboardingComplete ? r.createElement(r.Fragment, null, r.createElement(h.a, {
                        title: Object(p.d)("Change Payout Method", "PayoutSettingsPage"),
                        linkToParent: "/" + this.props.match.params.channelName + "/dashboard/settings/revenue"
                    }), r.createElement(mr, {
                        enableTwoFactorMessage: Object(p.d)("You must enable two-factor authentication to change your payout method.", "PayoutSettingsPage")
                    }, r.createElement(U.a, null, r.createElement(Ct.a, null, r.createElement(Sn, {
                        tipaltiURL: this.tipaltiURL
                    }))))) : r.createElement(d.a, null)
                }, Object.defineProperty(t.prototype, "isOnboardingComplete", {
                    get: function() {
                        return !!this.props.data.currentUser.payoutInvite.workflow && this.props.data.currentUser.payoutInvite.workflow.currentStep === Qe.WorkflowState.COMPLETED
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
            }(r.Component)),
            Ir = Object(i.compose)(Object(u.a)(Ar))(wr),
            Rr = n("vBst"),
            xr = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onChange = function(e) {
                        t.props.onChange(t.props.index, e.currentTarget.value)
                    }, t
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    return r.createElement(y.a, {
                        label: this.props.label
                    }, r.createElement(S._4, {
                        type: S._5.Text,
                        maxLength: 50,
                        placeholder: Object(p.d)("Enter the name of your subscription ticket", "SubsNameSettingsSection"),
                        value: this.props.displayName,
                        onChange: this.onChange
                    }), r.createElement(W.a, {
                        text: this.props.description
                    }))
                }, t
            }(r.Component),
            jr = n("Kz5W"),
            Dr = n("81je"),
            Fr = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    if (n.state = {
                            displayNames: new Array,
                            saveStatus: E.b.NoChanges
                        }, n.onDisplayNameChange = function(e, t) {
                            return a.__awaiter(n, void 0, void 0, function() {
                                var n;
                                return a.__generator(this, function(a) {
                                    return (n = this.state.displayNames.slice())[e] = t, this.setState({
                                        displayNames: n,
                                        saveStatus: E.b.DirtyChanges
                                    }), [2]
                                })
                            })
                        }, n.onClickSave = function() {
                            return a.__awaiter(n, void 0, void 0, function() {
                                var e, t, n, r;
                                return a.__generator(this, function(i) {
                                    switch (i.label) {
                                        case 0:
                                            if (!this.props.data.user || !this.props.data.user.id || !this.props.data.user.subscriptionProducts) return [2];
                                            e = E.b.Working, this.setState({
                                                saveStatus: e
                                            }), t = function(t) {
                                                var r, i, o;
                                                return a.__generator(this, function(a) {
                                                    switch (a.label) {
                                                        case 0:
                                                            if (!(r = n.props.data.user.subscriptionProducts[t])) return [2, "continue"];
                                                            i = {
                                                                targetUserID: n.props.data.user.id,
                                                                id: r.id,
                                                                displayName: n.state.displayNames[t]
                                                            }, a.label = 1;
                                                        case 1:
                                                            return a.trys.push([1, 3, , 4]), [4, n.props.updateSubscriptionProduct(Object(v.a)(i))];
                                                        case 2:
                                                            return o = a.sent(), Object(v.e)(jr, {
                                                                login: n.props.match.params.channelName
                                                            }, function(e) {
                                                                if (e && e.user && e.user.subscriptionProducts && o.data.updateSubscriptionProduct) {
                                                                    var n = e.user.subscriptionProducts[t],
                                                                        a = o.data.updateSubscriptionProduct.product;
                                                                    if (n && a) return n.id = a.id, n.displayName = a.displayName, e
                                                                }
                                                            }), e = E.b.Success, [3, 4];
                                                        case 3:
                                                            return a.sent(), e = E.b.Error, [3, 4];
                                                        case 4:
                                                            return [2]
                                                    }
                                                })
                                            }, n = this, r = 0, i.label = 1;
                                        case 1:
                                            return r < this.state.displayNames.length ? [5, t(r)] : [3, 4];
                                        case 2:
                                            i.sent(), i.label = 3;
                                        case 3:
                                            return r++, [3, 1];
                                        case 4:
                                            return this.setState({
                                                saveStatus: e
                                            }), [2]
                                    }
                                })
                            })
                        }, n.sortByTier = function(e) {
                            var t = e.slice();
                            return t.sort(function(e, t) {
                                var n = parseInt(e.tier || "0", 10);
                                n = n || 0;
                                var a = parseInt(t.tier || "0", 10);
                                return n - (a = a || 0)
                            }), t
                        }, n.createSubPlanName = function(e) {
                            switch (e) {
                                case Rr.a.Tier1:
                                    return Object(p.d)("Tier 1 Subscription Plan Name", "SubsNameSettingsPage");
                                case Rr.a.Tier2:
                                    return Object(p.d)("TIer 2 Subscription Plan Name", "SubsNameSettingsPage");
                                case Rr.a.Tier3:
                                    return Object(p.d)("Tier 3 Subscription Plan Name", "SubsNameSettingsPage");
                                default:
                                    return Object(p.d)("Subscription Plan Name", "SubsNameSettingsPage")
                            }
                        }, n.createSubPlanDescription = function(e) {
                            return e ? Object(p.d)("Name of your {price} subscription plan that will be visible to everyone", {
                                price: e
                            }, "SubsNameSettingsPage") : Object(p.d)("Name of your subscription plan that will be visible to everyone", "SubsNameSettingsPage")
                        }, !t.data.loading && !t.data.error && t.data.user && t.data.user.subscriptionProducts) {
                        var r = n.sortByTier(t.data.user.subscriptionProducts);
                        n.state = {
                            displayNames: r.map(function(e) {
                                return e.displayName
                            }),
                            saveStatus: E.b.NoChanges
                        }
                    }
                    return n
                }
                return a.__extends(t, e), t.prototype.componentWillReceiveProps = function(e) {
                    if (!e.data.loading && !e.data.error && e.data.user && e.data.user.subscriptionProducts) {
                        var t = this.sortByTier(e.data.user.subscriptionProducts);
                        this.setState({
                            displayNames: t.map(function(e) {
                                return e.displayName
                            }),
                            saveStatus: E.b.NoChanges
                        })
                    }
                }, t.prototype.render = function() {
                    if (!this.props.data.user || !this.props.data.user.subscriptionProducts) return this.props.data.loading ? r.createElement(S._10, {
                        fillContent: !0
                    }) : this.props.data.error ? r.createElement(l.a, null) : null;
                    var e = r.createElement(V.a, {
                        status: this.state.saveStatus,
                        onClickSave: this.onClickSave
                    });
                    return r.createElement(S._8, null, r.createElement(h.a, {
                        title: Object(p.d)("Subscription Information", "SubsNameSettingsPage"),
                        linkToParent: "/" + this.props.match.params.channelName + "/dashboard/settings/revenue"
                    }), r.createElement(U.a, {
                        footer: e
                    }, this.renderProducts()))
                }, t.prototype.renderProducts = function() {
                    var e = this;
                    return this.props.data.user && this.props.data.user.subscriptionProducts ? this.props.data.user.subscriptionProducts.map(function(t, n) {
                        if (!t) return null;
                        var a = e.state.displayNames[n],
                            i = t.id,
                            o = e.createSubPlanName(t.tier),
                            s = e.createSubPlanDescription(t.price || void 0);
                        return 0 === n && (o = e.createSubPlanName(t.tier), s = e.createSubPlanDescription()), r.createElement(xr, {
                            key: i,
                            index: n,
                            label: o,
                            displayName: a,
                            onChange: e.onDisplayNameChange,
                            description: s
                        })
                    }) : null
                }, t
            }(r.Component),
            Mr = Object(g.d)(Object(u.a)(jr, {
                options: function(e) {
                    return {
                        variables: {
                            login: e.match.params.channelName
                        }
                    }
                }
            }), Object(u.a)(Dr, {
                name: "updateSubscriptionProduct"
            }))(Fr),
            Lr = n("3ecc"),
            Ur = n("yOH8"),
            Br = function(e) {
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
                        return a.__awaiter(t, void 0, void 0, function() {
                            return a.__generator(this, function(e) {
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
                        return a.__awaiter(t, void 0, void 0, function() {
                            var e, t, n, r;
                            return a.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        return this.props.data.currentUser.payoutInvite.category === Qe.OnboardEntity.StandardPartner || this.props.data.currentUser.payoutInvite.category === Qe.OnboardEntity.PremiumPartner ? (n = this.props.data.currentUser.programAgreement || "", e = n && n.type, t = n && n.version) : (e = this.props.data.currentUser.payoutInvite.category, t = "v1"), r = a.__assign({}, Object(v.a)({
                                            type: e,
                                            version: t
                                        })), [4, this.props.acceptProgramAgreement(r)];
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
                return a.__extends(t, e), t.prototype.render = function() {
                    return this.props.data.loading || this.state.redirecting ? r.createElement(S._8, {
                        padding: {
                            y: 5
                        }
                    }, r.createElement(S._10, {
                        fillContent: !0
                    })) : this.props.data.error ? r.createElement(S._8, {
                        padding: {
                            y: 5
                        }
                    }, r.createElement(l.a, null)) : this.hasAgreementPendingUpgrade ? r.createElement(r.Fragment, null, r.createElement(h.a, {
                        title: this.headerTitle,
                        linkToParent: "/" + this.props.match.params.channelName + "/dashboard/settings/revenue"
                    }), r.createElement(mr, {
                        enableTwoFactorMessage: Object(p.d)("You must enable two-factor authentication to accept your agreement.", "UpgradeTermsPage")
                    }, r.createElement(U.a, null, r.createElement(Ct.a, null, r.createElement(S._35, {
                        borderMarked: !0,
                        padding: 2,
                        elevation: 1
                    }, this.renderAgreement)), this.requiresParentConsent && r.createElement(cn, {
                        updateParentName: this.updateParentName,
                        updateParentConfirmation: this.updateParentConfirmation
                    }), r.createElement(S._35, {
                        padding: 2,
                        background: S.n.Alt2
                    }, r.createElement(S.v, {
                        size: S.z.Large,
                        state: this.state.processingAgreement ? S.A.Loading : S.A.Default,
                        onClick: this.handleAgreeClick,
                        disabled: this.proceedButtonDisabled || this.state.processingAgreement
                    }, Object(p.d)("Agree", "UpgradeTermsPage")))))) : r.createElement(d.a, null)
                }, Object.defineProperty(t.prototype, "headerTitle", {
                    get: function() {
                        switch (this.props.data.currentUser.payoutInvite.category) {
                            case Qe.OnboardEntity.Affiliate:
                                return Object(p.d)("Agree to the Twitch Affiliate Agreement", "UpgradeTermsPage");
                            case Qe.OnboardEntity.StandardPartner:
                            case Qe.OnboardEntity.PremiumPartner:
                                return Object(p.d)("Agree to the Twitch Partner Agreement", "UpgradeTermsPage");
                            default:
                                return ""
                        }
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "hasAgreementPendingUpgrade", {
                    get: function() {
                        return !!this.props.data.currentUser.payoutInvite.workflow && this.props.data.currentUser.payoutInvite.workflow.currentStep === Qe.WorkflowState.AGREEMENT_PENDING_UPGRADE
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "renderAgreement", {
                    get: function() {
                        switch (this.props.data.currentUser.payoutInvite.category) {
                            case Qe.OnboardEntity.Affiliate:
                                return r.createElement(on, null);
                            case Qe.OnboardEntity.StandardPartner:
                            case Qe.OnboardEntity.PremiumPartner:
                                var e = this.props.data.currentUser.programAgreement;
                                return e && r.createElement(mn, {
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
                        return Object(an.differenceInYears)(new Date, e) < 18
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
            }(r.Component),
            Vr = Object(i.compose)(Object(u.a)(Ur), Object(u.a)(Lr, {
                name: "acceptProgramAgreement"
            }), o.f)(Br),
            Wr = function() {
                return r.createElement(r.Fragment, null, r.createElement(S._2, {
                    margin: {
                        bottom: 1
                    }
                }, r.createElement(S.Q, {
                    type: S._49.H4,
                    bold: !0
                }, Object(p.d)("Custom Partner Agreement", "CustomPartnerAgreement"))), r.createElement(S.Q, {
                    type: S._49.P
                }, Object(p.d)("Please contact <x:link>support</x:link> for a copy of your active Twitch Partner Agreement.", {
                    "x:link": function(e) {
                        return r.createElement(S.O, {
                            to: "https://help.twitch.tv/customer/portal/emails/new",
                            targetBlank: !0
                        }, e)
                    }
                }, "CustomPartnerAgreement")))
            };
        ! function(e) {
            e.AFFILIATE = "AFFILIATE", e.EXTENSIONS_DEVELOPER = "EXTENSIONS_DEVELOPER", e.PARTNER = "PARTNER"
        }(Sr || (Sr = {})),
        function(e) {
            e.CUSTOM = "CUSTOM", e.LEGACY = "LEGACY", e.PREMIUM = "PREMIUM", e.STANDARD = "STANDARD"
        }(kr || (kr = {})),
        function(e) {
            e.AFFILIATE = "AFFILIATE", e.CUSTOM_PARTNER = "CUSTOM_PARTNER", e.EXTENSIONS_DEVELOPER = "EXTENSIONS_DEVELOPER", e.PREMIUM_PARTNER = "PREMIUM_PARTNER", e.STANDARD_PARTNER = "STANDARD_PARTNER"
        }(_r || (_r = {})),
        function(e) {
            e.AGREEMENT_NOT_STARTED = "AGREEMENT_NOT_STARTED", e.AGREEMENT_PENDING_UPGRADE = "AGREEMENT_PENDING_UPGRADE", e.CANCELED = "CANCELED", e.COMPLETED = "COMPLETED", e.PAYOUT_METHOD_NOT_STARTED = "PAYOUT_METHOD_NOT_STARTED", e.PAYOUT_METHOD_PENDING = "PAYOUT_METHOD_PENDING", e.REGISTRATION_NOT_STARTED = "REGISTRATION_NOT_STARTED", e.REVIEW_PENDING = "REVIEW_PENDING", e.ROYALTY_TAX_INTERVIEW_ACTION_REQUIRED = "ROYALTY_TAX_INTERVIEW_ACTION_REQUIRED", e.ROYALTY_TAX_INTERVIEW_FAILED = "ROYALTY_TAX_INTERVIEW_FAILED", e.ROYALTY_TAX_INTERVIEW_MISMATCH = "ROYALTY_TAX_INTERVIEW_MISMATCH", e.ROYALTY_TAX_INTERVIEW_NOT_STARTED = "ROYALTY_TAX_INTERVIEW_NOT_STARTED", e.ROYALTY_TAX_INTERVIEW_PENDING = "ROYALTY_TAX_INTERVIEW_PENDING", e.SERVICE_TAX_INTERVIEW_ACTION_REQUIRED = "SERVICE_TAX_INTERVIEW_ACTION_REQUIRED", e.SERVICE_TAX_INTERVIEW_FAILED = "SERVICE_TAX_INTERVIEW_FAILED", e.SERVICE_TAX_INTERVIEW_MISMATCH = "SERVICE_TAX_INTERVIEW_MISMATCH", e.SERVICE_TAX_INTERVIEW_NOT_STARTED = "SERVICE_TAX_INTERVIEW_NOT_STARTED", e.SERVICE_TAX_INTERVIEW_PENDING = "SERVICE_TAX_INTERVIEW_PENDING"
        }(Or || (Or = {}));
        var Qr = n("kB8u");
        var Yr, Gr, zr = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    return this.props.data.loading ? r.createElement(S._8, {
                        padding: {
                            y: 5
                        }
                    }, r.createElement(S._10, {
                        fillContent: !0
                    })) : this.props.data.error ? r.createElement(S._8, {
                        padding: {
                            y: 5
                        }
                    }, r.createElement(l.a, null)) : this.canAccessViewTermsPage ? r.createElement(r.Fragment, null, r.createElement(h.a, {
                        title: Object(p.d)("View Active Partner Agreement", "ViewTermsPage"),
                        linkToParent: "/" + this.props.match.params.channelName + "/dashboard/settings/revenue"
                    }), r.createElement(mr, {
                        enableTwoFactorMessage: Object(p.d)("You must enable two-factor authentication to view your agreement.", "ViewTermsPage")
                    }, r.createElement(U.a, null, r.createElement(Ct.a, null, r.createElement(S._35, {
                        borderMarked: !0,
                        padding: 2,
                        elevation: 1
                    }, this.renderAgreement))))) : r.createElement(d.a, null)
                }, Object.defineProperty(t.prototype, "canAccessViewTermsPage", {
                    get: function() {
                        var e = this.props.data.currentUser;
                        return !!e && function(e, t) {
                            if (!e || !t) return !1;
                            if (t.workflow.currentStep === Or.AGREEMENT_PENDING_UPGRADE) return !1;
                            var n = e.find(function(e) {
                                return e.category === Sr.PARTNER && e.isReceivingRevenue
                            });
                            return !(!(n && n.tags && n.tags.includes(kr.LEGACY) && t) || t.isLegacy) || !(n && n.tags && (n.tags.includes(kr.STANDARD) || n.tags.includes(kr.PREMIUM)) && t && t.category === _r.CUSTOM_PARTNER) && !!n
                        }(e.payoutPlans && e.payoutPlans.map(function(e) {
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
                        if (t.isLegacy || t.category === _r.CUSTOM_PARTNER) return r.createElement(Wr, null);
                        if (t.category === _r.STANDARD_PARTNER || t.category === _r.PREMIUM_PARTNER) {
                            var n = this.props.data.currentUser && this.props.data.currentUser.programAgreement;
                            return n && r.createElement(mn, {
                                body: n.body
                            })
                        }
                    },
                    enumerable: !0,
                    configurable: !0
                }), t
            }(r.Component),
            Hr = Object(i.compose)(Object(u.a)(Qr))(zr);
        ! function(e) {
            e.AFFILIATE = "AFFILIATE", e.CUSTOM_PARTNER = "CUSTOM_PARTNER", e.EXTENSIONS_DEVELOPER = "EXTENSIONS_DEVELOPER", e.PREMIUM_PARTNER = "PREMIUM_PARTNER", e.STANDARD_PARTNER = "STANDARD_PARTNER", e.UNPAID_PARTNER = "UNPAID_PARTNER"
        }(Yr || (Yr = {})),
        function(e) {
            e.AFFILIATE = "AFFILIATE", e.EXTENSIONS_DEVELOPER = "EXTENSIONS_DEVELOPER", e.PARTNER = "PARTNER"
        }(Gr || (Gr = {}));
        var qr = n("3+pE"),
            Xr = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    var e = this.props.data,
                        t = e.loading,
                        n = e.channel,
                        a = e.currentUser;
                    return a && n ? this.isChannelOwner || this.isStaff ? n.payoutInvite && n.payoutInvite.category !== Yr.UNPAID_PARTNER ? (this.props.latencyTracking.reportInteractive(), r.createElement(c.b, null, r.createElement(S._8, {
                        padding: 2,
                        fullHeight: !0
                    }, r.createElement(s.e, null, r.createElement(o.c, {
                        path: "/:channelName/dashboard/settings/revenue",
                        exact: !0,
                        component: bt
                    }), this.isChannelOwner && r.createElement(o.c, {
                        path: "/:channelName/dashboard/settings/revenue/payout-onboarding",
                        component: Pr
                    }), this.isChannelOwner && r.createElement(o.c, {
                        path: "/:channelName/dashboard/settings/revenue/payouts",
                        component: Ir
                    }), this.isChannelOwner && r.createElement(o.c, {
                        path: "/:channelName/dashboard/settings/revenue/upgrade-terms",
                        component: Vr
                    }), this.isChannelOwner && r.createElement(o.c, {
                        path: "/:channelName/dashboard/settings/revenue/view-terms",
                        component: Hr
                    }), (this.isPaidAffiliate || this.isPaidPartner) && r.createElement(o.c, {
                        path: "/:channelName/dashboard/settings/revenue/cheer",
                        component: K
                    }), (this.isPaidAffiliate || this.isPaidPartner) && r.createElement(o.c, {
                        path: "/:channelName/dashboard/settings/revenue/cheermotes",
                        component: ye
                    }), (this.isPaidAffiliate || this.isPaidPartner) && r.createElement(o.c, {
                        path: "/:channelName/dashboard/settings/revenue/cheerbadges",
                        component: B
                    }), (this.isPaidAffiliate || this.isPaidPartner) && r.createElement(o.c, {
                        path: "/:channelName/dashboard/settings/revenue/game-commerce",
                        component: Le
                    }), (this.isPaidAffiliate || this.isPaidPartner) && r.createElement(o.c, {
                        path: "/:channelName/dashboard/settings/revenue/game-commerce-v2",
                        component: We
                    }), (this.isPaidAffiliate || this.isPaidPartner) && r.createElement(o.c, {
                        path: "/:channelName/dashboard/settings/revenue/merch-by-amazon",
                        component: en
                    }), (this.isPaidAffiliate || this.isPaidPartner) && r.createElement(o.c, {
                        path: "/:channelName/dashboard/settings/revenue/subscription/ticket",
                        component: Mr
                    }), this.isPaidPartner && r.createElement(o.c, {
                        path: "/:channelName/dashboard/settings/revenue/subscription/badges",
                        component: Jt
                    }), r.createElement(o.c, {
                        component: d.a
                    }))))) : r.createElement(S._8, {
                        fullHeight: !0
                    }, r.createElement(d.a, null)) : r.createElement(o.b, {
                        to: "/" + a.login + "/dashboard"
                    }) : t ? r.createElement(S._8, {
                        fullHeight: !0
                    }, r.createElement(S._10, {
                        fillContent: !0
                    })) : r.createElement(S._8, {
                        fullHeight: !0
                    }, r.createElement(l.a, null))
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
                            return e.category === Gr.AFFILIATE && e.isReceivingRevenue
                        }))
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "isPaidPartner", {
                    get: function() {
                        return !!(this.props.data.channel && this.props.data.channel.payoutPlans && this.props.data.channel.payoutPlans.find(function(e) {
                            return e.category === Gr.PARTNER && e.isReceivingRevenue
                        }))
                    },
                    enumerable: !0,
                    configurable: !0
                }), t
            }(r.Component),
            Kr = Object(i.compose)(Object(m.d)("DashboardRevenueSettingsRoot"), Object(u.a)(qr, {
                options: function(e) {
                    return {
                        variables: {
                            channelName: e.match.params.channelName
                        }
                    }
                }
            }))(Xr);
        n.d(t, "DashboardRevenueSettingsRootComponent", function() {
            return Xr
        }), n.d(t, "DashboardRevenueSettingsRoot", function() {
            return Kr
        })
    }
});
//# sourceMappingURL=pages.dashboard-revenue-settings-a6805e21f6f99a8b3c1f2bc3e6ea3b2a.js.map