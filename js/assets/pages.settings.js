webpackJsonp([56], {
    1901: function(e, t) {},
    1902: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "GlobalNotificationSettings_SetChannelGlobalIsEnabled"
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
                                value: "FollowUserInput"
                            }
                        }
                    },
                    defaultValue: null
                }],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "followUser"
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
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "follow"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "disableNotifications"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
                                    }]
                                }
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 172
            }
        };
        n.loc.source = {
            body: "mutation GlobalNotificationSettings_SetChannelGlobalIsEnabled($input: FollowUserInput!) {\n  followUser(input: $input) {\n    follow {\n      disableNotifications\n    }\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    1903: function(e, t) {},
    1904: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "AdvancedNotificationSettings_User"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "limit"
                        }
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "Int"
                        }
                    },
                    defaultValue: null
                }, {
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "cursor"
                        }
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "Cursor"
                        }
                    },
                    defaultValue: null
                }],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        alias: null,
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
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "id"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "follows"
                                },
                                arguments: [{
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "first"
                                    },
                                    value: {
                                        kind: "Variable",
                                        name: {
                                            kind: "Name",
                                            value: "limit"
                                        }
                                    }
                                }, {
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "after"
                                    },
                                    value: {
                                        kind: "Variable",
                                        name: {
                                            kind: "Name",
                                            value: "cursor"
                                        }
                                    }
                                }],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "totalCount"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
                                    }, {
                                        kind: "Field",
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "edges"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "cursor"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: null
                                            }, {
                                                kind: "Field",
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "node"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{
                                                        kind: "Field",
                                                        alias: null,
                                                        name: {
                                                            kind: "Name",
                                                            value: "id"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: null
                                                    }, {
                                                        kind: "Field",
                                                        alias: null,
                                                        name: {
                                                            kind: "Name",
                                                            value: "displayName"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: null
                                                    }, {
                                                        kind: "Field",
                                                        alias: null,
                                                        name: {
                                                            kind: "Name",
                                                            value: "profileImageURL"
                                                        },
                                                        arguments: [{
                                                            kind: "Argument",
                                                            name: {
                                                                kind: "Name",
                                                                value: "width"
                                                            },
                                                            value: {
                                                                kind: "IntValue",
                                                                value: "70"
                                                            }
                                                        }],
                                                        directives: [],
                                                        selectionSet: null
                                                    }, {
                                                        kind: "Field",
                                                        alias: null,
                                                        name: {
                                                            kind: "Name",
                                                            value: "followers"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: {
                                                            kind: "SelectionSet",
                                                            selections: [{
                                                                kind: "Field",
                                                                alias: null,
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "totalCount"
                                                                },
                                                                arguments: [],
                                                                directives: [],
                                                                selectionSet: null
                                                            }]
                                                        }
                                                    }]
                                                }
                                            }, {
                                                kind: "Field",
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "notificationSettings"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{
                                                        kind: "Field",
                                                        alias: null,
                                                        name: {
                                                            kind: "Name",
                                                            value: "isEnabled"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: null
                                                    }]
                                                }
                                            }]
                                        }
                                    }, {
                                        kind: "Field",
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "pageInfo"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "hasNextPage"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: null
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
                end: 466
            }
        };
        n.loc.source = {
            body: "query AdvancedNotificationSettings_User($limit: Int, $cursor: Cursor) {\n  currentUser {\n    id\n    follows(first: $limit, after: $cursor) {\n      totalCount\n      edges {\n        cursor\n        node {\n          id\n          displayName\n          profileImageURL(width: 70)\n          followers {\n            totalCount\n          }\n        }\n        notificationSettings {\n          isEnabled\n        }\n      }\n      pageInfo {\n        hasNextPage\n      }\n    }\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    1905: function(e, t) {},
    1906: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "GlobalNotificationSettings_SetNotificationSetting"
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
                                value: "SetNotificationSettingInput"
                            }
                        }
                    },
                    defaultValue: null
                }],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "setNotificationSetting"
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
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "settingState"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 164
            }
        };
        n.loc.source = {
            body: "mutation GlobalNotificationSettings_SetNotificationSetting($input: SetNotificationSettingInput!) {\n  setNotificationSetting(input: $input) {\n    settingState\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    1907: function(e, t) {},
    1908: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "PlatformNotificationSettings_User"
                },
                variableDefinitions: [],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        alias: null,
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
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "id"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "displayName"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "notificationSettings"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "category"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
                                    }, {
                                        kind: "Field",
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "platforms"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "platformName"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: null
                                            }, {
                                                kind: "Field",
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "settingState"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: null
                                            }, {
                                                kind: "Field",
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "isEnabled"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: null
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
                end: 221
            }
        };
        n.loc.source = {
            body: "query PlatformNotificationSettings_User {\n  currentUser {\n    id\n    displayName\n    notificationSettings {\n      category\n      platforms {\n        platformName\n        settingState\n        isEnabled\n      }\n    }\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    1909: function(e, t) {},
    2030: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i, a = n(0),
            o = n(1),
            r = n(2),
            l = n(30),
            s = n(137),
            c = n(406),
            d = n(6),
            m = n(3);
        ! function(e) {
            e.Notifications = "notifications"
        }(i || (i = {}));
        var u, p = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return o.createElement(m.U, {
                        className: "settings-tabs"
                    }, o.createElement(m.U, {
                        margin: {
                            bottom: 1
                        }
                    }, o.createElement(m._21, {
                        type: m._26.H2
                    }, Object(r.d)("Settings", "SettingsTabs"))), o.createElement(m.U, {
                        margin: {
                            bottom: 2
                        }
                    }, o.createElement(m._19, null, o.createElement(m._18, {
                        targetBlank: Object(s.b)(),
                        linkTo: Object(s.a)("/settings/profile"),
                        active: !1
                    }, Object(r.d)("Profile", "SettingsTabs")), o.createElement(m._18, {
                        linkTo: "https://twitch.amazon.com/prime?ref_=sm_w_tsp_p_t",
                        active: !1
                    }, Object(r.d)("Prime", "SettingsTabs")), o.createElement(m._18, {
                        targetBlank: Object(s.b)(),
                        linkTo: Object(s.a)("/settings/channel"),
                        active: !1
                    }, Object(r.d)("Channel and Videos", "SettingsTabs")), o.createElement(m._18, {
                        targetBlank: Object(s.b)(),
                        linkTo: Object(s.a)("/settings/security"),
                        active: !1
                    }, Object(r.d)("Security and Privacy", "SettingsTabs")), o.createElement(m._18, {
                        linkTo: Object(c.e)(i.Notifications),
                        active: this.props.activeTab === i.Notifications,
                        "data-a-target": "following-channels-tab"
                    }, Object(r.d)("Notifications", "SettingsTab")), o.createElement(m._18, {
                        targetBlank: Object(s.b)(),
                        linkTo: Object(s.a)("/settings/connections"),
                        active: !1
                    }, Object(r.d)("Connections", "SettingsTabs")), o.createElement(m._18, {
                        targetBlank: Object(s.b)(),
                        linkTo: Object(s.a)("/subscriptions"),
                        active: !1
                    }, Object(r.d)("Subscriptions", "SettingsTabs")))))
                }, t = a.__decorate([Object(d.c)("SettingsTabs")], t)
            }(o.Component),
            g = p,
            f = n(922),
            h = n(918),
            S = n(14),
            b = n(11),
            v = n(66),
            y = n(9),
            k = n(23),
            N = (n(1901), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.changeHandler = function() {
                        t.props.onChange(t.props.userId, t.props.isEnabled)
                    }, t
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    return o.createElement(m._17, {
                        className: "advanced-notification-settings-toggle",
                        display: m.H.Flex,
                        justifyContent: m.T.Between,
                        background: m.m.Base,
                        padding: {
                            x: 5,
                            y: 1
                        },
                        borderBottom: !0
                    }, o.createElement(m.U, {
                        margin: {
                            x: 5
                        },
                        display: m.H.Flex,
                        flexGrow: 1,
                        alignItems: m.c.Center
                    }, o.createElement(m.U, {
                        flexShrink: 0,
                        margin: {
                            right: 1
                        }
                    }, o.createElement(m.l, {
                        imageSrc: this.props.thumbnail,
                        imageAlt: this.props.text,
                        size: 40
                    })), o.createElement(m.U, {
                        flexGrow: 1,
                        display: m.H.Flex,
                        flexDirection: m.J.Column
                    }, o.createElement(m._21, {
                        fontSize: m.L.Size5
                    }, this.props.text), o.createElement(m._21, {
                        type: m._26.Span,
                        color: m.F.Alt2
                    }, this.props.description)), o.createElement(m.U, {
                        display: m.H.Flex,
                        flexGrow: 0,
                        flexShrink: 1
                    }, o.createElement(m._29, {
                        checked: this.props.isEnabled,
                        onChange: this.changeHandler,
                        "data-test-selector": "toggle-selector",
                        id: this.props.userId
                    }), o.createElement(m.U, {
                        className: this.props.saved ? "advanced-notification-settings-toggle__saved" : "advanced-notification-settings-toggle__saved--hide",
                        padding: {
                            x: 1
                        }
                    }, o.createElement(m._21, {
                        fontSize: m.L.Size5,
                        color: m.F.Link
                    }, Object(r.d)("Saved", "AdvancedNotificationSettingsToggle"))))))
                }, t
            }(o.Component)),
            _ = n(1902),
            E = (n(1903), n(1904)),
            w = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        collapsed: !0,
                        saved: new Set
                    }, t.toggleCollapse = function() {
                        t.setState(function(e) {
                            return {
                                collapsed: !e.collapsed
                            }
                        })
                    }, t.toggleChannelNotification = function(e, n) {
                        return a.__awaiter(t, void 0, void 0, function() {
                            var t, i, o;
                            return a.__generator(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        return this.props.data && this.props.data.currentUser && this.props.setAdvancedNotificationSetting ? (t = a.__assign({}, Object(k.a)({
                                            disableNotifications: n,
                                            targetID: e
                                        }), {
                                            optimisticResponse: {
                                                followUser: {
                                                    __typename: "FollowUserPayload",
                                                    follow: {
                                                        disableNotifications: n,
                                                        __typename: "Follow"
                                                    }
                                                }
                                            }
                                        }), [4, this.props.setAdvancedNotificationSetting(t)]) : [2];
                                    case 1:
                                        return i = r.sent(), o = function(t) {
                                            for (var n = 0, a = t.currentUser.follows.edges; n < a.length; n++) {
                                                var o = a[n];
                                                o.node.id === e && (o.notificationSettings.isEnabled = !i.data.followUser.follow.disableNotifications)
                                            }
                                            return t
                                        }, Object(k.d)(E, {
                                            limit: 50
                                        }, o), this.markSaved(e), [2]
                                }
                            })
                        })
                    }, t
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    if (!this.props.data || this.props.data.loading && !this.props.data.currentUser) return o.createElement(m._17, {
                        padding: {
                            y: 1
                        },
                        borderBottom: !0
                    }, o.createElement(m.X, {
                        fillContent: !0
                    }));
                    if (this.props.data.error) return o.createElement(v.a, {
                        message: Object(r.d)("Error loading data.", "AdvancedNotificationSettings")
                    });
                    if (!this.props.data.currentUser) return o.createElement(m._17, {
                        padding: {
                            y: 1
                        },
                        borderBottom: !0
                    }, o.createElement(v.a, {
                        message: Object(r.d)("You must be logged in to update your settings", "AdvancedNotificationSettings")
                    }));
                    var e = Object(r.d)("{followCount, plural, one {You follow # channel} other {You follow # channels}}", {
                            followCount: this.props.data.currentUser.follows.totalCount
                        }, "AdvancedNotificationSettings"),
                        t = o.createElement(m._17, {
                            background: m.m.Alt2,
                            borderBottom: !0
                        }, o.createElement(m.S, {
                            onClick: this.toggleCollapse,
                            alpha: !0,
                            "data-test-selector": "header-selector"
                        }, o.createElement(m.U, {
                            display: m.H.Flex,
                            padding: {
                                x: 2,
                                y: 1
                            }
                        }, o.createElement(m.U, {
                            className: "advanced-notification-settings__header",
                            flexGrow: 0
                        }, o.createElement(m._21, {
                            fontSize: m.L.Size5,
                            color: m.F.Alt2,
                            bold: !0
                        }, Object(r.d)("Advanced", "AdvancedNotificationSettings"))), o.createElement(m.U, {
                            padding: {
                                x: 1
                            },
                            flexGrow: 1
                        }, o.createElement(m._21, {
                            "data-test-selector": "description-selector",
                            fontSize: m.L.Size5,
                            color: m.F.Alt2
                        }, e)), o.createElement(m.U, {
                            className: this.state.collapsed ? "advanced-notification-settings--collapse" : "advanced-notification-settings--expand",
                            flexGrow: 0,
                            flexShrink: 1,
                            display: m.H.Flex,
                            justifyContent: m.T.Center
                        }, o.createElement(m._8, {
                            asset: m._9.AngleRight,
                            type: m._10.Alt2
                        }))))),
                        n = !this.props.data.loading && !this.props.data.error && !!this.props.data.currentUser.follows.pageInfo.hasNextPage;
                    return this.props.data.currentUser.follows.totalCount > 0 ? this.state.collapsed ? o.createElement(m._17, null, t) : o.createElement(m._17, null, t, o.createElement(m._17, {
                        borderBottom: !0,
                        padding: 2
                    }, o.createElement(m.U, {
                        padding: {
                            bottom: 1
                        }
                    }, o.createElement(m._21, {
                        fontSize: m.L.Size5,
                        color: m.F.Alt2
                    }, Object(r.d)("Manage which channels you receive notifications for.", "AdvancedNotificationSettings"))), o.createElement(m.U, {
                        padding: {
                            bottom: 1
                        }
                    }, o.createElement(m._21, {
                        fontSize: m.L.Size4,
                        color: m.F.Alt
                    }, e)), o.createElement(m._17, {
                        borderTop: !0,
                        borderLeft: !0,
                        borderRight: !0,
                        margin: {
                            bottom: .5
                        }
                    }, this.renderToggles(), o.createElement(l.a, {
                        loadMore: this.props.loadMore,
                        enabled: n,
                        pixelThreshold: 200
                    })))) : null
                }, t.prototype.renderToggles = function() {
                    if (this.props.data && (!this.props.data.loading || this.props.data.currentUser)) {
                        for (var e = [], t = 0, n = this.props.data.currentUser.follows.edges; t < n.length; t++) {
                            var i = n[t];
                            i.node && i.node.id && i.node.followers && e.push(o.createElement(N, {
                                userId: i.node.id,
                                text: i.node.displayName,
                                description: Object(r.d)("{followerCount,number} followers", {
                                    followerCount: i.node.followers.totalCount
                                }, "AdvancedNotificationSettings"),
                                thumbnail: i.node.profileImageURL,
                                isEnabled: i.notificationSettings.isEnabled,
                                onChange: this.toggleChannelNotification,
                                saved: this.getDisplaySaved(i.node.id),
                                key: i.node.id
                            }))
                        }
                        return e
                    }
                }, t.prototype.markSaved = function(e) {
                    this.setState(function(t) {
                        return t.saved.add(e), {
                            saved: t.saved
                        }
                    }), setTimeout(this.clearSaved(e), 2e3)
                }, t.prototype.getDisplaySaved = function(e) {
                    return this.state.saved.has(e)
                }, t.prototype.clearSaved = function(e) {
                    var t = this;
                    return function() {
                        t.setState(function(t) {
                            return t.saved.delete(e), {
                                saved: t.saved
                            }
                        })
                    }
                }, t
            }(o.Component),
            O = Object(b.compose)(Object(y.a)(E, {
                options: function() {
                    return {
                        fetchPolicy: "cache-and-network",
                        variables: {
                            limit: 50
                        }
                    }
                },
                props: function(e) {
                    return a.__assign({}, e, {
                        loadMore: function() {
                            return e.data.fetchMore({
                                query: E,
                                variables: a.__assign({}, e.data.variables, {
                                    cursor: e.data.currentUser.follows.edges[e.data.currentUser.follows.edges.length - 1].cursor
                                }),
                                updateQuery: function(e, t) {
                                    var n = t.fetchMoreResult,
                                        i = n;
                                    return {
                                        currentUser: a.__assign({}, i.currentUser, {
                                            follows: a.__assign({}, i.currentUser.follows, {
                                                edges: Object(k.b)(e.currentUser.follows.edges, i.currentUser.follows.edges)
                                            })
                                        })
                                    }
                                }
                            })
                        }
                    })
                }
            }), Object(y.a)(_, {
                name: "setAdvancedNotificationSetting"
            }), Object(d.c)("AdvancedNotificationSettings"))(w),
            x = (n(1905), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.changeHandler = function() {
                        t.props.onChange(t.props.category, t.props.isEnabled)
                    }, t
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    return o.createElement(m._17, {
                        className: "platform-notification-settings-toggle",
                        display: m.H.Flex,
                        alignItems: m.c.Start,
                        background: m.m.Alt,
                        margin: {
                            top: 1,
                            bottom: .5
                        }
                    }, o.createElement(m.U, {
                        display: m.H.Flex,
                        flexDirection: m.J.Column,
                        flexGrow: 1
                    }, o.createElement(m.U, {
                        margin: {
                            bottom: .5
                        }
                    }, o.createElement(m._21, {
                        fontSize: m.L.Size4
                    }, this.props.text)), o.createElement(m._21, {
                        fontSize: m.L.Size5,
                        color: m.F.Alt2
                    }, this.props.description)), o.createElement(m.U, {
                        display: m.H.Flex,
                        margin: {
                            top: .5
                        },
                        flexGrow: 0,
                        flexShrink: 0
                    }, o.createElement(m.U, {
                        margin: {
                            right: 1
                        }
                    }, o.createElement(m._29, {
                        checked: this.props.isEnabled,
                        disabled: this.props.disabled,
                        onChange: this.changeHandler,
                        "data-test-selector": "toggle-selector"
                    })), o.createElement(m.U, {
                        className: this.props.saved ? "platform-notification-settings-toggle__saved" : "platform-notification-settings-toggle__saved--hide",
                        padding: {
                            x: 1
                        }
                    }, o.createElement(m._21, {
                        fontSize: m.L.Size5,
                        color: m.F.Link
                    }, Object(r.d)("Saved", "PlatformNotificationSettingsToggle")))))
                }, t
            }(o.Component)),
            C = n(1906),
            j = (n(1907), n(1908));
        ! function(e) {
            e.onsite = "onsite", e.email = "email", e.push = "push"
        }(u || (u = {}));
        var P = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        collapsed: t.props.startCollapsed,
                        saved: new Set
                    }, t.VisibleSettings = [{
                        category: "LIVE",
                        name: Object(r.d)("Live", "PlatformNotificationSettings"),
                        description: Object(r.d)("When a streamer I follow goes Live", "PlatformNotificationSettings")
                    }, {
                        category: "VIDEOS",
                        name: Object(r.d)("Videos", "PlatformNotificationSettings"),
                        description: Object(r.d)("When a channel I follow posts a video", "PlatformNotificationSettings")
                    }, {
                        category: "CLIPS",
                        name: Object(r.d)("Clips", "PlatformNotificationSettings"),
                        description: Object(r.d)("Receive notifications for clips you made and clips made by your viewers", "PlatformNotificationSettings")
                    }, {
                        category: "EVENTS",
                        name: Object(r.d)("Events", "PlatformNotificationSettings"),
                        description: Object(r.d)("Any time an event I follow starts", "PlatformNotificationSettings")
                    }, {
                        category: "CHAT",
                        name: Object(r.d)("Chat", "PlatformNotificationSettings"),
                        description: Object(r.d)("Any time there’s Rooms activity related to me.", "PlatformNotificationSettings")
                    }, {
                        category: "FRIENDS",
                        name: Object(r.d)("Friends", "PlatformNotificationSettings"),
                        description: Object(r.d)("When a friend sends me a message", "PlatformNotificationSettings")
                    }, {
                        category: "STREAMER",
                        name: Object(r.d)("Your Channel", "PlatformNotificationSettings"),
                        description: Object(r.d)("Receive notifications when viewers follow your channel or auto host you", "PlatformNotificationSettings")
                    }, {
                        category: "MODERATOR",
                        name: Object(r.d)("Moderator", "PlatformNotificationSettings"),
                        description: Object(r.d)("Any time I get a notification as a moderator", "PlatformNotificationSettings")
                    }, {
                        category: "DEVELOPERS",
                        name: Object(r.d)("Third-Party Applications", "PlatformNotificationSettings"),
                        description: Object(r.d)("Receive notifications for drops", "PlatformNotificationSettings")
                    }, {
                        category: "MARKETING",
                        name: Object(r.d)("Announcements", "PlatformNotificationSettings"),
                        description: Object(r.d)("Receive notifications from Twitch for product announcements", "PlatformNotificationSettings")
                    }, {
                        category: "COMMERCE",
                        name: Object(r.d)("Gifts", "PlatformNotificationSettings"),
                        description: Object(r.d)("Any time someone gifts me a Subscription", "PlatformNotificationSettings")
                    }], t.toggleAll = function() {
                        t.toggleSettingCategory("ALL", t.getGlobalStateForPlatform())
                    }, t.toggleCollapse = function() {
                        t.setState(function(e) {
                            return {
                                collapsed: !e.collapsed
                            }
                        })
                    }, t.toggleSettingCategory = function(e, n) {
                        return a.__awaiter(t, void 0, void 0, function() {
                            var t, i, o, r, l = this;
                            return a.__generator(this, function(s) {
                                switch (s.label) {
                                    case 0:
                                        return this.props.data && this.props.data.currentUser && this.props.setNotificationSetting ? (t = n ? "off" : "on", i = a.__assign({}, Object(k.a)({
                                            category: e,
                                            platform: this.props.platformName,
                                            settingState: t
                                        }), {
                                            optimisticResponse: {
                                                setNotificationSetting: {
                                                    settingState: t,
                                                    __typename: "SetNotificationSettingPayload"
                                                }
                                            }
                                        }), [4, this.props.setNotificationSetting(i)]) : [2];
                                    case 1:
                                        return o = s.sent(), r = function(t) {
                                            return t.currentUser.notificationSettings = t.currentUser.notificationSettings.map(function(t) {
                                                return t.category === e && (t.platforms = t.platforms.map(function(e) {
                                                    return e.platformName === l.props.platformName && (e.isEnabled = "on" === o.data.setNotificationSetting.settingState, e.settingState = o.data.setNotificationSetting.settingState), e
                                                })), t
                                            }), t
                                        }, Object(k.d)(j, {}, r), this.markSaved(e), [2]
                                }
                            })
                        })
                    }, t
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    if (!this.props.data || this.props.data.loading && !this.props.data.currentUser) return o.createElement(m.U, {
                        padding: 1
                    }, o.createElement(m.X, {
                        fillContent: !0
                    }));
                    if (this.props.data.error) return o.createElement(v.a, {
                        message: Object(r.d)("Error loading data.", "PlatformNotificationSettings")
                    });
                    if (!this.props.data.currentUser) return o.createElement(m._17, {
                        margin: {
                            top: 1
                        }
                    }, o.createElement(v.a, {
                        message: Object(r.d)("You must be logged in to update your settings.", "PlatformNotificationSettings")
                    }));
                    var e = o.createElement(m._17, {
                        background: m.m.Alt2,
                        borderBottom: !0
                    }, o.createElement(m.S, {
                        onClick: this.toggleCollapse,
                        alpha: !0
                    }, o.createElement(m.U, {
                        display: m.H.Flex,
                        padding: {
                            x: 2,
                            y: 1
                        }
                    }, o.createElement(m.U, {
                        className: "platform-notification-settings__header",
                        flexGrow: 0,
                        "data-test-selector": "collapsible-header"
                    }, o.createElement(m._21, {
                        "data-test-selector": "display-name",
                        fontSize: m.L.Size5,
                        color: m.F.Alt2,
                        bold: !0
                    }, this.props.displayName)), o.createElement(m.U, {
                        padding: {
                            x: 1
                        },
                        flexGrow: 1
                    }, o.createElement(m._21, {
                        fontSize: m.L.Size5,
                        color: m.F.Alt2
                    }, this.getSettingTurnedOnMessage())), o.createElement(m.U, {
                        className: this.state.collapsed ? "platform-notification-settings--collapse" : "platform-notification-settings--expand",
                        flexGrow: 0,
                        flexShrink: 1,
                        display: m.H.Flex,
                        justifyContent: m.T.Center
                    }, o.createElement(m._8, {
                        asset: m._9.AngleRight,
                        type: m._10.Alt2
                    })))));
                    return this.state.collapsed ? o.createElement(m._17, null, e) : o.createElement(m._17, null, e, o.createElement(m._17, {
                        padding: 2,
                        borderBottom: !0
                    }, o.createElement(m.U, {
                        padding: {
                            bottom: 1
                        }
                    }, o.createElement(m._21, {
                        "data-test-selector": "description",
                        fontSize: m.L.Size5,
                        color: m.F.Alt2
                    }, this.props.description)), o.createElement(m._17, {
                        margin: {
                            bottom: .5
                        },
                        borderBottom: !0
                    }, o.createElement(m.U, {
                        display: m.H.Flex,
                        margin: {
                            right: 4
                        },
                        padding: {
                            right: 5,
                            bottom: 1
                        },
                        justifyContent: m.T.Center
                    }, o.createElement(m.U, {
                        flexGrow: 1
                    }, o.createElement(m._21, {
                        fontSize: m.L.Size4,
                        color: m.F.Alt,
                        "data-test-selector": "explanation"
                    }, this.props.explanation)), o.createElement(m.U, {
                        display: m.H.Flex,
                        flexGrow: 0,
                        flexShrink: 0
                    }, o.createElement(m.U, {
                        margin: {
                            right: 1
                        }
                    }, o.createElement(m._29, {
                        "data-test-selector": "all-toggle",
                        checked: this.getGlobalStateForPlatform(),
                        onChange: this.toggleAll
                    })), o.createElement(m.U, {
                        padding: {
                            x: 1
                        },
                        "data-test-selector": "saved-selector",
                        className: this.getDisplaySaved("ALL") ? "platform-notification-settings__saved" : "platform-notification-settings__saved--hide"
                    }, o.createElement(m._21, {
                        fontSize: m.L.Size5,
                        color: m.F.Link
                    }, Object(r.d)("Saved", "PlatformNotificationSettings")))))), o.createElement(m.U, {
                        display: m.H.Flex,
                        flexDirection: m.J.Column,
                        margin: {
                            right: 4,
                            left: 5
                        },
                        padding: {
                            right: 5,
                            left: 5
                        }
                    }, this.renderToggles())))
                }, t.prototype.getSettingByCategory = function(e) {
                    var t = null;
                    if (!this.props.data) return null;
                    for (var n = 0, i = this.props.data.currentUser.notificationSettings; n < i.length; n++) {
                        var a = i[n];
                        a.category === e && (t = a.platforms)
                    }
                    if (!t) return null;
                    for (var o = 0, r = t; o < r.length; o++) {
                        var l = r[o];
                        if (l.platformName === this.props.platformName) return l
                    }
                    return null
                }, t.prototype.getSettingTurnedOnMessage = function() {
                    for (var e = 0, t = 0, n = 0, i = this.VisibleSettings; n < i.length; n++) {
                        var a = i[n],
                            o = this.getSettingByCategory(a.category);
                        o && (e++, o.isEnabled && t++)
                    }
                    return 0 !== t && this.getGlobalStateForPlatform() ? t < e ? Object(r.d)("Some notifications turned on", "PlatformNotificationSettings") : Object(r.d)("All notifications turned on", "PlatformNotificationSettings") : Object(r.d)("All notifications turned off", "PlatformNotificationSettings")
                }, t.prototype.getGlobalStateForPlatform = function() {
                    var e = this.getSettingByCategory("ALL");
                    return !!e && e.isEnabled
                }, t.prototype.renderToggles = function() {
                    for (var e = [], t = 0, n = this.VisibleSettings; t < n.length; t++) {
                        var i = n[t],
                            a = this.getSettingByCategory(i.category);
                        a && e.push(o.createElement(x, {
                            category: i.category,
                            text: i.name,
                            description: i.description,
                            isEnabled: a.isEnabled,
                            onChange: this.toggleSettingCategory,
                            disabled: !this.getGlobalStateForPlatform(),
                            key: i.category,
                            saved: this.getDisplaySaved(i.category)
                        }))
                    }
                    return e
                }, t.prototype.markSaved = function(e) {
                    this.setState(function(t) {
                        return t.saved.add(e), {
                            saved: t.saved
                        }
                    }), setTimeout(this.clearSaved(e), 2e3)
                }, t.prototype.getDisplaySaved = function(e) {
                    return this.state.saved.has(e)
                }, t.prototype.clearSaved = function(e) {
                    var t = this;
                    return function() {
                        t.setState(function(t) {
                            return t.saved.delete(e), {
                                saved: t.saved
                            }
                        })
                    }
                }, t
            }(o.Component),
            U = Object(b.compose)(Object(d.c)("PlatformNotificationSettings"), Object(y.a)(j, {
                options: function() {
                    return {
                        fetchPolicy: "cache-and-network"
                    }
                }
            }), Object(y.a)(C, {
                name: "setNotificationSetting"
            }))(P),
            F = (n(1909), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.onRender()
                }, t.prototype.componentDidUpdate = function() {
                    this.onRender()
                }, t.prototype.render = function() {
                    return o.createElement(l.b, {
                        className: "notification-settings"
                    }, o.createElement(m.U, {
                        padding: 3
                    }, o.createElement(g, {
                        activeTab: i.Notifications
                    }), o.createElement(m._17, {
                        borderRight: !0,
                        borderLeft: !0,
                        borderTop: !0
                    }, o.createElement(m._17, {
                        background: m.m.Alt,
                        padding: {
                            x: 2,
                            y: 1
                        },
                        borderBottom: !0
                    }, o.createElement(m.U, {
                        margin: {
                            bottom: .5
                        }
                    }, o.createElement(m._21, {
                        fontSize: m.L.Size3,
                        color: m.F.Alt
                    }, Object(r.d)("Notifications", "GlobalNotificationSettingsPage"))), o.createElement(m.U, null, o.createElement(m._21, {
                        fontSize: m.L.Size5,
                        color: m.F.Alt2
                    }, Object(r.d)("Get the notifications you care about, where you want to see them.", "GlobalNotificationSettingsPage")))), o.createElement(U, {
                        startCollapsed: !1,
                        platformName: u.onsite,
                        displayName: Object(r.d)("On Twitch", "GlobalNotificationSettingsPage"),
                        description: Object(r.d)("We'll always keep you informed on important updates to Twitch and your account.", "GlobalNotificationSettingsPage"),
                        explanation: Object(r.d)("Send me notifications on Twitch about", "GlobalNotificationSettingsPage"),
                        key: "onsite"
                    }), o.createElement(U, {
                        startCollapsed: !0,
                        platformName: u.email,
                        displayName: Object(r.d)("By Email", "GlobalNotificationSettingsPage"),
                        description: Object(r.d)("Receive important notifications through email. You can turn off specific emails using the unsubscribe link at the bottom of the email.", "GlobalNotificationSettingsPage"),
                        explanation: Object(r.d)("Send me emails about", "GlobalNotificationSettingsPage"),
                        key: "email"
                    }), o.createElement(U, {
                        platformName: u.push,
                        startCollapsed: !0,
                        displayName: Object(r.d)("On Mobile", "GlobalNotificationSettingsPage"),
                        description: Object(r.d)("Get Twitch updates on the go. Receive notifications right on your phone's home screen.", "GlobalNotificationSettingsPage"),
                        explanation: Object(r.d)("Send me push notifications", "GlobalNotificationSettingsPage"),
                        key: "push"
                    }), o.createElement(O, null))))
                }, t.prototype.onRender = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t = a.__decorate([Object(d.c)("GlobalNotificationSettingsPage", {
                    destination: h.a.NotificationSettingsPage
                }), Object(f.a)({
                    location: S.PageviewLocation.SettingsPage
                })], t)
            }(o.Component)),
            T = F;
        n.d(t, "GlobalNotificationSettingsPage", function() {
            return T
        })
    },
    918: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return i
        });
        var i = {
            BrowseCommunities: "browse.communities",
            BrowseCreative: "browse.creative",
            BrowseForYou: "browse.for-you",
            ChannelIndex: "channel.index.index",
            ChannelDashboardAchievements: "channel.dashboard.achievements",
            ChannelDashboardModeration: "channel.dashboard.moderation",
            ChannelDashboardStreamSummary: "channel.dashboard.stream-summary",
            ChannelClips: "channel.clips",
            ChannelClipsManager: "videoManager.clips.channel",
            ChannelCollections: "channel.collections",
            ChannelEvents: "channel.events",
            ChatPopout: "chat",
            DevOnly: "dev",
            DirectoryCommunityByLanguage: "directory.community.language",
            DirectoryCommunityIndex: "directory.community.index",
            DirectoryCommunityDetails: "directory.community.details",
            DirectoryGames: "directory.games",
            DirectoryPopular: "directory.popular",
            DirectoryGameIndex: "directory.game.index",
            DirectoryGameClips: "directory.game.clips",
            DirectoryGameDetails: "directory.game.details",
            DirectoryGameVideos: "directory.game.videos",
            DirectoryFollowingIndex: "directory.following.index",
            DirectoryFollowingGames: "directory.following.games",
            DirectoryFollowingVideos: "directory.following.videos.video-type",
            DirectoryFollowingHosts: "directory.following.hosts",
            DirectoryFollowingLiveChannels: "directory.following.channels",
            DirectoryFollowingCommunities: "directory.following.communities",
            EmailVerification: "emailVerification",
            EventDetails: "event.details",
            Index: "index",
            MyClipsManager: "videoManager.clips",
            NotificationSettingsPage: "settings.notificationSettings",
            OnboardingIndex: "onboarding.index",
            ReportUserPage: "reportUser.page",
            StoreMerchPage: "store.merch",
            SubsLandingPage: "subs.landing",
            SubsBroadcasterPage: "subs.broadcaster",
            TeamsDashboardBasicInfo: "teams.dashboard.basic-info",
            TeamsDashboardCustomize: "teams.dashboard.customize",
            TeamsDashboardFeaturedChannels: "teams.dashboard.featured-channels",
            TeamsDashboardMembers: "teams.dashboard.members",
            TeamsDashboardStats: "teams.dashboard.stats",
            TeamsDashboardRevenue: "teams.dashboard.revenue",
            VideosPage: "videos",
            VideoWatchPage: "video",
            VideoManagerPage: "videoManager.page",
            VideoManagerEditPropertiesPage: "videoManager.edit",
            VideoManagerUploadPage: "videoManager.upload",
            VideoManagerUploadListPage: "videoManager.upload-list"
        }
    },
    922: function(e, t, n) {
        "use strict";

        function i(e) {
            return function(t) {
                var n = function(n) {
                    function i(t) {
                        var i = n.call(this, t) || this;
                        return i.tracked = !1, i.referenceTracking = {}, i.trackPageview = function() {
                            if (!(i.tracked || e.skip && e.skip(i.props))) {
                                i.tracked = !0, s.n.adBlockSentinel.pageTransition();
                                var t = {};
                                "function" == typeof e.properties ? t = e.properties(i.props) : e.properties && (t = a.__assign({}, e.properties));
                                var n = a.__assign({}, i.props);
                                n.location && n.location.state && (t.medium = n.location.state.medium, t.content = n.location.state.content, t.content_index = n.location.state.content_index);
                                var o = i.referenceTracking,
                                    r = o.content,
                                    l = o.medium,
                                    c = o.content_index;
                                s.n.tracking.trackPageview(a.__assign({
                                    content: r,
                                    medium: l,
                                    content_index: c,
                                    location: e.location
                                }, t))
                            }
                        }, s.i.debug("pageViewTracking", e), t.rootLatencyTracker ? t.rootLatencyTracker.setLocation(e.location) : s.i.warn("No latency tracker exists! This means no data will be sent to Spade.", e), i
                    }
                    return a.__extends(i, n), i.prototype.componentDidMount = function() {
                        var e = this;
                        this.referenceTracking = this.stripTTParams(this.props.history.location), this.trackPageview(), this.props.history.listen(function(t, n) {
                            "REPLACE" !== n && (e.tracked = !1, e.referenceTracking = {})
                        })
                    }, i.prototype.componentDidUpdate = function() {
                        this.trackPageview()
                    }, i.prototype.render = function() {
                        return r.createElement(t, a.__assign({}, this.props))
                    }, i.prototype.stripTTParams = function(e) {
                        var t = "" !== e.search ? o.parse(e.search) : {},
                            n = {
                                content: t.tt_content,
                                content_index: t.tt_content_index,
                                medium: t.tt_medium
                            };
                        if (delete t.tt_content, delete t.tt_content_index, delete t.tt_medium, n.medium || n.content) {
                            var i = "",
                                a = o.stringify(t);
                            a.length > 0 && (i = "?" + a), this.props.history.replace({
                                pathname: e.pathname,
                                hash: e.hash,
                                search: i
                            })
                        }
                        return n
                    }, i
                }(r.Component);
                return Object(l.f)(n)
            }
        }
        var a = n(0),
            o = n(21),
            r = n(1),
            l = n(12),
            s = n(2);
        n.d(t, "a", function() {
            return i
        })
    }
});
//# sourceMappingURL=pages.settings-7bcbb17fa467f5bb9201afd2919fb8ae.js.map