(window.webpackJsonp = window.webpackJsonp || []).push([
    [207], {
        "+k6+": function(e, t, n) {
            "use strict";
            n.r(t);
            var r = n("mrSG"),
                o = n("q1tI"),
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
                    return r.__extends(t, e), t.prototype.componentDidUpdate = function() {
                        this.props.data.loading || this.props.data.error || this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        if (this.props.data.loading) return o.createElement(d.W, {
                            color: d.O.Alt,
                            "data-test-selector": "placeholder-text"
                        }, this.props.roomName);
                        if (this.props.data.error) return o.createElement(d.Ya, null);
                        var e = {
                            isPreviewable: this.props.data.room.isPreviewable,
                            minimumAllowedRole: this.props.data.room.minimumAllowedRole
                        };
                        return o.createElement(i.a, null, o.createElement("div", null, o.createElement(d.Fb, {
                            display: d.X.Flex,
                            alignItems: d.f.Center,
                            className: "active-room-button"
                        }, o.createElement(d.Ya, {
                            className: "active-room-button__states",
                            display: d.X.Flex
                        }, o.createElement(d.tb, {
                            height: 14,
                            asset: Object(c.a)(e, this.props.data.room.self.permissions.sendMessages)
                        })), o.createElement(d.W, {
                            color: d.O.Alt
                        }, this.props.data.room.name), o.createElement(d.Ya, {
                            className: "room-details__close-edit active-room-button__cch-dropdown"
                        }, o.createElement(d.tb, {
                            asset: d.ub.AngleRight,
                            type: d.vb.Alt,
                            height: 11
                        })))), o.createElement(d.u, {
                            direction: d.v.BottomLeft,
                            size: d.w.Medium
                        }, o.createElement(l.a, {
                            forActiveRoom: !0,
                            roomID: this.props.roomID
                        })))
                    }, t = r.__decorate([Object(s.b)("ActiveRoomButton"), Object(a.a)(u, {
                        options: function(e) {
                            return {
                                variables: {
                                    id: e.roomID
                                }
                            }
                        }
                    })], t)
                }(o.Component));
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
            var r = n("dAHa"),
                o = n("mrSG"),
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
                    return o.__extends(t, e), t.prototype.render = function() {
                        return i.createElement(u.Fb, {
                            className: "reporting-modal__container",
                            background: u.r.Base,
                            padding: {
                                x: 2,
                                y: 3
                            }
                        }, i.createElement(r.b, {
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
                return r.c
            }), n.d(t, !1, function() {
                return r.a
            }), n.d(t, !1, function() {}), n.d(t, !1, function() {
                return r.b
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
            var r = n("mrSG"),
                o = n("q1tI"),
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
                    return r.__extends(t, e), t.prototype.render = function() {
                        return o.createElement(s.Ya, null, o.createElement(s.Fb, {
                            padding: {
                                top: 1,
                                bottom: .5,
                                x: 1
                            },
                            margin: {
                                x: .5
                            }
                        }, o.createElement(s.W, {
                            type: s.Wb.Span
                        }, Object(i.d)("Who can chat in this room?", "RoomPermissionsToggle"))), o.createElement(s.Fb, {
                            padding: {
                                x: 1
                            },
                            margin: {
                                x: .5
                            },
                            display: s.X.Flex,
                            alignItems: s.f.Center
                        }, o.createElement(s.Qa, {
                            flexGrow: 1,
                            display: s.X.Flex,
                            alignItems: s.f.Center,
                            className: "room-permissions-toggle__role-name"
                        }, o.createElement("label", {
                            htmlFor: "room-permissions-toggle__mods-permission"
                        }, o.createElement(s.W, {
                            type: s.Wb.Strong,
                            color: s.O.Alt
                        }, Object(i.d)("Mods", "RoomPermissionsToggle")))), o.createElement(s.Yb, {
                            id: "room-permissions-toggle__mods-permission",
                            disabled: !0,
                            checked: !0,
                            "data-test-selector": "moderator-role"
                        })), o.createElement(s.Fb, {
                            padding: {
                                x: 1
                            },
                            margin: {
                                x: .5
                            },
                            display: s.X.Flex,
                            alignItems: s.f.Center
                        }, o.createElement(s.Qa, {
                            flexGrow: 1,
                            display: s.X.Flex,
                            alignItems: s.f.Center,
                            className: "room-permissions-toggle__role-name"
                        }, o.createElement("label", {
                            htmlFor: "room-permissions-toggle__subs-permission"
                        }, o.createElement(s.W, {
                            type: s.Wb.Strong,
                            color: s.O.Alt
                        }, Object(i.d)("Subs", "RoomPermissionsToggle")))), o.createElement(s.Yb, {
                            id: "room-permissions-toggle__subs-permission",
                            checked: this.state.minimumAllowedRole !== a.b.Moderator,
                            onChange: this.toggleSubRole,
                            "data-test-selector": "subscriber-role"
                        })), o.createElement(s.Fb, {
                            padding: {
                                x: 1
                            },
                            margin: {
                                x: .5
                            },
                            display: s.X.Flex,
                            alignItems: s.f.Center
                        }, o.createElement(s.Qa, {
                            flexGrow: 1,
                            display: s.X.Flex,
                            alignItems: s.f.Center,
                            className: "room-permissions-toggle__role-name"
                        }, o.createElement("label", {
                            htmlFor: "room-permissions-toggle__everyone-permission"
                        }, o.createElement(s.W, {
                            type: s.Wb.Strong,
                            color: s.O.Alt
                        }, Object(i.d)("Everyone", "RoomPermissionsToggle")))), o.createElement(s.Yb, {
                            id: "room-permissions-toggle__everyone-permission",
                            checked: this.state.minimumAllowedRole === a.b.Everyone,
                            onChange: this.toggleAllRole,
                            "data-test-selector": "everyone-role"
                        })), o.createElement(s.Ya, {
                            padding: {
                                x: .5
                            }
                        }, o.createElement(s.Fb, {
                            borderTop: !0,
                            margin: {
                                top: .5,
                                bottom: 1,
                                x: 1
                            }
                        })), o.createElement(s.Fb, {
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
                        }, o.createElement(s.Ja, {
                            gutterSize: s.Ka.None
                        }, o.createElement(s.P, {
                            cols: 8
                        }, o.createElement(s.W, null, Object(i.d)("Allow others to read chat but not send messages", "RoomPermissionsToggle"))), o.createElement(s.P, {
                            cols: 4
                        }, o.createElement(s.Ya, {
                            display: s.X.Flex,
                            fullHeight: !0,
                            justifyContent: s.Xa.Center,
                            flexDirection: s.Aa.Column,
                            alignContent: s.e.End,
                            alignItems: s.f.End
                        }, this.renderPreviewabilityToggle())))))
                    }, t.prototype.renderPreviewabilityToggle = function() {
                        var e = this.state.minimumAllowedRole !== a.b.Subscriber,
                            t = o.createElement(s.Yb, {
                                disabled: e,
                                checked: this.state.isPreviewable,
                                onChange: this.togglePreviewability,
                                "data-test-selector": "previewability-toggle"
                            });
                        return this.state.minimumAllowedRole === a.b.Moderator && (t = o.createElement(s.Zb, {
                            direction: s.bc.Left,
                            width: 100,
                            label: Object(i.d)("This room is only for moderators", "RoomPermissionsToggle")
                        }, t)), t
                    }, t
                }(o.Component));
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
        Oy4H: function(e, t, n) {},
        RQ6e: function(e, t, n) {
            "use strict";
            var r = n("mrSG"),
                o = n("TSYQ"),
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
                    return r.__extends(t, e), t.prototype.componentDidUpdate = function() {
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
                return r.__extends(t, e), t.prototype.render = function() {
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
                    var t = o({
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
            var r, o, i = n("mrSG"),
                a = n("q1tI"),
                s = n("/MKj"),
                l = n("fvjX"),
                c = n("/7QA"),
                d = n("yR8l"),
                u = n("BhFH"),
                p = n("iS14"),
                m = n("geRD"),
                h = n("f00E"),
                g = n("D7An"),
                v = n("DMoW"),
                b = n("2xye"),
                f = n("GnwI"),
                R = n("QVaV"),
                k = n("Ue10"),
                y = (n("MPK0"), "report-wizard-block"),
                E = "report-wizard-unblock",
                S = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            userBlocked: t.props.userBlocked || !1
                        }, t.renderBlock = function() {
                            return a.createElement(k.U, {
                                hoverUnderlineNone: !0,
                                onClick: t.handleBlock,
                                "data-test-selector": y
                            }, a.createElement(k.Ya, {
                                display: k.X.Flex,
                                alignItems: k.f.Center
                            }, a.createElement(k.tb, {
                                type: k.vb.Brand,
                                asset: k.ub.Ban
                            }), a.createElement(k.Ya, {
                                margin: {
                                    left: .5
                                }
                            }, Object(c.d)("Block {user}", {
                                user: t.displayName()
                            }, "ReportWizardBlockActions"))))
                        }, t.renderUnblock = function() {
                            return a.createElement(k.Ya, {
                                className: "reporting-wizard__block-actions",
                                display: k.X.Flex,
                                alignItems: k.f.Center
                            }, a.createElement(k.tb, {
                                type: k.vb.Success,
                                asset: k.ub.FollowCheck
                            }), a.createElement(k.Ya, {
                                margin: {
                                    right: 1
                                }
                            }, a.createElement(k.W, {
                                className: "block-user__success",
                                type: k.Wb.Span
                            }, Object(c.d)("{user} blocked", {
                                user: t.displayName()
                            }, "ReportWizardBlockActions"))), a.createElement(k.U, {
                                hoverUnderlineNone: !0,
                                onClick: t.handleUnblock,
                                "data-test-selector": E
                            }, a.createElement(k.Ya, {
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
                            t = Object(R.a)(this.props.targetUser.login, this.props.targetUser.displayName, !0);
                        return a.createElement(k.Fb, {
                            borderTop: !0,
                            padding: {
                                y: 1
                            },
                            margin: {
                                top: 1
                            }
                        }, a.createElement(k.Ya, null, Object(c.d)("Would you like to block {user}?", {
                            user: t
                        }, "ReportWizardBlockActions")), a.createElement(k.Fb, {
                            color: k.O.Alt2,
                            margin: {
                                y: 1
                            }
                        }, a.createElement(k.fc, {
                            baseFontSize: k.Ca.Size6
                        }, a.createElement("p", null, Object(c.d)("Blocking {user} will:", {
                            user: t
                        }, "ReportWizardBlockActions")), a.createElement("ul", null, a.createElement("li", null, Object(c.d)("Prevent them from sending you whispers", "ReportWizardBlockActions")), a.createElement("li", null, Object(c.d)("Prevent them from hosting you", "ReportWizardBlockActions")), a.createElement("li", null, Object(c.d)("Prevent them from adding you as a friend", "ReportWizardBlockActions")), a.createElement("li", null, Object(c.d)("Filter their messages out of chats you don’t moderate", "ReportWizardBlockActions"))))), a.createElement(k.Ya, {
                            margin: {
                                top: 1
                            }
                        }, e))
                    }, t
                }(a.Component);
            ! function(e) {
                e.BitsViolation = "bits_violation", e.ChatBanEvasion = "chat_ban_evasion", e.Cheating = "cheating", e.Gore = "gore", e.Harassment = "harassment", e.Harm = "harm", e.HatefulConduct = "hateful_conduct", e.Impersonation = "impersonation", e.Miscategorized = "miscategorized", e.OffensiveUsername = "offensive_username", e.Other = "other", e.Porn = "porn", e.Prohibited = "prohibited", e.SelfHarm = "selfharm", e.SexualContent = "sexual_content", e.SexualViolence = "sexual_violence", e.Spam = "spam", e.TosBanEvasion = "tos_ban_evasion", e.Underaged = "underaged"
            }(r || (r = {})),
            function(e) {
                e.Link = "link", e.MultipleChoice = "multiple choice", e.Text = "text", e.Textarea = "textarea"
            }(o || (o = {}));
            var T, O = {
                    generalFilter: function() {
                        return Object(c.d)("I don't think their content or behavior is allowed on Twitch", "ReportModalWizard")
                    },
                    me: function() {
                        return Object(c.d)("Me", "ReportModalWizard")
                    },
                    someoneElse: function() {
                        return Object(c.d)("Someone else", "ReportModalWizard")
                    },
                    sexuallyCoercive: function() {
                        return Object(c.d)("acting in a sexually coercive or inappropriate way", "ReportModalWizard")
                    },
                    abusiveViolence: function() {
                        return Object(c.d)("They're threatening violence or physical harm", "ReportModalWizard")
                    },
                    commitingViolence: function() {
                        return Object(c.d)("They're committing acts of violence or physical harm", "ReportModalWizard")
                    },
                    threatening: function() {
                        return Object(c.d)("threatening, harming, or endangering someone", "ReportModalWizard")
                    },
                    abusive: function() {
                        return Object(c.d)("being hateful, harassing, or abusive", "ReportModalWizard")
                    }
                },
                _ = {
                    input_description: {
                        getTitle: function() {
                            return Object(c.d)("Could you provide more detail about this issue? You may include links to videos, clips, and content outside Twitch.", "ReportModalWizard")
                        },
                        value: "description",
                        type: o.Textarea,
                        required: !0
                    },
                    input_link: {
                        getTitle: function() {
                            return Object(c.d)("If possible, please provide a link to show us where the issue occurred. Links that do not lead to the original source of the content may not be usable as evidence.", "ReportModalWizard")
                        },
                        rows: 2,
                        value: "external links",
                        type: o.Textarea
                    },
                    input_usernames: {
                        getTitle: function() {
                            return Object(c.d)("If you know the usernames of any other Twitch accounts that may be owned by this person, please list them in this space.", "ReportModalWizard")
                        },
                        value: "other usernames",
                        rows: 2,
                        type: o.Textarea
                    },
                    input_connection: {
                        getTitle: function() {
                            return Object(c.d)("Please describe how you connected the offsite content to this Twitch account.", "ReportModalWizard")
                        },
                        value: "offsite content connection",
                        type: o.Textarea
                    },
                    input_comments: {
                        getTitle: function() {
                            return Object(c.d)("If you have any other comments you would like to add, please do so here.", "ReportModalWizard")
                        },
                        value: "comments",
                        type: o.Textarea
                    },
                    input_identifyOwner: {
                        getTitle: function() {
                            return Object(c.d)("Please describe how you identified this person as the owner of this Twitch account.", "ReportModalWizard")
                        },
                        rows: 2,
                        value: "connect account owner",
                        type: o.Textarea
                    },
                    endBlurb_socialmedia: {
                        getTitle: function() {
                            return Object(c.d)("Please submit a report to the site or service where the incident occurred as well if you have not already done so.", "ReportModalWizard")
                        },
                        type: o.Text
                    },
                    endBlurb_threat: {
                        getTitle: function() {
                            return Object(c.d)("If you feel you are in immediate danger, please contact your local law enforcement.", "ReportModalWizard")
                        },
                        type: o.Text
                    },
                    endLink_selfharm: {
                        getTitle: function() {
                            return Object(c.d)("Learn more about mental health support", "ReportModalWizard")
                        },
                        value: "https://help.twitch.tv/customer/en/portal/articles/2904486-twitch-cares-mental-health-support-information",
                        type: o.Link
                    },
                    endLink_DMCA: {
                        getTitle: function() {
                            return Object(c.d)("View our DMCA Notification Guidelines", "ReportModalWizard")
                        },
                        value: "https://www.twitch.tv/p/legal/dmca-guidelines/",
                        type: o.Link
                    },
                    endLink_trademark: {
                        getTitle: function() {
                            return Object(c.d)("View our Trademark Policy", "ReportModalWizard")
                        },
                        value: "https://www.twitch.tv/p/legal/trademark-policy/",
                        type: o.Link
                    },
                    endLink_devAgreement: {
                        getTitle: function() {
                            return Object(c.d)("View our Developer Agreement", "ReportModalWizard")
                        },
                        value: "https://www.twitch.tv/p/legal/developer-agreement/",
                        type: o.Link
                    },
                    endLink_eventCoC: {
                        getTitle: function() {
                            return Object(c.d)("View our Events Code of Conduct", "ReportModalWizard")
                        },
                        value: "https://www.twitch.tv/p/legal/events-code-of-conduct",
                        type: o.Link
                    },
                    messaging_general: {
                        getTitle: O.generalFilter,
                        value: "general_messaging",
                        omitFromDescription: !0
                    },
                    profile_general: {
                        getTitle: O.generalFilter,
                        value: "general_profile",
                        omitFromDescription: !0
                    },
                    maliciousRaid: {
                        getTitle: function() {
                            return Object(c.d)("They're participating in a malicious raid", "ReportModalWizard")
                        },
                        value: "malicious raid",
                        reportReason: r.Harassment
                    },
                    violence: {
                        getTitle: function() {
                            return Object(c.d)("It contains threats, harm, or endangerment of someone", "ReportModalWizard")
                        },
                        value: "violence/threats",
                        reportReason: r.Harm
                    },
                    report_username: {
                        getTitle: function() {
                            return Object(c.d)("They're using an inappropriate or offensive username", "ReportModalWizard")
                        },
                        value: "inappropriate username",
                        reportReason: r.OffensiveUsername
                    },
                    report_emotes: {
                        getTitle: function() {
                            return Object(c.d)("The emotes are inappropriate or offensive", "ReportModalWizard")
                        },
                        value: "inappropriate emotes",
                        reportReason: r.Other
                    },
                    abusive: {
                        getTitle: function() {
                            return Object(c.d)("It's hateful, harassing, or abusive", "ReportModalWizard")
                        },
                        value: "abusive"
                    },
                    scam: {
                        getTitle: function() {
                            return Object(c.d)("It contains attempts to scam other community members", "ReportModalWizard")
                        },
                        value: "scam",
                        reportReason: r.Spam
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
                        reportReason: r.Impersonation
                    },
                    underage: {
                        getTitle: function() {
                            return Object(c.d)("They're underage (12 or younger)", "ReportModalWizard")
                        },
                        value: "underage",
                        reportReason: r.Underaged
                    },
                    report_ip: {
                        getTitle: function() {
                            return Object(c.d)("I think they're using copyrighted content, trademarks, or other intellectual property that's not theirs", "ReportModalWizard")
                        },
                        value: "intellectual property"
                    },
                    inappropriateContent: {
                        getTitle: function() {
                            return Object(c.d)("It's inappropriate or obscene", "ReportModalWizard")
                        },
                        value: "inappropriate content"
                    },
                    violateDevAgreement: {
                        getTitle: function() {
                            return Object(c.d)("I think they're violating Twitch's Developer Agreement", "ReportModalWizard")
                        },
                        value: "violating developer agreement"
                    },
                    revealPersonalInfo: {
                        getTitle: function() {
                            return Object(c.d)("They might have revealed someone's personal information", "ReportModalWizard")
                        },
                        value: "revealing personal info",
                        reportReason: r.Other
                    },
                    inappropriateBadge: {
                        getTitle: function() {
                            return Object(c.d)("Their emote or subscriber badge violates Twitch's Guidelines", "ReportModalWizard")
                        },
                        value: "emote/subscriber badge",
                        reportReason: r.Other
                    },
                    noModeration: {
                        getTitle: function() {
                            return Object(c.d)("They're not moderating their chat appropriately", "ReportModalWizard")
                        },
                        value: "not moderating chat",
                        reportReason: r.Other
                    },
                    inappropriateExtension: {
                        getTitle: function() {
                            return Object(c.d)("Their extension contains malicious or inappropriate content", "ReportModalWizard")
                        },
                        value: "inappropriate extension",
                        reportReason: r.Other
                    },
                    cheating: {
                        getTitle: function() {
                            return Object(c.d)("They're cheating in an online game", "ReportModalWizard")
                        },
                        value: "cheating",
                        reportReason: r.Cheating
                    },
                    bitsViolation: {
                        getTitle: function() {
                            return Object(c.d)("Their use of Bits goes against Twitch's Policy", "ReportModalWizard")
                        },
                        value: "bits violation",
                        reportReason: r.BitsViolation
                    },
                    video_labeling: {
                        getTitle: function() {
                            return Object(c.d)("Their content is labeled incorrectly", "ReportModalWizard")
                        },
                        value: "incorrect label",
                        reportReason: r.Miscategorized
                    },
                    video_inactive: {
                        getTitle: function() {
                            return Object(c.d)("The stream is inactive (sleeping/AFK)", "ReportModalWizard")
                        },
                        value: "inactive stream",
                        reportReason: r.Miscategorized
                    },
                    video_general: {
                        getTitle: O.generalFilter,
                        value: "general_video",
                        omitFromDescription: !0
                    },
                    hateSpeech: {
                        getTitle: function() {
                            return Object(c.d)("They're using hate speech, hateful symbols, or hateful media", "ReportModalWizard")
                        },
                        value: "hate speech",
                        reportReason: r.HatefulConduct
                    },
                    harassment: {
                        getTitle: function() {
                            return Object(c.d)("They're harassing or bullying someone", "ReportModalWizard")
                        },
                        value: "harassment",
                        reportReason: r.Harassment
                    },
                    abusiveViolence: {
                        getTitle: O.abusiveViolence,
                        value: "threatening violence",
                        reportReason: r.Harm
                    },
                    commitingViolence: {
                        getTitle: O.commitingViolence,
                        value: "committing violence",
                        reportReason: r.Harm
                    },
                    swatting: {
                        getTitle: function() {
                            return Object(c.d)("They're inciting or committing swatting or a DDOS attack", "ReportModalWizard")
                        },
                        value: "swatting/ddosing",
                        reportReason: r.Harassment
                    },
                    personalInfo: {
                        getTitle: function() {
                            return Object(c.d)("They're purposely revealing personal information", "ReportModalWizard")
                        },
                        value: "revealing personal info",
                        reportReason: r.Harassment
                    },
                    threat_me: {
                        getTitle: function() {
                            return Object(c.d)("At me", "ReportModalWizard")
                        },
                        value: "against me",
                        reportReason: r.Harm
                    },
                    threat_person: {
                        getTitle: function() {
                            return Object(c.d)("At someone else", "ReportModalWizard")
                        },
                        value: "against another person",
                        reportReason: r.Harm
                    },
                    threat_group: {
                        getTitle: function() {
                            return Object(c.d)("At a group of people", "ReportModalWizard")
                        },
                        value: "against group of people",
                        reportReason: r.Harm
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
                        reportReason: r.Prohibited
                    },
                    sexuallyViolent: {
                        getTitle: function() {
                            return Object(c.d)("Violent sexual conduct", "ReportModalWizard")
                        },
                        value: "sexually violent",
                        reportReason: r.SexualViolence
                    },
                    childAnimal: {
                        getTitle: function() {
                            return Object(c.d)("Sexual conduct involving a child or animal", "ReportModalWizard")
                        },
                        value: "sexual conduct; child or animal",
                        reportReason: r.SexualViolence
                    },
                    pornographic: {
                        getTitle: function() {
                            return Object(c.d)("Sexually explicit or pornographic content", "ReportModalWizard")
                        },
                        value: "pornographic",
                        reportReason: r.SexualContent
                    },
                    gory: {
                        getTitle: function() {
                            return Object(c.d)("Extreme violence or gore", "ReportModalWizard")
                        },
                        value: "gory",
                        reportReason: r.Gore
                    },
                    suggestive: {
                        getTitle: function() {
                            return Object(c.d)("Sexually suggestive content", "ReportModalWizard")
                        },
                        value: "sexually suggestive",
                        reportReason: r.SexualContent
                    },
                    nudity: {
                        getTitle: function() {
                            return Object(c.d)("Full or partial nudity", "ReportModalWizard")
                        },
                        value: "nudity",
                        reportReason: r.SexualContent
                    },
                    other: {
                        getTitle: function() {
                            return Object(c.d)("There's something else wrong with it...", "ReportModalWizard")
                        },
                        value: "other",
                        reportReason: r.Other
                    },
                    evasion: {
                        getTitle: function() {
                            return Object(c.d)("They were banned or suspended and are trying to get around it (ban evasion)", "ReportModalWizard")
                        },
                        value: "ban evasion"
                    },
                    evasion_sitewide: {
                        getTitle: function() {
                            return Object(c.d)("A sitewide ban from Twitch", "ReportModalWizard")
                        },
                        value: "sitewide ban",
                        reportReason: r.TosBanEvasion
                    },
                    evasion_chat: {
                        getTitle: function() {
                            return Object(c.d)("A chat ban from one or more channels", "ReportModalWizard")
                        },
                        value: "chat ban",
                        reportReason: r.ChatBanEvasion
                    },
                    evasion_messaging: {
                        getTitle: function() {
                            return Object(c.d)("A block from messaging me", "ReportModalWizard")
                        },
                        value: "messaging block",
                        reportReason: r.ChatBanEvasion
                    },
                    impersonation_me: {
                        getTitle: O.me,
                        value: "impersonating me",
                        reportReason: r.Impersonation
                    },
                    impersonation_brand: {
                        getTitle: function() {
                            return Object(c.d)("Someone I represent, or a brand/company I work for", "ReportModalWizard")
                        },
                        value: "impersonating brand",
                        reportReason: r.Impersonation
                    },
                    impersonation_other: {
                        getTitle: O.someoneElse,
                        value: "impersonating someone else",
                        reportReason: r.Impersonation
                    },
                    selfharm: {
                        getTitle: function() {
                            return Object(c.d)("I'm concerned for their wellbeing", "ReportModalWizard")
                        },
                        value: "selfharm",
                        reportReason: r.SelfHarm
                    },
                    chat: {
                        getTitle: function() {
                            return Object(c.d)("In a stream chat message", "ReportModalWizard")
                        },
                        value: "chat"
                    },
                    profile: {
                        getTitle: function() {
                            return Object(c.d)("In the profile content, extensions, or emotes", "ReportModalWizard")
                        },
                        value: "profile"
                    },
                    video: {
                        getTitle: function() {
                            return Object(c.d)("In a live stream, video, or clip", "ReportModalWizard")
                        },
                        value: "video"
                    },
                    room: {
                        getTitle: function(e) {
                            return Object(c.d)("In one of {username}'s rooms", {
                                username: e
                            }, "ReportModalWizard")
                        },
                        value: "room"
                    },
                    whisper: {
                        getTitle: function() {
                            return Object(c.d)("In a whisper (private message)", "ReportModalWizard")
                        },
                        value: "whisper",
                        reportContext: v.N.WHISPER_REPORT
                    },
                    username: {
                        getTitle: function() {
                            return Object(c.d)("In the username", "ReportModalWizard")
                        },
                        value: "username",
                        reportReason: r.OffensiveUsername
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
                            return Object(c.d)("inciting brigading or malicious raids", "ReportModalWizard")
                        },
                        reportReason: r.Harassment,
                        value: "brigading/raids"
                    },
                    external_threatening: {
                        getTitle: O.threatening,
                        value: "threatening"
                    },
                    external_harassment: {
                        getTitle: O.abusive,
                        value: "hateful/harassing"
                    },
                    external_abusiveViolence: {
                        getTitle: O.abusiveViolence,
                        value: "external site; threatening violence",
                        reportReason: r.Harm
                    },
                    external_commitingViolence: {
                        getTitle: O.commitingViolence,
                        value: "external site; committing violence",
                        reportReason: r.Harm
                    },
                    conduct_impersonation: {
                        getTitle: function() {
                            return Object(c.d)("impersonating someone", "ReportModalWizard")
                        },
                        value: "impersonation",
                        reportReason: r.Impersonation
                    },
                    spam: {
                        getTitle: function() {
                            return Object(c.d)("They're spamming or spreading malicious links", "ReportModalWizard")
                        },
                        value: "spam",
                        reportReason: r.Spam
                    },
                    spam_bot: {
                        getTitle: function() {
                            return Object(c.d)("I think this is a bot account", "ReportModalWizard")
                        },
                        value: "bot"
                    },
                    spam_scam: {
                        getTitle: function() {
                            return Object(c.d)("They're trying to scam other community members or sending malicious links", "ReportModalWizard")
                        },
                        value: "scam or malicious links"
                    },
                    spam_repeated: {
                        getTitle: function() {
                            return Object(c.d)("They're sending repeated messages (spam)", "ReportModalWizard")
                        },
                        value: "repeat messages"
                    }
                },
                C = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onChange = function(e) {
                            var n = e.target,
                                r = n.name,
                                o = n.value;
                            t.props.onChangeText(r, o)
                        }, t.onSelect = function(e) {
                            if (t.props.currentCard.items && e.currentTarget.parentElement) {
                                var n = Number(e.currentTarget.parentElement.getAttribute("data-a-index")),
                                    r = t.props.currentCard.items[n];
                                t.props.onChangeRadio(r)
                            }
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        var e = this.props.currentCard.getDescription ? a.createElement(k.Ya, {
                            padding: {
                                bottom: 1
                            }
                        }, this.props.currentCard.getDescription()) : null;
                        return a.createElement(k.Ya, {
                            className: "reporting-wizard-card"
                        }, e, a.createElement(k.Ea, {
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
                                case o.Text:
                                    return a.createElement(k.Ya, {
                                        key: n,
                                        padding: {
                                            bottom: 1
                                        }
                                    }, t.getTitle());
                                case o.Link:
                                    return a.createElement(k.Ya, {
                                        key: n,
                                        padding: {
                                            bottom: 1
                                        }
                                    }, a.createElement(k.U, {
                                        to: t.value,
                                        targetBlank: !0
                                    }, a.createElement(k.Ya, {
                                        display: k.X.Flex
                                    }, a.createElement(k.Ya, {
                                        display: k.X.Inline,
                                        padding: {
                                            right: .5
                                        }
                                    }, a.createElement(k.tb, {
                                        asset: k.ub.Document
                                    })), t.getTitle())));
                                case o.Textarea:
                                    var r = t.value ? e.props.userTextInputs[t.value] : void 0,
                                        i = t.required && (!r || !!r && 0 === r.trim().length);
                                    return a.createElement(k.Ya, {
                                        key: n,
                                        padding: {
                                            bottom: 1
                                        }
                                    }, a.createElement(k.Ea, {
                                        label: t.getTitle(),
                                        labelOptional: t.required ? "" : Object(c.d)("Optional", "ReportModalWizardCard")
                                    }, a.createElement(k.Tb, {
                                        onChange: e.onChange,
                                        rows: t.rows || 3,
                                        name: t.value,
                                        error: e.props.error && i,
                                        value: r,
                                        "data-test-selector": "report-wizard-textarea"
                                    })));
                                case o.MultipleChoice:
                                default:
                                    return a.createElement(k.Ya, {
                                        key: n,
                                        padding: {
                                            y: .5
                                        }
                                    }, a.createElement(k.qb, {
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
                w = n("RQ6e");
            ! function(e) {
                e.Confirm = "Confirm", e.MultipleChoice = "MultipleChoice", e.Info = "End Card"
            }(T || (T = {}));
            var M, N, j, x = {
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
                I = {
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
                    reportProfile: function(e) {
                        return Object(c.d)("Report {username}'s Profile Or Other Content", {
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
                    getTitle: I.thanks,
                    type: T.Info,
                    value: "end card"
                },
                W = {
                    socialMedia: i.__assign({}, D, {
                        items: [_.endBlurb_socialmedia]
                    }),
                    violence: i.__assign({}, D, {
                        items: [_.endBlurb_threat]
                    }),
                    legal: {
                        getTitle: I.thanksConcern,
                        getDescription: function() {
                            return Object(c.d)("To submit a claim or report a violation of this type, you will need to follow the steps listed on the relevant page below.", "ReportModalWizard")
                        },
                        items: [_.endLink_DMCA, _.endLink_trademark, _.endLink_devAgreement],
                        type: T.Info,
                        value: "ip end"
                    },
                    selfharm: {
                        getTitle: I.thanksConcern,
                        getDescription: function() {
                            return Object(c.d)("If you know the user personally, and you believe them to be in danger, please contact their local authorities immediately. The link below contains some general information that may be of use.", "ReportModalWizard")
                        },
                        items: [_.endLink_selfharm],
                        type: T.Info,
                        value: "selfharm end"
                    },
                    twitchEvent: {
                        getTitle: I.thanksConcern,
                        getDescription: function() {
                            return Object(c.d)("Please bring this concern to the attention of staff or security at the event if you have not already done so. More information is available at the link below.", "ReportModalWizard")
                        },
                        items: [_.endLink_eventCoC],
                        value: "twitch event end",
                        type: T.Info
                    }
                },
                A = {
                    getTitle: I.report,
                    getLabel: function() {
                        return Object(c.d)("Where is the problem?", "ReportModalWizard")
                    },
                    items: [_.video, _.whisper, _.chat, _.room, _.profile, _.username, _.report_other],
                    type: T.MultipleChoice,
                    value: "content type"
                },
                z = {
                    identifyUser: {
                        getTitle: I.reportVideo,
                        getLabel: x.identifyUser,
                        items: [_.video_streamer, _.video_someoneElse, _.video_chatSomeone],
                        type: T.MultipleChoice,
                        value: "video identify user"
                    },
                    content: {
                        getTitle: I.reportVideo,
                        getLabel: x.contentGeneral,
                        items: [_.revealPersonalInfo, _.video_labeling, _.video_inactive, _.video_general, _.report_ip, _.violateDevAgreement, _.selfharm],
                        type: T.MultipleChoice,
                        value: "video report reason"
                    },
                    general: {
                        getTitle: I.reportVideo,
                        getLabel: x.content,
                        items: [_.report_username, _.violence, _.abusive, _.cheating, _.scam, _.inappropriateContent, _.evasion, _.impersonation, _.underage, _.bitsViolation],
                        type: T.MultipleChoice,
                        value: "video general report reason"
                    }
                },
                F = {
                    content: {
                        getTitle: I.reportMessage,
                        getLabel: x.contentGeneral,
                        items: [_.revealPersonalInfo, _.evasion, _.spam, _.maliciousRaid, _.report_username, _.messaging_general, _.selfharm],
                        type: T.MultipleChoice,
                        value: "message report reason"
                    },
                    general: {
                        getTitle: I.reportMessage,
                        getLabel: x.content,
                        items: [_.report_emotes, _.violence, _.abusive, _.inappropriateContent, _.impersonation, _.underage, _.bitsViolation],
                        type: T.MultipleChoice,
                        value: "message general report reason"
                    }
                },
                U = i.__assign({}, F.content, {
                    getDescription: function() {
                        return Object(c.d)("Please note that we may review additional messages in this conversation to determine the context of your report.", "ReportModalWizard")
                    }
                }),
                P = {
                    content: {
                        getTitle: I.reportProfile,
                        getLabel: x.contentGeneral,
                        items: [_.revealPersonalInfo, _.inappropriateBadge, _.inappropriateExtension, _.noModeration, _.profile_general, _.report_ip, _.violateDevAgreement, _.selfharm],
                        type: T.MultipleChoice,
                        value: "profile report reason"
                    },
                    general: {
                        getTitle: I.reportProfile,
                        getLabel: x.content,
                        items: [_.report_username, _.violence, _.abusive, _.scam, _.inappropriateContent, _.evasion, _.impersonation, _.underage, _.bitsViolation],
                        type: T.MultipleChoice,
                        value: "profile general report reason"
                    }
                },
                V = {
                    getTitle: function(e) {
                        return Object(c.d)("Report {username}'s Room", {
                            username: e
                        }, "ReportModalWizard")
                    },
                    getLabel: x.identifyUser,
                    items: [_.report_channelOwner, _.report_member],
                    value: "room report user",
                    type: T.MultipleChoice
                },
                L = {
                    getTitle: I.tellUsMore,
                    items: [_.input_description],
                    type: T.Confirm,
                    value: "tell us more"
                },
                B = {
                    banEvasion: i.__assign({}, L, {
                        items: [_.input_usernames, _.input_description],
                        value: "ban evasion tell us more"
                    }),
                    socialMedia: i.__assign({}, L, {
                        items: [_.input_link, _.input_connection, _.input_description],
                        nextCard: W.socialMedia,
                        value: "social media tell us more"
                    })
                },
                Y = {
                    content: {
                        getTitle: I.reportAbusive,
                        getLabel: x.relevantStatements,
                        items: [_.hateSpeech, _.harassment, _.abusiveViolence, _.commitingViolence, _.swatting, _.personalInfo],
                        type: T.MultipleChoice,
                        value: "abuse type"
                    },
                    violence: {
                        getTitle: function(e) {
                            return Object(c.d)("Report {username} for Violence or Threats", {
                                username: e
                            }, "ReportModalWizard")
                        },
                        getLabel: function() {
                            return Object(c.d)("Are the threats or actions directed at you or someone else?", "ReportModalWizard")
                        },
                        items: [_.threat_me, _.threat_person, _.threat_group, _.threat_selfharm],
                        type: T.MultipleChoice,
                        value: "violence type"
                    }
                },
                H = {
                    identifyLocation: {
                        getTitle: function(e) {
                            return Object(c.d)("Report {username} for something else...", {
                                username: e
                            }, "ReportModalWizard")
                        },
                        getLabel: function() {
                            return Object(c.d)("Where did the problem happen?", "ReportModalWizard")
                        },
                        items: [_.location_onTwitch, _.location_anotherSite, _.location_TwitchEvent],
                        type: T.MultipleChoice,
                        value: "off-site conduct location"
                    },
                    externalSite: {
                        getTitle: function(e) {
                            return Object(c.d)("Report {username}'s Conduct on Another Site or Service", {
                                username: e
                            }, "ReportModalWizard")
                        },
                        getLabel: x.thisPersonIs,
                        getDescription: function() {
                            return Object(c.d)("Please note that incidents reported through this form must involve Twitch community members. If possible, please submit a report to the site or service where the incident occurred as well.", "ReportModalWizard")
                        },
                        items: [_.external_incitingRaids, _.external_threatening, _.external_harassment],
                        type: T.MultipleChoice,
                        nextCard: B.socialMedia,
                        value: "external site conduct"
                    },
                    external_violence: i.__assign({}, Y.violence, {
                        items: [_.threat_me, _.threat_person, _.threat_group],
                        nextCard: B.socialMedia
                    }),
                    external_abusive: i.__assign({}, Y.content, {
                        items: [_.hateSpeech, _.harassment, _.external_abusiveViolence, _.external_commitingViolence, _.swatting, _.personalInfo],
                        nextCard: B.socialMedia
                    })
                },
                q = {
                    getTitle: function(e) {
                        return Object(c.d)("Report {username}'s Spam or Malicious Links", {
                            username: e
                        }, "ReportModalWizard")
                    },
                    getLabel: x.contentGeneral,
                    items: [_.spam_bot, _.spam_scam, _.spam_repeated],
                    type: T.MultipleChoice,
                    value: "spam type"
                },
                G = {
                    getTitle: function(e) {
                        return Object(c.d)("Report {username} for Inappropriate Content", {
                            username: e
                        }, "ReportModalWizard")
                    },
                    getLabel: x.relevantStatements,
                    items: [_.inappropriate_game, _.gory, _.sexuallyViolent, _.childAnimal, _.pornographic, _.suggestive, _.nudity, _.other],
                    type: T.MultipleChoice,
                    value: "inappropriate content type"
                },
                X = {
                    getTitle: function(e) {
                        return Object(c.d)("Report {username} for Evading a Ban", {
                            username: e
                        }, "ReportModalWizard")
                    },
                    getLabel: function() {
                        return Object(c.d)("What kind of ban are they evading?", "ReportModalWizard")
                    },
                    value: "ban type",
                    items: [_.evasion_chat, _.evasion_sitewide, _.evasion_messaging],
                    type: T.MultipleChoice,
                    nextCard: B.banEvasion
                },
                Q = {
                    getTitle: function(e) {
                        return Object(c.d)("Report {username} for Impersonation", {
                            username: e
                        }, "ReportModalWizard")
                    },
                    getLabel: function() {
                        return Object(c.d)("Who is being impersonated?", "ReportModalWizard")
                    },
                    getDescription: function() {
                        return Object(c.d)("Parody, cosplay, and other portrayals without the intent to deceive or defraud are allowed under Twitch's Community Guidelines. If you would still like to submit a report, please continue.", "ReportModalWizard")
                    },
                    items: [_.impersonation_me, _.impersonation_brand, _.impersonation_other],
                    type: T.MultipleChoice,
                    value: "impersonation type"
                },
                $ = A,
                K = L,
                J = D,
                Z = {
                    video: z.identifyUser,
                    whisper: U,
                    chat: F.content,
                    profile: P.content,
                    room: V,
                    "somewhere else": H.identifyLocation,
                    streamer: z.content,
                    "someone else in video": z.content,
                    "someone in chat": F.content,
                    general_video: z.general,
                    general_messaging: F.general,
                    general_profile: P.general,
                    "channel owner": P.content,
                    "community member": F.content,
                    "on twitch": P.content,
                    "another site": H.externalSite,
                    "twitch event": W.twitchEvent,
                    "brigading/raids": B.socialMedia,
                    threatening: H.external_violence,
                    "hateful/harassing": H.external_abusive,
                    "external site; threatening violence": H.external_violence,
                    "external site; committing violence": H.external_violence,
                    "external site; scam": B.socialMedia,
                    "ban evasion": X,
                    spam: q,
                    hateful: Y.content,
                    impersonation: Q,
                    "violence/threats": Y.violence,
                    "threatening violence": Y.violence,
                    "committing violence": Y.violence,
                    abusive: Y.content,
                    "inappropriate content": G,
                    "intellectual property": W.legal,
                    "violating developer agreement": W.legal
                },
                ee = {
                    selfharm: W.selfharm,
                    harm: W.violence,
                    other: J
                },
                te = {
                    CHANNEL_FEED_POST_REPORT: P.content,
                    COMMUNITY_REPORT: P.content,
                    CHAT_REPORT: F.content,
                    CLIP_REPORT: z.content,
                    EVENT_REPORT: P.content,
                    EXTENSION_REPORT: P.content,
                    LIVE_UP_REPORT: P.content,
                    ROOM_REPORT: V,
                    WHISPER_REPORT: U,
                    VOD_COMMENT_REPORT: F.content
                },
                ne = "report-wizard-back",
                re = "report-wizard-close",
                oe = "report-wizard-next",
                ie = "report-wizard-submit",
                ae = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            currentCard: t.props.currentCard || te[t.props.reportContentType] || $,
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
                            return a.createElement(k.Ya, {
                                margin: {
                                    top: 1
                                }
                            }, a.createElement(k.W, null, Object(c.d)("We are going to ask you a few questions to help us investigate your report quickly and accurately.", "ReportModalWizard")))
                        }, t.renderButtons = function() {
                            var e = Object(c.d)("Close", "ReportModalWizard"),
                                n = t.handleClose,
                                r = re,
                                o = !1,
                                i = t.state.prevCards.length ? t.renderBack() : null;
                            switch (t.state.currentCard.type) {
                                case T.MultipleChoice:
                                    e = Object(c.d)("Next", "ReportModalWizard"), n = t.handleNext, r = oe, o = !t.state.currentSelection;
                                    break;
                                case T.Confirm:
                                    e = Object(c.d)("Submit Report", "ReportModalWizard"), n = t.handleSubmit, o = !t.state.userTextInput, r = ie
                            }
                            return a.createElement(k.Ya, null, i, a.createElement(k.z, {
                                onClick: n,
                                disabled: o,
                                "data-test-selector": r
                            }, a.createElement(k.Ya, {
                                padding: {
                                    x: 1
                                }
                            }, e)))
                        }, t.renderBack = function() {
                            return a.createElement(k.Ya, {
                                margin: {
                                    right: 1
                                },
                                display: k.X.InlineBlock
                            }, a.createElement(k.z, {
                                type: k.F.Hollow,
                                onClick: t.handleBack,
                                "data-test-selector": ne
                            }, a.createElement(k.Ya, {
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
                                return t.props.trackClose(j.Finish, t.state.currentCard.value)
                            }), t.props.onClose()
                        }, t.handleNext = function() {
                            if (t.state.currentSelection && t.state.currentSelection.value) {
                                var e = t.state.currentCard,
                                    n = t.state.prevCards.concat(e),
                                    r = t.state.prevSelections.concat(t.state.currentSelection),
                                    o = t.state.displacedSelections[t.state.displacedSelections.length - 1],
                                    i = t.state.currentSelection.differentTarget || t.state.targetUnknown,
                                    a = t.state.currentSelection.reportContext || t.state.reportContext,
                                    s = e.nextCard || K;
                                Z[t.state.currentSelection.value] && (s = Z[t.state.currentSelection.value]);
                                var l = t.state.currentSelection.reportReason || t.state.reportReason,
                                    c = s.type === T.Info;
                                t.setState({
                                    currentCard: s,
                                    reportReason: l,
                                    prevCards: c ? [] : n,
                                    prevSelections: r,
                                    targetUnknown: i,
                                    currentSelection: o || null,
                                    displacedSelections: t.state.displacedSelections.slice(0, -1),
                                    reportContext: a
                                }, function() {
                                    return t.trackNavigation(N.Next, e.value)
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
                                if (e.type !== o.Textarea || !e.required) return !1;
                                var n = t.state.userTextInput[e.value],
                                    r = n && 0 === n.trim().length;
                                return !n || r
                            }).length
                        }, t.handleSubmit = function() {
                            return i.__awaiter(t, void 0, void 0, function() {
                                var e, t, n, r, o = this;
                                return i.__generator(this, function(i) {
                                    switch (i.label) {
                                        case 0:
                                            return e = Object(c.d)("Additional information is required.", "ReportModalWizard"), this.requiredInputsNonEmpty() ? (t = this.state.reportReason || "other", n = this.createReportDescription(), [4, this.props.onSubmit(t, n, this.state.reportContext)]) : [3, 2];
                                        case 1:
                                            switch (i.sent(), this.props.submitStatus) {
                                                case w.a.FormError:
                                                    this.setState({
                                                        error: e
                                                    });
                                                    break;
                                                case w.a.Success:
                                                    r = J, ee[t] && (r = ee[t]), this.state.currentCard.nextCard && (r = this.state.currentCard.nextCard), this.setState({
                                                        currentCard: r,
                                                        prevCards: [],
                                                        prevSelections: [],
                                                        currentSelection: null,
                                                        displacedSelections: [],
                                                        userTextInput: {},
                                                        error: ""
                                                    }, function() {
                                                        return o.trackNavigation(N.Submit)
                                                    });
                                                    break;
                                                case w.a.UserError:
                                                    this.setState({
                                                        error: Object(c.d)("This account could not be reported. It may have already been suspended, or the owner may have deleted it.", "ReportModalWizard")
                                                    });
                                                    break;
                                                case w.a.MutationError:
                                                default:
                                                    this.setState({
                                                        error: Object(c.d)("Sorry, a network error occurred when submitting your report. Please try again later.", "ReportModalWizard")
                                                    })
                                            }
                                            return [3, 3];
                                        case 2:
                                            this.props.onError(w.a.FormError), this.setState({
                                                error: e
                                            }), i.label = 3;
                                        case 3:
                                            return [2]
                                    }
                                })
                            })
                        }, t.handleBack = function() {
                            return i.__awaiter(t, void 0, void 0, function() {
                                var e, t, n, r, o, a = this;
                                return i.__generator(this, function(i) {
                                    return e = this.state.currentCard, t = this.state.prevCards[this.state.prevCards.length - 1], n = this.state.prevSelections[this.state.prevSelections.length - 1], r = !n.differentTarget && this.state.targetUnknown, o = this.state.displacedSelections, this.state.currentSelection && (o = o.concat(this.state.currentSelection)), t && n && this.setState({
                                        currentCard: t,
                                        currentSelection: n,
                                        displacedSelections: o,
                                        prevCards: this.state.prevCards.slice(0, -1),
                                        prevSelections: this.state.prevSelections.slice(0, -1),
                                        error: "",
                                        targetUnknown: r
                                    }, function() {
                                        return a.trackNavigation(N.Back, e.value)
                                    }), [2]
                                })
                            })
                        }, t.handleTextInput = function(e, n) {
                            var r = t.state.userTextInput;
                            r[e] = n, t.setState({
                                userTextInput: r
                            })
                        }, t.handleSelection = function(e) {
                            if (t.state.currentCard.items && e !== t.state.currentSelection) {
                                var n = t.state.targetUnknown;
                                if (n) n = 0 === t.state.displacedSelections.filter(function(e) {
                                    return e.differentTarget
                                }).length;
                                var r = t.state.reportContext;
                                (t.state.displacedSelections.filter(function(e) {
                                    return e.reportContext
                                }).length || t.state.currentSelection && t.state.currentSelection.reportContext) && (r = t.props.reportContentType), t.setState({
                                    currentSelection: e,
                                    displacedSelections: [],
                                    userTextInput: {},
                                    targetUnknown: n,
                                    reportContext: r
                                })
                            }
                        }, t.trackNavigation = function(e, n) {
                            t.props.trackAction(e, n, t.state.currentCard.value)
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.componentWillUnmount = function() {
                        this.state.modalCloseTracked || this.props.trackClose(j.Close, this.state.currentCard.value)
                    }, t.prototype.render = function() {
                        var e = this.state.currentCard.type === T.Info && this.state.currentCard.blockPrompt ? a.createElement(S, {
                                targetUser: this.props.targetUser,
                                onBlock: this.props.onBlock,
                                onUnblock: this.props.onUnblock,
                                userBlocked: this.props.userBlocked
                            }) : null,
                            t = this.state.error ? a.createElement(k.Fb, {
                                fullWidth: !0,
                                margin: {
                                    bottom: 1
                                },
                                padding: 1,
                                className: "reporting__error-container"
                            }, this.state.error) : null,
                            n = this.state.prevCards.length || this.state.currentCard.type === T.Info ? null : this.renderPrimer();
                        return a.createElement(k.Fb, {
                            className: "reporting-wizard",
                            display: k.X.Flex,
                            margin: {
                                x: 1
                            },
                            flexDirection: k.Aa.Column,
                            fullHeight: !0,
                            "data-test-card-value": this.state.currentCard.value
                        }, t, a.createElement(k.W, {
                            bold: !0,
                            fontSize: k.Ca.Size4
                        }, this.getTitle()), n, a.createElement(k.Ya, {
                            margin: {
                                y: 1
                            }
                        }, a.createElement(C, {
                            currentCard: this.state.currentCard,
                            currentSelection: this.state.currentSelection,
                            targetUser: this.props.targetUser,
                            targetUserID: this.props.targetUser.id,
                            onChangeRadio: this.handleSelection,
                            onChangeText: this.handleTextInput,
                            userTextInputs: this.state.userTextInput,
                            error: this.props.submitStatus === w.a.FormError && !!this.state.error
                        }), e), this.renderButtons())
                    }, t
                }(a.Component),
                se = n("s8Ou"),
                le = n("0hI/");
            n.d(t, "c", function() {
                    return N
                }), n.d(t, "a", function() {
                    return j
                }), n.d(t, "b", function() {
                    return de
                }),
                function(e) {
                    e.Close = "close", e.Open = "open", e.Submit = "submit_report", e.ToggleSettings = "modal_settings"
                }(M || (M = {})),
                function(e) {
                    e.Back = "back", e.Close = "close", e.Open = "open", e.Next = "next", e.Submit = "submit_report", e.ToggleSettings = "modal_settings"
                }(N || (N = {})),
                function(e) {
                    e.Close = "close", e.Finish = "finish"
                }(j || (j = {}));
            var ce = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    n.handleSubmit = function(e, t, r) {
                        return i.__awaiter(n, void 0, void 0, function() {
                            var n, o, a, s, l = this;
                            return i.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        if (n = r === v.N.WHISPER_REPORT ? r : this.props.reportContext.contentType, o = v.N[n], null === (a = {
                                                description: t,
                                                reason: e,
                                                content: o,
                                                contentID: this.props.reportContext.contentID,
                                                extra: this.props.reportContext.extra,
                                                targetID: this.props.data.targetUser.id
                                            }).targetID) return this.setState({
                                            submitStatus: w.a.UserError
                                        }), [2];
                                        i.label = 1;
                                    case 1:
                                        return i.trys.push([1, 3, , 4]), [4, this.props.reportUser(Object(m.a)(a))];
                                    case 2:
                                        return i.sent(), this.setState({
                                            submitStatus: w.a.Success
                                        }, function() {
                                            l.state.showWizard || l.trackAction(M.Submit)
                                        }), [3, 4];
                                    case 3:
                                        return s = i.sent(), c.k.error(s, "ReportUser Mutation failed."), this.setState({
                                            submitStatus: w.a.MutationError
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
                        })
                    }, n.onUnblock = function() {
                        n.props.unblockUserMutation(n.props.data.targetUser.id, i.__assign({}, n.props.sessionUser, {
                            __typename: "User"
                        })), n.setState({
                            userBlocked: !1
                        })
                    }, n.trackOpen = function(e) {
                        n.state.openEventSent || (n.state.showWizard ? n.trackWizardAction(N.Open, void 0, e) : n.trackAction(M.Open), n.setState({
                            openEventSent: !0
                        }))
                    }, n.trackClose = function(e, t) {
                        n.state.closeEventSent || (n.state.showWizard ? n.trackWizardAction(N.Close, t, void 0, e) : n.trackAction(M.Close), n.setState({
                            closeEventSent: !0
                        }))
                    }, n.trackWizardAction = function(e, t, r, o) {
                        c.p.tracking.track(b.SpadeEventType.ReportWizardFlowAction, {
                            ui_context: n.props.reportContext.contentType,
                            target_user_id: n.props.reportContext.targetUserID,
                            report_sent: n.state.submitStatus === w.a.Success,
                            modal_type: "wizard_v1",
                            extra_user_id: n.props.reportContext.additionalTrackingID,
                            action: e,
                            close_type: o,
                            report_session_id: n.reportID,
                            current_step: t,
                            navigated_to: r
                        })
                    }, n.trackAction = function(e) {
                        c.p.tracking.track(b.SpadeEventType.ReportFlowAction, {
                            ui_context: n.props.reportContext.contentType,
                            target_user_id: n.props.reportContext.targetUserID,
                            report_sent: n.state.submitStatus === w.a.Success,
                            extra_user_id: n.props.reportContext.additionalTrackingID,
                            action: e,
                            report_session_id: n.reportID
                        })
                    }, n.reportID = Object(h.a)();
                    var r = c.p.experiments.getAssignment(g.b.NewReportingWizard);
                    return n.state = {
                        submitStatus: w.a.Unsubmitted,
                        showWizard: "yes" === r,
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
                    if (this.props.data.error) return a.createElement(k.Ya, {
                        margin: {
                            bottom: 1
                        }
                    }, a.createElement(k.W, {
                        fontSize: k.Ca.Size5
                    }, Object(c.d)("There was an unexpected error. Please refresh the page and try again", "ReportUser")));
                    if (this.props.data.loading) return a.createElement(k.jb, {
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
                        return this.state.showWizard ? this.props.data.loading ? a.createElement(k.ab, null) : a.createElement(ae, i.__assign({}, e, {
                            user: this.props.sessionUser,
                            onBlock: this.onBlock,
                            onUnblock: this.onUnblock,
                            targetUser: this.props.data.targetUser,
                            trackAction: this.trackWizardAction,
                            trackClose: this.trackClose,
                            userBlocked: this.userBlocked
                        })) : a.createElement(w.b, i.__assign({}, e, {
                            targetUser: this.props.data.targetUser
                        }))
                    }
                    return a.createElement(k.Ya, {
                        margin: {
                            bottom: 1
                        }
                    }, a.createElement(k.W, {
                        fontSize: k.Ca.Size5
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
            var de = Object(l.compose)(Object(d.a)(se, {
                name: "reportUser"
            }), Object(d.a)(le, {
                options: function(e) {
                    return {
                        variables: {
                            targetUserID: e.reportContext.targetUserID
                        }
                    }
                }
            }), Object(f.b)("ReportUser", {
                autoReportInteractive: !0
            }), Object(u.a)(), Object(p.a)(), Object(s.connect)(function(e) {
                return {
                    sessionUser: e.session.user
                }
            }, null))(ce)
        },
        drmE: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return o
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
            var r = /^([^\u0000-\u007F]|[a-z0-9_]|-)*$/,
                o = 25,
                i = 3,
                a = 100;

            function s(e) {
                return r.test(e)
            }

            function l(e) {
                return e.length > o
            }

            function c(e) {
                return e.length <= o && e.length >= i
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
            var r = n("/MKj"),
                o = n("fvjX"),
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
            var k = Object(r.connect)(null, function(e) {
                    return Object(o.bindActionCreators)({
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
                                var e, t, n, r;
                                return c.__generator(this, function(o) {
                                    switch (o.label) {
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
                                            return n = o.sent(), r = function(e) {
                                                return e.room.self.isMuted = n.data.updateRoomView.roomView.isMuted, e
                                            }, Object(m.e)(y, {
                                                id: this.props.roomID
                                            }, r), [2]
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
                D = n("drmE"),
                W = n("vznD"),
                A = (n("zgDu"), n("jhcA")),
                z = {
                    OPTIONS: "OPTIONS",
                    PERMISSIONS: "PERMISSIONS",
                    LABELS: "LABELS"
                },
                F = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            currentView: z.OPTIONS,
                            isSaveButtonStateSuccess: !1
                        }, t.updatePermissions = function(e) {
                            t.setState({
                                updatedPermissions: e,
                                isSaveButtonStateSuccess: !1
                            })
                        }, t.updateRoomName = function(e) {
                            var n;
                            if (e = e.toLowerCase(), Object(D.d)(e)) {
                                if (Object(D.f)(e)) {
                                    var r = {
                                        maxChars: D.a,
                                        minChars: D.c
                                    };
                                    n = Object(x.a)("NAME_LENGTH_INVALID", r)
                                }
                            } else n = Object(x.a)("NAME_CONTAINS_INVALID_CHARACTERS");
                            t.setState({
                                updatedRoomName: e,
                                editRoomNameError: n,
                                isSaveButtonStateSuccess: !1
                            })
                        }, t.updateRoomTopic = function(e) {
                            var n;
                            if (!Object(D.g)(e)) {
                                var r = {
                                    maxChars: D.b
                                };
                                n = Object(x.a)("TOPIC_LENGTH_INVALID", r)
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
                                currentView: z.OPTIONS,
                                isSaveButtonStateSuccess: !1,
                                updatedRoomName: void 0,
                                updatedRoomTopic: void 0,
                                updatedPermissions: void 0
                            })
                        }, t.setPermissionsView = function() {
                            t.setState({
                                currentView: z.PERMISSIONS,
                                isSaveButtonStateSuccess: !1
                            })
                        }, t.setLabelsView = function() {
                            t.setState({
                                currentView: z.LABELS,
                                isSaveButtonStateSuccess: !1
                            })
                        }, t.saveUpdate = function() {
                            if (void 0 !== t.state.updatedRoomName || void 0 !== t.state.updatedRoomTopic || void 0 !== t.state.updatedPermissions)
                                if (t.state.updatedRoomName && !Object(D.e)(t.state.updatedRoomName)) {
                                    var e = {
                                            maxChars: D.a,
                                            minChars: D.c
                                        },
                                        n = Object(x.a)("NAME_LENGTH_INVALID", e);
                                    t.setState({
                                        editRoomNameError: n
                                    })
                                } else if (t.state.updatedRoomTopic && !Object(D.g)(t.state.updatedRoomTopic)) {
                                e = {
                                    maxChars: D.b
                                }, n = Object(x.a)("TOPIC_LENGTH_INVALID", e);
                                t.setState({
                                    editRoomTopicError: n
                                })
                            } else {
                                var r = c.__assign({
                                    roomID: t.props.roomID,
                                    name: t.state.updatedRoomName,
                                    topic: t.state.updatedRoomTopic
                                }, t.state.updatedPermissions);
                                t.props.updateRoom(Object(m.a)(r)).then(function(e) {
                                    if (e.data.updateRoom.error) {
                                        var n = e.data.updateRoom.error,
                                            r = n.code,
                                            o = n.minLength,
                                            i = {
                                                maxChars: n.maxLength,
                                                minChars: o
                                            },
                                            a = Object(x.a)(r, i);
                                        r.includes("NAME") ? t.setState({
                                            editRoomNameError: a
                                        }) : r.includes("TOPIC") && t.setState({
                                            editRoomTopicError: a
                                        })
                                    } else {
                                        Object(m.e)(W, {
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
                            case z.OPTIONS:
                                e = this.getOptionsView();
                                break;
                            case z.PERMISSIONS:
                                e = this.getPermissionsView();
                                break;
                            case z.LABELS:
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
                    }, t = c.__decorate([Object(p.a)(W, {
                        options: function(e) {
                            return {
                                variables: {
                                    id: e.roomID
                                }
                            }
                        }
                    }), Object(p.a)(A, {
                        name: "updateRoom"
                    })], t)
                }(d.Component);
            var U = Object(r.connect)(function(e) {
                return {
                    sessionUser: Object(l.e)(e),
                    isLoggedIn: Object(l.f)(e)
                }
            }, function(e) {
                return Object(o.bindActionCreators)({
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
            var r = n("/7QA"),
                o = {
                    NAME_LENGTH_INVALID: function(e) {
                        var t = e.maxChars,
                            n = e.minChars;
                        return Object(r.d)("The name must be between {minChars} and {maxChars} characters.", {
                            minChars: n,
                            maxChars: t
                        }, "RoomErrorCodes")
                    },
                    SLOW_MODE_ENFORCEMENT_FAILED: function(e) {
                        var t = e.remainingDurationSeconds;
                        return Object(r.d)("This room is in slow mode and you are sending messages too quickly. You will be able to talk again in {remainingDurationSeconds} seconds.", {
                            remainingDurationSeconds: t
                        }, "RoomErrorCodes")
                    },
                    TOPIC_LENGTH_INVALID: function(e) {
                        var t = e.maxChars;
                        return Object(r.d)("The topic may not exceed {maxChars} characters.", {
                            maxChars: t
                        }, "RoomErrorCodes")
                    },
                    USER_CHAT_TIMED_OUT: function(e) {
                        var t = e.remainingDurationSeconds;
                        return Object(r.d)("You are timed out and cannot chat for {remainingDurationSeconds} seconds.", {
                            remainingDurationSeconds: t
                        }, "RoomErrorCodes")
                    }
                },
                i = {
                    AUTO_MOD_ENFORCEMENT_FAILED: function() {
                        return Object(r.d)("Your message contains inappropriate content.", "RoomErrorCodes")
                    },
                    EMOTE_ONLY_MODE_ENFORCEMENT_FAILED: function() {
                        return Object(r.d)("This Room is in emote-only mode and your message does not contain only emoticons.", "RoomErrorCodes")
                    },
                    NAME_CONTAINS_INVALID_CHARACTERS: function() {
                        return Object(r.d)("The name contains invalid characters.", "RoomErrorCodes")
                    },
                    NAME_NOT_UNIQUE: function() {
                        return Object(r.d)("There is already a room with this name.", "RoomErrorCodes")
                    },
                    NAME_INAPPROPRIATE: function() {
                        return Object(r.d)("The name contains inappropriate content.", "RoomErrorCodes")
                    },
                    R9K_MODE_ENFORCEMENT_FAILED: function() {
                        return Object(r.d)("This Room is in R9K mode and your message is not unique enough.", "RoomErrorCodes")
                    },
                    RATE_LIMIT_FAILED: function() {
                        return Object(r.d)("Your message was not sent because you are sending messages too quickly.", "RoomErrorCodes")
                    },
                    SPAM_ENFORCEMENT_FAILED: function() {
                        return Object(r.d)("This message has been flagged as spam.", "RoomErrorCodes")
                    },
                    TOPIC_INAPPROPRIATE: function() {
                        return Object(r.d)("The topic contains inappropriate content.", "RoomErrorCodes")
                    },
                    USER_SUSPENDED: function() {
                        return Object(r.d)("Your account has been suspended.", "RoomErrorCodes")
                    }
                };

            function a(e, t) {
                return e in i ? i[e]() : e in o && t ? o[e](t) : Object(r.d)("Error", "RoomErrorCodes")
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
            var r = n("UJc8"),
                o = n("Ue10");

            function i(e, t) {
                return e.minimumAllowedRole === r.b.Everyone ? o.ub.Hash : t ? o.ub.Unlock : o.ub.Lock
            }
        }
    }
]);