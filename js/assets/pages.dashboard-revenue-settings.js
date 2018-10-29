(window.webpackJsonp = window.webpackJsonp || []).push([
    [153], {
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
                    end: 263
                }
            };
            n.loc.source = {
                body: "query DashboardRevenueSettingsRoot($channelName: String!) {\ncurrentUser {\nid\nlogin\nroles {\nisAffiliate\nisExtensionsDeveloper\nisPartner\nisStaff\n}\n}\nchannel: user(login: $channelName) {\nid\npayoutInvite {\nid\ncategory\n}\npayoutPlans {\ncategory\nisReceivingRevenue\n}\n}\n}",
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
                        }, i.createElement(r.Pa, {
                            position: r.hb.Absolute,
                            attachTop: !0,
                            attachLeft: !0,
                            fullWidth: !0,
                            fullHeight: !0,
                            zIndex: r.ec.Above
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
                    return a.createElement(i.Bb, {
                        className: "settings-page-header",
                        borderTop: !0,
                        borderRight: !0,
                        borderLeft: !0,
                        borderRadius: {
                            topLeft: i.x.Medium,
                            topRight: i.x.Medium
                        },
                        background: i.r.Base
                    }, a.createElement(i.Ua, {
                        linkTo: e.linkToParent,
                        onClick: e.onClick,
                        type: i.Va.Alpha
                    }, a.createElement(i.Xa, {
                        display: i.X.Flex,
                        flexWrap: i.Ba.NoWrap
                    }, a.createElement(i.Xa, {
                        display: i.X.Flex,
                        padding: {
                            x: 1
                        }
                    }, a.createElement(i.qb, {
                        asset: i.rb.AngleLeft,
                        height: 20,
                        width: 20
                    })), a.createElement(i.Xa, {
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
                r = n("/HQc"),
                o = n("oJmH"),
                s = n("4p7I"),
                l = n("mLw1"),
                d = n("DMoW"),
                c = n("GnwI"),
                u = n("Ue10"),
                m = n("jKe7"),
                p = n("/7QA"),
                g = n("ZDlU"),
                h = n("LA8z"),
                b = n("yR8l"),
                f = n("D7An"),
                v = n("fvjX"),
                E = n("V+GM"),
                y = n("NvVO"),
                S = n("2xye"),
                k = n("geRD"),
                N = n("EMHe"),
                T = n("rwxT"),
                O = n("Ww25"),
                C = n("EpBn"),
                P = n("3hKJ"),
                A = n("BK8n"),
                I = n("7PeK"),
                _ = (n("o5vO"), n("I1TM")),
                w = 10,
                R = "prefix",
                D = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            prefix: t.props.prefix || "",
                            saveStatus: N.b.NoChanges
                        }, t.renderBanner = function(e) {
                            return e === d.s.REJECTED ? i.createElement(u.Xa, {
                                className: "emoticon-prefix__rejected-prefix-banner",
                                padding: {
                                    y: 1,
                                    x: 2
                                },
                                margin: {
                                    bottom: 1
                                }
                            }, Object(p.d)("Your prefix has been rejected. Please choose another one.", "EmoticonPrefix")) : i.createElement(u.Xa, {
                                className: "emoticon-prefix__set-prefix-banner",
                                padding: {
                                    y: 1,
                                    x: 2
                                },
                                margin: {
                                    bottom: 1
                                }
                            }, Object(p.d)("Please set your emoticon prefix. The prefix must be approved before submitting your emoticons.", "EmoticonPrefix"))
                        }, t.renderPrefixSection = function() {
                            var e = t.props.prefixState,
                                n = 0 === t.state.prefix.length ? R : t.state.prefix;
                            return i.createElement(C.a, {
                                label: Object(p.d)("Unique Prefix", "EmoticonPrefix")
                            }, i.createElement(u.Ra, {
                                type: u.Ta.Text,
                                disabled: e === d.s.PENDING,
                                maxLength: w,
                                placeholder: R,
                                value: t.state.prefix,
                                onChange: t.onPrefixChange
                            }), i.createElement(O.a, {
                                text: Object(p.d)("Prefix must begin with a lowercase letter. Prefix must be 3-10 characters in length, all lowercase. Numbers may follow first character.\nExample of how it will work: {prefix}Emotecode", {
                                    prefix: n
                                }, "EmoticonPrefix")
                            }))
                        }, t.renderPendingMessage = function() {
                            return t.props.prefixState === d.s.PENDING && i.createElement(A.a, null, i.createElement(u.W, {
                                bold: !0
                            }, Object(p.d)("Your prefix has been submitted for approval. Thank you for your patience.", "EmoticonPrefix")))
                        }, t.onPrefixChange = function(e) {
                            var n = e.currentTarget.value;
                            (0 === n.length || n[0].match(/^[a-z]+$/)) && (0 === n.length || n.match(/^[0-9a-z]+$/)) ? 0 !== n.length && n.length < 3 ? t.setState({
                                prefix: n,
                                saveStatus: N.b.NoChanges
                            }) : t.setState({
                                prefix: n,
                                saveStatus: N.b.DirtyChanges
                            }): t.setState({
                                saveStatus: N.b.NoChanges
                            })
                        }, t.onClickSave = function() {
                            return a.__awaiter(t, void 0, void 0, function() {
                                var e, t;
                                return a.__generator(this, function(n) {
                                    switch (n.label) {
                                        case 0:
                                            e = N.b.Working, this.setState({
                                                saveStatus: e
                                            }), t = Object(k.a)({
                                                channelID: this.props.channelId,
                                                name: this.state.prefix
                                            }), n.label = 1;
                                        case 1:
                                            return n.trys.push([1, 3, , 4]), [4, this.props.submitEmoticon(t)];
                                        case 2:
                                            return n.sent(), this.props.refetch && this.props.refetch(), e = N.b.Success, [3, 4];
                                        case 3:
                                            return n.sent(), e = N.b.Error, [3, 4];
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
                        e !== d.s.PENDING && (t = i.createElement(T.a, {
                            status: this.state.saveStatus,
                            onClickSave: this.onClickSave
                        }));
                        var n = i.createElement(P.a, {
                            title: Object(p.d)("Emoticon Code Prefix", "EmoticonPrefix"),
                            description: Object(p.d)("Prefix that will be prepended before your emoticon's unique code", "EmoticonPrefix"),
                            linkToParent: "/" + this.props.channelName + "/dashboard/settings/revenue"
                        });
                        return i.createElement(i.Fragment, null, this.renderBanner(e), i.createElement(I.a, {
                            header: n,
                            footer: t
                        }, this.renderPrefixSection(), this.renderPendingMessage()))
                    }, t
                }(i.Component),
                x = Object(v.compose)(Object(b.a)(_, {
                    name: "submitEmoticon"
                }))(D),
                F = n("yvrX"),
                j = n("b6Yk");

            function U(e, t, n, i) {
                return a.__awaiter(this, void 0, void 0, function() {
                    var r, o;
                    return a.__generator(this, function(a) {
                        switch (a.label) {
                            case 0:
                                return [4, j.a.post("v" + p.a.defaultAPIVersion + "/subscriptions/" + e + "/emoticons", {
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
            var L, M = n("/ZC1"),
                B = n("PZVp"),
                X = (n("/uk9"), ["image/*"]);
            ! function(e) {
                e[e.BadImageDimensionsError = 0] = "BadImageDimensionsError", e[e.BadImageError = 1] = "BadImageError", e[e.TimeoutError = 2] = "TimeoutError", e[e.UnknownError = 3] = "UnknownError", e[e.None = 4] = "None", e[e.Uploading = 5] = "Uploading", e[e.Success = 6] = "Success"
            }(L || (L = {}));
            var W, V = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        status: L.None,
                        url: "",
                        attempts: 0,
                        isUploading: !1
                    }, t.resetEmote = function() {
                        t.setState({
                            url: "",
                            status: L.None,
                            attempts: 0,
                            isUploading: !1
                        })
                    }, t.getErrorText = function() {
                        switch (t.state.status) {
                            case L.BadImageError:
                                return Object(p.d)("Bad PNG file", "EmotesUploadPicker");
                            case L.UnknownError:
                                return Object(p.d)("Something went wrong. Please try again!", "EmotesUploadPicker");
                            case L.TimeoutError:
                                return Object(p.d)("Upload took too long. Please try again!", "EmotesUploadPicker");
                            case L.BadImageDimensionsError:
                                return Object(p.d)("PNG must be {width} x {height}px", {
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
                                            status: L.None
                                        }), [2]) : this.state.attempts > 2 ? (this.setState({
                                            status: L.UnknownError,
                                            attempts: 0
                                        }), [2]) : (this.setState(function(e) {
                                            return {
                                                url: "",
                                                attempts: e.attempts + 1,
                                                status: L.Uploading
                                            }
                                        }), [4, this.uploadEmoticon(e[0])]);
                                    case 1:
                                        return t = a.sent(), n = t.url, i = t.uploadId, r = t.imageId, this.unsubscribe = p.l.subscribe({
                                            topic: "upload." + i,
                                            onMessage: function(t) {
                                                switch (o.unsubscribe(), null !== o.timeout && (clearTimeout(o.timeout), o.timeout = null), t.status) {
                                                    case B.a.POSTPROCESS_COMPLETE:
                                                    case B.a.COMPLETE:
                                                        return o.setState({
                                                            url: n,
                                                            status: L.Success
                                                        }), void o.props.uploadEmote(r, o.props.size);
                                                    case B.a.WIDTH_VALIDATION_FAILED:
                                                    case B.a.HEIGHT_VALIDATION_FAILED:
                                                        return void o.setState({
                                                            status: L.BadImageDimensionsError
                                                        });
                                                    case B.a.IMAGE_FORMAT_VALIDATION_FAILED:
                                                        return void o.setState({
                                                            status: L.BadImageError
                                                        });
                                                    default:
                                                        return null !== o.timeout && (clearTimeout(o.timeout), o.timeout = null), o.unsubscribe(), o.onImageInputChange(e)
                                                }
                                            }
                                        }), this.timeout = setTimeout(function() {
                                            o.unsubscribe(), o.setState({
                                                status: L.TimeoutError
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
                                                            return [4, j.a.post("v" + p.a.defaultAPIVersion + "/subscriptions/" + e + "/emoticons/upload_configuration", {
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
                    return t = "" === this.state.url && this.state.status === L.None ? i.createElement(u.Xa, {
                        className: "emotes-upload-picker__image-preview"
                    }, i.createElement(u.Xa, null, i.createElement(u.qb, {
                        asset: u.rb.Plus,
                        type: u.sb.Alt2,
                        height: 15,
                        width: 15
                    }))) : this.state.status === L.Uploading ? i.createElement(u.Xa, null, i.createElement(u.Za, {
                        fillContent: !0
                    })) : i.createElement(u.Xa, {
                        className: "emotes-upload-picker__image-preview emotes-upload-picker__size-" + this.props.size,
                        position: u.hb.Relative
                    }, this.state.isUploading ? i.createElement(u.Za, null) : i.createElement("img", {
                        src: "" + this.state.url
                    })), i.createElement(u.Bb, {
                        padding: {
                            x: 2,
                            y: 2
                        },
                        display: u.X.InlineBlock
                    }, i.createElement(u.Xa, {
                        margin: {
                            top: 1
                        }
                    }, i.createElement(u.Xa, {
                        className: "emotes-upload-picker__container",
                        display: u.X.InlineFlex,
                        flexDirection: u.Aa.Column,
                        position: u.hb.Relative
                    }, i.createElement(M.a, {
                        allowedFileTypes: X,
                        error: void 0 !== e,
                        onFilesSubmitted: this.onImageInputChange
                    }, i.createElement(u.Xa, {
                        padding: .5
                    }, e ? i.createElement(u.W, {
                        color: u.O.Error,
                        wordBreak: u.dc.BreakWord
                    }, e) : t))), i.createElement(u.W, null, Object(p.d)("{width} x {height}px", {
                        width: this.props.size,
                        height: this.props.size
                    }, "EmotesUploadPicker"))))
                }, t
            }(i.Component);
            ! function(e) {
                e[e.Pending = 0] = "Pending", e[e.None = 1] = "None", e[e.Success = 2] = "Success", e[e.CodeNotUnique = 3] = "CodeNotUnique", e[e.Error = 4] = "Error"
            }(W || (W = {}));
            var z, q = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            code: "",
                            pickers: [],
                            status: W.None
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
                                                status: W.Pending
                                            }), e = [this.state.emote28 || "", this.state.emote56 || "", this.state.emote112 || ""], a.label = 1;
                                        case 1:
                                            return a.trys.push([1, 4, , 5]), [4, this.props.uploadEmoticon(this.props.channelId, this.props.productId, e, this.state.code && this.transformCode(this.state.code) || "")];
                                        case 2:
                                            return a.sent(), this.setState({
                                                code: "",
                                                emote28: "",
                                                emote56: "",
                                                emote112: "",
                                                status: W.Success
                                            }), [4, this.props.refresh()];
                                        case 3:
                                            for (a.sent(), this.forceUpdate(), t = 0, n = this.state.pickers; t < n.length; t++) n[t].resetEmote();
                                            return [3, 5];
                                        case 4:
                                            return (i = a.sent()) && "CODE_NOT_UNIQUE" === i.message ? this.setState({
                                                status: W.CodeNotUnique
                                            }) : this.setState({
                                                status: W.Error
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
                            return i.createElement(V, {
                                key: e,
                                ref: t.setPickerRef,
                                channelId: t.props.channelId,
                                size: e,
                                uploadEmote: t.uploadEmote
                            })
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        return i.createElement(u.Xa, {
                            margin: {
                                top: 1
                            }
                        }, this.renderStatus(), i.createElement(u.Xa, {
                            margin: {
                                bottom: 1
                            }
                        }, this.renderPicker(28), this.renderPicker(56), this.renderPicker(112)), i.createElement(u.Xa, {
                            margin: {
                                y: 1
                            }
                        }, i.createElement(C.a, {
                            label: Object(p.d)("Unique Code", "EmotesUploader")
                        }, i.createElement(u.Ra, {
                            type: u.Ta.Text,
                            value: this.state.code,
                            onChange: this.onChange
                        }))), i.createElement(u.Xa, {
                            margin: {
                                y: 1
                            }
                        }, i.createElement(C.a, {
                            label: Object(p.d)("Full Emoticon Code Preview", "EmotesUploader")
                        }, this.props.emoticonPrefix, this.state.code && this.transformCode(this.state.code))), i.createElement(u.Xa, {
                            margin: {
                                y: 1
                            }
                        }, i.createElement(C.a, {
                            label: ""
                        }, i.createElement(u.z, {
                            disabled: this.submitDisabled,
                            onClick: this.onClick,
                            "data-test-selector": "upload-emoticon-button"
                        }, Object(p.d)("Submit Changes", "EmotesUploader")))))
                    }, t.prototype.renderStatus = function() {
                        return this.state.status === W.Error ? i.createElement(u.Bb, {
                            "data-test-selector": "upload-emoticon-error",
                            borderTop: !0,
                            borderRight: !0,
                            borderBottom: !0,
                            padding: 1,
                            margin: {
                                top: 1
                            },
                            className: "disable-gift-modal__error"
                        }, i.createElement(u.W, null, Object(p.d)("Something went wrong and your request could not be processed at this time. Please try again later.", "EmotesUploader"))) : this.state.status === W.CodeNotUnique ? i.createElement(u.Bb, {
                            "data-test-selector": "upload-emoticon-code-invalid",
                            borderTop: !0,
                            borderRight: !0,
                            borderBottom: !0,
                            padding: 1,
                            margin: {
                                top: 1
                            },
                            className: "disable-gift-modal__error"
                        }, i.createElement(u.W, null, Object(p.d)("An emoticon with the same code already exists.", "EmotesUploader"))) : this.state.status === W.Success ? i.createElement(u.Bb, {
                            "data-test-selector": "upload-emoticon-success",
                            borderTop: !0,
                            borderRight: !0,
                            borderBottom: !0,
                            padding: 1,
                            margin: {
                                top: 1
                            },
                            className: "disable-gift-modal"
                        }, i.createElement(u.W, null, Object(p.d)("Emoticon was successfully uploaded!", "EmotesUploader"))) : null
                    }, Object.defineProperty(t.prototype, "submitDisabled", {
                        get: function() {
                            return this.state.status === W.Pending || !(this.state.emote112 && this.state.emote56 && this.state.emote28 && this.state.code)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t.prototype.transformCode = function(e) {
                        return e.charAt(0).toUpperCase() + e.slice(1)
                    }, t
                }(i.Component),
                G = (n("N9yH"), function(e) {
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
                            a = i.createElement(u.Xa, {
                                margin: {
                                    left: 1,
                                    right: 2
                                }
                            }, i.createElement(u.N, {
                                label: "",
                                checked: this.state.isChecked,
                                "data-id": n.id,
                                onChange: this.selectForDelete
                            })),
                            r = n.state && "PENDING" === n.state ? Object(p.d)("( Pending )", "ChatEmoticonsSettingsItem") : "";
                        return i.createElement(u.Ub, {
                            display: u.X.Flex,
                            align: u.Vb.Center,
                            label: n.token + r,
                            direction: u.Wb.Bottom
                        }, i.createElement(u.Xa, {
                            display: u.X.InlineBlock,
                            className: "emote-item__img"
                        }, i.createElement(u.S, {
                            alt: Object(p.d)("Emoticon", "ChatEmoticonsSettingsItem"),
                            src: "https://static-cdn.jtvnw.net/emoticons/v1/" + n.id + "/1.0"
                        })), t ? a : null)
                    }, t
                }(i.Component)),
                Y = (n("qulQ"), function(e) {
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
                                return i.createElement(u.Xa, {
                                    display: u.X.InlineBlock,
                                    key: t.id,
                                    margin: {
                                        y: .5,
                                        right: .5
                                    }
                                }, i.createElement(G, {
                                    emoticon: t,
                                    toggleEmoteForDeletion: e.props.toggleEmoteForDeletion,
                                    isEditing: n
                                }))
                            }),
                            s = this.props.emoticonLimit - o.length;
                        if (s > 0)
                            for (var l = 0; l < s; l++) o.push(i.createElement(u.Xa, {
                                display: u.X.InlineBlock,
                                key: l,
                                margin: {
                                    y: .5,
                                    right: .5
                                },
                                position: u.hb.Relative
                            }, i.createElement("div", {
                                className: "emoticons-list__empty"
                            }, i.createElement(u.Z, null))));
                        var d = r.map(function(t, a) {
                                var r = null;
                                if (0 === t.emotes.length) r = i.createElement(u.Bb, {
                                    display: u.X.InlineBlock,
                                    key: a,
                                    margin: {
                                        y: .5,
                                        right: .5
                                    },
                                    position: u.hb.Relative
                                }, i.createElement("div", {
                                    className: "emoticons-list__empty"
                                }, i.createElement(u.Z, null)));
                                else {
                                    var o = t.emotes[0];
                                    r = i.createElement(i.Fragment, null, i.createElement(u.Xa, {
                                        display: u.X.InlineBlock,
                                        key: o.id
                                    }, i.createElement(G, {
                                        emoticon: o,
                                        toggleEmoteForDeletion: e.props.toggleEmoteForDeletion,
                                        isEditing: n
                                    })), i.createElement(u.Xa, {
                                        position: u.hb.Relative,
                                        margin: {
                                            left: .5
                                        },
                                        display: u.X.InlineBlock,
                                        className: "emoticons-list__price"
                                    }, i.createElement(u.W, null, t.price)))
                                }
                                return i.createElement(u.Xa, {
                                    display: u.X.InlineBlock,
                                    key: a,
                                    margin: {
                                        right: 1
                                    }
                                }, r)
                            }),
                            c = Object(p.d)("Emoticons {a}/{b}", {
                                a: a.length,
                                b: this.props.emoticonLimit
                            }, "EmoticonsList"),
                            m = i.createElement(C.a, {
                                label: Object(p.d)("Upload Progress", "EmoticonsList")
                            }, i.createElement(u.Xa, {
                                margin: {
                                    top: 1,
                                    bottom: 2
                                }
                            }, i.createElement(u.W, null, Object(p.d)("Mission: Get {num} Subscriber Points", {
                                num: this.props.maxSubScore
                            }, "EmoticonsList"))), i.createElement(u.Xa, {
                                margin: {
                                    y: 1
                                }
                            }, i.createElement(u.Xa, {
                                display: u.X.InlineBlock
                            }, i.createElement(u.W, null, Object(p.d)("Reward", "EmoticonsList"), ":")), i.createElement(u.Xa, {
                                display: u.X.InlineBlock
                            }, i.createElement(u.W, null, "+", this.props.nextEmoticonLimit - this.props.emoticonLimit, " ", Object(p.d)("Emoticon Slot(s)", "EmoticonsList")))), i.createElement(u.kb, {
                                mask: !0,
                                value: this.props.currentSubScore / this.props.maxSubScore * 100,
                                size: u.mb.Default
                            }), i.createElement(u.Xa, {
                                margin: {
                                    top: 1,
                                    bottom: 2
                                }
                            }, i.createElement(u.W, null, this.props.currentSubScore, "/", this.props.maxSubScore, " ", Object(p.d)("Subscriber Points", "EmoticonsList"))));
                        return i.createElement(i.Fragment, null, i.createElement(C.a, {
                            label: c
                        }, o), i.createElement(C.a, {
                            label: Object(p.d)("Additional Emoticons", "EmoticonsList")
                        }, d, i.createElement(u.Xa, {
                            margin: {
                                y: 1
                            }
                        }, i.createElement(u.W, null, Object(p.d)("1 extra emoticon for $9.99 subscribers, and 1 extra for $24.99 subscribers.", "EmoticonsList")), i.createElement(u.W, null, Object(p.d)("$24.99 subscribers will have access to both emoticons.", "EmoticonsList")))), this.props.nextEmoticonLimit > 0 ? m : null)
                    }, t
                }(i.Component)),
                H = (n("5Omc"), n("W6a3"));
            ! function(e) {
                e[e.None = 0] = "None", e[e.Error = 1] = "Error", e[e.Success = 2] = "Success"
            }(z || (z = {}));
            var Q = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            activeTab: 0,
                            isEditing: !1,
                            emotesDeleteQueue: [],
                            deleteStatus: z.None
                        }, t.renderContent = function() {
                            if (t.props.data.loading) return i.createElement(u.Za, {
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
                                s = 0 === t.state.activeTab && o.emotes && o.emotes.length < l || t.state.activeTab > 0 && o.emotes.length < 1 ? i.createElement(q, {
                                    refresh: t.refresh,
                                    emoticonPrefix: t.props.emoticonPrefix,
                                    channelId: t.props.data.user.id,
                                    productId: o.id,
                                    uploadEmoticon: U
                                }) : i.createElement(u.Xa, {
                                    margin: {
                                        y: 2
                                    }
                                }, Object(p.d)("You’ve already uploaded an emoticon for your {price} subscription. Please feel free to swap an emoticon for a new one by clicking edit, selecting the emoticon(s) you wish to remove, clicking delete, then submitting a new emoticon in the sizes specified.", {
                                    price: o.price
                                }, "ChatEmoticonsSettingsPage"));
                                var d = t.props.data.user.subscriberScore.nextEmoteLimit || 0,
                                    c = t.props.data.user.subscriberScore.next || 0;
                                return i.createElement(i.Fragment, null, t.renderDeleteError(), t.goodStanding(), i.createElement(u.Bb, {
                                    className: "chat-emoticons-settings-page__actions"
                                }, t.state.isEditing ? t.editActions() : i.createElement(u.z, {
                                    onClick: t.toggleEmotesEditing
                                }, Object(p.d)("Edit", "ChatEmoticonsSettingsPage"))), i.createElement(u.Xa, {
                                    padding: {
                                        bottom: 2
                                    }
                                }, i.createElement(Y, {
                                    emoticonLimit: t.props.data.user.subscriberScore.currentEmoteLimit,
                                    nextEmoticonLimit: d,
                                    currentSubScore: t.props.data.user.subscriberScore.current,
                                    maxSubScore: c,
                                    emoticons: n,
                                    products: r,
                                    channelName: t.props.channelName,
                                    isEditing: t.state.isEditing,
                                    toggleEmoteForDeletion: t.toggleEmoteForDeletion
                                })), i.createElement(u.Xa, {
                                    padding: {
                                        top: 1,
                                        bottom: 2,
                                        left: 2,
                                        right: 2
                                    }
                                }, i.createElement("h3", null, i.createElement(u.W, null, Object(p.d)("Upload Emoticons", "ChatEmoticonsSettingsPage"))), i.createElement(u.Xa, {
                                    margin: {
                                        top: 3
                                    }
                                }, i.createElement(u.Db, null, t.getTabs())), s))
                            }
                            return t.renderPageError()
                        }, t.renderPageError = function() {
                            return i.createElement(g.a, {
                                message: Object(p.d)("Failed to get emote settings. Please try again later", "ChatEmoticonsSettingsPage")
                            })
                        }, t.getTabs = function() {
                            return t.props.data.user && t.props.data.user.subscriptionProducts ? t.props.data.user.subscriptionProducts.map(function(e, n) {
                                return e ? i.createElement(u.Cb, {
                                    key: e.tier,
                                    active: t.state.activeTab === n,
                                    "data-tab-target": e.tier,
                                    onClick: t.toggleActiveTab
                                }, i.createElement(u.W, null, Object(p.d)("Tier {n}", {
                                    n: n + 1
                                }, "ChatEmoticonsSettingsPage"))) : null
                            }) : null
                        }, t.goodStanding = function() {
                            return t.props.data.user && t.props.data.user.isInGoodStanding ? i.createElement(u.Bb, {
                                className: "chat-emoticons-settings-page__goodstanding",
                                background: u.r.Alt,
                                color: u.O.Alt,
                                padding: 1,
                                margin: {
                                    x: "auto",
                                    top: 2
                                },
                                border: !0
                            }, Object(p.d)("As a Partner in good standing with the ToS, you can add emotes without going through a manual review. Please keep in mind that the <x:link>same emote rules</x:link> still apply.", {
                                "x:link": function(e) {
                                    return i.createElement(u.U, {
                                        to: "https://help.twitch.tv/customer/portal/articles/2348985"
                                    }, e)
                                }
                            }, "ChatEmoticonsSettingsPage")) : null
                        }, t.editActions = function() {
                            return i.createElement(i.Fragment, null, i.createElement(u.z, {
                                type: u.F.Alert,
                                disabled: 0 === t.state.emotesDeleteQueue.length,
                                onClick: t.deleteEmotes
                            }, Object(p.d)("Delete", "ChatEmoticonsSettingsPage")), i.createElement(u.z, {
                                onClick: t.toggleEmotesEditing
                            }, Object(p.d)("Cancel", "ChatEmoticonsSettingsPage")))
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
                                                                return [4, j.a.deleteOrThrow("v" + p.a.defaultAPIVersion + "/ticket_products/" + e + "/remove_emoticon", {
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
                                                deleteStatus: z.Error
                                            }), [2];
                                        case 5:
                                            return this.setState({
                                                deleteStatus: z.Success,
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
                        var e = i.createElement(P.a, {
                            title: Object(p.d)("Emotes Settings", "EmotesSettingsPage"),
                            description: Object(p.d)("Emoticons that your subscribers can use in Twitch chat", "EmotesSettingsPage"),
                            linkToParent: "/" + this.props.channelName + "/dashboard/settings/revenue"
                        });
                        return i.createElement(I.a, {
                            header: e
                        }, this.renderContent())
                    }, t.prototype.renderDeleteError = function() {
                        return this.state.deleteStatus === z.Error ? i.createElement(u.Bb, {
                            borderTop: !0,
                            borderRight: !0,
                            borderBottom: !0,
                            padding: 1,
                            margin: {
                                top: 1
                            },
                            className: "disable-gift-modal__error"
                        }, i.createElement(u.W, null, Object(p.d)("Something went wrong and your request could not be processed at this time. Please try again later.", "ChatEmoticonsSettingsPage"))) : null
                    }, t
                }(i.Component),
                $ = Object(v.compose)(Object(b.a)(H, {
                    options: function(e) {
                        return {
                            variables: {
                                login: e.channelName
                            }
                        }
                    }
                }))(Q),
                Z = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.refetch = function() {
                            t.props.data.refetch()
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.componentDidMount = function() {
                        p.p.setPageTitle(Object(p.d)("Emotes Settings", "ChatEmoticonsPageTitle")), this.props.data.loading && !this.props.data.error || this.props.latencyTracking.reportInteractive()
                    }, t.prototype.componentDidUpdate = function(e) {
                        (e.data.loading && !this.props.data.loading || this.props.data.error) && this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        return this.props.data.user && this.props.data.user.id && this.props.data.user.emoticonPrefix && this.props.data.user.emoticonPrefix.state ? this.props.data.user && this.props.data.user.emoticonPrefix.state === d.s.ACTIVE ? i.createElement($, {
                            channelName: this.props.match.params.channelName,
                            emoticonPrefix: this.props.data.user.emoticonPrefix.name
                        }) : i.createElement(x, {
                            channelId: this.props.data.user.id,
                            channelName: this.props.match.params.channelName,
                            prefix: this.props.data.user.emoticonPrefix.name,
                            prefixState: this.props.data.user.emoticonPrefix.state,
                            refetch: this.refetch
                        }) : this.props.data.loading ? i.createElement(u.Za, {
                            fillContent: !0
                        }) : i.createElement(g.a, {
                            message: Object(p.d)("Failed to get emote settings. Please try again later.", "ChatEmoticonsPage")
                        })
                    }, t
                }(i.Component),
                K = Object(v.compose)(Object(c.b)("ChatEmoticonsPage", {
                    destination: y.a.DashboardSettingsRevenueChatEmoticons
                }), Object(E.a)({
                    location: S.PageviewLocation.DashboardSettingsRevenueChatEmoticons
                }), Object(b.a)(F, {
                    options: function(e) {
                        return {
                            variables: {
                                login: e.match.params.channelName
                            }
                        }
                    }
                }))(Z),
                J = n("3R7m"),
                ee = n("o6p4"),
                te = function(e) {
                    return i.createElement(u.Bb, {
                        display: u.X.Flex,
                        flexDirection: u.Aa.Row,
                        background: u.r.Alt,
                        alignItems: u.f.Center,
                        padding: 1
                    }, i.createElement(u.Xa, {
                        margin: {
                            right: 1
                        },
                        display: u.X.Flex,
                        alignContent: u.e.Center
                    }, i.createElement(u.Ub, {
                        label: e.title,
                        "data-test-selector": "tooltip-selector"
                    }, i.createElement("img", {
                        alt: e.title,
                        src: e.imageSrc
                    }))), i.createElement(u.Xa, {
                        flexGrow: 1
                    }, i.createElement(u.W, {
                        "data-test-selector": "threshold-selector"
                    }, Object(p.d)("{threshold} Bit Badge", {
                        threshold: Object(p.f)(e.threshold)
                    }, "ChatBadgeTierItem"))), i.createElement(u.Tb, {
                        onChange: e.onToggle,
                        checked: e.checked,
                        "data-test-selector": "toggle-selector"
                    }, Object(p.d)("Edit", "ChatBadgeTierItem")))
                },
                ne = function() {
                    return i.createElement(u.Bb, {
                        padding: 1,
                        display: u.X.Flex,
                        flexDirection: u.Aa.Row
                    }, i.createElement(u.Xa, {
                        padding: {
                            right: 1
                        }
                    }, i.createElement(u.gb, {
                        width: 20,
                        height: 20
                    })), i.createElement(u.Xa, {
                        flexGrow: 1
                    }, i.createElement(u.gb, null)))
                },
                ae = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            saveStatus: N.b.NoChanges
                        }, t.renderTierItems = function() {
                            return t.tiers.map(function(e, n) {
                                var a, r;
                                return e && e.badge ? (a = e.badge.id, r = i.createElement(te, {
                                    threshold: e.threshold,
                                    checked: e.isEnabled,
                                    imageSrc: e.badge.image1x,
                                    title: e.badge.title,
                                    onToggle: t.onItemToggle.bind(t, n)
                                })) : (a = n, r = i.createElement(ne, null)), i.createElement(u.Xa, {
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
                                            }, [4, s(Object(k.b)(d, c))]) : [2];
                                        case 1:
                                            return u = m.sent(), Object(k.e)(J, {
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
                        return i.createElement(C.a, {
                            label: Object(p.d)("Chat Badge Tiers", "ChatBadgeTiersForm")
                        }, i.createElement(u.Xa, {
                            margin: {
                                bottom: 2
                            }
                        }, i.createElement(u.W, null, Object(p.d)("Choose which Cheer Chat Badges are enabled in your channel. Viewers unlock badges based on total Bits used to Cheer for you. The highest unlocked enabled badge will appear next to viewers' names", "ChatBadgeTiersForm"))), i.createElement(u.Ja, {
                            gutterSize: u.Ka.Medium
                        }, i.createElement(u.P, {
                            cols: {
                                default: 12,
                                sm: 6
                            }
                        }, e.slice(0, Math.floor(e.length / 2))), i.createElement(u.P, {
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
                ie = Object(v.compose)(Object(b.a)(J, {
                    options: function(e) {
                        return {
                            variables: {
                                login: e.channelName
                            }
                        }
                    }
                }), Object(b.a)(ee, {
                    name: "updateBadgeTiers"
                }), Object(c.b)("ChatBadgeTiersForm"))(ae),
                re = n("ulzF"),
                oe = (n("vyjL"), function(e) {
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
                        return i.createElement(u.Bb, {
                            position: u.hb.Relative,
                            padding: 5,
                            background: u.r.Alt
                        }, i.createElement(M.a, {
                            allowedFileTypes: [".png"],
                            onFilesSubmitted: this.onFilesSubmitted,
                            error: t
                        }, i.createElement(u.Bb, {
                            position: u.hb.Absolute,
                            attachTop: !0,
                            attachLeft: !0,
                            fullWidth: !0,
                            fullHeight: !0,
                            display: u.X.Flex,
                            flexDirection: u.Aa.Column,
                            alignItems: u.f.Center,
                            justifyContent: u.Wa.Center,
                            className: "chat-badge-drop-zone__content"
                        }, n)))
                    }, t
                }(i.Component));
            var se, le = function(e, t) {
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
                de = n("v5Wq"),
                ce = n("XOYr"),
                ue = 18,
                me = 36,
                pe = 72,
                ge = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            selectedIndex: 2,
                            stagedImageURLs: {},
                            saveStatus: N.b.NoChanges,
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
                                        saveStatus: i && i.image1x && i.image2x && i.image4x ? N.b.DirtyChanges : N.b.NoChanges
                                    }
                                }
                            })
                        }, t.onNormalImageSubmitted = function(e) {
                            return a.__awaiter(t, void 0, void 0, function() {
                                return a.__generator(this, function(t) {
                                    switch (t.label) {
                                        case 0:
                                            return [4, le(e, {
                                                height: ue,
                                                width: ue
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
                                            return [4, le(e, {
                                                height: me,
                                                width: me
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
                                            return [4, le(e, {
                                                height: pe,
                                                width: pe
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
                                        saveStatus: o && o.image1x && o.image2x && o.image4x ? N.b.DirtyChanges : N.b.NoChanges,
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
                                            }, [4, i(Object(k.b)(s, l))]) : [2] : [2];
                                        case 1:
                                            return d = u.sent(), Object(k.e)(de, {
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
                                                        imageData1x: Object(re.b)(d.image1x),
                                                        imageData2x: Object(re.b)(d.image2x),
                                                        imageData4x: Object(re.b)(d.image4x)
                                                    }]
                                                }
                                            }, this.setState({
                                                saveStatus: N.b.Working
                                            }), m.label = 1;
                                        case 1:
                                            return m.trys.push([1, 3, , 4]), [4, o(Object(k.a)(c))];
                                        case 2:
                                            return u = m.sent(), Object(k.e)(de, {
                                                login: s
                                            }, function(e) {
                                                if (e.user && e.user.settings && e.user.settings.cheer && e.user.settings.cheer.badges && u.data.updateCheerPartnerSettings && u.data.updateCheerPartnerSettings.cheer && u.data.updateCheerPartnerSettings.cheer.badges) {
                                                    var t = u.data.updateCheerPartnerSettings.cheer.badges.tiers[n],
                                                        i = e.user.settings.cheer.badges.tiers[n];
                                                    t && t.badge && i && i.badge && (i.badge = a.__assign({}, i.badge, t.badge))
                                                }
                                                return e
                                            }), this.updateStagedImageURLs(), this.setState({
                                                saveStatus: N.b.Success
                                            }), [3, 4];
                                        case 3:
                                            return m.sent(), this.setState({
                                                saveStatus: N.b.Error
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
                        var l, d, c, m, g = this.tiers[t];
                        g.badge && g.badge.user && (l = i.createElement(u.z, {
                            onClick: this.onRevertButtonClick,
                            type: u.F.Hollow,
                            fullWidth: !0
                        }, Object(p.d)("Reset to Default Badge", "ChatBadgeUploadForm")), d = g.badge.image1x, c = g.badge.image2x, m = g.badge.image4x);
                        var h = n[g.threshold];
                        return h && (d = h.image1x || d, c = h.image2x || c, m = h.image4x || m), i.createElement(C.a, {
                            label: Object(p.d)("Upload Badge Images", "ChatBadgeUploadForm")
                        }, i.createElement(u.Ja, null, i.createElement(u.P, {
                            cols: {
                                default: 12,
                                sm: 5
                            }
                        }, i.createElement(u.xb, {
                            onChange: this.onSelectChange,
                            value: String(g.threshold)
                        }, this.tiers.map(function(e) {
                            return i.createElement("option", {
                                key: e.threshold,
                                value: e.threshold,
                                disabled: e.threshold < 1e3
                            }, " ", Object(p.d)("{threshold} Bit Badge", {
                                threshold: Object(p.f)(e.threshold)
                            }, "ChatBadgeUploadForm"))
                        })))), i.createElement(u.Ja, null, i.createElement(u.P, {
                            cols: {
                                default: 12,
                                sm: 8
                            }
                        }, i.createElement(u.Xa, {
                            display: u.X.Flex,
                            justifyContent: u.Wa.Between,
                            margin: {
                                y: 2
                            }
                        }, i.createElement(u.Xa, {
                            display: u.X.InlineFlex,
                            flexDirection: u.Aa.Column,
                            alignItems: u.f.Center
                        }, i.createElement(oe, {
                            onImageSubmit: this.onNormalImageSubmitted,
                            error: r
                        }, d ? i.createElement("img", {
                            src: d,
                            height: 18,
                            width: 18
                        }) : i.createElement(u.qb, {
                            asset: u.rb.Plus,
                            height: 32,
                            width: 32
                        })), i.createElement(u.W, {
                            color: r ? u.O.Error : u.O.Base
                        }, Object(p.d)("18 x 18px", "ChatBadgeUploadForm"))), i.createElement(u.Xa, {
                            display: u.X.InlineFlex,
                            flexDirection: u.Aa.Column,
                            alignItems: u.f.Center
                        }, i.createElement(oe, {
                            onImageSubmit: this.onDoubleImageSubmitted,
                            error: o
                        }, c ? i.createElement("img", {
                            src: c,
                            height: 36,
                            width: 36
                        }) : i.createElement(u.qb, {
                            asset: u.rb.Plus,
                            height: 32,
                            width: 32
                        })), i.createElement(u.W, {
                            color: o ? u.O.Error : u.O.Base
                        }, Object(p.d)("36 x 36px", "ChatBadgeUploadForm"))), i.createElement(u.Xa, {
                            display: u.X.InlineFlex,
                            flexDirection: u.Aa.Column,
                            alignItems: u.f.Center
                        }, i.createElement(oe, {
                            onImageSubmit: this.onQuadrupleImageSubmitted,
                            error: s
                        }, m ? i.createElement("img", {
                            src: m,
                            height: 72,
                            width: 72
                        }) : i.createElement(u.qb, {
                            asset: u.rb.Plus,
                            height: 32,
                            width: 32
                        })), i.createElement(u.W, {
                            color: s ? u.O.Error : u.O.Base
                        }, Object(p.d)("72 x 72px", "ChatBadgeUploadForm")))))), i.createElement(u.Ja, {
                            gutterSize: u.Ka.Medium
                        }, i.createElement(u.P, {
                            cols: 4
                        }, i.createElement(N.a, {
                            status: a,
                            onClick: this.onSaveButtonClick,
                            fullWidth: !0
                        }, Object(p.d)("Upload Badge Images", "ChatBadgeUploadFormSaveButton"))), i.createElement(u.P, {
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
                he = Object(v.compose)(Object(b.a)(de, {
                    options: function(e) {
                        return {
                            variables: {
                                login: e.channelName
                            }
                        }
                    }
                }), Object(b.a)(ce, {
                    name: "updateBadgeTierImages"
                }), Object(c.b)("ChatBadgeUploadForm"))(ge),
                be = n("BZvZ"),
                fe = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(t, e), t.prototype.componentDidMount = function() {
                        p.p.setPageTitle(Object(p.d)("Cheer Chat Badge Settings", "CheerBadgesSettingsPageTitle")), this.props.data.loading && !this.props.data.error || this.props.latencyTracking.reportInteractive()
                    }, t.prototype.componentDidUpdate = function(e) {
                        (e.data.loading && !this.props.data.loading || this.props.data.error) && this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        var e = this.props,
                            t = e.match,
                            n = e.data,
                            a = i.createElement(P.a, {
                                title: Object(p.d)("Cheer Chat Badge Settings", "CheerBadgesSettingsPage"),
                                description: Object(p.d)("Custom settings for Cheer chat badges", "CheerBadgesSettingsPage"),
                                linkToParent: "/" + t.params.channelName + "/dashboard/settings/revenue"
                            });
                        return i.createElement(I.a, {
                            header: a
                        }, i.createElement(ie, {
                            channelName: t.params.channelName
                        }), n.user && n.user.roles && n.user.roles.isPartner && i.createElement(he, {
                            channelName: t.params.channelName
                        }))
                    }, t
                }(i.Component),
                ve = Object(v.compose)(Object(c.b)("CheerBadgesSettingsPage", {
                    destination: y.a.DashboardSettingsRevenueCheerBadges
                }), Object(E.a)({
                    location: S.PageviewLocation.DashboardSettingsRevenueCheerBadges
                }), Object(b.a)(be, {
                    options: function(e) {
                        return {
                            variables: {
                                login: e.match.params.channelName
                            }
                        }
                    }
                }))(fe),
                Ee = n("G1cX"),
                ye = n("eDVu"),
                Se = n("WQCf"),
                ke = n("/aPz");
            ! function(e) {
                e.ALLTIME = "ALLTIME", e.MONTH = "MONTH", e.WEEK = "WEEK"
            }(se || (se = {}));
            var Ne, Te = n("TEIt"),
                Oe = n("7LUr"),
                Ce = function(e) {
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
                                            }, l = Ee(r.user.settings.cheer, function(e) {
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
                                            return a.trys.push([1, 3, , 4]), [4, i(Object(k.b)(s, d))];
                                        case 2:
                                            return c = a.sent(), Object(k.e)(Oe, {
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
                                            }, l = Ee(r.user.settings.cheer, function(e) {
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
                                            return a.trys.push([1, 3, , 4]), [4, i(Object(k.b)(s, d))];
                                        case 2:
                                            return c = a.sent(), Object(k.e)(Oe, {
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
                        return e.user && e.user.settings && e.user.settings.cheer && (t = e.user.settings.cheer.leaderboard.isEnabled, n = e.user.settings.cheer.leaderboard.timePeriod), i.createElement(I.a, null, i.createElement(C.a, {
                            label: Object(p.d)("Enable Top Cheerers", "PinnedCheerSettings")
                        }, i.createElement(u.N, {
                            label: Object(p.d)("Enable Top Cheerers", "PinnedCheerSettingsCheckBox"),
                            checked: t,
                            onChange: this.onLeaderboardEnabledCheckBoxClick,
                            "data-test-selector": "top-cheerers-checkbox-selector"
                        }), i.createElement(O.a, {
                            text: Object(p.d)("Pin Top Cheerers to the top of your chat.", "PinnedCheerSettings")
                        })), i.createElement(C.a, {
                            label: Object(p.d)("Top Cheerers Time Range", "PinnedCheerSettings")
                        }, i.createElement(u.Xa, null, i.createElement(u.nb, {
                            label: Object(p.d)("Weekly", "PinnedCheerSettings"),
                            value: se.WEEK,
                            checked: n === se.WEEK,
                            onChange: this.onLeaderboardTimePeriodRadioButtonClick
                        })), i.createElement(u.Xa, {
                            margin: {
                                y: 1
                            }
                        }, i.createElement(u.nb, {
                            label: Object(p.d)("Monthly", "PinnedCheerSettings"),
                            value: se.MONTH,
                            checked: n === se.MONTH,
                            onChange: this.onLeaderboardTimePeriodRadioButtonClick
                        })), i.createElement(u.Xa, {
                            margin: {
                                y: 1
                            }
                        }, i.createElement(u.nb, {
                            label: Object(p.d)("All-Time", "PinnedCheerSettings"),
                            value: se.ALLTIME,
                            checked: n === se.ALLTIME,
                            onChange: this.onLeaderboardTimePeriodRadioButtonClick
                        })), i.createElement(O.a, {
                            text: Object(p.d)("Choose Weekly for a leaderboard that automatically resets every Monday 12:01AM PT. Choose Monthly to reset every 1st day of the month. Choose All-Time for a leaderboard that tracks the Top Cheerers in your channel for all time, starting from when Bits launched in June of 2016.", "PinnedCheerSettings")
                        })))
                    }, t
                }(i.Component),
                Pe = Object(v.compose)(Object(b.a)(Oe, {
                    options: function(e) {
                        return {
                            variables: {
                                login: e.channelName
                            }
                        }
                    }
                }), Object(b.a)(Te, {
                    name: "setPinnedCheerSettings"
                }), Object(c.b)("PinnedCheerSettingsForm"), Object(ye.a)(function(e) {
                    return {
                        query: Oe,
                        variables: {
                            login: e.channelName
                        },
                        topic: e.data && e.data.user && e.data.user.id ? Object(ke.d)(e.data.user.id) : "",
                        type: Se.c.BitsChannelSettingsEvent,
                        skip: !e.data.user || !e.data.user.id,
                        mutator: function(e, t) {
                            var n = e.updates;
                            return t.user && t.user.settings && t.user.settings.cheer && (void 0 !== n.leaderboard_enabled && (t.user.settings.cheer.leaderboard.isEnabled = n.leaderboard_enabled), void 0 !== n.leaderboard_time_period && (t.user.settings.cheer.leaderboard.timePeriod = se[n.leaderboard_time_period])), t
                        }
                    }
                }))(Ce),
                Ae = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(t, e), t.prototype.componentDidMount = function() {
                        p.p.setPageTitle(Object(p.d)("Pinned and Top Cheers Settings", "CheerSettingsPageTitle"))
                    }, t.prototype.render = function() {
                        var e = this.props.match;
                        return i.createElement(u.Xa, null, i.createElement(P.a, {
                            title: Object(p.d)("Top Cheerers Settings", "CheerSettingsPage"),
                            description: Object(p.d)("Custom settings for Top Cheerers", "CheerSettingsPage"),
                            linkToParent: "/" + e.params.channelName + "/dashboard/settings/revenue"
                        }), i.createElement(Pe, {
                            channelName: e.params.channelName
                        }))
                    }, t
                }(i.Component),
                Ie = Object(v.compose)(Object(c.b)("CheerSettingsPage", {
                    autoReportInteractive: !0,
                    destination: y.a.DashboardSettingsRevenueCheer
                }), Object(E.a)({
                    location: S.PageviewLocation.DashboardSettingsRevenueCheer
                }))(Ae),
                _e = n("Cusz"),
                we = n("Akna"),
                Re = (n("Nz9P"), function(e) {
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
                                            }, l = Object(k.a)(s), a.label = 1;
                                        case 1:
                                            return a.trys.push([1, 3, , 4]), [4, i(l)];
                                        case 2:
                                            return d = a.sent(), Object(k.e)(we, {
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
                            a = i.createElement(u.gb, {
                                width: 100,
                                height: 18
                            });
                        !e.loading && !e.error && e.user && e.user.settings && e.user.settings.cheer && (n = e.user.settings.cheer.customPrefix.isEnabled, a = i.createElement(u.W, {
                            bold: !0
                        }, e.user.settings.cheer.customPrefix.prefix));
                        var r = this.tiers.map(function(e, t) {
                                var n = e.images[0];
                                return i.createElement(u.Bb, {
                                    key: n ? n.id : t,
                                    background: u.r.Alt2,
                                    border: !0,
                                    className: "cheermote-enable-form__cheermote-preview",
                                    margin: {
                                        right: 4 === t ? 0 : 1
                                    },
                                    display: u.X.InlineFlex
                                }, i.createElement("img", {
                                    src: n ? n.url : ""
                                }))
                            }),
                            o = this.tiers.filter(function(e) {
                                return e.images && e.images[0] && e.images[0].url
                            }).length;
                        return i.createElement(C.a, {
                            label: Object(p.d)("Enable Cheermotes", "CheermtoesEnableForm")
                        }, i.createElement(u.Tb, {
                            checked: n,
                            onChange: this.onItemToggle,
                            error: t
                        }), i.createElement(u.Xa, {
                            margin: {
                                top: .5
                            }
                        }, i.createElement(u.W, {
                            color: u.O.Alt2
                        }, Object(p.d)("Upload images for all tiers to enable your Cheermote.", "CheermotesEnableForm"))), i.createElement(u.Xa, {
                            padding: {
                                y: 2
                            }
                        }, i.createElement(u.W, {
                            color: u.O.Alt2
                        }, Object(p.d)("Cheermote Code", "CheermotesEnableForm")), a), i.createElement(u.Xa, null, i.createElement(u.W, {
                            type: u.Rb.Span,
                            color: u.O.Alt2
                        }, Object(p.d)("Tiers", "CheermotesEnableForm")), " ", i.createElement(u.W, {
                            type: u.Rb.Span,
                            color: 5 === o ? u.O.Base : u.O.Error
                        }, Object(p.d)("{tierNum}/{totalTiers}", {
                            tierNum: o,
                            totalTiers: 5
                        }, "CheermotesEnableForm")), i.createElement(u.Ja, null, i.createElement(u.P, {
                            cols: 4
                        }, i.createElement(u.Xa, {
                            margin: {
                                top: .5
                            },
                            display: u.X.Flex,
                            justifyContent: u.Wa.Between
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
                De = Object(o.compose)(Object(b.a)(we, {
                    name: "data",
                    options: function(e) {
                        return {
                            variables: {
                                login: e.channelName
                            }
                        }
                    }
                }), Object(b.a)(_e, {
                    name: "setCheermotesEnable"
                }), Object(c.b)("CheermotesEnableForm"))(Re),
                xe = (n("4VZt"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onFilesSubmitted = function(e) {
                            var n = e[0];
                            t.props.onImageSubmit && t.props.onImageSubmit(n, t.props.dpiScale)
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        var e = this.props.children;
                        return i.createElement(u.Xa, {
                            className: "cheermote-upload-drop-zone",
                            display: u.X.Flex,
                            flexDirection: u.Aa.Column
                        }, i.createElement(u.Bb, {
                            className: "cheermote-upload-drop-zone__drop-zone",
                            position: u.hb.Relative,
                            padding: 5,
                            background: u.r.Alt
                        }, i.createElement(M.a, {
                            allowedFileTypes: [".png", ".gif"],
                            onFilesSubmitted: this.onFilesSubmitted,
                            error: this.props.error
                        }, i.createElement(u.Bb, {
                            position: u.hb.Absolute,
                            attachTop: !0,
                            attachLeft: !0,
                            fullWidth: !0,
                            fullHeight: !0,
                            display: u.X.Flex,
                            flexDirection: u.Aa.Column,
                            alignItems: u.f.Center,
                            justifyContent: u.Wa.Center
                        }, e))), i.createElement(u.Xa, {
                            textAlign: u.Nb.Center,
                            padding: {
                                top: 1
                            }
                        }, i.createElement(u.W, null, Object(p.d)("{dimension} x {dimension}px", {
                            dimension: this.props.dimension
                        }, "CheermoteUploadDropZone"))))
                    }, t
                }(i.Component));

            function Fe(e, t) {
                return a.__awaiter(this, void 0, Promise, function() {
                    var n;
                    return a.__generator(this, function(a) {
                        switch (a.label) {
                            case 0:
                                return [4, j.a.post("/v5/channels/" + e + "/bits/customcheermotes", {
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
            var je, Ue, Le, Me = ((Ne = {})[1] = 28, Ne[1.5] = 42, Ne[2] = 56, Ne[3] = 84, Ne[4] = 112, Ne),
                Be = function(e) {
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
                                            return a.trys.push([1, 3, , 4]), [4, Fe(this.props.channelID, t)];
                                        case 2:
                                            return i = a.sent(), this.props.onImageSubmitted(this.props.tier, e, i, Me[n]), [3, 4];
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
                                var a = Me[n.dpiScale];
                                return i.createElement(u.Xa, {
                                    key: n.dpiScale,
                                    padding: {
                                        bottom: 1
                                    }
                                }, i.createElement(xe, {
                                    onImageSubmit: e.onImageSubmitted,
                                    dimension: a,
                                    dpiScale: n.dpiScale,
                                    error: !!e.props.uploadError && !!t && a === t
                                }, n.url ? i.createElement("img", {
                                    src: n.url,
                                    height: a,
                                    width: a
                                }) : i.createElement(u.qb, {
                                    asset: u.rb.Plus,
                                    height: 32,
                                    width: 32
                                })))
                            });
                        return i.createElement(u.Xa, {
                            justifyContent: u.Wa.Between,
                            display: u.X.Flex,
                            flexDirection: u.Aa.Row,
                            flexWrap: u.Ba.Wrap
                        }, n)
                    }, t
                }(i.PureComponent),
                Xe = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        return this.props.imageSrc && i.createElement(u.Bb, {
                            background: u.r.Alt,
                            display: u.X.Flex,
                            alignItems: u.f.Center,
                            padding: 1
                        }, i.createElement("img", {
                            src: this.props.imageSrc,
                            height: 28,
                            width: 28
                        }), i.createElement(u.Xa, {
                            padding: {
                                left: 1
                            }
                        }, i.createElement(u.W, null, Object(p.d)("This is a preview of a chat message with your Cheermote!", "CheermotePreviewBar"))))
                    }, t
                }(i.PureComponent),
                We = (n("EACF"), function(e) {
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
                                            return a.trys.push([1, 3, , 4]), [4, Fe(this.props.channelID, t)];
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
                        return i.createElement(xe, {
                            onImageSubmit: this.onImageSubmitted,
                            dimension: 112,
                            error: !!this.props.uploadError
                        }, this.props.image ? i.createElement("img", {
                            src: this.props.image,
                            height: 112,
                            width: 112
                        }) : i.createElement(u.qb, {
                            asset: u.rb.Plus,
                            height: 32,
                            width: 32
                        }))
                    }, t
                }(i.PureComponent)),
                Ve = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        return i.createElement(u.ub, null, i.createElement(u.vb, {
                            name: this.props.name,
                            value: this.props.left,
                            checked: this.props.selected === this.props.left,
                            label: this.props.leftTitle,
                            onChange: this.props.onToggle,
                            defaultChecked: !0
                        }), i.createElement(u.vb, {
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
            }(je || (je = {})),
            function(e) {
                e.Light = "light", e.Dark = "dark"
            }(Ue || (Ue = {})),
            function(e) {
                e.Animated = "animated", e.Static = "static"
            }(Le || (Le = {}));
            var ze = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        uploadType: je.Simple,
                        background: Ue.Light,
                        animation: Le.Animated,
                        uploading: !1
                    }, t.onUploadTypeChange = function(e) {
                        var n = e.currentTarget.value,
                            a = Le.Animated;
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
                        t.uploadImageProgress(e, n, a, je.Simple, i, function(e, n) {
                            t.props.onSimpleImageSubmitted(e, n)
                        })
                    }, t.onAdvancedImageUpload = function(e, n, a, i) {
                        t.uploadImageProgress(e, n, a, je.Advanced, i, function(e, n) {
                            t.props.onAdvancedImageSubmitted(e, n[0])
                        })
                    }, t.uploadImageProgress = function(e, n, i, r, o, s) {
                        t.unsubscribe = p.l.subscribe({
                            topic: Object(ke.A)(i.uploadID),
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
                                            case B.a.COMPLETE:
                                                s(e, i.imageURLs), this.setState({
                                                    uploading: !1
                                                }), this.unsubscribe && this.unsubscribe();
                                                break;
                                            case B.a.POSTPROCESS_COMPLETE:
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
                            case B.a.FILE_SIZE_VALIDATION_FAILED:
                                i = Object(p.d)("Please make sure you file is under 500kb", "CheermoteUploadArea");
                                break;
                            case B.a.IMAGE_FORMAT_VALIDATION_FAILED:
                                i = Object(p.d)("Please make sure your image is the correct format for uploading", "CheermoteUploadArea");
                                break;
                            case B.a.HEIGHT_VALIDATION_FAILED:
                            case B.a.WIDTH_VALIDATION_FAILED:
                                i = Object(p.d)("Image must be {d} x {d}px", {
                                    d: a
                                }, "CheermoteUploadArea");
                                break;
                            case B.a.ASPECT_RATIO_VALIDATION_FAILED:
                                i = Object(p.d)("Please ensure your image has the correct aspect ratio for the dimension you are uploading", "CheermoteUploadArea");
                                break;
                            case B.a.FEATURE_SERVICE_FAILED:
                                i = Object(p.d)("Failed to save new images. Please try again.", "CheermoteUploadArea");
                                break;
                            default:
                                i = Object(p.d)("Something went wrong. Please try again", "CheermoteUploadArea")
                        }
                        t.setState({
                            simpleLoadingError: n === je.Simple ? i : void 0,
                            advancedLoadingError: n === je.Advanced ? i : void 0,
                            errorDimension: a
                        })
                    }, t.onCreateUploadRequestError = function(e, n) {
                        var a = Object(p.d)("An error occurred while creating upload request: {errorMsg}", {
                            errorMsg: n.message
                        }, "CheermoteUploadArea");
                        t.setState({
                            simpleLoadingError: e === je.Simple ? a : void 0,
                            advancedLoadingError: e === je.Advanced ? a : void 0
                        })
                    }, t
                }
                return a.__extends(t, e), t.prototype.componentWillUnmount = function() {
                    void 0 !== this.unsubscribe && this.unsubscribe()
                }, t.prototype.render = function() {
                    var e = this;
                    if (!this.props.uploadTier) return i.createElement(u.gb, null);
                    var t = [],
                        n = (t = this.props.uploadTier.images.filter(function(t) {
                            return (t.isAnimated && e.state.animation === Le.Animated || !t.isAnimated && e.state.animation === Le.Static) && t.theme.toLowerCase() === e.state.background
                        }).slice().sort(function(e, t) {
                            return t.dpiScale - e.dpiScale
                        })).find(function(e) {
                            return 4 === e.dpiScale
                        });
                    return i.createElement(u.Xa, {
                        className: "cheermote-upload-area"
                    }, i.createElement(u.Xa, {
                        display: u.X.Flex,
                        flexDirection: u.Aa.Column
                    }, i.createElement(u.Xa, {
                        display: u.X.Flex
                    }, i.createElement(Ve, {
                        name: "cheermote-upload-wizard-type",
                        selected: this.state.uploadType,
                        left: je.Simple,
                        leftTitle: Object(p.d)("Simple", "CheermoteUploadArea"),
                        right: je.Advanced,
                        rightTitle: Object(p.d)("Advanced", "CheermoteUploadArea"),
                        onToggle: this.onUploadTypeChange
                    }), this.state.uploadType === je.Advanced && i.createElement(u.Xa, {
                        padding: {
                            x: 2
                        }
                    }, i.createElement(Ve, {
                        name: "cheermote-background",
                        selected: this.state.background,
                        left: Ue.Light,
                        leftTitle: Object(p.d)("Light", "CheermoteUploadArea"),
                        right: Ue.Dark,
                        rightTitle: Object(p.d)("Dark", "CheermoteUploadArea"),
                        onToggle: this.onBackgroundChange
                    })), this.state.uploadType === je.Advanced && i.createElement(Ve, {
                        name: "cheermote-animation",
                        selected: this.state.animation,
                        left: Le.Animated,
                        leftTitle: Object(p.d)("Animated", "CheermoteUploadArea"),
                        right: Le.Static,
                        rightTitle: Object(p.d)("Static", "CheermoteUploadArea"),
                        onToggle: this.onAnimationChange
                    })), i.createElement(u.Xa, {
                        padding: {
                            top: 2
                        }
                    }, this.state.uploadType === je.Simple && i.createElement(We, {
                        channelID: this.props.channelID,
                        tier: this.props.uploadTier.bits,
                        image: n && n.url,
                        onImageSubmitted: this.onSimpleImageSubmitted,
                        onImageSubmissionError: this.onCreateUploadRequestError,
                        uploadError: this.state.simpleLoadingError
                    }), this.state.uploadType === je.Advanced && i.createElement(Be, {
                        channelID: this.props.channelID,
                        images: t,
                        tier: this.props.uploadTier.bits,
                        background: this.state.background,
                        animationType: this.state.animation,
                        onImageSubmitted: this.onAdvancedImageUpload,
                        onImageSubmissionError: this.onCreateUploadRequestError,
                        uploadError: this.state.advancedLoadingError,
                        errorDimension: this.state.errorDimension
                    })), this.state.uploadType === je.Simple && this.state.simpleLoadingError && i.createElement(u.Bb, {
                        display: u.X.Flex,
                        alignItems: u.f.Center,
                        background: u.r.Alt,
                        padding: 1,
                        margin: {
                            top: 1
                        }
                    }, i.createElement(u.W, {
                        color: u.O.Error
                    }, this.state.simpleLoadingError)), this.state.uploadType === je.Advanced && this.state.advancedLoadingError && t.length && i.createElement(u.Bb, {
                        display: u.X.Flex,
                        alignItems: u.f.Center,
                        background: u.r.Alt,
                        padding: 1,
                        margin: {
                            top: 1
                        }
                    }, i.createElement(u.W, {
                        color: u.O.Error
                    }, this.state.advancedLoadingError)), n && i.createElement(u.Xa, {
                        padding: {
                            top: 2
                        }
                    }, i.createElement(Xe, {
                        imageSrc: n.url
                    }))), this.state.uploading && i.createElement(u.Bb, {
                        className: "cheermote-upload-area__uploading",
                        display: u.X.Flex,
                        flexDirection: u.Aa.Column,
                        alignItems: u.f.Center,
                        justifyContent: u.Wa.Center,
                        position: u.hb.Absolute,
                        attachTop: !0,
                        attachLeft: !0,
                        fullWidth: !0,
                        fullHeight: !0
                    }, i.createElement(u.Za, null), i.createElement(u.Xa, {
                        padding: {
                            top: 2
                        }
                    }, i.createElement(u.W, null, Object(p.d)("Uploading...", "CheermoteUploadArea")))))
                }, t
            }(i.PureComponent);

            function qe(e, t, n) {
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
            var Ge = n("PE/S"),
                Ye = (n("ygYl"), function(e) {
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
                            Object(k.e)(Ge, {
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
                                                return qe(e, t)
                                            }).concat(t.map(function(t) {
                                                return qe(e, t, "dark")
                                            }))
                                        }(i, n))
                                    }
                                    return t
                                }
                            })
                        }, t.onAdvancedImageSubmitted = function(e, n) {
                            Object(k.e)(Ge, {
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
                                            var o = qe(i, n),
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
                        if (!this.props.data || this.props.data.loading) return i.createElement(u.Xa, {
                            className: "cheermote-upload-form__loading",
                            fullWidth: !0
                        }, i.createElement(u.Za, {
                            fillContent: !0
                        }));
                        if (this.props.data && this.props.data.error || !this.props.data.user) return i.createElement(u.Xa, {
                            className: "cheermote-upload-form__error",
                            fullWidth: !0,
                            justifyContent: u.Wa.Center,
                            textAlign: u.Nb.Center,
                            alignItems: u.f.Center
                        }, i.createElement(u.W, null, Object(p.d)("An unexpected error occurred while loading the upload wizard", "CheermotesUploadForm")));
                        var t = this.tiers.map(function(t) {
                                return i.createElement(u.Cb, {
                                    key: t.id,
                                    active: e.state.activeTab === t.bits,
                                    onClick: e.onTabSelect,
                                    "data-tab-target": t.bits
                                }, t.bits)
                            }),
                            n = this.tiers.find(function(t) {
                                return t.bits === e.state.activeTab
                            });
                        return i.createElement(C.a, {
                            label: Object(p.d)("Upload Cheermote Images", "CheermotesUploadForm")
                        }, i.createElement(u.Xa, {
                            padding: {
                                bottom: 2
                            }
                        }, i.createElement(u.W, null, Object(p.d)('Please upload a 112 x 112px GIF image with a transparent background. Your image will be automatically scaled to smaller sizes. To fine-ture smaller sizes and light/dark mode, turn on "Advanced" option below. (The maximum file size is 500kb)', "CheermotesUploadForm"))), i.createElement(u.Db, null, t), i.createElement(u.Xa, {
                            padding: {
                                top: 2
                            }
                        }, i.createElement(ze, {
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
                He = Object(o.compose)(Object(b.a)(Ge, {
                    options: function(e) {
                        return {
                            variables: {
                                login: e.channelName
                            }
                        }
                    }
                }), Object(c.b)("CheermotesUploadForm"))(Ye),
                Qe = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(t, e), t.prototype.componentDidMount = function() {
                        p.p.setPageTitle(Object(p.d)("Cheermote Settings", "CheermotesSettingsPageTitle"))
                    }, t.prototype.render = function() {
                        var e = this.props.match,
                            t = i.createElement(P.a, {
                                title: Object(p.d)("Custom Cheermote", "CheermotesSettingsPage"),
                                description: Object(p.d)("Custom Cheermote that viewers can use when Cheering in your channel", "CheermotesSettingsPage"),
                                linkToParent: "/" + e.params.channelName + "/dashboard/settings/revenue"
                            });
                        return i.createElement(I.a, {
                            header: t
                        }, i.createElement(De, {
                            channelName: e.params.channelName
                        }), i.createElement(He, {
                            channelName: e.params.channelName
                        }))
                    }, t
                }(i.Component),
                $e = Object(v.compose)(Object(c.b)("CheermotesSettingsPage", {
                    autoReportInteractive: !0,
                    destination: y.a.DashboardSettingsRevenueCheermotes
                }), Object(E.a)({
                    location: S.PageviewLocation.DashboardSettingsRevenueCheermotes
                }))(Qe),
                Ze = n("/MKj"),
                Ke = n("aCAx"),
                Je = n("dWDG"),
                et = (n("QtTb"), "GAME_COMMERCE"),
                tt = function(e) {
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
                        return !this.props.data || this.props.data.loading ? null : i.createElement(C.a, {
                            orientation: u.Fa.Horizontal,
                            label: Object(p.d)("Opt in to earn revenue", "CommerceAmendment")
                        }, i.createElement("div", {
                            onClick: this.onAmendmentClick,
                            "data-test-selector": "commerce-amendment-checkbox-wrapper",
                            className: "commerce-amendment__amendment"
                        }, i.createElement(u.N, {
                            "data-test-selector": "commerce-amendment-checkbox",
                            checked: this.state.amendmentAccepted,
                            disabled: !0,
                            id: "commerce-amendment",
                            label: Object(p.d)("Opt in to earn revenue from game sales on Twitch", "CommerceAmendment")
                        })), i.createElement(u.W, null, Object(p.d)("Please read and agree to the following Commerce Addendum to become eligible for this program.", "CommerceAmendment")))
                    }, t = a.__decorate([Object(b.a)(Je, {
                        options: function(e) {
                            return {
                                variables: {
                                    login: e.channelName,
                                    amendmentType: et
                                }
                            }
                        }
                    })], t)
                }(i.PureComponent),
                nt = n("REKr"),
                at = "amendment-modal-accept-button",
                it = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            hasUserScrolled: !1
                        }, t.onUserScroll = function() {
                            t.setState({
                                hasUserScrolled: !0
                            })
                        }, t.renderAcceptButton = function(e) {
                            return e ? null : i.createElement(u.Xa, {
                                margin: {
                                    left: .5,
                                    right: .5
                                }
                            }, i.createElement(u.z, {
                                "data-test-selector": at,
                                type: u.F.Text,
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
                                            return e.trys.push([1, , 3, 4]), [4, this.props.setAmendmentAcceptance(Object(k.a)(et))];
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
                        return i.createElement(u.Xa, {
                            padding: 3
                        }, i.createElement(u.Bb, {
                            padding: {
                                bottom: 3
                            },
                            borderBottom: !0,
                            textAlign: u.Nb.Center
                        }, i.createElement(u.W, {
                            type: u.Rb.H4
                        }, Object(p.d)("Addendum to Content Partner Agreement – Commerce Addendum", "CommerceAmendmentModal"))), i.createElement(u.Xa, {
                            padding: {
                                top: 2,
                                bottom: 2
                            },
                            textAlign: u.Nb.Center
                        }, i.createElement(u.W, {
                            fontSize: u.Ca.Size5
                        }, Object(p.d)('Please read and agree to the following addendum ("Addendum") to your Content License and Base Agreement (or Content License Agreement, as applicable) (the "Agreement") with Twitch in order to be eligible to earn revenue for certain purchases by a Twitch user that is viewing your Twitch channel.', "CommerceAmendmentModal"))), i.createElement(u.Bb, {
                            borderTop: !0,
                            borderRight: !0,
                            borderBottom: !0,
                            borderLeft: !0,
                            padding: 2
                        }, i.createElement("div", {
                            onScroll: this.onUserScroll,
                            className: "amendment-modal__amendment-text",
                            "data-test-selector": "amendment-modal-text-container"
                        }, i.createElement(u.W, null, 'Twitch, in its sole discretion, may make specially-formatted links appear on your Twitch channel page (a "', i.createElement(u.W, {
                            type: u.Rb.Span,
                            bold: !0
                        }, "Special Link"), '"), which would direct Twitch users to the purchase of a software application, video game, in-game item or other digital product (a "', i.createElement(u.W, {
                            type: u.Rb.Span,
                            bold: !0
                        }, "Product"), '") from Twitch. For every such purchase of a Product that is a Qualifying Purchase (as defined below), you will receive a fee (a "', i.createElement(u.W, {
                            type: u.Rb.Span,
                            bold: !0
                        }, "Product Purchase Fee"), '") that will be equal to five percent (5%) of (a) the purchase price of such Product, as such price was listed by Twitch at the time of the Qualifying Purchase and in the currency in which the Qualifying Purchase was made, less (b) any special discounts or promotions, taxes, service charges, rebates, payment processing fees (e.g. credit card processing fees) and any other related transaction and processing expenses.'), i.createElement(u.W, null, 'A "', i.createElement("strong", null, "Qualifying Purchase"), '" of a Product occurs when: (a) a user of Twitch clicks through a Special Link on your Twitch channel page; (b) such user purchases a Product(s); and (c) Twitch receives a fully settled payment for the purchase by such user.'), i.createElement(u.W, null, "If we pay you a Product Purchase Fee and later issue a refund or credit to the Twitch user for such Qualifying Purchase (or receive a chargeback related to the Qualifying Purchase), we may offset the amount of the Product Purchase Fee we previously paid you for such Qualifying Purchase against future Product Purchase Fees or other amounts that would otherwise be payable to you under the Agreement or this Addendum, or require you to remit that amount to us."), i.createElement(u.W, null, "This Addendum is governed by and subject to the Agreement. Capitalized terms used but not defined in this Addendum will have the meanings defined in the Agreement. Except as amended by this Addendum, all other terms and conditions of the Agreement remain in full force and effect."))), i.createElement(u.Xa, {
                            padding: {
                                top: 2,
                                bottom: 2
                            }
                        }, i.createElement(u.W, {
                            fontSize: u.Ca.Size4
                        }, Object(p.d)("Summary", "CommerceAmendmentModal")), i.createElement(u.W, null, Object(p.d)("By accepting below, you may earn revenue for certain purchases by your viewers as described above.", "CommerceAmendmentModal"))), i.createElement(u.Bb, {
                            borderTop: !0,
                            display: u.X.Flex,
                            flexDirection: u.Aa.Row,
                            alignItems: u.f.Center,
                            justifyContent: u.Wa.Center,
                            padding: {
                                top: 2,
                                bottom: 1
                            }
                        }, i.createElement(u.Xa, {
                            margin: {
                                left: .5,
                                right: .5
                            }
                        }, i.createElement(u.z, {
                            "data-test-selector": "amendment-modal-cancel-button",
                            type: u.F.Text,
                            onClick: this.onClose
                        }, Object(p.d)("Cancel", "CommerceAmendmentModal"))), this.renderAcceptButton(this.props.amendmentAccepted)))
                    }, t
                }(i.PureComponent),
                rt = Object(b.a)(nt, {
                    name: "setAmendmentAcceptance"
                })(it),
                ot = (n("Ys4A"), function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        return i.createElement(u.Bb, {
                            className: "amendment-modal__container",
                            background: u.r.Base
                        }, i.createElement(rt, {
                            "data-test-selector": "amendment-modal-selector",
                            onClose: this.props.closeModal,
                            amendmentAccepted: this.props.amendmentAccepted
                        }))
                    }, t
                }(i.Component));
            var st = Object(Ze.connect)(null, function(e) {
                return Object(v.bindActionCreators)({
                    closeModal: Ke.c
                }, e)
            })(ot);
            var lt, dt = Object(Ze.connect)(null, function(e) {
                    return Object(v.bindActionCreators)({
                        showAmendmentModal: function(e) {
                            var t = a.__rest(e, []);
                            return Object(Ke.d)(st, t)
                        }
                    }, e)
                })(tt),
                ct = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(t, e), t.prototype.componentDidMount = function() {
                        p.p.setPageTitle(Object(p.d)("Game sales via Twitch", "CommerceAmendmentTitle"))
                    }, t.prototype.render = function() {
                        var e = this.props.match.params.channelName,
                            t = i.createElement(P.a, {
                                title: Object(p.d)("Game sales via Twitch", "CommerceAmendment"),
                                linkToParent: "/" + this.props.match.params.channelName + "/dashboard/settings/revenue"
                            });
                        return i.createElement(I.a, {
                            header: t
                        }, i.createElement(dt, {
                            channelName: e
                        }))
                    }, t
                }(i.PureComponent),
                ut = Object(v.compose)(Object(c.b)("CommerceAmendmentPage", {
                    autoReportInteractive: !0,
                    destination: y.a.DashboardSettingsRevenueGameCommerce
                }), Object(E.a)({
                    location: S.PageviewLocation.DashboardSettingsRevenueGameCommerce
                }))(ct),
                mt = n("kRBY"),
                pt = n("5g1g"),
                gt = n("mAXC"),
                ht = n("c0Zc"),
                bt = function(e) {
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
                        return e = this.props.isOptedIn ? Object(p.d)("Your community will get bonus Bits when they use the {brandName} Cheermote.", {
                            brandName: this.props.brandName
                        }, "BitsSponsoredCheermoteSetting") : Object(p.d)("Your community cannot use the {brandName} Cheermote. Opt in to active the Cheermote and bonus Bits!", {
                            brandName: this.props.brandName
                        }, "BitsSponsoredCheermoteSetting"), i.createElement(u.Xa, {
                            display: u.X.Flex,
                            flexDirection: u.Aa.Column
                        }, i.createElement(u.Xa, {
                            display: u.X.Flex,
                            justifyContent: u.Wa.Between,
                            alignItems: u.f.Center
                        }, i.createElement(u.Xa, {
                            display: u.X.Flex,
                            alignItems: u.f.Center
                        }, i.createElement(u.S, {
                            src: this.props.imageURL,
                            alt: this.props.brandName
                        }), i.createElement(u.Pa, {
                            padding: {
                                left: 2
                            }
                        }, i.createElement(u.W, null, this.props.brandName))), i.createElement(u.Tb, {
                            checked: this.props.isOptedIn,
                            onChange: this.onToggle
                        })), i.createElement(u.Pa, {
                            padding: {
                                top: 1
                            }
                        }, i.createElement(u.W, null, e)))
                    }, t
                }(i.PureComponent),
                ft = n("9wGn"),
                vt = n("l5J2"),
                Et = function(e) {
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
                                            }, o = Object(k.b)(t, r), s.label = 1;
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
                        if (!this.props.data || this.props.data.loading) return i.createElement(u.Za, null);
                        if (!(this.props.data && this.props.data.user && this.props.data.user.id && this.props.data.user.settings && this.props.data.user.settings.cheer && this.props.data.user.settings.cheer.sponsoredCheermotes && this.props.data.user.settings.cheer.sponsoredCheermotes.campaigns)) return null;
                        var t = this.props.data.user.settings.cheer.sponsoredCheermotes.campaigns.edges.map(function(t) {
                            return i.createElement(bt, {
                                key: t.cursor,
                                campaignID: t.node.id,
                                isOptedIn: t.node.isOptedIn,
                                brandName: t.node.brandName,
                                imageURL: t.node.brandImageURL,
                                onToggle: e.onCampaignStatusToggle
                            })
                        });
                        return i.createElement(C.a, {
                            label: Object(p.d)("Cheermote Campaigns", "BitsSponsoredCheermoteSettingsForm"),
                            error: this.state.sponsoredCheermoteFormError
                        }, i.createElement(u.Ja, null, i.createElement(u.P, {
                            cols: {
                                default: 12,
                                sm: 8
                            }
                        }, t)))
                    }, t
                }(i.Component),
                yt = Object(o.compose)(Object(b.a)(ft, {
                    options: function(e) {
                        return {
                            variables: {
                                channelLogin: e.channelLogin
                            }
                        }
                    }
                }), Object(b.a)(vt, {
                    name: "updateSponsoredCheerCampaignStatus"
                }))(Et),
                St = n("BLPV"),
                kt = n("wGZM"),
                Nt = n("98xD"),
                Tt = n("qqE+"),
                Ot = 1,
                Ct = 1e4,
                Pt = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        n.state = {
                            minBitsToCheerSaveStatus: St.b.NoChanges,
                            minBitsPerEmoteSaveStatus: St.b.NoChanges,
                            minBitsToCheerError: !1,
                            minBitsPerEmoteError: !1
                        }, n.onMinBitsToCheerInputChange = function(e) {
                            var t = n.state,
                                a = t.minBitsPerEmote,
                                i = t.minBitsPerEmoteSaveStatus,
                                r = Math.min(parseInt(e.currentTarget.value, 10), Ct),
                                o = St.b.DirtyChanges,
                                s = i,
                                l = !1;
                            (!r || !a || r < Ot || a && r < a) && (o = St.b.NoChanges, s = St.b.NoChanges), a && r < a && (l = !0), n.setState({
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
                                r = Math.min(parseInt(e.currentTarget.value, 10), Ct),
                                o = i,
                                s = St.b.DirtyChanges,
                                l = !1;
                            (!r || !a || r < Ot || a && a < r) && (o = St.b.NoChanges, s = St.b.NoChanges), a && a < r && (l = !0), n.setState({
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
                                                minBitsToCheerSaveStatus: St.b.Working
                                            }), o = {
                                                userID: i.user.id,
                                                chatMessage: {
                                                    minBitsToCheer: e
                                                }
                                            }, a.label = 1;
                                        case 1:
                                            return a.trys.push([1, 3, , 4]), [4, n(Object(k.a)(o))];
                                        case 2:
                                            return s = a.sent(), Object(k.e)(kt, {
                                                login: r
                                            }, function(e) {
                                                return e.user && e.user.settings && e.user.settings.cheer && s.data.updateCheerPartnerSettings && (e.user.settings.cheer.chatMessage.minBitsToCheer = s.data.updateCheerPartnerSettings.cheer.chatMessage.minBitsToCheer), e
                                            }), this.setState({
                                                minBitsToCheerSaveStatus: St.b.Success
                                            }), [3, 4];
                                        case 3:
                                            return a.sent(), this.setState({
                                                minBitsToCheerSaveStatus: St.b.Error
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
                                                minBitsPerEmoteSaveStatus: St.b.Working
                                            }), o = {
                                                userID: i.user.id,
                                                chatMessage: {
                                                    minBitsPerEmote: e
                                                }
                                            }, a.label = 1;
                                        case 1:
                                            return a.trys.push([1, 3, , 4]), [4, n(Object(k.a)(o))];
                                        case 2:
                                            return s = a.sent(), Object(k.e)(kt, {
                                                login: r
                                            }, function(e) {
                                                return e.user && e.user.settings && e.user.settings.cheer && s.data.updateCheerPartnerSettings && (e.user.settings.cheer.chatMessage.minBitsPerEmote = s.data.updateCheerPartnerSettings.cheer.chatMessage.minBitsPerEmote), e
                                            }), this.setState({
                                                minBitsPerEmoteSaveStatus: St.b.Success
                                            }), [3, 4];
                                        case 3:
                                            return a.sent(), this.setState({
                                                minBitsPerEmoteSaveStatus: St.b.Error
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
                        return i.createElement(i.Fragment, null, i.createElement(C.a, {
                            label: Object(p.d)("Minimum Bits to Cheer", "CheerSettingsPage"),
                            error: n,
                            errorMessage: Object(p.d)("Minimum Bit to Cheer must be greater than or equal to Minimum Bit Emote", "CheerSettingsPage"),
                            "data-test-selector": "cheer-minimum-bits-form"
                        }, i.createElement(u.Ja, null, i.createElement(u.P, {
                            cols: {
                                default: 12,
                                sm: 8
                            }
                        }, i.createElement(u.Xa, {
                            display: u.X.Flex
                        }, i.createElement(u.Xa, {
                            flexGrow: 1,
                            margin: {
                                right: 1
                            }
                        }, i.createElement(u.Ra, {
                            type: u.Ta.Number,
                            min: Ot,
                            max: Ct,
                            value: isNaN(t) ? "" : String(t),
                            onChange: this.onMinBitsToCheerInputChange,
                            "data-test-selector": "cheer-minimum-bits-input"
                        })), i.createElement(St.a, {
                            status: o,
                            onClick: this.onMinBitsToCheerSave,
                            "data-test-selector": "cheer-minimum-bits-save-button"
                        })))), i.createElement(u.Ja, null, i.createElement(u.P, {
                            cols: {
                                default: 12,
                                sm: 8
                            }
                        }, i.createElement(O.a, {
                            text: i.createElement(i.Fragment, null, i.createElement(u.Xa, {
                                display: u.X.Inline,
                                margin: {
                                    right: .5
                                }
                            }, Object(p.d)("Set the minimum number of Bits needed to send a Cheer message in your channel. We only recommend setting this above 1 to combat spam in chat.", "CheerSettingsPage")), i.createElement(u.Bb, {
                                display: u.X.InlineBlock,
                                color: u.O.Alt2,
                                verticalAlign: u.bc.Middle
                            }, i.createElement(u.Ub, {
                                label: Object(p.d)("For example, if you choose 30, viewers will not be able to send a Cheer message with 29 or fewer Bits. They will need to use at least 30 Bits, either in a single emote, or by combining emotes that add up to at least 30 Bits.", "CheerSettingsPage"),
                                width: 300
                            }, i.createElement(u.qb, {
                                asset: u.rb.NotificationInfo,
                                width: 16,
                                height: 16
                            }))))
                        })))), i.createElement(C.a, {
                            label: Object(p.d)("Minimum Bits Emote", "CheerSettingsPage"),
                            error: r,
                            errorMessage: Object(p.d)("Minimum Bits Emote must be less than Minimum Bit to Cheer", "CheerSettingsPage"),
                            "data-test-selector": "emote-minimum-bits-form"
                        }, i.createElement(u.Ja, null, i.createElement(u.P, {
                            cols: {
                                default: 12,
                                sm: 8
                            }
                        }, i.createElement(u.Xa, {
                            display: u.X.Flex
                        }, i.createElement(u.Xa, {
                            flexGrow: 1,
                            margin: {
                                right: 1
                            }
                        }, i.createElement(u.Ra, {
                            type: u.Ta.Number,
                            min: Ot,
                            max: Ct,
                            value: isNaN(a) ? "" : String(a),
                            onChange: this.onMinBitsPerEmoteInputChange,
                            "data-test-selector": "emote-minimum-bits-input"
                        })), i.createElement(St.a, {
                            status: s,
                            onClick: this.onMinBitsPerEmoteSave,
                            "data-test-selector": "emote-minimum-bits-save-button"
                        })))), i.createElement(u.Ja, null, i.createElement(u.P, {
                            cols: {
                                default: 12,
                                sm: 8
                            }
                        }, i.createElement(O.a, {
                            text: i.createElement(i.Fragment, null, i.createElement(u.Xa, {
                                display: u.X.Inline,
                                margin: {
                                    right: .5
                                }
                            }, Object(p.d)("Set the smallest Bit Emote that can be used in your channel. We only recommend setting this above 1 to combat spam in chat.", "CheerSettingsPage")), i.createElement(u.Bb, {
                                display: u.X.InlineBlock,
                                color: u.O.Alt2,
                                verticalAlign: u.bc.Middle
                            }, i.createElement(u.Ub, {
                                label: Object(p.d)("Bit Emote means the individual Bit Emotes that appear in chat. For example, if you choose 100, viewers cannot send “Cheer150 Cheer90” because Cheer90 is less than 100. “Cheer150 Cheer150” would be acceptable, because both cheers are greater than 100.", "CheerSettingsPage"),
                                width: 300
                            }, i.createElement(u.qb, {
                                asset: u.rb.NotificationInfo,
                                width: 16,
                                height: 16
                            }))))
                        })))))
                    }, t
                }(i.Component),
                At = Object(v.compose)(Object(b.a)(kt, {
                    options: function(e) {
                        return {
                            variables: {
                                login: e.channelName
                            }
                        }
                    }
                }), Object(b.a)(Tt, {
                    name: "setMinBitsToCheer"
                }), Object(b.a)(Nt, {
                    name: "setMinBitsPerEmote"
                }), Object(c.b)("BitsThresholdSettingsForm"), Object(ye.a)(function(e) {
                    return {
                        query: kt,
                        variables: {
                            login: e.channelName
                        },
                        topic: e.data && e.data.user && e.data.user.id ? Object(ke.d)(e.data.user.id) : "",
                        type: Se.c.BitsChannelSettingsEvent,
                        skip: !e.data.user || !e.data.user.id,
                        mutator: function(e, t) {
                            var n = e.updates;
                            return t.user && t.user.settings && t.user.settings.cheer && (void 0 !== n.minimum_bits && (t.user.settings.cheer.chatMessage.minBitsToCheer = n.minimum_bits), void 0 !== n.minimum_bits_emote && (t.user.settings.cheer.chatMessage.minBitsPerEmote = n.minimum_bits_emote)), t
                        }
                    }
                }))(Pt),
                It = n("NwqP"),
                _t = n("/CKs");
            ! function(e) {
                e[e.CheermotesSettingsLink = 0] = "CheermotesSettingsLink", e[e.NotSignedBitsAmendmentPrompt = 1] = "NotSignedBitsAmendmentPrompt", e[e.NotOnboardedPrompt = 2] = "NotOnboardedPrompt"
            }(lt || (lt = {}));
            var wt = function(e) {
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
                                                return a.trys.push([1, 3, , 4]), [4, t(Object(k.b)(i, r))];
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
                                var d = r.user.settings.cheer,
                                    c = d.hasSignedBitsAmendment,
                                    m = d.isOnboarded;
                                e = c ? i.createElement(u.Bb, {
                                    padding: 2,
                                    "data-test-selector": lt.NotOnboardedPrompt
                                }, i.createElement(u.ac, null, i.createElement("p", null, Object(p.d)("You have successfully completed your tax forms. Now click Enable Bits to complete onboarding.", "CheerSettingsForm"))), i.createElement(u.Xa, {
                                    display: u.X.Flex,
                                    alignItems: u.f.Center
                                }, i.createElement(u.Bb, {
                                    margin: {
                                        right: 1
                                    }
                                }, i.createElement(u.z, {
                                    disabled: !c,
                                    type: m ? u.F.Success : u.F.Default,
                                    onClick: this.onOnboardingButtonClick
                                }, m ? Object(p.d)("Success", "CheerSettingsForm") : Object(p.d)("Enable Bits", "CheerSettingsForm"))), m && i.createElement(u.U, {
                                    onClick: this.onSuccessLinkClick
                                }, Object(p.d)("Click here to see your Bits & Cheering settings", "CheerSettingsForm")), l && i.createElement(u.W, {
                                    color: u.O.Error
                                }, Object(p.d)("There was an error enabling Bits. Please try later or reach out to support.", "CheerSettingsForm")))) : i.createElement(u.Bb, {
                                    padding: 2,
                                    "data-test-selector": lt.NotSignedBitsAmendmentPrompt
                                }, i.createElement(u.ac, null, i.createElement("p", null, Object(p.d)("To enable Bits, we need your tax and payout information.", "CheerSettingsForm")), i.createElement("ul", null, i.createElement("li", null, Object(p.d)("After clicking Get Started click Start Over", "CheerSettingsForm")), i.createElement("li", null, Object(p.d)("Complete the registration, partner agreements, tax forms, and payout method.", "CheerSettingsForm")), i.createElement("li", null, Object(p.d)("Once you have completed the 4 steps, come back and click enable Bits!", "CheerSettingsForm")))), i.createElement(u.z, {
                                    linkTo: "/" + n + "/dashboard/settings/revenue/payout-onboarding"
                                }, Object(p.d)("Get Started", "CheerSettingsForm")))
                            } else e = i.createElement(i.Fragment, null, i.createElement(At, {
                                channelName: n
                            }), i.createElement(pt.b, {
                                name: "bits_sponsored_cheermote_dashboard_settings"
                            }, i.createElement(yt, {
                                channelLogin: n
                            })), i.createElement(gt.a, {
                                text: Object(p.d)("Cheer Badges", "CheerSettingsForm"),
                                linkTo: "/" + n + "/dashboard/settings/revenue/cheerbadges"
                            }), a && i.createElement(gt.a, {
                                text: Object(p.d)("Cheermotes", "CheerSettingsForm"),
                                linkTo: "/" + n + "/dashboard/settings/revenue/cheermotes",
                                "data-test-selector": lt.CheermotesSettingsLink
                            }), i.createElement(gt.a, {
                                text: Object(p.d)("Top Cheerers", "CheerSettingsForm"),
                                linkTo: "/" + n + "/dashboard/settings/revenue/cheer"
                            }));
                        else this.props.data.loading && (e = i.createElement(u.Za, {
                            fillContent: !0
                        })), this.props.data.error && (e = i.createElement(g.a, null));
                        return i.createElement(i.Fragment, null, i.createElement(ht.a, {
                            title: Object(p.d)("Bits & Cheering", "CheerSettingsForm")
                        }), i.createElement(I.a, null, e))
                    }, t
                }(i.Component),
                Rt = Object(v.compose)(Object(c.b)("CheerSettingsForm"), Object(b.a)(_t, {
                    options: function(e) {
                        return {
                            variables: {
                                login: e.channelName
                            }
                        }
                    }
                }), Object(b.a)(It, {
                    name: "onboardUser"
                }))(wt);
            var Dt = Object(Ze.connect)(function(e) {
                var t = Object(mt.e)(e);
                return {
                    isStaff: !!(t && t.roles && t.roles.isStaff)
                }
            })(Rt);

            function xt(e, t) {
                if (!e || !t) return !1;
                if (t.workflow.currentStep === d.E.AGREEMENT_PENDING_UPGRADE) return !1;
                var n = e.find(function(e) {
                    return e.category === d.C.PARTNER && e.isReceivingRevenue
                });
                return !(!(n && n.tags && n.tags.includes(d.F.LEGACY) && t) || t.isLegacy) || !(n && n.tags && (n.tags.includes(d.F.STANDARD) || n.tags.includes(d.F.PREMIUM)) && t && t.category === d.D.CUSTOM_PARTNER) && !!n
            }
            var Ft, jt = n("wNpX");
            ! function(e) {
                e.PAYOUT_ONBOARDING_LINK = "onboarding-section__payout-onboarding-link", e.UPGRADE_AGREEMENT_LINK = "onboarding-section__upgrade-agreement-link", e.PAYOUTS_LINK = "onboarding-section__payouts-link", e.AFFILIATE_AGREEMENT_LINK = "onboarding-section__affiliate-agreement-link", e.PARTNER_AGREEMENT_LINK = "onboarding-section__partner-agreement-link", e.EXTENSIONS_DEVELOPER_AGREEMENT_LINK = "onboarding-section__extensions-developer-agreement-link"
            }(Ft || (Ft = {}));
            var Ut = function(e) {
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
                        return t || n || !a || this.props.channelName !== a.login ? null : i.createElement(i.Fragment, null, i.createElement(ht.a, {
                            title: Object(p.d)("Onboarding", "OnboardingSection")
                        }), i.createElement(I.a, null, !this.hasAgreementPendingUpgrade && i.createElement(gt.a, {
                            "data-test-selector": Ft.PAYOUT_ONBOARDING_LINK,
                            text: this.payoutOnboardingLinkText,
                            linkTo: "/" + this.props.channelName + "/dashboard/settings/revenue/payout-onboarding"
                        }), this.hasAgreementPendingUpgrade && i.createElement(gt.a, {
                            "data-test-selector": Ft.UPGRADE_AGREEMENT_LINK,
                            text: this.upgradeTermsLinkText,
                            linkTo: "/" + this.props.channelName + "/dashboard/settings/revenue/upgrade-terms"
                        }), this.hasCompletedOnboarding && i.createElement(gt.a, {
                            "data-test-selector": Ft.PAYOUTS_LINK,
                            text: Object(p.d)("Change Payout Method", "OnboardingSection"),
                            linkTo: "/" + this.props.channelName + "/dashboard/settings/revenue/payouts"
                        }), a && a.roles && a.roles.isAffiliate && i.createElement(gt.a, {
                            "data-test-selector": Ft.AFFILIATE_AGREEMENT_LINK,
                            text: Object(p.d)("View Affiliate Agreement", "OnboardingSection"),
                            linkTo: "https://twitch.tv/p/legal/affiliate-agreement/"
                        }), this.showPartnerAgreementLink && i.createElement(gt.a, {
                            "data-test-selector": Ft.PARTNER_AGREEMENT_LINK,
                            text: Object(p.d)("View Active Partner Agreement", "OnboardingSection"),
                            linkTo: "/" + this.props.channelName + "/dashboard/settings/revenue/view-terms"
                        }), a && a.roles && a.roles.isExtensionsDeveloper && i.createElement(gt.a, {
                            "data-test-selector": Ft.EXTENSIONS_DEVELOPER_AGREEMENT_LINK,
                            text: Object(p.d)("View Extensions Developer Agreement", "OnboardingSection"),
                            linkTo: "https://twitch.tv/p/legal/developer-agreement/"
                        })))
                    }, Object.defineProperty(t.prototype, "hasAgreementPendingUpgrade", {
                        get: function() {
                            return !!(this.props.data.currentUser && this.props.data.currentUser.payoutInvite && this.props.data.currentUser.payoutInvite.workflow && this.props.data.currentUser.payoutInvite.workflow.currentStep === d.E.AGREEMENT_PENDING_UPGRADE)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "hasCompletedOnboarding", {
                        get: function() {
                            return !!(this.props.data.currentUser && this.props.data.currentUser.payoutInvite && this.props.data.currentUser.payoutInvite.workflow && this.props.data.currentUser.payoutInvite.workflow.currentStep === d.E.COMPLETED)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "payoutOnboardingLinkText", {
                        get: function() {
                            var e = this.props.data.currentUser;
                            if (!e || !e.payoutInvite) return null;
                            switch (e.payoutInvite.category) {
                                case d.D.AFFILIATE:
                                    return Object(p.d)("Affiliate Onboarding", "OnboardingSection");
                                case d.D.STANDARD_PARTNER:
                                case d.D.PREMIUM_PARTNER:
                                case d.D.CUSTOM_PARTNER:
                                    return Object(p.d)("Partner Onboarding", "OnboardingSection");
                                case d.D.EXTENSIONS_DEVELOPER:
                                    return Object(p.d)("Extensions Developer Onboarding", "OnboardingSection");
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
                                case d.D.AFFILIATE:
                                    return Object(p.d)("Agree to the Twitch Affiliate Agreement", "OnboardingSection");
                                case d.D.STANDARD_PARTNER:
                                case d.D.PREMIUM_PARTNER:
                                    return Object(p.d)("Agree to the Twitch Partner Agreement", "OnboardingSection");
                                default:
                                    return null
                            }
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "showPartnerAgreementLink", {
                        get: function() {
                            var e = this.props.data.currentUser;
                            return !!e && xt(e.payoutPlans && e.payoutPlans.map(function(e) {
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
                Lt = Object(o.compose)(Object(c.b)("OnboardingSection"), Object(b.a)(jt))(Ut),
                Mt = Object(c.b)("OtherRevenueStreamsForm", {
                    autoReportInteractive: !0
                })(function(e) {
                    return i.createElement(u.Xa, null, i.createElement(ht.a, {
                        title: Object(p.d)("Other Revenue Streams", "OtherRevenueStreamsForm")
                    }), i.createElement(I.a, null, i.createElement(gt.a, {
                        text: Object(p.d)("Game sales via Twitch", "OtherRevenueStreamsForm"),
                        linkTo: "/" + e.channelName + "/dashboard/settings/revenue/game-commerce"
                    }), i.createElement(gt.a, {
                        text: Object(p.d)("Merch by Amazon (Beta)", "OtherRevenueStreamsForm"),
                        linkTo: "/" + e.channelName + "/dashboard/settings/revenue/merch-by-amazon"
                    })))
                });
            var Bt, Xt = Object(Ze.connect)(function(e) {
                    var t = Object(mt.e)(e);
                    return {
                        isStaff: !!(t && t.roles && t.roles.isStaff)
                    }
                })(Mt),
                Wt = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onChange = function(e) {
                            t.props.onChange(t.props.benefit, e.currentTarget.checked)
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        return i.createElement(C.a, {
                            label: this.props.label
                        }, i.createElement(u.Tb, {
                            checked: this.props.isToggled,
                            onChange: this.onChange
                        }), i.createElement(O.a, {
                            text: this.props.description
                        }))
                    }, t
                }(i.Component),
                Vt = n("ucfV"),
                zt = n("TnsV");
            ! function(e) {
                e[e.AD_FREE_VIEWING = 0] = "AD_FREE_VIEWING", e[e.IGNORE_SLOW_MODE = 1] = "IGNORE_SLOW_MODE", e[e.SUBSCRIBER_ONLY_CHAT = 2] = "SUBSCRIBER_ONLY_CHAT", e[e.SUBSCRIBER_ONLY_ARCHIVES = 3] = "SUBSCRIBER_ONLY_ARCHIVES"
            }(Bt || (Bt = {}));
            var qt = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.inExperiment = "affiliate_access" === p.p.experiments.getAssignment(f.b.SubsAffiliateBadges), t.toggleBenefit = function(e, n) {
                            return a.__awaiter(t, void 0, void 0, function() {
                                var t, i, r, o, s, l, d, c;
                                return a.__generator(this, function(a) {
                                    return this.props.data.user && this.props.data.user.id && this.props.data.user.roles && this.props.data.user.subscriptionProducts && (t = this.props.data.user.subscriptionProducts[0]) ? (i = e === Bt.AD_FREE_VIEWING ? n : t.hasAdFree, r = e === Bt.IGNORE_SLOW_MODE ? n : t.hasFastChat, o = e === Bt.SUBSCRIBER_ONLY_ARCHIVES ? n : t.hasSubonlyVideoArchive, s = e === Bt.SUBSCRIBER_ONLY_CHAT ? n : t.hasSubOnlyChat, l = this.props.data.user.id, d = {
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
                                    }, this.props.updateSubscriptionProduct(Object(k.b)(d, c)), [2]) : [2]
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
                        if (!this.props.data.user || !this.props.data.user.roles || !this.props.data.user.subscriptionProducts) return this.props.data.loading ? i.createElement(u.Za, {
                            fillContent: !0
                        }) : this.props.data.error ? i.createElement(g.a, null) : null;
                        var e = this.props.data.user.subscriptionProducts[0];
                        if (!e) return null;
                        var t = this.props.channelName,
                            n = e.hasAdFree,
                            a = e.hasFastChat || !1,
                            r = e.hasSubOnlyChat || !1,
                            o = e.hasSubonlyVideoArchive || !1;
                        return i.createElement(i.Fragment, null, i.createElement(ht.a, {
                            title: Object(p.d)("Subscriptions", "DashboardRevenueSettings")
                        }), i.createElement(I.a, null, i.createElement(gt.a, {
                            text: Object(p.d)("Subscription names", "SubsSettingsSection"),
                            linkTo: "/" + t + "/dashboard/settings/revenue/subscription/ticket"
                        }), i.createElement(gt.a, {
                            text: Object(p.d)("Emotes", "SubsSettingsSection"),
                            linkTo: "/" + t + "/dashboard/settings/revenue/subscription/chatperks"
                        }), this.canAccessSubBadges() && i.createElement(gt.a, {
                            text: Object(p.d)("Loyalty badges", "SubsSettingsSection"),
                            linkTo: "/" + t + "/dashboard/settings/revenue/subscription/badges"
                        }), this.isPartner() && i.createElement(Wt, {
                            benefit: Bt.AD_FREE_VIEWING,
                            label: Object(p.d)("Ad-Free viewing", "SubsSettingsSection"),
                            isToggled: n,
                            onChange: this.toggleBenefit,
                            description: Object(p.d)("Allow subscribers to watch your content on your channel ad-free", "SubsSettingsSection")
                        }), i.createElement(Wt, {
                            benefit: Bt.IGNORE_SLOW_MODE,
                            label: Object(p.d)("Ignore slow mode", "SubsSettingsSection"),
                            isToggled: a,
                            onChange: this.toggleBenefit,
                            description: Object(p.d)("Allow subscribers to chat freely in your channel when chat is in slow mode", "SubsSettingsSection")
                        }), i.createElement(Wt, {
                            benefit: Bt.SUBSCRIBER_ONLY_CHAT,
                            label: Object(p.d)("Subscriber-only chat", "SubsSettingsSection"),
                            isToggled: r,
                            onChange: this.toggleBenefit,
                            description: Object(p.d)("Only allow subscribers and moderators to chat in your channel", "SubsSettingsSection")
                        }), i.createElement(Wt, {
                            benefit: Bt.SUBSCRIBER_ONLY_ARCHIVES,
                            label: Object(p.d)("Subscriber-only archives", "SubsSettingsSection"),
                            isToggled: o,
                            onChange: this.toggleBenefit,
                            description: Object(p.d)("Only allow subscribers to watch your past broadcasts", "SubsSettingsSection")
                        })))
                    }, t.prototype.isAffiliate = function() {
                        return this.props.data.user && this.props.data.user.id && this.props.data.user.roles && this.props.data.user.roles && this.props.data.user.roles.isAffiliate || !1
                    }, t.prototype.isPartner = function() {
                        return this.props.data.user && this.props.data.user.id && this.props.data.user.roles && this.props.data.user.roles.isPartner || !1
                    }, t
                }(i.Component),
                Gt = Object(v.compose)(Object(c.b)("SubsSettingsSection"), Object(b.a)(Vt, {
                    options: function(e) {
                        return {
                            variables: {
                                login: e.channelName
                            }
                        }
                    }
                }), Object(b.a)(zt, {
                    name: "updateSubscriptionProduct"
                }))(qt),
                Yt = n("jYG1"),
                Ht = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(t, e), t.prototype.componentDidMount = function() {
                        p.p.setPageTitle(Object(p.d)("Revenue Settings", "DashboardRevenueSettingsTitle")), this.props.data.loading && !this.props.data.error || this.props.latencyTracking.reportInteractive()
                    }, t.prototype.componentDidUpdate = function(e) {
                        (e.data.loading && !this.props.data.loading || this.props.data.error) && this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        return this.props.data.loading ? i.createElement(u.Za, {
                            fillContent: !0
                        }) : this.props.data.error ? i.createElement(g.a, null) : i.createElement(i.Fragment, null, i.createElement(Lt, {
                            channelName: this.channelName
                        }), (this.isPaidAffiliate || this.isPaidPartner) && i.createElement(i.Fragment, null, i.createElement(Gt, {
                            channelName: this.channelName
                        }), i.createElement(Dt, {
                            channelName: this.channelName,
                            isPartner: this.isPaidPartner
                        })), this.isPaidPartner && i.createElement(Xt, {
                            channelName: this.channelName
                        }))
                    }, Object.defineProperty(t.prototype, "channelName", {
                        get: function() {
                            return this.props.match.params.channelName
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "isPaidAffiliate", {
                        get: function() {
                            if (null === this.props.data.channel) return !1;
                            var e = this.props.data.channel.payoutPlans;
                            return !!e && !!e.find(function(e) {
                                return e.category === d.C.AFFILIATE && e.isReceivingRevenue
                            })
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "isPaidPartner", {
                        get: function() {
                            if (null === this.props.data.channel) return !1;
                            var e = this.props.data.channel.payoutPlans;
                            return !!e && !!e.find(function(e) {
                                return e.category === d.C.PARTNER && e.isReceivingRevenue
                            })
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t
                }(i.Component),
                Qt = Object(v.compose)(Object(c.b)("DashboardRevenueSettingsIndexPage", {
                    destination: y.a.DashboardSettingsRevenueIndex
                }), Object(E.a)({
                    location: S.PageviewLocation.DashboardSettingsRevenueIndex
                }), Object(b.a)(Yt, {
                    options: function(e) {
                        return {
                            variables: {
                                channelName: e.match.params.channelName
                            }
                        }
                    }
                }))(Ht),
                $t = n("nHFd"),
                Zt = function(e) {
                    return i.createElement(u.Bb, {
                        background: u.r.Base,
                        padding: {
                            x: 2,
                            y: 3
                        }
                    }, i.createElement(u.Bb, {
                        borderBottom: !0,
                        margin: {
                            bottom: 2
                        },
                        padding: {
                            bottom: 2
                        }
                    }, i.createElement(u.W, {
                        type: u.Rb.H4
                    }, Object(p.d)("Save Badge Images", "LoyaltyBadgeUploadModalPresentation"))), i.createElement(u.Xa, {
                        margin: {
                            bottom: 2
                        }
                    }, i.createElement(u.W, null, Object(p.d)("By uploading and saving these images, you are confirming that you own all rights to the images.", "LoyaltyBadgeUploadModalPresentation"))), i.createElement(u.Bb, {
                        borderTop: !0,
                        padding: {
                            top: 2
                        },
                        display: u.X.Flex,
                        justifyContent: u.Wa.Center
                    }, i.createElement(u.Xa, {
                        margin: {
                            right: 2
                        }
                    }, i.createElement(u.z, {
                        onClick: e.onClose,
                        type: u.F.Text
                    }, Object(p.d)("Cancel", "LoyaltyBadgeUploadModalPresentation"))), i.createElement(u.z, {
                        onClick: e.onSaveClick
                    }, Object(p.d)("Save", "LoyaltyBadgeUploadModalPresentation"))), i.createElement($t.a, {
                        closeOnBackdropClick: !0,
                        closeOnPageNavigation: !0
                    }))
                },
                Kt = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onSaveClick = function() {
                            t.props.closeModal(), t.props.onSaveClick()
                        }, t.onCancelClick = function() {
                            t.props.closeModal()
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        return i.createElement(Zt, {
                            onSaveClick: this.onSaveClick,
                            onClose: this.onCancelClick
                        })
                    }, t
                }(i.Component);
            var Jt, en = Object(Ze.connect)(null, function(e) {
                    return Object(v.bindActionCreators)({
                        closeModal: Ke.c
                    }, e)
                })(Kt),
                tn = "subscriptions/v1/channels",
                nn = function() {
                    function e() {}
                    return e.getBadges = function(e) {
                        return a.__awaiter(void 0, void 0, Promise, function() {
                            var t, n;
                            return a.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        return a.trys.push([0, 2, , 3]), [4, j.a.getOrThrow(tn + "/" + e + "/badges", {
                                            credentials: "include"
                                        })];
                                    case 1:
                                        return t = a.sent(), [2, rn(t.body)];
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
                                        return n.trys.push([0, 2, , 3]), [4, j.a.getOrThrow(tn + "/" + e + "/timeout_statuses", {
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
                                        return a.trys.push([0, 2, , 3]), [4, j.a.deleteOrThrow(tn + "/" + e + "/badges/" + t, {
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
                                        return a.trys.push([0, 2, , 3]), (n = new FormData).append("required_tenure_months", t.requiredTenureMonths.toString()), n.append("image_1x", t.image1x), n.append("image_2x", t.image2x), n.append("image_4x", t.image4x), [4, j.a.postOrThrow(tn + "/" + e + "/badges", {
                                            body: n,
                                            credentials: "include"
                                        })];
                                    case 1:
                                        return i = a.sent(), [2, an(i.body)];
                                    case 2:
                                        return r = a.sent(), [2, Promise.reject(r)];
                                    case 3:
                                        return [2]
                                }
                            })
                        })
                    }, e
                }(),
                an = function(e) {
                    return {
                        id: e.id,
                        requiredTenureMonths: e.required_tenure_months,
                        image1xURL: e.image_1x_url,
                        image2xURL: e.image_2x_url,
                        image4xURL: e.image_4x_url,
                        title: e.title
                    }
                },
                rn = function(e) {
                    return e.map(function(e) {
                        return an(e)
                    })
                },
                on = n("1YV1"),
                sn = (n("Dg2t"), "https://static-cdn.jtvnw.net/badges/v1/19dd8673-124d-4f44-830c-b0f4f9d78635/2"),
                ln = "current-badge-image-selector",
                dn = "current-badge-placeholder-selector",
                cn = "current-badge-locked-overlay-selector",
                un = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.renderCurrentBadges = function() {
                            if (!t.props.data.user || !t.props.data.user.roles) return t.props.data.loading ? i.createElement(u.Za, null) : t.props.data.error ? i.createElement(g.a, null) : null;
                            var e = new Map(t.props.badgesMap),
                                n = t.props.data.user.roles.isPartner,
                                a = (n ? _n : _n.filter(function(e) {
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
                                    var r = t.renderToolTip(Object(p.d)("Subscriber", "LoyaltyBadgeCurrentSectionComponent"), sn);
                                    return t.renderCurrentBadgeImage(n, r)
                                });
                            return i.createElement(u.Xa, {
                                margin: {
                                    top: 1,
                                    bottom: 1
                                }
                            }, a, !n && t.renderLockedBadges())
                        }, t.renderLockedBadges = function() {
                            return i.createElement(u.Xa, {
                                "data-test-selector": cn,
                                display: u.X.InlineFlex,
                                flexDirection: u.Aa.Column,
                                margin: {
                                    left: 1
                                }
                            }, i.createElement(u.Xa, {
                                display: u.X.InlineFlex,
                                flexDirection: u.Aa.Row,
                                margin: {
                                    bottom: 1
                                }
                            }, i.createElement(u.Xa, {
                                className: "loyalty-badges-current-section__container",
                                margin: {
                                    right: 1
                                }
                            }, i.createElement(u.Xa, {
                                className: "loyalty-badges-current-section__placeholder-light",
                                display: u.X.InlineFlex,
                                justifyContent: u.Wa.Center
                            }, i.createElement(u.qb, {
                                asset: u.rb.Lock,
                                type: u.sb.Brand
                            }))), i.createElement(u.Xa, {
                                className: "loyalty-badges-current-section__container",
                                margin: {
                                    right: 1
                                }
                            }, i.createElement(u.Xa, {
                                className: "loyalty-badges-current-section__placeholder-light"
                            })), i.createElement(u.Xa, {
                                className: "loyalty-badges-current-section__container",
                                margin: {
                                    right: 1
                                }
                            }, i.createElement(u.Xa, {
                                className: "loyalty-badges-current-section__placeholder-light",
                                position: u.hb.Absolute
                            }), i.createElement(u.Xa, {
                                className: "loyalty-badges-current-section__gradient",
                                position: u.hb.Absolute
                            }))), Object(p.d)("Unlock Year 2 to 8 badges when you become a Partner", "LoyaltyBadgeCurrentSectionComponent"))
                        }, t.renderCurrentBadgeImage = function(e, n) {
                            var a = ln;
                            return t.renderCurrentBadge(e, "loyalty-badges-current-section__badge", a, n)
                        }, t.renderCurrentBadgePlaceholder = function(e) {
                            var n = dn;
                            return t.renderCurrentBadge(e, "loyalty-badges-current-section__placeholder", n)
                        }, t.renderCurrentBadge = function(e, t, n, a) {
                            return i.createElement(u.Xa, {
                                className: "loyalty-badges-current-section__container",
                                alignItems: u.f.Center,
                                key: e.requiredTenureMonths,
                                "data-test-selector": n,
                                display: u.X.InlineFlex,
                                flexDirection: u.Aa.Column,
                                margin: {
                                    right: 1
                                },
                                verticalAlign: u.bc.Top
                            }, i.createElement(u.Xa, {
                                className: t,
                                margin: {
                                    bottom: 1
                                }
                            }, a), i.createElement(u.W, null, e.name))
                        }, t.renderToolTip = function(e, t) {
                            return i.createElement(u.Ub, {
                                direction: u.Wb.Bottom,
                                label: e
                            }, i.createElement("img", {
                                src: t,
                                alt: e
                            }))
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        return i.createElement(A.a, {
                            title: Object(p.d)("Current Badges", "LoyaltyBadgeCurrentSectionComponent")
                        }, this.renderCurrentBadges())
                    }, t
                }(i.Component),
                mn = Object(v.compose)(Object(b.a)(on, {
                    options: function(e) {
                        return {
                            variables: {
                                login: e.channelLogin
                            }
                        }
                    }
                }))(un);
            n("keuq");
            ! function(e) {
                e[e.NoChanges = 0] = "NoChanges", e[e.Working = 1] = "Working", e[e.Success = 2] = "Success", e[e.Error = 3] = "Error"
            }(Jt || (Jt = {}));
            var pn = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.renderContainer = function(e, n) {
                            return i.createElement(u.Xa, {
                                textAlign: u.Nb.Center,
                                margin: {
                                    right: 1
                                }
                            }, i.createElement(u.Xa, {
                                className: "loyalty-badges-delete-section__container",
                                alignItems: u.f.Center,
                                display: u.X.InlineFlex,
                                justifyContent: u.Wa.Center
                            }, i.createElement("img", {
                                src: e,
                                alt: t.props.title
                            })), i.createElement(u.W, null, n))
                        }, t.getButtonState = function(e) {
                            switch (e) {
                                case Jt.Working:
                                    return u.E.Loading;
                                case Jt.Success:
                                case Jt.NoChanges:
                                case Jt.Error:
                                default:
                                    return u.E.Default
                            }
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        return i.createElement(i.Fragment, null, this.renderContainer(this.props.image1xURL, Object(p.d)("18 x 18px", "LoyaltyBadgeDeleteSection")), this.renderContainer(this.props.image2xURL, Object(p.d)("36 x 36px", "LoyaltyBadgeDeleteSection")), this.renderContainer(this.props.image4xURL, Object(p.d)("72 x 72px", "LoyaltyBadgeDeleteSection")), i.createElement(u.Xa, {
                            className: "loyalty-badges-delete-section__button-container",
                            alignItems: u.f.Start,
                            display: u.X.InlineFlex,
                            flexDirection: u.Aa.Column,
                            justifyContent: u.Wa.Center,
                            margin: {
                                left: 1
                            }
                        }, i.createElement(u.Xa, {
                            margin: {
                                bottom: 1
                            }
                        }, i.createElement(u.z, {
                            type: u.F.Alert,
                            state: this.getButtonState(this.props.deleteStatus),
                            onClick: this.props.showDeleteBadgeModal
                        }, Object(p.d)("Delete Badge", "LoyaltyBadgeUploadSection"))), this.props.deleteStatus === Jt.Error && i.createElement(u.eb, {
                            label: Object(p.d)("Failed to delete subscriber badge", "LoyaltyBadgeDeleteSection"),
                            type: u.fb.Alert
                        })))
                    }, t
                }(i.Component),
                gn = function(e) {
                    return i.createElement(u.Bb, {
                        background: u.r.Base,
                        padding: {
                            x: 2,
                            y: 3
                        }
                    }, i.createElement(u.Bb, {
                        borderBottom: !0,
                        margin: {
                            bottom: 2
                        },
                        padding: {
                            bottom: 2
                        }
                    }, i.createElement(u.W, {
                        type: u.Rb.H4
                    }, Object(p.d)("Are you sure?", "LoyaltyBadgeDeleteModalPresentation"))), i.createElement(u.Xa, {
                        margin: {
                            bottom: 2
                        }
                    }, i.createElement(u.W, null, Object(p.d)("Deleting your subscriber badge could negatively impact your subscribers.", "LoyaltyBadgeDeleteModalPresentation"))), i.createElement(u.Bb, {
                        borderTop: !0,
                        padding: {
                            top: 2
                        },
                        display: u.X.Flex,
                        justifyContent: u.Wa.Center
                    }, i.createElement(u.Xa, {
                        margin: {
                            right: 2
                        }
                    }, i.createElement(u.z, {
                        onClick: e.onClose,
                        type: u.F.Text
                    }, Object(p.d)("Cancel", "LoyaltyBadgeDeleteModalPresentation"))), i.createElement(u.z, {
                        onClick: e.onDeleteClick
                    }, Object(p.d)("Delete", "LoyaltyBadgeDeleteModalPresentation"))), i.createElement($t.a, {
                        closeOnBackdropClick: !0,
                        closeOnPageNavigation: !0
                    }))
                },
                hn = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onDeleteClick = function() {
                            t.props.closeModal(), t.props.onDeleteClick()
                        }, t.onCancelClick = function() {
                            t.props.closeModal()
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        return i.createElement(gn, {
                            onDeleteClick: this.onDeleteClick,
                            onClose: this.onCancelClick
                        })
                    }, t
                }(i.Component);
            var bn = Object(Ze.connect)(null, function(e) {
                return Object(v.bindActionCreators)({
                    closeModal: Ke.c
                }, e)
            })(hn);
            var fn, vn = Object(Ze.connect)(null, function(e, t) {
                    return Object.assign(Object(v.bindActionCreators)({
                        showDeleteBadgeModal: function() {
                            return Object(Ke.d)(bn, {
                                onDeleteClick: t.onDeleteClick
                            })
                        }
                    }, e), t)
                })(pn),
                En = function() {
                    return i.createElement(i.Fragment, null, i.createElement(u.W, {
                        bold: !0,
                        fontSize: u.Ca.Size7
                    }, Object(p.d)("Contact Partner Help", "LoyaltyBadgeTimedOutSection")), i.createElement(u.Xa, {
                        padding: {
                            top: 1
                        }
                    }, i.createElement(u.W, null, Object(p.d)("One or more of the badges you've attempted to upload violate our Terms of Service. As such, your ability to upload new badges has been temporarily disabled and the offending content has been deleted.", "LoyaltyBadgeTimedOutSection"))), i.createElement(u.Xa, {
                        padding: {
                            top: 1
                        }
                    }, i.createElement(u.W, null, Object(p.d)("Please contact {email} for more information.", {
                        email: i.createElement("a", {
                            href: "mailto:partnerhelp@twitch.tv"
                        }, "partnerhelp@twitch.tv")
                    }, "LoyaltyBadgeTimedOutSection"))))
                },
                yn = function() {
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
            }(fn || (fn = {}));
            var Sn = 25e3,
                kn = Sn / 1e3,
                Nn = ["image/png"],
                Tn = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            errorStatus: fn.None
                        }, t.getErrorText = function() {
                            switch (t.state.errorStatus) {
                                case fn.BadSizeError:
                                    return Object(p.d)("Max file size is {fileSize} KB", {
                                        fileSize: kn
                                    }, "LoyaltyBadgeFilePicker");
                                case fn.BadImageError:
                                    return Object(p.d)("Bad PNG file", "LoyaltyBadgeFilePicker");
                                case fn.BadImageDimensionsError:
                                    return Object(p.d)("PNG must be {width} x {height}px", {
                                        width: t.props.widthRequirement,
                                        height: t.props.heightRequirement
                                    }, "LoyaltyBadgeFilePicker");
                                case fn.None:
                                default:
                                    return
                            }
                        }, t.onFilesSubmitted = function(e) {
                            return a.__awaiter(t, void 0, void 0, function() {
                                var t, n = this;
                                return a.__generator(this, function(a) {
                                    return e.length < 1 ? [2] : (t = e[0]).size > Sn ? (this.setState({
                                        errorStatus: fn.BadSizeError
                                    }), [2]) : (yn.readFile(t, function(e) {
                                        yn.readImage(e, n.props.widthRequirement, n.props.heightRequirement, function() {
                                            n.setState({
                                                errorStatus: fn.None
                                            }), n.props.onFileSubmitted(t, e)
                                        }, function() {
                                            n.setState({
                                                errorStatus: fn.BadImageDimensionsError
                                            })
                                        }, function() {
                                            n.setState({
                                                errorStatus: fn.BadImageError
                                            })
                                        })
                                    }), [2])
                                })
                            })
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        var e = this.getErrorText();
                        return i.createElement(u.Xa, {
                            position: u.hb.Relative
                        }, i.createElement(u.Xa, {
                            textAlign: u.Nb.Center,
                            margin: {
                                right: 1
                            }
                        }, i.createElement(u.Xa, {
                            className: "loyalty-badges-file-picker__container",
                            display: u.X.InlineFlex,
                            flexDirection: u.Aa.Column,
                            position: u.hb.Relative
                        }, i.createElement(M.a, {
                            allowedFileTypes: Nn,
                            error: void 0 !== e,
                            onFilesSubmitted: this.onFilesSubmitted
                        }, i.createElement(u.Xa, {
                            padding: .5
                        }, e ? i.createElement(u.W, {
                            color: u.O.Error,
                            wordBreak: u.dc.BreakWord
                        }, e) : this.props.children))), i.createElement(u.W, null, Object(p.d)("{width} x {height}px", {
                            width: this.props.widthRequirement,
                            height: this.props.heightRequirement
                        }, "LoyaltyBadgeFilePicker")), e && i.createElement(u.eb, {
                            label: e,
                            type: u.fb.Alert
                        })))
                    }, t
                }(i.Component),
                On = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.renderFilePickerContents = function() {
                            return i.createElement(i.Fragment, null, i.createElement(u.qb, {
                                asset: u.rb.Plus,
                                height: 16,
                                width: 16
                            }), i.createElement(u.W, null, Object(p.d)("Upload Image", "LoyaltyBadgeUploadSection")))
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        var e = this.props,
                            t = e.image1xURL,
                            n = e.image2xURL,
                            a = e.image4xURL;
                        return i.createElement(i.Fragment, null, i.createElement(Tn, {
                            onFileSubmitted: this.props.onImage1xSubmitted,
                            heightRequirement: 18,
                            widthRequirement: 18
                        }, t ? i.createElement("img", {
                            src: t
                        }) : this.renderFilePickerContents()), i.createElement(Tn, {
                            onFileSubmitted: this.props.onImage2xSubmitted,
                            heightRequirement: 36,
                            widthRequirement: 36
                        }, n ? i.createElement("img", {
                            src: n
                        }) : this.renderFilePickerContents()), i.createElement(Tn, {
                            onFileSubmitted: this.props.onImage4xSubmitted,
                            heightRequirement: 72,
                            widthRequirement: 72
                        }, a ? i.createElement("img", {
                            src: a
                        }) : this.renderFilePickerContents()))
                    }, t
                }(i.Component),
                Cn = n("OB5i"),
                Pn = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            isTimedOut: !1
                        }, t.renderTabs = function() {
                            var e = !1;
                            if (t.props.data.user && t.props.data.user.roles) e = t.props.data.user.roles.isPartner || e;
                            else if (t.props.data.error) return i.createElement(g.a, null);
                            var n = (e ? _n : _n.filter(function(e) {
                                return e.availableToAffiliate
                            })).map(function(e) {
                                var n = e.requiredTenureMonths;
                                return i.createElement(u.Cb, {
                                    key: n,
                                    active: t.props.activeTab === n,
                                    "data-tab-target": n,
                                    onClick: t.toggleActiveTab
                                }, i.createElement(u.W, null, e.name))
                            });
                            return i.createElement(u.Db, null, n)
                        }, t.renderTabContent = function() {
                            var e = t.props.activeTab,
                                n = t.props.badgesMap.get(e);
                            return i.createElement(u.Xa, {
                                display: u.X.InlineFlex,
                                margin: {
                                    top: 1
                                }
                            }, n ? i.createElement(vn, {
                                image1xURL: n.image1xURL,
                                image2xURL: n.image2xURL,
                                image4xURL: n.image4xURL,
                                title: n.title,
                                onDeleteClick: t.props.onDeleteClick,
                                deleteStatus: t.props.deleteStatus
                            }) : i.createElement(On, {
                                image1xURL: t.props.image1xDataURL,
                                image2xURL: t.props.image2xDataURL,
                                image4xURL: t.props.image4xDataURL,
                                onImage1xSubmitted: t.props.onImage1xSubmitted,
                                onImage2xSubmitted: t.props.onImage2xSubmitted,
                                onImage4xSubmitted: t.props.onImage4xSubmitted
                            }))
                        }, t.renderTosWarning = function() {
                            return "affiliate_access" === p.p.experiments.getAssignment(f.b.SubsAffiliateBadges) ? i.createElement(u.Bb, {
                                className: "loyalty-badges-page__toswarning",
                                background: u.r.Alt,
                                color: u.O.Alt,
                                padding: 1,
                                margin: {
                                    x: "auto",
                                    top: 2
                                },
                                border: !0
                            }, Object(p.d)("Before submitting your badge, make sure it adheres to <x:link>Twitch's Subscriber Badge and Emoticon Guidelines</x:link>. Submissions in violations of these Guidelines will be rejected and may result in action against your account.", {
                                "x:link": function(e) {
                                    return i.createElement(u.U, {
                                        to: "https://help.twitch.tv/customer/portal/articles/2348985#guidelines"
                                    }, e)
                                }
                            }, "LoyaltyBadgeManageSectionComponent")) : null
                        }, t.toggleActiveTab = function(e) {
                            return a.__awaiter(t, void 0, void 0, function() {
                                var t, n, i, r, o;
                                return a.__generator(this, function(a) {
                                    if (e.currentTarget.parentElement)
                                        for (t = e.currentTarget.parentElement.getAttribute("data-tab-target"), n = 0, i = _n; n < i.length; n++) r = i[n], o = r.requiredTenureMonths, t === o.toString() && this.props.toggleActiveTab(o);
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
                                        return this.props.data.user && this.props.data.user.id ? [4, nn.getTimeoutStatuses(this.props.data.user.id)] : [2];
                                    case 1:
                                        return e = t.sent(), this.setState({
                                            isTimedOut: e
                                        }), [2]
                                }
                            })
                        })
                    }, t.prototype.render = function() {
                        return i.createElement(A.a, {
                            title: Object(p.d)("Manage Badges", "LoyaltyBadgeManageSectionComponent")
                        }, this.state.isTimedOut ? i.createElement(En, null) : i.createElement(i.Fragment, null, this.renderTabs(), this.renderTabContent(), this.renderTosWarning()))
                    }, t
                }(i.Component),
                An = Object(v.compose)(Object(b.a)(Cn, {
                    options: function(e) {
                        return {
                            variables: {
                                login: e.channelLogin
                            }
                        }
                    }
                }))(Pn),
                In = n("YjpL"),
                _n = [{
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
                wn = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            badgesMap: new Map,
                            activeTab: 0,
                            saveStatus: N.b.NoChanges,
                            deleteStatus: Jt.NoChanges,
                            errorLoadingBadges: !1
                        }, t.onSaveClick = function() {
                            return a.__awaiter(t, void 0, void 0, function() {
                                var e, t, n, i;
                                return a.__generator(this, function(a) {
                                    switch (a.label) {
                                        case 0:
                                            if (!((e = this.props.data.user) && e.id && this.state.image1x && this.state.image2x && this.state.image4x)) return [3, 4];
                                            this.setState({
                                                saveStatus: N.b.Working
                                            }), t = {
                                                requiredTenureMonths: this.state.activeTab,
                                                image1x: this.state.image1x,
                                                image2x: this.state.image2x,
                                                image4x: this.state.image4x
                                            }, a.label = 1;
                                        case 1:
                                            return a.trys.push([1, 3, , 4]), [4, nn.uploadBadge(e.id, t)];
                                        case 2:
                                            return n = a.sent(), (i = new Map(this.state.badgesMap)).set(n.requiredTenureMonths, n), this.setState({
                                                badgesMap: i,
                                                image1xDataURL: void 0,
                                                image2xDataURL: void 0,
                                                image4xDataURL: void 0,
                                                image1x: void 0,
                                                image2x: void 0,
                                                image4x: void 0,
                                                saveStatus: N.b.Success
                                            }), [3, 4];
                                        case 3:
                                            return a.sent(), this.setState({
                                                saveStatus: N.b.Error
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
                                        deleteStatus: Jt.NoChanges,
                                        saveStatus: N.b.NoChanges
                                    }), [2]
                                })
                            })
                        }, t.updateSaveStatus = function() {
                            t.state.image1x && t.state.image2x && t.state.image4x ? t.setState({
                                saveStatus: N.b.DirtyChanges
                            }) : t.setState({
                                saveStatus: N.b.NoChanges
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
                                                deleteStatus: Jt.Working
                                            }), a.label = 1;
                                        case 1:
                                            return a.trys.push([1, 3, , 4]), [4, nn.deleteBadge(e.id, t.id)];
                                        case 2:
                                            return a.sent(), (n = new Map(this.state.badgesMap)).delete(t.requiredTenureMonths), this.setState({
                                                badgesMap: n,
                                                image1xDataURL: void 0,
                                                image2xDataURL: void 0,
                                                image4xDataURL: void 0,
                                                image1x: void 0,
                                                image2x: void 0,
                                                image4x: void 0,
                                                saveStatus: N.b.NoChanges,
                                                deleteStatus: Jt.Success
                                            }), [3, 4];
                                        case 3:
                                            return a.sent(), this.setState({
                                                deleteStatus: Jt.Error
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
                                        return p.p.setPageTitle(Object(p.d)("Loyalty Badges", "LoyaltyBadgesPageTitle")), !this.props.data.loading && this.props.data.user && this.props.data.user.id ? [4, this.getSetBadgesAndReportInteractive(this.props.data.user.id)] : [3, 2];
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
                        if (this.state.errorLoadingBadges) return i.createElement(g.a, null);
                        if ((!this.props.data.user || !this.props.data.user.id) && this.props.data.error) return i.createElement(g.a, null);
                        var e = i.createElement(T.a, {
                                status: this.state.saveStatus,
                                onClickSave: this.handleModalOpen
                            }),
                            t = i.createElement(P.a, {
                                title: Object(p.d)("Loyalty Badges", "LoyaltyBadgesPageComponent"),
                                linkToParent: "/" + this.props.match.params.channelLogin + "/dashboard/settings/revenue"
                            });
                        return i.createElement(I.a, {
                            header: t,
                            footer: e
                        }, i.createElement(mn, {
                            badgesMap: this.state.badgesMap,
                            channelLogin: this.props.match.params.channelLogin
                        }), i.createElement(An, {
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
                                        return a.trys.push([0, 2, 3, 4]), [4, nn.getBadges(e)];
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
                Rn = Object(v.compose)(Object(c.b)("LoyaltyBadgesPage", {
                    destination: y.a.DashboardSettingsRevenueLoyaltyBadges
                }), Object(E.a)({
                    location: S.PageviewLocation.DashboardSettingsRevenueLoyaltyBadges
                }), Object(b.a)(In, {
                    options: function(e) {
                        return {
                            variables: {
                                login: e.match.params.channelLogin
                            }
                        }
                    }
                }))(wn);
            var Dn, xn = Object(Ze.connect)(null, function(e) {
                    return Object(v.bindActionCreators)({
                        showUploadBadgeModal: function(e) {
                            var t = a.__rest(e, []);
                            return Object(Ke.d)(en, t)
                        }
                    }, e)
                })(Rn),
                Fn = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(t, e), t.prototype.componentDidMount = function() {
                        p.p.setPageTitle(Object(p.d)("Merch by Amazon (Beta)", "DashboardRevenueSettingsMerchByAmazonTitle"))
                    }, t.prototype.render = function() {
                        var e = i.createElement(P.a, {
                            title: Object(p.d)("Merch by Amazon (Beta)", "DashboardRevenueSettingsMerchByAmazon"),
                            linkToParent: "/" + this.props.match.params.channelName + "/dashboard/settings/revenue"
                        });
                        return i.createElement(I.a, {
                            header: e
                        }, i.createElement(A.a, null, i.createElement(u.W, null, Object(p.d)("Register with Merch by Amazon to create and sell your merchandise.", "DashboardRevenueSettingsMerchByAmazon")), i.createElement(u.Xa, {
                            padding: {
                                y: 2
                            }
                        }, i.createElement(u.W, null, Object(p.d)("Merch by Amazon will only approve one account for access per Twitch Partner. When you click this link you will be asked to log in with an Amazon account. Please make sure to log in with your preferred Amazon account, as that is the one we will enable for Merch by Amazon access.", "DashboardRevenueSettingsMerchByAmazon"))), i.createElement(u.z, {
                            targetBlank: !0,
                            linkTo: "https://twitch.amazon.com/link?confirm=ALWAYS&returnUri=https%3A%2F%2Fmerch.amazon.com%2Ftwitch-landing"
                        }, Object(p.d)("Create & Manage Your Merch Account", "DashboardRevenueSettingsMerchByAmazon"))))
                    }, t
                }(i.Component),
                jn = Object(v.compose)(Object(c.b)("MerchByAmazonPage", {
                    autoReportInteractive: !0,
                    destination: y.a.DashboardSettingsRevenueMerchByAmazon
                }), Object(E.a)({
                    location: S.PageviewLocation.DashboardSettingsRevenueMerchByAmazon
                }))(Fn),
                Un = n("cr+I"),
                Ln = n("wIs1"),
                Mn = n("x7UT"),
                Bn = n("NAv5");
            ! function(e) {
                e[e.Summary = 0] = "Summary", e[e.Registration = 1] = "Registration", e[e.Agreement = 2] = "Agreement", e[e.TaxInterview = 3] = "TaxInterview", e[e.PayoutMethod = 4] = "PayoutMethod", e[e.Review = 5] = "Review"
            }(Dn || (Dn = {}));
            var Xn, Wn = n("h3C/"),
                Vn = function() {
                    return i.createElement(i.Fragment, null, i.createElement(u.Xa, {
                        margin: {
                            bottom: 1
                        }
                    }, i.createElement(u.W, {
                        type: u.Rb.H4
                    }, Object(p.d)("Twitch Affiliate Agreement", "AffiliateAgreement"))), i.createElement(u.W, {
                        type: u.Rb.P
                    }, Object(p.d)('By clicking the "{buttonLabel}" button below, you agree to the <x:link>Twitch Affiliate Agreement</x:link> (including all policies, appendices, specifications, guidelines, schedules, and other rules incorporated by reference therein); provided, however, that the Twitch Affiliate Agreement shall not be effective until we determine that you are eligible to participate in the Twitch Affiliate Program as further described therein.', {
                        buttonLabel: Object(p.d)("Agree", "AffiliateAgreement"),
                        "x:link": function(e) {
                            return i.createElement(u.U, {
                                to: "https://www.twitch.tv/p/legal/affiliate-agreement"
                            }, e)
                        }
                    }, "AffiliateAgreement")))
                },
                zn = function() {
                    return i.createElement(i.Fragment, null, i.createElement(u.Xa, {
                        margin: {
                            bottom: 1
                        }
                    }, i.createElement(u.W, {
                        type: u.Rb.H4
                    }, Object(p.d)("Twitch Partner Program Terms", "CustomPartnerAgreement"))), i.createElement(u.W, {
                        type: u.Rb.P
                    }, Object(p.d)("Your Twitch Partner Agreement has been emailed to you via DocuSign. Check the inbox of the email address associated with your Twitch account for an email from DocuSign/Twitch and follow the instructions. Once you have signed the Twitch Partner Agreement, please click {buttonLabel} to continue.", {
                        buttonLabel: Object(p.d)("Next", "CustomPartnerAgreement")
                    }, "CustomPartnerAgreement")))
                },
                qn = function() {
                    return i.createElement(i.Fragment, null, i.createElement(u.Xa, {
                        margin: {
                            bottom: 1
                        }
                    }, i.createElement(u.W, {
                        type: u.Rb.H4
                    }, Object(p.d)("Twitch Extensions Developer Program Terms", "ExtensionsDeveloperAgreement"))), i.createElement(u.W, {
                        type: u.Rb.P
                    }, Object(p.d)("It looks like you've already agreed to the Twitch Developer Agreement! Click {buttonLabel} to continue.", {
                        buttonLabel: Object(p.d)("Next", "ExtensionsDeveloperAgreement")
                    }, "ExtensionsDeveloperAgreement")))
                },
                Gn = function(e) {
                    return i.createElement(u.Bb, {
                        background: u.r.Alt2,
                        padding: {
                            x: 2,
                            y: 1
                        }
                    }, i.createElement(u.Xa, {
                        display: u.X.InlineBlock,
                        margin: {
                            right: 1
                        }
                    }, i.createElement(u.W, {
                        type: u.Rb.H5,
                        transform: u.Qb.Uppercase,
                        color: u.O.Alt,
                        bold: !0
                    }, e.title)), !!e.statusText && i.createElement(u.Xa, {
                        display: u.X.InlineBlock
                    }, i.createElement(u.W, {
                        type: u.Rb.H4,
                        transform: u.Qb.Uppercase,
                        bold: !0
                    }, i.createElement(u.eb, {
                        label: e.statusText,
                        type: e.statusType
                    }))))
                },
                Yn = function(e) {
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
                        return i.createElement(i.Fragment, null, i.createElement(Gn, {
                            title: Object(p.d)("Parent Consent", "ParentConfirmation")
                        }), i.createElement(u.Xa, {
                            padding: 2
                        }, i.createElement(u.W, {
                            type: u.Rb.P,
                            color: u.O.Alt2
                        }, Object(p.d)("Parent or legal guardian: Please type your first and last name and check the box below.", "ParentConfirmation")), i.createElement(u.Xa, {
                            margin: {
                                top: 2
                            }
                        }, i.createElement(u.Ea, {
                            label: Object(p.d)("Parent or Legal Guardian Name", "ParentConfirmation"),
                            orientation: u.Fa.Horizontal
                        }, i.createElement(u.Xa, {
                            margin: {
                                bottom: 1
                            }
                        }, i.createElement(u.Ra, {
                            type: u.Ta.Text,
                            placeholder: Object(p.d)("First and Last Name", "ParentConfirmation"),
                            value: this.state.parentName,
                            onChange: this.handleParentNameChange
                        })), i.createElement(u.N, {
                            label: Object(p.d)("I hereby warrant that I am the (parent)/(guardian) of the Twitch user associated with this account, a minor, and have full authority to authorize this Agreement, which I have read and approved. I hereby agree that I and said minor will be bound by all provisions contained in this Agreement.", "ParentConfirmation"),
                            checked: this.state.checked,
                            onChange: this.toggleChecked
                        })))))
                    }, t
                }(i.Component),
                Hn = function() {
                    return i.createElement(i.Fragment, null, i.createElement(u.Xa, {
                        margin: {
                            bottom: 1
                        }
                    }, i.createElement(u.W, {
                        type: u.Rb.H4
                    }, Object(p.d)("Twitch Partner Program Terms", "PartnerRedoInfo"))), i.createElement(u.W, {
                        type: u.Rb.P
                    }, Object(p.d)("It looks like you've already agreed to the Twitch Partner Agreement! Click {buttonLabel} to continue.", {
                        buttonLabel: Object(p.d)("Next", "PartnerRedoInfo")
                    }, "PartnerRedoInfo")))
                },
                Qn = function(e) {
                    return i.createElement(u.Xa, {
                        position: u.hb.Relative
                    }, i.createElement(u.Xa, {
                        position: u.hb.Absolute,
                        attachRight: !0
                    }, i.createElement(u.z, {
                        onClick: function() {
                            var e = window.open();
                            if (e) {
                                var t = window.document.getElementById("agreement-id-selector"),
                                    n = t && t.innerHTML;
                                n && (e.document.write(n), e.document.close(), e.focus(), e.print())
                            }
                        }
                    }, Object(p.d)("Print", "ViewPrintableAgreement"))), i.createElement("div", {
                        id: "agreement-id-selector",
                        dangerouslySetInnerHTML: {
                            __html: e.body
                        }
                    }))
                },
                $n = n("/Onm"),
                Zn = function(e) {
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
                                            return e = this.props.data.currentUser && this.props.data.currentUser.id, this.props.onboardEntity === d.D.STANDARD_PARTNER || this.props.onboardEntity === d.D.PREMIUM_PARTNER ? (i = this.props.data.currentUser && this.props.data.currentUser.programAgreement, t = i && i.type, n = i && i.version) : (t = this.props.onboardEntity, n = "v1"), e && t && n ? (r = Object(k.a)({
                                                targetUserID: e,
                                                type: t,
                                                version: n
                                            }), [4, this.props.acceptProgramAgreement(r)]) : [2];
                                        case 1:
                                            return (o = a.sent()).data.acceptProgramAgreement && o.data.acceptProgramAgreement.error ? (this.setState({
                                                processingAgreement: !1
                                            }), [2]) : (this.props.updateStepDisplayed(Dn.TaxInterview), [2])
                                    }
                                })
                            })
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        if (this.props.data.loading) return i.createElement(I.a, null, i.createElement(A.a, null, i.createElement(u.gb, {
                            lineCount: 4
                        })));
                        if (this.props.data.error) return i.createElement(I.a, null, i.createElement(A.a, null, i.createElement(g.a, {
                            message: Object(p.d)("Oops, something went wrong.", "PayoutOnboardingAgreement")
                        })));
                        var e = i.createElement(u.z, {
                            "data-test-selector": "payout-onboarding-agreement__proceed-button",
                            disabled: this.proceedButtonDisabled || this.state.processingAgreement,
                            state: this.state.processingAgreement ? u.E.Loading : u.E.Default,
                            onClick: this.handleAgreeClick
                        }, this.skipAgreement ? Object(p.d)("Next", "PayoutOnboardingAgreement") : Object(p.d)("Agree", "PayoutOnboardingAgreement"));
                        return i.createElement(I.a, {
                            footer: e
                        }, i.createElement(A.a, null, i.createElement(u.Bb, {
                            borderMarked: !0,
                            background: u.r.Base,
                            padding: 2,
                            elevation: 1
                        }, this.renderAgreement)), !this.skipAgreement && this.requiresParentConsent && i.createElement(Yn, {
                            updateParentName: this.updateParentName,
                            updateParentConfirmation: this.updateParentConfirmation
                        }))
                    }, Object.defineProperty(t.prototype, "renderAgreement", {
                        get: function() {
                            if (this.isPartnerRedo) return i.createElement(Hn, null);
                            switch (this.props.onboardEntity) {
                                case d.D.AFFILIATE:
                                    return i.createElement(Vn, null);
                                case d.D.EXTENSIONS_DEVELOPER:
                                    return i.createElement(qn, null);
                                case d.D.STANDARD_PARTNER:
                                case d.D.PREMIUM_PARTNER:
                                    var e = this.props.data.currentUser && this.props.data.currentUser.programAgreement;
                                    return e && i.createElement(Qn, {
                                        body: e.body
                                    });
                                case d.D.CUSTOM_PARTNER:
                                    return i.createElement(zn, null);
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
                                return e.category === d.C.PARTNER
                            });
                            return !!e && (!!e.isReceivingRevenue && (!!e.tags && (!(!this.props.data.currentUser.payoutInvite || !this.props.data.currentUser.payoutInvite.isLegacy) || !e.tags.includes(d.F.LEGACY) && (e.tags.includes(d.F.STANDARD) ? this.props.onboardEntity === d.D.STANDARD_PARTNER : e.tags.includes(d.F.PREMIUM) ? this.props.onboardEntity === d.D.PREMIUM_PARTNER : !!e.tags.includes(d.F.CUSTOM) && this.props.onboardEntity === d.D.CUSTOM_PARTNER))))
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "skipAgreement", {
                        get: function() {
                            return this.props.onboardEntity === d.D.EXTENSIONS_DEVELOPER || this.props.onboardEntity === d.D.CUSTOM_PARTNER || this.isPartnerRedo
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "requiresParentConsent", {
                        get: function() {
                            if (!(this.props.data.currentUser && this.props.data.currentUser.payoutInvite && this.props.data.currentUser.payoutInvite.workflow && this.props.data.currentUser.payoutInvite.workflow.registration)) return !1;
                            var e = this.props.data.currentUser.payoutInvite.workflow.registration.birthdate;
                            return Object(Bn.differenceInYears)(new Date, e) < 18
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
                Kn = Object(v.compose)(Object(b.a)($n, {
                    options: function(e) {
                        return {
                            variables: {
                                withAgreement: e.onboardEntity === d.D.STANDARD_PARTNER || e.onboardEntity === d.D.PREMIUM_PARTNER
                            }
                        }
                    }
                }), Object(b.a)(Wn, {
                    name: "acceptProgramAgreement"
                }))(Zn),
                Jn = n("+ZoN"),
                ea = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        if (this.props.data.loading || this.props.status === Xn.Completed) return null;
                        var e;
                        if (this.props.status === Xn.UnderReview) switch (this.props.onboardEntity) {
                            case d.D.EXTENSIONS_DEVELOPER:
                                e = i.createElement(u.W, null, Object(p.d)("Your financial information is currently under review. This process usually takes a few minutes.", "PayoutInfoBrick"));
                                break;
                            case d.D.AFFILIATE:
                            case d.D.STANDARD_PARTNER:
                            case d.D.PREMIUM_PARTNER:
                            case d.D.CUSTOM_PARTNER:
                                e = i.createElement(u.W, null, Object(p.d)("Your payout information is currently under review. This typically only takes a few minutes.", "PayoutInfoBrick"))
                        } else if (this.props.status === Xn.NotStarted) {
                            var t = !!(this.props.data && this.props.data.currentUser && this.props.data.currentUser.roles && this.props.data.currentUser.roles.isPartner && this.props.data.currentUser.roles.isExtensionsDeveloper);
                            e = i.createElement(i.Fragment, null, i.createElement(u.Xa, {
                                margin: {
                                    bottom: 1
                                }
                            }, i.createElement(u.W, null, Object(p.d)("Here you choose how you want to be paid. You must accrue at least $100 in revenue before you are eligible for a payout", "PayoutInfoBrick"))), i.createElement(u.Xa, {
                                margin: {
                                    bottom: 1
                                }
                            }, i.createElement(u.W, null, Object(p.d)("Choose Hold Payouts to have us hold your money until you request a payout; otherwise, you will be paid automatically.", "PayoutInfoBrick"))), this.props.onboardEntity === d.D.AFFILIATE && !t && i.createElement(u.W, null, Object(p.d)("Twitch uses a third party to process your payouts and the processor charges a transaction fee each time you get paid. The fees vary based on the payout method. See the fees <x:link>here.</x:link>", {
                                "x:link": function(e) {
                                    return i.createElement(u.U, {
                                        to: "https://help.twitch.tv/customer/portal/articles/2785925-affiliate-onboarding-guide#fees",
                                        targetBlank: !0
                                    }, e)
                                }
                            }, "PayoutInfoBrick")))
                        }
                        return i.createElement(u.Bb, {
                            borderMarked: !0,
                            padding: 2,
                            margin: {
                                bottom: 2
                            },
                            elevation: 1
                        }, e)
                    }, t
                }(i.Component),
                ta = Object(b.a)(Jn)(ea),
                na = function(e) {
                    var t;
                    switch (e.onboardEntity) {
                        case d.D.AFFILIATE:
                            t = "https://help.twitch.tv/customer/portal/articles/2785925-affiliate-onboarding-guide";
                            break;
                        case d.D.EXTENSIONS_DEVELOPER:
                            t = "https://dev.twitch.tv/docs/extensions/onboarding";
                            break;
                        case d.D.STANDARD_PARTNER:
                        case d.D.PREMIUM_PARTNER:
                        case d.D.CUSTOM_PARTNER:
                            t = "https://help.twitch.tv/customer/portal/articles/2853658-partner-onboarding-guide";
                            break;
                        default:
                            return null
                    }
                    return i.createElement(u.W, {
                        type: u.Rb.P
                    }, Object(p.d)("Need Help? <x:link>See our detailed onboarding guide.</x:link>", {
                        "x:link": function(e) {
                            return i.createElement(u.U, {
                                to: t,
                                targetBlank: !0
                            }, e)
                        }
                    }, "OnboardingGuideLink"))
                },
                aa = function(e) {
                    var t;
                    return e.onboardEntity === d.D.EXTENSIONS_DEVELOPER ? (e.status === Xn.NotStarted && (t = i.createElement(u.W, null, Object(p.d)("Click the button below to submit your financial information.", "PayoutInfoText"))), e.status === Xn.UnderReview && (t = i.createElement(u.W, null, Object(p.d)("You can change your financial information if you wish to modify any previously submitted information. You may want to do this if your financial information has been under review for more than 48 hours.", "PayoutInfoText"))), e.status === Xn.Completed && (t = i.createElement(i.Fragment, null, i.createElement(u.Xa, {
                        margin: {
                            bottom: 1
                        }
                    }, i.createElement(u.W, null, Object(p.d)("Your financial information was successfully validated.", "PayoutInfoText"))), i.createElement(u.W, null, Object(p.d)("Click the button below if you wish to modify or correct any previously submitted financial information. Please note that this will erase your existing financial information and you will need to fully complete the form again.", "PayoutInfoText"))))) : (e.status === Xn.NotStarted && (t = i.createElement(u.W, null, Object(p.d)("Click the button below to submit your payout method.", "PayoutInfoText"))), e.status === Xn.UnderReview && (t = i.createElement(u.W, null, Object(p.d)("You can change your payout method if you wish to modify any previously submitted information. You may want to do this if your payout information has been under review for more than 48 hours.", "PayoutInfoText"))), e.status === Xn.Completed && (t = i.createElement(i.Fragment, null, i.createElement(u.Xa, {
                        margin: {
                            bottom: 1
                        }
                    }, i.createElement(u.W, null, Object(p.d)("Your payout information was successfully validated.", "PayoutInfoText"))), i.createElement(u.W, null, Object(p.d)("Click the button below if you wish to modify or correct any previously submitted payout information. Please note that this will erase your existing payout information and you will need to fully complete the form again.", "PayoutInfoText"))))), i.createElement(i.Fragment, null, i.createElement(u.Xa, {
                        margin: {
                            bottom: 2
                        }
                    }, t), e.status !== Xn.Completed && i.createElement(u.Xa, {
                        margin: {
                            bottom: 2
                        }
                    }, i.createElement(na, {
                        onboardEntity: e.onboardEntity
                    })))
                },
                ia = n("cZKs"),
                ra = n("+GjP"),
                oa = (n("fIvP"), function(e) {
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
                        return i.createElement(u.Xa, {
                            className: "tipalti-iframe--container"
                        }, !this.state.tipaltiIframeLoaded && i.createElement(u.Za, {
                            fillContent: !0
                        }), i.createElement(u.Xa, {
                            "data-test-selector": "tipalti-iframe__iframe-container",
                            fullHeight: !0,
                            display: this.state.tipaltiIframeLoaded ? u.X.Block : u.X.Hide
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
                sa = n("qQoZ"),
                la = (n("ct+5"), function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        return this.tipaltiURL ? i.createElement(u.Bb, {
                            className: "payout-method-modal__container",
                            background: u.r.Base,
                            padding: 2
                        }, i.createElement(oa, {
                            tipaltiURL: this.tipaltiURL
                        })) : this.props.data.error ? i.createElement(u.Bb, {
                            className: "payout-method-modal__container",
                            background: u.r.Base,
                            padding: 5
                        }, i.createElement(g.a, {
                            message: Object(p.d)("Oops, something went wrong.", "PayoutMethodModal")
                        })) : i.createElement(u.Bb, {
                            className: "payout-method-modal__container",
                            background: u.r.Base,
                            padding: 5
                        }, i.createElement(u.Za, {
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
                da = Object(v.compose)(Object(b.a)(sa, {
                    options: function() {
                        return {
                            variables: {
                                redirectURL: Object(ra.e)(window.location.href, {
                                    redirect_tipalti: "true"
                                })
                            }
                        }
                    }
                }))(la),
                ca = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        return i.createElement(u.Xa, null, i.createElement(da, null), i.createElement(ia.a, {
                            closeOnBackdropClick: !0
                        }))
                    }, t
                }(i.Component);
            ! function(e) {
                e[e.NotStarted = 0] = "NotStarted", e[e.UnderReview = 1] = "UnderReview", e[e.Completed = 2] = "Completed"
            }(Xn || (Xn = {}));
            var ua = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.handleContinueClick = function() {
                        var e = t.isCustomPartnerOnboarding ? Dn.Review : Dn.Summary;
                        t.props.updateStepDisplayed(e)
                    }, t
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    return i.createElement(I.a, null, i.createElement(Gn, {
                        title: Object(p.d)("Payout Method", "PayoutOnboardingPayoutMethod"),
                        statusText: this.payoutStatusText,
                        statusType: this.payoutStatusType,
                        borderTop: !0
                    }), i.createElement(u.Bb, {
                        borderTop: !0,
                        borderBottom: !0,
                        padding: 2
                    }, i.createElement(ta, {
                        onboardEntity: this.props.onboardEntity,
                        status: this.payoutMethodStatus
                    }), i.createElement(aa, {
                        onboardEntity: this.props.onboardEntity,
                        status: this.payoutMethodStatus
                    }), i.createElement(u.z, {
                        onClick: this.props.showPayoutMethodModal,
                        type: this.payoutMethodStatus === Xn.NotStarted ? u.F.Default : u.F.Hollow
                    }, this.payoutMethodButtonText)), i.createElement(u.Bb, {
                        padding: 2,
                        background: u.r.Alt2
                    }, i.createElement(u.z, {
                        onClick: this.handleContinueClick,
                        disabled: this.continueButtonDisabled
                    }, this.isCustomPartnerOnboarding ? Object(p.d)("Continue", "PayoutOnboardingPayoutMethod") : Object(p.d)("Done", "PayoutOnboardingPayoutMethod"))))
                }, Object.defineProperty(t.prototype, "isExtensionsDeveloperOnboarding", {
                    get: function() {
                        return this.props.onboardEntity === d.D.EXTENSIONS_DEVELOPER
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "isCustomPartnerOnboarding", {
                    get: function() {
                        return this.props.onboardEntity === d.D.CUSTOM_PARTNER
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "payoutMethodStatus", {
                    get: function() {
                        switch (this.props.currentStep) {
                            case d.E.PAYOUT_METHOD_PENDING:
                                return Xn.UnderReview;
                            case d.E.COMPLETED:
                            case d.E.REVIEW_PENDING:
                                return Xn.Completed;
                            default:
                                return Xn.NotStarted
                        }
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "payoutStatusText", {
                    get: function() {
                        switch (this.payoutMethodStatus) {
                            case Xn.UnderReview:
                                return Object(p.d)("Under Review", "PayoutOnboardingPayoutMethod");
                            case Xn.Completed:
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
                            case Xn.UnderReview:
                                return u.fb.Prime;
                            case Xn.Completed:
                                return u.fb.Success;
                            default:
                                return
                        }
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "payoutMethodButtonText", {
                    get: function() {
                        return this.isExtensionsDeveloperOnboarding ? this.payoutMethodStatus === Xn.NotStarted ? Object(p.d)("Set Financial Information", "PayoutOnboardingPayoutMethod") : Object(p.d)("Change Financial Information", "PayoutOnboardingPayoutMethod") : this.payoutMethodStatus === Xn.NotStarted ? Object(p.d)("Set Payout Method", "PayoutOnboardingPayoutMethod") : Object(p.d)("Change Payout Method", "PayoutOnboardingPayoutMethod")
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "continueButtonDisabled", {
                    get: function() {
                        return this.isCustomPartnerOnboarding ? this.props.currentStep !== d.E.REVIEW_PENDING : this.props.currentStep === d.E.PAYOUT_METHOD_NOT_STARTED
                    },
                    enumerable: !0,
                    configurable: !0
                }), t
            }(i.Component);
            var ma, pa = Object(v.compose)(Object(Ze.connect)(null, function(e) {
                    return Object(v.bindActionCreators)({
                        showPayoutMethodModal: function() {
                            return Object(Ke.d)(ca, null)
                        }
                    }, e)
                }))(ua),
                ga = /^[\s\da-zA-Z&\-,‘'\/#\.%]*$/,
                ha = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
                ba = function() {
                    return Object(p.d)("Only the English alphabet (non-accented Latin characters), numbers, and these special characters & - , ‘ / # . % are accepted.", "PayoutOnboardingRegistration")
                },
                fa = function() {
                    return Object(p.d)("Must provide a valid email address.", "PayoutOnboardingRegistration")
                },
                va = function() {
                    return Object(p.d)("optional", "PayoutOnboardingRegistration")
                };
            ! function(e) {
                e.FIRST_NAME = "contact-info__first-name", e.MIDDLE_NAME = "contact-info__middle-name", e.LAST_NAME = "contact-info__last-name", e.EMAIL = "contact-info__email", e.CONFIRM_EMAIL = "contact-info__confirm-email", e.COMPANY_LEGAL_NAME = "contact-info__company-legal-name"
            }(ma || (ma = {}));
            var Ea, ya = function(e) {
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
                        return ba()
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "invalidEmailErrorMessage", {
                    get: function() {
                        return fa()
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "optionalText", {
                    get: function() {
                        return va()
                    },
                    enumerable: !0,
                    configurable: !0
                }), t.prototype.render = function() {
                    return i.createElement(u.Xa, {
                        padding: 2
                    }, i.createElement(u.Xa, {
                        margin: {
                            bottom: 2
                        }
                    }, i.createElement(u.Ea, {
                        label: Object(p.d)("Channel Name", "ContactInfo")
                    }, i.createElement(u.Ra, {
                        type: u.Ta.Text,
                        value: this.props.channelName,
                        disabled: !0
                    }))), i.createElement(u.Xa, {
                        margin: {
                            bottom: 2
                        }
                    }, i.createElement(u.Ea, {
                        label: Object(p.d)("First Name", "ContactInfo"),
                        error: !ga.test(this.state.firstName),
                        errorMessage: this.invalidFormatErrorMessage,
                        "data-test-selector": ma.FIRST_NAME
                    }, i.createElement(u.Ra, {
                        autoFocus: !0,
                        type: u.Ta.Text,
                        value: this.state.firstName,
                        onChange: this.updateFirstName,
                        error: !ga.test(this.state.firstName)
                    }))), i.createElement(u.Xa, {
                        margin: {
                            bottom: 2
                        }
                    }, i.createElement(u.Ea, {
                        label: Object(p.d)("Middle Name", "ContactInfo"),
                        labelOptional: this.optionalText,
                        error: !ga.test(this.state.middleName),
                        errorMessage: this.invalidFormatErrorMessage,
                        "data-test-selector": ma.MIDDLE_NAME
                    }, i.createElement(u.Ra, {
                        type: u.Ta.Text,
                        value: this.state.middleName,
                        onChange: this.updateMiddleName,
                        error: !ga.test(this.state.middleName)
                    }))), i.createElement(u.Xa, {
                        margin: {
                            bottom: 2
                        }
                    }, i.createElement(u.Ea, {
                        label: Object(p.d)("Last Name", "ContactInfo"),
                        hint: Object(p.d)("Please type your full legal name. This must be the name shown on your income tax return used to report income.", "ContactInfo"),
                        error: !ga.test(this.state.lastName),
                        errorMessage: this.invalidFormatErrorMessage,
                        "data-test-selector": ma.LAST_NAME
                    }, i.createElement(u.Ra, {
                        type: u.Ta.Text,
                        value: this.state.lastName,
                        onChange: this.updateLastName,
                        error: !ga.test(this.state.lastName)
                    }))), i.createElement(u.Xa, {
                        margin: {
                            bottom: 2
                        }
                    }, i.createElement(Ka, {
                        onMonthChange: this.props.onMonthChange,
                        onDayChange: this.props.onDayChange,
                        onYearChange: this.props.onYearChange
                    })), i.createElement(u.Xa, {
                        margin: {
                            bottom: 2
                        }
                    }, i.createElement(u.Ea, {
                        label: Object(p.d)("Email", "ContactInfo"),
                        hint: Object(p.d)("We will use this email to send you important tax documentation and payout information.", "ContactInfo"),
                        error: this.showEmailError,
                        errorMessage: this.invalidEmailErrorMessage,
                        "data-test-selector": ma.EMAIL
                    }, i.createElement(u.Ra, {
                        type: u.Ta.Email,
                        value: this.state.email,
                        onChange: this.updateEmail,
                        onFocus: this.onEmailFocus,
                        onBlur: this.onEmailBlur,
                        error: this.showEmailError
                    }))), i.createElement(u.Xa, {
                        margin: {
                            bottom: 2
                        }
                    }, i.createElement(u.Ea, {
                        label: Object(p.d)("Confirm Email", "ContactInfo"),
                        error: this.showConfirmEmailError,
                        errorMessage: Object(p.d)("Email addresses must match.", "ContactInfo"),
                        "data-test-selector": ma.CONFIRM_EMAIL
                    }, i.createElement(u.Ra, {
                        type: u.Ta.Email,
                        value: this.state.confirmEmail,
                        onChange: this.updateConfirmEmail,
                        onFocus: this.onConfirmEmailFocus,
                        onBlur: this.onConfirmEmailBlur,
                        error: this.showConfirmEmailError
                    }))), i.createElement(u.Xa, null, i.createElement(u.Ea, {
                        label: Object(p.d)("Company Legal Name", "ContactInfo"),
                        labelOptional: this.optionalText,
                        error: !ga.test(this.state.companyName),
                        errorMessage: this.invalidFormatErrorMessage,
                        "data-test-selector": ma.COMPANY_LEGAL_NAME
                    }, i.createElement(u.Ra, {
                        type: u.Ta.Text,
                        value: this.state.companyName,
                        onChange: this.updateCompanyName,
                        error: !ga.test(this.state.companyName)
                    }))))
                }, Object.defineProperty(t.prototype, "showEmailError", {
                    get: function() {
                        return !this.state.emailFocused && !!this.state.email && !ha.test(this.state.email)
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
            }(Ea || (Ea = {}));
            var Sa = function(e) {
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
                        return ba()
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "invalidEmailErrorMessage", {
                    get: function() {
                        return fa()
                    },
                    enumerable: !0,
                    configurable: !0
                }), t.prototype.render = function() {
                    return i.createElement(u.Xa, {
                        padding: 2
                    }, i.createElement(u.Xa, {
                        margin: {
                            bottom: 2
                        }
                    }, i.createElement(u.Ea, {
                        label: Object(p.d)("Parent or Legal Guardian Name", "ParentInfo"),
                        error: !ga.test(this.state.parentName),
                        errorMessage: this.invalidFormatErrorMessage,
                        "data-test-selector": Ea.PARENT_NAME
                    }, i.createElement(u.Ra, {
                        type: u.Ta.Text,
                        value: this.state.parentName,
                        onChange: this.updateParentName,
                        error: !ga.test(this.state.parentName)
                    }))), i.createElement(u.Xa, null, i.createElement(u.Ea, {
                        label: Object(p.d)("Parent or Legal Guardian Email", "ParentInfo"),
                        hint: Object(p.d)("Individuals under the age of 18 must provide parent or legal guardian information.", "ParentInfo"),
                        error: !!this.state.parentEmail && !ha.test(this.state.parentEmail),
                        errorMessage: this.invalidEmailErrorMessage,
                        "data-test-selector": Ea.PARENT_EMAIL
                    }, i.createElement(u.Ra, {
                        type: u.Ta.Email,
                        value: this.state.parentEmail,
                        onChange: this.updateParentEmail,
                        error: !!this.state.parentEmail && !ha.test(this.state.parentEmail)
                    }))))
                }, t
            }(i.Component);

            function ka(e) {
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
            var Na = ["AB", "BC", "MB", "NB", "NL", "NT", "NS", "NU", "ON", "PE", "QC", "SK", "YT"],
                Ta = n("Jgup");

            function Oa(e) {
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
            var Ca, Pa = ["AL", "AK", "AZ", "AR", "AA", "AE", "AP", "CA", "CO", "CT", "DE", "DC", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"],
                Aa = ["A1", "A2", "AP", "CU", "EU", "IR", "KP", "MM", "SD", "SS", "SY", "TL"];
            ! function(e) {
                e.COUNTRY = "permanent-address__country", e.STREET_ADDRESS = "permanent-address__street-address", e.STREET_ADDRESS_2 = "permanent-address__street-address-2", e.CITY = "permanent-address__city", e.STATE = "permanent-address__state", e.POSTAL = "permanent-address__postal"
            }(Ca || (Ca = {}));
            var Ia, _a = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            country: "",
                            streetAddress: "",
                            streetAddress2: "",
                            city: "",
                            state: "",
                            postal: ""
                        }, t.countrySelections = Ta.a.map(function(e) {
                            return Aa.includes(e) ? null : i.createElement("option", {
                                value: e,
                                key: "countryCode-" + e
                            }, Object(Ta.b)(e))
                        }), t.usaStateSelections = Pa.map(function(e) {
                            return i.createElement("option", {
                                value: e,
                                key: "usaStateCode-" + e
                            }, Oa(e))
                        }), t.canadaStateSelections = Na.map(function(e) {
                            return i.createElement("option", {
                                value: e,
                                key: "canadaState-" + e
                            }, ka(e))
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
                            return ba()
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "optionalText", {
                        get: function() {
                            return va()
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t.prototype.render = function() {
                        return i.createElement(i.Fragment, null, i.createElement(u.Xa, {
                            padding: {
                                x: 2,
                                top: 2,
                                bottom: 0
                            }
                        }, i.createElement(u.W, {
                            fontSize: u.Ca.Size6
                        }, Object(p.d)("Your permanent address is your primary residential address. It is not your P.O. Box or mailing address. If you are a college student studying in another state, but still have a permanent address in your home state (such as your parents' house), then your home state is your principal residence address. If you are registering on behalf of a corporation, please input the primary headquarters address.", "PermanentAddress"))), i.createElement(u.Xa, {
                            className: "payout-onboarding-registration__form-container",
                            padding: 2
                        }, i.createElement(u.Xa, {
                            margin: {
                                bottom: 2
                            }
                        }, i.createElement(u.Ea, {
                            label: Object(p.d)("Country", "PermanentAddress")
                        }, i.createElement(u.xb, {
                            defaultValue: "",
                            onChange: this.handleCountryChange,
                            "data-test-selector": Ca.COUNTRY
                        }, i.createElement("option", {
                            value: "",
                            disabled: !0
                        }), this.countrySelections))), i.createElement(u.Xa, {
                            margin: {
                                bottom: 2
                            }
                        }, i.createElement(u.Ea, {
                            label: Object(p.d)("Street Address", "PermanentAddress"),
                            error: !ga.test(this.state.streetAddress),
                            errorMessage: this.invalidFormatErrorMessage,
                            "data-test-selector": Ca.STREET_ADDRESS
                        }, i.createElement(u.Ra, {
                            type: u.Ta.Text,
                            value: this.state.streetAddress,
                            onChange: this.handleStreetAddressChange,
                            error: !ga.test(this.state.streetAddress)
                        }))), i.createElement(u.Xa, {
                            margin: {
                                bottom: 2
                            }
                        }, i.createElement(u.Ea, {
                            label: Object(p.d)("Street Address 2", "PermanentAddress"),
                            labelOptional: this.optionalText,
                            error: !ga.test(this.state.streetAddress2),
                            errorMessage: this.invalidFormatErrorMessage,
                            "data-test-selector": Ca.STREET_ADDRESS_2
                        }, i.createElement(u.Ra, {
                            type: u.Ta.Text,
                            value: this.state.streetAddress2,
                            onChange: this.handleStreetAddress2Change,
                            error: !ga.test(this.state.streetAddress2)
                        }))), i.createElement(u.Xa, {
                            margin: {
                                bottom: 2
                            }
                        }, i.createElement(u.Ea, {
                            label: Object(p.d)("City or Town", "PermanentAddress"),
                            error: !ga.test(this.state.city),
                            errorMessage: this.invalidFormatErrorMessage,
                            "data-test-selector": Ca.CITY
                        }, i.createElement(u.Ra, {
                            type: u.Ta.Text,
                            value: this.state.city,
                            onChange: this.handleCityChange,
                            error: !ga.test(this.state.city)
                        }))), i.createElement(u.Xa, {
                            margin: {
                                bottom: 2
                            }
                        }, i.createElement(u.Ea, {
                            label: Object(p.d)("State/Province", "PermanentAddress"),
                            labelOptional: "US" !== this.state.country && "CA" !== this.state.country ? this.optionalText : void 0,
                            error: !ga.test(this.state.state),
                            errorMessage: this.invalidFormatErrorMessage,
                            "data-test-selector": Ca.STATE
                        }, "US" === this.state.country && i.createElement(u.xb, {
                            onChange: this.handleStateSelectionChange
                        }, this.usaStateSelections), "CA" === this.state.country && i.createElement(u.xb, {
                            onChange: this.handleStateSelectionChange
                        }, this.canadaStateSelections), "US" !== this.state.country && "CA" !== this.state.country && i.createElement(u.Ra, {
                            type: u.Ta.Text,
                            value: this.state.state,
                            onChange: this.handleStateInputChange,
                            error: !ga.test(this.state.state)
                        }))), i.createElement(u.Xa, null, i.createElement(u.Ea, {
                            label: Object(p.d)("Zip Code/Postal Code", "PermanentAddress"),
                            labelOptional: "US" !== this.state.country ? this.optionalText : void 0,
                            error: !ga.test(this.state.postal),
                            errorMessage: this.invalidFormatErrorMessage,
                            "data-test-selector": Ca.POSTAL
                        }, i.createElement(u.Ra, {
                            type: u.Ta.Text,
                            value: this.state.postal,
                            onChange: this.handlePostalChange,
                            onBlur: this.formatUniquePostalCodes,
                            error: !ga.test(this.state.postal)
                        })))))
                    }, t
                }(i.Component),
                wa = function() {
                    return Object(p.d)("Please fill them out using the following guidelines: <x:link>Amazon Tax Information Interview Guidelines</x:link>", {
                        "x:link": function(e) {
                            return i.createElement(u.U, {
                                to: "https://help.twitch.tv/customer/portal/articles/2083680",
                                targetBlank: !0
                            }, e)
                        }
                    }, "RegistrationInfoBrick")
                },
                Ra = function() {
                    return i.createElement(i.Fragment, null, i.createElement(u.Xa, {
                        margin: {
                            bottom: 1
                        }
                    }, i.createElement(u.W, {
                        fontSize: u.Ca.Size6
                    }, Object(p.d)("Financial information is required to validate your identity. Further, providing this information enables you to participate with any monetization features that may become available.", "RegistrationInfoBrick"))), i.createElement(u.Xa, {
                        margin: {
                            bottom: 1
                        }
                    }, i.createElement(u.W, {
                        fontSize: u.Ca.Size6
                    }, Object(p.d)("Twitch is a subsidiary of Amazon and will use some Amazon tools to register and approve your information for Extensions development.", "RegistrationInfoBrick"))), i.createElement(u.Xa, {
                        margin: {
                            bottom: 1
                        }
                    }, i.createElement(u.W, {
                        fontSize: u.Ca.Size6
                    }, wa())), i.createElement(u.Xa, {
                        margin: {
                            bottom: 1
                        }
                    }, i.createElement(u.W, {
                        fontSize: u.Ca.Size6
                    }, Object(p.d)("If you are registering on behalf of a company, please fill in the company's information. If you are an individual, please use your personal information.", "RegistrationInfoBrick"))), i.createElement(u.Xa, {
                        margin: {
                            bottom: 1
                        }
                    }, i.createElement(u.W, {
                        fontSize: u.Ca.Size6
                    }, Object(p.d)("The form must match your tax information exactly and any inconsistencies may cause delays in your registration approval.", "RegistrationInfoBrick"))), i.createElement(u.Xa, null, i.createElement(u.W, {
                        fontSize: u.Ca.Size6
                    }, Object(p.d)("You will be able to edit this page later if your information changes.", "RegistrationInfoBrick"))))
                },
                Da = function() {
                    return i.createElement(i.Fragment, null, i.createElement(u.Xa, {
                        margin: {
                            bottom: 1
                        }
                    }, i.createElement(u.W, {
                        fontSize: u.Ca.Size6
                    }, Object(p.d)("Twitch is a subsidiary of Amazon, and will use some Amazon tools to help you get paid, including the forms on this page.", "RegistrationInfoBrick"))), i.createElement(u.Xa, {
                        margin: {
                            bottom: 1
                        }
                    }, i.createElement(u.W, {
                        fontSize: u.Ca.Size6
                    }, wa())), i.createElement(u.W, {
                        fontSize: u.Ca.Size6
                    }, Object(p.d)("This form must match your tax information exactly, and any inconsistencies may cause delays in your Payout Registration approval. Don't worry, you will still be able to edit this page later on if your information changes.", "RegistrationInfoBrick")))
                },
                xa = function(e) {
                    return i.createElement(i.Fragment, null, e.onboardEntity === d.D.EXTENSIONS_DEVELOPER ? i.createElement(Ra, null) : i.createElement(Da, null))
                };
            ! function(e) {
                e.MONTH = "select-birthdate__month", e.YEAR = "select-birthdate__year", e.DAY = "select-birthdate__day"
            }(Ia || (Ia = {}));
            for (var Fa = [], ja = (new Date).getFullYear(), Ua = ja; Ua > ja - 100; Ua--) Fa.push(i.createElement("option", {
                value: Ua,
                key: "year-" + Ua
            }, Ua));
            var La, Ma, Ba, Xa, Wa, Va, za, qa, Ga, Ya, Ha, Qa, $a, Za, Ka = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            month: void 0,
                            year: void 0,
                            day: void 0
                        }, t.yearSelections = Fa, t.handleMonthChange = function(e) {
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
                            return Object(Bn.differenceInYears)(new Date, o) < e
                        }, t
                    }
                    return a.__extends(t, e), Object.defineProperty(t.prototype, "daySelections", {
                        get: function() {
                            for (var e = this.state.month, t = this.state.year || ja, n = void 0 !== e ? new Date(t, e + 1, 0).getDate() : 31, a = [], r = 1; r <= n; r++) a.push(i.createElement("option", {
                                value: r,
                                key: "day-" + r
                            }, r));
                            return a
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t.prototype.render = function() {
                        return i.createElement(u.Ea, {
                            label: Object(p.d)("Date of Birth", "SelectBirthdate"),
                            hint: Object(p.d)("If you are registering on behalf of a company, please use your personal date of birth.", "SelectBirthdate"),
                            error: this.isUserYoungerThan(13),
                            errorMessage: Object(p.d)("You must be 13 or older to continue.", "SelectBirthdate")
                        }, i.createElement(u.Ja, {
                            gutterSize: u.Ka.Small
                        }, i.createElement(u.P, {
                            cols: {
                                default: 4
                            }
                        }, i.createElement(u.xb, {
                            defaultValue: "",
                            onChange: this.handleMonthChange,
                            "data-test-selector": Ia.MONTH
                        }, i.createElement("option", {
                            value: "",
                            disabled: !0
                        }, Object(p.d)("Month", "SelectBirthdate")), i.createElement("option", {
                            value: 0
                        }, Object(p.d)("January", "SelectBirthdate")), i.createElement("option", {
                            value: 1
                        }, Object(p.d)("February", "SelectBirthdate")), i.createElement("option", {
                            value: 2
                        }, Object(p.d)("March", "SelectBirthdate")), i.createElement("option", {
                            value: 3
                        }, Object(p.d)("April", "SelectBirthdate")), i.createElement("option", {
                            value: 4
                        }, Object(p.d)("May", "SelectBirthdate")), i.createElement("option", {
                            value: 5
                        }, Object(p.d)("June", "SelectBirthdate")), i.createElement("option", {
                            value: 6
                        }, Object(p.d)("July", "SelectBirthdate")), i.createElement("option", {
                            value: 7
                        }, Object(p.d)("August", "SelectBirthdate")), i.createElement("option", {
                            value: 8
                        }, Object(p.d)("September", "SelectBirthdate")), i.createElement("option", {
                            value: 9
                        }, Object(p.d)("October", "SelectBirthdate")), i.createElement("option", {
                            value: 10
                        }, Object(p.d)("November", "SelectBirthdate")), i.createElement("option", {
                            value: 11
                        }, Object(p.d)("December", "SelectBirthdate")))), i.createElement(u.P, {
                            cols: {
                                default: 4
                            }
                        }, i.createElement(u.xb, {
                            defaultValue: "",
                            onChange: this.handleDayChange,
                            "data-test-selector": Ia.DAY
                        }, i.createElement("option", {
                            value: "",
                            disabled: !0
                        }, Object(p.d)("Day", "SelectBirthdate")), this.daySelections)), i.createElement(u.P, {
                            cols: {
                                default: 4
                            }
                        }, i.createElement(u.xb, {
                            defaultValue: "",
                            onChange: this.handleYearChange,
                            "data-test-selector": Ia.YEAR
                        }, i.createElement("option", {
                            value: "",
                            disabled: !0
                        }, Object(p.d)("Year", "SelectBirthdate")), this.yearSelections))))
                    }, t
                }(i.Component),
                Ja = n("8HtN"),
                ei = n("tKvv"),
                ti = (n("dxDy"), function(e) {
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
                            return Object(Bn.differenceInYears)(new Date, o) < e
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
                                            r = Object(k.a)({
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
                                            }), [2]) : (this.props.updateStepDisplayed(Dn.Agreement), [3, 4]);
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
                        if (!this.props.currentStep || this.props.currentStep !== d.E.REGISTRATION_NOT_STARTED) {
                            var e = Object(k.a)({
                                targetUserID: this.props.userID
                            });
                            this.props.startPayoutOnboardingWorkflow(e)
                        }
                    }, t.prototype.render = function() {
                        var e = i.createElement(u.z, {
                            "data-test-selector": "payout-onboarding-registration__continue-button",
                            disabled: !this.isRegistrationComplete || this.state.submittingRegistration,
                            state: this.state.submittingRegistration ? u.E.Loading : u.E.Default,
                            onClick: this.handleContinueClick
                        }, Object(p.d)("Continue", "PayoutOnboardingRegistration"));
                        return i.createElement(I.a, {
                            footer: e
                        }, i.createElement(A.a, null, i.createElement(xa, {
                            onboardEntity: this.props.onboardEntity
                        })), i.createElement(Gn, {
                            title: Object(p.d)("Contact Info", "PayoutOnboardingRegistration")
                        }), i.createElement(u.Xa, {
                            className: "payout-onboarding-registration__form-container"
                        }, i.createElement(ya, {
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
                        })), i.createElement(Gn, {
                            title: Object(p.d)("Permanent Address", "PayoutOnboardingRegistration")
                        }), i.createElement(_a, {
                            onCountryChange: this.updateCountry,
                            onStreetAddressChange: this.updateStreetAddress,
                            onStreetAddress2Change: this.updateStreetAddress2,
                            onCityChange: this.updateCity,
                            onStateChange: this.updateState,
                            onPostalChange: this.updatePostal
                        }), this.isUserYoungerThan(18) && i.createElement(i.Fragment, null, i.createElement(Gn, {
                            title: Object(p.d)("Parent Info", "PayoutOnboardingRegistration")
                        }), i.createElement(u.Xa, {
                            className: "payout-onboarding-registration__form-container"
                        }, i.createElement(Sa, {
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
                            return ha.test(this.state.email) && this.state.email === this.state.confirmEmail
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "validAge", {
                        get: function() {
                            return !this.isUserYoungerThan(13) && !(this.isUserYoungerThan(18) && !(this.state.parentName && ga.test(this.state.parentName) && this.state.parentEmail && ha.test(this.state.parentEmail)))
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "validInputFormat", {
                        get: function() {
                            return !!(ga.test(this.state.firstName) && ga.test(this.state.lastName) && ga.test(this.state.country) && ga.test(this.state.streetAddress) && ga.test(this.state.city)) && !(this.state.middleName && !ga.test(this.state.middleName) || this.state.companyName && !ga.test(this.state.companyName) || this.state.streetAddress2 && !ga.test(this.state.streetAddress2) || this.state.state && !ga.test(this.state.state) || this.state.postal && !ga.test(this.state.postal))
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t
                }(i.Component)),
                ni = Object(v.compose)(Object(b.a)(ei, {
                    name: "startPayoutOnboardingWorkflow"
                }), Object(b.a)(Ja, {
                    name: "registerPayoutInformation"
                }))(ti),
                ai = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.handleContinueClick = function() {
                            t.props.updateStepDisplayed(Dn.Summary)
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        return i.createElement(I.a, null, i.createElement(Gn, {
                            title: Object(p.d)("Partnership Approval", "PayoutOnboardingReview"),
                            statusText: this.statusText,
                            statusType: this.statusType,
                            borderTop: !0
                        }), i.createElement(u.Bb, {
                            borderTop: !0,
                            borderBottom: !0,
                            padding: 2
                        }, i.createElement(u.Bb, {
                            borderMarked: !0,
                            padding: 2
                        }, this.inReview ? Object(p.d)("Your information is currently under review.", "PayoutOnboardingReview") : Object(p.d)("Your information has been validated by the Partnership Team.", "PayoutOnboardingReview"))), i.createElement(u.Xa, {
                            padding: 2
                        }, i.createElement(u.z, {
                            onClick: this.handleContinueClick,
                            disabled: this.inReview
                        }, Object(p.d)("Continue", "PayoutOnboardingReview"))))
                    }, Object.defineProperty(t.prototype, "inReview", {
                        get: function() {
                            return this.props.currentStep === d.E.REVIEW_PENDING
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
                            return this.inReview ? u.fb.Prime : u.fb.Success
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t
                }(i.Component),
                ii = function() {
                    return Object(p.d)("Partner Onboarding", "PayoutOnboardingContainer")
                },
                ri = function() {
                    return Object(p.d)("Manage or modify your payout information.", "PayoutOnboardingContainer")
                },
                oi = function() {
                    return Object(p.d)("Payout Registration", "PayoutOnboardingContainer")
                },
                si = function() {
                    return Object(p.d)("Begin your payout registration.", "PayoutOnboardingContainer")
                },
                li = function() {
                    return Object(p.d)("Twitch Partner Agreement", "PayoutOnboardingContainer")
                },
                di = function() {
                    return Object(p.d)("Agree to the Twitch Partner Agreement.", "PayoutOnboardingContainer")
                },
                ci = function() {
                    return Object(p.d)("Tax Interviews", "PayoutOnboardingContainer")
                },
                ui = function() {
                    return Object(p.d)("Submit your tax information. The two forms below are very similar, but the information is used for different situations, so both forms are required and should be filled out carefully.", "PayoutOnboardingContainer")
                },
                mi = function() {
                    return Object(p.d)("Payout Setup", "PayoutOnboardingContainer")
                },
                pi = function() {
                    return Object(p.d)("Choose your payout method.", "PayoutOnboardingContainer")
                },
                gi = ((La = {})[Dn.Summary] = {
                    title: (Ma = {}, Ma[d.D.AFFILIATE] = function() {
                        return Object(p.d)("Affiliate Onboarding", "PayoutOnboardingContainer")
                    }, Ma[d.D.EXTENSIONS_DEVELOPER] = function() {
                        return Object(p.d)("Extensions Developer Onboarding", "PayoutOnboardingContainer")
                    }, Ma[d.D.STANDARD_PARTNER] = function() {
                        return ii()
                    }, Ma[d.D.PREMIUM_PARTNER] = function() {
                        return ii()
                    }, Ma[d.D.CUSTOM_PARTNER] = function() {
                        return ii()
                    }, Ma),
                    description: (Ba = {}, Ba[d.D.AFFILIATE] = function() {
                        return ri()
                    }, Ba[d.D.EXTENSIONS_DEVELOPER] = function() {
                        return Object(p.d)("Manage or modify your Extensions Developer Onboarding.", "PayoutOnboardingContainer")
                    }, Ba[d.D.STANDARD_PARTNER] = function() {
                        return ri()
                    }, Ba[d.D.PREMIUM_PARTNER] = function() {
                        return ri()
                    }, Ba[d.D.CUSTOM_PARTNER] = function() {
                        return ri()
                    }, Ba)
                }, La[Dn.Registration] = {
                    title: (Xa = {}, Xa[d.D.AFFILIATE] = function() {
                        return oi()
                    }, Xa[d.D.EXTENSIONS_DEVELOPER] = function() {
                        return Object(p.d)("Extensions Developer Registration", "PayoutOnboardingContainer")
                    }, Xa[d.D.STANDARD_PARTNER] = function() {
                        return oi()
                    }, Xa[d.D.PREMIUM_PARTNER] = function() {
                        return oi()
                    }, Xa[d.D.CUSTOM_PARTNER] = function() {
                        return oi()
                    }, Xa),
                    description: (Wa = {}, Wa[d.D.AFFILIATE] = function() {
                        return si()
                    }, Wa[d.D.EXTENSIONS_DEVELOPER] = function() {
                        return Object(p.d)("Begin your Extensions Developer Registration.", "PayoutOnboardingContainer")
                    }, Wa[d.D.STANDARD_PARTNER] = function() {
                        return si()
                    }, Wa[d.D.PREMIUM_PARTNER] = function() {
                        return si()
                    }, Wa[d.D.CUSTOM_PARTNER] = function() {
                        return si()
                    }, Wa)
                }, La[Dn.Agreement] = {
                    title: (Va = {}, Va[d.D.AFFILIATE] = function() {
                        return Object(p.d)("Twitch Affiliate Agreement", "PayoutOnboardingContainer")
                    }, Va[d.D.EXTENSIONS_DEVELOPER] = function() {
                        return Object(p.d)("Twitch Extensions Developer Agreement", "PayoutOnboardingContainer")
                    }, Va[d.D.STANDARD_PARTNER] = function() {
                        return li()
                    }, Va[d.D.PREMIUM_PARTNER] = function() {
                        return li()
                    }, Va[d.D.CUSTOM_PARTNER] = function() {
                        return li()
                    }, Va),
                    description: (za = {}, za[d.D.AFFILIATE] = function() {
                        return Object(p.d)("Agree to the Twitch Affiliate Agreement.", "PayoutOnboardingContainer")
                    }, za[d.D.EXTENSIONS_DEVELOPER] = function() {
                        return Object(p.d)("Agree to the Twitch Extensions Developer Agreement.", "PayoutOnboardingContainer")
                    }, za[d.D.STANDARD_PARTNER] = function() {
                        return di()
                    }, za[d.D.PREMIUM_PARTNER] = function() {
                        return di()
                    }, za[d.D.CUSTOM_PARTNER] = function() {
                        return di()
                    }, za)
                }, La[Dn.TaxInterview] = {
                    title: (qa = {}, qa[d.D.AFFILIATE] = function() {
                        return ci()
                    }, qa[d.D.EXTENSIONS_DEVELOPER] = function() {
                        return ci()
                    }, qa[d.D.STANDARD_PARTNER] = function() {
                        return ci()
                    }, qa[d.D.PREMIUM_PARTNER] = function() {
                        return ci()
                    }, qa[d.D.CUSTOM_PARTNER] = function() {
                        return ci()
                    }, qa),
                    description: (Ga = {}, Ga[d.D.AFFILIATE] = function() {
                        return ui()
                    }, Ga[d.D.EXTENSIONS_DEVELOPER] = function() {
                        return ui()
                    }, Ga[d.D.STANDARD_PARTNER] = function() {
                        return ui()
                    }, Ga[d.D.PREMIUM_PARTNER] = function() {
                        return ui()
                    }, Ga[d.D.CUSTOM_PARTNER] = function() {
                        return ui()
                    }, Ga)
                }, La[Dn.PayoutMethod] = {
                    title: (Ya = {}, Ya[d.D.AFFILIATE] = function() {
                        return mi()
                    }, Ya[d.D.EXTENSIONS_DEVELOPER] = function() {
                        return Object(p.d)("Financial Information", "PayoutOnboardingContainer")
                    }, Ya[d.D.STANDARD_PARTNER] = function() {
                        return mi()
                    }, Ya[d.D.PREMIUM_PARTNER] = function() {
                        return mi()
                    }, Ya[d.D.CUSTOM_PARTNER] = function() {
                        return mi()
                    }, Ya),
                    description: (Ha = {}, Ha[d.D.AFFILIATE] = function() {
                        return pi()
                    }, Ha[d.D.EXTENSIONS_DEVELOPER] = function() {
                        return Object(p.d)("Submit your financial information.", "PayoutOnboardingContainer")
                    }, Ha[d.D.STANDARD_PARTNER] = function() {
                        return pi()
                    }, Ha[d.D.PREMIUM_PARTNER] = function() {
                        return pi()
                    }, Ha[d.D.CUSTOM_PARTNER] = function() {
                        return pi()
                    }, Ha)
                }, La[Dn.Review] = {
                    title: (Qa = {}, Qa[d.D.CUSTOM_PARTNER] = function() {
                        return Object(p.d)("Partnership Approval", "PayoutOnboardingContainer")
                    }, Qa),
                    description: ($a = {}, $a[d.D.CUSTOM_PARTNER] = function() {
                        return Object(p.d)("The Partnership Team will validate your paperwork and activate your new agreement.", "PayoutOnboardingContainer")
                    }, $a)
                }, La),
                hi = function() {
                    return Object(p.d)("Continue", "InProgressInfo")
                },
                bi = function(e) {
                    var t = e.onboardEntity === d.D.EXTENSIONS_DEVELOPER;
                    return i.createElement(u.Xa, {
                        margin: {
                            bottom: 1
                        }
                    }, i.createElement(u.Pa, {
                        margin: {
                            bottom: 1
                        }
                    }, i.createElement(u.W, {
                        type: u.Rb.P
                    }, t ? Object(p.d)("Your developer registration is currently in progress. Please click {buttonLabel} to pick up where you left off.", {
                        buttonLabel: hi()
                    }, "InProgressInfo") : Object(p.d)("Your payout setup is currently in progress. Please click {buttonLabel} to pick up where you left off.", {
                        buttonLabel: hi()
                    }, "InProgressInfo"))), e.startOverEnabled && i.createElement(i.Fragment, null, i.createElement(u.Pa, {
                        margin: {
                            bottom: 1
                        }
                    }, i.createElement(u.W, {
                        type: u.Rb.P
                    }, Object(p.d)("If you would like to modify your information, please click {buttonLabel}.", {
                        buttonLabel: Object(p.d)("Start Over", "InProgressInfo")
                    }, "InProgressInfo"))), i.createElement(u.W, {
                        type: u.Rb.P
                    }, t ? Object(p.d)("NOTE: Starting over will lose any progress.", "InProgressInfo") : Object(p.d)("NOTE: If you choose Start Over you will delete any stored payout information on your account and we will hold any payouts until you have fully completed the form.", "InProgressInfo"))))
                },
                fi = function(e) {
                    return i.createElement(i.Fragment, null, i.createElement(u.Pa, {
                        margin: {
                            bottom: 1
                        }
                    }, i.createElement(u.W, {
                        type: u.Rb.H4,
                        bold: !0
                    }, Object(p.d)("Setup Complete", "SetupCompleteInfo"))), e.onboardEntity === d.D.EXTENSIONS_DEVELOPER ? i.createElement(u.Pa, {
                        margin: {
                            bottom: 1
                        }
                    }, i.createElement(u.W, {
                        type: u.Rb.P
                    }, Object(p.d)("You made it! You’re all set. Return to the <x:link>Developer Portal.</x:link>", {
                        "x:link": function(e) {
                            return i.createElement(u.U, {
                                to: "https://dev.twitch.tv/dashboard"
                            }, e)
                        }
                    }, "SetupCompleteInfo"))) : i.createElement(u.Pa, {
                        margin: {
                            bottom: 1
                        }
                    }, i.createElement(u.W, {
                        type: u.Rb.P
                    }, Object(p.d)("You made it! You’re all set and no further action is needed.", "SetupCompleteInfo"))), i.createElement(u.Pa, {
                        margin: {
                            bottom: 1
                        }
                    }, i.createElement(u.W, {
                        type: u.Rb.P
                    }, Object(p.d)("If you want to change your payout information, click {buttonLabel} to reset the form.", {
                        buttonLabel: Object(p.d)("Start Over", "SetupCompleteInfo")
                    }, "SetupCompleteInfo"))))
                };
            ! function(e) {
                e.START_OVER_BUTTON = "progress-brick__start-over-button", e.CONTINUE_BUTTON = "progress-brick__continue-button"
            }(Za || (Za = {}));
            var vi, Ei = function(e) {
                var t = !(!e.currentStep || e.currentStep === d.E.ROYALTY_TAX_INTERVIEW_PENDING || e.currentStep === d.E.SERVICE_TAX_INTERVIEW_PENDING);
                return i.createElement(u.Bb, {
                    padding: 2,
                    borderLeft: !0,
                    borderRight: !0,
                    borderTop: !0
                }, i.createElement(u.Bb, {
                    borderMarked: !0,
                    padding: 2,
                    elevation: 1
                }, e.currentStep === d.E.COMPLETED ? i.createElement(fi, {
                    onboardEntity: e.onboardEntity
                }) : i.createElement(bi, {
                    onboardEntity: e.onboardEntity,
                    startOverEnabled: t
                }), i.createElement(u.Xa, {
                    display: u.X.Flex
                }, e.currentStep !== d.E.COMPLETED && i.createElement(u.Xa, {
                    margin: {
                        right: 1
                    }
                }, i.createElement(u.z, {
                    "data-test-selector": Za.CONTINUE_BUTTON,
                    onClick: function() {
                        return e.updateStepDisplayed(function(e) {
                            switch (e) {
                                case d.E.AGREEMENT_NOT_STARTED:
                                    return Dn.Agreement;
                                case d.E.ROYALTY_TAX_INTERVIEW_NOT_STARTED:
                                case d.E.ROYALTY_TAX_INTERVIEW_PENDING:
                                case d.E.ROYALTY_TAX_INTERVIEW_ACTION_REQUIRED:
                                case d.E.ROYALTY_TAX_INTERVIEW_MISMATCH:
                                case d.E.ROYALTY_TAX_INTERVIEW_FAILED:
                                case d.E.SERVICE_TAX_INTERVIEW_NOT_STARTED:
                                case d.E.SERVICE_TAX_INTERVIEW_PENDING:
                                case d.E.SERVICE_TAX_INTERVIEW_ACTION_REQUIRED:
                                case d.E.SERVICE_TAX_INTERVIEW_MISMATCH:
                                case d.E.SERVICE_TAX_INTERVIEW_FAILED:
                                    return Dn.TaxInterview;
                                case d.E.PAYOUT_METHOD_NOT_STARTED:
                                case d.E.PAYOUT_METHOD_PENDING:
                                    return Dn.PayoutMethod;
                                case d.E.REVIEW_PENDING:
                                    return Dn.Review;
                                default:
                                    return Dn.Summary
                            }
                        }(e.currentStep))
                    }
                }, Object(p.d)("Continue", "PayoutOnboardingSummary"))), t && i.createElement(u.z, {
                    "data-test-selector": Za.START_OVER_BUTTON,
                    type: u.F.Hollow,
                    onClick: e.showStartOverModal
                }, Object(p.d)("Start Over", "PayoutOnboardingSummary")))))
            };
            n("U1LZ");
            ! function(e) {
                e[e.NotStarted = 0] = "NotStarted", e[e.Pending = 1] = "Pending", e[e.Failed = 2] = "Failed", e[e.Completed = 3] = "Completed"
            }(vi || (vi = {}));
            var yi, Si = function(e) {
                    return i.createElement(u.Bb, {
                        borderLeft: !0,
                        borderRight: !0,
                        borderTop: !0
                    }, i.createElement(u.Ua, {
                        onClick: e.onClick,
                        disabled: !e.isEnabled,
                        type: u.Va.Alpha
                    }, i.createElement(u.Xa, {
                        padding: 2,
                        alignItems: u.f.Center,
                        display: u.X.Flex,
                        flexWrap: u.Ba.NoWrap
                    }, i.createElement(u.Xa, {
                        flexGrow: 1
                    }, i.createElement(u.Pa, {
                        margin: {
                            bottom: .5
                        }
                    }, i.createElement(u.W, {
                        type: u.Rb.H6,
                        bold: !0
                    }, e.title)), i.createElement(u.W, {
                        color: u.O.Alt2
                    }, e.description)), i.createElement(u.Xa, {
                        display: u.X.Flex,
                        alignItems: u.f.Center
                    }, (e.type === vi.Completed || e.isEnabled) && i.createElement(u.Xa, null, i.createElement(u.W, {
                        type: u.Rb.H4,
                        transform: u.Qb.Uppercase,
                        bold: !0
                    }, i.createElement(u.eb, {
                        label: function(e) {
                            switch (e) {
                                case vi.Pending:
                                    return Object(p.d)("Under Review", "ProgressRow");
                                case vi.Failed:
                                    return Object(p.d)("Failed", "ProgressRow");
                                case vi.Completed:
                                    return Object(p.d)("Completed", "ProgressRow");
                                default:
                                    return ""
                            }
                        }(e.type),
                        type: function(e) {
                            switch (e) {
                                case vi.NotStarted:
                                    return;
                                case vi.Pending:
                                    return u.fb.Prime;
                                case vi.Failed:
                                    return u.fb.Alert;
                                case vi.Completed:
                                    return u.fb.Success;
                                default:
                                    return
                            }
                        }(e.type)
                    }))), e.isEnabled && i.createElement(u.Xa, {
                        margin: {
                            left: 1
                        },
                        display: u.X.Flex,
                        alignItems: u.f.Center
                    }, i.createElement(u.qb, {
                        asset: u.rb.AngleRight
                    }))))))
                },
                ki = function() {
                    return Object(p.d)("Submit your tax information.", "PayoutOnboardingSummary")
                },
                Ni = function() {
                    return Object(p.d)("Choose your payout method.", "PayoutOnboardingSummary")
                },
                Ti = function() {
                    return Object(p.d)("Submit your financial information.", "PayoutOnboardingSummary")
                };
            ! function(e) {
                e.REGISTRATION = "registration-selector", e.AGREEMENT = "agreement-selector", e.TAX_INTERVIEW = "tax-interview-selector", e.PAYOUT_METHOD = "payout-method-selector", e.REVIEW = "review-selector"
            }(yi || (yi = {}));
            var Oi = function(e, t, n) {
                    return Object(p.d)("Step {numOfCurrentStep} of {numOfTotalSteps}: {stepTitle}", {
                        numOfCurrentStep: e,
                        numOfTotalSteps: t,
                        stepTitle: n
                    }, "ProgressRow")
                },
                Ci = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.updateStepDisplayed = function(e) {
                            return function() {
                                t.props.updateStepDisplayed(e)
                            }
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        return i.createElement(u.Bb, {
                            className: "payout-onboarding-summary",
                            background: u.r.Base,
                            borderBottom: !0,
                            borderRadius: {
                                bottomLeft: u.x.Medium,
                                bottomRight: u.x.Medium
                            }
                        }, this.isRegistrationComplete && i.createElement(Ei, {
                            currentStep: this.props.currentStep,
                            onboardEntity: this.props.onboardEntity,
                            updateStepDisplayed: this.props.updateStepDisplayed,
                            showStartOverModal: this.props.showStartOverModal
                        }), i.createElement(Si, {
                            "data-test-selector": yi.REGISTRATION,
                            title: this.step1Title,
                            description: this.step1Description,
                            type: this.step1Status,
                            onClick: this.updateStepDisplayed(Dn.Registration),
                            isEnabled: !this.isRegistrationComplete
                        }), i.createElement(Si, {
                            "data-test-selector": yi.AGREEMENT,
                            title: this.step2Title,
                            description: this.step2Description,
                            type: this.step2Status,
                            onClick: this.updateStepDisplayed(Dn.Agreement),
                            isEnabled: this.isRegistrationComplete && !this.isAgreementComplete
                        }), i.createElement(Si, {
                            "data-test-selector": yi.TAX_INTERVIEW,
                            title: this.step3Title,
                            description: this.step3Description,
                            type: this.step3Status,
                            onClick: this.updateStepDisplayed(Dn.TaxInterview),
                            isEnabled: this.isAgreementComplete && !this.isTaxInterviewComplete
                        }), i.createElement(Si, {
                            "data-test-selector": yi.PAYOUT_METHOD,
                            title: this.step4Title,
                            description: this.step4Description,
                            type: this.step4Status,
                            onClick: this.updateStepDisplayed(Dn.PayoutMethod),
                            isEnabled: this.isTaxInterviewComplete && !this.isPayoutMethodComplete
                        }), this.props.onboardEntity === d.D.CUSTOM_PARTNER && i.createElement(Si, {
                            "data-test-selector": yi.REVIEW,
                            title: this.step5Title,
                            description: this.step5Description,
                            type: this.step5Status,
                            onClick: this.updateStepDisplayed(Dn.Review),
                            isEnabled: this.isPayoutMethodComplete && !this.isReviewComplete
                        }))
                    }, Object.defineProperty(t.prototype, "isRegistrationComplete", {
                        get: function() {
                            return !(!this.props.currentStep || this.props.currentStep === d.E.CANCELED) && this.props.currentStep !== d.E.REGISTRATION_NOT_STARTED
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "isAgreementComplete", {
                        get: function() {
                            return !(!this.isRegistrationComplete || !this.props.currentStep || this.props.currentStep === d.E.AGREEMENT_NOT_STARTED)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "isTaxInterviewComplete", {
                        get: function() {
                            return !(!this.isAgreementComplete || !this.props.currentStep || this.props.currentStep === d.E.ROYALTY_TAX_INTERVIEW_NOT_STARTED || this.props.currentStep === d.E.ROYALTY_TAX_INTERVIEW_PENDING || this.props.currentStep === d.E.ROYALTY_TAX_INTERVIEW_FAILED || this.props.currentStep === d.E.ROYALTY_TAX_INTERVIEW_ACTION_REQUIRED || this.props.currentStep === d.E.ROYALTY_TAX_INTERVIEW_MISMATCH || this.props.currentStep === d.E.SERVICE_TAX_INTERVIEW_NOT_STARTED || this.props.currentStep === d.E.SERVICE_TAX_INTERVIEW_PENDING || this.props.currentStep === d.E.SERVICE_TAX_INTERVIEW_FAILED || this.props.currentStep === d.E.SERVICE_TAX_INTERVIEW_ACTION_REQUIRED || this.props.currentStep === d.E.SERVICE_TAX_INTERVIEW_MISMATCH)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "isPayoutMethodComplete", {
                        get: function() {
                            return !(!this.isTaxInterviewComplete || !this.props.currentStep || this.props.currentStep === d.E.PAYOUT_METHOD_NOT_STARTED || this.props.currentStep === d.E.PAYOUT_METHOD_PENDING)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "isReviewComplete", {
                        get: function() {
                            return !(!this.isPayoutMethodComplete || !this.props.currentStep || this.props.currentStep === d.E.REVIEW_PENDING)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "numOfTotalSteps", {
                        get: function() {
                            return this.props.onboardEntity === d.D.CUSTOM_PARTNER ? 5 : 4
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "step1Title", {
                        get: function() {
                            return Oi(Object(p.f)(1), Object(p.f)(this.numOfTotalSteps), gi[Dn.Registration].title[this.props.onboardEntity]())
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "step1Description", {
                        get: function() {
                            return this.props.onboardEntity === d.D.EXTENSIONS_DEVELOPER ? this.isRegistrationComplete ? Object(p.d)("Your Extensions Developer Registration is complete.", "PayoutOnboardingSummary") : Object(p.d)("Begin your Extensions Developer Registration.", "PayoutOnboardingSummary") : this.isRegistrationComplete ? Object(p.d)("Your payout registration is complete.", "PayoutOnboardingSummary") : Object(p.d)("Begin your payout registration.", "PayoutOnboardingSummary")
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "step1Status", {
                        get: function() {
                            return this.isRegistrationComplete ? vi.Completed : vi.NotStarted
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "step2Title", {
                        get: function() {
                            return Oi(Object(p.f)(2), Object(p.f)(this.numOfTotalSteps), gi[Dn.Agreement].title[this.props.onboardEntity]())
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "step2Description", {
                        get: function() {
                            switch (this.props.onboardEntity) {
                                case d.D.AFFILIATE:
                                    return this.isAgreementComplete ? Object(p.d)("You have agreed to the Twitch Affiliate Agreement.", "PayoutOnboardingSummary") : Object(p.d)("Agree to the Twitch Affiliate Agreement.", "PayoutOnboardingSummary");
                                case d.D.EXTENSIONS_DEVELOPER:
                                    return this.isAgreementComplete ? Object(p.d)("You have agreed to the Twitch Extensions Developer Agreement.", "PayoutOnboardingSummary") : Object(p.d)("Agree to the Twitch Extensions Developer Agreement.", "PayoutOnboardingSummary");
                                case d.D.STANDARD_PARTNER:
                                case d.D.PREMIUM_PARTNER:
                                case d.D.CUSTOM_PARTNER:
                                    return this.isAgreementComplete ? Object(p.d)("You have agreed to the Twitch Partner Agreement.", "PayoutOnboardingSummary") : Object(p.d)("Agree to the Twitch Partner Agreement.", "PayoutOnboardingSummary");
                                default:
                                    return ""
                            }
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "step2Status", {
                        get: function() {
                            return this.isAgreementComplete ? vi.Completed : vi.NotStarted
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "step3Title", {
                        get: function() {
                            return Oi(Object(p.f)(3), Object(p.f)(this.numOfTotalSteps), gi[Dn.TaxInterview].title[this.props.onboardEntity]())
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "step3Description", {
                        get: function() {
                            if (!this.props.currentStep || !this.isAgreementComplete) return ki();
                            switch (this.props.currentStep) {
                                case d.E.ROYALTY_TAX_INTERVIEW_NOT_STARTED:
                                    return ki();
                                case d.E.ROYALTY_TAX_INTERVIEW_PENDING:
                                    return Object(p.d)("Your royalty tax information is currently under review. This process usually takes a few minutes.", "PayoutOnboardingSummary");
                                case d.E.ROYALTY_TAX_INTERVIEW_FAILED:
                                case d.E.ROYALTY_TAX_INTERVIEW_ACTION_REQUIRED:
                                case d.E.ROYALTY_TAX_INTERVIEW_MISMATCH:
                                case d.E.SERVICE_TAX_INTERVIEW_FAILED:
                                case d.E.SERVICE_TAX_INTERVIEW_ACTION_REQUIRED:
                                case d.E.SERVICE_TAX_INTERVIEW_MISMATCH:
                                    return Object(p.d)("We could not successfully validate your tax information. Please review and correct your tax information.", "PayoutOnboardingSummary");
                                case d.E.SERVICE_TAX_INTERVIEW_NOT_STARTED:
                                    return Object(p.d)("Royalty tax approved. Please complete your service tax information.", "PayoutOnboardingSummary");
                                case d.E.SERVICE_TAX_INTERVIEW_PENDING:
                                    return Object(p.d)("Your service tax information is currently under review. This process usually takes a few minutes.", "PayoutOnboardingSummary");
                                default:
                                    return Object(p.d)("Your tax information has been successfully validated.", "PayoutOnboardingSummary")
                            }
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "step3Status", {
                        get: function() {
                            if (!this.props.currentStep || !this.isAgreementComplete) return vi.NotStarted;
                            switch (this.props.currentStep) {
                                case d.E.ROYALTY_TAX_INTERVIEW_NOT_STARTED:
                                    return vi.NotStarted;
                                case d.E.ROYALTY_TAX_INTERVIEW_PENDING:
                                    return vi.Pending;
                                case d.E.ROYALTY_TAX_INTERVIEW_FAILED:
                                case d.E.ROYALTY_TAX_INTERVIEW_ACTION_REQUIRED:
                                case d.E.ROYALTY_TAX_INTERVIEW_MISMATCH:
                                    return vi.Failed;
                                case d.E.SERVICE_TAX_INTERVIEW_NOT_STARTED:
                                    return vi.NotStarted;
                                case d.E.SERVICE_TAX_INTERVIEW_PENDING:
                                    return vi.Pending;
                                case d.E.SERVICE_TAX_INTERVIEW_FAILED:
                                case d.E.SERVICE_TAX_INTERVIEW_ACTION_REQUIRED:
                                case d.E.SERVICE_TAX_INTERVIEW_MISMATCH:
                                    return vi.Failed;
                                default:
                                    return vi.Completed
                            }
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "step4Title", {
                        get: function() {
                            return Oi(Object(p.f)(4), Object(p.f)(this.numOfTotalSteps), gi[Dn.PayoutMethod].title[this.props.onboardEntity]())
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "step4Description", {
                        get: function() {
                            var e = this.props.onboardEntity === d.D.EXTENSIONS_DEVELOPER;
                            return this.isTaxInterviewComplete ? this.props.currentStep === d.E.PAYOUT_METHOD_PENDING ? e ? Object(p.d)("Your financial information is currently under review. This process usually takes a few minutes.", "PayoutOnboardingSummary") : Object(p.d)("Your payout method is currently under review. This process usually takes a few minutes.", "PayoutOnboardingSummary") : this.isPayoutMethodComplete ? e ? Object(p.d)("Your financial information has been successfully validated.", "PayoutOnboardingSummary") : Object(p.d)("Your payout method has been successfully validated.", "PayoutOnboardingSummary") : e ? Ti() : Ni() : e ? Ti() : Ni()
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "step4Status", {
                        get: function() {
                            return this.isTaxInterviewComplete ? this.props.currentStep === d.E.PAYOUT_METHOD_PENDING ? vi.Pending : this.isPayoutMethodComplete ? vi.Completed : vi.NotStarted : vi.NotStarted
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "step5Title", {
                        get: function() {
                            return this.props.onboardEntity === d.D.CUSTOM_PARTNER ? Oi(Object(p.f)(5), Object(p.f)(this.numOfTotalSteps), gi[Dn.Review].title[this.props.onboardEntity]()) : ""
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "step5Description", {
                        get: function() {
                            return this.isPayoutMethodComplete ? this.props.currentStep === d.E.REVIEW_PENDING ? Object(p.d)("The Partnership Team is currently validating your paperwork.", "PayoutOnboardingSummary") : Object(p.d)("The Partnership Team has approved your new agreement.", "PayoutOnboardingSummary") : Object(p.d)("The Partnership Team will validate your paperwork and activate your new agreement.", "PayoutOnboardingSummary")
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "step5Status", {
                        get: function() {
                            return this.isPayoutMethodComplete ? this.props.currentStep === d.E.REVIEW_PENDING ? vi.Pending : vi.Completed : vi.NotStarted
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t
                }(i.Component),
                Pi = function(e) {
                    return Object(p.d)("Example {exampleNum}", {
                        exampleNum: Object(p.f)(e)
                    }, "TaxInfoBrick")
                },
                Ai = function(e) {
                    if (e.taxStatus === Yi.NotStarted || e.taxStatus === Yi.Completed) return null;
                    var t;
                    switch (e.taxStatus) {
                        case Yi.ActionRequired:
                            t = i.createElement(u.W, {
                                fontSize: u.Ca.Size6
                            }, Object(p.d)("Looks like you may need to mail documentation to Amazon to complete this process. However, you may be able to avoid this by consenting to electronic signature of your tax form. To do this, click the button below to retake the tax interview and be sure to check the box to consent to electronic signature.", "TaxInfoBrick"));
                            break;
                        case Yi.Failed:
                            t = i.createElement(u.W, {
                                fontSize: u.Ca.Size6
                            }, Object(p.d)("We could not successfully validate your tax information.", "TaxInfoBrick"));
                            break;
                        case Yi.Mismatch:
                            t = i.createElement(i.Fragment, null, i.createElement(u.Pa, {
                                margin: {
                                    bottom: 1
                                }
                            }, i.createElement(u.W, {
                                fontSize: u.Ca.Size6
                            }, Object(p.d)("Thank you for completing your tax interview. However, the details you have just entered into the tax form does not match the information on file from Step 1 (Registration). Your tax information from Steps 1 and 3 MUST match in order to receive payouts from Twitch.", "TaxInfoBrick"))), i.createElement(u.Pa, {
                                margin: {
                                    bottom: 1
                                }
                            }, i.createElement(u.W, {
                                fontSize: u.Ca.Size6
                            }, Pi(1))), i.createElement(u.Xa, {
                                margin: {
                                    left: 1,
                                    bottom: 1
                                }
                            }, i.createElement(u.W, {
                                fontSize: u.Ca.Size6
                            }, Object(p.d)("Step 1 user is John Doe from the United States of America.", "TaxInfoBrick")), i.createElement(u.W, {
                                fontSize: u.Ca.Size6
                            }, Object(p.d)("Step 3 tax information should be for John Doe from the United States of America.", "TaxInfoBrick")), i.createElement(u.W, {
                                fontSize: u.Ca.Size6
                            }, Object(p.d)("Step 4 selected payout method is check paid to John Doe from the United States of America.", "TaxInfoBrick"))), i.createElement(u.Pa, {
                                margin: {
                                    bottom: 1
                                }
                            }, i.createElement(u.W, {
                                fontSize: u.Ca.Size6
                            }, Pi(2))), i.createElement(u.Xa, {
                                margin: {
                                    left: 1,
                                    bottom: 1
                                }
                            }, i.createElement(u.W, {
                                fontSize: u.Ca.Size6
                            }, Object(p.d)("Step 1 user is John Doe working for Cool Gaming, Inc. from France.", "TaxInfoBrick")), i.createElement(u.W, {
                                fontSize: u.Ca.Size6
                            }, Object(p.d)("Step 3 tax information should be for Cool Gaming, Inc. from France.", "TaxInfoBrick")), i.createElement(u.W, {
                                fontSize: u.Ca.Size6
                            }, Object(p.d)("Step 4 selected payout method is a wire paid to Cool Gaming, Inc. from France.", "TaxInfoBrick"))), i.createElement(u.W, {
                                fontSize: u.Ca.Size6
                            }, Object(p.d)("Please see the list of errors below for the specific fields that require correction.", "TaxInfoBrick")));
                            break;
                        default:
                            return null
                    }
                    return i.createElement(u.Bb, {
                        padding: 2,
                        borderMarked: !0,
                        background: u.r.Base,
                        margin: {
                            bottom: 2
                        },
                        elevation: 1
                    }, t)
                },
                Ii = n("HGFl"),
                _i = function(e) {
                    return i.createElement(i.Fragment, null, i.createElement(u.Pa, {
                        margin: {
                            bottom: 1
                        }
                    }, i.createElement(u.W, {
                        fontSize: u.Ca.Size6
                    }, Object(p.d)("If you prefer not to consent to electronic signature, you will be required to mail additional documentation to Amazon. As a reminder, Twitch is a subsidiary of Amazon, and Amazon handles our tax forms. To proceed, please follow these instructions:", "TaxActionRequiredInfo"))), i.createElement(u.Xa, {
                        margin: {
                            bottom: 1
                        }
                    }, i.createElement(u.W, {
                        fontSize: u.Ca.Size6
                    }, Object(p.d)("1. Click the button below to retake the tax information interview.", "TaxActionRequiredInfo")), i.createElement(u.W, {
                        fontSize: u.Ca.Size6
                    }, Object(p.d)("2. Proceed to the page that asks you to print out a hardcopy of the tax form and print out the form.", "TaxActionRequiredInfo")), i.createElement(u.W, {
                        fontSize: u.Ca.Size6
                    }, Object(p.d)("3. Sign the form with a blue or black pen.", "TaxActionRequiredInfo")), i.createElement(u.W, {
                        fontSize: u.Ca.Size6
                    }, Object(p.d)("4. Mail the hardcopy of your tax form to:", "TaxActionRequiredInfo"))), i.createElement(u.Xa, {
                        margin: {
                            left: 2,
                            bottom: 1
                        }
                    }, i.createElement(u.W, {
                        fontSize: u.Ca.Size6
                    }, "Amazon"), i.createElement(u.W, {
                        fontSize: u.Ca.Size6
                    }, "Attn: FinOps Tax"), i.createElement(u.W, {
                        fontSize: u.Ca.Size6
                    }, "P.O. Box 80683"), i.createElement(u.W, {
                        fontSize: u.Ca.Size6
                    }, "Seattle, WA, 98108-0683"), i.createElement(u.W, {
                        fontSize: u.Ca.Size6
                    }, "U.S.A.")), i.createElement(u.Xa, {
                        margin: {
                            bottom: 1
                        }
                    }, i.createElement(u.W, {
                        fontSize: u.Ca.Size6
                    }, Object(p.d)("To assist Amazon with locating your account, please write the following at the top of the form in the white space:", "TaxActionRequiredInfo"))), i.createElement(u.Xa, {
                        margin: {
                            left: 2,
                            bottom: 1
                        }
                    }, i.createElement(u.W, {
                        fontSize: u.Ca.Size6
                    }, "Amazon subsidiary: Twitch Interactive, Inc."), i.createElement(u.W, {
                        fontSize: u.Ca.Size6
                    }, "Email address: ", e.email)))
                },
                wi = n("dOGv"),
                Ri = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        var e = this.props.data.currentUser && this.props.data.currentUser.payoutInvite && this.props.data.currentUser.payoutInvite.workflow && this.props.data.currentUser.payoutInvite.workflow.registration,
                            t = this.props.data.currentUser && this.props.data.currentUser.payoutInvite && this.props.data.currentUser.payoutInvite.workflow && this.props.data.currentUser.payoutInvite.workflow.taxMismatchErrors;
                        if (!e || !t) return null;
                        var n = t.map(function(t, n) {
                            var a, r;
                            if (t === d.P.NAME) a = Object(p.d)("Name", "TaxMismatchSpecificErrors"), r = e.companyName ? e.companyName : [e.firstName, e.middleName, e.lastName].filter(function(e) {
                                return null !== e
                            }).join(" ");
                            else if (t === d.P.EMAIL) a = Object(p.d)("Email", "TaxMismatchSpecificErrors"), r = e.email;
                            else if (t === d.P.STREET_ADDRESS) a = Object(p.d)("Street Address", "TaxMismatchSpecificErrors"), r = e.streetAddress;
                            else if (t === d.P.STREET_ADDRESS_2) a = Object(p.d)("Street Address 2", "TaxMismatchSpecificErrors"), r = e.streetAddress2;
                            else if (t === d.P.CITY) a = Object(p.d)("City or Town", "TaxMismatchSpecificErrors"), r = e.city;
                            else if (t === d.P.STATE) a = Object(p.d)("State/Province", "TaxMismatchSpecificErrors"), r = "US" === e.countryCode ? Oa(e.stateCode || "") : "CA" === e.countryCode ? ka(e.stateCode || "") : e.stateCode;
                            else if (t === d.P.COUNTRY) a = Object(p.d)("Country", "TaxMismatchSpecificErrors"), r = Object(Ta.b)(e.countryCode || "");
                            else {
                                if (t !== d.P.POSTAL) return null;
                                a = Object(p.d)("Zip Code/Postal Code", "TaxMismatchSpecificErrors"), r = e.postal
                            }
                            return i.createElement(u.Pa, {
                                key: a + n,
                                padding: {
                                    left: 1
                                }
                            }, i.createElement(u.W, {
                                fontSize: u.Ca.Size6
                            }, i.createElement(u.W, {
                                bold: !0,
                                type: u.Rb.Span
                            }, a), " ", r))
                        });
                        return i.createElement(i.Fragment, null, i.createElement(u.Pa, {
                            margin: {
                                bottom: 1
                            }
                        }, i.createElement(u.W, {
                            type: u.Rb.P,
                            color: u.O.Error,
                            bold: !0
                        }, Object(p.d)("Specific Errors", "TaxMismatchSpecificErrors"))), i.createElement(u.Pa, {
                            margin: {
                                bottom: 1
                            }
                        }, i.createElement(u.W, {
                            fontSize: u.Ca.Size6
                        }, Object(p.d)("The following data you entered in Step 1 does not match the data entered on the tax interview in Step 3:", "TaxMismatchSpecificErrors"))), i.createElement(u.Xa, {
                            margin: {
                                bottom: 1
                            }
                        }, n), i.createElement(u.Pa, {
                            margin: {
                                bottom: 1
                            }
                        }, i.createElement(u.W, {
                            fontSize: u.Ca.Size6
                        }, Object(p.d)("To fix this, please click the button below to edit your tax form and correct these values. Alternatively, if the tax form has the correct information, you can choose to edit Step 1 instead. To do this, click the button below and then click {buttonLabel} to reset the onboarding flow.", {
                            buttonLabel: Object(p.d)("Start Over", "TaxMismatchSpecificErrors")
                        }, "TaxMismatchSpecificErrors"))))
                    }, t
                }(i.Component),
                Di = Object(o.compose)(Object(b.a)(wi))(Ri),
                xi = function(e) {
                    switch (e.taxStatus) {
                        case Yi.NotStarted:
                            return i.createElement(i.Fragment, null, i.createElement(u.Pa, {
                                margin: {
                                    bottom: 1
                                }
                            }, i.createElement(u.W, {
                                fontSize: u.Ca.Size6
                            }, Object(p.d)("A new window will open where you can submit your royalty tax information. Please complete the tax information interview fully.", "TaxInfoRoyaltyText"))), i.createElement(u.Pa, {
                                margin: {
                                    bottom: 1
                                }
                            }, i.createElement(u.W, {
                                fontSize: u.Ca.Size6
                            }, Object(p.d)('Once you\'ve filled out the form, if your status still says "Not Started", please wait a minute or two for it to update to "Under Review".', "TaxInfoRoyaltyText"))), i.createElement(u.Xa, {
                                margin: {
                                    bottom: 2
                                }
                            }, i.createElement(na, {
                                onboardEntity: e.onboardEntity
                            })));
                        case Yi.Pending:
                            var t = new Date,
                                n = Object(Ii.c)(e.timestamp);
                            return Object(Bn.differenceInDays)(t, n) >= 3 ? i.createElement(i.Fragment, null, i.createElement(u.Pa, {
                                margin: {
                                    bottom: 1
                                }
                            }, i.createElement(u.W, {
                                fontSize: u.Ca.Size6
                            }, Object(p.d)("Thank you for your patience. Your tax information is still under review, but it is taking longer than normal.", "TaxInfoRoyaltyText"))), i.createElement(u.Pa, {
                                margin: {
                                    bottom: 1
                                }
                            }, i.createElement(u.W, {
                                fontSize: u.Ca.Size6
                            }, Object(p.d)("Please email {email} for assistance.", {
                                email: i.createElement("a", {
                                    href: "mailto:twitchtaxhelp@amazon.com"
                                }, "twitchtaxhelp@amazon.com")
                            }, "TaxInfoRoyaltyText")))) : i.createElement(i.Fragment, null, i.createElement(u.Pa, {
                                margin: {
                                    bottom: 1
                                }
                            }, i.createElement(u.W, {
                                fontSize: u.Ca.Size6
                            }, Object(p.d)("Hang tight! Your royalty tax information is currently under review and can take up to three business days.", "TaxInfoRoyaltyText"))), i.createElement(u.Pa, {
                                margin: {
                                    bottom: 1
                                }
                            }, i.createElement(u.W, {
                                fontSize: u.Ca.Size6
                            }, Object(p.d)("We'll update this screen within three business days with next steps. Please check back later.", "TaxInfoRoyaltyText"))));
                        case Yi.Completed:
                            return i.createElement(u.W, {
                                fontSize: u.Ca.Size6
                            }, Object(p.d)("Your royalty tax information was successfully validated.", "TaxInfoRoyaltyText"));
                        case Yi.ActionRequired:
                            return i.createElement(i.Fragment, null, i.createElement(_i, {
                                email: e.email
                            }), i.createElement(u.Xa, {
                                margin: {
                                    bottom: 2
                                }
                            }, i.createElement(na, {
                                onboardEntity: e.onboardEntity
                            })));
                        case Yi.Mismatch:
                            return i.createElement(i.Fragment, null, i.createElement(Di, null), i.createElement(u.Xa, {
                                margin: {
                                    bottom: 2
                                }
                            }, i.createElement(na, {
                                onboardEntity: e.onboardEntity
                            })));
                        case Yi.Failed:
                            return i.createElement(u.Pa, {
                                margin: {
                                    bottom: 2
                                }
                            }, i.createElement(u.W, {
                                fontSize: u.Ca.Size6
                            }, Object(p.d)("Please click the button below to retake the Royalty Tax Interview and correct your information.", "TaxInfoRoyaltyText")));
                        default:
                            return null
                    }
                },
                Fi = function(e) {
                    if (!e.royaltyTaxCompleted) return i.createElement(i.Fragment, null, i.createElement(u.Pa, {
                        margin: {
                            bottom: 1
                        }
                    }, i.createElement(u.W, {
                        fontSize: u.Ca.Size6
                    }, Object(p.d)("Once your royalty tax information is fully validated, you will need to complete the Service Tax Interview.", "TaxInfoServiceText"))));
                    switch (e.taxStatus) {
                        case Yi.NotStarted:
                            return i.createElement(i.Fragment, null, i.createElement(u.Pa, {
                                margin: {
                                    bottom: 1
                                }
                            }, i.createElement(u.W, {
                                fontSize: u.Ca.Size6
                            }, Object(p.d)("A new window will open where you can submit your service tax information. Please complete the tax information interview fully.", "TaxInfoServiceText"))), i.createElement(u.Pa, {
                                margin: {
                                    bottom: 1
                                }
                            }, i.createElement(u.W, {
                                fontSize: u.Ca.Size6
                            }, Object(p.d)('Once you\'ve filled out the form, if your status still says "Not Started", please wait a minute or two for it to update to "Under Review".', "TaxInfoServiceText"))), i.createElement(u.Xa, {
                                margin: {
                                    bottom: 2
                                }
                            }, i.createElement(na, {
                                onboardEntity: e.onboardEntity
                            })));
                        case Yi.Pending:
                            var t = new Date,
                                n = Object(Ii.c)(e.timestamp);
                            return Object(Bn.differenceInDays)(t, n) >= 3 ? i.createElement(i.Fragment, null, i.createElement(u.Pa, {
                                margin: {
                                    bottom: 1
                                }
                            }, i.createElement(u.W, {
                                fontSize: u.Ca.Size6
                            }, Object(p.d)("Thank you for your patience. Your tax information is still under review, but it is taking longer than normal.", "TaxInfoServiceText"))), i.createElement(u.Pa, {
                                margin: {
                                    bottom: 1
                                }
                            }, i.createElement(u.W, {
                                fontSize: u.Ca.Size6
                            }, Object(p.d)("Please email {email} for assistance.", {
                                email: i.createElement("a", {
                                    href: "mailto:twitchtaxhelp@amazon.com"
                                }, "twitchtaxhelp@amazon.com")
                            }, "TaxInfoServiceText")))) : i.createElement(i.Fragment, null, i.createElement(u.Pa, {
                                margin: {
                                    bottom: 1
                                }
                            }, i.createElement(u.W, {
                                fontSize: u.Ca.Size6
                            }, Object(p.d)("Hang tight! Your service tax information is currently under review and can take up to three business days.", "TaxInfoServiceText"))), i.createElement(u.Pa, {
                                margin: {
                                    bottom: 1
                                }
                            }, i.createElement(u.W, {
                                fontSize: u.Ca.Size6
                            }, Object(p.d)("We'll update this screen within three business days with next steps. Please check back later.", "TaxInfoServiceText"))));
                        case Yi.Completed:
                            return i.createElement(u.W, {
                                fontSize: u.Ca.Size6
                            }, Object(p.d)("Your service tax information was successfully validated.", "TaxInfoServiceText"));
                        case Yi.ActionRequired:
                            return i.createElement(i.Fragment, null, i.createElement(_i, {
                                email: e.email
                            }), i.createElement(u.Xa, {
                                margin: {
                                    bottom: 2
                                }
                            }, i.createElement(na, {
                                onboardEntity: e.onboardEntity
                            })));
                        case Yi.Mismatch:
                            return i.createElement(i.Fragment, null, i.createElement(Di, null), i.createElement(u.Xa, {
                                margin: {
                                    bottom: 2
                                }
                            }, i.createElement(na, {
                                onboardEntity: e.onboardEntity
                            })));
                        case Yi.Failed:
                            return i.createElement(u.Pa, {
                                margin: {
                                    bottom: 2
                                }
                            }, i.createElement(u.W, {
                                fontSize: u.Ca.Size6
                            }, Object(p.d)("Please click the button below to retake the Service Tax Interview and correct your information.", "TaxInfoServiceText")));
                        default:
                            return null
                    }
                },
                ji = function() {
                    return Object(p.d)("Start Over", "TaxPreviewInstructions")
                },
                Ui = function(e) {
                    return i.createElement(u.Xa, {
                        padding: 1,
                        margin: {
                            bottom: 1
                        }
                    }, i.createElement(u.Pa, {
                        margin: {
                            bottom: 2
                        }
                    }, i.createElement(u.W, {
                        fontSize: u.Ca.Size6
                    }, Object(p.d)("It is important that you enter consistent information throughout the onboarding process to ensure that we have your correct contact information, tax information, and payout information. When filling out the tax form on the following page, please make sure that you enter the same information as you did in Step 1. For your reference, here is the information you entered in Step 1.", "TaxPreviewInstructions"))), e.onboardEntity !== d.D.EXTENSIONS_DEVELOPER && i.createElement(u.Pa, {
                        margin: {
                            bottom: 2
                        }
                    }, i.createElement(u.W, {
                        fontSize: u.Ca.Size6
                    }, Object(p.d)('If any of this information is incorrect, you must restart your Payout Registration by clicking "{buttonLabel}" below.', {
                        buttonLabel: ji()
                    }, "TaxPreviewInstructions"))), e.onboardEntity === d.D.EXTENSIONS_DEVELOPER && i.createElement(u.Pa, {
                        margin: {
                            bottom: 2
                        }
                    }, i.createElement(u.W, {
                        fontSize: u.Ca.Size6
                    }, Object(p.d)('If any of this information is incorrect, you must restart your Extensions Developer Registration by clicking "{buttonLabel}" below.', {
                        buttonLabel: ji()
                    }, "TaxPreviewInstructions"))), i.createElement(u.W, {
                        fontSize: u.Ca.Size6
                    }, Object(p.d)("Otherwise, please proceed by clicking the purple button and the tax form will appear in a new window. If the tax form does not appear, make sure that you have pop-ups enabled.", "TaxPreviewInstructions")))
                },
                Li = n("1lFv"),
                Mi = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        return i.createElement(u.Bb, {
                            borderMarked: !0,
                            padding: 2
                        }, i.createElement(u.Xa, {
                            margin: {
                                bottom: 2
                            }
                        }, i.createElement(u.Ea, {
                            label: Object(p.d)("Channel Name", "TaxPreviewReferenceInfo"),
                            orientation: u.Fa.Horizontal
                        }, i.createElement(u.Ra, {
                            type: u.Ta.Text,
                            value: this.channelName,
                            disabled: !0
                        }))), i.createElement(u.Xa, {
                            margin: {
                                bottom: 2
                            }
                        }, i.createElement(u.Ea, {
                            label: Object(p.d)("Name", "TaxPreviewReferenceInfo"),
                            orientation: u.Fa.Horizontal
                        }, i.createElement(u.Ra, {
                            type: u.Ta.Text,
                            value: this.name,
                            disabled: !0
                        }))), i.createElement(u.Xa, {
                            margin: {
                                bottom: 2
                            }
                        }, i.createElement(u.Ea, {
                            label: Object(p.d)("Email", "TaxPreviewReferenceInfo"),
                            orientation: u.Fa.Horizontal
                        }, i.createElement(u.Ra, {
                            type: u.Ta.Text,
                            value: this.email,
                            disabled: !0
                        }))), i.createElement(u.Xa, {
                            margin: {
                                bottom: 2
                            }
                        }, i.createElement(u.Ea, {
                            label: Object(p.d)("Country", "TaxPreviewReferenceInfo"),
                            orientation: u.Fa.Horizontal
                        }, i.createElement(u.Ra, {
                            type: u.Ta.Text,
                            value: this.country,
                            disabled: !0
                        }))), i.createElement(u.Xa, {
                            margin: {
                                bottom: 2
                            }
                        }, i.createElement(u.Ea, {
                            label: Object(p.d)("Street Address", "TaxPreviewReferenceInfo"),
                            orientation: u.Fa.Horizontal
                        }, i.createElement(u.Ra, {
                            type: u.Ta.Text,
                            value: this.streetAddress,
                            disabled: !0
                        }))), i.createElement(u.Xa, {
                            margin: {
                                bottom: 2
                            }
                        }, i.createElement(u.Ea, {
                            label: Object(p.d)("Street Address 2", "TaxPreviewReferenceInfo"),
                            orientation: u.Fa.Horizontal,
                            labelOptional: this.optionalText
                        }, i.createElement(u.Ra, {
                            type: u.Ta.Text,
                            value: this.streetAddress2,
                            disabled: !0
                        }))), i.createElement(u.Xa, {
                            margin: {
                                bottom: 2
                            }
                        }, i.createElement(u.Ea, {
                            label: Object(p.d)("City or Town", "TaxPreviewReferenceInfo"),
                            orientation: u.Fa.Horizontal
                        }, i.createElement(u.Ra, {
                            type: u.Ta.Text,
                            value: this.city,
                            disabled: !0
                        }))), i.createElement(u.Xa, {
                            margin: {
                                bottom: 2
                            }
                        }, i.createElement(u.Ea, {
                            label: Object(p.d)("State/Province", "TaxPreviewReferenceInfo"),
                            orientation: u.Fa.Horizontal,
                            labelOptional: this.inUnitedStates || this.inCanada ? "" : this.optionalText
                        }, i.createElement(u.Ra, {
                            type: u.Ta.Text,
                            value: this.stateOrProvince,
                            disabled: !0
                        }))), i.createElement(u.Ea, {
                            label: Object(p.d)("Zip Code/Postal Code", "TaxPreviewReferenceInfo"),
                            orientation: u.Fa.Horizontal,
                            labelOptional: this.inUnitedStates ? "" : this.optionalText
                        }, i.createElement(u.Ra, {
                            type: u.Ta.Text,
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
                            return this.registration && Object(Ta.b)(this.registration.countryCode) || ""
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
                            return this.registration && this.registration.stateCode ? this.inUnitedStates ? Oa(this.registration.stateCode) : this.inCanada ? ka(this.registration.stateCode) : this.registration.stateCode : ""
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "optionalText", {
                        get: function() {
                            return Object(p.d)("optional", "TaxPreviewReferenceInfo")
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t
                }(i.Component),
                Bi = Object(o.compose)(Object(b.a)(Li))(Mi),
                Xi = (n("Ff3J"), n("Hhor")),
                Wi = function(e) {
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
                        return this.props.data.loading ? i.createElement(u.Bb, {
                            className: "tax-preview-modal__container",
                            background: u.r.Base,
                            padding: 5
                        }, i.createElement(u.Za, {
                            fillContent: !0
                        })) : this.props.data.error || !this.taxPreviewQueryResponseIsValid ? i.createElement(u.Bb, {
                            className: "tax-preview-modal__container",
                            background: u.r.Base,
                            padding: 5
                        }, i.createElement(g.a, {
                            message: Object(p.d)("Oops, something went wrong.", "TaxPreviewModal")
                        })) : i.createElement(u.Bb, {
                            className: "tax-preview-modal__container",
                            background: u.r.Base,
                            padding: 2
                        }, i.createElement(u.Bb, {
                            borderBottom: !0,
                            padding: {
                                bottom: 1
                            },
                            margin: {
                                bottom: 1
                            }
                        }, i.createElement(u.W, {
                            type: u.Rb.H4
                        }, Object(p.d)("Information Reference", "TaxPreviewModal"))), i.createElement(Ui, {
                            onboardEntity: this.props.onboardEntity
                        }), i.createElement(Bi, null), i.createElement(u.Xa, {
                            display: u.X.Flex,
                            justifyContent: u.Wa.Center,
                            padding: {
                                top: 2
                            }
                        }, i.createElement(u.Xa, {
                            display: u.X.InlineBlock,
                            margin: {
                                right: 2
                            }
                        }, i.createElement(u.z, {
                            onClick: this.handleOpenTaxInterviewClick,
                            disabled: this.state.openingTaxInterview
                        }, this.openTaxButtonText)), i.createElement(u.Xa, {
                            display: u.X.InlineBlock,
                            margin: {
                                right: 2
                            }
                        }, i.createElement(u.z, {
                            type: u.F.Text,
                            onClick: this.props.showStartOverModal,
                            disabled: this.state.openingTaxInterview
                        }, Object(p.d)("Start Over", "TaxPreviewModal"))), this.state.openingTaxInterview && i.createElement(u.Xa, {
                            display: u.X.Flex,
                            justifyContent: u.Wa.Center,
                            flexDirection: u.Aa.Column
                        }, i.createElement(u.Za, null))))
                    }, t.prototype.taxPreviewQueryResponseIsValid = function() {
                        return !!(this.props.data.currentUser && this.props.data.currentUser.payoutInvite && this.props.data.currentUser.payoutInvite.workflow && this.props.data.currentUser.payoutInvite.workflow.taxInterview)
                    }, Object.defineProperty(t.prototype, "openTaxButtonText", {
                        get: function() {
                            return this.props.taxType === Gi.Royalty ? Object(p.d)("Open Royalty Tax Interview Form", "TaxPreviewModal") : Object(p.d)("Open Service Tax Interview Form", "TaxPreviewModal")
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t
                }(i.Component),
                Vi = Object(o.compose)(Object(b.a)(Xi, {
                    options: function(e) {
                        return {
                            variables: {
                                taxType: e.taxType,
                                returnURL: window.location.href
                            }
                        }
                    }
                }))(Wi),
                zi = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        return i.createElement(u.Xa, null, i.createElement(Vi, {
                            taxType: this.props.taxType,
                            onboardEntity: this.props.onboardEntity,
                            showStartOverModal: this.props.showStartOverModal,
                            closeTaxPreviewModal: this.props.closeModal
                        }), i.createElement(ia.a, {
                            closeOnBackdropClick: !0
                        }))
                    }, t
                }(i.Component);
            var qi, Gi, Yi, Hi = Object(v.compose)(Object(Ze.connect)(null, function(e) {
                    return Object(v.bindActionCreators)({
                        closeModal: Ke.c
                    }, e)
                }))(zi),
                Qi = n("VB3o");
            ! function(e) {
                e.RoyaltyHeader = "payout-onboarding-tax-interview__royalty-header", e.RoyaltyButton = "payout-onboarding-tax-interview__royalty-button", e.ServiceHeader = "payout-onboarding-tax-interview__service-header", e.ServiceButton = "payout-onboarding-tax-interview__service-button", e.ContinueButton = "payout-onboarding-tax-interview__continue-button"
            }(qi || (qi = {})),
            function(e) {
                e.Royalty = "Royalty", e.Service = "Service"
            }(Gi || (Gi = {})),
            function(e) {
                e[e.NotStarted = 0] = "NotStarted", e[e.Pending = 1] = "Pending", e[e.Failed = 2] = "Failed", e[e.ActionRequired = 3] = "ActionRequired", e[e.Mismatch = 4] = "Mismatch", e[e.Completed = 5] = "Completed"
            }(Yi || (Yi = {}));
            var $i = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.handleRoyaltyTaxButtonClick = function() {
                        t.showTaxPreviewModal(Gi.Royalty)
                    }, t.handleServiceTaxButtonClick = function() {
                        t.showTaxPreviewModal(Gi.Service)
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
                        t.props.updateStepDisplayed(Dn.PayoutMethod)
                    }, t
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    return this.props.data.currentUser && this.props.data.currentUser.payoutInvite && this.props.data.currentUser.payoutInvite.workflow && this.props.data.currentUser.payoutInvite.workflow.registration ? i.createElement(I.a, null, i.createElement(Gn, {
                        title: Object(p.d)("Royalty Tax Interview", "PayoutOnboardingTaxInterview"),
                        statusText: this.royaltyStatusText,
                        statusType: this.royaltyStatusType,
                        borderTop: !0,
                        "data-test-selector": qi.RoyaltyHeader
                    }), i.createElement(u.Xa, {
                        padding: 2
                    }, i.createElement(Ai, {
                        taxStatus: this.royaltyTaxStatus
                    }), i.createElement(xi, {
                        taxStatus: this.royaltyTaxStatus,
                        onboardEntity: this.props.onboardEntity,
                        email: this.props.data.currentUser.payoutInvite.workflow.registration.email,
                        timestamp: this.props.data.currentUser.payoutInvite.workflow.timestamp
                    }), ![Yi.Completed, Yi.Pending].includes(this.royaltyTaxStatus) && i.createElement(u.z, {
                        type: this.royaltyTaxButtonType,
                        disabled: this.royaltyTaxButtonDisabled,
                        onClick: this.handleRoyaltyTaxButtonClick,
                        "data-test-selector": qi.RoyaltyButton
                    }, this.royaltyTaxButtonText)), i.createElement(Gn, {
                        title: Object(p.d)("Service Tax Interview", "PayoutOnboardingTaxInterview"),
                        statusText: this.serviceStatusText,
                        statusType: this.serviceStatusType,
                        "data-test-selector": qi.ServiceHeader
                    }), i.createElement(u.Xa, {
                        padding: 2
                    }, i.createElement(Ai, {
                        taxStatus: this.serviceTaxStatus
                    }), i.createElement(Fi, {
                        royaltyTaxCompleted: this.royaltyTaxStatus === Yi.Completed,
                        taxStatus: this.serviceTaxStatus,
                        onboardEntity: this.props.onboardEntity,
                        email: this.props.data.currentUser.payoutInvite.workflow.registration.email,
                        timestamp: this.props.data.currentUser.payoutInvite.workflow.timestamp
                    }), ![Yi.Completed, Yi.Pending].includes(this.serviceTaxStatus) && i.createElement(u.z, {
                        type: this.serviceTaxButtonType,
                        disabled: this.serviceTaxButtonDisabled,
                        onClick: this.handleServiceTaxButtonClick,
                        "data-test-selector": qi.ServiceButton
                    }, this.serviceTaxButtonText)), i.createElement(u.Bb, {
                        padding: 2,
                        background: u.r.Alt2
                    }, i.createElement(u.z, {
                        "data-test-selector": qi.ContinueButton,
                        disabled: this.continueButtonDisabled,
                        onClick: this.handleContinueClick
                    }, Object(p.d)("Continue", "PayoutOnboardingTaxInterview")))) : this.props.data.error ? i.createElement(I.a, null, i.createElement(A.a, null, i.createElement(g.a, null))) : i.createElement(I.a, null, i.createElement(A.a, null, i.createElement(u.gb, {
                        lineCount: 4
                    })))
                }, Object.defineProperty(t.prototype, "royaltyTaxStatus", {
                    get: function() {
                        switch (this.props.currentStep) {
                            case d.E.REGISTRATION_NOT_STARTED:
                            case d.E.AGREEMENT_NOT_STARTED:
                            case d.E.ROYALTY_TAX_INTERVIEW_NOT_STARTED:
                                return Yi.NotStarted;
                            case d.E.ROYALTY_TAX_INTERVIEW_PENDING:
                                return Yi.Pending;
                            case d.E.ROYALTY_TAX_INTERVIEW_ACTION_REQUIRED:
                                return Yi.ActionRequired;
                            case d.E.ROYALTY_TAX_INTERVIEW_MISMATCH:
                                return Yi.Mismatch;
                            case d.E.ROYALTY_TAX_INTERVIEW_FAILED:
                                return Yi.Failed;
                            default:
                                return Yi.Completed
                        }
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "serviceTaxStatus", {
                    get: function() {
                        switch (this.props.currentStep) {
                            case d.E.REGISTRATION_NOT_STARTED:
                            case d.E.AGREEMENT_NOT_STARTED:
                            case d.E.ROYALTY_TAX_INTERVIEW_NOT_STARTED:
                            case d.E.ROYALTY_TAX_INTERVIEW_PENDING:
                            case d.E.ROYALTY_TAX_INTERVIEW_ACTION_REQUIRED:
                            case d.E.ROYALTY_TAX_INTERVIEW_MISMATCH:
                            case d.E.ROYALTY_TAX_INTERVIEW_FAILED:
                            case d.E.SERVICE_TAX_INTERVIEW_NOT_STARTED:
                                return Yi.NotStarted;
                            case d.E.SERVICE_TAX_INTERVIEW_PENDING:
                                return Yi.Pending;
                            case d.E.SERVICE_TAX_INTERVIEW_ACTION_REQUIRED:
                                return Yi.ActionRequired;
                            case d.E.SERVICE_TAX_INTERVIEW_MISMATCH:
                                return Yi.Mismatch;
                            case d.E.SERVICE_TAX_INTERVIEW_FAILED:
                                return Yi.Failed;
                            default:
                                return Yi.Completed
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
                        case Yi.NotStarted:
                            return Object(p.d)("Not Started", "PayoutOnboardingTaxInterview");
                        case Yi.Pending:
                            return Object(p.d)("Under Review", "PayoutOnboardingTaxInterview");
                        case Yi.ActionRequired:
                            return Object(p.d)("Additional Documentation Required", "PayoutOnboardingTaxInterview");
                        case Yi.Mismatch:
                        case Yi.Failed:
                            return Object(p.d)("Failed", "PayoutOnboardingTaxInterview");
                        case Yi.Completed:
                            return Object(p.d)("Completed", "PayoutOnboardingTaxInterview");
                        default:
                            return ""
                    }
                }, t.prototype.getStatusType = function(e) {
                    switch (e) {
                        case Yi.Pending:
                            return u.fb.Prime;
                        case Yi.ActionRequired:
                        case Yi.Mismatch:
                        case Yi.Failed:
                            return u.fb.Alert;
                        case Yi.Completed:
                            return u.fb.Success;
                        default:
                            return
                    }
                }, Object.defineProperty(t.prototype, "royaltyTaxButtonType", {
                    get: function() {
                        return this.royaltyTaxStatus === Yi.Pending || this.royaltyTaxStatus === Yi.ActionRequired ? u.F.Hollow : u.F.Default
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "royaltyTaxButtonDisabled", {
                    get: function() {
                        return this.royaltyTaxStatus === Yi.Completed
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "royaltyTaxButtonText", {
                    get: function() {
                        return this.royaltyTaxStatus === Yi.NotStarted ? Object(p.d)("Begin Royalty Tax Interview", "PayoutOnboardingTaxInterview") : Object(p.d)("Retake Royalty Tax Interview", "PayoutOnboardingTaxInterview")
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "serviceTaxButtonType", {
                    get: function() {
                        return this.serviceTaxStatus === Yi.Pending || this.serviceTaxStatus === Yi.ActionRequired ? u.F.Hollow : u.F.Default
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "serviceTaxButtonDisabled", {
                    get: function() {
                        return this.royaltyTaxStatus !== Yi.Completed || this.serviceTaxStatus === Yi.Completed
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "serviceTaxButtonText", {
                    get: function() {
                        return this.serviceTaxStatus === Yi.NotStarted ? Object(p.d)("Begin Service Tax Interview", "PayoutOnboardingTaxInterview") : Object(p.d)("Retake Service Tax Interview", "PayoutOnboardingTaxInterview")
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "continueButtonDisabled", {
                    get: function() {
                        return this.royaltyTaxStatus !== Yi.Completed || this.serviceTaxStatus !== Yi.Completed
                    },
                    enumerable: !0,
                    configurable: !0
                }), t
            }(i.Component);
            var Zi = Object(o.compose)(Object(b.a)(Qi), Object(Ze.connect)(null, function(e) {
                    return Object(v.bindActionCreators)({
                        showTaxPreviewModal: function(e) {
                            var t = a.__rest(e, []);
                            return Object(Ke.d)(Hi, t)
                        }
                    }, e)
                }))($i),
                Ki = n("4F2d"),
                Ji = {
                    "data-test-selector": "require-two-factor-enabled__enable-two-factor-message"
                },
                er = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        return this.props.data.loading ? i.createElement(I.a, null, i.createElement(A.a, null, i.createElement(u.gb, {
                            lineCount: 4
                        }))) : this.props.data.error ? i.createElement(I.a, null, i.createElement(A.a, null, i.createElement(g.a, {
                            message: Object(p.d)("Oops, something went wrong.", "RequireTwoFactorEnabled")
                        }))) : this.hasTwoFactorEnabled ? i.createElement(i.Fragment, null, this.props.children) : i.createElement(I.a, null, i.createElement(A.a, null, i.createElement(u.W, a.__assign({
                            type: u.Rb.P
                        }, Ji), this.props.enableTwoFactorMessage)), i.createElement(A.a, null, i.createElement(u.z, {
                            linkTo: "/settings/security"
                        }, Object(p.d)("Enable Two-Factor Authentication", "RequireTwoFactorEnabled"))))
                    }, Object.defineProperty(t.prototype, "hasTwoFactorEnabled", {
                        get: function() {
                            return !!(this.props.data.currentUser && this.props.data.currentUser.settings && this.props.data.currentUser.settings.hasTwoFactorEnabled)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t
                }(i.Component),
                tr = Object(o.compose)(Object(b.a)(Ki))(er),
                nr = n("Z21N"),
                ar = function(e) {
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
                                            return n.trys.push([1, 3, , 4]), e = Object(k.a)({
                                                targetUserID: this.props.userID
                                            }), [4, this.props.cancelPayoutOnboardingWorkflow(e)];
                                        case 2:
                                            return (t = n.sent()).data.cancelPayoutOnboardingWorkflow && t.data.cancelPayoutOnboardingWorkflow.workflow ? (this.props.updateStepDisplayed(Dn.Summary), this.props.callCloseModal(), [3, 4]) : (this.setState({
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
                        return i.createElement(i.Fragment, null, i.createElement(u.Pa, {
                            margin: {
                                bottom: 2
                            }
                        }, i.createElement(u.W, {
                            type: u.Rb.H4
                        }, Object(p.d)("Are you sure you would like to start over?", "StartOverModal"))), i.createElement(u.Bb, {
                            borderTop: !0,
                            borderBottom: !0,
                            padding: {
                                y: 2
                            }
                        }, i.createElement(u.Pa, {
                            margin: {
                                bottom: 2
                            }
                        }, i.createElement(u.W, {
                            type: u.Rb.P
                        }, Object(p.d)("Your current progress will be lost!", "StartOverModal"))), i.createElement(u.W, {
                            type: u.Rb.P,
                            bold: !0,
                            color: u.O.Error
                        }, Object(p.d)("WARNING: Starting over will lose any progress and make your Twitch account unpayable. We will hold any payouts until you have fully completed the form.", "StartOverModal"))), i.createElement(u.Xa, {
                            display: u.X.Flex,
                            justifyContent: u.Wa.Center,
                            padding: {
                                top: 2
                            }
                        }, i.createElement(u.Xa, {
                            display: u.X.InlineBlock,
                            margin: {
                                right: 2
                            }
                        }, i.createElement(u.z, {
                            "data-test-selector": "start-over-modal___start-over-button",
                            type: u.F.Text,
                            onClick: this.onStartOverClick,
                            disabled: this.state.canceling
                        }, Object(p.d)("Yes, Start Over", "StartOverModal"))), i.createElement(u.Xa, {
                            display: u.X.InlineBlock,
                            margin: {
                                right: 2
                            }
                        }, i.createElement(u.z, {
                            "data-test-selector": "start-over-modal__stay-here-button",
                            onClick: this.props.callCloseModal,
                            disabled: this.state.canceling
                        }, Object(p.d)("No, Stay Here", "StartOverModal"))), this.state.canceling && i.createElement(u.Xa, {
                            display: u.X.Flex,
                            justifyContent: u.Wa.Center,
                            flexDirection: u.Aa.Column
                        }, i.createElement(u.Za, null))))
                    }, t
                }(i.Component),
                ir = Object(v.compose)(Object(b.a)(nr, {
                    name: "cancelPayoutOnboardingWorkflow"
                }))(ar),
                rr = (n("cMo7"), function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        return i.createElement(u.Bb, {
                            className: "start-over-modal__container",
                            background: u.r.Base,
                            padding: 2
                        }, i.createElement(ir, {
                            userID: this.props.userID,
                            updateStepDisplayed: this.props.updateStepDisplayed,
                            callCloseModal: this.props.closeModal
                        }), i.createElement(ia.a, {
                            closeOnBackdropClick: !0
                        }))
                    }, t
                }(i.Component));
            var or, sr = Object(Ze.connect)(null, function(e) {
                    return Object(v.bindActionCreators)({
                        closeModal: Ke.c
                    }, e)
                })(rr),
                lr = n("KBb9"),
                dr = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            stepDisplayed: Dn.Summary,
                            redirectedAlready: !1
                        }, t.backLinkURL = "/" + t.props.channelName + "/dashboard/settings/revenue", t.totalSteps = t.props.onboardEntity === d.D.CUSTOM_PARTNER ? 5 : 4, t.goBackToSummary = function() {
                            t.setState({
                                stepDisplayed: Dn.Summary
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
                            return Object(p.d)("You must enable two-factor authentication to access your onboarding.", "PayoutOnboardingContainer")
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t.prototype.componentDidUpdate = function() {
                        this.shouldRedirectPayoutMethod && this.setState({
                            redirectedAlready: !0,
                            stepDisplayed: Dn.PayoutMethod
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
                            if (e.currentStep !== d.E.PAYOUT_METHOD_NOT_STARTED && e.currentStep !== d.E.PAYOUT_METHOD_PENDING && e.currentStep !== d.E.COMPLETED && e.currentStep !== d.E.REVIEW_PENDING) return !1;
                            var t = Un.parse(this.props.location.search);
                            return !!t && "true" === t.redirect_tipalti
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t.prototype.render = function() {
                        if (!this.props.data.currentUser || !this.props.data.currentUser.id) return this.props.data.error ? this.renderErrorComponent() : i.createElement(I.a, {
                            header: this.renderDefaultHeader()
                        }, i.createElement(A.a, null, i.createElement(u.gb, {
                            lineCount: 4
                        })));
                        var e, t = this.props.data.currentUser && this.props.data.currentUser.payoutInvite && this.props.data.currentUser.payoutInvite.workflow;
                        switch (this.state.stepDisplayed) {
                            case Dn.Summary:
                                return i.createElement(i.Fragment, null, this.renderDefaultHeader(), i.createElement(tr, {
                                    enableTwoFactorMessage: this.enableTwoFactorMessage
                                }, i.createElement(Ci, {
                                    onboardEntity: this.props.onboardEntity,
                                    currentStep: t && t.currentStep,
                                    updateStepDisplayed: this.updateStepDisplayed,
                                    showStartOverModal: this.showStartOverModal
                                })));
                            case Dn.Registration:
                                e = i.createElement(ni, {
                                    channelName: this.props.channelName,
                                    userID: this.props.data.currentUser.id,
                                    onboardEntity: this.props.onboardEntity,
                                    currentStep: t && t.currentStep,
                                    updateStepDisplayed: this.updateStepDisplayed
                                });
                                break;
                            case Dn.Agreement:
                                if (!t) return this.renderErrorComponent();
                                e = i.createElement(Kn, {
                                    onboardEntity: this.props.onboardEntity,
                                    updateStepDisplayed: this.updateStepDisplayed
                                });
                                break;
                            case Dn.TaxInterview:
                                if (!t) return this.renderErrorComponent();
                                e = i.createElement(Zi, {
                                    onboardEntity: this.props.onboardEntity,
                                    currentStep: t.currentStep,
                                    updateStepDisplayed: this.updateStepDisplayed,
                                    showStartOverModal: this.showStartOverModal
                                });
                                break;
                            case Dn.PayoutMethod:
                                if (!t) return this.renderErrorComponent();
                                e = i.createElement(pa, {
                                    onboardEntity: this.props.onboardEntity,
                                    currentStep: t.currentStep,
                                    updateStepDisplayed: this.updateStepDisplayed
                                });
                                break;
                            case Dn.Review:
                                if (!t) return this.renderErrorComponent();
                                e = i.createElement(ai, {
                                    currentStep: t.currentStep,
                                    updateStepDisplayed: this.updateStepDisplayed
                                });
                                break;
                            default:
                                return this.renderErrorComponent()
                        }
                        return i.createElement(i.Fragment, null, i.createElement(P.a, {
                            title: Object(p.d)("Step {numOfCurrentStep} of {numOfTotalSteps}: {stepTitle}", {
                                numOfCurrentStep: Object(p.f)(this.state.stepDisplayed),
                                numOfTotalSteps: Object(p.f)(this.totalSteps),
                                stepTitle: gi[this.state.stepDisplayed].title[this.props.onboardEntity]()
                            }, "PayoutOnboardingContainer"),
                            description: gi[this.state.stepDisplayed].description[this.props.onboardEntity](),
                            onClick: this.goBackToSummary
                        }), i.createElement(tr, {
                            enableTwoFactorMessage: this.enableTwoFactorMessage
                        }, e))
                    }, t.prototype.renderDefaultHeader = function() {
                        return i.createElement(P.a, {
                            title: gi[Dn.Summary].title[this.props.onboardEntity](),
                            description: gi[Dn.Summary].description[this.props.onboardEntity](),
                            linkToParent: this.backLinkURL
                        })
                    }, t.prototype.renderErrorComponent = function() {
                        return i.createElement(I.a, {
                            header: this.renderDefaultHeader()
                        }, i.createElement(A.a, null, i.createElement(g.a, {
                            message: Object(p.d)("Oops, something went wrong.", "PayoutOnboardingContainer")
                        })))
                    }, t
                }(i.Component);
            var cr = Object(v.compose)(Object(b.a)(lr), Object(Mn.a)([{
                    topic: function(e) {
                        return Object(ke.r)(e.currentUserID)
                    },
                    mapMessageTypesToProps: (or = {}, or["*"] = "payoutOnboardingEvent", or)
                }]), Object(Ze.connect)(null, function(e) {
                    return Object(v.bindActionCreators)({
                        showStartOverModal: function(e) {
                            var t = a.__rest(e, []);
                            return Object(Ke.d)(sr, t)
                        }
                    }, e)
                }), Ln.a)(dr),
                ur = n("0dF/"),
                mr = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.data.loading && !this.props.data.error || this.props.latencyTracking.reportInteractive()
                    }, t.prototype.componentDidUpdate = function(e) {
                        (e.data.loading && !this.props.data.loading || this.props.data.error) && this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        return this.props.data.currentUser && this.props.data.currentUser.id && this.props.data.currentUser.payoutInvite && this.props.data.currentUser.payoutInvite.category ? this.hasAgreementPendingUpgrade ? i.createElement(l.a, {
                            to: "/" + this.props.match.params.channelName + "/dashboard/settings/revenue/upgrade-terms"
                        }) : i.createElement(cr, {
                            channelName: this.props.match.params.channelName,
                            currentUserID: this.props.data.currentUser.id,
                            onboardEntity: this.props.data.currentUser.payoutInvite.category
                        }) : this.props.data.error ? i.createElement(u.Xa, {
                            padding: {
                                y: 5
                            }
                        }, i.createElement(g.a, null)) : i.createElement(u.Xa, {
                            padding: {
                                y: 5
                            }
                        }, i.createElement(u.Za, {
                            fillContent: !0
                        }))
                    }, Object.defineProperty(t.prototype, "hasAgreementPendingUpgrade", {
                        get: function() {
                            return !!(this.props.data.currentUser && this.props.data.currentUser.payoutInvite && this.props.data.currentUser.payoutInvite.workflow && this.props.data.currentUser.payoutInvite.workflow.currentStep && this.props.data.currentUser.payoutInvite.workflow.currentStep === d.E.AGREEMENT_PENDING_UPGRADE)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t
                }(i.Component),
                pr = Object(o.compose)(Object(c.b)("PayoutOnboardingPage", {
                    destination: y.a.DashboardSettingsRevenuePayoutOnboarding
                }), Object(E.a)({
                    location: S.PageviewLocation.DashboardSettingsRevenuePayoutOnboarding
                }), Object(b.a)(ur))(mr),
                gr = n("+WWT"),
                hr = (n("NEwK"), function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.data.loading && !this.props.data.error || this.props.latencyTracking.reportInteractive()
                    }, t.prototype.componentDidUpdate = function(e) {
                        (e.data.loading && !this.props.data.loading || this.props.data.error) && this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        if (this.props.data.loading) return i.createElement(u.Xa, {
                            padding: {
                                y: 5
                            }
                        }, i.createElement(u.Za, {
                            fillContent: !0
                        }));
                        if (this.props.data.error || !this.tipaltiURL) return i.createElement(u.Xa, {
                            padding: {
                                y: 5
                            }
                        }, i.createElement(g.a, null));
                        if (!this.isOnboardingComplete) return i.createElement(h.a, null);
                        var e = i.createElement(P.a, {
                            title: Object(p.d)("Change Payout Method", "PayoutSettingsPage"),
                            linkToParent: "/" + this.props.match.params.channelName + "/dashboard/settings/revenue"
                        });
                        return i.createElement(tr, {
                            enableTwoFactorMessage: Object(p.d)("You must enable two-factor authentication to change your payout method.", "PayoutSettingsPage")
                        }, i.createElement(I.a, {
                            header: e
                        }, i.createElement(A.a, null, i.createElement(oa, {
                            tipaltiURL: this.tipaltiURL
                        }))))
                    }, Object.defineProperty(t.prototype, "isOnboardingComplete", {
                        get: function() {
                            return !!(this.props.data.currentUser && this.props.data.currentUser.payoutInvite && this.props.data.currentUser.payoutInvite.workflow && this.props.data.currentUser.payoutInvite.workflow.currentStep === d.E.COMPLETED)
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
                br = Object(o.compose)(Object(c.b)("PayoutSettingsPage", {
                    destination: y.a.DashboardSettingsRevenuePayoutSettings
                }), Object(E.a)({
                    location: S.PageviewLocation.DashboardSettingsRevenuePayoutSettings
                }), Object(b.a)(gr))(hr),
                fr = n("3Bft"),
                vr = n("0WFu"),
                Er = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onChange = function(e) {
                            t.props.onChange(t.props.index, e.currentTarget.value)
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        return i.createElement(C.a, {
                            label: this.props.label
                        }, i.createElement(u.Ra, {
                            type: u.Ta.Text,
                            maxLength: 50,
                            placeholder: Object(p.d)("Enter the name of your subscription ticket", "SubsNameSettingsSection"),
                            value: this.props.displayName,
                            onChange: this.onChange
                        }), i.createElement(O.a, {
                            text: this.props.description
                        }))
                    }, t
                }(i.Component),
                yr = n("Q7E8"),
                Sr = n("Wuwm"),
                kr = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            displayNames: new Array,
                            saveStatus: N.b.NoChanges
                        }, t.onDisplayNameChange = function(e, n) {
                            return a.__awaiter(t, void 0, void 0, function() {
                                var t;
                                return a.__generator(this, function(a) {
                                    return (t = this.state.displayNames.slice())[e] = n, this.setState({
                                        displayNames: t,
                                        saveStatus: N.b.DirtyChanges
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
                                            e = N.b.Working, this.setState({
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
                                            return a.trys.push([2, 4, , 5]), [4, this.props.updateSubscriptionProduct(Object(k.a)(r))];
                                        case 3:
                                            return a.sent(), e = N.b.Success, [3, 5];
                                        case 4:
                                            return a.sent(), e = N.b.Error, [3, 5];
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
                                case fr.a.Tier1:
                                    return Object(p.d)("Tier 1 Subscription Plan Name", "SubsNameSettingsPage");
                                case fr.a.Tier2:
                                    return Object(p.d)("TIer 2 Subscription Plan Name", "SubsNameSettingsPage");
                                case fr.a.Tier3:
                                    return Object(p.d)("Tier 3 Subscription Plan Name", "SubsNameSettingsPage");
                                default:
                                    return Object(p.d)("Subscription Plan Name", "SubsNameSettingsPage")
                            }
                        }, t.createSubPlanDescription = function(e) {
                            if (e) {
                                var t = Object(vr.a)(e);
                                return null === t && (t = 1), Object(p.d)("Name of your Tier {tierNum} subscription plan that will be visible to everyone", {
                                    tierNum: t
                                }, "SubsNameSettingsPage")
                            }
                            return Object(p.d)("Name of your subscription plan that will be visible to everyone", "SubsNameSettingsPage")
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.componentDidMount = function() {
                        p.p.setPageTitle(Object(p.d)("Subscription Information", "SubsNameSettingsPageTitle")), this.props.data.loading && !this.props.data.error || this.props.latencyTracking.reportInteractive()
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
                                saveStatus: N.b.NoChanges
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
                                saveStatus: N.b.NoChanges
                            })
                        }
                    }, t.prototype.render = function() {
                        var e = this.props.data,
                            t = e.loading,
                            n = e.error,
                            a = e.user;
                        if (!a || !a.subscriptionProducts) return t ? i.createElement(u.Za, {
                            fillContent: !0
                        }) : n ? i.createElement(g.a, null) : null;
                        var r = i.createElement(T.a, {
                                status: this.state.saveStatus,
                                onClickSave: this.onClickSave
                            }),
                            o = i.createElement(P.a, {
                                title: Object(p.d)("Subscription Information", "SubsNameSettingsPage"),
                                linkToParent: "/" + this.props.match.params.channelName + "/dashboard/settings/revenue"
                            });
                        return i.createElement(I.a, {
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
                            return i.createElement(Er, {
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
                Nr = Object(v.compose)(Object(c.b)("SubsNameSettingsPage", {
                    destination: y.a.DashboardSettingsRevenueSubsNameSettings
                }), Object(E.a)({
                    location: S.PageviewLocation.DashboardSettingsRevenueSubsNameSettings
                }), Object(b.a)(yr, {
                    options: function(e) {
                        return {
                            variables: {
                                login: e.match.params.channelName
                            }
                        }
                    }
                }), Object(b.a)(Sr, {
                    name: "updateSubscriptionProduct"
                }))(kr),
                Tr = n("fT/Q"),
                Or = n("ESve"),
                Cr = n("9C/b"),
                Pr = function(e) {
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
                                            return n = this.props.data.currentUser && this.props.data.currentUser.payoutInvite && this.props.data.currentUser.payoutInvite.category, i = this.props.data.currentUser && this.props.data.currentUser.id, n && i ? (this.props.data.currentUser && this.props.data.currentUser.programAgreement ? (e = this.props.data.currentUser.programAgreement.type, t = this.props.data.currentUser.programAgreement.version) : (e = n, t = "v1"), r = a.__assign({}, Object(k.a)({
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
                        this.props.data.loading && !this.props.data.error || (p.p.setPageTitle(this.headerTitle), this.props.latencyTracking.reportInteractive())
                    }, t.prototype.componentDidUpdate = function(e) {
                        (e.data.loading && !this.props.data.loading || this.props.data.error) && (p.p.setPageTitle(this.headerTitle), this.props.latencyTracking.reportInteractive())
                    }, t.prototype.render = function() {
                        if (this.props.data.loading || this.state.redirecting) return i.createElement(u.Xa, {
                            padding: {
                                y: 5
                            }
                        }, i.createElement(u.Za, {
                            fillContent: !0
                        }));
                        if (this.props.data.error) return i.createElement(u.Xa, {
                            padding: {
                                y: 5
                            }
                        }, i.createElement(g.a, null));
                        if (!this.hasAgreementPendingUpgrade) return i.createElement(h.a, null);
                        var e = i.createElement(P.a, {
                            title: this.headerTitle,
                            linkToParent: "/" + this.props.match.params.channelName + "/dashboard/settings/revenue"
                        });
                        return i.createElement(tr, {
                            enableTwoFactorMessage: Object(p.d)("You must enable two-factor authentication to accept your agreement.", "UpgradeTermsPage")
                        }, i.createElement(I.a, {
                            header: e
                        }, i.createElement(A.a, null, i.createElement(u.Bb, {
                            borderMarked: !0,
                            padding: 2,
                            elevation: 1
                        }, this.renderAgreement)), this.requiresParentConsent && i.createElement(Yn, {
                            updateParentName: this.updateParentName,
                            updateParentConfirmation: this.updateParentConfirmation
                        }), i.createElement(u.Bb, {
                            padding: 2,
                            background: u.r.Alt2
                        }, i.createElement(u.z, {
                            size: u.D.Large,
                            state: this.state.processingAgreement ? u.E.Loading : u.E.Default,
                            onClick: this.handleAgreeClick,
                            disabled: this.proceedButtonDisabled || this.state.processingAgreement
                        }, Object(p.d)("Agree", "UpgradeTermsPage")))))
                    }, Object.defineProperty(t.prototype, "headerTitle", {
                        get: function() {
                            if (!this.props.data.currentUser || !this.props.data.currentUser.payoutInvite) return "";
                            switch (this.props.data.currentUser.payoutInvite.category) {
                                case d.D.AFFILIATE:
                                    return Object(p.d)("Agree to the Twitch Affiliate Agreement", "UpgradeTermsPage");
                                case d.D.STANDARD_PARTNER:
                                case d.D.PREMIUM_PARTNER:
                                    return Object(p.d)("Agree to the Twitch Partner Agreement", "UpgradeTermsPage");
                                default:
                                    return ""
                            }
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "hasAgreementPendingUpgrade", {
                        get: function() {
                            return !!(this.props.data.currentUser && this.props.data.currentUser.payoutInvite && this.props.data.currentUser.payoutInvite.workflow && this.props.data.currentUser.payoutInvite.workflow.currentStep === d.E.AGREEMENT_PENDING_UPGRADE)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "renderAgreement", {
                        get: function() {
                            if (!this.props.data.currentUser || !this.props.data.currentUser.payoutInvite) return null;
                            switch (this.props.data.currentUser.payoutInvite.category) {
                                case d.D.AFFILIATE:
                                    return i.createElement(Vn, null);
                                case d.D.STANDARD_PARTNER:
                                case d.D.PREMIUM_PARTNER:
                                    var e = this.props.data.currentUser.programAgreement;
                                    return e && i.createElement(Qn, {
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
                            return Object(Bn.differenceInYears)(new Date, e) < 18
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
                Ar = Object(o.compose)(Object(c.b)("UpgradeTermsPage", {
                    destination: y.a.DashboardSettingsRevenueUpgradeTerms
                }), Object(E.a)({
                    location: S.PageviewLocation.DashboardSettingsRevenueUpgradeTerms
                }), Object(b.a)(Or), Object(b.a)(Tr, {
                    name: "acceptProgramAgreement"
                }), Cr.a)(Pr),
                Ir = n("DDis"),
                _r = function() {
                    return i.createElement(i.Fragment, null, i.createElement(u.Pa, {
                        margin: {
                            bottom: 1
                        }
                    }, i.createElement(u.W, {
                        type: u.Rb.H4,
                        bold: !0
                    }, Object(p.d)("Custom Partner Agreement", "CustomPartnerAgreement"))), i.createElement(u.W, {
                        type: u.Rb.P
                    }, Object(p.d)("Please contact <x:link>support</x:link> for a copy of your active Twitch Partner Agreement.", {
                        "x:link": function(e) {
                            return i.createElement(u.U, {
                                to: "https://help.twitch.tv/customer/portal/emails/new",
                                targetBlank: !0
                            }, e)
                        }
                    }, "CustomPartnerAgreement")))
                },
                wr = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(t, e), t.prototype.componentDidMount = function() {
                        p.p.setPageTitle(Object(p.d)("Partner Agreement", "ViewTermsPageTitle")), this.props.data.loading && !this.props.data.error || this.props.latencyTracking.reportInteractive()
                    }, t.prototype.componentDidUpdate = function(e) {
                        (e.data.loading && !this.props.data.loading || this.props.data.error) && this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        if (this.props.data.loading) return i.createElement(u.Xa, {
                            padding: {
                                y: 5
                            }
                        }, i.createElement(u.Za, {
                            fillContent: !0
                        }));
                        if (this.props.data.error) return i.createElement(u.Xa, {
                            padding: {
                                y: 5
                            }
                        }, i.createElement(g.a, null));
                        if (!this.canAccessViewTermsPage) return i.createElement(h.a, null);
                        var e = i.createElement(P.a, {
                            title: Object(p.d)("View Active Partner Agreement", "ViewTermsPage"),
                            linkToParent: "/" + this.props.match.params.channelName + "/dashboard/settings/revenue"
                        });
                        return i.createElement(tr, {
                            enableTwoFactorMessage: Object(p.d)("You must enable two-factor authentication to view your agreement.", "ViewTermsPage")
                        }, i.createElement(I.a, {
                            header: e
                        }, i.createElement(A.a, null, i.createElement(u.Bb, {
                            borderMarked: !0,
                            padding: 2,
                            elevation: 1
                        }, this.renderAgreement))))
                    }, Object.defineProperty(t.prototype, "canAccessViewTermsPage", {
                        get: function() {
                            var e = this.props.data.currentUser;
                            return !!e && xt(e.payoutPlans && e.payoutPlans.map(function(e) {
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
                            if (t.isLegacy || t.category === d.D.CUSTOM_PARTNER) return i.createElement(_r, null);
                            if (t.category === d.D.STANDARD_PARTNER || t.category === d.D.PREMIUM_PARTNER) {
                                var n = this.props.data.currentUser && this.props.data.currentUser.programAgreement;
                                return n && i.createElement(Qn, {
                                    body: n.body
                                })
                            }
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t
                }(i.Component),
                Rr = Object(o.compose)(Object(c.b)("ViewTermsPage", {
                    destination: y.a.DashboardSettingsRevenueViewTerms
                }), Object(E.a)({
                    location: S.PageviewLocation.DashboardSettingsRevenueViewTerms
                }), Object(b.a)(Ir))(wr),
                Dr = n("IFXb"),
                xr = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.inExperiment = "affiliate_access" === p.p.experiments.getAssignment(f.b.SubsAffiliateBadges), n
                    }
                    return a.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.data.loading && !this.props.data.error || this.props.latencyTracking.reportInteractive()
                    }, t.prototype.componentDidUpdate = function(e) {
                        (e.data.loading && !this.props.data.loading || this.props.data.error) && this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        var e = this.props.data,
                            t = e.loading,
                            n = e.error,
                            a = e.channel,
                            r = e.currentUser;
                        return t ? i.createElement(u.Xa, {
                            fullHeight: !0
                        }, i.createElement(u.Za, {
                            fillContent: !0
                        })) : !n && a && r ? this.isChannelOwner || this.isStaff ? a.payoutInvite && a.payoutInvite.category !== d.D.UNPAID_PARTNER ? i.createElement(Dr.a, null, i.createElement(m.a, null, i.createElement(s.a, {
                            path: "/:channelName/dashboard/settings/revenue",
                            exact: !0,
                            component: Qt
                        }), this.isChannelOwner && i.createElement(s.a, {
                            path: "/:channelName/dashboard/settings/revenue/payout-onboarding",
                            component: pr
                        }), this.isChannelOwner && i.createElement(s.a, {
                            path: "/:channelName/dashboard/settings/revenue/payouts",
                            component: br
                        }), this.isChannelOwner && i.createElement(s.a, {
                            path: "/:channelName/dashboard/settings/revenue/upgrade-terms",
                            component: Ar
                        }), this.isChannelOwner && i.createElement(s.a, {
                            path: "/:channelName/dashboard/settings/revenue/view-terms",
                            component: Rr
                        }), (this.isPaidAffiliate || this.isPaidPartner) && i.createElement(s.a, {
                            path: "/:channelName/dashboard/settings/revenue/cheer",
                            component: Ie
                        }), (this.isPaidAffiliate || this.isPaidPartner) && i.createElement(s.a, {
                            path: "/:channelName/dashboard/settings/revenue/cheerbadges",
                            component: ve
                        }), (this.isPaidAffiliate || this.isPaidPartner) && i.createElement(s.a, {
                            path: "/:channelName/dashboard/settings/revenue/subscription/chatperks",
                            component: K
                        }), (this.isPaidAffiliate || this.isPaidPartner) && i.createElement(s.a, {
                            path: "/:channelName/dashboard/settings/revenue/subscription/ticket",
                            component: Nr
                        }), this.isPaidPartner && i.createElement(s.a, {
                            path: "/:channelName/dashboard/settings/revenue/cheermotes",
                            component: $e
                        }), this.isPaidPartner && i.createElement(s.a, {
                            path: "/:channelName/dashboard/settings/revenue/game-commerce",
                            component: ut
                        }), this.isPaidPartner && i.createElement(s.a, {
                            path: "/:channelName/dashboard/settings/revenue/merch-by-amazon",
                            component: jn
                        }), this.canAccessSubBadges && i.createElement(s.a, {
                            path: "/:channelLogin/dashboard/settings/revenue/subscription/badges",
                            component: xn
                        }), i.createElement(s.a, {
                            component: h.a
                        }))) : i.createElement(u.Xa, {
                            fullHeight: !0
                        }, i.createElement(h.a, null)) : i.createElement(l.a, {
                            to: "/" + r.login + "/dashboard/live"
                        }) : i.createElement(u.Xa, {
                            fullHeight: !0
                        }, i.createElement(g.a, null))
                    }, Object.defineProperty(t.prototype, "canAccessSubBadges", {
                        get: function() {
                            return this.inExperiment && this.isPaidAffiliate || this.isPaidPartner
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "isChannelOwner", {
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
                                return e.category === d.C.AFFILIATE && e.isReceivingRevenue
                            }))
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "isPaidPartner", {
                        get: function() {
                            return !!(this.props.data.channel && this.props.data.channel.payoutPlans && this.props.data.channel.payoutPlans.find(function(e) {
                                return e.category === d.C.PARTNER && e.isReceivingRevenue
                            }))
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t
                }(i.Component),
                Fr = Object(o.compose)(Object(c.b)("DashboardRevenueSettingsRoot"), Object(b.a)(r, {
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
                return Fr
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
                    e.footer && (t = i.createElement(r.Bb, {
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
                    return i.createElement(i.Fragment, null, e.header, i.createElement(r.Bb, {
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
                return e.description && (t = a.createElement(i.Xa, {
                    margin: {
                        top: 1
                    }
                }, a.createElement(i.W, {
                    color: i.O.Alt2
                }, e.description))), a.createElement(i.Xa, {
                    margin: {
                        bottom: 2
                    }
                }, a.createElement(i.W, {
                    type: i.Rb.H3,
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
        jYG1: function(e, t) {
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
                    return a.createElement(i.Xa, {
                        className: "settings-row"
                    }, a.createElement(i.Ua, {
                        linkTo: e.linkTo,
                        type: i.Va.Alpha
                    }, a.createElement(i.Bb, {
                        padding: 2,
                        alignItems: i.f.Center,
                        display: i.X.Flex,
                        flexWrap: i.Ba.NoWrap
                    }, a.createElement(i.Xa, {
                        flexGrow: 1
                    }, a.createElement(i.W, {
                        fontSize: i.Ca.Size6,
                        bold: !0
                    }, e.text), a.createElement(i.W, {
                        type: i.Rb.Span
                    }, e.description)), a.createElement(i.Xa, null, a.createElement(i.qb, {
                        asset: i.rb.AngleRight
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