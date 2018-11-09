(window.webpackJsonp = window.webpackJsonp || []).push([
    [159], {
        "4HoE": function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "mutation",
                    name: {
                        kind: "Name",
                        value: "ModUser"
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
                                    value: "ModUserInput"
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
                                value: "modUser"
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
                                        value: "channel"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
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
                                        value: "target"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "Field",
                                            name: {
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
                    end: 119
                }
            };
            n.loc.source = {
                body: "mutation ModUser($input: ModUserInput!){\nmodUser(input: $input) {\nchannel {\nid\n}\ntarget {\nid\nlogin\n}\nerror {\ncode\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        "91YW": function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "UserRolesCacheQuery"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "channelID"
                            }
                        },
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "ID"
                                }
                            }
                        }
                    }, {
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "includeEditors"
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
                                value: "includeMods"
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
                                value: "includeVIPs"
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
                                value: "modsCursor"
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
                                value: "vipsCursor"
                            }
                        },
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "Cursor"
                            }
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
                                    value: "id"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "channelID"
                                    }
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
                                        value: "editors"
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
                                                    value: "includeEditors"
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
                                                        value: "grantedAt"
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
                                                                value: "displayName"
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
                                                                value: "profileImageURL"
                                                            },
                                                            arguments: [{
                                                                kind: "Argument",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "width"
                                                                },
                                                                value: {
                                                                    kind: "IntValue",
                                                                    value: "50"
                                                                }
                                                            }],
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
                                        value: "mods"
                                    },
                                    arguments: [{
                                        kind: "Argument",
                                        name: {
                                            kind: "Name",
                                            value: "first"
                                        },
                                        value: {
                                            kind: "IntValue",
                                            value: "100"
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
                                                value: "modsCursor"
                                            }
                                        }
                                    }],
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
                                                    value: "includeMods"
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
                                                        value: "grantedAt"
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
                                                                value: "displayName"
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
                                                                value: "profileImageURL"
                                                            },
                                                            arguments: [{
                                                                kind: "Argument",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "width"
                                                                },
                                                                value: {
                                                                    kind: "IntValue",
                                                                    value: "50"
                                                                }
                                                            }],
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
                                        value: "vips"
                                    },
                                    arguments: [{
                                        kind: "Argument",
                                        name: {
                                            kind: "Name",
                                            value: "first"
                                        },
                                        value: {
                                            kind: "IntValue",
                                            value: "100"
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
                                                value: "vipsCursor"
                                            }
                                        }
                                    }],
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
                                                    value: "includeVIPs"
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
                                                        value: "grantedAt"
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
                                                                value: "displayName"
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
                                                                value: "profileImageURL"
                                                            },
                                                            arguments: [{
                                                                kind: "Argument",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "width"
                                                                },
                                                                value: {
                                                                    kind: "IntValue",
                                                                    value: "50"
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
                }],
                loc: {
                    start: 0,
                    end: 615
                }
            };
            n.loc.source = {
                body: "query UserRolesCacheQuery ($channelID: ID! $includeEditors: Boolean! $includeMods: Boolean! $includeVIPs: Boolean! $modsCursor: Cursor $vipsCursor: Cursor) {\nuser(id: $channelID) {\nid\neditors @include(if: $includeEditors) {\nedges {\ncursor\ngrantedAt\nnode {\nid\ndisplayName\nlogin\nprofileImageURL(width: 50)\n}\n}\n}\nmods(first: 100 after: $modsCursor) @include(if: $includeMods) {\nedges {\ncursor\ngrantedAt\nnode {\nid\ndisplayName\nlogin\nprofileImageURL(width: 50)\n}\n}\n}\nvips(first: 100 after: $vipsCursor) @include(if: $includeVIPs) {\nedges {\ncursor\ngrantedAt\nnode {\nid\ndisplayName\nlogin\nprofileImageURL(width: 50)\n}\n}\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        AKV8: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return i
            }), n.d(t, "b", function() {
                return s
            });
            var i, r = n("mrSG"),
                a = n("yR8l"),
                o = n("4HoE");

            function s(e) {
                var t = this;
                return Object(a.a)(o, {
                    props: function(n) {
                        return {
                            modUserMutation: function(i) {
                                return r.__awaiter(t, void 0, void 0, function() {
                                    var t;
                                    return r.__generator(this, function(r) {
                                        if (t = e(n.ownProps).channelID, n.mutate) return [2, n.mutate({
                                            variables: {
                                                input: {
                                                    channelID: t,
                                                    targetLogin: i
                                                }
                                            }
                                        }).then(function(e) {
                                            return e.data
                                        })];
                                        throw new Error("modUser mutation is not ready")
                                    })
                                })
                            }
                        }
                    }
                })
            }! function(e) {
                e.ChannelNotFound = "CHANNEL_NOT_FOUND", e.Forbidden = "FORBIDDEN", e.UserAlreadyModded = "TARGET_ALREADY_MOD", e.UserBanned = "TARGET_IS_CHAT_BANNED", e.UserNotFound = "TARGET_NOT_FOUND"
            }(i || (i = {}))
        },
        AXTS: function(e, t, n) {
            "use strict";
            var i = n("mrSG"),
                r = n("q1tI"),
                a = n("/7QA"),
                o = n("8/mp"),
                s = n("Kw8/"),
                l = n("Ue10"),
                d = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        var e = this,
                            t = this.props.users;
                        return r.createElement(l.u, {
                            noTail: !0,
                            offsetY: "-0.5px",
                            show: !!t && this.props.show
                        }, r.createElement(o.b, null, r.createElement(l.Xa, {
                            alignItems: l.f.Center,
                            display: l.X.Flex,
                            flexDirection: l.Aa.Column,
                            justifyContent: l.Wa.Center
                        }, t && t.length > 0 ? t.map(function(t, n) {
                            return r.createElement(s.c, {
                                key: n,
                                onBlur: e.props.onOptionBlur,
                                onClick: e.props.onOptionClick,
                                user: t
                            })
                        }) : r.createElement(l.Xa, {
                            alignItems: l.f.Center,
                            display: l.X.Flex,
                            flexDirection: l.Aa.Column,
                            justifyContent: l.Wa.Center,
                            padding: {
                                x: 1,
                                y: 5
                            }
                        }, r.createElement(l.sb, {
                            asset: l.tb.SearchNoResults
                        }), r.createElement(l.W, null, Object(a.d)("No users found", "SearchUsersDropdown"))))))
                    }, t
                }(r.Component);
            n.d(t, "a", function() {
                return d
            })
        },
        "CpU+": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return o
            });
            var i = n("mrSG"),
                r = n("yR8l"),
                a = n("JiJH");

            function o() {
                var e = this;
                return Object(r.a)(a, {
                    props: function(t) {
                        return {
                            unVIPUserMutation: function(n) {
                                return i.__awaiter(e, void 0, void 0, function() {
                                    return i.__generator(this, function(e) {
                                        switch (e.label) {
                                            case 0:
                                                return t.mutate ? [4, t.mutate({
                                                    variables: {
                                                        input: {
                                                            channelID: t.ownProps.channelID,
                                                            revokeeLogin: n
                                                        }
                                                    }
                                                })] : [2];
                                            case 1:
                                                return [2, e.sent().data]
                                        }
                                    })
                                })
                            }
                        }
                    }
                })
            }
        },
        FAYk: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "mutation",
                    name: {
                        kind: "Name",
                        value: "UnmodUser"
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
                                    value: "UnmodUserInput"
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
                                value: "unmodUser"
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
                                        value: "channel"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
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
                                        value: "target"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
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
                    end: 119
                }
            };
            n.loc.source = {
                body: "mutation UnmodUser($input: UnmodUserInput!){\nunmodUser(input: $input) {\nchannel {\nid\n}\ntarget {\nid\n}\nerror {\ncode\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        Jfrt: function(e, t, n) {},
        JiJH: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "mutation",
                    name: {
                        kind: "Name",
                        value: "UnVIPUser"
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
                                    value: "RevokeVIPInput"
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
                                value: "revokeVIP"
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
                                        value: "channel"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
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
                                        value: "revokee"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "Field",
                                            name: {
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
                    end: 126
                }
            };
            n.loc.source = {
                body: "mutation UnVIPUser($input: RevokeVIPInput!){\nrevokeVIP(input: $input) {\nchannel {\nid\n}\nrevokee {\nid\nlogin\n}\nerror {\ncode\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        "Kw8/": function(e, t, n) {
            "use strict";
            var i = n("mrSG"),
                r = n("q1tI"),
                a = n("/7QA"),
                o = n("8Ad5"),
                s = n("Ue10"),
                l = (n("sZ5a"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            focused: !1,
                            hovered: !1
                        }, t.handleKeyDown = function(e) {
                            var n = e.keyCode;
                            n !== o.a.Space && n !== o.a.Enter || t.handleClick()
                        }, t.handleClick = function() {
                            t.props.onClick(t.props.user)
                        }, t.handleBlur = function(e) {
                            e.persist(), t.setState({
                                focused: !1
                            }, function() {
                                t.props.onBlur(e.relatedTarget)
                            })
                        }, t.handleFocus = function() {
                            t.setState({
                                focused: !0
                            })
                        }, t.handleMouseOver = function() {
                            t.setState({
                                hovered: !0
                            })
                        }, t.handleMouseOut = function() {
                            t.state.hovered && t.setState({
                                hovered: !1
                            })
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        var e, t, n = this.props.user;
                        return r.createElement("div", i.__assign({
                            className: "roles-page-search-user-option",
                            onBlur: this.handleBlur,
                            onFocus: this.handleFocus,
                            onMouseOver: this.handleMouseOver,
                            onMouseOut: this.handleMouseOut,
                            onKeyDown: this.handleKeyDown,
                            tabIndex: 0
                        }, ((e = {})["data-component-type"] = ["roles-page-search-user-option"], e)), r.createElement(s.Ua, i.__assign({
                            hover: this.state.hovered,
                            onClick: this.handleClick,
                            selected: this.state.focused,
                            tabIndex: -1,
                            type: s.Va.Base
                        }, ((t = {})["data-component-type"] = ["roles-page-search-user-option"], t)), r.createElement(s.Xa, {
                            alignItems: s.f.Center,
                            display: s.X.Flex,
                            justifyContent: s.Wa.Start,
                            padding: {
                                x: 1,
                                y: .5
                            }
                        }, r.createElement(s.Xa, {
                            margin: {
                                right: .5
                            }
                        }, r.createElement(s.q, {
                            alt: Object(a.d)("Avatar", "SearchUsersOption"),
                            src: n.profile_image,
                            size: 30
                        })), n.name)))
                    }, t
                }(r.Component));
            n.d(t, "a", function() {
                return "data-component-type"
            }), n.d(t, "b", function() {
                return "roles-page-search-user-option"
            }), n.d(t, "c", function() {
                return l
            })
        },
        "LQi+": function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "RolesPageQuery"
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
                                }]
                            }
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 82
                }
            };
            n.loc.source = {
                body: "query RolesPageQuery($channelLogin: String!) {\nuser(login: $channelLogin) {\nid\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        MQ8I: function(e, t, n) {},
        OBYv: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "mutation",
                    name: {
                        kind: "Name",
                        value: "AddEditorUser"
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
                                    value: "AddEditorInput"
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
                                value: "addEditor"
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
                                        value: "channel"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
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
                                        value: "targetUser"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
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
                    end: 127
                }
            };
            n.loc.source = {
                body: "mutation AddEditorUser($input: AddEditorInput!){\naddEditor(input: $input) {\nchannel {\nid\n}\ntargetUser {\nid\n}\nerror {\ncode\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        eqbG: function(e, t, n) {},
        fKMw: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return o
            });
            var i = n("mrSG"),
                r = n("yR8l"),
                a = n("sMoq");

            function o() {
                var e = this;
                return Object(r.a)(a, {
                    props: function(t) {
                        return {
                            vipUserMutation: function(n) {
                                return i.__awaiter(e, void 0, void 0, function() {
                                    return i.__generator(this, function(e) {
                                        switch (e.label) {
                                            case 0:
                                                return t.mutate ? [4, t.mutate({
                                                    variables: {
                                                        input: {
                                                            channelID: t.ownProps.channelID,
                                                            granteeLogin: n
                                                        }
                                                    }
                                                })] : [2];
                                            case 1:
                                                return [2, e.sent().data]
                                        }
                                    })
                                })
                            }
                        }
                    }
                })
            }
        },
        qcBk: function(e, t, n) {
            "use strict";
            n.r(t);
            var i, r, a = n("mrSG"),
                o = n("q1tI"),
                s = n("fvjX"),
                l = n("ZDlU"),
                d = n("yR8l"),
                c = n("V+GM"),
                u = n("NvVO"),
                m = n("2xye"),
                p = n("GnwI"),
                h = n("1rIY");
            ! function(e) {
                e[e.ADD_USER = 0] = "ADD_USER", e[e.DEFAULT = 1] = "DEFAULT", e[e.LOADING = 2] = "LOADING", e[e.NO_USERS = 3] = "NO_USERS"
            }(r || (r = {}));
            var f = (i = Object(h.a)("RolesPageViewContext", {
                    setView: function() {
                        return null
                    },
                    view: r.LOADING
                })).InnerProvider,
                v = i.withContext,
                g = function(e) {
                    return e
                };

            function k(e) {
                return v(g)(e)
            }
            var E, C, I, y = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.setView = function(e) {
                            n.setState({
                                view: e
                            })
                        }, n.state = {
                            setView: n.setView,
                            view: r.LOADING
                        }, n
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        return o.createElement(f, {
                            value: this.state
                        }, this.props.children)
                    }, t
                }(o.Component),
                b = n("Ue10"),
                S = n("/7QA"),
                N = n("IFXb"),
                D = n("5NYc"),
                _ = n("vYsf"),
                O = n("NAv5"),
                U = n("91YW");
            ! function(e) {
                e[e.ALL_ROLES = 0] = "ALL_ROLES", e[e.EDITOR = 1] = "EDITOR", e[e.MODERATOR = 2] = "MODERATOR", e[e.VIP = 3] = "VIP"
            }(C || (C = {})),
            function(e) {
                e.IS_EDITOR = "isEditor", e.IS_MOD = "isMod", e.IS_VIP = "isVIP"
            }(I || (I = {}));
            var A = (E = Object(h.a)("UserRolesCacheContext", {
                    modifyUserInCache: function() {
                        return null
                    },
                    filterType: C.ALL_ROLES,
                    setFilterType: function() {
                        return null
                    },
                    totalVIPs: 0,
                    userCache: {}
                })).InnerProvider,
                M = E.withContext,
                T = function(e) {
                    return e
                };

            function w(e) {
                return M(T)(e)
            }
            var F, L = 1,
                R = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.queryCount = L, n.modifyUserInCache = function(e, t) {
                            var i = e.id;
                            i && n.setState(function(t) {
                                var n, r = t.totalVIPs,
                                    o = t.userCache,
                                    s = o[i] || {};
                                return {
                                    userCache: a.__assign({}, o, (n = {}, n[i] = a.__assign({}, s, e), n)),
                                    totalVIPs: r + (s.isVIP !== e.isVIP && (e.isVIP ? 1 : -1) || 0)
                                }
                            }, function() {
                                t && t()
                            })
                        }, n.setUserCache = function(e, t, n) {
                            for (var i, r = 0, a = t; r < a.length; r++) {
                                var o = a[r],
                                    s = o.node;
                                if (s) {
                                    var l = s.id;
                                    if (l) {
                                        i = o.cursor;
                                        var d = o.grantedAt,
                                            c = e[l] || {
                                                displayName: s.displayName,
                                                channelLogin: s.login,
                                                id: s.id,
                                                lastModified: d,
                                                profileImageURL: s.profileImageURL,
                                                isEditor: !1,
                                                isMod: !1,
                                                isVIP: !1
                                            };
                                        c[n] = !0, c.isMod && c.isVIP && (c.isVIP = !1), c.lastModified = Object(O.max)(c.lastModified, new Date(d)), e[l] = c
                                    }
                                }
                            }
                            return {
                                cursor: i,
                                userCache: e
                            }
                        }, n.fetchMore = function(e, t) {
                            return a.__awaiter(n, void 0, void 0, function() {
                                var n;
                                return a.__generator(this, function(i) {
                                    switch (i.label) {
                                        case 0:
                                            return [4, this.props.data.fetchMore({
                                                query: U,
                                                variables: {
                                                    channelID: this.props.channelID,
                                                    includeEditors: !1,
                                                    includeMods: !!e,
                                                    includeVIPs: !!t,
                                                    modsCursor: e,
                                                    vipsCursor: t
                                                },
                                                updateQuery: function(e, t) {
                                                    if (!t.fetchMoreResult.user) return e;
                                                    var n = t.fetchMoreResult.user,
                                                        i = n.mods,
                                                        r = n.vips;
                                                    return {
                                                        user: a.__assign({}, t.fetchMoreResult.user, {
                                                            mods: i || null,
                                                            vips: r || null
                                                        })
                                                    }
                                                }
                                            })];
                                        case 1:
                                            return n = i.sent(), this.updateUserCache(n.data), [2]
                                    }
                                })
                            })
                        }, n.setFilterType = function(e) {
                            e !== n.state.filterType && n.setState(function(t) {
                                var n = t.userCache;
                                return {
                                    filterType: e,
                                    userCache: Object.keys(n).reduce(function(e, t) {
                                        var i = n[t];
                                        return (i.isEditor || i.isMod || i.isVIP) && (e[t] = i), e
                                    }, {})
                                }
                            })
                        }, n.state = {
                            modifyUserInCache: n.modifyUserInCache,
                            filterType: C.ALL_ROLES,
                            setFilterType: n.setFilterType,
                            totalVIPs: 0,
                            userCache: {}
                        }, n
                    }
                    return a.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.updateUserCache()
                    }, t.prototype.componentDidUpdate = function(e) {
                        var t = this;
                        e.channelID !== this.props.channelID && this.setState({
                            userCache: {}
                        }, function() {
                            t.queryCount = L
                        }), e.data.loading && this.updateUserCache()
                    }, t.prototype.render = function() {
                        return this.props.data.error ? o.createElement(l.a, {
                            message: Object(S.d)("Whoops, something went wrong.", "UserRolesContext")
                        }) : this.props.view === r.LOADING ? o.createElement(b.Za, {
                            fillContent: !0
                        }) : o.createElement(A, {
                            value: this.state
                        }, this.props.children)
                    }, t.prototype.updateUserCache = function(e) {
                        var t = this;
                        void 0 === e && (e = this.props.data);
                        var n, i, o = e.error,
                            s = e.loading,
                            l = e.user;
                        o || s || !l || this.props.view !== r.LOADING || this.setState(function(e) {
                            var r = a.__assign({}, e);
                            if (r.userCache || (r.userCache = {}), l.editors && l.editors.edges) {
                                var o = t.setUserCache(r.userCache, l.editors.edges, I.IS_EDITOR).userCache;
                                r.userCache = a.__assign({}, r.userCache, o)
                            }
                            if (l.mods && l.mods.edges) {
                                var s = t.setUserCache(r.userCache, l.mods.edges, I.IS_MOD),
                                    d = s.cursor;
                                o = s.userCache;
                                n = d, r.userCache = a.__assign({}, r.userCache, o)
                            }
                            if (l.vips && l.vips.edges) {
                                var c = t.setUserCache(r.userCache, l.vips.edges, I.IS_VIP);
                                d = c.cursor, o = c.userCache;
                                i = d, r.userCache = a.__assign({}, r.userCache, o), r.totalVIPs = e.totalVIPs + l.vips.edges.length
                            }
                            var u = l.id;
                            return u && r.userCache && r.userCache[u] && delete r.userCache[u], r
                        }, function() {
                            return a.__awaiter(t, void 0, void 0, function() {
                                return a.__generator(this, function(e) {
                                    switch (e.label) {
                                        case 0:
                                            return this.queryCount <= 5 && (n || i) ? [4, this.fetchMore(n, i)] : [3, 2];
                                        case 1:
                                            return e.sent(), this.queryCount++, [3, 3];
                                        case 2:
                                            this.props.latencyTracking.reportInteractive(), this.props.setView(0 === Object.keys(this.state.userCache).length ? r.NO_USERS : r.DEFAULT), e.label = 3;
                                        case 3:
                                            return [2]
                                    }
                                })
                            })
                        })
                    }, t
                }(o.Component),
                P = Object(s.compose)(k, Object(p.b)("WithUserRolesCacheProvider"), Object(d.a)(U, {
                    options: function(e) {
                        return {
                            fetchPolicy: "network-only",
                            variables: {
                                channelID: e.channelID,
                                includeEditors: !0,
                                includeMods: !0,
                                includeVIPs: !0
                            }
                        }
                    }
                }))(R),
                V = (F = Object(h.a)("ChannelVIPContext", {
                    maxVIPUserLimit: 0,
                    isAtMaxVIPUserLimit: !1,
                    isVIPUnlocked: !1
                })).InnerProvider,
                x = F.withContext,
                B = function(e) {
                    return e
                };

            function j(e) {
                return x(B)(e)
            }
            var X, G, W = w(function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.state = {
                            maxVIPUserLimit: 0,
                            isVIPUnlocked: !1
                        }, n
                    }
                    return a.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.fetchVIPQuestData()
                    }, t.prototype.componentDidUpdate = function(e) {
                        e.channelID || this.fetchVIPQuestData()
                    }, t.prototype.render = function() {
                        var e = this.state.maxVIPUserLimit;
                        return o.createElement(V, {
                            value: a.__assign({}, this.state, {
                                isAtMaxVIPUserLimit: !(this.props.totalVIPs !== e || !e)
                            })
                        }, this.props.children)
                    }, t.prototype.fetchVIPQuestData = function() {
                        return a.__awaiter(this, void 0, void 0, function() {
                            var e, t, n, i, r;
                            return a.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        if (!(e = this.props.channelID)) return [2];
                                        a.label = 1;
                                    case 1:
                                        return a.trys.push([1, 3, , 4]), [4, Object(_.a)(e)];
                                    case 2:
                                        for (t = a.sent(), n = 0, i = t; n < i.length; n++)
                                            if ((r = i[n]).key === D.b.VIP_BADGE) return this.setState({
                                                maxVIPUserLimit: r.reward && r.reward.limit || 0,
                                                isVIPUnlocked: r.is_complete
                                            }), [2];
                                        return [3, 4];
                                    case 3:
                                        return a.sent(), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, t
                }(o.Component)),
                H = n("GIFg"),
                q = n("kYmV"),
                $ = n("cuu2"),
                z = "https://help.twitch.tv/customer/en/portal/articles/659115-twitch-chat-badges-guide",
                Q = "https://static-cdn.jtvnw.net/badges/v1/3267646d-33f0-4b17-b3df-f923a41db1d0/2",
                K = "https://static-cdn.jtvnw.net/badges/v1/b817aba4-fad8-49e2-b88a-7cc744dfa6ec/2",
                Y = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        return o.createElement(H.a, null, o.createElement($.a, {
                            learnMoreUrl: z,
                            page: q.b.Roles
                        }))
                    }, t
                }(o.Component);
            ! function(e) {
                e[e.ALL_MUTATIONS_FAILED = 0] = "ALL_MUTATIONS_FAILED", e[e.ALL_MUTATIONS_SUCCEEDED = 1] = "ALL_MUTATIONS_SUCCEEDED", e[e.MAX_VIPS_REACHED = 2] = "MAX_VIPS_REACHED", e[e.SOME_MUTATIONS_FAILED = 3] = "SOME_MUTATIONS_FAILED"
            }(G || (G = {}));
            var J = (X = Object(h.a)("RolesPageMessageContext", {
                    clearMessage: function() {
                        return null
                    },
                    message: null,
                    setMessage: function() {
                        return null
                    }
                })).InnerProvider,
                Z = X.withContext,
                ee = function(e) {
                    return e
                };

            function te(e) {
                return Z(ee)(e)
            }
            var ne, ie, re = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.clearMessage = function() {
                            n.setState({
                                message: null
                            })
                        }, n.setMessage = function(e) {
                            n.setState({
                                message: e
                            })
                        }, n.state = {
                            clearMessage: n.clearMessage,
                            message: null,
                            setMessage: n.setMessage
                        }, n
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        return o.createElement(J, {
                            value: this.state
                        }, this.props.children)
                    }, t
                }(o.Component),
                ae = n("/MKj"),
                oe = n("aCAx");
            ! function(e) {
                e.FATAL = "FATAL"
            }(ie || (ie = {}));
            var se = (ne = Object(h.a)("MutateUserRolesContext", {
                    mutateUser: function() {
                        return Promise.resolve({
                            editorError: null,
                            modError: null,
                            vipError: null
                        })
                    }
                })).InnerProvider,
                le = ne.withContext,
                de = function(e) {
                    return e
                };

            function ce(e) {
                return le(de)(e)
            }
            var ue = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.mutateUser = function(e) {
                            return a.__awaiter(n, void 0, void 0, function() {
                                var t, n, i, r, o, s, l, d, c, u, m, p, h, f;
                                return a.__generator(this, function(a) {
                                    switch (a.label) {
                                        case 0:
                                            return t = e.channelLogin, (n = e.id) && t ? (i = this.props.userCache, r = i[n] || {
                                                isEditor: !1,
                                                isMod: !1,
                                                isVIP: !1
                                            }, o = e.isEditor, s = e.isMod, l = e.isVIP, d = !!o !== r.isEditor, c = !!s !== r.isMod, u = this.props.isVIPUnlocked && !!l !== r.isVIP, [4, Promise.all([d ? this.mutateEditor(t, !!o) : this.genericPromise(), c ? this.mutateMod(t, !!s) : this.genericPromise(), u ? this.mutateVIP(t, !!l) : this.genericPromise()])]) : [2, ie.FATAL];
                                        case 1:
                                            return m = a.sent(), p = m[0], h = m[1], f = m[2], [2, {
                                                editorError: p,
                                                modError: h,
                                                vipError: f
                                            }]
                                    }
                                })
                            })
                        }, n.genericPromise = function() {
                            return a.__awaiter(n, void 0, void 0, function() {
                                return a.__generator(this, function(e) {
                                    return [2, Promise.resolve(null)]
                                })
                            })
                        }, n.mutateEditor = function(e, t) {
                            return a.__awaiter(n, void 0, void 0, function() {
                                var n, i;
                                return a.__generator(this, function(r) {
                                    switch (r.label) {
                                        case 0:
                                            return r.trys.push([0, 4, , 5]), t ? [4, this.props.addEditorUserMutation(e)] : [3, 2];
                                        case 1:
                                            return (n = r.sent()) && n.addEditor ? [2, n.addEditor.error ? n.addEditor.error.code : null] : [2, ie.FATAL];
                                        case 2:
                                            return [4, this.props.removeEditorUserMutation(e)];
                                        case 3:
                                            return (i = r.sent()) && i.removeEditor ? [2, i.removeEditor.error ? i.removeEditor.error.code : null] : [2, ie.FATAL];
                                        case 4:
                                            return r.sent(), [2, ie.FATAL];
                                        case 5:
                                            return [2]
                                    }
                                })
                            })
                        }, n.mutateMod = function(e, t) {
                            return a.__awaiter(n, void 0, void 0, function() {
                                var n, i;
                                return a.__generator(this, function(r) {
                                    switch (r.label) {
                                        case 0:
                                            return r.trys.push([0, 4, , 5]), t ? [4, this.props.modUserMutation(e)] : [3, 2];
                                        case 1:
                                            return (n = r.sent()) && n.modUser ? [2, n.modUser.error ? n.modUser.error.code : null] : [2, ie.FATAL];
                                        case 2:
                                            return [4, this.props.unmodUserMutation(e)];
                                        case 3:
                                            return (i = r.sent()) && i.unmodUser ? [2, i.unmodUser.error ? i.unmodUser.error.code : null] : [2, ie.FATAL];
                                        case 4:
                                            return r.sent(), [2, ie.FATAL];
                                        case 5:
                                            return [2]
                                    }
                                })
                            })
                        }, n.mutateVIP = function(e, t) {
                            return a.__awaiter(n, void 0, void 0, function() {
                                var n, i;
                                return a.__generator(this, function(r) {
                                    switch (r.label) {
                                        case 0:
                                            return r.trys.push([0, 4, , 5]), t ? [4, this.props.vipUserMutation(e)] : [3, 2];
                                        case 1:
                                            return (n = r.sent()) && n.grantVIP ? [2, n.grantVIP.error ? n.grantVIP.error.code : null] : [2, ie.FATAL];
                                        case 2:
                                            return [4, this.props.unVIPUserMutation(e)];
                                        case 3:
                                            return (i = r.sent()) && i.revokeVIP ? [2, i.revokeVIP.error ? i.revokeVIP.error.code : null] : [2, ie.FATAL];
                                        case 4:
                                            return r.sent(), [2, ie.FATAL];
                                        case 5:
                                            return [2]
                                    }
                                })
                            })
                        }, n.state = {
                            mutateUser: n.mutateUser
                        }, n
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        return o.createElement(se, {
                            value: this.state
                        }, this.props.children)
                    }, t
                }(o.Component),
                me = n("AKV8"),
                pe = n("yzwe"),
                he = n("CpU+"),
                fe = n("fKMw"),
                ve = n("OBYv");
            var ge = n("r6Pb");

            function ke(e) {
                return {
                    channelID: e.channelID || ""
                }
            }
            var Ee = Object(s.compose)(j, w, function() {
                    var e = this;
                    return Object(d.a)(ve, {
                        props: function(t) {
                            return {
                                addEditorUserMutation: function(n) {
                                    return a.__awaiter(e, void 0, void 0, function() {
                                        return a.__generator(this, function(e) {
                                            switch (e.label) {
                                                case 0:
                                                    return t.mutate ? [4, t.mutate({
                                                        variables: {
                                                            input: {
                                                                channelID: t.ownProps.channelID,
                                                                targetUserLogin: n
                                                            }
                                                        }
                                                    })] : [2];
                                                case 1:
                                                    return [2, e.sent().data]
                                            }
                                        })
                                    })
                                }
                            }
                        }
                    })
                }(), function() {
                    var e = this;
                    return Object(d.a)(ge, {
                        props: function(t) {
                            return {
                                removeEditorUserMutation: function(n) {
                                    return a.__awaiter(e, void 0, void 0, function() {
                                        return a.__generator(this, function(e) {
                                            switch (e.label) {
                                                case 0:
                                                    return t.mutate ? [4, t.mutate({
                                                        variables: {
                                                            input: {
                                                                channelID: t.ownProps.channelID,
                                                                targetUserLogin: n
                                                            }
                                                        }
                                                    })] : [2];
                                                case 1:
                                                    return [2, e.sent().data]
                                            }
                                        })
                                    })
                                }
                            }
                        }
                    })
                }(), Object(me.b)(ke), Object(pe.b)(ke), Object(he.a)(), Object(fe.a)())(ue),
                Ce = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            isRetryButtonDisabled: !1
                        }, t.handleModalDismiss = function() {
                            t.props.clearMessage(), t.props.closeModal()
                        }, t.handleRetryClick = function() {
                            t.setState({
                                isRetryButtonDisabled: !0
                            }, t.handleRetry)
                        }, t.handleRetry = function() {
                            return a.__awaiter(t, void 0, void 0, function() {
                                var e, t, n, i, r, o, s, l = this;
                                return a.__generator(this, function(d) {
                                    switch (d.label) {
                                        case 0:
                                            return e = this.props.message, t = e.user, [4, this.props.mutateUser(t)];
                                        case 1:
                                            return (n = d.sent()) === ie.FATAL ? (this.setState({
                                                isRetryButtonDisabled: !1
                                            }), [2]) : (i = n.editorError, r = n.modError, o = n.vipError, i || r || o ? (s = a.__assign({
                                                channelLogin: t.channelLogin,
                                                displayName: t.displayName,
                                                lastModified: t.lastModified,
                                                id: t.id,
                                                profileImageURL: t.profileImageURL
                                            }, i ? {} : {
                                                isEditor: t.isEditor
                                            }, r ? {} : {
                                                isMod: t.isMod
                                            }, o ? {} : {
                                                isVIP: t.isVIP
                                            }), this.props.modifyUserInCache(s, function() {
                                                l.props.setMessage({
                                                    user: t,
                                                    error: n,
                                                    type: G.SOME_MUTATIONS_FAILED
                                                }), l.props.closeModal()
                                            }), [2]) : (this.props.modifyUserInCache(t, function() {
                                                l.props.setMessage({
                                                    user: t,
                                                    type: G.ALL_MUTATIONS_SUCCEEDED
                                                }), l.props.closeModal()
                                            }), [2]))
                                    }
                                })
                            })
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        return o.createElement(b.ab, {
                            elevation: 3,
                            onCloseButtonClick: this.handleModalDismiss,
                            primaryButtonProps: {
                                children: Object(S.d)("Retry", "RolesPageMessageModal"),
                                disabled: this.state.isRetryButtonDisabled,
                                onClick: this.handleRetryClick
                            },
                            secondaryButtonProps: {
                                children: Object(S.d)("Cancel", "RolesPageMessageModal"),
                                onClick: this.handleModalDismiss,
                                type: b.F.Hollow
                            },
                            size: b.bb.Small,
                            title: Object(S.d)("Something went wrong", "RolesPageMessageModal")
                        }, o.createElement(b.Xa, {
                            padding: 1
                        }, o.createElement(b.W, null, Object(S.d)("There was an error modifying roles for {user}.", {
                            user: this.props.message.user.displayName
                        }, "RolesPageMessageModal"))))
                    }, t
                }(o.Component),
                Ie = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.tryToShowModal()
                    }, t.prototype.componentDidUpdate = function(e) {
                        e.message || this.tryToShowModal()
                    }, t.prototype.render = function() {
                        return null
                    }, t.prototype.tryToShowModal = function() {
                        var e = this.props.message;
                        e && (e.type === G.ALL_MUTATIONS_FAILED && this.props.showModal(this.props))
                    }, t
                }(o.Component);
            var ye, be = Object(s.compose)(Object(ae.connect)(null, function(e) {
                    return Object(s.bindActionCreators)({
                        closeModal: oe.c,
                        showModal: function(e) {
                            return Object(oe.d)(Ce, e)
                        }
                    }, e)
                }), ce, te, w)(Ie),
                Se = n("9C/b"),
                Ne = (n("vsHg"), function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        return o.createElement(b.Xa, {
                            alignItems: b.f.Center,
                            display: b.X.Flex,
                            fullHeight: !0,
                            fullWidth: !0,
                            justifyContent: b.Wa.Center,
                            position: b.jb.Absolute,
                            zIndex: b.ic.Above
                        }, o.createElement(b.i, {
                            type: b.n.SlideInBottom,
                            duration: b.k.Medium,
                            enabled: !0,
                            timing: b.m.EaseInOut
                        }, o.createElement(b.Eb, {
                            background: b.r.Base,
                            borderBottom: !0,
                            borderRadius: b.x.Medium,
                            className: "dashboard-centered-banner",
                            display: b.X.Flex,
                            elevation: 3,
                            flexDirection: b.Aa.Column,
                            padding: 2
                        }, o.createElement(b.Xa, {
                            alignItems: b.f.Center,
                            display: b.X.Flex,
                            justifyContent: b.Wa.Start,
                            margin: {
                                bottom: 1
                            }
                        }, o.createElement(b.Xa, {
                            margin: {
                                right: .5
                            }
                        }, o.createElement(b.q, {
                            alt: Object(S.d)("VoHiYo", "CenteredBanner"),
                            src: "https://static-cdn.jtvnw.net/emoticons/v1/81274/2.0",
                            size: 30
                        })), o.createElement(b.W, {
                            bold: !0,
                            type: b.Vb.H5
                        }, this.props.title)), o.createElement(b.Xa, {
                            margin: {
                                bottom: 2
                            }
                        }, o.createElement(b.W, {
                            fontSize: b.Ca.Size5
                        }, this.props.body)), this.props.children)))
                    }, t
                }(o.Component));
            ! function(e) {
                e.ADD_A_ROLE = "no-users-banner-add-a-role", e.LEARN_MORE = "no-users-banner-learn-more"
            }(ye || (ye = {}));
            var De = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.handleAddARoleClick = function() {
                            t.props.setView(r.DEFAULT)
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        return o.createElement(Ne, {
                            body: Object(S.d)("Manage the permissions users have for your community. Start by adding your first role.", "NoUsersBanner"),
                            title: Object(S.d)("Welcome to Roles", "NoUsersBanner")
                        }, o.createElement(b.Xa, {
                            alignItems: b.f.Center,
                            display: b.X.Flex,
                            justifyContent: b.Wa.Start
                        }, o.createElement(b.Xa, {
                            margin: {
                                right: 1
                            }
                        }, o.createElement(b.z, {
                            "data-test-selector": ye.ADD_A_ROLE,
                            onClick: this.handleAddARoleClick
                        }, Object(S.d)("Add a Role", "NoUsersBanner"))), o.createElement(b.z, {
                            "data-test-selector": ye.LEARN_MORE,
                            linkTo: z,
                            type: b.F.Text
                        }, Object(S.d)("Learn More", "NoUsersBanner"))))
                    }, t
                }(o.Component),
                _e = Object(s.compose)(k, Se.a)(De),
                Oe = function(e) {
                    var t, n = e.selected;
                    if (n) switch (e.sortDirection) {
                        case Ge.ASCENDING:
                            t = o.createElement(b.sb, {
                                asset: b.tb.GlyphArrUp,
                                type: b.ub.Alt,
                                width: 10
                            });
                            break;
                        case Ge.DESCENDING:
                            t = o.createElement(b.sb, {
                                asset: b.tb.GlyphArrDown,
                                type: b.ub.Alt,
                                width: 10
                            });
                            break;
                        default:
                            t = o.createElement(b.sb, {
                                asset: b.tb.GlyphArrUpDown,
                                width: 10
                            })
                    } else t = o.createElement(b.sb, {
                        asset: b.tb.GlyphArrUpDown,
                        width: 10
                    });
                    return o.createElement(b.Eb, {
                        alignItems: b.f.Center,
                        display: b.X.InlineBlock
                    }, o.createElement(b.Ua, {
                        blurAfterClick: !0,
                        onClick: e.onClick,
                        type: b.Va.Overlay
                    }, o.createElement(b.Xa, {
                        alignItems: b.f.Center,
                        display: b.X.Flex
                    }, o.createElement(b.W, {
                        bold: !0,
                        color: n ? b.O.Alt : b.O.Link,
                        type: b.Vb.Span
                    }, e.children), o.createElement(b.Xa, {
                        alignItems: b.f.Center,
                        display: b.X.Flex,
                        margin: {
                            left: .5
                        }
                    }, t))))
                },
                Ue = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        return o.createElement(b.Xa, {
                            alignItems: b.f.Center,
                            display: b.X.Flex,
                            flexDirection: b.Aa.Column,
                            justifyContent: b.Wa.Center,
                            flexGrow: 0,
                            flexShrink: 1,
                            fullWidth: !0,
                            margin: {
                                bottom: 5,
                                top: 5
                            },
                            padding: {
                                bottom: 5,
                                top: 5
                            }
                        }, o.createElement(b.Xa, {
                            padding: {
                                bottom: 1
                            }
                        }, o.createElement(b.q, {
                            alt: "TearGlove",
                            size: 50,
                            src: "https://static-cdn.jtvnw.net/emoticons/v1/160403/3.0"
                        })), o.createElement(b.W, {
                            color: b.O.Alt2,
                            fontSize: b.Ca.Size5
                        }, Object(S.d)("No users to display", "NoFilteredUsers")))
                    }, t
                }(o.Component),
                Ae = n("u5aL"),
                Me = (n("Jfrt"), function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        var e = this.props,
                            t = e.src,
                            n = e.title;
                        return o.createElement(b.Eb, {
                            alignItems: b.f.Center,
                            background: b.r.Alt2,
                            borderRadius: b.x.Medium,
                            display: b.X.Flex,
                            justifyContent: b.Wa.Center,
                            margin: {
                                right: 1
                            }
                        }, t && o.createElement(b.Xa, {
                            alignItems: b.f.Center,
                            display: b.X.Flex,
                            margin: {
                                x: .5
                            }
                        }, o.createElement(b.S, {
                            alt: n,
                            className: "role-pill-icon",
                            src: t
                        })), o.createElement(b.Xa, {
                            margin: {
                                left: .5,
                                right: 1
                            }
                        }, o.createElement(b.W, {
                            bold: !0
                        }, n)), o.createElement(b.A, {
                            icon: b.tb.NotificationError,
                            onClick: this.props.onRolePillDismissed,
                            type: b.C.Secondary,
                            size: b.B.Small
                        }))
                    }, t
                }(o.Component)),
                Te = (n("eqbG"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.handleCheckBoxChange = function(e) {
                            var n;
                            t.props.onCheckBoxChange(((n = {})[t.props.value] = e.currentTarget.checked, n))
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        var e = this.props,
                            t = e.disabled,
                            n = e.label,
                            i = e.src;
                        return o.createElement(b.Xa, {
                            alignItems: b.f.Center,
                            display: b.X.Flex,
                            justifyContent: b.Wa.Between,
                            margin: this.props.margin
                        }, o.createElement(b.N, {
                            checked: this.props.checked,
                            disabled: t,
                            label: n,
                            onChange: this.handleCheckBoxChange,
                            value: this.props.value
                        }), i && o.createElement(b.S, {
                            alt: n,
                            className: "role-selector__icon" + (t ? " role-selector__icon--disabled" : ""),
                            src: i
                        }))
                    }, t
                }(o.Component));

            function we() {
                return Object(S.d)("Editor", "FilterUsersComponent")
            }

            function Fe() {
                return Object(S.d)("Moderator", "FilterUsersComponent")
            }

            function Le() {
                return Object(S.d)("VIP", "FilterUsersComponent")
            }
            var Re, Pe = 28.5,
                Ve = j(function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            direction: b.v.Bottom
                        }, t.setDivRef = function(e) {
                            t.divRef = e
                        }, t.tryToOpenInViewport = function() {
                            var e = t.divRef.getBoundingClientRect(),
                                n = e.height,
                                i = e.top;
                            n + i >= window.innerHeight && !(i - Pe - n <= 50) && t.setState({
                                direction: b.v.Top
                            })
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.divRef.focus(), this.tryToOpenInViewport()
                    }, t.prototype.render = function() {
                        var e = this.props,
                            t = e.isEditor,
                            n = e.isMod,
                            i = e.isVIP,
                            r = e.onCheckBoxChange,
                            a = this.state.direction;
                        return o.createElement(b.Xa, {
                            position: b.jb.Relative
                        }, o.createElement(b.u, {
                            direction: this.state.direction,
                            offsetY: (a === b.v.Bottom ? "-0.5" : "+" + Pe) + "px",
                            noTail: !0,
                            show: this.props.show
                        }, o.createElement("div", {
                            ref: this.setDivRef,
                            tabIndex: 0
                        }, o.createElement(b.Eb, {
                            border: !0,
                            borderRadius: b.x.Small,
                            elevation: 2
                        }, o.createElement(Te, {
                            checked: n,
                            disabled: i,
                            label: Fe(),
                            onCheckBoxChange: r,
                            margin: {
                                x: 1,
                                y: 2
                            },
                            src: Q,
                            value: I.IS_MOD
                        }), this.props.isVIPUnlocked && o.createElement(Te, {
                            checked: i,
                            disabled: n || this.props.isAtMaxVIPUserLimit && !i,
                            label: Le(),
                            onCheckBoxChange: r,
                            margin: {
                                x: 1,
                                bottom: 2
                            },
                            src: K,
                            value: I.IS_VIP
                        }), o.createElement(Te, {
                            checked: t,
                            disabled: !1,
                            label: we(),
                            onCheckBoxChange: r,
                            margin: {
                                x: 1,
                                bottom: 2
                            },
                            value: I.IS_EDITOR
                        }), o.createElement(b.Ua, {
                            linkTo: "https://link.twitch.tv/ManagingRoles"
                        }, o.createElement(b.Eb, {
                            alignItems: b.f.Center,
                            borderTop: !0,
                            display: b.X.Flex,
                            padding: 1
                        }, o.createElement(b.Xa, {
                            alignItems: b.f.Center,
                            display: b.X.Flex,
                            margin: {
                                right: 1
                            }
                        }, o.createElement(b.sb, {
                            asset: b.tb.NotificationInfo,
                            type: b.ub.Inherit
                        })), o.createElement(b.W, null, Object(S.d)("Learn about Roles", "RoleSelector"))))))))
                    }, t
                }(o.Component)),
                xe = j(function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.handleAddRoleClick = function() {
                            n.setState(function(e) {
                                return {
                                    isBalloonOpen: !e.isBalloonOpen
                                }
                            })
                        }, n.handleClickOut = function() {
                            n.setState({
                                isBalloonOpen: !1
                            })
                        }, n.state = {
                            isBalloonOpen: !!t.openDropDownOnMount
                        }, n
                    }
                    return a.__extends(t, e), t.prototype.componentDidUpdate = function(e) {
                        e.user.id !== this.props.user.id && this.setState({
                            isBalloonOpen: !0
                        })
                    }, t.prototype.render = function() {
                        var e = this.props,
                            t = e.onRolePillDismissed,
                            n = e.roleOrder,
                            i = e.user,
                            r = this.state.isBalloonOpen,
                            a = we(),
                            s = Fe(),
                            l = Le(),
                            d = i.isEditor,
                            c = i.isMod,
                            u = i.isVIP;
                        return o.createElement(b.Xa, {
                            alignItems: b.f.Center,
                            display: b.X.Flex,
                            flexDirection: n,
                            position: b.jb.Relative
                        }, o.createElement(b.Xa, {
                            margin: {
                                right: n ? void 0 : 1
                            }
                        }, !r && o.createElement(b.A, {
                            onClick: this.handleAddRoleClick,
                            icon: b.tb.Plus,
                            size: b.B.Small
                        }), r && o.createElement(Ae.a, {
                            onClickOut: this.handleClickOut
                        }, o.createElement(b.z, {
                            icon: b.tb.Plus,
                            onClick: this.handleAddRoleClick,
                            size: b.D.Small,
                            type: b.F.Hollow
                        }, o.createElement(b.W, null, Object(S.d)("Add Role", "RoleSelector"))), o.createElement(Ve, {
                            isEditor: d,
                            isMod: c,
                            isVIP: u,
                            onCheckBoxChange: this.props.onCheckBoxChange,
                            show: r
                        }))), d && o.createElement(Me, {
                            onRolePillDismissed: t.bind(null, I.IS_EDITOR),
                            title: a
                        }), c && o.createElement(Me, {
                            onRolePillDismissed: t.bind(null, I.IS_MOD),
                            src: Q,
                            title: s
                        }), this.props.isVIPUnlocked && u && o.createElement(Me, {
                            onRolePillDismissed: t.bind(null, I.IS_VIP),
                            src: K,
                            title: l
                        }))
                    }, t
                }(o.Component)),
                Be = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        return o.createElement(b.Eb, {
                            alignItems: b.f.Center,
                            background: b.r.Base,
                            borderBottom: !0,
                            borderRadius: b.x.Large,
                            display: b.X.Flex,
                            elevation: 1,
                            fullWidth: !0,
                            margin: this.props.margin,
                            padding: 1
                        }, this.props.children)
                    }, t
                }(o.Component);
            ! function(e) {
                e.CJK_NAME = "cjk_name"
            }(Re || (Re = {}));
            var je, Xe, Ge, We = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.handleUserMutation = function(e) {
                            return a.__awaiter(t, void 0, void 0, function() {
                                var t, n, i, r, o, s = this;
                                return a.__generator(this, function(l) {
                                    switch (l.label) {
                                        case 0:
                                            return [4, this.props.mutateUser(e)];
                                        case 1:
                                            return (t = l.sent()) === ie.FATAL ? (this.props.setMessage({
                                                user: e,
                                                error: t,
                                                type: G.ALL_MUTATIONS_FAILED
                                            }), [2]) : (n = t.editorError, i = t.modError, r = t.vipError, n || i || r ? (o = a.__assign({
                                                channelLogin: e.channelLogin,
                                                displayName: e.displayName,
                                                lastModified: e.lastModified,
                                                id: e.id,
                                                profileImageURL: e.profileImageURL
                                            }, n ? {} : {
                                                isEditor: e.isEditor
                                            }, i ? {} : {
                                                isMod: e.isMod
                                            }, r ? {} : {
                                                isVIP: e.isVIP
                                            }), this.props.modifyUserInCache(o, function() {
                                                s.props.setMessage({
                                                    user: e,
                                                    error: t,
                                                    type: G.SOME_MUTATIONS_FAILED
                                                })
                                            }), [2]) : (this.props.modifyUserInCache(e), [2]))
                                    }
                                })
                            })
                        }, t.handleCheckBoxChange = function(e) {
                            var n = a.__assign({}, t.props.userCache[t.props.userID], e);
                            t.handleUserMutation(n)
                        }, t.handleRolePillDismissed = function(e) {
                            var n, i = a.__assign({}, t.props.userCache[t.props.userID], ((n = {})[e] = !1, n));
                            t.handleUserMutation(i)
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        var e = this.props.userCache[this.props.userID],
                            t = e.channelLogin,
                            n = e.displayName,
                            i = e.lastModified,
                            r = new Date,
                            a = t.toLowerCase() !== n.toLowerCase();
                        return o.createElement(Be, {
                            margin: {
                                top: .5
                            }
                        }, o.createElement(b.P, {
                            cols: je.FIRST_COLUMN
                        }, o.createElement(b.Eb, {
                            color: b.O.Base
                        }, o.createElement(b.U, {
                            to: "/" + t,
                            targetBlank: !0,
                            hoverUnderlineNone: !0,
                            type: b.V.Inherit
                        }, o.createElement(b.Xa, {
                            alignItems: b.f.Center,
                            display: b.X.Flex,
                            justifyContent: b.Wa.Start,
                            overflow: b.cb.Hidden
                        }, o.createElement(b.Xa, null, o.createElement(b.q, {
                            alt: t,
                            size: 30,
                            src: e.profileImageURL
                        })), o.createElement(b.Xa, {
                            margin: {
                                left: 1
                            },
                            display: b.X.Flex,
                            alignItems: b.f.Center
                        }, o.createElement(b.W, {
                            bold: !0,
                            ellipsis: !a,
                            type: b.Vb.P
                        }, t), a && o.createElement(b.Xa, {
                            margin: {
                                left: 1
                            }
                        }, o.createElement(b.W, {
                            bold: !0,
                            color: b.O.Alt2,
                            "data-test-selector": Re.CJK_NAME,
                            ellipsis: !0,
                            type: b.Vb.P
                        }, n))))))), o.createElement(b.P, {
                            cols: je.SECOND_COLUMN
                        }, o.createElement(b.Xa, {
                            display: b.X.Flex,
                            margin: {
                                right: 5
                            },
                            flexGrow: 1,
                            alignItems: b.f.Center
                        }, o.createElement(xe, {
                            user: e,
                            onCheckBoxChange: this.handleCheckBoxChange,
                            onRolePillDismissed: this.handleRolePillDismissed,
                            roleOrder: b.Aa.RowReverse
                        }))), o.createElement(b.P, {
                            cols: je.THIRD_COLUMN
                        }, o.createElement(b.W, {
                            title: Object(S.j)(i, {
                                year: "numeric",
                                month: "short",
                                day: "numeric",
                                hour: "numeric",
                                minute: "2-digit",
                                hour12: !0
                            })
                        }, Object(S.h)(i, {
                            now: new Date(Date.UTC(r.getFullYear(), r.getMonth(), r.getDate(), r.getHours(), r.getMinutes(), r.getSeconds()))
                        }))))
                    }, t
                }(o.Component),
                He = Object(s.compose)(te, w, ce)(We),
                qe = (n("tC/j"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.sortByUsername = function() {
                            return Object.keys(t.props.userCache).sort(function(e, n) {
                                var i = t.props.userCache[e].channelLogin,
                                    r = t.props.userCache[n].channelLogin;
                                if (t.props.sortDirection === Ge.ASCENDING) {
                                    if (i > r) return 1;
                                    if (i < r) return -1
                                }
                                if (t.props.sortDirection === Ge.DESCENDING) {
                                    if (i < r) return 1;
                                    if (i > r) return -1
                                }
                                return 0
                            })
                        }, t.sortByLastModified = function() {
                            return Object.keys(t.props.userCache).sort(function(e, n) {
                                var i = t.props.userCache[e].lastModified,
                                    r = t.props.userCache[n].lastModified;
                                if (t.props.sortDirection === Ge.ASCENDING) {
                                    if (i < r) return 1;
                                    if (i > r) return -1
                                }
                                if (t.props.sortDirection === Ge.DESCENDING) {
                                    if (i > r) return 1;
                                    if (i < r) return -1
                                }
                                return 0
                            })
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.shouldComponentUpdate = function(e) {
                        return Object.keys(e.userCache).length !== Object.keys(this.props.userCache).length || e.filterType !== this.props.filterType || e.sortBy !== this.props.sortBy || e.sortDirection !== this.props.sortDirection || e.view !== this.props.view
                    }, t.prototype.render = function() {
                        var e = this,
                            t = this.props.sortBy === Xe.USERNAME ? this.sortByUsername() : this.sortByLastModified(),
                            n = this.props.filterType === C.ALL_ROLES ? t.map(function(e) {
                                return o.createElement(He, {
                                    "data-test-selector": "roles-table-row-" + e,
                                    key: "roles-table-row-" + e,
                                    userID: e
                                })
                            }) : t.reduce(function(t, n) {
                                var i = e.props.userCache[n];
                                return i && (e.props.filterType === C.EDITOR && i[I.IS_EDITOR] || e.props.filterType === C.MODERATOR && i[I.IS_MOD] || e.props.filterType === C.VIP && i[I.IS_VIP]) && t.push(o.createElement(He, {
                                    "data-test-selector": "roles-table-row-" + n,
                                    key: "roles-table-row-" + n,
                                    userID: n
                                })), t
                            }, []);
                        return o.createElement(o.Fragment, null, o.createElement(b.Xa, {
                            className: this.props.view === r.ADD_USER ? "table-list-disabled-rows" : ""
                        }, n), 0 === n.length && o.createElement(Ue, null))
                    }, t
                }(o.Component)),
                $e = Object(s.compose)(k, w)(qe);
            ! function(e) {
                e[e.FIRST_COLUMN = 3] = "FIRST_COLUMN", e[e.SECOND_COLUMN = 6] = "SECOND_COLUMN", e[e.THIRD_COLUMN = 3] = "THIRD_COLUMN"
            }(je || (je = {})),
            function(e) {
                e.USERNAME = "username", e.LAST_MODIFIED = "last-modified"
            }(Xe || (Xe = {})),
            function(e) {
                e.ASCENDING = "ascending", e.DESCENDING = "descending"
            }(Ge || (Ge = {}));
            var ze, Qe = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            sortBy: Xe.USERNAME,
                            sortDirection: Ge.ASCENDING
                        }, t.changeSort = function(e) {
                            t.setState({
                                sortBy: e,
                                sortDirection: t.state.sortDirection && t.state.sortBy === e && t.state.sortDirection !== Ge.DESCENDING ? Ge.DESCENDING : Ge.ASCENDING
                            })
                        }, t.handleUsernameHeaderClick = function() {
                            t.changeSort(Xe.USERNAME)
                        }, t.handleLastModifiedHeaderClick = function() {
                            t.changeSort(Xe.LAST_MODIFIED)
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        var e = this.state.sortBy,
                            t = this.state.sortDirection;
                        return o.createElement(b.Xa, {
                            display: b.X.InlineBlock,
                            fullWidth: !0,
                            fullHeight: !0,
                            margin: {
                                top: 1
                            }
                        }, o.createElement(b.Xa, {
                            display: b.X.Flex,
                            alignItems: b.f.Center,
                            padding: {
                                x: 1,
                                bottom: .5
                            }
                        }, o.createElement(b.P, {
                            cols: je.FIRST_COLUMN
                        }, o.createElement(Oe, {
                            selected: e === Xe.USERNAME,
                            sortDirection: t,
                            onClick: this.handleUsernameHeaderClick
                        }, Object(S.d)("Username", "RolesPageTable"))), o.createElement(b.P, {
                            cols: je.SECOND_COLUMN
                        }, o.createElement(b.W, {
                            type: b.Vb.Span,
                            bold: !0,
                            color: b.O.Link
                        }, " ", Object(S.d)("Roles", "RolesPageTable"), " ")), o.createElement(b.P, {
                            cols: je.THIRD_COLUMN
                        }, o.createElement(Oe, {
                            selected: e === Xe.LAST_MODIFIED,
                            sortDirection: t,
                            onClick: this.handleLastModifiedHeaderClick
                        }, Object(S.d)("Last Modified", "RolesPageTable")))), o.createElement($e, {
                            sortBy: e,
                            sortDirection: t
                        }))
                    }, t
                }(o.Component),
                Ke = n("8Ad5"),
                Ye = n("f00E"),
                Je = n("H/lO"),
                Ze = n("NZDK"),
                et = n("AXTS"),
                tt = n("Kw8/"),
                nt = 250,
                it = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            canEditInputField: !0,
                            searchedUsers: null,
                            showDropDown: !1
                        }, t.searchClient = new Ze.a({
                            appId: S.a.algoliaApplicationID,
                            apiKey: S.a.algoliaAPIKey,
                            apolloClient: S.p.apollo.client,
                            logger: S.k,
                            config: S.a,
                            stats: S.p.stats
                        }), t.filterUsersResults = function(e, n) {
                            var i = t.props.userCache,
                                r = t.props.match.params.channelLogin;
                            if (n.match(/^\".*\"$/i)) {
                                var a = n.replace(/\"/g, "").toLowerCase();
                                return e.hits.filter(function(e) {
                                    var t = e.login,
                                        n = e.objectID;
                                    return n && !i[n] && t !== r && a === t
                                })
                            }
                            return e.hits.filter(function(e) {
                                var t = e.login,
                                    n = e.objectID;
                                return n && t !== r && !i[n]
                            })
                        }, t.handleInputChange = function(e) {
                            var n = e.currentTarget.value;
                            return a.__awaiter(t, void 0, void 0, function() {
                                return a.__generator(this, function(e) {
                                    return this.algoliaDebounceTimeout && clearTimeout(this.algoliaDebounceTimeout), this.algoliaDebounceTimeout = setTimeout(this.queryAlgolia.bind(this, n), nt), [2]
                                })
                            })
                        }, t.queryAlgolia = function(e) {
                            return a.__awaiter(t, void 0, void 0, function() {
                                var t;
                                return a.__generator(this, function(n) {
                                    switch (n.label) {
                                        case 0:
                                            return e ? [4, this.searchClient.queryForType(Je.a.Users, e, Object(Ye.a)(), {
                                                hitsPerPage: 10
                                            })] : [3, 2];
                                        case 1:
                                            return (t = n.sent()) && t.users && this.setState({
                                                searchedUsers: this.filterUsersResults(t.users, e)
                                            }, this.deselectUser), [3, 3];
                                        case 2:
                                            this.setState({
                                                searchedUsers: null
                                            }, this.deselectUser), n.label = 3;
                                        case 3:
                                            return [2]
                                    }
                                })
                            })
                        }, t.handleInputFocus = function() {
                            t.setState({
                                showDropDown: !0
                            })
                        }, t.handleInputBlur = function(e) {
                            e.persist(), t.handleBlur(e.relatedTarget)
                        }, t.handleOptionBlur = function(e) {
                            t.handleBlur(e)
                        }, t.handleOptionClick = function(e) {
                            t.setState({
                                canEditInputField: !1,
                                showDropDown: !1
                            }, function() {
                                t.props.onUserSelected(e)
                            })
                        }, t.handleBlur = function(e) {
                            t.setState({
                                showDropDown: e && e.getAttribute(tt.a) === tt.b
                            })
                        }, t.handleClickOut = function() {
                            t.setState({
                                canEditInputField: !1,
                                showDropDown: !1
                            })
                        }, t.enableInputField = function() {
                            t.setState({
                                canEditInputField: !0
                            })
                        }, t.deselectUser = function() {
                            t.props.selectedUser && t.props.onUserDeselected()
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        var e = this.props.selectedUser,
                            t = e && e.channelLogin || "",
                            n = e && e.displayName || "",
                            i = this.state.canEditInputField,
                            r = o.createElement(b.Xa, {
                                margin: {
                                    right: e ? 1 : .5
                                }
                            }, o.createElement(b.q, {
                                alt: Object(S.d)("Avatar", "SearchUsers"),
                                size: 30,
                                src: e && e.profileImageURL
                            }));
                        return o.createElement(b.Xa, null, !i && e && o.createElement(b.Ua, {
                            onClick: this.enableInputField,
                            type: b.Va.Overlay
                        }, o.createElement(b.Xa, {
                            alignItems: b.f.Center,
                            display: b.X.Flex
                        }, r, o.createElement(b.W, {
                            bold: !0,
                            type: b.Vb.P,
                            ellipsis: !0
                        }, t), t.toLowerCase() !== n.toLowerCase() && o.createElement(b.Xa, {
                            margin: {
                                left: 1
                            }
                        }, o.createElement(b.W, {
                            bold: !0,
                            type: b.Vb.P,
                            ellipsis: !0,
                            color: b.O.Alt2
                        }, n)))), (i || !e) && o.createElement(Ae.a, {
                            onClickOut: this.handleClickOut
                        }, o.createElement(b.Xa, {
                            alignItems: b.f.Center,
                            display: b.X.Flex
                        }, r, o.createElement(b.Xa, {
                            position: b.jb.Relative
                        }, o.createElement(b.Ra, {
                            autoFocus: !0,
                            defaultValue: n,
                            onBlur: this.handleInputBlur,
                            onChange: this.handleInputChange,
                            onFocus: this.handleInputFocus,
                            onKeyDown: this.props.onInputKeyDown,
                            placeholder: Object(S.d)("Search", "SearchUsers"),
                            type: b.Ta.Text
                        }), o.createElement(et.a, {
                            onOptionClick: this.handleOptionClick,
                            onOptionBlur: this.handleOptionBlur,
                            show: this.state.showDropDown,
                            users: this.state.searchedUsers
                        })))))
                    }, t
                }(o.Component),
                rt = Object(s.compose)(w, Se.a)(it);
            ! function(e) {
                e.CANCEL_BUTTON = "roles-page-add-user-cancel-button", e.SAVE_BUTTON = "roles-page-add-user-save-button"
            }(ze || (ze = {}));
            var at, ot = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            selectedUser: null
                        }, t.handleCheckBoxChange = function(e) {
                            t.setState(function(t) {
                                var n = t.selectedUser;
                                return n ? {
                                    selectedUser: a.__assign({}, n, e)
                                } : null
                            })
                        }, t.handleRolePillDismissed = function(e) {
                            t.setState(function(t) {
                                var n, i = t.selectedUser;
                                return i ? {
                                    selectedUser: a.__assign({}, i, (n = {}, n[e] = !1, n))
                                } : null
                            })
                        }, t.handleInputKeyDown = function(e) {
                            e.keyCode === Ke.a.Esc && t.props.setView(r.DEFAULT)
                        }, t.handleUserSelected = function(e) {
                            t.setState({
                                selectedUser: {
                                    channelLogin: e.login,
                                    displayName: e.name,
                                    id: e.objectID,
                                    lastModified: new Date,
                                    isEditor: !1,
                                    isMod: !1,
                                    isVIP: !1,
                                    profileImageURL: e.profile_image || ""
                                }
                            })
                        }, t.handleUserDeselected = function() {
                            t.setState({
                                selectedUser: null
                            })
                        }, t.handleCancelClick = function() {
                            t.props.setView(r.DEFAULT)
                        }, t.handleSaveClick = function() {
                            return a.__awaiter(t, void 0, void 0, function() {
                                var e, t, n, i, o, s, l = this;
                                return a.__generator(this, function(d) {
                                    switch (d.label) {
                                        case 0:
                                            return e = this.state.selectedUser, [4, this.props.mutateUser(e)];
                                        case 1:
                                            return t = d.sent(), this.props.setView(r.DEFAULT), t === ie.FATAL ? (this.props.setMessage({
                                                user: e,
                                                error: t,
                                                type: G.ALL_MUTATIONS_FAILED
                                            }), [2]) : (n = t.editorError, i = t.modError, o = t.vipError, n || i || o ? (s = a.__assign({
                                                channelLogin: e.channelLogin,
                                                displayName: e.displayName,
                                                lastModified: e.lastModified,
                                                id: e.id,
                                                profileImageURL: e.profileImageURL
                                            }, n ? {} : {
                                                isEditor: e.isEditor
                                            }, i ? {} : {
                                                isMod: e.isMod
                                            }, o ? {} : {
                                                isVIP: e.isVIP
                                            }), this.props.modifyUserInCache(s, function() {
                                                l.props.setMessage({
                                                    user: e,
                                                    error: t,
                                                    type: G.SOME_MUTATIONS_FAILED
                                                })
                                            }), [2]) : (this.props.modifyUserInCache(e, function() {
                                                l.props.setMessage({
                                                    user: e,
                                                    type: G.ALL_MUTATIONS_SUCCEEDED
                                                })
                                            }), [2]))
                                    }
                                })
                            })
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        var e = this.state.selectedUser;
                        return o.createElement(b.Xa, {
                            fullWidth: !0,
                            margin: {
                                bottom: 2
                            },
                            position: b.jb.Relative,
                            zIndex: b.ic.Above
                        }, o.createElement(b.i, {
                            duration: b.k.Medium,
                            enabled: !0,
                            type: b.n.SlideInBottom
                        }, o.createElement(Be, null, o.createElement(b.P, {
                            cols: je.FIRST_COLUMN
                        }, o.createElement(rt, {
                            onInputKeyDown: this.handleInputKeyDown,
                            onUserDeselected: this.handleUserDeselected,
                            onUserSelected: this.handleUserSelected,
                            selectedUser: e
                        })), o.createElement(b.P, {
                            cols: je.SECOND_COLUMN
                        }, o.createElement(b.Xa, {
                            display: b.X.Flex,
                            alignItems: b.f.Center
                        }, e && o.createElement(xe, {
                            onCheckBoxChange: this.handleCheckBoxChange,
                            openDropDownOnMount: !0,
                            onRolePillDismissed: this.handleRolePillDismissed,
                            user: e
                        }))), o.createElement(b.P, {
                            cols: je.THIRD_COLUMN
                        }, o.createElement(b.Xa, {
                            alignItems: b.f.Center,
                            display: b.X.Flex,
                            justifyContent: b.Wa.End
                        }, o.createElement(b.Xa, {
                            margin: {
                                right: 1
                            }
                        }, o.createElement(b.z, {
                            "data-test-selector": ze.CANCEL_BUTTON,
                            onClick: this.handleCancelClick,
                            type: b.F.Hollow
                        }, Object(S.d)("Cancel", "AddUserComponent"))), o.createElement(b.z, {
                            "data-test-selector": ze.SAVE_BUTTON,
                            disabled: !e || !e.isEditor && !e.isMod && !e.isVIP,
                            onClick: this.handleSaveClick,
                            type: b.F.Success
                        }, Object(S.d)("Save", "AddUserComponent")))))))
                    }, t
                }(o.Component),
                st = Object(s.compose)(w, ce, te, k)(ot);
            ! function(e) {
                e.ALL_MUTATIONS_SUCCEEDED = "all-mutations-succeeded", e.SOME_MUTATIONS_FAILED = "some-mutations-failed"
            }(at || (at = {}));
            var lt = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            wasVIPWarningMessageDismissed: !1
                        }, t.handleDismissVIPWarningMessage = function() {
                            t.props.clearMessage(), t.setState({
                                wasVIPWarningMessageDismissed: !0
                            })
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.tryToShowOrHideVIPWarningMessage()
                    }, t.prototype.componentDidUpdate = function() {
                        this.tryToShowOrHideVIPWarningMessage()
                    }, t.prototype.render = function() {
                        var e = this.props.message;
                        return e ? o.createElement(b.Xa, {
                            fullWidth: !0,
                            margin: {
                                bottom: 1
                            }
                        }, this.getContent(e)) : null
                    }, t.prototype.getContent = function(e) {
                        var t = this.props.clearMessage,
                            n = Object(S.d)("Close", "RolesPageTopBar");
                        switch (e.type) {
                            case G.ALL_MUTATIONS_SUCCEEDED:
                                var i = (a = e.user).channelLogin,
                                    r = a.displayName;
                                return o.createElement(b.Na, {
                                    closeButtonAriaLabel: n,
                                    closeButtonOnClick: t,
                                    "data-test-selector": at.ALL_MUTATIONS_SUCCEEDED,
                                    description: Object(S.d)("Specified roles added for {user}.", {
                                        user: i + (i.toLowerCase() !== r.toLowerCase() ? " (" + r + ")" : "")
                                    }, "RolesPageTopBar"),
                                    title: Object(S.d)("Success!", "RolesPageTopBar"),
                                    type: b.Oa.Success
                                });
                            case G.SOME_MUTATIONS_FAILED:
                                var a;
                                i = (a = e.user).channelLogin, r = a.displayName;
                                return o.createElement(b.Na, {
                                    closeButtonAriaLabel: n,
                                    closeButtonOnClick: t,
                                    "data-test-selector": at.SOME_MUTATIONS_FAILED,
                                    description: Object(S.d)("Unfortunately, some of the specified roles were unable to be added for {user}.", {
                                        user: i + (i.toLowerCase() !== r.toLowerCase() ? " (" + r + ")" : "")
                                    }, "RolesPageTopBar"),
                                    title: Object(S.d)("Warning!", "RolesPageTopBar"),
                                    type: b.Oa.Warning
                                });
                            case G.MAX_VIPS_REACHED:
                                return o.createElement(b.Na, {
                                    closeButtonAriaLabel: n,
                                    closeButtonOnClick: this.handleDismissVIPWarningMessage,
                                    description: Object(S.d)("You have reached the maximum amount of VIP roles. <x:link>Read more about Roles.</x:link>", {
                                        "x:link": function(e) {
                                            return o.createElement(b.U, {
                                                linkTo: "https://link.twitch.tv/ManagingRoles",
                                                targetBlank: !0
                                            }, e)
                                        }
                                    }, "RolesPageTopBar"),
                                    title: Object(S.d)("You can't add any more VIPs.", "RolesPageTopBar"),
                                    type: b.Oa.Warning
                                });
                            default:
                                return null
                        }
                    }, t.prototype.tryToShowOrHideVIPWarningMessage = function() {
                        var e = this.props,
                            t = e.isAtMaxVIPUserLimit,
                            n = e.message;
                        !t || n || this.state.wasVIPWarningMessageDismissed ? n && n.type === G.MAX_VIPS_REACHED && !t && (this.props.clearMessage(), this.setState({
                            wasVIPWarningMessageDismissed: !1
                        })) : this.props.setMessage({
                            type: G.MAX_VIPS_REACHED
                        })
                    }, t
                }(o.Component),
                dt = Object(s.compose)(j, te)(lt),
                ct = (n("MQ8I"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            showDropDownMenu: !1
                        }, t.handleOptionClick = function(e) {
                            t.setState({
                                showDropDownMenu: !1
                            }, function() {
                                t.props.setFilterType(e)
                            })
                        }, t.handleButtonClick = function() {
                            t.setState(function(e) {
                                return {
                                    showDropDownMenu: !e.showDropDownMenu
                                }
                            })
                        }, t.handleClickOut = function() {
                            t.setState({
                                showDropDownMenu: !1
                            })
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        var e = this.props.filterType;
                        return o.createElement(b.Xa, {
                            alignItems: b.f.Center,
                            display: b.X.Flex
                        }, o.createElement(b.Xa, {
                            margin: {
                                right: 1
                            }
                        }, o.createElement(b.W, null, Object(S.d)("Display", "FilterUsersComponent"))), o.createElement(b.Xa, null, o.createElement(Ae.a, {
                            onClickOut: this.handleClickOut
                        }, o.createElement(b.z, {
                            onClick: this.handleButtonClick,
                            type: b.F.Text
                        }, o.createElement(b.Xa, {
                            alignItems: b.f.Center,
                            display: b.X.Flex
                        }, o.createElement(b.Xa, {
                            margin: {
                                right: .5
                            }
                        }, o.createElement(b.W, {
                            bold: !0
                        }, this.getFilterText(e))), o.createElement(b.sb, {
                            asset: b.tb.Carat,
                            height: 16,
                            width: 16
                        }))), o.createElement(b.Xa, {
                            className: "role-dropdown-container",
                            position: b.jb.Relative
                        }, o.createElement(b.Y, {
                            items: [{
                                disabled: e === C.ALL_ROLES,
                                onClick: this.handleOptionClick.bind(this, C.ALL_ROLES),
                                title: this.getFilterText(C.ALL_ROLES)
                            }, {
                                disabled: e === C.MODERATOR,
                                figure: {
                                    alt: this.getFilterText(C.MODERATOR),
                                    src: Q
                                },
                                figureRight: !0,
                                onClick: this.handleOptionClick.bind(this, C.MODERATOR),
                                title: this.getFilterText(C.MODERATOR)
                            }].concat(this.props.isVIPUnlocked ? [{
                                disabled: e === C.VIP,
                                figure: {
                                    alt: this.getFilterText(C.VIP),
                                    src: K
                                },
                                figureRight: !0,
                                onClick: this.handleOptionClick.bind(this, C.VIP),
                                title: this.getFilterText(C.VIP)
                            }] : []).concat([{
                                disabled: e === C.EDITOR,
                                onClick: this.handleOptionClick.bind(this, C.EDITOR),
                                title: this.getFilterText(C.EDITOR)
                            }]),
                            show: this.state.showDropDownMenu
                        })))))
                    }, t.prototype.getFilterText = function(e) {
                        switch (e) {
                            default:
                                case C.ALL_ROLES:
                                return Object(S.d)("All Roles", "FilterUsersComponent");
                            case C.EDITOR:
                                    return we();
                            case C.MODERATOR:
                                    return Fe();
                            case C.VIP:
                                    return Le()
                        }
                    }, t
                }(o.Component)),
                ut = Object(s.compose)(j, w)(ct),
                mt = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.handleButtonClick = function() {
                            t.props.setView(r.ADD_USER), t.props.clearMessage()
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        var e = this.props.view === r.ADD_USER;
                        return o.createElement(o.Fragment, null, o.createElement(b.Eb, {
                            alignItems: b.f.Center,
                            borderBottom: !0,
                            display: b.X.Flex,
                            fullWidth: !0,
                            justifyContent: b.Wa.Between,
                            margin: {
                                bottom: 2
                            },
                            padding: {
                                bottom: 1
                            }
                        }, o.createElement(ut, null), o.createElement(b.z, {
                            disabled: e,
                            onClick: this.handleButtonClick
                        }, Object(S.d)("Add New", "TopBarComponent"))), o.createElement(dt, null), e && o.createElement(st, null))
                    }, t
                }(o.Component),
                pt = Object(s.compose)(te, k)(mt),
                ht = k(function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(t, e), t.prototype.componentDidMount = function() {
                        S.p.setPageTitle(Object(S.d)("Roles", "RolesPage"))
                    }, t.prototype.render = function() {
                        var e = this.props.channelID;
                        return o.createElement(P, {
                            channelID: e
                        }, o.createElement(W, {
                            channelID: e
                        }, o.createElement(re, null, o.createElement(Ee, {
                            channelID: e
                        }, this.props.view === r.NO_USERS ? o.createElement(_e, null) : o.createElement(N.a, null, o.createElement(pt, null), o.createElement(Qe, null), o.createElement(be, null)), o.createElement(Y, null)))))
                    }, t
                }(o.Component)),
                ft = n("LQi+"),
                vt = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.reportInteractive()
                    }, t.prototype.componentDidUpdate = function(e) {
                        e.data.loading && this.reportInteractive()
                    }, t.prototype.render = function() {
                        if (this.props.data.loading) return o.createElement(b.Za, {
                            fillContent: !0
                        });
                        if (this.props.data.error) return o.createElement(l.a, null);
                        var e = this.props.data,
                            t = e.user && e.user.id;
                        return t ? o.createElement(y, null, o.createElement(ht, {
                            channelID: t
                        })) : null
                    }, t.prototype.reportInteractive = function() {
                        this.props.data.loading || this.props.latencyTracking.reportInteractive(1)
                    }, t
                }(o.Component),
                gt = Object(s.compose)(Object(p.b)("RolesPage", {
                    destination: u.a.RolesPage
                }), Object(c.a)({
                    location: m.PageviewLocation.DashboardSettingsRolesPage
                }), Object(d.a)(ft, {
                    options: function(e) {
                        return {
                            variables: {
                                channelLogin: e.match.params.channelLogin
                            }
                        }
                    }
                }))(vt);
            n.d(t, "RolesPage", function() {
                return gt
            })
        },
        r6Pb: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "mutation",
                    name: {
                        kind: "Name",
                        value: "RemoveEditorUser"
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
                                    value: "RemoveEditorInput"
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
                                value: "removeEditor"
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
                                        value: "channel"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
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
                                        value: "targetUser"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
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
                    end: 136
                }
            };
            n.loc.source = {
                body: "mutation RemoveEditorUser($input: RemoveEditorInput!){\nremoveEditor(input: $input) {\nchannel {\nid\n}\ntargetUser {\nid\n}\nerror {\ncode\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        sMoq: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "mutation",
                    name: {
                        kind: "Name",
                        value: "VIPUser"
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
                                    value: "GrantVIPInput"
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
                                value: "grantVIP"
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
                                        value: "channel"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
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
                                        value: "grantee"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "Field",
                                            name: {
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
                    end: 122
                }
            };
            n.loc.source = {
                body: "mutation VIPUser($input: GrantVIPInput!){\ngrantVIP(input: $input) {\nchannel {\nid\n}\ngrantee {\nid\nlogin\n}\nerror {\ncode\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        sZ5a: function(e, t, n) {},
        "tC/j": function(e, t, n) {},
        vYsf: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return a
            });
            var i = n("mrSG"),
                r = n("b6Yk");

            function a(e) {
                return i.__awaiter(this, void 0, Promise, function() {
                    var t, n;
                    return i.__generator(this, function(i) {
                        switch (i.label) {
                            case 0:
                                return [4, r.a.get("/v5/channels/" + e + "/quests")];
                            case 1:
                                if (t = i.sent(), n = t.body, 200 !== t.status || !n) throw new Error("failed to fetch quests");
                                return [2, n.quests]
                        }
                    })
                })
            }
        },
        vsHg: function(e, t, n) {},
        yzwe: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return i
            }), n.d(t, "b", function() {
                return s
            });
            var i, r = n("mrSG"),
                a = n("yR8l"),
                o = n("FAYk");

            function s(e) {
                var t = this;
                return Object(a.a)(o, {
                    props: function(n) {
                        return {
                            unmodUserMutation: function(i) {
                                return r.__awaiter(t, void 0, void 0, function() {
                                    var t;
                                    return r.__generator(this, function(r) {
                                        if (t = e(n.ownProps).channelID, n.mutate) return [2, n.mutate({
                                            variables: {
                                                input: {
                                                    channelID: t,
                                                    targetLogin: i
                                                }
                                            }
                                        }).then(function(e) {
                                            return e.data
                                        })];
                                        throw new Error("unmodUser mutation is not ready")
                                    })
                                })
                            }
                        }
                    }
                })
            }! function(e) {
                e.ChannelNotFound = "CHANNEL_NOT_FOUND", e.Forbidden = "FORBIDDEN", e.UserNotFound = "TARGET_NOT_FOUND", e.UserNotMod = "TARGET_NOT_MOD"
            }(i || (i = {}))
        }
    }
]);