webpackJsonp([112], {
    "2BIs": function(e, t) {},
    KpHk: function(e, t) {},
    RdZX: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a, i, r = n("TToO"),
            o = n("GiK3"),
            d = n("F8kA"),
            l = n("2KeS"),
            s = n("6sO2"),
            c = n("N221"),
            u = n("j7/Y"),
            m = n("w9tK"),
            p = n("vH/s"),
            h = n("CSlQ"),
            g = n("RH2O"),
            v = n("Aj/L"),
            k = n("3zLD"),
            b = n("7vx8"),
            f = n("YDbY"),
            S = n("rCmJ"),
            y = n("Odds"),
            A = function(e) {
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
                return r.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return o.createElement(y.L, {
                        cols: 6
                    }, o.createElement(S.a, {
                        onClickOut: this.hideCategoryMenu
                    }, o.createElement(y._8, {
                        padding: {
                            top: .5
                        }
                    }, o.createElement(y.v, {
                        dropdown: !0,
                        type: y.B.Hollow,
                        onClick: this.toggleCategoryMenu
                    }, this.menuOption(this.props.categoryLevel)), this.menuItems())))
                }, t.prototype.menuItems = function() {
                    return this.state.menuItemsVisible ? o.createElement(y._35, {
                        border: !0,
                        background: y.n.Alt,
                        position: y._15.Absolute,
                        zIndex: y._62.Above
                    }, this.renderMenuItem(0), this.renderMenuItem(6), this.renderMenuItem(5), this.renderMenuItem(4), this.renderMenuItem(3)) : ""
                }, t.prototype.renderMenuItem = function(e) {
                    return o.createElement(y._6, {
                        alpha: !0,
                        selected: this.props.categoryLevel === e,
                        "data-new-level": e,
                        onClick: this.menuItemClicked
                    }, o.createElement(y._8, {
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
                    for (var t = [Object(s.d)("No filtering", "AutoModSettings"), Object(s.d)("Less filtering", "AutoModSettings"), Object(s.d)("Some filtering", "AutoModSettings"), Object(s.d)("More filtering", "AutoModSettings"), Object(s.d)("Most filtering", "AutoModSettings")], n = this.getNumShields(e), a = [], i = 0; i < n; i++) a.push(o.createElement(y._8, {
                        key: "shield" + i,
                        display: y.R.InlineFlex,
                        padding: {
                            right: .5
                        }
                    }, o.createElement(y._24, {
                        asset: y._25.Automod,
                        height: 13,
                        width: 13,
                        type: y._26.Alt2
                    })));
                    var r = t[n];
                    return o.createElement(y._8, {
                        display: y.R.Flex,
                        padding: .5
                    }, a, o.createElement(y.Q, {
                        align: y._59.Middle,
                        color: y.K.Alt2
                    }, r))
                }, t = r.__decorate([Object(h.d)("AutomodCategoryDisplay")], t)
            }(o.Component),
            E = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.handleSliderMove = function(e) {
                        var n = Number(e.currentTarget.value);
                        t.props.onLevelChange(n)
                    }, t
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    var e = [Object(s.d)("Only commonly blocked terms", "AutoModSettings"), Object(s.d)("A Little Moderation", "AutoModSettings"), Object(s.d)("Some Moderation", "AutoModSettings"), Object(s.d)("More Moderation", "AutoModSettings"), Object(s.d)("A Lot of Moderation", "AutoModSettings")],
                        t = this.props.level,
                        n = e[t],
                        a = Object(s.d)("Level {lvl,number}", {
                            lvl: t
                        }, "AutoModSettings");
                    return o.createElement(y._35, {
                        borderLeft: !0,
                        borderRight: !0,
                        padding: {
                            top: 1,
                            x: 2
                        }
                    }, o.createElement(y._8, {
                        padding: {
                            bottom: .5
                        }
                    }, o.createElement(y.Q, {
                        color: y.K.Alt2,
                        type: y._49.P
                    }, Object(s.d)("Your AutoMod setting:", "AutoModSettingsSlider"))), o.createElement(y._22, {
                        min: 0,
                        max: 4,
                        step: 1,
                        value: String(t),
                        onChange: this.handleSliderMove,
                        "data-test-selector": "auto-mod-slider"
                    }), o.createElement(y._8, {
                        display: y.R.Flex
                    }, o.createElement(y._8, {
                        padding: {
                            right: .5
                        }
                    }, a), o.createElement(y.Q, {
                        color: y.K.Alt2,
                        type: y._49.Strong
                    }, n)), o.createElement(y._35, {
                        background: y.n.Alt2,
                        padding: 1,
                        className: "auto-mod-wrapper__carat",
                        position: y._15.Relative
                    }))
                }, t
            }(o.Component),
            C = n("6BvN");
        n("KpHk");
        ! function(e) {
            e.DisplayedTerm = "term", e.AddTermInput = "add-term-input", e.EditTermInput = "edit-term-input", e.EditTermArea = "edit-term-area", e.AddTermButton = "add-term-button", e.EditTermButton = "edit-term-button", e.DelTermButton = "del-term-button", e.EditConfirmButton = "edit-confirm-button", e.EditCancelButton = "edit-cancel-button"
        }(a || (a = {})),
        function(e) {
            e.Banned = "banned", e.Permitted = "permitted"
        }(i || (i = {}));
        var T = function(e) {
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
                                    errorAddingLabel: Object(s.d)("Duplicate Term", "ChatTermsControl")
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
                        e.keyCode === C.a.Enter && t.handleAdd(), t.state.errorAddingTerm && t.setState({
                            errorAddingTerm: !1
                        })
                    }, t.handleEditKeyDown = function(e) {
                        switch (e.keyCode) {
                            case C.a.Enter:
                                t.confirmEdit();
                                break;
                            case C.a.Esc:
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
                    return o.createElement(y._2, {
                        fullWidth: !0
                    }, o.createElement("div", {
                        className: "chat-terms-control",
                        "data-a-target": "chat-terms-control"
                    }, o.createElement(y._8, {
                        display: y.R.Flex,
                        flexDirection: y.T.Row,
                        alignItems: y.c.Stretch,
                        fullWidth: !0,
                        flexWrap: y.U.NoWrap
                    }, o.createElement(y._8, {
                        flexGrow: 1
                    }, o.createElement(y.W, {
                        label: "",
                        error: this.state.errorAddingTerm,
                        errorMessage: this.state.errorAddingLabel || ""
                    }, o.createElement(y._4, {
                        "data-a-target": "add-term-input",
                        "data-test-selector": a.AddTermInput,
                        ariaLabel: Object(s.d)("Add term", "ChatTermsControl"),
                        refDelegate: this.saveAddInputRef,
                        type: y._5.Text,
                        placeholder: this.props.addPlaceholder,
                        onKeyDown: this.handleAddKeyDown,
                        error: this.state.errorAddingTerm
                    }))), o.createElement(y._8, {
                        flexShrink: 0,
                        margin: {
                            top: .5
                        }
                    }, o.createElement(y.v, {
                        onClick: this.handleAdd,
                        "data-a-target": "add-term",
                        "data-test-selector": a.AddTermButton
                    }, Object(s.d)("Add", "ChatTermsControl")))), o.createElement(y._8, {
                        className: "chat-terms"
                    }, e)))
                }, t.prototype.renderTerm = function(e, t) {
                    if (t === this.state.editingIndex) return this.renderEditTermRow(e, t);
                    var n = null;
                    if (!0 == !e.isModEditable && this.props.type === i.Banned) n = o.createElement(y._8, {
                        alignItems: y.c.Center,
                        display: y.R.Flex,
                        margin: {
                            left: "auto"
                        },
                        fullHeight: !0
                    }, o.createElement(y._12, {
                        label: Object(s.d)("private", "ChatTermsControl")
                    }));
                    else if (e.expiresAt) {
                        var r = Object(s.h)(new Date(e.expiresAt), {
                            style: "numeric"
                        });
                        n = o.createElement(y._8, {
                            margin: {
                                right: 1
                            }
                        }, o.createElement(y.Q, {
                            ellipsis: !0,
                            color: y.K.Alt2
                        }, " ", Object(s.d)("Expires {relativeTime}", {
                            relativeTime: r
                        }, "ChatTermsControl"), " "))
                    }
                    var d = null;
                    t === this.state.justSavedIndex && (d = o.createElement(y._2, {
                        position: y._15.Absolute,
                        margin: {
                            left: 5
                        }
                    }, o.createElement("span", {
                        className: "chat-terms-control__saved"
                    }, o.createElement(y.e, {
                        delay: y.f.Long,
                        duration: y.g.Medium,
                        type: y.j.FadeOut,
                        enabled: !0,
                        onAnimationEnd: this.clearLabels
                    }, o.createElement(y._8, {
                        position: y._15.Absolute,
                        attachRight: !0
                    }, Object(s.d)("Saved", "ChatTermsControl"))))));
                    var l = Object(s.d)("Edit", "ChatTermsControl"),
                        c = Object(s.d)("Delete", "ChatTermsControl");
                    return o.createElement(y._2, {
                        className: "chat-term-row",
                        key: t,
                        "data-index": t
                    }, o.createElement("div", {
                        className: "chat-terms-control__term-row",
                        "data-selectable": t,
                        "data-test-selector": a.EditTermArea
                    }, o.createElement(y.Y, null, o.createElement(y.L, {
                        cols: 6
                    }, o.createElement(y._8, {
                        "data-test-selector": a.DisplayedTerm,
                        margin: {
                            right: 1
                        },
                        display: y.R.Flex,
                        alignItems: y.c.Center,
                        justifyContent: y._7.Between,
                        fullHeight: !0
                    }, o.createElement(y.Q, {
                        ellipsis: !0
                    }, e.phrases.join(" ")))), o.createElement(y.L, {
                        cols: 4
                    }, o.createElement(y._8, {
                        alignItems: y.c.Center,
                        display: y.R.Flex,
                        flexWrap: y.U.NoWrap,
                        fullHeight: !0
                    }, n)), o.createElement(y.L, {
                        cols: 1
                    }, o.createElement(y._52, {
                        label: l
                    }, o.createElement(y.w, {
                        "data-a-target": "edit-term",
                        "data-test-selector": a.EditTermButton,
                        icon: y._25.Edit,
                        ariaLabel: l,
                        onClick: this.handleEdit
                    }))), o.createElement(y.L, {
                        cols: 1
                    }, o.createElement(y._52, {
                        label: c
                    }, o.createElement(y.w, {
                        "data-a-target": "delete-term",
                        "data-test-selector": a.DelTermButton,
                        icon: y._25.Trash,
                        ariaLabel: c,
                        onClick: this.handleDelete
                    })), d))))
                }, t.prototype.renderEditTermRow = function(e, t) {
                    var n = Object(s.d)("Save", "ChatTermsControl"),
                        i = Object(s.d)("Cancel", "ChatTermsControl"),
                        r = this.renderEditBalloon(e, t);
                    return o.createElement(S.a, {
                        key: "clickout-item-" + t,
                        onClickOut: this.cancelEdit
                    }, o.createElement(y._8, {
                        key: "line-item-" + t,
                        className: "chat-term-row",
                        position: y._15.Relative
                    }, o.createElement(y._8, {
                        key: t,
                        "data-index": t,
                        display: y.R.Flex,
                        flexDirection: y.T.Row,
                        flexWrap: y.U.NoWrap
                    }, o.createElement(y._8, {
                        flexGrow: 1
                    }, o.createElement(y._4, {
                        autoFocus: !0,
                        ariaLabel: Object(s.d)("Edit term", "ChatTermsControl"),
                        "data-a-target": "edit-term-input",
                        "data-test-selector": a.EditTermInput,
                        refDelegate: this.saveEditInputRef,
                        type: y._5.Text,
                        defaultValue: e.phrases.join(" "),
                        onKeyDown: this.handleEditKeyDown
                    })), o.createElement(y._8, {
                        flexShrink: 0
                    }, o.createElement(y._52, {
                        label: n
                    }, o.createElement(y.w, {
                        "data-a-target": "save-term-edit",
                        "data-test-selector": a.EditConfirmButton,
                        icon: y._25.Check,
                        ariaLabel: n,
                        onClick: this.confirmEdit
                    })), o.createElement(y._52, {
                        label: i
                    }, o.createElement(y.w, {
                        "data-a-target": "cancel-term-edit",
                        "data-test-selector": a.EditCancelButton,
                        icon: y._25.Close,
                        ariaLabel: i,
                        onClick: this.cancelEdit
                    })))), r))
                }, t.prototype.renderEditBalloon = function(e, t) {
                    var n = null;
                    return e.expiresAt ? n = o.createElement(y._8, null, Object(s.d)("Save changes to make term always active", "ChatTermsControl")) : this.props.type === i.Banned && this.props.channelID === this.props.userID && (n = o.createElement(y._8, null, o.createElement(y.J, {
                        "data-test-selector": "isModEditableCheckbox",
                        id: "isModEditableCheckbox",
                        label: "Mark as Private",
                        defaultChecked: !e.isModEditable,
                        onChange: this.onCheckModEditableChange
                    }), o.createElement(y.Q, {
                        color: y.K.Alt2,
                        fontSize: y.V.Size8
                    }, Object(s.d)("Private terms are not viewable to anyone except for yourself.", "ChatTermsControl")))), n ? o.createElement(y.q, {
                        key: "edit-balloon-" + t,
                        direction: y.r.Right,
                        size: y.s.Large,
                        show: !0
                    }, o.createElement(y._8, {
                        margin: 1
                    }, o.createElement(y._35, {
                        borderBottom: !0,
                        margin: {
                            bottom: .5
                        }
                    }, e.phrases.join(" ")), n)) : null
                }, t
            }(o.Component),
            _ = n("xJPR"),
            M = n("UnGd"),
            O = n("yxnG"),
            N = n("qDOQ"),
            I = (n("2BIs"), function(e) {
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
                    return this.props.type === i.Banned && (e = o.createElement(y.Q, {
                        color: y.K.Alt2,
                        fontSize: y.V.Size8
                    }, Object(s.d)("Tip: Some terms may be marked as Private and only visible to the channel owner.", "ChatTermsSetting"))), o.createElement(y._8, {
                        margin: {
                            bottom: 2
                        }
                    }, o.createElement("div", {
                        className: "chat-terms-setting"
                    }, o.createElement(T, {
                        channelID: this.props.channelID,
                        userID: this.props.userID,
                        addPlaceholder: this.props.addPlaceholderMsg,
                        terms: this.state.terms,
                        onTermAdd: this.addTerm,
                        onTermEdit: this.editTerm,
                        onTermDelete: this.deleteTerm,
                        type: this.props.type
                    })), o.createElement(y._8, {
                        margin: {
                            top: .5
                        }
                    }, e))
                }, t = r.__decorate([Object(b.a)(_, {
                    name: "addChannelBlockedTerm"
                }), Object(b.a)(M, {
                    name: "addChannelPermittedTerm"
                }), Object(b.a)(O, {
                    name: "deleteChannelBlockedTerm"
                }), Object(b.a)(N, {
                    name: "deleteChannelPermittedTerm"
                })], t)
            }(o.Component)),
            L = n("q6J+"),
            x = (n("l725"), n("wQAG")),
            D = n("YjTN"),
            j = "slider-blank-state-container",
            P = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        isCustom: !1,
                        initialIsCustom: !1,
                        submissionState: y.A.Default,
                        cancelDisabled: !0,
                        onboardingVisible: !0,
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
                        t.state.categories && (t.setState({
                            submissionState: y.A.Loading
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
                            submissionState: y.A.Default,
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
                            submissionState: y.A.Success,
                            cancelDisabled: !0,
                            initialCategories: t.state.categories,
                            initialLevel: t.state.level
                        }), clearTimeout(t.recentSuccessfulMutation), t.recentSuccessfulMutation = setTimeout(t.handleSuccessfulMutationExpired, 3e3)
                    }, t.handleSuccessfulMutationExpired = function() {
                        t.setState({
                            submissionState: y.A.Default
                        })
                    }, t.revertToSlider = function() {
                        var e = [t.levelToAggro[1], t.levelToIdentity[1], t.levelToProfanity[1], t.levelToSex[1]];
                        t.setState({
                            isCustom: !1,
                            level: 1,
                            categories: e,
                            cancelDisabled: !1
                        })
                    }, t.onCloseOnboarding = function() {
                        t.setState({
                            onboardingVisible: !1
                        })
                    }, t.renderSlider = function(e) {
                        return e ? o.createElement(y._35, {
                            borderLeft: !0,
                            borderRight: !0,
                            padding: 2,
                            "data-test-selector": j
                        }, o.createElement("img", {
                            src: "https://s.jtvnw.net/jtv_user_pictures/hosted_images/automod_setup_en.gif"
                        }), o.createElement(y._35, null, o.createElement(y._35, {
                            padding: {
                                top: 2
                            },
                            textAlign: y._45.Center
                        }, Object(s.d)("Your current AutoMod level: 0", "AutoModSettings")), o.createElement(y._35, {
                            margin: {
                                x: 2
                            },
                            padding: {
                                y: 1,
                                x: 5
                            },
                            textAlign: y._45.Center
                        }, o.createElement(y.v, {
                            fullWidth: !0,
                            onClick: t.showAutoModCategories,
                            state: y.A.Default
                        }, Object(s.d)("Choose level", "AutoModSettings"))))) : t.state.isCustom || void 0 === t.state.level ? o.createElement(y._35, {
                            borderLeft: !0,
                            borderRight: !0,
                            padding: {
                                y: 1,
                                x: 2
                            }
                        }, o.createElement(y.Y, {
                            gutterSize: y.Z.Small
                        }, o.createElement(y.L, {
                            cols: 6
                        }, o.createElement(y._8, {
                            display: y.R.Flex,
                            fullHeight: !0,
                            alignItems: y.c.Center
                        }, o.createElement(y.Q, {
                            color: y.K.Alt2,
                            type: y._49.Span
                        }, Object(s.d)("Your AutoMod setting:", "AutoModSettings")), o.createElement(y._8, {
                            padding: {
                                left: .5
                            },
                            display: y.R.InlineFlex
                        }, o.createElement(y.Q, {
                            color: y.K.Alt2,
                            type: y._49.Strong
                        }, Object(s.d)("Custom", "AutoModSettingsValue"))))), o.createElement(y.L, {
                            cols: 5
                        }, o.createElement(y.v, {
                            type: y.B.Hollow,
                            onClick: t.revertToSlider
                        }, Object(s.d)("Revert to defaults", "AutoModSettings"))))) : o.createElement(E, {
                            level: t.state.level.valueOf(),
                            onLevelChange: t.handleLevelChange
                        })
                    }, t.handleOptOutChange = function(e) {
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
                }, t.prototype.componentWillReceiveProps = function(e) {
                    e.data && !e.data.loading && !e.data.error && e.data.user && (this.state.isDataLoaded || (this.hasAutoModProperties(e) ? this.initializeStateFromBackend(e) : this.setState({
                        isDataLoaded: !0
                    })))
                }, t.prototype.render = function() {
                    var e = Object(s.d)("AutoMod Rulesets", "AutoModSettings");
                    if (!this.props.data || this.props.data.loading || this.props.data.error || null === this.props.data.user) return o.createElement(y._35, {
                        "data-test-selector": "automod-placeholder-container"
                    });
                    if (!Object(f.a)() || !this.hasAutoModDashboardAccess()) return o.createElement(y._35, {
                        margin: {
                            top: 2
                        },
                        color: y.K.Alt2,
                        textAlign: y._45.Center,
                        "data-test-selector": "automod-placeholder-container"
                    }, o.createElement(y.Q, {
                        type: y._49.H3,
                        italic: !0
                    }, Object(s.d)("You do not have permission to access this dashboard.", "AutoModSettings")));
                    var t = this.isBlankState();
                    return o.createElement(y._35, {
                        className: "auto-mod-wrapper",
                        padding: {
                            y: 3
                        }
                    }, o.createElement(y._35, {
                        margin: {
                            bottom: 2
                        }
                    }, this.AutomodOnboarding()), o.createElement(y.Y, null, o.createElement(y.L, {
                        cols: 2
                    }, o.createElement(y.Q, {
                        color: y.K.Alt2,
                        type: y._49.Strong
                    }, e)), o.createElement(y.L, {
                        cols: 5
                    }, this.AutomodTableHeader(), this.renderSlider(t), this.AutomodCategories(t), this.AutomodTableFooter(t))), o.createElement(y._35, {
                        borderTop: !0,
                        padding: {
                            top: .5
                        },
                        margin: {
                            y: 1
                        }
                    }), o.createElement(y._35, {
                        padding: {
                            top: 2
                        }
                    }, o.createElement(y.Y, null, o.createElement(y.L, {
                        cols: 2
                    }, o.createElement(y.Q, {
                        color: y.K.Alt2,
                        type: y._49.Strong
                    }, Object(s.d)("Blocked and Permitted Terms", "AutoModTermsTitle"))), o.createElement(y.L, {
                        cols: 5
                    }, o.createElement(y.Q, {
                        color: y.K.Alt2,
                        type: y._49.Strong
                    }, Object(s.d)("Blocked Terms or Phrases", "AutoModBlockedTermsTitle")), o.createElement(y.Q, {
                        color: y.K.Alt2
                    }, Object(s.d)("Messages containing these terms or phrases will be blocked from chat. Terms are automatically added when a mod denies a caught message.", "AutoModBlockedTermsDescription")), o.createElement(I, {
                        channelID: this.props.data.user.id,
                        userID: this.props.data.currentUser.id,
                        type: i.Banned,
                        addPlaceholderMsg: Object(s.d)("Add new blocked term or phrase", "AutoModBlockedTermAdditionPlaceHolder"),
                        terms: this.props.data.user.blockedTerms
                    }), o.createElement(y.Q, {
                        color: y.K.Alt2,
                        type: y._49.Strong
                    }, Object(s.d)("Permitted Terms or Phrases", "AutoModPermittedTermsTitle")), o.createElement(y.Q, {
                        color: y.K.Alt2
                    }, Object(s.d)("Messages containing these terms, and no other blocked terms, will not be caught by AutoMod. Terms are automatically added when a mod allows a message.", "AutoModPermittedTermsDescription")), o.createElement(I, {
                        channelID: this.props.data.user.id,
                        userID: this.props.data.currentUser.id,
                        type: i.Permitted,
                        addPlaceholderMsg: Object(s.d)("Add new permitted term or phrase", "AutoModPermittedTermsAdditionPlaceholder"),
                        terms: this.props.data.user.permittedTerms
                    }), o.createElement(y.J, {
                        defaultChecked: this.props.data.user.chatSettings.isOptedOutOfGlobalBannedWordsList,
                        label: Object(s.d)("Opt out of commonly blocked terms", "AutoModSettings"),
                        onChange: this.handleOptOutChange
                    }), o.createElement(y.Q, {
                        color: y.K.Alt2,
                        fontSize: y.V.Size8
                    }, Object(s.d)("AutoMod level 0 automatically holds messages containing commonly blocked terms for mods to review. If you enable this feature AutoMod won't hold these messages.", "AutoModSettings"))))))
                }, t.prototype.isBlankState = function() {
                    return !this.state.categories && !this.state.level
                }, t.prototype.AutomodTableFooter = function(e) {
                    return e ? o.createElement(y._35, {
                        border: !0,
                        padding: 2,
                        background: y.n.Alt2
                    }, o.createElement(y.Y, null, o.createElement(y.L, {
                        cols: 7
                    }, Object(s.d)("You can adjust how much moderation you'd like for your channel.", "AutoModSettings")), o.createElement(y.L, {
                        cols: 5
                    }, o.createElement(y._8, {
                        display: y.R.Flex,
                        fullHeight: !0,
                        flexDirection: y.T.Column,
                        justifyContent: y._7.Center,
                        alignItems: y.c.End
                    }, o.createElement(y.v, {
                        onClick: this.showAutoModCategories,
                        type: y.B.Hollow
                    }, Object(s.d)("See how rulesets work", "AutoModSettings")))))) : o.createElement(y._8, null, o.createElement(y._35, {
                        border: !0,
                        padding: {
                            y: 1,
                            x: 2
                        },
                        background: y.n.Alt2
                    }, o.createElement("a", {
                        href: "https://help.twitch.tv/customer/portal/articles/2662186-how-to-use-automod",
                        target: "_blank"
                    }, Object(s.d)("Learn more in our help page", "AutoModSettings"))), o.createElement(y._8, {
                        display: y.R.Flex,
                        padding: {
                            y: 1
                        },
                        margin: {
                            top: .5
                        }
                    }, o.createElement(y._8, {
                        padding: {
                            right: .5
                        }
                    }, o.createElement(y.v, {
                        onClick: this.updateAutoModProperties,
                        state: this.state.submissionState
                    }, Object(s.d)("Save", "AutoModSettings"))), o.createElement(y.v, {
                        onClick: this.resetAutoModProperties,
                        type: y.B.Text,
                        disabled: this.state.cancelDisabled
                    }, Object(s.d)("Cancel", "AutoModSettings"))))
                }, t.prototype.AutomodCategories = function(e) {
                    if (!e && 0 !== this.state.level && this.state.categories) {
                        var t = Object(s.d)("Identity language", "AutoModSettings"),
                            n = Object(s.d)("Referring to race, religion, gender, orientation, disability, or similar", "AutoModSettings"),
                            a = Object(s.d)("Sexually Explicit Language", "AutoModSettings"),
                            i = Object(s.d)("Referring to sexual acts, sexual content, and body parts", "AutoModSettings"),
                            r = Object(s.d)("Aggressive language", "AutoModSettings"),
                            d = Object(s.d)("Hostility towards other people, often associated with bullying", "AutoModSettings"),
                            l = Object(s.d)("Profanity", "AutoModSettings"),
                            c = Object(s.d)("Expletives, curse words, things you wouldn’t say to grandma", "AutoModSettings");
                        return o.createElement(y._35, {
                            borderLeft: !0,
                            borderRight: !0,
                            padding: 2,
                            background: y.n.Alt2,
                            "data-test-selector": "automod-categories-container"
                        }, o.createElement(y.Y, {
                            gutterSize: y.Z.Small
                        }, this.AutomodCategoryHeader(t, n), o.createElement(A, {
                            category: 1,
                            categoryLevel: this.state.categories[1],
                            onLevelChange: this.handleCategoryLevelChange
                        }), this.AutomodCategoryHeader(a, i), o.createElement(A, {
                            category: 3,
                            categoryLevel: this.state.categories[3],
                            onLevelChange: this.handleCategoryLevelChange
                        }), this.AutomodCategoryHeader(r, d), o.createElement(A, {
                            category: 0,
                            categoryLevel: this.state.categories[0],
                            onLevelChange: this.handleCategoryLevelChange
                        }), this.AutomodCategoryHeader(l, c), o.createElement(A, {
                            category: 2,
                            categoryLevel: this.state.categories[2],
                            onLevelChange: this.handleCategoryLevelChange
                        })))
                    }
                }, t.prototype.AutomodOnboarding = function() {
                    if (this.state.onboardingVisible) return o.createElement(y.Y, null, o.createElement(y.L, {
                        cols: 8
                    }, o.createElement(y._35, {
                        position: y._15.Relative,
                        border: !0,
                        color: y.K.Alt2,
                        padding: 2
                    }, o.createElement(y.Q, {
                        type: y._49.H4,
                        color: y.K.Link,
                        bold: !0
                    }, Object(s.d)("AutoMod Tip", "AutoModSettings")), o.createElement(y._8, {
                        padding: 1,
                        position: y._15.Absolute,
                        attachTop: !0,
                        attachRight: !0
                    }, o.createElement(y.v, {
                        type: y.B.Text,
                        icon: y._25.Close,
                        onClick: this.onCloseOnboarding
                    })), o.createElement(y.Q, {
                        color: y.K.Alt2,
                        type: y._49.Span
                    }, Object(s.d)("Did you know AutoMod catches misspelled words and evasion? N!ce try, pe0ple wh0 t@lk lik3 th!s.", "AutoModSettings")))))
                }, t.prototype.AutomodTableHeader = function() {
                    var e = Object(s.d)("AutoMod", "AutoModSettings"),
                        t = Object(s.d)("Automatically hold risky messages for moderators to review.", "AutoModSettings");
                    return o.createElement(y.C, {
                        border: !0,
                        row: !0
                    }, o.createElement(y._8, {
                        padding: {
                            y: 1,
                            x: 2
                        }
                    }, o.createElement(y._35, {
                        className: "auto-mod-wrapper__shield",
                        padding: {
                            y: .5,
                            x: .5
                        },
                        display: y.R.Flex,
                        color: y.K.Overlay
                    }, o.createElement(y._24, {
                        asset: y._25.Automod,
                        type: y._26.Inherit
                    }))), o.createElement(y._8, {
                        padding: {
                            y: 1,
                            right: 2
                        }
                    }, o.createElement(y.Q, null, e), o.createElement(y.Q, {
                        color: y.K.Alt2
                    }, t)))
                }, t.prototype.AutomodCategoryHeader = function(e, t) {
                    return o.createElement(y.L, {
                        cols: 6
                    }, o.createElement(y._8, {
                        padding: {
                            bottom: 1
                        }
                    }, o.createElement(y.Q, {
                        color: y.K.Alt2,
                        type: y._49.Strong
                    }, e), o.createElement(y.Q, {
                        color: y.K.Alt2,
                        type: y._49.P
                    }, t)))
                }, t.prototype.determineLevel = function(e) {
                    for (var t in [0, 1, 2, 3, 4])
                        if (e[0] === this.levelToAggro[t] && e[1] === this.levelToIdentity[t] && e[2] === this.levelToProfanity[t] && e[3] === this.levelToSex[t]) return Number(t);
                    return -1
                }, t.prototype.hasAutoModDashboardAccess = function() {
                    return this.props.data.user.self.isModerator || this.props.data.currentUser.roles.isStaff || this.props.data.currentUser.roles.isSiteAdmin || this.props.data.user.id === this.props.data.currentUser.id
                }, t.prototype.initializeStateFromBackend = function(e) {
                    if (e.data.user.autoModProperties) {
                        var t = [e.data.user.autoModProperties.aggressiveLevel, e.data.user.autoModProperties.identityLevel, e.data.user.autoModProperties.profanityLevel, e.data.user.autoModProperties.sexualLevel],
                            n = this.determineLevel(t),
                            a = -1 === n,
                            i = 0 === n;
                        this.setState({
                            categories: t,
                            initialCategories: t,
                            isCustom: a,
                            initialIsCustom: a,
                            level: n,
                            initialLevel: n,
                            onboardingVisible: i,
                            isDataLoaded: !0
                        })
                    }
                }, t.prototype.hasAutoModProperties = function(e) {
                    return e.data.user.autoModProperties
                }, t
            }(o.Component),
            w = Object(k.compose)(Object(h.d)("AutoModWrapper"), Object(b.a)(L, {
                options: function(e) {
                    return {
                        variables: {
                            channelLogin: e.channelLogin
                        }
                    }
                },
                skip: function(e) {
                    return !e.isLoggedIn
                }
            }), Object(b.a)(x, {
                name: "onUpdateAutoModProperties"
            }), Object(b.a)(D, {
                name: "onUpdateChatSettings"
            }))(P);
        var F = Object(g.b)(function(e) {
                return {
                    isLoggedIn: Object(v.d)(e)
                }
            })(w),
            B = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    return o.createElement(c.b, null, o.createElement(y._8, {
                        padding: 2,
                        position: y._15.Relative
                    }, o.createElement(y.Q, {
                        type: y._49.H3
                    }, Object(s.d)("Moderation Settings", "AutoModPage")), o.createElement(F, {
                        channelLogin: this.props.match.params.channelName
                    })))
                }, t
            }(o.Component),
            R = Object(l.d)(d.f, Object(h.d)("AutoModPage", {
                autoReportInteractive: !0,
                destination: m.a.DashboardSettingsAutoMod
            }), Object(u.a)({
                location: p.PageviewLocation.DashboardSettingsAutoMod
            }))(B);
        n.d(t, "AutoModPageComponent", function() {
            return B
        }), n.d(t, "AutoModPage", function() {
            return R
        })
    },
    UnGd: function(e, t) {
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
    YjTN: function(e, t) {
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
    l725: function(e, t) {},
    "q6J+": function(e, t) {
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
    qDOQ: function(e, t) {
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
    wQAG: function(e, t) {
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
    xJPR: function(e, t) {
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
    yxnG: function(e, t) {
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
    }
});
//# sourceMappingURL=pages.automod-bbe0afbed125f0cadfb974d7a32b8c83.js.map