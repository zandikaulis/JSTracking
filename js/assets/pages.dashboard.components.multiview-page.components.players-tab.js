(window.webpackJsonp = window.webpackJsonp || []).push([
    [154], {
        "B+LW": function(e, t, a) {
            "use strict";
            var r = a("mrSG"),
                n = a("q1tI"),
                l = a("/MKj"),
                o = a("fvjX"),
                i = a("aCAx"),
                s = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.openModal = function() {
                            var e = t,
                                a = function(t) {
                                    function a() {
                                        return null !== t && t.apply(this, arguments) || this
                                    }
                                    return r.__extends(a, t), a.prototype.render = function() {
                                        return e.props.triggerModal(e.closeModal)
                                    }, a
                                }(n.Component);
                            t.props.showModal(a, {})
                        }, t.closeModal = function() {
                            t.props.closeModal()
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        return this.props.children(this.openModal)
                    }, t
                }(n.Component);
            var c = Object(l.connect)(null, function(e) {
                return Object(o.bindActionCreators)({
                    showModal: i.d,
                    closeModal: i.c
                }, e)
            })(s);
            a.d(t, "a", function() {
                return c
            })
        },
        CS6u: function(e, t, a) {
            "use strict";
            var r = a("mrSG"),
                n = a("q1tI"),
                l = a("9rZX"),
                o = a("fvjX"),
                i = a("GnwI"),
                s = a("Ue10"),
                c = (a("xefp"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {}, t
                    }
                    return r.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        return n.createElement(l, {
                            overlayClassName: "modal__backdrop",
                            className: "modal__content",
                            isOpen: this.props.isOpen,
                            ariaHideApp: !1
                        }, n.createElement(s.Xa, {
                            className: "multiview-modal"
                        }, n.createElement(s.Eb, {
                            className: "multiview-modal__content",
                            padding: 4,
                            margin: {
                                top: 5
                            },
                            background: s.r.Base
                        }, this.props.children)))
                    }, t
                }(n.Component)),
                d = Object(o.compose)(Object(i.b)("MultiviewModal"))(c);
            a.d(t, !1, function() {
                return c
            }), a.d(t, "a", function() {
                return d
            })
        },
        Driw: function(e, t, a) {
            "use strict";
            var r, n = a("mrSG"),
                l = a("q1tI"),
                o = a("/7QA"),
                i = a("cZKs"),
                s = a("eJ65"),
                c = a("B+LW"),
                d = a("Ue10");
            ! function(e) {
                e.Edit = "more-balloon__edit", e.Delete = "more-balloon__delete", e.DeleteConfirm = "more-balloon__delete-confirm"
            }(r || (r = {}));
            var u = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.renderDeleteButton = function() {
                        if (t.props.onDelete) return t.props.deleteModalMessage ? l.createElement(c.a, {
                            triggerModal: t.renderDeleteModal
                        }, t.renderBaseDeleteButton) : t.renderBaseDeleteButton(t.props.onDelete)
                    }, t.renderBaseDeleteButton = function(e) {
                        return l.createElement(d.Ua, {
                            onClick: e,
                            "data-test-selector": r.Delete
                        }, l.createElement(d.Xa, {
                            className: "more-balloon__balloon-item",
                            padding: {
                                x: 1,
                                y: 1
                            },
                            display: d.X.Flex,
                            alignItems: d.f.Center
                        }, l.createElement(d.sb, {
                            asset: d.tb.Trash,
                            type: d.ub.Brand
                        }), l.createElement(d.Xa, {
                            margin: {
                                left: 1
                            }
                        }, Object(o.e)("Delete", "MultiviewMoreBalloon"))))
                    }, t.renderDeleteModal = function(e) {
                        if (t.props.deleteModalMessage) return l.createElement(d.Eb, {
                            background: d.r.Base,
                            className: "multiview-more-balloon__delete-prompt",
                            elevation: 3
                        }, l.createElement(d.Eb, {
                            borderBottom: !0,
                            display: d.X.Flex,
                            justifyContent: d.Wa.Center,
                            padding: 2
                        }, l.createElement(d.W, {
                            bold: !0,
                            fontSize: d.Ca.Size4
                        }, t.props.deleteModalMessage)), l.createElement(d.Eb, {
                            background: d.r.Alt,
                            display: d.X.Flex,
                            justifyContent: d.Wa.Center,
                            padding: 2
                        }, l.createElement(d.Xa, {
                            margin: {
                                right: .5
                            }
                        }, l.createElement(d.z, {
                            onClick: e,
                            type: d.F.Hollow
                        }, Object(o.e)("Cancel", "MultiviewMoreBalloon"))), l.createElement(d.Xa, {
                            margin: {
                                left: 1
                            }
                        }, l.createElement(d.z, {
                            "data-test-selector": r.DeleteConfirm,
                            onClick: t.onDeleteClick.bind(t, e)
                        }, Object(o.e)("Delete", "MultiviewMoreBalloon")))), l.createElement(i.a, {
                            closeOnBackdropClick: !0
                        }))
                    }, t.onDeleteClick = function(e) {
                        t.props.onDelete && t.props.onDelete(), e()
                    }, t
                }
                return n.__extends(t, e), t.prototype.render = function() {
                    return l.createElement(d.Xa, {
                        margin: {
                            right: .5
                        }
                    }, l.createElement(s.a, null, l.createElement(d.z, {
                        icon: d.tb.More,
                        type: d.F.Text
                    }), l.createElement(d.u, {
                        direction: this.props.last ? d.v.TopRight : d.v.BottomRight,
                        tailOffset: 8
                    }, this.props.onEdit && l.createElement(d.Ua, {
                        onClick: this.props.onEdit,
                        "data-test-selector": r.Edit
                    }, l.createElement(d.Xa, {
                        className: "more-balloon__balloon-item",
                        padding: {
                            x: 1,
                            y: 1
                        },
                        display: d.X.Flex,
                        alignItems: d.f.Center
                    }, l.createElement(d.sb, {
                        asset: d.tb.Edit,
                        type: d.ub.Brand
                    }), l.createElement(d.Xa, {
                        margin: {
                            left: 1
                        }
                    }, Object(o.e)("Edit", "MultiviewMoreBalloon")))), this.renderDeleteButton())))
                }, t
            }(l.Component);
            a.d(t, !1, function() {
                return r
            }), a.d(t, "a", function() {
                return u
            })
        },
        il7S: function(e, t, a) {
            "use strict";
            var r, n;
            a.d(t, "a", function() {
                    return r
                }), a.d(t, "b", function() {
                    return n
                }),
                function(e) {
                    e.Group = "group", e.Team = "team", e.Player = "player", e.Role = "role"
                }(r || (r = {})),
                function(e) {
                    e.Group = "Group", e.Team = "team", e.Player = "Player", e.Role = "Role"
                }(n || (n = {}))
        },
        iw5t: function(e, t, a) {
            "use strict";
            a.r(t);
            var r, n = a("mrSG"),
                l = a("q1tI"),
                o = a("fvjX"),
                i = a("/7QA"),
                s = a("GnwI"),
                c = a("IFXb"),
                d = a("8/mp"),
                u = a("CS6u"),
                p = a("il7S"),
                m = a("Ue10");
            ! function(e) {
                e.Cancel = "edit-player-modal__cancel", e.Update = "edit-player-modal__update", e.Value = "edit-player-modal__value", e.ValueForm = "edit-player-modal__value-form"
            }(r || (r = {}));
            var y, f = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            isSaving: !1,
                            errorMessage: "",
                            player: {
                                __typename: "MultiviewContentAttribute",
                                id: "",
                                key: p.a.Player,
                                name: p.b.Player,
                                parentID: null,
                                parentKey: null,
                                value: "",
                                valueShortName: "",
                                imageURL: ""
                            }
                        }, t.onPlayerNameChange = function(e) {
                            var a = e.target.value,
                                r = n.__assign({}, t.state.player, {
                                    value: a
                                });
                            t.setState({
                                player: r
                            })
                        }, t.validPlayerName = function() {
                            return !!t.state.player.value
                        }, t.canSave = function() {
                            return !t.state.isSaving && t.validPlayerName()
                        }, t.updatePlayer = function() {
                            return n.__awaiter(t, void 0, void 0, function() {
                                var e, t;
                                return n.__generator(this, function(a) {
                                    switch (a.label) {
                                        case 0:
                                            if (!this.validPlayerName()) return [2];
                                            this.setState({
                                                isSaving: !0
                                            }), e = "", a.label = 1;
                                        case 1:
                                            return a.trys.push([1, 3, , 4]), [4, this.props.updatePlayer(this.state.player)];
                                        case 2:
                                            return a.sent(), [3, 4];
                                        case 3:
                                            return t = a.sent(), i.k.error(t, "Error updating player"), e = Object(i.e)("There was a problem saving this player", "EditPlayerModal"), [3, 4];
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
                    return n.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.setState({
                            player: this.props.player
                        })
                    }, t.prototype.render = function() {
                        var e = this.state.player;
                        return l.createElement(u.a, {
                            isOpen: !0
                        }, l.createElement(m.Eb, {
                            display: m.X.Flex,
                            padding: {
                                bottom: 2
                            },
                            margin: {
                                bottom: 2
                            },
                            justifyContent: m.Wa.Between,
                            borderBottom: !0
                        }, l.createElement(m.Xa, {
                            flexGrow: 0,
                            flexShrink: 1
                        }, l.createElement(m.W, {
                            type: m.Vb.H3
                        }, Object(i.e)("Edit Player", "EditPlayerModal"))), l.createElement(m.Xa, {
                            flexGrow: 0,
                            flexShrink: 0
                        }, l.createElement(m.z, {
                            onClick: this.props.onClose,
                            "data-test-selector": r.Cancel,
                            type: m.F.Text
                        }, Object(i.e)("Cancel", "EditPlayerModal")), l.createElement(m.Xa, {
                            margin: {
                                left: 1
                            },
                            display: m.X.InlineBlock
                        }, l.createElement(m.z, {
                            onClick: this.updatePlayer,
                            "data-test-selector": r.Update,
                            disabled: !this.canSave()
                        }, Object(i.e)("Update", "EditPlayerModal"))))), l.createElement(m.Xa, {
                            margin: {
                                y: 1
                            }
                        }, this.state.errorMessage && l.createElement(m.Da, {
                            errorMessage: this.state.errorMessage
                        })), l.createElement(d.b, null, l.createElement(m.Xa, {
                            padding: {
                                right: 2
                            }
                        }, l.createElement(m.Ea, {
                            id: "player-name",
                            "data-test-selector": r.ValueForm,
                            label: Object(i.e)("Player Name", "EditPlayerModal"),
                            error: !this.validPlayerName(),
                            errorMessage: Object(i.e)("Invalid Player Name", "EditPlayerModal")
                        }, l.createElement(m.Ra, {
                            type: m.Ta.Text,
                            "data-test-selector": r.Value,
                            onChange: this.onPlayerNameChange,
                            value: e.value
                        })))))
                    }, t
                }(l.Component),
                b = a("Driw");
            ! function(e) {
                e.EmptyList = "players-tab__empty-list", e.AddRow = "players-tab__add-row", e.AddButton = "players-tab__add-button"
            }(y || (y = {}));
            var g = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            isAddingPlayer: !1,
                            addingPlayerName: "",
                            errorMessage: "",
                            isSaving: !1
                        }, t.filteredPlayerContentAttributes = function() {
                            return t.props.availableContentAttributes.filter(function(e) {
                                return e.key === p.a.Player
                            })
                        }, t.renderEditPlayerModal = function() {
                            if (t.state.player) return l.createElement(f, {
                                player: t.state.player,
                                onClose: t.closePlayerModal,
                                updatePlayer: t.updatePlayer
                            })
                        }, t.startAddingNewPlayer = function() {
                            t.setState({
                                isAddingPlayer: !0,
                                addingPlayerName: ""
                            })
                        }, t.cancelAddingPlayer = function() {
                            t.setState({
                                isAddingPlayer: !1
                            })
                        }, t.editPlayer = function(e) {
                            t.setState({
                                player: e
                            })
                        }, t.closePlayerModal = function() {
                            t.setState({
                                player: void 0
                            })
                        }, t.onPlayerNameChange = function(e) {
                            t.setState({
                                addingPlayerName: e.target.value
                            })
                        }, t.validPlayerName = function() {
                            return !!t.state.addingPlayerName
                        }, t.createPlayer = function() {
                            return n.__awaiter(t, void 0, void 0, function() {
                                var e, t;
                                return n.__generator(this, function(a) {
                                    switch (a.label) {
                                        case 0:
                                            if (!this.validPlayerName()) return [2];
                                            this.setState({
                                                isSaving: !0
                                            }), e = "", a.label = 1;
                                        case 1:
                                            return a.trys.push([1, 3, , 4]), [4, this.props.createContentAttributes([{
                                                key: p.a.Player,
                                                name: p.b.Player,
                                                value: this.state.addingPlayerName
                                            }])];
                                        case 2:
                                            return a.sent(), this.setState({
                                                isAddingPlayer: !1
                                            }), [3, 4];
                                        case 3:
                                            return t = a.sent(), i.k.error(t, "Error creating player"), e = Object(i.e)("There was a problem creating this player", "PlayersTab"), [3, 4];
                                        case 4:
                                            return this.setState({
                                                isSaving: !1,
                                                errorMessage: e
                                            }), [2]
                                    }
                                })
                            })
                        }, t.updatePlayer = function(e) {
                            return n.__awaiter(t, void 0, void 0, function() {
                                var t;
                                return n.__generator(this, function(a) {
                                    switch (a.label) {
                                        case 0:
                                            return t = n.__assign({
                                                ownerChannelID: this.props.channelID
                                            }, e), [4, this.props.updateContentAttributes([t])];
                                        case 1:
                                            return a.sent(), this.closePlayerModal(), [2]
                                    }
                                })
                            })
                        }, t.deletePlayer = function(e) {
                            return n.__awaiter(t, void 0, void 0, function() {
                                var t, a;
                                return n.__generator(this, function(r) {
                                    switch (r.label) {
                                        case 0:
                                            return r.trys.push([0, 2, , 3]), [4, this.props.deleteContentAttributes([e.id])];
                                        case 1:
                                            return r.sent(), [3, 3];
                                        case 2:
                                            return t = r.sent(), i.k.error(t, "Could not delete player"), a = Object(i.e)("There was a problem deleting this player", "PlayersTab"), this.setState({
                                                errorMessage: a
                                            }), [3, 3];
                                        case 3:
                                            return [2]
                                    }
                                })
                            })
                        }, t
                    }
                    return n.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        var e = this,
                            t = this.filteredPlayerContentAttributes();
                        return l.createElement(c.a, null, l.createElement(m.Eb, {
                            display: m.X.Flex,
                            justifyContent: m.Wa.Between,
                            padding: {
                                bottom: 1
                            },
                            margin: {
                                bottom: 1
                            },
                            borderBottom: !0
                        }, l.createElement(m.W, {
                            type: m.Vb.H4,
                            bold: !0
                        }, Object(i.e)("Players", "PlayersTab")), l.createElement(m.Xa, null, l.createElement(m.z, {
                            "data-test-selector": y.AddButton,
                            icon: m.tb.Plus,
                            type: m.F.Hollow,
                            onClick: this.startAddingNewPlayer
                        }, Object(i.e)("Add Player", "PlayersTab")))), l.createElement(m.Xa, {
                            margin: {
                                y: 1
                            }
                        }, this.state.errorMessage && l.createElement(m.Da, {
                            errorMessage: this.state.errorMessage
                        })), !t.length && l.createElement(m.W, {
                            "data-test-selector": y.EmptyList,
                            italic: !0
                        }, Object(i.e)("No Players", "PlayersTab")), this.state.isAddingPlayer && l.createElement(m.Eb, {
                            "data-test-selector": y.AddRow,
                            background: m.r.Base,
                            elevation: 1,
                            alignItems: m.f.Center,
                            justifyContent: m.Wa.Between,
                            display: m.X.Flex,
                            flexDirection: m.Aa.Row,
                            margin: {
                                bottom: 1
                            }
                        }, l.createElement(m.Xa, {
                            flexDirection: m.Aa.Column,
                            padding: 2,
                            flexGrow: 1
                        }, l.createElement(m.Ra, {
                            autoFocus: !0,
                            placeholder: Object(i.e)("Add Player Name", "PlayersTab"),
                            onChange: this.onPlayerNameChange,
                            type: m.Ta.Text,
                            value: this.state.addingPlayerName
                        })), l.createElement(m.z, {
                            type: m.F.Hollow,
                            onClick: this.cancelAddingPlayer
                        }, Object(i.e)("Cancel", "PlayersTab")), l.createElement(m.Xa, {
                            margin: {
                                x: 1
                            },
                            display: m.X.InlineBlock
                        }, l.createElement(m.z, {
                            disabled: !this.validPlayerName() || this.state.isSaving,
                            onClick: this.createPlayer
                        }, Object(i.e)("Save", "PlayersTab")))), t.map(function(t, a) {
                            return l.createElement(m.Eb, {
                                background: m.r.Base,
                                elevation: 1,
                                alignItems: m.f.Center,
                                justifyContent: m.Wa.Between,
                                display: m.X.Flex,
                                flexDirection: m.Aa.Row,
                                margin: {
                                    bottom: 1
                                },
                                key: a
                            }, l.createElement(m.Xa, {
                                flexDirection: m.Aa.Column,
                                padding: 2,
                                flexGrow: 1
                            }, l.createElement(m.W, {
                                fontSize: m.Ca.Size4
                            }, t.value)), l.createElement(b.a, {
                                onEdit: e.editPlayer.bind(e, t),
                                onDelete: e.deletePlayer.bind(e, t),
                                deleteModalMessage: Object(i.e)("Are you sure you want to delete player: {value}?", {
                                    value: t.value
                                }, "PlayersTab")
                            }))
                        }), this.renderEditPlayerModal())
                    }, t
                }(l.Component),
                h = Object(o.compose)(Object(s.b)("PlayersTab"))(g);
            a.d(t, "TestSelectors", function() {
                return y
            }), a.d(t, "PlayersTabComponent", function() {
                return g
            }), a.d(t, "PlayersTab", function() {
                return h
            })
        },
        xefp: function(e, t, a) {}
    }
]);