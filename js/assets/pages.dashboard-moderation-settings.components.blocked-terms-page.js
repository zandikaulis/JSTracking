(window.webpackJsonp = window.webpackJsonp || []).push([
    [170], {
        "/Lcc": function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "mutation",
                    name: {
                        kind: "Name",
                        value: "Chat_StandaloneAddChannelBlockedTerm"
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
                    end: 143
                }
            };
            n.loc.source = {
                body: "mutation Chat_StandaloneAddChannelBlockedTerm($input: AddChannelBlockedTermInput!) {\naddChannelBlockedTerm(input: $input) {\nphrases\naddedAt\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        "38vZ": function(e, t, n) {},
        Cfkc: function(e, t, n) {
            "use strict";
            var a = n("mrSG"),
                i = n("q1tI"),
                r = n("/7QA"),
                d = n("ZnYx"),
                s = n("yR8l"),
                l = n("Ue10"),
                o = n("/Lcc"),
                m = n("q0nF"),
                c = n("vAIR"),
                p = n("TU1y"),
                u = (n("pEci"), function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.state = {
                            terms: []
                        }, n.addTerm = function(e, t) {
                            return a.__awaiter(n, void 0, void 0, function() {
                                return a.__generator(this, function(n) {
                                    switch (n.label) {
                                        case 0:
                                            return null === this.state.terms ? [2, !1] : this.props.type !== d.a.Banned ? [3, 2] : [4, this.props.addChannelBlockedTerm({
                                                variables: {
                                                    input: {
                                                        channelID: this.props.channelID,
                                                        phrases: e.phrases,
                                                        isModEditable: e.isModEditable
                                                    }
                                                }
                                            })];
                                        case 1:
                                            return n.sent(), [3, 4];
                                        case 2:
                                            return this.props.type !== d.a.Permitted ? [3, 4] : [4, this.props.addChannelPermittedTerm({
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
                                            return !0 === t && this.setState(function(t) {
                                                var n = t.terms;
                                                return n.unshift(e), {
                                                    terms: n
                                                }
                                            }), [2, !0]
                                    }
                                })
                            })
                        }, n.deleteTerm = function(e, t) {
                            return a.__awaiter(n, void 0, void 0, function() {
                                return a.__generator(this, function(n) {
                                    switch (n.label) {
                                        case 0:
                                            return null === this.state.terms ? [2, !1] : (!1 === t && this.setState(function(t) {
                                                return {
                                                    terms: t.terms.filter(function(t) {
                                                        return t.phrases.join(" ") !== e.phrases.join(" ")
                                                    })
                                                }
                                            }), this.props.type !== d.a.Banned ? [3, 2] : [4, this.props.deleteChannelBlockedTerm({
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
                                            return this.props.type !== d.a.Permitted ? [3, 4] : [4, this.props.deleteChannelPermittedTerm({
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
                        }, n.editTerm = function(e, t, i) {
                            return a.__awaiter(n, void 0, void 0, function() {
                                return a.__generator(this, function(n) {
                                    switch (n.label) {
                                        case 0:
                                            return [4, this.deleteTerm(e, !0)];
                                        case 1:
                                            return n.sent(), t.isModEditable = i, [4, this.addTerm(t, !1)];
                                        case 2:
                                            return n.sent(), [2]
                                    }
                                })
                            })
                        }, n
                    }
                    return a.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.setState({
                            terms: this.props.terms
                        })
                    }, t.prototype.render = function() {
                        if (!this.state.terms) return null;
                        var e = this.state.terms.reduce(function(e, t) {
                                return t.expiresAt ? null !== t.expiresAt && e.temporaryTerms.push(t) : e.permanentTerms.push(t), e
                            }, {
                                permanentTerms: [],
                                temporaryTerms: []
                            }),
                            t = e.permanentTerms,
                            n = e.temporaryTerms,
                            a = [];
                        return this.props.oppositeTerms.forEach(function(e) {
                            a.push(e)
                        }), i.createElement(l.Ya, {
                            margin: {
                                bottom: 2
                            }
                        }, i.createElement("div", {
                            className: "chat-terms-setting"
                        }, i.createElement(d.b, {
                            channelID: this.props.channelID,
                            userID: this.props.userID,
                            permanentTerms: t,
                            temporaryTerms: n,
                            oppositeTerms: a,
                            onTermAdd: this.addTerm,
                            onTermEdit: this.editTerm,
                            onTermDelete: this.deleteTerm,
                            type: this.props.type
                        })))
                    }, t = a.__decorate([Object(s.a)(o, {
                        name: "addChannelBlockedTerm"
                    }), Object(s.a)(m, {
                        name: "addChannelPermittedTerm"
                    }), Object(s.a)(c, {
                        name: "deleteChannelBlockedTerm"
                    }), Object(s.a)(p, {
                        name: "deleteChannelPermittedTerm"
                    })], t)
                }(i.Component)),
                h = n("IFXb"),
                T = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        if (!this.props.data || this.props.data.loading || this.props.data.error || !this.props.data.user || !this.props.data.user.id || !this.props.data.currentUser || !this.props.data.currentUser.id) return i.createElement(l.Ya, null);
                        var e = new Array,
                            t = new Array,
                            n = "",
                            a = "";
                        return this.props.termCategory === d.a.Banned ? (e = this.props.data.user.blockedTerms, t = this.props.data.user.permittedTerms, n = Object(r.d)("Blocked Terms And Phrases", "StandaloneChatTerms"), a = Object(r.d)("Messages containing these terms or phrases will be blocked from chat. Terms are automatically added when a mod denies a caught message.", "StandaloneChatTerms")) : this.props.termCategory === d.a.Permitted && (e = this.props.data.user.permittedTerms, t = this.props.data.user.blockedTerms, n = Object(r.d)("Permitted Terms And Phrases", "StandaloneChatTerms"), a = Object(r.d)("Messages containing these terms or phrases will be allowed in chat. Terms are automatically added when a mod approves a caught message.", "StandaloneChatTerms")), i.createElement(h.a, null, i.createElement(l.Fb, {
                            background: l.r.Base,
                            border: !0,
                            padding: {
                                left: 1,
                                right: 3,
                                bottom: 2,
                                top: 2
                            }
                        }, i.createElement(l.Ya, {
                            display: l.X.Flex
                        }, i.createElement(l.tb, {
                            asset: l.ub.AngleLeft
                        }), i.createElement(l.Ya, {
                            padding: {
                                left: 3
                            }
                        }, i.createElement(l.W, {
                            fontSize: l.Ca.Size4,
                            bold: !0
                        }, n), i.createElement(l.W, {
                            fontSize: l.Ca.Size7,
                            color: l.O.Alt2
                        }, a)))), i.createElement(l.Fb, {
                            background: l.r.Base,
                            borderLeft: !0,
                            borderRight: !0,
                            padding: 3
                        }, i.createElement(u, {
                            channelID: this.props.data.user.id,
                            userID: this.props.data.currentUser.id,
                            type: this.props.termCategory,
                            terms: e,
                            oppositeTerms: t
                        })))
                    }, t
                }(i.Component),
                b = n("/MKj"),
                v = n("fvjX"),
                g = n("kRBY"),
                k = n("GnwI"),
                f = n("suAp");
            var y = Object(v.compose)(Object(b.connect)(function(e) {
                return {
                    isLoggedIn: Object(g.f)(e)
                }
            }), Object(s.a)(f, {
                options: function(e) {
                    return {
                        variables: {
                            channelLogin: e.channelLogin
                        },
                        fetchPolicy: "cache-and-network"
                    }
                }
            }), Object(k.b)("ChatTermsContainer"))(T);
            n.d(t, !1, function() {
                return T
            }), n.d(t, "a", function() {
                return y
            })
        },
        DUGL: function(e, t, n) {
            "use strict";
            n.r(t);
            var a = n("mrSG"),
                i = n("q1tI"),
                r = n("fvjX"),
                d = n("V+GM"),
                s = n("NvVO"),
                l = n("2xye"),
                o = n("GnwI"),
                m = n("Cfkc"),
                c = n("ZnYx"),
                p = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        return i.createElement(m.a, {
                            channelLogin: this.props.match.params.channelLogin,
                            termCategory: c.a.Banned
                        })
                    }, t
                }(i.Component),
                u = Object(r.compose)(Object(o.b)("BlockedTermsPage", {
                    autoReportInteractive: !0,
                    destination: s.a.DashboardSettingsModerationBlockedTerms
                }), Object(d.a)({
                    location: l.PageviewLocation.DashboardSettingsModerationBlockedTerms
                }))(p);
            n.d(t, "BlockedTermsPage", function() {
                return u
            })
        },
        TU1y: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "mutation",
                    name: {
                        kind: "Name",
                        value: "Chat_StandaloneDeleteChannelPermittedTerm"
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
                    end: 152
                }
            };
            n.loc.source = {
                body: "mutation Chat_StandaloneDeleteChannelPermittedTerm($input: DeleteChannelPermittedTermInput!) {\ndeleteChannelPermittedTerm(input: $input) {\ndeletedAt\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        ZnYx: function(e, t, n) {
            "use strict";
            var a = n("mrSG"),
                i = n("q1tI"),
                r = n("/7QA"),
                d = n("eJ65"),
                s = n("8Ad5");

            function l() {
                return Object(r.d)("Private", "StandaloneChatTerms")
            }

            function o() {
                return Object(r.d)("Public", "StandaloneChatTerms")
            }
            var m, c = n("Ue10");
            ! function(e) {
                e.DisplayedTerm = "term", e.EditTermInput = "edit-term-input", e.EditTermArea = "edit-term-area", e.EditTermButton = "edit-term-button", e.DelTermButton = "del-term-button", e.EditConfirmButton = "edit-confirm-button", e.EditCancelButton = "edit-cancel-button"
            }(m || (m = {}));
            var p, u, h, T = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        isEditing: !1,
                        justSaved: !1
                    }, t.cancelEdit = function() {
                        t.props.cancelEdit(), t.setState({
                            isEditing: !1
                        })
                    }, t.confirmEdit = function() {
                        t.props.confirmEdit(), t.setState({
                            isEditing: !1,
                            justSaved: !0
                        })
                    }, t.handleEdit = function(e) {
                        t.setState({
                            isEditing: !0
                        }), t.props.handleEdit(e)
                    }, t.handleEditKeyDown = function(e) {
                        switch (e.keyCode) {
                            case s.a.Enter:
                                t.confirmEdit();
                                break;
                            case s.a.Esc:
                                t.cancelEdit();
                                break;
                            default:
                                return
                        }
                    }, t
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    if (this.state.isEditing) return this.renderEditTermRow();
                    var e = this.renderExpirationAndPrivacy(),
                        t = null;
                    this.state.justSaved && (t = i.createElement(c.Qa, {
                        position: c.kb.Absolute,
                        padding: {
                            left: 2,
                            top: .5
                        },
                        margin: {
                            left: 5
                        }
                    }, i.createElement("span", {
                        className: "chat-terms-control__saved"
                    }, i.createElement(c.i, {
                        delay: c.j.Long,
                        duration: c.k.Medium,
                        type: c.n.FadeOut,
                        enabled: !0,
                        onAnimationEnd: this.props.clearLabels
                    }, i.createElement(c.Ya, {
                        position: c.kb.Absolute,
                        attachRight: !0
                    }, Object(r.d)("Saved", "StandaloneChatTerms"))))));
                    var n = Object(r.d)("Edit", "StandaloneChatTerms"),
                        a = Object(r.d)("Delete", "StandaloneChatTerms");
                    return i.createElement(c.Nb, {
                        key: this.props.index,
                        "data-index": this.props.index,
                        "data-term-type": this.props.termType
                    }, i.createElement(c.Kb, {
                        "data-selectable": this.props.index,
                        "data-test-selector": m.EditTermArea
                    }, i.createElement(c.Ya, {
                        className: "chat-term",
                        "data-test-selector": m.DisplayedTerm,
                        margin: {
                            right: 1
                        },
                        display: c.X.Flex,
                        alignItems: c.f.Center,
                        justifyContent: c.Xa.Between,
                        fullHeight: !0
                    }, i.createElement(c.W, {
                        ellipsis: !0
                    }, this.props.term.phrases.join(" ")))), e, i.createElement(c.Kb, {
                        textAlign: c.Sb.Center
                    }, i.createElement(c.Zb, {
                        label: n
                    }, i.createElement(c.A, {
                        "data-a-target": "edit-term",
                        "data-test-selector": m.EditTermButton,
                        icon: c.ub.Edit,
                        ariaLabel: n,
                        onClick: this.handleEdit,
                        type: c.C.Secondary
                    })), i.createElement(c.Zb, {
                        label: a
                    }, i.createElement(c.A, {
                        "data-a-target": "delete-term",
                        "data-test-selector": m.DelTermButton,
                        icon: c.ub.Trash,
                        ariaLabel: a,
                        onClick: this.props.handleDelete,
                        type: c.C.Secondary
                    })), t))
                }, t.prototype.renderEditTermRow = function() {
                    var e = Object(r.d)("Save", "StandaloneChatTerms"),
                        t = Object(r.d)("Cancel", "StandaloneChatTerms"),
                        n = this.renderExpirationAndPrivacy();
                    return i.createElement(c.Nb, {
                        key: "line-item-" + this.props.index
                    }, i.createElement(c.Kb, {
                        key: this.props.index,
                        "data-index": this.props.index,
                        "data-term-type": this.props.termType
                    }, i.createElement(c.Sa, {
                        autoFocus: !0,
                        ariaLabel: Object(r.d)("Edit term", "StandaloneChatTerms"),
                        "data-a-target": "edit-term-input",
                        "data-test-selector": m.EditTermInput,
                        refDelegate: this.props.saveEditInputRef,
                        type: c.Ua.Text,
                        defaultValue: this.props.term.phrases.join(" "),
                        onKeyDown: this.handleEditKeyDown,
                        onClick: this.props.onEditInputClick
                    })), n, i.createElement(c.Kb, {
                        textAlign: c.Sb.Center
                    }, i.createElement(c.Zb, {
                        label: e
                    }, i.createElement(c.A, {
                        "data-a-target": "save-term-edit",
                        "data-test-selector": m.EditConfirmButton,
                        icon: c.ub.Check,
                        ariaLabel: e,
                        onClick: this.confirmEdit
                    })), i.createElement(c.Zb, {
                        label: t
                    }, i.createElement(c.A, {
                        "data-a-target": "cancel-term-edit",
                        "data-test-selector": m.EditCancelButton,
                        icon: c.ub.Close,
                        ariaLabel: t,
                        onClick: this.cancelEdit
                    }))))
                }, t.prototype.renderTermExpiration = function() {
                    if (!this.props.term.expiresAt) return i.createElement(c.Kb, null);
                    var e = Object(r.i)(new Date(this.props.term.expiresAt), {
                        style: "numeric"
                    });
                    return i.createElement(c.Kb, null, i.createElement(c.W, {
                        ellipsis: !0,
                        color: c.O.Alt2
                    }, " ", Object(r.d)("Expires {relativeTime}", {
                        relativeTime: e
                    }, "StandaloneChatTerms"), " "))
                }, t.prototype.renderExpirationAndPrivacy = function() {
                    return this.props.termType === u.Permanent ? this.state.isEditing && this.props.isChannelOwner ? i.createElement(c.Kb, null, i.createElement(d.a, {
                        hideBalloonOnInsideClick: !0
                    }, i.createElement(c.z, {
                        dropdown: !0,
                        type: c.F.Hollow
                    }, this.props.term.isModEditable ? o() : l()), i.createElement(c.u, {
                        direction: c.v.BottomLeft
                    }, i.createElement(c.Ya, {
                        padding: .5
                    }, i.createElement(c.Va, {
                        "data-row-index": this.props.index,
                        "data-visibility": o(),
                        onClick: this.props.onClickModEditableChange,
                        selected: this.props.term.isModEditable
                    }, i.createElement(c.Ya, {
                        padding: {
                            x: 1,
                            y: .5
                        }
                    }, o())), i.createElement(c.Va, {
                        "data-row-index": this.props.index,
                        "data-visibility": l(),
                        onClick: this.props.onClickModEditableChange,
                        selected: !this.props.term.isModEditable
                    }, i.createElement(c.Ya, {
                        padding: {
                            x: 1,
                            y: .5
                        }
                    }, l())))))) : i.createElement(c.Kb, null, i.createElement(c.W, {
                        "data-index": this.props.index
                    }, this.props.term.isModEditable ? o() : l())) : this.renderTermExpiration()
                }, t
            }(i.Component);
            n("38vZ");
            ! function(e) {
                e.DisplayedTerm = "term", e.AddTermInput = "add-term-input", e.AddTermButton = "add-term-button"
            }(p || (p = {})),
            function(e) {
                e.Permanent = "permanent", e.Temporary = "temporary"
            }(u || (u = {})),
            function(e) {
                e.Banned = "blocked", e.Permitted = "permitted"
            }(h || (h = {}));
            var b = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        editingIndex: null,
                        editingIsModEditable: null,
                        permanentTerms: [],
                        temporaryTerms: [],
                        editingType: null,
                        termSwitchedLists: !1,
                        errorAddingTerm: !1,
                        errorAddingLabel: null,
                        termToAdd: "",
                        termToAddPrivacy: o()
                    }, t.closeTermSwitchedListsNotif = function() {
                        t.setState({
                            termSwitchedLists: !1
                        })
                    }, t.onClickAddTermPrivacyChange = function(e) {
                        var n = "Public" === e.currentTarget.getAttribute("data-visibility") ? o() : l();
                        t.setState({
                            termToAddPrivacy: n
                        })
                    }, t.onEditInputClick = function(e) {
                        var t = e.currentTarget;
                        t && t.select()
                    }, t.onClickModEditableChange = function(e) {
                        var n = "Public" === e.currentTarget.getAttribute("data-visibility");
                        if (null !== t.state.editingIndex && t.editInput) {
                            var a = {
                                isModEditable: n,
                                category: t.props.type,
                                phrases: [t.editInput.value],
                                createdAt: null,
                                updatedAt: null,
                                expiresAt: null
                            };
                            if (t.state.editingType === u.Permanent) {
                                t.props.onTermEdit(t.state.permanentTerms[t.state.editingIndex], a, n);
                                var i = t.state.permanentTerms;
                                i[t.state.editingIndex] = a, t.setState(function() {
                                    return {
                                        permanentTerms: i,
                                        editingIsModEditable: n
                                    }
                                })
                            } else {
                                t.props.onTermEdit(t.state.temporaryTerms[t.state.editingIndex], a, n);
                                var r = t.state.temporaryTerms;
                                r[t.state.editingIndex] = a, t.setState(function() {
                                    return {
                                        temporaryTerms: r,
                                        editingIsModEditable: n
                                    }
                                })
                            }
                        }
                    }, t.handleAdd = function() {
                        if (t.addInput.value.trim()) {
                            for (var e = Object(r.d)("Duplicate Term", "StandaloneChatTerms"), n = 0, a = t.state.permanentTerms; n < a.length; n++) {
                                if (a[n].phrases.join(" ") === t.addInput.value.trim()) return void t.setState({
                                    errorAddingTerm: !0,
                                    errorAddingLabel: e
                                })
                            }
                            for (var i = 0, d = t.state.temporaryTerms; i < d.length; i++) {
                                if (d[i].phrases.join(" ") === t.addInput.value.trim()) return void t.setState({
                                    errorAddingTerm: !0,
                                    errorAddingLabel: e
                                })
                            }
                            for (var s = !1, m = 0, c = t.props.oppositeTerms; m < c.length; m++) {
                                c[m].phrases.join(" ") === t.addInput.value.trim() && (s = !0)
                            }
                            var p = {
                                phrases: [t.addInput.value.trim()],
                                category: t.props.type,
                                createdAt: null,
                                updatedAt: null,
                                expiresAt: null,
                                isModEditable: t.state.termToAddPrivacy === o()
                            };
                            t.props.onTermAdd(p, !0) && (t.addInput.value = "", t.setState({
                                termToAdd: "",
                                termSwitchedLists: s,
                                termToAddPrivacy: l()
                            }))
                        }
                    }, t.handleEdit = function(e) {
                        var n = e.currentTarget.closest("[data-index]").getAttribute("data-index");
                        if (n) {
                            var a = e.currentTarget.closest("[data-term-type]").getAttribute("data-term-type");
                            a && t.setState({
                                editingIndex: +n,
                                editingType: a
                            })
                        }
                    }, t.handleDelete = function(e) {
                        var n = e.currentTarget.closest("[data-index]").getAttribute("data-index");
                        if (n) {
                            var a = e.currentTarget.closest("[data-term-type]").getAttribute("data-term-type");
                            if (a) {
                                a === u.Permanent ? t.props.onTermDelete(t.state.permanentTerms[+n], !1) : t.props.onTermDelete(t.state.temporaryTerms[+n], !1);
                                var i = t.state.editingIndex;
                                null === i || +n === i ? i = null : i > +n && (i -= 1), i !== t.state.editingIndex && t.setState({
                                    editingIndex: i
                                })
                            }
                        }
                    }, t.saveAddInputRef = function(e) {
                        t.addInput = e
                    }, t.saveEditInputRef = function(e) {
                        t.editInput = e
                    }, t.handleAddKeyDown = function(e) {
                        e.keyCode === s.a.Enter && t.handleAdd(), t.state.errorAddingTerm && t.setState({
                            errorAddingTerm: !1
                        })
                    }, t.handleAddChangeDelayed = function(e) {
                        clearTimeout(t.termAddDelayID), t.termAddDelayID = setTimeout(function() {
                            t.setState({
                                termToAdd: t.addInput.value
                            })
                        }, 250)
                    }, t.handleAddChange = function(e) {
                        clearTimeout(t.termAddDelayID), t.setState({
                            termToAdd: t.addInput.value
                        })
                    }, t.cancelEdit = function() {
                        t.setState({
                            editingIndex: null,
                            editingType: null
                        })
                    }, t.clearLabels = function() {
                        t.state.errorAddingTerm && t.setState({
                            errorAddingTerm: !1,
                            errorAddingLabel: null
                        })
                    }, t.confirmEdit = function() {
                        if (null !== t.state.editingIndex && t.editInput) {
                            var e = null;
                            e = t.state.editingType === u.Permanent ? t.state.permanentTerms[t.state.editingIndex].isModEditable : t.state.temporaryTerms[t.state.editingIndex].isModEditable, null !== t.state.editingIsModEditable && (e = t.state.editingIsModEditable);
                            var n = {
                                isModEditable: e,
                                category: t.props.type,
                                phrases: [t.editInput.value],
                                createdAt: null,
                                updatedAt: null,
                                expiresAt: null
                            };
                            if (t.state.editingType === u.Permanent) {
                                t.props.onTermEdit(t.state.permanentTerms[t.state.editingIndex], n, e);
                                var a = t.state.permanentTerms;
                                a[t.state.editingIndex] = n, t.setState(function() {
                                    return {
                                        permanentTerms: a,
                                        editingIndex: -1,
                                        editingType: null,
                                        editingIsModEditable: e
                                    }
                                })
                            } else {
                                t.props.onTermEdit(t.state.temporaryTerms[t.state.editingIndex], n, e);
                                var i = t.state.temporaryTerms;
                                i[t.state.editingIndex] = n, t.setState(function() {
                                    return {
                                        temporaryTerms: i,
                                        editingIndex: -1,
                                        editingType: null,
                                        editingIsModEditable: e
                                    }
                                })
                            }
                        }
                    }, t
                }
                return a.__extends(t, e), t.prototype.componentWillReceiveProps = function(e) {
                    if (this.state.permanentTerms === e.permanentTerms && this.state.temporaryTerms === e.temporaryTerms) return null;
                    this.setState({
                        permanentTerms: e.permanentTerms,
                        temporaryTerms: e.temporaryTerms
                    })
                }, t.prototype.render = function() {
                    var e = "",
                        t = "";
                    return this.props.type === h.Banned ? (e = Object(r.d)("Enter a term to block", "StandaloneChatTerms"), t = Object(r.d)("Add new blocked term or phrase", "StandaloneChatTerms")) : this.props.type === h.Permitted && (e = Object(r.d)("Enter a term to add", "StandaloneChatTerms"), t = Object(r.d)("Add new permitted term or phrase", "StandaloneChatTerms")), i.createElement(c.Qa, {
                        fullWidth: !0
                    }, i.createElement("div", {
                        className: "chat-terms-control",
                        "data-a-target": "chat-terms-control"
                    }, i.createElement(c.Ya, {
                        margin: {
                            bottom: 2
                        }
                    }, i.createElement(c.Ya, {
                        display: c.X.Flex,
                        flexDirection: c.Aa.Row,
                        alignItems: c.f.Stretch,
                        fullWidth: !0,
                        flexWrap: c.Ba.NoWrap
                    }, i.createElement(c.Ya, {
                        flexGrow: 1
                    }, i.createElement(c.Ea, {
                        label: t,
                        error: this.state.errorAddingTerm,
                        errorMessage: this.state.errorAddingLabel || ""
                    }, i.createElement(c.Sa, {
                        "data-a-target": "add-term-input",
                        "data-test-selector": p.AddTermInput,
                        ariaLabel: Object(r.d)("Add term", "StandaloneChatTerms"),
                        refDelegate: this.saveAddInputRef,
                        type: c.Ua.Search,
                        placeholder: e,
                        onKeyDown: this.handleAddKeyDown,
                        onChange: this.handleAddChangeDelayed,
                        onBlur: this.handleAddChange,
                        error: this.state.errorAddingTerm
                    }))), 0 !== this.state.termToAdd.length && i.createElement(c.Ya, {
                        display: c.X.Flex,
                        margin: {
                            left: .5
                        },
                        alignSelf: c.g.End
                    }, i.createElement(c.z, {
                        onClick: this.handleAdd,
                        "data-a-target": "add-term",
                        "data-test-selector": p.AddTermButton
                    }, Object(r.d)("Add", "StandaloneChatTerms")))), this.state.termSwitchedLists && i.createElement(c.Ya, {
                        position: c.kb.Absolute
                    }, i.createElement(c.Oa, {
                        title: "",
                        type: c.Pa.Neutral,
                        background: c.r.Alt2,
                        description: Object(r.d)("We removed this term from your permitted list and will now block it instead.", "StandaloneChatTerms"),
                        closeButtonAriaLabel: "close",
                        closeButtonOnClick: this.closeTermSwitchedListsNotif
                    })), 0 !== this.state.termToAdd.length && this.props.channelID === this.props.userID && i.createElement(c.Ya, {
                        position: c.kb.Relative,
                        margin: {
                            top: .5
                        }
                    }, i.createElement(c.u, {
                        show: !0,
                        direction: c.v.BottomRight,
                        size: c.w.Small
                    }, i.createElement(c.Ya, {
                        padding: 1
                    }, i.createElement(c.Ya, {
                        display: c.X.Flex
                    }, i.createElement(c.W, {
                        type: c.Wb.Span,
                        bold: !0
                    }, Object(r.d)("Add term to {type} terms", {
                        type: this.props.type
                    }, "StandaloneChatTerms"))), i.createElement(c.Ya, {
                        display: c.X.Flex
                    }, i.createElement(c.W, {
                        type: c.Wb.Span,
                        ellipsis: !0,
                        italic: !0,
                        color: c.O.Alt2
                    }, Object(r.d)("{term}", {
                        term: this.state.termToAdd
                    }, "StandaloneChatTerms"))), i.createElement(c.Ya, {
                        display: c.X.Flex,
                        flexDirection: c.Aa.Row,
                        alignItems: c.f.Stretch,
                        fullWidth: !0,
                        flexWrap: c.Ba.NoWrap,
                        margin: {
                            top: 1,
                            bottom: .5
                        }
                    }, i.createElement(c.Ya, {
                        display: c.X.Flex,
                        alignItems: c.f.Center
                    }, i.createElement(c.W, {
                        align: c.gc.Middle
                    }, Object(r.d)("Privacy:", "StandaloneChatTerms"))), i.createElement(c.Ya, {
                        flexGrow: 1,
                        padding: {
                            left: .5
                        }
                    }, i.createElement(d.a, {
                        hideBalloonOnInsideClick: !0
                    }, i.createElement(c.z, {
                        dropdown: !0,
                        type: c.F.Hollow
                    }, this.state.termToAddPrivacy), i.createElement(c.u, {
                        direction: c.v.BottomLeft
                    }, i.createElement(c.Ya, {
                        padding: .5
                    }, i.createElement(c.Va, {
                        selected: this.state.termToAddPrivacy === o(),
                        "data-visibility": o(),
                        onClick: this.onClickAddTermPrivacyChange
                    }, i.createElement(c.Ya, {
                        padding: {
                            x: 1,
                            y: .5
                        }
                    }, o())), i.createElement(c.Va, {
                        selected: this.state.termToAddPrivacy === l(),
                        "data-visibility": l(),
                        onClick: this.onClickAddTermPrivacyChange
                    }, i.createElement(c.Ya, {
                        padding: {
                            x: 1,
                            y: .5
                        }
                    }, l())))))))))), this.props.type === h.Banned && i.createElement(c.Ya, {
                        margin: {
                            top: .5
                        }
                    }, i.createElement(c.W, {
                        color: c.O.Alt2,
                        fontSize: c.Ca.Size7
                    }, Object(r.d)("Tip: Some terms may be marked as Private and only visible to the channel owner.", "StandaloneChatTerms")))), i.createElement(c.Ya, {
                        padding: {
                            top: 1,
                            left: 0,
                            right: 0,
                            bottom: 1
                        }
                    }, i.createElement(c.W, {
                        fontSize: c.Ca.Size6,
                        bold: !0
                    }, Object(r.d)("Active Terms ({numTerms})", {
                        numTerms: this.state.permanentTerms.length + this.state.temporaryTerms.length
                    }, "StandaloneChatTerms"))), this.renderTerms(this.state.temporaryTerms, u.Temporary), this.renderTerms(this.state.permanentTerms, u.Permanent)))
                }, t.prototype.renderTerms = function(e, t) {
                    for (var n = [], a = 0; a < e.length; a++) e[a].phrases.join(" ").toLowerCase().includes(this.state.termToAdd.toLowerCase()) && n.push(this.renderTerm(e[a], a, t));
                    return 0 === n.length ? i.createElement(c.Ya, {
                        className: "chat-terms"
                    }) : i.createElement(c.Ya, {
                        padding: {
                            bottom: 3
                        }
                    }, i.createElement(c.Ya, {
                        padding: {
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: .5
                        }
                    }, this.renderTableSubTitle(t)), i.createElement(c.Fb, {
                        className: "chat-terms",
                        elevation: 1
                    }, i.createElement(c.Ib, null, i.createElement(c.Lb, null, i.createElement(c.Mb, {
                        label: Object(r.d)("Terms and phrases", "StandaloneChatTerms")
                    }), i.createElement(c.Mb, {
                        label: t === u.Temporary ? Object(r.d)("Expires", "StandaloneChatTerms") : Object(r.d)("Privacy", "StandaloneChatTerms")
                    }), i.createElement(c.Mb, {
                        textAlign: c.Sb.Center,
                        label: Object(r.d)("Actions", "StandaloneChatTerms")
                    })), i.createElement(c.Jb, null, n))))
                }, t.prototype.renderTableSubTitle = function(e) {
                    return e === u.Permanent ? i.createElement(c.W, {
                        fontSize: c.Ca.Size6
                    }, Object(r.d)("Always active for your channel", "StandaloneChatTerms")) : i.createElement(c.W, {
                        fontSize: c.Ca.Size6
                    }, Object(r.d)("Based on your moderators' actions", "StandaloneChatTerms"))
                }, t.prototype.renderTerm = function(e, t, n) {
                    return i.createElement(T, {
                        term: e,
                        termType: n,
                        termCategory: this.props.type,
                        index: t,
                        isChannelOwner: this.props.channelID === this.props.userID,
                        cancelEdit: this.cancelEdit,
                        clearLabels: this.clearLabels,
                        confirmEdit: this.confirmEdit,
                        handleEdit: this.handleEdit,
                        handleDelete: this.handleDelete,
                        onClickModEditableChange: this.onClickModEditableChange,
                        onEditInputClick: this.onEditInputClick,
                        saveEditInputRef: this.saveEditInputRef
                    })
                }, t
            }(i.Component);
            n.d(t, "b", function() {
                return b
            }), n.d(t, "a", function() {
                return h
            }), n.d(t, "c", function() {
                return u
            })
        },
        pEci: function(e, t, n) {},
        q0nF: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "mutation",
                    name: {
                        kind: "Name",
                        value: "Chat_StandaloneAddChannelPermittedTerm"
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
                    end: 149
                }
            };
            n.loc.source = {
                body: "mutation Chat_StandaloneAddChannelPermittedTerm($input: AddChannelPermittedTermInput!) {\naddChannelPermittedTerm(input: $input) {\nphrases\naddedAt\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        suAp: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "StandaloneChatTermsContainerQuery"
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
                    end: 379
                }
            };
            n.loc.source = {
                body: "query StandaloneChatTermsContainerQuery($channelLogin: String!) {\ncurrentUser{\nid\nroles {\nisStaff\nisSiteAdmin\n}\n}\nuser(login: $channelLogin) {\nid\nblockedTerms {\nphrases\ncreatedAt\nupdatedAt\nexpiresAt\ncategory\nisModEditable\n}\npermittedTerms {\nphrases\ncreatedAt\nupdatedAt\nexpiresAt\ncategory\nisModEditable\n}\nchatSettings {\nisOptedOutOfGlobalBannedWordsList\n}\nself {\nisModerator\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        vAIR: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "mutation",
                    name: {
                        kind: "Name",
                        value: "Chat_StandaloneDeleteChannelBlockedTerm"
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
                    end: 146
                }
            };
            n.loc.source = {
                body: "mutation Chat_StandaloneDeleteChannelBlockedTerm($input: DeleteChannelBlockedTermInput!) {\ndeleteChannelBlockedTerm(input: $input) {\ndeletedAt\n}\n}",
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