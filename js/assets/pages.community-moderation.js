(window.webpackJsonp = window.webpackJsonp || []).push([
    [69], {
        "8yyW": function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "DirectoryFollowButton_Community"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "name"
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
                                value: "community"
                            },
                            arguments: [{
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "name"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "name"
                                    }
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
                                        value: "name"
                                    },
                                    arguments: [],
                                    directives: []
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
                                                value: "follow"
                                            },
                                            arguments: [],
                                            directives: [],
                                            selectionSet: {
                                                kind: "SelectionSet",
                                                selections: [{
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "followedAt"
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
                body: "query DirectoryFollowButton_Community($name: String!) {\ncommunity(name: $name) {\nid\nname\nself {\nfollow {\nfollowedAt\n}\n}\n}\ncurrentUser {\nid\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        GA0J: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "mutation",
                    name: {
                        kind: "Name",
                        value: "UntimeoutUserFromCommunity"
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
                                    value: "UntimeoutUserFromCommunityInput"
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
                                value: "untimeoutUserFromCommunity"
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
                                        value: "community"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
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
                }],
                loc: {
                    start: 0,
                    end: 144
                }
            };
            n.loc.source = {
                body: "mutation UntimeoutUserFromCommunity($input: UntimeoutUserFromCommunityInput!) {\nuntimeoutUserFromCommunity(input: $input) {\ncommunity {\nid\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        GlFQ: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "mutation",
                    name: {
                        kind: "Name",
                        value: "DirectoryFollowButton_UnfollowCommunity"
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
                                    value: "UnfollowCommunityInput"
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
                                value: "unfollowCommunity"
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
                                        value: "follow"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "followedAt"
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
                    end: 144
                }
            };
            n.loc.source = {
                body: "mutation DirectoryFollowButton_UnfollowCommunity($input: UnfollowCommunityInput!) {\nunfollowCommunity(input: $input) {\nfollow {\nfollowedAt\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        Gr3e: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "mutation",
                    name: {
                        kind: "Name",
                        value: "UnbanUserFromCommunity"
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
                                    value: "UnbanUserFromCommunityInput"
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
                                value: "unbanUserFromCommunity"
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
                                        value: "community"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
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
                }],
                loc: {
                    start: 0,
                    end: 132
                }
            };
            n.loc.source = {
                body: "mutation UnbanUserFromCommunity($input: UnbanUserFromCommunityInput!) {\nunbanUserFromCommunity(input: $input) {\ncommunity {\nid\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        MT35: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "mutation",
                    name: {
                        kind: "Name",
                        value: "CommunityStreamBan_BanUser"
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
                                    value: "BanUserFromCommunityInput"
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
                                value: "banUserFromCommunity"
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
                                    directives: []
                                }]
                            }
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 121
                }
            };
            n.loc.source = {
                body: "mutation CommunityStreamBan_BanUser($input: BanUserFromCommunityInput!) {\nbanUserFromCommunity(input: $input) {\nerror\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        N9qs: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "CommunityModerationBanner"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "name"
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
                                value: "loggedIn"
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
                                value: "community"
                            },
                            arguments: [{
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "name"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "name"
                                    }
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
                                        value: "followersCount"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "avatarURL"
                                    },
                                    arguments: [{
                                        kind: "Argument",
                                        name: {
                                            kind: "Name",
                                            value: "width"
                                        },
                                        value: {
                                            kind: "IntValue",
                                            value: "80"
                                        }
                                    }, {
                                        kind: "Argument",
                                        name: {
                                            kind: "Name",
                                            value: "height"
                                        },
                                        value: {
                                            kind: "IntValue",
                                            value: "107"
                                        }
                                    }],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "coverURL"
                                    },
                                    arguments: [{
                                        kind: "Argument",
                                        name: {
                                            kind: "Name",
                                            value: "width"
                                        },
                                        value: {
                                            kind: "IntValue",
                                            value: "1200"
                                        }
                                    }, {
                                        kind: "Argument",
                                        name: {
                                            kind: "Name",
                                            value: "height"
                                        },
                                        value: {
                                            kind: "IntValue",
                                            value: "180"
                                        }
                                    }],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "self"
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
                                                    value: "loggedIn"
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
                                                value: "follow"
                                            },
                                            arguments: [],
                                            directives: [],
                                            selectionSet: {
                                                kind: "SelectionSet",
                                                selections: [{
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "community"
                                                    },
                                                    arguments: [],
                                                    directives: [],
                                                    selectionSet: {
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
                }],
                loc: {
                    start: 0,
                    end: 256
                }
            };
            n.loc.source = {
                body: "query CommunityModerationBanner($name: String! $loggedIn: Boolean!) {\ncommunity(name: $name) {\nid\ndisplayName\nfollowersCount\navatarURL(width: 80 height: 107)\ncoverURL(width: 1200 height: 180)\nself @include(if: $loggedIn) {\nfollow {\ncommunity {\nid\n}\n}\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        Senh: function(e, t, n) {},
        TcEZ: function(e, t, n) {},
        UVWM: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "mutation",
                    name: {
                        kind: "Name",
                        value: "DirectoryFollowButton_FollowCommunity"
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
                                    value: "FollowCommunityInput"
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
                                value: "followCommunity"
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
                                        value: "community"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
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
                                                        value: "follow"
                                                    },
                                                    arguments: [],
                                                    directives: [],
                                                    selectionSet: {
                                                        kind: "SelectionSet",
                                                        selections: [{
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "followedAt"
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
                    end: 161
                }
            };
            n.loc.source = {
                body: "mutation DirectoryFollowButton_FollowCommunity($input: FollowCommunityInput!) {\nfollowCommunity(input: $input) {\ncommunity {\nself {\nfollow {\nfollowedAt\n}\n}\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        "a+WB": function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "CommunityEmail"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "name"
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
                                value: "community"
                            },
                            arguments: [{
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "name"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "name"
                                    }
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
                                        value: "email"
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
                    end: 76
                }
            };
            n.loc.source = {
                body: "query CommunityEmail($name: String!) {\ncommunity(name: $name) {\nid\nemail\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        aDGs: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "CommunityModeration"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "name"
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
                                value: "loggedIn"
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
                    }, {
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "log"
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
                    }, {
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "settings"
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
                                value: "community"
                            },
                            arguments: [{
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "name"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "name"
                                    }
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
                                        value: "name"
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
                                        value: "email"
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
                                                    value: "settings"
                                                }
                                            }
                                        }]
                                    }]
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "owner"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
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
                                        value: "self"
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
                                                    value: "loggedIn"
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
                                                value: "permissions"
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
                                                            value: "log"
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
                                                        value: "banning"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "timingOut"
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
                                value: "currentUser"
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
                                            value: "loggedIn"
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
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 349
                }
            };
            n.loc.source = {
                body: "query CommunityModeration($name: String! $loggedIn: Boolean! $log: Boolean! $settings: Boolean!) {\ncommunity(name: $name) {\nid\nname\ndisplayName\nemail @include(if: $settings)\nowner {\nid\n}\nself @include(if: $loggedIn) {\npermissions @include(if: $log) {\nbanning\ntimingOut\n}\n}\n}\ncurrentUser @include(if: $loggedIn) {\nid\nroles {\nisStaff\nisSiteAdmin\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        b6Yk: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return a
            });
            var i = n("mrSG"),
                o = n("/7QA"),
                r = n("kRBY"),
                a = function() {
                    function e() {}
                    return e.get = function(e, t, n) {
                        return void 0 === t && (t = {}), void 0 === n && (n = {}), i.__awaiter(this, void 0, Promise, function() {
                            return i.__generator(this, function(o) {
                                switch (o.label) {
                                    case 0:
                                        return [4, this.request(e, i.__assign({}, t, {
                                            method: "GET"
                                        }), n)];
                                    case 1:
                                        return [2, o.sent()]
                                }
                            })
                        })
                    }, e.getOrThrow = function(e, t, n) {
                        return void 0 === t && (t = {}), void 0 === n && (n = {}), i.__awaiter(this, void 0, Promise, function() {
                            return i.__generator(this, function(o) {
                                switch (o.label) {
                                    case 0:
                                        return [4, this.requestOrThrow(e, i.__assign({}, t, {
                                            method: "GET"
                                        }), n)];
                                    case 1:
                                        return [2, o.sent()]
                                }
                            })
                        })
                    }, e.put = function(e, t, n) {
                        return void 0 === t && (t = {}), void 0 === n && (n = {}), i.__awaiter(this, void 0, Promise, function() {
                            return i.__generator(this, function(o) {
                                switch (o.label) {
                                    case 0:
                                        return [4, this.request(e, i.__assign({}, t, {
                                            method: "PUT"
                                        }), n)];
                                    case 1:
                                        return [2, o.sent()]
                                }
                            })
                        })
                    }, e.putOrThrow = function(e, t, n) {
                        return void 0 === t && (t = {}), void 0 === n && (n = {}), i.__awaiter(this, void 0, Promise, function() {
                            return i.__generator(this, function(o) {
                                switch (o.label) {
                                    case 0:
                                        return [4, this.requestOrThrow(e, i.__assign({}, t, {
                                            method: "PUT"
                                        }), n)];
                                    case 1:
                                        return [2, o.sent()]
                                }
                            })
                        })
                    }, e.post = function(e, t, n) {
                        return void 0 === t && (t = {}), void 0 === n && (n = {}), i.__awaiter(this, void 0, Promise, function() {
                            return i.__generator(this, function(o) {
                                switch (o.label) {
                                    case 0:
                                        return [4, this.request(e, i.__assign({}, t, {
                                            method: "POST"
                                        }), n)];
                                    case 1:
                                        return [2, o.sent()]
                                }
                            })
                        })
                    }, e.postOrThrow = function(e, t, n) {
                        return void 0 === t && (t = {}), void 0 === n && (n = {}), i.__awaiter(this, void 0, Promise, function() {
                            return i.__generator(this, function(o) {
                                switch (o.label) {
                                    case 0:
                                        return [4, this.requestOrThrow(e, i.__assign({}, t, {
                                            method: "POST"
                                        }), n)];
                                    case 1:
                                        return [2, o.sent()]
                                }
                            })
                        })
                    }, e.delete = function(e, t, n) {
                        return void 0 === t && (t = {}), void 0 === n && (n = {}), i.__awaiter(this, void 0, Promise, function() {
                            return i.__generator(this, function(o) {
                                switch (o.label) {
                                    case 0:
                                        return [4, this.request(e, i.__assign({}, t, {
                                            method: "DELETE"
                                        }), n)];
                                    case 1:
                                        return [2, o.sent()]
                                }
                            })
                        })
                    }, e.deleteOrThrow = function(e, t, n) {
                        return void 0 === t && (t = {}), void 0 === n && (n = {}), i.__awaiter(this, void 0, Promise, function() {
                            return i.__generator(this, function(o) {
                                switch (o.label) {
                                    case 0:
                                        return [4, this.requestOrThrow(e, i.__assign({}, t, {
                                            method: "DELETE"
                                        }), n)];
                                    case 1:
                                        return [2, o.sent()]
                                }
                            })
                        })
                    }, e.request = function(e, t, n) {
                        return void 0 === t && (t = {}), void 0 === n && (n = {}), i.__awaiter(this, void 0, Promise, function() {
                            var o, r, a, s;
                            return i.__generator(this, function(m) {
                                switch (m.label) {
                                    case 0:
                                        return t = this.constructOptions(t, n), o = t.headers ? t.headers["Content-Type"] : void 0, r = this.serialize(t.body, o), a = i.__assign({}, t, {
                                            body: r
                                        }), [4, this._fetch(e, a)];
                                    case 1:
                                        return s = m.sent(), [4, this.constructLegacyAPIResponse(s)];
                                    case 2:
                                        return [2, m.sent()]
                                }
                            })
                        })
                    }, e.requestOrThrow = function(e, t, n) {
                        return void 0 === t && (t = {}), void 0 === n && (n = {}), i.__awaiter(this, void 0, Promise, function() {
                            var o;
                            return i.__generator(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        return r.trys.push([0, 2, , 3]), [4, this.request(e, t, n)];
                                    case 1:
                                        if ((o = r.sent()).requestError) throw o.requestError;
                                        if (o.error) throw new Error("Error while sending legacy-api request: " + o.error.status + " - " + o.error.message);
                                        return [2, i.__assign({}, o, {
                                            body: o.body
                                        })];
                                    case 2:
                                        throw r.sent();
                                    case 3:
                                        return [2]
                                }
                            })
                        })
                    }, e.getAPIURL = function(e) {
                        return new URL(e, o.p.config.apiBaseURL)
                    }, e.constructLegacyAPIResponse = function(e) {
                        return i.__awaiter(this, void 0, Promise, function() {
                            var t, n, o, r;
                            return i.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        t = {
                                            status: e.status
                                        }, i.label = 1;
                                    case 1:
                                        return i.trys.push([1, 3, , 4]), [4, e.json()];
                                    case 2:
                                        return n = i.sent(), e.ok ? t.body = n : t.error = n, [3, 4];
                                    case 3:
                                        return o = i.sent(), e.headers && e.headers.get && (r = e.headers.get("Content-Type")) && -1 !== r.indexOf("application/json") && (t.requestError = o), [3, 4];
                                    case 4:
                                        return [2, t]
                                }
                            })
                        })
                    }, e._fetch = function(e, t) {
                        return void 0 === t && (t = {}), i.__awaiter(this, void 0, Promise, function() {
                            return i.__generator(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        return [4, fetch(this.getAPIURL(e).toString(), t)];
                                    case 1:
                                        return [2, n.sent()]
                                }
                            })
                        })
                    }, e.constructOptions = function(e, t) {
                        return e = Object.assign({}, e, {
                            headers: i.__assign({}, this.getDefaultHeaders(e, t), e.headers)
                        })
                    }, e.serialize = function(e, t) {
                        return "application/json; charset=UTF-8" === t ? JSON.stringify(e) : "string" == typeof e ? e : e && FormData.prototype.isPrototypeOf(e) ? e : e ? (this.logger.error(new Error("Could not serialize this request body for the content-type provided."), "attempting to serialize object with a non-JSON content-type", {
                            contentType: t
                        }), null) : null
                    }, e.getDefaultHeaders = function(e, t) {
                        var n = o.p.store.getState(),
                            i = {
                                Accept: "application/vnd.twitchtv.v" + (t.version || 5) + "+json; charset=UTF-8",
                                "Accept-Language": "en-us",
                                "Client-ID": o.p.config.legacyClientID,
                                "X-Requested-With": "XMLHttpRequest"
                            };
                        e.body && FormData.prototype.isPrototypeOf(e.body) || (i["Content-Type"] = "application/json; charset=UTF-8");
                        var a = Object(r.e)(n);
                        return a && (i.Authorization = "OAuth " + a.authToken, a.legacyCSRFToken && (i["Twitch-Api-Token"] = a.legacyCSRFToken)), t.excludeHeaders && t.excludeHeaders.forEach(function(e) {
                            i[e] && delete i[e]
                        }), i
                    }, e.logger = o.p.logger.withCategory("legacy-api"), e
                }()
        },
        bvb9: function(e, t, n) {},
        otOH: function(e, t, n) {
            "use strict";
            n.r(t);
            var i = n("q1tI"),
                o = n("9C/b"),
                r = n("mLw1"),
                a = n("4p7I"),
                s = n("yoKv"),
                m = n("LA8z"),
                u = n("mrSG"),
                l = n("TSYQ"),
                c = n("/MKj"),
                d = n("fvjX"),
                p = n("/7QA"),
                h = n("yR8l"),
                y = n("/0dD"),
                g = n("76Lv"),
                f = n("1/iK"),
                v = n("y5D0"),
                k = n("kRBY"),
                b = n("geRD"),
                C = n("2xye"),
                S = n("JcRA"),
                _ = n("GnwI"),
                w = n("Ue10"),
                N = n("8yyW"),
                E = n("UVWM"),
                O = n("GlFQ"),
                T = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            isFollowing: !1
                        }, t.followClicked = function() {
                            t.props.isLoggedIn ? t.toggleFollowing() : t.props.login()
                        }, t.showUnfollowButton = function() {
                            return t.props.isLoggedIn && t.state.isFollowing
                        }, t.communityDataLoaded = function() {
                            return t.props.data && !t.props.data.loading && !t.props.data.error && t.props.data.community
                        }, t.toggleFollowing = function() {
                            t.state.isFollowing ? t.unfollowChannel() : t.followChannel(), t.setState(function(e) {
                                return {
                                    isFollowing: !e.isFollowing
                                }
                            })
                        }, t.trackResponse = function(e) {
                            if (t.props.data) {
                                var n = "follow" === e ? C.SpadeEventType.CommunityFollow : C.SpadeEventType.CommunityUnfollow;
                                p.p.tracking.track(n, {
                                    community_id: t.props.data.community.id,
                                    name: t.props.data.community.name,
                                    is_official: !1,
                                    user_id: t.props.data.currentUser && t.props.data.currentUser.id
                                })
                            }
                        }, t.followChannel = function() {
                            return u.__awaiter(t, void 0, void 0, function() {
                                var e, t, n, i = this;
                                return u.__generator(this, function(o) {
                                    switch (o.label) {
                                        case 0:
                                            return this.props.followCommunity && this.props.data ? (e = u.__assign({}, Object(b.a)({
                                                communityID: this.props.data.community.id
                                            }), {
                                                optimisticResponse: {
                                                    followCommunity: {
                                                        __typename: "FollowCommunityPayload",
                                                        community: {
                                                            self: {
                                                                follow: {
                                                                    followedAt: (new Date).toISOString(),
                                                                    __typename: "CommunityFollow"
                                                                },
                                                                __typename: "CommunitySelfConnection"
                                                            },
                                                            __typename: "Community"
                                                        }
                                                    }
                                                }
                                            }), [4, this.props.followCommunity(e)]) : [2];
                                        case 1:
                                            return t = o.sent(), n = function(e) {
                                                return i.trackResponse("follow"), e.community.self.follow && (e.community.self.follow.followedAt = t.data.followCommunity.community.self.follow.followedAt), e
                                            }, Object(b.e)(N, {
                                                name: this.props.directoryName
                                            }, n), [2]
                                    }
                                })
                            })
                        }, t.unfollowChannel = function() {
                            return u.__awaiter(t, void 0, void 0, function() {
                                var e, t, n = this;
                                return u.__generator(this, function(i) {
                                    switch (i.label) {
                                        case 0:
                                            return this.props.unfollowCommunity && this.props.data ? (e = u.__assign({}, Object(b.a)({
                                                communityID: this.props.data.community.id
                                            }), {
                                                optimisticResponse: {
                                                    unfollowCommunity: {
                                                        __typename: "UnfollowCommunityPayload",
                                                        follow: null
                                                    }
                                                }
                                            }), [4, this.props.unfollowCommunity(e)]) : [2];
                                        case 1:
                                            return i.sent(), t = function(e) {
                                                return n.trackResponse("unfollow"), e.community.self.follow = null, e
                                            }, Object(b.e)(N, {
                                                name: this.props.directoryName
                                            }, t), [2]
                                    }
                                })
                            })
                        }, t
                    }
                    return u.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.reportInteractive()
                    }, t.prototype.componentDidUpdate = function() {
                        this.reportInteractive()
                    }, t.prototype.componentWillReceiveProps = function(e) {
                        e.data && !e.data.loading && !e.data.error && e.data.community && this.setState({
                            isFollowing: e.data.community.self && null !== e.data.community.self.follow
                        })
                    }, t.prototype.render = function() {
                        var e = Object(p.d)("Follow", "DirectoryFollowButton"),
                            t = this.props.buttonType,
                            n = t && t === w.F.Hollow ? w.ob.FollowHollow : w.ob.Heart;
                        if (this.props.isLoggedIn) {
                            if (!this.props.data || this.props.data.loading) return i.createElement(w.Wa, {
                                display: w.X.Flex,
                                justifyContent: w.Va.Center
                            }, i.createElement(w.Wa, {
                                alignItems: w.f.Center
                            }, i.createElement(w.db, {
                                width: 70,
                                height: 30
                            })));
                            if (!this.communityDataLoaded()) return null
                        }
                        var o, r = this.showUnfollowButton() ? Object(p.d)("Unfollow", "DirectoryFollowButton") : e,
                            a = this.showUnfollowButton() ? "directory-unfollow-button" : "directory-follow-button",
                            s = this.showUnfollowButton() ? "unfollow-button" : "follow-button",
                            m = this.showUnfollowButton() ? w.ob.Heart : n,
                            l = !this.showUnfollowButton() && t && t === w.F.Hollow ? w.ob.Heart : w.ob.Unheart,
                            c = this.showUnfollowButton() ? Object(p.d)("Following", "DirectoryFollowButton") : e;
                        return o = this.props.animatedButton ? i.createElement(S.a, u.__assign({
                            ariaLabel: r,
                            "data-a-target": a,
                            "data-test-selector": s,
                            icon: m,
                            iconOnHover: l,
                            onClick: this.followClicked,
                            text: c,
                            type: t || w.F.Default
                        }, Object(w.bc)(this.props))) : i.createElement(w.z, u.__assign({
                            ariaLabel: r,
                            "data-a-target": a,
                            "data-test-selector": s,
                            icon: m,
                            onClick: this.followClicked,
                            statusAlertIcon: this.props.isLoggedIn ? l : void 0
                        }, Object(w.bc)(this.props), {
                            type: t || w.F.Default
                        }), c), i.createElement(w.Wa, {
                            display: this.showUnfollowButton() ? w.X.Flex : void 0,
                            fullWidth: !!this.showUnfollowButton() || void 0,
                            flexDirection: this.showUnfollowButton() ? w.Z.Column : void 0,
                            className: this.showUnfollowButton() ? "directory-follow-btn" : void 0
                        }, o)
                    }, t.prototype.reportInteractive = function() {
                        this.props.isLoggedIn && this.props.directoryName && !this.communityDataLoaded() || this.props.latencyTracking.reportInteractive()
                    }, t = u.__decorate([Object(h.a)(N, {
                        options: function(e) {
                            return {
                                variables: {
                                    name: e.directoryName
                                }
                            }
                        },
                        skip: function(e) {
                            return !e.isLoggedIn || !e.directoryName
                        }
                    }), Object(h.a)(E, {
                        name: "followCommunity"
                    }), Object(h.a)(O, {
                        name: "unfollowCommunity"
                    }), Object(_.b)("DirectoryFollowButton")], t)
                }(i.Component);
            var U = Object(c.connect)(function(e) {
                    return {
                        isLoggedIn: Object(k.f)(e)
                    }
                }, function(e) {
                    return Object(d.bindActionCreators)({
                        login: function() {
                            return Object(v.e)(f.a.DirectoryFollowButton)
                        }
                    }, e)
                })(T),
                D = n("N9qs"),
                F = (n("bvb9"), function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return u.__extends(t, e), t.prototype.render = function() {
                        var e, t, n, o = {};
                        this.props.data.loading || this.props.data.error || !this.props.data.community ? (e = i.createElement(w.db, {
                            width: 60,
                            height: 84
                        }), t = i.createElement(w.db, {
                            width: 300,
                            height: 29
                        }), n = i.createElement(w.db, {
                            width: 65,
                            height: 18
                        })) : (e = i.createElement(w.I, {
                            alt: Object(p.d)("Community Avatar", "CommunityModerationBanner"),
                            src: this.props.data.community.avatarURL || "",
                            size: w.J.Size6,
                            aspect: w.p.BoxArt
                        }), o = {
                            backgroundImage: "url(" + this.props.data.community.coverURL + ")"
                        }, t = i.createElement(w.W, {
                            color: w.O.Overlay,
                            type: w.Nb.H3
                        }, this.props.data.community.displayName), n = i.createElement(w.W, {
                            color: w.O.Overlay,
                            type: w.Nb.P
                        }, Object(p.d)("{followers, plural, one {# Follower} other {# Followers}}", {
                            followers: this.props.data.community.followersCount || 0
                        }, "CommunityModerationBanner")));
                        var r = l("community-moderation-banner", Object(g.b)(y.a.Dark));
                        return i.createElement(w.Oa, {
                            className: r,
                            position: w.eb.Relative
                        }, i.createElement("div", {
                            style: o
                        }, i.createElement(w.Wa, {
                            position: w.eb.Absolute,
                            attachBottom: !0,
                            attachLeft: !0,
                            attachRight: !0,
                            attachTop: !0,
                            className: "community-moderation-banner__content",
                            padding: 3,
                            display: w.X.Flex,
                            flexDirection: w.Z.Row,
                            justifyContent: w.Va.Between,
                            alignItems: w.f.End
                        }, i.createElement(w.Wa, {
                            display: w.X.Flex,
                            flexDirection: w.Z.Row,
                            alignItems: w.f.End
                        }, e, i.createElement(w.Wa, {
                            margin: {
                                left: 2
                            },
                            display: w.X.Flex,
                            flexDirection: w.Z.Column
                        }, i.createElement(w.U, {
                            to: "/directory/communities"
                        }, i.createElement(w.nb, {
                            asset: w.ob.GlyphArrLeft,
                            height: 10,
                            width: 10
                        }), Object(p.d)("Communities", "CommunityModerationBanner")), t, n)), i.createElement(w.Wa, {
                            display: w.X.Flex,
                            flexDirection: w.Z.Row,
                            alignItems: w.f.End
                        }, i.createElement(U, {
                            directoryName: this.props.communityName
                        }), i.createElement(w.Wa, {
                            margin: {
                                left: 1
                            }
                        }, i.createElement(w.z, {
                            icon: w.ob.Check,
                            linkTo: "/communities/" + encodeURIComponent(this.props.communityName)
                        }, Object(p.d)("Done", "CommunityModerationBanner")))))))
                    }, t
                }(i.Component)),
                I = Object(d.compose)(Object(c.connect)(function(e) {
                    return {
                        isLoggedIn: !!e.session.user
                    }
                }), Object(h.a)(D, {
                    options: function(e) {
                        return {
                            variables: {
                                name: e.communityName,
                                loggedIn: e.isLoggedIn
                            }
                        }
                    }
                }))(F),
                M = n("V+GM"),
                j = n("NvVO"),
                x = n("aCAx"),
                B = n("b6Yk"),
                R = n("oJmH"),
                A = n("cZKs"),
                L = function(e) {
                    switch (e) {
                        case "TARGET_USER_OWNER":
                            return Object(p.d)("You cannot ban or timeout the owner of this community", "BanTimeoutErrorMessages");
                        case "TARGET_USER_MOD":
                            return Object(p.d)("You cannot ban or timeout a moderator", "BanTimeoutErrorMessages");
                        case "TARGET_USER_SELF":
                            return Object(p.d)("You cannot ban or timeout yourself", "BanTimeoutErrorMessages");
                        case "TARGET_USER_STAFF":
                            return Object(p.d)("You cannot ban or timeout a staff member", "BanTimeoutErrorMessages");
                        case "NOT_PERMITTED":
                            return Object(p.d)("The user is already banned from this community", "BanTimeoutErrorMessages");
                        default:
                            return Object(p.d)("Something went wrong", "BanTimeoutErrorMessages")
                    }
                },
                W = n("MT35"),
                V = (n("q+lQ"), "error-message"),
                P = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            error: "",
                            reason: ""
                        }, t.renderErrorMessage = function() {
                            return t.state.error ? i.createElement(w.Wa, {
                                margin: {
                                    bottom: 2
                                }
                            }, i.createElement(w.W, {
                                color: w.O.Error,
                                type: w.Nb.H4,
                                "data-test-selector": V
                            }, L(t.state.error))) : null
                        }, t.onReasonChange = function(e) {
                            var n = e.target.value;
                            t.setState({
                                reason: n
                            })
                        }, t.banUserFromCommunity = function() {
                            return u.__awaiter(t, void 0, void 0, function() {
                                var e, t;
                                return u.__generator(this, function(n) {
                                    switch (n.label) {
                                        case 0:
                                            return this.props.banUserFromCommunity ? (e = u.__assign({}, Object(b.a)({
                                                communityID: this.props.communityID,
                                                userID: this.props.userID,
                                                reason: this.state.reason
                                            }), {
                                                optimisticResponse: {
                                                    banUserFromCommunity: {
                                                        error: null,
                                                        __typename: "BanUserFromCommunityPayload"
                                                    }
                                                }
                                            }), [4, this.props.banUserFromCommunity(e)]) : [2];
                                        case 1:
                                            return null === (t = n.sent()).data.banUserFromCommunity.error ? (p.p.tracking.track(C.SpadeEventType.CommunityModeration, {
                                                community_id: this.props.communityID,
                                                name: this.props.communityName,
                                                is_official: !1,
                                                user_id: this.props.currentUserID,
                                                target_id: this.props.userID,
                                                action: "ban",
                                                reason: this.state.reason
                                            }), this.props.onSuccess && this.props.onSuccess(), this.props.onCloseModal()) : this.setState({
                                                error: t.data.banUserFromCommunity.error
                                            }), [2]
                                    }
                                })
                            })
                        }, t
                    }
                    return u.__extends(t, e), t.prototype.render = function() {
                        return i.createElement(w.Oa, {
                            position: w.eb.Relative
                        }, i.createElement(w.xb, {
                            background: w.r.Base,
                            className: "stream-ban-modal"
                        }, i.createElement(w.Wa, {
                            padding: 2
                        }, this.renderErrorMessage(), i.createElement(w.Wa, {
                            margin: {
                                bottom: 2
                            }
                        }, i.createElement(w.W, {
                            type: w.Nb.H4
                        }, Object(p.d)("Are you sure you want to ban {name}?", {
                            name: this.props.username
                        }, "StreamBanModal"))), i.createElement(w.xb, {
                            borderTop: !0
                        }, i.createElement(w.Wa, {
                            margin: {
                                y: 2
                            }
                        }, i.createElement(w.W, {
                            bold: !0
                        }, Object(p.d)("Reason (Required)", "StreamBanModal")), i.createElement(w.Qa, {
                            type: w.Sa.Text,
                            placeholder: Object(p.d)("Please be as detailed as possible", "StreamBanModal"),
                            onChange: this.onReasonChange,
                            "data-test-selector": "reason-input"
                        }))), i.createElement(w.xb, {
                            borderTop: !0
                        }, i.createElement(w.Wa, {
                            padding: {
                                top: 2
                            },
                            textAlign: w.Jb.Center
                        }, i.createElement(w.Wa, {
                            display: w.X.Inline,
                            margin: {
                                x: 1
                            }
                        }, i.createElement(w.z, {
                            type: w.F.Text,
                            onClick: this.props.onCloseModal,
                            "data-test-selector": "cancel-button"
                        }, Object(p.d)("Cancel", "StreamBanModal"))), i.createElement(w.Wa, {
                            display: w.X.Inline,
                            margin: {
                                x: 1
                            }
                        }, i.createElement(w.z, {
                            onClick: this.banUserFromCommunity,
                            disabled: !this.state.reason.length,
                            "data-test-selector": "ban-button"
                        }, Object(p.d)("Ban", "StreamBanModal")))))), i.createElement(A.a, {
                            closeOnBackdropClick: !0
                        })))
                    }, t
                }(i.Component),
                q = Object(R.compose)(Object(h.a)(W, {
                    name: "banUserFromCommunity"
                }))(P);
            var G = Object(c.connect)(null, function(e) {
                    return Object(d.bindActionCreators)({
                        onCloseModal: x.c
                    }, e)
                })(q),
                z = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onSuccess = function() {
                            t.props.onSuccess(t.props.user)
                        }, t
                    }
                    return u.__extends(t, e), t.prototype.render = function() {
                        return i.createElement(G, {
                            communityID: this.props.communityID,
                            communityName: this.props.communityName,
                            userID: this.props.user.id,
                            username: this.props.user.login,
                            currentUserID: this.props.currentUserID,
                            onSuccess: this.onSuccess
                        })
                    }, t
                }(i.Component),
                H = (n("TcEZ"), n("uCyD")),
                $ = "error-message",
                Q = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            durationHours: 2,
                            error: "",
                            reason: ""
                        }, t.renderErrorMessage = function() {
                            return t.state.error ? i.createElement(w.Wa, {
                                margin: {
                                    bottom: 2
                                }
                            }, i.createElement(w.W, {
                                color: w.O.Error,
                                type: w.Nb.H4,
                                "data-test-selector": $
                            }, L(t.state.error))) : null
                        }, t.onReasonChange = function(e) {
                            var n = e.target.value;
                            t.setState({
                                reason: n
                            })
                        }, t.onDurationHoursChange = function(e) {
                            var n = parseInt(e.target.value, 10);
                            t.setState({
                                durationHours: n
                            })
                        }, t.timeoutUserFromCommunity = function() {
                            return u.__awaiter(t, void 0, void 0, function() {
                                var e, t;
                                return u.__generator(this, function(n) {
                                    switch (n.label) {
                                        case 0:
                                            return this.props.timeoutUserFromCommunity ? (e = u.__assign({}, Object(b.a)({
                                                communityID: this.props.communityID,
                                                durationHours: this.state.durationHours,
                                                userID: this.props.userID,
                                                reason: this.state.reason
                                            }), {
                                                optimisticResponse: {
                                                    timeoutUserFromCommunity: {
                                                        error: null,
                                                        __typename: "TimeoutUserFromCommunityPayload"
                                                    }
                                                }
                                            }), [4, this.props.timeoutUserFromCommunity(e)]) : [2];
                                        case 1:
                                            return null === (t = n.sent()).data.timeoutUserFromCommunity.error ? (p.p.tracking.track(C.SpadeEventType.CommunityModeration, {
                                                community_id: this.props.communityID,
                                                name: this.props.communityName,
                                                is_official: !1,
                                                user_id: this.props.currentUserID,
                                                target_id: this.props.userID,
                                                action: "timeout",
                                                reason: this.state.reason,
                                                duration: this.state.durationHours
                                            }), this.props.onSuccess && this.props.onSuccess(), this.props.onCloseModal()) : this.setState({
                                                error: t.data.timeoutUserFromCommunity.error
                                            }), [2]
                                    }
                                })
                            })
                        }, t
                    }
                    return u.__extends(t, e), t.prototype.render = function() {
                        return i.createElement(w.Oa, {
                            position: w.eb.Relative
                        }, i.createElement(w.xb, {
                            background: w.r.Base,
                            className: "stream-timeout-modal"
                        }, i.createElement(w.Wa, {
                            padding: 2
                        }, this.renderErrorMessage(), i.createElement(w.Wa, {
                            margin: {
                                bottom: 2
                            }
                        }, i.createElement(w.W, {
                            type: w.Nb.H4
                        }, Object(p.d)("Are you sure you want to timeout {name}?", {
                            name: this.props.username
                        }, "StreamTimeoutModal"))), i.createElement(w.xb, {
                            borderTop: !0
                        }, i.createElement(w.Wa, {
                            margin: {
                                y: 2
                            }
                        }, i.createElement(w.W, {
                            bold: !0
                        }, Object(p.d)("Reason (Required)", "StreamTimeoutModal")), i.createElement(w.Qa, {
                            type: w.Sa.Text,
                            placeholder: Object(p.d)("Please be as detailed as possible", "StreamTimeoutModal"),
                            onChange: this.onReasonChange,
                            "data-test-selector": "reason-input"
                        }))), i.createElement(w.Wa, {
                            margin: {
                                y: 2
                            }
                        }, i.createElement(w.W, {
                            bold: !0
                        }, Object(p.d)("Duration", "StreamTimeoutModal")), i.createElement(w.tb, {
                            defaultValue: "2",
                            onChange: this.onDurationHoursChange
                        }, i.createElement("option", {
                            value: "2"
                        }, Object(p.d)("2 hours", "StreamTimeoutModal")), i.createElement("option", {
                            value: "4"
                        }, Object(p.d)("4 hours", "StreamTimeoutModal")), i.createElement("option", {
                            value: "8"
                        }, Object(p.d)("8 hours", "StreamTimeoutModal")), i.createElement("option", {
                            value: "12"
                        }, Object(p.d)("12 hours", "StreamTimeoutModal")), i.createElement("option", {
                            value: "24"
                        }, Object(p.d)("24 hours", "StreamTimeoutModal")))), i.createElement(w.xb, {
                            borderTop: !0
                        }, i.createElement(w.Wa, {
                            padding: {
                                top: 2
                            },
                            textAlign: w.Jb.Center
                        }, i.createElement(w.Wa, {
                            display: w.X.Inline,
                            margin: {
                                x: 1
                            }
                        }, i.createElement(w.z, {
                            type: w.F.Text,
                            onClick: this.props.onCloseModal,
                            "data-test-selector": "cancel-button"
                        }, Object(p.d)("Cancel", "StreamTimeoutModal"))), i.createElement(w.Wa, {
                            display: w.X.Inline,
                            margin: {
                                x: 1
                            }
                        }, i.createElement(w.z, {
                            onClick: this.timeoutUserFromCommunity,
                            disabled: !this.state.reason.length,
                            "data-test-selector": "timeout-button"
                        }, Object(p.d)("Timeout", "StreamTimeoutModal")))))), i.createElement(A.a, {
                            closeOnBackdropClick: !0
                        })))
                    }, t
                }(i.Component),
                X = Object(R.compose)(Object(h.a)(H, {
                    name: "timeoutUserFromCommunity"
                }))(Q);
            var Y, Z = Object(c.connect)(null, function(e) {
                    return Object(d.bindActionCreators)({
                        onCloseModal: x.c
                    }, e)
                })(X),
                J = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onSuccess = function() {
                            t.props.onSuccess(t.props.user)
                        }, t
                    }
                    return u.__extends(t, e), t.prototype.render = function() {
                        return i.createElement(Z, {
                            communityID: this.props.communityID,
                            communityName: this.props.communityName,
                            userID: this.props.user.id,
                            username: this.props.user.login,
                            currentUserID: this.props.currentUserID,
                            onSuccess: this.onSuccess
                        })
                    }, t
                }(i.Component),
                K = n("8/mp"),
                ee = n("yLwq"),
                te = n("f00E"),
                ne = n("H/lO"),
                ie = n("NZDK"),
                oe = (n("Senh"), function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.state = {
                            results: [],
                            searchText: "",
                            searching: !1
                        }, n.inputTimeout = 0, n.renderUsers = function(e) {
                            return i.createElement(w.Wa, {
                                padding: 1
                            }, e.map(function(e) {
                                return i.createElement(w.Wa, {
                                    display: w.X.Flex,
                                    flexDirection: w.Z.Row,
                                    key: "user-search-form-result:" + e.id,
                                    justifyContent: w.Va.Between,
                                    alignItems: w.f.Center,
                                    padding: {
                                        y: .5
                                    }
                                }, i.createElement(w.Wa, {
                                    display: w.X.Flex,
                                    flexDirection: w.Z.Row,
                                    alignItems: w.f.Center
                                }, i.createElement(w.Wa, {
                                    margin: {
                                        right: 1
                                    }
                                }, i.createElement(w.q, {
                                    src: e.avatarUrl,
                                    size: 30,
                                    alt: Object(p.d)("{user} Avatar", {
                                        user: e.displayName
                                    }, "UserSearchForm")
                                })), i.createElement(w.W, null, e.displayName)), i.createElement(w.Wa, {
                                    display: w.X.Flex,
                                    flexDirection: w.Z.Row,
                                    alignItems: w.f.Center
                                }, n.props.getUserContent(e)))
                            }))
                        }, n.onChange = function(e) {
                            var t = e.target.value;
                            clearTimeout(n.inputTimeout), n.setState({
                                searchText: t
                            }), t ? n.inputTimeout = setTimeout(function() {
                                return n.search(t)
                            }, 200) : n.setState({
                                searching: !1,
                                results: []
                            })
                        }, n.search = function(e) {
                            return u.__awaiter(n, void 0, void 0, function() {
                                var t, n;
                                return u.__generator(this, function(i) {
                                    switch (i.label) {
                                        case 0:
                                            return this.setState({
                                                searching: !0
                                            }), [4, this.searchClient.queryForType(ne.a.Users, e, Object(te.a)(), {
                                                hitsPerPage: 10
                                            })];
                                        case 1:
                                            return t = i.sent(), this.inputTimeout && e === this.state.searchText && (n = t && t.users && this.normalizeSearchResults(t.users.hits) || [], this.setState({
                                                searching: !1,
                                                results: n
                                            })), [2]
                                    }
                                })
                            })
                        }, n.normalizeSearchResults = function(e) {
                            return e.map(function(e) {
                                return {
                                    id: e.objectID,
                                    login: e.login,
                                    displayName: e.name,
                                    avatarUrl: e.profile_image || Object(ee.c)(e.objectID, 30)
                                }
                            })
                        }, n.clearSearchText = function() {
                            n.setState({
                                searchText: "",
                                searching: !1,
                                results: []
                            })
                        }, n.searchClient = new ie.a({
                            appId: p.a.algoliaApplicationID,
                            apiKey: p.a.algoliaAPIKey,
                            apolloClient: p.p.apollo.client,
                            logger: p.k,
                            config: p.a,
                            stats: p.p.stats
                        }), t.clearSearchText && t.clearSearchText(n.clearSearchText), n
                    }
                    return u.__extends(t, e), t.prototype.componentWillReceiveProps = function(e) {
                        e.clearSearchText && e.clearSearchText(this.clearSearchText)
                    }, t.prototype.render = function() {
                        var e = l({
                            "user-search-form--disabled": this.state.searching || this.state.results.length > 0
                        });
                        return i.createElement(w.Wa, {
                            className: "user-search-form"
                        }, i.createElement(w.xb, {
                            key: "user-search-form-input",
                            padding: 1,
                            border: !0
                        }, i.createElement(w.Wa, {
                            margin: {
                                bottom: 1
                            }
                        }, i.createElement(w.W, {
                            fontSize: w.Ba.Size4
                        }, this.props.title)), this.props.description && i.createElement(w.Wa, {
                            margin: {
                                bottom: 1
                            }
                        }, i.createElement(w.W, null, this.props.description)), i.createElement(w.Wa, {
                            margin: {
                                bottom: 1
                            },
                            position: w.eb.Relative
                        }, i.createElement(w.Qa, {
                            type: w.Sa.Search,
                            placeholder: this.props.placeholder,
                            onChange: this.onChange,
                            icon: w.ob.GlyphLive,
                            value: this.state.searchText
                        }), i.createElement(w.u, {
                            show: this.state.results.length > 0,
                            size: w.w.ExtraLarge,
                            direction: w.v.TopCenter
                        }, i.createElement(K.b, {
                            className: "user-search-form__results"
                        }, i.createElement(w.Wa, null, this.state.results.length > 0 && this.renderUsers(this.state.results)))))), this.props.displayUsers && this.props.displayUsers.length > 0 && i.createElement(w.xb, {
                            key: "user-search-form-results",
                            className: e,
                            borderLeft: !0,
                            borderRight: !0,
                            borderBottom: !0
                        }, this.renderUsers(this.props.displayUsers)))
                    }, t
                }(i.Component)),
                re = n("Gr3e"),
                ae = n("GA0J"),
                se = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            moderatedUsers: {}
                        }, t.logger = p.k.withCategory("community-channel-moderation"), t.clearSearchText = null, t.getButtonsForUser = function(e) {
                            var n = t.state.moderatedUsers[e.id];
                            if (n) {
                                var o = n.isBanned ? Object(p.d)("Unban", "CommunityChannelModeration") : Object(p.d)("Untimeout", "CommunityChannelModeration");
                                return t.renderButton(o, function() {
                                    return t.unmoderateUser(n)
                                })
                            }
                            return i.createElement(w.Wa, {
                                display: w.X.Flex,
                                flexDirection: w.Z.Row
                            }, t.props.userCanBan && t.renderButton(Object(p.d)("Ban", "CommunityChannelModeration"), function() {
                                return t.banUser(e)
                            }), t.props.userCanTimeout && t.renderButton(Object(p.d)("Timeout", "CommunityChannelModeration"), function() {
                                return t.timeoutUser(e)
                            }))
                        }, t.renderButton = function(e, t) {
                            return i.createElement(w.Wa, {
                                margin: {
                                    left: .5
                                }
                            }, i.createElement(w.z, {
                                size: w.D.Small,
                                onClick: t,
                                type: w.F.Hollow,
                                blurAfterClick: !0
                            }, e))
                        }, t.fetchModeratedUsers = function(e) {
                            return u.__awaiter(t, void 0, void 0, function() {
                                var t, n, i, o;
                                return u.__generator(this, function(r) {
                                    switch (r.label) {
                                        case 0:
                                            this.logger.debug("Loading moderated users"), r.label = 1;
                                        case 1:
                                            return r.trys.push([1, 4, , 5]), [4, B.a.get("/kraken/communities/" + e + "/bans?limit=100")];
                                        case 2:
                                            return t = r.sent(), [4, B.a.get("/kraken/communities/" + e + "/timeouts?limit=100")];
                                        case 3:
                                            return n = r.sent(), (t.error || t.requestError) && (n.error || n.requestError) ? (this.logger.warn("Error loading users", {
                                                banResponseError: t.error,
                                                banRequestError: t.requestError,
                                                timeoutResponseError: n.error,
                                                timeoutRequestError: n.requestError
                                            }), [2]) : (i = u.__assign({}, t.body && this.normalizeModeratedUsers(t.body.banned_users, !0), n.body && this.normalizeModeratedUsers(n.body.timed_out_users, !1)), this.setState({
                                                moderatedUsers: i
                                            }), this.logger.debug("Successfully loaded users"), [3, 5]);
                                        case 4:
                                            return o = r.sent(), this.logger.warn("Error loading users", o), [3, 5];
                                        case 5:
                                            return [2]
                                    }
                                })
                            })
                        }, t.normalizeModeratedUsers = function(e, t) {
                            return e.reduce(function(e, n) {
                                return e[n.user_id] = {
                                    id: n.user_id,
                                    login: n.name,
                                    displayName: n.display_name,
                                    avatarUrl: n.avatar_image_url,
                                    isBanned: t
                                }, e
                            }, {})
                        }, t.banUser = function(e) {
                            t.props.showModal(z, {
                                user: e,
                                communityID: t.props.communityID,
                                communityName: t.props.communityName,
                                currentUserID: t.props.currentUserID,
                                onSuccess: t.onBanUserSuccess
                            })
                        }, t.timeoutUser = function(e) {
                            t.props.showModal(J, {
                                user: e,
                                communityID: t.props.communityID,
                                onSuccess: t.onTimeoutUserSuccess
                            })
                        }, t.onBanUserSuccess = function(e) {
                            t.clearSearchText && t.clearSearchText(), t.setState(function(t) {
                                var n = u.__assign({}, t.moderatedUsers);
                                return n[e.id] = u.__assign({}, e, {
                                    isBanned: !0
                                }), {
                                    moderatedUsers: n
                                }
                            })
                        }, t.onTimeoutUserSuccess = function(e) {
                            t.clearSearchText && t.clearSearchText(), t.setState(function(t) {
                                var n = u.__assign({}, t.moderatedUsers);
                                return n[e.id] = u.__assign({}, e, {
                                    isBanned: !1
                                }), {
                                    moderatedUsers: n
                                }
                            })
                        }, t.unmoderateUser = function(e) {
                            return u.__awaiter(t, void 0, void 0, function() {
                                var t, n;
                                return u.__generator(this, function(i) {
                                    switch (i.label) {
                                        case 0:
                                            this.setState(function(t) {
                                                var n = u.__assign({}, t.moderatedUsers);
                                                return delete n[e.id], {
                                                    moderatedUsers: n
                                                }
                                            }), i.label = 1;
                                        case 1:
                                            return i.trys.push([1, 3, , 4]), t = Object(b.a)({
                                                userID: e.id,
                                                communityID: this.props.communityID
                                            }), [4, (e.isBanned ? this.props.unbanUser : this.props.untimeoutUser)(t)];
                                        case 2:
                                            return i.sent(), this.props.track(C.SpadeEventType.CommunityModeration, {
                                                target_id: e.id,
                                                action: e.isBanned ? "unban" : "untimeout"
                                            }), [3, 4];
                                        case 3:
                                            return n = i.sent(), this.logger.warn("Could not unban user", n), this.setState(function(t) {
                                                var n;
                                                return {
                                                    moderatedUsers: u.__assign({}, t.moderatedUsers, ((n = {})[e.id] = e, n))
                                                }
                                            }), [3, 4];
                                        case 4:
                                            return [2]
                                    }
                                })
                            })
                        }, t.setClearSearchTextRef = function(e) {
                            return t.clearSearchText = e
                        }, t
                    }
                    return u.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.fetchModeratedUsers(this.props.communityID)
                    }, t.prototype.render = function() {
                        var e = this,
                            t = Object.keys(this.state.moderatedUsers).map(function(t) {
                                return e.state.moderatedUsers[t]
                            });
                        return i.createElement(oe, {
                            title: Object(p.d)("Channel Moderation", "CommunityChannelModeration"),
                            placeholder: Object(p.d)("Search to ban/timeout channels", "CommunityChannelModeration"),
                            displayUsers: t,
                            clearSearchText: this.setClearSearchTextRef,
                            getUserContent: this.getButtonsForUser,
                            description: Object(p.d)("If a channel is violating your rules, you can ban or timeout that channel from streaming to your community. Your moderation actions must adhere to our <x:link>Community Guidelines</x:link>.", {
                                "x:link": function(e) {
                                    return i.createElement("a", {
                                        href: "https://www.twitch.tv/p/legal/community-guidelines/"
                                    }, e)
                                }
                            }, "CommunityChannelModeration")
                        })
                    }, t
                }(i.Component),
                me = Object(d.compose)(Object(c.connect)(null, function(e) {
                    return Object(d.bindActionCreators)({
                        showModal: x.d
                    }, e)
                }), Object(h.a)(re, {
                    name: "unbanUser"
                }), Object(h.a)(ae, {
                    name: "untimeoutUser"
                }))(se),
                ue = "community-moderation-page-error-message";
            ! function(e) {
                e[e.Moderation = 0] = "Moderation", e[e.Settings = 1] = "Settings"
            }(Y || (Y = {}));
            var le = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.renderDefaultContent = function() {
                            return i.createElement(w.Wa, {
                                display: w.X.Flex,
                                flexDirection: w.Z.Column
                            }, i.createElement(w.Wa, {
                                margin: {
                                    bottom: 1
                                }
                            }, i.createElement(w.W, {
                                type: w.Nb.H2
                            }, Object(p.d)("Moderation", "CommunityModerationPage"))), i.createElement(w.Wa, {
                                margin: {
                                    bottom: 1
                                }
                            }, i.createElement(w.zb, null, i.createElement(w.yb, {
                                linkTo: "/communities/" + t.props.match.params.encodedCommunityName + "/moderation/log",
                                active: t.props.activeTab === Y.Moderation
                            }, Object(p.d)("Moderation", "CommunityModerationPageTab")), t.props.showSettingsTab && i.createElement(w.yb, {
                                linkTo: "/communities/" + t.props.match.params.encodedCommunityName + "/moderation/settings",
                                active: t.props.activeTab === Y.Settings
                            }, Object(p.d)("Settings", "CommunityModerationPageTab")))), t.props.children)
                        }, t.renderErrorMessage = function(e) {
                            return i.createElement(w.Wa, {
                                display: w.X.Flex,
                                flexDirection: w.Z.Row,
                                alignItems: w.f.Center,
                                justifyContent: w.Va.Center,
                                padding: 5,
                                "data-test-selector": ue
                            }, i.createElement(w.W, {
                                italic: !0,
                                fontSize: w.Ba.Size4
                            }, e))
                        }, t
                    }
                    return u.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.isLoggedIn || this.props.login()
                    }, t.prototype.render = function() {
                        return this.props.isLoggedIn ? this.props.loading ? i.createElement(w.Ya, {
                            fillContent: !0
                        }) : this.props.error ? this.renderErrorMessage(Object(p.d)("Error loading data. Please try again.", "CommunityModerationPage")) : this.props.userHasPermissionToView ? this.renderDefaultContent() : this.renderErrorMessage(Object(p.d)("You don't have permission to perform that action.", "CommunityModerationPage")) : this.renderErrorMessage(Object(p.d)("You're not logged in.", "CommunityModerationPage"))
                    }, t
                }(i.Component),
                ce = Object(d.compose)(o.a, Object(c.connect)(function(e) {
                    return {
                        isLoggedIn: !!e.session.user
                    }
                }, function(e) {
                    return Object(d.bindActionCreators)({
                        login: function() {
                            return Object(v.e)(f.a.CommunityModeration)
                        }
                    }, e)
                }))(le),
                de = n("2Ygb"),
                pe = n("aDGs");

            function he(e) {
                return function(t) {
                    var n = function(e) {
                        function n() {
                            var t = null !== e && e.apply(this, arguments) || this;
                            return t.logger = p.k.withCategory("with-community-moderation"), t.track = function(e, n) {
                                var i = t.props.data.community,
                                    o = t.props.currentUser,
                                    r = t.props.data.currentUser && t.props.data.currentUser.roles;
                                if (i && o) {
                                    var a = u.__assign({
                                        community_id: i.id,
                                        community_name: i.name,
                                        display_name: i.displayName,
                                        login: o.login,
                                        user_id: o.id,
                                        is_subadmin: r && r.isSiteAdmin || !1,
                                        is_admin: r && r.isStaff
                                    }, n);
                                    p.o.track(e, a)
                                } else t.logger.warn("Failed to track community moderation event")
                            }, t.isCommunityOwner = function() {
                                var e = t.props.data.community;
                                return e && t.props.currentUser && e.owner && e.owner.id === t.props.currentUser.id || !1
                            }, t
                        }
                        return u.__extends(n, e), n.prototype.render = function() {
                            var e = {
                                communityModeration: {
                                    community: this.props.data.community,
                                    currentUserID: this.props.currentUser && this.props.currentUser.id || "",
                                    loading: this.props.data.loading,
                                    error: this.props.data.error,
                                    track: this.track,
                                    isCommunityOwner: this.isCommunityOwner()
                                }
                            };
                            return i.createElement(t, u.__assign({}, e, this.props))
                        }, n.displayName = Object(de.a)(n.name, t), n
                    }(i.Component);
                    return Object(d.compose)(o.a, Object(c.connect)(function(e) {
                        return {
                            currentUser: e.session.user ? {
                                id: e.session.user.id,
                                login: e.session.user.login
                            } : null
                        }
                    }), Object(h.a)(pe, {
                        options: function(t) {
                            return {
                                variables: {
                                    name: decodeURIComponent(t.match.params.encodedCommunityName),
                                    loggedIn: !!t.currentUser,
                                    log: !!e.log,
                                    settings: !!e.settings
                                }
                            }
                        }
                    }))(n)
                }
            }
            var ye, ge = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return u.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.communityModeration.loading || this.props.latencyTracking.reportInteractive()
                    }, t.prototype.componentDidUpdate = function(e) {
                        e.communityModeration.loading && !this.props.communityModeration.loading && this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        var e = this.props.communityModeration.community,
                            t = this.props.communityModeration.loading && !this.props.communityModeration.community,
                            n = !(this.props.communityModeration.loading || !this.props.communityModeration.error && this.props.communityModeration.community),
                            o = e && e.self && e.self.permissions,
                            r = o && (o.banning || o.timingOut) || !1,
                            a = null;
                        return e && (a = i.createElement(me, {
                            communityID: e.id,
                            communityName: e.name,
                            currentUserID: this.props.communityModeration.currentUserID,
                            userCanBan: o && o.banning || !1,
                            userCanTimeout: o && o.timingOut || !1,
                            track: this.props.communityModeration.track
                        })), i.createElement(ce, {
                            loading: t,
                            error: n,
                            userHasPermissionToView: r,
                            activeTab: Y.Moderation,
                            showSettingsTab: this.props.communityModeration.isCommunityOwner
                        }, a)
                    }, t
                }(i.Component),
                fe = Object(d.compose)(Object(_.b)("CommunityModerationLogPage", {
                    autoReportInteractive: !0,
                    destination: j.a.CommunityModeration
                }), Object(M.a)({
                    location: C.PageviewLocation.CommunityModerationLog
                }), he({
                    log: !0
                }))(ge);
            ! function(e) {
                e.TwoFactor = "two_factor_not_enabled", e.EmailVerification = "unverified_email"
            }(ye || (ye = {}));
            var ve, ke = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            working: !1,
                            error: null
                        }, t.logger = p.k.withCategory("community-leader-modal"), t.onClickSave = function() {
                            return u.__awaiter(t, void 0, void 0, function() {
                                var e, t, n, i, o;
                                return u.__generator(this, function(r) {
                                    switch (r.label) {
                                        case 0:
                                            this.setState({
                                                working: !0,
                                                error: null
                                            }), e = Object(p.d)("Failed to save. Please try again.", "CommunityLeaderModal"), r.label = 1;
                                        case 1:
                                            return r.trys.push([1, 3, , 4]), this.logger.debug("Saving new community leader"), [4, B.a.put("/kraken/communities/" + this.props.communityID, {
                                                headers: {
                                                    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
                                                },
                                                body: "owner_user_id=" + this.props.user.id
                                            })];
                                        case 2:
                                            return t = r.sent(), n = null, t.requestError ? n = e : t.error && (i = t.error.message, n = i === ye.TwoFactor ? Object(p.d)("User does not have Two Factor Authorization enabled.", "CommunityLeaderModal") : i === ye.EmailVerification ? Object(p.d)("User has not verified their email.", "CommunityLeaderModal") : e), n ? (this.setState({
                                                working: !1,
                                                error: n
                                            }), [2]) : (this.props.closeModal(), this.props.onSuccess(this.props.user.id), [3, 4]);
                                        case 3:
                                            return o = r.sent(), this.logger.warn("Failed to change community leader", o), this.setState({
                                                working: !1,
                                                error: e
                                            }), [3, 4];
                                        case 4:
                                            return [2]
                                    }
                                })
                            })
                        }, t
                    }
                    return u.__extends(t, e), t.prototype.render = function() {
                        return i.createElement(w.xb, {
                            padding: 2,
                            background: w.r.Base,
                            className: "ban-user-modal"
                        }, i.createElement(w.W, {
                            fontSize: w.Ba.Size4
                        }, Object(p.d)("Are you sure you want to make {user} the new community leader?", {
                            user: this.props.user.displayName
                        }, "CommunityLeaderModal")), i.createElement(w.xb, {
                            margin: {
                                y: 2
                            },
                            borderBottom: !0
                        }, i.createElement(w.Wa, {
                            margin: {
                                bottom: 1
                            }
                        }, i.createElement(w.W, null, Object(p.d)("By changing this setting you will no longer be community leader. This action is irreversible.", "CommunityLeaderModal"))), this.state.error && i.createElement(w.Wa, {
                            margin: {
                                bottom: 1
                            },
                            "data-test-selector": "community-leader-modal-error"
                        }, i.createElement(w.W, {
                            color: w.O.Error
                        }, this.state.error))), i.createElement(w.Wa, {
                            display: w.X.Flex,
                            flexDirection: w.Z.Row,
                            alignItems: w.f.Center,
                            justifyContent: w.Va.Center
                        }, i.createElement(w.z, {
                            type: w.F.Text,
                            onClick: this.props.closeModal
                        }, Object(p.d)("Cancel", "CommunityLeaderModal")), i.createElement(w.Wa, {
                            margin: {
                                left: 2
                            }
                        }, i.createElement(w.z, {
                            onClick: this.onClickSave,
                            state: this.state.working ? w.E.Loading : w.E.Default
                        }, Object(p.d)("Save", "CommunityLeaderModal")))))
                    }, t
                }(i.Component),
                be = Object(c.connect)(null, function(e) {
                    return Object(d.bindActionCreators)({
                        closeModal: x.c
                    }, e)
                })(ke),
                Ce = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.getButtonForUser = function(e) {
                            if (e.id === t.props.currentUserID) return null;
                            return i.createElement(w.Wa, {
                                margin: {
                                    left: .5
                                }
                            }, i.createElement(w.z, {
                                size: w.D.Small,
                                onClick: function() {
                                    return t.onClickSave(e)
                                },
                                type: w.F.Hollow,
                                blurAfterClick: !0
                            }, Object(p.d)("Save", "CommunityLeader")))
                        }, t.onClickSave = function(e) {
                            t.props.showModal(be, {
                                user: e,
                                communityID: t.props.communityID,
                                onSuccess: t.props.onChange
                            })
                        }, t
                    }
                    return u.__extends(t, e), t.prototype.render = function() {
                        return i.createElement(oe, {
                            title: Object(p.d)("Community Leader", "CommunityLeader"),
                            placeholder: Object(p.d)("Search to choose a different leader for this community", "CommunityLeader"),
                            getUserContent: this.getButtonForUser
                        })
                    }, t
                }(i.Component),
                Se = Object(c.connect)(function(e) {
                    return {
                        currentUserID: e.session.user && e.session.user.id || null
                    }
                }, function(e) {
                    return Object(d.bindActionCreators)({
                        showModal: x.d
                    }, e)
                })(Ce),
                _e = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            moderators: {}
                        }, t.logger = p.k.withCategory("community-moderators"), t.getButtonForUser = function(e) {
                            return t.state.moderators[e.id] ? t.renderButton(Object(p.d)("Remove", "CommunityModerators"), function() {
                                return t.onClickRemove(e)
                            }) : t.renderButton(Object(p.d)("Add", "CommunityModerators"), function() {
                                return t.onClickAdd(e)
                            })
                        }, t.renderButton = function(e, t) {
                            return i.createElement(w.Wa, {
                                margin: {
                                    left: .5
                                }
                            }, i.createElement(w.z, {
                                size: w.D.Small,
                                onClick: t,
                                type: w.F.Hollow,
                                blurAfterClick: !0
                            }, e))
                        }, t.onClickAdd = function(e) {
                            return u.__awaiter(t, void 0, void 0, function() {
                                var t;
                                return u.__generator(this, function(n) {
                                    switch (n.label) {
                                        case 0:
                                            this.setState(function(t) {
                                                var n = u.__assign({}, t.moderators);
                                                return n[e.id] = e, {
                                                    moderators: n
                                                }
                                            }), this.logger.debug("Adding moderator"), n.label = 1;
                                        case 1:
                                            return n.trys.push([1, 3, , 4]), [4, B.a.putOrThrow("/kraken/communities/" + this.props.communityID + "/moderators/" + e.id)];
                                        case 2:
                                            return n.sent(), this.props.track(C.SpadeEventType.CommunityRoleEdit, {
                                                target_id: e.id,
                                                edit_role: "moderator",
                                                action: "add"
                                            }), this.logger.debug("Successfully added moderator"), [3, 4];
                                        case 3:
                                            return t = n.sent(), this.logger.warn("Failed to add moderator", {
                                                err: t
                                            }), this.setState(function(t) {
                                                var n = u.__assign({}, t.moderators);
                                                return delete n[e.id], {
                                                    moderators: n
                                                }
                                            }), [3, 4];
                                        case 4:
                                            return [2]
                                    }
                                })
                            })
                        }, t.onClickRemove = function(e) {
                            return u.__awaiter(t, void 0, void 0, function() {
                                var t;
                                return u.__generator(this, function(n) {
                                    switch (n.label) {
                                        case 0:
                                            this.setState(function(t) {
                                                var n = u.__assign({}, t.moderators);
                                                return delete n[e.id], {
                                                    moderators: n
                                                }
                                            }), this.logger.debug("Removing moderator"), n.label = 1;
                                        case 1:
                                            return n.trys.push([1, 3, , 4]), [4, B.a.deleteOrThrow("/kraken/communities/" + this.props.communityID + "/moderators/" + e.id)];
                                        case 2:
                                            return n.sent(), this.props.track(C.SpadeEventType.CommunityRoleEdit, {
                                                target_id: e.id,
                                                edit_role: "moderator",
                                                action: "remove"
                                            }), this.logger.debug("Successfully removed moderator"), [3, 4];
                                        case 3:
                                            return t = n.sent(), this.logger.warn("Failed to remove moderator", {
                                                err: t
                                            }), this.setState(function(t) {
                                                var n = u.__assign({}, t.moderators);
                                                return n[e.id] = e, {
                                                    moderators: n
                                                }
                                            }), [3, 4];
                                        case 4:
                                            return [2]
                                    }
                                })
                            })
                        }, t.fetchModerators = function() {
                            return u.__awaiter(t, void 0, void 0, function() {
                                var e, t, n;
                                return u.__generator(this, function(i) {
                                    switch (i.label) {
                                        case 0:
                                            this.logger.debug("Fetching moderators"), i.label = 1;
                                        case 1:
                                            return i.trys.push([1, 3, , 4]), [4, B.a.getOrThrow("/kraken/communities/" + this.props.communityID + "/moderators")];
                                        case 2:
                                            return e = i.sent(), t = this.normalizeModerators(e.body.moderators), this.setState({
                                                moderators: t
                                            }), this.logger.debug("Successfully fetched moderators"), [3, 4];
                                        case 3:
                                            return n = i.sent(), this.logger.warn("Failed fetching moderators", {
                                                err: n
                                            }), [3, 4];
                                        case 4:
                                            return [2]
                                    }
                                })
                            })
                        }, t.normalizeModerators = function(e) {
                            return e.reduce(function(e, t) {
                                return e[t._id] = {
                                    id: t._id,
                                    login: t.name,
                                    displayName: t.display_name,
                                    avatarUrl: t.logo
                                }, e
                            }, {})
                        }, t
                    }
                    return u.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.fetchModerators()
                    }, t.prototype.render = function() {
                        var e = this,
                            t = Object.keys(this.state.moderators).map(function(t) {
                                return e.state.moderators[t]
                            });
                        return i.createElement(oe, {
                            title: Object(p.d)("Moderators", "CommunityModerators"),
                            placeholder: Object(p.d)("Search to add moderators", "CommunityModerators"),
                            description: Object(p.d)("Moderators can help you manage your community by banning or timing out channels that violate your rules.", "CommunityModerators"),
                            getUserContent: this.getButtonForUser,
                            displayUsers: t
                        })
                    }, t
                }(i.Component),
                we = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.onInputChange = function(e) {
                            var t = e.target.value;
                            n.setState({
                                value: t
                            })
                        }, n.onClickSave = function() {
                            n.props.onClickSave(n.state.value)
                        }, n.state = {
                            value: t.initialValue
                        }, n
                    }
                    return u.__extends(t, e), t.prototype.componentWillReceiveProps = function(e) {
                        e.initialValue !== this.props.initialValue && this.setState({
                            value: e.initialValue
                        })
                    }, t.prototype.render = function() {
                        return i.createElement(w.Wa, null, i.createElement(w.Wa, {
                            margin: {
                                bottom: .5
                            }
                        }, i.createElement(w.W, {
                            bold: !0
                        }, this.props.title)), this.props.description && i.createElement(w.Wa, {
                            margin: {
                                bottom: .5
                            }
                        }, i.createElement(w.W, null, this.props.description)), i.createElement(w.Wa, {
                            display: w.X.Flex,
                            flexDirection: w.Z.Row,
                            alignItems: w.f.Center,
                            justifyContent: w.Va.Between
                        }, i.createElement(w.Wa, {
                            flexGrow: 1
                        }, i.createElement(w.Qa, {
                            type: w.Sa.Text,
                            value: this.state.value,
                            onChange: this.onInputChange
                        })), i.createElement(w.Wa, {
                            margin: {
                                left: 1
                            }
                        }, i.createElement(w.z, {
                            state: this.props.saving ? w.E.Loading : w.E.Default,
                            onClick: this.onClickSave,
                            disabled: !this.state.value || this.state.value === this.props.initialValue
                        }, Object(p.d)("Save", "CommunitySettingInput")))), this.props.error && i.createElement(w.Wa, {
                            margin: {
                                bottom: 1
                            },
                            "data-test-selector": "community-setting-input-error"
                        }, i.createElement(w.W, {
                            color: w.O.Error
                        }, this.props.error)))
                    }, t
                }(i.Component);
            ! function(e) {
                e.DESCRIPTION_TOO_LONG = "DESCRIPTION_TOO_LONG", e.DISPLAY_NAME_INVALID = "DISPLAY_NAME_INVALID", e.REQUESTING_USER_NOT_PERMITTED = "REQUESTING_USER_NOT_PERMITTED", e.RULES_TOO_LONG = "RULES_TOO_LONG", e.SUMMARY_TOO_LONG = "SUMMARY_TOO_LONG"
            }(ve || (ve = {}));
            var Ne = n("xRdu"),
                Ee = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            saving: !1,
                            error: null
                        }, t.logger = p.k.withCategory("display-name-input"), t.onClickSave = function(e) {
                            return u.__awaiter(t, void 0, void 0, function() {
                                var t, n, i, o;
                                return u.__generator(this, function(r) {
                                    switch (r.label) {
                                        case 0:
                                            this.setState({
                                                saving: !0,
                                                error: null
                                            }), this.logger.debug("Saving community display name"), t = Object(p.d)("Failed to save. Please try again.", "DisplaynameInput"), r.label = 1;
                                        case 1:
                                            return r.trys.push([1, 3, , 4]), [4, this.props.updateCommunity(Object(b.a)({
                                                communityID: this.props.communityID,
                                                displayName: e
                                            }))];
                                        case 2:
                                            return n = r.sent(), i = null, n.data.editCommunity ? n.data.editCommunity.error && (i = n.data.editCommunity.error === ve.DISPLAY_NAME_INVALID ? Object(p.d)("Display name is invalid.", "DisplayNameInput") : t) : i = t, i ? (this.logger.warn("Failed saving community display name"), this.setState({
                                                saving: !1,
                                                error: i
                                            }), [2]) : (this.logger.debug("Success saving community display name"), this.setState({
                                                saving: !1,
                                                error: null
                                            }), [3, 4]);
                                        case 3:
                                            return o = r.sent(), this.logger.warn("Failed saving community display name", {
                                                err: o
                                            }), this.setState({
                                                saving: !1,
                                                error: t
                                            }), [3, 4];
                                        case 4:
                                            return [2]
                                    }
                                })
                            })
                        }, t
                    }
                    return u.__extends(t, e), t.prototype.render = function() {
                        return i.createElement(we, {
                            initialValue: this.props.displayName,
                            onClickSave: this.onClickSave,
                            saving: this.state.saving,
                            error: this.state.error,
                            title: Object(p.d)("Display Name", "DisplayNameInput")
                        })
                    }, t
                }(i.Component),
                Oe = Object(h.a)(Ne, {
                    name: "updateCommunity"
                })(Ee),
                Te = n("cr+I"),
                Ue = n("a+WB"),
                De = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            saving: !1,
                            error: null
                        }, t.logger = p.k.withCategory("moderation-email-input"), t.onClickSave = function(e) {
                            return u.__awaiter(t, void 0, void 0, function() {
                                var t, n;
                                return u.__generator(this, function(i) {
                                    switch (i.label) {
                                        case 0:
                                            this.setState({
                                                saving: !0,
                                                error: null
                                            }), i.label = 1;
                                        case 1:
                                            return i.trys.push([1, 3, , 4]), t = Te.stringify({
                                                email: e
                                            }), [4, B.a.putOrThrow("/kraken/communities/" + this.props.communityID, {
                                                headers: {
                                                    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
                                                },
                                                body: t
                                            })];
                                        case 2:
                                            return i.sent(), this.setState({
                                                saving: !1,
                                                error: null
                                            }), Object(b.e)(Ue, {
                                                name: this.props.communityName
                                            }, function(t) {
                                                return t.community ? u.__assign({}, t, {
                                                    community: u.__assign({}, t.community, {
                                                        email: e
                                                    })
                                                }) : t
                                            }), this.logger.debug("Successfully saved email."), [3, 4];
                                        case 3:
                                            return n = i.sent(), this.logger.warn("Failed saving email.", {
                                                err: n
                                            }), this.setState({
                                                saving: !1,
                                                error: Object(p.d)("Failed to save. Please try again.", "ModerationEmailInput")
                                            }), [3, 4];
                                        case 4:
                                            return [2]
                                    }
                                })
                            })
                        }, t
                    }
                    return u.__extends(t, e), t.prototype.render = function() {
                        return i.createElement(we, {
                            initialValue: this.props.email,
                            onClickSave: this.onClickSave,
                            saving: this.state.saving,
                            error: this.state.error,
                            title: Object(p.d)("Moderation email address", "ModerationEmailInput"),
                            description: Object(p.d)("Used to receive email notifications when channels are reported for violating your Community's rules or when a moderation action is taken. <x:link>Learn more</x:link>.", {
                                "x:link": function(e) {
                                    return i.createElement("a", {
                                        href: "https://help.twitch.tv/customer/portal/articles/2737498-communities-policies-and-guide"
                                    }, e)
                                }
                            }, "ModerationEmailInput")
                        })
                    }, t
                }(i.Component),
                Fe = (n("s9IZ"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onChangeCommunityLeader = function(e) {
                            t.props.communityModeration.track(C.SpadeEventType.CommunityRoleEdit, {
                                target_id: e,
                                edit_role: "owner",
                                action: "add"
                            }), t.props.history.push("/communities/" + t.props.match.params.encodedCommunityName)
                        }, t
                    }
                    return u.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.communityModeration.loading || this.props.latencyTracking.reportInteractive()
                    }, t.prototype.componentDidUpdate = function(e) {
                        e.communityModeration.loading && !this.props.communityModeration.loading && this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        var e = this.props.communityModeration.loading && !this.props.communityModeration.community,
                            t = !(this.props.communityModeration.loading || !this.props.communityModeration.error && this.props.communityModeration.community),
                            n = this.props.communityModeration.community,
                            o = n && n.id || "";
                        return i.createElement(ce, {
                            loading: e,
                            error: t,
                            userHasPermissionToView: this.props.communityModeration.isCommunityOwner,
                            activeTab: Y.Settings,
                            showSettingsTab: !0
                        }, i.createElement(Se, {
                            communityID: o,
                            onChange: this.onChangeCommunityLeader
                        }), i.createElement(w.xb, {
                            border: !0,
                            padding: 1,
                            margin: {
                                y: 1
                            },
                            className: "community-moderation-settings__inputs"
                        }, i.createElement(Oe, {
                            displayName: n && n.displayName || "",
                            communityID: o
                        }), i.createElement(w.Wa, {
                            margin: {
                                top: 2
                            }
                        }, i.createElement(De, {
                            email: n && n.email || "",
                            communityID: o,
                            communityName: n && n.name || ""
                        }))), i.createElement(w.Wa, {
                            margin: {
                                top: 1
                            }
                        }, i.createElement(_e, {
                            communityID: o,
                            track: this.props.communityModeration.track
                        })))
                    }, t
                }(i.Component)),
                Ie = Object(d.compose)(Object(_.b)("CommunityModerationSettingsPage", {
                    destination: j.a.CommunityModeration
                }), Object(M.a)({
                    location: C.PageviewLocation.CommunityModerationSettings
                }), o.a, he({
                    settings: !0
                }))(Fe),
                Me = function(e) {
                    return i.createElement(r.a, {
                        to: "/communities/" + e.match.params.encodedCommunityName + "/moderation/log"
                    })
                },
                je = function(e) {
                    return e.match.params.page && "log" !== e.match.params.page && "settings" !== e.match.params.page ? i.createElement(m.a, null) : i.createElement(w.Wa, null, i.createElement(I, {
                        communityName: decodeURIComponent(e.match.params.encodedCommunityName)
                    }), i.createElement(w.Wa, {
                        padding: 3
                    }, i.createElement(s.a, null, i.createElement(a.a, {
                        path: "/communities/:encodedCommunityName/moderation/log",
                        component: fe
                    }), i.createElement(a.a, {
                        path: "/communities/:encodedCommunityName/moderation/settings",
                        component: Ie
                    }), i.createElement(a.a, {
                        path: "/communities/:encodedCommunityName/moderation",
                        exact: !0,
                        render: Me
                    }), i.createElement(a.a, {
                        path: "/communities/:encodedCommunityName/",
                        component: m.a
                    }))))
                },
                xe = Object(o.a)(je);
            n.d(t, "CommunityModerationRootPresentation", function() {
                return je
            }), n.d(t, "CommunityModerationRoot", function() {
                return xe
            })
        },
        "q+lQ": function(e, t, n) {},
        s9IZ: function(e, t, n) {},
        uCyD: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "mutation",
                    name: {
                        kind: "Name",
                        value: "CommunityStreamTimeout_TimeoutUser"
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
                                    value: "TimeoutUserFromCommunityInput"
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
                                value: "timeoutUserFromCommunity"
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
                                        value: "community"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "id"
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
                    end: 159
                }
            };
            n.loc.source = {
                body: "mutation CommunityStreamTimeout_TimeoutUser($input: TimeoutUserFromCommunityInput!) {\ntimeoutUserFromCommunity(input: $input) {\ncommunity {\nid\nname\n}\nerror\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        xRdu: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "mutation",
                    name: {
                        kind: "Name",
                        value: "UpdateCommunityDisplayName"
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
                                    value: "EditCommunityInput"
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
                                value: "editCommunity"
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
                                        value: "community"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "Field",
                                            name: {
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
                    end: 136
                }
            };
            n.loc.source = {
                body: "mutation UpdateCommunityDisplayName($input: EditCommunityInput!) {\neditCommunity(input: $input) {\ncommunity {\nid\ndisplayName\n}\nerror\n}\n}",
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