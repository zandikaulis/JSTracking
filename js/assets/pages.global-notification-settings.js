webpackJsonp([50], {
    "0ERg": function(e, t) {},
    "7KN8": function(e, t) {},
    "9pUU": function(e, t) {},
    CGjl: function(e, t) {
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
    Gsz8: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i, a = n("TToO"),
            o = n("U7vG"),
            r = n("6sO2"),
            s = n("zCIC"),
            l = n("czpb"),
            c = n("NY9D"),
            d = n("CSlQ"),
            u = n("Odds");
        (i || (i = {})).Notifications = "notifications";
        var g, p = function(e) {
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
                    }, o.createElement(u._22, {
                        type: u._27.H2
                    }, Object(r.d)("Settings", "SettingsTabs"))), o.createElement(u.U, {
                        margin: {
                            bottom: 2
                        }
                    }, o.createElement(u._20, null, o.createElement(u._19, {
                        targetBlank: Object(l.b)(),
                        linkTo: Object(l.a)("/settings/profile"),
                        active: !1
                    }, Object(r.d)("Profile", "SettingsTabs")), o.createElement(u._19, {
                        linkTo: Object(l.a)("/settings/prime"),
                        active: !1
                    }, Object(r.d)("Prime", "SettingsTabs")), o.createElement(u._19, {
                        targetBlank: Object(l.b)(),
                        linkTo: Object(l.a)("/settings/channel"),
                        active: !1
                    }, Object(r.d)("Channel and Videos", "SettingsTabs")), o.createElement(u._19, {
                        targetBlank: Object(l.b)(),
                        linkTo: Object(l.a)("/settings/security"),
                        active: !1
                    }, Object(r.d)("Security and Privacy", "SettingsTabs")), o.createElement(u._19, {
                        linkTo: Object(c.d)(i.Notifications),
                        active: this.props.activeTab === i.Notifications,
                        "data-a-target": "following-channels-tab"
                    }, Object(r.d)("Notifications", "SettingsTab")), o.createElement(u._19, {
                        targetBlank: Object(l.b)(),
                        linkTo: Object(l.a)("/settings/connections"),
                        active: !1
                    }, Object(r.d)("Connections", "SettingsTabs")), o.createElement(u._19, {
                        targetBlank: Object(l.b)(),
                        linkTo: Object(l.a)("/subscriptions"),
                        active: !1
                    }, Object(r.d)("Subscriptions", "SettingsTabs")))))
                }, t = a.__decorate([Object(d.c)("SettingsTabs")], t)
            }(o.Component),
            m = n("j7/Y"),
            f = n("w9tK"),
            h = n("vH/s"),
            b = n("WbwR"),
            v = n("LBNC"),
            S = n("UbVv"),
            y = n("2KeS"),
            k = n("yWCw"),
            w = n("7vx8"),
            N = n("oIkB"),
            _ = n("F8kA"),
            E = (n("0ERg"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.changeHandler = function() {
                        t.props.onChange(t.props.userId, t.props.isEnabled)
                    }, t
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    return o.createElement(u._18, {
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
                    }, o.createElement(u._22, {
                        fontSize: u.L.Size5
                    }, o.createElement(_.a, {
                        to: "/" + this.props.login
                    }, this.props.text)), o.createElement(u._22, {
                        type: u._27.Span,
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
                    }, o.createElement(u._22, {
                        fontSize: u.L.Size5,
                        color: u.F.Link
                    }, Object(r.d)("Saved", "AdvancedNotificationSettingsToggle"))))))
                }, t
            }(o.Component)),
            O = n("RcGI"),
            x = (n("9pUU"), n("aTeI")),
            P = function(e) {
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
                                        return this.props.data && this.props.data.currentUser && this.props.setAdvancedNotificationSetting ? (t = a.__assign({}, Object(N.a)({
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
                                        }, Object(N.d)(x, {
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
                    if (!this.props.data || this.props.data.loading && !this.props.data.currentUser) return o.createElement(u._18, {
                        padding: {
                            y: 1
                        },
                        borderBottom: !0
                    }, o.createElement(u.Y, {
                        fillContent: !0
                    }));
                    if (this.props.data.error) return o.createElement(k.a, {
                        message: Object(r.d)("Error loading data.", "AdvancedNotificationSettings")
                    });
                    if (!this.props.data.currentUser) return o.createElement(u._18, {
                        padding: {
                            y: 1
                        },
                        borderBottom: !0
                    }, o.createElement(k.a, {
                        message: Object(r.d)("You must be logged in to update your settings", "AdvancedNotificationSettings")
                    }));
                    var e = Object(r.d)("{followCount, plural, one {You follow # channel} other {You follow # channels}}", {
                            followCount: this.props.data.currentUser.follows.totalCount
                        }, "AdvancedNotificationSettings"),
                        t = o.createElement(u._18, {
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
                        }, o.createElement(u._22, {
                            fontSize: u.L.Size5,
                            color: u.F.Alt2,
                            bold: !0
                        }, Object(r.d)("Advanced", "AdvancedNotificationSettings"))), o.createElement(u.U, {
                            padding: {
                                x: 1
                            },
                            flexGrow: 1
                        }, o.createElement(u._22, {
                            "data-test-selector": "description-selector",
                            fontSize: u.L.Size5,
                            color: u.F.Alt2
                        }, e)), o.createElement(u.U, {
                            className: this.state.collapsed ? "advanced-notification-settings--collapse" : "advanced-notification-settings--expand",
                            flexGrow: 0,
                            flexShrink: 1,
                            display: u.H.Flex,
                            justifyContent: u.T.Center
                        }, o.createElement(u._9, {
                            asset: u._10.AngleRight,
                            type: u._11.Alt2
                        }))))),
                        n = !this.props.data.loading && !this.props.data.error && !!this.props.data.currentUser.follows.pageInfo.hasNextPage;
                    return this.props.data.currentUser.follows.totalCount > 0 ? this.state.collapsed ? o.createElement(u._18, null, t) : o.createElement(u._18, null, t, o.createElement(u._18, {
                        borderBottom: !0,
                        padding: 2
                    }, o.createElement(u.U, {
                        padding: {
                            bottom: 1
                        }
                    }, o.createElement(u._22, {
                        fontSize: u.L.Size5,
                        color: u.F.Alt2
                    }, Object(r.d)("Manage which channels you receive notifications for.", "AdvancedNotificationSettings"))), o.createElement(u.U, {
                        padding: {
                            bottom: 1
                        }
                    }, o.createElement(u._22, {
                        fontSize: u.L.Size4,
                        color: u.F.Alt
                    }, e)), o.createElement(u._18, {
                        className: "advanced-notification-settings__toggle-container",
                        borderTop: !0,
                        borderLeft: !0,
                        borderRight: !0,
                        margin: {
                            bottom: .5
                        }
                    }, this.renderToggles(), o.createElement(s.a, {
                        loadMore: this.props.loadMore,
                        enabled: n,
                        pixelThreshold: 200
                    })))) : null
                }, t.prototype.renderToggles = function() {
                    if (this.props.data && (!this.props.data.loading || this.props.data.currentUser)) {
                        for (var e = [], t = 0, n = this.props.data.currentUser.follows.edges; t < n.length; t++) {
                            var i = n[t];
                            i.node && i.node.id && i.node.followers && e.push(o.createElement(E, {
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
            C = Object(y.compose)(Object(w.a)(x, {
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
                                query: x,
                                variables: a.__assign({}, e.data.variables, {
                                    cursor: e.data.currentUser.follows.edges[e.data.currentUser.follows.edges.length - 1].cursor
                                }),
                                updateQuery: function(e, t) {
                                    var n = t.fetchMoreResult;
                                    return {
                                        currentUser: a.__assign({}, n.currentUser, {
                                            follows: a.__assign({}, n.currentUser.follows, {
                                                edges: Object(N.b)(e.currentUser.follows.edges, n.currentUser.follows.edges)
                                            })
                                        })
                                    }
                                }
                            })
                        }
                    })
                }
            }), Object(w.a)(O, {
                name: "setAdvancedNotificationSetting"
            }), Object(d.c)("AdvancedNotificationSettings"))(P),
            j = n("BhyV"),
            U = n("OOv5"),
            T = n("JBcW"),
            F = (n("RVY0"), r.n.logger.withCategory("browser-push-notifications-settings")),
            D = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        hide: !1,
                        loading: !0,
                        deciding: !0,
                        hasSubscription: !1
                    }, t.toggle = function() {
                        return a.__awaiter(t, void 0, void 0, function() {
                            var e, t;
                            return a.__generator(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        return this.setState({
                                            deciding: !0
                                        }), [4, U.a.hasPushSubscription()];
                                    case 1:
                                        if (!n.sent()) return [3, 6];
                                        n.label = 2;
                                    case 2:
                                        return n.trys.push([2, 4, , 5]), [4, U.a.userUnsubscribe(T.a.Settings)];
                                    case 3:
                                        return n.sent(), [3, 5];
                                    case 4:
                                        return e = n.sent(), F.error(e, "user unsubscribe failed"), [3, 5];
                                    case 5:
                                        return [3, 9];
                                    case 6:
                                        return n.trys.push([6, 8, , 9]), [4, U.a.userSubscribe(T.a.Settings)];
                                    case 7:
                                        return n.sent(), [3, 9];
                                    case 8:
                                        return t = n.sent(), Object(S.a)() ? (this.setState({
                                            hide: !0
                                        }), [2]) : (F.error(t, "user subscribe failed"), [3, 9]);
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
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    return a.__awaiter(this, void 0, void 0, function() {
                        var e;
                        return a.__generator(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return t.trys.push([0, 3, , 4]), [4, U.a.initialize()];
                                case 1:
                                    return t.sent(), [4, this.updateSubscriptionState()];
                                case 2:
                                    return t.sent(), [3, 4];
                                case 3:
                                    return e = t.sent(), F.error(e, "unexpected error initializing push manager"), this.setState({
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
                    var e = this.state.hasSubscription ? Object(r.d)("Turn Off", "BrowserPushNotificationsSettings") : Object(r.d)("Turn On", "BrowserPushNotificationsSettings");
                    return o.createElement(u._18, {
                        borderTop: !0,
                        padding: {
                            right: 2,
                            y: 1
                        },
                        margin: {
                            top: 1
                        },
                        "data-test-selector": "qa-browser-push-notifications-settings"
                    }, o.createElement(u._18, {
                        className: "browser-push-notification-settings",
                        padding: {
                            left: 5,
                            right: 4
                        },
                        display: u.H.Flex,
                        margin: {
                            x: 5
                        }
                    }, o.createElement(u.U, {
                        className: "browser-push-notification-settings__body",
                        display: u.H.Flex,
                        flexWrap: u.K.NoWrap,
                        flexGrow: 1
                    }, o.createElement(u.U, {
                        margin: {
                            right: 1
                        },
                        flexGrow: 1
                    }, o.createElement(u._22, {
                        fontSize: u.L.Size4,
                        color: u.F.Alt
                    }, Object(r.d)("Receive Browser Notifications for this Device", "BrowserPushNotificationsSettings")), o.createElement(u.U, {
                        padding: {
                            top: .5
                        }
                    }, o.createElement(u._22, {
                        fontSize: u.L.Size5,
                        color: u.F.Alt2
                    }, Object(r.d)("See notifications at the corner of your screen, even when you’re not on Twitch", "BrowserPushNotificationsSettings")))), o.createElement(u.U, {
                        flexShrink: 0
                    }, o.createElement(u.u, {
                        "data-test-selector": "qa-browser-push-notifications-settings-toggle",
                        disabled: this.state.deciding,
                        onClick: this.toggle
                    }, e)))))
                }, t.prototype.updateSubscriptionState = function() {
                    return a.__awaiter(this, void 0, void 0, function() {
                        var e;
                        return a.__generator(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return [4, U.a.hasPushSubscription()];
                                case 1:
                                    return e = t.sent(), this.setState({
                                        hasSubscription: e
                                    }), [2]
                            }
                        })
                    })
                }, t
            }(o.Component),
            A = Object(j.compose)(Object(d.c)("BrowserPushNotificationsSettings"))(D),
            G = (n("7KN8"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.changeHandler = function() {
                        t.props.onChange(t.props.category, t.props.isEnabled)
                    }, t
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    return o.createElement(u._18, {
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
                    }, o.createElement(u._22, {
                        fontSize: u.L.Size4
                    }, this.props.text)), o.createElement(u._22, {
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
                    }, o.createElement(u._22, {
                        fontSize: u.L.Size5,
                        color: u.F.Link
                    }, Object(r.d)("Saved", "PlatformNotificationSettingsToggle")))))
                }, t
            }(o.Component)),
            L = n("CGjl"),
            B = (n("jchl"), n("xZqu"));
        ! function(e) {
            e.onsite = "onsite", e.email = "email", e.push = "push"
        }(g || (g = {}));
        var M = function(e) {
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
                        name: Object(r.d)("Video Broadcast", "PlatformNotificationSettings"),
                        description: Object(r.d)("When a channel I follow starts a Vodcast. This also includes Video Comment notifications", "PlatformNotificationSettings")
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
                        category: "COMMERCE",
                        name: Object(r.d)("Gifts and Rewards", "PlatformNotificationSettings"),
                        description: Object(r.d)("Receive notifications for drops, crates, and subscription gifts", "PlatformNotificationSettings")
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
                            var t, i, o, r, s = this;
                            return a.__generator(this, function(l) {
                                switch (l.label) {
                                    case 0:
                                        return this.props.data && this.props.data.currentUser && this.props.setNotificationSetting ? (t = n ? "off" : "on", i = a.__assign({}, Object(N.a)({
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
                                        return o = l.sent(), r = function(t) {
                                            return t.currentUser.notificationSettings = t.currentUser.notificationSettings.map(function(t) {
                                                return t.category === e && (t.platforms = t.platforms.map(function(e) {
                                                    return e.platformName === s.props.platformName && (e.isEnabled = "on" === o.data.setNotificationSetting.settingState, e.settingState = o.data.setNotificationSetting.settingState), e
                                                })), t
                                            }), t
                                        }, Object(N.d)(B, {}, r), this.markSaved(e), [2]
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
                    }, o.createElement(u.Y, {
                        fillContent: !0
                    }));
                    if (this.props.data.error) return o.createElement(k.a, {
                        message: Object(r.d)("Error loading data.", "PlatformNotificationSettings")
                    });
                    if (!this.props.data.currentUser) return o.createElement(u._18, {
                        margin: {
                            top: 1
                        }
                    }, o.createElement(k.a, {
                        message: Object(r.d)("You must be logged in to update your settings.", "PlatformNotificationSettings")
                    }));
                    var e = o.createElement(u._18, {
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
                    }, o.createElement(u._22, {
                        "data-test-selector": "display-name",
                        fontSize: u.L.Size5,
                        color: u.F.Alt2,
                        bold: !0
                    }, this.props.displayName)), o.createElement(u.U, {
                        padding: {
                            x: 1
                        },
                        flexGrow: 1
                    }, o.createElement(u._22, {
                        fontSize: u.L.Size5,
                        color: u.F.Alt2
                    }, this.getSettingTurnedOnMessage())), o.createElement(u.U, {
                        className: this.state.collapsed ? "platform-notification-settings--collapse" : "platform-notification-settings--expand",
                        flexGrow: 0,
                        flexShrink: 1,
                        display: u.H.Flex,
                        justifyContent: u.T.Center
                    }, o.createElement(u._9, {
                        asset: u._10.AngleRight,
                        type: u._11.Alt2
                    })))));
                    return this.state.collapsed ? o.createElement(u._18, null, e) : o.createElement(u._18, null, e, o.createElement(u._18, {
                        padding: 2,
                        borderBottom: !0
                    }, o.createElement(u.U, {
                        padding: {
                            bottom: 1
                        }
                    }, o.createElement(u._22, {
                        "data-test-selector": "description",
                        fontSize: u.L.Size5,
                        color: u.F.Alt2
                    }, this.props.description)), o.createElement(u._18, {
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
                    }, o.createElement(u._22, {
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
                    }, o.createElement(u._22, {
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
                    return 0 !== t && this.getGlobalStateForPlatform() ? t < e ? Object(r.d)("Some notifications turned on", "PlatformNotificationSettings") : Object(r.d)("All notifications turned on", "PlatformNotificationSettings") : Object(r.d)("All notifications turned off", "PlatformNotificationSettings")
                }, t.prototype.getGlobalStateForPlatform = function() {
                    var e = this.getSettingByCategory("ALL");
                    return !!e && e.isEnabled
                }, t.prototype.renderToggles = function() {
                    for (var e = [], t = 0, n = this.VisibleSettings; t < n.length; t++) {
                        var i = n[t],
                            a = this.getSettingByCategory(i.category);
                        a && e.push(o.createElement(G, {
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
            I = Object(y.compose)(Object(d.c)("PlatformNotificationSettings"), Object(w.a)(B, {
                options: function() {
                    return {
                        fetchPolicy: "cache-and-network"
                    }
                }
            }), Object(w.a)(L, {
                name: "setNotificationSetting"
            }))(M),
            z = (n("H7Zw"), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.onRender()
                }, t.prototype.componentDidUpdate = function() {
                    this.onRender()
                }, t.prototype.render = function() {
                    return o.createElement(s.b, {
                        className: "notification-settings"
                    }, o.createElement(u.U, {
                        padding: 3
                    }, o.createElement(p, {
                        activeTab: i.Notifications
                    }), o.createElement(u._18, {
                        className: "notification-settings__body",
                        borderRight: !0,
                        borderLeft: !0,
                        borderTop: !0
                    }, o.createElement(u._18, {
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
                    }, o.createElement(u._22, {
                        fontSize: u.L.Size3,
                        color: u.F.Alt
                    }, Object(r.d)("Notifications", "GlobalNotificationSettingsPage"))), o.createElement(u.U, null, o.createElement(u._22, {
                        fontSize: u.L.Size5,
                        color: u.F.Alt2
                    }, Object(r.d)("Get the notifications you care about, where you want to see them.", "GlobalNotificationSettingsPage")))), o.createElement(I, {
                        startCollapsed: !1,
                        platformName: g.onsite,
                        displayName: Object(r.d)("On Twitch", "GlobalNotificationSettingsPage"),
                        description: Object(r.d)("We'll always keep you informed on important updates to Twitch and your account.", "GlobalNotificationSettingsPage"),
                        explanation: Object(r.d)("Send me notifications on Twitch about", "GlobalNotificationSettingsPage"),
                        key: "onsite",
                        extraSettings: this.renderBrowserPushNotifications()
                    }), o.createElement(I, {
                        startCollapsed: !0,
                        platformName: g.email,
                        displayName: Object(r.d)("By Email", "GlobalNotificationSettingsPage"),
                        description: Object(r.d)("Receive important notifications through email. You may receive additional emails about features and content on Twitch. You can turn off specific emails using the unsubscribe link included in each message.", "GlobalNotificationSettingsPage"),
                        explanation: Object(r.d)("Send me emails about", "GlobalNotificationSettingsPage"),
                        key: "email"
                    }), o.createElement(I, {
                        platformName: g.push,
                        startCollapsed: !0,
                        displayName: Object(r.d)("On Mobile", "GlobalNotificationSettingsPage"),
                        description: Object(r.d)("Get Twitch updates on the go. Receive notifications right on your phone's home screen.", "GlobalNotificationSettingsPage"),
                        explanation: Object(r.d)("Send me push notifications", "GlobalNotificationSettingsPage"),
                        key: "push"
                    }), o.createElement(C, null))))
                }, t.prototype.renderBrowserPushNotifications = function() {
                    return r.b.get(b.b, !1) && Object(v.a)() && !Object(S.a)() ? o.createElement(A, null) : null
                }, t.prototype.onRender = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t = a.__decorate([Object(d.c)("GlobalNotificationSettingsPage", {
                    destination: f.a.NotificationSettingsPage
                }), Object(m.a)({
                    location: h.PageviewLocation.SettingsPage
                })], t)
            }(o.Component));
        n.d(t, "GlobalNotificationSettingsPage", function() {
            return z
        })
    },
    H7Zw: function(e, t) {},
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
    LBNC: function(e, t, n) {
        "use strict";
        t.a = function() {
            return "serviceWorker" in window.navigator && "PushManager" in window
        }
    },
    MSvX: function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            a = n("OAwv"),
            o = n("U7vG"),
            r = n("6sO2"),
            s = n("Ejve"),
            l = "legacy_routes_enabled",
            c = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.isEnabled = !1, n.onHistoryChange = function(e, t) {
                        n.isEnabled ? "REPLACE" !== t ? e && e.pathname ? (n.logger.debug("Location changed", {
                            path: e.pathname
                        }), n.legacyRoutes.forEach(function(t) {
                            try {
                                if (e.pathname.match(t)) {
                                    n.logger.debug("Found legacy route. Reloading...");
                                    var i = "" !== e.search ? a.parse(e.search) : {};
                                    i["from-redirect"] = "true";
                                    var o = a.stringify(i),
                                        l = r.a.buildType === s.a.Dev ? window.location.host : window.location.hostname,
                                        c = window.location.protocol + "//" + l + e.pathname + "?" + o;
                                    return n.logger.debug("Redirecting to legacy route", {
                                        newUrl: c
                                    }), void window.location.replace(c)
                                }
                            } catch (e) {
                                r.i.withCategory("legacy").error(e, "Unable to determine legacy reload match", {
                                    regex: t
                                })
                            }
                        })) : n.logger.debug("Unable to process history change. Path is null or empty.") : n.logger.debug("Skipping legacy route processing, due to history replace.") : n.logger.debug("Legacy routing not enabled.")
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
                    }, n.isEnabled = r.b.get(l, !1), n.logger = r.i.withCategory("legacy-routes"), n.legacyRoutes = n.buildRoutes(), n.props.history.listen(n.onHistoryChange), n
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
            }(o.Component);
        n.d(t, "a", function() {
            return l
        }), n.d(t, !1, function() {
            return "legacy_routes"
        }), n.d(t, "b", function() {
            return c
        })
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
            g = function() {
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
            p = n("UbVv"),
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
                                    return Object(p.a)() ? (v.debug("permissions have been denied. nothing to do here."), [2]) : [4, i()];
                                case 1:
                                    return o.sent(), e = Object(l.d)(r.n.store.getState()), [4, this.hasPushSubscription()];
                                case 2:
                                    return t = o.sent(), d.syncSession(), t ? (n = g.exists() && !g.isEnabled(), a = !e, n || a ? [4, this.unsubscribe()] : [3, 4]) : [3, 5];
                                case 3:
                                    o.sent(), o.label = 4;
                                case 4:
                                    return [3, 7];
                                case 5:
                                    return l.d ? !Object(p.b)() || g.exists() && !g.isEnabled() ? [3, 7] : [4, this.subscribe()] : [3, 7];
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
                                    return g.setEnabled(), [4, this.subscribe()];
                                case 1:
                                    return t.sent(), Object(h.c)({
                                        allowed: Object(p.b)(),
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
                                    return g.setDisabled(), [4, this.unsubscribe()];
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
                                    if (Object(p.a)()) throw new Error("notification permission is denied");
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
    RVY0: function(e, t) {},
    RcGI: function(e, t) {
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
    aTeI: function(e, t) {
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
    czpb: function(e, t, n) {
        "use strict";
        var i = n("6sO2"),
            a = n("Ejve"),
            o = n("MSvX");
        t.a = function(e) {
            return i.b.get(o.a, !1) || i.a.buildType !== a.a.Production ? "string" == typeof e ? e : e.pathname || "" : "string" == typeof e ? r + e : r + e.pathname
        }, t.b = function() {
            return !i.b.get(o.a, !1) && i.a.buildType === a.a.Production
        };
        var r = "https://www.twitch.tv"
    },
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
    jchl: function(e, t) {},
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
    xZqu: function(e, t) {
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
    }
});
//# sourceMappingURL=pages.global-notification-settings-e4b882c77b2d77ae9a10bfc50cf030a4.js.map