webpackJsonp([50], {
    "1f5k": function(e, t) {
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
                end: 158
            }
        };
        n.loc.source = {
            body: "query PlatformNotificationSettings_User {\ncurrentUser {\nid\ndisplayName\nnotificationSettings {\ncategory\nplatforms {\nplatformName\nsettingState\nisEnabled\n}\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    AQCV: function(e, t) {
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
                end: 153
            }
        };
        n.loc.source = {
            body: "mutation GlobalNotificationSettings_SetChannelGlobalIsEnabled($input: FollowUserInput!) {\nfollowUser(input: $input) {\nfollow {\ndisableNotifications\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    EaRL: function(e, t) {
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
                end: 303
            }
        };
        n.loc.source = {
            body: "query AdvancedNotificationSettings_User($limit: Int $cursor: Cursor) {\ncurrentUser {\nid\nfollows(first: $limit after: $cursor) {\ntotalCount\nedges {\ncursor\nnode {\nid\ndisplayName\nprofileImageURL(width: 70)\nlogin\nfollowers {\ntotalCount\n}\n}\nnotificationSettings {\nisEnabled\n}\n}\npageInfo {\nhasNextPage\n}\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    JBcW: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return i
        }), t.c = function(e) {
            a.m.track(o.SpadeEventType.BrowserPushNotificationPrompt, e)
        }, t.b = function(e) {
            a.m.track(o.SpadeEventType.BrowserPushNotificationDisable, e)
        };
        var i, a = n("6sO2"),
            o = n("vH/s");
        (i || (i = {})).Settings = "settings"
    },
    K4jf: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i, a = n("RH2O"),
            o = n("2KeS"),
            r = n("+xm8"),
            s = n("f2i/"),
            l = n("Aj/L"),
            c = n("TToO"),
            d = n("U7vG"),
            u = n("CIox"),
            p = n("6sO2"),
            g = n("yWCw"),
            m = n("CSlQ"),
            f = n("eXld"),
            h = n("j7/Y"),
            b = n("w9tK"),
            v = n("vH/s"),
            S = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return c.__extends(t, e), t.prototype.render = function() {
                    return null
                }, t = c.__decorate([Object(m.c)("SettingsChannelPage", {
                    autoReportInteractive: !0,
                    destination: b.a.SettingsChannel
                }), Object(h.a)({
                    location: v.PageviewLocation.SettingsPage
                })], t)
            }(d.Component),
            y = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return c.__extends(t, e), t.prototype.render = function() {
                    return null
                }, t = c.__decorate([Object(m.c)("SettingsConnectionsPage", {
                    autoReportInteractive: !0,
                    destination: b.a.SettingsConnections
                }), Object(h.a)({
                    location: v.PageviewLocation.SettingsPage
                })], t)
            }(d.Component),
            k = n("zCIC"),
            _ = n("WbwR"),
            N = n("LBNC"),
            w = n("UbVv"),
            E = n("7vx8"),
            O = n("oIkB"),
            P = n("F8kA"),
            C = n("Odds"),
            x = (n("hPJb"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.changeHandler = function() {
                        t.props.onChange(t.props.userId, t.props.isEnabled)
                    }, t
                }
                return c.__extends(t, e), t.prototype.render = function() {
                    return d.createElement(C._18, {
                        className: "advanced-notification-settings-toggle",
                        display: C.H.Flex,
                        justifyContent: C.T.Between,
                        background: C.m.Base,
                        padding: {
                            x: 5,
                            y: 1
                        },
                        borderBottom: !0
                    }, d.createElement(C.U, {
                        margin: {
                            left: 5
                        },
                        display: C.H.Flex,
                        flexGrow: 1,
                        alignItems: C.c.Center,
                        flexWrap: C.K.NoWrap
                    }, d.createElement(C.U, {
                        display: C.H.Flex,
                        flexGrow: 1,
                        flexWrap: C.K.NoWrap
                    }, d.createElement(C.U, {
                        flexShrink: 0,
                        margin: {
                            right: 1
                        }
                    }, d.createElement(C.S, {
                        linkTo: "/" + this.props.login
                    }, d.createElement(C.l, {
                        imageSrc: this.props.thumbnail,
                        imageAlt: this.props.text,
                        size: 40
                    }))), d.createElement(C.U, {
                        flexGrow: 1,
                        display: C.H.Flex,
                        flexDirection: C.J.Column
                    }, d.createElement(C._22, {
                        fontSize: C.L.Size5
                    }, d.createElement(P.a, {
                        to: "/" + this.props.login
                    }, this.props.text)), d.createElement(C._22, {
                        type: C._27.Span,
                        color: C.F.Alt2
                    }, this.props.description))), d.createElement(C.U, {
                        display: C.H.Flex,
                        flexGrow: 0,
                        flexShrink: 0
                    }, d.createElement(C.U, {
                        margin: {
                            right: 1
                        }
                    }, d.createElement(C._29, {
                        checked: this.props.isEnabled,
                        onChange: this.changeHandler,
                        "data-test-selector": "toggle-selector",
                        id: this.props.userId
                    })), d.createElement(C.U, {
                        className: this.props.saved ? "advanced-notification-settings-toggle__saved" : "advanced-notification-settings-toggle__saved--hide",
                        padding: {
                            x: 1
                        }
                    }, d.createElement(C._22, {
                        fontSize: C.L.Size5,
                        color: C.F.Link
                    }, Object(p.d)("Saved", "AdvancedNotificationSettingsToggle"))))))
                }, t
            }(d.Component)),
            j = n("AQCV"),
            U = (n("t4xU"), n("EaRL")),
            T = function(e) {
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
                        return c.__awaiter(t, void 0, void 0, function() {
                            var t, i, a;
                            return c.__generator(this, function(o) {
                                switch (o.label) {
                                    case 0:
                                        return this.props.data && this.props.data.currentUser && this.props.setAdvancedNotificationSetting ? (t = c.__assign({}, Object(O.a)({
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
                                        return i = o.sent(), a = function(t) {
                                            for (var n = 0, a = t.currentUser.follows.edges; n < a.length; n++) {
                                                var o = a[n];
                                                o.node.id === e && (o.notificationSettings.isEnabled = !i.data.followUser.follow.disableNotifications)
                                            }
                                            return t
                                        }, Object(O.d)(U, {
                                            limit: 50
                                        }, a), this.markSaved(e), [2]
                                }
                            })
                        })
                    }, t
                }
                return c.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    if (!this.props.data || this.props.data.loading && !this.props.data.currentUser) return d.createElement(C._18, {
                        padding: {
                            y: 1
                        },
                        borderBottom: !0
                    }, d.createElement(C.Y, {
                        fillContent: !0
                    }));
                    if (this.props.data.error) return d.createElement(g.a, {
                        message: Object(p.d)("Error loading data.", "AdvancedNotificationSettings")
                    });
                    if (!this.props.data.currentUser) return d.createElement(C._18, {
                        padding: {
                            y: 1
                        },
                        borderBottom: !0
                    }, d.createElement(g.a, {
                        message: Object(p.d)("You must be logged in to update your settings", "AdvancedNotificationSettings")
                    }));
                    var e = Object(p.d)("{followCount, plural, one {You follow # channel} other {You follow # channels}}", {
                            followCount: this.props.data.currentUser.follows.totalCount
                        }, "AdvancedNotificationSettings"),
                        t = d.createElement(C._18, {
                            background: C.m.Alt2,
                            borderBottom: !0
                        }, d.createElement(C.S, {
                            onClick: this.toggleCollapse,
                            alpha: !0,
                            "data-test-selector": "header-selector"
                        }, d.createElement(C.U, {
                            display: C.H.Flex,
                            padding: {
                                x: 2,
                                y: 1
                            }
                        }, d.createElement(C.U, {
                            className: "advanced-notification-settings__header",
                            flexGrow: 0
                        }, d.createElement(C._22, {
                            fontSize: C.L.Size5,
                            color: C.F.Alt2,
                            bold: !0
                        }, Object(p.d)("Advanced", "AdvancedNotificationSettings"))), d.createElement(C.U, {
                            padding: {
                                x: 1
                            },
                            flexGrow: 1
                        }, d.createElement(C._22, {
                            "data-test-selector": "description-selector",
                            fontSize: C.L.Size5,
                            color: C.F.Alt2
                        }, e)), d.createElement(C.U, {
                            className: this.state.collapsed ? "advanced-notification-settings--collapse" : "advanced-notification-settings--expand",
                            flexGrow: 0,
                            flexShrink: 1,
                            display: C.H.Flex,
                            justifyContent: C.T.Center
                        }, d.createElement(C._9, {
                            asset: C._10.AngleRight,
                            type: C._11.Alt2
                        }))))),
                        n = !this.props.data.loading && !this.props.data.error && !!this.props.data.currentUser.follows.pageInfo.hasNextPage;
                    return this.props.data.currentUser.follows.totalCount > 0 ? this.state.collapsed ? d.createElement(C._18, null, t) : d.createElement(C._18, null, t, d.createElement(C._18, {
                        borderBottom: !0,
                        padding: 2
                    }, d.createElement(C.U, {
                        padding: {
                            bottom: 1
                        }
                    }, d.createElement(C._22, {
                        fontSize: C.L.Size5,
                        color: C.F.Alt2
                    }, Object(p.d)("Manage which channels you receive notifications for.", "AdvancedNotificationSettings"))), d.createElement(C.U, {
                        padding: {
                            bottom: 1
                        }
                    }, d.createElement(C._22, {
                        fontSize: C.L.Size4,
                        color: C.F.Alt
                    }, e)), d.createElement(C._18, {
                        className: "advanced-notification-settings__toggle-container",
                        borderTop: !0,
                        borderLeft: !0,
                        borderRight: !0,
                        margin: {
                            bottom: .5
                        }
                    }, this.renderToggles(), d.createElement(k.a, {
                        loadMore: this.props.loadMore,
                        enabled: n,
                        pixelThreshold: 200
                    })))) : null
                }, t.prototype.renderToggles = function() {
                    if (this.props.data && (!this.props.data.loading || this.props.data.currentUser)) {
                        for (var e = [], t = 0, n = this.props.data.currentUser.follows.edges; t < n.length; t++) {
                            var i = n[t];
                            i.node && i.node.id && i.node.followers && e.push(d.createElement(x, {
                                userId: i.node.id,
                                text: i.node.displayName,
                                login: i.node.login,
                                description: Object(p.d)("{followerCount,number} followers", {
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
            }(d.Component),
            F = Object(o.compose)(Object(E.a)(U, {
                options: function() {
                    return {
                        fetchPolicy: "cache-and-network",
                        variables: {
                            limit: 50
                        }
                    }
                },
                props: function(e) {
                    return c.__assign({}, e, {
                        loadMore: function() {
                            return e.data.fetchMore({
                                query: U,
                                variables: c.__assign({}, e.data.variables, {
                                    cursor: e.data.currentUser.follows.edges[e.data.currentUser.follows.edges.length - 1].cursor
                                }),
                                updateQuery: function(e, t) {
                                    var n = t.fetchMoreResult;
                                    return {
                                        currentUser: c.__assign({}, n.currentUser, {
                                            follows: c.__assign({}, n.currentUser.follows, {
                                                edges: Object(O.b)(e.currentUser.follows.edges, n.currentUser.follows.edges)
                                            })
                                        })
                                    }
                                }
                            })
                        }
                    })
                }
            }), Object(E.a)(j, {
                name: "setAdvancedNotificationSetting"
            }), Object(m.c)("AdvancedNotificationSettings"))(T),
            D = n("BhyV"),
            A = n("OOv5"),
            L = n("JBcW"),
            I = (n("mVHD"), p.n.logger.withCategory("browser-push-notifications-settings")),
            M = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        hide: !1,
                        loading: !0,
                        deciding: !0,
                        hasSubscription: !1
                    }, t.toggle = function() {
                        return c.__awaiter(t, void 0, void 0, function() {
                            var e, t;
                            return c.__generator(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        return this.setState({
                                            deciding: !0
                                        }), [4, A.a.hasPushSubscription()];
                                    case 1:
                                        if (!n.sent()) return [3, 6];
                                        n.label = 2;
                                    case 2:
                                        return n.trys.push([2, 4, , 5]), [4, A.a.userUnsubscribe(L.a.Settings)];
                                    case 3:
                                        return n.sent(), [3, 5];
                                    case 4:
                                        return e = n.sent(), I.error(e, "user unsubscribe failed"), [3, 5];
                                    case 5:
                                        return [3, 9];
                                    case 6:
                                        return n.trys.push([6, 8, , 9]), [4, A.a.userSubscribe(L.a.Settings)];
                                    case 7:
                                        return n.sent(), [3, 9];
                                    case 8:
                                        return t = n.sent(), Object(w.a)() ? (this.setState({
                                            hide: !0
                                        }), [2]) : (I.error(t, "user subscribe failed"), [3, 9]);
                                    case 9:
                                        return [4, this.updateSubscriptionState()];
                                    case 10:
                                        return n.sent(), this.setState({
                                            deciding: !1
                                        }), [2]
                                }
                            })
                        })
                    }, t
                }
                return c.__extends(t, e), t.prototype.componentDidMount = function() {
                    return c.__awaiter(this, void 0, void 0, function() {
                        var e;
                        return c.__generator(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return t.trys.push([0, 3, , 4]), [4, A.a.initialize()];
                                case 1:
                                    return t.sent(), [4, this.updateSubscriptionState()];
                                case 2:
                                    return t.sent(), [3, 4];
                                case 3:
                                    return e = t.sent(), I.error(e, "unexpected error initializing push manager"), this.setState({
                                        hide: !0
                                    }), [2];
                                case 4:
                                    return this.setState({
                                        loading: !1,
                                        deciding: !1
                                    }), [2]
                            }
                        })
                    })
                }, t.prototype.componentDidUpdate = function(e, t) {
                    t.loading && !this.state.loading && this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    if (this.state.hide || this.state.loading) return null;
                    var e = this.state.hasSubscription ? Object(p.d)("Turn Off", "BrowserPushNotificationsSettings") : Object(p.d)("Turn On", "BrowserPushNotificationsSettings");
                    return d.createElement(C._18, {
                        borderTop: !0,
                        padding: {
                            right: 2,
                            y: 1
                        },
                        margin: {
                            top: 1
                        },
                        "data-test-selector": "qa-browser-push-notifications-settings"
                    }, d.createElement(C._18, {
                        className: "browser-push-notification-settings",
                        padding: {
                            left: 5,
                            right: 4
                        },
                        display: C.H.Flex,
                        margin: {
                            x: 5
                        }
                    }, d.createElement(C.U, {
                        className: "browser-push-notification-settings__body",
                        display: C.H.Flex,
                        flexWrap: C.K.NoWrap,
                        flexGrow: 1
                    }, d.createElement(C.U, {
                        margin: {
                            right: 1
                        },
                        flexGrow: 1
                    }, d.createElement(C._22, {
                        fontSize: C.L.Size4,
                        color: C.F.Alt
                    }, Object(p.d)("Receive Browser Notifications for this Device", "BrowserPushNotificationsSettings")), d.createElement(C.U, {
                        padding: {
                            top: .5
                        }
                    }, d.createElement(C._22, {
                        fontSize: C.L.Size5,
                        color: C.F.Alt2
                    }, Object(p.d)("See notifications at the corner of your screen, even when you’re not on Twitch", "BrowserPushNotificationsSettings")))), d.createElement(C.U, {
                        flexShrink: 0
                    }, d.createElement(C.u, {
                        "data-test-selector": "qa-browser-push-notifications-settings-toggle",
                        disabled: this.state.deciding,
                        onClick: this.toggle
                    }, e)))))
                }, t.prototype.updateSubscriptionState = function() {
                    return c.__awaiter(this, void 0, void 0, function() {
                        var e;
                        return c.__generator(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return [4, A.a.hasPushSubscription()];
                                case 1:
                                    return e = t.sent(), this.setState({
                                        hasSubscription: e
                                    }), [2]
                            }
                        })
                    })
                }, t
            }(d.Component),
            B = Object(D.compose)(Object(m.c)("BrowserPushNotificationsSettings"))(M),
            V = (n("iOZM"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.changeHandler = function() {
                        t.props.onChange(t.props.category, t.props.isEnabled)
                    }, t
                }
                return c.__extends(t, e), t.prototype.render = function() {
                    return d.createElement(C._18, {
                        className: "platform-notification-settings-toggle",
                        display: C.H.Flex,
                        flexWrap: C.K.NoWrap,
                        alignItems: C.c.Start,
                        background: C.m.Alt,
                        margin: {
                            top: 1,
                            bottom: .5
                        },
                        padding: {
                            right: 5
                        }
                    }, d.createElement(C.U, {
                        className: "platform-notification-settings-toggle__body",
                        display: C.H.Flex,
                        flexDirection: C.J.Column,
                        flexGrow: 1,
                        padding: {
                            right: 1
                        }
                    }, d.createElement(C.U, {
                        margin: {
                            bottom: .5
                        }
                    }, d.createElement(C._22, {
                        fontSize: C.L.Size4
                    }, this.props.text)), d.createElement(C._22, {
                        fontSize: C.L.Size5,
                        color: C.F.Alt2
                    }, this.props.description)), d.createElement(C.U, {
                        display: C.H.Flex,
                        margin: {
                            top: .5
                        },
                        flexGrow: 0,
                        flexShrink: 0
                    }, d.createElement(C.U, {
                        margin: {
                            right: 1
                        }
                    }, d.createElement(C._29, {
                        checked: this.props.isEnabled,
                        disabled: this.props.disabled,
                        onChange: this.changeHandler,
                        "data-test-selector": "toggle-selector"
                    })), d.createElement(C.U, {
                        className: this.props.saved ? "platform-notification-settings-toggle__saved" : "platform-notification-settings-toggle__saved--hide",
                        padding: {
                            x: 1
                        }
                    }, d.createElement(C._22, {
                        fontSize: C.L.Size5,
                        color: C.F.Link
                    }, Object(p.d)("Saved", "PlatformNotificationSettingsToggle")))))
                }, t
            }(d.Component)),
            z = n("g+dK"),
            G = (n("RC0U"), n("1f5k"));
        ! function(e) {
            e.onsite = "onsite", e.email = "email", e.push = "push"
        }(i || (i = {}));
        var R, H = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        collapsed: t.props.startCollapsed,
                        saved: new Set
                    }, t.VisibleSettings = [{
                        category: "LIVE",
                        name: Object(p.d)("Live", "PlatformNotificationSettings"),
                        description: Object(p.d)("When a streamer I follow goes Live", "PlatformNotificationSettings")
                    }, {
                        category: "VIDEOS",
                        name: Object(p.d)("Video Broadcast", "PlatformNotificationSettings"),
                        description: Object(p.d)("When a channel I follow starts a Vodcast. This also includes Video Comment notifications", "PlatformNotificationSettings")
                    }, {
                        category: "CLIPS",
                        name: Object(p.d)("Clips", "PlatformNotificationSettings"),
                        description: Object(p.d)("Receive notifications for clips you made and clips made by your viewers", "PlatformNotificationSettings")
                    }, {
                        category: "EVENTS",
                        name: Object(p.d)("Events", "PlatformNotificationSettings"),
                        description: Object(p.d)("Any time an event I follow starts", "PlatformNotificationSettings")
                    }, {
                        category: "CHAT",
                        name: Object(p.d)("Chat", "PlatformNotificationSettings"),
                        description: Object(p.d)("Any time there’s Rooms activity related to me.", "PlatformNotificationSettings")
                    }, {
                        category: "FRIENDS",
                        name: Object(p.d)("Friends", "PlatformNotificationSettings"),
                        description: Object(p.d)("When a friend sends me a message", "PlatformNotificationSettings")
                    }, {
                        category: "STREAMER",
                        name: Object(p.d)("Your Channel", "PlatformNotificationSettings"),
                        description: Object(p.d)("Receive notifications when viewers follow your channel or auto host you", "PlatformNotificationSettings")
                    }, {
                        category: "MODERATOR",
                        name: Object(p.d)("Moderator", "PlatformNotificationSettings"),
                        description: Object(p.d)("Any time I get a notification as a moderator", "PlatformNotificationSettings")
                    }, {
                        category: "COMMERCE",
                        name: Object(p.d)("Gifts and Rewards", "PlatformNotificationSettings"),
                        description: Object(p.d)("Receive notifications for drops, crates, and subscription gifts", "PlatformNotificationSettings")
                    }], t.toggleAll = function() {
                        t.toggleSettingCategory("ALL", t.getGlobalStateForPlatform())
                    }, t.toggleCollapse = function() {
                        t.setState(function(e) {
                            return {
                                collapsed: !e.collapsed
                            }
                        })
                    }, t.toggleSettingCategory = function(e, n) {
                        return c.__awaiter(t, void 0, void 0, function() {
                            var t, i, a, o, r = this;
                            return c.__generator(this, function(s) {
                                switch (s.label) {
                                    case 0:
                                        return this.props.data && this.props.data.currentUser && this.props.setNotificationSetting ? (t = n ? "off" : "on", i = c.__assign({}, Object(O.a)({
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
                                        return a = s.sent(), o = function(t) {
                                            return t.currentUser.notificationSettings = t.currentUser.notificationSettings.map(function(t) {
                                                return t.category === e && (t.platforms = t.platforms.map(function(e) {
                                                    return e.platformName === r.props.platformName && (e.isEnabled = "on" === a.data.setNotificationSetting.settingState, e.settingState = a.data.setNotificationSetting.settingState), e
                                                })), t
                                            }), t
                                        }, Object(O.d)(G, {}, o), this.markSaved(e), [2]
                                }
                            })
                        })
                    }, t
                }
                return c.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    if (!this.props.data || this.props.data.loading && !this.props.data.currentUser) return d.createElement(C.U, {
                        padding: 1
                    }, d.createElement(C.Y, {
                        fillContent: !0
                    }));
                    if (this.props.data.error) return d.createElement(g.a, {
                        message: Object(p.d)("Error loading data.", "PlatformNotificationSettings")
                    });
                    if (!this.props.data.currentUser) return d.createElement(C._18, {
                        margin: {
                            top: 1
                        }
                    }, d.createElement(g.a, {
                        message: Object(p.d)("You must be logged in to update your settings.", "PlatformNotificationSettings")
                    }));
                    var e = d.createElement(C._18, {
                        background: C.m.Alt2,
                        borderBottom: !0
                    }, d.createElement(C.S, {
                        onClick: this.toggleCollapse,
                        alpha: !0
                    }, d.createElement(C.U, {
                        display: C.H.Flex,
                        padding: {
                            x: 2,
                            y: 1
                        }
                    }, d.createElement(C.U, {
                        className: "platform-notification-settings__header",
                        flexGrow: 0,
                        "data-test-selector": "collapsible-header"
                    }, d.createElement(C._22, {
                        "data-test-selector": "display-name",
                        fontSize: C.L.Size5,
                        color: C.F.Alt2,
                        bold: !0
                    }, this.props.displayName)), d.createElement(C.U, {
                        padding: {
                            x: 1
                        },
                        flexGrow: 1
                    }, d.createElement(C._22, {
                        fontSize: C.L.Size5,
                        color: C.F.Alt2
                    }, this.getSettingTurnedOnMessage())), d.createElement(C.U, {
                        className: this.state.collapsed ? "platform-notification-settings--collapse" : "platform-notification-settings--expand",
                        flexGrow: 0,
                        flexShrink: 1,
                        display: C.H.Flex,
                        justifyContent: C.T.Center
                    }, d.createElement(C._9, {
                        asset: C._10.AngleRight,
                        type: C._11.Alt2
                    })))));
                    return this.state.collapsed ? d.createElement(C._18, null, e) : d.createElement(C._18, null, e, d.createElement(C._18, {
                        padding: 2,
                        borderBottom: !0
                    }, d.createElement(C.U, {
                        padding: {
                            bottom: 1
                        }
                    }, d.createElement(C._22, {
                        "data-test-selector": "description",
                        fontSize: C.L.Size5,
                        color: C.F.Alt2
                    }, this.props.description)), d.createElement(C._18, {
                        display: C.H.Flex,
                        margin: {
                            y: .5
                        },
                        borderBottom: !0
                    }, d.createElement(C.U, {
                        className: "platform-notification-settings__all",
                        display: C.H.Flex,
                        padding: {
                            bottom: 1,
                            right: 5
                        },
                        justifyContent: C.T.Center,
                        flexGrow: 1,
                        flexWrap: C.K.NoWrap
                    }, d.createElement(C.U, {
                        className: "platform-notification-settings__all-body",
                        flexGrow: 1,
                        padding: {
                            right: 1
                        }
                    }, d.createElement(C._22, {
                        fontSize: C.L.Size4,
                        color: C.F.Alt,
                        "data-test-selector": "explanation"
                    }, this.props.explanation)), d.createElement(C.U, {
                        display: C.H.Flex,
                        flexGrow: 0,
                        flexShrink: 0
                    }, d.createElement(C.U, {
                        margin: {
                            right: 1
                        }
                    }, d.createElement(C._29, {
                        "data-test-selector": "all-toggle",
                        checked: this.getGlobalStateForPlatform(),
                        onChange: this.toggleAll
                    })), d.createElement(C.U, {
                        padding: {
                            x: 1
                        },
                        "data-test-selector": "saved-selector",
                        className: this.getDisplaySaved("ALL") ? "platform-notification-settings__saved" : "platform-notification-settings__saved--hide"
                    }, d.createElement(C._22, {
                        fontSize: C.L.Size5,
                        color: C.F.Link
                    }, Object(p.d)("Saved", "PlatformNotificationSettings")))))), d.createElement(C.U, {
                        className: "platform-notification-settings__toggle-container",
                        display: C.H.Flex,
                        flexDirection: C.J.Column,
                        margin: {
                            left: 5
                        },
                        padding: {
                            left: 5
                        }
                    }, this.renderToggles()), this.props.extraSettings))
                }, t.prototype.getSettingByCategory = function(e) {
                    var t = null;
                    if (!this.props.data) return null;
                    for (var n = 0, i = this.props.data.currentUser.notificationSettings; n < i.length; n++) {
                        var a = i[n];
                        a.category === e && (t = a.platforms)
                    }
                    if (!t) return null;
                    for (var o = 0, r = t; o < r.length; o++) {
                        var s = r[o];
                        if (s.platformName === this.props.platformName) return s
                    }
                    return null
                }, t.prototype.getSettingTurnedOnMessage = function() {
                    for (var e = 0, t = 0, n = 0, i = this.VisibleSettings; n < i.length; n++) {
                        var a = i[n],
                            o = this.getSettingByCategory(a.category);
                        o && (e++, o.isEnabled && t++)
                    }
                    return 0 !== t && this.getGlobalStateForPlatform() ? t < e ? Object(p.d)("Some notifications turned on", "PlatformNotificationSettings") : Object(p.d)("All notifications turned on", "PlatformNotificationSettings") : Object(p.d)("All notifications turned off", "PlatformNotificationSettings")
                }, t.prototype.getGlobalStateForPlatform = function() {
                    var e = this.getSettingByCategory("ALL");
                    return !!e && e.isEnabled
                }, t.prototype.renderToggles = function() {
                    for (var e = [], t = 0, n = this.VisibleSettings; t < n.length; t++) {
                        var i = n[t],
                            a = this.getSettingByCategory(i.category);
                        a && e.push(d.createElement(V, {
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
            }(d.Component),
            W = Object(o.compose)(Object(m.c)("PlatformNotificationSettings"), Object(E.a)(G, {
                options: function() {
                    return {
                        fetchPolicy: "cache-and-network"
                    }
                }
            }), Object(E.a)(z, {
                name: "setNotificationSetting"
            }))(H),
            q = (n("nq6q"), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return c.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.onRender()
                }, t.prototype.componentDidUpdate = function() {
                    this.onRender()
                }, t.prototype.render = function() {
                    return d.createElement(k.b, {
                        className: "notification-settings"
                    }, d.createElement(C.U, {
                        padding: 3
                    }, d.createElement(C._18, {
                        className: "notification-settings__body",
                        borderRight: !0,
                        borderLeft: !0,
                        borderTop: !0
                    }, d.createElement(C._18, {
                        background: C.m.Alt,
                        padding: {
                            x: 2,
                            y: 1
                        },
                        borderBottom: !0
                    }, d.createElement(C.U, {
                        margin: {
                            bottom: .5
                        }
                    }, d.createElement(C._22, {
                        fontSize: C.L.Size3,
                        color: C.F.Alt
                    }, Object(p.d)("Notifications", "SettingsNotificationsPage"))), d.createElement(C.U, null, d.createElement(C._22, {
                        fontSize: C.L.Size5,
                        color: C.F.Alt2
                    }, Object(p.d)("Get the notifications you care about, where you want to see them.", "SettingsNotificationsPage")))), d.createElement(W, {
                        startCollapsed: !1,
                        platformName: i.onsite,
                        displayName: Object(p.d)("On Twitch", "SettingsNotificationsPage"),
                        description: Object(p.d)("We'll always keep you informed on important updates to Twitch and your account.", "SettingsNotificationsPage"),
                        explanation: Object(p.d)("Send me notifications on Twitch about", "SettingsNotificationsPage"),
                        key: "onsite",
                        extraSettings: this.renderBrowserPushNotifications()
                    }), d.createElement(W, {
                        startCollapsed: !0,
                        platformName: i.email,
                        displayName: Object(p.d)("By Email", "SettingsNotificationsPage"),
                        description: Object(p.d)("Receive important notifications through email. You may receive additional emails about features and content on Twitch. You can turn off specific emails using the unsubscribe link included in each message.", "SettingsNotificationsPage"),
                        explanation: Object(p.d)("Send me emails about", "SettingsNotificationsPage"),
                        key: "email"
                    }), d.createElement(W, {
                        platformName: i.push,
                        startCollapsed: !0,
                        displayName: Object(p.d)("On Mobile", "SettingsNotificationsPage"),
                        description: Object(p.d)("Get Twitch updates on the go. Receive notifications right on your phone's home screen.", "SettingsNotificationsPage"),
                        explanation: Object(p.d)("Send me push notifications", "SettingsNotificationsPage"),
                        key: "push"
                    }), d.createElement(F, null))))
                }, t.prototype.renderBrowserPushNotifications = function() {
                    return p.b.get(_.b, !1) && Object(N.a)() && !Object(w.a)() ? d.createElement(B, null) : null
                }, t.prototype.onRender = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t = c.__decorate([Object(m.c)("SettingsNotificationsPage", {
                    destination: b.a.NotificationSettingsPage
                }), Object(h.a)({
                    location: v.PageviewLocation.SettingsPage
                })], t)
            }(d.Component)),
            Y = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return c.__extends(t, e), t.prototype.render = function() {
                    return null
                }, t = c.__decorate([Object(m.c)("SettingsPrimePage", {
                    autoReportInteractive: !0,
                    destination: b.a.SettingsPrime
                }), Object(h.a)({
                    location: v.PageviewLocation.SettingsPage
                })], t)
            }(d.Component),
            K = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return c.__extends(t, e), t.prototype.render = function() {
                    return null
                }, t = c.__decorate([Object(m.c)("SettingsProfilePage", {
                    autoReportInteractive: !0,
                    destination: b.a.SettingsProfile
                }), Object(h.a)({
                    location: v.PageviewLocation.SettingsPage
                })], t)
            }(d.Component),
            J = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return c.__extends(t, e), t.prototype.render = function() {
                    return null
                }, t = c.__decorate([Object(m.c)("SettingsSecurityPage", {
                    autoReportInteractive: !0,
                    destination: b.a.SettingsSecurity
                }), Object(h.a)({
                    location: v.PageviewLocation.SettingsPage
                })], t)
            }(d.Component);
        ! function(e) {
            e.Channel = "channel", e.Notifications = "notifications", e.Profile = "profile", e.Security = "security", e.Connections = "connections", e.Prime = "prime", e.Turbo = "turbo"
        }(R || (R = {}));
        var $ = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return c.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return d.createElement(C.U, {
                        className: "settings-tabs"
                    }, d.createElement(C.U, {
                        margin: {
                            bottom: 1
                        }
                    }, d.createElement(C._22, {
                        type: C._27.H2
                    }, Object(p.d)("Settings", "SettingsTabs"))), d.createElement(C.U, {
                        margin: {
                            bottom: 2
                        }
                    }, d.createElement(C._20, null, d.createElement(C._19, {
                        linkTo: "/settings/profile",
                        active: this.props.match.params.tab === R.Profile
                    }, Object(p.d)("Profile", "SettingsTabs")), d.createElement(C._19, {
                        linkTo: "/settings/prime",
                        active: this.props.match.params.tab === R.Prime
                    }, Object(p.d)("Prime", "SettingsTabs")), d.createElement(C._19, {
                        linkTo: "/settings/channel",
                        active: this.props.match.params.tab === R.Channel
                    }, Object(p.d)("Channel and Videos", "SettingsTabs")), d.createElement(C._19, {
                        linkTo: "/settings/security",
                        active: this.props.match.params.tab === R.Security
                    }, Object(p.d)("Security and Privacy", "SettingsTabs")), d.createElement(C._19, {
                        linkTo: "/settings/notifications",
                        active: this.props.match.params.tab === R.Notifications
                    }, Object(p.d)("Notifications", "SettingsTab")), d.createElement(C._19, {
                        linkTo: "/settings/connections",
                        active: this.props.match.params.tab === R.Connections
                    }, Object(p.d)("Connections", "SettingsTabs")), d.createElement(C._19, {
                        linkTo: "/subscriptions",
                        active: !1
                    }, Object(p.d)("Subscriptions", "SettingsTabs")))))
                }, t = c.__decorate([Object(m.c)("SettingsTabs")], t)
            }(d.Component),
            Q = Object(u.e)($),
            X = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.redirectToProfilePage = function() {
                        return d.createElement(u.a, {
                            to: "/settings/profile"
                        })
                    }, t
                }
                return c.__extends(t, e), t.prototype.render = function() {
                    return this.props.isLoggedIn ? d.createElement(C.U, {
                        padding: 3
                    }, d.createElement(Q, null), d.createElement(f.b, {
                        addPaddingWhenPlayerIsPersisting: !0
                    }), d.createElement(u.d, null, d.createElement(u.b, {
                        path: "/settings/profile",
                        component: K
                    }), d.createElement(u.b, {
                        path: "/settings/prime",
                        component: Y
                    }), d.createElement(u.b, {
                        path: "/settings/channel",
                        component: S
                    }), d.createElement(u.b, {
                        path: "/settings/security",
                        component: J
                    }), d.createElement(u.b, {
                        path: "/settings/notifications",
                        component: q
                    }), d.createElement(u.b, {
                        path: "/settings/connections",
                        component: y
                    }), d.createElement(u.b, {
                        path: "/settings",
                        render: this.redirectToProfilePage
                    }))) : (this.props.login(), d.createElement(g.a, {
                        message: Object(p.d)("You must be logged in to view this page", "SettingsRoot")
                    }))
                }, t = c.__decorate([Object(m.c)("SettingsRoot", {
                    autoReportInteractive: !0
                })], t)
            }(d.Component),
            Z = Object(a.a)(function(e) {
                return {
                    isLoggedIn: Object(l.d)(e)
                }
            }, function(e) {
                return Object(o.bindActionCreators)({
                    login: function() {
                        return Object(s.f)(r.a.SettingsPage)
                    }
                }, e)
            })(X);
        n.d(t, "SettingsRoot", function() {
            return Z
        })
    },
    LBNC: function(e, t, n) {
        "use strict";
        t.a = function() {
            return "serviceWorker" in window.navigator && "PushManager" in window
        }
    },
    OOv5: function(e, t, n) {
        "use strict";

        function i() {
            if (f) return f;
            var e = m.register({
                scope: "/"
            });
            return f = e || Promise.reject(new Error("service worker runtime not available"))
        }
        var a, o = n("TToO"),
            r = n("6sO2"),
            s = n("oIkB"),
            l = n("Aj/L");
        ! function(e) {
            e.NewSession = "new-session", e.ClearSession = "clear-session"
        }(a || (a = {}));
        var c = r.n.logger.withCategory("host-service-worker-messenger"),
            d = function() {
                function e() {}
                return e.syncSession = function() {
                    var e = Object(l.c)(r.n.store.getState());
                    if (e) {
                        var t = e.id;
                        this.sendMessage({
                            type: a.NewSession,
                            userId: t
                        })
                    } else this.sendMessage({
                        type: a.ClearSession
                    })
                }, e.sendMessage = function(e) {
                    var t = this;
                    if (navigator.serviceWorker.controller) this.postMessage(e);
                    else {
                        c.debug("cannot postMessage immediately. waiting for a service worker to take control");
                        var n = function() {
                            c.debug("controller changed", {
                                controllerExists: !!navigator.serviceWorker.controller
                            }), navigator.serviceWorker.removeEventListener("controllerchange", n), t.postMessage(e)
                        };
                        navigator.serviceWorker.addEventListener("controllerchange", n)
                    }
                }, e.postMessage = function(e) {
                    navigator.serviceWorker.controller ? (c.debug("postMessage", e), navigator.serviceWorker.controller.postMessage(JSON.stringify(e))) : c.error(new Error("navigator.serviceWorker.controller is null"), "postMessage called with no controlling service worker")
                }, e
            }(),
            u = "browserPushNotificationsEnabled",
            p = function() {
                function e() {}
                return e.exists = function() {
                    return null !== r.n.storage.getOptional(u)
                }, e.isEnabled = function() {
                    return r.n.storage.get(u, !1)
                }, e.setEnabled = function() {
                    r.n.storage.set(u, !0)
                }, e.setDisabled = function() {
                    r.n.storage.set(u, !1)
                }, e
            }(),
            g = n("UbVv"),
            m = n("F2sf"),
            f = null,
            h = n("JBcW"),
            b = n("TbkX");
        n.d(t, "a", function() {
            return S
        });
        var v = r.n.logger.withCategory("browser-push-notifications-manager"),
            S = function() {
                function e() {}
                return e.initialize = function() {
                    return this.initPromise ? this.initPromise : (this.initPromise = this.initializationLogic(), this.initPromise)
                }, e.initializationLogic = function() {
                    return o.__awaiter(this, void 0, void 0, function() {
                        var e, t, n, a;
                        return o.__generator(this, function(o) {
                            switch (o.label) {
                                case 0:
                                    return Object(g.a)() ? (v.debug("permissions have been denied. nothing to do here."), [2]) : [4, i()];
                                case 1:
                                    return o.sent(), e = Object(l.d)(r.n.store.getState()), [4, this.hasPushSubscription()];
                                case 2:
                                    return t = o.sent(), d.syncSession(), t ? (n = p.exists() && !p.isEnabled(), a = !e, n || a ? [4, this.unsubscribe()] : [3, 4]) : [3, 5];
                                case 3:
                                    o.sent(), o.label = 4;
                                case 4:
                                    return [3, 7];
                                case 5:
                                    return l.d ? !Object(g.b)() || p.exists() && !p.isEnabled() ? [3, 7] : [4, this.subscribe()] : [3, 7];
                                case 6:
                                    o.sent(), o.label = 7;
                                case 7:
                                    return [2]
                            }
                        })
                    })
                }, e.userSubscribe = function(e) {
                    return o.__awaiter(this, void 0, void 0, function() {
                        return o.__generator(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return p.setEnabled(), [4, this.subscribe()];
                                case 1:
                                    return t.sent(), Object(h.c)({
                                        allowed: Object(g.b)(),
                                        context: e
                                    }), [2]
                            }
                        })
                    })
                }, e.userUnsubscribe = function(e) {
                    return o.__awaiter(this, void 0, void 0, function() {
                        return o.__generator(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return p.setDisabled(), [4, this.unsubscribe()];
                                case 1:
                                    return t.sent(), Object(h.b)({
                                        context: e
                                    }), [2]
                            }
                        })
                    })
                }, e.hasPushSubscription = function() {
                    return o.__awaiter(this, void 0, void 0, function() {
                        return o.__generator(this, function(e) {
                            switch (e.label) {
                                case 0:
                                    return [4, this.getPushSubscription()];
                                case 1:
                                    return [2, null !== e.sent()]
                            }
                        })
                    })
                }, e.subscribe = function() {
                    return o.__awaiter(this, void 0, void 0, function() {
                        var e, t, n, a, c, d;
                        return o.__generator(this, function(u) {
                            switch (u.label) {
                                case 0:
                                    if (Object(g.a)()) throw new Error("notification permission is denied");
                                    if (!Object(l.d)(r.n.store.getState())) throw new Error("cannot be enabled logged out");
                                    if (!(e = r.b.get("notification_app_server_public_key", ""))) throw new Error("application server public key is blank");
                                    return [4, i()];
                                case 1:
                                    return t = u.sent(), [4, this.getPushSubscription()];
                                case 2:
                                    return (n = u.sent()) ? [3, 4] : (a = function(e) {
                                        for (var t = (e + "=".repeat((4 - e.length % 4) % 4)).replace(/\-/g, "+").replace(/_/g, "/"), n = atob(t), i = new Uint8Array(n.length), a = 0; a < n.length; ++a) i[a] = n.charCodeAt(a);
                                        return i
                                    }(e), [4, t.pushManager.subscribe({
                                        userVisibleOnly: !0,
                                        applicationServerKey: a
                                    })]);
                                case 3:
                                    n = u.sent(), u.label = 4;
                                case 4:
                                    if (!(c = n.toJSON()).endpoint) throw new Error("push subscription 'endpoint' missing");
                                    if (!c.keys) throw new Error("push subscription 'keys' missing");
                                    if (!c.keys.auth) throw new Error("push subscription 'keys.auth' missing");
                                    if (!c.keys.p256dh) throw new Error("push subscription 'keys.p256dh' missing");
                                    return d = Object(s.a)({
                                        endpoint: c.endpoint,
                                        auth: c.keys.auth,
                                        p256DH: c.keys.p256dh
                                    }), [4, r.n.apollo.client.mutate(o.__assign({
                                        mutation: b
                                    }, d))];
                                case 5:
                                    return u.sent(), [2]
                            }
                        })
                    })
                }, e.unsubscribe = function() {
                    return o.__awaiter(this, void 0, void 0, function() {
                        var e;
                        return o.__generator(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return [4, this.getPushSubscription()];
                                case 1:
                                    return (e = t.sent()) ? [4, e.unsubscribe()] : [2];
                                case 2:
                                    if (!t.sent()) throw new Error("push subscription unsubscribe unexpectedly failed");
                                    return [2]
                            }
                        })
                    })
                }, e.getPushSubscription = function() {
                    return o.__awaiter(this, void 0, void 0, function() {
                        var e, t;
                        return o.__generator(this, function(n) {
                            switch (n.label) {
                                case 0:
                                    return [4, i()];
                                case 1:
                                    return e = n.sent(), [4, e.pushManager.getSubscription()];
                                case 2:
                                    return (t = n.sent()) ? [2, t] : [2, null]
                            }
                        })
                    })
                }, e
            }()
    },
    RC0U: function(e, t) {},
    TbkX: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "BrowserPushNotifications_AddBrowserPushSubscription"
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
                                value: "AddBrowserPushSubscriptionInput"
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
                            value: "addBrowserPushSubscription"
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
                                    value: "browserPushSubscriptionID"
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
                end: 178
            }
        };
        n.loc.source = {
            body: "mutation BrowserPushNotifications_AddBrowserPushSubscription($input: AddBrowserPushSubscriptionInput!) {\naddBrowserPushSubscription(input: $input) {\nbrowserPushSubscriptionID\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    UbVv: function(e, t, n) {
        "use strict";
        t.a = function() {
            return window.Notification && "denied" === window.Notification.permission
        }, t.b = function() {
            return window.Notification && "granted" === window.Notification.permission
        }
    },
    WbwR: function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            a = n("U7vG"),
            o = n("6sO2"),
            r = n("OOv5"),
            s = n("LBNC"),
            l = "browser_notifications_launch",
            c = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.logger = o.n.logger.withCategory("browser-push-notifications"), t
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    return i.__awaiter(this, void 0, void 0, function() {
                        var e;
                        return i.__generator(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    if (!o.b.get(l, !1)) return [2];
                                    if (!Object(s.a)()) return this.logger.debug("unsupported browser"), [2];
                                    t.label = 1;
                                case 1:
                                    return t.trys.push([1, 3, , 4]), [4, r.a.initialize()];
                                case 2:
                                    return t.sent(), [3, 4];
                                case 3:
                                    return e = t.sent(), this.logger.error(e, "push manager initialization unexpectedly failed"), [3, 4];
                                case 4:
                                    return [2]
                            }
                        })
                    })
                }, t.prototype.render = function() {
                    return null
                }, t
            }(a.Component);
        n.d(t, "b", function() {
            return l
        }), n.d(t, "a", function() {
            return c
        })
    },
    "g+dK": function(e, t) {
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
                end: 155
            }
        };
        n.loc.source = {
            body: "mutation GlobalNotificationSettings_SetNotificationSetting($input: SetNotificationSettingInput!) {\nsetNotificationSetting(input: $input) {\nsettingState\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    hPJb: function(e, t) {},
    iOZM: function(e, t) {},
    "j7/Y": function(e, t, n) {
        "use strict";

        function i(e) {
            return function(t) {
                var n = function(n) {
                    function i(t) {
                        var i = n.call(this, t) || this;
                        return i.tracked = !1, i.referenceTracking = {}, i.trackPageview = function() {
                            if (!(i.tracked || e.skip && e.skip(i.props))) {
                                i.tracked = !0, l.n.adBlockSentinel.pageTransition();
                                var t = {};
                                "function" == typeof e.properties ? t = e.properties(i.props) : e.properties && (t = a.__assign({}, e.properties));
                                var n = a.__assign({}, i.props);
                                n.location && n.location.state && (t.medium = n.location.state.medium, t.content = n.location.state.content, t.content_index = n.location.state.content_index);
                                var o = i.referenceTracking,
                                    r = o.content,
                                    s = o.medium,
                                    c = o.content_index;
                                l.n.tracking.trackPageview(a.__assign({
                                    content: r,
                                    medium: s,
                                    content_index: c,
                                    location: e.location
                                }, t))
                            }
                        }, l.i.debug("pageViewTracking", e), t.rootLatencyTracker ? t.rootLatencyTracker.setLocation(e.location) : l.i.warn("No latency tracker exists! This means no data will be sent to Spade.", e), i
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
                return Object(s.f)(n)
            }
        }
        var a = n("TToO"),
            o = n("OAwv"),
            r = n("U7vG"),
            s = n("F8kA"),
            l = n("6sO2");
        n.d(t, "a", function() {
            return i
        })
    },
    mVHD: function(e, t) {},
    nq6q: function(e, t) {},
    t4xU: function(e, t) {},
    w9tK: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return i
        });
        var i = {
            BrowseCommunities: "browse.communities",
            BrowseCreative: "browse.creative",
            BrowseGamesAndCommunities: "browse.games-and-communities",
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
            ForYou: "for-you",
            Index: "index",
            MyClipsManager: "videoManager.clips",
            NotificationSettingsPage: "settings.notificationSettings",
            OnboardingIndex: "onboarding.index",
            ReportUserPage: "reportUser.page",
            SettingsChannel: "private/embed-components",
            SettingsConnections: "private/embed-components",
            SettingsNotifications: "settings.notifications",
            SettingsPrime: "settings.prime",
            SettingsProfile: "settings.profile",
            SettingsSecurity: "private/embed-components",
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
    }
});
//# sourceMappingURL=pages.settings-1d0d2d8b63864c9ba2ca779596ee777d.js.map