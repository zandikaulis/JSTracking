(window.webpackJsonp = window.webpackJsonp || []).push([
    [154], {
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
                return o
            });
            var i, r = n("mrSG"),
                a = n("yR8l"),
                s = n("4HoE");

            function o(e) {
                var t = this;
                return Object(a.a)(s, {
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
                s = n("8/mp"),
                o = n("Kw8/"),
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
                        }, r.createElement(s.b, null, r.createElement(l.Xa, {
                            alignItems: l.f.Center,
                            display: l.X.Flex,
                            flexDirection: l.Aa.Column,
                            justifyContent: l.Wa.Center
                        }, t && t.length > 0 ? t.map(function(t, n) {
                            return r.createElement(o.c, {
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
                        }, r.createElement(l.qb, {
                            asset: l.rb.SearchNoResults
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
                return s
            });
            var i = n("mrSG"),
                r = n("yR8l"),
                a = n("JiJH");

            function s() {
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
                s = n("8Ad5"),
                o = n("Ue10"),
                l = (n("sZ5a"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            focused: !1,
                            hovered: !1
                        }, t.handleKeyDown = function(e) {
                            var n = e.keyCode;
                            n !== s.a.Space && n !== s.a.Enter || t.handleClick()
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
                        }, ((e = {})["data-component-type"] = ["roles-page-search-user-option"], e)), r.createElement(o.Ua, i.__assign({
                            hover: this.state.hovered,
                            onClick: this.handleClick,
                            selected: this.state.focused,
                            tabIndex: -1,
                            type: o.Va.Base
                        }, ((t = {})["data-component-type"] = ["roles-page-search-user-option"], t)), r.createElement(o.Xa, {
                            alignItems: o.f.Center,
                            display: o.X.Flex,
                            justifyContent: o.Wa.Start,
                            padding: {
                                x: 1,
                                y: .5
                            }
                        }, r.createElement(o.Xa, {
                            margin: {
                                right: .5
                            }
                        }, r.createElement(o.q, {
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
        MWdL: function(e, t, n) {},
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
                return s
            });
            var i = n("mrSG"),
                r = n("yR8l"),
                a = n("sMoq");

            function s() {
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
        gD7V: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "SearchUserQuery"
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
                    end: 69
                }
            };
            n.loc.source = {
                body: "query SearchUserQuery($login: String!) {\nuser(login: $login) {\nid\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        qcBk: function(e, t, n) {
            "use strict";
            n.r(t);
            var i, r, a = n("mrSG"),
                s = n("q1tI"),
                o = n("fvjX"),
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
                k = function(e) {
                    return e
                };

            function g(e) {
                return v(k)(e)
            }
            var E, C, y, b = function(e) {
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
                        return s.createElement(f, {
                            value: this.state
                        }, this.props.children)
                    }, t
                }(s.Component),
                I = n("Ue10"),
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
            }(y || (y = {}));
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

            function F(e) {
                return M(T)(e)
            }
            var L, R = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.modifyUserInCache = function(e, t) {
                            var i = e.id;
                            i && n.setState(function(t) {
                                var n, r = t.totalVIPs,
                                    s = t.userCache,
                                    o = s[i] || {};
                                return {
                                    userCache: a.__assign({}, s, (n = {}, n[i] = a.__assign({}, o, e), n)),
                                    totalVIPs: r + (o.isVIP !== e.isVIP && (e.isVIP ? 1 : -1) || 0)
                                }
                            }, function() {
                                t && t()
                            })
                        }, n.setUserCache = function(e, t, n) {
                            for (var i, r = 0, a = t; r < a.length; r++) {
                                var s = a[r],
                                    o = s.node;
                                if (o) {
                                    var l = o.id;
                                    if (l) {
                                        i = s.cursor;
                                        var d = s.grantedAt,
                                            c = e[l] || {
                                                displayName: o.displayName,
                                                channelLogin: o.login,
                                                id: o.id,
                                                lastModified: d,
                                                profileImageURL: o.profileImageURL,
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
                                                fetchPolicy: "network-only",
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
                        e.channelID !== this.props.channelID && this.setState({
                            userCache: {}
                        }), e.data.loading && this.updateUserCache()
                    }, t.prototype.render = function() {
                        return this.props.data.error ? s.createElement(l.a, {
                            message: Object(S.d)("Whoops, something went wrong.", "UserRolesContext")
                        }) : this.props.view === r.LOADING ? s.createElement(I.Za, {
                            fillContent: !0
                        }) : s.createElement(A, {
                            value: this.state
                        }, this.props.children)
                    }, t.prototype.updateUserCache = function(e) {
                        var t = this;
                        void 0 === e && (e = this.props.data);
                        var n, i, s = e.error,
                            o = e.loading,
                            l = e.user;
                        s || o || !l || this.props.view !== r.LOADING || this.setState(function(e) {
                            var r = a.__assign({}, e);
                            if (r.userCache || (r.userCache = {}), l.editors && l.editors.edges) {
                                var s = t.setUserCache(r.userCache, l.editors.edges, y.IS_EDITOR).userCache;
                                r.userCache = a.__assign({}, r.userCache, s)
                            }
                            if (l.mods && l.mods.edges) {
                                var o = t.setUserCache(r.userCache, l.mods.edges, y.IS_MOD),
                                    d = o.cursor;
                                s = o.userCache;
                                n = d, r.userCache = a.__assign({}, r.userCache, s)
                            }
                            if (l.vips && l.vips.edges) {
                                var c = t.setUserCache(r.userCache, l.vips.edges, y.IS_VIP);
                                d = c.cursor, s = c.userCache;
                                i = d, r.userCache = a.__assign({}, r.userCache, s), r.totalVIPs = e.totalVIPs + l.vips.edges.length
                            }
                            var u = l.id;
                            return u && r.userCache && r.userCache[u] && delete r.userCache[u], r
                        }, function() {
                            return a.__awaiter(t, void 0, void 0, function() {
                                return a.__generator(this, function(e) {
                                    switch (e.label) {
                                        case 0:
                                            return n || i ? [4, this.fetchMore(n, i)] : [3, 2];
                                        case 1:
                                            return e.sent(), [3, 3];
                                        case 2:
                                            this.props.latencyTracking.reportInteractive(), this.props.setView(0 === Object.keys(this.state.userCache).length ? r.NO_USERS : r.DEFAULT), e.label = 3;
                                        case 3:
                                            return [2]
                                    }
                                })
                            })
                        })
                    }, t
                }(s.Component),
                w = Object(o.compose)(g, Object(p.b)("WithUserRolesCacheProvider"), Object(d.a)(U, {
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
                P = (L = Object(h.a)("ChannelVIPContext", {
                    maxVIPUserLimit: 0,
                    isAtMaxVIPUserLimit: !1,
                    isVIPUnlocked: !1
                })).InnerProvider,
                V = L.withContext,
                x = function(e) {
                    return e
                };

            function B(e) {
                return V(x)(e)
            }
            var j, X, G = F(function(e) {
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
                        return s.createElement(P, {
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
                }(s.Component)),
                W = n("GIFg"),
                q = n("kYmV"),
                H = n("cuu2"),
                $ = "https://help.twitch.tv/customer/en/portal/articles/659115-twitch-chat-badges-guide",
                Q = "https://static-cdn.jtvnw.net/badges/v1/3267646d-33f0-4b17-b3df-f923a41db1d0/1",
                z = "https://static-cdn.jtvnw.net/badges/v1/b817aba4-fad8-49e2-b88a-7cc744dfa6ec/1",
                K = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        return s.createElement(W.a, null, s.createElement(H.a, {
                            learnMoreUrl: $,
                            page: q.b.Roles
                        }))
                    }, t
                }(s.Component);
            ! function(e) {
                e[e.ALL_MUTATIONS_FAILED = 0] = "ALL_MUTATIONS_FAILED", e[e.ALL_MUTATIONS_SUCCEEDED = 1] = "ALL_MUTATIONS_SUCCEEDED", e[e.MAX_VIPS_REACHED = 2] = "MAX_VIPS_REACHED", e[e.SOME_MUTATIONS_FAILED = 3] = "SOME_MUTATIONS_FAILED"
            }(X || (X = {}));
            var Y = (j = Object(h.a)("RolesPageMessageContext", {
                    clearMessage: function() {
                        return null
                    },
                    message: null,
                    setMessage: function() {
                        return null
                    }
                })).InnerProvider,
                J = j.withContext,
                Z = function(e) {
                    return e
                };

            function ee(e) {
                return J(Z)(e)
            }
            var te, ne, ie = function(e) {
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
                        return s.createElement(Y, {
                            value: this.state
                        }, this.props.children)
                    }, t
                }(s.Component),
                re = n("/MKj"),
                ae = n("aCAx");
            ! function(e) {
                e.FATAL = "FATAL"
            }(ne || (ne = {}));
            var se = (te = Object(h.a)("MutateUserRolesContext", {
                    mutateUser: function() {
                        return Promise.resolve({
                            editorError: null,
                            modError: null,
                            vipError: null
                        })
                    }
                })).InnerProvider,
                oe = te.withContext,
                le = function(e) {
                    return e
                };

            function de(e) {
                return oe(le)(e)
            }
            var ce = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.mutateUser = function(e) {
                            return a.__awaiter(n, void 0, void 0, function() {
                                var t, n, i, r, s, o, l, d, c, u, m, p, h, f;
                                return a.__generator(this, function(a) {
                                    switch (a.label) {
                                        case 0:
                                            return t = e.channelLogin, (n = e.id) && t ? (i = this.props.userCache, r = i[n] || {
                                                isEditor: !1,
                                                isMod: !1,
                                                isVIP: !1
                                            }, s = e.isEditor, o = e.isMod, l = e.isVIP, d = !!s !== r.isEditor, c = !!o !== r.isMod, u = this.props.isVIPUnlocked && !!l !== r.isVIP, [4, Promise.all([d ? this.mutateEditor(t, !!s) : this.genericPromise(), c ? this.mutateMod(t, !!o) : this.genericPromise(), u ? this.mutateVIP(t, !!l) : this.genericPromise()])]) : [2, ne.FATAL];
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
                                            return (n = r.sent()) && n.addEditor ? [2, n.addEditor.error ? n.addEditor.error.code : null] : [2, ne.FATAL];
                                        case 2:
                                            return [4, this.props.removeEditorUserMutation(e)];
                                        case 3:
                                            return (i = r.sent()) && i.removeEditor ? [2, i.removeEditor.error ? i.removeEditor.error.code : null] : [2, ne.FATAL];
                                        case 4:
                                            return r.sent(), [2, ne.FATAL];
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
                                            return (n = r.sent()) && n.modUser ? [2, n.modUser.error ? n.modUser.error.code : null] : [2, ne.FATAL];
                                        case 2:
                                            return [4, this.props.unmodUserMutation(e)];
                                        case 3:
                                            return (i = r.sent()) && i.unmodUser ? [2, i.unmodUser.error ? i.unmodUser.error.code : null] : [2, ne.FATAL];
                                        case 4:
                                            return r.sent(), [2, ne.FATAL];
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
                                            return (n = r.sent()) && n.grantVIP ? [2, n.grantVIP.error ? n.grantVIP.error.code : null] : [2, ne.FATAL];
                                        case 2:
                                            return [4, this.props.unVIPUserMutation(e)];
                                        case 3:
                                            return (i = r.sent()) && i.revokeVIP ? [2, i.revokeVIP.error ? i.revokeVIP.error.code : null] : [2, ne.FATAL];
                                        case 4:
                                            return r.sent(), [2, ne.FATAL];
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
                        return s.createElement(se, {
                            value: this.state
                        }, this.props.children)
                    }, t
                }(s.Component),
                ue = n("AKV8"),
                me = n("yzwe"),
                pe = n("CpU+"),
                he = n("fKMw"),
                fe = n("OBYv");
            var ve = n("r6Pb");

            function ke(e) {
                return {
                    channelID: e.channelID || ""
                }
            }
            var ge = Object(o.compose)(B, F, function() {
                    var e = this;
                    return Object(d.a)(fe, {
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
                    return Object(d.a)(ve, {
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
                }(), Object(ue.b)(ke), Object(me.b)(ke), Object(pe.a)(), Object(he.a)())(ce),
                Ee = function(e) {
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
                                var e, t, n, i, r, s, o, l = this;
                                return a.__generator(this, function(d) {
                                    switch (d.label) {
                                        case 0:
                                            return e = this.props.message, t = e.user, [4, this.props.mutateUser(t)];
                                        case 1:
                                            return (n = d.sent()) === ne.FATAL ? (this.setState({
                                                isRetryButtonDisabled: !1
                                            }), [2]) : (i = n.editorError, r = n.modError, s = n.vipError, i || r || s ? (o = a.__assign({
                                                channelLogin: t.channelLogin,
                                                displayName: t.displayName,
                                                lastModified: t.lastModified,
                                                id: t.id,
                                                profileImageURL: t.profileImageURL
                                            }, i ? {} : {
                                                isEditor: t.isEditor
                                            }, r ? {} : {
                                                isMod: t.isMod
                                            }, s ? {} : {
                                                isVIP: t.isVIP
                                            }), this.props.modifyUserInCache(o, function() {
                                                l.props.setMessage({
                                                    user: t,
                                                    error: n,
                                                    type: X.SOME_MUTATIONS_FAILED
                                                }), l.props.closeModal()
                                            }), [2]) : (this.props.modifyUserInCache(t, function() {
                                                l.props.setMessage({
                                                    user: t,
                                                    type: X.ALL_MUTATIONS_SUCCEEDED
                                                }), l.props.closeModal()
                                            }), [2]))
                                    }
                                })
                            })
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        return s.createElement(I.ab, {
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
                                type: I.F.Hollow
                            },
                            size: I.bb.Small,
                            title: Object(S.d)("Something went wrong", "RolesPageMessageModal")
                        }, s.createElement(I.Xa, {
                            padding: 1
                        }, s.createElement(I.W, null, Object(S.d)("There was an error modifying roles for {user}.", {
                            user: this.props.message.user.displayName
                        }, "RolesPageMessageModal"))))
                    }, t
                }(s.Component),
                Ce = function(e) {
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
                        e && (e.type === X.ALL_MUTATIONS_FAILED && this.props.showModal(this.props))
                    }, t
                }(s.Component);
            var ye, be = Object(o.compose)(Object(re.connect)(null, function(e) {
                    return Object(o.bindActionCreators)({
                        closeModal: ae.c,
                        showModal: function(e) {
                            return Object(ae.d)(Ee, e)
                        }
                    }, e)
                }), de, ee, F)(Ce),
                Ie = n("9C/b"),
                Se = (n("vsHg"), function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        return s.createElement(I.Xa, {
                            alignItems: I.f.Center,
                            display: I.X.Flex,
                            fullHeight: !0,
                            fullWidth: !0,
                            justifyContent: I.Wa.Center,
                            position: I.hb.Absolute,
                            zIndex: I.gc.Above
                        }, s.createElement(I.i, {
                            type: I.n.SlideInBottom,
                            duration: I.k.Medium,
                            enabled: !0,
                            timing: I.m.EaseInOut
                        }, s.createElement(I.Cb, {
                            background: I.r.Base,
                            borderBottom: !0,
                            borderRadius: I.x.Medium,
                            className: "dashboard-centered-banner",
                            display: I.X.Flex,
                            elevation: 3,
                            flexDirection: I.Aa.Column,
                            padding: 2
                        }, s.createElement(I.Xa, {
                            alignItems: I.f.Center,
                            display: I.X.Flex,
                            justifyContent: I.Wa.Start,
                            margin: {
                                bottom: 1
                            }
                        }, s.createElement(I.Xa, {
                            margin: {
                                right: .5
                            }
                        }, s.createElement(I.q, {
                            alt: Object(S.d)("VoHiYo", "CenteredBanner"),
                            src: "https://static-cdn.jtvnw.net/emoticons/v1/81274/2.0",
                            size: 30
                        })), s.createElement(I.W, {
                            bold: !0,
                            type: I.Tb.H5
                        }, this.props.title)), s.createElement(I.Xa, {
                            margin: {
                                bottom: 2
                            }
                        }, s.createElement(I.W, {
                            fontSize: I.Ca.Size5
                        }, this.props.body)), this.props.children)))
                    }, t
                }(s.Component));
            ! function(e) {
                e.ADD_A_ROLE = "no-users-banner-add-a-role", e.LEARN_MORE = "no-users-banner-learn-more"
            }(ye || (ye = {}));
            var Ne = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.handleAddARoleClick = function() {
                            t.props.setView(r.DEFAULT)
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        return s.createElement(Se, {
                            body: Object(S.d)("Manage the permissions users have for your community. Start by adding your first role.", "NoUsersBanner"),
                            title: Object(S.d)("Welcome to Roles", "NoUsersBanner")
                        }, s.createElement(I.Xa, {
                            alignItems: I.f.Center,
                            display: I.X.Flex,
                            justifyContent: I.Wa.Start
                        }, s.createElement(I.Xa, {
                            margin: {
                                right: 1
                            }
                        }, s.createElement(I.z, {
                            "data-test-selector": ye.ADD_A_ROLE,
                            onClick: this.handleAddARoleClick
                        }, Object(S.d)("Add a Role", "NoUsersBanner"))), s.createElement(I.z, {
                            "data-test-selector": ye.LEARN_MORE,
                            linkTo: $,
                            type: I.F.Text
                        }, Object(S.d)("Learn More", "NoUsersBanner"))))
                    }, t
                }(s.Component),
                De = Object(o.compose)(g, Ie.a)(Ne),
                _e = n("TSYQ"),
                Oe = function(e) {
                    var t;
                    if (e.selected) switch (e.sortDirection) {
                        case je.ASCENDING:
                            t = s.createElement(I.qb, {
                                asset: I.rb.GlyphArrUp,
                                width: 10
                            });
                            break;
                        case je.DESCENDING:
                            t = s.createElement(I.qb, {
                                asset: I.rb.GlyphArrDown,
                                width: 10
                            });
                            break;
                        default:
                            t = s.createElement(I.qb, {
                                asset: I.rb.GlyphArrUpDown,
                                width: 10
                            })
                    } else t = s.createElement(I.qb, {
                        asset: I.rb.GlyphArrUpDown,
                        width: 10
                    });
                    return s.createElement(I.z, {
                        type: I.F.Text,
                        onClick: e.onClick
                    }, s.createElement(I.Cb, {
                        display: I.X.Flex,
                        alignContent: I.e.Center
                    }, s.createElement(I.W, {
                        type: I.Tb.Span,
                        bold: !0,
                        color: e.selected ? I.O.Alt : I.O.Link
                    }, e.children), s.createElement(I.Xa, {
                        display: I.X.Flex,
                        alignItems: I.f.Center,
                        margin: {
                            left: .5
                        }
                    }, t)))
                },
                Ue = n("u5aL"),
                Ae = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        var e = this.props,
                            t = e.src,
                            n = e.title;
                        return s.createElement(I.Cb, {
                            alignItems: I.f.Center,
                            background: I.r.Alt,
                            borderRadius: I.x.Medium,
                            display: I.X.Flex,
                            justifyContent: I.Wa.Center,
                            margin: {
                                x: 1
                            }
                        }, t && s.createElement(I.Xa, {
                            margin: {
                                right: .5
                            }
                        }, s.createElement(I.S, {
                            alt: n,
                            src: t
                        })), s.createElement(I.Xa, {
                            margin: {
                                right: 1
                            }
                        }, s.createElement(I.W, {
                            bold: !0
                        }, n)), s.createElement(I.A, {
                            icon: I.rb.NotificationError,
                            onClick: this.props.onRolePillDismissed,
                            size: I.B.Small
                        }))
                    }, t
                }(s.Component),
                Me = (n("eqbG"), function(e) {
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
                        return s.createElement(I.Xa, {
                            alignItems: I.f.Center,
                            display: I.X.Flex,
                            justifyContent: I.Wa.Between,
                            margin: this.props.margin
                        }, s.createElement(I.N, {
                            checked: this.props.checked,
                            disabled: t,
                            label: n,
                            onChange: this.handleCheckBoxChange,
                            value: this.props.value
                        }), i && s.createElement(I.S, {
                            alt: n,
                            className: t ? "disabled-role-selector-icon" : "",
                            src: i
                        }))
                    }, t
                }(s.Component));

            function Te() {
                return Object(S.d)("Editor", "FilterUsersComponent")
            }

            function Fe() {
                return Object(S.d)("Moderator", "FilterUsersComponent")
            }

            function Le() {
                return Object(S.d)("VIP", "FilterUsersComponent")
            }
            var Re, we = B(function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.handleLearnAboutRolesClick = function() {}, t
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        var e = this.props,
                            t = e.isEditor,
                            n = e.isMod,
                            i = e.isVIP,
                            r = e.onCheckBoxChange;
                        return s.createElement(I.Xa, {
                            position: I.hb.Relative
                        }, s.createElement(I.u, {
                            offsetY: "-0.5px",
                            noTail: !0,
                            show: this.props.show
                        }, s.createElement(I.Cb, {
                            border: !0,
                            borderRadius: I.x.Small,
                            elevation: 2
                        }, s.createElement(Me, {
                            checked: n,
                            disabled: i,
                            label: Fe(),
                            onCheckBoxChange: r,
                            margin: {
                                x: 1,
                                y: 2
                            },
                            src: Q,
                            value: y.IS_MOD
                        }), this.props.isVIPUnlocked && s.createElement(Me, {
                            checked: i,
                            disabled: n || this.props.isAtMaxVIPUserLimit && !i,
                            label: Le(),
                            onCheckBoxChange: r,
                            margin: {
                                x: 1,
                                bottom: 2
                            },
                            src: z,
                            value: y.IS_VIP
                        }), s.createElement(Me, {
                            checked: t,
                            disabled: !1,
                            label: Te(),
                            onCheckBoxChange: r,
                            margin: {
                                x: 1,
                                bottom: 2
                            },
                            value: y.IS_EDITOR
                        }), s.createElement(I.Ua, {
                            onClick: this.handleLearnAboutRolesClick
                        }, s.createElement(I.Cb, {
                            alignItems: I.f.Center,
                            borderTop: !0,
                            display: I.X.Flex,
                            padding: 1
                        }, s.createElement(I.Xa, {
                            alignItems: I.f.Center,
                            display: I.X.Flex,
                            margin: {
                                right: 1
                            }
                        }, s.createElement(I.qb, {
                            asset: I.rb.NotificationInfo
                        })), s.createElement(I.W, null, Object(S.e)("Learn about Roles", "RoleSelector")))))))
                    }, t
                }(s.Component)),
                Pe = B(function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            isBalloonOpen: !1
                        }, t.handleAddRoleClick = function() {
                            t.setState(function(e) {
                                return {
                                    isBalloonOpen: !e.isBalloonOpen
                                }
                            })
                        }, t.handleClickOut = function() {
                            t.setState({
                                isBalloonOpen: !1
                            })
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        var e = this.props,
                            t = e.onRolePillDismissed,
                            n = e.user,
                            i = this.state.isBalloonOpen,
                            r = Te(),
                            a = Fe(),
                            o = Le(),
                            l = n.isEditor,
                            d = n.isMod,
                            c = n.isVIP;
                        return s.createElement(I.Xa, {
                            alignItems: I.f.Center,
                            display: I.X.Flex,
                            flexDirection: this.props.roleOrder
                        }, !i && s.createElement(I.A, {
                            onClick: this.handleAddRoleClick,
                            icon: I.rb.Plus,
                            size: I.B.Small
                        }), i && s.createElement(Ue.a, {
                            onClickOut: this.handleClickOut
                        }, s.createElement(I.z, {
                            icon: I.rb.Plus,
                            onClick: this.handleAddRoleClick,
                            size: I.D.Small,
                            type: I.F.Text
                        }, s.createElement(I.W, null, Object(S.d)("Add Role", "RoleSelector"))), s.createElement(we, {
                            isEditor: l,
                            isMod: d,
                            isVIP: c,
                            onCheckBoxChange: this.props.onCheckBoxChange,
                            show: i
                        })), l && s.createElement(Ae, {
                            onRolePillDismissed: t.bind(null, y.IS_EDITOR),
                            title: r
                        }), d && s.createElement(Ae, {
                            onRolePillDismissed: t.bind(null, y.IS_MOD),
                            src: Q,
                            title: a
                        }), this.props.isVIPUnlocked && c && s.createElement(Ae, {
                            onRolePillDismissed: t.bind(null, y.IS_VIP),
                            src: z,
                            title: o
                        }))
                    }, t
                }(s.Component)),
                Ve = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        return s.createElement(I.Cb, {
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
                }(s.Component);
            ! function(e) {
                e.CJK_NAME = "cjk_name"
            }(Re || (Re = {}));
            var xe, Be, je, Xe = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.handleUserMutation = function(e) {
                            return a.__awaiter(t, void 0, void 0, function() {
                                var t, n, i, r, s, o = this;
                                return a.__generator(this, function(l) {
                                    switch (l.label) {
                                        case 0:
                                            return [4, this.props.mutateUser(e)];
                                        case 1:
                                            return (t = l.sent()) === ne.FATAL ? (this.props.setMessage({
                                                user: e,
                                                error: t,
                                                type: X.ALL_MUTATIONS_FAILED
                                            }), [2]) : (n = t.editorError, i = t.modError, r = t.vipError, n || i || r ? (s = a.__assign({
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
                                            }), this.props.modifyUserInCache(s, function() {
                                                o.props.setMessage({
                                                    user: e,
                                                    error: t,
                                                    type: X.SOME_MUTATIONS_FAILED
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
                            t = e.displayName,
                            n = e.channelLogin;
                        return s.createElement(Ve, {
                            margin: {
                                top: .5
                            }
                        }, s.createElement(I.P, {
                            cols: xe.FIRST_COLUMN
                        }, s.createElement(I.Xa, {
                            display: I.X.Flex,
                            alignItems: I.f.Center
                        }, s.createElement(I.U, {
                            to: "/" + n,
                            targetBlank: !0
                        }, s.createElement(I.q, {
                            src: e.profileImageURL,
                            alt: n,
                            size: 30
                        })), s.createElement(I.U, {
                            to: "/" + n,
                            targetBlank: !0
                        }, s.createElement(I.Xa, {
                            margin: {
                                left: 1
                            },
                            display: I.X.Flex,
                            alignItems: I.f.Center
                        }, s.createElement(I.W, {
                            bold: !0,
                            color: I.O.Base,
                            type: I.Tb.P,
                            ellipsis: !0
                        }, n), n.toLowerCase() !== t.toLowerCase() && s.createElement(I.Xa, {
                            margin: {
                                left: 1
                            }
                        }, s.createElement(I.W, {
                            bold: !0,
                            color: I.O.Base,
                            type: I.Tb.P,
                            ellipsis: !0,
                            "data-test-selector": Re.CJK_NAME
                        }, t)))))), s.createElement(I.P, {
                            cols: xe.SECOND_COLUMN
                        }, s.createElement(I.Xa, {
                            display: I.X.Flex,
                            margin: {
                                right: 5
                            },
                            flexGrow: 1,
                            alignItems: I.f.Center
                        }, s.createElement(Pe, {
                            user: e,
                            onCheckBoxChange: this.handleCheckBoxChange,
                            onRolePillDismissed: this.handleRolePillDismissed,
                            roleOrder: I.Aa.RowReverse
                        }))), s.createElement(I.P, {
                            cols: xe.THIRD_COLUMN
                        }, s.createElement(I.Xa, {
                            display: I.X.Flex,
                            alignItems: I.f.Center,
                            flexDirection: I.Aa.RowReverse
                        }, s.createElement(I.P, {
                            cols: 6
                        }, s.createElement(I.W, null, Object(S.c)(e.lastModified))))))
                    }, t
                }(s.Component),
                Ge = Object(o.compose)(ee, F, de)(Xe),
                We = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.sortByUsername = function() {
                            return Object.keys(t.props.userCache).sort(function(e, n) {
                                var i = t.props.userCache[e].channelLogin,
                                    r = t.props.userCache[n].channelLogin;
                                if (t.props.sortDirection === je.ASCENDING) {
                                    if (i > r) return 1;
                                    if (i < r) return -1
                                }
                                if (t.props.sortDirection === je.DESCENDING) {
                                    if (i < r) return 1;
                                    if (i > r) return -1
                                }
                                return 0
                            })
                        }, t.sortByLastModified = function() {
                            return Object.keys(t.props.userCache).sort(function(e, n) {
                                var i = t.props.userCache[e].lastModified,
                                    r = t.props.userCache[n].lastModified;
                                if (t.props.sortDirection === je.ASCENDING) {
                                    if (i < r) return 1;
                                    if (i > r) return -1
                                }
                                if (t.props.sortDirection === je.DESCENDING) {
                                    if (i > r) return 1;
                                    if (i < r) return -1
                                }
                                return 0
                            })
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.shouldComponentUpdate = function(e) {
                        return Object.keys(e.userCache).length !== Object.keys(this.props.userCache).length || e.filterType !== this.props.filterType || e.sortBy !== this.props.sortBy || e.sortDirection !== this.props.sortDirection
                    }, t.prototype.render = function() {
                        var e = this,
                            t = [];
                        return this.props.sortBy === Be.USERNAME && (t = this.sortByUsername()), this.props.sortBy === Be.LAST_MODIFIED && (t = this.sortByLastModified()), this.props.filterType === C.ALL_ROLES ? s.createElement(s.Fragment, null, t.map(function(e) {
                            return s.createElement(Ge, {
                                "data-test-selector": "roles-table-row-" + e,
                                key: "roles-table-row-" + e,
                                userID: e
                            })
                        })) : s.createElement(s.Fragment, null, t.reduce(function(t, n) {
                            var i = e.props.userCache[n];
                            return i && (e.props.filterType === C.EDITOR && i[y.IS_EDITOR] || e.props.filterType === C.MODERATOR && i[y.IS_MOD] || e.props.filterType === C.VIP && i[y.IS_VIP]) && t.push(s.createElement(Ge, {
                                "data-test-selector": "roles-table-row-" + n,
                                key: "roles-table-row-" + n,
                                userID: n
                            })), t
                        }, []))
                    }, t
                }(s.Component);
            n("MWdL");
            ! function(e) {
                e[e.FIRST_COLUMN = 3] = "FIRST_COLUMN", e[e.SECOND_COLUMN = 5] = "SECOND_COLUMN", e[e.THIRD_COLUMN = 4] = "THIRD_COLUMN"
            }(xe || (xe = {})),
            function(e) {
                e.USERNAME = "username", e.LAST_MODIFIED = "last-modified"
            }(Be || (Be = {})),
            function(e) {
                e.ASCENDING = "ascending", e.DESCENDING = "descending"
            }(je || (je = {}));
            var qe, He = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            sortBy: Be.USERNAME,
                            sortDirection: je.ASCENDING
                        }, t.handleUsernameHeaderClick = function() {
                            t.changeSort(Be.USERNAME)
                        }, t.handleLastModifiedHeaderClick = function() {
                            t.changeSort(Be.LAST_MODIFIED)
                        }, t.changeSort = function(e) {
                            var n;
                            n = t.state.sortDirection && t.state.sortBy === e && t.state.sortDirection !== je.DESCENDING ? je.DESCENDING : je.ASCENDING, t.setState({
                                sortBy: e,
                                sortDirection: n
                            })
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        var e = this.state.sortBy,
                            t = this.state.sortDirection,
                            n = {
                                "disabled-rows": this.props.view !== r.DEFAULT
                            };
                        return s.createElement(I.Xa, {
                            fullWidth: !0,
                            fullHeight: !0,
                            margin: {
                                top: 1
                            }
                        }, s.createElement(I.Xa, {
                            display: I.X.Flex,
                            alignItems: I.f.Center,
                            padding: {
                                x: 1,
                                bottom: .5
                            }
                        }, s.createElement(I.P, {
                            cols: xe.FIRST_COLUMN
                        }, s.createElement(Oe, {
                            selected: e === Be.USERNAME,
                            sortDirection: t,
                            onClick: this.handleUsernameHeaderClick
                        }, Object(S.d)("Username", "RolesPageTable"))), s.createElement(I.P, {
                            cols: xe.SECOND_COLUMN
                        }, s.createElement(I.W, {
                            type: I.Tb.Span,
                            bold: !0,
                            color: I.O.Link
                        }, " ", Object(S.d)("Roles", "RolesPageTable"), " ")), s.createElement(I.P, {
                            cols: xe.THIRD_COLUMN
                        }, s.createElement(I.Xa, {
                            display: I.X.Flex,
                            flexDirection: I.Aa.RowReverse
                        }, s.createElement(I.P, {
                            cols: 6
                        }, s.createElement(Oe, {
                            selected: e === Be.LAST_MODIFIED,
                            sortDirection: t,
                            onClick: this.handleLastModifiedHeaderClick
                        }, Object(S.d)("Last Modified", "RolesPageTable")))))), s.createElement(I.Xa, {
                            className: _e(n)
                        }, s.createElement(We, {
                            filterType: this.props.filterType,
                            userCache: this.props.userCache,
                            sortBy: e,
                            sortDirection: t
                        })))
                    }, t
                }(s.Component),
                $e = Object(o.compose)(g, F)(He),
                Qe = n("8Ad5"),
                ze = n("f00E"),
                Ke = n("H/lO"),
                Ye = n("NZDK"),
                Je = n("AXTS"),
                Ze = n("Kw8/"),
                et = n("gD7V"),
                tt = 250,
                nt = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            canEditInputField: !0,
                            searchedUsers: null,
                            showDropDown: !1
                        }, t.searchClient = new Ye.a({
                            appId: S.a.algoliaApplicationID,
                            apiKey: S.a.algoliaAPIKey,
                            apolloClient: S.p.apollo.client,
                            logger: S.k,
                            config: S.a,
                            stats: S.p.stats
                        }), t.filterUsersResults = function(e) {
                            var n = t.props.data.user,
                                i = n && n.id,
                                r = t.props.userCache;
                            return e.hits.filter(function(e) {
                                var t = e.objectID;
                                return t && t !== i && !r[t]
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
                                            return e ? [4, this.searchClient.queryForType(Ke.a.Users, e, Object(ze.a)(), {
                                                hitsPerPage: 10
                                            })] : [3, 2];
                                        case 1:
                                            return (t = n.sent()) && t.users && this.setState({
                                                searchedUsers: this.filterUsersResults(t.users)
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
                                showDropDown: e && e.getAttribute(Ze.a) === Ze.b
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
                        if (this.props.data.loading) return null;
                        var e = this.props.selectedUser,
                            t = e && e.channelLogin || "",
                            n = e && e.displayName || "",
                            i = this.state.canEditInputField,
                            r = s.createElement(I.Xa, {
                                margin: {
                                    right: e ? 1 : .5
                                }
                            }, s.createElement(I.q, {
                                alt: Object(S.d)("Avatar", "SearchUsers"),
                                size: 30,
                                src: e && e.profileImageURL
                            }));
                        return s.createElement(I.Xa, null, !i && e && s.createElement(I.Ua, {
                            onClick: this.enableInputField,
                            type: I.Va.Overlay
                        }, s.createElement(I.Xa, {
                            alignItems: I.f.Center,
                            display: I.X.Flex
                        }, r, s.createElement(I.W, {
                            bold: !0,
                            type: I.Tb.P,
                            ellipsis: !0
                        }, t), t.toLowerCase() !== n.toLowerCase() && s.createElement(I.Xa, {
                            margin: {
                                left: 1
                            }
                        }, s.createElement(I.W, {
                            bold: !0,
                            type: I.Tb.P,
                            ellipsis: !0
                        }, n)))), (i || !e) && s.createElement(Ue.a, {
                            onClickOut: this.handleClickOut
                        }, s.createElement(I.Xa, {
                            alignItems: I.f.Center,
                            display: I.X.Flex
                        }, r, s.createElement(I.Xa, {
                            position: I.hb.Relative
                        }, s.createElement(I.Ra, {
                            autoFocus: !0,
                            defaultValue: n,
                            onBlur: this.handleInputBlur,
                            onChange: this.handleInputChange,
                            onFocus: this.handleInputFocus,
                            onKeyDown: this.props.onInputKeyDown,
                            placeholder: Object(S.d)("Search", "SearchUsers"),
                            type: I.Ta.Text
                        }), s.createElement(Je.a, {
                            onOptionClick: this.handleOptionClick,
                            onOptionBlur: this.handleOptionBlur,
                            show: this.state.showDropDown,
                            users: this.state.searchedUsers
                        })))))
                    }, t
                }(s.Component),
                it = Object(o.compose)(F, Ie.a, Object(d.a)(et, {
                    options: function(e) {
                        return {
                            variables: {
                                login: e.match.params.channelLogin
                            }
                        }
                    }
                }))(nt);
            ! function(e) {
                e.CANCEL_BUTTON = "roles-page-add-user-cancel-button", e.SAVE_BUTTON = "roles-page-add-user-save-button"
            }(qe || (qe = {}));
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
                            e.keyCode === Qe.a.Esc && t.props.setView(r.DEFAULT)
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
                                var e, t, n, i, s, o, l = this;
                                return a.__generator(this, function(d) {
                                    switch (d.label) {
                                        case 0:
                                            return e = this.state.selectedUser, [4, this.props.mutateUser(e)];
                                        case 1:
                                            return t = d.sent(), this.props.setView(r.DEFAULT), t === ne.FATAL ? (this.props.setMessage({
                                                user: e,
                                                error: t,
                                                type: X.ALL_MUTATIONS_FAILED
                                            }), [2]) : (n = t.editorError, i = t.modError, s = t.vipError, n || i || s ? (o = a.__assign({
                                                channelLogin: e.channelLogin,
                                                displayName: e.displayName,
                                                lastModified: e.lastModified,
                                                id: e.id,
                                                profileImageURL: e.profileImageURL
                                            }, n ? {} : {
                                                isEditor: e.isEditor
                                            }, i ? {} : {
                                                isMod: e.isMod
                                            }, s ? {} : {
                                                isVIP: e.isVIP
                                            }), this.props.modifyUserInCache(o, function() {
                                                l.props.setMessage({
                                                    user: e,
                                                    error: t,
                                                    type: X.SOME_MUTATIONS_FAILED
                                                })
                                            }), [2]) : (this.props.modifyUserInCache(e, function() {
                                                l.props.setMessage({
                                                    user: e,
                                                    type: X.ALL_MUTATIONS_SUCCEEDED
                                                })
                                            }), [2]))
                                    }
                                })
                            })
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        var e = this.state.selectedUser;
                        return s.createElement(I.Xa, {
                            fullWidth: !0,
                            position: I.hb.Relative,
                            zIndex: I.gc.Above
                        }, s.createElement(I.i, {
                            duration: I.k.Medium,
                            enabled: !0,
                            type: I.n.SlideInBottom
                        }, s.createElement(Ve, null, s.createElement(I.P, {
                            cols: xe.FIRST_COLUMN
                        }, s.createElement(it, {
                            onInputKeyDown: this.handleInputKeyDown,
                            onUserDeselected: this.handleUserDeselected,
                            onUserSelected: this.handleUserSelected,
                            selectedUser: e
                        })), s.createElement(I.P, {
                            cols: xe.SECOND_COLUMN
                        }, e && s.createElement(Pe, {
                            onCheckBoxChange: this.handleCheckBoxChange,
                            onRolePillDismissed: this.handleRolePillDismissed,
                            user: e
                        })), s.createElement(I.P, {
                            cols: xe.THIRD_COLUMN
                        }, s.createElement(I.Xa, {
                            alignItems: I.f.Center,
                            display: I.X.Flex,
                            justifyContent: I.Wa.End
                        }, s.createElement(I.Xa, {
                            margin: {
                                right: 1
                            }
                        }, s.createElement(I.z, {
                            "data-test-selector": qe.CANCEL_BUTTON,
                            onClick: this.handleCancelClick,
                            type: I.F.Hollow
                        }, Object(S.d)("Cancel", "AddUserComponent"))), s.createElement(I.z, {
                            "data-test-selector": qe.SAVE_BUTTON,
                            disabled: !e || !e.isEditor && !e.isMod && !e.isVIP,
                            onClick: this.handleSaveClick,
                            type: I.F.Success
                        }, Object(S.d)("Save", "AddUserComponent")))))))
                    }, t
                }(s.Component),
                st = Object(o.compose)(F, de, ee, g)(at);
            ! function(e) {
                e.ALL_MUTATIONS_SUCCEEDED = "all-mutations-succeeded", e.SOME_MUTATIONS_FAILED = "some-mutations-failed"
            }(rt || (rt = {}));
            var ot = function(e) {
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
                        return e ? s.createElement(I.Xa, {
                            fullWidth: !0,
                            margin: {
                                bottom: 2
                            }
                        }, this.getContent(e)) : null
                    }, t.prototype.getContent = function(e) {
                        var t = this.props.clearMessage,
                            n = Object(S.d)("Close", "RolesPageTopBar");
                        switch (e.type) {
                            case X.ALL_MUTATIONS_SUCCEEDED:
                                return s.createElement(I.Na, {
                                    closeButtonAriaLabel: n,
                                    closeButtonOnClick: t,
                                    "data-test-selector": rt.ALL_MUTATIONS_SUCCEEDED,
                                    description: Object(S.d)("Specified roles added for {user}.", {
                                        user: e.user.displayName
                                    }, "RolesPageTopBar"),
                                    title: Object(S.d)("Success!", "RolesPageTopBar"),
                                    type: I.Oa.Success
                                });
                            case X.SOME_MUTATIONS_FAILED:
                                return s.createElement(I.Na, {
                                    closeButtonAriaLabel: n,
                                    closeButtonOnClick: t,
                                    "data-test-selector": rt.SOME_MUTATIONS_FAILED,
                                    description: Object(S.d)("Unfortunately, some of the specified roles were unable to be added for {user}.", {
                                        user: e.user.displayName
                                    }, "RolesPageTopBar"),
                                    title: Object(S.d)("Warning!", "RolesPageTopBar"),
                                    type: I.Oa.Warning
                                });
                            case X.MAX_VIPS_REACHED:
                                return s.createElement(I.Na, {
                                    closeButtonAriaLabel: n,
                                    closeButtonOnClick: this.handleDismissVIPWarningMessage,
                                    description: Object(S.d)("You have reached the maximum amount of VIP roles. <x:link>Read more about Roles.</x:link>", {
                                        "x:link": function(e) {
                                            return s.createElement(I.U, {
                                                linkTo: "TODO"
                                            }, e)
                                        }
                                    }, "RolesPageTopBar"),
                                    title: Object(S.d)("You can't add any more VIPs.", "RolesPageTopBar"),
                                    type: I.Oa.Warning
                                });
                            default:
                                return null
                        }
                    }, t.prototype.tryToShowOrHideVIPWarningMessage = function() {
                        var e = this.props,
                            t = e.isAtMaxVIPUserLimit,
                            n = e.message;
                        !t || n || this.state.wasVIPWarningMessageDismissed ? n && n.type === X.MAX_VIPS_REACHED && !t && (this.props.clearMessage(), this.setState({
                            wasVIPWarningMessageDismissed: !1
                        })) : this.props.setMessage({
                            type: X.MAX_VIPS_REACHED
                        })
                    }, t
                }(s.Component),
                lt = Object(o.compose)(B, ee)(ot),
                dt = function(e) {
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
                        return s.createElement(I.Xa, {
                            alignItems: I.f.Center,
                            display: I.X.Flex
                        }, s.createElement(I.Xa, {
                            margin: {
                                right: 1
                            }
                        }, s.createElement(I.W, null, Object(S.d)("Display", "FilterUsersComponent"))), s.createElement(I.Xa, null, s.createElement(Ue.a, {
                            onClickOut: this.handleClickOut
                        }, s.createElement(I.z, {
                            onClick: this.handleButtonClick,
                            type: I.F.Text
                        }, s.createElement(I.Xa, {
                            alignItems: I.f.Center,
                            display: I.X.Flex
                        }, s.createElement(I.Xa, {
                            margin: {
                                right: .5
                            }
                        }, s.createElement(I.W, {
                            bold: !0
                        }, this.getFilterText(e))), s.createElement(I.qb, {
                            asset: I.rb.Carat,
                            height: 16,
                            width: 16
                        }))), s.createElement(I.Xa, {
                            position: I.hb.Relative
                        }, s.createElement(I.Y, {
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
                                    src: z
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
                                    return Te();
                            case C.MODERATOR:
                                    return Fe();
                            case C.VIP:
                                    return Le()
                        }
                    }, t
                }(s.Component),
                ct = Object(o.compose)(B, F)(dt),
                ut = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.handleButtonClick = function() {
                            t.props.setView(r.ADD_USER), t.props.clearMessage()
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        var e = this.props.view === r.ADD_USER;
                        return s.createElement(s.Fragment, null, s.createElement(I.Cb, {
                            alignItems: I.f.Center,
                            borderBottom: !0,
                            display: I.X.Flex,
                            fullWidth: !0,
                            justifyContent: I.Wa.Between,
                            margin: {
                                bottom: 1
                            },
                            padding: {
                                bottom: 1
                            }
                        }, s.createElement(ct, null), s.createElement(I.z, {
                            disabled: e,
                            onClick: this.handleButtonClick
                        }, Object(S.d)("Add New", "TopBar"))), s.createElement(lt, null), e && s.createElement(st, null))
                    }, t
                }(s.Component),
                mt = Object(o.compose)(ee, g)(ut),
                pt = g(function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(t, e), t.prototype.componentDidMount = function() {
                        S.p.setPageTitle(Object(S.d)("Roles", "RolesPage"))
                    }, t.prototype.render = function() {
                        var e = this.props.channelID;
                        return s.createElement(w, {
                            channelID: e
                        }, s.createElement(G, {
                            channelID: e
                        }, s.createElement(ie, null, s.createElement(ge, {
                            channelID: e
                        }, this.props.view === r.NO_USERS ? s.createElement(De, null) : s.createElement(N.a, null, s.createElement(mt, null), s.createElement($e, null), s.createElement(be, null)), s.createElement(K, null)))))
                    }, t
                }(s.Component)),
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
                        if (this.props.data.loading) return s.createElement(I.Za, {
                            fillContent: !0
                        });
                        if (this.props.data.error) return s.createElement(l.a, null);
                        var e = this.props.data,
                            t = e.user && e.user.id;
                        return t ? s.createElement(b, null, s.createElement(pt, {
                            channelID: t
                        })) : null
                    }, t.prototype.reportInteractive = function() {
                        this.props.data.loading || this.props.latencyTracking.reportInteractive(1)
                    }, t
                }(s.Component),
                vt = Object(o.compose)(Object(p.b)("RolesPage", {
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
                return o
            });
            var i, r = n("mrSG"),
                a = n("yR8l"),
                s = n("FAYk");

            function o(e) {
                var t = this;
                return Object(a.a)(s, {
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