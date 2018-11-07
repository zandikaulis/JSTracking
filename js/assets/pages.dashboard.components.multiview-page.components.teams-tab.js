(window.webpackJsonp = window.webpackJsonp || []).push([
    [152], {
        CS6u: function(e, t, a) {
            "use strict";
            var n = a("mrSG"),
                r = a("q1tI"),
                i = a("9rZX"),
                o = a("fvjX"),
                l = a("GnwI"),
                m = a("Ue10"),
                s = (a("xefp"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {}, t
                    }
                    return n.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        return r.createElement(i, {
                            overlayClassName: "modal__backdrop",
                            className: "modal__content",
                            isOpen: this.props.isOpen,
                            ariaHideApp: !1
                        }, r.createElement(m.Xa, {
                            className: "multiview-modal"
                        }, r.createElement(m.Eb, {
                            className: "multiview-modal__content",
                            padding: 4,
                            margin: {
                                top: 5
                            },
                            background: m.r.Base
                        }, this.props.children)))
                    }, t
                }(r.Component)),
                c = Object(o.compose)(Object(l.b)("MultiviewModal"))(s);
            a.d(t, !1, function() {
                return s
            }), a.d(t, "a", function() {
                return c
            })
        },
        Driw: function(e, t, a) {
            "use strict";
            var n, r = a("q1tI"),
                i = a("/7QA"),
                o = a("eJ65"),
                l = a("Ue10");
            ! function(e) {
                e.Edit = "more-balloon__edit", e.Delete = "more-balloon__delete"
            }(n || (n = {}));
            var m = function(e) {
                return r.createElement(l.Xa, {
                    margin: {
                        right: .5
                    }
                }, r.createElement(o.a, null, r.createElement(l.z, {
                    icon: l.tb.More,
                    type: l.F.Text
                }), r.createElement(l.u, {
                    direction: l.v.BottomRight,
                    tailOffset: 8
                }, e.onEdit && r.createElement(l.Ua, {
                    onClick: e.onEdit,
                    "data-test-selector": n.Edit
                }, r.createElement(l.Xa, {
                    className: "chanlets-tab__balloon-item",
                    padding: {
                        x: 1,
                        y: 1
                    },
                    display: l.X.Flex,
                    alignItems: l.f.Center
                }, r.createElement(l.sb, {
                    asset: l.tb.Edit,
                    type: l.ub.Brand
                }), r.createElement(l.Xa, {
                    margin: {
                        left: 1
                    }
                }, Object(i.e)("Edit", "ChanletsGroup")))), e.onDelete && r.createElement(l.Ua, {
                    onClick: e.onDelete,
                    "data-test-selector": n.Delete
                }, r.createElement(l.Xa, {
                    className: "chanlets-tab__balloon-item",
                    padding: {
                        x: 1,
                        y: 1
                    },
                    display: l.X.Flex,
                    alignItems: l.f.Center
                }, r.createElement(l.sb, {
                    asset: l.tb.Trash,
                    type: l.ub.Brand
                }), r.createElement(l.Xa, {
                    margin: {
                        left: 1
                    }
                }, Object(i.e)("Delete", "ChanletsGroup")))))))
            };
            a.d(t, !1, function() {
                return n
            }), a.d(t, "a", function() {
                return m
            })
        },
        vD5X: function(e, t, a) {
            "use strict";
            a.r(t);
            var n, r = a("mrSG"),
                i = a("q1tI"),
                o = a("fvjX"),
                l = a("/7QA"),
                m = a("GnwI"),
                s = a("IFXb"),
                c = a("8/mp"),
                d = a("CS6u"),
                u = a("il7S"),
                p = a("Ue10");
            ! function(e) {
                e.Cancel = "edit-team-modal__cancel", e.Update = "edit-team-modal__update", e.Value = "edit-team-modal__value", e.ValueForm = "edit-team-modal__value-form"
            }(n || (n = {}));
            var T, b = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            isSaving: !1,
                            team: {
                                __typename: "MultiviewContentAttribute",
                                id: "",
                                key: u.a.Team,
                                name: u.b.Team,
                                parentID: null,
                                parentKey: null,
                                value: "",
                                valueShortName: ""
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
                                var e;
                                return r.__generator(this, function(t) {
                                    switch (t.label) {
                                        case 0:
                                            if (!this.validTeamName()) return [2];
                                            this.setState({
                                                isSaving: !0
                                            }), t.label = 1;
                                        case 1:
                                            return t.trys.push([1, 3, , 4]), [4, this.props.updateTeam(this.state.team)];
                                        case 2:
                                            return t.sent(), [3, 4];
                                        case 3:
                                            return e = t.sent(), l.k.error(e, "Error updating team"), [3, 4];
                                        case 4:
                                            return this.setState({
                                                isSaving: !1
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
                        return i.createElement(d.a, {
                            isOpen: !0
                        }, i.createElement(p.Eb, {
                            display: p.X.Flex,
                            padding: {
                                bottom: 2
                            },
                            margin: {
                                bottom: 2
                            },
                            justifyContent: p.Wa.Between,
                            borderBottom: !0
                        }, i.createElement(p.Xa, {
                            flexGrow: 0,
                            flexShrink: 1
                        }, i.createElement(p.W, {
                            type: p.Vb.H3
                        }, Object(l.e)("Edit Team", "EditTeamModal"))), i.createElement(p.Xa, {
                            flexGrow: 0,
                            flexShrink: 0
                        }, i.createElement(p.z, {
                            onClick: this.props.onClose,
                            "data-test-selector": n.Cancel,
                            type: p.F.Text
                        }, Object(l.e)("Cancel", "EditTeamModal")), i.createElement(p.Xa, {
                            margin: {
                                left: 1
                            },
                            display: p.X.InlineBlock
                        }, i.createElement(p.z, {
                            onClick: this.updateTeam,
                            "data-test-selector": n.Update,
                            disabled: !this.canSave()
                        }, Object(l.e)("Update", "EditTeamModal"))))), i.createElement(c.b, null, i.createElement(p.Xa, {
                            padding: {
                                right: 2
                            }
                        }, i.createElement(p.Ea, {
                            id: "team-name",
                            "data-test-selector": n.ValueForm,
                            label: Object(l.e)("Team Name", "EditTeamModal"),
                            error: !this.validTeamName(),
                            errorMessage: Object(l.e)("Invalid Team Name", "EditTeamModal")
                        }, i.createElement(p.Ra, {
                            type: p.Ta.Text,
                            "data-test-selector": n.Value,
                            onChange: this.onTeamNameChange,
                            value: e.value
                        })))))
                    }, t
                }(i.Component),
                f = a("Driw");
            (T || (T = {})).EmptyList = "teams-tab__empty-list";
            var E = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            isAddingTeam: !1,
                            addingTeamName: ""
                        }, t.filteredTeamContentAttributes = function() {
                            return t.props.availableContentAttributes.filter(function(e) {
                                return e.key === u.a.Team
                            })
                        }, t.renderEditTeamModal = function() {
                            if (t.state.team) return i.createElement(b, {
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
                            t.validTeamName() && (t.props.createContentAttributes([{
                                key: u.a.Team,
                                name: u.b.Team,
                                value: t.state.addingTeamName
                            }]), t.setState({
                                isAddingTeam: !1
                            }))
                        }, t.updateTeam = function(e) {
                            return r.__awaiter(t, void 0, void 0, function() {
                                var t;
                                return r.__generator(this, function(a) {
                                    switch (a.label) {
                                        case 0:
                                            return a.trys.push([0, 2, , 3]), [4, this.props.updateContentAttributes([e])];
                                        case 1:
                                            return a.sent(), [3, 3];
                                        case 2:
                                            return t = a.sent(), l.k.error(t, "Could not create team"), [3, 3];
                                        case 3:
                                            return this.closeTeamModal(), [2]
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
                        return i.createElement(s.a, null, i.createElement(p.Eb, {
                            display: p.X.Flex,
                            justifyContent: p.Wa.Between,
                            padding: {
                                bottom: 1
                            },
                            margin: {
                                bottom: 1
                            },
                            borderBottom: !0
                        }, i.createElement(p.W, {
                            type: p.Vb.H4,
                            bold: !0
                        }, Object(l.e)("Teams", "TeamsTab")), i.createElement(p.Xa, null, i.createElement(p.z, {
                            icon: p.tb.Plus,
                            type: p.F.Hollow,
                            onClick: this.startAddingNewTeam
                        }, Object(l.e)("Add Team", "TeamsTab")))), !t.length && i.createElement(p.W, {
                            "data-test-selector": T.EmptyList,
                            italic: !0
                        }, Object(l.e)("No Teams", "TeamsTab")), this.state.isAddingTeam && i.createElement(p.Eb, {
                            background: p.r.Base,
                            elevation: 1,
                            alignItems: p.f.Center,
                            justifyContent: p.Wa.Between,
                            display: p.X.Flex,
                            flexDirection: p.Aa.Row,
                            margin: {
                                bottom: 1
                            }
                        }, i.createElement(p.Xa, {
                            flexDirection: p.Aa.Column,
                            padding: 2,
                            flexGrow: 1
                        }, i.createElement(p.Ra, {
                            autoFocus: !0,
                            placeholder: Object(l.e)("Add Team Name", "TeamsTab"),
                            onChange: this.onTeamNameChange,
                            type: p.Ta.Text,
                            value: this.state.addingTeamName
                        })), i.createElement(p.z, {
                            type: p.F.Hollow,
                            onClick: this.cancelAddingTeam
                        }, Object(l.e)("Cancel", "TeamsTab")), i.createElement(p.Xa, {
                            margin: {
                                x: 1
                            },
                            display: p.X.InlineBlock
                        }, i.createElement(p.z, {
                            disabled: !this.validTeamName(),
                            onClick: this.createTeam
                        }, Object(l.e)("Save", "TeamsTab")))), t.map(function(t, a) {
                            return i.createElement(p.Eb, {
                                background: p.r.Base,
                                elevation: 1,
                                alignItems: p.f.Center,
                                justifyContent: p.Wa.Between,
                                display: p.X.Flex,
                                flexDirection: p.Aa.Row,
                                margin: {
                                    bottom: 1
                                },
                                key: a
                            }, i.createElement(p.Xa, {
                                flexDirection: p.Aa.Column,
                                padding: 2,
                                flexGrow: 1
                            }, i.createElement(p.W, {
                                fontSize: p.Ca.Size4
                            }, t.value)), i.createElement(f.a, {
                                onEdit: e.editTeam.bind(e, t)
                            }))
                        }), this.renderEditTeamModal())
                    }, t
                }(i.Component),
                g = Object(o.compose)(Object(m.b)("TeamsTab"))(E);
            a.d(t, "TestSelectors", function() {
                return T
            }), a.d(t, "TeamsTabComponent", function() {
                return E
            }), a.d(t, "TeamsTab", function() {
                return g
            })
        },
        xefp: function(e, t, a) {}
    }
]);