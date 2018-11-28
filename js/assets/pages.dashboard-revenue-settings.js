(window.webpackJsonp = window.webpackJsonp || []).push([
    [171], {
        "+UBe": function(e, t) {
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
                                }]
                            }
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 140
                }
            };
            n.loc.source = {
                body: "query DashboardRevenueSettingsIndexPage($channelName: String!) {\nchannel: user(login: $channelName) {\nid\nroles {\nisAffiliate\nisPartner\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        "+WWT": function(e, t) {
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
        "+ZoN": function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "DashboardRevenueSettingsPayoutInfoBrick"
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
                                                value: "isStaff"
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
                    end: 136
                }
            };
            n.loc.source = {
                body: "query DashboardRevenueSettingsPayoutInfoBrick {\ncurrentUser {\nid\nlogin\nroles {\nisAffiliate\nisExtensionsDeveloper\nisPartner\nisStaff\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        "/CKs": function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "CheerSettingsForm_GetBitsOnboardedSettings"
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
                                                        value: "hasSignedBitsAmendment"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "isOnboarded"
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
                    end: 157
                }
            };
            n.loc.source = {
                body: "query CheerSettingsForm_GetBitsOnboardedSettings($login: String!) {\nuser(login: $login) {\nid\nsettings {\ncheer {\nid\nhasSignedBitsAmendment\nisOnboarded\n}\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        "/HQc": function(e, t) {
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
                body: "query DashboardRevenueSettingsRoot($channelName: String!) {\ncurrentUser {\nid\nlogin\nroles {\nisStaff\n}\npayoutInvite {\nid\ncategory\n}\n}\nchannel: user(login: $channelName) {\nid\nroles {\nisAffiliate\nisExtensionsDeveloper\nisPartner\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        "/Onm": function(e, t) {
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
                                        }]
                                    }
                                }]
                            }
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 435
                }
            };
            n.loc.source = {
                body: "query PayoutOnboardingAgreement_CurrentUser($withAgreement: Boolean!) {\ncurrentUser {\nid\nroles {\nisPartner\n}\npayoutPlans {\ncategory\nisReceivingRevenue\ntags\n}\nprogramAgreement @include(if: $withAgreement) {\ntype\nversion\nbody\n}\npayoutInvite {\nid\nisLegacy\nworkflow {\nid\nregistration {\nbirthdate\ncity\ncompanyName\ncountryCode\nemail\nfirstName\nlastName\nmiddleName\npostal\nstateCode\nstreetAddress\nstreetAddress2\nparentName\nparentEmail\n}\n}\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        "/ZC1": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return o
            });
            var a = n("mrSG"),
                i = n("q1tI"),
                r = n("Ue10"),
                o = (n("sL9O"), function(e) {
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
                        return i.createElement(r.Z, {
                            dragOver: this.state.isDraggingOver,
                            error: this.props.error
                        }, i.createElement(r.Qa, {
                            position: r.kb.Absolute,
                            attachTop: !0,
                            attachLeft: !0,
                            fullWidth: !0,
                            fullHeight: !0,
                            zIndex: r.jc.Above
                        }, i.createElement("input", {
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
                }(i.Component))
        },
        "/uk9": function(e, t, n) {},
        "0dF/": function(e, t) {
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
        "1YV1": function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "LoyaltyBadgesCurrentSection_Query"
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
                body: "query LoyaltyBadgesCurrentSection_Query ($login: String!) {\nuser(login: $login) {\nid\nroles {\nisPartner\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        "1lFv": function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "TaxPreviewReference_CurrentUser"
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
                    end: 230
                }
            };
            n.loc.source = {
                body: "query TaxPreviewReference_CurrentUser {\ncurrentUser {\nid\nlogin\npayoutInvite {\nid\nworkflow {\nid\nregistration {\ncity\ncompanyName\ncountryCode\nemail\nfirstName\nlastName\nmiddleName\npostal\nstateCode\nstreetAddress\nstreetAddress2\n}\n}\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        "3R7m": function(e, t) {
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
        "3hKJ": function(e, t, n) {
            "use strict";
            var a = n("q1tI"),
                i = n("Ue10"),
                r = function(e) {
                    return a.createElement(i.Fb, {
                        className: "settings-page-header",
                        borderTop: !0,
                        borderRight: !0,
                        borderLeft: !0,
                        borderRadius: {
                            topLeft: i.x.Medium,
                            topRight: i.x.Medium
                        },
                        background: i.r.Base
                    }, a.createElement(i.Va, {
                        linkTo: e.linkToParent,
                        onClick: e.onClick,
                        type: i.Wa.Alpha
                    }, a.createElement(i.Ya, {
                        display: i.X.Flex,
                        flexWrap: i.Ba.NoWrap
                    }, a.createElement(i.Ya, {
                        display: i.X.Flex,
                        padding: {
                            x: 1
                        }
                    }, a.createElement(i.tb, {
                        asset: i.ub.AngleLeft,
                        height: 20,
                        width: 20
                    })), a.createElement(i.Ya, {
                        flexGrow: 1,
                        margin: 2
                    }, a.createElement(i.W, {
                        bold: !0,
                        fontSize: i.Ca.Size4
                    }, e.title), a.createElement(i.W, {
                        color: i.O.Alt2
                    }, e.description)))))
                };
            n.d(t, "a", function() {
                return r
            })
        },
        "3rX6": function(e, t, n) {},
        "4F2d": function(e, t) {
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
        "4VZt": function(e, t, n) {},
        "5Omc": function(e, t, n) {},
        "66IC": function(e, t, n) {
            "use strict";
            n.r(t);
            var a = n("mrSG"),
                i = n("q1tI"),
                r = n("oJmH"),
                o = n("4p7I"),
                s = n("mLw1"),
                l = n("jKe7"),
                d = n("ZDlU"),
                c = n("LA8z"),
                u = n("yR8l"),
                m = n("DMoW"),
                p = n("GnwI"),
                g = n("fvjX"),
                h = n("/7QA"),
                b = n("V+GM"),
                f = n("NvVO"),
                v = n("2xye"),
                y = n("geRD"),
                S = n("EMHe"),
                E = n("rwxT"),
                k = n("Ww25"),
                N = n("EpBn"),
                O = n("3hKJ"),
                T = n("BK8n"),
                C = n("7PeK"),
                P = n("Ue10"),
                I = (n("o5vO"), n("I1TM")),
                A = 10,
                _ = "prefix",
                w = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            prefix: t.props.prefix || "",
                            saveStatus: S.b.NoChanges
                        }, t.renderBanner = function(e) {
                            return e === m.w.REJECTED ? i.createElement(P.Ya, {
                                className: "emoticon-prefix__rejected-prefix-banner",
                                padding: {
                                    y: 1,
                                    x: 2
                                },
                                margin: {
                                    bottom: 1
                                }
                            }, Object(h.d)("Your prefix has been rejected. Please choose another one.", "EmoticonPrefix")) : i.createElement(P.Ya, {
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
                                n = 0 === t.state.prefix.length ? _ : t.state.prefix;
                            return i.createElement(N.a, {
                                label: Object(h.d)("Unique Prefix", "EmoticonPrefix")
                            }, i.createElement(P.Sa, {
                                type: P.Ua.Text,
                                disabled: e === m.w.PENDING,
                                maxLength: A,
                                placeholder: _,
                                value: t.state.prefix,
                                onChange: t.onPrefixChange
                            }), i.createElement(k.a, {
                                text: Object(h.d)("Prefix must begin with a lowercase letter. Prefix must be 3-10 characters in length, all lowercase. Numbers may follow first character.\nExample of how it will work: {prefix}Emotecode", {
                                    prefix: n
                                }, "EmoticonPrefix")
                            }))
                        }, t.renderPendingMessage = function() {
                            return t.props.prefixState === m.w.PENDING && i.createElement(T.a, null, i.createElement(P.W, {
                                bold: !0
                            }, Object(h.d)("Your prefix has been submitted for approval. Thank you for your patience.", "EmoticonPrefix")))
                        }, t.onPrefixChange = function(e) {
                            var n = e.currentTarget.value;
                            (0 === n.length || n[0].match(/^[a-z]+$/)) && (0 === n.length || n.match(/^[0-9a-z]+$/)) ? 0 !== n.length && n.length < 3 ? t.setState({
                                prefix: n,
                                saveStatus: S.b.NoChanges
                            }) : t.setState({
                                prefix: n,
                                saveStatus: S.b.DirtyChanges
                            }): t.setState({
                                saveStatus: S.b.NoChanges
                            })
                        }, t.onClickSave = function() {
                            return a.__awaiter(t, void 0, void 0, function() {
                                var e, t;
                                return a.__generator(this, function(n) {
                                    switch (n.label) {
                                        case 0:
                                            e = S.b.Working, this.setState({
                                                saveStatus: e
                                            }), t = Object(y.a)({
                                                channelID: this.props.channelId,
                                                name: this.state.prefix
                                            }), n.label = 1;
                                        case 1:
                                            return n.trys.push([1, 3, , 4]), [4, this.props.submitEmoticon(t)];
                                        case 2:
                                            return n.sent(), this.props.refetch && this.props.refetch(), e = S.b.Success, [3, 4];
                                        case 3:
                                            return n.sent(), e = S.b.Error, [3, 4];
                                        case 4:
                                            return this.setState({
                                                saveStatus: e
                                            }), [2]
                                    }
                                })
                            })
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        var e = this.props.prefixState,
                            t = null;
                        e !== m.w.PENDING && (t = i.createElement(E.a, {
                            status: this.state.saveStatus,
                            onClickSave: this.onClickSave
                        }));
                        var n = i.createElement(O.a, {
                            title: Object(h.d)("Emoticon Code Prefix", "EmoticonPrefix"),
                            description: Object(h.d)("Prefix that will be prepended before your emoticon's unique code", "EmoticonPrefix"),
                            linkToParent: "/" + this.props.channelName + "/dashboard/settings/revenue"
                        });
                        return i.createElement(i.Fragment, null, this.renderBanner(e), i.createElement(C.a, {
                            header: n,
                            footer: t
                        }, this.renderPrefixSection(), this.renderPendingMessage()))
                    }, t
                }(i.Component),
                F = Object(g.compose)(Object(u.a)(I, {
                    name: "submitEmoticon"
                }))(w),
                x = n("yvrX"),
                R = n("b6Yk");

            function D(e, t, n, i) {
                return a.__awaiter(this, void 0, void 0, function() {
                    var r, o;
                    return a.__generator(this, function(a) {
                        switch (a.label) {
                            case 0:
                                return [4, R.a.post("v" + h.a.defaultAPIVersion + "/subscriptions/" + e + "/emoticons", {
                                    body: {
                                        code_suffix: i,
                                        product_id: t,
                                        image28_id: n[0],
                                        image56_id: n[1],
                                        image112_id: n[2]
                                    }
                                })];
                            case 1:
                                if (r = a.sent(), (o = r.body).error) throw new Error(o.error.error_code);
                                if (o.emoticon) return [2, {
                                    emoticonID: o.emoticon.id
                                }];
                                throw new Error("Unkown Error")
                        }
                    })
                })
            }
            var j, U = n("/ZC1"),
                L = n("PZVp"),
                M = (n("/uk9"), ["image/*"]);
            ! function(e) {
                e[e.BadImageDimensionsError = 0] = "BadImageDimensionsError", e[e.BadImageError = 1] = "BadImageError", e[e.TimeoutError = 2] = "TimeoutError", e[e.UnknownError = 3] = "UnknownError", e[e.None = 4] = "None", e[e.Uploading = 5] = "Uploading", e[e.Success = 6] = "Success"
            }(j || (j = {}));
            var B, Y = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        status: j.None,
                        url: "",
                        attempts: 0,
                        isUploading: !1
                    }, t.resetEmote = function() {
                        t.setState({
                            url: "",
                            status: j.None,
                            attempts: 0,
                            isUploading: !1
                        })
                    }, t.getErrorText = function() {
                        switch (t.state.status) {
                            case j.BadImageError:
                                return Object(h.d)("Bad PNG file", "EmotesUploadPicker");
                            case j.UnknownError:
                                return Object(h.d)("Something went wrong. Please try again!", "EmotesUploadPicker");
                            case j.TimeoutError:
                                return Object(h.d)("Upload took too long. Please try again!", "EmotesUploadPicker");
                            case j.BadImageDimensionsError:
                                return Object(h.d)("PNG must be {width} x {height}px", {
                                    width: t.props.size,
                                    height: t.props.size
                                }, "EmotesUploadPicker");
                            default:
                                return
                        }
                    }, t.onImageInputChange = function(e) {
                        return a.__awaiter(t, void 0, void 0, function() {
                            var t, n, i, r, o = this;
                            return a.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        return null === e ? (this.setState({
                                            status: j.None
                                        }), [2]) : this.state.attempts > 2 ? (this.setState({
                                            status: j.UnknownError,
                                            attempts: 0
                                        }), [2]) : (this.setState(function(e) {
                                            return {
                                                url: "",
                                                attempts: e.attempts + 1,
                                                status: j.Uploading
                                            }
                                        }), [4, this.uploadEmoticon(e[0])]);
                                    case 1:
                                        return t = a.sent(), n = t.url, i = t.uploadId, r = t.imageId, this.unsubscribe = h.l.subscribe({
                                            topic: "upload." + i,
                                            onMessage: function(t) {
                                                switch (o.unsubscribe(), null !== o.timeout && (clearTimeout(o.timeout), o.timeout = null), t.status) {
                                                    case L.a.POSTPROCESS_COMPLETE:
                                                    case L.a.COMPLETE:
                                                        return o.setState({
                                                            url: n,
                                                            status: j.Success
                                                        }), void o.props.uploadEmote(r, o.props.size);
                                                    case L.a.WIDTH_VALIDATION_FAILED:
                                                    case L.a.HEIGHT_VALIDATION_FAILED:
                                                        return void o.setState({
                                                            status: j.BadImageDimensionsError
                                                        });
                                                    case L.a.IMAGE_FORMAT_VALIDATION_FAILED:
                                                        return void o.setState({
                                                            status: j.BadImageError
                                                        });
                                                    default:
                                                        return null !== o.timeout && (clearTimeout(o.timeout), o.timeout = null), o.unsubscribe(), o.onImageInputChange(e)
                                                }
                                            }
                                        }), this.timeout = setTimeout(function() {
                                            o.unsubscribe(), o.setState({
                                                status: j.TimeoutError
                                            })
                                        }, 5e3), [2]
                                }
                            })
                        })
                    }, t.uploadEmoticon = function(e) {
                        return a.__awaiter(t, void 0, Promise, function() {
                            var t, n;
                            return a.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        return [4, function(e, t) {
                                            return a.__awaiter(this, void 0, Promise, function() {
                                                return a.__generator(this, function(n) {
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
                                        return t = i.sent(), n = decodeURI(t.upload_configuration.upload_url), [4, fetch(n, {
                                            method: "PUT",
                                            body: e
                                        })];
                                    case 2:
                                        return i.sent(), [2, {
                                            url: t.upload_configuration.image_url,
                                            uploadId: t.upload_configuration.upload_id,
                                            imageId: t.upload_configuration.image_id
                                        }]
                                }
                            })
                        })
                    }, t
                }
                return a.__extends(t, e), t.prototype.componentWillUnmount = function() {
                    void 0 !== this.unsubscribe && this.unsubscribe(), null !== this.timeout && (clearTimeout(this.timeout), this.timeout = null)
                }, t.prototype.render = function() {
                    var e = this.getErrorText(),
                        t = null;
                    return t = "" === this.state.url && this.state.status === j.None ? i.createElement(P.Ya, {
                        className: "emotes-upload-picker__image-preview"
                    }, i.createElement(P.Ya, null, i.createElement(P.tb, {
                        asset: P.ub.Plus,
                        type: P.vb.Alt2,
                        height: 15,
                        width: 15
                    }))) : this.state.status === j.Uploading ? i.createElement(P.Ya, null, i.createElement(P.ab, {
                        fillContent: !0
                    })) : i.createElement(P.Ya, {
                        className: "emotes-upload-picker__image-preview emotes-upload-picker__size-" + this.props.size,
                        position: P.kb.Relative
                    }, this.state.isUploading ? i.createElement(P.ab, null) : i.createElement("img", {
                        src: "" + this.state.url
                    })), i.createElement(P.Fb, {
                        padding: {
                            x: 2,
                            y: 2
                        },
                        display: P.X.InlineBlock
                    }, i.createElement(P.Ya, {
                        margin: {
                            top: 1
                        }
                    }, i.createElement(P.Ya, {
                        className: "emotes-upload-picker__container",
                        display: P.X.InlineFlex,
                        flexDirection: P.Aa.Column,
                        position: P.kb.Relative
                    }, i.createElement(U.a, {
                        allowedFileTypes: M,
                        error: void 0 !== e,
                        onFilesSubmitted: this.onImageInputChange
                    }, i.createElement(P.Ya, {
                        padding: .5
                    }, e ? i.createElement(P.W, {
                        color: P.O.Error,
                        wordBreak: P.ic.BreakWord
                    }, e) : t))), i.createElement(P.W, null, Object(h.d)("{width} x {height}px", {
                        width: this.props.size,
                        height: this.props.size
                    }, "EmotesUploadPicker"))))
                }, t
            }(i.Component);
            ! function(e) {
                e[e.Pending = 0] = "Pending", e[e.None = 1] = "None", e[e.Success = 2] = "Success", e[e.CodeNotUnique = 3] = "CodeNotUnique", e[e.Error = 4] = "Error"
            }(B || (B = {}));
            var W, V = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            code: "",
                            pickers: [],
                            status: B.None
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
                            return a.__awaiter(t, void 0, void 0, function() {
                                var e, t, n, i;
                                return a.__generator(this, function(a) {
                                    switch (a.label) {
                                        case 0:
                                            this.setState({
                                                status: B.Pending
                                            }), e = [this.state.emote28 || "", this.state.emote56 || "", this.state.emote112 || ""], a.label = 1;
                                        case 1:
                                            return a.trys.push([1, 4, , 5]), [4, this.props.uploadEmoticon(this.props.channelId, this.props.productId, e, this.state.code && this.transformCode(this.state.code) || "")];
                                        case 2:
                                            return a.sent(), this.setState({
                                                code: "",
                                                emote28: "",
                                                emote56: "",
                                                emote112: "",
                                                status: B.Success
                                            }), [4, this.props.refresh()];
                                        case 3:
                                            for (a.sent(), this.forceUpdate(), t = 0, n = this.state.pickers; t < n.length; t++) n[t].resetEmote();
                                            return [3, 5];
                                        case 4:
                                            return (i = a.sent()) && "CODE_NOT_UNIQUE" === i.message ? this.setState({
                                                status: B.CodeNotUnique
                                            }) : this.setState({
                                                status: B.Error
                                            }), [3, 5];
                                        case 5:
                                            return [2]
                                    }
                                })
                            })
                        }, t.setPickerRef = function(e) {
                            return t.setState(function(t, n) {
                                return t.pickers.push(e), {
                                    pickers: t.pickers
                                }
                            }), 0
                        }, t.renderPicker = function(e) {
                            return i.createElement(Y, {
                                key: e,
                                ref: t.setPickerRef,
                                channelId: t.props.channelId,
                                size: e,
                                uploadEmote: t.uploadEmote
                            })
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        return i.createElement(P.Ya, {
                            margin: {
                                top: 1
                            }
                        }, this.renderStatus(), i.createElement(P.Ya, {
                            margin: {
                                bottom: 1
                            }
                        }, this.renderPicker(28), this.renderPicker(56), this.renderPicker(112)), i.createElement(P.Ya, {
                            margin: {
                                y: 1
                            }
                        }, i.createElement(N.a, {
                            label: Object(h.d)("Unique Code", "EmotesUploader")
                        }, i.createElement(P.Sa, {
                            type: P.Ua.Text,
                            value: this.state.code,
                            onChange: this.onChange
                        }))), i.createElement(P.Ya, {
                            margin: {
                                y: 1
                            }
                        }, i.createElement(N.a, {
                            label: Object(h.d)("Full Emoticon Code Preview", "EmotesUploader")
                        }, this.props.emoticonPrefix, this.state.code && this.transformCode(this.state.code))), i.createElement(P.Ya, {
                            margin: {
                                y: 1
                            }
                        }, i.createElement(N.a, {
                            label: ""
                        }, i.createElement(P.z, {
                            disabled: this.submitDisabled,
                            onClick: this.onClick,
                            "data-test-selector": "upload-emoticon-button"
                        }, Object(h.d)("Submit Changes", "EmotesUploader")))))
                    }, t.prototype.renderStatus = function() {
                        return this.state.status === B.Error ? i.createElement(P.Fb, {
                            "data-test-selector": "upload-emoticon-error",
                            borderTop: !0,
                            borderRight: !0,
                            borderBottom: !0,
                            padding: 1,
                            margin: {
                                top: 1
                            },
                            className: "disable-gift-modal__error"
                        }, i.createElement(P.W, null, Object(h.d)("Something went wrong and your request could not be processed at this time. Please try again later.", "EmotesUploader"))) : this.state.status === B.CodeNotUnique ? i.createElement(P.Fb, {
                            "data-test-selector": "upload-emoticon-code-invalid",
                            borderTop: !0,
                            borderRight: !0,
                            borderBottom: !0,
                            padding: 1,
                            margin: {
                                top: 1
                            },
                            className: "disable-gift-modal__error"
                        }, i.createElement(P.W, null, Object(h.d)("An emoticon with the same code already exists.", "EmotesUploader"))) : this.state.status === B.Success ? i.createElement(P.Fb, {
                            "data-test-selector": "upload-emoticon-success",
                            borderTop: !0,
                            borderRight: !0,
                            borderBottom: !0,
                            padding: 1,
                            margin: {
                                top: 1
                            },
                            className: "disable-gift-modal"
                        }, i.createElement(P.W, null, Object(h.d)("Emoticon was successfully uploaded!", "EmotesUploader"))) : null
                    }, Object.defineProperty(t.prototype, "submitDisabled", {
                        get: function() {
                            return this.state.status === B.Pending || !(this.state.emote112 && this.state.emote56 && this.state.emote28 && this.state.code)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t.prototype.transformCode = function(e) {
                        return e.charAt(0).toUpperCase() + e.slice(1)
                    }, t
                }(i.Component),
                z = (n("N9yH"), function(e) {
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
                    return a.__extends(t, e), t.prototype.render = function() {
                        var e = this.props,
                            t = e.isEditing,
                            n = e.emoticon,
                            a = i.createElement(P.Ya, {
                                margin: {
                                    left: 1,
                                    right: 2
                                }
                            }, i.createElement(P.N, {
                                label: "",
                                checked: this.state.isChecked,
                                "data-id": n.id,
                                onChange: this.selectForDelete
                            })),
                            r = n.state && "PENDING" === n.state ? Object(h.d)("( Pending )", "ChatEmoticonsSettingsItem") : "";
                        return i.createElement(P.Zb, {
                            display: P.X.Flex,
                            align: P.ac.Center,
                            label: n.token + r,
                            direction: P.bc.Bottom
                        }, i.createElement(P.Ya, {
                            display: P.X.InlineBlock,
                            className: "emote-item__img"
                        }, i.createElement(P.S, {
                            alt: Object(h.d)("Emoticon", "ChatEmoticonsSettingsItem"),
                            src: "https://static-cdn.jtvnw.net/emoticons/v1/" + n.id + "/1.0"
                        })), t ? a : null)
                    }, t
                }(i.Component)),
                q = (n("qulQ"), function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        var e = this,
                            t = this.props,
                            n = t.isEditing,
                            a = t.emoticons,
                            r = t.products,
                            o = a.map(function(t, a) {
                                return i.createElement(P.Ya, {
                                    display: P.X.InlineBlock,
                                    key: t.id,
                                    margin: {
                                        y: .5,
                                        right: .5
                                    }
                                }, i.createElement(z, {
                                    emoticon: t,
                                    toggleEmoteForDeletion: e.props.toggleEmoteForDeletion,
                                    isEditing: n
                                }))
                            }),
                            s = this.props.emoticonLimit - o.length;
                        if (s > 0)
                            for (var l = 0; l < s; l++) o.push(i.createElement(P.Ya, {
                                display: P.X.InlineBlock,
                                key: l,
                                margin: {
                                    y: .5,
                                    right: .5
                                },
                                position: P.kb.Relative
                            }, i.createElement("div", {
                                className: "emoticons-list__empty"
                            }, i.createElement(P.Z, null))));
                        var d = r.map(function(t, a) {
                                var r = null;
                                if (0 === t.emotes.length) r = i.createElement(P.Fb, {
                                    display: P.X.InlineBlock,
                                    key: a,
                                    margin: {
                                        y: .5,
                                        right: .5
                                    },
                                    position: P.kb.Relative
                                }, i.createElement("div", {
                                    className: "emoticons-list__empty"
                                }, i.createElement(P.Z, null)));
                                else {
                                    var o = t.emotes[0];
                                    r = i.createElement(i.Fragment, null, i.createElement(P.Ya, {
                                        display: P.X.InlineBlock,
                                        key: o.id
                                    }, i.createElement(z, {
                                        emoticon: o,
                                        toggleEmoteForDeletion: e.props.toggleEmoteForDeletion,
                                        isEditing: n
                                    })), i.createElement(P.Ya, {
                                        position: P.kb.Relative,
                                        margin: {
                                            left: .5
                                        },
                                        display: P.X.InlineBlock,
                                        className: "emoticons-list__price"
                                    }, i.createElement(P.W, null, t.price)))
                                }
                                return i.createElement(P.Ya, {
                                    display: P.X.InlineBlock,
                                    key: a,
                                    margin: {
                                        right: 1
                                    }
                                }, r)
                            }),
                            c = Object(h.d)("Emoticons {a}/{b}", {
                                a: a.length,
                                b: this.props.emoticonLimit
                            }, "EmoticonsList"),
                            u = i.createElement(N.a, {
                                label: Object(h.d)("Upload Progress", "EmoticonsList")
                            }, i.createElement(P.Ya, {
                                margin: {
                                    top: 1,
                                    bottom: 2
                                }
                            }, i.createElement(P.W, null, Object(h.d)("Mission: Get {num} Subscriber Points", {
                                num: this.props.maxSubScore
                            }, "EmoticonsList"))), i.createElement(P.Ya, {
                                margin: {
                                    y: 1
                                }
                            }, i.createElement(P.Ya, {
                                display: P.X.InlineBlock
                            }, i.createElement(P.W, null, Object(h.d)("Reward", "EmoticonsList"), ":")), i.createElement(P.Ya, {
                                display: P.X.InlineBlock
                            }, i.createElement(P.W, null, "+", this.props.nextEmoticonLimit - this.props.emoticonLimit, " ", Object(h.d)("Emoticon Slot(s)", "EmoticonsList")))), i.createElement(P.nb, {
                                mask: !0,
                                value: this.props.currentSubScore / this.props.maxSubScore * 100,
                                size: P.pb.Default
                            }), i.createElement(P.Ya, {
                                margin: {
                                    top: 1,
                                    bottom: 2
                                }
                            }, i.createElement(P.W, null, this.props.currentSubScore, "/", this.props.maxSubScore, " ", Object(h.d)("Subscriber Points", "EmoticonsList"))));
                        return i.createElement(i.Fragment, null, i.createElement(N.a, {
                            label: c
                        }, o), i.createElement(N.a, {
                            label: Object(h.d)("Additional Emoticons", "EmoticonsList")
                        }, d, i.createElement(P.Ya, {
                            margin: {
                                y: 1
                            }
                        }, i.createElement(P.W, null, Object(h.d)("1 extra emoticon for $9.99 subscribers, and 1 extra for $24.99 subscribers.", "EmoticonsList")), i.createElement(P.W, null, Object(h.d)("$24.99 subscribers will have access to both emoticons.", "EmoticonsList")))), this.props.nextEmoticonLimit > 0 ? u : null)
                    }, t
                }(i.Component)),
                G = (n("5Omc"), n("W6a3"));
            ! function(e) {
                e[e.None = 0] = "None", e[e.Error = 1] = "Error", e[e.Success = 2] = "Success"
            }(W || (W = {}));
            var X = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            activeTab: 0,
                            isEditing: !1,
                            emotesDeleteQueue: [],
                            deleteStatus: W.None
                        }, t.renderContent = function() {
                            if (t.props.data.loading) return i.createElement(P.ab, {
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
                                    uploadEmoticon: D
                                }) : i.createElement(P.Ya, {
                                    margin: {
                                        y: 2
                                    }
                                }, Object(h.d)("You’ve already uploaded an emoticon for your {price} subscription. Please feel free to swap an emoticon for a new one by clicking edit, selecting the emoticon(s) you wish to remove, clicking delete, then submitting a new emoticon in the sizes specified.", {
                                    price: o.price
                                }, "ChatEmoticonsSettingsPage"));
                                var d = t.props.data.user.subscriberScore.nextEmoteLimit || 0,
                                    c = t.props.data.user.subscriberScore.next || 0;
                                return i.createElement(i.Fragment, null, t.renderDeleteError(), t.goodStanding(), i.createElement(P.Fb, {
                                    className: "chat-emoticons-settings-page__actions"
                                }, t.state.isEditing ? t.editActions() : i.createElement(P.z, {
                                    onClick: t.toggleEmotesEditing
                                }, Object(h.d)("Edit", "ChatEmoticonsSettingsPage"))), i.createElement(P.Ya, {
                                    padding: {
                                        bottom: 2
                                    }
                                }, i.createElement(q, {
                                    emoticonLimit: t.props.data.user.subscriberScore.currentEmoteLimit,
                                    nextEmoticonLimit: d,
                                    currentSubScore: t.props.data.user.subscriberScore.current,
                                    maxSubScore: c,
                                    emoticons: n,
                                    products: r,
                                    channelName: t.props.channelName,
                                    isEditing: t.state.isEditing,
                                    toggleEmoteForDeletion: t.toggleEmoteForDeletion
                                })), i.createElement(P.Ya, {
                                    padding: {
                                        top: 1,
                                        bottom: 2,
                                        left: 2,
                                        right: 2
                                    }
                                }, i.createElement("h3", null, i.createElement(P.W, null, Object(h.d)("Upload Emoticons", "ChatEmoticonsSettingsPage"))), i.createElement(P.Ya, {
                                    margin: {
                                        top: 3
                                    }
                                }, i.createElement(P.Hb, null, t.getTabs())), s))
                            }
                            return t.renderPageError()
                        }, t.renderPageError = function() {
                            return i.createElement(d.a, {
                                message: Object(h.d)("Failed to get emote settings. Please try again later", "ChatEmoticonsSettingsPage")
                            })
                        }, t.getTabs = function() {
                            return t.props.data.user && t.props.data.user.subscriptionProducts ? t.props.data.user.subscriptionProducts.map(function(e, n) {
                                return e ? i.createElement(P.Gb, {
                                    key: e.tier,
                                    active: t.state.activeTab === n,
                                    "data-tab-target": e.tier,
                                    onClick: t.toggleActiveTab
                                }, i.createElement(P.W, null, Object(h.d)("Tier {n}", {
                                    n: n + 1
                                }, "ChatEmoticonsSettingsPage"))) : null
                            }) : null
                        }, t.goodStanding = function() {
                            return t.props.data.user && t.props.data.user.isInGoodStanding ? i.createElement(P.Fb, {
                                className: "chat-emoticons-settings-page__goodstanding",
                                background: P.r.Alt,
                                color: P.O.Alt,
                                padding: 1,
                                margin: {
                                    x: "auto",
                                    top: 2
                                },
                                border: !0
                            }, Object(h.d)("As a Partner in good standing with the ToS, you can add emotes without going through a manual review. Please keep in mind that the <x:link>same emote rules</x:link> still apply.", {
                                "x:link": function(e) {
                                    return i.createElement(P.U, {
                                        to: "https://help.twitch.tv/customer/portal/articles/2348985"
                                    }, e)
                                }
                            }, "ChatEmoticonsSettingsPage")) : null
                        }, t.editActions = function() {
                            return i.createElement(i.Fragment, null, i.createElement(P.z, {
                                type: P.F.Alert,
                                disabled: 0 === t.state.emotesDeleteQueue.length,
                                onClick: t.deleteEmotes
                            }, Object(h.d)("Delete", "ChatEmoticonsSettingsPage")), i.createElement(P.z, {
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
                            return a.__awaiter(t, void 0, void 0, function() {
                                var e, t, n;
                                return a.__generator(this, function(i) {
                                    switch (i.label) {
                                        case 0:
                                            if (0 === this.state.emotesDeleteQueue.length) return [2];
                                            e = 0, t = this.state.emotesDeleteQueue, i.label = 1;
                                        case 1:
                                            if (!(e < t.length)) return [3, 7];
                                            n = t[e], i.label = 2;
                                        case 2:
                                            return i.trys.push([2, 4, 5, 6]), [4, function(e, t) {
                                                return a.__awaiter(this, void 0, void 0, function() {
                                                    return a.__generator(this, function(n) {
                                                        switch (n.label) {
                                                            case 0:
                                                                return [4, R.a.deleteOrThrow("v" + h.a.defaultAPIVersion + "/ticket_products/" + e + "/remove_emoticon", {
                                                                    headers: {
                                                                        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
                                                                        Accept: "application/json"
                                                                    },
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
                                            return i.sent(), [3, 6];
                                        case 4:
                                            return i.sent(), this.setState({
                                                deleteStatus: W.Error
                                            }), [2];
                                        case 5:
                                            return this.setState({
                                                deleteStatus: W.Success,
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
                            return a.__awaiter(t, void 0, void 0, function() {
                                return a.__generator(this, function(e) {
                                    switch (e.label) {
                                        case 0:
                                            return [4, this.props.data.refetch()];
                                        case 1:
                                            return e.sent(), [2, Promise.resolve()]
                                    }
                                })
                            })
                        }, t.toggleActiveTab = function(e) {
                            return a.__awaiter(t, void 0, void 0, function() {
                                var t, n = this;
                                return a.__generator(this, function(a) {
                                    return e.currentTarget.parentElement && this.props.data.user && this.props.data.user.subscriptionProducts && (t = e.currentTarget.parentElement.getAttribute("data-tab-target"), this.props.data.user.subscriptionProducts.forEach(function(e, a) {
                                        e && t === e.tier && n.setState({
                                            activeTab: a
                                        })
                                    })), [2]
                                })
                            })
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        var e = i.createElement(O.a, {
                            title: Object(h.d)("Emotes Settings", "EmotesSettingsPage"),
                            description: Object(h.d)("Emoticons that your subscribers can use in Twitch chat", "EmotesSettingsPage"),
                            linkToParent: "/" + this.props.channelName + "/dashboard/settings/revenue"
                        });
                        return i.createElement(C.a, {
                            header: e
                        }, this.renderContent())
                    }, t.prototype.renderDeleteError = function() {
                        return this.state.deleteStatus === W.Error ? i.createElement(P.Fb, {
                            borderTop: !0,
                            borderRight: !0,
                            borderBottom: !0,
                            padding: 1,
                            margin: {
                                top: 1
                            },
                            className: "disable-gift-modal__error"
                        }, i.createElement(P.W, null, Object(h.d)("Something went wrong and your request could not be processed at this time. Please try again later.", "ChatEmoticonsSettingsPage"))) : null
                    }, t
                }(i.Component),
                Q = Object(g.compose)(Object(u.a)(G, {
                    options: function(e) {
                        return {
                            variables: {
                                login: e.channelName
                            }
                        }
                    }
                }))(X),
                H = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.refetch = function() {
                            t.props.data.refetch()
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.componentDidMount = function() {
                        h.p.setPageTitle(Object(h.d)("Emotes Settings", "ChatEmoticonsPageTitle")), this.props.data.loading && !this.props.data.error || this.props.latencyTracking.reportInteractive()
                    }, t.prototype.componentDidUpdate = function(e) {
                        (e.data.loading && !this.props.data.loading || this.props.data.error) && this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        return this.props.data.user && this.props.data.user.id && this.props.data.user.emoticonPrefix && this.props.data.user.emoticonPrefix.state ? this.props.data.user && this.props.data.user.emoticonPrefix.state === m.w.ACTIVE ? i.createElement(Q, {
                            channelName: this.props.match.params.channelName,
                            emoticonPrefix: this.props.data.user.emoticonPrefix.name
                        }) : i.createElement(F, {
                            channelId: this.props.data.user.id,
                            channelName: this.props.match.params.channelName,
                            prefix: this.props.data.user.emoticonPrefix.name,
                            prefixState: this.props.data.user.emoticonPrefix.state,
                            refetch: this.refetch
                        }) : this.props.data.loading ? i.createElement(P.ab, {
                            fillContent: !0
                        }) : i.createElement(d.a, {
                            message: Object(h.d)("Failed to get emote settings. Please try again later.", "ChatEmoticonsPage")
                        })
                    }, t
                }(i.Component),
                J = Object(g.compose)(Object(p.b)("ChatEmoticonsPage", {
                    destination: f.a.DashboardSettingsRevenueChatEmoticons
                }), Object(b.a)({
                    location: v.PageviewLocation.DashboardSettingsRevenueChatEmoticons
                }), Object(u.a)(x, {
                    options: function(e) {
                        return {
                            variables: {
                                login: e.match.params.channelName
                            }
                        }
                    }
                }))(H),
                $ = n("3R7m"),
                Z = n("o6p4"),
                K = function(e) {
                    return i.createElement(P.Fb, {
                        display: P.X.Flex,
                        flexDirection: P.Aa.Row,
                        background: P.r.Alt,
                        alignItems: P.f.Center,
                        padding: 1
                    }, i.createElement(P.Ya, {
                        margin: {
                            right: 1
                        },
                        display: P.X.Flex,
                        alignContent: P.e.Center
                    }, i.createElement(P.Zb, {
                        label: e.title,
                        "data-test-selector": "tooltip-selector"
                    }, i.createElement("img", {
                        alt: e.title,
                        src: e.imageSrc
                    }))), i.createElement(P.Ya, {
                        flexGrow: 1
                    }, i.createElement(P.W, {
                        "data-test-selector": "threshold-selector"
                    }, Object(h.d)("{threshold} Bit Badge", {
                        threshold: Object(h.f)(e.threshold)
                    }, "ChatBadgeTierItem"))), i.createElement(P.Yb, {
                        onChange: e.onToggle,
                        checked: e.checked,
                        "data-test-selector": "toggle-selector"
                    }, Object(h.d)("Edit", "ChatBadgeTierItem")))
                },
                ee = function() {
                    return i.createElement(P.Fb, {
                        padding: 1,
                        display: P.X.Flex,
                        flexDirection: P.Aa.Row
                    }, i.createElement(P.Ya, {
                        padding: {
                            right: 1
                        }
                    }, i.createElement(P.jb, {
                        width: 20,
                        height: 20
                    })), i.createElement(P.Ya, {
                        flexGrow: 1
                    }, i.createElement(P.jb, null)))
                },
                te = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            saveStatus: S.b.NoChanges
                        }, t.renderTierItems = function() {
                            return t.tiers.map(function(e, n) {
                                var a, r;
                                return e && e.badge ? (a = e.badge.id, r = i.createElement(K, {
                                    threshold: e.threshold,
                                    checked: e.isEnabled,
                                    imageSrc: e.badge.image1x,
                                    title: e.badge.title,
                                    onToggle: t.onItemToggle.bind(t, n)
                                })) : (a = n, r = i.createElement(ee, null)), i.createElement(P.Ya, {
                                    margin: {
                                        bottom: 1
                                    },
                                    key: a
                                }, r)
                            })
                        }, t.onItemToggle = function(e, n) {
                            return a.__awaiter(t, void 0, void 0, function() {
                                var t, i, r, o, s, l, d, c, u;
                                return a.__generator(this, function(m) {
                                    switch (m.label) {
                                        case 0:
                                            return t = n.currentTarget.checked, i = this.props, r = i.channelName, o = i.data, s = i.updateBadgeTiers, this.tiers && o.user && o.user.id ? (l = this.tiers[e], d = {
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
                                            }, [4, s(Object(y.b)(d, c))]) : [2];
                                        case 1:
                                            return u = m.sent(), Object(y.e)($, {
                                                login: r
                                            }, function(t) {
                                                return t.user && t.user.settings && t.user.settings.cheer && t.user.settings.cheer.badges && u.data.updateCheerPartnerSettings && u.data.updateCheerPartnerSettings.cheer && u.data.updateCheerPartnerSettings.cheer.badges && (t.user.settings.cheer.badges.tiers[e].isEnabled = u.data.updateCheerPartnerSettings.cheer.badges.tiers[e].isEnabled), t
                                            }), [2]
                                    }
                                })
                            })
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.data.loading && !this.props.data.error || this.props.latencyTracking.reportInteractive()
                    }, t.prototype.componentDidUpdate = function(e) {
                        (e.data.loading && !this.props.data.loading || this.props.data.error) && this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        var e = this.renderTierItems();
                        return i.createElement(N.a, {
                            label: Object(h.d)("Chat Badge Tiers", "ChatBadgeTiersForm")
                        }, i.createElement(P.Ya, {
                            margin: {
                                bottom: 2
                            }
                        }, i.createElement(P.W, null, Object(h.d)("Choose which Cheer Chat Badges are enabled in your channel. Viewers unlock badges based on total Bits used to Cheer for you. The highest unlocked enabled badge will appear next to viewers' names", "ChatBadgeTiersForm"))), i.createElement(P.Ja, {
                            gutterSize: P.Ka.Medium
                        }, i.createElement(P.P, {
                            cols: {
                                default: 12,
                                sm: 6
                            }
                        }, e.slice(0, Math.floor(e.length / 2))), i.createElement(P.P, {
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
                ne = Object(g.compose)(Object(u.a)($, {
                    options: function(e) {
                        return {
                            variables: {
                                login: e.channelName
                            }
                        }
                    }
                }), Object(u.a)(Z, {
                    name: "updateBadgeTiers"
                }), Object(p.b)("ChatBadgeTiersForm"))(te),
                ae = n("ulzF"),
                ie = (n("vyjL"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onFilesSubmitted = function(e) {
                            var n = t.props.onImageSubmit,
                                a = e[0],
                                i = new FileReader;
                            i.onloadend = function() {
                                n && n(i.result)
                            }, i.readAsDataURL(a)
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        var e = this.props,
                            t = e.error,
                            n = e.children;
                        return i.createElement(P.Fb, {
                            position: P.kb.Relative,
                            padding: 5,
                            background: P.r.Alt
                        }, i.createElement(U.a, {
                            allowedFileTypes: [".png"],
                            onFilesSubmitted: this.onFilesSubmitted,
                            error: t
                        }, i.createElement(P.Fb, {
                            position: P.kb.Absolute,
                            attachTop: !0,
                            attachLeft: !0,
                            fullWidth: !0,
                            fullHeight: !0,
                            display: P.X.Flex,
                            flexDirection: P.Aa.Column,
                            alignItems: P.f.Center,
                            justifyContent: P.Xa.Center,
                            className: "chat-badge-drop-zone__content"
                        }, n)))
                    }, t
                }(i.Component));
            var re, oe = function(e, t) {
                    return a.__awaiter(void 0, void 0, void 0, function() {
                        var n, i, r;
                        return a.__generator(this, function(a) {
                            switch (a.label) {
                                case 0:
                                    return [4, function(e) {
                                        return new Promise(function(t, n) {
                                            var a = new Image;
                                            a.onload = function() {
                                                var e = a.height,
                                                    n = a.width;
                                                t({
                                                    height: e,
                                                    width: n
                                                })
                                            }, a.onerror = function() {
                                                n("Failed to load image")
                                            }, a.src = e
                                        })
                                    }(e)];
                                case 1:
                                    return n = a.sent(), i = n.height, r = n.width, [2, i === t.height && r === t.width]
                            }
                        })
                    })
                },
                se = n("v5Wq"),
                le = n("XOYr"),
                de = 18,
                ce = 36,
                ue = 72,
                me = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            selectedIndex: 2,
                            stagedImageURLs: {},
                            saveStatus: S.b.NoChanges,
                            image1xError: !1,
                            image2xError: !1,
                            image4xError: !1
                        }, t.onSelectChange = function(e) {
                            var n = e.currentTarget.selectedIndex;
                            t.setState(function(e) {
                                if (t.tiers) {
                                    var a = t.tiers[n],
                                        i = e.stagedImageURLs[a.threshold];
                                    return {
                                        selectedIndex: n,
                                        saveStatus: i && i.image1x && i.image2x && i.image4x ? S.b.DirtyChanges : S.b.NoChanges
                                    }
                                }
                            })
                        }, t.onNormalImageSubmitted = function(e) {
                            return a.__awaiter(t, void 0, void 0, function() {
                                return a.__generator(this, function(t) {
                                    switch (t.label) {
                                        case 0:
                                            return [4, oe(e, {
                                                height: de,
                                                width: de
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
                                            return [4, oe(e, {
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
                            return a.__awaiter(t, void 0, void 0, function() {
                                return a.__generator(this, function(t) {
                                    switch (t.label) {
                                        case 0:
                                            return [4, oe(e, {
                                                height: ue,
                                                width: ue
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
                                var i;
                                if (t.tiers) {
                                    var r = t.tiers[n.selectedIndex],
                                        o = {};
                                    return e && (o = a.__assign({}, n.stagedImageURLs[r.threshold], e)), {
                                        stagedImageURLs: a.__assign({}, n.stagedImageURLs, (i = {}, i[r.threshold] = o, i)),
                                        saveStatus: o && o.image1x && o.image2x && o.image4x ? S.b.DirtyChanges : S.b.NoChanges,
                                        image1xError: !1,
                                        image2xError: !1,
                                        image4xError: !1
                                    }
                                }
                            })
                        }, t.onRevertButtonClick = function() {
                            return a.__awaiter(t, void 0, void 0, function() {
                                var e, t, n, i, r, o, s, l, d, c = this;
                                return a.__generator(this, function(u) {
                                    switch (u.label) {
                                        case 0:
                                            return e = this.state.selectedIndex, t = this.props, n = t.data, i = t.updateBadgeTierImages, r = t.channelName, this.tiers && n.user && n.user.id ? (o = this.tiers[e]).badge ? (s = {
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
                                            }, [4, i(Object(y.b)(s, l))]) : [2] : [2];
                                        case 1:
                                            return d = u.sent(), Object(y.e)(se, {
                                                login: r
                                            }, function(t) {
                                                if (t.user && t.user.settings && t.user.settings.cheer && t.user.settings.cheer.badges && d.data.updateCheerPartnerSettings && d.data.updateCheerPartnerSettings.cheer && d.data.updateCheerPartnerSettings.cheer.badges) {
                                                    var n = d.data.updateCheerPartnerSettings.cheer.badges.tiers[e],
                                                        i = t.user.settings.cheer.badges.tiers[e];
                                                    n && n.badge && i && i.badge && (i.badge = a.__assign({}, i.badge, n.badge))
                                                }
                                                return c.updateStagedImageURLs(), t
                                            }), [2]
                                    }
                                })
                            })
                        }, t.onSaveButtonClick = function() {
                            return a.__awaiter(t, void 0, void 0, function() {
                                var e, t, n, i, r, o, s, l, d, c, u;
                                return a.__generator(this, function(m) {
                                    switch (m.label) {
                                        case 0:
                                            if (e = this.state, t = e.stagedImageURLs, n = e.selectedIndex, i = this.props, r = i.data, o = i.updateBadgeTierImages, s = i.channelName, !this.tiers || !r.user || !r.user.id) return [2];
                                            if (l = this.tiers[n], !(d = t[l.threshold]).image1x || !d.image2x || !d.image4x) return [2];
                                            c = {
                                                userID: r.user.id,
                                                badges: {
                                                    tiers: [{
                                                        threshold: l.threshold,
                                                        imageData1x: Object(ae.b)(d.image1x),
                                                        imageData2x: Object(ae.b)(d.image2x),
                                                        imageData4x: Object(ae.b)(d.image4x)
                                                    }]
                                                }
                                            }, this.setState({
                                                saveStatus: S.b.Working
                                            }), m.label = 1;
                                        case 1:
                                            return m.trys.push([1, 3, , 4]), [4, o(Object(y.a)(c))];
                                        case 2:
                                            return u = m.sent(), Object(y.e)(se, {
                                                login: s
                                            }, function(e) {
                                                if (e.user && e.user.settings && e.user.settings.cheer && e.user.settings.cheer.badges && u.data.updateCheerPartnerSettings && u.data.updateCheerPartnerSettings.cheer && u.data.updateCheerPartnerSettings.cheer.badges) {
                                                    var t = u.data.updateCheerPartnerSettings.cheer.badges.tiers[n],
                                                        i = e.user.settings.cheer.badges.tiers[n];
                                                    t && t.badge && i && i.badge && (i.badge = a.__assign({}, i.badge, t.badge))
                                                }
                                                return e
                                            }), this.updateStagedImageURLs(), this.setState({
                                                saveStatus: S.b.Success
                                            }), [3, 4];
                                        case 3:
                                            return m.sent(), this.setState({
                                                saveStatus: S.b.Error
                                            }), [3, 4];
                                        case 4:
                                            return [2]
                                    }
                                })
                            })
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.data.loading && !this.props.data.error || this.props.latencyTracking.reportInteractive()
                    }, t.prototype.componentDidUpdate = function(e) {
                        (e.data.loading && !this.props.data.loading || this.props.data.error) && this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        var e = this.state,
                            t = e.selectedIndex,
                            n = e.stagedImageURLs,
                            a = e.saveStatus,
                            r = e.image1xError,
                            o = e.image2xError,
                            s = e.image4xError;
                        if (!this.tiers) return null;
                        var l, d, c, u, m = this.tiers[t];
                        m.badge && m.badge.user && (l = i.createElement(P.z, {
                            onClick: this.onRevertButtonClick,
                            type: P.F.Hollow,
                            fullWidth: !0
                        }, Object(h.d)("Reset to Default Badge", "ChatBadgeUploadForm")), d = m.badge.image1x, c = m.badge.image2x, u = m.badge.image4x);
                        var p = n[m.threshold];
                        return p && (d = p.image1x || d, c = p.image2x || c, u = p.image4x || u), i.createElement(N.a, {
                            label: Object(h.d)("Upload Badge Images", "ChatBadgeUploadForm")
                        }, i.createElement(P.Ja, null, i.createElement(P.P, {
                            cols: {
                                default: 12,
                                sm: 5
                            }
                        }, i.createElement(P.Ab, {
                            onChange: this.onSelectChange,
                            value: String(m.threshold)
                        }, this.tiers.map(function(e) {
                            return i.createElement("option", {
                                key: e.threshold,
                                value: e.threshold,
                                disabled: e.threshold < 1e3
                            }, " ", Object(h.d)("{threshold} Bit Badge", {
                                threshold: Object(h.f)(e.threshold)
                            }, "ChatBadgeUploadForm"))
                        })))), i.createElement(P.Ja, null, i.createElement(P.P, {
                            cols: {
                                default: 12,
                                sm: 8
                            }
                        }, i.createElement(P.Ya, {
                            display: P.X.Flex,
                            justifyContent: P.Xa.Between,
                            margin: {
                                y: 2
                            }
                        }, i.createElement(P.Ya, {
                            display: P.X.InlineFlex,
                            flexDirection: P.Aa.Column,
                            alignItems: P.f.Center
                        }, i.createElement(ie, {
                            onImageSubmit: this.onNormalImageSubmitted,
                            error: r
                        }, d ? i.createElement("img", {
                            src: d,
                            height: 18,
                            width: 18
                        }) : i.createElement(P.tb, {
                            asset: P.ub.Plus,
                            height: 32,
                            width: 32
                        })), i.createElement(P.W, {
                            color: r ? P.O.Error : P.O.Base
                        }, Object(h.d)("18 x 18px", "ChatBadgeUploadForm"))), i.createElement(P.Ya, {
                            display: P.X.InlineFlex,
                            flexDirection: P.Aa.Column,
                            alignItems: P.f.Center
                        }, i.createElement(ie, {
                            onImageSubmit: this.onDoubleImageSubmitted,
                            error: o
                        }, c ? i.createElement("img", {
                            src: c,
                            height: 36,
                            width: 36
                        }) : i.createElement(P.tb, {
                            asset: P.ub.Plus,
                            height: 32,
                            width: 32
                        })), i.createElement(P.W, {
                            color: o ? P.O.Error : P.O.Base
                        }, Object(h.d)("36 x 36px", "ChatBadgeUploadForm"))), i.createElement(P.Ya, {
                            display: P.X.InlineFlex,
                            flexDirection: P.Aa.Column,
                            alignItems: P.f.Center
                        }, i.createElement(ie, {
                            onImageSubmit: this.onQuadrupleImageSubmitted,
                            error: s
                        }, u ? i.createElement("img", {
                            src: u,
                            height: 72,
                            width: 72
                        }) : i.createElement(P.tb, {
                            asset: P.ub.Plus,
                            height: 32,
                            width: 32
                        })), i.createElement(P.W, {
                            color: s ? P.O.Error : P.O.Base
                        }, Object(h.d)("72 x 72px", "ChatBadgeUploadForm")))))), i.createElement(P.Ja, {
                            gutterSize: P.Ka.Medium
                        }, i.createElement(P.P, {
                            cols: 4
                        }, i.createElement(S.a, {
                            status: a,
                            onClick: this.onSaveButtonClick,
                            fullWidth: !0
                        }, Object(h.d)("Upload Badge Images", "ChatBadgeUploadFormSaveButton"))), i.createElement(P.P, {
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
                pe = Object(g.compose)(Object(u.a)(se, {
                    options: function(e) {
                        return {
                            variables: {
                                login: e.channelName
                            }
                        }
                    }
                }), Object(u.a)(le, {
                    name: "updateBadgeTierImages"
                }), Object(p.b)("ChatBadgeUploadForm"))(me),
                ge = n("BZvZ"),
                he = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(t, e), t.prototype.componentDidMount = function() {
                        h.p.setPageTitle(Object(h.d)("Cheer Chat Badge Settings", "CheerBadgesSettingsPageTitle")), this.props.data.loading && !this.props.data.error || this.props.latencyTracking.reportInteractive()
                    }, t.prototype.componentDidUpdate = function(e) {
                        (e.data.loading && !this.props.data.loading || this.props.data.error) && this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        var e = this.props,
                            t = e.match,
                            n = e.data,
                            a = i.createElement(O.a, {
                                title: Object(h.d)("Cheer Chat Badge Settings", "CheerBadgesSettingsPage"),
                                description: Object(h.d)("Custom settings for Cheer chat badges", "CheerBadgesSettingsPage"),
                                linkToParent: "/" + t.params.channelName + "/dashboard/settings/revenue"
                            });
                        return i.createElement(C.a, {
                            header: a
                        }, i.createElement(ne, {
                            channelName: t.params.channelName
                        }), n.user && n.user.roles && n.user.roles.isPartner && i.createElement(pe, {
                            channelName: t.params.channelName
                        }))
                    }, t
                }(i.Component),
                be = Object(g.compose)(Object(p.b)("CheerBadgesSettingsPage", {
                    destination: f.a.DashboardSettingsRevenueCheerBadges
                }), Object(b.a)({
                    location: v.PageviewLocation.DashboardSettingsRevenueCheerBadges
                }), Object(u.a)(ge, {
                    options: function(e) {
                        return {
                            variables: {
                                login: e.match.params.channelName
                            }
                        }
                    }
                }))(he),
                fe = n("G1cX"),
                ve = n("eDVu"),
                ye = n("WQCf"),
                Se = n("/aPz");
            ! function(e) {
                e.ALLTIME = "ALLTIME", e.MONTH = "MONTH", e.WEEK = "WEEK"
            }(re || (re = {}));
            var Ee, ke = n("TEIt"),
                Ne = n("7LUr"),
                Oe = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onLeaderboardEnabledCheckBoxClick = function(e) {
                            return a.__awaiter(t, void 0, void 0, function() {
                                var t, n, i, r, o, s, l, d, c;
                                return a.__generator(this, function(a) {
                                    switch (a.label) {
                                        case 0:
                                            if (t = e.currentTarget.checked, n = this.props, i = n.setPinnedCheerSettings, r = n.data, o = n.channelName, !(r.user && r.user.id && r.user.settings && r.user.settings.cheer)) return [2];
                                            s = {
                                                userID: r.user.id,
                                                leaderboard: {
                                                    isEnabled: t
                                                }
                                            }, l = fe(r.user.settings.cheer, function(e) {
                                                return e.leaderboard
                                            }, function(e) {
                                                return e.isEnabled = t, e
                                            }), d = {
                                                updateCheerPartnerSettings: {
                                                    __typename: "UpdateCheerPartnerSettingsPayload",
                                                    cheer: l
                                                }
                                            }, a.label = 1;
                                        case 1:
                                            return a.trys.push([1, 3, , 4]), [4, i(Object(y.b)(s, d))];
                                        case 2:
                                            return c = a.sent(), Object(y.e)(Ne, {
                                                login: o
                                            }, function(e) {
                                                return e.user && e.user.settings && e.user.settings.cheer && c.data.updateCheerPartnerSettings && (e.user.settings.cheer.leaderboard.isEnabled = c.data.updateCheerPartnerSettings.cheer.leaderboard.isEnabled), e
                                            }), [3, 4];
                                        case 3:
                                            return a.sent(), [3, 4];
                                        case 4:
                                            return [2]
                                    }
                                })
                            })
                        }, t.onLeaderboardTimePeriodRadioButtonClick = function(e) {
                            return a.__awaiter(t, void 0, void 0, function() {
                                var t, n, i, r, o, s, l, d, c;
                                return a.__generator(this, function(a) {
                                    switch (a.label) {
                                        case 0:
                                            if (t = e.currentTarget.value, n = this.props, i = n.setPinnedCheerSettings, r = n.data, o = n.channelName, !(r.user && r.user.id && r.user.settings && r.user.settings.cheer)) return [2];
                                            s = {
                                                userID: r.user.id,
                                                leaderboard: {
                                                    timePeriod: t
                                                }
                                            }, l = fe(r.user.settings.cheer, function(e) {
                                                return e.leaderboard
                                            }, function(e) {
                                                return e.timePeriod = t, e
                                            }), d = {
                                                updateCheerPartnerSettings: {
                                                    __typename: "UpdateCheerPartnerSettingsPayload",
                                                    cheer: l
                                                }
                                            }, a.label = 1;
                                        case 1:
                                            return a.trys.push([1, 3, , 4]), [4, i(Object(y.b)(s, d))];
                                        case 2:
                                            return c = a.sent(), Object(y.e)(Ne, {
                                                login: o
                                            }, function(e) {
                                                return e.user && e.user.settings && e.user.settings.cheer && c.data.updateCheerPartnerSettings && (e.user.settings.cheer.leaderboard.timePeriod = c.data.updateCheerPartnerSettings.cheer.leaderboard.timePeriod), e
                                            }), [3, 4];
                                        case 3:
                                            return a.sent(), [3, 4];
                                        case 4:
                                            return [2]
                                    }
                                })
                            })
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.data.loading && !this.props.data.error || this.props.latencyTracking.reportInteractive()
                    }, t.prototype.componentDidUpdate = function(e) {
                        (e.data.loading && !this.props.data.loading || this.props.data.error) && this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        var e = this.props.data,
                            t = !1,
                            n = null;
                        return e.user && e.user.settings && e.user.settings.cheer && (t = e.user.settings.cheer.leaderboard.isEnabled, n = e.user.settings.cheer.leaderboard.timePeriod), i.createElement(C.a, null, i.createElement(N.a, {
                            label: Object(h.d)("Enable Top Cheerers", "PinnedCheerSettings")
                        }, i.createElement(P.N, {
                            label: Object(h.d)("Enable Top Cheerers", "PinnedCheerSettingsCheckBox"),
                            checked: t,
                            onChange: this.onLeaderboardEnabledCheckBoxClick,
                            "data-test-selector": "top-cheerers-checkbox-selector"
                        }), i.createElement(k.a, {
                            text: Object(h.d)("Pin Top Cheerers to the top of your chat.", "PinnedCheerSettings")
                        })), i.createElement(N.a, {
                            label: Object(h.d)("Top Cheerers Time Range", "PinnedCheerSettings")
                        }, i.createElement(P.Ya, null, i.createElement(P.qb, {
                            label: Object(h.d)("Weekly", "PinnedCheerSettings"),
                            value: re.WEEK,
                            checked: n === re.WEEK,
                            onChange: this.onLeaderboardTimePeriodRadioButtonClick
                        })), i.createElement(P.Ya, {
                            margin: {
                                y: 1
                            }
                        }, i.createElement(P.qb, {
                            label: Object(h.d)("Monthly", "PinnedCheerSettings"),
                            value: re.MONTH,
                            checked: n === re.MONTH,
                            onChange: this.onLeaderboardTimePeriodRadioButtonClick
                        })), i.createElement(P.Ya, {
                            margin: {
                                y: 1
                            }
                        }, i.createElement(P.qb, {
                            label: Object(h.d)("All-Time", "PinnedCheerSettings"),
                            value: re.ALLTIME,
                            checked: n === re.ALLTIME,
                            onChange: this.onLeaderboardTimePeriodRadioButtonClick
                        })), i.createElement(k.a, {
                            text: Object(h.d)("Choose Weekly for a leaderboard that automatically resets every Monday 12:01AM PT. Choose Monthly to reset every 1st day of the month. Choose All-Time for a leaderboard that tracks the Top Cheerers in your channel for all time, starting from when Bits launched in June of 2016.", "PinnedCheerSettings")
                        })))
                    }, t
                }(i.Component),
                Te = Object(g.compose)(Object(u.a)(Ne, {
                    options: function(e) {
                        return {
                            variables: {
                                login: e.channelName
                            }
                        }
                    }
                }), Object(u.a)(ke, {
                    name: "setPinnedCheerSettings"
                }), Object(p.b)("PinnedCheerSettingsForm"), Object(ve.a)(function(e) {
                    return {
                        query: Ne,
                        variables: {
                            login: e.channelName
                        },
                        topic: e.data && e.data.user && e.data.user.id ? Object(Se.d)(e.data.user.id) : "",
                        type: ye.c.BitsChannelSettingsEvent,
                        skip: !e.data.user || !e.data.user.id,
                        mutator: function(e, t) {
                            var n = e.updates;
                            return t.user && t.user.settings && t.user.settings.cheer && (void 0 !== n.leaderboard_enabled && (t.user.settings.cheer.leaderboard.isEnabled = n.leaderboard_enabled), void 0 !== n.leaderboard_time_period && (t.user.settings.cheer.leaderboard.timePeriod = re[n.leaderboard_time_period])), t
                        }
                    }
                }))(Oe),
                Ce = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(t, e), t.prototype.componentDidMount = function() {
                        h.p.setPageTitle(Object(h.d)("Pinned and Top Cheers Settings", "CheerSettingsPageTitle"))
                    }, t.prototype.render = function() {
                        var e = this.props.match;
                        return i.createElement(P.Ya, null, i.createElement(O.a, {
                            title: Object(h.d)("Top Cheerers Settings", "CheerSettingsPage"),
                            description: Object(h.d)("Custom settings for Top Cheerers", "CheerSettingsPage"),
                            linkToParent: "/" + e.params.channelName + "/dashboard/settings/revenue"
                        }), i.createElement(Te, {
                            channelName: e.params.channelName
                        }))
                    }, t
                }(i.Component),
                Pe = Object(g.compose)(Object(p.b)("CheerSettingsPage", {
                    autoReportInteractive: !0,
                    destination: f.a.DashboardSettingsRevenueCheer
                }), Object(b.a)({
                    location: v.PageviewLocation.DashboardSettingsRevenueCheer
                }))(Ce),
                Ie = n("Cusz"),
                Ae = n("Akna"),
                _e = (n("Nz9P"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            cheermotesToggleError: !1
                        }, t.onItemToggle = function(e) {
                            return a.__awaiter(t, void 0, void 0, function() {
                                var t, n, i, r, o, s, l, d;
                                return a.__generator(this, function(a) {
                                    switch (a.label) {
                                        case 0:
                                            if (t = e.currentTarget.checked, n = this.props, i = n.setCheermotesEnable, r = n.data, o = n.channelName, !(r.user && r.user.id && r.user.settings && r.user.settings.cheer)) return [2];
                                            s = {
                                                userID: r.user.id,
                                                customPrefix: {
                                                    isEnabled: t
                                                }
                                            }, l = Object(y.a)(s), a.label = 1;
                                        case 1:
                                            return a.trys.push([1, 3, , 4]), [4, i(l)];
                                        case 2:
                                            return d = a.sent(), Object(y.e)(Ae, {
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
                    return a.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.data.loading && !this.props.data.error || this.props.latencyTracking.reportInteractive()
                    }, t.prototype.componentDidUpdate = function(e) {
                        (e.data.loading && !this.props.data.loading || this.props.data.error) && this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        var e = this.props.data,
                            t = this.state.cheermotesToggleError,
                            n = !1,
                            a = i.createElement(P.jb, {
                                width: 100,
                                height: 18
                            });
                        !e.loading && !e.error && e.user && e.user.settings && e.user.settings.cheer && (n = e.user.settings.cheer.customPrefix.isEnabled, a = i.createElement(P.W, {
                            bold: !0
                        }, e.user.settings.cheer.customPrefix.prefix));
                        var r = this.tiers.map(function(e, t) {
                                var n = e.images[0];
                                return i.createElement(P.Fb, {
                                    key: n ? n.id : t,
                                    background: P.r.Alt2,
                                    border: !0,
                                    className: "cheermote-enable-form__cheermote-preview",
                                    margin: {
                                        right: 4 === t ? 0 : 1
                                    },
                                    display: P.X.InlineFlex
                                }, i.createElement("img", {
                                    src: n ? n.url : ""
                                }))
                            }),
                            o = this.tiers.filter(function(e) {
                                return e.images && e.images[0] && e.images[0].url
                            }).length;
                        return i.createElement(N.a, {
                            label: Object(h.d)("Enable Cheermotes", "CheermtoesEnableForm")
                        }, i.createElement(P.Yb, {
                            checked: n,
                            onChange: this.onItemToggle,
                            error: t
                        }), i.createElement(P.Ya, {
                            margin: {
                                top: .5
                            }
                        }, i.createElement(P.W, {
                            color: P.O.Alt2
                        }, Object(h.d)("Upload images for all tiers to enable your Cheermote.", "CheermotesEnableForm"))), i.createElement(P.Ya, {
                            padding: {
                                y: 2
                            }
                        }, i.createElement(P.W, {
                            color: P.O.Alt2
                        }, Object(h.d)("Cheermote Code", "CheermotesEnableForm")), a), i.createElement(P.Ya, null, i.createElement(P.W, {
                            type: P.Wb.Span,
                            color: P.O.Alt2
                        }, Object(h.d)("Tiers", "CheermotesEnableForm")), " ", i.createElement(P.W, {
                            type: P.Wb.Span,
                            color: 5 === o ? P.O.Base : P.O.Error
                        }, Object(h.d)("{tierNum}/{totalTiers}", {
                            tierNum: o,
                            totalTiers: 5
                        }, "CheermotesEnableForm")), i.createElement(P.Ja, null, i.createElement(P.P, {
                            cols: 4
                        }, i.createElement(P.Ya, {
                            margin: {
                                top: .5
                            },
                            display: P.X.Flex,
                            justifyContent: P.Xa.Between
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
                we = Object(r.compose)(Object(u.a)(Ae, {
                    name: "data",
                    options: function(e) {
                        return {
                            variables: {
                                login: e.channelName
                            }
                        }
                    }
                }), Object(u.a)(Ie, {
                    name: "setCheermotesEnable"
                }), Object(p.b)("CheermotesEnableForm"))(_e),
                Fe = (n("4VZt"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onFilesSubmitted = function(e) {
                            var n = e[0];
                            t.props.onImageSubmit && t.props.onImageSubmit(n, t.props.dpiScale)
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        var e = this.props.children;
                        return i.createElement(P.Ya, {
                            className: "cheermote-upload-drop-zone",
                            display: P.X.Flex,
                            flexDirection: P.Aa.Column
                        }, i.createElement(P.Fb, {
                            className: "cheermote-upload-drop-zone__drop-zone",
                            position: P.kb.Relative,
                            padding: 5,
                            background: P.r.Alt
                        }, i.createElement(U.a, {
                            allowedFileTypes: [".png", ".gif"],
                            onFilesSubmitted: this.onFilesSubmitted,
                            error: this.props.error
                        }, i.createElement(P.Fb, {
                            position: P.kb.Absolute,
                            attachTop: !0,
                            attachLeft: !0,
                            fullWidth: !0,
                            fullHeight: !0,
                            display: P.X.Flex,
                            flexDirection: P.Aa.Column,
                            alignItems: P.f.Center,
                            justifyContent: P.Xa.Center
                        }, e))), i.createElement(P.Ya, {
                            textAlign: P.Sb.Center,
                            padding: {
                                top: 1
                            }
                        }, i.createElement(P.W, null, Object(h.d)("{dimension} x {dimension}px", {
                            dimension: this.props.dimension
                        }, "CheermoteUploadDropZone"))))
                    }, t
                }(i.Component));

            function xe(e, t) {
                return a.__awaiter(this, void 0, Promise, function() {
                    var n;
                    return a.__generator(this, function(a) {
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
            var Re, De, je, Ue = ((Ee = {})[1] = 28, Ee[1.5] = 42, Ee[2] = 56, Ee[3] = 84, Ee[4] = 112, Ee),
                Le = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onImageSubmitted = function(e, n) {
                            return a.__awaiter(t, void 0, void 0, function() {
                                var t, i, r;
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
                                            return a.trys.push([1, 3, , 4]), [4, xe(this.props.channelID, t)];
                                        case 2:
                                            return i = a.sent(), this.props.onImageSubmitted(this.props.tier, e, i, Ue[n]), [3, 4];
                                        case 3:
                                            return r = a.sent(), this.props.onImageSubmissionError("advanced", r), [3, 4];
                                        case 4:
                                            return [2]
                                    }
                                })
                            })
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        var e = this,
                            t = this.props.errorDimension,
                            n = this.props.images.map(function(n) {
                                var a = Ue[n.dpiScale];
                                return i.createElement(P.Ya, {
                                    key: n.dpiScale,
                                    padding: {
                                        bottom: 1
                                    }
                                }, i.createElement(Fe, {
                                    onImageSubmit: e.onImageSubmitted,
                                    dimension: a,
                                    dpiScale: n.dpiScale,
                                    error: !!e.props.uploadError && !!t && a === t
                                }, n.url ? i.createElement("img", {
                                    src: n.url,
                                    height: a,
                                    width: a
                                }) : i.createElement(P.tb, {
                                    asset: P.ub.Plus,
                                    height: 32,
                                    width: 32
                                })))
                            });
                        return i.createElement(P.Ya, {
                            justifyContent: P.Xa.Between,
                            display: P.X.Flex,
                            flexDirection: P.Aa.Row,
                            flexWrap: P.Ba.Wrap
                        }, n)
                    }, t
                }(i.PureComponent),
                Me = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        return this.props.imageSrc && i.createElement(P.Fb, {
                            background: P.r.Alt,
                            display: P.X.Flex,
                            alignItems: P.f.Center,
                            padding: 1
                        }, i.createElement("img", {
                            src: this.props.imageSrc,
                            height: 28,
                            width: 28
                        }), i.createElement(P.Ya, {
                            padding: {
                                left: 1
                            }
                        }, i.createElement(P.W, null, Object(h.d)("This is a preview of a chat message with your Cheermote!", "CheermotePreviewBar"))))
                    }, t
                }(i.PureComponent),
                Be = (n("EACF"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onImageSubmitted = function(e) {
                            return a.__awaiter(t, void 0, void 0, function() {
                                var t, n, i;
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
                                            return a.trys.push([1, 3, , 4]), [4, xe(this.props.channelID, t)];
                                        case 2:
                                            return n = a.sent(), this.props.onImageSubmitted(this.props.tier, e, n, 112), [3, 4];
                                        case 3:
                                            return i = a.sent(), this.props.onImageSubmissionError("simple", i), [3, 4];
                                        case 4:
                                            return [2]
                                    }
                                })
                            })
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        return i.createElement(Fe, {
                            onImageSubmit: this.onImageSubmitted,
                            dimension: 112,
                            error: !!this.props.uploadError
                        }, this.props.image ? i.createElement("img", {
                            src: this.props.image,
                            height: 112,
                            width: 112
                        }) : i.createElement(P.tb, {
                            asset: P.ub.Plus,
                            height: 32,
                            width: 32
                        }))
                    }, t
                }(i.PureComponent)),
                Ye = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        return i.createElement(P.xb, null, i.createElement(P.yb, {
                            name: this.props.name,
                            value: this.props.left,
                            checked: this.props.selected === this.props.left,
                            label: this.props.leftTitle,
                            onChange: this.props.onToggle,
                            defaultChecked: !0
                        }), i.createElement(P.yb, {
                            name: this.props.name,
                            value: this.props.right,
                            checked: this.props.selected === this.props.right,
                            onChange: this.props.onToggle,
                            label: this.props.rightTitle
                        }))
                    }, t
                }(i.PureComponent);
            n("3rX6");
            ! function(e) {
                e.Simple = "simple", e.Advanced = "advanced"
            }(Re || (Re = {})),
            function(e) {
                e.Light = "light", e.Dark = "dark"
            }(De || (De = {})),
            function(e) {
                e.Animated = "animated", e.Static = "static"
            }(je || (je = {}));
            var We = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        uploadType: Re.Simple,
                        background: De.Light,
                        animation: je.Animated,
                        uploading: !1
                    }, t.onUploadTypeChange = function(e) {
                        var n = e.currentTarget.value,
                            a = je.Animated;
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
                    }, t.onSimpleImageSubmitted = function(e, n, a, i) {
                        t.uploadImageProgress(e, n, a, Re.Simple, i, function(e, n) {
                            t.props.onSimpleImageSubmitted(e, n)
                        })
                    }, t.onAdvancedImageUpload = function(e, n, a, i) {
                        t.uploadImageProgress(e, n, a, Re.Advanced, i, function(e, n) {
                            t.props.onAdvancedImageSubmitted(e, n[0])
                        })
                    }, t.uploadImageProgress = function(e, n, i, r, o, s) {
                        t.unsubscribe = h.l.subscribe({
                            topic: Object(Se.D)(i.uploadID),
                            success: function() {
                                return a.__awaiter(t, void 0, void 0, function() {
                                    var e;
                                    return a.__generator(this, function(t) {
                                        switch (t.label) {
                                            case 0:
                                                return t.trys.push([0, 2, , 3]), this.setState({
                                                    uploading: !0,
                                                    simpleLoadingError: void 0,
                                                    advancedLoadingError: void 0,
                                                    errorDimension: void 0
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
                                                }(i.uploadURL, n)];
                                            case 1:
                                                return t.sent(), [3, 3];
                                            case 2:
                                                return e = t.sent(), this.onCreateUploadRequestError(r, e), [3, 3];
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
                                            case L.a.COMPLETE:
                                                s(e, i.imageURLs), this.setState({
                                                    uploading: !1
                                                }), this.unsubscribe && this.unsubscribe();
                                                break;
                                            case L.a.POSTPROCESS_COMPLETE:
                                                break;
                                            default:
                                                this.handleImageUploadError(n.status, r, o), this.setState({
                                                    uploading: !1
                                                }), this.unsubscribe && this.unsubscribe()
                                        }
                                        return [2]
                                    })
                                })
                            }
                        })
                    }, t.handleImageUploadError = function(e, n, a) {
                        var i;
                        switch (e) {
                            case L.a.FILE_SIZE_VALIDATION_FAILED:
                                i = Object(h.d)("Please make sure you file is under 500kb", "CheermoteUploadArea");
                                break;
                            case L.a.IMAGE_FORMAT_VALIDATION_FAILED:
                                i = Object(h.d)("Please make sure your image is the correct format for uploading", "CheermoteUploadArea");
                                break;
                            case L.a.HEIGHT_VALIDATION_FAILED:
                            case L.a.WIDTH_VALIDATION_FAILED:
                                i = Object(h.d)("Image must be {d} x {d}px", {
                                    d: a
                                }, "CheermoteUploadArea");
                                break;
                            case L.a.ASPECT_RATIO_VALIDATION_FAILED:
                                i = Object(h.d)("Please ensure your image has the correct aspect ratio for the dimension you are uploading", "CheermoteUploadArea");
                                break;
                            case L.a.FEATURE_SERVICE_FAILED:
                                i = Object(h.d)("Failed to save new images. Please try again.", "CheermoteUploadArea");
                                break;
                            default:
                                i = Object(h.d)("Something went wrong. Please try again", "CheermoteUploadArea")
                        }
                        t.setState({
                            simpleLoadingError: n === Re.Simple ? i : void 0,
                            advancedLoadingError: n === Re.Advanced ? i : void 0,
                            errorDimension: a
                        })
                    }, t.onCreateUploadRequestError = function(e, n) {
                        var a = Object(h.d)("An error occurred while creating upload request: {errorMsg}", {
                            errorMsg: n.message
                        }, "CheermoteUploadArea");
                        t.setState({
                            simpleLoadingError: e === Re.Simple ? a : void 0,
                            advancedLoadingError: e === Re.Advanced ? a : void 0
                        })
                    }, t
                }
                return a.__extends(t, e), t.prototype.componentWillUnmount = function() {
                    void 0 !== this.unsubscribe && this.unsubscribe()
                }, t.prototype.render = function() {
                    var e = this;
                    if (!this.props.uploadTier) return i.createElement(P.jb, null);
                    var t = [],
                        n = (t = this.props.uploadTier.images.filter(function(t) {
                            return (t.isAnimated && e.state.animation === je.Animated || !t.isAnimated && e.state.animation === je.Static) && t.theme.toLowerCase() === e.state.background
                        }).slice().sort(function(e, t) {
                            return t.dpiScale - e.dpiScale
                        })).find(function(e) {
                            return 4 === e.dpiScale
                        });
                    return i.createElement(P.Ya, {
                        className: "cheermote-upload-area"
                    }, i.createElement(P.Ya, {
                        display: P.X.Flex,
                        flexDirection: P.Aa.Column
                    }, i.createElement(P.Ya, {
                        display: P.X.Flex
                    }, i.createElement(Ye, {
                        name: "cheermote-upload-wizard-type",
                        selected: this.state.uploadType,
                        left: Re.Simple,
                        leftTitle: Object(h.d)("Simple", "CheermoteUploadArea"),
                        right: Re.Advanced,
                        rightTitle: Object(h.d)("Advanced", "CheermoteUploadArea"),
                        onToggle: this.onUploadTypeChange
                    }), this.state.uploadType === Re.Advanced && i.createElement(P.Ya, {
                        padding: {
                            x: 2
                        }
                    }, i.createElement(Ye, {
                        name: "cheermote-background",
                        selected: this.state.background,
                        left: De.Light,
                        leftTitle: Object(h.d)("Light", "CheermoteUploadArea"),
                        right: De.Dark,
                        rightTitle: Object(h.d)("Dark", "CheermoteUploadArea"),
                        onToggle: this.onBackgroundChange
                    })), this.state.uploadType === Re.Advanced && i.createElement(Ye, {
                        name: "cheermote-animation",
                        selected: this.state.animation,
                        left: je.Animated,
                        leftTitle: Object(h.d)("Animated", "CheermoteUploadArea"),
                        right: je.Static,
                        rightTitle: Object(h.d)("Static", "CheermoteUploadArea"),
                        onToggle: this.onAnimationChange
                    })), i.createElement(P.Ya, {
                        padding: {
                            top: 2
                        }
                    }, this.state.uploadType === Re.Simple && i.createElement(Be, {
                        channelID: this.props.channelID,
                        tier: this.props.uploadTier.bits,
                        image: n && n.url,
                        onImageSubmitted: this.onSimpleImageSubmitted,
                        onImageSubmissionError: this.onCreateUploadRequestError,
                        uploadError: this.state.simpleLoadingError
                    }), this.state.uploadType === Re.Advanced && i.createElement(Le, {
                        channelID: this.props.channelID,
                        images: t,
                        tier: this.props.uploadTier.bits,
                        background: this.state.background,
                        animationType: this.state.animation,
                        onImageSubmitted: this.onAdvancedImageUpload,
                        onImageSubmissionError: this.onCreateUploadRequestError,
                        uploadError: this.state.advancedLoadingError,
                        errorDimension: this.state.errorDimension
                    })), this.state.uploadType === Re.Simple && this.state.simpleLoadingError && i.createElement(P.Fb, {
                        display: P.X.Flex,
                        alignItems: P.f.Center,
                        background: P.r.Alt,
                        padding: 1,
                        margin: {
                            top: 1
                        }
                    }, i.createElement(P.W, {
                        color: P.O.Error
                    }, this.state.simpleLoadingError)), this.state.uploadType === Re.Advanced && this.state.advancedLoadingError && t.length && i.createElement(P.Fb, {
                        display: P.X.Flex,
                        alignItems: P.f.Center,
                        background: P.r.Alt,
                        padding: 1,
                        margin: {
                            top: 1
                        }
                    }, i.createElement(P.W, {
                        color: P.O.Error
                    }, this.state.advancedLoadingError)), n && i.createElement(P.Ya, {
                        padding: {
                            top: 2
                        }
                    }, i.createElement(Me, {
                        imageSrc: n.url
                    }))), this.state.uploading && i.createElement(P.Fb, {
                        className: "cheermote-upload-area__uploading",
                        display: P.X.Flex,
                        flexDirection: P.Aa.Column,
                        alignItems: P.f.Center,
                        justifyContent: P.Xa.Center,
                        position: P.kb.Absolute,
                        attachTop: !0,
                        attachLeft: !0,
                        fullWidth: !0,
                        fullHeight: !0
                    }, i.createElement(P.ab, null), i.createElement(P.Ya, {
                        padding: {
                            top: 2
                        }
                    }, i.createElement(P.W, null, Object(h.d)("Uploading...", "CheermoteUploadArea")))))
                }, t
            }(i.PureComponent);

            function Ve(e, t, n) {
                var a = t.split("/"),
                    i = a[6],
                    r = a[7],
                    o = a[8],
                    s = a[9],
                    l = n ? n.toUpperCase() : r.toUpperCase(),
                    d = "animated" === o;
                return {
                    id: e + ";" + i + ";" + l + ";" + d + ";" + s,
                    dpiScale: parseInt(s, 10),
                    isAnimated: d,
                    theme: l,
                    url: t
                }
            }
            var ze = n("PE/S"),
                qe = (n("ygYl"), function(e) {
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
                            Object(y.e)(ze, {
                                login: t.props.channelName
                            }, function(t) {
                                if (t && t.user) {
                                    var a = t.user && t.user.settings.cheer.customPrefix;
                                    if (a) {
                                        var i = a.prefix,
                                            r = a.tiers.findIndex(function(t) {
                                                return t.bits === e
                                            });
                                        r >= 0 && (t.user.settings.cheer.customPrefix.tiers[r].images = function(e, t) {
                                            return t.map(function(t) {
                                                return Ve(e, t)
                                            }).concat(t.map(function(t) {
                                                return Ve(e, t, "dark")
                                            }))
                                        }(i, n))
                                    }
                                    return t
                                }
                            })
                        }, t.onAdvancedImageSubmitted = function(e, n) {
                            Object(y.e)(ze, {
                                login: t.props.channelName
                            }, function(t) {
                                if (t && t.user) {
                                    var a = t.user && t.user.settings.cheer.customPrefix;
                                    if (a) {
                                        var i = a.prefix,
                                            r = a.tiers.findIndex(function(t) {
                                                return t.bits === e
                                            });
                                        if (r >= 0) {
                                            var o = Ve(i, n),
                                                s = t.user.settings.cheer.customPrefix.tiers[r].images.findIndex(function(e) {
                                                    return e.id === o.id
                                                });
                                            s >= 0 && (t.user.settings.cheer.customPrefix.tiers[r].images[s] = o)
                                        }
                                    }
                                    return t
                                }
                            })
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.data.loading && !this.props.data.error || this.props.latencyTracking.reportInteractive()
                    }, t.prototype.componentDidUpdate = function(e) {
                        (e.data.loading && !this.props.data.loading || this.props.data.error) && this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        var e = this;
                        if (!this.props.data || this.props.data.loading) return i.createElement(P.Ya, {
                            className: "cheermote-upload-form__loading",
                            fullWidth: !0
                        }, i.createElement(P.ab, {
                            fillContent: !0
                        }));
                        if (this.props.data && this.props.data.error || !this.props.data.user) return i.createElement(P.Ya, {
                            className: "cheermote-upload-form__error",
                            fullWidth: !0,
                            justifyContent: P.Xa.Center,
                            textAlign: P.Sb.Center,
                            alignItems: P.f.Center
                        }, i.createElement(P.W, null, Object(h.d)("An unexpected error occurred while loading the upload wizard", "CheermotesUploadForm")));
                        var t = this.tiers.map(function(t) {
                                return i.createElement(P.Gb, {
                                    key: t.id,
                                    active: e.state.activeTab === t.bits,
                                    onClick: e.onTabSelect,
                                    "data-tab-target": t.bits
                                }, t.bits)
                            }),
                            n = this.tiers.find(function(t) {
                                return t.bits === e.state.activeTab
                            });
                        return i.createElement(N.a, {
                            label: Object(h.d)("Upload Cheermote Images", "CheermotesUploadForm")
                        }, i.createElement(P.Ya, {
                            padding: {
                                bottom: 2
                            }
                        }, i.createElement(P.W, null, Object(h.d)('Please upload a 112 x 112px GIF image with a transparent background. Your image will be automatically scaled to smaller sizes. To fine-ture smaller sizes and light/dark mode, turn on "Advanced" option below. (The maximum file size is 500kb)', "CheermotesUploadForm"))), i.createElement(P.Hb, null, t), i.createElement(P.Ya, {
                            padding: {
                                top: 2
                            }
                        }, i.createElement(We, {
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
                Ge = Object(r.compose)(Object(u.a)(ze, {
                    options: function(e) {
                        return {
                            variables: {
                                login: e.channelName
                            }
                        }
                    }
                }), Object(p.b)("CheermotesUploadForm"))(qe),
                Xe = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(t, e), t.prototype.componentDidMount = function() {
                        h.p.setPageTitle(Object(h.d)("Cheermote Settings", "CheermotesSettingsPageTitle"))
                    }, t.prototype.render = function() {
                        var e = this.props.match,
                            t = i.createElement(O.a, {
                                title: Object(h.d)("Custom Cheermote", "CheermotesSettingsPage"),
                                description: Object(h.d)("Custom Cheermote that viewers can use when Cheering in your channel", "CheermotesSettingsPage"),
                                linkToParent: "/" + e.params.channelName + "/dashboard/settings/revenue"
                            });
                        return i.createElement(C.a, {
                            header: t
                        }, i.createElement(we, {
                            channelName: e.params.channelName
                        }), i.createElement(Ge, {
                            channelName: e.params.channelName
                        }))
                    }, t
                }(i.Component),
                Qe = Object(g.compose)(Object(p.b)("CheermotesSettingsPage", {
                    autoReportInteractive: !0,
                    destination: f.a.DashboardSettingsRevenueCheermotes
                }), Object(b.a)({
                    location: v.PageviewLocation.DashboardSettingsRevenueCheermotes
                }))(Xe),
                He = n("/MKj"),
                Je = n("aCAx"),
                $e = n("dWDG"),
                Ze = (n("QtTb"), function(e) {
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
                        return !this.props.data || this.props.data.loading ? null : i.createElement(N.a, {
                            orientation: P.Fa.Horizontal,
                            label: Object(h.d)("Opt in to earn revenue", "CommerceAmendment")
                        }, i.createElement("div", {
                            onClick: this.onAmendmentClick,
                            "data-test-selector": "commerce-amendment-checkbox-wrapper",
                            className: "commerce-amendment__amendment"
                        }, i.createElement(P.N, {
                            "data-test-selector": "commerce-amendment-checkbox",
                            checked: this.state.amendmentAccepted,
                            disabled: !0,
                            id: "commerce-amendment",
                            label: Object(h.d)("Opt in to earn revenue from game sales on Twitch", "CommerceAmendment")
                        })), i.createElement(P.W, null, Object(h.d)("Please read and agree to the following Commerce Addendum to become eligible for this program.", "CommerceAmendment")))
                    }, t = a.__decorate([Object(u.a)($e, {
                        options: function(e) {
                            return {
                                variables: {
                                    login: e.channelName,
                                    amendmentType: "GAME_COMMERCE"
                                }
                            }
                        }
                    })], t)
                }(i.PureComponent)),
                Ke = n("REKr"),
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
                            return e ? null : i.createElement(P.Ya, {
                                margin: {
                                    left: .5,
                                    right: .5
                                }
                            }, i.createElement(P.z, {
                                "data-test-selector": et,
                                type: P.F.Text,
                                disabled: !0
                            }, Object(h.d)("Accept", "CommerceAmendmentModal")))
                        }, t.onClose = function() {
                            t.props.onClose()
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        return i.createElement(P.Ya, {
                            padding: 3
                        }, i.createElement(P.Fb, {
                            padding: {
                                bottom: 3
                            },
                            borderBottom: !0,
                            textAlign: P.Sb.Center
                        }, i.createElement(P.W, {
                            type: P.Wb.H4
                        }, Object(h.d)("Addendum to Content Partner Agreement – Commerce Addendum", "CommerceAmendmentModal"))), i.createElement(P.Ya, {
                            padding: {
                                top: 2,
                                bottom: 2
                            },
                            textAlign: P.Sb.Center
                        }, i.createElement(P.W, {
                            fontSize: P.Ca.Size5
                        }, Object(h.d)('Please read and agree to the following addendum ("Addendum") to your Content License and Base Agreement (or Content License Agreement, as applicable) (the "Agreement") with Twitch in order to be eligible to earn revenue for certain purchases by a Twitch user that is viewing your Twitch channel.', "CommerceAmendmentModal"))), i.createElement(P.Fb, {
                            borderTop: !0,
                            borderRight: !0,
                            borderBottom: !0,
                            borderLeft: !0,
                            padding: 2
                        }, i.createElement("div", {
                            onScroll: this.onUserScroll,
                            className: "amendment-modal__amendment-text",
                            "data-test-selector": "amendment-modal-text-container"
                        }, i.createElement(P.W, null, 'Twitch, in its sole discretion, may make specially-formatted links appear on your Twitch channel page (a "', i.createElement(P.W, {
                            type: P.Wb.Span,
                            bold: !0
                        }, "Special Link"), '"), which would direct Twitch users to the purchase of a software application, video game, in-game item or other digital product (a "', i.createElement(P.W, {
                            type: P.Wb.Span,
                            bold: !0
                        }, "Product"), '") from Twitch. For every such purchase of a Product that is a Qualifying Purchase (as defined below), you will receive a fee (a "', i.createElement(P.W, {
                            type: P.Wb.Span,
                            bold: !0
                        }, "Product Purchase Fee"), '") that will be equal to five percent (5%) of (a) the purchase price of such Product, as such price was listed by Twitch at the time of the Qualifying Purchase and in the currency in which the Qualifying Purchase was made, less (b) any special discounts or promotions, taxes, service charges, rebates, payment processing fees (e.g. credit card processing fees) and any other related transaction and processing expenses.'), i.createElement(P.W, null, 'A "', i.createElement("strong", null, "Qualifying Purchase"), '" of a Product occurs when: (a) a user of Twitch clicks through a Special Link on your Twitch channel page; (b) such user purchases a Product(s); and (c) Twitch receives a fully settled payment for the purchase by such user.'), i.createElement(P.W, null, "If we pay you a Product Purchase Fee and later issue a refund or credit to the Twitch user for such Qualifying Purchase (or receive a chargeback related to the Qualifying Purchase), we may offset the amount of the Product Purchase Fee we previously paid you for such Qualifying Purchase against future Product Purchase Fees or other amounts that would otherwise be payable to you under the Agreement or this Addendum, or require you to remit that amount to us."), i.createElement(P.W, null, "This Addendum is governed by and subject to the Agreement. Capitalized terms used but not defined in this Addendum will have the meanings defined in the Agreement. Except as amended by this Addendum, all other terms and conditions of the Agreement remain in full force and effect."))), i.createElement(P.Ya, {
                            padding: {
                                top: 2,
                                bottom: 2
                            }
                        }, i.createElement(P.W, {
                            fontSize: P.Ca.Size4
                        }, Object(h.d)("Summary", "CommerceAmendmentModal")), i.createElement(P.W, null, Object(h.d)("By accepting below, you may earn revenue for certain purchases by your viewers as described above.", "CommerceAmendmentModal"))), i.createElement(P.Fb, {
                            borderTop: !0,
                            display: P.X.Flex,
                            flexDirection: P.Aa.Row,
                            alignItems: P.f.Center,
                            justifyContent: P.Xa.Center,
                            padding: {
                                top: 2,
                                bottom: 1
                            }
                        }, i.createElement(P.Ya, {
                            margin: {
                                left: .5,
                                right: .5
                            }
                        }, i.createElement(P.z, {
                            "data-test-selector": "amendment-modal-cancel-button",
                            type: P.F.Text,
                            onClick: this.onClose
                        }, Object(h.d)("Cancel", "CommerceAmendmentModal"))), this.renderAcceptButton(this.props.amendmentAccepted)))
                    }, t
                }(i.PureComponent),
                nt = Object(u.a)(Ke, {
                    name: "setAmendmentAcceptance"
                })(tt),
                at = (n("Ys4A"), function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        return i.createElement(P.Fb, {
                            className: "amendment-modal__container",
                            background: P.r.Base
                        }, i.createElement(nt, {
                            "data-test-selector": "amendment-modal-selector",
                            onClose: this.props.closeModal,
                            amendmentAccepted: this.props.amendmentAccepted
                        }))
                    }, t
                }(i.Component));
            var it = Object(He.connect)(null, function(e) {
                return Object(g.bindActionCreators)({
                    closeModal: Je.c
                }, e)
            })(at);
            var rt, ot = Object(He.connect)(null, function(e) {
                    return Object(g.bindActionCreators)({
                        showAmendmentModal: function(e) {
                            var t = a.__rest(e, []);
                            return Object(Je.d)(it, t)
                        }
                    }, e)
                })(Ze),
                st = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(t, e), t.prototype.componentDidMount = function() {
                        h.p.setPageTitle(Object(h.d)("Game sales via Twitch", "CommerceAmendmentTitle"))
                    }, t.prototype.render = function() {
                        var e = this.props.match.params.channelName,
                            t = i.createElement(O.a, {
                                title: Object(h.d)("Game sales via Twitch", "CommerceAmendment"),
                                linkToParent: "/" + this.props.match.params.channelName + "/dashboard/settings/revenue"
                            });
                        return i.createElement(C.a, {
                            header: t
                        }, i.createElement(ot, {
                            channelName: e
                        }))
                    }, t
                }(i.PureComponent),
                lt = Object(g.compose)(Object(p.b)("CommerceAmendmentPage", {
                    autoReportInteractive: !0,
                    destination: f.a.DashboardSettingsRevenueGameCommerce
                }), Object(b.a)({
                    location: v.PageviewLocation.DashboardSettingsRevenueGameCommerce
                }))(st),
                dt = n("kRBY"),
                ct = n("5g1g"),
                ut = n("mAXC"),
                mt = n("c0Zc"),
                pt = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onToggle = function() {
                            return a.__awaiter(t, void 0, void 0, function() {
                                return a.__generator(this, function(e) {
                                    return this.props.onToggle(this.props.campaignID, !this.props.isOptedIn), [2]
                                })
                            })
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        var e = "";
                        return e = this.props.isOptedIn ? Object(h.d)("Your community will get bonus Bits when they use the {brandName} Cheermote.", {
                            brandName: this.props.brandName
                        }, "BitsSponsoredCheermoteSetting") : Object(h.d)("Your community cannot use the {brandName} Cheermote. Opt in to active the Cheermote and bonus Bits!", {
                            brandName: this.props.brandName
                        }, "BitsSponsoredCheermoteSetting"), i.createElement(P.Ya, {
                            display: P.X.Flex,
                            flexDirection: P.Aa.Column
                        }, i.createElement(P.Ya, {
                            display: P.X.Flex,
                            justifyContent: P.Xa.Between,
                            alignItems: P.f.Center
                        }, i.createElement(P.Ya, {
                            display: P.X.Flex,
                            alignItems: P.f.Center
                        }, i.createElement(P.S, {
                            src: this.props.imageURL,
                            alt: this.props.brandName
                        }), i.createElement(P.Qa, {
                            padding: {
                                left: 2
                            }
                        }, i.createElement(P.W, null, this.props.brandName))), i.createElement(P.Yb, {
                            checked: this.props.isOptedIn,
                            onChange: this.onToggle
                        })), i.createElement(P.Qa, {
                            padding: {
                                top: 1
                            }
                        }, i.createElement(P.W, null, e)))
                    }, t
                }(i.PureComponent),
                gt = n("9wGn"),
                ht = n("l5J2"),
                bt = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            sponsoredCheermoteFormError: !1
                        }, t.onCampaignStatusToggle = function(e, n) {
                            return a.__awaiter(t, void 0, void 0, function() {
                                var t, i, r, o;
                                return a.__generator(this, function(s) {
                                    switch (s.label) {
                                        case 0:
                                            if (!(this.props.data && this.props.data.user && this.props.data.user.id && this.props.data.user.settings && this.props.data.user.settings.cheer && this.props.data.user.settings.cheer.sponsoredCheermotes && this.props.data.user.settings.cheer.sponsoredCheermotes.campaigns)) return [2];
                                            t = {
                                                userID: this.props.data.user.id,
                                                sponsoredCheermote: {
                                                    id: e,
                                                    isOptedIn: n
                                                }
                                            }, i = this.props.data.user.settings.cheer.sponsoredCheermotes.campaigns.edges.map(function(t) {
                                                return t.cursor === e && t.node ? {
                                                    __typename: "SponsoredCheermoteChannelSettingsEdge",
                                                    cursor: t.cursor,
                                                    node: a.__assign({}, t.node, {
                                                        isOptedIn: n
                                                    })
                                                } : t
                                            }), r = {
                                                updateCheerPartnerSettings: {
                                                    __typename: "UpdateCheerPartnerSettingsPayload",
                                                    cheer: {
                                                        __typename: "CheerPartnerSettings",
                                                        id: this.props.data.user.id,
                                                        sponsoredCheermotes: {
                                                            __typename: "CheerPartnerSponsoredCheermoteSettings",
                                                            campaigns: {
                                                                __typename: "SponsoredCheermoteChannelSettingsConnection",
                                                                edges: i.slice(),
                                                                totalCount: this.props.data.user.settings.cheer.sponsoredCheermotes.campaigns.totalCount
                                                            }
                                                        }
                                                    }
                                                }
                                            }, o = Object(y.b)(t, r), s.label = 1;
                                        case 1:
                                            return s.trys.push([1, 3, , 4]), [4, this.props.updateSponsoredCheerCampaignStatus(o)];
                                        case 2:
                                            return s.sent(), this.setState({
                                                sponsoredCheermoteFormError: !1
                                            }), [3, 4];
                                        case 3:
                                            return s.sent(), this.setState({
                                                sponsoredCheermoteFormError: !0
                                            }), [3, 4];
                                        case 4:
                                            return [2]
                                    }
                                })
                            })
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        var e = this;
                        if (!this.props.data || this.props.data.loading) return i.createElement(P.ab, null);
                        if (!(this.props.data && this.props.data.user && this.props.data.user.id && this.props.data.user.settings && this.props.data.user.settings.cheer && this.props.data.user.settings.cheer.sponsoredCheermotes && this.props.data.user.settings.cheer.sponsoredCheermotes.campaigns)) return null;
                        var t = this.props.data.user.settings.cheer.sponsoredCheermotes.campaigns.edges.map(function(t) {
                            return i.createElement(pt, {
                                key: t.cursor,
                                campaignID: t.node.id,
                                isOptedIn: t.node.isOptedIn,
                                brandName: t.node.brandName,
                                imageURL: t.node.brandImageURL,
                                onToggle: e.onCampaignStatusToggle
                            })
                        });
                        return i.createElement(N.a, {
                            label: Object(h.d)("Cheermote Campaigns", "BitsSponsoredCheermoteSettingsForm"),
                            error: this.state.sponsoredCheermoteFormError
                        }, i.createElement(P.Ja, null, i.createElement(P.P, {
                            cols: {
                                default: 12,
                                sm: 8
                            }
                        }, t)))
                    }, t
                }(i.Component),
                ft = Object(r.compose)(Object(u.a)(gt, {
                    options: function(e) {
                        return {
                            variables: {
                                channelLogin: e.channelLogin
                            }
                        }
                    }
                }), Object(u.a)(ht, {
                    name: "updateSponsoredCheerCampaignStatus"
                }))(bt),
                vt = n("BLPV"),
                yt = n("wGZM"),
                St = n("98xD"),
                Et = n("qqE+"),
                kt = 1,
                Nt = 1e4,
                Ot = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        n.state = {
                            minBitsToCheerSaveStatus: vt.b.NoChanges,
                            minBitsPerEmoteSaveStatus: vt.b.NoChanges,
                            minBitsToCheerError: !1,
                            minBitsPerEmoteError: !1
                        }, n.onMinBitsToCheerInputChange = function(e) {
                            var t = n.state,
                                a = t.minBitsPerEmote,
                                i = t.minBitsPerEmoteSaveStatus,
                                r = Math.min(parseInt(e.currentTarget.value, 10), Nt),
                                o = vt.b.DirtyChanges,
                                s = i,
                                l = !1;
                            (!r || !a || r < kt || a && r < a) && (o = vt.b.NoChanges, s = vt.b.NoChanges), a && r < a && (l = !0), n.setState({
                                minBitsToCheer: r,
                                minBitsToCheerError: l,
                                minBitsPerEmoteError: !1,
                                minBitsToCheerSaveStatus: o,
                                minBitsPerEmoteSaveStatus: s
                            })
                        }, n.onMinBitsPerEmoteInputChange = function(e) {
                            var t = n.state,
                                a = t.minBitsToCheer,
                                i = t.minBitsToCheerSaveStatus,
                                r = Math.min(parseInt(e.currentTarget.value, 10), Nt),
                                o = i,
                                s = vt.b.DirtyChanges,
                                l = !1;
                            (!r || !a || r < kt || a && a < r) && (o = vt.b.NoChanges, s = vt.b.NoChanges), a && a < r && (l = !0), n.setState({
                                minBitsPerEmote: r,
                                minBitsToCheerError: !1,
                                minBitsPerEmoteError: l,
                                minBitsToCheerSaveStatus: o,
                                minBitsPerEmoteSaveStatus: s
                            })
                        }, n.onMinBitsToCheerSave = function() {
                            return a.__awaiter(n, void 0, void 0, function() {
                                var e, t, n, i, r, o, s;
                                return a.__generator(this, function(a) {
                                    switch (a.label) {
                                        case 0:
                                            if (e = this.state.minBitsToCheer, t = this.props, n = t.setMinBitsToCheer, i = t.data, r = t.channelName, !e || !i.user || !i.user.id) return [2];
                                            this.setState({
                                                minBitsToCheerSaveStatus: vt.b.Working
                                            }), o = {
                                                userID: i.user.id,
                                                chatMessage: {
                                                    minBitsToCheer: e
                                                }
                                            }, a.label = 1;
                                        case 1:
                                            return a.trys.push([1, 3, , 4]), [4, n(Object(y.a)(o))];
                                        case 2:
                                            return s = a.sent(), Object(y.e)(yt, {
                                                login: r
                                            }, function(e) {
                                                return e.user && e.user.settings && e.user.settings.cheer && s.data.updateCheerPartnerSettings && (e.user.settings.cheer.chatMessage.minBitsToCheer = s.data.updateCheerPartnerSettings.cheer.chatMessage.minBitsToCheer), e
                                            }), this.setState({
                                                minBitsToCheerSaveStatus: vt.b.Success
                                            }), [3, 4];
                                        case 3:
                                            return a.sent(), this.setState({
                                                minBitsToCheerSaveStatus: vt.b.Error
                                            }), [3, 4];
                                        case 4:
                                            return [2]
                                    }
                                })
                            })
                        }, n.onMinBitsPerEmoteSave = function() {
                            return a.__awaiter(n, void 0, void 0, function() {
                                var e, t, n, i, r, o, s;
                                return a.__generator(this, function(a) {
                                    switch (a.label) {
                                        case 0:
                                            if (e = this.state.minBitsPerEmote, t = this.props, n = t.setMinBitsPerEmote, i = t.data, r = t.channelName, !e || !i.user || !i.user.id) return [2];
                                            this.setState({
                                                minBitsPerEmoteSaveStatus: vt.b.Working
                                            }), o = {
                                                userID: i.user.id,
                                                chatMessage: {
                                                    minBitsPerEmote: e
                                                }
                                            }, a.label = 1;
                                        case 1:
                                            return a.trys.push([1, 3, , 4]), [4, n(Object(y.a)(o))];
                                        case 2:
                                            return s = a.sent(), Object(y.e)(yt, {
                                                login: r
                                            }, function(e) {
                                                return e.user && e.user.settings && e.user.settings.cheer && s.data.updateCheerPartnerSettings && (e.user.settings.cheer.chatMessage.minBitsPerEmote = s.data.updateCheerPartnerSettings.cheer.chatMessage.minBitsPerEmote), e
                                            }), this.setState({
                                                minBitsPerEmoteSaveStatus: vt.b.Success
                                            }), [3, 4];
                                        case 3:
                                            return a.sent(), this.setState({
                                                minBitsPerEmoteSaveStatus: vt.b.Error
                                            }), [3, 4];
                                        case 4:
                                            return [2]
                                    }
                                })
                            })
                        };
                        var i = t.data;
                        if (!i.loading && !i.error && i.user && i.user.settings && i.user.settings.cheer) {
                            var r = i.user.settings.cheer.chatMessage,
                                o = r.minBitsToCheer,
                                s = r.minBitsPerEmote;
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
                                i = n.minBitsPerEmote;
                            this.setState({
                                minBitsToCheer: a,
                                minBitsPerEmote: i
                            })
                        }
                    }, t.prototype.componentDidMount = function() {
                        this.props.data.loading && !this.props.data.error || this.props.latencyTracking.reportInteractive()
                    }, t.prototype.componentDidUpdate = function(e) {
                        (e.data.loading && !this.props.data.loading || this.props.data.error) && this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        var e = this.state,
                            t = e.minBitsToCheer,
                            n = e.minBitsToCheerError,
                            a = e.minBitsPerEmote,
                            r = e.minBitsPerEmoteError,
                            o = e.minBitsToCheerSaveStatus,
                            s = e.minBitsPerEmoteSaveStatus;
                        return i.createElement(i.Fragment, null, i.createElement(N.a, {
                            label: Object(h.d)("Minimum Bits to Cheer", "CheerSettingsPage"),
                            error: n,
                            errorMessage: Object(h.d)("Minimum Bit to Cheer must be greater than or equal to Minimum Bit Emote", "CheerSettingsPage"),
                            "data-test-selector": "cheer-minimum-bits-form"
                        }, i.createElement(P.Ja, null, i.createElement(P.P, {
                            cols: {
                                default: 12,
                                sm: 8
                            }
                        }, i.createElement(P.Ya, {
                            display: P.X.Flex
                        }, i.createElement(P.Ya, {
                            flexGrow: 1,
                            margin: {
                                right: 1
                            }
                        }, i.createElement(P.Sa, {
                            type: P.Ua.Number,
                            min: kt,
                            max: Nt,
                            value: isNaN(t) ? "" : String(t),
                            onChange: this.onMinBitsToCheerInputChange,
                            "data-test-selector": "cheer-minimum-bits-input"
                        })), i.createElement(vt.a, {
                            status: o,
                            onClick: this.onMinBitsToCheerSave,
                            "data-test-selector": "cheer-minimum-bits-save-button"
                        })))), i.createElement(P.Ja, null, i.createElement(P.P, {
                            cols: {
                                default: 12,
                                sm: 8
                            }
                        }, i.createElement(k.a, {
                            text: i.createElement(i.Fragment, null, i.createElement(P.Ya, {
                                display: P.X.Inline,
                                margin: {
                                    right: .5
                                }
                            }, Object(h.d)("Set the minimum number of Bits needed to send a Cheer message in your channel. We only recommend setting this above 1 to combat spam in chat.", "CheerSettingsPage")), i.createElement(P.Fb, {
                                display: P.X.InlineBlock,
                                color: P.O.Alt2,
                                verticalAlign: P.gc.Middle
                            }, i.createElement(P.Zb, {
                                label: Object(h.d)("For example, if you choose 30, viewers will not be able to send a Cheer message with 29 or fewer Bits. They will need to use at least 30 Bits, either in a single emote, or by combining emotes that add up to at least 30 Bits.", "CheerSettingsPage"),
                                width: 300
                            }, i.createElement(P.tb, {
                                asset: P.ub.NotificationInfo,
                                width: 16,
                                height: 16
                            }))))
                        })))), i.createElement(N.a, {
                            label: Object(h.d)("Minimum Bits Emote", "CheerSettingsPage"),
                            error: r,
                            errorMessage: Object(h.d)("Minimum Bits Emote must be less than Minimum Bit to Cheer", "CheerSettingsPage"),
                            "data-test-selector": "emote-minimum-bits-form"
                        }, i.createElement(P.Ja, null, i.createElement(P.P, {
                            cols: {
                                default: 12,
                                sm: 8
                            }
                        }, i.createElement(P.Ya, {
                            display: P.X.Flex
                        }, i.createElement(P.Ya, {
                            flexGrow: 1,
                            margin: {
                                right: 1
                            }
                        }, i.createElement(P.Sa, {
                            type: P.Ua.Number,
                            min: kt,
                            max: Nt,
                            value: isNaN(a) ? "" : String(a),
                            onChange: this.onMinBitsPerEmoteInputChange,
                            "data-test-selector": "emote-minimum-bits-input"
                        })), i.createElement(vt.a, {
                            status: s,
                            onClick: this.onMinBitsPerEmoteSave,
                            "data-test-selector": "emote-minimum-bits-save-button"
                        })))), i.createElement(P.Ja, null, i.createElement(P.P, {
                            cols: {
                                default: 12,
                                sm: 8
                            }
                        }, i.createElement(k.a, {
                            text: i.createElement(i.Fragment, null, i.createElement(P.Ya, {
                                display: P.X.Inline,
                                margin: {
                                    right: .5
                                }
                            }, Object(h.d)("Set the smallest Bit Emote that can be used in your channel. We only recommend setting this above 1 to combat spam in chat.", "CheerSettingsPage")), i.createElement(P.Fb, {
                                display: P.X.InlineBlock,
                                color: P.O.Alt2,
                                verticalAlign: P.gc.Middle
                            }, i.createElement(P.Zb, {
                                label: Object(h.d)("Bit Emote means the individual Bit Emotes that appear in chat. For example, if you choose 100, viewers cannot send “Cheer150 Cheer90” because Cheer90 is less than 100. “Cheer150 Cheer150” would be acceptable, because both cheers are greater than 100.", "CheerSettingsPage"),
                                width: 300
                            }, i.createElement(P.tb, {
                                asset: P.ub.NotificationInfo,
                                width: 16,
                                height: 16
                            }))))
                        })))))
                    }, t
                }(i.Component),
                Tt = Object(g.compose)(Object(u.a)(yt, {
                    options: function(e) {
                        return {
                            variables: {
                                login: e.channelName
                            }
                        }
                    }
                }), Object(u.a)(Et, {
                    name: "setMinBitsToCheer"
                }), Object(u.a)(St, {
                    name: "setMinBitsPerEmote"
                }), Object(p.b)("BitsThresholdSettingsForm"), Object(ve.a)(function(e) {
                    return {
                        query: yt,
                        variables: {
                            login: e.channelName
                        },
                        topic: e.data && e.data.user && e.data.user.id ? Object(Se.d)(e.data.user.id) : "",
                        type: ye.c.BitsChannelSettingsEvent,
                        skip: !e.data.user || !e.data.user.id,
                        mutator: function(e, t) {
                            var n = e.updates;
                            return t.user && t.user.settings && t.user.settings.cheer && (void 0 !== n.minimum_bits && (t.user.settings.cheer.chatMessage.minBitsToCheer = n.minimum_bits), void 0 !== n.minimum_bits_emote && (t.user.settings.cheer.chatMessage.minBitsPerEmote = n.minimum_bits_emote)), t
                        }
                    }
                }))(Ot),
                Ct = n("NwqP"),
                Pt = n("/CKs");
            ! function(e) {
                e[e.CheermotesSettingsLink = 0] = "CheermotesSettingsLink", e[e.NotSignedBitsAmendmentPrompt = 1] = "NotSignedBitsAmendmentPrompt", e[e.NotOnboardedPrompt = 2] = "NotOnboardedPrompt"
            }(rt || (rt = {}));
            var It = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        if (n.state = {
                                showOnboardingPrompt: !1,
                                onboardingError: !1
                            }, n.onOnboardingButtonClick = function() {
                                return a.__awaiter(n, void 0, void 0, function() {
                                    var e, t, n, i, r;
                                    return a.__generator(this, function(a) {
                                        switch (a.label) {
                                            case 0:
                                                if (e = this.props, t = e.onboardUser, !((n = e.data).user && n.user.id && n.user.settings && n.user.settings.cheer)) return [2];
                                                i = {
                                                    userID: n.user.id,
                                                    isOnboarded: !0
                                                }, r = {
                                                    updateCheerPartnerSettings: {
                                                        __typename: "UpdateCheerPartnerSettingsPayload",
                                                        cheer: {
                                                            __typename: "CheerPartnerSettings",
                                                            id: n.user.settings.cheer.id,
                                                            isOnboarded: !0
                                                        }
                                                    }
                                                }, a.label = 1;
                                            case 1:
                                                return a.trys.push([1, 3, , 4]), [4, t(Object(y.b)(i, r))];
                                            case 2:
                                                return a.sent(), this.setState({
                                                    onboardingError: !1
                                                }), [3, 4];
                                            case 3:
                                                return a.sent(), this.setState({
                                                    onboardingError: !0
                                                }), [3, 4];
                                            case 4:
                                                return [2]
                                        }
                                    })
                                })
                            }, n.onSuccessLinkClick = function() {
                                n.setState({
                                    showOnboardingPrompt: !1
                                })
                            }, t.data.user && t.data.user.settings && t.data.user.settings.cheer) {
                            var i = t.data.user.settings.cheer,
                                r = i.hasSignedBitsAmendment,
                                o = i.isOnboarded;
                            n.state = a.__assign({}, n.state, {
                                showOnboardingPrompt: !r || !o
                            })
                        }
                        return n
                    }
                    return a.__extends(t, e), t.prototype.componentWillReceiveProps = function(e) {
                        if (e.data.user && e.data.user.settings && e.data.user.settings.cheer) {
                            var t = e.data.user.settings.cheer,
                                n = t.hasSignedBitsAmendment,
                                a = t.isOnboarded;
                            this.setState(function(e) {
                                return {
                                    showOnboardingPrompt: e.showOnboardingPrompt || !n || !a
                                }
                            })
                        }
                    }, t.prototype.componentDidMount = function() {
                        this.props.data.loading && !this.props.data.error || this.props.latencyTracking.reportInteractive()
                    }, t.prototype.componentDidUpdate = function(e) {
                        (e.data.loading && !this.props.data.loading || this.props.data.error) && this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        var e, t = this.props,
                            n = t.channelName,
                            a = t.isPartner,
                            r = t.data,
                            o = this.state,
                            s = o.showOnboardingPrompt,
                            l = o.onboardingError;
                        if (r.user && r.user.id && r.user.settings && r.user.settings.cheer)
                            if (s) {
                                var c = r.user.settings.cheer,
                                    u = c.hasSignedBitsAmendment,
                                    m = c.isOnboarded;
                                e = u ? i.createElement(P.Fb, {
                                    padding: 2,
                                    "data-test-selector": rt.NotOnboardedPrompt
                                }, i.createElement(P.fc, null, i.createElement("p", null, Object(h.d)("You have successfully completed your tax forms. Now click Enable Bits to complete onboarding.", "CheerSettingsForm"))), i.createElement(P.Ya, {
                                    display: P.X.Flex,
                                    alignItems: P.f.Center
                                }, i.createElement(P.Fb, {
                                    margin: {
                                        right: 1
                                    }
                                }, i.createElement(P.z, {
                                    disabled: !u,
                                    type: m ? P.F.Success : P.F.Default,
                                    onClick: this.onOnboardingButtonClick
                                }, m ? Object(h.d)("Success", "CheerSettingsForm") : Object(h.d)("Enable Bits", "CheerSettingsForm"))), m && i.createElement(P.U, {
                                    onClick: this.onSuccessLinkClick
                                }, Object(h.d)("Click here to see your Bits & Cheering settings", "CheerSettingsForm")), l && i.createElement(P.W, {
                                    color: P.O.Error
                                }, Object(h.d)("There was an error enabling Bits. Please try later or reach out to support.", "CheerSettingsForm")))) : i.createElement(P.Fb, {
                                    padding: 2,
                                    "data-test-selector": rt.NotSignedBitsAmendmentPrompt
                                }, i.createElement(P.fc, null, i.createElement("p", null, Object(h.d)("To enable Bits, we need your tax and payout information.", "CheerSettingsForm")), i.createElement("ul", null, i.createElement("li", null, Object(h.d)("After clicking Get Started click Start Over", "CheerSettingsForm")), i.createElement("li", null, Object(h.d)("Complete the registration, partner agreements, tax forms, and payout method.", "CheerSettingsForm")), i.createElement("li", null, Object(h.d)("Once you have completed the 4 steps, come back and click enable Bits!", "CheerSettingsForm")))), i.createElement(P.z, {
                                    linkTo: "/" + n + "/dashboard/settings/revenue/payout-onboarding"
                                }, Object(h.d)("Get Started", "CheerSettingsForm")))
                            } else e = i.createElement(i.Fragment, null, i.createElement(Tt, {
                                channelName: n
                            }), i.createElement(ct.b, {
                                name: "bits_sponsored_cheermote_dashboard_settings"
                            }, i.createElement(ft, {
                                channelLogin: n
                            })), i.createElement(ut.a, {
                                text: Object(h.d)("Cheer Badges", "CheerSettingsForm"),
                                linkTo: "/" + n + "/dashboard/settings/revenue/cheerbadges"
                            }), a && i.createElement(ut.a, {
                                text: Object(h.d)("Cheermotes", "CheerSettingsForm"),
                                linkTo: "/" + n + "/dashboard/settings/revenue/cheermotes",
                                "data-test-selector": rt.CheermotesSettingsLink
                            }), i.createElement(ut.a, {
                                text: Object(h.d)("Top Cheerers", "CheerSettingsForm"),
                                linkTo: "/" + n + "/dashboard/settings/revenue/cheer"
                            }));
                        else this.props.data.loading && (e = i.createElement(P.ab, {
                            fillContent: !0
                        })), this.props.data.error && (e = i.createElement(d.a, null));
                        return i.createElement(i.Fragment, null, i.createElement(mt.a, {
                            title: Object(h.d)("Bits & Cheering", "CheerSettingsForm")
                        }), i.createElement(C.a, null, e))
                    }, t
                }(i.Component),
                At = Object(g.compose)(Object(p.b)("CheerSettingsForm"), Object(u.a)(Pt, {
                    options: function(e) {
                        return {
                            variables: {
                                login: e.channelName
                            }
                        }
                    }
                }), Object(u.a)(Ct, {
                    name: "onboardUser"
                }))(It);
            var _t = Object(He.connect)(function(e) {
                var t = Object(dt.e)(e);
                return {
                    isStaff: !!(t && t.roles && t.roles.isStaff)
                }
            })(At);

            function wt(e, t) {
                if (!e || !t) return !1;
                if (t.workflow.currentStep === m.J.AGREEMENT_PENDING_UPGRADE) return !1;
                var n = e.find(function(e) {
                    return e.category === m.H.PARTNER && e.isReceivingRevenue
                });
                return !(!(n && n.tags && n.tags.includes(m.K.LEGACY) && t) || t.isLegacy) || !(n && n.tags && (n.tags.includes(m.K.STANDARD) || n.tags.includes(m.K.PREMIUM)) && t && t.category === m.I.CUSTOM_PARTNER) && !!n
            }
            var Ft, xt = n("wNpX");
            ! function(e) {
                e.PAYOUT_ONBOARDING_LINK = "onboarding-section__payout-onboarding-link", e.UPGRADE_AGREEMENT_LINK = "onboarding-section__upgrade-agreement-link", e.PAYOUTS_LINK = "onboarding-section__payouts-link", e.AFFILIATE_AGREEMENT_LINK = "onboarding-section__affiliate-agreement-link", e.PARTNER_AGREEMENT_LINK = "onboarding-section__partner-agreement-link", e.EXTENSIONS_DEVELOPER_AGREEMENT_LINK = "onboarding-section__extensions-developer-agreement-link"
            }(Ft || (Ft = {}));
            var Rt = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.data.loading && !this.props.data.error || this.props.latencyTracking.reportInteractive()
                    }, t.prototype.componentDidUpdate = function(e) {
                        (e.data.loading && !this.props.data.loading || this.props.data.error) && this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        var e = this.props.data,
                            t = e.loading,
                            n = e.error,
                            a = e.currentUser;
                        return t || n || !a || this.props.channelName !== a.login ? null : i.createElement(i.Fragment, null, i.createElement(mt.a, {
                            title: Object(h.d)("Onboarding", "OnboardingSection")
                        }), i.createElement(C.a, null, !this.hasAgreementPendingUpgrade && i.createElement(ut.a, {
                            "data-test-selector": Ft.PAYOUT_ONBOARDING_LINK,
                            text: this.payoutOnboardingLinkText,
                            linkTo: "/" + this.props.channelName + "/dashboard/settings/revenue/payout-onboarding"
                        }), this.hasAgreementPendingUpgrade && i.createElement(ut.a, {
                            "data-test-selector": Ft.UPGRADE_AGREEMENT_LINK,
                            text: this.upgradeTermsLinkText,
                            linkTo: "/" + this.props.channelName + "/dashboard/settings/revenue/upgrade-terms"
                        }), this.hasCompletedOnboarding && i.createElement(ut.a, {
                            "data-test-selector": Ft.PAYOUTS_LINK,
                            text: Object(h.d)("Change Payout Method", "OnboardingSection"),
                            linkTo: "/" + this.props.channelName + "/dashboard/settings/revenue/payouts"
                        }), a && a.roles && a.roles.isAffiliate && i.createElement(ut.a, {
                            "data-test-selector": Ft.AFFILIATE_AGREEMENT_LINK,
                            text: Object(h.d)("View Affiliate Agreement", "OnboardingSection"),
                            linkTo: "https://twitch.tv/p/legal/affiliate-agreement/"
                        }), this.showPartnerAgreementLink && i.createElement(ut.a, {
                            "data-test-selector": Ft.PARTNER_AGREEMENT_LINK,
                            text: Object(h.d)("View Active Partner Agreement", "OnboardingSection"),
                            linkTo: "/" + this.props.channelName + "/dashboard/settings/revenue/view-terms"
                        }), a && a.roles && a.roles.isExtensionsDeveloper && i.createElement(ut.a, {
                            "data-test-selector": Ft.EXTENSIONS_DEVELOPER_AGREEMENT_LINK,
                            text: Object(h.d)("View Extensions Developer Agreement", "OnboardingSection"),
                            linkTo: "https://twitch.tv/p/legal/developer-agreement/"
                        })))
                    }, Object.defineProperty(t.prototype, "hasAgreementPendingUpgrade", {
                        get: function() {
                            return !!(this.props.data.currentUser && this.props.data.currentUser.payoutInvite && this.props.data.currentUser.payoutInvite.workflow && this.props.data.currentUser.payoutInvite.workflow.currentStep === m.J.AGREEMENT_PENDING_UPGRADE)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "hasCompletedOnboarding", {
                        get: function() {
                            return !!(this.props.data.currentUser && this.props.data.currentUser.payoutInvite && this.props.data.currentUser.payoutInvite.workflow && this.props.data.currentUser.payoutInvite.workflow.currentStep === m.J.COMPLETED)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "payoutOnboardingLinkText", {
                        get: function() {
                            var e = this.props.data.currentUser;
                            if (!e || !e.payoutInvite) return null;
                            switch (e.payoutInvite.category) {
                                case m.I.AFFILIATE:
                                    return Object(h.d)("Affiliate Onboarding", "OnboardingSection");
                                case m.I.STANDARD_PARTNER:
                                case m.I.PREMIUM_PARTNER:
                                case m.I.CUSTOM_PARTNER:
                                    return Object(h.d)("Partner Onboarding", "OnboardingSection");
                                case m.I.EXTENSIONS_DEVELOPER:
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
                                case m.I.AFFILIATE:
                                    return Object(h.d)("Agree to the Twitch Affiliate Agreement", "OnboardingSection");
                                case m.I.STANDARD_PARTNER:
                                case m.I.PREMIUM_PARTNER:
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
                            return !!e && wt(e.payoutPlans && e.payoutPlans.map(function(e) {
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
                Dt = Object(r.compose)(Object(p.b)("OnboardingSection"), Object(u.a)(xt))(Rt),
                jt = Object(p.b)("OtherRevenueStreamsForm", {
                    autoReportInteractive: !0
                })(function(e) {
                    return i.createElement(P.Ya, null, i.createElement(mt.a, {
                        title: Object(h.d)("Other Revenue Streams", "OtherRevenueStreamsForm")
                    }), i.createElement(C.a, null, i.createElement(ut.a, {
                        text: Object(h.d)("Game sales via Twitch", "OtherRevenueStreamsForm"),
                        linkTo: "/" + e.channelName + "/dashboard/settings/revenue/game-commerce"
                    }), i.createElement(ut.a, {
                        text: Object(h.d)("Merch by Amazon (Beta)", "OtherRevenueStreamsForm"),
                        linkTo: "/" + e.channelName + "/dashboard/settings/revenue/merch-by-amazon"
                    })))
                });
            var Ut, Lt = Object(He.connect)(function(e) {
                    var t = Object(dt.e)(e);
                    return {
                        isStaff: !!(t && t.roles && t.roles.isStaff)
                    }
                })(jt),
                Mt = n("D7An"),
                Bt = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onChange = function(e) {
                            t.props.onChange(t.props.benefit, e.currentTarget.checked)
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        return i.createElement(N.a, {
                            label: this.props.label
                        }, i.createElement(P.Yb, {
                            checked: this.props.isToggled,
                            onChange: this.onChange
                        }), i.createElement(k.a, {
                            text: this.props.description
                        }))
                    }, t
                }(i.Component),
                Yt = n("ucfV"),
                Wt = n("TnsV");
            ! function(e) {
                e[e.AD_FREE_VIEWING = 0] = "AD_FREE_VIEWING", e[e.IGNORE_SLOW_MODE = 1] = "IGNORE_SLOW_MODE", e[e.SUBSCRIBER_ONLY_CHAT = 2] = "SUBSCRIBER_ONLY_CHAT", e[e.SUBSCRIBER_ONLY_ARCHIVES = 3] = "SUBSCRIBER_ONLY_ARCHIVES"
            }(Ut || (Ut = {}));
            var Vt = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.inExperiment = "affiliate_access" === h.p.experiments.getAssignment(Mt.b.SubsAffiliateBadges), t.toggleBenefit = function(e, n) {
                            return a.__awaiter(t, void 0, void 0, function() {
                                var t, i, r, o, s, l, d, c;
                                return a.__generator(this, function(a) {
                                    return this.props.data.user && this.props.data.user.id && this.props.data.user.roles && this.props.data.user.subscriptionProducts && (t = this.props.data.user.subscriptionProducts[0]) ? (i = e === Ut.AD_FREE_VIEWING ? n : t.hasAdFree, r = e === Ut.IGNORE_SLOW_MODE ? n : t.hasFastChat, o = e === Ut.SUBSCRIBER_ONLY_ARCHIVES ? n : t.hasSubonlyVideoArchive, s = e === Ut.SUBSCRIBER_ONLY_CHAT ? n : t.hasSubOnlyChat, l = this.props.data.user.id, d = {
                                        targetUserID: l,
                                        id: t.id,
                                        hasAdFree: i,
                                        hasFastChat: r,
                                        hasSubOnlyVideoArchive: o,
                                        hasSubOnlyChat: s
                                    }, c = {
                                        updateSubscriptionProduct: {
                                            product: {
                                                id: t.id,
                                                hasAdFree: i,
                                                hasFastChat: r,
                                                hasSubonlyVideoArchive: o,
                                                hasSubOnlyChat: s,
                                                __typename: "SubscriptionProduct"
                                            },
                                            __typename: "UpdateSubscriptionProductPayload"
                                        }
                                    }, this.props.updateSubscriptionProduct(Object(y.b)(d, c)), [2]) : [2]
                                })
                            })
                        }, t.canAccessSubBadges = function() {
                            return !!(t.inExperiment && t.isAffiliate() || t.isPartner())
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.data.loading && !this.props.data.error || this.props.latencyTracking.reportInteractive()
                    }, t.prototype.componentDidUpdate = function(e) {
                        (e.data.loading && !this.props.data.loading || this.props.data.error) && this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        if (!this.props.data.user || !this.props.data.user.roles || !this.props.data.user.subscriptionProducts) return this.props.data.loading ? i.createElement(P.ab, {
                            fillContent: !0
                        }) : this.props.data.error ? i.createElement(d.a, null) : null;
                        var e = this.props.data.user.subscriptionProducts[0];
                        if (!e) return null;
                        var t = this.props.channelName,
                            n = e.hasAdFree,
                            a = e.hasFastChat || !1,
                            r = e.hasSubOnlyChat || !1,
                            o = e.hasSubonlyVideoArchive || !1;
                        return i.createElement(i.Fragment, null, i.createElement(mt.a, {
                            title: Object(h.d)("Subscriptions", "DashboardRevenueSettings")
                        }), i.createElement(C.a, null, i.createElement(ut.a, {
                            text: Object(h.d)("Subscription names", "SubsSettingsSection"),
                            linkTo: "/" + t + "/dashboard/settings/revenue/subscription/ticket"
                        }), i.createElement(ut.a, {
                            text: Object(h.d)("Emotes", "SubsSettingsSection"),
                            linkTo: "/" + t + "/dashboard/settings/revenue/subscription/chatperks"
                        }), this.canAccessSubBadges() && i.createElement(ut.a, {
                            text: Object(h.d)("Loyalty badges", "SubsSettingsSection"),
                            linkTo: "/" + t + "/dashboard/settings/revenue/subscription/badges"
                        }), this.isPartner() && i.createElement(Bt, {
                            benefit: Ut.AD_FREE_VIEWING,
                            label: Object(h.d)("Ad-Free viewing", "SubsSettingsSection"),
                            isToggled: n,
                            onChange: this.toggleBenefit,
                            description: Object(h.d)("Allow subscribers to watch your content on your channel ad-free", "SubsSettingsSection")
                        }), i.createElement(Bt, {
                            benefit: Ut.IGNORE_SLOW_MODE,
                            label: Object(h.d)("Ignore slow mode", "SubsSettingsSection"),
                            isToggled: a,
                            onChange: this.toggleBenefit,
                            description: Object(h.d)("Allow subscribers to chat freely in your channel when chat is in slow mode", "SubsSettingsSection")
                        }), i.createElement(Bt, {
                            benefit: Ut.SUBSCRIBER_ONLY_CHAT,
                            label: Object(h.d)("Subscriber-only chat", "SubsSettingsSection"),
                            isToggled: r,
                            onChange: this.toggleBenefit,
                            description: Object(h.d)("Only allow subscribers and moderators to chat in your channel", "SubsSettingsSection")
                        }), i.createElement(Bt, {
                            benefit: Ut.SUBSCRIBER_ONLY_ARCHIVES,
                            label: Object(h.d)("Subscriber-only archives", "SubsSettingsSection"),
                            isToggled: o,
                            onChange: this.toggleBenefit,
                            description: Object(h.d)("Only allow subscribers to watch your past broadcasts", "SubsSettingsSection")
                        })))
                    }, t.prototype.isAffiliate = function() {
                        return this.props.data.user && this.props.data.user.id && this.props.data.user.roles && this.props.data.user.roles && this.props.data.user.roles.isAffiliate || !1
                    }, t.prototype.isPartner = function() {
                        return this.props.data.user && this.props.data.user.id && this.props.data.user.roles && this.props.data.user.roles.isPartner || !1
                    }, t
                }(i.Component),
                zt = Object(g.compose)(Object(p.b)("SubsSettingsSection"), Object(u.a)(Yt, {
                    options: function(e) {
                        return {
                            variables: {
                                login: e.channelName
                            }
                        }
                    }
                }), Object(u.a)(Wt, {
                    name: "updateSubscriptionProduct"
                }))(Vt),
                qt = n("+UBe"),
                Gt = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(t, e), t.prototype.componentDidMount = function() {
                        h.p.setPageTitle(Object(h.d)("Revenue Settings", "DashboardRevenueSettingsTitle")), this.props.data.loading && !this.props.data.error || this.props.latencyTracking.reportInteractive()
                    }, t.prototype.componentDidUpdate = function(e) {
                        (e.data.loading && !this.props.data.loading || this.props.data.error) && this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        return this.props.data.channel ? i.createElement(i.Fragment, null, i.createElement(Dt, {
                            channelName: this.channelName
                        }), (this.isAffiliate || this.isPartner) && i.createElement(i.Fragment, null, i.createElement(zt, {
                            channelName: this.channelName
                        }), i.createElement(_t, {
                            channelName: this.channelName,
                            isPartner: this.isPartner
                        })), this.isPartner && i.createElement(Lt, {
                            channelName: this.channelName
                        })) : this.props.data.error ? i.createElement(d.a, null) : i.createElement(P.ab, {
                            fillContent: !0
                        })
                    }, Object.defineProperty(t.prototype, "channelName", {
                        get: function() {
                            return this.props.match.params.channelName
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "isAffiliate", {
                        get: function() {
                            return !!(this.props.data.channel && this.props.data.channel.roles && this.props.data.channel.roles.isAffiliate)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "isPartner", {
                        get: function() {
                            return !!(this.props.data.channel && this.props.data.channel.roles && this.props.data.channel.roles.isPartner)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t
                }(i.Component),
                Xt = Object(g.compose)(Object(p.b)("DashboardRevenueSettingsIndexPage", {
                    destination: f.a.DashboardSettingsRevenueIndex
                }), Object(b.a)({
                    location: v.PageviewLocation.DashboardSettingsRevenueIndex
                }), Object(u.a)(qt, {
                    options: function(e) {
                        return {
                            variables: {
                                channelName: e.match.params.channelName
                            }
                        }
                    }
                }))(Gt),
                Qt = n("nHFd"),
                Ht = function(e) {
                    return i.createElement(P.Fb, {
                        background: P.r.Base,
                        padding: {
                            x: 2,
                            y: 3
                        }
                    }, i.createElement(P.Fb, {
                        borderBottom: !0,
                        margin: {
                            bottom: 2
                        },
                        padding: {
                            bottom: 2
                        }
                    }, i.createElement(P.W, {
                        type: P.Wb.H4
                    }, Object(h.d)("Save Badge Images", "LoyaltyBadgeUploadModalPresentation"))), i.createElement(P.Ya, {
                        margin: {
                            bottom: 2
                        }
                    }, i.createElement(P.W, null, Object(h.d)("By uploading and saving these images, you are confirming that you own all rights to the images.", "LoyaltyBadgeUploadModalPresentation"))), i.createElement(P.Fb, {
                        borderTop: !0,
                        padding: {
                            top: 2
                        },
                        display: P.X.Flex,
                        justifyContent: P.Xa.Center
                    }, i.createElement(P.Ya, {
                        margin: {
                            right: 2
                        }
                    }, i.createElement(P.z, {
                        onClick: e.onClose,
                        type: P.F.Text
                    }, Object(h.d)("Cancel", "LoyaltyBadgeUploadModalPresentation"))), i.createElement(P.z, {
                        onClick: e.onSaveClick
                    }, Object(h.d)("Save", "LoyaltyBadgeUploadModalPresentation"))), i.createElement(Qt.a, {
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
                    return a.__extends(t, e), t.prototype.render = function() {
                        return i.createElement(Ht, {
                            onSaveClick: this.onSaveClick,
                            onClose: this.onCancelClick
                        })
                    }, t
                }(i.Component);
            var $t, Zt = Object(He.connect)(null, function(e) {
                    return Object(g.bindActionCreators)({
                        closeModal: Je.c
                    }, e)
                })(Jt),
                Kt = "subscriptions/v1/channels",
                en = function() {
                    function e() {}
                    return e.getBadges = function(e) {
                        return a.__awaiter(void 0, void 0, Promise, function() {
                            var t, n;
                            return a.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        return a.trys.push([0, 2, , 3]), [4, R.a.getOrThrow(Kt + "/" + e + "/badges", {
                                            credentials: "include"
                                        })];
                                    case 1:
                                        return t = a.sent(), [2, nn(t.body)];
                                    case 2:
                                        return n = a.sent(), [2, Promise.reject(n)];
                                    case 3:
                                        return [2]
                                }
                            })
                        })
                    }, e.getTimeoutStatuses = function(e) {
                        return a.__awaiter(void 0, void 0, Promise, function() {
                            var t;
                            return a.__generator(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        return n.trys.push([0, 2, , 3]), [4, R.a.getOrThrow(Kt + "/" + e + "/timeout_statuses", {
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
                        return a.__awaiter(void 0, void 0, Promise, function() {
                            var n;
                            return a.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        return a.trys.push([0, 2, , 3]), [4, R.a.deleteOrThrow(Kt + "/" + e + "/badges/" + t, {
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
                        return a.__awaiter(void 0, void 0, Promise, function() {
                            var n, i, r;
                            return a.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        return a.trys.push([0, 2, , 3]), (n = new FormData).append("required_tenure_months", t.requiredTenureMonths.toString()), n.append("image_1x", t.image1x), n.append("image_2x", t.image2x), n.append("image_4x", t.image4x), [4, R.a.postOrThrow(Kt + "/" + e + "/badges", {
                                            body: n,
                                            credentials: "include"
                                        })];
                                    case 1:
                                        return i = a.sent(), [2, tn(i.body)];
                                    case 2:
                                        return r = a.sent(), [2, Promise.reject(r)];
                                    case 3:
                                        return [2]
                                }
                            })
                        })
                    }, e
                }(),
                tn = function(e) {
                    return {
                        id: e.id,
                        requiredTenureMonths: e.required_tenure_months,
                        image1xURL: e.image_1x_url,
                        image2xURL: e.image_2x_url,
                        image4xURL: e.image_4x_url,
                        title: e.title
                    }
                },
                nn = function(e) {
                    return e.map(function(e) {
                        return tn(e)
                    })
                },
                an = n("1YV1"),
                rn = (n("Dg2t"), "https://static-cdn.jtvnw.net/badges/v1/19dd8673-124d-4f44-830c-b0f4f9d78635/2"),
                on = "current-badge-image-selector",
                sn = "current-badge-placeholder-selector",
                ln = "current-badge-locked-overlay-selector",
                dn = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.renderCurrentBadges = function() {
                            if (!t.props.data.user || !t.props.data.user.roles) return t.props.data.loading ? i.createElement(P.ab, null) : t.props.data.error ? i.createElement(d.a, null) : null;
                            var e = new Map(t.props.badgesMap),
                                n = t.props.data.user.roles.isPartner,
                                a = (n ? In : In.filter(function(e) {
                                    return e.availableToAffiliate
                                })).map(function(n) {
                                    var a = n.requiredTenureMonths,
                                        i = e.get(a);
                                    if (0 !== a || t.props.badgesMap.has(0)) {
                                        if (i) {
                                            r = t.renderToolTip(i.title, i.image2xURL);
                                            return t.renderCurrentBadgeImage(n, r)
                                        }
                                        return t.renderCurrentBadgePlaceholder(n)
                                    }
                                    var r = t.renderToolTip(Object(h.d)("Subscriber", "LoyaltyBadgeCurrentSectionComponent"), rn);
                                    return t.renderCurrentBadgeImage(n, r)
                                });
                            return i.createElement(P.Ya, {
                                margin: {
                                    top: 1,
                                    bottom: 1
                                }
                            }, a, !n && t.renderLockedBadges())
                        }, t.renderLockedBadges = function() {
                            return i.createElement(P.Ya, {
                                "data-test-selector": ln,
                                display: P.X.InlineFlex,
                                flexDirection: P.Aa.Column,
                                margin: {
                                    left: 1
                                }
                            }, i.createElement(P.Ya, {
                                display: P.X.InlineFlex,
                                flexDirection: P.Aa.Row,
                                margin: {
                                    bottom: 1
                                }
                            }, i.createElement(P.Ya, {
                                className: "loyalty-badges-current-section__container",
                                margin: {
                                    right: 1
                                }
                            }, i.createElement(P.Ya, {
                                className: "loyalty-badges-current-section__placeholder-light",
                                display: P.X.InlineFlex,
                                justifyContent: P.Xa.Center
                            }, i.createElement(P.tb, {
                                asset: P.ub.Lock,
                                type: P.vb.Brand
                            }))), i.createElement(P.Ya, {
                                className: "loyalty-badges-current-section__container",
                                margin: {
                                    right: 1
                                }
                            }, i.createElement(P.Ya, {
                                className: "loyalty-badges-current-section__placeholder-light"
                            })), i.createElement(P.Ya, {
                                className: "loyalty-badges-current-section__container",
                                margin: {
                                    right: 1
                                }
                            }, i.createElement(P.Ya, {
                                className: "loyalty-badges-current-section__placeholder-light",
                                position: P.kb.Absolute
                            }), i.createElement(P.Ya, {
                                className: "loyalty-badges-current-section__gradient",
                                position: P.kb.Absolute
                            }))), Object(h.d)("Unlock Year 2 to 8 badges when you become a Partner", "LoyaltyBadgeCurrentSectionComponent"))
                        }, t.renderCurrentBadgeImage = function(e, n) {
                            var a = on;
                            return t.renderCurrentBadge(e, "loyalty-badges-current-section__badge", a, n)
                        }, t.renderCurrentBadgePlaceholder = function(e) {
                            var n = sn;
                            return t.renderCurrentBadge(e, "loyalty-badges-current-section__placeholder", n)
                        }, t.renderCurrentBadge = function(e, t, n, a) {
                            return i.createElement(P.Ya, {
                                className: "loyalty-badges-current-section__container",
                                alignItems: P.f.Center,
                                key: e.requiredTenureMonths,
                                "data-test-selector": n,
                                display: P.X.InlineFlex,
                                flexDirection: P.Aa.Column,
                                margin: {
                                    right: 1
                                },
                                verticalAlign: P.gc.Top
                            }, i.createElement(P.Ya, {
                                className: t,
                                margin: {
                                    bottom: 1
                                }
                            }, a), i.createElement(P.W, null, e.name))
                        }, t.renderToolTip = function(e, t) {
                            return i.createElement(P.Zb, {
                                direction: P.bc.Bottom,
                                label: e
                            }, i.createElement("img", {
                                src: t,
                                alt: e
                            }))
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        return i.createElement(T.a, {
                            title: Object(h.d)("Current Badges", "LoyaltyBadgeCurrentSectionComponent")
                        }, this.renderCurrentBadges())
                    }, t
                }(i.Component),
                cn = Object(g.compose)(Object(u.a)(an, {
                    options: function(e) {
                        return {
                            variables: {
                                login: e.channelLogin
                            }
                        }
                    }
                }))(dn);
            n("keuq");
            ! function(e) {
                e[e.NoChanges = 0] = "NoChanges", e[e.Working = 1] = "Working", e[e.Success = 2] = "Success", e[e.Error = 3] = "Error"
            }($t || ($t = {}));
            var un = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.renderContainer = function(e, n) {
                            return i.createElement(P.Ya, {
                                textAlign: P.Sb.Center,
                                margin: {
                                    right: 1
                                }
                            }, i.createElement(P.Ya, {
                                className: "loyalty-badges-delete-section__container",
                                alignItems: P.f.Center,
                                display: P.X.InlineFlex,
                                justifyContent: P.Xa.Center
                            }, i.createElement("img", {
                                src: e,
                                alt: t.props.title
                            })), i.createElement(P.W, null, n))
                        }, t.getButtonState = function(e) {
                            switch (e) {
                                case $t.Working:
                                    return P.E.Loading;
                                case $t.Success:
                                case $t.NoChanges:
                                case $t.Error:
                                default:
                                    return P.E.Default
                            }
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        return i.createElement(i.Fragment, null, this.renderContainer(this.props.image1xURL, Object(h.d)("18 x 18px", "LoyaltyBadgeDeleteSection")), this.renderContainer(this.props.image2xURL, Object(h.d)("36 x 36px", "LoyaltyBadgeDeleteSection")), this.renderContainer(this.props.image4xURL, Object(h.d)("72 x 72px", "LoyaltyBadgeDeleteSection")), i.createElement(P.Ya, {
                            className: "loyalty-badges-delete-section__button-container",
                            alignItems: P.f.Start,
                            display: P.X.InlineFlex,
                            flexDirection: P.Aa.Column,
                            justifyContent: P.Xa.Center,
                            margin: {
                                left: 1
                            }
                        }, i.createElement(P.Ya, {
                            margin: {
                                bottom: 1
                            }
                        }, i.createElement(P.z, {
                            type: P.F.Alert,
                            state: this.getButtonState(this.props.deleteStatus),
                            onClick: this.props.showDeleteBadgeModal
                        }, Object(h.d)("Delete Badge", "LoyaltyBadgeUploadSection"))), this.props.deleteStatus === $t.Error && i.createElement(P.hb, {
                            label: Object(h.d)("Failed to delete subscriber badge", "LoyaltyBadgeDeleteSection"),
                            type: P.ib.Alert
                        })))
                    }, t
                }(i.Component),
                mn = function(e) {
                    return i.createElement(P.Fb, {
                        background: P.r.Base,
                        padding: {
                            x: 2,
                            y: 3
                        }
                    }, i.createElement(P.Fb, {
                        borderBottom: !0,
                        margin: {
                            bottom: 2
                        },
                        padding: {
                            bottom: 2
                        }
                    }, i.createElement(P.W, {
                        type: P.Wb.H4
                    }, Object(h.d)("Are you sure?", "LoyaltyBadgeDeleteModalPresentation"))), i.createElement(P.Ya, {
                        margin: {
                            bottom: 2
                        }
                    }, i.createElement(P.W, null, Object(h.d)("Deleting your subscriber badge could negatively impact your subscribers.", "LoyaltyBadgeDeleteModalPresentation"))), i.createElement(P.Fb, {
                        borderTop: !0,
                        padding: {
                            top: 2
                        },
                        display: P.X.Flex,
                        justifyContent: P.Xa.Center
                    }, i.createElement(P.Ya, {
                        margin: {
                            right: 2
                        }
                    }, i.createElement(P.z, {
                        onClick: e.onClose,
                        type: P.F.Text
                    }, Object(h.d)("Cancel", "LoyaltyBadgeDeleteModalPresentation"))), i.createElement(P.z, {
                        onClick: e.onDeleteClick
                    }, Object(h.d)("Delete", "LoyaltyBadgeDeleteModalPresentation"))), i.createElement(Qt.a, {
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
                    return a.__extends(t, e), t.prototype.render = function() {
                        return i.createElement(mn, {
                            onDeleteClick: this.onDeleteClick,
                            onClose: this.onCancelClick
                        })
                    }, t
                }(i.Component);
            var gn = Object(He.connect)(null, function(e) {
                return Object(g.bindActionCreators)({
                    closeModal: Je.c
                }, e)
            })(pn);
            var hn, bn = Object(He.connect)(null, function(e, t) {
                    return Object.assign(Object(g.bindActionCreators)({
                        showDeleteBadgeModal: function() {
                            return Object(Je.d)(gn, {
                                onDeleteClick: t.onDeleteClick
                            })
                        }
                    }, e), t)
                })(un),
                fn = function() {
                    return i.createElement(i.Fragment, null, i.createElement(P.W, {
                        bold: !0,
                        fontSize: P.Ca.Size7
                    }, Object(h.d)("Contact Partner Help", "LoyaltyBadgeTimedOutSection")), i.createElement(P.Ya, {
                        padding: {
                            top: 1
                        }
                    }, i.createElement(P.W, null, Object(h.d)("One or more of the badges you've attempted to upload violate our Terms of Service. As such, your ability to upload new badges has been temporarily disabled and the offending content has been deleted.", "LoyaltyBadgeTimedOutSection"))), i.createElement(P.Ya, {
                        padding: {
                            top: 1
                        }
                    }, i.createElement(P.W, null, Object(h.d)("Please contact {email} for more information.", {
                        email: i.createElement("a", {
                            href: "mailto:partnerhelp@twitch.tv"
                        }, "partnerhelp@twitch.tv")
                    }, "LoyaltyBadgeTimedOutSection"))))
                },
                vn = function() {
                    function e() {}
                    return e.readFile = function(e, t) {
                        var n = new FileReader;
                        n.onloadend = function() {
                            t(n.result)
                        }, n.readAsDataURL(e)
                    }, e.readImage = function(e, t, n, a, i, r) {
                        var o = new Image;
                        o.onload = function() {
                            o.width === t || o.height === n ? a() : i()
                        }, o.onerror = function() {
                            r()
                        }, o.src = e
                    }, e
                }();
            n("xh38");
            ! function(e) {
                e[e.BadSizeError = 0] = "BadSizeError", e[e.BadImageError = 1] = "BadImageError", e[e.BadImageDimensionsError = 2] = "BadImageDimensionsError", e[e.None = 3] = "None"
            }(hn || (hn = {}));
            var yn = 25e3,
                Sn = yn / 1e3,
                En = ["image/png"],
                kn = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            errorStatus: hn.None
                        }, t.getErrorText = function() {
                            switch (t.state.errorStatus) {
                                case hn.BadSizeError:
                                    return Object(h.d)("Max file size is {fileSize} KB", {
                                        fileSize: Sn
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
                            return a.__awaiter(t, void 0, void 0, function() {
                                var t, n = this;
                                return a.__generator(this, function(a) {
                                    return e.length < 1 ? [2] : (t = e[0]).size > yn ? (this.setState({
                                        errorStatus: hn.BadSizeError
                                    }), [2]) : (vn.readFile(t, function(e) {
                                        vn.readImage(e, n.props.widthRequirement, n.props.heightRequirement, function() {
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
                    return a.__extends(t, e), t.prototype.render = function() {
                        var e = this.getErrorText();
                        return i.createElement(P.Ya, {
                            position: P.kb.Relative
                        }, i.createElement(P.Ya, {
                            textAlign: P.Sb.Center,
                            margin: {
                                right: 1
                            }
                        }, i.createElement(P.Ya, {
                            className: "loyalty-badges-file-picker__container",
                            display: P.X.InlineFlex,
                            flexDirection: P.Aa.Column,
                            position: P.kb.Relative
                        }, i.createElement(U.a, {
                            allowedFileTypes: En,
                            error: void 0 !== e,
                            onFilesSubmitted: this.onFilesSubmitted
                        }, i.createElement(P.Ya, {
                            padding: .5
                        }, e ? i.createElement(P.W, {
                            color: P.O.Error,
                            wordBreak: P.ic.BreakWord
                        }, e) : this.props.children))), i.createElement(P.W, null, Object(h.d)("{width} x {height}px", {
                            width: this.props.widthRequirement,
                            height: this.props.heightRequirement
                        }, "LoyaltyBadgeFilePicker")), e && i.createElement(P.hb, {
                            label: e,
                            type: P.ib.Alert
                        })))
                    }, t
                }(i.Component),
                Nn = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.renderFilePickerContents = function() {
                            return i.createElement(i.Fragment, null, i.createElement(P.tb, {
                                asset: P.ub.Plus,
                                height: 16,
                                width: 16
                            }), i.createElement(P.W, null, Object(h.d)("Upload Image", "LoyaltyBadgeUploadSection")))
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
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
                On = n("OB5i"),
                Tn = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            isTimedOut: !1
                        }, t.renderTabs = function() {
                            var e = !1;
                            if (t.props.data.user && t.props.data.user.roles) e = t.props.data.user.roles.isPartner || e;
                            else if (t.props.data.error) return i.createElement(d.a, null);
                            var n = (e ? In : In.filter(function(e) {
                                return e.availableToAffiliate
                            })).map(function(e) {
                                var n = e.requiredTenureMonths;
                                return i.createElement(P.Gb, {
                                    key: n,
                                    active: t.props.activeTab === n,
                                    "data-tab-target": n,
                                    onClick: t.toggleActiveTab
                                }, i.createElement(P.W, null, e.name))
                            });
                            return i.createElement(P.Hb, null, n)
                        }, t.renderTabContent = function() {
                            var e = t.props.activeTab,
                                n = t.props.badgesMap.get(e);
                            return i.createElement(P.Ya, {
                                display: P.X.InlineFlex,
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
                            }) : i.createElement(Nn, {
                                image1xURL: t.props.image1xDataURL,
                                image2xURL: t.props.image2xDataURL,
                                image4xURL: t.props.image4xDataURL,
                                onImage1xSubmitted: t.props.onImage1xSubmitted,
                                onImage2xSubmitted: t.props.onImage2xSubmitted,
                                onImage4xSubmitted: t.props.onImage4xSubmitted
                            }))
                        }, t.renderTosWarning = function() {
                            return "affiliate_access" === h.p.experiments.getAssignment(Mt.b.SubsAffiliateBadges) ? i.createElement(P.Fb, {
                                className: "loyalty-badges-page__toswarning",
                                background: P.r.Alt,
                                color: P.O.Alt,
                                padding: 1,
                                margin: {
                                    x: "auto",
                                    top: 2
                                },
                                border: !0
                            }, Object(h.d)("Before submitting your badge, make sure it adheres to <x:link>Twitch's Subscriber Badge and Emoticon Guidelines</x:link>. Submissions in violations of these Guidelines will be rejected and may result in action against your account.", {
                                "x:link": function(e) {
                                    return i.createElement(P.U, {
                                        to: "https://help.twitch.tv/customer/portal/articles/2348985#guidelines"
                                    }, e)
                                }
                            }, "LoyaltyBadgeManageSectionComponent")) : null
                        }, t.toggleActiveTab = function(e) {
                            return a.__awaiter(t, void 0, void 0, function() {
                                var t, n, i, r, o;
                                return a.__generator(this, function(a) {
                                    if (e.currentTarget.parentElement)
                                        for (t = e.currentTarget.parentElement.getAttribute("data-tab-target"), n = 0, i = In; n < i.length; n++) r = i[n], o = r.requiredTenureMonths, t === o.toString() && this.props.toggleActiveTab(o);
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
                                        return this.props.data.user && this.props.data.user.id ? [4, en.getTimeoutStatuses(this.props.data.user.id)] : [2];
                                    case 1:
                                        return e = t.sent(), this.setState({
                                            isTimedOut: e
                                        }), [2]
                                }
                            })
                        })
                    }, t.prototype.render = function() {
                        return i.createElement(T.a, {
                            title: Object(h.d)("Manage Badges", "LoyaltyBadgeManageSectionComponent")
                        }, this.state.isTimedOut ? i.createElement(fn, null) : i.createElement(i.Fragment, null, this.renderTabs(), this.renderTabContent(), this.renderTosWarning()))
                    }, t
                }(i.Component),
                Cn = Object(g.compose)(Object(u.a)(On, {
                    options: function(e) {
                        return {
                            variables: {
                                login: e.channelLogin
                            }
                        }
                    }
                }))(Tn),
                Pn = n("YjpL"),
                In = [{
                    availableToAffiliate: !0,
                    name: "Base",
                    requiredTenureMonths: 0
                }, {
                    availableToAffiliate: !0,
                    name: "3-Month",
                    requiredTenureMonths: 3
                }, {
                    availableToAffiliate: !0,
                    name: "6-Month",
                    requiredTenureMonths: 6
                }, {
                    availableToAffiliate: !0,
                    name: "1-Year",
                    requiredTenureMonths: 12
                }, {
                    availableToAffiliate: !1,
                    name: "2-Year",
                    requiredTenureMonths: 24
                }, {
                    availableToAffiliate: !1,
                    name: "3-Year",
                    requiredTenureMonths: 36
                }, {
                    availableToAffiliate: !1,
                    name: "4-Year",
                    requiredTenureMonths: 48
                }, {
                    availableToAffiliate: !1,
                    name: "5-Year",
                    requiredTenureMonths: 60
                }, {
                    availableToAffiliate: !1,
                    name: "6-Year",
                    requiredTenureMonths: 72
                }, {
                    availableToAffiliate: !1,
                    name: "7-Year",
                    requiredTenureMonths: 84
                }, {
                    availableToAffiliate: !1,
                    name: "8-Year",
                    requiredTenureMonths: 96
                }],
                An = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            badgesMap: new Map,
                            activeTab: 0,
                            saveStatus: S.b.NoChanges,
                            deleteStatus: $t.NoChanges,
                            errorLoadingBadges: !1
                        }, t.onSaveClick = function() {
                            return a.__awaiter(t, void 0, void 0, function() {
                                var e, t, n, i;
                                return a.__generator(this, function(a) {
                                    switch (a.label) {
                                        case 0:
                                            if (!((e = this.props.data.user) && e.id && this.state.image1x && this.state.image2x && this.state.image4x)) return [3, 4];
                                            this.setState({
                                                saveStatus: S.b.Working
                                            }), t = {
                                                requiredTenureMonths: this.state.activeTab,
                                                image1x: this.state.image1x,
                                                image2x: this.state.image2x,
                                                image4x: this.state.image4x
                                            }, a.label = 1;
                                        case 1:
                                            return a.trys.push([1, 3, , 4]), [4, en.uploadBadge(e.id, t)];
                                        case 2:
                                            return n = a.sent(), (i = new Map(this.state.badgesMap)).set(n.requiredTenureMonths, n), this.setState({
                                                badgesMap: i,
                                                image1xDataURL: void 0,
                                                image2xDataURL: void 0,
                                                image4xDataURL: void 0,
                                                image1x: void 0,
                                                image2x: void 0,
                                                image4x: void 0,
                                                saveStatus: S.b.Success
                                            }), [3, 4];
                                        case 3:
                                            return a.sent(), this.setState({
                                                saveStatus: S.b.Error
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
                                        deleteStatus: $t.NoChanges,
                                        saveStatus: S.b.NoChanges
                                    }), [2]
                                })
                            })
                        }, t.updateSaveStatus = function() {
                            t.state.image1x && t.state.image2x && t.state.image4x ? t.setState({
                                saveStatus: S.b.DirtyChanges
                            }) : t.setState({
                                saveStatus: S.b.NoChanges
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
                                                deleteStatus: $t.Working
                                            }), a.label = 1;
                                        case 1:
                                            return a.trys.push([1, 3, , 4]), [4, en.deleteBadge(e.id, t.id)];
                                        case 2:
                                            return a.sent(), (n = new Map(this.state.badgesMap)).delete(t.requiredTenureMonths), this.setState({
                                                badgesMap: n,
                                                image1xDataURL: void 0,
                                                image2xDataURL: void 0,
                                                image4xDataURL: void 0,
                                                image1x: void 0,
                                                image2x: void 0,
                                                image4x: void 0,
                                                saveStatus: S.b.NoChanges,
                                                deleteStatus: $t.Success
                                            }), [3, 4];
                                        case 3:
                                            return a.sent(), this.setState({
                                                deleteStatus: $t.Error
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
                    return a.__extends(t, e), t.prototype.componentDidUpdate = function(e) {
                        return a.__awaiter(this, void 0, void 0, function() {
                            return a.__generator(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        return e.data.loading && !this.props.data.loading && this.props.data.user && this.props.data.user.id ? [4, this.getSetBadgesAndReportInteractive(this.props.data.user.id)] : [3, 2];
                                    case 1:
                                        return t.sent(), [3, 3];
                                    case 2:
                                        this.props.data.error && this.props.latencyTracking.reportInteractive(), t.label = 3;
                                    case 3:
                                        return [2]
                                }
                            })
                        })
                    }, t.prototype.componentDidMount = function() {
                        return a.__awaiter(this, void 0, void 0, function() {
                            return a.__generator(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return h.p.setPageTitle(Object(h.d)("Loyalty Badges", "LoyaltyBadgesPageTitle")), !this.props.data.loading && this.props.data.user && this.props.data.user.id ? [4, this.getSetBadgesAndReportInteractive(this.props.data.user.id)] : [3, 2];
                                    case 1:
                                        return e.sent(), [3, 3];
                                    case 2:
                                        this.props.data.error && this.props.latencyTracking.reportInteractive(), e.label = 3;
                                    case 3:
                                        return [2]
                                }
                            })
                        })
                    }, t.prototype.render = function() {
                        if (this.state.errorLoadingBadges) return i.createElement(d.a, null);
                        if ((!this.props.data.user || !this.props.data.user.id) && this.props.data.error) return i.createElement(d.a, null);
                        var e = i.createElement(E.a, {
                                status: this.state.saveStatus,
                                onClickSave: this.handleModalOpen
                            }),
                            t = i.createElement(O.a, {
                                title: Object(h.d)("Loyalty Badges", "LoyaltyBadgesPageComponent"),
                                linkToParent: "/" + this.props.match.params.channelLogin + "/dashboard/settings/revenue"
                            });
                        return i.createElement(C.a, {
                            header: t,
                            footer: e
                        }, i.createElement(cn, {
                            badgesMap: this.state.badgesMap,
                            channelLogin: this.props.match.params.channelLogin
                        }), i.createElement(Cn, {
                            activeTab: this.state.activeTab,
                            badgesMap: this.state.badgesMap,
                            channelLogin: this.props.match.params.channelLogin,
                            toggleActiveTab: this.toggleActiveTab,
                            image1xDataURL: this.state.image1xDataURL,
                            image2xDataURL: this.state.image2xDataURL,
                            image4xDataURL: this.state.image4xDataURL,
                            onImage1xSubmitted: this.onImage1xSubmitted,
                            onImage2xSubmitted: this.onImage2xSubmitted,
                            onImage4xSubmitted: this.onImage4xSubmitted,
                            onDeleteClick: this.onDeleteClick,
                            deleteStatus: this.state.deleteStatus
                        }))
                    }, t.prototype.getSetBadgesAndReportInteractive = function(e) {
                        return a.__awaiter(this, void 0, void 0, function() {
                            var t, n;
                            return a.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        return a.trys.push([0, 2, 3, 4]), [4, en.getBadges(e)];
                                    case 1:
                                        return t = a.sent(), n = new Map, t.forEach(function(e) {
                                            n.set(e.requiredTenureMonths, e)
                                        }), this.setState({
                                            badgesMap: n
                                        }), [3, 4];
                                    case 2:
                                        return a.sent(), this.setState({
                                            errorLoadingBadges: !0
                                        }), [3, 4];
                                    case 3:
                                        return this.props.latencyTracking.reportInteractive(), [7];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, t
                }(i.Component),
                _n = Object(g.compose)(Object(p.b)("LoyaltyBadgesPage", {
                    destination: f.a.DashboardSettingsRevenueLoyaltyBadges
                }), Object(b.a)({
                    location: v.PageviewLocation.DashboardSettingsRevenueLoyaltyBadges
                }), Object(u.a)(Pn, {
                    options: function(e) {
                        return {
                            variables: {
                                login: e.match.params.channelLogin
                            }
                        }
                    }
                }))(An);
            var wn, Fn = Object(He.connect)(null, function(e) {
                    return Object(g.bindActionCreators)({
                        showUploadBadgeModal: function(e) {
                            var t = a.__rest(e, []);
                            return Object(Je.d)(Zt, t)
                        }
                    }, e)
                })(_n),
                xn = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(t, e), t.prototype.componentDidMount = function() {
                        h.p.setPageTitle(Object(h.d)("Merch by Amazon (Beta)", "DashboardRevenueSettingsMerchByAmazonTitle"))
                    }, t.prototype.render = function() {
                        var e = i.createElement(O.a, {
                            title: Object(h.d)("Merch by Amazon (Beta)", "DashboardRevenueSettingsMerchByAmazon"),
                            linkToParent: "/" + this.props.match.params.channelName + "/dashboard/settings/revenue"
                        });
                        return i.createElement(C.a, {
                            header: e
                        }, i.createElement(T.a, null, i.createElement(P.W, null, Object(h.d)("Register with Merch by Amazon to create and sell your merchandise.", "DashboardRevenueSettingsMerchByAmazon")), i.createElement(P.Ya, {
                            padding: {
                                y: 2
                            }
                        }, i.createElement(P.W, null, Object(h.d)("Merch by Amazon will only approve one account for access per Twitch Partner. When you click this link you will be asked to log in with an Amazon account. Please make sure to log in with your preferred Amazon account, as that is the one we will enable for Merch by Amazon access.", "DashboardRevenueSettingsMerchByAmazon"))), i.createElement(P.z, {
                            targetBlank: !0,
                            linkTo: "https://twitch.amazon.com/link?confirm=ALWAYS&returnUri=https%3A%2F%2Fmerch.amazon.com%2Ftwitch-landing"
                        }, Object(h.d)("Create & Manage Your Merch Account", "DashboardRevenueSettingsMerchByAmazon"))))
                    }, t
                }(i.Component),
                Rn = Object(g.compose)(Object(p.b)("MerchByAmazonPage", {
                    autoReportInteractive: !0,
                    destination: f.a.DashboardSettingsRevenueMerchByAmazon
                }), Object(b.a)({
                    location: v.PageviewLocation.DashboardSettingsRevenueMerchByAmazon
                }))(xn),
                Dn = n("cr+I"),
                jn = n("wIs1"),
                Un = n("x7UT"),
                Ln = n("NAv5");
            ! function(e) {
                e[e.Summary = 0] = "Summary", e[e.Registration = 1] = "Registration", e[e.Agreement = 2] = "Agreement", e[e.TaxInterview = 3] = "TaxInterview", e[e.PayoutMethod = 4] = "PayoutMethod", e[e.Review = 5] = "Review"
            }(wn || (wn = {}));
            var Mn, Bn = n("h3C/"),
                Yn = function() {
                    return i.createElement(i.Fragment, null, i.createElement(P.Ya, {
                        margin: {
                            bottom: 1
                        }
                    }, i.createElement(P.W, {
                        type: P.Wb.H4
                    }, Object(h.d)("Twitch Affiliate Agreement", "AffiliateAgreement"))), i.createElement(P.W, {
                        type: P.Wb.P
                    }, Object(h.d)('By clicking the "{buttonLabel}" button below, you agree to the <x:link>Twitch Affiliate Agreement</x:link> (including all policies, appendices, specifications, guidelines, schedules, and other rules incorporated by reference therein); provided, however, that the Twitch Affiliate Agreement shall not be effective until we determine that you are eligible to participate in the Twitch Affiliate Program as further described therein.', {
                        buttonLabel: Object(h.d)("Agree", "AffiliateAgreement"),
                        "x:link": function(e) {
                            return i.createElement(P.U, {
                                to: "https://www.twitch.tv/p/legal/affiliate-agreement"
                            }, e)
                        }
                    }, "AffiliateAgreement")))
                },
                Wn = function() {
                    return i.createElement(i.Fragment, null, i.createElement(P.Ya, {
                        margin: {
                            bottom: 1
                        }
                    }, i.createElement(P.W, {
                        type: P.Wb.H4
                    }, Object(h.d)("Twitch Partner Program Terms", "CustomPartnerAgreement"))), i.createElement(P.W, {
                        type: P.Wb.P
                    }, Object(h.d)("Your Twitch Partner Agreement has been emailed to you via DocuSign. Check the inbox of the email address associated with your Twitch account for an email from DocuSign/Twitch and follow the instructions. Once you have signed the Twitch Partner Agreement, please click {buttonLabel} to continue.", {
                        buttonLabel: Object(h.d)("Next", "CustomPartnerAgreement")
                    }, "CustomPartnerAgreement")))
                },
                Vn = function() {
                    return i.createElement(i.Fragment, null, i.createElement(P.Ya, {
                        margin: {
                            bottom: 1
                        }
                    }, i.createElement(P.W, {
                        type: P.Wb.H4
                    }, Object(h.d)("Twitch Extensions Developer Program Terms", "ExtensionsDeveloperAgreement"))), i.createElement(P.W, {
                        type: P.Wb.P
                    }, Object(h.d)("It looks like you've already agreed to the Twitch Developer Agreement! Click {buttonLabel} to continue.", {
                        buttonLabel: Object(h.d)("Next", "ExtensionsDeveloperAgreement")
                    }, "ExtensionsDeveloperAgreement")))
                },
                zn = function(e) {
                    return i.createElement(P.Fb, {
                        background: P.r.Alt2,
                        padding: {
                            x: 2,
                            y: 1
                        }
                    }, i.createElement(P.Ya, {
                        display: P.X.InlineBlock,
                        margin: {
                            right: 1
                        }
                    }, i.createElement(P.W, {
                        type: P.Wb.H5,
                        transform: P.Vb.Uppercase,
                        color: P.O.Alt,
                        bold: !0
                    }, e.title)), !!e.statusText && i.createElement(P.Ya, {
                        display: P.X.InlineBlock
                    }, i.createElement(P.W, {
                        type: P.Wb.H4,
                        transform: P.Vb.Uppercase,
                        bold: !0
                    }, i.createElement(P.hb, {
                        label: e.statusText,
                        type: e.statusType
                    }))))
                },
                qn = function(e) {
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
                        return i.createElement(i.Fragment, null, i.createElement(zn, {
                            title: Object(h.d)("Parent Consent", "ParentConfirmation")
                        }), i.createElement(P.Ya, {
                            padding: 2
                        }, i.createElement(P.W, {
                            type: P.Wb.P,
                            color: P.O.Alt2
                        }, Object(h.d)("Parent or legal guardian: Please type your first and last name and check the box below.", "ParentConfirmation")), i.createElement(P.Ya, {
                            margin: {
                                top: 2
                            }
                        }, i.createElement(P.Ea, {
                            label: Object(h.d)("Parent or Legal Guardian Name", "ParentConfirmation"),
                            orientation: P.Fa.Horizontal
                        }, i.createElement(P.Ya, {
                            margin: {
                                bottom: 1
                            }
                        }, i.createElement(P.Sa, {
                            type: P.Ua.Text,
                            placeholder: Object(h.d)("First and Last Name", "ParentConfirmation"),
                            value: this.state.parentName,
                            onChange: this.handleParentNameChange
                        })), i.createElement(P.N, {
                            label: Object(h.d)("I hereby warrant that I am the (parent)/(guardian) of the Twitch user associated with this account, a minor, and have full authority to authorize this Agreement, which I have read and approved. I hereby agree that I and said minor will be bound by all provisions contained in this Agreement.", "ParentConfirmation"),
                            checked: this.state.checked,
                            onChange: this.toggleChecked
                        })))))
                    }, t
                }(i.Component),
                Gn = function() {
                    return i.createElement(i.Fragment, null, i.createElement(P.Ya, {
                        margin: {
                            bottom: 1
                        }
                    }, i.createElement(P.W, {
                        type: P.Wb.H4
                    }, Object(h.d)("Twitch Partner Program Terms", "PartnerRedoInfo"))), i.createElement(P.W, {
                        type: P.Wb.P
                    }, Object(h.d)("It looks like you've already agreed to the Twitch Partner Agreement! Click {buttonLabel} to continue.", {
                        buttonLabel: Object(h.d)("Next", "PartnerRedoInfo")
                    }, "PartnerRedoInfo")))
                },
                Xn = function(e) {
                    return i.createElement(P.Ya, {
                        position: P.kb.Relative
                    }, i.createElement(P.Ya, {
                        position: P.kb.Absolute,
                        attachRight: !0
                    }, i.createElement(P.z, {
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
                Qn = n("/Onm"),
                Hn = function(e) {
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
                                var e, t, n, i, r, o;
                                return a.__generator(this, function(a) {
                                    switch (a.label) {
                                        case 0:
                                            return e = this.props.data.currentUser && this.props.data.currentUser.id, this.props.onboardEntity === m.I.STANDARD_PARTNER || this.props.onboardEntity === m.I.PREMIUM_PARTNER ? (i = this.props.data.currentUser && this.props.data.currentUser.programAgreement, t = i && i.type, n = i && i.version) : (t = this.props.onboardEntity, n = "v1"), e && t && n ? (r = Object(y.a)({
                                                targetUserID: e,
                                                type: t,
                                                version: n
                                            }), [4, this.props.acceptProgramAgreement(r)]) : [2];
                                        case 1:
                                            return (o = a.sent()).data.acceptProgramAgreement && o.data.acceptProgramAgreement.error ? (this.setState({
                                                processingAgreement: !1
                                            }), [2]) : (this.props.updateStepDisplayed(wn.TaxInterview), [2])
                                    }
                                })
                            })
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        if (this.props.data.loading) return i.createElement(C.a, null, i.createElement(T.a, null, i.createElement(P.jb, {
                            lineCount: 4
                        })));
                        if (this.props.data.error) return i.createElement(C.a, null, i.createElement(T.a, null, i.createElement(d.a, {
                            message: Object(h.d)("Oops, something went wrong.", "PayoutOnboardingAgreement")
                        })));
                        var e = i.createElement(P.z, {
                            "data-test-selector": "payout-onboarding-agreement__proceed-button",
                            disabled: this.proceedButtonDisabled || this.state.processingAgreement,
                            state: this.state.processingAgreement ? P.E.Loading : P.E.Default,
                            onClick: this.handleAgreeClick
                        }, this.skipAgreement ? Object(h.d)("Next", "PayoutOnboardingAgreement") : Object(h.d)("Agree", "PayoutOnboardingAgreement"));
                        return i.createElement(C.a, {
                            footer: e
                        }, i.createElement(T.a, null, i.createElement(P.Fb, {
                            borderMarked: !0,
                            background: P.r.Base,
                            padding: 2,
                            elevation: 1
                        }, this.renderAgreement)), !this.skipAgreement && this.requiresParentConsent && i.createElement(qn, {
                            updateParentName: this.updateParentName,
                            updateParentConfirmation: this.updateParentConfirmation
                        }))
                    }, Object.defineProperty(t.prototype, "renderAgreement", {
                        get: function() {
                            if (this.isPartnerRedo) return i.createElement(Gn, null);
                            switch (this.props.onboardEntity) {
                                case m.I.AFFILIATE:
                                    return i.createElement(Yn, null);
                                case m.I.EXTENSIONS_DEVELOPER:
                                    return i.createElement(Vn, null);
                                case m.I.STANDARD_PARTNER:
                                case m.I.PREMIUM_PARTNER:
                                    var e = this.props.data.currentUser && this.props.data.currentUser.programAgreement;
                                    return e && i.createElement(Xn, {
                                        body: e.body
                                    });
                                case m.I.CUSTOM_PARTNER:
                                    return i.createElement(Wn, null);
                                default:
                                    return null
                            }
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "isPartnerRedo", {
                        get: function() {
                            if (!(this.props.data.currentUser && this.props.data.currentUser.roles && this.props.data.currentUser.roles.isPartner && this.props.data.currentUser.payoutPlans)) return !1;
                            var e = this.props.data.currentUser.payoutPlans.find(function(e) {
                                return e.category === m.H.PARTNER
                            });
                            return !!e && (!!e.isReceivingRevenue && (!!e.tags && (!(!this.props.data.currentUser.payoutInvite || !this.props.data.currentUser.payoutInvite.isLegacy) || !e.tags.includes(m.K.LEGACY) && (e.tags.includes(m.K.STANDARD) ? this.props.onboardEntity === m.I.STANDARD_PARTNER : e.tags.includes(m.K.PREMIUM) ? this.props.onboardEntity === m.I.PREMIUM_PARTNER : !!e.tags.includes(m.K.CUSTOM) && this.props.onboardEntity === m.I.CUSTOM_PARTNER))))
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "skipAgreement", {
                        get: function() {
                            return this.props.onboardEntity === m.I.EXTENSIONS_DEVELOPER || this.props.onboardEntity === m.I.CUSTOM_PARTNER || this.isPartnerRedo
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "requiresParentConsent", {
                        get: function() {
                            if (!(this.props.data.currentUser && this.props.data.currentUser.payoutInvite && this.props.data.currentUser.payoutInvite.workflow && this.props.data.currentUser.payoutInvite.workflow.registration)) return !1;
                            var e = this.props.data.currentUser.payoutInvite.workflow.registration.birthdate;
                            return Object(Ln.differenceInYears)(new Date, e) < 18
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
                Jn = Object(g.compose)(Object(u.a)(Qn, {
                    options: function(e) {
                        return {
                            variables: {
                                withAgreement: e.onboardEntity === m.I.STANDARD_PARTNER || e.onboardEntity === m.I.PREMIUM_PARTNER
                            }
                        }
                    }
                }), Object(u.a)(Bn, {
                    name: "acceptProgramAgreement"
                }))(Hn),
                $n = n("+ZoN"),
                Zn = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        if (this.props.data.loading || this.props.status === Mn.Completed) return null;
                        var e;
                        if (this.props.status === Mn.UnderReview) switch (this.props.onboardEntity) {
                            case m.I.EXTENSIONS_DEVELOPER:
                                e = i.createElement(P.W, null, Object(h.d)("Your financial information is currently under review. This process usually takes a few minutes.", "PayoutInfoBrick"));
                                break;
                            case m.I.AFFILIATE:
                            case m.I.STANDARD_PARTNER:
                            case m.I.PREMIUM_PARTNER:
                            case m.I.CUSTOM_PARTNER:
                                e = i.createElement(P.W, null, Object(h.d)("Your payout information is currently under review. This typically only takes a few minutes.", "PayoutInfoBrick"))
                        } else if (this.props.status === Mn.NotStarted) {
                            var t = !!(this.props.data && this.props.data.currentUser && this.props.data.currentUser.roles && this.props.data.currentUser.roles.isPartner && this.props.data.currentUser.roles.isExtensionsDeveloper);
                            e = i.createElement(i.Fragment, null, i.createElement(P.Ya, {
                                margin: {
                                    bottom: 1
                                }
                            }, i.createElement(P.W, null, Object(h.d)("Here you choose how you want to be paid. You must accrue at least $100 in revenue before you are eligible for a payout", "PayoutInfoBrick"))), i.createElement(P.Ya, {
                                margin: {
                                    bottom: 1
                                }
                            }, i.createElement(P.W, null, Object(h.d)("Choose Hold Payouts to have us hold your money until you request a payout; otherwise, you will be paid automatically.", "PayoutInfoBrick"))), this.props.onboardEntity === m.I.AFFILIATE && !t && i.createElement(P.W, null, Object(h.d)("Twitch uses a third party to process your payouts and the processor charges a transaction fee each time you get paid. The fees vary based on the payout method. See the fees <x:link>here.</x:link>", {
                                "x:link": function(e) {
                                    return i.createElement(P.U, {
                                        to: "https://help.twitch.tv/customer/portal/articles/2785925-affiliate-onboarding-guide#fees",
                                        targetBlank: !0
                                    }, e)
                                }
                            }, "PayoutInfoBrick")))
                        }
                        return i.createElement(P.Fb, {
                            borderMarked: !0,
                            padding: 2,
                            margin: {
                                bottom: 2
                            },
                            elevation: 1
                        }, e)
                    }, t
                }(i.Component),
                Kn = Object(u.a)($n)(Zn),
                ea = function(e) {
                    var t;
                    switch (e.onboardEntity) {
                        case m.I.AFFILIATE:
                            t = "https://help.twitch.tv/customer/portal/articles/2785925-affiliate-onboarding-guide";
                            break;
                        case m.I.EXTENSIONS_DEVELOPER:
                            t = "https://dev.twitch.tv/docs/extensions/onboarding";
                            break;
                        case m.I.STANDARD_PARTNER:
                        case m.I.PREMIUM_PARTNER:
                        case m.I.CUSTOM_PARTNER:
                            t = "https://help.twitch.tv/customer/portal/articles/2853658-partner-onboarding-guide";
                            break;
                        default:
                            return null
                    }
                    return i.createElement(P.W, {
                        type: P.Wb.P
                    }, Object(h.d)("Need Help? <x:link>See our detailed onboarding guide.</x:link>", {
                        "x:link": function(e) {
                            return i.createElement(P.U, {
                                to: t,
                                targetBlank: !0
                            }, e)
                        }
                    }, "OnboardingGuideLink"))
                },
                ta = function(e) {
                    var t;
                    return e.onboardEntity === m.I.EXTENSIONS_DEVELOPER ? (e.status === Mn.NotStarted && (t = i.createElement(P.W, null, Object(h.d)("Click the button below to submit your financial information.", "PayoutInfoText"))), e.status === Mn.UnderReview && (t = i.createElement(P.W, null, Object(h.d)("You can change your financial information if you wish to modify any previously submitted information. You may want to do this if your financial information has been under review for more than 48 hours.", "PayoutInfoText"))), e.status === Mn.Completed && (t = i.createElement(i.Fragment, null, i.createElement(P.Ya, {
                        margin: {
                            bottom: 1
                        }
                    }, i.createElement(P.W, null, Object(h.d)("Your financial information was successfully validated.", "PayoutInfoText"))), i.createElement(P.W, null, Object(h.d)("Click the button below if you wish to modify or correct any previously submitted financial information. Please note that this will erase your existing financial information and you will need to fully complete the form again.", "PayoutInfoText"))))) : (e.status === Mn.NotStarted && (t = i.createElement(P.W, null, Object(h.d)("Click the button below to submit your payout method.", "PayoutInfoText"))), e.status === Mn.UnderReview && (t = i.createElement(P.W, null, Object(h.d)("You can change your payout method if you wish to modify any previously submitted information. You may want to do this if your payout information has been under review for more than 48 hours.", "PayoutInfoText"))), e.status === Mn.Completed && (t = i.createElement(i.Fragment, null, i.createElement(P.Ya, {
                        margin: {
                            bottom: 1
                        }
                    }, i.createElement(P.W, null, Object(h.d)("Your payout information was successfully validated.", "PayoutInfoText"))), i.createElement(P.W, null, Object(h.d)("Click the button below if you wish to modify or correct any previously submitted payout information. Please note that this will erase your existing payout information and you will need to fully complete the form again.", "PayoutInfoText"))))), i.createElement(i.Fragment, null, i.createElement(P.Ya, {
                        margin: {
                            bottom: 2
                        }
                    }, t), e.status !== Mn.Completed && i.createElement(P.Ya, {
                        margin: {
                            bottom: 2
                        }
                    }, i.createElement(ea, {
                        onboardEntity: e.onboardEntity
                    })))
                },
                na = n("cZKs"),
                aa = n("+GjP"),
                ia = (n("fIvP"), function(e) {
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
                        return i.createElement(P.Ya, {
                            className: "tipalti-iframe--container"
                        }, !this.state.tipaltiIframeLoaded && i.createElement(P.ab, {
                            fillContent: !0
                        }), i.createElement(P.Ya, {
                            "data-test-selector": "tipalti-iframe__iframe-container",
                            fullHeight: !0,
                            display: this.state.tipaltiIframeLoaded ? P.X.Block : P.X.Hide
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
                ra = n("qQoZ"),
                oa = (n("ct+5"), function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        return this.tipaltiURL ? i.createElement(P.Fb, {
                            className: "payout-method-modal__container",
                            background: P.r.Base,
                            padding: 2
                        }, i.createElement(ia, {
                            tipaltiURL: this.tipaltiURL
                        })) : this.props.data.error ? i.createElement(P.Fb, {
                            className: "payout-method-modal__container",
                            background: P.r.Base,
                            padding: 5
                        }, i.createElement(d.a, {
                            message: Object(h.d)("Oops, something went wrong.", "PayoutMethodModal")
                        })) : i.createElement(P.Fb, {
                            className: "payout-method-modal__container",
                            background: P.r.Base,
                            padding: 5
                        }, i.createElement(P.ab, {
                            fillContent: !0
                        }))
                    }, Object.defineProperty(t.prototype, "tipaltiURL", {
                        get: function() {
                            return this.props.data.currentUser && this.props.data.currentUser.payoutInvite && this.props.data.currentUser.payoutInvite.workflow && this.props.data.currentUser.payoutInvite.workflow.payoutSettingsURL
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t
                }(i.Component)),
                sa = Object(g.compose)(Object(u.a)(ra, {
                    options: function() {
                        return {
                            variables: {
                                redirectURL: Object(aa.e)(window.location.href, {
                                    redirect_tipalti: "true"
                                })
                            }
                        }
                    }
                }))(oa),
                la = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        return i.createElement(P.Ya, null, i.createElement(sa, null), i.createElement(na.a, {
                            closeOnBackdropClick: !0
                        }))
                    }, t
                }(i.Component);
            ! function(e) {
                e[e.NotStarted = 0] = "NotStarted", e[e.UnderReview = 1] = "UnderReview", e[e.Completed = 2] = "Completed"
            }(Mn || (Mn = {}));
            var da = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.handleContinueClick = function() {
                        var e = t.isCustomPartnerOnboarding ? wn.Review : wn.Summary;
                        t.props.updateStepDisplayed(e)
                    }, t
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    return i.createElement(C.a, null, i.createElement(zn, {
                        title: Object(h.d)("Payout Method", "PayoutOnboardingPayoutMethod"),
                        statusText: this.payoutStatusText,
                        statusType: this.payoutStatusType,
                        borderTop: !0
                    }), i.createElement(P.Fb, {
                        borderTop: !0,
                        borderBottom: !0,
                        padding: 2
                    }, i.createElement(Kn, {
                        onboardEntity: this.props.onboardEntity,
                        status: this.payoutMethodStatus
                    }), i.createElement(ta, {
                        onboardEntity: this.props.onboardEntity,
                        status: this.payoutMethodStatus
                    }), i.createElement(P.z, {
                        onClick: this.props.showPayoutMethodModal,
                        type: this.payoutMethodStatus === Mn.NotStarted ? P.F.Default : P.F.Hollow
                    }, this.payoutMethodButtonText)), i.createElement(P.Fb, {
                        padding: 2,
                        background: P.r.Alt2
                    }, i.createElement(P.z, {
                        onClick: this.handleContinueClick,
                        disabled: this.continueButtonDisabled
                    }, this.isCustomPartnerOnboarding ? Object(h.d)("Continue", "PayoutOnboardingPayoutMethod") : Object(h.d)("Done", "PayoutOnboardingPayoutMethod"))))
                }, Object.defineProperty(t.prototype, "isExtensionsDeveloperOnboarding", {
                    get: function() {
                        return this.props.onboardEntity === m.I.EXTENSIONS_DEVELOPER
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "isCustomPartnerOnboarding", {
                    get: function() {
                        return this.props.onboardEntity === m.I.CUSTOM_PARTNER
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "payoutMethodStatus", {
                    get: function() {
                        switch (this.props.currentStep) {
                            case m.J.PAYOUT_METHOD_PENDING:
                                return Mn.UnderReview;
                            case m.J.COMPLETED:
                            case m.J.REVIEW_PENDING:
                                return Mn.Completed;
                            default:
                                return Mn.NotStarted
                        }
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "payoutStatusText", {
                    get: function() {
                        switch (this.payoutMethodStatus) {
                            case Mn.UnderReview:
                                return Object(h.d)("Under Review", "PayoutOnboardingPayoutMethod");
                            case Mn.Completed:
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
                            case Mn.UnderReview:
                                return P.ib.Prime;
                            case Mn.Completed:
                                return P.ib.Success;
                            default:
                                return
                        }
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "payoutMethodButtonText", {
                    get: function() {
                        return this.isExtensionsDeveloperOnboarding ? this.payoutMethodStatus === Mn.NotStarted ? Object(h.d)("Set Financial Information", "PayoutOnboardingPayoutMethod") : Object(h.d)("Change Financial Information", "PayoutOnboardingPayoutMethod") : this.payoutMethodStatus === Mn.NotStarted ? Object(h.d)("Set Payout Method", "PayoutOnboardingPayoutMethod") : Object(h.d)("Change Payout Method", "PayoutOnboardingPayoutMethod")
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "continueButtonDisabled", {
                    get: function() {
                        return this.isCustomPartnerOnboarding ? this.props.currentStep !== m.J.REVIEW_PENDING : this.props.currentStep === m.J.PAYOUT_METHOD_NOT_STARTED
                    },
                    enumerable: !0,
                    configurable: !0
                }), t
            }(i.Component);
            var ca, ua = Object(g.compose)(Object(He.connect)(null, function(e) {
                    return Object(g.bindActionCreators)({
                        showPayoutMethodModal: function() {
                            return Object(Je.d)(la, null)
                        }
                    }, e)
                }))(da),
                ma = /^[\s\da-zA-Z&\-,‘'\/#\.%]*$/,
                pa = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
                ga = function() {
                    return Object(h.d)("Only the English alphabet (non-accented Latin characters), numbers, and these special characters & - , ‘ / # . % are accepted.", "PayoutOnboardingRegistration")
                },
                ha = function() {
                    return Object(h.d)("Must provide a valid email address.", "PayoutOnboardingRegistration")
                },
                ba = function() {
                    return Object(h.d)("optional", "PayoutOnboardingRegistration")
                };
            ! function(e) {
                e.FIRST_NAME = "contact-info__first-name", e.MIDDLE_NAME = "contact-info__middle-name", e.LAST_NAME = "contact-info__last-name", e.EMAIL = "contact-info__email", e.CONFIRM_EMAIL = "contact-info__confirm-email", e.COMPANY_LEGAL_NAME = "contact-info__company-legal-name"
            }(ca || (ca = {}));
            var fa, va = function(e) {
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
                return a.__extends(t, e), Object.defineProperty(t.prototype, "invalidFormatErrorMessage", {
                    get: function() {
                        return ga()
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "invalidEmailErrorMessage", {
                    get: function() {
                        return ha()
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "optionalText", {
                    get: function() {
                        return ba()
                    },
                    enumerable: !0,
                    configurable: !0
                }), t.prototype.render = function() {
                    return i.createElement(P.Ya, {
                        padding: 2
                    }, i.createElement(P.Ya, {
                        margin: {
                            bottom: 2
                        }
                    }, i.createElement(P.Ea, {
                        label: Object(h.d)("Channel Name", "ContactInfo")
                    }, i.createElement(P.Sa, {
                        type: P.Ua.Text,
                        value: this.props.channelName,
                        disabled: !0
                    }))), i.createElement(P.Ya, {
                        margin: {
                            bottom: 2
                        }
                    }, i.createElement(P.Ea, {
                        label: Object(h.d)("First Name", "ContactInfo"),
                        error: !ma.test(this.state.firstName),
                        errorMessage: this.invalidFormatErrorMessage,
                        "data-test-selector": ca.FIRST_NAME
                    }, i.createElement(P.Sa, {
                        autoFocus: !0,
                        type: P.Ua.Text,
                        value: this.state.firstName,
                        onChange: this.updateFirstName,
                        error: !ma.test(this.state.firstName)
                    }))), i.createElement(P.Ya, {
                        margin: {
                            bottom: 2
                        }
                    }, i.createElement(P.Ea, {
                        label: Object(h.d)("Middle Name", "ContactInfo"),
                        labelOptional: this.optionalText,
                        error: !ma.test(this.state.middleName),
                        errorMessage: this.invalidFormatErrorMessage,
                        "data-test-selector": ca.MIDDLE_NAME
                    }, i.createElement(P.Sa, {
                        type: P.Ua.Text,
                        value: this.state.middleName,
                        onChange: this.updateMiddleName,
                        error: !ma.test(this.state.middleName)
                    }))), i.createElement(P.Ya, {
                        margin: {
                            bottom: 2
                        }
                    }, i.createElement(P.Ea, {
                        label: Object(h.d)("Last Name", "ContactInfo"),
                        hint: Object(h.d)("Please type your full legal name. This must be the name shown on your income tax return used to report income.", "ContactInfo"),
                        error: !ma.test(this.state.lastName),
                        errorMessage: this.invalidFormatErrorMessage,
                        "data-test-selector": ca.LAST_NAME
                    }, i.createElement(P.Sa, {
                        type: P.Ua.Text,
                        value: this.state.lastName,
                        onChange: this.updateLastName,
                        error: !ma.test(this.state.lastName)
                    }))), i.createElement(P.Ya, {
                        margin: {
                            bottom: 2
                        }
                    }, i.createElement(Ja, {
                        onMonthChange: this.props.onMonthChange,
                        onDayChange: this.props.onDayChange,
                        onYearChange: this.props.onYearChange
                    })), i.createElement(P.Ya, {
                        margin: {
                            bottom: 2
                        }
                    }, i.createElement(P.Ea, {
                        label: Object(h.d)("Email", "ContactInfo"),
                        hint: Object(h.d)("We will use this email to send you important tax documentation and payout information.", "ContactInfo"),
                        error: this.showEmailError,
                        errorMessage: this.invalidEmailErrorMessage,
                        "data-test-selector": ca.EMAIL
                    }, i.createElement(P.Sa, {
                        type: P.Ua.Email,
                        value: this.state.email,
                        onChange: this.updateEmail,
                        onFocus: this.onEmailFocus,
                        onBlur: this.onEmailBlur,
                        error: this.showEmailError
                    }))), i.createElement(P.Ya, {
                        margin: {
                            bottom: 2
                        }
                    }, i.createElement(P.Ea, {
                        label: Object(h.d)("Confirm Email", "ContactInfo"),
                        error: this.showConfirmEmailError,
                        errorMessage: Object(h.d)("Email addresses must match.", "ContactInfo"),
                        "data-test-selector": ca.CONFIRM_EMAIL
                    }, i.createElement(P.Sa, {
                        type: P.Ua.Email,
                        value: this.state.confirmEmail,
                        onChange: this.updateConfirmEmail,
                        onFocus: this.onConfirmEmailFocus,
                        onBlur: this.onConfirmEmailBlur,
                        error: this.showConfirmEmailError
                    }))), i.createElement(P.Ya, null, i.createElement(P.Ea, {
                        label: Object(h.d)("Company Legal Name", "ContactInfo"),
                        labelOptional: this.optionalText,
                        error: !ma.test(this.state.companyName),
                        errorMessage: this.invalidFormatErrorMessage,
                        "data-test-selector": ca.COMPANY_LEGAL_NAME
                    }, i.createElement(P.Sa, {
                        type: P.Ua.Text,
                        value: this.state.companyName,
                        onChange: this.updateCompanyName,
                        error: !ma.test(this.state.companyName)
                    }))))
                }, Object.defineProperty(t.prototype, "showEmailError", {
                    get: function() {
                        return !this.state.emailFocused && !!this.state.email && !pa.test(this.state.email)
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
            }(fa || (fa = {}));
            var ya = function(e) {
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
                        return ga()
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "invalidEmailErrorMessage", {
                    get: function() {
                        return ha()
                    },
                    enumerable: !0,
                    configurable: !0
                }), t.prototype.render = function() {
                    return i.createElement(P.Ya, {
                        padding: 2
                    }, i.createElement(P.Ya, {
                        margin: {
                            bottom: 2
                        }
                    }, i.createElement(P.Ea, {
                        label: Object(h.d)("Parent or Legal Guardian Name", "ParentInfo"),
                        error: !ma.test(this.state.parentName),
                        errorMessage: this.invalidFormatErrorMessage,
                        "data-test-selector": fa.PARENT_NAME
                    }, i.createElement(P.Sa, {
                        type: P.Ua.Text,
                        value: this.state.parentName,
                        onChange: this.updateParentName,
                        error: !ma.test(this.state.parentName)
                    }))), i.createElement(P.Ya, null, i.createElement(P.Ea, {
                        label: Object(h.d)("Parent or Legal Guardian Email", "ParentInfo"),
                        hint: Object(h.d)("Individuals under the age of 18 must provide parent or legal guardian information.", "ParentInfo"),
                        error: !!this.state.parentEmail && !pa.test(this.state.parentEmail),
                        errorMessage: this.invalidEmailErrorMessage,
                        "data-test-selector": fa.PARENT_EMAIL
                    }, i.createElement(P.Sa, {
                        type: P.Ua.Email,
                        value: this.state.parentEmail,
                        onChange: this.updateParentEmail,
                        error: !!this.state.parentEmail && !pa.test(this.state.parentEmail)
                    }))))
                }, t
            }(i.Component);

            function Sa(e) {
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
            var Ea = ["AB", "BC", "MB", "NB", "NL", "NT", "NS", "NU", "ON", "PE", "QC", "SK", "YT"],
                ka = n("Jgup");

            function Na(e) {
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
            var Oa, Ta = ["AL", "AK", "AZ", "AR", "AA", "AE", "AP", "CA", "CO", "CT", "DE", "DC", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"],
                Ca = ["A1", "A2", "AP", "CU", "EU", "IR", "KP", "MM", "SD", "SS", "SY", "TL"];
            ! function(e) {
                e.COUNTRY = "permanent-address__country", e.STREET_ADDRESS = "permanent-address__street-address", e.STREET_ADDRESS_2 = "permanent-address__street-address-2", e.CITY = "permanent-address__city", e.STATE = "permanent-address__state", e.POSTAL = "permanent-address__postal"
            }(Oa || (Oa = {}));
            var Pa, Ia = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            country: "",
                            streetAddress: "",
                            streetAddress2: "",
                            city: "",
                            state: "",
                            postal: ""
                        }, t.countrySelections = ka.a.map(function(e) {
                            return Ca.includes(e) ? null : i.createElement("option", {
                                value: e,
                                key: "countryCode-" + e
                            }, Object(ka.b)(e))
                        }), t.usaStateSelections = Ta.map(function(e) {
                            return i.createElement("option", {
                                value: e,
                                key: "usaStateCode-" + e
                            }, Na(e))
                        }), t.canadaStateSelections = Ea.map(function(e) {
                            return i.createElement("option", {
                                value: e,
                                key: "canadaState-" + e
                            }, Sa(e))
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
                    return a.__extends(t, e), Object.defineProperty(t.prototype, "invalidFormatErrorMessage", {
                        get: function() {
                            return ga()
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "optionalText", {
                        get: function() {
                            return ba()
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t.prototype.render = function() {
                        return i.createElement(i.Fragment, null, i.createElement(P.Ya, {
                            padding: {
                                x: 2,
                                top: 2,
                                bottom: 0
                            }
                        }, i.createElement(P.W, {
                            fontSize: P.Ca.Size6
                        }, Object(h.d)("Your permanent address is your primary residential address. It is not your P.O. Box or mailing address. If you are a college student studying in another state, but still have a permanent address in your home state (such as your parents' house), then your home state is your principal residence address. If you are registering on behalf of a corporation, please input the primary headquarters address.", "PermanentAddress"))), i.createElement(P.Ya, {
                            className: "payout-onboarding-registration__form-container",
                            padding: 2
                        }, i.createElement(P.Ya, {
                            margin: {
                                bottom: 2
                            }
                        }, i.createElement(P.Ea, {
                            label: Object(h.d)("Country", "PermanentAddress")
                        }, i.createElement(P.Ab, {
                            defaultValue: "",
                            onChange: this.handleCountryChange,
                            "data-test-selector": Oa.COUNTRY
                        }, i.createElement("option", {
                            value: "",
                            disabled: !0
                        }), this.countrySelections))), i.createElement(P.Ya, {
                            margin: {
                                bottom: 2
                            }
                        }, i.createElement(P.Ea, {
                            label: Object(h.d)("Street Address", "PermanentAddress"),
                            error: !ma.test(this.state.streetAddress),
                            errorMessage: this.invalidFormatErrorMessage,
                            "data-test-selector": Oa.STREET_ADDRESS
                        }, i.createElement(P.Sa, {
                            type: P.Ua.Text,
                            value: this.state.streetAddress,
                            onChange: this.handleStreetAddressChange,
                            error: !ma.test(this.state.streetAddress)
                        }))), i.createElement(P.Ya, {
                            margin: {
                                bottom: 2
                            }
                        }, i.createElement(P.Ea, {
                            label: Object(h.d)("Street Address 2", "PermanentAddress"),
                            labelOptional: this.optionalText,
                            error: !ma.test(this.state.streetAddress2),
                            errorMessage: this.invalidFormatErrorMessage,
                            "data-test-selector": Oa.STREET_ADDRESS_2
                        }, i.createElement(P.Sa, {
                            type: P.Ua.Text,
                            value: this.state.streetAddress2,
                            onChange: this.handleStreetAddress2Change,
                            error: !ma.test(this.state.streetAddress2)
                        }))), i.createElement(P.Ya, {
                            margin: {
                                bottom: 2
                            }
                        }, i.createElement(P.Ea, {
                            label: Object(h.d)("City or Town", "PermanentAddress"),
                            error: !ma.test(this.state.city),
                            errorMessage: this.invalidFormatErrorMessage,
                            "data-test-selector": Oa.CITY
                        }, i.createElement(P.Sa, {
                            type: P.Ua.Text,
                            value: this.state.city,
                            onChange: this.handleCityChange,
                            error: !ma.test(this.state.city)
                        }))), i.createElement(P.Ya, {
                            margin: {
                                bottom: 2
                            }
                        }, i.createElement(P.Ea, {
                            label: Object(h.d)("State/Province", "PermanentAddress"),
                            labelOptional: "US" !== this.state.country && "CA" !== this.state.country ? this.optionalText : void 0,
                            error: !ma.test(this.state.state),
                            errorMessage: this.invalidFormatErrorMessage,
                            "data-test-selector": Oa.STATE
                        }, "US" === this.state.country && i.createElement(P.Ab, {
                            onChange: this.handleStateSelectionChange
                        }, this.usaStateSelections), "CA" === this.state.country && i.createElement(P.Ab, {
                            onChange: this.handleStateSelectionChange
                        }, this.canadaStateSelections), "US" !== this.state.country && "CA" !== this.state.country && i.createElement(P.Sa, {
                            type: P.Ua.Text,
                            value: this.state.state,
                            onChange: this.handleStateInputChange,
                            error: !ma.test(this.state.state)
                        }))), i.createElement(P.Ya, null, i.createElement(P.Ea, {
                            label: Object(h.d)("Zip Code/Postal Code", "PermanentAddress"),
                            labelOptional: "US" !== this.state.country ? this.optionalText : void 0,
                            error: !ma.test(this.state.postal),
                            errorMessage: this.invalidFormatErrorMessage,
                            "data-test-selector": Oa.POSTAL
                        }, i.createElement(P.Sa, {
                            type: P.Ua.Text,
                            value: this.state.postal,
                            onChange: this.handlePostalChange,
                            onBlur: this.formatUniquePostalCodes,
                            error: !ma.test(this.state.postal)
                        })))))
                    }, t
                }(i.Component),
                Aa = function() {
                    return Object(h.d)("Please fill them out using the following guidelines: <x:link>Amazon Tax Information Interview Guidelines</x:link>", {
                        "x:link": function(e) {
                            return i.createElement(P.U, {
                                to: "https://help.twitch.tv/customer/portal/articles/2083680",
                                targetBlank: !0
                            }, e)
                        }
                    }, "RegistrationInfoBrick")
                },
                _a = function() {
                    return i.createElement(i.Fragment, null, i.createElement(P.Ya, {
                        margin: {
                            bottom: 1
                        }
                    }, i.createElement(P.W, {
                        fontSize: P.Ca.Size6
                    }, Object(h.d)("Financial information is required to validate your identity. Further, providing this information enables you to participate with any monetization features that may become available.", "RegistrationInfoBrick"))), i.createElement(P.Ya, {
                        margin: {
                            bottom: 1
                        }
                    }, i.createElement(P.W, {
                        fontSize: P.Ca.Size6
                    }, Object(h.d)("Twitch is a subsidiary of Amazon and will use some Amazon tools to register and approve your information for Extensions development.", "RegistrationInfoBrick"))), i.createElement(P.Ya, {
                        margin: {
                            bottom: 1
                        }
                    }, i.createElement(P.W, {
                        fontSize: P.Ca.Size6
                    }, Aa())), i.createElement(P.Ya, {
                        margin: {
                            bottom: 1
                        }
                    }, i.createElement(P.W, {
                        fontSize: P.Ca.Size6
                    }, Object(h.d)("If you are registering on behalf of a company, please fill in the company's information. If you are an individual, please use your personal information.", "RegistrationInfoBrick"))), i.createElement(P.Ya, {
                        margin: {
                            bottom: 1
                        }
                    }, i.createElement(P.W, {
                        fontSize: P.Ca.Size6
                    }, Object(h.d)("The form must match your tax information exactly and any inconsistencies may cause delays in your registration approval.", "RegistrationInfoBrick"))), i.createElement(P.Ya, null, i.createElement(P.W, {
                        fontSize: P.Ca.Size6
                    }, Object(h.d)("You will be able to edit this page later if your information changes.", "RegistrationInfoBrick"))))
                },
                wa = function() {
                    return i.createElement(i.Fragment, null, i.createElement(P.Ya, {
                        margin: {
                            bottom: 1
                        }
                    }, i.createElement(P.W, {
                        fontSize: P.Ca.Size6
                    }, Object(h.d)("Twitch is a subsidiary of Amazon, and will use some Amazon tools to help you get paid, including the forms on this page.", "RegistrationInfoBrick"))), i.createElement(P.Ya, {
                        margin: {
                            bottom: 1
                        }
                    }, i.createElement(P.W, {
                        fontSize: P.Ca.Size6
                    }, Aa())), i.createElement(P.W, {
                        fontSize: P.Ca.Size6
                    }, Object(h.d)("This form must match your tax information exactly, and any inconsistencies may cause delays in your Payout Registration approval. Don't worry, you will still be able to edit this page later on if your information changes.", "RegistrationInfoBrick")))
                },
                Fa = function(e) {
                    return i.createElement(i.Fragment, null, e.onboardEntity === m.I.EXTENSIONS_DEVELOPER ? i.createElement(_a, null) : i.createElement(wa, null))
                };
            ! function(e) {
                e.MONTH = "select-birthdate__month", e.YEAR = "select-birthdate__year", e.DAY = "select-birthdate__day"
            }(Pa || (Pa = {}));
            for (var xa = [], Ra = (new Date).getFullYear(), Da = Ra; Da > Ra - 100; Da--) xa.push(i.createElement("option", {
                value: Da,
                key: "year-" + Da
            }, Da));
            var ja, Ua, La, Ma, Ba, Ya, Wa, Va, za, qa, Ga, Xa, Qa, Ha, Ja = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            month: void 0,
                            year: void 0,
                            day: void 0
                        }, t.yearSelections = xa, t.handleMonthChange = function(e) {
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
                                i = n.day,
                                r = n.year;
                            if (void 0 === a || void 0 === i || void 0 === r) return !1;
                            var o = new Date(r, a, i);
                            return Object(Ln.differenceInYears)(new Date, o) < e
                        }, t
                    }
                    return a.__extends(t, e), Object.defineProperty(t.prototype, "daySelections", {
                        get: function() {
                            for (var e = this.state.month, t = this.state.year || Ra, n = void 0 !== e ? new Date(t, e + 1, 0).getDate() : 31, a = [], r = 1; r <= n; r++) a.push(i.createElement("option", {
                                value: r,
                                key: "day-" + r
                            }, r));
                            return a
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t.prototype.render = function() {
                        return i.createElement(P.Ea, {
                            label: Object(h.d)("Date of Birth", "SelectBirthdate"),
                            hint: Object(h.d)("If you are registering on behalf of a company, please use your personal date of birth.", "SelectBirthdate"),
                            error: this.isUserYoungerThan(13),
                            errorMessage: Object(h.d)("You must be 13 or older to continue.", "SelectBirthdate")
                        }, i.createElement(P.Ja, {
                            gutterSize: P.Ka.Small
                        }, i.createElement(P.P, {
                            cols: {
                                default: 4
                            }
                        }, i.createElement(P.Ab, {
                            defaultValue: "",
                            onChange: this.handleMonthChange,
                            "data-test-selector": Pa.MONTH
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
                        }, Object(h.d)("December", "SelectBirthdate")))), i.createElement(P.P, {
                            cols: {
                                default: 4
                            }
                        }, i.createElement(P.Ab, {
                            defaultValue: "",
                            onChange: this.handleDayChange,
                            "data-test-selector": Pa.DAY
                        }, i.createElement("option", {
                            value: "",
                            disabled: !0
                        }, Object(h.d)("Day", "SelectBirthdate")), this.daySelections)), i.createElement(P.P, {
                            cols: {
                                default: 4
                            }
                        }, i.createElement(P.Ab, {
                            defaultValue: "",
                            onChange: this.handleYearChange,
                            "data-test-selector": Pa.YEAR
                        }, i.createElement("option", {
                            value: "",
                            disabled: !0
                        }, Object(h.d)("Year", "SelectBirthdate")), this.yearSelections))))
                    }, t
                }(i.Component),
                $a = n("8HtN"),
                Za = n("tKvv"),
                Ka = (n("dxDy"), function(e) {
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
                                i = n.day,
                                r = n.year;
                            if (void 0 === a || void 0 === i || void 0 === r) return !1;
                            var o = new Date(r, a, i);
                            return Object(Ln.differenceInYears)(new Date, o) < e
                        }, t.handleContinueClick = function() {
                            t.setState({
                                submittingRegistration: !0
                            }), t.submitPayoutRegistration()
                        }, t.submitPayoutRegistration = function() {
                            return a.__awaiter(t, void 0, void 0, function() {
                                var e, t, n, i, r, o;
                                return a.__generator(this, function(a) {
                                    switch (a.label) {
                                        case 0:
                                            if (e = this.state, t = e.year, n = e.month, i = e.day, void 0 === n || void 0 === i || void 0 === t) return [2];
                                            r = Object(y.a)({
                                                targetUserID: this.props.userID,
                                                birthdate: new Date(t, n, i).toISOString(),
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
                                            }), a.label = 1;
                                        case 1:
                                            return a.trys.push([1, 3, , 4]), [4, this.props.registerPayoutInformation(r)];
                                        case 2:
                                            return !(o = a.sent()).data.registerPayoutInformation || o.data.registerPayoutInformation.error ? (this.setState({
                                                submittingRegistration: !1
                                            }), [2]) : (this.props.updateStepDisplayed(wn.Agreement), [3, 4]);
                                        case 3:
                                            return a.sent(), this.setState({
                                                submittingRegistration: !1
                                            }), [3, 4];
                                        case 4:
                                            return [2]
                                    }
                                })
                            })
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.componentDidMount = function() {
                        if (!this.props.currentStep || this.props.currentStep !== m.J.REGISTRATION_NOT_STARTED) {
                            var e = Object(y.a)({
                                targetUserID: this.props.userID
                            });
                            this.props.startPayoutOnboardingWorkflow(e)
                        }
                    }, t.prototype.render = function() {
                        var e = i.createElement(P.z, {
                            "data-test-selector": "payout-onboarding-registration__continue-button",
                            disabled: !this.isRegistrationComplete || this.state.submittingRegistration,
                            state: this.state.submittingRegistration ? P.E.Loading : P.E.Default,
                            onClick: this.handleContinueClick
                        }, Object(h.d)("Continue", "PayoutOnboardingRegistration"));
                        return i.createElement(C.a, {
                            footer: e
                        }, i.createElement(T.a, null, i.createElement(Fa, {
                            onboardEntity: this.props.onboardEntity
                        })), i.createElement(zn, {
                            title: Object(h.d)("Contact Info", "PayoutOnboardingRegistration")
                        }), i.createElement(P.Ya, {
                            className: "payout-onboarding-registration__form-container"
                        }, i.createElement(va, {
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
                        })), i.createElement(zn, {
                            title: Object(h.d)("Permanent Address", "PayoutOnboardingRegistration")
                        }), i.createElement(Ia, {
                            onCountryChange: this.updateCountry,
                            onStreetAddressChange: this.updateStreetAddress,
                            onStreetAddress2Change: this.updateStreetAddress2,
                            onCityChange: this.updateCity,
                            onStateChange: this.updateState,
                            onPostalChange: this.updatePostal
                        }), this.isUserYoungerThan(18) && i.createElement(i.Fragment, null, i.createElement(zn, {
                            title: Object(h.d)("Parent Info", "PayoutOnboardingRegistration")
                        }), i.createElement(P.Ya, {
                            className: "payout-onboarding-registration__form-container"
                        }, i.createElement(ya, {
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
                            return pa.test(this.state.email) && this.state.email === this.state.confirmEmail
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "validAge", {
                        get: function() {
                            return !this.isUserYoungerThan(13) && !(this.isUserYoungerThan(18) && !(this.state.parentName && ma.test(this.state.parentName) && this.state.parentEmail && pa.test(this.state.parentEmail)))
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "validInputFormat", {
                        get: function() {
                            return !!(ma.test(this.state.firstName) && ma.test(this.state.lastName) && ma.test(this.state.country) && ma.test(this.state.streetAddress) && ma.test(this.state.city)) && !(this.state.middleName && !ma.test(this.state.middleName) || this.state.companyName && !ma.test(this.state.companyName) || this.state.streetAddress2 && !ma.test(this.state.streetAddress2) || this.state.state && !ma.test(this.state.state) || this.state.postal && !ma.test(this.state.postal))
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t
                }(i.Component)),
                ei = Object(g.compose)(Object(u.a)(Za, {
                    name: "startPayoutOnboardingWorkflow"
                }), Object(u.a)($a, {
                    name: "registerPayoutInformation"
                }))(Ka),
                ti = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.handleContinueClick = function() {
                            t.props.updateStepDisplayed(wn.Summary)
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        return i.createElement(C.a, null, i.createElement(zn, {
                            title: Object(h.d)("Partnership Approval", "PayoutOnboardingReview"),
                            statusText: this.statusText,
                            statusType: this.statusType,
                            borderTop: !0
                        }), i.createElement(P.Fb, {
                            borderTop: !0,
                            borderBottom: !0,
                            padding: 2
                        }, i.createElement(P.Fb, {
                            borderMarked: !0,
                            padding: 2
                        }, this.inReview ? Object(h.d)("Your information is currently under review.", "PayoutOnboardingReview") : Object(h.d)("Your information has been validated by the Partnership Team.", "PayoutOnboardingReview"))), i.createElement(P.Ya, {
                            padding: 2
                        }, i.createElement(P.z, {
                            onClick: this.handleContinueClick,
                            disabled: this.inReview
                        }, Object(h.d)("Continue", "PayoutOnboardingReview"))))
                    }, Object.defineProperty(t.prototype, "inReview", {
                        get: function() {
                            return this.props.currentStep === m.J.REVIEW_PENDING
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
                            return this.inReview ? P.ib.Prime : P.ib.Success
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t
                }(i.Component),
                ni = function() {
                    return Object(h.d)("Partner Onboarding", "PayoutOnboardingContainer")
                },
                ai = function() {
                    return Object(h.d)("Manage or modify your payout information.", "PayoutOnboardingContainer")
                },
                ii = function() {
                    return Object(h.d)("Payout Registration", "PayoutOnboardingContainer")
                },
                ri = function() {
                    return Object(h.d)("Begin your payout registration.", "PayoutOnboardingContainer")
                },
                oi = function() {
                    return Object(h.d)("Twitch Partner Agreement", "PayoutOnboardingContainer")
                },
                si = function() {
                    return Object(h.d)("Agree to the Twitch Partner Agreement.", "PayoutOnboardingContainer")
                },
                li = function() {
                    return Object(h.d)("Tax Interviews", "PayoutOnboardingContainer")
                },
                di = function() {
                    return Object(h.d)("Submit your tax information. The two forms below are very similar, but the information is used for different situations, so both forms are required and should be filled out carefully.", "PayoutOnboardingContainer")
                },
                ci = function() {
                    return Object(h.d)("Payout Setup", "PayoutOnboardingContainer")
                },
                ui = function() {
                    return Object(h.d)("Choose your payout method.", "PayoutOnboardingContainer")
                },
                mi = ((ja = {})[wn.Summary] = {
                    title: (Ua = {}, Ua[m.I.AFFILIATE] = function() {
                        return Object(h.d)("Affiliate Onboarding", "PayoutOnboardingContainer")
                    }, Ua[m.I.EXTENSIONS_DEVELOPER] = function() {
                        return Object(h.d)("Extensions Developer Onboarding", "PayoutOnboardingContainer")
                    }, Ua[m.I.STANDARD_PARTNER] = function() {
                        return ni()
                    }, Ua[m.I.PREMIUM_PARTNER] = function() {
                        return ni()
                    }, Ua[m.I.CUSTOM_PARTNER] = function() {
                        return ni()
                    }, Ua),
                    description: (La = {}, La[m.I.AFFILIATE] = function() {
                        return ai()
                    }, La[m.I.EXTENSIONS_DEVELOPER] = function() {
                        return Object(h.d)("Manage or modify your Extensions Developer Onboarding.", "PayoutOnboardingContainer")
                    }, La[m.I.STANDARD_PARTNER] = function() {
                        return ai()
                    }, La[m.I.PREMIUM_PARTNER] = function() {
                        return ai()
                    }, La[m.I.CUSTOM_PARTNER] = function() {
                        return ai()
                    }, La)
                }, ja[wn.Registration] = {
                    title: (Ma = {}, Ma[m.I.AFFILIATE] = function() {
                        return ii()
                    }, Ma[m.I.EXTENSIONS_DEVELOPER] = function() {
                        return Object(h.d)("Extensions Developer Registration", "PayoutOnboardingContainer")
                    }, Ma[m.I.STANDARD_PARTNER] = function() {
                        return ii()
                    }, Ma[m.I.PREMIUM_PARTNER] = function() {
                        return ii()
                    }, Ma[m.I.CUSTOM_PARTNER] = function() {
                        return ii()
                    }, Ma),
                    description: (Ba = {}, Ba[m.I.AFFILIATE] = function() {
                        return ri()
                    }, Ba[m.I.EXTENSIONS_DEVELOPER] = function() {
                        return Object(h.d)("Begin your Extensions Developer Registration.", "PayoutOnboardingContainer")
                    }, Ba[m.I.STANDARD_PARTNER] = function() {
                        return ri()
                    }, Ba[m.I.PREMIUM_PARTNER] = function() {
                        return ri()
                    }, Ba[m.I.CUSTOM_PARTNER] = function() {
                        return ri()
                    }, Ba)
                }, ja[wn.Agreement] = {
                    title: (Ya = {}, Ya[m.I.AFFILIATE] = function() {
                        return Object(h.d)("Twitch Affiliate Agreement", "PayoutOnboardingContainer")
                    }, Ya[m.I.EXTENSIONS_DEVELOPER] = function() {
                        return Object(h.d)("Twitch Extensions Developer Agreement", "PayoutOnboardingContainer")
                    }, Ya[m.I.STANDARD_PARTNER] = function() {
                        return oi()
                    }, Ya[m.I.PREMIUM_PARTNER] = function() {
                        return oi()
                    }, Ya[m.I.CUSTOM_PARTNER] = function() {
                        return oi()
                    }, Ya),
                    description: (Wa = {}, Wa[m.I.AFFILIATE] = function() {
                        return Object(h.d)("Agree to the Twitch Affiliate Agreement.", "PayoutOnboardingContainer")
                    }, Wa[m.I.EXTENSIONS_DEVELOPER] = function() {
                        return Object(h.d)("Agree to the Twitch Extensions Developer Agreement.", "PayoutOnboardingContainer")
                    }, Wa[m.I.STANDARD_PARTNER] = function() {
                        return si()
                    }, Wa[m.I.PREMIUM_PARTNER] = function() {
                        return si()
                    }, Wa[m.I.CUSTOM_PARTNER] = function() {
                        return si()
                    }, Wa)
                }, ja[wn.TaxInterview] = {
                    title: (Va = {}, Va[m.I.AFFILIATE] = function() {
                        return li()
                    }, Va[m.I.EXTENSIONS_DEVELOPER] = function() {
                        return li()
                    }, Va[m.I.STANDARD_PARTNER] = function() {
                        return li()
                    }, Va[m.I.PREMIUM_PARTNER] = function() {
                        return li()
                    }, Va[m.I.CUSTOM_PARTNER] = function() {
                        return li()
                    }, Va),
                    description: (za = {}, za[m.I.AFFILIATE] = function() {
                        return di()
                    }, za[m.I.EXTENSIONS_DEVELOPER] = function() {
                        return di()
                    }, za[m.I.STANDARD_PARTNER] = function() {
                        return di()
                    }, za[m.I.PREMIUM_PARTNER] = function() {
                        return di()
                    }, za[m.I.CUSTOM_PARTNER] = function() {
                        return di()
                    }, za)
                }, ja[wn.PayoutMethod] = {
                    title: (qa = {}, qa[m.I.AFFILIATE] = function() {
                        return ci()
                    }, qa[m.I.EXTENSIONS_DEVELOPER] = function() {
                        return Object(h.d)("Financial Information", "PayoutOnboardingContainer")
                    }, qa[m.I.STANDARD_PARTNER] = function() {
                        return ci()
                    }, qa[m.I.PREMIUM_PARTNER] = function() {
                        return ci()
                    }, qa[m.I.CUSTOM_PARTNER] = function() {
                        return ci()
                    }, qa),
                    description: (Ga = {}, Ga[m.I.AFFILIATE] = function() {
                        return ui()
                    }, Ga[m.I.EXTENSIONS_DEVELOPER] = function() {
                        return Object(h.d)("Submit your financial information.", "PayoutOnboardingContainer")
                    }, Ga[m.I.STANDARD_PARTNER] = function() {
                        return ui()
                    }, Ga[m.I.PREMIUM_PARTNER] = function() {
                        return ui()
                    }, Ga[m.I.CUSTOM_PARTNER] = function() {
                        return ui()
                    }, Ga)
                }, ja[wn.Review] = {
                    title: (Xa = {}, Xa[m.I.CUSTOM_PARTNER] = function() {
                        return Object(h.d)("Partnership Approval", "PayoutOnboardingContainer")
                    }, Xa),
                    description: (Qa = {}, Qa[m.I.CUSTOM_PARTNER] = function() {
                        return Object(h.d)("The Partnership Team will validate your paperwork and activate your new agreement.", "PayoutOnboardingContainer")
                    }, Qa)
                }, ja),
                pi = function() {
                    return Object(h.d)("Continue", "InProgressInfo")
                },
                gi = function(e) {
                    var t = e.onboardEntity === m.I.EXTENSIONS_DEVELOPER;
                    return i.createElement(P.Ya, {
                        margin: {
                            bottom: 1
                        }
                    }, i.createElement(P.Qa, {
                        margin: {
                            bottom: 1
                        }
                    }, i.createElement(P.W, {
                        type: P.Wb.P
                    }, t ? Object(h.d)("Your developer registration is currently in progress. Please click {buttonLabel} to pick up where you left off.", {
                        buttonLabel: pi()
                    }, "InProgressInfo") : Object(h.d)("Your payout setup is currently in progress. Please click {buttonLabel} to pick up where you left off.", {
                        buttonLabel: pi()
                    }, "InProgressInfo"))), e.startOverEnabled && i.createElement(i.Fragment, null, i.createElement(P.Qa, {
                        margin: {
                            bottom: 1
                        }
                    }, i.createElement(P.W, {
                        type: P.Wb.P
                    }, Object(h.d)("If you would like to modify your information, please click {buttonLabel}.", {
                        buttonLabel: Object(h.d)("Start Over", "InProgressInfo")
                    }, "InProgressInfo"))), i.createElement(P.W, {
                        type: P.Wb.P
                    }, t ? Object(h.d)("NOTE: Starting over will lose any progress.", "InProgressInfo") : Object(h.d)("NOTE: If you choose Start Over you will delete any stored payout information on your account and we will hold any payouts until you have fully completed the form.", "InProgressInfo"))))
                },
                hi = function(e) {
                    return i.createElement(i.Fragment, null, i.createElement(P.Qa, {
                        margin: {
                            bottom: 1
                        }
                    }, i.createElement(P.W, {
                        type: P.Wb.H4,
                        bold: !0
                    }, Object(h.d)("Setup Complete", "SetupCompleteInfo"))), e.onboardEntity === m.I.EXTENSIONS_DEVELOPER ? i.createElement(P.Qa, {
                        margin: {
                            bottom: 1
                        }
                    }, i.createElement(P.W, {
                        type: P.Wb.P
                    }, Object(h.d)("You made it! You’re all set. Return to the <x:link>Developer Portal.</x:link>", {
                        "x:link": function(e) {
                            return i.createElement(P.U, {
                                to: "https://dev.twitch.tv/dashboard"
                            }, e)
                        }
                    }, "SetupCompleteInfo"))) : i.createElement(P.Qa, {
                        margin: {
                            bottom: 1
                        }
                    }, i.createElement(P.W, {
                        type: P.Wb.P
                    }, Object(h.d)("You made it! You’re all set and no further action is needed.", "SetupCompleteInfo"))), i.createElement(P.Qa, {
                        margin: {
                            bottom: 1
                        }
                    }, i.createElement(P.W, {
                        type: P.Wb.P
                    }, Object(h.d)("If you want to change your payout information, click {buttonLabel} to reset the form.", {
                        buttonLabel: Object(h.d)("Start Over", "SetupCompleteInfo")
                    }, "SetupCompleteInfo"))))
                };
            ! function(e) {
                e.START_OVER_BUTTON = "progress-brick__start-over-button", e.CONTINUE_BUTTON = "progress-brick__continue-button"
            }(Ha || (Ha = {}));
            var bi, fi = function(e) {
                var t = !(!e.currentStep || e.currentStep === m.J.ROYALTY_TAX_INTERVIEW_PENDING || e.currentStep === m.J.SERVICE_TAX_INTERVIEW_PENDING);
                return i.createElement(P.Fb, {
                    padding: 2,
                    borderLeft: !0,
                    borderRight: !0,
                    borderTop: !0
                }, i.createElement(P.Fb, {
                    borderMarked: !0,
                    padding: 2,
                    elevation: 1
                }, e.currentStep === m.J.COMPLETED ? i.createElement(hi, {
                    onboardEntity: e.onboardEntity
                }) : i.createElement(gi, {
                    onboardEntity: e.onboardEntity,
                    startOverEnabled: t
                }), i.createElement(P.Ya, {
                    display: P.X.Flex
                }, e.currentStep !== m.J.COMPLETED && i.createElement(P.Ya, {
                    margin: {
                        right: 1
                    }
                }, i.createElement(P.z, {
                    "data-test-selector": Ha.CONTINUE_BUTTON,
                    onClick: function() {
                        return e.updateStepDisplayed(function(e) {
                            switch (e) {
                                case m.J.AGREEMENT_NOT_STARTED:
                                    return wn.Agreement;
                                case m.J.ROYALTY_TAX_INTERVIEW_NOT_STARTED:
                                case m.J.ROYALTY_TAX_INTERVIEW_PENDING:
                                case m.J.ROYALTY_TAX_INTERVIEW_ACTION_REQUIRED:
                                case m.J.ROYALTY_TAX_INTERVIEW_MISMATCH:
                                case m.J.ROYALTY_TAX_INTERVIEW_FAILED:
                                case m.J.SERVICE_TAX_INTERVIEW_NOT_STARTED:
                                case m.J.SERVICE_TAX_INTERVIEW_PENDING:
                                case m.J.SERVICE_TAX_INTERVIEW_ACTION_REQUIRED:
                                case m.J.SERVICE_TAX_INTERVIEW_MISMATCH:
                                case m.J.SERVICE_TAX_INTERVIEW_FAILED:
                                    return wn.TaxInterview;
                                case m.J.PAYOUT_METHOD_NOT_STARTED:
                                case m.J.PAYOUT_METHOD_PENDING:
                                    return wn.PayoutMethod;
                                case m.J.REVIEW_PENDING:
                                    return wn.Review;
                                default:
                                    return wn.Summary
                            }
                        }(e.currentStep))
                    }
                }, Object(h.d)("Continue", "PayoutOnboardingSummary"))), t && i.createElement(P.z, {
                    "data-test-selector": Ha.START_OVER_BUTTON,
                    type: P.F.Hollow,
                    onClick: e.showStartOverModal
                }, Object(h.d)("Start Over", "PayoutOnboardingSummary")))))
            };
            n("U1LZ");
            ! function(e) {
                e[e.NotStarted = 0] = "NotStarted", e[e.Pending = 1] = "Pending", e[e.Failed = 2] = "Failed", e[e.Completed = 3] = "Completed"
            }(bi || (bi = {}));
            var vi, yi = function(e) {
                    return i.createElement(P.Fb, {
                        borderLeft: !0,
                        borderRight: !0,
                        borderTop: !0
                    }, i.createElement(P.Va, {
                        onClick: e.onClick,
                        disabled: !e.isEnabled,
                        type: P.Wa.Alpha
                    }, i.createElement(P.Ya, {
                        padding: 2,
                        alignItems: P.f.Center,
                        display: P.X.Flex,
                        flexWrap: P.Ba.NoWrap
                    }, i.createElement(P.Ya, {
                        flexGrow: 1
                    }, i.createElement(P.Qa, {
                        margin: {
                            bottom: .5
                        }
                    }, i.createElement(P.W, {
                        type: P.Wb.H6,
                        bold: !0
                    }, e.title)), i.createElement(P.W, {
                        color: P.O.Alt2
                    }, e.description)), i.createElement(P.Ya, {
                        display: P.X.Flex,
                        alignItems: P.f.Center
                    }, (e.type === bi.Completed || e.isEnabled) && i.createElement(P.Ya, null, i.createElement(P.W, {
                        type: P.Wb.H4,
                        transform: P.Vb.Uppercase,
                        bold: !0
                    }, i.createElement(P.hb, {
                        label: function(e) {
                            switch (e) {
                                case bi.Pending:
                                    return Object(h.d)("Under Review", "ProgressRow");
                                case bi.Failed:
                                    return Object(h.d)("Failed", "ProgressRow");
                                case bi.Completed:
                                    return Object(h.d)("Completed", "ProgressRow");
                                default:
                                    return ""
                            }
                        }(e.type),
                        type: function(e) {
                            switch (e) {
                                case bi.NotStarted:
                                    return;
                                case bi.Pending:
                                    return P.ib.Prime;
                                case bi.Failed:
                                    return P.ib.Alert;
                                case bi.Completed:
                                    return P.ib.Success;
                                default:
                                    return
                            }
                        }(e.type)
                    }))), e.isEnabled && i.createElement(P.Ya, {
                        margin: {
                            left: 1
                        },
                        display: P.X.Flex,
                        alignItems: P.f.Center
                    }, i.createElement(P.tb, {
                        asset: P.ub.AngleRight
                    }))))))
                },
                Si = function() {
                    return Object(h.d)("Submit your tax information.", "PayoutOnboardingSummary")
                },
                Ei = function() {
                    return Object(h.d)("Choose your payout method.", "PayoutOnboardingSummary")
                },
                ki = function() {
                    return Object(h.d)("Submit your financial information.", "PayoutOnboardingSummary")
                };
            ! function(e) {
                e.REGISTRATION = "registration-selector", e.AGREEMENT = "agreement-selector", e.TAX_INTERVIEW = "tax-interview-selector", e.PAYOUT_METHOD = "payout-method-selector", e.REVIEW = "review-selector"
            }(vi || (vi = {}));
            var Ni = function(e, t, n) {
                    return Object(h.d)("Step {numOfCurrentStep} of {numOfTotalSteps}: {stepTitle}", {
                        numOfCurrentStep: e,
                        numOfTotalSteps: t,
                        stepTitle: n
                    }, "ProgressRow")
                },
                Oi = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.updateStepDisplayed = function(e) {
                            return function() {
                                t.props.updateStepDisplayed(e)
                            }
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        return i.createElement(P.Fb, {
                            className: "payout-onboarding-summary",
                            background: P.r.Base,
                            borderBottom: !0,
                            borderRadius: {
                                bottomLeft: P.x.Medium,
                                bottomRight: P.x.Medium
                            }
                        }, this.isRegistrationComplete && i.createElement(fi, {
                            currentStep: this.props.currentStep,
                            onboardEntity: this.props.onboardEntity,
                            updateStepDisplayed: this.props.updateStepDisplayed,
                            showStartOverModal: this.props.showStartOverModal
                        }), i.createElement(yi, {
                            "data-test-selector": vi.REGISTRATION,
                            title: this.step1Title,
                            description: this.step1Description,
                            type: this.step1Status,
                            onClick: this.updateStepDisplayed(wn.Registration),
                            isEnabled: !this.isRegistrationComplete
                        }), i.createElement(yi, {
                            "data-test-selector": vi.AGREEMENT,
                            title: this.step2Title,
                            description: this.step2Description,
                            type: this.step2Status,
                            onClick: this.updateStepDisplayed(wn.Agreement),
                            isEnabled: this.isRegistrationComplete && !this.isAgreementComplete
                        }), i.createElement(yi, {
                            "data-test-selector": vi.TAX_INTERVIEW,
                            title: this.step3Title,
                            description: this.step3Description,
                            type: this.step3Status,
                            onClick: this.updateStepDisplayed(wn.TaxInterview),
                            isEnabled: this.isAgreementComplete && !this.isTaxInterviewComplete
                        }), i.createElement(yi, {
                            "data-test-selector": vi.PAYOUT_METHOD,
                            title: this.step4Title,
                            description: this.step4Description,
                            type: this.step4Status,
                            onClick: this.updateStepDisplayed(wn.PayoutMethod),
                            isEnabled: this.isTaxInterviewComplete && !this.isPayoutMethodComplete
                        }), this.props.onboardEntity === m.I.CUSTOM_PARTNER && i.createElement(yi, {
                            "data-test-selector": vi.REVIEW,
                            title: this.step5Title,
                            description: this.step5Description,
                            type: this.step5Status,
                            onClick: this.updateStepDisplayed(wn.Review),
                            isEnabled: this.isPayoutMethodComplete && !this.isReviewComplete
                        }))
                    }, Object.defineProperty(t.prototype, "isRegistrationComplete", {
                        get: function() {
                            return !(!this.props.currentStep || this.props.currentStep === m.J.CANCELED) && this.props.currentStep !== m.J.REGISTRATION_NOT_STARTED
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "isAgreementComplete", {
                        get: function() {
                            return !(!this.isRegistrationComplete || !this.props.currentStep || this.props.currentStep === m.J.AGREEMENT_NOT_STARTED)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "isTaxInterviewComplete", {
                        get: function() {
                            return !(!this.isAgreementComplete || !this.props.currentStep || this.props.currentStep === m.J.ROYALTY_TAX_INTERVIEW_NOT_STARTED || this.props.currentStep === m.J.ROYALTY_TAX_INTERVIEW_PENDING || this.props.currentStep === m.J.ROYALTY_TAX_INTERVIEW_FAILED || this.props.currentStep === m.J.ROYALTY_TAX_INTERVIEW_ACTION_REQUIRED || this.props.currentStep === m.J.ROYALTY_TAX_INTERVIEW_MISMATCH || this.props.currentStep === m.J.SERVICE_TAX_INTERVIEW_NOT_STARTED || this.props.currentStep === m.J.SERVICE_TAX_INTERVIEW_PENDING || this.props.currentStep === m.J.SERVICE_TAX_INTERVIEW_FAILED || this.props.currentStep === m.J.SERVICE_TAX_INTERVIEW_ACTION_REQUIRED || this.props.currentStep === m.J.SERVICE_TAX_INTERVIEW_MISMATCH)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "isPayoutMethodComplete", {
                        get: function() {
                            return !(!this.isTaxInterviewComplete || !this.props.currentStep || this.props.currentStep === m.J.PAYOUT_METHOD_NOT_STARTED || this.props.currentStep === m.J.PAYOUT_METHOD_PENDING)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "isReviewComplete", {
                        get: function() {
                            return !(!this.isPayoutMethodComplete || !this.props.currentStep || this.props.currentStep === m.J.REVIEW_PENDING)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "numOfTotalSteps", {
                        get: function() {
                            return this.props.onboardEntity === m.I.CUSTOM_PARTNER ? 5 : 4
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "step1Title", {
                        get: function() {
                            return Ni(Object(h.f)(1), Object(h.f)(this.numOfTotalSteps), mi[wn.Registration].title[this.props.onboardEntity]())
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "step1Description", {
                        get: function() {
                            return this.props.onboardEntity === m.I.EXTENSIONS_DEVELOPER ? this.isRegistrationComplete ? Object(h.d)("Your Extensions Developer Registration is complete.", "PayoutOnboardingSummary") : Object(h.d)("Begin your Extensions Developer Registration.", "PayoutOnboardingSummary") : this.isRegistrationComplete ? Object(h.d)("Your payout registration is complete.", "PayoutOnboardingSummary") : Object(h.d)("Begin your payout registration.", "PayoutOnboardingSummary")
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "step1Status", {
                        get: function() {
                            return this.isRegistrationComplete ? bi.Completed : bi.NotStarted
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "step2Title", {
                        get: function() {
                            return Ni(Object(h.f)(2), Object(h.f)(this.numOfTotalSteps), mi[wn.Agreement].title[this.props.onboardEntity]())
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "step2Description", {
                        get: function() {
                            switch (this.props.onboardEntity) {
                                case m.I.AFFILIATE:
                                    return this.isAgreementComplete ? Object(h.d)("You have agreed to the Twitch Affiliate Agreement.", "PayoutOnboardingSummary") : Object(h.d)("Agree to the Twitch Affiliate Agreement.", "PayoutOnboardingSummary");
                                case m.I.EXTENSIONS_DEVELOPER:
                                    return this.isAgreementComplete ? Object(h.d)("You have agreed to the Twitch Extensions Developer Agreement.", "PayoutOnboardingSummary") : Object(h.d)("Agree to the Twitch Extensions Developer Agreement.", "PayoutOnboardingSummary");
                                case m.I.STANDARD_PARTNER:
                                case m.I.PREMIUM_PARTNER:
                                case m.I.CUSTOM_PARTNER:
                                    return this.isAgreementComplete ? Object(h.d)("You have agreed to the Twitch Partner Agreement.", "PayoutOnboardingSummary") : Object(h.d)("Agree to the Twitch Partner Agreement.", "PayoutOnboardingSummary");
                                default:
                                    return ""
                            }
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "step2Status", {
                        get: function() {
                            return this.isAgreementComplete ? bi.Completed : bi.NotStarted
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "step3Title", {
                        get: function() {
                            return Ni(Object(h.f)(3), Object(h.f)(this.numOfTotalSteps), mi[wn.TaxInterview].title[this.props.onboardEntity]())
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "step3Description", {
                        get: function() {
                            if (!this.props.currentStep || !this.isAgreementComplete) return Si();
                            switch (this.props.currentStep) {
                                case m.J.ROYALTY_TAX_INTERVIEW_NOT_STARTED:
                                    return Si();
                                case m.J.ROYALTY_TAX_INTERVIEW_PENDING:
                                    return Object(h.d)("Your royalty tax information is currently under review. This process usually takes a few minutes.", "PayoutOnboardingSummary");
                                case m.J.ROYALTY_TAX_INTERVIEW_FAILED:
                                case m.J.ROYALTY_TAX_INTERVIEW_ACTION_REQUIRED:
                                case m.J.ROYALTY_TAX_INTERVIEW_MISMATCH:
                                case m.J.SERVICE_TAX_INTERVIEW_FAILED:
                                case m.J.SERVICE_TAX_INTERVIEW_ACTION_REQUIRED:
                                case m.J.SERVICE_TAX_INTERVIEW_MISMATCH:
                                    return Object(h.d)("We could not successfully validate your tax information. Please review and correct your tax information.", "PayoutOnboardingSummary");
                                case m.J.SERVICE_TAX_INTERVIEW_NOT_STARTED:
                                    return Object(h.d)("Royalty tax approved. Please complete your service tax information.", "PayoutOnboardingSummary");
                                case m.J.SERVICE_TAX_INTERVIEW_PENDING:
                                    return Object(h.d)("Your service tax information is currently under review. This process usually takes a few minutes.", "PayoutOnboardingSummary");
                                default:
                                    return Object(h.d)("Your tax information has been successfully validated.", "PayoutOnboardingSummary")
                            }
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "step3Status", {
                        get: function() {
                            if (!this.props.currentStep || !this.isAgreementComplete) return bi.NotStarted;
                            switch (this.props.currentStep) {
                                case m.J.ROYALTY_TAX_INTERVIEW_NOT_STARTED:
                                    return bi.NotStarted;
                                case m.J.ROYALTY_TAX_INTERVIEW_PENDING:
                                    return bi.Pending;
                                case m.J.ROYALTY_TAX_INTERVIEW_FAILED:
                                case m.J.ROYALTY_TAX_INTERVIEW_ACTION_REQUIRED:
                                case m.J.ROYALTY_TAX_INTERVIEW_MISMATCH:
                                    return bi.Failed;
                                case m.J.SERVICE_TAX_INTERVIEW_NOT_STARTED:
                                    return bi.NotStarted;
                                case m.J.SERVICE_TAX_INTERVIEW_PENDING:
                                    return bi.Pending;
                                case m.J.SERVICE_TAX_INTERVIEW_FAILED:
                                case m.J.SERVICE_TAX_INTERVIEW_ACTION_REQUIRED:
                                case m.J.SERVICE_TAX_INTERVIEW_MISMATCH:
                                    return bi.Failed;
                                default:
                                    return bi.Completed
                            }
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "step4Title", {
                        get: function() {
                            return Ni(Object(h.f)(4), Object(h.f)(this.numOfTotalSteps), mi[wn.PayoutMethod].title[this.props.onboardEntity]())
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "step4Description", {
                        get: function() {
                            var e = this.props.onboardEntity === m.I.EXTENSIONS_DEVELOPER;
                            return this.isTaxInterviewComplete ? this.props.currentStep === m.J.PAYOUT_METHOD_PENDING ? e ? Object(h.d)("Your financial information is currently under review. This process usually takes a few minutes.", "PayoutOnboardingSummary") : Object(h.d)("Your payout method is currently under review. This process usually takes a few minutes.", "PayoutOnboardingSummary") : this.isPayoutMethodComplete ? e ? Object(h.d)("Your financial information has been successfully validated.", "PayoutOnboardingSummary") : Object(h.d)("Your payout method has been successfully validated.", "PayoutOnboardingSummary") : e ? ki() : Ei() : e ? ki() : Ei()
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "step4Status", {
                        get: function() {
                            return this.isTaxInterviewComplete ? this.props.currentStep === m.J.PAYOUT_METHOD_PENDING ? bi.Pending : this.isPayoutMethodComplete ? bi.Completed : bi.NotStarted : bi.NotStarted
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "step5Title", {
                        get: function() {
                            return this.props.onboardEntity === m.I.CUSTOM_PARTNER ? Ni(Object(h.f)(5), Object(h.f)(this.numOfTotalSteps), mi[wn.Review].title[this.props.onboardEntity]()) : ""
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "step5Description", {
                        get: function() {
                            return this.isPayoutMethodComplete ? this.props.currentStep === m.J.REVIEW_PENDING ? Object(h.d)("The Partnership Team is currently validating your paperwork.", "PayoutOnboardingSummary") : Object(h.d)("The Partnership Team has approved your new agreement.", "PayoutOnboardingSummary") : Object(h.d)("The Partnership Team will validate your paperwork and activate your new agreement.", "PayoutOnboardingSummary")
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "step5Status", {
                        get: function() {
                            return this.isPayoutMethodComplete ? this.props.currentStep === m.J.REVIEW_PENDING ? bi.Pending : bi.Completed : bi.NotStarted
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t
                }(i.Component),
                Ti = function(e) {
                    return Object(h.d)("Example {exampleNum}", {
                        exampleNum: Object(h.f)(e)
                    }, "TaxInfoBrick")
                },
                Ci = function(e) {
                    if (e.taxStatus === qi.NotStarted || e.taxStatus === qi.Completed) return null;
                    var t;
                    switch (e.taxStatus) {
                        case qi.ActionRequired:
                            t = i.createElement(P.W, {
                                fontSize: P.Ca.Size6
                            }, Object(h.d)("Looks like you may need to mail documentation to Amazon to complete this process. However, you may be able to avoid this by consenting to electronic signature of your tax form. To do this, click the button below to retake the tax interview and be sure to check the box to consent to electronic signature.", "TaxInfoBrick"));
                            break;
                        case qi.Failed:
                            t = i.createElement(P.W, {
                                fontSize: P.Ca.Size6
                            }, Object(h.d)("We could not successfully validate your tax information.", "TaxInfoBrick"));
                            break;
                        case qi.Mismatch:
                            t = i.createElement(i.Fragment, null, i.createElement(P.Qa, {
                                margin: {
                                    bottom: 1
                                }
                            }, i.createElement(P.W, {
                                fontSize: P.Ca.Size6
                            }, Object(h.d)("Thank you for completing your tax interview. However, the details you have just entered into the tax form does not match the information on file from Step 1 (Registration). Your tax information from Steps 1 and 3 MUST match in order to receive payouts from Twitch.", "TaxInfoBrick"))), i.createElement(P.Qa, {
                                margin: {
                                    bottom: 1
                                }
                            }, i.createElement(P.W, {
                                fontSize: P.Ca.Size6
                            }, Ti(1))), i.createElement(P.Ya, {
                                margin: {
                                    left: 1,
                                    bottom: 1
                                }
                            }, i.createElement(P.W, {
                                fontSize: P.Ca.Size6
                            }, Object(h.d)("Step 1 user is John Doe from the United States of America.", "TaxInfoBrick")), i.createElement(P.W, {
                                fontSize: P.Ca.Size6
                            }, Object(h.d)("Step 3 tax information should be for John Doe from the United States of America.", "TaxInfoBrick")), i.createElement(P.W, {
                                fontSize: P.Ca.Size6
                            }, Object(h.d)("Step 4 selected payout method is check paid to John Doe from the United States of America.", "TaxInfoBrick"))), i.createElement(P.Qa, {
                                margin: {
                                    bottom: 1
                                }
                            }, i.createElement(P.W, {
                                fontSize: P.Ca.Size6
                            }, Ti(2))), i.createElement(P.Ya, {
                                margin: {
                                    left: 1,
                                    bottom: 1
                                }
                            }, i.createElement(P.W, {
                                fontSize: P.Ca.Size6
                            }, Object(h.d)("Step 1 user is John Doe working for Cool Gaming, Inc. from France.", "TaxInfoBrick")), i.createElement(P.W, {
                                fontSize: P.Ca.Size6
                            }, Object(h.d)("Step 3 tax information should be for Cool Gaming, Inc. from France.", "TaxInfoBrick")), i.createElement(P.W, {
                                fontSize: P.Ca.Size6
                            }, Object(h.d)("Step 4 selected payout method is a wire paid to Cool Gaming, Inc. from France.", "TaxInfoBrick"))), i.createElement(P.W, {
                                fontSize: P.Ca.Size6
                            }, Object(h.d)("Please see the list of errors below for the specific fields that require correction.", "TaxInfoBrick")));
                            break;
                        default:
                            return null
                    }
                    return i.createElement(P.Fb, {
                        padding: 2,
                        borderMarked: !0,
                        background: P.r.Base,
                        margin: {
                            bottom: 2
                        },
                        elevation: 1
                    }, t)
                },
                Pi = n("HGFl"),
                Ii = function(e) {
                    return i.createElement(i.Fragment, null, i.createElement(P.Qa, {
                        margin: {
                            bottom: 1
                        }
                    }, i.createElement(P.W, {
                        fontSize: P.Ca.Size6
                    }, Object(h.d)("If you prefer not to consent to electronic signature, you will be required to mail additional documentation to Amazon. As a reminder, Twitch is a subsidiary of Amazon, and Amazon handles our tax forms. To proceed, please follow these instructions:", "TaxActionRequiredInfo"))), i.createElement(P.Ya, {
                        margin: {
                            bottom: 1
                        }
                    }, i.createElement(P.W, {
                        fontSize: P.Ca.Size6
                    }, Object(h.d)("1. Click the button below to retake the tax information interview.", "TaxActionRequiredInfo")), i.createElement(P.W, {
                        fontSize: P.Ca.Size6
                    }, Object(h.d)("2. Proceed to the page that asks you to print out a hardcopy of the tax form and print out the form.", "TaxActionRequiredInfo")), i.createElement(P.W, {
                        fontSize: P.Ca.Size6
                    }, Object(h.d)("3. Sign the form with a blue or black pen.", "TaxActionRequiredInfo")), i.createElement(P.W, {
                        fontSize: P.Ca.Size6
                    }, Object(h.d)("4. Mail the hardcopy of your tax form to:", "TaxActionRequiredInfo"))), i.createElement(P.Ya, {
                        margin: {
                            left: 2,
                            bottom: 1
                        }
                    }, i.createElement(P.W, {
                        fontSize: P.Ca.Size6
                    }, "Amazon"), i.createElement(P.W, {
                        fontSize: P.Ca.Size6
                    }, "Attn: FinOps Tax"), i.createElement(P.W, {
                        fontSize: P.Ca.Size6
                    }, "P.O. Box 80683"), i.createElement(P.W, {
                        fontSize: P.Ca.Size6
                    }, "Seattle, WA, 98108-0683"), i.createElement(P.W, {
                        fontSize: P.Ca.Size6
                    }, "U.S.A.")), i.createElement(P.Ya, {
                        margin: {
                            bottom: 1
                        }
                    }, i.createElement(P.W, {
                        fontSize: P.Ca.Size6
                    }, Object(h.d)("To assist Amazon with locating your account, please write the following at the top of the form in the white space:", "TaxActionRequiredInfo"))), i.createElement(P.Ya, {
                        margin: {
                            left: 2,
                            bottom: 1
                        }
                    }, i.createElement(P.W, {
                        fontSize: P.Ca.Size6
                    }, "Amazon subsidiary: Twitch Interactive, Inc."), i.createElement(P.W, {
                        fontSize: P.Ca.Size6
                    }, "Email address: ", e.email)))
                },
                Ai = n("dOGv"),
                _i = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        var e = this.props.data.currentUser && this.props.data.currentUser.payoutInvite && this.props.data.currentUser.payoutInvite.workflow && this.props.data.currentUser.payoutInvite.workflow.registration,
                            t = this.props.data.currentUser && this.props.data.currentUser.payoutInvite && this.props.data.currentUser.payoutInvite.workflow && this.props.data.currentUser.payoutInvite.workflow.taxMismatchErrors;
                        if (!e || !t) return null;
                        var n = t.map(function(t, n) {
                            var a, r;
                            if (t === m.Z.NAME) a = Object(h.d)("Name", "TaxMismatchSpecificErrors"), r = e.companyName ? e.companyName : [e.firstName, e.middleName, e.lastName].filter(function(e) {
                                return null !== e
                            }).join(" ");
                            else if (t === m.Z.EMAIL) a = Object(h.d)("Email", "TaxMismatchSpecificErrors"), r = e.email;
                            else if (t === m.Z.STREET_ADDRESS) a = Object(h.d)("Street Address", "TaxMismatchSpecificErrors"), r = e.streetAddress;
                            else if (t === m.Z.STREET_ADDRESS_2) a = Object(h.d)("Street Address 2", "TaxMismatchSpecificErrors"), r = e.streetAddress2;
                            else if (t === m.Z.CITY) a = Object(h.d)("City or Town", "TaxMismatchSpecificErrors"), r = e.city;
                            else if (t === m.Z.STATE) a = Object(h.d)("State/Province", "TaxMismatchSpecificErrors"), r = "US" === e.countryCode ? Na(e.stateCode || "") : "CA" === e.countryCode ? Sa(e.stateCode || "") : e.stateCode;
                            else if (t === m.Z.COUNTRY) a = Object(h.d)("Country", "TaxMismatchSpecificErrors"), r = Object(ka.b)(e.countryCode || "");
                            else {
                                if (t !== m.Z.POSTAL) return null;
                                a = Object(h.d)("Zip Code/Postal Code", "TaxMismatchSpecificErrors"), r = e.postal
                            }
                            return i.createElement(P.Qa, {
                                key: a + n,
                                padding: {
                                    left: 1
                                }
                            }, i.createElement(P.W, {
                                fontSize: P.Ca.Size6
                            }, i.createElement(P.W, {
                                bold: !0,
                                type: P.Wb.Span
                            }, a), " ", r))
                        });
                        return i.createElement(i.Fragment, null, i.createElement(P.Qa, {
                            margin: {
                                bottom: 1
                            }
                        }, i.createElement(P.W, {
                            type: P.Wb.P,
                            color: P.O.Error,
                            bold: !0
                        }, Object(h.d)("Specific Errors", "TaxMismatchSpecificErrors"))), i.createElement(P.Qa, {
                            margin: {
                                bottom: 1
                            }
                        }, i.createElement(P.W, {
                            fontSize: P.Ca.Size6
                        }, Object(h.d)("The following data you entered in Step 1 does not match the data entered on the tax interview in Step 3:", "TaxMismatchSpecificErrors"))), i.createElement(P.Ya, {
                            margin: {
                                bottom: 1
                            }
                        }, n), i.createElement(P.Qa, {
                            margin: {
                                bottom: 1
                            }
                        }, i.createElement(P.W, {
                            fontSize: P.Ca.Size6
                        }, Object(h.d)("To fix this, please click the button below to edit your tax form and correct these values. Alternatively, if the tax form has the correct information, you can choose to edit Step 1 instead. To do this, click the button below and then click {buttonLabel} to reset the onboarding flow.", {
                            buttonLabel: Object(h.d)("Start Over", "TaxMismatchSpecificErrors")
                        }, "TaxMismatchSpecificErrors"))))
                    }, t
                }(i.Component),
                wi = Object(r.compose)(Object(u.a)(Ai))(_i),
                Fi = function(e) {
                    switch (e.taxStatus) {
                        case qi.NotStarted:
                            return i.createElement(i.Fragment, null, i.createElement(P.Qa, {
                                margin: {
                                    bottom: 1
                                }
                            }, i.createElement(P.W, {
                                fontSize: P.Ca.Size6
                            }, Object(h.d)("A new window will open where you can submit your royalty tax information. Please complete the tax information interview fully.", "TaxInfoRoyaltyText"))), i.createElement(P.Qa, {
                                margin: {
                                    bottom: 1
                                }
                            }, i.createElement(P.W, {
                                fontSize: P.Ca.Size6
                            }, Object(h.d)('Once you\'ve filled out the form, if your status still says "Not Started", please wait a minute or two for it to update to "Under Review".', "TaxInfoRoyaltyText"))), i.createElement(P.Ya, {
                                margin: {
                                    bottom: 2
                                }
                            }, i.createElement(ea, {
                                onboardEntity: e.onboardEntity
                            })));
                        case qi.Pending:
                            var t = new Date,
                                n = Object(Pi.c)(e.timestamp);
                            return Object(Ln.differenceInDays)(t, n) >= 3 ? i.createElement(i.Fragment, null, i.createElement(P.Qa, {
                                margin: {
                                    bottom: 1
                                }
                            }, i.createElement(P.W, {
                                fontSize: P.Ca.Size6
                            }, Object(h.d)("Thank you for your patience. Your tax information is still under review, but it is taking longer than normal.", "TaxInfoRoyaltyText"))), i.createElement(P.Qa, {
                                margin: {
                                    bottom: 1
                                }
                            }, i.createElement(P.W, {
                                fontSize: P.Ca.Size6
                            }, Object(h.d)("Please email {email} for assistance.", {
                                email: i.createElement("a", {
                                    href: "mailto:twitchtaxhelp@amazon.com"
                                }, "twitchtaxhelp@amazon.com")
                            }, "TaxInfoRoyaltyText")))) : i.createElement(i.Fragment, null, i.createElement(P.Qa, {
                                margin: {
                                    bottom: 1
                                }
                            }, i.createElement(P.W, {
                                fontSize: P.Ca.Size6
                            }, Object(h.d)("Hang tight! Your royalty tax information is currently under review and can take up to three business days.", "TaxInfoRoyaltyText"))), i.createElement(P.Qa, {
                                margin: {
                                    bottom: 1
                                }
                            }, i.createElement(P.W, {
                                fontSize: P.Ca.Size6
                            }, Object(h.d)("We'll update this screen within three business days with next steps. Please check back later.", "TaxInfoRoyaltyText"))));
                        case qi.Completed:
                            return i.createElement(P.W, {
                                fontSize: P.Ca.Size6
                            }, Object(h.d)("Your royalty tax information was successfully validated.", "TaxInfoRoyaltyText"));
                        case qi.ActionRequired:
                            return i.createElement(i.Fragment, null, i.createElement(Ii, {
                                email: e.email
                            }), i.createElement(P.Ya, {
                                margin: {
                                    bottom: 2
                                }
                            }, i.createElement(ea, {
                                onboardEntity: e.onboardEntity
                            })));
                        case qi.Mismatch:
                            return i.createElement(i.Fragment, null, i.createElement(wi, null), i.createElement(P.Ya, {
                                margin: {
                                    bottom: 2
                                }
                            }, i.createElement(ea, {
                                onboardEntity: e.onboardEntity
                            })));
                        case qi.Failed:
                            return i.createElement(P.Qa, {
                                margin: {
                                    bottom: 2
                                }
                            }, i.createElement(P.W, {
                                fontSize: P.Ca.Size6
                            }, Object(h.d)("Please click the button below to retake the Royalty Tax Interview and correct your information.", "TaxInfoRoyaltyText")));
                        default:
                            return null
                    }
                },
                xi = function(e) {
                    if (!e.royaltyTaxCompleted) return i.createElement(i.Fragment, null, i.createElement(P.Qa, {
                        margin: {
                            bottom: 1
                        }
                    }, i.createElement(P.W, {
                        fontSize: P.Ca.Size6
                    }, Object(h.d)("Once your royalty tax information is fully validated, you will need to complete the Service Tax Interview.", "TaxInfoServiceText"))));
                    switch (e.taxStatus) {
                        case qi.NotStarted:
                            return i.createElement(i.Fragment, null, i.createElement(P.Qa, {
                                margin: {
                                    bottom: 1
                                }
                            }, i.createElement(P.W, {
                                fontSize: P.Ca.Size6
                            }, Object(h.d)("A new window will open where you can submit your service tax information. Please complete the tax information interview fully.", "TaxInfoServiceText"))), i.createElement(P.Qa, {
                                margin: {
                                    bottom: 1
                                }
                            }, i.createElement(P.W, {
                                fontSize: P.Ca.Size6
                            }, Object(h.d)('Once you\'ve filled out the form, if your status still says "Not Started", please wait a minute or two for it to update to "Under Review".', "TaxInfoServiceText"))), i.createElement(P.Ya, {
                                margin: {
                                    bottom: 2
                                }
                            }, i.createElement(ea, {
                                onboardEntity: e.onboardEntity
                            })));
                        case qi.Pending:
                            var t = new Date,
                                n = Object(Pi.c)(e.timestamp);
                            return Object(Ln.differenceInDays)(t, n) >= 3 ? i.createElement(i.Fragment, null, i.createElement(P.Qa, {
                                margin: {
                                    bottom: 1
                                }
                            }, i.createElement(P.W, {
                                fontSize: P.Ca.Size6
                            }, Object(h.d)("Thank you for your patience. Your tax information is still under review, but it is taking longer than normal.", "TaxInfoServiceText"))), i.createElement(P.Qa, {
                                margin: {
                                    bottom: 1
                                }
                            }, i.createElement(P.W, {
                                fontSize: P.Ca.Size6
                            }, Object(h.d)("Please email {email} for assistance.", {
                                email: i.createElement("a", {
                                    href: "mailto:twitchtaxhelp@amazon.com"
                                }, "twitchtaxhelp@amazon.com")
                            }, "TaxInfoServiceText")))) : i.createElement(i.Fragment, null, i.createElement(P.Qa, {
                                margin: {
                                    bottom: 1
                                }
                            }, i.createElement(P.W, {
                                fontSize: P.Ca.Size6
                            }, Object(h.d)("Hang tight! Your service tax information is currently under review and can take up to three business days.", "TaxInfoServiceText"))), i.createElement(P.Qa, {
                                margin: {
                                    bottom: 1
                                }
                            }, i.createElement(P.W, {
                                fontSize: P.Ca.Size6
                            }, Object(h.d)("We'll update this screen within three business days with next steps. Please check back later.", "TaxInfoServiceText"))));
                        case qi.Completed:
                            return i.createElement(P.W, {
                                fontSize: P.Ca.Size6
                            }, Object(h.d)("Your service tax information was successfully validated.", "TaxInfoServiceText"));
                        case qi.ActionRequired:
                            return i.createElement(i.Fragment, null, i.createElement(Ii, {
                                email: e.email
                            }), i.createElement(P.Ya, {
                                margin: {
                                    bottom: 2
                                }
                            }, i.createElement(ea, {
                                onboardEntity: e.onboardEntity
                            })));
                        case qi.Mismatch:
                            return i.createElement(i.Fragment, null, i.createElement(wi, null), i.createElement(P.Ya, {
                                margin: {
                                    bottom: 2
                                }
                            }, i.createElement(ea, {
                                onboardEntity: e.onboardEntity
                            })));
                        case qi.Failed:
                            return i.createElement(P.Qa, {
                                margin: {
                                    bottom: 2
                                }
                            }, i.createElement(P.W, {
                                fontSize: P.Ca.Size6
                            }, Object(h.d)("Please click the button below to retake the Service Tax Interview and correct your information.", "TaxInfoServiceText")));
                        default:
                            return null
                    }
                },
                Ri = function() {
                    return Object(h.d)("Start Over", "TaxPreviewInstructions")
                },
                Di = function(e) {
                    return i.createElement(P.Ya, {
                        padding: 1,
                        margin: {
                            bottom: 1
                        }
                    }, i.createElement(P.Qa, {
                        margin: {
                            bottom: 2
                        }
                    }, i.createElement(P.W, {
                        fontSize: P.Ca.Size6
                    }, Object(h.d)("It is important that you enter consistent information throughout the onboarding process to ensure that we have your correct contact information, tax information, and payout information. When filling out the tax form on the following page, please make sure that you enter the same information as you did in Step 1. For your reference, here is the information you entered in Step 1.", "TaxPreviewInstructions"))), e.onboardEntity !== m.I.EXTENSIONS_DEVELOPER && i.createElement(P.Qa, {
                        margin: {
                            bottom: 2
                        }
                    }, i.createElement(P.W, {
                        fontSize: P.Ca.Size6
                    }, Object(h.d)('If any of this information is incorrect, you must restart your Payout Registration by clicking "{buttonLabel}" below.', {
                        buttonLabel: Ri()
                    }, "TaxPreviewInstructions"))), e.onboardEntity === m.I.EXTENSIONS_DEVELOPER && i.createElement(P.Qa, {
                        margin: {
                            bottom: 2
                        }
                    }, i.createElement(P.W, {
                        fontSize: P.Ca.Size6
                    }, Object(h.d)('If any of this information is incorrect, you must restart your Extensions Developer Registration by clicking "{buttonLabel}" below.', {
                        buttonLabel: Ri()
                    }, "TaxPreviewInstructions"))), i.createElement(P.W, {
                        fontSize: P.Ca.Size6
                    }, Object(h.d)("Otherwise, please proceed by clicking the purple button and the tax form will appear in a new window. If the tax form does not appear, make sure that you have pop-ups enabled.", "TaxPreviewInstructions")))
                },
                ji = n("1lFv"),
                Ui = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        return i.createElement(P.Fb, {
                            borderMarked: !0,
                            padding: 2
                        }, i.createElement(P.Ya, {
                            margin: {
                                bottom: 2
                            }
                        }, i.createElement(P.Ea, {
                            label: Object(h.d)("Channel Name", "TaxPreviewReferenceInfo"),
                            orientation: P.Fa.Horizontal
                        }, i.createElement(P.Sa, {
                            type: P.Ua.Text,
                            value: this.channelName,
                            disabled: !0
                        }))), i.createElement(P.Ya, {
                            margin: {
                                bottom: 2
                            }
                        }, i.createElement(P.Ea, {
                            label: Object(h.d)("Name", "TaxPreviewReferenceInfo"),
                            orientation: P.Fa.Horizontal
                        }, i.createElement(P.Sa, {
                            type: P.Ua.Text,
                            value: this.name,
                            disabled: !0
                        }))), i.createElement(P.Ya, {
                            margin: {
                                bottom: 2
                            }
                        }, i.createElement(P.Ea, {
                            label: Object(h.d)("Email", "TaxPreviewReferenceInfo"),
                            orientation: P.Fa.Horizontal
                        }, i.createElement(P.Sa, {
                            type: P.Ua.Text,
                            value: this.email,
                            disabled: !0
                        }))), i.createElement(P.Ya, {
                            margin: {
                                bottom: 2
                            }
                        }, i.createElement(P.Ea, {
                            label: Object(h.d)("Country", "TaxPreviewReferenceInfo"),
                            orientation: P.Fa.Horizontal
                        }, i.createElement(P.Sa, {
                            type: P.Ua.Text,
                            value: this.country,
                            disabled: !0
                        }))), i.createElement(P.Ya, {
                            margin: {
                                bottom: 2
                            }
                        }, i.createElement(P.Ea, {
                            label: Object(h.d)("Street Address", "TaxPreviewReferenceInfo"),
                            orientation: P.Fa.Horizontal
                        }, i.createElement(P.Sa, {
                            type: P.Ua.Text,
                            value: this.streetAddress,
                            disabled: !0
                        }))), i.createElement(P.Ya, {
                            margin: {
                                bottom: 2
                            }
                        }, i.createElement(P.Ea, {
                            label: Object(h.d)("Street Address 2", "TaxPreviewReferenceInfo"),
                            orientation: P.Fa.Horizontal,
                            labelOptional: this.optionalText
                        }, i.createElement(P.Sa, {
                            type: P.Ua.Text,
                            value: this.streetAddress2,
                            disabled: !0
                        }))), i.createElement(P.Ya, {
                            margin: {
                                bottom: 2
                            }
                        }, i.createElement(P.Ea, {
                            label: Object(h.d)("City or Town", "TaxPreviewReferenceInfo"),
                            orientation: P.Fa.Horizontal
                        }, i.createElement(P.Sa, {
                            type: P.Ua.Text,
                            value: this.city,
                            disabled: !0
                        }))), i.createElement(P.Ya, {
                            margin: {
                                bottom: 2
                            }
                        }, i.createElement(P.Ea, {
                            label: Object(h.d)("State/Province", "TaxPreviewReferenceInfo"),
                            orientation: P.Fa.Horizontal,
                            labelOptional: this.inUnitedStates || this.inCanada ? "" : this.optionalText
                        }, i.createElement(P.Sa, {
                            type: P.Ua.Text,
                            value: this.stateOrProvince,
                            disabled: !0
                        }))), i.createElement(P.Ea, {
                            label: Object(h.d)("Zip Code/Postal Code", "TaxPreviewReferenceInfo"),
                            orientation: P.Fa.Horizontal,
                            labelOptional: this.inUnitedStates ? "" : this.optionalText
                        }, i.createElement(P.Sa, {
                            type: P.Ua.Text,
                            value: this.postal,
                            disabled: !0
                        })))
                    }, Object.defineProperty(t.prototype, "channelName", {
                        get: function() {
                            return this.props.data.currentUser && this.props.data.currentUser.login || ""
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "registration", {
                        get: function() {
                            return this.props.data.currentUser && this.props.data.currentUser.payoutInvite && this.props.data.currentUser.payoutInvite.workflow && this.props.data.currentUser.payoutInvite.workflow.registration
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "name", {
                        get: function() {
                            return this.registration ? this.registration.companyName ? this.registration.companyName : [this.registration.firstName, this.registration.middleName, this.registration.lastName].filter(function(e) {
                                return null !== e
                            }).join(" ") : ""
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "email", {
                        get: function() {
                            return this.registration && this.registration.email || ""
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "country", {
                        get: function() {
                            return this.registration && Object(ka.b)(this.registration.countryCode) || ""
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "streetAddress", {
                        get: function() {
                            return this.registration && this.registration.streetAddress || ""
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "streetAddress2", {
                        get: function() {
                            return this.registration && this.registration.streetAddress2 || ""
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "city", {
                        get: function() {
                            return this.registration && this.registration.city || ""
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "postal", {
                        get: function() {
                            return this.registration && this.registration.postal || ""
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "inUnitedStates", {
                        get: function() {
                            return !(!this.registration || "US" !== this.registration.countryCode)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "inCanada", {
                        get: function() {
                            return !(!this.registration || "CA" !== this.registration.countryCode)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "stateOrProvince", {
                        get: function() {
                            return this.registration && this.registration.stateCode ? this.inUnitedStates ? Na(this.registration.stateCode) : this.inCanada ? Sa(this.registration.stateCode) : this.registration.stateCode : ""
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "optionalText", {
                        get: function() {
                            return Object(h.d)("optional", "TaxPreviewReferenceInfo")
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t
                }(i.Component),
                Li = Object(r.compose)(Object(u.a)(ji))(Ui),
                Mi = (n("Ff3J"), n("Hhor")),
                Bi = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            openingTaxInterview: !1
                        }, t.handleOpenTaxInterviewClick = function() {
                            t.setState({
                                openingTaxInterview: !0
                            }), t.openTaxInterview()
                        }, t.openTaxInterview = function() {
                            if (t.props.data.currentUser && t.props.data.currentUser.payoutInvite && t.props.data.currentUser.payoutInvite.workflow && t.props.data.currentUser.payoutInvite.workflow.taxInterview && t.props.data.currentUser.payoutInvite.workflow.registration) {
                                var e = t.props.data.currentUser.payoutInvite.workflow,
                                    n = e.taxInterview,
                                    a = e.registration,
                                    i = [{
                                        name: "AccountId",
                                        value: n.accountID
                                    }, {
                                        name: "AddressId",
                                        value: ""
                                    }, {
                                        name: "ClientId",
                                        value: n.clientID
                                    }, {
                                        name: "IncomeType",
                                        value: t.props.taxType
                                    }, {
                                        name: "LegalName",
                                        value: n.governmentAlias
                                    }, {
                                        name: "Locale",
                                        value: n.locale
                                    }, {
                                        name: "LoggedInCustomerEmail",
                                        value: a.email
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
                                        value: n.signature
                                    }, {
                                        name: "SiteId",
                                        value: "1"
                                    }];
                                if ((!t.popup || (t.popup.close(), t.popup.closed)) && (t.popup = window.open("", "", "toolbar=no, menubar=no, resizable=yes, scrollbars=yes, location=no, height=1000, width=1000"), t.popup)) {
                                    var r = t.popup.document.createElement("form");
                                    r.setAttribute("action", n.url), r.setAttribute("method", "post"), i.forEach(function(e) {
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
                                        } catch (e) {}
                                    }, 100)
                                }
                            }
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.componentWillUnmount = function() {
                        clearInterval(this.popupInterval)
                    }, t.prototype.render = function() {
                        return this.props.data.loading ? i.createElement(P.Fb, {
                            className: "tax-preview-modal__container",
                            background: P.r.Base,
                            padding: 5
                        }, i.createElement(P.ab, {
                            fillContent: !0
                        })) : this.props.data.error || !this.taxPreviewQueryResponseIsValid ? i.createElement(P.Fb, {
                            className: "tax-preview-modal__container",
                            background: P.r.Base,
                            padding: 5
                        }, i.createElement(d.a, {
                            message: Object(h.d)("Oops, something went wrong.", "TaxPreviewModal")
                        })) : i.createElement(P.Fb, {
                            className: "tax-preview-modal__container",
                            background: P.r.Base,
                            padding: 2
                        }, i.createElement(P.Fb, {
                            borderBottom: !0,
                            padding: {
                                bottom: 1
                            },
                            margin: {
                                bottom: 1
                            }
                        }, i.createElement(P.W, {
                            type: P.Wb.H4
                        }, Object(h.d)("Information Reference", "TaxPreviewModal"))), i.createElement(Di, {
                            onboardEntity: this.props.onboardEntity
                        }), i.createElement(Li, null), i.createElement(P.Ya, {
                            display: P.X.Flex,
                            justifyContent: P.Xa.Center,
                            padding: {
                                top: 2
                            }
                        }, i.createElement(P.Ya, {
                            display: P.X.InlineBlock,
                            margin: {
                                right: 2
                            }
                        }, i.createElement(P.z, {
                            onClick: this.handleOpenTaxInterviewClick,
                            disabled: this.state.openingTaxInterview
                        }, this.openTaxButtonText)), i.createElement(P.Ya, {
                            display: P.X.InlineBlock,
                            margin: {
                                right: 2
                            }
                        }, i.createElement(P.z, {
                            type: P.F.Text,
                            onClick: this.props.showStartOverModal,
                            disabled: this.state.openingTaxInterview
                        }, Object(h.d)("Start Over", "TaxPreviewModal"))), this.state.openingTaxInterview && i.createElement(P.Ya, {
                            display: P.X.Flex,
                            justifyContent: P.Xa.Center,
                            flexDirection: P.Aa.Column
                        }, i.createElement(P.ab, null))))
                    }, t.prototype.taxPreviewQueryResponseIsValid = function() {
                        return !!(this.props.data.currentUser && this.props.data.currentUser.payoutInvite && this.props.data.currentUser.payoutInvite.workflow && this.props.data.currentUser.payoutInvite.workflow.taxInterview)
                    }, Object.defineProperty(t.prototype, "openTaxButtonText", {
                        get: function() {
                            return this.props.taxType === zi.Royalty ? Object(h.d)("Open Royalty Tax Interview Form", "TaxPreviewModal") : Object(h.d)("Open Service Tax Interview Form", "TaxPreviewModal")
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t
                }(i.Component),
                Yi = Object(r.compose)(Object(u.a)(Mi, {
                    options: function(e) {
                        return {
                            variables: {
                                taxType: e.taxType,
                                returnURL: window.location.href
                            }
                        }
                    }
                }))(Bi),
                Wi = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        return i.createElement(P.Ya, null, i.createElement(Yi, {
                            taxType: this.props.taxType,
                            onboardEntity: this.props.onboardEntity,
                            showStartOverModal: this.props.showStartOverModal,
                            closeTaxPreviewModal: this.props.closeModal
                        }), i.createElement(na.a, {
                            closeOnBackdropClick: !0
                        }))
                    }, t
                }(i.Component);
            var Vi, zi, qi, Gi = Object(g.compose)(Object(He.connect)(null, function(e) {
                    return Object(g.bindActionCreators)({
                        closeModal: Je.c
                    }, e)
                }))(Wi),
                Xi = n("VB3o");
            ! function(e) {
                e.RoyaltyHeader = "payout-onboarding-tax-interview__royalty-header", e.RoyaltyButton = "payout-onboarding-tax-interview__royalty-button", e.ServiceHeader = "payout-onboarding-tax-interview__service-header", e.ServiceButton = "payout-onboarding-tax-interview__service-button", e.ContinueButton = "payout-onboarding-tax-interview__continue-button"
            }(Vi || (Vi = {})),
            function(e) {
                e.Royalty = "Royalty", e.Service = "Service"
            }(zi || (zi = {})),
            function(e) {
                e[e.NotStarted = 0] = "NotStarted", e[e.Pending = 1] = "Pending", e[e.Failed = 2] = "Failed", e[e.ActionRequired = 3] = "ActionRequired", e[e.Mismatch = 4] = "Mismatch", e[e.Completed = 5] = "Completed"
            }(qi || (qi = {}));
            var Qi = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.handleRoyaltyTaxButtonClick = function() {
                        t.showTaxPreviewModal(zi.Royalty)
                    }, t.handleServiceTaxButtonClick = function() {
                        t.showTaxPreviewModal(zi.Service)
                    }, t.showTaxPreviewModal = function(e) {
                        var n = t.props,
                            a = n.onboardEntity,
                            i = n.showStartOverModal;
                        t.props.showTaxPreviewModal({
                            taxType: e,
                            onboardEntity: a,
                            showStartOverModal: i
                        })
                    }, t.handleContinueClick = function() {
                        t.props.updateStepDisplayed(wn.PayoutMethod)
                    }, t
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    return this.props.data.currentUser && this.props.data.currentUser.payoutInvite && this.props.data.currentUser.payoutInvite.workflow && this.props.data.currentUser.payoutInvite.workflow.registration ? i.createElement(C.a, null, i.createElement(zn, {
                        title: Object(h.d)("Royalty Tax Interview", "PayoutOnboardingTaxInterview"),
                        statusText: this.royaltyStatusText,
                        statusType: this.royaltyStatusType,
                        borderTop: !0,
                        "data-test-selector": Vi.RoyaltyHeader
                    }), i.createElement(P.Ya, {
                        padding: 2
                    }, i.createElement(Ci, {
                        taxStatus: this.royaltyTaxStatus
                    }), i.createElement(Fi, {
                        taxStatus: this.royaltyTaxStatus,
                        onboardEntity: this.props.onboardEntity,
                        email: this.props.data.currentUser.payoutInvite.workflow.registration.email,
                        timestamp: this.props.data.currentUser.payoutInvite.workflow.timestamp
                    }), ![qi.Completed, qi.Pending].includes(this.royaltyTaxStatus) && i.createElement(P.z, {
                        type: this.royaltyTaxButtonType,
                        disabled: this.royaltyTaxButtonDisabled,
                        onClick: this.handleRoyaltyTaxButtonClick,
                        "data-test-selector": Vi.RoyaltyButton
                    }, this.royaltyTaxButtonText)), i.createElement(zn, {
                        title: Object(h.d)("Service Tax Interview", "PayoutOnboardingTaxInterview"),
                        statusText: this.serviceStatusText,
                        statusType: this.serviceStatusType,
                        "data-test-selector": Vi.ServiceHeader
                    }), i.createElement(P.Ya, {
                        padding: 2
                    }, i.createElement(Ci, {
                        taxStatus: this.serviceTaxStatus
                    }), i.createElement(xi, {
                        royaltyTaxCompleted: this.royaltyTaxStatus === qi.Completed,
                        taxStatus: this.serviceTaxStatus,
                        onboardEntity: this.props.onboardEntity,
                        email: this.props.data.currentUser.payoutInvite.workflow.registration.email,
                        timestamp: this.props.data.currentUser.payoutInvite.workflow.timestamp
                    }), ![qi.Completed, qi.Pending].includes(this.serviceTaxStatus) && i.createElement(P.z, {
                        type: this.serviceTaxButtonType,
                        disabled: this.serviceTaxButtonDisabled,
                        onClick: this.handleServiceTaxButtonClick,
                        "data-test-selector": Vi.ServiceButton
                    }, this.serviceTaxButtonText)), i.createElement(P.Fb, {
                        padding: 2,
                        background: P.r.Alt2
                    }, i.createElement(P.z, {
                        "data-test-selector": Vi.ContinueButton,
                        disabled: this.continueButtonDisabled,
                        onClick: this.handleContinueClick
                    }, Object(h.d)("Continue", "PayoutOnboardingTaxInterview")))) : this.props.data.error ? i.createElement(C.a, null, i.createElement(T.a, null, i.createElement(d.a, null))) : i.createElement(C.a, null, i.createElement(T.a, null, i.createElement(P.jb, {
                        lineCount: 4
                    })))
                }, Object.defineProperty(t.prototype, "royaltyTaxStatus", {
                    get: function() {
                        switch (this.props.currentStep) {
                            case m.J.REGISTRATION_NOT_STARTED:
                            case m.J.AGREEMENT_NOT_STARTED:
                            case m.J.ROYALTY_TAX_INTERVIEW_NOT_STARTED:
                                return qi.NotStarted;
                            case m.J.ROYALTY_TAX_INTERVIEW_PENDING:
                                return qi.Pending;
                            case m.J.ROYALTY_TAX_INTERVIEW_ACTION_REQUIRED:
                                return qi.ActionRequired;
                            case m.J.ROYALTY_TAX_INTERVIEW_MISMATCH:
                                return qi.Mismatch;
                            case m.J.ROYALTY_TAX_INTERVIEW_FAILED:
                                return qi.Failed;
                            default:
                                return qi.Completed
                        }
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "serviceTaxStatus", {
                    get: function() {
                        switch (this.props.currentStep) {
                            case m.J.REGISTRATION_NOT_STARTED:
                            case m.J.AGREEMENT_NOT_STARTED:
                            case m.J.ROYALTY_TAX_INTERVIEW_NOT_STARTED:
                            case m.J.ROYALTY_TAX_INTERVIEW_PENDING:
                            case m.J.ROYALTY_TAX_INTERVIEW_ACTION_REQUIRED:
                            case m.J.ROYALTY_TAX_INTERVIEW_MISMATCH:
                            case m.J.ROYALTY_TAX_INTERVIEW_FAILED:
                            case m.J.SERVICE_TAX_INTERVIEW_NOT_STARTED:
                                return qi.NotStarted;
                            case m.J.SERVICE_TAX_INTERVIEW_PENDING:
                                return qi.Pending;
                            case m.J.SERVICE_TAX_INTERVIEW_ACTION_REQUIRED:
                                return qi.ActionRequired;
                            case m.J.SERVICE_TAX_INTERVIEW_MISMATCH:
                                return qi.Mismatch;
                            case m.J.SERVICE_TAX_INTERVIEW_FAILED:
                                return qi.Failed;
                            default:
                                return qi.Completed
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
                        case qi.NotStarted:
                            return Object(h.d)("Not Started", "PayoutOnboardingTaxInterview");
                        case qi.Pending:
                            return Object(h.d)("Under Review", "PayoutOnboardingTaxInterview");
                        case qi.ActionRequired:
                            return Object(h.d)("Additional Documentation Required", "PayoutOnboardingTaxInterview");
                        case qi.Mismatch:
                        case qi.Failed:
                            return Object(h.d)("Failed", "PayoutOnboardingTaxInterview");
                        case qi.Completed:
                            return Object(h.d)("Completed", "PayoutOnboardingTaxInterview");
                        default:
                            return ""
                    }
                }, t.prototype.getStatusType = function(e) {
                    switch (e) {
                        case qi.Pending:
                            return P.ib.Prime;
                        case qi.ActionRequired:
                        case qi.Mismatch:
                        case qi.Failed:
                            return P.ib.Alert;
                        case qi.Completed:
                            return P.ib.Success;
                        default:
                            return
                    }
                }, Object.defineProperty(t.prototype, "royaltyTaxButtonType", {
                    get: function() {
                        return this.royaltyTaxStatus === qi.Pending || this.royaltyTaxStatus === qi.ActionRequired ? P.F.Hollow : P.F.Default
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "royaltyTaxButtonDisabled", {
                    get: function() {
                        return this.royaltyTaxStatus === qi.Completed
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "royaltyTaxButtonText", {
                    get: function() {
                        return this.royaltyTaxStatus === qi.NotStarted ? Object(h.d)("Begin Royalty Tax Interview", "PayoutOnboardingTaxInterview") : Object(h.d)("Retake Royalty Tax Interview", "PayoutOnboardingTaxInterview")
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "serviceTaxButtonType", {
                    get: function() {
                        return this.serviceTaxStatus === qi.Pending || this.serviceTaxStatus === qi.ActionRequired ? P.F.Hollow : P.F.Default
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "serviceTaxButtonDisabled", {
                    get: function() {
                        return this.royaltyTaxStatus !== qi.Completed || this.serviceTaxStatus === qi.Completed
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "serviceTaxButtonText", {
                    get: function() {
                        return this.serviceTaxStatus === qi.NotStarted ? Object(h.d)("Begin Service Tax Interview", "PayoutOnboardingTaxInterview") : Object(h.d)("Retake Service Tax Interview", "PayoutOnboardingTaxInterview")
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "continueButtonDisabled", {
                    get: function() {
                        return this.royaltyTaxStatus !== qi.Completed || this.serviceTaxStatus !== qi.Completed
                    },
                    enumerable: !0,
                    configurable: !0
                }), t
            }(i.Component);
            var Hi = Object(r.compose)(Object(u.a)(Xi), Object(He.connect)(null, function(e) {
                    return Object(g.bindActionCreators)({
                        showTaxPreviewModal: function(e) {
                            var t = a.__rest(e, []);
                            return Object(Je.d)(Gi, t)
                        }
                    }, e)
                }))(Qi),
                Ji = n("4F2d"),
                $i = {
                    "data-test-selector": "require-two-factor-enabled__enable-two-factor-message"
                },
                Zi = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        return this.props.data.loading ? i.createElement(C.a, null, i.createElement(T.a, null, i.createElement(P.jb, {
                            lineCount: 4
                        }))) : this.props.data.error ? i.createElement(C.a, null, i.createElement(T.a, null, i.createElement(d.a, {
                            message: Object(h.d)("Oops, something went wrong.", "RequireTwoFactorEnabled")
                        }))) : this.hasTwoFactorEnabled ? i.createElement(i.Fragment, null, this.props.children) : i.createElement(C.a, null, i.createElement(T.a, null, i.createElement(P.W, a.__assign({
                            type: P.Wb.P
                        }, $i), this.props.enableTwoFactorMessage)), i.createElement(T.a, null, i.createElement(P.z, {
                            linkTo: "/settings/security"
                        }, Object(h.d)("Enable Two-Factor Authentication", "RequireTwoFactorEnabled"))))
                    }, Object.defineProperty(t.prototype, "hasTwoFactorEnabled", {
                        get: function() {
                            return !!(this.props.data.currentUser && this.props.data.currentUser.settings && this.props.data.currentUser.settings.hasTwoFactorEnabled)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t
                }(i.Component),
                Ki = Object(r.compose)(Object(u.a)(Ji))(Zi),
                er = n("Z21N"),
                tr = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            canceling: !1
                        }, t.onStartOverClick = function() {
                            return a.__awaiter(t, void 0, void 0, function() {
                                var e, t;
                                return a.__generator(this, function(n) {
                                    switch (n.label) {
                                        case 0:
                                            this.setState({
                                                canceling: !0
                                            }), n.label = 1;
                                        case 1:
                                            return n.trys.push([1, 3, , 4]), e = Object(y.a)({
                                                targetUserID: this.props.userID
                                            }), [4, this.props.cancelPayoutOnboardingWorkflow(e)];
                                        case 2:
                                            return (t = n.sent()).data.cancelPayoutOnboardingWorkflow && t.data.cancelPayoutOnboardingWorkflow.workflow ? (this.props.updateStepDisplayed(wn.Summary), this.props.callCloseModal(), [3, 4]) : (this.setState({
                                                canceling: !1
                                            }), [2]);
                                        case 3:
                                            return n.sent(), this.setState({
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
                        return i.createElement(i.Fragment, null, i.createElement(P.Qa, {
                            margin: {
                                bottom: 2
                            }
                        }, i.createElement(P.W, {
                            type: P.Wb.H4
                        }, Object(h.d)("Are you sure you would like to start over?", "StartOverModal"))), i.createElement(P.Fb, {
                            borderTop: !0,
                            borderBottom: !0,
                            padding: {
                                y: 2
                            }
                        }, i.createElement(P.Qa, {
                            margin: {
                                bottom: 2
                            }
                        }, i.createElement(P.W, {
                            type: P.Wb.P
                        }, Object(h.d)("Your current progress will be lost!", "StartOverModal"))), i.createElement(P.W, {
                            type: P.Wb.P,
                            bold: !0,
                            color: P.O.Error
                        }, Object(h.d)("WARNING: Starting over will lose any progress and make your Twitch account unpayable. We will hold any payouts until you have fully completed the form.", "StartOverModal"))), i.createElement(P.Ya, {
                            display: P.X.Flex,
                            justifyContent: P.Xa.Center,
                            padding: {
                                top: 2
                            }
                        }, i.createElement(P.Ya, {
                            display: P.X.InlineBlock,
                            margin: {
                                right: 2
                            }
                        }, i.createElement(P.z, {
                            "data-test-selector": "start-over-modal___start-over-button",
                            type: P.F.Text,
                            onClick: this.onStartOverClick,
                            disabled: this.state.canceling
                        }, Object(h.d)("Yes, Start Over", "StartOverModal"))), i.createElement(P.Ya, {
                            display: P.X.InlineBlock,
                            margin: {
                                right: 2
                            }
                        }, i.createElement(P.z, {
                            "data-test-selector": "start-over-modal__stay-here-button",
                            onClick: this.props.callCloseModal,
                            disabled: this.state.canceling
                        }, Object(h.d)("No, Stay Here", "StartOverModal"))), this.state.canceling && i.createElement(P.Ya, {
                            display: P.X.Flex,
                            justifyContent: P.Xa.Center,
                            flexDirection: P.Aa.Column
                        }, i.createElement(P.ab, null))))
                    }, t
                }(i.Component),
                nr = Object(g.compose)(Object(u.a)(er, {
                    name: "cancelPayoutOnboardingWorkflow"
                }))(tr),
                ar = (n("cMo7"), function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        return i.createElement(P.Fb, {
                            className: "start-over-modal__container",
                            background: P.r.Base,
                            padding: 2
                        }, i.createElement(nr, {
                            userID: this.props.userID,
                            updateStepDisplayed: this.props.updateStepDisplayed,
                            callCloseModal: this.props.closeModal
                        }), i.createElement(na.a, {
                            closeOnBackdropClick: !0
                        }))
                    }, t
                }(i.Component));
            var ir, rr = Object(He.connect)(null, function(e) {
                    return Object(g.bindActionCreators)({
                        closeModal: Je.c
                    }, e)
                })(ar),
                or = n("KBb9"),
                sr = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            stepDisplayed: wn.Summary,
                            redirectedAlready: !1
                        }, t.backLinkURL = "/" + t.props.channelName + "/dashboard/settings/revenue", t.totalSteps = t.props.onboardEntity === m.I.CUSTOM_PARTNER ? 5 : 4, t.goBackToSummary = function() {
                            t.setState({
                                stepDisplayed: wn.Summary
                            })
                        }, t.updateStepDisplayed = function(e) {
                            t.setState({
                                stepDisplayed: e
                            })
                        }, t.showStartOverModal = function() {
                            t.props.data.currentUser && t.props.data.currentUser.id && t.props.showStartOverModal({
                                userID: t.props.data.currentUser.id,
                                updateStepDisplayed: t.updateStepDisplayed
                            })
                        }, t
                    }
                    return a.__extends(t, e), Object.defineProperty(t.prototype, "enableTwoFactorMessage", {
                        get: function() {
                            return Object(h.d)("You must enable two-factor authentication to access your onboarding.", "PayoutOnboardingContainer")
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t.prototype.componentDidUpdate = function() {
                        this.shouldRedirectPayoutMethod && this.setState({
                            redirectedAlready: !0,
                            stepDisplayed: wn.PayoutMethod
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
                            var e = this.props.data.currentUser && this.props.data.currentUser.payoutInvite && this.props.data.currentUser.payoutInvite.workflow;
                            if (!e) return !1;
                            if (e.currentStep !== m.J.PAYOUT_METHOD_NOT_STARTED && e.currentStep !== m.J.PAYOUT_METHOD_PENDING && e.currentStep !== m.J.COMPLETED && e.currentStep !== m.J.REVIEW_PENDING) return !1;
                            var t = Dn.parse(this.props.location.search);
                            return !!t && "true" === t.redirect_tipalti
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t.prototype.render = function() {
                        if (!this.props.data.currentUser || !this.props.data.currentUser.id) return this.props.data.error ? this.renderErrorComponent() : i.createElement(C.a, {
                            header: this.renderDefaultHeader()
                        }, i.createElement(T.a, null, i.createElement(P.jb, {
                            lineCount: 4
                        })));
                        var e, t = this.props.data.currentUser && this.props.data.currentUser.payoutInvite && this.props.data.currentUser.payoutInvite.workflow;
                        switch (this.state.stepDisplayed) {
                            case wn.Summary:
                                return i.createElement(i.Fragment, null, this.renderDefaultHeader(), i.createElement(Ki, {
                                    enableTwoFactorMessage: this.enableTwoFactorMessage
                                }, i.createElement(Oi, {
                                    onboardEntity: this.props.onboardEntity,
                                    currentStep: t && t.currentStep,
                                    updateStepDisplayed: this.updateStepDisplayed,
                                    showStartOverModal: this.showStartOverModal
                                })));
                            case wn.Registration:
                                e = i.createElement(ei, {
                                    channelName: this.props.channelName,
                                    userID: this.props.data.currentUser.id,
                                    onboardEntity: this.props.onboardEntity,
                                    currentStep: t && t.currentStep,
                                    updateStepDisplayed: this.updateStepDisplayed
                                });
                                break;
                            case wn.Agreement:
                                if (!t) return this.renderErrorComponent();
                                e = i.createElement(Jn, {
                                    onboardEntity: this.props.onboardEntity,
                                    updateStepDisplayed: this.updateStepDisplayed
                                });
                                break;
                            case wn.TaxInterview:
                                if (!t) return this.renderErrorComponent();
                                e = i.createElement(Hi, {
                                    onboardEntity: this.props.onboardEntity,
                                    currentStep: t.currentStep,
                                    updateStepDisplayed: this.updateStepDisplayed,
                                    showStartOverModal: this.showStartOverModal
                                });
                                break;
                            case wn.PayoutMethod:
                                if (!t) return this.renderErrorComponent();
                                e = i.createElement(ua, {
                                    onboardEntity: this.props.onboardEntity,
                                    currentStep: t.currentStep,
                                    updateStepDisplayed: this.updateStepDisplayed
                                });
                                break;
                            case wn.Review:
                                if (!t) return this.renderErrorComponent();
                                e = i.createElement(ti, {
                                    currentStep: t.currentStep,
                                    updateStepDisplayed: this.updateStepDisplayed
                                });
                                break;
                            default:
                                return this.renderErrorComponent()
                        }
                        return i.createElement(i.Fragment, null, i.createElement(O.a, {
                            title: Object(h.d)("Step {numOfCurrentStep} of {numOfTotalSteps}: {stepTitle}", {
                                numOfCurrentStep: Object(h.f)(this.state.stepDisplayed),
                                numOfTotalSteps: Object(h.f)(this.totalSteps),
                                stepTitle: mi[this.state.stepDisplayed].title[this.props.onboardEntity]()
                            }, "PayoutOnboardingContainer"),
                            description: mi[this.state.stepDisplayed].description[this.props.onboardEntity](),
                            onClick: this.goBackToSummary
                        }), i.createElement(Ki, {
                            enableTwoFactorMessage: this.enableTwoFactorMessage
                        }, e))
                    }, t.prototype.renderDefaultHeader = function() {
                        return i.createElement(O.a, {
                            title: mi[wn.Summary].title[this.props.onboardEntity](),
                            description: mi[wn.Summary].description[this.props.onboardEntity](),
                            linkToParent: this.backLinkURL
                        })
                    }, t.prototype.renderErrorComponent = function() {
                        return i.createElement(C.a, {
                            header: this.renderDefaultHeader()
                        }, i.createElement(T.a, null, i.createElement(d.a, {
                            message: Object(h.d)("Oops, something went wrong.", "PayoutOnboardingContainer")
                        })))
                    }, t
                }(i.Component);
            var lr = Object(g.compose)(Object(u.a)(or), Object(Un.a)([{
                    topic: function(e) {
                        return Object(Se.t)(e.currentUserID)
                    },
                    mapMessageTypesToProps: (ir = {}, ir["*"] = "payoutOnboardingEvent", ir)
                }]), Object(He.connect)(null, function(e) {
                    return Object(g.bindActionCreators)({
                        showStartOverModal: function(e) {
                            var t = a.__rest(e, []);
                            return Object(Je.d)(rr, t)
                        }
                    }, e)
                }), jn.a)(sr),
                dr = n("0dF/"),
                cr = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.data.loading && !this.props.data.error || this.props.latencyTracking.reportInteractive()
                    }, t.prototype.componentDidUpdate = function(e) {
                        (e.data.loading && !this.props.data.loading || this.props.data.error) && this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        return this.props.data.currentUser && this.props.data.currentUser.id && this.props.data.currentUser.payoutInvite && this.props.data.currentUser.payoutInvite.category ? this.hasAgreementPendingUpgrade ? i.createElement(s.a, {
                            to: "/" + this.props.match.params.channelName + "/dashboard/settings/revenue/upgrade-terms"
                        }) : i.createElement(lr, {
                            channelName: this.props.match.params.channelName,
                            currentUserID: this.props.data.currentUser.id,
                            onboardEntity: this.props.data.currentUser.payoutInvite.category
                        }) : this.props.data.error ? i.createElement(P.Ya, {
                            padding: {
                                y: 5
                            }
                        }, i.createElement(d.a, null)) : i.createElement(P.Ya, {
                            padding: {
                                y: 5
                            }
                        }, i.createElement(P.ab, {
                            fillContent: !0
                        }))
                    }, Object.defineProperty(t.prototype, "hasAgreementPendingUpgrade", {
                        get: function() {
                            return !!(this.props.data.currentUser && this.props.data.currentUser.payoutInvite && this.props.data.currentUser.payoutInvite.workflow && this.props.data.currentUser.payoutInvite.workflow.currentStep && this.props.data.currentUser.payoutInvite.workflow.currentStep === m.J.AGREEMENT_PENDING_UPGRADE)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t
                }(i.Component),
                ur = Object(r.compose)(Object(p.b)("PayoutOnboardingPage", {
                    destination: f.a.DashboardSettingsRevenuePayoutOnboarding
                }), Object(b.a)({
                    location: v.PageviewLocation.DashboardSettingsRevenuePayoutOnboarding
                }), Object(u.a)(dr))(cr),
                mr = n("+WWT"),
                pr = (n("NEwK"), function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.data.loading && !this.props.data.error || this.props.latencyTracking.reportInteractive()
                    }, t.prototype.componentDidUpdate = function(e) {
                        (e.data.loading && !this.props.data.loading || this.props.data.error) && this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        if (this.props.data.loading) return i.createElement(P.Ya, {
                            padding: {
                                y: 5
                            }
                        }, i.createElement(P.ab, {
                            fillContent: !0
                        }));
                        if (this.props.data.error || !this.tipaltiURL) return i.createElement(P.Ya, {
                            padding: {
                                y: 5
                            }
                        }, i.createElement(d.a, null));
                        if (!this.isOnboardingComplete) return i.createElement(c.a, null);
                        var e = i.createElement(O.a, {
                            title: Object(h.d)("Change Payout Method", "PayoutSettingsPage"),
                            linkToParent: "/" + this.props.match.params.channelName + "/dashboard/settings/revenue"
                        });
                        return i.createElement(Ki, {
                            enableTwoFactorMessage: Object(h.d)("You must enable two-factor authentication to change your payout method.", "PayoutSettingsPage")
                        }, i.createElement(C.a, {
                            header: e
                        }, i.createElement(T.a, null, i.createElement(ia, {
                            tipaltiURL: this.tipaltiURL
                        }))))
                    }, Object.defineProperty(t.prototype, "isOnboardingComplete", {
                        get: function() {
                            return !!(this.props.data.currentUser && this.props.data.currentUser.payoutInvite && this.props.data.currentUser.payoutInvite.workflow && this.props.data.currentUser.payoutInvite.workflow.currentStep === m.J.COMPLETED)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "tipaltiURL", {
                        get: function() {
                            return this.props.data.currentUser && this.props.data.currentUser.payoutInvite && this.props.data.currentUser.payoutInvite.workflow && this.props.data.currentUser.payoutInvite.workflow.payoutSettingsURL
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t
                }(i.Component)),
                gr = Object(r.compose)(Object(p.b)("PayoutSettingsPage", {
                    destination: f.a.DashboardSettingsRevenuePayoutSettings
                }), Object(b.a)({
                    location: v.PageviewLocation.DashboardSettingsRevenuePayoutSettings
                }), Object(u.a)(mr))(pr),
                hr = n("3Bft"),
                br = n("0WFu"),
                fr = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onChange = function(e) {
                            t.props.onChange(t.props.index, e.currentTarget.value)
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        return i.createElement(N.a, {
                            label: this.props.label
                        }, i.createElement(P.Sa, {
                            type: P.Ua.Text,
                            maxLength: 50,
                            placeholder: Object(h.d)("Enter the name of your subscription ticket", "SubsNameSettingsSection"),
                            value: this.props.displayName,
                            onChange: this.onChange
                        }), i.createElement(k.a, {
                            text: this.props.description
                        }))
                    }, t
                }(i.Component),
                vr = n("Q7E8"),
                yr = n("Wuwm"),
                Sr = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            displayNames: new Array,
                            saveStatus: S.b.NoChanges
                        }, t.onDisplayNameChange = function(e, n) {
                            return a.__awaiter(t, void 0, void 0, function() {
                                var t;
                                return a.__generator(this, function(a) {
                                    return (t = this.state.displayNames.slice())[e] = n, this.setState({
                                        displayNames: t,
                                        saveStatus: S.b.DirtyChanges
                                    }), [2]
                                })
                            })
                        }, t.onClickSave = function() {
                            return a.__awaiter(t, void 0, void 0, function() {
                                var e, t, n, i, r;
                                return a.__generator(this, function(a) {
                                    switch (a.label) {
                                        case 0:
                                            if (!this.props.data.user || !this.props.data.user.id || !this.props.data.user.subscriptionProducts) return [2];
                                            e = S.b.Working, this.setState({
                                                saveStatus: e
                                            }), t = 0, a.label = 1;
                                        case 1:
                                            if (!(t < this.state.displayNames.length)) return [3, 6];
                                            if (!(n = this.props.data.user.subscriptionProducts[t])) return [3, 5];
                                            i = this.state.displayNames[t], r = {
                                                targetUserID: this.props.data.user.id,
                                                id: n.id,
                                                displayName: i
                                            }, a.label = 2;
                                        case 2:
                                            return a.trys.push([2, 4, , 5]), [4, this.props.updateSubscriptionProduct(Object(y.a)(r))];
                                        case 3:
                                            return a.sent(), e = S.b.Success, [3, 5];
                                        case 4:
                                            return a.sent(), e = S.b.Error, [3, 5];
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
                                case hr.a.Tier1:
                                    return Object(h.d)("Tier 1 Subscription Plan Name", "SubsNameSettingsPage");
                                case hr.a.Tier2:
                                    return Object(h.d)("TIer 2 Subscription Plan Name", "SubsNameSettingsPage");
                                case hr.a.Tier3:
                                    return Object(h.d)("Tier 3 Subscription Plan Name", "SubsNameSettingsPage");
                                default:
                                    return Object(h.d)("Subscription Plan Name", "SubsNameSettingsPage")
                            }
                        }, t.createSubPlanDescription = function(e) {
                            if (e) {
                                var t = Object(br.b)(e);
                                return null === t && (t = 1), Object(h.d)("Name of your Tier {tierNum} subscription plan that will be visible to everyone", {
                                    tierNum: t
                                }, "SubsNameSettingsPage")
                            }
                            return Object(h.d)("Name of your subscription plan that will be visible to everyone", "SubsNameSettingsPage")
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.componentDidMount = function() {
                        h.p.setPageTitle(Object(h.d)("Subscription Information", "SubsNameSettingsPageTitle")), this.props.data.loading && !this.props.data.error || this.props.latencyTracking.reportInteractive()
                    }, t.prototype.componentDidUpdate = function(e) {
                        (e.data.loading && !this.props.data.loading || this.props.data.error) && this.props.latencyTracking.reportInteractive()
                    }, t.prototype.componentWillMount = function() {
                        var e = this.props.data,
                            t = e.loading,
                            n = e.error,
                            a = e.user;
                        if (!t && !n && a && a.subscriptionProducts) {
                            var i = this.sortByTier(a.subscriptionProducts);
                            this.setState({
                                displayNames: i.map(function(e) {
                                    return e.displayName
                                }),
                                saveStatus: S.b.NoChanges
                            })
                        }
                    }, t.prototype.componentWillReceiveProps = function(e) {
                        var t = e.data,
                            n = t.loading,
                            a = t.error,
                            i = t.user;
                        if (this.props.data.loading && !n && !a && i && i.subscriptionProducts) {
                            var r = this.sortByTier(i.subscriptionProducts);
                            this.setState({
                                displayNames: r.map(function(e) {
                                    return e.displayName
                                }),
                                saveStatus: S.b.NoChanges
                            })
                        }
                    }, t.prototype.render = function() {
                        var e = this.props.data,
                            t = e.loading,
                            n = e.error,
                            a = e.user;
                        if (!a || !a.subscriptionProducts) return t ? i.createElement(P.ab, {
                            fillContent: !0
                        }) : n ? i.createElement(d.a, null) : null;
                        var r = i.createElement(E.a, {
                                status: this.state.saveStatus,
                                onClickSave: this.onClickSave
                            }),
                            o = i.createElement(O.a, {
                                title: Object(h.d)("Subscription Information", "SubsNameSettingsPage"),
                                linkToParent: "/" + this.props.match.params.channelName + "/dashboard/settings/revenue"
                            });
                        return i.createElement(C.a, {
                            header: o,
                            footer: r
                        }, this.renderProducts())
                    }, t.prototype.renderProducts = function() {
                        var e = this;
                        return this.props.data.user && this.props.data.user.subscriptionProducts ? this.props.data.user.subscriptionProducts.map(function(t, n) {
                            if (!t) return null;
                            var a = e.state.displayNames[n],
                                r = t.id,
                                o = e.createSubPlanName(t.tier),
                                s = e.createSubPlanDescription(t.tier || void 0);
                            return i.createElement(fr, {
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
                Er = Object(g.compose)(Object(p.b)("SubsNameSettingsPage", {
                    destination: f.a.DashboardSettingsRevenueSubsNameSettings
                }), Object(b.a)({
                    location: v.PageviewLocation.DashboardSettingsRevenueSubsNameSettings
                }), Object(u.a)(vr, {
                    options: function(e) {
                        return {
                            variables: {
                                login: e.match.params.channelName
                            }
                        }
                    }
                }), Object(u.a)(yr, {
                    name: "updateSubscriptionProduct"
                }))(Sr),
                kr = n("fT/Q"),
                Nr = n("ESve"),
                Or = n("9C/b"),
                Tr = function(e) {
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
                                var e, t, n, i, r, o;
                                return a.__generator(this, function(s) {
                                    switch (s.label) {
                                        case 0:
                                            return n = this.props.data.currentUser && this.props.data.currentUser.payoutInvite && this.props.data.currentUser.payoutInvite.category, i = this.props.data.currentUser && this.props.data.currentUser.id, n && i ? (this.props.data.currentUser && this.props.data.currentUser.programAgreement ? (e = this.props.data.currentUser.programAgreement.type, t = this.props.data.currentUser.programAgreement.version) : (e = n, t = "v1"), r = a.__assign({}, Object(y.a)({
                                                targetUserID: i,
                                                type: e,
                                                version: t
                                            })), [4, this.props.acceptProgramAgreement(r)]) : [2];
                                        case 1:
                                            return (o = s.sent()).data.acceptProgramAgreement && o.data.acceptProgramAgreement.error ? (this.setState({
                                                processingAgreement: !1
                                            }), [2]) : (this.setState({
                                                redirecting: !0
                                            }), [4, this.props.data.refetch()]);
                                        case 2:
                                            return s.sent(), this.props.history.push("/" + this.props.match.params.channelName + "/dashboard/settings/revenue"), [2]
                                    }
                                })
                            })
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.data.loading && !this.props.data.error || (h.p.setPageTitle(this.headerTitle), this.props.latencyTracking.reportInteractive())
                    }, t.prototype.componentDidUpdate = function(e) {
                        (e.data.loading && !this.props.data.loading || this.props.data.error) && (h.p.setPageTitle(this.headerTitle), this.props.latencyTracking.reportInteractive())
                    }, t.prototype.render = function() {
                        if (this.props.data.loading || this.state.redirecting) return i.createElement(P.Ya, {
                            padding: {
                                y: 5
                            }
                        }, i.createElement(P.ab, {
                            fillContent: !0
                        }));
                        if (this.props.data.error) return i.createElement(P.Ya, {
                            padding: {
                                y: 5
                            }
                        }, i.createElement(d.a, null));
                        if (!this.hasAgreementPendingUpgrade) return i.createElement(c.a, null);
                        var e = i.createElement(O.a, {
                            title: this.headerTitle,
                            linkToParent: "/" + this.props.match.params.channelName + "/dashboard/settings/revenue"
                        });
                        return i.createElement(Ki, {
                            enableTwoFactorMessage: Object(h.d)("You must enable two-factor authentication to accept your agreement.", "UpgradeTermsPage")
                        }, i.createElement(C.a, {
                            header: e
                        }, i.createElement(T.a, null, i.createElement(P.Fb, {
                            borderMarked: !0,
                            padding: 2,
                            elevation: 1
                        }, this.renderAgreement)), this.requiresParentConsent && i.createElement(qn, {
                            updateParentName: this.updateParentName,
                            updateParentConfirmation: this.updateParentConfirmation
                        }), i.createElement(P.Fb, {
                            padding: 2,
                            background: P.r.Alt2
                        }, i.createElement(P.z, {
                            size: P.D.Large,
                            state: this.state.processingAgreement ? P.E.Loading : P.E.Default,
                            onClick: this.handleAgreeClick,
                            disabled: this.proceedButtonDisabled || this.state.processingAgreement
                        }, Object(h.d)("Agree", "UpgradeTermsPage")))))
                    }, Object.defineProperty(t.prototype, "headerTitle", {
                        get: function() {
                            if (!this.props.data.currentUser || !this.props.data.currentUser.payoutInvite) return "";
                            switch (this.props.data.currentUser.payoutInvite.category) {
                                case m.I.AFFILIATE:
                                    return Object(h.d)("Agree to the Twitch Affiliate Agreement", "UpgradeTermsPage");
                                case m.I.STANDARD_PARTNER:
                                case m.I.PREMIUM_PARTNER:
                                    return Object(h.d)("Agree to the Twitch Partner Agreement", "UpgradeTermsPage");
                                default:
                                    return ""
                            }
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "hasAgreementPendingUpgrade", {
                        get: function() {
                            return !!(this.props.data.currentUser && this.props.data.currentUser.payoutInvite && this.props.data.currentUser.payoutInvite.workflow && this.props.data.currentUser.payoutInvite.workflow.currentStep === m.J.AGREEMENT_PENDING_UPGRADE)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "renderAgreement", {
                        get: function() {
                            if (!this.props.data.currentUser || !this.props.data.currentUser.payoutInvite) return null;
                            switch (this.props.data.currentUser.payoutInvite.category) {
                                case m.I.AFFILIATE:
                                    return i.createElement(Yn, null);
                                case m.I.STANDARD_PARTNER:
                                case m.I.PREMIUM_PARTNER:
                                    var e = this.props.data.currentUser.programAgreement;
                                    return e && i.createElement(Xn, {
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
                            if (!(this.props.data.currentUser && this.props.data.currentUser.payoutInvite && this.props.data.currentUser.payoutInvite.workflow && this.props.data.currentUser.payoutInvite.workflow.registration)) return !1;
                            var e = this.props.data.currentUser.payoutInvite.workflow.registration.birthdate;
                            return Object(Ln.differenceInYears)(new Date, e) < 18
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
                Cr = Object(r.compose)(Object(p.b)("UpgradeTermsPage", {
                    destination: f.a.DashboardSettingsRevenueUpgradeTerms
                }), Object(b.a)({
                    location: v.PageviewLocation.DashboardSettingsRevenueUpgradeTerms
                }), Object(u.a)(Nr), Object(u.a)(kr, {
                    name: "acceptProgramAgreement"
                }), Or.a)(Tr),
                Pr = n("DDis"),
                Ir = function() {
                    return i.createElement(i.Fragment, null, i.createElement(P.Qa, {
                        margin: {
                            bottom: 1
                        }
                    }, i.createElement(P.W, {
                        type: P.Wb.H4,
                        bold: !0
                    }, Object(h.d)("Custom Partner Agreement", "CustomPartnerAgreement"))), i.createElement(P.W, {
                        type: P.Wb.P
                    }, Object(h.d)("Please contact <x:link>support</x:link> for a copy of your active Twitch Partner Agreement.", {
                        "x:link": function(e) {
                            return i.createElement(P.U, {
                                to: "https://help.twitch.tv/customer/portal/emails/new",
                                targetBlank: !0
                            }, e)
                        }
                    }, "CustomPartnerAgreement")))
                },
                Ar = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(t, e), t.prototype.componentDidMount = function() {
                        h.p.setPageTitle(Object(h.d)("Partner Agreement", "ViewTermsPageTitle")), this.props.data.loading && !this.props.data.error || this.props.latencyTracking.reportInteractive()
                    }, t.prototype.componentDidUpdate = function(e) {
                        (e.data.loading && !this.props.data.loading || this.props.data.error) && this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        if (this.props.data.loading) return i.createElement(P.Ya, {
                            padding: {
                                y: 5
                            }
                        }, i.createElement(P.ab, {
                            fillContent: !0
                        }));
                        if (this.props.data.error) return i.createElement(P.Ya, {
                            padding: {
                                y: 5
                            }
                        }, i.createElement(d.a, null));
                        if (!this.canAccessViewTermsPage) return i.createElement(c.a, null);
                        var e = i.createElement(O.a, {
                            title: Object(h.d)("View Active Partner Agreement", "ViewTermsPage"),
                            linkToParent: "/" + this.props.match.params.channelName + "/dashboard/settings/revenue"
                        });
                        return i.createElement(Ki, {
                            enableTwoFactorMessage: Object(h.d)("You must enable two-factor authentication to view your agreement.", "ViewTermsPage")
                        }, i.createElement(C.a, {
                            header: e
                        }, i.createElement(T.a, null, i.createElement(P.Fb, {
                            borderMarked: !0,
                            padding: 2,
                            elevation: 1
                        }, this.renderAgreement))))
                    }, Object.defineProperty(t.prototype, "canAccessViewTermsPage", {
                        get: function() {
                            var e = this.props.data.currentUser;
                            return !!e && wt(e.payoutPlans && e.payoutPlans.map(function(e) {
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
                            if (t.isLegacy || t.category === m.I.CUSTOM_PARTNER) return i.createElement(Ir, null);
                            if (t.category === m.I.STANDARD_PARTNER || t.category === m.I.PREMIUM_PARTNER) {
                                var n = this.props.data.currentUser && this.props.data.currentUser.programAgreement;
                                return n && i.createElement(Xn, {
                                    body: n.body
                                })
                            }
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t
                }(i.Component),
                _r = Object(r.compose)(Object(p.b)("ViewTermsPage", {
                    destination: f.a.DashboardSettingsRevenueViewTerms
                }), Object(b.a)({
                    location: v.PageviewLocation.DashboardSettingsRevenueViewTerms
                }), Object(u.a)(Pr))(Ar),
                wr = n("IFXb"),
                Fr = n("/HQc"),
                xr = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.data.loading && !this.props.data.error || this.props.latencyTracking.reportInteractive()
                    }, t.prototype.componentDidUpdate = function(e) {
                        (e.data.loading && !this.props.data.loading || this.props.data.error) && this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        var e = this.props.data,
                            t = e.error,
                            n = e.channel,
                            a = e.currentUser;
                        return a && n ? this.isChannelOwner || this.isStaff ? this.canViewRevenueSettingsRoutes ? i.createElement(wr.a, null, i.createElement(l.a, null, i.createElement(o.a, {
                            path: "/:channelName/dashboard/settings/revenue",
                            exact: !0,
                            component: Xt
                        }), this.isChannelOwner && i.createElement(o.a, {
                            path: "/:channelName/dashboard/settings/revenue/payout-onboarding",
                            component: ur
                        }), this.isChannelOwner && i.createElement(o.a, {
                            path: "/:channelName/dashboard/settings/revenue/payouts",
                            component: gr
                        }), this.isChannelOwner && i.createElement(o.a, {
                            path: "/:channelName/dashboard/settings/revenue/upgrade-terms",
                            component: Cr
                        }), this.isChannelOwner && i.createElement(o.a, {
                            path: "/:channelName/dashboard/settings/revenue/view-terms",
                            component: _r
                        }), (this.isChannelAffiliate || this.isChannelPartner) && i.createElement(o.a, {
                            path: "/:channelName/dashboard/settings/revenue/cheer",
                            component: Pe
                        }), (this.isChannelAffiliate || this.isChannelPartner) && i.createElement(o.a, {
                            path: "/:channelName/dashboard/settings/revenue/cheerbadges",
                            component: be
                        }), (this.isChannelAffiliate || this.isChannelPartner) && i.createElement(o.a, {
                            path: "/:channelName/dashboard/settings/revenue/subscription/chatperks",
                            component: J
                        }), (this.isChannelAffiliate || this.isChannelPartner) && i.createElement(o.a, {
                            path: "/:channelName/dashboard/settings/revenue/subscription/ticket",
                            component: Er
                        }), (this.isChannelAffiliate || this.isChannelPartner) && i.createElement(o.a, {
                            path: "/:channelLogin/dashboard/settings/revenue/subscription/badges",
                            component: Fn
                        }), this.isChannelPartner && i.createElement(o.a, {
                            path: "/:channelName/dashboard/settings/revenue/cheermotes",
                            component: Qe
                        }), this.isChannelPartner && i.createElement(o.a, {
                            path: "/:channelName/dashboard/settings/revenue/game-commerce",
                            component: lt
                        }), this.isChannelPartner && i.createElement(o.a, {
                            path: "/:channelName/dashboard/settings/revenue/merch-by-amazon",
                            component: Rn
                        }), i.createElement(o.a, {
                            component: c.a
                        }))) : i.createElement(P.Ya, {
                            fullHeight: !0
                        }, i.createElement(c.a, null)) : i.createElement(s.a, {
                            to: "/" + a.login + "/dashboard/live"
                        }) : t ? i.createElement(P.Ya, {
                            fullHeight: !0
                        }, i.createElement(d.a, null)) : i.createElement(P.Ya, {
                            fullHeight: !0
                        }, i.createElement(P.ab, {
                            fillContent: !0
                        }))
                    }, Object.defineProperty(t.prototype, "isChannelOwner", {
                        get: function() {
                            return !(!this.props.data.currentUser || this.props.match.params.channelName !== this.props.data.currentUser.login)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "hasPayoutInvite", {
                        get: function() {
                            return !(!this.props.data.currentUser || !this.props.data.currentUser.payoutInvite || this.props.data.currentUser.payoutInvite.category === m.I.UNPAID_PARTNER)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "isStaff", {
                        get: function() {
                            return !!(this.props.data.currentUser && this.props.data.currentUser.roles && this.props.data.currentUser.roles.isStaff)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "isChannelAffiliate", {
                        get: function() {
                            return !!(this.props.data.channel && this.props.data.channel.roles && this.props.data.channel.roles.isAffiliate)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "isChannelPartner", {
                        get: function() {
                            return !!(this.props.data.channel && this.props.data.channel.roles && this.props.data.channel.roles.isPartner)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "canViewRevenueSettingsRoutes", {
                        get: function() {
                            return this.isChannelOwner && this.hasPayoutInvite || this.isStaff && (this.isChannelAffiliate || this.isChannelPartner)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t
                }(i.Component),
                Rr = Object(r.compose)(Object(p.b)("DashboardRevenueSettingsRoot"), Object(u.a)(Fr, {
                    options: function(e) {
                        return {
                            variables: {
                                channelName: e.match.params.channelName
                            }
                        }
                    }
                }))(xr);
            n.d(t, "DashboardRevenueSettingsRootComponent", function() {
                return xr
            }), n.d(t, "DashboardRevenueSettingsRoot", function() {
                return Rr
            })
        },
        "7LUr": function(e, t) {
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
                    end: 165
                }
            };
            n.loc.source = {
                body: "query PinnedCheerSettings_GetPinnedCheerSettings($login: String!) {\nuser(login: $login) {\nid\nlogin\nsettings {\ncheer {\nid\nleaderboard {\nisEnabled\ntimePeriod\n}\n}\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        "7PeK": function(e, t, n) {
            "use strict";
            var a = n("mrSG"),
                i = n("q1tI"),
                r = n("Ue10"),
                o = (n("KwO+"), function(e) {
                    var t = null;
                    e.footer && (t = i.createElement(r.Fb, {
                        padding: 2,
                        background: r.r.Alt2
                    }, e.footer));
                    var n = {};
                    e.header || (n = {
                        topRight: r.x.Medium,
                        topLeft: r.x.Medium
                    });
                    var o = a.__assign({
                        bottomLeft: r.x.Medium,
                        bottomRight: r.x.Medium
                    }, n);
                    return i.createElement(i.Fragment, null, e.header, i.createElement(r.Fb, {
                        background: r.r.Base,
                        margin: {
                            bottom: 4
                        },
                        border: !0,
                        borderRadius: o
                    }, e.children, t))
                });
            n.d(t, "a", function() {
                return o
            })
        },
        "8HtN": function(e, t) {
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
        "98xD": function(e, t) {
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
        "9wGn": function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "BitsSponsoredCheermoteSettingsForm_SponsoredCheermoteCampaigns"
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
                                                        value: "sponsoredCheermotes"
                                                    },
                                                    arguments: [],
                                                    directives: [],
                                                    selectionSet: {
                                                        kind: "SelectionSet",
                                                        selections: [{
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "campaigns"
                                                            },
                                                            arguments: [],
                                                            directives: [],
                                                            selectionSet: {
                                                                kind: "SelectionSet",
                                                                selections: [{
                                                                    kind: "Field",
                                                                    name: {
                                                                        kind: "Name",
                                                                        value: "edges"
                                                                    },
                                                                    arguments: [],
                                                                    directives: [],
                                                                    selectionSet: {
                                                                        kind: "SelectionSet",
                                                                        selections: [{
                                                                            kind: "Field",
                                                                            name: {
                                                                                kind: "Name",
                                                                                value: "cursor"
                                                                            },
                                                                            arguments: [],
                                                                            directives: []
                                                                        }, {
                                                                            kind: "Field",
                                                                            name: {
                                                                                kind: "Name",
                                                                                value: "node"
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
                                                                                        value: "isOptedIn"
                                                                                    },
                                                                                    arguments: [],
                                                                                    directives: []
                                                                                }, {
                                                                                    kind: "Field",
                                                                                    name: {
                                                                                        kind: "Name",
                                                                                        value: "brandImageURL"
                                                                                    },
                                                                                    arguments: [],
                                                                                    directives: []
                                                                                }, {
                                                                                    kind: "Field",
                                                                                    name: {
                                                                                        kind: "Name",
                                                                                        value: "brandName"
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
                                                                        value: "totalCount"
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
                }],
                loc: {
                    start: 0,
                    end: 268
                }
            };
            n.loc.source = {
                body: "query BitsSponsoredCheermoteSettingsForm_SponsoredCheermoteCampaigns($channelLogin: String!) {\nuser(login: $channelLogin) {\nid\nsettings {\ncheer {\nid\nsponsoredCheermotes {\ncampaigns {\nedges {\ncursor\nnode {\nid\nisOptedIn\nbrandImageURL\nbrandName\n}\n}\ntotalCount\n}\n}\n}\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        Akna: function(e, t) {
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
        BZvZ: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "CheerBadgesSettingsPage_GetIsPartner"
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
                                }]
                            }
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 110
                }
            };
            n.loc.source = {
                body: "query CheerBadgesSettingsPage_GetIsPartner($login: String!) {\nuser(login: $login) {\nid\nroles {\nisPartner\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        Cusz: function(e, t) {
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
        DDis: function(e, t) {
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
        Dg2t: function(e, t, n) {},
        EACF: function(e, t, n) {},
        ESve: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "UpgradeTermsPage"
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
                    end: 249
                }
            };
            n.loc.source = {
                body: "query UpgradeTermsPage {\ncurrentUser {\nid\nroles {\nisAffiliate\nisPartner\n}\npayoutPlans {\ncategory\nisReceivingRevenue\ntags\n}\npayoutInvite {\nid\ncategory\nworkflow {\nid\ncurrentStep\nregistration {\nbirthdate\n}\n}\n}\nprogramAgreement {\ntype\nversion\nbody\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        Ff3J: function(e, t, n) {},
        HGFl: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return i
            }), n.d(t, "b", function() {
                return r
            }), n.d(t, "c", function() {
                return o
            }), n.d(t, "d", function() {
                return s
            });
            var a = n("NAv5"),
                i = {
                    RFC3399: "YYYY-MM-DDTHH:mm:ssZ",
                    timeString: "h:mma"
                };

            function r(e, t) {
                return Object(a.format)(e, t)
            }

            function o(e) {
                return Object(a.parse)(e)
            }

            function s(e, t) {
                var n = e.split(":");
                if (2 !== n.length) throw new Error("invalid time string: " + e);
                var a = parseInt(n[0], 10),
                    i = parseInt(n[1].substring(0, 2), 10),
                    r = n[1].substring(n[1].length - 2);
                if (12 === a && "am" === r && (a = 0), "pm" === r && a < 12 && (a += 12), isNaN(a) || a < 0 || a > 23 || isNaN(i) || i < 0 || i > 59) throw new Error("invalid time string: " + e);
                var o = t || new Date;
                return o.setHours(a, i), o
            }
        },
        Hhor: function(e, t) {
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
                                                                value: "email"
                                                            },
                                                            arguments: [],
                                                            directives: []
                                                        }]
                                                    }
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
                    end: 280
                }
            };
            n.loc.source = {
                body: "query TaxPreviewModal_CurrentUser($taxType: TaxInterviewType! $returnURL: String!) {\ncurrentUser {\nid\npayoutInvite {\nid\nworkflow {\nid\nregistration {\nemail\n}\ntaxInterview(type: $taxType returnURL: $returnURL) {\nurl\naccountID\nclientID\ntype\ngovernmentAlias\nlocale\nsignature\n}\n}\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        I1TM: function(e, t) {
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
        KBb9: function(e, t) {
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
                    end: 114
                }
            };
            n.loc.source = {
                body: "query PayoutOnboardingContainer_CurrentUser {\ncurrentUser {\nid\npayoutInvite {\nid\nworkflow {\nid\ncurrentStep\n}\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        "KwO+": function(e, t, n) {},
        N9yH: function(e, t, n) {},
        NEwK: function(e, t, n) {},
        NwqP: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "mutation",
                    name: {
                        kind: "Name",
                        value: "CheerSettingsForm_OnboardUser"
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
                                                value: "id"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "isOnboarded"
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
                    end: 155
                }
            };
            n.loc.source = {
                body: "mutation CheerSettingsForm_OnboardUser($input: UpdateCheerPartnerSettingsInput!) {\nupdateCheerPartnerSettings(input: $input) {\ncheer {\nid\nisOnboarded\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        Nz9P: function(e, t, n) {},
        OB5i: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "LoyaltyBadgesManageSection_Query"
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
                                }]
                            }
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 107
                }
            };
            n.loc.source = {
                body: "query LoyaltyBadgesManageSection_Query ($login: String!) {\nuser(login: $login) {\nid\nroles {\nisPartner\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        "PE/S": function(e, t) {
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
        PZVp: function(e, t, n) {
            "use strict";
            var a;
            n.d(t, "a", function() {
                    return a
                }),
                function(e) {
                    e[e.REQUESTED = 0] = "REQUESTED", e[e.POSTPROCESS_STARTED = 1] = "POSTPROCESS_STARTED", e[e.POSTPROCESS_COMPLETE = 2] = "POSTPROCESS_COMPLETE", e[e.COMPLETE = 3] = "COMPLETE", e[e.VALIDATION_FAILED = 4] = "VALIDATION_FAILED", e[e.POSTPROCESS_FAILED = 5] = "POSTPROCESS_FAILED", e[e.POSTPROCESS_RETRYING = 6] = "POSTPROCESS_RETRYING", e[e.FEATURE_SERVICE_FAILED = 7] = "FEATURE_SERVICE_FAILED", e[e.IS_IMAGE_VALIDATION_FAILED = 110] = "IS_IMAGE_VALIDATION_FAILED", e[e.ASPECT_RATIO_VALIDATION_FAILED = 111] = "ASPECT_RATIO_VALIDATION_FAILED", e[e.WIDTH_VALIDATION_FAILED = 112] = "WIDTH_VALIDATION_FAILED", e[e.HEIGHT_VALIDATION_FAILED = 113] = "HEIGHT_VALIDATION_FAILED", e[e.IMAGE_FORMAT_VALIDATION_FAILED = 114] = "IMAGE_FORMAT_VALIDATION_FAILED", e[e.FILE_SIZE_VALIDATION_FAILED = 120] = "FILE_SIZE_VALIDATION_FAILED", e[e.TRANSFORMATION_FAILED = 210] = "TRANSFORMATION_FAILED", e[e.PROCESSING_FAILED = 220] = "PROCESSING_FAILED"
                }(a || (a = {}))
        },
        Q7E8: function(e, t) {
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
        QtTb: function(e, t, n) {},
        REKr: function(e, t) {
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
        TEIt: function(e, t) {
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
                    end: 190
                }
            };
            n.loc.source = {
                body: "mutation PinnedCheerSettings_SetPinnedCheerSettings($input: UpdateCheerPartnerSettingsInput!) {\nupdateCheerPartnerSettings(input: $input) {\ncheer {\nleaderboard {\nisEnabled\ntimePeriod\n}\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        TnsV: function(e, t) {
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
        U1LZ: function(e, t, n) {},
        VB3o: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "PayoutOnboardingTaxInterview_CurrentUser"
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
                                                                value: "email"
                                                            },
                                                            arguments: [],
                                                            directives: []
                                                        }]
                                                    }
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "timestamp"
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
                    end: 138
                }
            };
            n.loc.source = {
                body: "query PayoutOnboardingTaxInterview_CurrentUser {\ncurrentUser {\nid\npayoutInvite {\nid\nworkflow {\nid\nregistration {\nemail\n}\ntimestamp\n}\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        W6a3: function(e, t) {
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
        Wuwm: function(e, t) {
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
        XOYr: function(e, t) {
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
        YjpL: function(e, t) {
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
        Ys4A: function(e, t, n) {},
        Z21N: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "mutation",
                    name: {
                        kind: "Name",
                        value: "CancelPayoutOnboardingWorkflow"
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
                    end: 167
                }
            };
            n.loc.source = {
                body: "mutation CancelPayoutOnboardingWorkflow($input: CancelPayoutOnboardingWorkflowInput!) {\ncancelPayoutOnboardingWorkflow(input: $input) {\nworkflow {\nid\ncurrentStep\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        c0Zc: function(e, t, n) {
            "use strict";
            var a = n("q1tI"),
                i = n("Ue10");

            function r(e) {
                var t = null;
                return e.description && (t = a.createElement(i.Ya, {
                    margin: {
                        top: 1
                    }
                }, a.createElement(i.W, {
                    color: i.O.Alt2
                }, e.description))), a.createElement(i.Ya, {
                    margin: {
                        bottom: 2
                    }
                }, a.createElement(i.W, {
                    type: i.Wb.H3,
                    fontSize: i.Ca.Size4,
                    color: i.O.Alt,
                    bold: !0
                }, e.title), t)
            }
            n.d(t, "a", function() {
                return r
            })
        },
        cMo7: function(e, t, n) {},
        "ct+5": function(e, t, n) {},
        dOGv: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "TaxMismatchSpecificErrors_CurrentUser"
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
                    end: 248
                }
            };
            n.loc.source = {
                body: "query TaxMismatchSpecificErrors_CurrentUser {\ncurrentUser {\nid\npayoutInvite {\nid\nworkflow {\nid\nregistration {\ncity\ncompanyName\ncountryCode\nemail\nfirstName\nlastName\nmiddleName\npostal\nstateCode\nstreetAddress\nstreetAddress2\n}\ntaxMismatchErrors\n}\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        dWDG: function(e, t) {
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
        dxDy: function(e, t, n) {},
        fIvP: function(e, t, n) {},
        "fT/Q": function(e, t) {
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
        "h3C/": function(e, t) {
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
        keuq: function(e, t, n) {},
        l5J2: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "mutation",
                    name: {
                        kind: "Name",
                        value: "UpdateCheerPartnerSponsoredCheermoteSettings"
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
                                                value: "id"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "sponsoredCheermotes"
                                            },
                                            arguments: [],
                                            directives: [],
                                            selectionSet: {
                                                kind: "SelectionSet",
                                                selections: [{
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "campaigns"
                                                    },
                                                    arguments: [],
                                                    directives: [],
                                                    selectionSet: {
                                                        kind: "SelectionSet",
                                                        selections: [{
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "edges"
                                                            },
                                                            arguments: [],
                                                            directives: [],
                                                            selectionSet: {
                                                                kind: "SelectionSet",
                                                                selections: [{
                                                                    kind: "Field",
                                                                    name: {
                                                                        kind: "Name",
                                                                        value: "cursor"
                                                                    },
                                                                    arguments: [],
                                                                    directives: []
                                                                }, {
                                                                    kind: "Field",
                                                                    name: {
                                                                        kind: "Name",
                                                                        value: "node"
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
                                                                                value: "isOptedIn"
                                                                            },
                                                                            arguments: [],
                                                                            directives: []
                                                                        }, {
                                                                            kind: "Field",
                                                                            name: {
                                                                                kind: "Name",
                                                                                value: "brandImageURL"
                                                                            },
                                                                            arguments: [],
                                                                            directives: []
                                                                        }, {
                                                                            kind: "Field",
                                                                            name: {
                                                                                kind: "Name",
                                                                                value: "brandName"
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
                                                                value: "totalCount"
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
                    end: 270
                }
            };
            n.loc.source = {
                body: "mutation UpdateCheerPartnerSponsoredCheermoteSettings($input: UpdateCheerPartnerSettingsInput!) {\nupdateCheerPartnerSettings(input: $input) {\ncheer {\nid\nsponsoredCheermotes {\ncampaigns {\nedges {\ncursor\nnode {\nid\nisOptedIn\nbrandImageURL\nbrandName\n}\n}\ntotalCount\n}\n}\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        mAXC: function(e, t, n) {
            "use strict";
            var a = n("q1tI"),
                i = n("Ue10"),
                r = function(e) {
                    return a.createElement(i.Ya, {
                        className: "settings-row"
                    }, a.createElement(i.Va, {
                        linkTo: e.linkTo,
                        type: i.Wa.Alpha
                    }, a.createElement(i.Fb, {
                        padding: 2,
                        alignItems: i.f.Center,
                        display: i.X.Flex,
                        flexWrap: i.Ba.NoWrap
                    }, a.createElement(i.Ya, {
                        flexGrow: 1
                    }, a.createElement(i.W, {
                        fontSize: i.Ca.Size6,
                        bold: !0
                    }, e.text), a.createElement(i.W, {
                        type: i.Wb.Span
                    }, e.description)), a.createElement(i.Ya, null, a.createElement(i.tb, {
                        asset: i.ub.AngleRight
                    })))))
                };
            n.d(t, "a", function() {
                return r
            })
        },
        o5vO: function(e, t, n) {},
        o6p4: function(e, t) {
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
        qQoZ: function(e, t) {
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
        "qqE+": function(e, t) {
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
        qulQ: function(e, t, n) {},
        sL9O: function(e, t, n) {},
        tKvv: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "mutation",
                    name: {
                        kind: "Name",
                        value: "StartPayoutOnboardingWorkflow"
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
                    end: 164
                }
            };
            n.loc.source = {
                body: "mutation StartPayoutOnboardingWorkflow($input: StartPayoutOnboardingWorkflowInput!) {\nstartPayoutOnboardingWorkflow(input: $input) {\nworkflow {\nid\ncurrentStep\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        ucfV: function(e, t) {
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
                body: "query SubsSettingsSection_Query ($login: String!) {\nuser(login: $login) {\nid\nroles {\nisAffiliate\nisPartner\n}\nsubscriptionProducts {\nid\nhasAdFree\nhasFastChat\nhasSubonlyVideoArchive\nhasSubOnlyChat\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        ulzF: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return a
            }), n.d(t, "b", function() {
                return i
            });
            var a = function(e) {
                    return new Promise(function(t, n) {
                        var a = new FileReader;
                        a.onload = function() {
                            var e = i(a.result);
                            t(e)
                        }, a.onerror = function(e) {
                            n(e)
                        }, a.readAsDataURL(e)
                    })
                },
                i = function(e) {
                    return e.replace(/data:image.*;base64,/, "")
                }
        },
        v5Wq: function(e, t) {
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
        vyjL: function(e, t, n) {},
        wGZM: function(e, t) {
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
        wNpX: function(e, t) {
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
        xh38: function(e, t, n) {},
        ygYl: function(e, t, n) {},
        yvrX: function(e, t) {
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
        }
    }
]);