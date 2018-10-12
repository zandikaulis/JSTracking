(window.webpackJsonp = window.webpackJsonp || []).push([
    [151], {
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
        "/ZC1": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return o
            });
            var a = n("mrSG"),
                r = n("q1tI"),
                i = n("Ue10"),
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
                        return r.createElement(i.X, {
                            dragOver: this.state.isDraggingOver,
                            error: this.props.error
                        }, r.createElement(i.Na, {
                            position: i.db.Absolute,
                            attachTop: !0,
                            attachLeft: !0,
                            fullWidth: !0,
                            fullHeight: !0,
                            zIndex: i.ac.Above
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
                r = n("Ue10"),
                i = function(e) {
                    return a.createElement(r.xb, {
                        className: "settings-page-header",
                        borderTop: !0,
                        borderRight: !0,
                        borderLeft: !0,
                        borderRadius: {
                            topLeft: r.x.Medium,
                            topRight: r.x.Medium
                        },
                        background: r.r.Base
                    }, a.createElement(r.Sa, {
                        linkTo: e.linkToParent,
                        onClick: e.onClick,
                        type: r.Ta.Alpha
                    }, a.createElement(r.Va, {
                        display: r.W.Flex,
                        flexWrap: r.Z.NoWrap
                    }, a.createElement(r.Va, {
                        display: r.W.Flex,
                        padding: {
                            x: 1
                        }
                    }, a.createElement(r.mb, {
                        asset: r.nb.AngleLeft,
                        height: 20,
                        width: 20
                    })), a.createElement(r.Va, {
                        flexGrow: 1,
                        margin: 2
                    }, a.createElement(r.V, {
                        bold: !0,
                        fontSize: r.Aa.Size4
                    }, e.title), a.createElement(r.V, {
                        color: r.O.Alt2
                    }, e.description)))))
                };
            n.d(t, "a", function() {
                return i
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
            var a, r = n("mrSG"),
                i = n("q1tI"),
                o = n("/HQc"),
                s = n("oJmH"),
                l = n("4p7I"),
                d = n("mLw1"),
                c = n("DMoW"),
                u = n("GnwI"),
                m = n("Ue10"),
                p = n("jKe7"),
                g = n("/7QA"),
                h = n("ZDlU"),
                b = n("LA8z"),
                f = n("yR8l"),
                v = n("D7An"),
                E = n("fvjX"),
                y = n("V+GM"),
                S = n("NvVO"),
                k = n("2xye"),
                N = n("geRD"),
                O = n("EMHe"),
                T = n("rwxT"),
                C = n("Ww25"),
                P = n("EpBn"),
                A = n("3hKJ"),
                _ = n("BK8n"),
                w = n("7PeK"),
                I = (n("o5vO"), n("I1TM")),
                x = 10,
                R = "prefix",
                D = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            prefix: t.props.prefix || "",
                            saveStatus: O.b.NoChanges
                        }, t.renderBanner = function(e) {
                            return e === c.s.REJECTED ? i.createElement(m.Va, {
                                className: "emoticon-prefix__rejected-prefix-banner",
                                padding: {
                                    y: 1,
                                    x: 2
                                },
                                margin: {
                                    bottom: 1
                                }
                            }, Object(g.d)("Your prefix has been rejected. Please choose another one.", "EmoticonPrefix")) : i.createElement(m.Va, {
                                className: "emoticon-prefix__set-prefix-banner",
                                padding: {
                                    y: 1,
                                    x: 2
                                },
                                margin: {
                                    bottom: 1
                                }
                            }, Object(g.d)("Please set your emoticon prefix. The prefix must be approved before submitting your emoticons.", "EmoticonPrefix"))
                        }, t.renderPrefixSection = function() {
                            var e = t.props.prefixState,
                                n = 0 === t.state.prefix.length ? R : t.state.prefix;
                            return i.createElement(P.a, {
                                label: Object(g.d)("Unique Prefix", "EmoticonPrefix")
                            }, i.createElement(m.Pa, {
                                type: m.Ra.Text,
                                disabled: e === c.s.PENDING,
                                maxLength: x,
                                placeholder: R,
                                value: t.state.prefix,
                                onChange: t.onPrefixChange
                            }), i.createElement(C.a, {
                                text: Object(g.d)("Prefix must begin with a lowercase letter. Prefix must be 3-10 characters in length, all lowercase. Numbers may follow first character.\nExample of how it will work: {prefix}Emotecode", {
                                    prefix: n
                                }, "EmoticonPrefix")
                            }))
                        }, t.renderPendingMessage = function() {
                            return t.props.prefixState === c.s.PENDING && i.createElement(_.a, null, i.createElement(m.V, {
                                bold: !0
                            }, Object(g.d)("Your prefix has been submitted for approval. Thank you for your patience.", "EmoticonPrefix")))
                        }, t.onPrefixChange = function(e) {
                            var n = e.currentTarget.value;
                            (0 === n.length || n[0].match(/^[a-z]+$/)) && (0 === n.length || n.match(/^[0-9a-z]+$/)) ? 0 !== n.length && n.length < 3 ? t.setState({
                                prefix: n,
                                saveStatus: O.b.NoChanges
                            }) : t.setState({
                                prefix: n,
                                saveStatus: O.b.DirtyChanges
                            }): t.setState({
                                saveStatus: O.b.NoChanges
                            })
                        }, t.onClickSave = function() {
                            return r.__awaiter(t, void 0, void 0, function() {
                                var e, t;
                                return r.__generator(this, function(n) {
                                    switch (n.label) {
                                        case 0:
                                            e = O.b.Working, this.setState({
                                                saveStatus: e
                                            }), t = r.__assign({}, Object(N.a)({
                                                channelID: this.props.channelId,
                                                name: this.state.prefix
                                            })), n.label = 1;
                                        case 1:
                                            return n.trys.push([1, 3, , 4]), [4, this.props.submitEmoticon(t)];
                                        case 2:
                                            return n.sent(), this.props.refetch && this.props.refetch(), e = O.b.Success, [3, 4];
                                        case 3:
                                            return n.sent(), e = O.b.Error, [3, 4];
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
                        e !== c.s.PENDING && (t = i.createElement(T.a, {
                            status: this.state.saveStatus,
                            onClickSave: this.onClickSave
                        }));
                        var n = i.createElement(A.a, {
                            title: Object(g.d)("Emoticon Code Prefix", "EmoticonPrefix"),
                            description: Object(g.d)("Prefix that will be prepended before your emoticon's unique code", "EmoticonPrefix"),
                            linkToParent: "/" + this.props.channelName + "/dashboard/settings/revenue"
                        });
                        return i.createElement(i.Fragment, null, this.renderBanner(e), i.createElement(w.a, {
                            header: n,
                            footer: t
                        }, this.renderPrefixSection(), this.renderPendingMessage()))
                    }, t
                }(i.Component),
                F = Object(E.compose)(Object(f.a)(I, {
                    name: "submitEmoticon"
                }))(D);
            ! function(e) {
                e.ACTIVE = "ACTIVE", e.PENDING = "PENDING", e.REJECTED = "REJECTED", e.UNKNOWN = "UNKNOWN", e.UNSET = "UNSET"
            }(a || (a = {}));
            var j = n("yvrX"),
                V = n("b6Yk");

            function L(e, t, n, a) {
                return r.__awaiter(this, void 0, void 0, function() {
                    var i, o;
                    return r.__generator(this, function(r) {
                        switch (r.label) {
                            case 0:
                                return [4, V.a.post("v" + g.a.defaultAPIVersion + "/subscriptions/" + e + "/emoticons", {
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
            var U, M = n("/ZC1"),
                B = n("PZVp"),
                W = (n("/uk9"), ["image/*"]);
            ! function(e) {
                e[e.BadImageDimensionsError = 0] = "BadImageDimensionsError", e[e.BadImageError = 1] = "BadImageError", e[e.TimeoutError = 2] = "TimeoutError", e[e.UnknownError = 3] = "UnknownError", e[e.None = 4] = "None", e[e.Uploading = 5] = "Uploading", e[e.Success = 6] = "Success"
            }(U || (U = {}));
            var z, Y = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        status: U.None,
                        url: "",
                        attempts: 0,
                        isUploading: !1
                    }, t.resetEmote = function() {
                        t.setState({
                            url: "",
                            status: U.None,
                            attempts: 0,
                            isUploading: !1
                        })
                    }, t.getErrorText = function() {
                        switch (t.state.status) {
                            case U.BadImageError:
                                return Object(g.d)("Bad PNG file", "EmotesUploadPicker");
                            case U.UnknownError:
                                return Object(g.d)("Something went wrong. Please try again!", "EmotesUploadPicker");
                            case U.TimeoutError:
                                return Object(g.d)("Upload took too long. Please try again!", "EmotesUploadPicker");
                            case U.BadImageDimensionsError:
                                return Object(g.d)("PNG must be {width} x {height}px", {
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
                                            status: U.None
                                        }), [2]) : this.state.attempts > 2 ? (this.setState({
                                            status: U.UnknownError,
                                            attempts: 0
                                        }), [2]) : (this.setState(function(e) {
                                            return {
                                                url: "",
                                                attempts: e.attempts + 1,
                                                status: U.Uploading
                                            }
                                        }), [4, this.uploadEmoticon(e[0])]);
                                    case 1:
                                        return t = r.sent(), n = t.url, a = t.uploadId, i = t.imageId, this.unsubscribe = g.k.subscribe({
                                            topic: "upload." + a,
                                            onMessage: function(t) {
                                                switch (o.unsubscribe(), null !== o.timeout && (clearTimeout(o.timeout), o.timeout = null), t.status) {
                                                    case B.a.POSTPROCESS_COMPLETE:
                                                    case B.a.COMPLETE:
                                                        return o.setState({
                                                            url: n,
                                                            status: U.Success
                                                        }), void o.props.uploadEmote(i, o.props.size);
                                                    case B.a.WIDTH_VALIDATION_FAILED:
                                                    case B.a.HEIGHT_VALIDATION_FAILED:
                                                        return void o.setState({
                                                            status: U.BadImageDimensionsError
                                                        });
                                                    case B.a.IMAGE_FORMAT_VALIDATION_FAILED:
                                                        return void o.setState({
                                                            status: U.BadImageError
                                                        });
                                                    default:
                                                        return null !== o.timeout && (clearTimeout(o.timeout), o.timeout = null), o.unsubscribe(), o.onImageInputChange(e)
                                                }
                                            }
                                        }), this.timeout = setTimeout(function() {
                                            o.unsubscribe(), o.setState({
                                                status: U.TimeoutError
                                            })
                                        }, 5e3), [2]
                                }
                            })
                        })
                    }, t.uploadEmoticon = function(e) {
                        return r.__awaiter(t, void 0, Promise, function() {
                            var t, n;
                            return r.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        return [4, function(e, t) {
                                            return r.__awaiter(this, void 0, Promise, function() {
                                                return r.__generator(this, function(n) {
                                                    switch (n.label) {
                                                        case 0:
                                                            return [4, V.a.post("v" + g.a.defaultAPIVersion + "/subscriptions/" + e + "/emoticons/upload_configuration", {
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
                    void 0 !== this.unsubscribe && this.unsubscribe(), null !== this.timeout && (clearTimeout(this.timeout), this.timeout = null)
                }, t.prototype.render = function() {
                    var e = this.getErrorText(),
                        t = null;
                    return t = "" === this.state.url && this.state.status === U.None ? i.createElement(m.Va, {
                        className: "emotes-upload-picker__image-preview"
                    }, i.createElement(m.Va, null, i.createElement(m.mb, {
                        asset: m.nb.Plus,
                        type: m.ob.Alt2,
                        height: 15,
                        width: 15
                    }))) : this.state.status === U.Uploading ? i.createElement(m.Va, null, i.createElement(m.Xa, {
                        fillContent: !0
                    })) : i.createElement(m.Va, {
                        className: "emotes-upload-picker__image-preview emotes-upload-picker__size-" + this.props.size,
                        position: m.db.Relative
                    }, this.state.isUploading ? i.createElement(m.Xa, null) : i.createElement("img", {
                        src: "" + this.state.url
                    })), i.createElement(m.xb, {
                        padding: {
                            x: 2,
                            y: 2
                        },
                        display: m.W.InlineBlock
                    }, i.createElement(m.Va, {
                        margin: {
                            top: 1
                        }
                    }, i.createElement(m.Va, {
                        className: "emotes-upload-picker__container",
                        display: m.W.InlineFlex,
                        flexDirection: m.Y.Column,
                        position: m.db.Relative
                    }, i.createElement(M.a, {
                        allowedFileTypes: W,
                        error: void 0 !== e,
                        onFilesSubmitted: this.onImageInputChange
                    }, i.createElement(m.Va, {
                        padding: .5
                    }, e ? i.createElement(m.V, {
                        color: m.O.Error,
                        wordBreak: m.Zb.BreakWord
                    }, e) : t))), i.createElement(m.V, null, Object(g.d)("{width} x {height}px", {
                        width: this.props.size,
                        height: this.props.size
                    }, "EmotesUploadPicker"))))
                }, t
            }(i.Component);
            ! function(e) {
                e[e.Pending = 0] = "Pending", e[e.None = 1] = "None", e[e.Success = 2] = "Success", e[e.CodeNotUnique = 3] = "CodeNotUnique", e[e.Error = 4] = "Error"
            }(z || (z = {}));
            var G, q = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            code: "",
                            pickers: [],
                            status: z.None
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
                                var e, t, n, a;
                                return r.__generator(this, function(r) {
                                    switch (r.label) {
                                        case 0:
                                            this.setState({
                                                status: z.Pending
                                            }), e = [this.state.emote28 || "", this.state.emote56 || "", this.state.emote112 || ""], r.label = 1;
                                        case 1:
                                            return r.trys.push([1, 4, , 5]), [4, this.props.uploadEmoticon(this.props.channelId, this.props.productId, e, this.state.code && this.transformCode(this.state.code) || "")];
                                        case 2:
                                            return r.sent(), this.setState({
                                                code: "",
                                                emote28: "",
                                                emote56: "",
                                                emote112: "",
                                                status: z.Success
                                            }), [4, this.props.refresh()];
                                        case 3:
                                            for (r.sent(), this.forceUpdate(), t = 0, n = this.state.pickers; t < n.length; t++) n[t].resetEmote();
                                            return [3, 5];
                                        case 4:
                                            return (a = r.sent()) && "CODE_NOT_UNIQUE" === a.message ? this.setState({
                                                status: z.CodeNotUnique
                                            }) : this.setState({
                                                status: z.Error
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
                    return r.__extends(t, e), t.prototype.render = function() {
                        return i.createElement(m.Va, {
                            margin: {
                                top: 1
                            }
                        }, this.renderStatus(), i.createElement(m.Va, {
                            margin: {
                                bottom: 1
                            }
                        }, this.renderPicker(28), this.renderPicker(56), this.renderPicker(112)), i.createElement(m.Va, {
                            margin: {
                                y: 1
                            }
                        }, i.createElement(P.a, {
                            label: Object(g.d)("Unique Code", "EmotesUploader")
                        }, i.createElement(m.Pa, {
                            type: m.Ra.Text,
                            value: this.state.code,
                            onChange: this.onChange
                        }))), i.createElement(m.Va, {
                            margin: {
                                y: 1
                            }
                        }, i.createElement(P.a, {
                            label: Object(g.d)("Full Emoticon Code Preview", "EmotesUploader")
                        }, this.props.emoticonPrefix, this.state.code && this.transformCode(this.state.code))), i.createElement(m.Va, {
                            margin: {
                                y: 1
                            }
                        }, i.createElement(P.a, {
                            label: ""
                        }, i.createElement(m.z, {
                            disabled: this.submitDisabled,
                            onClick: this.onClick,
                            "data-test-selector": "upload-emoticon-button"
                        }, Object(g.d)("Submit Changes", "EmotesUploader")))))
                    }, t.prototype.renderStatus = function() {
                        return this.state.status === z.Error ? i.createElement(m.xb, {
                            "data-test-selector": "upload-emoticon-error",
                            borderTop: !0,
                            borderRight: !0,
                            borderBottom: !0,
                            padding: 1,
                            margin: {
                                top: 1
                            },
                            className: "disable-gift-modal__error"
                        }, i.createElement(m.V, null, Object(g.d)("Something went wrong and your request could not be processed at this time. Please try again later.", "EmotesUploader"))) : this.state.status === z.CodeNotUnique ? i.createElement(m.xb, {
                            "data-test-selector": "upload-emoticon-code-invalid",
                            borderTop: !0,
                            borderRight: !0,
                            borderBottom: !0,
                            padding: 1,
                            margin: {
                                top: 1
                            },
                            className: "disable-gift-modal__error"
                        }, i.createElement(m.V, null, Object(g.d)("An emoticon with the same code already exists.", "EmotesUploader"))) : this.state.status === z.Success ? i.createElement(m.xb, {
                            "data-test-selector": "upload-emoticon-success",
                            borderTop: !0,
                            borderRight: !0,
                            borderBottom: !0,
                            padding: 1,
                            margin: {
                                top: 1
                            },
                            className: "disable-gift-modal"
                        }, i.createElement(m.V, null, Object(g.d)("Emoticon was successfully uploaded!", "EmotesUploader"))) : null
                    }, Object.defineProperty(t.prototype, "submitDisabled", {
                        get: function() {
                            return this.state.status === z.Pending || !(this.state.emote112 && this.state.emote56 && this.state.emote28 && this.state.code)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t.prototype.transformCode = function(e) {
                        return e.charAt(0).toUpperCase() + e.slice(1)
                    }, t
                }(i.Component),
                H = (n("N9yH"), function(e) {
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
                            a = i.createElement(m.Va, {
                                margin: {
                                    left: 1,
                                    right: 2
                                }
                            }, i.createElement(m.N, {
                                label: "",
                                checked: this.state.isChecked,
                                "data-id": n.id,
                                onChange: this.selectForDelete
                            })),
                            r = n.state && "PENDING" === n.state ? Object(g.d)("( Pending )", "ChatEmoticonsSettingsItem") : "";
                        return i.createElement(m.Qb, {
                            display: m.W.Flex,
                            align: m.Rb.Center,
                            label: n.token + r,
                            direction: m.Sb.Bottom
                        }, i.createElement(m.Va, {
                            display: m.W.InlineBlock,
                            className: "emote-item__img"
                        }, i.createElement(m.S, {
                            alt: Object(g.d)("Emoticon", "ChatEmoticonsSettingsItem"),
                            src: "https://static-cdn.jtvnw.net/emoticons/v1/" + n.id + "/1.0"
                        })), t ? a : null)
                    }, t
                }(i.Component)),
                Q = (n("qulQ"), function(e) {
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
                                return i.createElement(m.Va, {
                                    display: m.W.InlineBlock,
                                    key: t.id,
                                    margin: {
                                        y: .5,
                                        right: .5
                                    }
                                }, i.createElement(H, {
                                    emoticon: t,
                                    toggleEmoteForDeletion: e.props.toggleEmoteForDeletion,
                                    isEditing: n
                                }))
                            }),
                            s = this.props.emoticonLimit - o.length;
                        if (s > 0)
                            for (var l = 0; l < s; l++) o.push(i.createElement(m.Va, {
                                display: m.W.InlineBlock,
                                key: l,
                                margin: {
                                    y: .5,
                                    right: .5
                                },
                                position: m.db.Relative
                            }, i.createElement("div", {
                                className: "emoticons-list__empty"
                            }, i.createElement(m.X, null))));
                        var d = r.map(function(t, a) {
                                var r = null;
                                if (0 === t.emotes.length) r = i.createElement(m.xb, {
                                    display: m.W.InlineBlock,
                                    key: a,
                                    margin: {
                                        y: .5,
                                        right: .5
                                    },
                                    position: m.db.Relative
                                }, i.createElement("div", {
                                    className: "emoticons-list__empty"
                                }, i.createElement(m.X, null)));
                                else {
                                    var o = t.emotes[0];
                                    r = i.createElement(i.Fragment, null, i.createElement(m.Va, {
                                        display: m.W.InlineBlock,
                                        key: o.id
                                    }, i.createElement(H, {
                                        emoticon: o,
                                        toggleEmoteForDeletion: e.props.toggleEmoteForDeletion,
                                        isEditing: n
                                    })), i.createElement(m.Va, {
                                        position: m.db.Relative,
                                        margin: {
                                            left: .5
                                        },
                                        display: m.W.InlineBlock,
                                        className: "emoticons-list__price"
                                    }, i.createElement(m.V, null, t.price)))
                                }
                                return i.createElement(m.Va, {
                                    display: m.W.InlineBlock,
                                    key: a,
                                    margin: {
                                        right: 1
                                    }
                                }, r)
                            }),
                            c = Object(g.d)("Emoticons {a}/{b}", {
                                a: a.length,
                                b: this.props.emoticonLimit
                            }, "EmoticonsList"),
                            u = i.createElement(P.a, {
                                label: Object(g.d)("Upload Progress", "EmoticonsList")
                            }, i.createElement(m.Va, {
                                margin: {
                                    top: 1,
                                    bottom: 2
                                }
                            }, i.createElement(m.V, null, Object(g.d)("Mission: Get {num} Subscriber Points", {
                                num: this.props.maxSubScore
                            }, "EmoticonsList"))), i.createElement(m.Va, {
                                margin: {
                                    y: 1
                                }
                            }, i.createElement(m.Va, {
                                display: m.W.InlineBlock
                            }, i.createElement(m.V, null, Object(g.d)("Reward", "EmoticonsList"), ":")), i.createElement(m.Va, {
                                display: m.W.InlineBlock
                            }, i.createElement(m.V, null, "+", this.props.nextEmoticonLimit - this.props.emoticonLimit, " ", Object(g.d)("Emoticon Slot(s)", "EmoticonsList")))), i.createElement(m.gb, {
                                mask: !0,
                                value: this.props.currentSubScore / this.props.maxSubScore * 100,
                                size: m.ib.Default
                            }), i.createElement(m.Va, {
                                margin: {
                                    top: 1,
                                    bottom: 2
                                }
                            }, i.createElement(m.V, null, this.props.currentSubScore, "/", this.props.maxSubScore, " ", Object(g.d)("Subscriber Points", "EmoticonsList"))));
                        return i.createElement(i.Fragment, null, i.createElement(P.a, {
                            label: c
                        }, o), i.createElement(P.a, {
                            label: Object(g.d)("Additional Emoticons", "EmoticonsList")
                        }, d, i.createElement(m.Va, {
                            margin: {
                                y: 1
                            }
                        }, i.createElement(m.V, null, Object(g.d)("1 extra emoticon for $9.99 subscribers, and 1 extra for $24.99 subscribers.", "EmoticonsList")), i.createElement(m.V, null, Object(g.d)("$24.99 subscribers will have access to both emoticons.", "EmoticonsList")))), this.props.nextEmoticonLimit > 0 ? u : null)
                    }, t
                }(i.Component)),
                X = (n("5Omc"), n("W6a3"));
            ! function(e) {
                e[e.None = 0] = "None", e[e.Error = 1] = "Error", e[e.Success = 2] = "Success"
            }(G || (G = {}));
            var $ = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            activeTab: 0,
                            isEditing: !1,
                            emotesDeleteQueue: [],
                            deleteStatus: G.None
                        }, t.renderContent = function() {
                            if (t.props.data.loading) return i.createElement(m.Xa, {
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
                                    uploadEmoticon: L
                                }) : i.createElement(m.Va, {
                                    margin: {
                                        y: 2
                                    }
                                }, Object(g.d)("You’ve already uploaded an emoticon for your {price} subscription. Please feel free to swap an emoticon for a new one by clicking edit, selecting the emoticon(s) you wish to remove, clicking delete, then submitting a new emoticon in the sizes specified.", {
                                    price: o.price
                                }, "ChatEmoticonsSettingsPage"));
                                var d = t.props.data.user.subscriberScore.nextEmoteLimit || 0,
                                    c = t.props.data.user.subscriberScore.next || 0;
                                return i.createElement(i.Fragment, null, t.renderDeleteError(), t.goodStanding(), i.createElement(m.xb, {
                                    className: "chat-emoticons-settings-page__actions"
                                }, t.state.isEditing ? t.editActions() : i.createElement(m.z, {
                                    onClick: t.toggleEmotesEditing
                                }, Object(g.d)("Edit", "ChatEmoticonsSettingsPage"))), i.createElement(m.Va, {
                                    padding: {
                                        bottom: 2
                                    }
                                }, i.createElement(Q, {
                                    emoticonLimit: t.props.data.user.subscriberScore.currentEmoteLimit,
                                    nextEmoticonLimit: d,
                                    currentSubScore: t.props.data.user.subscriberScore.current,
                                    maxSubScore: c,
                                    emoticons: n,
                                    products: r,
                                    channelName: t.props.channelName,
                                    isEditing: t.state.isEditing,
                                    toggleEmoteForDeletion: t.toggleEmoteForDeletion
                                })), i.createElement(m.Va, {
                                    padding: {
                                        top: 1,
                                        bottom: 2,
                                        left: 2,
                                        right: 2
                                    }
                                }, i.createElement("h3", null, i.createElement(m.V, null, Object(g.d)("Upload Emoticons", "ChatEmoticonsSettingsPage"))), i.createElement(m.Va, {
                                    margin: {
                                        top: 3
                                    }
                                }, i.createElement(m.zb, null, t.getTabs())), s))
                            }
                            return t.renderPageError()
                        }, t.renderPageError = function() {
                            return i.createElement(h.a, {
                                message: Object(g.d)("Failed to get emote settings. Please try again later", "ChatEmoticonsSettingsPage")
                            })
                        }, t.getTabs = function() {
                            return t.props.data.user && t.props.data.user.subscriptionProducts ? t.props.data.user.subscriptionProducts.map(function(e, n) {
                                return e ? i.createElement(m.yb, {
                                    key: e.tier,
                                    active: t.state.activeTab === n,
                                    "data-tab-target": e.tier,
                                    onClick: t.toggleActiveTab
                                }, i.createElement(m.V, null, Object(g.d)("Tier {n}", {
                                    n: n + 1
                                }, "ChatEmoticonsSettingsPage"))) : null
                            }) : null
                        }, t.goodStanding = function() {
                            return t.props.data.user && t.props.data.user.isInGoodStanding ? i.createElement(m.xb, {
                                className: "chat-emoticons-settings-page__goodstanding",
                                background: m.r.Alt,
                                color: m.O.Alt,
                                padding: 1,
                                margin: {
                                    x: "auto",
                                    top: 2
                                },
                                border: !0
                            }, Object(g.d)("As a Partner in good standing with the ToS, you can add emotes without going through a manual review. Please keep in mind that the <x:link>same emote rules</x:link> still apply.", {
                                "x:link": function(e) {
                                    return i.createElement(m.T, {
                                        to: "https://help.twitch.tv/customer/portal/articles/2348985"
                                    }, e)
                                }
                            }, "ChatEmoticonsSettingsPage")) : null
                        }, t.editActions = function() {
                            return i.createElement(i.Fragment, null, i.createElement(m.z, {
                                type: m.F.Alert,
                                disabled: 0 === t.state.emotesDeleteQueue.length,
                                onClick: t.deleteEmotes
                            }, Object(g.d)("Delete", "ChatEmoticonsSettingsPage")), i.createElement(m.z, {
                                onClick: t.toggleEmotesEditing
                            }, Object(g.d)("Cancel", "ChatEmoticonsSettingsPage")))
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
                                                                return [4, V.a.deleteOrThrow("v" + g.a.defaultAPIVersion + "/ticket_products/" + e + "/remove_emoticon", {
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
                                            return a.sent(), [3, 6];
                                        case 4:
                                            return a.sent(), this.setState({
                                                deleteStatus: G.Error
                                            }), [2];
                                        case 5:
                                            return this.setState({
                                                deleteStatus: G.Success,
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
                        var e = i.createElement(A.a, {
                            title: Object(g.d)("Emotes Settings", "EmotesSettingsPage"),
                            description: Object(g.d)("Emoticons that your subscribers can use in Twitch chat", "EmotesSettingsPage"),
                            linkToParent: "/" + this.props.channelName + "/dashboard/settings/revenue"
                        });
                        return i.createElement(w.a, {
                            header: e
                        }, this.renderContent())
                    }, t.prototype.renderDeleteError = function() {
                        return this.state.deleteStatus === G.Error ? i.createElement(m.xb, {
                            borderTop: !0,
                            borderRight: !0,
                            borderBottom: !0,
                            padding: 1,
                            margin: {
                                top: 1
                            },
                            className: "disable-gift-modal__error"
                        }, i.createElement(m.V, null, Object(g.d)("Something went wrong and your request could not be processed at this time. Please try again later.", "ChatEmoticonsSettingsPage"))) : null
                    }, t
                }(i.Component),
                K = Object(E.compose)(Object(f.a)(X, {
                    options: function(e) {
                        return {
                            variables: {
                                login: e.channelName
                            }
                        }
                    }
                }))($),
                Z = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.refetch = function() {
                            t.props.data.refetch()
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.componentDidMount = function() {
                        g.o.setPageTitle(Object(g.d)("Emotes Settings", "ChatEmoticonsPageTitle")), this.props.data.loading && !this.props.data.error || this.props.latencyTracking.reportInteractive()
                    }, t.prototype.componentDidUpdate = function(e) {
                        (e.data.loading && !this.props.data.loading || this.props.data.error) && this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        return this.props.data.user && this.props.data.user.id && this.props.data.user.emoticonPrefix && this.props.data.user.emoticonPrefix.state ? this.props.data.user && this.props.data.user.emoticonPrefix.state === a.ACTIVE ? i.createElement(K, {
                            channelName: this.props.match.params.channelName,
                            emoticonPrefix: this.props.data.user.emoticonPrefix.name
                        }) : i.createElement(F, {
                            channelId: this.props.data.user.id,
                            channelName: this.props.match.params.channelName,
                            prefix: this.props.data.user.emoticonPrefix.name,
                            prefixState: this.props.data.user.emoticonPrefix.state,
                            refetch: this.refetch
                        }) : this.props.data.loading ? i.createElement(m.Xa, {
                            fillContent: !0
                        }) : i.createElement(h.a, {
                            message: Object(g.d)("Failed to get emote settings. Please try again later.", "ChatEmoticonsPage")
                        })
                    }, t
                }(i.Component),
                J = Object(E.compose)(Object(u.c)("ChatEmoticonsPage", {
                    destination: S.a.DashboardSettingsRevenueChatEmoticons
                }), Object(y.a)({
                    location: k.PageviewLocation.DashboardSettingsRevenueChatEmoticons
                }), Object(f.a)(j, {
                    options: function(e) {
                        return {
                            variables: {
                                login: e.match.params.channelName
                            }
                        }
                    }
                }))(Z),
                ee = n("3R7m"),
                te = n("o6p4"),
                ne = function(e) {
                    return i.createElement(m.xb, {
                        display: m.W.Flex,
                        flexDirection: m.Y.Row,
                        background: m.r.Alt,
                        alignItems: m.f.Center,
                        padding: 1
                    }, i.createElement(m.Va, {
                        margin: {
                            right: 1
                        },
                        display: m.W.Flex,
                        alignContent: m.e.Center
                    }, i.createElement(m.Qb, {
                        label: e.title,
                        "data-test-selector": "tooltip-selector"
                    }, i.createElement("img", {
                        alt: e.title,
                        src: e.imageSrc
                    }))), i.createElement(m.Va, {
                        flexGrow: 1
                    }, i.createElement(m.V, {
                        "data-test-selector": "threshold-selector"
                    }, Object(g.d)("{threshold} Bit Badge", {
                        threshold: Object(g.e)(e.threshold)
                    }, "ChatBadgeTierItem"))), i.createElement(m.Pb, {
                        onChange: e.onToggle,
                        checked: e.checked,
                        "data-test-selector": "toggle-selector"
                    }, Object(g.d)("Edit", "ChatBadgeTierItem")))
                },
                ae = function() {
                    return i.createElement(m.xb, {
                        padding: 1,
                        display: m.W.Flex,
                        flexDirection: m.Y.Row
                    }, i.createElement(m.Va, {
                        padding: {
                            right: 1
                        }
                    }, i.createElement(m.cb, {
                        width: 20,
                        height: 20
                    })), i.createElement(m.Va, {
                        flexGrow: 1
                    }, i.createElement(m.cb, null)))
                },
                re = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            saveStatus: O.b.NoChanges
                        }, t.renderTierItems = function() {
                            return t.tiers.map(function(e, n) {
                                var a, r;
                                return e && e.badge ? (a = e.badge.id, r = i.createElement(ne, {
                                    threshold: e.threshold,
                                    checked: e.isEnabled,
                                    imageSrc: e.badge.image1x,
                                    title: e.badge.title,
                                    onToggle: t.onItemToggle.bind(t, n)
                                })) : (a = n, r = i.createElement(ae, null)), i.createElement(m.Va, {
                                    margin: {
                                        bottom: 1
                                    },
                                    key: a
                                }, r)
                            })
                        }, t.onItemToggle = function(e, n) {
                            return r.__awaiter(t, void 0, void 0, function() {
                                var t, a, i, o, s, l, d, c, u;
                                return r.__generator(this, function(m) {
                                    switch (m.label) {
                                        case 0:
                                            return t = n.currentTarget.checked, a = this.props, i = a.channelName, o = a.data, s = a.updateBadgeTiers, this.tiers && o.user && o.user.id ? (l = this.tiers[e], d = {
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
                                                            tiers: this.tiers.slice(0, e).concat([r.__assign({}, l, {
                                                                isEnabled: t
                                                            })], this.tiers.slice(e + 1))
                                                        }
                                                    }
                                                }
                                            }, [4, s(Object(N.b)(d, c))]) : [2];
                                        case 1:
                                            return u = m.sent(), Object(N.e)(ee, {
                                                login: i
                                            }, function(t) {
                                                return t.user && t.user.settings && t.user.settings.cheer && t.user.settings.cheer.badges && u.data.updateCheerPartnerSettings && u.data.updateCheerPartnerSettings.cheer && u.data.updateCheerPartnerSettings.cheer.badges && (t.user.settings.cheer.badges.tiers[e].isEnabled = u.data.updateCheerPartnerSettings.cheer.badges.tiers[e].isEnabled), t
                                            }), [2]
                                    }
                                })
                            })
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.data.loading && !this.props.data.error || this.props.latencyTracking.reportInteractive()
                    }, t.prototype.componentDidUpdate = function(e) {
                        (e.data.loading && !this.props.data.loading || this.props.data.error) && this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        var e = this.renderTierItems();
                        return i.createElement(P.a, {
                            label: Object(g.d)("Chat Badge Tiers", "ChatBadgeTiersForm")
                        }, i.createElement(m.Va, {
                            margin: {
                                bottom: 2
                            }
                        }, i.createElement(m.V, null, Object(g.d)("Choose which Cheer Chat Badges are enabled in your channel. Viewers unlock badges based on total Bits used to Cheer for you. The highest unlocked enabled badge will appear next to viewers' names", "ChatBadgeTiersForm"))), i.createElement(m.Ha, {
                            gutterSize: m.Ia.Medium
                        }, i.createElement(m.P, {
                            cols: {
                                default: 12,
                                sm: 6
                            }
                        }, e.slice(0, Math.floor(e.length / 2))), i.createElement(m.P, {
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
                ie = Object(E.compose)(Object(f.a)(ee, {
                    options: function(e) {
                        return {
                            variables: {
                                login: e.channelName
                            }
                        }
                    }
                }), Object(f.a)(te, {
                    name: "updateBadgeTiers"
                }), Object(u.c)("ChatBadgeTiersForm"))(re),
                oe = n("ulzF"),
                se = (n("vyjL"), function(e) {
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
                        return i.createElement(m.xb, {
                            position: m.db.Relative,
                            padding: 5,
                            background: m.r.Alt
                        }, i.createElement(M.a, {
                            allowedFileTypes: [".png"],
                            onFilesSubmitted: this.onFilesSubmitted,
                            error: t
                        }, i.createElement(m.xb, {
                            position: m.db.Absolute,
                            attachTop: !0,
                            attachLeft: !0,
                            fullWidth: !0,
                            fullHeight: !0,
                            display: m.W.Flex,
                            flexDirection: m.Y.Column,
                            alignItems: m.f.Center,
                            justifyContent: m.Ua.Center,
                            className: "chat-badge-drop-zone__content"
                        }, n)))
                    }, t
                }(i.Component));
            var le, de = function(e, t) {
                    return r.__awaiter(void 0, void 0, void 0, function() {
                        var n, a, i;
                        return r.__generator(this, function(r) {
                            switch (r.label) {
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
                                    return n = r.sent(), a = n.height, i = n.width, [2, a === t.height && i === t.width]
                            }
                        })
                    })
                },
                ce = n("v5Wq"),
                ue = n("XOYr"),
                me = 18,
                pe = 36,
                ge = 72,
                he = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            selectedIndex: 2,
                            stagedImageURLs: {},
                            saveStatus: O.b.NoChanges,
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
                                        saveStatus: r && r.image1x && r.image2x && r.image4x ? O.b.DirtyChanges : O.b.NoChanges
                                    }
                                }
                            })
                        }, t.onNormalImageSubmitted = function(e) {
                            return r.__awaiter(t, void 0, void 0, function() {
                                return r.__generator(this, function(t) {
                                    switch (t.label) {
                                        case 0:
                                            return [4, de(e, {
                                                height: me,
                                                width: me
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
                                            return [4, de(e, {
                                                height: pe,
                                                width: pe
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
                                            return [4, de(e, {
                                                height: ge,
                                                width: ge
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
                                var a;
                                if (t.tiers) {
                                    var i = t.tiers[n.selectedIndex],
                                        o = {};
                                    return e && (o = r.__assign({}, n.stagedImageURLs[i.threshold], e)), {
                                        stagedImageURLs: r.__assign({}, n.stagedImageURLs, (a = {}, a[i.threshold] = o, a)),
                                        saveStatus: o && o.image1x && o.image2x && o.image4x ? O.b.DirtyChanges : O.b.NoChanges,
                                        image1xError: !1,
                                        image2xError: !1,
                                        image4xError: !1
                                    }
                                }
                            })
                        }, t.onRevertButtonClick = function() {
                            return r.__awaiter(t, void 0, void 0, function() {
                                var e, t, n, a, i, o, s, l, d, c = this;
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
                                            }, [4, a(Object(N.b)(s, l))]) : [2] : [2];
                                        case 1:
                                            return d = u.sent(), Object(N.e)(ce, {
                                                login: i
                                            }, function(t) {
                                                if (t.user && t.user.settings && t.user.settings.cheer && t.user.settings.cheer.badges && d.data.updateCheerPartnerSettings && d.data.updateCheerPartnerSettings.cheer && d.data.updateCheerPartnerSettings.cheer.badges) {
                                                    var n = d.data.updateCheerPartnerSettings.cheer.badges.tiers[e],
                                                        a = t.user.settings.cheer.badges.tiers[e];
                                                    n && n.badge && a && a.badge && (a.badge = r.__assign({}, a.badge, n.badge))
                                                }
                                                return c.updateStagedImageURLs(), t
                                            }), [2]
                                    }
                                })
                            })
                        }, t.onSaveButtonClick = function() {
                            return r.__awaiter(t, void 0, void 0, function() {
                                var e, t, n, a, i, o, s, l, d, c, u;
                                return r.__generator(this, function(m) {
                                    switch (m.label) {
                                        case 0:
                                            if (e = this.state, t = e.stagedImageURLs, n = e.selectedIndex, a = this.props, i = a.data, o = a.updateBadgeTierImages, s = a.channelName, !this.tiers || !i.user || !i.user.id) return [2];
                                            if (l = this.tiers[n], !(d = t[l.threshold]).image1x || !d.image2x || !d.image4x) return [2];
                                            c = {
                                                userID: i.user.id,
                                                badges: {
                                                    tiers: [{
                                                        threshold: l.threshold,
                                                        imageData1x: Object(oe.b)(d.image1x),
                                                        imageData2x: Object(oe.b)(d.image2x),
                                                        imageData4x: Object(oe.b)(d.image4x)
                                                    }]
                                                }
                                            }, this.setState({
                                                saveStatus: O.b.Working
                                            }), m.label = 1;
                                        case 1:
                                            return m.trys.push([1, 3, , 4]), [4, o(Object(N.a)(c))];
                                        case 2:
                                            return u = m.sent(), Object(N.e)(ce, {
                                                login: s
                                            }, function(e) {
                                                if (e.user && e.user.settings && e.user.settings.cheer && e.user.settings.cheer.badges && u.data.updateCheerPartnerSettings && u.data.updateCheerPartnerSettings.cheer && u.data.updateCheerPartnerSettings.cheer.badges) {
                                                    var t = u.data.updateCheerPartnerSettings.cheer.badges.tiers[n],
                                                        a = e.user.settings.cheer.badges.tiers[n];
                                                    t && t.badge && a && a.badge && (a.badge = r.__assign({}, a.badge, t.badge))
                                                }
                                                return e
                                            }), this.updateStagedImageURLs(), this.setState({
                                                saveStatus: O.b.Success
                                            }), [3, 4];
                                        case 3:
                                            return m.sent(), this.setState({
                                                saveStatus: O.b.Error
                                            }), [3, 4];
                                        case 4:
                                            return [2]
                                    }
                                })
                            })
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.componentDidMount = function() {
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
                        var l, d, c, u, p = this.tiers[t];
                        p.badge && p.badge.user && (l = i.createElement(m.z, {
                            onClick: this.onRevertButtonClick,
                            type: m.F.Hollow,
                            fullWidth: !0
                        }, Object(g.d)("Reset to Default Badge", "ChatBadgeUploadForm")), d = p.badge.image1x, c = p.badge.image2x, u = p.badge.image4x);
                        var h = n[p.threshold];
                        return h && (d = h.image1x || d, c = h.image2x || c, u = h.image4x || u), i.createElement(P.a, {
                            label: Object(g.d)("Upload Badge Images", "ChatBadgeUploadForm")
                        }, i.createElement(m.Ha, null, i.createElement(m.P, {
                            cols: {
                                default: 12,
                                sm: 5
                            }
                        }, i.createElement(m.sb, {
                            onChange: this.onSelectChange,
                            value: String(p.threshold)
                        }, this.tiers.map(function(e) {
                            return i.createElement("option", {
                                key: e.threshold,
                                value: e.threshold,
                                disabled: e.threshold < 1e3
                            }, " ", Object(g.d)("{threshold} Bit Badge", {
                                threshold: Object(g.e)(e.threshold)
                            }, "ChatBadgeUploadForm"))
                        })))), i.createElement(m.Ha, null, i.createElement(m.P, {
                            cols: {
                                default: 12,
                                sm: 8
                            }
                        }, i.createElement(m.Va, {
                            display: m.W.Flex,
                            justifyContent: m.Ua.Between,
                            margin: {
                                y: 2
                            }
                        }, i.createElement(m.Va, {
                            display: m.W.InlineFlex,
                            flexDirection: m.Y.Column,
                            alignItems: m.f.Center
                        }, i.createElement(se, {
                            onImageSubmit: this.onNormalImageSubmitted,
                            error: r
                        }, d ? i.createElement("img", {
                            src: d,
                            height: 18,
                            width: 18
                        }) : i.createElement(m.mb, {
                            asset: m.nb.Plus,
                            height: 32,
                            width: 32
                        })), i.createElement(m.V, {
                            color: r ? m.O.Error : m.O.Base
                        }, Object(g.d)("18 x 18px", "ChatBadgeUploadForm"))), i.createElement(m.Va, {
                            display: m.W.InlineFlex,
                            flexDirection: m.Y.Column,
                            alignItems: m.f.Center
                        }, i.createElement(se, {
                            onImageSubmit: this.onDoubleImageSubmitted,
                            error: o
                        }, c ? i.createElement("img", {
                            src: c,
                            height: 36,
                            width: 36
                        }) : i.createElement(m.mb, {
                            asset: m.nb.Plus,
                            height: 32,
                            width: 32
                        })), i.createElement(m.V, {
                            color: o ? m.O.Error : m.O.Base
                        }, Object(g.d)("36 x 36px", "ChatBadgeUploadForm"))), i.createElement(m.Va, {
                            display: m.W.InlineFlex,
                            flexDirection: m.Y.Column,
                            alignItems: m.f.Center
                        }, i.createElement(se, {
                            onImageSubmit: this.onQuadrupleImageSubmitted,
                            error: s
                        }, u ? i.createElement("img", {
                            src: u,
                            height: 72,
                            width: 72
                        }) : i.createElement(m.mb, {
                            asset: m.nb.Plus,
                            height: 32,
                            width: 32
                        })), i.createElement(m.V, {
                            color: s ? m.O.Error : m.O.Base
                        }, Object(g.d)("72 x 72px", "ChatBadgeUploadForm")))))), i.createElement(m.Ha, {
                            gutterSize: m.Ia.Medium
                        }, i.createElement(m.P, {
                            cols: 4
                        }, i.createElement(O.a, {
                            status: a,
                            onClick: this.onSaveButtonClick,
                            fullWidth: !0
                        }, Object(g.d)("Upload Badge Images", "ChatBadgeUploadFormSaveButton"))), i.createElement(m.P, {
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
                be = Object(E.compose)(Object(f.a)(ce, {
                    options: function(e) {
                        return {
                            variables: {
                                login: e.channelName
                            }
                        }
                    }
                }), Object(f.a)(ue, {
                    name: "updateBadgeTierImages"
                }), Object(u.c)("ChatBadgeUploadForm"))(he),
                fe = n("BZvZ"),
                ve = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return r.__extends(t, e), t.prototype.componentDidMount = function() {
                        g.o.setPageTitle(Object(g.d)("Cheer Chat Badge Settings", "CheerBadgesSettingsPageTitle")), this.props.data.loading && !this.props.data.error || this.props.latencyTracking.reportInteractive()
                    }, t.prototype.componentDidUpdate = function(e) {
                        (e.data.loading && !this.props.data.loading || this.props.data.error) && this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        var e = this.props,
                            t = e.match,
                            n = e.data,
                            a = i.createElement(A.a, {
                                title: Object(g.d)("Cheer Chat Badge Settings", "CheerBadgesSettingsPage"),
                                description: Object(g.d)("Custom settings for Cheer chat badges", "CheerBadgesSettingsPage"),
                                linkToParent: "/" + t.params.channelName + "/dashboard/settings/revenue"
                            });
                        return i.createElement(w.a, {
                            header: a
                        }, i.createElement(ie, {
                            channelName: t.params.channelName
                        }), n.user && n.user.roles && n.user.roles.isPartner && i.createElement(be, {
                            channelName: t.params.channelName
                        }))
                    }, t
                }(i.Component),
                Ee = Object(E.compose)(Object(u.c)("CheerBadgesSettingsPage", {
                    destination: S.a.DashboardSettingsRevenueCheerBadges
                }), Object(y.a)({
                    location: k.PageviewLocation.DashboardSettingsRevenueCheerBadges
                }), Object(f.a)(fe, {
                    options: function(e) {
                        return {
                            variables: {
                                login: e.match.params.channelName
                            }
                        }
                    }
                }))(ve),
                ye = n("G1cX"),
                Se = n("eDVu"),
                ke = n("WQCf"),
                Ne = n("/aPz");
            ! function(e) {
                e.ALLTIME = "ALLTIME", e.MONTH = "MONTH", e.WEEK = "WEEK"
            }(le || (le = {}));
            var Oe, Te = n("TEIt"),
                Ce = n("7LUr"),
                Pe = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onLeaderboardEnabledCheckBoxClick = function(e) {
                            return r.__awaiter(t, void 0, void 0, function() {
                                var t, n, a, i, o, s, l, d, c;
                                return r.__generator(this, function(r) {
                                    switch (r.label) {
                                        case 0:
                                            if (t = e.currentTarget.checked, n = this.props, a = n.setPinnedCheerSettings, i = n.data, o = n.channelName, !(i.user && i.user.id && i.user.settings && i.user.settings.cheer)) return [2];
                                            s = {
                                                userID: i.user.id,
                                                leaderboard: {
                                                    isEnabled: t
                                                }
                                            }, l = ye(i.user.settings.cheer, function(e) {
                                                return e.leaderboard
                                            }, function(e) {
                                                return e.isEnabled = t, e
                                            }), d = {
                                                updateCheerPartnerSettings: {
                                                    __typename: "UpdateCheerPartnerSettingsPayload",
                                                    cheer: l
                                                }
                                            }, r.label = 1;
                                        case 1:
                                            return r.trys.push([1, 3, , 4]), [4, a(Object(N.b)(s, d))];
                                        case 2:
                                            return c = r.sent(), Object(N.e)(Ce, {
                                                login: o
                                            }, function(e) {
                                                return e.user && e.user.settings && e.user.settings.cheer && c.data.updateCheerPartnerSettings && (e.user.settings.cheer.leaderboard.isEnabled = c.data.updateCheerPartnerSettings.cheer.leaderboard.isEnabled), e
                                            }), [3, 4];
                                        case 3:
                                            return r.sent(), [3, 4];
                                        case 4:
                                            return [2]
                                    }
                                })
                            })
                        }, t.onLeaderboardTimePeriodRadioButtonClick = function(e) {
                            return r.__awaiter(t, void 0, void 0, function() {
                                var t, n, a, i, o, s, l, d, c;
                                return r.__generator(this, function(r) {
                                    switch (r.label) {
                                        case 0:
                                            if (t = e.currentTarget.value, n = this.props, a = n.setPinnedCheerSettings, i = n.data, o = n.channelName, !(i.user && i.user.id && i.user.settings && i.user.settings.cheer)) return [2];
                                            s = {
                                                userID: i.user.id,
                                                leaderboard: {
                                                    timePeriod: t
                                                }
                                            }, l = ye(i.user.settings.cheer, function(e) {
                                                return e.leaderboard
                                            }, function(e) {
                                                return e.timePeriod = t, e
                                            }), d = {
                                                updateCheerPartnerSettings: {
                                                    __typename: "UpdateCheerPartnerSettingsPayload",
                                                    cheer: l
                                                }
                                            }, r.label = 1;
                                        case 1:
                                            return r.trys.push([1, 3, , 4]), [4, a(Object(N.b)(s, d))];
                                        case 2:
                                            return c = r.sent(), Object(N.e)(Ce, {
                                                login: o
                                            }, function(e) {
                                                return e.user && e.user.settings && e.user.settings.cheer && c.data.updateCheerPartnerSettings && (e.user.settings.cheer.leaderboard.timePeriod = c.data.updateCheerPartnerSettings.cheer.leaderboard.timePeriod), e
                                            }), [3, 4];
                                        case 3:
                                            return r.sent(), [3, 4];
                                        case 4:
                                            return [2]
                                    }
                                })
                            })
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.data.loading && !this.props.data.error || this.props.latencyTracking.reportInteractive()
                    }, t.prototype.componentDidUpdate = function(e) {
                        (e.data.loading && !this.props.data.loading || this.props.data.error) && this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        var e = this.props.data,
                            t = !1,
                            n = null;
                        return e.user && e.user.settings && e.user.settings.cheer && (t = e.user.settings.cheer.leaderboard.isEnabled, n = e.user.settings.cheer.leaderboard.timePeriod), i.createElement(w.a, null, i.createElement(P.a, {
                            label: Object(g.d)("Enable Top Cheerers", "PinnedCheerSettings")
                        }, i.createElement(m.N, {
                            label: Object(g.d)("Enable Top Cheerers", "PinnedCheerSettingsCheckBox"),
                            checked: t,
                            onChange: this.onLeaderboardEnabledCheckBoxClick,
                            "data-test-selector": "top-cheerers-checkbox-selector"
                        }), i.createElement(C.a, {
                            text: Object(g.d)("Pin Top Cheerers to the top of your chat.", "PinnedCheerSettings")
                        })), i.createElement(P.a, {
                            label: Object(g.d)("Top Cheerers Time Range", "PinnedCheerSettings")
                        }, i.createElement(m.Va, null, i.createElement(m.jb, {
                            label: Object(g.d)("Weekly", "PinnedCheerSettings"),
                            value: le.WEEK,
                            checked: n === le.WEEK,
                            onChange: this.onLeaderboardTimePeriodRadioButtonClick
                        })), i.createElement(m.Va, {
                            margin: {
                                y: 1
                            }
                        }, i.createElement(m.jb, {
                            label: Object(g.d)("Monthly", "PinnedCheerSettings"),
                            value: le.MONTH,
                            checked: n === le.MONTH,
                            onChange: this.onLeaderboardTimePeriodRadioButtonClick
                        })), i.createElement(m.Va, {
                            margin: {
                                y: 1
                            }
                        }, i.createElement(m.jb, {
                            label: Object(g.d)("All-Time", "PinnedCheerSettings"),
                            value: le.ALLTIME,
                            checked: n === le.ALLTIME,
                            onChange: this.onLeaderboardTimePeriodRadioButtonClick
                        })), i.createElement(C.a, {
                            text: Object(g.d)("Choose Weekly for a leaderboard that automatically resets every Monday 12:01AM PT. Choose Monthly to reset every 1st day of the month. Choose All-Time for a leaderboard that tracks the Top Cheerers in your channel for all time, starting from when Bits launched in June of 2016.", "PinnedCheerSettings")
                        })))
                    }, t
                }(i.Component),
                Ae = Object(E.compose)(Object(f.a)(Ce, {
                    options: function(e) {
                        return {
                            variables: {
                                login: e.channelName
                            }
                        }
                    }
                }), Object(f.a)(Te, {
                    name: "setPinnedCheerSettings"
                }), Object(u.c)("PinnedCheerSettingsForm"), Object(Se.a)(function(e) {
                    return {
                        query: Ce,
                        variables: {
                            login: e.channelName
                        },
                        topic: e.data && e.data.user && e.data.user.id ? Object(Ne.d)(e.data.user.id) : "",
                        type: ke.c.BitsChannelSettingsEvent,
                        skip: !e.data.user || !e.data.user.id,
                        mutator: function(e, t) {
                            var n = e.updates;
                            return t.user && t.user.settings && t.user.settings.cheer && (void 0 !== n.leaderboard_enabled && (t.user.settings.cheer.leaderboard.isEnabled = n.leaderboard_enabled), void 0 !== n.leaderboard_time_period && (t.user.settings.cheer.leaderboard.timePeriod = le[n.leaderboard_time_period])), t
                        }
                    }
                }))(Pe),
                _e = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return r.__extends(t, e), t.prototype.componentDidMount = function() {
                        g.o.setPageTitle(Object(g.d)("Pinned and Top Cheers Settings", "CheerSettingsPageTitle"))
                    }, t.prototype.render = function() {
                        var e = this.props.match;
                        return i.createElement(m.Va, null, i.createElement(A.a, {
                            title: Object(g.d)("Top Cheerers Settings", "CheerSettingsPage"),
                            description: Object(g.d)("Custom settings for Top Cheerers", "CheerSettingsPage"),
                            linkToParent: "/" + e.params.channelName + "/dashboard/settings/revenue"
                        }), i.createElement(Ae, {
                            channelName: e.params.channelName
                        }))
                    }, t
                }(i.Component),
                we = Object(E.compose)(Object(u.c)("CheerSettingsPage", {
                    autoReportInteractive: !0,
                    destination: S.a.DashboardSettingsRevenueCheer
                }), Object(y.a)({
                    location: k.PageviewLocation.DashboardSettingsRevenueCheer
                }))(_e),
                Ie = n("Cusz"),
                xe = n("Akna"),
                Re = (n("Nz9P"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            cheermotesToggleError: !1
                        }, t.onItemToggle = function(e) {
                            return r.__awaiter(t, void 0, void 0, function() {
                                var t, n, a, i, o, s, l, d;
                                return r.__generator(this, function(r) {
                                    switch (r.label) {
                                        case 0:
                                            if (t = e.currentTarget.checked, n = this.props, a = n.setCheermotesEnable, i = n.data, o = n.channelName, !(i.user && i.user.id && i.user.settings && i.user.settings.cheer)) return [2];
                                            s = {
                                                userID: i.user.id,
                                                customPrefix: {
                                                    isEnabled: t
                                                }
                                            }, l = Object(N.a)(s), r.label = 1;
                                        case 1:
                                            return r.trys.push([1, 3, , 4]), [4, a(l)];
                                        case 2:
                                            return d = r.sent(), Object(N.e)(xe, {
                                                login: o
                                            }, function(e) {
                                                return d.data.updateCheerPartnerSettings && e.user && e.user.settings && e.user.settings.cheer && (e.user.settings.cheer.customPrefix.isEnabled = d.data.updateCheerPartnerSettings.cheer.customPrefix.isEnabled), e
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
                    return r.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.data.loading && !this.props.data.error || this.props.latencyTracking.reportInteractive()
                    }, t.prototype.componentDidUpdate = function(e) {
                        (e.data.loading && !this.props.data.loading || this.props.data.error) && this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        var e = this.props.data,
                            t = this.state.cheermotesToggleError,
                            n = !1,
                            a = i.createElement(m.cb, {
                                width: 100,
                                height: 18
                            });
                        !e.loading && !e.error && e.user && e.user.settings && e.user.settings.cheer && (n = e.user.settings.cheer.customPrefix.isEnabled, a = i.createElement(m.V, {
                            bold: !0
                        }, e.user.settings.cheer.customPrefix.prefix));
                        var r = this.tiers.map(function(e, t) {
                                var n = e.images[0];
                                return i.createElement(m.xb, {
                                    key: n ? n.id : t,
                                    background: m.r.Alt2,
                                    border: !0,
                                    className: "cheermote-enable-form__cheermote-preview",
                                    margin: {
                                        right: 4 === t ? 0 : 1
                                    },
                                    display: m.W.InlineFlex
                                }, i.createElement("img", {
                                    src: n ? n.url : ""
                                }))
                            }),
                            o = this.tiers.filter(function(e) {
                                return e.images && e.images[0] && e.images[0].url
                            }).length;
                        return i.createElement(P.a, {
                            label: Object(g.d)("Enable Cheermotes", "CheermtoesEnableForm")
                        }, i.createElement(m.Pb, {
                            checked: n,
                            onChange: this.onItemToggle,
                            error: t
                        }), i.createElement(m.Va, {
                            margin: {
                                top: .5
                            }
                        }, i.createElement(m.V, {
                            color: m.O.Alt2
                        }, Object(g.d)("Upload images for all tiers to enable your Cheermote.", "CheermotesEnableForm"))), i.createElement(m.Va, {
                            padding: {
                                y: 2
                            }
                        }, i.createElement(m.V, {
                            color: m.O.Alt2
                        }, Object(g.d)("Cheermote Code", "CheermotesEnableForm")), a), i.createElement(m.Va, null, i.createElement(m.V, {
                            type: m.Nb.Span,
                            color: m.O.Alt2
                        }, Object(g.d)("Tiers", "CheermotesEnableForm")), " ", i.createElement(m.V, {
                            type: m.Nb.Span,
                            color: 5 === o ? m.O.Base : m.O.Error
                        }, Object(g.d)("{tierNum}/{totalTiers}", {
                            tierNum: o,
                            totalTiers: 5
                        }, "CheermotesEnableForm")), i.createElement(m.Ha, null, i.createElement(m.P, {
                            cols: 4
                        }, i.createElement(m.Va, {
                            margin: {
                                top: .5
                            },
                            display: m.W.Flex,
                            justifyContent: m.Ua.Between
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
                De = Object(s.compose)(Object(f.a)(xe, {
                    name: "data",
                    options: function(e) {
                        return {
                            variables: {
                                login: e.channelName
                            }
                        }
                    }
                }), Object(f.a)(Ie, {
                    name: "setCheermotesEnable"
                }), Object(u.c)("CheermotesEnableForm"))(Re),
                Fe = (n("4VZt"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onFilesSubmitted = function(e) {
                            var n = e[0];
                            t.props.onImageSubmit && t.props.onImageSubmit(n, t.props.dpiScale)
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        var e = this.props.children;
                        return i.createElement(m.Va, {
                            className: "cheermote-upload-drop-zone",
                            display: m.W.Flex,
                            flexDirection: m.Y.Column
                        }, i.createElement(m.xb, {
                            className: "cheermote-upload-drop-zone__drop-zone",
                            position: m.db.Relative,
                            padding: 5,
                            background: m.r.Alt
                        }, i.createElement(M.a, {
                            allowedFileTypes: [".png", ".gif"],
                            onFilesSubmitted: this.onFilesSubmitted,
                            error: this.props.error
                        }, i.createElement(m.xb, {
                            position: m.db.Absolute,
                            attachTop: !0,
                            attachLeft: !0,
                            fullWidth: !0,
                            fullHeight: !0,
                            display: m.W.Flex,
                            flexDirection: m.Y.Column,
                            alignItems: m.f.Center,
                            justifyContent: m.Ua.Center
                        }, e))), i.createElement(m.Va, {
                            textAlign: m.Jb.Center,
                            padding: {
                                top: 1
                            }
                        }, i.createElement(m.V, null, Object(g.d)("{dimension} x {dimension}px", {
                            dimension: this.props.dimension
                        }, "CheermoteUploadDropZone"))))
                    }, t
                }(i.Component));

            function je(e, t) {
                return r.__awaiter(this, void 0, Promise, function() {
                    var n;
                    return r.__generator(this, function(a) {
                        switch (a.label) {
                            case 0:
                                return [4, V.a.post("/v5/channels/" + e + "/bits/customcheermotes", {
                                    body: {
                                        background: t.background,
                                        animation_type: t.animationType,
                                        scale: t.scale,
                                        upload_type: t.uploadType,
                                        tier: t.tier
                                    }
                                })];
                            case 1:
                                if ((n = a.sent()).error || !n.body) throw new Error(n.error ? n.error.message : Object(g.d)("no response body", "CheermoteUpload"));
                                return [2, {
                                    uploadID: n.body.upload_id,
                                    uploadURL: n.body.upload_url,
                                    imageURLs: n.body.image_urls
                                }]
                        }
                    })
                })
            }
            var Ve, Le, Ue, Me = ((Oe = {})[1] = 28, Oe[1.5] = 42, Oe[2] = 56, Oe[3] = 84, Oe[4] = 112, Oe),
                Be = function(e) {
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
                                            return r.trys.push([1, 3, , 4]), [4, je(this.props.channelID, t)];
                                        case 2:
                                            return a = r.sent(), this.props.onImageSubmitted(this.props.tier, e, a, Me[n]), [3, 4];
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
                                var a = Me[n.dpiScale];
                                return i.createElement(m.Va, {
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
                                }) : i.createElement(m.mb, {
                                    asset: m.nb.Plus,
                                    height: 32,
                                    width: 32
                                })))
                            });
                        return i.createElement(m.Va, {
                            justifyContent: m.Ua.Between,
                            display: m.W.Flex,
                            flexDirection: m.Y.Row,
                            flexWrap: m.Z.Wrap
                        }, n)
                    }, t
                }(i.PureComponent),
                We = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        return this.props.imageSrc && i.createElement(m.xb, {
                            background: m.r.Alt,
                            display: m.W.Flex,
                            alignItems: m.f.Center,
                            padding: 1
                        }, i.createElement("img", {
                            src: this.props.imageSrc,
                            height: 28,
                            width: 28
                        }), i.createElement(m.Va, {
                            padding: {
                                left: 1
                            }
                        }, i.createElement(m.V, null, Object(g.d)("This is a preview of a chat message with your Cheermote!", "CheermotePreviewBar"))))
                    }, t
                }(i.PureComponent),
                ze = (n("EACF"), function(e) {
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
                                            return r.trys.push([1, 3, , 4]), [4, je(this.props.channelID, t)];
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
                        return i.createElement(Fe, {
                            onImageSubmit: this.onImageSubmitted,
                            dimension: 112,
                            error: !!this.props.uploadError
                        }, this.props.image ? i.createElement("img", {
                            src: this.props.image,
                            height: 112,
                            width: 112
                        }) : i.createElement(m.mb, {
                            asset: m.nb.Plus,
                            height: 32,
                            width: 32
                        }))
                    }, t
                }(i.PureComponent)),
                Ye = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        return i.createElement(m.qb, null, i.createElement(m.rb, {
                            name: this.props.name,
                            value: this.props.left,
                            checked: this.props.selected === this.props.left,
                            label: this.props.leftTitle,
                            onChange: this.props.onToggle,
                            defaultChecked: !0
                        }), i.createElement(m.rb, {
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
            }(Ve || (Ve = {})),
            function(e) {
                e.Light = "light", e.Dark = "dark"
            }(Le || (Le = {})),
            function(e) {
                e.Animated = "animated", e.Static = "static"
            }(Ue || (Ue = {}));
            var Ge = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        uploadType: Ve.Simple,
                        background: Le.Light,
                        animation: Ue.Animated,
                        uploading: !1
                    }, t.onUploadTypeChange = function(e) {
                        var n = e.currentTarget.value,
                            a = Ue.Animated;
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
                        t.uploadImageProgress(e, n, a, Ve.Simple, r, function(e, n) {
                            t.props.onSimpleImageSubmitted(e, n)
                        })
                    }, t.onAdvancedImageUpload = function(e, n, a, r) {
                        t.uploadImageProgress(e, n, a, Ve.Advanced, r, function(e, n) {
                            t.props.onAdvancedImageSubmitted(e, n[0])
                        })
                    }, t.uploadImageProgress = function(e, n, a, i, o, s) {
                        t.unsubscribe = g.k.subscribe({
                            topic: Object(Ne.A)(a.uploadID),
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
                                            case B.a.COMPLETE:
                                                s(e, a.imageURLs), this.setState({
                                                    uploading: !1
                                                }), this.unsubscribe && this.unsubscribe();
                                                break;
                                            case B.a.POSTPROCESS_COMPLETE:
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
                            case B.a.FILE_SIZE_VALIDATION_FAILED:
                                r = Object(g.d)("Please make sure you file is under 500kb", "CheermoteUploadArea");
                                break;
                            case B.a.IMAGE_FORMAT_VALIDATION_FAILED:
                                r = Object(g.d)("Please make sure your image is the correct format for uploading", "CheermoteUploadArea");
                                break;
                            case B.a.HEIGHT_VALIDATION_FAILED:
                            case B.a.WIDTH_VALIDATION_FAILED:
                                r = Object(g.d)("Image must be {d} x {d}px", {
                                    d: a
                                }, "CheermoteUploadArea");
                                break;
                            case B.a.ASPECT_RATIO_VALIDATION_FAILED:
                                r = Object(g.d)("Please ensure your image has the correct aspect ratio for the dimension you are uploading", "CheermoteUploadArea");
                                break;
                            case B.a.FEATURE_SERVICE_FAILED:
                                r = Object(g.d)("Failed to save new images. Please try again.", "CheermoteUploadArea");
                                break;
                            default:
                                r = Object(g.d)("Something went wrong. Please try again", "CheermoteUploadArea")
                        }
                        t.setState({
                            simpleLoadingError: n === Ve.Simple ? r : void 0,
                            advancedLoadingError: n === Ve.Advanced ? r : void 0,
                            errorDimension: a
                        })
                    }, t.onCreateUploadRequestError = function(e, n) {
                        var a = Object(g.d)("An error occurred while creating upload request: {errorMsg}", {
                            errorMsg: n.message
                        }, "CheermoteUploadArea");
                        t.setState({
                            simpleLoadingError: e === Ve.Simple ? a : void 0,
                            advancedLoadingError: e === Ve.Advanced ? a : void 0
                        })
                    }, t
                }
                return r.__extends(t, e), t.prototype.componentWillUnmount = function() {
                    void 0 !== this.unsubscribe && this.unsubscribe()
                }, t.prototype.render = function() {
                    var e = this;
                    if (!this.props.uploadTier) return i.createElement(m.cb, null);
                    var t = [],
                        n = (t = this.props.uploadTier.images.filter(function(t) {
                            return (t.isAnimated && e.state.animation === Ue.Animated || !t.isAnimated && e.state.animation === Ue.Static) && t.theme.toLowerCase() === e.state.background
                        }).slice().sort(function(e, t) {
                            return t.dpiScale - e.dpiScale
                        })).find(function(e) {
                            return 4 === e.dpiScale
                        });
                    return i.createElement(m.Va, {
                        className: "cheermote-upload-area"
                    }, i.createElement(m.Va, {
                        display: m.W.Flex,
                        flexDirection: m.Y.Column
                    }, i.createElement(m.Va, {
                        display: m.W.Flex
                    }, i.createElement(Ye, {
                        name: "cheermote-upload-wizard-type",
                        selected: this.state.uploadType,
                        left: Ve.Simple,
                        leftTitle: Object(g.d)("Simple", "CheermoteUploadArea"),
                        right: Ve.Advanced,
                        rightTitle: Object(g.d)("Advanced", "CheermoteUploadArea"),
                        onToggle: this.onUploadTypeChange
                    }), this.state.uploadType === Ve.Advanced && i.createElement(m.Va, {
                        padding: {
                            x: 2
                        }
                    }, i.createElement(Ye, {
                        name: "cheermote-background",
                        selected: this.state.background,
                        left: Le.Light,
                        leftTitle: Object(g.d)("Light", "CheermoteUploadArea"),
                        right: Le.Dark,
                        rightTitle: Object(g.d)("Dark", "CheermoteUploadArea"),
                        onToggle: this.onBackgroundChange
                    })), this.state.uploadType === Ve.Advanced && i.createElement(Ye, {
                        name: "cheermote-animation",
                        selected: this.state.animation,
                        left: Ue.Animated,
                        leftTitle: Object(g.d)("Animated", "CheermoteUploadArea"),
                        right: Ue.Static,
                        rightTitle: Object(g.d)("Static", "CheermoteUploadArea"),
                        onToggle: this.onAnimationChange
                    })), i.createElement(m.Va, {
                        padding: {
                            top: 2
                        }
                    }, this.state.uploadType === Ve.Simple && i.createElement(ze, {
                        channelID: this.props.channelID,
                        tier: this.props.uploadTier.bits,
                        image: n && n.url,
                        onImageSubmitted: this.onSimpleImageSubmitted,
                        onImageSubmissionError: this.onCreateUploadRequestError,
                        uploadError: this.state.simpleLoadingError
                    }), this.state.uploadType === Ve.Advanced && i.createElement(Be, {
                        channelID: this.props.channelID,
                        images: t,
                        tier: this.props.uploadTier.bits,
                        background: this.state.background,
                        animationType: this.state.animation,
                        onImageSubmitted: this.onAdvancedImageUpload,
                        onImageSubmissionError: this.onCreateUploadRequestError,
                        uploadError: this.state.advancedLoadingError,
                        errorDimension: this.state.errorDimension
                    })), this.state.uploadType === Ve.Simple && this.state.simpleLoadingError && i.createElement(m.xb, {
                        display: m.W.Flex,
                        alignItems: m.f.Center,
                        background: m.r.Alt,
                        padding: 1,
                        margin: {
                            top: 1
                        }
                    }, i.createElement(m.V, {
                        color: m.O.Error
                    }, this.state.simpleLoadingError)), this.state.uploadType === Ve.Advanced && this.state.advancedLoadingError && t.length && i.createElement(m.xb, {
                        display: m.W.Flex,
                        alignItems: m.f.Center,
                        background: m.r.Alt,
                        padding: 1,
                        margin: {
                            top: 1
                        }
                    }, i.createElement(m.V, {
                        color: m.O.Error
                    }, this.state.advancedLoadingError)), n && i.createElement(m.Va, {
                        padding: {
                            top: 2
                        }
                    }, i.createElement(We, {
                        imageSrc: n.url
                    }))), this.state.uploading && i.createElement(m.xb, {
                        className: "cheermote-upload-area__uploading",
                        display: m.W.Flex,
                        flexDirection: m.Y.Column,
                        alignItems: m.f.Center,
                        justifyContent: m.Ua.Center,
                        position: m.db.Absolute,
                        attachTop: !0,
                        attachLeft: !0,
                        fullWidth: !0,
                        fullHeight: !0
                    }, i.createElement(m.Xa, null), i.createElement(m.Va, {
                        padding: {
                            top: 2
                        }
                    }, i.createElement(m.V, null, Object(g.d)("Uploading...", "CheermoteUploadArea")))))
                }, t
            }(i.PureComponent);

            function qe(e, t, n) {
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
            var He = n("PE/S"),
                Qe = (n("ygYl"), function(e) {
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
                            Object(N.e)(He, {
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
                                                return qe(e, t)
                                            }).concat(t.map(function(t) {
                                                return qe(e, t, "dark")
                                            }))
                                        }(r, n))
                                    }
                                    return t
                                }
                            })
                        }, t.onAdvancedImageSubmitted = function(e, n) {
                            Object(N.e)(He, {
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
                                            var o = qe(r, n),
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
                    return r.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.data.loading && !this.props.data.error || this.props.latencyTracking.reportInteractive()
                    }, t.prototype.componentDidUpdate = function(e) {
                        (e.data.loading && !this.props.data.loading || this.props.data.error) && this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        var e = this;
                        if (!this.props.data || this.props.data.loading) return i.createElement(m.Va, {
                            className: "cheermote-upload-form__loading",
                            fullWidth: !0
                        }, i.createElement(m.Xa, {
                            fillContent: !0
                        }));
                        if (this.props.data && this.props.data.error || !this.props.data.user) return i.createElement(m.Va, {
                            className: "cheermote-upload-form__error",
                            fullWidth: !0,
                            justifyContent: m.Ua.Center,
                            textAlign: m.Jb.Center,
                            alignItems: m.f.Center
                        }, i.createElement(m.V, null, Object(g.d)("An unexpected error occurred while loading the upload wizard", "CheermotesUploadForm")));
                        var t = this.tiers.map(function(t) {
                                return i.createElement(m.yb, {
                                    key: t.id,
                                    active: e.state.activeTab === t.bits,
                                    onClick: e.onTabSelect,
                                    "data-tab-target": t.bits
                                }, t.bits)
                            }),
                            n = this.tiers.find(function(t) {
                                return t.bits === e.state.activeTab
                            });
                        return i.createElement(P.a, {
                            label: Object(g.d)("Upload Cheermote Images", "CheermotesUploadForm")
                        }, i.createElement(m.Va, {
                            padding: {
                                bottom: 2
                            }
                        }, i.createElement(m.V, null, Object(g.d)('Please upload a 112 x 112px GIF image with a transparent background. Your image will be automatically scaled to smaller sizes. To fine-ture smaller sizes and light/dark mode, turn on "Advanced" option below. (The maximum file size is 500kb)', "CheermotesUploadForm"))), i.createElement(m.zb, null, t), i.createElement(m.Va, {
                            padding: {
                                top: 2
                            }
                        }, i.createElement(Ge, {
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
                Xe = Object(s.compose)(Object(f.a)(He, {
                    options: function(e) {
                        return {
                            variables: {
                                login: e.channelName
                            }
                        }
                    }
                }), Object(u.c)("CheermotesUploadForm"))(Qe),
                $e = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return r.__extends(t, e), t.prototype.componentDidMount = function() {
                        g.o.setPageTitle(Object(g.d)("Cheermote Settings", "CheermotesSettingsPageTitle"))
                    }, t.prototype.render = function() {
                        var e = this.props.match,
                            t = i.createElement(A.a, {
                                title: Object(g.d)("Custom Cheermote", "CheermotesSettingsPage"),
                                description: Object(g.d)("Custom Cheermote that viewers can use when Cheering in your channel", "CheermotesSettingsPage"),
                                linkToParent: "/" + e.params.channelName + "/dashboard/settings/revenue"
                            });
                        return i.createElement(w.a, {
                            header: t
                        }, i.createElement(De, {
                            channelName: e.params.channelName
                        }), i.createElement(Xe, {
                            channelName: e.params.channelName
                        }))
                    }, t
                }(i.Component),
                Ke = Object(E.compose)(Object(u.c)("CheermotesSettingsPage", {
                    autoReportInteractive: !0,
                    destination: S.a.DashboardSettingsRevenueCheermotes
                }), Object(y.a)({
                    location: k.PageviewLocation.DashboardSettingsRevenueCheermotes
                }))($e),
                Ze = n("/MKj"),
                Je = n("aCAx"),
                et = n("dWDG"),
                tt = (n("QtTb"), "GAME_COMMERCE"),
                nt = function(e) {
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
                        return !this.props.data || this.props.data.loading ? null : i.createElement(P.a, {
                            orientation: m.Da.Horizontal,
                            label: Object(g.d)("Opt in to earn revenue", "CommerceAmendment")
                        }, i.createElement("div", {
                            onClick: this.onAmendmentClick,
                            "data-test-selector": "commerce-amendment-checkbox-wrapper",
                            className: "commerce-amendment__amendment"
                        }, i.createElement(m.N, {
                            "data-test-selector": "commerce-amendment-checkbox",
                            checked: this.state.amendmentAccepted,
                            disabled: !0,
                            id: "commerce-amendment",
                            label: Object(g.d)("Opt in to earn revenue from game sales on Twitch", "CommerceAmendment")
                        })), i.createElement(m.V, null, Object(g.d)("Please read and agree to the following Commerce Addendum to become eligible for this program.", "CommerceAmendment")))
                    }, t = r.__decorate([Object(f.a)(et, {
                        options: function(e) {
                            return {
                                variables: {
                                    login: e.channelName,
                                    amendmentType: tt
                                }
                            }
                        }
                    })], t)
                }(i.PureComponent),
                at = n("REKr"),
                rt = "amendment-modal-accept-button",
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
                            return e ? null : i.createElement(m.Va, {
                                margin: {
                                    left: .5,
                                    right: .5
                                }
                            }, i.createElement(m.z, {
                                "data-test-selector": rt,
                                type: m.F.Text,
                                onClick: t.onAccept,
                                disabled: !t.state.hasUserScrolled
                            }, Object(g.d)("Accept", "CommerceAmendmentModal")))
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
                                            return e.trys.push([1, , 3, 4]), [4, this.props.setAmendmentAcceptance(Object(N.a)(tt))];
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
                        return i.createElement(m.Va, {
                            padding: 3
                        }, i.createElement(m.xb, {
                            padding: {
                                bottom: 3
                            },
                            borderBottom: !0,
                            textAlign: m.Jb.Center
                        }, i.createElement(m.V, {
                            type: m.Nb.H4
                        }, Object(g.d)("Addendum to Content Partner Agreement – Commerce Addendum", "CommerceAmendmentModal"))), i.createElement(m.Va, {
                            padding: {
                                top: 2,
                                bottom: 2
                            },
                            textAlign: m.Jb.Center
                        }, i.createElement(m.V, {
                            fontSize: m.Aa.Size5
                        }, Object(g.d)('Please read and agree to the following addendum ("Addendum") to your Content License and Base Agreement (or Content License Agreement, as applicable) (the "Agreement") with Twitch in order to be eligible to earn revenue for certain purchases by a Twitch user that is viewing your Twitch channel.', "CommerceAmendmentModal"))), i.createElement(m.xb, {
                            borderTop: !0,
                            borderRight: !0,
                            borderBottom: !0,
                            borderLeft: !0,
                            padding: 2
                        }, i.createElement("div", {
                            onScroll: this.onUserScroll,
                            className: "amendment-modal__amendment-text",
                            "data-test-selector": "amendment-modal-text-container"
                        }, i.createElement(m.V, null, 'Twitch, in its sole discretion, may make specially-formatted links appear on your Twitch channel page (a "', i.createElement(m.V, {
                            type: m.Nb.Span,
                            bold: !0
                        }, "Special Link"), '"), which would direct Twitch users to the purchase of a software application, video game, in-game item or other digital product (a "', i.createElement(m.V, {
                            type: m.Nb.Span,
                            bold: !0
                        }, "Product"), '") from Twitch. For every such purchase of a Product that is a Qualifying Purchase (as defined below), you will receive a fee (a "', i.createElement(m.V, {
                            type: m.Nb.Span,
                            bold: !0
                        }, "Product Purchase Fee"), '") that will be equal to five percent (5%) of (a) the purchase price of such Product, as such price was listed by Twitch at the time of the Qualifying Purchase and in the currency in which the Qualifying Purchase was made, less (b) any special discounts or promotions, taxes, service charges, rebates, payment processing fees (e.g. credit card processing fees) and any other related transaction and processing expenses.'), i.createElement(m.V, null, 'A "', i.createElement("strong", null, "Qualifying Purchase"), '" of a Product occurs when: (a) a user of Twitch clicks through a Special Link on your Twitch channel page; (b) such user purchases a Product(s); and (c) Twitch receives a fully settled payment for the purchase by such user.'), i.createElement(m.V, null, "If we pay you a Product Purchase Fee and later issue a refund or credit to the Twitch user for such Qualifying Purchase (or receive a chargeback related to the Qualifying Purchase), we may offset the amount of the Product Purchase Fee we previously paid you for such Qualifying Purchase against future Product Purchase Fees or other amounts that would otherwise be payable to you under the Agreement or this Addendum, or require you to remit that amount to us."), i.createElement(m.V, null, "This Addendum is governed by and subject to the Agreement. Capitalized terms used but not defined in this Addendum will have the meanings defined in the Agreement. Except as amended by this Addendum, all other terms and conditions of the Agreement remain in full force and effect."))), i.createElement(m.Va, {
                            padding: {
                                top: 2,
                                bottom: 2
                            }
                        }, i.createElement(m.V, {
                            fontSize: m.Aa.Size4
                        }, Object(g.d)("Summary", "CommerceAmendmentModal")), i.createElement(m.V, null, Object(g.d)("By accepting below, you may earn revenue for certain purchases by your viewers as described above.", "CommerceAmendmentModal"))), i.createElement(m.xb, {
                            borderTop: !0,
                            display: m.W.Flex,
                            flexDirection: m.Y.Row,
                            alignItems: m.f.Center,
                            justifyContent: m.Ua.Center,
                            padding: {
                                top: 2,
                                bottom: 1
                            }
                        }, i.createElement(m.Va, {
                            margin: {
                                left: .5,
                                right: .5
                            }
                        }, i.createElement(m.z, {
                            "data-test-selector": "amendment-modal-cancel-button",
                            type: m.F.Text,
                            onClick: this.onClose
                        }, Object(g.d)("Cancel", "CommerceAmendmentModal"))), this.renderAcceptButton(this.props.amendmentAccepted)))
                    }, t
                }(i.PureComponent),
                ot = Object(f.a)(at, {
                    name: "setAmendmentAcceptance"
                })(it),
                st = (n("Ys4A"), function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        return i.createElement(m.xb, {
                            className: "amendment-modal__container",
                            background: m.r.Base
                        }, i.createElement(ot, {
                            "data-test-selector": "amendment-modal-selector",
                            onClose: this.props.closeModal,
                            amendmentAccepted: this.props.amendmentAccepted
                        }))
                    }, t
                }(i.Component));
            var lt = Object(Ze.connect)(null, function(e) {
                return Object(E.bindActionCreators)({
                    closeModal: Je.c
                }, e)
            })(st);
            var dt, ct = Object(Ze.connect)(null, function(e) {
                    return Object(E.bindActionCreators)({
                        showAmendmentModal: function(e) {
                            var t = r.__rest(e, []);
                            return Object(Je.d)(lt, t)
                        }
                    }, e)
                })(nt),
                ut = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return r.__extends(t, e), t.prototype.componentDidMount = function() {
                        g.o.setPageTitle(Object(g.d)("Game sales via Twitch", "CommerceAmendmentTitle"))
                    }, t.prototype.render = function() {
                        var e = this.props.match.params.channelName,
                            t = i.createElement(A.a, {
                                title: Object(g.d)("Game sales via Twitch", "CommerceAmendment"),
                                linkToParent: "/" + this.props.match.params.channelName + "/dashboard/settings/revenue"
                            });
                        return i.createElement(w.a, {
                            header: t
                        }, i.createElement(ct, {
                            channelName: e
                        }))
                    }, t
                }(i.PureComponent),
                mt = Object(E.compose)(Object(u.c)("CommerceAmendmentPage", {
                    autoReportInteractive: !0,
                    destination: S.a.DashboardSettingsRevenueGameCommerce
                }), Object(y.a)({
                    location: k.PageviewLocation.DashboardSettingsRevenueGameCommerce
                }))(ut),
                pt = n("eNg2"),
                gt = n("kRBY"),
                ht = n("5g1g"),
                bt = n("mAXC"),
                ft = n("c0Zc"),
                vt = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onToggle = function() {
                            return r.__awaiter(t, void 0, void 0, function() {
                                return r.__generator(this, function(e) {
                                    return this.props.onToggle(this.props.campaignID, !this.props.isOptedIn), [2]
                                })
                            })
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        var e = "";
                        return e = this.props.isOptedIn ? Object(g.d)("Your community will get bonus Bits when they use the {brandName} Cheermote.", {
                            brandName: this.props.brandName
                        }, "BitsSponsoredCheermoteSetting") : Object(g.d)("Your community cannot use the {brandName} Cheermote. Opt in to active the Cheermote and bonus Bits!", {
                            brandName: this.props.brandName
                        }, "BitsSponsoredCheermoteSetting"), i.createElement(m.Va, {
                            display: m.W.Flex,
                            flexDirection: m.Y.Column
                        }, i.createElement(m.Va, {
                            display: m.W.Flex,
                            justifyContent: m.Ua.Between,
                            alignItems: m.f.Center
                        }, i.createElement(m.Va, {
                            display: m.W.Flex,
                            alignItems: m.f.Center
                        }, i.createElement(m.S, {
                            src: this.props.imageURL,
                            alt: this.props.brandName
                        }), i.createElement(m.Na, {
                            padding: {
                                left: 2
                            }
                        }, i.createElement(m.V, null, this.props.brandName))), i.createElement(m.Pb, {
                            checked: this.props.isOptedIn,
                            onChange: this.onToggle
                        })), i.createElement(m.Na, {
                            padding: {
                                top: 1
                            }
                        }, i.createElement(m.V, null, e)))
                    }, t
                }(i.PureComponent),
                Et = n("9wGn"),
                yt = n("l5J2"),
                St = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            sponsoredCheermoteFormError: !1
                        }, t.onCampaignStatusToggle = function(e, n) {
                            return r.__awaiter(t, void 0, void 0, function() {
                                var t, a, i, o;
                                return r.__generator(this, function(s) {
                                    switch (s.label) {
                                        case 0:
                                            if (!(this.props.data && this.props.data.user && this.props.data.user.id && this.props.data.user.settings && this.props.data.user.settings.cheer && this.props.data.user.settings.cheer.sponsoredCheermotes && this.props.data.user.settings.cheer.sponsoredCheermotes.campaigns)) return [2];
                                            t = {
                                                userID: this.props.data.user.id,
                                                sponsoredCheermote: {
                                                    id: e,
                                                    isOptedIn: n
                                                }
                                            }, a = this.props.data.user.settings.cheer.sponsoredCheermotes.campaigns.edges.map(function(t) {
                                                return t.cursor === e && t.node ? {
                                                    __typename: "SponsoredCheermoteChannelSettingsEdge",
                                                    cursor: t.cursor,
                                                    node: r.__assign({}, t.node, {
                                                        isOptedIn: n
                                                    })
                                                } : t
                                            }), i = {
                                                updateCheerPartnerSettings: {
                                                    __typename: "UpdateCheerPartnerSettingsPayload",
                                                    cheer: {
                                                        __typename: "CheerPartnerSettings",
                                                        id: this.props.data.user.id,
                                                        sponsoredCheermotes: {
                                                            __typename: "CheerPartnerSponsoredCheermoteSettings",
                                                            campaigns: {
                                                                __typename: "SponsoredCheermoteChannelSettingsConnection",
                                                                edges: a.slice(),
                                                                totalCount: this.props.data.user.settings.cheer.sponsoredCheermotes.campaigns.totalCount
                                                            }
                                                        }
                                                    }
                                                }
                                            }, o = Object(N.b)(t, i), s.label = 1;
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
                    return r.__extends(t, e), t.prototype.render = function() {
                        var e = this;
                        if (!this.props.data || this.props.data.loading) return i.createElement(m.Xa, null);
                        if (!(this.props.data && this.props.data.user && this.props.data.user.id && this.props.data.user.settings && this.props.data.user.settings.cheer && this.props.data.user.settings.cheer.sponsoredCheermotes && this.props.data.user.settings.cheer.sponsoredCheermotes.campaigns)) return null;
                        var t = this.props.data.user.settings.cheer.sponsoredCheermotes.campaigns.edges.map(function(t) {
                            return i.createElement(vt, {
                                key: t.cursor,
                                campaignID: t.node.id,
                                isOptedIn: t.node.isOptedIn,
                                brandName: t.node.brandName,
                                imageURL: t.node.brandImageURL,
                                onToggle: e.onCampaignStatusToggle
                            })
                        });
                        return i.createElement(P.a, {
                            label: Object(g.d)("Cheermote Campaigns", "BitsSponsoredCheermoteSettingsForm"),
                            error: this.state.sponsoredCheermoteFormError
                        }, i.createElement(m.Ha, null, i.createElement(m.P, {
                            cols: {
                                default: 12,
                                sm: 8
                            }
                        }, t)))
                    }, t
                }(i.Component),
                kt = Object(s.compose)(Object(f.a)(Et, {
                    options: function(e) {
                        return {
                            variables: {
                                channelLogin: e.channelLogin
                            }
                        }
                    }
                }), Object(f.a)(yt, {
                    name: "updateSponsoredCheerCampaignStatus"
                }))(St),
                Nt = n("BLPV"),
                Ot = n("wGZM"),
                Tt = n("98xD"),
                Ct = n("qqE+"),
                Pt = 1,
                At = 1e4,
                _t = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        n.state = {
                            minBitsToCheerSaveStatus: Nt.b.NoChanges,
                            minBitsPerEmoteSaveStatus: Nt.b.NoChanges,
                            minBitsToCheerError: !1,
                            minBitsPerEmoteError: !1
                        }, n.onMinBitsToCheerInputChange = function(e) {
                            var t = n.state,
                                a = t.minBitsPerEmote,
                                r = t.minBitsPerEmoteSaveStatus,
                                i = Math.min(parseInt(e.currentTarget.value, 10), At),
                                o = Nt.b.DirtyChanges,
                                s = r,
                                l = !1;
                            (!i || !a || i < Pt || a && i < a) && (o = Nt.b.NoChanges, s = Nt.b.NoChanges), a && i < a && (l = !0), n.setState({
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
                                i = Math.min(parseInt(e.currentTarget.value, 10), At),
                                o = r,
                                s = Nt.b.DirtyChanges,
                                l = !1;
                            (!i || !a || i < Pt || a && a < i) && (o = Nt.b.NoChanges, s = Nt.b.NoChanges), a && a < i && (l = !0), n.setState({
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
                                                minBitsToCheerSaveStatus: Nt.b.Working
                                            }), o = {
                                                userID: a.user.id,
                                                chatMessage: {
                                                    minBitsToCheer: e
                                                }
                                            }, r.label = 1;
                                        case 1:
                                            return r.trys.push([1, 3, , 4]), [4, n(Object(N.a)(o))];
                                        case 2:
                                            return s = r.sent(), Object(N.e)(Ot, {
                                                login: i
                                            }, function(e) {
                                                return e.user && e.user.settings && e.user.settings.cheer && s.data.updateCheerPartnerSettings && (e.user.settings.cheer.chatMessage.minBitsToCheer = s.data.updateCheerPartnerSettings.cheer.chatMessage.minBitsToCheer), e
                                            }), this.setState({
                                                minBitsToCheerSaveStatus: Nt.b.Success
                                            }), [3, 4];
                                        case 3:
                                            return r.sent(), this.setState({
                                                minBitsToCheerSaveStatus: Nt.b.Error
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
                                                minBitsPerEmoteSaveStatus: Nt.b.Working
                                            }), o = {
                                                userID: a.user.id,
                                                chatMessage: {
                                                    minBitsPerEmote: e
                                                }
                                            }, r.label = 1;
                                        case 1:
                                            return r.trys.push([1, 3, , 4]), [4, n(Object(N.a)(o))];
                                        case 2:
                                            return s = r.sent(), Object(N.e)(Ot, {
                                                login: i
                                            }, function(e) {
                                                return e.user && e.user.settings && e.user.settings.cheer && s.data.updateCheerPartnerSettings && (e.user.settings.cheer.chatMessage.minBitsPerEmote = s.data.updateCheerPartnerSettings.cheer.chatMessage.minBitsPerEmote), e
                                            }), this.setState({
                                                minBitsPerEmoteSaveStatus: Nt.b.Success
                                            }), [3, 4];
                                        case 3:
                                            return r.sent(), this.setState({
                                                minBitsPerEmoteSaveStatus: Nt.b.Error
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
                        return i.createElement(i.Fragment, null, i.createElement(P.a, {
                            label: Object(g.d)("Minimum Bits to Cheer", "CheerSettingsPage"),
                            error: n,
                            errorMessage: Object(g.d)("Minimum Bit to Cheer must be greater than or equal to Minimum Bit Emote", "CheerSettingsPage"),
                            "data-test-selector": "cheer-minimum-bits-form"
                        }, i.createElement(m.Ha, null, i.createElement(m.P, {
                            cols: {
                                default: 12,
                                sm: 8
                            }
                        }, i.createElement(m.Va, {
                            display: m.W.Flex
                        }, i.createElement(m.Va, {
                            flexGrow: 1,
                            margin: {
                                right: 1
                            }
                        }, i.createElement(m.Pa, {
                            type: m.Ra.Number,
                            min: Pt,
                            max: At,
                            value: isNaN(t) ? "" : String(t),
                            onChange: this.onMinBitsToCheerInputChange,
                            "data-test-selector": "cheer-minimum-bits-input"
                        })), i.createElement(Nt.a, {
                            status: o,
                            onClick: this.onMinBitsToCheerSave,
                            "data-test-selector": "cheer-minimum-bits-save-button"
                        })))), i.createElement(m.Ha, null, i.createElement(m.P, {
                            cols: {
                                default: 12,
                                sm: 8
                            }
                        }, i.createElement(C.a, {
                            text: i.createElement(i.Fragment, null, i.createElement(m.Va, {
                                display: m.W.Inline,
                                margin: {
                                    right: .5
                                }
                            }, Object(g.d)("Set the minimum number of Bits needed to send a Cheer message in your channel. We only recommend setting this above 1 to combat spam in chat.", "CheerSettingsPage")), i.createElement(m.xb, {
                                display: m.W.InlineBlock,
                                color: m.O.Alt2,
                                verticalAlign: m.Xb.Middle
                            }, i.createElement(m.Qb, {
                                label: Object(g.d)("For example, if you choose 30, viewers will not be able to send a Cheer message with 29 or fewer Bits. They will need to use at least 30 Bits, either in a single emote, or by combining emotes that add up to at least 30 Bits.", "CheerSettingsPage"),
                                width: 300
                            }, i.createElement(m.mb, {
                                asset: m.nb.NotificationInfo,
                                width: 16,
                                height: 16
                            }))))
                        })))), i.createElement(P.a, {
                            label: Object(g.d)("Minimum Bits Emote", "CheerSettingsPage"),
                            error: r,
                            errorMessage: Object(g.d)("Minimum Bits Emote must be less than Minimum Bit to Cheer", "CheerSettingsPage"),
                            "data-test-selector": "emote-minimum-bits-form"
                        }, i.createElement(m.Ha, null, i.createElement(m.P, {
                            cols: {
                                default: 12,
                                sm: 8
                            }
                        }, i.createElement(m.Va, {
                            display: m.W.Flex
                        }, i.createElement(m.Va, {
                            flexGrow: 1,
                            margin: {
                                right: 1
                            }
                        }, i.createElement(m.Pa, {
                            type: m.Ra.Number,
                            min: Pt,
                            max: At,
                            value: isNaN(a) ? "" : String(a),
                            onChange: this.onMinBitsPerEmoteInputChange,
                            "data-test-selector": "emote-minimum-bits-input"
                        })), i.createElement(Nt.a, {
                            status: s,
                            onClick: this.onMinBitsPerEmoteSave,
                            "data-test-selector": "emote-minimum-bits-save-button"
                        })))), i.createElement(m.Ha, null, i.createElement(m.P, {
                            cols: {
                                default: 12,
                                sm: 8
                            }
                        }, i.createElement(C.a, {
                            text: i.createElement(i.Fragment, null, i.createElement(m.Va, {
                                display: m.W.Inline,
                                margin: {
                                    right: .5
                                }
                            }, Object(g.d)("Set the smallest Bit Emote that can be used in your channel. We only recommend setting this above 1 to combat spam in chat.", "CheerSettingsPage")), i.createElement(m.xb, {
                                display: m.W.InlineBlock,
                                color: m.O.Alt2,
                                verticalAlign: m.Xb.Middle
                            }, i.createElement(m.Qb, {
                                label: Object(g.d)("Bit Emote means the individual Bit Emotes that appear in chat. For example, if you choose 100, viewers cannot send “Cheer150 Cheer90” because Cheer90 is less than 100. “Cheer150 Cheer150” would be acceptable, because both cheers are greater than 100.", "CheerSettingsPage"),
                                width: 300
                            }, i.createElement(m.mb, {
                                asset: m.nb.NotificationInfo,
                                width: 16,
                                height: 16
                            }))))
                        })))))
                    }, t
                }(i.Component),
                wt = Object(E.compose)(Object(f.a)(Ot, {
                    options: function(e) {
                        return {
                            variables: {
                                login: e.channelName
                            }
                        }
                    }
                }), Object(f.a)(Ct, {
                    name: "setMinBitsToCheer"
                }), Object(f.a)(Tt, {
                    name: "setMinBitsPerEmote"
                }), Object(u.c)("BitsThresholdSettingsForm"), Object(Se.a)(function(e) {
                    return {
                        query: Ot,
                        variables: {
                            login: e.channelName
                        },
                        topic: e.data && e.data.user && e.data.user.id ? Object(Ne.d)(e.data.user.id) : "",
                        type: ke.c.BitsChannelSettingsEvent,
                        skip: !e.data.user || !e.data.user.id,
                        mutator: function(e, t) {
                            var n = e.updates;
                            return t.user && t.user.settings && t.user.settings.cheer && (void 0 !== n.minimum_bits && (t.user.settings.cheer.chatMessage.minBitsToCheer = n.minimum_bits), void 0 !== n.minimum_bits_emote && (t.user.settings.cheer.chatMessage.minBitsPerEmote = n.minimum_bits_emote)), t
                        }
                    }
                }))(_t),
                It = n("NwqP"),
                xt = n("/CKs");
            ! function(e) {
                e[e.CheermotesSettingsLink = 0] = "CheermotesSettingsLink", e[e.NotSignedBitsAmendmentPrompt = 1] = "NotSignedBitsAmendmentPrompt", e[e.NotOnboardedPrompt = 2] = "NotOnboardedPrompt"
            }(dt || (dt = {}));
            var Rt = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        if (n.state = {
                                showOnboardingPrompt: !1,
                                onboardingError: !1
                            }, n.onOnboardingButtonClick = function() {
                                return r.__awaiter(n, void 0, void 0, function() {
                                    var e, t, n, a, i;
                                    return r.__generator(this, function(r) {
                                        switch (r.label) {
                                            case 0:
                                                if (e = this.props, t = e.onboardUser, !((n = e.data).user && n.user.id && n.user.settings && n.user.settings.cheer)) return [2];
                                                a = {
                                                    userID: n.user.id,
                                                    isOnboarded: !0
                                                }, i = {
                                                    updateCheerPartnerSettings: {
                                                        __typename: "UpdateCheerPartnerSettingsPayload",
                                                        cheer: {
                                                            __typename: "CheerPartnerSettings",
                                                            id: n.user.settings.cheer.id,
                                                            isOnboarded: !0
                                                        }
                                                    }
                                                }, r.label = 1;
                                            case 1:
                                                return r.trys.push([1, 3, , 4]), [4, t(Object(N.b)(a, i))];
                                            case 2:
                                                return r.sent(), this.setState({
                                                    onboardingError: !1
                                                }), [3, 4];
                                            case 3:
                                                return r.sent(), this.setState({
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
                            var a = t.data.user.settings.cheer,
                                i = a.hasSignedBitsAmendment,
                                o = a.isOnboarded;
                            n.state = r.__assign({}, n.state, {
                                showOnboardingPrompt: !i || !o
                            })
                        }
                        return n
                    }
                    return r.__extends(t, e), t.prototype.componentWillReceiveProps = function(e) {
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
                                    u = d.isOnboarded;
                                e = c ? i.createElement(m.xb, {
                                    padding: 2,
                                    "data-test-selector": dt.NotOnboardedPrompt
                                }, i.createElement(m.Wb, null, i.createElement("p", null, Object(g.d)("You have successfully completed your tax forms. Now click Enable Bits to complete onboarding.", "CheerSettingsForm"))), i.createElement(m.Va, {
                                    display: m.W.Flex,
                                    alignItems: m.f.Center
                                }, i.createElement(m.xb, {
                                    margin: {
                                        right: 1
                                    }
                                }, i.createElement(m.z, {
                                    disabled: !c,
                                    type: u ? m.F.Success : m.F.Default,
                                    onClick: this.onOnboardingButtonClick
                                }, u ? Object(g.d)("Success", "CheerSettingsForm") : Object(g.d)("Enable Bits", "CheerSettingsForm"))), u && i.createElement(m.T, {
                                    onClick: this.onSuccessLinkClick
                                }, Object(g.d)("Click here to see your Bits & Cheering settings", "CheerSettingsForm")), l && i.createElement(m.V, {
                                    color: m.O.Error
                                }, Object(g.d)("There was an error enabling Bits. Please try later or reach out to support.", "CheerSettingsForm")))) : i.createElement(m.xb, {
                                    padding: 2,
                                    "data-test-selector": dt.NotSignedBitsAmendmentPrompt
                                }, i.createElement(m.Wb, null, i.createElement("p", null, Object(g.d)("To enable Bits, we need your tax and payout information.", "CheerSettingsForm")), i.createElement("ul", null, i.createElement("li", null, Object(g.d)("After clicking Get Started click Start Over", "CheerSettingsForm")), i.createElement("li", null, Object(g.d)("Complete the registration, partner agreements, tax forms, and payout method.", "CheerSettingsForm")), i.createElement("li", null, Object(g.d)("Once you have completed the 4 steps, come back and click enable Bits!", "CheerSettingsForm")))), i.createElement(m.z, {
                                    linkTo: "/" + n + "/dashboard/settings/revenue/payout-onboarding"
                                }, Object(g.d)("Get Started", "CheerSettingsForm")))
                            } else e = i.createElement(i.Fragment, null, i.createElement(wt, {
                                channelName: n
                            }), i.createElement(ht.b, {
                                name: "bits_sponsored_cheermote_dashboard_settings"
                            }, i.createElement(kt, {
                                channelLogin: n
                            })), i.createElement(bt.a, {
                                text: Object(g.d)("Cheer Badges", "CheerSettingsForm"),
                                linkTo: "/" + n + "/dashboard/settings/revenue/cheerbadges"
                            }), a && i.createElement(bt.a, {
                                text: Object(g.d)("Cheermotes", "CheerSettingsForm"),
                                linkTo: "/" + n + "/dashboard/settings/revenue/cheermotes",
                                "data-test-selector": dt.CheermotesSettingsLink
                            }), i.createElement(bt.a, {
                                text: Object(g.d)("Top Cheerers", "CheerSettingsForm"),
                                linkTo: "/" + n + "/dashboard/settings/revenue/cheer"
                            }));
                        else this.props.data.loading && (e = i.createElement(m.Xa, {
                            fillContent: !0
                        })), this.props.data.error && (e = i.createElement(h.a, null));
                        return i.createElement(i.Fragment, null, i.createElement(ft.a, {
                            title: Object(g.d)("Bits & Cheering", "CheerSettingsForm")
                        }), i.createElement(w.a, null, e))
                    }, t
                }(i.Component),
                Dt = Object(E.compose)(Object(u.c)("CheerSettingsForm"), Object(f.a)(xt, {
                    options: function(e) {
                        return {
                            variables: {
                                login: e.channelName
                            }
                        }
                    }
                }), Object(f.a)(It, {
                    name: "onboardUser"
                }))(Rt);
            var Ft = Object(Ze.connect)(function(e) {
                var t = Object(gt.e)(e);
                return {
                    isStaff: !!(t && t.roles && t.roles.isStaff)
                }
            })(Dt);

            function jt(e, t) {
                if (!e || !t) return !1;
                if (t.workflow.currentStep === c.C.AGREEMENT_PENDING_UPGRADE) return !1;
                var n = e.find(function(e) {
                    return e.category === c.A.PARTNER && e.isReceivingRevenue
                });
                return !(!(n && n.tags && n.tags.includes(c.D.LEGACY) && t) || t.isLegacy) || !(n && n.tags && (n.tags.includes(c.D.STANDARD) || n.tags.includes(c.D.PREMIUM)) && t && t.category === c.B.CUSTOM_PARTNER) && !!n
            }
            var Vt, Lt = n("wNpX");
            ! function(e) {
                e.PAYOUT_ONBOARDING_LINK = "onboarding-section__payout-onboarding-link", e.UPGRADE_AGREEMENT_LINK = "onboarding-section__upgrade-agreement-link", e.PAYOUTS_LINK = "onboarding-section__payouts-link", e.AFFILIATE_AGREEMENT_LINK = "onboarding-section__affiliate-agreement-link", e.PARTNER_AGREEMENT_LINK = "onboarding-section__partner-agreement-link", e.EXTENSIONS_DEVELOPER_AGREEMENT_LINK = "onboarding-section__extensions-developer-agreement-link"
            }(Vt || (Vt = {}));
            var Ut = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return r.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.data.loading && !this.props.data.error || this.props.latencyTracking.reportInteractive()
                    }, t.prototype.componentDidUpdate = function(e) {
                        (e.data.loading && !this.props.data.loading || this.props.data.error) && this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        var e = this.props.data,
                            t = e.loading,
                            n = e.error,
                            a = e.currentUser;
                        return t || n || !a || this.props.channelName !== a.login ? null : i.createElement(i.Fragment, null, i.createElement(ft.a, {
                            title: Object(g.d)("Onboarding", "OnboardingSection")
                        }), i.createElement(w.a, null, !this.hasAgreementPendingUpgrade && i.createElement(bt.a, {
                            "data-test-selector": Vt.PAYOUT_ONBOARDING_LINK,
                            text: this.payoutOnboardingLinkText,
                            linkTo: "/" + this.props.channelName + "/dashboard/settings/revenue/payout-onboarding"
                        }), this.hasAgreementPendingUpgrade && i.createElement(bt.a, {
                            "data-test-selector": Vt.UPGRADE_AGREEMENT_LINK,
                            text: this.upgradeTermsLinkText,
                            linkTo: "/" + this.props.channelName + "/dashboard/settings/revenue/upgrade-terms"
                        }), this.hasCompletedOnboarding && i.createElement(bt.a, {
                            "data-test-selector": Vt.PAYOUTS_LINK,
                            text: Object(g.d)("Change Payout Method", "OnboardingSection"),
                            linkTo: "/" + this.props.channelName + "/dashboard/settings/revenue/payouts"
                        }), a && a.roles && a.roles.isAffiliate && i.createElement(bt.a, {
                            "data-test-selector": Vt.AFFILIATE_AGREEMENT_LINK,
                            text: Object(g.d)("View Affiliate Agreement", "OnboardingSection"),
                            linkTo: "https://twitch.tv/p/legal/affiliate-agreement/"
                        }), this.showPartnerAgreementLink && i.createElement(bt.a, {
                            "data-test-selector": Vt.PARTNER_AGREEMENT_LINK,
                            text: Object(g.d)("View Active Partner Agreement", "OnboardingSection"),
                            linkTo: "/" + this.props.channelName + "/dashboard/settings/revenue/view-terms"
                        }), a && a.roles && a.roles.isExtensionsDeveloper && i.createElement(bt.a, {
                            "data-test-selector": Vt.EXTENSIONS_DEVELOPER_AGREEMENT_LINK,
                            text: Object(g.d)("View Extensions Developer Agreement", "OnboardingSection"),
                            linkTo: "https://twitch.tv/p/legal/developer-agreement/"
                        })))
                    }, Object.defineProperty(t.prototype, "hasAgreementPendingUpgrade", {
                        get: function() {
                            return !!(this.props.data.currentUser && this.props.data.currentUser.payoutInvite && this.props.data.currentUser.payoutInvite.workflow && this.props.data.currentUser.payoutInvite.workflow.currentStep === c.C.AGREEMENT_PENDING_UPGRADE)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "hasCompletedOnboarding", {
                        get: function() {
                            return !!(this.props.data.currentUser && this.props.data.currentUser.payoutInvite && this.props.data.currentUser.payoutInvite.workflow && this.props.data.currentUser.payoutInvite.workflow.currentStep === c.C.COMPLETED)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "payoutOnboardingLinkText", {
                        get: function() {
                            var e = this.props.data.currentUser;
                            if (!e || !e.payoutInvite) return null;
                            switch (e.payoutInvite.category) {
                                case c.B.AFFILIATE:
                                    return Object(g.d)("Affiliate Onboarding", "OnboardingSection");
                                case c.B.STANDARD_PARTNER:
                                case c.B.PREMIUM_PARTNER:
                                case c.B.CUSTOM_PARTNER:
                                    return Object(g.d)("Partner Onboarding", "OnboardingSection");
                                case c.B.EXTENSIONS_DEVELOPER:
                                    return Object(g.d)("Extensions Developer Onboarding", "OnboardingSection");
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
                                case c.B.AFFILIATE:
                                    return Object(g.d)("Agree to the Twitch Affiliate Agreement", "OnboardingSection");
                                case c.B.STANDARD_PARTNER:
                                case c.B.PREMIUM_PARTNER:
                                    return Object(g.d)("Agree to the Twitch Partner Agreement", "OnboardingSection");
                                default:
                                    return null
                            }
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "showPartnerAgreementLink", {
                        get: function() {
                            var e = this.props.data.currentUser;
                            return !!e && jt(e.payoutPlans && e.payoutPlans.map(function(e) {
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
                Mt = Object(s.compose)(Object(u.c)("OnboardingSection"), Object(f.a)(Lt))(Ut),
                Bt = Object(u.c)("OtherRevenueStreamsForm", {
                    autoReportInteractive: !0
                })(function(e) {
                    return i.createElement(m.Va, null, i.createElement(ft.a, {
                        title: Object(g.d)("Other Revenue Streams", "OtherRevenueStreamsForm")
                    }), i.createElement(w.a, null, i.createElement(bt.a, {
                        text: Object(g.d)("Game sales via Twitch", "OtherRevenueStreamsForm"),
                        linkTo: "/" + e.channelName + "/dashboard/settings/revenue/game-commerce"
                    }), i.createElement(bt.a, {
                        text: Object(g.d)("Merch by Amazon (Beta)", "OtherRevenueStreamsForm"),
                        linkTo: "/" + e.channelName + "/dashboard/settings/revenue/merch-by-amazon"
                    })))
                });
            var Wt, zt = Object(Ze.connect)(function(e) {
                    var t = Object(gt.e)(e);
                    return {
                        isStaff: !!(t && t.roles && t.roles.isStaff)
                    }
                })(Bt),
                Yt = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onChange = function(e) {
                            t.props.onChange(t.props.benefit, e.currentTarget.checked)
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        return i.createElement(P.a, {
                            label: this.props.label
                        }, i.createElement(m.Pb, {
                            checked: this.props.isToggled,
                            onChange: this.onChange
                        }), i.createElement(C.a, {
                            text: this.props.description
                        }))
                    }, t
                }(i.Component),
                Gt = n("ucfV"),
                qt = n("TnsV");
            ! function(e) {
                e[e.AD_FREE_VIEWING = 0] = "AD_FREE_VIEWING", e[e.IGNORE_SLOW_MODE = 1] = "IGNORE_SLOW_MODE", e[e.SUBSCRIBER_ONLY_CHAT = 2] = "SUBSCRIBER_ONLY_CHAT", e[e.SUBSCRIBER_ONLY_ARCHIVES = 3] = "SUBSCRIBER_ONLY_ARCHIVES"
            }(Wt || (Wt = {}));
            var Ht = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.inExperiment = "affiliate_access" === g.o.experiments.getAssignment(v.b.SubsAffiliateBadges), t.toggleBenefit = function(e, n) {
                            return r.__awaiter(t, void 0, void 0, function() {
                                var t, a, i, o, s, l, d, c;
                                return r.__generator(this, function(r) {
                                    return this.props.data.user && this.props.data.user.id && this.props.data.user.roles && this.props.data.user.subscriptionProducts && (t = this.props.data.user.subscriptionProducts[0]) ? (a = e === Wt.AD_FREE_VIEWING ? n : t.hasAdFree, i = e === Wt.IGNORE_SLOW_MODE ? n : t.hasFastChat, o = e === Wt.SUBSCRIBER_ONLY_ARCHIVES ? n : t.hasSubonlyVideoArchive, s = e === Wt.SUBSCRIBER_ONLY_CHAT ? n : t.hasSubOnlyChat, l = this.props.data.user.id, d = {
                                        targetUserID: l,
                                        id: t.id,
                                        hasAdFree: a,
                                        hasFastChat: i,
                                        hasSubOnlyVideoArchive: o,
                                        hasSubOnlyChat: s
                                    }, c = {
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
                                    }, this.props.updateSubscriptionProduct(Object(N.b)(d, c)), [2]) : [2]
                                })
                            })
                        }, t.canAccessSubBadges = function() {
                            return !!(t.inExperiment && t.isAffiliate() || t.isPartner())
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.data.loading && !this.props.data.error || this.props.latencyTracking.reportInteractive()
                    }, t.prototype.componentDidUpdate = function(e) {
                        (e.data.loading && !this.props.data.loading || this.props.data.error) && this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        if (!this.props.data.user || !this.props.data.user.roles || !this.props.data.user.subscriptionProducts) return this.props.data.loading ? i.createElement(m.Xa, {
                            fillContent: !0
                        }) : this.props.data.error ? i.createElement(h.a, null) : null;
                        var e = this.props.data.user.subscriptionProducts[0];
                        if (!e) return null;
                        var t = this.props.channelName,
                            n = e.hasAdFree,
                            a = e.hasFastChat || !1,
                            r = e.hasSubOnlyChat || !1,
                            o = e.hasSubonlyVideoArchive || !1;
                        return i.createElement(i.Fragment, null, i.createElement(ft.a, {
                            title: Object(g.d)("Subscriptions", "DashboardRevenueSettings")
                        }), i.createElement(w.a, null, i.createElement(bt.a, {
                            text: Object(g.d)("Subscription names", "SubsSettingsSection"),
                            linkTo: "/" + t + "/dashboard/settings/revenue/subscription/ticket"
                        }), i.createElement(bt.a, {
                            text: Object(g.d)("Emotes", "SubsSettingsSection"),
                            linkTo: "/" + t + "/dashboard/settings/revenue/subscription/chatperks"
                        }), this.canAccessSubBadges() && i.createElement(bt.a, {
                            text: Object(g.d)("Loyalty badges", "SubsSettingsSection"),
                            linkTo: "/" + t + "/dashboard/settings/revenue/subscription/badges"
                        }), this.isPartner() && i.createElement(Yt, {
                            benefit: Wt.AD_FREE_VIEWING,
                            label: Object(g.d)("Ad-Free viewing", "SubsSettingsSection"),
                            isToggled: n,
                            onChange: this.toggleBenefit,
                            description: Object(g.d)("Allow subscribers to watch your content on your channel ad-free", "SubsSettingsSection")
                        }), i.createElement(Yt, {
                            benefit: Wt.IGNORE_SLOW_MODE,
                            label: Object(g.d)("Ignore slow mode", "SubsSettingsSection"),
                            isToggled: a,
                            onChange: this.toggleBenefit,
                            description: Object(g.d)("Allow subscribers to chat freely in your channel when chat is in slow mode", "SubsSettingsSection")
                        }), i.createElement(Yt, {
                            benefit: Wt.SUBSCRIBER_ONLY_CHAT,
                            label: Object(g.d)("Subscriber-only chat", "SubsSettingsSection"),
                            isToggled: r,
                            onChange: this.toggleBenefit,
                            description: Object(g.d)("Only allow subscribers and moderators to chat in your channel", "SubsSettingsSection")
                        }), i.createElement(Yt, {
                            benefit: Wt.SUBSCRIBER_ONLY_ARCHIVES,
                            label: Object(g.d)("Subscriber-only archives", "SubsSettingsSection"),
                            isToggled: o,
                            onChange: this.toggleBenefit,
                            description: Object(g.d)("Only allow subscribers to watch your past broadcasts", "SubsSettingsSection")
                        })))
                    }, t.prototype.isAffiliate = function() {
                        return this.props.data.user && this.props.data.user.id && this.props.data.user.roles && this.props.data.user.roles && this.props.data.user.roles.isAffiliate || !1
                    }, t.prototype.isPartner = function() {
                        return this.props.data.user && this.props.data.user.id && this.props.data.user.roles && this.props.data.user.roles.isPartner || !1
                    }, t
                }(i.Component),
                Qt = Object(E.compose)(Object(u.c)("SubsSettingsSection"), Object(f.a)(Gt, {
                    options: function(e) {
                        return {
                            variables: {
                                login: e.channelName
                            }
                        }
                    }
                }), Object(f.a)(qt, {
                    name: "updateSubscriptionProduct"
                }))(Ht),
                Xt = n("jYG1"),
                $t = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return r.__extends(t, e), t.prototype.componentDidMount = function() {
                        g.o.setPageTitle(Object(g.d)("Revenue Settings", "DashboardRevenueSettingsTitle")), this.props.data.loading && !this.props.data.error || this.props.latencyTracking.reportInteractive()
                    }, t.prototype.componentDidUpdate = function(e) {
                        (e.data.loading && !this.props.data.loading || this.props.data.error) && this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        return this.props.data.loading ? i.createElement(m.Xa, {
                            fillContent: !0
                        }) : this.props.data.error ? i.createElement(h.a, null) : i.createElement(i.Fragment, null, i.createElement(Mt, {
                            channelName: this.channelName
                        }), (this.isPaidAffiliate || this.isPaidPartner) && i.createElement(i.Fragment, null, i.createElement(Qt, {
                            channelName: this.channelName
                        }), i.createElement(Ft, {
                            channelName: this.channelName,
                            isPartner: this.isPaidPartner
                        })), this.isPaidPartner && i.createElement(zt, {
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
                            var e = this.props.data.channel.payoutPlans;
                            return !!e && !!e.find(function(e) {
                                return e.category === pt.PayoutCategory.Affiliate && e.isReceivingRevenue
                            })
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "isPaidPartner", {
                        get: function() {
                            var e = this.props.data.channel.payoutPlans;
                            return !!e && !!e.find(function(e) {
                                return e.category === pt.PayoutCategory.Partner && e.isReceivingRevenue
                            })
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t
                }(i.Component),
                Kt = Object(E.compose)(Object(u.c)("DashboardRevenueSettingsIndexPage", {
                    destination: S.a.DashboardSettingsRevenueIndex
                }), Object(y.a)({
                    location: k.PageviewLocation.DashboardSettingsRevenueIndex
                }), Object(f.a)(Xt, {
                    options: function(e) {
                        return {
                            variables: {
                                channelName: e.match.params.channelName
                            }
                        }
                    }
                }))($t),
                Zt = n("nHFd"),
                Jt = function(e) {
                    return i.createElement(m.xb, {
                        background: m.r.Base,
                        padding: {
                            x: 2,
                            y: 3
                        }
                    }, i.createElement(m.xb, {
                        borderBottom: !0,
                        margin: {
                            bottom: 2
                        },
                        padding: {
                            bottom: 2
                        }
                    }, i.createElement(m.V, {
                        type: m.Nb.H4
                    }, Object(g.d)("Save Badge Images", "LoyaltyBadgeUploadModalPresentation"))), i.createElement(m.Va, {
                        margin: {
                            bottom: 2
                        }
                    }, i.createElement(m.V, null, Object(g.d)("By uploading and saving these images, you are confirming that you own all rights to the images.", "LoyaltyBadgeUploadModalPresentation"))), i.createElement(m.xb, {
                        borderTop: !0,
                        padding: {
                            top: 2
                        },
                        display: m.W.Flex,
                        justifyContent: m.Ua.Center
                    }, i.createElement(m.Va, {
                        margin: {
                            right: 2
                        }
                    }, i.createElement(m.z, {
                        onClick: e.onClose,
                        type: m.F.Text
                    }, Object(g.d)("Cancel", "LoyaltyBadgeUploadModalPresentation"))), i.createElement(m.z, {
                        onClick: e.onSaveClick
                    }, Object(g.d)("Save", "LoyaltyBadgeUploadModalPresentation"))), i.createElement(Zt.a, {
                        closeOnBackdropClick: !0,
                        closeOnPageNavigation: !0
                    }))
                },
                en = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onSaveClick = function() {
                            t.props.closeModal(), t.props.onSaveClick()
                        }, t.onCancelClick = function() {
                            t.props.closeModal()
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        return i.createElement(Jt, {
                            onSaveClick: this.onSaveClick,
                            onClose: this.onCancelClick
                        })
                    }, t
                }(i.Component);
            var tn, nn = Object(Ze.connect)(null, function(e) {
                    return Object(E.bindActionCreators)({
                        closeModal: Je.c
                    }, e)
                })(en),
                an = "subscriptions/v1/channels",
                rn = function() {
                    function e() {}
                    return e.getBadges = function(e) {
                        return r.__awaiter(void 0, void 0, Promise, function() {
                            var t, n;
                            return r.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        return a.trys.push([0, 2, , 3]), [4, V.a.getOrThrow(an + "/" + e + "/badges", {
                                            credentials: "include"
                                        })];
                                    case 1:
                                        return t = a.sent(), [2, sn(t.body)];
                                    case 2:
                                        return n = a.sent(), [2, Promise.reject(n)];
                                    case 3:
                                        return [2]
                                }
                            })
                        })
                    }, e.getTimeoutStatuses = function(e) {
                        return r.__awaiter(void 0, void 0, Promise, function() {
                            var t;
                            return r.__generator(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        return n.trys.push([0, 2, , 3]), [4, V.a.getOrThrow(an + "/" + e + "/timeout_statuses", {
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
                        return r.__awaiter(void 0, void 0, Promise, function() {
                            var n;
                            return r.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        return a.trys.push([0, 2, , 3]), [4, V.a.deleteOrThrow(an + "/" + e + "/badges/" + t, {
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
                        return r.__awaiter(void 0, void 0, Promise, function() {
                            var n, a, i;
                            return r.__generator(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        return r.trys.push([0, 2, , 3]), (n = new FormData).append("required_tenure_months", t.requiredTenureMonths.toString()), n.append("image_1x", t.image1x), n.append("image_2x", t.image2x), n.append("image_4x", t.image4x), [4, V.a.postOrThrow(an + "/" + e + "/badges", {
                                            body: n,
                                            credentials: "include"
                                        })];
                                    case 1:
                                        return a = r.sent(), [2, on(a.body)];
                                    case 2:
                                        return i = r.sent(), [2, Promise.reject(i)];
                                    case 3:
                                        return [2]
                                }
                            })
                        })
                    }, e
                }(),
                on = function(e) {
                    return {
                        id: e.id,
                        requiredTenureMonths: e.required_tenure_months,
                        image1xURL: e.image_1x_url,
                        image2xURL: e.image_2x_url,
                        image4xURL: e.image_4x_url,
                        title: e.title
                    }
                },
                sn = function(e) {
                    return e.map(function(e) {
                        return on(e)
                    })
                },
                ln = n("1YV1"),
                dn = (n("Dg2t"), "https://static-cdn.jtvnw.net/badges/v1/19dd8673-124d-4f44-830c-b0f4f9d78635/2"),
                cn = "current-badge-image-selector",
                un = "current-badge-placeholder-selector",
                mn = "current-badge-locked-overlay-selector",
                pn = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.renderCurrentBadges = function() {
                            if (!t.props.data.user || !t.props.data.user.roles) return t.props.data.loading ? i.createElement(m.Xa, null) : t.props.data.error ? i.createElement(h.a, null) : null;
                            var e = new Map(t.props.badgesMap),
                                n = t.props.data.user.roles.isPartner,
                                a = (n ? xn : xn.filter(function(e) {
                                    return e.availableToAffiliate
                                })).map(function(n) {
                                    var a = n.requiredTenureMonths,
                                        r = e.get(a);
                                    if (0 !== a || t.props.badgesMap.has(0)) {
                                        if (r) {
                                            i = t.renderToolTip(r.title, r.image2xURL);
                                            return t.renderCurrentBadgeImage(n, i)
                                        }
                                        return t.renderCurrentBadgePlaceholder(n)
                                    }
                                    var i = t.renderToolTip(Object(g.d)("Subscriber", "LoyaltyBadgeCurrentSectionComponent"), dn);
                                    return t.renderCurrentBadgeImage(n, i)
                                });
                            return i.createElement(m.Va, {
                                margin: {
                                    top: 1,
                                    bottom: 1
                                }
                            }, a, !n && t.renderLockedBadges())
                        }, t.renderLockedBadges = function() {
                            return i.createElement(m.Va, {
                                "data-test-selector": mn,
                                display: m.W.InlineFlex,
                                flexDirection: m.Y.Column,
                                margin: {
                                    left: 1
                                }
                            }, i.createElement(m.Va, {
                                display: m.W.InlineFlex,
                                flexDirection: m.Y.Row,
                                margin: {
                                    bottom: 1
                                }
                            }, i.createElement(m.Va, {
                                className: "loyalty-badges-current-section__container",
                                margin: {
                                    right: 1
                                }
                            }, i.createElement(m.Va, {
                                className: "loyalty-badges-current-section__placeholder-light",
                                display: m.W.InlineFlex,
                                justifyContent: m.Ua.Center
                            }, i.createElement(m.mb, {
                                asset: m.nb.Lock,
                                type: m.ob.Brand
                            }))), i.createElement(m.Va, {
                                className: "loyalty-badges-current-section__container",
                                margin: {
                                    right: 1
                                }
                            }, i.createElement(m.Va, {
                                className: "loyalty-badges-current-section__placeholder-light"
                            })), i.createElement(m.Va, {
                                className: "loyalty-badges-current-section__container",
                                margin: {
                                    right: 1
                                }
                            }, i.createElement(m.Va, {
                                className: "loyalty-badges-current-section__placeholder-light",
                                position: m.db.Absolute
                            }), i.createElement(m.Va, {
                                className: "loyalty-badges-current-section__gradient",
                                position: m.db.Absolute
                            }))), Object(g.d)("Unlock Year 2 to 8 badges when you become a Partner", "LoyaltyBadgeCurrentSectionComponent"))
                        }, t.renderCurrentBadgeImage = function(e, n) {
                            var a = cn;
                            return t.renderCurrentBadge(e, "loyalty-badges-current-section__badge", a, n)
                        }, t.renderCurrentBadgePlaceholder = function(e) {
                            var n = un;
                            return t.renderCurrentBadge(e, "loyalty-badges-current-section__placeholder", n)
                        }, t.renderCurrentBadge = function(e, t, n, a) {
                            return i.createElement(m.Va, {
                                className: "loyalty-badges-current-section__container",
                                alignItems: m.f.Center,
                                key: e.requiredTenureMonths,
                                "data-test-selector": n,
                                display: m.W.InlineFlex,
                                flexDirection: m.Y.Column,
                                margin: {
                                    right: 1
                                },
                                verticalAlign: m.Xb.Top
                            }, i.createElement(m.Va, {
                                className: t,
                                margin: {
                                    bottom: 1
                                }
                            }, a), i.createElement(m.V, null, e.name))
                        }, t.renderToolTip = function(e, t) {
                            return i.createElement(m.Qb, {
                                direction: m.Sb.Bottom,
                                label: e
                            }, i.createElement("img", {
                                src: t,
                                alt: e
                            }))
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        return i.createElement(_.a, {
                            title: Object(g.d)("Current Badges", "LoyaltyBadgeCurrentSectionComponent")
                        }, this.renderCurrentBadges())
                    }, t
                }(i.Component),
                gn = Object(E.compose)(Object(f.a)(ln, {
                    options: function(e) {
                        return {
                            variables: {
                                login: e.channelLogin
                            }
                        }
                    }
                }))(pn);
            n("keuq");
            ! function(e) {
                e[e.NoChanges = 0] = "NoChanges", e[e.Working = 1] = "Working", e[e.Success = 2] = "Success", e[e.Error = 3] = "Error"
            }(tn || (tn = {}));
            var hn = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.renderContainer = function(e, n) {
                            return i.createElement(m.Va, {
                                textAlign: m.Jb.Center,
                                margin: {
                                    right: 1
                                }
                            }, i.createElement(m.Va, {
                                className: "loyalty-badges-delete-section__container",
                                alignItems: m.f.Center,
                                display: m.W.InlineFlex,
                                justifyContent: m.Ua.Center
                            }, i.createElement("img", {
                                src: e,
                                alt: t.props.title
                            })), i.createElement(m.V, null, n))
                        }, t.getButtonState = function(e) {
                            switch (e) {
                                case tn.Working:
                                    return m.E.Loading;
                                case tn.Success:
                                case tn.NoChanges:
                                case tn.Error:
                                default:
                                    return m.E.Default
                            }
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        return i.createElement(i.Fragment, null, this.renderContainer(this.props.image1xURL, Object(g.d)("18 x 18px", "LoyaltyBadgeDeleteSection")), this.renderContainer(this.props.image2xURL, Object(g.d)("36 x 36px", "LoyaltyBadgeDeleteSection")), this.renderContainer(this.props.image4xURL, Object(g.d)("72 x 72px", "LoyaltyBadgeDeleteSection")), i.createElement(m.Va, {
                            className: "loyalty-badges-delete-section__button-container",
                            alignItems: m.f.Start,
                            display: m.W.InlineFlex,
                            flexDirection: m.Y.Column,
                            justifyContent: m.Ua.Center,
                            margin: {
                                left: 1
                            }
                        }, i.createElement(m.Va, {
                            margin: {
                                bottom: 1
                            }
                        }, i.createElement(m.z, {
                            type: m.F.Alert,
                            state: this.getButtonState(this.props.deleteStatus),
                            onClick: this.props.showDeleteBadgeModal
                        }, Object(g.d)("Delete Badge", "LoyaltyBadgeUploadSection"))), this.props.deleteStatus === tn.Error && i.createElement(m.ab, {
                            label: Object(g.d)("Failed to delete subscriber badge", "LoyaltyBadgeDeleteSection"),
                            type: m.bb.Alert
                        })))
                    }, t
                }(i.Component),
                bn = function(e) {
                    return i.createElement(m.xb, {
                        background: m.r.Base,
                        padding: {
                            x: 2,
                            y: 3
                        }
                    }, i.createElement(m.xb, {
                        borderBottom: !0,
                        margin: {
                            bottom: 2
                        },
                        padding: {
                            bottom: 2
                        }
                    }, i.createElement(m.V, {
                        type: m.Nb.H4
                    }, Object(g.d)("Are you sure?", "LoyaltyBadgeDeleteModalPresentation"))), i.createElement(m.Va, {
                        margin: {
                            bottom: 2
                        }
                    }, i.createElement(m.V, null, Object(g.d)("Deleting your subscriber badge could negatively impact your subscribers.", "LoyaltyBadgeDeleteModalPresentation"))), i.createElement(m.xb, {
                        borderTop: !0,
                        padding: {
                            top: 2
                        },
                        display: m.W.Flex,
                        justifyContent: m.Ua.Center
                    }, i.createElement(m.Va, {
                        margin: {
                            right: 2
                        }
                    }, i.createElement(m.z, {
                        onClick: e.onClose,
                        type: m.F.Text
                    }, Object(g.d)("Cancel", "LoyaltyBadgeDeleteModalPresentation"))), i.createElement(m.z, {
                        onClick: e.onDeleteClick
                    }, Object(g.d)("Delete", "LoyaltyBadgeDeleteModalPresentation"))), i.createElement(Zt.a, {
                        closeOnBackdropClick: !0,
                        closeOnPageNavigation: !0
                    }))
                },
                fn = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onDeleteClick = function() {
                            t.props.closeModal(), t.props.onDeleteClick()
                        }, t.onCancelClick = function() {
                            t.props.closeModal()
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        return i.createElement(bn, {
                            onDeleteClick: this.onDeleteClick,
                            onClose: this.onCancelClick
                        })
                    }, t
                }(i.Component);
            var vn = Object(Ze.connect)(null, function(e) {
                return Object(E.bindActionCreators)({
                    closeModal: Je.c
                }, e)
            })(fn);
            var En, yn = Object(Ze.connect)(null, function(e, t) {
                    return Object.assign(Object(E.bindActionCreators)({
                        showDeleteBadgeModal: function() {
                            return Object(Je.d)(vn, {
                                onDeleteClick: t.onDeleteClick
                            })
                        }
                    }, e), t)
                })(hn),
                Sn = function() {
                    return i.createElement(i.Fragment, null, i.createElement(m.V, {
                        bold: !0,
                        fontSize: m.Aa.Size7
                    }, Object(g.d)("Contact Partner Help", "LoyaltyBadgeTimedOutSection")), i.createElement(m.Va, {
                        padding: {
                            top: 1
                        }
                    }, i.createElement(m.V, null, Object(g.d)("One or more of the badges you've attempted to upload violate our Terms of Service. As such, your ability to upload new badges has been temporarily disabled and the offending content has been deleted.", "LoyaltyBadgeTimedOutSection"))), i.createElement(m.Va, {
                        padding: {
                            top: 1
                        }
                    }, i.createElement(m.V, null, Object(g.d)("Please contact {email} for more information.", {
                        email: i.createElement("a", {
                            href: "mailto:partnerhelp@twitch.tv"
                        }, "partnerhelp@twitch.tv")
                    }, "LoyaltyBadgeTimedOutSection"))))
                },
                kn = function() {
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
            n("xh38");
            ! function(e) {
                e[e.BadSizeError = 0] = "BadSizeError", e[e.BadImageError = 1] = "BadImageError", e[e.BadImageDimensionsError = 2] = "BadImageDimensionsError", e[e.None = 3] = "None"
            }(En || (En = {}));
            var Nn = 25e3,
                On = Nn / 1e3,
                Tn = ["image/png"],
                Cn = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            errorStatus: En.None
                        }, t.getErrorText = function() {
                            switch (t.state.errorStatus) {
                                case En.BadSizeError:
                                    return Object(g.d)("Max file size is {fileSize} KB", {
                                        fileSize: On
                                    }, "LoyaltyBadgeFilePicker");
                                case En.BadImageError:
                                    return Object(g.d)("Bad PNG file", "LoyaltyBadgeFilePicker");
                                case En.BadImageDimensionsError:
                                    return Object(g.d)("PNG must be {width} x {height}px", {
                                        width: t.props.widthRequirement,
                                        height: t.props.heightRequirement
                                    }, "LoyaltyBadgeFilePicker");
                                case En.None:
                                default:
                                    return
                            }
                        }, t.onFilesSubmitted = function(e) {
                            return r.__awaiter(t, void 0, void 0, function() {
                                var t, n = this;
                                return r.__generator(this, function(a) {
                                    return e.length < 1 ? [2] : (t = e[0]).size > Nn ? (this.setState({
                                        errorStatus: En.BadSizeError
                                    }), [2]) : (kn.readFile(t, function(e) {
                                        kn.readImage(e, n.props.widthRequirement, n.props.heightRequirement, function() {
                                            n.setState({
                                                errorStatus: En.None
                                            }), n.props.onFileSubmitted(t, e)
                                        }, function() {
                                            n.setState({
                                                errorStatus: En.BadImageDimensionsError
                                            })
                                        }, function() {
                                            n.setState({
                                                errorStatus: En.BadImageError
                                            })
                                        })
                                    }), [2])
                                })
                            })
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        var e = this.getErrorText();
                        return i.createElement(m.Va, {
                            position: m.db.Relative
                        }, i.createElement(m.Va, {
                            textAlign: m.Jb.Center,
                            margin: {
                                right: 1
                            }
                        }, i.createElement(m.Va, {
                            className: "loyalty-badges-file-picker__container",
                            display: m.W.InlineFlex,
                            flexDirection: m.Y.Column,
                            position: m.db.Relative
                        }, i.createElement(M.a, {
                            allowedFileTypes: Tn,
                            error: void 0 !== e,
                            onFilesSubmitted: this.onFilesSubmitted
                        }, i.createElement(m.Va, {
                            padding: .5
                        }, e ? i.createElement(m.V, {
                            color: m.O.Error,
                            wordBreak: m.Zb.BreakWord
                        }, e) : this.props.children))), i.createElement(m.V, null, Object(g.d)("{width} x {height}px", {
                            width: this.props.widthRequirement,
                            height: this.props.heightRequirement
                        }, "LoyaltyBadgeFilePicker")), e && i.createElement(m.ab, {
                            label: e,
                            type: m.bb.Alert
                        })))
                    }, t
                }(i.Component),
                Pn = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.renderFilePickerContents = function() {
                            return i.createElement(i.Fragment, null, i.createElement(m.mb, {
                                asset: m.nb.Plus,
                                height: 16,
                                width: 16
                            }), i.createElement(m.V, null, Object(g.d)("Upload Image", "LoyaltyBadgeUploadSection")))
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        var e = this.props,
                            t = e.image1xURL,
                            n = e.image2xURL,
                            a = e.image4xURL;
                        return i.createElement(i.Fragment, null, i.createElement(Cn, {
                            onFileSubmitted: this.props.onImage1xSubmitted,
                            heightRequirement: 18,
                            widthRequirement: 18
                        }, t ? i.createElement("img", {
                            src: t
                        }) : this.renderFilePickerContents()), i.createElement(Cn, {
                            onFileSubmitted: this.props.onImage2xSubmitted,
                            heightRequirement: 36,
                            widthRequirement: 36
                        }, n ? i.createElement("img", {
                            src: n
                        }) : this.renderFilePickerContents()), i.createElement(Cn, {
                            onFileSubmitted: this.props.onImage4xSubmitted,
                            heightRequirement: 72,
                            widthRequirement: 72
                        }, a ? i.createElement("img", {
                            src: a
                        }) : this.renderFilePickerContents()))
                    }, t
                }(i.Component),
                An = n("OB5i"),
                _n = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            isTimedOut: !1
                        }, t.renderTabs = function() {
                            var e = !1;
                            if (t.props.data.user && t.props.data.user.roles) e = t.props.data.user.roles.isPartner || e;
                            else if (t.props.data.error) return i.createElement(h.a, null);
                            var n = (e ? xn : xn.filter(function(e) {
                                return e.availableToAffiliate
                            })).map(function(e) {
                                var n = e.requiredTenureMonths;
                                return i.createElement(m.yb, {
                                    key: n,
                                    active: t.props.activeTab === n,
                                    "data-tab-target": n,
                                    onClick: t.toggleActiveTab
                                }, i.createElement(m.V, null, e.name))
                            });
                            return i.createElement(m.zb, null, n)
                        }, t.renderTabContent = function() {
                            var e = t.props.activeTab,
                                n = t.props.badgesMap.get(e);
                            return i.createElement(m.Va, {
                                display: m.W.InlineFlex,
                                margin: {
                                    top: 1
                                }
                            }, n ? i.createElement(yn, {
                                image1xURL: n.image1xURL,
                                image2xURL: n.image2xURL,
                                image4xURL: n.image4xURL,
                                title: n.title,
                                onDeleteClick: t.props.onDeleteClick,
                                deleteStatus: t.props.deleteStatus
                            }) : i.createElement(Pn, {
                                image1xURL: t.props.image1xDataURL,
                                image2xURL: t.props.image2xDataURL,
                                image4xURL: t.props.image4xDataURL,
                                onImage1xSubmitted: t.props.onImage1xSubmitted,
                                onImage2xSubmitted: t.props.onImage2xSubmitted,
                                onImage4xSubmitted: t.props.onImage4xSubmitted
                            }))
                        }, t.renderTosWarning = function() {
                            return "affiliate_access" === g.o.experiments.getAssignment(v.b.SubsAffiliateBadges) ? i.createElement(m.xb, {
                                className: "loyalty-badges-page__toswarning",
                                background: m.r.Alt,
                                color: m.O.Alt,
                                padding: 1,
                                margin: {
                                    x: "auto",
                                    top: 2
                                },
                                border: !0
                            }, Object(g.d)("Before submitting your badge, make sure it adheres to <x:link>Twitch's Subscriber Badge and Emoticon Guidelines</x:link>. Submissions in violations of these Guidelines will be rejected and may result in action against your account.", {
                                "x:link": function(e) {
                                    return i.createElement(m.T, {
                                        to: "https://help.twitch.tv/customer/portal/articles/2348985#guidelines"
                                    }, e)
                                }
                            }, "LoyaltyBadgeManageSectionComponent")) : null
                        }, t.toggleActiveTab = function(e) {
                            return r.__awaiter(t, void 0, void 0, function() {
                                var t, n, a, i, o;
                                return r.__generator(this, function(r) {
                                    if (e.currentTarget.parentElement)
                                        for (t = e.currentTarget.parentElement.getAttribute("data-tab-target"), n = 0, a = xn; n < a.length; n++) i = a[n], o = i.requiredTenureMonths, t === o.toString() && this.props.toggleActiveTab(o);
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
                                        return this.props.data.user && this.props.data.user.id ? [4, rn.getTimeoutStatuses(this.props.data.user.id)] : [2];
                                    case 1:
                                        return e = t.sent(), this.setState({
                                            isTimedOut: e
                                        }), [2]
                                }
                            })
                        })
                    }, t.prototype.render = function() {
                        return i.createElement(_.a, {
                            title: Object(g.d)("Manage Badges", "LoyaltyBadgeManageSectionComponent")
                        }, this.state.isTimedOut ? i.createElement(Sn, null) : i.createElement(i.Fragment, null, this.renderTabs(), this.renderTabContent(), this.renderTosWarning()))
                    }, t
                }(i.Component),
                wn = Object(E.compose)(Object(f.a)(An, {
                    options: function(e) {
                        return {
                            variables: {
                                login: e.channelLogin
                            }
                        }
                    }
                }))(_n),
                In = n("YjpL"),
                xn = [{
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
                Rn = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            badgesMap: new Map,
                            activeTab: 0,
                            saveStatus: O.b.NoChanges,
                            deleteStatus: tn.NoChanges,
                            errorLoadingBadges: !1
                        }, t.onSaveClick = function() {
                            return r.__awaiter(t, void 0, void 0, function() {
                                var e, t, n, a;
                                return r.__generator(this, function(r) {
                                    switch (r.label) {
                                        case 0:
                                            if (!((e = this.props.data.user) && e.id && this.state.image1x && this.state.image2x && this.state.image4x)) return [3, 4];
                                            this.setState({
                                                saveStatus: O.b.Working
                                            }), t = {
                                                requiredTenureMonths: this.state.activeTab,
                                                image1x: this.state.image1x,
                                                image2x: this.state.image2x,
                                                image4x: this.state.image4x
                                            }, r.label = 1;
                                        case 1:
                                            return r.trys.push([1, 3, , 4]), [4, rn.uploadBadge(e.id, t)];
                                        case 2:
                                            return n = r.sent(), (a = new Map(this.state.badgesMap)).set(n.requiredTenureMonths, n), this.setState({
                                                badgesMap: a,
                                                image1xDataURL: void 0,
                                                image2xDataURL: void 0,
                                                image4xDataURL: void 0,
                                                image1x: void 0,
                                                image2x: void 0,
                                                image4x: void 0,
                                                saveStatus: O.b.Success
                                            }), [3, 4];
                                        case 3:
                                            return r.sent(), this.setState({
                                                saveStatus: O.b.Error
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
                                        deleteStatus: tn.NoChanges,
                                        saveStatus: O.b.NoChanges
                                    }), [2]
                                })
                            })
                        }, t.updateSaveStatus = function() {
                            t.state.image1x && t.state.image2x && t.state.image4x ? t.setState({
                                saveStatus: O.b.DirtyChanges
                            }) : t.setState({
                                saveStatus: O.b.NoChanges
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
                                                deleteStatus: tn.Working
                                            }), a.label = 1;
                                        case 1:
                                            return a.trys.push([1, 3, , 4]), [4, rn.deleteBadge(e.id, t.id)];
                                        case 2:
                                            return a.sent(), (n = new Map(this.state.badgesMap)).delete(t.requiredTenureMonths), this.setState({
                                                badgesMap: n,
                                                image1xDataURL: void 0,
                                                image2xDataURL: void 0,
                                                image4xDataURL: void 0,
                                                image1x: void 0,
                                                image2x: void 0,
                                                image4x: void 0,
                                                saveStatus: O.b.NoChanges,
                                                deleteStatus: tn.Success
                                            }), [3, 4];
                                        case 3:
                                            return a.sent(), this.setState({
                                                deleteStatus: tn.Error
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
                    return r.__extends(t, e), t.prototype.componentDidUpdate = function(e) {
                        return r.__awaiter(this, void 0, void 0, function() {
                            return r.__generator(this, function(t) {
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
                        return r.__awaiter(this, void 0, void 0, function() {
                            return r.__generator(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return g.o.setPageTitle(Object(g.d)("Loyalty Badges", "LoyaltyBadgesPageTitle")), !this.props.data.loading && this.props.data.user && this.props.data.user.id ? [4, this.getSetBadgesAndReportInteractive(this.props.data.user.id)] : [3, 2];
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
                        if (this.state.errorLoadingBadges) return i.createElement(h.a, null);
                        if ((!this.props.data.user || !this.props.data.user.id) && this.props.data.error) return i.createElement(h.a, null);
                        var e = i.createElement(T.a, {
                                status: this.state.saveStatus,
                                onClickSave: this.handleModalOpen
                            }),
                            t = i.createElement(A.a, {
                                title: Object(g.d)("Loyalty Badges", "LoyaltyBadgesPageComponent"),
                                linkToParent: "/" + this.props.match.params.channelLogin + "/dashboard/settings/revenue"
                            });
                        return i.createElement(w.a, {
                            header: t,
                            footer: e
                        }, i.createElement(gn, {
                            badgesMap: this.state.badgesMap,
                            channelLogin: this.props.match.params.channelLogin
                        }), i.createElement(wn, {
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
                        return r.__awaiter(this, void 0, void 0, function() {
                            var t, n;
                            return r.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        return a.trys.push([0, 2, 3, 4]), [4, rn.getBadges(e)];
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
                Dn = Object(E.compose)(Object(u.c)("LoyaltyBadgesPage", {
                    destination: S.a.DashboardSettingsRevenueLoyaltyBadges
                }), Object(y.a)({
                    location: k.PageviewLocation.DashboardSettingsRevenueLoyaltyBadges
                }), Object(f.a)(In, {
                    options: function(e) {
                        return {
                            variables: {
                                login: e.match.params.channelLogin
                            }
                        }
                    }
                }))(Rn);
            var Fn, jn = Object(Ze.connect)(null, function(e) {
                    return Object(E.bindActionCreators)({
                        showUploadBadgeModal: function(e) {
                            var t = r.__rest(e, []);
                            return Object(Je.d)(nn, t)
                        }
                    }, e)
                })(Dn),
                Vn = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return r.__extends(t, e), t.prototype.componentDidMount = function() {
                        g.o.setPageTitle(Object(g.d)("Merch by Amazon (Beta)", "DashboardRevenueSettingsMerchByAmazonTitle"))
                    }, t.prototype.render = function() {
                        var e = i.createElement(A.a, {
                            title: Object(g.d)("Merch by Amazon (Beta)", "DashboardRevenueSettingsMerchByAmazon"),
                            linkToParent: "/" + this.props.match.params.channelName + "/dashboard/settings/revenue"
                        });
                        return i.createElement(w.a, {
                            header: e
                        }, i.createElement(_.a, null, i.createElement(m.V, null, Object(g.d)("Register with Merch by Amazon to create and sell your merchandise.", "DashboardRevenueSettingsMerchByAmazon")), i.createElement(m.Va, {
                            padding: {
                                y: 2
                            }
                        }, i.createElement(m.V, null, Object(g.d)("Merch by Amazon will only approve one account for access per Twitch Partner. When you click this link you will be asked to log in with an Amazon account. Please make sure to log in with your preferred Amazon account, as that is the one we will enable for Merch by Amazon access.", "DashboardRevenueSettingsMerchByAmazon"))), i.createElement(m.z, {
                            targetBlank: !0,
                            linkTo: "https://twitch.amazon.com/link?confirm=ALWAYS&returnUri=https%3A%2F%2Fmerch.amazon.com%2Ftwitch-landing"
                        }, Object(g.d)("Create & Manage Your Merch Account", "DashboardRevenueSettingsMerchByAmazon"))))
                    }, t
                }(i.Component),
                Ln = Object(E.compose)(Object(u.c)("MerchByAmazonPage", {
                    autoReportInteractive: !0,
                    destination: S.a.DashboardSettingsRevenueMerchByAmazon
                }), Object(y.a)({
                    location: k.PageviewLocation.DashboardSettingsRevenueMerchByAmazon
                }))(Vn),
                Un = n("cr+I"),
                Mn = n("wIs1"),
                Bn = n("x7UT"),
                Wn = n("NAv5"),
                zn = n("h3C/"),
                Yn = function() {
                    return i.createElement(i.Fragment, null, i.createElement(m.Va, {
                        margin: {
                            bottom: 1
                        }
                    }, i.createElement(m.V, {
                        type: m.Nb.H4
                    }, Object(g.d)("Twitch Affiliate Agreement", "AffiliateAgreement"))), i.createElement(m.V, {
                        type: m.Nb.P
                    }, Object(g.d)('By clicking the "{buttonLabel}" button below, you agree to the <x:link>Twitch Affiliate Agreement</x:link> (including all policies, appendices, specifications, guidelines, schedules, and other rules incorporated by reference therein); provided, however, that the Twitch Affiliate Agreement shall not be effective until we determine that you are eligible to participate in the Twitch Affiliate Program as further described therein.', {
                        buttonLabel: Object(g.d)("Agree", "AffiliateAgreement"),
                        "x:link": function(e) {
                            return i.createElement(m.T, {
                                to: "https://www.twitch.tv/p/legal/affiliate-agreement"
                            }, e)
                        }
                    }, "AffiliateAgreement")))
                },
                Gn = function() {
                    return i.createElement(i.Fragment, null, i.createElement(m.Va, {
                        margin: {
                            bottom: 1
                        }
                    }, i.createElement(m.V, {
                        type: m.Nb.H4
                    }, Object(g.d)("Twitch Partner Program Terms", "CustomPartnerAgreement"))), i.createElement(m.V, {
                        type: m.Nb.P
                    }, Object(g.d)("Your Twitch Partner Agreement has been emailed to you via DocuSign. Check the inbox of the email address associated with your Twitch account for an email from DocuSign/Twitch and follow the instructions. Once you have signed the Twitch Partner Agreement, please click {buttonLabel} to continue.", {
                        buttonLabel: Object(g.d)("Next", "CustomPartnerAgreement")
                    }, "CustomPartnerAgreement")))
                },
                qn = function() {
                    return i.createElement(i.Fragment, null, i.createElement(m.Va, {
                        margin: {
                            bottom: 1
                        }
                    }, i.createElement(m.V, {
                        type: m.Nb.H4
                    }, Object(g.d)("Twitch Extensions Developer Program Terms", "ExtensionsDeveloperAgreement"))), i.createElement(m.V, {
                        type: m.Nb.P
                    }, Object(g.d)("It looks like you've already agreed to the Twitch Developer Agreement! Click {buttonLabel} to continue.", {
                        buttonLabel: Object(g.d)("Next", "ExtensionsDeveloperAgreement")
                    }, "ExtensionsDeveloperAgreement")))
                },
                Hn = function(e) {
                    return i.createElement(m.xb, {
                        background: m.r.Alt2,
                        padding: {
                            x: 2,
                            y: 1
                        }
                    }, i.createElement(m.Va, {
                        display: m.W.InlineBlock,
                        margin: {
                            right: 1
                        }
                    }, i.createElement(m.V, {
                        type: m.Nb.H5,
                        transform: m.Mb.Uppercase,
                        color: m.O.Alt,
                        bold: !0
                    }, e.title)), !!e.statusText && i.createElement(m.Va, {
                        display: m.W.InlineBlock
                    }, i.createElement(m.V, {
                        type: m.Nb.H4,
                        transform: m.Mb.Uppercase,
                        bold: !0
                    }, i.createElement(m.ab, {
                        label: e.statusText,
                        type: e.statusType
                    }))))
                },
                Qn = function(e) {
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
                        return i.createElement(i.Fragment, null, i.createElement(Hn, {
                            title: Object(g.d)("Parent Consent", "ParentConfirmation")
                        }), i.createElement(m.Va, {
                            padding: 2
                        }, i.createElement(m.V, {
                            type: m.Nb.P,
                            color: m.O.Alt2
                        }, Object(g.d)("Parent or legal guardian: Please type your first and last name and check the box below.", "ParentConfirmation")), i.createElement(m.Va, {
                            margin: {
                                top: 2
                            }
                        }, i.createElement(m.Ca, {
                            label: Object(g.d)("Parent or Legal Guardian Name", "ParentConfirmation"),
                            orientation: m.Da.Horizontal
                        }, i.createElement(m.Va, {
                            margin: {
                                bottom: 1
                            }
                        }, i.createElement(m.Pa, {
                            type: m.Ra.Text,
                            placeholder: Object(g.d)("First and Last Name", "ParentConfirmation"),
                            value: this.state.parentName,
                            onChange: this.handleParentNameChange
                        })), i.createElement(m.N, {
                            label: Object(g.d)("I hereby warrant that I am the (parent)/(guardian) of the Twitch user associated with this account, a minor, and have full authority to authorize this Agreement, which I have read and approved. I hereby agree that I and said minor will be bound by all provisions contained in this Agreement.", "ParentConfirmation"),
                            checked: this.state.checked,
                            onChange: this.toggleChecked
                        })))))
                    }, t
                }(i.Component),
                Xn = function() {
                    return i.createElement(i.Fragment, null, i.createElement(m.Va, {
                        margin: {
                            bottom: 1
                        }
                    }, i.createElement(m.V, {
                        type: m.Nb.H4
                    }, Object(g.d)("Twitch Partner Program Terms", "PartnerRedoInfo"))), i.createElement(m.V, {
                        type: m.Nb.P
                    }, Object(g.d)("It looks like you've already agreed to the Twitch Partner Agreement! Click {buttonLabel} to continue.", {
                        buttonLabel: Object(g.d)("Next", "PartnerRedoInfo")
                    }, "PartnerRedoInfo")))
                },
                $n = function(e) {
                    return i.createElement(m.Va, {
                        position: m.db.Relative
                    }, i.createElement(m.Va, {
                        position: m.db.Absolute,
                        attachRight: !0
                    }, i.createElement(m.z, {
                        onClick: function() {
                            var e = window.open();
                            if (e) {
                                var t = window.document.getElementById("agreement-id-selector"),
                                    n = t && t.innerHTML;
                                n && (e.document.write(n), e.document.close(), e.focus(), e.print())
                            }
                        }
                    }, Object(g.d)("Print", "ViewPrintableAgreement"))), i.createElement("div", {
                        id: "agreement-id-selector",
                        dangerouslySetInnerHTML: {
                            __html: e.body
                        }
                    }))
                },
                Kn = n("/Onm"),
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
                                            return this.props.onboardEntity === pt.OnboardEntity.StandardPartner || this.props.onboardEntity === pt.OnboardEntity.PremiumPartner ? (n = this.props.data.currentUser.programAgreement || "", e = n && n.type, t = n && n.version) : (e = this.props.onboardEntity, t = "v1"), a = r.__assign({}, Object(N.a)({
                                                type: e,
                                                version: t
                                            })), [4, this.props.acceptProgramAgreement(a)];
                                        case 1:
                                            return (i = s.sent()).data.acceptProgramAgreement.error ? (this.setState({
                                                processingAgreement: !1
                                            }), [2]) : (o = function(e) {
                                                return e.currentUser.payoutInvite && e.currentUser.payoutInvite.workflow && i.data.acceptProgramAgreement.workflow && (e.currentUser.payoutInvite.workflow.currentStep = i.data.acceptProgramAgreement.workflow.currentStep), e
                                            }, this.props.updateContainerQuery(o), this.props.updateStepDisplayed(pt.OnboardStep.TaxInterview), [2])
                                    }
                                })
                            })
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        if (this.props.data.loading) return i.createElement(w.a, null, i.createElement(_.a, null, i.createElement(m.cb, {
                            lineCount: 4
                        })));
                        if (this.props.data.error) return i.createElement(w.a, null, i.createElement(_.a, null, i.createElement(h.a, {
                            message: Object(g.d)("Oops, something went wrong.", "PayoutOnboardingAgreement")
                        })));
                        var e = i.createElement(m.z, {
                            "data-test-selector": "payout-onboarding-agreement__proceed-button",
                            disabled: this.proceedButtonDisabled || this.state.processingAgreement,
                            state: this.state.processingAgreement ? m.E.Loading : m.E.Default,
                            onClick: this.handleAgreeClick
                        }, this.skipAgreement ? Object(g.d)("Next", "PayoutOnboardingAgreement") : Object(g.d)("Agree", "PayoutOnboardingAgreement"));
                        return i.createElement(w.a, {
                            footer: e
                        }, i.createElement(_.a, null, i.createElement(m.xb, {
                            borderMarked: !0,
                            background: m.r.Base,
                            padding: 2,
                            elevation: 1
                        }, this.renderAgreement)), !this.skipAgreement && this.requiresParentConsent && i.createElement(Qn, {
                            updateParentName: this.updateParentName,
                            updateParentConfirmation: this.updateParentConfirmation
                        }))
                    }, Object.defineProperty(t.prototype, "renderAgreement", {
                        get: function() {
                            if (this.isPartnerRedo) return i.createElement(Xn, null);
                            switch (this.props.onboardEntity) {
                                case pt.OnboardEntity.Affiliate:
                                    return i.createElement(Yn, null);
                                case pt.OnboardEntity.ExtensionsDeveloper:
                                    return i.createElement(qn, null);
                                case pt.OnboardEntity.StandardPartner:
                                case pt.OnboardEntity.PremiumPartner:
                                    var e = this.props.data.currentUser.programAgreement;
                                    return e && i.createElement($n, {
                                        body: e.body
                                    });
                                case pt.OnboardEntity.CustomPartner:
                                    return i.createElement(Gn, null);
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
                                return e.category === pt.PayoutCategory.Partner
                            });
                            return !!e && (!!e.isReceivingRevenue && (!!e.tags && (!(!this.props.data.currentUser.payoutInvite || !this.props.data.currentUser.payoutInvite.isLegacy) || !e.tags.includes(pt.PayoutPlanTag.Legacy) && (e.tags.includes(pt.PayoutPlanTag.Standard) ? this.props.onboardEntity === pt.OnboardEntity.StandardPartner : e.tags.includes(pt.PayoutPlanTag.Premium) ? this.props.onboardEntity === pt.OnboardEntity.PremiumPartner : !!e.tags.includes(pt.PayoutPlanTag.Custom) && this.props.onboardEntity === pt.OnboardEntity.CustomPartner))))
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "skipAgreement", {
                        get: function() {
                            return this.props.onboardEntity === pt.OnboardEntity.ExtensionsDeveloper || this.props.onboardEntity === pt.OnboardEntity.CustomPartner || this.isPartnerRedo
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "requiresParentConsent", {
                        get: function() {
                            if (!this.props.workflow.registration) return !1;
                            var e = this.props.workflow.registration.birthdate;
                            return Object(Wn.differenceInYears)(new Date, e) < 18
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
                Jn = Object(E.compose)(Object(f.a)(Kn, {
                    name: "data",
                    options: function(e) {
                        return {
                            variables: {
                                withAgreement: e.onboardEntity === pt.OnboardEntity.StandardPartner || e.onboardEntity === pt.OnboardEntity.PremiumPartner
                            }
                        }
                    }
                }), Object(f.a)(zn, {
                    name: "acceptProgramAgreement"
                }))(Zn),
                ea = n("+ZoN"),
                ta = Object(f.a)(ea)(function(e) {
                    if (e.data.loading) return null;
                    if (e.status === Fn.Completed) return null;
                    var t;
                    if (e.status === Fn.UnderReview) switch (e.onboardEntity) {
                        case pt.OnboardEntity.ExtensionsDeveloper:
                            t = i.createElement(m.V, null, Object(g.d)("Your financial information is currently under review. This process usually takes a few minutes.", "PayoutInfoBrick"));
                            break;
                        case pt.OnboardEntity.Affiliate:
                        case pt.OnboardEntity.StandardPartner:
                        case pt.OnboardEntity.PremiumPartner:
                        case pt.OnboardEntity.CustomPartner:
                            t = i.createElement(m.V, null, Object(g.d)("Your payout information is currently under review. This typically only takes a few minutes.", "PayoutInfoBrick"))
                    } else if (e.status === Fn.NotStarted) {
                        var n = !!(e.data && e.data.currentUser && e.data.currentUser.roles && e.data.currentUser.roles.isPartner && e.data.currentUser.roles.isExtensionsDeveloper);
                        t = i.createElement(i.Fragment, null, i.createElement(m.Va, {
                            margin: {
                                bottom: 1
                            }
                        }, i.createElement(m.V, null, Object(g.d)("Here you choose how you want to be paid. You must accrue at least $100 in revenue before you are eligible for a payout", "PayoutInfoBrick"))), i.createElement(m.Va, {
                            margin: {
                                bottom: 1
                            }
                        }, i.createElement(m.V, null, Object(g.d)("Choose Hold Payouts to have us hold your money until you request a payout; otherwise, you will be paid automatically.", "PayoutInfoBrick"))), e.onboardEntity === pt.OnboardEntity.Affiliate && !n && i.createElement(m.V, null, Object(g.d)("Twitch uses a third party to process your payouts and the processor charges a transaction fee each time you get paid. The fees vary based on the payout method. See the fees <x:link>here.</x:link>", {
                            "x:link": function(e) {
                                return i.createElement(m.T, {
                                    to: "https://help.twitch.tv/customer/portal/articles/2785925-affiliate-onboarding-guide#fees",
                                    targetBlank: !0
                                }, e)
                            }
                        }, "PayoutInfoBrick")))
                    }
                    return i.createElement(m.xb, {
                        borderMarked: !0,
                        padding: 2,
                        margin: {
                            bottom: 2
                        },
                        elevation: 1
                    }, t)
                }),
                na = function(e) {
                    var t;
                    switch (e.onboardEntity) {
                        case pt.OnboardEntity.Affiliate:
                            t = "https://help.twitch.tv/customer/portal/articles/2785925-affiliate-onboarding-guide";
                            break;
                        case pt.OnboardEntity.ExtensionsDeveloper:
                            t = "https://dev.twitch.tv/docs/extensions/onboarding";
                            break;
                        case pt.OnboardEntity.StandardPartner:
                        case pt.OnboardEntity.PremiumPartner:
                        case pt.OnboardEntity.CustomPartner:
                            t = "https://help.twitch.tv/customer/portal/articles/2853658-partner-onboarding-guide";
                            break;
                        default:
                            return null
                    }
                    return i.createElement(m.V, {
                        type: m.Nb.P
                    }, Object(g.d)("Need Help? <x:link>See our detailed onboarding guide.</x:link>", {
                        "x:link": function(e) {
                            return i.createElement(m.T, {
                                to: t,
                                targetBlank: !0
                            }, e)
                        }
                    }, "OnboardingGuideLink"))
                },
                aa = function(e) {
                    var t;
                    return e.onboardEntity === pt.OnboardEntity.ExtensionsDeveloper ? (e.status === Fn.NotStarted && (t = i.createElement(m.V, null, Object(g.d)("Click the button below to submit your financial information.", "PayoutInfoText"))), e.status === Fn.UnderReview && (t = i.createElement(m.V, null, Object(g.d)("You can change your financial information if you wish to modify any previously submitted information. You may want to do this if your financial information has been under review for more than 48 hours.", "PayoutInfoText"))), e.status === Fn.Completed && (t = i.createElement(i.Fragment, null, i.createElement(m.Va, {
                        margin: {
                            bottom: 1
                        }
                    }, i.createElement(m.V, null, Object(g.d)("Your financial information was successfully validated.", "PayoutInfoText"))), i.createElement(m.V, null, Object(g.d)("Click the button below if you wish to modify or correct any previously submitted financial information. Please note that this will erase your existing financial information and you will need to fully complete the form again.", "PayoutInfoText"))))) : (e.status === Fn.NotStarted && (t = i.createElement(m.V, null, Object(g.d)("Click the button below to submit your payout method.", "PayoutInfoText"))), e.status === Fn.UnderReview && (t = i.createElement(m.V, null, Object(g.d)("You can change your payout method if you wish to modify any previously submitted information. You may want to do this if your payout information has been under review for more than 48 hours.", "PayoutInfoText"))), e.status === Fn.Completed && (t = i.createElement(i.Fragment, null, i.createElement(m.Va, {
                        margin: {
                            bottom: 1
                        }
                    }, i.createElement(m.V, null, Object(g.d)("Your payout information was successfully validated.", "PayoutInfoText"))), i.createElement(m.V, null, Object(g.d)("Click the button below if you wish to modify or correct any previously submitted payout information. Please note that this will erase your existing payout information and you will need to fully complete the form again.", "PayoutInfoText"))))), i.createElement(i.Fragment, null, i.createElement(m.Va, {
                        margin: {
                            bottom: 2
                        }
                    }, t), e.status !== Fn.Completed && i.createElement(m.Va, {
                        margin: {
                            bottom: 2
                        }
                    }, i.createElement(na, {
                        onboardEntity: e.onboardEntity
                    })))
                },
                ra = n("cZKs"),
                ia = n("+GjP"),
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
                    return r.__extends(t, e), t.prototype.render = function() {
                        var e = this;
                        return i.createElement(m.Va, {
                            className: "tipalti-iframe--container"
                        }, !this.state.tipaltiIframeLoaded && i.createElement(m.Xa, {
                            fillContent: !0
                        }), i.createElement(m.Va, {
                            "data-test-selector": "tipalti-iframe__iframe-container",
                            fullHeight: !0,
                            display: this.state.tipaltiIframeLoaded ? m.W.Block : m.W.Hide
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
                    return r.__extends(t, e), t.prototype.render = function() {
                        return this.tipaltiURL ? i.createElement(m.xb, {
                            className: "payout-method-modal__container",
                            background: m.r.Base,
                            padding: 2
                        }, i.createElement(oa, {
                            tipaltiURL: this.tipaltiURL
                        })) : this.props.data.error ? i.createElement(m.xb, {
                            className: "payout-method-modal__container",
                            background: m.r.Base,
                            padding: 5
                        }, i.createElement(h.a, {
                            message: Object(g.d)("Oops, something went wrong.", "PayoutMethodModal")
                        })) : i.createElement(m.xb, {
                            className: "payout-method-modal__container",
                            background: m.r.Base,
                            padding: 5
                        }, i.createElement(m.Xa, {
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
                da = Object(E.compose)(Object(f.a)(sa, {
                    options: function() {
                        return {
                            variables: {
                                redirectURL: Object(ia.e)(window.location.href, {
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
                    return r.__extends(t, e), t.prototype.render = function() {
                        return i.createElement(m.Va, null, i.createElement(da, null), i.createElement(ra.a, {
                            closeOnBackdropClick: !0
                        }))
                    }, t
                }(i.Component);
            ! function(e) {
                e[e.NotStarted = 0] = "NotStarted", e[e.UnderReview = 1] = "UnderReview", e[e.Completed = 2] = "Completed"
            }(Fn || (Fn = {}));
            var ua = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.handleContinueClick = function() {
                        var e = t.isCustomPartnerOnboarding ? pt.OnboardStep.Review : pt.OnboardStep.Summary;
                        t.props.updateStepDisplayed(e)
                    }, t
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    return i.createElement(w.a, null, i.createElement(Hn, {
                        title: Object(g.d)("Payout Method", "PayoutOnboardingPayoutMethod"),
                        statusText: this.payoutStatusText,
                        statusType: this.payoutStatusType,
                        borderTop: !0
                    }), i.createElement(m.xb, {
                        borderTop: !0,
                        borderBottom: !0,
                        padding: 2
                    }, i.createElement(ta, {
                        onboardEntity: this.props.onboardEntity,
                        status: this.payoutMethodStatus
                    }), i.createElement(aa, {
                        onboardEntity: this.props.onboardEntity,
                        status: this.payoutMethodStatus
                    }), i.createElement(m.z, {
                        onClick: this.props.showPayoutMethodModal,
                        type: this.payoutMethodStatus === Fn.NotStarted ? m.F.Default : m.F.Hollow
                    }, this.payoutMethodButtonText)), i.createElement(m.xb, {
                        padding: 2,
                        background: m.r.Alt2
                    }, i.createElement(m.z, {
                        onClick: this.handleContinueClick,
                        disabled: this.continueButtonDisabled
                    }, this.isCustomPartnerOnboarding ? Object(g.d)("Continue", "PayoutOnboardingPayoutMethod") : Object(g.d)("Done", "PayoutOnboardingPayoutMethod"))))
                }, Object.defineProperty(t.prototype, "isExtensionsDeveloperOnboarding", {
                    get: function() {
                        return this.props.onboardEntity === pt.OnboardEntity.ExtensionsDeveloper
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "isCustomPartnerOnboarding", {
                    get: function() {
                        return this.props.onboardEntity === pt.OnboardEntity.CustomPartner
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "payoutMethodStatus", {
                    get: function() {
                        switch (this.props.workflow.currentStep) {
                            case pt.WorkflowState.PAYOUT_METHOD_PENDING:
                                return Fn.UnderReview;
                            case pt.WorkflowState.COMPLETED:
                            case pt.WorkflowState.REVIEW_PENDING:
                                return Fn.Completed;
                            default:
                                return Fn.NotStarted
                        }
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "payoutStatusText", {
                    get: function() {
                        switch (this.payoutMethodStatus) {
                            case Fn.UnderReview:
                                return Object(g.d)("Under Review", "PayoutOnboardingPayoutMethod");
                            case Fn.Completed:
                                return Object(g.d)("Completed", "PayoutOnboardingPayoutMethod");
                            default:
                                return Object(g.d)("Not Started", "PayoutOnboardingPayoutMethod")
                        }
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "payoutStatusType", {
                    get: function() {
                        switch (this.payoutMethodStatus) {
                            case Fn.UnderReview:
                                return m.bb.Prime;
                            case Fn.Completed:
                                return m.bb.Success;
                            default:
                                return
                        }
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "payoutMethodButtonText", {
                    get: function() {
                        return this.isExtensionsDeveloperOnboarding ? this.payoutMethodStatus === Fn.NotStarted ? Object(g.d)("Set Financial Information", "PayoutOnboardingPayoutMethod") : Object(g.d)("Change Financial Information", "PayoutOnboardingPayoutMethod") : this.payoutMethodStatus === Fn.NotStarted ? Object(g.d)("Set Payout Method", "PayoutOnboardingPayoutMethod") : Object(g.d)("Change Payout Method", "PayoutOnboardingPayoutMethod")
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "continueButtonDisabled", {
                    get: function() {
                        var e = this.props.workflow.currentStep;
                        return this.isCustomPartnerOnboarding ? e !== pt.WorkflowState.REVIEW_PENDING : e === pt.WorkflowState.PAYOUT_METHOD_NOT_STARTED
                    },
                    enumerable: !0,
                    configurable: !0
                }), t
            }(i.Component);
            var ma, pa = Object(E.compose)(Object(Ze.connect)(null, function(e) {
                    return Object(E.bindActionCreators)({
                        showPayoutMethodModal: function() {
                            return Object(Je.d)(ca, null)
                        }
                    }, e)
                }))(ua),
                ga = /^[\s\da-zA-Z&\-,‘'\/#\.%]*$/,
                ha = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
                ba = function() {
                    return Object(g.d)("Only the English alphabet (non-accented Latin characters), numbers, and these special characters & - , ‘ / # . % are accepted.", "PayoutOnboardingRegistration")
                },
                fa = function() {
                    return Object(g.d)("Must provide a valid email address.", "PayoutOnboardingRegistration")
                },
                va = function() {
                    return Object(g.d)("optional", "PayoutOnboardingRegistration")
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
                return r.__extends(t, e), Object.defineProperty(t.prototype, "invalidFormatErrorMessage", {
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
                    return i.createElement(m.Va, {
                        padding: 2
                    }, i.createElement(m.Va, {
                        margin: {
                            bottom: 2
                        }
                    }, i.createElement(m.Ca, {
                        label: Object(g.d)("Channel Name", "ContactInfo")
                    }, i.createElement(m.Pa, {
                        type: m.Ra.Text,
                        value: this.props.channelName,
                        disabled: !0
                    }))), i.createElement(m.Va, {
                        margin: {
                            bottom: 2
                        }
                    }, i.createElement(m.Ca, {
                        label: Object(g.d)("First Name", "ContactInfo"),
                        error: !ga.test(this.state.firstName),
                        errorMessage: this.invalidFormatErrorMessage,
                        "data-test-selector": ma.FIRST_NAME
                    }, i.createElement(m.Pa, {
                        autoFocus: !0,
                        type: m.Ra.Text,
                        value: this.state.firstName,
                        onChange: this.updateFirstName,
                        error: !ga.test(this.state.firstName)
                    }))), i.createElement(m.Va, {
                        margin: {
                            bottom: 2
                        }
                    }, i.createElement(m.Ca, {
                        label: Object(g.d)("Middle Name", "ContactInfo"),
                        labelOptional: this.optionalText,
                        error: !ga.test(this.state.middleName),
                        errorMessage: this.invalidFormatErrorMessage,
                        "data-test-selector": ma.MIDDLE_NAME
                    }, i.createElement(m.Pa, {
                        type: m.Ra.Text,
                        value: this.state.middleName,
                        onChange: this.updateMiddleName,
                        error: !ga.test(this.state.middleName)
                    }))), i.createElement(m.Va, {
                        margin: {
                            bottom: 2
                        }
                    }, i.createElement(m.Ca, {
                        label: Object(g.d)("Last Name", "ContactInfo"),
                        hint: Object(g.d)("Please type your full legal name. This must be the name shown on your income tax return used to report income.", "ContactInfo"),
                        error: !ga.test(this.state.lastName),
                        errorMessage: this.invalidFormatErrorMessage,
                        "data-test-selector": ma.LAST_NAME
                    }, i.createElement(m.Pa, {
                        type: m.Ra.Text,
                        value: this.state.lastName,
                        onChange: this.updateLastName,
                        error: !ga.test(this.state.lastName)
                    }))), i.createElement(m.Va, {
                        margin: {
                            bottom: 2
                        }
                    }, i.createElement(Ja, {
                        onMonthChange: this.props.onMonthChange,
                        onDayChange: this.props.onDayChange,
                        onYearChange: this.props.onYearChange
                    })), i.createElement(m.Va, {
                        margin: {
                            bottom: 2
                        }
                    }, i.createElement(m.Ca, {
                        label: Object(g.d)("Email", "ContactInfo"),
                        hint: Object(g.d)("We will use this email to send you important tax documentation and payout information.", "ContactInfo"),
                        error: this.showEmailError,
                        errorMessage: this.invalidEmailErrorMessage,
                        "data-test-selector": ma.EMAIL
                    }, i.createElement(m.Pa, {
                        type: m.Ra.Email,
                        value: this.state.email,
                        onChange: this.updateEmail,
                        onFocus: this.onEmailFocus,
                        onBlur: this.onEmailBlur,
                        error: this.showEmailError
                    }))), i.createElement(m.Va, {
                        margin: {
                            bottom: 2
                        }
                    }, i.createElement(m.Ca, {
                        label: Object(g.d)("Confirm Email", "ContactInfo"),
                        error: this.showConfirmEmailError,
                        errorMessage: Object(g.d)("Email addresses must match.", "ContactInfo"),
                        "data-test-selector": ma.CONFIRM_EMAIL
                    }, i.createElement(m.Pa, {
                        type: m.Ra.Email,
                        value: this.state.confirmEmail,
                        onChange: this.updateConfirmEmail,
                        onFocus: this.onConfirmEmailFocus,
                        onBlur: this.onConfirmEmailBlur,
                        error: this.showConfirmEmailError
                    }))), i.createElement(m.Va, null, i.createElement(m.Ca, {
                        label: Object(g.d)("Company Legal Name", "ContactInfo"),
                        labelOptional: this.optionalText,
                        error: !ga.test(this.state.companyName),
                        errorMessage: this.invalidFormatErrorMessage,
                        "data-test-selector": ma.COMPANY_LEGAL_NAME
                    }, i.createElement(m.Pa, {
                        type: m.Ra.Text,
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
                return r.__extends(t, e), t.prototype.componentWillUnmount = function() {
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
                    return i.createElement(m.Va, {
                        padding: 2
                    }, i.createElement(m.Va, {
                        margin: {
                            bottom: 2
                        }
                    }, i.createElement(m.Ca, {
                        label: Object(g.d)("Parent or Legal Guardian Name", "ParentInfo"),
                        error: !ga.test(this.state.parentName),
                        errorMessage: this.invalidFormatErrorMessage,
                        "data-test-selector": Ea.PARENT_NAME
                    }, i.createElement(m.Pa, {
                        type: m.Ra.Text,
                        value: this.state.parentName,
                        onChange: this.updateParentName,
                        error: !ga.test(this.state.parentName)
                    }))), i.createElement(m.Va, null, i.createElement(m.Ca, {
                        label: Object(g.d)("Parent or Legal Guardian Email", "ParentInfo"),
                        hint: Object(g.d)("Individuals under the age of 18 must provide parent or legal guardian information.", "ParentInfo"),
                        error: !!this.state.parentEmail && !ha.test(this.state.parentEmail),
                        errorMessage: this.invalidEmailErrorMessage,
                        "data-test-selector": Ea.PARENT_EMAIL
                    }, i.createElement(m.Pa, {
                        type: m.Ra.Email,
                        value: this.state.parentEmail,
                        onChange: this.updateParentEmail,
                        error: !!this.state.parentEmail && !ha.test(this.state.parentEmail)
                    }))))
                }, t
            }(i.Component);

            function ka(e) {
                switch (e.toUpperCase()) {
                    case "AB":
                        return Object(g.d)("Alberta", "format-canada-state");
                    case "BC":
                        return Object(g.d)("British Columbia", "format-canada-state");
                    case "MB":
                        return Object(g.d)("Manitoba", "format-canada-state");
                    case "NB":
                        return Object(g.d)("New Brunswick", "format-canada-state");
                    case "NL":
                        return Object(g.d)("Newfoundland and Labrador", "format-canada-state");
                    case "NT":
                        return Object(g.d)("Northwest Territories", "format-canada-state");
                    case "NS":
                        return Object(g.d)("Nova Scotia", "format-canada-state");
                    case "NU":
                        return Object(g.d)("Nunavut", "format-canada-state");
                    case "ON":
                        return Object(g.d)("Ontario", "format-canada-state");
                    case "PE":
                        return Object(g.d)("Prince Edward Island", "format-canada-state");
                    case "QC":
                        return Object(g.d)("Quebec", "format-canada-state");
                    case "SK":
                        return Object(g.d)("Saskatchewan", "format-canada-state");
                    case "YT":
                        return Object(g.d)("Yukon", "format-canada-state");
                    default:
                        return e
                }
            }
            var Na = ["AB", "BC", "MB", "NB", "NL", "NT", "NS", "NU", "ON", "PE", "QC", "SK", "YT"],
                Oa = n("Jgup");

            function Ta(e) {
                switch (e.toUpperCase()) {
                    case "AL":
                        return Object(g.d)("Alabama", "format-usa-state");
                    case "AK":
                        return Object(g.d)("Alaska", "format-usa-state");
                    case "AZ":
                        return Object(g.d)("Arizona", "format-usa-state");
                    case "AR":
                        return Object(g.d)("Arkansas", "format-usa-state");
                    case "AA":
                        return Object(g.d)("Armed Forces Americas", "format-usa-state");
                    case "AE":
                        return Object(g.d)("Armed Forces Europe/Middle East/Canada", "format-usa-state");
                    case "AP":
                        return Object(g.d)("Armed Forces Pacific", "format-usa-state");
                    case "CA":
                        return Object(g.d)("California", "format-usa-state");
                    case "CO":
                        return Object(g.d)("Colorado", "format-usa-state");
                    case "CT":
                        return Object(g.d)("Connecticut", "format-usa-state");
                    case "DE":
                        return Object(g.d)("Delaware", "format-usa-state");
                    case "DC":
                        return Object(g.d)("District of Columbia", "format-usa-state");
                    case "FL":
                        return Object(g.d)("Florida", "format-usa-state");
                    case "GA":
                        return Object(g.d)("Georgia", "format-usa-state");
                    case "HI":
                        return Object(g.d)("Hawaii", "format-usa-state");
                    case "ID":
                        return Object(g.d)("Idaho", "format-usa-state");
                    case "IL":
                        return Object(g.d)("Illinois", "format-usa-state");
                    case "IN":
                        return Object(g.d)("Indiana", "format-usa-state");
                    case "IA":
                        return Object(g.d)("Iowa", "format-usa-state");
                    case "KS":
                        return Object(g.d)("Kansas", "format-usa-state");
                    case "KY":
                        return Object(g.d)("Kentucky", "format-usa-state");
                    case "LA":
                        return Object(g.d)("Louisiana", "format-usa-state");
                    case "ME":
                        return Object(g.d)("Maine", "format-usa-state");
                    case "MD":
                        return Object(g.d)("Maryland", "format-usa-state");
                    case "MA":
                        return Object(g.d)("Massachusetts", "format-usa-state");
                    case "MI":
                        return Object(g.d)("Michigan", "format-usa-state");
                    case "MN":
                        return Object(g.d)("Minnesota", "format-usa-state");
                    case "MS":
                        return Object(g.d)("Mississippi", "format-usa-state");
                    case "MO":
                        return Object(g.d)("Missouri", "format-usa-state");
                    case "MT":
                        return Object(g.d)("Montana", "format-usa-state");
                    case "NE":
                        return Object(g.d)("Nebraska", "format-usa-state");
                    case "NV":
                        return Object(g.d)("Nevada", "format-usa-state");
                    case "NH":
                        return Object(g.d)("New Hampshire", "format-usa-state");
                    case "NJ":
                        return Object(g.d)("New Jersey", "format-usa-state");
                    case "NM":
                        return Object(g.d)("New Mexico", "format-usa-state");
                    case "NY":
                        return Object(g.d)("New York", "format-usa-state");
                    case "NC":
                        return Object(g.d)("North Carolina", "format-usa-state");
                    case "ND":
                        return Object(g.d)("North Dakota", "format-usa-state");
                    case "OH":
                        return Object(g.d)("Ohio", "format-usa-state");
                    case "OK":
                        return Object(g.d)("Oklahoma", "format-usa-state");
                    case "OR":
                        return Object(g.d)("Oregon", "format-usa-state");
                    case "PA":
                        return Object(g.d)("Pennsylvania", "format-usa-state");
                    case "RI":
                        return Object(g.d)("Rhode Island", "format-usa-state");
                    case "SC":
                        return Object(g.d)("South Carolina", "format-usa-state");
                    case "SD":
                        return Object(g.d)("South Dakota", "format-usa-state");
                    case "TN":
                        return Object(g.d)("Tennessee", "format-usa-state");
                    case "TX":
                        return Object(g.d)("Texas", "format-usa-state");
                    case "UT":
                        return Object(g.d)("Utah", "format-usa-state");
                    case "VT":
                        return Object(g.d)("Vermont", "format-usa-state");
                    case "VA":
                        return Object(g.d)("Virginia", "format-usa-state");
                    case "WA":
                        return Object(g.d)("Washington", "format-usa-state");
                    case "WV":
                        return Object(g.d)("West Virginia", "format-usa-state");
                    case "WI":
                        return Object(g.d)("Wisconsin", "format-usa-state");
                    case "WY":
                        return Object(g.d)("Wyoming", "format-usa-state");
                    default:
                        return e
                }
            }
            var Ca, Pa = ["AL", "AK", "AZ", "AR", "AA", "AE", "AP", "CA", "CO", "CT", "DE", "DC", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"],
                Aa = ["A1", "A2", "AP", "CU", "EU", "IR", "KP", "MM", "SD", "SS", "SY", "TL"];
            ! function(e) {
                e.COUNTRY = "permanent-address__country", e.STREET_ADDRESS = "permanent-address__street-address", e.STREET_ADDRESS_2 = "permanent-address__street-address-2", e.CITY = "permanent-address__city", e.STATE = "permanent-address__state", e.POSTAL = "permanent-address__postal"
            }(Ca || (Ca = {}));
            var _a, wa = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            country: "",
                            streetAddress: "",
                            streetAddress2: "",
                            city: "",
                            state: "",
                            postal: ""
                        }, t.countrySelections = Oa.a.map(function(e) {
                            return Aa.includes(e) ? null : i.createElement("option", {
                                value: e,
                                key: "countryCode-" + e
                            }, Object(Oa.b)(e))
                        }), t.usaStateSelections = Pa.map(function(e) {
                            return i.createElement("option", {
                                value: e,
                                key: "usaStateCode-" + e
                            }, Ta(e))
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
                    return r.__extends(t, e), Object.defineProperty(t.prototype, "invalidFormatErrorMessage", {
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
                        return i.createElement(i.Fragment, null, i.createElement(m.Va, {
                            padding: {
                                x: 2,
                                top: 2,
                                bottom: 0
                            }
                        }, i.createElement(m.V, {
                            fontSize: m.Aa.Size6
                        }, Object(g.d)("Your permanent address is your primary residential address. It is not your P.O. Box or mailing address. If you are a college student studying in another state, but still have a permanent address in your home state (such as your parents' house), then your home state is your principal residence address. If you are registering on behalf of a corporation, please input the primary headquarters address.", "PermanentAddress"))), i.createElement(m.Va, {
                            className: "payout-onboarding-registration__form-container",
                            padding: 2
                        }, i.createElement(m.Va, {
                            margin: {
                                bottom: 2
                            }
                        }, i.createElement(m.Ca, {
                            label: Object(g.d)("Country", "PermanentAddress")
                        }, i.createElement(m.sb, {
                            defaultValue: "",
                            onChange: this.handleCountryChange,
                            "data-test-selector": Ca.COUNTRY
                        }, i.createElement("option", {
                            value: "",
                            disabled: !0
                        }), this.countrySelections))), i.createElement(m.Va, {
                            margin: {
                                bottom: 2
                            }
                        }, i.createElement(m.Ca, {
                            label: Object(g.d)("Street Address", "PermanentAddress"),
                            error: !ga.test(this.state.streetAddress),
                            errorMessage: this.invalidFormatErrorMessage,
                            "data-test-selector": Ca.STREET_ADDRESS
                        }, i.createElement(m.Pa, {
                            type: m.Ra.Text,
                            value: this.state.streetAddress,
                            onChange: this.handleStreetAddressChange,
                            error: !ga.test(this.state.streetAddress)
                        }))), i.createElement(m.Va, {
                            margin: {
                                bottom: 2
                            }
                        }, i.createElement(m.Ca, {
                            label: Object(g.d)("Street Address 2", "PermanentAddress"),
                            labelOptional: this.optionalText,
                            error: !ga.test(this.state.streetAddress2),
                            errorMessage: this.invalidFormatErrorMessage,
                            "data-test-selector": Ca.STREET_ADDRESS_2
                        }, i.createElement(m.Pa, {
                            type: m.Ra.Text,
                            value: this.state.streetAddress2,
                            onChange: this.handleStreetAddress2Change,
                            error: !ga.test(this.state.streetAddress2)
                        }))), i.createElement(m.Va, {
                            margin: {
                                bottom: 2
                            }
                        }, i.createElement(m.Ca, {
                            label: Object(g.d)("City or Town", "PermanentAddress"),
                            error: !ga.test(this.state.city),
                            errorMessage: this.invalidFormatErrorMessage,
                            "data-test-selector": Ca.CITY
                        }, i.createElement(m.Pa, {
                            type: m.Ra.Text,
                            value: this.state.city,
                            onChange: this.handleCityChange,
                            error: !ga.test(this.state.city)
                        }))), i.createElement(m.Va, {
                            margin: {
                                bottom: 2
                            }
                        }, i.createElement(m.Ca, {
                            label: Object(g.d)("State/Province", "PermanentAddress"),
                            labelOptional: "US" !== this.state.country && "CA" !== this.state.country ? this.optionalText : void 0,
                            error: !ga.test(this.state.state),
                            errorMessage: this.invalidFormatErrorMessage,
                            "data-test-selector": Ca.STATE
                        }, "US" === this.state.country && i.createElement(m.sb, {
                            onChange: this.handleStateSelectionChange
                        }, this.usaStateSelections), "CA" === this.state.country && i.createElement(m.sb, {
                            onChange: this.handleStateSelectionChange
                        }, this.canadaStateSelections), "US" !== this.state.country && "CA" !== this.state.country && i.createElement(m.Pa, {
                            type: m.Ra.Text,
                            value: this.state.state,
                            onChange: this.handleStateInputChange,
                            error: !ga.test(this.state.state)
                        }))), i.createElement(m.Va, null, i.createElement(m.Ca, {
                            label: Object(g.d)("Zip Code/Postal Code", "PermanentAddress"),
                            labelOptional: "US" !== this.state.country ? this.optionalText : void 0,
                            error: !ga.test(this.state.postal),
                            errorMessage: this.invalidFormatErrorMessage,
                            "data-test-selector": Ca.POSTAL
                        }, i.createElement(m.Pa, {
                            type: m.Ra.Text,
                            value: this.state.postal,
                            onChange: this.handlePostalChange,
                            onBlur: this.formatUniquePostalCodes,
                            error: !ga.test(this.state.postal)
                        })))))
                    }, t
                }(i.Component),
                Ia = function() {
                    return Object(g.d)("Please fill them out using the following guidelines: <x:link>Amazon Tax Information Interview Guidelines</x:link>", {
                        "x:link": function(e) {
                            return i.createElement(m.T, {
                                to: "https://help.twitch.tv/customer/portal/articles/2083680",
                                targetBlank: !0
                            }, e)
                        }
                    }, "RegistrationInfoBrick")
                },
                xa = function() {
                    return i.createElement(i.Fragment, null, i.createElement(m.Va, {
                        margin: {
                            bottom: 1
                        }
                    }, i.createElement(m.V, {
                        fontSize: m.Aa.Size6
                    }, Object(g.d)("Financial information is required to validate your identity. Further, providing this information enables you to participate with any monetization features that may become available.", "RegistrationInfoBrick"))), i.createElement(m.Va, {
                        margin: {
                            bottom: 1
                        }
                    }, i.createElement(m.V, {
                        fontSize: m.Aa.Size6
                    }, Object(g.d)("Twitch is a subsidiary of Amazon and will use some Amazon tools to register and approve your information for Extensions development.", "RegistrationInfoBrick"))), i.createElement(m.Va, {
                        margin: {
                            bottom: 1
                        }
                    }, i.createElement(m.V, {
                        fontSize: m.Aa.Size6
                    }, Ia())), i.createElement(m.Va, {
                        margin: {
                            bottom: 1
                        }
                    }, i.createElement(m.V, {
                        fontSize: m.Aa.Size6
                    }, Object(g.d)("If you are registering on behalf of a company, please fill in the company's information. If you are an individual, please use your personal information.", "RegistrationInfoBrick"))), i.createElement(m.Va, {
                        margin: {
                            bottom: 1
                        }
                    }, i.createElement(m.V, {
                        fontSize: m.Aa.Size6
                    }, Object(g.d)("The form must match your tax information exactly and any inconsistencies may cause delays in your registration approval.", "RegistrationInfoBrick"))), i.createElement(m.Va, null, i.createElement(m.V, {
                        fontSize: m.Aa.Size6
                    }, Object(g.d)("You will be able to edit this page later if your information changes.", "RegistrationInfoBrick"))))
                },
                Ra = function() {
                    return i.createElement(i.Fragment, null, i.createElement(m.Va, {
                        margin: {
                            bottom: 1
                        }
                    }, i.createElement(m.V, {
                        fontSize: m.Aa.Size6
                    }, Object(g.d)("Twitch is a subsidiary of Amazon, and will use some Amazon tools to help you get paid, including the forms on this page.", "RegistrationInfoBrick"))), i.createElement(m.Va, {
                        margin: {
                            bottom: 1
                        }
                    }, i.createElement(m.V, {
                        fontSize: m.Aa.Size6
                    }, Ia())), i.createElement(m.V, {
                        fontSize: m.Aa.Size6
                    }, Object(g.d)("This form must match your tax information exactly, and any inconsistencies may cause delays in your Payout Registration approval. Don't worry, you will still be able to edit this page later on if your information changes.", "RegistrationInfoBrick")))
                },
                Da = function(e) {
                    return i.createElement(i.Fragment, null, e.onboardEntity === pt.OnboardEntity.ExtensionsDeveloper ? i.createElement(xa, null) : i.createElement(Ra, null))
                };
            ! function(e) {
                e.MONTH = "select-birthdate__month", e.YEAR = "select-birthdate__year", e.DAY = "select-birthdate__day"
            }(_a || (_a = {}));
            for (var Fa = [], ja = (new Date).getFullYear(), Va = ja; Va > ja - 100; Va--) Fa.push(i.createElement("option", {
                value: Va,
                key: "year-" + Va
            }, Va));
            var La, Ua, Ma, Ba, Wa, za, Ya, Ga, qa, Ha, Qa, Xa, $a, Ka, Za, Ja = function(e) {
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
                                r = n.day,
                                i = n.year;
                            if (void 0 === a || void 0 === r || void 0 === i) return !1;
                            var o = new Date(i, a, r);
                            return Object(Wn.differenceInYears)(new Date, o) < e
                        }, t
                    }
                    return r.__extends(t, e), Object.defineProperty(t.prototype, "daySelections", {
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
                        return i.createElement(m.Ca, {
                            label: Object(g.d)("Date of Birth", "SelectBirthdate"),
                            hint: Object(g.d)("If you are registering on behalf of a company, please use your personal date of birth.", "SelectBirthdate"),
                            error: this.isUserYoungerThan(13),
                            errorMessage: Object(g.d)("You must be 13 or older to continue.", "SelectBirthdate")
                        }, i.createElement(m.Ha, {
                            gutterSize: m.Ia.Small
                        }, i.createElement(m.P, {
                            cols: {
                                default: 4
                            }
                        }, i.createElement(m.sb, {
                            defaultValue: "",
                            onChange: this.handleMonthChange,
                            "data-test-selector": _a.MONTH
                        }, i.createElement("option", {
                            value: "",
                            disabled: !0
                        }, Object(g.d)("Month", "SelectBirthdate")), i.createElement("option", {
                            value: 0
                        }, Object(g.d)("January", "SelectBirthdate")), i.createElement("option", {
                            value: 1
                        }, Object(g.d)("February", "SelectBirthdate")), i.createElement("option", {
                            value: 2
                        }, Object(g.d)("March", "SelectBirthdate")), i.createElement("option", {
                            value: 3
                        }, Object(g.d)("April", "SelectBirthdate")), i.createElement("option", {
                            value: 4
                        }, Object(g.d)("May", "SelectBirthdate")), i.createElement("option", {
                            value: 5
                        }, Object(g.d)("June", "SelectBirthdate")), i.createElement("option", {
                            value: 6
                        }, Object(g.d)("July", "SelectBirthdate")), i.createElement("option", {
                            value: 7
                        }, Object(g.d)("August", "SelectBirthdate")), i.createElement("option", {
                            value: 8
                        }, Object(g.d)("September", "SelectBirthdate")), i.createElement("option", {
                            value: 9
                        }, Object(g.d)("October", "SelectBirthdate")), i.createElement("option", {
                            value: 10
                        }, Object(g.d)("November", "SelectBirthdate")), i.createElement("option", {
                            value: 11
                        }, Object(g.d)("December", "SelectBirthdate")))), i.createElement(m.P, {
                            cols: {
                                default: 4
                            }
                        }, i.createElement(m.sb, {
                            defaultValue: "",
                            onChange: this.handleDayChange,
                            "data-test-selector": _a.DAY
                        }, i.createElement("option", {
                            value: "",
                            disabled: !0
                        }, Object(g.d)("Day", "SelectBirthdate")), this.daySelections)), i.createElement(m.P, {
                            cols: {
                                default: 4
                            }
                        }, i.createElement(m.sb, {
                            defaultValue: "",
                            onChange: this.handleYearChange,
                            "data-test-selector": _a.YEAR
                        }, i.createElement("option", {
                            value: "",
                            disabled: !0
                        }, Object(g.d)("Year", "SelectBirthdate")), this.yearSelections))))
                    }, t
                }(i.Component),
                er = n("8HtN"),
                tr = (n("dxDy"), function(e) {
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
                            return Object(Wn.differenceInYears)(new Date, o) < e
                        }, t.handleContinueClick = function() {
                            t.setState({
                                submittingRegistration: !0
                            }), t.submitPayoutRegistration()
                        }, t.submitPayoutRegistration = function() {
                            return r.__awaiter(t, void 0, void 0, function() {
                                var e, t, n, a, i, o, s, l;
                                return r.__generator(this, function(d) {
                                    switch (d.label) {
                                        case 0:
                                            if (e = this.state, t = e.year, n = e.month, a = e.day, void 0 === n || void 0 === a || void 0 === t) return [2];
                                            i = new Date(t, n, a), o = r.__assign({}, Object(N.a)({
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
                                            }, this.props.updateContainerQuery(l), this.props.updateStepDisplayed(pt.OnboardStep.Agreement), [3, 4]);
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
                    return r.__extends(t, e), t.prototype.render = function() {
                        var e = i.createElement(m.z, {
                            "data-test-selector": "payout-onboarding-registration__continue-button",
                            disabled: !this.isRegistrationComplete || this.state.submittingRegistration,
                            state: this.state.submittingRegistration ? m.E.Loading : m.E.Default,
                            onClick: this.handleContinueClick
                        }, Object(g.d)("Continue", "PayoutOnboardingRegistration"));
                        return i.createElement(w.a, {
                            footer: e
                        }, i.createElement(_.a, null, i.createElement(Da, {
                            onboardEntity: this.props.onboardEntity
                        })), i.createElement(Hn, {
                            title: Object(g.d)("Contact Info", "PayoutOnboardingRegistration")
                        }), i.createElement(m.Va, {
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
                        })), i.createElement(Hn, {
                            title: Object(g.d)("Permanent Address", "PayoutOnboardingRegistration")
                        }), i.createElement(wa, {
                            onCountryChange: this.updateCountry,
                            onStreetAddressChange: this.updateStreetAddress,
                            onStreetAddress2Change: this.updateStreetAddress2,
                            onCityChange: this.updateCity,
                            onStateChange: this.updateState,
                            onPostalChange: this.updatePostal
                        }), this.isUserYoungerThan(18) && i.createElement(i.Fragment, null, i.createElement(Hn, {
                            title: Object(g.d)("Parent Info", "PayoutOnboardingRegistration")
                        }), i.createElement(m.Va, {
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
                nr = Object(E.compose)(Object(f.a)(er, {
                    name: "registerPayoutInformation"
                }))(tr),
                ar = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.handleContinueClick = function() {
                            t.props.updateStepDisplayed(pt.OnboardStep.Summary)
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        return i.createElement(w.a, null, i.createElement(Hn, {
                            title: Object(g.d)("Partnership Approval", "PayoutOnboardingReview"),
                            statusText: this.statusText,
                            statusType: this.statusType,
                            borderTop: !0
                        }), i.createElement(m.xb, {
                            borderTop: !0,
                            borderBottom: !0,
                            padding: 2
                        }, i.createElement(m.xb, {
                            borderMarked: !0,
                            padding: 2
                        }, this.inReview ? Object(g.d)("Your information is currently under review.", "PayoutOnboardingReview") : Object(g.d)("Your information has been validated by the Partnership Team.", "PayoutOnboardingReview"))), i.createElement(m.Va, {
                            padding: 2
                        }, i.createElement(m.z, {
                            onClick: this.handleContinueClick,
                            disabled: this.inReview
                        }, Object(g.d)("Continue", "PayoutOnboardingReview"))))
                    }, Object.defineProperty(t.prototype, "inReview", {
                        get: function() {
                            return this.props.workflow.currentStep === pt.WorkflowState.REVIEW_PENDING
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "statusText", {
                        get: function() {
                            return this.inReview ? Object(g.d)("Under Review", "PayoutOnboardingReview") : Object(g.d)("Completed", "PayoutOnboardingReview")
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "statusType", {
                        get: function() {
                            return this.inReview ? m.bb.Prime : m.bb.Success
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t
                }(i.Component),
                rr = function() {
                    return Object(g.d)("Partner Onboarding", "PayoutOnboardingContainer")
                },
                ir = function() {
                    return Object(g.d)("Manage or modify your payout information.", "PayoutOnboardingContainer")
                },
                or = function() {
                    return Object(g.d)("Payout Registration", "PayoutOnboardingContainer")
                },
                sr = function() {
                    return Object(g.d)("Begin your payout registration.", "PayoutOnboardingContainer")
                },
                lr = function() {
                    return Object(g.d)("Twitch Partner Agreement", "PayoutOnboardingContainer")
                },
                dr = function() {
                    return Object(g.d)("Agree to the Twitch Partner Agreement.", "PayoutOnboardingContainer")
                },
                cr = function() {
                    return Object(g.d)("Tax Interviews", "PayoutOnboardingContainer")
                },
                ur = function() {
                    return Object(g.d)("Submit your tax information. The two forms below are very similar, but the information is used for different situations, so both forms are required and should be filled out carefully.", "PayoutOnboardingContainer")
                },
                mr = function() {
                    return Object(g.d)("Payout Setup", "PayoutOnboardingContainer")
                },
                pr = function() {
                    return Object(g.d)("Choose your payout method.", "PayoutOnboardingContainer")
                },
                gr = ((La = {})[pt.OnboardStep.Summary] = {
                    title: (Ua = {}, Ua[pt.OnboardEntity.Affiliate] = function() {
                        return Object(g.d)("Affiliate Onboarding", "PayoutOnboardingContainer")
                    }, Ua[pt.OnboardEntity.ExtensionsDeveloper] = function() {
                        return Object(g.d)("Extensions Developer Onboarding", "PayoutOnboardingContainer")
                    }, Ua[pt.OnboardEntity.StandardPartner] = function() {
                        return rr()
                    }, Ua[pt.OnboardEntity.PremiumPartner] = function() {
                        return rr()
                    }, Ua[pt.OnboardEntity.CustomPartner] = function() {
                        return rr()
                    }, Ua),
                    description: (Ma = {}, Ma[pt.OnboardEntity.Affiliate] = function() {
                        return ir()
                    }, Ma[pt.OnboardEntity.ExtensionsDeveloper] = function() {
                        return Object(g.d)("Manage or modify your Extensions Developer Onboarding.", "PayoutOnboardingContainer")
                    }, Ma[pt.OnboardEntity.StandardPartner] = function() {
                        return ir()
                    }, Ma[pt.OnboardEntity.PremiumPartner] = function() {
                        return ir()
                    }, Ma[pt.OnboardEntity.CustomPartner] = function() {
                        return ir()
                    }, Ma)
                }, La[pt.OnboardStep.Registration] = {
                    title: (Ba = {}, Ba[pt.OnboardEntity.Affiliate] = function() {
                        return or()
                    }, Ba[pt.OnboardEntity.ExtensionsDeveloper] = function() {
                        return Object(g.d)("Extensions Developer Registration", "PayoutOnboardingContainer")
                    }, Ba[pt.OnboardEntity.StandardPartner] = function() {
                        return or()
                    }, Ba[pt.OnboardEntity.PremiumPartner] = function() {
                        return or()
                    }, Ba[pt.OnboardEntity.CustomPartner] = function() {
                        return or()
                    }, Ba),
                    description: (Wa = {}, Wa[pt.OnboardEntity.Affiliate] = function() {
                        return sr()
                    }, Wa[pt.OnboardEntity.ExtensionsDeveloper] = function() {
                        return Object(g.d)("Begin your Extensions Developer Registration.", "PayoutOnboardingContainer")
                    }, Wa[pt.OnboardEntity.StandardPartner] = function() {
                        return sr()
                    }, Wa[pt.OnboardEntity.PremiumPartner] = function() {
                        return sr()
                    }, Wa[pt.OnboardEntity.CustomPartner] = function() {
                        return sr()
                    }, Wa)
                }, La[pt.OnboardStep.Agreement] = {
                    title: (za = {}, za[pt.OnboardEntity.Affiliate] = function() {
                        return Object(g.d)("Twitch Affiliate Agreement", "PayoutOnboardingContainer")
                    }, za[pt.OnboardEntity.ExtensionsDeveloper] = function() {
                        return Object(g.d)("Twitch Extensions Developer Agreement", "PayoutOnboardingContainer")
                    }, za[pt.OnboardEntity.StandardPartner] = function() {
                        return lr()
                    }, za[pt.OnboardEntity.PremiumPartner] = function() {
                        return lr()
                    }, za[pt.OnboardEntity.CustomPartner] = function() {
                        return lr()
                    }, za),
                    description: (Ya = {}, Ya[pt.OnboardEntity.Affiliate] = function() {
                        return Object(g.d)("Agree to the Twitch Affiliate Agreement.", "PayoutOnboardingContainer")
                    }, Ya[pt.OnboardEntity.ExtensionsDeveloper] = function() {
                        return Object(g.d)("Agree to the Twitch Extensions Developer Agreement.", "PayoutOnboardingContainer")
                    }, Ya[pt.OnboardEntity.StandardPartner] = function() {
                        return dr()
                    }, Ya[pt.OnboardEntity.PremiumPartner] = function() {
                        return dr()
                    }, Ya[pt.OnboardEntity.CustomPartner] = function() {
                        return dr()
                    }, Ya)
                }, La[pt.OnboardStep.TaxInterview] = {
                    title: (Ga = {}, Ga[pt.OnboardEntity.Affiliate] = function() {
                        return cr()
                    }, Ga[pt.OnboardEntity.ExtensionsDeveloper] = function() {
                        return cr()
                    }, Ga[pt.OnboardEntity.StandardPartner] = function() {
                        return cr()
                    }, Ga[pt.OnboardEntity.PremiumPartner] = function() {
                        return cr()
                    }, Ga[pt.OnboardEntity.CustomPartner] = function() {
                        return cr()
                    }, Ga),
                    description: (qa = {}, qa[pt.OnboardEntity.Affiliate] = function() {
                        return ur()
                    }, qa[pt.OnboardEntity.ExtensionsDeveloper] = function() {
                        return ur()
                    }, qa[pt.OnboardEntity.StandardPartner] = function() {
                        return ur()
                    }, qa[pt.OnboardEntity.PremiumPartner] = function() {
                        return ur()
                    }, qa[pt.OnboardEntity.CustomPartner] = function() {
                        return ur()
                    }, qa)
                }, La[pt.OnboardStep.PayoutMethod] = {
                    title: (Ha = {}, Ha[pt.OnboardEntity.Affiliate] = function() {
                        return mr()
                    }, Ha[pt.OnboardEntity.ExtensionsDeveloper] = function() {
                        return Object(g.d)("Financial Information", "PayoutOnboardingContainer")
                    }, Ha[pt.OnboardEntity.StandardPartner] = function() {
                        return mr()
                    }, Ha[pt.OnboardEntity.PremiumPartner] = function() {
                        return mr()
                    }, Ha[pt.OnboardEntity.CustomPartner] = function() {
                        return mr()
                    }, Ha),
                    description: (Qa = {}, Qa[pt.OnboardEntity.Affiliate] = function() {
                        return pr()
                    }, Qa[pt.OnboardEntity.ExtensionsDeveloper] = function() {
                        return Object(g.d)("Submit your financial information.", "PayoutOnboardingContainer")
                    }, Qa[pt.OnboardEntity.StandardPartner] = function() {
                        return pr()
                    }, Qa[pt.OnboardEntity.PremiumPartner] = function() {
                        return pr()
                    }, Qa[pt.OnboardEntity.CustomPartner] = function() {
                        return pr()
                    }, Qa)
                }, La[pt.OnboardStep.Review] = {
                    title: (Xa = {}, Xa[pt.OnboardEntity.CustomPartner] = function() {
                        return Object(g.d)("Partnership Approval", "PayoutOnboardingContainer")
                    }, Xa),
                    description: ($a = {}, $a[pt.OnboardEntity.CustomPartner] = function() {
                        return Object(g.d)("The Partnership Team will validate your paperwork and activate your new agreement.", "PayoutOnboardingContainer")
                    }, $a)
                }, La),
                hr = function() {
                    return Object(g.d)("Continue", "InProgressInfo")
                },
                br = function(e) {
                    var t = e.onboardEntity === pt.OnboardEntity.ExtensionsDeveloper;
                    return i.createElement(m.Va, {
                        margin: {
                            bottom: 1
                        }
                    }, i.createElement(m.Na, {
                        margin: {
                            bottom: 1
                        }
                    }, i.createElement(m.V, {
                        type: m.Nb.P
                    }, t ? Object(g.d)("Your developer registration is currently in progress. Please click {buttonLabel} to pick up where you left off.", {
                        buttonLabel: hr()
                    }, "InProgressInfo") : Object(g.d)("Your payout setup is currently in progress. Please click {buttonLabel} to pick up where you left off.", {
                        buttonLabel: hr()
                    }, "InProgressInfo"))), e.startOverEnabled && i.createElement(i.Fragment, null, i.createElement(m.Na, {
                        margin: {
                            bottom: 1
                        }
                    }, i.createElement(m.V, {
                        type: m.Nb.P
                    }, Object(g.d)("If you would like to modify your information, please click {buttonLabel}.", {
                        buttonLabel: Object(g.d)("Start Over", "InProgressInfo")
                    }, "InProgressInfo"))), i.createElement(m.V, {
                        type: m.Nb.P
                    }, t ? Object(g.d)("NOTE: Starting over will lose any progress.", "InProgressInfo") : Object(g.d)("NOTE: If you choose Start Over you will delete any stored payout information on your account and we will hold any payouts until you have fully completed the form.", "InProgressInfo"))))
                },
                fr = function(e) {
                    return i.createElement(i.Fragment, null, i.createElement(m.Na, {
                        margin: {
                            bottom: 1
                        }
                    }, i.createElement(m.V, {
                        type: m.Nb.H4,
                        bold: !0
                    }, Object(g.d)("Setup Complete", "SetupCompleteInfo"))), e.onboardEntity === pt.OnboardEntity.ExtensionsDeveloper ? i.createElement(m.Na, {
                        margin: {
                            bottom: 1
                        }
                    }, i.createElement(m.V, {
                        type: m.Nb.P
                    }, Object(g.d)("You made it! You’re all set. Return to the <x:link>Developer Portal.</x:link>", {
                        "x:link": function(e) {
                            return i.createElement(m.T, {
                                to: "https://dev.twitch.tv/dashboard"
                            }, e)
                        }
                    }, "SetupCompleteInfo"))) : i.createElement(m.Na, {
                        margin: {
                            bottom: 1
                        }
                    }, i.createElement(m.V, {
                        type: m.Nb.P
                    }, Object(g.d)("You made it! You’re all set and no further action is needed.", "SetupCompleteInfo"))), i.createElement(m.Na, {
                        margin: {
                            bottom: 1
                        }
                    }, i.createElement(m.V, {
                        type: m.Nb.P
                    }, Object(g.d)("If you want to change your payout information, click {buttonLabel} to reset the form.", {
                        buttonLabel: Object(g.d)("Start Over", "SetupCompleteInfo")
                    }, "SetupCompleteInfo"))))
                };
            ! function(e) {
                e.START_OVER_BUTTON = "progress-brick__start-over-button", e.CONTINUE_BUTTON = "progress-brick__continue-button"
            }(Za || (Za = {}));
            var vr, Er = ((Ka = {})[pt.WorkflowState.AGREEMENT_NOT_STARTED] = pt.OnboardStep.Agreement, Ka[pt.WorkflowState.ROYALTY_TAX_INTERVIEW_NOT_STARTED] = pt.OnboardStep.TaxInterview, Ka[pt.WorkflowState.ROYALTY_TAX_INTERVIEW_PENDING] = pt.OnboardStep.TaxInterview, Ka[pt.WorkflowState.ROYALTY_TAX_INTERVIEW_ACTION_REQUIRED] = pt.OnboardStep.TaxInterview, Ka[pt.WorkflowState.ROYALTY_TAX_INTERVIEW_MISMATCH] = pt.OnboardStep.TaxInterview, Ka[pt.WorkflowState.ROYALTY_TAX_INTERVIEW_FAILED] = pt.OnboardStep.TaxInterview, Ka[pt.WorkflowState.SERVICE_TAX_INTERVIEW_NOT_STARTED] = pt.OnboardStep.TaxInterview, Ka[pt.WorkflowState.SERVICE_TAX_INTERVIEW_PENDING] = pt.OnboardStep.TaxInterview, Ka[pt.WorkflowState.SERVICE_TAX_INTERVIEW_ACTION_REQUIRED] = pt.OnboardStep.TaxInterview, Ka[pt.WorkflowState.SERVICE_TAX_INTERVIEW_MISMATCH] = pt.OnboardStep.TaxInterview, Ka[pt.WorkflowState.SERVICE_TAX_INTERVIEW_FAILED] = pt.OnboardStep.TaxInterview, Ka[pt.WorkflowState.PAYOUT_METHOD_NOT_STARTED] = pt.OnboardStep.PayoutMethod, Ka[pt.WorkflowState.PAYOUT_METHOD_PENDING] = pt.OnboardStep.PayoutMethod, Ka[pt.WorkflowState.REVIEW_PENDING] = pt.OnboardStep.Review, Ka),
                yr = function(e) {
                    var t = ![pt.WorkflowState.ROYALTY_TAX_INTERVIEW_PENDING, pt.WorkflowState.SERVICE_TAX_INTERVIEW_PENDING].includes(e.workflowState);
                    return i.createElement(m.xb, {
                        padding: 2,
                        borderLeft: !0,
                        borderRight: !0,
                        borderTop: !0
                    }, i.createElement(m.xb, {
                        borderMarked: !0,
                        padding: 2,
                        elevation: 1
                    }, e.workflowState === pt.WorkflowState.COMPLETED ? i.createElement(fr, {
                        onboardEntity: e.onboardEntity
                    }) : i.createElement(br, {
                        onboardEntity: e.onboardEntity,
                        startOverEnabled: t
                    }), i.createElement(m.Va, {
                        display: m.W.Flex
                    }, e.workflowState !== pt.WorkflowState.COMPLETED && i.createElement(m.Va, {
                        margin: {
                            right: 1
                        }
                    }, i.createElement(m.z, {
                        "data-test-selector": Za.CONTINUE_BUTTON,
                        onClick: function() {
                            return e.updateStepDisplayed(Er[e.workflowState])
                        }
                    }, Object(g.d)("Continue", "PayoutOnboardingSummary"))), t && i.createElement(m.z, {
                        "data-test-selector": Za.START_OVER_BUTTON,
                        type: m.F.Hollow,
                        onClick: e.showStartOverModal
                    }, Object(g.d)("Start Over", "PayoutOnboardingSummary")))))
                };
            n("U1LZ");
            ! function(e) {
                e[e.NotStarted = 0] = "NotStarted", e[e.Pending = 1] = "Pending", e[e.Failed = 2] = "Failed", e[e.Completed = 3] = "Completed"
            }(vr || (vr = {}));
            var Sr, kr = function(e) {
                    return i.createElement(m.xb, {
                        borderLeft: !0,
                        borderRight: !0,
                        borderTop: !0
                    }, i.createElement(m.Sa, {
                        onClick: e.onClick,
                        disabled: !e.isEnabled,
                        type: m.Ta.Alpha
                    }, i.createElement(m.Va, {
                        padding: 2,
                        alignItems: m.f.Center,
                        display: m.W.Flex,
                        flexWrap: m.Z.NoWrap
                    }, i.createElement(m.Va, {
                        flexGrow: 1
                    }, i.createElement(m.Na, {
                        margin: {
                            bottom: .5
                        }
                    }, i.createElement(m.V, {
                        type: m.Nb.H6,
                        bold: !0
                    }, e.title)), i.createElement(m.V, {
                        color: m.O.Alt2
                    }, e.description)), i.createElement(m.Va, {
                        display: m.W.Flex,
                        alignItems: m.f.Center
                    }, (e.type === vr.Completed || e.isEnabled) && i.createElement(m.Va, null, i.createElement(m.V, {
                        type: m.Nb.H4,
                        transform: m.Mb.Uppercase,
                        bold: !0
                    }, i.createElement(m.ab, {
                        label: function(e) {
                            switch (e) {
                                case vr.Pending:
                                    return Object(g.d)("Under Review", "ProgressRow");
                                case vr.Failed:
                                    return Object(g.d)("Failed", "ProgressRow");
                                case vr.Completed:
                                    return Object(g.d)("Completed", "ProgressRow");
                                default:
                                    return ""
                            }
                        }(e.type),
                        type: function(e) {
                            switch (e) {
                                case vr.NotStarted:
                                    return;
                                case vr.Pending:
                                    return m.bb.Prime;
                                case vr.Failed:
                                    return m.bb.Alert;
                                case vr.Completed:
                                    return m.bb.Success;
                                default:
                                    return
                            }
                        }(e.type)
                    }))), e.isEnabled && i.createElement(m.Va, {
                        margin: {
                            left: 1
                        },
                        display: m.W.Flex,
                        alignItems: m.f.Center
                    }, i.createElement(m.mb, {
                        asset: m.nb.AngleRight
                    }))))))
                },
                Nr = function() {
                    return Object(g.d)("Submit your tax information.", "PayoutOnboardingSummary")
                },
                Or = function() {
                    return Object(g.d)("Choose your payout method.", "PayoutOnboardingSummary")
                },
                Tr = function() {
                    return Object(g.d)("Submit your financial information.", "PayoutOnboardingSummary")
                };
            ! function(e) {
                e.REGISTRATION = "registration-selector", e.AGREEMENT = "agreement-selector", e.TAX_INTERVIEW = "tax-interview-selector", e.PAYOUT_METHOD = "payout-method-selector", e.REVIEW = "review-selector"
            }(Sr || (Sr = {}));
            var Cr = function(e, t, n) {
                    return Object(g.d)("Step {numOfCurrentStep} of {numOfTotalSteps}: {stepTitle}", {
                        numOfCurrentStep: e,
                        numOfTotalSteps: t,
                        stepTitle: n
                    }, "ProgressRow")
                },
                Pr = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.updateStepDisplayed = function(e) {
                            return function() {
                                t.props.updateStepDisplayed(e)
                            }
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        return i.createElement(m.xb, {
                            className: "payout-onboarding-summary",
                            background: m.r.Base,
                            borderBottom: !0,
                            borderRadius: {
                                bottomLeft: m.x.Medium,
                                bottomRight: m.x.Medium
                            }
                        }, this.isRegistrationComplete && i.createElement(yr, {
                            workflowState: this.props.workflow.currentStep,
                            onboardEntity: this.props.onboardEntity,
                            updateStepDisplayed: this.props.updateStepDisplayed,
                            showStartOverModal: this.props.showStartOverModal
                        }), i.createElement(kr, {
                            "data-test-selector": Sr.REGISTRATION,
                            title: this.step1Title,
                            description: this.step1Description,
                            type: this.step1Status,
                            onClick: this.updateStepDisplayed(pt.OnboardStep.Registration),
                            isEnabled: !this.isRegistrationComplete
                        }), i.createElement(kr, {
                            "data-test-selector": Sr.AGREEMENT,
                            title: this.step2Title,
                            description: this.step2Description,
                            type: this.step2Status,
                            onClick: this.updateStepDisplayed(pt.OnboardStep.Agreement),
                            isEnabled: this.isRegistrationComplete && !this.isAgreementComplete
                        }), i.createElement(kr, {
                            "data-test-selector": Sr.TAX_INTERVIEW,
                            title: this.step3Title,
                            description: this.step3Description,
                            type: this.step3Status,
                            onClick: this.updateStepDisplayed(pt.OnboardStep.TaxInterview),
                            isEnabled: this.isAgreementComplete && !this.isTaxInterviewComplete
                        }), i.createElement(kr, {
                            "data-test-selector": Sr.PAYOUT_METHOD,
                            title: this.step4Title,
                            description: this.step4Description,
                            type: this.step4Status,
                            onClick: this.updateStepDisplayed(pt.OnboardStep.PayoutMethod),
                            isEnabled: this.isTaxInterviewComplete && !this.isPayoutMethodComplete
                        }), this.props.onboardEntity === pt.OnboardEntity.CustomPartner && i.createElement(kr, {
                            "data-test-selector": Sr.REVIEW,
                            title: this.step5Title,
                            description: this.step5Description,
                            type: this.step5Status,
                            onClick: this.updateStepDisplayed(pt.OnboardStep.Review),
                            isEnabled: this.isPayoutMethodComplete && !this.isReviewComplete
                        }))
                    }, Object.defineProperty(t.prototype, "isRegistrationComplete", {
                        get: function() {
                            return this.props.workflow.currentStep !== pt.WorkflowState.CANCELED && this.props.workflow.currentStep !== pt.WorkflowState.REGISTRATION_NOT_STARTED
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "isAgreementComplete", {
                        get: function() {
                            return this.isRegistrationComplete && this.props.workflow.currentStep !== pt.WorkflowState.AGREEMENT_NOT_STARTED
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "isTaxInterviewComplete", {
                        get: function() {
                            return this.isAgreementComplete && ![pt.WorkflowState.ROYALTY_TAX_INTERVIEW_NOT_STARTED, pt.WorkflowState.ROYALTY_TAX_INTERVIEW_PENDING, pt.WorkflowState.ROYALTY_TAX_INTERVIEW_FAILED, pt.WorkflowState.ROYALTY_TAX_INTERVIEW_ACTION_REQUIRED, pt.WorkflowState.ROYALTY_TAX_INTERVIEW_MISMATCH, pt.WorkflowState.SERVICE_TAX_INTERVIEW_NOT_STARTED, pt.WorkflowState.SERVICE_TAX_INTERVIEW_PENDING, pt.WorkflowState.SERVICE_TAX_INTERVIEW_FAILED, pt.WorkflowState.SERVICE_TAX_INTERVIEW_ACTION_REQUIRED, pt.WorkflowState.SERVICE_TAX_INTERVIEW_MISMATCH].includes(this.props.workflow.currentStep)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "isPayoutMethodComplete", {
                        get: function() {
                            return this.isTaxInterviewComplete && ![pt.WorkflowState.PAYOUT_METHOD_NOT_STARTED, pt.WorkflowState.PAYOUT_METHOD_PENDING].includes(this.props.workflow.currentStep)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "isReviewComplete", {
                        get: function() {
                            return this.isPayoutMethodComplete && this.props.workflow.currentStep !== pt.WorkflowState.REVIEW_PENDING
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "numOfTotalSteps", {
                        get: function() {
                            return this.props.onboardEntity === pt.OnboardEntity.CustomPartner ? 5 : 4
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "step1Title", {
                        get: function() {
                            return Cr(Object(g.e)(1), Object(g.e)(this.numOfTotalSteps), gr[pt.OnboardStep.Registration].title[this.props.onboardEntity]())
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "step1Description", {
                        get: function() {
                            return this.props.onboardEntity === pt.OnboardEntity.ExtensionsDeveloper ? this.isRegistrationComplete ? Object(g.d)("Your Extensions Developer Registration is complete.", "PayoutOnboardingSummary") : Object(g.d)("Begin your Extensions Developer Registration.", "PayoutOnboardingSummary") : this.isRegistrationComplete ? Object(g.d)("Your payout registration is complete.", "PayoutOnboardingSummary") : Object(g.d)("Begin your payout registration.", "PayoutOnboardingSummary")
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "step1Status", {
                        get: function() {
                            return this.isRegistrationComplete ? vr.Completed : vr.NotStarted
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "step2Title", {
                        get: function() {
                            return Cr(Object(g.e)(2), Object(g.e)(this.numOfTotalSteps), gr[pt.OnboardStep.Agreement].title[this.props.onboardEntity]())
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "step2Description", {
                        get: function() {
                            switch (this.props.onboardEntity) {
                                case pt.OnboardEntity.Affiliate:
                                    return this.isAgreementComplete ? Object(g.d)("You have agreed to the Twitch Affiliate Agreement.", "PayoutOnboardingSummary") : Object(g.d)("Agree to the Twitch Affiliate Agreement.", "PayoutOnboardingSummary");
                                case pt.OnboardEntity.ExtensionsDeveloper:
                                    return this.isAgreementComplete ? Object(g.d)("You have agreed to the Twitch Extensions Developer Agreement.", "PayoutOnboardingSummary") : Object(g.d)("Agree to the Twitch Extensions Developer Agreement.", "PayoutOnboardingSummary");
                                case pt.OnboardEntity.StandardPartner:
                                case pt.OnboardEntity.PremiumPartner:
                                case pt.OnboardEntity.CustomPartner:
                                    return this.isAgreementComplete ? Object(g.d)("You have agreed to the Twitch Partner Agreement.", "PayoutOnboardingSummary") : Object(g.d)("Agree to the Twitch Partner Agreement.", "PayoutOnboardingSummary");
                                default:
                                    return ""
                            }
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "step2Status", {
                        get: function() {
                            return this.isAgreementComplete ? vr.Completed : vr.NotStarted
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "step3Title", {
                        get: function() {
                            return Cr(Object(g.e)(3), Object(g.e)(this.numOfTotalSteps), gr[pt.OnboardStep.TaxInterview].title[this.props.onboardEntity]())
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "step3Description", {
                        get: function() {
                            if (!this.isAgreementComplete) return Nr();
                            switch (this.props.workflow.currentStep) {
                                case pt.WorkflowState.ROYALTY_TAX_INTERVIEW_NOT_STARTED:
                                    return Nr();
                                case pt.WorkflowState.ROYALTY_TAX_INTERVIEW_PENDING:
                                    return Object(g.d)("Your royalty tax information is currently under review. This process usually takes a few minutes.", "PayoutOnboardingSummary");
                                case pt.WorkflowState.ROYALTY_TAX_INTERVIEW_FAILED:
                                case pt.WorkflowState.ROYALTY_TAX_INTERVIEW_ACTION_REQUIRED:
                                case pt.WorkflowState.ROYALTY_TAX_INTERVIEW_MISMATCH:
                                case pt.WorkflowState.SERVICE_TAX_INTERVIEW_FAILED:
                                case pt.WorkflowState.SERVICE_TAX_INTERVIEW_ACTION_REQUIRED:
                                case pt.WorkflowState.SERVICE_TAX_INTERVIEW_MISMATCH:
                                    return Object(g.d)("We could not successfully validate your tax information. Please review and correct your tax information.", "PayoutOnboardingSummary");
                                case pt.WorkflowState.SERVICE_TAX_INTERVIEW_NOT_STARTED:
                                    return Object(g.d)("Royalty tax approved. Please complete your service tax information.", "PayoutOnboardingSummary");
                                case pt.WorkflowState.SERVICE_TAX_INTERVIEW_PENDING:
                                    return Object(g.d)("Your service tax information is currently under review. This process usually takes a few minutes.", "PayoutOnboardingSummary");
                                default:
                                    return Object(g.d)("Your tax information has been successfully validated.", "PayoutOnboardingSummary")
                            }
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "step3Status", {
                        get: function() {
                            if (!this.isAgreementComplete) return vr.NotStarted;
                            switch (this.props.workflow.currentStep) {
                                case pt.WorkflowState.ROYALTY_TAX_INTERVIEW_NOT_STARTED:
                                    return vr.NotStarted;
                                case pt.WorkflowState.ROYALTY_TAX_INTERVIEW_PENDING:
                                    return vr.Pending;
                                case pt.WorkflowState.ROYALTY_TAX_INTERVIEW_FAILED:
                                case pt.WorkflowState.ROYALTY_TAX_INTERVIEW_ACTION_REQUIRED:
                                case pt.WorkflowState.ROYALTY_TAX_INTERVIEW_MISMATCH:
                                    return vr.Failed;
                                case pt.WorkflowState.SERVICE_TAX_INTERVIEW_NOT_STARTED:
                                    return vr.NotStarted;
                                case pt.WorkflowState.SERVICE_TAX_INTERVIEW_PENDING:
                                    return vr.Pending;
                                case pt.WorkflowState.SERVICE_TAX_INTERVIEW_FAILED:
                                case pt.WorkflowState.SERVICE_TAX_INTERVIEW_ACTION_REQUIRED:
                                case pt.WorkflowState.SERVICE_TAX_INTERVIEW_MISMATCH:
                                    return vr.Failed;
                                default:
                                    return vr.Completed
                            }
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "step4Title", {
                        get: function() {
                            return Cr(Object(g.e)(4), Object(g.e)(this.numOfTotalSteps), gr[pt.OnboardStep.PayoutMethod].title[this.props.onboardEntity]())
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "step4Description", {
                        get: function() {
                            var e = this.props.onboardEntity === pt.OnboardEntity.ExtensionsDeveloper;
                            return this.isTaxInterviewComplete ? this.props.workflow.currentStep === pt.WorkflowState.PAYOUT_METHOD_PENDING ? e ? Object(g.d)("Your financial information is currently under review. This process usually takes a few minutes.", "PayoutOnboardingSummary") : Object(g.d)("Your payout method is currently under review. This process usually takes a few minutes.", "PayoutOnboardingSummary") : this.isPayoutMethodComplete ? e ? Object(g.d)("Your financial information has been successfully validated.", "PayoutOnboardingSummary") : Object(g.d)("Your payout method has been successfully validated.", "PayoutOnboardingSummary") : e ? Tr() : Or() : e ? Tr() : Or()
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "step4Status", {
                        get: function() {
                            return this.isTaxInterviewComplete ? this.props.workflow.currentStep === pt.WorkflowState.PAYOUT_METHOD_PENDING ? vr.Pending : this.isPayoutMethodComplete ? vr.Completed : vr.NotStarted : vr.NotStarted
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "step5Title", {
                        get: function() {
                            return this.props.onboardEntity === pt.OnboardEntity.CustomPartner ? Cr(Object(g.e)(5), Object(g.e)(this.numOfTotalSteps), gr[pt.OnboardStep.Review].title[this.props.onboardEntity]()) : ""
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "step5Description", {
                        get: function() {
                            return this.isPayoutMethodComplete ? this.props.workflow.currentStep === pt.WorkflowState.REVIEW_PENDING ? Object(g.d)("The Partnership Team is currently validating your paperwork.", "PayoutOnboardingSummary") : Object(g.d)("The Partnership Team has approved your new agreement.", "PayoutOnboardingSummary") : Object(g.d)("The Partnership Team will validate your paperwork and activate your new agreement.", "PayoutOnboardingSummary")
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "step5Status", {
                        get: function() {
                            return this.isPayoutMethodComplete ? this.props.workflow.currentStep === pt.WorkflowState.REVIEW_PENDING ? vr.Pending : vr.Completed : vr.NotStarted
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t
                }(i.Component),
                Ar = function(e) {
                    return Object(g.d)("Example {exampleNum}", {
                        exampleNum: Object(g.e)(e)
                    }, "TaxInfoBrick")
                },
                _r = function(e) {
                    if (e.taxStatus === Gr.NotStarted || e.taxStatus === Gr.Completed) return null;
                    var t;
                    switch (e.taxStatus) {
                        case Gr.ActionRequired:
                            t = i.createElement(m.V, {
                                fontSize: m.Aa.Size6
                            }, Object(g.d)("Looks like you may need to mail documentation to Amazon to complete this process. However, you may be able to avoid this by consenting to electronic signature of your tax form. To do this, click the button below to retake the tax interview and be sure to check the box to consent to electronic signature.", "TaxInfoBrick"));
                            break;
                        case Gr.Failed:
                            t = i.createElement(m.V, {
                                fontSize: m.Aa.Size6
                            }, Object(g.d)("We could not successfully validate your tax information.", "TaxInfoBrick"));
                            break;
                        case Gr.Mismatch:
                            t = i.createElement(i.Fragment, null, i.createElement(m.Na, {
                                margin: {
                                    bottom: 1
                                }
                            }, i.createElement(m.V, {
                                fontSize: m.Aa.Size6
                            }, Object(g.d)("Thank you for completing your tax interview. However, the details you have just entered into the tax form does not match the information on file from Step 1 (Registration). Your tax information from Steps 1 and 3 MUST match in order to receive payouts from Twitch.", "TaxInfoBrick"))), i.createElement(m.Na, {
                                margin: {
                                    bottom: 1
                                }
                            }, i.createElement(m.V, {
                                fontSize: m.Aa.Size6
                            }, Ar(1))), i.createElement(m.Va, {
                                margin: {
                                    left: 1,
                                    bottom: 1
                                }
                            }, i.createElement(m.V, {
                                fontSize: m.Aa.Size6
                            }, Object(g.d)("Step 1 user is John Doe from the United States of America.", "TaxInfoBrick")), i.createElement(m.V, {
                                fontSize: m.Aa.Size6
                            }, Object(g.d)("Step 3 tax information should be for John Doe from the United States of America.", "TaxInfoBrick")), i.createElement(m.V, {
                                fontSize: m.Aa.Size6
                            }, Object(g.d)("Step 4 selected payout method is check paid to John Doe from the United States of America.", "TaxInfoBrick"))), i.createElement(m.Na, {
                                margin: {
                                    bottom: 1
                                }
                            }, i.createElement(m.V, {
                                fontSize: m.Aa.Size6
                            }, Ar(2))), i.createElement(m.Va, {
                                margin: {
                                    left: 1,
                                    bottom: 1
                                }
                            }, i.createElement(m.V, {
                                fontSize: m.Aa.Size6
                            }, Object(g.d)("Step 1 user is John Doe working for Cool Gaming, Inc. from France.", "TaxInfoBrick")), i.createElement(m.V, {
                                fontSize: m.Aa.Size6
                            }, Object(g.d)("Step 3 tax information should be for Cool Gaming, Inc. from France.", "TaxInfoBrick")), i.createElement(m.V, {
                                fontSize: m.Aa.Size6
                            }, Object(g.d)("Step 4 selected payout method is a wire paid to Cool Gaming, Inc. from France.", "TaxInfoBrick"))), i.createElement(m.V, {
                                fontSize: m.Aa.Size6
                            }, Object(g.d)("Please see the list of errors below for the specific fields that require correction.", "TaxInfoBrick")));
                            break;
                        default:
                            return null
                    }
                    return i.createElement(m.xb, {
                        padding: 2,
                        borderMarked: !0,
                        background: m.r.Base,
                        margin: {
                            bottom: 2
                        },
                        elevation: 1
                    }, t)
                },
                wr = n("HGFl"),
                Ir = function(e) {
                    return i.createElement(i.Fragment, null, i.createElement(m.Na, {
                        margin: {
                            bottom: 1
                        }
                    }, i.createElement(m.V, {
                        fontSize: m.Aa.Size6
                    }, Object(g.d)("If you prefer not to consent to electronic signature, you will be required to mail additional documentation to Amazon. As a reminder, Twitch is a subsidiary of Amazon, and Amazon handles our tax forms. To proceed, please follow these instructions:", "TaxActionRequiredInfo"))), i.createElement(m.Va, {
                        margin: {
                            bottom: 1
                        }
                    }, i.createElement(m.V, {
                        fontSize: m.Aa.Size6
                    }, Object(g.d)("1. Click the button below to retake the tax information interview.", "TaxActionRequiredInfo")), i.createElement(m.V, {
                        fontSize: m.Aa.Size6
                    }, Object(g.d)("2. Proceed to the page that asks you to print out a hardcopy of the tax form and print out the form.", "TaxActionRequiredInfo")), i.createElement(m.V, {
                        fontSize: m.Aa.Size6
                    }, Object(g.d)("3. Sign the form with a blue or black pen.", "TaxActionRequiredInfo")), i.createElement(m.V, {
                        fontSize: m.Aa.Size6
                    }, Object(g.d)("4. Mail the hardcopy of your tax form to:", "TaxActionRequiredInfo"))), i.createElement(m.Va, {
                        margin: {
                            left: 2,
                            bottom: 1
                        }
                    }, i.createElement(m.V, {
                        fontSize: m.Aa.Size6
                    }, "Amazon"), i.createElement(m.V, {
                        fontSize: m.Aa.Size6
                    }, "Attn: FinOps Tax"), i.createElement(m.V, {
                        fontSize: m.Aa.Size6
                    }, "P.O. Box 80683"), i.createElement(m.V, {
                        fontSize: m.Aa.Size6
                    }, "Seattle, WA, 98108-0683"), i.createElement(m.V, {
                        fontSize: m.Aa.Size6
                    }, "U.S.A.")), i.createElement(m.Va, {
                        margin: {
                            bottom: 1
                        }
                    }, i.createElement(m.V, {
                        fontSize: m.Aa.Size6
                    }, Object(g.d)("To assist Amazon with locating your account, please write the following at the top of the form in the white space:", "TaxActionRequiredInfo"))), i.createElement(m.Va, {
                        margin: {
                            left: 2,
                            bottom: 1
                        }
                    }, i.createElement(m.V, {
                        fontSize: m.Aa.Size6
                    }, "Amazon subsidiary: Twitch Interactive, Inc."), i.createElement(m.V, {
                        fontSize: m.Aa.Size6
                    }, "Email address: ", e.email)))
                },
                xr = function(e) {
                    var t = e.workflow,
                        n = t.registration,
                        a = t.taxMismatchErrors;
                    if (!n || !a) return null;
                    var r = a.map(function(e, t) {
                        var a, r;
                        if (e === pt.TaxMismatchError.NAME) a = Object(g.d)("Name", "TaxMismatchSpecificErrors"), r = n.companyName ? n.companyName : [n.firstName, n.middleName, n.lastName].filter(function(e) {
                            return null !== e
                        }).join(" ");
                        else if (e === pt.TaxMismatchError.EMAIL) a = Object(g.d)("Email", "TaxMismatchSpecificErrors"), r = n.email;
                        else if (e === pt.TaxMismatchError.STREET_ADDRESS) a = Object(g.d)("Street Address", "TaxMismatchSpecificErrors"), r = n.streetAddress;
                        else if (e === pt.TaxMismatchError.STREET_ADDRESS_2) a = Object(g.d)("Street Address 2", "TaxMismatchSpecificErrors"), r = n.streetAddress2;
                        else if (e === pt.TaxMismatchError.CITY) a = Object(g.d)("City or Town", "TaxMismatchSpecificErrors"), r = n.city;
                        else if (e === pt.TaxMismatchError.STATE) a = Object(g.d)("State/Province", "TaxMismatchSpecificErrors"), r = "US" === n.countryCode ? Ta(n.stateCode || "") : "CA" === n.countryCode ? ka(n.stateCode || "") : n.stateCode;
                        else if (e === pt.TaxMismatchError.COUNTRY) a = Object(g.d)("Country", "TaxMismatchSpecificErrors"), r = Object(Oa.b)(n.countryCode || "");
                        else {
                            if (e !== pt.TaxMismatchError.POSTAL) return null;
                            a = Object(g.d)("Zip Code/Postal Code", "TaxMismatchSpecificErrors"), r = n.postal
                        }
                        return i.createElement(m.Na, {
                            key: a + t,
                            padding: {
                                left: 1
                            }
                        }, i.createElement(m.V, {
                            fontSize: m.Aa.Size6
                        }, i.createElement(m.V, {
                            bold: !0,
                            type: m.Nb.Span
                        }, a), " ", r))
                    });
                    return i.createElement(i.Fragment, null, i.createElement(m.Na, {
                        margin: {
                            bottom: 1
                        }
                    }, i.createElement(m.V, {
                        type: m.Nb.P,
                        color: m.O.Error,
                        bold: !0
                    }, Object(g.d)("Specific Errors", "TaxMismatchSpecificErrors"))), i.createElement(m.Na, {
                        margin: {
                            bottom: 1
                        }
                    }, i.createElement(m.V, {
                        fontSize: m.Aa.Size6
                    }, Object(g.d)("The following data you entered in Step 1 does not match the data entered on the tax interview in Step 3:", "TaxMismatchSpecificErrors"))), i.createElement(m.Va, {
                        margin: {
                            bottom: 1
                        }
                    }, r), i.createElement(m.Na, {
                        margin: {
                            bottom: 1
                        }
                    }, i.createElement(m.V, {
                        fontSize: m.Aa.Size6
                    }, Object(g.d)("To fix this, please click the button below to edit your tax form and correct these values. Alternatively, if the tax form has the correct information, you can choose to edit Step 1 instead. To do this, click the button below and then click {buttonLabel} to reset the onboarding flow.", {
                        buttonLabel: Object(g.d)("Start Over", "TaxMismatchSpecificErrors")
                    }, "TaxMismatchSpecificErrors"))))
                },
                Rr = function(e) {
                    var t = e.workflow.registration;
                    if (!t) return null;
                    switch (e.taxStatus) {
                        case Gr.NotStarted:
                            return i.createElement(i.Fragment, null, i.createElement(m.Na, {
                                margin: {
                                    bottom: 1
                                }
                            }, i.createElement(m.V, {
                                fontSize: m.Aa.Size6
                            }, Object(g.d)("A new window will open where you can submit your royalty tax information. Please complete the tax information interview fully.", "TaxInfoRoyaltyText"))), i.createElement(m.Na, {
                                margin: {
                                    bottom: 1
                                }
                            }, i.createElement(m.V, {
                                fontSize: m.Aa.Size6
                            }, Object(g.d)('Once you\'ve filled out the form, if your status still says "Not Started", please wait a minute or two for it to update to "Under Review".', "TaxInfoRoyaltyText"))), i.createElement(m.Va, {
                                margin: {
                                    bottom: 2
                                }
                            }, i.createElement(na, {
                                onboardEntity: e.onboardEntity
                            })));
                        case Gr.Pending:
                            var n = new Date,
                                a = Object(wr.c)(e.workflow.timestamp);
                            return Object(Wn.differenceInDays)(n, a) >= 3 ? i.createElement(i.Fragment, null, i.createElement(m.Na, {
                                margin: {
                                    bottom: 1
                                }
                            }, i.createElement(m.V, {
                                fontSize: m.Aa.Size6
                            }, Object(g.d)("Thank you for your patience. Your tax information is still under review, but it is taking longer than normal.", "TaxInfoRoyaltyText"))), i.createElement(m.Na, {
                                margin: {
                                    bottom: 1
                                }
                            }, i.createElement(m.V, {
                                fontSize: m.Aa.Size6
                            }, Object(g.d)("Please email {email} for assistance.", {
                                email: i.createElement("a", {
                                    href: "mailto:twitchtaxhelp@amazon.com"
                                }, "twitchtaxhelp@amazon.com")
                            }, "TaxInfoRoyaltyText")))) : i.createElement(i.Fragment, null, i.createElement(m.Na, {
                                margin: {
                                    bottom: 1
                                }
                            }, i.createElement(m.V, {
                                fontSize: m.Aa.Size6
                            }, Object(g.d)("Hang tight! Your royalty tax information is currently under review and can take up to three business days.", "TaxInfoRoyaltyText"))), i.createElement(m.Na, {
                                margin: {
                                    bottom: 1
                                }
                            }, i.createElement(m.V, {
                                fontSize: m.Aa.Size6
                            }, Object(g.d)("We'll update this screen within three business days with next steps. Please check back later.", "TaxInfoRoyaltyText"))));
                        case Gr.Completed:
                            return i.createElement(m.V, {
                                fontSize: m.Aa.Size6
                            }, Object(g.d)("Your royalty tax information was successfully validated.", "TaxInfoRoyaltyText"));
                        case Gr.ActionRequired:
                            return i.createElement(i.Fragment, null, i.createElement(Ir, {
                                email: t.email
                            }), i.createElement(m.Va, {
                                margin: {
                                    bottom: 2
                                }
                            }, i.createElement(na, {
                                onboardEntity: e.onboardEntity
                            })));
                        case Gr.Mismatch:
                            return i.createElement(i.Fragment, null, i.createElement(xr, {
                                workflow: e.workflow
                            }), i.createElement(m.Va, {
                                margin: {
                                    bottom: 2
                                }
                            }, i.createElement(na, {
                                onboardEntity: e.onboardEntity
                            })));
                        case Gr.Failed:
                            return i.createElement(m.Na, {
                                margin: {
                                    bottom: 2
                                }
                            }, i.createElement(m.V, {
                                fontSize: m.Aa.Size6
                            }, Object(g.d)("Please click the button below to retake the Royalty Tax Interview and correct your information.", "TaxInfoRoyaltyText")));
                        default:
                            return null
                    }
                },
                Dr = function(e) {
                    var t = e.workflow.registration;
                    if (!t) return null;
                    if (!e.royaltyTaxCompleted) return i.createElement(i.Fragment, null, i.createElement(m.Na, {
                        margin: {
                            bottom: 1
                        }
                    }, i.createElement(m.V, {
                        fontSize: m.Aa.Size6
                    }, Object(g.d)("Once your royalty tax information is fully validated, you will need to complete the Service Tax Interview.", "TaxInfoServiceText"))));
                    switch (e.taxStatus) {
                        case Gr.NotStarted:
                            return i.createElement(i.Fragment, null, i.createElement(m.Na, {
                                margin: {
                                    bottom: 1
                                }
                            }, i.createElement(m.V, {
                                fontSize: m.Aa.Size6
                            }, Object(g.d)("A new window will open where you can submit your service tax information. Please complete the tax information interview fully.", "TaxInfoServiceText"))), i.createElement(m.Na, {
                                margin: {
                                    bottom: 1
                                }
                            }, i.createElement(m.V, {
                                fontSize: m.Aa.Size6
                            }, Object(g.d)('Once you\'ve filled out the form, if your status still says "Not Started", please wait a minute or two for it to update to "Under Review".', "TaxInfoServiceText"))), i.createElement(m.Va, {
                                margin: {
                                    bottom: 2
                                }
                            }, i.createElement(na, {
                                onboardEntity: e.onboardEntity
                            })));
                        case Gr.Pending:
                            var n = new Date,
                                a = Object(wr.c)(e.workflow.timestamp);
                            return Object(Wn.differenceInDays)(n, a) >= 3 ? i.createElement(i.Fragment, null, i.createElement(m.Na, {
                                margin: {
                                    bottom: 1
                                }
                            }, i.createElement(m.V, {
                                fontSize: m.Aa.Size6
                            }, Object(g.d)("Thank you for your patience. Your tax information is still under review, but it is taking longer than normal.", "TaxInfoServiceText"))), i.createElement(m.Na, {
                                margin: {
                                    bottom: 1
                                }
                            }, i.createElement(m.V, {
                                fontSize: m.Aa.Size6
                            }, Object(g.d)("Please email {email} for assistance.", {
                                email: i.createElement("a", {
                                    href: "mailto:twitchtaxhelp@amazon.com"
                                }, "twitchtaxhelp@amazon.com")
                            }, "TaxInfoServiceText")))) : i.createElement(i.Fragment, null, i.createElement(m.Na, {
                                margin: {
                                    bottom: 1
                                }
                            }, i.createElement(m.V, {
                                fontSize: m.Aa.Size6
                            }, Object(g.d)("Hang tight! Your service tax information is currently under review and can take up to three business days.", "TaxInfoServiceText"))), i.createElement(m.Na, {
                                margin: {
                                    bottom: 1
                                }
                            }, i.createElement(m.V, {
                                fontSize: m.Aa.Size6
                            }, Object(g.d)("We'll update this screen within three business days with next steps. Please check back later.", "TaxInfoServiceText"))));
                        case Gr.Completed:
                            return i.createElement(m.V, {
                                fontSize: m.Aa.Size6
                            }, Object(g.d)("Your service tax information was successfully validated.", "TaxInfoServiceText"));
                        case Gr.ActionRequired:
                            return i.createElement(i.Fragment, null, i.createElement(Ir, {
                                email: t.email
                            }), i.createElement(m.Va, {
                                margin: {
                                    bottom: 2
                                }
                            }, i.createElement(na, {
                                onboardEntity: e.onboardEntity
                            })));
                        case Gr.Mismatch:
                            return i.createElement(i.Fragment, null, i.createElement(xr, {
                                workflow: e.workflow
                            }), i.createElement(m.Va, {
                                margin: {
                                    bottom: 2
                                }
                            }, i.createElement(na, {
                                onboardEntity: e.onboardEntity
                            })));
                        case Gr.Failed:
                            return i.createElement(m.Na, {
                                margin: {
                                    bottom: 2
                                }
                            }, i.createElement(m.V, {
                                fontSize: m.Aa.Size6
                            }, Object(g.d)("Please click the button below to retake the Service Tax Interview and correct your information.", "TaxInfoServiceText")));
                        default:
                            return null
                    }
                },
                Fr = function() {
                    return Object(g.d)("Start Over", "TaxPreviewInstructions")
                },
                jr = function(e) {
                    return i.createElement(m.Va, {
                        padding: 1,
                        margin: {
                            bottom: 1
                        }
                    }, i.createElement(m.Na, {
                        margin: {
                            bottom: 2
                        }
                    }, i.createElement(m.V, {
                        fontSize: m.Aa.Size6
                    }, Object(g.d)("It is important that you enter consistent information throughout the onboarding process to ensure that we have your correct contact information, tax information, and payout information. When filling out the tax form on the following page, please make sure that you enter the same information as you did in Step 1. For your reference, here is the information you entered in Step 1.", "TaxPreviewInstructions"))), e.onboardEntity !== pt.OnboardEntity.ExtensionsDeveloper && i.createElement(m.Na, {
                        margin: {
                            bottom: 2
                        }
                    }, i.createElement(m.V, {
                        fontSize: m.Aa.Size6
                    }, Object(g.d)('If any of this information is incorrect, you must restart your Payout Registration by clicking "{buttonLabel}" below.', {
                        buttonLabel: Fr()
                    }, "TaxPreviewInstructions"))), e.onboardEntity === pt.OnboardEntity.ExtensionsDeveloper && i.createElement(m.Na, {
                        margin: {
                            bottom: 2
                        }
                    }, i.createElement(m.V, {
                        fontSize: m.Aa.Size6
                    }, Object(g.d)('If any of this information is incorrect, you must restart your Extensions Developer Registration by clicking "{buttonLabel}" below.', {
                        buttonLabel: Fr()
                    }, "TaxPreviewInstructions"))), i.createElement(m.V, {
                        fontSize: m.Aa.Size6
                    }, Object(g.d)("Otherwise, please proceed by clicking the purple button and the tax form will appear in a new window. If the tax form does not appear, make sure that you have pop-ups enabled.", "TaxPreviewInstructions")))
                },
                Vr = function() {
                    return Object(g.d)("optional", "TaxPreviewReferenceInfo")
                },
                Lr = function(e) {
                    var t, n = e.workflow.registration;
                    if (!n) return null;
                    t = n.companyName ? n.companyName : [n.firstName, n.middleName, n.lastName].filter(function(e) {
                        return null !== e
                    }).join(" ");
                    var a = "US" === n.countryCode,
                        r = "CA" === n.countryCode;
                    return i.createElement(m.xb, {
                        borderMarked: !0,
                        padding: 2
                    }, i.createElement(m.Va, {
                        margin: {
                            bottom: 2
                        }
                    }, i.createElement(m.Ca, {
                        label: Object(g.d)("Channel Name", "TaxPreviewReferenceInfo"),
                        orientation: m.Da.Horizontal
                    }, i.createElement(m.Pa, {
                        type: m.Ra.Text,
                        value: e.channelName,
                        disabled: !0
                    }))), i.createElement(m.Va, {
                        margin: {
                            bottom: 2
                        }
                    }, i.createElement(m.Ca, {
                        label: Object(g.d)("Name", "TaxPreviewReferenceInfo"),
                        orientation: m.Da.Horizontal
                    }, i.createElement(m.Pa, {
                        type: m.Ra.Text,
                        value: t || "",
                        disabled: !0
                    }))), i.createElement(m.Va, {
                        margin: {
                            bottom: 2
                        }
                    }, i.createElement(m.Ca, {
                        label: Object(g.d)("Email", "TaxPreviewReferenceInfo"),
                        orientation: m.Da.Horizontal
                    }, i.createElement(m.Pa, {
                        type: m.Ra.Text,
                        value: n.email,
                        disabled: !0
                    }))), i.createElement(m.Va, {
                        margin: {
                            bottom: 2
                        }
                    }, i.createElement(m.Ca, {
                        label: Object(g.d)("Country", "TaxPreviewReferenceInfo"),
                        orientation: m.Da.Horizontal
                    }, i.createElement(m.Pa, {
                        type: m.Ra.Text,
                        value: Object(Oa.b)(n.countryCode),
                        disabled: !0
                    }))), i.createElement(m.Va, {
                        margin: {
                            bottom: 2
                        }
                    }, i.createElement(m.Ca, {
                        label: Object(g.d)("Street Address", "TaxPreviewReferenceInfo"),
                        orientation: m.Da.Horizontal
                    }, i.createElement(m.Pa, {
                        type: m.Ra.Text,
                        value: n.streetAddress,
                        disabled: !0
                    }))), i.createElement(m.Va, {
                        margin: {
                            bottom: 2
                        }
                    }, i.createElement(m.Ca, {
                        label: Object(g.d)("Street Address 2", "TaxPreviewReferenceInfo"),
                        orientation: m.Da.Horizontal,
                        labelOptional: Vr()
                    }, i.createElement(m.Pa, {
                        type: m.Ra.Text,
                        value: n.streetAddress2 || "",
                        disabled: !0
                    }))), i.createElement(m.Va, {
                        margin: {
                            bottom: 2
                        }
                    }, i.createElement(m.Ca, {
                        label: Object(g.d)("City or Town", "TaxPreviewReferenceInfo"),
                        orientation: m.Da.Horizontal
                    }, i.createElement(m.Pa, {
                        type: m.Ra.Text,
                        value: n.city,
                        disabled: !0
                    }))), i.createElement(m.Va, {
                        margin: {
                            bottom: 2
                        }
                    }, i.createElement(m.Ca, {
                        label: Object(g.d)("State/Province", "TaxPreviewReferenceInfo"),
                        orientation: m.Da.Horizontal,
                        labelOptional: a || r ? "" : Vr()
                    }, i.createElement(m.Pa, {
                        type: m.Ra.Text,
                        value: a ? Ta(n.stateCode || "") : r ? ka(n.stateCode || "") : n.stateCode || "",
                        disabled: !0
                    }))), i.createElement(m.Ca, {
                        label: Object(g.d)("Zip Code/Postal Code", "TaxPreviewReferenceInfo"),
                        orientation: m.Da.Horizontal,
                        labelOptional: a ? "" : Vr()
                    }, i.createElement(m.Pa, {
                        type: m.Ra.Text,
                        value: n.postal || "",
                        disabled: !0
                    })))
                },
                Ur = (n("Ff3J"), n("Hhor")),
                Mr = function(e) {
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
                                    } catch (e) {}
                                }, 100)
                            }
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.componentWillUnmount = function() {
                        clearInterval(this.popupInterval)
                    }, t.prototype.render = function() {
                        return this.props.data.loading ? i.createElement(m.xb, {
                            className: "tax-preview-modal__container",
                            background: m.r.Base,
                            padding: 5
                        }, i.createElement(m.Xa, {
                            fillContent: !0
                        })) : this.props.data.error ? i.createElement(m.xb, {
                            className: "tax-preview-modal__container",
                            background: m.r.Base,
                            padding: 5
                        }, i.createElement(h.a, {
                            message: Object(g.d)("Oops, something went wrong.", "TaxPreviewModal")
                        })) : i.createElement(m.xb, {
                            className: "tax-preview-modal__container",
                            background: m.r.Base,
                            padding: 2
                        }, i.createElement(m.xb, {
                            borderBottom: !0,
                            padding: {
                                bottom: 1
                            },
                            margin: {
                                bottom: 1
                            }
                        }, i.createElement(m.V, {
                            type: m.Nb.H4
                        }, Object(g.d)("Information Reference", "TaxPreviewModal"))), i.createElement(jr, {
                            onboardEntity: this.props.onboardEntity
                        }), i.createElement(Lr, {
                            channelName: this.props.channelName,
                            workflow: this.props.workflow
                        }), i.createElement(m.Va, {
                            display: m.W.Flex,
                            justifyContent: m.Ua.Center,
                            padding: {
                                top: 2
                            }
                        }, i.createElement(m.Va, {
                            display: m.W.InlineBlock,
                            margin: {
                                right: 2
                            }
                        }, i.createElement(m.z, {
                            onClick: this.handleOpenTaxInterviewClick,
                            disabled: this.state.openingTaxInterview
                        }, this.openTaxButtonText)), i.createElement(m.Va, {
                            display: m.W.InlineBlock,
                            margin: {
                                right: 2
                            }
                        }, i.createElement(m.z, {
                            type: m.F.Text,
                            onClick: this.props.showStartOverModal,
                            disabled: this.state.openingTaxInterview
                        }, Object(g.d)("Start Over", "TaxPreviewModal"))), this.state.openingTaxInterview && i.createElement(m.Va, {
                            display: m.W.Flex,
                            justifyContent: m.Ua.Center,
                            flexDirection: m.Y.Column
                        }, i.createElement(m.Xa, null))))
                    }, Object.defineProperty(t.prototype, "openTaxButtonText", {
                        get: function() {
                            return this.props.taxType === Yr.Royalty ? Object(g.d)("Open Royalty Tax Interview Form", "TaxPreviewModal") : Object(g.d)("Open Service Tax Interview Form", "TaxPreviewModal")
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t
                }(i.Component),
                Br = Object(s.compose)(Object(f.a)(Ur, {
                    options: function(e) {
                        return {
                            variables: {
                                taxType: e.taxType,
                                returnURL: window.location.href
                            }
                        }
                    }
                }))(Mr),
                Wr = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        return i.createElement(m.Va, null, i.createElement(Br, {
                            taxType: this.props.taxType,
                            channelName: this.props.channelName,
                            onboardEntity: this.props.onboardEntity,
                            workflow: this.props.workflow,
                            showStartOverModal: this.props.showStartOverModal,
                            closeTaxPreviewModal: this.props.closeModal
                        }), i.createElement(ra.a, {
                            closeOnBackdropClick: !0
                        }))
                    }, t
                }(i.Component);
            var zr, Yr, Gr, qr = Object(E.compose)(Object(Ze.connect)(null, function(e) {
                return Object(E.bindActionCreators)({
                    closeModal: Je.c
                }, e)
            }))(Wr);
            ! function(e) {
                e.RoyaltyHeader = "payout-onboarding-tax-interview__royalty-header", e.RoyaltyButton = "payout-onboarding-tax-interview__royalty-button", e.ServiceHeader = "payout-onboarding-tax-interview__service-header", e.ServiceButton = "payout-onboarding-tax-interview__service-button", e.ContinueButton = "payout-onboarding-tax-interview__continue-button"
            }(zr || (zr = {})),
            function(e) {
                e.Royalty = "Royalty", e.Service = "Service"
            }(Yr || (Yr = {})),
            function(e) {
                e[e.NotStarted = 0] = "NotStarted", e[e.Pending = 1] = "Pending", e[e.Failed = 2] = "Failed", e[e.ActionRequired = 3] = "ActionRequired", e[e.Mismatch = 4] = "Mismatch", e[e.Completed = 5] = "Completed"
            }(Gr || (Gr = {}));
            var Hr = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.handleRoyaltyTaxButtonClick = function() {
                        t.showTaxPreviewModal(Yr.Royalty)
                    }, t.handleServiceTaxButtonClick = function() {
                        t.showTaxPreviewModal(Yr.Service)
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
                        t.props.updateStepDisplayed(pt.OnboardStep.PayoutMethod)
                    }, t
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    return i.createElement(w.a, null, i.createElement(Hn, {
                        title: Object(g.d)("Royalty Tax Interview", "PayoutOnboardingTaxInterview"),
                        statusText: this.royaltyStatusText,
                        statusType: this.royaltyStatusType,
                        borderTop: !0,
                        "data-test-selector": zr.RoyaltyHeader
                    }), i.createElement(m.Va, {
                        padding: 2
                    }, i.createElement(_r, {
                        taxStatus: this.royaltyTaxStatus
                    }), i.createElement(Rr, {
                        taxStatus: this.royaltyTaxStatus,
                        workflow: this.props.workflow,
                        onboardEntity: this.props.onboardEntity
                    }), ![Gr.Completed, Gr.Pending].includes(this.royaltyTaxStatus) && i.createElement(m.z, {
                        type: this.royaltyTaxButtonType,
                        disabled: this.royaltyTaxButtonDisabled,
                        onClick: this.handleRoyaltyTaxButtonClick,
                        "data-test-selector": zr.RoyaltyButton
                    }, this.royaltyTaxButtonText)), i.createElement(Hn, {
                        title: Object(g.d)("Service Tax Interview", "PayoutOnboardingTaxInterview"),
                        statusText: this.serviceStatusText,
                        statusType: this.serviceStatusType,
                        "data-test-selector": zr.ServiceHeader
                    }), i.createElement(m.Va, {
                        padding: 2
                    }, i.createElement(_r, {
                        taxStatus: this.serviceTaxStatus
                    }), i.createElement(Dr, {
                        royaltyTaxCompleted: this.royaltyTaxStatus === Gr.Completed,
                        taxStatus: this.serviceTaxStatus,
                        workflow: this.props.workflow,
                        onboardEntity: this.props.onboardEntity
                    }), ![Gr.Completed, Gr.Pending].includes(this.serviceTaxStatus) && i.createElement(m.z, {
                        type: this.serviceTaxButtonType,
                        disabled: this.serviceTaxButtonDisabled,
                        onClick: this.handleServiceTaxButtonClick,
                        "data-test-selector": zr.ServiceButton
                    }, this.serviceTaxButtonText)), i.createElement(m.xb, {
                        padding: 2,
                        background: m.r.Alt2
                    }, i.createElement(m.z, {
                        "data-test-selector": zr.ContinueButton,
                        disabled: this.continueButtonDisabled,
                        onClick: this.handleContinueClick
                    }, Object(g.d)("Continue", "PayoutOnboardingTaxInterview"))))
                }, Object.defineProperty(t.prototype, "royaltyTaxStatus", {
                    get: function() {
                        if (!this.props.workflow || !this.props.workflow.currentStep) return Gr.NotStarted;
                        switch (this.props.workflow.currentStep) {
                            case pt.WorkflowState.REGISTRATION_NOT_STARTED:
                            case pt.WorkflowState.AGREEMENT_NOT_STARTED:
                            case pt.WorkflowState.ROYALTY_TAX_INTERVIEW_NOT_STARTED:
                                return Gr.NotStarted;
                            case pt.WorkflowState.ROYALTY_TAX_INTERVIEW_PENDING:
                                return Gr.Pending;
                            case pt.WorkflowState.ROYALTY_TAX_INTERVIEW_ACTION_REQUIRED:
                                return Gr.ActionRequired;
                            case pt.WorkflowState.ROYALTY_TAX_INTERVIEW_MISMATCH:
                                return Gr.Mismatch;
                            case pt.WorkflowState.ROYALTY_TAX_INTERVIEW_FAILED:
                                return Gr.Failed;
                            default:
                                return Gr.Completed
                        }
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "serviceTaxStatus", {
                    get: function() {
                        if (!this.props.workflow || !this.props.workflow.currentStep) return Gr.NotStarted;
                        switch (this.props.workflow.currentStep) {
                            case pt.WorkflowState.REGISTRATION_NOT_STARTED:
                            case pt.WorkflowState.AGREEMENT_NOT_STARTED:
                            case pt.WorkflowState.ROYALTY_TAX_INTERVIEW_NOT_STARTED:
                            case pt.WorkflowState.ROYALTY_TAX_INTERVIEW_PENDING:
                            case pt.WorkflowState.ROYALTY_TAX_INTERVIEW_ACTION_REQUIRED:
                            case pt.WorkflowState.ROYALTY_TAX_INTERVIEW_MISMATCH:
                            case pt.WorkflowState.ROYALTY_TAX_INTERVIEW_FAILED:
                            case pt.WorkflowState.SERVICE_TAX_INTERVIEW_NOT_STARTED:
                                return Gr.NotStarted;
                            case pt.WorkflowState.SERVICE_TAX_INTERVIEW_PENDING:
                                return Gr.Pending;
                            case pt.WorkflowState.SERVICE_TAX_INTERVIEW_ACTION_REQUIRED:
                                return Gr.ActionRequired;
                            case pt.WorkflowState.SERVICE_TAX_INTERVIEW_MISMATCH:
                                return Gr.Mismatch;
                            case pt.WorkflowState.SERVICE_TAX_INTERVIEW_FAILED:
                                return Gr.Failed;
                            default:
                                return Gr.Completed
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
                        case Gr.NotStarted:
                            return Object(g.d)("Not Started", "PayoutOnboardingTaxInterview");
                        case Gr.Pending:
                            return Object(g.d)("Under Review", "PayoutOnboardingTaxInterview");
                        case Gr.ActionRequired:
                            return Object(g.d)("Additional Documentation Required", "PayoutOnboardingTaxInterview");
                        case Gr.Mismatch:
                        case Gr.Failed:
                            return Object(g.d)("Failed", "PayoutOnboardingTaxInterview");
                        case Gr.Completed:
                            return Object(g.d)("Completed", "PayoutOnboardingTaxInterview");
                        default:
                            return ""
                    }
                }, t.prototype.getStatusType = function(e) {
                    switch (e) {
                        case Gr.Pending:
                            return m.bb.Prime;
                        case Gr.ActionRequired:
                        case Gr.Mismatch:
                        case Gr.Failed:
                            return m.bb.Alert;
                        case Gr.Completed:
                            return m.bb.Success;
                        default:
                            return
                    }
                }, Object.defineProperty(t.prototype, "royaltyTaxButtonType", {
                    get: function() {
                        return this.royaltyTaxStatus === Gr.Pending || this.royaltyTaxStatus === Gr.ActionRequired ? m.F.Hollow : m.F.Default
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "royaltyTaxButtonDisabled", {
                    get: function() {
                        return this.royaltyTaxStatus === Gr.Completed
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "royaltyTaxButtonText", {
                    get: function() {
                        return this.royaltyTaxStatus === Gr.NotStarted ? Object(g.d)("Begin Royalty Tax Interview", "PayoutOnboardingTaxInterview") : Object(g.d)("Retake Royalty Tax Interview", "PayoutOnboardingTaxInterview")
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "serviceTaxButtonType", {
                    get: function() {
                        return this.serviceTaxStatus === Gr.Pending || this.serviceTaxStatus === Gr.ActionRequired ? m.F.Hollow : m.F.Default
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "serviceTaxButtonDisabled", {
                    get: function() {
                        return this.royaltyTaxStatus !== Gr.Completed || this.serviceTaxStatus === Gr.Completed
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "serviceTaxButtonText", {
                    get: function() {
                        return this.serviceTaxStatus === Gr.NotStarted ? Object(g.d)("Begin Service Tax Interview", "PayoutOnboardingTaxInterview") : Object(g.d)("Retake Service Tax Interview", "PayoutOnboardingTaxInterview")
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "continueButtonDisabled", {
                    get: function() {
                        return this.royaltyTaxStatus !== Gr.Completed || this.serviceTaxStatus !== Gr.Completed
                    },
                    enumerable: !0,
                    configurable: !0
                }), t
            }(i.Component);
            var Qr = Object(s.compose)(Object(Ze.connect)(null, function(e) {
                    return Object(E.bindActionCreators)({
                        showTaxPreviewModal: function(e) {
                            var t = r.__rest(e, []);
                            return Object(Je.d)(qr, t)
                        }
                    }, e)
                }))(Hr),
                Xr = n("4F2d"),
                $r = n("2iEm"),
                Kr = {
                    "data-test-selector": "require-two-factor-enabled__enable-two-factor-message"
                },
                Zr = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        return this.props.data.loading ? i.createElement(w.a, null, i.createElement(_.a, null, i.createElement(m.cb, {
                            lineCount: 4
                        }))) : this.props.data.error ? i.createElement(w.a, null, i.createElement(_.a, null, i.createElement(h.a, {
                            message: Object(g.d)("Oops, something went wrong.", "RequireTwoFactorEnabled")
                        }))) : this.hasTwoFactorEnabled ? i.createElement(i.Fragment, null, this.props.children) : i.createElement(w.a, null, i.createElement(_.a, null, i.createElement(m.V, r.__assign({
                            type: m.Nb.P
                        }, Kr), this.props.enableTwoFactorMessage)), i.createElement(_.a, null, i.createElement($r.a, {
                            to: "/settings/security"
                        }, i.createElement(m.z, null, Object(g.d)("Enable Two-Factor Authentication", "RequireTwoFactorEnabled")))))
                    }, Object.defineProperty(t.prototype, "hasTwoFactorEnabled", {
                        get: function() {
                            return !!(this.props.data.currentUser && this.props.data.currentUser.settings && this.props.data.currentUser.settings.hasTwoFactorEnabled)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t
                }(i.Component),
                Jr = Object(s.compose)(Object(f.a)(Xr))(Zr),
                ei = n("GuWA"),
                ti = function(e) {
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
                        return i.createElement(i.Fragment, null, i.createElement(m.Na, {
                            margin: {
                                bottom: 2
                            }
                        }, i.createElement(m.V, {
                            type: m.Nb.H4
                        }, Object(g.d)("Are you sure you would like to start over?", "StartOverModal"))), i.createElement(m.xb, {
                            borderTop: !0,
                            borderBottom: !0,
                            padding: {
                                y: 2
                            }
                        }, i.createElement(m.Na, {
                            margin: {
                                bottom: 2
                            }
                        }, i.createElement(m.V, {
                            type: m.Nb.P
                        }, Object(g.d)("Your current progress will be lost!", "StartOverModal"))), i.createElement(m.V, {
                            type: m.Nb.P,
                            bold: !0,
                            color: m.O.Error
                        }, Object(g.d)("WARNING: Starting over will lose any progress and make your Twitch account unpayable. We will hold any payouts until you have fully completed the form.", "StartOverModal"))), i.createElement(m.Va, {
                            display: m.W.Flex,
                            justifyContent: m.Ua.Center,
                            padding: {
                                top: 2
                            }
                        }, i.createElement(m.Va, {
                            display: m.W.InlineBlock,
                            margin: {
                                right: 2
                            }
                        }, i.createElement(m.z, {
                            "data-test-selector": "start-over-modal___start-over-button",
                            type: m.F.Text,
                            onClick: this.onStartOverClick,
                            disabled: this.state.canceling
                        }, Object(g.d)("Yes, Start Over", "StartOverModal"))), i.createElement(m.Va, {
                            display: m.W.InlineBlock,
                            margin: {
                                right: 2
                            }
                        }, i.createElement(m.z, {
                            "data-test-selector": "start-over-modal__stay-here-button",
                            onClick: this.props.callCloseModal,
                            disabled: this.state.canceling
                        }, Object(g.d)("No, Stay Here", "StartOverModal"))), this.state.canceling && i.createElement(m.Va, {
                            display: m.W.Flex,
                            justifyContent: m.Ua.Center,
                            flexDirection: m.Y.Column
                        }, i.createElement(m.Xa, null))))
                    }, t
                }(i.Component),
                ni = (n("cMo7"), function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        return i.createElement(m.xb, {
                            className: "start-over-modal__container",
                            background: m.r.Base,
                            padding: 2
                        }, i.createElement(ti, {
                            cancelWorkflow: this.props.cancelWorkflow,
                            callCloseModal: this.props.closeModal
                        }), i.createElement(ra.a, {
                            closeOnBackdropClick: !0
                        }))
                    }, t
                }(i.Component));
            var ai, ri = Object(Ze.connect)(null, function(e) {
                    return Object(E.bindActionCreators)({
                        closeModal: Je.c
                    }, e)
                })(ni),
                ii = n("KBb9"),
                oi = n("N/RI"),
                si = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            stepDisplayed: pt.OnboardStep.Summary,
                            redirectedAlready: !1
                        }, t.backLinkURL = "/" + t.props.channelName + "/dashboard/settings/revenue", t.totalSteps = t.props.onboardEntity === pt.OnboardEntity.CustomPartner ? 5 : 4, t.goBackToSummary = function() {
                            t.setState({
                                stepDisplayed: pt.OnboardStep.Summary
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
                                            return [4, this.props.startWorkflow(r.__assign({}, Object(N.a)({
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
                                            return [4, this.props.cancelWorkflow(r.__assign({}, Object(N.a)({
                                                targetUserID: this.props.data.currentUser.id
                                            })))];
                                        case 1:
                                            return e = n.sent(), t = function(t) {
                                                return t.currentUser.payoutInvite && t.currentUser.payoutInvite.workflow && e.data.cancelPayoutOnboardingWorkflow.workflow && (t.currentUser.payoutInvite.workflow.id = e.data.cancelPayoutOnboardingWorkflow.workflow.id, t.currentUser.payoutInvite.workflow.currentStep = e.data.cancelPayoutOnboardingWorkflow.workflow.currentStep, t.currentUser.payoutInvite.workflow.registration = null, t.currentUser.payoutInvite.workflow.taxMismatchErrors = null), t
                                            }, this.updateContainerQuery(t), this.updateStepDisplayed(pt.OnboardStep.Summary), [2]
                                    }
                                })
                            })
                        }, t.updateContainerQuery = function(e) {
                            Object(N.e)(ii, {}, e)
                        }, t.showStartOverModal = function() {
                            t.props.showStartOverModal({
                                cancelWorkflow: t.cancelWorkflow
                            })
                        }, t
                    }
                    return r.__extends(t, e), Object.defineProperty(t.prototype, "enableTwoFactorMessage", {
                        get: function() {
                            return Object(g.d)("You must enable two-factor authentication to access your onboarding.", "PayoutOnboardingContainer")
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t.prototype.componentDidUpdate = function() {
                        this.shouldRedirectPayoutMethod && this.setState({
                            redirectedAlready: !0,
                            stepDisplayed: pt.OnboardStep.PayoutMethod
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
                            if (e.currentStep !== pt.WorkflowState.PAYOUT_METHOD_NOT_STARTED && e.currentStep !== pt.WorkflowState.PAYOUT_METHOD_PENDING && e.currentStep !== pt.WorkflowState.COMPLETED && e.currentStep !== pt.WorkflowState.REVIEW_PENDING) return !1;
                            var t = Un.parse(this.props.location.search);
                            return !!t && "true" === t.redirect_tipalti
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t.prototype.render = function() {
                        var e = i.createElement(A.a, {
                            title: gr[pt.OnboardStep.Summary].title[this.props.onboardEntity](),
                            description: gr[pt.OnboardStep.Summary].description[this.props.onboardEntity](),
                            linkToParent: this.backLinkURL
                        });
                        if (this.props.data.loading) return i.createElement(w.a, {
                            header: e
                        }, i.createElement(_.a, null, i.createElement(m.cb, {
                            lineCount: 4
                        })));
                        if (this.props.data.error) return i.createElement(w.a, {
                            header: e
                        }, i.createElement(_.a, null, i.createElement(h.a, {
                            message: Object(g.d)("Oops, something went wrong.", "PayoutOnboardingContainer")
                        })));
                        var t = this.props.onboardEntity,
                            n = this.updateStepDisplayed,
                            a = this.props.data.currentUser.payoutInvite.workflow,
                            o = this.updateContainerQuery;
                        if (!a || a.currentStep === pt.WorkflowState.CANCELED) return this.startWorkflow(), i.createElement(w.a, {
                            header: e
                        }, i.createElement(_.a, null, i.createElement(m.cb, {
                            lineCount: 4
                        })));
                        var s, l = {
                            onboardEntity: t,
                            updateStepDisplayed: n,
                            workflow: a,
                            updateContainerQuery: o
                        };
                        switch (this.state.stepDisplayed) {
                            case pt.OnboardStep.Summary:
                                return i.createElement(i.Fragment, null, e, i.createElement(Jr, {
                                    enableTwoFactorMessage: this.enableTwoFactorMessage
                                }, i.createElement(Pr, r.__assign({}, l, {
                                    showStartOverModal: this.showStartOverModal
                                }))));
                            case pt.OnboardStep.Registration:
                                var d = {
                                    channelName: this.props.channelName,
                                    userID: this.props.data.currentUser.id
                                };
                                s = i.createElement(nr, r.__assign({}, l, d));
                                break;
                            case pt.OnboardStep.Agreement:
                                s = i.createElement(Jn, r.__assign({}, l));
                                break;
                            case pt.OnboardStep.TaxInterview:
                                d = {
                                    channelName: this.props.channelName,
                                    showStartOverModal: this.showStartOverModal
                                };
                                s = i.createElement(Qr, r.__assign({}, l, d));
                                break;
                            case pt.OnboardStep.PayoutMethod:
                                s = i.createElement(pa, r.__assign({}, l));
                                break;
                            case pt.OnboardStep.Review:
                                s = i.createElement(ar, r.__assign({}, l))
                        }
                        return i.createElement(i.Fragment, null, i.createElement(A.a, {
                            title: Object(g.d)("Step {numOfCurrentStep} of {numOfTotalSteps}: {stepTitle}", {
                                numOfCurrentStep: Object(g.e)(this.state.stepDisplayed),
                                numOfTotalSteps: Object(g.e)(this.totalSteps),
                                stepTitle: gr[this.state.stepDisplayed].title[this.props.onboardEntity]()
                            }, "PayoutOnboardingContainer"),
                            description: gr[this.state.stepDisplayed].description[this.props.onboardEntity](),
                            onClick: this.goBackToSummary
                        }), i.createElement(Jr, {
                            enableTwoFactorMessage: this.enableTwoFactorMessage
                        }, s))
                    }, t
                }(i.Component);
            var li = Object(E.compose)(Object(f.a)(ii), Object(f.a)(oi, {
                    name: "startWorkflow"
                }), Object(f.a)(ei, {
                    name: "cancelWorkflow"
                }), Object(Bn.a)([{
                    topic: function(e) {
                        return Object(Ne.r)(e.currentUserID)
                    },
                    mapMessageTypesToProps: (ai = {}, ai["*"] = "payoutOnboardingEvent", ai)
                }]), Object(Ze.connect)(null, function(e) {
                    return Object(E.bindActionCreators)({
                        showStartOverModal: function(e) {
                            var t = r.__rest(e, []);
                            return Object(Je.d)(ri, t)
                        }
                    }, e)
                }), Mn.a)(si),
                di = n("0dF/"),
                ci = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return r.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.data.loading && !this.props.data.error || this.props.latencyTracking.reportInteractive()
                    }, t.prototype.componentDidUpdate = function(e) {
                        (e.data.loading && !this.props.data.loading || this.props.data.error) && this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        return this.props.data.loading ? i.createElement(m.Va, {
                            padding: {
                                y: 5
                            }
                        }, i.createElement(m.Xa, {
                            fillContent: !0
                        })) : this.props.data.error ? i.createElement(m.Va, {
                            padding: {
                                y: 5
                            }
                        }, i.createElement(h.a, null)) : this.hasAgreementPendingUpgrade ? i.createElement(d.a, {
                            to: "/" + this.props.match.params.channelName + "/dashboard/settings/revenue/upgrade-terms"
                        }) : i.createElement(li, {
                            channelName: this.props.match.params.channelName,
                            currentUserID: this.props.data.currentUser.id,
                            onboardEntity: this.props.data.currentUser.payoutInvite.category
                        })
                    }, Object.defineProperty(t.prototype, "hasAgreementPendingUpgrade", {
                        get: function() {
                            return !!this.props.data.currentUser.payoutInvite.workflow && this.props.data.currentUser.payoutInvite.workflow.currentStep === pt.WorkflowState.AGREEMENT_PENDING_UPGRADE
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t
                }(i.Component),
                ui = Object(s.compose)(Object(u.c)("PayoutOnboardingPage", {
                    destination: S.a.DashboardSettingsRevenuePayoutOnboarding
                }), Object(y.a)({
                    location: k.PageviewLocation.DashboardSettingsRevenuePayoutOnboarding
                }), Object(f.a)(di))(ci),
                mi = n("+WWT"),
                pi = (n("NEwK"), function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return r.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.data.loading && !this.props.data.error || this.props.latencyTracking.reportInteractive()
                    }, t.prototype.componentDidUpdate = function(e) {
                        (e.data.loading && !this.props.data.loading || this.props.data.error) && this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        if (this.props.data.loading) return i.createElement(m.Va, {
                            padding: {
                                y: 5
                            }
                        }, i.createElement(m.Xa, {
                            fillContent: !0
                        }));
                        if (this.props.data.error) return i.createElement(m.Va, {
                            padding: {
                                y: 5
                            }
                        }, i.createElement(h.a, null));
                        if (!this.isOnboardingComplete) return i.createElement(b.a, null);
                        var e = i.createElement(A.a, {
                            title: Object(g.d)("Change Payout Method", "PayoutSettingsPage"),
                            linkToParent: "/" + this.props.match.params.channelName + "/dashboard/settings/revenue"
                        });
                        return i.createElement(Jr, {
                            enableTwoFactorMessage: Object(g.d)("You must enable two-factor authentication to change your payout method.", "PayoutSettingsPage")
                        }, i.createElement(w.a, {
                            header: e
                        }, i.createElement(_.a, null, i.createElement(oa, {
                            tipaltiURL: this.tipaltiURL
                        }))))
                    }, Object.defineProperty(t.prototype, "isOnboardingComplete", {
                        get: function() {
                            return !!this.props.data.currentUser.payoutInvite.workflow && this.props.data.currentUser.payoutInvite.workflow.currentStep === pt.WorkflowState.COMPLETED
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
                gi = Object(s.compose)(Object(u.c)("PayoutSettingsPage", {
                    destination: S.a.DashboardSettingsRevenuePayoutSettings
                }), Object(y.a)({
                    location: k.PageviewLocation.DashboardSettingsRevenuePayoutSettings
                }), Object(f.a)(mi))(pi),
                hi = n("3Bft"),
                bi = n("0WFu"),
                fi = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onChange = function(e) {
                            t.props.onChange(t.props.index, e.currentTarget.value)
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        return i.createElement(P.a, {
                            label: this.props.label
                        }, i.createElement(m.Pa, {
                            type: m.Ra.Text,
                            maxLength: 50,
                            placeholder: Object(g.d)("Enter the name of your subscription ticket", "SubsNameSettingsSection"),
                            value: this.props.displayName,
                            onChange: this.onChange
                        }), i.createElement(C.a, {
                            text: this.props.description
                        }))
                    }, t
                }(i.Component),
                vi = n("Q7E8"),
                Ei = n("Wuwm"),
                yi = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            displayNames: new Array,
                            saveStatus: O.b.NoChanges
                        }, t.onDisplayNameChange = function(e, n) {
                            return r.__awaiter(t, void 0, void 0, function() {
                                var t;
                                return r.__generator(this, function(a) {
                                    return (t = this.state.displayNames.slice())[e] = n, this.setState({
                                        displayNames: t,
                                        saveStatus: O.b.DirtyChanges
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
                                            e = O.b.Working, this.setState({
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
                                            return r.trys.push([2, 4, , 5]), [4, this.props.updateSubscriptionProduct(Object(N.a)(i))];
                                        case 3:
                                            return r.sent(), e = O.b.Success, [3, 5];
                                        case 4:
                                            return r.sent(), e = O.b.Error, [3, 5];
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
                                case hi.b.Tier1:
                                    return Object(g.d)("Tier 1 Subscription Plan Name", "SubsNameSettingsPage");
                                case hi.b.Tier2:
                                    return Object(g.d)("TIer 2 Subscription Plan Name", "SubsNameSettingsPage");
                                case hi.b.Tier3:
                                    return Object(g.d)("Tier 3 Subscription Plan Name", "SubsNameSettingsPage");
                                default:
                                    return Object(g.d)("Subscription Plan Name", "SubsNameSettingsPage")
                            }
                        }, t.createSubPlanDescription = function(e) {
                            if (e) {
                                var t = Object(bi.a)(e);
                                return null === t && (t = 1), Object(g.d)("Name of your Tier {tierNum} subscription plan that will be visible to everyone", {
                                    tierNum: t
                                }, "SubsNameSettingsPage")
                            }
                            return Object(g.d)("Name of your subscription plan that will be visible to everyone", "SubsNameSettingsPage")
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.componentDidMount = function() {
                        g.o.setPageTitle(Object(g.d)("Subscription Information", "SubsNameSettingsPageTitle")), this.props.data.loading && !this.props.data.error || this.props.latencyTracking.reportInteractive()
                    }, t.prototype.componentDidUpdate = function(e) {
                        (e.data.loading && !this.props.data.loading || this.props.data.error) && this.props.latencyTracking.reportInteractive()
                    }, t.prototype.componentWillMount = function() {
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
                                saveStatus: O.b.NoChanges
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
                                saveStatus: O.b.NoChanges
                            })
                        }
                    }, t.prototype.render = function() {
                        var e = this.props.data,
                            t = e.loading,
                            n = e.error,
                            a = e.user;
                        if (!a || !a.subscriptionProducts) return t ? i.createElement(m.Xa, {
                            fillContent: !0
                        }) : n ? i.createElement(h.a, null) : null;
                        var r = i.createElement(T.a, {
                                status: this.state.saveStatus,
                                onClickSave: this.onClickSave
                            }),
                            o = i.createElement(A.a, {
                                title: Object(g.d)("Subscription Information", "SubsNameSettingsPage"),
                                linkToParent: "/" + this.props.match.params.channelName + "/dashboard/settings/revenue"
                            });
                        return i.createElement(w.a, {
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
                            return i.createElement(fi, {
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
                Si = Object(E.compose)(Object(u.c)("SubsNameSettingsPage", {
                    destination: S.a.DashboardSettingsRevenueSubsNameSettings
                }), Object(y.a)({
                    location: k.PageviewLocation.DashboardSettingsRevenueSubsNameSettings
                }), Object(f.a)(vi, {
                    options: function(e) {
                        return {
                            variables: {
                                login: e.match.params.channelName
                            }
                        }
                    }
                }), Object(f.a)(Ei, {
                    name: "updateSubscriptionProduct"
                }))(yi),
                ki = n("fT/Q"),
                Ni = n("ESve"),
                Oi = n("9C/b"),
                Ti = function(e) {
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
                                var e, t, n, a, i, o;
                                return r.__generator(this, function(s) {
                                    switch (s.label) {
                                        case 0:
                                            return n = this.props.data.currentUser && this.props.data.currentUser.payoutInvite && this.props.data.currentUser.payoutInvite.category, a = this.props.data.currentUser && this.props.data.currentUser.id, n && a ? (this.props.data.currentUser && this.props.data.currentUser.programAgreement ? (e = this.props.data.currentUser.programAgreement.type, t = this.props.data.currentUser.programAgreement.version) : (e = n, t = "v1"), i = r.__assign({}, Object(N.a)({
                                                targetUserID: a,
                                                type: e,
                                                version: t
                                            })), [4, this.props.acceptProgramAgreement(i)]) : [2];
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
                    return r.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.data.loading && !this.props.data.error || (g.o.setPageTitle(this.headerTitle), this.props.latencyTracking.reportInteractive())
                    }, t.prototype.componentDidUpdate = function(e) {
                        (e.data.loading && !this.props.data.loading || this.props.data.error) && (g.o.setPageTitle(this.headerTitle), this.props.latencyTracking.reportInteractive())
                    }, t.prototype.render = function() {
                        if (this.props.data.loading || this.state.redirecting) return i.createElement(m.Va, {
                            padding: {
                                y: 5
                            }
                        }, i.createElement(m.Xa, {
                            fillContent: !0
                        }));
                        if (this.props.data.error) return i.createElement(m.Va, {
                            padding: {
                                y: 5
                            }
                        }, i.createElement(h.a, null));
                        if (!this.hasAgreementPendingUpgrade) return i.createElement(b.a, null);
                        var e = i.createElement(A.a, {
                            title: this.headerTitle,
                            linkToParent: "/" + this.props.match.params.channelName + "/dashboard/settings/revenue"
                        });
                        return i.createElement(Jr, {
                            enableTwoFactorMessage: Object(g.d)("You must enable two-factor authentication to accept your agreement.", "UpgradeTermsPage")
                        }, i.createElement(w.a, {
                            header: e
                        }, i.createElement(_.a, null, i.createElement(m.xb, {
                            borderMarked: !0,
                            padding: 2,
                            elevation: 1
                        }, this.renderAgreement)), this.requiresParentConsent && i.createElement(Qn, {
                            updateParentName: this.updateParentName,
                            updateParentConfirmation: this.updateParentConfirmation
                        }), i.createElement(m.xb, {
                            padding: 2,
                            background: m.r.Alt2
                        }, i.createElement(m.z, {
                            size: m.D.Large,
                            state: this.state.processingAgreement ? m.E.Loading : m.E.Default,
                            onClick: this.handleAgreeClick,
                            disabled: this.proceedButtonDisabled || this.state.processingAgreement
                        }, Object(g.d)("Agree", "UpgradeTermsPage")))))
                    }, Object.defineProperty(t.prototype, "headerTitle", {
                        get: function() {
                            if (!this.props.data.currentUser || !this.props.data.currentUser.payoutInvite) return "";
                            switch (this.props.data.currentUser.payoutInvite.category) {
                                case c.B.AFFILIATE:
                                    return Object(g.d)("Agree to the Twitch Affiliate Agreement", "UpgradeTermsPage");
                                case c.B.STANDARD_PARTNER:
                                case c.B.PREMIUM_PARTNER:
                                    return Object(g.d)("Agree to the Twitch Partner Agreement", "UpgradeTermsPage");
                                default:
                                    return ""
                            }
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "hasAgreementPendingUpgrade", {
                        get: function() {
                            return !!(this.props.data.currentUser && this.props.data.currentUser.payoutInvite && this.props.data.currentUser.payoutInvite.workflow && this.props.data.currentUser.payoutInvite.workflow.currentStep === c.C.AGREEMENT_PENDING_UPGRADE)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "renderAgreement", {
                        get: function() {
                            if (!this.props.data.currentUser || !this.props.data.currentUser.payoutInvite) return null;
                            switch (this.props.data.currentUser.payoutInvite.category) {
                                case c.B.AFFILIATE:
                                    return i.createElement(Yn, null);
                                case c.B.STANDARD_PARTNER:
                                case c.B.PREMIUM_PARTNER:
                                    var e = this.props.data.currentUser.programAgreement;
                                    return e && i.createElement($n, {
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
                            return Object(Wn.differenceInYears)(new Date, e) < 18
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
                Ci = Object(s.compose)(Object(u.c)("UpgradeTermsPage", {
                    destination: S.a.DashboardSettingsRevenueUpgradeTerms
                }), Object(y.a)({
                    location: k.PageviewLocation.DashboardSettingsRevenueUpgradeTerms
                }), Object(f.a)(Ni), Object(f.a)(ki, {
                    name: "acceptProgramAgreement"
                }), Oi.a)(Ti),
                Pi = n("DDis"),
                Ai = function() {
                    return i.createElement(i.Fragment, null, i.createElement(m.Na, {
                        margin: {
                            bottom: 1
                        }
                    }, i.createElement(m.V, {
                        type: m.Nb.H4,
                        bold: !0
                    }, Object(g.d)("Custom Partner Agreement", "CustomPartnerAgreement"))), i.createElement(m.V, {
                        type: m.Nb.P
                    }, Object(g.d)("Please contact <x:link>support</x:link> for a copy of your active Twitch Partner Agreement.", {
                        "x:link": function(e) {
                            return i.createElement(m.T, {
                                to: "https://help.twitch.tv/customer/portal/emails/new",
                                targetBlank: !0
                            }, e)
                        }
                    }, "CustomPartnerAgreement")))
                },
                _i = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return r.__extends(t, e), t.prototype.componentDidMount = function() {
                        g.o.setPageTitle(Object(g.d)("Partner Agreement", "ViewTermsPageTitle")), this.props.data.loading && !this.props.data.error || this.props.latencyTracking.reportInteractive()
                    }, t.prototype.componentDidUpdate = function(e) {
                        (e.data.loading && !this.props.data.loading || this.props.data.error) && this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        if (this.props.data.loading) return i.createElement(m.Va, {
                            padding: {
                                y: 5
                            }
                        }, i.createElement(m.Xa, {
                            fillContent: !0
                        }));
                        if (this.props.data.error) return i.createElement(m.Va, {
                            padding: {
                                y: 5
                            }
                        }, i.createElement(h.a, null));
                        if (!this.canAccessViewTermsPage) return i.createElement(b.a, null);
                        var e = i.createElement(A.a, {
                            title: Object(g.d)("View Active Partner Agreement", "ViewTermsPage"),
                            linkToParent: "/" + this.props.match.params.channelName + "/dashboard/settings/revenue"
                        });
                        return i.createElement(Jr, {
                            enableTwoFactorMessage: Object(g.d)("You must enable two-factor authentication to view your agreement.", "ViewTermsPage")
                        }, i.createElement(w.a, {
                            header: e
                        }, i.createElement(_.a, null, i.createElement(m.xb, {
                            borderMarked: !0,
                            padding: 2,
                            elevation: 1
                        }, this.renderAgreement))))
                    }, Object.defineProperty(t.prototype, "canAccessViewTermsPage", {
                        get: function() {
                            var e = this.props.data.currentUser;
                            return !!e && jt(e.payoutPlans && e.payoutPlans.map(function(e) {
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
                            if (t.isLegacy || t.category === c.B.CUSTOM_PARTNER) return i.createElement(Ai, null);
                            if (t.category === c.B.STANDARD_PARTNER || t.category === c.B.PREMIUM_PARTNER) {
                                var n = this.props.data.currentUser && this.props.data.currentUser.programAgreement;
                                return n && i.createElement($n, {
                                    body: n.body
                                })
                            }
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t
                }(i.Component),
                wi = Object(s.compose)(Object(u.c)("ViewTermsPage", {
                    destination: S.a.DashboardSettingsRevenueViewTerms
                }), Object(y.a)({
                    location: k.PageviewLocation.DashboardSettingsRevenueViewTerms
                }), Object(f.a)(Pi))(_i),
                Ii = n("IFXb"),
                xi = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.inExperiment = "affiliate_access" === g.o.experiments.getAssignment(v.b.SubsAffiliateBadges), n
                    }
                    return r.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.data.loading && !this.props.data.error || this.props.latencyTracking.reportInteractive()
                    }, t.prototype.componentDidUpdate = function(e) {
                        (e.data.loading && !this.props.data.loading || this.props.data.error) && this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        var e = this.props.data,
                            t = e.loading,
                            n = e.error,
                            a = e.channel,
                            r = e.currentUser;
                        return t ? i.createElement(m.Va, {
                            fullHeight: !0
                        }, i.createElement(m.Xa, {
                            fillContent: !0
                        })) : !n && a && r ? this.isChannelOwner || this.isStaff ? a.payoutInvite && a.payoutInvite.category !== c.B.UNPAID_PARTNER ? i.createElement(Ii.a, null, i.createElement(p.a, null, i.createElement(l.a, {
                            path: "/:channelName/dashboard/settings/revenue",
                            exact: !0,
                            component: Kt
                        }), this.isChannelOwner && i.createElement(l.a, {
                            path: "/:channelName/dashboard/settings/revenue/payout-onboarding",
                            component: ui
                        }), this.isChannelOwner && i.createElement(l.a, {
                            path: "/:channelName/dashboard/settings/revenue/payouts",
                            component: gi
                        }), this.isChannelOwner && i.createElement(l.a, {
                            path: "/:channelName/dashboard/settings/revenue/upgrade-terms",
                            component: Ci
                        }), this.isChannelOwner && i.createElement(l.a, {
                            path: "/:channelName/dashboard/settings/revenue/view-terms",
                            component: wi
                        }), (this.isPaidAffiliate || this.isPaidPartner) && i.createElement(l.a, {
                            path: "/:channelName/dashboard/settings/revenue/cheer",
                            component: we
                        }), (this.isPaidAffiliate || this.isPaidPartner) && i.createElement(l.a, {
                            path: "/:channelName/dashboard/settings/revenue/cheerbadges",
                            component: Ee
                        }), (this.isPaidAffiliate || this.isPaidPartner) && i.createElement(l.a, {
                            path: "/:channelName/dashboard/settings/revenue/subscription/chatperks",
                            component: J
                        }), (this.isPaidAffiliate || this.isPaidPartner) && i.createElement(l.a, {
                            path: "/:channelName/dashboard/settings/revenue/subscription/ticket",
                            component: Si
                        }), this.isPaidPartner && i.createElement(l.a, {
                            path: "/:channelName/dashboard/settings/revenue/cheermotes",
                            component: Ke
                        }), this.isPaidPartner && i.createElement(l.a, {
                            path: "/:channelName/dashboard/settings/revenue/game-commerce",
                            component: mt
                        }), this.isPaidPartner && i.createElement(l.a, {
                            path: "/:channelName/dashboard/settings/revenue/merch-by-amazon",
                            component: Ln
                        }), this.canAccessSubBadges && i.createElement(l.a, {
                            path: "/:channelLogin/dashboard/settings/revenue/subscription/badges",
                            component: jn
                        }), i.createElement(l.a, {
                            component: b.a
                        }))) : i.createElement(m.Va, {
                            fullHeight: !0
                        }, i.createElement(b.a, null)) : i.createElement(d.a, {
                            to: "/" + r.login + "/dashboard/live"
                        }) : i.createElement(m.Va, {
                            fullHeight: !0
                        }, i.createElement(h.a, null))
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
                                return e.category === c.A.AFFILIATE && e.isReceivingRevenue
                            }))
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "isPaidPartner", {
                        get: function() {
                            return !!(this.props.data.channel && this.props.data.channel.payoutPlans && this.props.data.channel.payoutPlans.find(function(e) {
                                return e.category === c.A.PARTNER && e.isReceivingRevenue
                            }))
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t
                }(i.Component),
                Ri = Object(s.compose)(Object(u.c)("DashboardRevenueSettingsRoot"), Object(f.a)(o, {
                    options: function(e) {
                        return {
                            variables: {
                                channelName: e.match.params.channelName
                            }
                        }
                    }
                }))(xi);
            n.d(t, "DashboardRevenueSettingsRootComponent", function() {
                return xi
            }), n.d(t, "DashboardRevenueSettingsRoot", function() {
                return Ri
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
                r = n("q1tI"),
                i = n("Ue10"),
                o = (n("KwO+"), function(e) {
                    var t = null;
                    e.footer && (t = r.createElement(i.xb, {
                        padding: 2,
                        background: i.r.Alt2
                    }, e.footer));
                    var n = {};
                    e.header || (n = {
                        topRight: i.x.Medium,
                        topLeft: i.x.Medium
                    });
                    var o = a.__assign({
                        bottomLeft: i.x.Medium,
                        bottomRight: i.x.Medium
                    }, n);
                    return r.createElement(r.Fragment, null, e.header, r.createElement(i.xb, {
                        background: i.r.Base,
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
        "AOL/": function(e, t) {},
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
        E1HD: function(e, t, n) {
            "use strict";
            var a;
            n.d(t, "a", function() {
                    return a
                }),
                function(e) {
                    e.Standard = "STANDARD", e.Premium = "PREMIUM", e.Custom = "CUSTOM", e.Legacy = "LEGACY"
                }(a || (a = {}))
        },
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
        Frl7: function(e, t, n) {
            "use strict";
            var a;
            n.d(t, "a", function() {
                    return a
                }),
                function(e) {
                    e.NAME = "NAME", e.EMAIL = "EMAIL", e.STREET_ADDRESS = "STREET_ADDRESS", e.STREET_ADDRESS_2 = "STREET_ADDRESS_2", e.CITY = "CITY", e.STATE = "STATE", e.COUNTRY = "COUNTRY", e.POSTAL = "POSTAL"
                }(a || (a = {}))
        },
        GuWA: function(e, t) {
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
        HGFl: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return r
            }), n.d(t, "b", function() {
                return i
            }), n.d(t, "c", function() {
                return o
            }), n.d(t, "d", function() {
                return s
            });
            var a = n("NAv5"),
                r = {
                    RFC3399: "YYYY-MM-DDTHH:mm:ssZ",
                    timeString: "h:mma"
                };

            function i(e, t) {
                return Object(a.format)(e, t)
            }

            function o(e) {
                return Object(a.parse)(e)
            }

            function s(e, t) {
                var n = e.split(":");
                if (2 !== n.length) throw new Error("invalid time string: " + e);
                var a = parseInt(n[0], 10),
                    r = parseInt(n[1].substring(0, 2), 10),
                    i = n[1].substring(n[1].length - 2);
                if (12 === a && "am" === i && (a = 0), "pm" === i && a < 12 && (a += 12), isNaN(a) || a < 0 || a > 23 || isNaN(r) || r < 0 || r > 59) throw new Error("invalid time string: " + e);
                var o = t || new Date;
                return o.setHours(a, r), o
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
        HjgX: function(e, t) {},
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
        I4Bt: function(e, t, n) {
            "use strict";
            var a;
            n.d(t, "a", function() {
                    return a
                }),
                function(e) {
                    e.Affiliate = "AFFILIATE", e.Partner = "PARTNER", e.ExtensionsDeveloper = "EXTENSIONS_DEVELOPER"
                }(a || (a = {}))
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
                    end: 303
                }
            };
            n.loc.source = {
                body: "query PayoutOnboardingContainer_CurrentUser {\ncurrentUser {\nid\npayoutInvite {\nid\nworkflow {\nid\ncurrentStep\nregistration {\nbirthdate\ncity\ncompanyName\ncountryCode\nemail\nfirstName\nlastName\nmiddleName\npostal\nstateCode\nstreetAddress\nstreetAddress2\nparentName\nparentEmail\n}\ntaxMismatchErrors\ntimestamp\n}\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        "KwO+": function(e, t, n) {},
        "N/RI": function(e, t) {
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
        Od6W: function(e, t, n) {
            "use strict";
            var a;
            n.d(t, "a", function() {
                    return a
                }),
                function(e) {
                    e[e.Summary = 0] = "Summary", e[e.Registration = 1] = "Registration", e[e.Agreement = 2] = "Agreement", e[e.TaxInterview = 3] = "TaxInterview", e[e.PayoutMethod = 4] = "PayoutMethod", e[e.Review = 5] = "Review"
                }(a || (a = {}))
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
        c0Zc: function(e, t, n) {
            "use strict";
            var a = n("q1tI"),
                r = n("Ue10");

            function i(e) {
                var t = null;
                return e.description && (t = a.createElement(r.Va, {
                    margin: {
                        top: 1
                    }
                }, a.createElement(r.V, {
                    color: r.O.Alt2
                }, e.description))), a.createElement(r.Va, {
                    margin: {
                        bottom: 2
                    }
                }, a.createElement(r.V, {
                    type: r.Nb.H3,
                    fontSize: r.Aa.Size4,
                    color: r.O.Alt,
                    bold: !0
                }, e.title), t)
            }
            n.d(t, "a", function() {
                return i
            })
        },
        cMo7: function(e, t, n) {},
        "ct+5": function(e, t, n) {},
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
        eNg2: function(e, t, n) {
            "use strict";
            var a = n("xMnd");
            n.d(t, "OnboardEntity", function() {
                return a.a
            });
            var r = n("Od6W");
            n.d(t, "OnboardStep", function() {
                return r.a
            });
            var i = n("I4Bt");
            n.d(t, "PayoutCategory", function() {
                return i.a
            });
            var o = n("E1HD");
            n.d(t, "PayoutPlanTag", function() {
                return o.a
            });
            var s = n("AOL/");
            n.o(s, "TaxMismatchError") && n.d(t, "TaxMismatchError", function() {
                return s.TaxMismatchError
            }), n.o(s, "WorkflowState") && n.d(t, "WorkflowState", function() {
                return s.WorkflowState
            });
            var l = n("HjgX");
            n.o(l, "TaxMismatchError") && n.d(t, "TaxMismatchError", function() {
                return l.TaxMismatchError
            }), n.o(l, "WorkflowState") && n.d(t, "WorkflowState", function() {
                return l.WorkflowState
            });
            var d = n("Frl7");
            n.d(t, "TaxMismatchError", function() {
                return d.a
            });
            var c = n("zXPd");
            n.o(c, "WorkflowState") && n.d(t, "WorkflowState", function() {
                return c.WorkflowState
            });
            var u = n("zgPa");
            n.d(t, "WorkflowState", function() {
                return u.a
            })
        },
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
                r = n("Ue10"),
                i = function(e) {
                    return a.createElement(r.Va, {
                        className: "settings-row"
                    }, a.createElement(r.Sa, {
                        linkTo: e.linkTo,
                        type: r.Ta.Alpha
                    }, a.createElement(r.xb, {
                        padding: 2,
                        alignItems: r.f.Center,
                        display: r.W.Flex,
                        flexWrap: r.Z.NoWrap
                    }, a.createElement(r.Va, {
                        flexGrow: 1
                    }, a.createElement(r.V, {
                        fontSize: r.Aa.Size6,
                        bold: !0
                    }, e.text), a.createElement(r.V, {
                        type: r.Nb.Span
                    }, e.description)), a.createElement(r.Va, null, a.createElement(r.mb, {
                        asset: r.nb.AngleRight
                    })))))
                };
            n.d(t, "a", function() {
                return i
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
        xMnd: function(e, t, n) {
            "use strict";
            var a;
            n.d(t, "a", function() {
                    return a
                }),
                function(e) {
                    e.Affiliate = "AFFILIATE", e.ExtensionsDeveloper = "EXTENSIONS_DEVELOPER", e.StandardPartner = "STANDARD_PARTNER", e.PremiumPartner = "PREMIUM_PARTNER", e.CustomPartner = "CUSTOM_PARTNER"
                }(a || (a = {}))
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
        },
        zXPd: function(e, t) {},
        zgPa: function(e, t, n) {
            "use strict";
            var a;
            n.d(t, "a", function() {
                    return a
                }),
                function(e) {
                    e.REGISTRATION_NOT_STARTED = "REGISTRATION_NOT_STARTED", e.AGREEMENT_NOT_STARTED = "AGREEMENT_NOT_STARTED", e.ROYALTY_TAX_INTERVIEW_NOT_STARTED = "ROYALTY_TAX_INTERVIEW_NOT_STARTED", e.ROYALTY_TAX_INTERVIEW_PENDING = "ROYALTY_TAX_INTERVIEW_PENDING", e.ROYALTY_TAX_INTERVIEW_ACTION_REQUIRED = "ROYALTY_TAX_INTERVIEW_ACTION_REQUIRED", e.ROYALTY_TAX_INTERVIEW_MISMATCH = "ROYALTY_TAX_INTERVIEW_MISMATCH", e.ROYALTY_TAX_INTERVIEW_FAILED = "ROYALTY_TAX_INTERVIEW_FAILED", e.SERVICE_TAX_INTERVIEW_NOT_STARTED = "SERVICE_TAX_INTERVIEW_NOT_STARTED", e.SERVICE_TAX_INTERVIEW_PENDING = "SERVICE_TAX_INTERVIEW_PENDING", e.SERVICE_TAX_INTERVIEW_ACTION_REQUIRED = "SERVICE_TAX_INTERVIEW_ACTION_REQUIRED", e.SERVICE_TAX_INTERVIEW_MISMATCH = "SERVICE_TAX_INTERVIEW_MISMATCH", e.SERVICE_TAX_INTERVIEW_FAILED = "SERVICE_TAX_INTERVIEW_FAILED", e.PAYOUT_METHOD_NOT_STARTED = "PAYOUT_METHOD_NOT_STARTED", e.PAYOUT_METHOD_PENDING = "PAYOUT_METHOD_PENDING", e.REVIEW_PENDING = "REVIEW_PENDING", e.COMPLETED = "COMPLETED", e.CANCELED = "CANCELED", e.AGREEMENT_PENDING_UPGRADE = "AGREEMENT_PENDING_UPGRADE"
                }(a || (a = {}))
        }
    }
]);