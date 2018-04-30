webpackJsonp([107], {
    "448H": function(e, n) {
        var t = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "ExtensionManager_ExtensionSearch"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "afterCursor"
                        }
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "Cursor"
                        }
                    }
                }, {
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "search"
                        }
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String"
                        }
                    }
                }, {
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "state"
                        }
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "ExtensionStateFilter"
                        }
                    }
                }],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "extensions"
                        },
                        arguments: [{
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "first"
                            },
                            value: {
                                kind: "IntValue",
                                value: "20"
                            }
                        }, {
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "after"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "afterCursor"
                                }
                            }
                        }, {
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "search"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "search"
                                }
                            }
                        }, {
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "state"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "state"
                                }
                            }
                        }],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "pageInfo"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "hasNextPage"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "hasPreviousPage"
                                        },
                                        arguments: [],
                                        directives: []
                                    }]
                                }
                            }, {
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
                                                    value: "authorName"
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
                                                    value: "description"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "iconURL"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "isBitsEnabled"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
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
                                                    value: "privacyPolicyURL"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "screenshotURLs"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "SKU"
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
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "summary"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "supportEmail"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "termsURL"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "vendorCode"
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
                                                    value: "views"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "component"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: {
                                                            kind: "SelectionSet",
                                                            selections: [{
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "viewerURL"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }]
                                                        }
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "hidden"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: {
                                                            kind: "SelectionSet",
                                                            selections: [{
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "viewerURL"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }]
                                                        }
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "mobile"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: {
                                                            kind: "SelectionSet",
                                                            selections: [{
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "viewerURL"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }]
                                                        }
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "panel"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: {
                                                            kind: "SelectionSet",
                                                            selections: [{
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "viewerURL"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }]
                                                        }
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "videoOverlay"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: {
                                                            kind: "SelectionSet",
                                                            selections: [{
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "viewerURL"
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
                end: 528
            }
        };
        t.loc.source = {
            body: "query ExtensionManager_ExtensionSearch($afterCursor: Cursor $search: String $state: ExtensionStateFilter) {\nextensions(first: 20 after: $afterCursor search: $search state: $state) {\npageInfo {\nhasNextPage\nhasPreviousPage\n}\nedges {\ncursor\nnode {\nid\nauthorName\nclientID\ndescription\niconURL\nisBitsEnabled\nname\nprivacyPolicyURL\nscreenshotURLs\nSKU\nstate\nsummary\nsupportEmail\ntermsURL\nvendorCode\nversion\nviews {\ncomponent {\nviewerURL\n}\nhidden {\nviewerURL\n}\nmobile {\nviewerURL\n}\npanel {\nviewerURL\n}\nvideoOverlay {\nviewerURL\n}\n}\n}\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = t
    },
    AI7U: function(e, n) {},
    "D/X5": function(e, n) {},
    MD1s: function(e, n) {
        var t = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "ExtensionManager_ApplyExtensionActivationsInput"
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
                                value: "ApplyExtensionActivationsInput"
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
                            value: "applyExtensionActivations"
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
                                    value: "installedExtensions"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "id"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "activationConfig"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "slot"
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
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "anchor"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "x"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "y"
                                                },
                                                arguments: [],
                                                directives: []
                                            }]
                                        }
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "extension"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "id"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "authorName"
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
                                                    value: "description"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "iconURL"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "isBitsEnabled"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
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
                                                    value: "privacyPolicyURL"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "screenshotURLs"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "SKU"
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
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "summary"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "supportEmail"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "termsURL"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "vendorCode"
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
                                                    value: "views"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "component"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: {
                                                            kind: "SelectionSet",
                                                            selections: [{
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "viewerURL"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }]
                                                        }
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "hidden"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: {
                                                            kind: "SelectionSet",
                                                            selections: [{
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "viewerURL"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }]
                                                        }
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "mobile"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: {
                                                            kind: "SelectionSet",
                                                            selections: [{
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "viewerURL"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }]
                                                        }
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "panel"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: {
                                                            kind: "SelectionSet",
                                                            selections: [{
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "viewerURL"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }]
                                                        }
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "videoOverlay"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: {
                                                            kind: "SelectionSet",
                                                            selections: [{
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "viewerURL"
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
                                            value: "requiredActions"
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
                                                    value: "canActivate"
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
                end: 553
            }
        };
        t.loc.source = {
            body: "mutation ExtensionManager_ApplyExtensionActivationsInput ($input: ApplyExtensionActivationsInput!) {\napplyExtensionActivations(input: $input) {\ninstalledExtensions {\nid\nactivationConfig {\nslot\nstate\nanchor\nx\ny\n}\nextension {\nid\nauthorName\nclientID\ndescription\niconURL\nisBitsEnabled\nname\nprivacyPolicyURL\nscreenshotURLs\nSKU\nstate\nsummary\nsupportEmail\ntermsURL\nvendorCode\nversion\nviews {\ncomponent {\nviewerURL\n}\nhidden {\nviewerURL\n}\nmobile {\nviewerURL\n}\npanel {\nviewerURL\n}\nvideoOverlay {\nviewerURL\n}\n}\n}\nrequiredActions {\ntype\n}\nself {\ncanActivate\n}\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = t
    },
    Mtzm: function(e, n) {
        var t = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "EditPanel_CreatePanel"
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
                                value: "CreatePanelInput"
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
                            value: "createPanel"
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
                                    value: "panel"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "id"
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
                                        kind: "InlineFragment",
                                        typeCondition: {
                                            kind: "NamedType",
                                            name: {
                                                kind: "Name",
                                                value: "ExtensionPanel"
                                            }
                                        },
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "slotID"
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
                end: 143
            }
        };
        t.loc.source = {
            body: "mutation EditPanel_CreatePanel($input: CreatePanelInput!) {\ncreatePanel(input: $input) {\npanel {\nid\ntype\n... on ExtensionPanel {\nslotID\n}\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = t
    },
    Nwhx: function(e, n) {},
    PJs0: function(e, n, t) {
        "use strict";
        var i;
        t.d(n, "a", function() {
                return i
            }),
            function(e) {
                e.Default = "DEFAULT", e.Extension = "EXTENSION"
            }(i || (i = {}))
    },
    Tc6d: function(e, n, t) {
        "use strict";
        t.d(n, "a", function() {
            return i
        });
        var i = 3
    },
    WmaG: function(e, n, t) {
        "use strict";
        var i, a = t("TToO"),
            r = t("GiK3"),
            s = t("6sO2"),
            o = t("+Znq"),
            l = t("RH2O"),
            d = t("PGY2"),
            c = t("vH/s");

        function m(e) {
            s.n.track(c.SpadeEventType.DashboardHelpInteraction, e)
        }! function(e) {
            e.OpenHelp = "open_help", e.LearnMore = "learn_more", e.OpenSendFeedback = "open_send_feedback", e.CancelFeedback = "cancel_feedback", e.SentFeedback = "sent_feedback"
        }(i || (i = {}));
        var u = t("Odds"),
            v = function(e) {
                function n(n) {
                    var t = e.call(this, n) || this;
                    return t.handleCancel = function() {
                        m({
                            action: i.CancelFeedback,
                            location: "dashboard/" + t.props.page
                        }), t.props.onClose()
                    }, t.handleChange = function(e) {
                        t.setState({
                            body: e.currentTarget.value
                        })
                    }, t.sendFeedback = function() {
                        return a.__awaiter(t, void 0, void 0, function() {
                            var e, n;
                            return a.__generator(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        return this.setState({
                                            inFlight: !0,
                                            errorMessage: ""
                                        }), e = "https://api.twitch.tv/kraken/users/" + this.props.currentUserID + "/stats_feedbacks", [4, Object(d.c)({
                                            path: e,
                                            method: "POST",
                                            body: {
                                                message: this.state.body,
                                                page: this.props.page
                                            }
                                        })];
                                    case 1:
                                        return n = t.sent(), m({
                                            action: i.SentFeedback,
                                            location: "dashboard/" + this.props.page
                                        }), n.isError() ? this.setState({
                                            inFlight: !1,
                                            errorMessage: n.error.message
                                        }) : this.setState({
                                            body: "",
                                            inFlight: !1,
                                            errorMessage: "",
                                            successTimeout: setTimeout(this.props.onClose, 2e3)
                                        }), [2]
                                }
                            })
                        })
                    }, t.state = {
                        body: "",
                        inFlight: !1,
                        errorMessage: "",
                        successTimeout: 0
                    }, t
                }
                return a.__extends(n, e), n.prototype.componentWillUnmount = function() {
                    clearTimeout(this.state.successTimeout)
                }, n.prototype.render = function() {
                    return r.createElement(u._8, {
                        padding: 2
                    }, r.createElement(u.W, {
                        label: Object(s.d)("How can we improve this page for you?", "DashboardFeedbackForm"),
                        error: Boolean(this.state.errorMessage.length),
                        errorMessage: this.state.errorMessage
                    }, r.createElement(u._8, {
                        padding: {
                            top: 1
                        }
                    }, r.createElement(u._46, {
                        disabled: this.state.inFlight || this.state.successTimeout > 0,
                        onChange: this.handleChange,
                        placeholder: Object(s.d)("It would help me if this page...", "DashboardFeedbackForm"),
                        rows: 4,
                        noResize: !0
                    }))), r.createElement(u._8, {
                        display: u.R.Flex,
                        flexGrow: 1,
                        flexWrap: u.U.NoWrap,
                        justifyContent: u._7.End,
                        padding: {
                            top: 2
                        }
                    }, r.createElement(u._8, {
                        padding: {
                            right: 1
                        }
                    }, r.createElement(u.v, {
                        onClick: this.handleCancel,
                        type: u.B.Text,
                        "data-test-selector": "feedback-form-cancel"
                    }, Object(s.d)("Cancel", "DashboardFeedbackForm"))), r.createElement(u.v, {
                        disabled: this.state.inFlight || this.state.successTimeout > 0 || 0 === this.state.body.length,
                        onClick: this.sendFeedback,
                        "data-test-selector": "feedback-form-submit"
                    }, this.state.successTimeout > 0 ? Object(s.d)("Sent", "DashboardFeedbackForm") : Object(s.d)("Send Feedback", "DashboardFeedbackForm"))))
                }, n
            }(r.Component);
        var p = Object(l.b)(function(e) {
                return {
                    currentUserID: e.session.user && e.session.user.id || null
                }
            })(v),
            k = (t("Nwhx"), function(e) {
                function n(n) {
                    var t = e.call(this, n) || this;
                    return t.selectFeedbackForm = function() {
                        t.setState({
                            isFeedbackFormSelected: !0
                        }), m({
                            action: i.OpenSendFeedback,
                            location: "dashboard/" + t.props.page
                        })
                    }, t.unselectFeedbackForm = function() {
                        t.setState({
                            isFeedbackFormSelected: !1
                        })
                    }, t.handleLearnMoreClick = function() {
                        m({
                            action: i.LearnMore,
                            location: "dashboard/" + t.props.page
                        })
                    }, t.handleToggle = function(e) {
                        e ? t.setState({
                            isFeedbackFormSelected: !1
                        }) : m({
                            action: i.OpenHelp,
                            location: "dashboard/" + t.props.page
                        })
                    }, t.state = {
                        isFeedbackFormSelected: !1
                    }, t
                }
                return a.__extends(n, e), n.prototype.render = function() {
                    var e;
                    return e = this.state.isFeedbackFormSelected ? r.createElement(p, {
                        page: this.props.page,
                        onClose: this.unselectFeedbackForm,
                        key: 0
                    }) : r.createElement(u._35, {
                        padding: {
                            top: .5,
                            bottom: .5
                        },
                        color: u.K.Base
                    }, r.createElement(u._6, {
                        linkTo: this.props.learnMoreUrl,
                        onClick: this.handleLearnMoreClick,
                        targetBlank: !0
                    }, r.createElement(u._8, {
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, r.createElement(u.Q, null, Object(s.d)("Learn More", "DashboardHelpMenu")))), r.createElement(u._6, {
                        onClick: this.selectFeedbackForm
                    }, r.createElement(u._8, {
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, r.createElement(u.Q, null, Object(s.d)("Send Feedback", "DashboardHelpMenu"))))), r.createElement(u._35, {
                        className: "help-menu",
                        position: u._15.Absolute,
                        margin: {
                            bottom: 2,
                            right: 2
                        },
                        zIndex: u._62.Above,
                        background: u.n.Overlay,
                        elevation: 3,
                        attachBottom: !0,
                        attachRight: !0
                    }, r.createElement(o.a, {
                        onToggle: this.handleToggle,
                        tooltipProps: {
                            align: u._53.Right,
                            direction: u._54.Top,
                            label: Object(s.d)("Help & Feedback", "DashboardHelpMenu"),
                            offsetX: "6px",
                            offsetY: "10px"
                        }
                    }, r.createElement(u.w, {
                        ariaLabel: Object(s.d)("Feedback", "DashboardHelpMenu"),
                        icon: u._25.QuestionMark,
                        "data-a-target": "help-button",
                        overlay: !0
                    }), r.createElement(u.q, {
                        direction: u.r.TopRight,
                        size: this.state.isFeedbackFormSelected ? u.s.Large : u.s.Small,
                        "data-a-target": "help-balloon",
                        offsetX: "6px"
                    }, e)))
                }, n
            }(r.Component));
        t.d(n, "a", function() {
            return k
        })
    },
    deLJ: function(e, n) {
        var t = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "ExtensionManager_ActivateExtension"
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
                                value: "ActivateExtensionInput"
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
                            value: "activateExtension"
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
                                    value: "installedExtensions"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "id"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "activationConfig"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "slot"
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
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "anchor"
                                                },
                                                arguments: [],
                                                directives: []
                                            }]
                                        }
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "extension"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "id"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "authorName"
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
                                                    value: "description"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "iconURL"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "isBitsEnabled"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
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
                                                    value: "privacyPolicyURL"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "screenshotURLs"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "SKU"
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
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "summary"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "supportEmail"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "termsURL"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "vendorCode"
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
                                                    value: "views"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "component"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: {
                                                            kind: "SelectionSet",
                                                            selections: [{
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "viewerURL"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }]
                                                        }
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "hidden"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: {
                                                            kind: "SelectionSet",
                                                            selections: [{
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "viewerURL"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }]
                                                        }
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "mobile"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: {
                                                            kind: "SelectionSet",
                                                            selections: [{
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "viewerURL"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }]
                                                        }
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "panel"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: {
                                                            kind: "SelectionSet",
                                                            selections: [{
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "viewerURL"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }]
                                                        }
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "videoOverlay"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: {
                                                            kind: "SelectionSet",
                                                            selections: [{
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "viewerURL"
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
                                            value: "requiredActions"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "redirectURI"
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
                                                    value: "canActivate"
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
                end: 532
            }
        };
        t.loc.source = {
            body: "mutation ExtensionManager_ActivateExtension ($input: ActivateExtensionInput!) {\nactivateExtension(input: $input) {\ninstalledExtensions {\nid\nactivationConfig {\nslot\nstate\nanchor\n}\nextension {\nid\nauthorName\nclientID\ndescription\niconURL\nisBitsEnabled\nname\nprivacyPolicyURL\nscreenshotURLs\nSKU\nstate\nsummary\nsupportEmail\ntermsURL\nvendorCode\nversion\nviews {\ncomponent {\nviewerURL\n}\nhidden {\nviewerURL\n}\nmobile {\nviewerURL\n}\npanel {\nviewerURL\n}\nvideoOverlay {\nviewerURL\n}\n}\n}\nrequiredActions {\nredirectURI\ntype\n}\nself {\ncanActivate\n}\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = t
    },
    eyrD: function(e, n) {
        var t = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "ExtensionManager_InstalledExtensionList"
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
                                    }]
                                }
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
                                            value: "isExtensionsApprover"
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
                                    value: "installedExtensions"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "id"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "activationConfig"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "slot"
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
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "anchor"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "x"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "y"
                                                },
                                                arguments: [],
                                                directives: []
                                            }]
                                        }
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "extension"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "id"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "authorName"
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
                                                    value: "description"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "iconURL"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "isBitsEnabled"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
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
                                                    value: "privacyPolicyURL"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "screenshotURLs"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "SKU"
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
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "summary"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "supportEmail"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "termsURL"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "vendorCode"
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
                                                    value: "views"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "component"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: {
                                                            kind: "SelectionSet",
                                                            selections: [{
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "viewerURL"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "aspectWidth"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "aspectHeight"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "hasZoom"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "zoomPixels"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }]
                                                        }
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "hidden"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: {
                                                            kind: "SelectionSet",
                                                            selections: [{
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "viewerURL"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }]
                                                        }
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "mobile"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: {
                                                            kind: "SelectionSet",
                                                            selections: [{
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "viewerURL"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }]
                                                        }
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "panel"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: {
                                                            kind: "SelectionSet",
                                                            selections: [{
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "viewerURL"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }]
                                                        }
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "videoOverlay"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: {
                                                            kind: "SelectionSet",
                                                            selections: [{
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "viewerURL"
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
                                            value: "requiredActions"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "redirectURI"
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
                                                    value: "canActivate"
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
                                    value: "panels"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "id"
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
                                        kind: "InlineFragment",
                                        typeCondition: {
                                            kind: "NamedType",
                                            name: {
                                                kind: "Name",
                                                value: "ExtensionPanel"
                                            }
                                        },
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "slotID"
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
                end: 670
            }
        };
        t.loc.source = {
            body: "query ExtensionManager_InstalledExtensionList {\ncurrentUser {\nid\ncheer {\nid\n}\nroles {\nisAffiliate\nisPartner\nisExtensionsApprover\nisExtensionsDeveloper\n}\ninstalledExtensions {\nid\nactivationConfig {\nslot\nstate\nanchor\nx\ny\n}\nextension {\nid\nauthorName\nclientID\ndescription\niconURL\nisBitsEnabled\nname\nprivacyPolicyURL\nscreenshotURLs\nSKU\nstate\nsummary\nsupportEmail\ntermsURL\nvendorCode\nversion\nviews {\ncomponent {\nviewerURL\naspectWidth\naspectHeight\nhasZoom\nzoomPixels\n}\nhidden {\nviewerURL\n}\nmobile {\nviewerURL\n}\npanel {\nviewerURL\n}\nvideoOverlay {\nviewerURL\n}\n}\n}\nrequiredActions {\nredirectURI\ntype\n}\nself {\ncanActivate\n}\n}\npanels {\nid\ntype\n... on ExtensionPanel {\nslotID\n}\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = t
    },
    hd33: function(e, n) {
        var t = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "ExtensionManager_DeactivateExtension"
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
                                value: "DeactivateExtensionInput"
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
                            value: "deactivateExtension"
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
                                    value: "installedExtension"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "id"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "activationConfig"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "slot"
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
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "anchor"
                                                },
                                                arguments: [],
                                                directives: []
                                            }]
                                        }
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "extension"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "id"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "authorName"
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
                                                    value: "description"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "iconURL"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "isBitsEnabled"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
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
                                                    value: "privacyPolicyURL"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "screenshotURLs"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "SKU"
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
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "summary"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "supportEmail"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "termsURL"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "vendorCode"
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
                                                    value: "views"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "component"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: {
                                                            kind: "SelectionSet",
                                                            selections: [{
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "viewerURL"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }]
                                                        }
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "hidden"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: {
                                                            kind: "SelectionSet",
                                                            selections: [{
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "viewerURL"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }]
                                                        }
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "mobile"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: {
                                                            kind: "SelectionSet",
                                                            selections: [{
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "viewerURL"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }]
                                                        }
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "panel"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: {
                                                            kind: "SelectionSet",
                                                            selections: [{
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "viewerURL"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }]
                                                        }
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "videoOverlay"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: {
                                                            kind: "SelectionSet",
                                                            selections: [{
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "viewerURL"
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
                                            value: "requiredActions"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "redirectURI"
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
                                                    value: "canActivate"
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
                end: 537
            }
        };
        t.loc.source = {
            body: "mutation ExtensionManager_DeactivateExtension ($input: DeactivateExtensionInput!) {\ndeactivateExtension(input: $input) {\ninstalledExtension {\nid\nactivationConfig {\nslot\nstate\nanchor\n}\nextension {\nid\nauthorName\nclientID\ndescription\niconURL\nisBitsEnabled\nname\nprivacyPolicyURL\nscreenshotURLs\nSKU\nstate\nsummary\nsupportEmail\ntermsURL\nvendorCode\nversion\nviews {\ncomponent {\nviewerURL\n}\nhidden {\nviewerURL\n}\nmobile {\nviewerURL\n}\npanel {\nviewerURL\n}\nvideoOverlay {\nviewerURL\n}\n}\n}\nrequiredActions {\nredirectURI\ntype\n}\nself {\ncanActivate\n}\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = t
    },
    yJuJ: function(e, n, t) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var i = t("TToO"),
            a = t("RH2O"),
            r = t("2KeS"),
            s = t("V5M+"),
            o = t("Aj/L"),
            l = t("GiK3"),
            d = t("+8VM"),
            c = t("sfWM"),
            m = t("6sO2"),
            u = t("Odds"),
            v = function(e) {
                var n = e.activations,
                    t = e.onConfirm;
                return l.createElement(u._8, null, l.createElement(u.Q, {
                    type: u._49.H5
                }, Object(m.d)("{count, plural, one {Extension is now Active!} other {Extensions are now Active!}}", {
                    count: n.length
                }, "ExtensionActivatedModal")), l.createElement(u._35, {
                    borderTop: !0,
                    borderBottom: !0,
                    padding: {
                        y: 1
                    },
                    margin: {
                        y: 1
                    }
                }, n.map(function(e) {
                    var n = e.extensionName,
                        t = e.slot;
                    return l.createElement(u.Q, {
                        key: t
                    }, Object(m.d)("The extension {extensionName} is now active on slot {anchorSlot}", {
                        extensionName: l.createElement(u.Q, {
                            bold: !0,
                            type: u._49.Span
                        }, n),
                        anchorSlot: l.createElement(u.Q, {
                            bold: !0,
                            type: u._49.Span,
                            transform: u._48.Uppercase
                        }, t)
                    }, "ExtensionActivatedModal"))
                })), l.createElement(u._8, {
                    display: u.R.Flex,
                    justifyContent: u._7.Center
                }, l.createElement(u.v, {
                    onClick: t
                }, Object(m.d)("Done", "ExtensionActivatedModal"))))
            };
        v.displayName = "ExtensionActivatedModalPresentation";
        var p = function(e) {
            function n() {
                return null !== e && e.apply(this, arguments) || this
            }
            return i.__extends(n, e), n.prototype.render = function() {
                return l.createElement(c.a, null, l.createElement(v, {
                    activations: this.props.activations,
                    onConfirm: this.props.closeModal
                }), l.createElement(d.a, {
                    closeOnBackdropClick: !0
                }))
            }, n
        }(l.Component);
        var k = Object(a.b)(null, function(e) {
                return Object(r.b)({
                    closeModal: s.c
                }, e)
            })(p),
            g = t("BwgW"),
            h = 768,
            E = 432,
            b = function(e) {
                function n(n) {
                    var t = e.call(this, n) || this;
                    t.renderPositionPreview = function() {
                        var e = t.state.currentActivationSettings,
                            n = t.getSlotListSorted().map(function(n) {
                                var t = e[n],
                                    i = t.installation,
                                    a = i.extension.views.component,
                                    r = Object(g.getComponentSizeFromView)(h, E, {
                                        aspectHeight: a.aspectHeight,
                                        aspectWidth: a.aspectWidth,
                                        zoom: a.hasZoom,
                                        zoomPixels: a.zoomPixels || g.DefaultZoomPixelWidth
                                    }),
                                    s = Object(g.getComponentPositionFromView)(h, E, {
                                        x: 100 * t.x,
                                        y: 100 * t.y
                                    }),
                                    o = {
                                        top: s.y + "px",
                                        left: s.x + "px",
                                        height: r.height + "px",
                                        width: r.width + "px"
                                    };
                                return l.createElement("div", {
                                    key: i.id,
                                    className: "extension-component-preview",
                                    style: o
                                })
                            });
                        return l.createElement(u._2, {
                            position: u._15.Relative
                        }, l.createElement("div", {
                            className: "extension-component-player-preview",
                            style: {
                                width: h,
                                height: E
                            }
                        }, n))
                    }, t.renderCoordinateInputs = function() {
                        var e = t.state.currentActivationSettings;
                        return t.getSlotListSorted().map(function(n) {
                            var i = e[n],
                                a = i.installation.extension.views.component,
                                r = t.getComponentMaxCoordinates(a),
                                s = r.maxX,
                                o = r.maxY;
                            return l.createElement(u._8, {
                                key: n
                            }, l.createElement(u._8, {
                                padding: 1
                            }, l.createElement(u.Q, {
                                bold: !0
                            }, n, " : ", i.installation.extension.name)), l.createElement(u._8, {
                                padding: 1
                            }, l.createElement(u.W, {
                                label: "X",
                                orientation: u.X.Horizontal
                            }, l.createElement(u._4, {
                                type: u._5.Number,
                                value: i.x.toString(),
                                min: 0,
                                max: s,
                                step: .01,
                                onChange: t.onCoordinateChange,
                                "data-coordinate": "x",
                                "data-slot": n,
                                name: n + ":x"
                            }))), l.createElement(u._8, {
                                padding: 1
                            }, l.createElement(u.W, {
                                label: "Y",
                                orientation: u.X.Horizontal
                            }, l.createElement(u._4, {
                                type: u._5.Number,
                                value: i.y.toString(),
                                min: 0,
                                max: o,
                                step: .01,
                                onChange: t.onCoordinateChange,
                                "data-coordinate": "y",
                                "data-slot": n,
                                name: n + ":y"
                            }))))
                        })
                    }, t.activateComponentsWithCurrentSettings = function() {
                        var e = t.state.currentActivationSettings,
                            n = t.getSlotListSorted().map(function(n) {
                                var t = e[n];
                                return {
                                    installationID: t.installation.id,
                                    component: {
                                        slot: n,
                                        x: 100 * t.x,
                                        y: 100 * t.y
                                    }
                                }
                            });
                        t.props.onConfirm(n)
                    }, t.onCoordinateChange = function(e) {
                        var n = e.target.value,
                            a = e.currentTarget.name.split(":"),
                            r = a[0],
                            s = a[1];
                        if (r && s) {
                            var o = parseFloat(n) || 0,
                                l = i.__assign({}, t.state.currentActivationSettings[r]),
                                d = l.installation.extension.views.component;
                            if ("x" === s) {
                                var c = t.getComponentMaxCoordinates(d).maxX,
                                    m = Math.max(0, Math.min(o, c));
                                l.x = m
                            } else if ("y" === s) {
                                var u = t.getComponentMaxCoordinates(d).maxY;
                                m = Math.max(0, Math.min(o, u));
                                l.y = m
                            }
                            var v, p = i.__assign({}, t.state.currentActivationSettings, ((v = {})[r] = l, v));
                            t.setState({
                                currentActivationSettings: p
                            })
                        }
                    };
                    var a = n.installationToActivate,
                        r = n.activatedComponentExtensions,
                        s = n.slot,
                        o = r.reduce(function(e, n) {
                            var t = n.activationConfig;
                            return n.id === a.id ? e : (e[t.slot] = {
                                installation: n,
                                x: t.x / 100,
                                y: t.y / 100
                            }, e)
                        }, {}) || {};
                    return o[s] = {
                        installation: a,
                        x: 0,
                        y: 0
                    }, t.state = {
                        currentActivationSettings: o
                    }, t
                }
                return i.__extends(n, e), n.prototype.render = function() {
                    var e = this.props.onCancel;
                    return l.createElement(u._8, null, l.createElement(u.Q, {
                        type: u._49.H5
                    }, Object(m.d)("Activate a Component Extension", "ExtensionComponentActivateModal")), l.createElement(u._35, {
                        borderTop: !0,
                        padding: {
                            y: 1
                        },
                        margin: {
                            y: 1
                        }
                    }, this.renderPositionPreview()), l.createElement(u._35, {
                        borderTop: !0,
                        borderBottom: !0,
                        padding: {
                            y: 1
                        },
                        margin: {
                            y: 1
                        },
                        display: u.R.Flex,
                        flexDirection: u.T.Row
                    }, this.renderCoordinateInputs()), l.createElement(u._8, {
                        display: u.R.Flex,
                        justifyContent: u._7.Center
                    }, l.createElement(u._8, {
                        padding: {
                            right: 1
                        }
                    }, l.createElement(u.v, {
                        type: u.B.Hollow,
                        onClick: e
                    }, Object(m.d)("Cancel", "ExtensionComponentActivateModal"))), l.createElement(u.v, {
                        onClick: this.activateComponentsWithCurrentSettings
                    }, Object(m.d)("Activate", "ExtensionComponentActivateModal"))))
                }, n.prototype.getComponentMaxCoordinates = function(e) {
                    return {
                        maxX: 100 - e.aspectWidth / 100,
                        maxY: 100 - e.aspectHeight / 100
                    }
                }, n.prototype.getSlotListSorted = function() {
                    return Object.keys(this.state.currentActivationSettings).sort()
                }, n
            }(l.Component),
            x = function(e) {
                function n() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(n, e), n.prototype.render = function() {
                    return l.createElement(c.a, {
                        className: "extension-manager-modal-container--expand"
                    }, l.createElement(b, {
                        installationToActivate: this.props.installationToActivate,
                        activatedComponentExtensions: this.props.activatedComponentExtensions,
                        slot: this.props.slot,
                        onConfirm: this.props.activateExtensions,
                        onCancel: this.props.closeModal
                    }), l.createElement(d.a, {
                        closeOnBackdropClick: !0
                    }))
                }, n
            }(l.Component);
        var f = Object(a.b)(null, function(e) {
                return Object(r.b)({
                    closeModal: s.c
                }, e)
            })(x),
            y = function(e) {
                var n = e.extensionName,
                    t = e.onCancel,
                    i = e.onConfirm;
                return l.createElement(u._8, null, l.createElement(u.Q, {
                    type: u._49.H5
                }, Object(m.d)("Are you sure you want to deactivate?", "ExtensionDeactivateMonetizedModal")), l.createElement(u._35, {
                    borderTop: !0,
                    borderBottom: !0,
                    padding: {
                        y: 1
                    },
                    margin: {
                        y: 1
                    }
                }, l.createElement(u.Q, null, Object(m.d)("You are deactivating {extensionName} ", {
                    extensionName: l.createElement(u.Q, {
                        bold: !0,
                        type: u._49.P
                    }, n)
                }, "ExtensionDeactivateMonetizedModal")), l.createElement(u._8, {
                    padding: {
                        top: 1
                    }
                }, l.createElement(u.Q, {
                    type: u._49.P
                }, Object(m.d)("This extension enables in-extension purchases. If you deactivate this extension, your viewers may not be able to enjoy items they purchased through the extension on your channel unless you reactivate it. Are you sure you want to deactivate?", "ExtensionDeactivateMonetizedModal")))), l.createElement(u._8, {
                    display: u.R.Flex,
                    justifyContent: u._7.Center
                }, l.createElement(u._8, {
                    padding: {
                        right: 1
                    }
                }, l.createElement(u.v, {
                    type: u.B.Hollow,
                    onClick: t
                }, Object(m.d)("Cancel", "ExtensionDeactivateMonetizedModal"))), l.createElement(u.v, {
                    onClick: i
                }, Object(m.d)("Deactivate", "ExtensionDeactivateMonetizedModal"))))
            };
        y.displayName = "ExtensionDeactivateMonetizedModalPresentation";
        var S = function(e) {
            function n() {
                var n = null !== e && e.apply(this, arguments) || this;
                return n.onConfirm = function() {
                    return i.__awaiter(n, void 0, void 0, function() {
                        return i.__generator(this, function(e) {
                            switch (e.label) {
                                case 0:
                                    return [4, this.props.onConfirm(this.props.monetizedInstallation)];
                                case 1:
                                    return e.sent(), this.props.closeModal(), [2]
                            }
                        })
                    })
                }, n
            }
            return i.__extends(n, e), n.prototype.render = function() {
                return l.createElement(c.a, null, l.createElement(y, {
                    extensionName: this.props.monetizedInstallation.extension.name,
                    onCancel: this.props.closeModal,
                    onConfirm: this.onConfirm
                }), l.createElement(d.a, {
                    closeOnBackdropClick: !0
                }))
            }, n
        }(l.Component);
        var N = Object(a.b)(null, function(e) {
                return Object(r.b)({
                    closeModal: s.c
                }, e)
            })(S),
            _ = t("9Gfr"),
            F = t("SfDx"),
            C = function(e) {
                var n = e.existingExtensionName,
                    t = e.activationSlot,
                    i = e.isExistingExtensionMonetized,
                    a = e.onCancel,
                    r = e.onConfirm;
                return l.createElement(u._8, null, l.createElement(u.Q, {
                    type: u._49.H5
                }, Object(m.d)("You are replacing an active extension", "ExtensionReplacementModal")), l.createElement(u._35, {
                    borderTop: !0,
                    borderBottom: !0,
                    padding: {
                        y: 1
                    },
                    margin: {
                        y: 1
                    }
                }, l.createElement(u.Q, null, Object(m.d)("Performing this action will cause the following extension to be deactivated", "ExtensionReplacementModal")), l.createElement(u._8, {
                    margin: {
                        y: 1
                    }
                }, l.createElement(u.Q, null, Object(m.d)("{extensionName} on {anchorSlot}", {
                    extensionName: l.createElement(u.Q, {
                        bold: !0,
                        type: u._49.Span
                    }, n),
                    anchorSlot: l.createElement(u.Q, {
                        bold: !0,
                        type: u._49.Span,
                        transform: u._48.Uppercase
                    }, t)
                }, "ExtensionReplacementModal"))), l.createElement(u.Q, {
                    type: u._49.P
                }, i ? Object(m.d)("This extension enables in-extension purchases. If you replace this extension, your viewers may not be able to enjoy items they purchased through the extension on your channel unless you reactivate it. Are you sure you want to proceed?", "ExtensionReplacementModal") : Object(m.d)("Are you sure you want to proceed?", "ExtensionReplacementModal"))), l.createElement(u._8, {
                    display: u.R.Flex,
                    justifyContent: u._7.Center
                }, l.createElement(u._8, {
                    padding: {
                        right: 1
                    }
                }, l.createElement(u.v, {
                    type: u.B.Hollow,
                    onClick: a
                }, Object(m.d)("Cancel", "ExtensionReplacementModal"))), l.createElement(u.v, {
                    onClick: r
                }, Object(m.d)("Replace", "ExtensionReplacementModal"))))
            };
        C.displayName = "ExtensionReplacementModalPresentation";
        var A = function(e) {
            function n() {
                var n = null !== e && e.apply(this, arguments) || this;
                return n.onConfirm = function() {
                    n.props.onConfirm(n.props.replacementExtension, n.props.activationSlot, n.props.activationAnchor), n.props.closeModal()
                }, n
            }
            return i.__extends(n, e), n.prototype.render = function() {
                return l.createElement(c.a, null, l.createElement(C, {
                    existingExtensionName: this.props.existingExtensionName,
                    isExistingExtensionMonetized: this.props.isExistingExtensionMonetized,
                    activationSlot: this.props.activationSlot,
                    onCancel: this.props.closeModal,
                    onConfirm: this.onConfirm
                }), l.createElement(d.a, {
                    closeOnBackdropClick: !0
                }))
            }, n
        }(l.Component);
        var w = Object(a.b)(null, function(e) {
                return Object(r.b)({
                    closeModal: s.c
                }, e)
            })(A),
            O = t("FF3k"),
            R = t("3zLD"),
            D = t("CIox"),
            L = t("N221"),
            U = t("7vx8"),
            M = t("j7/Y"),
            j = t("oIkB"),
            I = t("w9tK"),
            P = t("vH/s"),
            T = t("G8hb"),
            B = t("XwK1"),
            Q = t("GeUc"),
            z = t("q7Ag"),
            W = t("CSlQ"),
            H = t("PJs0"),
            V = t("WmaG"),
            K = t("zCIC"),
            q = t("F8kA"),
            G = t("+Znq"),
            Y = t("nP5L"),
            $ = t("VHHT"),
            X = function(e) {
                return e.anchorType ? l.createElement(u._12, {
                    label: Object(Y.a)(e.anchorType, !0)
                }) : e.mobile ? l.createElement(u._12, {
                    label: Object($.a)(g.ExtensionPlatform.Mobile, !0)
                }) : null
            };
        X.displayName = "AnchorPill";
        var J = function(e) {
            var n;
            switch (e.state) {
                case T.c.InTest:
                    n = Object(m.d)("TESTING", "ExtensionStatusPill");
                    break;
                case T.c.ReadyForReview:
                    n = Object(m.d)("READY FOR REVIEW", "ExtensionStatusPill");
                    break;
                case T.c.InReview:
                    n = Object(m.d)("IN REVIEW", "ExtensionStatusPill");
                    break;
                case T.c.Rejected:
                    n = Object(m.d)("REJECTED", "ExtensionStatusPill");
                    break;
                case T.c.Approved:
                    n = Object(m.d)("APPROVED", "ExtensionStatusPill");
                    break;
                case T.c.Deprecated:
                    n = Object(m.d)("DEPRECATED", "ExtensionStatusPill");
                    break;
                case T.c.PendingAction:
                    n = Object(m.d)("PENDING DEVELOPER ACTION", "ExtensionStatusPill");
                    break;
                case T.c.Uploading:
                    n = Object(m.d)("UPLOAD IN PROGRESS", "ExtensionStatusPill");
                    break;
                case T.c.AssetsUploaded:
                    n = Object(m.d)("ASSETS UPLOADED", "ExtensionStatusPill");
                    break;
                default:
                    n = ""
            }
            return l.createElement(u._12, {
                type: u._13.Brand,
                label: n
            })
        };
        J.displayName = "ExtensionStatusPill";
        t("AI7U");
        var Z = function(e) {
                function n() {
                    var n = null !== e && e.apply(this, arguments) || this;
                    return n.state = {
                        hasCardImageError: !1
                    }, n.renderAnchorTypePills = function() {
                        var e = n.props.extension,
                            t = Object(T.e)(e).map(function(e) {
                                return l.createElement(u._8, {
                                    key: e,
                                    display: u.R.InlineBlock,
                                    padding: {
                                        right: .5
                                    }
                                }, l.createElement(X, {
                                    anchorType: e
                                }))
                            });
                        return Object(T.f)(e).includes(g.ExtensionPlatform.Mobile) && t.push(l.createElement(u._8, {
                            key: "mobile",
                            display: u.R.InlineBlock,
                            padding: {
                                right: .5
                            }
                        }, l.createElement(X, {
                            mobile: !0
                        }))), t
                    }, n.renderMonetizableMessage = function() {
                        var e = Object(m.d)("In-Extension Purchases", "AvailableExtensionCard");
                        return l.createElement(u._8, {
                            textAlign: u._45.Center
                        }, l.createElement(G.a, null, l.createElement("a", null, e), l.createElement(u.q, {
                            direction: u.r.LeftCenter,
                            size: u.s.Large
                        }, l.createElement(u._8, {
                            padding: 1,
                            textAlign: u._45.Left
                        }, l.createElement(u.Q, {
                            type: u._49.H4
                        }, e), l.createElement(u._8, {
                            padding: {
                                top: .5
                            }
                        }, l.createElement(u.Q, {
                            type: u._49.P
                        }, Object(m.d)("This extension enables the sale of digital goods. You may be eligible for a revenue share.", "AvailableExtensionCard"), l.createElement(u._2, {
                            padding: {
                                x: .5
                            }
                        }, l.createElement("a", {
                            rel: "noopener",
                            target: "_blank",
                            href: "https://help.twitch.tv/customer/portal/articles/2901058-earning-revenue-from-in-extension-purchases-beta"
                        }, n.learnMoreMessage()))))))))
                    }, n.renderBitsMessage = function() {
                        var e = Object(m.d)("In-Extension Bits", "AvailableExtensionCard");
                        return l.createElement(u._8, {
                            textAlign: u._45.Center
                        }, l.createElement(G.a, null, l.createElement("a", null, e), l.createElement(u.q, {
                            direction: u.r.LeftCenter,
                            size: u.s.Large
                        }, l.createElement(u._8, {
                            padding: 1,
                            textAlign: u._45.Left
                        }, l.createElement(u._8, {
                            display: u.R.Flex,
                            alignItems: u.c.Center
                        }, l.createElement(u._24, {
                            asset: u._25.Bits
                        }), l.createElement(u._8, {
                            display: u.R.InlineBlock,
                            padding: {
                                left: .5
                            }
                        }, l.createElement(u.Q, {
                            type: u._49.H4
                        }, e))), l.createElement(u._8, {
                            padding: {
                                top: .5
                            }
                        }, l.createElement(u.Q, {
                            type: u._49.P
                        }, Object(m.d)("This extension enables the use of Bits. For each eligible use of Bits in this extension, subject to Twitch’s legal terms and policies, the extension developer and the streamer will receive 20% and 80%, respectively, of 1 U.S. cent per Bit. You as a streamer may be eligible for a revenue share if you are a partner or an affiliate.", "AvailableExtensionCard"), l.createElement(u._8, null, l.createElement("a", {
                            rel: "noopener",
                            target: "_blank",
                            href: "https://help.twitch.tv/customer/portal/articles/2927987-earning-revenue-from-in-extension-bits-beta"
                        }, n.learnMoreMessage()))))))))
                    }, n.learnMoreMessage = function() {
                        return Object(m.d)("Learn More.", "AvailableExtensionCard")
                    }, n.onInstall = function() {
                        n.props.onInstall(n.props.extension)
                    }, n.onCardImageError = function() {
                        n.setState({
                            hasCardImageError: !0
                        })
                    }, n
                }
                return i.__extends(n, e), n.prototype.render = function() {
                    var e, n = this.props,
                        t = n.isInstalled,
                        i = n.isChannelCheeringEnabled,
                        a = n.extension,
                        r = Object(m.d)("Install", "AvailableExtensionCard");
                    if (a.state === T.c.Released && a.isBitsEnabled && !i) {
                        var s = Object(m.d)("This extension can only be used by Partner or Affiliate channels that have Bits enabled.", "AvailableExtensionCard");
                        e = l.createElement(u._52, {
                            label: s,
                            direction: u._54.Left
                        }, l.createElement(u.v, {
                            onClick: this.onInstall,
                            disabled: !0
                        }, r))
                    } else e = l.createElement(u.v, {
                        onClick: this.onInstall
                    }, r);
                    return l.createElement(u._35, {
                        display: u.R.Flex,
                        flexWrap: u.U.NoWrap,
                        justifyContent: u._7.Between,
                        background: u.n.Base,
                        padding: {
                            left: 1
                        },
                        flexGrow: 1,
                        border: !0
                    }, l.createElement(u.C, {
                        row: !0,
                        border: !1
                    }, l.createElement(u.E, {
                        alt: a.name,
                        src: this.state.hasCardImageError ? m.a.defaultAvatarURL : a.iconURL,
                        aspect: u.l.Aspect1x1,
                        size: u.F.Size6,
                        onError: this.onCardImageError
                    }), l.createElement(u.D, null, l.createElement(u._8, {
                        padding: 1
                    }, l.createElement(u.Q, {
                        type: u._49.H4
                    }, a.name), l.createElement(u.Q, {
                        type: u._49.Span,
                        color: u.K.Alt2
                    }, a.authorName), l.createElement(u.Q, {
                        type: u._49.P
                    }, a.summary), this.renderAnchorTypePills(), a.state !== T.c.Released && l.createElement(J, {
                        state: a.state
                    })))), l.createElement(u._35, {
                        borderLeft: !0,
                        display: u.R.Flex,
                        alignItems: u.c.Center,
                        justifyContent: u._7.Center,
                        flexGrow: 0,
                        flexShrink: 0,
                        margin: {
                            y: 1
                        }
                    }, l.createElement(u._8, {
                        className: "available-extension-card__buttons"
                    }, l.createElement(u._8, {
                        display: u.R.Flex,
                        flexWrap: u.U.NoWrap,
                        justifyContent: u._7.Center,
                        padding: {
                            x: 2,
                            y: 1
                        }
                    }, l.createElement(q.a, {
                        to: Object(z.c)(a)
                    }, l.createElement(u.v, {
                        type: u.B.Hollow
                    }, Object(m.d)("Details", "AvailableExtensionCard"))), l.createElement(u._8, {
                        padding: {
                            left: 1
                        }
                    }, t ? l.createElement(u.v, {
                        disabled: !0
                    }, Object(m.d)("Installed", "AvailableExtensionCard")) : e)), a.isBitsEnabled && this.renderBitsMessage(), Object(T.g)(a) && this.renderMonetizableMessage())))
                }, n
            }(l.Component),
            ee = function(e) {
                function n() {
                    var n = null !== e && e.apply(this, arguments) || this;
                    return n.onSearchInputChange = function(e) {
                        var t = e.target.value;
                        n.props.searchQuery !== t && n.props.onSearchQueryChange(t)
                    }, n.onReleasedCheckboxChange = function(e) {
                        var t = e.target.checked;
                        n.props.showReleasedOnly !== t && n.props.onShowReleasedOnlyChange(t)
                    }, n
                }
                return i.__extends(n, e), n.prototype.render = function() {
                    var e = this.props,
                        n = e.canLoadMore,
                        t = e.displayShowReleasedOnlyCheckbox,
                        i = e.extensions,
                        a = e.installedExtensions,
                        r = e.isChannelCheeringEnabled,
                        s = e.isLoading,
                        o = e.loadMore,
                        d = e.onInstall,
                        c = e.searchQuery,
                        v = e.showReleasedOnly;
                    return l.createElement(u._35, {
                        border: !0,
                        background: u.n.Alt,
                        padding: 1,
                        fullWidth: !0
                    }, l.createElement(u._8, {
                        display: u.R.Flex,
                        flexWrap: u.U.Wrap
                    }, l.createElement(u._8, {
                        display: u.R.Flex,
                        justifyContent: u._7.Between,
                        alignItems: u.c.Baseline,
                        flexGrow: 4,
                        padding: {
                            bottom: .5,
                            right: 1
                        }
                    }, l.createElement(u._8, {
                        display: u.R.Flex,
                        alignItems: u.c.Baseline,
                        flexWrap: u.U.NoWrap,
                        padding: {
                            right: 1
                        }
                    }, l.createElement(u._8, {
                        padding: {
                            right: 1
                        }
                    }, l.createElement(u.Q, {
                        type: u._49.H4,
                        noWrap: !0
                    }, Object(m.d)("Available Extensions", "AvailableExtensionList"))), l.createElement(u.Q, {
                        type: u._49.Span,
                        color: u.K.Alt2,
                        noWrap: !0
                    }, Object(m.d)("(Sorted by Popularity)", "AvailableExtensionList"))), t && l.createElement(u.J, {
                        label: Object(m.d)("Show only released", "AvailableExtensionList"),
                        onChange: this.onReleasedCheckboxChange,
                        checked: v
                    })), l.createElement(u._8, {
                        flexGrow: 1
                    }, l.createElement(u._27, {
                        placeholder: Object(m.d)("Filter extensions", "AvailableExtensionList"),
                        value: this.props.searchQuery,
                        onChange: this.onSearchInputChange
                    }))), l.createElement(u._8, {
                        padding: {
                            top: 1
                        },
                        fullWidth: !0
                    }, i.map(function(e) {
                        var n = void 0 !== a.find(function(n) {
                            return n.extension.id === e.id
                        });
                        return l.createElement(u._8, {
                            key: e.id + e.version,
                            padding: {
                                bottom: 1
                            }
                        }, l.createElement(Z, {
                            isInstalled: n,
                            extension: e,
                            isChannelCheeringEnabled: r,
                            onInstall: d
                        }))
                    }), l.createElement(K.a, {
                        key: c + v,
                        pixelThreshold: 200,
                        enabled: n(),
                        loadMore: o
                    }), !s && 0 === i.length && l.createElement(u.Q, {
                        type: u._49.P
                    }, Object(m.d)("No extensions are available to install.", "AvailableExtensionList"))))
                }, n
            }(l.Component),
            ne = function(e) {
                function n(n) {
                    var t = e.call(this, n) || this;
                    return t.onDismiss = function() {
                        t.setState(function(e) {
                            return i.__assign({}, e, {
                                dismissed: !0
                            })
                        }, function() {
                            m.l.set(t.props.dismissedStorageKey, !0)
                        })
                    }, t.state = {
                        dismissed: m.l.get(n.dismissedStorageKey, !1),
                        enabled: m.b.get(n.enabledDynamicKey, !1)
                    }, t
                }
                return i.__extends(n, e), n.prototype.render = function() {
                    return this.state.enabled ? this.state.dismissed ? null : l.createElement(u._35, {
                        alignItems: u.c.Center,
                        "data-test-selector": "announcement-banner",
                        display: u.R.Flex,
                        flexDirection: u.T.Column,
                        justifyContent: u._7.Around,
                        background: u.n.Base,
                        padding: 1,
                        position: u._15.Relative,
                        margin: {
                            top: .5
                        },
                        border: !0
                    }, l.createElement(u._8, {
                        position: u._15.Absolute,
                        attachTop: !0,
                        attachRight: !0
                    }, l.createElement(u.w, {
                        ariaLabel: "close",
                        "data-test-selector": "announcement-banner-dismiss",
                        icon: u._25.Close,
                        onClick: this.onDismiss
                    })), this.props.children) : null
                }, n
            }(l.Component),
            te = function() {
                return l.createElement(ne, {
                    dismissedStorageKey: "extensions_dashboard_bits_banner_dismissed",
                    enabledDynamicKey: "extensions_bits_banner_enabled"
                }, l.createElement(u.Q, {
                    fontSize: u.V.Size5,
                    type: u._49.P
                }, Object(m.d)("Your viewers can now use Bits in Extensions to power amazing new experiences on Twitch. Use Bits-enabled Extensions to keep your audience engaged and grow your revenue.", "BitsAnnouncementBanner"), " ", l.createElement("a", {
                    target: "_blank",
                    rel: "noopener",
                    href: "https://blog.twitch.tv/bits-in-extensions-a036151cc309"
                }, Object(m.d)("Learn more.", "BitsAnnouncementBanner"))))
            };
        te.displayName = "BitsAnnouncementBanner";
        var ie = t("Tc6d"),
            ae = function(e) {
                function n() {
                    var n = null !== e && e.apply(this, arguments) || this;
                    return n.renderAnchorOptions = function() {
                        var e = n.props,
                            t = e.installedExtension,
                            i = e.availableSlots,
                            a = Object(T.e)(n.props.installedExtension.extension),
                            r = [];
                        if (a.includes(T.b.Component)) {
                            var s = n.renderComponentAnchorOptions(i);
                            s.length && r.push(s)
                        }
                        if (a.includes(T.b.VideoOverlay)) {
                            var o = n.renderOverlayAnchorOptions(i);
                            o.length && r.push(o)
                        }
                        if (a.includes(T.b.Panel)) {
                            var d = n.renderPanelAnchorOptions(i);
                            d.length && r.push(d)
                        }
                        return t.activationConfig.state === T.a.Active && r.push(n.renderDeactivate()), r.reduce(function(e, n, t) {
                            var i = l.createElement(u._35, {
                                key: t,
                                borderTop: !0,
                                margin: {
                                    top: .5
                                },
                                padding: {
                                    top: .5
                                }
                            });
                            return 0 === e.length ? [n] : e.concat([i, n])
                        }, [])
                    }, n.renderActivePresence = function(e) {
                        return l.createElement(u._8, {
                            display: u.R.Flex,
                            flexWrap: u.U.NoWrap,
                            alignItems: u.c.Center
                        }, l.createElement(u._16, {
                            status: u._17.Online
                        }), l.createElement(u._8, {
                            padding: {
                                left: 1
                            }
                        }, Object(m.d)("Active {slot}", {
                            slot: e.toUpperCase()
                        }, "ActivateExtensionDropdown")))
                    }, n.renderDeactivate = function() {
                        return l.createElement(u._6, {
                            key: "deactivate",
                            blurAfterClick: !0,
                            onClick: n.onDeactivate
                        }, l.createElement(u._8, {
                            padding: {
                                x: 1,
                                y: .5
                            }
                        }, Object(m.d)("Deactivate", "ActivateExtensionDropdown")))
                    }, n.renderComponentAnchorOptions = function(e) {
                        return e.components.reduce(function(e, t) {
                            var i = n.renderSetAnchorLocationInteractable(t, T.b.Component);
                            return i && e.push(i), e
                        }, [])
                    }, n.renderOverlayAnchorOptions = function(e) {
                        return e.overlays.reduce(function(e, t) {
                            var i = n.renderSetAnchorLocationInteractable(t, T.b.VideoOverlay);
                            return i && e.push(i), e
                        }, [])
                    }, n.renderPanelAnchorOptions = function(e) {
                        var t = e.panels.reduce(function(e, t) {
                            var i = n.renderSetAnchorLocationInteractable(t, T.b.Panel);
                            return i && e.push(i), e
                        }, []);
                        return e.panels.length < ie.a && t.push(l.createElement(u._6, {
                            blurAfterClick: !0,
                            onClick: n.onCreatePanelAndActivate
                        }, l.createElement(u._8, {
                            padding: {
                                x: 1,
                                y: .5
                            }
                        }, Object(m.d)("Add as a new panel", "ActivateExtensionDropdown")))), t
                    }, n.renderSetAnchorLocationInteractable = function(e, t) {
                        var i = n.props.installedExtension.activationConfig;
                        return i.state === T.a.Active && i.slot === e ? null : l.createElement(u._6, {
                            key: e,
                            blurAfterClick: !0,
                            onClick: n.onActivate,
                            "data-slot": e,
                            "data-anchor": t
                        }, l.createElement(u._8, {
                            padding: {
                                x: 1,
                                y: .5
                            }
                        }, Object(m.d)("Set as {slot}", {
                            slot: e.toUpperCase()
                        }, "ActivateExtensionDropdown")))
                    }, n.onCreatePanelAndActivate = function() {
                        n.props.onCreatePanelAndActivate(n.props.installedExtension)
                    }, n.onActivate = function(e) {
                        var t = n.props,
                            i = t.installedExtension,
                            a = t.onActivate,
                            r = t.onActivateComponent,
                            s = e.currentTarget.dataset,
                            o = s.slot,
                            l = s.anchor;
                        if (o && l) {
                            if (l === T.b.Component) return void r(i, o);
                            a(i, o, l)
                        }
                    }, n.onDeactivate = function() {
                        n.props.onDeactivate(n.props.installedExtension), n.dropdown && n.dropdown.toggleBalloon(!1)
                    }, n
                }
                return i.__extends(n, e), n.prototype.render = function() {
                    var e = this,
                        n = this.props.installedExtension;
                    return l.createElement(G.a, {
                        openByDefault: this.props.openByDefault,
                        ref: function(n) {
                            e.dropdown = n
                        }
                    }, l.createElement(u.v, {
                        dropdown: !0,
                        type: u.B.Text
                    }, n.activationConfig.state === T.a.Active ? this.renderActivePresence(n.activationConfig.slot) : Object(m.d)("Activate", "ActivateExtensionDropdown")), l.createElement(u.q, {
                        size: u.s.Medium,
                        offsetY: "-0.1rem",
                        noTail: !0
                    }, l.createElement(u._35, {
                        color: u.K.Link,
                        padding: 1
                    }, this.renderAnchorOptions())))
                }, n
            }(l.Component),
            re = function(e) {
                function n() {
                    var n = null !== e && e.apply(this, arguments) || this;
                    return n.onUninstall = function() {
                        return n.props.onUninstall(n.props.installedExtension)
                    }, n.renderActivationStatus = function() {
                        var e = n.props.installedExtension,
                            t = e.self && e.self.canActivate,
                            i = l.createElement(ae, {
                                installedExtension: e,
                                availableSlots: n.props.availableSlots,
                                onActivate: n.props.onActivate,
                                onActivateComponent: n.props.onActivateComponent,
                                onCreatePanelAndActivate: n.props.onCreatePanelAndActivate,
                                onDeactivate: n.props.onDeactivate
                            });
                        return t ? i : Object(T.h)(e) ? l.createElement(u._8, {
                            display: u.R.Flex,
                            alignItems: u.c.Center
                        }, l.createElement(u.Q, {
                            color: u.K.Alt2
                        }, Object(m.d)("Needs Configuration", "InstalledExtensionActions"))) : l.createElement(u._8, {
                            display: u.R.Flex,
                            alignItems: u.c.Center
                        }, l.createElement(u.Q, {
                            color: u.K.Alt2
                        }, Object(m.d)("Activation Disabled", "InstalledExtensionActions")))
                    }, n
                }
                return i.__extends(n, e), n.prototype.render = function() {
                    var e = this.props,
                        n = e.installedExtension,
                        t = e.channelName;
                    return l.createElement(u._8, {
                        padding: 1,
                        display: u.R.Flex,
                        flexWrap: u.U.NoWrap,
                        justifyContent: u._7.Between
                    }, this.renderActivationStatus(), l.createElement(u._8, {
                        display: u.R.Flex,
                        flexWrap: u.U.NoWrap
                    }, l.createElement(q.a, {
                        to: Object(z.a)(t, n.extension)
                    }, l.createElement(u.w, {
                        ariaLabel: Object(m.d)("Configure", "InstalledExtensionActions"),
                        icon: u._25.Gear
                    })), l.createElement(u.w, {
                        ariaLabel: Object(m.d)("Uninstall", "InstalledExtensionActions"),
                        icon: u._25.Trash,
                        onClick: this.onUninstall
                    })))
                }, n
            }(l.Component),
            se = function(e) {
                function n() {
                    var n = null !== e && e.apply(this, arguments) || this;
                    return n.state = {
                        hasCardImageError: !1
                    }, n.renderAnchorTypePills = function() {
                        var e = n.props.installedExtension.extension,
                            t = Object(T.e)(e).map(function(e) {
                                return l.createElement(u._8, {
                                    key: e,
                                    display: u.R.InlineBlock,
                                    padding: {
                                        right: .5
                                    }
                                }, l.createElement(X, {
                                    anchorType: e
                                }))
                            });
                        return Object(T.f)(e).includes(g.ExtensionPlatform.Mobile) && t.push(l.createElement(u._8, {
                            key: "mobile",
                            display: u.R.InlineBlock,
                            padding: {
                                right: .5
                            }
                        }, l.createElement(X, {
                            mobile: !0
                        }))), t
                    }, n.onCardImageError = function() {
                        n.setState({
                            hasCardImageError: !0
                        })
                    }, n
                }
                return i.__extends(n, e), n.prototype.render = function() {
                    var e = this.props,
                        n = e.installedExtension,
                        t = e.channelName,
                        i = e.availableSlots,
                        a = e.onUninstall,
                        r = e.onActivate,
                        s = e.onCreatePanelAndActivate,
                        o = e.onDeactivate,
                        d = n.extension;
                    return l.createElement(u._35, {
                        background: u.n.Base,
                        border: !0
                    }, l.createElement(u._35, {
                        padding: 1,
                        borderBottom: !0
                    }, l.createElement(u.C, {
                        row: !0,
                        border: !1
                    }, l.createElement(u.E, {
                        alt: d.name,
                        src: this.state.hasCardImageError ? m.a.defaultAvatarURL : d.iconURL,
                        aspect: u.l.Aspect1x1,
                        size: u.F.Size6,
                        onError: this.onCardImageError
                    }), l.createElement(u.D, null, l.createElement(u._8, {
                        padding: 1
                    }, l.createElement(q.a, {
                        to: Object(z.c)(d)
                    }, l.createElement(u.Q, {
                        type: u._49.H5
                    }, d.name)), this.renderAnchorTypePills(), d.state !== T.c.Released && l.createElement(J, {
                        state: d.state
                    }))))), l.createElement(re, {
                        channelName: t,
                        installedExtension: n,
                        availableSlots: i,
                        onUninstall: a,
                        onActivate: r,
                        onActivateComponent: this.props.onActivateComponent,
                        onCreatePanelAndActivate: s,
                        onDeactivate: o
                    }))
                }, n
            }(l.Component),
            oe = function(e) {
                return l.createElement(u._8, {
                    padding: 1,
                    fullWidth: !0
                }, l.createElement(u._8, {
                    padding: {
                        bottom: 1
                    }
                }, l.createElement(u.Q, {
                    type: u._49.H4,
                    noWrap: !0
                }, Object(m.d)("Installed Extensions", "InstalledExtensionList"))), e.installedExtensions.map(function(n) {
                    return l.createElement(u._8, {
                        key: n.id,
                        padding: {
                            bottom: 1
                        }
                    }, l.createElement(se, {
                        channelName: e.channelName,
                        installedExtension: n,
                        availableSlots: e.availableSlots,
                        onCreatePanelAndActivate: e.onCreatePanelAndActivate,
                        onActivate: e.onActivate,
                        onActivateComponent: e.onActivateComponent,
                        onDeactivate: e.onDeactivate,
                        onUninstall: e.onUninstall
                    }))
                }), !e.isLoading && 0 === e.installedExtensions.length && l.createElement(u.Q, {
                    type: u._49.P
                }, Object(m.d)("No installed extensions.", "InstalledExtensionList")))
            };
        oe.displayName = "InstalledExtensionList";
        var le = function() {
            return l.createElement(ne, {
                dismissedStorageKey: "extensions_dashboard_mobile_banner_dismissed",
                enabledDynamicKey: "extensions_mobile_banner_enabled"
            }, l.createElement(u.Q, {
                fontSize: u.V.Size5,
                type: u._49.P
            }, Object(m.d)("Extensions are now available on mobile. See which Extensions are mobile-ready in the manager below.", "MobileExtensionsBanner"), " ", l.createElement("a", {
                target: "_blank",
                rel: "noopener",
                href: "https://blog.twitch.tv/extensions-on-mobile-d6cf9e3be759"
            }, Object(m.d)("Learn more.", "MobileExtensionsBanner"))))
        };
        le.displayName = "MobileExtensionsBanner";
        var de = t("eyrD"),
            ce = this,
            me = function(e, n, t, a, r, s) {
                return i.__awaiter(ce, void 0, void 0, function() {
                    var o, l, d;
                    return i.__generator(this, function(i) {
                        switch (i.label) {
                            case 0:
                                if (!(s && e.self && e.self.canActivate)) return [3, 6];
                                i.label = 1;
                            case 1:
                                return i.trys.push([1, 5, , 6]), [4, n(Object(j.a)({
                                    channelID: s.currentUser.id,
                                    type: H.a.Extension
                                }))];
                            case 2:
                                return (o = i.sent().data).createPanel && o.createPanel.panel && o.createPanel.panel.type === H.a.Extension ? (l = o.createPanel.panel, [4, ve(e, l.slotID, T.b.Panel, t, a, r)]) : [3, 4];
                            case 3:
                                i.sent(), d = function(e) {
                                    return e.currentUser.panels.push(l), e
                                }, Object(j.e)(de, {}, d), i.label = 4;
                            case 4:
                                return [3, 6];
                            case 5:
                                return i.sent(), r(), [3, 6];
                            case 6:
                                return [2]
                        }
                    })
                })
            },
            ue = function(e, n, t, a, r, s, o, l) {
                return i.__awaiter(ce, void 0, void 0, function() {
                    var d;
                    return i.__generator(this, function(i) {
                        if (l && e.self && e.self.canActivate) {
                            if (!(d = l.currentUser.installedExtensions.find(function(e) {
                                    var i = e.activationConfig;
                                    return i.state === T.a.Active && i.slot === n && i.anchor === t
                                }))) return [2, ve(e, n, t, a, s, o)];
                            r({
                                onConfirm: function(e, n, t) {
                                    return ve(e, n, t, a, s, o)
                                },
                                existingExtensionName: d.extension.name,
                                isExistingExtensionMonetized: Object(T.g)(d.extension),
                                activationSlot: n,
                                activationAnchor: t,
                                replacementExtension: e
                            })
                        }
                        return [2]
                    })
                })
            },
            ve = function(e, n, t, a, r, s) {
                return i.__awaiter(ce, void 0, void 0, function() {
                    return i.__generator(this, function(i) {
                        switch (i.label) {
                            case 0:
                                return i.trys.push([0, 2, , 3]), [4, a(Object(j.a)({
                                    extensionInstallationID: e.id,
                                    slot: n,
                                    anchor: t
                                }))];
                            case 1:
                                return i.sent(), [3, 3];
                            case 2:
                                return i.sent(), s(), [3, 3];
                            case 3:
                                return r({
                                    activations: [{
                                        extensionName: e.extension.name,
                                        slot: n
                                    }]
                                }), [2]
                        }
                    })
                })
            },
            pe = function(e, n, t, a) {
                return i.__awaiter(ce, void 0, void 0, function() {
                    return i.__generator(this, function(i) {
                        return Object(T.g)(e.extension) ? (t({
                            monetizedInstallation: e,
                            onConfirm: function(e) {
                                return ke(e, n, a)
                            }
                        }), [2]) : [2, ke(e, n, a)]
                    })
                })
            },
            ke = function(e, n, t) {
                return i.__awaiter(ce, void 0, void 0, function() {
                    return i.__generator(this, function(i) {
                        switch (i.label) {
                            case 0:
                                return i.trys.push([0, 2, , 3]), [4, n(Object(j.a)({
                                    extensionInstallationID: e.id
                                }))];
                            case 1:
                                return i.sent(), [3, 3];
                            case 2:
                                return i.sent(), t(), [3, 3];
                            case 3:
                                return [2]
                        }
                    })
                })
            },
            ge = function(e, n, t, a, r, s) {
                return i.__awaiter(ce, void 0, void 0, function() {
                    var o, l, d;
                    return i.__generator(this, function(i) {
                        switch (i.label) {
                            case 0:
                                if (!s) return [3, 4];
                                i.label = 1;
                            case 1:
                                return i.trys.push([1, 3, , 4]), [4, t(Object(j.a)({
                                    extensionID: e.id,
                                    channelID: s.currentUser.id
                                }))];
                            case 2:
                                return (o = i.sent().data).installExtension && o.installExtension.installedExtension && (l = o.installExtension.installedExtension, d = function(e) {
                                    return e.currentUser.installedExtensions.push(l), e
                                }, Object(j.e)(de, {}, d), a({
                                    extension: l.extension,
                                    login: n
                                })), [3, 4];
                            case 3:
                                return i.sent(), r(), [3, 4];
                            case 4:
                                return [2]
                        }
                    })
                })
            },
            he = function(e, n, t, a) {
                return i.__awaiter(ce, void 0, void 0, function() {
                    var r;
                    return i.__generator(this, function(i) {
                        return r = function() {
                            return Ee(e.id, n, a)
                        }, t({
                            isExtensionMonetized: Object(T.g)(e.extension),
                            extensionName: e.extension.name,
                            onConfirm: r
                        }), [2]
                    })
                })
            },
            Ee = function(e, n, t) {
                return i.__awaiter(ce, void 0, void 0, function() {
                    var a, r, s;
                    return i.__generator(this, function(i) {
                        switch (i.label) {
                            case 0:
                                return i.trys.push([0, 2, , 3]), [4, n(Object(j.a)({
                                    extensionInstallationID: e
                                }))];
                            case 1:
                                return (a = i.sent().data).uninstallExtension && a.uninstallExtension.id && (r = a.uninstallExtension.id, s = function(e) {
                                    var n = e.currentUser.installedExtensions;
                                    return e.currentUser.installedExtensions = n.filter(function(e) {
                                        return e.id !== r
                                    }), e
                                }, Object(j.e)(de, {}, s)), [3, 3];
                            case 2:
                                return i.sent(), t(), [3, 3];
                            case 3:
                                return [2]
                        }
                    })
                })
            },
            be = function(e, n, t, a, r, s, o) {
                return i.__awaiter(ce, void 0, void 0, function() {
                    var l, d;
                    return i.__generator(this, function(c) {
                        return l = function(e) {
                            ! function(e, n, t, a, r) {
                                i.__awaiter(ce, void 0, void 0, function() {
                                    var s, o, l;
                                    return i.__generator(this, function(i) {
                                        switch (i.label) {
                                            case 0:
                                                if (!r) return [2];
                                                i.label = 1;
                                            case 1:
                                                return i.trys.push([1, 3, , 4]), [4, n(Object(j.a)({
                                                    channelID: r.currentUser.id,
                                                    activations: e
                                                }))];
                                            case 2:
                                                return (s = i.sent().data).applyExtensionActivations && s.applyExtensionActivations.installedExtensions && (o = s.applyExtensionActivations.installedExtensions, l = o.filter(function(n) {
                                                    var t = n.id;
                                                    return e.some(function(e) {
                                                        return e.installationID === t
                                                    })
                                                }).map(function(e) {
                                                    var n = e.activationConfig;
                                                    return {
                                                        extensionName: e.extension.name,
                                                        slot: n.slot
                                                    }
                                                }), t({
                                                    activations: l
                                                })), [3, 4];
                                            case 3:
                                                return i.sent(), a(), [3, 4];
                                            case 4:
                                                return [2]
                                        }
                                    })
                                })
                            }(e.filter(function(e) {
                                return void 0 !== e.component
                            }), a, r, s, o)
                        }, d = [], o && (d = o.currentUser.installedExtensions.filter(function(e) {
                            return e.activationConfig.anchor === T.b.Component
                        })), t({
                            installationToActivate: e,
                            activatedComponentExtensions: d,
                            activateExtensions: l,
                            slot: n
                        }), [2]
                    })
                })
            },
            xe = t("deLJ"),
            fe = t("MD1s"),
            ye = t("Mtzm"),
            Se = t("hd33"),
            Ne = t("448H"),
            _e = (t("D/X5"), function(e, n) {
                return e.extension.clientID > n.extension.clientID ? 1 : e.extension.clientID < n.extension.clientID ? -1 : e.extension.version < n.extension.version ? 1 : e.extension.version > n.extension.version ? -1 : 0
            }),
            Fe = "extensions_dashboard_show_released_only",
            Ce = function(e) {
                function n() {
                    var n = null !== e && e.apply(this, arguments) || this;
                    return n.state = {
                        availableExtensions: [],
                        availableExtensionsSearchQuery: "",
                        availableExtensionsShowReleasedOnly: m.l.get(Fe, !1),
                        availableSlots: {
                            components: [],
                            overlays: [],
                            panels: []
                        },
                        installedExtensions: []
                    }, n.searchQueryDebounceDurationMS = 250, n.onCreatePanelAndActivateExtension = function(e) {
                        return i.__awaiter(n, void 0, void 0, function() {
                            var n, t, a, r, s, o;
                            return i.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        return n = this.props, t = n.createPanel, a = n.activateExtension, r = n.showActivatedModal, s = n.showErrorModal, o = n.userData, [4, me(e, t, a, r, s, o)];
                                    case 1:
                                        return i.sent(), [2]
                                }
                            })
                        })
                    }, n.onActivateComponentExtensions = function(e, t) {
                        return i.__awaiter(n, void 0, void 0, function() {
                            var n, a, r, s, o, l;
                            return i.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        return n = this.props, a = n.applyExtensionActivations, r = n.userData, s = n.showComponentActivateModal, o = n.showActivatedModal, l = n.showErrorModal, [4, be(e, t, s, a, o, l, r)];
                                    case 1:
                                        return i.sent(), [2]
                                }
                            })
                        })
                    }, n.onActivateExtension = function(e, t, a) {
                        return i.__awaiter(n, void 0, void 0, function() {
                            var n, r, s, o, l, d;
                            return i.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        return n = this.props, r = n.activateExtension, s = n.showReplacementModal, o = n.showActivatedModal, l = n.showErrorModal, d = n.userData, [4, ue(e, t, a, r, s, o, l, d)];
                                    case 1:
                                        return i.sent(), [2]
                                }
                            })
                        })
                    }, n.onDeactivateExtension = function(e) {
                        return i.__awaiter(n, void 0, void 0, function() {
                            var n, t, a, r;
                            return i.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        return n = this.props, t = n.deactivateExtension, a = n.showDeactivateMonetizedModal, r = n.showErrorModal, [4, pe(e, t, a, r)];
                                    case 1:
                                        return i.sent(), [2]
                                }
                            })
                        })
                    }, n.onUninstallExtension = function(e) {
                        return i.__awaiter(n, void 0, void 0, function() {
                            var n, t, a, r;
                            return i.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        return n = this.props, t = n.uninstallExtension, a = n.showUninstallModal, r = n.showErrorModal, [4, he(e, t, a, r)];
                                    case 1:
                                        return i.sent(), [2]
                                }
                            })
                        })
                    }, n.onInstallExtension = function(e) {
                        return i.__awaiter(n, void 0, void 0, function() {
                            var n, t, a, r, s;
                            return i.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        return n = this.props, t = n.userData, a = n.showInstalledModal, r = n.showErrorModal, s = this.props.installExtension, [4, ge(e, this.props.channelName, s, a, r, t)];
                                    case 1:
                                        return i.sent(), [2]
                                }
                            })
                        })
                    }, n.canLoadMoreAvailableExtensions = function() {
                        var e = n.props.availableExtensionListData;
                        return void 0 !== e && !e.loading && !e.error && !!e.extensions.pageInfo.hasNextPage
                    }, n.loadMoreAvailableExtensions = function() {
                        return i.__awaiter(n, void 0, void 0, function() {
                            var e;
                            return i.__generator(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        return (e = this.props.availableExtensionListData) && this.canLoadMoreAvailableExtensions() ? [4, e.fetchMore({
                                            query: Ne,
                                            variables: {
                                                afterCursor: e.extensions.edges[e.extensions.edges.length - 1].cursor,
                                                search: this.state.availableExtensionsSearchQuery,
                                                state: this.state.availableExtensionsShowReleasedOnly ? T.c.Released : null
                                            },
                                            updateQuery: function(e, n) {
                                                var t = n.fetchMoreResult;
                                                return i.__assign({}, t, {
                                                    extensions: i.__assign({}, t.extensions, {
                                                        edges: Object(j.c)(e.extensions.edges, t.extensions.edges)
                                                    })
                                                })
                                            }
                                        })] : [3, 2];
                                    case 1:
                                        n.sent(), n.label = 2;
                                    case 2:
                                        return [2]
                                }
                            })
                        })
                    }, n.updateSearchQuery = function(e) {
                        n.setState({
                            availableExtensionsSearchQuery: e
                        }), clearTimeout(n.searchQueryDebounceID), n.searchQueryDebounceID = setTimeout(function() {
                            n.updateExtensionsFilters(e, n.state.availableExtensionsShowReleasedOnly)
                        }, n.searchQueryDebounceDurationMS)
                    }, n.updateReleasedStatusQuery = function(e) {
                        n.setState({
                            availableExtensionsShowReleasedOnly: e
                        }), m.l.set(Fe, e), n.updateExtensionsFilters(n.state.availableExtensionsSearchQuery, e)
                    }, n.updateExtensionsFilters = function(e, t) {
                        return i.__awaiter(n, void 0, void 0, function() {
                            var n, a, r;
                            return i.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        if (n = this.props, a = n.availableExtensionListData, r = n.showErrorModal, !a || a.error || a.loading) return [2];
                                        i.label = 1;
                                    case 1:
                                        return i.trys.push([1, 3, , 4]), [4, a.refetch({
                                            search: e,
                                            state: t ? T.c.Released : null
                                        })];
                                    case 2:
                                        return i.sent(), [3, 4];
                                    case 3:
                                        return i.sent(), r(), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, n
                }
                return i.__extends(n, e), n.prototype.componentDidMount = function() {
                    m.o.setPageTitle(Object(m.d)("Extensions", "DashboardExtensionsManagerPageTitle"))
                }, n.prototype.componentWillReceiveProps = function(e) {
                    if (e !== this.props) {
                        var n = this.props.userData,
                            t = e.userData;
                        if (n !== t && t && !t.loading && !t.error) {
                            var i = t.currentUser.installedExtensions.slice();
                            i.sort(_e), this.setState({
                                installedExtensions: i,
                                availableSlots: (o = t.currentUser.panels, {
                                    components: ["extension-component-1", "extension-component-2"],
                                    overlays: ["extension-overlay-1"],
                                    panels: o.reduce(function(e, n) {
                                        return n.type === H.a.Extension && e.push(n.slotID), e
                                    }, []).sort()
                                })
                            })
                        }
                        var a = this.props.availableExtensionListData,
                            r = e.availableExtensionListData;
                        if (a !== r && r && !r.loading && !r.error) {
                            var s = r.extensions.edges.map(function(e) {
                                return e.node
                            });
                            this.setState({
                                availableExtensions: s
                            })
                        }
                    }
                    var o
                }, n.prototype.componentDidUpdate = function() {
                    this.props.userData && !this.props.userData.loading && this.props.availableExtensionListData && !this.props.availableExtensionListData.loading && this.props.latencyTracking.reportInteractive()
                }, n.prototype.render = function() {
                    var e = this.props,
                        n = e.availableExtensionListData,
                        t = e.channelName,
                        i = e.userData,
                        a = e.userLogin;
                    if (t !== a) return l.createElement(D.b, {
                        to: Object(z.b)(a)
                    });
                    var r = void 0 !== i && i.loading,
                        s = void 0 !== n && n.loading,
                        o = function(e) {
                            return !(!e || e.loading || e.error || !e.currentUser.roles.isExtensionsApprover && !e.currentUser.roles.isExtensionsDeveloper)
                        }(i),
                        d = function(e) {
                            return !(!e || e.loading || e.error || !e.currentUser.cheer)
                        }(i),
                        c = function(e) {
                            return !(!e || e.loading || e.error || !e.currentUser.roles.isAffiliate && !e.currentUser.roles.isPartner)
                        }(i);
                    return l.createElement(L.b, null, l.createElement(u._35, {
                        padding: 2,
                        background: u.n.Alt
                    }, l.createElement(u._8, {
                        padding: {
                            bottom: 1
                        }
                    }, l.createElement(u.Q, {
                        type: u._49.H3
                    }, Object(m.d)("Extensions", "DashboardExtensionsManagerPage"))), l.createElement(le, null), c && l.createElement(te, null), l.createElement(u._8, {
                        display: u.R.Flex,
                        flexWrap: u.U.NoWrap,
                        padding: {
                            top: 1
                        }
                    }, l.createElement(u._35, {
                        className: "installed-extension-list-container",
                        border: !0,
                        display: u.R.Flex,
                        flexGrow: 0,
                        flexShrink: 0
                    }, l.createElement(oe, {
                        channelName: t,
                        installedExtensions: this.state.installedExtensions,
                        isLoading: r,
                        availableSlots: this.state.availableSlots,
                        onCreatePanelAndActivate: this.onCreatePanelAndActivateExtension,
                        onActivate: this.onActivateExtension,
                        onActivateComponent: this.onActivateComponentExtensions,
                        onDeactivate: this.onDeactivateExtension,
                        onUninstall: this.onUninstallExtension
                    })), l.createElement(u._8, {
                        display: u.R.Flex,
                        flexGrow: 1,
                        margin: {
                            left: 1
                        }
                    }, l.createElement(ee, {
                        extensions: this.state.availableExtensions,
                        installedExtensions: this.state.installedExtensions,
                        isChannelCheeringEnabled: d,
                        isLoading: s,
                        searchQuery: this.state.availableExtensionsSearchQuery,
                        displayShowReleasedOnlyCheckbox: o,
                        showReleasedOnly: this.state.availableExtensionsShowReleasedOnly,
                        onInstall: this.onInstallExtension,
                        canLoadMore: this.canLoadMoreAvailableExtensions,
                        loadMore: this.loadMoreAvailableExtensions,
                        onSearchQueryChange: this.updateSearchQuery,
                        onShowReleasedOnlyChange: this.updateReleasedStatusQuery
                    }))), l.createElement(V.a, {
                        learnMoreUrl: "https://help.twitch.tv/customer/portal/articles/2861187-how-to-use-extensions",
                        page: "extension-manager"
                    })))
                }, n
            }(l.Component);
        var Ae = Object(R.compose)(Object(W.d)("ExtensionManagerPage", {
            destination: I.a.ChannelDashboardExtensions
        }), Object(M.a)({
            location: P.PageviewLocation.DashboardExtensions
        }), Object(U.a)(Ne, {
            name: "availableExtensionListData",
            options: {
                variables: {get state() {
                        return m.l.get(Fe, !1) ? T.c.Released : null
                    }
                }
            }
        }), Object(U.a)(de, {
            options: {
                fetchPolicy: "network-only"
            },
            name: "userData"
        }), Object(U.a)(B, {
            name: "installExtension"
        }), Object(U.a)(Q, {
            name: "uninstallExtension"
        }), Object(U.a)(fe, {
            name: "applyExtensionActivations"
        }), Object(U.a)(xe, {
            name: "activateExtension"
        }), Object(U.a)(Se, {
            name: "deactivateExtension"
        }), Object(U.a)(ye, {
            name: "createPanel"
        }))(Ce);
        var we = Object(a.b)(function(e) {
            var n = Object(o.c)(e);
            return {
                userLogin: n && n.login || ""
            }
        }, function(e) {
            return Object(r.b)({
                showReplacementModal: function(e) {
                    var n = i.__rest(e, []);
                    return Object(s.d)(w, n)
                },
                showActivatedModal: function(e) {
                    var n = i.__rest(e, []);
                    return Object(s.d)(k, n)
                },
                showInstalledModal: function(e) {
                    var n = i.__rest(e, []);
                    return Object(s.d)(F.a, n)
                },
                showUninstallModal: function(e) {
                    var n = i.__rest(e, []);
                    return Object(s.d)(O.a, n)
                },
                showDeactivateMonetizedModal: function(e) {
                    var n = i.__rest(e, []);
                    return Object(s.d)(N, n)
                },
                showErrorModal: function() {
                    return Object(s.d)(_.a, {})
                },
                showComponentActivateModal: function(e) {
                    var n = i.__rest(e, []);
                    return Object(s.d)(f, n)
                }
            }, e)
        })(Ae);
        t.d(n, "ExtensionManagerPage", function() {
            return we
        })
    }
});
//# sourceMappingURL=pages.extension-manager-40d951597e0eef4e054d91ea91a2c47b.js.map