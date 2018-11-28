(window.webpackJsonp = window.webpackJsonp || []).push([
    [158], {
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
                        }, r.createElement(o.b, null, r.createElement(l.Ya, {
                            alignItems: l.f.Center,
                            display: l.X.Flex,
                            flexDirection: l.Aa.Column,
                            justifyContent: l.Xa.Center
                        }, t && t.length > 0 ? t.map(function(t, n) {
                            return r.createElement(s.c, {
                                key: n,
                                onBlur: e.props.onOptionBlur,
                                onClick: e.props.onOptionClick,
                                user: t
                            })
                        }) : r.createElement(l.Ya, {
                            alignItems: l.f.Center,
                            display: l.X.Flex,
                            flexDirection: l.Aa.Column,
                            justifyContent: l.Xa.Center,
                            padding: {
                                x: 1,
                                y: 5
                            }
                        }, r.createElement(l.tb, {
                            asset: l.ub.SearchNoResults
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
                        }, ((e = {})["data-component-type"] = ["roles-page-search-user-option"], e)), r.createElement(s.Va, i.__assign({
                            hover: this.state.hovered,
                            onClick: this.handleClick,
                            selected: this.state.focused,
                            tabIndex: -1,
                            type: s.Wa.Base
                        }, ((t = {})["data-component-type"] = ["roles-page-search-user-option"], t)), r.createElement(s.Ya, {
                            alignItems: s.f.Center,
                            display: s.X.Flex,
                            justifyContent: s.Xa.Start,
                            padding: {
                                x: 1,
                                y: .5
                            }
                        }, r.createElement(s.Ya, {
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
        d0JU: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return i
            }), n.d(t, "b", function() {
                return r
            }), n.d(t, "c", function() {
                return a
            });
            var i = "https://link.twitch.tv/ManagingRoles",
                r = "https://static-cdn.jtvnw.net/badges/v1/3267646d-33f0-4b17-b3df-f923a41db1d0/2",
                a = "https://static-cdn.jtvnw.net/badges/v1/b817aba4-fad8-49e2-b88a-7cc744dfa6ec/2"
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
            var E, C, b, y = function(e) {
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
                I = n("Ue10"),
                S = n("/7QA"),
                D = n("IFXb"),
                N = n("5NYc"),
                _ = n("vYsf"),
                O = n("NAv5"),
                U = n("91YW");
            ! function(e) {
                e[e.ALL_ROLES = 0] = "ALL_ROLES", e[e.EDITOR = 1] = "EDITOR", e[e.MODERATOR = 2] = "MODERATOR", e[e.VIP = 3] = "VIP"
            }(C || (C = {})),
            function(e) {
                e.IS_EDITOR = "isEditor", e.IS_MOD = "isMod", e.IS_VIP = "isVIP"
            }(b || (b = {}));
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
                F = function(e) {
                    return e
                };

            function w(e) {
                return M(F)(e)
            }
            var T, L = 1,
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
                        }) : this.props.view === r.LOADING ? o.createElement(I.ab, {
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
                                var o = t.setUserCache(r.userCache, l.editors.edges, b.IS_EDITOR).userCache;
                                r.userCache = a.__assign({}, r.userCache, o)
                            }
                            if (l.mods && l.mods.edges) {
                                var s = t.setUserCache(r.userCache, l.mods.edges, b.IS_MOD),
                                    d = s.cursor;
                                o = s.userCache;
                                n = d, r.userCache = a.__assign({}, r.userCache, o)
                            }
                            if (l.vips && l.vips.edges) {
                                var c = t.setUserCache(r.userCache, l.vips.edges, b.IS_VIP);
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
                V = (T = Object(h.a)("ChannelVIPContext", {
                    maxVIPUserLimit: 0,
                    isAtMaxVIPUserLimit: !1,
                    isVIPUnlocked: !1
                })).InnerProvider,
                x = T.withContext,
                B = function(e) {
                    return e
                };

            function j(e) {
                return x(B)(e)
            }
            var Y, G, W = w(function(e) {
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
                                            if ((r = i[n]).key === N.b.VIP_BADGE) return this.setState({
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
                X = n("GIFg"),
                q = n("kYmV"),
                H = n("cuu2"),
                $ = n("d0JU"),
                z = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        return o.createElement(X.a, null, o.createElement(H.a, {
                            learnMoreUrl: $.a,
                            page: q.b.Roles
                        }))
                    }, t
                }(o.Component);
            ! function(e) {
                e[e.ALL_MUTATIONS_FAILED = 0] = "ALL_MUTATIONS_FAILED", e[e.ALL_MUTATIONS_SUCCEEDED = 1] = "ALL_MUTATIONS_SUCCEEDED", e[e.MAX_VIPS_REACHED = 2] = "MAX_VIPS_REACHED", e[e.SOME_MUTATIONS_FAILED = 3] = "SOME_MUTATIONS_FAILED"
            }(G || (G = {}));
            var Q = (Y = Object(h.a)("RolesPageMessageContext", {
                    clearMessage: function() {
                        return null
                    },
                    message: null,
                    setMessage: function() {
                        return null
                    }
                })).InnerProvider,
                K = Y.withContext,
                J = function(e) {
                    return e
                };

            function Z(e) {
                return K(J)(e)
            }
            var ee, te, ne = function(e) {
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
                        return o.createElement(Q, {
                            value: this.state
                        }, this.props.children)
                    }, t
                }(o.Component),
                ie = n("/MKj"),
                re = n("aCAx");
            ! function(e) {
                e.FATAL = "FATAL"
            }(te || (te = {}));
            var ae = (ee = Object(h.a)("MutateUserRolesContext", {
                    mutateUser: function() {
                        return Promise.resolve({
                            editorError: null,
                            modError: null,
                            vipError: null
                        })
                    }
                })).InnerProvider,
                oe = ee.withContext,
                se = function(e) {
                    return e
                };

            function le(e) {
                return oe(se)(e)
            }
            var de = function(e) {
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
                                            }, o = e.isEditor, s = e.isMod, l = e.isVIP, d = !!o !== r.isEditor, c = !!s !== r.isMod, u = this.props.isVIPUnlocked && !!l !== r.isVIP, [4, Promise.all([d ? this.mutateEditor(t, !!o) : this.genericPromise(), c ? this.mutateMod(t, !!s) : this.genericPromise(), u ? this.mutateVIP(t, !!l) : this.genericPromise()])]) : [2, te.FATAL];
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
                                            return (n = r.sent()) && n.addEditor ? [2, n.addEditor.error ? n.addEditor.error.code : null] : [2, te.FATAL];
                                        case 2:
                                            return [4, this.props.removeEditorUserMutation(e)];
                                        case 3:
                                            return (i = r.sent()) && i.removeEditor ? [2, i.removeEditor.error ? i.removeEditor.error.code : null] : [2, te.FATAL];
                                        case 4:
                                            return r.sent(), [2, te.FATAL];
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
                                            return (n = r.sent()) && n.modUser ? [2, n.modUser.error ? n.modUser.error.code : null] : [2, te.FATAL];
                                        case 2:
                                            return [4, this.props.unmodUserMutation(e)];
                                        case 3:
                                            return (i = r.sent()) && i.unmodUser ? [2, i.unmodUser.error ? i.unmodUser.error.code : null] : [2, te.FATAL];
                                        case 4:
                                            return r.sent(), [2, te.FATAL];
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
                                            return (n = r.sent()) && n.grantVIP ? [2, n.grantVIP.error ? n.grantVIP.error.code : null] : [2, te.FATAL];
                                        case 2:
                                            return [4, this.props.unVIPUserMutation(e)];
                                        case 3:
                                            return (i = r.sent()) && i.revokeVIP ? [2, i.revokeVIP.error ? i.revokeVIP.error.code : null] : [2, te.FATAL];
                                        case 4:
                                            return r.sent(), [2, te.FATAL];
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
                        return o.createElement(ae, {
                            value: this.state
                        }, this.props.children)
                    }, t
                }(o.Component),
                ce = n("AKV8"),
                ue = n("yzwe"),
                me = n("CpU+"),
                pe = n("fKMw"),
                he = n("OBYv");
            var fe = n("r6Pb");

            function ve(e) {
                return {
                    channelID: e.channelID || ""
                }
            }
            var ge = Object(s.compose)(j, w, function() {
                    var e = this;
                    return Object(d.a)(he, {
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
                    return Object(d.a)(fe, {
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
                }(), Object(ce.b)(ve), Object(ue.b)(ve), Object(me.a)(), Object(pe.a)())(de),
                ke = function(e) {
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
                                            return (n = d.sent()) === te.FATAL ? (this.setState({
                                                isRetryButtonDisabled: !1
                                            }), [2]) : (i = n.editorError, r = n.modError, o = n.vipError, i || r || o ? (s = a.__assign({
                                                channelLogin: t.channelLogin,
                                                displayName: t.displayName,
                                                lastModified: new Date,
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
                                            }), [2]) : (this.props.modifyUserInCache(a.__assign({}, t, {
                                                lastModified: new Date
                                            }), function() {
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
                        return o.createElement(I.bb, {
                            elevation: 3,
                            headerProps: {
                                title: Object(S.d)("Something went wrong", "RolesPageMessageModal"),
                                onCloseButtonClick: this.handleModalDismiss,
                                closeButtonAriaLabel: Object(S.d)("Close", "RolesPageMessageModal")
                            },
                            footerProps: {
                                primaryButtonProps: {
                                    children: Object(S.d)("Retry", "RolesPageMessageModal"),
                                    disabled: this.state.isRetryButtonDisabled,
                                    onClick: this.handleRetryClick
                                },
                                secondaryButtonProps: {
                                    children: Object(S.d)("Cancel", "RolesPageMessageModal"),
                                    onClick: this.handleModalDismiss,
                                    type: I.F.Hollow
                                }
                            },
                            size: I.cb.Small
                        }, o.createElement(I.Ya, {
                            padding: 1
                        }, o.createElement(I.W, null, Object(S.d)("There was an error modifying roles for {user}.", {
                            user: this.props.message.user.displayName
                        }, "RolesPageMessageModal"))))
                    }, t
                }(o.Component),
                Ee = function(e) {
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
            var Ce, be = Object(s.compose)(Object(ie.connect)(null, function(e) {
                    return Object(s.bindActionCreators)({
                        closeModal: re.c,
                        showModal: function(e) {
                            return Object(re.d)(ke, e)
                        }
                    }, e)
                }), le, Z, w)(Ee),
                ye = n("9C/b"),
                Ie = (n("vsHg"), function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        return o.createElement(I.Ya, {
                            alignItems: I.f.Center,
                            display: I.X.Flex,
                            fullHeight: !0,
                            fullWidth: !0,
                            justifyContent: I.Xa.Center,
                            position: I.kb.Absolute,
                            zIndex: I.jc.Above
                        }, o.createElement(I.i, {
                            type: I.n.SlideInBottom,
                            duration: I.k.Medium,
                            enabled: !0,
                            timing: I.m.EaseInOut
                        }, o.createElement(I.Fb, {
                            background: I.r.Base,
                            borderBottom: !0,
                            borderRadius: I.x.Medium,
                            className: "dashboard-centered-banner",
                            display: I.X.Flex,
                            elevation: 3,
                            flexDirection: I.Aa.Column,
                            padding: 2
                        }, o.createElement(I.Ya, {
                            alignItems: I.f.Center,
                            display: I.X.Flex,
                            justifyContent: I.Xa.Start,
                            margin: {
                                bottom: 1
                            }
                        }, o.createElement(I.Ya, {
                            margin: {
                                right: .5
                            }
                        }, o.createElement(I.q, {
                            alt: Object(S.d)("VoHiYo", "CenteredBanner"),
                            src: "https://static-cdn.jtvnw.net/emoticons/v1/81274/2.0",
                            size: 30
                        })), o.createElement(I.W, {
                            bold: !0,
                            type: I.Wb.H5
                        }, this.props.title)), o.createElement(I.Ya, {
                            margin: {
                                bottom: 2
                            }
                        }, o.createElement(I.W, {
                            fontSize: I.Ca.Size5
                        }, this.props.body)), this.props.children)))
                    }, t
                }(o.Component));
            ! function(e) {
                e.ADD_A_ROLE = "no-users-banner-add-a-role", e.LEARN_MORE = "no-users-banner-learn-more"
            }(Ce || (Ce = {}));
            var Se = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.handleAddARoleClick = function() {
                            t.props.setView(r.ADD_USER)
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        return o.createElement(Ie, {
                            body: Object(S.d)("Manage the permissions users have for your community. Start by adding your first role.", "NoUsersBanner"),
                            title: Object(S.d)("Welcome to Roles", "NoUsersBanner")
                        }, o.createElement(I.Ya, {
                            alignItems: I.f.Center,
                            display: I.X.Flex,
                            justifyContent: I.Xa.Start
                        }, o.createElement(I.Ya, {
                            margin: {
                                right: 1
                            }
                        }, o.createElement(I.z, {
                            "data-test-selector": Ce.ADD_A_ROLE,
                            onClick: this.handleAddARoleClick
                        }, Object(S.d)("Add a Role", "NoUsersBanner"))), o.createElement(I.z, {
                            "data-test-selector": Ce.LEARN_MORE,
                            linkTo: $.a,
                            type: I.F.Text
                        }, Object(S.d)("Learn More", "NoUsersBanner"))))
                    }, t
                }(o.Component),
                De = Object(s.compose)(k, ye.a)(Se),
                Ne = function(e) {
                    var t, n = e.selected;
                    if (n) switch (e.sortDirection) {
                        case Ye.ASCENDING:
                            t = o.createElement(I.tb, {
                                asset: I.ub.GlyphArrUp,
                                type: I.vb.Alt,
                                width: 10
                            });
                            break;
                        case Ye.DESCENDING:
                            t = o.createElement(I.tb, {
                                asset: I.ub.GlyphArrDown,
                                type: I.vb.Alt,
                                width: 10
                            });
                            break;
                        default:
                            t = o.createElement(I.tb, {
                                asset: I.ub.GlyphArrUpDown,
                                width: 10
                            })
                    } else t = o.createElement(I.tb, {
                        asset: I.ub.GlyphArrUpDown,
                        width: 10
                    });
                    return o.createElement(I.Fb, {
                        alignItems: I.f.Center,
                        display: I.X.InlineBlock
                    }, o.createElement(I.Va, {
                        blurAfterClick: !0,
                        onClick: e.onClick,
                        type: I.Wa.Overlay
                    }, o.createElement(I.Ya, {
                        alignItems: I.f.Center,
                        display: I.X.Flex
                    }, o.createElement(I.W, {
                        bold: !0,
                        color: n ? I.O.Alt : I.O.Link,
                        type: I.Wb.Span
                    }, e.children), o.createElement(I.Ya, {
                        alignItems: I.f.Center,
                        display: I.X.Flex,
                        margin: {
                            left: .5
                        }
                    }, t))))
                },
                _e = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        return o.createElement(I.Ya, {
                            alignItems: I.f.Center,
                            display: I.X.Flex,
                            flexDirection: I.Aa.Column,
                            justifyContent: I.Xa.Center,
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
                        }, o.createElement(I.Ya, {
                            padding: {
                                bottom: 1
                            }
                        }, o.createElement(I.q, {
                            alt: "TearGlove",
                            size: 50,
                            src: "https://static-cdn.jtvnw.net/emoticons/v1/160403/3.0"
                        })), o.createElement(I.W, {
                            color: I.O.Alt2,
                            fontSize: I.Ca.Size5
                        }, Object(S.d)("No users to display", "NoFilteredUsers")))
                    }, t
                }(o.Component),
                Oe = n("u5aL"),
                Ue = (n("Jfrt"), function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        var e = this.props,
                            t = e.src,
                            n = e.title;
                        return o.createElement(I.Fb, {
                            alignItems: I.f.Center,
                            background: I.r.Alt2,
                            borderRadius: I.x.Medium,
                            display: I.X.Flex,
                            justifyContent: I.Xa.Center,
                            margin: {
                                right: 1
                            }
                        }, t && o.createElement(I.Ya, {
                            alignItems: I.f.Center,
                            display: I.X.Flex,
                            margin: {
                                x: .5
                            }
                        }, o.createElement(I.S, {
                            alt: n,
                            className: "role-pill-icon",
                            src: t
                        })), o.createElement(I.Ya, {
                            margin: {
                                left: .5,
                                right: 1
                            }
                        }, o.createElement(I.W, {
                            bold: !0
                        }, n)), o.createElement(I.A, {
                            icon: I.ub.NotificationError,
                            onClick: this.props.onRolePillDismissed,
                            type: I.C.Secondary,
                            size: I.B.Small
                        }))
                    }, t
                }(o.Component)),
                Ae = (n("eqbG"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.handleCheckBoxChange = function(e) {
                            var n;
                            t.props.onCheckBoxChange(((n = {})[t.props.value] = e.currentTarget.checked, n))
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        var e = this.props,
                            t = e.currentRolesCount,
                            n = e.disabled,
                            i = e.label,
                            r = e.src,
                            a = e.maxRolesCount;
                        return o.createElement(I.Ya, {
                            alignItems: I.f.Center,
                            display: I.X.Flex,
                            justifyContent: I.Xa.Between,
                            margin: this.props.margin
                        }, o.createElement(I.N, {
                            checked: this.props.checked,
                            disabled: n,
                            label: i,
                            onChange: this.handleCheckBoxChange,
                            value: this.props.value
                        }), void 0 !== t && void 0 !== a && o.createElement(I.Fb, {
                            color: I.O.Alt2,
                            display: I.X.Flex,
                            flexGrow: 1,
                            justifyContent: I.Xa.End,
                            margin: {
                                x: .5
                            }
                        }, o.createElement(I.W, {
                            type: I.Wb.Span
                        }, t, "/", a)), r && o.createElement(I.S, {
                            alt: i,
                            className: "role-selector__icon" + (n ? " role-selector__icon--disabled" : ""),
                            src: r
                        }))
                    }, t
                }(o.Component));

            function Me() {
                return Object(S.d)("Editor", "FilterUsersComponent")
            }

            function Fe() {
                return Object(S.d)("Moderator", "FilterUsersComponent")
            }

            function we() {
                return Object(S.d)("VIP", "FilterUsersComponent")
            }
            var Te, Le = 28.5,
                Re = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            direction: I.v.Bottom
                        }, t.setDivRef = function(e) {
                            t.divRef = e
                        }, t.tryToOpenInViewport = function() {
                            var e = t.divRef.getBoundingClientRect(),
                                n = e.height,
                                i = e.top;
                            n + i >= window.innerHeight && !(i - Le - n <= 50) && t.setState({
                                direction: I.v.Top
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
                            a = e.onCheckBoxChange,
                            s = this.state.direction;
                        return o.createElement(I.Ya, {
                            position: I.kb.Relative
                        }, o.createElement(I.u, {
                            direction: this.state.direction,
                            offsetY: (s === I.v.Bottom ? "-0.5" : "+" + Le) + "px",
                            noTail: !0,
                            show: this.props.show
                        }, o.createElement("div", {
                            ref: this.setDivRef,
                            tabIndex: 0
                        }, o.createElement(I.Fb, {
                            border: !0,
                            borderRadius: I.x.Small,
                            elevation: 2
                        }, o.createElement(Ae, {
                            checked: n,
                            disabled: i,
                            label: Fe(),
                            onCheckBoxChange: a,
                            margin: {
                                x: 1,
                                y: 2
                            },
                            src: $.b,
                            value: b.IS_MOD
                        }), this.props.isVIPUnlocked && o.createElement(Ae, {
                            checked: i,
                            currentRolesCount: this.props.totalVIPs + (this.props.view === r.ADD_USER && i ? 1 : 0),
                            disabled: n || this.props.isAtMaxVIPUserLimit && !i,
                            label: we(),
                            onCheckBoxChange: a,
                            margin: {
                                x: 1,
                                bottom: 2
                            },
                            maxRolesCount: this.props.maxVIPUserLimit,
                            src: $.c,
                            value: b.IS_VIP
                        }), o.createElement(Ae, {
                            checked: t,
                            disabled: !1,
                            label: Me(),
                            onCheckBoxChange: a,
                            margin: {
                                x: 1,
                                bottom: 2
                            },
                            value: b.IS_EDITOR
                        }), o.createElement(I.Va, {
                            linkTo: $.a,
                            targetBlank: !0
                        }, o.createElement(I.Fb, {
                            alignItems: I.f.Center,
                            borderTop: !0,
                            display: I.X.Flex,
                            padding: 1
                        }, o.createElement(I.Ya, {
                            alignItems: I.f.Center,
                            display: I.X.Flex,
                            margin: {
                                right: 1
                            }
                        }, o.createElement(I.tb, {
                            asset: I.ub.NotificationInfo,
                            type: I.vb.Inherit
                        })), o.createElement(I.W, null, Object(S.d)("Learn about Roles", "RoleSelector"))))))))
                    }, t
                }(o.Component),
                Pe = Object(s.compose)(w, k, j)(Re),
                Ve = j(function(e) {
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
                            a = Me(),
                            s = Fe(),
                            l = we(),
                            d = i.isEditor,
                            c = i.isMod,
                            u = i.isVIP,
                            m = o.createElement(o.Fragment, null, d && o.createElement(Ue, {
                                onRolePillDismissed: t.bind(null, b.IS_EDITOR),
                                title: a
                            }), c && o.createElement(Ue, {
                                onRolePillDismissed: t.bind(null, b.IS_MOD),
                                src: $.b,
                                title: s
                            }), this.props.isVIPUnlocked && u && o.createElement(Ue, {
                                onRolePillDismissed: t.bind(null, b.IS_VIP),
                                src: $.c,
                                title: l
                            }));
                        return o.createElement(I.Ya, {
                            alignItems: I.f.Center,
                            display: I.X.Flex,
                            position: I.kb.Relative
                        }, n && m, o.createElement(I.Ya, {
                            margin: {
                                right: n ? void 0 : 1
                            }
                        }, !r && o.createElement(I.A, {
                            disabled: (c || u) && d,
                            onClick: this.handleAddRoleClick,
                            icon: I.ub.Plus,
                            size: I.B.Small
                        }), r && o.createElement(Oe.a, {
                            onClickOut: this.handleClickOut
                        }, o.createElement(I.z, {
                            icon: I.ub.Plus,
                            onClick: this.handleAddRoleClick,
                            size: I.D.Small,
                            type: I.F.Hollow
                        }, o.createElement(I.W, null, Object(S.d)("Add Role", "RoleSelector"))), o.createElement(Pe, {
                            isEditor: d,
                            isMod: c,
                            isVIP: u,
                            onCheckBoxChange: this.props.onCheckBoxChange,
                            show: r
                        }))), !n && m)
                    }, t
                }(o.Component)),
                xe = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        return o.createElement(I.Fb, {
                            alignItems: I.f.Center,
                            background: I.r.Base,
                            borderBottom: !0,
                            borderRadius: I.x.Large,
                            display: I.X.Flex,
                            elevation: 1,
                            fullWidth: !0,
                            margin: this.props.margin,
                            padding: 1
                        }, this.props.children)
                    }, t
                }(o.Component);
            ! function(e) {
                e.CJK_NAME = "cjk_name"
            }(Te || (Te = {}));
            var Be, je, Ye, Ge = function(e) {
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
                                            return (t = l.sent()) === te.FATAL ? (this.props.setMessage({
                                                user: e,
                                                error: t,
                                                type: G.ALL_MUTATIONS_FAILED
                                            }), [2]) : (n = t.editorError, i = t.modError, r = t.vipError, n || i || r ? (o = a.__assign({
                                                channelLogin: e.channelLogin,
                                                displayName: e.displayName,
                                                lastModified: new Date,
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
                                            }), [2]) : (this.props.modifyUserInCache(a.__assign({}, e, {
                                                lastModified: new Date
                                            })), [2]))
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
                            r = t.toLowerCase() !== n.toLowerCase();
                        return o.createElement(xe, {
                            margin: {
                                top: .5
                            }
                        }, o.createElement(I.P, {
                            cols: Be.FIRST_COLUMN
                        }, o.createElement(I.Fb, {
                            color: I.O.Base
                        }, o.createElement(I.U, {
                            to: "/" + t,
                            targetBlank: !0,
                            hoverUnderlineNone: !0,
                            type: I.V.Inherit
                        }, o.createElement(I.Ya, {
                            alignItems: I.f.Center,
                            display: I.X.Flex,
                            justifyContent: I.Xa.Start,
                            overflow: I.db.Hidden
                        }, o.createElement(I.Ya, null, o.createElement(I.q, {
                            alt: t,
                            size: 30,
                            src: e.profileImageURL
                        })), o.createElement(I.Ya, {
                            margin: {
                                left: 1
                            },
                            display: I.X.Flex,
                            alignItems: I.f.Center
                        }, o.createElement(I.W, {
                            bold: !0,
                            ellipsis: !r,
                            type: I.Wb.P
                        }, t), r && o.createElement(I.Ya, {
                            margin: {
                                left: 1
                            }
                        }, o.createElement(I.W, {
                            bold: !0,
                            color: I.O.Alt2,
                            "data-test-selector": Te.CJK_NAME,
                            ellipsis: !0,
                            type: I.Wb.P
                        }, n))))))), o.createElement(I.P, {
                            cols: Be.SECOND_COLUMN
                        }, o.createElement(I.Ya, {
                            display: I.X.Flex,
                            margin: {
                                right: 5
                            },
                            flexGrow: 1,
                            alignItems: I.f.Center
                        }, o.createElement(Ve, {
                            user: e,
                            onCheckBoxChange: this.handleCheckBoxChange,
                            onRolePillDismissed: this.handleRolePillDismissed,
                            roleOrder: I.Aa.RowReverse
                        }))), o.createElement(I.P, {
                            cols: Be.THIRD_COLUMN
                        }, o.createElement(I.W, {
                            title: Object(S.j)(i, {
                                year: "numeric",
                                month: "short",
                                day: "numeric",
                                hour: "numeric",
                                minute: "2-digit",
                                hour12: !0
                            })
                        }, Object(S.h)(i))))
                    }, t
                }(o.Component),
                We = Object(s.compose)(Z, w, le)(Ge),
                Xe = (n("tC/j"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.sortByUsername = function() {
                            return Object.keys(t.props.userCache).sort(function(e, n) {
                                var i = t.props.userCache[e].channelLogin,
                                    r = t.props.userCache[n].channelLogin;
                                if (t.props.sortDirection === Ye.ASCENDING) {
                                    if (i > r) return 1;
                                    if (i < r) return -1
                                }
                                if (t.props.sortDirection === Ye.DESCENDING) {
                                    if (i < r) return 1;
                                    if (i > r) return -1
                                }
                                return 0
                            })
                        }, t.sortByLastModified = function() {
                            return Object.keys(t.props.userCache).sort(function(e, n) {
                                var i = t.props.userCache[e].lastModified,
                                    r = t.props.userCache[n].lastModified;
                                if (t.props.sortDirection === Ye.ASCENDING) {
                                    if (i < r) return 1;
                                    if (i > r) return -1
                                }
                                if (t.props.sortDirection === Ye.DESCENDING) {
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
                            t = this.props.sortBy === je.USERNAME ? this.sortByUsername() : this.sortByLastModified(),
                            n = this.props.filterType === C.ALL_ROLES ? t.map(function(e) {
                                return o.createElement(We, {
                                    "data-test-selector": "roles-table-row-" + e,
                                    key: "roles-table-row-" + e,
                                    userID: e
                                })
                            }) : t.reduce(function(t, n) {
                                var i = e.props.userCache[n];
                                return i && (e.props.filterType === C.EDITOR && i[b.IS_EDITOR] || e.props.filterType === C.MODERATOR && i[b.IS_MOD] || e.props.filterType === C.VIP && i[b.IS_VIP]) && t.push(o.createElement(We, {
                                    "data-test-selector": "roles-table-row-" + n,
                                    key: "roles-table-row-" + n,
                                    userID: n
                                })), t
                            }, []);
                        return o.createElement(o.Fragment, null, o.createElement(I.Ya, {
                            className: this.props.view === r.ADD_USER ? "table-list-disabled-rows" : ""
                        }, n), 0 === n.length && o.createElement(_e, null))
                    }, t
                }(o.Component)),
                qe = Object(s.compose)(k, w)(Xe);
            ! function(e) {
                e[e.FIRST_COLUMN = 3] = "FIRST_COLUMN", e[e.SECOND_COLUMN = 6] = "SECOND_COLUMN", e[e.THIRD_COLUMN = 3] = "THIRD_COLUMN"
            }(Be || (Be = {})),
            function(e) {
                e.USERNAME = "username", e.LAST_MODIFIED = "last-modified"
            }(je || (je = {})),
            function(e) {
                e.ASCENDING = "ascending", e.DESCENDING = "descending"
            }(Ye || (Ye = {}));
            var He, $e = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            sortBy: je.USERNAME,
                            sortDirection: Ye.ASCENDING
                        }, t.changeSort = function(e) {
                            t.setState({
                                sortBy: e,
                                sortDirection: t.state.sortDirection && t.state.sortBy === e && t.state.sortDirection !== Ye.DESCENDING ? Ye.DESCENDING : Ye.ASCENDING
                            })
                        }, t.handleUsernameHeaderClick = function() {
                            t.changeSort(je.USERNAME)
                        }, t.handleLastModifiedHeaderClick = function() {
                            t.changeSort(je.LAST_MODIFIED)
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        var e = this.state.sortBy,
                            t = this.state.sortDirection;
                        return o.createElement(I.Ya, {
                            display: I.X.InlineBlock,
                            fullWidth: !0,
                            fullHeight: !0,
                            margin: {
                                top: 1
                            }
                        }, o.createElement(I.Ya, {
                            display: I.X.Flex,
                            alignItems: I.f.Center,
                            padding: {
                                x: 1,
                                bottom: .5
                            }
                        }, o.createElement(I.P, {
                            cols: Be.FIRST_COLUMN
                        }, o.createElement(Ne, {
                            selected: e === je.USERNAME,
                            sortDirection: t,
                            onClick: this.handleUsernameHeaderClick
                        }, Object(S.d)("Username", "RolesPageTable"))), o.createElement(I.P, {
                            cols: Be.SECOND_COLUMN
                        }, o.createElement(I.W, {
                            type: I.Wb.Span,
                            bold: !0,
                            color: I.O.Link
                        }, " ", Object(S.d)("Roles", "RolesPageTable"), " ")), o.createElement(I.P, {
                            cols: Be.THIRD_COLUMN
                        }, o.createElement(Ne, {
                            selected: e === je.LAST_MODIFIED,
                            sortDirection: t,
                            onClick: this.handleLastModifiedHeaderClick
                        }, Object(S.d)("Last Modified", "RolesPageTable")))), o.createElement(qe, {
                            sortBy: e,
                            sortDirection: t
                        }))
                    }, t
                }(o.Component),
                ze = n("8Ad5"),
                Qe = n("f00E"),
                Ke = n("H/lO"),
                Je = n("NZDK"),
                Ze = n("AXTS"),
                et = n("Kw8/"),
                tt = 250,
                nt = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            canEditInputField: !0,
                            searchedUsers: null,
                            showDropDown: !1
                        }, t.searchClient = new Je.a({
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
                                    return this.algoliaDebounceTimeout && clearTimeout(this.algoliaDebounceTimeout), this.algoliaDebounceTimeout = setTimeout(this.queryAlgolia.bind(this, n), tt), [2]
                                })
                            })
                        }, t.queryAlgolia = function(e) {
                            return a.__awaiter(t, void 0, void 0, function() {
                                var t;
                                return a.__generator(this, function(n) {
                                    switch (n.label) {
                                        case 0:
                                            return e ? [4, this.searchClient.queryForType(Ke.a.Users, e, Object(Qe.a)(), {
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
                                showDropDown: e && e.getAttribute(et.a) === et.b
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
                            r = o.createElement(I.Ya, {
                                margin: {
                                    right: e ? 1 : .5
                                }
                            }, o.createElement(I.q, {
                                alt: Object(S.d)("Avatar", "SearchUsers"),
                                size: 30,
                                src: e && e.profileImageURL
                            }));
                        return o.createElement(I.Ya, null, !i && e && o.createElement(I.Va, {
                            onClick: this.enableInputField,
                            type: I.Wa.Overlay
                        }, o.createElement(I.Ya, {
                            alignItems: I.f.Center,
                            display: I.X.Flex
                        }, r, o.createElement(I.W, {
                            bold: !0,
                            type: I.Wb.P,
                            ellipsis: !0
                        }, t), t.toLowerCase() !== n.toLowerCase() && o.createElement(I.Ya, {
                            margin: {
                                left: 1
                            }
                        }, o.createElement(I.W, {
                            bold: !0,
                            type: I.Wb.P,
                            ellipsis: !0,
                            color: I.O.Alt2
                        }, n)))), (i || !e) && o.createElement(Oe.a, {
                            onClickOut: this.handleClickOut
                        }, o.createElement(I.Ya, {
                            alignItems: I.f.Center,
                            display: I.X.Flex
                        }, r, o.createElement(I.Ya, {
                            position: I.kb.Relative
                        }, o.createElement(I.Sa, {
                            autoFocus: !0,
                            defaultValue: n,
                            onBlur: this.handleInputBlur,
                            onChange: this.handleInputChange,
                            onFocus: this.handleInputFocus,
                            onKeyDown: this.props.onInputKeyDown,
                            placeholder: Object(S.d)("Search", "SearchUsers"),
                            type: I.Ua.Text
                        }), o.createElement(Ze.a, {
                            onOptionClick: this.handleOptionClick,
                            onOptionBlur: this.handleOptionBlur,
                            show: this.state.showDropDown,
                            users: this.state.searchedUsers
                        })))))
                    }, t
                }(o.Component),
                it = Object(s.compose)(w, ye.a)(nt);
            ! function(e) {
                e.CANCEL_BUTTON = "roles-page-add-user-cancel-button", e.SAVE_BUTTON = "roles-page-add-user-save-button"
            }(He || (He = {}));
            var rt, at = function(e) {
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
                            e.keyCode === ze.a.Esc && t.props.setView(r.DEFAULT)
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
                                            return t = d.sent(), this.props.setView(r.DEFAULT), t === te.FATAL ? (this.props.setMessage({
                                                user: e,
                                                error: t,
                                                type: G.ALL_MUTATIONS_FAILED
                                            }), [2]) : (n = t.editorError, i = t.modError, o = t.vipError, n || i || o ? (s = a.__assign({
                                                channelLogin: e.channelLogin,
                                                displayName: e.displayName,
                                                lastModified: new Date,
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
                                            }), [2]) : (this.props.modifyUserInCache(a.__assign({}, e, {
                                                lastModified: new Date
                                            }), function() {
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
                        return o.createElement(I.Ya, {
                            fullWidth: !0,
                            margin: {
                                bottom: 2
                            },
                            position: I.kb.Relative,
                            zIndex: I.jc.Above
                        }, o.createElement(I.i, {
                            duration: I.k.Medium,
                            enabled: !0,
                            type: I.n.SlideInBottom
                        }, o.createElement(xe, null, o.createElement(I.P, {
                            cols: Be.FIRST_COLUMN
                        }, o.createElement(it, {
                            onInputKeyDown: this.handleInputKeyDown,
                            onUserDeselected: this.handleUserDeselected,
                            onUserSelected: this.handleUserSelected,
                            selectedUser: e
                        })), o.createElement(I.P, {
                            cols: Be.SECOND_COLUMN
                        }, o.createElement(I.Ya, {
                            display: I.X.Flex,
                            alignItems: I.f.Center
                        }, e && o.createElement(Ve, {
                            onCheckBoxChange: this.handleCheckBoxChange,
                            openDropDownOnMount: !0,
                            onRolePillDismissed: this.handleRolePillDismissed,
                            user: e
                        }))), o.createElement(I.P, {
                            cols: Be.THIRD_COLUMN
                        }, o.createElement(I.Ya, {
                            alignItems: I.f.Center,
                            display: I.X.Flex,
                            justifyContent: I.Xa.End
                        }, o.createElement(I.Ya, {
                            margin: {
                                right: 1
                            }
                        }, o.createElement(I.z, {
                            "data-test-selector": He.CANCEL_BUTTON,
                            onClick: this.handleCancelClick,
                            type: I.F.Hollow
                        }, Object(S.d)("Cancel", "AddUserComponent"))), o.createElement(I.z, {
                            "data-test-selector": He.SAVE_BUTTON,
                            disabled: !e || !e.isEditor && !e.isMod && !e.isVIP,
                            onClick: this.handleSaveClick,
                            type: I.F.Success
                        }, Object(S.d)("Save", "AddUserComponent")))))))
                    }, t
                }(o.Component),
                ot = Object(s.compose)(w, le, Z, k)(at);
            ! function(e) {
                e.ALL_MUTATIONS_SUCCEEDED = "all-mutations-succeeded", e.SOME_MUTATIONS_FAILED = "some-mutations-failed"
            }(rt || (rt = {}));
            var st = function(e) {
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
                        return e ? o.createElement(I.Ya, {
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
                                return o.createElement(I.Oa, {
                                    closeButtonAriaLabel: n,
                                    closeButtonOnClick: t,
                                    "data-test-selector": rt.ALL_MUTATIONS_SUCCEEDED,
                                    description: Object(S.d)("Specified roles added for {user}.", {
                                        user: i + (i.toLowerCase() !== r.toLowerCase() ? " (" + r + ")" : "")
                                    }, "RolesPageTopBar"),
                                    title: Object(S.d)("Success!", "RolesPageTopBar"),
                                    type: I.Pa.Success
                                });
                            case G.SOME_MUTATIONS_FAILED:
                                var a;
                                i = (a = e.user).channelLogin, r = a.displayName;
                                return o.createElement(I.Oa, {
                                    closeButtonAriaLabel: n,
                                    closeButtonOnClick: t,
                                    "data-test-selector": rt.SOME_MUTATIONS_FAILED,
                                    description: Object(S.d)("Unfortunately, some of the specified roles were unable to be added for {user}.", {
                                        user: i + (i.toLowerCase() !== r.toLowerCase() ? " (" + r + ")" : "")
                                    }, "RolesPageTopBar"),
                                    title: Object(S.d)("Warning!", "RolesPageTopBar"),
                                    type: I.Pa.Warning
                                });
                            case G.MAX_VIPS_REACHED:
                                return o.createElement(I.Oa, {
                                    closeButtonAriaLabel: n,
                                    closeButtonOnClick: this.handleDismissVIPWarningMessage,
                                    description: Object(S.d)("You have reached the maximum amount of VIP roles. <x:link>Read more about Roles.</x:link>", {
                                        "x:link": function(e) {
                                            return o.createElement(I.U, {
                                                linkTo: $.a,
                                                targetBlank: !0
                                            }, e)
                                        }
                                    }, "RolesPageTopBar"),
                                    title: Object(S.d)("You can't add any more VIPs.", "RolesPageTopBar"),
                                    type: I.Pa.Warning
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
                lt = Object(s.compose)(j, Z)(st),
                dt = (n("MQ8I"), function(e) {
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
                        return o.createElement(I.Ya, {
                            alignItems: I.f.Center,
                            display: I.X.Flex
                        }, o.createElement(I.Ya, {
                            margin: {
                                right: 1
                            }
                        }, o.createElement(I.W, null, Object(S.d)("Display", "FilterUsersComponent"))), o.createElement(I.Ya, null, o.createElement(Oe.a, {
                            onClickOut: this.handleClickOut
                        }, o.createElement(I.z, {
                            onClick: this.handleButtonClick,
                            type: I.F.Text
                        }, o.createElement(I.Ya, {
                            alignItems: I.f.Center,
                            display: I.X.Flex
                        }, o.createElement(I.Ya, {
                            margin: {
                                right: .5
                            }
                        }, o.createElement(I.W, {
                            bold: !0
                        }, this.getFilterText(e))), o.createElement(I.tb, {
                            asset: I.ub.Carat,
                            height: 16,
                            width: 16
                        }))), o.createElement(I.Ya, {
                            className: "role-dropdown-container",
                            position: I.kb.Relative
                        }, o.createElement(I.Y, {
                            items: [{
                                disabled: e === C.ALL_ROLES,
                                onClick: this.handleOptionClick.bind(this, C.ALL_ROLES),
                                title: this.getFilterText(C.ALL_ROLES)
                            }, {
                                disabled: e === C.MODERATOR,
                                figure: {
                                    alt: this.getFilterText(C.MODERATOR),
                                    src: $.b
                                },
                                figureRight: !0,
                                onClick: this.handleOptionClick.bind(this, C.MODERATOR),
                                title: this.getFilterText(C.MODERATOR)
                            }].concat(this.props.isVIPUnlocked ? [{
                                disabled: e === C.VIP,
                                figure: {
                                    alt: this.getFilterText(C.VIP),
                                    src: $.c
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
                                    return Me();
                            case C.MODERATOR:
                                    return Fe();
                            case C.VIP:
                                    return we()
                        }
                    }, t
                }(o.Component)),
                ct = Object(s.compose)(j, w)(dt),
                ut = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.handleButtonClick = function() {
                            t.props.setView(r.ADD_USER), t.props.clearMessage()
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        var e = this.props.view === r.ADD_USER;
                        return o.createElement(o.Fragment, null, o.createElement(I.Fb, {
                            alignItems: I.f.Center,
                            borderBottom: !0,
                            display: I.X.Flex,
                            fullWidth: !0,
                            justifyContent: I.Xa.Between,
                            margin: {
                                bottom: 2
                            },
                            padding: {
                                bottom: 1
                            }
                        }, o.createElement(ct, null), o.createElement(I.z, {
                            disabled: e,
                            onClick: this.handleButtonClick
                        }, Object(S.d)("Add New", "TopBarComponent"))), o.createElement(lt, null), e && o.createElement(ot, null))
                    }, t
                }(o.Component),
                mt = Object(s.compose)(Z, k)(ut),
                pt = k(function(e) {
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
                        }, o.createElement(ne, null, o.createElement(ge, {
                            channelID: e
                        }, this.props.view === r.NO_USERS ? o.createElement(De, null) : o.createElement(D.a, null, o.createElement(mt, null), o.createElement($e, null), o.createElement(be, null)), o.createElement(z, null)))))
                    }, t
                }(o.Component)),
                ht = n("LQi+"),
                ft = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.reportInteractive()
                    }, t.prototype.componentDidUpdate = function(e) {
                        e.data.loading && this.reportInteractive()
                    }, t.prototype.render = function() {
                        if (this.props.data.loading) return o.createElement(I.ab, {
                            fillContent: !0
                        });
                        if (this.props.data.error) return o.createElement(l.a, null);
                        var e = this.props.data,
                            t = e.user && e.user.id;
                        return t ? o.createElement(y, null, o.createElement(pt, {
                            channelID: t
                        })) : null
                    }, t.prototype.reportInteractive = function() {
                        this.props.data.loading || this.props.latencyTracking.reportInteractive(1)
                    }, t
                }(o.Component),
                vt = Object(s.compose)(Object(p.b)("RolesPage", {
                    destination: u.a.RolesPage
                }), Object(c.a)({
                    location: m.PageviewLocation.DashboardSettingsRolesPage
                }), Object(d.a)(ht, {
                    options: function(e) {
                        return {
                            variables: {
                                channelLogin: e.match.params.channelLogin
                            }
                        }
                    }
                }))(ft);
            n.d(t, "RolesPage", function() {
                return vt
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