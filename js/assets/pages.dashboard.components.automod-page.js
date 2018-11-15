(window.webpackJsonp = window.webpackJsonp || []).push([
    [179], {
        "4l1H": function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "mutation",
                    name: {
                        kind: "Name",
                        value: "Chat_AddChannelBlockedTerm"
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
                                    value: "AddChannelBlockedTermInput"
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
                                value: "addChannelBlockedTerm"
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
                                        value: "phrases"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "addedAt"
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
                    end: 133
                }
            };
            n.loc.source = {
                body: "mutation Chat_AddChannelBlockedTerm($input: AddChannelBlockedTermInput!) {\naddChannelBlockedTerm(input: $input) {\nphrases\naddedAt\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        "5R7h": function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "mutation",
                    name: {
                        kind: "Name",
                        value: "Chat_DeleteChannelPermittedTerm"
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
                                    value: "DeleteChannelPermittedTermInput"
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
                                value: "deleteChannelPermittedTerm"
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
                                        value: "deletedAt"
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
                body: "mutation Chat_DeleteChannelPermittedTerm($input: DeleteChannelPermittedTermInput!) {\ndeleteChannelPermittedTerm(input: $input) {\ndeletedAt\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        Jpqj: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "ModLogs"
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
                                        value: "modLogsRoleAccess"
                                    },
                                    arguments: [{
                                        kind: "Argument",
                                        name: {
                                            kind: "Name",
                                            value: "role"
                                        },
                                        value: {
                                            kind: "EnumValue",
                                            value: "MODERATOR"
                                        }
                                    }],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "accessLevel"
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
                    end: 157
                }
            };
            n.loc.source = {
                body: "query ModLogs($channelLogin: String!) {\ncurrentUser {\nid\ndisplayName\n}\nuser(login: $channelLogin) {\nid\nmodLogsRoleAccess(role: MODERATOR) {\naccessLevel\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        K1HF: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "GetAutoModProperties"
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
                        }, {
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
                                        value: "autoModProperties"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "aggressiveLevel"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "identityLevel"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "profanityLevel"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "sexualLevel"
                                            },
                                            arguments: [],
                                            directives: []
                                        }]
                                    }
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "blockedTerms"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "phrases"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "createdAt"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "updatedAt"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "expiresAt"
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
                                                value: "isModEditable"
                                            },
                                            arguments: [],
                                            directives: []
                                        }]
                                    }
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "permittedTerms"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "phrases"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "createdAt"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "updatedAt"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "expiresAt"
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
                                                value: "isModEditable"
                                            },
                                            arguments: [],
                                            directives: []
                                        }]
                                    }
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "chatSettings"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "isOptedOutOfGlobalBannedWordsList"
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
                                                value: "isModerator"
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
                    end: 444
                }
            };
            n.loc.source = {
                body: "query GetAutoModProperties($channelLogin: String!) {\ncurrentUser{\nid\nroles {\nisStaff\nisSiteAdmin\n}\n}\nuser(login: $channelLogin) {\nid\nautoModProperties {\naggressiveLevel\nidentityLevel\nprofanityLevel\nsexualLevel\n}\nblockedTerms {\nphrases\ncreatedAt\nupdatedAt\nexpiresAt\ncategory\nisModEditable\n}\npermittedTerms {\nphrases\ncreatedAt\nupdatedAt\nexpiresAt\ncategory\nisModEditable\n}\nchatSettings{\nisOptedOutOfGlobalBannedWordsList\n}\nself {\nisModerator\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        R17a: function(e, t, n) {},
        Temx: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "mutation",
                    name: {
                        kind: "Name",
                        value: "Chat_AddChannelPermittedTerm"
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
                                    value: "AddChannelPermittedTermInput"
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
                                value: "addChannelPermittedTerm"
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
                                        value: "phrases"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "addedAt"
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
                    end: 139
                }
            };
            n.loc.source = {
                body: "mutation Chat_AddChannelPermittedTerm($input: AddChannelPermittedTermInput!) {\naddChannelPermittedTerm(input: $input) {\nphrases\naddedAt\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        U5Uu: function(e, t, n) {
            "use strict";
            n.r(t);
            var a, i, r = n("mrSG"),
                o = n("q1tI"),
                s = n("wIs1"),
                d = n("fvjX"),
                l = n("/7QA"),
                c = n("4VQm"),
                u = n("V+GM"),
                m = n("NvVO"),
                p = n("2xye"),
                g = n("GnwI"),
                h = n("/MKj"),
                v = n("kRBY"),
                k = n("oJmH"),
                b = n("xE3M"),
                f = n("u5aL"),
                S = n("8Ad5"),
                y = n("Ue10");
            n("zjB3");
            ! function(e) {
                e.DisplayedTerm = "term", e.AddTermInput = "add-term-input", e.EditTermInput = "edit-term-input", e.EditTermArea = "edit-term-area", e.AddTermButton = "add-term-button", e.EditTermButton = "edit-term-button", e.DelTermButton = "del-term-button", e.EditConfirmButton = "edit-confirm-button", e.EditCancelButton = "edit-cancel-button"
            }(a || (a = {})),
            function(e) {
                e.Banned = "banned", e.Permitted = "permitted"
            }(i || (i = {}));
            var A = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            editingIndex: null,
                            justSavedIndex: null,
                            editingIsModEditable: null,
                            terms: [],
                            justSaved: !1,
                            errorAddingTerm: !1,
                            errorAddingLabel: null
                        }, t.onCheckModEditableChange = function(e) {
                            t.setState({
                                editingIsModEditable: !e.target.checked
                            })
                        }, t.handleAdd = function() {
                            if (t.addInput.value.trim()) {
                                for (var e = 0, n = t.state.terms; e < n.length; e++) {
                                    if (n[e].phrases.join(" ") === t.addInput.value.trim()) return void t.setState({
                                        errorAddingTerm: !0,
                                        errorAddingLabel: Object(l.d)("Duplicate Term", "ChatTermsControl")
                                    })
                                }
                                var a = {
                                    phrases: [t.addInput.value.trim()],
                                    category: t.props.type,
                                    createdAt: null,
                                    updatedAt: null,
                                    expiresAt: null,
                                    isModEditable: t.props.channelID !== t.props.userID
                                };
                                t.props.onTermAdd(a, !0) && (t.addInput.value = ""), t.setState({
                                    justSavedIndex: 0,
                                    justSaved: !0
                                })
                            }
                        }, t.handleEdit = function(e) {
                            var n = e.currentTarget.closest("[data-index]").getAttribute("data-index");
                            n && t.setState({
                                editingIndex: +n
                            })
                        }, t.handleDelete = function(e) {
                            var n = e.currentTarget.closest("[data-index]").getAttribute("data-index");
                            if (n) {
                                +n == t.state.terms.length - 1 ? t.setState({
                                    justSavedIndex: +n - 1,
                                    justSaved: !0
                                }) : t.setState({
                                    justSavedIndex: +n,
                                    justSaved: !0
                                }), t.props.onTermDelete(t.state.terms[+n], !1);
                                var a = t.state.editingIndex;
                                null === a || +n === a ? a = null : a > +n && (a -= 1), a !== t.state.editingIndex && t.setState({
                                    editingIndex: a
                                })
                            }
                        }, t.saveAddInputRef = function(e) {
                            t.addInput = e
                        }, t.saveEditInputRef = function(e) {
                            t.editInput = e
                        }, t.handleAddKeyDown = function(e) {
                            e.keyCode === S.a.Enter && t.handleAdd(), t.state.errorAddingTerm && t.setState({
                                errorAddingTerm: !1
                            })
                        }, t.handleEditKeyDown = function(e) {
                            switch (e.keyCode) {
                                case S.a.Enter:
                                    t.confirmEdit();
                                    break;
                                case S.a.Esc:
                                    t.cancelEdit();
                                    break;
                                default:
                                    return
                            }
                        }, t.cancelEdit = function() {
                            t.setState({
                                editingIndex: null
                            })
                        }, t.clearLabels = function() {
                            (t.state.justSaved || t.state.errorAddingTerm) && t.setState({
                                justSaved: !1,
                                justSavedIndex: null,
                                errorAddingTerm: !1,
                                errorAddingLabel: null
                            })
                        }, t.confirmEdit = function() {
                            if (null !== t.state.editingIndex && t.editInput) {
                                var e = t.state.terms[t.state.editingIndex].isModEditable;
                                null !== t.state.editingIsModEditable && (e = t.state.editingIsModEditable);
                                var n = {
                                    isModEditable: e,
                                    category: t.props.type,
                                    phrases: [t.editInput.value],
                                    createdAt: null,
                                    updatedAt: null,
                                    expiresAt: null
                                };
                                t.props.onTermEdit(t.state.terms[t.state.editingIndex], n, e);
                                var a = t.state.terms;
                                a[t.state.editingIndex] = n, t.setState(function() {
                                    return {
                                        terms: a,
                                        editingIndex: -1,
                                        justSaved: !0,
                                        justSavedIndex: t.state.editingIndex
                                    }
                                })
                            }
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.componentWillReceiveProps = function(e) {
                        if (this.state.terms === e.terms) return null;
                        this.setState({
                            terms: e.terms
                        })
                    }, t.prototype.render = function() {
                        for (var e = [], t = 0; t < this.state.terms.length; t++) e.push(this.renderTerm(this.state.terms[t], t));
                        return o.createElement(y.Qa, {
                            fullWidth: !0
                        }, o.createElement("div", {
                            className: "chat-terms-control",
                            "data-a-target": "chat-terms-control"
                        }, o.createElement(y.Ya, {
                            display: y.X.Flex,
                            flexDirection: y.Aa.Row,
                            alignItems: y.f.Stretch,
                            fullWidth: !0,
                            flexWrap: y.Ba.NoWrap
                        }, o.createElement(y.Ya, {
                            flexGrow: 1
                        }, o.createElement(y.Ea, {
                            label: "",
                            error: this.state.errorAddingTerm,
                            errorMessage: this.state.errorAddingLabel || ""
                        }, o.createElement(y.Sa, {
                            "data-a-target": "add-term-input",
                            "data-test-selector": a.AddTermInput,
                            ariaLabel: Object(l.d)("Add term", "ChatTermsControl"),
                            refDelegate: this.saveAddInputRef,
                            type: y.Ua.Text,
                            placeholder: this.props.addPlaceholder,
                            onKeyDown: this.handleAddKeyDown,
                            error: this.state.errorAddingTerm
                        }))), o.createElement(y.Ya, {
                            flexShrink: 0,
                            margin: {
                                top: .5
                            }
                        }, o.createElement(y.z, {
                            onClick: this.handleAdd,
                            "data-a-target": "add-term",
                            "data-test-selector": a.AddTermButton
                        }, Object(l.d)("Add", "ChatTermsControl")))), o.createElement(y.Ya, {
                            className: "chat-terms"
                        }, e)))
                    }, t.prototype.renderTerm = function(e, t) {
                        if (t === this.state.editingIndex) return this.renderEditTermRow(e, t);
                        var n = null;
                        if (!0 == !e.isModEditable && this.props.type === i.Banned) n = o.createElement(y.Ya, {
                            alignItems: y.f.Center,
                            display: y.X.Flex,
                            margin: {
                                left: "auto"
                            },
                            fullHeight: !0
                        }, o.createElement(y.hb, {
                            label: Object(l.d)("private", "ChatTermsControl")
                        }));
                        else if (e.expiresAt) {
                            var r = Object(l.i)(new Date(e.expiresAt), {
                                style: "numeric"
                            });
                            n = o.createElement(y.Ya, {
                                margin: {
                                    right: 1
                                }
                            }, o.createElement(y.W, {
                                ellipsis: !0,
                                color: y.O.Alt2
                            }, " ", Object(l.d)("Expires {relativeTime}", {
                                relativeTime: r
                            }, "ChatTermsControl"), " "))
                        }
                        var s = null;
                        t === this.state.justSavedIndex && (s = o.createElement(y.Qa, {
                            position: y.kb.Absolute,
                            margin: {
                                left: 5
                            }
                        }, o.createElement("span", {
                            className: "chat-terms-control__saved"
                        }, o.createElement(y.i, {
                            delay: y.j.Long,
                            duration: y.k.Medium,
                            type: y.n.FadeOut,
                            enabled: !0,
                            onAnimationEnd: this.clearLabels
                        }, o.createElement(y.Ya, {
                            position: y.kb.Absolute,
                            attachRight: !0
                        }, Object(l.d)("Saved", "ChatTermsControl"))))));
                        var d = Object(l.d)("Edit", "ChatTermsControl"),
                            c = Object(l.d)("Delete", "ChatTermsControl");
                        return o.createElement(y.Qa, {
                            className: "chat-term-row",
                            key: t,
                            "data-index": t
                        }, o.createElement("div", {
                            className: "chat-terms-control__term-row",
                            "data-selectable": t,
                            "data-test-selector": a.EditTermArea
                        }, o.createElement(y.Ja, null, o.createElement(y.P, {
                            cols: 6
                        }, o.createElement(y.Ya, {
                            "data-test-selector": a.DisplayedTerm,
                            margin: {
                                right: 1
                            },
                            display: y.X.Flex,
                            alignItems: y.f.Center,
                            justifyContent: y.Xa.Between,
                            fullHeight: !0
                        }, o.createElement(y.W, {
                            ellipsis: !0
                        }, e.phrases.join(" ")))), o.createElement(y.P, {
                            cols: 4
                        }, o.createElement(y.Ya, {
                            alignItems: y.f.Center,
                            display: y.X.Flex,
                            flexWrap: y.Ba.NoWrap,
                            fullHeight: !0
                        }, n)), o.createElement(y.P, {
                            cols: 1
                        }, o.createElement(y.Zb, {
                            label: d
                        }, o.createElement(y.A, {
                            "data-a-target": "edit-term",
                            "data-test-selector": a.EditTermButton,
                            icon: y.ub.Edit,
                            ariaLabel: d,
                            onClick: this.handleEdit
                        }))), o.createElement(y.P, {
                            cols: 1
                        }, o.createElement(y.Zb, {
                            label: c
                        }, o.createElement(y.A, {
                            "data-a-target": "delete-term",
                            "data-test-selector": a.DelTermButton,
                            icon: y.ub.Trash,
                            ariaLabel: c,
                            onClick: this.handleDelete
                        })), s))))
                    }, t.prototype.renderEditTermRow = function(e, t) {
                        var n = Object(l.d)("Save", "ChatTermsControl"),
                            i = Object(l.d)("Cancel", "ChatTermsControl"),
                            r = this.renderEditBalloon(e, t);
                        return o.createElement(f.a, {
                            key: "clickout-item-" + t,
                            onClickOut: this.cancelEdit
                        }, o.createElement(y.Ya, {
                            key: "line-item-" + t,
                            className: "chat-term-row",
                            position: y.kb.Relative
                        }, o.createElement(y.Ya, {
                            key: t,
                            "data-index": t,
                            display: y.X.Flex,
                            flexDirection: y.Aa.Row,
                            flexWrap: y.Ba.NoWrap
                        }, o.createElement(y.Ya, {
                            flexGrow: 1
                        }, o.createElement(y.Sa, {
                            autoFocus: !0,
                            ariaLabel: Object(l.d)("Edit term", "ChatTermsControl"),
                            "data-a-target": "edit-term-input",
                            "data-test-selector": a.EditTermInput,
                            refDelegate: this.saveEditInputRef,
                            type: y.Ua.Text,
                            defaultValue: e.phrases.join(" "),
                            onKeyDown: this.handleEditKeyDown
                        })), o.createElement(y.Ya, {
                            flexShrink: 0
                        }, o.createElement(y.Zb, {
                            label: n
                        }, o.createElement(y.A, {
                            "data-a-target": "save-term-edit",
                            "data-test-selector": a.EditConfirmButton,
                            icon: y.ub.Check,
                            ariaLabel: n,
                            onClick: this.confirmEdit
                        })), o.createElement(y.Zb, {
                            label: i
                        }, o.createElement(y.A, {
                            "data-a-target": "cancel-term-edit",
                            "data-test-selector": a.EditCancelButton,
                            icon: y.ub.Close,
                            ariaLabel: i,
                            onClick: this.cancelEdit
                        })))), r))
                    }, t.prototype.renderEditBalloon = function(e, t) {
                        var n = null;
                        return e.expiresAt ? n = o.createElement(y.Ya, null, Object(l.d)("Save changes to make term always active", "ChatTermsControl")) : this.props.type === i.Banned && this.props.channelID === this.props.userID && (n = o.createElement(y.Ya, null, o.createElement(y.N, {
                            "data-test-selector": "isModEditableCheckbox",
                            id: "isModEditableCheckbox",
                            label: "Mark as Private",
                            defaultChecked: !e.isModEditable,
                            onChange: this.onCheckModEditableChange
                        }), o.createElement(y.W, {
                            color: y.O.Alt2,
                            fontSize: y.Ca.Size8
                        }, Object(l.d)("Private terms are not viewable to anyone except for yourself.", "ChatTermsControl")))), n ? o.createElement(y.u, {
                            key: "edit-balloon-" + t,
                            direction: y.v.Right,
                            size: y.w.Large,
                            show: !0
                        }, o.createElement(y.Ya, {
                            margin: 1
                        }, o.createElement(y.Fb, {
                            borderBottom: !0,
                            margin: {
                                bottom: .5
                            }
                        }, e.phrases.join(" ")), n)) : null
                    }, t
                }(o.Component),
                E = n("yR8l"),
                C = n("4l1H"),
                T = n("Temx"),
                M = n("kk6A"),
                N = n("5R7h"),
                O = (n("R17a"), function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.state = {
                            terms: []
                        }, n.addTerm = function(e, t) {
                            return r.__awaiter(n, void 0, void 0, function() {
                                var n, a = this;
                                return r.__generator(this, function(r) {
                                    switch (r.label) {
                                        case 0:
                                            return null === this.state.terms ? [2, !1] : this.props.type !== i.Banned ? [3, 2] : [4, this.props.addChannelBlockedTerm({
                                                variables: {
                                                    input: {
                                                        channelID: this.props.channelID,
                                                        phrases: e.phrases,
                                                        isModEditable: e.isModEditable
                                                    }
                                                }
                                            })];
                                        case 1:
                                            return r.sent(), [3, 4];
                                        case 2:
                                            return this.props.type !== i.Permitted ? [3, 4] : [4, this.props.addChannelPermittedTerm({
                                                variables: {
                                                    input: {
                                                        channelID: this.props.channelID,
                                                        phrases: e.phrases
                                                    }
                                                }
                                            })];
                                        case 3:
                                            r.sent(), r.label = 4;
                                        case 4:
                                            return n = this.state.terms, !0 === t && n.unshift(e), this.setState(function() {
                                                return {
                                                    terms: a.state.terms
                                                }
                                            }), [2, !0]
                                    }
                                })
                            })
                        }, n.deleteTerm = function(e, t) {
                            return r.__awaiter(n, void 0, void 0, function() {
                                return r.__generator(this, function(n) {
                                    switch (n.label) {
                                        case 0:
                                            return null === this.state.terms ? [2, !1] : (!1 === t && this.setState(function(t) {
                                                return {
                                                    terms: t.terms.filter(function(t) {
                                                        return t.phrases.join(" ") !== e.phrases.join(" ")
                                                    })
                                                }
                                            }), this.props.type !== i.Banned ? [3, 2] : [4, this.props.deleteChannelBlockedTerm({
                                                variables: {
                                                    input: {
                                                        channelID: this.props.channelID,
                                                        phrases: e.phrases
                                                    }
                                                }
                                            })]);
                                        case 1:
                                            return n.sent(), [3, 4];
                                        case 2:
                                            return this.props.type !== i.Permitted ? [3, 4] : [4, this.props.deleteChannelPermittedTerm({
                                                variables: {
                                                    input: {
                                                        channelID: this.props.channelID,
                                                        phrases: e.phrases
                                                    }
                                                }
                                            })];
                                        case 3:
                                            n.sent(), n.label = 4;
                                        case 4:
                                            return [2, !0]
                                    }
                                })
                            })
                        }, n.editTerm = function(e, t, a) {
                            return r.__awaiter(n, void 0, void 0, function() {
                                var n;
                                return r.__generator(this, function(i) {
                                    switch (i.label) {
                                        case 0:
                                            return [4, this.deleteTerm(e, !0)];
                                        case 1:
                                            return i.sent(), t.isModEditable = a, [4, this.addTerm(t, !1)];
                                        case 2:
                                            return i.sent(), n = this.state.terms, this.setState({
                                                terms: n
                                            }), [2]
                                    }
                                })
                            })
                        }, n
                    }
                    return r.__extends(t, e), t.prototype.componentDidMount = function() {
                        if (this.state.terms === []) return null;
                        var e = [];
                        this.props.terms.forEach(function(t) {
                            e.push(t)
                        }), this.setState({
                            terms: e
                        })
                    }, t.prototype.render = function() {
                        if (!this.state.terms) return null;
                        var e = null;
                        return this.props.type === i.Banned && (e = o.createElement(y.W, {
                            color: y.O.Alt2,
                            fontSize: y.Ca.Size8
                        }, Object(l.d)("Tip: Some terms may be marked as Private and only visible to the channel owner.", "ChatTermsSetting"))), o.createElement(y.Ya, {
                            margin: {
                                bottom: 2
                            }
                        }, o.createElement("div", {
                            className: "chat-terms-setting"
                        }, o.createElement(A, {
                            channelID: this.props.channelID,
                            userID: this.props.userID,
                            addPlaceholder: this.props.addPlaceholderMsg,
                            terms: this.state.terms,
                            onTermAdd: this.addTerm,
                            onTermEdit: this.editTerm,
                            onTermDelete: this.deleteTerm,
                            type: this.props.type
                        })), o.createElement(y.Ya, {
                            margin: {
                                top: .5
                            }
                        }, e))
                    }, t = r.__decorate([Object(E.a)(C, {
                        name: "addChannelBlockedTerm"
                    }), Object(E.a)(T, {
                        name: "addChannelPermittedTerm"
                    }), Object(E.a)(M, {
                        name: "deleteChannelBlockedTerm"
                    }), Object(E.a)(N, {
                        name: "deleteChannelPermittedTerm"
                    })], t)
                }(o.Component)),
                L = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.handleOptOutChange = function(e) {
                            var n = e.currentTarget;
                            t.props.onUpdateChatSettings({
                                variables: {
                                    input: {
                                        channelID: t.props.data.user.id,
                                        isOptedOutOfGlobalBannedWordsList: n.checked
                                    }
                                }
                            })
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        return !this.props.data || this.props.data.loading || this.props.data.error || !this.props.data.user ? o.createElement(y.Ya, null) : o.createElement(y.Fb, {
                            padding: {
                                top: 2
                            }
                        }, o.createElement(y.Ja, null, o.createElement(y.P, {
                            cols: 2
                        }, o.createElement(y.W, {
                            color: y.O.Alt2,
                            type: y.Wb.Strong
                        }, Object(l.d)("Blocked and Permitted Terms", "AutoModTermsTitle"))), o.createElement(y.P, {
                            cols: 5
                        }, o.createElement(y.W, {
                            color: y.O.Alt2,
                            type: y.Wb.Strong
                        }, Object(l.d)("Blocked Terms or Phrases", "AutoModBlockedTermsTitle")), o.createElement(y.W, {
                            color: y.O.Alt2
                        }, Object(l.d)("Messages containing these terms or phrases will be blocked from chat. Terms are automatically added when a mod denies a caught message.", "AutoModBlockedTermsDescription")), o.createElement(O, {
                            channelID: this.props.data.user.id,
                            userID: this.props.data.currentUser.id,
                            type: i.Banned,
                            addPlaceholderMsg: Object(l.d)("Add new blocked term or phrase", "AutoModBlockedTermAdditionPlaceHolder"),
                            terms: this.props.data.user.blockedTerms
                        }), o.createElement(y.W, {
                            color: y.O.Alt2,
                            type: y.Wb.Strong
                        }, Object(l.d)("Permitted Terms or Phrases", "AutoModPermittedTermsTitle")), o.createElement(y.W, {
                            color: y.O.Alt2
                        }, Object(l.d)("Messages containing these terms, and no other blocked terms, will not be caught by AutoMod. Terms are automatically added when a mod allows a message.", "AutoModPermittedTermsDescription")), o.createElement(O, {
                            channelID: this.props.data.user.id,
                            userID: this.props.data.currentUser.id,
                            type: i.Permitted,
                            addPlaceholderMsg: Object(l.d)("Add new permitted term or phrase", "AutoModPermittedTermsAdditionPlaceholder"),
                            terms: this.props.data.user.permittedTerms
                        }), o.createElement(y.N, {
                            defaultChecked: this.props.data.user.chatSettings.isOptedOutOfGlobalBannedWordsList,
                            label: Object(l.d)("Opt out of commonly blocked terms", "AutoModSettings"),
                            onChange: this.handleOptOutChange
                        }), o.createElement(y.W, {
                            color: y.O.Alt2,
                            fontSize: y.Ca.Size8
                        }, Object(l.d)("AutoMod level 0 automatically holds messages containing commonly blocked terms for mods to review. If you enable this feature AutoMod won't hold these messages.", "AutoModSettings")))))
                    }, t
                }(o.Component),
                I = n("Z6v5"),
                F = n("ah12");
            var x = Object(d.compose)(Object(h.connect)(function(e) {
                    return {
                        isLoggedIn: Object(v.f)(e)
                    }
                }), Object(E.a)(I, {
                    options: function(e) {
                        return {
                            variables: {
                                channelLogin: e.channelLogin
                            },
                            fetchPolicy: "cache-and-network"
                        }
                    }
                }), Object(E.a)(F, {
                    name: "onUpdateChatSettings"
                }), Object(g.b)("ChatTermsContainer"))(L),
                D = n("DMoW"),
                j = n("Ww25"),
                P = n("l/RX"),
                w = n("Jpqj"),
                _ = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            canAccess: !!t.props.data.user && !!t.props.data.user.modLogsRoleAccess && t.props.data.user.modLogsRoleAccess.accessLevel === D.C.WRITE,
                            error: !1,
                            enabled: !1
                        }, t.onChange = function() {
                            return r.__awaiter(t, void 0, void 0, function() {
                                return r.__generator(this, function(e) {
                                    switch (e.label) {
                                        case 0:
                                            return this.props.data.currentUser && this.props.data.currentUser.id ? this.state.canAccess ? [4, this.toggleAccessOff()] : [3, 2] : [2];
                                        case 1:
                                            return e.sent(), [3, 4];
                                        case 2:
                                            return [4, this.toggleAccessOn()];
                                        case 3:
                                            e.sent(), e.label = 4;
                                        case 4:
                                            return [2]
                                    }
                                })
                            })
                        }, t.toggleAccessOff = function() {
                            if (t.props.data.currentUser && t.props.data.currentUser.id && t.props.setModLogsAccess) return t.props.setModLogsAccess({
                                variables: {
                                    input: {
                                        channelID: t.props.data.currentUser.id,
                                        channelRole: D.k.MODERATOR,
                                        accessLevel: D.C.NONE
                                    }
                                }
                            }).then(function() {
                                t.setState({
                                    canAccess: !1,
                                    error: !1
                                })
                            }).catch(function() {
                                t.setState({
                                    error: !0
                                })
                            })
                        }, t.toggleAccessOn = function() {
                            if (t.props.data.currentUser && t.props.data.currentUser.id) return t.props.setModLogsAccess({
                                variables: {
                                    input: {
                                        channelID: t.props.data.currentUser.id,
                                        channelRole: D.k.MODERATOR,
                                        accessLevel: D.C.WRITE
                                    }
                                }
                            }).then(function() {
                                t.setState({
                                    canAccess: !0,
                                    error: !1
                                })
                            }).catch(function() {
                                t.setState({
                                    error: !0
                                })
                            })
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.componentWillMount = function() {
                        var e = l.b.get("viewer_card_mod_logs", !1);
                        this.setState({
                            enabled: e
                        })
                    }, t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive()
                    }, t.prototype.componentWillReceiveProps = function(e) {
                        !e.data.loading && this.props.data.loading && e.data.user && e.data.user.modLogsRoleAccess && this.setState({
                            canAccess: e.data.user.modLogsRoleAccess.accessLevel === D.C.WRITE,
                            error: !!e.data.error
                        })
                    }, t.prototype.render = function() {
                        return this.props.data.loading || !this.state.enabled ? null : this.props.data.currentUser && this.props.data.user && this.props.data.currentUser.id !== this.props.data.user.id ? null : o.createElement(y.Fb, {
                            borderTop: !0,
                            margin: {
                                top: 2
                            },
                            padding: {
                                top: 3
                            }
                        }, o.createElement(y.Ja, null, o.createElement(y.P, {
                            cols: 2
                        }, o.createElement(y.W, {
                            color: y.O.Alt2,
                            type: y.Wb.Strong
                        }, Object(l.d)("Chat Logs for Mods", "ModLogsAccessToggle")), o.createElement(y.Ya, {
                            display: y.X.Inline,
                            padding: {
                                x: 1
                            }
                        }, o.createElement(y.hb, {
                            label: Object(l.d)("private", "ModLogsAccessToggle")
                        }))), o.createElement(y.P, {
                            cols: 5
                        }, o.createElement(y.Yb, {
                            checked: this.state.canAccess,
                            error: this.state.error,
                            disabled: this.props.data.loading || !!this.props.data.error,
                            onChange: this.onChange,
                            "data-test-selector": "dashboard-moderation-chat-logs-access-toggle"
                        }), o.createElement(j.a, {
                            text: Object(l.d)("Allows your moderators to view chat and ban history for users in your channel, and view and add comments on users.", "ModLogsAccessToggle")
                        }), this.state.error && o.createElement(y.W, {
                            color: y.O.Error,
                            "data-test-selector": "dashboard-moderation-chat-logs-access-error-message"
                        }, Object(l.d)("Sorry, something went wrong. Please try again later.", "ModLogsAccessToggle")))))
                    }, t
                }(o.Component),
                W = Object(d.compose)(Object(g.b)("ModLogsAccessToggle"), Object(E.a)(w, {
                    options: function(e) {
                        return {
                            variables: {
                                channelLogin: e.channelLogin
                            }
                        }
                    }
                }), Object(E.a)(P, {
                    name: "setModLogsAccess"
                }))(_),
                B = (n("gBSZ"), function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return r.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        return o.createElement(y.Fb, {
                            className: "auto-mod-wrapper",
                            padding: {
                                y: 3
                            }
                        }, o.createElement(b.a, {
                            channelLogin: this.props.channelLogin
                        }), o.createElement(y.Fb, {
                            borderTop: !0,
                            padding: {
                                top: .5
                            },
                            margin: {
                                y: 1
                            }
                        }), o.createElement(x, {
                            channelLogin: this.props.channelLogin
                        }), o.createElement(W, {
                            channelLogin: this.props.channelLogin
                        }))
                    }, t
                }(o.Component)),
                R = Object(k.compose)(Object(g.b)("AutoModWrapper"))(B);
            var V = Object(h.connect)(function(e) {
                    return {
                        isLoggedIn: Object(v.f)(e)
                    }
                })(R),
                Y = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        return o.createElement(c.b, null, o.createElement(y.Ya, {
                            padding: 2,
                            position: y.kb.Relative
                        }, o.createElement(y.W, {
                            type: y.Wb.H3
                        }, Object(l.d)("Moderation Settings", "AutoModPage")), o.createElement(V, {
                            channelLogin: this.props.match.params.channelName
                        })))
                    }, t
                }(o.Component),
                U = Object(d.compose)(s.a, Object(g.b)("AutoModPage", {
                    autoReportInteractive: !0,
                    destination: m.a.DashboardSettingsAutoMod
                }), Object(u.a)({
                    location: p.PageviewLocation.DashboardSettingsAutoMod
                }))(Y);
            n.d(t, "AutoModPageComponent", function() {
                return Y
            }), n.d(t, "AutoModPage", function() {
                return U
            })
        },
        Z6v5: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "ChatTermsContainer"
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
                        }, {
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
                                        value: "blockedTerms"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "phrases"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "createdAt"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "updatedAt"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "expiresAt"
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
                                                value: "isModEditable"
                                            },
                                            arguments: [],
                                            directives: []
                                        }]
                                    }
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "permittedTerms"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "phrases"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "createdAt"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "updatedAt"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "expiresAt"
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
                                                value: "isModEditable"
                                            },
                                            arguments: [],
                                            directives: []
                                        }]
                                    }
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "chatSettings"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "isOptedOutOfGlobalBannedWordsList"
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
                                                value: "isModerator"
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
                    end: 364
                }
            };
            n.loc.source = {
                body: "query ChatTermsContainer($channelLogin: String!) {\ncurrentUser{\nid\nroles {\nisStaff\nisSiteAdmin\n}\n}\nuser(login: $channelLogin) {\nid\nblockedTerms {\nphrases\ncreatedAt\nupdatedAt\nexpiresAt\ncategory\nisModEditable\n}\npermittedTerms {\nphrases\ncreatedAt\nupdatedAt\nexpiresAt\ncategory\nisModEditable\n}\nchatSettings {\nisOptedOutOfGlobalBannedWordsList\n}\nself {\nisModerator\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        ah12: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "mutation",
                    name: {
                        kind: "Name",
                        value: "UpdateChatSettings_UpdateChatSettingsInput"
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
                                    value: "UpdateChatSettingsInput"
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
                                value: "updateChatSettings"
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
                                        value: "chatSettings"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "isOptedOutOfGlobalBannedWordsList"
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
                    end: 178
                }
            };
            n.loc.source = {
                body: "mutation UpdateChatSettings_UpdateChatSettingsInput($input: UpdateChatSettingsInput!) {\nupdateChatSettings(input: $input) {\nchatSettings {\nisOptedOutOfGlobalBannedWordsList\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        gBSZ: function(e, t, n) {},
        hxCz: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "mutation",
                    name: {
                        kind: "Name",
                        value: "UpdateAutoModProperties"
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
                                    value: "UpdateAutoModPropertiesInput"
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
                                value: "updateAutoModProperties"
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
                                        value: "autoModProperties"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "aggressiveLevel"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "identityLevel"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "profanityLevel"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "sexualLevel"
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
                    end: 197
                }
            };
            n.loc.source = {
                body: "mutation UpdateAutoModProperties($input: UpdateAutoModPropertiesInput!) {\nupdateAutoModProperties(input: $input) {\nautoModProperties {\naggressiveLevel\nidentityLevel\nprofanityLevel\nsexualLevel\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        kk6A: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "mutation",
                    name: {
                        kind: "Name",
                        value: "Chat_DeleteChannelBlockedTerm"
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
                                    value: "DeleteChannelBlockedTermInput"
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
                                value: "deleteChannelBlockedTerm"
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
                                        value: "deletedAt"
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
                body: "mutation Chat_DeleteChannelBlockedTerm($input: DeleteChannelBlockedTermInput!) {\ndeleteChannelBlockedTerm(input: $input) {\ndeletedAt\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        "l/RX": function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "mutation",
                    name: {
                        kind: "Name",
                        value: "setModLogsAccess"
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
                                    value: "SetModLogsAccessInput"
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
                                value: "setModLogsAccess"
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
                                        value: "modLogsAccess"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "channelRole"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "accessLevel"
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
                    end: 139
                }
            };
            n.loc.source = {
                body: "mutation setModLogsAccess($input: SetModLogsAccessInput!) {\nsetModLogsAccess(input: $input) {\nmodLogsAccess {\nchannelRole\naccessLevel\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        xE3M: function(e, t, n) {
            "use strict";
            var a = n("/MKj"),
                i = n("fvjX"),
                r = n("yR8l"),
                o = n("kRBY"),
                s = n("GnwI"),
                d = n("mrSG"),
                l = n("q1tI"),
                c = n("/7QA"),
                u = n("u5aL"),
                m = n("Ue10"),
                p = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            menuItemsVisible: !1
                        }, t.menuItemClicked = function(e) {
                            var n = Number(e.currentTarget.dataset.newLevel);
                            t.props.onLevelChange(t.props.category, n), t.setState({
                                menuItemsVisible: !t.state.menuItemsVisible
                            })
                        }, t.toggleCategoryMenu = function() {
                            t.setState({
                                menuItemsVisible: !t.state.menuItemsVisible
                            })
                        }, t.hideCategoryMenu = function() {
                            t.setState({
                                menuItemsVisible: !1
                            })
                        }, t
                    }
                    return d.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        return l.createElement(m.P, {
                            cols: 6
                        }, l.createElement(u.a, {
                            onClickOut: this.hideCategoryMenu
                        }, l.createElement(m.Ya, {
                            padding: {
                                top: .5
                            }
                        }, l.createElement(m.z, {
                            dropdown: !0,
                            type: m.F.Hollow,
                            onClick: this.toggleCategoryMenu
                        }, this.menuOption(this.props.categoryLevel)), this.menuItems())))
                    }, t.prototype.menuItems = function() {
                        return this.state.menuItemsVisible ? l.createElement(m.Fb, {
                            border: !0,
                            background: m.r.Alt,
                            position: m.kb.Absolute,
                            zIndex: m.jc.Above
                        }, this.renderMenuItem(0), this.renderMenuItem(6), this.renderMenuItem(5), this.renderMenuItem(4), this.renderMenuItem(3)) : ""
                    }, t.prototype.renderMenuItem = function(e) {
                        return l.createElement(m.Va, {
                            type: m.Wa.Alpha,
                            selected: this.props.categoryLevel === e,
                            "data-new-level": e,
                            onClick: this.menuItemClicked
                        }, l.createElement(m.Ya, {
                            padding: {
                                y: .5,
                                x: 1
                            }
                        }, this.menuOption(e)))
                    }, t.prototype.getNumShields = function(e) {
                        switch (e) {
                            case 6:
                                return 1;
                            case 5:
                                return 2;
                            case 4:
                                return 3;
                            case 3:
                            case 2:
                                return 4;
                            default:
                                return 0
                        }
                    }, t.prototype.menuOption = function(e) {
                        for (var t = [Object(c.d)("No filtering", "AutoModSettings"), Object(c.d)("Less filtering", "AutoModSettings"), Object(c.d)("Some filtering", "AutoModSettings"), Object(c.d)("More filtering", "AutoModSettings"), Object(c.d)("Most filtering", "AutoModSettings")], n = this.getNumShields(e), a = [], i = 0; i < n; i++) a.push(l.createElement(m.Ya, {
                            key: "shield" + i,
                            display: m.X.InlineFlex,
                            padding: {
                                right: .5
                            }
                        }, l.createElement(m.tb, {
                            asset: m.ub.Automod,
                            height: 13,
                            width: 13,
                            type: m.vb.Alt2
                        })));
                        var r = t[n];
                        return l.createElement(m.Ya, {
                            display: m.X.Flex,
                            padding: .5
                        }, a, l.createElement(m.W, {
                            align: m.gc.Middle,
                            color: m.O.Alt2
                        }, r))
                    }, t = d.__decorate([Object(s.b)("AutomodCategoryDisplay")], t)
                }(l.Component),
                g = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return d.__extends(t, e), t.prototype.render = function() {
                        return l.createElement(m.P, {
                            cols: 6
                        }, l.createElement(m.Ya, {
                            padding: {
                                bottom: 1
                            }
                        }, l.createElement("strong", null, this.props.category), l.createElement(m.W, {
                            color: m.O.Alt2,
                            type: m.Wb.P
                        }, this.props.description)))
                    }, t
                }(l.Component),
                h = "automod-onboarding-closed",
                v = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            onboardingVisible: !1
                        }, t.onCloseOnboarding = function() {
                            c.m.set(h, !0), t.setState({
                                onboardingVisible: !1
                            })
                        }, t
                    }
                    return d.__extends(t, e), t.prototype.componentDidMount = function() {
                        var e = c.m.getOptional(h);
                        null === e ? this.setState({
                            onboardingVisible: !0
                        }) : this.setState({
                            onboardingVisible: !e
                        })
                    }, t.prototype.render = function() {
                        return this.state.onboardingVisible ? l.createElement(m.Ja, null, l.createElement(m.P, {
                            cols: 8
                        }, l.createElement(m.Fb, {
                            position: m.kb.Relative,
                            border: !0,
                            color: m.O.Alt2,
                            padding: 2
                        }, l.createElement(m.W, {
                            type: m.Wb.H4,
                            color: m.O.Link,
                            bold: !0
                        }, Object(c.d)("AutoMod Tip", "AutoModSettings")), l.createElement(m.Ya, {
                            padding: 1,
                            position: m.kb.Absolute,
                            attachTop: !0,
                            attachRight: !0
                        }, l.createElement(m.z, {
                            type: m.F.Text,
                            icon: m.ub.Close,
                            onClick: this.onCloseOnboarding,
                            "data-test-selector": "automod-tip-dismiss-button"
                        })), l.createElement(m.W, {
                            color: m.O.Alt2,
                            type: m.Wb.Span
                        }, Object(c.d)("Did you know AutoMod catches misspelled words and evasion? N!ce try, pe0ple wh0 t@lk lik3 th!s.", "AutoModSettings"))))) : ""
                    }, t
                }(l.Component),
                k = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.handleSliderMove = function(e) {
                            var n = Number(e.currentTarget.value);
                            t.props.onLevelChange(n)
                        }, t
                    }
                    return d.__extends(t, e), t.prototype.render = function() {
                        var e = [Object(c.d)("Only commonly blocked terms", "AutoModSettings"), Object(c.d)("A Little Moderation", "AutoModSettings"), Object(c.d)("Some Moderation", "AutoModSettings"), Object(c.d)("More Moderation", "AutoModSettings"), Object(c.d)("A Lot of Moderation", "AutoModSettings")],
                            t = this.props.level,
                            n = e[t],
                            a = Object(c.d)("Level {lvl,number}", {
                                lvl: t
                            }, "AutoModSettings");
                        return l.createElement(m.Fb, {
                            borderLeft: !0,
                            borderRight: !0,
                            padding: {
                                top: 1,
                                x: 2
                            }
                        }, l.createElement(m.Ya, {
                            padding: {
                                bottom: .5
                            }
                        }, l.createElement(m.W, {
                            color: m.O.Alt2,
                            type: m.Wb.P
                        }, Object(c.d)("Your AutoMod setting:", "AutoModSettingsSlider"))), l.createElement(m.rb, {
                            min: 0,
                            max: 4,
                            step: 1,
                            value: String(t),
                            onChange: this.handleSliderMove,
                            "data-test-selector": "auto-mod-slider"
                        }), l.createElement(m.Ya, {
                            display: m.X.Flex
                        }, l.createElement(m.Ya, {
                            padding: {
                                right: .5
                            }
                        }, a), l.createElement(m.W, {
                            color: m.O.Alt2,
                            type: m.Wb.Strong
                        }, n)), l.createElement(m.Fb, {
                            background: m.r.Alt2,
                            padding: 1,
                            className: "auto-mod-wrapper__carat",
                            position: m.kb.Relative
                        }))
                    }, t
                }(l.Component),
                b = "slider-blank-state-container",
                f = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            isCustom: !1,
                            initialIsCustom: !1,
                            submissionState: m.E.Default,
                            cancelDisabled: !0,
                            isUnsetInBackend: !0,
                            isDataLoaded: !1
                        }, t.levelToIdentity = [0, 5, 5, 4, 4], t.levelToSex = [0, 0, 5, 4, 4], t.levelToAggro = [0, 0, 4, 4, 2], t.levelToProfanity = [0, 0, 0, 0, 4], t.recentSuccessfulMutation = 0, t.showAutoModCategories = function() {
                            var e = [t.levelToAggro[1], t.levelToIdentity[1], t.levelToProfanity[1], t.levelToSex[1]];
                            t.setState({
                                level: 1,
                                categories: e,
                                isCustom: !1,
                                cancelDisabled: !1
                            })
                        }, t.handleLevelChange = function(e) {
                            var n = [t.levelToAggro[e], t.levelToIdentity[e], t.levelToProfanity[e], t.levelToSex[e]];
                            t.setState({
                                level: e,
                                categories: n,
                                cancelDisabled: !1
                            })
                        }, t.updateAutoModProperties = function() {
                            t.state.categories && t.props.data.user && (t.setState({
                                submissionState: m.E.Loading
                            }), t.props.onUpdateAutoModProperties({
                                variables: {
                                    input: {
                                        channelID: t.props.data.user.id,
                                        aggressiveLevel: t.state.categories[0],
                                        identityLevel: t.state.categories[1],
                                        profanityLevel: t.state.categories[2],
                                        sexualLevel: t.state.categories[3]
                                    }
                                }
                            }).then(function() {
                                t.handleSuccessfulMutation()
                            }))
                        }, t.resetAutoModProperties = function() {
                            t.setState({
                                categories: t.state.initialCategories,
                                isCustom: t.state.initialIsCustom,
                                submissionState: m.E.Default,
                                level: t.state.initialLevel,
                                cancelDisabled: !0
                            })
                        }, t.handleCategoryLevelChange = function(e, n) {
                            if (t.state.categories) {
                                var a = t.state.categories.slice();
                                a[e] = n, t.setState({
                                    isCustom: !0,
                                    categories: a,
                                    cancelDisabled: !1
                                })
                            }
                        }, t.handleSuccessfulMutation = function() {
                            t.setState({
                                submissionState: m.E.Success,
                                cancelDisabled: !0,
                                initialCategories: t.state.categories,
                                initialLevel: t.state.level
                            }), clearTimeout(t.recentSuccessfulMutation), t.recentSuccessfulMutation = setTimeout(t.handleSuccessfulMutationExpired, 3e3)
                        }, t.handleSuccessfulMutationExpired = function() {
                            t.setState({
                                submissionState: m.E.Default
                            })
                        }, t.revertToSlider = function() {
                            var e = [t.levelToAggro[1], t.levelToIdentity[1], t.levelToProfanity[1], t.levelToSex[1]];
                            t.setState({
                                isCustom: !1,
                                level: 1,
                                categories: e,
                                cancelDisabled: !1
                            })
                        }, t.renderSlider = function(e) {
                            return e ? l.createElement(m.Fb, {
                                borderLeft: !0,
                                borderRight: !0,
                                padding: 2,
                                "data-test-selector": b
                            }, l.createElement("img", {
                                src: "https://s.jtvnw.net/jtv_user_pictures/hosted_images/automod_onboarding.gif"
                            }), l.createElement(m.Fb, null, l.createElement(m.Fb, {
                                padding: {
                                    top: 2
                                },
                                textAlign: m.Sb.Center
                            }, Object(c.d)("Your current AutoMod level: 0", "AutoModSettings")), l.createElement(m.Fb, {
                                margin: {
                                    x: 2
                                },
                                padding: {
                                    y: 1,
                                    x: 5
                                },
                                textAlign: m.Sb.Center
                            }, l.createElement(m.z, {
                                fullWidth: !0,
                                onClick: t.showAutoModCategories,
                                state: m.E.Default
                            }, Object(c.d)("Choose level", "AutoModSettings"))))) : t.state.isCustom || void 0 === t.state.level ? l.createElement(m.Fb, {
                                borderLeft: !0,
                                borderRight: !0,
                                padding: {
                                    y: 1,
                                    x: 2
                                }
                            }, l.createElement(m.Ja, {
                                gutterSize: m.Ka.Small
                            }, l.createElement(m.P, {
                                cols: 6
                            }, l.createElement(m.Ya, {
                                display: m.X.Flex,
                                fullHeight: !0,
                                alignItems: m.f.Center
                            }, l.createElement(m.W, {
                                color: m.O.Alt2,
                                type: m.Wb.Span
                            }, Object(c.d)("Your AutoMod setting:", "AutoModSettings")), l.createElement(m.Ya, {
                                padding: {
                                    left: .5
                                },
                                display: m.X.InlineFlex
                            }, l.createElement(m.W, {
                                color: m.O.Alt2,
                                type: m.Wb.Strong
                            }, Object(c.d)("Custom", "AutoModSettingsValue"))))), l.createElement(m.P, {
                                cols: 5
                            }, l.createElement(m.z, {
                                type: m.F.Hollow,
                                onClick: t.revertToSlider
                            }, Object(c.d)("Revert to defaults", "AutoModSettings"))))) : l.createElement(k, {
                                level: t.state.level.valueOf(),
                                onLevelChange: t.handleLevelChange
                            })
                        }, t
                    }
                    return d.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive()
                    }, t.prototype.componentWillReceiveProps = function(e) {
                        e.data && !e.data.loading && !e.data.error && e.data.user && (this.state.isDataLoaded || (this.hasAutoModProperties(e) ? this.initializeStateFromBackend(e) : this.setState({
                            isDataLoaded: !0
                        })))
                    }, t.prototype.render = function() {
                        if (!this.props.data || this.props.data.loading || this.props.data.error || null === this.props.data.user) return l.createElement(m.Fb, {
                            "data-test-selector": "automod-placeholder-container"
                        });
                        if (!this.hasAutoModDashboardAccess()) return l.createElement(m.Fb, {
                            margin: {
                                top: 2
                            },
                            color: m.O.Alt2,
                            textAlign: m.Sb.Center,
                            "data-test-selector": "automod-placeholder-container"
                        }, l.createElement(m.W, {
                            type: m.Wb.H3,
                            italic: !0
                        }, Object(c.d)("You do not have permission to access this dashboard.", "AutoModSettings")));
                        var e = this.isBlankState();
                        return l.createElement(m.Ya, null, l.createElement(m.Fb, {
                            margin: {
                                bottom: 2
                            }
                        }, l.createElement(v, null)), l.createElement(m.Ja, null, l.createElement(m.P, {
                            cols: 2
                        }, l.createElement(m.W, {
                            color: m.O.Alt2,
                            type: m.Wb.Strong
                        }, Object(c.d)("AutoMod Rulesets", "AutoModSettings"))), l.createElement(m.P, {
                            cols: 5
                        }, this.AutomodTableHeader(), this.renderSlider(e), this.AutomodCategories(e), this.AutomodTableFooter(e))))
                    }, t.prototype.isBlankState = function() {
                        return !this.state.categories && !this.state.level
                    }, t.prototype.AutomodTableFooter = function(e) {
                        return e ? l.createElement(m.Fb, {
                            border: !0,
                            padding: 2,
                            background: m.r.Alt2
                        }, l.createElement(m.Ja, null, l.createElement(m.P, {
                            cols: 7
                        }, Object(c.d)("You can adjust how much moderation you'd like for your channel.", "AutoModSettings")), l.createElement(m.P, {
                            cols: 5
                        }, l.createElement(m.Ya, {
                            display: m.X.Flex,
                            fullHeight: !0,
                            flexDirection: m.Aa.Column,
                            justifyContent: m.Xa.Center,
                            alignItems: m.f.End
                        }, l.createElement(m.z, {
                            onClick: this.showAutoModCategories,
                            type: m.F.Hollow
                        }, Object(c.d)("See how rulesets work", "AutoModSettings")))))) : l.createElement(m.Ya, null, l.createElement(m.Fb, {
                            border: !0,
                            padding: {
                                y: 1,
                                x: 2
                            },
                            background: m.r.Alt2
                        }, l.createElement("a", {
                            href: "https://help.twitch.tv/customer/portal/articles/2662186-how-to-use-automod",
                            target: "_blank"
                        }, Object(c.d)("Learn more in our help page", "AutoModSettings"))), l.createElement(m.Ya, {
                            display: m.X.Flex,
                            padding: {
                                y: 1
                            },
                            margin: {
                                top: .5
                            }
                        }, l.createElement(m.Ya, {
                            padding: {
                                right: .5
                            }
                        }, l.createElement(m.z, {
                            onClick: this.updateAutoModProperties,
                            state: this.state.submissionState
                        }, Object(c.d)("Save", "AutoModSettings"))), l.createElement(m.z, {
                            onClick: this.resetAutoModProperties,
                            type: m.F.Text,
                            disabled: this.state.cancelDisabled
                        }, Object(c.d)("Cancel", "AutoModSettings"))))
                    }, t.prototype.AutomodCategories = function(e) {
                        if (!e && 0 !== this.state.level && this.state.categories) {
                            var t = Object(c.d)("Identity language", "AutoModSettings"),
                                n = Object(c.d)("Referring to race, religion, gender, orientation, disability, or similar", "AutoModSettings"),
                                a = Object(c.d)("Sexually Explicit Language", "AutoModSettings"),
                                i = Object(c.d)("Referring to sexual acts, sexual content, and body parts", "AutoModSettings"),
                                r = Object(c.d)("Aggressive language", "AutoModSettings"),
                                o = Object(c.d)("Hostility towards other people, often associated with bullying", "AutoModSettings"),
                                s = Object(c.d)("Profanity", "AutoModSettings"),
                                d = Object(c.d)("Expletives, curse words, things you wouldn’t say to grandma", "AutoModSettings");
                            return l.createElement(m.Fb, {
                                borderLeft: !0,
                                borderRight: !0,
                                padding: 2,
                                background: m.r.Alt2,
                                "data-test-selector": "automod-categories-container"
                            }, l.createElement(m.Ja, {
                                gutterSize: m.Ka.Small
                            }, l.createElement(g, {
                                category: t,
                                description: n
                            }), l.createElement(p, {
                                category: 1,
                                categoryLevel: this.state.categories[1],
                                onLevelChange: this.handleCategoryLevelChange
                            }), l.createElement(g, {
                                category: a,
                                description: i
                            }), l.createElement(p, {
                                category: 3,
                                categoryLevel: this.state.categories[3],
                                onLevelChange: this.handleCategoryLevelChange
                            }), l.createElement(g, {
                                category: r,
                                description: o
                            }), l.createElement(p, {
                                category: 0,
                                categoryLevel: this.state.categories[0],
                                onLevelChange: this.handleCategoryLevelChange
                            }), l.createElement(g, {
                                category: s,
                                description: d
                            }), l.createElement(p, {
                                category: 2,
                                categoryLevel: this.state.categories[2],
                                onLevelChange: this.handleCategoryLevelChange
                            })))
                        }
                    }, t.prototype.AutomodTableHeader = function() {
                        var e = Object(c.d)("AutoMod", "AutoModSettings"),
                            t = Object(c.d)("Automatically hold risky messages for moderators to review.", "AutoModSettings");
                        return l.createElement(m.G, {
                            border: !0,
                            row: !0
                        }, l.createElement(m.Ya, {
                            padding: {
                                y: 1,
                                x: 2
                            }
                        }, l.createElement(m.Fb, {
                            className: "auto-mod-wrapper__shield",
                            padding: {
                                y: .5,
                                x: .5
                            },
                            display: m.X.Flex,
                            color: m.O.Overlay
                        }, l.createElement(m.tb, {
                            asset: m.ub.Automod,
                            type: m.vb.Inherit
                        }))), l.createElement(m.Ya, {
                            padding: {
                                y: 1,
                                right: 2
                            }
                        }, l.createElement(m.W, null, e), l.createElement(m.W, {
                            color: m.O.Alt2
                        }, t)))
                    }, t.prototype.determineLevel = function(e) {
                        for (var t in [0, 1, 2, 3, 4])
                            if (e[0] === this.levelToAggro[t] && e[1] === this.levelToIdentity[t] && e[2] === this.levelToProfanity[t] && e[3] === this.levelToSex[t]) return Number(t);
                        return -1
                    }, t.prototype.hasAutoModDashboardAccess = function() {
                        return !!(this.props.data.user && this.props.data.user.self && this.props.data.currentUser && this.props.data.currentUser.roles) && (this.props.data.user.self.isModerator || this.props.data.currentUser.roles.isStaff || this.props.data.currentUser.roles.isSiteAdmin || this.props.data.user.id === this.props.data.currentUser.id)
                    }, t.prototype.initializeStateFromBackend = function(e) {
                        if (e.data.user && e.data.user.autoModProperties) {
                            var t = [e.data.user.autoModProperties.aggressiveLevel, e.data.user.autoModProperties.identityLevel, e.data.user.autoModProperties.profanityLevel, e.data.user.autoModProperties.sexualLevel],
                                n = this.determineLevel(t),
                                a = -1 === n;
                            this.setState({
                                categories: t,
                                initialCategories: t,
                                isCustom: a,
                                initialIsCustom: a,
                                level: n,
                                initialLevel: n,
                                isDataLoaded: !0
                            })
                        }
                    }, t.prototype.hasAutoModProperties = function(e) {
                        return e.data.user ? e.data.user.autoModProperties : null
                    }, t
                }(l.Component),
                S = n("K1HF"),
                y = n("hxCz");
            var A = Object(i.compose)(Object(a.connect)(function(e) {
                return {
                    isLoggedIn: Object(o.f)(e)
                }
            }), Object(r.a)(S, {
                options: function(e) {
                    return {
                        variables: {
                            channelLogin: e.channelLogin
                        },
                        fetchPolicy: "cache-and-network"
                    }
                },
                skip: function(e) {
                    return !e.isLoggedIn
                }
            }), Object(r.a)(y, {
                name: "onUpdateAutoModProperties"
            }), Object(s.b)("AutomodControls"))(f);
            n.d(t, "a", function() {
                return A
            })
        },
        zjB3: function(e, t, n) {}
    }
]);