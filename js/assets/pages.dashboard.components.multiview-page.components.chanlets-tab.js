(window.webpackJsonp = window.webpackJsonp || []).push([
    [154], {
        "0vXd": function(e, t, n) {},
        "B+LW": function(e, t, n) {
            "use strict";
            var a = n("mrSG"),
                r = n("q1tI"),
                o = n("/MKj"),
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
                                }(r.Component);
                            t.props.showModal(n, {})
                        }, t.closeModal = function() {
                            t.props.closeModal()
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        return this.props.children(this.openModal)
                    }, t
                }(r.Component);
            var c = Object(o.connect)(null, function(e) {
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
                r = n("q1tI"),
                o = n("9rZX"),
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
                        return r.createElement(o, {
                            overlayClassName: "modal__backdrop",
                            className: "modal__content",
                            isOpen: this.props.isOpen,
                            ariaHideApp: !1
                        }, r.createElement(s.Ya, {
                            className: "multiview-modal"
                        }, r.createElement(s.Fb, {
                            className: "multiview-modal__content",
                            padding: 4,
                            margin: {
                                top: 5
                            },
                            background: s.r.Base
                        }, this.props.children)))
                    }, t
                }(r.Component)),
                u = Object(l.compose)(Object(i.b)("MultiviewModal"))(c);
            n.d(t, !1, function() {
                return c
            }), n.d(t, "a", function() {
                return u
            })
        },
        Driw: function(e, t, n) {
            "use strict";
            var a, r = n("mrSG"),
                o = n("q1tI"),
                l = n("/7QA"),
                i = n("cZKs"),
                s = n("eJ65"),
                c = n("B+LW"),
                u = n("Ue10");
            ! function(e) {
                e.Edit = "more-balloon__edit", e.Delete = "more-balloon__delete", e.DeleteConfirm = "more-balloon__delete-confirm"
            }(a || (a = {}));
            var d = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.renderDeleteButton = function() {
                        if (t.props.onDelete) return t.props.deleteModalMessage ? o.createElement(c.a, {
                            triggerModal: t.renderDeleteModal
                        }, t.renderBaseDeleteButton) : t.renderBaseDeleteButton(t.props.onDelete)
                    }, t.renderBaseDeleteButton = function(e) {
                        return o.createElement(u.Va, {
                            onClick: e,
                            "data-test-selector": a.Delete
                        }, o.createElement(u.Ya, {
                            className: "more-balloon__balloon-item",
                            padding: {
                                x: 1,
                                y: 1
                            },
                            display: u.X.Flex,
                            alignItems: u.f.Center
                        }, o.createElement(u.tb, {
                            asset: u.ub.Trash,
                            type: u.vb.Brand
                        }), o.createElement(u.Ya, {
                            margin: {
                                left: 1
                            }
                        }, Object(l.e)("Delete", "MultiviewMoreBalloon"))))
                    }, t.renderDeleteModal = function(e) {
                        if (t.props.deleteModalMessage) return o.createElement(u.Fb, {
                            background: u.r.Base,
                            className: "multiview-more-balloon__delete-prompt",
                            elevation: 3
                        }, o.createElement(u.Fb, {
                            borderBottom: !0,
                            display: u.X.Flex,
                            justifyContent: u.Xa.Center,
                            padding: 2
                        }, o.createElement(u.W, {
                            bold: !0,
                            fontSize: u.Ca.Size4
                        }, t.props.deleteModalMessage)), o.createElement(u.Fb, {
                            background: u.r.Alt,
                            display: u.X.Flex,
                            justifyContent: u.Xa.Center,
                            padding: 2
                        }, o.createElement(u.Ya, {
                            margin: {
                                right: .5
                            }
                        }, o.createElement(u.z, {
                            onClick: e,
                            type: u.F.Hollow
                        }, Object(l.e)("Cancel", "MultiviewMoreBalloon"))), o.createElement(u.Ya, {
                            margin: {
                                left: 1
                            }
                        }, o.createElement(u.z, {
                            "data-test-selector": a.DeleteConfirm,
                            onClick: t.onDeleteClick.bind(t, e)
                        }, Object(l.e)("Delete", "MultiviewMoreBalloon")))), o.createElement(i.a, {
                            closeOnBackdropClick: !0
                        }))
                    }, t.onDeleteClick = function(e) {
                        t.props.onDelete && t.props.onDelete(), e()
                    }, t
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    return o.createElement(u.Ya, {
                        margin: {
                            right: .5
                        }
                    }, o.createElement(s.a, {
                        hideBalloonOnInsideClick: !0
                    }, o.createElement(u.z, {
                        icon: u.ub.More,
                        type: u.F.Text
                    }), o.createElement(u.u, {
                        direction: this.props.last ? u.v.TopRight : u.v.BottomRight,
                        tailOffset: 8
                    }, this.props.onEdit && o.createElement(u.Va, {
                        onClick: this.props.onEdit,
                        "data-test-selector": a.Edit
                    }, o.createElement(u.Ya, {
                        className: "more-balloon__balloon-item",
                        padding: {
                            x: 1,
                            y: 1
                        },
                        display: u.X.Flex,
                        alignItems: u.f.Center
                    }, o.createElement(u.tb, {
                        asset: u.ub.Edit,
                        type: u.vb.Brand
                    }), o.createElement(u.Ya, {
                        margin: {
                            left: 1
                        }
                    }, Object(l.e)("Edit", "MultiviewMoreBalloon")))), this.renderDeleteButton())))
                }, t
            }(o.Component);
            n.d(t, !1, function() {
                return a
            }), n.d(t, "a", function() {
                return d
            })
        },
        GIun: function(e, t, n) {
            "use strict";
            var a = n("q1tI"),
                r = function(e) {
                    var t = a.Children.only(e.children);
                    return a.cloneElement(t, {
                        "data-selectable": !0,
                        tabIndex: -1
                    })
                };
            n.d(t, "a", function() {
                return r
            })
        },
        Jtig: function(e, t, n) {
            "use strict";
            n.r(t);
            var a, r, o = n("mrSG"),
                l = n("q1tI"),
                i = n("fvjX"),
                s = n("/7QA"),
                c = n("GnwI"),
                u = n("IFXb"),
                d = n("B+LW"),
                p = n("Ue10");
            n("zIYK");
            ! function(e) {
                e[e.Active = 0] = "Active", e[e.Inactive = 1] = "Inactive"
            }(a || (a = {})),
            function(e) {
                e.Image = "content-attribute__image", e.Value = "content-attribute__value", e.Remove = "content-attribute__remove"
            }(r || (r = {}));
            var h, m = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {}, t
                    }
                    return o.__extends(t, e), t.prototype.render = function() {
                        return l.createElement(p.Fb, {
                            className: "content-attribute-chip",
                            display: p.X.InlineFlex,
                            flexDirection: p.Aa.Row,
                            borderRadius: p.x.Medium,
                            alignItems: p.f.Center,
                            margin: {
                                right: 1
                            },
                            padding: .5,
                            background: p.r.Alt2
                        }, this.props.imageURL && l.createElement("img", {
                            "data-test-selector": r.Image,
                            className: "content-attribute-chip__icon",
                            src: this.props.imageURL,
                            alt: this.props.value
                        }), l.createElement(p.Ya, {
                            "data-test-selector": r.Value,
                            padding: {
                                x: 1
                            }
                        }, l.createElement(p.W, {
                            bold: !0
                        }, this.props.value)), this.props.onClick && l.createElement(p.Fb, {
                            borderRadius: p.x.Rounded,
                            background: p.r.Alt2
                        }, l.createElement(p.A, {
                            "data-test-selector": r.Remove,
                            onClick: this.props.onClick,
                            icon: p.ub.RemoveTag,
                            size: p.B.Small,
                            type: p.C.Secondary
                        })))
                    }, t
                }(l.Component),
                C = n("8/mp"),
                f = n("CS6u"),
                b = n("il7S");
            ! function(e) {
                e.Cancel = "edit-chanlet-group-modal__cancel", e.Create = "edit-chanlet-group-modal__create", e.Value = "edit-chanlet-group-modal__value", e.ValueForm = "edit-chanlet-group-modal__value-form"
            }(h || (h = {}));
            var g, y = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            isSaving: !1,
                            errorMessage: "",
                            editMade: !1,
                            chanletGroup: {
                                key: b.a.Group,
                                name: b.b.Group,
                                value: ""
                            }
                        }, t.onChanletGroupValueChange = function(e) {
                            var n = e.target.value,
                                a = o.__assign({}, t.state.chanletGroup, {
                                    value: n
                                });
                            t.setState({
                                chanletGroup: a,
                                editMade: !0
                            })
                        }, t.createChanletGroup = function() {
                            return o.__awaiter(t, void 0, void 0, function() {
                                var e, t;
                                return o.__generator(this, function(n) {
                                    switch (n.label) {
                                        case 0:
                                            if (!this.validChanletGroupValue()) return [2];
                                            this.setState({
                                                isSaving: !0
                                            }), e = "", n.label = 1;
                                        case 1:
                                            return n.trys.push([1, 3, , 4]), [4, this.props.createChanletGroup(this.state.chanletGroup)];
                                        case 2:
                                            return n.sent(), [3, 4];
                                        case 3:
                                            return t = n.sent(), s.k.error(t, "Error creating chanlet group"), e = Object(s.d)("There was a problem creating this chanlet group", "CreateChanletGroupModal"), [3, 4];
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
                    return o.__extends(t, e), t.prototype.render = function() {
                        var e = this.state.chanletGroup;
                        return l.createElement(f.a, {
                            isOpen: !0
                        }, l.createElement(p.Fb, {
                            display: p.X.Flex,
                            padding: {
                                bottom: 2
                            },
                            margin: {
                                bottom: 2
                            },
                            justifyContent: p.Xa.Between
                        }, l.createElement(p.Ya, {
                            flexGrow: 0,
                            flexShrink: 1
                        }, l.createElement(p.W, {
                            type: p.Wb.H3
                        }, Object(s.e)("Create Chanlet Metadata Group", "CreateChanletGroupModal"))), l.createElement(p.Ya, {
                            flexGrow: 0,
                            flexShrink: 0
                        }, l.createElement(p.z, {
                            onClick: this.props.onClose,
                            "data-test-selector": h.Cancel,
                            type: p.F.Text
                        }, Object(s.d)("Cancel", "CreateChanletGroupModal")), l.createElement(p.Ya, {
                            margin: {
                                left: 1
                            },
                            display: p.X.InlineBlock
                        }, l.createElement(p.z, {
                            onClick: this.createChanletGroup,
                            "data-test-selector": h.Create,
                            disabled: !this.canSave()
                        }, Object(s.d)("Create", "CreateChanletGroupModal"))))), l.createElement(p.Ya, {
                            margin: {
                                y: 1
                            }
                        }, this.state.errorMessage && l.createElement(p.Da, {
                            errorMessage: this.state.errorMessage
                        })), l.createElement(C.b, null, l.createElement(p.Fb, {
                            background: p.r.Alt,
                            padding: 2,
                            margin: {
                                bottom: 2
                            }
                        }, l.createElement(p.Ea, {
                            id: "group-name",
                            "data-test-selector": h.ValueForm,
                            label: Object(s.e)("Group Name", "CreateChanletGroupModal"),
                            error: !this.validChanletGroupValue() && this.state.editMade,
                            errorMessage: Object(s.e)("Invalid Chanlet Group Name", "CreateChanletGroupModal")
                        }, l.createElement(p.Sa, {
                            type: p.Ua.Text,
                            "data-test-selector": h.Value,
                            onChange: this.onChanletGroupValueChange,
                            placeholder: Object(s.e)("Add Group Name", "CreateChanletGroupModal"),
                            value: e.value
                        })))))
                    }, t.prototype.validChanletGroupValue = function() {
                        return !!this.state.chanletGroup.value
                    }, t.prototype.canSave = function() {
                        return !this.state.isSaving && this.validChanletGroupValue()
                    }, t
                }(l.Component),
                v = n("cZKs");
            ! function(e) {
                e.Cancel = "create-chanlet-modal__cancel", e.Confirm = "create-chanlet-modal__confirm"
            }(g || (g = {}));
            var E, S = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            isSaving: !1,
                            errorMessage: ""
                        }, t.onConfirmClick = function() {
                            return o.__awaiter(t, void 0, void 0, function() {
                                var e;
                                return o.__generator(this, function(t) {
                                    this.setState({
                                        isSaving: !0
                                    }), e = "";
                                    try {
                                        this.props.onConfirm(), this.props.onClose()
                                    } catch (t) {
                                        s.k.error(t, "Error creating chanlet"), e = Object(s.d)("There was a problem creating this chanlet", "CreateChanletModal")
                                    }
                                    return this.setState({
                                        isSaving: !1,
                                        errorMessage: e
                                    }), [2]
                                })
                            })
                        }, t
                    }
                    return o.__extends(t, e), t.prototype.render = function() {
                        return l.createElement(p.Fb, {
                            background: p.r.Base,
                            className: "create-chanlet-modal",
                            elevation: 3
                        }, l.createElement(p.Fb, {
                            borderBottom: !0,
                            display: p.X.Flex,
                            justifyContent: p.Xa.Center,
                            padding: 2,
                            flexDirection: p.Aa.Column,
                            alignItems: p.f.Center
                        }, l.createElement(p.W, {
                            bold: !0,
                            fontSize: p.Ca.Size4
                        }, Object(s.e)("Create a new multiview chanlet?", "CreateChanletModal")), l.createElement(p.Ya, {
                            margin: {
                                y: 1
                            }
                        }, this.state.errorMessage && l.createElement(p.Da, {
                            errorMessage: this.state.errorMessage
                        }))), l.createElement(p.Fb, {
                            background: p.r.Alt,
                            display: p.X.Flex,
                            justifyContent: p.Xa.Center,
                            padding: 2
                        }, l.createElement(p.Ya, {
                            margin: {
                                right: .5
                            }
                        }, l.createElement(p.z, {
                            "data-test-selector": g.Cancel,
                            onClick: this.props.onClose,
                            type: p.F.Hollow
                        }, Object(s.d)("Cancel", "CreateChanletModal"))), l.createElement(p.Ya, {
                            margin: {
                                left: 1
                            }
                        }, l.createElement(p.z, {
                            disabled: this.state.isSaving,
                            "data-test-selector": g.Confirm,
                            onClick: this.onConfirmClick
                        }, Object(s.d)("Create Chanlet", "CreateChanletModal")))), l.createElement(v.a, {
                            closeOnBackdropClick: !0
                        }))
                    }, t
                }(l.Component),
                _ = n("GIun"),
                w = n("vV5t"),
                M = n("Driw"),
                G = function(e, t, n) {
                    void 0 === t && (t = 480), void 0 === n && (n = 272);
                    var a = "https://static-cdn.jtvnw.net/previews-ttv/live_user_jtgtv-" + t + "x" + n + ".jpg";
                    return e && e.stream && e.stream.previewImageURL ? e.stream.previewImageURL : a
                };
            n("0vXd");
            ! function(e) {
                e.Cancel = "edit-chanlet-group-modal__cancel", e.Update = "edit-chanlet-group-modal__update", e.Value = "edit-chanlet-group-modal__value", e.ValueForm = "edit-chanlet-group-modal__value-form"
            }(E || (E = {}));
            var k, O = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            isSaving: !1,
                            errorMessage: "",
                            teamSearchTerm: "",
                            chanletSearchTerm: "",
                            metadataSearchTerm: "",
                            selectedChanlets: {},
                            showChanletDropdown: !1,
                            chanletGroup: {
                                __typename: "MultiviewContentAttribute",
                                id: "",
                                key: b.a.Group,
                                name: b.b.Group,
                                parentID: null,
                                parentKey: null,
                                value: "",
                                valueShortName: "",
                                imageURL: "",
                                createdAt: "",
                                updatedAt: ""
                            }
                        }, t.metadataSearchDropdowns = {}, t.renderChanletItem = function(e) {
                            return l.createElement(p.Fb, {
                                background: p.r.Base,
                                elevation: 1,
                                margin: {
                                    bottom: 1
                                },
                                alignItems: p.f.Center,
                                justifyContent: p.Xa.Between,
                                display: p.X.Flex,
                                flexDirection: p.Aa.Row,
                                key: e.id
                            }, l.createElement("img", {
                                className: "edit-chanlet-group-modal__chanlet-row-img",
                                src: G(e)
                            }), l.createElement(p.Ya, {
                                margin: {
                                    x: 1
                                }
                            }, l.createElement(w.a, {
                                buttonText: Object(s.e)("Add Metadata", "EditChanletGroupModal"),
                                onChange: t.onMetadataSearchChange,
                                ref: t.setMetadataRef(e)
                            }, t.renderMetadataDropdownItems(e))), l.createElement(p.Ya, {
                                flexGrow: 1,
                                padding: {
                                    x: 2
                                }
                            }, t.renderChanletMetadata(e)), l.createElement(p.W, {
                                color: p.O.Alt2
                            }, e.name), l.createElement(M.a, {
                                onDelete: t.removeChanlet.bind(t, e)
                            }))
                        }, t.onMetadataSearchChange = function(e) {
                            t.setState({
                                metadataSearchTerm: e
                            })
                        }, t.setMetadataRef = function(e) {
                            return function(n) {
                                t.metadataSearchDropdowns[e.id || ""] = n
                            }
                        }, t.onMetadataChange = function(e, n) {
                            var a;
                            if ((e = o.__assign({}, e)).id) {
                                e.contentAttributes = (e.contentAttributes || []).concat(n);
                                var r = o.__assign({}, t.state.selectedChanlets, ((a = {})[e.id] = e, a));
                                t.setState({
                                    selectedChanlets: r
                                });
                                var l = t.metadataSearchDropdowns[e.id || ""];
                                l && l.toggle(!1)
                            }
                        }, t.filterMetadataItems = function(e) {
                            var n = e.contentAttributes || [];
                            return t.props.availableContentAttributes.filter(function(e) {
                                if (e.key !== b.a.Player && e.key !== b.a.Role) return !1;
                                if (e.key === b.a.Player && t.state.chanletGroup.parentID && e.parentID !== t.state.chanletGroup.parentID) return !1;
                                if (n.filter(function(t) {
                                        return t.id === e.id
                                    }).length > 0) return !1;
                                var a = t.state.metadataSearchTerm.toLowerCase();
                                return Object.keys(e).filter(function(t) {
                                    return "string" == typeof e[t] && (e[t] || "").toLowerCase().indexOf(a) > -1
                                }).length > 0
                            })
                        }, t.renderMetadataDropdownItems = function(e) {
                            return t.filterMetadataItems(e).map(function(n, a) {
                                return l.createElement(_.a, {
                                    key: a
                                }, l.createElement(p.Va, {
                                    onClick: t.onMetadataChange.bind(t, e, n)
                                }, l.createElement(p.Ya, {
                                    padding: 1
                                }, l.createElement(p.W, null, n.name + " - " + n.value))))
                            })
                        }, t.renderChanletMetadata = function(e) {
                            if (e && e.contentAttributes) return e.contentAttributes.filter(function(e) {
                                return e.key !== b.a.Group && e.key !== b.a.Team
                            }).map(function(n, a) {
                                return l.createElement(m, {
                                    key: a,
                                    value: n.value,
                                    imageURL: n.imageURL,
                                    onClick: t.removeChanletContentAttribute.bind(t, e, n)
                                })
                            })
                        }, t.removeChanlet = function(e) {
                            var n = o.__assign({}, t.state.selectedChanlets);
                            delete n[e.id || ""], t.setState({
                                selectedChanlets: n
                            })
                        }, t.removeChanletContentAttribute = function(e, n) {
                            var a;
                            if ((e = o.__assign({}, e)).id) {
                                e.contentAttributes = (e.contentAttributes || []).filter(function(e) {
                                    return e.id !== n.id
                                });
                                var r = o.__assign({}, t.state.selectedChanlets, ((a = {})[e.id] = e, a));
                                t.setState({
                                    selectedChanlets: r
                                })
                            }
                        }, t.setTeamSearchRef = function(e) {
                            t.teamSearch = e
                        }, t.onTeamInputChange = function(e) {
                            t.setState({
                                teamSearchTerm: e
                            })
                        }, t.teamDropdownDisabled = function() {
                            return !t.props.availableContentAttributes.filter(t.filteredTeams).length
                        }, t.onTeamDropdownChoose = function(e) {
                            for (var n = o.__assign({}, t.state.chanletGroup, {
                                    parentKey: e.key,
                                    parentID: e.id
                                }), a = o.__assign({}, t.state.selectedChanlets), r = 0, l = Object.keys(a); r < l.length; r++) {
                                var i = l[r],
                                    s = o.__assign({}, a[i]);
                                s.contentAttributes = (s.contentAttributes || []).filter(function(e) {
                                    return e.key !== b.a.Player
                                }), a[s.id || ""] = s
                            }
                            t.setState({
                                chanletGroup: n,
                                selectedChanlets: a
                            }), t.teamSearch.toggle(!1)
                        }, t.renderChanletGroupTeam = function() {
                            var e = t.state.chanletGroup,
                                n = e.parentID,
                                a = e.parentKey,
                                r = t.props.availableContentAttributes.find(function(e) {
                                    return e.id === n && e.key === a
                                });
                            if (r) return l.createElement(m, {
                                key: r.key,
                                value: r.value,
                                imageURL: r.imageURL,
                                onClick: t.removeChanletGroupTeam
                            })
                        }, t.removeChanletGroupTeam = function() {
                            var e = o.__assign({}, t.state.chanletGroup, {
                                parentKey: null,
                                parentID: null
                            });
                            t.setState({
                                chanletGroup: e
                            })
                        }, t.filteredTeams = function(e) {
                            return e.key === b.a.Team && e.value.toLowerCase().indexOf(t.state.teamSearchTerm.toLowerCase()) > -1
                        }, t.renderTeamContentAttributes = function() {
                            return t.props.availableContentAttributes.filter(t.filteredTeams).map(function(e, n) {
                                return l.createElement(_.a, {
                                    key: n
                                }, l.createElement(p.Va, {
                                    onClick: t.onTeamDropdownChoose.bind(t, e)
                                }, l.createElement(p.Ya, {
                                    padding: 1
                                }, l.createElement(p.W, null, e.name + " - " + e.value))))
                            })
                        }, t.setChanletSearchRef = function(e) {
                            t.chanletSearch = e
                        }, t.onChanletInputChange = function(e) {
                            t.setState({
                                chanletSearchTerm: e
                            })
                        }, t.onChanletDropdownChoose = function(e) {
                            var n;
                            (e = o.__assign({}, e)).contentAttributes = (e.contentAttributes || []).concat(t.state.chanletGroup), t.setState({
                                showChanletDropdown: !1,
                                selectedChanlets: o.__assign({}, t.state.selectedChanlets, (n = {}, n[e.id || ""] = e, n))
                            }), t.chanletSearch.toggle(!1)
                        }, t.filterDropdownChanlets = function(e) {
                            var n = t.state,
                                a = n.chanletSearchTerm,
                                r = n.selectedChanlets,
                                o = n.chanletGroup;
                            if (r[e.id || ""]) return !1;
                            var l = e.name || "",
                                i = e.contentAttributes || [];
                            return !(i.filter(function(e) {
                                return e.key === b.a.Group && e.id !== o.id
                            }).length > 0) && (l.indexOf(a) > -1 || i.filter(function(e) {
                                return Object.keys(e).filter(function(t) {
                                    return "string" == typeof e[t] && (e[t] || "").toLowerCase().indexOf(a) > -1
                                }).length > 0
                            }).length > 0)
                        }, t.chanletDropdownDisabled = function() {
                            return !t.props.chanlets.filter(t.filterDropdownChanlets).length
                        }, t.renderDropdownChanlets = function() {
                            return t.props.chanlets.filter(t.filterDropdownChanlets).map(function(e, n) {
                                return l.createElement(_.a, {
                                    key: n
                                }, l.createElement(p.Va, {
                                    onClick: t.onChanletDropdownChoose.bind(t, e)
                                }, l.createElement(p.Ya, {
                                    padding: 1
                                }, l.createElement(p.W, null, e.name))))
                            })
                        }, t.onChanletGroupValueChange = function(e) {
                            var n = e.target.value,
                                a = o.__assign({}, t.state.chanletGroup, {
                                    value: n
                                });
                            t.setState({
                                chanletGroup: a
                            })
                        }, t.updateChanletGroup = function() {
                            return o.__awaiter(t, void 0, void 0, function() {
                                var e, t;
                                return o.__generator(this, function(n) {
                                    switch (n.label) {
                                        case 0:
                                            if (!this.validChanletGroupValue()) return [2];
                                            this.setState({
                                                isSaving: !0
                                            }), e = "", n.label = 1;
                                        case 1:
                                            return n.trys.push([1, 3, , 4]), [4, this.props.updateChanletGroup(this.state.chanletGroup, this.state.selectedChanlets)];
                                        case 2:
                                            return n.sent(), [3, 4];
                                        case 3:
                                            return t = n.sent(), s.k.error(t, "Error updating chanlet group"), e = Object(s.d)("There was a problem updating this chanlet group", "EditChanletGroupModal"), [3, 4];
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
                        var e = this,
                            t = {};
                        this.props.chanlets.forEach(function(n) {
                            null !== n.id && n.contentAttributes && n.contentAttributes.filter(function(t) {
                                return t.id === e.props.chanletGroup.id
                            }).length > 0 && (t[n.id] = n)
                        }), this.setState({
                            chanletGroup: this.props.chanletGroup,
                            selectedChanlets: t
                        })
                    }, t.prototype.render = function() {
                        var e = this.state,
                            t = e.chanletGroup,
                            n = e.selectedChanlets,
                            a = Object.keys(n).map(function(e) {
                                return n[e]
                            });
                        return l.createElement(f.a, {
                            isOpen: !0
                        }, l.createElement(C.b, null, l.createElement(p.Ya, {
                            padding: {
                                right: 2
                            }
                        }, l.createElement(p.Fb, {
                            display: p.X.Flex,
                            padding: {
                                bottom: 2
                            },
                            margin: {
                                bottom: 2
                            },
                            justifyContent: p.Xa.Between
                        }, l.createElement(p.Ya, {
                            flexGrow: 0,
                            flexShrink: 1
                        }, l.createElement(p.W, {
                            type: p.Wb.H3
                        }, Object(s.e)("Edit Metadata Group", "EditChanletGroupModal"))), l.createElement(p.Ya, {
                            flexGrow: 0,
                            flexShrink: 0
                        }, l.createElement(p.z, {
                            onClick: this.props.onClose,
                            "data-test-selector": E.Cancel,
                            type: p.F.Text
                        }, Object(s.d)("Cancel", "EditChanletGroupModal")), l.createElement(p.Ya, {
                            margin: {
                                left: 1
                            },
                            display: p.X.InlineBlock
                        }, l.createElement(p.z, {
                            onClick: this.updateChanletGroup,
                            "data-test-selector": E.Update,
                            disabled: !this.canSave()
                        }, Object(s.d)("Update", "EditChanletGroupModal"))))), l.createElement(p.Ya, {
                            margin: {
                                y: 1
                            }
                        }, this.state.errorMessage && l.createElement(p.Da, {
                            errorMessage: this.state.errorMessage
                        })), l.createElement(p.Ya, {
                            margin: {
                                bottom: 2
                            }
                        }, l.createElement(p.Ea, {
                            id: "chanlet-group-team",
                            label: Object(s.e)("Which Team is streaming on this group of Chanlets?", "EditChanletGroupModal")
                        }, l.createElement(p.Fb, {
                            background: p.r.Base,
                            elevation: 2,
                            padding: 1,
                            display: p.X.Flex,
                            flexDirection: p.Aa.Row,
                            alignItems: p.f.Center
                        }, l.createElement(w.a, {
                            onChange: this.onTeamInputChange,
                            disabled: this.teamDropdownDisabled(),
                            buttonText: Object(s.e)("Assign Team", "EditChanletGroupModal"),
                            ref: this.setTeamSearchRef
                        }, this.renderTeamContentAttributes()), l.createElement(p.Ya, {
                            margin: {
                                x: 1
                            },
                            display: p.X.Flex,
                            flexDirection: p.Aa.Row,
                            alignItems: p.f.Center
                        }, this.renderChanletGroupTeam())))), l.createElement(p.Ya, {
                            margin: {
                                bottom: 2
                            }
                        }, l.createElement(p.Fb, {
                            margin: {
                                bottom: 2
                            },
                            padding: {
                                bottom: 2
                            },
                            display: p.X.Flex,
                            flexDirection: p.Aa.Row,
                            justifyContent: p.Xa.Between,
                            borderBottom: !0
                        }, l.createElement(p.Ya, null, l.createElement(p.W, {
                            bold: !0
                        }, Object(s.e)("Group Chanlets", "EditChanletGroupModal"))), l.createElement(w.a, {
                            buttonText: Object(s.e)("Add Chanlet", "EditChanletGroupModal"),
                            balloonDirection: p.v.BottomRight,
                            disabled: this.chanletDropdownDisabled(),
                            onChange: this.onChanletInputChange,
                            ref: this.setChanletSearchRef
                        }, this.renderDropdownChanlets())), !a.length && l.createElement(p.W, {
                            italic: !0
                        }, Object(s.e)("No Chanlets", "EditChanletGroupModal")), a.map(this.renderChanletItem)), l.createElement(p.Fb, {
                            background: p.r.Alt,
                            padding: 2,
                            margin: {
                                bottom: 2
                            }
                        }, l.createElement(p.Ea, {
                            id: "group-name",
                            "data-test-selector": E.ValueForm,
                            label: Object(s.e)("Group Name", "EditChanletGroupModal"),
                            error: !this.validChanletGroupValue(),
                            errorMessage: Object(s.e)("Invalid Chanlet Group Name", "EditChanletGroupModal")
                        }, l.createElement(p.Sa, {
                            type: p.Ua.Text,
                            "data-test-selector": E.Value,
                            onChange: this.onChanletGroupValueChange,
                            value: t.value
                        }))))))
                    }, t.prototype.validChanletGroupValue = function() {
                        return !!this.state.chanletGroup.value
                    }, t.prototype.canSave = function() {
                        return !this.state.isSaving && this.validChanletGroupValue()
                    }, t
                }(l.Component),
                x = n("Jxh/"),
                A = n("LZzM");
            ! function(e) {
                e.Cancel = "edit-chanlet-modal__cancel", e.Update = "edit-chanlet-modal__update", e.Title = "edit-chanlet-modal__title", e.Copy = "edit-chanlet-modal__copy"
            }(k || (k = {}));
            var I, F = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        isSaving: !1,
                        searchTerm: "",
                        showStreamKey: !1,
                        showStreamKeyModal: !1,
                        streamKeyCopied: !1,
                        chanlet: {
                            __typename: "Channel",
                            id: null,
                            name: null,
                            stream: null,
                            chanletStreamKey: null,
                            contentAttributes: []
                        }
                    }, t.setSearchRef = function(e) {
                        t.contentAttributeSearch = e
                    }, t.onInputChange = function(e) {
                        t.setState({
                            searchTerm: e
                        })
                    }, t.onDropdownChoose = function(e) {
                        var n = o.__assign({}, t.state.chanlet);
                        n.contentAttributes || (n.contentAttributes = []), n.contentAttributes = n.contentAttributes.concat([e]), t.setState({
                            chanlet: n
                        }), t.contentAttributeSearch.toggle(!1)
                    }, t.renderChanletContentAttributes = function() {
                        if (t.state.chanlet && t.state.chanlet.contentAttributes) return t.state.chanlet.contentAttributes.filter(function(e) {
                            return e.key !== b.a.Group && e.key !== b.a.Team
                        }).map(function(e, n) {
                            return l.createElement(m, {
                                key: n,
                                value: e.value,
                                imageURL: e.imageURL,
                                onClick: t.removeChanletContentAttribute.bind(t, e)
                            })
                        })
                    }, t.removeChanletContentAttribute = function(e) {
                        if (t.state.chanlet && t.state.chanlet.contentAttributes) {
                            var n = t.state.chanlet.contentAttributes.slice(),
                                a = t.state.chanlet.contentAttributes.findIndex(function(t) {
                                    return t.id === e.id
                                });
                            if (!(a < 0)) {
                                n.splice(a, 1);
                                var r = o.__assign({}, t.state.chanlet, {
                                    contentAttributes: n
                                });
                                t.setState({
                                    chanlet: r
                                })
                            }
                        }
                    }, t.filteredContentAttributes = function(e) {
                        if (e.key === b.a.Group || e.key === b.a.Team) return !1;
                        var n = t.state.searchTerm.toLowerCase(),
                            a = Object.keys(e).filter(function(t) {
                                return "string" == typeof e[t] && (e[t] || "").toLowerCase().indexOf(n) > -1
                            }).length > 0;
                        return t.state.chanlet.contentAttributes ? a && !t.state.chanlet.contentAttributes.map(function(e) {
                            return e.id
                        }).includes(e.id) : a
                    }, t.renderAvailableContentAttributes = function() {
                        return t.props.availableContentAttributes.filter(t.filteredContentAttributes).map(function(e, n) {
                            return l.createElement(_.a, {
                                key: n
                            }, l.createElement(p.Va, {
                                onClick: t.onDropdownChoose.bind(t, e)
                            }, l.createElement(p.Ya, {
                                padding: 1
                            }, l.createElement(p.W, null, e.name + " - " + e.value))))
                        })
                    }, t.setKeyInputRef = function(e) {
                        return t.keyInput = e
                    }, t.handleCopyToClipboard = function() {
                        t.copyToClipboard(t.keyInput)
                    }, t.copyToClipboard = function(e) {
                        e && (Object(x.a)(e.value) && t.setState({
                            streamKeyCopied: !0
                        }))
                    }, t.hideStreamKeyLink = function() {
                        return l.createElement(p.U, {
                            onClick: t.hideStreamKey
                        }, Object(s.e)("Hide", "EditChanletModal"))
                    }, t.showStreamKeyLink = function() {
                        return t.state.showStreamKeyModal ? l.createElement(A.a, {
                            onClose: t.hideStreamKey,
                            showStreamKey: t.showStreamKey
                        }) : l.createElement(p.U, {
                            onClick: t.showStreamKeyModal
                        }, Object(s.e)("Show", "EditChanletModal"))
                    }, t.showStreamKey = function() {
                        t.setState({
                            showStreamKey: !0
                        })
                    }, t.showStreamKeyModal = function() {
                        t.setState({
                            showStreamKeyModal: !0
                        })
                    }, t.hideStreamKey = function() {
                        t.setState({
                            showStreamKey: !1,
                            showStreamKeyModal: !1
                        })
                    }, t.onChanletNameChange = function(e) {
                        var n = e.target.value,
                            a = o.__assign({}, t.state.chanlet, {
                                name: n
                            });
                        t.setState({
                            chanlet: a
                        })
                    }, t.updateChanlet = function() {
                        return o.__awaiter(t, void 0, void 0, function() {
                            var e;
                            return o.__generator(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        return this.state.chanlet && this.state.chanlet.id && this.state.chanlet.contentAttributes ? (this.setState({
                                            isSaving: !0
                                        }), e = this.state.chanlet.contentAttributes.map(function(e) {
                                            return e.id
                                        }), [4, this.props.updateChanlet(this.state.chanlet.id, e)]) : [2];
                                    case 1:
                                        return t.sent(), this.setState({
                                            isSaving: !1
                                        }), [2]
                                }
                            })
                        })
                    }, t
                }
                return o.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.setState({
                        chanlet: this.props.chanlet
                    })
                }, t.prototype.render = function() {
                    return l.createElement(f.a, {
                        isOpen: !0
                    }, l.createElement(C.b, null, l.createElement(p.Ya, {
                        padding: {
                            right: 2
                        }
                    }, l.createElement(p.Fb, {
                        display: p.X.Flex,
                        padding: {
                            bottom: 2
                        },
                        margin: {
                            bottom: 2
                        },
                        justifyContent: p.Xa.Between
                    }, l.createElement(p.Ya, {
                        flexGrow: 0,
                        flexShrink: 1
                    }, l.createElement(p.W, {
                        type: p.Wb.H3
                    }, Object(s.e)("Edit Chanlet Properties", "EditChanletModal"))), l.createElement(p.Ya, {
                        flexGrow: 0,
                        flexShrink: 0
                    }, l.createElement(p.z, {
                        "data-test-selector": k.Cancel,
                        onClick: this.props.onClose,
                        type: p.F.Text
                    }, Object(s.e)("Cancel", "EditChanletModal")), l.createElement(p.Ya, {
                        margin: {
                            left: 1
                        },
                        display: p.X.InlineBlock
                    }, l.createElement(p.z, {
                        "data-test-selector": k.Update,
                        onClick: this.updateChanlet,
                        disabled: !this.canSave()
                    }, Object(s.e)("Update", "EditChanletModal"))))), l.createElement(p.Ja, {
                        gutterSize: p.Ka.Large
                    }, l.createElement(p.P, {
                        cols: {
                            default: 12,
                            md: 6,
                            lg: 5
                        }
                    }, l.createElement(p.Ya, null, l.createElement(p.W, {
                        bold: !0
                    }, Object(s.e)("Chanlet Preview", "EditChanletPreview")), l.createElement(p.Fb, {
                        padding: .5,
                        margin: {
                            y: 1
                        },
                        border: !0,
                        borderRadius: p.x.Small
                    }, l.createElement("img", {
                        src: G(this.props.chanlet)
                    })))), l.createElement(p.P, {
                        cols: {
                            default: 12,
                            md: 6,
                            lg: 7
                        }
                    }, l.createElement(p.Ya, {
                        margin: {
                            bottom: 2
                        }
                    }, l.createElement(p.Ea, {
                        id: "chanlet-metadata",
                        label: Object(s.e)("What’s streaming on this Chanlet?", "EditChanletModal")
                    }, l.createElement(p.Fb, {
                        background: p.r.Base,
                        elevation: 2,
                        padding: 1
                    }, l.createElement(w.a, {
                        buttonText: Object(s.e)("Add Metadata", "EditChanletModal"),
                        onChange: this.onInputChange,
                        ref: this.setSearchRef
                    }, this.renderAvailableContentAttributes()), l.createElement(p.Fb, {
                        padding: {
                            y: 1
                        },
                        display: p.X.Flex,
                        flexDirection: p.Aa.Row,
                        alignItems: p.f.Center
                    }, this.renderChanletContentAttributes())))), l.createElement(p.Ya, {
                        margin: {
                            bottom: 2
                        }
                    }, l.createElement(p.Ea, {
                        id: "chanlet-title",
                        "data-test-selector": k.Title,
                        label: Object(s.e)("Chanlet Title", "EditChanletModal"),
                        error: !this.validChanletName(),
                        errorMessage: Object(s.e)("Invalid Chanlet Name", "EditChanletModal")
                    }, l.createElement(p.Sa, {
                        type: p.Ua.Text,
                        onChange: this.onChanletNameChange,
                        value: this.state.chanlet.name || ""
                    }))), l.createElement(p.Ya, {
                        margin: {
                            bottom: 2
                        }
                    }, this.renderStreamKey()))))))
                }, t.prototype.renderStreamKey = function() {
                    var e = this.state.streamKeyCopied;
                    return l.createElement(p.Ea, {
                        label: Object(s.e)("Chanlet Stream key", "EditChanletModal")
                    }, l.createElement(p.Ya, {
                        display: p.X.Flex
                    }, l.createElement(p.Ya, {
                        flexGrow: 1,
                        padding: {
                            right: .5
                        }
                    }, l.createElement(p.Sa, {
                        readOnly: !0,
                        type: this.state.showStreamKey ? p.Ua.Text : p.Ua.Password,
                        value: this.props.chanlet.chanletStreamKey || "",
                        refDelegate: this.setKeyInputRef
                    })), l.createElement(p.Ya, {
                        padding: {
                            left: 1
                        }
                    }, l.createElement(p.z, {
                        ariaLabel: Object(s.e)("Copy Stream Key", "EditChanletModal"),
                        "data-test-selector": k.Copy,
                        disabled: e,
                        onClick: this.handleCopyToClipboard
                    }, e ? Object(s.e)("Copied", "EditChanletModal") : Object(s.e)("Copy", "EditChanletModal")))), l.createElement(p.Ya, {
                        padding: {
                            top: .5
                        }
                    }, this.state.showStreamKey ? this.hideStreamKeyLink() : this.showStreamKeyLink()))
                }, t.prototype.validChanletName = function() {
                    return !!this.state.chanlet.name
                }, t.prototype.canSave = function() {
                    return !this.state.isSaving && this.validChanletName()
                }, t
            }(l.Component);
            n("Ucfb");
            ! function(e) {
                e.ChanletItem = "chanlets-tab__chanlet-item", e.GroupItem = "chanlets-tab__group-item", e.EmptyList = "chanlets-tab__empty-list", e.AddGroup = "chanlets-tab__add-group"
            }(I || (I = {}));
            var D = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            isChanletModalOpen: !1,
                            isCreateChanletGroupModalOpen: !1,
                            isEditChanletGroupModalOpen: !1
                        }, t.renderChanletGroupItem = function(e, n) {
                            var a = e.parentKey === b.a.Team && t.props.availableContentAttributes.find(function(t) {
                                    return t.id === e.parentID && t.key === e.parentKey
                                }),
                                r = t.props.chanlets.map(function(t) {
                                    return (t.contentAttributes || []).find(function(t) {
                                        return t.id === e.id
                                    })
                                }).filter(function(e) {
                                    return !!e
                                }).length;
                            return l.createElement(p.Fb, {
                                "data-test-selector": I.GroupItem,
                                background: p.r.Base,
                                elevation: 1,
                                alignItems: p.f.Center,
                                justifyContent: p.Xa.Between,
                                display: p.X.Flex,
                                flexDirection: p.Aa.Row,
                                margin: {
                                    bottom: 1
                                },
                                key: n
                            }, l.createElement(p.Ya, {
                                flexDirection: p.Aa.Column,
                                padding: 2,
                                flexGrow: 1
                            }, l.createElement(p.Ya, {
                                margin: {
                                    bottom: .5
                                }
                            }, l.createElement(p.W, {
                                bold: !0,
                                fontSize: p.Ca.Size5
                            }, a && a.value || Object(s.e)("No Team", "ChanletsTab"))), l.createElement(p.W, {
                                color: p.O.Alt2
                            }, e.value, " ", "-", " ", Object(s.e)("{streamCount, plural, one {{streamCount} stream} other {{streamCount} streams}}", {
                                streamCount: r
                            }, "ChanletsTab"))), l.createElement(M.a, {
                                onEdit: t.editChanletGroupModal.bind(t, e),
                                onDelete: t.deleteChanletGroup.bind(t, e),
                                deleteModalMessage: Object(s.e)("Are you sure you want to delete chanlet group: {value}?", {
                                    value: e.value
                                }, "ChanletsTab")
                            }))
                        }, t.renderChanletItem = function(e) {
                            var n = (e.contentAttributes || []).filter(function(e) {
                                return e.key === b.a.Player || e.key === b.a.Role
                            }).map(function(e) {
                                return l.createElement(m, {
                                    key: e.key,
                                    value: e.value,
                                    imageURL: e.imageURL
                                })
                            });
                            return l.createElement(p.Fb, {
                                "data-test-selector": I.ChanletItem,
                                background: p.r.Base,
                                elevation: 1,
                                margin: {
                                    bottom: 1
                                },
                                alignItems: p.f.Center,
                                justifyContent: p.Xa.Between,
                                display: p.X.Flex,
                                flexDirection: p.Aa.Row,
                                key: e.id
                            }, l.createElement("img", {
                                className: "chanlets-tab__chanlet-row-img",
                                src: G(e)
                            }), l.createElement(p.Ya, {
                                flexDirection: p.Aa.Column,
                                padding: 1,
                                flexGrow: 1
                            }, l.createElement(p.Ya, {
                                margin: {
                                    bottom: .5
                                }
                            }, n, !n.length && l.createElement(p.W, {
                                bold: !0,
                                fontSize: p.Ca.Size5
                            }, Object(s.e)("No Metadata", "ChanletsTab"))), l.createElement(p.W, {
                                color: p.O.Alt2
                            }, e.name)), l.createElement(M.a, {
                                onEdit: t.editChanletModal.bind(t, e)
                            }))
                        }, t.renderAddChanletModal = function(e) {
                            return l.createElement(S, {
                                onClose: e,
                                onConfirm: t.createChanlet
                            })
                        }, t.createChanlet = function() {
                            return o.__awaiter(t, void 0, void 0, function() {
                                return o.__generator(this, function(e) {
                                    switch (e.label) {
                                        case 0:
                                            return [4, this.props.createChanlet()];
                                        case 1:
                                            return e.sent(), this.closeChanletModals(), [2]
                                    }
                                })
                            })
                        }, t.updateChanlet = function(e, n) {
                            return o.__awaiter(t, void 0, void 0, function() {
                                return o.__generator(this, function(t) {
                                    switch (t.label) {
                                        case 0:
                                            return [4, this.props.updateChanlet(e, n)];
                                        case 1:
                                            return t.sent(), this.closeChanletModals(), [2]
                                    }
                                })
                            })
                        }, t.createChanletGroup = function(e) {
                            return o.__awaiter(t, void 0, void 0, function() {
                                return o.__generator(this, function(t) {
                                    switch (t.label) {
                                        case 0:
                                            return [4, this.props.createContentAttributes([e])];
                                        case 1:
                                            return t.sent(), this.closeChanletModals(), [2]
                                    }
                                })
                            })
                        }, t.updateChanletGroup = function(e, n) {
                            return o.__awaiter(t, void 0, void 0, function() {
                                var t, a, r, l, i, s, c, u, d;
                                return o.__generator(this, function(p) {
                                    switch (p.label) {
                                        case 0:
                                            for (t = [], a = [], r = o.__assign({
                                                    ownerChannelID: this.props.channelID
                                                }, e), a.push(this.props.updateContentAttributes([r])), l = 0, i = this.props.chanlets; l < i.length; l++)(s = i[l]).id && (c = (s.contentAttributes || []).map(function(e) {
                                                return e.id
                                            }), u = !1, n[s.id] ? (c = (n[s.id].contentAttributes || []).map(function(e) {
                                                return e.id
                                            }), u = !0) : (d = c.findIndex(function(t) {
                                                return t === e.id
                                            })) > -1 && (c.splice(d, 1), u = !0), u && t.push(this.props.updateChanlet(s.id, c)));
                                            return [4, Promise.all(t)];
                                        case 1:
                                            return p.sent(), [4, Promise.all(a)];
                                        case 2:
                                            return p.sent(), this.closeChanletModals(), [2]
                                    }
                                })
                            })
                        }, t.deleteChanletGroup = function(e) {
                            return o.__awaiter(t, void 0, void 0, function() {
                                return o.__generator(this, function(t) {
                                    switch (t.label) {
                                        case 0:
                                            return [4, this.props.deleteContentAttributes([e.id])];
                                        case 1:
                                            return t.sent(), this.closeChanletModals(), [2]
                                    }
                                })
                            })
                        }, t.editChanletModal = function(e) {
                            t.setState({
                                isChanletModalOpen: !0,
                                chanlet: e
                            })
                        }, t.createChanletGroupModal = function() {
                            t.setState({
                                isCreateChanletGroupModalOpen: !0
                            })
                        }, t.editChanletGroupModal = function(e) {
                            t.setState({
                                chanletGroup: e,
                                isEditChanletGroupModalOpen: !0
                            })
                        }, t.closeChanletModals = function() {
                            t.setState({
                                isChanletModalOpen: !1,
                                isCreateChanletGroupModalOpen: !1,
                                isEditChanletGroupModalOpen: !1
                            })
                        }, t
                    }
                    return o.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        return l.createElement(u.a, null, this.renderChanletGroups(), this.renderChanlets())
                    }, t.prototype.renderChanletGroups = function() {
                        var e = this.props.availableContentAttributes.filter(function(e) {
                            return e.key === b.a.Group
                        });
                        return l.createElement(p.Ya, {
                            margin: {
                                bottom: 3
                            }
                        }, l.createElement(p.Fb, {
                            display: p.X.Flex,
                            justifyContent: p.Xa.Between,
                            padding: {
                                bottom: 2
                            }
                        }, l.createElement(p.W, {
                            type: p.Wb.H4,
                            bold: !0
                        }, Object(s.e)("Chanlet Groups", "ChanletsTab")), l.createElement(p.Ya, null, l.createElement(p.z, {
                            "data-test-selector": I.AddGroup,
                            icon: p.ub.Plus,
                            type: p.F.Hollow,
                            onClick: this.createChanletGroupModal
                        }, Object(s.e)("Add Group", "ChanletsTab")))), !e.length && this.renderEmptyList(Object(s.e)("No Chanlet Groups", "ChanletsGroup")), e.map(this.renderChanletGroupItem), this.renderCreateChanletGroupModal(), this.renderEditChanletGroupModal())
                    }, t.prototype.renderChanlets = function() {
                        var e = this.props.chanlets;
                        return l.createElement(p.Ya, null, l.createElement(p.Fb, {
                            display: p.X.Flex,
                            justifyContent: p.Xa.Between,
                            padding: {
                                bottom: 2
                            }
                        }, l.createElement(p.W, {
                            type: p.Wb.H4,
                            bold: !0
                        }, Object(s.e)("All Chanlets", "ChanletsTab")), l.createElement(p.Ya, null, l.createElement(d.a, {
                            triggerModal: this.renderAddChanletModal
                        }, function(e) {
                            return l.createElement(p.z, {
                                icon: p.ub.Plus,
                                type: p.F.Hollow,
                                onClick: e
                            }, Object(s.e)("Add Chanlet", "ChanletsTab"))
                        }))), !e.length && this.renderEmptyList(Object(s.e)("No Chanlets", "ChanletsGroup")), e.map(this.renderChanletItem), this.renderChanletModal())
                    }, t.prototype.renderChanletModal = function() {
                        var e = this.state.chanlet;
                        if (e && this.state.isChanletModalOpen) return l.createElement(F, {
                            onClose: this.closeChanletModals,
                            updateChanlet: this.updateChanlet,
                            availableContentAttributes: this.props.availableContentAttributes,
                            chanlet: e
                        })
                    }, t.prototype.renderCreateChanletGroupModal = function() {
                        if (this.state.isCreateChanletGroupModalOpen) return l.createElement(y, {
                            onClose: this.closeChanletModals,
                            createChanletGroup: this.createChanletGroup
                        })
                    }, t.prototype.renderEditChanletGroupModal = function() {
                        var e = this.state.chanletGroup;
                        if (e && this.state.isEditChanletGroupModalOpen) return l.createElement(O, {
                            onClose: this.closeChanletModals,
                            updateChanletGroup: this.updateChanletGroup,
                            availableContentAttributes: this.props.availableContentAttributes,
                            chanlets: this.props.chanlets,
                            chanletGroup: e
                        })
                    }, t.prototype.renderEmptyList = function(e) {
                        return l.createElement(p.Fb, {
                            "data-test-selector": I.EmptyList,
                            padding: {
                                y: 2
                            },
                            borderTop: !0
                        }, l.createElement(p.W, {
                            italic: !0,
                            color: p.O.Alt2
                        }, e))
                    }, t
                }(l.Component),
                j = Object(i.compose)(Object(c.b)("ChanletsTab"))(D);
            n.d(t, "TestSelectors", function() {
                return I
            }), n.d(t, "ChanletsTabComponent", function() {
                return D
            }), n.d(t, "ChanletsTab", function() {
                return j
            })
        },
        "Jxh/": function(e, t, n) {
            "use strict";

            function a(e) {
                var t = document.createElement("textarea");
                t.style.position = "fixed", t.style.top = "0", t.style.left = "0", t.style.fontSize = "12pt", t.style.width = "2em", t.style.height = "2em", t.style.padding = "0", t.style.border = "none", t.style.outline = "none", t.style.boxShadow = "none", t.style.background = "transparent", t.value = e, document.body.appendChild(t), t.select();
                var n = !0;
                try {
                    n = document.execCommand("copy")
                } catch (e) {
                    n = !1
                }
                return document.body.removeChild(t), n
            }
            n.d(t, "a", function() {
                return a
            })
        },
        LZzM: function(e, t, n) {
            "use strict";
            var a = n("mrSG"),
                r = n("q1tI"),
                o = n("fvjX"),
                l = n("/7QA"),
                i = n("cZKs"),
                s = n("Ue10"),
                c = (n("oz3/"), {
                    "data-test-selector": "i-understand-button"
                }),
                u = {
                    "data-test-selector": "close-button"
                },
                d = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        return r.createElement(s.Fb, {
                            className: "stream-key-confirm-modal",
                            borderBottom: !0,
                            background: s.r.Base,
                            elevation: 3,
                            padding: {
                                x: 2,
                                top: 3,
                                bottom: 2
                            }
                        }, r.createElement(s.Fb, {
                            borderBottom: !0,
                            padding: {
                                bottom: 2
                            }
                        }, r.createElement(s.W, {
                            type: s.Wb.H4,
                            color: s.O.Alt
                        }, Object(l.d)("Stream Key", "StreamKeySettingsForm"))), r.createElement(s.Ya, {
                            padding: {
                                y: 2
                            }
                        }, r.createElement(s.W, {
                            color: s.O.Error,
                            bold: !0
                        }, Object(l.d)("Never share your stream key with anyone or show it on stream! Twitch Staff, Admins, or Global Moderators will never ask you for this information.", "StreamKeySettingsForm"))), r.createElement(s.Fb, {
                            borderBottom: !0,
                            padding: {
                                bottom: 2
                            }
                        }, Object(l.d)('Please click "I Understand" if you understand the above and would like to view your stream key.', "StreamKeySettingsForm")), r.createElement(s.Ya, {
                            display: s.X.Flex,
                            justifyContent: s.Xa.Center,
                            padding: {
                                top: 2
                            }
                        }, r.createElement(s.z, a.__assign({}, c, {
                            onClick: Object(o.compose)(this.props.showStreamKey, this.props.onClose)
                        }), Object(l.d)("I Understand", "StreamKeySettingsForm"))), r.createElement(i.a, {
                            closeOnBackdropClick: !0
                        }))
                    }, t
                }(r.Component);
            n.d(t, !1, function() {
                return c
            }), n.d(t, !1, function() {
                return u
            }), n.d(t, "a", function() {
                return d
            })
        },
        N3I0: function(e, t, n) {
            "use strict";
            var a = n("mrSG"),
                r = n("q1tI"),
                o = n("u5aL"),
                l = n("/7QA"),
                i = n("Ue10"),
                s = function() {
                    return r.createElement(i.Ya, {
                        display: i.X.Flex,
                        flexDirection: i.Aa.Column,
                        justifyContent: i.Xa.Center,
                        alignItems: i.f.Center,
                        flexGrow: 1,
                        fullHeight: !0,
                        padding: {
                            y: 1
                        },
                        zIndex: i.jc.Above
                    }, r.createElement(i.Fb, {
                        color: i.O.Alt2,
                        textAlign: i.Sb.Center,
                        flexShrink: 1
                    }, r.createElement(i.tb, {
                        asset: i.ub.DeadGlitch,
                        width: 46,
                        height: 48
                    })), r.createElement(i.Qa, {
                        margin: {
                            top: 1
                        },
                        textAlign: i.Sb.Center
                    }, r.createElement(i.W, {
                        type: i.Wb.H4,
                        "data-test-selector": "search-error-message"
                    }, Object(l.d)("Search is not available at this time", "DropdownSearchError"))), r.createElement(i.W, {
                        type: i.Wb.P
                    }, Object(l.d)("Please try again later", "DropdownSearchError")))
                },
                c = n("8Ad5"),
                u = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            focusSelectable: !1,
                            isInputFocused: !1,
                            isOpen: !1
                        }, t.handleChange = function(e) {
                            t.props.onChange(e.target.value)
                        }, t.handleFocus = function() {
                            t.props.onFocusInput && t.props.onFocusInput(), t.setState({
                                isInputFocused: !0
                            })
                        }, t.handleBlur = function() {
                            t.setState({
                                isInputFocused: !1
                            })
                        }, t.onKeyDown = function(e) {
                            var n = function() {
                                e.preventDefault(), e.stopPropagation()
                            };
                            e.keyCode === c.a.Esc ? t.setState({
                                isOpen: !1
                            }) : e.keyCode === c.a.Up ? (n(), t.focusNext(-1)) : e.keyCode === c.a.Down && (n(), t.focusNext(1))
                        }, t.onClickOut = function() {
                            t.state.isOpen && t.setState({
                                isOpen: !1
                            }), t.props.onClose && t.props.onClose()
                        }, t.onMouseOver = function(e) {
                            var n = e.target.closest("[data-selectable]");
                            n && (n.focus(), n.tabIndex = 0, t.state.currentFocus && (t.state.currentFocus.tabIndex = -1), t.setState({
                                currentFocus: n
                            }), t.props.onFocusChange && t.props.onFocusChange(n))
                        }, t.getInputRef = function(e) {
                            t.inputRef = e
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        var e = void 0 === this.props.showDropdown || this.props.showDropdown,
                            t = this.props.isErrored ? r.createElement(s, null) : r.Children.only(this.props.children),
                            n = r.createElement(i.wb, {
                                onChange: this.handleChange,
                                onKeyDown: this.onKeyDown,
                                onBlur: this.handleBlur,
                                onFocus: this.handleFocus,
                                placeholder: this.props.placeholder,
                                id: "nav-search-input",
                                "data-a-target": "nav-search-input",
                                spellCheck: !1,
                                refDelegate: this.getInputRef,
                                size: this.props.inputSize,
                                autoFocus: this.props.autoFocus
                            });
                        return this.props.inline ? r.createElement(o.a, {
                            onClickOut: this.onClickOut
                        }, r.createElement(i.Fb, {
                            background: this.state.isInputFocused || this.state.isOpen ? i.r.Base : void 0,
                            borderRadius: i.x.Large,
                            padding: .5,
                            position: i.kb.Relative,
                            elevation: this.state.isInputFocused || this.state.isOpen ? 3 : void 0
                        }, n, e && r.createElement(i.Fb, {
                            attachLeft: !0,
                            background: i.r.Base,
                            borderRadius: i.x.Large,
                            display: this.state.isOpen ? i.X.Block : i.X.Hide,
                            fullWidth: !0,
                            padding: {
                                y: 1
                            },
                            position: i.kb.Absolute,
                            zIndex: i.jc.Above,
                            elevation: 3
                        }, r.createElement("div", {
                            tabIndex: 0,
                            onKeyDown: this.onKeyDown,
                            onMouseOver: this.props.enableMouseEvents ? this.onMouseOver : void 0
                        }, t)))) : r.createElement(o.a, {
                            onClickOut: this.onClickOut
                        }, n, e && r.createElement(i.u, a.__assign({
                            noTail: !0
                        }, this.props.balloonProps, {
                            show: this.state.isOpen
                        }), r.createElement("div", {
                            tabIndex: 0,
                            onKeyDown: this.onKeyDown,
                            onMouseOver: this.props.enableMouseEvents ? this.onMouseOver : void 0
                        }, t)))
                    }, t.prototype.toggle = function(e) {
                        e !== this.state.isOpen && this.setState({
                            isOpen: e
                        })
                    }, t.prototype.setValue = function(e) {
                        this.inputRef.value = e
                    }, t.prototype.focusNext = function(e) {
                        var t, n = document.querySelectorAll("[data-selectable=true]"),
                            a = document.activeElement,
                            r = Array.prototype.indexOf.call(n, a);
                        if ((t = r < 0 ? e > 0 ? 0 : n.length - 1 : r + e) < 0 && (t = 0), !(t >= n.length)) {
                            var o = n.item(t);
                            o.focus(), o.tabIndex = 0, this.state.currentFocus && (this.state.currentFocus.tabIndex = -1), this.setState({
                                currentFocus: o
                            }), this.props.onFocusChange && this.props.onFocusChange(o)
                        }
                    }, t
                }(r.Component);
            n.d(t, "a", function() {
                return u
            })
        },
        Ucfb: function(e, t, n) {},
        il7S: function(e, t, n) {
            "use strict";
            var a, r;
            n.d(t, "a", function() {
                    return a
                }), n.d(t, "b", function() {
                    return r
                }),
                function(e) {
                    e.Group = "group", e.Team = "team", e.Player = "player", e.Role = "role"
                }(a || (a = {})),
                function(e) {
                    e.Group = "Group", e.Team = "Team", e.Player = "Player", e.Role = "Role"
                }(r || (r = {}))
        },
        "oz3/": function(e, t, n) {},
        vV5t: function(e, t, n) {
            "use strict";
            var a = n("mrSG"),
                r = n("q1tI"),
                o = n("N3I0"),
                l = n("8/mp"),
                i = n("eJ65"),
                s = n("Ue10"),
                c = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.toggle = function(e) {
                            t.dropdownSearch && t.dropdownSearch.toggle(e), t.balloon && t.balloon.toggleBalloon(e)
                        }, t.setBallonRef = function(e) {
                            t.balloon = e
                        }, t.setSearchRef = function(e) {
                            t.dropdownSearch = e
                        }, t.onBalloonToggle = function(e) {
                            e || (t.dropdownSearch && t.dropdownSearch.setValue(""), t.onInputChange(""))
                        }, t.onSearchFocus = function() {
                            t.dropdownSearch && t.dropdownSearch.toggle(!0)
                        }, t.onInputChange = function(e) {
                            t.onSearchFocus(), t.props.onChange(e)
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.onSearchFocus()
                    }, t.prototype.render = function() {
                        return r.createElement(s.Ya, {
                            margin: {
                                right: .5
                            }
                        }, r.createElement(i.a, {
                            onToggle: this.onBalloonToggle,
                            ref: this.setBallonRef
                        }, r.createElement(s.z, {
                            disabled: this.props.disabled,
                            type: s.F.Hollow
                        }, this.props.buttonText), r.createElement(s.u, {
                            direction: this.props.balloonDirection || s.v.BottomLeft,
                            tailOffset: 8
                        }, r.createElement(s.Ya, {
                            position: s.kb.Relative
                        }, r.createElement(o.a, {
                            autoFocus: !0,
                            inline: !0,
                            showDropdown: !0,
                            onChange: this.onInputChange,
                            onFocusInput: this.onSearchFocus,
                            placeholder: this.props.buttonText,
                            ref: this.setSearchRef
                        }, r.createElement(l.b, {
                            className: "content-attribute-dropdown__scrollable-area",
                            suppressScrollX: !0
                        }, r.createElement(s.Ya, null, this.props.children)))))))
                    }, t
                }(r.Component);
            n.d(t, "a", function() {
                return c
            })
        },
        xefp: function(e, t, n) {},
        zIYK: function(e, t, n) {}
    }
]);