(window.webpackJsonp = window.webpackJsonp || []).push([
    [187], {
        "/HY+": function(e, t, n) {
            "use strict";
            var o = n("dAHa"),
                r = n("mrSG"),
                i = n("q1tI"),
                a = n("/MKj"),
                s = n("fvjX"),
                l = n("cZKs"),
                d = n("aCAx"),
                c = n("GnwI"),
                m = n("Ue10"),
                u = (n("Oy4H"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.handleClose = function(e, n) {
                            t.props.closeModal(), t.props.onClose && t.props.onClose(e, n)
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        return i.createElement(m.Bb, {
                            className: "reporting-modal__container",
                            background: m.r.Base,
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
            var p = Object(s.compose)(Object(c.b)("ReportUserModal"), Object(a.connect)(null, function(e) {
                return Object(s.bindActionCreators)({
                    closeModal: d.c
                }, e)
            }))(u);
            n.d(t, !1, function() {}), n.d(t, !1, function() {
                return o.c
            }), n.d(t, !1, function() {
                return o.a
            }), n.d(t, !1, function() {}), n.d(t, !1, function() {
                return o.b
            }), n.d(t, !1, function() {
                return u
            }), n.d(t, "a", function() {
                return p
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
                        return r.createElement(s.Xa, null, r.createElement(s.Bb, {
                            padding: {
                                top: 1,
                                bottom: .5,
                                x: 1
                            },
                            margin: {
                                x: .5
                            }
                        }, r.createElement(s.W, {
                            type: s.Rb.Span
                        }, Object(i.d)("Who can chat in this room?", "RoomPermissionsToggle"))), r.createElement(s.Bb, {
                            padding: {
                                x: 1
                            },
                            margin: {
                                x: .5
                            },
                            display: s.X.Flex,
                            alignItems: s.f.Center
                        }, r.createElement(s.Pa, {
                            flexGrow: 1,
                            display: s.X.Flex,
                            alignItems: s.f.Center,
                            className: "room-permissions-toggle__role-name"
                        }, r.createElement("label", {
                            htmlFor: "room-permissions-toggle__mods-permission"
                        }, r.createElement(s.W, {
                            type: s.Rb.Strong,
                            color: s.O.Alt
                        }, Object(i.d)("Mods", "RoomPermissionsToggle")))), r.createElement(s.Tb, {
                            id: "room-permissions-toggle__mods-permission",
                            disabled: !0,
                            checked: !0,
                            "data-test-selector": "moderator-role"
                        })), r.createElement(s.Bb, {
                            padding: {
                                x: 1
                            },
                            margin: {
                                x: .5
                            },
                            display: s.X.Flex,
                            alignItems: s.f.Center
                        }, r.createElement(s.Pa, {
                            flexGrow: 1,
                            display: s.X.Flex,
                            alignItems: s.f.Center,
                            className: "room-permissions-toggle__role-name"
                        }, r.createElement("label", {
                            htmlFor: "room-permissions-toggle__subs-permission"
                        }, r.createElement(s.W, {
                            type: s.Rb.Strong,
                            color: s.O.Alt
                        }, Object(i.d)("Subs", "RoomPermissionsToggle")))), r.createElement(s.Tb, {
                            id: "room-permissions-toggle__subs-permission",
                            checked: this.state.minimumAllowedRole !== a.b.Moderator,
                            onChange: this.toggleSubRole,
                            "data-test-selector": "subscriber-role"
                        })), r.createElement(s.Bb, {
                            padding: {
                                x: 1
                            },
                            margin: {
                                x: .5
                            },
                            display: s.X.Flex,
                            alignItems: s.f.Center
                        }, r.createElement(s.Pa, {
                            flexGrow: 1,
                            display: s.X.Flex,
                            alignItems: s.f.Center,
                            className: "room-permissions-toggle__role-name"
                        }, r.createElement("label", {
                            htmlFor: "room-permissions-toggle__everyone-permission"
                        }, r.createElement(s.W, {
                            type: s.Rb.Strong,
                            color: s.O.Alt
                        }, Object(i.d)("Everyone", "RoomPermissionsToggle")))), r.createElement(s.Tb, {
                            id: "room-permissions-toggle__everyone-permission",
                            checked: this.state.minimumAllowedRole === a.b.Everyone,
                            onChange: this.toggleAllRole,
                            "data-test-selector": "everyone-role"
                        })), r.createElement(s.Xa, {
                            padding: {
                                x: .5
                            }
                        }, r.createElement(s.Bb, {
                            borderTop: !0,
                            margin: {
                                top: .5,
                                bottom: 1,
                                x: 1
                            }
                        })), r.createElement(s.Bb, {
                            display: s.X.Flex,
                            justifyContent: s.Wa.Between,
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
                        }, r.createElement(s.Xa, {
                            display: s.X.Flex,
                            fullHeight: !0,
                            justifyContent: s.Wa.Center,
                            flexDirection: s.Aa.Column,
                            alignContent: s.e.End,
                            alignItems: s.f.End
                        }, this.renderPreviewabilityToggle())))))
                    }, t.prototype.renderPreviewabilityToggle = function() {
                        var e = this.state.minimumAllowedRole !== a.b.Subscriber,
                            t = r.createElement(s.Tb, {
                                disabled: e,
                                checked: this.state.isPreviewable,
                                onChange: this.togglePreviewability,
                                "data-test-selector": "previewability-toggle"
                            });
                        return this.state.minimumAllowedRole === a.b.Moderator && (t = r.createElement(s.Ub, {
                            direction: s.Wb.Left,
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
        "2jz6": function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "mutation",
                    name: {
                        kind: "Name",
                        value: "LeaveRoomsPrompt_LeaveRooms"
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
                                    value: "LeaveChannelRoomsInput"
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
                                value: "leaveChannelRooms"
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
                                        value: "channel"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
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
                    end: 147
                }
            };
            n.loc.source = {
                body: "mutation LeaveRoomsPrompt_LeaveRooms($input: LeaveChannelRoomsInput!) {\nleaveChannelRooms(input: $input) {\nchannel {\nself {\nisChannelMember\n}\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        "32N0": function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "mutation",
                    name: {
                        kind: "Name",
                        value: "JoinRoomsButton_JoinRooms"
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
                                    value: "JoinChannelRoomsInput"
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
                                value: "joinChannelRooms"
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
                                        value: "channel"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
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
                    end: 143
                }
            };
            n.loc.source = {
                body: "mutation JoinRoomsButton_JoinRooms($input: JoinChannelRoomsInput!) {\njoinChannelRooms(input: $input) {\nchannel {\nself {\nisChannelMember\n}\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        "4qQ0": function(e, t, n) {
            "use strict";
            var o, r;
            n.d(t, "a", function() {
                    return o
                }), n.d(t, "b", function() {
                    return r
                }),
                function(e) {
                    e.ChannelFeedComment = "CHANNEL_FEED_COMMENT_REPORT", e.ChannelFeedPost = "CHANNEL_FEED_POST_REPORT", e.Chat = "CHAT_REPORT", e.Clip = "CLIP_REPORT", e.Collection = "COLLECTION_REPORT", e.Event = "EVENT_REPORT", e.Extension = "EXTENSION_REPORT", e.LiveUp = "LIVE_UP_REPORT", e.Raid = "RAID_REPORT", e.Room = "ROOM_REPORT", e.StreamUp = "STREAM_UP_REPORT", e.User = "USER_REPORT", e.VideoChatMessage = "VOD_COMMENT_REPORT", e.Vod = "VOD_REPORT", e.Whisper = "WHISPER_REPORT"
                }(o || (o = {})),
                function(e) {
                    e.BitsViolation = "bits_violation", e.ChatBanEvasion = "chat_ban_evasion", e.Cheating = "cheating", e.Gore = "gore", e.Harassment = "harassment", e.Harm = "harm", e.HatefulConduct = "hateful_conduct", e.Impersonation = "impersonation", e.Miscategorized = "miscategorized", e.OffensiveUsername = "offensive_username", e.Other = "other", e.Porn = "porn", e.Prohibited = "prohibited", e.SelfHarm = "selfharm", e.SexualContent = "sexual_content", e.SexualViolence = "sexual_violence", e.Spam = "spam", e.TosBanEvasion = "tos_ban_evasion", e.Underaged = "underaged"
                }(r || (r = {}))
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
        B1bA: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "RoomsMemberOptions"
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
                }],
                loc: {
                    start: 0,
                    end: 84
                }
            };
            n.loc.source = {
                body: "query RoomsMemberOptions($id: ID!) {\nuser(id: $id) {\nid\nself {\nisChannelMember\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
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
        Hxgj: function(e, t, n) {},
        JYHY: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "mutation",
                    name: {
                        kind: "Name",
                        value: "CreateRoomButton_CreateRoom"
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
                                    value: "CreateRoomInput"
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
                                value: "createRoom"
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
                                                value: "minLength"
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
                                        }]
                                    }
                                }]
                            }
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 131
                }
            };
            n.loc.source = {
                body: "mutation CreateRoomButton_CreateRoom($input: CreateRoomInput!) {\ncreateRoom(input: $input) {\nerror {\ncode\nminLength\nmaxLength\n}\n}\n}",
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
            var o = n("mrSG"),
                r = n("TSYQ"),
                i = n("q1tI"),
                a = n("/7QA"),
                s = n("fvjX"),
                l = n("yR8l"),
                d = n("GnwI");
            var c = n("Ue10"),
                m = n("gIsd"),
                u = function(e) {
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
                        return i.createElement(c.Xa, {
                            margin: {
                                bottom: 2
                            }
                        }, i.createElement(c.Ea, {
                            id: "reporting-modal__select",
                            label: Object(a.d)("Select Reason (required)", "ReportUserModal")
                        }, i.createElement(c.xb, {
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
                p = Object(s.compose)(Object(l.a)(m, {
                    options: function(e) {
                        return {
                            variables: {
                                content: e.reportContentType
                            }
                        }
                    }
                }), Object(d.b)("ReportReasonSelect"))(u);
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
                    return i.createElement(c.Xa, {
                        display: c.X.Flex,
                        flexDirection: c.Aa.Column,
                        alignItems: c.f.Center,
                        justifyContent: c.Wa.Center
                    }, this.renderStatusMessage(), this.renderBody())
                }, t.prototype.renderBody = function() {
                    return this.props.submitStatus === h.Success ? i.createElement("div", null, i.createElement(c.z, {
                        onClick: this.props.onClose
                    }, i.createElement(c.Xa, {
                        padding: {
                            x: 2
                        }
                    }, Object(a.d)("Close", "ReportUser")))) : i.createElement("div", null, i.createElement(c.Xa, {
                        "data-test-selector": "reporting.title",
                        margin: {
                            bottom: 1
                        },
                        "data-a-target": "reporting-channel-name"
                    }, i.createElement(c.W, {
                        type: c.Rb.H4
                    }, this.props.title), i.createElement(c.Bb, {
                        color: c.O.Alt2,
                        margin: {
                            top: 1
                        }
                    }, this.headerMessage)), i.createElement("form", null, i.createElement(c.Bb, {
                        borderTop: !0,
                        borderBottom: !0,
                        margin: {
                            y: 2
                        },
                        padding: {
                            y: 2
                        }
                    }, i.createElement(p, {
                        reportContentType: this.props.reportContentType,
                        onChange: this.handleReasonChange
                    }), i.createElement(c.Ea, {
                        id: "reporting__text-area",
                        label: Object(a.d)("Description (required)", "ReportUser")
                    }, i.createElement(c.Ob, {
                        defaultValue: this.props.defaultDescription,
                        onChange: this.handleTextAreaChange
                    }))), i.createElement(c.Bb, {
                        display: c.X.Flex,
                        justifyContent: c.Wa.Center
                    }, i.createElement(c.z, {
                        onClick: this.handleSubmit
                    }, i.createElement(c.Xa, {
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
                    return i.createElement(c.Bb, {
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
        TZHj: function(e, t, n) {},
        "U+nV": function(e, t, n) {},
        US3n: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "JoinRoomsButton"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "channelID"
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
                                value: "channel"
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
                                        value: "channelID"
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
                                        value: "displayName"
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
                                                value: "banStatus"
                                            },
                                            arguments: [],
                                            directives: [],
                                            selectionSet: {
                                                kind: "SelectionSet",
                                                selections: [{
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "isPermanent"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }]
                                            }
                                        }, {
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
                }],
                loc: {
                    start: 0,
                    end: 142
                }
            };
            n.loc.source = {
                body: "query JoinRoomsButton($channelID: ID!) {\nchannel: user(id: $channelID) {\nid\ndisplayName\nself {\nbanStatus {\nisPermanent\n}\nisChannelMember\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        ZwP8: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "RoomPicker"
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
                    }, {
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "isBroadcaster"
                            }
                        },
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "Boolean"
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
                                        value: "displayName"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "maxAllowedChannelRooms"
                                    },
                                    arguments: [],
                                    directives: [{
                                        kind: "Directive",
                                        name: {
                                            kind: "Name",
                                            value: "include"
                                        },
                                        arguments: [{
                                            kind: "Argument",
                                            name: {
                                                kind: "Name",
                                                value: "if"
                                            },
                                            value: {
                                                kind: "Variable",
                                                name: {
                                                    kind: "Name",
                                                    value: "isBroadcaster"
                                                }
                                            }
                                        }]
                                    }]
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "channelRooms"
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
                                                value: "id"
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
                                                        value: "isArchived"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "isMuted"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "isUnread"
                                                    },
                                                    arguments: [],
                                                    directives: []
                                                }, {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "unreadMentionCount"
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
                                                value: "isChannelMember"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "isModerator"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "subscriptionBenefit"
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
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "subscriptionProducts"
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
                    end: 353
                }
            };
            n.loc.source = {
                body: "query RoomPicker ($id: ID! $isBroadcaster: Boolean!) {\nuser(id: $id) {\nid\ndisplayName\nmaxAllowedChannelRooms @include(if: $isBroadcaster)\nchannelRooms {\nname\nid\ntopic\nisPreviewable\nminimumAllowedRole\nself {\nisArchived\nisMuted\nisUnread\nunreadMentionCount\n}\n}\nself {\nisChannelMember\nisModerator\nsubscriptionBenefit {\nid\n}\n}\nsubscriptionProducts {\nid\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        "cs/o": function(e, t, n) {
            "use strict";
            n.r(t);
            var o = n("/MKj"),
                r = n("kRBY"),
                i = n("mrSG"),
                a = n("q1tI"),
                s = n("/7QA"),
                l = n("jHfU"),
                d = n.n(l),
                c = n("yR8l"),
                m = n("GnwI"),
                u = n("oJmH"),
                p = n("geRD"),
                h = n("Ue10"),
                g = n("US3n"),
                v = n("32N0"),
                b = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.handleClick = function() {
                            var e = i.__assign({}, Object(p.a)({
                                channelID: t.props.channelID
                            }), {
                                optimisticResponse: {
                                    joinChannelRooms: {
                                        __typename: "JoinChannelRoomsPayload",
                                        channel: {
                                            self: {
                                                isChannelMember: !0,
                                                __typename: "UserSelfConnection"
                                            },
                                            __typename: "User"
                                        }
                                    }
                                }
                            });
                            t.props.joinRooms(e).then(function(e) {
                                Object(p.e)(g, {
                                    channelID: t.props.channelID,
                                    userID: t.props.sessionUser && t.props.sessionUser.id
                                }, function(t) {
                                    return t.channel.self.isChannelMember = e.data.joinChannelRooms.channel.self.isChannelMember, t
                                })
                            })
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        return this.shouldRender() ? a.createElement(h.Xa, null, this.getButtonContent(), this.renderBanText()) : null
                    }, t.prototype.shouldRender = function() {
                        return this.props.data && !this.props.data.error && this.props.data.channel && this.props.sessionUser && this.props.sessionUser.id.toString() !== this.props.channelID && !this.props.data.channel.self.isChannelMember
                    }, t.prototype.getButtonContent = function() {
                        var e = this.props.data;
                        if (e && !e.loading) {
                            var t = e.channel,
                                n = t.displayName,
                                o = t.self,
                                r = Object(s.d)("Join {displayName}'s Rooms", {
                                    displayName: n
                                }, "JoinRoomsButton");
                            return a.createElement(h.z, {
                                "data-test-selector": "join-rooms-button",
                                disabled: !!(o && o.banStatus && o.banStatus.isPermanent),
                                onClick: this.handleClick
                            }, r)
                        }
                        if (e && e.loading) return a.createElement(h.gb, {
                            width: 160,
                            height: 30
                        })
                    }, t.prototype.renderBanText = function() {
                        var e = this.props.data;
                        if (e && !e.loading) {
                            var t = e.channel.self;
                            if (t && t.banStatus && t.banStatus.isPermanent) return a.createElement(h.Xa, {
                                padding: {
                                    top: .5
                                }
                            }, a.createElement(h.W, {
                                "data-test-selector": "ban-status-text",
                                color: h.O.Error
                            }, Object(s.d)("You are banned and can't join Rooms", "JoinRoomsButton")))
                        }
                        return null
                    }, t
                }(a.Component),
                f = Object(u.compose)(Object(c.a)(v, {
                    name: "joinRooms"
                }), Object(c.a)(g, {
                    options: function(e) {
                        return {
                            variables: {
                                channelID: e.channelID
                            }
                        }
                    },
                    skip: function(e) {
                        return !e.sessionUser
                    }
                }), Object(m.b)("JoinRoomsButton"))(b);
            var k, R = Object(o.connect)(function(e) {
                    return {
                        sessionUser: Object(r.e)(e)
                    }
                })(f),
                y = n("eJ65"),
                E = n("vcHY"),
                S = n("UJc8");
            ! function(e) {
                e.Moderator = "moderator", e.Subscriber = "subscriber"
            }(k || (k = {}));
            var C = function(e) {
                    return s.m.get("roomUpsellHistory", {})[e] || !1
                },
                O = function(e) {
                    var t;
                    s.m.set("roomUpsellHistory", i.__assign({}, s.m.get("roomUpsellHistory", {}), ((t = {})[e] = !0, t)))
                },
                N = n("drmE"),
                T = n("JYHY"),
                _ = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.createRoom = function() {
                            return i.__awaiter(t, void 0, void 0, function() {
                                var e, t, n, o, r, a, s, l, d;
                                return i.__generator(this, function(i) {
                                    switch (i.label) {
                                        case 0:
                                            return Object(N.e)(this.props.roomName) ? [4, this.props.createRoom(Object(p.a)({
                                                name: this.props.roomName,
                                                topic: this.props.roomTopic,
                                                isPreviewable: this.props.isRoomPreviewable,
                                                minimumAllowedRole: this.props.roomMinimumAllowedRole
                                            }))] : [3, 2];
                                        case 1:
                                            if (!(e = i.sent()).data.createRoom.error) switch (this.props.roomMinimumAllowedRole) {
                                                case S.b.Subscriber:
                                                    O(k.Subscriber);
                                                    break;
                                                case S.b.Moderator:
                                                    O(k.Moderator)
                                            }
                                            return this.props.onCreateHandler && (d = void 0, e.data.createRoom.error && (t = e.data.createRoom.error, n = t.code, o = t.minLength, r = t.maxLength, a = r, s = o, d = Object(E.a)(n, {
                                                maxChars: a,
                                                minChars: s
                                            })), this.props.onCreateHandler(d)), [3, 3];
                                        case 2:
                                            this.props.onCreateHandler && (l = {
                                                maxChars: N.a,
                                                minChars: N.c
                                            }, d = Object(E.a)("NAME_LENGTH_INVALID", l), this.props.onCreateHandler(d)), i.label = 3;
                                        case 3:
                                            return [2]
                                    }
                                })
                            })
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        var e = this.props.isPrimaryCTA ? h.F.Default : h.F.Hollow;
                        return a.createElement(h.z, {
                            onClick: this.createRoom,
                            type: e,
                            "data-test-selector": "create-room-button",
                            "data-a-target": "create-room-button"
                        }, this.getButtonText())
                    }, t.prototype.getButtonText = function() {
                        return Object(s.d)("Create", "CreateRoomButton")
                    }, t
                }(a.Component),
                w = Object(u.compose)(Object(c.a)(T, {
                    name: "createRoom"
                }))(_),
                M = n("2j4q"),
                j = n("zmJd"),
                x = (n("Hxgj"), {
                    align: h.Vb.Right,
                    direction: h.Wb.Top,
                    label: "",
                    offsetX: "-2%"
                }),
                D = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.onCreateHandler = function(e) {
                            e ? n.setState({
                                roomCreationError: e
                            }) : n.props.onCloseRoomCreator()
                        }, n.onRoomNameChange = function(e) {
                            var t, o = e.target.value.toLowerCase();
                            if (Object(N.d)(o)) {
                                if (Object(N.f)(o)) {
                                    var r = {
                                        maxChars: N.a,
                                        minChars: N.c
                                    };
                                    t = Object(E.a)("NAME_LENGTH_INVALID", r)
                                }
                            } else t = Object(E.a)("NAME_CONTAINS_INVALID_CHARACTERS");
                            n.setState({
                                roomName: o,
                                roomCreationError: t
                            })
                        }, n.updatePermissions = function(e) {
                            n.setState({
                                isRoomPreviewable: e.isPreviewable,
                                roomMinimumAllowedRole: e.minimumAllowedRole
                            })
                        }, n.state = {
                            roomName: t.roomName || "",
                            roomTopic: "",
                            isRoomPreviewable: !0,
                            roomMinimumAllowedRole: S.b.Everyone
                        }, n
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        var e = S.a[this.state.roomMinimumAllowedRole];
                        x.label = Object(s.d)("Chat Permission: {permissionRole}", {
                            permissionRole: e
                        }, "RoomCreator");
                        var t = {
                            isPreviewable: this.state.isRoomPreviewable,
                            minimumAllowedRole: this.state.roomMinimumAllowedRole
                        };
                        return a.createElement(h.Xa, {
                            className: "room-creator",
                            padding: {
                                y: 1,
                                x: 2
                            }
                        }, a.createElement(h.Xa, null, a.createElement(h.Xa, {
                            position: h.hb.Relative
                        }, a.createElement(h.Ra, {
                            autoFocus: !0,
                            "data-test-selector": "room-creator-input",
                            error: !!this.state.roomCreationError,
                            icon: Object(j.a)(t, !0),
                            type: h.Ta.Text,
                            value: this.state.roomName,
                            onChange: this.onRoomNameChange,
                            maxLength: 26,
                            placeholder: Object(s.d)("Enter Room name here", "RoomCreator")
                        }), this.renderRoomCreationError(), a.createElement(h.Xa, {
                            position: h.hb.Absolute,
                            attachRight: !0,
                            attachTop: !0,
                            display: h.X.Flex,
                            className: "room-creator__permissions"
                        }, a.createElement(h.Bb, {
                            display: h.X.Flex,
                            alignItems: h.f.Center,
                            padding: {
                                right: 1
                            }
                        }, a.createElement(y.a, {
                            tooltipProps: x
                        }, a.createElement(h.U, null, a.createElement(h.Xa, {
                            display: h.X.Flex
                        }, a.createElement(h.Xa, {
                            padding: {
                                right: .5
                            }
                        }, Object(s.d)("{permissionRole}", {
                            permissionRole: e
                        }, "RoomCreator")), a.createElement(h.qb, {
                            asset: h.rb.GlyphArrDown
                        }))), a.createElement(h.u, {
                            direction: h.v.BottomRight,
                            size: h.w.Small,
                            noTail: !0,
                            offsetY: "0.5rem",
                            offsetX: "-1rem"
                        }, a.createElement(M.a, {
                            updatePermissions: this.updatePermissions
                        })))))), a.createElement(h.Xa, {
                            display: h.X.Flex,
                            margin: {
                                top: 1
                            },
                            justifyContent: h.Wa.End
                        }, a.createElement(h.Xa, {
                            padding: {
                                right: 1
                            }
                        }, a.createElement(h.z, {
                            onClick: this.props.onCloseRoomCreator,
                            type: h.F.Text
                        }, Object(s.d)("Cancel", "RoomCreator"))), a.createElement(w, {
                            isPrimaryCTA: !0,
                            roomName: this.state.roomName,
                            roomTopic: this.state.roomTopic,
                            isRoomPreviewable: this.state.isRoomPreviewable,
                            roomMinimumAllowedRole: this.state.roomMinimumAllowedRole,
                            onCreateHandler: this.onCreateHandler,
                            "data-test-selector": "create-room-button"
                        })), a.createElement(h.Bb, {
                            borderTop: !0,
                            fullWidth: !0,
                            margin: {
                                y: 1
                            }
                        })))
                    }, t.prototype.renderRoomCreationError = function() {
                        if (this.state.roomCreationError) return a.createElement(h.W, {
                            color: h.O.Error,
                            "data-test-selector": "room-creation-error-text"
                        }, this.state.roomCreationError)
                    }, t
                }(a.Component),
                I = n("u5aL"),
                A = n("uQjW"),
                U = n("eO4L"),
                P = (n("ep4/"), function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.onClick = function() {
                            !n.props.sessionUser || n.props.data && !n.props.data.room.owner.self.isChannelMember || n.props.handleClick(n.props.roomID, n.props.roomName)
                        }, n.closeViews = function() {
                            n.setState({
                                showOptionView: !1
                            })
                        }, n.toggleOptionView = function() {
                            n.state.showOptionView ? n.closeViews() : n.state.showOptionView || n.setState({
                                showOptionView: !0
                            })
                        }, n.state = {
                            showOptionView: !1
                        }, n
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        var e = this.props.data;
                        if (e && e.loading) return a.createElement(h.gb, {
                            width: 160
                        });
                        if (e && e.error) return a.createElement(h.Xa, null);
                        var t = !this.props.sessionUser || e && !e.room.owner.self.isChannelMember,
                            n = h.rb.Lock,
                            o = !1,
                            r = !1;
                        if (e) {
                            var i = {
                                isPreviewable: e && e.room.isPreviewable,
                                minimumAllowedRole: e && e.room.minimumAllowedRole
                            };
                            n = Object(j.a)(i, e.room.self.permissions.sendMessages), o = e.room.self.isUnread && e.room.owner.self.isChannelMember, r = e.room.self.isMuted && e.room.owner.self.isChannelMember
                        }
                        return a.createElement(h.Bb, {
                            position: h.hb.Relative,
                            "data-test-selector": "interactable-wrapper",
                            className: "room-picker-option\n          " + (this.props.isActiveRoom ? "room-picker-option--active" : "") + "\n          " + (this.state.showOptionView && !t ? "room-picker-option--hover" : "") + "\n          " + (t ? "room-picker-option--disabled" : "")
                        }, a.createElement(h.Ua, {
                            onClick: this.onClick,
                            disabled: t,
                            "data-test-selector": "room-option-interactable",
                            hover: this.state.showOptionView && !t
                        }, a.createElement(h.Xa, {
                            padding: {
                                y: .5,
                                x: 2
                            },
                            display: h.X.Flex,
                            className: "room-picker-option__label",
                            fullWidth: !0
                        }, a.createElement(h.Xa, {
                            display: h.X.Flex,
                            alignItems: h.f.Center,
                            flexGrow: 1
                        }, a.createElement(h.Bb, {
                            className: "room-picker-option__permission-icon",
                            display: h.X.Flex,
                            padding: {
                                right: .5
                            }
                        }, a.createElement(h.qb, {
                            height: 14,
                            asset: n
                        })), a.createElement(h.W, {
                            bold: o && !this.props.isActiveRoom
                        }, this.props.roomName)), a.createElement(h.Xa, {
                            display: h.X.Flex,
                            alignItems: h.f.Center,
                            margin: {
                                right: 2
                            }
                        }, r && a.createElement(h.Bb, {
                            padding: {
                                left: .5
                            },
                            display: h.X.Flex,
                            className: "room-picker-option__muted-icon"
                        }, a.createElement(h.qb, {
                            asset: h.rb.WhisperMuted
                        })), this.renderMentionsPill()))), this.renderRoomDetailsBalloonToggle())
                    }, t.prototype.renderRoomDetailsBalloonToggle = function() {
                        var e = this.props.data;
                        if (!this.props.sessionUser || !e || e.chatRoomBanStatus && e.chatRoomBanStatus.isPermanent) return null;
                        var t = e.room.owner.self.isChannelMember;
                        return a.createElement(h.Xa, {
                            margin: {
                                right: 1
                            },
                            position: h.hb.Absolute,
                            attachRight: !0,
                            attachTop: !0,
                            display: t ? void 0 : h.X.Block,
                            className: "room-picker-option__settings " + (t ? "" : "room-picker-option__settings--disabled")
                        }, a.createElement(I.a, {
                            onClickOut: this.closeViews
                        }, a.createElement("div", {
                            className: "room-picker-option__picker-settings " + (this.state.showOptionView ? "room-picker-option__picker-settings--show" : "")
                        }, a.createElement(h.A, {
                            ariaLabel: Object(s.d)("More options", "RoomPickerOption"),
                            "data-test-selector": "room-details",
                            icon: h.rb.More,
                            onClick: this.toggleOptionView,
                            overlay: t
                        })), a.createElement(h.u, {
                            direction: h.v.BottomRight,
                            noTail: !0,
                            size: h.w.Small,
                            offsetY: "-0.5rem",
                            offsetX: "1rem",
                            show: !!this.state.showOptionView
                        }, a.createElement(A.a, {
                            roomID: this.props.roomID
                        }))))
                    }, t.prototype.renderMentionsPill = function() {
                        return this.props.isActiveRoom || !this.props.data || this.props.data.room.self.unreadMentionCount <= 0 || this.props.data.room.self.isMuted || !this.props.data.room.owner.self.isChannelMember ? null : a.createElement(h.Xa, {
                            padding: {
                                left: .5
                            }
                        }, a.createElement(h.eb, {
                            label: this.props.data.room.self.unreadMentionCount.toString(),
                            type: h.fb.Alert
                        }))
                    }, t = i.__decorate([Object(c.a)(U, {
                        options: function(e) {
                            return {
                                variables: {
                                    roomID: e.roomID,
                                    channelID: e.channelID,
                                    userID: e.sessionUser && e.sessionUser.id
                                }
                            }
                        },
                        skip: function(e) {
                            return !e.sessionUser
                        }
                    })], t)
                }(a.Component)),
                F = (n("TZHj"), function(e) {
                    var t, n, o, r, i, l;
                    return e.type === k.Subscriber ? (t = Object(s.d)("subscriber-room", "RoomUpsell_SubUpsellName"), n = Object(s.d)("Create a place for your subscribers to hang out", "RoomUpsell_SubUpsellTopic"), o = Object(s.d)("subscriber-room", "RoomUpsell_SubUpsellNameCreate"), r = Object(s.d)("Create a place for your subscribers to hang out", "RoomUpsell_SubUpsellTopicCreate"), i = S.b.Subscriber, l = !0) : (t = Object(s.d)("moderator-room", "RoomUpsell_ModUpsellName"), n = Object(s.d)("Give your moderators a place to sharpen their swords", "RoomUpsell_ModUpsellTopic"), o = Object(s.d)("moderator-room", "RoomUpsell_ModUpsellNameCreate"), r = Object(s.d)("Give your moderators a place to sharpen their swords", "RoomUpsell_ModUpsellTopicCreate"), i = S.b.Moderator, l = !1), a.createElement(h.Bb, {
                        display: h.X.Flex,
                        padding: {
                            y: 1,
                            x: 2
                        },
                        className: "room-upsell",
                        elevation: 2
                    }, a.createElement(h.Ja, {
                        gutterSize: h.Ka.None
                    }, a.createElement(h.P, {
                        cols: 9
                    }, a.createElement(h.Xa, {
                        display: h.X.Flex
                    }, a.createElement(h.Xa, {
                        padding: {
                            right: .5
                        },
                        display: h.X.Flex,
                        alignItems: h.f.Center
                    }, a.createElement(h.qb, {
                        type: h.sb.Alt2,
                        height: 14,
                        asset: h.rb.Unlock
                    })), a.createElement(h.W, {
                        color: h.O.Alt,
                        type: h.Rb.Strong
                    }, t)), a.createElement(h.W, {
                        color: h.O.Alt2,
                        className: "room-upsell__text"
                    }, n)), a.createElement(h.P, {
                        cols: 3
                    }, a.createElement(h.Xa, {
                        display: h.X.Flex,
                        flexDirection: h.Aa.Column,
                        fullHeight: !0,
                        justifyContent: h.Wa.Center,
                        padding: {
                            left: .5
                        }
                    }, a.createElement(w, {
                        isPrimaryCTA: !1,
                        roomName: o,
                        roomTopic: r,
                        isRoomPreviewable: l,
                        roomMinimumAllowedRole: i
                    })))))
                }),
                W = n("rayB"),
                B = n("2jz6"),
                z = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.handleLeave = function() {
                            return i.__awaiter(t, void 0, void 0, function() {
                                var e, t, n;
                                return i.__generator(this, function(o) {
                                    switch (o.label) {
                                        case 0:
                                            return e = i.__assign({}, Object(p.a)({
                                                channelID: this.props.channelID
                                            }), {
                                                optimisticResponse: {
                                                    leaveChannelRooms: {
                                                        __typename: "LeaveChannelRoomsPayload",
                                                        channel: {
                                                            self: {
                                                                isChannelMember: !0,
                                                                __typename: "UserSelfConnection"
                                                            },
                                                            __typename: "User"
                                                        }
                                                    }
                                                }
                                            }), this.props.handleDismiss(), [4, this.props.leaveRooms(e)];
                                        case 1:
                                            return t = o.sent(), n = function(e) {
                                                return e.user.self.isChannelMember = t.data.leaveChannelRooms.channel.self.isChannelMember, e
                                            }, Object(p.e)(W, {
                                                id: this.props.channelID
                                            }, n), [2]
                                    }
                                })
                            })
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        if (this.props.data.loading || this.props.data.error) return a.createElement(h.Xa, null);
                        var e = this.props.data.user.displayName;
                        return a.createElement(h.Xa, {
                            padding: {
                                y: 1,
                                x: 1
                            },
                            margin: {
                                x: .5
                            }
                        }, a.createElement(h.W, {
                            color: h.O.Error
                        }, Object(s.d)("Leave {displayName}'s Rooms?", {
                            displayName: e
                        }, "LeaveRoomsPrompt")), a.createElement(h.Xa, {
                            display: h.X.Flex,
                            padding: {
                                top: .5
                            }
                        }, a.createElement(h.Xa, {
                            padding: {
                                right: .5
                            }
                        }, a.createElement(h.z, {
                            "data-test-selector": "confirm-leave-button",
                            onClick: this.handleLeave,
                            type: h.F.Alert
                        }, Object(s.d)("Leave", "LeaveRoomsPrompt"))), a.createElement(h.z, {
                            "data-test-selector": "cancel-leave-button",
                            onClick: this.props.handleDismiss,
                            type: h.F.Hollow
                        }, Object(s.d)("Cancel", "LeaveRoomsPrompt"))))
                    }, t = i.__decorate([Object(m.b)("LeaveRoomsPrompt"), Object(c.a)(B, {
                        name: "leaveRooms"
                    }), Object(c.a)(W, {
                        options: function(e) {
                            return {
                                variables: {
                                    id: e.channelID
                                }
                            }
                        }
                    })], t)
                }(a.Component),
                L = n("B1bA"),
                V = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            shouldShowLeaveRoomsPrompt: !1
                        }, t.openLeaveRoomsPrompt = function() {
                            t.setState({
                                shouldShowLeaveRoomsPrompt: !0
                            })
                        }, t.closeLeaveRoomsPrompt = function() {
                            t.setState({
                                shouldShowLeaveRoomsPrompt: !1
                            })
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        return this.props.data.loading || this.props.data.error ? a.createElement(h.Xa, null) : this.shouldRender() ? a.createElement(y.a, null, a.createElement(h.A, {
                            "data-test-selector": "toggle-balloon-button",
                            ariaLabel: Object(s.d)("More options", "RoomsMemberOptions"),
                            icon: h.rb.More
                        }), a.createElement(h.u, {
                            direction: h.v.BottomRight,
                            noTail: !0,
                            offsetY: "0rem"
                        }, a.createElement(h.Xa, {
                            padding: {
                                y: .5
                            }
                        }, this.renderLeaveOption()))) : null
                    }, t.prototype.shouldRender = function() {
                        return this.props.isLoggedIn && this.props.data.user.self.isChannelMember
                    }, t.prototype.renderLeaveOption = function() {
                        return this.state.shouldShowLeaveRoomsPrompt ? a.createElement(z, {
                            channelID: this.props.channelID,
                            handleDismiss: this.closeLeaveRoomsPrompt
                        }) : a.createElement(h.Ua, {
                            type: h.Va.Alert,
                            "data-test-selector": "open-leave-prompt",
                            onClick: this.openLeaveRoomsPrompt
                        }, a.createElement(h.Bb, {
                            padding: {
                                y: .5,
                                x: 1
                            },
                            margin: {
                                left: .5
                            }
                        }, Object(s.d)("Leave", "RoomsMemberOptions")))
                    }, t = i.__decorate([Object(c.a)(L, {
                        options: function(e) {
                            return {
                                variables: {
                                    id: e.channelID
                                }
                            }
                        }
                    })], t)
                }(a.Component),
                X = n("ZwP8"),
                H = (n("U+nV"), "Stream Chat"),
                q = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            shouldShowRoomCreator: !1
                        }, t.onPickChat = function() {
                            t.props.handleRoomSelect(H, H)
                        }, t.showRoomCreator = function() {
                            t.setState({
                                shouldShowRoomCreator: !0
                            })
                        }, t.hideRoomCreator = function() {
                            t.setState({
                                shouldShowRoomCreator: !1
                            })
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.componentDidUpdate = function() {
                        if (!this.props.data.loading && !this.props.data.error && this.props.data.user) {
                            var e = this.props.data.user.channelRooms.length;
                            if (this.props.sessionUser) e += this.props.sessionUser.id === this.props.channelID ? 1 : 0, e += !this.props.data.user.self.isChannelMember ? 1 : 0;
                            this.props.latencyTracking.reportInteractive(e)
                        }
                    }, t.prototype.render = function() {
                        if (this.props.data.loading && !this.props.data.user) return a.createElement(h.Bb, {
                            className: "room-picker",
                            "data-test-selector": "room-picker-loading-state"
                        }, a.createElement(h.Xa, {
                            key: "chat",
                            margin: {
                                y: .5
                            }
                        }, a.createElement(h.Ua, {
                            onClick: this.onPickChat,
                            type: h.Va.Alpha
                        }, a.createElement(h.Xa, {
                            padding: {
                                y: .5,
                                x: 2
                            },
                            display: h.X.Flex
                        }, a.createElement(h.gb, {
                            width: 160
                        })))), a.createElement(h.Bb, {
                            background: h.r.Alt2,
                            padding: {
                                left: 2,
                                right: 1
                            },
                            fullWidth: !0,
                            borderTop: !0,
                            borderBottom: !0
                        }, a.createElement(h.gb, {
                            width: 80
                        })), a.createElement(h.Xa, {
                            padding: {
                                y: .5,
                                x: 2
                            }
                        }, a.createElement(h.gb, {
                            width: 120
                        }), a.createElement(h.gb, {
                            width: 160
                        })));
                        if (this.props.data.error) return a.createElement(h.Xa, null);
                        var e, t = this.props.isChannelLive ? h.M.Live : h.M.Offline;
                        return e = this.props.renderChannelName && this.props.data && this.props.data.user ? Object(s.d)("{displayName}'s Chat", {
                            displayName: this.props.data.user.displayName
                        }, "RoomPicker") : Object(s.d)("Stream Chat", "RoomPicker"), a.createElement(h.Bb, {
                            className: "room-picker"
                        }, a.createElement(h.Xa, {
                            margin: {
                                y: .5
                            }
                        }, a.createElement(h.Ua, {
                            "data-test-selector": "stream-chat-room-picker-option",
                            onClick: this.onPickChat
                        }, a.createElement(h.Xa, {
                            className: "room-picker__label " + (this.props.activeRoomID === H ? "room-picker__label--active-main" : ""),
                            key: H,
                            padding: {
                                y: .5,
                                x: 2
                            },
                            display: h.X.Flex
                        }, a.createElement(h.Bb, {
                            textAlign: h.Nb.Center,
                            padding: {
                                left: .5,
                                right: 1
                            }
                        }, a.createElement(h.K, {
                            status: t
                        })), a.createElement(h.Xa, {
                            "data-test-selector": "stream-chat-title"
                        }, a.createElement("span", null, e))))), this.getRoomNumberHeader(), this.renderRoomCreator(), this.renderRoomOnboarding(), this.getExistingRoomsList(), this.getUpsellRoomsList(), this.renderParticipationCTA())
                    }, t.prototype.getExistingRoomsList = function() {
                        var e = this,
                            t = this.props.data.user.channelRooms;
                        if (0 === t.length) return null;
                        var n = t.map(function(t) {
                            return a.createElement(P, {
                                channelID: e.props.channelID,
                                isActiveRoom: t.id === e.props.activeRoomID,
                                key: "room-picker-option-" + t.id,
                                roomID: t.id,
                                roomName: t.name,
                                handleClick: e.props.handleRoomSelect,
                                sessionUser: e.props.sessionUser
                            })
                        });
                        return a.createElement(h.Xa, {
                            margin: {
                                y: .5
                            }
                        }, n)
                    }, t.prototype.getUpsellRoomsList = function() {
                        if (this.props.sessionUser && this.props.sessionUser.id === this.props.channelID) {
                            var e = this.props.data.user,
                                t = e.channelRooms,
                                n = e.maxAllowedChannelRooms,
                                o = [];
                            if (n && t.length < n) {
                                var r = !C(k.Subscriber),
                                    i = !C(k.Moderator);
                                t.forEach(function(e) {
                                    e.name !== Object(s.d)("subscriber-room", "RoomPicker_SubUpsellCheck") && e.minimumAllowedRole !== S.b.Subscriber || (r = !1), e.name !== Object(s.d)("moderator-room", "RoomPicker_ModUpsellCheck") && e.minimumAllowedRole !== S.b.Moderator || (i = !1)
                                }), r && this.props.data.user.subscriptionProducts.length > 0 && o.push(a.createElement(F, {
                                    type: k.Subscriber,
                                    key: "sub-upsell"
                                })), i && o.push(a.createElement(F, {
                                    type: k.Moderator,
                                    key: "mod-upsell"
                                }))
                            }
                            return a.createElement(h.Xa, null, o)
                        }
                    }, t.prototype.getRoomNumberHeader = function() {
                        var e, t = this.props.data.user.channelRooms.length,
                            n = !this.props.data.user.maxAllowedChannelRooms || t >= this.props.data.user.maxAllowedChannelRooms;
                        return e = 0 === t ? Object(s.d)("NO ROOMS YET.", "RoomPicker") : 1 === t ? Object(s.d)("1 ROOM", "RoomPicker") : Object(s.d)("{numRooms} ROOMS", {
                            numRooms: t
                        }, "RoomPicker"), a.createElement(h.Bb, {
                            "data-test-selector": "room-picker-header",
                            className: "room-picker__header",
                            background: h.r.Alt2,
                            display: h.X.Flex,
                            alignItems: h.f.Center,
                            justifyContent: h.Wa.Between,
                            padding: {
                                left: 2,
                                right: 1
                            },
                            fullWidth: !0,
                            borderTop: !0,
                            borderBottom: !0
                        }, a.createElement(h.W, {
                            type: h.Rb.Strong,
                            color: h.O.Alt2
                        }, e), this.renderRoomNumHeaderButton(n))
                    }, t.prototype.renderParticipationCTA = function() {
                        var e = this.props.data.user.displayName;
                        return this.props.sessionUser ? 0 === this.props.data.user.channelRooms.length && this.props.channelID !== this.props.sessionUser.id ? a.createElement(h.Xa, {
                            padding: {
                                y: .5,
                                x: 2
                            },
                            margin: {
                                top: .5,
                                bottom: 1
                            }
                        }, a.createElement(h.W, {
                            color: h.O.Alt2
                        }, Object(s.d)("{displayName} hasn't created any rooms yet!", {
                            displayName: e
                        }, "RoomPicker"))) : this.props.data.user.self.isChannelMember ? void 0 : a.createElement(h.Xa, {
                            padding: {
                                y: .5,
                                x: 2
                            },
                            margin: {
                                bottom: 1
                            }
                        }, a.createElement(h.W, null, Object(s.d)("More chat in your chat. You will get notifications when you are @mentioned.", "RoomPicker")), a.createElement(h.Xa, {
                            margin: {
                                top: .5
                            }
                        }, a.createElement(R, {
                            channelID: this.props.channelID
                        }))) : a.createElement(h.Xa, {
                            "data-test-selector": "room-picker-logged-out-cta",
                            padding: {
                                y: .5,
                                x: 2
                            },
                            margin: {
                                bottom: 1
                            }
                        }, a.createElement(h.W, {
                            color: h.O.Alt
                        }, Object(s.d)("Sign up/Log in to access {displayName}'s Rooms", {
                            displayName: e
                        }, "RoomPicker")))
                    }, t.prototype.renderRoomCreator = function() {
                        if (this.state.shouldShowRoomCreator) return a.createElement(D, {
                            onCloseRoomCreator: this.hideRoomCreator
                        })
                    }, t.prototype.renderRoomOnboarding = function() {
                        var e = this.props.sessionUser && this.props.sessionUser.id === this.props.channelID,
                            t = this.props.data.user.channelRooms.length,
                            n = !this.props.data.user.maxAllowedChannelRooms || t >= this.props.data.user.maxAllowedChannelRooms;
                        if (e && 0 === t && !n) return a.createElement(h.Bb, {
                            background: h.r.Alt,
                            color: h.O.Alt2,
                            padding: {
                                bottom: 2,
                                top: 1
                            },
                            textAlign: h.Nb.Center
                        }, a.createElement(h.Xa, {
                            margin: {
                                y: 1
                            },
                            fullWidth: !0
                        }, a.createElement("img", {
                            src: d.a,
                            height: "50"
                        })), a.createElement(h.Xa, {
                            padding: {
                                x: 5
                            }
                        }, a.createElement(h.W, null, Object(s.d)("Rooms let your community bond in spaces you create! Get started right here...", "RoomPicker"))))
                    }, t.prototype.renderRoomNumHeaderButton = function(e) {
                        if (this.props.sessionUser) {
                            var t, n = this.props.sessionUser.id === this.props.channelID;
                            if (n && !this.state.shouldShowRoomCreator) {
                                if (t = a.createElement(h.z, {
                                        onClick: this.showRoomCreator,
                                        disabled: e,
                                        type: h.F.Text,
                                        "data-a-target": "add-room-button"
                                    }, a.createElement(h.Xa, {
                                        display: h.X.Flex,
                                        alignItems: h.f.Center
                                    }, a.createElement(h.Xa, {
                                        padding: {
                                            right: .5
                                        }
                                    }, a.createElement(h.qb, {
                                        asset: h.rb.Plus,
                                        height: 10
                                    })), Object(s.d)("Create Room", "RoomPicker"))), e && this.props.data.user.maxAllowedChannelRooms) {
                                    var o = this.props.data.user.maxAllowedChannelRooms,
                                        r = Object(s.d)("You can have a maximum of {numMaxRooms} rooms", {
                                            numMaxRooms: o
                                        }, "RoomPicker");
                                    t = a.createElement(h.Ub, {
                                        direction: h.Wb.Left,
                                        label: r,
                                        width: 160
                                    }, t)
                                }
                            } else n || (t = a.createElement(V, {
                                channelID: this.props.channelID,
                                isLoggedIn: this.props.isLoggedIn
                            }));
                            return t
                        }
                    }, t = i.__decorate([Object(c.a)(X, {
                        options: function(e) {
                            return {
                                fetchPolicy: "cache-and-network",
                                variables: {
                                    id: e.channelID,
                                    isBroadcaster: !!e.sessionUser && e.sessionUser.id === e.channelID
                                }
                            }
                        }
                    }), Object(m.b)("RoomPicker")], t)
                }(a.Component);
            var G = Object(o.connect)(function(e) {
                return {
                    sessionUser: Object(r.e)(e),
                    isLoggedIn: Object(r.f)(e)
                }
            })(q);
            n.d(t, "RoomPicker", function() {
                return G
            })
        },
        dAHa: function(e, t, n) {
            "use strict";
            var o, r = n("mrSG"),
                i = n("q1tI"),
                a = n("/MKj"),
                s = n("fvjX"),
                l = n("/7QA"),
                d = n("yR8l"),
                c = n("BhFH"),
                m = n("iS14"),
                u = n("geRD"),
                p = n("f00E"),
                h = n("D7An"),
                g = n("2xye"),
                v = n("GnwI"),
                b = n("QVaV"),
                f = n("Ue10"),
                k = (n("MPK0"), "report-wizard-block"),
                R = "report-wizard-unblock",
                y = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            userBlocked: t.props.userBlocked || !1
                        }, t.renderBlock = function() {
                            return i.createElement(f.U, {
                                hoverUnderlineNone: !0,
                                onClick: t.handleBlock,
                                "data-test-selector": k
                            }, i.createElement(f.Xa, {
                                display: f.X.Flex,
                                alignItems: f.f.Center
                            }, i.createElement(f.qb, {
                                type: f.sb.Brand,
                                asset: f.rb.Ban
                            }), i.createElement(f.Xa, {
                                margin: {
                                    left: .5
                                }
                            }, Object(l.d)("Block {user}", {
                                user: t.props.targetUser.displayName
                            }, "ReportWizardBlockActions"))))
                        }, t.renderUnblock = function() {
                            return i.createElement(f.Xa, {
                                className: "reporting-wizard__block-actions",
                                display: f.X.Flex,
                                alignItems: f.f.Center
                            }, i.createElement(f.qb, {
                                type: f.sb.Success,
                                asset: f.rb.FollowCheck
                            }), i.createElement(f.Xa, {
                                margin: {
                                    right: 1
                                }
                            }, i.createElement(f.W, {
                                className: "block-user__success",
                                type: f.Rb.Span
                            }, Object(l.d)("{user} blocked", {
                                user: t.props.targetUser.displayName
                            }, "ReportWizardBlockActions"))), i.createElement(f.U, {
                                hoverUnderlineNone: !0,
                                onClick: t.handleUnblock,
                                "data-test-selector": R
                            }, i.createElement(f.Xa, {
                                margin: {
                                    left: .5
                                }
                            }, Object(l.d)("Unblock", "ReportWizardBlockActions"))))
                        }, t.handleBlock = function() {
                            return r.__awaiter(t, void 0, void 0, function() {
                                return r.__generator(this, function(e) {
                                    return this.props.onBlock(), this.setState({
                                        userBlocked: !0
                                    }), [2]
                                })
                            })
                        }, t.handleUnblock = function() {
                            t.props.onUnblock(), t.setState({
                                userBlocked: !1
                            })
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        var e = this.state.userBlocked ? this.renderUnblock() : this.renderBlock(),
                            t = Object(b.a)(this.props.targetUser.login, this.props.targetUser.displayName, !0);
                        return i.createElement(f.Bb, {
                            borderTop: !0,
                            padding: {
                                y: 1
                            },
                            margin: {
                                top: 1
                            }
                        }, i.createElement(f.Xa, null, Object(l.d)("Would you like to block {user}?", {
                            user: t
                        }, "ReportWizardBlockActions")), i.createElement(f.Bb, {
                            color: f.O.Alt2,
                            margin: {
                                y: 1
                            }
                        }, i.createElement(f.ac, {
                            baseFontSize: f.Ca.Size6
                        }, i.createElement("p", null, Object(l.d)("Blocking {user} will:", {
                            user: t
                        }, "ReportWizardBlockActions")), i.createElement("ul", null, i.createElement("li", null, Object(l.d)("Prevent them from sending you whispers", "ReportWizardBlockActions")), i.createElement("li", null, Object(l.d)("Prevent them from hosting you", "ReportWizardBlockActions")), i.createElement("li", null, Object(l.d)("Prevent them from adding you as a friend", "ReportWizardBlockActions")), i.createElement("li", null, Object(l.d)("Filter their messages out of chats you don’t moderate", "ReportWizardBlockActions"))))), i.createElement(f.Xa, {
                            margin: {
                                top: 1
                            }
                        }, e))
                    }, t
                }(i.Component),
                E = n("4qQ0");
            ! function(e) {
                e.Link = "link", e.MultipleChoice = "multiple choice", e.Text = "text", e.Textarea = "textarea"
            }(o || (o = {}));
            var S, C = {
                    generalFilter: function() {
                        return Object(l.d)("I don't think their content or behavior is allowed on Twitch", "ReportModalWizard")
                    },
                    me: function() {
                        return Object(l.d)("Me", "ReportModalWizard")
                    },
                    someoneElse: function() {
                        return Object(l.d)("Someone else", "ReportModalWizard")
                    },
                    sexuallyCoercive: function() {
                        return Object(l.d)("acting in a sexually coercive or inappropriate way", "ReportModalWizard")
                    },
                    abusiveViolence: function() {
                        return Object(l.d)("They're threatening violence or physical harm", "ReportModalWizard")
                    },
                    commitingViolence: function() {
                        return Object(l.d)("They're committing acts of violence or physical harm", "ReportModalWizard")
                    },
                    threatening: function() {
                        return Object(l.d)("threatening, harming, or endangering someone", "ReportModalWizard")
                    },
                    abusive: function() {
                        return Object(l.d)("being hateful, harassing, or abusive", "ReportModalWizard")
                    }
                },
                O = {
                    input_description: {
                        getTitle: function() {
                            return Object(l.d)("Could you provide more detail about this issue? You may include links to videos, clips, and content outside Twitch.", "ReportModalWizard")
                        },
                        value: "description",
                        type: o.Textarea,
                        required: !0
                    },
                    input_link: {
                        getTitle: function() {
                            return Object(l.d)("If possible, please provide a link to show us where the issue occurred. Links that do not lead to the original source of the content may not be usable as evidence.", "ReportModalWizard")
                        },
                        rows: 2,
                        value: "external links",
                        type: o.Textarea
                    },
                    input_usernames: {
                        getTitle: function() {
                            return Object(l.d)("If you know the usernames of any other Twitch accounts that may be owned by this person, please list them in this space.", "ReportModalWizard")
                        },
                        value: "other usernames",
                        rows: 2,
                        type: o.Textarea
                    },
                    input_connection: {
                        getTitle: function() {
                            return Object(l.d)("Please describe how you connected the offsite content to this Twitch account.", "ReportModalWizard")
                        },
                        value: "offsite content connection",
                        type: o.Textarea
                    },
                    input_comments: {
                        getTitle: function() {
                            return Object(l.d)("If you have any other comments you would like to add, please do so here.", "ReportModalWizard")
                        },
                        value: "comments",
                        type: o.Textarea
                    },
                    input_identifyOwner: {
                        getTitle: function() {
                            return Object(l.d)("Please describe how you identified this person as the owner of this Twitch account.", "ReportModalWizard")
                        },
                        rows: 2,
                        value: "connect account owner",
                        type: o.Textarea
                    },
                    endBlurb_socialmedia: {
                        getTitle: function() {
                            return Object(l.d)("Please submit a report to the site or service where the incident occurred as well if you have not already done so.", "ReportModalWizard")
                        },
                        type: o.Text
                    },
                    endBlurb_threat: {
                        getTitle: function() {
                            return Object(l.d)("If you feel you are in immediate danger, please contact your local law enforcement.", "ReportModalWizard")
                        },
                        type: o.Text
                    },
                    endLink_selfharm: {
                        getTitle: function() {
                            return Object(l.d)("Learn more about mental health support", "ReportModalWizard")
                        },
                        value: "https://help.twitch.tv/customer/en/portal/articles/2904486-twitch-cares-mental-health-support-information",
                        type: o.Link
                    },
                    endLink_DMCA: {
                        getTitle: function() {
                            return Object(l.d)("View our DMCA Notification Guidelines", "ReportModalWizard")
                        },
                        value: "https://www.twitch.tv/p/legal/dmca-guidelines/",
                        type: o.Link
                    },
                    endLink_trademark: {
                        getTitle: function() {
                            return Object(l.d)("View our Trademark Policy", "ReportModalWizard")
                        },
                        value: "https://www.twitch.tv/p/legal/trademark-policy/",
                        type: o.Link
                    },
                    endLink_devAgreement: {
                        getTitle: function() {
                            return Object(l.d)("View our Developer Agreement", "ReportModalWizard")
                        },
                        value: "https://www.twitch.tv/p/legal/developer-agreement/",
                        type: o.Link
                    },
                    endLink_eventCoC: {
                        getTitle: function() {
                            return Object(l.d)("View our Events Code of Conduct", "ReportModalWizard")
                        },
                        value: "https://www.twitch.tv/p/legal/events-code-of-conduct",
                        type: o.Link
                    },
                    messaging_general: {
                        getTitle: C.generalFilter,
                        value: "general_messaging",
                        omitFromDescription: !0
                    },
                    profile_general: {
                        getTitle: C.generalFilter,
                        value: "general_profile",
                        omitFromDescription: !0
                    },
                    maliciousRaid: {
                        getTitle: function() {
                            return Object(l.d)("They're participating in a malicious raid", "ReportModalWizard")
                        },
                        value: "malicious raid",
                        reportReason: E.b.Harassment
                    },
                    violence: {
                        getTitle: function() {
                            return Object(l.d)("It contains threats, harm, or endangerment of someone", "ReportModalWizard")
                        },
                        value: "violence/threats",
                        reportReason: E.b.Harm
                    },
                    report_username: {
                        getTitle: function() {
                            return Object(l.d)("They're using an inappropriate or offensive username", "ReportModalWizard")
                        },
                        value: "inappropriate username",
                        reportReason: E.b.OffensiveUsername
                    },
                    report_emotes: {
                        getTitle: function() {
                            return Object(l.d)("The emotes are inappropriate or offensive", "ReportModalWizard")
                        },
                        value: "inappropriate emotes",
                        reportReason: E.b.Other
                    },
                    abusive: {
                        getTitle: function() {
                            return Object(l.d)("It's hateful, harassing, or abusive", "ReportModalWizard")
                        },
                        value: "abusive"
                    },
                    scam: {
                        getTitle: function() {
                            return Object(l.d)("It contains attempts to scam other community members", "ReportModalWizard")
                        },
                        value: "scam",
                        reportReason: E.b.Spam
                    },
                    emptyStream: {
                        getTitle: function() {
                            return Object(l.d)("There's nobody on the stream", "ReportModalWizard")
                        },
                        value: "empty stream"
                    },
                    impersonation: {
                        getTitle: function() {
                            return Object(l.d)("They're impersonating someone", "ReportModalWizard")
                        },
                        value: "impersonation",
                        reportReason: E.b.Impersonation
                    },
                    underage: {
                        getTitle: function() {
                            return Object(l.d)("They're underage (12 or younger)", "ReportModalWizard")
                        },
                        value: "underage",
                        reportReason: E.b.Underaged
                    },
                    report_ip: {
                        getTitle: function() {
                            return Object(l.d)("I think they're using copyrighted content, trademarks, or other intellectual property that's not theirs", "ReportModalWizard")
                        },
                        value: "intellectual property"
                    },
                    inappropriateContent: {
                        getTitle: function() {
                            return Object(l.d)("It's inappropriate or obscene", "ReportModalWizard")
                        },
                        value: "inappropriate content"
                    },
                    violateDevAgreement: {
                        getTitle: function() {
                            return Object(l.d)("I think they're violating Twitch's Developer Agreement", "ReportModalWizard")
                        },
                        value: "violating developer agreement"
                    },
                    revealPersonalInfo: {
                        getTitle: function() {
                            return Object(l.d)("They might have revealed someone's personal information", "ReportModalWizard")
                        },
                        value: "revealing personal info",
                        reportReason: E.b.Other
                    },
                    inappropriateBadge: {
                        getTitle: function() {
                            return Object(l.d)("Their emote or subscriber badge violates Twitch's Guidelines", "ReportModalWizard")
                        },
                        value: "emote/subscriber badge",
                        reportReason: E.b.Other
                    },
                    noModeration: {
                        getTitle: function() {
                            return Object(l.d)("They're not moderating their chat appropriately", "ReportModalWizard")
                        },
                        value: "not moderating chat",
                        reportReason: E.b.Other
                    },
                    inappropriateExtension: {
                        getTitle: function() {
                            return Object(l.d)("Their extension contains malicious or inappropriate content", "ReportModalWizard")
                        },
                        value: "inappropriate extension",
                        reportReason: E.b.Other
                    },
                    cheating: {
                        getTitle: function() {
                            return Object(l.d)("They're cheating in an online game", "ReportModalWizard")
                        },
                        value: "cheating",
                        reportReason: E.b.Cheating
                    },
                    bitsViolation: {
                        getTitle: function() {
                            return Object(l.d)("Their use of Bits goes against Twitch's Policy", "ReportModalWizard")
                        },
                        value: "bits violation",
                        reportReason: E.b.BitsViolation
                    },
                    video_labeling: {
                        getTitle: function() {
                            return Object(l.d)("Their content is labeled incorrectly", "ReportModalWizard")
                        },
                        value: "incorrect label",
                        reportReason: E.b.Miscategorized
                    },
                    video_inactive: {
                        getTitle: function() {
                            return Object(l.d)("The stream is inactive (sleeping/AFK)", "ReportModalWizard")
                        },
                        value: "inactive stream",
                        reportReason: E.b.Miscategorized
                    },
                    video_general: {
                        getTitle: C.generalFilter,
                        value: "general_video",
                        omitFromDescription: !0
                    },
                    hateSpeech: {
                        getTitle: function() {
                            return Object(l.d)("They're using hate speech, hateful symbols, or hateful media", "ReportModalWizard")
                        },
                        value: "hate speech",
                        reportReason: E.b.HatefulConduct
                    },
                    harassment: {
                        getTitle: function() {
                            return Object(l.d)("They're harassing or bullying someone", "ReportModalWizard")
                        },
                        value: "harassment",
                        reportReason: E.b.Harassment
                    },
                    abusiveViolence: {
                        getTitle: C.abusiveViolence,
                        value: "threatening violence",
                        reportReason: E.b.Harm
                    },
                    commitingViolence: {
                        getTitle: C.commitingViolence,
                        value: "committing violence",
                        reportReason: E.b.Harm
                    },
                    swatting: {
                        getTitle: function() {
                            return Object(l.d)("They're inciting or committing swatting or a DDOS attack", "ReportModalWizard")
                        },
                        value: "swatting/ddosing",
                        reportReason: E.b.Harassment
                    },
                    personalInfo: {
                        getTitle: function() {
                            return Object(l.d)("They're purposely revealing personal information", "ReportModalWizard")
                        },
                        value: "revealing personal info",
                        reportReason: E.b.Harassment
                    },
                    threat_me: {
                        getTitle: function() {
                            return Object(l.d)("At me", "ReportModalWizard")
                        },
                        value: "against me",
                        reportReason: E.b.Harm
                    },
                    threat_person: {
                        getTitle: function() {
                            return Object(l.d)("At someone else", "ReportModalWizard")
                        },
                        value: "against another person",
                        reportReason: E.b.Harm
                    },
                    threat_group: {
                        getTitle: function() {
                            return Object(l.d)("At a group of people", "ReportModalWizard")
                        },
                        value: "against group of people",
                        reportReason: E.b.Harm
                    },
                    threat_selfharm: {
                        getTitle: function() {
                            return Object(l.d)("They're threatening self-harm", "ReportModalWizard")
                        },
                        value: "selfharm"
                    },
                    inappropriate_game: {
                        getTitle: function() {
                            return Object(l.d)("The game isn't allowed on Twitch", "ReportModalWizard")
                        },
                        value: "prohibited game",
                        reportReason: E.b.Prohibited
                    },
                    sexuallyViolent: {
                        getTitle: function() {
                            return Object(l.d)("Violent sexual conduct", "ReportModalWizard")
                        },
                        value: "sexually violent",
                        reportReason: E.b.SexualViolence
                    },
                    childAnimal: {
                        getTitle: function() {
                            return Object(l.d)("Sexual conduct involving a child or animal", "ReportModalWizard")
                        },
                        value: "sexual conduct; child or animal",
                        reportReason: E.b.SexualViolence
                    },
                    pornographic: {
                        getTitle: function() {
                            return Object(l.d)("Sexually explicit or pornographic content", "ReportModalWizard")
                        },
                        value: "pornographic",
                        reportReason: E.b.SexualContent
                    },
                    gory: {
                        getTitle: function() {
                            return Object(l.d)("Extreme violence or gore", "ReportModalWizard")
                        },
                        value: "gory",
                        reportReason: E.b.Gore
                    },
                    suggestive: {
                        getTitle: function() {
                            return Object(l.d)("Sexually suggestive content", "ReportModalWizard")
                        },
                        value: "sexually suggestive",
                        reportReason: E.b.SexualContent
                    },
                    nudity: {
                        getTitle: function() {
                            return Object(l.d)("Full or partial nudity", "ReportModalWizard")
                        },
                        value: "nudity",
                        reportReason: E.b.SexualContent
                    },
                    other: {
                        getTitle: function() {
                            return Object(l.d)("There's something else wrong with it...", "ReportModalWizard")
                        },
                        value: "other",
                        reportReason: E.b.Other
                    },
                    evasion: {
                        getTitle: function() {
                            return Object(l.d)("They were banned or suspended and are trying to get around it (ban evasion)", "ReportModalWizard")
                        },
                        value: "ban evasion"
                    },
                    evasion_sitewide: {
                        getTitle: function() {
                            return Object(l.d)("A sitewide ban from Twitch", "ReportModalWizard")
                        },
                        value: "sitewide ban",
                        reportReason: E.b.TosBanEvasion
                    },
                    evasion_chat: {
                        getTitle: function() {
                            return Object(l.d)("A chat ban from one or more channels", "ReportModalWizard")
                        },
                        value: "chat ban",
                        reportReason: E.b.ChatBanEvasion
                    },
                    evasion_messaging: {
                        getTitle: function() {
                            return Object(l.d)("A block from messaging me", "ReportModalWizard")
                        },
                        value: "messaging block",
                        reportReason: E.b.ChatBanEvasion
                    },
                    impersonation_me: {
                        getTitle: C.me,
                        value: "impersonating me",
                        reportReason: E.b.Impersonation
                    },
                    impersonation_brand: {
                        getTitle: function() {
                            return Object(l.d)("Someone I represent, or a brand/company I work for", "ReportModalWizard")
                        },
                        value: "impersonating brand",
                        reportReason: E.b.Impersonation
                    },
                    impersonation_other: {
                        getTitle: C.someoneElse,
                        value: "impersonating someone else",
                        reportReason: E.b.Impersonation
                    },
                    selfharm: {
                        getTitle: function() {
                            return Object(l.d)("I'm concerned for their wellbeing", "ReportModalWizard")
                        },
                        value: "selfharm",
                        reportReason: E.b.SelfHarm
                    },
                    chat: {
                        getTitle: function() {
                            return Object(l.d)("In a stream chat message", "ReportModalWizard")
                        },
                        value: "chat"
                    },
                    profile: {
                        getTitle: function() {
                            return Object(l.d)("In the profile content, extensions, or emotes", "ReportModalWizard")
                        },
                        value: "profile"
                    },
                    video: {
                        getTitle: function() {
                            return Object(l.d)("In a live stream, video, or clip", "ReportModalWizard")
                        },
                        value: "video"
                    },
                    room: {
                        getTitle: function(e) {
                            return Object(l.d)("In one of {username}'s rooms", {
                                username: e
                            }, "ReportModalWizard")
                        },
                        value: "room"
                    },
                    whisper: {
                        getTitle: function() {
                            return Object(l.d)("In a whisper (private message)", "ReportModalWizard")
                        },
                        value: "whisper",
                        reportContext: E.a.Whisper
                    },
                    username: {
                        getTitle: function() {
                            return Object(l.d)("In the username", "ReportModalWizard")
                        },
                        value: "username",
                        reportReason: E.b.OffensiveUsername
                    },
                    report_other: {
                        getTitle: function() {
                            return Object(l.d)("Somewhere else...", "ReportModalWizard")
                        },
                        value: "somewhere else",
                        omitFromDescription: !0
                    },
                    video_streamer: {
                        getTitle: function() {
                            return Object(l.d)("The streamer or channel owner", "ReportModalWizard")
                        },
                        value: "streamer"
                    },
                    video_someoneElse: {
                        getTitle: function() {
                            return Object(l.d)("Someone else in the video", "ReportModalWizard")
                        },
                        value: "someone else in video"
                    },
                    video_chatSomeone: {
                        getTitle: function() {
                            return Object(l.d)("Someone in chat", "ReportModalWizard")
                        },
                        value: "someone in chat",
                        differentTarget: !0
                    },
                    report_channelOwner: {
                        getTitle: function() {
                            return Object(l.d)("The channel owner", "ReportModalWizard")
                        },
                        value: "channel owner"
                    },
                    report_member: {
                        getTitle: function() {
                            return Object(l.d)("Another community member", "ReportModalWizard")
                        },
                        value: "community member",
                        differentTarget: !0
                    },
                    location_onTwitch: {
                        getTitle: function() {
                            return Object(l.d)("On Twitch", "ReportModalWizard")
                        },
                        value: "on twitch"
                    },
                    location_anotherSite: {
                        getTitle: function() {
                            return Object(l.d)("On another site or service", "RpoertModalWizard")
                        },
                        value: "another site"
                    },
                    location_TwitchEvent: {
                        getTitle: function() {
                            return Object(l.d)("In person, at a Twitch event", "ReportModalWizard")
                        },
                        value: "twitch event"
                    },
                    external_incitingRaids: {
                        getTitle: function() {
                            return Object(l.d)("inciting brigading or malicious raids", "ReportModalWizard")
                        },
                        reportReason: E.b.Harassment,
                        value: "brigading/raids"
                    },
                    external_threatening: {
                        getTitle: C.threatening,
                        value: "threatening"
                    },
                    external_harassment: {
                        getTitle: C.abusive,
                        value: "hateful/harassing"
                    },
                    external_abusiveViolence: {
                        getTitle: C.abusiveViolence,
                        value: "external site; threatening violence",
                        reportReason: E.b.Harm
                    },
                    external_commitingViolence: {
                        getTitle: C.commitingViolence,
                        value: "external site; committing violence",
                        reportReason: E.b.Harm
                    },
                    conduct_impersonation: {
                        getTitle: function() {
                            return Object(l.d)("impersonating someone", "ReportModalWizard")
                        },
                        value: "impersonation",
                        reportReason: E.b.Impersonation
                    },
                    spam: {
                        getTitle: function() {
                            return Object(l.d)("They're spamming or spreading malicious links", "ReportModalWizard")
                        },
                        value: "spam",
                        reportReason: E.b.Spam
                    },
                    spam_bot: {
                        getTitle: function() {
                            return Object(l.d)("I think this is a bot account", "ReportModalWizard")
                        },
                        value: "bot"
                    },
                    spam_scam: {
                        getTitle: function() {
                            return Object(l.d)("They're trying to scam other community members or sending malicious links", "ReportModalWizard")
                        },
                        value: "scam or malicious links"
                    },
                    spam_repeated: {
                        getTitle: function() {
                            return Object(l.d)("They're sending repeated messages (spam)", "ReportModalWizard")
                        },
                        value: "repeat messages"
                    }
                },
                N = function(e) {
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
                    return r.__extends(t, e), t.prototype.render = function() {
                        var e = this.props.currentCard.getDescription ? i.createElement(f.Xa, {
                            padding: {
                                bottom: 1
                            }
                        }, this.props.currentCard.getDescription()) : null;
                        return i.createElement(f.Xa, {
                            className: "reporting-wizard-card"
                        }, e, i.createElement(f.Ea, {
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
                                    return i.createElement(f.Xa, {
                                        key: n,
                                        padding: {
                                            bottom: 1
                                        }
                                    }, t.getTitle());
                                case o.Link:
                                    return i.createElement(f.Xa, {
                                        key: n,
                                        padding: {
                                            bottom: 1
                                        }
                                    }, i.createElement(f.U, {
                                        to: t.value,
                                        targetBlank: !0
                                    }, i.createElement(f.Xa, {
                                        display: f.X.Flex
                                    }, i.createElement(f.Xa, {
                                        display: f.X.Inline,
                                        padding: {
                                            right: .5
                                        }
                                    }, i.createElement(f.qb, {
                                        asset: f.rb.Document
                                    })), t.getTitle())));
                                case o.Textarea:
                                    var r = t.value ? e.props.userTextInputs[t.value] : void 0,
                                        a = t.required && (!r || !!r && 0 === r.trim().length);
                                    return i.createElement(f.Xa, {
                                        key: n,
                                        padding: {
                                            bottom: 1
                                        }
                                    }, i.createElement(f.Ea, {
                                        label: t.getTitle(),
                                        labelOptional: t.required ? "" : Object(l.d)("Optional", "ReportModalWizardCard")
                                    }, i.createElement(f.Ob, {
                                        onChange: e.onChange,
                                        rows: t.rows || 3,
                                        name: t.value,
                                        error: e.props.error && a,
                                        value: r,
                                        "data-test-selector": "report-wizard-textarea"
                                    })));
                                case o.MultipleChoice:
                                default:
                                    return i.createElement(f.Xa, {
                                        key: n,
                                        padding: {
                                            y: .5
                                        }
                                    }, i.createElement(f.nb, {
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
                }(i.Component),
                T = n("RQ6e");
            ! function(e) {
                e.Confirm = "Confirm", e.MultipleChoice = "MultipleChoice", e.Info = "End Card"
            }(S || (S = {}));
            var _, w, M, j = {
                    contentGeneral: function() {
                        return Object(l.d)("What would you like to report?", "ReportModalWizard")
                    },
                    content: function() {
                        return Object(l.d)("What's wrong with this content?", "ReportModalWizard")
                    },
                    identifyUser: function() {
                        return Object(l.d)("Who do you want to report?", "ReportModalWizard")
                    },
                    thisPersonIs: function() {
                        return Object(l.d)("This person is...", "ReportModalWizard")
                    },
                    relevantStatements: function() {
                        return Object(l.d)("What would you like to report? (Please choose the most relevant statement that applies.)", "ReportModalWizard")
                    }
                },
                x = {
                    report: function(e) {
                        return Object(l.d)("Report {username}", {
                            username: e
                        }, "ReportModalWizard")
                    },
                    reportVideo: function(e) {
                        return Object(l.d)("Report {username}'s Video", {
                            username: e
                        }, "ReportModalWizard")
                    },
                    reportMessage: function(e) {
                        return Object(l.d)("Report {username}'s Message", {
                            username: e
                        }, "ReportModalWizard")
                    },
                    reportProfile: function(e) {
                        return Object(l.d)("Report {username}'s Profile Or Other Content", {
                            username: e
                        }, "ReportModalWizard")
                    },
                    reportAbusive: function(e) {
                        return Object(l.d)("Report {username} for Abusive Conduct", {
                            username: e
                        }, "ReportModalWizard")
                    },
                    tellUsMore: function() {
                        return Object(l.d)("Tell Us More", "ReportModalWizard")
                    },
                    thanks: function() {
                        return Object(l.d)("Thanks for letting us know", "ReportModalWizard")
                    },
                    thanksConcern: function() {
                        return Object(l.d)("Thank you for your concern", "ReportModalWizard")
                    }
                },
                D = {
                    getDescription: function() {
                        return Object(l.d)("Reports are reviewed by Twitch Staff 24 hours a day. We will issue penalties, such as account suspension and/or content removal, once we verify that a violation of our policies has occurred.", "ReportModalWizard")
                    },
                    blockPrompt: !0,
                    getTitle: x.thanks,
                    type: S.Info,
                    value: "end card"
                },
                I = {
                    socialMedia: r.__assign({}, D, {
                        items: [O.endBlurb_socialmedia]
                    }),
                    violence: r.__assign({}, D, {
                        items: [O.endBlurb_threat]
                    }),
                    legal: {
                        getTitle: x.thanksConcern,
                        getDescription: function() {
                            return Object(l.d)("To submit a claim or report a violation of this type, you will need to follow the steps listed on the relevant page below.", "ReportModalWizard")
                        },
                        items: [O.endLink_DMCA, O.endLink_trademark, O.endLink_devAgreement],
                        type: S.Info,
                        value: "ip end"
                    },
                    selfharm: {
                        getTitle: x.thanksConcern,
                        getDescription: function() {
                            return Object(l.d)("If you know the user personally, and you believe them to be in danger, please contact their local authorities immediately. The link below contains some general information that may be of use.", "ReportModalWizard")
                        },
                        items: [O.endLink_selfharm],
                        type: S.Info,
                        value: "selfharm end"
                    },
                    twitchEvent: {
                        getTitle: x.thanksConcern,
                        getDescription: function() {
                            return Object(l.d)("Please bring this concern to the attention of staff or security at the event if you have not already done so. More information is available at the link below.", "ReportModalWizard")
                        },
                        items: [O.endLink_eventCoC],
                        value: "twitch event end",
                        type: S.Info
                    }
                },
                A = {
                    getTitle: x.report,
                    getLabel: function() {
                        return Object(l.d)("Where is the problem?", "ReportModalWizard")
                    },
                    items: [O.video, O.whisper, O.chat, O.room, O.profile, O.username, O.report_other],
                    type: S.MultipleChoice,
                    value: "content type"
                },
                U = {
                    identifyUser: {
                        getTitle: x.reportVideo,
                        getLabel: j.identifyUser,
                        items: [O.video_streamer, O.video_someoneElse, O.video_chatSomeone],
                        type: S.MultipleChoice,
                        value: "video identify user"
                    },
                    content: {
                        getTitle: x.reportVideo,
                        getLabel: j.contentGeneral,
                        items: [O.revealPersonalInfo, O.video_labeling, O.video_inactive, O.video_general, O.report_ip, O.violateDevAgreement, O.selfharm],
                        type: S.MultipleChoice,
                        value: "video report reason"
                    },
                    general: {
                        getTitle: x.reportVideo,
                        getLabel: j.content,
                        items: [O.report_username, O.violence, O.abusive, O.cheating, O.scam, O.inappropriateContent, O.evasion, O.impersonation, O.underage, O.bitsViolation],
                        type: S.MultipleChoice,
                        value: "video general report reason"
                    }
                },
                P = {
                    content: {
                        getTitle: x.reportMessage,
                        getLabel: j.contentGeneral,
                        items: [O.revealPersonalInfo, O.evasion, O.spam, O.maliciousRaid, O.report_username, O.messaging_general, O.selfharm],
                        type: S.MultipleChoice,
                        value: "message report reason"
                    },
                    general: {
                        getTitle: x.reportMessage,
                        getLabel: j.content,
                        items: [O.report_emotes, O.violence, O.abusive, O.inappropriateContent, O.impersonation, O.underage, O.bitsViolation],
                        type: S.MultipleChoice,
                        value: "message general report reason"
                    }
                },
                F = r.__assign({}, P.content, {
                    getDescription: function() {
                        return Object(l.d)("Please note that we may review additional messages in this conversation to determine the context of your report.", "ReportModalWizard")
                    }
                }),
                W = {
                    content: {
                        getTitle: x.reportProfile,
                        getLabel: j.contentGeneral,
                        items: [O.revealPersonalInfo, O.inappropriateBadge, O.inappropriateExtension, O.noModeration, O.profile_general, O.report_ip, O.violateDevAgreement, O.selfharm],
                        type: S.MultipleChoice,
                        value: "profile report reason"
                    },
                    general: {
                        getTitle: x.reportProfile,
                        getLabel: j.content,
                        items: [O.report_username, O.violence, O.abusive, O.scam, O.inappropriateContent, O.evasion, O.impersonation, O.underage, O.bitsViolation],
                        type: S.MultipleChoice,
                        value: "profile general report reason"
                    }
                },
                B = {
                    getTitle: function(e) {
                        return Object(l.d)("Report {username}'s Room", {
                            username: e
                        }, "ReportModalWizard")
                    },
                    getLabel: j.identifyUser,
                    items: [O.report_channelOwner, O.report_member],
                    value: "room report user",
                    type: S.MultipleChoice
                },
                z = {
                    getTitle: x.tellUsMore,
                    items: [O.input_description],
                    type: S.Confirm,
                    value: "tell us more"
                },
                L = {
                    banEvasion: r.__assign({}, z, {
                        items: [O.input_usernames, O.input_description],
                        value: "ban evasion tell us more"
                    }),
                    socialMedia: r.__assign({}, z, {
                        items: [O.input_link, O.input_connection, O.input_description],
                        nextCard: I.socialMedia,
                        value: "social media tell us more"
                    })
                },
                V = {
                    content: {
                        getTitle: x.reportAbusive,
                        getLabel: j.relevantStatements,
                        items: [O.hateSpeech, O.harassment, O.abusiveViolence, O.commitingViolence, O.swatting, O.personalInfo],
                        type: S.MultipleChoice,
                        value: "abuse type"
                    },
                    violence: {
                        getTitle: function(e) {
                            return Object(l.d)("Report {username} for Violence or Threats", {
                                username: e
                            }, "ReportModalWizard")
                        },
                        getLabel: function() {
                            return Object(l.d)("Are the threats or actions directed at you or someone else?", "ReportModalWizard")
                        },
                        items: [O.threat_me, O.threat_person, O.threat_group, O.threat_selfharm],
                        type: S.MultipleChoice,
                        value: "violence type"
                    }
                },
                X = {
                    identifyLocation: {
                        getTitle: function(e) {
                            return Object(l.d)("Report {username} for something else...", {
                                username: e
                            }, "ReportModalWizard")
                        },
                        getLabel: function() {
                            return Object(l.d)("Where did the problem happen?", "ReportModalWizard")
                        },
                        items: [O.location_onTwitch, O.location_anotherSite, O.location_TwitchEvent],
                        type: S.MultipleChoice,
                        value: "off-site conduct location"
                    },
                    externalSite: {
                        getTitle: function(e) {
                            return Object(l.d)("Report {username}'s Conduct on Another Site or Service", {
                                username: e
                            }, "ReportModalWizard")
                        },
                        getLabel: j.thisPersonIs,
                        getDescription: function() {
                            return Object(l.d)("Please note that incidents reported through this form must involve Twitch community members. If possible, please submit a report to the site or service where the incident occurred as well.", "ReportModalWizard")
                        },
                        items: [O.external_incitingRaids, O.external_threatening, O.external_harassment],
                        type: S.MultipleChoice,
                        nextCard: L.socialMedia,
                        value: "external site conduct"
                    },
                    external_violence: r.__assign({}, V.violence, {
                        items: [O.threat_me, O.threat_person, O.threat_group],
                        nextCard: L.socialMedia
                    }),
                    external_abusive: r.__assign({}, V.content, {
                        items: [O.hateSpeech, O.harassment, O.external_abusiveViolence, O.external_commitingViolence, O.swatting, O.personalInfo],
                        nextCard: L.socialMedia
                    })
                },
                H = {
                    getTitle: function(e) {
                        return Object(l.d)("Report {username}'s Spam or Malicious Links", {
                            username: e
                        }, "ReportModalWizard")
                    },
                    getLabel: j.contentGeneral,
                    items: [O.spam_bot, O.spam_scam, O.spam_repeated],
                    type: S.MultipleChoice,
                    value: "spam type"
                },
                q = {
                    getTitle: function(e) {
                        return Object(l.d)("Report {username} for Inappropriate Content", {
                            username: e
                        }, "ReportModalWizard")
                    },
                    getLabel: j.relevantStatements,
                    items: [O.inappropriate_game, O.gory, O.sexuallyViolent, O.childAnimal, O.pornographic, O.suggestive, O.nudity, O.other],
                    type: S.MultipleChoice,
                    value: "inappropriate content type"
                },
                G = {
                    getTitle: function(e) {
                        return Object(l.d)("Report {username} for Evading a Ban", {
                            username: e
                        }, "ReportModalWizard")
                    },
                    getLabel: function() {
                        return Object(l.d)("What kind of ban are they evading?", "ReportModalWizard")
                    },
                    value: "ban type",
                    items: [O.evasion_chat, O.evasion_sitewide, O.evasion_messaging],
                    type: S.MultipleChoice,
                    nextCard: L.banEvasion
                },
                $ = {
                    getTitle: function(e) {
                        return Object(l.d)("Report {username} for Impersonation", {
                            username: e
                        }, "ReportModalWizard")
                    },
                    getLabel: function() {
                        return Object(l.d)("Who is being impersonated?", "ReportModalWizard")
                    },
                    getDescription: function() {
                        return Object(l.d)("Parody, cosplay, and other portrayals without the intent to deceive or defraud are allowed under Twitch's Community Guidelines. If you would still like to submit a report, please continue.", "ReportModalWizard")
                    },
                    items: [O.impersonation_me, O.impersonation_brand, O.impersonation_other],
                    type: S.MultipleChoice,
                    value: "impersonation type"
                },
                Q = A,
                J = z,
                Y = D,
                K = {
                    video: U.identifyUser,
                    whisper: F,
                    chat: P.content,
                    profile: W.content,
                    room: B,
                    "somewhere else": X.identifyLocation,
                    streamer: U.content,
                    "someone else in video": U.content,
                    "someone in chat": P.content,
                    general_video: U.general,
                    general_messaging: P.general,
                    general_profile: W.general,
                    "channel owner": W.content,
                    "community member": P.content,
                    "on twitch": W.content,
                    "another site": X.externalSite,
                    "twitch event": I.twitchEvent,
                    "brigading/raids": L.socialMedia,
                    threatening: X.external_violence,
                    "hateful/harassing": X.external_abusive,
                    "external site; threatening violence": X.external_violence,
                    "external site; committing violence": X.external_violence,
                    "external site; scam": L.socialMedia,
                    "ban evasion": G,
                    spam: H,
                    hateful: V.content,
                    impersonation: $,
                    "violence/threats": V.violence,
                    "threatening violence": V.violence,
                    "committing violence": V.violence,
                    abusive: V.content,
                    "inappropriate content": q,
                    "intellectual property": I.legal,
                    "violating developer agreement": I.legal
                },
                Z = {
                    selfharm: I.selfharm,
                    harm: I.violence,
                    other: Y
                },
                ee = {
                    CHANNEL_FEED_POST_REPORT: W.content,
                    COMMUNITY_REPORT: W.content,
                    CHAT_REPORT: P.content,
                    CLIP_REPORT: U.content,
                    EVENT_REPORT: W.content,
                    EXTENSION_REPORT: W.content,
                    LIVE_UP_REPORT: W.content,
                    ROOM_REPORT: B,
                    WHISPER_REPORT: F,
                    VOD_COMMENT_REPORT: P.content
                },
                te = "report-wizard-back",
                ne = "report-wizard-close",
                oe = "report-wizard-next",
                re = "report-wizard-submit",
                ie = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            currentCard: t.props.currentCard || ee[t.props.reportContentType] || Q,
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
                            return i.createElement(f.Xa, {
                                margin: {
                                    top: 1
                                }
                            }, i.createElement(f.W, null, Object(l.d)("We are going to ask you a few questions to help us investigate your report quickly and accurately.", "ReportModalWizard")))
                        }, t.renderButtons = function() {
                            var e = Object(l.d)("Close", "ReportModalWizard"),
                                n = t.handleClose,
                                o = ne,
                                r = !1,
                                a = t.state.prevCards.length ? t.renderBack() : null;
                            switch (t.state.currentCard.type) {
                                case S.MultipleChoice:
                                    e = Object(l.d)("Next", "ReportModalWizard"), n = t.handleNext, o = oe, r = !t.state.currentSelection;
                                    break;
                                case S.Confirm:
                                    e = Object(l.d)("Submit Report", "ReportModalWizard"), n = t.handleSubmit, r = !t.state.userTextInput, o = re
                            }
                            return i.createElement(f.Xa, null, a, i.createElement(f.z, {
                                onClick: n,
                                disabled: r,
                                "data-test-selector": o
                            }, i.createElement(f.Xa, {
                                padding: {
                                    x: 1
                                }
                            }, e)))
                        }, t.renderBack = function() {
                            return i.createElement(f.Xa, {
                                margin: {
                                    right: 1
                                },
                                display: f.X.InlineBlock
                            }, i.createElement(f.z, {
                                type: f.F.Hollow,
                                onClick: t.handleBack,
                                "data-test-selector": te
                            }, i.createElement(f.Xa, {
                                padding: {
                                    x: 1
                                }
                            }, Object(l.d)("Back", "ReportModalWizard"))))
                        }, t.getTitle = function() {
                            return t.state.currentCard.getTitle && t.props.targetUser.displayName && t.props.targetUser.id ? t.state.targetUnknown ? t.state.currentCard.getTitle(Object(l.d)("Another User", "ReportModalWizard")) : t.state.currentCard.getTitle(t.props.targetUser.displayName) : t.state.targetUnknown ? Object(l.d)("Report User", "ReportModalWizard") : t.props.title
                        }, t.handleClose = function() {
                            t.setState({
                                modalCloseTracked: !0
                            }, function() {
                                return t.props.trackClose(M.Finish, t.state.currentCard.value)
                            }), t.props.onClose()
                        }, t.handleNext = function() {
                            if (t.state.currentSelection && t.state.currentSelection.value) {
                                var e = t.state.currentCard,
                                    n = t.state.prevCards.concat(e),
                                    o = t.state.prevSelections.concat(t.state.currentSelection),
                                    r = t.state.displacedSelections[t.state.displacedSelections.length - 1],
                                    i = t.state.currentSelection.differentTarget || t.state.targetUnknown,
                                    a = t.state.currentSelection.reportContext || t.state.reportContext,
                                    s = e.nextCard || J;
                                K[t.state.currentSelection.value] && (s = K[t.state.currentSelection.value]);
                                var l = t.state.currentSelection.reportReason || t.state.reportReason,
                                    d = s.type === S.Info;
                                t.setState({
                                    currentCard: s,
                                    reportReason: l,
                                    prevCards: d ? [] : n,
                                    prevSelections: o,
                                    targetUnknown: i,
                                    currentSelection: r || null,
                                    displacedSelections: t.state.displacedSelections.slice(0, -1),
                                    reportContext: a
                                }, function() {
                                    return t.trackNavigation(w.Next, e.value)
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
                            return r.__awaiter(t, void 0, void 0, function() {
                                var e, t, n, o, i = this;
                                return r.__generator(this, function(r) {
                                    switch (r.label) {
                                        case 0:
                                            return e = Object(l.d)("Additional information is required.", "ReportModalWizard"), this.requiredInputsNonEmpty() ? (t = this.state.reportReason || "other", n = this.createReportDescription(), [4, this.props.onSubmit(t, n, this.state.reportContext)]) : [3, 2];
                                        case 1:
                                            switch (r.sent(), this.props.submitStatus) {
                                                case T.a.FormError:
                                                    this.setState({
                                                        error: e
                                                    });
                                                    break;
                                                case T.a.Success:
                                                    o = Y, Z[t] && (o = Z[t]), this.state.currentCard.nextCard && (o = this.state.currentCard.nextCard), this.setState({
                                                        currentCard: o,
                                                        prevCards: [],
                                                        prevSelections: [],
                                                        currentSelection: null,
                                                        displacedSelections: [],
                                                        userTextInput: {},
                                                        error: ""
                                                    }, function() {
                                                        return i.trackNavigation(w.Submit)
                                                    });
                                                    break;
                                                case T.a.UserError:
                                                    this.setState({
                                                        error: Object(l.d)("This account could not be reported. It may have already been suspended, or the owner may have deleted it.", "ReportModalWizard")
                                                    });
                                                    break;
                                                case T.a.MutationError:
                                                default:
                                                    this.setState({
                                                        error: Object(l.d)("Sorry, a network error occurred when submitting your report. Please try again later.", "ReportModalWizard")
                                                    })
                                            }
                                            return [3, 3];
                                        case 2:
                                            this.props.onError(T.a.FormError), this.setState({
                                                error: e
                                            }), r.label = 3;
                                        case 3:
                                            return [2]
                                    }
                                })
                            })
                        }, t.handleBack = function() {
                            return r.__awaiter(t, void 0, void 0, function() {
                                var e, t, n, o, i, a = this;
                                return r.__generator(this, function(r) {
                                    return e = this.state.currentCard, t = this.state.prevCards[this.state.prevCards.length - 1], n = this.state.prevSelections[this.state.prevSelections.length - 1], o = !n.differentTarget && this.state.targetUnknown, i = this.state.displacedSelections, this.state.currentSelection && (i = i.concat(this.state.currentSelection)), t && n && this.setState({
                                        currentCard: t,
                                        currentSelection: n,
                                        displacedSelections: i,
                                        prevCards: this.state.prevCards.slice(0, -1),
                                        prevSelections: this.state.prevSelections.slice(0, -1),
                                        error: "",
                                        targetUnknown: o
                                    }, function() {
                                        return a.trackNavigation(w.Back, e.value)
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
                        }, t.trackNavigation = function(e, n) {
                            t.props.trackAction(e, n, t.state.currentCard.value)
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.componentWillUnmount = function() {
                        this.state.modalCloseTracked || this.props.trackClose(M.Close, this.state.currentCard.value)
                    }, t.prototype.render = function() {
                        var e = this.state.currentCard.type === S.Info && this.state.currentCard.blockPrompt ? i.createElement(y, {
                                targetUser: this.props.targetUser,
                                onBlock: this.props.onBlock,
                                onUnblock: this.props.onUnblock,
                                userBlocked: this.props.userBlocked
                            }) : null,
                            t = this.state.error ? i.createElement(f.Bb, {
                                fullWidth: !0,
                                margin: {
                                    bottom: 1
                                },
                                padding: 1,
                                className: "reporting__error-container"
                            }, this.state.error) : null,
                            n = this.state.prevCards.length || this.state.currentCard.type === S.Info ? null : this.renderPrimer();
                        return i.createElement(f.Bb, {
                            className: "reporting-wizard",
                            display: f.X.Flex,
                            margin: {
                                x: 1
                            },
                            flexDirection: f.Aa.Column,
                            fullHeight: !0,
                            "data-test-card-value": this.state.currentCard.value
                        }, t, i.createElement(f.W, {
                            bold: !0,
                            fontSize: f.Ca.Size4
                        }, this.getTitle()), n, i.createElement(f.Xa, {
                            margin: {
                                y: 1
                            }
                        }, i.createElement(N, {
                            currentCard: this.state.currentCard,
                            currentSelection: this.state.currentSelection,
                            targetUser: this.props.targetUser,
                            targetUserID: this.props.targetUser.id,
                            onChangeRadio: this.handleSelection,
                            onChangeText: this.handleTextInput,
                            userTextInputs: this.state.userTextInput,
                            error: this.props.submitStatus === T.a.FormError && !!this.state.error
                        }), e), this.renderButtons())
                    }, t
                }(i.Component),
                ae = n("s8Ou"),
                se = n("0hI/");
            n.d(t, "c", function() {
                    return w
                }), n.d(t, "a", function() {
                    return M
                }), n.d(t, "b", function() {
                    return de
                }),
                function(e) {
                    e.Close = "close", e.Open = "open", e.Submit = "submit_report", e.ToggleSettings = "modal_settings"
                }(_ || (_ = {})),
                function(e) {
                    e.Back = "back", e.Close = "close", e.Open = "open", e.Next = "next", e.Submit = "submit_report", e.ToggleSettings = "modal_settings"
                }(w || (w = {})),
                function(e) {
                    e.Close = "close", e.Finish = "finish"
                }(M || (M = {}));
            var le = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    n.handleSubmit = function(e, t, o) {
                        return r.__awaiter(n, void 0, void 0, function() {
                            var n, i, a, s = this;
                            return r.__generator(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        if (n = o === E.a.Whisper ? o : this.props.reportContext.contentType, null === (i = {
                                                description: t,
                                                reason: e,
                                                content: n,
                                                contentID: this.props.reportContext.contentID,
                                                extra: this.props.reportContext.extra,
                                                targetID: this.props.data.targetUser.id
                                            }).targetID) return this.setState({
                                            submitStatus: T.a.UserError
                                        }), [2];
                                        r.label = 1;
                                    case 1:
                                        return r.trys.push([1, 3, , 4]), [4, this.props.reportUser(Object(u.a)(i))];
                                    case 2:
                                        return r.sent(), this.setState({
                                            submitStatus: T.a.Success
                                        }, function() {
                                            s.state.showWizard || s.trackAction(_.Submit)
                                        }), [3, 4];
                                    case 3:
                                        return a = r.sent(), l.k.error(a, "ReportUser Mutation failed."), this.setState({
                                            submitStatus: T.a.MutationError
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
                        n.props.blockUserMutation(n.props.data.targetUser.id, void 0, void 0, r.__assign({}, n.props.sessionUser, {
                            __typename: "User"
                        })), n.setState({
                            userBlocked: !0
                        })
                    }, n.onUnblock = function() {
                        n.props.unblockUserMutation(n.props.data.targetUser.id, r.__assign({}, n.props.sessionUser, {
                            __typename: "User"
                        })), n.setState({
                            userBlocked: !1
                        })
                    }, n.trackOpen = function(e) {
                        n.state.openEventSent || (n.state.showWizard ? n.trackWizardAction(w.Open, void 0, e) : n.trackAction(_.Open), n.setState({
                            openEventSent: !0
                        }))
                    }, n.trackClose = function(e, t) {
                        n.state.closeEventSent || (n.state.showWizard ? n.trackWizardAction(w.Close, t, void 0, e) : n.trackAction(_.Close), n.setState({
                            closeEventSent: !0
                        }))
                    }, n.trackWizardAction = function(e, t, o, r) {
                        l.p.tracking.track(g.SpadeEventType.ReportWizardFlowAction, {
                            ui_context: n.props.reportContext.contentType,
                            target_user_id: n.props.reportContext.targetUserID,
                            report_sent: n.state.submitStatus === T.a.Success,
                            modal_type: "wizard_v1",
                            extra_user_id: n.props.reportContext.additionalTrackingID,
                            action: e,
                            close_type: r,
                            report_session_id: n.reportID,
                            current_step: t,
                            navigated_to: o
                        })
                    }, n.trackAction = function(e) {
                        l.p.tracking.track(g.SpadeEventType.ReportFlowAction, {
                            ui_context: n.props.reportContext.contentType,
                            target_user_id: n.props.reportContext.targetUserID,
                            report_sent: n.state.submitStatus === T.a.Success,
                            extra_user_id: n.props.reportContext.additionalTrackingID,
                            action: e,
                            report_session_id: n.reportID
                        })
                    }, n.reportID = Object(p.a)();
                    var o = l.p.experiments.getAssignment(h.b.NewReportingWizard);
                    return n.state = {
                        submitStatus: T.a.Unsubmitted,
                        showWizard: "yes" === o,
                        openEventSent: !1,
                        closeEventSent: !1,
                        userBlocked: !1
                    }, n
                }
                return r.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.trackOpen()
                }, t.prototype.componentWillUnmount = function() {
                    this.handleClose(), this.state.showWizard || this.trackClose()
                }, t.prototype.render = function() {
                    if (this.props.data.error) return i.createElement(f.Xa, {
                        margin: {
                            bottom: 1
                        }
                    }, i.createElement(f.W, {
                        fontSize: f.Ca.Size5
                    }, Object(l.d)("There was an unexpected error. Please refresh the page and try again", "ReportUser")));
                    if (this.props.data.loading) return i.createElement(f.gb, {
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
                        return this.state.showWizard ? this.props.data.loading ? i.createElement(f.Za, null) : i.createElement(ie, r.__assign({}, e, {
                            user: this.props.sessionUser,
                            onBlock: this.onBlock,
                            onUnblock: this.onUnblock,
                            targetUser: this.props.data.targetUser,
                            trackAction: this.trackWizardAction,
                            trackClose: this.trackClose,
                            userBlocked: this.userBlocked
                        })) : i.createElement(T.b, r.__assign({}, e, {
                            targetUser: this.props.data.targetUser
                        }))
                    }
                    return i.createElement(f.Xa, {
                        margin: {
                            bottom: 1
                        }
                    }, i.createElement(f.W, {
                        fontSize: f.Ca.Size5
                    }, Object(l.d)("The user you are trying to report does not exist", "ReportUser")))
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
            }(i.Component);
            var de = Object(s.compose)(Object(d.a)(ae, {
                name: "reportUser"
            }), Object(d.a)(se, {
                options: function(e) {
                    return {
                        variables: {
                            targetUserID: e.reportContext.targetUserID
                        }
                    }
                }
            }), Object(v.b)("ReportUser", {
                autoReportInteractive: !0
            }), Object(c.a)(), Object(m.a)(), Object(a.connect)(function(e) {
                return {
                    sessionUser: e.session.user
                }
            }, null))(le)
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
                return d
            }), n.d(t, "g", function() {
                return c
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

            function d(e) {
                return e.length <= r && e.length >= i
            }

            function c(e) {
                return e.length <= a
            }
        },
        eO4L: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "RoomPickerOption"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "channelID"
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
                    }, {
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "userID"
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
                    }, {
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "roomID"
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
                                value: "chatRoomBanStatus"
                            },
                            arguments: [{
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "channelID"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "channelID"
                                    }
                                }
                            }, {
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "userID"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "userID"
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
                                        value: "isPermanent"
                                    },
                                    arguments: [],
                                    directives: []
                                }]
                            }
                        }, {
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
                                        value: "roomID"
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
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "isUnread"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "unreadMentionCount"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
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
                    end: 313
                }
            };
            n.loc.source = {
                body: "query RoomPickerOption ($channelID: ID! $userID: ID! $roomID: ID!) {\nchatRoomBanStatus(channelID: $channelID userID: $userID) {\nisPermanent\n}\nroom(id: $roomID) {\nid\nisPreviewable\nminimumAllowedRole\nowner {\nid\nself {\nisChannelMember\n}\n}\nself {\nisMuted\nisUnread\nunreadMentionCount\npermissions {\nsendMessages\n}\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        "ep4/": function(e, t, n) {},
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
        jHfU: function(e, t, n) {
            e.exports = n.p + "assets/empty_state-b5883e957cd574b6630a.png"
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
        rayB: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "LeaveRoomsPrompt"
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
                                        value: "displayName"
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
                }],
                loc: {
                    start: 0,
                    end: 94
                }
            };
            n.loc.source = {
                body: "query LeaveRoomsPrompt($id: ID!) {\nuser(id: $id) {\nid\ndisplayName\nself {\nisChannelMember\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
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
                d = n("mrSG"),
                c = n("q1tI"),
                m = n("/7QA"),
                u = n("yR8l"),
                p = n("geRD"),
                h = n("oJmH"),
                g = n("cZKs"),
                v = n("Ue10"),
                b = n("TMB/"),
                f = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.deleteRoom = function() {
                            t.props.deleteRoom(Object(p.a)({
                                roomID: t.props.roomID
                            })), t.props.onCloseModal()
                        }, t
                    }
                    return d.__extends(t, e), t.prototype.render = function() {
                        return c.createElement(v.Bb, {
                            background: v.r.Base,
                            className: "delete-room-modal",
                            position: v.hb.Relative
                        }, c.createElement(v.Xa, {
                            padding: 2,
                            margin: {
                                top: 1
                            }
                        }, c.createElement(v.Xa, {
                            margin: {
                                bottom: 2
                            }
                        }, c.createElement(v.W, {
                            type: v.Rb.H4
                        }, Object(m.d)("Delete #{roomName}?", {
                            roomName: this.props.roomName
                        }, "DeleteRoomModal")), c.createElement(v.Xa, {
                            padding: {
                                top: 1
                            }
                        }, c.createElement(v.W, {
                            type: v.Rb.Span,
                            color: v.O.Alt2
                        }, Object(m.d)("This will remove all messages in this room permanently from your channel", "DeleteRoomModal")))), c.createElement(v.Xa, {
                            padding: {
                                top: 2
                            },
                            textAlign: v.Nb.Right
                        }, c.createElement(v.Xa, {
                            display: v.X.Inline,
                            margin: {
                                right: .5
                            }
                        }, c.createElement(v.z, {
                            type: v.F.Hollow,
                            onClick: this.props.onCloseModal,
                            "data-test-selector": "cancel-button"
                        }, Object(m.d)("No, keep this room", "DeleteRoomModal"))), c.createElement(v.Xa, {
                            display: v.X.Inline,
                            margin: {
                                left: .5
                            }
                        }, c.createElement(v.z, {
                            onClick: this.deleteRoom,
                            "data-test-selector": "confirm-button",
                            type: v.F.Alert
                        }, Object(m.d)("Yes, delete this room", "DeleteRoomModal"))))), c.createElement(g.a, {
                            closeOnBackdropClick: !0
                        }))
                    }, t
                }(c.Component),
                k = Object(h.compose)(Object(u.a)(b, {
                    name: "deleteRoom"
                }))(f);
            var R = Object(o.connect)(null, function(e) {
                    return Object(r.bindActionCreators)({
                        onCloseModal: a.c
                    }, e)
                })(k),
                y = n("9Vxt"),
                E = n("20fZ"),
                S = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.toggleMuteSetting = function() {
                            return d.__awaiter(t, void 0, void 0, function() {
                                var e, t, n, o;
                                return d.__generator(this, function(r) {
                                    switch (r.label) {
                                        case 0:
                                            return e = this.props.data.room.self.isMuted, t = d.__assign({}, Object(p.a)({
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
                                            }, Object(p.e)(y, {
                                                id: this.props.roomID
                                            }, o), [2]
                                    }
                                })
                            })
                        }, t
                    }
                    return d.__extends(t, e), t.prototype.render = function() {
                        if (this.props.data.loading) return c.createElement(v.gb, {
                            height: 30,
                            width: 160
                        });
                        if (this.props.data.error || !this.props.data.room.owner.self.isChannelMember) return null;
                        var e = Object(m.d)("Mute all notifications", "MuteButton");
                        return this.props.data.room.self.isMuted && (e = Object(m.d)("Unmute all notifications", "MuteButton")), c.createElement(v.Ua, {
                            type: v.Va.Alpha,
                            "data-test-selector": "mute-room-button",
                            onClick: this.toggleMuteSetting
                        }, c.createElement(v.Bb, {
                            padding: {
                                y: .5,
                                x: 1
                            },
                            margin: {
                                x: .5
                            }
                        }, e))
                    }, t = d.__decorate([Object(u.a)(y, {
                        options: function(e) {
                            return {
                                variables: {
                                    id: e.roomID
                                }
                            }
                        }
                    }), Object(u.a)(E, {
                        name: "muteRoom"
                    })], t)
                }(c.Component),
                C = n("9C/b"),
                O = n("/HY+"),
                N = n("4qQ0"),
                T = n("Gf3K"),
                _ = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.openReportModal = function() {
                            t.props.isLoggedIn ? t.props.onShowModal(O.a, {
                                reportContext: {
                                    contentID: t.props.roomID,
                                    contentType: N.a.Room,
                                    targetUserID: t.props.data.room.owner.id
                                },
                                title: Object(m.d)("Report {roomName}", {
                                    roomName: t.props.data.room.name
                                }, "ReportRoomButton")
                            }) : t.props.login()
                        }, t
                    }
                    return d.__extends(t, e), t.prototype.render = function() {
                        return this.props.data.loading ? c.createElement(v.gb, null) : this.props.data.error ? c.createElement(v.Xa, null) : c.createElement(v.Ua, {
                            type: v.Va.Alert,
                            "data-test-selector": "report-room-button-selector",
                            onClick: this.openReportModal
                        }, c.createElement(v.Bb, {
                            padding: {
                                y: .5,
                                x: 1
                            },
                            margin: {
                                x: .5
                            }
                        }, Object(m.d)("Report", "RoomReportButton")))
                    }, t = d.__decorate([Object(u.a)(T, {
                        options: function(e) {
                            return {
                                variables: {
                                    id: e.roomID
                                }
                            }
                        }
                    })], t)
                }(c.Component),
                w = Object(C.a)(_),
                M = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onRoomNameChange = function(e) {
                            t.props.updateRoomName(e.target.value)
                        }, t.onRoomTopicChange = function(e) {
                            t.props.updateRoomTopic && t.props.updateRoomTopic(e.target.value)
                        }, t
                    }
                    return d.__extends(t, e), t.prototype.render = function() {
                        return c.createElement(v.Xa, null, c.createElement(v.Ea, {
                            label: Object(m.d)("Room name", "RoomLabelsEditor"),
                            error: !!this.props.editRoomNameError,
                            errorMessage: this.props.editRoomNameError
                        }, c.createElement(v.Ra, {
                            type: v.Ta.Text,
                            value: this.props.roomName,
                            onChange: this.onRoomNameChange,
                            "data-test-selector": "name-input",
                            placeholder: Object(m.d)("Enter Room name here", "RoomLabelsEditor")
                        })), this.renderRoomTopicEditor())
                    }, t.prototype.renderRoomTopicEditor = function() {
                        if (void 0 !== this.props.roomTopic) return c.createElement(v.Xa, null, c.createElement(v.Bb, {
                            fullWidth: !0,
                            margin: {
                                top: 1,
                                bottom: 1
                            }
                        }), c.createElement(v.Ea, {
                            label: Object(m.d)("Room topic", "RoomLabelsEditor"),
                            error: !!this.props.editRoomTopicError,
                            errorMessage: this.props.editRoomTopicError
                        }, c.createElement(v.Ob, {
                            noResize: !0,
                            value: this.props.roomTopic,
                            onChange: this.onRoomTopicChange,
                            error: !!this.props.editRoomTopicError,
                            "data-test-selector": "topic-input",
                            placeholder: Object(m.d)("What do you want your community to talk about in this room?", "RoomLabelsEditor")
                        })))
                    }, t
                }(c.Component),
                j = n("2j4q"),
                x = n("vcHY"),
                D = n("UJc8"),
                I = n("drmE"),
                A = n("vznD"),
                U = (n("zgDu"), n("jhcA")),
                P = {
                    OPTIONS: "OPTIONS",
                    PERMISSIONS: "PERMISSIONS",
                    LABELS: "LABELS"
                },
                F = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            currentView: P.OPTIONS,
                            isSaveButtonStateSuccess: !1
                        }, t.updatePermissions = function(e) {
                            t.setState({
                                updatedPermissions: e,
                                isSaveButtonStateSuccess: !1
                            })
                        }, t.updateRoomName = function(e) {
                            var n;
                            if (e = e.toLowerCase(), Object(I.d)(e)) {
                                if (Object(I.f)(e)) {
                                    var o = {
                                        maxChars: I.a,
                                        minChars: I.c
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
                            if (!Object(I.g)(e)) {
                                var o = {
                                    maxChars: I.b
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
                                currentView: P.OPTIONS,
                                isSaveButtonStateSuccess: !1,
                                updatedRoomName: void 0,
                                updatedRoomTopic: void 0,
                                updatedPermissions: void 0
                            })
                        }, t.setPermissionsView = function() {
                            t.setState({
                                currentView: P.PERMISSIONS,
                                isSaveButtonStateSuccess: !1
                            })
                        }, t.setLabelsView = function() {
                            t.setState({
                                currentView: P.LABELS,
                                isSaveButtonStateSuccess: !1
                            })
                        }, t.saveUpdate = function() {
                            if (void 0 !== t.state.updatedRoomName || void 0 !== t.state.updatedRoomTopic || void 0 !== t.state.updatedPermissions)
                                if (t.state.updatedRoomName && !Object(I.e)(t.state.updatedRoomName)) {
                                    var e = {
                                            maxChars: I.a,
                                            minChars: I.c
                                        },
                                        n = Object(x.a)("NAME_LENGTH_INVALID", e);
                                    t.setState({
                                        editRoomNameError: n
                                    })
                                } else if (t.state.updatedRoomTopic && !Object(I.g)(t.state.updatedRoomTopic)) {
                                e = {
                                    maxChars: I.b
                                }, n = Object(x.a)("TOPIC_LENGTH_INVALID", e);
                                t.setState({
                                    editRoomTopicError: n
                                })
                            } else {
                                var o = d.__assign({
                                    roomID: t.props.roomID,
                                    name: t.state.updatedRoomName,
                                    topic: t.state.updatedRoomTopic
                                }, t.state.updatedPermissions);
                                t.props.updateRoom(Object(p.a)(o)).then(function(e) {
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
                                        Object(p.e)(A, {
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
                            t.props.onShowModal(R, {
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
                    return d.__extends(t, e), t.prototype.render = function() {
                        if (this.props.data.loading) return c.createElement(v.gb, null);
                        if (this.props.data.error || !this.props.data.room) return c.createElement(v.Xa, null);
                        var e;
                        switch (this.state.currentView) {
                            case P.OPTIONS:
                                e = this.getOptionsView();
                                break;
                            case P.PERMISSIONS:
                                e = this.getPermissionsView();
                                break;
                            case P.LABELS:
                                e = this.getLabelsView();
                                break;
                            default:
                                e = this.getOptionsView()
                        }
                        return c.createElement(v.Xa, null, e)
                    }, t.prototype.getOptionsView = function() {
                        return this.props.sessionUser && this.props.sessionUser.id.toString() === this.props.data.room.owner.id ? this.getBroadcasterOptionsView() : this.getNonBroadcasterOptionsView()
                    }, t.prototype.getBroadcasterOptionsView = function() {
                        return c.createElement(v.Xa, {
                            padding: {
                                y: .5
                            }
                        }, this.getEditLabelsSection(), c.createElement(v.Pa, null, c.createElement(v.Xa, {
                            display: v.X.Flex
                        }, c.createElement(v.Ua, {
                            type: v.Va.Alpha,
                            onClick: this.setPermissionsView,
                            "data-test-selector": "permissions-toggle"
                        }, c.createElement(v.Bb, {
                            padding: {
                                y: .5,
                                x: 1
                            },
                            margin: {
                                left: .5
                            },
                            display: v.X.Flex,
                            justifyContent: v.Wa.Between
                        }, Object(m.d)("Permissions", "RoomDetails"), c.createElement(v.Xa, {
                            display: v.X.Flex
                        }, c.createElement(v.W, {
                            color: v.O.Alt2
                        }, D.a[this.props.data.room.minimumAllowedRole]), c.createElement(v.Bb, {
                            className: "room-details__open-edit",
                            color: v.O.Link,
                            margin: {
                                left: .5
                            }
                        }, c.createElement(v.qb, {
                            asset: v.rb.GlyphArrDown,
                            height: 13
                        }))))))), c.createElement(v.Ua, {
                            type: v.Va.Alert,
                            onClick: this.openDeleteRoomModal,
                            "data-test-selector": "delete-button"
                        }, c.createElement(v.Bb, {
                            padding: {
                                y: .5,
                                x: 1
                            },
                            margin: {
                                left: .5
                            }
                        }, Object(m.d)("Delete", "RoomDetails"))), c.createElement(v.Xa, {
                            padding: {
                                x: 1
                            }
                        }, c.createElement(v.Bb, {
                            borderTop: !0,
                            margin: {
                                y: .5,
                                x: .5
                            }
                        })), c.createElement(S, {
                            roomID: this.props.roomID
                        }))
                    }, t.prototype.getNonBroadcasterOptionsView = function() {
                        return c.createElement(v.Xa, {
                            padding: {
                                y: .5
                            }
                        }, this.props.forActiveRoom && !!this.props.data.room.topic.length && c.createElement(v.Xa, {
                            padding: {
                                bottom: .5,
                                top: 1,
                                x: 1
                            },
                            margin: {
                                x: .5
                            }
                        }, c.createElement(v.W, {
                            className: "room-details__topic-description",
                            color: v.O.Alt2
                        }, this.props.data.room.topic), c.createElement(v.Bb, {
                            borderTop: !0,
                            fullWidth: !0,
                            margin: {
                                top: 1
                            }
                        })), this.props.data.room.owner.self.isChannelMember && c.createElement(S, {
                            roomID: this.props.roomID
                        }), c.createElement(w, {
                            roomID: this.props.roomID,
                            isLoggedIn: this.props.isLoggedIn,
                            login: this.props.login,
                            onShowModal: this.props.onShowModal
                        }))
                    }, t.prototype.getEditLabelsSection = function() {
                        var e = Object(m.d)("Edit name or topic", "RoomDetails");
                        this.props.forActiveRoom && (e = Object(m.d)("Edit name", "RoomDetails"));
                        var t = c.createElement(v.Pa, null, c.createElement(v.Ua, {
                            type: v.Va.Alpha,
                            onClick: this.setLabelsView,
                            "data-test-selector": "edit-labels"
                        }, c.createElement(v.Bb, {
                            padding: {
                                y: .5,
                                x: 1
                            },
                            margin: {
                                left: .5
                            },
                            display: v.X.Flex,
                            justifyContent: v.Wa.Between
                        }, e, c.createElement(v.Xa, {
                            display: v.X.Flex
                        }, c.createElement(v.Bb, {
                            className: "room-details__open-edit",
                            color: v.O.Link,
                            margin: {
                                left: .5
                            }
                        }, c.createElement(v.qb, {
                            asset: v.rb.GlyphArrDown,
                            height: 13
                        }))))));
                        return this.props.forActiveRoom ? c.createElement(v.Xa, null, c.createElement(v.Xa, {
                            padding: {
                                top: 1,
                                x: 1
                            },
                            margin: {
                                x: .5
                            }
                        }, c.createElement(v.Pa, {
                            position: v.hb.Relative
                        }, this.getTopicField()), !this.state.isTopicHovered && c.createElement(v.Bb, {
                            borderTop: !0,
                            fullWidth: !0,
                            margin: {
                                top: 1
                            }
                        })), c.createElement(v.Xa, {
                            padding: {
                                top: .5
                            }
                        }, t)) : t
                    }, t.prototype.getLabelsView = function() {
                        var e = void 0 !== this.state.updatedRoomName ? this.state.updatedRoomName : this.props.data.room.name,
                            t = void 0 !== this.state.updatedRoomTopic ? this.state.updatedRoomTopic : this.props.data.room.topic,
                            n = Object(m.d)("Edit name or topic", "RoomDetailsReturn");
                        return this.props.forActiveRoom && (n = Object(m.d)("Edit name", "RoomDetailsReturn")), c.createElement(v.Xa, null, c.createElement(v.Pa, null, c.createElement(v.Xa, {
                            display: v.X.Flex,
                            padding: {
                                y: .5
                            }
                        }, c.createElement(v.Ua, {
                            type: v.Va.Alpha,
                            onClick: this.setOptionsView
                        }, c.createElement(v.Bb, {
                            padding: {
                                y: .5
                            },
                            margin: {
                                left: 1
                            },
                            display: v.X.Flex
                        }, c.createElement(v.Bb, {
                            className: "room-details__close-edit",
                            color: v.O.Link,
                            margin: {
                                right: 1
                            }
                        }, c.createElement(v.qb, {
                            asset: v.rb.GlyphArrDown,
                            height: 13
                        })), n)))), c.createElement(v.Xa, {
                            padding: {
                                x: .5
                            }
                        }, c.createElement(v.Bb, {
                            borderTop: !0,
                            margin: {
                                x: 1
                            }
                        })), c.createElement(v.Xa, {
                            padding: {
                                x: 1,
                                y: 1
                            },
                            margin: {
                                x: .5
                            }
                        }, c.createElement(M, {
                            editRoomNameError: this.state.editRoomNameError,
                            editRoomTopicError: this.props.forActiveRoom ? void 0 : this.state.editRoomTopicError,
                            roomName: e,
                            updateRoomName: this.updateRoomName,
                            roomTopic: this.props.forActiveRoom ? void 0 : t,
                            updateRoomTopic: this.updateRoomTopic
                        })), c.createElement(v.Bb, {
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
                        return c.createElement(v.Xa, null, c.createElement(v.Pa, null, c.createElement(v.Xa, {
                            display: v.X.Flex,
                            padding: {
                                y: .5
                            }
                        }, c.createElement(v.Ua, {
                            type: v.Va.Alpha,
                            onClick: this.setOptionsView
                        }, c.createElement(v.Bb, {
                            padding: {
                                y: .5
                            },
                            margin: {
                                left: 1
                            },
                            display: v.X.Flex
                        }, c.createElement(v.Bb, {
                            className: "room-details__close-edit",
                            color: v.O.Link,
                            margin: {
                                right: 1
                            }
                        }, c.createElement(v.qb, {
                            asset: v.rb.GlyphArrDown,
                            height: 13
                        })), Object(m.d)("Permissions", "RoomDetailsReturn"))))), c.createElement(v.Xa, {
                            padding: {
                                x: .5
                            }
                        }, c.createElement(v.Bb, {
                            borderTop: !0,
                            margin: {
                                x: 1
                            }
                        })), c.createElement(j.a, {
                            isPreviewable: this.props.data.room.isPreviewable,
                            minimumAllowedRole: this.props.data.room.minimumAllowedRole,
                            updatePermissions: this.updatePermissions
                        }), c.createElement(v.Bb, {
                            margin: {
                                y: 1,
                                left: 1
                            },
                            padding: {
                                left: .5
                            }
                        }, this.getSaveButton()))
                    }, t.prototype.getSaveButton = function() {
                        return c.createElement(v.z, {
                            onClick: this.saveUpdate,
                            state: this.state.isSaveButtonStateSuccess ? v.E.Success : v.E.Default,
                            type: this.state.isSaveButtonStateSuccess ? v.F.Text : v.F.Default
                        }, Object(m.d)("Save", "RoomDetails"))
                    }, t.prototype.getTopicField = function() {
                        var e, t = void 0 === this.state.updatedRoomTopic ? this.props.data.room.topic : this.state.updatedRoomTopic,
                            n = Object(m.d)("What do you want your community to talk about in this room?", "RoomDetails");
                        return e = this.state.isTopicFocused ? c.createElement(v.Ob, {
                            autoFocus: !0,
                            noResize: !0,
                            onChange: this.onRoomTopicChange,
                            value: t,
                            placeholder: n
                        }) : c.createElement(v.W, {
                            className: "room-details__topic-description",
                            color: v.O.Alt2,
                            italic: !t
                        }, t || n, c.createElement(v.U, {
                            onClick: this.focusTopic
                        }, c.createElement(v.Xa, {
                            padding: {
                                left: .5
                            },
                            className: "room-details__edit-topic"
                        }, Object(m.d)("Edit", "RoomDetails")))), c.createElement("div", null, e, this.state.editRoomTopicError && c.createElement(v.W, {
                            color: v.O.Error
                        }, this.state.editRoomTopicError), this.state.isTopicFocused && c.createElement(v.Xa, {
                            display: v.X.Flex,
                            justifyContent: v.Wa.End
                        }, !this.state.isSaveButtonStateSuccess && c.createElement(v.Xa, {
                            padding: {
                                top: .5
                            }
                        }, c.createElement(v.z, {
                            onClick: this.blurTopic,
                            type: v.F.Text
                        }, Object(m.d)("Cancel", "RoomDetails"))), c.createElement(v.Xa, {
                            padding: {
                                top: .5,
                                left: 1
                            }
                        }, this.getSaveButton())))
                    }, t = d.__decorate([Object(u.a)(A, {
                        options: function(e) {
                            return {
                                variables: {
                                    id: e.roomID
                                }
                            }
                        }
                    }), Object(u.a)(U, {
                        name: "updateRoom"
                    })], t)
                }(c.Component);
            var W = Object(o.connect)(function(e) {
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
                return W
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
                return e.minimumAllowedRole === o.b.Everyone ? r.rb.Hash : t ? r.rb.Unlock : r.rb.Lock
            }
        }
    }
]);