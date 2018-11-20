(window.webpackJsonp = window.webpackJsonp || []).push([
    [205], {
        "+k6+": function(e, t, n) {
            "use strict";
            n.r(t);
            var o = n("mrSG"),
                r = n("q1tI"),
                i = n("eJ65"),
                a = n("yR8l"),
                s = n("GnwI"),
                l = n("uQjW"),
                c = n("zmJd"),
                d = n("Ue10"),
                u = n("/DKt"),
                p = (n("qMYr"), function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return o.__extends(t, e), t.prototype.componentDidUpdate = function() {
                        this.props.data.loading || this.props.data.error || this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        if (this.props.data.loading) return r.createElement(d.W, {
                            color: d.O.Alt,
                            "data-test-selector": "placeholder-text"
                        }, this.props.roomName);
                        if (this.props.data.error) return r.createElement(d.Ya, null);
                        var e = {
                            isPreviewable: this.props.data.room.isPreviewable,
                            minimumAllowedRole: this.props.data.room.minimumAllowedRole
                        };
                        return r.createElement(i.a, null, r.createElement("div", null, r.createElement(d.Fb, {
                            display: d.X.Flex,
                            alignItems: d.f.Center,
                            className: "active-room-button"
                        }, r.createElement(d.Ya, {
                            className: "active-room-button__states",
                            display: d.X.Flex
                        }, r.createElement(d.tb, {
                            height: 14,
                            asset: Object(c.a)(e, this.props.data.room.self.permissions.sendMessages)
                        })), r.createElement(d.W, {
                            color: d.O.Alt
                        }, this.props.data.room.name), r.createElement(d.Ya, {
                            className: "room-details__close-edit active-room-button__cch-dropdown"
                        }, r.createElement(d.tb, {
                            asset: d.ub.AngleRight,
                            type: d.vb.Alt,
                            height: 11
                        })))), r.createElement(d.u, {
                            direction: d.v.BottomLeft,
                            size: d.w.Medium
                        }, r.createElement(l.a, {
                            forActiveRoom: !0,
                            roomID: this.props.roomID
                        })))
                    }, t = o.__decorate([Object(s.b)("ActiveRoomButton"), Object(a.a)(u, {
                        options: function(e) {
                            return {
                                variables: {
                                    id: e.roomID
                                }
                            }
                        }
                    })], t)
                }(r.Component));
            n.d(t, "PLACEHOLDER_TEXT_SELECTOR", function() {
                return "placeholder-text"
            }), n.d(t, "ActiveRoomButton", function() {
                return p
            })
        },
        "/DKt": function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "ActiveRoomButton"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "id"
                            }
                        },
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "ID"
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
                                value: "room"
                            },
                            arguments: [{
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "id"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "id"
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
                                        value: "name"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "isPreviewable"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "minimumAllowedRole"
                                    },
                                    arguments: [],
                                    directives: []
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
                                                value: "permissions"
                                            },
                                            arguments: [],
                                            directives: [],
                                            selectionSet: {
                                                kind: "SelectionSet",
                                                selections: [{
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "sendMessages"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }]
                                            }
                                        }]
                                    }
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
                body: "query ActiveRoomButton($id: ID!) {\nroom(id: $id) {\nid\nname\nisPreviewable\nminimumAllowedRole\nself {\npermissions {\nsendMessages\n}\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        "/HY+": function(e, t, n) {
            "use strict";
            var o = n("dAHa"),
                r = n("mrSG"),
                i = n("q1tI"),
                a = n("/MKj"),
                s = n("fvjX"),
                l = n("cZKs"),
                c = n("aCAx"),
                d = n("GnwI"),
                u = n("Ue10"),
                p = (n("Oy4H"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.handleClose = function(e, n) {
                            t.props.closeModal(), t.props.onClose && t.props.onClose(e, n)
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        return i.createElement(u.Fb, {
                            className: "reporting-modal__container",
                            background: u.r.Base,
                            padding: {
                                x: 2,
                                y: 3
                            }
                        }, i.createElement(o.b, {
                            onClose: this.handleClose,
                            reportContext: this.props.reportContext,
                            title: this.props.title,
                            defaultDescription: this.props.defaultDescription
                        }), i.createElement(l.a, null))
                    }, t
                }(i.Component));
            var m = Object(s.compose)(Object(d.b)("ReportUserModal"), Object(a.connect)(null, function(e) {
                return Object(s.bindActionCreators)({
                    closeModal: c.c
                }, e)
            }))(p);
            n.d(t, !1, function() {}), n.d(t, !1, function() {
                return o.c
            }), n.d(t, !1, function() {
                return o.a
            }), n.d(t, !1, function() {}), n.d(t, !1, function() {
                return o.b
            }), n.d(t, !1, function() {
                return p
            }), n.d(t, "a", function() {
                return m
            })
        },
        "0hI/": function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "ReportUserModal_ReportUserData"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "targetUserID"
                            }
                        },
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "ID"
                                }
                            }
                        }
                    }],
                    directives: [],
                    selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                            kind: "Field",
                            alias: {
                                kind: "Name",
                                value: "targetUser"
                            },
                            name: {
                                kind: "Name",
                                value: "user"
                            },
                            arguments: [{
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "id"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "targetUserID"
                                    }
                                }
                            }, {
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "lookupType"
                                },
                                value: {
                                    kind: "EnumValue",
                                    value: "ALL"
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
                                        value: "login"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "displayName"
                                    },
                                    arguments: [],
                                    directives: []
                                }]
                            }
                        }, {
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
                                        value: "blockedUsers"
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
                                        }]
                                    }
                                }]
                            }
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 176
                }
            };
            n.loc.source = {
                body: "query ReportUserModal_ReportUserData($targetUserID: ID!) {\ntargetUser: user(id: $targetUserID lookupType: ALL) {\nid\nlogin\ndisplayName\n}\ncurrentUser {\nid\nblockedUsers {\nid\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        "20fZ": function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "mutation",
                    name: {
                        kind: "Name",
                        value: "MuteButton_MuteRoom"
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
                                    value: "UpdateRoomViewInput"
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
                                value: "updateRoomView"
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
                                        value: "roomView"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "isMuted"
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
                    end: 117
                }
            };
            n.loc.source = {
                body: "mutation MuteButton_MuteRoom($input: UpdateRoomViewInput!) {\nupdateRoomView(input: $input) {\nroomView {\nisMuted\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        "2j4q": function(e, t, n) {
            "use strict";
            var o = n("mrSG"),
                r = n("q1tI"),
                i = n("/7QA"),
                a = n("UJc8"),
                s = n("Ue10"),
                l = (n("A33V"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            isPreviewable: void 0 === t.props.isPreviewable || t.props.isPreviewable,
                            minimumAllowedRole: t.props.minimumAllowedRole || a.b.Everyone
                        }, t.togglePreviewability = function() {
                            t.setState({
                                isPreviewable: !t.state.isPreviewable
                            }, function() {
                                t.props.updatePermissions(t.state)
                            })
                        }, t.toggleSubRole = function() {
                            return t.state.minimumAllowedRole === a.b.Moderator ? t.setMinRoleSub() : t.setMinRoleMod()
                        }, t.toggleAllRole = function() {
                            return t.state.minimumAllowedRole === a.b.Everyone ? t.setMinRoleSub() : t.setMinRoleAll()
                        }, t.setMinRoleMod = function() {
                            t.setState({
                                isPreviewable: !1,
                                minimumAllowedRole: a.b.Moderator
                            }, function() {
                                t.props.updatePermissions(t.state)
                            })
                        }, t.setMinRoleSub = function() {
                            t.setState({
                                isPreviewable: !0,
                                minimumAllowedRole: a.b.Subscriber
                            }, function() {
                                t.props.updatePermissions(t.state)
                            })
                        }, t.setMinRoleAll = function() {
                            t.setState({
                                isPreviewable: !0,
                                minimumAllowedRole: a.b.Everyone
                            }, function() {
                                t.props.updatePermissions(t.state)
                            })
                        }, t
                    }
                    return o.__extends(t, e), t.prototype.render = function() {
                        return r.createElement(s.Ya, null, r.createElement(s.Fb, {
                            padding: {
                                top: 1,
                                bottom: .5,
                                x: 1
                            },
                            margin: {
                                x: .5
                            }
                        }, r.createElement(s.W, {
                            type: s.Wb.Span
                        }, Object(i.d)("Who can chat in this room?", "RoomPermissionsToggle"))), r.createElement(s.Fb, {
                            padding: {
                                x: 1
                            },
                            margin: {
                                x: .5
                            },
                            display: s.X.Flex,
                            alignItems: s.f.Center
                        }, r.createElement(s.Qa, {
                            flexGrow: 1,
                            display: s.X.Flex,
                            alignItems: s.f.Center,
                            className: "room-permissions-toggle__role-name"
                        }, r.createElement("label", {
                            htmlFor: "room-permissions-toggle__mods-permission"
                        }, r.createElement(s.W, {
                            type: s.Wb.Strong,
                            color: s.O.Alt
                        }, Object(i.d)("Mods", "RoomPermissionsToggle")))), r.createElement(s.Yb, {
                            id: "room-permissions-toggle__mods-permission",
                            disabled: !0,
                            checked: !0,
                            "data-test-selector": "moderator-role"
                        })), r.createElement(s.Fb, {
                            padding: {
                                x: 1
                            },
                            margin: {
                                x: .5
                            },
                            display: s.X.Flex,
                            alignItems: s.f.Center
                        }, r.createElement(s.Qa, {
                            flexGrow: 1,
                            display: s.X.Flex,
                            alignItems: s.f.Center,
                            className: "room-permissions-toggle__role-name"
                        }, r.createElement("label", {
                            htmlFor: "room-permissions-toggle__subs-permission"
                        }, r.createElement(s.W, {
                            type: s.Wb.Strong,
                            color: s.O.Alt
                        }, Object(i.d)("Subs", "RoomPermissionsToggle")))), r.createElement(s.Yb, {
                            id: "room-permissions-toggle__subs-permission",
                            checked: this.state.minimumAllowedRole !== a.b.Moderator,
                            onChange: this.toggleSubRole,
                            "data-test-selector": "subscriber-role"
                        })), r.createElement(s.Fb, {
                            padding: {
                                x: 1
                            },
                            margin: {
                                x: .5
                            },
                            display: s.X.Flex,
                            alignItems: s.f.Center
                        }, r.createElement(s.Qa, {
                            flexGrow: 1,
                            display: s.X.Flex,
                            alignItems: s.f.Center,
                            className: "room-permissions-toggle__role-name"
                        }, r.createElement("label", {
                            htmlFor: "room-permissions-toggle__everyone-permission"
                        }, r.createElement(s.W, {
                            type: s.Wb.Strong,
                            color: s.O.Alt
                        }, Object(i.d)("Everyone", "RoomPermissionsToggle")))), r.createElement(s.Yb, {
                            id: "room-permissions-toggle__everyone-permission",
                            checked: this.state.minimumAllowedRole === a.b.Everyone,
                            onChange: this.toggleAllRole,
                            "data-test-selector": "everyone-role"
                        })), r.createElement(s.Ya, {
                            padding: {
                                x: .5
                            }
                        }, r.createElement(s.Fb, {
                            borderTop: !0,
                            margin: {
                                top: .5,
                                bottom: 1,
                                x: 1
                            }
                        })), r.createElement(s.Fb, {
                            display: s.X.Flex,
                            justifyContent: s.Xa.Between,
                            alignItems: s.f.Center,
                            padding: {
                                bottom: .5,
                                x: 1
                            },
                            margin: {
                                bottom: 1,
                                x: .5
                            }
                        }, r.createElement(s.Ja, {
                            gutterSize: s.Ka.None
                        }, r.createElement(s.P, {
                            cols: 8
                        }, r.createElement(s.W, null, Object(i.d)("Allow others to read chat but not send messages", "RoomPermissionsToggle"))), r.createElement(s.P, {
                            cols: 4
                        }, r.createElement(s.Ya, {
                            display: s.X.Flex,
                            fullHeight: !0,
                            justifyContent: s.Xa.Center,
                            flexDirection: s.Aa.Column,
                            alignContent: s.e.End,
                            alignItems: s.f.End
                        }, this.renderPreviewabilityToggle())))))
                    }, t.prototype.renderPreviewabilityToggle = function() {
                        var e = this.state.minimumAllowedRole !== a.b.Subscriber,
                            t = r.createElement(s.Yb, {
                                disabled: e,
                                checked: this.state.isPreviewable,
                                onChange: this.togglePreviewability,
                                "data-test-selector": "previewability-toggle"
                            });
                        return this.state.minimumAllowedRole === a.b.Moderator && (t = r.createElement(s.Zb, {
                            direction: s.bc.Left,
                            width: 100,
                            label: Object(i.d)("This room is only for moderators", "RoomPermissionsToggle")
                        }, t)), t
                    }, t
                }(r.Component));
            n.d(t, !1, function() {
                return "previewability-toggle"
            }), n.d(t, !1, function() {
                return "everyone-role"
            }), n.d(t, !1, function() {
                return "subscriber-role"
            }), n.d(t, !1, function() {
                return "moderator-role"
            }), n.d(t, "a", function() {
                return l
            })
        },
        "9Vxt": function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "MuteButton"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "id"
                            }
                        },
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "ID"
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
                                value: "room"
                            },
                            arguments: [{
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "id"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "id"
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
                                        value: "owner"
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
                                                        value: "isChannelMember"
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
                                                value: "isMuted"
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
                    end: 106
                }
            };
            n.loc.source = {
                body: "query MuteButton($id: ID!) {\nroom(id: $id) {\nid\nowner {\nid\nself {\nisChannelMember\n}\n}\nself {\nisMuted\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        A33V: function(e, t, n) {},
        Gf3K: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "ReportRoomInfo"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "id"
                            }
                        },
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "ID"
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
                                value: "room"
                            },
                            arguments: [{
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "id"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "id"
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
                                        value: "name"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "owner"
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
                                        }]
                                    }
                                }]
                            }
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 70
                }
            };
            n.loc.source = {
                body: "query ReportRoomInfo($id: ID!) {\nroom(id: $id) {\nname\nowner {\nid\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        MPK0: function(e, t, n) {},
        O3Y9: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return o
            }), n.d(t, "b", function() {
                return a
            });
            var o, r = n("/7QA"),
                i = n("2xye");

            function a(e) {
                r.p.tracking.track(i.SpadeEventType.WhisperIgnoreUser, {
                    ui_context: e.context,
                    from_login: e.currentUserLogin,
                    ignored_login: e.targetUserLogin
                })
            }! function(e) {
                e.ViewerCard = "chat_card", e.ReportWizard = "report_wizard"
            }(o || (o = {}))
        },
        Oy4H: function(e, t, n) {},
        RQ6e: function(e, t, n) {
            "use strict";
            var o = n("mrSG"),
                r = n("TSYQ"),
                i = n("q1tI"),
                a = n("/7QA"),
                s = n("fvjX"),
                l = n("yR8l"),
                c = n("GnwI");
            var d = n("Ue10"),
                u = n("gIsd"),
                p = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.handleChange = function(e) {
                            t.props.onChange && t.props.onChange(e.target.value)
                        }, t
                    }
                    return o.__extends(t, e), t.prototype.componentDidUpdate = function() {
                        this.props.data.loading && !this.props.data.error || this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        var e = null,
                            t = Object(a.d)("Select One...", "ReportUserModal");
                        this.props.data.loading ? e = [i.createElement("option", {
                            key: "Loading"
                        }, Object(a.d)("Loading...", "ReportReasonsSelect"))] : e = (this.props.data.reportReasons || [{
                            id: "other",
                            text: Object(a.d)("Other Terms of Service Violation", "ReportUserModal")
                        }]).map(function(e) {
                            return i.createElement("option", {
                                key: e.id,
                                value: e.id
                            }, e.text)
                        });
                        return i.createElement(d.Ya, {
                            margin: {
                                bottom: 2
                            }
                        }, i.createElement(d.Ea, {
                            id: "reporting-modal__select",
                            label: Object(a.d)("Select Reason (required)", "ReportUserModal")
                        }, i.createElement(d.Ab, {
                            id: "reporting-modal__select",
                            "data-test-selector": "reporting-modal.select",
                            disabled: this.props.data.loading || !!this.props.data.error,
                            onChange: this.handleChange,
                            defaultValue: t
                        }, i.createElement("option", {
                            disabled: !0,
                            key: "default"
                        }, t), e)))
                    }, t
                }(i.Component),
                m = Object(s.compose)(Object(l.a)(u, {
                    options: function(e) {
                        return {
                            variables: {
                                content: e.reportContentType
                            }
                        }
                    }
                }), Object(c.b)("ReportReasonSelect"))(p);
            n("y4Ne");
            n.d(t, "a", function() {
                return h
            }), n.d(t, "b", function() {
                return g
            });
            var h;
            ! function(e) {
                e[e.Unsubmitted = 0] = "Unsubmitted", e[e.Success = 1] = "Success", e[e.FormError = 2] = "FormError", e[e.MutationError = 3] = "MutationError", e[e.UserError = 4] = "UserError"
            }(h || (h = {}));
            var g = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        description: "",
                        reason: null
                    }, t.headerMessage = Object(a.d)("Tell us your concern about this content so that we can review it to determine whether there has been a violation of the {tosLink}. {br} (Abuse of this feature is a violation of the terms of service)", {
                        br: i.createElement("br", null),
                        tosLink: i.createElement("a", {
                            href: "https://www.twitch.tv/p/terms-of-service",
                            target: "_blank"
                        }, Object(a.d)("terms of service", "ReportUser"))
                    }, "ReportUser"), t.handleSubmit = function(e) {
                        e.preventDefault(), t.state.reason && t.state.description.length > 0 ? t.props.onSubmit(t.state.reason || "", t.state.description) : t.props.onError(h.FormError)
                    }, t.handleTextAreaChange = function(e) {
                        t.setState({
                            description: e.target.value
                        })
                    }, t.handleReasonChange = function(e) {
                        t.setState({
                            reason: e
                        })
                    }, t
                }
                return o.__extends(t, e), t.prototype.render = function() {
                    return i.createElement(d.Ya, {
                        display: d.X.Flex,
                        flexDirection: d.Aa.Column,
                        alignItems: d.f.Center,
                        justifyContent: d.Xa.Center
                    }, this.renderStatusMessage(), this.renderBody())
                }, t.prototype.renderBody = function() {
                    return this.props.submitStatus === h.Success ? i.createElement("div", null, i.createElement(d.z, {
                        onClick: this.props.onClose
                    }, i.createElement(d.Ya, {
                        padding: {
                            x: 2
                        }
                    }, Object(a.d)("Close", "ReportUser")))) : i.createElement("div", null, i.createElement(d.Ya, {
                        "data-test-selector": "reporting.title",
                        margin: {
                            bottom: 1
                        },
                        "data-a-target": "reporting-channel-name"
                    }, i.createElement(d.W, {
                        type: d.Wb.H4
                    }, this.props.title), i.createElement(d.Fb, {
                        color: d.O.Alt2,
                        margin: {
                            top: 1
                        }
                    }, this.headerMessage)), i.createElement("form", null, i.createElement(d.Fb, {
                        borderTop: !0,
                        borderBottom: !0,
                        margin: {
                            y: 2
                        },
                        padding: {
                            y: 2
                        }
                    }, i.createElement(m, {
                        reportContentType: this.props.reportContentType,
                        onChange: this.handleReasonChange
                    }), i.createElement(d.Ea, {
                        id: "reporting__text-area",
                        label: Object(a.d)("Description (required)", "ReportUser")
                    }, i.createElement(d.Tb, {
                        defaultValue: this.props.defaultDescription,
                        onChange: this.handleTextAreaChange
                    }))), i.createElement(d.Fb, {
                        display: d.X.Flex,
                        justifyContent: d.Xa.Center
                    }, i.createElement(d.z, {
                        onClick: this.handleSubmit
                    }, i.createElement(d.Ya, {
                        padding: {
                            x: 2
                        }
                    }, Object(a.d)("Send", "ReportUser"))))))
                }, t.prototype.renderStatusMessage = function() {
                    var e = null;
                    switch (this.props.submitStatus) {
                        case h.FormError:
                            e = Object(a.d)("Reason and Description are required.", "ReportUser");
                            break;
                        case h.MutationError:
                            e = Object(a.d)("Sorry, a network error occurred when submitting your report. Please try again later.", "ReportUser");
                            break;
                        case h.Success:
                            e = Object(a.d)("Thank you for your report.", "ReportUser");
                            break;
                        case h.UserError:
                            e = Object(a.d)("This account could not be reported. It may have already been suspended, or the owner may have deleted it.", "ReportUser");
                            break;
                        default:
                            return null
                    }
                    var t = r({
                        "reporting__error-container": this.props.submitStatus !== h.Success,
                        "reporting__success-container": this.props.submitStatus === h.Success
                    });
                    return i.createElement(d.Fb, {
                        className: t,
                        fullWidth: this.props.submitStatus !== h.Success,
                        "data-test-selector": "reporting.error",
                        margin: {
                            bottom: 2
                        },
                        padding: 1
                    }, e)
                }, t
            }(i.Component)
        },
        "TMB/": function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "mutation",
                    name: {
                        kind: "Name",
                        value: "DeleteRoomModal_DeleteRoom"
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
                                    value: "DeleteRoomInput"
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
                                value: "deleteRoom"
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
                                        value: "room"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "name"
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
                    end: 109
                }
            };
            n.loc.source = {
                body: "mutation DeleteRoomModal_DeleteRoom($input: DeleteRoomInput!) {\ndeleteRoom(input: $input) {\nroom {\nname\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        dAHa: function(e, t, n) {
            "use strict";
            var o, r, i = n("mrSG"),
                a = n("q1tI"),
                s = n("/MKj"),
                l = n("fvjX"),
                c = n("/7QA"),
                d = n("yR8l"),
                u = n("BhFH"),
                p = n("iS14"),
                m = n("geRD"),
                h = n("O3Y9"),
                g = n("f00E"),
                v = n("D7An"),
                b = n("DMoW"),
                f = n("2xye"),
                R = n("GnwI"),
                k = n("QVaV"),
                y = n("Ue10"),
                E = (n("MPK0"), "report-wizard-block"),
                S = "report-wizard-unblock",
                T = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            userBlocked: t.props.userBlocked || !1
                        }, t.renderBlock = function() {
                            return a.createElement(y.U, {
                                hoverUnderlineNone: !0,
                                onClick: t.handleBlock,
                                "data-test-selector": E
                            }, a.createElement(y.Ya, {
                                display: y.X.Flex,
                                alignItems: y.f.Center
                            }, a.createElement(y.tb, {
                                type: y.vb.Brand,
                                asset: y.ub.Ban
                            }), a.createElement(y.Ya, {
                                margin: {
                                    left: .5
                                }
                            }, Object(c.d)("Block {user}", {
                                user: t.displayName()
                            }, "ReportWizardBlockActions"))))
                        }, t.renderUnblock = function() {
                            return a.createElement(y.Ya, {
                                className: "reporting-wizard__block-actions",
                                display: y.X.Flex,
                                alignItems: y.f.Center
                            }, a.createElement(y.tb, {
                                type: y.vb.Success,
                                asset: y.ub.FollowCheck
                            }), a.createElement(y.Ya, {
                                margin: {
                                    right: 1
                                }
                            }, a.createElement(y.W, {
                                className: "block-user__success",
                                type: y.Wb.Span
                            }, Object(c.d)("{user} blocked", {
                                user: t.displayName()
                            }, "ReportWizardBlockActions"))), a.createElement(y.U, {
                                hoverUnderlineNone: !0,
                                onClick: t.handleUnblock,
                                "data-test-selector": S
                            }, a.createElement(y.Ya, {
                                margin: {
                                    left: .5
                                }
                            }, Object(c.d)("Unblock", "ReportWizardBlockActions"))))
                        }, t.handleBlock = function() {
                            return i.__awaiter(t, void 0, void 0, function() {
                                return i.__generator(this, function(e) {
                                    return this.props.onBlock(), this.setState({
                                        userBlocked: !0
                                    }), [2]
                                })
                            })
                        }, t.handleUnblock = function() {
                            t.props.onUnblock(), t.setState({
                                userBlocked: !1
                            })
                        }, t.displayName = function() {
                            var e = t.props.targetUser.displayName,
                                n = t.props.targetUser.login;
                            return e || (n || "")
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        var e = this.state.userBlocked ? this.renderUnblock() : this.renderBlock(),
                            t = Object(k.a)(this.props.targetUser.login, this.props.targetUser.displayName, !0);
                        return a.createElement(y.Fb, {
                            borderTop: !0,
                            padding: {
                                y: 1
                            },
                            margin: {
                                top: 1
                            }
                        }, a.createElement(y.Ya, null, Object(c.d)("Would you like to block {user}?", {
                            user: t
                        }, "ReportWizardBlockActions")), a.createElement(y.Fb, {
                            color: y.O.Alt2,
                            margin: {
                                y: 1
                            }
                        }, a.createElement(y.fc, {
                            baseFontSize: y.Ca.Size6
                        }, a.createElement("p", null, Object(c.d)("Blocking {user} will:", {
                            user: t
                        }, "ReportWizardBlockActions")), a.createElement("ul", null, a.createElement("li", null, Object(c.d)("Prevent them from sending you whispers", "ReportWizardBlockActions")), a.createElement("li", null, Object(c.d)("Prevent them from hosting you", "ReportWizardBlockActions")), a.createElement("li", null, Object(c.d)("Prevent them from adding you as a friend", "ReportWizardBlockActions")), a.createElement("li", null, Object(c.d)("Filter their messages out of chats you don’t moderate", "ReportWizardBlockActions"))))), a.createElement(y.Ya, {
                            margin: {
                                top: 1
                            }
                        }, e))
                    }, t
                }(a.Component);
            ! function(e) {
                e.BitsViolation = "bits_violation", e.ChatBanEvasion = "chat_ban_evasion", e.Cheating = "cheating", e.Gore = "gore", e.Harassment = "harassment", e.Harm = "harm", e.HatefulConduct = "hateful_conduct", e.Impersonation = "impersonation", e.Miscategorized = "miscategorized", e.OffensiveUsername = "offensive_username", e.Other = "other", e.Porn = "porn", e.Prohibited = "prohibited", e.SelfHarm = "selfharm", e.SexualContent = "sexual_content", e.SexualViolence = "sexual_violence", e.Spam = "spam", e.TosBanEvasion = "tos_ban_evasion", e.Underaged = "underaged"
            }(o || (o = {})),
            function(e) {
                e.Link = "link", e.MultipleChoice = "multiple choice", e.Text = "text", e.Textarea = "textarea"
            }(r || (r = {}));
            var O, _ = {
                    generalFilter: function() {
                        return Object(c.d)("I don't think their content or behavior is allowed on Twitch", "ReportModalWizard")
                    },
                    me: function() {
                        return Object(c.d)("Me", "ReportModalWizard")
                    },
                    someoneElse: function() {
                        return Object(c.d)("Someone else", "ReportModalWizard")
                    },
                    abusiveViolence: function() {
                        return Object(c.d)("Threatening violence or physical harm", "ReportModalWizard")
                    },
                    commitingViolence: function() {
                        return Object(c.d)("Committing acts of violence or physical harm", "ReportModalWizard")
                    },
                    threatening: function() {
                        return Object(c.d)("Threatening, harming, or endangering someone", "ReportModalWizard")
                    },
                    abusive: function() {
                        return Object(c.d)("Being hateful, harassing, or abusive", "ReportModalWizard")
                    },
                    harassment: function() {
                        return Object(c.d)("Hate speech, harassment, or abuse", "ReportModalWizard")
                    },
                    moreOptions: function() {
                        return Object(c.d)("Give me more options...", "ReportModalWizard")
                    },
                    scam: function() {
                        return Object(c.d)("Attempts to scam other community members", "ReportModalWizard")
                    }
                },
                C = {
                    input_description: {
                        getTitle: function() {
                            return Object(c.d)("Could you provide more detail about this issue? You may include links to videos, clips, and content outside Twitch.", "ReportModalWizard")
                        },
                        value: "description",
                        type: r.Textarea,
                        required: !0
                    },
                    input_link: {
                        getTitle: function() {
                            return Object(c.d)("If possible, please provide a link to show us where the issue occurred. Links that do not lead to the original source of the content may not be usable as evidence.", "ReportModalWizard")
                        },
                        rows: 2,
                        value: "external links",
                        type: r.Textarea
                    },
                    input_usernames: {
                        getTitle: function() {
                            return Object(c.d)("If you know the usernames of any other Twitch accounts that may be owned by this person, please list them in this space.", "ReportModalWizard")
                        },
                        value: "other usernames",
                        rows: 2,
                        type: r.Textarea
                    },
                    input_connection: {
                        getTitle: function() {
                            return Object(c.d)("Please describe how you connected the offsite content to this Twitch account.", "ReportModalWizard")
                        },
                        value: "offsite content connection",
                        type: r.Textarea
                    },
                    input_comments: {
                        getTitle: function() {
                            return Object(c.d)("If you have any other comments you would like to add, please do so here.", "ReportModalWizard")
                        },
                        value: "comments",
                        type: r.Textarea
                    },
                    input_identifyOwner: {
                        getTitle: function() {
                            return Object(c.d)("Please describe how you identified this person as the owner of this Twitch account.", "ReportModalWizard")
                        },
                        rows: 2,
                        value: "connect account owner",
                        type: r.Textarea
                    },
                    endBlurb_socialmedia: {
                        getTitle: function() {
                            return Object(c.d)("Please submit a report on the site or service where the incident occurred as well if you have not already done so.", "ReportModalWizard")
                        },
                        type: r.Text
                    },
                    endBlurb_threat: {
                        getTitle: function() {
                            return Object(c.d)("If you feel you are in immediate danger, please contact your local law enforcement. To protect yourself on Twitch, you may also block the user.", "ReportModalWizard")
                        },
                        type: r.Text
                    },
                    endLink_selfharm: {
                        getTitle: function() {
                            return Object(c.d)("Learn more about mental health support", "ReportModalWizard")
                        },
                        value: "https://help.twitch.tv/customer/en/portal/articles/2904486-twitch-cares-mental-health-support-information",
                        type: r.Link
                    },
                    endLink_DMCA: {
                        getTitle: function() {
                            return Object(c.d)("View our DMCA Notification Guidelines", "ReportModalWizard")
                        },
                        value: "https://www.twitch.tv/p/legal/dmca-guidelines/",
                        type: r.Link
                    },
                    endLink_trademark: {
                        getTitle: function() {
                            return Object(c.d)("View our Trademark Policy", "ReportModalWizard")
                        },
                        value: "https://www.twitch.tv/p/legal/trademark-policy/",
                        type: r.Link
                    },
                    endLink_devAgreement: {
                        getTitle: function() {
                            return Object(c.d)("View our Developer Agreement", "ReportModalWizard")
                        },
                        value: "https://www.twitch.tv/p/legal/developer-agreement/",
                        type: r.Link
                    },
                    endLink_eventCoC: {
                        getTitle: function() {
                            return Object(c.d)("View our Events Code of Conduct", "ReportModalWizard")
                        },
                        value: "https://www.twitch.tv/p/legal/events-code-of-conduct",
                        type: r.Link
                    },
                    messaging_general: {
                        getTitle: _.generalFilter,
                        value: "general_messaging",
                        omitFromDescription: !0
                    },
                    profile_general: {
                        getTitle: _.generalFilter,
                        value: "general_profile",
                        omitFromDescription: !0
                    },
                    maliciousRaid: {
                        getTitle: function() {
                            return Object(c.d)("Participating in a malicious raid", "ReportModalWizard")
                        },
                        value: "malicious raid",
                        reportReason: o.Harassment
                    },
                    automod: {
                        getTitle: function() {
                            return Object(c.d)("It's being used to bypass AutoMod", "ReportModalWizard")
                        },
                        value: "bypass automod",
                        reportReason: o.Other
                    },
                    violence: {
                        getTitle: function() {
                            return Object(c.d)("Threats, harm, or endangerment of someone", "ReportModalWizard")
                        },
                        value: "violence/threats",
                        reportReason: o.Harm
                    },
                    report_username: {
                        getTitle: function() {
                            return Object(c.d)("The username is inappropriate", "ReportModalWizard")
                        },
                        value: "inappropriate username",
                        reportReason: o.OffensiveUsername
                    },
                    report_emotes: {
                        getTitle: function() {
                            return Object(c.d)("The emotes or badges", "ReportModalWizard")
                        },
                        value: "inappropriate emotes",
                        reportReason: o.Other
                    },
                    emotes_break_guidelines: {
                        getTitle: function() {
                            return Object(c.d)("The emotes break Twitch's guidelines", "ReportModalWizard")
                        },
                        value: "emotes break guidelines",
                        reportReason: o.Other
                    },
                    abusive: {
                        getTitle: _.harassment,
                        value: "abusive"
                    },
                    scam: {
                        getTitle: _.scam,
                        value: "scam",
                        reportReason: o.Spam
                    },
                    emptyStream: {
                        getTitle: function() {
                            return Object(c.d)("There's nobody on the stream", "ReportModalWizard")
                        },
                        value: "empty stream"
                    },
                    impersonation: {
                        getTitle: function() {
                            return Object(c.d)("They're impersonating someone", "ReportModalWizard")
                        },
                        value: "impersonation",
                        reportReason: o.Impersonation
                    },
                    impersonating: {
                        getTitle: function() {
                            return Object(c.d)("Impersonating someone", "ReportModalWizard")
                        },
                        value: "impersonation",
                        reportReason: o.Impersonation
                    },
                    underage: {
                        getTitle: function() {
                            return Object(c.d)("They're underage (12 or younger)", "ReportModalWizard")
                        },
                        value: "underage",
                        reportReason: o.Underaged
                    },
                    report_ip: {
                        getTitle: function() {
                            return Object(c.d)("I think they're using copyrighted content, trademarks, or other intellectual property that's not theirs", "ReportModalWizard")
                        },
                        value: "intellectual property"
                    },
                    itsInappropriateContent: {
                        getTitle: function() {
                            return Object(c.d)("It's inappropriate or obscene", "ReportModalWizard")
                        },
                        value: "inappropriate content"
                    },
                    inappropriateContent: {
                        getTitle: function() {
                            return Object(c.d)("Inappropriate or obscene content", "ReportModalWizard")
                        },
                        value: "inappropriate content"
                    },
                    violateDevAgreement: {
                        getTitle: function() {
                            return Object(c.d)("They're breaking Twitch's Developer Agreement", "ReportModalWizard")
                        },
                        value: "violating developer agreement"
                    },
                    revealPersonalInfo: {
                        getTitle: function() {
                            return Object(c.d)("Revealing someone's personal information", "ReportModalWizard")
                        },
                        value: "revealing personal info",
                        reportReason: o.Other
                    },
                    inappropriateBadge: {
                        getTitle: function() {
                            return Object(c.d)("Their emote or subscriber badge violates Twitch's Guidelines", "ReportModalWizard")
                        },
                        value: "emote/subscriber badge",
                        reportReason: o.Other
                    },
                    noModeration: {
                        getTitle: function() {
                            return Object(c.d)("They're not moderating their chat appropriately", "ReportModalWizard")
                        },
                        value: "not moderating chat",
                        reportReason: o.Other
                    },
                    inappropriateExtension: {
                        getTitle: function() {
                            return Object(c.d)("The extensions are inappropriate or malicious", "ReportModalWizard")
                        },
                        value: "inappropriate extension",
                        reportReason: o.Other
                    },
                    cheating: {
                        getTitle: function() {
                            return Object(c.d)("Cheating in an online game", "ReportModalWizard")
                        },
                        value: "cheating",
                        reportReason: o.Cheating
                    },
                    bitsViolation: {
                        getTitle: function() {
                            return Object(c.d)("They're breaking Twitch's Bits Policy", "ReportModalWizard")
                        },
                        value: "bits violation",
                        reportReason: o.BitsViolation
                    },
                    compromisedAccount: {
                        getTitle: function() {
                            return Object(c.d)("The account is stolen or compromised", "ReportModalWizard")
                        },
                        value: "account compromised",
                        reportReason: o.Other
                    },
                    video_labeling: {
                        getTitle: function() {
                            return Object(c.d)("Their content is misclassified (wrong category or tags)", "ReportModalWizard")
                        },
                        value: "incorrect label",
                        reportReason: o.Miscategorized
                    },
                    video_inactive: {
                        getTitle: function() {
                            return Object(c.d)("There's no streamer, or the streamer is inactive", "ReportModalWizard")
                        },
                        value: "inactive stream",
                        reportReason: o.Miscategorized
                    },
                    video_general: {
                        getTitle: _.generalFilter,
                        value: "general_video",
                        omitFromDescription: !0
                    },
                    hateSpeechSymbols: {
                        getTitle: function() {
                            return Object(c.d)("It contains hate speech or hate symbols", "ReportModalWizard")
                        },
                        value: "hate speech symbols",
                        reportReason: o.HatefulConduct
                    },
                    hateSpeech: {
                        getTitle: function() {
                            return Object(c.d)("Hate speech, hateful symbols, or other hateful conduct", "ReportModalWizard")
                        },
                        value: "hate speech",
                        reportReason: o.HatefulConduct
                    },
                    harassing: {
                        getTitle: function() {
                            return Object(c.d)("It's harassing or bullying someone", "ReportModalWizard")
                        },
                        value: "harassment",
                        reportReason: o.Harassment
                    },
                    harassment: {
                        getTitle: function() {
                            return Object(c.d)("Harassing or bullying someone", "ReportModalWizard")
                        },
                        value: "harassment",
                        reportReason: o.Harassment
                    },
                    abusiveViolence: {
                        getTitle: _.abusiveViolence,
                        value: "threatening violence",
                        reportReason: o.Harm
                    },
                    commitingViolence: {
                        getTitle: _.commitingViolence,
                        value: "committing violence",
                        reportReason: o.Harm
                    },
                    swatting: {
                        getTitle: function() {
                            return Object(c.d)("Involvement in swatting or DDOS attacks", "ReportModalWizard")
                        },
                        value: "swatting/ddosing",
                        reportReason: o.Harassment
                    },
                    personalInfo: {
                        getTitle: function() {
                            return Object(c.d)("Doxxing (purposely revealing personal information)", "ReportModalWizard")
                        },
                        value: "revealing personal info",
                        reportReason: o.Harassment
                    },
                    threat_me: {
                        getTitle: function() {
                            return Object(c.d)("At me", "ReportModalWizard")
                        },
                        value: "against me",
                        reportReason: o.Harm
                    },
                    threat_person: {
                        getTitle: function() {
                            return Object(c.d)("At someone else", "ReportModalWizard")
                        },
                        value: "against another person",
                        reportReason: o.Harm
                    },
                    threat_group: {
                        getTitle: function() {
                            return Object(c.d)("At a group of people", "ReportModalWizard")
                        },
                        value: "against group of people",
                        reportReason: o.Harm
                    },
                    threat_selfharm: {
                        getTitle: function() {
                            return Object(c.d)("They're threatening self-harm", "ReportModalWizard")
                        },
                        value: "selfharm"
                    },
                    inappropriate_game: {
                        getTitle: function() {
                            return Object(c.d)("The game isn't allowed on Twitch", "ReportModalWizard")
                        },
                        value: "prohibited game",
                        reportReason: o.Prohibited
                    },
                    sexuallyViolentChildAnimal: {
                        getTitle: function() {
                            return Object(c.d)("Sexual conduct involving violence, children, or animals", "ReportModalWizard")
                        },
                        value: "sexual conduct: violent, child, or animal",
                        reportReason: o.SexualViolence
                    },
                    pornographic: {
                        getTitle: function() {
                            return Object(c.d)("Sexually explicit or pornographic content", "ReportModalWizard")
                        },
                        value: "pornographic",
                        reportReason: o.SexualContent
                    },
                    gory: {
                        getTitle: function() {
                            return Object(c.d)("Extreme violence or gore", "ReportModalWizard")
                        },
                        value: "gory",
                        reportReason: o.Gore
                    },
                    suggestive: {
                        getTitle: function() {
                            return Object(c.d)("Sexually suggestive content", "ReportModalWizard")
                        },
                        value: "sexually suggestive",
                        reportReason: o.SexualContent
                    },
                    nudity: {
                        getTitle: function() {
                            return Object(c.d)("Full or partial nudity", "ReportModalWizard")
                        },
                        value: "nudity",
                        reportReason: o.SexualContent
                    },
                    other: {
                        getTitle: function() {
                            return Object(c.d)("There's something else wrong with it...", "ReportModalWizard")
                        },
                        value: "other",
                        reportReason: o.Other
                    },
                    evasion: {
                        getTitle: function() {
                            return Object(c.d)("Evading a block, ban, or suspension", "ReportModalWizard")
                        },
                        value: "ban evasion"
                    },
                    evasion_sitewide: {
                        getTitle: function() {
                            return Object(c.d)("A sitewide ban from Twitch", "ReportModalWizard")
                        },
                        value: "sitewide ban",
                        reportReason: o.TosBanEvasion
                    },
                    evasion_chat: {
                        getTitle: function() {
                            return Object(c.d)("A chat ban from one or more channels", "ReportModalWizard")
                        },
                        value: "chat ban",
                        reportReason: o.ChatBanEvasion
                    },
                    evasion_messaging: {
                        getTitle: function() {
                            return Object(c.d)("A block from messaging me", "ReportModalWizard")
                        },
                        value: "messaging block",
                        reportReason: o.ChatBanEvasion
                    },
                    impersonation_me: {
                        getTitle: _.me,
                        value: "impersonating me",
                        reportReason: o.Impersonation
                    },
                    impersonation_brand: {
                        getTitle: function() {
                            return Object(c.d)("Someone I represent, or a company I work for", "ReportModalWizard")
                        },
                        value: "impersonating brand",
                        reportReason: o.Impersonation
                    },
                    impersonation_other: {
                        getTitle: _.someoneElse,
                        value: "Impersonating someone else",
                        reportReason: o.Impersonation
                    },
                    selfharm: {
                        getTitle: function() {
                            return Object(c.d)("I'm concerned for their wellbeing", "ReportModalWizard")
                        },
                        value: "selfharm",
                        reportReason: o.SelfHarm
                    },
                    video: {
                        getTitle: function() {
                            return Object(c.d)("In a live stream, video, or clip", "ReportModalWizard")
                        },
                        value: "video"
                    },
                    video_more_options: {
                        getTitle: _.moreOptions,
                        value: "video more options"
                    },
                    whisper: {
                        getTitle: function() {
                            return Object(c.d)("In a whisper (private message)", "ReportModalWizard")
                        },
                        value: "whisper",
                        reportContext: b.N.WHISPER_REPORT
                    },
                    whisper_more_options: {
                        getTitle: _.moreOptions,
                        value: "whisper more options"
                    },
                    chat: {
                        getTitle: function() {
                            return Object(c.d)("In a chat message or room", "ReportModalWizard")
                        },
                        value: "chat"
                    },
                    chat_more_options: {
                        getTitle: _.moreOptions,
                        value: "chat more options"
                    },
                    moderating: {
                        getTitle: function(e) {
                            return Object(c.d)("{username} isn't moderating their chat", {
                                username: e
                            }, "ReportModalWizard")
                        },
                        value: "moderating",
                        reportReason: o.Other
                    },
                    otherContent: {
                        getTitle: function(e) {
                            return Object(c.d)("In {username}'s other content (profile, emotes, etc.)", {
                                username: e
                            }, "ReportModalWizard")
                        },
                        value: "other content"
                    },
                    profile: {
                        getTitle: function() {
                            return Object(c.d)("The profile content (avatar, panels, etc.)", "ReportModalWizard")
                        },
                        value: "profile"
                    },
                    profile_more_options: {
                        getTitle: _.moreOptions,
                        value: "profile more options"
                    },
                    report_other: {
                        getTitle: function() {
                            return Object(c.d)("Somewhere else...", "ReportModalWizard")
                        },
                        value: "somewhere else",
                        omitFromDescription: !0
                    },
                    video_streamer: {
                        getTitle: function() {
                            return Object(c.d)("The streamer or channel owner", "ReportModalWizard")
                        },
                        value: "streamer"
                    },
                    video_someoneElse: {
                        getTitle: function() {
                            return Object(c.d)("Someone else in the video", "ReportModalWizard")
                        },
                        value: "someone else in video"
                    },
                    video_chatSomeone: {
                        getTitle: function() {
                            return Object(c.d)("Someone in chat", "ReportModalWizard")
                        },
                        value: "someone in chat",
                        differentTarget: !0
                    },
                    report_channelOwner: {
                        getTitle: function() {
                            return Object(c.d)("The channel owner", "ReportModalWizard")
                        },
                        value: "channel owner"
                    },
                    report_member: {
                        getTitle: function() {
                            return Object(c.d)("Another community member", "ReportModalWizard")
                        },
                        value: "community member",
                        differentTarget: !0
                    },
                    location_onTwitch: {
                        getTitle: function() {
                            return Object(c.d)("On Twitch", "ReportModalWizard")
                        },
                        value: "on twitch"
                    },
                    location_anotherSite: {
                        getTitle: function() {
                            return Object(c.d)("On another site or service", "RpoertModalWizard")
                        },
                        value: "another site"
                    },
                    location_TwitchEvent: {
                        getTitle: function() {
                            return Object(c.d)("In person, at a Twitch event", "ReportModalWizard")
                        },
                        value: "twitch event"
                    },
                    external_incitingRaids: {
                        getTitle: function() {
                            return Object(c.d)("Inciting brigading or malicious raids", "ReportModalWizard")
                        },
                        reportReason: o.Harassment,
                        value: "brigading/raids"
                    },
                    external_threatening: {
                        getTitle: _.threatening,
                        value: "threatening"
                    },
                    external_harassment: {
                        getTitle: _.harassment,
                        value: "hateful/harassing"
                    },
                    external_abusiveViolence: {
                        getTitle: _.abusiveViolence,
                        value: "external site; threatening violence",
                        reportReason: o.Harm
                    },
                    external_commitingViolence: {
                        getTitle: _.commitingViolence,
                        value: "external site; committing violence",
                        reportReason: o.Harm
                    },
                    conduct_impersonation: {
                        getTitle: function() {
                            return Object(c.d)("impersonating someone", "ReportModalWizard")
                        },
                        value: "impersonation",
                        reportReason: o.Impersonation
                    },
                    spam: {
                        getTitle: function() {
                            return Object(c.d)("Spam, malicious links, or bot accounts", "ReportModalWizard")
                        },
                        value: "spam",
                        reportReason: o.Spam
                    },
                    spam_bot: {
                        getTitle: function() {
                            return Object(c.d)("I think this is a bot account", "ReportModalWizard")
                        },
                        value: "bot"
                    },
                    spam_links: {
                        getTitle: function() {
                            return Object(c.d)("Sending malicious links", "ReportModalWizard")
                        },
                        value: "malicious links"
                    },
                    spam_scam: {
                        getTitle: _.scam,
                        value: "scam"
                    },
                    spam_repeated: {
                        getTitle: function() {
                            return Object(c.d)("Sending repeated messages (spam)", "ReportModalWizard")
                        },
                        value: "repeat messages"
                    }
                },
                w = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onChange = function(e) {
                            var n = e.target,
                                o = n.name,
                                r = n.value;
                            t.props.onChangeText(o, r)
                        }, t.onSelect = function(e) {
                            if (t.props.currentCard.items && e.currentTarget.parentElement) {
                                var n = Number(e.currentTarget.parentElement.getAttribute("data-a-index")),
                                    o = t.props.currentCard.items[n];
                                t.props.onChangeRadio(o)
                            }
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        var e = this.props.currentCard.getDescription ? a.createElement(y.Ya, {
                            padding: {
                                bottom: 1
                            }
                        }, this.props.currentCard.getDescription()) : null;
                        return a.createElement(y.Ya, {
                            className: "reporting-wizard-card"
                        }, e, a.createElement(y.Ea, {
                            label: this.props.currentCard.getLabel ? this.props.currentCard.getLabel() : ""
                        }, this.renderCardItems()))
                    }, t.prototype.renderCardItems = function() {
                        var e = this,
                            t = this.props.currentCard,
                            n = [];
                        return t.items && t.type && (n = t.items.filter(function(e) {
                            return !!e
                        }).map(function(t, n) {
                            switch (t.type) {
                                case r.Text:
                                    return a.createElement(y.Ya, {
                                        key: n,
                                        padding: {
                                            bottom: 1
                                        }
                                    }, t.getTitle());
                                case r.Link:
                                    return a.createElement(y.Ya, {
                                        key: n,
                                        padding: {
                                            bottom: 1
                                        }
                                    }, a.createElement(y.U, {
                                        to: t.value,
                                        targetBlank: !0
                                    }, a.createElement(y.Ya, {
                                        display: y.X.Flex
                                    }, a.createElement(y.Ya, {
                                        display: y.X.Inline,
                                        padding: {
                                            right: .5
                                        }
                                    }, a.createElement(y.tb, {
                                        asset: y.ub.Document
                                    })), t.getTitle())));
                                case r.Textarea:
                                    var o = t.value ? e.props.userTextInputs[t.value] : void 0,
                                        i = t.required && (!o || !!o && 0 === o.trim().length);
                                    return a.createElement(y.Ya, {
                                        key: n,
                                        padding: {
                                            bottom: 1
                                        }
                                    }, a.createElement(y.Ea, {
                                        label: t.getTitle(),
                                        labelOptional: t.required ? "" : Object(c.d)("Optional", "ReportModalWizardCard")
                                    }, a.createElement(y.Tb, {
                                        onChange: e.onChange,
                                        rows: t.rows || 3,
                                        name: t.value,
                                        error: e.props.error && i,
                                        value: o,
                                        "data-test-selector": "report-wizard-textarea"
                                    })));
                                case r.MultipleChoice:
                                default:
                                    return a.createElement(y.Ya, {
                                        key: n,
                                        padding: {
                                            y: .5
                                        }
                                    }, a.createElement(y.qb, {
                                        checked: !!e.props.currentSelection && e.props.currentSelection.value === t.value,
                                        onChange: e.onSelect,
                                        label: t.getTitle(e.props.targetUser.displayName),
                                        "data-a-index": n,
                                        name: "card",
                                        value: t.value
                                    }))
                            }
                        })), n
                    }, t
                }(a.Component),
                M = n("RQ6e");
            ! function(e) {
                e.Confirm = "Confirm", e.MultipleChoice = "MultipleChoice", e.Info = "End Card"
            }(O || (O = {}));
            var N, j, x, I = {
                    contentGeneral: function() {
                        return Object(c.d)("What would you like to report?", "ReportModalWizard")
                    },
                    content: function() {
                        return Object(c.d)("What's wrong with this content?", "ReportModalWizard")
                    },
                    identifyUser: function() {
                        return Object(c.d)("Who do you want to report?", "ReportModalWizard")
                    },
                    thisPersonIs: function() {
                        return Object(c.d)("This person is...", "ReportModalWizard")
                    },
                    relevantStatements: function() {
                        return Object(c.d)("What would you like to report? (Please choose the most relevant statement that applies.)", "ReportModalWizard")
                    }
                },
                W = {
                    report: function(e) {
                        return Object(c.d)("Report {username}", {
                            username: e
                        }, "ReportModalWizard")
                    },
                    reportVideo: function(e) {
                        return Object(c.d)("Report {username}'s Video", {
                            username: e
                        }, "ReportModalWizard")
                    },
                    reportMessage: function(e) {
                        return Object(c.d)("Report {username}'s Message", {
                            username: e
                        }, "ReportModalWizard")
                    },
                    reportWhisper: function(e) {
                        return Object(c.d)("Report {username}'s Whisper", {
                            username: e
                        }, "ReportModalWizard")
                    },
                    reportProfileOrOtherContent: function(e) {
                        return Object(c.d)("Report {username}'s Profile Or Other Content", {
                            username: e
                        }, "ReportModalWizard")
                    },
                    reportProfile: function(e) {
                        return Object(c.d)("Report {username}'s Profile Content", {
                            username: e
                        }, "ReportModalWizard")
                    },
                    reportEmotesBadges: function(e) {
                        return Object(c.d)("Report {username}'s Emotes or Badges", {
                            username: e
                        }, "ReportModalWizard")
                    },
                    reportAbusive: function(e) {
                        return Object(c.d)("Report {username} for Abusive Conduct", {
                            username: e
                        }, "ReportModalWizard")
                    },
                    tellUsMore: function() {
                        return Object(c.d)("Tell Us More", "ReportModalWizard")
                    },
                    thanks: function() {
                        return Object(c.d)("Thanks for letting us know", "ReportModalWizard")
                    },
                    thanksConcern: function() {
                        return Object(c.d)("Thank you for your concern", "ReportModalWizard")
                    }
                },
                D = {
                    getDescription: function() {
                        return Object(c.d)("Reports are reviewed by Twitch Staff 24 hours a day. We will issue penalties, such as account suspension and/or content removal, once we verify that a violation of our policies has occurred.", "ReportModalWizard")
                    },
                    blockPrompt: !0,
                    getTitle: W.thanks,
                    type: O.Info,
                    value: "end card"
                },
                z = {
                    socialMedia: i.__assign({}, D, {
                        items: [C.endBlurb_socialmedia]
                    }),
                    violence: i.__assign({}, D, {
                        items: [C.endBlurb_threat]
                    }),
                    legal: {
                        getTitle: W.thanksConcern,
                        getDescription: function() {
                            return Object(c.d)("To submit a claim or report a violation of this type, you will need to follow the steps listed on the relevant page below.", "ReportModalWizard")
                        },
                        items: [C.endLink_DMCA, C.endLink_trademark, C.endLink_devAgreement],
                        type: O.Info,
                        value: "ip end"
                    },
                    selfharm: {
                        getTitle: W.thanksConcern,
                        getDescription: function() {
                            return Object(c.d)("If you know the user personally, and you believe them to be in danger, please contact their local authorities immediately. The link below contains some general information that may be of use.", "ReportModalWizard")
                        },
                        items: [C.endLink_selfharm],
                        type: O.Info,
                        value: "selfharm end"
                    },
                    twitchEvent: {
                        getTitle: W.thanksConcern,
                        getDescription: function() {
                            return Object(c.d)("Please bring this concern to the attention of staff or security at the event if you have not already done so. More information is available at the link below.", "ReportModalWizard")
                        },
                        items: [C.endLink_eventCoC],
                        value: "twitch event end",
                        type: O.Info
                    }
                },
                A = {
                    getTitle: W.report,
                    getLabel: function() {
                        return Object(c.d)("Where is the problem?", "ReportModalWizard")
                    },
                    items: [C.video, C.whisper, C.chat, C.moderating, C.otherContent, C.report_username, C.report_other],
                    type: O.MultipleChoice,
                    value: "content type"
                },
                F = {
                    identifyUser: {
                        getTitle: W.reportVideo,
                        getLabel: I.identifyUser,
                        items: [C.video_streamer, C.video_someoneElse, C.video_chatSomeone],
                        type: O.MultipleChoice,
                        value: "video identify user"
                    },
                    content: {
                        getTitle: W.reportVideo,
                        getLabel: I.contentGeneral,
                        items: [C.violence, C.abusive, C.video_inactive, C.video_labeling, C.inappropriateContent, C.selfharm, C.video_more_options],
                        type: O.MultipleChoice,
                        value: "video report reason"
                    },
                    moreOptions: {
                        getTitle: W.reportVideo,
                        getLabel: I.contentGeneral,
                        items: [C.revealPersonalInfo, C.cheating, C.impersonating, C.underage, C.bitsViolation, C.report_ip, C.other],
                        type: O.MultipleChoice,
                        value: "video general report reason"
                    }
                },
                U = {
                    content: {
                        getTitle: W.reportMessage,
                        getLabel: I.contentGeneral,
                        items: [C.report_username, C.violence, C.abusive, C.evasion, C.spam, C.selfharm, C.chat_more_options],
                        type: O.MultipleChoice,
                        value: "message report reason"
                    },
                    moreOptions: {
                        getTitle: W.reportMessage,
                        getLabel: I.contentGeneral,
                        items: [C.emotes_break_guidelines, C.inappropriateContent, C.revealPersonalInfo, C.maliciousRaid, C.underage, C.bitsViolation, C.other],
                        type: O.MultipleChoice,
                        value: "message general report reason"
                    }
                },
                P = {
                    general: {
                        getTitle: W.reportWhisper,
                        getLabel: I.contentGeneral,
                        items: [C.report_username, C.violence, C.abusive, C.spam, C.selfharm, C.whisper_more_options],
                        type: O.MultipleChoice,
                        value: "whisper report reason",
                        getDescription: function() {
                            return Object(c.d)("Please note that we may review additional messages in this conversation to determine the context of your report.", "ReportModalWizard")
                        }
                    },
                    moreOptions: {
                        getTitle: W.reportWhisper,
                        getLabel: I.contentGeneral,
                        items: [C.emotes_break_guidelines, C.evasion, C.inappropriateContent, C.revealPersonalInfo, C.underage, C.other],
                        type: O.MultipleChoice,
                        value: "whisper general report reason"
                    }
                },
                L = {
                    profile: {
                        getTitle: W.reportProfile,
                        getLabel: I.contentGeneral,
                        items: [C.revealPersonalInfo, C.violence, C.abusive, C.inappropriateContent, C.selfharm, C.profile_more_options],
                        type: O.MultipleChoice,
                        value: "profile report reason"
                    },
                    profileMoreOptions: {
                        getTitle: W.reportProfile,
                        getLabel: I.contentGeneral,
                        items: [C.scam, C.evasion, C.impersonation, C.underage, C.report_ip, C.other],
                        type: O.MultipleChoice,
                        value: "profile general report reason"
                    },
                    emotes: {
                        getTitle: W.reportEmotesBadges,
                        getLabel: I.content,
                        items: [C.hateSpeechSymbols, C.harassing, C.itsInappropriateContent, C.automod, C.report_ip, C.other],
                        type: O.MultipleChoice,
                        value: "emote report reason"
                    },
                    general: {
                        getTitle: W.reportProfileOrOtherContent,
                        getLabel: I.content,
                        items: [C.report_username, C.profile, C.report_emotes, C.inappropriateExtension, C.compromisedAccount, C.violateDevAgreement],
                        type: O.MultipleChoice,
                        value: "profile content location"
                    }
                },
                V = {
                    getTitle: function(e) {
                        return Object(c.d)("Report {username}'s Room", {
                            username: e
                        }, "ReportModalWizard")
                    },
                    getLabel: I.identifyUser,
                    items: [C.report_channelOwner, C.report_member],
                    value: "room report user",
                    type: O.MultipleChoice
                },
                B = {
                    getTitle: W.tellUsMore,
                    items: [C.input_description],
                    type: O.Confirm,
                    value: "tell us more"
                },
                Y = {
                    banEvasion: i.__assign({}, B, {
                        items: [C.input_usernames, C.input_description],
                        value: "ban evasion tell us more"
                    }),
                    socialMedia: i.__assign({}, B, {
                        items: [C.input_link, C.input_connection, C.input_description],
                        nextCard: z.socialMedia,
                        value: "social media tell us more"
                    })
                },
                H = {
                    content: {
                        getTitle: W.reportAbusive,
                        getLabel: I.relevantStatements,
                        items: [C.hateSpeech, C.harassment, C.abusiveViolence, C.commitingViolence, C.swatting, C.personalInfo],
                        type: O.MultipleChoice,
                        value: "abuse type"
                    }
                },
                G = {
                    identifyLocation: {
                        getTitle: function(e) {
                            return Object(c.d)("Report {username} for something else...", {
                                username: e
                            }, "ReportModalWizard")
                        },
                        getLabel: function() {
                            return Object(c.d)("Where did the problem happen?", "ReportModalWizard")
                        },
                        items: [C.location_onTwitch, C.location_anotherSite, C.location_TwitchEvent],
                        type: O.MultipleChoice,
                        value: "off-site conduct location"
                    },
                    externalSite: {
                        getTitle: function(e) {
                            return Object(c.d)("Report {username}'s Conduct on Another Site or Service", {
                                username: e
                            }, "ReportModalWizard")
                        },
                        getLabel: I.contentGeneral,
                        getDescription: function() {
                            return Object(c.d)("Please note that incidents reported through this form must involve Twitch community members. If possible, please submit a report to the site or service where the incident occurred as well.", "ReportModalWizard")
                        },
                        items: [C.external_incitingRaids, C.external_threatening, C.external_harassment],
                        type: O.MultipleChoice,
                        nextCard: Y.socialMedia,
                        value: "external site conduct"
                    },
                    external_abusive: i.__assign({}, H.content, {
                        items: [C.hateSpeech, C.harassment, C.external_abusiveViolence, C.external_commitingViolence, C.swatting, C.personalInfo],
                        nextCard: Y.socialMedia
                    })
                },
                q = {
                    getTitle: function(e) {
                        return Object(c.d)("Report {username}'s Spam or Malicious Links", {
                            username: e
                        }, "ReportModalWizard")
                    },
                    getLabel: I.contentGeneral,
                    items: [C.spam_bot, C.spam_scam, C.spam_links, C.spam_repeated],
                    type: O.MultipleChoice,
                    value: "spam type"
                },
                X = {
                    getTitle: function(e) {
                        return Object(c.d)("Report {username} for Inappropriate Content", {
                            username: e
                        }, "ReportModalWizard")
                    },
                    getLabel: I.relevantStatements,
                    items: [C.inappropriate_game, C.gory, C.sexuallyViolentChildAnimal, C.pornographic, C.suggestive, C.nudity, C.other],
                    type: O.MultipleChoice,
                    value: "inappropriate content type"
                },
                Q = {
                    getTitle: function(e) {
                        return Object(c.d)("Report {username} for Evading a Ban", {
                            username: e
                        }, "ReportModalWizard")
                    },
                    getLabel: function() {
                        return Object(c.d)("What kind of ban are they evading?", "ReportModalWizard")
                    },
                    value: "ban type",
                    items: [C.evasion_chat, C.evasion_sitewide, C.evasion_messaging],
                    type: O.MultipleChoice,
                    nextCard: Y.banEvasion
                },
                $ = {
                    getTitle: function(e) {
                        return Object(c.d)("Report {username} for Impersonation", {
                            username: e
                        }, "ReportModalWizard")
                    },
                    getLabel: function() {
                        return Object(c.d)("Who is being impersonated?", "ReportModalWizard")
                    },
                    getDescription: function() {
                        return Object(c.d)("Please note that parody, cosplay, and other portrayals without the intent to deceive or defraud are allowed under Twitch's Community Guidelines. If you would still like to submit a report, please continue.", "ReportModalWizard")
                    },
                    items: [C.impersonation_me, C.impersonation_brand, C.impersonation_other],
                    type: O.MultipleChoice,
                    value: "impersonation type"
                },
                K = A,
                J = B,
                Z = D,
                ee = {
                    video: F.content,
                    "video more options": F.moreOptions,
                    whisper: P.general,
                    "whisper more options": P.moreOptions,
                    chat: U.content,
                    "chat more options": U.moreOptions,
                    "other content": L.general,
                    profile: L.profile,
                    "profile more options": L.profileMoreOptions,
                    room: V,
                    "somewhere else": G.identifyLocation,
                    streamer: F.content,
                    "someone else in video": F.content,
                    "someone in chat": U.content,
                    general_video: F.moreOptions,
                    general_messaging: U.content,
                    general_profile: L.profile,
                    "channel owner": L.general,
                    "community member": U.content,
                    "on twitch": L.general,
                    "another site": G.externalSite,
                    "twitch event": z.twitchEvent,
                    "brigading/raids": Y.socialMedia,
                    "hateful/harassing": G.external_abusive,
                    "external site; scam": Y.socialMedia,
                    "ban evasion": Q,
                    spam: q,
                    hateful: H.content,
                    impersonation: $,
                    abusive: H.content,
                    "inappropriate content": X,
                    "inappropriate emotes": L.emotes,
                    "intellectual property": z.legal,
                    "violating developer agreement": z.legal
                },
                te = {
                    selfharm: z.selfharm,
                    harm: z.violence,
                    other: Z
                },
                ne = {
                    CHANNEL_FEED_POST_REPORT: L.general,
                    COMMUNITY_REPORT: L.general,
                    CHAT_REPORT: U.content,
                    CLIP_REPORT: F.content,
                    EVENT_REPORT: L.general,
                    EXTENSION_REPORT: L.general,
                    LIVE_UP_REPORT: L.general,
                    ROOM_REPORT: V,
                    WHISPER_REPORT: P.general,
                    VOD_COMMENT_REPORT: U.content
                },
                oe = "report-wizard-back",
                re = "report-wizard-close",
                ie = "report-wizard-next",
                ae = "report-wizard-submit",
                se = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            currentCard: t.props.currentCard || ne[t.props.reportContentType] || K,
                            prevCards: [],
                            currentSelection: null,
                            prevSelections: [],
                            displacedSelections: [],
                            userTextInput: {},
                            error: "",
                            reportReason: t.props.reportReason || "",
                            modalCloseTracked: !1,
                            targetUnknown: !1,
                            reportContext: t.props.reportContentType
                        }, t.renderPrimer = function() {
                            return a.createElement(y.Ya, {
                                margin: {
                                    top: 1
                                }
                            }, a.createElement(y.W, null, Object(c.d)("We are going to ask you a few questions to help us investigate your report quickly and accurately.", "ReportModalWizard")))
                        }, t.renderButtons = function() {
                            var e = Object(c.d)("Close", "ReportModalWizard"),
                                n = t.handleClose,
                                o = re,
                                r = !1,
                                i = t.state.prevCards.length ? t.renderBack() : null;
                            switch (t.state.currentCard.type) {
                                case O.MultipleChoice:
                                    e = Object(c.d)("Next", "ReportModalWizard"), n = t.handleNext, o = ie, r = !t.state.currentSelection;
                                    break;
                                case O.Confirm:
                                    e = Object(c.d)("Submit Report", "ReportModalWizard"), n = t.handleSubmit, r = !t.state.userTextInput, o = ae
                            }
                            return a.createElement(y.Ya, null, i, a.createElement(y.z, {
                                onClick: n,
                                disabled: r,
                                "data-test-selector": o
                            }, a.createElement(y.Ya, {
                                padding: {
                                    x: 1
                                }
                            }, e)))
                        }, t.renderBack = function() {
                            return a.createElement(y.Ya, {
                                margin: {
                                    right: 1
                                },
                                display: y.X.InlineBlock
                            }, a.createElement(y.z, {
                                type: y.F.Hollow,
                                onClick: t.handleBack,
                                "data-test-selector": oe
                            }, a.createElement(y.Ya, {
                                padding: {
                                    x: 1
                                }
                            }, Object(c.d)("Back", "ReportModalWizard"))))
                        }, t.getTitle = function() {
                            return t.state.currentCard.getTitle && t.props.targetUser.displayName && t.props.targetUser.id ? t.state.targetUnknown ? t.state.currentCard.getTitle(Object(c.d)("Another User", "ReportModalWizard")) : t.state.currentCard.getTitle(t.props.targetUser.displayName) : t.state.targetUnknown ? Object(c.d)("Report User", "ReportModalWizard") : t.props.title
                        }, t.handleClose = function() {
                            t.setState({
                                modalCloseTracked: !0
                            }, function() {
                                return t.props.trackClose(x.Finish, t.state.currentCard.value, t.getChoiceIndex())
                            }), t.props.onClose()
                        }, t.getChoiceIndex = function() {
                            var e = 0;
                            return t.state.currentCard && t.state.currentCard.items && (e = t.state.currentCard.items.findIndex(function(e) {
                                return t.state.currentSelection === e
                            }) + 1), e >= 1 ? e : void 0
                        }, t.handleNext = function() {
                            if (t.state.currentSelection && t.state.currentSelection.value) {
                                var e = t.state.currentCard,
                                    n = t.state.prevCards.concat(e),
                                    o = t.state.prevSelections.concat(t.state.currentSelection),
                                    r = t.state.displacedSelections[t.state.displacedSelections.length - 1],
                                    i = t.state.currentSelection.differentTarget || t.state.targetUnknown,
                                    a = t.state.currentSelection.reportContext || t.state.reportContext,
                                    s = t.getChoiceIndex(),
                                    l = e.nextCard || J;
                                ee[t.state.currentSelection.value] && (l = ee[t.state.currentSelection.value]);
                                var c = t.state.currentSelection.reportReason || t.state.reportReason,
                                    d = l.type === O.Info;
                                t.setState({
                                    currentCard: l,
                                    reportReason: c,
                                    prevCards: d ? [] : n,
                                    prevSelections: o,
                                    targetUnknown: i,
                                    currentSelection: r || null,
                                    displacedSelections: t.state.displacedSelections.slice(0, -1),
                                    reportContext: a
                                }, function() {
                                    return t.trackNavigation(j.Next, e.value, s)
                                })
                            }
                        }, t.createReportDescription = function() {
                            return "" + (t.state.reportContext !== t.props.reportContentType ? "report context: " + t.props.reportContentType + "\n\n" : "") + t.state.prevSelections.map(function(e) {
                                if (!e.omitFromDescription) return e.value
                            }).filter(function(e) {
                                return !!e
                            }).join(" > ") + "\n\n" + Object.keys(t.state.userTextInput).map(function(e) {
                                return e + ": " + t.state.userTextInput[e]
                            }).join("\n")
                        }, t.requiredInputsNonEmpty = function() {
                            if (t.state.currentCard.items) return 0 === t.state.currentCard.items.filter(function(e) {
                                if (e.type !== r.Textarea || !e.required) return !1;
                                var n = t.state.userTextInput[e.value],
                                    o = n && 0 === n.trim().length;
                                return !n || o
                            }).length
                        }, t.handleSubmit = function() {
                            return i.__awaiter(t, void 0, void 0, function() {
                                var e, t, n, o, r, a = this;
                                return i.__generator(this, function(i) {
                                    switch (i.label) {
                                        case 0:
                                            return e = Object(c.d)("Additional information is required.", "ReportModalWizard"), this.requiredInputsNonEmpty() ? (t = this.state.reportReason || "other", n = this.createReportDescription(), [4, this.props.onSubmit(t, n, this.state.reportContext)]) : [3, 2];
                                        case 1:
                                            switch (i.sent(), this.props.submitStatus) {
                                                case M.a.FormError:
                                                    this.setState({
                                                        error: e
                                                    });
                                                    break;
                                                case M.a.Success:
                                                    o = Z, te[t] && (o = te[t]), this.state.currentCard.nextCard && (o = this.state.currentCard.nextCard), r = this.getChoiceIndex(), this.setState({
                                                        currentCard: o,
                                                        prevCards: [],
                                                        prevSelections: [],
                                                        currentSelection: null,
                                                        displacedSelections: [],
                                                        userTextInput: {},
                                                        error: ""
                                                    }, function() {
                                                        return a.trackNavigation(j.Submit, void 0, r)
                                                    });
                                                    break;
                                                case M.a.UserError:
                                                    this.setState({
                                                        error: Object(c.d)("This account could not be reported. It may have already been suspended, or the owner may have deleted it.", "ReportModalWizard")
                                                    });
                                                    break;
                                                case M.a.MutationError:
                                                default:
                                                    this.setState({
                                                        error: Object(c.d)("Sorry, a network error occurred when submitting your report. Please try again later.", "ReportModalWizard")
                                                    })
                                            }
                                            return [3, 3];
                                        case 2:
                                            this.props.onError(M.a.FormError), this.setState({
                                                error: e
                                            }), i.label = 3;
                                        case 3:
                                            return [2]
                                    }
                                })
                            })
                        }, t.handleBack = function() {
                            return i.__awaiter(t, void 0, void 0, function() {
                                var e, t, n, o, r, a, s = this;
                                return i.__generator(this, function(i) {
                                    return e = this.state.currentCard, t = this.state.prevCards[this.state.prevCards.length - 1], n = this.state.prevSelections[this.state.prevSelections.length - 1], o = !n.differentTarget && this.state.targetUnknown, r = this.getChoiceIndex(), a = this.state.displacedSelections, this.state.currentSelection && (a = a.concat(this.state.currentSelection)), t && n && this.setState({
                                        currentCard: t,
                                        currentSelection: n,
                                        displacedSelections: a,
                                        prevCards: this.state.prevCards.slice(0, -1),
                                        prevSelections: this.state.prevSelections.slice(0, -1),
                                        error: "",
                                        targetUnknown: o
                                    }, function() {
                                        return s.trackNavigation(j.Back, e.value, r)
                                    }), [2]
                                })
                            })
                        }, t.handleTextInput = function(e, n) {
                            var o = t.state.userTextInput;
                            o[e] = n, t.setState({
                                userTextInput: o
                            })
                        }, t.handleSelection = function(e) {
                            if (t.state.currentCard.items && e !== t.state.currentSelection) {
                                var n = t.state.targetUnknown;
                                if (n) n = 0 === t.state.displacedSelections.filter(function(e) {
                                    return e.differentTarget
                                }).length;
                                var o = t.state.reportContext;
                                (t.state.displacedSelections.filter(function(e) {
                                    return e.reportContext
                                }).length || t.state.currentSelection && t.state.currentSelection.reportContext) && (o = t.props.reportContentType), t.setState({
                                    currentSelection: e,
                                    displacedSelections: [],
                                    userTextInput: {},
                                    targetUnknown: n,
                                    reportContext: o
                                })
                            }
                        }, t.trackNavigation = function(e, n, o) {
                            t.props.trackAction(e, n, t.state.currentCard.value, o)
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.componentWillUnmount = function() {
                        this.state.modalCloseTracked || this.props.trackClose(x.Close, this.state.currentCard.value, this.getChoiceIndex())
                    }, t.prototype.render = function() {
                        var e = this.state.currentCard.type === O.Info && this.state.currentCard.blockPrompt ? a.createElement(T, {
                                targetUser: this.props.targetUser,
                                onBlock: this.props.onBlock,
                                onUnblock: this.props.onUnblock,
                                userBlocked: this.props.userBlocked
                            }) : null,
                            t = this.state.error ? a.createElement(y.Fb, {
                                fullWidth: !0,
                                margin: {
                                    bottom: 1
                                },
                                padding: 1,
                                className: "reporting__error-container"
                            }, this.state.error) : null,
                            n = this.state.prevCards.length || this.state.currentCard.type === O.Info ? null : this.renderPrimer();
                        return a.createElement(y.Fb, {
                            className: "reporting-wizard",
                            display: y.X.Flex,
                            margin: {
                                x: 1
                            },
                            flexDirection: y.Aa.Column,
                            fullHeight: !0,
                            "data-test-card-value": this.state.currentCard.value
                        }, t, a.createElement(y.W, {
                            bold: !0,
                            fontSize: y.Ca.Size4
                        }, this.getTitle()), n, a.createElement(y.Ya, {
                            margin: {
                                y: 1
                            }
                        }, a.createElement(w, {
                            currentCard: this.state.currentCard,
                            currentSelection: this.state.currentSelection,
                            targetUser: this.props.targetUser,
                            targetUserID: this.props.targetUser.id,
                            onChangeRadio: this.handleSelection,
                            onChangeText: this.handleTextInput,
                            userTextInputs: this.state.userTextInput,
                            error: this.props.submitStatus === M.a.FormError && !!this.state.error
                        }), e), this.renderButtons())
                    }, t
                }(a.Component),
                le = n("s8Ou"),
                ce = n("0hI/");
            n.d(t, "c", function() {
                    return j
                }), n.d(t, "a", function() {
                    return x
                }), n.d(t, "b", function() {
                    return ue
                }),
                function(e) {
                    e.Close = "close", e.Open = "open", e.Submit = "submit_report", e.ToggleSettings = "modal_settings"
                }(N || (N = {})),
                function(e) {
                    e.Back = "back", e.Close = "close", e.Open = "open", e.Next = "next", e.Submit = "submit_report", e.ToggleSettings = "modal_settings"
                }(j || (j = {})),
                function(e) {
                    e.Close = "close", e.Finish = "finish"
                }(x || (x = {}));
            var de = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    n.handleSubmit = function(e, t, o) {
                        return i.__awaiter(n, void 0, void 0, function() {
                            var n, r, a, s, l = this;
                            return i.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        if (n = o === b.N.WHISPER_REPORT ? o : this.props.reportContext.contentType, r = b.N[n], null === (a = {
                                                description: t,
                                                reason: e,
                                                content: r,
                                                contentID: this.props.reportContext.contentID,
                                                extra: this.props.reportContext.extra,
                                                targetID: this.props.data.targetUser.id
                                            }).targetID) return this.setState({
                                            submitStatus: M.a.UserError
                                        }), [2];
                                        i.label = 1;
                                    case 1:
                                        return i.trys.push([1, 3, , 4]), [4, this.props.reportUser(Object(m.a)(a))];
                                    case 2:
                                        return i.sent(), this.setState({
                                            submitStatus: M.a.Success
                                        }, function() {
                                            l.state.showWizard || l.trackAction(N.Submit)
                                        }), [3, 4];
                                    case 3:
                                        return s = i.sent(), c.k.error(s, "ReportUser Mutation failed."), this.setState({
                                            submitStatus: M.a.MutationError
                                        }), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, n.handleChildError = function(e) {
                        return n.setState({
                            submitStatus: e
                        })
                    }, n.handleClose = function() {
                        n.props.onClose && n.props.onClose(n.state.submitStatus, n.state.userBlocked)
                    }, n.onBlock = function() {
                        n.props.blockUserMutation(n.props.data.targetUser.id, void 0, void 0, i.__assign({}, n.props.sessionUser, {
                            __typename: "User"
                        })), n.setState({
                            userBlocked: !0
                        }), n.props.sessionUser && n.props.sessionUser.login && n.props.data.targetUser && n.props.data.targetUser.login && Object(h.b)({
                            context: h.a.ReportWizard,
                            targetUserLogin: n.props.data.targetUser.login,
                            currentUserLogin: n.props.sessionUser.login
                        })
                    }, n.onUnblock = function() {
                        n.props.unblockUserMutation(n.props.data.targetUser.id, i.__assign({}, n.props.sessionUser, {
                            __typename: "User"
                        })), n.setState({
                            userBlocked: !1
                        })
                    }, n.trackOpen = function(e) {
                        n.state.openEventSent || (n.state.showWizard ? n.trackWizardAction(j.Open, void 0, e) : n.trackAction(N.Open), n.setState({
                            openEventSent: !0
                        }))
                    }, n.trackClose = function(e, t, o) {
                        n.state.closeEventSent || (n.state.showWizard ? n.trackWizardAction(j.Close, t, void 0, o, e) : n.trackAction(N.Close), n.setState({
                            closeEventSent: !0
                        }))
                    }, n.trackWizardAction = function(e, t, o, r, i) {
                        c.p.tracking.track(f.SpadeEventType.ReportWizardFlowAction, {
                            ui_context: n.props.reportContext.contentType,
                            target_user_id: n.props.reportContext.targetUserID,
                            report_sent: n.state.submitStatus === M.a.Success,
                            modal_type: "wizard_v2",
                            extra_user_id: n.props.reportContext.additionalTrackingID,
                            action: e,
                            close_type: i,
                            report_session_id: n.reportID,
                            current_step: t,
                            navigated_to: o,
                            choice_index: r
                        })
                    }, n.trackAction = function(e) {
                        c.p.tracking.track(f.SpadeEventType.ReportFlowAction, {
                            ui_context: n.props.reportContext.contentType,
                            target_user_id: n.props.reportContext.targetUserID,
                            report_sent: n.state.submitStatus === M.a.Success,
                            extra_user_id: n.props.reportContext.additionalTrackingID,
                            action: e,
                            report_session_id: n.reportID
                        })
                    }, n.reportID = Object(g.a)();
                    var o = c.p.experiments.getAssignment(v.b.NewReportingWizard);
                    return n.state = {
                        submitStatus: M.a.Unsubmitted,
                        showWizard: "yes" === o,
                        openEventSent: !1,
                        closeEventSent: !1,
                        userBlocked: !1
                    }, n
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.trackOpen()
                }, t.prototype.componentWillUnmount = function() {
                    this.handleClose(), this.state.showWizard || this.trackClose()
                }, t.prototype.render = function() {
                    if (this.props.data.error) return a.createElement(y.Ya, {
                        margin: {
                            bottom: 1
                        }
                    }, a.createElement(y.W, {
                        fontSize: y.Ca.Size5
                    }, Object(c.d)("There was an unexpected error. Please refresh the page and try again", "ReportUser")));
                    if (this.props.data.loading) return a.createElement(y.jb, {
                        lineCount: 3
                    });
                    if (this.props.data.targetUser) {
                        var e = {
                            onClose: this.handleClose,
                            onError: this.handleChildError,
                            onSubmit: this.handleSubmit,
                            reportContentType: this.props.reportContext.contentType,
                            submitStatus: this.state.submitStatus,
                            title: this.props.title,
                            defaultDescription: this.props.defaultDescription
                        };
                        return this.state.showWizard ? this.props.data.loading ? a.createElement(y.ab, null) : a.createElement(se, i.__assign({}, e, {
                            user: this.props.sessionUser,
                            onBlock: this.onBlock,
                            onUnblock: this.onUnblock,
                            targetUser: this.props.data.targetUser,
                            trackAction: this.trackWizardAction,
                            trackClose: this.trackClose,
                            userBlocked: this.userBlocked
                        })) : a.createElement(M.b, i.__assign({}, e, {
                            targetUser: this.props.data.targetUser
                        }))
                    }
                    return a.createElement(y.Ya, {
                        margin: {
                            bottom: 1
                        }
                    }, a.createElement(y.W, {
                        fontSize: y.Ca.Size5
                    }, Object(c.d)("The user you are trying to report does not exist", "ReportUser")))
                }, Object.defineProperty(t.prototype, "userBlocked", {
                    get: function() {
                        var e = this;
                        return !!(this.props.data.currentUser && this.props.data.currentUser.blockedUsers && this.props.data.currentUser.blockedUsers.find(function(t) {
                            return !!t && t.id === e.props.reportContext.targetUserID
                        }))
                    },
                    enumerable: !0,
                    configurable: !0
                }), t
            }(a.Component);
            var ue = Object(l.compose)(Object(d.a)(le, {
                name: "reportUser"
            }), Object(d.a)(ce, {
                options: function(e) {
                    return {
                        variables: {
                            targetUserID: e.reportContext.targetUserID
                        }
                    }
                }
            }), Object(R.b)("ReportUser", {
                autoReportInteractive: !0
            }), Object(u.a)(), Object(p.a)(), Object(s.connect)(function(e) {
                return {
                    sessionUser: e.session.user
                }
            }, null))(de)
        },
        drmE: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return r
            }), n.d(t, "c", function() {
                return i
            }), n.d(t, "b", function() {
                return a
            }), n.d(t, "d", function() {
                return s
            }), n.d(t, "f", function() {
                return l
            }), n.d(t, "e", function() {
                return c
            }), n.d(t, "g", function() {
                return d
            });
            var o = /^([^\u0000-\u007F]|[a-z0-9_]|-)*$/,
                r = 25,
                i = 3,
                a = 100;

            function s(e) {
                return o.test(e)
            }

            function l(e) {
                return e.length > r
            }

            function c(e) {
                return e.length <= r && e.length >= i
            }

            function d(e) {
                return e.length <= a
            }
        },
        gIsd: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "ReportUserModal_ReportReasons"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "content"
                            }
                        },
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "ReportContentType"
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
                                value: "reportReasons"
                            },
                            arguments: [{
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "content"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "content"
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
                                        value: "text"
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
                    end: 114
                }
            };
            n.loc.source = {
                body: "query ReportUserModal_ReportReasons($content: ReportContentType!) {\nreportReasons(content: $content) {\nid\ntext\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        jhcA: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "mutation",
                    name: {
                        kind: "Name",
                        value: "RoomDetails_UpdateRoom"
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
                                    value: "UpdateRoomInput"
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
                                value: "updateRoom"
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
                                        value: "room"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "name"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "topic"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "isPreviewable"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "minimumAllowedRole"
                                            },
                                            arguments: [],
                                            directives: []
                                        }]
                                    }
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "error"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "code"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "maxLength"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "minLength"
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
                    end: 179
                }
            };
            n.loc.source = {
                body: "mutation RoomDetails_UpdateRoom($input: UpdateRoomInput!) {\nupdateRoom(input: $input) {\nroom {\nname\ntopic\nisPreviewable\nminimumAllowedRole\n}\nerror {\ncode\nmaxLength\nminLength\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        qMYr: function(e, t, n) {},
        s8Ou: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "mutation",
                    name: {
                        kind: "Name",
                        value: "ReportUserModal_ReportUser"
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
                                    value: "ReportContentInput"
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
                                value: "reportContent"
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
                                        value: "contentID"
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
                    end: 111
                }
            };
            n.loc.source = {
                body: "mutation ReportUserModal_ReportUser($input: ReportContentInput!) {\nreportContent(input: $input) {\ncontentID\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        uQjW: function(e, t, n) {
            "use strict";
            var o = n("/MKj"),
                r = n("fvjX"),
                i = n("1/iK"),
                a = n("aCAx"),
                s = n("y5D0"),
                l = n("kRBY"),
                c = n("mrSG"),
                d = n("q1tI"),
                u = n("/7QA"),
                p = n("yR8l"),
                m = n("geRD"),
                h = n("oJmH"),
                g = n("cZKs"),
                v = n("Ue10"),
                b = n("TMB/"),
                f = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.deleteRoom = function() {
                            t.props.deleteRoom(Object(m.a)({
                                roomID: t.props.roomID
                            })), t.props.onCloseModal()
                        }, t
                    }
                    return c.__extends(t, e), t.prototype.render = function() {
                        return d.createElement(v.Fb, {
                            background: v.r.Base,
                            className: "delete-room-modal",
                            position: v.kb.Relative
                        }, d.createElement(v.Ya, {
                            padding: 2,
                            margin: {
                                top: 1
                            }
                        }, d.createElement(v.Ya, {
                            margin: {
                                bottom: 2
                            }
                        }, d.createElement(v.W, {
                            type: v.Wb.H4
                        }, Object(u.d)("Delete #{roomName}?", {
                            roomName: this.props.roomName
                        }, "DeleteRoomModal")), d.createElement(v.Ya, {
                            padding: {
                                top: 1
                            }
                        }, d.createElement(v.W, {
                            type: v.Wb.Span,
                            color: v.O.Alt2
                        }, Object(u.d)("This will remove all messages in this room permanently from your channel", "DeleteRoomModal")))), d.createElement(v.Ya, {
                            padding: {
                                top: 2
                            },
                            textAlign: v.Sb.Right
                        }, d.createElement(v.Ya, {
                            display: v.X.Inline,
                            margin: {
                                right: .5
                            }
                        }, d.createElement(v.z, {
                            type: v.F.Hollow,
                            onClick: this.props.onCloseModal,
                            "data-test-selector": "cancel-button"
                        }, Object(u.d)("No, keep this room", "DeleteRoomModal"))), d.createElement(v.Ya, {
                            display: v.X.Inline,
                            margin: {
                                left: .5
                            }
                        }, d.createElement(v.z, {
                            onClick: this.deleteRoom,
                            "data-test-selector": "confirm-button",
                            type: v.F.Alert
                        }, Object(u.d)("Yes, delete this room", "DeleteRoomModal"))))), d.createElement(g.a, {
                            closeOnBackdropClick: !0
                        }))
                    }, t
                }(d.Component),
                R = Object(h.compose)(Object(p.a)(b, {
                    name: "deleteRoom"
                }))(f);
            var k = Object(o.connect)(null, function(e) {
                    return Object(r.bindActionCreators)({
                        onCloseModal: a.c
                    }, e)
                })(R),
                y = n("9Vxt"),
                E = n("20fZ"),
                S = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.toggleMuteSetting = function() {
                            return c.__awaiter(t, void 0, void 0, function() {
                                var e, t, n, o;
                                return c.__generator(this, function(r) {
                                    switch (r.label) {
                                        case 0:
                                            return e = this.props.data.room.self.isMuted, t = c.__assign({}, Object(m.a)({
                                                isMuted: !e,
                                                roomID: this.props.roomID
                                            }), {
                                                optimisticResponse: {
                                                    updateRoomView: {
                                                        __typename: "UpdateRoomViewPayload",
                                                        roomView: {
                                                            isMuted: !e,
                                                            __typename: "RoomView"
                                                        }
                                                    }
                                                }
                                            }), this.props.handleClick && this.props.handleClick(), [4, this.props.muteRoom(t)];
                                        case 1:
                                            return n = r.sent(), o = function(e) {
                                                return e.room.self.isMuted = n.data.updateRoomView.roomView.isMuted, e
                                            }, Object(m.e)(y, {
                                                id: this.props.roomID
                                            }, o), [2]
                                    }
                                })
                            })
                        }, t
                    }
                    return c.__extends(t, e), t.prototype.render = function() {
                        if (this.props.data.loading) return d.createElement(v.jb, {
                            height: 30,
                            width: 160
                        });
                        if (this.props.data.error || !this.props.data.room.owner.self.isChannelMember) return null;
                        var e = Object(u.d)("Mute all notifications", "MuteButton");
                        return this.props.data.room.self.isMuted && (e = Object(u.d)("Unmute all notifications", "MuteButton")), d.createElement(v.Va, {
                            type: v.Wa.Alpha,
                            "data-test-selector": "mute-room-button",
                            onClick: this.toggleMuteSetting
                        }, d.createElement(v.Fb, {
                            padding: {
                                y: .5,
                                x: 1
                            },
                            margin: {
                                x: .5
                            }
                        }, e))
                    }, t = c.__decorate([Object(p.a)(y, {
                        options: function(e) {
                            return {
                                variables: {
                                    id: e.roomID
                                }
                            }
                        }
                    }), Object(p.a)(E, {
                        name: "muteRoom"
                    })], t)
                }(d.Component),
                T = n("9C/b"),
                O = n("DMoW"),
                _ = n("/HY+"),
                C = n("Gf3K"),
                w = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.openReportModal = function() {
                            t.props.isLoggedIn ? t.props.onShowModal(_.a, {
                                reportContext: {
                                    contentID: t.props.roomID,
                                    contentType: O.N.ROOM_REPORT,
                                    targetUserID: t.props.data.room.owner.id
                                },
                                title: Object(u.d)("Report {roomName}", {
                                    roomName: t.props.data.room.name
                                }, "ReportRoomButton")
                            }) : t.props.login()
                        }, t
                    }
                    return c.__extends(t, e), t.prototype.render = function() {
                        return this.props.data.loading ? d.createElement(v.jb, null) : this.props.data.error ? d.createElement(v.Ya, null) : d.createElement(v.Va, {
                            type: v.Wa.Alert,
                            "data-test-selector": "report-room-button-selector",
                            onClick: this.openReportModal
                        }, d.createElement(v.Fb, {
                            padding: {
                                y: .5,
                                x: 1
                            },
                            margin: {
                                x: .5
                            }
                        }, Object(u.d)("Report", "RoomReportButton")))
                    }, t = c.__decorate([Object(p.a)(C, {
                        options: function(e) {
                            return {
                                variables: {
                                    id: e.roomID
                                }
                            }
                        }
                    })], t)
                }(d.Component),
                M = Object(T.a)(w),
                N = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onRoomNameChange = function(e) {
                            t.props.updateRoomName(e.target.value)
                        }, t.onRoomTopicChange = function(e) {
                            t.props.updateRoomTopic && t.props.updateRoomTopic(e.target.value)
                        }, t
                    }
                    return c.__extends(t, e), t.prototype.render = function() {
                        return d.createElement(v.Ya, null, d.createElement(v.Ea, {
                            label: Object(u.d)("Room name", "RoomLabelsEditor"),
                            error: !!this.props.editRoomNameError,
                            errorMessage: this.props.editRoomNameError
                        }, d.createElement(v.Sa, {
                            type: v.Ua.Text,
                            value: this.props.roomName,
                            onChange: this.onRoomNameChange,
                            "data-test-selector": "name-input",
                            placeholder: Object(u.d)("Enter Room name here", "RoomLabelsEditor")
                        })), this.renderRoomTopicEditor())
                    }, t.prototype.renderRoomTopicEditor = function() {
                        if (void 0 !== this.props.roomTopic) return d.createElement(v.Ya, null, d.createElement(v.Fb, {
                            fullWidth: !0,
                            margin: {
                                top: 1,
                                bottom: 1
                            }
                        }), d.createElement(v.Ea, {
                            label: Object(u.d)("Room topic", "RoomLabelsEditor"),
                            error: !!this.props.editRoomTopicError,
                            errorMessage: this.props.editRoomTopicError
                        }, d.createElement(v.Tb, {
                            noResize: !0,
                            value: this.props.roomTopic,
                            onChange: this.onRoomTopicChange,
                            error: !!this.props.editRoomTopicError,
                            "data-test-selector": "topic-input",
                            placeholder: Object(u.d)("What do you want your community to talk about in this room?", "RoomLabelsEditor")
                        })))
                    }, t
                }(d.Component),
                j = n("2j4q"),
                x = n("vcHY"),
                I = n("UJc8"),
                W = n("drmE"),
                D = n("vznD"),
                z = (n("zgDu"), n("jhcA")),
                A = {
                    OPTIONS: "OPTIONS",
                    PERMISSIONS: "PERMISSIONS",
                    LABELS: "LABELS"
                },
                F = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            currentView: A.OPTIONS,
                            isSaveButtonStateSuccess: !1
                        }, t.updatePermissions = function(e) {
                            t.setState({
                                updatedPermissions: e,
                                isSaveButtonStateSuccess: !1
                            })
                        }, t.updateRoomName = function(e) {
                            var n;
                            if (e = e.toLowerCase(), Object(W.d)(e)) {
                                if (Object(W.f)(e)) {
                                    var o = {
                                        maxChars: W.a,
                                        minChars: W.c
                                    };
                                    n = Object(x.a)("NAME_LENGTH_INVALID", o)
                                }
                            } else n = Object(x.a)("NAME_CONTAINS_INVALID_CHARACTERS");
                            t.setState({
                                updatedRoomName: e,
                                editRoomNameError: n,
                                isSaveButtonStateSuccess: !1
                            })
                        }, t.updateRoomTopic = function(e) {
                            var n;
                            if (!Object(W.g)(e)) {
                                var o = {
                                    maxChars: W.b
                                };
                                n = Object(x.a)("TOPIC_LENGTH_INVALID", o)
                            }
                            t.setState({
                                updatedRoomTopic: e,
                                editRoomTopicError: n,
                                isSaveButtonStateSuccess: !1
                            })
                        }, t.setOptionsView = function() {
                            t.setState({
                                editRoomNameError: void 0,
                                editRoomTopicError: void 0,
                                currentView: A.OPTIONS,
                                isSaveButtonStateSuccess: !1,
                                updatedRoomName: void 0,
                                updatedRoomTopic: void 0,
                                updatedPermissions: void 0
                            })
                        }, t.setPermissionsView = function() {
                            t.setState({
                                currentView: A.PERMISSIONS,
                                isSaveButtonStateSuccess: !1
                            })
                        }, t.setLabelsView = function() {
                            t.setState({
                                currentView: A.LABELS,
                                isSaveButtonStateSuccess: !1
                            })
                        }, t.saveUpdate = function() {
                            if (void 0 !== t.state.updatedRoomName || void 0 !== t.state.updatedRoomTopic || void 0 !== t.state.updatedPermissions)
                                if (t.state.updatedRoomName && !Object(W.e)(t.state.updatedRoomName)) {
                                    var e = {
                                            maxChars: W.a,
                                            minChars: W.c
                                        },
                                        n = Object(x.a)("NAME_LENGTH_INVALID", e);
                                    t.setState({
                                        editRoomNameError: n
                                    })
                                } else if (t.state.updatedRoomTopic && !Object(W.g)(t.state.updatedRoomTopic)) {
                                e = {
                                    maxChars: W.b
                                }, n = Object(x.a)("TOPIC_LENGTH_INVALID", e);
                                t.setState({
                                    editRoomTopicError: n
                                })
                            } else {
                                var o = c.__assign({
                                    roomID: t.props.roomID,
                                    name: t.state.updatedRoomName,
                                    topic: t.state.updatedRoomTopic
                                }, t.state.updatedPermissions);
                                t.props.updateRoom(Object(m.a)(o)).then(function(e) {
                                    if (e.data.updateRoom.error) {
                                        var n = e.data.updateRoom.error,
                                            o = n.code,
                                            r = n.minLength,
                                            i = {
                                                maxChars: n.maxLength,
                                                minChars: r
                                            },
                                            a = Object(x.a)(o, i);
                                        o.includes("NAME") ? t.setState({
                                            editRoomNameError: a
                                        }) : o.includes("TOPIC") && t.setState({
                                            editRoomTopicError: a
                                        })
                                    } else {
                                        Object(m.e)(D, {
                                            id: t.props.roomID
                                        }, function(t) {
                                            return t.room.name = e.data.updateRoom.room.name, t.room.topic = e.data.updateRoom.room.topic, t.room.isPreviewable = e.data.updateRoom.room.isPreviewable, t.room.minimumAllowedRole = e.data.updateRoom.room.minimumAllowedRole, t
                                        }), t.setState({
                                            editRoomNameError: void 0,
                                            editRoomTopicError: void 0,
                                            isSaveButtonStateSuccess: !0,
                                            isTopicFocused: !1,
                                            updatedRoomName: void 0,
                                            updatedRoomTopic: void 0,
                                            updatedPermissions: void 0
                                        })
                                    }
                                })
                            }
                        }, t.openDeleteRoomModal = function() {
                            t.props.onShowModal(k, {
                                roomID: t.props.roomID,
                                roomName: t.props.data.room.name
                            })
                        }, t.onRoomTopicChange = function(e) {
                            t.updateRoomTopic(e.target.value)
                        }, t.focusTopic = function() {
                            t.setState({
                                isSaveButtonStateSuccess: !1,
                                isTopicFocused: !0
                            })
                        }, t.blurTopic = function() {
                            t.setState({
                                updatedRoomTopic: void 0,
                                editRoomTopicError: void 0,
                                isSaveButtonStateSuccess: !1,
                                isTopicFocused: !1
                            })
                        }, t
                    }
                    return c.__extends(t, e), t.prototype.render = function() {
                        if (this.props.data.loading) return d.createElement(v.jb, null);
                        if (this.props.data.error || !this.props.data.room) return d.createElement(v.Ya, null);
                        var e;
                        switch (this.state.currentView) {
                            case A.OPTIONS:
                                e = this.getOptionsView();
                                break;
                            case A.PERMISSIONS:
                                e = this.getPermissionsView();
                                break;
                            case A.LABELS:
                                e = this.getLabelsView();
                                break;
                            default:
                                e = this.getOptionsView()
                        }
                        return d.createElement(v.Ya, null, e)
                    }, t.prototype.getOptionsView = function() {
                        return this.props.sessionUser && this.props.sessionUser.id.toString() === this.props.data.room.owner.id ? this.getBroadcasterOptionsView() : this.getNonBroadcasterOptionsView()
                    }, t.prototype.getBroadcasterOptionsView = function() {
                        return d.createElement(v.Ya, {
                            padding: {
                                y: .5
                            }
                        }, this.getEditLabelsSection(), d.createElement(v.Qa, null, d.createElement(v.Ya, {
                            display: v.X.Flex
                        }, d.createElement(v.Va, {
                            type: v.Wa.Alpha,
                            onClick: this.setPermissionsView,
                            "data-test-selector": "permissions-toggle"
                        }, d.createElement(v.Fb, {
                            padding: {
                                y: .5,
                                x: 1
                            },
                            margin: {
                                left: .5
                            },
                            display: v.X.Flex,
                            justifyContent: v.Xa.Between
                        }, Object(u.d)("Permissions", "RoomDetails"), d.createElement(v.Ya, {
                            display: v.X.Flex
                        }, d.createElement(v.W, {
                            color: v.O.Alt2
                        }, I.a[this.props.data.room.minimumAllowedRole]), d.createElement(v.Fb, {
                            className: "room-details__open-edit",
                            color: v.O.Link,
                            margin: {
                                left: .5
                            }
                        }, d.createElement(v.tb, {
                            asset: v.ub.GlyphArrDown,
                            height: 13
                        }))))))), d.createElement(v.Va, {
                            type: v.Wa.Alert,
                            onClick: this.openDeleteRoomModal,
                            "data-test-selector": "delete-button"
                        }, d.createElement(v.Fb, {
                            padding: {
                                y: .5,
                                x: 1
                            },
                            margin: {
                                left: .5
                            }
                        }, Object(u.d)("Delete", "RoomDetails"))), d.createElement(v.Ya, {
                            padding: {
                                x: 1
                            }
                        }, d.createElement(v.Fb, {
                            borderTop: !0,
                            margin: {
                                y: .5,
                                x: .5
                            }
                        })), d.createElement(S, {
                            roomID: this.props.roomID
                        }))
                    }, t.prototype.getNonBroadcasterOptionsView = function() {
                        return d.createElement(v.Ya, {
                            padding: {
                                y: .5
                            }
                        }, this.props.forActiveRoom && !!this.props.data.room.topic.length && d.createElement(v.Ya, {
                            padding: {
                                bottom: .5,
                                top: 1,
                                x: 1
                            },
                            margin: {
                                x: .5
                            }
                        }, d.createElement(v.W, {
                            className: "room-details__topic-description",
                            color: v.O.Alt2
                        }, this.props.data.room.topic), d.createElement(v.Fb, {
                            borderTop: !0,
                            fullWidth: !0,
                            margin: {
                                top: 1
                            }
                        })), this.props.data.room.owner.self.isChannelMember && d.createElement(S, {
                            roomID: this.props.roomID
                        }), d.createElement(M, {
                            roomID: this.props.roomID,
                            isLoggedIn: this.props.isLoggedIn,
                            login: this.props.login,
                            onShowModal: this.props.onShowModal
                        }))
                    }, t.prototype.getEditLabelsSection = function() {
                        var e = Object(u.d)("Edit name or topic", "RoomDetails");
                        this.props.forActiveRoom && (e = Object(u.d)("Edit name", "RoomDetails"));
                        var t = d.createElement(v.Qa, null, d.createElement(v.Va, {
                            type: v.Wa.Alpha,
                            onClick: this.setLabelsView,
                            "data-test-selector": "edit-labels"
                        }, d.createElement(v.Fb, {
                            padding: {
                                y: .5,
                                x: 1
                            },
                            margin: {
                                left: .5
                            },
                            display: v.X.Flex,
                            justifyContent: v.Xa.Between
                        }, e, d.createElement(v.Ya, {
                            display: v.X.Flex
                        }, d.createElement(v.Fb, {
                            className: "room-details__open-edit",
                            color: v.O.Link,
                            margin: {
                                left: .5
                            }
                        }, d.createElement(v.tb, {
                            asset: v.ub.GlyphArrDown,
                            height: 13
                        }))))));
                        return this.props.forActiveRoom ? d.createElement(v.Ya, null, d.createElement(v.Ya, {
                            padding: {
                                top: 1,
                                x: 1
                            },
                            margin: {
                                x: .5
                            }
                        }, d.createElement(v.Qa, {
                            position: v.kb.Relative
                        }, this.getTopicField()), !this.state.isTopicHovered && d.createElement(v.Fb, {
                            borderTop: !0,
                            fullWidth: !0,
                            margin: {
                                top: 1
                            }
                        })), d.createElement(v.Ya, {
                            padding: {
                                top: .5
                            }
                        }, t)) : t
                    }, t.prototype.getLabelsView = function() {
                        var e = void 0 !== this.state.updatedRoomName ? this.state.updatedRoomName : this.props.data.room.name,
                            t = void 0 !== this.state.updatedRoomTopic ? this.state.updatedRoomTopic : this.props.data.room.topic,
                            n = Object(u.d)("Edit name or topic", "RoomDetailsReturn");
                        return this.props.forActiveRoom && (n = Object(u.d)("Edit name", "RoomDetailsReturn")), d.createElement(v.Ya, null, d.createElement(v.Qa, null, d.createElement(v.Ya, {
                            display: v.X.Flex,
                            padding: {
                                y: .5
                            }
                        }, d.createElement(v.Va, {
                            type: v.Wa.Alpha,
                            onClick: this.setOptionsView
                        }, d.createElement(v.Fb, {
                            padding: {
                                y: .5
                            },
                            margin: {
                                left: 1
                            },
                            display: v.X.Flex
                        }, d.createElement(v.Fb, {
                            className: "room-details__close-edit",
                            color: v.O.Link,
                            margin: {
                                right: 1
                            }
                        }, d.createElement(v.tb, {
                            asset: v.ub.GlyphArrDown,
                            height: 13
                        })), n)))), d.createElement(v.Ya, {
                            padding: {
                                x: .5
                            }
                        }, d.createElement(v.Fb, {
                            borderTop: !0,
                            margin: {
                                x: 1
                            }
                        })), d.createElement(v.Ya, {
                            padding: {
                                x: 1,
                                y: 1
                            },
                            margin: {
                                x: .5
                            }
                        }, d.createElement(N, {
                            editRoomNameError: this.state.editRoomNameError,
                            editRoomTopicError: this.props.forActiveRoom ? void 0 : this.state.editRoomTopicError,
                            roomName: e,
                            updateRoomName: this.updateRoomName,
                            roomTopic: this.props.forActiveRoom ? void 0 : t,
                            updateRoomTopic: this.updateRoomTopic
                        })), d.createElement(v.Fb, {
                            margin: {
                                y: 1,
                                left: 1,
                                right: 3
                            },
                            padding: {
                                left: .5,
                                right: 5
                            }
                        }, this.getSaveButton()))
                    }, t.prototype.getPermissionsView = function() {
                        return d.createElement(v.Ya, null, d.createElement(v.Qa, null, d.createElement(v.Ya, {
                            display: v.X.Flex,
                            padding: {
                                y: .5
                            }
                        }, d.createElement(v.Va, {
                            type: v.Wa.Alpha,
                            onClick: this.setOptionsView
                        }, d.createElement(v.Fb, {
                            padding: {
                                y: .5
                            },
                            margin: {
                                left: 1
                            },
                            display: v.X.Flex
                        }, d.createElement(v.Fb, {
                            className: "room-details__close-edit",
                            color: v.O.Link,
                            margin: {
                                right: 1
                            }
                        }, d.createElement(v.tb, {
                            asset: v.ub.GlyphArrDown,
                            height: 13
                        })), Object(u.d)("Permissions", "RoomDetailsReturn"))))), d.createElement(v.Ya, {
                            padding: {
                                x: .5
                            }
                        }, d.createElement(v.Fb, {
                            borderTop: !0,
                            margin: {
                                x: 1
                            }
                        })), d.createElement(j.a, {
                            isPreviewable: this.props.data.room.isPreviewable,
                            minimumAllowedRole: this.props.data.room.minimumAllowedRole,
                            updatePermissions: this.updatePermissions
                        }), d.createElement(v.Fb, {
                            margin: {
                                y: 1,
                                left: 1
                            },
                            padding: {
                                left: .5
                            }
                        }, this.getSaveButton()))
                    }, t.prototype.getSaveButton = function() {
                        return d.createElement(v.z, {
                            onClick: this.saveUpdate,
                            state: this.state.isSaveButtonStateSuccess ? v.E.Success : v.E.Default,
                            type: this.state.isSaveButtonStateSuccess ? v.F.Text : v.F.Default
                        }, Object(u.d)("Save", "RoomDetails"))
                    }, t.prototype.getTopicField = function() {
                        var e, t = void 0 === this.state.updatedRoomTopic ? this.props.data.room.topic : this.state.updatedRoomTopic,
                            n = Object(u.d)("What do you want your community to talk about in this room?", "RoomDetails");
                        return e = this.state.isTopicFocused ? d.createElement(v.Tb, {
                            autoFocus: !0,
                            noResize: !0,
                            onChange: this.onRoomTopicChange,
                            value: t,
                            placeholder: n
                        }) : d.createElement(v.W, {
                            className: "room-details__topic-description",
                            color: v.O.Alt2,
                            italic: !t
                        }, t || n, d.createElement(v.U, {
                            onClick: this.focusTopic
                        }, d.createElement(v.Ya, {
                            padding: {
                                left: .5
                            },
                            className: "room-details__edit-topic"
                        }, Object(u.d)("Edit", "RoomDetails")))), d.createElement("div", null, e, this.state.editRoomTopicError && d.createElement(v.W, {
                            color: v.O.Error
                        }, this.state.editRoomTopicError), this.state.isTopicFocused && d.createElement(v.Ya, {
                            display: v.X.Flex,
                            justifyContent: v.Xa.End
                        }, !this.state.isSaveButtonStateSuccess && d.createElement(v.Ya, {
                            padding: {
                                top: .5
                            }
                        }, d.createElement(v.z, {
                            onClick: this.blurTopic,
                            type: v.F.Text
                        }, Object(u.d)("Cancel", "RoomDetails"))), d.createElement(v.Ya, {
                            padding: {
                                top: .5,
                                left: 1
                            }
                        }, this.getSaveButton())))
                    }, t = c.__decorate([Object(p.a)(D, {
                        options: function(e) {
                            return {
                                variables: {
                                    id: e.roomID
                                }
                            }
                        }
                    }), Object(p.a)(z, {
                        name: "updateRoom"
                    })], t)
                }(d.Component);
            var U = Object(o.connect)(function(e) {
                return {
                    sessionUser: Object(l.e)(e),
                    isLoggedIn: Object(l.f)(e)
                }
            }, function(e) {
                return Object(r.bindActionCreators)({
                    login: function() {
                        return Object(s.e)(i.a.ReportChannel)
                    },
                    onShowModal: a.d
                }, e)
            })(F);
            n.d(t, "a", function() {
                return U
            })
        },
        vcHY: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return a
            });
            var o = n("/7QA"),
                r = {
                    NAME_LENGTH_INVALID: function(e) {
                        var t = e.maxChars,
                            n = e.minChars;
                        return Object(o.d)("The name must be between {minChars} and {maxChars} characters.", {
                            minChars: n,
                            maxChars: t
                        }, "RoomErrorCodes")
                    },
                    SLOW_MODE_ENFORCEMENT_FAILED: function(e) {
                        var t = e.remainingDurationSeconds;
                        return Object(o.d)("This room is in slow mode and you are sending messages too quickly. You will be able to talk again in {remainingDurationSeconds} seconds.", {
                            remainingDurationSeconds: t
                        }, "RoomErrorCodes")
                    },
                    TOPIC_LENGTH_INVALID: function(e) {
                        var t = e.maxChars;
                        return Object(o.d)("The topic may not exceed {maxChars} characters.", {
                            maxChars: t
                        }, "RoomErrorCodes")
                    },
                    USER_CHAT_TIMED_OUT: function(e) {
                        var t = e.remainingDurationSeconds;
                        return Object(o.d)("You are timed out and cannot chat for {remainingDurationSeconds} seconds.", {
                            remainingDurationSeconds: t
                        }, "RoomErrorCodes")
                    }
                },
                i = {
                    AUTO_MOD_ENFORCEMENT_FAILED: function() {
                        return Object(o.d)("Your message contains inappropriate content.", "RoomErrorCodes")
                    },
                    EMOTE_ONLY_MODE_ENFORCEMENT_FAILED: function() {
                        return Object(o.d)("This Room is in emote-only mode and your message does not contain only emoticons.", "RoomErrorCodes")
                    },
                    NAME_CONTAINS_INVALID_CHARACTERS: function() {
                        return Object(o.d)("The name contains invalid characters.", "RoomErrorCodes")
                    },
                    NAME_NOT_UNIQUE: function() {
                        return Object(o.d)("There is already a room with this name.", "RoomErrorCodes")
                    },
                    NAME_INAPPROPRIATE: function() {
                        return Object(o.d)("The name contains inappropriate content.", "RoomErrorCodes")
                    },
                    R9K_MODE_ENFORCEMENT_FAILED: function() {
                        return Object(o.d)("This Room is in R9K mode and your message is not unique enough.", "RoomErrorCodes")
                    },
                    RATE_LIMIT_FAILED: function() {
                        return Object(o.d)("Your message was not sent because you are sending messages too quickly.", "RoomErrorCodes")
                    },
                    SPAM_ENFORCEMENT_FAILED: function() {
                        return Object(o.d)("This message has been flagged as spam.", "RoomErrorCodes")
                    },
                    TOPIC_INAPPROPRIATE: function() {
                        return Object(o.d)("The topic contains inappropriate content.", "RoomErrorCodes")
                    },
                    USER_SUSPENDED: function() {
                        return Object(o.d)("Your account has been suspended.", "RoomErrorCodes")
                    }
                };

            function a(e, t) {
                return e in i ? i[e]() : e in r && t ? r[e](t) : Object(o.d)("Error", "RoomErrorCodes")
            }
        },
        vznD: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "RoomDetails"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "id"
                            }
                        },
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "ID"
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
                                value: "room"
                            },
                            arguments: [{
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "id"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "id"
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
                                        value: "name"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "topic"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "isPreviewable"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "minimumAllowedRole"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "owner"
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
                                                        value: "isChannelMember"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }]
                                            }
                                        }]
                                    }
                                }]
                            }
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 134
                }
            };
            n.loc.source = {
                body: "query RoomDetails($id: ID!) {\nroom(id: $id) {\nid\nname\ntopic\nisPreviewable\nminimumAllowedRole\nowner {\nid\nself {\nisChannelMember\n}\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        y4Ne: function(e, t, n) {},
        zgDu: function(e, t, n) {},
        zmJd: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return i
            });
            var o = n("UJc8"),
                r = n("Ue10");

            function i(e, t) {
                return e.minimumAllowedRole === o.b.Everyone ? r.ub.Hash : t ? r.ub.Unlock : r.ub.Lock
            }
        }
    }
]);