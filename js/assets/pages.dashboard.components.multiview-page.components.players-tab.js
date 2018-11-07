(window.webpackJsonp = window.webpackJsonp || []).push([
    [154], {
        CS6u: function(e, t, a) {
            "use strict";
            var n = a("mrSG"),
                r = a("q1tI"),
                l = a("9rZX"),
                i = a("fvjX"),
                o = a("GnwI"),
                s = a("Ue10"),
                c = (a("xefp"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {}, t
                    }
                    return n.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        return r.createElement(l, {
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
                d = Object(i.compose)(Object(o.b)("MultiviewModal"))(c);
            a.d(t, !1, function() {
                return c
            }), a.d(t, "a", function() {
                return d
            })
        },
        Driw: function(e, t, a) {
            "use strict";
            var n, r = a("q1tI"),
                l = a("/7QA"),
                i = a("eJ65"),
                o = a("Ue10");
            ! function(e) {
                e.Edit = "more-balloon__edit", e.Delete = "more-balloon__delete"
            }(n || (n = {}));
            var s = function(e) {
                return r.createElement(o.Xa, {
                    margin: {
                        right: .5
                    }
                }, r.createElement(i.a, null, r.createElement(o.z, {
                    icon: o.tb.More,
                    type: o.F.Text
                }), r.createElement(o.u, {
                    direction: o.v.BottomRight,
                    tailOffset: 8
                }, e.onEdit && r.createElement(o.Ua, {
                    onClick: e.onEdit,
                    "data-test-selector": n.Edit
                }, r.createElement(o.Xa, {
                    className: "chanlets-tab__balloon-item",
                    padding: {
                        x: 1,
                        y: 1
                    },
                    display: o.X.Flex,
                    alignItems: o.f.Center
                }, r.createElement(o.sb, {
                    asset: o.tb.Edit,
                    type: o.ub.Brand
                }), r.createElement(o.Xa, {
                    margin: {
                        left: 1
                    }
                }, Object(l.e)("Edit", "ChanletsGroup")))), e.onDelete && r.createElement(o.Ua, {
                    onClick: e.onDelete,
                    "data-test-selector": n.Delete
                }, r.createElement(o.Xa, {
                    className: "chanlets-tab__balloon-item",
                    padding: {
                        x: 1,
                        y: 1
                    },
                    display: o.X.Flex,
                    alignItems: o.f.Center
                }, r.createElement(o.sb, {
                    asset: o.tb.Trash,
                    type: o.ub.Brand
                }), r.createElement(o.Xa, {
                    margin: {
                        left: 1
                    }
                }, Object(l.e)("Delete", "ChanletsGroup")))))))
            };
            a.d(t, !1, function() {
                return n
            }), a.d(t, "a", function() {
                return s
            })
        },
        iw5t: function(e, t, a) {
            "use strict";
            a.r(t);
            var n, r = a("mrSG"),
                l = a("q1tI"),
                i = a("fvjX"),
                o = a("/7QA"),
                s = a("GnwI"),
                c = a("IFXb"),
                d = a("8/mp"),
                u = a("CS6u"),
                y = a("il7S"),
                p = a("Ue10");
            ! function(e) {
                e.Cancel = "edit-player-modal__cancel", e.Update = "edit-player-modal__update", e.Value = "edit-player-modal__value", e.ValueForm = "edit-player-modal__value-form"
            }(n || (n = {}));
            var m, b = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            isSaving: !1,
                            player: {
                                __typename: "MultiviewContentAttribute",
                                id: "",
                                key: y.a.Player,
                                name: y.b.Player,
                                parentID: null,
                                parentKey: null,
                                value: "",
                                valueShortName: ""
                            }
                        }, t.onPlayerNameChange = function(e) {
                            var a = e.target.value,
                                n = r.__assign({}, t.state.player, {
                                    value: a
                                });
                            t.setState({
                                player: n
                            })
                        }, t.validPlayerName = function() {
                            return !!t.state.player.value
                        }, t.canSave = function() {
                            return !t.state.isSaving && t.validPlayerName()
                        }, t.updatePlayer = function() {
                            return r.__awaiter(t, void 0, void 0, function() {
                                var e;
                                return r.__generator(this, function(t) {
                                    switch (t.label) {
                                        case 0:
                                            if (!this.validPlayerName()) return [2];
                                            this.setState({
                                                isSaving: !0
                                            }), t.label = 1;
                                        case 1:
                                            return t.trys.push([1, 3, , 4]), [4, this.props.updatePlayer(this.state.player)];
                                        case 2:
                                            return t.sent(), [3, 4];
                                        case 3:
                                            return e = t.sent(), o.k.error(e, "Error updating player"), [3, 4];
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
                            player: this.props.player
                        })
                    }, t.prototype.render = function() {
                        var e = this.state.player;
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
                        }, Object(o.e)("Edit Player", "EditPlayerModal"))), l.createElement(p.Xa, {
                            flexGrow: 0,
                            flexShrink: 0
                        }, l.createElement(p.z, {
                            onClick: this.props.onClose,
                            "data-test-selector": n.Cancel,
                            type: p.F.Text
                        }, Object(o.e)("Cancel", "EditPlayerModal")), l.createElement(p.Xa, {
                            margin: {
                                left: 1
                            },
                            display: p.X.InlineBlock
                        }, l.createElement(p.z, {
                            onClick: this.updatePlayer,
                            "data-test-selector": n.Update,
                            disabled: !this.canSave()
                        }, Object(o.e)("Update", "EditPlayerModal"))))), l.createElement(d.b, null, l.createElement(p.Xa, {
                            padding: {
                                right: 2
                            }
                        }, l.createElement(p.Ea, {
                            id: "player-name",
                            "data-test-selector": n.ValueForm,
                            label: Object(o.e)("Player Name", "EditPlayerModal"),
                            error: !this.validPlayerName(),
                            errorMessage: Object(o.e)("Invalid Player Name", "EditPlayerModal")
                        }, l.createElement(p.Ra, {
                            type: p.Ta.Text,
                            "data-test-selector": n.Value,
                            onChange: this.onPlayerNameChange,
                            value: e.value
                        })))))
                    }, t
                }(l.Component),
                f = a("Driw");
            (m || (m = {})).EmptyList = "players-tab__empty-list";
            var P = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            isAddingPlayer: !1,
                            addingPlayerName: ""
                        }, t.filteredPlayerContentAttributes = function() {
                            return t.props.availableContentAttributes.filter(function(e) {
                                return e.key === y.a.Player
                            })
                        }, t.renderEditPlayerModal = function() {
                            if (t.state.player) return l.createElement(b, {
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
                            t.validPlayerName() && (t.props.createContentAttributes([{
                                key: y.a.Player,
                                name: y.b.Player,
                                value: t.state.addingPlayerName
                            }]), t.setState({
                                isAddingPlayer: !1
                            }))
                        }, t.updatePlayer = function(e) {
                            return r.__awaiter(t, void 0, void 0, function() {
                                var t;
                                return r.__generator(this, function(a) {
                                    switch (a.label) {
                                        case 0:
                                            return a.trys.push([0, 2, , 3]), [4, this.props.updateContentAttributes([e])];
                                        case 1:
                                            return a.sent(), [3, 3];
                                        case 2:
                                            return t = a.sent(), o.k.error(t, "Could not create player"), [3, 3];
                                        case 3:
                                            return this.closePlayerModal(), [2]
                                    }
                                })
                            })
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        var e = this,
                            t = this.filteredPlayerContentAttributes();
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
                        }, Object(o.e)("Players", "PlayersTab")), l.createElement(p.Xa, null, l.createElement(p.z, {
                            icon: p.tb.Plus,
                            type: p.F.Hollow,
                            onClick: this.startAddingNewPlayer
                        }, Object(o.e)("Add Player", "PlayersTab")))), !t.length && l.createElement(p.W, {
                            "data-test-selector": m.EmptyList,
                            italic: !0
                        }, Object(o.e)("No Players", "PlayersTab")), this.state.isAddingPlayer && l.createElement(p.Eb, {
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
                            placeholder: Object(o.e)("Add Player Name", "PlayersTab"),
                            onChange: this.onPlayerNameChange,
                            type: p.Ta.Text,
                            value: this.state.addingPlayerName
                        })), l.createElement(p.z, {
                            type: p.F.Hollow,
                            onClick: this.cancelAddingPlayer
                        }, Object(o.e)("Cancel", "PlayersTab")), l.createElement(p.Xa, {
                            margin: {
                                x: 1
                            },
                            display: p.X.InlineBlock
                        }, l.createElement(p.z, {
                            disabled: !this.validPlayerName(),
                            onClick: this.createPlayer
                        }, Object(o.e)("Save", "PlayersTab")))), t.map(function(t, a) {
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
                                key: a
                            }, l.createElement(p.Xa, {
                                flexDirection: p.Aa.Column,
                                padding: 2,
                                flexGrow: 1
                            }, l.createElement(p.W, {
                                fontSize: p.Ca.Size4
                            }, t.value)), l.createElement(f.a, {
                                onEdit: e.editPlayer.bind(e, t)
                            }))
                        }), this.renderEditPlayerModal())
                    }, t
                }(l.Component),
                E = Object(i.compose)(Object(s.b)("PlayersTab"))(P);
            a.d(t, "TestSelectors", function() {
                return m
            }), a.d(t, "PlayersTabComponent", function() {
                return P
            }), a.d(t, "PlayersTab", function() {
                return E
            })
        },
        xefp: function(e, t, a) {}
    }
]);