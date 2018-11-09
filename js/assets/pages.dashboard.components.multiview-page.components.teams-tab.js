(window.webpackJsonp = window.webpackJsonp || []).push([
    [152], {
        "B+LW": function(e, t, a) {
            "use strict";
            var n = a("mrSG"),
                r = a("q1tI"),
                o = a("/MKj"),
                i = a("fvjX"),
                l = a("aCAx"),
                s = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.openModal = function() {
                            var e = t,
                                a = function(t) {
                                    function a() {
                                        return null !== t && t.apply(this, arguments) || this
                                    }
                                    return n.__extends(a, t), a.prototype.render = function() {
                                        return e.props.triggerModal(e.closeModal)
                                    }, a
                                }(r.Component);
                            t.props.showModal(a, {})
                        }, t.closeModal = function() {
                            t.props.closeModal()
                        }, t
                    }
                    return n.__extends(t, e), t.prototype.render = function() {
                        return this.props.children(this.openModal)
                    }, t
                }(r.Component);
            var c = Object(o.connect)(null, function(e) {
                return Object(i.bindActionCreators)({
                    showModal: l.d,
                    closeModal: l.c
                }, e)
            })(s);
            a.d(t, "a", function() {
                return c
            })
        },
        CS6u: function(e, t, a) {
            "use strict";
            var n = a("mrSG"),
                r = a("q1tI"),
                o = a("9rZX"),
                i = a("fvjX"),
                l = a("GnwI"),
                s = a("Ue10"),
                c = (a("xefp"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {}, t
                    }
                    return n.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        return r.createElement(o, {
                            overlayClassName: "modal__backdrop",
                            className: "modal__content",
                            isOpen: this.props.isOpen,
                            ariaHideApp: !1
                        }, r.createElement(s.Xa, {
                            className: "multiview-modal"
                        }, r.createElement(s.Eb, {
                            className: "multiview-modal__content",
                            padding: 4,
                            margin: {
                                top: 5
                            },
                            background: s.r.Base
                        }, this.props.children)))
                    }, t
                }(r.Component)),
                m = Object(i.compose)(Object(l.b)("MultiviewModal"))(c);
            a.d(t, !1, function() {
                return c
            }), a.d(t, "a", function() {
                return m
            })
        },
        Driw: function(e, t, a) {
            "use strict";
            var n, r = a("mrSG"),
                o = a("q1tI"),
                i = a("/7QA"),
                l = a("cZKs"),
                s = a("eJ65"),
                c = a("B+LW"),
                m = a("Ue10");
            ! function(e) {
                e.Edit = "more-balloon__edit", e.Delete = "more-balloon__delete", e.DeleteConfirm = "more-balloon__delete-confirm"
            }(n || (n = {}));
            var d = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.renderDeleteButton = function() {
                        if (t.props.onDelete) return t.props.deleteModalMessage ? o.createElement(c.a, {
                            triggerModal: t.renderDeleteModal
                        }, t.renderBaseDeleteButton) : t.renderBaseDeleteButton(t.props.onDelete)
                    }, t.renderBaseDeleteButton = function(e) {
                        return o.createElement(m.Ua, {
                            onClick: e,
                            "data-test-selector": n.Delete
                        }, o.createElement(m.Xa, {
                            className: "more-balloon__balloon-item",
                            padding: {
                                x: 1,
                                y: 1
                            },
                            display: m.X.Flex,
                            alignItems: m.f.Center
                        }, o.createElement(m.sb, {
                            asset: m.tb.Trash,
                            type: m.ub.Brand
                        }), o.createElement(m.Xa, {
                            margin: {
                                left: 1
                            }
                        }, Object(i.e)("Delete", "MultiviewMoreBalloon"))))
                    }, t.renderDeleteModal = function(e) {
                        if (t.props.deleteModalMessage) return o.createElement(m.Eb, {
                            background: m.r.Base,
                            className: "multiview-more-balloon__delete-prompt",
                            elevation: 3
                        }, o.createElement(m.Eb, {
                            borderBottom: !0,
                            display: m.X.Flex,
                            justifyContent: m.Wa.Center,
                            padding: 2
                        }, o.createElement(m.W, {
                            bold: !0,
                            fontSize: m.Ca.Size4
                        }, t.props.deleteModalMessage)), o.createElement(m.Eb, {
                            background: m.r.Alt,
                            display: m.X.Flex,
                            justifyContent: m.Wa.Center,
                            padding: 2
                        }, o.createElement(m.Xa, {
                            margin: {
                                right: .5
                            }
                        }, o.createElement(m.z, {
                            onClick: e,
                            type: m.F.Hollow
                        }, Object(i.e)("Cancel", "MultiviewMoreBalloon"))), o.createElement(m.Xa, {
                            margin: {
                                left: 1
                            }
                        }, o.createElement(m.z, {
                            "data-test-selector": n.DeleteConfirm,
                            onClick: t.onDeleteClick.bind(t, e)
                        }, Object(i.e)("Delete", "MultiviewMoreBalloon")))), o.createElement(l.a, {
                            closeOnBackdropClick: !0
                        }))
                    }, t.onDeleteClick = function(e) {
                        t.props.onDelete && t.props.onDelete(), e()
                    }, t
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    return o.createElement(m.Xa, {
                        margin: {
                            right: .5
                        }
                    }, o.createElement(s.a, null, o.createElement(m.z, {
                        icon: m.tb.More,
                        type: m.F.Text
                    }), o.createElement(m.u, {
                        direction: this.props.last ? m.v.TopRight : m.v.BottomRight,
                        tailOffset: 8
                    }, this.props.onEdit && o.createElement(m.Ua, {
                        onClick: this.props.onEdit,
                        "data-test-selector": n.Edit
                    }, o.createElement(m.Xa, {
                        className: "more-balloon__balloon-item",
                        padding: {
                            x: 1,
                            y: 1
                        },
                        display: m.X.Flex,
                        alignItems: m.f.Center
                    }, o.createElement(m.sb, {
                        asset: m.tb.Edit,
                        type: m.ub.Brand
                    }), o.createElement(m.Xa, {
                        margin: {
                            left: 1
                        }
                    }, Object(i.e)("Edit", "MultiviewMoreBalloon")))), this.renderDeleteButton())))
                }, t
            }(o.Component);
            a.d(t, !1, function() {
                return n
            }), a.d(t, "a", function() {
                return d
            })
        },
        il7S: function(e, t, a) {
            "use strict";
            var n, r;
            a.d(t, "a", function() {
                    return n
                }), a.d(t, "b", function() {
                    return r
                }),
                function(e) {
                    e.Group = "group", e.Team = "team", e.Player = "player", e.Role = "role"
                }(n || (n = {})),
                function(e) {
                    e.Group = "Group", e.Team = "team", e.Player = "Player", e.Role = "Role"
                }(r || (r = {}))
        },
        vD5X: function(e, t, a) {
            "use strict";
            a.r(t);
            var n, r = a("mrSG"),
                o = a("q1tI"),
                i = a("fvjX"),
                l = a("/7QA"),
                s = a("GnwI"),
                c = a("IFXb"),
                m = a("8/mp"),
                d = a("CS6u"),
                u = a("il7S"),
                p = a("Ue10");
            ! function(e) {
                e.Cancel = "edit-team-modal__cancel", e.Update = "edit-team-modal__update", e.Value = "edit-team-modal__value", e.ValueForm = "edit-team-modal__value-form"
            }(n || (n = {}));
            var f, b = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            isSaving: !1,
                            errorMessage: "",
                            team: {
                                __typename: "MultiviewContentAttribute",
                                id: "",
                                key: u.a.Team,
                                name: u.b.Team,
                                parentID: null,
                                parentKey: null,
                                value: "",
                                valueShortName: "",
                                imageURL: ""
                            }
                        }, t.onTeamNameChange = function(e) {
                            var a = e.target.value,
                                n = r.__assign({}, t.state.team, {
                                    value: a
                                });
                            t.setState({
                                team: n
                            })
                        }, t.validTeamName = function() {
                            return !!t.state.team.value
                        }, t.canSave = function() {
                            return !t.state.isSaving && t.validTeamName()
                        }, t.updateTeam = function() {
                            return r.__awaiter(t, void 0, void 0, function() {
                                var e, t;
                                return r.__generator(this, function(a) {
                                    switch (a.label) {
                                        case 0:
                                            if (!this.validTeamName()) return [2];
                                            this.setState({
                                                isSaving: !0
                                            }), e = "", a.label = 1;
                                        case 1:
                                            return a.trys.push([1, 3, , 4]), [4, this.props.updateTeam(this.state.team)];
                                        case 2:
                                            return a.sent(), [3, 4];
                                        case 3:
                                            return t = a.sent(), l.k.error(t, "Error updating team"), e = Object(l.e)("There was a problem saving this team", "EditTeamModal"), [3, 4];
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
                    return r.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.setState({
                            team: this.props.team
                        })
                    }, t.prototype.render = function() {
                        var e = this.state.team;
                        return o.createElement(d.a, {
                            isOpen: !0
                        }, o.createElement(p.Eb, {
                            display: p.X.Flex,
                            padding: {
                                bottom: 2
                            },
                            margin: {
                                bottom: 2
                            },
                            justifyContent: p.Wa.Between,
                            borderBottom: !0
                        }, o.createElement(p.Xa, {
                            flexGrow: 0,
                            flexShrink: 1
                        }, o.createElement(p.W, {
                            type: p.Vb.H3
                        }, Object(l.e)("Edit Team", "EditTeamModal"))), o.createElement(p.Xa, {
                            flexGrow: 0,
                            flexShrink: 0
                        }, o.createElement(p.z, {
                            onClick: this.props.onClose,
                            "data-test-selector": n.Cancel,
                            type: p.F.Text
                        }, Object(l.e)("Cancel", "EditTeamModal")), o.createElement(p.Xa, {
                            margin: {
                                left: 1
                            },
                            display: p.X.InlineBlock
                        }, o.createElement(p.z, {
                            onClick: this.updateTeam,
                            "data-test-selector": n.Update,
                            disabled: !this.canSave()
                        }, Object(l.e)("Update", "EditTeamModal"))))), o.createElement(p.Xa, {
                            margin: {
                                y: 1
                            }
                        }, this.state.errorMessage && o.createElement(p.Da, {
                            errorMessage: this.state.errorMessage
                        })), o.createElement(m.b, null, o.createElement(p.Xa, {
                            padding: {
                                right: 2
                            }
                        }, o.createElement(p.Ea, {
                            id: "team-name",
                            "data-test-selector": n.ValueForm,
                            label: Object(l.e)("Team Name", "EditTeamModal"),
                            error: !this.validTeamName(),
                            errorMessage: Object(l.e)("Invalid Team Name", "EditTeamModal")
                        }, o.createElement(p.Ra, {
                            type: p.Ta.Text,
                            "data-test-selector": n.Value,
                            onChange: this.onTeamNameChange,
                            value: e.value
                        })))))
                    }, t
                }(o.Component),
                g = a("Driw");
            (f || (f = {})).EmptyList = "teams-tab__empty-list";
            var h = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            isAddingTeam: !1,
                            addingTeamName: "",
                            errorMessage: "",
                            isSaving: !1
                        }, t.filteredTeamContentAttributes = function() {
                            return t.props.availableContentAttributes.filter(function(e) {
                                return e.key === u.a.Team
                            })
                        }, t.renderEditTeamModal = function() {
                            if (t.state.team) return o.createElement(b, {
                                team: t.state.team,
                                onClose: t.closeTeamModal,
                                updateTeam: t.updateTeam
                            })
                        }, t.startAddingNewTeam = function() {
                            t.setState({
                                isAddingTeam: !0,
                                addingTeamName: ""
                            })
                        }, t.cancelAddingTeam = function() {
                            t.setState({
                                isAddingTeam: !1
                            })
                        }, t.editTeam = function(e) {
                            t.setState({
                                team: e
                            })
                        }, t.closeTeamModal = function() {
                            t.setState({
                                team: void 0
                            })
                        }, t.onTeamNameChange = function(e) {
                            t.setState({
                                addingTeamName: e.target.value
                            })
                        }, t.validTeamName = function() {
                            return !!t.state.addingTeamName
                        }, t.createTeam = function() {
                            return r.__awaiter(t, void 0, void 0, function() {
                                var e, t;
                                return r.__generator(this, function(a) {
                                    switch (a.label) {
                                        case 0:
                                            if (!this.validTeamName()) return [2];
                                            this.setState({
                                                isSaving: !0
                                            }), e = "", a.label = 1;
                                        case 1:
                                            return a.trys.push([1, 3, , 4]), [4, this.props.createContentAttributes([{
                                                key: u.a.Team,
                                                name: u.b.Team,
                                                value: this.state.addingTeamName
                                            }])];
                                        case 2:
                                            return a.sent(), this.setState({
                                                isAddingTeam: !1
                                            }), [3, 4];
                                        case 3:
                                            return t = a.sent(), l.k.error(t, "Error creating team"), e = Object(l.e)("There was a problem creating this team", "TeamsTab"), [3, 4];
                                        case 4:
                                            return this.setState({
                                                isSaving: !1,
                                                errorMessage: e
                                            }), [2]
                                    }
                                })
                            })
                        }, t.updateTeam = function(e) {
                            return r.__awaiter(t, void 0, void 0, function() {
                                var t;
                                return r.__generator(this, function(a) {
                                    switch (a.label) {
                                        case 0:
                                            return t = r.__assign({
                                                ownerChannelID: this.props.channelID
                                            }, e), [4, this.props.updateContentAttributes([t])];
                                        case 1:
                                            return a.sent(), this.closeTeamModal(), [2]
                                    }
                                })
                            })
                        }, t.deleteTeam = function(e) {
                            return r.__awaiter(t, void 0, void 0, function() {
                                var t, a;
                                return r.__generator(this, function(n) {
                                    switch (n.label) {
                                        case 0:
                                            return n.trys.push([0, 2, , 3]), [4, this.props.deleteContentAttributes([e.id])];
                                        case 1:
                                            return n.sent(), [3, 3];
                                        case 2:
                                            return t = n.sent(), l.k.error(t, "Could not delete team"), a = Object(l.e)("There was a problem deleting this team", "TeamsTab"), this.setState({
                                                errorMessage: a
                                            }), [3, 3];
                                        case 3:
                                            return [2]
                                    }
                                })
                            })
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        var e = this,
                            t = this.filteredTeamContentAttributes();
                        return o.createElement(c.a, null, o.createElement(p.Eb, {
                            display: p.X.Flex,
                            justifyContent: p.Wa.Between,
                            padding: {
                                bottom: 1
                            },
                            margin: {
                                bottom: 1
                            },
                            borderBottom: !0
                        }, o.createElement(p.W, {
                            type: p.Vb.H4,
                            bold: !0
                        }, Object(l.e)("Teams", "TeamsTab")), o.createElement(p.Xa, null, o.createElement(p.z, {
                            icon: p.tb.Plus,
                            type: p.F.Hollow,
                            onClick: this.startAddingNewTeam
                        }, Object(l.e)("Add Team", "TeamsTab")))), o.createElement(p.Xa, {
                            margin: {
                                y: 1
                            }
                        }, this.state.errorMessage && o.createElement(p.Da, {
                            errorMessage: this.state.errorMessage
                        })), !t.length && o.createElement(p.W, {
                            "data-test-selector": f.EmptyList,
                            italic: !0
                        }, Object(l.e)("No Teams", "TeamsTab")), this.state.isAddingTeam && o.createElement(p.Eb, {
                            background: p.r.Base,
                            elevation: 1,
                            alignItems: p.f.Center,
                            justifyContent: p.Wa.Between,
                            display: p.X.Flex,
                            flexDirection: p.Aa.Row,
                            margin: {
                                bottom: 1
                            }
                        }, o.createElement(p.Xa, {
                            flexDirection: p.Aa.Column,
                            padding: 2,
                            flexGrow: 1
                        }, o.createElement(p.Ra, {
                            autoFocus: !0,
                            placeholder: Object(l.e)("Add Team Name", "TeamsTab"),
                            onChange: this.onTeamNameChange,
                            type: p.Ta.Text,
                            value: this.state.addingTeamName
                        })), o.createElement(p.z, {
                            type: p.F.Hollow,
                            onClick: this.cancelAddingTeam
                        }, Object(l.e)("Cancel", "TeamsTab")), o.createElement(p.Xa, {
                            margin: {
                                x: 1
                            },
                            display: p.X.InlineBlock
                        }, o.createElement(p.z, {
                            disabled: !this.validTeamName() || this.state.isSaving,
                            onClick: this.createTeam
                        }, Object(l.e)("Save", "TeamsTab")))), t.map(function(a, n) {
                            return o.createElement(p.Eb, {
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
                            }, o.createElement(p.Xa, {
                                flexDirection: p.Aa.Column,
                                padding: 2,
                                flexGrow: 1
                            }, o.createElement(p.W, {
                                fontSize: p.Ca.Size4
                            }, a.value)), o.createElement(g.a, {
                                onEdit: e.editTeam.bind(e, a),
                                onDelete: e.deleteTeam.bind(e, a),
                                deleteModalMessage: Object(l.e)("Are you sure you want to delete team: {value}?", {
                                    value: a.value
                                }, "TeamsTab"),
                                last: n === t.length - 1
                            }))
                        }), this.renderEditTeamModal())
                    }, t
                }(o.Component),
                T = Object(i.compose)(Object(s.b)("TeamsTab"))(h);
            a.d(t, "TestSelectors", function() {
                return f
            }), a.d(t, "TeamsTabComponent", function() {
                return h
            }), a.d(t, "TeamsTab", function() {
                return T
            })
        },
        xefp: function(e, t, a) {}
    }
]);