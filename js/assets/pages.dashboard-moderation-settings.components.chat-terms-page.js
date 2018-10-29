(window.webpackJsonp = window.webpackJsonp || []).push([
    [151], {
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
        F7O8: function(e, t, n) {
            "use strict";
            var a, i, r = n("mrSG"),
                d = n("q1tI"),
                l = n("/7QA"),
                s = n("u5aL"),
                o = n("8Ad5"),
                m = n("Ue10");
            n("zjB3");
            ! function(e) {
                e.DisplayedTerm = "term", e.AddTermInput = "add-term-input", e.EditTermInput = "edit-term-input", e.EditTermArea = "edit-term-area", e.AddTermButton = "add-term-button", e.EditTermButton = "edit-term-button", e.DelTermButton = "del-term-button", e.EditConfirmButton = "edit-confirm-button", e.EditCancelButton = "edit-cancel-button"
            }(a || (a = {})),
            function(e) {
                e.Banned = "banned", e.Permitted = "permitted"
            }(i || (i = {}));
            var c = function(e) {
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
                            e.keyCode === o.a.Enter && t.handleAdd(), t.state.errorAddingTerm && t.setState({
                                errorAddingTerm: !1
                            })
                        }, t.handleEditKeyDown = function(e) {
                            switch (e.keyCode) {
                                case o.a.Enter:
                                    t.confirmEdit();
                                    break;
                                case o.a.Esc:
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
                        return d.createElement(m.Pa, {
                            fullWidth: !0
                        }, d.createElement("div", {
                            className: "chat-terms-control",
                            "data-a-target": "chat-terms-control"
                        }, d.createElement(m.Xa, {
                            display: m.X.Flex,
                            flexDirection: m.Aa.Row,
                            alignItems: m.f.Stretch,
                            fullWidth: !0,
                            flexWrap: m.Ba.NoWrap
                        }, d.createElement(m.Xa, {
                            flexGrow: 1
                        }, d.createElement(m.Ea, {
                            label: "",
                            error: this.state.errorAddingTerm,
                            errorMessage: this.state.errorAddingLabel || ""
                        }, d.createElement(m.Ra, {
                            "data-a-target": "add-term-input",
                            "data-test-selector": a.AddTermInput,
                            ariaLabel: Object(l.d)("Add term", "ChatTermsControl"),
                            refDelegate: this.saveAddInputRef,
                            type: m.Ta.Text,
                            placeholder: this.props.addPlaceholder,
                            onKeyDown: this.handleAddKeyDown,
                            error: this.state.errorAddingTerm
                        }))), d.createElement(m.Xa, {
                            flexShrink: 0,
                            margin: {
                                top: .5
                            }
                        }, d.createElement(m.z, {
                            onClick: this.handleAdd,
                            "data-a-target": "add-term",
                            "data-test-selector": a.AddTermButton
                        }, Object(l.d)("Add", "ChatTermsControl")))), d.createElement(m.Xa, {
                            className: "chat-terms"
                        }, e)))
                    }, t.prototype.renderTerm = function(e, t) {
                        if (t === this.state.editingIndex) return this.renderEditTermRow(e, t);
                        var n = null;
                        if (!0 == !e.isModEditable && this.props.type === i.Banned) n = d.createElement(m.Xa, {
                            alignItems: m.f.Center,
                            display: m.X.Flex,
                            margin: {
                                left: "auto"
                            },
                            fullHeight: !0
                        }, d.createElement(m.eb, {
                            label: Object(l.d)("private", "ChatTermsControl")
                        }));
                        else if (e.expiresAt) {
                            var r = Object(l.i)(new Date(e.expiresAt), {
                                style: "numeric"
                            });
                            n = d.createElement(m.Xa, {
                                margin: {
                                    right: 1
                                }
                            }, d.createElement(m.W, {
                                ellipsis: !0,
                                color: m.O.Alt2
                            }, " ", Object(l.d)("Expires {relativeTime}", {
                                relativeTime: r
                            }, "ChatTermsControl"), " "))
                        }
                        var s = null;
                        t === this.state.justSavedIndex && (s = d.createElement(m.Pa, {
                            position: m.hb.Absolute,
                            margin: {
                                left: 5
                            }
                        }, d.createElement("span", {
                            className: "chat-terms-control__saved"
                        }, d.createElement(m.i, {
                            delay: m.j.Long,
                            duration: m.k.Medium,
                            type: m.n.FadeOut,
                            enabled: !0,
                            onAnimationEnd: this.clearLabels
                        }, d.createElement(m.Xa, {
                            position: m.hb.Absolute,
                            attachRight: !0
                        }, Object(l.d)("Saved", "ChatTermsControl"))))));
                        var o = Object(l.d)("Edit", "ChatTermsControl"),
                            c = Object(l.d)("Delete", "ChatTermsControl");
                        return d.createElement(m.Pa, {
                            className: "chat-term-row",
                            key: t,
                            "data-index": t
                        }, d.createElement("div", {
                            className: "chat-terms-control__term-row",
                            "data-selectable": t,
                            "data-test-selector": a.EditTermArea
                        }, d.createElement(m.Ja, null, d.createElement(m.P, {
                            cols: 6
                        }, d.createElement(m.Xa, {
                            "data-test-selector": a.DisplayedTerm,
                            margin: {
                                right: 1
                            },
                            display: m.X.Flex,
                            alignItems: m.f.Center,
                            justifyContent: m.Wa.Between,
                            fullHeight: !0
                        }, d.createElement(m.W, {
                            ellipsis: !0
                        }, e.phrases.join(" ")))), d.createElement(m.P, {
                            cols: 4
                        }, d.createElement(m.Xa, {
                            alignItems: m.f.Center,
                            display: m.X.Flex,
                            flexWrap: m.Ba.NoWrap,
                            fullHeight: !0
                        }, n)), d.createElement(m.P, {
                            cols: 1
                        }, d.createElement(m.Ub, {
                            label: o
                        }, d.createElement(m.A, {
                            "data-a-target": "edit-term",
                            "data-test-selector": a.EditTermButton,
                            icon: m.rb.Edit,
                            ariaLabel: o,
                            onClick: this.handleEdit
                        }))), d.createElement(m.P, {
                            cols: 1
                        }, d.createElement(m.Ub, {
                            label: c
                        }, d.createElement(m.A, {
                            "data-a-target": "delete-term",
                            "data-test-selector": a.DelTermButton,
                            icon: m.rb.Trash,
                            ariaLabel: c,
                            onClick: this.handleDelete
                        })), s))))
                    }, t.prototype.renderEditTermRow = function(e, t) {
                        var n = Object(l.d)("Save", "ChatTermsControl"),
                            i = Object(l.d)("Cancel", "ChatTermsControl"),
                            r = this.renderEditBalloon(e, t);
                        return d.createElement(s.a, {
                            key: "clickout-item-" + t,
                            onClickOut: this.cancelEdit
                        }, d.createElement(m.Xa, {
                            key: "line-item-" + t,
                            className: "chat-term-row",
                            position: m.hb.Relative
                        }, d.createElement(m.Xa, {
                            key: t,
                            "data-index": t,
                            display: m.X.Flex,
                            flexDirection: m.Aa.Row,
                            flexWrap: m.Ba.NoWrap
                        }, d.createElement(m.Xa, {
                            flexGrow: 1
                        }, d.createElement(m.Ra, {
                            autoFocus: !0,
                            ariaLabel: Object(l.d)("Edit term", "ChatTermsControl"),
                            "data-a-target": "edit-term-input",
                            "data-test-selector": a.EditTermInput,
                            refDelegate: this.saveEditInputRef,
                            type: m.Ta.Text,
                            defaultValue: e.phrases.join(" "),
                            onKeyDown: this.handleEditKeyDown
                        })), d.createElement(m.Xa, {
                            flexShrink: 0
                        }, d.createElement(m.Ub, {
                            label: n
                        }, d.createElement(m.A, {
                            "data-a-target": "save-term-edit",
                            "data-test-selector": a.EditConfirmButton,
                            icon: m.rb.Check,
                            ariaLabel: n,
                            onClick: this.confirmEdit
                        })), d.createElement(m.Ub, {
                            label: i
                        }, d.createElement(m.A, {
                            "data-a-target": "cancel-term-edit",
                            "data-test-selector": a.EditCancelButton,
                            icon: m.rb.Close,
                            ariaLabel: i,
                            onClick: this.cancelEdit
                        })))), r))
                    }, t.prototype.renderEditBalloon = function(e, t) {
                        var n = null;
                        return e.expiresAt ? n = d.createElement(m.Xa, null, Object(l.d)("Save changes to make term always active", "ChatTermsControl")) : this.props.type === i.Banned && this.props.channelID === this.props.userID && (n = d.createElement(m.Xa, null, d.createElement(m.N, {
                            "data-test-selector": "isModEditableCheckbox",
                            id: "isModEditableCheckbox",
                            label: "Mark as Private",
                            defaultChecked: !e.isModEditable,
                            onChange: this.onCheckModEditableChange
                        }), d.createElement(m.W, {
                            color: m.O.Alt2,
                            fontSize: m.Ca.Size8
                        }, Object(l.d)("Private terms are not viewable to anyone except for yourself.", "ChatTermsControl")))), n ? d.createElement(m.u, {
                            key: "edit-balloon-" + t,
                            direction: m.v.Right,
                            size: m.w.Large,
                            show: !0
                        }, d.createElement(m.Xa, {
                            margin: 1
                        }, d.createElement(m.Bb, {
                            borderBottom: !0,
                            margin: {
                                bottom: .5
                            }
                        }, e.phrases.join(" ")), n)) : null
                    }, t
                }(d.Component),
                u = n("yR8l"),
                p = n("4l1H"),
                h = n("Temx"),
                k = n("kk6A"),
                v = n("5R7h"),
                g = (n("R17a"), function(e) {
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
                        return this.props.type === i.Banned && (e = d.createElement(m.W, {
                            color: m.O.Alt2,
                            fontSize: m.Ca.Size8
                        }, Object(l.d)("Tip: Some terms may be marked as Private and only visible to the channel owner.", "ChatTermsSetting"))), d.createElement(m.Xa, {
                            margin: {
                                bottom: 2
                            }
                        }, d.createElement("div", {
                            className: "chat-terms-setting"
                        }, d.createElement(c, {
                            channelID: this.props.channelID,
                            userID: this.props.userID,
                            addPlaceholder: this.props.addPlaceholderMsg,
                            terms: this.state.terms,
                            onTermAdd: this.addTerm,
                            onTermEdit: this.editTerm,
                            onTermDelete: this.deleteTerm,
                            type: this.props.type
                        })), d.createElement(m.Xa, {
                            margin: {
                                top: .5
                            }
                        }, e))
                    }, t = r.__decorate([Object(u.a)(p, {
                        name: "addChannelBlockedTerm"
                    }), Object(u.a)(h, {
                        name: "addChannelPermittedTerm"
                    }), Object(u.a)(k, {
                        name: "deleteChannelBlockedTerm"
                    }), Object(u.a)(v, {
                        name: "deleteChannelPermittedTerm"
                    })], t)
                }(d.Component)),
                b = function(e) {
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
                        return !this.props.data || this.props.data.loading || this.props.data.error || !this.props.data.user ? d.createElement(m.Xa, null) : d.createElement(m.Bb, {
                            padding: {
                                top: 2
                            }
                        }, d.createElement(m.Ja, null, d.createElement(m.P, {
                            cols: 2
                        }, d.createElement(m.W, {
                            color: m.O.Alt2,
                            type: m.Rb.Strong
                        }, Object(l.d)("Blocked and Permitted Terms", "AutoModTermsTitle"))), d.createElement(m.P, {
                            cols: 5
                        }, d.createElement(m.W, {
                            color: m.O.Alt2,
                            type: m.Rb.Strong
                        }, Object(l.d)("Blocked Terms or Phrases", "AutoModBlockedTermsTitle")), d.createElement(m.W, {
                            color: m.O.Alt2
                        }, Object(l.d)("Messages containing these terms or phrases will be blocked from chat. Terms are automatically added when a mod denies a caught message.", "AutoModBlockedTermsDescription")), d.createElement(g, {
                            channelID: this.props.data.user.id,
                            userID: this.props.data.currentUser.id,
                            type: i.Banned,
                            addPlaceholderMsg: Object(l.d)("Add new blocked term or phrase", "AutoModBlockedTermAdditionPlaceHolder"),
                            terms: this.props.data.user.blockedTerms
                        }), d.createElement(m.W, {
                            color: m.O.Alt2,
                            type: m.Rb.Strong
                        }, Object(l.d)("Permitted Terms or Phrases", "AutoModPermittedTermsTitle")), d.createElement(m.W, {
                            color: m.O.Alt2
                        }, Object(l.d)("Messages containing these terms, and no other blocked terms, will not be caught by AutoMod. Terms are automatically added when a mod allows a message.", "AutoModPermittedTermsDescription")), d.createElement(g, {
                            channelID: this.props.data.user.id,
                            userID: this.props.data.currentUser.id,
                            type: i.Permitted,
                            addPlaceholderMsg: Object(l.d)("Add new permitted term or phrase", "AutoModPermittedTermsAdditionPlaceholder"),
                            terms: this.props.data.user.permittedTerms
                        }), d.createElement(m.N, {
                            defaultChecked: this.props.data.user.chatSettings.isOptedOutOfGlobalBannedWordsList,
                            label: Object(l.d)("Opt out of commonly blocked terms", "AutoModSettings"),
                            onChange: this.handleOptOutChange
                        }), d.createElement(m.W, {
                            color: m.O.Alt2,
                            fontSize: m.Ca.Size8
                        }, Object(l.d)("AutoMod level 0 automatically holds messages containing commonly blocked terms for mods to review. If you enable this feature AutoMod won't hold these messages.", "AutoModSettings")))))
                    }, t
                }(d.Component),
                f = n("/MKj"),
                T = n("fvjX"),
                S = n("kRBY"),
                E = n("GnwI"),
                C = n("Z6v5"),
                A = n("ah12");
            var y = Object(T.compose)(Object(f.connect)(function(e) {
                return {
                    isLoggedIn: Object(S.f)(e)
                }
            }), Object(u.a)(C, {
                options: function(e) {
                    return {
                        variables: {
                            channelLogin: e.channelLogin
                        },
                        fetchPolicy: "cache-and-network"
                    }
                }
            }), Object(u.a)(A, {
                name: "onUpdateChatSettings"
            }), Object(E.b)("ChatTermsContainer"))(b);
            n.d(t, !1, function() {
                return b
            }), n.d(t, "a", function() {
                return y
            })
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
        hd7z: function(e, t, n) {
            "use strict";
            n.r(t);
            var a = n("mrSG"),
                i = n("q1tI"),
                r = n("fvjX"),
                d = n("V+GM"),
                l = n("NvVO"),
                s = n("2xye"),
                o = n("GnwI"),
                m = n("F7O8"),
                c = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        return i.createElement(m.a, {
                            channelLogin: this.props.match.params.channelLogin
                        })
                    }, t
                }(i.Component),
                u = Object(r.compose)(Object(o.b)("ChatTermsPage", {
                    autoReportInteractive: !0,
                    destination: l.a.DashboardSettingsModerationChatTerms
                }), Object(d.a)({
                    location: s.PageviewLocation.DashboardSettingsModerationChatTerms
                }))(c);
            n.d(t, "ChatTermsPage", function() {
                return u
            })
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
        zjB3: function(e, t, n) {}
    }
]);