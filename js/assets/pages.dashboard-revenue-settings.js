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
                        return r.createElement(i.Y, {
                            dragOver: this.state.isDraggingOver,
                            error: this.props.error
                        }, r.createElement(i.Oa, {
                            position: i.eb.Absolute,
                            attachTop: !0,
                            attachLeft: !0,
                            fullWidth: !0,
                            fullHeight: !0,
                            zIndex: i.bc.Above
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
                    return a.createElement(r.yb, {
                        className: "settings-page-header",
                        borderTop: !0,
                        borderRight: !0,
                        borderLeft: !0,
                        borderRadius: {
                            topLeft: r.x.Medium,
                            topRight: r.x.Medium
                        },
                        background: r.r.Base
                    }, a.createElement(r.Ta, {
                        linkTo: e.linkToParent,
                        onClick: e.onClick,
                        type: r.Ua.Alpha
                    }, a.createElement(r.Wa, {
                        display: r.X.Flex,
                        flexWrap: r.Aa.NoWrap
                    }, a.createElement(r.Wa, {
                        display: r.X.Flex,
                        padding: {
                            x: 1
                        }
                    }, a.createElement(r.nb, {
                        asset: r.ob.AngleLeft,
                        height: 20,
                        width: 20
                    })), a.createElement(r.Wa, {
                        flexGrow: 1,
                        margin: 2
                    }, a.createElement(r.W, {
                        bold: !0,
                        fontSize: r.Ba.Size4
                    }, e.title), a.createElement(r.W, {
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
            var a = n("mrSG"),
                r = n("q1tI"),
                i = n("/HQc"),
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
                y = n("V+GM"),
                E = n("NvVO"),
                S = n("2xye"),
                k = n("geRD"),
                O = n("EMHe"),
                N = n("rwxT"),
                T = n("Ww25"),
                C = n("EpBn"),
                P = n("3hKJ"),
                _ = n("BK8n"),
                w = n("7PeK"),
                A = (n("o5vO"), n("I1TM")),
                I = 10,
                x = "prefix",
                D = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            prefix: t.props.prefix || "",
                            saveStatus: O.b.NoChanges
                        }, t.renderBanner = function(e) {
                            return e === d.t.REJECTED ? r.createElement(u.Wa, {
                                className: "emoticon-prefix__rejected-prefix-banner",
                                padding: {
                                    y: 1,
                                    x: 2
                                },
                                margin: {
                                    bottom: 1
                                }
                            }, Object(p.d)("Your prefix has been rejected. Please choose another one.", "EmoticonPrefix")) : r.createElement(u.Wa, {
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
                                n = 0 === t.state.prefix.length ? x : t.state.prefix;
                            return r.createElement(C.a, {
                                label: Object(p.d)("Unique Prefix", "EmoticonPrefix")
                            }, r.createElement(u.Qa, {
                                type: u.Sa.Text,
                                disabled: e === d.t.PENDING,
                                maxLength: I,
                                placeholder: x,
                                value: t.state.prefix,
                                onChange: t.onPrefixChange
                            }), r.createElement(T.a, {
                                text: Object(p.d)("Prefix must begin with a lowercase letter. Prefix must be 3-10 characters in length, all lowercase. Numbers may follow first character.\nExample of how it will work: {prefix}Emotecode", {
                                    prefix: n
                                }, "EmoticonPrefix")
                            }))
                        }, t.renderPendingMessage = function() {
                            return t.props.prefixState === d.t.PENDING && r.createElement(_.a, null, r.createElement(u.W, {
                                bold: !0
                            }, Object(p.d)("Your prefix has been submitted for approval. Thank you for your patience.", "EmoticonPrefix")))
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
                            return a.__awaiter(t, void 0, void 0, function() {
                                var e, t;
                                return a.__generator(this, function(n) {
                                    switch (n.label) {
                                        case 0:
                                            e = O.b.Working, this.setState({
                                                saveStatus: e
                                            }), t = a.__assign({}, Object(k.a)({
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
                    return a.__extends(t, e), t.prototype.render = function() {
                        var e = this.props.prefixState,
                            t = null;
                        e !== d.t.PENDING && (t = r.createElement(N.a, {
                            status: this.state.saveStatus,
                            onClickSave: this.onClickSave
                        }));
                        var n = r.createElement(P.a, {
                            title: Object(p.d)("Emoticon Code Prefix", "EmoticonPrefix"),
                            description: Object(p.d)("Prefix that will be prepended before your emoticon's unique code", "EmoticonPrefix"),
                            linkToParent: "/" + this.props.channelName + "/dashboard/settings/revenue"
                        });
                        return r.createElement(r.Fragment, null, this.renderBanner(e), r.createElement(w.a, {
                            header: n,
                            footer: t
                        }, this.renderPrefixSection(), this.renderPendingMessage()))
                    }, t
                }(r.Component),
                R = Object(v.compose)(Object(b.a)(A, {
                    name: "submitEmoticon"
                }))(D),
                F = n("yvrX"),
                j = n("b6Yk");

            function W(e, t, n, r) {
                return a.__awaiter(this, void 0, void 0, function() {
                    var i, o;
                    return a.__generator(this, function(a) {
                        switch (a.label) {
                            case 0:
                                return [4, j.a.post("v" + p.a.defaultAPIVersion + "/subscriptions/" + e + "/emoticons", {
                                    body: {
                                        code_suffix: r,
                                        product_id: t,
                                        image28_id: n[0],
                                        image56_id: n[1],
                                        image112_id: n[2]
                                    }
                                })];
                            case 1:
                                if (i = a.sent(), (o = i.body).error) throw new Error(o.error.error_code);
                                if (o.emoticon) return [2, {
                                    emoticonID: o.emoticon.id
                                }];
                                throw new Error("Unkown Error")
                        }
                    })
                })
            }
            var L, B = n("/ZC1"),
                U = n("PZVp"),
                M = (n("/uk9"), ["image/*"]);
            ! function(e) {
                e[e.BadImageDimensionsError = 0] = "BadImageDimensionsError", e[e.BadImageError = 1] = "BadImageError", e[e.TimeoutError = 2] = "TimeoutError", e[e.UnknownError = 3] = "UnknownError", e[e.None = 4] = "None", e[e.Uploading = 5] = "Uploading", e[e.Success = 6] = "Success"
            }(L || (L = {}));
            var V, z = function(e) {
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
                            var t, n, r, i, o = this;
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
                                        return t = a.sent(), n = t.url, r = t.uploadId, i = t.imageId, this.unsubscribe = p.l.subscribe({
                                            topic: "upload." + r,
                                            onMessage: function(t) {
                                                switch (o.unsubscribe(), null !== o.timeout && (clearTimeout(o.timeout), o.timeout = null), t.status) {
                                                    case U.a.POSTPROCESS_COMPLETE:
                                                    case U.a.COMPLETE:
                                                        return o.setState({
                                                            url: n,
                                                            status: L.Success
                                                        }), void o.props.uploadEmote(i, o.props.size);
                                                    case U.a.WIDTH_VALIDATION_FAILED:
                                                    case U.a.HEIGHT_VALIDATION_FAILED:
                                                        return void o.setState({
                                                            status: L.BadImageDimensionsError
                                                        });
                                                    case U.a.IMAGE_FORMAT_VALIDATION_FAILED:
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
                            return a.__generator(this, function(r) {
                                switch (r.label) {
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
                                        return t = r.sent(), n = decodeURI(t.upload_configuration.upload_url), [4, fetch(n, {
                                            method: "PUT",
                                            body: e
                                        })];
                                    case 2:
                                        return r.sent(), [2, {
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
                    return t = "" === this.state.url && this.state.status === L.None ? r.createElement(u.Wa, {
                        className: "emotes-upload-picker__image-preview"
                    }, r.createElement(u.Wa, null, r.createElement(u.nb, {
                        asset: u.ob.Plus,
                        type: u.pb.Alt2,
                        height: 15,
                        width: 15
                    }))) : this.state.status === L.Uploading ? r.createElement(u.Wa, null, r.createElement(u.Ya, {
                        fillContent: !0
                    })) : r.createElement(u.Wa, {
                        className: "emotes-upload-picker__image-preview emotes-upload-picker__size-" + this.props.size,
                        position: u.eb.Relative
                    }, this.state.isUploading ? r.createElement(u.Ya, null) : r.createElement("img", {
                        src: "" + this.state.url
                    })), r.createElement(u.yb, {
                        padding: {
                            x: 2,
                            y: 2
                        },
                        display: u.X.InlineBlock
                    }, r.createElement(u.Wa, {
                        margin: {
                            top: 1
                        }
                    }, r.createElement(u.Wa, {
                        className: "emotes-upload-picker__container",
                        display: u.X.InlineFlex,
                        flexDirection: u.Z.Column,
                        position: u.eb.Relative
                    }, r.createElement(B.a, {
                        allowedFileTypes: M,
                        error: void 0 !== e,
                        onFilesSubmitted: this.onImageInputChange
                    }, r.createElement(u.Wa, {
                        padding: .5
                    }, e ? r.createElement(u.W, {
                        color: u.O.Error,
                        wordBreak: u.ac.BreakWord
                    }, e) : t))), r.createElement(u.W, null, Object(p.d)("{width} x {height}px", {
                        width: this.props.size,
                        height: this.props.size
                    }, "EmotesUploadPicker"))))
                }, t
            }(r.Component);
            ! function(e) {
                e[e.Pending = 0] = "Pending", e[e.None = 1] = "None", e[e.Success = 2] = "Success", e[e.CodeNotUnique = 3] = "CodeNotUnique", e[e.Error = 4] = "Error"
            }(V || (V = {}));
            var Y, G = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            code: "",
                            pickers: [],
                            status: V.None
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
                                var e, t, n, r;
                                return a.__generator(this, function(a) {
                                    switch (a.label) {
                                        case 0:
                                            this.setState({
                                                status: V.Pending
                                            }), e = [this.state.emote28 || "", this.state.emote56 || "", this.state.emote112 || ""], a.label = 1;
                                        case 1:
                                            return a.trys.push([1, 4, , 5]), [4, this.props.uploadEmoticon(this.props.channelId, this.props.productId, e, this.state.code && this.transformCode(this.state.code) || "")];
                                        case 2:
                                            return a.sent(), this.setState({
                                                code: "",
                                                emote28: "",
                                                emote56: "",
                                                emote112: "",
                                                status: V.Success
                                            }), [4, this.props.refresh()];
                                        case 3:
                                            for (a.sent(), this.forceUpdate(), t = 0, n = this.state.pickers; t < n.length; t++) n[t].resetEmote();
                                            return [3, 5];
                                        case 4:
                                            return (r = a.sent()) && "CODE_NOT_UNIQUE" === r.message ? this.setState({
                                                status: V.CodeNotUnique
                                            }) : this.setState({
                                                status: V.Error
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
                            return r.createElement(z, {
                                key: e,
                                ref: t.setPickerRef,
                                channelId: t.props.channelId,
                                size: e,
                                uploadEmote: t.uploadEmote
                            })
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        return r.createElement(u.Wa, {
                            margin: {
                                top: 1
                            }
                        }, this.renderStatus(), r.createElement(u.Wa, {
                            margin: {
                                bottom: 1
                            }
                        }, this.renderPicker(28), this.renderPicker(56), this.renderPicker(112)), r.createElement(u.Wa, {
                            margin: {
                                y: 1
                            }
                        }, r.createElement(C.a, {
                            label: Object(p.d)("Unique Code", "EmotesUploader")
                        }, r.createElement(u.Qa, {
                            type: u.Sa.Text,
                            value: this.state.code,
                            onChange: this.onChange
                        }))), r.createElement(u.Wa, {
                            margin: {
                                y: 1
                            }
                        }, r.createElement(C.a, {
                            label: Object(p.d)("Full Emoticon Code Preview", "EmotesUploader")
                        }, this.props.emoticonPrefix, this.state.code && this.transformCode(this.state.code))), r.createElement(u.Wa, {
                            margin: {
                                y: 1
                            }
                        }, r.createElement(C.a, {
                            label: ""
                        }, r.createElement(u.z, {
                            disabled: this.submitDisabled,
                            onClick: this.onClick,
                            "data-test-selector": "upload-emoticon-button"
                        }, Object(p.d)("Submit Changes", "EmotesUploader")))))
                    }, t.prototype.renderStatus = function() {
                        return this.state.status === V.Error ? r.createElement(u.yb, {
                            "data-test-selector": "upload-emoticon-error",
                            borderTop: !0,
                            borderRight: !0,
                            borderBottom: !0,
                            padding: 1,
                            margin: {
                                top: 1
                            },
                            className: "disable-gift-modal__error"
                        }, r.createElement(u.W, null, Object(p.d)("Something went wrong and your request could not be processed at this time. Please try again later.", "EmotesUploader"))) : this.state.status === V.CodeNotUnique ? r.createElement(u.yb, {
                            "data-test-selector": "upload-emoticon-code-invalid",
                            borderTop: !0,
                            borderRight: !0,
                            borderBottom: !0,
                            padding: 1,
                            margin: {
                                top: 1
                            },
                            className: "disable-gift-modal__error"
                        }, r.createElement(u.W, null, Object(p.d)("An emoticon with the same code already exists.", "EmotesUploader"))) : this.state.status === V.Success ? r.createElement(u.yb, {
                            "data-test-selector": "upload-emoticon-success",
                            borderTop: !0,
                            borderRight: !0,
                            borderBottom: !0,
                            padding: 1,
                            margin: {
                                top: 1
                            },
                            className: "disable-gift-modal"
                        }, r.createElement(u.W, null, Object(p.d)("Emoticon was successfully uploaded!", "EmotesUploader"))) : null
                    }, Object.defineProperty(t.prototype, "submitDisabled", {
                        get: function() {
                            return this.state.status === V.Pending || !(this.state.emote112 && this.state.emote56 && this.state.emote28 && this.state.code)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t.prototype.transformCode = function(e) {
                        return e.charAt(0).toUpperCase() + e.slice(1)
                    }, t
                }(r.Component),
                q = (n("N9yH"), function(e) {
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
                            a = r.createElement(u.Wa, {
                                margin: {
                                    left: 1,
                                    right: 2
                                }
                            }, r.createElement(u.N, {
                                label: "",
                                checked: this.state.isChecked,
                                "data-id": n.id,
                                onChange: this.selectForDelete
                            })),
                            i = n.state && "PENDING" === n.state ? Object(p.d)("( Pending )", "ChatEmoticonsSettingsItem") : "";
                        return r.createElement(u.Rb, {
                            display: u.X.Flex,
                            align: u.Sb.Center,
                            label: n.token + i,
                            direction: u.Tb.Bottom
                        }, r.createElement(u.Wa, {
                            display: u.X.InlineBlock,
                            className: "emote-item__img"
                        }, r.createElement(u.S, {
                            alt: Object(p.d)("Emoticon", "ChatEmoticonsSettingsItem"),
                            src: "https://static-cdn.jtvnw.net/emoticons/v1/" + n.id + "/1.0"
                        })), t ? a : null)
                    }, t
                }(r.Component)),
                X = (n("qulQ"), function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        var e = this,
                            t = this.props,
                            n = t.isEditing,
                            a = t.emoticons,
                            i = t.products,
                            o = a.map(function(t, a) {
                                return r.createElement(u.Wa, {
                                    display: u.X.InlineBlock,
                                    key: t.id,
                                    margin: {
                                        y: .5,
                                        right: .5
                                    }
                                }, r.createElement(q, {
                                    emoticon: t,
                                    toggleEmoteForDeletion: e.props.toggleEmoteForDeletion,
                                    isEditing: n
                                }))
                            }),
                            s = this.props.emoticonLimit - o.length;
                        if (s > 0)
                            for (var l = 0; l < s; l++) o.push(r.createElement(u.Wa, {
                                display: u.X.InlineBlock,
                                key: l,
                                margin: {
                                    y: .5,
                                    right: .5
                                },
                                position: u.eb.Relative
                            }, r.createElement("div", {
                                className: "emoticons-list__empty"
                            }, r.createElement(u.Y, null))));
                        var d = i.map(function(t, a) {
                                var i = null;
                                if (0 === t.emotes.length) i = r.createElement(u.yb, {
                                    display: u.X.InlineBlock,
                                    key: a,
                                    margin: {
                                        y: .5,
                                        right: .5
                                    },
                                    position: u.eb.Relative
                                }, r.createElement("div", {
                                    className: "emoticons-list__empty"
                                }, r.createElement(u.Y, null)));
                                else {
                                    var o = t.emotes[0];
                                    i = r.createElement(r.Fragment, null, r.createElement(u.Wa, {
                                        display: u.X.InlineBlock,
                                        key: o.id
                                    }, r.createElement(q, {
                                        emoticon: o,
                                        toggleEmoteForDeletion: e.props.toggleEmoteForDeletion,
                                        isEditing: n
                                    })), r.createElement(u.Wa, {
                                        position: u.eb.Relative,
                                        margin: {
                                            left: .5
                                        },
                                        display: u.X.InlineBlock,
                                        className: "emoticons-list__price"
                                    }, r.createElement(u.W, null, t.price)))
                                }
                                return r.createElement(u.Wa, {
                                    display: u.X.InlineBlock,
                                    key: a,
                                    margin: {
                                        right: 1
                                    }
                                }, i)
                            }),
                            c = Object(p.d)("Emoticons {a}/{b}", {
                                a: a.length,
                                b: this.props.emoticonLimit
                            }, "EmoticonsList"),
                            m = r.createElement(C.a, {
                                label: Object(p.d)("Upload Progress", "EmoticonsList")
                            }, r.createElement(u.Wa, {
                                margin: {
                                    top: 1,
                                    bottom: 2
                                }
                            }, r.createElement(u.W, null, Object(p.d)("Mission: Get {num} Subscriber Points", {
                                num: this.props.maxSubScore
                            }, "EmoticonsList"))), r.createElement(u.Wa, {
                                margin: {
                                    y: 1
                                }
                            }, r.createElement(u.Wa, {
                                display: u.X.InlineBlock
                            }, r.createElement(u.W, null, Object(p.d)("Reward", "EmoticonsList"), ":")), r.createElement(u.Wa, {
                                display: u.X.InlineBlock
                            }, r.createElement(u.W, null, "+", this.props.nextEmoticonLimit - this.props.emoticonLimit, " ", Object(p.d)("Emoticon Slot(s)", "EmoticonsList")))), r.createElement(u.hb, {
                                mask: !0,
                                value: this.props.currentSubScore / this.props.maxSubScore * 100,
                                size: u.jb.Default
                            }), r.createElement(u.Wa, {
                                margin: {
                                    top: 1,
                                    bottom: 2
                                }
                            }, r.createElement(u.W, null, this.props.currentSubScore, "/", this.props.maxSubScore, " ", Object(p.d)("Subscriber Points", "EmoticonsList"))));
                        return r.createElement(r.Fragment, null, r.createElement(C.a, {
                            label: c
                        }, o), r.createElement(C.a, {
                            label: Object(p.d)("Additional Emoticons", "EmoticonsList")
                        }, d, r.createElement(u.Wa, {
                            margin: {
                                y: 1
                            }
                        }, r.createElement(u.W, null, Object(p.d)("1 extra emoticon for $9.99 subscribers, and 1 extra for $24.99 subscribers.", "EmoticonsList")), r.createElement(u.W, null, Object(p.d)("$24.99 subscribers will have access to both emoticons.", "EmoticonsList")))), this.props.nextEmoticonLimit > 0 ? m : null)
                    }, t
                }(r.Component)),
                Q = (n("5Omc"), n("W6a3"));
            ! function(e) {
                e[e.None = 0] = "None", e[e.Error = 1] = "Error", e[e.Success = 2] = "Success"
            }(Y || (Y = {}));
            var H = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            activeTab: 0,
                            isEditing: !1,
                            emotesDeleteQueue: [],
                            deleteStatus: Y.None
                        }, t.renderContent = function() {
                            if (t.props.data.loading) return r.createElement(u.Ya, {
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
                                var i = a.slice(1),
                                    o = a[t.state.activeTab],
                                    s = null,
                                    l = t.props.data.user.subscriberScore.currentEmoteLimit;
                                s = 0 === t.state.activeTab && o.emotes && o.emotes.length < l || t.state.activeTab > 0 && o.emotes.length < 1 ? r.createElement(G, {
                                    refresh: t.refresh,
                                    emoticonPrefix: t.props.emoticonPrefix,
                                    channelId: t.props.data.user.id,
                                    productId: o.id,
                                    uploadEmoticon: W
                                }) : r.createElement(u.Wa, {
                                    margin: {
                                        y: 2
                                    }
                                }, Object(p.d)("You’ve already uploaded an emoticon for your {price} subscription. Please feel free to swap an emoticon for a new one by clicking edit, selecting the emoticon(s) you wish to remove, clicking delete, then submitting a new emoticon in the sizes specified.", {
                                    price: o.price
                                }, "ChatEmoticonsSettingsPage"));
                                var d = t.props.data.user.subscriberScore.nextEmoteLimit || 0,
                                    c = t.props.data.user.subscriberScore.next || 0;
                                return r.createElement(r.Fragment, null, t.renderDeleteError(), t.goodStanding(), r.createElement(u.yb, {
                                    className: "chat-emoticons-settings-page__actions"
                                }, t.state.isEditing ? t.editActions() : r.createElement(u.z, {
                                    onClick: t.toggleEmotesEditing
                                }, Object(p.d)("Edit", "ChatEmoticonsSettingsPage"))), r.createElement(u.Wa, {
                                    padding: {
                                        bottom: 2
                                    }
                                }, r.createElement(X, {
                                    emoticonLimit: t.props.data.user.subscriberScore.currentEmoteLimit,
                                    nextEmoticonLimit: d,
                                    currentSubScore: t.props.data.user.subscriberScore.current,
                                    maxSubScore: c,
                                    emoticons: n,
                                    products: i,
                                    channelName: t.props.channelName,
                                    isEditing: t.state.isEditing,
                                    toggleEmoteForDeletion: t.toggleEmoteForDeletion
                                })), r.createElement(u.Wa, {
                                    padding: {
                                        top: 1,
                                        bottom: 2,
                                        left: 2,
                                        right: 2
                                    }
                                }, r.createElement("h3", null, r.createElement(u.W, null, Object(p.d)("Upload Emoticons", "ChatEmoticonsSettingsPage"))), r.createElement(u.Wa, {
                                    margin: {
                                        top: 3
                                    }
                                }, r.createElement(u.Ab, null, t.getTabs())), s))
                            }
                            return t.renderPageError()
                        }, t.renderPageError = function() {
                            return r.createElement(g.a, {
                                message: Object(p.d)("Failed to get emote settings. Please try again later", "ChatEmoticonsSettingsPage")
                            })
                        }, t.getTabs = function() {
                            return t.props.data.user && t.props.data.user.subscriptionProducts ? t.props.data.user.subscriptionProducts.map(function(e, n) {
                                return e ? r.createElement(u.zb, {
                                    key: e.tier,
                                    active: t.state.activeTab === n,
                                    "data-tab-target": e.tier,
                                    onClick: t.toggleActiveTab
                                }, r.createElement(u.W, null, Object(p.d)("Tier {n}", {
                                    n: n + 1
                                }, "ChatEmoticonsSettingsPage"))) : null
                            }) : null
                        }, t.goodStanding = function() {
                            return t.props.data.user && t.props.data.user.isInGoodStanding ? r.createElement(u.yb, {
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
                                    return r.createElement(u.U, {
                                        to: "https://help.twitch.tv/customer/portal/articles/2348985"
                                    }, e)
                                }
                            }, "ChatEmoticonsSettingsPage")) : null
                        }, t.editActions = function() {
                            return r.createElement(r.Fragment, null, r.createElement(u.z, {
                                type: u.F.Alert,
                                disabled: 0 === t.state.emotesDeleteQueue.length,
                                onClick: t.deleteEmotes
                            }, Object(p.d)("Delete", "ChatEmoticonsSettingsPage")), r.createElement(u.z, {
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
                                return a.__generator(this, function(r) {
                                    switch (r.label) {
                                        case 0:
                                            if (0 === this.state.emotesDeleteQueue.length) return [2];
                                            e = 0, t = this.state.emotesDeleteQueue, r.label = 1;
                                        case 1:
                                            if (!(e < t.length)) return [3, 7];
                                            n = t[e], r.label = 2;
                                        case 2:
                                            return r.trys.push([2, 4, 5, 6]), [4, function(e, t) {
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
                                            return r.sent(), [3, 6];
                                        case 4:
                                            return r.sent(), this.setState({
                                                deleteStatus: Y.Error
                                            }), [2];
                                        case 5:
                                            return this.setState({
                                                deleteStatus: Y.Success,
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
                        var e = r.createElement(P.a, {
                            title: Object(p.d)("Emotes Settings", "EmotesSettingsPage"),
                            description: Object(p.d)("Emoticons that your subscribers can use in Twitch chat", "EmotesSettingsPage"),
                            linkToParent: "/" + this.props.channelName + "/dashboard/settings/revenue"
                        });
                        return r.createElement(w.a, {
                            header: e
                        }, this.renderContent())
                    }, t.prototype.renderDeleteError = function() {
                        return this.state.deleteStatus === Y.Error ? r.createElement(u.yb, {
                            borderTop: !0,
                            borderRight: !0,
                            borderBottom: !0,
                            padding: 1,
                            margin: {
                                top: 1
                            },
                            className: "disable-gift-modal__error"
                        }, r.createElement(u.W, null, Object(p.d)("Something went wrong and your request could not be processed at this time. Please try again later.", "ChatEmoticonsSettingsPage"))) : null
                    }, t
                }(r.Component),
                $ = Object(v.compose)(Object(b.a)(Q, {
                    options: function(e) {
                        return {
                            variables: {
                                login: e.channelName
                            }
                        }
                    }
                }))(H),
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
                        return this.props.data.user && this.props.data.user.id && this.props.data.user.emoticonPrefix && this.props.data.user.emoticonPrefix.state ? this.props.data.user && this.props.data.user.emoticonPrefix.state === d.t.ACTIVE ? r.createElement($, {
                            channelName: this.props.match.params.channelName,
                            emoticonPrefix: this.props.data.user.emoticonPrefix.name
                        }) : r.createElement(R, {
                            channelId: this.props.data.user.id,
                            channelName: this.props.match.params.channelName,
                            prefix: this.props.data.user.emoticonPrefix.name,
                            prefixState: this.props.data.user.emoticonPrefix.state,
                            refetch: this.refetch
                        }) : this.props.data.loading ? r.createElement(u.Ya, {
                            fillContent: !0
                        }) : r.createElement(g.a, {
                            message: Object(p.d)("Failed to get emote settings. Please try again later.", "ChatEmoticonsPage")
                        })
                    }, t
                }(r.Component),
                K = Object(v.compose)(Object(c.b)("ChatEmoticonsPage", {
                    destination: E.a.DashboardSettingsRevenueChatEmoticons
                }), Object(y.a)({
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
                    return r.createElement(u.yb, {
                        display: u.X.Flex,
                        flexDirection: u.Z.Row,
                        background: u.r.Alt,
                        alignItems: u.f.Center,
                        padding: 1
                    }, r.createElement(u.Wa, {
                        margin: {
                            right: 1
                        },
                        display: u.X.Flex,
                        alignContent: u.e.Center
                    }, r.createElement(u.Rb, {
                        label: e.title,
                        "data-test-selector": "tooltip-selector"
                    }, r.createElement("img", {
                        alt: e.title,
                        src: e.imageSrc
                    }))), r.createElement(u.Wa, {
                        flexGrow: 1
                    }, r.createElement(u.W, {
                        "data-test-selector": "threshold-selector"
                    }, Object(p.d)("{threshold} Bit Badge", {
                        threshold: Object(p.f)(e.threshold)
                    }, "ChatBadgeTierItem"))), r.createElement(u.Qb, {
                        onChange: e.onToggle,
                        checked: e.checked,
                        "data-test-selector": "toggle-selector"
                    }, Object(p.d)("Edit", "ChatBadgeTierItem")))
                },
                ne = function() {
                    return r.createElement(u.yb, {
                        padding: 1,
                        display: u.X.Flex,
                        flexDirection: u.Z.Row
                    }, r.createElement(u.Wa, {
                        padding: {
                            right: 1
                        }
                    }, r.createElement(u.db, {
                        width: 20,
                        height: 20
                    })), r.createElement(u.Wa, {
                        flexGrow: 1
                    }, r.createElement(u.db, null)))
                },
                ae = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            saveStatus: O.b.NoChanges
                        }, t.renderTierItems = function() {
                            return t.tiers.map(function(e, n) {
                                var a, i;
                                return e && e.badge ? (a = e.badge.id, i = r.createElement(te, {
                                    threshold: e.threshold,
                                    checked: e.isEnabled,
                                    imageSrc: e.badge.image1x,
                                    title: e.badge.title,
                                    onToggle: t.onItemToggle.bind(t, n)
                                })) : (a = n, i = r.createElement(ne, null)), r.createElement(u.Wa, {
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
                                            }, [4, s(Object(k.b)(d, c))]) : [2];
                                        case 1:
                                            return u = m.sent(), Object(k.e)(J, {
                                                login: i
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
                        return r.createElement(C.a, {
                            label: Object(p.d)("Chat Badge Tiers", "ChatBadgeTiersForm")
                        }, r.createElement(u.Wa, {
                            margin: {
                                bottom: 2
                            }
                        }, r.createElement(u.W, null, Object(p.d)("Choose which Cheer Chat Badges are enabled in your channel. Viewers unlock badges based on total Bits used to Cheer for you. The highest unlocked enabled badge will appear next to viewers' names", "ChatBadgeTiersForm"))), r.createElement(u.Ia, {
                            gutterSize: u.Ja.Medium
                        }, r.createElement(u.P, {
                            cols: {
                                default: 12,
                                sm: 6
                            }
                        }, e.slice(0, Math.floor(e.length / 2))), r.createElement(u.P, {
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
                re = Object(v.compose)(Object(b.a)(J, {
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
                ie = n("ulzF"),
                oe = (n("vyjL"), function(e) {
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
                        return r.createElement(u.yb, {
                            position: u.eb.Relative,
                            padding: 5,
                            background: u.r.Alt
                        }, r.createElement(B.a, {
                            allowedFileTypes: [".png"],
                            onFilesSubmitted: this.onFilesSubmitted,
                            error: t
                        }, r.createElement(u.yb, {
                            position: u.eb.Absolute,
                            attachTop: !0,
                            attachLeft: !0,
                            fullWidth: !0,
                            fullHeight: !0,
                            display: u.X.Flex,
                            flexDirection: u.Z.Column,
                            alignItems: u.f.Center,
                            justifyContent: u.Va.Center,
                            className: "chat-badge-drop-zone__content"
                        }, n)))
                    }, t
                }(r.Component));
            var se, le = function(e, t) {
                    return a.__awaiter(void 0, void 0, void 0, function() {
                        var n, r, i;
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
                                    return n = a.sent(), r = n.height, i = n.width, [2, r === t.height && i === t.width]
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
                                var r;
                                if (t.tiers) {
                                    var i = t.tiers[n.selectedIndex],
                                        o = {};
                                    return e && (o = a.__assign({}, n.stagedImageURLs[i.threshold], e)), {
                                        stagedImageURLs: a.__assign({}, n.stagedImageURLs, (r = {}, r[i.threshold] = o, r)),
                                        saveStatus: o && o.image1x && o.image2x && o.image4x ? O.b.DirtyChanges : O.b.NoChanges,
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
                                            }, [4, r(Object(k.b)(s, l))]) : [2] : [2];
                                        case 1:
                                            return d = u.sent(), Object(k.e)(de, {
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
                                                        imageData1x: Object(ie.b)(d.image1x),
                                                        imageData2x: Object(ie.b)(d.image2x),
                                                        imageData4x: Object(ie.b)(d.image4x)
                                                    }]
                                                }
                                            }, this.setState({
                                                saveStatus: O.b.Working
                                            }), m.label = 1;
                                        case 1:
                                            return m.trys.push([1, 3, , 4]), [4, o(Object(k.a)(c))];
                                        case 2:
                                            return u = m.sent(), Object(k.e)(de, {
                                                login: s
                                            }, function(e) {
                                                if (e.user && e.user.settings && e.user.settings.cheer && e.user.settings.cheer.badges && u.data.updateCheerPartnerSettings && u.data.updateCheerPartnerSettings.cheer && u.data.updateCheerPartnerSettings.cheer.badges) {
                                                    var t = u.data.updateCheerPartnerSettings.cheer.badges.tiers[n],
                                                        r = e.user.settings.cheer.badges.tiers[n];
                                                    t && t.badge && r && r.badge && (r.badge = a.__assign({}, r.badge, t.badge))
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
                    return a.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.data.loading && !this.props.data.error || this.props.latencyTracking.reportInteractive()
                    }, t.prototype.componentDidUpdate = function(e) {
                        (e.data.loading && !this.props.data.loading || this.props.data.error) && this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        var e = this.state,
                            t = e.selectedIndex,
                            n = e.stagedImageURLs,
                            a = e.saveStatus,
                            i = e.image1xError,
                            o = e.image2xError,
                            s = e.image4xError;
                        if (!this.tiers) return null;
                        var l, d, c, m, g = this.tiers[t];
                        g.badge && g.badge.user && (l = r.createElement(u.z, {
                            onClick: this.onRevertButtonClick,
                            type: u.F.Hollow,
                            fullWidth: !0
                        }, Object(p.d)("Reset to Default Badge", "ChatBadgeUploadForm")), d = g.badge.image1x, c = g.badge.image2x, m = g.badge.image4x);
                        var h = n[g.threshold];
                        return h && (d = h.image1x || d, c = h.image2x || c, m = h.image4x || m), r.createElement(C.a, {
                            label: Object(p.d)("Upload Badge Images", "ChatBadgeUploadForm")
                        }, r.createElement(u.Ia, null, r.createElement(u.P, {
                            cols: {
                                default: 12,
                                sm: 5
                            }
                        }, r.createElement(u.tb, {
                            onChange: this.onSelectChange,
                            value: String(g.threshold)
                        }, this.tiers.map(function(e) {
                            return r.createElement("option", {
                                key: e.threshold,
                                value: e.threshold,
                                disabled: e.threshold < 1e3
                            }, " ", Object(p.d)("{threshold} Bit Badge", {
                                threshold: Object(p.f)(e.threshold)
                            }, "ChatBadgeUploadForm"))
                        })))), r.createElement(u.Ia, null, r.createElement(u.P, {
                            cols: {
                                default: 12,
                                sm: 8
                            }
                        }, r.createElement(u.Wa, {
                            display: u.X.Flex,
                            justifyContent: u.Va.Between,
                            margin: {
                                y: 2
                            }
                        }, r.createElement(u.Wa, {
                            display: u.X.InlineFlex,
                            flexDirection: u.Z.Column,
                            alignItems: u.f.Center
                        }, r.createElement(oe, {
                            onImageSubmit: this.onNormalImageSubmitted,
                            error: i
                        }, d ? r.createElement("img", {
                            src: d,
                            height: 18,
                            width: 18
                        }) : r.createElement(u.nb, {
                            asset: u.ob.Plus,
                            height: 32,
                            width: 32
                        })), r.createElement(u.W, {
                            color: i ? u.O.Error : u.O.Base
                        }, Object(p.d)("18 x 18px", "ChatBadgeUploadForm"))), r.createElement(u.Wa, {
                            display: u.X.InlineFlex,
                            flexDirection: u.Z.Column,
                            alignItems: u.f.Center
                        }, r.createElement(oe, {
                            onImageSubmit: this.onDoubleImageSubmitted,
                            error: o
                        }, c ? r.createElement("img", {
                            src: c,
                            height: 36,
                            width: 36
                        }) : r.createElement(u.nb, {
                            asset: u.ob.Plus,
                            height: 32,
                            width: 32
                        })), r.createElement(u.W, {
                            color: o ? u.O.Error : u.O.Base
                        }, Object(p.d)("36 x 36px", "ChatBadgeUploadForm"))), r.createElement(u.Wa, {
                            display: u.X.InlineFlex,
                            flexDirection: u.Z.Column,
                            alignItems: u.f.Center
                        }, r.createElement(oe, {
                            onImageSubmit: this.onQuadrupleImageSubmitted,
                            error: s
                        }, m ? r.createElement("img", {
                            src: m,
                            height: 72,
                            width: 72
                        }) : r.createElement(u.nb, {
                            asset: u.ob.Plus,
                            height: 32,
                            width: 32
                        })), r.createElement(u.W, {
                            color: s ? u.O.Error : u.O.Base
                        }, Object(p.d)("72 x 72px", "ChatBadgeUploadForm")))))), r.createElement(u.Ia, {
                            gutterSize: u.Ja.Medium
                        }, r.createElement(u.P, {
                            cols: 4
                        }, r.createElement(O.a, {
                            status: a,
                            onClick: this.onSaveButtonClick,
                            fullWidth: !0
                        }, Object(p.d)("Upload Badge Images", "ChatBadgeUploadFormSaveButton"))), r.createElement(u.P, {
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
                            a = r.createElement(P.a, {
                                title: Object(p.d)("Cheer Chat Badge Settings", "CheerBadgesSettingsPage"),
                                description: Object(p.d)("Custom settings for Cheer chat badges", "CheerBadgesSettingsPage"),
                                linkToParent: "/" + t.params.channelName + "/dashboard/settings/revenue"
                            });
                        return r.createElement(w.a, {
                            header: a
                        }, r.createElement(re, {
                            channelName: t.params.channelName
                        }), n.user && n.user.roles && n.user.roles.isPartner && r.createElement(he, {
                            channelName: t.params.channelName
                        }))
                    }, t
                }(r.Component),
                ve = Object(v.compose)(Object(c.b)("CheerBadgesSettingsPage", {
                    destination: E.a.DashboardSettingsRevenueCheerBadges
                }), Object(y.a)({
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
                ye = n("G1cX"),
                Ee = n("eDVu"),
                Se = n("WQCf"),
                ke = n("/aPz");
            ! function(e) {
                e.ALLTIME = "ALLTIME", e.MONTH = "MONTH", e.WEEK = "WEEK"
            }(se || (se = {}));
            var Oe, Ne = n("TEIt"),
                Te = n("7LUr"),
                Ce = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onLeaderboardEnabledCheckBoxClick = function(e) {
                            return a.__awaiter(t, void 0, void 0, function() {
                                var t, n, r, i, o, s, l, d, c;
                                return a.__generator(this, function(a) {
                                    switch (a.label) {
                                        case 0:
                                            if (t = e.currentTarget.checked, n = this.props, r = n.setPinnedCheerSettings, i = n.data, o = n.channelName, !(i.user && i.user.id && i.user.settings && i.user.settings.cheer)) return [2];
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
                                            }, a.label = 1;
                                        case 1:
                                            return a.trys.push([1, 3, , 4]), [4, r(Object(k.b)(s, d))];
                                        case 2:
                                            return c = a.sent(), Object(k.e)(Te, {
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
                                var t, n, r, i, o, s, l, d, c;
                                return a.__generator(this, function(a) {
                                    switch (a.label) {
                                        case 0:
                                            if (t = e.currentTarget.value, n = this.props, r = n.setPinnedCheerSettings, i = n.data, o = n.channelName, !(i.user && i.user.id && i.user.settings && i.user.settings.cheer)) return [2];
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
                                            }, a.label = 1;
                                        case 1:
                                            return a.trys.push([1, 3, , 4]), [4, r(Object(k.b)(s, d))];
                                        case 2:
                                            return c = a.sent(), Object(k.e)(Te, {
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
                        return e.user && e.user.settings && e.user.settings.cheer && (t = e.user.settings.cheer.leaderboard.isEnabled, n = e.user.settings.cheer.leaderboard.timePeriod), r.createElement(w.a, null, r.createElement(C.a, {
                            label: Object(p.d)("Enable Top Cheerers", "PinnedCheerSettings")
                        }, r.createElement(u.N, {
                            label: Object(p.d)("Enable Top Cheerers", "PinnedCheerSettingsCheckBox"),
                            checked: t,
                            onChange: this.onLeaderboardEnabledCheckBoxClick,
                            "data-test-selector": "top-cheerers-checkbox-selector"
                        }), r.createElement(T.a, {
                            text: Object(p.d)("Pin Top Cheerers to the top of your chat.", "PinnedCheerSettings")
                        })), r.createElement(C.a, {
                            label: Object(p.d)("Top Cheerers Time Range", "PinnedCheerSettings")
                        }, r.createElement(u.Wa, null, r.createElement(u.kb, {
                            label: Object(p.d)("Weekly", "PinnedCheerSettings"),
                            value: se.WEEK,
                            checked: n === se.WEEK,
                            onChange: this.onLeaderboardTimePeriodRadioButtonClick
                        })), r.createElement(u.Wa, {
                            margin: {
                                y: 1
                            }
                        }, r.createElement(u.kb, {
                            label: Object(p.d)("Monthly", "PinnedCheerSettings"),
                            value: se.MONTH,
                            checked: n === se.MONTH,
                            onChange: this.onLeaderboardTimePeriodRadioButtonClick
                        })), r.createElement(u.Wa, {
                            margin: {
                                y: 1
                            }
                        }, r.createElement(u.kb, {
                            label: Object(p.d)("All-Time", "PinnedCheerSettings"),
                            value: se.ALLTIME,
                            checked: n === se.ALLTIME,
                            onChange: this.onLeaderboardTimePeriodRadioButtonClick
                        })), r.createElement(T.a, {
                            text: Object(p.d)("Choose Weekly for a leaderboard that automatically resets every Monday 12:01AM PT. Choose Monthly to reset every 1st day of the month. Choose All-Time for a leaderboard that tracks the Top Cheerers in your channel for all time, starting from when Bits launched in June of 2016.", "PinnedCheerSettings")
                        })))
                    }, t
                }(r.Component),
                Pe = Object(v.compose)(Object(b.a)(Te, {
                    options: function(e) {
                        return {
                            variables: {
                                login: e.channelName
                            }
                        }
                    }
                }), Object(b.a)(Ne, {
                    name: "setPinnedCheerSettings"
                }), Object(c.b)("PinnedCheerSettingsForm"), Object(Ee.a)(function(e) {
                    return {
                        query: Te,
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
                _e = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(t, e), t.prototype.componentDidMount = function() {
                        p.p.setPageTitle(Object(p.d)("Pinned and Top Cheers Settings", "CheerSettingsPageTitle"))
                    }, t.prototype.render = function() {
                        var e = this.props.match;
                        return r.createElement(u.Wa, null, r.createElement(P.a, {
                            title: Object(p.d)("Top Cheerers Settings", "CheerSettingsPage"),
                            description: Object(p.d)("Custom settings for Top Cheerers", "CheerSettingsPage"),
                            linkToParent: "/" + e.params.channelName + "/dashboard/settings/revenue"
                        }), r.createElement(Pe, {
                            channelName: e.params.channelName
                        }))
                    }, t
                }(r.Component),
                we = Object(v.compose)(Object(c.b)("CheerSettingsPage", {
                    autoReportInteractive: !0,
                    destination: E.a.DashboardSettingsRevenueCheer
                }), Object(y.a)({
                    location: S.PageviewLocation.DashboardSettingsRevenueCheer
                }))(_e),
                Ae = n("Cusz"),
                Ie = n("Akna"),
                xe = (n("Nz9P"), function(e) {
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
                                            }, l = Object(k.a)(s), a.label = 1;
                                        case 1:
                                            return a.trys.push([1, 3, , 4]), [4, r(l)];
                                        case 2:
                                            return d = a.sent(), Object(k.e)(Ie, {
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
                            a = r.createElement(u.db, {
                                width: 100,
                                height: 18
                            });
                        !e.loading && !e.error && e.user && e.user.settings && e.user.settings.cheer && (n = e.user.settings.cheer.customPrefix.isEnabled, a = r.createElement(u.W, {
                            bold: !0
                        }, e.user.settings.cheer.customPrefix.prefix));
                        var i = this.tiers.map(function(e, t) {
                                var n = e.images[0];
                                return r.createElement(u.yb, {
                                    key: n ? n.id : t,
                                    background: u.r.Alt2,
                                    border: !0,
                                    className: "cheermote-enable-form__cheermote-preview",
                                    margin: {
                                        right: 4 === t ? 0 : 1
                                    },
                                    display: u.X.InlineFlex
                                }, r.createElement("img", {
                                    src: n ? n.url : ""
                                }))
                            }),
                            o = this.tiers.filter(function(e) {
                                return e.images && e.images[0] && e.images[0].url
                            }).length;
                        return r.createElement(C.a, {
                            label: Object(p.d)("Enable Cheermotes", "CheermtoesEnableForm")
                        }, r.createElement(u.Qb, {
                            checked: n,
                            onChange: this.onItemToggle,
                            error: t
                        }), r.createElement(u.Wa, {
                            margin: {
                                top: .5
                            }
                        }, r.createElement(u.W, {
                            color: u.O.Alt2
                        }, Object(p.d)("Upload images for all tiers to enable your Cheermote.", "CheermotesEnableForm"))), r.createElement(u.Wa, {
                            padding: {
                                y: 2
                            }
                        }, r.createElement(u.W, {
                            color: u.O.Alt2
                        }, Object(p.d)("Cheermote Code", "CheermotesEnableForm")), a), r.createElement(u.Wa, null, r.createElement(u.W, {
                            type: u.Ob.Span,
                            color: u.O.Alt2
                        }, Object(p.d)("Tiers", "CheermotesEnableForm")), " ", r.createElement(u.W, {
                            type: u.Ob.Span,
                            color: 5 === o ? u.O.Base : u.O.Error
                        }, Object(p.d)("{tierNum}/{totalTiers}", {
                            tierNum: o,
                            totalTiers: 5
                        }, "CheermotesEnableForm")), r.createElement(u.Ia, null, r.createElement(u.P, {
                            cols: 4
                        }, r.createElement(u.Wa, {
                            margin: {
                                top: .5
                            },
                            display: u.X.Flex,
                            justifyContent: u.Va.Between
                        }, i)))))
                    }, Object.defineProperty(t.prototype, "tiers", {
                        get: function() {
                            var e, t = this.props.data;
                            return t.user && t.user.settings && t.user.settings.cheer && t.user.settings.cheer.customPrefix.tiers && t.user.settings.cheer.customPrefix.tiers.length > 0 && (e = t.user.settings.cheer.customPrefix.tiers), e || []
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t
                }(r.Component)),
                De = Object(o.compose)(Object(b.a)(Ie, {
                    name: "data",
                    options: function(e) {
                        return {
                            variables: {
                                login: e.channelName
                            }
                        }
                    }
                }), Object(b.a)(Ae, {
                    name: "setCheermotesEnable"
                }), Object(c.b)("CheermotesEnableForm"))(xe),
                Re = (n("4VZt"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onFilesSubmitted = function(e) {
                            var n = e[0];
                            t.props.onImageSubmit && t.props.onImageSubmit(n, t.props.dpiScale)
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        var e = this.props.children;
                        return r.createElement(u.Wa, {
                            className: "cheermote-upload-drop-zone",
                            display: u.X.Flex,
                            flexDirection: u.Z.Column
                        }, r.createElement(u.yb, {
                            className: "cheermote-upload-drop-zone__drop-zone",
                            position: u.eb.Relative,
                            padding: 5,
                            background: u.r.Alt
                        }, r.createElement(B.a, {
                            allowedFileTypes: [".png", ".gif"],
                            onFilesSubmitted: this.onFilesSubmitted,
                            error: this.props.error
                        }, r.createElement(u.yb, {
                            position: u.eb.Absolute,
                            attachTop: !0,
                            attachLeft: !0,
                            fullWidth: !0,
                            fullHeight: !0,
                            display: u.X.Flex,
                            flexDirection: u.Z.Column,
                            alignItems: u.f.Center,
                            justifyContent: u.Va.Center
                        }, e))), r.createElement(u.Wa, {
                            textAlign: u.Kb.Center,
                            padding: {
                                top: 1
                            }
                        }, r.createElement(u.W, null, Object(p.d)("{dimension} x {dimension}px", {
                            dimension: this.props.dimension
                        }, "CheermoteUploadDropZone"))))
                    }, t
                }(r.Component));

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
            var je, We, Le, Be = ((Oe = {})[1] = 28, Oe[1.5] = 42, Oe[2] = 56, Oe[3] = 84, Oe[4] = 112, Oe),
                Ue = function(e) {
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
                                            return a.trys.push([1, 3, , 4]), [4, Fe(this.props.channelID, t)];
                                        case 2:
                                            return r = a.sent(), this.props.onImageSubmitted(this.props.tier, e, r, Be[n]), [3, 4];
                                        case 3:
                                            return i = a.sent(), this.props.onImageSubmissionError("advanced", i), [3, 4];
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
                                var a = Be[n.dpiScale];
                                return r.createElement(u.Wa, {
                                    key: n.dpiScale,
                                    padding: {
                                        bottom: 1
                                    }
                                }, r.createElement(Re, {
                                    onImageSubmit: e.onImageSubmitted,
                                    dimension: a,
                                    dpiScale: n.dpiScale,
                                    error: !!e.props.uploadError && !!t && a === t
                                }, n.url ? r.createElement("img", {
                                    src: n.url,
                                    height: a,
                                    width: a
                                }) : r.createElement(u.nb, {
                                    asset: u.ob.Plus,
                                    height: 32,
                                    width: 32
                                })))
                            });
                        return r.createElement(u.Wa, {
                            justifyContent: u.Va.Between,
                            display: u.X.Flex,
                            flexDirection: u.Z.Row,
                            flexWrap: u.Aa.Wrap
                        }, n)
                    }, t
                }(r.PureComponent),
                Me = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        return this.props.imageSrc && r.createElement(u.yb, {
                            background: u.r.Alt,
                            display: u.X.Flex,
                            alignItems: u.f.Center,
                            padding: 1
                        }, r.createElement("img", {
                            src: this.props.imageSrc,
                            height: 28,
                            width: 28
                        }), r.createElement(u.Wa, {
                            padding: {
                                left: 1
                            }
                        }, r.createElement(u.W, null, Object(p.d)("This is a preview of a chat message with your Cheermote!", "CheermotePreviewBar"))))
                    }, t
                }(r.PureComponent),
                Ve = (n("EACF"), function(e) {
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
                                            return a.trys.push([1, 3, , 4]), [4, Fe(this.props.channelID, t)];
                                        case 2:
                                            return n = a.sent(), this.props.onImageSubmitted(this.props.tier, e, n, 112), [3, 4];
                                        case 3:
                                            return r = a.sent(), this.props.onImageSubmissionError("simple", r), [3, 4];
                                        case 4:
                                            return [2]
                                    }
                                })
                            })
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        return r.createElement(Re, {
                            onImageSubmit: this.onImageSubmitted,
                            dimension: 112,
                            error: !!this.props.uploadError
                        }, this.props.image ? r.createElement("img", {
                            src: this.props.image,
                            height: 112,
                            width: 112
                        }) : r.createElement(u.nb, {
                            asset: u.ob.Plus,
                            height: 32,
                            width: 32
                        }))
                    }, t
                }(r.PureComponent)),
                ze = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        return r.createElement(u.rb, null, r.createElement(u.sb, {
                            name: this.props.name,
                            value: this.props.left,
                            checked: this.props.selected === this.props.left,
                            label: this.props.leftTitle,
                            onChange: this.props.onToggle,
                            defaultChecked: !0
                        }), r.createElement(u.sb, {
                            name: this.props.name,
                            value: this.props.right,
                            checked: this.props.selected === this.props.right,
                            onChange: this.props.onToggle,
                            label: this.props.rightTitle
                        }))
                    }, t
                }(r.PureComponent);
            n("3rX6");
            ! function(e) {
                e.Simple = "simple", e.Advanced = "advanced"
            }(je || (je = {})),
            function(e) {
                e.Light = "light", e.Dark = "dark"
            }(We || (We = {})),
            function(e) {
                e.Animated = "animated", e.Static = "static"
            }(Le || (Le = {}));
            var Ye = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        uploadType: je.Simple,
                        background: We.Light,
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
                    }, t.onSimpleImageSubmitted = function(e, n, a, r) {
                        t.uploadImageProgress(e, n, a, je.Simple, r, function(e, n) {
                            t.props.onSimpleImageSubmitted(e, n)
                        })
                    }, t.onAdvancedImageUpload = function(e, n, a, r) {
                        t.uploadImageProgress(e, n, a, je.Advanced, r, function(e, n) {
                            t.props.onAdvancedImageSubmitted(e, n[0])
                        })
                    }, t.uploadImageProgress = function(e, n, r, i, o, s) {
                        t.unsubscribe = p.l.subscribe({
                            topic: Object(ke.A)(r.uploadID),
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
                                                }(r.uploadURL, n)];
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
                                return a.__awaiter(t, void 0, void 0, function() {
                                    return a.__generator(this, function(t) {
                                        switch (n.status) {
                                            case U.a.COMPLETE:
                                                s(e, r.imageURLs), this.setState({
                                                    uploading: !1
                                                }), this.unsubscribe && this.unsubscribe();
                                                break;
                                            case U.a.POSTPROCESS_COMPLETE:
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
                            case U.a.FILE_SIZE_VALIDATION_FAILED:
                                r = Object(p.d)("Please make sure you file is under 500kb", "CheermoteUploadArea");
                                break;
                            case U.a.IMAGE_FORMAT_VALIDATION_FAILED:
                                r = Object(p.d)("Please make sure your image is the correct format for uploading", "CheermoteUploadArea");
                                break;
                            case U.a.HEIGHT_VALIDATION_FAILED:
                            case U.a.WIDTH_VALIDATION_FAILED:
                                r = Object(p.d)("Image must be {d} x {d}px", {
                                    d: a
                                }, "CheermoteUploadArea");
                                break;
                            case U.a.ASPECT_RATIO_VALIDATION_FAILED:
                                r = Object(p.d)("Please ensure your image has the correct aspect ratio for the dimension you are uploading", "CheermoteUploadArea");
                                break;
                            case U.a.FEATURE_SERVICE_FAILED:
                                r = Object(p.d)("Failed to save new images. Please try again.", "CheermoteUploadArea");
                                break;
                            default:
                                r = Object(p.d)("Something went wrong. Please try again", "CheermoteUploadArea")
                        }
                        t.setState({
                            simpleLoadingError: n === je.Simple ? r : void 0,
                            advancedLoadingError: n === je.Advanced ? r : void 0,
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
                    if (!this.props.uploadTier) return r.createElement(u.db, null);
                    var t = [],
                        n = (t = this.props.uploadTier.images.filter(function(t) {
                            return (t.isAnimated && e.state.animation === Le.Animated || !t.isAnimated && e.state.animation === Le.Static) && t.theme.toLowerCase() === e.state.background
                        }).slice().sort(function(e, t) {
                            return t.dpiScale - e.dpiScale
                        })).find(function(e) {
                            return 4 === e.dpiScale
                        });
                    return r.createElement(u.Wa, {
                        className: "cheermote-upload-area"
                    }, r.createElement(u.Wa, {
                        display: u.X.Flex,
                        flexDirection: u.Z.Column
                    }, r.createElement(u.Wa, {
                        display: u.X.Flex
                    }, r.createElement(ze, {
                        name: "cheermote-upload-wizard-type",
                        selected: this.state.uploadType,
                        left: je.Simple,
                        leftTitle: Object(p.d)("Simple", "CheermoteUploadArea"),
                        right: je.Advanced,
                        rightTitle: Object(p.d)("Advanced", "CheermoteUploadArea"),
                        onToggle: this.onUploadTypeChange
                    }), this.state.uploadType === je.Advanced && r.createElement(u.Wa, {
                        padding: {
                            x: 2
                        }
                    }, r.createElement(ze, {
                        name: "cheermote-background",
                        selected: this.state.background,
                        left: We.Light,
                        leftTitle: Object(p.d)("Light", "CheermoteUploadArea"),
                        right: We.Dark,
                        rightTitle: Object(p.d)("Dark", "CheermoteUploadArea"),
                        onToggle: this.onBackgroundChange
                    })), this.state.uploadType === je.Advanced && r.createElement(ze, {
                        name: "cheermote-animation",
                        selected: this.state.animation,
                        left: Le.Animated,
                        leftTitle: Object(p.d)("Animated", "CheermoteUploadArea"),
                        right: Le.Static,
                        rightTitle: Object(p.d)("Static", "CheermoteUploadArea"),
                        onToggle: this.onAnimationChange
                    })), r.createElement(u.Wa, {
                        padding: {
                            top: 2
                        }
                    }, this.state.uploadType === je.Simple && r.createElement(Ve, {
                        channelID: this.props.channelID,
                        tier: this.props.uploadTier.bits,
                        image: n && n.url,
                        onImageSubmitted: this.onSimpleImageSubmitted,
                        onImageSubmissionError: this.onCreateUploadRequestError,
                        uploadError: this.state.simpleLoadingError
                    }), this.state.uploadType === je.Advanced && r.createElement(Ue, {
                        channelID: this.props.channelID,
                        images: t,
                        tier: this.props.uploadTier.bits,
                        background: this.state.background,
                        animationType: this.state.animation,
                        onImageSubmitted: this.onAdvancedImageUpload,
                        onImageSubmissionError: this.onCreateUploadRequestError,
                        uploadError: this.state.advancedLoadingError,
                        errorDimension: this.state.errorDimension
                    })), this.state.uploadType === je.Simple && this.state.simpleLoadingError && r.createElement(u.yb, {
                        display: u.X.Flex,
                        alignItems: u.f.Center,
                        background: u.r.Alt,
                        padding: 1,
                        margin: {
                            top: 1
                        }
                    }, r.createElement(u.W, {
                        color: u.O.Error
                    }, this.state.simpleLoadingError)), this.state.uploadType === je.Advanced && this.state.advancedLoadingError && t.length && r.createElement(u.yb, {
                        display: u.X.Flex,
                        alignItems: u.f.Center,
                        background: u.r.Alt,
                        padding: 1,
                        margin: {
                            top: 1
                        }
                    }, r.createElement(u.W, {
                        color: u.O.Error
                    }, this.state.advancedLoadingError)), n && r.createElement(u.Wa, {
                        padding: {
                            top: 2
                        }
                    }, r.createElement(Me, {
                        imageSrc: n.url
                    }))), this.state.uploading && r.createElement(u.yb, {
                        className: "cheermote-upload-area__uploading",
                        display: u.X.Flex,
                        flexDirection: u.Z.Column,
                        alignItems: u.f.Center,
                        justifyContent: u.Va.Center,
                        position: u.eb.Absolute,
                        attachTop: !0,
                        attachLeft: !0,
                        fullWidth: !0,
                        fullHeight: !0
                    }, r.createElement(u.Ya, null), r.createElement(u.Wa, {
                        padding: {
                            top: 2
                        }
                    }, r.createElement(u.W, null, Object(p.d)("Uploading...", "CheermoteUploadArea")))))
                }, t
            }(r.PureComponent);

            function Ge(e, t, n) {
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
            var qe = n("PE/S"),
                Xe = (n("ygYl"), function(e) {
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
                            Object(k.e)(qe, {
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
                                                return Ge(e, t)
                                            }).concat(t.map(function(t) {
                                                return Ge(e, t, "dark")
                                            }))
                                        }(r, n))
                                    }
                                    return t
                                }
                            })
                        }, t.onAdvancedImageSubmitted = function(e, n) {
                            Object(k.e)(qe, {
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
                                            var o = Ge(r, n),
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
                    return a.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.data.loading && !this.props.data.error || this.props.latencyTracking.reportInteractive()
                    }, t.prototype.componentDidUpdate = function(e) {
                        (e.data.loading && !this.props.data.loading || this.props.data.error) && this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        var e = this;
                        if (!this.props.data || this.props.data.loading) return r.createElement(u.Wa, {
                            className: "cheermote-upload-form__loading",
                            fullWidth: !0
                        }, r.createElement(u.Ya, {
                            fillContent: !0
                        }));
                        if (this.props.data && this.props.data.error || !this.props.data.user) return r.createElement(u.Wa, {
                            className: "cheermote-upload-form__error",
                            fullWidth: !0,
                            justifyContent: u.Va.Center,
                            textAlign: u.Kb.Center,
                            alignItems: u.f.Center
                        }, r.createElement(u.W, null, Object(p.d)("An unexpected error occurred while loading the upload wizard", "CheermotesUploadForm")));
                        var t = this.tiers.map(function(t) {
                                return r.createElement(u.zb, {
                                    key: t.id,
                                    active: e.state.activeTab === t.bits,
                                    onClick: e.onTabSelect,
                                    "data-tab-target": t.bits
                                }, t.bits)
                            }),
                            n = this.tiers.find(function(t) {
                                return t.bits === e.state.activeTab
                            });
                        return r.createElement(C.a, {
                            label: Object(p.d)("Upload Cheermote Images", "CheermotesUploadForm")
                        }, r.createElement(u.Wa, {
                            padding: {
                                bottom: 2
                            }
                        }, r.createElement(u.W, null, Object(p.d)('Please upload a 112 x 112px GIF image with a transparent background. Your image will be automatically scaled to smaller sizes. To fine-ture smaller sizes and light/dark mode, turn on "Advanced" option below. (The maximum file size is 500kb)', "CheermotesUploadForm"))), r.createElement(u.Ab, null, t), r.createElement(u.Wa, {
                            padding: {
                                top: 2
                            }
                        }, r.createElement(Ye, {
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
                }(r.PureComponent)),
                Qe = Object(o.compose)(Object(b.a)(qe, {
                    options: function(e) {
                        return {
                            variables: {
                                login: e.channelName
                            }
                        }
                    }
                }), Object(c.b)("CheermotesUploadForm"))(Xe),
                He = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(t, e), t.prototype.componentDidMount = function() {
                        p.p.setPageTitle(Object(p.d)("Cheermote Settings", "CheermotesSettingsPageTitle"))
                    }, t.prototype.render = function() {
                        var e = this.props.match,
                            t = r.createElement(P.a, {
                                title: Object(p.d)("Custom Cheermote", "CheermotesSettingsPage"),
                                description: Object(p.d)("Custom Cheermote that viewers can use when Cheering in your channel", "CheermotesSettingsPage"),
                                linkToParent: "/" + e.params.channelName + "/dashboard/settings/revenue"
                            });
                        return r.createElement(w.a, {
                            header: t
                        }, r.createElement(De, {
                            channelName: e.params.channelName
                        }), r.createElement(Qe, {
                            channelName: e.params.channelName
                        }))
                    }, t
                }(r.Component),
                $e = Object(v.compose)(Object(c.b)("CheermotesSettingsPage", {
                    autoReportInteractive: !0,
                    destination: E.a.DashboardSettingsRevenueCheermotes
                }), Object(y.a)({
                    location: S.PageviewLocation.DashboardSettingsRevenueCheermotes
                }))(He),
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
                        return !this.props.data || this.props.data.loading ? null : r.createElement(C.a, {
                            orientation: u.Ea.Horizontal,
                            label: Object(p.d)("Opt in to earn revenue", "CommerceAmendment")
                        }, r.createElement("div", {
                            onClick: this.onAmendmentClick,
                            "data-test-selector": "commerce-amendment-checkbox-wrapper",
                            className: "commerce-amendment__amendment"
                        }, r.createElement(u.N, {
                            "data-test-selector": "commerce-amendment-checkbox",
                            checked: this.state.amendmentAccepted,
                            disabled: !0,
                            id: "commerce-amendment",
                            label: Object(p.d)("Opt in to earn revenue from game sales on Twitch", "CommerceAmendment")
                        })), r.createElement(u.W, null, Object(p.d)("Please read and agree to the following Commerce Addendum to become eligible for this program.", "CommerceAmendment")))
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
                }(r.PureComponent),
                nt = n("REKr"),
                at = "amendment-modal-accept-button",
                rt = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            hasUserScrolled: !1
                        }, t.onUserScroll = function() {
                            t.setState({
                                hasUserScrolled: !0
                            })
                        }, t.renderAcceptButton = function(e) {
                            return e ? null : r.createElement(u.Wa, {
                                margin: {
                                    left: .5,
                                    right: .5
                                }
                            }, r.createElement(u.z, {
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
                        return r.createElement(u.Wa, {
                            padding: 3
                        }, r.createElement(u.yb, {
                            padding: {
                                bottom: 3
                            },
                            borderBottom: !0,
                            textAlign: u.Kb.Center
                        }, r.createElement(u.W, {
                            type: u.Ob.H4
                        }, Object(p.d)("Addendum to Content Partner Agreement – Commerce Addendum", "CommerceAmendmentModal"))), r.createElement(u.Wa, {
                            padding: {
                                top: 2,
                                bottom: 2
                            },
                            textAlign: u.Kb.Center
                        }, r.createElement(u.W, {
                            fontSize: u.Ba.Size5
                        }, Object(p.d)('Please read and agree to the following addendum ("Addendum") to your Content License and Base Agreement (or Content License Agreement, as applicable) (the "Agreement") with Twitch in order to be eligible to earn revenue for certain purchases by a Twitch user that is viewing your Twitch channel.', "CommerceAmendmentModal"))), r.createElement(u.yb, {
                            borderTop: !0,
                            borderRight: !0,
                            borderBottom: !0,
                            borderLeft: !0,
                            padding: 2
                        }, r.createElement("div", {
                            onScroll: this.onUserScroll,
                            className: "amendment-modal__amendment-text",
                            "data-test-selector": "amendment-modal-text-container"
                        }, r.createElement(u.W, null, 'Twitch, in its sole discretion, may make specially-formatted links appear on your Twitch channel page (a "', r.createElement(u.W, {
                            type: u.Ob.Span,
                            bold: !0
                        }, "Special Link"), '"), which would direct Twitch users to the purchase of a software application, video game, in-game item or other digital product (a "', r.createElement(u.W, {
                            type: u.Ob.Span,
                            bold: !0
                        }, "Product"), '") from Twitch. For every such purchase of a Product that is a Qualifying Purchase (as defined below), you will receive a fee (a "', r.createElement(u.W, {
                            type: u.Ob.Span,
                            bold: !0
                        }, "Product Purchase Fee"), '") that will be equal to five percent (5%) of (a) the purchase price of such Product, as such price was listed by Twitch at the time of the Qualifying Purchase and in the currency in which the Qualifying Purchase was made, less (b) any special discounts or promotions, taxes, service charges, rebates, payment processing fees (e.g. credit card processing fees) and any other related transaction and processing expenses.'), r.createElement(u.W, null, 'A "', r.createElement("strong", null, "Qualifying Purchase"), '" of a Product occurs when: (a) a user of Twitch clicks through a Special Link on your Twitch channel page; (b) such user purchases a Product(s); and (c) Twitch receives a fully settled payment for the purchase by such user.'), r.createElement(u.W, null, "If we pay you a Product Purchase Fee and later issue a refund or credit to the Twitch user for such Qualifying Purchase (or receive a chargeback related to the Qualifying Purchase), we may offset the amount of the Product Purchase Fee we previously paid you for such Qualifying Purchase against future Product Purchase Fees or other amounts that would otherwise be payable to you under the Agreement or this Addendum, or require you to remit that amount to us."), r.createElement(u.W, null, "This Addendum is governed by and subject to the Agreement. Capitalized terms used but not defined in this Addendum will have the meanings defined in the Agreement. Except as amended by this Addendum, all other terms and conditions of the Agreement remain in full force and effect."))), r.createElement(u.Wa, {
                            padding: {
                                top: 2,
                                bottom: 2
                            }
                        }, r.createElement(u.W, {
                            fontSize: u.Ba.Size4
                        }, Object(p.d)("Summary", "CommerceAmendmentModal")), r.createElement(u.W, null, Object(p.d)("By accepting below, you may earn revenue for certain purchases by your viewers as described above.", "CommerceAmendmentModal"))), r.createElement(u.yb, {
                            borderTop: !0,
                            display: u.X.Flex,
                            flexDirection: u.Z.Row,
                            alignItems: u.f.Center,
                            justifyContent: u.Va.Center,
                            padding: {
                                top: 2,
                                bottom: 1
                            }
                        }, r.createElement(u.Wa, {
                            margin: {
                                left: .5,
                                right: .5
                            }
                        }, r.createElement(u.z, {
                            "data-test-selector": "amendment-modal-cancel-button",
                            type: u.F.Text,
                            onClick: this.onClose
                        }, Object(p.d)("Cancel", "CommerceAmendmentModal"))), this.renderAcceptButton(this.props.amendmentAccepted)))
                    }, t
                }(r.PureComponent),
                it = Object(b.a)(nt, {
                    name: "setAmendmentAcceptance"
                })(rt),
                ot = (n("Ys4A"), function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        return r.createElement(u.yb, {
                            className: "amendment-modal__container",
                            background: u.r.Base
                        }, r.createElement(it, {
                            "data-test-selector": "amendment-modal-selector",
                            onClose: this.props.closeModal,
                            amendmentAccepted: this.props.amendmentAccepted
                        }))
                    }, t
                }(r.Component));
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
                            t = r.createElement(P.a, {
                                title: Object(p.d)("Game sales via Twitch", "CommerceAmendment"),
                                linkToParent: "/" + this.props.match.params.channelName + "/dashboard/settings/revenue"
                            });
                        return r.createElement(w.a, {
                            header: t
                        }, r.createElement(dt, {
                            channelName: e
                        }))
                    }, t
                }(r.PureComponent),
                ut = Object(v.compose)(Object(c.b)("CommerceAmendmentPage", {
                    autoReportInteractive: !0,
                    destination: E.a.DashboardSettingsRevenueGameCommerce
                }), Object(y.a)({
                    location: S.PageviewLocation.DashboardSettingsRevenueGameCommerce
                }))(ct),
                mt = n("eNg2"),
                pt = n("kRBY"),
                gt = n("5g1g"),
                ht = n("mAXC"),
                bt = n("c0Zc"),
                ft = function(e) {
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
                        }, "BitsSponsoredCheermoteSetting"), r.createElement(u.Wa, {
                            display: u.X.Flex,
                            flexDirection: u.Z.Column
                        }, r.createElement(u.Wa, {
                            display: u.X.Flex,
                            justifyContent: u.Va.Between,
                            alignItems: u.f.Center
                        }, r.createElement(u.Wa, {
                            display: u.X.Flex,
                            alignItems: u.f.Center
                        }, r.createElement(u.S, {
                            src: this.props.imageURL,
                            alt: this.props.brandName
                        }), r.createElement(u.Oa, {
                            padding: {
                                left: 2
                            }
                        }, r.createElement(u.W, null, this.props.brandName))), r.createElement(u.Qb, {
                            checked: this.props.isOptedIn,
                            onChange: this.onToggle
                        })), r.createElement(u.Oa, {
                            padding: {
                                top: 1
                            }
                        }, r.createElement(u.W, null, e)))
                    }, t
                }(r.PureComponent),
                vt = n("9wGn"),
                yt = n("l5J2"),
                Et = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            sponsoredCheermoteFormError: !1
                        }, t.onCampaignStatusToggle = function(e, n) {
                            return a.__awaiter(t, void 0, void 0, function() {
                                var t, r, i, o;
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
                                            }, r = this.props.data.user.settings.cheer.sponsoredCheermotes.campaigns.edges.map(function(t) {
                                                return t.cursor === e && t.node ? {
                                                    __typename: "SponsoredCheermoteChannelSettingsEdge",
                                                    cursor: t.cursor,
                                                    node: a.__assign({}, t.node, {
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
                                                                edges: r.slice(),
                                                                totalCount: this.props.data.user.settings.cheer.sponsoredCheermotes.campaigns.totalCount
                                                            }
                                                        }
                                                    }
                                                }
                                            }, o = Object(k.b)(t, i), s.label = 1;
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
                        if (!this.props.data || this.props.data.loading) return r.createElement(u.Ya, null);
                        if (!(this.props.data && this.props.data.user && this.props.data.user.id && this.props.data.user.settings && this.props.data.user.settings.cheer && this.props.data.user.settings.cheer.sponsoredCheermotes && this.props.data.user.settings.cheer.sponsoredCheermotes.campaigns)) return null;
                        var t = this.props.data.user.settings.cheer.sponsoredCheermotes.campaigns.edges.map(function(t) {
                            return r.createElement(ft, {
                                key: t.cursor,
                                campaignID: t.node.id,
                                isOptedIn: t.node.isOptedIn,
                                brandName: t.node.brandName,
                                imageURL: t.node.brandImageURL,
                                onToggle: e.onCampaignStatusToggle
                            })
                        });
                        return r.createElement(C.a, {
                            label: Object(p.d)("Cheermote Campaigns", "BitsSponsoredCheermoteSettingsForm"),
                            error: this.state.sponsoredCheermoteFormError
                        }, r.createElement(u.Ia, null, r.createElement(u.P, {
                            cols: {
                                default: 12,
                                sm: 8
                            }
                        }, t)))
                    }, t
                }(r.Component),
                St = Object(o.compose)(Object(b.a)(vt, {
                    options: function(e) {
                        return {
                            variables: {
                                channelLogin: e.channelLogin
                            }
                        }
                    }
                }), Object(b.a)(yt, {
                    name: "updateSponsoredCheerCampaignStatus"
                }))(Et),
                kt = n("BLPV"),
                Ot = n("wGZM"),
                Nt = n("98xD"),
                Tt = n("qqE+"),
                Ct = 1,
                Pt = 1e4,
                _t = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        n.state = {
                            minBitsToCheerSaveStatus: kt.b.NoChanges,
                            minBitsPerEmoteSaveStatus: kt.b.NoChanges,
                            minBitsToCheerError: !1,
                            minBitsPerEmoteError: !1
                        }, n.onMinBitsToCheerInputChange = function(e) {
                            var t = n.state,
                                a = t.minBitsPerEmote,
                                r = t.minBitsPerEmoteSaveStatus,
                                i = Math.min(parseInt(e.currentTarget.value, 10), Pt),
                                o = kt.b.DirtyChanges,
                                s = r,
                                l = !1;
                            (!i || !a || i < Ct || a && i < a) && (o = kt.b.NoChanges, s = kt.b.NoChanges), a && i < a && (l = !0), n.setState({
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
                                i = Math.min(parseInt(e.currentTarget.value, 10), Pt),
                                o = r,
                                s = kt.b.DirtyChanges,
                                l = !1;
                            (!i || !a || i < Ct || a && a < i) && (o = kt.b.NoChanges, s = kt.b.NoChanges), a && a < i && (l = !0), n.setState({
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
                                                minBitsToCheerSaveStatus: kt.b.Working
                                            }), o = {
                                                userID: r.user.id,
                                                chatMessage: {
                                                    minBitsToCheer: e
                                                }
                                            }, a.label = 1;
                                        case 1:
                                            return a.trys.push([1, 3, , 4]), [4, n(Object(k.a)(o))];
                                        case 2:
                                            return s = a.sent(), Object(k.e)(Ot, {
                                                login: i
                                            }, function(e) {
                                                return e.user && e.user.settings && e.user.settings.cheer && s.data.updateCheerPartnerSettings && (e.user.settings.cheer.chatMessage.minBitsToCheer = s.data.updateCheerPartnerSettings.cheer.chatMessage.minBitsToCheer), e
                                            }), this.setState({
                                                minBitsToCheerSaveStatus: kt.b.Success
                                            }), [3, 4];
                                        case 3:
                                            return a.sent(), this.setState({
                                                minBitsToCheerSaveStatus: kt.b.Error
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
                                                minBitsPerEmoteSaveStatus: kt.b.Working
                                            }), o = {
                                                userID: r.user.id,
                                                chatMessage: {
                                                    minBitsPerEmote: e
                                                }
                                            }, a.label = 1;
                                        case 1:
                                            return a.trys.push([1, 3, , 4]), [4, n(Object(k.a)(o))];
                                        case 2:
                                            return s = a.sent(), Object(k.e)(Ot, {
                                                login: i
                                            }, function(e) {
                                                return e.user && e.user.settings && e.user.settings.cheer && s.data.updateCheerPartnerSettings && (e.user.settings.cheer.chatMessage.minBitsPerEmote = s.data.updateCheerPartnerSettings.cheer.chatMessage.minBitsPerEmote), e
                                            }), this.setState({
                                                minBitsPerEmoteSaveStatus: kt.b.Success
                                            }), [3, 4];
                                        case 3:
                                            return a.sent(), this.setState({
                                                minBitsPerEmoteSaveStatus: kt.b.Error
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
                    }, t.prototype.componentDidMount = function() {
                        this.props.data.loading && !this.props.data.error || this.props.latencyTracking.reportInteractive()
                    }, t.prototype.componentDidUpdate = function(e) {
                        (e.data.loading && !this.props.data.loading || this.props.data.error) && this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        var e = this.state,
                            t = e.minBitsToCheer,
                            n = e.minBitsToCheerError,
                            a = e.minBitsPerEmote,
                            i = e.minBitsPerEmoteError,
                            o = e.minBitsToCheerSaveStatus,
                            s = e.minBitsPerEmoteSaveStatus;
                        return r.createElement(r.Fragment, null, r.createElement(C.a, {
                            label: Object(p.d)("Minimum Bits to Cheer", "CheerSettingsPage"),
                            error: n,
                            errorMessage: Object(p.d)("Minimum Bit to Cheer must be greater than or equal to Minimum Bit Emote", "CheerSettingsPage"),
                            "data-test-selector": "cheer-minimum-bits-form"
                        }, r.createElement(u.Ia, null, r.createElement(u.P, {
                            cols: {
                                default: 12,
                                sm: 8
                            }
                        }, r.createElement(u.Wa, {
                            display: u.X.Flex
                        }, r.createElement(u.Wa, {
                            flexGrow: 1,
                            margin: {
                                right: 1
                            }
                        }, r.createElement(u.Qa, {
                            type: u.Sa.Number,
                            min: Ct,
                            max: Pt,
                            value: isNaN(t) ? "" : String(t),
                            onChange: this.onMinBitsToCheerInputChange,
                            "data-test-selector": "cheer-minimum-bits-input"
                        })), r.createElement(kt.a, {
                            status: o,
                            onClick: this.onMinBitsToCheerSave,
                            "data-test-selector": "cheer-minimum-bits-save-button"
                        })))), r.createElement(u.Ia, null, r.createElement(u.P, {
                            cols: {
                                default: 12,
                                sm: 8
                            }
                        }, r.createElement(T.a, {
                            text: r.createElement(r.Fragment, null, r.createElement(u.Wa, {
                                display: u.X.Inline,
                                margin: {
                                    right: .5
                                }
                            }, Object(p.d)("Set the minimum number of Bits needed to send a Cheer message in your channel. We only recommend setting this above 1 to combat spam in chat.", "CheerSettingsPage")), r.createElement(u.yb, {
                                display: u.X.InlineBlock,
                                color: u.O.Alt2,
                                verticalAlign: u.Yb.Middle
                            }, r.createElement(u.Rb, {
                                label: Object(p.d)("For example, if you choose 30, viewers will not be able to send a Cheer message with 29 or fewer Bits. They will need to use at least 30 Bits, either in a single emote, or by combining emotes that add up to at least 30 Bits.", "CheerSettingsPage"),
                                width: 300
                            }, r.createElement(u.nb, {
                                asset: u.ob.NotificationInfo,
                                width: 16,
                                height: 16
                            }))))
                        })))), r.createElement(C.a, {
                            label: Object(p.d)("Minimum Bits Emote", "CheerSettingsPage"),
                            error: i,
                            errorMessage: Object(p.d)("Minimum Bits Emote must be less than Minimum Bit to Cheer", "CheerSettingsPage"),
                            "data-test-selector": "emote-minimum-bits-form"
                        }, r.createElement(u.Ia, null, r.createElement(u.P, {
                            cols: {
                                default: 12,
                                sm: 8
                            }
                        }, r.createElement(u.Wa, {
                            display: u.X.Flex
                        }, r.createElement(u.Wa, {
                            flexGrow: 1,
                            margin: {
                                right: 1
                            }
                        }, r.createElement(u.Qa, {
                            type: u.Sa.Number,
                            min: Ct,
                            max: Pt,
                            value: isNaN(a) ? "" : String(a),
                            onChange: this.onMinBitsPerEmoteInputChange,
                            "data-test-selector": "emote-minimum-bits-input"
                        })), r.createElement(kt.a, {
                            status: s,
                            onClick: this.onMinBitsPerEmoteSave,
                            "data-test-selector": "emote-minimum-bits-save-button"
                        })))), r.createElement(u.Ia, null, r.createElement(u.P, {
                            cols: {
                                default: 12,
                                sm: 8
                            }
                        }, r.createElement(T.a, {
                            text: r.createElement(r.Fragment, null, r.createElement(u.Wa, {
                                display: u.X.Inline,
                                margin: {
                                    right: .5
                                }
                            }, Object(p.d)("Set the smallest Bit Emote that can be used in your channel. We only recommend setting this above 1 to combat spam in chat.", "CheerSettingsPage")), r.createElement(u.yb, {
                                display: u.X.InlineBlock,
                                color: u.O.Alt2,
                                verticalAlign: u.Yb.Middle
                            }, r.createElement(u.Rb, {
                                label: Object(p.d)("Bit Emote means the individual Bit Emotes that appear in chat. For example, if you choose 100, viewers cannot send “Cheer150 Cheer90” because Cheer90 is less than 100. “Cheer150 Cheer150” would be acceptable, because both cheers are greater than 100.", "CheerSettingsPage"),
                                width: 300
                            }, r.createElement(u.nb, {
                                asset: u.ob.NotificationInfo,
                                width: 16,
                                height: 16
                            }))))
                        })))))
                    }, t
                }(r.Component),
                wt = Object(v.compose)(Object(b.a)(Ot, {
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
                }), Object(c.b)("BitsThresholdSettingsForm"), Object(Ee.a)(function(e) {
                    return {
                        query: Ot,
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
                }))(_t),
                At = n("NwqP"),
                It = n("/CKs");
            ! function(e) {
                e[e.CheermotesSettingsLink = 0] = "CheermotesSettingsLink", e[e.NotSignedBitsAmendmentPrompt = 1] = "NotSignedBitsAmendmentPrompt", e[e.NotOnboardedPrompt = 2] = "NotOnboardedPrompt"
            }(lt || (lt = {}));
            var xt = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        if (n.state = {
                                showOnboardingPrompt: !1,
                                onboardingError: !1
                            }, n.onOnboardingButtonClick = function() {
                                return a.__awaiter(n, void 0, void 0, function() {
                                    var e, t, n, r, i;
                                    return a.__generator(this, function(a) {
                                        switch (a.label) {
                                            case 0:
                                                if (e = this.props, t = e.onboardUser, !((n = e.data).user && n.user.id && n.user.settings && n.user.settings.cheer)) return [2];
                                                r = {
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
                                                }, a.label = 1;
                                            case 1:
                                                return a.trys.push([1, 3, , 4]), [4, t(Object(k.b)(r, i))];
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
                            var r = t.data.user.settings.cheer,
                                i = r.hasSignedBitsAmendment,
                                o = r.isOnboarded;
                            n.state = a.__assign({}, n.state, {
                                showOnboardingPrompt: !i || !o
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
                            i = t.data,
                            o = this.state,
                            s = o.showOnboardingPrompt,
                            l = o.onboardingError;
                        if (i.user && i.user.id && i.user.settings && i.user.settings.cheer)
                            if (s) {
                                var d = i.user.settings.cheer,
                                    c = d.hasSignedBitsAmendment,
                                    m = d.isOnboarded;
                                e = c ? r.createElement(u.yb, {
                                    padding: 2,
                                    "data-test-selector": lt.NotOnboardedPrompt
                                }, r.createElement(u.Xb, null, r.createElement("p", null, Object(p.d)("You have successfully completed your tax forms. Now click Enable Bits to complete onboarding.", "CheerSettingsForm"))), r.createElement(u.Wa, {
                                    display: u.X.Flex,
                                    alignItems: u.f.Center
                                }, r.createElement(u.yb, {
                                    margin: {
                                        right: 1
                                    }
                                }, r.createElement(u.z, {
                                    disabled: !c,
                                    type: m ? u.F.Success : u.F.Default,
                                    onClick: this.onOnboardingButtonClick
                                }, m ? Object(p.d)("Success", "CheerSettingsForm") : Object(p.d)("Enable Bits", "CheerSettingsForm"))), m && r.createElement(u.U, {
                                    onClick: this.onSuccessLinkClick
                                }, Object(p.d)("Click here to see your Bits & Cheering settings", "CheerSettingsForm")), l && r.createElement(u.W, {
                                    color: u.O.Error
                                }, Object(p.d)("There was an error enabling Bits. Please try later or reach out to support.", "CheerSettingsForm")))) : r.createElement(u.yb, {
                                    padding: 2,
                                    "data-test-selector": lt.NotSignedBitsAmendmentPrompt
                                }, r.createElement(u.Xb, null, r.createElement("p", null, Object(p.d)("To enable Bits, we need your tax and payout information.", "CheerSettingsForm")), r.createElement("ul", null, r.createElement("li", null, Object(p.d)("After clicking Get Started click Start Over", "CheerSettingsForm")), r.createElement("li", null, Object(p.d)("Complete the registration, partner agreements, tax forms, and payout method.", "CheerSettingsForm")), r.createElement("li", null, Object(p.d)("Once you have completed the 4 steps, come back and click enable Bits!", "CheerSettingsForm")))), r.createElement(u.z, {
                                    linkTo: "/" + n + "/dashboard/settings/revenue/payout-onboarding"
                                }, Object(p.d)("Get Started", "CheerSettingsForm")))
                            } else e = r.createElement(r.Fragment, null, r.createElement(wt, {
                                channelName: n
                            }), r.createElement(gt.b, {
                                name: "bits_sponsored_cheermote_dashboard_settings"
                            }, r.createElement(St, {
                                channelLogin: n
                            })), r.createElement(ht.a, {
                                text: Object(p.d)("Cheer Badges", "CheerSettingsForm"),
                                linkTo: "/" + n + "/dashboard/settings/revenue/cheerbadges"
                            }), a && r.createElement(ht.a, {
                                text: Object(p.d)("Cheermotes", "CheerSettingsForm"),
                                linkTo: "/" + n + "/dashboard/settings/revenue/cheermotes",
                                "data-test-selector": lt.CheermotesSettingsLink
                            }), r.createElement(ht.a, {
                                text: Object(p.d)("Top Cheerers", "CheerSettingsForm"),
                                linkTo: "/" + n + "/dashboard/settings/revenue/cheer"
                            }));
                        else this.props.data.loading && (e = r.createElement(u.Ya, {
                            fillContent: !0
                        })), this.props.data.error && (e = r.createElement(g.a, null));
                        return r.createElement(r.Fragment, null, r.createElement(bt.a, {
                            title: Object(p.d)("Bits & Cheering", "CheerSettingsForm")
                        }), r.createElement(w.a, null, e))
                    }, t
                }(r.Component),
                Dt = Object(v.compose)(Object(c.b)("CheerSettingsForm"), Object(b.a)(It, {
                    options: function(e) {
                        return {
                            variables: {
                                login: e.channelName
                            }
                        }
                    }
                }), Object(b.a)(At, {
                    name: "onboardUser"
                }))(xt);
            var Rt = Object(Ze.connect)(function(e) {
                var t = Object(pt.e)(e);
                return {
                    isStaff: !!(t && t.roles && t.roles.isStaff)
                }
            })(Dt);

            function Ft(e, t) {
                if (!e || !t) return !1;
                if (t.workflow.currentStep === d.D.AGREEMENT_PENDING_UPGRADE) return !1;
                var n = e.find(function(e) {
                    return e.category === d.B.PARTNER && e.isReceivingRevenue
                });
                return !(!(n && n.tags && n.tags.includes(d.E.LEGACY) && t) || t.isLegacy) || !(n && n.tags && (n.tags.includes(d.E.STANDARD) || n.tags.includes(d.E.PREMIUM)) && t && t.category === d.C.CUSTOM_PARTNER) && !!n
            }
            var jt, Wt = n("wNpX");
            ! function(e) {
                e.PAYOUT_ONBOARDING_LINK = "onboarding-section__payout-onboarding-link", e.UPGRADE_AGREEMENT_LINK = "onboarding-section__upgrade-agreement-link", e.PAYOUTS_LINK = "onboarding-section__payouts-link", e.AFFILIATE_AGREEMENT_LINK = "onboarding-section__affiliate-agreement-link", e.PARTNER_AGREEMENT_LINK = "onboarding-section__partner-agreement-link", e.EXTENSIONS_DEVELOPER_AGREEMENT_LINK = "onboarding-section__extensions-developer-agreement-link"
            }(jt || (jt = {}));
            var Lt = function(e) {
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
                        return t || n || !a || this.props.channelName !== a.login ? null : r.createElement(r.Fragment, null, r.createElement(bt.a, {
                            title: Object(p.d)("Onboarding", "OnboardingSection")
                        }), r.createElement(w.a, null, !this.hasAgreementPendingUpgrade && r.createElement(ht.a, {
                            "data-test-selector": jt.PAYOUT_ONBOARDING_LINK,
                            text: this.payoutOnboardingLinkText,
                            linkTo: "/" + this.props.channelName + "/dashboard/settings/revenue/payout-onboarding"
                        }), this.hasAgreementPendingUpgrade && r.createElement(ht.a, {
                            "data-test-selector": jt.UPGRADE_AGREEMENT_LINK,
                            text: this.upgradeTermsLinkText,
                            linkTo: "/" + this.props.channelName + "/dashboard/settings/revenue/upgrade-terms"
                        }), this.hasCompletedOnboarding && r.createElement(ht.a, {
                            "data-test-selector": jt.PAYOUTS_LINK,
                            text: Object(p.d)("Change Payout Method", "OnboardingSection"),
                            linkTo: "/" + this.props.channelName + "/dashboard/settings/revenue/payouts"
                        }), a && a.roles && a.roles.isAffiliate && r.createElement(ht.a, {
                            "data-test-selector": jt.AFFILIATE_AGREEMENT_LINK,
                            text: Object(p.d)("View Affiliate Agreement", "OnboardingSection"),
                            linkTo: "https://twitch.tv/p/legal/affiliate-agreement/"
                        }), this.showPartnerAgreementLink && r.createElement(ht.a, {
                            "data-test-selector": jt.PARTNER_AGREEMENT_LINK,
                            text: Object(p.d)("View Active Partner Agreement", "OnboardingSection"),
                            linkTo: "/" + this.props.channelName + "/dashboard/settings/revenue/view-terms"
                        }), a && a.roles && a.roles.isExtensionsDeveloper && r.createElement(ht.a, {
                            "data-test-selector": jt.EXTENSIONS_DEVELOPER_AGREEMENT_LINK,
                            text: Object(p.d)("View Extensions Developer Agreement", "OnboardingSection"),
                            linkTo: "https://twitch.tv/p/legal/developer-agreement/"
                        })))
                    }, Object.defineProperty(t.prototype, "hasAgreementPendingUpgrade", {
                        get: function() {
                            return !!(this.props.data.currentUser && this.props.data.currentUser.payoutInvite && this.props.data.currentUser.payoutInvite.workflow && this.props.data.currentUser.payoutInvite.workflow.currentStep === d.D.AGREEMENT_PENDING_UPGRADE)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "hasCompletedOnboarding", {
                        get: function() {
                            return !!(this.props.data.currentUser && this.props.data.currentUser.payoutInvite && this.props.data.currentUser.payoutInvite.workflow && this.props.data.currentUser.payoutInvite.workflow.currentStep === d.D.COMPLETED)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "payoutOnboardingLinkText", {
                        get: function() {
                            var e = this.props.data.currentUser;
                            if (!e || !e.payoutInvite) return null;
                            switch (e.payoutInvite.category) {
                                case d.C.AFFILIATE:
                                    return Object(p.d)("Affiliate Onboarding", "OnboardingSection");
                                case d.C.STANDARD_PARTNER:
                                case d.C.PREMIUM_PARTNER:
                                case d.C.CUSTOM_PARTNER:
                                    return Object(p.d)("Partner Onboarding", "OnboardingSection");
                                case d.C.EXTENSIONS_DEVELOPER:
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
                                case d.C.AFFILIATE:
                                    return Object(p.d)("Agree to the Twitch Affiliate Agreement", "OnboardingSection");
                                case d.C.STANDARD_PARTNER:
                                case d.C.PREMIUM_PARTNER:
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
                            return !!e && Ft(e.payoutPlans && e.payoutPlans.map(function(e) {
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
                }(r.Component),
                Bt = Object(o.compose)(Object(c.b)("OnboardingSection"), Object(b.a)(Wt))(Lt),
                Ut = Object(c.b)("OtherRevenueStreamsForm", {
                    autoReportInteractive: !0
                })(function(e) {
                    return r.createElement(u.Wa, null, r.createElement(bt.a, {
                        title: Object(p.d)("Other Revenue Streams", "OtherRevenueStreamsForm")
                    }), r.createElement(w.a, null, r.createElement(ht.a, {
                        text: Object(p.d)("Game sales via Twitch", "OtherRevenueStreamsForm"),
                        linkTo: "/" + e.channelName + "/dashboard/settings/revenue/game-commerce"
                    }), r.createElement(ht.a, {
                        text: Object(p.d)("Merch by Amazon (Beta)", "OtherRevenueStreamsForm"),
                        linkTo: "/" + e.channelName + "/dashboard/settings/revenue/merch-by-amazon"
                    })))
                });
            var Mt, Vt = Object(Ze.connect)(function(e) {
                    var t = Object(pt.e)(e);
                    return {
                        isStaff: !!(t && t.roles && t.roles.isStaff)
                    }
                })(Ut),
                zt = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onChange = function(e) {
                            t.props.onChange(t.props.benefit, e.currentTarget.checked)
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        return r.createElement(C.a, {
                            label: this.props.label
                        }, r.createElement(u.Qb, {
                            checked: this.props.isToggled,
                            onChange: this.onChange
                        }), r.createElement(T.a, {
                            text: this.props.description
                        }))
                    }, t
                }(r.Component),
                Yt = n("ucfV"),
                Gt = n("TnsV");
            ! function(e) {
                e[e.AD_FREE_VIEWING = 0] = "AD_FREE_VIEWING", e[e.IGNORE_SLOW_MODE = 1] = "IGNORE_SLOW_MODE", e[e.SUBSCRIBER_ONLY_CHAT = 2] = "SUBSCRIBER_ONLY_CHAT", e[e.SUBSCRIBER_ONLY_ARCHIVES = 3] = "SUBSCRIBER_ONLY_ARCHIVES"
            }(Mt || (Mt = {}));
            var qt = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.inExperiment = "affiliate_access" === p.p.experiments.getAssignment(f.b.SubsAffiliateBadges), t.toggleBenefit = function(e, n) {
                            return a.__awaiter(t, void 0, void 0, function() {
                                var t, r, i, o, s, l, d, c;
                                return a.__generator(this, function(a) {
                                    return this.props.data.user && this.props.data.user.id && this.props.data.user.roles && this.props.data.user.subscriptionProducts && (t = this.props.data.user.subscriptionProducts[0]) ? (r = e === Mt.AD_FREE_VIEWING ? n : t.hasAdFree, i = e === Mt.IGNORE_SLOW_MODE ? n : t.hasFastChat, o = e === Mt.SUBSCRIBER_ONLY_ARCHIVES ? n : t.hasSubonlyVideoArchive, s = e === Mt.SUBSCRIBER_ONLY_CHAT ? n : t.hasSubOnlyChat, l = this.props.data.user.id, d = {
                                        targetUserID: l,
                                        id: t.id,
                                        hasAdFree: r,
                                        hasFastChat: i,
                                        hasSubOnlyVideoArchive: o,
                                        hasSubOnlyChat: s
                                    }, c = {
                                        updateSubscriptionProduct: {
                                            product: {
                                                id: t.id,
                                                hasAdFree: r,
                                                hasFastChat: i,
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
                        if (!this.props.data.user || !this.props.data.user.roles || !this.props.data.user.subscriptionProducts) return this.props.data.loading ? r.createElement(u.Ya, {
                            fillContent: !0
                        }) : this.props.data.error ? r.createElement(g.a, null) : null;
                        var e = this.props.data.user.subscriptionProducts[0];
                        if (!e) return null;
                        var t = this.props.channelName,
                            n = e.hasAdFree,
                            a = e.hasFastChat || !1,
                            i = e.hasSubOnlyChat || !1,
                            o = e.hasSubonlyVideoArchive || !1;
                        return r.createElement(r.Fragment, null, r.createElement(bt.a, {
                            title: Object(p.d)("Subscriptions", "DashboardRevenueSettings")
                        }), r.createElement(w.a, null, r.createElement(ht.a, {
                            text: Object(p.d)("Subscription names", "SubsSettingsSection"),
                            linkTo: "/" + t + "/dashboard/settings/revenue/subscription/ticket"
                        }), r.createElement(ht.a, {
                            text: Object(p.d)("Emotes", "SubsSettingsSection"),
                            linkTo: "/" + t + "/dashboard/settings/revenue/subscription/chatperks"
                        }), this.canAccessSubBadges() && r.createElement(ht.a, {
                            text: Object(p.d)("Loyalty badges", "SubsSettingsSection"),
                            linkTo: "/" + t + "/dashboard/settings/revenue/subscription/badges"
                        }), this.isPartner() && r.createElement(zt, {
                            benefit: Mt.AD_FREE_VIEWING,
                            label: Object(p.d)("Ad-Free viewing", "SubsSettingsSection"),
                            isToggled: n,
                            onChange: this.toggleBenefit,
                            description: Object(p.d)("Allow subscribers to watch your content on your channel ad-free", "SubsSettingsSection")
                        }), r.createElement(zt, {
                            benefit: Mt.IGNORE_SLOW_MODE,
                            label: Object(p.d)("Ignore slow mode", "SubsSettingsSection"),
                            isToggled: a,
                            onChange: this.toggleBenefit,
                            description: Object(p.d)("Allow subscribers to chat freely in your channel when chat is in slow mode", "SubsSettingsSection")
                        }), r.createElement(zt, {
                            benefit: Mt.SUBSCRIBER_ONLY_CHAT,
                            label: Object(p.d)("Subscriber-only chat", "SubsSettingsSection"),
                            isToggled: i,
                            onChange: this.toggleBenefit,
                            description: Object(p.d)("Only allow subscribers and moderators to chat in your channel", "SubsSettingsSection")
                        }), r.createElement(zt, {
                            benefit: Mt.SUBSCRIBER_ONLY_ARCHIVES,
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
                }(r.Component),
                Xt = Object(v.compose)(Object(c.b)("SubsSettingsSection"), Object(b.a)(Yt, {
                    options: function(e) {
                        return {
                            variables: {
                                login: e.channelName
                            }
                        }
                    }
                }), Object(b.a)(Gt, {
                    name: "updateSubscriptionProduct"
                }))(qt),
                Qt = n("jYG1"),
                Ht = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(t, e), t.prototype.componentDidMount = function() {
                        p.p.setPageTitle(Object(p.d)("Revenue Settings", "DashboardRevenueSettingsTitle")), this.props.data.loading && !this.props.data.error || this.props.latencyTracking.reportInteractive()
                    }, t.prototype.componentDidUpdate = function(e) {
                        (e.data.loading && !this.props.data.loading || this.props.data.error) && this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        return this.props.data.loading ? r.createElement(u.Ya, {
                            fillContent: !0
                        }) : this.props.data.error ? r.createElement(g.a, null) : r.createElement(r.Fragment, null, r.createElement(Bt, {
                            channelName: this.channelName
                        }), (this.isPaidAffiliate || this.isPaidPartner) && r.createElement(r.Fragment, null, r.createElement(Xt, {
                            channelName: this.channelName
                        }), r.createElement(Rt, {
                            channelName: this.channelName,
                            isPartner: this.isPaidPartner
                        })), this.isPaidPartner && r.createElement(Vt, {
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
                                return e.category === mt.PayoutCategory.Affiliate && e.isReceivingRevenue
                            })
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "isPaidPartner", {
                        get: function() {
                            var e = this.props.data.channel.payoutPlans;
                            return !!e && !!e.find(function(e) {
                                return e.category === mt.PayoutCategory.Partner && e.isReceivingRevenue
                            })
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t
                }(r.Component),
                $t = Object(v.compose)(Object(c.b)("DashboardRevenueSettingsIndexPage", {
                    destination: E.a.DashboardSettingsRevenueIndex
                }), Object(y.a)({
                    location: S.PageviewLocation.DashboardSettingsRevenueIndex
                }), Object(b.a)(Qt, {
                    options: function(e) {
                        return {
                            variables: {
                                channelName: e.match.params.channelName
                            }
                        }
                    }
                }))(Ht),
                Zt = n("nHFd"),
                Kt = function(e) {
                    return r.createElement(u.yb, {
                        background: u.r.Base,
                        padding: {
                            x: 2,
                            y: 3
                        }
                    }, r.createElement(u.yb, {
                        borderBottom: !0,
                        margin: {
                            bottom: 2
                        },
                        padding: {
                            bottom: 2
                        }
                    }, r.createElement(u.W, {
                        type: u.Ob.H4
                    }, Object(p.d)("Save Badge Images", "LoyaltyBadgeUploadModalPresentation"))), r.createElement(u.Wa, {
                        margin: {
                            bottom: 2
                        }
                    }, r.createElement(u.W, null, Object(p.d)("By uploading and saving these images, you are confirming that you own all rights to the images.", "LoyaltyBadgeUploadModalPresentation"))), r.createElement(u.yb, {
                        borderTop: !0,
                        padding: {
                            top: 2
                        },
                        display: u.X.Flex,
                        justifyContent: u.Va.Center
                    }, r.createElement(u.Wa, {
                        margin: {
                            right: 2
                        }
                    }, r.createElement(u.z, {
                        onClick: e.onClose,
                        type: u.F.Text
                    }, Object(p.d)("Cancel", "LoyaltyBadgeUploadModalPresentation"))), r.createElement(u.z, {
                        onClick: e.onSaveClick
                    }, Object(p.d)("Save", "LoyaltyBadgeUploadModalPresentation"))), r.createElement(Zt.a, {
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
                        return r.createElement(Kt, {
                            onSaveClick: this.onSaveClick,
                            onClose: this.onCancelClick
                        })
                    }, t
                }(r.Component);
            var en, tn = Object(Ze.connect)(null, function(e) {
                    return Object(v.bindActionCreators)({
                        closeModal: Ke.c
                    }, e)
                })(Jt),
                nn = "subscriptions/v1/channels",
                an = function() {
                    function e() {}
                    return e.getBadges = function(e) {
                        return a.__awaiter(void 0, void 0, Promise, function() {
                            var t, n;
                            return a.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        return a.trys.push([0, 2, , 3]), [4, j.a.getOrThrow(nn + "/" + e + "/badges", {
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
                        return a.__awaiter(void 0, void 0, Promise, function() {
                            var t;
                            return a.__generator(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        return n.trys.push([0, 2, , 3]), [4, j.a.getOrThrow(nn + "/" + e + "/timeout_statuses", {
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
                                        return a.trys.push([0, 2, , 3]), [4, j.a.deleteOrThrow(nn + "/" + e + "/badges/" + t, {
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
                            var n, r, i;
                            return a.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        return a.trys.push([0, 2, , 3]), (n = new FormData).append("required_tenure_months", t.requiredTenureMonths.toString()), n.append("image_1x", t.image1x), n.append("image_2x", t.image2x), n.append("image_4x", t.image4x), [4, j.a.postOrThrow(nn + "/" + e + "/badges", {
                                            body: n,
                                            credentials: "include"
                                        })];
                                    case 1:
                                        return r = a.sent(), [2, rn(r.body)];
                                    case 2:
                                        return i = a.sent(), [2, Promise.reject(i)];
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
                sn = n("1YV1"),
                ln = (n("Dg2t"), "https://static-cdn.jtvnw.net/badges/v1/19dd8673-124d-4f44-830c-b0f4f9d78635/2"),
                dn = "current-badge-image-selector",
                cn = "current-badge-placeholder-selector",
                un = "current-badge-locked-overlay-selector",
                mn = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.renderCurrentBadges = function() {
                            if (!t.props.data.user || !t.props.data.user.roles) return t.props.data.loading ? r.createElement(u.Ya, null) : t.props.data.error ? r.createElement(g.a, null) : null;
                            var e = new Map(t.props.badgesMap),
                                n = t.props.data.user.roles.isPartner,
                                a = (n ? In : In.filter(function(e) {
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
                                    var i = t.renderToolTip(Object(p.d)("Subscriber", "LoyaltyBadgeCurrentSectionComponent"), ln);
                                    return t.renderCurrentBadgeImage(n, i)
                                });
                            return r.createElement(u.Wa, {
                                margin: {
                                    top: 1,
                                    bottom: 1
                                }
                            }, a, !n && t.renderLockedBadges())
                        }, t.renderLockedBadges = function() {
                            return r.createElement(u.Wa, {
                                "data-test-selector": un,
                                display: u.X.InlineFlex,
                                flexDirection: u.Z.Column,
                                margin: {
                                    left: 1
                                }
                            }, r.createElement(u.Wa, {
                                display: u.X.InlineFlex,
                                flexDirection: u.Z.Row,
                                margin: {
                                    bottom: 1
                                }
                            }, r.createElement(u.Wa, {
                                className: "loyalty-badges-current-section__container",
                                margin: {
                                    right: 1
                                }
                            }, r.createElement(u.Wa, {
                                className: "loyalty-badges-current-section__placeholder-light",
                                display: u.X.InlineFlex,
                                justifyContent: u.Va.Center
                            }, r.createElement(u.nb, {
                                asset: u.ob.Lock,
                                type: u.pb.Brand
                            }))), r.createElement(u.Wa, {
                                className: "loyalty-badges-current-section__container",
                                margin: {
                                    right: 1
                                }
                            }, r.createElement(u.Wa, {
                                className: "loyalty-badges-current-section__placeholder-light"
                            })), r.createElement(u.Wa, {
                                className: "loyalty-badges-current-section__container",
                                margin: {
                                    right: 1
                                }
                            }, r.createElement(u.Wa, {
                                className: "loyalty-badges-current-section__placeholder-light",
                                position: u.eb.Absolute
                            }), r.createElement(u.Wa, {
                                className: "loyalty-badges-current-section__gradient",
                                position: u.eb.Absolute
                            }))), Object(p.d)("Unlock Year 2 to 8 badges when you become a Partner", "LoyaltyBadgeCurrentSectionComponent"))
                        }, t.renderCurrentBadgeImage = function(e, n) {
                            var a = dn;
                            return t.renderCurrentBadge(e, "loyalty-badges-current-section__badge", a, n)
                        }, t.renderCurrentBadgePlaceholder = function(e) {
                            var n = cn;
                            return t.renderCurrentBadge(e, "loyalty-badges-current-section__placeholder", n)
                        }, t.renderCurrentBadge = function(e, t, n, a) {
                            return r.createElement(u.Wa, {
                                className: "loyalty-badges-current-section__container",
                                alignItems: u.f.Center,
                                key: e.requiredTenureMonths,
                                "data-test-selector": n,
                                display: u.X.InlineFlex,
                                flexDirection: u.Z.Column,
                                margin: {
                                    right: 1
                                },
                                verticalAlign: u.Yb.Top
                            }, r.createElement(u.Wa, {
                                className: t,
                                margin: {
                                    bottom: 1
                                }
                            }, a), r.createElement(u.W, null, e.name))
                        }, t.renderToolTip = function(e, t) {
                            return r.createElement(u.Rb, {
                                direction: u.Tb.Bottom,
                                label: e
                            }, r.createElement("img", {
                                src: t,
                                alt: e
                            }))
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        return r.createElement(_.a, {
                            title: Object(p.d)("Current Badges", "LoyaltyBadgeCurrentSectionComponent")
                        }, this.renderCurrentBadges())
                    }, t
                }(r.Component),
                pn = Object(v.compose)(Object(b.a)(sn, {
                    options: function(e) {
                        return {
                            variables: {
                                login: e.channelLogin
                            }
                        }
                    }
                }))(mn);
            n("keuq");
            ! function(e) {
                e[e.NoChanges = 0] = "NoChanges", e[e.Working = 1] = "Working", e[e.Success = 2] = "Success", e[e.Error = 3] = "Error"
            }(en || (en = {}));
            var gn = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.renderContainer = function(e, n) {
                            return r.createElement(u.Wa, {
                                textAlign: u.Kb.Center,
                                margin: {
                                    right: 1
                                }
                            }, r.createElement(u.Wa, {
                                className: "loyalty-badges-delete-section__container",
                                alignItems: u.f.Center,
                                display: u.X.InlineFlex,
                                justifyContent: u.Va.Center
                            }, r.createElement("img", {
                                src: e,
                                alt: t.props.title
                            })), r.createElement(u.W, null, n))
                        }, t.getButtonState = function(e) {
                            switch (e) {
                                case en.Working:
                                    return u.E.Loading;
                                case en.Success:
                                case en.NoChanges:
                                case en.Error:
                                default:
                                    return u.E.Default
                            }
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        return r.createElement(r.Fragment, null, this.renderContainer(this.props.image1xURL, Object(p.d)("18 x 18px", "LoyaltyBadgeDeleteSection")), this.renderContainer(this.props.image2xURL, Object(p.d)("36 x 36px", "LoyaltyBadgeDeleteSection")), this.renderContainer(this.props.image4xURL, Object(p.d)("72 x 72px", "LoyaltyBadgeDeleteSection")), r.createElement(u.Wa, {
                            className: "loyalty-badges-delete-section__button-container",
                            alignItems: u.f.Start,
                            display: u.X.InlineFlex,
                            flexDirection: u.Z.Column,
                            justifyContent: u.Va.Center,
                            margin: {
                                left: 1
                            }
                        }, r.createElement(u.Wa, {
                            margin: {
                                bottom: 1
                            }
                        }, r.createElement(u.z, {
                            type: u.F.Alert,
                            state: this.getButtonState(this.props.deleteStatus),
                            onClick: this.props.showDeleteBadgeModal
                        }, Object(p.d)("Delete Badge", "LoyaltyBadgeUploadSection"))), this.props.deleteStatus === en.Error && r.createElement(u.bb, {
                            label: Object(p.d)("Failed to delete subscriber badge", "LoyaltyBadgeDeleteSection"),
                            type: u.cb.Alert
                        })))
                    }, t
                }(r.Component),
                hn = function(e) {
                    return r.createElement(u.yb, {
                        background: u.r.Base,
                        padding: {
                            x: 2,
                            y: 3
                        }
                    }, r.createElement(u.yb, {
                        borderBottom: !0,
                        margin: {
                            bottom: 2
                        },
                        padding: {
                            bottom: 2
                        }
                    }, r.createElement(u.W, {
                        type: u.Ob.H4
                    }, Object(p.d)("Are you sure?", "LoyaltyBadgeDeleteModalPresentation"))), r.createElement(u.Wa, {
                        margin: {
                            bottom: 2
                        }
                    }, r.createElement(u.W, null, Object(p.d)("Deleting your subscriber badge could negatively impact your subscribers.", "LoyaltyBadgeDeleteModalPresentation"))), r.createElement(u.yb, {
                        borderTop: !0,
                        padding: {
                            top: 2
                        },
                        display: u.X.Flex,
                        justifyContent: u.Va.Center
                    }, r.createElement(u.Wa, {
                        margin: {
                            right: 2
                        }
                    }, r.createElement(u.z, {
                        onClick: e.onClose,
                        type: u.F.Text
                    }, Object(p.d)("Cancel", "LoyaltyBadgeDeleteModalPresentation"))), r.createElement(u.z, {
                        onClick: e.onDeleteClick
                    }, Object(p.d)("Delete", "LoyaltyBadgeDeleteModalPresentation"))), r.createElement(Zt.a, {
                        closeOnBackdropClick: !0,
                        closeOnPageNavigation: !0
                    }))
                },
                bn = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onDeleteClick = function() {
                            t.props.closeModal(), t.props.onDeleteClick()
                        }, t.onCancelClick = function() {
                            t.props.closeModal()
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        return r.createElement(hn, {
                            onDeleteClick: this.onDeleteClick,
                            onClose: this.onCancelClick
                        })
                    }, t
                }(r.Component);
            var fn = Object(Ze.connect)(null, function(e) {
                return Object(v.bindActionCreators)({
                    closeModal: Ke.c
                }, e)
            })(bn);
            var vn, yn = Object(Ze.connect)(null, function(e, t) {
                    return Object.assign(Object(v.bindActionCreators)({
                        showDeleteBadgeModal: function() {
                            return Object(Ke.d)(fn, {
                                onDeleteClick: t.onDeleteClick
                            })
                        }
                    }, e), t)
                })(gn),
                En = function() {
                    return r.createElement(r.Fragment, null, r.createElement(u.W, {
                        bold: !0,
                        fontSize: u.Ba.Size7
                    }, Object(p.d)("Contact Partner Help", "LoyaltyBadgeTimedOutSection")), r.createElement(u.Wa, {
                        padding: {
                            top: 1
                        }
                    }, r.createElement(u.W, null, Object(p.d)("One or more of the badges you've attempted to upload violate our Terms of Service. As such, your ability to upload new badges has been temporarily disabled and the offending content has been deleted.", "LoyaltyBadgeTimedOutSection"))), r.createElement(u.Wa, {
                        padding: {
                            top: 1
                        }
                    }, r.createElement(u.W, null, Object(p.d)("Please contact {email} for more information.", {
                        email: r.createElement("a", {
                            href: "mailto:partnerhelp@twitch.tv"
                        }, "partnerhelp@twitch.tv")
                    }, "LoyaltyBadgeTimedOutSection"))))
                },
                Sn = function() {
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
            }(vn || (vn = {}));
            var kn = 25e3,
                On = kn / 1e3,
                Nn = ["image/png"],
                Tn = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            errorStatus: vn.None
                        }, t.getErrorText = function() {
                            switch (t.state.errorStatus) {
                                case vn.BadSizeError:
                                    return Object(p.d)("Max file size is {fileSize} KB", {
                                        fileSize: On
                                    }, "LoyaltyBadgeFilePicker");
                                case vn.BadImageError:
                                    return Object(p.d)("Bad PNG file", "LoyaltyBadgeFilePicker");
                                case vn.BadImageDimensionsError:
                                    return Object(p.d)("PNG must be {width} x {height}px", {
                                        width: t.props.widthRequirement,
                                        height: t.props.heightRequirement
                                    }, "LoyaltyBadgeFilePicker");
                                case vn.None:
                                default:
                                    return
                            }
                        }, t.onFilesSubmitted = function(e) {
                            return a.__awaiter(t, void 0, void 0, function() {
                                var t, n = this;
                                return a.__generator(this, function(a) {
                                    return e.length < 1 ? [2] : (t = e[0]).size > kn ? (this.setState({
                                        errorStatus: vn.BadSizeError
                                    }), [2]) : (Sn.readFile(t, function(e) {
                                        Sn.readImage(e, n.props.widthRequirement, n.props.heightRequirement, function() {
                                            n.setState({
                                                errorStatus: vn.None
                                            }), n.props.onFileSubmitted(t, e)
                                        }, function() {
                                            n.setState({
                                                errorStatus: vn.BadImageDimensionsError
                                            })
                                        }, function() {
                                            n.setState({
                                                errorStatus: vn.BadImageError
                                            })
                                        })
                                    }), [2])
                                })
                            })
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        var e = this.getErrorText();
                        return r.createElement(u.Wa, {
                            position: u.eb.Relative
                        }, r.createElement(u.Wa, {
                            textAlign: u.Kb.Center,
                            margin: {
                                right: 1
                            }
                        }, r.createElement(u.Wa, {
                            className: "loyalty-badges-file-picker__container",
                            display: u.X.InlineFlex,
                            flexDirection: u.Z.Column,
                            position: u.eb.Relative
                        }, r.createElement(B.a, {
                            allowedFileTypes: Nn,
                            error: void 0 !== e,
                            onFilesSubmitted: this.onFilesSubmitted
                        }, r.createElement(u.Wa, {
                            padding: .5
                        }, e ? r.createElement(u.W, {
                            color: u.O.Error,
                            wordBreak: u.ac.BreakWord
                        }, e) : this.props.children))), r.createElement(u.W, null, Object(p.d)("{width} x {height}px", {
                            width: this.props.widthRequirement,
                            height: this.props.heightRequirement
                        }, "LoyaltyBadgeFilePicker")), e && r.createElement(u.bb, {
                            label: e,
                            type: u.cb.Alert
                        })))
                    }, t
                }(r.Component),
                Cn = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.renderFilePickerContents = function() {
                            return r.createElement(r.Fragment, null, r.createElement(u.nb, {
                                asset: u.ob.Plus,
                                height: 16,
                                width: 16
                            }), r.createElement(u.W, null, Object(p.d)("Upload Image", "LoyaltyBadgeUploadSection")))
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        var e = this.props,
                            t = e.image1xURL,
                            n = e.image2xURL,
                            a = e.image4xURL;
                        return r.createElement(r.Fragment, null, r.createElement(Tn, {
                            onFileSubmitted: this.props.onImage1xSubmitted,
                            heightRequirement: 18,
                            widthRequirement: 18
                        }, t ? r.createElement("img", {
                            src: t
                        }) : this.renderFilePickerContents()), r.createElement(Tn, {
                            onFileSubmitted: this.props.onImage2xSubmitted,
                            heightRequirement: 36,
                            widthRequirement: 36
                        }, n ? r.createElement("img", {
                            src: n
                        }) : this.renderFilePickerContents()), r.createElement(Tn, {
                            onFileSubmitted: this.props.onImage4xSubmitted,
                            heightRequirement: 72,
                            widthRequirement: 72
                        }, a ? r.createElement("img", {
                            src: a
                        }) : this.renderFilePickerContents()))
                    }, t
                }(r.Component),
                Pn = n("OB5i"),
                _n = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            isTimedOut: !1
                        }, t.renderTabs = function() {
                            var e = !1;
                            if (t.props.data.user && t.props.data.user.roles) e = t.props.data.user.roles.isPartner || e;
                            else if (t.props.data.error) return r.createElement(g.a, null);
                            var n = (e ? In : In.filter(function(e) {
                                return e.availableToAffiliate
                            })).map(function(e) {
                                var n = e.requiredTenureMonths;
                                return r.createElement(u.zb, {
                                    key: n,
                                    active: t.props.activeTab === n,
                                    "data-tab-target": n,
                                    onClick: t.toggleActiveTab
                                }, r.createElement(u.W, null, e.name))
                            });
                            return r.createElement(u.Ab, null, n)
                        }, t.renderTabContent = function() {
                            var e = t.props.activeTab,
                                n = t.props.badgesMap.get(e);
                            return r.createElement(u.Wa, {
                                display: u.X.InlineFlex,
                                margin: {
                                    top: 1
                                }
                            }, n ? r.createElement(yn, {
                                image1xURL: n.image1xURL,
                                image2xURL: n.image2xURL,
                                image4xURL: n.image4xURL,
                                title: n.title,
                                onDeleteClick: t.props.onDeleteClick,
                                deleteStatus: t.props.deleteStatus
                            }) : r.createElement(Cn, {
                                image1xURL: t.props.image1xDataURL,
                                image2xURL: t.props.image2xDataURL,
                                image4xURL: t.props.image4xDataURL,
                                onImage1xSubmitted: t.props.onImage1xSubmitted,
                                onImage2xSubmitted: t.props.onImage2xSubmitted,
                                onImage4xSubmitted: t.props.onImage4xSubmitted
                            }))
                        }, t.renderTosWarning = function() {
                            return "affiliate_access" === p.p.experiments.getAssignment(f.b.SubsAffiliateBadges) ? r.createElement(u.yb, {
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
                                    return r.createElement(u.U, {
                                        to: "https://help.twitch.tv/customer/portal/articles/2348985#guidelines"
                                    }, e)
                                }
                            }, "LoyaltyBadgeManageSectionComponent")) : null
                        }, t.toggleActiveTab = function(e) {
                            return a.__awaiter(t, void 0, void 0, function() {
                                var t, n, r, i, o;
                                return a.__generator(this, function(a) {
                                    if (e.currentTarget.parentElement)
                                        for (t = e.currentTarget.parentElement.getAttribute("data-tab-target"), n = 0, r = In; n < r.length; n++) i = r[n], o = i.requiredTenureMonths, t === o.toString() && this.props.toggleActiveTab(o);
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
                                        return this.props.data.user && this.props.data.user.id ? [4, an.getTimeoutStatuses(this.props.data.user.id)] : [2];
                                    case 1:
                                        return e = t.sent(), this.setState({
                                            isTimedOut: e
                                        }), [2]
                                }
                            })
                        })
                    }, t.prototype.render = function() {
                        return r.createElement(_.a, {
                            title: Object(p.d)("Manage Badges", "LoyaltyBadgeManageSectionComponent")
                        }, this.state.isTimedOut ? r.createElement(En, null) : r.createElement(r.Fragment, null, this.renderTabs(), this.renderTabContent(), this.renderTosWarning()))
                    }, t
                }(r.Component),
                wn = Object(v.compose)(Object(b.a)(Pn, {
                    options: function(e) {
                        return {
                            variables: {
                                login: e.channelLogin
                            }
                        }
                    }
                }))(_n),
                An = n("YjpL"),
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
                xn = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            badgesMap: new Map,
                            activeTab: 0,
                            saveStatus: O.b.NoChanges,
                            deleteStatus: en.NoChanges,
                            errorLoadingBadges: !1
                        }, t.onSaveClick = function() {
                            return a.__awaiter(t, void 0, void 0, function() {
                                var e, t, n, r;
                                return a.__generator(this, function(a) {
                                    switch (a.label) {
                                        case 0:
                                            if (!((e = this.props.data.user) && e.id && this.state.image1x && this.state.image2x && this.state.image4x)) return [3, 4];
                                            this.setState({
                                                saveStatus: O.b.Working
                                            }), t = {
                                                requiredTenureMonths: this.state.activeTab,
                                                image1x: this.state.image1x,
                                                image2x: this.state.image2x,
                                                image4x: this.state.image4x
                                            }, a.label = 1;
                                        case 1:
                                            return a.trys.push([1, 3, , 4]), [4, an.uploadBadge(e.id, t)];
                                        case 2:
                                            return n = a.sent(), (r = new Map(this.state.badgesMap)).set(n.requiredTenureMonths, n), this.setState({
                                                badgesMap: r,
                                                image1xDataURL: void 0,
                                                image2xDataURL: void 0,
                                                image4xDataURL: void 0,
                                                image1x: void 0,
                                                image2x: void 0,
                                                image4x: void 0,
                                                saveStatus: O.b.Success
                                            }), [3, 4];
                                        case 3:
                                            return a.sent(), this.setState({
                                                saveStatus: O.b.Error
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
                                        deleteStatus: en.NoChanges,
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
                                                deleteStatus: en.Working
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
                                                saveStatus: O.b.NoChanges,
                                                deleteStatus: en.Success
                                            }), [3, 4];
                                        case 3:
                                            return a.sent(), this.setState({
                                                deleteStatus: en.Error
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
                        if (this.state.errorLoadingBadges) return r.createElement(g.a, null);
                        if ((!this.props.data.user || !this.props.data.user.id) && this.props.data.error) return r.createElement(g.a, null);
                        var e = r.createElement(N.a, {
                                status: this.state.saveStatus,
                                onClickSave: this.handleModalOpen
                            }),
                            t = r.createElement(P.a, {
                                title: Object(p.d)("Loyalty Badges", "LoyaltyBadgesPageComponent"),
                                linkToParent: "/" + this.props.match.params.channelLogin + "/dashboard/settings/revenue"
                            });
                        return r.createElement(w.a, {
                            header: t,
                            footer: e
                        }, r.createElement(pn, {
                            badgesMap: this.state.badgesMap,
                            channelLogin: this.props.match.params.channelLogin
                        }), r.createElement(wn, {
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
                                        return a.trys.push([0, 2, 3, 4]), [4, an.getBadges(e)];
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
                }(r.Component),
                Dn = Object(v.compose)(Object(c.b)("LoyaltyBadgesPage", {
                    destination: E.a.DashboardSettingsRevenueLoyaltyBadges
                }), Object(y.a)({
                    location: S.PageviewLocation.DashboardSettingsRevenueLoyaltyBadges
                }), Object(b.a)(An, {
                    options: function(e) {
                        return {
                            variables: {
                                login: e.match.params.channelLogin
                            }
                        }
                    }
                }))(xn);
            var Rn, Fn = Object(Ze.connect)(null, function(e) {
                    return Object(v.bindActionCreators)({
                        showUploadBadgeModal: function(e) {
                            var t = a.__rest(e, []);
                            return Object(Ke.d)(tn, t)
                        }
                    }, e)
                })(Dn),
                jn = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(t, e), t.prototype.componentDidMount = function() {
                        p.p.setPageTitle(Object(p.d)("Merch by Amazon (Beta)", "DashboardRevenueSettingsMerchByAmazonTitle"))
                    }, t.prototype.render = function() {
                        var e = r.createElement(P.a, {
                            title: Object(p.d)("Merch by Amazon (Beta)", "DashboardRevenueSettingsMerchByAmazon"),
                            linkToParent: "/" + this.props.match.params.channelName + "/dashboard/settings/revenue"
                        });
                        return r.createElement(w.a, {
                            header: e
                        }, r.createElement(_.a, null, r.createElement(u.W, null, Object(p.d)("Register with Merch by Amazon to create and sell your merchandise.", "DashboardRevenueSettingsMerchByAmazon")), r.createElement(u.Wa, {
                            padding: {
                                y: 2
                            }
                        }, r.createElement(u.W, null, Object(p.d)("Merch by Amazon will only approve one account for access per Twitch Partner. When you click this link you will be asked to log in with an Amazon account. Please make sure to log in with your preferred Amazon account, as that is the one we will enable for Merch by Amazon access.", "DashboardRevenueSettingsMerchByAmazon"))), r.createElement(u.z, {
                            targetBlank: !0,
                            linkTo: "https://twitch.amazon.com/link?confirm=ALWAYS&returnUri=https%3A%2F%2Fmerch.amazon.com%2Ftwitch-landing"
                        }, Object(p.d)("Create & Manage Your Merch Account", "DashboardRevenueSettingsMerchByAmazon"))))
                    }, t
                }(r.Component),
                Wn = Object(v.compose)(Object(c.b)("MerchByAmazonPage", {
                    autoReportInteractive: !0,
                    destination: E.a.DashboardSettingsRevenueMerchByAmazon
                }), Object(y.a)({
                    location: S.PageviewLocation.DashboardSettingsRevenueMerchByAmazon
                }))(jn),
                Ln = n("cr+I"),
                Bn = n("wIs1"),
                Un = n("x7UT"),
                Mn = n("NAv5"),
                Vn = n("h3C/"),
                zn = function() {
                    return r.createElement(r.Fragment, null, r.createElement(u.Wa, {
                        margin: {
                            bottom: 1
                        }
                    }, r.createElement(u.W, {
                        type: u.Ob.H4
                    }, Object(p.d)("Twitch Affiliate Agreement", "AffiliateAgreement"))), r.createElement(u.W, {
                        type: u.Ob.P
                    }, Object(p.d)('By clicking the "{buttonLabel}" button below, you agree to the <x:link>Twitch Affiliate Agreement</x:link> (including all policies, appendices, specifications, guidelines, schedules, and other rules incorporated by reference therein); provided, however, that the Twitch Affiliate Agreement shall not be effective until we determine that you are eligible to participate in the Twitch Affiliate Program as further described therein.', {
                        buttonLabel: Object(p.d)("Agree", "AffiliateAgreement"),
                        "x:link": function(e) {
                            return r.createElement(u.U, {
                                to: "https://www.twitch.tv/p/legal/affiliate-agreement"
                            }, e)
                        }
                    }, "AffiliateAgreement")))
                },
                Yn = function() {
                    return r.createElement(r.Fragment, null, r.createElement(u.Wa, {
                        margin: {
                            bottom: 1
                        }
                    }, r.createElement(u.W, {
                        type: u.Ob.H4
                    }, Object(p.d)("Twitch Partner Program Terms", "CustomPartnerAgreement"))), r.createElement(u.W, {
                        type: u.Ob.P
                    }, Object(p.d)("Your Twitch Partner Agreement has been emailed to you via DocuSign. Check the inbox of the email address associated with your Twitch account for an email from DocuSign/Twitch and follow the instructions. Once you have signed the Twitch Partner Agreement, please click {buttonLabel} to continue.", {
                        buttonLabel: Object(p.d)("Next", "CustomPartnerAgreement")
                    }, "CustomPartnerAgreement")))
                },
                Gn = function() {
                    return r.createElement(r.Fragment, null, r.createElement(u.Wa, {
                        margin: {
                            bottom: 1
                        }
                    }, r.createElement(u.W, {
                        type: u.Ob.H4
                    }, Object(p.d)("Twitch Extensions Developer Program Terms", "ExtensionsDeveloperAgreement"))), r.createElement(u.W, {
                        type: u.Ob.P
                    }, Object(p.d)("It looks like you've already agreed to the Twitch Developer Agreement! Click {buttonLabel} to continue.", {
                        buttonLabel: Object(p.d)("Next", "ExtensionsDeveloperAgreement")
                    }, "ExtensionsDeveloperAgreement")))
                },
                qn = function(e) {
                    return r.createElement(u.yb, {
                        background: u.r.Alt2,
                        padding: {
                            x: 2,
                            y: 1
                        }
                    }, r.createElement(u.Wa, {
                        display: u.X.InlineBlock,
                        margin: {
                            right: 1
                        }
                    }, r.createElement(u.W, {
                        type: u.Ob.H5,
                        transform: u.Nb.Uppercase,
                        color: u.O.Alt,
                        bold: !0
                    }, e.title)), !!e.statusText && r.createElement(u.Wa, {
                        display: u.X.InlineBlock
                    }, r.createElement(u.W, {
                        type: u.Ob.H4,
                        transform: u.Nb.Uppercase,
                        bold: !0
                    }, r.createElement(u.bb, {
                        label: e.statusText,
                        type: e.statusType
                    }))))
                },
                Xn = function(e) {
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
                        return r.createElement(r.Fragment, null, r.createElement(qn, {
                            title: Object(p.d)("Parent Consent", "ParentConfirmation")
                        }), r.createElement(u.Wa, {
                            padding: 2
                        }, r.createElement(u.W, {
                            type: u.Ob.P,
                            color: u.O.Alt2
                        }, Object(p.d)("Parent or legal guardian: Please type your first and last name and check the box below.", "ParentConfirmation")), r.createElement(u.Wa, {
                            margin: {
                                top: 2
                            }
                        }, r.createElement(u.Da, {
                            label: Object(p.d)("Parent or Legal Guardian Name", "ParentConfirmation"),
                            orientation: u.Ea.Horizontal
                        }, r.createElement(u.Wa, {
                            margin: {
                                bottom: 1
                            }
                        }, r.createElement(u.Qa, {
                            type: u.Sa.Text,
                            placeholder: Object(p.d)("First and Last Name", "ParentConfirmation"),
                            value: this.state.parentName,
                            onChange: this.handleParentNameChange
                        })), r.createElement(u.N, {
                            label: Object(p.d)("I hereby warrant that I am the (parent)/(guardian) of the Twitch user associated with this account, a minor, and have full authority to authorize this Agreement, which I have read and approved. I hereby agree that I and said minor will be bound by all provisions contained in this Agreement.", "ParentConfirmation"),
                            checked: this.state.checked,
                            onChange: this.toggleChecked
                        })))))
                    }, t
                }(r.Component),
                Qn = function() {
                    return r.createElement(r.Fragment, null, r.createElement(u.Wa, {
                        margin: {
                            bottom: 1
                        }
                    }, r.createElement(u.W, {
                        type: u.Ob.H4
                    }, Object(p.d)("Twitch Partner Program Terms", "PartnerRedoInfo"))), r.createElement(u.W, {
                        type: u.Ob.P
                    }, Object(p.d)("It looks like you've already agreed to the Twitch Partner Agreement! Click {buttonLabel} to continue.", {
                        buttonLabel: Object(p.d)("Next", "PartnerRedoInfo")
                    }, "PartnerRedoInfo")))
                },
                Hn = function(e) {
                    return r.createElement(u.Wa, {
                        position: u.eb.Relative
                    }, r.createElement(u.Wa, {
                        position: u.eb.Absolute,
                        attachRight: !0
                    }, r.createElement(u.z, {
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
                                var e, t, n, r, i, o;
                                return a.__generator(this, function(s) {
                                    switch (s.label) {
                                        case 0:
                                            return this.props.onboardEntity === mt.OnboardEntity.StandardPartner || this.props.onboardEntity === mt.OnboardEntity.PremiumPartner ? (n = this.props.data.currentUser.programAgreement || "", e = n && n.type, t = n && n.version) : (e = this.props.onboardEntity, t = "v1"), r = a.__assign({}, Object(k.a)({
                                                type: e,
                                                version: t
                                            })), [4, this.props.acceptProgramAgreement(r)];
                                        case 1:
                                            return (i = s.sent()).data.acceptProgramAgreement.error ? (this.setState({
                                                processingAgreement: !1
                                            }), [2]) : (o = function(e) {
                                                return e.currentUser.payoutInvite && e.currentUser.payoutInvite.workflow && i.data.acceptProgramAgreement.workflow && (e.currentUser.payoutInvite.workflow.currentStep = i.data.acceptProgramAgreement.workflow.currentStep), e
                                            }, this.props.updateContainerQuery(o), this.props.updateStepDisplayed(mt.OnboardStep.TaxInterview), [2])
                                    }
                                })
                            })
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        if (this.props.data.loading) return r.createElement(w.a, null, r.createElement(_.a, null, r.createElement(u.db, {
                            lineCount: 4
                        })));
                        if (this.props.data.error) return r.createElement(w.a, null, r.createElement(_.a, null, r.createElement(g.a, {
                            message: Object(p.d)("Oops, something went wrong.", "PayoutOnboardingAgreement")
                        })));
                        var e = r.createElement(u.z, {
                            "data-test-selector": "payout-onboarding-agreement__proceed-button",
                            disabled: this.proceedButtonDisabled || this.state.processingAgreement,
                            state: this.state.processingAgreement ? u.E.Loading : u.E.Default,
                            onClick: this.handleAgreeClick
                        }, this.skipAgreement ? Object(p.d)("Next", "PayoutOnboardingAgreement") : Object(p.d)("Agree", "PayoutOnboardingAgreement"));
                        return r.createElement(w.a, {
                            footer: e
                        }, r.createElement(_.a, null, r.createElement(u.yb, {
                            borderMarked: !0,
                            background: u.r.Base,
                            padding: 2,
                            elevation: 1
                        }, this.renderAgreement)), !this.skipAgreement && this.requiresParentConsent && r.createElement(Xn, {
                            updateParentName: this.updateParentName,
                            updateParentConfirmation: this.updateParentConfirmation
                        }))
                    }, Object.defineProperty(t.prototype, "renderAgreement", {
                        get: function() {
                            if (this.isPartnerRedo) return r.createElement(Qn, null);
                            switch (this.props.onboardEntity) {
                                case mt.OnboardEntity.Affiliate:
                                    return r.createElement(zn, null);
                                case mt.OnboardEntity.ExtensionsDeveloper:
                                    return r.createElement(Gn, null);
                                case mt.OnboardEntity.StandardPartner:
                                case mt.OnboardEntity.PremiumPartner:
                                    var e = this.props.data.currentUser.programAgreement;
                                    return e && r.createElement(Hn, {
                                        body: e.body
                                    });
                                case mt.OnboardEntity.CustomPartner:
                                    return r.createElement(Yn, null);
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
                                return e.category === mt.PayoutCategory.Partner
                            });
                            return !!e && (!!e.isReceivingRevenue && (!!e.tags && (!(!this.props.data.currentUser.payoutInvite || !this.props.data.currentUser.payoutInvite.isLegacy) || !e.tags.includes(mt.PayoutPlanTag.Legacy) && (e.tags.includes(mt.PayoutPlanTag.Standard) ? this.props.onboardEntity === mt.OnboardEntity.StandardPartner : e.tags.includes(mt.PayoutPlanTag.Premium) ? this.props.onboardEntity === mt.OnboardEntity.PremiumPartner : !!e.tags.includes(mt.PayoutPlanTag.Custom) && this.props.onboardEntity === mt.OnboardEntity.CustomPartner))))
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "skipAgreement", {
                        get: function() {
                            return this.props.onboardEntity === mt.OnboardEntity.ExtensionsDeveloper || this.props.onboardEntity === mt.OnboardEntity.CustomPartner || this.isPartnerRedo
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "requiresParentConsent", {
                        get: function() {
                            if (!this.props.workflow.registration) return !1;
                            var e = this.props.workflow.registration.birthdate;
                            return Object(Mn.differenceInYears)(new Date, e) < 18
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
                Kn = Object(v.compose)(Object(b.a)($n, {
                    name: "data",
                    options: function(e) {
                        return {
                            variables: {
                                withAgreement: e.onboardEntity === mt.OnboardEntity.StandardPartner || e.onboardEntity === mt.OnboardEntity.PremiumPartner
                            }
                        }
                    }
                }), Object(b.a)(Vn, {
                    name: "acceptProgramAgreement"
                }))(Zn),
                Jn = n("+ZoN"),
                ea = Object(b.a)(Jn)(function(e) {
                    if (e.data.loading) return null;
                    if (e.status === Rn.Completed) return null;
                    var t;
                    if (e.status === Rn.UnderReview) switch (e.onboardEntity) {
                        case mt.OnboardEntity.ExtensionsDeveloper:
                            t = r.createElement(u.W, null, Object(p.d)("Your financial information is currently under review. This process usually takes a few minutes.", "PayoutInfoBrick"));
                            break;
                        case mt.OnboardEntity.Affiliate:
                        case mt.OnboardEntity.StandardPartner:
                        case mt.OnboardEntity.PremiumPartner:
                        case mt.OnboardEntity.CustomPartner:
                            t = r.createElement(u.W, null, Object(p.d)("Your payout information is currently under review. This typically only takes a few minutes.", "PayoutInfoBrick"))
                    } else if (e.status === Rn.NotStarted) {
                        var n = !!(e.data && e.data.currentUser && e.data.currentUser.roles && e.data.currentUser.roles.isPartner && e.data.currentUser.roles.isExtensionsDeveloper);
                        t = r.createElement(r.Fragment, null, r.createElement(u.Wa, {
                            margin: {
                                bottom: 1
                            }
                        }, r.createElement(u.W, null, Object(p.d)("Here you choose how you want to be paid. You must accrue at least $100 in revenue before you are eligible for a payout", "PayoutInfoBrick"))), r.createElement(u.Wa, {
                            margin: {
                                bottom: 1
                            }
                        }, r.createElement(u.W, null, Object(p.d)("Choose Hold Payouts to have us hold your money until you request a payout; otherwise, you will be paid automatically.", "PayoutInfoBrick"))), e.onboardEntity === mt.OnboardEntity.Affiliate && !n && r.createElement(u.W, null, Object(p.d)("Twitch uses a third party to process your payouts and the processor charges a transaction fee each time you get paid. The fees vary based on the payout method. See the fees <x:link>here.</x:link>", {
                            "x:link": function(e) {
                                return r.createElement(u.U, {
                                    to: "https://help.twitch.tv/customer/portal/articles/2785925-affiliate-onboarding-guide#fees",
                                    targetBlank: !0
                                }, e)
                            }
                        }, "PayoutInfoBrick")))
                    }
                    return r.createElement(u.yb, {
                        borderMarked: !0,
                        padding: 2,
                        margin: {
                            bottom: 2
                        },
                        elevation: 1
                    }, t)
                }),
                ta = function(e) {
                    var t;
                    switch (e.onboardEntity) {
                        case mt.OnboardEntity.Affiliate:
                            t = "https://help.twitch.tv/customer/portal/articles/2785925-affiliate-onboarding-guide";
                            break;
                        case mt.OnboardEntity.ExtensionsDeveloper:
                            t = "https://dev.twitch.tv/docs/extensions/onboarding";
                            break;
                        case mt.OnboardEntity.StandardPartner:
                        case mt.OnboardEntity.PremiumPartner:
                        case mt.OnboardEntity.CustomPartner:
                            t = "https://help.twitch.tv/customer/portal/articles/2853658-partner-onboarding-guide";
                            break;
                        default:
                            return null
                    }
                    return r.createElement(u.W, {
                        type: u.Ob.P
                    }, Object(p.d)("Need Help? <x:link>See our detailed onboarding guide.</x:link>", {
                        "x:link": function(e) {
                            return r.createElement(u.U, {
                                to: t,
                                targetBlank: !0
                            }, e)
                        }
                    }, "OnboardingGuideLink"))
                },
                na = function(e) {
                    var t;
                    return e.onboardEntity === mt.OnboardEntity.ExtensionsDeveloper ? (e.status === Rn.NotStarted && (t = r.createElement(u.W, null, Object(p.d)("Click the button below to submit your financial information.", "PayoutInfoText"))), e.status === Rn.UnderReview && (t = r.createElement(u.W, null, Object(p.d)("You can change your financial information if you wish to modify any previously submitted information. You may want to do this if your financial information has been under review for more than 48 hours.", "PayoutInfoText"))), e.status === Rn.Completed && (t = r.createElement(r.Fragment, null, r.createElement(u.Wa, {
                        margin: {
                            bottom: 1
                        }
                    }, r.createElement(u.W, null, Object(p.d)("Your financial information was successfully validated.", "PayoutInfoText"))), r.createElement(u.W, null, Object(p.d)("Click the button below if you wish to modify or correct any previously submitted financial information. Please note that this will erase your existing financial information and you will need to fully complete the form again.", "PayoutInfoText"))))) : (e.status === Rn.NotStarted && (t = r.createElement(u.W, null, Object(p.d)("Click the button below to submit your payout method.", "PayoutInfoText"))), e.status === Rn.UnderReview && (t = r.createElement(u.W, null, Object(p.d)("You can change your payout method if you wish to modify any previously submitted information. You may want to do this if your payout information has been under review for more than 48 hours.", "PayoutInfoText"))), e.status === Rn.Completed && (t = r.createElement(r.Fragment, null, r.createElement(u.Wa, {
                        margin: {
                            bottom: 1
                        }
                    }, r.createElement(u.W, null, Object(p.d)("Your payout information was successfully validated.", "PayoutInfoText"))), r.createElement(u.W, null, Object(p.d)("Click the button below if you wish to modify or correct any previously submitted payout information. Please note that this will erase your existing payout information and you will need to fully complete the form again.", "PayoutInfoText"))))), r.createElement(r.Fragment, null, r.createElement(u.Wa, {
                        margin: {
                            bottom: 2
                        }
                    }, t), e.status !== Rn.Completed && r.createElement(u.Wa, {
                        margin: {
                            bottom: 2
                        }
                    }, r.createElement(ta, {
                        onboardEntity: e.onboardEntity
                    })))
                },
                aa = n("cZKs"),
                ra = n("+GjP"),
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
                        return r.createElement(u.Wa, {
                            className: "tipalti-iframe--container"
                        }, !this.state.tipaltiIframeLoaded && r.createElement(u.Ya, {
                            fillContent: !0
                        }), r.createElement(u.Wa, {
                            "data-test-selector": "tipalti-iframe__iframe-container",
                            fullHeight: !0,
                            display: this.state.tipaltiIframeLoaded ? u.X.Block : u.X.Hide
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
                oa = n("qQoZ"),
                sa = (n("ct+5"), function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        return this.tipaltiURL ? r.createElement(u.yb, {
                            className: "payout-method-modal__container",
                            background: u.r.Base,
                            padding: 2
                        }, r.createElement(ia, {
                            tipaltiURL: this.tipaltiURL
                        })) : this.props.data.error ? r.createElement(u.yb, {
                            className: "payout-method-modal__container",
                            background: u.r.Base,
                            padding: 5
                        }, r.createElement(g.a, {
                            message: Object(p.d)("Oops, something went wrong.", "PayoutMethodModal")
                        })) : r.createElement(u.yb, {
                            className: "payout-method-modal__container",
                            background: u.r.Base,
                            padding: 5
                        }, r.createElement(u.Ya, {
                            fillContent: !0
                        }))
                    }, Object.defineProperty(t.prototype, "tipaltiURL", {
                        get: function() {
                            return this.props.data.currentUser && this.props.data.currentUser.payoutInvite && this.props.data.currentUser.payoutInvite.workflow && this.props.data.currentUser.payoutInvite.workflow.payoutSettingsURL
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t
                }(r.Component)),
                la = Object(v.compose)(Object(b.a)(oa, {
                    options: function() {
                        return {
                            variables: {
                                redirectURL: Object(ra.e)(window.location.href, {
                                    redirect_tipalti: "true"
                                })
                            }
                        }
                    }
                }))(sa),
                da = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        return r.createElement(u.Wa, null, r.createElement(la, null), r.createElement(aa.a, {
                            closeOnBackdropClick: !0
                        }))
                    }, t
                }(r.Component);
            ! function(e) {
                e[e.NotStarted = 0] = "NotStarted", e[e.UnderReview = 1] = "UnderReview", e[e.Completed = 2] = "Completed"
            }(Rn || (Rn = {}));
            var ca = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.handleContinueClick = function() {
                        var e = t.isCustomPartnerOnboarding ? mt.OnboardStep.Review : mt.OnboardStep.Summary;
                        t.props.updateStepDisplayed(e)
                    }, t
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    return r.createElement(w.a, null, r.createElement(qn, {
                        title: Object(p.d)("Payout Method", "PayoutOnboardingPayoutMethod"),
                        statusText: this.payoutStatusText,
                        statusType: this.payoutStatusType,
                        borderTop: !0
                    }), r.createElement(u.yb, {
                        borderTop: !0,
                        borderBottom: !0,
                        padding: 2
                    }, r.createElement(ea, {
                        onboardEntity: this.props.onboardEntity,
                        status: this.payoutMethodStatus
                    }), r.createElement(na, {
                        onboardEntity: this.props.onboardEntity,
                        status: this.payoutMethodStatus
                    }), r.createElement(u.z, {
                        onClick: this.props.showPayoutMethodModal,
                        type: this.payoutMethodStatus === Rn.NotStarted ? u.F.Default : u.F.Hollow
                    }, this.payoutMethodButtonText)), r.createElement(u.yb, {
                        padding: 2,
                        background: u.r.Alt2
                    }, r.createElement(u.z, {
                        onClick: this.handleContinueClick,
                        disabled: this.continueButtonDisabled
                    }, this.isCustomPartnerOnboarding ? Object(p.d)("Continue", "PayoutOnboardingPayoutMethod") : Object(p.d)("Done", "PayoutOnboardingPayoutMethod"))))
                }, Object.defineProperty(t.prototype, "isExtensionsDeveloperOnboarding", {
                    get: function() {
                        return this.props.onboardEntity === mt.OnboardEntity.ExtensionsDeveloper
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "isCustomPartnerOnboarding", {
                    get: function() {
                        return this.props.onboardEntity === mt.OnboardEntity.CustomPartner
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "payoutMethodStatus", {
                    get: function() {
                        switch (this.props.workflow.currentStep) {
                            case mt.WorkflowState.PAYOUT_METHOD_PENDING:
                                return Rn.UnderReview;
                            case mt.WorkflowState.COMPLETED:
                            case mt.WorkflowState.REVIEW_PENDING:
                                return Rn.Completed;
                            default:
                                return Rn.NotStarted
                        }
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "payoutStatusText", {
                    get: function() {
                        switch (this.payoutMethodStatus) {
                            case Rn.UnderReview:
                                return Object(p.d)("Under Review", "PayoutOnboardingPayoutMethod");
                            case Rn.Completed:
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
                            case Rn.UnderReview:
                                return u.cb.Prime;
                            case Rn.Completed:
                                return u.cb.Success;
                            default:
                                return
                        }
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "payoutMethodButtonText", {
                    get: function() {
                        return this.isExtensionsDeveloperOnboarding ? this.payoutMethodStatus === Rn.NotStarted ? Object(p.d)("Set Financial Information", "PayoutOnboardingPayoutMethod") : Object(p.d)("Change Financial Information", "PayoutOnboardingPayoutMethod") : this.payoutMethodStatus === Rn.NotStarted ? Object(p.d)("Set Payout Method", "PayoutOnboardingPayoutMethod") : Object(p.d)("Change Payout Method", "PayoutOnboardingPayoutMethod")
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "continueButtonDisabled", {
                    get: function() {
                        var e = this.props.workflow.currentStep;
                        return this.isCustomPartnerOnboarding ? e !== mt.WorkflowState.REVIEW_PENDING : e === mt.WorkflowState.PAYOUT_METHOD_NOT_STARTED
                    },
                    enumerable: !0,
                    configurable: !0
                }), t
            }(r.Component);
            var ua, ma = Object(v.compose)(Object(Ze.connect)(null, function(e) {
                    return Object(v.bindActionCreators)({
                        showPayoutMethodModal: function() {
                            return Object(Ke.d)(da, null)
                        }
                    }, e)
                }))(ca),
                pa = /^[\s\da-zA-Z&\-,‘'\/#\.%]*$/,
                ga = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
                ha = function() {
                    return Object(p.d)("Only the English alphabet (non-accented Latin characters), numbers, and these special characters & - , ‘ / # . % are accepted.", "PayoutOnboardingRegistration")
                },
                ba = function() {
                    return Object(p.d)("Must provide a valid email address.", "PayoutOnboardingRegistration")
                },
                fa = function() {
                    return Object(p.d)("optional", "PayoutOnboardingRegistration")
                };
            ! function(e) {
                e.FIRST_NAME = "contact-info__first-name", e.MIDDLE_NAME = "contact-info__middle-name", e.LAST_NAME = "contact-info__last-name", e.EMAIL = "contact-info__email", e.CONFIRM_EMAIL = "contact-info__confirm-email", e.COMPANY_LEGAL_NAME = "contact-info__company-legal-name"
            }(ua || (ua = {}));
            var va, ya = function(e) {
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
                        return ha()
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "invalidEmailErrorMessage", {
                    get: function() {
                        return ba()
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "optionalText", {
                    get: function() {
                        return fa()
                    },
                    enumerable: !0,
                    configurable: !0
                }), t.prototype.render = function() {
                    return r.createElement(u.Wa, {
                        padding: 2
                    }, r.createElement(u.Wa, {
                        margin: {
                            bottom: 2
                        }
                    }, r.createElement(u.Da, {
                        label: Object(p.d)("Channel Name", "ContactInfo")
                    }, r.createElement(u.Qa, {
                        type: u.Sa.Text,
                        value: this.props.channelName,
                        disabled: !0
                    }))), r.createElement(u.Wa, {
                        margin: {
                            bottom: 2
                        }
                    }, r.createElement(u.Da, {
                        label: Object(p.d)("First Name", "ContactInfo"),
                        error: !pa.test(this.state.firstName),
                        errorMessage: this.invalidFormatErrorMessage,
                        "data-test-selector": ua.FIRST_NAME
                    }, r.createElement(u.Qa, {
                        autoFocus: !0,
                        type: u.Sa.Text,
                        value: this.state.firstName,
                        onChange: this.updateFirstName,
                        error: !pa.test(this.state.firstName)
                    }))), r.createElement(u.Wa, {
                        margin: {
                            bottom: 2
                        }
                    }, r.createElement(u.Da, {
                        label: Object(p.d)("Middle Name", "ContactInfo"),
                        labelOptional: this.optionalText,
                        error: !pa.test(this.state.middleName),
                        errorMessage: this.invalidFormatErrorMessage,
                        "data-test-selector": ua.MIDDLE_NAME
                    }, r.createElement(u.Qa, {
                        type: u.Sa.Text,
                        value: this.state.middleName,
                        onChange: this.updateMiddleName,
                        error: !pa.test(this.state.middleName)
                    }))), r.createElement(u.Wa, {
                        margin: {
                            bottom: 2
                        }
                    }, r.createElement(u.Da, {
                        label: Object(p.d)("Last Name", "ContactInfo"),
                        hint: Object(p.d)("Please type your full legal name. This must be the name shown on your income tax return used to report income.", "ContactInfo"),
                        error: !pa.test(this.state.lastName),
                        errorMessage: this.invalidFormatErrorMessage,
                        "data-test-selector": ua.LAST_NAME
                    }, r.createElement(u.Qa, {
                        type: u.Sa.Text,
                        value: this.state.lastName,
                        onChange: this.updateLastName,
                        error: !pa.test(this.state.lastName)
                    }))), r.createElement(u.Wa, {
                        margin: {
                            bottom: 2
                        }
                    }, r.createElement(Ka, {
                        onMonthChange: this.props.onMonthChange,
                        onDayChange: this.props.onDayChange,
                        onYearChange: this.props.onYearChange
                    })), r.createElement(u.Wa, {
                        margin: {
                            bottom: 2
                        }
                    }, r.createElement(u.Da, {
                        label: Object(p.d)("Email", "ContactInfo"),
                        hint: Object(p.d)("We will use this email to send you important tax documentation and payout information.", "ContactInfo"),
                        error: this.showEmailError,
                        errorMessage: this.invalidEmailErrorMessage,
                        "data-test-selector": ua.EMAIL
                    }, r.createElement(u.Qa, {
                        type: u.Sa.Email,
                        value: this.state.email,
                        onChange: this.updateEmail,
                        onFocus: this.onEmailFocus,
                        onBlur: this.onEmailBlur,
                        error: this.showEmailError
                    }))), r.createElement(u.Wa, {
                        margin: {
                            bottom: 2
                        }
                    }, r.createElement(u.Da, {
                        label: Object(p.d)("Confirm Email", "ContactInfo"),
                        error: this.showConfirmEmailError,
                        errorMessage: Object(p.d)("Email addresses must match.", "ContactInfo"),
                        "data-test-selector": ua.CONFIRM_EMAIL
                    }, r.createElement(u.Qa, {
                        type: u.Sa.Email,
                        value: this.state.confirmEmail,
                        onChange: this.updateConfirmEmail,
                        onFocus: this.onConfirmEmailFocus,
                        onBlur: this.onConfirmEmailBlur,
                        error: this.showConfirmEmailError
                    }))), r.createElement(u.Wa, null, r.createElement(u.Da, {
                        label: Object(p.d)("Company Legal Name", "ContactInfo"),
                        labelOptional: this.optionalText,
                        error: !pa.test(this.state.companyName),
                        errorMessage: this.invalidFormatErrorMessage,
                        "data-test-selector": ua.COMPANY_LEGAL_NAME
                    }, r.createElement(u.Qa, {
                        type: u.Sa.Text,
                        value: this.state.companyName,
                        onChange: this.updateCompanyName,
                        error: !pa.test(this.state.companyName)
                    }))))
                }, Object.defineProperty(t.prototype, "showEmailError", {
                    get: function() {
                        return !this.state.emailFocused && !!this.state.email && !ga.test(this.state.email)
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
            }(r.Component);
            ! function(e) {
                e.PARENT_NAME = "parent-info__parent-name", e.PARENT_EMAIL = "parent-info__parent-email"
            }(va || (va = {}));
            var Ea = function(e) {
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
                        return ha()
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "invalidEmailErrorMessage", {
                    get: function() {
                        return ba()
                    },
                    enumerable: !0,
                    configurable: !0
                }), t.prototype.render = function() {
                    return r.createElement(u.Wa, {
                        padding: 2
                    }, r.createElement(u.Wa, {
                        margin: {
                            bottom: 2
                        }
                    }, r.createElement(u.Da, {
                        label: Object(p.d)("Parent or Legal Guardian Name", "ParentInfo"),
                        error: !pa.test(this.state.parentName),
                        errorMessage: this.invalidFormatErrorMessage,
                        "data-test-selector": va.PARENT_NAME
                    }, r.createElement(u.Qa, {
                        type: u.Sa.Text,
                        value: this.state.parentName,
                        onChange: this.updateParentName,
                        error: !pa.test(this.state.parentName)
                    }))), r.createElement(u.Wa, null, r.createElement(u.Da, {
                        label: Object(p.d)("Parent or Legal Guardian Email", "ParentInfo"),
                        hint: Object(p.d)("Individuals under the age of 18 must provide parent or legal guardian information.", "ParentInfo"),
                        error: !!this.state.parentEmail && !ga.test(this.state.parentEmail),
                        errorMessage: this.invalidEmailErrorMessage,
                        "data-test-selector": va.PARENT_EMAIL
                    }, r.createElement(u.Qa, {
                        type: u.Sa.Email,
                        value: this.state.parentEmail,
                        onChange: this.updateParentEmail,
                        error: !!this.state.parentEmail && !ga.test(this.state.parentEmail)
                    }))))
                }, t
            }(r.Component);

            function Sa(e) {
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
            var ka = ["AB", "BC", "MB", "NB", "NL", "NT", "NS", "NU", "ON", "PE", "QC", "SK", "YT"],
                Oa = n("Jgup");

            function Na(e) {
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
            var Ta, Ca = ["AL", "AK", "AZ", "AR", "AA", "AE", "AP", "CA", "CO", "CT", "DE", "DC", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"],
                Pa = ["A1", "A2", "AP", "CU", "EU", "IR", "KP", "MM", "SD", "SS", "SY", "TL"];
            ! function(e) {
                e.COUNTRY = "permanent-address__country", e.STREET_ADDRESS = "permanent-address__street-address", e.STREET_ADDRESS_2 = "permanent-address__street-address-2", e.CITY = "permanent-address__city", e.STATE = "permanent-address__state", e.POSTAL = "permanent-address__postal"
            }(Ta || (Ta = {}));
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
                            return Pa.includes(e) ? null : r.createElement("option", {
                                value: e,
                                key: "countryCode-" + e
                            }, Object(Oa.b)(e))
                        }), t.usaStateSelections = Ca.map(function(e) {
                            return r.createElement("option", {
                                value: e,
                                key: "usaStateCode-" + e
                            }, Na(e))
                        }), t.canadaStateSelections = ka.map(function(e) {
                            return r.createElement("option", {
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
                            return ha()
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "optionalText", {
                        get: function() {
                            return fa()
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t.prototype.render = function() {
                        return r.createElement(r.Fragment, null, r.createElement(u.Wa, {
                            padding: {
                                x: 2,
                                top: 2,
                                bottom: 0
                            }
                        }, r.createElement(u.W, {
                            fontSize: u.Ba.Size6
                        }, Object(p.d)("Your permanent address is your primary residential address. It is not your P.O. Box or mailing address. If you are a college student studying in another state, but still have a permanent address in your home state (such as your parents' house), then your home state is your principal residence address. If you are registering on behalf of a corporation, please input the primary headquarters address.", "PermanentAddress"))), r.createElement(u.Wa, {
                            className: "payout-onboarding-registration__form-container",
                            padding: 2
                        }, r.createElement(u.Wa, {
                            margin: {
                                bottom: 2
                            }
                        }, r.createElement(u.Da, {
                            label: Object(p.d)("Country", "PermanentAddress")
                        }, r.createElement(u.tb, {
                            defaultValue: "",
                            onChange: this.handleCountryChange,
                            "data-test-selector": Ta.COUNTRY
                        }, r.createElement("option", {
                            value: "",
                            disabled: !0
                        }), this.countrySelections))), r.createElement(u.Wa, {
                            margin: {
                                bottom: 2
                            }
                        }, r.createElement(u.Da, {
                            label: Object(p.d)("Street Address", "PermanentAddress"),
                            error: !pa.test(this.state.streetAddress),
                            errorMessage: this.invalidFormatErrorMessage,
                            "data-test-selector": Ta.STREET_ADDRESS
                        }, r.createElement(u.Qa, {
                            type: u.Sa.Text,
                            value: this.state.streetAddress,
                            onChange: this.handleStreetAddressChange,
                            error: !pa.test(this.state.streetAddress)
                        }))), r.createElement(u.Wa, {
                            margin: {
                                bottom: 2
                            }
                        }, r.createElement(u.Da, {
                            label: Object(p.d)("Street Address 2", "PermanentAddress"),
                            labelOptional: this.optionalText,
                            error: !pa.test(this.state.streetAddress2),
                            errorMessage: this.invalidFormatErrorMessage,
                            "data-test-selector": Ta.STREET_ADDRESS_2
                        }, r.createElement(u.Qa, {
                            type: u.Sa.Text,
                            value: this.state.streetAddress2,
                            onChange: this.handleStreetAddress2Change,
                            error: !pa.test(this.state.streetAddress2)
                        }))), r.createElement(u.Wa, {
                            margin: {
                                bottom: 2
                            }
                        }, r.createElement(u.Da, {
                            label: Object(p.d)("City or Town", "PermanentAddress"),
                            error: !pa.test(this.state.city),
                            errorMessage: this.invalidFormatErrorMessage,
                            "data-test-selector": Ta.CITY
                        }, r.createElement(u.Qa, {
                            type: u.Sa.Text,
                            value: this.state.city,
                            onChange: this.handleCityChange,
                            error: !pa.test(this.state.city)
                        }))), r.createElement(u.Wa, {
                            margin: {
                                bottom: 2
                            }
                        }, r.createElement(u.Da, {
                            label: Object(p.d)("State/Province", "PermanentAddress"),
                            labelOptional: "US" !== this.state.country && "CA" !== this.state.country ? this.optionalText : void 0,
                            error: !pa.test(this.state.state),
                            errorMessage: this.invalidFormatErrorMessage,
                            "data-test-selector": Ta.STATE
                        }, "US" === this.state.country && r.createElement(u.tb, {
                            onChange: this.handleStateSelectionChange
                        }, this.usaStateSelections), "CA" === this.state.country && r.createElement(u.tb, {
                            onChange: this.handleStateSelectionChange
                        }, this.canadaStateSelections), "US" !== this.state.country && "CA" !== this.state.country && r.createElement(u.Qa, {
                            type: u.Sa.Text,
                            value: this.state.state,
                            onChange: this.handleStateInputChange,
                            error: !pa.test(this.state.state)
                        }))), r.createElement(u.Wa, null, r.createElement(u.Da, {
                            label: Object(p.d)("Zip Code/Postal Code", "PermanentAddress"),
                            labelOptional: "US" !== this.state.country ? this.optionalText : void 0,
                            error: !pa.test(this.state.postal),
                            errorMessage: this.invalidFormatErrorMessage,
                            "data-test-selector": Ta.POSTAL
                        }, r.createElement(u.Qa, {
                            type: u.Sa.Text,
                            value: this.state.postal,
                            onChange: this.handlePostalChange,
                            onBlur: this.formatUniquePostalCodes,
                            error: !pa.test(this.state.postal)
                        })))))
                    }, t
                }(r.Component),
                Aa = function() {
                    return Object(p.d)("Please fill them out using the following guidelines: <x:link>Amazon Tax Information Interview Guidelines</x:link>", {
                        "x:link": function(e) {
                            return r.createElement(u.U, {
                                to: "https://help.twitch.tv/customer/portal/articles/2083680",
                                targetBlank: !0
                            }, e)
                        }
                    }, "RegistrationInfoBrick")
                },
                Ia = function() {
                    return r.createElement(r.Fragment, null, r.createElement(u.Wa, {
                        margin: {
                            bottom: 1
                        }
                    }, r.createElement(u.W, {
                        fontSize: u.Ba.Size6
                    }, Object(p.d)("Financial information is required to validate your identity. Further, providing this information enables you to participate with any monetization features that may become available.", "RegistrationInfoBrick"))), r.createElement(u.Wa, {
                        margin: {
                            bottom: 1
                        }
                    }, r.createElement(u.W, {
                        fontSize: u.Ba.Size6
                    }, Object(p.d)("Twitch is a subsidiary of Amazon and will use some Amazon tools to register and approve your information for Extensions development.", "RegistrationInfoBrick"))), r.createElement(u.Wa, {
                        margin: {
                            bottom: 1
                        }
                    }, r.createElement(u.W, {
                        fontSize: u.Ba.Size6
                    }, Aa())), r.createElement(u.Wa, {
                        margin: {
                            bottom: 1
                        }
                    }, r.createElement(u.W, {
                        fontSize: u.Ba.Size6
                    }, Object(p.d)("If you are registering on behalf of a company, please fill in the company's information. If you are an individual, please use your personal information.", "RegistrationInfoBrick"))), r.createElement(u.Wa, {
                        margin: {
                            bottom: 1
                        }
                    }, r.createElement(u.W, {
                        fontSize: u.Ba.Size6
                    }, Object(p.d)("The form must match your tax information exactly and any inconsistencies may cause delays in your registration approval.", "RegistrationInfoBrick"))), r.createElement(u.Wa, null, r.createElement(u.W, {
                        fontSize: u.Ba.Size6
                    }, Object(p.d)("You will be able to edit this page later if your information changes.", "RegistrationInfoBrick"))))
                },
                xa = function() {
                    return r.createElement(r.Fragment, null, r.createElement(u.Wa, {
                        margin: {
                            bottom: 1
                        }
                    }, r.createElement(u.W, {
                        fontSize: u.Ba.Size6
                    }, Object(p.d)("Twitch is a subsidiary of Amazon, and will use some Amazon tools to help you get paid, including the forms on this page.", "RegistrationInfoBrick"))), r.createElement(u.Wa, {
                        margin: {
                            bottom: 1
                        }
                    }, r.createElement(u.W, {
                        fontSize: u.Ba.Size6
                    }, Aa())), r.createElement(u.W, {
                        fontSize: u.Ba.Size6
                    }, Object(p.d)("This form must match your tax information exactly, and any inconsistencies may cause delays in your Payout Registration approval. Don't worry, you will still be able to edit this page later on if your information changes.", "RegistrationInfoBrick")))
                },
                Da = function(e) {
                    return r.createElement(r.Fragment, null, e.onboardEntity === mt.OnboardEntity.ExtensionsDeveloper ? r.createElement(Ia, null) : r.createElement(xa, null))
                };
            ! function(e) {
                e.MONTH = "select-birthdate__month", e.YEAR = "select-birthdate__year", e.DAY = "select-birthdate__day"
            }(_a || (_a = {}));
            for (var Ra = [], Fa = (new Date).getFullYear(), ja = Fa; ja > Fa - 100; ja--) Ra.push(r.createElement("option", {
                value: ja,
                key: "year-" + ja
            }, ja));
            var Wa, La, Ba, Ua, Ma, Va, za, Ya, Ga, qa, Xa, Qa, Ha, $a, Za, Ka = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            month: void 0,
                            year: void 0,
                            day: void 0
                        }, t.yearSelections = Ra, t.handleMonthChange = function(e) {
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
                            return Object(Mn.differenceInYears)(new Date, o) < e
                        }, t
                    }
                    return a.__extends(t, e), Object.defineProperty(t.prototype, "daySelections", {
                        get: function() {
                            for (var e = this.state.month, t = this.state.year || Fa, n = void 0 !== e ? new Date(t, e + 1, 0).getDate() : 31, a = [], i = 1; i <= n; i++) a.push(r.createElement("option", {
                                value: i,
                                key: "day-" + i
                            }, i));
                            return a
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t.prototype.render = function() {
                        return r.createElement(u.Da, {
                            label: Object(p.d)("Date of Birth", "SelectBirthdate"),
                            hint: Object(p.d)("If you are registering on behalf of a company, please use your personal date of birth.", "SelectBirthdate"),
                            error: this.isUserYoungerThan(13),
                            errorMessage: Object(p.d)("You must be 13 or older to continue.", "SelectBirthdate")
                        }, r.createElement(u.Ia, {
                            gutterSize: u.Ja.Small
                        }, r.createElement(u.P, {
                            cols: {
                                default: 4
                            }
                        }, r.createElement(u.tb, {
                            defaultValue: "",
                            onChange: this.handleMonthChange,
                            "data-test-selector": _a.MONTH
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
                        }, Object(p.d)("December", "SelectBirthdate")))), r.createElement(u.P, {
                            cols: {
                                default: 4
                            }
                        }, r.createElement(u.tb, {
                            defaultValue: "",
                            onChange: this.handleDayChange,
                            "data-test-selector": _a.DAY
                        }, r.createElement("option", {
                            value: "",
                            disabled: !0
                        }, Object(p.d)("Day", "SelectBirthdate")), this.daySelections)), r.createElement(u.P, {
                            cols: {
                                default: 4
                            }
                        }, r.createElement(u.tb, {
                            defaultValue: "",
                            onChange: this.handleYearChange,
                            "data-test-selector": _a.YEAR
                        }, r.createElement("option", {
                            value: "",
                            disabled: !0
                        }, Object(p.d)("Year", "SelectBirthdate")), this.yearSelections))))
                    }, t
                }(r.Component),
                Ja = n("8HtN"),
                er = (n("dxDy"), function(e) {
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
                            return Object(Mn.differenceInYears)(new Date, o) < e
                        }, t.handleContinueClick = function() {
                            t.setState({
                                submittingRegistration: !0
                            }), t.submitPayoutRegistration()
                        }, t.submitPayoutRegistration = function() {
                            return a.__awaiter(t, void 0, void 0, function() {
                                var e, t, n, r, i, o, s;
                                return a.__generator(this, function(a) {
                                    switch (a.label) {
                                        case 0:
                                            if (e = this.state, t = e.year, n = e.month, r = e.day, void 0 === n || void 0 === r || void 0 === t) return [2];
                                            i = Object(k.a)({
                                                targetUserID: this.props.userID,
                                                birthdate: new Date(t, n, r).toISOString(),
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
                                            return a.trys.push([1, 3, , 4]), [4, this.props.registerPayoutInformation(i)];
                                        case 2:
                                            return !(o = a.sent()).data.registerPayoutInformation || o.data.registerPayoutInformation.error ? (this.setState({
                                                submittingRegistration: !1
                                            }), [2]) : (s = function(e) {
                                                return e.currentUser.payoutInvite.workflow && o.data.registerPayoutInformation && o.data.registerPayoutInformation.workflow && (e.currentUser.payoutInvite.workflow.currentStep = Object(mt.payoutOnboardingStepToWorkflowState)(o.data.registerPayoutInformation.workflow.currentStep), e.currentUser.payoutInvite.workflow.registration = o.data.registerPayoutInformation.workflow.registration), e
                                            }, this.props.updateContainerQuery(s), this.props.updateStepDisplayed(mt.OnboardStep.Agreement), [3, 4]);
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
                    return a.__extends(t, e), t.prototype.render = function() {
                        var e = r.createElement(u.z, {
                            "data-test-selector": "payout-onboarding-registration__continue-button",
                            disabled: !this.isRegistrationComplete || this.state.submittingRegistration,
                            state: this.state.submittingRegistration ? u.E.Loading : u.E.Default,
                            onClick: this.handleContinueClick
                        }, Object(p.d)("Continue", "PayoutOnboardingRegistration"));
                        return r.createElement(w.a, {
                            footer: e
                        }, r.createElement(_.a, null, r.createElement(Da, {
                            onboardEntity: this.props.onboardEntity
                        })), r.createElement(qn, {
                            title: Object(p.d)("Contact Info", "PayoutOnboardingRegistration")
                        }), r.createElement(u.Wa, {
                            className: "payout-onboarding-registration__form-container"
                        }, r.createElement(ya, {
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
                        })), r.createElement(qn, {
                            title: Object(p.d)("Permanent Address", "PayoutOnboardingRegistration")
                        }), r.createElement(wa, {
                            onCountryChange: this.updateCountry,
                            onStreetAddressChange: this.updateStreetAddress,
                            onStreetAddress2Change: this.updateStreetAddress2,
                            onCityChange: this.updateCity,
                            onStateChange: this.updateState,
                            onPostalChange: this.updatePostal
                        }), this.isUserYoungerThan(18) && r.createElement(r.Fragment, null, r.createElement(qn, {
                            title: Object(p.d)("Parent Info", "PayoutOnboardingRegistration")
                        }), r.createElement(u.Wa, {
                            className: "payout-onboarding-registration__form-container"
                        }, r.createElement(Ea, {
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
                            return ga.test(this.state.email) && this.state.email === this.state.confirmEmail
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "validAge", {
                        get: function() {
                            return !this.isUserYoungerThan(13) && !(this.isUserYoungerThan(18) && !(this.state.parentName && pa.test(this.state.parentName) && this.state.parentEmail && ga.test(this.state.parentEmail)))
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "validInputFormat", {
                        get: function() {
                            return !!(pa.test(this.state.firstName) && pa.test(this.state.lastName) && pa.test(this.state.country) && pa.test(this.state.streetAddress) && pa.test(this.state.city)) && !(this.state.middleName && !pa.test(this.state.middleName) || this.state.companyName && !pa.test(this.state.companyName) || this.state.streetAddress2 && !pa.test(this.state.streetAddress2) || this.state.state && !pa.test(this.state.state) || this.state.postal && !pa.test(this.state.postal))
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t
                }(r.Component)),
                tr = Object(v.compose)(Object(b.a)(Ja, {
                    name: "registerPayoutInformation"
                }))(er),
                nr = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.handleContinueClick = function() {
                            t.props.updateStepDisplayed(mt.OnboardStep.Summary)
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        return r.createElement(w.a, null, r.createElement(qn, {
                            title: Object(p.d)("Partnership Approval", "PayoutOnboardingReview"),
                            statusText: this.statusText,
                            statusType: this.statusType,
                            borderTop: !0
                        }), r.createElement(u.yb, {
                            borderTop: !0,
                            borderBottom: !0,
                            padding: 2
                        }, r.createElement(u.yb, {
                            borderMarked: !0,
                            padding: 2
                        }, this.inReview ? Object(p.d)("Your information is currently under review.", "PayoutOnboardingReview") : Object(p.d)("Your information has been validated by the Partnership Team.", "PayoutOnboardingReview"))), r.createElement(u.Wa, {
                            padding: 2
                        }, r.createElement(u.z, {
                            onClick: this.handleContinueClick,
                            disabled: this.inReview
                        }, Object(p.d)("Continue", "PayoutOnboardingReview"))))
                    }, Object.defineProperty(t.prototype, "inReview", {
                        get: function() {
                            return this.props.workflow.currentStep === mt.WorkflowState.REVIEW_PENDING
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
                            return this.inReview ? u.cb.Prime : u.cb.Success
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t
                }(r.Component),
                ar = function() {
                    return Object(p.d)("Partner Onboarding", "PayoutOnboardingContainer")
                },
                rr = function() {
                    return Object(p.d)("Manage or modify your payout information.", "PayoutOnboardingContainer")
                },
                ir = function() {
                    return Object(p.d)("Payout Registration", "PayoutOnboardingContainer")
                },
                or = function() {
                    return Object(p.d)("Begin your payout registration.", "PayoutOnboardingContainer")
                },
                sr = function() {
                    return Object(p.d)("Twitch Partner Agreement", "PayoutOnboardingContainer")
                },
                lr = function() {
                    return Object(p.d)("Agree to the Twitch Partner Agreement.", "PayoutOnboardingContainer")
                },
                dr = function() {
                    return Object(p.d)("Tax Interviews", "PayoutOnboardingContainer")
                },
                cr = function() {
                    return Object(p.d)("Submit your tax information. The two forms below are very similar, but the information is used for different situations, so both forms are required and should be filled out carefully.", "PayoutOnboardingContainer")
                },
                ur = function() {
                    return Object(p.d)("Payout Setup", "PayoutOnboardingContainer")
                },
                mr = function() {
                    return Object(p.d)("Choose your payout method.", "PayoutOnboardingContainer")
                },
                pr = ((Wa = {})[mt.OnboardStep.Summary] = {
                    title: (La = {}, La[mt.OnboardEntity.Affiliate] = function() {
                        return Object(p.d)("Affiliate Onboarding", "PayoutOnboardingContainer")
                    }, La[mt.OnboardEntity.ExtensionsDeveloper] = function() {
                        return Object(p.d)("Extensions Developer Onboarding", "PayoutOnboardingContainer")
                    }, La[mt.OnboardEntity.StandardPartner] = function() {
                        return ar()
                    }, La[mt.OnboardEntity.PremiumPartner] = function() {
                        return ar()
                    }, La[mt.OnboardEntity.CustomPartner] = function() {
                        return ar()
                    }, La),
                    description: (Ba = {}, Ba[mt.OnboardEntity.Affiliate] = function() {
                        return rr()
                    }, Ba[mt.OnboardEntity.ExtensionsDeveloper] = function() {
                        return Object(p.d)("Manage or modify your Extensions Developer Onboarding.", "PayoutOnboardingContainer")
                    }, Ba[mt.OnboardEntity.StandardPartner] = function() {
                        return rr()
                    }, Ba[mt.OnboardEntity.PremiumPartner] = function() {
                        return rr()
                    }, Ba[mt.OnboardEntity.CustomPartner] = function() {
                        return rr()
                    }, Ba)
                }, Wa[mt.OnboardStep.Registration] = {
                    title: (Ua = {}, Ua[mt.OnboardEntity.Affiliate] = function() {
                        return ir()
                    }, Ua[mt.OnboardEntity.ExtensionsDeveloper] = function() {
                        return Object(p.d)("Extensions Developer Registration", "PayoutOnboardingContainer")
                    }, Ua[mt.OnboardEntity.StandardPartner] = function() {
                        return ir()
                    }, Ua[mt.OnboardEntity.PremiumPartner] = function() {
                        return ir()
                    }, Ua[mt.OnboardEntity.CustomPartner] = function() {
                        return ir()
                    }, Ua),
                    description: (Ma = {}, Ma[mt.OnboardEntity.Affiliate] = function() {
                        return or()
                    }, Ma[mt.OnboardEntity.ExtensionsDeveloper] = function() {
                        return Object(p.d)("Begin your Extensions Developer Registration.", "PayoutOnboardingContainer")
                    }, Ma[mt.OnboardEntity.StandardPartner] = function() {
                        return or()
                    }, Ma[mt.OnboardEntity.PremiumPartner] = function() {
                        return or()
                    }, Ma[mt.OnboardEntity.CustomPartner] = function() {
                        return or()
                    }, Ma)
                }, Wa[mt.OnboardStep.Agreement] = {
                    title: (Va = {}, Va[mt.OnboardEntity.Affiliate] = function() {
                        return Object(p.d)("Twitch Affiliate Agreement", "PayoutOnboardingContainer")
                    }, Va[mt.OnboardEntity.ExtensionsDeveloper] = function() {
                        return Object(p.d)("Twitch Extensions Developer Agreement", "PayoutOnboardingContainer")
                    }, Va[mt.OnboardEntity.StandardPartner] = function() {
                        return sr()
                    }, Va[mt.OnboardEntity.PremiumPartner] = function() {
                        return sr()
                    }, Va[mt.OnboardEntity.CustomPartner] = function() {
                        return sr()
                    }, Va),
                    description: (za = {}, za[mt.OnboardEntity.Affiliate] = function() {
                        return Object(p.d)("Agree to the Twitch Affiliate Agreement.", "PayoutOnboardingContainer")
                    }, za[mt.OnboardEntity.ExtensionsDeveloper] = function() {
                        return Object(p.d)("Agree to the Twitch Extensions Developer Agreement.", "PayoutOnboardingContainer")
                    }, za[mt.OnboardEntity.StandardPartner] = function() {
                        return lr()
                    }, za[mt.OnboardEntity.PremiumPartner] = function() {
                        return lr()
                    }, za[mt.OnboardEntity.CustomPartner] = function() {
                        return lr()
                    }, za)
                }, Wa[mt.OnboardStep.TaxInterview] = {
                    title: (Ya = {}, Ya[mt.OnboardEntity.Affiliate] = function() {
                        return dr()
                    }, Ya[mt.OnboardEntity.ExtensionsDeveloper] = function() {
                        return dr()
                    }, Ya[mt.OnboardEntity.StandardPartner] = function() {
                        return dr()
                    }, Ya[mt.OnboardEntity.PremiumPartner] = function() {
                        return dr()
                    }, Ya[mt.OnboardEntity.CustomPartner] = function() {
                        return dr()
                    }, Ya),
                    description: (Ga = {}, Ga[mt.OnboardEntity.Affiliate] = function() {
                        return cr()
                    }, Ga[mt.OnboardEntity.ExtensionsDeveloper] = function() {
                        return cr()
                    }, Ga[mt.OnboardEntity.StandardPartner] = function() {
                        return cr()
                    }, Ga[mt.OnboardEntity.PremiumPartner] = function() {
                        return cr()
                    }, Ga[mt.OnboardEntity.CustomPartner] = function() {
                        return cr()
                    }, Ga)
                }, Wa[mt.OnboardStep.PayoutMethod] = {
                    title: (qa = {}, qa[mt.OnboardEntity.Affiliate] = function() {
                        return ur()
                    }, qa[mt.OnboardEntity.ExtensionsDeveloper] = function() {
                        return Object(p.d)("Financial Information", "PayoutOnboardingContainer")
                    }, qa[mt.OnboardEntity.StandardPartner] = function() {
                        return ur()
                    }, qa[mt.OnboardEntity.PremiumPartner] = function() {
                        return ur()
                    }, qa[mt.OnboardEntity.CustomPartner] = function() {
                        return ur()
                    }, qa),
                    description: (Xa = {}, Xa[mt.OnboardEntity.Affiliate] = function() {
                        return mr()
                    }, Xa[mt.OnboardEntity.ExtensionsDeveloper] = function() {
                        return Object(p.d)("Submit your financial information.", "PayoutOnboardingContainer")
                    }, Xa[mt.OnboardEntity.StandardPartner] = function() {
                        return mr()
                    }, Xa[mt.OnboardEntity.PremiumPartner] = function() {
                        return mr()
                    }, Xa[mt.OnboardEntity.CustomPartner] = function() {
                        return mr()
                    }, Xa)
                }, Wa[mt.OnboardStep.Review] = {
                    title: (Qa = {}, Qa[mt.OnboardEntity.CustomPartner] = function() {
                        return Object(p.d)("Partnership Approval", "PayoutOnboardingContainer")
                    }, Qa),
                    description: (Ha = {}, Ha[mt.OnboardEntity.CustomPartner] = function() {
                        return Object(p.d)("The Partnership Team will validate your paperwork and activate your new agreement.", "PayoutOnboardingContainer")
                    }, Ha)
                }, Wa),
                gr = function() {
                    return Object(p.d)("Continue", "InProgressInfo")
                },
                hr = function(e) {
                    var t = e.onboardEntity === mt.OnboardEntity.ExtensionsDeveloper;
                    return r.createElement(u.Wa, {
                        margin: {
                            bottom: 1
                        }
                    }, r.createElement(u.Oa, {
                        margin: {
                            bottom: 1
                        }
                    }, r.createElement(u.W, {
                        type: u.Ob.P
                    }, t ? Object(p.d)("Your developer registration is currently in progress. Please click {buttonLabel} to pick up where you left off.", {
                        buttonLabel: gr()
                    }, "InProgressInfo") : Object(p.d)("Your payout setup is currently in progress. Please click {buttonLabel} to pick up where you left off.", {
                        buttonLabel: gr()
                    }, "InProgressInfo"))), e.startOverEnabled && r.createElement(r.Fragment, null, r.createElement(u.Oa, {
                        margin: {
                            bottom: 1
                        }
                    }, r.createElement(u.W, {
                        type: u.Ob.P
                    }, Object(p.d)("If you would like to modify your information, please click {buttonLabel}.", {
                        buttonLabel: Object(p.d)("Start Over", "InProgressInfo")
                    }, "InProgressInfo"))), r.createElement(u.W, {
                        type: u.Ob.P
                    }, t ? Object(p.d)("NOTE: Starting over will lose any progress.", "InProgressInfo") : Object(p.d)("NOTE: If you choose Start Over you will delete any stored payout information on your account and we will hold any payouts until you have fully completed the form.", "InProgressInfo"))))
                },
                br = function(e) {
                    return r.createElement(r.Fragment, null, r.createElement(u.Oa, {
                        margin: {
                            bottom: 1
                        }
                    }, r.createElement(u.W, {
                        type: u.Ob.H4,
                        bold: !0
                    }, Object(p.d)("Setup Complete", "SetupCompleteInfo"))), e.onboardEntity === mt.OnboardEntity.ExtensionsDeveloper ? r.createElement(u.Oa, {
                        margin: {
                            bottom: 1
                        }
                    }, r.createElement(u.W, {
                        type: u.Ob.P
                    }, Object(p.d)("You made it! You’re all set. Return to the <x:link>Developer Portal.</x:link>", {
                        "x:link": function(e) {
                            return r.createElement(u.U, {
                                to: "https://dev.twitch.tv/dashboard"
                            }, e)
                        }
                    }, "SetupCompleteInfo"))) : r.createElement(u.Oa, {
                        margin: {
                            bottom: 1
                        }
                    }, r.createElement(u.W, {
                        type: u.Ob.P
                    }, Object(p.d)("You made it! You’re all set and no further action is needed.", "SetupCompleteInfo"))), r.createElement(u.Oa, {
                        margin: {
                            bottom: 1
                        }
                    }, r.createElement(u.W, {
                        type: u.Ob.P
                    }, Object(p.d)("If you want to change your payout information, click {buttonLabel} to reset the form.", {
                        buttonLabel: Object(p.d)("Start Over", "SetupCompleteInfo")
                    }, "SetupCompleteInfo"))))
                };
            ! function(e) {
                e.START_OVER_BUTTON = "progress-brick__start-over-button", e.CONTINUE_BUTTON = "progress-brick__continue-button"
            }(Za || (Za = {}));
            var fr, vr = (($a = {})[mt.WorkflowState.AGREEMENT_NOT_STARTED] = mt.OnboardStep.Agreement, $a[mt.WorkflowState.ROYALTY_TAX_INTERVIEW_NOT_STARTED] = mt.OnboardStep.TaxInterview, $a[mt.WorkflowState.ROYALTY_TAX_INTERVIEW_PENDING] = mt.OnboardStep.TaxInterview, $a[mt.WorkflowState.ROYALTY_TAX_INTERVIEW_ACTION_REQUIRED] = mt.OnboardStep.TaxInterview, $a[mt.WorkflowState.ROYALTY_TAX_INTERVIEW_MISMATCH] = mt.OnboardStep.TaxInterview, $a[mt.WorkflowState.ROYALTY_TAX_INTERVIEW_FAILED] = mt.OnboardStep.TaxInterview, $a[mt.WorkflowState.SERVICE_TAX_INTERVIEW_NOT_STARTED] = mt.OnboardStep.TaxInterview, $a[mt.WorkflowState.SERVICE_TAX_INTERVIEW_PENDING] = mt.OnboardStep.TaxInterview, $a[mt.WorkflowState.SERVICE_TAX_INTERVIEW_ACTION_REQUIRED] = mt.OnboardStep.TaxInterview, $a[mt.WorkflowState.SERVICE_TAX_INTERVIEW_MISMATCH] = mt.OnboardStep.TaxInterview, $a[mt.WorkflowState.SERVICE_TAX_INTERVIEW_FAILED] = mt.OnboardStep.TaxInterview, $a[mt.WorkflowState.PAYOUT_METHOD_NOT_STARTED] = mt.OnboardStep.PayoutMethod, $a[mt.WorkflowState.PAYOUT_METHOD_PENDING] = mt.OnboardStep.PayoutMethod, $a[mt.WorkflowState.REVIEW_PENDING] = mt.OnboardStep.Review, $a),
                yr = function(e) {
                    var t = ![mt.WorkflowState.ROYALTY_TAX_INTERVIEW_PENDING, mt.WorkflowState.SERVICE_TAX_INTERVIEW_PENDING].includes(e.workflowState);
                    return r.createElement(u.yb, {
                        padding: 2,
                        borderLeft: !0,
                        borderRight: !0,
                        borderTop: !0
                    }, r.createElement(u.yb, {
                        borderMarked: !0,
                        padding: 2,
                        elevation: 1
                    }, e.workflowState === mt.WorkflowState.COMPLETED ? r.createElement(br, {
                        onboardEntity: e.onboardEntity
                    }) : r.createElement(hr, {
                        onboardEntity: e.onboardEntity,
                        startOverEnabled: t
                    }), r.createElement(u.Wa, {
                        display: u.X.Flex
                    }, e.workflowState !== mt.WorkflowState.COMPLETED && r.createElement(u.Wa, {
                        margin: {
                            right: 1
                        }
                    }, r.createElement(u.z, {
                        "data-test-selector": Za.CONTINUE_BUTTON,
                        onClick: function() {
                            return e.updateStepDisplayed(vr[e.workflowState])
                        }
                    }, Object(p.d)("Continue", "PayoutOnboardingSummary"))), t && r.createElement(u.z, {
                        "data-test-selector": Za.START_OVER_BUTTON,
                        type: u.F.Hollow,
                        onClick: e.showStartOverModal
                    }, Object(p.d)("Start Over", "PayoutOnboardingSummary")))))
                };
            n("U1LZ");
            ! function(e) {
                e[e.NotStarted = 0] = "NotStarted", e[e.Pending = 1] = "Pending", e[e.Failed = 2] = "Failed", e[e.Completed = 3] = "Completed"
            }(fr || (fr = {}));
            var Er, Sr = function(e) {
                    return r.createElement(u.yb, {
                        borderLeft: !0,
                        borderRight: !0,
                        borderTop: !0
                    }, r.createElement(u.Ta, {
                        onClick: e.onClick,
                        disabled: !e.isEnabled,
                        type: u.Ua.Alpha
                    }, r.createElement(u.Wa, {
                        padding: 2,
                        alignItems: u.f.Center,
                        display: u.X.Flex,
                        flexWrap: u.Aa.NoWrap
                    }, r.createElement(u.Wa, {
                        flexGrow: 1
                    }, r.createElement(u.Oa, {
                        margin: {
                            bottom: .5
                        }
                    }, r.createElement(u.W, {
                        type: u.Ob.H6,
                        bold: !0
                    }, e.title)), r.createElement(u.W, {
                        color: u.O.Alt2
                    }, e.description)), r.createElement(u.Wa, {
                        display: u.X.Flex,
                        alignItems: u.f.Center
                    }, (e.type === fr.Completed || e.isEnabled) && r.createElement(u.Wa, null, r.createElement(u.W, {
                        type: u.Ob.H4,
                        transform: u.Nb.Uppercase,
                        bold: !0
                    }, r.createElement(u.bb, {
                        label: function(e) {
                            switch (e) {
                                case fr.Pending:
                                    return Object(p.d)("Under Review", "ProgressRow");
                                case fr.Failed:
                                    return Object(p.d)("Failed", "ProgressRow");
                                case fr.Completed:
                                    return Object(p.d)("Completed", "ProgressRow");
                                default:
                                    return ""
                            }
                        }(e.type),
                        type: function(e) {
                            switch (e) {
                                case fr.NotStarted:
                                    return;
                                case fr.Pending:
                                    return u.cb.Prime;
                                case fr.Failed:
                                    return u.cb.Alert;
                                case fr.Completed:
                                    return u.cb.Success;
                                default:
                                    return
                            }
                        }(e.type)
                    }))), e.isEnabled && r.createElement(u.Wa, {
                        margin: {
                            left: 1
                        },
                        display: u.X.Flex,
                        alignItems: u.f.Center
                    }, r.createElement(u.nb, {
                        asset: u.ob.AngleRight
                    }))))))
                },
                kr = function() {
                    return Object(p.d)("Submit your tax information.", "PayoutOnboardingSummary")
                },
                Or = function() {
                    return Object(p.d)("Choose your payout method.", "PayoutOnboardingSummary")
                },
                Nr = function() {
                    return Object(p.d)("Submit your financial information.", "PayoutOnboardingSummary")
                };
            ! function(e) {
                e.REGISTRATION = "registration-selector", e.AGREEMENT = "agreement-selector", e.TAX_INTERVIEW = "tax-interview-selector", e.PAYOUT_METHOD = "payout-method-selector", e.REVIEW = "review-selector"
            }(Er || (Er = {}));
            var Tr = function(e, t, n) {
                    return Object(p.d)("Step {numOfCurrentStep} of {numOfTotalSteps}: {stepTitle}", {
                        numOfCurrentStep: e,
                        numOfTotalSteps: t,
                        stepTitle: n
                    }, "ProgressRow")
                },
                Cr = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.updateStepDisplayed = function(e) {
                            return function() {
                                t.props.updateStepDisplayed(e)
                            }
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        return r.createElement(u.yb, {
                            className: "payout-onboarding-summary",
                            background: u.r.Base,
                            borderBottom: !0,
                            borderRadius: {
                                bottomLeft: u.x.Medium,
                                bottomRight: u.x.Medium
                            }
                        }, this.isRegistrationComplete && r.createElement(yr, {
                            workflowState: this.props.workflow.currentStep,
                            onboardEntity: this.props.onboardEntity,
                            updateStepDisplayed: this.props.updateStepDisplayed,
                            showStartOverModal: this.props.showStartOverModal
                        }), r.createElement(Sr, {
                            "data-test-selector": Er.REGISTRATION,
                            title: this.step1Title,
                            description: this.step1Description,
                            type: this.step1Status,
                            onClick: this.updateStepDisplayed(mt.OnboardStep.Registration),
                            isEnabled: !this.isRegistrationComplete
                        }), r.createElement(Sr, {
                            "data-test-selector": Er.AGREEMENT,
                            title: this.step2Title,
                            description: this.step2Description,
                            type: this.step2Status,
                            onClick: this.updateStepDisplayed(mt.OnboardStep.Agreement),
                            isEnabled: this.isRegistrationComplete && !this.isAgreementComplete
                        }), r.createElement(Sr, {
                            "data-test-selector": Er.TAX_INTERVIEW,
                            title: this.step3Title,
                            description: this.step3Description,
                            type: this.step3Status,
                            onClick: this.updateStepDisplayed(mt.OnboardStep.TaxInterview),
                            isEnabled: this.isAgreementComplete && !this.isTaxInterviewComplete
                        }), r.createElement(Sr, {
                            "data-test-selector": Er.PAYOUT_METHOD,
                            title: this.step4Title,
                            description: this.step4Description,
                            type: this.step4Status,
                            onClick: this.updateStepDisplayed(mt.OnboardStep.PayoutMethod),
                            isEnabled: this.isTaxInterviewComplete && !this.isPayoutMethodComplete
                        }), this.props.onboardEntity === mt.OnboardEntity.CustomPartner && r.createElement(Sr, {
                            "data-test-selector": Er.REVIEW,
                            title: this.step5Title,
                            description: this.step5Description,
                            type: this.step5Status,
                            onClick: this.updateStepDisplayed(mt.OnboardStep.Review),
                            isEnabled: this.isPayoutMethodComplete && !this.isReviewComplete
                        }))
                    }, Object.defineProperty(t.prototype, "isRegistrationComplete", {
                        get: function() {
                            return this.props.workflow.currentStep !== mt.WorkflowState.CANCELED && this.props.workflow.currentStep !== mt.WorkflowState.REGISTRATION_NOT_STARTED
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "isAgreementComplete", {
                        get: function() {
                            return this.isRegistrationComplete && this.props.workflow.currentStep !== mt.WorkflowState.AGREEMENT_NOT_STARTED
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "isTaxInterviewComplete", {
                        get: function() {
                            return this.isAgreementComplete && ![mt.WorkflowState.ROYALTY_TAX_INTERVIEW_NOT_STARTED, mt.WorkflowState.ROYALTY_TAX_INTERVIEW_PENDING, mt.WorkflowState.ROYALTY_TAX_INTERVIEW_FAILED, mt.WorkflowState.ROYALTY_TAX_INTERVIEW_ACTION_REQUIRED, mt.WorkflowState.ROYALTY_TAX_INTERVIEW_MISMATCH, mt.WorkflowState.SERVICE_TAX_INTERVIEW_NOT_STARTED, mt.WorkflowState.SERVICE_TAX_INTERVIEW_PENDING, mt.WorkflowState.SERVICE_TAX_INTERVIEW_FAILED, mt.WorkflowState.SERVICE_TAX_INTERVIEW_ACTION_REQUIRED, mt.WorkflowState.SERVICE_TAX_INTERVIEW_MISMATCH].includes(this.props.workflow.currentStep)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "isPayoutMethodComplete", {
                        get: function() {
                            return this.isTaxInterviewComplete && ![mt.WorkflowState.PAYOUT_METHOD_NOT_STARTED, mt.WorkflowState.PAYOUT_METHOD_PENDING].includes(this.props.workflow.currentStep)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "isReviewComplete", {
                        get: function() {
                            return this.isPayoutMethodComplete && this.props.workflow.currentStep !== mt.WorkflowState.REVIEW_PENDING
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "numOfTotalSteps", {
                        get: function() {
                            return this.props.onboardEntity === mt.OnboardEntity.CustomPartner ? 5 : 4
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "step1Title", {
                        get: function() {
                            return Tr(Object(p.f)(1), Object(p.f)(this.numOfTotalSteps), pr[mt.OnboardStep.Registration].title[this.props.onboardEntity]())
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "step1Description", {
                        get: function() {
                            return this.props.onboardEntity === mt.OnboardEntity.ExtensionsDeveloper ? this.isRegistrationComplete ? Object(p.d)("Your Extensions Developer Registration is complete.", "PayoutOnboardingSummary") : Object(p.d)("Begin your Extensions Developer Registration.", "PayoutOnboardingSummary") : this.isRegistrationComplete ? Object(p.d)("Your payout registration is complete.", "PayoutOnboardingSummary") : Object(p.d)("Begin your payout registration.", "PayoutOnboardingSummary")
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "step1Status", {
                        get: function() {
                            return this.isRegistrationComplete ? fr.Completed : fr.NotStarted
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "step2Title", {
                        get: function() {
                            return Tr(Object(p.f)(2), Object(p.f)(this.numOfTotalSteps), pr[mt.OnboardStep.Agreement].title[this.props.onboardEntity]())
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "step2Description", {
                        get: function() {
                            switch (this.props.onboardEntity) {
                                case mt.OnboardEntity.Affiliate:
                                    return this.isAgreementComplete ? Object(p.d)("You have agreed to the Twitch Affiliate Agreement.", "PayoutOnboardingSummary") : Object(p.d)("Agree to the Twitch Affiliate Agreement.", "PayoutOnboardingSummary");
                                case mt.OnboardEntity.ExtensionsDeveloper:
                                    return this.isAgreementComplete ? Object(p.d)("You have agreed to the Twitch Extensions Developer Agreement.", "PayoutOnboardingSummary") : Object(p.d)("Agree to the Twitch Extensions Developer Agreement.", "PayoutOnboardingSummary");
                                case mt.OnboardEntity.StandardPartner:
                                case mt.OnboardEntity.PremiumPartner:
                                case mt.OnboardEntity.CustomPartner:
                                    return this.isAgreementComplete ? Object(p.d)("You have agreed to the Twitch Partner Agreement.", "PayoutOnboardingSummary") : Object(p.d)("Agree to the Twitch Partner Agreement.", "PayoutOnboardingSummary");
                                default:
                                    return ""
                            }
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "step2Status", {
                        get: function() {
                            return this.isAgreementComplete ? fr.Completed : fr.NotStarted
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "step3Title", {
                        get: function() {
                            return Tr(Object(p.f)(3), Object(p.f)(this.numOfTotalSteps), pr[mt.OnboardStep.TaxInterview].title[this.props.onboardEntity]())
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "step3Description", {
                        get: function() {
                            if (!this.isAgreementComplete) return kr();
                            switch (this.props.workflow.currentStep) {
                                case mt.WorkflowState.ROYALTY_TAX_INTERVIEW_NOT_STARTED:
                                    return kr();
                                case mt.WorkflowState.ROYALTY_TAX_INTERVIEW_PENDING:
                                    return Object(p.d)("Your royalty tax information is currently under review. This process usually takes a few minutes.", "PayoutOnboardingSummary");
                                case mt.WorkflowState.ROYALTY_TAX_INTERVIEW_FAILED:
                                case mt.WorkflowState.ROYALTY_TAX_INTERVIEW_ACTION_REQUIRED:
                                case mt.WorkflowState.ROYALTY_TAX_INTERVIEW_MISMATCH:
                                case mt.WorkflowState.SERVICE_TAX_INTERVIEW_FAILED:
                                case mt.WorkflowState.SERVICE_TAX_INTERVIEW_ACTION_REQUIRED:
                                case mt.WorkflowState.SERVICE_TAX_INTERVIEW_MISMATCH:
                                    return Object(p.d)("We could not successfully validate your tax information. Please review and correct your tax information.", "PayoutOnboardingSummary");
                                case mt.WorkflowState.SERVICE_TAX_INTERVIEW_NOT_STARTED:
                                    return Object(p.d)("Royalty tax approved. Please complete your service tax information.", "PayoutOnboardingSummary");
                                case mt.WorkflowState.SERVICE_TAX_INTERVIEW_PENDING:
                                    return Object(p.d)("Your service tax information is currently under review. This process usually takes a few minutes.", "PayoutOnboardingSummary");
                                default:
                                    return Object(p.d)("Your tax information has been successfully validated.", "PayoutOnboardingSummary")
                            }
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "step3Status", {
                        get: function() {
                            if (!this.isAgreementComplete) return fr.NotStarted;
                            switch (this.props.workflow.currentStep) {
                                case mt.WorkflowState.ROYALTY_TAX_INTERVIEW_NOT_STARTED:
                                    return fr.NotStarted;
                                case mt.WorkflowState.ROYALTY_TAX_INTERVIEW_PENDING:
                                    return fr.Pending;
                                case mt.WorkflowState.ROYALTY_TAX_INTERVIEW_FAILED:
                                case mt.WorkflowState.ROYALTY_TAX_INTERVIEW_ACTION_REQUIRED:
                                case mt.WorkflowState.ROYALTY_TAX_INTERVIEW_MISMATCH:
                                    return fr.Failed;
                                case mt.WorkflowState.SERVICE_TAX_INTERVIEW_NOT_STARTED:
                                    return fr.NotStarted;
                                case mt.WorkflowState.SERVICE_TAX_INTERVIEW_PENDING:
                                    return fr.Pending;
                                case mt.WorkflowState.SERVICE_TAX_INTERVIEW_FAILED:
                                case mt.WorkflowState.SERVICE_TAX_INTERVIEW_ACTION_REQUIRED:
                                case mt.WorkflowState.SERVICE_TAX_INTERVIEW_MISMATCH:
                                    return fr.Failed;
                                default:
                                    return fr.Completed
                            }
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "step4Title", {
                        get: function() {
                            return Tr(Object(p.f)(4), Object(p.f)(this.numOfTotalSteps), pr[mt.OnboardStep.PayoutMethod].title[this.props.onboardEntity]())
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "step4Description", {
                        get: function() {
                            var e = this.props.onboardEntity === mt.OnboardEntity.ExtensionsDeveloper;
                            return this.isTaxInterviewComplete ? this.props.workflow.currentStep === mt.WorkflowState.PAYOUT_METHOD_PENDING ? e ? Object(p.d)("Your financial information is currently under review. This process usually takes a few minutes.", "PayoutOnboardingSummary") : Object(p.d)("Your payout method is currently under review. This process usually takes a few minutes.", "PayoutOnboardingSummary") : this.isPayoutMethodComplete ? e ? Object(p.d)("Your financial information has been successfully validated.", "PayoutOnboardingSummary") : Object(p.d)("Your payout method has been successfully validated.", "PayoutOnboardingSummary") : e ? Nr() : Or() : e ? Nr() : Or()
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "step4Status", {
                        get: function() {
                            return this.isTaxInterviewComplete ? this.props.workflow.currentStep === mt.WorkflowState.PAYOUT_METHOD_PENDING ? fr.Pending : this.isPayoutMethodComplete ? fr.Completed : fr.NotStarted : fr.NotStarted
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "step5Title", {
                        get: function() {
                            return this.props.onboardEntity === mt.OnboardEntity.CustomPartner ? Tr(Object(p.f)(5), Object(p.f)(this.numOfTotalSteps), pr[mt.OnboardStep.Review].title[this.props.onboardEntity]()) : ""
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "step5Description", {
                        get: function() {
                            return this.isPayoutMethodComplete ? this.props.workflow.currentStep === mt.WorkflowState.REVIEW_PENDING ? Object(p.d)("The Partnership Team is currently validating your paperwork.", "PayoutOnboardingSummary") : Object(p.d)("The Partnership Team has approved your new agreement.", "PayoutOnboardingSummary") : Object(p.d)("The Partnership Team will validate your paperwork and activate your new agreement.", "PayoutOnboardingSummary")
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "step5Status", {
                        get: function() {
                            return this.isPayoutMethodComplete ? this.props.workflow.currentStep === mt.WorkflowState.REVIEW_PENDING ? fr.Pending : fr.Completed : fr.NotStarted
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t
                }(r.Component),
                Pr = function(e) {
                    return Object(p.d)("Example {exampleNum}", {
                        exampleNum: Object(p.f)(e)
                    }, "TaxInfoBrick")
                },
                _r = function(e) {
                    if (e.taxStatus === Yr.NotStarted || e.taxStatus === Yr.Completed) return null;
                    var t;
                    switch (e.taxStatus) {
                        case Yr.ActionRequired:
                            t = r.createElement(u.W, {
                                fontSize: u.Ba.Size6
                            }, Object(p.d)("Looks like you may need to mail documentation to Amazon to complete this process. However, you may be able to avoid this by consenting to electronic signature of your tax form. To do this, click the button below to retake the tax interview and be sure to check the box to consent to electronic signature.", "TaxInfoBrick"));
                            break;
                        case Yr.Failed:
                            t = r.createElement(u.W, {
                                fontSize: u.Ba.Size6
                            }, Object(p.d)("We could not successfully validate your tax information.", "TaxInfoBrick"));
                            break;
                        case Yr.Mismatch:
                            t = r.createElement(r.Fragment, null, r.createElement(u.Oa, {
                                margin: {
                                    bottom: 1
                                }
                            }, r.createElement(u.W, {
                                fontSize: u.Ba.Size6
                            }, Object(p.d)("Thank you for completing your tax interview. However, the details you have just entered into the tax form does not match the information on file from Step 1 (Registration). Your tax information from Steps 1 and 3 MUST match in order to receive payouts from Twitch.", "TaxInfoBrick"))), r.createElement(u.Oa, {
                                margin: {
                                    bottom: 1
                                }
                            }, r.createElement(u.W, {
                                fontSize: u.Ba.Size6
                            }, Pr(1))), r.createElement(u.Wa, {
                                margin: {
                                    left: 1,
                                    bottom: 1
                                }
                            }, r.createElement(u.W, {
                                fontSize: u.Ba.Size6
                            }, Object(p.d)("Step 1 user is John Doe from the United States of America.", "TaxInfoBrick")), r.createElement(u.W, {
                                fontSize: u.Ba.Size6
                            }, Object(p.d)("Step 3 tax information should be for John Doe from the United States of America.", "TaxInfoBrick")), r.createElement(u.W, {
                                fontSize: u.Ba.Size6
                            }, Object(p.d)("Step 4 selected payout method is check paid to John Doe from the United States of America.", "TaxInfoBrick"))), r.createElement(u.Oa, {
                                margin: {
                                    bottom: 1
                                }
                            }, r.createElement(u.W, {
                                fontSize: u.Ba.Size6
                            }, Pr(2))), r.createElement(u.Wa, {
                                margin: {
                                    left: 1,
                                    bottom: 1
                                }
                            }, r.createElement(u.W, {
                                fontSize: u.Ba.Size6
                            }, Object(p.d)("Step 1 user is John Doe working for Cool Gaming, Inc. from France.", "TaxInfoBrick")), r.createElement(u.W, {
                                fontSize: u.Ba.Size6
                            }, Object(p.d)("Step 3 tax information should be for Cool Gaming, Inc. from France.", "TaxInfoBrick")), r.createElement(u.W, {
                                fontSize: u.Ba.Size6
                            }, Object(p.d)("Step 4 selected payout method is a wire paid to Cool Gaming, Inc. from France.", "TaxInfoBrick"))), r.createElement(u.W, {
                                fontSize: u.Ba.Size6
                            }, Object(p.d)("Please see the list of errors below for the specific fields that require correction.", "TaxInfoBrick")));
                            break;
                        default:
                            return null
                    }
                    return r.createElement(u.yb, {
                        padding: 2,
                        borderMarked: !0,
                        background: u.r.Base,
                        margin: {
                            bottom: 2
                        },
                        elevation: 1
                    }, t)
                },
                wr = n("HGFl"),
                Ar = function(e) {
                    return r.createElement(r.Fragment, null, r.createElement(u.Oa, {
                        margin: {
                            bottom: 1
                        }
                    }, r.createElement(u.W, {
                        fontSize: u.Ba.Size6
                    }, Object(p.d)("If you prefer not to consent to electronic signature, you will be required to mail additional documentation to Amazon. As a reminder, Twitch is a subsidiary of Amazon, and Amazon handles our tax forms. To proceed, please follow these instructions:", "TaxActionRequiredInfo"))), r.createElement(u.Wa, {
                        margin: {
                            bottom: 1
                        }
                    }, r.createElement(u.W, {
                        fontSize: u.Ba.Size6
                    }, Object(p.d)("1. Click the button below to retake the tax information interview.", "TaxActionRequiredInfo")), r.createElement(u.W, {
                        fontSize: u.Ba.Size6
                    }, Object(p.d)("2. Proceed to the page that asks you to print out a hardcopy of the tax form and print out the form.", "TaxActionRequiredInfo")), r.createElement(u.W, {
                        fontSize: u.Ba.Size6
                    }, Object(p.d)("3. Sign the form with a blue or black pen.", "TaxActionRequiredInfo")), r.createElement(u.W, {
                        fontSize: u.Ba.Size6
                    }, Object(p.d)("4. Mail the hardcopy of your tax form to:", "TaxActionRequiredInfo"))), r.createElement(u.Wa, {
                        margin: {
                            left: 2,
                            bottom: 1
                        }
                    }, r.createElement(u.W, {
                        fontSize: u.Ba.Size6
                    }, "Amazon"), r.createElement(u.W, {
                        fontSize: u.Ba.Size6
                    }, "Attn: FinOps Tax"), r.createElement(u.W, {
                        fontSize: u.Ba.Size6
                    }, "P.O. Box 80683"), r.createElement(u.W, {
                        fontSize: u.Ba.Size6
                    }, "Seattle, WA, 98108-0683"), r.createElement(u.W, {
                        fontSize: u.Ba.Size6
                    }, "U.S.A.")), r.createElement(u.Wa, {
                        margin: {
                            bottom: 1
                        }
                    }, r.createElement(u.W, {
                        fontSize: u.Ba.Size6
                    }, Object(p.d)("To assist Amazon with locating your account, please write the following at the top of the form in the white space:", "TaxActionRequiredInfo"))), r.createElement(u.Wa, {
                        margin: {
                            left: 2,
                            bottom: 1
                        }
                    }, r.createElement(u.W, {
                        fontSize: u.Ba.Size6
                    }, "Amazon subsidiary: Twitch Interactive, Inc."), r.createElement(u.W, {
                        fontSize: u.Ba.Size6
                    }, "Email address: ", e.email)))
                },
                Ir = function(e) {
                    var t = e.workflow,
                        n = t.registration,
                        a = t.taxMismatchErrors;
                    if (!n || !a) return null;
                    var i = a.map(function(e, t) {
                        var a, i;
                        if (e === mt.TaxMismatchError.NAME) a = Object(p.d)("Name", "TaxMismatchSpecificErrors"), i = n.companyName ? n.companyName : [n.firstName, n.middleName, n.lastName].filter(function(e) {
                            return null !== e
                        }).join(" ");
                        else if (e === mt.TaxMismatchError.EMAIL) a = Object(p.d)("Email", "TaxMismatchSpecificErrors"), i = n.email;
                        else if (e === mt.TaxMismatchError.STREET_ADDRESS) a = Object(p.d)("Street Address", "TaxMismatchSpecificErrors"), i = n.streetAddress;
                        else if (e === mt.TaxMismatchError.STREET_ADDRESS_2) a = Object(p.d)("Street Address 2", "TaxMismatchSpecificErrors"), i = n.streetAddress2;
                        else if (e === mt.TaxMismatchError.CITY) a = Object(p.d)("City or Town", "TaxMismatchSpecificErrors"), i = n.city;
                        else if (e === mt.TaxMismatchError.STATE) a = Object(p.d)("State/Province", "TaxMismatchSpecificErrors"), i = "US" === n.countryCode ? Na(n.stateCode || "") : "CA" === n.countryCode ? Sa(n.stateCode || "") : n.stateCode;
                        else if (e === mt.TaxMismatchError.COUNTRY) a = Object(p.d)("Country", "TaxMismatchSpecificErrors"), i = Object(Oa.b)(n.countryCode || "");
                        else {
                            if (e !== mt.TaxMismatchError.POSTAL) return null;
                            a = Object(p.d)("Zip Code/Postal Code", "TaxMismatchSpecificErrors"), i = n.postal
                        }
                        return r.createElement(u.Oa, {
                            key: a + t,
                            padding: {
                                left: 1
                            }
                        }, r.createElement(u.W, {
                            fontSize: u.Ba.Size6
                        }, r.createElement(u.W, {
                            bold: !0,
                            type: u.Ob.Span
                        }, a), " ", i))
                    });
                    return r.createElement(r.Fragment, null, r.createElement(u.Oa, {
                        margin: {
                            bottom: 1
                        }
                    }, r.createElement(u.W, {
                        type: u.Ob.P,
                        color: u.O.Error,
                        bold: !0
                    }, Object(p.d)("Specific Errors", "TaxMismatchSpecificErrors"))), r.createElement(u.Oa, {
                        margin: {
                            bottom: 1
                        }
                    }, r.createElement(u.W, {
                        fontSize: u.Ba.Size6
                    }, Object(p.d)("The following data you entered in Step 1 does not match the data entered on the tax interview in Step 3:", "TaxMismatchSpecificErrors"))), r.createElement(u.Wa, {
                        margin: {
                            bottom: 1
                        }
                    }, i), r.createElement(u.Oa, {
                        margin: {
                            bottom: 1
                        }
                    }, r.createElement(u.W, {
                        fontSize: u.Ba.Size6
                    }, Object(p.d)("To fix this, please click the button below to edit your tax form and correct these values. Alternatively, if the tax form has the correct information, you can choose to edit Step 1 instead. To do this, click the button below and then click {buttonLabel} to reset the onboarding flow.", {
                        buttonLabel: Object(p.d)("Start Over", "TaxMismatchSpecificErrors")
                    }, "TaxMismatchSpecificErrors"))))
                },
                xr = function(e) {
                    var t = e.workflow.registration;
                    if (!t) return null;
                    switch (e.taxStatus) {
                        case Yr.NotStarted:
                            return r.createElement(r.Fragment, null, r.createElement(u.Oa, {
                                margin: {
                                    bottom: 1
                                }
                            }, r.createElement(u.W, {
                                fontSize: u.Ba.Size6
                            }, Object(p.d)("A new window will open where you can submit your royalty tax information. Please complete the tax information interview fully.", "TaxInfoRoyaltyText"))), r.createElement(u.Oa, {
                                margin: {
                                    bottom: 1
                                }
                            }, r.createElement(u.W, {
                                fontSize: u.Ba.Size6
                            }, Object(p.d)('Once you\'ve filled out the form, if your status still says "Not Started", please wait a minute or two for it to update to "Under Review".', "TaxInfoRoyaltyText"))), r.createElement(u.Wa, {
                                margin: {
                                    bottom: 2
                                }
                            }, r.createElement(ta, {
                                onboardEntity: e.onboardEntity
                            })));
                        case Yr.Pending:
                            var n = new Date,
                                a = Object(wr.c)(e.workflow.timestamp);
                            return Object(Mn.differenceInDays)(n, a) >= 3 ? r.createElement(r.Fragment, null, r.createElement(u.Oa, {
                                margin: {
                                    bottom: 1
                                }
                            }, r.createElement(u.W, {
                                fontSize: u.Ba.Size6
                            }, Object(p.d)("Thank you for your patience. Your tax information is still under review, but it is taking longer than normal.", "TaxInfoRoyaltyText"))), r.createElement(u.Oa, {
                                margin: {
                                    bottom: 1
                                }
                            }, r.createElement(u.W, {
                                fontSize: u.Ba.Size6
                            }, Object(p.d)("Please email {email} for assistance.", {
                                email: r.createElement("a", {
                                    href: "mailto:twitchtaxhelp@amazon.com"
                                }, "twitchtaxhelp@amazon.com")
                            }, "TaxInfoRoyaltyText")))) : r.createElement(r.Fragment, null, r.createElement(u.Oa, {
                                margin: {
                                    bottom: 1
                                }
                            }, r.createElement(u.W, {
                                fontSize: u.Ba.Size6
                            }, Object(p.d)("Hang tight! Your royalty tax information is currently under review and can take up to three business days.", "TaxInfoRoyaltyText"))), r.createElement(u.Oa, {
                                margin: {
                                    bottom: 1
                                }
                            }, r.createElement(u.W, {
                                fontSize: u.Ba.Size6
                            }, Object(p.d)("We'll update this screen within three business days with next steps. Please check back later.", "TaxInfoRoyaltyText"))));
                        case Yr.Completed:
                            return r.createElement(u.W, {
                                fontSize: u.Ba.Size6
                            }, Object(p.d)("Your royalty tax information was successfully validated.", "TaxInfoRoyaltyText"));
                        case Yr.ActionRequired:
                            return r.createElement(r.Fragment, null, r.createElement(Ar, {
                                email: t.email
                            }), r.createElement(u.Wa, {
                                margin: {
                                    bottom: 2
                                }
                            }, r.createElement(ta, {
                                onboardEntity: e.onboardEntity
                            })));
                        case Yr.Mismatch:
                            return r.createElement(r.Fragment, null, r.createElement(Ir, {
                                workflow: e.workflow
                            }), r.createElement(u.Wa, {
                                margin: {
                                    bottom: 2
                                }
                            }, r.createElement(ta, {
                                onboardEntity: e.onboardEntity
                            })));
                        case Yr.Failed:
                            return r.createElement(u.Oa, {
                                margin: {
                                    bottom: 2
                                }
                            }, r.createElement(u.W, {
                                fontSize: u.Ba.Size6
                            }, Object(p.d)("Please click the button below to retake the Royalty Tax Interview and correct your information.", "TaxInfoRoyaltyText")));
                        default:
                            return null
                    }
                },
                Dr = function(e) {
                    var t = e.workflow.registration;
                    if (!t) return null;
                    if (!e.royaltyTaxCompleted) return r.createElement(r.Fragment, null, r.createElement(u.Oa, {
                        margin: {
                            bottom: 1
                        }
                    }, r.createElement(u.W, {
                        fontSize: u.Ba.Size6
                    }, Object(p.d)("Once your royalty tax information is fully validated, you will need to complete the Service Tax Interview.", "TaxInfoServiceText"))));
                    switch (e.taxStatus) {
                        case Yr.NotStarted:
                            return r.createElement(r.Fragment, null, r.createElement(u.Oa, {
                                margin: {
                                    bottom: 1
                                }
                            }, r.createElement(u.W, {
                                fontSize: u.Ba.Size6
                            }, Object(p.d)("A new window will open where you can submit your service tax information. Please complete the tax information interview fully.", "TaxInfoServiceText"))), r.createElement(u.Oa, {
                                margin: {
                                    bottom: 1
                                }
                            }, r.createElement(u.W, {
                                fontSize: u.Ba.Size6
                            }, Object(p.d)('Once you\'ve filled out the form, if your status still says "Not Started", please wait a minute or two for it to update to "Under Review".', "TaxInfoServiceText"))), r.createElement(u.Wa, {
                                margin: {
                                    bottom: 2
                                }
                            }, r.createElement(ta, {
                                onboardEntity: e.onboardEntity
                            })));
                        case Yr.Pending:
                            var n = new Date,
                                a = Object(wr.c)(e.workflow.timestamp);
                            return Object(Mn.differenceInDays)(n, a) >= 3 ? r.createElement(r.Fragment, null, r.createElement(u.Oa, {
                                margin: {
                                    bottom: 1
                                }
                            }, r.createElement(u.W, {
                                fontSize: u.Ba.Size6
                            }, Object(p.d)("Thank you for your patience. Your tax information is still under review, but it is taking longer than normal.", "TaxInfoServiceText"))), r.createElement(u.Oa, {
                                margin: {
                                    bottom: 1
                                }
                            }, r.createElement(u.W, {
                                fontSize: u.Ba.Size6
                            }, Object(p.d)("Please email {email} for assistance.", {
                                email: r.createElement("a", {
                                    href: "mailto:twitchtaxhelp@amazon.com"
                                }, "twitchtaxhelp@amazon.com")
                            }, "TaxInfoServiceText")))) : r.createElement(r.Fragment, null, r.createElement(u.Oa, {
                                margin: {
                                    bottom: 1
                                }
                            }, r.createElement(u.W, {
                                fontSize: u.Ba.Size6
                            }, Object(p.d)("Hang tight! Your service tax information is currently under review and can take up to three business days.", "TaxInfoServiceText"))), r.createElement(u.Oa, {
                                margin: {
                                    bottom: 1
                                }
                            }, r.createElement(u.W, {
                                fontSize: u.Ba.Size6
                            }, Object(p.d)("We'll update this screen within three business days with next steps. Please check back later.", "TaxInfoServiceText"))));
                        case Yr.Completed:
                            return r.createElement(u.W, {
                                fontSize: u.Ba.Size6
                            }, Object(p.d)("Your service tax information was successfully validated.", "TaxInfoServiceText"));
                        case Yr.ActionRequired:
                            return r.createElement(r.Fragment, null, r.createElement(Ar, {
                                email: t.email
                            }), r.createElement(u.Wa, {
                                margin: {
                                    bottom: 2
                                }
                            }, r.createElement(ta, {
                                onboardEntity: e.onboardEntity
                            })));
                        case Yr.Mismatch:
                            return r.createElement(r.Fragment, null, r.createElement(Ir, {
                                workflow: e.workflow
                            }), r.createElement(u.Wa, {
                                margin: {
                                    bottom: 2
                                }
                            }, r.createElement(ta, {
                                onboardEntity: e.onboardEntity
                            })));
                        case Yr.Failed:
                            return r.createElement(u.Oa, {
                                margin: {
                                    bottom: 2
                                }
                            }, r.createElement(u.W, {
                                fontSize: u.Ba.Size6
                            }, Object(p.d)("Please click the button below to retake the Service Tax Interview and correct your information.", "TaxInfoServiceText")));
                        default:
                            return null
                    }
                },
                Rr = function() {
                    return Object(p.d)("Start Over", "TaxPreviewInstructions")
                },
                Fr = function(e) {
                    return r.createElement(u.Wa, {
                        padding: 1,
                        margin: {
                            bottom: 1
                        }
                    }, r.createElement(u.Oa, {
                        margin: {
                            bottom: 2
                        }
                    }, r.createElement(u.W, {
                        fontSize: u.Ba.Size6
                    }, Object(p.d)("It is important that you enter consistent information throughout the onboarding process to ensure that we have your correct contact information, tax information, and payout information. When filling out the tax form on the following page, please make sure that you enter the same information as you did in Step 1. For your reference, here is the information you entered in Step 1.", "TaxPreviewInstructions"))), e.onboardEntity !== mt.OnboardEntity.ExtensionsDeveloper && r.createElement(u.Oa, {
                        margin: {
                            bottom: 2
                        }
                    }, r.createElement(u.W, {
                        fontSize: u.Ba.Size6
                    }, Object(p.d)('If any of this information is incorrect, you must restart your Payout Registration by clicking "{buttonLabel}" below.', {
                        buttonLabel: Rr()
                    }, "TaxPreviewInstructions"))), e.onboardEntity === mt.OnboardEntity.ExtensionsDeveloper && r.createElement(u.Oa, {
                        margin: {
                            bottom: 2
                        }
                    }, r.createElement(u.W, {
                        fontSize: u.Ba.Size6
                    }, Object(p.d)('If any of this information is incorrect, you must restart your Extensions Developer Registration by clicking "{buttonLabel}" below.', {
                        buttonLabel: Rr()
                    }, "TaxPreviewInstructions"))), r.createElement(u.W, {
                        fontSize: u.Ba.Size6
                    }, Object(p.d)("Otherwise, please proceed by clicking the purple button and the tax form will appear in a new window. If the tax form does not appear, make sure that you have pop-ups enabled.", "TaxPreviewInstructions")))
                },
                jr = function() {
                    return Object(p.d)("optional", "TaxPreviewReferenceInfo")
                },
                Wr = function(e) {
                    var t, n = e.workflow.registration;
                    if (!n) return null;
                    t = n.companyName ? n.companyName : [n.firstName, n.middleName, n.lastName].filter(function(e) {
                        return null !== e
                    }).join(" ");
                    var a = "US" === n.countryCode,
                        i = "CA" === n.countryCode;
                    return r.createElement(u.yb, {
                        borderMarked: !0,
                        padding: 2
                    }, r.createElement(u.Wa, {
                        margin: {
                            bottom: 2
                        }
                    }, r.createElement(u.Da, {
                        label: Object(p.d)("Channel Name", "TaxPreviewReferenceInfo"),
                        orientation: u.Ea.Horizontal
                    }, r.createElement(u.Qa, {
                        type: u.Sa.Text,
                        value: e.channelName,
                        disabled: !0
                    }))), r.createElement(u.Wa, {
                        margin: {
                            bottom: 2
                        }
                    }, r.createElement(u.Da, {
                        label: Object(p.d)("Name", "TaxPreviewReferenceInfo"),
                        orientation: u.Ea.Horizontal
                    }, r.createElement(u.Qa, {
                        type: u.Sa.Text,
                        value: t || "",
                        disabled: !0
                    }))), r.createElement(u.Wa, {
                        margin: {
                            bottom: 2
                        }
                    }, r.createElement(u.Da, {
                        label: Object(p.d)("Email", "TaxPreviewReferenceInfo"),
                        orientation: u.Ea.Horizontal
                    }, r.createElement(u.Qa, {
                        type: u.Sa.Text,
                        value: n.email,
                        disabled: !0
                    }))), r.createElement(u.Wa, {
                        margin: {
                            bottom: 2
                        }
                    }, r.createElement(u.Da, {
                        label: Object(p.d)("Country", "TaxPreviewReferenceInfo"),
                        orientation: u.Ea.Horizontal
                    }, r.createElement(u.Qa, {
                        type: u.Sa.Text,
                        value: Object(Oa.b)(n.countryCode),
                        disabled: !0
                    }))), r.createElement(u.Wa, {
                        margin: {
                            bottom: 2
                        }
                    }, r.createElement(u.Da, {
                        label: Object(p.d)("Street Address", "TaxPreviewReferenceInfo"),
                        orientation: u.Ea.Horizontal
                    }, r.createElement(u.Qa, {
                        type: u.Sa.Text,
                        value: n.streetAddress,
                        disabled: !0
                    }))), r.createElement(u.Wa, {
                        margin: {
                            bottom: 2
                        }
                    }, r.createElement(u.Da, {
                        label: Object(p.d)("Street Address 2", "TaxPreviewReferenceInfo"),
                        orientation: u.Ea.Horizontal,
                        labelOptional: jr()
                    }, r.createElement(u.Qa, {
                        type: u.Sa.Text,
                        value: n.streetAddress2 || "",
                        disabled: !0
                    }))), r.createElement(u.Wa, {
                        margin: {
                            bottom: 2
                        }
                    }, r.createElement(u.Da, {
                        label: Object(p.d)("City or Town", "TaxPreviewReferenceInfo"),
                        orientation: u.Ea.Horizontal
                    }, r.createElement(u.Qa, {
                        type: u.Sa.Text,
                        value: n.city,
                        disabled: !0
                    }))), r.createElement(u.Wa, {
                        margin: {
                            bottom: 2
                        }
                    }, r.createElement(u.Da, {
                        label: Object(p.d)("State/Province", "TaxPreviewReferenceInfo"),
                        orientation: u.Ea.Horizontal,
                        labelOptional: a || i ? "" : jr()
                    }, r.createElement(u.Qa, {
                        type: u.Sa.Text,
                        value: a ? Na(n.stateCode || "") : i ? Sa(n.stateCode || "") : n.stateCode || "",
                        disabled: !0
                    }))), r.createElement(u.Da, {
                        label: Object(p.d)("Zip Code/Postal Code", "TaxPreviewReferenceInfo"),
                        orientation: u.Ea.Horizontal,
                        labelOptional: a ? "" : jr()
                    }, r.createElement(u.Qa, {
                        type: u.Sa.Text,
                        value: n.postal || "",
                        disabled: !0
                    })))
                },
                Lr = (n("Ff3J"), n("Hhor")),
                Br = function(e) {
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
                    return a.__extends(t, e), t.prototype.componentWillUnmount = function() {
                        clearInterval(this.popupInterval)
                    }, t.prototype.render = function() {
                        return this.props.data.loading ? r.createElement(u.yb, {
                            className: "tax-preview-modal__container",
                            background: u.r.Base,
                            padding: 5
                        }, r.createElement(u.Ya, {
                            fillContent: !0
                        })) : this.props.data.error ? r.createElement(u.yb, {
                            className: "tax-preview-modal__container",
                            background: u.r.Base,
                            padding: 5
                        }, r.createElement(g.a, {
                            message: Object(p.d)("Oops, something went wrong.", "TaxPreviewModal")
                        })) : r.createElement(u.yb, {
                            className: "tax-preview-modal__container",
                            background: u.r.Base,
                            padding: 2
                        }, r.createElement(u.yb, {
                            borderBottom: !0,
                            padding: {
                                bottom: 1
                            },
                            margin: {
                                bottom: 1
                            }
                        }, r.createElement(u.W, {
                            type: u.Ob.H4
                        }, Object(p.d)("Information Reference", "TaxPreviewModal"))), r.createElement(Fr, {
                            onboardEntity: this.props.onboardEntity
                        }), r.createElement(Wr, {
                            channelName: this.props.channelName,
                            workflow: this.props.workflow
                        }), r.createElement(u.Wa, {
                            display: u.X.Flex,
                            justifyContent: u.Va.Center,
                            padding: {
                                top: 2
                            }
                        }, r.createElement(u.Wa, {
                            display: u.X.InlineBlock,
                            margin: {
                                right: 2
                            }
                        }, r.createElement(u.z, {
                            onClick: this.handleOpenTaxInterviewClick,
                            disabled: this.state.openingTaxInterview
                        }, this.openTaxButtonText)), r.createElement(u.Wa, {
                            display: u.X.InlineBlock,
                            margin: {
                                right: 2
                            }
                        }, r.createElement(u.z, {
                            type: u.F.Text,
                            onClick: this.props.showStartOverModal,
                            disabled: this.state.openingTaxInterview
                        }, Object(p.d)("Start Over", "TaxPreviewModal"))), this.state.openingTaxInterview && r.createElement(u.Wa, {
                            display: u.X.Flex,
                            justifyContent: u.Va.Center,
                            flexDirection: u.Z.Column
                        }, r.createElement(u.Ya, null))))
                    }, Object.defineProperty(t.prototype, "openTaxButtonText", {
                        get: function() {
                            return this.props.taxType === zr.Royalty ? Object(p.d)("Open Royalty Tax Interview Form", "TaxPreviewModal") : Object(p.d)("Open Service Tax Interview Form", "TaxPreviewModal")
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t
                }(r.Component),
                Ur = Object(o.compose)(Object(b.a)(Lr, {
                    options: function(e) {
                        return {
                            variables: {
                                taxType: e.taxType,
                                returnURL: window.location.href
                            }
                        }
                    }
                }))(Br),
                Mr = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        return r.createElement(u.Wa, null, r.createElement(Ur, {
                            taxType: this.props.taxType,
                            channelName: this.props.channelName,
                            onboardEntity: this.props.onboardEntity,
                            workflow: this.props.workflow,
                            showStartOverModal: this.props.showStartOverModal,
                            closeTaxPreviewModal: this.props.closeModal
                        }), r.createElement(aa.a, {
                            closeOnBackdropClick: !0
                        }))
                    }, t
                }(r.Component);
            var Vr, zr, Yr, Gr = Object(v.compose)(Object(Ze.connect)(null, function(e) {
                return Object(v.bindActionCreators)({
                    closeModal: Ke.c
                }, e)
            }))(Mr);
            ! function(e) {
                e.RoyaltyHeader = "payout-onboarding-tax-interview__royalty-header", e.RoyaltyButton = "payout-onboarding-tax-interview__royalty-button", e.ServiceHeader = "payout-onboarding-tax-interview__service-header", e.ServiceButton = "payout-onboarding-tax-interview__service-button", e.ContinueButton = "payout-onboarding-tax-interview__continue-button"
            }(Vr || (Vr = {})),
            function(e) {
                e.Royalty = "Royalty", e.Service = "Service"
            }(zr || (zr = {})),
            function(e) {
                e[e.NotStarted = 0] = "NotStarted", e[e.Pending = 1] = "Pending", e[e.Failed = 2] = "Failed", e[e.ActionRequired = 3] = "ActionRequired", e[e.Mismatch = 4] = "Mismatch", e[e.Completed = 5] = "Completed"
            }(Yr || (Yr = {}));
            var qr = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.handleRoyaltyTaxButtonClick = function() {
                        t.showTaxPreviewModal(zr.Royalty)
                    }, t.handleServiceTaxButtonClick = function() {
                        t.showTaxPreviewModal(zr.Service)
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
                        t.props.updateStepDisplayed(mt.OnboardStep.PayoutMethod)
                    }, t
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    return r.createElement(w.a, null, r.createElement(qn, {
                        title: Object(p.d)("Royalty Tax Interview", "PayoutOnboardingTaxInterview"),
                        statusText: this.royaltyStatusText,
                        statusType: this.royaltyStatusType,
                        borderTop: !0,
                        "data-test-selector": Vr.RoyaltyHeader
                    }), r.createElement(u.Wa, {
                        padding: 2
                    }, r.createElement(_r, {
                        taxStatus: this.royaltyTaxStatus
                    }), r.createElement(xr, {
                        taxStatus: this.royaltyTaxStatus,
                        workflow: this.props.workflow,
                        onboardEntity: this.props.onboardEntity
                    }), ![Yr.Completed, Yr.Pending].includes(this.royaltyTaxStatus) && r.createElement(u.z, {
                        type: this.royaltyTaxButtonType,
                        disabled: this.royaltyTaxButtonDisabled,
                        onClick: this.handleRoyaltyTaxButtonClick,
                        "data-test-selector": Vr.RoyaltyButton
                    }, this.royaltyTaxButtonText)), r.createElement(qn, {
                        title: Object(p.d)("Service Tax Interview", "PayoutOnboardingTaxInterview"),
                        statusText: this.serviceStatusText,
                        statusType: this.serviceStatusType,
                        "data-test-selector": Vr.ServiceHeader
                    }), r.createElement(u.Wa, {
                        padding: 2
                    }, r.createElement(_r, {
                        taxStatus: this.serviceTaxStatus
                    }), r.createElement(Dr, {
                        royaltyTaxCompleted: this.royaltyTaxStatus === Yr.Completed,
                        taxStatus: this.serviceTaxStatus,
                        workflow: this.props.workflow,
                        onboardEntity: this.props.onboardEntity
                    }), ![Yr.Completed, Yr.Pending].includes(this.serviceTaxStatus) && r.createElement(u.z, {
                        type: this.serviceTaxButtonType,
                        disabled: this.serviceTaxButtonDisabled,
                        onClick: this.handleServiceTaxButtonClick,
                        "data-test-selector": Vr.ServiceButton
                    }, this.serviceTaxButtonText)), r.createElement(u.yb, {
                        padding: 2,
                        background: u.r.Alt2
                    }, r.createElement(u.z, {
                        "data-test-selector": Vr.ContinueButton,
                        disabled: this.continueButtonDisabled,
                        onClick: this.handleContinueClick
                    }, Object(p.d)("Continue", "PayoutOnboardingTaxInterview"))))
                }, Object.defineProperty(t.prototype, "royaltyTaxStatus", {
                    get: function() {
                        if (!this.props.workflow || !this.props.workflow.currentStep) return Yr.NotStarted;
                        switch (this.props.workflow.currentStep) {
                            case mt.WorkflowState.REGISTRATION_NOT_STARTED:
                            case mt.WorkflowState.AGREEMENT_NOT_STARTED:
                            case mt.WorkflowState.ROYALTY_TAX_INTERVIEW_NOT_STARTED:
                                return Yr.NotStarted;
                            case mt.WorkflowState.ROYALTY_TAX_INTERVIEW_PENDING:
                                return Yr.Pending;
                            case mt.WorkflowState.ROYALTY_TAX_INTERVIEW_ACTION_REQUIRED:
                                return Yr.ActionRequired;
                            case mt.WorkflowState.ROYALTY_TAX_INTERVIEW_MISMATCH:
                                return Yr.Mismatch;
                            case mt.WorkflowState.ROYALTY_TAX_INTERVIEW_FAILED:
                                return Yr.Failed;
                            default:
                                return Yr.Completed
                        }
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "serviceTaxStatus", {
                    get: function() {
                        if (!this.props.workflow || !this.props.workflow.currentStep) return Yr.NotStarted;
                        switch (this.props.workflow.currentStep) {
                            case mt.WorkflowState.REGISTRATION_NOT_STARTED:
                            case mt.WorkflowState.AGREEMENT_NOT_STARTED:
                            case mt.WorkflowState.ROYALTY_TAX_INTERVIEW_NOT_STARTED:
                            case mt.WorkflowState.ROYALTY_TAX_INTERVIEW_PENDING:
                            case mt.WorkflowState.ROYALTY_TAX_INTERVIEW_ACTION_REQUIRED:
                            case mt.WorkflowState.ROYALTY_TAX_INTERVIEW_MISMATCH:
                            case mt.WorkflowState.ROYALTY_TAX_INTERVIEW_FAILED:
                            case mt.WorkflowState.SERVICE_TAX_INTERVIEW_NOT_STARTED:
                                return Yr.NotStarted;
                            case mt.WorkflowState.SERVICE_TAX_INTERVIEW_PENDING:
                                return Yr.Pending;
                            case mt.WorkflowState.SERVICE_TAX_INTERVIEW_ACTION_REQUIRED:
                                return Yr.ActionRequired;
                            case mt.WorkflowState.SERVICE_TAX_INTERVIEW_MISMATCH:
                                return Yr.Mismatch;
                            case mt.WorkflowState.SERVICE_TAX_INTERVIEW_FAILED:
                                return Yr.Failed;
                            default:
                                return Yr.Completed
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
                        case Yr.NotStarted:
                            return Object(p.d)("Not Started", "PayoutOnboardingTaxInterview");
                        case Yr.Pending:
                            return Object(p.d)("Under Review", "PayoutOnboardingTaxInterview");
                        case Yr.ActionRequired:
                            return Object(p.d)("Additional Documentation Required", "PayoutOnboardingTaxInterview");
                        case Yr.Mismatch:
                        case Yr.Failed:
                            return Object(p.d)("Failed", "PayoutOnboardingTaxInterview");
                        case Yr.Completed:
                            return Object(p.d)("Completed", "PayoutOnboardingTaxInterview");
                        default:
                            return ""
                    }
                }, t.prototype.getStatusType = function(e) {
                    switch (e) {
                        case Yr.Pending:
                            return u.cb.Prime;
                        case Yr.ActionRequired:
                        case Yr.Mismatch:
                        case Yr.Failed:
                            return u.cb.Alert;
                        case Yr.Completed:
                            return u.cb.Success;
                        default:
                            return
                    }
                }, Object.defineProperty(t.prototype, "royaltyTaxButtonType", {
                    get: function() {
                        return this.royaltyTaxStatus === Yr.Pending || this.royaltyTaxStatus === Yr.ActionRequired ? u.F.Hollow : u.F.Default
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "royaltyTaxButtonDisabled", {
                    get: function() {
                        return this.royaltyTaxStatus === Yr.Completed
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "royaltyTaxButtonText", {
                    get: function() {
                        return this.royaltyTaxStatus === Yr.NotStarted ? Object(p.d)("Begin Royalty Tax Interview", "PayoutOnboardingTaxInterview") : Object(p.d)("Retake Royalty Tax Interview", "PayoutOnboardingTaxInterview")
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "serviceTaxButtonType", {
                    get: function() {
                        return this.serviceTaxStatus === Yr.Pending || this.serviceTaxStatus === Yr.ActionRequired ? u.F.Hollow : u.F.Default
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "serviceTaxButtonDisabled", {
                    get: function() {
                        return this.royaltyTaxStatus !== Yr.Completed || this.serviceTaxStatus === Yr.Completed
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "serviceTaxButtonText", {
                    get: function() {
                        return this.serviceTaxStatus === Yr.NotStarted ? Object(p.d)("Begin Service Tax Interview", "PayoutOnboardingTaxInterview") : Object(p.d)("Retake Service Tax Interview", "PayoutOnboardingTaxInterview")
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "continueButtonDisabled", {
                    get: function() {
                        return this.royaltyTaxStatus !== Yr.Completed || this.serviceTaxStatus !== Yr.Completed
                    },
                    enumerable: !0,
                    configurable: !0
                }), t
            }(r.Component);
            var Xr = Object(o.compose)(Object(Ze.connect)(null, function(e) {
                    return Object(v.bindActionCreators)({
                        showTaxPreviewModal: function(e) {
                            var t = a.__rest(e, []);
                            return Object(Ke.d)(Gr, t)
                        }
                    }, e)
                }))(qr),
                Qr = n("4F2d"),
                Hr = {
                    "data-test-selector": "require-two-factor-enabled__enable-two-factor-message"
                },
                $r = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        return this.props.data.loading ? r.createElement(w.a, null, r.createElement(_.a, null, r.createElement(u.db, {
                            lineCount: 4
                        }))) : this.props.data.error ? r.createElement(w.a, null, r.createElement(_.a, null, r.createElement(g.a, {
                            message: Object(p.d)("Oops, something went wrong.", "RequireTwoFactorEnabled")
                        }))) : this.hasTwoFactorEnabled ? r.createElement(r.Fragment, null, this.props.children) : r.createElement(w.a, null, r.createElement(_.a, null, r.createElement(u.W, a.__assign({
                            type: u.Ob.P
                        }, Hr), this.props.enableTwoFactorMessage)), r.createElement(_.a, null, r.createElement(u.z, {
                            linkTo: "/settings/security"
                        }, Object(p.d)("Enable Two-Factor Authentication", "RequireTwoFactorEnabled"))))
                    }, Object.defineProperty(t.prototype, "hasTwoFactorEnabled", {
                        get: function() {
                            return !!(this.props.data.currentUser && this.props.data.currentUser.settings && this.props.data.currentUser.settings.hasTwoFactorEnabled)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t
                }(r.Component),
                Zr = Object(o.compose)(Object(b.a)(Qr))($r),
                Kr = n("GuWA"),
                Jr = function(e) {
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
                        return r.createElement(r.Fragment, null, r.createElement(u.Oa, {
                            margin: {
                                bottom: 2
                            }
                        }, r.createElement(u.W, {
                            type: u.Ob.H4
                        }, Object(p.d)("Are you sure you would like to start over?", "StartOverModal"))), r.createElement(u.yb, {
                            borderTop: !0,
                            borderBottom: !0,
                            padding: {
                                y: 2
                            }
                        }, r.createElement(u.Oa, {
                            margin: {
                                bottom: 2
                            }
                        }, r.createElement(u.W, {
                            type: u.Ob.P
                        }, Object(p.d)("Your current progress will be lost!", "StartOverModal"))), r.createElement(u.W, {
                            type: u.Ob.P,
                            bold: !0,
                            color: u.O.Error
                        }, Object(p.d)("WARNING: Starting over will lose any progress and make your Twitch account unpayable. We will hold any payouts until you have fully completed the form.", "StartOverModal"))), r.createElement(u.Wa, {
                            display: u.X.Flex,
                            justifyContent: u.Va.Center,
                            padding: {
                                top: 2
                            }
                        }, r.createElement(u.Wa, {
                            display: u.X.InlineBlock,
                            margin: {
                                right: 2
                            }
                        }, r.createElement(u.z, {
                            "data-test-selector": "start-over-modal___start-over-button",
                            type: u.F.Text,
                            onClick: this.onStartOverClick,
                            disabled: this.state.canceling
                        }, Object(p.d)("Yes, Start Over", "StartOverModal"))), r.createElement(u.Wa, {
                            display: u.X.InlineBlock,
                            margin: {
                                right: 2
                            }
                        }, r.createElement(u.z, {
                            "data-test-selector": "start-over-modal__stay-here-button",
                            onClick: this.props.callCloseModal,
                            disabled: this.state.canceling
                        }, Object(p.d)("No, Stay Here", "StartOverModal"))), this.state.canceling && r.createElement(u.Wa, {
                            display: u.X.Flex,
                            justifyContent: u.Va.Center,
                            flexDirection: u.Z.Column
                        }, r.createElement(u.Ya, null))))
                    }, t
                }(r.Component),
                ei = (n("cMo7"), function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        return r.createElement(u.yb, {
                            className: "start-over-modal__container",
                            background: u.r.Base,
                            padding: 2
                        }, r.createElement(Jr, {
                            cancelWorkflow: this.props.cancelWorkflow,
                            callCloseModal: this.props.closeModal
                        }), r.createElement(aa.a, {
                            closeOnBackdropClick: !0
                        }))
                    }, t
                }(r.Component));
            var ti, ni = Object(Ze.connect)(null, function(e) {
                    return Object(v.bindActionCreators)({
                        closeModal: Ke.c
                    }, e)
                })(ei),
                ai = n("KBb9"),
                ri = n("N/RI"),
                ii = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            stepDisplayed: mt.OnboardStep.Summary,
                            redirectedAlready: !1
                        }, t.backLinkURL = "/" + t.props.channelName + "/dashboard/settings/revenue", t.totalSteps = t.props.onboardEntity === mt.OnboardEntity.CustomPartner ? 5 : 4, t.goBackToSummary = function() {
                            t.setState({
                                stepDisplayed: mt.OnboardStep.Summary
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
                                            return [4, this.props.startWorkflow(a.__assign({}, Object(k.a)({
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
                                            return [4, this.props.cancelWorkflow(a.__assign({}, Object(k.a)({
                                                targetUserID: this.props.data.currentUser.id
                                            })))];
                                        case 1:
                                            return e = n.sent(), t = function(t) {
                                                return t.currentUser.payoutInvite && t.currentUser.payoutInvite.workflow && e.data.cancelPayoutOnboardingWorkflow.workflow && (t.currentUser.payoutInvite.workflow.id = e.data.cancelPayoutOnboardingWorkflow.workflow.id, t.currentUser.payoutInvite.workflow.currentStep = e.data.cancelPayoutOnboardingWorkflow.workflow.currentStep, t.currentUser.payoutInvite.workflow.registration = null, t.currentUser.payoutInvite.workflow.taxMismatchErrors = null), t
                                            }, this.updateContainerQuery(t), this.updateStepDisplayed(mt.OnboardStep.Summary), [2]
                                    }
                                })
                            })
                        }, t.updateContainerQuery = function(e) {
                            Object(k.e)(ai, {}, e)
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
                            stepDisplayed: mt.OnboardStep.PayoutMethod
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
                            if (e.currentStep !== mt.WorkflowState.PAYOUT_METHOD_NOT_STARTED && e.currentStep !== mt.WorkflowState.PAYOUT_METHOD_PENDING && e.currentStep !== mt.WorkflowState.COMPLETED && e.currentStep !== mt.WorkflowState.REVIEW_PENDING) return !1;
                            var t = Ln.parse(this.props.location.search);
                            return !!t && "true" === t.redirect_tipalti
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t.prototype.render = function() {
                        var e = r.createElement(P.a, {
                            title: pr[mt.OnboardStep.Summary].title[this.props.onboardEntity](),
                            description: pr[mt.OnboardStep.Summary].description[this.props.onboardEntity](),
                            linkToParent: this.backLinkURL
                        });
                        if (this.props.data.loading) return r.createElement(w.a, {
                            header: e
                        }, r.createElement(_.a, null, r.createElement(u.db, {
                            lineCount: 4
                        })));
                        if (this.props.data.error) return r.createElement(w.a, {
                            header: e
                        }, r.createElement(_.a, null, r.createElement(g.a, {
                            message: Object(p.d)("Oops, something went wrong.", "PayoutOnboardingContainer")
                        })));
                        var t = this.props.onboardEntity,
                            n = this.updateStepDisplayed,
                            i = this.props.data.currentUser.payoutInvite.workflow,
                            o = this.updateContainerQuery;
                        if (!i || i.currentStep === mt.WorkflowState.CANCELED) return this.startWorkflow(), r.createElement(w.a, {
                            header: e
                        }, r.createElement(_.a, null, r.createElement(u.db, {
                            lineCount: 4
                        })));
                        var s, l = {
                            onboardEntity: t,
                            updateStepDisplayed: n,
                            workflow: i,
                            updateContainerQuery: o
                        };
                        switch (this.state.stepDisplayed) {
                            case mt.OnboardStep.Summary:
                                return r.createElement(r.Fragment, null, e, r.createElement(Zr, {
                                    enableTwoFactorMessage: this.enableTwoFactorMessage
                                }, r.createElement(Cr, a.__assign({}, l, {
                                    showStartOverModal: this.showStartOverModal
                                }))));
                            case mt.OnboardStep.Registration:
                                var d = {
                                    channelName: this.props.channelName,
                                    userID: this.props.data.currentUser.id
                                };
                                s = r.createElement(tr, a.__assign({}, l, d));
                                break;
                            case mt.OnboardStep.Agreement:
                                s = r.createElement(Kn, a.__assign({}, l));
                                break;
                            case mt.OnboardStep.TaxInterview:
                                d = {
                                    channelName: this.props.channelName,
                                    showStartOverModal: this.showStartOverModal
                                };
                                s = r.createElement(Xr, a.__assign({}, l, d));
                                break;
                            case mt.OnboardStep.PayoutMethod:
                                s = r.createElement(ma, a.__assign({}, l));
                                break;
                            case mt.OnboardStep.Review:
                                s = r.createElement(nr, a.__assign({}, l))
                        }
                        return r.createElement(r.Fragment, null, r.createElement(P.a, {
                            title: Object(p.d)("Step {numOfCurrentStep} of {numOfTotalSteps}: {stepTitle}", {
                                numOfCurrentStep: Object(p.f)(this.state.stepDisplayed),
                                numOfTotalSteps: Object(p.f)(this.totalSteps),
                                stepTitle: pr[this.state.stepDisplayed].title[this.props.onboardEntity]()
                            }, "PayoutOnboardingContainer"),
                            description: pr[this.state.stepDisplayed].description[this.props.onboardEntity](),
                            onClick: this.goBackToSummary
                        }), r.createElement(Zr, {
                            enableTwoFactorMessage: this.enableTwoFactorMessage
                        }, s))
                    }, t
                }(r.Component);
            var oi = Object(v.compose)(Object(b.a)(ai), Object(b.a)(ri, {
                    name: "startWorkflow"
                }), Object(b.a)(Kr, {
                    name: "cancelWorkflow"
                }), Object(Un.a)([{
                    topic: function(e) {
                        return Object(ke.r)(e.currentUserID)
                    },
                    mapMessageTypesToProps: (ti = {}, ti["*"] = "payoutOnboardingEvent", ti)
                }]), Object(Ze.connect)(null, function(e) {
                    return Object(v.bindActionCreators)({
                        showStartOverModal: function(e) {
                            var t = a.__rest(e, []);
                            return Object(Ke.d)(ni, t)
                        }
                    }, e)
                }), Bn.a)(ii),
                si = n("0dF/"),
                li = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.data.loading && !this.props.data.error || this.props.latencyTracking.reportInteractive()
                    }, t.prototype.componentDidUpdate = function(e) {
                        (e.data.loading && !this.props.data.loading || this.props.data.error) && this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        return this.props.data.loading ? r.createElement(u.Wa, {
                            padding: {
                                y: 5
                            }
                        }, r.createElement(u.Ya, {
                            fillContent: !0
                        })) : this.props.data.error ? r.createElement(u.Wa, {
                            padding: {
                                y: 5
                            }
                        }, r.createElement(g.a, null)) : this.hasAgreementPendingUpgrade ? r.createElement(l.a, {
                            to: "/" + this.props.match.params.channelName + "/dashboard/settings/revenue/upgrade-terms"
                        }) : r.createElement(oi, {
                            channelName: this.props.match.params.channelName,
                            currentUserID: this.props.data.currentUser.id,
                            onboardEntity: this.props.data.currentUser.payoutInvite.category
                        })
                    }, Object.defineProperty(t.prototype, "hasAgreementPendingUpgrade", {
                        get: function() {
                            return !!this.props.data.currentUser.payoutInvite.workflow && this.props.data.currentUser.payoutInvite.workflow.currentStep === mt.WorkflowState.AGREEMENT_PENDING_UPGRADE
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t
                }(r.Component),
                di = Object(o.compose)(Object(c.b)("PayoutOnboardingPage", {
                    destination: E.a.DashboardSettingsRevenuePayoutOnboarding
                }), Object(y.a)({
                    location: S.PageviewLocation.DashboardSettingsRevenuePayoutOnboarding
                }), Object(b.a)(si))(li),
                ci = n("+WWT"),
                ui = (n("NEwK"), function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.data.loading && !this.props.data.error || this.props.latencyTracking.reportInteractive()
                    }, t.prototype.componentDidUpdate = function(e) {
                        (e.data.loading && !this.props.data.loading || this.props.data.error) && this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        if (this.props.data.loading) return r.createElement(u.Wa, {
                            padding: {
                                y: 5
                            }
                        }, r.createElement(u.Ya, {
                            fillContent: !0
                        }));
                        if (this.props.data.error) return r.createElement(u.Wa, {
                            padding: {
                                y: 5
                            }
                        }, r.createElement(g.a, null));
                        if (!this.isOnboardingComplete) return r.createElement(h.a, null);
                        var e = r.createElement(P.a, {
                            title: Object(p.d)("Change Payout Method", "PayoutSettingsPage"),
                            linkToParent: "/" + this.props.match.params.channelName + "/dashboard/settings/revenue"
                        });
                        return r.createElement(Zr, {
                            enableTwoFactorMessage: Object(p.d)("You must enable two-factor authentication to change your payout method.", "PayoutSettingsPage")
                        }, r.createElement(w.a, {
                            header: e
                        }, r.createElement(_.a, null, r.createElement(ia, {
                            tipaltiURL: this.tipaltiURL
                        }))))
                    }, Object.defineProperty(t.prototype, "isOnboardingComplete", {
                        get: function() {
                            return !!this.props.data.currentUser.payoutInvite.workflow && this.props.data.currentUser.payoutInvite.workflow.currentStep === mt.WorkflowState.COMPLETED
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
                mi = Object(o.compose)(Object(c.b)("PayoutSettingsPage", {
                    destination: E.a.DashboardSettingsRevenuePayoutSettings
                }), Object(y.a)({
                    location: S.PageviewLocation.DashboardSettingsRevenuePayoutSettings
                }), Object(b.a)(ci))(ui),
                pi = n("3Bft"),
                gi = n("0WFu"),
                hi = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onChange = function(e) {
                            t.props.onChange(t.props.index, e.currentTarget.value)
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        return r.createElement(C.a, {
                            label: this.props.label
                        }, r.createElement(u.Qa, {
                            type: u.Sa.Text,
                            maxLength: 50,
                            placeholder: Object(p.d)("Enter the name of your subscription ticket", "SubsNameSettingsSection"),
                            value: this.props.displayName,
                            onChange: this.onChange
                        }), r.createElement(T.a, {
                            text: this.props.description
                        }))
                    }, t
                }(r.Component),
                bi = n("Q7E8"),
                fi = n("Wuwm"),
                vi = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            displayNames: new Array,
                            saveStatus: O.b.NoChanges
                        }, t.onDisplayNameChange = function(e, n) {
                            return a.__awaiter(t, void 0, void 0, function() {
                                var t;
                                return a.__generator(this, function(a) {
                                    return (t = this.state.displayNames.slice())[e] = n, this.setState({
                                        displayNames: t,
                                        saveStatus: O.b.DirtyChanges
                                    }), [2]
                                })
                            })
                        }, t.onClickSave = function() {
                            return a.__awaiter(t, void 0, void 0, function() {
                                var e, t, n, r, i;
                                return a.__generator(this, function(a) {
                                    switch (a.label) {
                                        case 0:
                                            if (!this.props.data.user || !this.props.data.user.id || !this.props.data.user.subscriptionProducts) return [2];
                                            e = O.b.Working, this.setState({
                                                saveStatus: e
                                            }), t = 0, a.label = 1;
                                        case 1:
                                            if (!(t < this.state.displayNames.length)) return [3, 6];
                                            if (!(n = this.props.data.user.subscriptionProducts[t])) return [3, 5];
                                            r = this.state.displayNames[t], i = {
                                                targetUserID: this.props.data.user.id,
                                                id: n.id,
                                                displayName: r
                                            }, a.label = 2;
                                        case 2:
                                            return a.trys.push([2, 4, , 5]), [4, this.props.updateSubscriptionProduct(Object(k.a)(i))];
                                        case 3:
                                            return a.sent(), e = O.b.Success, [3, 5];
                                        case 4:
                                            return a.sent(), e = O.b.Error, [3, 5];
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
                                case pi.b.Tier1:
                                    return Object(p.d)("Tier 1 Subscription Plan Name", "SubsNameSettingsPage");
                                case pi.b.Tier2:
                                    return Object(p.d)("TIer 2 Subscription Plan Name", "SubsNameSettingsPage");
                                case pi.b.Tier3:
                                    return Object(p.d)("Tier 3 Subscription Plan Name", "SubsNameSettingsPage");
                                default:
                                    return Object(p.d)("Subscription Plan Name", "SubsNameSettingsPage")
                            }
                        }, t.createSubPlanDescription = function(e) {
                            if (e) {
                                var t = Object(gi.a)(e);
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
                        if (!a || !a.subscriptionProducts) return t ? r.createElement(u.Ya, {
                            fillContent: !0
                        }) : n ? r.createElement(g.a, null) : null;
                        var i = r.createElement(N.a, {
                                status: this.state.saveStatus,
                                onClickSave: this.onClickSave
                            }),
                            o = r.createElement(P.a, {
                                title: Object(p.d)("Subscription Information", "SubsNameSettingsPage"),
                                linkToParent: "/" + this.props.match.params.channelName + "/dashboard/settings/revenue"
                            });
                        return r.createElement(w.a, {
                            header: o,
                            footer: i
                        }, this.renderProducts())
                    }, t.prototype.renderProducts = function() {
                        var e = this;
                        return this.props.data.user && this.props.data.user.subscriptionProducts ? this.props.data.user.subscriptionProducts.map(function(t, n) {
                            if (!t) return null;
                            var a = e.state.displayNames[n],
                                i = t.id,
                                o = e.createSubPlanName(t.tier),
                                s = e.createSubPlanDescription(t.tier || void 0);
                            return r.createElement(hi, {
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
                yi = Object(v.compose)(Object(c.b)("SubsNameSettingsPage", {
                    destination: E.a.DashboardSettingsRevenueSubsNameSettings
                }), Object(y.a)({
                    location: S.PageviewLocation.DashboardSettingsRevenueSubsNameSettings
                }), Object(b.a)(bi, {
                    options: function(e) {
                        return {
                            variables: {
                                login: e.match.params.channelName
                            }
                        }
                    }
                }), Object(b.a)(fi, {
                    name: "updateSubscriptionProduct"
                }))(vi),
                Ei = n("fT/Q"),
                Si = n("ESve"),
                ki = n("9C/b"),
                Oi = function(e) {
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
                                var e, t, n, r, i, o;
                                return a.__generator(this, function(s) {
                                    switch (s.label) {
                                        case 0:
                                            return n = this.props.data.currentUser && this.props.data.currentUser.payoutInvite && this.props.data.currentUser.payoutInvite.category, r = this.props.data.currentUser && this.props.data.currentUser.id, n && r ? (this.props.data.currentUser && this.props.data.currentUser.programAgreement ? (e = this.props.data.currentUser.programAgreement.type, t = this.props.data.currentUser.programAgreement.version) : (e = n, t = "v1"), i = a.__assign({}, Object(k.a)({
                                                targetUserID: r,
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
                    return a.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.data.loading && !this.props.data.error || (p.p.setPageTitle(this.headerTitle), this.props.latencyTracking.reportInteractive())
                    }, t.prototype.componentDidUpdate = function(e) {
                        (e.data.loading && !this.props.data.loading || this.props.data.error) && (p.p.setPageTitle(this.headerTitle), this.props.latencyTracking.reportInteractive())
                    }, t.prototype.render = function() {
                        if (this.props.data.loading || this.state.redirecting) return r.createElement(u.Wa, {
                            padding: {
                                y: 5
                            }
                        }, r.createElement(u.Ya, {
                            fillContent: !0
                        }));
                        if (this.props.data.error) return r.createElement(u.Wa, {
                            padding: {
                                y: 5
                            }
                        }, r.createElement(g.a, null));
                        if (!this.hasAgreementPendingUpgrade) return r.createElement(h.a, null);
                        var e = r.createElement(P.a, {
                            title: this.headerTitle,
                            linkToParent: "/" + this.props.match.params.channelName + "/dashboard/settings/revenue"
                        });
                        return r.createElement(Zr, {
                            enableTwoFactorMessage: Object(p.d)("You must enable two-factor authentication to accept your agreement.", "UpgradeTermsPage")
                        }, r.createElement(w.a, {
                            header: e
                        }, r.createElement(_.a, null, r.createElement(u.yb, {
                            borderMarked: !0,
                            padding: 2,
                            elevation: 1
                        }, this.renderAgreement)), this.requiresParentConsent && r.createElement(Xn, {
                            updateParentName: this.updateParentName,
                            updateParentConfirmation: this.updateParentConfirmation
                        }), r.createElement(u.yb, {
                            padding: 2,
                            background: u.r.Alt2
                        }, r.createElement(u.z, {
                            size: u.D.Large,
                            state: this.state.processingAgreement ? u.E.Loading : u.E.Default,
                            onClick: this.handleAgreeClick,
                            disabled: this.proceedButtonDisabled || this.state.processingAgreement
                        }, Object(p.d)("Agree", "UpgradeTermsPage")))))
                    }, Object.defineProperty(t.prototype, "headerTitle", {
                        get: function() {
                            if (!this.props.data.currentUser || !this.props.data.currentUser.payoutInvite) return "";
                            switch (this.props.data.currentUser.payoutInvite.category) {
                                case d.C.AFFILIATE:
                                    return Object(p.d)("Agree to the Twitch Affiliate Agreement", "UpgradeTermsPage");
                                case d.C.STANDARD_PARTNER:
                                case d.C.PREMIUM_PARTNER:
                                    return Object(p.d)("Agree to the Twitch Partner Agreement", "UpgradeTermsPage");
                                default:
                                    return ""
                            }
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "hasAgreementPendingUpgrade", {
                        get: function() {
                            return !!(this.props.data.currentUser && this.props.data.currentUser.payoutInvite && this.props.data.currentUser.payoutInvite.workflow && this.props.data.currentUser.payoutInvite.workflow.currentStep === d.D.AGREEMENT_PENDING_UPGRADE)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "renderAgreement", {
                        get: function() {
                            if (!this.props.data.currentUser || !this.props.data.currentUser.payoutInvite) return null;
                            switch (this.props.data.currentUser.payoutInvite.category) {
                                case d.C.AFFILIATE:
                                    return r.createElement(zn, null);
                                case d.C.STANDARD_PARTNER:
                                case d.C.PREMIUM_PARTNER:
                                    var e = this.props.data.currentUser.programAgreement;
                                    return e && r.createElement(Hn, {
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
                            return Object(Mn.differenceInYears)(new Date, e) < 18
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
                Ni = Object(o.compose)(Object(c.b)("UpgradeTermsPage", {
                    destination: E.a.DashboardSettingsRevenueUpgradeTerms
                }), Object(y.a)({
                    location: S.PageviewLocation.DashboardSettingsRevenueUpgradeTerms
                }), Object(b.a)(Si), Object(b.a)(Ei, {
                    name: "acceptProgramAgreement"
                }), ki.a)(Oi),
                Ti = n("DDis"),
                Ci = function() {
                    return r.createElement(r.Fragment, null, r.createElement(u.Oa, {
                        margin: {
                            bottom: 1
                        }
                    }, r.createElement(u.W, {
                        type: u.Ob.H4,
                        bold: !0
                    }, Object(p.d)("Custom Partner Agreement", "CustomPartnerAgreement"))), r.createElement(u.W, {
                        type: u.Ob.P
                    }, Object(p.d)("Please contact <x:link>support</x:link> for a copy of your active Twitch Partner Agreement.", {
                        "x:link": function(e) {
                            return r.createElement(u.U, {
                                to: "https://help.twitch.tv/customer/portal/emails/new",
                                targetBlank: !0
                            }, e)
                        }
                    }, "CustomPartnerAgreement")))
                },
                Pi = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(t, e), t.prototype.componentDidMount = function() {
                        p.p.setPageTitle(Object(p.d)("Partner Agreement", "ViewTermsPageTitle")), this.props.data.loading && !this.props.data.error || this.props.latencyTracking.reportInteractive()
                    }, t.prototype.componentDidUpdate = function(e) {
                        (e.data.loading && !this.props.data.loading || this.props.data.error) && this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        if (this.props.data.loading) return r.createElement(u.Wa, {
                            padding: {
                                y: 5
                            }
                        }, r.createElement(u.Ya, {
                            fillContent: !0
                        }));
                        if (this.props.data.error) return r.createElement(u.Wa, {
                            padding: {
                                y: 5
                            }
                        }, r.createElement(g.a, null));
                        if (!this.canAccessViewTermsPage) return r.createElement(h.a, null);
                        var e = r.createElement(P.a, {
                            title: Object(p.d)("View Active Partner Agreement", "ViewTermsPage"),
                            linkToParent: "/" + this.props.match.params.channelName + "/dashboard/settings/revenue"
                        });
                        return r.createElement(Zr, {
                            enableTwoFactorMessage: Object(p.d)("You must enable two-factor authentication to view your agreement.", "ViewTermsPage")
                        }, r.createElement(w.a, {
                            header: e
                        }, r.createElement(_.a, null, r.createElement(u.yb, {
                            borderMarked: !0,
                            padding: 2,
                            elevation: 1
                        }, this.renderAgreement))))
                    }, Object.defineProperty(t.prototype, "canAccessViewTermsPage", {
                        get: function() {
                            var e = this.props.data.currentUser;
                            return !!e && Ft(e.payoutPlans && e.payoutPlans.map(function(e) {
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
                            if (t.isLegacy || t.category === d.C.CUSTOM_PARTNER) return r.createElement(Ci, null);
                            if (t.category === d.C.STANDARD_PARTNER || t.category === d.C.PREMIUM_PARTNER) {
                                var n = this.props.data.currentUser && this.props.data.currentUser.programAgreement;
                                return n && r.createElement(Hn, {
                                    body: n.body
                                })
                            }
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t
                }(r.Component),
                _i = Object(o.compose)(Object(c.b)("ViewTermsPage", {
                    destination: E.a.DashboardSettingsRevenueViewTerms
                }), Object(y.a)({
                    location: S.PageviewLocation.DashboardSettingsRevenueViewTerms
                }), Object(b.a)(Ti))(Pi),
                wi = n("IFXb"),
                Ai = function(e) {
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
                            i = e.currentUser;
                        return t ? r.createElement(u.Wa, {
                            fullHeight: !0
                        }, r.createElement(u.Ya, {
                            fillContent: !0
                        })) : !n && a && i ? this.isChannelOwner || this.isStaff ? a.payoutInvite && a.payoutInvite.category !== d.C.UNPAID_PARTNER ? r.createElement(wi.a, null, r.createElement(m.a, null, r.createElement(s.a, {
                            path: "/:channelName/dashboard/settings/revenue",
                            exact: !0,
                            component: $t
                        }), this.isChannelOwner && r.createElement(s.a, {
                            path: "/:channelName/dashboard/settings/revenue/payout-onboarding",
                            component: di
                        }), this.isChannelOwner && r.createElement(s.a, {
                            path: "/:channelName/dashboard/settings/revenue/payouts",
                            component: mi
                        }), this.isChannelOwner && r.createElement(s.a, {
                            path: "/:channelName/dashboard/settings/revenue/upgrade-terms",
                            component: Ni
                        }), this.isChannelOwner && r.createElement(s.a, {
                            path: "/:channelName/dashboard/settings/revenue/view-terms",
                            component: _i
                        }), (this.isPaidAffiliate || this.isPaidPartner) && r.createElement(s.a, {
                            path: "/:channelName/dashboard/settings/revenue/cheer",
                            component: we
                        }), (this.isPaidAffiliate || this.isPaidPartner) && r.createElement(s.a, {
                            path: "/:channelName/dashboard/settings/revenue/cheerbadges",
                            component: ve
                        }), (this.isPaidAffiliate || this.isPaidPartner) && r.createElement(s.a, {
                            path: "/:channelName/dashboard/settings/revenue/subscription/chatperks",
                            component: K
                        }), (this.isPaidAffiliate || this.isPaidPartner) && r.createElement(s.a, {
                            path: "/:channelName/dashboard/settings/revenue/subscription/ticket",
                            component: yi
                        }), this.isPaidPartner && r.createElement(s.a, {
                            path: "/:channelName/dashboard/settings/revenue/cheermotes",
                            component: $e
                        }), this.isPaidPartner && r.createElement(s.a, {
                            path: "/:channelName/dashboard/settings/revenue/game-commerce",
                            component: ut
                        }), this.isPaidPartner && r.createElement(s.a, {
                            path: "/:channelName/dashboard/settings/revenue/merch-by-amazon",
                            component: Wn
                        }), this.canAccessSubBadges && r.createElement(s.a, {
                            path: "/:channelLogin/dashboard/settings/revenue/subscription/badges",
                            component: Fn
                        }), r.createElement(s.a, {
                            component: h.a
                        }))) : r.createElement(u.Wa, {
                            fullHeight: !0
                        }, r.createElement(h.a, null)) : r.createElement(l.a, {
                            to: "/" + i.login + "/dashboard/live"
                        }) : r.createElement(u.Wa, {
                            fullHeight: !0
                        }, r.createElement(g.a, null))
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
                                return e.category === d.B.AFFILIATE && e.isReceivingRevenue
                            }))
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "isPaidPartner", {
                        get: function() {
                            return !!(this.props.data.channel && this.props.data.channel.payoutPlans && this.props.data.channel.payoutPlans.find(function(e) {
                                return e.category === d.B.PARTNER && e.isReceivingRevenue
                            }))
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t
                }(r.Component),
                Ii = Object(o.compose)(Object(c.b)("DashboardRevenueSettingsRoot"), Object(b.a)(i, {
                    options: function(e) {
                        return {
                            variables: {
                                channelName: e.match.params.channelName
                            }
                        }
                    }
                }))(Ai);
            n.d(t, "DashboardRevenueSettingsRootComponent", function() {
                return Ai
            }), n.d(t, "DashboardRevenueSettingsRoot", function() {
                return Ii
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
                    e.footer && (t = r.createElement(i.yb, {
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
                    return r.createElement(r.Fragment, null, e.header, r.createElement(i.yb, {
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
                return e.description && (t = a.createElement(r.Wa, {
                    margin: {
                        top: 1
                    }
                }, a.createElement(r.W, {
                    color: r.O.Alt2
                }, e.description))), a.createElement(r.Wa, {
                    margin: {
                        bottom: 2
                    }
                }, a.createElement(r.W, {
                    type: r.Ob.H3,
                    fontSize: r.Ba.Size4,
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
            }), n.o(s, "payoutOnboardingStepToWorkflowState") && n.d(t, "payoutOnboardingStepToWorkflowState", function() {
                return s.payoutOnboardingStepToWorkflowState
            });
            var l = n("HjgX");
            n.o(l, "TaxMismatchError") && n.d(t, "TaxMismatchError", function() {
                return l.TaxMismatchError
            }), n.o(l, "WorkflowState") && n.d(t, "WorkflowState", function() {
                return l.WorkflowState
            }), n.o(l, "payoutOnboardingStepToWorkflowState") && n.d(t, "payoutOnboardingStepToWorkflowState", function() {
                return l.payoutOnboardingStepToWorkflowState
            });
            var d = n("Frl7");
            n.d(t, "TaxMismatchError", function() {
                return d.a
            });
            var c = n("zXPd");
            n.o(c, "WorkflowState") && n.d(t, "WorkflowState", function() {
                return c.WorkflowState
            }), n.o(c, "payoutOnboardingStepToWorkflowState") && n.d(t, "payoutOnboardingStepToWorkflowState", function() {
                return c.payoutOnboardingStepToWorkflowState
            });
            var u = n("zgPa");
            n.d(t, "WorkflowState", function() {
                return u.a
            }), n.d(t, "payoutOnboardingStepToWorkflowState", function() {
                return u.b
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
                    return a.createElement(r.Wa, {
                        className: "settings-row"
                    }, a.createElement(r.Ta, {
                        linkTo: e.linkTo,
                        type: r.Ua.Alpha
                    }, a.createElement(r.yb, {
                        padding: 2,
                        alignItems: r.f.Center,
                        display: r.X.Flex,
                        flexWrap: r.Aa.NoWrap
                    }, a.createElement(r.Wa, {
                        flexGrow: 1
                    }, a.createElement(r.W, {
                        fontSize: r.Ba.Size6,
                        bold: !0
                    }, e.text), a.createElement(r.W, {
                        type: r.Ob.Span
                    }, e.description)), a.createElement(r.Wa, null, a.createElement(r.nb, {
                        asset: r.ob.AngleRight
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
            n.d(t, "a", function() {
                return a
            }), n.d(t, "b", function() {
                return i
            });
            var a, r = n("DMoW");

            function i(e) {
                return a[r.D[e]]
            }! function(e) {
                e.REGISTRATION_NOT_STARTED = "REGISTRATION_NOT_STARTED", e.AGREEMENT_NOT_STARTED = "AGREEMENT_NOT_STARTED", e.ROYALTY_TAX_INTERVIEW_NOT_STARTED = "ROYALTY_TAX_INTERVIEW_NOT_STARTED", e.ROYALTY_TAX_INTERVIEW_PENDING = "ROYALTY_TAX_INTERVIEW_PENDING", e.ROYALTY_TAX_INTERVIEW_ACTION_REQUIRED = "ROYALTY_TAX_INTERVIEW_ACTION_REQUIRED", e.ROYALTY_TAX_INTERVIEW_MISMATCH = "ROYALTY_TAX_INTERVIEW_MISMATCH", e.ROYALTY_TAX_INTERVIEW_FAILED = "ROYALTY_TAX_INTERVIEW_FAILED", e.SERVICE_TAX_INTERVIEW_NOT_STARTED = "SERVICE_TAX_INTERVIEW_NOT_STARTED", e.SERVICE_TAX_INTERVIEW_PENDING = "SERVICE_TAX_INTERVIEW_PENDING", e.SERVICE_TAX_INTERVIEW_ACTION_REQUIRED = "SERVICE_TAX_INTERVIEW_ACTION_REQUIRED", e.SERVICE_TAX_INTERVIEW_MISMATCH = "SERVICE_TAX_INTERVIEW_MISMATCH", e.SERVICE_TAX_INTERVIEW_FAILED = "SERVICE_TAX_INTERVIEW_FAILED", e.PAYOUT_METHOD_NOT_STARTED = "PAYOUT_METHOD_NOT_STARTED", e.PAYOUT_METHOD_PENDING = "PAYOUT_METHOD_PENDING", e.REVIEW_PENDING = "REVIEW_PENDING", e.COMPLETED = "COMPLETED", e.CANCELED = "CANCELED", e.AGREEMENT_PENDING_UPGRADE = "AGREEMENT_PENDING_UPGRADE"
            }(a || (a = {}))
        }
    }
]);