(window.webpackJsonp = window.webpackJsonp || []).push([
    [151], {
        "B+LW": function(e, t, n) {
            "use strict";
            var a = n("mrSG"),
                o = n("q1tI"),
                r = n("/MKj"),
                l = n("fvjX"),
                i = n("aCAx"),
                s = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.openModal = function() {
                            var e = t,
                                n = function(t) {
                                    function n() {
                                        return null !== t && t.apply(this, arguments) || this
                                    }
                                    return a.__extends(n, t), n.prototype.render = function() {
                                        return e.props.triggerModal(e.closeModal)
                                    }, n
                                }(o.Component);
                            t.props.showModal(n, {})
                        }, t.closeModal = function() {
                            t.props.closeModal()
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        return this.props.children(this.openModal)
                    }, t
                }(o.Component);
            var c = Object(r.connect)(null, function(e) {
                return Object(l.bindActionCreators)({
                    showModal: i.d,
                    closeModal: i.c
                }, e)
            })(s);
            n.d(t, "a", function() {
                return c
            })
        },
        CS6u: function(e, t, n) {
            "use strict";
            var a = n("mrSG"),
                o = n("q1tI"),
                r = n("9rZX"),
                l = n("fvjX"),
                i = n("GnwI"),
                s = n("Ue10"),
                c = (n("xefp"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {}, t
                    }
                    return a.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        return o.createElement(r, {
                            overlayClassName: "modal__backdrop",
                            className: "modal__content",
                            isOpen: this.props.isOpen,
                            ariaHideApp: !1
                        }, o.createElement(s.Ya, {
                            className: "multiview-modal"
                        }, o.createElement(s.Fb, {
                            className: "multiview-modal__content",
                            padding: 4,
                            margin: {
                                top: 5
                            },
                            background: s.r.Base
                        }, this.props.children)))
                    }, t
                }(o.Component)),
                d = Object(l.compose)(Object(i.b)("MultiviewModal"))(c);
            n.d(t, !1, function() {
                return c
            }), n.d(t, "a", function() {
                return d
            })
        },
        Driw: function(e, t, n) {
            "use strict";
            var a, o = n("mrSG"),
                r = n("q1tI"),
                l = n("/7QA"),
                i = n("cZKs"),
                s = n("eJ65"),
                c = n("B+LW"),
                d = n("Ue10");
            ! function(e) {
                e.Edit = "more-balloon__edit", e.Delete = "more-balloon__delete", e.DeleteConfirm = "more-balloon__delete-confirm"
            }(a || (a = {}));
            var u = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.renderDeleteButton = function() {
                        if (t.props.onDelete) return t.props.deleteModalMessage ? r.createElement(c.a, {
                            triggerModal: t.renderDeleteModal
                        }, t.renderBaseDeleteButton) : t.renderBaseDeleteButton(t.props.onDelete)
                    }, t.renderBaseDeleteButton = function(e) {
                        return r.createElement(d.Va, {
                            onClick: e,
                            "data-test-selector": a.Delete
                        }, r.createElement(d.Ya, {
                            className: "more-balloon__balloon-item",
                            padding: {
                                x: 1,
                                y: 1
                            },
                            display: d.X.Flex,
                            alignItems: d.f.Center
                        }, r.createElement(d.tb, {
                            asset: d.ub.Trash,
                            type: d.vb.Brand
                        }), r.createElement(d.Ya, {
                            margin: {
                                left: 1
                            }
                        }, Object(l.e)("Delete", "MultiviewMoreBalloon"))))
                    }, t.renderDeleteModal = function(e) {
                        if (t.props.deleteModalMessage) return r.createElement(d.Fb, {
                            background: d.r.Base,
                            className: "multiview-more-balloon__delete-prompt",
                            elevation: 3
                        }, r.createElement(d.Fb, {
                            borderBottom: !0,
                            display: d.X.Flex,
                            justifyContent: d.Xa.Center,
                            padding: 2
                        }, r.createElement(d.W, {
                            bold: !0,
                            fontSize: d.Ca.Size4
                        }, t.props.deleteModalMessage)), r.createElement(d.Fb, {
                            background: d.r.Alt,
                            display: d.X.Flex,
                            justifyContent: d.Xa.Center,
                            padding: 2
                        }, r.createElement(d.Ya, {
                            margin: {
                                right: .5
                            }
                        }, r.createElement(d.z, {
                            onClick: e,
                            type: d.F.Hollow
                        }, Object(l.e)("Cancel", "MultiviewMoreBalloon"))), r.createElement(d.Ya, {
                            margin: {
                                left: 1
                            }
                        }, r.createElement(d.z, {
                            "data-test-selector": a.DeleteConfirm,
                            onClick: t.onDeleteClick.bind(t, e)
                        }, Object(l.e)("Delete", "MultiviewMoreBalloon")))), r.createElement(i.a, {
                            closeOnBackdropClick: !0
                        }))
                    }, t.onDeleteClick = function(e) {
                        t.props.onDelete && t.props.onDelete(), e()
                    }, t
                }
                return o.__extends(t, e), t.prototype.render = function() {
                    return r.createElement(d.Ya, {
                        margin: {
                            right: .5
                        }
                    }, r.createElement(s.a, null, r.createElement(d.z, {
                        icon: d.ub.More,
                        type: d.F.Text
                    }), r.createElement(d.u, {
                        direction: this.props.last ? d.v.TopRight : d.v.BottomRight,
                        tailOffset: 8
                    }, this.props.onEdit && r.createElement(d.Va, {
                        onClick: this.props.onEdit,
                        "data-test-selector": a.Edit
                    }, r.createElement(d.Ya, {
                        className: "more-balloon__balloon-item",
                        padding: {
                            x: 1,
                            y: 1
                        },
                        display: d.X.Flex,
                        alignItems: d.f.Center
                    }, r.createElement(d.tb, {
                        asset: d.ub.Edit,
                        type: d.vb.Brand
                    }), r.createElement(d.Ya, {
                        margin: {
                            left: 1
                        }
                    }, Object(l.e)("Edit", "MultiviewMoreBalloon")))), this.renderDeleteButton())))
                }, t
            }(r.Component);
            n.d(t, !1, function() {
                return a
            }), n.d(t, "a", function() {
                return u
            })
        },
        il7S: function(e, t, n) {
            "use strict";
            var a, o;
            n.d(t, "a", function() {
                    return a
                }), n.d(t, "b", function() {
                    return o
                }),
                function(e) {
                    e.Group = "group", e.Team = "team", e.Player = "player", e.Role = "role"
                }(a || (a = {})),
                function(e) {
                    e.Group = "Group", e.Team = "team", e.Player = "Player", e.Role = "Role"
                }(o || (o = {}))
        },
        tgcK: function(e, t, n) {
            "use strict";
            n.r(t);
            var a, o = n("mrSG"),
                r = n("q1tI"),
                l = n("fvjX"),
                i = n("/7QA"),
                s = n("GnwI"),
                c = n("IFXb"),
                d = n("8/mp"),
                u = n("CS6u"),
                p = n("il7S"),
                m = n("Ue10");
            ! function(e) {
                e.Cancel = "edit-role-modal__cancel", e.Update = "edit-role-modal__update", e.Value = "edit-role-modal__value", e.ValueForm = "edit-role-modal__value-form"
            }(a || (a = {}));
            var f, b = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            isSaving: !1,
                            errorMessage: "",
                            role: {
                                __typename: "MultiviewContentAttribute",
                                id: "",
                                key: p.a.Role,
                                name: p.b.Role,
                                parentID: null,
                                parentKey: null,
                                value: "",
                                valueShortName: "",
                                imageURL: ""
                            }
                        }, t.onRoleNameChange = function(e) {
                            var n = e.target.value,
                                a = o.__assign({}, t.state.role, {
                                    value: n
                                });
                            t.setState({
                                role: a
                            })
                        }, t.validRoleName = function() {
                            return !!t.state.role.value
                        }, t.canSave = function() {
                            return !t.state.isSaving && t.validRoleName()
                        }, t.updateRole = function() {
                            return o.__awaiter(t, void 0, void 0, function() {
                                var e, t;
                                return o.__generator(this, function(n) {
                                    switch (n.label) {
                                        case 0:
                                            if (!this.validRoleName()) return [2];
                                            this.setState({
                                                isSaving: !0
                                            }), e = "", n.label = 1;
                                        case 1:
                                            return n.trys.push([1, 3, , 4]), [4, this.props.updateRole(this.state.role)];
                                        case 2:
                                            return n.sent(), [3, 4];
                                        case 3:
                                            return t = n.sent(), i.k.error(t, "Error updating role"), e = Object(i.e)("There was a problem saving this role", "EditRoleModal"), [3, 4];
                                        case 4:
                                            return this.setState({
                                                isSaving: !1,
                                                errorMessage: e
                                            }), [2]
                                    }
                                })
                            })
                        }, t
                    }
                    return o.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.setState({
                            role: this.props.role
                        })
                    }, t.prototype.render = function() {
                        var e = this.state.role;
                        return r.createElement(u.a, {
                            isOpen: !0
                        }, r.createElement(m.Fb, {
                            display: m.X.Flex,
                            padding: {
                                bottom: 2
                            },
                            margin: {
                                bottom: 2
                            },
                            justifyContent: m.Xa.Between,
                            borderBottom: !0
                        }, r.createElement(m.Ya, {
                            flexGrow: 0,
                            flexShrink: 1
                        }, r.createElement(m.W, {
                            type: m.Wb.H3
                        }, Object(i.e)("Edit Role", "EditRoleModal"))), r.createElement(m.Ya, {
                            flexGrow: 0,
                            flexShrink: 0
                        }, r.createElement(m.z, {
                            onClick: this.props.onClose,
                            "data-test-selector": a.Cancel,
                            type: m.F.Text
                        }, Object(i.e)("Cancel", "EditRoleModal")), r.createElement(m.Ya, {
                            margin: {
                                left: 1
                            },
                            display: m.X.InlineBlock
                        }, r.createElement(m.z, {
                            onClick: this.updateRole,
                            "data-test-selector": a.Update,
                            disabled: !this.canSave()
                        }, Object(i.e)("Update", "EditRoleModal"))))), r.createElement(m.Ya, {
                            margin: {
                                y: 1
                            }
                        }, this.state.errorMessage && r.createElement(m.Da, {
                            errorMessage: this.state.errorMessage
                        })), r.createElement(d.b, null, r.createElement(m.Ya, {
                            padding: {
                                right: 2
                            }
                        }, r.createElement(m.Ea, {
                            id: "role-name",
                            "data-test-selector": a.ValueForm,
                            label: Object(i.e)("Role Name", "EditRoleModal"),
                            error: !this.validRoleName(),
                            errorMessage: Object(i.e)("Invalid Role Name", "EditRoleModal")
                        }, r.createElement(m.Sa, {
                            type: m.Ua.Text,
                            "data-test-selector": a.Value,
                            onChange: this.onRoleNameChange,
                            value: e.value
                        })))))
                    }, t
                }(r.Component),
                g = n("Driw");
            ! function(e) {
                e.EmptyList = "roles-tab__empty-list", e.AddRow = "roles-tab__add-row", e.AddButton = "roles-tab__add-button"
            }(f || (f = {}));
            var h = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            isAddingRole: !1,
                            addingRoleName: "",
                            errorMessage: "",
                            isSaving: !1
                        }, t.filteredRoleContentAttributes = function() {
                            return t.props.availableContentAttributes.filter(function(e) {
                                return e.key === p.a.Role
                            })
                        }, t.renderEditRoleModal = function() {
                            if (t.state.role) return r.createElement(b, {
                                role: t.state.role,
                                onClose: t.closeRoleModal,
                                updateRole: t.updateRole
                            })
                        }, t.startAddingNewRole = function() {
                            t.setState({
                                isAddingRole: !0,
                                addingRoleName: ""
                            })
                        }, t.cancelAddingRole = function() {
                            t.setState({
                                isAddingRole: !1
                            })
                        }, t.editRole = function(e) {
                            t.setState({
                                role: e
                            })
                        }, t.closeRoleModal = function() {
                            t.setState({
                                role: void 0
                            })
                        }, t.onRoleNameChange = function(e) {
                            t.setState({
                                addingRoleName: e.target.value
                            })
                        }, t.validRoleName = function() {
                            return !!t.state.addingRoleName
                        }, t.createRole = function() {
                            return o.__awaiter(t, void 0, void 0, function() {
                                var e, t;
                                return o.__generator(this, function(n) {
                                    switch (n.label) {
                                        case 0:
                                            if (!this.validRoleName()) return [2];
                                            this.setState({
                                                isSaving: !0
                                            }), e = "", n.label = 1;
                                        case 1:
                                            return n.trys.push([1, 3, , 4]), [4, this.props.createContentAttributes([{
                                                key: p.a.Role,
                                                name: p.b.Role,
                                                value: this.state.addingRoleName
                                            }])];
                                        case 2:
                                            return n.sent(), this.setState({
                                                isAddingRole: !1
                                            }), [3, 4];
                                        case 3:
                                            return t = n.sent(), i.k.error(t, "Error creating role"), e = Object(i.e)("There was a problem creating this role", "RolesTab"), [3, 4];
                                        case 4:
                                            return this.setState({
                                                isSaving: !1,
                                                errorMessage: e
                                            }), [2]
                                    }
                                })
                            })
                        }, t.updateRole = function(e) {
                            return o.__awaiter(t, void 0, void 0, function() {
                                var t;
                                return o.__generator(this, function(n) {
                                    switch (n.label) {
                                        case 0:
                                            return t = o.__assign({
                                                ownerChannelID: this.props.channelID
                                            }, e), [4, this.props.updateContentAttributes([t])];
                                        case 1:
                                            return n.sent(), this.closeRoleModal(), [2]
                                    }
                                })
                            })
                        }, t.deleteRole = function(e) {
                            return o.__awaiter(t, void 0, void 0, function() {
                                var t, n;
                                return o.__generator(this, function(a) {
                                    switch (a.label) {
                                        case 0:
                                            return a.trys.push([0, 2, , 3]), [4, this.props.deleteContentAttributes([e.id])];
                                        case 1:
                                            return a.sent(), [3, 3];
                                        case 2:
                                            return t = a.sent(), i.k.error(t, "Could not delete role"), n = Object(i.e)("There was a problem deleting this role", "RolesTab"), this.setState({
                                                errorMessage: n
                                            }), [3, 3];
                                        case 3:
                                            return [2]
                                    }
                                })
                            })
                        }, t
                    }
                    return o.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        var e = this,
                            t = this.filteredRoleContentAttributes();
                        return r.createElement(c.a, null, r.createElement(m.Fb, {
                            display: m.X.Flex,
                            justifyContent: m.Xa.Between,
                            padding: {
                                bottom: 1
                            },
                            margin: {
                                bottom: 1
                            },
                            borderBottom: !0
                        }, r.createElement(m.W, {
                            type: m.Wb.H4,
                            bold: !0
                        }, Object(i.e)("Roles", "RolesTab")), r.createElement(m.Ya, null, r.createElement(m.z, {
                            "data-test-selector": f.AddButton,
                            icon: m.ub.Plus,
                            type: m.F.Hollow,
                            onClick: this.startAddingNewRole
                        }, Object(i.e)("Add Role", "RolesTab")))), r.createElement(m.Ya, {
                            margin: {
                                y: 1
                            }
                        }, this.state.errorMessage && r.createElement(m.Da, {
                            errorMessage: this.state.errorMessage
                        })), !t.length && r.createElement(m.W, {
                            "data-test-selector": f.EmptyList,
                            italic: !0
                        }, Object(i.e)("No Roles", "RolesTab")), this.state.isAddingRole && r.createElement(m.Fb, {
                            "data-test-selector": f.AddRow,
                            background: m.r.Base,
                            elevation: 1,
                            alignItems: m.f.Center,
                            justifyContent: m.Xa.Between,
                            display: m.X.Flex,
                            flexDirection: m.Aa.Row,
                            margin: {
                                bottom: 1
                            }
                        }, r.createElement(m.Ya, {
                            flexDirection: m.Aa.Column,
                            padding: 2,
                            flexGrow: 1
                        }, r.createElement(m.Sa, {
                            autoFocus: !0,
                            placeholder: Object(i.e)("Add Role Name", "RolesTab"),
                            onChange: this.onRoleNameChange,
                            type: m.Ua.Text,
                            value: this.state.addingRoleName
                        })), r.createElement(m.z, {
                            type: m.F.Hollow,
                            onClick: this.cancelAddingRole
                        }, Object(i.e)("Cancel", "RolesTab")), r.createElement(m.Ya, {
                            margin: {
                                x: 1
                            },
                            display: m.X.InlineBlock
                        }, r.createElement(m.z, {
                            disabled: !this.validRoleName() || this.state.isSaving,
                            onClick: this.createRole
                        }, Object(i.e)("Save", "RolesTab")))), t.map(function(t, n) {
                            return r.createElement(m.Fb, {
                                background: m.r.Base,
                                elevation: 1,
                                alignItems: m.f.Center,
                                justifyContent: m.Xa.Between,
                                display: m.X.Flex,
                                flexDirection: m.Aa.Row,
                                margin: {
                                    bottom: 1
                                },
                                key: n
                            }, r.createElement(m.Ya, {
                                flexDirection: m.Aa.Column,
                                padding: 2,
                                flexGrow: 1
                            }, r.createElement(m.W, {
                                fontSize: m.Ca.Size4
                            }, t.value)), r.createElement(g.a, {
                                onEdit: e.editRole.bind(e, t),
                                onDelete: e.deleteRole.bind(e, t),
                                deleteModalMessage: Object(i.e)("Are you sure you want to delete role: {value}?", {
                                    value: t.value
                                }, "RolesTab")
                            }))
                        }), this.renderEditRoleModal())
                    }, t
                }(r.Component),
                v = Object(l.compose)(Object(s.b)("RolesTab"))(h);
            n.d(t, "TestSelectors", function() {
                return f
            }), n.d(t, "RolesTabComponent", function() {
                return h
            }), n.d(t, "RolesTab", function() {
                return v
            })
        },
        xefp: function(e, t, n) {}
    }
]);