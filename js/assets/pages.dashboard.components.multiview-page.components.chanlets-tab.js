(window.webpackJsonp = window.webpackJsonp || []).push([
    [155], {
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
                u = Object(l.compose)(Object(i.b)("MultiviewModal"))(c);
            n.d(t, !1, function() {
                return c
            }), n.d(t, "a", function() {
                return u
            })
        },
        Driw: function(e, t, n) {
            "use strict";
            var a, r = n("q1tI"),
                o = n("/7QA"),
                l = n("eJ65"),
                i = n("Ue10");
            ! function(e) {
                e.Edit = "more-balloon__edit", e.Delete = "more-balloon__delete"
            }(a || (a = {}));
            var s = function(e) {
                return r.createElement(i.Xa, {
                    margin: {
                        right: .5
                    }
                }, r.createElement(l.a, null, r.createElement(i.z, {
                    icon: i.tb.More,
                    type: i.F.Text
                }), r.createElement(i.u, {
                    direction: i.v.BottomRight,
                    tailOffset: 8
                }, e.onEdit && r.createElement(i.Ua, {
                    onClick: e.onEdit,
                    "data-test-selector": a.Edit
                }, r.createElement(i.Xa, {
                    className: "chanlets-tab__balloon-item",
                    padding: {
                        x: 1,
                        y: 1
                    },
                    display: i.X.Flex,
                    alignItems: i.f.Center
                }, r.createElement(i.sb, {
                    asset: i.tb.Edit,
                    type: i.ub.Brand
                }), r.createElement(i.Xa, {
                    margin: {
                        left: 1
                    }
                }, Object(o.e)("Edit", "ChanletsGroup")))), e.onDelete && r.createElement(i.Ua, {
                    onClick: e.onDelete,
                    "data-test-selector": a.Delete
                }, r.createElement(i.Xa, {
                    className: "chanlets-tab__balloon-item",
                    padding: {
                        x: 1,
                        y: 1
                    },
                    display: i.X.Flex,
                    alignItems: i.f.Center
                }, r.createElement(i.sb, {
                    asset: i.tb.Trash,
                    type: i.ub.Brand
                }), r.createElement(i.Xa, {
                    margin: {
                        left: 1
                    }
                }, Object(o.e)("Delete", "ChanletsGroup")))))))
            };
            n.d(t, !1, function() {
                return a
            }), n.d(t, "a", function() {
                return s
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
                        var e = this.props.imageURL || s.a.defaultAvatarURL;
                        return l.createElement(p.Eb, {
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
                        }, l.createElement("img", {
                            "data-test-selector": r.Image,
                            className: "content-attribute-chip__icon",
                            src: e,
                            alt: this.props.value
                        }), l.createElement(p.Xa, {
                            "data-test-selector": r.Value,
                            padding: {
                                x: 1
                            }
                        }, l.createElement(p.W, {
                            bold: !0
                        }, this.props.value)), this.props.onClick && l.createElement(p.Eb, {
                            borderRadius: p.x.Rounded,
                            background: p.r.Alt2
                        }, l.createElement(p.A, {
                            "data-test-selector": r.Remove,
                            onClick: this.props.onClick,
                            icon: p.tb.RemoveTag,
                            size: p.B.Small,
                            type: p.C.Secondary
                        })))
                    }, t
                }(l.Component),
                C = n("8/mp"),
                b = n("CS6u"),
                f = n("il7S");
            ! function(e) {
                e.Cancel = "edit-chanlet-group-modal__cancel", e.Create = "edit-chanlet-group-modal__create", e.Value = "edit-chanlet-group-modal__value", e.ValueForm = "edit-chanlet-group-modal__value-form"
            }(h || (h = {}));
            var E, y = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            isSaving: !1,
                            editMade: !1,
                            chanletGroup: {
                                key: f.a.Group,
                                name: f.b.Group,
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
                                return o.__generator(this, function(e) {
                                    switch (e.label) {
                                        case 0:
                                            return this.validChanletGroupValue() ? [4, this.props.createChanletGroup(this.state.chanletGroup)] : [2];
                                        case 1:
                                            return e.sent(), [2]
                                    }
                                })
                            })
                        }, t
                    }
                    return o.__extends(t, e), t.prototype.render = function() {
                        var e = this.state.chanletGroup;
                        return l.createElement(b.a, {
                            isOpen: !0
                        }, l.createElement(p.Eb, {
                            display: p.X.Flex,
                            padding: {
                                bottom: 2
                            },
                            margin: {
                                bottom: 2
                            },
                            justifyContent: p.Wa.Between
                        }, l.createElement(p.Xa, {
                            flexGrow: 0,
                            flexShrink: 1
                        }, l.createElement(p.W, {
                            type: p.Vb.H3
                        }, Object(s.e)("Create Chanlet Metadata Group", "CreateChanletGroupModal"))), l.createElement(p.Xa, {
                            flexGrow: 0,
                            flexShrink: 0
                        }, l.createElement(p.z, {
                            onClick: this.props.onClose,
                            "data-test-selector": h.Cancel,
                            type: p.F.Text
                        }, Object(s.d)("Cancel", "CreateChanletGroupModal")), l.createElement(p.Xa, {
                            margin: {
                                left: 1
                            },
                            display: p.X.InlineBlock
                        }, l.createElement(p.z, {
                            onClick: this.createChanletGroup,
                            "data-test-selector": h.Create,
                            disabled: !this.canSave()
                        }, Object(s.d)("Create", "CreateChanletGroupModal"))))), l.createElement(C.b, null, l.createElement(p.Eb, {
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
                        }, l.createElement(p.Ra, {
                            type: p.Ta.Text,
                            "data-test-selector": h.Value,
                            onChange: this.onChanletGroupValueChange,
                            value: e.value
                        })))))
                    }, t.prototype.validChanletGroupValue = function() {
                        return !!this.state.chanletGroup.value
                    }, t.prototype.canSave = function() {
                        return !this.state.isSaving && this.validChanletGroupValue()
                    }, t
                }(l.Component),
                g = n("cZKs");
            ! function(e) {
                e.Cancel = "create-chanlet-modal__cancel", e.Confirm = "create-chanlet-modal__confirm"
            }(E || (E = {}));
            var v, S = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {}, t.onConfirmClick = function() {
                            return o.__awaiter(t, void 0, void 0, function() {
                                return o.__generator(this, function(e) {
                                    return this.props.onConfirm(), this.props.onClose(), [2]
                                })
                            })
                        }, t
                    }
                    return o.__extends(t, e), t.prototype.render = function() {
                        return l.createElement(p.Eb, {
                            background: p.r.Base,
                            className: "create-chanlet-modal",
                            elevation: 3
                        }, l.createElement(p.Eb, {
                            borderBottom: !0,
                            display: p.X.Flex,
                            justifyContent: p.Wa.Center,
                            padding: 2
                        }, l.createElement(p.W, {
                            bold: !0,
                            fontSize: p.Ca.Size4
                        }, Object(s.e)("Create a new multiview chanlet?", "CreateChanletModal"))), l.createElement(p.Eb, {
                            background: p.r.Alt,
                            display: p.X.Flex,
                            justifyContent: p.Wa.Center,
                            padding: 2
                        }, l.createElement(p.Xa, {
                            margin: {
                                right: .5
                            }
                        }, l.createElement(p.z, {
                            "data-test-selector": E.Cancel,
                            onClick: this.props.onClose,
                            type: p.F.Hollow
                        }, Object(s.d)("Cancel", "CreateChanletModal"))), l.createElement(p.Xa, {
                            margin: {
                                left: 1
                            }
                        }, l.createElement(p.z, {
                            "data-test-selector": E.Confirm,
                            onClick: this.onConfirmClick
                        }, Object(s.d)("Create Chanlet", "CreateChanletModal")))), l.createElement(g.a, {
                            closeOnBackdropClick: !0
                        }))
                    }, t
                }(l.Component),
                _ = n("N3I0"),
                G = n("GIun"),
                w = n("Driw"),
                k = function(e, t, n) {
                    void 0 === t && (t = 480), void 0 === n && (n = 272);
                    var a = "https://static-cdn.jtvnw.net/previews-ttv/live_user_jtgtv-" + t + "x" + n + ".jpg";
                    return e && e.stream && e.stream.previewImageURL ? e.stream.previewImageURL : a
                };
            n("0vXd");
            ! function(e) {
                e.Cancel = "edit-chanlet-group-modal__cancel", e.Update = "edit-chanlet-group-modal__update", e.Value = "edit-chanlet-group-modal__value", e.ValueForm = "edit-chanlet-group-modal__value-form"
            }(v || (v = {}));
            var M, O = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            isSaving: !1,
                            searchTerm: "",
                            selectedChanlets: [],
                            chanletGroup: {
                                __typename: "MultiviewContentAttribute",
                                id: "",
                                key: f.a.Group,
                                name: f.b.Group,
                                parentID: null,
                                parentKey: null,
                                value: "",
                                valueShortName: ""
                            }
                        }, t.renderChanletItem = function(e) {
                            return l.createElement(p.Eb, {
                                background: p.r.Base,
                                elevation: 1,
                                margin: {
                                    bottom: 1
                                },
                                alignItems: p.f.Center,
                                justifyContent: p.Wa.Between,
                                display: p.X.Flex,
                                flexDirection: p.Aa.Row,
                                key: e.id
                            }, l.createElement("img", {
                                className: "edit-chanlet-group-modal__chanlet-row-img",
                                src: k(e)
                            }), l.createElement(p.Xa, {
                                flexGrow: 1,
                                padding: {
                                    x: 2
                                }
                            }, t.renderChanletContentAttributes(e)), l.createElement(p.W, {
                                color: p.O.Alt2
                            }, e.name), l.createElement(w.a, {
                                onDelete: t.removeChanlet.bind(t, e)
                            }))
                        }, t.renderChanletContentAttributes = function(e) {
                            if (e && e.contentAttributes) return e.contentAttributes.filter(function(e) {
                                return e.key !== f.a.Group && e.key !== f.a.Team
                            }).map(function(e, t) {
                                return l.createElement(m, {
                                    key: t,
                                    value: e.value
                                })
                            })
                        }, t.removeChanlet = function(e) {}, t.setTeamSearchRef = function(e) {
                            t.teamSearch = e
                        }, t.onTeamSearchFocus = function() {
                            t.teamSearch && t.teamSearch.toggle(!0)
                        }, t.onTeamInputChange = function(e) {
                            t.onTeamSearchFocus(), t.setState({
                                searchTerm: e
                            })
                        }, t.onTeamDropdownChoose = function(e) {
                            var n = o.__assign({}, t.state.chanletGroup, {
                                parentKey: e.key,
                                parentID: e.id
                            });
                            t.setState({
                                chanletGroup: n
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
                        }, t.filteredContentAttributes = function(e) {
                            return e.key === f.a.Team && e.value.toLowerCase().indexOf(t.state.searchTerm.toLowerCase()) > -1
                        }, t.renderAvailableContentAttributes = function() {
                            return t.props.availableContentAttributes.filter(t.filteredContentAttributes).map(function(e, n) {
                                return l.createElement(G.a, {
                                    key: n
                                }, l.createElement(p.Ua, {
                                    onClick: t.onTeamDropdownChoose.bind(t, e)
                                }, l.createElement(p.Xa, {
                                    padding: 1
                                }, l.createElement(p.W, null, e.name + " - " + e.value))))
                            })
                        }, t.openChanletDropDown = function() {}, t.onChanletGroupValueChange = function(e) {
                            var n = e.target.value,
                                a = o.__assign({}, t.state.chanletGroup, {
                                    value: n
                                });
                            t.setState({
                                chanletGroup: a
                            })
                        }, t.updateChanletGroup = function() {
                            return o.__awaiter(t, void 0, void 0, function() {
                                return o.__generator(this, function(e) {
                                    switch (e.label) {
                                        case 0:
                                            return this.validChanletGroupValue() ? (this.setState({
                                                isSaving: !0
                                            }), [4, this.props.updateChanletGroup(this.state.chanletGroup, this.state.selectedChanlets)]) : [2];
                                        case 1:
                                            return e.sent(), [2]
                                    }
                                })
                            })
                        }, t
                    }
                    return o.__extends(t, e), t.prototype.componentDidMount = function() {
                        var e = this,
                            t = this.props.chanlets.filter(function(t) {
                                return t.contentAttributes && t.contentAttributes.filter(function(t) {
                                    return t.id === e.props.chanletGroup.id
                                })
                            });
                        this.setState({
                            chanletGroup: this.props.chanletGroup,
                            selectedChanlets: t
                        })
                    }, t.prototype.render = function() {
                        var e = this.state,
                            t = e.chanletGroup,
                            n = e.selectedChanlets;
                        return l.createElement(b.a, {
                            isOpen: !0
                        }, l.createElement(C.b, null, l.createElement(p.Xa, {
                            padding: {
                                right: 2
                            }
                        }, l.createElement(p.Eb, {
                            display: p.X.Flex,
                            padding: {
                                bottom: 2
                            },
                            margin: {
                                bottom: 2
                            },
                            justifyContent: p.Wa.Between
                        }, l.createElement(p.Xa, {
                            flexGrow: 0,
                            flexShrink: 1
                        }, l.createElement(p.W, {
                            type: p.Vb.H3
                        }, Object(s.e)("Edit Metadata Group", "EditChanletGroupModal"))), l.createElement(p.Xa, {
                            flexGrow: 0,
                            flexShrink: 0
                        }, l.createElement(p.z, {
                            onClick: this.props.onClose,
                            "data-test-selector": v.Cancel,
                            type: p.F.Text
                        }, Object(s.d)("Cancel", "EditChanletGroupModal")), l.createElement(p.Xa, {
                            margin: {
                                left: 1
                            },
                            display: p.X.InlineBlock
                        }, l.createElement(p.z, {
                            onClick: this.updateChanletGroup,
                            "data-test-selector": v.Update,
                            disabled: !this.canSave()
                        }, Object(s.d)("Update", "EditChanletGroupModal"))))), l.createElement(p.Xa, {
                            margin: {
                                bottom: 2
                            }
                        }, l.createElement(p.Ea, {
                            id: "chanlet-group-team",
                            label: Object(s.e)("Which Team is streaming on this group of Chanlets?", "EditChanletGroupModal")
                        }, l.createElement(p.Eb, {
                            background: p.r.Base,
                            elevation: 2,
                            padding: 1
                        }, l.createElement(_.a, {
                            showDropdown: !0,
                            onChange: this.onTeamInputChange,
                            onFocusInput: this.onTeamSearchFocus,
                            placeholder: Object(s.e)("Assign Team", "EditChanletGroupModal"),
                            ref: this.setTeamSearchRef
                        }, l.createElement(C.b, {
                            className: "chanlets-tab__scrollable-area",
                            suppressScrollX: !0
                        }, l.createElement(p.Xa, null, this.renderAvailableContentAttributes()))), l.createElement(p.Eb, {
                            padding: {
                                y: 1
                            },
                            display: p.X.Flex,
                            flexDirection: p.Aa.Row,
                            alignItems: p.f.Center
                        }, this.renderChanletGroupTeam())))), l.createElement(p.Xa, {
                            margin: {
                                bottom: 2
                            }
                        }, l.createElement(p.Eb, {
                            margin: {
                                bottom: 2
                            },
                            padding: {
                                bottom: 2
                            },
                            display: p.X.Flex,
                            flexDirection: p.Aa.Row,
                            justifyContent: p.Wa.Between,
                            borderBottom: !0
                        }, l.createElement(p.Xa, null, l.createElement(p.W, {
                            bold: !0
                        }, Object(s.e)("Group Chanlets", "EditChanletGroupModal"))), l.createElement(p.z, {
                            type: p.F.Hollow,
                            onClick: this.openChanletDropDown
                        }, Object(s.e)("Add Chanlet", "EditChanletGroupModal"))), !n.length && l.createElement(p.W, {
                            italic: !0
                        }, Object(s.e)("No Chanlets", "EditChanletGroupModal")), n.map(this.renderChanletItem)), l.createElement(p.Eb, {
                            background: p.r.Alt,
                            padding: 2,
                            margin: {
                                bottom: 2
                            }
                        }, l.createElement(p.Ea, {
                            id: "group-name",
                            "data-test-selector": v.ValueForm,
                            label: Object(s.e)("Group Name", "EditChanletGroupModal"),
                            error: !this.validChanletGroupValue(),
                            errorMessage: Object(s.e)("Invalid Chanlet Group Name", "EditChanletGroupModal")
                        }, l.createElement(p.Ra, {
                            type: p.Ta.Text,
                            "data-test-selector": v.Value,
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
            }(M || (M = {}));
            var I, j = function(e) {
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
                    }, t.onSearchFocus = function() {
                        t.contentAttributeSearch && t.contentAttributeSearch.toggle(!0)
                    }, t.onInputChange = function(e) {
                        t.onSearchFocus(), t.setState({
                            searchTerm: e
                        })
                    }, t.onDropdownChoose = function(e) {
                        var n = o.__assign({}, t.state.chanlet);
                        n.contentAttributes || (n.contentAttributes = []), n.contentAttributes = n.contentAttributes.concat([e]), t.setState({
                            chanlet: n
                        }), t.contentAttributeSearch.toggle(!1)
                    }, t.renderChanletContentAttributes = function() {
                        if (t.state.chanlet && t.state.chanlet.contentAttributes) return t.state.chanlet.contentAttributes.filter(function(e) {
                            return e.key !== f.a.Group && e.key !== f.a.Team
                        }).map(function(e, n) {
                            return l.createElement(m, {
                                key: n,
                                value: e.value,
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
                        if (e.key === f.a.Group || e.key === f.a.Team) return !1;
                        var n = t.state.searchTerm.toLowerCase(),
                            a = Object.keys(e).filter(function(t) {
                                return "string" == typeof e[t] && (e[t] || "").toLowerCase().indexOf(n) > -1
                            }).length > 0;
                        return t.state.chanlet.contentAttributes ? a && !t.state.chanlet.contentAttributes.map(function(e) {
                            return e.id
                        }).includes(e.id) : a
                    }, t.renderAvailableContentAttributes = function() {
                        return t.props.availableContentAttributes.filter(t.filteredContentAttributes).map(function(e, n) {
                            return l.createElement(G.a, {
                                key: n
                            }, l.createElement(p.Ua, {
                                onClick: t.onDropdownChoose.bind(t, e)
                            }, l.createElement(p.Xa, {
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
                    return l.createElement(b.a, {
                        isOpen: !0
                    }, l.createElement(C.b, null, l.createElement(p.Xa, {
                        padding: {
                            right: 2
                        }
                    }, l.createElement(p.Eb, {
                        display: p.X.Flex,
                        padding: {
                            bottom: 2
                        },
                        margin: {
                            bottom: 2
                        },
                        justifyContent: p.Wa.Between
                    }, l.createElement(p.Xa, {
                        flexGrow: 0,
                        flexShrink: 1
                    }, l.createElement(p.W, {
                        type: p.Vb.H3
                    }, Object(s.e)("Edit Chanlet Properties", "EditChanletModal"))), l.createElement(p.Xa, {
                        flexGrow: 0,
                        flexShrink: 0
                    }, l.createElement(p.z, {
                        "data-test-selector": M.Cancel,
                        onClick: this.props.onClose,
                        type: p.F.Text
                    }, Object(s.e)("Cancel", "EditChanletModal")), l.createElement(p.Xa, {
                        margin: {
                            left: 1
                        },
                        display: p.X.InlineBlock
                    }, l.createElement(p.z, {
                        "data-test-selector": M.Update,
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
                    }, l.createElement(p.Xa, null, l.createElement(p.W, {
                        bold: !0
                    }, Object(s.e)("Chanlet Preview", "EditChanletPreview")), l.createElement(p.Eb, {
                        padding: .5,
                        margin: {
                            y: 1
                        },
                        border: !0,
                        borderRadius: p.x.Small
                    }, l.createElement("img", {
                        src: k(this.props.chanlet)
                    })))), l.createElement(p.P, {
                        cols: {
                            default: 12,
                            md: 6,
                            lg: 7
                        }
                    }, l.createElement(p.Xa, {
                        margin: {
                            bottom: 2
                        }
                    }, l.createElement(p.Ea, {
                        id: "chanlet-metadata",
                        label: Object(s.e)("What’s streaming on this Chanlet?", "EditChanletModal")
                    }, l.createElement(p.Eb, {
                        background: p.r.Base,
                        elevation: 2,
                        padding: 1
                    }, l.createElement(_.a, {
                        showDropdown: !0,
                        onChange: this.onInputChange,
                        onFocusInput: this.onSearchFocus,
                        placeholder: Object(s.e)("Add Metadata", "EditChanletModal"),
                        ref: this.setSearchRef
                    }, l.createElement(C.b, {
                        className: "chanlets-tab__scrollable-area",
                        suppressScrollX: !0
                    }, l.createElement(p.Xa, null, this.renderAvailableContentAttributes()))), l.createElement(p.Eb, {
                        padding: {
                            y: 1
                        },
                        display: p.X.Flex,
                        flexDirection: p.Aa.Row,
                        alignItems: p.f.Center
                    }, this.renderChanletContentAttributes())))), l.createElement(p.Xa, {
                        margin: {
                            bottom: 2
                        }
                    }, l.createElement(p.Ea, {
                        id: "chanlet-title",
                        "data-test-selector": M.Title,
                        label: Object(s.e)("Chanlet Title", "EditChanletModal"),
                        error: !this.validChanletName(),
                        errorMessage: Object(s.e)("Invalid Chanlet Name", "EditChanletModal")
                    }, l.createElement(p.Ra, {
                        type: p.Ta.Text,
                        onChange: this.onChanletNameChange,
                        value: this.state.chanlet.name || ""
                    }))), l.createElement(p.Xa, {
                        margin: {
                            bottom: 2
                        }
                    }, this.renderStreamKey()))))))
                }, t.prototype.renderStreamKey = function() {
                    var e = this.state.streamKeyCopied;
                    return l.createElement(p.Ea, {
                        label: Object(s.e)("Chanlet Stream key", "EditChanletModal")
                    }, l.createElement(p.Xa, {
                        display: p.X.Flex
                    }, l.createElement(p.Xa, {
                        flexGrow: 1,
                        padding: {
                            right: .5
                        }
                    }, l.createElement(p.Ra, {
                        readOnly: !0,
                        type: this.state.showStreamKey ? p.Ta.Text : p.Ta.Password,
                        value: this.props.chanlet.chanletStreamKey || "",
                        refDelegate: this.setKeyInputRef
                    })), l.createElement(p.Xa, {
                        padding: {
                            left: 1
                        }
                    }, l.createElement(p.z, {
                        ariaLabel: Object(s.e)("Copy Stream Key", "EditChanletModal"),
                        "data-test-selector": M.Copy,
                        disabled: e,
                        onClick: this.handleCopyToClipboard
                    }, e ? Object(s.e)("Copied", "EditChanletModal") : Object(s.e)("Copy", "EditChanletModal")))), l.createElement(p.Xa, {
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
                e.ChanletList = "chanlets-tab__chanlet-list", e.GroupList = "chanlets-tab__group-list", e.EmptyList = "chanlets-tab__empty-list"
            }(I || (I = {}));
            var X = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            isChanletModalOpen: !1,
                            isCreateChanletGroupModalOpen: !1,
                            isEditChanletGroupModalOpen: !1,
                            isSaving: !1
                        }, t.renderChanletGroupItem = function(e, n) {
                            var a = e.parentKey === f.a.Team && t.props.availableContentAttributes.find(function(t) {
                                    return t.id === e.parentID && t.key === e.parentKey
                                }),
                                r = t.props.chanlets.map(function(t) {
                                    return (t.contentAttributes || []).find(function(t) {
                                        return t.id === e.parentID && t.key === e.parentKey
                                    })
                                }).filter(function(e) {
                                    return !!e
                                }).length;
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
                            }, l.createElement(p.Xa, {
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
                            }, "ChanletsTab"))), l.createElement(w.a, {
                                onEdit: t.editChanletGroupModal.bind(t, e)
                            }))
                        }, t.renderChanletItem = function(e) {
                            var n = (e.contentAttributes || []).filter(function(e) {
                                return e.key === f.a.Player || e.key === f.a.Role
                            }).map(function(e) {
                                return l.createElement(m, {
                                    key: e.key,
                                    value: e.value
                                })
                            });
                            return l.createElement(p.Eb, {
                                background: p.r.Base,
                                elevation: 1,
                                margin: {
                                    bottom: 1
                                },
                                alignItems: p.f.Center,
                                justifyContent: p.Wa.Between,
                                display: p.X.Flex,
                                flexDirection: p.Aa.Row,
                                key: e.id
                            }, l.createElement("img", {
                                className: "chanlets-tab__chanlet-row-img",
                                src: k(e)
                            }), l.createElement(p.Xa, {
                                flexDirection: p.Aa.Column,
                                padding: 1,
                                flexGrow: 1
                            }, l.createElement(p.Xa, {
                                margin: {
                                    bottom: .5
                                }
                            }, n, !n.length && l.createElement(p.W, {
                                bold: !0,
                                fontSize: p.Ca.Size5
                            }, Object(s.e)("No Metadata", "ChanletsTab"))), l.createElement(p.W, {
                                color: p.O.Alt2
                            }, e.name)), l.createElement(w.a, {
                                onEdit: t.editChanletModal.bind(t, e)
                            }))
                        }, t.renderAddChanletModal = function(e) {
                            return l.createElement(S, {
                                onClose: e,
                                onConfirm: t.createChanlet
                            })
                        }, t.createChanlet = function() {
                            return o.__awaiter(t, void 0, void 0, function() {
                                var e;
                                return o.__generator(this, function(t) {
                                    switch (t.label) {
                                        case 0:
                                            this.setState({
                                                isSaving: !0
                                            }), t.label = 1;
                                        case 1:
                                            return t.trys.push([1, 3, , 4]), [4, this.props.createChanlet()];
                                        case 2:
                                            return t.sent(), [3, 4];
                                        case 3:
                                            return e = t.sent(), s.k.error(e, "Could not create chanlet"), [3, 4];
                                        case 4:
                                            return this.closeChanletModals(), [2]
                                    }
                                })
                            })
                        }, t.updateChanlet = function(e, n) {
                            return o.__awaiter(t, void 0, void 0, function() {
                                var t;
                                return o.__generator(this, function(a) {
                                    switch (a.label) {
                                        case 0:
                                            this.setState({
                                                isSaving: !0
                                            }), a.label = 1;
                                        case 1:
                                            return a.trys.push([1, 3, , 4]), [4, this.props.updateChanlet(e, n)];
                                        case 2:
                                            return a.sent(), [3, 4];
                                        case 3:
                                            return t = a.sent(), s.k.error(t, "Could not update chanlet"), [3, 4];
                                        case 4:
                                            return this.closeChanletModals(), [2]
                                    }
                                })
                            })
                        }, t.createChanletGroup = function(e) {
                            return o.__awaiter(t, void 0, void 0, function() {
                                var t;
                                return o.__generator(this, function(n) {
                                    switch (n.label) {
                                        case 0:
                                            this.setState({
                                                isSaving: !0
                                            }), n.label = 1;
                                        case 1:
                                            return n.trys.push([1, 3, , 4]), [4, this.props.createContentAttributes([e])];
                                        case 2:
                                            return n.sent(), [3, 4];
                                        case 3:
                                            return t = n.sent(), s.k.error(t, "Could not create chanlet group"), [3, 4];
                                        case 4:
                                            return this.closeChanletModals(), [2]
                                    }
                                })
                            })
                        }, t.updateChanletGroup = function(e, n) {
                            return o.__awaiter(t, void 0, void 0, function() {
                                var e;
                                return o.__generator(this, function(t) {
                                    switch (t.label) {
                                        case 0:
                                            this.setState({
                                                isSaving: !0
                                            }), t.label = 1;
                                        case 1:
                                            return t.trys.push([1, 3, , 4]), [4, this.props.updateContentAttributes([])];
                                        case 2:
                                            return t.sent(), [3, 4];
                                        case 3:
                                            return e = t.sent(), s.k.error(e, "Could not update chanlet group"), [3, 4];
                                        case 4:
                                            return this.closeChanletModals(), [2]
                                    }
                                })
                            })
                        }, t.editChanletModal = function(e) {
                            t.setState({
                                isChanletModalOpen: !0,
                                isSaving: !1,
                                chanlet: e
                            })
                        }, t.createChanletGroupModal = function() {
                            t.setState({
                                isCreateChanletGroupModalOpen: !0,
                                isSaving: !1
                            })
                        }, t.editChanletGroupModal = function(e) {
                            t.setState({
                                chanletGroup: e,
                                isEditChanletGroupModalOpen: !0,
                                isSaving: !1
                            })
                        }, t.closeChanletModals = function() {
                            t.setState({
                                isChanletModalOpen: !1,
                                isCreateChanletGroupModalOpen: !1,
                                isEditChanletGroupModalOpen: !1,
                                isSaving: !1
                            })
                        }, t
                    }
                    return o.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        return l.createElement(u.a, null, this.renderChanletGroups(), this.renderChanlets())
                    }, t.prototype.renderChanletGroups = function() {
                        var e = this.props.availableContentAttributes.filter(function(e) {
                            return e.key === f.a.Group
                        });
                        return l.createElement(p.Xa, {
                            margin: {
                                bottom: 3
                            }
                        }, l.createElement(p.Eb, {
                            display: p.X.Flex,
                            justifyContent: p.Wa.Between,
                            padding: {
                                bottom: 2
                            }
                        }, l.createElement(p.W, {
                            type: p.Vb.H4,
                            bold: !0
                        }, Object(s.e)("Chanlet Groups", "ChanletsTab")), l.createElement(p.Xa, null, l.createElement(p.z, {
                            icon: p.tb.Plus,
                            type: p.F.Hollow,
                            onClick: this.createChanletGroupModal
                        }, Object(s.e)("Add Group", "ChanletsTab")))), !e.length && this.renderEmptyList(Object(s.e)("No Chanlet Groups", "ChanletsGroup")), e.map(this.renderChanletGroupItem), this.renderCreateChanletGroupModal(), this.renderEditChanletGroupModal())
                    }, t.prototype.renderChanlets = function() {
                        var e = this.props.chanlets;
                        return l.createElement(p.Xa, null, l.createElement(p.Eb, {
                            display: p.X.Flex,
                            justifyContent: p.Wa.Between,
                            padding: {
                                bottom: 2
                            }
                        }, l.createElement(p.W, {
                            type: p.Vb.H4,
                            bold: !0
                        }, Object(s.e)("All Chanlets", "ChanletsTab")), l.createElement(p.Xa, null, l.createElement(d.a, {
                            triggerModal: this.renderAddChanletModal
                        }, function(e) {
                            return l.createElement(p.z, {
                                icon: p.tb.Plus,
                                type: p.F.Hollow,
                                onClick: e
                            }, Object(s.e)("Add Chanlet", "ChanletsTab"))
                        }))), !e.length && this.renderEmptyList(Object(s.e)("No Chanlets", "ChanletsGroup")), e.map(this.renderChanletItem), this.renderChanletModal())
                    }, t.prototype.renderChanletModal = function() {
                        var e = this.state.chanlet;
                        if (e && this.state.isChanletModalOpen) return l.createElement(j, {
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
                        return l.createElement(p.Eb, {
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
                F = Object(i.compose)(Object(c.b)("ChanletsTab"))(X);
            n.d(t, "TestSelectors", function() {
                return I
            }), n.d(t, "ChanletsTabComponent", function() {
                return X
            }), n.d(t, "ChanletsTab", function() {
                return F
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
                        return r.createElement(s.Eb, {
                            className: "stream-key-confirm-modal",
                            borderBottom: !0,
                            background: s.r.Base,
                            elevation: 3,
                            padding: {
                                x: 2,
                                top: 3,
                                bottom: 2
                            }
                        }, r.createElement(s.Eb, {
                            borderBottom: !0,
                            padding: {
                                bottom: 2
                            }
                        }, r.createElement(s.W, {
                            type: s.Vb.H4,
                            color: s.O.Alt
                        }, Object(l.d)("Stream Key", "StreamKeySettingsForm"))), r.createElement(s.Xa, {
                            padding: {
                                y: 2
                            }
                        }, r.createElement(s.W, {
                            color: s.O.Error,
                            bold: !0
                        }, Object(l.d)("Never share your stream key with anyone or show it on stream! Twitch Staff, Admins, or Global Moderators will never ask you for this information.", "StreamKeySettingsForm"))), r.createElement(s.Eb, {
                            borderBottom: !0,
                            padding: {
                                bottom: 2
                            }
                        }, Object(l.d)('Please click "I Understand" if you understand the above and would like to view your stream key.', "StreamKeySettingsForm")), r.createElement(s.Xa, {
                            display: s.X.Flex,
                            justifyContent: s.Wa.Center,
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
                    return r.createElement(i.Xa, {
                        display: i.X.Flex,
                        flexDirection: i.Aa.Column,
                        justifyContent: i.Wa.Center,
                        alignItems: i.f.Center,
                        flexGrow: 1,
                        fullHeight: !0,
                        padding: {
                            y: 1
                        },
                        zIndex: i.ic.Above
                    }, r.createElement(i.Eb, {
                        color: i.O.Alt2,
                        textAlign: i.Rb.Center,
                        flexShrink: 1
                    }, r.createElement(i.sb, {
                        asset: i.tb.DeadGlitch,
                        width: 46,
                        height: 48
                    })), r.createElement(i.Pa, {
                        margin: {
                            top: 1
                        },
                        textAlign: i.Rb.Center
                    }, r.createElement(i.W, {
                        type: i.Vb.H4,
                        "data-test-selector": "search-error-message"
                    }, Object(l.d)("Search is not available at this time", "DropdownSearchError"))), r.createElement(i.W, {
                        type: i.Vb.P
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
                            n = r.createElement(i.vb, {
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
                        }, r.createElement(i.Eb, {
                            background: this.state.isInputFocused || this.state.isOpen ? i.r.Base : void 0,
                            borderRadius: i.x.Large,
                            padding: .5,
                            position: i.jb.Relative,
                            elevation: this.state.isInputFocused || this.state.isOpen ? 3 : void 0
                        }, n, e && r.createElement(i.Eb, {
                            attachLeft: !0,
                            background: i.r.Base,
                            borderRadius: i.x.Large,
                            display: this.state.isOpen ? i.X.Block : i.X.Hide,
                            fullWidth: !0,
                            padding: {
                                y: 1
                            },
                            position: i.jb.Absolute,
                            zIndex: i.ic.Above,
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
        "oz3/": function(e, t, n) {},
        xefp: function(e, t, n) {},
        zIYK: function(e, t, n) {}
    }
]);