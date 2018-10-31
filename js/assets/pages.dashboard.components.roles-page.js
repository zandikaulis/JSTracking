(window.webpackJsonp = window.webpackJsonp || []).push([
    [143], {
        "4HoE": function(e, n) {
            var t = {
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
            t.loc.source = {
                body: "mutation ModUser($input: ModUserInput!){\nmodUser(input: $input) {\nchannel {\nid\n}\ntarget {\nid\nlogin\n}\nerror {\ncode\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = t
        },
        "91YW": function(e, n) {
            var t = {
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
                    end: 628
                }
            };
            t.loc.source = {
                body: "query UserRolesCacheQuery ($channelLogin: String! $includeEditors: Boolean! $includeMods: Boolean! $includeVIPs: Boolean! $modsCursor: Cursor $vipsCursor: Cursor) {\nuser(login: $channelLogin) {\nid\neditors @include(if: $includeEditors) {\nedges {\ncursor\ngrantedAt\nnode {\nid\ndisplayName\nlogin\nprofileImageURL(width: 50)\n}\n}\n}\nmods(first: 100 after: $modsCursor) @include(if: $includeMods) {\nedges {\ncursor\ngrantedAt\nnode {\nid\ndisplayName\nlogin\nprofileImageURL(width: 50)\n}\n}\n}\nvips(first: 100 after: $vipsCursor) @include(if: $includeVIPs) {\nedges {\ncursor\ngrantedAt\nnode {\nid\ndisplayName\nlogin\nprofileImageURL(width: 50)\n}\n}\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = t
        },
        AKV8: function(e, n, t) {
            "use strict";
            t.d(n, "a", function() {
                return i
            }), t.d(n, "b", function() {
                return o
            });
            var i, r = t("mrSG"),
                a = t("yR8l"),
                s = t("4HoE");

            function o(e) {
                var n = this;
                return Object(a.a)(s, {
                    props: function(t) {
                        return {
                            modUserMutation: function(i) {
                                return r.__awaiter(n, void 0, void 0, function() {
                                    var n;
                                    return r.__generator(this, function(r) {
                                        if (n = e(t.ownProps).channelID, t.mutate) return [2, t.mutate({
                                            variables: {
                                                input: {
                                                    channelID: n,
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
        AXTS: function(e, n, t) {
            "use strict";
            var i = t("mrSG"),
                r = t("q1tI"),
                a = t("/7QA"),
                s = t("8/mp"),
                o = t("Kw8/"),
                l = t("Ue10"),
                d = function(e) {
                    function n() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return i.__extends(n, e), n.prototype.render = function() {
                        var e = this,
                            n = this.props.users;
                        return r.createElement(l.u, {
                            noTail: !0,
                            offsetY: "-0.5px",
                            show: !!n && this.props.show
                        }, r.createElement(s.b, null, r.createElement(l.Xa, {
                            alignItems: l.f.Center,
                            display: l.X.Flex,
                            flexDirection: l.Aa.Column,
                            justifyContent: l.Wa.Center
                        }, n && n.length > 0 ? n.map(function(n, t) {
                            return r.createElement(o.c, {
                                key: t,
                                onBlur: e.props.onOptionBlur,
                                onClick: e.props.onOptionClick,
                                user: n
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
                    }, n
                }(r.Component);
            t.d(n, "a", function() {
                return d
            })
        },
        "CpU+": function(e, n, t) {
            "use strict";
            t.d(n, "a", function() {
                return s
            });
            var i = t("mrSG"),
                r = t("yR8l"),
                a = t("JiJH");

            function s() {
                var e = this;
                return Object(r.a)(a, {
                    props: function(n) {
                        return {
                            unVIPUserMutation: function(t) {
                                return i.__awaiter(e, void 0, void 0, function() {
                                    return i.__generator(this, function(e) {
                                        switch (e.label) {
                                            case 0:
                                                return n.mutate ? [4, n.mutate({
                                                    variables: {
                                                        input: {
                                                            channelID: n.ownProps.channelID,
                                                            revokeeLogin: t
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
        FAYk: function(e, n) {
            var t = {
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
            t.loc.source = {
                body: "mutation UnmodUser($input: UnmodUserInput!){\nunmodUser(input: $input) {\nchannel {\nid\n}\ntarget {\nid\n}\nerror {\ncode\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = t
        },
        JiJH: function(e, n) {
            var t = {
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
            t.loc.source = {
                body: "mutation UnVIPUser($input: RevokeVIPInput!){\nrevokeVIP(input: $input) {\nchannel {\nid\n}\nrevokee {\nid\nlogin\n}\nerror {\ncode\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = t
        },
        "Kw8/": function(e, n, t) {
            "use strict";
            var i = t("mrSG"),
                r = t("q1tI"),
                a = t("/7QA"),
                s = t("8Ad5"),
                o = t("Ue10"),
                l = (t("sZ5a"), function(e) {
                    function n() {
                        var n = null !== e && e.apply(this, arguments) || this;
                        return n.state = {
                            focused: !1,
                            hovered: !1
                        }, n.handleKeyDown = function(e) {
                            var t = e.keyCode;
                            t !== s.a.Space && t !== s.a.Enter || n.handleClick()
                        }, n.handleClick = function() {
                            n.props.onClick(n.props.user)
                        }, n.handleBlur = function(e) {
                            e.persist(), n.setState({
                                focused: !1
                            }, function() {
                                n.props.onBlur(e.relatedTarget)
                            })
                        }, n.handleFocus = function() {
                            n.setState({
                                focused: !0
                            })
                        }, n.handleMouseOver = function() {
                            n.setState({
                                hovered: !0
                            })
                        }, n.handleMouseOut = function() {
                            n.state.hovered && n.setState({
                                hovered: !1
                            })
                        }, n
                    }
                    return i.__extends(n, e), n.prototype.render = function() {
                        var e, n, t = this.props.user;
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
                        }, ((n = {})["data-component-type"] = ["roles-page-search-user-option"], n)), r.createElement(o.Xa, {
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
                            src: t.profile_image,
                            size: 30
                        })), t.name)))
                    }, n
                }(r.Component));
            t.d(n, "a", function() {
                return "data-component-type"
            }), t.d(n, "b", function() {
                return "roles-page-search-user-option"
            }), t.d(n, "c", function() {
                return l
            })
        },
        "LQi+": function(e, n) {
            var t = {
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
            t.loc.source = {
                body: "query RolesPageQuery($channelLogin: String!) {\nuser(login: $channelLogin) {\nid\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = t
        },
        OBYv: function(e, n) {
            var t = {
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
            t.loc.source = {
                body: "mutation AddEditorUser($input: AddEditorInput!){\naddEditor(input: $input) {\nchannel {\nid\n}\ntargetUser {\nid\n}\nerror {\ncode\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = t
        },
        eqbG: function(e, n, t) {},
        fKMw: function(e, n, t) {
            "use strict";
            t.d(n, "a", function() {
                return s
            });
            var i = t("mrSG"),
                r = t("yR8l"),
                a = t("sMoq");

            function s() {
                var e = this;
                return Object(r.a)(a, {
                    props: function(n) {
                        return {
                            vipUserMutation: function(t) {
                                return i.__awaiter(e, void 0, void 0, function() {
                                    return i.__generator(this, function(e) {
                                        switch (e.label) {
                                            case 0:
                                                return n.mutate ? [4, n.mutate({
                                                    variables: {
                                                        input: {
                                                            channelID: n.ownProps.channelID,
                                                            granteeLogin: t
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
        gD7V: function(e, n) {
            var t = {
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
            t.loc.source = {
                body: "query SearchUserQuery($login: String!) {\nuser(login: $login) {\nid\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = t
        },
        qcBk: function(e, n, t) {
            "use strict";
            t.r(n);
            var i, r, a = t("mrSG"),
                s = t("q1tI"),
                o = t("fvjX"),
                l = t("yR8l"),
                d = t("V+GM"),
                c = t("NvVO"),
                u = t("2xye"),
                m = t("GnwI"),
                p = t("1rIY");
            ! function(e) {
                e[e.ADD_USER = 0] = "ADD_USER", e[e.DEFAULT = 1] = "DEFAULT", e[e.LOADING = 2] = "LOADING", e[e.NO_USERS = 3] = "NO_USERS"
            }(r || (r = {}));
            var h = (i = Object(p.a)("RolesPageViewContext", {
                    setView: function() {
                        return null
                    },
                    view: r.LOADING
                })).InnerProvider,
                v = i.withContext,
                f = function(e) {
                    return e
                };

            function k(e) {
                return v(f)(e)
            }
            var g, E, C, b = function(e) {
                    function n(n) {
                        var t = e.call(this, n) || this;
                        return t.setView = function(e) {
                            t.setState({
                                view: e
                            })
                        }, t.state = {
                            setView: t.setView,
                            view: r.LOADING
                        }, t
                    }
                    return a.__extends(n, e), n.prototype.render = function() {
                        return s.createElement(h, {
                            value: this.state
                        }, this.props.children)
                    }, n
                }(s.Component),
                S = t("/7QA"),
                y = t("IFXb"),
                I = t("5NYc"),
                N = t("vYsf"),
                D = t("NAv5"),
                _ = t("ZDlU"),
                O = t("Ue10"),
                U = t("91YW");
            ! function(e) {
                e[e.ALL_ROLES = 0] = "ALL_ROLES", e[e.EDITOR = 1] = "EDITOR", e[e.MODERATOR = 2] = "MODERATOR", e[e.VIP = 3] = "VIP"
            }(E || (E = {})),
            function(e) {
                e.IS_EDITOR = "isEditor", e.IS_MOD = "isMod", e.IS_VIP = "isVIP"
            }(C || (C = {}));
            var A = (g = Object(p.a)("UserRolesCacheContext", {
                    modifyUserInCache: function() {
                        return null
                    },
                    filterType: E.ALL_ROLES,
                    setFilterType: function() {
                        return null
                    },
                    totalVIPs: 0,
                    userCache: {}
                })).InnerProvider,
                M = g.withContext,
                T = function(e) {
                    return e
                };

            function F(e) {
                return M(T)(e)
            }
            var L, R = function(e) {
                    function n(n) {
                        var t = e.call(this, n) || this;
                        return t.modifyUserInCache = function(e, n) {
                            var i = e.id;
                            i && t.setState(function(n) {
                                var t, r = n.totalVIPs,
                                    s = n.userCache,
                                    o = s[i] || {};
                                return {
                                    userCache: a.__assign({}, s, (t = {}, t[i] = a.__assign({}, o, e), t)),
                                    totalVIPs: r + (o.isVIP !== e.isVIP && (e.isVIP ? 1 : -1) || 0)
                                }
                            }, function() {
                                n && n()
                            })
                        }, t.setUserCache = function(e, n, t) {
                            for (var i, r = 0, a = n; r < a.length; r++) {
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
                                        c[t] = !0, c.isMod && c.isVIP && (c.isVIP = !1), c.lastModified = Object(D.max)(c.lastModified, new Date(d)), e[l] = c
                                    }
                                }
                            }
                            return {
                                cursor: i,
                                userCache: e
                            }
                        }, t.fetchMore = function(e, n) {
                            return a.__awaiter(t, void 0, void 0, function() {
                                var t;
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
                                                    includeVIPs: !!n,
                                                    modsCursor: e,
                                                    vipsCursor: n
                                                },
                                                updateQuery: function(e, n) {
                                                    if (!n.fetchMoreResult.user) return e;
                                                    var t = n.fetchMoreResult.user,
                                                        i = t.mods,
                                                        r = t.vips;
                                                    return {
                                                        user: a.__assign({}, n.fetchMoreResult.user, {
                                                            mods: i || null,
                                                            vips: r || null
                                                        })
                                                    }
                                                }
                                            })];
                                        case 1:
                                            return t = i.sent(), this.updateUserCache(t.data), [2]
                                    }
                                })
                            })
                        }, t.setFilterType = function(e) {
                            e !== t.state.filterType && t.setState(function(n) {
                                var t = n.userCache;
                                return {
                                    filterType: e,
                                    userCache: Object.keys(t).reduce(function(e, n) {
                                        var i = t[n];
                                        return (i.isEditor || i.isMod || i.isVIP) && (e[n] = i), e
                                    }, {})
                                }
                            })
                        }, t.state = {
                            modifyUserInCache: t.modifyUserInCache,
                            filterType: E.ALL_ROLES,
                            setFilterType: t.setFilterType,
                            totalVIPs: 0,
                            userCache: {}
                        }, t
                    }
                    return a.__extends(n, e), n.prototype.componentDidMount = function() {
                        this.updateUserCache()
                    }, n.prototype.componentDidUpdate = function(e) {
                        e.channelID !== this.props.channelID && this.setState({
                            userCache: {}
                        }), e.data.loading && this.updateUserCache()
                    }, n.prototype.render = function() {
                        return this.props.data.error ? s.createElement(_.a, {
                            message: Object(S.d)("Whoops, something went wrong.", "UserRolesContext")
                        }) : this.props.view !== r.LOADING && this.props.channelID ? s.createElement(A, {
                            value: this.state
                        }, this.props.children) : s.createElement(O.Za, {
                            fillContent: !0
                        })
                    }, n.prototype.updateUserCache = function(e) {
                        var n = this;
                        void 0 === e && (e = this.props.data);
                        var t, i, s = e.error,
                            o = e.loading,
                            l = e.user;
                        s || o || !l || this.props.view !== r.LOADING || this.setState(function(e) {
                            var r = a.__assign({}, e);
                            if (r.userCache || (r.userCache = {}), l.editors && l.editors.edges) {
                                var s = n.setUserCache(r.userCache, l.editors.edges, C.IS_EDITOR).userCache;
                                r.userCache = a.__assign({}, r.userCache, s)
                            }
                            if (l.mods && l.mods.edges) {
                                var o = n.setUserCache(r.userCache, l.mods.edges, C.IS_MOD),
                                    d = o.cursor;
                                s = o.userCache;
                                t = d, r.userCache = a.__assign({}, r.userCache, s)
                            }
                            if (l.vips && l.vips.edges) {
                                var c = n.setUserCache(r.userCache, l.vips.edges, C.IS_VIP);
                                d = c.cursor, s = c.userCache;
                                i = d, r.userCache = a.__assign({}, r.userCache, s), r.totalVIPs = e.totalVIPs + l.vips.edges.length
                            }
                            var u = l.id;
                            return u && r.userCache && r.userCache[u] && delete r.userCache[u], r
                        }, function() {
                            return a.__awaiter(n, void 0, void 0, function() {
                                return a.__generator(this, function(e) {
                                    switch (e.label) {
                                        case 0:
                                            return t || i ? [4, this.fetchMore(t, i)] : [3, 2];
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
                    }, n
                }(s.Component),
                P = Object(o.compose)(k, Object(m.b)("WithUserRolesCacheProvider"), Object(l.a)(U, {
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
                w = (L = Object(p.a)("ChannelVIPContext", {
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
                    function n(n) {
                        var t = e.call(this, n) || this;
                        return t.state = {
                            maxVIPUserLimit: 0,
                            isVIPUnlocked: !1
                        }, t
                    }
                    return a.__extends(n, e), n.prototype.componentDidMount = function() {
                        this.fetchVIPQuestData()
                    }, n.prototype.componentDidUpdate = function(e) {
                        e.channelID || this.fetchVIPQuestData()
                    }, n.prototype.render = function() {
                        var e = this.state.maxVIPUserLimit;
                        return s.createElement(w, {
                            value: a.__assign({}, this.state, {
                                isAtMaxVIPUserLimit: !(this.props.totalVIPs !== e || !e)
                            })
                        }, this.props.children)
                    }, n.prototype.fetchVIPQuestData = function() {
                        return a.__awaiter(this, void 0, void 0, function() {
                            var e, n, t, i, r;
                            return a.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        if (!(e = this.props.channelID)) return [2];
                                        a.label = 1;
                                    case 1:
                                        return a.trys.push([1, 3, , 4]), [4, Object(N.a)(e)];
                                    case 2:
                                        for (n = a.sent(), t = 0, i = n; t < i.length; t++)
                                            if ((r = i[t]).key === I.b.VIP_BADGE) return this.setState({
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
                    }, n
                }(s.Component)),
                W = t("GIFg"),
                q = t("kYmV"),
                H = t("cuu2"),
                $ = "https://help.twitch.tv/customer/en/portal/articles/659115-twitch-chat-badges-guide",
                Q = "https://static-cdn.jtvnw.net/badges/v1/3267646d-33f0-4b17-b3df-f923a41db1d0/1",
                z = "https://static-cdn.jtvnw.net/badges/v1/b817aba4-fad8-49e2-b88a-7cc744dfa6ec/1",
                Y = function(e) {
                    function n() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(n, e), n.prototype.render = function() {
                        return s.createElement(W.a, null, s.createElement(H.a, {
                            learnMoreUrl: $,
                            page: q.b.Roles
                        }))
                    }, n
                }(s.Component);
            ! function(e) {
                e[e.ALL_MUTATIONS_FAILED = 0] = "ALL_MUTATIONS_FAILED", e[e.ALL_MUTATIONS_SUCCEEDED = 1] = "ALL_MUTATIONS_SUCCEEDED", e[e.MAX_VIPS_REACHED = 2] = "MAX_VIPS_REACHED", e[e.SOME_MUTATIONS_FAILED = 3] = "SOME_MUTATIONS_FAILED"
            }(X || (X = {}));
            var K = (j = Object(p.a)("RolesPageMessageContext", {
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
            var ne, te, ie = function(e) {
                    function n(n) {
                        var t = e.call(this, n) || this;
                        return t.clearMessage = function() {
                            t.setState({
                                message: null
                            })
                        }, t.setMessage = function(e) {
                            t.setState({
                                message: e
                            })
                        }, t.state = {
                            clearMessage: t.clearMessage,
                            message: null,
                            setMessage: t.setMessage
                        }, t
                    }
                    return a.__extends(n, e), n.prototype.render = function() {
                        return s.createElement(K, {
                            value: this.state
                        }, this.props.children)
                    }, n
                }(s.Component),
                re = t("/MKj"),
                ae = t("aCAx");
            ! function(e) {
                e.FATAL = "FATAL"
            }(te || (te = {}));
            var se = (ne = Object(p.a)("MutateUserRolesContext", {
                    mutateUser: function() {
                        return Promise.resolve({
                            editorError: null,
                            modError: null,
                            vipError: null
                        })
                    }
                })).InnerProvider,
                oe = ne.withContext,
                le = function(e) {
                    return e
                };

            function de(e) {
                return oe(le)(e)
            }
            var ce = function(e) {
                    function n(n) {
                        var t = e.call(this, n) || this;
                        return t.mutateUser = function(e) {
                            return a.__awaiter(t, void 0, void 0, function() {
                                var n, t, i, r, s, o, l, d, c, u, m, p, h, v;
                                return a.__generator(this, function(a) {
                                    switch (a.label) {
                                        case 0:
                                            return n = e.channelLogin, (t = e.id) && n ? (i = this.props.userCache, r = i[t] || {
                                                isEditor: !1,
                                                isMod: !1,
                                                isVIP: !1
                                            }, s = e.isEditor, o = e.isMod, l = e.isVIP, d = !!s !== r.isEditor, c = !!o !== r.isMod, u = this.props.isVIPUnlocked && !!l !== r.isVIP, [4, Promise.all([d ? this.mutateEditor(n, !!s) : this.genericPromise(), c ? this.mutateMod(n, !!o) : this.genericPromise(), u ? this.mutateVIP(n, !!l) : this.genericPromise()])]) : [2, te.FATAL];
                                        case 1:
                                            return m = a.sent(), p = m[0], h = m[1], v = m[2], [2, {
                                                editorError: p,
                                                modError: h,
                                                vipError: v
                                            }]
                                    }
                                })
                            })
                        }, t.genericPromise = function() {
                            return a.__awaiter(t, void 0, void 0, function() {
                                return a.__generator(this, function(e) {
                                    return [2, Promise.resolve(null)]
                                })
                            })
                        }, t.mutateEditor = function(e, n) {
                            return a.__awaiter(t, void 0, void 0, function() {
                                var t, i;
                                return a.__generator(this, function(r) {
                                    switch (r.label) {
                                        case 0:
                                            return r.trys.push([0, 4, , 5]), n ? [4, this.props.addEditorUserMutation(e)] : [3, 2];
                                        case 1:
                                            return (t = r.sent()) && t.addEditor ? [2, t.addEditor.error ? t.addEditor.error.code : null] : [2, te.FATAL];
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
                        }, t.mutateMod = function(e, n) {
                            return a.__awaiter(t, void 0, void 0, function() {
                                var t, i;
                                return a.__generator(this, function(r) {
                                    switch (r.label) {
                                        case 0:
                                            return r.trys.push([0, 4, , 5]), n ? [4, this.props.modUserMutation(e)] : [3, 2];
                                        case 1:
                                            return (t = r.sent()) && t.modUser ? [2, t.modUser.error ? t.modUser.error.code : null] : [2, te.FATAL];
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
                        }, t.mutateVIP = function(e, n) {
                            return a.__awaiter(t, void 0, void 0, function() {
                                var t, i;
                                return a.__generator(this, function(r) {
                                    switch (r.label) {
                                        case 0:
                                            return r.trys.push([0, 4, , 5]), n ? [4, this.props.vipUserMutation(e)] : [3, 2];
                                        case 1:
                                            return (t = r.sent()) && t.grantVIP ? [2, t.grantVIP.error ? t.grantVIP.error.code : null] : [2, te.FATAL];
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
                        }, t.state = {
                            mutateUser: t.mutateUser
                        }, t
                    }
                    return a.__extends(n, e), n.prototype.render = function() {
                        return s.createElement(se, {
                            value: this.state
                        }, this.props.children)
                    }, n
                }(s.Component),
                ue = t("AKV8"),
                me = t("yzwe"),
                pe = t("CpU+"),
                he = t("fKMw"),
                ve = t("OBYv");
            var fe = t("r6Pb");

            function ke(e) {
                return {
                    channelID: e.channelID || ""
                }
            }
            var ge = Object(o.compose)(B, F, function() {
                    var e = this;
                    return Object(l.a)(ve, {
                        props: function(n) {
                            return {
                                addEditorUserMutation: function(t) {
                                    return a.__awaiter(e, void 0, void 0, function() {
                                        return a.__generator(this, function(e) {
                                            switch (e.label) {
                                                case 0:
                                                    return n.mutate ? [4, n.mutate({
                                                        variables: {
                                                            input: {
                                                                channelID: n.ownProps.channelID,
                                                                targetUserLogin: t
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
                    return Object(l.a)(fe, {
                        props: function(n) {
                            return {
                                removeEditorUserMutation: function(t) {
                                    return a.__awaiter(e, void 0, void 0, function() {
                                        return a.__generator(this, function(e) {
                                            switch (e.label) {
                                                case 0:
                                                    return n.mutate ? [4, n.mutate({
                                                        variables: {
                                                            input: {
                                                                channelID: n.ownProps.channelID,
                                                                targetUserLogin: t
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
                    function n() {
                        var n = null !== e && e.apply(this, arguments) || this;
                        return n.state = {
                            isRetryButtonDisabled: !1
                        }, n.handleModalDismiss = function() {
                            n.props.clearMessage(), n.props.closeModal()
                        }, n.handleRetryClick = function() {
                            n.setState({
                                isRetryButtonDisabled: !0
                            }, n.handleRetry)
                        }, n.handleRetry = function() {
                            return a.__awaiter(n, void 0, void 0, function() {
                                var e, n, t, i, r, s, o, l = this;
                                return a.__generator(this, function(d) {
                                    switch (d.label) {
                                        case 0:
                                            return e = this.props.message, n = e.user, [4, this.props.mutateUser(n)];
                                        case 1:
                                            return (t = d.sent()) === te.FATAL ? (this.setState({
                                                isRetryButtonDisabled: !1
                                            }), [2]) : (i = t.editorError, r = t.modError, s = t.vipError, i || r || s ? (o = a.__assign({
                                                channelLogin: n.channelLogin,
                                                displayName: n.displayName,
                                                lastModified: n.lastModified,
                                                id: n.id,
                                                profileImageURL: n.profileImageURL
                                            }, i ? {} : {
                                                isEditor: n.isEditor
                                            }, r ? {} : {
                                                isMod: n.isMod
                                            }, s ? {} : {
                                                isVIP: n.isVIP
                                            }), this.props.modifyUserInCache(o, function() {
                                                l.props.setMessage({
                                                    user: n,
                                                    error: t,
                                                    type: X.SOME_MUTATIONS_FAILED
                                                }), l.props.closeModal()
                                            }), [2]) : (this.props.modifyUserInCache(n, function() {
                                                l.props.setMessage({
                                                    user: n,
                                                    type: X.ALL_MUTATIONS_SUCCEEDED
                                                }), l.props.closeModal()
                                            }), [2]))
                                    }
                                })
                            })
                        }, n
                    }
                    return a.__extends(n, e), n.prototype.render = function() {
                        return s.createElement(O.ab, {
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
                                type: O.F.Hollow
                            },
                            size: O.bb.Small,
                            title: Object(S.d)("Something went wrong", "RolesPageMessageModal")
                        }, s.createElement(O.Xa, {
                            padding: 1
                        }, s.createElement(O.W, null, Object(S.d)("There was an error modifying roles for {user}.", {
                            user: this.props.message.user.displayName
                        }, "RolesPageMessageModal"))))
                    }, n
                }(s.Component),
                Ce = function(e) {
                    function n() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(n, e), n.prototype.componentDidMount = function() {
                        this.tryToShowModal()
                    }, n.prototype.componentDidUpdate = function(e) {
                        e.message || this.tryToShowModal()
                    }, n.prototype.render = function() {
                        return null
                    }, n.prototype.tryToShowModal = function() {
                        var e = this.props.message;
                        e && (e.type === X.ALL_MUTATIONS_FAILED && this.props.showModal(this.props))
                    }, n
                }(s.Component);
            var be, Se = Object(o.compose)(Object(re.connect)(null, function(e) {
                    return Object(o.bindActionCreators)({
                        closeModal: ae.c,
                        showModal: function(e) {
                            return Object(ae.d)(Ee, e)
                        }
                    }, e)
                }), de, ee, F)(Ce),
                ye = t("9C/b"),
                Ie = (t("vsHg"), function(e) {
                    function n() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(n, e), n.prototype.render = function() {
                        return s.createElement(O.Xa, {
                            alignItems: O.f.Center,
                            display: O.X.Flex,
                            fullHeight: !0,
                            fullWidth: !0,
                            justifyContent: O.Wa.Center,
                            position: O.hb.Absolute,
                            zIndex: O.fc.Above
                        }, s.createElement(O.i, {
                            type: O.n.SlideInBottom,
                            duration: O.k.Medium,
                            enabled: !0,
                            timing: O.m.EaseInOut
                        }, s.createElement(O.Cb, {
                            background: O.r.Base,
                            borderBottom: !0,
                            borderRadius: O.x.Medium,
                            className: "dashboard-centered-banner",
                            display: O.X.Flex,
                            elevation: 3,
                            flexDirection: O.Aa.Column,
                            padding: 2
                        }, s.createElement(O.Xa, {
                            alignItems: O.f.Center,
                            display: O.X.Flex,
                            justifyContent: O.Wa.Start,
                            margin: {
                                bottom: 1
                            }
                        }, s.createElement(O.Xa, {
                            margin: {
                                right: .5
                            }
                        }, s.createElement(O.q, {
                            alt: Object(S.d)("VoHiYo", "CenteredBanner"),
                            src: "https://static-cdn.jtvnw.net/emoticons/v1/81274/2.0",
                            size: 30
                        })), s.createElement(O.W, {
                            bold: !0,
                            type: O.Sb.H5
                        }, this.props.title)), s.createElement(O.Xa, {
                            margin: {
                                bottom: 2
                            }
                        }, s.createElement(O.W, {
                            fontSize: O.Ca.Size5
                        }, this.props.body)), this.props.children)))
                    }, n
                }(s.Component));
            ! function(e) {
                e.ADD_A_ROLE = "no-users-banner-add-a-role", e.LEARN_MORE = "no-users-banner-learn-more"
            }(be || (be = {}));
            var Ne = function(e) {
                    function n() {
                        var n = null !== e && e.apply(this, arguments) || this;
                        return n.handleAddARoleClick = function() {
                            n.props.setView(r.DEFAULT)
                        }, n
                    }
                    return a.__extends(n, e), n.prototype.render = function() {
                        return s.createElement(Ie, {
                            body: Object(S.d)("Manage the permissions users have for your community. Start by adding your first role.", "NoUsersBanner"),
                            title: Object(S.d)("Welcome to Roles", "NoUsersBanner")
                        }, s.createElement(O.Xa, {
                            alignItems: O.f.Center,
                            display: O.X.Flex,
                            justifyContent: O.Wa.Start
                        }, s.createElement(O.Xa, {
                            margin: {
                                right: 1
                            }
                        }, s.createElement(O.z, {
                            "data-test-selector": be.ADD_A_ROLE,
                            onClick: this.handleAddARoleClick
                        }, Object(S.d)("Add a Role", "NoUsersBanner"))), s.createElement(O.z, {
                            "data-test-selector": be.LEARN_MORE,
                            linkTo: $,
                            type: O.F.Text
                        }, Object(S.d)("Learn More", "NoUsersBanner"))))
                    }, n
                }(s.Component),
                De = Object(o.compose)(k, ye.a)(Ne),
                _e = function(e) {
                    var n;
                    if (e.selected) switch (e.sortDirection) {
                        case Pe.ASCENDING:
                            n = s.createElement(O.qb, {
                                asset: O.rb.GlyphArrUp,
                                width: 10
                            });
                            break;
                        case Pe.DESCENDING:
                            n = s.createElement(O.qb, {
                                asset: O.rb.GlyphArrDown,
                                width: 10
                            });
                            break;
                        default:
                            n = s.createElement(O.qb, {
                                asset: O.rb.GlyphArrUpDown,
                                width: 10
                            })
                    } else n = s.createElement(O.qb, {
                        asset: O.rb.GlyphArrUpDown,
                        width: 10
                    });
                    return s.createElement(O.z, {
                        type: O.F.Text,
                        onClick: e.onClick
                    }, s.createElement(O.Cb, {
                        display: O.X.Flex,
                        alignContent: O.e.Center
                    }, s.createElement(O.W, {
                        type: O.Sb.Span,
                        bold: !0,
                        color: e.selected ? O.O.Alt : O.O.Link
                    }, e.children), s.createElement(O.Xa, {
                        display: O.X.Flex,
                        alignItems: O.f.Center,
                        margin: {
                            left: .5
                        }
                    }, n)))
                },
                Oe = t("u5aL"),
                Ue = function(e) {
                    function n() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(n, e), n.prototype.render = function() {
                        var e = this.props,
                            n = e.src,
                            t = e.title;
                        return s.createElement(O.Cb, {
                            alignItems: O.f.Center,
                            background: O.r.Alt,
                            borderRadius: O.x.Medium,
                            display: O.X.Flex,
                            justifyContent: O.Wa.Center,
                            margin: {
                                x: 1
                            }
                        }, n && s.createElement(O.Xa, {
                            margin: {
                                right: .5
                            }
                        }, s.createElement(O.S, {
                            alt: t,
                            src: n
                        })), s.createElement(O.Xa, {
                            margin: {
                                right: 1
                            }
                        }, s.createElement(O.W, {
                            bold: !0
                        }, t)), s.createElement(O.A, {
                            icon: O.rb.NotificationError,
                            onClick: this.props.onRolePillDismissed,
                            size: O.B.Small
                        }))
                    }, n
                }(s.Component),
                Ae = (t("eqbG"), function(e) {
                    function n() {
                        var n = null !== e && e.apply(this, arguments) || this;
                        return n.handleCheckBoxChange = function(e) {
                            var t;
                            n.props.onCheckBoxChange(((t = {})[n.props.value] = e.currentTarget.checked, t))
                        }, n
                    }
                    return a.__extends(n, e), n.prototype.render = function() {
                        var e = this.props,
                            n = e.disabled,
                            t = e.label,
                            i = e.src;
                        return s.createElement(O.Xa, {
                            alignItems: O.f.Center,
                            display: O.X.Flex,
                            justifyContent: O.Wa.Between,
                            margin: this.props.margin
                        }, s.createElement(O.N, {
                            checked: this.props.checked,
                            disabled: n,
                            label: t,
                            onChange: this.handleCheckBoxChange,
                            value: this.props.value
                        }), i && s.createElement(O.S, {
                            alt: t,
                            className: n ? "disabled-role-selector-icon" : "",
                            src: i
                        }))
                    }, n
                }(s.Component));

            function Me() {
                return Object(S.d)("Editor", "FilterUsersComponent")
            }

            function Te() {
                return Object(S.d)("Moderator", "FilterUsersComponent")
            }

            function Fe() {
                return Object(S.d)("VIP", "FilterUsersComponent")
            }
            var Le, Re, Pe, we = B(function(e) {
                    function n() {
                        var n = null !== e && e.apply(this, arguments) || this;
                        return n.handleLearnAboutRolesClick = function() {}, n
                    }
                    return a.__extends(n, e), n.prototype.render = function() {
                        var e = this.props,
                            n = e.isEditor,
                            t = e.isMod,
                            i = e.isVIP,
                            r = e.onCheckBoxChange;
                        return s.createElement(O.Xa, {
                            position: O.hb.Relative
                        }, s.createElement(O.u, {
                            offsetY: "-0.5px",
                            noTail: !0,
                            show: this.props.show
                        }, s.createElement(O.Cb, {
                            border: !0,
                            borderRadius: O.x.Small,
                            elevation: 2
                        }, s.createElement(Ae, {
                            checked: t,
                            disabled: i,
                            label: Te(),
                            onCheckBoxChange: r,
                            margin: {
                                x: 1,
                                y: 2
                            },
                            src: Q,
                            value: C.IS_MOD
                        }), this.props.isVIPUnlocked && s.createElement(Ae, {
                            checked: i,
                            disabled: t || this.props.isAtMaxVIPUserLimit && !i,
                            label: Fe(),
                            onCheckBoxChange: r,
                            margin: {
                                x: 1,
                                bottom: 2
                            },
                            src: z,
                            value: C.IS_VIP
                        }), s.createElement(Ae, {
                            checked: n,
                            disabled: !1,
                            label: Me(),
                            onCheckBoxChange: r,
                            margin: {
                                x: 1,
                                bottom: 2
                            },
                            value: C.IS_EDITOR
                        }), s.createElement(O.Ua, {
                            onClick: this.handleLearnAboutRolesClick
                        }, s.createElement(O.Cb, {
                            alignItems: O.f.Center,
                            borderTop: !0,
                            display: O.X.Flex,
                            padding: 1
                        }, s.createElement(O.Xa, {
                            alignItems: O.f.Center,
                            display: O.X.Flex,
                            margin: {
                                right: 1
                            }
                        }, s.createElement(O.qb, {
                            asset: O.rb.NotificationInfo
                        })), s.createElement(O.W, null, Object(S.e)("Learn about Roles", "RoleSelector")))))))
                    }, n
                }(s.Component)),
                Ve = B(function(e) {
                    function n() {
                        var n = null !== e && e.apply(this, arguments) || this;
                        return n.state = {
                            isBalloonOpen: !1
                        }, n.handleAddRoleClick = function() {
                            n.setState(function(e) {
                                return {
                                    isBalloonOpen: !e.isBalloonOpen
                                }
                            })
                        }, n.handleClickOut = function() {
                            n.setState({
                                isBalloonOpen: !1
                            }, function() {
                                var e = n.props.onDropDownClickOut;
                                e && e()
                            })
                        }, n
                    }
                    return a.__extends(n, e), n.prototype.render = function() {
                        var e = this.props,
                            n = e.onRolePillDismissed,
                            t = e.user,
                            i = this.state.isBalloonOpen,
                            r = Me(),
                            a = Te(),
                            o = Fe(),
                            l = t.isEditor,
                            d = t.isMod,
                            c = t.isVIP;
                        return s.createElement(O.Xa, {
                            alignItems: O.f.Center,
                            display: O.X.Flex
                        }, s.createElement(Oe.a, {
                            onClickOut: this.handleClickOut
                        }, !i && s.createElement(O.A, {
                            onClick: this.handleAddRoleClick,
                            icon: O.rb.Plus,
                            size: O.B.Small
                        }), i && s.createElement(s.Fragment, null, s.createElement(O.z, {
                            icon: O.rb.Plus,
                            onClick: this.handleAddRoleClick,
                            size: O.D.Small,
                            type: i ? O.F.Hollow : O.F.Text
                        }, s.createElement(O.W, null, Object(S.d)("Add Role", "RoleSelector"))), s.createElement(we, {
                            isEditor: l,
                            isMod: d,
                            isVIP: c,
                            onCheckBoxChange: this.props.onCheckBoxChange,
                            show: i
                        }))), l && s.createElement(Ue, {
                            onRolePillDismissed: n.bind(null, C.IS_EDITOR),
                            title: r
                        }), d && s.createElement(Ue, {
                            onRolePillDismissed: n.bind(null, C.IS_MOD),
                            src: Q,
                            title: a
                        }), this.props.isVIPUnlocked && c && s.createElement(Ue, {
                            onRolePillDismissed: n.bind(null, C.IS_VIP),
                            src: z,
                            title: o
                        }))
                    }, n
                }(s.Component)),
                xe = function(e) {
                    function n() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(n, e), n.prototype.render = function() {
                        return s.createElement(O.Cb, {
                            alignItems: O.f.Center,
                            background: O.r.Base,
                            borderBottom: !0,
                            borderRadius: O.x.Large,
                            display: O.X.Flex,
                            elevation: 1,
                            fullWidth: !0,
                            margin: this.props.margin,
                            padding: 1
                        }, this.props.children)
                    }, n
                }(s.Component),
                Be = function(e) {
                    function n() {
                        var n = null !== e && e.apply(this, arguments) || this;
                        return n.handleCheckBoxChange = function() {}, n.handleClickOut = function() {}, n.handleRolePillDismissed = function() {}, n
                    }
                    return a.__extends(n, e), n.prototype.render = function() {
                        var e = this.props,
                            n = e.user,
                            t = e.user,
                            i = t.channelLogin,
                            r = t.displayName;
                        return s.createElement(xe, {
                            margin: {
                                top: .5
                            }
                        }, s.createElement(O.P, {
                            cols: Le.FIRST_COLUMN
                        }, s.createElement(O.Xa, {
                            display: O.X.Flex,
                            alignItems: O.f.Center
                        }, s.createElement(O.U, {
                            to: "/" + i,
                            targetBlank: !0
                        }, s.createElement(O.q, {
                            src: n.profileImageURL,
                            alt: i,
                            size: 30
                        })), s.createElement(O.U, {
                            to: "/" + i,
                            targetBlank: !0
                        }, s.createElement(O.Xa, {
                            margin: {
                                left: 1
                            },
                            display: O.X.Flex,
                            alignItems: O.f.Center
                        }, s.createElement(O.W, {
                            bold: !0,
                            color: O.O.Base,
                            type: O.Sb.P,
                            ellipsis: !0
                        }, i), i.toLowerCase() !== r.toLowerCase() && s.createElement(O.Xa, {
                            margin: {
                                left: 1
                            }
                        }, s.createElement(O.W, {
                            bold: !0,
                            color: O.O.Base,
                            ellipsis: !0,
                            type: O.Sb.P
                        }, r)))))), s.createElement(O.P, {
                            cols: Le.SECOND_COLUMN
                        }, s.createElement(O.Xa, {
                            display: O.X.Flex,
                            margin: {
                                right: 5
                            },
                            flexGrow: 1,
                            alignItems: O.f.Center
                        }, s.createElement(Ve, {
                            user: n,
                            onCheckBoxChange: this.handleCheckBoxChange,
                            onDropDownClickOut: this.handleClickOut,
                            onRolePillDismissed: this.handleRolePillDismissed
                        }))), s.createElement(O.P, {
                            cols: Le.THIRD_COLUMN
                        }, s.createElement(O.Xa, {
                            display: O.X.Flex,
                            alignItems: O.f.Center,
                            flexDirection: O.Aa.RowReverse
                        }, s.createElement(O.P, {
                            cols: 6
                        }, s.createElement(O.W, null, Object(S.c)(n.lastModified))))))
                    }, n
                }(s.Component),
                je = function(e) {
                    function n() {
                        var n = null !== e && e.apply(this, arguments) || this;
                        return n.sortByUsername = function() {
                            return Object.keys(n.props.userCache).sort(function(e, t) {
                                return n.props.sortDirection === Pe.ASCENDING && n.props.userCache[e].channelLogin > n.props.userCache[t].channelLogin ? 1 : n.props.sortDirection === Pe.DESCENDING && n.props.userCache[e].channelLogin < n.props.userCache[t].channelLogin ? 1 : 0
                            })
                        }, n.sortByLastModified = function() {
                            return Object.keys(n.props.userCache).sort(function(e, t) {
                                return n.props.sortDirection === Pe.ASCENDING && n.props.userCache[e].lastModified < n.props.userCache[t].lastModified ? 1 : n.props.sortDirection === Pe.DESCENDING && n.props.userCache[e].lastModified > n.props.userCache[t].lastModified ? 1 : 0
                            })
                        }, n
                    }
                    return a.__extends(n, e), n.prototype.render = function() {
                        var e = this,
                            n = [];
                        return this.props.sortBy === Re.USERNAME && (n = this.sortByUsername()), this.props.sortBy === Re.LAST_MODIFIED && (n = this.sortByLastModified()), this.props.filterType === E.ALL_ROLES ? s.createElement(s.Fragment, null, n.map(function(n) {
                            return s.createElement(Be, {
                                "data-test-selector": "roles-table-row-" + n,
                                key: "roles-table-row-" + n,
                                user: e.props.userCache[n]
                            })
                        })) : s.createElement(s.Fragment, null, n.reduce(function(n, t) {
                            var i = e.props.userCache[t];
                            return i && (e.props.filterType === E.EDITOR && i[C.IS_EDITOR] || e.props.filterType === E.MODERATOR && i[C.IS_MOD] || e.props.filterType === E.VIP && i[C.IS_VIP]) && n.push(s.createElement(Be, {
                                "data-test-selector": "roles-table-row-" + t,
                                key: "roles-table-row-" + t,
                                user: i
                            })), n
                        }, []))
                    }, n
                }(s.Component);
            ! function(e) {
                e[e.FIRST_COLUMN = 3] = "FIRST_COLUMN", e[e.SECOND_COLUMN = 5] = "SECOND_COLUMN", e[e.THIRD_COLUMN = 4] = "THIRD_COLUMN"
            }(Le || (Le = {})),
            function(e) {
                e.USERNAME = "username", e.LAST_MODIFIED = "last-modified"
            }(Re || (Re = {})),
            function(e) {
                e.ASCENDING = "ascending", e.DESCENDING = "descending"
            }(Pe || (Pe = {}));
            var Xe, Ge = function(e) {
                    function n() {
                        var n = null !== e && e.apply(this, arguments) || this;
                        return n.state = {
                            sortBy: Re.USERNAME,
                            sortDirection: Pe.ASCENDING
                        }, n.handleUsernameHeaderClick = function() {
                            n.changeSort(Re.USERNAME)
                        }, n.handleLastModifiedHeaderClick = function() {
                            n.changeSort(Re.LAST_MODIFIED)
                        }, n.changeSort = function(e) {
                            var t;
                            t = n.state.sortDirection && n.state.sortBy === e && n.state.sortDirection !== Pe.DESCENDING ? Pe.DESCENDING : Pe.ASCENDING, n.setState({
                                sortBy: e,
                                sortDirection: t
                            })
                        }, n
                    }
                    return a.__extends(n, e), n.prototype.render = function() {
                        var e = this.state.sortBy,
                            n = this.state.sortDirection;
                        return s.createElement(O.Xa, {
                            fullWidth: !0,
                            fullHeight: !0,
                            margin: {
                                top: 2
                            }
                        }, s.createElement(O.Xa, {
                            display: O.X.Flex,
                            alignItems: O.f.Center,
                            padding: {
                                x: 1,
                                bottom: 1
                            }
                        }, s.createElement(O.P, {
                            cols: Le.FIRST_COLUMN
                        }, s.createElement(_e, {
                            selected: e === Re.USERNAME,
                            sortDirection: n,
                            onClick: this.handleUsernameHeaderClick
                        }, Object(S.d)("Username", "RolesPageTable"))), s.createElement(O.P, {
                            cols: Le.SECOND_COLUMN
                        }, s.createElement(O.W, {
                            type: O.Sb.Span,
                            bold: !0,
                            color: O.O.Link
                        }, " ", Object(S.d)("Roles", "RolesPageTable"), " ")), s.createElement(O.P, {
                            cols: Le.THIRD_COLUMN
                        }, s.createElement(O.Xa, {
                            display: O.X.Flex,
                            flexDirection: O.Aa.RowReverse
                        }, s.createElement(O.P, {
                            cols: 6
                        }, s.createElement(_e, {
                            selected: e === Re.LAST_MODIFIED,
                            sortDirection: n,
                            onClick: this.handleLastModifiedHeaderClick
                        }, Object(S.d)("Last Modified", "RolesPageTable")))))), s.createElement(je, {
                            filterType: this.props.filterType,
                            userCache: this.props.userCache,
                            sortBy: e,
                            sortDirection: n
                        }))
                    }, n
                }(s.Component),
                We = Object(o.compose)(F)(Ge),
                qe = t("f00E"),
                He = t("H/lO"),
                $e = t("NZDK"),
                Qe = t("AXTS"),
                ze = t("Kw8/"),
                Ye = t("gD7V"),
                Ke = 250,
                Je = function(e) {
                    function n() {
                        var n = null !== e && e.apply(this, arguments) || this;
                        return n.state = {
                            canEditInputField: !0,
                            searchedUsers: null,
                            showDropDown: !1
                        }, n.searchClient = new $e.a({
                            appId: S.a.algoliaApplicationID,
                            apiKey: S.a.algoliaAPIKey,
                            apolloClient: S.p.apollo.client,
                            logger: S.k,
                            config: S.a,
                            stats: S.p.stats
                        }), n.filterUsersResults = function(e) {
                            var t = n.props.data.user,
                                i = t && t.id,
                                r = n.props.userCache;
                            return e.hits.filter(function(e) {
                                var n = e.objectID;
                                return n && n !== i && !r[n]
                            })
                        }, n.handleInputChange = function(e) {
                            var t = e.currentTarget.value;
                            return a.__awaiter(n, void 0, void 0, function() {
                                return a.__generator(this, function(e) {
                                    return this.algoliaDebounceTimeout && clearTimeout(this.algoliaDebounceTimeout), this.algoliaDebounceTimeout = setTimeout(this.queryAlgolia.bind(this, t), Ke), [2]
                                })
                            })
                        }, n.queryAlgolia = function(e) {
                            return a.__awaiter(n, void 0, void 0, function() {
                                var n;
                                return a.__generator(this, function(t) {
                                    switch (t.label) {
                                        case 0:
                                            return e ? [4, this.searchClient.queryForType(He.a.Users, e, Object(qe.a)(), {
                                                hitsPerPage: 10
                                            })] : [3, 2];
                                        case 1:
                                            return (n = t.sent()) && n.users && this.setState({
                                                searchedUsers: this.filterUsersResults(n.users)
                                            }, this.deselectUser), [3, 3];
                                        case 2:
                                            this.setState({
                                                searchedUsers: null
                                            }, this.deselectUser), t.label = 3;
                                        case 3:
                                            return [2]
                                    }
                                })
                            })
                        }, n.handleInputFocus = function() {
                            n.setState({
                                showDropDown: !0
                            })
                        }, n.handleInputBlur = function(e) {
                            e.persist(), n.handleBlur(e.relatedTarget)
                        }, n.handleOptionBlur = function(e) {
                            n.handleBlur(e)
                        }, n.handleOptionClick = function(e) {
                            n.setState({
                                canEditInputField: !1,
                                showDropDown: !1
                            }, function() {
                                n.props.onUserSelected(e)
                            })
                        }, n.handleBlur = function(e) {
                            n.setState({
                                showDropDown: e && e.getAttribute(ze.a) === ze.b
                            })
                        }, n.handleClickOut = function() {
                            n.setState({
                                canEditInputField: !1,
                                showDropDown: !1
                            })
                        }, n.enableInputField = function() {
                            n.setState({
                                canEditInputField: !0
                            })
                        }, n.deselectUser = function() {
                            n.props.selectedUser && n.props.onUserDeselected()
                        }, n
                    }
                    return a.__extends(n, e), n.prototype.render = function() {
                        if (this.props.data.loading) return null;
                        var e = this.props.selectedUser,
                            n = e && e.channelLogin || "",
                            t = e && e.displayName || "",
                            i = this.state.canEditInputField,
                            r = s.createElement(O.Xa, {
                                margin: {
                                    right: e ? 1 : .5
                                }
                            }, s.createElement(O.q, {
                                alt: Object(S.d)("Avatar", "SearchUsers"),
                                size: 30,
                                src: e && e.profileImageURL
                            }));
                        return s.createElement(O.Xa, null, !i && e && s.createElement(O.Ua, {
                            onClick: this.enableInputField,
                            type: O.Va.Overlay
                        }, s.createElement(O.Xa, {
                            alignItems: O.f.Center,
                            display: O.X.Flex
                        }, r, s.createElement(O.W, {
                            bold: !0,
                            type: O.Sb.P,
                            ellipsis: !0
                        }, n), n.toLowerCase() !== t.toLowerCase() && s.createElement(O.Xa, {
                            margin: {
                                left: 1
                            }
                        }, s.createElement(O.W, {
                            bold: !0,
                            type: O.Sb.P,
                            ellipsis: !0
                        }, t)))), (i || !e) && s.createElement(Oe.a, {
                            onClickOut: this.handleClickOut
                        }, s.createElement(O.Xa, {
                            alignItems: O.f.Center,
                            display: O.X.Flex
                        }, r, s.createElement(O.Xa, {
                            position: O.hb.Relative
                        }, s.createElement(O.Ra, {
                            autoFocus: !0,
                            defaultValue: t,
                            onBlur: this.handleInputBlur,
                            onChange: this.handleInputChange,
                            onFocus: this.handleInputFocus,
                            placeholder: Object(S.d)("Search", "SearchUsers"),
                            type: O.Ta.Text
                        }), s.createElement(Qe.a, {
                            onOptionClick: this.handleOptionClick,
                            onOptionBlur: this.handleOptionBlur,
                            show: this.state.showDropDown,
                            users: this.state.searchedUsers
                        })))))
                    }, n
                }(s.Component),
                Ze = Object(o.compose)(F, ye.a, Object(l.a)(Ye, {
                    options: function(e) {
                        return {
                            variables: {
                                login: e.match.params.channelLogin
                            }
                        }
                    }
                }))(Je);
            ! function(e) {
                e.CANCEL_BUTTON = "roles-page-add-user-cancel-button", e.SAVE_BUTTON = "roles-page-add-user-save-button"
            }(Xe || (Xe = {}));
            var en, nn = function(e) {
                    function n() {
                        var n = null !== e && e.apply(this, arguments) || this;
                        return n.state = {
                            selectedUser: null
                        }, n.handleCheckBoxChange = function(e) {
                            n.setState(function(n) {
                                var t = n.selectedUser;
                                return t ? {
                                    selectedUser: a.__assign({}, t, e)
                                } : null
                            })
                        }, n.handleRolePillDismissed = function(e) {
                            n.setState(function(n) {
                                var t, i = n.selectedUser;
                                return i ? {
                                    selectedUser: a.__assign({}, i, (t = {}, t[e] = !1, t))
                                } : null
                            })
                        }, n.handleUserSelected = function(e) {
                            n.setState({
                                selectedUser: {
                                    displayName: e.name,
                                    channelLogin: e.login,
                                    id: e.objectID,
                                    profileImageURL: e.profile_image || "",
                                    lastModified: new Date,
                                    isEditor: !1,
                                    isMod: !1,
                                    isVIP: !1
                                }
                            })
                        }, n.handleUserDeselected = function() {
                            n.setState({
                                selectedUser: null
                            })
                        }, n.handleCancelClick = function() {
                            n.props.setView(r.DEFAULT)
                        }, n.handleSaveClick = function() {
                            return a.__awaiter(n, void 0, void 0, function() {
                                var e, n, t, i, s, o, l = this;
                                return a.__generator(this, function(d) {
                                    switch (d.label) {
                                        case 0:
                                            return e = this.state.selectedUser, [4, this.props.mutateUser(e)];
                                        case 1:
                                            return n = d.sent(), this.props.setView(r.DEFAULT), n === te.FATAL ? (this.props.setMessage({
                                                user: e,
                                                error: n,
                                                type: X.ALL_MUTATIONS_FAILED
                                            }), [2]) : (t = n.editorError, i = n.modError, s = n.vipError, t || i || s ? (o = a.__assign({
                                                channelLogin: e.channelLogin,
                                                displayName: e.displayName,
                                                lastModified: e.lastModified,
                                                id: e.id,
                                                profileImageURL: e.profileImageURL
                                            }, t ? {} : {
                                                isEditor: e.isEditor
                                            }, i ? {} : {
                                                isMod: e.isMod
                                            }, s ? {} : {
                                                isVIP: e.isVIP
                                            }), this.props.modifyUserInCache(o, function() {
                                                l.props.setMessage({
                                                    user: e,
                                                    error: n,
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
                        }, n
                    }
                    return a.__extends(n, e), n.prototype.render = function() {
                        var e = this.state.selectedUser;
                        return s.createElement(O.Xa, {
                            fullWidth: !0,
                            position: O.hb.Relative,
                            zIndex: O.fc.Above
                        }, s.createElement(O.i, {
                            duration: O.k.Medium,
                            enabled: !0,
                            type: O.n.SlideInBottom
                        }, s.createElement(xe, null, s.createElement(O.P, {
                            cols: Le.FIRST_COLUMN
                        }, s.createElement(Ze, {
                            onUserDeselected: this.handleUserDeselected,
                            onUserSelected: this.handleUserSelected,
                            selectedUser: e
                        })), s.createElement(O.P, {
                            cols: Le.SECOND_COLUMN
                        }, e && s.createElement(Ve, {
                            onCheckBoxChange: this.handleCheckBoxChange,
                            onRolePillDismissed: this.handleRolePillDismissed,
                            user: e
                        })), s.createElement(O.P, {
                            cols: Le.THIRD_COLUMN
                        }, s.createElement(O.Xa, {
                            alignItems: O.f.Center,
                            display: O.X.Flex,
                            justifyContent: O.Wa.End
                        }, s.createElement(O.Xa, {
                            margin: {
                                right: 1
                            }
                        }, s.createElement(O.z, {
                            "data-test-selector": Xe.CANCEL_BUTTON,
                            onClick: this.handleCancelClick,
                            type: O.F.Hollow
                        }, Object(S.d)("Cancel", "AddUserComponent"))), s.createElement(O.z, {
                            "data-test-selector": Xe.SAVE_BUTTON,
                            disabled: !e || !e.isEditor && !e.isMod && !e.isVIP,
                            onClick: this.handleSaveClick,
                            type: O.F.Success
                        }, Object(S.d)("Save", "AddUserComponent")))))))
                    }, n
                }(s.Component),
                tn = Object(o.compose)(F, de, ee, k)(nn);
            ! function(e) {
                e.ALL_MUTATIONS_SUCCEEDED = "all-mutations-succeeded", e.SOME_MUTATIONS_FAILED = "some-mutations-failed"
            }(en || (en = {}));
            var rn = function(e) {
                    function n() {
                        var n = null !== e && e.apply(this, arguments) || this;
                        return n.state = {
                            wasVIPWarningMessageDismissed: !1
                        }, n.handleDismissVIPWarningMessage = function() {
                            n.props.clearMessage(), n.setState({
                                wasVIPWarningMessageDismissed: !0
                            })
                        }, n
                    }
                    return a.__extends(n, e), n.prototype.componentDidMount = function() {
                        this.tryToShowOrHideVIPWarningMessage()
                    }, n.prototype.componentDidUpdate = function() {
                        this.tryToShowOrHideVIPWarningMessage()
                    }, n.prototype.render = function() {
                        var e = this.props.message;
                        return e ? s.createElement(O.Xa, {
                            fullWidth: !0,
                            margin: {
                                bottom: 2
                            }
                        }, this.getContent(e)) : null
                    }, n.prototype.getContent = function(e) {
                        var n = this.props.clearMessage,
                            t = Object(S.d)("Close", "RolesPageTopBar");
                        switch (e.type) {
                            case X.ALL_MUTATIONS_SUCCEEDED:
                                return s.createElement(O.Na, {
                                    closeButtonAriaLabel: t,
                                    closeButtonOnClick: n,
                                    "data-test-selector": en.ALL_MUTATIONS_SUCCEEDED,
                                    description: Object(S.d)("Specified roles added for {user}.", {
                                        user: e.user.displayName
                                    }, "RolesPageTopBar"),
                                    title: Object(S.d)("Success!", "RolesPageTopBar"),
                                    type: O.Oa.Success
                                });
                            case X.SOME_MUTATIONS_FAILED:
                                return s.createElement(O.Na, {
                                    closeButtonAriaLabel: t,
                                    closeButtonOnClick: n,
                                    "data-test-selector": en.SOME_MUTATIONS_FAILED,
                                    description: Object(S.d)("Unfortunately, some of the specified roles were unable to be added for {user}.", {
                                        user: e.user.displayName
                                    }, "RolesPageTopBar"),
                                    title: Object(S.d)("Warning!", "RolesPageTopBar"),
                                    type: O.Oa.Warning
                                });
                            case X.MAX_VIPS_REACHED:
                                return s.createElement(O.Na, {
                                    closeButtonAriaLabel: t,
                                    closeButtonOnClick: this.handleDismissVIPWarningMessage,
                                    description: Object(S.d)("You have reached the maximum amount of VIP roles. <x:link>Read more about Roles.</x:link>", {
                                        "x:link": function(e) {
                                            return s.createElement(O.U, {
                                                linkTo: "TODO"
                                            }, e)
                                        }
                                    }, "RolesPageTopBar"),
                                    title: Object(S.d)("You can't add any more VIPs.", "RolesPageTopBar"),
                                    type: O.Oa.Warning
                                });
                            default:
                                return null
                        }
                    }, n.prototype.tryToShowOrHideVIPWarningMessage = function() {
                        var e = this.props,
                            n = e.isAtMaxVIPUserLimit,
                            t = e.message;
                        !n || t || this.state.wasVIPWarningMessageDismissed ? t && t.type === X.MAX_VIPS_REACHED && !n && (this.props.clearMessage(), this.setState({
                            wasVIPWarningMessageDismissed: !1
                        })) : this.props.setMessage({
                            type: X.MAX_VIPS_REACHED
                        })
                    }, n
                }(s.Component),
                an = Object(o.compose)(B, ee)(rn),
                sn = function(e) {
                    function n() {
                        var n = null !== e && e.apply(this, arguments) || this;
                        return n.state = {
                            showDropDownMenu: !1
                        }, n.handleOptionClick = function(e) {
                            n.setState({
                                showDropDownMenu: !1
                            }, function() {
                                n.props.setFilterType(e)
                            })
                        }, n.handleButtonClick = function() {
                            n.setState(function(e) {
                                return {
                                    showDropDownMenu: !e.showDropDownMenu
                                }
                            })
                        }, n.handleClickOut = function() {
                            n.setState({
                                showDropDownMenu: !1
                            })
                        }, n
                    }
                    return a.__extends(n, e), n.prototype.render = function() {
                        var e = this.props.filterType;
                        return s.createElement(O.Xa, {
                            alignItems: O.f.Center,
                            display: O.X.Flex
                        }, s.createElement(O.Xa, {
                            margin: {
                                right: 1
                            }
                        }, s.createElement(O.W, null, Object(S.d)("Display", "FilterUsersComponent"))), s.createElement(O.Xa, null, s.createElement(Oe.a, {
                            onClickOut: this.handleClickOut
                        }, s.createElement(O.z, {
                            onClick: this.handleButtonClick,
                            type: O.F.Text
                        }, s.createElement(O.Xa, {
                            alignItems: O.f.Center,
                            display: O.X.Flex
                        }, s.createElement(O.Xa, {
                            margin: {
                                right: .5
                            }
                        }, s.createElement(O.W, {
                            bold: !0
                        }, this.getFilterText(e))), s.createElement(O.qb, {
                            asset: O.rb.Carat,
                            height: 16,
                            width: 16
                        }))), s.createElement(O.Xa, {
                            position: O.hb.Relative
                        }, s.createElement(O.Y, {
                            items: [{
                                disabled: e === E.ALL_ROLES,
                                onClick: this.handleOptionClick.bind(this, E.ALL_ROLES),
                                title: this.getFilterText(E.ALL_ROLES)
                            }, {
                                disabled: e === E.MODERATOR,
                                figure: {
                                    alt: this.getFilterText(E.MODERATOR),
                                    src: Q
                                },
                                figureRight: !0,
                                onClick: this.handleOptionClick.bind(this, E.MODERATOR),
                                title: this.getFilterText(E.MODERATOR)
                            }].concat(this.props.isVIPUnlocked ? [{
                                disabled: e === E.VIP,
                                figure: {
                                    alt: this.getFilterText(E.VIP),
                                    src: z
                                },
                                figureRight: !0,
                                onClick: this.handleOptionClick.bind(this, E.VIP),
                                title: this.getFilterText(E.VIP)
                            }] : []).concat([{
                                disabled: e === E.EDITOR,
                                onClick: this.handleOptionClick.bind(this, E.EDITOR),
                                title: this.getFilterText(E.EDITOR)
                            }]),
                            show: this.state.showDropDownMenu
                        })))))
                    }, n.prototype.getFilterText = function(e) {
                        switch (e) {
                            default:
                                case E.ALL_ROLES:
                                return Object(S.d)("All Roles", "FilterUsersComponent");
                            case E.EDITOR:
                                    return Me();
                            case E.MODERATOR:
                                    return Te();
                            case E.VIP:
                                    return Fe()
                        }
                    }, n
                }(s.Component),
                on = Object(o.compose)(B, F)(sn),
                ln = function(e) {
                    function n() {
                        var n = null !== e && e.apply(this, arguments) || this;
                        return n.handleButtonClick = function() {
                            n.props.setView(r.ADD_USER), n.props.clearMessage()
                        }, n
                    }
                    return a.__extends(n, e), n.prototype.render = function() {
                        var e = this.props.view === r.ADD_USER;
                        return s.createElement(s.Fragment, null, s.createElement(O.Cb, {
                            alignItems: O.f.Center,
                            borderBottom: !0,
                            display: O.X.Flex,
                            fullWidth: !0,
                            justifyContent: O.Wa.Between,
                            margin: {
                                bottom: 2
                            },
                            padding: {
                                bottom: 1
                            }
                        }, s.createElement(on, null), s.createElement(O.z, {
                            disabled: e,
                            onClick: this.handleButtonClick
                        }, Object(S.d)("Add New", "TopBar"))), s.createElement(an, null), e && s.createElement(tn, null))
                    }, n
                }(s.Component),
                dn = Object(o.compose)(ee, k)(ln),
                cn = k(function(e) {
                    function n() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(n, e), n.prototype.componentDidMount = function() {
                        S.p.setPageTitle(Object(S.d)("Roles", "RolesPage"))
                    }, n.prototype.render = function() {
                        var e = this.props.channelID;
                        return s.createElement(P, {
                            channelID: e
                        }, s.createElement(G, {
                            channelID: e
                        }, s.createElement(ie, null, s.createElement(ge, {
                            channelID: e
                        }, this.props.view === r.NO_USERS ? s.createElement(De, null) : s.createElement(y.a, null, s.createElement(dn, null), s.createElement(We, null), s.createElement(Se, null)), s.createElement(Y, null)))))
                    }, n
                }(s.Component)),
                un = t("LQi+"),
                mn = function(e) {
                    function n() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(n, e), n.prototype.componentDidMount = function() {
                        this.reportInteractive()
                    }, n.prototype.componentDidUpdate = function(e) {
                        e.data.loading && this.reportInteractive()
                    }, n.prototype.render = function() {
                        return s.createElement(b, null, s.createElement(cn, {
                            channelID: this.props.data.user && this.props.data.user.id
                        }))
                    }, n.prototype.reportInteractive = function() {
                        this.props.data.loading || this.props.latencyTracking.reportInteractive(1)
                    }, n
                }(s.Component),
                pn = Object(o.compose)(Object(m.b)("RolesPage", {
                    destination: c.a.RolesPage
                }), Object(d.a)({
                    location: u.PageviewLocation.DashboardSettingsRolesPage
                }), Object(l.a)(un, {
                    options: function(e) {
                        return {
                            variables: {
                                channelLogin: e.match.params.channelLogin
                            }
                        }
                    }
                }))(mn);
            t.d(n, "RolesPage", function() {
                return pn
            })
        },
        r6Pb: function(e, n) {
            var t = {
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
            t.loc.source = {
                body: "mutation RemoveEditorUser($input: RemoveEditorInput!){\nremoveEditor(input: $input) {\nchannel {\nid\n}\ntargetUser {\nid\n}\nerror {\ncode\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = t
        },
        sMoq: function(e, n) {
            var t = {
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
            t.loc.source = {
                body: "mutation VIPUser($input: GrantVIPInput!){\ngrantVIP(input: $input) {\nchannel {\nid\n}\ngrantee {\nid\nlogin\n}\nerror {\ncode\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = t
        },
        sZ5a: function(e, n, t) {},
        vYsf: function(e, n, t) {
            "use strict";
            t.d(n, "a", function() {
                return a
            });
            var i = t("mrSG"),
                r = t("b6Yk");

            function a(e) {
                return i.__awaiter(this, void 0, Promise, function() {
                    var n, t;
                    return i.__generator(this, function(i) {
                        switch (i.label) {
                            case 0:
                                return [4, r.a.get("/v5/channels/" + e + "/quests")];
                            case 1:
                                if (n = i.sent(), t = n.body, 200 !== n.status || !t) throw new Error("failed to fetch quests");
                                return [2, t.quests]
                        }
                    })
                })
            }
        },
        vsHg: function(e, n, t) {},
        yzwe: function(e, n, t) {
            "use strict";
            t.d(n, "a", function() {
                return i
            }), t.d(n, "b", function() {
                return o
            });
            var i, r = t("mrSG"),
                a = t("yR8l"),
                s = t("FAYk");

            function o(e) {
                var n = this;
                return Object(a.a)(s, {
                    props: function(t) {
                        return {
                            unmodUserMutation: function(i) {
                                return r.__awaiter(n, void 0, void 0, function() {
                                    var n;
                                    return r.__generator(this, function(r) {
                                        if (n = e(t.ownProps).channelID, t.mutate) return [2, t.mutate({
                                            variables: {
                                                input: {
                                                    channelID: n,
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