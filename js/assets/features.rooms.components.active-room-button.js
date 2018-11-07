(window.webpackJsonp = window.webpackJsonp || []).push([
    [200], {
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
                        if (this.props.data.error) return o.createElement(d.Xa, null);
                        var e = {
                            isPreviewable: this.props.data.room.isPreviewable,
                            minimumAllowedRole: this.props.data.room.minimumAllowedRole
                        };
                        return o.createElement(i.a, null, o.createElement("div", null, o.createElement(d.Cb, {
                            display: d.X.Flex,
                            alignItems: d.f.Center,
                            className: "active-room-button"
                        }, o.createElement(d.Xa, {
                            className: "active-room-button__states",
                            display: d.X.Flex
                        }, o.createElement(d.qb, {
                            height: 14,
                            asset: Object(c.a)(e, this.props.data.room.self.permissions.sendMessages)
                        })), o.createElement(d.W, {
                            color: d.O.Alt
                        }, this.props.data.room.name), o.createElement(d.Xa, {
                            className: "room-details__close-edit active-room-button__cch-dropdown"
                        }, o.createElement(d.qb, {
                            asset: d.rb.AngleRight,
                            type: d.sb.Alt,
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
                        return i.createElement(u.Cb, {
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
                        return o.createElement(s.Xa, null, o.createElement(s.Cb, {
                            padding: {
                                top: 1,
                                bottom: .5,
                                x: 1
                            },
                            margin: {
                                x: .5
                            }
                        }, o.createElement(s.W, {
                            type: s.Tb.Span
                        }, Object(i.d)("Who can chat in this room?", "RoomPermissionsToggle"))), o.createElement(s.Cb, {
                            padding: {
                                x: 1
                            },
                            margin: {
                                x: .5
                            },
                            display: s.X.Flex,
                            alignItems: s.f.Center
                        }, o.createElement(s.Pa, {
                            flexGrow: 1,
                            display: s.X.Flex,
                            alignItems: s.f.Center,
                            className: "room-permissions-toggle__role-name"
                        }, o.createElement("label", {
                            htmlFor: "room-permissions-toggle__mods-permission"
                        }, o.createElement(s.W, {
                            type: s.Tb.Strong,
                            color: s.O.Alt
                        }, Object(i.d)("Mods", "RoomPermissionsToggle")))), o.createElement(s.Vb, {
                            id: "room-permissions-toggle__mods-permission",
                            disabled: !0,
                            checked: !0,
                            "data-test-selector": "moderator-role"
                        })), o.createElement(s.Cb, {
                            padding: {
                                x: 1
                            },
                            margin: {
                                x: .5
                            },
                            display: s.X.Flex,
                            alignItems: s.f.Center
                        }, o.createElement(s.Pa, {
                            flexGrow: 1,
                            display: s.X.Flex,
                            alignItems: s.f.Center,
                            className: "room-permissions-toggle__role-name"
                        }, o.createElement("label", {
                            htmlFor: "room-permissions-toggle__subs-permission"
                        }, o.createElement(s.W, {
                            type: s.Tb.Strong,
                            color: s.O.Alt
                        }, Object(i.d)("Subs", "RoomPermissionsToggle")))), o.createElement(s.Vb, {
                            id: "room-permissions-toggle__subs-permission",
                            checked: this.state.minimumAllowedRole !== a.b.Moderator,
                            onChange: this.toggleSubRole,
                            "data-test-selector": "subscriber-role"
                        })), o.createElement(s.Cb, {
                            padding: {
                                x: 1
                            },
                            margin: {
                                x: .5
                            },
                            display: s.X.Flex,
                            alignItems: s.f.Center
                        }, o.createElement(s.Pa, {
                            flexGrow: 1,
                            display: s.X.Flex,
                            alignItems: s.f.Center,
                            className: "room-permissions-toggle__role-name"
                        }, o.createElement("label", {
                            htmlFor: "room-permissions-toggle__everyone-permission"
                        }, o.createElement(s.W, {
                            type: s.Tb.Strong,
                            color: s.O.Alt
                        }, Object(i.d)("Everyone", "RoomPermissionsToggle")))), o.createElement(s.Vb, {
                            id: "room-permissions-toggle__everyone-permission",
                            checked: this.state.minimumAllowedRole === a.b.Everyone,
                            onChange: this.toggleAllRole,
                            "data-test-selector": "everyone-role"
                        })), o.createElement(s.Xa, {
                            padding: {
                                x: .5
                            }
                        }, o.createElement(s.Cb, {
                            borderTop: !0,
                            margin: {
                                top: .5,
                                bottom: 1,
                                x: 1
                            }
                        })), o.createElement(s.Cb, {
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
                        }, o.createElement(s.Ja, {
                            gutterSize: s.Ka.None
                        }, o.createElement(s.P, {
                            cols: 8
                        }, o.createElement(s.W, null, Object(i.d)("Allow others to read chat but not send messages", "RoomPermissionsToggle"))), o.createElement(s.P, {
                            cols: 4
                        }, o.createElement(s.Xa, {
                            display: s.X.Flex,
                            fullHeight: !0,
                            justifyContent: s.Wa.Center,
                            flexDirection: s.Aa.Column,
                            alignContent: s.e.End,
                            alignItems: s.f.End
                        }, this.renderPreviewabilityToggle())))))
                    }, t.prototype.renderPreviewabilityToggle = function() {
                        var e = this.state.minimumAllowedRole !== a.b.Subscriber,
                            t = o.createElement(s.Vb, {
                                disabled: e,
                                checked: this.state.isPreviewable,
                                onChange: this.togglePreviewability,
                                "data-test-selector": "previewability-toggle"
                            });
                        return this.state.minimumAllowedRole === a.b.Moderator && (t = o.createElement(s.Wb, {
                            direction: s.Yb.Left,
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
        "4qQ0": function(e, t, n) {
            "use strict";
            var r, o;
            n.d(t, "a", function() {
                    return r
                }), n.d(t, "b", function() {
                    return o
                }),
                function(e) {
                    e.ChannelFeedComment = "CHANNEL_FEED_COMMENT_REPORT", e.ChannelFeedPost = "CHANNEL_FEED_POST_REPORT", e.Chat = "CHAT_REPORT", e.Clip = "CLIP_REPORT", e.Collection = "COLLECTION_REPORT", e.Event = "EVENT_REPORT", e.Extension = "EXTENSION_REPORT", e.LiveUp = "LIVE_UP_REPORT", e.Raid = "RAID_REPORT", e.Room = "ROOM_REPORT", e.StreamUp = "STREAM_UP_REPORT", e.User = "USER_REPORT", e.VideoChatMessage = "VOD_COMMENT_REPORT", e.Vod = "VOD_REPORT", e.Whisper = "WHISPER_REPORT"
                }(r || (r = {})),
                function(e) {
                    e.BitsViolation = "bits_violation", e.ChatBanEvasion = "chat_ban_evasion", e.Cheating = "cheating", e.Gore = "gore", e.Harassment = "harassment", e.Harm = "harm", e.HatefulConduct = "hateful_conduct", e.Impersonation = "impersonation", e.Miscategorized = "miscategorized", e.OffensiveUsername = "offensive_username", e.Other = "other", e.Porn = "porn", e.Prohibited = "prohibited", e.SelfHarm = "selfharm", e.SexualContent = "sexual_content", e.SexualViolence = "sexual_violence", e.Spam = "spam", e.TosBanEvasion = "tos_ban_evasion", e.Underaged = "underaged"
                }(o || (o = {}))
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
                        return i.createElement(d.Xa, {
                            margin: {
                                bottom: 2
                            }
                        }, i.createElement(d.Ea, {
                            id: "reporting-modal__select",
                            label: Object(a.d)("Select Reason (required)", "ReportUserModal")
                        }, i.createElement(d.xb, {
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
                    return i.createElement(d.Xa, {
                        display: d.X.Flex,
                        flexDirection: d.Aa.Column,
                        alignItems: d.f.Center,
                        justifyContent: d.Wa.Center
                    }, this.renderStatusMessage(), this.renderBody())
                }, t.prototype.renderBody = function() {
                    return this.props.submitStatus === h.Success ? i.createElement("div", null, i.createElement(d.z, {
                        onClick: this.props.onClose
                    }, i.createElement(d.Xa, {
                        padding: {
                            x: 2
                        }
                    }, Object(a.d)("Close", "ReportUser")))) : i.createElement("div", null, i.createElement(d.Xa, {
                        "data-test-selector": "reporting.title",
                        margin: {
                            bottom: 1
                        },
                        "data-a-target": "reporting-channel-name"
                    }, i.createElement(d.W, {
                        type: d.Tb.H4
                    }, this.props.title), i.createElement(d.Cb, {
                        color: d.O.Alt2,
                        margin: {
                            top: 1
                        }
                    }, this.headerMessage)), i.createElement("form", null, i.createElement(d.Cb, {
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
                    }, i.createElement(d.Qb, {
                        defaultValue: this.props.defaultDescription,
                        onChange: this.handleTextAreaChange
                    }))), i.createElement(d.Cb, {
                        display: d.X.Flex,
                        justifyContent: d.Wa.Center
                    }, i.createElement(d.z, {
                        onClick: this.handleSubmit
                    }, i.createElement(d.Xa, {
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
                    return i.createElement(d.Cb, {
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
            var r, o = n("mrSG"),
                i = n("q1tI"),
                a = n("/MKj"),
                s = n("fvjX"),
                l = n("/7QA"),
                c = n("yR8l"),
                d = n("BhFH"),
                u = n("iS14"),
                p = n("geRD"),
                m = n("f00E"),
                h = n("D7An"),
                g = n("2xye"),
                b = n("GnwI"),
                v = n("QVaV"),
                f = n("Ue10"),
                R = (n("MPK0"), "report-wizard-block"),
                k = "report-wizard-unblock",
                y = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            userBlocked: t.props.userBlocked || !1
                        }, t.renderBlock = function() {
                            return i.createElement(f.U, {
                                hoverUnderlineNone: !0,
                                onClick: t.handleBlock,
                                "data-test-selector": R
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
                                type: f.Tb.Span
                            }, Object(l.d)("{user} blocked", {
                                user: t.props.targetUser.displayName
                            }, "ReportWizardBlockActions"))), i.createElement(f.U, {
                                hoverUnderlineNone: !0,
                                onClick: t.handleUnblock,
                                "data-test-selector": k
                            }, i.createElement(f.Xa, {
                                margin: {
                                    left: .5
                                }
                            }, Object(l.d)("Unblock", "ReportWizardBlockActions"))))
                        }, t.handleBlock = function() {
                            return o.__awaiter(t, void 0, void 0, function() {
                                return o.__generator(this, function(e) {
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
                    return o.__extends(t, e), t.prototype.render = function() {
                        var e = this.state.userBlocked ? this.renderUnblock() : this.renderBlock(),
                            t = Object(v.a)(this.props.targetUser.login, this.props.targetUser.displayName, !0);
                        return i.createElement(f.Cb, {
                            borderTop: !0,
                            padding: {
                                y: 1
                            },
                            margin: {
                                top: 1
                            }
                        }, i.createElement(f.Xa, null, Object(l.d)("Would you like to block {user}?", {
                            user: t
                        }, "ReportWizardBlockActions")), i.createElement(f.Cb, {
                            color: f.O.Alt2,
                            margin: {
                                y: 1
                            }
                        }, i.createElement(f.cc, {
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
            }(r || (r = {}));
            var T, S = {
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
                C = {
                    input_description: {
                        getTitle: function() {
                            return Object(l.d)("Could you provide more detail about this issue? You may include links to videos, clips, and content outside Twitch.", "ReportModalWizard")
                        },
                        value: "description",
                        type: r.Textarea,
                        required: !0
                    },
                    input_link: {
                        getTitle: function() {
                            return Object(l.d)("If possible, please provide a link to show us where the issue occurred. Links that do not lead to the original source of the content may not be usable as evidence.", "ReportModalWizard")
                        },
                        rows: 2,
                        value: "external links",
                        type: r.Textarea
                    },
                    input_usernames: {
                        getTitle: function() {
                            return Object(l.d)("If you know the usernames of any other Twitch accounts that may be owned by this person, please list them in this space.", "ReportModalWizard")
                        },
                        value: "other usernames",
                        rows: 2,
                        type: r.Textarea
                    },
                    input_connection: {
                        getTitle: function() {
                            return Object(l.d)("Please describe how you connected the offsite content to this Twitch account.", "ReportModalWizard")
                        },
                        value: "offsite content connection",
                        type: r.Textarea
                    },
                    input_comments: {
                        getTitle: function() {
                            return Object(l.d)("If you have any other comments you would like to add, please do so here.", "ReportModalWizard")
                        },
                        value: "comments",
                        type: r.Textarea
                    },
                    input_identifyOwner: {
                        getTitle: function() {
                            return Object(l.d)("Please describe how you identified this person as the owner of this Twitch account.", "ReportModalWizard")
                        },
                        rows: 2,
                        value: "connect account owner",
                        type: r.Textarea
                    },
                    endBlurb_socialmedia: {
                        getTitle: function() {
                            return Object(l.d)("Please submit a report to the site or service where the incident occurred as well if you have not already done so.", "ReportModalWizard")
                        },
                        type: r.Text
                    },
                    endBlurb_threat: {
                        getTitle: function() {
                            return Object(l.d)("If you feel you are in immediate danger, please contact your local law enforcement.", "ReportModalWizard")
                        },
                        type: r.Text
                    },
                    endLink_selfharm: {
                        getTitle: function() {
                            return Object(l.d)("Learn more about mental health support", "ReportModalWizard")
                        },
                        value: "https://help.twitch.tv/customer/en/portal/articles/2904486-twitch-cares-mental-health-support-information",
                        type: r.Link
                    },
                    endLink_DMCA: {
                        getTitle: function() {
                            return Object(l.d)("View our DMCA Notification Guidelines", "ReportModalWizard")
                        },
                        value: "https://www.twitch.tv/p/legal/dmca-guidelines/",
                        type: r.Link
                    },
                    endLink_trademark: {
                        getTitle: function() {
                            return Object(l.d)("View our Trademark Policy", "ReportModalWizard")
                        },
                        value: "https://www.twitch.tv/p/legal/trademark-policy/",
                        type: r.Link
                    },
                    endLink_devAgreement: {
                        getTitle: function() {
                            return Object(l.d)("View our Developer Agreement", "ReportModalWizard")
                        },
                        value: "https://www.twitch.tv/p/legal/developer-agreement/",
                        type: r.Link
                    },
                    endLink_eventCoC: {
                        getTitle: function() {
                            return Object(l.d)("View our Events Code of Conduct", "ReportModalWizard")
                        },
                        value: "https://www.twitch.tv/p/legal/events-code-of-conduct",
                        type: r.Link
                    },
                    messaging_general: {
                        getTitle: S.generalFilter,
                        value: "general_messaging",
                        omitFromDescription: !0
                    },
                    profile_general: {
                        getTitle: S.generalFilter,
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
                        getTitle: S.generalFilter,
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
                        getTitle: S.abusiveViolence,
                        value: "threatening violence",
                        reportReason: E.b.Harm
                    },
                    commitingViolence: {
                        getTitle: S.commitingViolence,
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
                        getTitle: S.me,
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
                        getTitle: S.someoneElse,
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
                        getTitle: S.threatening,
                        value: "threatening"
                    },
                    external_harassment: {
                        getTitle: S.abusive,
                        value: "hateful/harassing"
                    },
                    external_abusiveViolence: {
                        getTitle: S.abusiveViolence,
                        value: "external site; threatening violence",
                        reportReason: E.b.Harm
                    },
                    external_commitingViolence: {
                        getTitle: S.commitingViolence,
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
                O = function(e) {
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
                    return o.__extends(t, e), t.prototype.render = function() {
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
                                case r.Text:
                                    return i.createElement(f.Xa, {
                                        key: n,
                                        padding: {
                                            bottom: 1
                                        }
                                    }, t.getTitle());
                                case r.Link:
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
                                case r.Textarea:
                                    var o = t.value ? e.props.userTextInputs[t.value] : void 0,
                                        a = t.required && (!o || !!o && 0 === o.trim().length);
                                    return i.createElement(f.Xa, {
                                        key: n,
                                        padding: {
                                            bottom: 1
                                        }
                                    }, i.createElement(f.Ea, {
                                        label: t.getTitle(),
                                        labelOptional: t.required ? "" : Object(l.d)("Optional", "ReportModalWizardCard")
                                    }, i.createElement(f.Qb, {
                                        onChange: e.onChange,
                                        rows: t.rows || 3,
                                        name: t.value,
                                        error: e.props.error && a,
                                        value: o,
                                        "data-test-selector": "report-wizard-textarea"
                                    })));
                                case r.MultipleChoice:
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
                _ = n("RQ6e");
            ! function(e) {
                e.Confirm = "Confirm", e.MultipleChoice = "MultipleChoice", e.Info = "End Card"
            }(T || (T = {}));
            var w, M, N, j = {
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
                I = {
                    getDescription: function() {
                        return Object(l.d)("Reports are reviewed by Twitch Staff 24 hours a day. We will issue penalties, such as account suspension and/or content removal, once we verify that a violation of our policies has occurred.", "ReportModalWizard")
                    },
                    blockPrompt: !0,
                    getTitle: x.thanks,
                    type: T.Info,
                    value: "end card"
                },
                D = {
                    socialMedia: o.__assign({}, I, {
                        items: [C.endBlurb_socialmedia]
                    }),
                    violence: o.__assign({}, I, {
                        items: [C.endBlurb_threat]
                    }),
                    legal: {
                        getTitle: x.thanksConcern,
                        getDescription: function() {
                            return Object(l.d)("To submit a claim or report a violation of this type, you will need to follow the steps listed on the relevant page below.", "ReportModalWizard")
                        },
                        items: [C.endLink_DMCA, C.endLink_trademark, C.endLink_devAgreement],
                        type: T.Info,
                        value: "ip end"
                    },
                    selfharm: {
                        getTitle: x.thanksConcern,
                        getDescription: function() {
                            return Object(l.d)("If you know the user personally, and you believe them to be in danger, please contact their local authorities immediately. The link below contains some general information that may be of use.", "ReportModalWizard")
                        },
                        items: [C.endLink_selfharm],
                        type: T.Info,
                        value: "selfharm end"
                    },
                    twitchEvent: {
                        getTitle: x.thanksConcern,
                        getDescription: function() {
                            return Object(l.d)("Please bring this concern to the attention of staff or security at the event if you have not already done so. More information is available at the link below.", "ReportModalWizard")
                        },
                        items: [C.endLink_eventCoC],
                        value: "twitch event end",
                        type: T.Info
                    }
                },
                W = {
                    getTitle: x.report,
                    getLabel: function() {
                        return Object(l.d)("Where is the problem?", "ReportModalWizard")
                    },
                    items: [C.video, C.whisper, C.chat, C.room, C.profile, C.username, C.report_other],
                    type: T.MultipleChoice,
                    value: "content type"
                },
                A = {
                    identifyUser: {
                        getTitle: x.reportVideo,
                        getLabel: j.identifyUser,
                        items: [C.video_streamer, C.video_someoneElse, C.video_chatSomeone],
                        type: T.MultipleChoice,
                        value: "video identify user"
                    },
                    content: {
                        getTitle: x.reportVideo,
                        getLabel: j.contentGeneral,
                        items: [C.revealPersonalInfo, C.video_labeling, C.video_inactive, C.video_general, C.report_ip, C.violateDevAgreement, C.selfharm],
                        type: T.MultipleChoice,
                        value: "video report reason"
                    },
                    general: {
                        getTitle: x.reportVideo,
                        getLabel: j.content,
                        items: [C.report_username, C.violence, C.abusive, C.cheating, C.scam, C.inappropriateContent, C.evasion, C.impersonation, C.underage, C.bitsViolation],
                        type: T.MultipleChoice,
                        value: "video general report reason"
                    }
                },
                z = {
                    content: {
                        getTitle: x.reportMessage,
                        getLabel: j.contentGeneral,
                        items: [C.revealPersonalInfo, C.evasion, C.spam, C.maliciousRaid, C.report_username, C.messaging_general, C.selfharm],
                        type: T.MultipleChoice,
                        value: "message report reason"
                    },
                    general: {
                        getTitle: x.reportMessage,
                        getLabel: j.content,
                        items: [C.report_emotes, C.violence, C.abusive, C.inappropriateContent, C.impersonation, C.underage, C.bitsViolation],
                        type: T.MultipleChoice,
                        value: "message general report reason"
                    }
                },
                U = o.__assign({}, z.content, {
                    getDescription: function() {
                        return Object(l.d)("Please note that we may review additional messages in this conversation to determine the context of your report.", "ReportModalWizard")
                    }
                }),
                P = {
                    content: {
                        getTitle: x.reportProfile,
                        getLabel: j.contentGeneral,
                        items: [C.revealPersonalInfo, C.inappropriateBadge, C.inappropriateExtension, C.noModeration, C.profile_general, C.report_ip, C.violateDevAgreement, C.selfharm],
                        type: T.MultipleChoice,
                        value: "profile report reason"
                    },
                    general: {
                        getTitle: x.reportProfile,
                        getLabel: j.content,
                        items: [C.report_username, C.violence, C.abusive, C.scam, C.inappropriateContent, C.evasion, C.impersonation, C.underage, C.bitsViolation],
                        type: T.MultipleChoice,
                        value: "profile general report reason"
                    }
                },
                F = {
                    getTitle: function(e) {
                        return Object(l.d)("Report {username}'s Room", {
                            username: e
                        }, "ReportModalWizard")
                    },
                    getLabel: j.identifyUser,
                    items: [C.report_channelOwner, C.report_member],
                    value: "room report user",
                    type: T.MultipleChoice
                },
                V = {
                    getTitle: x.tellUsMore,
                    items: [C.input_description],
                    type: T.Confirm,
                    value: "tell us more"
                },
                L = {
                    banEvasion: o.__assign({}, V, {
                        items: [C.input_usernames, C.input_description],
                        value: "ban evasion tell us more"
                    }),
                    socialMedia: o.__assign({}, V, {
                        items: [C.input_link, C.input_connection, C.input_description],
                        nextCard: D.socialMedia,
                        value: "social media tell us more"
                    })
                },
                B = {
                    content: {
                        getTitle: x.reportAbusive,
                        getLabel: j.relevantStatements,
                        items: [C.hateSpeech, C.harassment, C.abusiveViolence, C.commitingViolence, C.swatting, C.personalInfo],
                        type: T.MultipleChoice,
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
                        items: [C.threat_me, C.threat_person, C.threat_group, C.threat_selfharm],
                        type: T.MultipleChoice,
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
                        items: [C.location_onTwitch, C.location_anotherSite, C.location_TwitchEvent],
                        type: T.MultipleChoice,
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
                        items: [C.external_incitingRaids, C.external_threatening, C.external_harassment],
                        type: T.MultipleChoice,
                        nextCard: L.socialMedia,
                        value: "external site conduct"
                    },
                    external_violence: o.__assign({}, B.violence, {
                        items: [C.threat_me, C.threat_person, C.threat_group],
                        nextCard: L.socialMedia
                    }),
                    external_abusive: o.__assign({}, B.content, {
                        items: [C.hateSpeech, C.harassment, C.external_abusiveViolence, C.external_commitingViolence, C.swatting, C.personalInfo],
                        nextCard: L.socialMedia
                    })
                },
                q = {
                    getTitle: function(e) {
                        return Object(l.d)("Report {username}'s Spam or Malicious Links", {
                            username: e
                        }, "ReportModalWizard")
                    },
                    getLabel: j.contentGeneral,
                    items: [C.spam_bot, C.spam_scam, C.spam_repeated],
                    type: T.MultipleChoice,
                    value: "spam type"
                },
                H = {
                    getTitle: function(e) {
                        return Object(l.d)("Report {username} for Inappropriate Content", {
                            username: e
                        }, "ReportModalWizard")
                    },
                    getLabel: j.relevantStatements,
                    items: [C.inappropriate_game, C.gory, C.sexuallyViolent, C.childAnimal, C.pornographic, C.suggestive, C.nudity, C.other],
                    type: T.MultipleChoice,
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
                    items: [C.evasion_chat, C.evasion_sitewide, C.evasion_messaging],
                    type: T.MultipleChoice,
                    nextCard: L.banEvasion
                },
                Q = {
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
                    items: [C.impersonation_me, C.impersonation_brand, C.impersonation_other],
                    type: T.MultipleChoice,
                    value: "impersonation type"
                },
                $ = W,
                Y = V,
                K = I,
                J = {
                    video: A.identifyUser,
                    whisper: U,
                    chat: z.content,
                    profile: P.content,
                    room: F,
                    "somewhere else": X.identifyLocation,
                    streamer: A.content,
                    "someone else in video": A.content,
                    "someone in chat": z.content,
                    general_video: A.general,
                    general_messaging: z.general,
                    general_profile: P.general,
                    "channel owner": P.content,
                    "community member": z.content,
                    "on twitch": P.content,
                    "another site": X.externalSite,
                    "twitch event": D.twitchEvent,
                    "brigading/raids": L.socialMedia,
                    threatening: X.external_violence,
                    "hateful/harassing": X.external_abusive,
                    "external site; threatening violence": X.external_violence,
                    "external site; committing violence": X.external_violence,
                    "external site; scam": L.socialMedia,
                    "ban evasion": G,
                    spam: q,
                    hateful: B.content,
                    impersonation: Q,
                    "violence/threats": B.violence,
                    "threatening violence": B.violence,
                    "committing violence": B.violence,
                    abusive: B.content,
                    "inappropriate content": H,
                    "intellectual property": D.legal,
                    "violating developer agreement": D.legal
                },
                Z = {
                    selfharm: D.selfharm,
                    harm: D.violence,
                    other: K
                },
                ee = {
                    CHANNEL_FEED_POST_REPORT: P.content,
                    COMMUNITY_REPORT: P.content,
                    CHAT_REPORT: z.content,
                    CLIP_REPORT: A.content,
                    EVENT_REPORT: P.content,
                    EXTENSION_REPORT: P.content,
                    LIVE_UP_REPORT: P.content,
                    ROOM_REPORT: F,
                    WHISPER_REPORT: U,
                    VOD_COMMENT_REPORT: z.content
                },
                te = "report-wizard-back",
                ne = "report-wizard-close",
                re = "report-wizard-next",
                oe = "report-wizard-submit",
                ie = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            currentCard: t.props.currentCard || ee[t.props.reportContentType] || $,
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
                                r = ne,
                                o = !1,
                                a = t.state.prevCards.length ? t.renderBack() : null;
                            switch (t.state.currentCard.type) {
                                case T.MultipleChoice:
                                    e = Object(l.d)("Next", "ReportModalWizard"), n = t.handleNext, r = re, o = !t.state.currentSelection;
                                    break;
                                case T.Confirm:
                                    e = Object(l.d)("Submit Report", "ReportModalWizard"), n = t.handleSubmit, o = !t.state.userTextInput, r = oe
                            }
                            return i.createElement(f.Xa, null, a, i.createElement(f.z, {
                                onClick: n,
                                disabled: o,
                                "data-test-selector": r
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
                                return t.props.trackClose(N.Finish, t.state.currentCard.value)
                            }), t.props.onClose()
                        }, t.handleNext = function() {
                            if (t.state.currentSelection && t.state.currentSelection.value) {
                                var e = t.state.currentCard,
                                    n = t.state.prevCards.concat(e),
                                    r = t.state.prevSelections.concat(t.state.currentSelection),
                                    o = t.state.displacedSelections[t.state.displacedSelections.length - 1],
                                    i = t.state.currentSelection.differentTarget || t.state.targetUnknown,
                                    a = t.state.currentSelection.reportContext || t.state.reportContext,
                                    s = e.nextCard || Y;
                                J[t.state.currentSelection.value] && (s = J[t.state.currentSelection.value]);
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
                                    return t.trackNavigation(M.Next, e.value)
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
                            return o.__awaiter(t, void 0, void 0, function() {
                                var e, t, n, r, i = this;
                                return o.__generator(this, function(o) {
                                    switch (o.label) {
                                        case 0:
                                            return e = Object(l.d)("Additional information is required.", "ReportModalWizard"), this.requiredInputsNonEmpty() ? (t = this.state.reportReason || "other", n = this.createReportDescription(), [4, this.props.onSubmit(t, n, this.state.reportContext)]) : [3, 2];
                                        case 1:
                                            switch (o.sent(), this.props.submitStatus) {
                                                case _.a.FormError:
                                                    this.setState({
                                                        error: e
                                                    });
                                                    break;
                                                case _.a.Success:
                                                    r = K, Z[t] && (r = Z[t]), this.state.currentCard.nextCard && (r = this.state.currentCard.nextCard), this.setState({
                                                        currentCard: r,
                                                        prevCards: [],
                                                        prevSelections: [],
                                                        currentSelection: null,
                                                        displacedSelections: [],
                                                        userTextInput: {},
                                                        error: ""
                                                    }, function() {
                                                        return i.trackNavigation(M.Submit)
                                                    });
                                                    break;
                                                case _.a.UserError:
                                                    this.setState({
                                                        error: Object(l.d)("This account could not be reported. It may have already been suspended, or the owner may have deleted it.", "ReportModalWizard")
                                                    });
                                                    break;
                                                case _.a.MutationError:
                                                default:
                                                    this.setState({
                                                        error: Object(l.d)("Sorry, a network error occurred when submitting your report. Please try again later.", "ReportModalWizard")
                                                    })
                                            }
                                            return [3, 3];
                                        case 2:
                                            this.props.onError(_.a.FormError), this.setState({
                                                error: e
                                            }), o.label = 3;
                                        case 3:
                                            return [2]
                                    }
                                })
                            })
                        }, t.handleBack = function() {
                            return o.__awaiter(t, void 0, void 0, function() {
                                var e, t, n, r, i, a = this;
                                return o.__generator(this, function(o) {
                                    return e = this.state.currentCard, t = this.state.prevCards[this.state.prevCards.length - 1], n = this.state.prevSelections[this.state.prevSelections.length - 1], r = !n.differentTarget && this.state.targetUnknown, i = this.state.displacedSelections, this.state.currentSelection && (i = i.concat(this.state.currentSelection)), t && n && this.setState({
                                        currentCard: t,
                                        currentSelection: n,
                                        displacedSelections: i,
                                        prevCards: this.state.prevCards.slice(0, -1),
                                        prevSelections: this.state.prevSelections.slice(0, -1),
                                        error: "",
                                        targetUnknown: r
                                    }, function() {
                                        return a.trackNavigation(M.Back, e.value)
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
                    return o.__extends(t, e), t.prototype.componentWillUnmount = function() {
                        this.state.modalCloseTracked || this.props.trackClose(N.Close, this.state.currentCard.value)
                    }, t.prototype.render = function() {
                        var e = this.state.currentCard.type === T.Info && this.state.currentCard.blockPrompt ? i.createElement(y, {
                                targetUser: this.props.targetUser,
                                onBlock: this.props.onBlock,
                                onUnblock: this.props.onUnblock,
                                userBlocked: this.props.userBlocked
                            }) : null,
                            t = this.state.error ? i.createElement(f.Cb, {
                                fullWidth: !0,
                                margin: {
                                    bottom: 1
                                },
                                padding: 1,
                                className: "reporting__error-container"
                            }, this.state.error) : null,
                            n = this.state.prevCards.length || this.state.currentCard.type === T.Info ? null : this.renderPrimer();
                        return i.createElement(f.Cb, {
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
                        }, i.createElement(O, {
                            currentCard: this.state.currentCard,
                            currentSelection: this.state.currentSelection,
                            targetUser: this.props.targetUser,
                            targetUserID: this.props.targetUser.id,
                            onChangeRadio: this.handleSelection,
                            onChangeText: this.handleTextInput,
                            userTextInputs: this.state.userTextInput,
                            error: this.props.submitStatus === _.a.FormError && !!this.state.error
                        }), e), this.renderButtons())
                    }, t
                }(i.Component),
                ae = n("s8Ou"),
                se = n("0hI/");
            n.d(t, "c", function() {
                    return M
                }), n.d(t, "a", function() {
                    return N
                }), n.d(t, "b", function() {
                    return ce
                }),
                function(e) {
                    e.Close = "close", e.Open = "open", e.Submit = "submit_report", e.ToggleSettings = "modal_settings"
                }(w || (w = {})),
                function(e) {
                    e.Back = "back", e.Close = "close", e.Open = "open", e.Next = "next", e.Submit = "submit_report", e.ToggleSettings = "modal_settings"
                }(M || (M = {})),
                function(e) {
                    e.Close = "close", e.Finish = "finish"
                }(N || (N = {}));
            var le = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    n.handleSubmit = function(e, t, r) {
                        return o.__awaiter(n, void 0, void 0, function() {
                            var n, i, a, s = this;
                            return o.__generator(this, function(o) {
                                switch (o.label) {
                                    case 0:
                                        if (n = r === E.a.Whisper ? r : this.props.reportContext.contentType, null === (i = {
                                                description: t,
                                                reason: e,
                                                content: n,
                                                contentID: this.props.reportContext.contentID,
                                                extra: this.props.reportContext.extra,
                                                targetID: this.props.data.targetUser.id
                                            }).targetID) return this.setState({
                                            submitStatus: _.a.UserError
                                        }), [2];
                                        o.label = 1;
                                    case 1:
                                        return o.trys.push([1, 3, , 4]), [4, this.props.reportUser(Object(p.a)(i))];
                                    case 2:
                                        return o.sent(), this.setState({
                                            submitStatus: _.a.Success
                                        }, function() {
                                            s.state.showWizard || s.trackAction(w.Submit)
                                        }), [3, 4];
                                    case 3:
                                        return a = o.sent(), l.k.error(a, "ReportUser Mutation failed."), this.setState({
                                            submitStatus: _.a.MutationError
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
                        n.props.blockUserMutation(n.props.data.targetUser.id, void 0, void 0, o.__assign({}, n.props.sessionUser, {
                            __typename: "User"
                        })), n.setState({
                            userBlocked: !0
                        })
                    }, n.onUnblock = function() {
                        n.props.unblockUserMutation(n.props.data.targetUser.id, o.__assign({}, n.props.sessionUser, {
                            __typename: "User"
                        })), n.setState({
                            userBlocked: !1
                        })
                    }, n.trackOpen = function(e) {
                        n.state.openEventSent || (n.state.showWizard ? n.trackWizardAction(M.Open, void 0, e) : n.trackAction(w.Open), n.setState({
                            openEventSent: !0
                        }))
                    }, n.trackClose = function(e, t) {
                        n.state.closeEventSent || (n.state.showWizard ? n.trackWizardAction(M.Close, t, void 0, e) : n.trackAction(w.Close), n.setState({
                            closeEventSent: !0
                        }))
                    }, n.trackWizardAction = function(e, t, r, o) {
                        l.p.tracking.track(g.SpadeEventType.ReportWizardFlowAction, {
                            ui_context: n.props.reportContext.contentType,
                            target_user_id: n.props.reportContext.targetUserID,
                            report_sent: n.state.submitStatus === _.a.Success,
                            modal_type: "wizard_v1",
                            extra_user_id: n.props.reportContext.additionalTrackingID,
                            action: e,
                            close_type: o,
                            report_session_id: n.reportID,
                            current_step: t,
                            navigated_to: r
                        })
                    }, n.trackAction = function(e) {
                        l.p.tracking.track(g.SpadeEventType.ReportFlowAction, {
                            ui_context: n.props.reportContext.contentType,
                            target_user_id: n.props.reportContext.targetUserID,
                            report_sent: n.state.submitStatus === _.a.Success,
                            extra_user_id: n.props.reportContext.additionalTrackingID,
                            action: e,
                            report_session_id: n.reportID
                        })
                    }, n.reportID = Object(m.a)();
                    var r = l.p.experiments.getAssignment(h.b.NewReportingWizard);
                    return n.state = {
                        submitStatus: _.a.Unsubmitted,
                        showWizard: "yes" === r,
                        openEventSent: !1,
                        closeEventSent: !1,
                        userBlocked: !1
                    }, n
                }
                return o.__extends(t, e), t.prototype.componentDidMount = function() {
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
                        return this.state.showWizard ? this.props.data.loading ? i.createElement(f.Za, null) : i.createElement(ie, o.__assign({}, e, {
                            user: this.props.sessionUser,
                            onBlock: this.onBlock,
                            onUnblock: this.onUnblock,
                            targetUser: this.props.data.targetUser,
                            trackAction: this.trackWizardAction,
                            trackClose: this.trackClose,
                            userBlocked: this.userBlocked
                        })) : i.createElement(_.b, o.__assign({}, e, {
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
            var ce = Object(s.compose)(Object(c.a)(ae, {
                name: "reportUser"
            }), Object(c.a)(se, {
                options: function(e) {
                    return {
                        variables: {
                            targetUserID: e.reportContext.targetUserID
                        }
                    }
                }
            }), Object(b.b)("ReportUser", {
                autoReportInteractive: !0
            }), Object(d.a)(), Object(u.a)(), Object(a.connect)(function(e) {
                return {
                    sessionUser: e.session.user
                }
            }, null))(le)
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
                b = n("Ue10"),
                v = n("TMB/"),
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
                        return d.createElement(b.Cb, {
                            background: b.r.Base,
                            className: "delete-room-modal",
                            position: b.hb.Relative
                        }, d.createElement(b.Xa, {
                            padding: 2,
                            margin: {
                                top: 1
                            }
                        }, d.createElement(b.Xa, {
                            margin: {
                                bottom: 2
                            }
                        }, d.createElement(b.W, {
                            type: b.Tb.H4
                        }, Object(u.d)("Delete #{roomName}?", {
                            roomName: this.props.roomName
                        }, "DeleteRoomModal")), d.createElement(b.Xa, {
                            padding: {
                                top: 1
                            }
                        }, d.createElement(b.W, {
                            type: b.Tb.Span,
                            color: b.O.Alt2
                        }, Object(u.d)("This will remove all messages in this room permanently from your channel", "DeleteRoomModal")))), d.createElement(b.Xa, {
                            padding: {
                                top: 2
                            },
                            textAlign: b.Pb.Right
                        }, d.createElement(b.Xa, {
                            display: b.X.Inline,
                            margin: {
                                right: .5
                            }
                        }, d.createElement(b.z, {
                            type: b.F.Hollow,
                            onClick: this.props.onCloseModal,
                            "data-test-selector": "cancel-button"
                        }, Object(u.d)("No, keep this room", "DeleteRoomModal"))), d.createElement(b.Xa, {
                            display: b.X.Inline,
                            margin: {
                                left: .5
                            }
                        }, d.createElement(b.z, {
                            onClick: this.deleteRoom,
                            "data-test-selector": "confirm-button",
                            type: b.F.Alert
                        }, Object(u.d)("Yes, delete this room", "DeleteRoomModal"))))), d.createElement(g.a, {
                            closeOnBackdropClick: !0
                        }))
                    }, t
                }(d.Component),
                R = Object(h.compose)(Object(p.a)(v, {
                    name: "deleteRoom"
                }))(f);
            var k = Object(r.connect)(null, function(e) {
                    return Object(o.bindActionCreators)({
                        onCloseModal: a.c
                    }, e)
                })(R),
                y = n("9Vxt"),
                E = n("20fZ"),
                T = function(e) {
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
                        if (this.props.data.loading) return d.createElement(b.gb, {
                            height: 30,
                            width: 160
                        });
                        if (this.props.data.error || !this.props.data.room.owner.self.isChannelMember) return null;
                        var e = Object(u.d)("Mute all notifications", "MuteButton");
                        return this.props.data.room.self.isMuted && (e = Object(u.d)("Unmute all notifications", "MuteButton")), d.createElement(b.Ua, {
                            type: b.Va.Alpha,
                            "data-test-selector": "mute-room-button",
                            onClick: this.toggleMuteSetting
                        }, d.createElement(b.Cb, {
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
                S = n("9C/b"),
                C = n("/HY+"),
                O = n("4qQ0"),
                _ = n("Gf3K"),
                w = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.openReportModal = function() {
                            t.props.isLoggedIn ? t.props.onShowModal(C.a, {
                                reportContext: {
                                    contentID: t.props.roomID,
                                    contentType: O.a.Room,
                                    targetUserID: t.props.data.room.owner.id
                                },
                                title: Object(u.d)("Report {roomName}", {
                                    roomName: t.props.data.room.name
                                }, "ReportRoomButton")
                            }) : t.props.login()
                        }, t
                    }
                    return c.__extends(t, e), t.prototype.render = function() {
                        return this.props.data.loading ? d.createElement(b.gb, null) : this.props.data.error ? d.createElement(b.Xa, null) : d.createElement(b.Ua, {
                            type: b.Va.Alert,
                            "data-test-selector": "report-room-button-selector",
                            onClick: this.openReportModal
                        }, d.createElement(b.Cb, {
                            padding: {
                                y: .5,
                                x: 1
                            },
                            margin: {
                                x: .5
                            }
                        }, Object(u.d)("Report", "RoomReportButton")))
                    }, t = c.__decorate([Object(p.a)(_, {
                        options: function(e) {
                            return {
                                variables: {
                                    id: e.roomID
                                }
                            }
                        }
                    })], t)
                }(d.Component),
                M = Object(S.a)(w),
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
                        return d.createElement(b.Xa, null, d.createElement(b.Ea, {
                            label: Object(u.d)("Room name", "RoomLabelsEditor"),
                            error: !!this.props.editRoomNameError,
                            errorMessage: this.props.editRoomNameError
                        }, d.createElement(b.Ra, {
                            type: b.Ta.Text,
                            value: this.props.roomName,
                            onChange: this.onRoomNameChange,
                            "data-test-selector": "name-input",
                            placeholder: Object(u.d)("Enter Room name here", "RoomLabelsEditor")
                        })), this.renderRoomTopicEditor())
                    }, t.prototype.renderRoomTopicEditor = function() {
                        if (void 0 !== this.props.roomTopic) return d.createElement(b.Xa, null, d.createElement(b.Cb, {
                            fullWidth: !0,
                            margin: {
                                top: 1,
                                bottom: 1
                            }
                        }), d.createElement(b.Ea, {
                            label: Object(u.d)("Room topic", "RoomLabelsEditor"),
                            error: !!this.props.editRoomTopicError,
                            errorMessage: this.props.editRoomTopicError
                        }, d.createElement(b.Qb, {
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
                U = function(e) {
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
                        if (this.props.data.loading) return d.createElement(b.gb, null);
                        if (this.props.data.error || !this.props.data.room) return d.createElement(b.Xa, null);
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
                        return d.createElement(b.Xa, null, e)
                    }, t.prototype.getOptionsView = function() {
                        return this.props.sessionUser && this.props.sessionUser.id.toString() === this.props.data.room.owner.id ? this.getBroadcasterOptionsView() : this.getNonBroadcasterOptionsView()
                    }, t.prototype.getBroadcasterOptionsView = function() {
                        return d.createElement(b.Xa, {
                            padding: {
                                y: .5
                            }
                        }, this.getEditLabelsSection(), d.createElement(b.Pa, null, d.createElement(b.Xa, {
                            display: b.X.Flex
                        }, d.createElement(b.Ua, {
                            type: b.Va.Alpha,
                            onClick: this.setPermissionsView,
                            "data-test-selector": "permissions-toggle"
                        }, d.createElement(b.Cb, {
                            padding: {
                                y: .5,
                                x: 1
                            },
                            margin: {
                                left: .5
                            },
                            display: b.X.Flex,
                            justifyContent: b.Wa.Between
                        }, Object(u.d)("Permissions", "RoomDetails"), d.createElement(b.Xa, {
                            display: b.X.Flex
                        }, d.createElement(b.W, {
                            color: b.O.Alt2
                        }, I.a[this.props.data.room.minimumAllowedRole]), d.createElement(b.Cb, {
                            className: "room-details__open-edit",
                            color: b.O.Link,
                            margin: {
                                left: .5
                            }
                        }, d.createElement(b.qb, {
                            asset: b.rb.GlyphArrDown,
                            height: 13
                        }))))))), d.createElement(b.Ua, {
                            type: b.Va.Alert,
                            onClick: this.openDeleteRoomModal,
                            "data-test-selector": "delete-button"
                        }, d.createElement(b.Cb, {
                            padding: {
                                y: .5,
                                x: 1
                            },
                            margin: {
                                left: .5
                            }
                        }, Object(u.d)("Delete", "RoomDetails"))), d.createElement(b.Xa, {
                            padding: {
                                x: 1
                            }
                        }, d.createElement(b.Cb, {
                            borderTop: !0,
                            margin: {
                                y: .5,
                                x: .5
                            }
                        })), d.createElement(T, {
                            roomID: this.props.roomID
                        }))
                    }, t.prototype.getNonBroadcasterOptionsView = function() {
                        return d.createElement(b.Xa, {
                            padding: {
                                y: .5
                            }
                        }, this.props.forActiveRoom && !!this.props.data.room.topic.length && d.createElement(b.Xa, {
                            padding: {
                                bottom: .5,
                                top: 1,
                                x: 1
                            },
                            margin: {
                                x: .5
                            }
                        }, d.createElement(b.W, {
                            className: "room-details__topic-description",
                            color: b.O.Alt2
                        }, this.props.data.room.topic), d.createElement(b.Cb, {
                            borderTop: !0,
                            fullWidth: !0,
                            margin: {
                                top: 1
                            }
                        })), this.props.data.room.owner.self.isChannelMember && d.createElement(T, {
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
                        var t = d.createElement(b.Pa, null, d.createElement(b.Ua, {
                            type: b.Va.Alpha,
                            onClick: this.setLabelsView,
                            "data-test-selector": "edit-labels"
                        }, d.createElement(b.Cb, {
                            padding: {
                                y: .5,
                                x: 1
                            },
                            margin: {
                                left: .5
                            },
                            display: b.X.Flex,
                            justifyContent: b.Wa.Between
                        }, e, d.createElement(b.Xa, {
                            display: b.X.Flex
                        }, d.createElement(b.Cb, {
                            className: "room-details__open-edit",
                            color: b.O.Link,
                            margin: {
                                left: .5
                            }
                        }, d.createElement(b.qb, {
                            asset: b.rb.GlyphArrDown,
                            height: 13
                        }))))));
                        return this.props.forActiveRoom ? d.createElement(b.Xa, null, d.createElement(b.Xa, {
                            padding: {
                                top: 1,
                                x: 1
                            },
                            margin: {
                                x: .5
                            }
                        }, d.createElement(b.Pa, {
                            position: b.hb.Relative
                        }, this.getTopicField()), !this.state.isTopicHovered && d.createElement(b.Cb, {
                            borderTop: !0,
                            fullWidth: !0,
                            margin: {
                                top: 1
                            }
                        })), d.createElement(b.Xa, {
                            padding: {
                                top: .5
                            }
                        }, t)) : t
                    }, t.prototype.getLabelsView = function() {
                        var e = void 0 !== this.state.updatedRoomName ? this.state.updatedRoomName : this.props.data.room.name,
                            t = void 0 !== this.state.updatedRoomTopic ? this.state.updatedRoomTopic : this.props.data.room.topic,
                            n = Object(u.d)("Edit name or topic", "RoomDetailsReturn");
                        return this.props.forActiveRoom && (n = Object(u.d)("Edit name", "RoomDetailsReturn")), d.createElement(b.Xa, null, d.createElement(b.Pa, null, d.createElement(b.Xa, {
                            display: b.X.Flex,
                            padding: {
                                y: .5
                            }
                        }, d.createElement(b.Ua, {
                            type: b.Va.Alpha,
                            onClick: this.setOptionsView
                        }, d.createElement(b.Cb, {
                            padding: {
                                y: .5
                            },
                            margin: {
                                left: 1
                            },
                            display: b.X.Flex
                        }, d.createElement(b.Cb, {
                            className: "room-details__close-edit",
                            color: b.O.Link,
                            margin: {
                                right: 1
                            }
                        }, d.createElement(b.qb, {
                            asset: b.rb.GlyphArrDown,
                            height: 13
                        })), n)))), d.createElement(b.Xa, {
                            padding: {
                                x: .5
                            }
                        }, d.createElement(b.Cb, {
                            borderTop: !0,
                            margin: {
                                x: 1
                            }
                        })), d.createElement(b.Xa, {
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
                        })), d.createElement(b.Cb, {
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
                        return d.createElement(b.Xa, null, d.createElement(b.Pa, null, d.createElement(b.Xa, {
                            display: b.X.Flex,
                            padding: {
                                y: .5
                            }
                        }, d.createElement(b.Ua, {
                            type: b.Va.Alpha,
                            onClick: this.setOptionsView
                        }, d.createElement(b.Cb, {
                            padding: {
                                y: .5
                            },
                            margin: {
                                left: 1
                            },
                            display: b.X.Flex
                        }, d.createElement(b.Cb, {
                            className: "room-details__close-edit",
                            color: b.O.Link,
                            margin: {
                                right: 1
                            }
                        }, d.createElement(b.qb, {
                            asset: b.rb.GlyphArrDown,
                            height: 13
                        })), Object(u.d)("Permissions", "RoomDetailsReturn"))))), d.createElement(b.Xa, {
                            padding: {
                                x: .5
                            }
                        }, d.createElement(b.Cb, {
                            borderTop: !0,
                            margin: {
                                x: 1
                            }
                        })), d.createElement(j.a, {
                            isPreviewable: this.props.data.room.isPreviewable,
                            minimumAllowedRole: this.props.data.room.minimumAllowedRole,
                            updatePermissions: this.updatePermissions
                        }), d.createElement(b.Cb, {
                            margin: {
                                y: 1,
                                left: 1
                            },
                            padding: {
                                left: .5
                            }
                        }, this.getSaveButton()))
                    }, t.prototype.getSaveButton = function() {
                        return d.createElement(b.z, {
                            onClick: this.saveUpdate,
                            state: this.state.isSaveButtonStateSuccess ? b.E.Success : b.E.Default,
                            type: this.state.isSaveButtonStateSuccess ? b.F.Text : b.F.Default
                        }, Object(u.d)("Save", "RoomDetails"))
                    }, t.prototype.getTopicField = function() {
                        var e, t = void 0 === this.state.updatedRoomTopic ? this.props.data.room.topic : this.state.updatedRoomTopic,
                            n = Object(u.d)("What do you want your community to talk about in this room?", "RoomDetails");
                        return e = this.state.isTopicFocused ? d.createElement(b.Qb, {
                            autoFocus: !0,
                            noResize: !0,
                            onChange: this.onRoomTopicChange,
                            value: t,
                            placeholder: n
                        }) : d.createElement(b.W, {
                            className: "room-details__topic-description",
                            color: b.O.Alt2,
                            italic: !t
                        }, t || n, d.createElement(b.U, {
                            onClick: this.focusTopic
                        }, d.createElement(b.Xa, {
                            padding: {
                                left: .5
                            },
                            className: "room-details__edit-topic"
                        }, Object(u.d)("Edit", "RoomDetails")))), d.createElement("div", null, e, this.state.editRoomTopicError && d.createElement(b.W, {
                            color: b.O.Error
                        }, this.state.editRoomTopicError), this.state.isTopicFocused && d.createElement(b.Xa, {
                            display: b.X.Flex,
                            justifyContent: b.Wa.End
                        }, !this.state.isSaveButtonStateSuccess && d.createElement(b.Xa, {
                            padding: {
                                top: .5
                            }
                        }, d.createElement(b.z, {
                            onClick: this.blurTopic,
                            type: b.F.Text
                        }, Object(u.d)("Cancel", "RoomDetails"))), d.createElement(b.Xa, {
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
            var P = Object(r.connect)(function(e) {
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
            })(U);
            n.d(t, "a", function() {
                return P
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
                return e.minimumAllowedRole === r.b.Everyone ? o.rb.Hash : t ? o.rb.Unlock : o.rb.Lock
            }
        }
    }
]);