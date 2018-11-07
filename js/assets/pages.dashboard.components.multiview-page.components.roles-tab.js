(window.webpackJsonp = window.webpackJsonp || []).push([
    [153], {
        CS6u: function(e, t, n) {
            "use strict";
            var a = n("mrSG"),
                o = n("q1tI"),
                l = n("9rZX"),
                r = n("fvjX"),
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
                        return o.createElement(l, {
                            overlayClassName: "modal__backdrop",
                            className: "modal__content",
                            isOpen: this.props.isOpen,
                            ariaHideApp: !1
                        }, o.createElement(s.Xa, {
                            className: "multiview-modal"
                        }, o.createElement(s.Eb, {
                            className: "multiview-modal__content",
                            padding: 4,
                            margin: {
                                top: 5
                            },
                            background: s.r.Base
                        }, this.props.children)))
                    }, t
                }(o.Component)),
                d = Object(r.compose)(Object(i.b)("MultiviewModal"))(c);
            n.d(t, !1, function() {
                return c
            }), n.d(t, "a", function() {
                return d
            })
        },
        Driw: function(e, t, n) {
            "use strict";
            var a, o = n("q1tI"),
                l = n("/7QA"),
                r = n("eJ65"),
                i = n("Ue10");
            ! function(e) {
                e.Edit = "more-balloon__edit", e.Delete = "more-balloon__delete"
            }(a || (a = {}));
            var s = function(e) {
                return o.createElement(i.Xa, {
                    margin: {
                        right: .5
                    }
                }, o.createElement(r.a, null, o.createElement(i.z, {
                    icon: i.tb.More,
                    type: i.F.Text
                }), o.createElement(i.u, {
                    direction: i.v.BottomRight,
                    tailOffset: 8
                }, e.onEdit && o.createElement(i.Ua, {
                    onClick: e.onEdit,
                    "data-test-selector": a.Edit
                }, o.createElement(i.Xa, {
                    className: "chanlets-tab__balloon-item",
                    padding: {
                        x: 1,
                        y: 1
                    },
                    display: i.X.Flex,
                    alignItems: i.f.Center
                }, o.createElement(i.sb, {
                    asset: i.tb.Edit,
                    type: i.ub.Brand
                }), o.createElement(i.Xa, {
                    margin: {
                        left: 1
                    }
                }, Object(l.e)("Edit", "ChanletsGroup")))), e.onDelete && o.createElement(i.Ua, {
                    onClick: e.onDelete,
                    "data-test-selector": a.Delete
                }, o.createElement(i.Xa, {
                    className: "chanlets-tab__balloon-item",
                    padding: {
                        x: 1,
                        y: 1
                    },
                    display: i.X.Flex,
                    alignItems: i.f.Center
                }, o.createElement(i.sb, {
                    asset: i.tb.Trash,
                    type: i.ub.Brand
                }), o.createElement(i.Xa, {
                    margin: {
                        left: 1
                    }
                }, Object(l.e)("Delete", "ChanletsGroup")))))))
            };
            n.d(t, !1, function() {
                return a
            }), n.d(t, "a", function() {
                return s
            })
        },
        tgcK: function(e, t, n) {
            "use strict";
            n.r(t);
            var a, o = n("mrSG"),
                l = n("q1tI"),
                r = n("fvjX"),
                i = n("/7QA"),
                s = n("GnwI"),
                c = n("IFXb"),
                d = n("8/mp"),
                u = n("CS6u"),
                m = n("il7S"),
                p = n("Ue10");
            ! function(e) {
                e.Cancel = "edit-role-modal__cancel", e.Update = "edit-role-modal__update", e.Value = "edit-role-modal__value", e.ValueForm = "edit-role-modal__value-form"
            }(a || (a = {}));
            var b, f = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            isSaving: !1,
                            role: {
                                __typename: "MultiviewContentAttribute",
                                id: "",
                                key: m.a.Role,
                                name: m.b.Role,
                                parentID: null,
                                parentKey: null,
                                value: "",
                                valueShortName: ""
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
                                var e;
                                return o.__generator(this, function(t) {
                                    switch (t.label) {
                                        case 0:
                                            if (!this.validRoleName()) return [2];
                                            this.setState({
                                                isSaving: !0
                                            }), t.label = 1;
                                        case 1:
                                            return t.trys.push([1, 3, , 4]), [4, this.props.updateRole(this.state.role)];
                                        case 2:
                                            return t.sent(), [3, 4];
                                        case 3:
                                            return e = t.sent(), i.k.error(e, "Error updating role"), [3, 4];
                                        case 4:
                                            return this.setState({
                                                isSaving: !1
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
                        return l.createElement(u.a, {
                            isOpen: !0
                        }, l.createElement(p.Eb, {
                            display: p.X.Flex,
                            padding: {
                                bottom: 2
                            },
                            margin: {
                                bottom: 2
                            },
                            justifyContent: p.Wa.Between,
                            borderBottom: !0
                        }, l.createElement(p.Xa, {
                            flexGrow: 0,
                            flexShrink: 1
                        }, l.createElement(p.W, {
                            type: p.Vb.H3
                        }, Object(i.e)("Edit Role", "EditRoleModal"))), l.createElement(p.Xa, {
                            flexGrow: 0,
                            flexShrink: 0
                        }, l.createElement(p.z, {
                            onClick: this.props.onClose,
                            "data-test-selector": a.Cancel,
                            type: p.F.Text
                        }, Object(i.e)("Cancel", "EditRoleModal")), l.createElement(p.Xa, {
                            margin: {
                                left: 1
                            },
                            display: p.X.InlineBlock
                        }, l.createElement(p.z, {
                            onClick: this.updateRole,
                            "data-test-selector": a.Update,
                            disabled: !this.canSave()
                        }, Object(i.e)("Update", "EditRoleModal"))))), l.createElement(d.b, null, l.createElement(p.Xa, {
                            padding: {
                                right: 2
                            }
                        }, l.createElement(p.Ea, {
                            id: "role-name",
                            "data-test-selector": a.ValueForm,
                            label: Object(i.e)("Role Name", "EditRoleModal"),
                            error: !this.validRoleName(),
                            errorMessage: Object(i.e)("Invalid Role Name", "EditRoleModal")
                        }, l.createElement(p.Ra, {
                            type: p.Ta.Text,
                            "data-test-selector": a.Value,
                            onChange: this.onRoleNameChange,
                            value: e.value
                        })))))
                    }, t
                }(l.Component),
                R = n("Driw");
            (b || (b = {})).EmptyList = "roles-tab__empty-list";
            var E = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            isAddingRole: !1,
                            addingRoleName: ""
                        }, t.filteredRoleContentAttributes = function() {
                            return t.props.availableContentAttributes.filter(function(e) {
                                return e.key === m.a.Role
                            })
                        }, t.renderEditRoleModal = function() {
                            if (t.state.role) return l.createElement(f, {
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
                            t.validRoleName() && (t.props.createContentAttributes([{
                                key: m.a.Role,
                                name: m.b.Role,
                                value: t.state.addingRoleName
                            }]), t.setState({
                                isAddingRole: !1
                            }))
                        }, t.updateRole = function(e) {
                            return o.__awaiter(t, void 0, void 0, function() {
                                var t;
                                return o.__generator(this, function(n) {
                                    switch (n.label) {
                                        case 0:
                                            return n.trys.push([0, 2, , 3]), [4, this.props.updateContentAttributes([e])];
                                        case 1:
                                            return n.sent(), [3, 3];
                                        case 2:
                                            return t = n.sent(), i.k.error(t, "Could not create role"), [3, 3];
                                        case 3:
                                            return this.closeRoleModal(), [2]
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
                        return l.createElement(c.a, null, l.createElement(p.Eb, {
                            display: p.X.Flex,
                            justifyContent: p.Wa.Between,
                            padding: {
                                bottom: 1
                            },
                            margin: {
                                bottom: 1
                            },
                            borderBottom: !0
                        }, l.createElement(p.W, {
                            type: p.Vb.H4,
                            bold: !0
                        }, Object(i.e)("Roles", "RolesTab")), l.createElement(p.Xa, null, l.createElement(p.z, {
                            icon: p.tb.Plus,
                            type: p.F.Hollow,
                            onClick: this.startAddingNewRole
                        }, Object(i.e)("Add Role", "RolesTab")))), !t.length && l.createElement(p.W, {
                            "data-test-selector": b.EmptyList,
                            italic: !0
                        }, Object(i.e)("No Roles", "RolesTab")), this.state.isAddingRole && l.createElement(p.Eb, {
                            background: p.r.Base,
                            elevation: 1,
                            alignItems: p.f.Center,
                            justifyContent: p.Wa.Between,
                            display: p.X.Flex,
                            flexDirection: p.Aa.Row,
                            margin: {
                                bottom: 1
                            }
                        }, l.createElement(p.Xa, {
                            flexDirection: p.Aa.Column,
                            padding: 2,
                            flexGrow: 1
                        }, l.createElement(p.Ra, {
                            autoFocus: !0,
                            placeholder: Object(i.e)("Add Role Name", "RolesTab"),
                            onChange: this.onRoleNameChange,
                            type: p.Ta.Text,
                            value: this.state.addingRoleName
                        })), l.createElement(p.z, {
                            type: p.F.Hollow,
                            onClick: this.cancelAddingRole
                        }, Object(i.e)("Cancel", "RolesTab")), l.createElement(p.Xa, {
                            margin: {
                                x: 1
                            },
                            display: p.X.InlineBlock
                        }, l.createElement(p.z, {
                            disabled: !this.validRoleName(),
                            onClick: this.createRole
                        }, Object(i.e)("Save", "RolesTab")))), t.map(function(t, n) {
                            return l.createElement(p.Eb, {
                                background: p.r.Base,
                                elevation: 1,
                                alignItems: p.f.Center,
                                justifyContent: p.Wa.Between,
                                display: p.X.Flex,
                                flexDirection: p.Aa.Row,
                                margin: {
                                    bottom: 1
                                },
                                key: n
                            }, l.createElement(p.Xa, {
                                flexDirection: p.Aa.Column,
                                padding: 2,
                                flexGrow: 1
                            }, l.createElement(p.W, {
                                fontSize: p.Ca.Size4
                            }, t.value)), l.createElement(R.a, {
                                onEdit: e.editRole.bind(e, t)
                            }))
                        }), this.renderEditRoleModal())
                    }, t
                }(l.Component),
                g = Object(r.compose)(Object(s.b)("RolesTab"))(E);
            n.d(t, "TestSelectors", function() {
                return b
            }), n.d(t, "RolesTabComponent", function() {
                return E
            }), n.d(t, "RolesTab", function() {
                return g
            })
        },
        xefp: function(e, t, n) {}
    }
]);