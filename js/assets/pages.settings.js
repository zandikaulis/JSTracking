webpackJsonp([52], {
    133: function(e, t, n) {
        "use strict";

        function i(e) {
            return o.b.get(l.a, !1) || o.a.buildType !== r.a.Production ? "string" == typeof e ? e : e.pathname || "" : "string" == typeof e ? s + e : s + e.pathname
        }

        function a() {
            return !o.b.get(l.a, !1) && o.a.buildType === r.a.Production
        }
        var o = n(2),
            r = n(14),
            l = n(267);
        t.a = i, t.b = a;
        var s = "https://www.twitch.tv"
    },
    1932: function(e, t) {},
    1933: function(e, t) {
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
    1934: function(e, t) {},
    1935: function(e, t) {
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
                                                            value: "login"
                                                        },
                                                        arguments: [],
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
                end: 482
            }
        };
        n.loc.source = {
            body: "query AdvancedNotificationSettings_User($limit: Int, $cursor: Cursor) {\n  currentUser {\n    id\n    follows(first: $limit, after: $cursor) {\n      totalCount\n      edges {\n        cursor\n        node {\n          id\n          displayName\n          profileImageURL(width: 70)\n          login\n          followers {\n            totalCount\n          }\n        }\n        notificationSettings {\n          isEnabled\n        }\n      }\n      pageInfo {\n        hasNextPage\n      }\n    }\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    1936: function(e, t) {},
    1937: function(e, t) {
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
    1938: function(e, t) {},
    1939: function(e, t) {
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
    1940: function(e, t) {},
    2075: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i, a = n(0),
            o = n(1),
            r = n(2),
            l = n(28),
            s = n(133),
            c = n(381),
            d = n(5),
            u = n(3);
        ! function(e) {
            e.Notifications = "notifications"
        }(i || (i = {}));
        var m, g = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return o.createElement(u.U, {
                        className: "settings-tabs"
                    }, o.createElement(u.U, {
                        margin: {
                            bottom: 1
                        }
                    }, o.createElement(u._21, {
                        type: u._26.H2
                    }, Object(r.d)("Settings", "SettingsTabs"))), o.createElement(u.U, {
                        margin: {
                            bottom: 2
                        }
                    }, o.createElement(u._19, null, o.createElement(u._18, {
                        targetBlank: Object(s.b)(),
                        linkTo: Object(s.a)("/settings/profile"),
                        active: !1
                    }, Object(r.d)("Profile", "SettingsTabs")), o.createElement(u._18, {
                        linkTo: "https://twitch.amazon.com/prime?ref_=sm_w_tsp_p_t",
                        active: !1
                    }, Object(r.d)("Prime", "SettingsTabs")), o.createElement(u._18, {
                        targetBlank: Object(s.b)(),
                        linkTo: Object(s.a)("/settings/channel"),
                        active: !1
                    }, Object(r.d)("Channel and Videos", "SettingsTabs")), o.createElement(u._18, {
                        targetBlank: Object(s.b)(),
                        linkTo: Object(s.a)("/settings/security"),
                        active: !1
                    }, Object(r.d)("Security and Privacy", "SettingsTabs")), o.createElement(u._18, {
                        linkTo: Object(c.e)(i.Notifications),
                        active: this.props.activeTab === i.Notifications,
                        "data-a-target": "following-channels-tab"
                    }, Object(r.d)("Notifications", "SettingsTab")), o.createElement(u._18, {
                        targetBlank: Object(s.b)(),
                        linkTo: Object(s.a)("/settings/connections"),
                        active: !1
                    }, Object(r.d)("Connections", "SettingsTabs")), o.createElement(u._18, {
                        targetBlank: Object(s.b)(),
                        linkTo: Object(s.a)("/subscriptions"),
                        active: !1
                    }, Object(r.d)("Subscriptions", "SettingsTabs")))))
                }, t = a.__decorate([Object(d.c)("SettingsTabs")], t)
            }(o.Component),
            p = g,
            f = n(823),
            h = n(821),
            b = n(12),
            v = n(9),
            S = n(67),
            y = n(7),
            k = n(20),
            N = n(10),
            _ = (n(1932), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.changeHandler = function() {
                        t.props.onChange(t.props.userId, t.props.isEnabled)
                    }, t
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    return o.createElement(u._17, {
                        className: "advanced-notification-settings-toggle",
                        display: u.H.Flex,
                        justifyContent: u.T.Between,
                        background: u.m.Base,
                        padding: {
                            x: 5,
                            y: 1
                        },
                        borderBottom: !0
                    }, o.createElement(u.U, {
                        margin: {
                            left: 5
                        },
                        display: u.H.Flex,
                        flexGrow: 1,
                        alignItems: u.c.Center,
                        flexWrap: u.K.NoWrap
                    }, o.createElement(u.U, {
                        display: u.H.Flex,
                        flexGrow: 1,
                        flexWrap: u.K.NoWrap
                    }, o.createElement(u.U, {
                        flexShrink: 0,
                        margin: {
                            right: 1
                        }
                    }, o.createElement(u.S, {
                        linkTo: "/" + this.props.login
                    }, o.createElement(u.l, {
                        imageSrc: this.props.thumbnail,
                        imageAlt: this.props.text,
                        size: 40
                    }))), o.createElement(u.U, {
                        flexGrow: 1,
                        display: u.H.Flex,
                        flexDirection: u.J.Column
                    }, o.createElement(u._21, {
                        fontSize: u.L.Size5
                    }, o.createElement(N.a, {
                        to: "/" + this.props.login
                    }, this.props.text)), o.createElement(u._21, {
                        type: u._26.Span,
                        color: u.F.Alt2
                    }, this.props.description))), o.createElement(u.U, {
                        display: u.H.Flex,
                        flexGrow: 0,
                        flexShrink: 0
                    }, o.createElement(u.U, {
                        margin: {
                            right: 1
                        }
                    }, o.createElement(u._29, {
                        checked: this.props.isEnabled,
                        onChange: this.changeHandler,
                        "data-test-selector": "toggle-selector",
                        id: this.props.userId
                    })), o.createElement(u.U, {
                        className: this.props.saved ? "advanced-notification-settings-toggle__saved" : "advanced-notification-settings-toggle__saved--hide",
                        padding: {
                            x: 1
                        }
                    }, o.createElement(u._21, {
                        fontSize: u.L.Size5,
                        color: u.F.Link
                    }, Object(r.d)("Saved", "AdvancedNotificationSettingsToggle"))))))
                }, t
            }(o.Component)),
            E = n(1933),
            w = (n(1934), n(1935)),
            x = function(e) {
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
                                        }, Object(k.d)(w, {
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
                    if (!this.props.data || this.props.data.loading && !this.props.data.currentUser) return o.createElement(u._17, {
                        padding: {
                            y: 1
                        },
                        borderBottom: !0
                    }, o.createElement(u.X, {
                        fillContent: !0
                    }));
                    if (this.props.data.error) return o.createElement(S.a, {
                        message: Object(r.d)("Error loading data.", "AdvancedNotificationSettings")
                    });
                    if (!this.props.data.currentUser) return o.createElement(u._17, {
                        padding: {
                            y: 1
                        },
                        borderBottom: !0
                    }, o.createElement(S.a, {
                        message: Object(r.d)("You must be logged in to update your settings", "AdvancedNotificationSettings")
                    }));
                    var e = Object(r.d)("{followCount, plural, one {You follow # channel} other {You follow # channels}}", {
                            followCount: this.props.data.currentUser.follows.totalCount
                        }, "AdvancedNotificationSettings"),
                        t = o.createElement(u._17, {
                            background: u.m.Alt2,
                            borderBottom: !0
                        }, o.createElement(u.S, {
                            onClick: this.toggleCollapse,
                            alpha: !0,
                            "data-test-selector": "header-selector"
                        }, o.createElement(u.U, {
                            display: u.H.Flex,
                            padding: {
                                x: 2,
                                y: 1
                            }
                        }, o.createElement(u.U, {
                            className: "advanced-notification-settings__header",
                            flexGrow: 0
                        }, o.createElement(u._21, {
                            fontSize: u.L.Size5,
                            color: u.F.Alt2,
                            bold: !0
                        }, Object(r.d)("Advanced", "AdvancedNotificationSettings"))), o.createElement(u.U, {
                            padding: {
                                x: 1
                            },
                            flexGrow: 1
                        }, o.createElement(u._21, {
                            "data-test-selector": "description-selector",
                            fontSize: u.L.Size5,
                            color: u.F.Alt2
                        }, e)), o.createElement(u.U, {
                            className: this.state.collapsed ? "advanced-notification-settings--collapse" : "advanced-notification-settings--expand",
                            flexGrow: 0,
                            flexShrink: 1,
                            display: u.H.Flex,
                            justifyContent: u.T.Center
                        }, o.createElement(u._8, {
                            asset: u._9.AngleRight,
                            type: u._10.Alt2
                        }))))),
                        n = !this.props.data.loading && !this.props.data.error && !!this.props.data.currentUser.follows.pageInfo.hasNextPage;
                    return this.props.data.currentUser.follows.totalCount > 0 ? this.state.collapsed ? o.createElement(u._17, null, t) : o.createElement(u._17, null, t, o.createElement(u._17, {
                        borderBottom: !0,
                        padding: 2
                    }, o.createElement(u.U, {
                        padding: {
                            bottom: 1
                        }
                    }, o.createElement(u._21, {
                        fontSize: u.L.Size5,
                        color: u.F.Alt2
                    }, Object(r.d)("Manage which channels you receive notifications for.", "AdvancedNotificationSettings"))), o.createElement(u.U, {
                        padding: {
                            bottom: 1
                        }
                    }, o.createElement(u._21, {
                        fontSize: u.L.Size4,
                        color: u.F.Alt
                    }, e)), o.createElement(u._17, {
                        className: "advanced-notification-settings__toggle-container",
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
                            i.node && i.node.id && i.node.followers && e.push(o.createElement(_, {
                                userId: i.node.id,
                                text: i.node.displayName,
                                login: i.node.login,
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
            C = Object(v.compose)(Object(y.a)(w, {
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
                                query: w,
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
            }), Object(y.a)(E, {
                name: "setAdvancedNotificationSetting"
            }), Object(d.c)("AdvancedNotificationSettings"))(x),
            O = (n(1936), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.changeHandler = function() {
                        t.props.onChange(t.props.category, t.props.isEnabled)
                    }, t
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    return o.createElement(u._17, {
                        className: "platform-notification-settings-toggle",
                        display: u.H.Flex,
                        flexWrap: u.K.NoWrap,
                        alignItems: u.c.Start,
                        background: u.m.Alt,
                        margin: {
                            top: 1,
                            bottom: .5
                        },
                        padding: {
                            right: 5
                        }
                    }, o.createElement(u.U, {
                        className: "platform-notification-settings-toggle__body",
                        display: u.H.Flex,
                        flexDirection: u.J.Column,
                        flexGrow: 1,
                        padding: {
                            right: 1
                        }
                    }, o.createElement(u.U, {
                        margin: {
                            bottom: .5
                        }
                    }, o.createElement(u._21, {
                        fontSize: u.L.Size4
                    }, this.props.text)), o.createElement(u._21, {
                        fontSize: u.L.Size5,
                        color: u.F.Alt2
                    }, this.props.description)), o.createElement(u.U, {
                        display: u.H.Flex,
                        margin: {
                            top: .5
                        },
                        flexGrow: 0,
                        flexShrink: 0
                    }, o.createElement(u.U, {
                        margin: {
                            right: 1
                        }
                    }, o.createElement(u._29, {
                        checked: this.props.isEnabled,
                        disabled: this.props.disabled,
                        onChange: this.changeHandler,
                        "data-test-selector": "toggle-selector"
                    })), o.createElement(u.U, {
                        className: this.props.saved ? "platform-notification-settings-toggle__saved" : "platform-notification-settings-toggle__saved--hide",
                        padding: {
                            x: 1
                        }
                    }, o.createElement(u._21, {
                        fontSize: u.L.Size5,
                        color: u.F.Link
                    }, Object(r.d)("Saved", "PlatformNotificationSettingsToggle")))))
                }, t
            }(o.Component)),
            P = n(1937),
            j = (n(1938), n(1939));
        ! function(e) {
            e.onsite = "onsite", e.email = "email", e.push = "push"
        }(m || (m = {}));
        var U = function(e) {
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
                    if (!this.props.data || this.props.data.loading && !this.props.data.currentUser) return o.createElement(u.U, {
                        padding: 1
                    }, o.createElement(u.X, {
                        fillContent: !0
                    }));
                    if (this.props.data.error) return o.createElement(S.a, {
                        message: Object(r.d)("Error loading data.", "PlatformNotificationSettings")
                    });
                    if (!this.props.data.currentUser) return o.createElement(u._17, {
                        margin: {
                            top: 1
                        }
                    }, o.createElement(S.a, {
                        message: Object(r.d)("You must be logged in to update your settings.", "PlatformNotificationSettings")
                    }));
                    var e = o.createElement(u._17, {
                        background: u.m.Alt2,
                        borderBottom: !0
                    }, o.createElement(u.S, {
                        onClick: this.toggleCollapse,
                        alpha: !0
                    }, o.createElement(u.U, {
                        display: u.H.Flex,
                        padding: {
                            x: 2,
                            y: 1
                        }
                    }, o.createElement(u.U, {
                        className: "platform-notification-settings__header",
                        flexGrow: 0,
                        "data-test-selector": "collapsible-header"
                    }, o.createElement(u._21, {
                        "data-test-selector": "display-name",
                        fontSize: u.L.Size5,
                        color: u.F.Alt2,
                        bold: !0
                    }, this.props.displayName)), o.createElement(u.U, {
                        padding: {
                            x: 1
                        },
                        flexGrow: 1
                    }, o.createElement(u._21, {
                        fontSize: u.L.Size5,
                        color: u.F.Alt2
                    }, this.getSettingTurnedOnMessage())), o.createElement(u.U, {
                        className: this.state.collapsed ? "platform-notification-settings--collapse" : "platform-notification-settings--expand",
                        flexGrow: 0,
                        flexShrink: 1,
                        display: u.H.Flex,
                        justifyContent: u.T.Center
                    }, o.createElement(u._8, {
                        asset: u._9.AngleRight,
                        type: u._10.Alt2
                    })))));
                    return this.state.collapsed ? o.createElement(u._17, null, e) : o.createElement(u._17, null, e, o.createElement(u._17, {
                        padding: 2,
                        borderBottom: !0
                    }, o.createElement(u.U, {
                        padding: {
                            bottom: 1
                        }
                    }, o.createElement(u._21, {
                        "data-test-selector": "description",
                        fontSize: u.L.Size5,
                        color: u.F.Alt2
                    }, this.props.description)), o.createElement(u._17, {
                        display: u.H.Flex,
                        margin: {
                            y: .5
                        },
                        borderBottom: !0
                    }, o.createElement(u.U, {
                        className: "platform-notification-settings__all",
                        display: u.H.Flex,
                        padding: {
                            bottom: 1,
                            right: 5
                        },
                        justifyContent: u.T.Center,
                        flexGrow: 1,
                        flexWrap: u.K.NoWrap
                    }, o.createElement(u.U, {
                        className: "platform-notification-settings__all-body",
                        flexGrow: 1,
                        padding: {
                            right: 1
                        }
                    }, o.createElement(u._21, {
                        fontSize: u.L.Size4,
                        color: u.F.Alt,
                        "data-test-selector": "explanation"
                    }, this.props.explanation)), o.createElement(u.U, {
                        display: u.H.Flex,
                        flexGrow: 0,
                        flexShrink: 0
                    }, o.createElement(u.U, {
                        margin: {
                            right: 1
                        }
                    }, o.createElement(u._29, {
                        "data-test-selector": "all-toggle",
                        checked: this.getGlobalStateForPlatform(),
                        onChange: this.toggleAll
                    })), o.createElement(u.U, {
                        padding: {
                            x: 1
                        },
                        "data-test-selector": "saved-selector",
                        className: this.getDisplaySaved("ALL") ? "platform-notification-settings__saved" : "platform-notification-settings__saved--hide"
                    }, o.createElement(u._21, {
                        fontSize: u.L.Size5,
                        color: u.F.Link
                    }, Object(r.d)("Saved", "PlatformNotificationSettings")))))), o.createElement(u.U, {
                        className: "platform-notification-settings__toggle-container",
                        display: u.H.Flex,
                        flexDirection: u.J.Column,
                        margin: {
                            left: 5
                        },
                        padding: {
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
                        a && e.push(o.createElement(O, {
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
            F = Object(v.compose)(Object(d.c)("PlatformNotificationSettings"), Object(y.a)(j, {
                options: function() {
                    return {
                        fetchPolicy: "cache-and-network"
                    }
                }
            }), Object(y.a)(P, {
                name: "setNotificationSetting"
            }))(U),
            T = (n(1940), function(e) {
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
                    }, o.createElement(u.U, {
                        padding: 3
                    }, o.createElement(p, {
                        activeTab: i.Notifications
                    }), o.createElement(u._17, {
                        className: "notification-settings__body",
                        borderRight: !0,
                        borderLeft: !0,
                        borderTop: !0
                    }, o.createElement(u._17, {
                        background: u.m.Alt,
                        padding: {
                            x: 2,
                            y: 1
                        },
                        borderBottom: !0
                    }, o.createElement(u.U, {
                        margin: {
                            bottom: .5
                        }
                    }, o.createElement(u._21, {
                        fontSize: u.L.Size3,
                        color: u.F.Alt
                    }, Object(r.d)("Notifications", "GlobalNotificationSettingsPage"))), o.createElement(u.U, null, o.createElement(u._21, {
                        fontSize: u.L.Size5,
                        color: u.F.Alt2
                    }, Object(r.d)("Get the notifications you care about, where you want to see them.", "GlobalNotificationSettingsPage")))), o.createElement(F, {
                        startCollapsed: !1,
                        platformName: m.onsite,
                        displayName: Object(r.d)("On Twitch", "GlobalNotificationSettingsPage"),
                        description: Object(r.d)("We'll always keep you informed on important updates to Twitch and your account.", "GlobalNotificationSettingsPage"),
                        explanation: Object(r.d)("Send me notifications on Twitch about", "GlobalNotificationSettingsPage"),
                        key: "onsite"
                    }), o.createElement(F, {
                        startCollapsed: !0,
                        platformName: m.email,
                        displayName: Object(r.d)("By Email", "GlobalNotificationSettingsPage"),
                        description: Object(r.d)("Receive important notifications through email. You may receive additional emails about features and content on Twitch. You can turn off specific emails using the unsubscribe link included in each message.", "GlobalNotificationSettingsPage"),
                        explanation: Object(r.d)("Send me emails about", "GlobalNotificationSettingsPage"),
                        key: "email"
                    }), o.createElement(F, {
                        platformName: m.push,
                        startCollapsed: !0,
                        displayName: Object(r.d)("On Mobile", "GlobalNotificationSettingsPage"),
                        description: Object(r.d)("Get Twitch updates on the go. Receive notifications right on your phone's home screen.", "GlobalNotificationSettingsPage"),
                        explanation: Object(r.d)("Send me push notifications", "GlobalNotificationSettingsPage"),
                        key: "push"
                    }), o.createElement(C, null))))
                }, t.prototype.onRender = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t = a.__decorate([Object(d.c)("GlobalNotificationSettingsPage", {
                    destination: h.a.NotificationSettingsPage
                }), Object(f.a)({
                    location: b.PageviewLocation.SettingsPage
                })], t)
            }(o.Component)),
            D = T;
        n.d(t, "GlobalNotificationSettingsPage", function() {
            return D
        })
    },
    267: function(e, t, n) {
        "use strict";
        var i = n(0),
            a = n(21),
            o = n(1),
            r = n(2),
            l = n(14),
            s = "legacy_routes_enabled",
            c = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.isEnabled = !1, n.onHistoryChange = function(e, t) {
                        return n.isEnabled ? "REPLACE" === t ? void n.logger.debug("Skipping legacy route processing, due to history replace.") : e && e.pathname ? (n.logger.debug("Location changed", {
                            path: e.pathname
                        }), void n.legacyRoutes.forEach(function(t) {
                            try {
                                if (e.pathname.match(t)) {
                                    n.logger.debug("Found legacy route. Reloading...");
                                    var i = "" !== e.search ? a.parse(e.search) : {};
                                    i["from-redirect"] = "true";
                                    var o = a.stringify(i),
                                        s = r.a.buildType === l.a.Dev ? window.location.host : window.location.hostname,
                                        c = window.location.protocol + "//" + s + e.pathname + "?" + o;
                                    return n.logger.debug("Redirecting to legacy route", {
                                        newUrl: c
                                    }), void window.location.replace(c)
                                }
                            } catch (e) {
                                r.i.withCategory("legacy").error(e, "Unable to determine legacy reload match", {
                                    regex: t
                                })
                            }
                        })) : void n.logger.debug("Unable to process history change. Path is null or empty.") : void n.logger.debug("Legacy routing not enabled.")
                    }, n.processRedirectParam = function(e) {
                        if (e && e.pathname && e.search) {
                            var t = "" !== e.search ? a.parse(e.search) : {};
                            if (t["from-redirect"]) {
                                delete t["from-redirect"];
                                var i = a.stringify(t),
                                    o = "";
                                i.length > 0 && (o = "?" + i), n.props.history.replace({
                                    pathname: e.pathname,
                                    hash: e.hash,
                                    search: o
                                })
                            }
                        }
                    }, n.isEnabled = r.b.get(s, !1), n.logger = r.i.withCategory("legacy-routes"), n.legacyRoutes = n.buildRoutes(), n.props.history.listen(n.onHistoryChange), n
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    return null
                }, t.prototype.componentDidMount = function() {
                    this.processRedirectParam(this.props.history.location)
                }, t.prototype.buildRoutes = function() {
                    if (!this.isEnabled) return [];
                    this.logger.debug("Building legacy routes...");
                    var e = r.b.get("legacy_routes", []),
                        t = [];
                    if (!e || 0 === e.length) return this.logger.debug("No legacy routes found in settings."), t;
                    for (var n = 0, i = e; n < i.length; n++) {
                        var a = i[n];
                        try {
                            var o = new RegExp(a, "i");
                            t.push(o)
                        } catch (e) {
                            this.logger.debug("Failed to parse route!", {
                                val: a,
                                err: e
                            })
                        }
                    }
                    return this.logger.debug("Done building legacy routes!", {
                        count: t.length
                    }), t
                }, t
            }(o.Component),
            d = c;
        n.d(t, "a", function() {
            return s
        }), n.d(t, !1, function() {
            return "legacy_routes"
        }), n.d(t, "b", function() {
            return d
        })
    },
    821: function(e, t, n) {
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
            ChannelDashboardExtensions: "channel.dashboard.extensions",
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
            DirectoryPopularByLanguage: "directory.popular.language",
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
    823: function(e, t, n) {
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
            l = n(10),
            s = n(2);
        n.d(t, "a", function() {
            return i
        })
    }
});
//# sourceMappingURL=pages.settings-da9f7a83e8455bcac7153a4da4f42589.js.map